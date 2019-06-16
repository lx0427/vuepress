# nvm
## 正常安装
[nvm-for-windows](https://github.com/coreybutler/nvm-windows/releases)
或直接下载[nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip)

## 安装步骤
1. 解压安装
   * nvm安装至`D:\dev\nvm`
   * node安装至`D:\dev`
   * 安装目录中不能含有`汉字`或`空格`
2. 设置`setting.txt`文件
    ```
    root: D:\dev\nvm
    path: D:\dev\nodejs
    arch: 64
    proxy: none
    node_mirror: http://npm.taobao.org/mirrors/node/
    npm_mirror: https://npm.taobao.org/mirrors/npm/
    ```
3. 配置环境变量
    > 计算机(右键) -> 属性 -> 高级系统设置 -> 环境变量
    ```bash
    NVM_HOME  # D:\dev\nvm
    NVM_SYMLINK # D:\dev\nodejs

    # path中添加变量
    PATH
      %NVM_HOME%
      %NVM_SYMLINK%
    ```
4. 使用命令
      ```bash
      nvm install 8
      nvm use 8.16.0

      nvm ls 
      # * 8.16.0

      # 安装node-gyp
      npm i node-gyp -g
      ```

## npm

### 命令
```bash
npm config get registry # 设置过的所有的源
npm config set registry https://registry.npm.taobao.org # 设置淘宝源
npm config set registry https://registry.npmjs.org # 还原设置

npm config list # npm配置项

npm cache clean -f # 缓存

npm rebuild node-sass # 重装npm包
```

### 问题
1. Error: Can't find Python executable "python", you can set the PYTHON env variable.
    ```bash
    npm install --global --production windows-build-tools

    # 临时设置环境变量
    set PYTHON "C:\Users\Administrator\.windows-build-tools\python27\python.exe"
    ```


## 指令

### 常用命令
> [查看所有node版本](https://nodejs.org/download/release/)
```bash
nvm -v                  # 查看版本
nvm ls                  # 已安装列表
nvm use 6.11.1          # 切换node版本

# node及npm(安装/卸载)
nvm install 8           # 8的最新版本
nvm install 6.11.1      # 指定版本
nvm uninstall 6.11.1    # 卸载指定版本
```

### 查看文件安装位置
```powershell
$ which nvm
# C:\dev\nvm\nvm.EXE
```