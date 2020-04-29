# req

```js
;[
  '_readableState',
  'readable',
  '_events',
  '_eventsCount',
  '_maxListeners',
  'socket',
  'connection',
  'httpVersionMajor',
  'httpVersionMinor',
  'httpVersion',
  'complete',
  'headers',
  'rawHeaders',
  'trailers',
  'rawTrailers',
  'aborted',
  'upgrade',
  'url',
  'method',
  'statusCode',
  'statusMessage',
  'client',
  '_consuming',
  '_dumped',
]
```

## .headers

```json
{
  "host": "127.0.0.1:3000",
  "connection": "keep-alive",
  "pragma": "no-cache",
  "cache-control": "no-cache",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
  "sec-fetch-dest": "image",
  "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
  "sec-fetch-site": "same-origin",
  "sec-fetch-mode": "no-cors",
  "referer": "http://127.0.0.1:3000/login",
  "accept-encoding": "gzip, deflate, br",
  "accept-language": "zh,zh-CN;q=0.9,ja;q=0.8,en;q=0.7"
}
```

## .url

```bash
# http://127.0.0.1:3000/login?username=zhangsan
# /login?username=zhangsan
```

## .method

```bash
# GET
```
