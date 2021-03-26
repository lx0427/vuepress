## v-for的key

> 使用`<div v-for="(item,i) in list" :key="i">{{ item }}</div>`或者不使用key<br/>
> 不能达到优化重排的效果

1. key是sameVnode的重要判断条件
2. sameVnode的结果决定updateChildren的算法优化逻辑

> 解决思路<br/>
> 必须使用唯一的key,不能是可以随意重复的<br/>
> `<div v-for="item in list" :key="item.id">{{ item.name }}</div>`
