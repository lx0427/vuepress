## 服务器

```
# 网址
https://www.conoha.jp/login/
# 账号密码
zzyiy00@gmail.com/Zzyiy0521
# 设置密码
root/@Zzyiy0521
# 服务器
Ubuntu 20
# 安全 - SSH秘钥
# 下载公钥文件
# 服务器 - 名称标签 - IP地址
# 使用root/@Zzyiy0521 + 公钥进行登录
```

## 域名配置

```
# 网址
https://sso.godaddy.com/?realm=idp&app=account&path=%2fproducts&marketid=en-SG
# 账号密码
zzyiy/zzyiy5555
# DNS - 设置DNS信息

# 邮箱服务配置
https://lx0427.github.io/ewomail/
```

## docker 安装

```bash
# apt升级
sudo apt-get update

# 添加相关软件包
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

# 下载软件包的合法性，需要添加软件源的 GPG 密钥
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -

# source.list 中添加 Docker 软件源
sudo add-apt-repository "deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu $(lsb_release -cs) stable"

# 安装 Docker CE
sudo apt-get update
sudo apt-get install docker-ce

# 启动 Docker CE
sudo systemctl enable docker
sudo systemctl start docker

# 建立 docker 用户组(附加)
sudo groupadd docker
sudo usermod -aG docker $USER

# Helloworld测试
docker run hello-world
```

## 镜像加速

```bash
# /etc/docker/daemon.json
{
	"registry-mirrors": [
		"https://dockerhub.azk8s.cn",
		"https://reg-mirror.qiniu.com"
	]
}
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## docker-compose 安装

```bash
apt install docker-compose
```

# node + pm2

```bash
# 查看node历史版本 https://nodejs.org/en/download/releases/
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
# 升级npm
npm i npm -g
# 全局安装pm2
npm i pm2 -g
```

## 服务启动

### docker-compose

```bash
# 启动docker-compose
cd /root/source/gamermart
docker-compose up -d
```

### docker-compose 开机启动

```bash
cd /etc
touch rc.local
vim rc.local
```

rc.local

```rc.local
# 内容跟启动一致
cd /root/source/gamermart
docker-compose up -d
```

### pm2

```bash
# 启动后端
cd /backend
pm2 start process.yml
# 加入开机启动
pm2 save
pm2 startup
```

## window 安装依赖 python 报错

```bash
# 管理员打开cmd, 安装
npm install --global --production windows-build-tools
npm install --global node-gyp
```
