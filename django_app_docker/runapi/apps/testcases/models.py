from django.db import models
from interfaces.models import Interfaces
from utils.base_models import BaseModel
# Create your models here.


class TestCases(BaseModel):
    id = models.AutoField(verbose_name='id主键', primary_key='True', help_text='id主键')
    name = models.CharField(verbose_name='用例名称', max_length=50, unique=True, help_text='用例名称')
    interface = models.ForeignKey('interfaces.Interfaces', on_delete=models.CASCADE,
                                verbose_name='所属接口', help_text='所属接口')
    include = models.TextField(verbose_name='前置条件', help_text='用例执行前置顺序', null=True)
    author = models.CharField(verbose_name='编写人员', max_length=200, help_text='编写人员', blank=True, default='tester',null=True)
    request = models.TextField("请求信息", help_text="请求信息")

    class Meta:
        db_table = 'tb_testcases'
        verbose_name = '用例信息'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name