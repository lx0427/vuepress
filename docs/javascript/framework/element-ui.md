# element-ui

## 表单验证

计算表单项验证,`自定义验证`

- 每一种情况都要有对应的`callback`
- 联动的自定义，使用`this.$refs.ruleForm.validateField('xxx')`，避免重复触发

```js
data() {
  var validateNerWeight = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('净重不能为空'));
    }
    if (value < 0) {
      return callback(new Error('净重不能为负数'))
    }
    callback() // 符合输入条件，一定要调用callback(),表示调用通过
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
