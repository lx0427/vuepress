# Ant Design

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
    },
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

## 问题

### 调用的方法不存在

- 使用 this.method 调用
- 检查`this指向`是否正确

### 表格错位

1. 每列设置宽度 => 计算总宽度
2. 表格设置总宽度
3. 选择其中`一列取消设置宽度值` => 实际总宽 - 其余总宽

### 'getFieldDecorator' of undefined

- getFieldDecorator 是 props 上的方法，没有传递下来
- 方法：`{...this.props}`

### `CalendarMixinWrapper`, expected `object`

- DatePicker 的初始值：Object
- 方法：`initialValue: null`

### 弹框组件初始值不变更

- 组件的 componetDidMount 未触发
- 组件关闭时销毁：`destroyOnClose={true}`
