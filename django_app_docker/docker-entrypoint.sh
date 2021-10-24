#!/bin/sh
set -e
#python manage.py makemigrations
#python manage.py migrate
#echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('user1', 'user1@qq.com', '123456')" | python manage.py shell &> /dev/null
#echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('user2', 'user2@qq.com', '123456')" | python manage.py shell &> /dev/null
/usr/local/bin/gunicorn -c /usr/src/app/configs/gunicorn_config.py ${PROJECT_NAME}.wsgi
celery -A ${PROJECT_NAME} worker -l info