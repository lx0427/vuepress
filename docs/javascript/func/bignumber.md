# bignumber

[文档地址](https://mikemcl.github.io/bignumber.js/)
[cdn 地址](http://cdn.bytedance.com/?query=bignumber.js&version=8.1.1)

```js
// 加
function plus(x, y) {
  return new BigNumber(x).plus(y).toNumber()
}
// 减
function minus(x, y) {
  return new BigNumber(x).minus(y).toNumber()
}
// 乘
function multipliedBy(x, y) {
  return new BigNumber(x).multipliedBy(y).toNumber()
}
// Math.pow
function exponentiatedBy(n, t) {
  return new BigNumber(n).exponentiatedBy(t).toNumber()
}
// 除以
function dividedBy(x, y) {
  return new BigNumber(x).dividedBy(y).toNumber()
}
// 相除取整
function dividedToIntegerBy(x, y) {
  return new BigNumber(x).dividedToIntegerBy(y).toNumber()
}
// % mod
function modulo(x, y) {
  return new BigNumber(x).modulo(y).toNumber()
}

/**
 * 四舍五入，保留s位小数
 * @param {*} n
 * @param {*} s 精度
 */
function toFixed(n, s) {
  return Number(new BigNumber(n).toFixed(s))
}

/**
 * 格式化
 * @param {*} n
 * @param {*} s 精度
 * @param {*} config 配置
 * groupSize=0  =>  不分割
 * secondaryGroupSize  =>  不分割靠近小数点的那组
 */
function toFormat(
  n,
  s = 3,
  config = {
    prefix: '',
    decimalSeparator: '.', // 整数小数分割符
    groupSeparator: ',', // 整数部分分隔符
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ',', // 小数部分分割符,默认为''
    fractionGroupSize: 3, // 默认为0
    suffix: '',
  }
) {
  return new BigNumber(n).toFormat(s, config)
}
```
