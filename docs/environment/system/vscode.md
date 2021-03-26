## 插件及用途

- vetur
- language
- Vue Vscode Snippets
- eslint
- Prettier - Code formatter
- GitLens — Git supercharged

```markdown
|-- Auto Close Tag // 自动闭合标签
|-- Auto Import // 自动导入
|-- Auto Rename Tag // 自动修改对应闭合标签
|-- Better Comments // 注释颜色提示
|-- Chinese (Simplified) Language Pack for Visual Studio Code // 中文
|-- Debugger for Chrome
|-- Debugger for Java
|-- ESLint
|-- Format Files // 格式化目录中所有文件
|-- GitLens — Git supercharged // git提交管理
|-- HTML Format
|-- Live Sass Compiler // 预编译
|-- Live Server // 启动本地http服务
|-- Open Brower Preview
|-- Prettier - Code formatter
|-- React-Native/React/Redux snippets for es6/es7
|-- React/Redux/react-router Snippets
|-- Remote - WSL
|-- Simple React Snippets
|-- Vetur
|-- Vue VSCode Snippets
|-- Element UI snippets
|-- node snippets
```



## 代码格式化

### .prettierrc

```
{
  "singleQuote": true, // 单引号
  "semi": false, // 分号
  "trailingComma": "es5" // 尾逗号
}
```

### .eslintrc.js

```js
module.exports = {
  rules: {
    'space-before-function-paren': 0, // 函数名与括号之前的空格
    'comma-dangle': 0,
  },
}
```

## 问题

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

## 代码习惯配置

```json
{
  "liveSassCompile.settings.includeItems": [ 
    "print-box-code",
  ], // livesass预编译指定文件
  "editor.fontSize": 18, //设置文字大小
  "editor.lineHeight": 26, //设置文字行高
  "editor.lineNumbers": "on", //开启行数提示
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.tabSize": 2, // 制表符符号eslint
  "editor.formatOnSave": true, // 每次保存自动格式化
  "prettier.semi": false, // 去掉代码结尾的分号
  "prettier.singleQuote": true, // 使用单引号替代双引号
  "prettier.trailingComma": "es5", // 尾逗号
  "prettier.proseWrap": "preserve", // 默认值
  "prettier.printWidth": 120, // 每行最大长度
  "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
  "prettier.htmlWhitespaceSensitivity": "ignore",
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatterOptions": {
    // vetur配合prettier进行格式化
    "prettier": {
      "singleQuote": true,
      "semi": false,
      "eslintIntegration": true
    }
  },
  "editor.codeActionsOnSave": {
    // 使用eslint自动保存修复
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "search.showLineNumbers": true,
  "git.autofetch": true,
  "editor.minimap.enabled": false, // 隐藏缩略图
  "files.associations": {
    "*.js": "javascriptreact"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "js/ts.implicitProjectConfig.experimentalDecorators": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.validate.enable": false,
  "workbench.sideBar.location": "left",
  "window.zoomLevel": 0,
  "editor.accessibilitySupport": "off", // flow定义类型报错
}

```
## 用户代码片段

> `\t`: 缩进
>
> `\n`: 换行
>
> `$1`: 光标第一次位置
>
> `$2`: 光标第二次位置
>
>`${1:${TM_FILENAME_BASE}}`: 指定指定光标处使用当前文件名

