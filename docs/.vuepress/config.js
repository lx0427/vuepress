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
        link: '/javascript/grammar/pattern',
      },
      {
        text: 'Server',
        link: '/server/utils/docker',
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
        link: '/record/hy/develop',
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
          children: [['markdown/', '学习使用']],
        },
      ],
      '/server/': [
        {
          title: 'utils',
          collapsable: false,
          children: [
            ['utils/docker', 'docker'],
            ['utils/ab', 'Apache24'],
            ['utils/kafka', 'kafka'],
          ],
        },
        {
          title: 'egg',
          collapsable: false,
          children: [
            ['egg/egg', 'egg'],
            ['egg/oracle', 'oracle'],
            ['egg/admin-docs', '后台管理系统文档'],
            ['egg/koa', 'koa'],
            ['egg/paypal', 'paypal'],
          ],
        },
        {
          title: 'mongoDB',
          collapsable: false,
          children: [
            ['mongodb/mongodb', 'mongodb'],
            ['mongodb/mongoose', 'mongoose'],
            ['mongodb/replica', 'replica'],
            ['mongodb/RabbitMQ', 'RabbitMQ'],
            ['mongodb/error', 'error'],
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
          title: 'ejs',
          collapsable: false,
          children: [['ejs/snippet', 'snippet']],
        },
        {
          title: 'nodeJs',
          collapsable: false,
          children: [
            ['nodejs/express', 'express'],
            ['nodejs/express-project', 'express-project'],
            ['nodejs/nestjs', 'nestjs'],
            ['nodejs/nestjs-interface', 'nestjs-interface'],
            ['nodejs/docs', 'docs'],
            ['nodejs/router', 'router'],
          ],
        },
      ],
      '/javascript/': [
        {
          title: '语法',
          collapsable: false,
          children: [
            ['grammar/pattern', '正则'],
            ['grammar/es6', 'es6'],
            ['grammar/art-template', 'art-template'],
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
          children: [
            ['func/upload', '上传'],
            ['func/bignumber', 'bignumber'],
          ],
        },
        {
          title: 'Q&A',
          collapsable: true,
          children: [
            ['QA/issue', '开发常见问题'],
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
            ['environment/bat', 'bat'],
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
          title: '恒逸',
          collapsable: false,
          children: [
            ['hy/develop', '前端开发'],
            ['hy/frontend', '项目管理'],
            ['hy/issue', '项目记录'],
            ['hy/wsc-admin', '后台管理系统'],
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
          children: [['other/ppt-font', 'ppt字体']],
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
