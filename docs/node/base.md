## API

### promisify

```js
const { promisify } = require('util')
const fs = require('fs')
const readFile = promisify(fs.readFile)

;(async () => {
  const res = await readFile('./const.js')
  console.log(res.toString())
})()
```

### Buffer

```js
const buf1 = Buffer.alloc(10) // 分配10个字节的内存空间
console.log(buf1)

const buf2 = Buffer.from('a')
console.log(buf2)

const buf3 = Buffer.from('中')
console.log(buf3)

// 二进制连接

const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4, buf4.toString())
```

### http

```js
const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  //   console.log('request...', getPrototypeChain(request))
  //   console.log('response...', getPrototypeChain(response))

  const { url, method, headers } = request
  if (url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8',
        })
        response.end('500,服务器挂了')
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  } else if (url === '/users' && method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'application/json',
    })
    response.end(JSON.stringify({ name: 'tomo' }))
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    // 访问图片
    fs.createReadStream('.' + url).pipe(response)
  } else {
    response.end('node kkb')
  }
})

server.listen(9099)

function getPrototypeChain(obj) {
  const prototypeChain = []
  while ((obj = Object.getPrototypeOf(obj))) {
    prototypeChain.push(obj)
  }
  return prototypeChain
}
```

### stream

```js
// 复制文件
const fs = require('fs')
const rs = fs.createReadStream('./1.png')
const ws = fs.createWriteStream('./2.png')
rs.pipe(ws)
```

## 手写cli

### 全局建立软连接

```bash
PS F:\KKB\node\vue-auto-router-cli> npm link
npm WARN vue-auto-router-cli@1.0.0 No description
npm WARN vue-auto-router-cli@1.0.0 No repository field.

up to date in 1.015s

10 packages are looking for funding
  run `npm fund` for details

D:\dev\nodejs\kkb -> D:\dev\nodejs\node_modules\vue-auto-router-cli\bin\kkb.js
D:\dev\nodejs\node_modules\vue-auto-router-cli -> F:\KKB\node\vue-auto-router-cli
```

### 执行文件

```md
|-- vue-auto-router-cli
    |-- package-lock.json
    |-- package.json
    |-- bin
        |-- kkb.js // 执行文件
```

```js
// 可执行文件
// 声明解释器的类型 后面就可以使用js
#!/usr/bin/env node
console.log('cli...')
```



## nodemon

```js
yarn global add nodemon
nodemon 01.js // 运行01.js文件
```

## jest

> [API](https://jestjs.io/docs/zh-Hans/getting-started)

### 安装

```bash
yarn global add jest
```

###  运行

```bash
# 执行测试文件并监听
# 执行ex01/index.js
jest ex01 --watch
```

###  创建测试用例

```markdown
|-- ex01 // 目录
    |-- index.js 
    |-- __tests__ // 测试目录结构
        |-- index.spec.js // 测试用例
        |-- data
            |-- about.vue
            |-- index.vue
```

> index.spec.js

```js
test('练习01 自动化生成路由配置', () => {
  const { getRouter } = require('../index')
  const ret = getRouter(__dirname + '/data')
  expect(getRouter(__dirname + '/data')).toBe(
    `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
{
    path: '/about',
    name: 'about',
    component: () => import('./views/about.vue')
},
{
    path: '/index',
    name: 'index',
    component: () => import('./views/index.vue')
},

    ]
})`
  )
})
```

## telnet

> 开启telnet:
>
> ​	控制面板 - 程序 - 启用或关闭 Windows功能 - Telnet client(勾选) - 确定

## curl

> 使用cmd

```bash
 # 发送请求
 curl -v http://www.baidu.com
```

