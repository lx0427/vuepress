# vue-router

## 设置

### 根据路由设置title
```
routes:[
  {
    path: '/record/Returngoods',
    name: 'Returngoods',
    component: Returngoods,
    meta: {
      title:'指定title'
    }
  }
]

router.beforeEach((to, from, next)
  document.title = to.meta.title
})
```


## 路由切块
不切块
```js
import welfareDetail from './welfare-detail.vue'

export default [{
  path: '/welfareDetail',
  name: 'welfareDetail',
  component: welfareDetail,
  children: []
}]
```
切块
```js
export default [{
  path: '/welfareDetail',
  name: 'welfareDetail',
  component: () => import('./welfare-detail.vue'),
  children: []
}]
```