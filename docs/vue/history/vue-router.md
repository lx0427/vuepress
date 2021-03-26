# vue-router

## vue插件

- 要求实现install方法
- install传参：
    - vue：使用Vue.use时传入Vue构造函数

## mixin

> 利用全局混入注入插件配置<br/>
> beforeCreate: 做插件初始化

## 实现步骤

### 初始化类插件

```js
let Vue
class VueRouer {}

// 使用Vue.use时传入Vue构造函数
VueRouer.install = function(_Vue) {
  Vue = _Vue
}

export default VueRouer
```
### 挂载$router

```js
VueRouer.install = function(_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      // 上下文this是组件实例
      Vue.prototype.$router = this.$options.router
    },
  })
}
```

### 注册全局组件

```js
VueRouer.install = function(_Vue) {
  Vue = _Vue

  Vue.component('router-link', {})
  Vue.component('router-view', {})
}
```

### render函数

> template or render function not defined<br/>
> 实现目标：`<router-link to="/about">home</router-link>`


```js
VueRouer.install = function(_Vue) {
  Vue = _Vue

  Vue.component('router-link', {
    // runtime-only no template compiler
    // template: '<a>link</a>',
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    render(h) {
      // <router-link to="/about">home</router-link>
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    },
  })
}
```

### VueRouter

```js
class VueRouer {
  constructor(options) {
    // 1.记录配置
    this.$options = options
    this.current = '/'
    // 2.监听路由变化 *注意this指向问题*
    window.addEventListener('hashchange', this.onHashchange.bind(this))
  }

  onHashchange() {
    this.current = window.location.hash.slice(1)
  }
}
```

### router-view

```js
VueRouer.install = function(_Vue) {
  Vue = _Vue

  Vue.component('router-view', {
    render(h) {
      let Component = null
      let route = this.$router.$options.routes.find(
        route => route.path === this.$router.current
      )
      if (route) {
        Component = route.component
      }
      return h(Component)
    },
  })
}
```

### Vue.util.defineReactive

> 设置相应式数据

```js
class VueRouer {
  constructor(options) {
    // 1.记录配置
    this.$options = options
    // 3.需要响应式current
    let initial = window.location.hash.slice(1) || '/'
    Vue.util.defineReactive(this, 'current', initial)
    // 2.监听路由变化 *注意this指向问题*
    window.addEventListener('hashchange', this.onHashchange.bind(this))
  }

  onHashchange() {
    this.current = window.location.hash.slice(1)
  }
}
```





