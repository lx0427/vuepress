module.exports = {
  title: 'Litter Flying Bears', // 网站标题
  description: 'Litter Flying Bears',
  base: '/vuepress/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  themeConfig: {
    sidebarDepth: 2,
    activeHeaderLinks: true,
    lastUpdated: 'Last Updated',
    nav: [{
      text: '笔记',
      link: '/note/react/'
    },
    {
      text: '工作',
      link: '/work/hy/'
    },
    {
      text: 'interview',
      link: '/interview/pattern'
    }
    ],
    sidebar: {
      '/note/': [{
        title: 'react',
        collapsable: false,
        children: [
          ['react/', '开始学习']
        ]
      },{
        title: 'vue',
        collapsable: false,
        children: [
          ['vue/v-model', 'v-model'],
          ['vue/vue-eslint', 'eslint'],
          'vue/vue-router'
        ]
      },
      {
        title: 'css',
        collapsable: false,
        children: [
          ['css/selector', 'selector']
        ]
      },
      {
        title: 'tools',
        collapsable: false, // 是否可以折叠
        children: [
          ['tools/git', 'git'],
          ['tools/', 'vuepress'], // 第一项为link, 第二项为标题
          ['tools/hexo', 'hexo'],
          ['tools/webpack', 'webpack'],
        ]
      },
      {
        title: 'markdown',
        collapsable: false,
        children: [
          ['markdown/', '学习使用'],
          ['markdown/difficulty', '难点'],
        ]
      },
      ],
      '/interview/': [
        ['pattern', 'pattern'],
        ['array', 'array'],
        ['question', 'question'],
        ['answer', 'answer'],
      ],
      '/work/': [
        {
          title: '恒逸',
          collapsable: false,
          children: [
            ['hy/', '首页'],
            ['hy/cangcu', '仓储管理'],
          ]
        },
        {
          title: '亿房',
          collapsable: false,
          children: [
            ['yf/house2.0', 'm端重构'],
            ['yf/measurement', '测评文章'],
            ['yf/home-config', '后台首页配置'],
            ['yf/welfare-apply', '福利报名'],
            ['yf/nsop', 'nsop后台'],
            ['yf/record', '备忘'],
          ]
        },
      ],
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    ['@vuepress/search', { // 搜索插件，不能搜索代码块内容
      searchMaxSuggestions: 10
    }]
  ]
}