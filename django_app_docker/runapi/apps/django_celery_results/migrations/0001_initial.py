# Generated by Django 3.2.7 on 2021-10-24 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TaskResult',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_id', models.CharField(db_index=True, help_text='Celery ID for the Task that was run', max_length=255, unique=True, verbose_name='Task ID')),
                ('task_name', models.CharField(db_index=True, help_text='Name of the Task which was run', max_length=255, null=True, verbose_name='Task Name')),
                ('task_args', models.TextField(help_text='JSON representation of the positional arguments used with the task', null=True, verbose_name='Task Positional Arguments')),
                ('task_kwargs', models.TextField(help_text='JSON representation of the named arguments used with the task', null=True, verbose_name='Task Named Arguments')),
                ('status', models.CharField(choices=[('FAILURE', 'FAILURE'), ('PENDING', 'PENDING'), ('RECEIVED', 'RECEIVED'), ('RETRY', 'RETRY'), ('REVOKED', 'REVOKED'), ('STARTED', 'STARTED'), ('SUCCESS', 'SUCCESS')], db_index=True, default='PENDING', help_text='Current state of the task being run', max_length=50, verbose_name='Task State')),
                ('worker', models.CharField(db_index=True, default=None, help_text='Worker that executes the task', max_length=100, null=True, verbose_name='Worker')),
                ('content_type', models.CharField(help_text='Content type of the result data', max_length=128, verbose_name='Result Content Type')),
                ('content_encoding', models.CharField(help_text='The encoding used to save the task result data', max_length=64, verbose_name='Result Encoding')),
                ('result', models.TextField(default=None, editable=False, help_text='The data returned by the task.  Use content_encoding and content_type fields to read.', null=True, verbose_name='Result Data')),
                ('date_created', models.DateTimeField(auto_now_add=True, db_index=True, help_text='Datetime field when the task result was created in UTC', verbose_name='Created DateTime')),
                ('date_done', models.DateTimeField(auto_now=True, db_index=True, help_text='Datetime field when the task was completed in UTC', verbose_name='Completed DateTime')),
                ('traceback', models.TextField(blank=True, help_text='Text of the traceback if the task generated one', null=True, verbose_name='Traceback')),
                ('meta', models.TextField(default=None, editable=False, help_text='JSON meta information about the task, such as information on child tasks', null=True, verbose_name='Task Meta Information')),
            ],
            options={
                'verbose_name': 'task result',
                'verbose_name_plural': 'task results',
                'ordering': ['-date_done'],
            },
        ),
    ]
