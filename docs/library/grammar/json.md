# json

## parse

> 对象字符串转化为对象时，会**丢失数值精度**

```js
const str = '{"a":12.00}';
console.log(JSON.parse(str)); // {a: 12}
```
