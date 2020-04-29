# mongodb/CRUD

## 数据库

### 连接

```js
const { MongoClient } = require('mongodb')
// 连接
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  let db = client.db('itying')
  // 查询
  db.collection('admin').find({ username: 'zs' })
  // 关闭
  client.close()
})
```

### 新增

```js
db.collection('admin').insertOne({ username: 'zs', age: 18 })
```

### 查询

```js
db.collection('admin').find({ username: 'zs' })
```

### 修改

```js
db.collection('admin').updateOne({ username: 'zs' }, { age: 22 })
```

### 删除

```js
db.collection('admin').deleteOne({ username: 'zs' })
```

## 封装类

```js
const { MongoClient } = require('mongodb')
const config = require('./config')
class Db {
  // 单例：避免重复实例化
  static getInstance() {
    if (!Db.instance) {
      Db.instance = new Db()
    }
    return Db.instance
  }
  // 实例化时执行
  constructor() {
    this.dbClient = ''
    // 连接数据库
    this.connect()
  }
  connect() {
    return new Promise((resolve, reject) => {
      // 单例模式：避免重复连接数据库
      if (!this.dbClient) {
        MongoClient.connect(config.DBURL, { useUnifiedTopology: true }, (err, client) => {
          if (err) reject(err)
          this.dbClient = client.db(config.DBNAME)
          resolve(this.dbClient)
        })
      } else {
        resolve(this.dbClient)
      }
    })
  }
  find(collectionName, json) {
    return new Promise((resolve, reject) => {
      // Promise.then
      this.connect().then((db) => {
        let result = db.collection(collectionName).find(json)
        result.toArray((err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
    })
  }
  insert(collectionName, json) {
    return new Promise(async (resolve, reject) => {
      // async-await
      let db = await this.connect()
      db.collection(collectionName).insertOne(json, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
  update(collectionName, queryJson, updateJson) {
    return new Promise(async (resolve, reject) => {
      let db = await this.connect()
      db.collection(collectionName).updateOne(queryJson, { $set: updateJson }, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
  remove(collectionName, queryJson) {
    return new Promise(async (resolve, reject) => {
      let db = await this.connect()
      db.collection(collectionName).deleteOne(queryJson, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }
}

module.exports = Db.getInstance()
```
