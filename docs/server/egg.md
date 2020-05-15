# egg 小米商城

## 步骤

1. 初始化项目
2. 目录结构配置
3. 后台管理
   1. 管理员控制器
   2. 角色管理控制器
   3. 权限管理
   4. 配置路由
   5. base 控制器（基类），封装公用方法
   6. 配置 session
   7. svg-captcha 验证码，封装验证码服务
4. 权限管理

   1. 使用中间件
   2. 配置 match 匹配校验路由
   3. 完善中间件路由匹配逻辑, ctx.redirect
   4. 实现登录逻辑

5. 登录

   1. 获取表单提交数据

   ```js
   // 设置全局的 csrf
   // post 提交需要添加 `_csrf` 参数
   ctx.state.csrf = ctx.csrf
   ```

   2. 判断验证码是否正确
   3. 验证码正确，判断用户名密码是否符合规则
   4. 查询用户是否存在，同时匹配账号跟密码
      - tool 中封装基于 md5 的方法
      - 配置 mongoose
      - 配置操作数据库的 model(admin.js)
   5. 密码正确，跳转到 admin 首页

      ```js
      this.ctx.session.userinfo = result[0]

      // 设置全局变量
      ctx.state.userinfo = ctx.session.userinfo
      ```
