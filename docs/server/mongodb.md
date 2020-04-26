# mongoDB

```js
database
关系型数据库(表)
非关系型数据库(No SQL) 文档数据库
BSON = json + 二级制
```

## 开始

### 数据库与集合

```js
mongo
// 创建数据库
use itying
// 查看数据库中集合
show collections
// 向集合中插入数据
db.user.insert({"name":"xiaoming"})
// 查看集合中所有文档
db.user.find()
// 删除集合
db.user.drop()
// 删除数据库
db.dropDatabase()
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
```

### 删除

```js
// 删除满足条件的数据所有数据
db.user.remove({ age: { $gt: 30 } })
```

### 索引

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

### 管道 aggregate

```js
// 查询字段筛选 $project SElECT
db.order.find({}, { order_id: 1, trade_no: 1, all_price: 1 })
db.order.aggregate([
  {
    $project: { order_id: 1, trade_no: 1, all_price: 1 }
  }
])
// 条件匹配 $match WHERE HAVING
db.order.aggregate([
  {
    $match: { all_price: { $gt: 90 } }
  }
])
// 分组 $group GROUP BY
// 统计 $sum SUM()
db.order_item.aggregate([
  {
    $group: {
      _id: '$order_id',
      total: { $sum: '$num' }
    }
  }
])
// 限制结果数量 $limit LIMIT
db.order_item.aggregate([
  {
    $limit: 2
  }
])
// 跳过文档数量 $skip
// 分页: 使用管道查询必须按照顺序
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
// 排序 $sort ORDER BY
db.order_item.aggregate([
  {
    $sort: {
      price: 1
    }
  }
])
// 表关联查询 $lookup  JOIN
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

### 权限管理

- 配置超级管理员

  ```js
  db.createUser({
    user: 'admin',
    pwd: '123456',
    roles: [{ role: 'root', db: 'admin' }]
  })
  ```

- 开启权限认证
  `mongod.cfg`

  ```cfg
  security:
    authorization:enabled
  ```

- 重启 mongoDB 服务
  `win + R` => services.msc =>

## 安装

_4.0 版本开始自动设置为 window 服务_

1. [https://www.mongodb.org/dl/win32](https://www.mongodb.org/dl/win32)
2. 环境变量
3. 新建 `C:\\data\db`
4. mongod 启动数据库服务器
   - mongod --dbpath 路径 --port 端口号
   - 将 mongod 设置系统服务
5. mongo 启动客户端
6. 新建 `C:\\data\log`

### 可视化工具

[studio 3t](https://robomongo.org/)

## 概念

- 数据库 database
- 集合 collection
- 文档 document

```js
show dbs
use full
show collections
use test
db // test
```

## CRUD

> 第一次创建数据时创建数据库

### insert

`db.<collection>.insert()`

- insertOne({})
- insertMany([])

```js
db.stus.insert({ name: 'zbj', age: 28, gender: 'male' })
db.stus.insert([
  { name: '沙和尚', age: 38, gender: '男' },
  { name: '蜘蛛精', age: 17, gender: '女' },
  { name: '猪八戒', age: 28, gender: '男' }
])
```

### find

`options`

- find `Array`
- findOne `Object`

```js
// 完全匹配
db.stus.find({ name: '猪八戒' })
db.stus.findOne({ name: '猪八戒' })
db.stus.find().count()
```
