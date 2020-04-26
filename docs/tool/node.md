# node

## glob

```js
const glob = require('glob')
glob.sync('./src/pages/*/app.vue').map((v) => v.replace(/.\/src\/pages\/(\w+)\/app.vue/, '$1')) // => 匹配页面名称
```
