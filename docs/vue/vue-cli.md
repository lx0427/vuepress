# Vue Cli

## 基本使用

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

## 跨域

### 本地运行代理

`vue.config.js`

```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8001', // 目标地址--api路径
        ws: true, //// 是否启用websockets
        changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: { '^/api': 'http://localhost:8080/api' }, // 这里重写路径--vue端口
      },
    },
  },
}
```

### 线上部署，nginx 代理

`nginx.conf`

```conf
server {
    listen       4567;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location /api {
        add_header 'Access-Control-Allow-Origin' $http_origin;
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,web-token,app-token,Authorization,Accept,Origin,Keep-Alive,User-Agent,X-Mx-ReqToken,X-Data-Type,X-Auth-Token,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Content-Type' 'text/plain; charset=utf-8';
            add_header 'Content-Length' 0;
            return 204;
        }
        root   html;
        index  index.html index.htm;
        proxy_pass http://192.168.0.225:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 5;
    }

    location / {
        root   C:/Users/XF/Desktop/pro;
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

## vue.config.js

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

## pages

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

## css.loaderOptions

```js
{
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
```

## eslint

::: tip
处理 eslint 报错
:::
`.eslintrc.js`

```js
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: ['plugin:vue/essential', 'standard'],
  plugins: ['vue'],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': 'off',
    'prefer-promise-reject-errors': 'off',
  },
}
```
