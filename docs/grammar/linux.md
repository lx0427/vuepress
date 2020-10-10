# linux

## 命令

### alias

> 定义命令

```bash
alias xin='ls -lha'
```

### unalias

> 取消定义命令

```bash
unalias xin
```

### which

> 可以用来看命令的绝对路径

### history

> 查看历史执行命令

### `!$`

> 使用上次命令行最后的参数

### man

> 查看命令帮助

## 文件操作

> 去除默认-i, `\cp` ==> (\+命令)

```bash
# rm: rm -i
# cp: cp -i
# mv: mv -i

# 查看命令帮助 --help
cp --help
```

### ls

> 查看目录列表信息

```bash
# 列出文件属性, 缩写为ll
ls -l
# 加h，自动变换单位
ls -lh
# 列出文件目录
ls -d
# 列出文件目录的属性
ls -ld
# 查看目录所有文件（包括隐藏文件（带一个点 .））
ls -la
# 加t，文件按时间排序，越早越排在下面
ls -lta
```

### pwd

> 打印当前目录路径

### cd

> 改变当前目录路径

### cat

> 查看文件信息

### touch

> 可以在当前位置和绝对路径中创建文件夹
> 不可递归创建

### mkdir

> 可以在当前位置和绝对路径中创建文件夹
> `mkdir -p`,可递归创建

### rm

1. `rm -r` -r 表示删除的是目录
2. `rm -f` -f 表示免确认删除文件夹下面的文件和文件夹
3. `rm -rf` 免确认删除文件夹(含目录中的所有文件及文件夹)

### cp

`cp <sourcePath> <targetPath>`

```bash
# 复制文件夹，无提示覆盖
\cp -rf 02/ 03/
```

### mv

```bash
# 重命名
mv test test3
# 移动
# `mv <sourcePath> <targetPath>`
```
