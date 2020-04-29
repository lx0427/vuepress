# http

## 创建服务

```js
var http = require('http')
http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World 1234')
  })
  .listen(8081)

console.log('Server running at http://127.0.0.1:8081/')
```

