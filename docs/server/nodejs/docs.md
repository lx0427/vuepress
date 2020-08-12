# node

## fs

### stat 检测试文件还是目录

```js
const fs = require('fs')

fs.stat('data', (err, stat) => {
  if (err) throw err
  console.log(stat.isFile())
  console.log(stat.isDirectory())
})
```

### mkdir 创建目录

```js
const fs = require('fs')

fs.mkdir('css', (err) => {
  if (err) throw err
})
```

```js
const fs = require('fs')

// 创建层级目录
fs.mkdir('css/css/css', { recursive: true }, (err) => {
  if (err) throw err
})
```

### writeFile

```js
const fs = require('fs')

fs.writeFile('./css/index.css', 'body{font-size:14px}', (err) => {
  if (err) throw err
})
```

### appendFile

```js
const fs = require('fs')

fs.appendFile('css/index.css', ';.red{color:red};', (err) => {
  if (err) throw err
})
```

### readFile

```js
const fs = require('fs')

fs.readFile('css/index.css', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
```

### readFileSync 读取文件同步方法

```js
const fs = require('fs')

try {
  let data = fs.readFileSync('./data/mime.json')
} catch (error) {
  console.log(error)
}
```

### readdir 读取目录

```js
const fs = require('fs')

fs.readdir('css', (err, data) => {
  if (err) throw err
  console.log(data) // 返回所有<文件>+<目录名>
})
```

### rename 重命名

> 可以用来移动文件

```js
const fs = require('fs')

fs.rename('css/index.css', 'style/common.css', (err) => {
  if (err) throw err
})
```

### rmdir 删除空目录

```js
const fs = require('fs')

fs.rmdir('./css/css', (err) => {
  if (err) throw err
})
```

### unlink 删除文件

```js
const fs = require('fs')

fs.unlink('css/123.js', (err) => {
  if (err) throw err
})
```

### createWriteStream 创建文件

```js
const fs = require('fs')

let writeStream = fs.createWriteStream('data/input.txt')
writeStream.write('this is content')

writeStream.end()
writeStream.on('finish', () => {
  console.log('写入完成')
})
```

### createReadStream 文件读取

```js
const fs = require('fs')

let readStream = fs.createReadStream('data/input.txt')
let str = ''
let count = 0
readStream.on('data', (data) => {
  str += data
  count++
})
readStream.on('end', () => {
  console.log(str, count)
})
```

### 大文件复制 pipe

```js
const fs = require('fs')

let readStream = fs.createReadStream('./banner-01.png')
let writeStream = fs.createWriteStream('data/02.png')
readStream.pipe(writeStream)
```

### 案例

> 获取指定路径下的目录数组

- 递归实现

```js
const fs = require('fs')
var path = './root'

var arr = []

fs.readdir(path, (err, data) => {
  if (err) throw err
  ;(function getDir(i) {
    if (i === data.length) {
      console.log(arr, '递归实现异步获取')
      return
    }
    fs.stat(path + '/' + data[i], (err, d) => {
      if (err) throw err
      if (d.isDirectory()) {
        arr.push(data[i])
      }
      // 递归调用
      getDir(++i)
    })
  })(0)
})
```

- async-await

```js
const fs = require('fs')
const path = './root'
let dirArr = []

function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      resolve(stats.isDirectory())
    })
  })
}

console.time()
fs.readdir(path, async (err, data) => {
  if (err) throw err
  for (let i = 0; i < data.length; i++) {
    if (await isDir(path + '/' + data[i])) {
      dirArr.push(data[i])
    }
  }
  console.timeEnd()
  console.log(dirArr)
})
```

- 多线程读取目录

```js
const fs = require('fs')
const path = './root'

function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      if (stats.isDirectory()) {
        resolve(path.split('/').pop())
      } else {
        resolve('')
      }
    })
  })
}
console.time()
fs.readdir(path, async (err, data) => {
  if (err) throw err
  try {
    let promises = data.map((v) => isDir(`${path}/${v}`))
    let results = await Promise.all(promises)
    results = results.filter((s) => s)
    console.log(results)
    console.timeEnd()
  } catch (e) {
    console.log(e)
  }
})
```

## http

### 创建服务

```js
var http = require('http')
http
  .createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World 1234')
  })
  .listen(8081)

console.log('Server running at http://127.0.0.1:8081/')
```

## url

### parse

```js
const url = require('url')
url.parse('https://localhost:3000/admin?token=123')

// {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'localhost:3000',
//   port: '3000',
//   hostname: 'localhost',
//   hash: null,
//   search: '?token=123',
//   query: 'token=123',
//   pathname: '/admin',
//   path: '/admin?token=123',
//   href: 'https://localhost:3000/admin?token=123'
// }

url.parse('https://localhost:3000/admin?token=123', true)
// {
//   query: { token: '123' },
//   ...
// }
```

### get 参数获取

```js
const url = require('url')
url.parse(req.url, true).query
```

## post 参数获取

```js
;(req, res) => {
  req.on('data', (data) => {
    params += data
  })
  req.on('end', () => {
    res.end(params)
  })
}
```
