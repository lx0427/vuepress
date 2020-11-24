# oracle

## linux 安装

[oracle 安装文档](https://www.cnblogs.com/rysinal/p/7779055.html)

```bash
# 安装目录
cd /root/oracle
# 下载软件安装包
wget https://download.oracle.com/otn/linux/instantclient/122010/instantclient-basic-linux.x64-12.2.0.1.0.zip
wget https://download.oracle.com/otn/linux/instantclient/122010/instantclient-sdk-linux.x64-12.2.0.1.0.zip
# 解压压缩包
unzip instantclient-basic-linux.x64-12.2.0.1.0.zip
unzip instantclient-sdk-linux.x64-12.2.0.1.0.zip
# 进入安装包文件夹
cd instantclient_12_2
# 配置软连接
ln -s libclntsh.so.12.2 libclntsh.so
# 删除
rm libclntsh.so
# 所有用户永久生效的环境变量配置
vim /etc/profile
export LD_LIBRARY_PATH=/root/oracle/instantclient:$LD_LIBRARY_PATH
export OCI_LIB_DIR=/root/oracle/instantclient
export OCI_INC_DIR=/root/oracle/instantclient/sdk/include
# 立即生效
source /etc/profile

# 请记得更新pm2环境变量
pm2 restart ccf-clawer --update-env
```
