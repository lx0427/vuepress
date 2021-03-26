# CSS

## issue

### 盒子模型

```css
box-sizing: border-box; // width + margin
box-sizing: border-content; // width + padding + border + margin
```

### reset.css 与 normalize.css

- reset 重置元素样式达到统一
- normalize 模块化
- normalize 不会出现大段继承
- normalize 保留许多浏览器默认样式，尽可能让样式与现代标准相符合

### a 标签点击变蓝色

```css
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
-webkit-user-select: none;
-moz-user-focus: none;
-moz-user-select: none;
```

### a 标签点击背景

```scss
a {
  &:hover,
  &:active,
  &:visited,
  &:link,
  &:focus {
    // a标签点击背景
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background: none;
    text-decoration: none;
  }
}
```

### 改变选中内容的背景

```scss
::selection {
  background: #fff;
  color: #333;
}
```

## 选择器

### :last-child & :last-of-type

**:last-child**

- `:last-child`: 不能有干扰元素

**:last-of-type**

- `:last-of-type`: 可以有干扰元素
- `:last-of-type`: 只作用于标签
- `div.box:last-of-type`: 最后一个`div`且含有类名`box`
