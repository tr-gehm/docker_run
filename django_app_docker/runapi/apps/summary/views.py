from django.db.models import Sum
from django.shortcuts import render

# Create your views here.
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from configures.models import Configures
from debugtalks.models import DebugTalks
from envs.models import Envs
from interfaces.models import Interfaces
from projects.models import Projects
from reports.models import Reports
from testcases.models import TestCases
from testsuits.models import Testsuits


class SummaryApiView(APIView):
    """
    返回统计信息
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        """
        获取统计信息
        :param request:
        :return:
        """
        # 登录返回用户信息
        user = request.user
        user_info = {
            'username': user.username,
            'role': '管理员' if user.is_superuser else '普通用户',
            'date_joined': user.date_joined.strftime('%Y-%m-%d %H:%M:%S') if user.date_joined else '',
            'last_login': user.last_login.strftime('%Y-%m-%d %H:%M:%S') if user.last_login else '',
        }

        projects_count = Projects.objects.filter(is_delete=0).count()
        interfaces_count = Interfaces.objects.filter(is_delete=0).count()
        testcases_count = TestCases.objects.filter(is_delete=0).count()
        testsuits_count = Testsuits.objects.filter(is_delete=0).count()
        configures_count = Configures.objects.filter(is_delete=0).count()
        envs_count = Envs.objects.filter(is_delete=0).count()
        debug_talks_count = DebugTalks.objects.filter(is_delete=0).count()
        reports_count = Reports.objects.filter(is_delete=0).count()
        # 利用聚合求和。['success_sum]为返回的列表对象。
        run_testcases_success_count = Reports.objects.filter(is_delete=0).aggregate(Sum('success'))['success__sum'] or 0
        run_testcases_total_count = Reports.objects.filter(is_delete=0).aggregate(Sum('count'))['count__sum'] or 0

        if run_testcases_total_count:
            success_rate = int((run_testcases_success_count / run_testcases_total_count) * 100)
            fail_rate = 100 - success_rate
        else:
            success_rate = 0
            fail_rate = 0

        statistics = {
            'projects_count': projects_count,
            'interfaces_count': interfaces_count,
            'testcases_count': testcases_count,
            'testsuits_count': testsuits_count,
            'configures_count': configures_count,
            'envs_count': envs_count,
            'debug_talks_count': debug_talks_count,
            'reports_count': reports_count,
            'success_rate': success_rate,
            'fail_rate': fail_rate,
        }

        return Response(data={
            'user': user_info,
            'statistics': statistics
        })

