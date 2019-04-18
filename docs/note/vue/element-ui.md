# element-ui

## 表单验证
计算表单项验证,`自定义验证`
```js
data() {
  var validateNerWeight = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('净重不能为空'));
    }
    if (value < 0) {
      return callback(new Error('净重不能为负数'))
    }
    callback()
  };
  return {
    rules: {
      netWeight: [
        { required: true, message: '净重不能为空', trigger: 'change' },
        { validator: validateNerWeight, trigger: 'change' }
      ]
    }
  }
}
```
