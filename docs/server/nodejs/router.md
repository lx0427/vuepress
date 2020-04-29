# router

## 自定义

### 封装

`module/route.js`

```js
const url = require('url')
const fs = require('fs')
const path = require('path')

// 扩展res方法
function changeRes(res) {
  res.send = (data, code = 200, contentType = 'text/html') => {
    res.writeHead(code, { 'Content-Type': contentType + ';charset="utf-8"' })
    res.end(data)
  }
}
// 方法依赖changeRes对res的扩展
function initStaticServer(req, res, staticPath) {
  try {
    let pathname = url.parse(req.url).pathname
    let extname = path.extname(pathname)
    if (extname) {
      let mimeJson = JSON.parse(fs.readFileSync('./data/mime.json'))
      let data = fs.readFileSync(path.join(staticPath, pathname))
      res.send(data, 200, mimeJson[extname])
    }
  } catch (err) {
    console.log(err, 'initStaticServer Error')
  }
}

// 将app封装成私有方法
let server = () => {
  let G = {
    _get: {},
    _post: {}
  }
  let app = function(req, res) {
    changeRes(res)
    initStaticServer(req, res, 'public')

    let pathname = url.parse(req.url).pathname
    let method = req.method.toLowerCase()
    if (G['_' + method][pathname]) {
      if (method === 'get') {
        G['_' + method][pathname](req, res)
      } else if (method === 'post') {
        let requestParam = ''
        // 从请求中获取参数
        req.on('data', (data) => {
          requestParam += data
        })
        req.on('end', () => {
          res.body = requestParam
          G['_' + method][pathname](req, res)
        })
      }
    } else {
      res.send('页面不存在', 404)
    }
  }

  app.get = function(api, cb) {
    // 注册方法
    G._get[api] = cb
  }
  app.post = function(api, cb) {
    // 相同api,不同请求方式
    G._post[api] = cb
  }
  app.static = function(staticPath) {
    G.staticPath = staticPath
  }

  return app
}
module.exports = server()
```

### 使用

`app.js`

```js
const http = require('http')
const app = require('./module/route')
const ejs = require('ejs')

http.createServer(app).listen(3000)
console.log('http://localhost:3000')

app.get('/', function(req, res) {
  res.send('首页')
})
app.get('/login', function(req, res) {
  ejs.renderFile('./views/login.ejs', (err, data) => {
    res.send(data)
  })
  res.send('登录')
})
app.post('/login', function(req, res) {
  console.log(res.body)
  res.send(res.body)
})
```
