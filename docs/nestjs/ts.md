# typescript 语法学习

## 基础类型

### number

```ts
let n: number = 123
```

### string

```ts
let str: string = 'abc'
```

### boolean

```ts
let str: boolean = false
```

### 数组

```ts
let list: number[] = [1, 2]

// 泛型数组
let list: Array<number> = [1, 2]
```

### 元祖

```ts
let list: number[] = [1, 2]

// 泛型数组
let list: Array<number> = [1, 2]
```

### 枚举

```ts
// 默认0开始
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green // 1

enum Color {
  Red = 1,
  Green,
  Blue = 4
}
let c: Color = Color.Green // 2
```

### Any

```ts
let any: any = 123
any = false
```

### Void

```ts
function warnUser(): void {
  console.log('This is my warning message')
}
```

### Null 和 Undefined

```ts
let u: undefined = undefined
let n: null = null
```

### Never

```ts
// 存在不能到达的终点
function error(message: string): never {
  throw new Error(message)
}
```

### Object

```ts
// 存在不能到达的终点
declare function create(o: object | null): void
create(null) // OK
```

### 断言

```ts
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
```

## 变量声明

### 解构

```ts
let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}
let { a, b }: { a: string; b: number } = o
```

## 接口

### 可选属性

```ts
interface SquareConfig {
  width?: number
}
```

### 只读属性

```ts
interface SquareConfig {
  readonly x: string
}
```

### 只读属性

```ts
interface SquareConfig {
  readonly x: string
}
```
