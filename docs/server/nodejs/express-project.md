# 项目

## 安装依赖

```bash
npm init -y
yarn add express@next mongoose cors
yarn add nodemon # 用于启动项目
```

## 插件用途

| 插件名              | 用途                         |
| :------------------ | :--------------------------- |
| [cors][1]           | 跨域请求                     |
| [express.json][2]   | 解析带有 JSON 负载的传入请求 |
| [http-assert][4]    | 接口报错提示                 |
| [multer][5]         | 上传图片                     |
| [express.static][3] | 静态文件托管                 |
| [bcrypt][6]         | 数据散列比较                 |
| [jsonwebtoken][7]   | token 生成解析               |
| [inflection][8]     | 数据大小写驼峰转换           |

[1]: https://www.npmjs.com/package/cors
[2]: http://www.expressjs.com.cn/4x/api.html
[3]: http://www.expressjs.com.cn/4x/api.html#express.static
[4]: https://www.npmjs.com/package/http-assert
[5]: https://www.npmjs.com/package/multer
[6]: https://www.npmjs.com/package/bcrypt
[7]: https://www.npmjs.com/package/jsonwebtoken
[8]: https://www.npmjs.com/package/inflection

## 项目目录

```js
|-- index.js // 入口文件
|-- package.json
|-- models // 模型
|   |-- Category.js
|-- plugins // 插件
|   |-- db.js
|-- router // 接口路由
    |-- admin
        |-- index.js
```

## others

### Converting circular structure to JSON

> 接口获取数据，未使用异步
