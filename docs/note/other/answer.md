# answer

#### 清除浮动
```css
.clearFloat{
  zoom:1; // 兼容ie6
}
.clearFloat::after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
}
```
#### 盒子模型
```css
box-sizing:border-box; // width + margin
box-sizing:border-content; // width + padding + border + margin
```