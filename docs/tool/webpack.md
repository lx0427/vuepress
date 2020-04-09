# webpack

## 基本使用

### 初始化项目

1. 初始化包管理文件`npm init -y`
2. 初始化文件目录

### 安装和配置 webpack

```
npm i webpack webpack-cli -D
```

### 配置入口和输出文件

- `entry` 入口文件
- `output` 输出文件

### 自动打包

**生成的 bundle.js，存在于内存中**

```bash
# 自动打包工具，默认开启http服务
npm i webpack-dev-server -D
```

### 生成预览页面

```bash
npm i html-webpack-plugin -D
```

### 配置自动打包参数

- `--open` 自动打开浏览器
- `--host` 配置 ip 地址
- `--port` 设置端口号

```bash
webpack-dev-server --open --host 127.0.0.1 --port 8888
```

### 脚本命令

- 添加命令

  ```json
    "script":{
      "dev": "webpack"
    }
  ```

- 执行命令
  ```bash
   npm run  dev
  ```

## 加载器使用

### 处理 css

```bash
npm i style-loader css-loader -D
```

### 处理 less

```bash
npm i less-loader less -D
```

### 处理 scss

- 设置 node-sass 全局镜像

```bash
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm i sass-loader node-sass -D
```

### 自动添加 css 前缀

```bash
npm i postcss-loader autoprefixer -D
```

`postcss.config.js`

```js
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [autoprefixer],
}
```

### 打包样式表中的图片和文字

```bash
npm i url-loader file-loader -D
```

### js 高级语法

```bash
# babel转换器相关包
npm i babel-loader @babel/core @babel/runtime -D
# babel语法插件相关包
npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D
```

`babel.config.js`

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
}
```

### vue 组件加载器

```bash
npm i vue-loader vue-template-compiler -D
```

### 在项目中使用 vue

```bash
npm i vue -S
```

`index.js`

```js
import Vue from 'vue'
import App from './components/App.vue'
const vm = new Vue({
  el: '#app',
  render: (h) => h(App),
})
```

### webpack 打包

`package.json`

```json
"scripts": {
  "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8888",
  "build": "webpack -p",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

## vue 脚手架

```bash
npm i @vue/cli -g
```

### 创建项目

- vue-runtime
- vue-router
- no history
- eslint: Standard
- In dedicated config files 使用独立的配置文件

#### 命令行创建

```bash
vue create project
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Linter
  ? Use history mode for router? (Requires proper server setup for index fallback in production) No
  ? Pick a linter / formatter config: Standard
  ? Pick additional lint features: Lint on save
  ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
  ? Save this as a preset for future projects? (y/N) n
```

#### 图形化创建

```bash
vue ui
```

#### 基于 2.x 的旧模板

```bash
npm i -g @vue/cli-init
vue init webpack project_3
  ? Project name project_3
  ? Project description A Vue.js project
  ? Author
  ? Vue build runtime
  ? Install vue-router? Yes
  ? Use ESLint to lint your code? Yes
  ? Pick an ESLint preset Standard
  ? Set up unit tests No
  ? Setup e2e tests with Nightwatch? No
  ? Should we run `npm install` for you after the project has been created? (recommended) npm
```

### 配置文件

`vue.config.js`

```js
module.exports = {
  devServer: {
    port: '8888',
    open: true,
  },
}
```

## 格式化报错

### 格式设置

`.prettierrc`

```
{
  "semi": false,
  "singleQuote": true
}
```

### eslint 规则设置

```js
module.exports = {
  rules: {
    'space-before-function-paren': 0, // 函数名与小括号中间空格数
  },
}
```
