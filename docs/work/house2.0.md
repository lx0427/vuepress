# m端重构

## 我的房源
    
状态
| 字段   | type | 描述   | 操作                 |
| ------ | ---- | ------ | -------------------- |
| 全部   | 0    | 未删除 |                      |
| 草稿   | 1    | 未发布 | 发布，修改，删除     |
| 审核中 | 2    | 待审核 | 取消发布、修改、删除 |
| 显示中 | 3    | 已发布 | 取消发布、修改、删除 |
| 已删除 | 4    | 已删除 |                      |

字段含义
| 字段         | type | 描述   |     | 字段         | type | 描述   |     |
| ------------ | ---- | ------ | --- | ------------ | ---- | ------ | --- |
| *发布*       | ---  | ---    | --- | *发布类型*   | ---  | ---    | --- |
| publishState | 0    | 未发布 |     | businessType | 1    | 出售   |     |
| publishState | 1    | 待审核 |     | businessType | 2    | 求购   | ×   |
| publishState | 2    | 已发布 |     | businessType | 3    | 出租   |     |
| *删除*       | ---  | ---    | --- | businessType | 4    | 求租   | ×   |
| delState     | 0    | 未删除 |     | businessType | 5    | 商铺   | ×   |
| delState     | 1    | 已删除 |     | businessType | 6    | 写字楼 | ×   |

状态变化
出售：
房源 -> (发布) -> 审核中 -> (后台通过) -> 已发布(显示中) -> (下架/修改) -> 未发布(草稿)

出租：
房源 -> (发布) -> 已发布(显示中) -> (下架/修改) -> 未发布(草稿)
    -> (保存) -> 未发布(草稿)
    
## 我的订阅

```html
@@include('order-dialog/order-dialog.html')
<script src="./include/order-dialog/order-dialog.js"></script>
```

```scss
@import '../../include/order-dialog/order-dialog.scss';
```

DOM
* 订阅id(埋值):  `houseId` 
* 订阅按钮id:  `footerOrder`
* 订阅按钮文字id:  `footerOrderTip`
* 取消订阅显示文字id(埋值):  `footerOrderTipHide`  

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

