# bat

## exe + 配置文件

`/d`：设置启动目录

```
start /d "D:\Redis" redis-server.exe redis.windows.conf
```

## cmd

`/c`：cmd

```
start cmd /c "mongod --replSet myrs --port 27117 --dbpath D:\MongoDB\myrs\27117 --oplogSize 128"
start cmd /c "mongod --replSet myrs --port 27118 --dbpath D:\MongoDB\myrs\27118 --oplogSize 128"
start cmd /c "mongod --replSet myrs --port 27119 --dbpath D:\MongoDB\myrs\27119 --oplogSize 128"
```

## timeout

`timeout /t 10`：延迟 10s 执行

```
start cmd /c "timeout /t 10 && mongo admin -u admin -p 123456 --port 27117"
start cmd /c "timeout /t 10 && mongo admin -u admin -p 123456 --port 27118"
start cmd /c "timeout /t 10 && mongo admin -u admin -p 123456 --port 27119"
```
