# pattern

## 语法表

### 匹配模式

| 元字符       | 描述                    | 补充                                          |
| ------------ | ----------------------- | --------------------------------------------- |
| ?            | 贪婪模式                | 'oooo'.match(/o+?/) => [ 'o', 'o', 'o', 'o' ] |
| ^            | 匹配输入字首行          |                                               |
| \$           | 匹配输入字尾行          |                                               |
| \*           | 任意次，{0,}            |                                               |
| +            | 一次或多次，{1,}        |                                               |
| ?            | 一次或多次，{0,1}       | do(es)?”可以匹配“do”或“does                   |
| {n}          | n 次                    |                                               |
| {n,m}        | n-m 次，m>=n            |                                               |
| (pattern)    | 获取匹配, $0,$1,...,\$9 |                                               |
| (?:pattern)  | 非获取匹配              | /industr(?:y\| ies)/                          |
| (?=pattern)  | 非获取匹配,正向肯定预查 |                                               |
| (?!pattern)  | 非获取匹配,正向否定预查 |                                               |
| (?>=pattern) | 非获取匹配,反向肯定预查 |                                               |
| (?>!pattern) | 非获取匹配,反向否定预查 |                                               |

### 字符表

| 元字符        | 描述                               | 补充                         |
| ------------- | ---------------------------------- | ---------------------------- |
| .             | 匹配除“\n”和"\r"之外的任何单个字符 | 匹配所有：[\s\S]             |
| x \| y        | 匹配 x 或 y                        |                              |
| [xyz],[a-z]   | 字符集合                           |                              |
| [^xyz],[^a-z] | 非字符集合                         |                              |
| \w            | 包括下划线的任何单词字符           | [A-Za-z0-9_]                 |
| \W            | 任何非单词字符                     | [^a-za-z0-9_]                |
| \b            | 单词边界                           | /er\b/.test('never') => true |
| \B            | 非单词边界                         | /er\B/.test('verb') => true  |
| \s            | 不可见字符                         | \s == [\f\n\r\t\v]           |
| \S            | 可见字符                           | \s == [^\f\n\r\t\v]          |
| \cx           | 匹配由 x 指明的控制字符            | /\cM/.test('\r')             |
| \f            | 换页符                             | \f==\x0c==\cL                |
| \n            | 换行符                             | \n==\x0a==\cJ                |
| \r            | 回车符                             | \r==\x0d==\cM                |
| \t            | 制表符                             | \t==\x09==\cl                |
| \v            | 垂直制表符                         | \v==\x0b==\cK                |

## 正则

```js
// 搜索未加目录名的js
/\<script src=\"(?!\.|\/|http)/

// 搜索未加版本号的js
/\.js(?!\?|\/)/
```

## RegExp 方法

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
n.toString().replace(/(\d)(?=(\d{3})+$)/g, function(
  match,
  p1,
  p2,
  offset,
  string
) {
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
