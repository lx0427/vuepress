# answer

#### script 标签

- defer: 所有脚本加载完后执行
- async: 脚本加载完立即执行

#### 普通添加与事件绑定

- onclick: 只能绑定单个,后面的会覆盖前面的
- addEventListener: 可以绑定多个事件
- 自定义事件: CustomEvent
- 阻止冒泡或捕获: event.stopPropagation()
- 阻止事件默认行为: event.stopDefault()
- 都阻止: return false

#### 布局方式

- PC:静态布局，居中布局; 统一使用 px
- 流式布局: 大小变化，布局不变; vw,vh
- 自适应布局: 布局大小不变; `屏幕太小影响观看体验`
- 响应式布局: 位置大小都会变，`多套设计方案，工作量巨大`
- 弹性布局: rem/em

#### reset.css 与 normalize.css

- reset 重置元素样式达到统一
- normalize 模块化
- normalize 不会出现大段继承
- normalize 保留许多浏览器默认样式，尽可能让样式与现代标准相符合

#### spa 首屏加载慢

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

#### 移动端适配方案

> flexible

- 在所有资源加载之前执行这个 JS
- 动态改写 mate 标签
- 给 html 设置 data-dpr 属性
- 给 html 设置 font-size 样式:rem

```html
<!-- iphone6 -->
<html style="font-size: 75.04px;" data-dpr="2"></html>
<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no" />
```

#### 清除浮动

```css
.clearFloat {
  zoom: 1; // 兼容ie6
}
.clearFloat::after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
}
```

#### 盒子模型

```css
box-sizing: border-box; // width + margin
box-sizing: border-content; // width + padding + border + margin
```
