# node

## npm

```bash
# 清理缓存
npm cache clean -f
# 设置淘宝源
npm config set registry https://registry.npm.taobao.org
# 还原设置
npm config set registry https://registry.npmjs.org/
```

## nginx

### 环境变量

- 找到安装 nginx.exe 目录，配置进系统环境变量 path 中

### 配置 nginx.conf

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

### 启动

```bash
# 启动
start nginx
# 停止
nginx -s stop
# 重载配置
nginx -s reload
```

## linux

### 命令

```bash
# 历史命令
history
# 查看报错信息
cd /var/log
vim message
# 查看进程情况
top
# 查看目录
ls
# 查看目录含隐藏文件
ls -a
# 查看剩余内存
free -h
# 拷贝文件夹
cp -r hengyi_scmls bak # 含当前文件目录
cp -r hengyi_scmls/. bak/0507/ # 文件夹中所有内容
```

### 安装 nginx

1. 下载安装包解压

```bash
# 下载nginx安装包
wget http://nginx.org/download/nginx-1.12.2.tar.gz
# 解压
tar -xvf nginx-1.12.2.tar.gz
# 查看安装目录
cd nginx-1.12.2
```

2. 使用 yum 安装(推荐使用)

```bash
yum install nginx
# error
sudo yum install epel-release
yum update
yum install -y nginx
```

### 编辑 nginx.conf

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

### 安装 node

```bash
wget https://nodejs.org/dist/v10.17.0/node-v10.17.0-linux-x64.tar.xz
tar xf node-v10.17.0-linux-x64.tar.xz
cd node-v10.17.0-linux-x64
# 备份
cp /etc/profile /etc/profile.bak
vim /etc/profile
# :q退出 :wq保存退出 :i插入
export PATH=$PATH:/root/node-v10.17.0-linux-x64/bin
source /etc/profile
```

### 卸载 node

```bash
# 卸载npm
sudo npm uninstall npm -g
# 卸载node
yum remove nodejs npm -y
```

### 查看 node 进程

```bash
# 查找node进程 22285
ps -aux | grep node
# 关闭进程
kill -9 18056
```

## glob

```js
const glob = require('glob')
glob.sync('./src/pages/*/app.vue').map((v) => v.replace(/.\/src\/pages\/(\w+)\/app.vue/, '$1')) // => 匹配页面名称
```
