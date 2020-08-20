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
