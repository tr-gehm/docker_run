# docker_run
1、拿到项目后。首先修改 /root/docker_hrun/django_app_docker/runapi/runapi/settings中的数据库配置。
  1.1不要使用root。
2、查看根目录下的.env。所有的配置都在改文件下修改。
  2.1容器名称需要自己去docker-compose中修改。修改完后，env中也要同步修改
3、数据库等配置，自己部署。本部署暂不支持。相关都已经注释掉了。
4、修改端口需要同时修改 docker-compose，django、nginx项目下的dockerfile、gunicorn_config。
5、启动：./start.sh.
  5.1关闭功能暂时有问题。
6、celeary后续迭代

