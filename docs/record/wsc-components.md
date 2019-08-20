## 上传图片
:::tip
_upload.html <br/>
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
<div id="xyUploader" mode="nodelete" max="9" multiple="multiple" ></div>

<!-- 置于<% include ../../_foot.html %>之后 -->
<% include ../include/_upload.html %>
```
### js
| 参数     | 描述           | 补充                     |
| -------- | -------------- | ------------------------ |
| wrapId   | 容器id         | 与上述容器上的标签一致   |
| imgId    | 图片id         |                          |
| multiple | 多图上传       |                          |
| imgUrl   | 已上传图片回显 | 需要回显图片＜相对路径＞ |

```js
uploadTemplate(wrapId, imgId, multiple, imgUrl)

// 获取上传图片路径,只存相对路径
$('#'+imgId).attr('url')

// 获取多张图片url
var imgs = []
$('#'+wrapId+' .uploadPreview img').each(function() {
  imgs.push($(this).attr('url'))
})
var imgUrl = imgs.join(',')
```

