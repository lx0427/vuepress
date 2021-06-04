# vxe-table

## $refs.xTable events

| 方法                    | 描述             | 入参                                                          | 返回值  |
| :---------------------- | :--------------- | :------------------------------------------------------------ | :------ |
| getColumnByField        | 获取列数据       | key                                                           | []      |
| updateData              | 手动更新表单数据 |                                                               |         |
| 普通行                  | -                | -                                                             | -       |
| setCurrentRow           | 设置第二行选中   | tableData[1]                                                  |         |
| clearCurrentRow         | 取消选中         |                                                               |         |
| getCurrentRecord        | 获取高亮行数据   |                                                               | row     |
| 单选行                  | -                | -                                                             | -       |
| setRadioRow             | 设置选中         | tableData[1]                                                  |         |
| clearRadioRow           | 取消选中         |                                                               |         |
| getRadioRecord          | 获取选中数据     |                                                               | row     |
| 多选行                  | -                | -                                                             | -       |
| toggleCheckboxRow       | 切换选中         | tableData[1]                                                  |         |
| setCheckboxRow          | 设置选中         | [tableData[2], tableData[3]]<br/>true                         |         |
| setAllCheckboxRow       | 设置所有选中     | true                                                          |         |
| clearCheckboxRow        | 清除所有选中     |                                                               |         |
| getCheckboxRecords      | 获取选中数据     |                                                               | [row]   |
| isAllCheckboxChecked    | 是否全选         |                                                               | Boolean |
| isCheckboxIndeterminate | 是否半选?        |                                                               | Boolean |
| 排序                    | -                | -                                                             | -       |
| sort                    | 设置排序         | key<br/>asc/desc                                              |         |
| clearSort               | 清除排序         |                                                               |         |
| 过滤                    | -                | -                                                             | -       |
| setFilter               | 设置排序         | key<br/>asc/desc                                              |         |
| clearSort               | 清除排序         | getColumnByField(return) 清除指定列过滤 / 无参数 清除所有条件 |         |

## $XModal events

| 方法  | 描述 | 入参              | 返回值 |
| :---- | :--- | :---------------- | :----- |
| alert | 弹框 | String 显示的内容 |        |

## formats mixin

```js
// 自定义全局的格式化处理函数
VXETable.formats.mixin({
  // 格式化性别
  formatSex({ cellValue }) {
    return cellValue ? (cellValue === "1" ? "男" : "女") : "";
  },
  // 格式化下拉选项
  formatSelect({ cellValue }, list) {
    const item = list.find((item) => item.value === cellValue);
    return item ? item.label : "";
  },
  // 格式化日期，默认 yyyy-MM-dd HH:mm:ss
  formatDate({ cellValue }, format) {
    return XEUtils.toDateString(cellValue, format || "yyyy-MM-dd HH:mm:ss");
  },
  // 四舍五入金额，每隔3位逗号分隔，默认2位数
  formatAmount({ cellValue }, digits = 2) {
    return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits });
  },
  // 格式化银行卡，默认每4位空格隔开
  formatBankcard({ cellValue }) {
    return XEUtils.commafy(XEUtils.toValueString(cellValue), {
      spaceNumber: 4,
      separator: " ",
    });
  },
  // 四舍五入,默认两位数
  formatFixedNumber({ cellValue }, digits = 2) {
    return XEUtils.toFixed(XEUtils.round(cellValue, digits), digits);
  },
  // 向下舍入,默认两位数
  formatCutNumber({ cellValue }, digits = 2) {
    return XEUtils.toFixed(XEUtils.floor(cellValue, digits), digits);
  },
});
```
