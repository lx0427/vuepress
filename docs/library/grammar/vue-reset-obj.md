# vue 中对象重置

## 获取 form 初始值

```js
// 获取初始值
this.$options.data().form;
```

## 重置 form 为初始值

```js
cloneDeep(this.$options.data().form);
```

> 深拷贝：解决对象嵌套引用

```js
var form = { a: 1 };

function a() {
  return { form: form };
}

a() === a(); // false
a().form === a().form; // true
```
