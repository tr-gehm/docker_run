import json
import os
from datetime import datetime

from django.conf import settings
from django.http import HttpResponse, JsonResponse, Http404


# Create your views here.
from rest_framework.decorators import action
from rest_framework.exceptions import NotFound
from rest_framework.response import Response

from utils import common
from configures.models import Configures
from envs.models import Envs
from interfaces.models import Interfaces
from interfaces.serializer import InterfaceModelSerializer, InterfaceNameModelSerializer, InterfaceRunSerializer

from rest_framework import viewsets, permissions, status

from interfaces.utils import get_count_by_interface
from testcases.models import TestCases


class InterfacesViewSet(viewsets.ModelViewSet):

    """
    list:
    返回接口(多个)列表数据

    create:
    创建接口

    update:
    更新接口

    partial_update:
    更新(部分)接口

    destroy:
    逻辑删除接口

    retrieve:
    获取接口详情

    names:
    获取所有接口名称和id

    configures：
    获取接口下 配置名称和id

    testcases：
    获取接口下 测试用例名称和id
    """
    queryset = Interfaces.objects.filter(is_delete=0)
    serializer_class = InterfaceModelSerializer

    ordering_fields = ['name']
    filterset_fields = ['name', 'id']
    # 定义权限
    permission_classes = [permissions.IsAuthenticated]

    # 逻辑删除 重写。原有的destroy 是物理删除
    def perform_destroy(self, instance):
        # 修改字段 is_delete
        instance.is_delete = 1
        instance.save()

    @action(methods=['get'], detail=False)
    def names(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(instance=queryset, many=True)
        return Response(serializer.data)

    @action(methods=['get'], detail=True)
    def configs(self, request, pk=None):

        configures_objs = Configures.objects.filter(interface_id=pk, is_delete=False)
        one_list = []
        for obj in configures_objs:
            one_list.append(
                {'id': obj.id,
                 'name':obj.name})
        return Response(data=one_list)

    @action(methods=['get'], detail=True)
    def testcases(self, request, pk=None):

        testcases_objs = TestCases.objects.filter(interface_id=pk, is_delete=False)
        one_list = []
        for obj in testcases_objs:
            one_list.append(
                {'id': obj.id,
                 'name': obj.name})
        return Response(data=one_list)

    def list(self, request, *args, **kwargs):
        # 调用父类的list方法。
        response = super().list(request, *args, **kwargs)
        response.data['results'] = get_count_by_interface(response.data['results'])
        return response

    @action(methods=['post'], detail=True)
    def run(self,request, *args, **kwargs):

        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        datas = serializer.validated_data
        env_id = datas.get('env_id')
        # 创建测试用例所在目录名
        testcase_dir_path = os.path.join(settings.SUITES_DIR,
                                         datetime.strftime(datetime.now(), "%Y%m%d%H%M%S"))
        if not os.path.exists(testcase_dir_path):
            os.mkdir(testcase_dir_path)
        env = Envs.objects.filter(id=env_id, is_delete=0).first()
        # 取出接口下的所有用例
        testcase_objs = TestCases.objects.filter(is_delete=0, interface=instance)

        if not testcase_objs.exists():
            data_dict = {
                "detail": "此接口下无用例，无法运行！"
            }
            return Response(data_dict, status=status.HTTP_400_BAD_REQUEST)
            # 取出所有用例
        for one_obj in testcase_objs:
            common.generate_testcase_file(one_obj, env, testcase_dir_path)

        return common.run_testcase(instance, testcase_dir_path)

    def get_serializer_class(self):

        if self.action == 'names':
            return InterfaceNameModelSerializer
        elif self.action == 'run':
            return InterfaceRunSerializer
        else:
            return self.serializer_class



