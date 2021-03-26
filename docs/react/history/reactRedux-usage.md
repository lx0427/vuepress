## Provider

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/style/index.less'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}> // 传入store
    <App />
  </Provider>,
  document.getElementById('root')
)
```



## connect

### mapStateToProps

> 将state映射到props上

#### function

```js
(state) => ({ num: state })
```

### mapDispatchToProps

> 将dispatch映射到props上

#### dispatch: 默认映射

```js
dispatch({ type: 'ADD' })
```

#### object

```js
{
  add: () => ({ type: 'ADD' }),
}
```

#### function

```js
(dispatch) => {
  let creators = {
    add: () => ({ type: 'ADD' }),
    minus: () => ({ type: 'MINUS' }),
  }
  // 遍历对象包裹上dispatch
  creators = bindActionCreators(creators, dispatch) // 来自redux
  return { // dispatch和映射方法可同时使用
    dispatch, 
    ...creators,
  }
}
```



