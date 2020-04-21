# mongoDB

```
database
关系型数据库(表)
非关系型数据库(No SQL) 文档数据库
BSON = json + 二级制
```

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

## 概念

- 数据库 database
- 集合 collection
- 文档 document

```bash
show dbs
use full
show collections
use test
db # test
```

## CRUD

> 第一次创建数据时创建数据库

### insert

`db.<collection>.insert()`

- insertOne({})
- insertMany([])

```bash
db.stus.insert({name:"zbj",age:28,gender:"male"})
db.stus.insert([
  {name:"沙和尚",age:38,gender:"男"},
  {name:"蜘蛛精",age:17,gender:"女"},
  {name:"猪八戒",age:28,gender:"男"}
])
```

### find

`options`

- find `Array`
- findOne `Object`

```bash
# 完全匹配
db.stus.find({name:"猪八戒"})
db.stus.findOne({name:"猪八戒"})
db.stus.find().count()
```

```bash

```
