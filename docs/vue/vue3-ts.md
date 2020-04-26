# vue + typescript

## 路由

### 基本使用

```ts
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [{ path: '/user', name: 'user', component: User }]
  }
]

const router = new VueRouter({
  routes
})

export default router
```

### routes 类型声明

> 可以使用语法提示

```ts
const routes: RouteConfig[]
```

### 路由传参

1. 使用`:param`: 定义`参数名`
2. `props:true`: 开启路由传参模式

```ts
const routes = [{ path: '/:resource/list', name: 'user', component: Crud, props: true }]
```

### vue 文件

使用 ts, class-style 风格

```vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
// 标注为ts
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld // 引入组件
  }
})
export default class App extends Vue {
  data = {} // 定义数据
  fetch() {} // 定义方法
  created() {} // 同原created
}
</script>

<style lang="scss"></style>
```

## [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)

> ts 装饰器对应属性方法及生命周期函数

### prop

::: danger Error
Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "pageOption"
:::

> 有传入值使用；没有，使用默认值

```ts
@Prop(Object) pages!: any;
// 分页默认值
pageOption = this.pages || {
  pageSizes: [10, 20, 30, 50, 100],
  total: 0,
  pageSize: 10,
  page: 1
};
```

### watch

```ts
// watch
@Watch("$route")
getRoute(to, from) {
  this.fetchOption();
  this.fetch();
  console.log(to, from, '$route')
}
```

## 环境变量

`.env`

```
VUE_APP_API_URL=http://localhost:3009
```

`.env.local`

```
VUE_APP_API_URL=http://localhost:3002
```

## 组件

### v-model

`父组件`

```html
<template>
  <upload-file v-if="item.upload" :key="i" :url.sync="form[item.prop]"></upload-file>
</template>
<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import UploadFile from "./UploadFile.vue";
  @Component({
    components: {
      UploadFile
    }
  })
</script>
```

`子组件`

```html
<script lang="ts">
  import { Vue, Component, PropSync } from 'vue-property-decorator'
  @Component({})
  export default class UploadFile extends Vue {
    @PropSync('url', { type: String }) imgUrl!: string
  }
</script>
```

## 问题处理

### any 类型报错

::: danger Error
Parameter 'id' implicitly has an 'any' type.
:::

`tsconfig.json`

```json
{
  "compilerOptions": {
    "noImplicitAny": false
  }
}
```

### emmet 异常

1. 不触发

```json
{
  "emmet.includeLanguages": {
    "wxml": "html",
    "javascript": "javascriptreact",
    "vue": "html" // 在vue文件中也可以使用emmet展开
  }
}
```

2. 无法展开
   _卸载不常用插件_

### 引入插件报错问题

> declare module 'vue-ele-form'

`package.d.ts`

```ts
declare module 'vue-ele-form' {
  export const install: () => any
}
```

### avue 上传图片

`main.ts`

```ts
Vue.prototype.$httpajax = http // 给avue上传图片使用
```
