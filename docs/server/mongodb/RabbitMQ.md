# RabbitMQ

1. [下载并安装 erlang](http://www.erlang.org/downloads), 选择`OTP 23.0 Windows 64-bit Binary File`
2. 配置环境变量`ERLANG_HOME`: `D:\Program Files\erl-23.0`
3. 系统变量 path 中新增：`%ERLANG_HOME%\bin`
4. cmd：`erl`出现版本号
5. [下载并安装 RabbitMQ](http://www.rabbitmq.com/download.html)，选择`Windows installer`
6. 切到安装目录的 `D:\Program Files\RabbitMQ Server\rabbitmq_server-3.8.7\sbin`
   ```bash
   rabbitmq-plugins enable rabbitmq_management
   ```
7. 访问`http://localhost:15672`, `guest/guest`登录，即可
