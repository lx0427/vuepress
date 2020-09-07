# express

## 常用 API

| API               | 用法                                       | 用途          |
| :---------------- | :----------------------------------------- | :------------ |
| create            | create(req.body)                           | 创建          |
| find              | find(queryOptions)                         | 查找列表      |
| findById          | findById(req.params.id, req.body)          | id 查找       |
| findByIdAndUpdate | findByIdAndUpdate(req.params.id, req.body) | id 查找并更新 |
| findByIdAndDelete | findByIdAndDelete(req.params.id, req.body) | id 查找并删除 |

## 入口文件

`index.js`

```js
const express = require('express')
const app = express()

// 设置全局变量
app.set('secretKey', '1das2sfs3ad4ssd')

// 请求跨域
app.use(require('cors')())
// 请求参数转json
app.use(express.json())
// 静态文件托管
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./router/admin')(app)

app.listen('3000', () => {
  console.log('http://localhost:3000')
})
```

## 接口文件

`admin/index.js`

```js
module.exports = (app) => {
  const express = require('express')
  const assert = require('http-assert')
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resoure')

  const router = express.Router({
    // 合并参数到req.params
    mergeParams: true
  })

  // 创建资源
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 更新资源
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除资源
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  // 列表列表
  router.get('/', async (req, res) => {
    let queryOptions = {}
    if (req.Model.modelName === 'Category') {
      // 关联字段
      queryOptions.populate = 'parent'
    } else if (req.Model.modelName === 'Edu') {
      // 降序排列
      queryOptions.sort = { sort: 'desc' }
    }
    let findOptions = {}
    if (req.query.parent) {
      // 查找条件
      findOptions = { parent: req.query.parent }
    }
    const items = await req.Model.find(findOptions)
      // 设置请求参数
      .setOptions(queryOptions)
      // 限制条数
      .limit(100)
    res.send(items)
  })
  // 资源详情
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id, req.body)
    res.send(model)
  })

  // 子路由挂载
  // 路由参数，使用mergeParams: true合并到req.params
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  // 上传图片
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  // 单张上传，上传文件的字段名
  app.post('/admin/api/uploads', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  // 登录
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.获取用户信息
    const AdminUser = require('../../models/AdminUser')
    // 查询数据(含密码)
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')

    // 2.校验密码
    // 比较散列数据
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码不正确')

    // 3.返回token
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({ id: user._id }, app.get('secretKey'))
    res.send({
      token,
      menu: user.menu
    })
  })

  // 捕获报错
  app.use(async (err, req, res, next) => {
    // 手动提示的错误 err.__proto__
    res.status(err.status || 500).send(err)
  })
}
```

## 中间件

### 授权验证

`auth.js`

```js
module.exports = (options) => {
  return async (req, res, next) => {
    // token生成及解析
    const jwt = require('jsonwebtoken')
    // 错误提示
    const assert = require('http-assert')

    // token不存在是不传的情况
    const token = String(req.headers.authorization || '')
      .split(' ')
      .pop()
    assert(token, 401, '请先登录1')

    // 有效token
    const tokenData = jwt.verify(token, req.app.get('secretKey'))
    assert(tokenData, 401, '请先登录2')

    // 获取用户是否存在
    // 用户模型可以考虑外部传入
    const AdminUser = require('../models/AdminUser')
    req.user = await AdminUser.findById(tokenData.id)
    assert(req.user, 401, '请先登录3')
    next()
  }
}
```

### 资源模型

`resource.js`

```js
module.exports = (options) => {
  return async (req, res, next) => {
    // 将小写复数转成大驼峰类名
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}
```
