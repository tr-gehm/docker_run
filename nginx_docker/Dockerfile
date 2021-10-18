FROM keyou1/alpine-base:latest
LABEL maintainer='1010562639@qq.com'
LABEL description='Install nginx'

ARG SERVER_ADDR='121.43.178.79'
ENV SERVER_ADDR=${SERVER_ADDR}

COPY docker-entrypoint.sh /

RUN apk add --update supervisor nginx tzdata && \ 
	cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" > /etc/timezone && \
    apk del tzdata && \
	rm -rf /var/cache/apk/* && \
	mkdir /tmp/nginx && \
	mkdir -p /var/www/html && \
	chown -R nginx:nginx /var/www/html && \
	chmod u+x /docker-entrypoint.sh


COPY dist/ /var/www/html/
COPY configs/default.conf /etc/nginx/conf.d/
COPY configs/nginx.conf /etc/nginx/nginx.conf
COPY configs/supervisord.conf /etc/supervisord.conf

VOLUME /var/log/nginx/
VOLUME /var/www/html/
EXPOSE 80 8000 443
ENTRYPOINT ["/docker-entrypoint.sh"]
