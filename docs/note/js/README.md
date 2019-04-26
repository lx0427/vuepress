# JS

## IOS
### new Date()
```js
new Date('YYYY-MM-DD') // 可以使用
new Date('YYYY-MM-DD HH:mm:dd') // 会出错
// 解决方案
new Date('YYYY/MM/DD HH:mm:dd') // => 严格按照当前格式
```

## 字符串转数字(隐式)
| 符号 | 含义        | 隐式转换   |
| ---- | ----------- | ---------- |
| +    | 加号&连字符 | 不建议使用 |
| -    | 减号        | -0         |
| *    | 乘号        | *1         |
| /    | 除号        | /1         |