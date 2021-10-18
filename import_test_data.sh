#!/bin/bash
#Author: KeYou
#Description: import test data into db container
PROJECT_PATH="/root/DeployDjango"
CONTAINER_NAME_PREFIX="myapp"

echo -e "正在导入测试数据!!!"

docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c 'exec mysql -uroot -p"pythonvip" -A test' < "${PROJECT_PATH}"/datas/01_tb_projects.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c 'exec mysql -uroot -p"pythonvip" -A test' < "${PROJECT_PATH}"/datas/02_tb_interfaces.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c 'exec mysql -uroot -p"pythonvip" -A test' < "${PROJECT_PATH}"/datas/03_tb_testcases.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c 'exec mysql -uroot -p"pythonvip" -A test' < "${PROJECT_PATH}"/datas/04_tb_configures.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c 'exec mysql -uroot -p"pythonvip" -A test' < "${PROJECT_PATH}"/datas/05_tb_testsuits.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c 'exec mysql -uroot -p"pythonvip" -A test' < "${PROJECT_PATH}"/datas/06_tb_reports.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c 'exec mysql -uroot -p"pythonvip" -A test' < "${PROJECT_PATH}"/datas/07_tb_debugtalks.sql
docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c 'exec mysql -uroot -p"pythonvip" -A test' < "${PROJECT_PATH}"/datas/08_tb_envs.sql

echo -e "导入测试数据完成!!!"