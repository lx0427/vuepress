## 滚动穿透

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
