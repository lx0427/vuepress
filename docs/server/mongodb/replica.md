# 副本集

## 新建副本集

```js
// 新建节点目录
mkdir D:\MongoDB\myrs\27117
// 启动节点服务
mongod --replSet myrs --port 27117 --dbpath D:\MongoDB\myrs\27117 --oplogSize 128
mongod --replSet myrs --port 27117 --dbpath D:\MongoDB\myrs\27117 --smallfiles --oplogSize 128

mkdir D:\MongoDB\myrs\27118
mongod --replSet myrs --port 27118 --dbpath D:\MongoDB\myrs\27118 --oplogSize 128
mongod --replSet myrs --port 27118 --dbpath D:\MongoDB\myrs\27118 --smallfiles --oplogSize 128

mkdir D:\MongoDB\myrs\27119
mongod --replSet myrs --port 27119 --dbpath D:\MongoDB\myrs\27119 --oplogSize 128
mongod --replSet myrs --port 27119 --dbpath D:\MongoDB\myrs\27119 --smallfiles --oplogSize 128
```

## 连接主节点: 配置 + 初始化

```js
mongo --port 27117
rsconf = {
  _id: 'myrs',
  members: [
    {
      _id: 0,
      host: '127.0.0.1:27117'
    },
    {
      _id: 1,
      host: '127.0.0.1:27118'
    },
    {
      _id: 2,
      host: '127.0.0.1:27119'
    }
  ]
}
rs.initiate(rsconf)
```

## 副本集状态

```js
rs.status()
```

## 是否主节点

```js
db.isMaster()
```

## 插入数据（主节点）

```js
for (i = 0; i < 100; i++) {
  db.zt.insert({ name: i })
}
```

## 辅助节点

```js
mongo --port 27118
db
use admin
db.zt.find()
// 报错
db.getMongo().setSlaveOk()
db.zt.insert({name:'zhaosi'}) // 插入失败，not master
```

## 辅助节点 2

```js
mongo --port 27119
db.getMongo().setSlaveOk()
db.zt.insert({name:'zhaosi'}) // 插入失败，not master
// 停掉 27118 节点，并删除副本
db.shutdownServer()
```

## 删除辅助节点（主节点）

```js
mongo --port 27117
rs.remove("127.0.0.1:27118")
```

## 新增辅助节点（主节点）

```js
mkdir D:\MongoDB\myrs\27120
mongod --replSet myrs --port 27120 --dbpath D:\MongoDB\myrs\27120 --smallfiles --oplogSize 128

mongo --port 27117
rs.add("127.0.0.1:27120")
```
