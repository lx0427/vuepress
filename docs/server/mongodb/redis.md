# redis

## 下载安装

> [下载地址](https://github.com/MicrosoftArchive/redis/releases), 选择 zip 解压

## 启动 redis 服务

> redis 解压目录, 打开 cmd

```bash
redis-server.exe redis.windows.conf
```

## 启动端口进程

> 启动 redis 服务, redis 解压目录, 打开 cmd

```bash
redis-cli.exe -h 127.0.0.1 -p 6379
# 启动验证
redis-cli.exe -h 127.0.0.1 -p 6379 -a 123456
```

## 设置密码

1. 查看密码
   ```bash
   config get requirepass
   ```
2. 设置密码
   ```bash
   config set requirepass 123456
   ```
3. 验证密码
   ```bash
   auth 123456
   ```
