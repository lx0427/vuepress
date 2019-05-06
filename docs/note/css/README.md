# CSS

## 初始化
### a标签点击变蓝色
```scss
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
-webkit-user-select: none;
-moz-user-focus: none;
-moz-user-select: none;
```
### a标签点击背景
```scss
a {
  &:hover,
  &:active,
  &:visited,
  &:link,
  &:focus { // a标签点击背景
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
  background: #FFF; 
  color: #333; 
} 
```
### 去除ios input框点击时的灰色背景
```scss
-webkit-tap-highlight-color:rgba(0,0,0,0);
```