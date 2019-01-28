# m端重构

## 运行+打包
```
// 本地运行
$ yarn dev 

// 打包
$ yarn build
```

## 图片引用路径问题
::: tip 约定:
所有图片存放到`static/images`中
:::

`*.scss`
```scss
.xxx{
  background-image: url(@static/images/article/play.png);
}
```
`*.html`
```html
<img class="img-responsive" src="@static/images/head/go-back.png">
```


## 复用代码

### html
```html
@@include('header/header.html', {
  "title": "indexPage" // 传入的变量参数
})
```

### scss
`*.scss`
```scss
@import '../../include/header/header.scss'
```
::: warning 页面引用css
使用产出后路径
:::
```html
<link rel="stylesheet" href="/static/css/index.css">
```

### js
::: danger 
上下两行注释内引用的js,产出到指定路径被页面引用 <br>
如下：build.js `static/js/index.js`
:::
```html
<!-- build:js static/js/index.js -->
<script src="/static/js/index.js"></script>
<script src="/include/header/header.js"></script>
<!-- endbuild -->
```
## 页面结构
原始页面目录结构
```md
|-- houselist.html
|-- index.html
|-- measurement.html
|-- include
|   |-- header
|   |   |-- header.html
|   |   |-- header.js
|   |   |-- header.scss
    |-- js
    |   |-- common.js
    |   |-- config.js
    |   |-- houselist.js
    |   |-- index.js
    |-- styles
        |-- houselist.scss
        |-- index.scss
        |-- measurement.scss
        |-- common
            |-- common.scss
            |-- dialog.scss
            |-- mixin.scss
            |-- reset.scss
            |-- swiper.scss

```
产出目录`dist`,产出会合并js,css;
每个页面对应一个js,css
```md
|-- houselist.html
|-- index.html
|-- measurement.html
|-- static
    |-- favicon.ico
    |-- flexible.css
    |-- css
    |   |-- houselist.css
    |   |-- index.css
    |   |-- measurement.css
    |-- js
        |-- common.js
        |-- config.js
        |-- houselist.js
        |-- index.js
```

