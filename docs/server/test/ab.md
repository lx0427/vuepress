# Apache24

## ApacheBench

1. [下载地址](http://httpd.apache.org/download.cgi)
2. [Files for Microsoft Windows](http://httpd.apache.org/docs/current/platform/windows.html#down)
3. [ApacheHaus](https://www.apachehaus.com/cgi-bin/download.plx)
4. `Apache 2.4.46` download
5. 解压到 `D:\Apache24`
6. `D:\Apache24\conf\httpd.conf`修改：
   1. `Define SRVROOT "D:/Apache24"`
   2. `Listen 8777`
   3. 测试文件目录 `DocumentRoot "${SRVROOT}/htdocs"`
7. 管理员启动 cmd

   ```bash
   cd D:\Apache24\bin

   .\httpd.exe  -k  install

   # 启动apache服务
   .\httpd.exe -k start

   # 当前bin目录执行qps测试
   ab -c 200 -t 100 http://localhost:8001/
   ```

## 测试

```bash
# -k 使得connection keep alive
.\ab -c 100 -n 10000  -p 'C:\Users\XF\Desktop\123\test.txt' -T 'application/json' -k http://localhost:7001/api/order/add
```

## ab 参数

| 命令参数 | 描述                                                                                                                                         |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| -n       | 在测试会话中所执行的请求个数（总数）                                                                                                         |
| -c       | 一次产生的请求个数（单次请求次数）                                                                                                           |
| -t       | 测试所进行的最大秒数。其内部隐含值是-n 50000，它可以使对服务器的测试限制在一个固定的总时间以内。默认时，没有时间限制。                       |
| -p       | 包含了需要 POST 的数据的文件。                                                                                                               |
| -P       | 中转代理提供 BASIC 认证信任。用户名和密码由一个:隔开，并以 base64 编码形式发送                                                               |
| -T       | POST 数据所使用的 Content-type 头信息。                                                                                                      |
| -v       | 设置显示信息的详细程度-4 或更大值会显示头信息，3 或更大值可以显示响应代码(404,200 等),2 或更大值可以显示警告和其他信息。                     |
| -V       | 显示版本号并退出。                                                                                                                           |
| -w       | 以 HTML 表的格式输出结果。默认时，它是白色背景的两列宽度的一张表。                                                                           |
| -i       | 执行 HEAD 请求，而不是 GET。                                                                                                                 |
| -x       | 设置`<table>`属性的字符串。                                                                                                                  |
| -X       | 对请求使用代理服务器。                                                                                                                       |
| -y       | 设置`<tr>`属性的字符串。                                                                                                                     |
| -z       | 设置`<td>`属性的字符串。                                                                                                                     |
| -C       | 对请求附加一个 Cookie:行。其典型形式是 name=value 的一个参数对，此参数可以重复。                                                             |
| -H       | 对请求附加额外的头信息。此参数的典型形式是一个有效的头信息行，其中包含了以冒号分隔的字段和值的对(如,"Accept-Encoding:zip/zop;8bit")。        |
| -A       | 对服务器提供 BASIC 认证信任。用户名和密码由一个:隔开，并以 base64 编码形式发送                                                               |
| -h       | 显示使用方法/帮助信息。                                                                                                                      |
| -d       | 不显示"percentage served within XX [ms] table"的消息(为以前的版本提供支持)。                                                                 |
| -e       | 产生一个以逗号分隔的(CSV)文件，包含了处理每个相应百分比的请求所需要(从 1%到 100%)的相应百分比的时间(ms)。“二进制化”，比'gnuplot'格式更有用。 |
| -g       | 所有测试结果写入'gnuplot'或者 TSV(以 Tab 分隔的)文件。可以方便地导入到 Gnuplot,IDL,Mathematica,Igor 甚至 Excel 中。第一行为标题。            |
| -i       | 执行 HEAD 请求，而不是 GET。                                                                                                                 |
| -k       | 启用 HTTP KeepAlive 功能，即在一个 HTTP 会话中执行多个请求。默认时，不启用 KeepAlive 功能。                                                  |
| -q       | 如果处理的请求数大于 150，ab 每处理大约 10%或者 100 个请求时，会在 stderr 输出一个进度计数。此-q 标记可以抑制这些信息。                      |

## ab 性能指标

在进行性能测试过程中有几个指标比较重要：

### 吞吐率（Requests per second）

服务器并发处理能力的量化描述，单位是 reqs/s，指的是在某个并发用户数下单位时间内处理的请求数。某个并发用户数下单位时间内能处理的最大请求数，称之为最大吞吐率。

吞吐率是基于并发用户数的。这句话代表了两个含义：

a. 吞吐率和并发用户数相关

b. 不同的并发用户数下，吞吐率一般是不同的

计算公式：总请求数/处理完成这些请求数所花费的时间，即 Request per second=Complete requests/Time taken for tests 必须要说明的是，这个数值表示当前机器的整体性能，值越大越好。

### 并发连接数（The number of concurrent connections）

并发连接数指的是某个时刻服务器所接受的请求数目，简单的讲，就是一个会话。

### 并发用户数（Concurrency Level）

要注意区分这个概念和并发连接数之间的区别，一个用户可能同时会产生多个会话，也即连接数。在 HTTP/1.1 下，IE7 支持两个并发连接，IE8 支持 6 个并发连接，FireFox3 支持 4 个并发连接，所以相应的，我们的并发用户数就得除以这个基数。

### 用户平均请求等待时间（Time per request）

计算公式：处理完成所有请求数所花费的时间/（总请求数/并发用户数），即：Time per request=Time taken for tests/（Complete requests/Concurrency Level）

### 服务器平均请求等待时间（Time per request:across all concurrent requests）

计算公式：处理完成所有请求数所花费的时间/总请求数，即：

Time taken for/testsComplete requests

可以看到，它是吞吐率的倒数。

同时，它也等于用户平均请求等待时间/并发用户数，即

Time per request/Concurrency Level
