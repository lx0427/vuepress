# 微商城 APP

## 项目地址

http://192.168.0.80/HengYi/Hengyi-Store-Front.git

## 环境 HBuilder X

- 下载[hbuilderX ](https://www.dcloud.io/hbuilderx.html)

- 工具-插件安装-安装新插件-全部安装
- 安装 sass 插件

## 项目文件描述

```bash
|-- .gitignore
|-- App.vue
|-- CertificateSigningRequest.certSigningRequest // 生成证书相关描述文件
|-- hy_shopping.jks // 安卓证书
|-- main.js
|-- manifest.json // 打包基础配置
|-- pages.json
|-- push.cer // 推送证书
|-- push.p12 // 推送
|-- README.md
|-- service.js
|-- wsckaifa.cer // ios开发证书
|-- wsckaifa.mobileprovision // 公钥
|-- wsckaifa.p12 // 私钥
|-- wsczhenshi.cer // ios正式证书
|-- wsczhenshi.mobileprovision // ios正式公钥
|-- wsczhenshi.p12 // ios正式私钥
|-- common
|   |-- wscConfig.js // api环境配置
|-- pages
|   |-- backstage // 业务员端webview
|   |   |-- backstage.vue
|   |-- front_desk // 转发页面
|   |   |-- transpond
|   |       |-- transpond.vue
|   |-- hylogin // 登录
|   |   |-- hylogin.vue
|   |   |-- privacy
|   |       |-- privacy.vue
|   |-- set // 设置密码
|   |   |-- set.vue
|   |   |-- ChangePassword
|   |   |   |-- ChangePassword.vue
|   |   |-- push
|   |       |-- push.vue
|   |-- titleBar // tab页面
|   |   |-- collect
|   |   |   |-- collect.scss
|   |   |   |-- collect.vue
|   |   |-- home
|   |   |   |-- home.scss
|   |   |   |-- home.vue
|   |   |   |-- newsAll
|   |   |       |-- newsAll.vue
|   |   |-- my
|   |   |   |-- my.scss
|   |   |   |-- my.vue
|   |   |   |-- myMessage
|   |   |   |   |-- myMessage.vue
|   |   |   |-- selectAccountNumber
|   |   |       |-- selectAccountNumber.vue
|   |   |-- PlaceAnOrder // 产品列表页
|   |   |   |-- placeAnOrder.scss
|   |   |   |-- PlaceAnOrder.vue
|   |   |-- shopping_trolley // 购物车
|   |       |-- shoppingTrolley.scss
|   |       |-- shopping_trolley.vue
|   |-- web_view // 客户端webview
|   |   |-- web_view.vue
|   |-- workbench // 业务员工作台页面
|       |-- workbench.scss
|       |-- workbench.vue
|-- static // 图片文件
|-- store // vuex
|   |-- index.js
```

## 启动

```bash
# 导入git项目
# git地址 http://192.168.0.80/HengYi/Hengyi-Store-Front.git
# 使用分支：wsc
# hbuilderX 登录，账号密码：13409909996@163.com/123456hY
# api环境：common/wscConfig.js
# 运行 - 选择运行终端
```

### 打包

```bash
# manifest.json
	配置打包app桌面图标文件(首次需要)
	应用版本名称(向上递增) // ios版本号 x.x.x 更新后两位
	应用版本号(向上递增) // 安卓版本号 195
# 发行 - 原生App云打包 - 导入微信开发者工具(初次需配置) - 开始配置打包
# 安卓包名：com.hy.hywsc
	证书别名：hy
    证书私钥密码：123456
	证书文件：F:/CODE/Hengyi-Store-Front/hy_shopping.jks
# ios包名：com.hy.wsc
    证书私钥密码：123456
    证书profile文件：F:/CODE/Hengyi-Store-Front/wsczhenshi.mobileprovision
	私钥证书：F:/CODE/Hengyi-Store-Front/wsczhenshi.p12
# 取消所有广告勾选
# 传统打包
# 提示打包成功会生成两个下载地址：
	安卓(apk)
	ios(ipa)
```

## 加固（安卓）

下载[360 加固保](https://jiagu.360.cn/#/global/download)

```bash
# 登录账号密码：sw_development@hengyi.com/123456hY
# 签名配置：
	keystore路径：F:/CODE/Hengyi-Store-Front/hy_shopping.jks
	keystore密码：123456
	别名：hy
    别名密码：123456
# 产出路径
	D:\Program Files\360jiagubao_windows_64\jiagu\output\sw_development@hengyi.com
# 使用加固后apk进行发布
```

## 安卓发布

> 加固后的 app + 版本号（应用版本号）发给杰哥

```bash
# 360地址：http://dev.360.cn/mod3/mobileapp/?qid=3135003103&appid=204616191
# 账号密码：sw_development@hengyi.com/123456hY（绑定手机号18768176197）
# 管理中心 - 应用列表 - 点击微商城 - 更新应用信息 - 上传软件包 - 提交审核

# 华为地址：https://developer.huawei.com/consumer/cn/
# 账号密码：sw_development@hengyi.com/123456hY （绑定手机号18768176197）
# 管理中心 - 应用服务 - AppGallery Connect - 我的应用 - 更新 - 软件包管理（上传）- 保存 - 提交审核

# vivo地址：https://dev.vivo.com.cn/manageCenter
# 账号密码：sw_development@hengyi.com/123456hY （绑定手机号18768176197）
# 管理中心 - 应用与游戏 - 点击微商城 - 版本升级 - 点击上传 - 提交
```

## IOS 发布

```bash
# 桌面开机密码：Hengyi123

# 第一种上传方式：Application Loader - 选取文件 - 活动（查看上传信息） - 下一步 - 完成
# 第二种上传方式：Transpoter - 拖入文件 - 交付
# app store: https://appstoreconnect.apple.com/
# 账号密码：hengyixiaoshou@163.com/Hengyi123456 (手机号绑定：位二磊)
# 我的应用 - 版本构建 - 删除当前版本 - 选择要发布的版本 - 存储 - 提交审核

# 测试安装包添加uuid:
	https://developer.apple.com/account/resources/devices/list
	Certificates - download(生成证书相关描述文件)
	Devices - 添加(uuid上限50个)
	Profiles - 点击 wsckaifa(正式) - edit - Devices(select All) - save - download(证书profile文件)
			 - 点击 wsczhenshi(测试)
```

## 蒲公英

> 获取 UUID

```bash
# 地址： https://www.pgyer.com/user/login
# 工具箱 - 获取UUID - 二维码扫描 - 浏览器访问 - 安装蒲公英插件 - 获取
```
