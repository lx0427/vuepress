# 后台接口

## nestjs-mongoose-crud

### 分页

- `limit`: 每页条数
- `page`: 当前页码
- `sort:{username:1}`: _1_=升序(_-1_=降序)
- `where:{username:{$regex:1}}`: 模糊匹配
- `where:{username:1}`: 精确匹配

## 上传图片

### 接口

`app.controller.ts`

```ts
import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common'
import { AppService } from './app.service'
import { FileInterceptor } from '@nestjs/platform-express' // 拦截器

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) // file表示要取上传文件的字段
  async upload(@UploadedFile('file') file) {
    return {
      url: `http://localhost:3000/${file.path}`
    }
  }
}
```

`app.module.ts`

```ts
import { MulterModule } from '@nestjs/platform-express'

@Module({
  imports: [
    MulterModule.register({
      dest: 'uploads' // 会自动在服务端根目录中创建`uploads/`
    })
  ]
})
export class AppModule {}
```

### 静态文件托管

`main.ts`

```ts
// 使用NestExpressApplication泛型
const app = await NestFactory.create<NestExpressApplication>(AppModule)

// 开启静态文件托管
app.useStaticAssets('uploads', {
  prefix: '/uploads'
})
```
