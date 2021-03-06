# 项目部署

## 服务器连接

- ip: source /etc/profile
- port: 22
- username: root
- password: @Zzyiy0521
- method: Public Key
- centos: 8.3

## node 最新版环境安装

```bash
wget https://nodejs.org/dist/v12.19.0/node-v12.19.0-linux-x64.tar.xz
tar xf node-v12.19.0-linux-x64.tar.xz

cd node-v12.19.0-linux-x64/
# 备份
cp /etc/profile /etc/profile.bak
vim /etc/profile
# 找到export PATH，在下方插入
export PATH=$PATH:/root/node-v12.19.0-linux-x64/bin
# 退出编辑
# 立即生效路径配置
source /etc/profile

npm i -g npm
# permission denied, mkdir '/root/gamemart/egg/node_modules/bcrypt/.node-gyp'
npm -g config set user root

# cnpm
npm i -g cnpm
# cnpm: command not found 创建软连接
sudo ln -s /root/node-v12.14.0-linux-x64/bin/cnpm /usr/local/bin/
```

## docker 环境

```bash
# requires containerd.io >= 1.2.2-3, but none of the providers can be installed
wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.13-3.1.el7.x86_64.rpm
yum -y install ./containerd.io-1.2.13-3.1.el7.x86_64.rpm

# 安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
docker -v
```

## docker-compose 环境

```bash
# 安装
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# /usr/local/bin/docker-compose: Permission denied
chmod +x /usr/local/bin/docker-compose

docker-compose -v
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
cd /root/gamemart/
mkdir admin
mkdir egg
mkdir mobile
# /root/gamemart/
# ├── admin
# ├── egg
# └── mobile

# 上传项目代码
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
        root         /webserver;
        location / {
            try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }
        location @router {
          rewrite ^.*$ /index.html last;
        }
    }
    include /etc/nginx/conf.d/*.conf;
}
```

### docker-compose.yml

```yml
version: '3.12'
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
      - ./data/db/master/log:/data/mongo/log
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
      - ./data/db/secondary/log:/data/mongo/log
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
      - ./data/db/arbiter/log:/data/mongo/log
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
# 关闭防火墙
# "errmsg" : "No host described in new configuration with {version: 1, term: 0} for replica set rs maps to this node"
systemctl stop firewalld
# 进入容器
docker exec -it master /bin/bash
# 连接数据库
mongo -uroot -p123456
# 初始化副本集
rs.initiate({ _id: "rs", members: [{ _id: 0, host: "118.27.9.229:27001", priority:2 },{ _id: 1, host: "118.27.9.229:27002", priority:1 },{ _id: 2, host: "118.27.9.229:27003", arbiterOnly:true }]});
# 强制重置配置(测试环境)
rs.reconfig({ _id: "rs", members: [{ _id: 0, host: "192.168.0.61:27001", priority:2 },{ _id: 1, host: "192.168.0.61:27002", priority:1 },{ _id: 2, host: "192.168.0.61:27003", arbiterOnly:true }]},{force:true})
# 退出容器
exit
```

### 导入数据库

> 使用 studio 3T 进行导入

```bash
# 导出本地数据库
mongodump -h localhost:27117 -uadmin -p123456 -d game_mall --authenticationDatabase admin -o D:\MongoDB\bin\dump
# 将数据库文件传入 /data/backup/game_mall
# 进入容器
docker exec -it master /bin/bash
# 执行导入
mongorestore -h 118.27.9.229:27001 -uroot -p123456 --authenticationDatabase admin -d game_mall --dir /data/backup/game_mall
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

## docker-compose 自启动

### linux 自启动设置

```bash
#编辑开机自启动脚本
vim /etc/rc.d/init.d/docker-compose.sh
# 授权
chmod +x /etc/rc.d/init.d/docker-compose.sh
# 开机自启动
chkconfig docker-compose.sh on

# 开机自启动docker
systemctl enable docker
# 服务器重启
reboot
```

### `docker-compose.sh`

```sh
#!/bin/bash
# chkconfig: 2345 85 15
# description: docker-compose init start

