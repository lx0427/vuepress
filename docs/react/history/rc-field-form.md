## ant4 form实现原理

> 创建数据仓库统一管理，提供get+set函数
>
> 单个state改变触发相关组件更新

## 问题

#### 1. 什么会导致组件更新？

> setState, useState, useReducer, forceUpdate, ReactDom.render

#### 2. 给元素上添加方法和属性

> React.cloneElement(node, options)

## 实现

- useForm: 创建整个表单统一的数据仓库
  - getForm: 获取实例，避免直接操作FormStore类
- FormStore：建立数据仓库，管理form表单数据
  - 获取：单个+所有
  - 更新：合并
  - 注册：返回取消注册函数方法
  - 获取成功失败回调方法
  - 提交：执行校验方法，依据校验结果执行相应回调
  - 校验：
- Field组件：
  - 添加value: 使用get获取
  - 添加change事件：使用set进行更新
  - 值改变组件未更新：使用**forceUpdate**
  - 注册：初始化时，将信息添加到form仓库，方便调用
  - 取消注册：卸载时
- Form组件：
  - 向子组件传入formInstance：**context**
  - 传入回调：onFinish, onFinishFailed
  - submit:  执行formInstance.onSubmit