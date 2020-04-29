# url

## parse

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

## get 参数获取

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
