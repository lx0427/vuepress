# vscode

## `setting.json`

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
  "terminal.integrated.rendererType": "dom",
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.js": "javascriptreact",
    "*.html": "html"
  },
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.js": "javascriptreact",
    "*.html": "html"
  },
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
  "eslint.autoFixOnSave": true, // 每次保存的时候将代码按eslint格式进行修复
  "prettier.eslintIntegration": true, //让prettier使用eslint的代码格式进行校验
  "prettier.semi": false, //去掉代码结尾的分号
  "prettier.singleQuote": true, //使用单引号替代双引号
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
  "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
  "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "preserve-aligned" //属性强制折行对齐 [aligned-multiple|preserve|preserve-aligned|auto|force|force-aligned|force-expand-multiline]
      // "wrap_line_length": 100,
      // "end_with_newline": false
    }
  },
  "eslint.validate": [
    //开启对.vue文件中错误的检查
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
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
  "code-runner.saveFileBeforeRun": false // 设置是否在运行前保存当前文件（默认为false）
}
```
