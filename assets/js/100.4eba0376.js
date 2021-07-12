(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{469:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"egg-小米商城"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#egg-小米商城"}},[s._v("#")]),s._v(" egg 小米商城")]),s._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("初始化项目")])]),s._v(" "),a("li",[a("p",[s._v("目录结构配置")])]),s._v(" "),a("li",[a("p",[s._v("后台管理")]),s._v(" "),a("ol",[a("li",[s._v("管理员控制器")]),s._v(" "),a("li",[s._v("角色管理控制器")]),s._v(" "),a("li",[s._v("权限管理")]),s._v(" "),a("li",[s._v("配置路由")]),s._v(" "),a("li",[s._v("base 控制器（基类），封装公用方法")]),s._v(" "),a("li",[s._v("配置 session")]),s._v(" "),a("li",[s._v("svg-captcha 验证码，封装验证码服务")])])]),s._v(" "),a("li",[a("p",[s._v("权限管理")]),s._v(" "),a("ol",[a("li",[s._v("使用中间件")]),s._v(" "),a("li",[s._v("配置 match 匹配校验路由")]),s._v(" "),a("li",[s._v("完善中间件路由匹配逻辑, ctx.redirect")]),s._v(" "),a("li",[s._v("实现登录逻辑")])])]),s._v(" "),a("li",[a("p",[s._v("登录")]),s._v(" "),a("ol",[a("li",[s._v("获取表单提交数据")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置全局的 csrf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// post 提交需要添加 `_csrf` 参数")]),s._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("csrf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("csrf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("判断验证码是否正确")])]),s._v(" "),a("li",[a("p",[s._v("验证码正确，判断用户名密码是否符合规则")])]),s._v(" "),a("li",[a("p",[s._v("查询用户是否存在，同时匹配账号跟密码")]),s._v(" "),a("ul",[a("li",[s._v("tool 中封装基于 md5 的方法")]),s._v(" "),a("li",[s._v("配置 mongoose")]),s._v(" "),a("li",[s._v("配置操作数据库的 model(admin.js)")])])]),s._v(" "),a("li",[a("p",[s._v("密码正确，跳转到 admin 首页")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置全局变量")]),s._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userinfo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("rbac 权限管理")]),s._v(" "),a("ol",[a("li",[s._v("用户管理")]),s._v(" "),a("li",[s._v("角色管理")]),s._v(" "),a("li",[s._v("权限（菜单）管理")]),s._v(" "),a("li",[s._v("角色授权\n"),a("ol",[a("li",[s._v("更新\n"),a("ol",[a("li",[s._v("清除历史授权")]),s._v(" "),a("li",[s._v("新增当前授权")])])])])]),s._v(" "),a("li",[s._v("判断当前用户是否有权限访问")]),s._v(" "),a("li",[s._v("根据用户角色返回动态权限")])])]),s._v(" "),a("li",[a("p",[s._v("文件上传")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("让表单数据以二进制文件方式上传 "),a("code",[s._v('enctype="mutipart/form-data"')])])]),s._v(" "),a("li",[a("p",[s._v("egg-mutipart(内置插件)")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("upload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ctx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" stream "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFileStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app/public/admin/upload'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" writeStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createWriteStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// const pump = require('mz-module/pump')")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// await pump(stream, writeStream)")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" result\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("writeStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 必须将上传的文件流消费掉，要不然浏览器响应会卡死")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendToWormhole")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" err\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    usl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    field"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("files\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])])])])])]),s._v(" "),a("h2",{attrs:{id:"故障记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障记录"}},[s._v("#")]),s._v(" 故障记录")]),s._v(" "),a("h3",{attrs:{id:"上传图片-formdata-字段丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传图片-formdata-字段丢失"}},[s._v("#")]),s._v(" 上传图片，formData 字段丢失")]),s._v(" "),a("blockquote",[a("p",[s._v("上传文件必须在所有其他的 fields 后面，否则在拿到文件流时可能还获取不到 fields")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/controller.html#%E8%8E%B7%E5%8F%96%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);