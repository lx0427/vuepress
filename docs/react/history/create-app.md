## Create

```bash
# node>=10 和 npm>=5.6
npx create-react-app my-app
```

## react-router

```bash
yarn add react-router-dom
```

> RouterPage.js

```js
import React, { Component } from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import UserPage from './UserPage'
import _404Page from './_404Page'

class RouterPage extends Component {
  render() {
    return (
      <Router>
        <Link to="/">home</Link>
        <Link to="/user">user</Link>
        <Link to="/hello">hello</Link>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/user" component={UserPage}></Route>
          <Route component={_404Page}></Route>
        </Switch>
      </Router>
    )
  }
}
export default RouterPage
```

## antd

### 引入antd

```bash
yarn add antd
```

修改 `src/App.css`，在文件顶部引入 `antd/dist/antd.css`。

```css
@import '~antd/dist/antd.css';
```

### craco修改默认配置

```bash
yarn add @craco/craco
```

```diff
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```

### 自定义主题+装饰器

```bash
yarn add craco-less @babel/plugin-proposal-decorators
```

首先把 `src/App.css` 文件修改为 `src/App.less`，然后修改样式引用为 less 文件。

```diff
/* src/App.js */
- import './App.css';
+ import './App.less';
/* src/App.less */
- @import '~antd/dist/antd.css';
+ @import '~antd/dist/antd.less';
```

然后在项目根目录创建一个 `craco.config.js` 用于修改默认配置。

```js
/* craco.config.js */
// * 配置完成后记得重启下
const CracoLessPlugin = require('craco-less')

module.exports = {
  babel: {
    //用来支持装饰器
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // 修改antd主题色
              '@primary-color': 'red',
              '@border-color-base': 'green',
              '@link-color': 'orange',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
```

#### 语法提示错误

> 设置-搜索tsconfig
>
> 选中Experimental Decorators

## react-redux

```bash
yarn add redux react-redux
```

## Dva

```bash
npm install dva-cli -g
dva new dva-quickstart
cd .\dva-quickstart\
# 安装antd
npm install antd babel-plugin-import --save
# 配置.webpackrc
{
 "extraBabelPlugins": [
   ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
 ]
}
```

### 使用mock

#### `/mock/product.js`

```js
const productTableData = []
for (let i = 0; i < 10; i++) {
  productTableData.push({
    id: i,
    name: '名字' + i,
    age: i,
    city: '城市' + i,
  })
}

let total = 101
function searchProductData({ name = '', ...pagination }) {
  console.log('pagination', pagination) //sy-log
  const res = []

  let pageSize = pagination.pageSize || 10
  let current = pagination.current || 1

  for (let i = 0; i < pageSize; i++) {
    let realIndex = i + (current - 1) * pageSize
    let tem = {
      id: realIndex,
      name: '名字' + realIndex,
      age: i,
      city: '城市' + realIndex,
    }
    if (tem.name.indexOf(name) > -1) {
      res.push(tem)
    }
  }
  return { data: res, ...pagination, total }
}
export default {
  'POST /api/getProductData': (req, res) => {
    //搜索
    res.send({
      status: 'ok',
      ...searchProductData(req.body),
    })
  },
}
```

#### `.roadhogrc.mock.js`

```js
// export default {
// };

const fs = require('fs')
const path = require('path')
const mockPath = path.join(__dirname + '/mock')

const mock = {}
fs.readdirSync(mockPath).forEach((file) => {
  Object.assign(mock, require('./mock/' + file))
})

module.exports = mock
```

`/src/services/product.js`

```js
import request from "../utils/request";

export async function getProductData(params) {
  return request("/api/getProductData", {
    data: params,
    method: "post"
  });
}
```

#### 获取异步数据

##### `models`

```js
import { getProductData } from '../services/product'

export default {
  namespace: 'example',

  state: {
    data: [],
    pageSize: 10,
    current: 1,
    total: 0,
  },
  // 写effect+reducers
  effects: {
    *getProductData({ payload }, { call, put }) {
      // getProductData 来自services中
      const res = yield call(getProductData, payload)
      yield put({ type: 'productData', payload: res.data })
    },
  },
  reducers: {
    productData(state, action) {
      return { ...state, data: action.payload.data }
    },
  },
}
```

##### connect

```js
// 页面中使用connect拿到方法及数据进行使用
@connect(({ example }) => ({ example }), {
  // 加上namespace
  getProductData: (payload) => ({ type: 'example/getProductData', payload }),
})
class ExamplePage extends Component {
  dataSearch = () => {
    this.props.getProductData()
  }
  render() {
    console.log('props', this.props)
    const { data } = this.props.example
    return (
      <div>
        <h3>ExamplePage</h3>
        <Button onClick={this.dataSearch}>search</Button>
        {/* Warning: Each child in a list should have a unique "key" prop. */}
        {/* rowKey="id" */}
        <Table dataSource={data} columns={columns} rowKey="id" />
      </div>
    )
  }
}
```

### history

```bash
npm install --save history
```

然后修改入口文件app.js，

```js
const createHistory = require('history').createBrowserHistory
const app = dva({
  history: createHistory(),
})
```

### dynamic