# nestJS 服务端

## 项目搭建步骤

### CLI

```bash
node -v # >=10

# 安装nest-cli
yarn global add @nestjs/cli
```

### 新建项目

```bash
# 新建项目(服务端代码在server目录下)
nest new server
# yarn
```

### 新建子项目

```bash
cd server

# Monorepo模式（单体仓库模式）
# 新建子项目
nest g app admin
```

### 启动子项目

- `-w`:监听
- 启动服务端指定项目

```bash
nest start -w admin
```

### 新建共用库(数据库)

```bash
nest g lib db
# @libs
```

**在 admin 下`app.module.ts`中引入 DbModule**

### 连接数据库

- `nestjs-typegoose`:在 nest 中连接数据库
- `@typegoose/typegoose`:支持 ts
- `mongoose`:nestjs-typegoose 依赖 mongoose
- `@types/mongoose`:ts 对 mongoose 的类型定义与提示

```bash
yarn add nestjs-typegoose @typegoose/typegoose mongoose @types/mongoose
```

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

## Crud

### 新建模型类

`libs/db/src/models/user.model.ts`

```ts
import { prop, arrayProp, Ref } from '@typegoose/typegoose'

export class User {
  @prop()
  username: string
  @prop()
  password: string
  // 数组字段
  @arrayProp({ itemsRef: 'Episode' })
  // 泛型：使用Ref<参考类型>[] -- ([]表示值为数组)
  courses: Ref<Episode>[]
}
```

### 数据库中引用模型类

`db.module.ts`

```ts
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model'

const models = TypegooseModule.forFeature([User])

@Global() // 将模型标记为全局
@Module({
  imports: [
    models // 导入模型
  ],
  exports: [models] // 导出模型
})
export class DbModule {}
```

### 新建模块与控制器

- `-p <子项目名>`:在 <子项目> 下建立模块

```bash
# module
nest g mo -p admin users
# controller
nest g co -p admin users
```

### 依赖包

- `nestjs-mongoose-crud`: 封装的 crud 插件
- `@nestjs/swagger`: 书写文档
- `swagger-ui-express`: swagger-ui-express 基于 express 的 swagger

```bash
yarn add nestjs-mongoose-crud @nestjs/swagger swagger-ui-express
```

### 控制器中完成接口

- `@InjectModel`：注入模型,传入模型类,注册到 model 属性上
- `private readonly`：属性声明

`users.controller.ts`

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
  constructor(@InjectModel(User) private readonly model) {}
}
```

## 接口文档

### 配置引导文件

`main.ts`

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

### 配置创建时间+更新时间

`user.model.ts`:

```ts
+ import { modelOptions } from '@typegoose/typegoose'

+ @modelOptions({
+   // 定义schema
+   schemaOptions: {
+     timestamps: true
+   }
+ })
  export class User {}
```

### 接口描述

`users.controller.ts`

```ts
+ @Crud({
+   routes: {
+     find: {
+       decorators: [ApiOperation({ summary: '用户列表' })],
+     },
+   },
+ })
  export class UsersController {}
```

### 属性描述

- `description`：属性描述
- `user1`：示例值

```ts
+ import { ApiProperty } from '@nestjs/swagger'
  export class User {
+   @ApiProperty({ description: '用户名', example: 'user1' })
    @prop()
    username: string
  }
```

## 验证

### 开启全局管道

`main.ts`

```ts
+ import { ValidationPipe } from '@nestjs/common'
  async function bootstrap() {
   const app = await NestFactory.create(AppModule)
    // 开启全局验证管道
+   app.useGlobalPipes(new ValidationPipe())
    await app.listen(3000)
  }
  bootstrap()
```

### 依赖包

```bash
yarn add class-validator class-transformer
```

### 模型类中设置验证

```ts
+ import { IsNotEmpty } from 'class-validator'

  export class User {
    @ApiProperty({ description: '用户名', example: 'username1' })
+   @IsNotEmpty({ message: '请输入标题' })
    @prop()
    username: string
  }
```

```bash
# 新建server
nest new server
ad server
# 新建子项目admin
nest g app admin
nest start -w admin
# hello world
# 公用数据库
nest g lib db
@libs
# `app.module`中导入DbModule
# 连接数据库
yarn add nestjs-typegoose @typegoose/typegoose mongoose @types/mongoose
# TypegooseModule.forRoot('',{})
# user.model.ts
# db.module中引入全局暴露
nest g mo -p admin users
nest g co -p admin users

```

## 其他问题

### 接口跨域

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors() // 允许跨域
  await app.listen(3000)
}
```
