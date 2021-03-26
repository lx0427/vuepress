## reducer

```js
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}
```

## store

```js
import { createStore } from 'redux'

// 纯函数
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counterReducer) // 创建store
export default store
```

```js
import React, { Component } from 'react'
import store from '../store'

class ReduxPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // 订阅，数据更新触发
    this.unsubscribe = store.subscribe(() => {
      console.log('state改变了')
      this.forceUpdate() // 强制组件更新
    })
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }

  render() {
    console.log(store, 'store')
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p> // 获取state
        <button onClick={() => store.dispatch({ type: 'ADD' })}>add</button> // 调用dispatch
      </div>
    )
  }
}

export default ReduxPage
```

### getState

```js
store.getState()
```

### dispatch

```js
<button onClick={() => store.dispatch({ type: 'ADD' })}>add</button>
```

### subscribe

```js
this.unsubscribe = store.subscribe(() => {
  console.log('state改变了')
  // 强制组件更新
  this.forceUpdate()
})
```

### unsubscribe

```js
this.unsubscribe && this.unsubscribe()
```

