linux 操作

> 查找进程

```bash
# 查找mongo进程id
ps -axu |grep mongo
kill -2 <进程id>
```


# 启动docker
systemctl start docker
systemctl stop docker
# 查看docker状态
systemctl status docker
# 开启自启动
systemctl enable docker
# 关闭自启动
systemctl disable docker.service