## 登录 paypl

1. 登录地址：https://www.paypal.com/
2. 账号密码：
   - zzyiy00@gmail.com
   - Zzy_0521

## 创建付款按钮

- [流程图](https://www.paypal.com/jp/webapps/mpp/developer/paypal-button/integration)
- [操作文档](https://developer.paypal.com/docs/integration/web/) - 创建付款按钮 - 立即购买
- [创建按钮-立即购买](https://www.paypal.com/buttons/)
- 拷贝 html 代码

```html
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="RF3Q72EPLFMR8" />
  <input
    type="image"
    src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
    border="0"
    name="submit"
    alt="PayPal - The safer, easier way to pay online!"
  />
  <img alt="" border="0" src="https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif" width="1" height="1" />
</form>
```

## 付款完成后自动设置退货

- [流程图](https://www.paypal.com/jp/webapps/mpp/developer/paypal-button/checkout-setting)
- [网站设定](https://www.paypal.com/businessmanage/account/website)
  - redirect_uri: http://www.gamermart.jp:7001/pay/paypalBack
  - ID 令牌(PDT): `I3KsJLA8HLCQVW__nxuJMZGDLbSdv-liK2MjDBGvZZ3SHXJmwOFtjLAHyc8`

## 付款数据传输

- [文档](https://developer.paypal.com/docs/api-basics/notifications/payment-data-transfer/#)
- 操作流程描述
  1.  客户提交付款。
  2.  PayPal 通过 HTTP 将付款的交易 ID 作为 GET 变量（tx）发送。此信息将发送到您在贝宝帐户配置文件中指定的返回 URL。
  3.  您的返回 URL 网页包含 HTML POST 表单，该表单检索交易 ID 并将交易 ID（tx）和您唯一的 PDT 令牌发送到 PayPal。
  4.  贝宝（PayPal）回复一条消息，指示 SUCCESS 或 FAIL。该 SUCCESS 消息以<Key> = <Value>格式包括每行一个的交易详细信息。此键值对字符串是 URL 编码的。
  5.  您的网页解析该消息，然后为客户显示信息。

## 支付流程

```js
// 1.支付成功，重定向地址 http://www.gamermart.jp:7001/pay/paypalBack?tx=<tx>&amt=<amt>&item_name=<item_name>
// 2.进入后台接口
async function paypalBack() {
  const { ctx } = this
  const { amt, item_name, tx } = ctx.request.query
  // 3.后台校验支付信息
  const res = await ctx.curl('https://www.paypal.com/cgi-bin/webscr', {
    method: 'GET',
    dataType: 'text',
    data: {
      tx, // 交易 ID
      at: 'I3KsJLA8HLCQVW__nxuJMZGDLbSdv-liK2MjDBGvZZ3SHXJmwOFtjLAHyc8', //  PDT 令牌
      cmd: '_notify-synch',
    },
  })
  // 匹配：订单号+订单状态+订单金额
  // 满足上述条件，更新订单状态，添加支付记录
  // 重定向返回移动端
}
```
