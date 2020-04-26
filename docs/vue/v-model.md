# v-model

## 使用

```html
<form-input v-model="userName" label="姓名"></form-input>
```

## 组件

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
