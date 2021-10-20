FROM node:12.18.2-alpine3.12 AS builder

ARG FRONT_END_PROJECT_NAME SERVER_ACCESS_ADDR BACK_END_PORT
ENV FRONT_END_PROJECT_NAME=${FRONT_END_PROJECT_NAME} SERVER_ACCESS_ADDR=${SERVER_ACCESS_ADDR} BACK_END_PORT=${BACK_END_PORT}
COPY ${FRONT_END_PROJECT_NAME}/ /${FRONT_END_PROJECT_NAME}/
WORKDIR /${FRONT_END_PROJECT_NAME}/
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
    apk upgrade && \
	npm install -g cnpm --registry=https://registry.npm.taobao.org && \
	cnpm install && \
	sed -i "/^let host = / c let host = 'http://${SERVER_ACCESS_ADDR}:${BACK_END_PORT}';" "/${FRONT_END_PROJECT_NAME}/src/api/api.js" && \
	npm run build
COPY rest_framework/ /${FRONT_END_PROJECT_NAME}/dist/static/rest_framework/


FROM alpine:3.12
LABEL maintainer='1010562639@qq.com'
LABEL description='Install nginx supervisor'

ARG SERVER_ADDR DJANGO_CONTAINER_NAME FRONT_END_PROJECT_NAME
ENV SERVER_ADDR=${SERVER_ADDR} DJANGO_CONTAINER_NAME=${DJANGO_CONTAINER_NAME} FRONT_END_PROJECT_NAME=${FRONT_END_PROJECT_NAME}
COPY docker-entrypoint.sh /

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
    apk upgrade && \
    apk add --allow-untrusted ca-certificates bash curl iputils supervisor nginx tzdata && \
	apk update && apk upgrade && \
	cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" > /etc/timezone && \
    apk del tzdata && \
	rm -rf /var/cache/apk/* && \
	mkdir /tmp/nginx && \
	mkdir -p /var/www/html && \
	chown -R nginx:nginx /var/www/html && \
	chmod u+x /docker-entrypoint.sh

# COPY dist/ /var/www/html/
COPY --from=builder /${FRONT_END_PROJECT_NAME}/dist/ /var/www/html/

COPY configs/default.conf /etc/nginx/conf.d/
COPY configs/nginx.conf /etc/nginx/nginx.conf
COPY configs/supervisord.conf /etc/supervisord.conf

VOLUME /var/log/nginx/
VOLUME /var/www/html/
EXPOSE 80 8000 443
ENTRYPOINT ["/docker-entrypoint.sh"]
