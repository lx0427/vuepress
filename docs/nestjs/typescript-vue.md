# 后台管理系统

## 项目搭建

```bash
vue create admin
vue add element
vue add router
# 暂不使用history模式
vue add typescript
yarn serve
# 启动服务，看到vue界面
# 出现报错，将main.ts中.js后缀去掉
# 修改App.vue为router-view
# 调整文件，删除不用文件
# 新增Main.vue后台主界面
# 配置菜单，标题，及router-view
# 新建.vue文件，router/index.ts中配置路由
# 开始书写课程管理
yarn add axios @types/axios
# 引入axios，接口请求数据,设置模块补充
yarn add @smallwei/avue
# 新建plugins/avue.js
# 在main.ts中引入使用
```

### avue.js

```js
import Vue from 'vue'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
Vue.use(Avue)
```

`main.ts`

```js
import './plugins/avue'
```

### 模块补充

`custom-vue.d.ts`

```ts
import Vue from 'vue'
import { AxiosInstance } from 'axios'

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance
  }
}
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
    HelloWorld, // 引入组件
  },
})
export default class App extends Vue {
  data = {} // 定义数据
  fetch() {} // 定义方法
  created() {} // 同原created
}
</script>

<style lang="scss"></style>
```

### 路由

同之前路由使用方式

```ts
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

// routes: RouteConfig[]将routes的类型标记
// 标记后有语法提示
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [],
  },
]

const router = new VueRouter({
  routes,
})

export default router
```

## 相关插件包

### npm 包

[avue](https://github.com/nmxiaowei/avue)
[avue 文档](https://avuejs.com/doc/crud/crud)

[vue-ele-form 文档](https://www.yuque.com/chaojie-vjiel/vbwzgu/twp49o)
