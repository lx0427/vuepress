# interview

## 问题
1. 清除浮动
2. get,post,url长度
3. 对es6的理解，es7 8 9
4. promise,几个状态
5. 闭包，堆栈溢出，内存泄漏，怎么会导致内存泄漏？怎么防止？
6. ajax流程，回调函数
7. 自执行函数，构造函数
8. 事件委托，好处？
9.  onload `vs` DOMContentLoaded
10. 节点(nodeType),`12389`
11. jq多库共存($.onConflict())
12. 点击穿透(touch)
13. 合并数组
    ```js
     Array.prototype.push.apply(arr1,arr2);
    ```
14. 左边定宽，右边自适应

## 知识点
#### 清除浮动
```scss
.clearfloat {
    zoom: 1; // 设置值后，宽高重新计算，渲染
    &:after { // 撑开父元素的高度
        content: "";
        display: block;
        clear: both;
        visibility: hidden;
        height: 0
    }
}
```
#### promise
```js
promise
// 状态：
    pending
    fulfilled
    rejected
// 方法：
    .then()
    .catch()
    .all([]) // 多个请求全部完成
    .race([]) // 封装请求超时
```
#### 闭包，堆栈溢出，内存泄漏
1. 闭包：私有变量
2. 堆栈溢出：写入数据过多 -- `死循环`,`递归`
3. 内存泄漏：动态储存分配函数内存空间，常驻 -- `闭包`
   * 不要动态绑定事件
   * destroy 

## 小计
1. 变量、函数声明
2. 事件流，事件捕获，事件冒泡
3. 清除定时器
4. 原生添加dom,innerHTML,innerText
5. 



## js基础

### 数据类型

#### 基本数据类型
number,string,boolean,undefined,null
#### 值类型
数值、布尔值、null、undefined
#### 引用类型
对象、数组、函数
#### 判断类型
```js
typeof
instanceof // 测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
```

### ES6

#### 数组
1. map: 克服对象键只能是`字符串`,键值结构,方便快速查找
2. set: key的集合,自动去重
3. iterable: `for...of`  `forEach()`
4. map()/reduce():
5. filter
6. sort

### ajax
* AJAX请求是异步执行的，也就是说，要通过回调函数获得响应
```js
基本步骤：
var xhr =null;//创建对象 
if(window.XMLHttpRequest){
       xhr = new XMLHttpRequest();
}else{
       xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.open(“方式”,”地址”,”标志位”);//初始化请求 
   xhr.setRequestHeader(“”,””);//设置http头信息 
xhr.onreadystatechange =function(){//指定回调函数
  if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
} 
xhr.send();//发送请求 
```

### window

#### 常用对象
1. document
2. history
3. location
4. navigator
5. localStorage
6. sessionStorage
7. screen
8. XMLHttpRequest
#### 常用方法
1. open
2. close
3. requestAnimationFrame 
4. cancelAnimationFrame
5. scrollTo
6. setInterval
7. clearInterval
8. setTimeout
9. clearTimeout
10. alert
11. print
12. postMessage

