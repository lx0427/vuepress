# mongoose

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
