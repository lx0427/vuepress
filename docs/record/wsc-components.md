## 上传图片

:::tip
\_upload.html <br/>
common.less => .uploadImg
:::

### html

| 属性     | 描述         | 补充                                                   |
| -------- | ------------ | ------------------------------------------------------ |
| mode     | 上传展示形式 | 默认:有删除标识，nodelete:无删除标识，点击当前图片上传 |
| max      | 张数上限     | 默认值：1                                              |
| multiple | 多图上传     |                                                        |

```html
<!-- 上传组件指定容器id及相关参数 -->
<!-- 单图 -->
<div id="xyUploader" mode="nodelete"></div>
<!-- 多图 -->
<div id="xyUploader" max="9" multiple="multiple"></div>

<!-- 置于<% include ../../_foot.html %>之后 -->
<% include ../include/_upload.html %>

<!-- 若使用图片预览，需添加 -->
<script src="../../lib/swiper.min.js"></script>
```

### js

| 参数   | 描述           | 补充                     |
| ------ | -------------- | ------------------------ |
| wrapId | 容器 id        | 与上述容器上的标签一致   |
| imgUrl | 已上传图片回显 | 需要回显图片＜相对路径＞ |

```js
uploadTemplate(wrapId, imgUrl)

// 获取上传图片路径
$('#wrapId').attr('url')
```
