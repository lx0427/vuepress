# 兼容问题

## IOS

### new Date()

```js
new Date('YYYY-MM-DD') // 可以使用
new Date('YYYY-MM-DD HH:mm:dd') // 会出错
// 解决方案
new Date('YYYY/MM/DD HH:mm:dd') // => 严格按照当前格式
```
