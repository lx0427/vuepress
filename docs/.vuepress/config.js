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
        text: '算法学习',
        link: '/alg/'
      },
      {
        text: 'NestJs',
        link: '/nestjs/interface'
      },
      {
        text: 'tool',
        link: '/tool/nvm'
      },
      {
        text: '微商城',
        link: '/wsc/components'
      },
      {
        text: '备忘',
        link: '/record/cangcu'
      },
      {
        text: 'other',
        link: '/other/'
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
            ['js/array', 'array'],
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
          title: 'VUE',
          collapsable: false,
          children: [
            ['vue/', 'VUE'],
            ['vue/new', 'new'],
            ['vue/v-model', 'v-model'],
            'vue/vue-router',
            ['vue/vue-cli', 'Vue Cli']
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
          title: 'TOOLS',
          collapsable: false, // 是否可以折叠
          children: [
            ['tools/fork', 'fork'],
            ['tools/git', 'git'],
            ['tools/webpack', 'webpack'],
            ['tools/', 'vuepress'], // 第一项为link, 第二项为标题
            ['tools/hexo', 'hexo'],
            ['tools/vscode', 'vscode']
          ]
        },
        {
          title: 'MARKDOWN',
          collapsable: false,
          children: [
            ['markdown/', '学习使用'],
            ['markdown/difficulty', '难点']
          ]
        },
        {
          title: 'WEBPACK',
          collapsable: false,
          children: [['webpack/01', '插件配置']]
        }
      ],
      '/alg/': [['', '算法学习']],
      '/nestjs/': [
        {
          title: 'NestJs',
          collapsable: false,
          children: [
            ['nestjs-server', 'NestJS服务端'],
            ['vue-ts', '后台管理系统'],
            ['nuxt-vuetify', 'nuxt+vuetify'],
            ['typescript-grammar', 'TypeScript'],
            ['interface', '接口'],
            ['element-ui', 'Element-UI使用'],
            ['define-template', '自定义Vue-TS模板']
          ]
        }
      ],
      '/tool/': [
        ['nvm', 'nvm'],
        ['vscode', 'vscode'],
        ['yarn', 'yarn']
      ],
      '/wsc/': [
        ['components', '前端组件'],
        ['', '预设规则']
      ],
      '/record/': [
        ['cangcu', '仓储管理'],
        ['yuanquwuliu', '园区物流'],
        ['fdc-record', '亿房']
      ],
      '/other/': [
        ['', 'other'],
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
