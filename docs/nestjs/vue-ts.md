# vue+ts 项目搭建

## 项目安装

1. 使用 nvm 安装`node v10.17.0`

```bash
nvm install v10.17.0
```

2. 全局安装`@vue/cli`

```bash
npm i -g @nestjs/cli
```

1. 使用 vue 命令开始创建项目

```bash
cd fullstack
vue create admin
# default
cd admin
vue add element
# Still proceed? yes
# Fully import
# ...SCSS..? No
# zh-CN
vue add router
# Still proceed? yes
# History? No
vue add typescript
# Still proceed? yes
# class-style? yes
# JSX? yes
# .js to .ts? yes
# .js files to be compiled? No
```

2. 新建路由文件
3. 引入 axios

   ```js
   import axios from 'axios'
   Vue.prototype.$http = axios.create({
     baseURL: 'http://localhost:3000'
   })
   ```

## 问题处理

### `this.$http` 报错

新建`custom-vue.d.ts`文件

```ts
// 1. 确保在声明补充的类型之前导入 'vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Route } from 'vue-router'
import { AxiosInstance } from 'axios'

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $router: VueRouter
    $route: Route
    $api: any
    $http: AxiosInstance
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

### 路由跳转问题

如下：匹配路由为`/content/edit/123`
_不能匹配`/content/edit`_

```js
{
  // 编辑课程
  path: '/content/edit/:id',
  name: 'course-edit',
  component: CourseEdit,
  props: true // 配置接收参数,开启props接收
}
```

### watch 使用

```ts
// watch
@Watch("$route")
getRoute(to, from) {
  this.fetchOption();
  this.fetch();
  console.log(to, from, '$route')
}
```

### avue 上传图片

`main.ts`

```ts
Vue.prototype.$httpajax = http // 给avue上传图片使用
```
