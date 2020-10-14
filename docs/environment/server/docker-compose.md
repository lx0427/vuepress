# docker-compose

## 安装

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

## 副本集

### 配置

```bash
# 递归建目录
mkdir -p /data/game/
cd /data/game/
# 创建秘钥
openssl rand -base64 756 > mongodb.key
chmod 400 mongodb.key

# 填入配置内容 docker-compose.yml
touch docker-compose.yml
vim docker-compose.yml

# 启动docker-compose服务，-d 后台运行
docker-compose up -d

# 进入mongo容器，初始化
docker exec -it master /bin/bash
mongo -uroot -p123456
# 退出容器
exit

# 初始化副本集
rs.initiate({ _id: "rs", members: [{ _id: 0, host: "192.168.0.94:27001", priority:2 },{ _id: 1, host: "192.168.0.94:27002", priority:1 },{ _id: 2, host: "192.168.0.94:27003", arbiterOnly:true }]});

```

### 问题处理

> 服务启动，status: created

```bash
# 关闭防火墙
systemctl restart docker
```

> 服务启动，status: restart

```bash
# 关闭防火墙
systemctl stop firewalld
```

> 提示端口报错

```bash
# 关闭端口问题
systemctl stop iptables
```

### 备份恢复

```bash
# 启动副本集，备份数据（本地环境）
mongodump -uadmin -p123456 -h localhost:27117 -d game_mall --authenticationDatabase admin -o D:\MongoDB\bin\dump

# 把文件拷贝到 docker-compose.yml中volumes挂载到本地服务器 ./data/backup 中
# 启动副本集，服务器环境
mongorestore -h localhost:27001 -uroot -p123456 --authenticationDatabase admin -d game_mall --dir /data/backup/game_mall
```

## 配置文件

### docker-compose.yml

> volumes: 挂载目录是用相对路径

```yml
version: '3.4'

services:
  master:
    image: mongo
    restart: always
    container_name: master
    volumes:
      - ./data/db/master:/data/db
      - ./data/backup:/data/backup
      - ./mongodb.key:/data/mongodb.key
    ports:
      - 27001:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: 123456
    networks:
      - mongoNet
    command: mongod --replSet rs --keyFile /data/mongodb.key
    entrypoint:
      - bash
      - -c
      - |
        chmod 400 /data/mongodb.key
        chown 999:999 /data/mongodb.key
        exec docker-entrypoint.sh $$@

  secondary:
    image: mongo
    restart: always
    container_name: secondary
    volumes:
      - ./data/db/secondary:/data/db
      - ./mongodb.key:/data/mongodb.key
    ports:
      - 27002:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: 123456
    networks:
      - mongoNet
    command: mongod --replSet rs --keyFile /data/mongodb.key
    entrypoint:
      - bash
      - -c
      - |
        chmod 400 /data/mongodb.key
        chown 999:999 /data/mongodb.key
        exec docker-entrypoint.sh $$@

  arbiter:
    image: mongo
    restart: always
    container_name: arbiter
    volumes:
      - ./data/db/arbiter:/data/db
      - ./mongodb.key:/data/mongodb.key
    ports:
      - 27003:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: 123456
    networks:
      - mongoNet
    command: mongod --replSet rs --keyFile /data/mongodb.key
    entrypoint:
      - bash
      - -c
      - |
        chmod 400 /data/mongodb.key
        chown 999:999 /data/mongodb.key
        exec docker-entrypoint.sh $$@

networks:
  mongoNet:
    driver: bridge
```
