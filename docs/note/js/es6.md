# ES6

## 6种声明变量
* var,function
* let,const
* import,class

### let
* 不能重复声明变量
* 在块级作用域中定义函数：`函数表达式`
### const
* 常量 => 内存地址(不可更改)
* 定义必须立即赋值
  
## 解构赋值
* 解构不成功 => undefined

### 快捷用法
1. 交换变量值
```js
[x, y] = [y, x]
```
2. 函数参数定义
```js
// 有序参数
function f([x, y, z]) { ... }
f([1, 2, 3])
// 无序参数
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1})
```
3. 参数默认值
```js
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};
```
4. Iterator转数组
   * [...string.matchAll(regex)]
   * Array.from(string.matchAll(regex))

### 对象解构
* 解构属性必须相同
* 变量名与属性名不一致，`foo: baz`
```js
let { foo: foo = 'ccc' } = { foo: 'aaa', bar: 'bbb' }; // let { foo = 'ccc' } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
```

## 扩展方法

### 字符串
* includes(,n) startsWith(,n)
* endsWith(,n)
  * n: 前n个字符
* repeat()
* padStart(,n) padEnd()
  * n: 补满至n个字符
* matchAll(exp)
  * 返回所有匹配项
* b标签字符串
    ```js
    let total = 30;
    let msg = passthru`The total is ${total} (${total * 1.05} with tax) ${total * total}`;

    function passthru(literals,...rest) {
        // literals:  [ 'The total is ', ' (', ' with tax) ', '' ]
        // rest: [ 30, 31.5, 900 ]
    }
    ```

### 数值
* isFinite(),isNaN()


## 函数

### 尾调用
:::tip
函数最后一步是函数调用，`return g(x)`
:::
```js
// 复杂度O(n)
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function factorial (n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total) // 执行 n * 1 * (n - 1) * (n - 2) * ... * 2
}
```

## module

### export
```js
// `abc.js`
export {a, b, c}

import {a, b, c} from 'abc.js'

// `api.js`
export function get(){}
export function post(){}

import {get, post} from 'api.js'

// `http.js`
export default {
  get(){},
  post(){}
}

import http from 'http.js'
```