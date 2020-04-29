# mongoose

## 连接

```js
module.exports = (app) => {
  const mongoose = require('mongoose')

  mongoose.connect('mongodb://127.0.0.1:27017/full1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
```

## 模型

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
    }
  },
  // 多个关联字段
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: {
    difficult: { type: Number },
    skill: { type: Number },
    attack: { type: Number },
    survive: { type: Number }
  },
  skills: [
    {
      name: { type: String },
      icon: { type: String },
      description: { type: String }
    }
  ],
  partner: [
    {
      hero: { type: mongoose.SchemaTypes.ObjectId },
      description: { type: String }
    }
  ]
})

module.exports = mongoose.model('Hero', schema)
```

## populate

```js
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
})
const Menu = mongoose.model('Menu', schema, 'menus')
// 多个关联查询
const items = await Menu.find()
  .populate('categories')
  .populate('parent')
```
