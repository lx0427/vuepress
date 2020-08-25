# 方法

## 示例

### 匹配指定字符串

```js
// 搜索未加目录名的js
/\<script src=\"(?!\.|\/|http)/

// 搜索未加版本号的js
/\.js(?!\?|\/)/
```

### 分组获取

```js
const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/
const matchObj = RE_DATE.exec('1999-12-31')
const year = matchObj[1] // 1999
const month = matchObj[2] // 12
const day = matchObj[3] // 31
console.log(year, month, day)
```

## 正则方法

### test

- 返回值：true/false

### exec

- 返回值：匹配文本，索引，检索的字符串
- lastIndex: 匹配文本的最后一个字符索引+1
- 全局匹配：
  - 下一次会从 lastIndex 开始
  - 匹配无结果：重置`lastIndex=0`,返回值为`null`

```js
var patt = new RegExp('o+?', 'g'),
  result
while ((result = patt.exec('oooo')) != null) {
  console.log(result, '--', patt.lastIndex) // [ 'o', index: 0, input: 'oooo', groups: undefined ] -- 1
}
console.log(patt.lastIndex) // 0
```

### compile

- 改变或重新编译正则表达式

## 字符串方法

### search

- 返回第一个匹配值的索引

### match

```js
// 贪婪模式
console.log('oooo'.match(/o+?/g)) // [ 'o', 'o', 'o', 'o' ]
// 非贪婪模式
console.log('oooo'.match(/o+/g)) // [ 'oooo' ]
```

### replace

- **.replace**(regexp/substr,`function`/`newSubStr`)

#### function

> 参数：`match`,`p1`,`p2`,...,`offset`,`string`

```js
var n = 1234567890
// 第一种
// 猜想：类似?=()预查的不算入$0-99中
n.toString().replace(/(\d)(?=(\d{3})+$)/g, function(match, p1, p2, offset, string) {
  return match + ','
})
```

#### newSubStr

> 变量表

| 变量名                             | 描述                         |
| ---------------------------------- | ---------------------------- |
| `$$`                               | \$                           |
| `$&`                               | 当前匹配子串                 |
| \$` | 插入当前匹配的子串左边的内容 |
| `$'`                               | 插入当前匹配的子串右边的内容 |
| `$n`                               | 0<=n<=99,整数                |

```js
var n = 1234567890
// 第二种
n.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
```

### split

- **.split**(separator,howmany)

```js
'hello'.split('', 3) //可返回 ["h", "e", "l"]
```
