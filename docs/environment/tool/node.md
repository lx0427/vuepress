# node

## 环境

### 安装

```bash
wget https://nodejs.org/dist/v10.17.0/node-v10.17.0-linux-x64.tar.xz
tar xf node-v10.17.0-linux-x64.tar.xz
cd node-v10.17.0-linux-x64
# 备份
cp /etc/profile /etc/profile.bak
vim /etc/profile
# :q退出 :wq保存退出 :i插入
# 最后一行插入
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
# 关闭进程
kill -9 18056
```

## glob

```js
const glob = require('glob')
glob.sync('./src/pages/*/app.vue').map((v) => v.replace(/.\/src\/pages\/(\w+)\/app.vue/, '$1')) // => 匹配页面名称
```
