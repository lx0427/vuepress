# npm

## 常用命令

```bash
# 清理缓存
npm cache clean -f
# 设置淘宝源
npm config set registry https://registry.npm.taobao.org
# 还原设置
npm config set registry https://registry.npmjs.org/
```

## fork

### 修改 mint-ui 库

1. fork 项目
2. 拉取项目代码至本地
3. 全局`package.json`中搜索作者名替换为自己的
4. 修改代码，本地运行
5. **修改版本号**，`npm run dist`打包项目
6. `npm publish`发布项目

### 登陆 npm

```bash
# 设置npm源
$ npm config set registry http://registry.npmjs.org

# 登录npm
$ npm login
username: sfb
password: ************
email: 1749239438@qq.com

# 切回taobao源
$ npm config set registry https://registry.npm.taobao.org
```
