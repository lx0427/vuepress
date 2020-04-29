# vscode

## 问题

### 函数名与括号之前的空格

`.eslintrc.js`

```js
module.exports = {
  rules: {
    'space-before-function-paren': 0
  }
}
```

### 单引号

`.prettierrc`

```json
{
  "singleQuote": true
}
```

### 分号

`.prettierrc`

```json
{
  "semi": true
}
```

### 尾逗号

`.prettierrc`

```json
{
  "trailingComma": "es5"
}
```

### 无法加载文件

1. 使用管理員身份打開 powershell

```bash
set-ExecutionPolicy RemoteSigned
# A
```

2. 設置 vscode 兼容性

- 软件图标 - 属性 - 兼容性
- 以管理员身份运行此程序 - 应用 - 确定

```bash
tsc : 无法加载文件 c:\dev\nvm\npm\tsc.ps1，因为在此系统上禁止运行脚本。
```

## 设置

### 自定义用户代码片段

- **`settings.json`**

```json
"[markdown]": {
  "editor.quickSuggestions": true // 开启自定义代码片段
},
```

- 用户代码片段

````json
"code": {
  "prefix": "code",
  "body": [
    "```$1",
    "$2",
    "```",
  ],
  "description": "Log output to code snippet"
}
````

### 设置中(自动保存添加分号)

```json
"vetur.format.defaultFormatter.js": "vscode-typescript"
```

### 完整`setting.json`配置

```json
{
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed", // 格式化
      "extensionName": ".css",
      "savePath": null
    }
  ],
  "liveSassCompile.settings.includeItems": ["static/css/print-box-code.scss"], // 编译指定文件
  "liveSassCompile.settings.autoprefix": null, // 不自动补全属性，默认补全
  "liveSassCompile.settings.generateMap": false, // 不生成.map，默认生成
  "emmet.includeLanguages": {
    "wxml": "html",
    "javascript": "javascriptreact"
  },
  "git.autofetch": true,
  "git.confirmSync": false,
  "editor.suggestSelection": "first",
  "diffEditor.ignoreTrimWhitespace": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "breadcrumbs.enabled": true,
  "editor.fontSize": 16, //设置文字大小
  "editor.lineHeight": 24, //设置文字行高
  "editor.lineNumbers": "on", //开启行数提示
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "window.zoomLevel": 1.5, //调整窗口的缩放级别
  "editor.tabSize": 2, //制表符符号eslint
  "editor.formatOnSave": true, //每次保存自动格式化
  /* eslint + vetur + prettier-code format */
  "prettier.semi": false, //去掉代码结尾的分号
  "prettier.singleQuote": true, //使用单引号替代双引号
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
  "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
  "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "preserve-aligned"
    }
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "terminal.integrated.rendererType": "dom",
  /* code-runner 编辑器执行代码 */
  "code-runner.executorMapByGlob": {
    // 设置每个文件名glob的执行程序
    "*.js": "node"
  },
  "code-runner.defaultLanguage": "javascript",
  "code-runner.clearPreviousOutput": true, // 设置是否在每次运行之前清除先前的输出（默认为false）
  "code-runner.saveFileBeforeRun": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[js]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": false
    }
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "beautify.config": ""
}
```

## 插件

### 格式化文件

`Format File`

选择目录，右键 start format files: workspace

### element-ui 语法提示

`Element UI snippets`

### node 语法提示

`node snippets`
