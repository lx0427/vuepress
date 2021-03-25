# 游戏商城

## 账号

- mobile:
  - address: http://www.gamermart.jp/
  - 08048086867/aini123456
  - 08012345678/aini123456
- admin:
  - address: http://www.gamermart.jp:8081/
  - superadmin/123456
  - admin/123456

### paypal

zzyiy00@gmail.com/Zzy_0521

### outlook 商用版

- gamermart@gamermart.onmicrosoft.com
- Aini123456

## 发布准备

### 清理数据库

```js
db.adv.drop()
db.bank.drop()
db.browse.drop()
db.code.drop()
db.collection.drop()
db.comment.drop()
db.email.drop()
db.goods.drop()
db.log_account.drop()
db.log_order_status.drop()
db.message.drop()
db.order.drop()
db.sms.drop()
```

### 订单定时测试

```js
// 删除订单相关记录表
db.order.drop()
db.log_order_status.drop()
db.log_account.drop()
db.comment.drop()
// 批量插入1000条数据
var goodsId = ['5f881f093d9c0146f487d58e', '5f8948c91184415d90261c24', '5f8948cf1184415d90261c25']
var arr = []
var orderNum = 1000
for (let j = 0; j < goodsId.length; j++) {
  for (var i = 1; i <= orderNum; i++) {
    arr.push({
      _id: '2020101' + (500000 + i + j * orderNum) + '',
      tags: [ObjectId('5ed9df525c0d264d10b852db')],
      goods_img: [],
      status: NumberInt(1),
      audit: NumberInt(1),
      seller_id: ObjectId('5f881ee03d9c0146f487d58c'),
      game_id: ObjectId('5ed9d08d7863be0d5412651d'),
      platform: '手游',
      goodsname: '超炫皮肤 2/套',
      goods_desc: '超炫皮肤 2/套',
      price: NumberInt(1),
      is_hot: NumberInt(1),
      num: NumberInt(1),
      remark: '测试',
      goods_id: ObjectId(goodsId[j]),
      buyers_id: ObjectId('5f8799482c947c0ee456611b'),
      total_price: NumberInt(1),
      create_date: ISODate('2020-10-03T12:04:07.749+0000'),
      update_date: ISODate('2020-10-03T12:04:07.749+0000'),
    })
  }
}
db.order.insertMany(arr)
```

### 更新前 300 条数据

```js
db.order
  .find({ status: 2 })
  .limit(300)
  .forEach(function(doc) {
    db.order.update(
      { status: 2 },
      { $set: { status: NumberInt(3), update_date: ISODate('2020-10-03T12:04:07.749+0000') } }
    )
  })
```

## nodemailer

### qq 邮箱

1. 获取配置密码：
   - 邮箱设置-账户-POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV 服务-IMAP/SMTP 服务-开启
