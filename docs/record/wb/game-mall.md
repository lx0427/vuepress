# 项目部署

## 环境配置

1. node>=8.0
2. mongodb>=4.0
3. redis
4. nginx

## 项目启动

### 后端环境

1. 拉取代码，安装依赖
2. 执行 npm run dev, 启动后端服务

### admin

1. 拉取代码，安装依赖
2. 执行 npm run build
3. 配置 nginx, 启动 nginx

### mobile

1. 拉取代码，安装依赖
2. 执行 npm run build, 启动后端服务
3. 配置 nginx, 启动 nginx

## 导入数据库

1. 菜单，角色，数据字典
2. 多文档事务，需要提前建好集合
   ```js
   // 自定义 id
   db.order.insertOne({ _id: '1', price: 1 })
   db.log_order_status.insertOne({ ip: '1' })
   ```

## 事务使用

1. 配置复制集
2. 使用事务方法封装 api

```

```
