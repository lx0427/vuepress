# vuepress

## 文档结构
```md
|-- .gitignore
|-- package.json
|-- yarn.lock
|-- docs
    |-- README.md
    |-- .vuepress
    |   |-- config.js
    |-- note
        |-- sidebar
        |   |-- one.md
        |   |-- README.md
        |   |-- two.md
        |-- type2
            |-- three.md
```

## `package.json`
```json
{
  "name": "vuepress",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  },
  "license": "MIT",
  "devDependencies": {
    "@vuepress/plugin-active-header-links": "^1.0.0-alpha.0",
    "@vuepress/plugin-back-to-top": "^1.0.0-alpha.0",
    "@vuepress/plugin-search": "^1.0.0-alpha.0"
  }
}
```

## 配置文件
`docs/.vuepress/config.js`
```js
module.exports = {
  title: 'Litter Flying Bears', // 网站标题
  description: 'Litter Flying Bears',
  themeConfig: {
    nav: [{ // 顶部右侧导航栏
        text: '笔记',
        link: '/note/sidebar/'
      }
    ],
    sidebar: [ // 侧边栏
      {
        title: 'sidebar',
        collapsable: false // 是否可以折叠
      },
      ['/note/sidebar/', 'vuepress'], 
      ['/note/sidebar/one', 'one'],
      ['/note/sidebar/two', 'two'], // 第一项为link, 第二项为标题
      {
        title: '分类2',
        collapsable: false
      },
      ['/note/type2/three', 'three'],
    ],
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    ['@vuepress/search', { // 搜索插件，不能搜索代码块内容
      searchMaxSuggestions: 10
    }]
  ]
}
```

## 网站首页
`docs/README.md`
```md
---
home: true
tagline: 读万卷书，不如行万里路！
actionText: 查看笔记 →
actionLink: /note/sidebar/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行
footer: MIT Licensed | Copyright © 2018-present qfstudy
---
```

## 启动命令
```sh
yarn dev
```