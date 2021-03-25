const fs = require('fs')
const { Z_FIXED } = require('zlib')
const { getAllDirFiles, getDirLevel, getDirFiles } = require('./utils/utils')

let files = getAllDirFiles(['.vuepress', 'draft'])('./docs')
let navDirs = getDirLevel(['.vuepress', 'draft'])('./docs')

let sidebar = {}
let nav = navDirs.map((v) => {
  let match = files.find((file) => file.fullPath.indexOf(`docs\\${v}`) > -1)
  let currentNavDirList = getDirLevel(['.vuepress', 'draft'])(`./docs/${v}`)
  currentNavDirList.unshift('')
  sidebar[`/${v}/`] = currentNavDirList
    .map((curDir) => {
      let dirPath = curDir ? `./docs/${v}/${curDir}` : `./docs/${v}`
      let files = getDirFiles(dirPath)
      if (files.length) {
        return {
          title: (curDir ? curDir : v).toUpperCase(),
          collapsable: false,
          children: files.map((item) => {
            let name = item.replace('.md', '')
            return [curDir ? `${curDir}/${name}` : name, name]
          }),
        }
      }
    })
    .filter((v) => !!v)

  return {
    text: v.toUpperCase(),
    link: match.fullPath
      .replace('docs\\', '/')
      .replace(/\\/g, '/')
      .replace('.md', ''),
  }
})

let config = {
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
    nav,
    sidebar,
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

fs.writeFileSync('./docs/.vuepress/config.js', `module.exports = ${JSON.stringify(config)}`)
