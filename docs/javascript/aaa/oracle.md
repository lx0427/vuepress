# oracle

## linux 安装

```bash
# 安装目录
cd /root/oracle
# 下载软件安装包
wget https://download.oracle.com/otn/linux/instantclient/122010/instantclient-jdbc-linux.x64-12.2.0.1.0.zip
wget https://download.oracle.com/otn/linux/instantclient/122010/instantclient-sdk-linux.x64-12.2.0.1.0.zip
# 解压压缩包
unzip instantclient-basic-linux.x64-12.2.0.1.0.zip
unzip instantclient-sdk-linux.x64-12.2.0.1.0.zip
# 进入安装包文件夹
cd instantclient_12_2
# 配置软连接
ln -s libclntsh.so.12.2 libclntsh.so
# 所有用户永久生效的环境变量配置
vim /etc/profile
export LD_LIBRARY_PATH=/root/oracle/instantclient_12_2:$LD_LIBRARY_PATH
export OCI_LIB_DIR=/root/oracle/instantclient_12_2
export OCI_INC_DIR=/root/oracle/instantclient_12_2/sdk/include
```
