# git

## 安装

选择默认目录及配置

```bash
git config --global user.name "lx0427"
git config --global user.email "lx15172413095@163.com"
```

## git 操作

```
git add .                    // 添加暂存,`stage`
git status                   // 工作区状态
git commit -m 'init'         // 提交更改,`当前分支`

git log                      // 提交记录
git log --pretty=oneline     // 单行

git reflog                   // 命令历史
```

### 新建分支

```
$ git branch <name>
```

### 切换分支

```
$ git checkout <name>

$ git checkout -b <name> // 新建+切换
```

### 合并分支

```
// 把`name`分支合到当前分支
$ git merge <name>
```

### 版本回退

```
$ git reset --hard <commit_id>
```

### 强制推送到远程

```
$ git push origin HEAD --force
```

### 删除分支

```
$ git branch -d <name>  // 本地
$ git branch -d -r <name> // 远程

// 强制删除使用`-D`
```

## 问题

### not concluded your merge

```
// 保留本地更改
$ git merge --abort
$ git reset --merge
$ git pull
```

```
// 舍弃本地更改
$ git fetch --all
$ git reset --hard origin/master
$ git fetch
```

### 443: Timed out

> 在开启 shadowsocks 的前提下，手动配置 git 的代理。git 客户端输入如下两个命令就可以了。

```bash
# 开启
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy http://127.0.0.1:1080

# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## ssh clone

### 生成秘钥

```bash
# 查看是否有秘钥文件
cd ~/.ssh
# not found

# 生成秘钥，回车3连
ssh-keygen -t rsa -C "lixiong@thalys.net.cn"
```

### 公钥添加到远程仓库

- 设置位置：我的头像 - settings - SSH and GPG keys - New SSH Key
- Title: 随意
- Key: 如下

  ```bash
  cat ~/.ssh/id_rsa.pub
  # ssh-rsa ... 1749239438@qq.com

  # 验证下这个key是不是正常工作
  ssh -T git@code.aliyun.com
  # Are you sure you want to continue connecting (yes/no)? yes
  # Hi lx0427! You've successfully authenticated, but GitHub does not provide shell access.
  ```


## 生成第二个ssh

```bash
cd ~/.ssh
ssh-keygen -t rsa -C "lx15172413095@163.com" -f ~/.ssh/github_rsa
cat ~/.ssh/github_rsa.pub
```

### 添加config文件

> 无后缀，config

```
Host code.aliyun.com
    HostName code.aliyun.com
    User thalys_lixiong
    IdentityFile ~/.ssh/id_rsa
Host github.com
    HostName github.com
    User lx0427
    IdentityFile ~/.ssh/github_rsa
```
### 检验是否连通

```
ssh -T git@code.aliyun.com
ssh -T git@github.com
```