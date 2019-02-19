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
        link: '/note/tools/'
      },
      {
        text: '工作',
        link: '/work/home-config'
      }
    ],
    sidebar: {
      '/note/': [{
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
          title: 'vue',
          collapsable: false,
          children:[
            ['vue/v-model', 'v-model'],
            'vue/vue-router'
          ]
        },
        {
          title: 'markdown',
          collapsable: false,
          children:[
            ['markdown/', '学习使用'],
            ['markdown/difficulty', '难点'],
          ]
        },
      ],
      '/work/': [
        ['house2.0', 'm端重构'],
        ['measurement', '测评文章'],
        ['home-config', '后台首页配置'],
        ['welfare-apply', '福利报名'],
        ['nsop', 'nsop后台'],
        ['record', '备忘'],
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