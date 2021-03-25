(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{445:function(a,t,e){"use strict";e.r(t);var s=e(26),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"项目管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目管理"}},[a._v("#")]),a._v(" 项目管理")]),a._v(" "),e("h2",{attrs:{id:"人事基层政委"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#人事基层政委"}},[a._v("#")]),a._v(" 人事基层政委")]),a._v(" "),e("blockquote",[e("p",[a._v("personnel-committee-frontend[gitlab]")])]),a._v(" "),e("h3",{attrs:{id:"账号信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#账号信息"}},[a._v("#")]),a._v(" 账号信息")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://220.189.213.67:3009/",target:"_blank",rel:"noopener noreferrer"}},[a._v("前端移动端"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("mobile: oa 账号")]),a._v(" "),e("li",[e("a",{attrs:{href:"http://220.189.213.67:4009/",target:"_blank",rel:"noopener noreferrer"}},[a._v("前端后台管理系统"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("admin: admin/123456")])]),a._v(" "),e("h3",{attrs:{id:"前端服务部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端服务部署"}},[a._v("#")]),a._v(" 前端服务部署")]),a._v(" "),e("p",[a._v("常用操作：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 替换前端文件：覆盖")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 服务器重启, 启动服务")]),a._v("\ndocker start pcf-mobile\ndocker start pcf-admin\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("docker 容器部署命令：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mobile")]),a._v("\ndocker run --name pcf-mobile -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3009")]),a._v(":3009 -v /nginxconf/personnel-committee-frontend/mobile/default.conf:/etc/nginx/conf.d/default.conf -v /frontendServer/personnel-committee-frontend/mobile:/usr/share/nginx/html -d nginx\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# admin")]),a._v("\ndocker run --name pcf-admin -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4009")]),a._v(":4009 -v /nginxconf/personnel-committee-frontend/admin/default.conf:/etc/nginx/conf.d/default.conf -v /frontendServer/personnel-committee-frontend/admin:/usr/share/nginx/html -d nginx\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("文件地址：")]),a._v(" "),e("ol",[e("li",[a._v("移动端：/frontendServer/personnel-committee-frontend/mobile")]),a._v(" "),e("li",[a._v("后台管理系统：/frontendServer/personnel-committee-frontend/admin")])]),a._v(" "),e("p",[a._v("nginx 服务配置地址：")]),a._v(" "),e("ol",[e("li",[a._v("移动端：/nginxconf/personnel-committee-frontend/mobile/default.conf")]),a._v(" "),e("li",[a._v("后台管理系统：/nginxconf/personnel-committee-frontend/admin/default.conf")])]),a._v(" "),e("h3",{attrs:{id:"服务器信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器信息"}},[a._v("#")]),a._v(" 服务器信息")]),a._v(" "),e("ul",[e("li",[a._v("服务器: 192.168.0.94")]),a._v(" "),e("li",[a._v("外网 ip: 220.189.213.67")]),a._v(" "),e("li",[a._v("开放的外网端口：\n"),e("ol",[e("li",[a._v("3009：前端 mobile")]),a._v(" "),e("li",[a._v("4009：前端 admin")]),a._v(" "),e("li",[a._v("8800：后台接口")]),a._v(" "),e("li",[a._v("9999：导出报表")])])])]),a._v(" "),e("h2",{attrs:{id:"ccf-爬虫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ccf-爬虫"}},[a._v("#")]),a._v(" ccf 爬虫")]),a._v(" "),e("blockquote",[e("p",[a._v("ccf-clawer/egg-1[github]")])]),a._v(" "),e("h3",{attrs:{id:"服务部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务部署"}},[a._v("#")]),a._v(" 服务部署")]),a._v(" "),e("p",[a._v("服务启动：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 服务启动")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /nodeEgg/ccf-clawer\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" start\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 服务停止")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" stop\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("ul",[e("li",[a._v("项目文件夹： /nodeEgg/ccf-clawer")]),a._v(" "),e("li",[a._v("日志目录：/root/logs")]),a._v(" "),e("li",[a._v("正式数据库表：scrapy_data_ccf_price")]),a._v(" "),e("li",[a._v("测试数据库表：test_ptameg")])]),a._v(" "),e("h3",{attrs:{id:"服务器信息-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器信息-2"}},[a._v("#")]),a._v(" 服务器信息")]),a._v(" "),e("ul",[e("li",[a._v("服务器：192.168.0.61")]),a._v(" "),e("li",[a._v("端口：3001")]),a._v(" "),e("li",[a._v("数据库信息：\n"),e("ul",[e("li",[a._v("主机名: 192.168.0.130")]),a._v(" "),e("li",[a._v("端口: 1521")]),a._v(" "),e("li",[a._v("服务名: orcl")]),a._v(" "),e("li",[a._v("账号密码: SAPFR_READ/SAPFR_READ")])])])]),a._v(" "),e("h2",{attrs:{id:"人事招聘系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#人事招聘系统"}},[a._v("#")]),a._v(" 人事招聘系统")]),a._v(" "),e("blockquote",[e("p",[a._v("HRSystem-2019-Front[gitlab]")])]),a._v(" "),e("h3",{attrs:{id:"账号信息-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#账号信息-2"}},[a._v("#")]),a._v(" 账号信息")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://220.189.213.67:8082/hrsystem/webpage/com/hrsystem/index.html#/",target:"_blank",rel:"noopener noreferrer"}},[a._v("前端地址"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("pc: 15172413095/123456")]),a._v(" "),e("li",[e("a",{attrs:{href:"http://220.189.213.67:8082/hrsystem/loginController.do?login#",target:"_blank",rel:"noopener noreferrer"}},[a._v("后台管理系统"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("admin: HRAdmin/123456")])]),a._v(" "),e("h3",{attrs:{id:"服务部署-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务部署-2"}},[a._v("#")]),a._v(" 服务部署")]),a._v(" "),e("blockquote",[e("p",[a._v("前端服务部署在后端 tomcat 中")])]),a._v(" "),e("h3",{attrs:{id:"服务器信息-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器信息-3"}},[a._v("#")]),a._v(" 服务器信息")]),a._v(" "),e("ul",[e("li",[a._v("服务器：192.168.0.32")]),a._v(" "),e("li",[a._v("外网 ip: 220.189.213.67")]),a._v(" "),e("li",[a._v("端口：8082")]),a._v(" "),e("li",[a._v("文件地址：D:\\apache-tomcat-9.0.20\\webapps\\hrsystem\\webpage\\com")])]),a._v(" "),e("h2",{attrs:{id:"新闭环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新闭环"}},[a._v("#")]),a._v(" 新闭环")]),a._v(" "),e("blockquote",[e("p",[a._v("hengyi-boot-web[gitlab]")])]),a._v(" "),e("h3",{attrs:{id:"账号信息-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#账号信息-3"}},[a._v("#")]),a._v(" 账号信息")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://220.189.213.71:8099/user/login?redirect=%2F",target:"_blank",rel:"noopener noreferrer"}},[a._v("前端地址"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("admin: admin/123456")])]),a._v(" "),e("h3",{attrs:{id:"服务部署-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务部署-3"}},[a._v("#")]),a._v(" 服务部署")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("本地目录：F:\\CODE\\hengyi-boot-web\\dist")])]),a._v(" "),e("li",[e("p",[a._v("文件位置：/data/static")])]),a._v(" "),e("li",[e("p",[a._v("启动服务")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动")]),a._v("\nstart nginx\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止")]),a._v("\nnginx -s stop\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重载配置")]),a._v("\nnginx -s reload\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("nginx 配置：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /etc/nginx\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" nginx.conf\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])])]),a._v(" "),e("h3",{attrs:{id:"服务器信息-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器信息-4"}},[a._v("#")]),a._v(" 服务器信息")]),a._v(" "),e("ul",[e("li",[a._v("ip: 192.168.0.200")]),a._v(" "),e("li",[a._v("port: 8080")]),a._v(" "),e("li",[a._v("外网 ip: 220.189.213.71")]),a._v(" "),e("li",[a._v("外网 port: 8099")])]),a._v(" "),e("h2",{attrs:{id:"老闭环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#老闭环"}},[a._v("#")]),a._v(" 老闭环")]),a._v(" "),e("blockquote",[e("p",[a._v("hengyi_scmls[gitee]")])]),a._v(" "),e("h3",{attrs:{id:"账号信息-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#账号信息-4"}},[a._v("#")]),a._v(" 账号信息")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://sales.hengyi.com/#/",target:"_blank",rel:"noopener noreferrer"}},[a._v("前端地址"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("admin: hyadmin/hy@123")])]),a._v(" "),e("h3",{attrs:{id:"服务部署-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务部署-4"}},[a._v("#")]),a._v(" 服务部署")]),a._v(" "),e("ul",[e("li",[a._v("本地目录：F:\\CODE\\hengyi_scmls")]),a._v(" "),e("li",[a._v("文件路径: /webapps/hengyi_scmls")]),a._v(" "),e("li",[a._v("启动服务: 同新闭环")]),a._v(" "),e("li",[a._v("nginx 配置：同新闭环")])]),a._v(" "),e("h3",{attrs:{id:"服务器信息-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器信息-5"}},[a._v("#")]),a._v(" 服务器信息")]),a._v(" "),e("ul",[e("li",[a._v("ip: 106.14.207.187(SFTP)")]),a._v(" "),e("li",[a._v("port: 22")]),a._v(" "),e("li",[a._v("账号密码: root/qw!@er34")])])])}),[],!1,null,null,null);t.default=n.exports}}]);