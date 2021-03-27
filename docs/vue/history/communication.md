# 组件

## 父到子 props

`parent`

```html
<l-province :value="val"></l-province>
```

`child`

- 子组件不能修改父组件传值

```vue
<template>
  <div>{{ value }}</div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: false
    }
  }
}
</script>
```

## 子到父 `$emit`

`parent`

```vue
<template>
  <l-province @set-value="setValue"></l-province>
</template>
<script>
export default {
  methods: {
    setValue(val) {
      console.log(val, '子组件传值')
    }
  }
}
</script>
```

`child`

- 使用 `$emit` 触发当前实例上的事件,附加参数都会传给监听器回调。

```vue
<template>
  <input @change="change" />
</template>
<script>
export default {
  methods: {
    change(val) {
      this.$emit('set-value', val)
    }
  }
}
</script>
```

## 兄弟组件 eventBus

`main.js`

```js
import Vue from 'vue'
import App from './App.vue'
new Vue({
  data: {
    eventBus: new Vue()
  },
  render: (h) => h(App)
}).$mount('#app')
```

`com1`

```vue
<template>
  <input @change="change" />
</template>
<script>
export default {
  name: 'com1',
  methods: {
    change(val) {
      // 触发事件
      this.$root.eventBus.$emit('to-com2', val)
    }
  }
}
</script>
```

`com2`

```vue
<template>
  <input @change="change" />
</template>
<script>
export default {
  name: 'com2',
  methods: {
    loadData(val) {}
  },
  created() {
    // 监听事件，执行回调
    this.$root.eventBus.$on('to-com2', (val) => {
      this.innerValue = ''
      this.loadData(val)
    })
  }
}
</script>
```

## vue-bus

[使用文档](https://www.npmjs.com/package/vue-bus)

源码如下：

```js
function VueBus(Vue) {
  const bus = new Vue()

  Object.defineProperties(bus, {
    on: {
      get() {
        return this.$on.bind(this)
      }
    },
    once: {
      get() {
        return this.$once.bind(this)
      }
    },
    off: {
      get() {
        return this.$off.bind(this)
      }
    },
    emit: {
      get() {
        return this.$emit.bind(this)
      }
    }
  })

  Object.defineProperty(Vue, 'bus', {
    get() {
      return bus
    }
  })

  Object.defineProperty(Vue.prototype, '$bus', {
    get() {
      return bus
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBus)
}

export default VueBus
```

## 父子双向绑定

```html
<form-input v-model="userName" label="姓名"></form-input>
```

`form-input.vue`

```html
<div class="form-item">
  <label class="form-label">{{label}}</label>
  <input class="form-input" :placeholder="'请输入'+label" type="text" v-model="currentValue" />
</div>
```

```js
export default {
  props: ['value', 'label'],
  computed: {
    currentValue: {
      get: function() {
        return this.value
      },
      set: function(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
```
