## API

> children > component > render

## 实现

### Link

> to: 跳转地址
>
> onClick: 将链接记录进history栈

### Route

> matchPath：pathname路由地址匹配
>
> match: children(func, dom)? componen? render? null
>
> unmatch: children(func)? null

- 没有写path，默认匹配

### Router

> 顶层组件：向下传递兼容性history对象 + 监听路由变化 + 传递地址信息

- 使用context传递信息
- 从BrowserRouter获取兼容性history对象
- 设置默认match

### withRouter

> 包装一下组件，给当前组件传递context

### Redirect

> 实现组件跳转 => 



## 注意事项

### 1. component使用匿名函数的性能问题

```jsx
export default class ReactRouterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  setCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <>
        <button onClick={this.setCount}>{this.state.count}</button>
        <div>
          <h2>ReactRouterPage</h2>
          <Router>
            <Link to="/">首页</Link>
            <Switch>
              <Route
                exact
                path="/"
                // React.createElement(component, props) 使用匿名函数的形式无法复用
                // component={() => <HomePage />} // 组件其他地方更新会导致路由卸载挂载
                component={HomePage}
              ></Route>
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}
class HomePage extends Component {
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    )
  }
}
```

