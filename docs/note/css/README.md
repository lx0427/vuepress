# CSS

## 初始化

### a 标签点击变蓝色

```scss
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

### 去除 ios input 框点击时的灰色背景

```scss
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
```
