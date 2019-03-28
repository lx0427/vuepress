# react

## state
* 修改值
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
