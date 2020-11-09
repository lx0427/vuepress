## 进入 line 服务后台

- address: https://notify-bot.line.me/ja/
- 点击登录：
  - 747079868@qq.com
  - zzyiy5555
- Manage registered services

## 接口文档

[line API](https://notify-bot.line.me/doc/ja/)

1. 点击授权链接获取 code
2. 根据 code 获取 access_token
3. 使用 access_token 推送消息

## 进入 line 授权链接

- response_type：固定値，code
- scope：固定値，notify
- redirect_uri: 进入已建服务 Callback URL
- client_id: 进入已建服务 Client ID
- state：userId

`https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=9hPRLUepY9uQv2GhyXNOYm&redirect_uri=http://gamermart.jp:7001/line/bindback&scope=notify&state=${userId}`

授权完成重定向到 redirect_uri

## 回调接口

接口对应 redirect_uri，如下：
`http://gamermart.jp:7001/line/bindback?code=xk3H2GnL8tIoO2Ylo7Bda4&state=${userId}`

- state： 指定的状态参数按原样传递，即 userId
- code： 获取访问令牌的代码

## OAuth2 access_token

- grant_type：固定值，authorization_code
- code：获取访问令牌的代码，上述回调中获取
- redirect_uri: 进入已建服务 Callback URL
- client_id: 进入已建服务 Client ID
- client_secret: 进入已建服务 Client Secret

```js
async getToken(code) {
  let res = await this.ctx.curl('https://notify-bot.line.me/oauth/token', {
    method: 'POST',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      grant_type: 'authorization_code',
      code,
      redirect_uri: `http://gamermart.jp:7001/line/bindback`,
      client_id: '9hPRLUepY9uQv2GhyXNOYm',
      client_secret: 'TkWuQstK9B5NiaGlwpyCFRp25ftowzE04kfy2lpD0eR',
    },
  })
  if (res.data.status === 200) {
    return res.data // {status: 200, access_token: '1KF2OqLxIGE5aedTQ5kipb6dzDMxKjwEn0s3L5UHonD'}
  } else {
    throw (422, res.data)
  }
}
```

## 消息推送

access_token: 永久储存，用于消息推送

```bash
curl -X POST -H 'Authorization: Bearer 1KF2OqLxIGE5aedTQ5kipb6dzDMxKjwEn0s3L5UHonD' -F 'message=foobar' \
https://notify-api.line.me/api/notify
# {status:200, message:'ok'}
```
