#!/bin/bash
#Author: XIAOMIGN
#Description: start run script


# 初始化，加载环境变量
function init
{
    source .env
    PROJECT_PATH="$PWD"
    cd "${PROJECT_PATH}"

    sed -i "s/\[MYSQL_CONTAINER_NAME\]:/${MYSQL_CONTAINER_NAME}:/" docker-compose.yml
    sed -i "s/\[DJANGO_CONTAINER_NAME\]:/${DJANGO_CONTAINER_NAME}:/" docker-compose.yml
    sed -i "s/\[NGINX_CONTAINER_NAME\]:/${NGINX_CONTAINER_NAME}:/" docker-compose.yml

}


# 重置docker-compose.yml
function reset
{
    sed -i "s/${MYSQL_CONTAINER_NAME}:/\[MYSQL_CONTAINER_NAME\]:/" docker-compose.yml
    sed -i "s/${DJANGO_CONTAINER_NAME}:/\[DJANGO_CONTAINER_NAME\]:/" docker-compose.yml
    sed -i "s/${NGINX_CONTAINER_NAME}:/\[NGINX_CONTAINER_NAME\]:/" docker-compose.yml

}

# 创建数据表
function create_table
{
    echo -e "正在创建数据表!!!"
    docker exec -i "${CONTAINER_NAME_PREFIX}"_"${MYSQL_CONTAINER_NAME}"_1 sh -c "exec mysql -u${MYSQL_USERNAME} -p'${MYSQL_ROOT_PASSWORD}' -A ${MYSQL_DATABASE}" < "${PROJECT_PATH}"/test_data/create_table.sql
    [[ $? == 0 ]] && echo -e "创建数据表: 成功!" || echo -e "创建数据表: 失败!"
}


# 创建数据库仅读用户
function create_only_read_db_user
{
    echo -e "正在创建仅读权限的用户!!!"

    docker exec -i "${CONTAINER_NAME_PREFIX}"_db_1 sh -c "mysql -u ${MYSQL_USERNAME} -p${MYSQL_ROOT_PASSWORD} --execute=\"GRANT SELECT, SHOW VIEW ON ${MYSQL_DATABASE}.* TO ${MYSQL_ONLY_READ_USERNAME}@'%' IDENTIFIED BY '${MYSQL_ONLY_READ_USER_PASSWORD}'; FLUSH PRIVILEGES;\""

    [[ $? == 0 ]] && echo -e "创建仅读权限的用户: 成功!" || echo -e "创建仅读权限的用户: 失败!"
}


# 启动项目
function start
{
    echo -e "正在启动项目!!!"
    cd "${PROJECT_PATH}"

    docker-compose -p "${CONTAINER_NAME_PREFIX}" up -d
    echo -e "静候30秒!!!"
    sleep 30s &> /dev/null
    # 创建数据表
#    create_table
    echo -e "Very good! 项目启动完成!"
}


# 开启或重启项目
function start_or_restart
{
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
        start
    else
        start
    fi
}


# 关闭项目
function close
{
    docker ps -a | grep -E "${CONTAINER_NAME_PREFIX}_.*" &> /dev/null
    if [[ $? -eq 0 ]]; then
        echo -e "项目已经启动"
        echo -e "开始关闭项目..."
        docker-compose -p "${CONTAINER_NAME_PREFIX}" down -v

    else
        echo -e "项目已经关闭"
    fi
}


# 构建或者重新构建镜像
function build_or_rebuild_image
{
    # 关闭项目
    close

    echo -e "开始构建镜像..."
    docker-compose -p "${CONTAINER_NAME_PREFIX}" build --no-cache
0
}


function menu
{
    echo -e "**************************************"
    echo -e "\t接口自动化测试平台部署系统\t\n"
    echo -e "\t1.启动、重启"
    echo -e "\t2.关闭"
    echo -e "\t3.重新构建镜像"
    echo -e "\t4.创建数据库仅读权限的用户"
    echo -e "\t0.退出"
}


function main
{
    # 初始化操作，加载环境变量
    init

    while true
    do
        menu
        read -e -p "请输入【0-4】：" num
        clear
        case "${num}" in
            0)
                printf "\033c"
                reset
                break
                ;;
            1)
                start_or_restart
                reset
                ;;
            2)
                close
                reset
                ;;
            3)
		build_or_rebuild_image
                reset
                ;;
            4)
		create_only_read_db_user
                reset
                ;;
            *)
                echo -e "输入有误"
                reset
                ;;
        esac
    done

}

main
