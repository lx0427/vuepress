# 后台管理系统文档

## LSearchForm

|     props      |        type         |          desc           |
| :------------: | :-----------------: | :---------------------: |
|  queryLoading  |       Boolean       |         loading         |
|    columns     | Array[item(Object)] | 表单数组,引用 LFormItem |
|   item.query   |                     |                         |
| item.onlyQuery |                     |                         |
|   item.label   |                     |   el-form-item[label]   |
|   item.prop    |                     |   el-form-item[prop]    |

```html
<l-search-form :columns="columns" :queryLoading="queryLoading" @queryData="queryData"></l-search-form>
```

### LFormItem

| props |             type              |       desc       |
| :---: | :---------------------------: | :--------------: |
| value | [String, Number, Array, Date] |     v-model      |
| item  |            Object             | 参考如下组件参数 |

### LUpload

|    props    |      type       |   desc   |
| :---------: | :-------------: | :------: |
|    value    | [String, Array] | v-model  |
|    item     |     Object      |          |
|  item.dir   |     String      | 上传目录 |
| item.upload |     String      |  images  |

### LDict

|   props   |          type           |              desc               |
| :-------: | :---------------------: | :-----------------------------: |
|   value   | [String, Number, Array] |             v-model             |
|   type    |   String, 默认 select   | 可选值：select, radio, checkbox |
| dictCode  |         String          |       全局通用字典项 key        |
| multiple  |   Boolean, 默认 false   |                                 |
| clearable |   Boolean, 默认 true    |                                 |

### LSearchSelect

|   props    |          type           |   desc   |
| :--------: | :---------------------: | :------: |
|   value    | [String, Number, Array] | v-model  |
|    url     |    String, GET 请求     | required |
|  valueKey  |   String, 默认 value    |          |
|  labelKey  |   String, 默认 label    |          |
| clearable  |   Boolean, 默认 true    |          |
| filterable |   Boolean, 默认 true    |          |
|   change   |        Function         |          |

### el-date-picker

|    props    |      type       |       desc        |
| :---------: | :-------------: | :---------------: |
|    value    |                 | 参考 element 组件 |
|    type     |      date       |                   |
| valueFormat | 默认 yyyy-MM-dd |                   |

### el-input

|     props     |                type                 |               desc               |
| :-----------: | :---------------------------------: | :------------------------------: |
|     value     |                                     |             v-model              |
|     type      | text/textarea/radio/number/password |         input 自带 type          |
|   maxlength   |                                     | 字段长度限制,对 text/number 有效 |
| showWordLimit |                                     |   展示字段限制，maxlength 必须   |

## operation

```html
<div class="table_operation">
  <el-button type="primary" @click="handleAdd">{{ $t('table.add') }}</el-button>
</div>
```

## LTable

|   props    |      key      |           type           |            desc            |
| :--------: | :-----------: | :----------------------: | :------------------------: |
| dataSource |               |          Array           |       el-table[data]       |
|  columns   |               |       Array[item]        |    el-table-column 配置    |
|            |  scopedSlots  |           slot           |       自定义字段展示       |
|            |     type      |          image           | el[selection/index/expand] |
| pagination |               |          Object          |       el-pagination        |
|            |  currentPage  |            1             |                            |
|            |   pageSize    |            10            |                            |
|            |   pageSizes   |    [10, 20, 50, 100]     |                            |
|            |  sizeChange   |  this.handleSizeChange   |                            |
|            | currentChange | this.handleCurrentChange |                            |
|            |     total     |            0             |                            |

```html
<l-table :dataSource="dataSource" :columns="columns" :pagination="ipagination">
  <template #tags="{ row }">
    <el-tag v-for="(tag, i) in row.tags" :key="i">{{ tag }}</el-tag>
  </template>
  <template #action="{ row }">
    <el-button @click="handleEdit(row)" type="text" size="small">{{ $t('table.edit') }}</el-button>
    <el-divider direction="vertical"></el-divider>
    <el-button @click="handleDelete(row._id)" type="text" size="small">{{ $t('table.delete') }}</el-button>
  </template>
</l-table>
```

## Model

```html
<game-model ref="modelForm" @ok="loadData"></game-model>
```

## EditTableMixin

## TableListMixin

### v-has

> 使用授权码：后台配置（表名:操作）

```html
<el-button v-has="'admin_user:edit'" type="text" size="small">{{ $t('table.edit') }}</el-button>
```

```js
// TableListMixin.js
computed: {
  permissions() {
    return this.$store.getters.getBtnPermissions(this.$route.path)
  }
}
```

```js
// directive.js
export const hasPermission = {
  install(Vue, options) {
    console.log(options)
    Vue.directive('has', {
      inserted: (el, binding, vnode) => {
        const temp = vnode.context.permissions.find((v) => v.authcode === binding.value)
        if (!temp) {
          el.parentNode.removeChild(el)
        }
      },
    })
  },
}
```

```js
// main.js
import { hasPermission } from '@/plugins/directive'
Vue.use(hasPermission)
```

### v-preview

> id：绑定是为了区分不同的 v-preview

```html
<el-image v-preview :id="row._id"></el-image>
```

```js
// directive.js
export const preview = {
  install(Vue, options) {
    Vue.directive('preview', {
      inserted(el) {
        el.addEventListener('click', function(e) {
          e.stopPropagation()
          console.log(el.childNodes, 'preview')
          let img = {}
          for (let i = 0; i < el.childNodes.length; i++) {
            const v = el.childNodes[i]
            if (v.nodeName === 'IMG') {
              img = v // 获取当前的图片链接
              break
            }
          }
          let _dom = document.querySelector(`#vpreview_${img.id}`)
          if (!_dom) {
            _dom = document.createElement('div')
            _dom.innerHTML = `<div id="vpreview_${img.id}" class="el-dialog__wrapper" style="z-index: 2003;">
              <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh;">
                <div class="el-dialog__header">
                  <span class="el-dialog__title"></span>
                  <button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button>
                </div>
                <div class="el-dialog__body"><img width="100%" src="${img.src}" alt=""></div>
              </div>
              </div>
            <div class="v-modal" tabindex="0" style="z-index: 2002;"></div>`
            document.body.appendChild(_dom)
            _dom.addEventListener('click', function(e) {
              e.stopPropagation()
              this.style.display = 'none'
            })
          } else {
            const src = document.querySelector(`#vpreview_${img.id} img`).src
            if (src !== img.src) {
              // 修改了图片，但是页面没有刷新
              document.querySelector(`#vpreview_${img.id} img`).src = img.src
            }
            _dom.parentNode.style.display = 'block'
          }
        })
      },
    })
  },
}
```

```js
// main.js
import { preview } from '@/plugins/directive'
Vue.use(preview)
```
