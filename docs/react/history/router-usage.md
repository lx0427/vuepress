## usage

```js
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/hello">hello</Link>
          {/* Switch独占路由 */}
          <Switch>
            {/* children>component>render 互斥 */}
            <Route
              exact
              path="/"
              // component={HomePage}
              // children={() => <div>children</div>}
              render={() => <div>render</div>}
            ></Route>
            <Route path="/user" component={UserPage}></Route>
            <Route component={EmptyPage}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
```

## API

### BrowserRouter as Router

> 包裹器

### Switch

> 独占路由，包裹器

### Link

> 路由导航链接

#### to: 路由路径

### Route

> 组件渲染入口

#### exact

> 精准匹配

#### path

> 路径

#### 渲染方式

- children: 无论是否匹配都渲染
- component: 匹配才渲染
- render: 匹配才渲染