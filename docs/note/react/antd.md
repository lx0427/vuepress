# Ant Design

## 问题

### 调用的方法不存在
* 使用this.method调用
* 检查`this指向`是否正确

### 表格错位
1. 每列设置宽度 => 计算总宽度
2. 表格设置总宽度
3. 选择其中`一列取消设置宽度值` => 实际总宽 - 其余总宽

### 'getFieldDecorator' of undefined
* getFieldDecorator是props上的方法，没有传递下来
* 方法：`{...this.props}`

### `CalendarMixinWrapper`, expected `object`
* DatePicker的初始值：Object
* 方法：`initialValue: null` 

### 弹框组件初始值不变更
* 组件的componetDidMount未触发
* 组件关闭时销毁：`destroyOnClose={true}`