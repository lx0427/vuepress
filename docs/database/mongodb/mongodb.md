# mongoDB

## 基础

### 概念

- 数据库 database
- 集合 collection
- 文档 document

```js
// 非关系型数据库(No SQL) 文档数据库
// BSON = json + 二级制
```

### 安装

_4.0 版本开始自动设置为 window 服务_

1. [https://www.mongodb.org/dl/win32](https://www.mongodb.org/dl/win32)
2. 配置环境变量，指向安装的`bin`目录
3. `cmd`, 执行`mongo`

**mongo 命令执行报错：**

1. `services.msc` 查看 `MongoDB Server` 未启动
2. 手动启动报错
3. 查看 `D:\MongoDB\bin\mongod.cfg` 中，将最后一行 `mp:` 注释掉
4. 重启服务即可

## 权限管理

### 配置超级管理员

```js
db.createUser({
  user: 'admin',
  pwd: '123456',
  roles: [{ role: 'root', db: 'admin' }]
})
```

### 开启权限认证

`mongod.cfg`

```cfg
security:
  authorization: enabled
```

### 重启 mongoDB 服务

`win + R` => services.msc => 重启 mongo 服务

### 使用超级管理员链接数据库

> 本地连接

```bash
mongo admin -u root -p 123456
```

> 远程连接

```bash
mongo 192.168.0.107:27017/test -u root -p 123456
```

### 给数据库指定用户

```bash
use test
db.createUser({
 user: 'zs',
 pwd: '123456',
 roles: [{ role: 'dbOwner', db: 'test' }]
})
```

## database & collection

### database

> 查看

```js
show dbs
```

> 切换

```js
use itying
db // itying
```

> 删除

```js
db.dropDatabase()
```

### collection

> 查看

```js
show collections
```

> 切换

```js
db.user.find({})
```

> 删除

```js
db.user.drop()
```

## CRUD

### 新增

```js
// 向集合中插入数据
db.user.insert({ name: 'xiaoming' })
```

### 查找

```js
// name='zs'
db.user.find({ name: 'zs' })
// name以zs开头
db.user.find({ name: /^zs/ })
// name='zs' AND age=13
db.user.find({ name: 'zs', age: 13 })
// age>18
db.user.find({ age: { $gt: 18 } })
// age<=13
db.user.find({ age: { $lte: 13 } })
// 查看值为1的列
db.user.find({}, { name: 1, age: 1 })
// 查看前面10条
db.user.find().limit(10)
// 查看11-20条数据
db.user
  .find()
  .limit(10)
  .skip(10)
// 分页查询
var pagesize = 10
var page = 2
db.user
  .find()
  .limit(pagesize)
  .skip(pagesize * (page - 1))
// name='zs' || name='ls' 并列多个条件
db.user.find({ $or: [{ name: 'zs' }, { name: 'ls' }] })
// 统计条数
db.user.find().count()
```

### 更新

```js
// 替换当前文档
db.user.update({ name: '修改后' }, { name: '替换' })
// 更新名称
db.user.update({ name: 'zs' }, { $set: { name: 'zs11' } })
// 批量修改
db.user.update({ age: 13 }, { $set: { sex: '男' } }, { multi: true })
// 更新所有文档
db.user.update({}, { $set: { status: 0 } }, false, true)
```

### 删除

```js
// 删除满足条件的数据所有数据
db.user.remove({ age: { $gt: 30 } })
```

### 封装类

> 连接数据库

```js
const { MongoClient } = require('mongodb')
// 连接
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  let db = client.db('itying')
  // 查询
  db.collection('admin').find({ username: 'zs' })
  // 关闭
  client.close()
})
```

> 实现 CRUD

```js
const { MongoClient } = require('mongodb')
const config = require('./config')
class Db {
  // 单例：避免重复实例化
  static getInstance() {
    if (!Db.instance) {
      Db.instance = new Db()
    }
    return Db.instance
  }
  // 实例化时执行
  constructor() {
    this.dbClient = ''
    // 连接数据库
    this.connect()
  }
  connect() {
    return new Promise((resolve, reject) => {
      // 单例模式：避免重复连接数据库
      if (!this.dbClient) {
        MongoClient.connect(config.DBURL, { useUnifiedTopology: true }, (err, client) => {
          if (err) reject(err)
          this.dbClient = client.db(config.DBNAME)
          resolve(this.dbClient)
        })
      } else {
        resolve(this.dbClient)
      }
    })
  }
  find(collectionName, json) {
    return new Promise((resolve, reject) => {
      // Promise.then
      this.connect().then((db) => {
        let result = db.collection(collectionName).find(json)
        result.toArray((err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
    })
  }
  insert(collectionName, json) {
    return new Promise(async (resolve, reject) => {
      // async-await
      let db = await this.connect()
      db.collection(collectionName).insertOne(json, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
  update(collectionName, queryJson, updateJson) {
    return new Promise(async (resolve, reject) => {
      let db = await this.connect()
      db.collection(collectionName).updateOne(queryJson, { $set: updateJson }, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
  remove(collectionName, queryJson) {
    return new Promise(async (resolve, reject) => {
      let db = await this.connect()
      db.collection(collectionName).deleteOne(queryJson, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
}

module.exports = Db.getInstance()
```

## 索引

```js
// 获取当前集合索引
db.user.getIndexes()
// 设置单个索引
db.user.ensureIndex({ name: 1 })
// 删除索引
db.user.dropIndex({ name: 1 })
// 复合索引
db.user.ensureIndex({ name: 1, phone: -1 })
// 删除符合索引
db.user.dropIndex({ name: 1, phone: -1 })
// 设置唯一索引（唯一：字段不能重复）
db.user.ensureIndex({ name: 1 }, { unique: true })
// 执行语句所化时间
db.user.find({ name: 'app121' }).explain('executionStats').executionStats.executionTimeMillis
```

## aggregate

### \$project SElECT

> 查询指定字段

```js
db.order.find({}, { order_id: 1, trade_no: 1, all_price: 1 })
db.order.aggregate([
  {
    $project: { order_id: 1, trade_no: 1, all_price: 1 }
  }
])
```

### \$match WHERE HAVING

> 条件匹配

```js
db.order.aggregate([
  {
    $match: { all_price: { $gt: 90 } }
  }
])
```

### \$group GROUP BY

> 分组，统计 \$sum SUM()

```js
db.order_item.aggregate([
  {
    $group: {
      _id: '$order_id',
      total: { $sum: '$num' }
    }
  }
])
```

### \$limit LIMIT

> 限制结果数量

```js
db.order_item.aggregate([
  {
    $limit: 2
  }
])
```

### \$skip

> 跳过文档数量
> 分页: 使用管道查询必须按照顺序

```js
var pagesize = 2
var pages = 2
db.order_item.aggregate([
  {
    $skip: pagesize * (pages - 1)
  },
  {
    $limit: pagesize
  }
])
```

### \$sort ORDER BY

> 排序

```js
db.order_item.aggregate([
  {
    $sort: {
      price: 1
    }
  }
])
```

### \$lookup JOIN

> 表关联查询

```js
db.order.aggregate([
  {
    $match: {
      all_price: { $gte: 90 }
    }
  },
  {
    $lookup: {
      from: 'order_item',
      localField: 'order_id', // 当前表字段
      foreignField: 'order_id', // 管理表字段
      as: 'items' // 关联后数据存放字段
    }
  }
])
```

## 备份恢复

### 备份

1. 切换到 `D:\MongoDB\bin` 目录, 执行配备命令如下
   ```bash
   mongodump --username=admin --password=123456
   ```
2. 导出文件目录：`D:\MongoDB\bin\dump`

### 恢复

1. 将文件拷贝到服务器,如`/home/database/game_mall`
2. 切换到 `mongodb/bin` 目录
   ```bash
   # linux: 寻找mongodb安装目录
   cat /etc/mongod.conf
   ```
3. 执行如下命令，还原备份到数据库
   ```bash
   # 用户登录权限认证 --authenticationDatabase admin
   mongorestore -u=admin -p=123456 --authenticationDatabase admin  -d game_mall --dir=/home/database/game_mall
   ```

## 可视化工具

[studio 3t](https://robomongo.org/)
