# answer
 
#### 移动端适配方案
> flexible 
* 在所有资源加载之前执行这个JS
* 动态改写mate标签
* 给html设置data-dpr属性
* 给html设置font-size样式:rem

```html
<!-- iphone6 -->
<html style="font-size: 75.04px;" data-dpr="2"></html>
<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">
```
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