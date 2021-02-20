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
        text: 'database',
        link: '/database/mongodb/mongoose',
      },
      {
        text: 'environment',
        link: '/environment/server/docker',
      },
      {
        text: 'grammar',
        link: '/grammar/linux',
      },
      {
        text: 'javascript',
        link: '/javascript/issue',
      },
      {
        text: 'node',
        link: '/node/egg/egg',
      },
      {
        text: '常用记录',
        link: '/record/hy/develop',
      },
    ],
    sidebar: {
      '/css/': [
        {
          title: 'CSS',
          collapsable: false,
          children: [
            ['issue', 'issue'],
            ['style', 'style'],
            ['brower', '浏览器'],
          ],
        },
      ],
      '/database/': [
        {
          title: 'mongodb',
          collapsable: false,
          children: [
            ['mongodb/mongodb', 'mongodb'],
            ['mongodb/mongoose', 'mongoose'],
            ['mongodb/replica', 'replica'],
          ],
        },
        {
          title: 'mysql',
          collapsable: false,
          children: [
            ['mysql/mysql', 'mysql'],
            ['mysql/practice', 'practice'],
            ['mysql/search', 'search'],
          ],
        },
        {
          title: 'oracle',
          collapsable: false,
          children: [['oracle/oracle', 'oracle']],
        },
      ],
      '/environment/': [
        {
          title: 'tool',
          collapsable: false,
          children: [
            ['tool/git', 'git'],
            ['tool/node', 'node'],
            ['tool/npm', 'npm'],
            ['tool/nginx', 'nginx'],
            ['tool/nvm', 'nvm'],
          ],
        },
        {
          title: 'server',
          collapsable: false,
          children: [
            ['server/ab', 'ab'],
            ['server/docker', 'docker'],
            ['server/docker-deploy', 'docker 部署'],
            ['server/kafka', 'kafka'],
            ['server/RabbitMQ', 'RabbitMQ'],
            ['server/redis', 'redis'],
          ],
        },
        {
          title: 'system',
          collapsable: false,
          children: [
            ['system/bat', 'bat'],
            ['system/mddir', 'mddir'],
          ],
        },
        {
          title: 'edito',
          collapsable: false,
          children: [
            ['edito/powerdesigner', 'powerdesigner'],
            ['edito/software', 'software'],
          ],
        },
      ],
      '/grammar/': [
        {
          title: '语法',
          collapsable: false,
          children: [
            ['pattern', '正则'],
            ['linux', 'linux'],
            ['es6', 'es6'],
            ['typescript', 'typescript'],
            ['markdown', 'markdown'],
            ['art-template', 'art-template'],
            ['alg', 'alg'],
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
            ['framework/jeecg', 'jeecg'],
            ['framework/react', 'react'],
            ['framework/vuepress', 'vuepress'],
            ['framework/webpack', 'webpack'],
            ['issue', 'issue'],
            ['fork', 'fork'],
            ['question', 'question'],
          ],
        },
        {
          title: 'base',
          collapsable: false,
          children: [
            ['base/ewomail', 'ewomail'],
            ['base/line', 'line'],
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
      '/node/': [
        {
          title: 'egg',
          collapsable: false,
          children: [
            ['egg/admin-docs', '后台管理系统文档'],
            ['egg/egg', 'egg'],
            ['egg/koa', 'koa'],
          ],
        },
        {
          title: 'ejs',
          collapsable: false,
          children: [['ejs/snippet', 'snippet']],
        },
        {
          title: 'func',
          collapsable: false,
          children: [['func/paypal', 'paypal']],
        },
        {
          title: 'nodejs',
          collapsable: false,
          children: [
            ['nodejs/api', 'nodeJS API'],
            ['nodejs/express-project', 'express-project'],
            ['nodejs/express', 'express'],
            ['nodejs/nestjs-interface', 'nestjs-interface'],
            ['nodejs/nestjs', 'nestjs'],
            ['nodejs/router', 'router'],
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
            ['hy/account', '账号密码'],
            ['hy/wsc-admin', '后台管理系统'],
          ],
        },
        {
          title: '运维',
          collapsable: false,
          children: [['operations/closeloop', '闭环']],
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
