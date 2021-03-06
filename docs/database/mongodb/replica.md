# 副本集

## 操作副本集

### 新建副本集

```js
// 新建节点目录
mkdir D:\MongoDB\myrs\27117
// 启动节点服务
nohup mongod --replSet myrs --port 27117 --dbpath /var/lib/mongo/rs1 --smallfiles --oplogSize 128 &
nohup mongod --replSet myrs --port 27118 --dbpath /var/lib/mongo/rs2 --smallfiles --oplogSize 128 &
nohup mongod --replSet myrs --port 27119 --dbpath /var/lib/mongo/rs3 --smallfiles --oplogSize 128 &


mongod --replSet myrs --port 27117 --dbpath /opt/mongodb/myrs/27117 --oplogSize 128


mongod --replSet myrs --port 27117 --dbpath D:\MongoDB\myrs\27117 --oplogSize 128
mongod --replSet myrs --port 27117 --dbpath D:\MongoDB\myrs\27117 --smallfiles --oplogSize 128
mongo admin -u admin -p 123456 --port 27117

mkdir D:\MongoDB\myrs\27118
mongod --replSet myrs --port 27118 --dbpath D:\MongoDB\myrs\27118 --oplogSize 128
mongod --replSet myrs --port 27118 --dbpath D:\MongoDB\myrs\27118 --smallfiles --oplogSize 128
mongo admin -u admin -p 123456 --port 27118

mkdir D:\MongoDB\myrs\27119
mongod --replSet myrs --port 27119 --dbpath D:\MongoDB\myrs\27119 --oplogSize 128
mongod --replSet myrs --port 27119 --dbpath D:\MongoDB\myrs\27119 --smallfiles --oplogSize 128
mongo admin -u admin -p 123456 --port 27119
```

### 连接主节点: 配置 + 初始化

```js
mongo --port 27117
rsconf = {
  _id: 'myrs',
  members: [
    {
      _id: 0,
      host: '127.0.0.1:27117'
    },
    {
      _id: 1,
      host: '127.0.0.1:27118'
    },
    {
      _id: 2,
      host: '127.0.0.1:27119',
      arbiterOnly:true
    }
  ]
}
rs.initiate(rsconf)
rsconf = {
  _id: 'myrs',
  members: [
    {
      _id: 0,
      host: '13.231.19.131:27117'
    },
    {
      _id: 1,
      host: '13.231.19.131:27118'
    },
    {
      _id: 2,
      host: '13.231.19.131:27119',
      arbiterOnly:true
    }
  ]
}
rs.reconfig(rsconf,{force:true})
```

### 副本集状态

```js
rs.status()
```

### 是否主节点

```js
db.isMaster()
```

### 插入数据（主节点）

```js
for (i = 0; i < 100; i++) {
  db.zt.insert({ name: i })
}
```

### 辅助节点

```js
mongo --port 27118
db
use admin
db.zt.find()
// 报错
db.getMongo().setSlaveOk()
db.zt.insert({name:'zhaosi'}) // 插入失败，not master
```

### 辅助节点 2

```js
mongo --port 27119
db.getMongo().setSlaveOk()
db.zt.insert({name:'zhaosi'}) // 插入失败，not master
// 停掉 27118 节点，并删除副本
db.shutdownServer()
```

### 删除辅助节点（主节点）

```js
mongo --port 27117
rs.remove("127.0.0.1:27118")
```

### 新增辅助节点（主节点）

```js
mkdir D:\MongoDB\myrs\27120
mongod --replSet myrs --port 27120 --dbpath D:\MongoDB\myrs\27120 --smallfiles --oplogSize 128

mongo --port 27117
rs.add("127.0.0.1:27120")
```

### 新增仲裁者

```js
rs.addArb('127.0.0.1:27118')
```

## 授权登录

### 配置超级管理员

```js
db.createUser({
  user: 'admin',
  pwd: '123456',
  roles: [{ role: 'root', db: 'admin' }],
})
db.createUser({
  user: 'root',
  pwd: '123456',
  roles: [{ role: 'root', db: 'admin' }],
})
```

### 开启权限认证

`mongod.cfg`

```cfg
security:
  authorization: enabled
```

### 重启 mongoDB 服务

`win + R` => services.msc => 重启 mongo 服务

### 使用超级管理员链接数据库

> 本地连接

```bash
mongo admin -u root -p 123456
```

> 远程连接

```bash
mongo 192.168.0.107:27017/test -u root -p 123456
```

### 查看用户

```bash
use admin
db.system.users.find().pretty()
```

### 删除用户

```bash
db.dropUser("app02")
```

## 事务

### 开启事务

```js
async function getSession(
  opt = {
    readConcern: { level: 'snapshot' },
    writeConcern: { w: 'majority' },
  }
) {
  const { mongoose } = this.app
  const session = await mongoose.startSession(opt)
  await session.startTransaction()
  return session
}
```

> 文档

1. [Transactions in Mongoose](https://mongoosejs.com/docs/transactions.html)
2. [transactions-write-concern](https://docs.mongodb.com/manual/core/transactions/#transactions-write-concern)

```js
 async add() {
    const { ctx } = this
    const { goods_id, num, buyers_id } = ctx.request.body

    const session = await ctx.getSession()

    try {
      // 1. 判断用户是否是客服, 客服不能购买商品
      const isService = await ctx.model.User.findOne({
        _id: buyers_id,
        is_service: 1,
      })
      if (isService) {
        return this.error('客服不能购买商品')
      }

      const goodsInfo = await ctx.model.Goods.findOne({ _id: goods_id })

      if (goodsInfo.stock <= 0) {
        // 提交事务
        await session.commitTransaction()
        return this.error('商品已售罄')
      }
      /* updateOne - session */
      await ctx.model.Goods.updateOne(
        { _id: goods_id },
        { $inc: { stock: -num } }
      ).session(session)

      const doc = new ctx.model.Order({
        ...ctx.request.body,
        _id: await ctx.helper.orderNo(),
      })
      /* save - session */
      const res = await doc.save({ session })

      // ctx.throw(422, 123)

      // 新增订单记录
      await ctx.service.order.statusRecord(
        {
          order_id: res._id,
          status: res.status,
        },
        session
      )

      // 提交事务
      await session.commitTransaction()
      this.success(res)
    } catch (err) {
      console.log(err, 'error')
      // 回滚事务
      await session.abortTransaction()
      ctx.logger.error(new Error(err))
    } finally {
      await session.endSession()
    }
  }
```
