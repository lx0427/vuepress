# vscode

## eslint

### 箭头函数报错
* `babel-eslint`

## 问题

### 设置中(自动保存添加分号)
```json
"vetur.format.defaultFormatter.js": "vscode-typescript"
```

### 函数前空格问题
```json
"javascript.format.insertSpaceBeforeFunctionParenthesis": true
```

### 自动保存修复报错
1. 下载eslint,vetur
2. `package.json`下载eslint依赖
3. `.eslintrc.js`设置
4. `setting.json`, 如下配置：
```json
"editor.formatOnSave"：false,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
        "language": "vue",
        "autoFix": true
    }
]
```
