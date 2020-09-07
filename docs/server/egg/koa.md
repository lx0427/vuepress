# koa

## @koa/router

### 基本使用

```js
const Koa = require('koa')
const app = new Koa()

const Router = require('@koa/router')
const router = new Router()
router.get('/', async (ctx, next) => {
  ctx.body = '123'
})
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
```

### get 传值

- **ctx.query**

```js
// 其他方式：ctx.querystring | ctx.request.query | ctx.request.querystring
router.get('/', async (ctx, next) => {
  ctx.body = ctx.query
})
```

### 动态路由

- **ctx.params**

```js
router.get('/:aid/:bid', async (ctx, next) => {
  ctx.body = ctx.params
})
```

## 中间件

### 应用级

> 访问所有路由打印时间

```js
app.use(async (ctx, next) => {
  console.log(new Date())
  await next() // 继续向下匹配
})
```

### 路由级

> 访问所有`/news`之前调用中间件

```js
router.get('/news', async (ctx, next) => {
  console.log('新闻')
  await next()
})
router.get('/news', async (ctx, next) => {
  ctx.body = '新闻'
})
```

### 执行顺序

```js
router.get('/news', async (ctx, next) => {
  console.log('执行顺序 2')
  ctx.body = '新闻'
})
app.use(async (ctx, next) => {
  console.log('执行顺序 1')
  await next()
  if (ctx.status === 404) {
    ctx.status = 404
    ctx.body = '404 页面没有找到'
  } else {
    console.log(ctx.url, '执行顺序 3')
  }
})
```

## koa-views + ejs

### 基本使用

> 若要解析.ejs 需要安装依赖 ejs

```js
const views = require('koa-views')
// 1. 模板后缀为.html
// app.use(views('views', { map: { html: 'ejs' } }))
// 2. 模板后缀为.ejs
app.use(
  views('views', {
    extension: 'ejs'
  })
)
```

### 配置全局共用数据

```js
app.use(async (ctx, next) => {
  ctx.state = {
    userInfo: '张三'
  }
  // 必须使用
  await next()
})
```

## koa-bodyparser

> 获取 post 请求参数

```js
const bodyparser = require('koa-bodyparser')
app.use(bodyparser())
router.post('/doAdd', async (ctx) => {
  // 获取传参
  ctx.body = ctx.request.body
})
```

## koa-static

> 配置 web 静态服务

```js
const static = require('koa-static')
app.use(static(__dirname + '/'))
```

## koa-art-template

> 在 koa 中使用 art-template

```js
const render = require('koa-art-template')
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})
router.get('/news', async (ctx) => {
  let list = [1, 2, 3]
  await ctx.render('news', {
    content: 'this is art-template',
    list
  })
})
```

## cookie

### 基本使用

- **ctx.cookies.set(`<key>,<value>,<options>`)**
  - `domain: '.hengyi.com'` 默认所有网站可访问
  - `path:'/'` 默认`/`,所有路由可访问
  - `httpOnly:true` 默认`true`,只有服务端可以访问
  - `secure:false` 默认`false`,true(只有 https 可以访问)
  - `maxAge:60 * 60 * 1000` 设置过期毫秒数
  - `expires: '2020-04-29'` 指定过期时间
- **ctx.cookies.get(`<key>`)**

```js
router.get('/', async (ctx) => {
  // 设置
  ctx.cookies.set('userInfo', 'admin', { maxAge: 60 * 60 * 1000 })
  await ctx.render('index')
})
router.get('/login', async (ctx) => {
  // 获取
  console.log(ctx.cookies.get('userInfo'))
  await ctx.render('login')
})
```

### 设置中文

```js
function bufBase64Encode(string) {
  return Buffer.from(string, 'utf-8').toString('base64')
}
function bufBase64Decode(string) {
  return Buffer.from(string, 'base64').toString('utf-8')
}
router.get('/', async (ctx) => {
  ctx.cookies.set('userInfo', bufBase64Encode('张三'), { maxAge: 60 * 60 * 1000 })
  await ctx.render('index')
})
router.get('/login', async (ctx) => {
  console.log(bufBase64Decode(ctx.cookies.get('userInfo')))
  await ctx.render('login')
})
```

## session

- **CONFIG**
  - `key: 'koa:sess'`
  - `maxAge: 10*1000` 设置过期时间
  - `autoCommit: true`
  - `overwrite: true` 可以复写
  - `httpOnly: true` true: 只有服务端可以获取
  - `signed: true` 默认签名
  - **`rolling: false`** true: 每次请求强制设置 session，这将重置 session 过期时间
  - **`renew:false`** true: 当 session 快过期时重置过期时间
  - `sameSite: null`

```js
const session = require('koa-session')
// 配置session中间件
app.keys = ['some secret hurr'] // 签名
const CONFIG = {
  key: 'koa:sess',
  maxAge: 10000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: true,
  sameSite: null
}
app.use(session(CONFIG, app))

router.get('/', async (ctx) => {
  // 设置
  ctx.session.userInfo = '张123'
  await ctx.render('index')
})
router.get('/login', async (ctx) => {
  // 获取
  console.log(ctx.session.userInfo)
  await ctx.render('login')
})
```

## 脚手架

```bash
npm i koa-generator -g
koa demo01
cd demo01
npm i
npm run start
```
