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

6. rbac 权限管理
   1. 用户管理
   2. 角色管理
   3. 权限（菜单）管理
   4. 角色授权
      1. 更新
         1. 清除历史授权
         2. 新增当前授权
   5. 判断当前用户是否有权限访问
   6. 根据用户角色返回动态权限
7. 文件上传

   1. 让表单数据以二进制文件方式上传 `enctype="mutipart/form-data"`
   2. egg-mutipart(内置插件)

      ```js
      async function upload(params) {
        const { ctx } = this
        const stream = await ctx.getFileStream()
        const target = 'app/public/admin/upload' + path.basename(stream.filename)
        const writeStream = fs.createWriteStream(target)
        // const pump = require('mz-module/pump')
        // await pump(stream, writeStream)
        let result
        try {
          result = await stream.pipe(writeStream)
        } catch (err) {
          // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
          await sendToWormhole(stream)
          throw err
        }

        ctx.body = {
          usl: target,
          field: stream.files
        }
      }
      ```
