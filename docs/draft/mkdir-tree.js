const fs = require('fs')
const path = require('path')
const { Z_FIXED } = require('zlib')

const getAllDirFiles = (except, level = 1000) => {
  return function readdirSync(dir, depth = 0, list = []) {
    let files = fs.readdirSync(dir)
    files.forEach((v) => {
      if (except.indexOf(v) === -1 && level >= depth) {
        list.push({ name: v, depth })

        let filePath = path.join(dir, v)
        const stat = fs.statSync(filePath)
        if (stat.isDirectory()) {
          readdirSync(filePath, depth + 1, list)
        }
      }
    })
    return list
  }
}

let except = ['node_modules', '.git']
let files = getAllDirFiles(except, 2)(__dirname)

let treeArr = []
let depthMap = {}
function getPrefix(depth) {
  let prefix = ''
  for (let i = 1; i <= depth; i++) {
    prefix += '|   '
  }
  prefix += '|-- '
  return prefix
}
files.forEach((v) => {
  let { depth, name } = v
  if (!depthMap[depth]) {
    depthMap[depth] = getPrefix(depth)
  }
  treeArr.push(depthMap[depth] + name)
})

fs.writeFileSync('./tree.md', treeArr.join('\n'))
