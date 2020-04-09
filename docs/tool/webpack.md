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
   yarn dev
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
