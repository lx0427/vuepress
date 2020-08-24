module.exports = {
  title: 'Litter Flying Bears', // 网站标题
  description: 'Litter Flying Bears',
  base: '/vuepress/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    sidebarDepth: 2,
    activeHeaderLinks: true,
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: '笔记',
        link: '/note/react/',
      },
      {
        text: 'Javascript',
        link: '/javascript/pattern/method',
      },
      {
        text: 'Server',
        link: '/server/express',
      },
      {
        text: '算法学习',
        link: '/alg/',
      },
      {
        text: 'tool',
        link: '/tool/environment/git',
      },
      {
        text: '常用记录',
        link: '/record/wsc/develop',
      },
    ],
    sidebar: {
      '/note/': [
        {
          title: 'REACT',
          collapsable: false,
          children: [
            ['react/', '开始学习'],
            ['react/antd', 'Ant Design'],
            ['react/record', '记录'],
          ],
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            ['css/', 'CSS'],
            ['css/selector', 'last-child & last-of-type'],
            ['css/scroll-penetrate', '滚动穿透'],
          ],
        },
        {
          title: 'MARKDOWN',
          collapsable: false,
          children: [
            ['markdown/', '学习使用'],
            ['markdown/difficulty', '难点'],
          ],
        },
      ],
      '/server/': [
        {
          title: 'ejs',
          collapsable: false,
          children: [['ejs/snippet', 'snippet']],
        },
        {
          title: 'egg',
          collapsable: false,
          children: [
            ['egg/egg', 'egg'],
            ['egg/admin-docs', '后台管理系统文档'],
          ],
        },
        {
          title: 'Koa',
          collapsable: false,
          children: [['koa', 'koa']],
        },
        {
          title: 'Express',
          collapsable: false,
          children: [
            ['express', 'express'],
            ['express-project', 'express-project'],
          ],
        },
        {
          title: 'NestJs',
          collapsable: false,
          children: [
            ['nestjs', 'nestjs'],
            ['nestjs-interface', 'nestjs-interface'],
          ],
        },
        {
          title: 'mongoDB',
          collapsable: false,
          children: [
            ['mongodb/mongodb', 'mongodb'],
            ['mongodb/mongoose', 'mongoose'],
            ['mongodb/replica', 'replica'],
            ['mongodb/redis', 'redis'],
          ],
        },
        {
          title: 'Mysql',
          collapsable: false,
          children: [
            ['mysql/mysql', 'mysql'],
            ['mysql/search', 'search'],
            ['mysql/practice', 'practice'],
            ['mysql/powerdesigner', 'powerdesigner'],
          ],
        },
        {
          title: 'nodeJs',
          collapsable: false,
          children: [
            ['nodejs/docs', 'docs'],
            ['nodejs/router', 'router'],
          ],
        },
        {
          title: 'test',
          collapsable: false,
          children: [['test/ab', 'Apache24']],
        },
      ],
      '/javascript/': [
        {
          title: 'ES6',
          collapsable: false,
          children: [['ES6/grammar', '语法']],
        },
        {
          title: 'pattern',
          collapsable: false,
          children: [
            ['pattern/grammar', '语法'],
            ['pattern/method', '方法'],
          ],
        },
        {
          title: 'vue',
          collapsable: false,
          children: [
            ['vue/create', 'create'],
            ['vue/vue-cli', 'vue-cli'],
            ['vue/component', 'component'],
            ['vue/router', 'router'],
            ['vue/axios', 'axios'],
            ['vue/mixins', 'mixins'],
            ['vue/typescript-grammar', 'typescript-grammar'],
            ['vue/vue3-ts', 'vue3-ts'],
            ['vue/element-ui', 'element-ui'],
            ['vue/nuxt-vuetify', 'nuxt-vuetify'],
          ],
        },
        {
          title: '功能',
          collapsable: false,
          children: [['func/upload', '上传']],
        },
        {
          title: 'Q&A',
          collapsable: true,
          children: [
            ['QA/question', '问题'],
            ['QA/answer', '解答'],
            ['QA/compatible', '兼容问题'],
            ['QA/brower', '浏览器'],
          ],
        },
      ],
      '/alg/': [
        {
          title: '开始',
          collapsable: false,
          children: [['', '算法学习']],
        },
      ],
      '/tool/': [
        {
          title: 'environment',
          collapsable: false,
          children: [
            ['environment/git', 'git'],
            ['environment/node', 'node'],
            ['environment/nvm', 'nvm'],
            ['environment/mddir', 'mddir'],
            ['environment/software', 'software'],
          ],
        },
        {
          title: 'front',
          collapsable: false,
          children: [
            ['front/fork', 'fork'],
            ['front/hexo', 'hexo'],
            ['front/vuepress', 'vuepress'],
            ['front/webpack', 'webpack'],
          ],
        },
        {
          title: 'vscode',
          collapsable: false,
          children: [
            ['vscode/vscode-template', 'vscode-template'],
            ['vscode/vscode', 'vscode'],
          ],
        },
      ],
      '/record/': [
        {
          title: '微商城',
          collapsable: false,
          children: [
            ['wsc/develop', '开发常用'],
            ['wsc/art-template', 'art-template'],
            ['wsc/components', '自定义组件'],
            ['wsc/issue', '常见问题'],
            ['wsc/rules', '规则'],
            ['wsc/other', '其他'],
          ],
        },
        {
          title: '恒逸',
          collapsable: false,
          children: [
            ['hy/loop', '新闭环'],
            ['hy/closed-loop', '老闭环'],
            ['hy/cangcu', '仓储管理'],
            ['hy/yuanquwuliu', '园区物流'],
          ],
        },
        {
          title: 'wb',
          collapsable: false,
          children: [['wb/game-mall', '游戏商城']],
        },
        {
          title: 'fdc',
          collapsable: false,
          children: [
            ['fdc/fdc-record', '亿房'],
            ['fdc/static-engineering', '工程化项目（静态页面）'],
          ],
        },
        {
          title: 'other',
          collapsable: false,
          children: [
            ['other/browser', '浏览器'],
            ['other/ppt-font', 'ppt字体'],
          ],
        },
      ],
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    [
      '@vuepress/search',
      {
        // 搜索插件，不能搜索代码块内容
        searchMaxSuggestions: 10,
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
}
