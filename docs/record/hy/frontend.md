# 项目管理

## 人事基层政委

### 账号信息

- [前端移动端](http://220.189.213.67:3009/)
- mobile: oa 账号
- [前端后台管理系统](http://220.189.213.67:4009/)
- admin: admin/123456

### 前端服务部署

常用操作：

```bash
# 替换前端文件：覆盖
# 服务器重启, 启动服务
docker start pcf-mobile
docker start pcf-admin
```

docker 容器部署命令：

```bash
# mobile
docker run --name pcf-mobile -p 3009:3009 -v /nginxconf/personnel-committee-frontend/mobile/default.conf:/etc/nginx/conf.d/default.conf -v /frontendServer/personnel-committee-frontend/mobile:/usr/share/nginx/html -d nginx

# admin
docker run --name pcf-admin -p 4009:4009 -v /nginxconf/personnel-committee-frontend/admin/default.conf:/etc/nginx/conf.d/default.conf -v /frontendServer/personnel-committee-frontend/admin:/usr/share/nginx/html -d nginx
```

文件地址：

1. 移动端：/frontendServer/personnel-committee-frontend/mobile
2. 后台管理系统：/frontendServer/personnel-committee-frontend/admin

nginx 服务配置地址：

1. 移动端：/nginxconf/personnel-committee-frontend/mobile/default.conf
2. 后台管理系统：/nginxconf/personnel-committee-frontend/admin/default.conf

### 服务器信息

- 服务器: 192.168.0.94
- 外网 ip: 220.189.213.67
- 开放的外网端口：
  1. 3009：前端 mobile
  2. 4009：前端 admin
  3. 8800：后台接口
  4. 9999：导出报表

## ccf 爬虫

> ccf-clawer

### 服务部署

服务启动：

```bash
# 服务启动
cd /nodeEgg/ccf-clawer
yarn start
# 服务停止
yarn stop
```

- 项目文件夹： /nodeEgg/ccf-clawer
- 日志目录：/root/logs
- 正式数据库表：scrapy_data_ccf_price
- 测试数据库表：test_ptameg

### 服务器信息

- 服务器：192.168.0.61
- 端口：3001
- 数据库信息：
  - 主机名: 192.168.0.130
  - 端口: 1521
  - 服务名: orcl
  - 账号密码: SAPFR_READ/SAPFR_READ

## 人事招聘系统

### 账号信息

- [前端地址](http://220.189.213.67:8082/hrsystem/webpage/com/hrsystem/index.html#/)
- pc: 15172413095/123456
- [后台管理系统](http://220.189.213.67:8082/hrsystem/loginController.do?login#)
- admin: HRAdmin/123456

### 服务部署

> 项目名: HRSystem-2019-Front
> 前端服务部署在后端 tomcat 中

### 服务器信息

- 服务器：192.168.0.32
- 外网 ip: 220.189.213.67
- 端口：8082
- 文件地址：D:\apache-tomcat-9.0.20\webapps\hrsystem\webpage\com

## 新闭环

### 账号信息

- [前端地址](http://220.189.213.71:8099/user/login?redirect=%2F)
- admin: admin/123456

### 服务部署

- 本地目录：F:\CODE\hengyi-boot-web\dist
- 文件位置：/data/static
- 启动服务

  ```bash
  # 启动
  start nginx
  # 停止
  nginx -s stop
  # 重载配置
  nginx -s reload
  ```

- nginx 配置：

  ```bash
  cd /etc/nginx
  cat nginx.conf
  ```

### 服务器信息

- ip: 192.168.0.200
- port: 8080
- 外网 ip: 220.189.213.71
- 外网 port: 8099

## 老闭环

### 账号信息

- [前端地址](http://sales.hengyi.com/#/)
- admin: hyadmin/hy@123

### 服务部署

- 本地目录：F:\CODE\hengyi_scmls
- 文件路径: /webapps/hengyi_scmls_1213
- 启动服务: 同新闭环
- nginx 配置：同新闭环

### 服务器信息

- ip: 106.14.207.187(SFTP)
- port: 80
- 账号密码: root/qw!@er34
