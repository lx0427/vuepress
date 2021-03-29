(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{468:function(t,e,_){"use strict";_.r(e);var v=_(26),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"ant4-form实现原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ant4-form实现原理"}},[t._v("#")]),t._v(" ant4 form实现原理")]),t._v(" "),_("blockquote",[_("p",[t._v("创建数据仓库统一管理，提供get+set函数")]),t._v(" "),_("p",[t._v("单个state改变触发相关组件更新")])]),t._v(" "),_("h2",{attrs:{id:"问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),_("h4",{attrs:{id:"_1-什么会导致组件更新"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么会导致组件更新"}},[t._v("#")]),t._v(" 1. 什么会导致组件更新？")]),t._v(" "),_("blockquote",[_("p",[t._v("setState, useState, useReducer, forceUpdate, ReactDom.render")])]),t._v(" "),_("h4",{attrs:{id:"_2-给元素上添加方法和属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-给元素上添加方法和属性"}},[t._v("#")]),t._v(" 2. 给元素上添加方法和属性")]),t._v(" "),_("blockquote",[_("p",[t._v("React.cloneElement(node, options)")])]),t._v(" "),_("h2",{attrs:{id:"实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),_("ul",[_("li",[t._v("useForm: 创建整个表单统一的数据仓库\n"),_("ul",[_("li",[t._v("getForm: 获取实例，避免直接操作FormStore类")])])]),t._v(" "),_("li",[t._v("FormStore：建立数据仓库，管理form表单数据\n"),_("ul",[_("li",[t._v("获取：单个+所有")]),t._v(" "),_("li",[t._v("更新：合并")]),t._v(" "),_("li",[t._v("注册：返回取消注册函数方法")]),t._v(" "),_("li",[t._v("获取成功失败回调方法")]),t._v(" "),_("li",[t._v("提交：执行校验方法，依据校验结果执行相应回调")]),t._v(" "),_("li",[t._v("校验：")])])]),t._v(" "),_("li",[t._v("Field组件：\n"),_("ul",[_("li",[t._v("添加value: 使用get获取")]),t._v(" "),_("li",[t._v("添加change事件：使用set进行更新")]),t._v(" "),_("li",[t._v("值改变组件未更新：使用"),_("strong",[t._v("forceUpdate")])]),t._v(" "),_("li",[t._v("注册：初始化时，将信息添加到form仓库，方便调用")]),t._v(" "),_("li",[t._v("取消注册：卸载时")])])]),t._v(" "),_("li",[t._v("Form组件：\n"),_("ul",[_("li",[t._v("向子组件传入formInstance："),_("strong",[t._v("context")])]),t._v(" "),_("li",[t._v("传入回调：onFinish, onFinishFailed")]),t._v(" "),_("li",[t._v("submit:  执行formInstance.onSubmit")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);