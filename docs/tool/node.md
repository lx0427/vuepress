# node

## nginx

### 安装

```bash
yum install nginx
```

### 命令

```bash
# 查看nginx版本
nginx -v
# 查看安装目录
rpm -ql nginx
# 配置文件目录
cd /etc/nginx/
ls
vim nginx.conf
# 修改listen(端口)
# 修改root(文件路径)
```

### 启动

```bash
# 启动
nginx
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
```

### 安装

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

```bash
wget https://nodejs.org/dist/latest-v6.x/node-v6.17.1-linux-x64.tar.xz
tar xf node-v6.17.1-linux-x64.tar.xz
cd node-v6.17.1-linux-x64
# 备份
cp /etc/profile /etc/profile.bak
vim /etc/profile
# :q退出 :wq保存退出 :i插入
export PATH=$PATH:/root/node-v6.17.1-linux-x64/bin
source /etc/profile
```

### 卸载

```bash
# 卸载npm
sudo npm uninstall npm -g
# 卸载node
yum remove nodejs npm -y
```

## npm

```bash
# 清理缓存
npm cache clean -f
# 设置淘宝源
npm config set registry https://registry.npm.taobao.org
# 还原设置
npm config set registry https://registry.npmjs.org/
```

## glob

```js
const glob = require('glob')
glob.sync('./src/pages/*/app.vue').map((v) => v.replace(/.\/src\/pages\/(\w+)\/app.vue/, '$1')) // => 匹配页面名称
```
