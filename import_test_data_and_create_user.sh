#!/bin/bash
#Author: KeYou
#Description: import test data and create normal user into db container

PROJECT_PATH="/root/DeployDjango"
CONTAINER_NAME_PREFIX="myapp"

ROOT_USERNAME="root"
ROOT_PASSOWRD="pythonvip"
DATABASE_NAME="test"
DB_USERNAME="lemon520"
DB_USER_PASSWORD="123456"

# 1. 创建仅读权限的用户
echo -e "正在创建仅读权限的用户!!!"

docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c "mysql -u ${ROOT_USERNAME} -p${ROOT_PASSOWRD} --execute=\"GRANT SELECT, SHOW VIEW ON ${DATABASE_NAME}.* TO ${DB_USERNAME}@'%' IDENTIFIED BY '${DB_USER_PASSWORD}'; FLUSH PRIVILEGES;\""

[[ $? == 0 ]] && echo -e "创建仅读权限的用户: 成功!" || echo -e "创建仅读权限的用户: 失败!"

# 2. 导入测试数据
echo -e "正在导入测试数据!!!"
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c "exec mysql -u${ROOT_USERNAME} -p'${ROOT_PASSOWRD}' -A ${DATABASE_NAME}" < "${PROJECT_PATH}"/datas/01_tb_projects.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c "exec mysql -u${ROOT_USERNAME} -p'${ROOT_PASSOWRD}' -A ${DATABASE_NAME}" < "${PROJECT_PATH}"/datas/02_tb_interfaces.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c "exec mysql -u${ROOT_USERNAME} -p'${ROOT_PASSOWRD}' -A ${DATABASE_NAME}" < "${PROJECT_PATH}"/datas/03_tb_testcases.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c "exec mysql -u${ROOT_USERNAME} -p'${ROOT_PASSOWRD}' -A ${DATABASE_NAME}" < "${PROJECT_PATH}"/datas/04_tb_configures.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c "exec mysql -u${ROOT_USERNAME} -p'${ROOT_PASSOWRD}' -A ${DATABASE_NAME}" < "${PROJECT_PATH}"/datas/05_tb_testsuits.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c "exec mysql -u${ROOT_USERNAME} -p'${ROOT_PASSOWRD}' -A ${DATABASE_NAME}" < "${PROJECT_PATH}"/datas/06_tb_reports.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c "exec mysql -u${ROOT_USERNAME} -p'${ROOT_PASSOWRD}' -A ${DATABASE_NAME}" < "${PROJECT_PATH}"/datas/07_tb_debugtalks.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c "exec mysql -u${ROOT_USERNAME} -p'${ROOT_PASSOWRD}' -A ${DATABASE_NAME}" < "${PROJECT_PATH}"/datas/08_tb_envs.sql
[[ $? == 0 ]] && echo -e "导入测试数据: 成功!" || echo -e "导入测试数据: 失败!"
