# result_backend = 'redis://:332572@127.0.0.1:6379/1'

# BROKER_URL
# broker_url = 'redis://127.0.0.1:6379/1' redis
broker_url = 'amqp://admin:mypass@121.43.178.79:5673//'


# a.默认不存在任务执行结果
# 将任务执行结果放在redis缓存中
# CELERY_RESULT_BACKEND
# result_backend = 'redis://127.0.0.1:6379/2'

# 将任务执行结果放在mysql数据库中
result_backend = 'django-db'

# 修改任务序列化类型
task_serializer = 'pickle'
accept_content = ['json', 'pickle']

