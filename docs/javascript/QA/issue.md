# 开发常见问题

### 手机点击触发不灵敏问题

```js
FastClick.prototype.focus = function(targetElement) {
  var length
  // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
  if (
    !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) &&
    targetElement.setSelectionRange &&
    targetElement.type.indexOf('date') !== 0 &&
    targetElement.type !== 'time' &&
    targetElement.type !== 'month' &&
    targetElement.type !== 'email'
  ) {
    length = targetElement.value.length
    targetElement.focus() //加入这一句话就OK了
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}
```

### 键盘收起底部空白问题

```js
//软键盘收起的事件处理
document.body.addEventListener('focusout', () => {
  // ios
  if (!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    var currentPosition, timer
    var speed = 1
    timer = setInterval(function() {
      currentPosition = document.documentElement.scrollTop || document.body.scrollTop
      currentPosition -= speed
      window.scrollTo(0, currentPosition) //页面向上滚动
      currentPosition += speed
      window.scrollTo(0, currentPosition) //页面向下滚动
      clearInterval(timer)
    }, 100)
  }
})
```
