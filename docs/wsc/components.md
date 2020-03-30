# 自定义组件

## infinite

### 封装

`_footer.art`

- 根据`id:infinitePage`默认设置加载更多样式
- `getPageParam()`中默认设置请求页码+1
- 注册了上拉加载更多事件

### 注意点

- 容器上绑定 id `infinitePage`
- 获取列表数据的函数名为 `queryData`
- 接口调用使用 `$.ajaxjsonp(url, dataMap, fnSuccess, isPage, fnComplete)`
  - `isPage` 必须设置为 true

### 示例

html

```html
<!-- 滚动容器必须设置id:infinitePage -->
<section class="wx_main" id="infinitePage">
  <div id="list"></div>
</section>
```

js

```js
$(function() {
  initPage()
})
function initPage() {
  $('#pageIndex').val(0) // 初始化当前页数
  $('#list').html('') // 清空列表
  queryData()
}
function queryData() {
  var url = requestPath + '/m/purchase/myPurchase.htm'
  $.ajaxjsonp(
    url,
    {
      pm: $('#pm').attr('value') || 'FDY',
      pageSize: 10, // 设置每页数据条数，默认10条(可不传)
    },
    function(res) {
      $('#list').append(template('listTmp', { data: res.data.result }))
      console.log(res.data)
    },
    true // 当前页面使用加载更多，默认false(不使用)
  )
}
```

## select

### 引用

```html
<!-- 下拉框样式引入 -->
<link rel="stylesheet" href="../../css/weui-select.min.css" />
<!-- 自定义下拉组件引入 -->
<% include ../../components/_select.art %>
```

### 参数

- `class` 必须包含 `top_filter`
  ```html
  <ul class="top_filter"></ul>
  ```
- `id` \<string\>
- `label` \<string\> 展示文本
- `options` \<object\> 参考 [select 组件](http://old.jqweui.com/extends#select)
  - `onChange` \<callback\> 重置默认效果，参考`_select.art`

### 示例

```js
selectInit(
  'pm',
  '品名',
  {
    title: '选择品名',
    items: [
      { title: '不限', value: '' },
      { title: 'DTY', value: 'DTY' },
      { title: 'POY', value: 'POY' },
    ],
  },
  queryData // 选择完成执行回调
)
```

## calendar

### 引用

```html
<% include ../../components/_calendar.art %>
```

### 参数

- `class` 必须包含 `top_filter`
  ```html
  <ul class="top_filter"></ul>
  ```
- `id` \<string\>
- `label` \<string\> 展示文本
- `options` \<object\> 参考 [日历组件](http://old.jqweui.com/extends#calendar)
- `callback` \<string\> 回调函数

### 示例

```js
calendarInit('rqStart', '开始日期', {}, initPage)
```

## upload

:::tip 组件文件
\_upload.html <br/>
common.less => .uploadImg
:::

### 属性

| 属性     | 描述         | 补充                                                   |
| -------- | ------------ | ------------------------------------------------------ |
| mode     | 上传展示形式 | 默认:有删除标识，nodelete:无删除标识，点击当前图片上传 |
| max      | 张数上限     | 默认值：1                                              |
| multiple | 多图上传     |                                                        |

### 引用

```html
<div id="xyUploader" max="9" multiple="multiple"></div>

<!-- 置于<% include ../../_foot.html %>之后 -->
<% include ../include/_upload.html %>
```

```js
// wrapId：容器 id
// imgUrl：需要回显图片＜相对路径＞
uploadTemplate(wrapId, imgUrl)

// 获取上传图片路径
$('#wrapId').attr('url')
```

### 图片预览

```html
<!-- 若使用图片预览，需添加 -->
<script src="../../lib/swiper.min.js"></script>
```

## 信息反馈

### 单项容器

- `class`: align-center (垂直居中)

```html
<div class="visited__row align-center"></div>
```

### 提示

- class:
  - `visited__row-tip` (默认宽度)
  - `visited__row-tip_dy` (自适应宽度)

```html
<span class="visited__row-tip">突发状况</span>
```

### 输入框

- `class`：whole(占整行，不设置默认宽度)
- `required`: 必填项（必须设置 title）
- `title`: 同提示

```html
<input
  id="emergency"
  required
  title="突发状况"
  placeholder="请输入客户本身或市场等突发状况"
  class="visited__input whole"
  type="text"
/>
```

::: warning messageVistAddressAddNew.js
在`tempInput`中添加需要传递的字段
:::

```js
var tempInput = ['emergency']
```

### 选择框

- `class`: checkbox (多选框, 不设置为单选框)
- `required`: 必填项（必须设置 title，默认勾选第一项）
- `title`: 同提示

```html
<div
  required
  id="downstreamMarket"
  title="下游市场"
  class="visited__row-content checkbox"
></div>
```

::: warning messageVistAddressAddNew.js

1. 插入选择框模板
2. 在`tempRadio`中添加需要传递的字段

:::

```js
tagTemplate('creditExtension', bankCredit)
var tempRadio = ['creditExtension']
```
