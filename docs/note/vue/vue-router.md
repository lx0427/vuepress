# vue-router

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