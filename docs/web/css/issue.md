# issue

## mobile

### 移动端适配方案

> flexible

- 在所有资源加载之前执行这个 JS
- 动态改写 mate 标签
- 给 html 设置 data-dpr 属性
- 给 html 设置 font-size 样式:rem

```html
<!-- iphone6 -->
<html style="font-size: 75.04px;" data-dpr="2"></html>
<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no" />
```

### 布局方式

- PC:静态布局，居中布局; 统一使用 px
- 流式布局: 大小变化，布局不变; vw,vh
- 自适应布局: 布局大小不变; `屏幕太小影响观看体验`
- 响应式布局: 位置大小都会变，`多套设计方案，工作量巨大`
- 弹性布局: rem/em

### 清除浮动

```css
.clearFloat {
  zoom: 1; // 兼容ie6
}
.clearFloat::after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
}
```

### 滚动穿透

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>滚动穿透</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      html,
      body,
      article {
        /* 1. 从根元素开始设置高度100% */
        width: 100%;
        height: 100%;
      }

      article {
        /* 2. 里面的盒子设置滚动属性 */
        overflow: auto;
      }
    </style>
  </head>

  <body>
    <article></article>
  </body>
</html>
```

### 去除 ios input 框点击时的灰色背景

```scss
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
```
