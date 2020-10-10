# 后台管理系统文档

## LUpload

### 示例

```vue
<l-upload :item="item" v-model="comValue"></l-upload>
```

### 参数

- value: v-model
- item
  - dir: 图片储存目录

## LDict

> 默认请求所有字典数据缓存至 vuex

### 示例

```vue
<l-dict v-model="value" :type="type" :dictCode="dictCode"></l-dict>
```

### 参数

- type: 设置类型
  - select
    - mutil: 多选
  - radio
  - checkbox
- dictCode: 字典编码

## LSelect

### 示例

```vue
<l-select v-model="value" :url="url" :valueKey="valueKey" :labelKey="labelKey"></l-select>
```

### 参数

- url: 接口请求连接 (实时监听 url 的变化请求接口)
- multiple: 多选
- clearable: 可清除
- valueKey: value 对应字段 key, 默认`value`
- labelKey: label 对应字段 key, 默认`label`

## LSearchForm

### 示例

```vue
<l-search-form :columns="columns" :queryLoading="queryLoading" @queryData="queryData"></l-search-form>
```

### 参数

- columns: `Array`
  - item
    - query: 表格展示项，并且是搜索项
    - queryItem: 仅是搜索项
    - span: 占当前行比例，默认 6
- queryLoading: `Boolean` 加载 loading

> 基于 LFormItem

## LTable

### 示例

```vue
<!-- 表格区域 -->
<l-table :columns="columns" :pagination="ipagination" :dataSource="dataSource">
  <!-- 自定义标签展示 -->
  <template #tags="{row}">
    <el-tag
      v-for="(item, index) in row.tags_info"
      :key="index"
      type="primary"
      closable
      >{{ item.tagname }}</el-tag
    >
  </template>
  <!-- 操作按钮 -->
  <template #action="{row}">
    <el-button @click="handleEdit(row)" type="text" size="small">
      {{ $t('table.edit') }}
    </el-button>
    <el-button @click="handleDelete(row._id)" type="text" size="small">
      {{ $t('table.delete') }}
    </el-button>
  </template>
</l-table>
```

> formatter 示例

```js
// 使用关联字段渲染
{
  formatter(row, column, cellValue) {
    return row.game_info[0].gamename
  }
}

// 使用字典项渲染
{
  tagType: 'radio',
  dictCode: 'enable',
  formatter: (row, column, cellValue) => {
    return this.$store.getters.getDictLabel('enable', cellValue)
  }
}
```

### 参数

- dataSource: `Array` 表格数据
- columns: `Array`
  - item
    - scopedSlots: 自定义扩展 slot 名称
    - label: 列名
    - prop: 属性 key
    - type: 原生表格 type(selection/index/expand) + 自定义 type(image)
    - width: 表格列宽
    - formatter
    - queryItem: 不渲染仅 searchFormItem
- pagination: `Object` 分页配置
  - sizeChange
  - currentChange
  - current
  - pageSizes
  - pageSize
  - total

## LFormItem

### 示例

```vue
<el-form-item v-for="(item, i) in columns" :key="i" :label="item.label" :prop="item.prop">
  <l-form-item v-model="modelForm[item.prop]" :item="item"></l-form-item>
</el-form-item>
```

### 参数

- item(columns)
  - label
  - prop
  - upload: `LUpload`
  - dir: `LUpload`
  - dictCode: `LDict`
  - multiple: `LDict select`
  - clearable: `LDict select`
  - tagType:
    - `LDict`: select, radio, checkbox
    - `el-input`: 参考 element 文档
  - url: `LSelect`
  - valueKey: `LSelect`
  - labelKey: `LSelect`
- value

> 依赖组件

- LUpload
- LDict
- LSelect
- el-input (支持组件 type)
