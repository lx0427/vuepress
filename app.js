const fs = require('fs')
const path = require('path')
const { Z_FIXED } = require('zlib')
const { getDirFiles, getDirLevel } = require('./utils/utils')

let files = getDirFiles(['.vuepress', 'draft'])('./docs')
// console.log(JSON.stringify(files))
let navDirs = getDirLevel(['.vuepress', 'draft'])('./docs')

let sidebar = {}
let nav = navDirs.map((v) => {
  let match = files.find((file) => file.fullPath.indexOf(`docs\\${v}`) > -1)
  let currentNavDirList = getDirLevel(['.vuepress', 'draft'])(`./docs/${v}`)
  if (!currentNavDirList.length) {
    sidebar[`/${v}/`] = [
      {
        title: v.toUpperCase(),
        collapsable: false,
        children: fs.readdirSync(`./docs/${v}`).map((item) => {
          let name = item.replace('.md', '')
          return [name, name]
        }),
      },
    ]
  } else {
    sidebar[`/${v}/`] = currentNavDirList.map((curDir) => {
      return {
        title: curDir.toUpperCase(),
        collapsable: false,
        children: fs.readdirSync(`./docs/${v}/${curDir}`).map((item) => {
          let name = item.replace('.md', '')
          return [`${curDir}/${name}`, name]
        }),
      }
    })
  }

  return {
    text: v,
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
