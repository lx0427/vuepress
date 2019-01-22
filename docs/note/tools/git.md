# git

## git操作
```
git add .                    // 添加暂存,`stage`
git status                   // 工作区状态
git commit -m 'init'         // 提交更改,`当前分支`

git log                      // 提交记录
git log --pretty=oneline     // 单行

git reflog                   // 命令历史
```

## 新建分支
```
$ git branch <name> 
```

## 切换分支
```
$ git checkout <name> 

$ git checkout -b <name> // 新建+切换
```

## 合并分支
```
// 把`name`分支合到当前分支
$ git merge <name>
```

## 版本回退
```
$ git reset --hard <commit_id> 
```

## 强制推送到远程
```
$ git push origin HEAD --force 
```

## 删除分支
```
$ git branch -d <name>  // 本地
$ git branch -d -r <name> // 远程

// 强制删除使用`-D`
```
