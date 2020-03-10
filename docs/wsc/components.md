# 组件文档

## select

### 引用

```html
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
