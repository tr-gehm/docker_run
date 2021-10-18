#!/usr/bin/env python
# -*- coding:utf-8 -*-
# @Time : 2021/9/5 15:44
# @Author : ASUS
# @File : XIAOMING.py
# @Software: PyCharm

from django.urls import path, include, re_path
from rest_framework_jwt.views import obtain_jwt_token
from . import views
# from .views import index


urlpatterns = [
    path('login/', obtain_jwt_token),
    path('register/', views.RegisterView.as_view()),
    path('logout/<pk>/', views.LogOutView.as_view()),

    re_path(r'^(?P<username>\w{6,20})/count/$',
            views.UsernameValidateView.as_view(), name='check_username'),
    re_path(r'^(?P<email>[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+)/count/$',
            views.EmailValidateView.as_view(), name='check_email'),
]

