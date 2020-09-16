# 项目部署

## 服务器

### 地址

```
13.231.19.131
```

### 账号密码

> `root`/`Zxcv1234`

### Public Key

> 账号：`ec2-user` 秘钥：导入文件`public_key.pem`, 内容如下:

```
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAiDedpnW80xBihI+27IFtYYWXjLIM4UF5K3fD09zmod4xxBEufjhk6hIZvJVL
EaVf2i9kYuwovwOuQ+AYq1BxkEK0VZ/8iRhsvIWwy/UDPmZ7kmqzB9htmMZb7gCeRbOmGkM1R1bj
jWktOjOGlA9aRBnSGlX1+TthEvPCT7i4sMJeMCW3JhGd82jj7TFmSNtt9JgfVNcO0qshp6BDozvJ
okEV3TiPq4aVPq4aBkOzjuYU/NLM80guqDFgJPMJ3JpIndNHDWucFDj0ZOscUNiiHI3FPLNLHBhZ
8MwOrv+W6IPZKlTMiASm02R9JnQybjZ4sGvzwABxDou6Zl9cK1KSeQIDAQABAoIBACyADs6stA03
0xd/Y8EL31H2tLXQDQkhvJYIwD7ccbP7xMJK4qd1gPI/C41iMG4JWrEKvn7aq80LRMkD0stUsmTw
hb1bUMLw6cUE3+chmfeuvzvsA6TSfatlUe8E4K/gqqj1v9gYeKpf69iRsKt6AIEy9kKIRp0vWt04
KQimTh/gQq/9s81xIUMpaffd3xQ71YNWz9T3UwXh0qJRmMeWdUHvy6Ceh4DPA48pzzmV4DqlVoCz
SyE/n7MRbzhML7WASvaGn9+sDVzV0/JU53gYyYTD1Hqs1zv38jPhpUdw5gbGvWPb7kDaafj49/wP
KKcrz2kpq93OCv7a4633HR6MA0kCgYEA6Kffn0ybeH9E5mYYx8hG29N1MfcAN1c7+hNZLf8jLywj
IajuL6m6ugMEk3i53DjjIh8YBSiF+7K1oY6NR8ux3t5YjNb2no/F8mCBm6EdFq4jP8LRIw5iJMzq
UGGdxrm+WW+iFZ7kMlG9kwZnOAc2tIDj/H0CnZlW5AYxPhCla0sCgYEAleKRkYKwrfOeTBgQqxqN
U/BZDfzs9l1dNn/4zPnWTbFKra0+93BSJ0D0a3cqZwFihPsG2mQDyLNS0vcpLwWxMKGjvDfMDIx4
WvOjYIizqFlIqwn/Z4kkWos3XaDviMd6PUnzkW2OCxnCEclM/NBPoeGbLjLToc0wBjevJRdWussC
gYBy8fXG43dwihiFaG3XzrhLhWbCf9FIhj3oqMSHuCUu+jSFPcwoGkhZ/IG3Ro81IZn+UrRwX/wK
Rdn87swYa6f+f4XqV45S+p+Gx21hcbFIclKR/vOKyWFt4xvlCMWF2GEWGNRQsEb4IXBzAlfe05mQ
hpmdNjojmQ3X7MNJcbn4jwKBgG39du9+JWNxvH+AxXKaqI2peeCe89GTEB03agAZcx9OdEvhL6zq
+w6dRwA50Z8HUCHgCNZowLIejjAMemdsWOwkIgC0PYQT7RppYkIr7xMiegYx7wAujsP3F6kYuc74
+4ZQZ3IYID2bKGRfAaUgxN85rOQJHm7FIXHemSOx7c5jAoGBAK63PkTQ214YwsppfUusLtQPRZ4w
/JKfMk86io9BcaIR3XGvXzIVgRn5q6ByZ4de+pc4wQeMB0yU58re74jxxQQ7L6CM2C/5oqMmQwvb
QjFxCwOERU/LM1007KTOwBe1lCxkENvrqPFzX+39vnbVr5vD9m4kS9rlA6LHS/b8peHh
-----END RSA PRIVATE KEY-----
```

### 更新 root 密码

```
sudo passwd root
Zxcv1234
Zxcv1234
```

## aws

### aws 重启

1. [进入服务器管理界面](https://ap-northeast-1.console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#Instances:sort=desc:tag:Name)
   ```
   zzyiy00@gmail.com
   Zzy_0521
   ```
2. 重启服务，`操作-实例状态-重启`

### 可访问端口

1. 网络安全-安全组-安全组 ID(sg-04dc9609148a981da)-编辑入站规则
2. 开启防火墙端口
   ```bash
   firewall-cmd --zone=public --add-port=27017/tcp --permanent;
   firewall-cmd --zone=public --add-port=27117/tcp --permanent;
   firewall-cmd --zone=public --add-port=27118/tcp --permanent;
   firewall-cmd --zone=public --add-port=27119/tcp --permanent;
   firewall-cmd --zone=public --add-port=80/tcp --permanent;
   firewall-cmd --zone=public --add-port=8080/tcp --permanent;
   firewall-cmd --zone=public --add-port=443/tcp --permanent;
   ```

> 重载，每次新增端口后需重载

```bash
firewall-cmd --reload
```

> 查看已开启端口

```bash
firewall-cmd --zone=public --list-ports
```

## 服务器操作

### 文件备份

```
cp -r /home/ec2-user/gameMart/app /home/copy/20200
cp -r /home/ec2-user/gameMart/config /home/copy/20200
```

### docker 启动

### mongodb

> 修改配置

```bash
vi /etc/mongod.conf
```

> 连接 mongo

```bash
# 连接&创建角色
mongo --port 27117
use admin
db.createUser({user:'admin',pwd:'123456',roles:[{role:'root',db:'admin'}]})
use game_mall
db.createUser({user:'lx',pwd:'123456',roles:[{role:'dbOwner',db:'game_mall'}]})

# 授权连接
mongo admin -u admin -p 123456 --port 27117

# 多文档事务报错
# 提前创建好集合
db.order.insertOne({ _id: '1', price: 1 })
db.log_order_status.insertOne({ ip: '1' })
```

> 查找进程

```bash
# 查找mongo进程id
ps -axu |grep mongo
kill -2 <进程id>
```

> 重启 mongo

```bash
systemctl restart mongod

cfg.members[0].host = "13.231.19.131:27117"
```

### egg 项目启动

> 安装依赖,登录 ec2-user 账号

```bash
cd /home/ec2-user/gameMart
npm i
```

> 启动停止

```bash
# 停止
pm2 stop start.js
# 重启
pm2 restart start.js
# 启动
pm2 start start.js
```

### nginx

> 启动

```bash
systemctl start nginx
```

### redis

## 环境配置

1. node>=8.0
2. mongodb>=4.0
3. redis
4. nginx

```bash
node -v
mongod --version
redis-server -v
nginx -v
```

## 项目启动

### 后端环境

1. 拉取代码，安装依赖
2. 执行 npm run dev, 启动后端服务

### admin

1. 拉取代码，安装依赖
2. 执行 npm run build
3. 配置 nginx, 启动 nginx

### mobile

1. 拉取代码，安装依赖
2. 执行 npm run build, 启动后端服务
3. 配置 nginx, 启动 nginx

## 导入数据库

1. 菜单，角色，数据字典
2. 多文档事务，需要提前建好集合

## 事务使用

1. 配置复制集
2. 使用事务方法封装 api

```

```
