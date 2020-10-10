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
        text: 'CSS',
        link: '/css/issue',
      },
      {
        text: 'Javascript',
        link: '/javascript/issue',
      },
      {
        text: 'Server',
        link: '/server/utils/docker',
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
      '/css/': [
        {
          title: '开始',
          collapsable: false,
          children: [
            ['brower', '浏览器'],
            ['issue', 'issue'],
            ['style', 'style'],
          ],
        },
      ],
      '/javascript/': [
        {
          title: '框架',
          collapsable: false,
          children: [
            ['framework/antd', 'ant design'],
            ['framework/element-ui', 'element ui'],
            ['framework/react', 'react'],
            ['issue', 'issue'],
            ['question', 'question'],
          ],
        },
        {
          title: '语法',
          collapsable: false,
          children: [
            ['grammar/pattern', '正则'],
            ['grammar/es6', 'es6'],
            ['grammar/markdown', 'markdown'],
            ['grammar/typescript', 'typescript'],
            ['grammar/alg', 'alg'],
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
            ['vue/vue3-ts', 'vue3-ts'],
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
            ['hy/record', '项目记录'],
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
