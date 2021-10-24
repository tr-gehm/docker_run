FROM python:3.7-alpine
LABEL maintainer='1010562639@qq.com'
LABEL description='Deploying Django project'

ARG PROJECT_NAME MYSQL_CONTAINER_NAME MYSQL_USERNAME MYSQL_ROOT_PASSWORD MYSQL_DATABASE
ENV PROJECT_NAME=${PROJECT_NAME} MYSQL_CONTAINER_NAME=${MYSQL_CONTAINER_NAME} MYSQL_USERNAME=${MYSQL_USERNAME} \
    MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} MYSQL_DATABASE=${MYSQL_DATABASE}

# cd /usr/src/app
WORKDIR /usr/src/app
# /usr/src/app/runapi/
COPY ./${PROJECT_NAME} ./${PROJECT_NAME}/
# /usr/src/app/configs/
COPY ./gunicorn_config.py ./configs/
COPY ./docker-entrypoint.sh /entrypoint.sh

# cd /usr/src/app/runapi/
WORKDIR ${PROJECT_NAME}/
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
    apk upgrade && \
    apk add --allow-untrusted build-base mariadb-connector-c-dev curl iputils ca-certificates bash tzdata && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" > /etc/timezone && \
    apk del tzdata && \
    apk update && apk upgrade && \
    pip install --no-cache-dir -i https://pypi.douban.com/simple -r requirements.txt && \
    pip install -i https://pypi.douban.com/simple gunicorn && \
	rm -rf /var/cache/apk/* && \
    chmod 777 /entrypoint.sh

VOLUME /usr/src/app/logs/
VOLUME /usr/src/app/${PROJECT_NAME}/

EXPOSE 8000
# CMD ["/usr/local/bin/gunicorn", "-c", "/usr/src/app/configs/gunicorn_config.py", "runapi.wsgi"]
ENTRYPOINT ["/entrypoint.sh"]
