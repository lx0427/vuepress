# [mixin](https://cn.vuejs.org/v2/guide/mixins.html)

## 局部注入

`uploadMixin.js`

```js
export default {
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/uploads'
    },
  },
  methods: {
    getHeaders() {
      return { Authorization: 'bearer ' + localStorage.token }
    },
  },
}
```

```vue
<template>
  <div>
    <el-upload
      class="avatar-uploader"
      :action="uploadUrl"
      :headers="getHeaders()"
      :show-file-list="false"
      :on-success="res => (imgUrl = res.url)"
    >
      <img v-if="imgUrl" :src="imgUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import uploadMixin from 'uploadMixin.js'
export default {
  mixins: [uploadMixin],
  data() {
    return {
      imgUrl: '',
    }
  },
}
</script>
```

## 全局注入

`main.js`

```js
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http

// 全区混入
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/uploads'
    },
  },
  methods: {
    getHeaders() {
      return { Authorization: 'bearer ' + localStorage.token }
    },
  },
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```
