## 顶级API

### Component

```js
import React, { Component } from 'react'
export default class Hello extends Component {
  render() {
    return <div>jsx</div>
  }
}
```

### PureComponent

> 浅比较实现 shouldComponentUpdate

```js
import React, { PureComponent } from 'react'

export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      obj: { num: 0 }, // 不生效
    }
  }

  setCount = () => {
    this.setState({ count: 100 })
  }

  render() {
    console.log('render')
    const { count, obj } = this.state
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.setCount}>{count}</button>
      </div>
    )
  }
}
```

### memo

> props浅比较，做性能优化

### createElement

> 标签名字符串 | class 组件 | 函数组件 

```js
React.createElement(type, [props], [...children])
```

### cloneElement

> prevProps与nextProps浅合并

```js
React.cloneElement(element, [props], [...children])
```

### isValidElement

> 验证对象是否为 React 元素，返回值为 `true` 或 `false`

### Children

> 用于处理 `this.props.children` 不透明数据结构的实用方法。
>
> map | forEach |  count |  only | toArray

### Fragment

> 简写语法 <></>

### createRef

> 创建一个能够通过 ref 属性附加到 React 元素的 ref

### forwardRef

> `React.forwardRef` 会创建一个React组件，这个组件能够将其接受的 [ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html) 属性转发到其组件树下的另一个组件中。

- props
- ref

```js
const FancyButton = React.forwardRef((props, ref) => (  <button ref={ref} className="FancyButton">    {props.children}
  </button>
));
```

### lazy

## 组件

### ClassComponent

#### state

> 存储状态

#### setState

> 更新 state 状态值，触发视图更新
>
> **异步**：在**合成事件**+**生命周期**中，这里的异步更新是批量的，达到性能优化的目的，**state 的更新可能会合并**
>
> **同步**：在**setTimeout**+**原生事件**中

- number | string：不支持链式调用

  ```js
  this.setState(state.count + 1)
  ```

- function: 支持链式调用

  ```js
  this.setState((state) => {
    count: state.count + 1
  })
  ```

#### props

> super(props) - 继承

```js
import React, { Component } from 'react'

// 实现clock
export default class ClassComponent extends Component {
  constructor(props) {
    // 继承属性
    super(props)
    // 存储状态
    this.state = {
      date: new Date(),
    }
  }
  // 组件挂载完成之后执行
  componentDidMount() {
    this.timer = setInterval(() => {
      // 更新state,必须使用setState
      this.setState({
        date: new Date(),
      })
    }, 1000)
  }
  // 组件卸载之前执行
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    const { date } = this.state
    return (
      <div>
        <h3>ClassComponent</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
```

### FunctionComponent

```js
import React, { useState, useEffect } from 'react'

export function FunctionComponent(props) {
  // hoc
  const [date, setDate] = useState(new Date())
  // useEffect副作用函数
  useEffect(() => {
    // componentDidUpdate 依赖项每次更新都会执行
    console.log('useEffect')
    // componentDidMount
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      // componentWillUnmount
      clearInterval(timer)
    }
  }, []) // 依赖项，依赖更新的变量
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}
```


### createPortal

> 传送门：将 dom 渲染到指定节点中

```js
import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
  constructor(props) {
    super(props)
    // 创建dom节点
    this.node = document.createElement('div')
    document.body.appendChild(this.node)
  }

  // 组件卸载时，清理之前添加的父节点
  componentWillUnmount() {
    if (this.node) {
      document.body.removeChild(this.node)
    }
  }

  render() {
    // 传送门
    return createPortal(
      <div className="dialog">
        <h3>Dialog</h3>
      </div>,
      this.node
    )
  }
}
```

## 传值

### props

```js
<Layout showTopBar={false} showBottomBar={true} title="商城首页"></Layout>
```

### chilren

> string | jsx | object

```js
<Layout showTopBar={false} showBottomBar={true} title="商城首页">
  {{
    content: (
      <div>
        <h3>HomePage</h3>
      </div>
    ),
    text: '这是一个文本',
    btnClick: () => {
      console.log('btnClick')
    },
  }}
</Layout>
```

## 生命周期

### static getDerivedStateFromProps

> 初始化 + 更新： UNSAFE_componentWillMount + UNSAFE_componentWillUpdate
>
> 每次渲染前触发，不管是什么原因触发的更新

- props: 最新的 props
- state: 最新的 state
- @return: 返回 null 则不更新 state

### UNSAFE_componentWillMount

> 组件挂载前执行

### componentDidMount

> 组件挂载之后执行

### shouldComponentUpdate

> 根据返回值判断是否更新

- nextProps
- nextState

### UNSAFE_componentWillUpdate

> 更新前执行

### getSnapshotBeforeUpdate

> 包含：UNSAFE_componentWillReceiveProps
>
> props 更新才触发, 首次渲染不触发
>
> 提交到 dom 节点之前调用

- prevProps
- prevState

### componentDidUpdate

> 组件更新后执行

- prevProps
- prevState
- snapshot: getSnapshotBeforeUpdate 的返回值

### UNSAFE_componentWillReceiveProps

> 父组件传入的 props 改变才执行，初次加载不执行

### componentWillUnmount

> 组件卸载前

### componentDidCatch

> 此生命周期在后代组件抛出错误后被调用。

![微信图片_20210106100401](F:\KKB\history\微信图片_20210106100401.png)