systemctl stop firewalld
/usr/local/bin/docker-compose -f /data/gamemart/docker-compose.yml up -d
```

## pm2

### 自启动设置

```bash
# 下载
npm i pm2 -g
# 使用生产环境启动服务
pm2 start pm2.config.js --env production
# 保存当前应用列表
pm2 save
# 创建开机自启动命令
pm2 startup
# 重启，发现之前的服务都已经启动
sudo systemctl reboot
# 删除自动启动服务
sudo pm2 unstartup systemd
```

### server.js

```js
const egg = require('egg')

const workers = Number(process.argv[2] || require('os').cpus().length)
egg.startCluster({
  workers,
  baseDir: __dirname,
})
```

### pm2.config.js

```js
module.exports = {
  apps: [
    {
      name: 'gamermart-egg',
      script: './server.js',
      watch: false,
      env: {
        PORT: 7001,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 7001,
        NODE_ENV: 'production',
      },
    },
  ],
}
```

### 常用命令

```bash
pm2 start app.js # 启动app.js应用程序

pm2 start app.js -i 4        # cluster mode 模式启动4个app.js的应用实例  4个应用程序会自动进行负载均衡

pm2 start app.js --name="api" # 启动应用程序并命名为 "api"

pm2 start app.js --watch      # 当文件变化时自动重启应用

pm2 start script.sh          # 启动 bash 脚本

pm2 list                      # 列表 PM2 启动的所有的应用程序

pm2 monit                    # 显示每个应用程序的CPU和内存占用情况

pm2 show [app-name]          # 显示应用程序的所有信息

pm2 logs                      # 显示所有应用程序的日志

pm2 logs [app-name]          # 显示指定应用程序的日志

pm2 flush                       # 清空所有日志文件

pm2 stop all                  # 停止所有的应用程序

pm2 stop 0                    # 停止 id为 0的指定应用程序

pm2 restart all              # 重启所有应用

pm2 reload all                # 重启 cluster mode下的所有应用

pm2 gracefulReload all        # Graceful reload all apps in cluster mode

pm2 delete all                # 关闭并删除所有应用

pm2 delete 0                  # 删除指定应用 id 0

pm2 scale api 10              # 把名字叫api的应用扩展到10个实例

pm2 reset [app-name]          # 重置重启数量

pm2 startup                  # 创建开机自启动命令

pm2 save                      # 保存当前应用列表

pm2 resurrect                # 重新加载保存的应用列表

pm2 update                    # Save processes, kill PM2 and restore processes

pm2 generate                  # Generate a sample json configuration file
```

### pm2 配置文件

```js
const day = require('dayjs')
module.exports = {
  apps: [
    {
      // 项目名
      name: 'server',
      // 执行文件
      script: './server.js',
      // 根目录
      cwd: './',
      // 传递给脚本的参数
      args: 'one two',
      // 指定的脚本解释器
      interpreter: '',
      // 传递给解释器的参数
      interpreter_args: '',
      // 应用启动模式，支持fork和cluster模式
      exec_mode: 'cluster_mode',
      // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
      instances: 1,
      // 最大内存限制数，超出自动重启
      max_memory_restart: '1G',
      // 错误日志文件
      error_file: `./logs/pm2/${day().format('YYYYMMDD')}/app-err.log`,
      // 正常日志文件
      out_file: `./logs/pm2/${day().format('YYYYMMDD')}/app-out.log`,
      // 设置追加日志而不是新建日志
      merge_logs: true,
      // 指定日志文件的时间格式
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      // 应用运行少于时间被认为是异常启动
      min_uptime: 1000,
      // 最大异常重启次数，即小于min_uptime运行时间重启次数；
      max_restarts: 30,
      // 默认为true, 发生异常的情况下自动重启
      autorestart: true,
      // crontab时间格式重启应用，目前只支持cluster模式;
      cron_restart: '',
      // 异常重启情况下，延时重启时间
      restart_delay: 60,
      // 是否监听文件变动然后重启
      watch: true,
      // 不用监听的文件
      ignore_watch: ['node_modules', 'logs', 'news', 'run', 'test', 'typings', 'pm2.config'],
      env: { NODE_ENV: 'development' },
      env_production: { NODE_ENV: 'production' },
    },
  ],
}
```
