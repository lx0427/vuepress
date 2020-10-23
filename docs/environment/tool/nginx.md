# nginx

## 安装

```bash
# 1.下载安装包解压
# 下载nginx安装包
wget http://nginx.org/download/nginx-1.12.2.tar.gz
# 解压
tar -xvf nginx-1.12.2.tar.gz
# 查看安装目录
cd nginx-1.12.2

# 2.使用 yum 安装(推荐使用)
yum install nginx
# error
sudo yum install epel-release
yum update
yum install -y nginx

```

## 配置

- 找到安装 nginx.exe 目录，配置进系统环境变量 path 中

```bash
# 查看nginx版本
nginx -v
# 查看安装目录
rpm -ql nginx
# 配置文件目录
cd /etc/nginx/
ls
vim nginx.conf
```

- daemon on: 后台启动
- listen：端口
- root: 访问文件目录

```conf {3,18,22}
worker_processes  1;

daemon on;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

        location / {
            root   F:\CODE\hengyi-boot-web\dist;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

## 启动

```bash
# 启动
start nginx
# 停止
nginx -s stop
# 重载配置
nginx -s reload
```
