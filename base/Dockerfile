FROM alpine:latest
LABEL maintainer="KeYou <keyou100@qq.com>"
LABEL description="base image"

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
    apk upgrade && \
    apk add --allow-untrusted ca-certificates bash curl iputils && \
    apk update && apk upgrade && \
	rm -rf /var/cache/apk/*