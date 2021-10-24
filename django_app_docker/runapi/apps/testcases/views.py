import json
import os
from datetime import datetime

from django.conf import settings
from django.http import HttpResponse, JsonResponse, Http404


# Create your views here.
from rest_framework.decorators import action
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from rest_framework import viewsets, permissions

from envs.models import Envs
from interfaces.models import Interfaces
from utils import common
from utils.handle_datas import handle_data1, handle_data4, handle_data2, handle_data6, handle_data3, handle_data5
from utils import handle_datas
from .models import TestCases
from .serializer import TestcasesSerializer, TestcasesRunSerializer
from .tasks import my_task1, run_testcase


class TestcasesViewSet(viewsets.ModelViewSet):

    """
    list:
    返回项目(多个)列表数据

    create:
    创建项目

    update:
    更新项目

    partial_update:
    更新(部分)项目

    destroy:
    逻辑删除

    names:
    返回所有项目ID和名称

    interfaces:
    返回某个项目的所有接口信息(ID和名称)
    """
    queryset = TestCases.objects.filter(is_delete=0)
    serializer_class = TestcasesSerializer
    ordering_fields = ['name', 'id']


    permission_classes = [permissions.IsAuthenticated]
    # 可以使用action装饰器声明自定义的动作
    # 默认情况下，这一个实例方法名就是动作名
    # method,指定动作支持的方法，默认为get
    # detail详情。用于指定该动作处理的是否为详情资源对象(url).url是否需要传递pk值。粗暴理解就是是否传id为True。否则为Fasle

    # 逻辑删除 重写。原有的destroy 是物理删除
    def perform_destroy(self, instance):
        # 修改字段 is_delete
        instance.is_delete = 1
        instance.save()

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object() # type: Testcases
        try:
            testcase_include = json.loads(instance.include, encoding='utf-8')
        except Exception:
            testcase_include = dict()

        try:
            testcase_request = json.loads(instance.request, encoding='utf-8')
        except Exception:
            return Response({'msg': '用例格式有误', 'status': 400}, status=400)

        testcase_request_data = testcase_request.get('test').get('request')
        # 获取json参数
        json_data = testcase_request_data.get('json')
        json_data_str = json.dumps(json_data, ensure_ascii=False)

        # 获取extract参数
        extract_data = testcase_request.get('test').get('extract')
        extract_data = handle_datas.handle_data3(extract_data)

        # 获取validate参数
        validate_data = testcase_request.get('test').get('validate')
        validate_data = handle_datas.handle_data1(validate_data)

        # 获取variables参数
        variables_data = testcase_request.get('test').get('variables')
        variables_data = handle_datas.handle_data2(variables_data)

        # 获取parameters参数
        parameters_data = testcase_request.get('test').get('parameters')
        parameters_data = handle_datas.handle_data3(parameters_data)

        # 获取setup_hooks参数
        setup_hooks_data = testcase_request.get('test').get('setup_hooks')
        setup_hooks_data = handle_datas.handle_data5(setup_hooks_data)

        # 获取teardown_hooks参数
        teardown_hooks_data = testcase_request.get('test').get('teardown_hooks')
        teardown_hooks_data = handle_datas.handle_data5(teardown_hooks_data)

        data = {
            "author": instance.author,
            "testcase_name": instance.name,
            "selected_configure_id": testcase_include.get('config'),
            "selected_interface_id": instance.interface_id,
            "selected_project_id": instance.interface.project_id,
            "selected_testcase_id": testcase_include.get('testcases', []),
            "method": testcase_request_data.get('method'),
            "url": testcase_request_data.get('url'),
            "param": handle_datas.handle_data4(testcase_request_data.get('params')),
            "header": handle_datas.handle_data4(testcase_request_data.get('headers')),
            "variable": handle_datas.handle_data2(testcase_request_data.get('data')),
            "jsonVariable": json_data_str,
            "extract": extract_data,
            "validate": validate_data,
            # 用例的当前配置（variables）
            "globalVar": variables_data,
            "parameterized": parameters_data,
            "setupHooks": setup_hooks_data,
            "teardownHooks":teardown_hooks_data
        }

        return Response(data, status=200)

    @action(methods=['post'], detail=True)
    def run(self,request, *args, **kwargs):
        res = {"ret": False}
        # 1、取出用例模型对象并获取env_id
        instance = self.get_object()
        serializer = self.get_serializer(instance=instance, data=request.data)
        # 校验数据是否正确
        serializer.is_valid(raise_exception=True)
        datas = serializer.validated_data

        env_id = datas.get('env_id')

        # 2、创建以时间戳命名的目录
        dirname = datetime.strftime(datetime.now(), "%Y%m%d%H%M%S")
        testcase_dir_path = os.path.join(settings.SUITES_DIR, dirname)
        os.makedirs(testcase_dir_path)
        # 获取环境变量
        env = Envs.objects.filter(id=env_id, is_delete=0).first()

        # 3、创建以项目名命名的目录
        # 4、生成debugtalks.py、yaml用例文件
        common.generate_testcase_file(instance, env, testcase_dir_path)

        # 5、运行用例并生成测试报告
        task_obj = run_testcase.delay(instance, testcase_dir_path)
        # return common.run_testcase(instance, testcase_dir_path)

        res["task_id"] = task_obj.id
        res["ret"] = True
        res["msg"] = "用例运行成功"
        return Response(res)



    def get_serializer_class(self):
        return TestcasesRunSerializer if self.action == 'run' else self.serializer_class

