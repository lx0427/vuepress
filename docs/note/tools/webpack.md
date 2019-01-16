# webpack

## 配置环境

`package.json`
```json
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "test": "node build/build.js", // 测试
  "build": "node build/build.js", // 线上
  "upload": "ossUpload yfrelease dist ucm -c"
},
```

`config/dev.env.js`
```js
'use strict'
const merge = require('webpack-merge')
const testEnv = require('./test.env')

module.exports = merge(testEnv, {
  NODE_ENV: '"development"',
  API_SANBOX: '"http://sandbox.gw.fdc.com.cn/router/rest"'
})
```

`config/test.env.js`
```js
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  API_SANBOX: '"http://sandbox.gw.fdc.com.cn/router/rest"'
})
```

`config/pre.env.js`
```js
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  API_SANBOX: '"http://pregw.fdc.com.cn/router/rest"'
})
```

`config/prod.env.js`
```js
'use strict'
module.exports = {
  NODE_ENV: '"production"',
  API_SANBOX:'"http://gw.fdc.com.cn/router/rest"'
}
```

`config/index.js`
```js
'use strict'
const path = require('path')
const merge = require('webpack-merge')

const environment = {
  test: {
    env: require('./test.env'),
    assetsPublicPath: 'http://test.uc.m.fdc.com.cn/',
    productionSourceMap: false
  },
  build: {
    env: require('./prod.env'),
    assetsPublicPath: 'http://static.fdc.com.cn/ucm/',
    productionSourceMap: false
  }
}

module.exports = {
  build: merge({
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: 'https://static.fdc.com.cn/ucm/',

    /**
     * Source Maps
     */
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },environment[process.env.npm_lifecycle_event])
}
```

```
$ yarn build //  process.env.npm_lifecycle_event == 'build'
```

