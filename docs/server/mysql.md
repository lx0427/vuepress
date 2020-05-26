# mysql

## 安装

1. 下载 [`Windows (x86, 64-bit), ZIP Archive`](https://dev.mysql.com/downloads/mysql/)
2. 解压到安装目录`D:\Mysql`
3. 新建配置文件`D:\Mysql\my.ini`,编码方式使用`ANSI`

   ```ini
    [mysqld]
    # 设置 3306 端口
    port=3306
    # 设置 mysql 的安装目录
    basedir=D:\\Mysql
    # 设置 mysql 数据库的数据的存放目录
    datadir=D:\\Mysql\\data
    # 允许最大连接数
    max_connections=200
    # 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
    max_connect_errors=10
    # 服务端使用的字符集默认为 UTF8
    character-set-server=utf8
    # 创建新表时将使用的默认存储引擎
    default-storage-engine=INNODB
    # 默认使用“mysql_native_password”插件认证
    default_authentication_plugin=mysql_native_password
    [mysql]
    # 设置 mysql 客户端默认字符集
    default-character-set=utf8
    [client]
    # 设置 mysql 客户端连接服务端时默认使用的端口
    port=3306
    default-character-set=utf8
   ```

4. 配置环境变量
   ```
   MYSQL_HOME D:\Mysql
   path %MYSQL_HOME%\bin
   path D:\Mysql\bin
   ```
5. 管理员运行 cmd

   ```bash
   # 删除以前的mysql服务
   sc delete mysql
   # 创建data文件夹
   mysqld --initialize-insecure
   # 初始化语句
   mysqld --defaults-file=D:\Mysql\my.ini --initialize –console
   # 安装MySQL
   mysqld install
   # 创建root用户
   mysqld --initialize-insecure --user=mysql
   # 启动MySQL服务
   net start mysql
   # 回车出现 “Enter password” 不用输入直接点击回车下一步
   mysqladmin -u root -p password 123456
   # 登录
   mysql -uroot -p123456
   # mysql> 登录成功
   ```

## 命令

```sql
-- 登录
mysql -uroot -p123456
-- 查看数据库
show databases;
-- 创建数据库
create database test;
-- 查看数据库中的表
show tables;
-- 创建表
create table user (name varchar(20), age int);
-- 查看数据表结构
describe user;
desc user;
-- 插入数据
insert into user values('zs',20);
-- 查询表中所有数据
select * from user;
-- 切换数据库
use test
-- 退出数据库
exit;
```

## 数据类型

```sql
create table type (num tinyint);
-- 查看表结构
desc type;
+-------+---------+------+-----+---------+-------+
| Field | Type    | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| num   | tinyint | YES  |     | NULL    |       |
+-------+---------+------+-----+---------+-------+
insert into type values(127);
-- 超出范围
insert into type values(128);
ERROR 1264 (22003): Out of range value for column 'num' at row 1
```

## 增删改查

```sql
insert into type values(1);
update type set num=2 where num=1;
-- 更新所有数据
update type set num=2;
delete from type where num=100;
```

## 约束

### 主键约束：唯一且不为空

```sql
create table stu (id int primary key,  name varchar(20));

mysql> insert into stu values(1,'张三');
Query OK, 1 row affected (0.08 sec)

mysql> insert into stu values(1,'张三');
ERROR 1062 (23000): Duplicate entry '1' for key 'stu.PRIMARY'

mysql> insert into stu values(null,'张三');
ERROR 1048 (23000): Column 'id' cannot be null
```

### 自增约束

```sql
create table stu2 (id int primary key auto_increment,  name varchar(20));
mysql> insert into stu2 (name) values('张三');
Query OK, 1 row affected (0.08 sec)

mysql> insert into stu2 (name) values('张三');
Query OK, 1 row affected (0.12 sec)

mysql> select * from stu2;
+----+--------+
| id | name   |
+----+--------+
|  1 | 张三   |
|  2 | 张三   |
+----+--------+
2 rows in set (0.00 sec)
```

### 添加主键约束

```sql
create table stu1 (id int, name varchar(20));
mysql> desc stu1;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+

alter table stu1 add primary key(id);
mysql> desc stu1;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
```
