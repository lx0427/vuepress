module.exports = {
  title: 'Litter Flying Bears', // 网站标题
  description: 'Litter Flying Bears',
  base: '/vuepress/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    sidebarDepth: 2,
    activeHeaderLinks: true,
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: '笔记',
        link: '/note/react/'
      },
      {
        text: 'Server',
        link: '/server/express'
      },
      {
        text: 'Vue',
        link: '/vue/create'
      },
      {
        text: '算法学习',
        link: '/alg/'
      },
      {
        text: 'tool',
        link: '/tool/nvm'
      },
      {
        text: '微商城',
        link: '/wsc/develop'
      },
      {
        text: '备忘',
        link: '/record/cangcu'
      },
      {
        text: 'other',
        link: '/other/browser'
      }
    ],
    sidebar: {
      '/note/': [
        {
          title: 'JS',
          collapsable: false,
          children: [
            ['js/', 'JS'],
            ['js/es6', 'ES6'],
            ['js/pattern', 'pattern'],
            ['js/question', 'question'],
            ['js/answer', 'answer']
          ]
        },
        {
          title: 'REACT',
          collapsable: false,
          children: [
            ['react/', '开始学习'],
            ['react/antd', 'Ant Design'],
            ['react/record', '记录']
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            ['css/', 'CSS'],
            ['css/selector', 'last-child & last-of-type'],
            ['css/scroll-penetrate', '滚动穿透']
          ]
        },
        {
          title: 'MARKDOWN',
          collapsable: false,
          children: [
            ['markdown/', '学习使用'],
            ['markdown/difficulty', '难点']
          ]
        }
      ],
      '/server/': [
        {
          title: 'Koa',
          collapsable: false,
          children: [['koa', 'koa']]
        },
        {
          title: 'Express',
          collapsable: false,
          children: [
            ['express', 'express'],
            ['express-project', 'express-project']
          ]
        },
        {
          title: 'NestJs',
          collapsable: false,
          children: [
            ['nestjs', 'nestjs'],
            ['nestjs-interface', 'nestjs-interface']
          ]
        },
        {
          title: 'mongoDB',
          collapsable: false,
          children: [
            ['mongodb/mongodb', 'mongodb'],
            ['mongodb/crud', 'mongodb/CRUD'],
            ['mongodb/mongoose', 'mongoose']
          ]
        },
        {
          title: 'nodeJs',
          collapsable: false,
          children: [
            ['nodejs/fs', 'fs'],
            ['nodejs/http', 'http'],
            ['nodejs/url', 'url'],
            ['nodejs/router', 'router']
          ]
        }
      ],
      '/vue/': [
        {
          title: 'create',
          collapsable: false,
          children: [
            ['create', 'create'],
            ['vue-cli', 'vue-cli']
          ]
        },
        {
          title: 'VUE',
          collapsable: false,
          children: [
            ['router', 'router'],
            ['axios', 'axios'],
            ['mixins', 'mixins'],
            ['v-model', 'v-model']
          ]
        },
        {
          title: 'typescript',
          collapsable: false,
          children: [
            ['typescript-grammar', 'typescript-grammar'],
            ['vue3-ts', 'vue3-ts']
          ]
        },
        ['element-ui', 'element-ui'],
        ['nuxt-vuetify', 'nuxt-vuetify']
      ],
      '/alg/': [
        {
          title: '开始',
          collapsable: false,
          children: [['', '算法学习']]
        }
      ],
      '/tool/': [
        ['fork', 'fork'],
        ['git', 'git'],
        ['hexo', 'hexo'],
        ['node', 'node'],
        ['nvm', 'nvm'],
        ['software', 'software'],
        ['vscode-template', 'vscode-template'],
        ['vscode', 'vscode'],
        ['vuepress', 'vuepress'],
        ['webpack', 'webpack']
      ],
      '/wsc/': [
        {
          title: '闭环',
          collapsable: false,
          children: [['closed-loop', '老闭环']]
        },
        {
          title: '商城开发',
          collapsable: false,
          children: [
            ['develop', '开发常用'],
            ['', '预设规则']
          ]
        },
        {
          title: '商城组件',
          collapsable: false,
          children: [
            ['art-template', 'art-template'],
            ['components', '自定义组件']
          ]
        },
        {
          title: '商城问题',
          collapsable: false,
          children: [
            ['issue', '常见问题'],
            ['record', '记录']
          ]
        }
      ],
      '/record/': [
        ['cangcu', '仓储管理'],
        ['yuanquwuliu', '园区物流'],
        ['fdc-record', '亿房']
      ],
      '/other/': [
        ['browser', '浏览器'],
        ['ppt-font', 'ppt字体'],
        ['static-engineering', '工程化项目（静态页面）']
      ]
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    [
      '@vuepress/search',
      {
        // 搜索插件，不能搜索代码块内容
        searchMaxSuggestions: 10
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  }
}
