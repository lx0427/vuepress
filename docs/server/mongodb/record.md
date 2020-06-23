```bash
# 查找mongodb数据库位置
cat /etc/mongod.conf

# 切换到mongodb的bin目录
# 执行配备命令如下
D:\MongoDB\bin>mongodump --username=admin --password=123456

# 切换到linux的mongodb/bin目录
# 执行如下命令，还原备份到数据库
mongorestore -u=admin -p=123456 --authenticationDatabase admin  -d game_mall --dir=/home/database/game_mall

# 连接mongodb
mongo -u admin -p 123456
```
