## hook api

### useState

> 状态值使用 useState 定义
>
> 不能被作用域包裹

- date: 状态值
- setDate: 更新状态值方法，及触发视图更新

```js
// ! 错误： React Hook "useState" is called conditionally
// if (count) {
//   const [num, setNum] = useState(0)
// }
```

### useEffect

> 副作用函数

- componentDidMount: 回调函数体
- componentDidUpdate：回调函数体+依赖项
- componentWillUnmount：返回函数体

```js
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
```

### useMemo

> 依赖更新后才重新计算

- @return: 计算后的值

```js
const expensive = useMemo(() => {
  console.log('compute')
  let sum = 0
  for (let i = 0; i < count; i++) {
    sum += count
  }
  return sum
}, [count])
// 使用
<p>expensive: {expensive}</p>
```

### useCallback

> 依赖更新后才重新计算
>
> 相当于 useMemo(() => fn,[])

- @return: 函数

```js
// const addClick = useMemo(() => () => {
const addClick = useCallback(() => {
  console.log('addClick compute')
  let sum = 0
  for (let i = 0; i < count; i++) {
    sum += count
  }
  return sum
}, [count])
// 使用
<Child addClick={addClick}></Child>
```

### 自定义 hook

> 必须使用 use 开头

```js
// ! 错误： React component names must start with an uppercase letter
// function getNum() {
//   const [num, setNum] = useState(0)
//   return num
// }
```

> 正确示例：

```js
function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    console.log('effect2')
    // 只需要初始化一次就可以了
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    // componentWillUnmount
    return () => clearInterval(timer)
  }, [])
  return date
}
// jsx
;<p>{useClock().toLocaleTimeString()}</p>
```

### useContext

> 函数组件或者自定义 hook 消费 context

### useRef

> 会在每次渲染时返回同一个 ref 对象
>
> 其 `.current` 属性中保存一个可变值的“盒子”

```js
export default function useForm(form) {
  const formRef = React.useRef()
  return [formRef.current]
}
```

### useImperativeHandle

> 可以让你在使用 `ref` 时自定义暴露给父组件的实例值

```js
// 子组件 
React.useImperativeHandle(ref, () => formInstance)
// 父组件
formInstance = React.createRef() // 即可使用formInstance上的方法
```

