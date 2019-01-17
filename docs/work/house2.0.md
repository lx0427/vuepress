# m端重构

## 复用代码

### scss
```
@import '../../include/header/header.scss'
```

### 引用js
```html
<!-- build:js static/js/index.js -->
<script src="/static/js/index.js"></script>
<script src="/include/header/header.js"></script>
<!-- endbuild -->
```