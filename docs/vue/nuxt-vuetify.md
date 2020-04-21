# nuxt+vuetify 服务端渲染

## 新建项目

```bash {7,9,10}
yarn create nuxt-app web
# 空格选择选项，回车确认选项
? Project name `web`
? Project description `My astonishing Nuxt.js project`
? Author name `lx0427`
? Choose the package manager `Yarn`
? Choose UI framework `Vuetify.js`
? Choose custom server framework `None (Recommended)`
? Choose Nuxt.js modules `Axios, Progressive Web App (PWA) Support, DotEnv`
? Choose linting tools `ESLint, Prettier`
? Choose test framework `None`
? Choose rendering mode `Universal (SSR)`
? Choose development tools `jsconfig.json (Recommended for VS Code)`
```

## 启动服务

```
cd web
yarn dev
```

## [vuetify 文档](https://vuetifyjs.com/zh-Hans/introduction/why-vuetify)

## 页面

### 布局

`layouts/default.vue`

> 入门指南/预置布局/youtube 复制代码
> 使用 youtube 布局模板 -- Material Icons

### icon 样式引入

> 引入 Material Icons 样式文件

```js
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons'
      }
    ]
  }
}
```

## nuxt

### nuxt-child

> 类似 router-view

### axios

#### 设置请求路径环境变量

> 设置 axios 请求根地址 API_URL(名字默认)

```
BASE_URL=http://localhost:3000
API_URL=http://localhost:3002
```

#### .vue 中使用

```html
<script>
  export default {
    // 在上下文中引用了axios
    async asyncData({ $axios }) {
      const data = await $axios.$get('courses')
      return {
        courses: data.data
      }
    }
  }
</script>
```

#### 引入环境变量

`nuxt.config.js`

```js
import dotenv from 'dotenv'
dotenv.config()
```

## 其他

### vue 2 snippets

> nuxt 语法提示

### Delete `␍` prettier/prettier

`.prettierrc`

```
"endOfLine": "auto"
```
