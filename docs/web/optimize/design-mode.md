### 设计模式

### 放大模式

> 模块扩展方法

```js
var module1 = (function (mod){
    mod.m3 = function () {
        //...
    };
    return mod;
})(module1);
```

> 宽放大模式

```
var module1 = (function (mod){
    mod.m3 = function () {
        //...
    };
    return mod;
})(window.module1 || {});
```

