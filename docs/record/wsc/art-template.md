# art-template

## 官方文档

[art-template 文档](http://aui.github.io/art-template/zh-cn/docs/index.html)

## each

```html
<script id="listTpl" type="text/html">
  {{each data as value i}} {{/each}}
</script>
```

```js
$('#wrap').append(template('listTpl', { data: [] }))
```

## if

```html
<script id="listTpl" type="text/html">
  {{if a>5}} {{else if a=5}} {{else}} {{/if}}
</script>
```

```js
$('#wrap').append(template('listTpl', { a: 3 }))
```

## #function

```html
<script id="listTpl" type="text/html">
  {{each data as value i}}
  <span>限时价：￥{{#toFixed(value.price,2)}}</span>
  {{/each}}
</script>
```

```js
template.helper('toFixed', function(value, digit) {
  return Number(value).toFixed(digit)
})
```
