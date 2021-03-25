const fs = require('fs')
const path = require('path')

exports.getDirFiles = (except = []) =>
  function dealDir(dir, fileList = []) {
    let files = fs.readdirSync(dir)
    files.forEach((v) => {
      let filePath = path.join(dir, v)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        dealDir(filePath, fileList)
      } else if (except.every((v) => filePath.indexOf(v) === -1)) {
        let fileContent = fs.readFileSync(filePath).toString()
        let file = {
          fullPath: path.join(dir, v),
        }
        fileList.push(file)
      }
    })
    return fileList
  }

exports.getDirLevel = (except = []) =>
  function(dir, dirList = []) {
    let files = fs.readdirSync(dir)
    files.forEach((v) => {
      let filePath = path.join(dir, v)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory() && except.every((v) => filePath.indexOf(v) === -1)) {
        dirList.push(v)
      }
    })
    return dirList
  }
