# mongoDB

```
database
关系型数据库(表)
非关系型数据库(No SQL) 文档数据库
BSON = json + 二级制
```

## 开始

### 数据库与集合

```bash
mongo
# 创建数据库
use itying
# 查看数据库中集合
show collections
# 向集合中插入数据
db.user.insert({"name":"xiaoming"})
# 查看集合中所有文档
db.user.find()
# 删除集合
db.user.drop()
# 删除数据库
db.dropDatabase()
```

### 查找

```bash
# name='zs'
db.user.find({name:'zs'})
# name以zs开头
db.user.find({name:/^zs/})
# name='zs' AND age=13
db.user.find({name:'zs',age:13})
# age>18
db.user.find({age:{$gt:18}})
# age<=13
db.user.find({age:{$lte:13}})
# 查看值为1的列
db.user.find({},{name:1,age:1})
# 查看前面10条
db.user.find().limit(10)
# 查看11-20条数据
db.user.find().limit(10).skip(10)
# 分页查询
var pagesize = 10
var page = 2
db.user.find().limit(pagesize).skip(pagesize*(page-1))
# name='zs' || name='ls' 并列多个条件
db.user.find({$or:[{name:'zs'},{name:'ls'}]})
# 统计条数
db.user.find().count()
```

### 更新

```bash
# 替换当前文档
db.user.update({name:'修改后'},{name:'替换'})
# 更新名称
db.user.update({name:'zs'},{$set:{name:'zs11'}})
# 批量修改
db.user.update({age:13},{$set:{sex:'男'}},{multi:true})
```

### 删除

```bash
# 删除满足条件的数据所有数据
db.user.remove({age:{$gt:30}})
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

### 可视化工具

[studio 3t](https://robomongo.org/)

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
