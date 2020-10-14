# 项目部署

## 服务器连接

- ip: 160.251.21.249
- port: 22
- username: root
- password: Aa123456@

## docker 环境

```bash
# 安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# requires containerd.io >= 1.2.2-3, but none of the providers can be installed
wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.13-3.1.el7.x86_64.rpm
yum -y install ./containerd.io-1.2.13-3.1.el7.x86_64.rpm

# 重新安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
docker -v

# 启动docker(重启自动启动)
sudo systemctl start docker
```

## docker-compose 环境

```bash
# 安装
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

docker-compose -v
# /usr/local/bin/docker-compose: Permission denied
chmod +x /usr/local/bin/docker-compose
```

## 其他环境

```bash
docker pull nginx:latest
docker pull redis:latest
docker pull mongo:latest
```

## 项目代码

```bash
mkdir -p /root/gamemart
# /root/gamemart/
# ├── admin
# ├── egg
# └── mobile
```

## 配置文件

```bash
mkdir -p /data/gamemart
# /data/gamemart
# ├── docker-compose.yml
# ├── mongodb.key
# ├── nginx
# │   ├── admin
# │   │   └── nginx.conf
# │   ├── mobile
# │   │   └── nginx.conf
# └── redis
#     └── redis.conf
```

## 配置管理

### mongodb.key

```bash
# 创建秘钥 mongodb.key
openssl rand -base64 756 > mongodb.key
chmod 400 mongodb.key
```

### redis.conf

```conf
requirepass 123456
#daemonize yes
bind 0.0.0.0
appendonly yes
```

### nginx.conf

```conf
#user  nginx;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
    worker_connections  1024;
}
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  /var/log/nginx/access.log  main;
    client_max_body_size 10m;
    sendfile        on;
    #tcp_nopush     on;
    keepalive_timeout  65;
    #gzip  on;
    server {
        listen       8081;
        server_name  localhost;
        location / {
            root   /webserver;
            index  index.html index.htm;
        }
    }
    include /etc/nginx/conf.d/*.conf;
}
```

### docker-compose.yml

```yml
version: '3.13'
services:
  gamemart_redis:
    image: redis
    container_name: gamemart_redis
    hostname: redis
    restart: always
    ports:
      - 6379:6379
    volumes:
      - ./redis/redis.conf:/etc/redis/redis.conf:rw
      - ./redis/data:/data:rw
    command: redis-server /etc/redis/redis.conf --appendonly yes

  admin:
    container_name: admin
    image: nginx
    restart: always
    ports:
      - 8081:8081
    volumes:
      - /root/gamemart/admin:/webserver
      - ./nginx/admin/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/admin/log:/var/log/nginx
  mobile:
    container_name: mobile
    image: nginx
    restart: always
    ports:
      - 80:80
    volumes:
      - /root/gamemart/mobile:/webserver
      - ./nginx/mobile/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/mobile/log:/var/log/nginx

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

## 副本集

### 初始化副本集

```bash
# 启动docker-compose
docker-compose up -d
# 进入容器
docker exec -it master /bin/bash
# 连接数据库
mongo -uroot -p123456
# 初始化副本集
rs.initiate({ _id: "rs", members: [{ _id: 0, host: "160.251.21.249:27001", priority:2 },{ _id: 1, host: "160.251.21.249:27002", priority:1 },{ _id: 2, host: "160.251.21.249:27003", arbiterOnly:true }]});
# "errmsg" : "No host described in new configuration with {version: 1, term: 0} for replica set rs maps to this node"

systemctl stop firewalld
# 重复上述操作
```

### 导入数据库

```bash
# 导出本地数据库
mongodump -h localhost:27117 -uadmin -p123456 -d game_mall --authenticationDatabase admin -o D:\MongoDB\bin\dump
# 将数据库文件传入 /data/backup/game_mall
# 进入容器
docker exec -it master /bin/bash
# 执行导入
mongorestore -h 160.251.21.249:27001 -uroot -p123456 --authenticationDatabase admin -d game_mall --dir /data/backup/game_mall
```

## 服务启动

```bash
# docker-compose 启动
cd /data/gamemart
docker-compose up -d
# ERROR: Failed to Setup IP tables: Unable to enable SKIP DNAT rule
# 关闭防火墙之后, docker需要重启
service docker restart

# egg 启动
cd /root/gamemart/egg
yarn start
```

## 防火墙

```bash
# 开启端口
firewall-cmd --zone=public --add-port=27017/tcp --permanent;
# 重载
firewall-cmd --reload
# 查看已开启端口
firewall-cmd --zone=public --list-ports
```

## 问题列表

### 多文档事务报错

```js
// 提前创建好集合
db.order.insertOne({ _id: '1', price: 1 })
db.log_order_status.insertOne({ ip: '1' })
```

### docker status 异常

```bash
# status: created  =>  重启docker
systemctl restart docker

# status: restart  =>  关闭防火墙
systemctl stop firewalld
```
