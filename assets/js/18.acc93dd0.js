(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{381:function(s,a,e){"use strict";e.r(a);var t=e(26),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"ccf爬虫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ccf爬虫"}},[s._v("#")]),s._v(" ccf爬虫")]),s._v(" "),e("h3",{attrs:{id:"项目地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目地址"}},[s._v("#")]),s._v(" 项目地址")]),s._v(" "),e("p",[s._v("http://192.168.0.80/lixiong/ccf-clawer")]),s._v(" "),e("h3",{attrs:{id:"服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器"}},[s._v("#")]),s._v(" 服务器")]),s._v(" "),e("blockquote",[e("p",[s._v("堡垒机： 192.168.0.61")])]),s._v(" "),e("h3",{attrs:{id:"数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[s._v("#")]),s._v(" 数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("user: 'SAPFR_READ', // 用户名\npassword: 'SAPFR_READ', // 密码\nconnectString: '192.168.0.130:1521/orcl',\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"数据库表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库表"}},[s._v("#")]),s._v(" 数据库表")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# ccf爬取数据写入表： scrapy_data_ccf_price\n# 汇率爬取数据写入表： scrapy_data_exchange_rate\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 环境：node 10.x\n\n# pm2环境\nnpm i pm2 -g\n\n# 项目启动\ncd /nodeEgg/ccf-clawer\npm2 start ccf-clawer.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("项目代码与/nodeEgg/ccf-clawer一致\npm2 restart ccf-clawer\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"核心代码描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心代码描述"}},[s._v("#")]),s._v(" 核心代码描述")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("|-- app\n|   |-- extend\n|   |   |-- helper.js // 数据库连接方法，解析ccf页面内容方法，解析汇率页面内容方法\n|   |-- schedule\n|   |   |-- ccf.js // ccf定时任务\n|   |   |-- exchange_rate.js // 银行汇率定时任务\n|   |-- service\n|       |-- ccf.js // 向oracle中插入数据, ccf登录\n|       |-- exchange_rate.js // 向oracle中插入数据\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"相关文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关文档"}},[s._v("#")]),s._v(" 相关文档")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://cheerio.js.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cheerio文档"),e("OutboundLink")],1),s._v(" ：解析dom")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://eggjs.org/zh-cn/intro/quickstart.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("eggjs文档"),e("OutboundLink")],1),s._v(" : 项目框架")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/quick-start/",target:"_blank",rel:"noopener noreferrer"}},[s._v("pm2文档"),e("OutboundLink")],1),s._v(" ：项目启动工具")])])}),[],!1,null,null,null);a.default=r.exports}}]);