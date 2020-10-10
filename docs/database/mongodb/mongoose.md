# mongoose

[egg-mongoose 文档](https://www.npmjs.com/package/egg-mongoose)

## 基本使用

### 1. 引入

```js
const mongoose = require('mongoose')
```

### 2. 建立数据库连接

```js
mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms', function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('数据库连接成功！')
})
```

### 3. 定义数据库模型 schema

```js
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: {
    type: Number,
    default: 1,
  },
})
```

### 4. 定义 model 操作数据库

```js
const UserModel = mongoose.model('User', UserSchema)
```

### 5.使用 model 操作数据库

```js
const user = new UserModel({
  name: 'zhangsan',
  age: 14,
})
user.save(function(err, doc) {
  console.log(err, doc)
})
```

## 模块化

### DB

```js
const mongoose = require('mongoose')

mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms', function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('数据库连接成功')
})

module.exports = mongoose
```

### schema

```js
const mongoose = require('./db')

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
})

module.exports = mongoose.model('User', UserSchema, 'users')
```

## 模型

### 预定义修饰器

- trim
- uppercase
- lowercase

```js
const UserSchema = new mongoose.Schema({
  name: {
    trim: true,
    uppercase: true,
    lowercase: true,
  },
})
```

### 自定义装饰器 setter

- setter 存入前格式化数据

```js
const UserSchema = new mongoose.Schema({
  num: {
    set(val) {
      return '00' + val
    },
  },
})
```

### 扩展静态方法

```js
UserSchema.static.findByAge = function(age, cb) {
  this.model.find({ age }, function(err, docs) {
    cb(err, docs)
  })
}
```

### 扩展实例方法

```js
UserSchema.methods.print = function(age, cb) {
  console.log(this.name, '实例方法')
}
```

### 数据校验

- required
- max: Number
- min: Number
- enum
- match
- maxlength
- minlength

### 自定义校验

```js
const UserSchema = new mongoose.Schema({
  desc: {
    type: String,
    validate(desc) {
      return desc.length >= 10
    },
  },
})
```

### aggregate

_mongoose 中获取 ObjectId:`mongoose.Types.ObjectId`_

```js
// 通过商品明细找到订单信息
OrderItemModel.aggregate([
  {
    $lookup: {
      from: 'order', // 关联表名
      localField: 'order_id', // 当前表字段
      foreignField: 'order_id', // 管理表字段
      as: 'order_info', // 关联后数据存放字段
    },
  },
  {
    $match: {
      _id: mongoose.Types.ObjectId('5b743da92c327f8d1b360546'),
    },
  },
])
```

`Hero.js`

```js
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  password: {
    type: String,
    select: false, // 不查询
    set(val) {
      // 散列
      return require('bcrypt').hashSync(val, 10)
    },
  },
  // 多个关联字段
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: {
    difficult: { type: Number },
    skill: { type: Number },
    attack: { type: Number },
    survive: { type: Number },
  },
  skills: [
    {
      name: { type: String },
      icon: { type: String },
      description: { type: String },
    },
  ],
  partner: [
    {
      hero: { type: mongoose.SchemaTypes.ObjectId },
      description: { type: String },
    },
  ],
})

module.exports = mongoose.model('Hero', schema)
```

### populate

```js
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  // 设置外键对应的数据库表名
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
})
const Menu = mongoose.model('Menu', schema, 'menus')
// 多个关联查询
const items = await Menu.find()
  .populate('categories')
  .populate('parent')
```

## issue

### Cannot create namespace game_mall.log_order_status in multi-document transaction.

由于事务不能在不存在的集合上进行，所以要进行事务的集合必须已经创建。如果集合没有创建，就会报这个异常。
解决方案是在先把集合创建好，再开启事务

可尝试如下方法：
db.createCollection("xxx")
