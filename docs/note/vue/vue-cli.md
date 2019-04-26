# Vue Cli

## 配置
```js

```

## 使用
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

### .eslintrc.js
::: tip
处理eslint报错
:::
```js
module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
    },
    extends: [
      'plugin:vue/essential', 
      'standard'
    ],
    plugins: [
      'vue'
    ],
    rules: {
      'generator-star-spacing': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/no-parsing-error': 'off',
      'prefer-promise-reject-errors': 'off'
    }
}
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

### css.loaderOptions
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