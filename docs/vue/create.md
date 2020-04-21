# 项目

## 创建

```bash
# 安装指定版本node
nvm install v10.17.0
# 全局安装`@vue/cli`
npm i -g @vue/cli
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

## 常用插件

| 插件名           | 用途                                  |
| :--------------- | :------------------------------------ |
| axios            | 接口请求                              |
| sass sass-loader | sass(`.scss`)                         |
| dayjs            | 日期格式化                            |
| Avue             | 基于 vue.js 和 element 的后台集成方案 |
| vue-ele-form     |                                       |

### axios

- 全局引用

```ts
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000',
})
```

- 模块补充

> `this.$http` 报错

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

### Avue

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


