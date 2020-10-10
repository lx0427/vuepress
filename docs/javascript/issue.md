# issue

## mobile

### 手机点击触发不灵敏问题

```js
FastClick.prototype.focus = function(targetElement) {
  var length
  // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
  if (
    !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) &&
    targetElement.setSelectionRange &&
    targetElement.type.indexOf('date') !== 0 &&
    targetElement.type !== 'time' &&
    targetElement.type !== 'month' &&
    targetElement.type !== 'email'
  ) {
    length = targetElement.value.length
    targetElement.focus() //加入这一句话就OK了
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}
```

### 键盘收起底部空白问题

```js
//软键盘收起的事件处理
document.body.addEventListener('focusout', () => {
  // ios
  if (!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    var currentPosition, timer
    var speed = 1
    timer = setInterval(function() {
      currentPosition = document.documentElement.scrollTop || document.body.scrollTop
      currentPosition -= speed
      window.scrollTo(0, currentPosition) //页面向上滚动
      currentPosition += speed
      window.scrollTo(0, currentPosition) //页面向下滚动
      clearInterval(timer)
    }, 100)
  }
})
```

### IOS new Date()

```js
new Date('YYYY-MM-DD') // 可以使用
new Date('YYYY-MM-DD HH:mm:dd') // 会出错
// 解决方案
new Date('YYYY/MM/DD HH:mm:dd') // => 严格按照当前格式
```

### script 标签

- defer: 所有脚本加载完后执行
- async: 脚本加载完立即执行

### 普通添加与事件绑定

- onclick: 只能绑定单个,后面的会覆盖前面的
- addEventListener: 可以绑定多个事件
- 自定义事件: CustomEvent
- 阻止冒泡或捕获: event.stopPropagation()
- 阻止事件默认行为: event.stopDefault()
- 都阻止: return false

### spa 首屏加载慢

1. `dns-prefetch`: dns 预获取(显式); `preload`预加载(异步); `prefetch`空闲时间加载

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="x-dns-prefetch-control" content="on" />
    <link rel="dns-prefetch" href="//upload.fdc.com.cn" />
    <link rel="preload" href="//js.cdn.com/currentPage-part1.js" as="script" />
  </head>
  <body>
    <link rel="preload" href="//js.cdn.com/currentPage-part1.js" as="script" />
  </body>
</html>
```

2. 路由组件懒加载
   - webpack 自动代码分割的异步组件
   - 分组打包异步块
   ```js
   const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
   const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
   const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
   ```
3. gzip 压缩
   - productionGzip: true
4. 把不需要打包的库文件分离出去，在页面引用
   - externals
5. 使用 CDN + oss
   - 静态资源放到 oss,通过 cdn 分发到用户
   - 将 cdn 回源设置为 oss 源站
6. 服务端渲染，Nuxt.js
