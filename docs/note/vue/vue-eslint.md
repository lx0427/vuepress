# eslint

## 自动保存修复报错

1. 下载eslint,vetur
2. `package.json`下载eslint依赖
3. `.eslintrc.js`设置
4. `setting.json`, 如下配置：
  ```json
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ]
  ```