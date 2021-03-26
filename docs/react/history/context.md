```bash
// 创建项目
npx create-react-app my-app
```

## context

### 1. 创建一个context对象

```js
import { createContext } from 'react'
export const Context = createContext()
export const UserContext = createContext()
```

### 2. 创建Provider, 传递value

```js
import React, { Component } from 'react'
import ConsumerPage from './ConsumerPage'
import { Context, UserContext } from './Context'
import ContextTypePage from './ContextTypePage'
import UseContextPage from './UseContextPage'

export default class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: { themeColor: 'red' },
      user: { name: '小米' },
    }
  }

  render() {
    const { theme, user } = this.state
    return (
      <Context.Provider value={theme}>
        <UserContext.Provider value={user}>
          <ContextTypePage />
          <UseContextPage />
          <ConsumerPage />
        </UserContext.Provider>
      </Context.Provider>
    )
  }
}
```

### 3. 子组件消费value

#### contextType

> 只能用在类组件中
>
> 只能定义单一的context来源

```js
import React, { Component } from 'react'
import { Context } from './Context'

export default class ContextTypePage extends Component {
  static contextType = Context // react关键字
  render() {
    const { themeColor } = this.context // 所有生命周期中都可以访问
    return (
      <div>
        <h3>ContextTypePage</h3>
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    )
  }
}
```

#### useContext

> 只能用在函数组件或者自定义hook中
>
> 可以使用多个context来源

```js
import React, { useContext } from 'react'
import { Context, UserContext } from './Context'

export default function UseContextPage(props) {
  const theme = useContext(Context)
  const user = useContext(UserContext)
  console.log(theme, user)
  return (
    <div>
      <h3 className={theme.themeColor}>UseContextPage</h3>
      <p>{user.name}</p>
    </div>
  )
}
```

#### Consumer

> 所有情况均可使用

```js
import React, { Component } from 'react'
import { Context, UserContext } from './Context'

export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h3>ConsumerPage</h3>
        <Context.Consumer>
          // context以函数的props传入
          {(theme) => (
            <div className={theme.themeColor}>
              omg
              <UserContext.Consumer>{(user) => <User {...user} />}</UserContext.Consumer>
            </div>
          )}
        </Context.Consumer>
      </div>
    )
  }
}

function User({ name }) {
  return <div>{name}</div>
}
```

