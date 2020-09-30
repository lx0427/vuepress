# kafka

> 成功安装环境，但消息队列未能成功使用

```bash
cd C:\Users\XF\Downloads\kafka_2.13-2.6.0\kafka_2.13-2.6.0\bin
zookeeper-server-start.sh ../config/zookeeper.properties
kafka-server-start.sh ../config/server.properties
```

## java 环境

1. [java SE 14](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html)
2. 添加环境变量`JAVA_HOME`: `D:\Java\jdk-14.0.2`
3. 环境变量 path 中添加`%JAVA_HOME%\bin`
4. cmd：`java --version`

## apache-zookeeper

1. [zookeeper](http://mirror.bit.edu.cn/apache/zookeeper/), 选择 `apache-zookeeper-3.6.1-bin.tar.gz`
2. `D:\kafka\apache-zookeeper-3.6.1-bin\conf`下将`zoo_sample.cfg`改为`zoo.cfg`

   ```
   dataDir=D:\kafka\data\logs\zookeeper
   dataLogDir=D:\kafka\data\logs\zookeeper
   ```

3. 添加环境变量`ZOOKEEPER_HOME`: `D:\kafka\apache-zookeeper-3.6.1-bin`
4. 环境变量 path 中添加`%ZOOKEEPER_HOME%\bin`
5. cmd: `zkserver`

## kafka

1. [kafka](https://downloads.apache.org/kafka/2.6.0/kafka_2.13-2.6.0.tgz)
2. `D:\kafka\kafka_2.13-2.6.0\config\server.properties`

   ```
   log.dirs=D:\kafka\data\logs\kafka
   ```

3. cmd:

   ```bash
   cd D:\kafka\kafka_2.13-2.6.0\bin\windows
   d:
   .\kafka-server-start.bat D:\kafka\kafka_2.13-2.6.0\config\server.properties

   # .\kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
   # .\kafka-topics.bat --create --zookeeper localhost:2181 --alter --partitions 2 --topic logAction_p5
   ```
