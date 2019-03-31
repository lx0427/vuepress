# react

## 生命周期
### componentDidMount()
> 组件已经渲染到DOM中后触发
### componentWillUnmount()
> 挂载取消前

## state
### 简单修改值
```js
class App extends Component{
    state = {}
    // 更新
    this.setState({
        name: 'jim'
    })
    // 调用
    console.log(this.state.name)
}
```
### 根据state&props来更新
```js
class App extends Component{
    state = {}
    // 更新
    this.setState((state,props)=>({
        count: state.count + props.increment
    }))
    // 调用
    console.log(this.state.name)
}
```

## 组件
### 类组件
```js
class Form extends React.Component{
    render() {
        return ( // 使用JSX(JavaScript XML)
            <h1>hello world</h1> // 只能返回一个`根元素`
        )
    }
}
```
### 事件
* 使用箭头函数，确保事件中this绑定
```jsx
<button onClick={(e) => this.handleClick(e)}>
    Click me
</button>
```
* event
```js
handleChange = event => {
    const {name, value} = event.target // dom
    this.setState({
        [name]: value
    })
}
```

## JSX
* 模板语法：`{}`
* 添加类名：`className`
