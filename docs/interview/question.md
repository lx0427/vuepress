# interview

1. 1px问题
## css
1. 清除浮动
2. css盒子模型
3. overflow,position
4. CSS3动画
5. 单行(多行)文本溢出
6. bfc布局
7. 居中方案(垂直水平居中)
8. 两列布局
9. css实现4:3的块元素
10. 无限旋转动画
11. viewport属性，作用
12. 什么方式控制用户不可缩放
13. 弹出层设计
14. 透明度问题
15. body高度不足1屏，实现遮罩铺满
16. 左边定宽，右边自适应
## js
1. 事件代理(细节：target,event)
2. 正则
3. fetch取消eventLoopInstanceof
4. 原型链
5. 继承
6. promise封装,(状态...)
7. vuex详细
8. 闭包使用场景
9. 立即执行函数解决闭包中访问变量问题
10. 事件轮训机制
11. bind,apply,call区别
12. 原生js实现bind,call函数
13. 严格模式
14. 预编译
15. 作用域链
16. 节流函数
17. Object.defineProperty()的优缺点
18. post: content-type类型; get,post,url长度
19. 3个url同时请求，要求按照顺序打印结果
20. 点透问题
21. 查询字符串中出现最多字符的功能
22. 好评点亮星星实现
23. 跨域，实现jsonp
24. cookie与session
25. js请求需要时间的问题
26. 深克隆问题
27. 对es6的理解
28. 堆栈溢出，内存泄漏，怎么会导致内存泄漏？怎么防止？
29. ajax流程，回调函数
30. 自执行函数，构造函数
31. onload `vs` DOMContentLoaded
32. 事件委托，好处？
33. 事件流，事件捕获，事件冒泡
## 框架
1. VUE工作原理
2. setter与getter
3. 单页应用的优缺点
4. 项目需要注意什么，可以优化的地方
5. computed实现原理
6. 单页应用与多页应用的区别
7. vue有没有实现敏感字符过滤，可以用哪个标签来变为未过滤
8. 小程序的生命周期
9. vue双向绑定原理
10. vue实现移动端适配
## 其他
1. 计算机网络OSI模型
2. HTTP协议，TCP协议
3. 操作系统进程与线程
4. 编译原理
5. http缓存的优缺点
6. 浏览器缓存的优缺点
7. 浏览器渲染原理
8. http1.0,1.1,2.0区别
9. http与https的区别
10. tcp如何保证有效传输
11. https具体流程
12. 线程进程，并发并行
14. 网路攻击防xss
15. 堆栈：1s输出1,2s输出3,4s输出2
## 算法
1. 实现1000000中间加
2. 快排
3. 1亿条数据选出1000个最大的

```js
    Array.prototype.push.apply(arr1,arr2);
```

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
1. Map: 克服对象键只能是`字符串`,键值结构,方便快速查找
2. Set: key的集合,自动去重
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

