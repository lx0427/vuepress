## find

### 正则匹配

```js
// i 忽略大小写
{
  username: {
    $regex: new RegExp(username, 'i')
  }
}
```

### \$lookup

```js
{
  $lookup: {
    from: 'role', // 关联表名
    localField: 'role_id', // 内键
    foreignField: '_id', // 外键
    as: 'role_info', // 别名
  },
}
```

### \$project

过滤：

- 0: 不返回
- 1: 返回

```js
{
  $project: {
    password: 0,
  },
},
```

### \$set

更新指定字段

```js
{
  $set: {
    status: 1
  }
}
```
