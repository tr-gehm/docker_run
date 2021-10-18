#!/bin/bash
#Author: KeYou
#Description: start run script

# to project directory.
PROJECT_PATH="/root/DeployDjango"
CONTAINER_NAME_PREFIX="myapp"


function start_run
{   
    echo -e "正在启动项目!!!"
    cd "${PROJECT_PATH}"
    docker-compose -p "${CONTAINER_NAME_PREFIX}" up -d &> /dev/null
    echo -e "静候一分钟!!!"
    sleep 1m &> /dev/null
    bash import_test_data_and_create_user.sh
    echo -e "Very good! 重启完成!"
}


function main
{
    cd "${PROJECT_PATH}"
    docker ps -a | grep -E "${CONTAINER_NAME_PREFIX}_.*" &> /dev/null
    if [[ $? -eq 0 ]]
    then
        echo -e "项目已经启动!"
        read -p "要重启项目吗? (y/n) " confirm
        if [[ "${confirm,,}" == "n" ]]; then
            echo -e "无需重启项目!\nBye!"
            exit 0
        fi
        echo -e "准备重启项目!!!"

        docker-compose -p "${CONTAINER_NAME_PREFIX}" down -v &> /dev/null
        start_run
    else
        start_run
    fi
}

main
