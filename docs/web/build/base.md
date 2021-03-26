```bash
npm init -y
# 安装webpack4
npm install webpack@4.43.0 webpack-cli@3.3.12 -D

# bundle.js => 启动自定义webpack

# webpack.js
# 入口函数 run
# 解析模块 parse
# => ast
npm i @babel/parser -D
# ast处理帮助方法
npm i @babel/traverse -D

# 添加脚本命令
# "dev": "webpack"

# webpack 基于 node
# webpack.config.js 配置文件
```

### bundle.js

```js
const Webpack = require('./lib/webpack.js')
const options = require('./webpack.config.js')

new Webpack(options).run()
```

### webpack.js

