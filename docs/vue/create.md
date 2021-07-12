# 项目搭建

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

## `.prettierrc`

```
{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "es5"
}
```

## `.eslintrc.js`

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "no-unused-vars": "warn",
    "space-before-function-paren": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
```

## vue cli

### 常用命令

```
// 全局安装
yarn global add @vue/cli
vue create hello-world

vue add @vue/eslint
vue add router

npx vue-cli-service serve // 启动服务
npx vue-cli-service help // 命令操作

vue inspect > output.js // 将配置文件导出
```

### vue.config.js

```js
{
    // <%= BASE_URL %>  => publicPath === BASE_URL
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dist/', // 页面引用资源公用路径
    outputDir: 'dist',
    assetsDir: '', // 静态资源
    indexPath: 'index.html', // 默认导出页面
    filenameHashing: true, // 文件名hash
    lintOnSave: true,
    transpileDependencies: [],
    productionSourceMap: true,
    crossorigin: undefined,
    pages,
    css,
}
```

### pages

```js
{
  index: { // 指定页面
    entry: `src/main.js`, // 入口
    template: 'public/index.html', // 页面模板
    filename: `index.html`, // 产出文件名
    title: `page title` // 配合模板一起使用 `<%= htmlWebpackPlugin.options.title %>`
  }
}
```

### 跨域

> 本地运行代理

```js
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8001", // 目标地址--api路径
        ws: true, //// 是否启用websockets
        changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: { "^/api": "http://localhost:8080/api" }, // 这里重写路径--vue端口
      },
    },
  },
};
```

### css 预编译配置

> less

```js
{
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
            unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
            viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: [".ignore"], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false, // 允许在媒体查询中转换`px`
          }),
        ];
      }
    }
  }
}
```

> scss

```js
// vue.config.js
{
  css: {
    loaderOptions: {
      sass: {
        // @/ 是 src/ 的别名
        // 全局引用公用样式
        data: `@import "@/assets/common/reset.scss";`
      },
      'postcss': {
        plugins: [
          require('postcss-px-to-viewport')({
              viewportWidth: 750,
              unitPrecision: 3,
              viewportUnit: 'vw',
              selectorBlackList: ['.ignore', '.hairlines', '.mobileSelect'],
              minPixelValue: 1,
              mediaQuery: false
          })
        ]
      }
    }
  }
}
```

## 查看当前适配浏览器版本 browserslist

```bash
npx browserslist@latest "last 2 version, >1%"
```

## polyfill （含第三方插件兼容）

```bash
npm install --save @babel/polyfill
```

```js
// main.js 入口文件
import "@babel-polyfill";
```

```js
// vue.config.js 配置文件
module.exports = {
  // 需要处理的node_modules包
  transpileDependencies: ["element-ui"],
  chainWebpack(config) {
    config.entry("main").add("babel-polyfill"); // main是入口js文件
  },
};
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
import axios from "axios";
Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3000",
});
```

- 模块补充

> `this.$http` 报错

`custom-vue.d.ts`

```ts
import Vue from "vue";
import { AxiosInstance } from "axios";

declare module "vue/types/vue" {
  interface Vue {
    $http: AxiosInstance;
  }
}
```

### Avue

```js
import Vue from "vue";
import Avue from "@smallwei/avue";
import "@smallwei/avue/lib/index.css";
Vue.use(Avue);
```

`main.ts`

```js
import "./plugins/avue";
```
