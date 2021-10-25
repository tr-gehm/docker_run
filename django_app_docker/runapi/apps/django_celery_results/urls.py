"""URLs defined for celery.

* ``/$task_id/done/``
    URL to :func:`~celery.views.is_successful`.
* ``/$task_id/status/``
    URL  to :func:`~celery.views.task_status`.
"""
# from __future__ import absolute_import, unicode_literals

from django.conf.urls import url
from django.urls import path

from . import views

task_pattern = r'(?P<task_id>[\w\d\-\.]+)'

urlpatterns = [
    path('tasks/<uuid:task_id>/done/', views.is_task_successful, name='celery-is_task_successful'),
    path('tasks/<uuid:task_id>/status/', views.task_status, name='celery-task_status'),

]
