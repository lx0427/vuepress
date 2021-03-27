## v-for 的 key

> 不能达到优化重排的效果

```html
<div v-for="(item,i) in list" :key="i">{{ item }}</div>
```

1. key 是 sameVnode 的重要判断条件
2. sameVnode 的结果决定 updateChildren 的算法优化逻辑

```html
<!-- 必须使用唯一的 key -->
<div v-for="item in list" :key="item.id">{{ item.name }}</div
```
