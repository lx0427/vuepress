module.exports = {
  title: 'Litter Flying Bears', // 网站标题
  description: 'Litter Flying Bears',
  base:'/vuepress/',
  themeConfig: {
    sidebarDepth:2,
    activeHeaderLinks:true,
    lastUpdated: 'Last Updated',
    nav: [{
        text: '笔记',
        link: '/note/sidebar/'
      }
    ],
    sidebar: [
      {
        title: 'sidebar',
        collapsable: false
      },
      ['/note/sidebar/', 'vuepress'], // 第一项为link, 第二项为标题
      ['/note/sidebar/one', 'one'], // 第一项为link, 第二项为标题
      ['/note/sidebar/two', 'two'],
      {
        title: '分类2',
        collapsable: false // 是否可以折叠
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