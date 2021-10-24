import time

from django.conf import settings
from httprunner.task import HttpRunner
from runapi.celery import app
from utils import common


@app.task
def my_task1():
    print('开始执行任务1')
    time.sleep(2)
    print('任务1执行结束')
    return "成功"


@app.task
def run_testcase(instance, testcase_dir_path):
    return common.run_testcase(instance, testcase_dir_path)

