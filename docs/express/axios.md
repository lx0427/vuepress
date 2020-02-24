# [axios](https://www.kancloud.cn/yunye/axios/234845)

```js
import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  // 请求根路径，外部使用 http.default.baseURL
  baseURL: 'http://localhost:3000/admin/api',
})

// 请求拦截
http.interceptors.request.use(
  config => {
    if (localStorage.token) {
      // 请求头中添加参数
      // Authorization 对应接口中 req.headers.authorization
      config.headers.Authorization = 'bearer ' + localStorage.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // 错误数据存于error.response
    // console.log(error.response)

    if (error.response.data.message) {
      // 使用Vue原型上的提示方法
      Vue.prototype.$message.error(error.response.data.message)

      if (error.response.status === 401) {
        // 模块化,引入路由才能实现跳转
        router.push('/login')
      }
    }
    return Promise.reject(error)
  }
)
export default http
```
