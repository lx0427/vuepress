# 记录

## antd

组合输入框

```jsx
const InputGroup = Input.Group
formInput = (
  <InputGroup compact>
    <InputNumber style={{ width: 132 }} disabled={item.disabled} placeholder={item.placeholder} />
    <Input style={{ width: 48 }} disabled defaultValue="KG" />
  </InputGroup>
)
```

## 表单

```jsx
{
  getFieldDecorator(item.model, {
    initialValue: item.type === 'date' ? null : '', // date => 初始值为object
    rules: [{ required: item.isRequired, message: '必填项' }],
    getValueFromEvent(e) {
      // select => e(string,Object/labelInValue)
      // DatePicker => e(moment)
      // number => e(string)
      // input => e.target.value
      // textarea => e.target.value
    }
  })(formInput)
}
```

## 弹框

### 初始化数据报错

- 控制获取数据与显示弹框顺序
- `{...this.props}` => `const { getFieldDecorator } = this.props.form`

```jsx
{
  this.state.modalVisible ? (
    <RawMaterialForm formData={this.state.poundInfo} pullDownInfo={this.state.pullDownInfo} {...this.props} />
  ) : null
}
```
