# [vue-router](https://router.vuejs.org/zh/installation.html)

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
// 内容管理
import ItemEdit from '../views/content/ItemEdit.vue'
import ItemList from '../views/content/ItemList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    // 公共访问界面，无需验证
    meta: { isPublic: true },
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/items/create', component: ItemEdit },
      { path: '/items/edit/:id', component: ItemEdit, props: true },
      { path: '/items/list', component: ItemList },
    ],
  },
]

const router = new VueRouter({
  routes,
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // to,from => 路由对象
  if (!to.meta.isPublic && !localStorage.token) {
    router.push('/login')
  }
  next()
})

export default router
```
