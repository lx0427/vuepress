### .eslintrc

```json
{
  "extends": "eslint-config-egg",
  "rules": {
    "arrow-parens": "off", // 关闭箭头函数检测
    "strict": "off",
    "semi": "off", // 关闭分号
    "no-empty-function": "off", // (){}间空格
    "array-bracket-spacing": "off", // 数组分割
    "space-before-function-paren": "off", // function前空格
    "no-unused-vars": "off", // let a,b可以使用
    "indent": "off", // 格式化空格判断
    "no-irregular-whitespace": ["error", { "skipComments": true }] // 跳过注释中的空格
  },
  "parserOptions": {
    "sourceType": "module"
  }
}
```

### 初始化

```bash
# 初始化项目
npm init egg --type=simple
# 安装依赖
npm i
# 本地启动
npm run dev
# 查看项目启动地址
# http://127.0.0.1:7001

# 自带静态资源访问
# app/public文件夹中放置图片
# http://127.0.0.1:7001/public/images/01.png
```

### egg-view-nunjucks

[官方文档](http://mozilla.github.io/nunjucks/)

```bash
# 安装swagger文档插件
npm i egg-view-nunjucks --save
```

```
<!-- plugin.js -->
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
}

<!-- config.default.js -->
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.nj': 'nunjucks',
  },
}

<!-- `app/view/test.nj` -->
{{name}}

<!-- controller/home.js调用 -->
async index() {
  const { ctx } = this
  await ctx.render('test.nj', { name: 'view test' })
}
```

### ctx.curl

```js
async getJson() {
  const { ctx } = this
  // 访问config.default.js中的配置
  const res = await ctx.curl(this.config.view.serverUrl + '/public/json/01.json', { dataType: 'json' })
  ctx.body = res.data
}
```

### helper 扩展

编写 helper 扩展在模板页面中使用

```
<!-- app/extend/helper.js -->
const moment = require('moment')
exports.relativeTime = (time) => moment(new Date(time * 1000)).fromNow()

<!-- app/view/text.nj -->
{{helper.relativeTime('1605139200')}}
```

### middleware 中间件

enable：控制中间件是否开启。
match：设置只有符合某些规则的请求才会经过这个中间件。
ignore：设置符合某些规则的请求不经过这个中间件。

```
<!-- config.default.js -->
// add your middleware config here
config.middleware = ['robot']
// 中间件配置
exports.robot = {
  ua: [/Baiduspider/i],
}

<!-- app/middleware/robot.js -->
// options === app.config.robot
module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || ''
    const match = options.ua.some((ua) => ua.test(source))
    if (match) {
      ctx.status = 403
      ctx.message = 'Go away, robot.'
    } else {
      await next()
    }
  }
}
```

测试

```bash
curl http://localhost:7001/ -A "Baiduspider"
curl http://localhost:7002/ -'user-agent' "ipad"
# Go away, robot.
```

### 配置文件（不同环境）

指定环境会覆盖掉默认配置

```
<!-- config/config.default.js -->
exports.robot = {
  ua: [/Baiduspider/i],
}

<!-- config/config.prod.js -->
exports.robot = {
  ua: [/curl/i, /Baiduspider/i],
}


<!-- config/config.local.js -->
exports.robot = {
  ua: [/Baiduspiders/i],
}
```

### 渐进开发-自己的插件

[官方文档](https://eggjs.org/zh-cn/tutorials/progressive.html)

### 日志打印

> this.logger 仅限 controller 与 service 中使用
> error: 打印到 common-error.log
> 所有 info 以上的日志: 打印到 egg-web.log
> agent: 打印到 egg-agent.log

- this.logger[info/warn/error]: [$userId/$ip/$traceId/${cost}ms $method $url][文件地址]
- ctx.logger[info/warn/error]: [$userId/$ip/$traceId/${cost}ms $method $url]
- app.logger[info/warn/error]
- agent.logger[info/warn/error]

### Router

| Method |      Path      | Action  | Desc |
| :----: | :------------: | :-----: | :--: |
|  GET   |     /user      |  index  | 列表 |
|  GET   |   /user/:id    |  show   | 详情 |
|  POST  |     /user      | create  | 新增 |
|  PUT   |   /user/:id    | update  | 修改 |
| DELETE |   /user/:id    | destroy | 删除 |
|  GET   |   /user/new    |   new   |      |
|  GET   | /user/:id/edit |  edit   |      |

- `:id`: ctx.params.id
- GET: ctx.query === ctx.request.query
- POST: ctx.request.body

### validate

[validate parameter 文档](https://github.com/node-modules/parameter)

```bash
npm i egg-validate --save
```

```js
const createRule = {
  username: {
    type: 'email',
  },
  password: {
    type: 'password',
    compare: 're-password',
  },
}

// 第一种
ctx.body = await this.app.validator.validate(createRule, ctx.request.body)

// 第二种
try {
  ctx.body = await ctx.validate(createRule, ctx.request.body)
} catch (error) {
  ctx.body = error
}
```

### i18n validate

validate 报错中译

```js
// config.default.js
const I18n = require('i18n')
// 配置i18n
I18n.configure({
  locales: ['zh-CN'],
  defaultLocale: 'zh-CN',
  directory: __dirname + '/locale',
})

config.validate = {
  translate() {
    const args = Array.prototype.slice.call(arguments)
    return I18n.__.apply(I18n, args)
  },
}
```

报错时会生成`zh-CN.json`,对照翻译即可
