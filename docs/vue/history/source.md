# 源码学习

## 前奏

### 克隆&依赖

```bash
# 克隆源码
git clone https://github.com.cnpmjs.org/vuejs/vue.git

# 全局安装打包工具
npm i rollup -g

# 安装依赖
cd vue
npm i
```

### 打包命令添加sourcemap

```json
{
    script:{
        "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
    }
}
```

### 启动

```bash
npm run dev
# dist目录中的产出的vue.js会变化
# 会多产出一个vue.js.map
```

### example测试页面

模板页面

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Vue.js github commits example</title>
    <!-- Delete ".min" for console warnings in development -->
    <script src="../../dist/vue.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      new Vue({});
    </script>
  </body>
</html>
```

### 调试技巧

- 断点 breakpoints 
- 步进器
- 调用栈 call stack
- 源文件地址：右键 - Reveal in sidebar

## 名词讲解

- runtime: 运行时，不包含编译器 ?
- common: cjs规范，用于webpack1
- esm: ES模块，用于webpack2+
- umd: universal module definition，兼容cjs和amd,用于浏览器

### AMD

