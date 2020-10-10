# 自定义模板

## 操作步骤

1. 设置
2. 用户代码片段
3. 选择`vue.json`
4. 设置模板内容及格式
   ```json
   {
     "vue-html": {
       "prefix": "vtpl",
       "body": [
         "<template>",
         "\t<div>",
         "\t\t$2",
         "\t</div>",
         "</template>\n",
         "<script lang=\"ts\">",
         "import { Vue, Component } from \"vue-property-decorator\";",
         "@Component({})",
         "export default class $1 extends Vue {}",
         "</script>\n",
         "<style></style>"
       ],
       "description": "Log output to console"
     }
   }
   ```

## 语法提示

- `\t`: 缩进
- `\n`: 换行
- `$1`: 光标第一次位置
- `$2`: 光标第二次位置
