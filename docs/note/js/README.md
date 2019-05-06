# JS

## 图片上传
1. 监听change事件
1. 拿到`input:file`DOM
1. 将file文件转成base64的url做本地渲染
1. fd = new FormData()
1. fd.append('files',file)
1. 将fd传入接口请求上传图片
## IOS
### new Date()
```js
new Date('YYYY-MM-DD') // 可以使用
new Date('YYYY-MM-DD HH:mm:dd') // 会出错
// 解决方案
new Date('YYYY/MM/DD HH:mm:dd') // => 严格按照当前格式
```

## 浏览器问题
### 禁止缩放
* uc+qq浏览器仍能放大
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

## 字符串转数字(隐式)
| 符号 | 含义        | 隐式转换   |
| ---- | ----------- | ---------- |
| +    | 加号&连字符 | 不建议使用 |
| -    | 减号        | -0         |
| *    | 乘号        | *1         |
| /    | 除号        | /1         |

