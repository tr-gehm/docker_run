#!/usr/bin/env python
# -*- coding:utf-8 -*-
# @Time : 2021/9/16 20:25
# @Author : ASUS
# @File : XIAOMING.py
# @Software: PyCharm
import json
import re

from rest_framework import serializers


# 继承Serializer类或者 于类
from rest_framework.validators import UniqueValidator

from utils.base_serializers import RunSerializer
from interfaces.models import Interfaces
from projects.models import Projects
from testsuits.models import Testsuits


class TestsuitsModelSerializer(serializers.ModelSerializer):
    # StringRelatedField 将关联对象（模型类）的指定字段数据进行序列化输出。
    project = serializers.StringRelatedField(label='所属项目名称', help_text='所属项目名称')
    project_id = serializers.PrimaryKeyRelatedField(label='所属项目id', help_text='所属项目id',
                                                    queryset=Projects.objects.filter(is_delete=0))
    class Meta:
        # 指定参考哪一个模型类
        model = Testsuits
        exclude = ('update_time','is_delete')

        extra_kwargs = {
            'create_time': {
                'read_only': True,
                'format':"%Y-%m-%d %H:%M:%S"
            },
            'update_time': {
                'read_only': True,
                'format':"%Y-%m-%d %H:%M:%S"
            }
        }

    def validate_include(self, attr):
        result = re.match(r'^\[\d+(, *\d+)*\]$', attr)
        if result is None:
            raise serializers.ValidationError('include参数格式有误')

        # 取出匹配成功之后的数据
        result = result.group()
        try:
            data = json.loads(result)
        except Exception:
            raise serializers.ValidationError('include参数格式有误')

        for item in data:
            if not Interfaces.objects.filter(id=item).exists():
                raise serializers.ValidationError('接口id不存在')
        return attr

    def create(self, validated_data):
        # 用了上面的序列化之后 即使前端传给我id 我这边也是接受到了项目名称。
        project = validated_data.pop('project_id')
        validated_data['project'] = project
        interface = Testsuits.objects.create(**validated_data)
        return interface

    def update(self, instance, validated_data):
        # 修改和创建一样。
        if 'project_id' in validated_data:
            project = validated_data.pop('project_id')
            validated_data['project'] = project
        return super().update(instance, validated_data)


class TestsuitRunSerializer(RunSerializer):

    class Meta(RunSerializer.Meta):
        model = Testsuits




