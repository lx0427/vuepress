# vue+ts 项目搭建

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

4. 处理使用 this.\$http 报错问题

修改`shims-vue.d.ts`文件

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

5. 处理插件安装导致 emmet 无法展开

_卸载不常用插件_

```json
{
  "emmet.includeLanguages": {
    "wxml": "html",
    "javascript": "javascriptreact",
    "vue": "html" // 在vue文件中也可以使用emmet展开
  }
}
```

6. 引入插件报错问题

> declare module 'vue-ele-form'
