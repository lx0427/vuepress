## columns props

> [vxe-column 文档](https://xuliangzhan_admin.gitee.io/vxe-table/#/column/api)

| 属性        | 说明               | 类型   | 可选值                                                                             |
| :---------- | :----------------- | :----- | :--------------------------------------------------------------------------------- |
| type        | 类名               | String | index/seq 序号<br/> selection/checkbox 多选<br/>radio 单选<br/> action 操作栏<br/> |
| fixed       | 固定               | String | left <br/> right                                                                   |
| key/field   | 表格列对应字段 key | String |                                                                                    |
| render/slot | 对应插槽名称       | String | edit 编辑插槽<br/> filter 筛选插槽<br/> header 表头插槽<br/>                       |
| width       | 列宽               | Number |                                                                                    |
| minWidth    | 最小列宽           | Number |                                                                                    |

## table props

| 属性          | 说明                                                                  | 类型     | 默认值                | 示例                         |
| :------------ | :-------------------------------------------------------------------- | :------- | :-------------------- | :--------------------------- |
| className     | 类名                                                                  | String   | ''                    |                              |
| stripe        | 斑马条纹                                                              | Boolean  | true                  |                              |
| columns       | 表格列配置                                                            | Array    | []                    |                              |
| data          | 表格数据                                                              | Array    | []                    |                              |
| maxHeight     | 表格最大高度                                                          | Number   | 0                     |                              |
| loading       | 加载动画                                                              | Boolean  | false                 |                              |
| startIndex    | 开启根据当前页码计算序号                                              | Boolean  | false                 |                              |
| checkReserve  | 是否开启跨页多选(必须传 rowId)                                        | Boolean  | false                 |                              |
| id            | table 的 ID，将作为 localStorage 的 key，必须唯一(常用<文件名>+Table) | String   | ''                    |                              |
| rowId         | 自定义行数据唯一主键的字段名（行数据必须要有唯一主键，默认自动生成）  | String   | 'id'                  |                              |
| highlight     | 是否要高亮当前行                                                      | Boolean  | false                 |                              |
| hasPage       | 是否有分页                                                            | Boolean  | true                  |                              |
| pageSizes     | 每页条数选择数组                                                      | Array    | [10, 15, 20, 50, 100] |                              |
| total         | 表格总条数                                                            | Number   | 0                     |                              |
| resetCurrent  | 表格总是否重置分页器条数，监听值判断是否重置页码                      | Boolean  | false                 |                              |
| cellClassName | 单元格类名                                                            | Function | -                     |                              |
| 参考组件配置  | -                                                                     | -        | -                     | -                            |
| checkMethod   | 复选框是否能够被选择                                                  | Function | -                     | 参考 checkConfig.checkMethod |
| filterConfig  | 筛选配置项                                                            | Object   | {label,value}         |                              |
| editConfig    | 可编辑配置项                                                          | Object   |                       |                              |
| validConfig   | 校验配置项                                                            | Object   |                       |                              |
| editRules     | 校验规则配置项                                                        | Object   |                       |                              |
| sortConfig    | 排序配置项                                                            | Object   | { remote: false }     |                              |
| keepSource    | 保持原始值的状态，被某些功能所依赖，比如编辑状态、还原数据等          | Boolean  | false                 |                              |
| scrollX       | 横向虚拟滚动开关                                                      | Object   | {}                    |                              |
| scrollY       | 纵向虚拟滚动开关                                                      | Object   | {}                    |                              |
| rowClassName  | 行添加样式                                                            | Function | -                     |                              |
| 未使用        | -                                                                     | -        | -                     | -                            |
| sortRemote    | 所有列是否使用服务端排序，如果设置为 true 则不会对数据进行处理        | Boolean  | false                 |                              |
| viewFlag      | 是否查看模式，否则为编辑模式                                          | Boolean  | false                 |                              |
| customFlag    | 是否开启自定义                                                        | Boolean  | true                  |                              |

## table events

| 事件名               | 说明                                                                             | 入参                            |
| :------------------- | :------------------------------------------------------------------------------- | :------------------------------ |
| clearAllCheckbox     |                                                                                  |                                 |
| contextMenu          | 右键表头标题                                                                     | item                            |
| setMenuList          | 设置右键菜单 0 固定左侧 1 固定右侧 2 取消固定                                    | fixed                           |
| setFixed             | 设置固定                                                                         | type                            |
| columnDrop           | 列的拖拽排序                                                                     |                                 |
| showTableColumns     | 计算出最终显示列                                                                 | sortColumns, fixedColumns       |
| editClosedEvent      | 只对 edit-config 配置时有效，单元格编辑状态下被关闭时会触发该事件                | value                           |
| selectionChange      | table 被勾选触发，区分是否跨页多选                                               | value                           |
| handleSelectRow      | 只对 highlightCurrentRow 有效，当手动选中行并且值发生改变时触发的事件            | params                          |
| filterChange         | 当筛选条件发生变化时会触发该事件                                                 | value                           |
| sortChange           | 当排序条件发生变化时会触发该事件                                                 | value                           |
| filterInput          | 只对 filters 有效，列的筛选方法，该方法的返回值用来决定该行是否显示              | { option, row }                 |
| vxeChangePage        | 分页器改变                                                                       | { type, pageSize, currentPage } |
| changePage           | 改变页码                                                                         | value                           |
| changePageSize       | 切换每页条数时的回调                                                             | value                           |
| clearSort            | 清空排序                                                                         |                                 |
| clearCurrentTableRow | 取消单行高亮                                                                     |                                 |
| setCheckboxRow       | 用于 type=checkbox，设置行为选中状态，第二个参数为选中与否                       | rows, value = true              |
| exportCsv            | 导出 excel                                                                       | config, customExcludeColumns    |
| getVxeTable          | 获取 table                                                                       |                                 |
| clearFilter          | 手动清空筛选条件（如果不传 column 则清空所有筛选条件），数据会恢复成未筛选的状态 |                                 |
| clearCheckboxRow     | 用于 type=checkbox，手动清空用户的选择                                           |                                 |
| clearCheckboxReserve | 用于 checkbox-config.reserve，手动清空用户保留选中的行数据                       |                                 |
| seqConfig            | 序号配置                                                                         |                                 |
| customConfig         | 自定义列配置                                                                     |                                 |
| editFlag             | 列是否能排序、改变列宽、显示隐藏 (排除 index,seq,action 等列)                    |                                 |
| canFixed             | 列是否能固定                                                                     |                                 |
| activeRowMethod      | 该方法的返回值用来决定该单元格是否允许编辑                                       |                                 |
| type                 | 列的类型，兼容 iview                                                             |                                 |
| width                | 列宽                                                                             |                                 |
| minWidth             | 列最小宽度                                                                       |                                 |
| showOverflow         | 列是否 tooltip 显示                                                              |                                 |
| resetCurrent         | 查询重置                                                                         | val                             |