```json
{
	// Place your snippets for javascriptreact here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"Import React": {
		"prefix": "rcch",
		"body": [
			"import React, { Component } from 'react'",
			"",
			"export default class ${1:${TM_FILENAME_BASE}} extends Component {",
			"\trender() {",
			"\t\treturn (",
			"\t\t\t<div>",
			"\t\t\t\t<h3>${1:${TM_FILENAME_BASE}}</h3>",
			"\t\t\t</div>",
			"\t\t)",
			"\t}",
			"}",
			""
		]
	},
	"Import React Export": {
		"prefix": "rcche",
		"body": [
			"import React, { Component } from 'react'",
			"",
			"class ${1:${TM_FILENAME_BASE}} extends Component {",
			"\trender() {",
			"\t\treturn (",
			"\t\t\t<div>",
			"\t\t\t\t<h3>${1:${TM_FILENAME_BASE}}</h3>",
			"\t\t\t</div>",
			"\t\t)",
			"\t}",
			"}",
			"export default ${1:${TM_FILENAME_BASE}}",
			""
		]
	},
	"Import React Function": {
		"prefix": "rfch",
		"body": [
			"import React from 'react'",
			"",
			"export default function ${1:${TM_FILENAME_BASE}}(props) {",
			"\treturn (",
			"\t\t<div>",
			"\t\t\t<h3>${1:${TM_FILENAME_BASE}}</h3>",
			"\t\t</div>",
			"\t)",
			"}",
			""
		]
	},
	"Import React Function Export": {
		"prefix": "rfche",
		"body": [
			"import React from 'react'",
			"",
			"function ${1:${TM_FILENAME_BASE}}(props) {",
			"\treturn (",
			"\t\t<div>",
			"\t\t\t<h3>${1:${TM_FILENAME_BASE}}</h3>",
			"\t\t</div>",
			"\t)",
			"}",
			"export default ${1:${TM_FILENAME_BASE}}",
			""
		]
	},
	"Arrow": {
		"prefix": "a",
		"body": [
			"=> $0",
		]
	},
	"Arrow Function": {
		"prefix": "af",
		"body": [
			"() => $0",
		]
	},
	"Arrow Function Complete": {
		"prefix": "afc",
		"body": [
			"() => {$0}",
		]
	},
	"Functions": {
		"prefix": "f",
		"body": [
			"function ${1:${TM_FILENAME_BASE}}(){",
			"\t$0",
			"}"
		]
	},
	"export function": {
		"prefix": "ef",
		"body": [
			"export function ${1:${TM_FILENAME_BASE}}(){",
			"\t$0",
			"}"
		]
	},
	"export default function": {
		"prefix": "edf",
		"body": [
			"export default function ${1:${TM_FILENAME_BASE}}(){",
			"\t$0",
			"}"
		]
	},
	"const": {
		"prefix": "c",
		"body": [
			"const $0",
		]
	},
	"require": {
		"prefix": "r",
		"body": [
			"require('$0')",
		]
	},
	"const require": {
		"prefix": "cr",
		"body": [
			"const ${1:$1} = require('$1')",
		]
	},
	"promisify require": {
		"prefix": "pr",
		"body": [
			"promisify(require('$0'))",
		]
	},
	"const promisify require": {
		"prefix": "cpr",
		"body": [
			"const ${1:$1} = promisify(require('$1'))",
		]
	},
	"app use koa": {
		"prefix": "au",
		"body": [
			"app.use((ctx, next) => {$0})",
		]
	},
}
```

## 将vscode添加到快速访问栏

> 新建`vsCodeOpenFolder.reg`，双击执行，一路确认
```
Windows Registry Editor Version 5.00   
   
; Open files   
[HKEY_CLASSES_ROOT\*\shell\Open with VS Code]   
@="Edit with VS Code"   
"Icon"="D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe,0"   
   
[HKEY_CLASSES_ROOT\*\shell\Open with VS Code\command]   
@="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\" \"%1\""   
   
; This will make it appear when you right click ON a folder   
; The "Icon" line can be removed if you don't want the icon to appear   
   
[HKEY_CLASSES_ROOT\Directory\shell\vscode]   
@="Open Folder as VS Code Project"   
"Icon"="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\",0"   
   
[HKEY_CLASSES_ROOT\Directory\shell\vscode\command]   
@="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\" \"%1\""   
   
   
; This will make it appear when you right click INSIDE a folder   
; The "Icon" line can be removed if you don't want the icon to appear   
   
[HKEY_CLASSES_ROOT\Directory\Background\shell\vscode]   
@="Open Folder as VS Code Project"   
"Icon"="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\",0"   
   
[HKEY_CLASSES_ROOT\Directory\Background\shell\vscode\command]   
@="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\" \"%V\""
D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe,0"   
   
[HKEY_CLASSES_ROOT\*\shell\Open with VS Code\command]   
@="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\" \"%1\""   
   
; This will make it appear when you right click ON a folder   
; The "Icon" line can be removed if you don't want the icon to appear   
   
[HKEY_CLASSES_ROOT\Directory\shell\vscode]   
@="Open Folder as VS Code Project"   
"Icon"="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\",0"   
   
[HKEY_CLASSES_ROOT\Directory\shell\vscode\command]   
@="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\" \"%1\""   
   
   
; This will make it appear when you right click INSIDE a folder   
; The "Icon" line can be removed if you don't want the icon to appear   
   
[HKEY_CLASSES_ROOT\Directory\Background\shell\vscode]   
@="Open Folder as VS Code Project"   
"Icon"="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\",0"   
   
[HKEY_CLASSES_ROOT\Directory\Background\shell\vscode\command]   
@="\"D:\\Program Files (x86)\\Microsoft VS Code\\Code.exe\" \"%V\""
```