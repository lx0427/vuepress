# 老闭环

## 登录

:::tip 线上

- 账号: `admin`
- 密码: `hengYi321`
  :::

## 发布

:::tip 营销闭环前端部署阿里云地址

- ip: `106.14.207.187`(SFTP)
- 账号: `root`
- 密码: `qw!@er34`
- 路径: `/webapps/hengyi_scmls_1213`
  :::

###

```bash
# 查找node进程 22285
ps -aux | grep node
# 关闭进程
kill -9 18056
# 切换到指定目录
cd /webapps/hengyi_scmls_1213/
# 启动命令
nohup npm run dev & exit
```
