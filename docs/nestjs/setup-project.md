# 后台项目搭建

## 项目启动

```bash
node -v # 10.17.0

# 切换到接口项目
cd .\fullstack\server\
# 安装依赖
yarn
# 启动服务端指定模块
# -w 监听
nest start -w admin
```

## 项目搭建步骤

```bash
node -v # >=10

# 安装nest-cli
yarn global add @nestjs/cli

# 新建项目(服务端代码在server目录下)
nest new server
# yarn

cd server

# Monorepo模式（单体仓库模式）
# 新建子项目
nest g app admin

# main.ts 当前子项目服务配置
# 打印服务端访问地址
# console.log('http://localhost:3000');

# 启动子项目
nest start -w admin

# 共用库(数据库)
nest g lib db
# @libs
# `libs/db/src`
# `db.module.ts`导出DbModule

# 在admin中引入数据库模块
# `app.module.ts`中引入DbModule

# 连接数据库
# nestjs-typegoose在nest中连接数据库
# @typegoose/typegoose支持ts
yarn add nestjs-typegoose @typegoose/typegoose
# nestjs-typegoose依赖mongoose
# @types/mongoose（ts对mongoose的类型定义与提示）
yarn add mongoose @types/mongoose
```

连接数据库
`db.module.ts`

```ts
import { TypegooseModule } from 'nestjs-typegoose'
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/fullstack',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  ]
})
```

定义用户模型：`libs/db/src/models/user.model.ts`

```ts
import { prop } from '@typegoose/typegoose'

export class User {
  @prop()
  username: string
  @prop()
  password: string
}
```

`db.module.ts`，全局引入导出

```ts
import { Module, Global } from '@nestjs/common'
import { DbService } from './db.service'
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model'

const models = TypegooseModule.forFeature([User])

@Global() // 将模型标记为全局
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/topfullstack', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }),
    models // 导入模型
  ],
  providers: [DbService],
  exports: [DbService, models] // 导出模型
})
export class DbModule {}
```

新建`User`模块

```bash
# 在admin下建立users模块
# -p指定子项目
nest g mo -p admin users
# 创建控制器
nest g co -p admin users

# 安装crud
yarn add nestjs-mongoose-crud
# 使用@nestjs/swagger书写文档
# swagger-ui-express基于express的swagger
yarn add @nestjs/swagger swagger-ui-express
```

书写控制器：`users.controller.ts`

```ts
import { Controller } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '../../../../libs/db/src/models/user.model'
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
  model: User // 用于创建更新的dto(数据传输对象)
})
@Controller('users')
export class UsersController {
  // 1. 使用nestjs-typegoose注入模型,传入模型类,注册到model属性上
  // 2. private readonly 属性声明
  constructor(@InjectModel(User) private readonly model) {}
}
```

接口文档

在引导文件`main.ts`中配置

```ts
  import { NestFactory } from '@nestjs/core'
  import { AppModule } from './app.module'
+ import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

  async function bootstrap() {
    const app = await NestFactory.create(AppModule)

+   const options = new DocumentBuilder()
+     .setTitle('全栈之巅后台管理API')
+     .setDescription('供后台管理界面调用的服务端API')
+     .setVersion('1.0')
+     .addTag('admin')
+     .build()
+   const document = SwaggerModule.createDocument(app, options)
+   SwaggerModule.setup('api-docs', app, document)

    await app.listen(3000)
    console.log('http://localhost:3000/api-docs')
  }
  bootstrap()
```

给每个模块添加一个标签

`users.controller.ts`

```ts
  import { Controller } from '@nestjs/common'
  import { InjectModel } from 'nestjs-typegoose'
  import { User } from '../../../../libs/db/src/models/user.model'
  import { Crud } from 'nestjs-mongoose-crud'
+ import { ApiTags } from '@nestjs/swagger'

  @Crud({
    model: User // 用于创建更新的dto(数据传输对象)
  })
  @Controller('users')
+ @ApiTags('用户')
  export class UsersController {
    // 1. 使用nestjs-typegoose注入模型,传入模型类,注册到model属性上
    // 2. private readonly 属性声明
    constructor(@InjectModel(User) private readonly model) {}
  }
```

`user.model.ts`:

1. 添加创建时间+更新时间
2. 添加接口描述
3. 数组类型属性

```ts
+ import { prop, modelOptions, arrayProp, Ref  } from '@typegoose/typegoose'
+ import { ApiProperty } from '@nestjs/swagger'

+ @modelOptions({
+   // 定义schema
+   schemaOptions: {
+     // 添加创建时间+更新时间
+     timestamps: true
+   }
+ })
  export class User {
    // 属性描述+示例值设置
+   @ApiProperty({ description: '用户名', example: 'user1' })
    @prop()
    username: string

+   @ApiProperty({ description: '密码', example: '123456' })
    @prop()
    password: string

    // 数组字段
+   @arrayProp({ itemsRef: 'Episode' })
    // 泛型：使用Ref<参考类型>[] -- ([]表示值为数组)
+   episodes: Ref<Episode>[];
  }
```

```ts
```

```ts
```
