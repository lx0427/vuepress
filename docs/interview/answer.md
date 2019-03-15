# answer

#### script标签
* defer: 所有脚本加载完后执行
* async: 脚本加载完立即执行

#### 普通添加与事件绑定
* onclick: 只能绑定单个,后面的会覆盖前面的
* addEventListener: 可以绑定多个事件
* 自定义事件: CustomEvent
* 阻止冒泡或捕获: event.stopPropagation()
* 阻止事件默认行为: event.stopDefault()
* 都阻止: return false

#### 布局方式
* PC:静态布局，居中布局; 统一使用px
* 流式布局: 大小变化，布局不变; vw,vh
* 自适应布局: 布局大小不变; `屏幕太小影响观看体验`
* 响应式布局: 位置大小都会变，`多套设计方案，工作量巨大`
* 弹性布局: rem/em

#### reset.css与normalize.css
* reset重置元素样式达到统一
* normalize模块化
* normalize不会出现大段继承
* normalize保留许多浏览器默认样式，尽可能让样式与现代标准相符合

#### spa首屏加载慢
1. `dns-prefetch`: dns预获取(显式); `preload`预加载(异步); `prefetch`空闲时间加载
  ```html
  <!DOCTYPE html>
  <html lang="zh-cmn-Hans">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <link rel="dns-prefetch" href="//upload.fdc.com.cn">
    <link rel="preload" href="//js.cdn.com/currentPage-part1.js" as="script">
  </head>
  <body>
    <link rel="preload" href="//js.cdn.com/currentPage-part1.js" as="script">
  </body>
  </html>
  ```
2. 路由组件懒加载
   * webpack自动代码分割的异步组件
   * 分组打包异步块
    ```js
    const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
    const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
    const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
    ```
3. gzip压缩
   * productionGzip: true
4. 把不需要打包的库文件分离出去，在页面引用
   * externals
5. 使用CDN + oss
   * 静态资源放到oss,通过cdn分发到用户
   * 将cdn回源设置为oss源站
6. 服务端渲染，Nuxt.js

#### 移动端适配方案
> flexible 
* 在所有资源加载之前执行这个JS
* 动态改写mate标签
* 给html设置data-dpr属性
* 给html设置font-size样式:rem

```html
<!-- iphone6 -->
<html style="font-size: 75.04px;" data-dpr="2"></html>
<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">
```
#### 清除浮动
```css
.clearFloat{
  zoom:1; // 兼容ie6
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
box-sizing:border-box; // width + margin
box-sizing:border-content; // width + padding + border + margin
```