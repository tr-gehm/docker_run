import os

from celery import Celery
from django.conf import settings


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'runapi.settings')

# 创建应用
# app = Celery(main='demo', broker='redis://:332572@127.0.0.1:6379/1')
app = Celery(main='demo',broker_url = 'amqp://admin:mypass@121.43.178.79:5673//')

# 导入配置
app.config_from_object('runapi.celeryconfig')

# 设置app自动加载任务
# 从已经安装的app中查找任务
app.autodiscover_tasks(settings.INSTALLED_APPS)
# worker启动
# celery -A Demo worker -l info
