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

## 操作数据库

```sql
-- 登录
mysql -uroot -p123456
-- 查看数据库
show databases;
-- 切换数据库
use test
-- 退出数据库
exit;
```

## 数据表操作

```sql
-- 创建数据库
create database test;
-- 查看数据库中的表
show tables;
-- 新增
create table s3 (id int primary key, name varchar(20));
-- 查看数据表结构
describe user;
desc user;
-- 重命名
RENAME TABLE s3 to s4;
-- 删除
drop table s4;
```

## 增删改查

```sql
insert into type values(1);

select * form type;

update type set num=2 where num=1;
update type set num=2; -- 更新所有数据

delete from type where num=100;
```

## 约束

### 主键约束

- primary key
- 唯一且不为空

```sql
create table stu (id int primary key,  name varchar(20));
```

### 唯一约束

```sql
create table s1 (id int unique,  name varchar(20));
```

### 自增约束

- auto_increment
- 只有主键才能设置自增

```sql
create table stu2 (id int primary key auto_increment,  name varchar(20));
insert into stu2 (name) values('张三');
insert into stu2 (name) values('张三');

mysql> select * from stu2;
+----+--------+
| id | name   |
+----+--------+
|  1 | 张三   |
|  2 | 张三   |
+----+--------+
```

### 非空约束

- not null

```sql
create table user8 (id int, name varchar(20) not null);
```

### 默认约束

- default \<value\>

```sql
create table user9(id int,name varchar(20),age int default 10);
```

### 外键约束

- 父子表

```sql
-- 创建主表
create table class(id int primary key  auto_increment , name varchar(20));
mysql> desc class;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int         | NO   | PRI | NULL    | auto_increment |
| name  | varchar(20) | YES  |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+
2 rows in set (0.00 sec)

-- 插入数据
insert into class (name) values('一班');
insert into class (name) values('二班');
insert into class (name) values('三班');
insert into class (name) values('四班');
mysql> select * from class;
+----+--------+
| id | name   |
+----+--------+
|  1 | 一班   |
|  2 | 二班   |
|  3 | 三班   |
|  4 | 四班   |
+----+--------+
4 rows in set (0.00 sec)

create table student (
	id int primary key,
	name varchar(20),
	class_id int,
	foreign key (class_id) references class(id)
);
mysql> desc student;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| id       | int         | NO   | PRI | NULL    |       |
| name     | varchar(20) | YES  |     | NULL    |       |
| class_id | int         | YES  | MUL | NULL    |       |
+----------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

insert into student values(1001,'张三',1);
insert into student values(2001,'张三',2);
insert into student values(3001,'张三',3);
insert into student values(4001,'张三',4);
mysql> select * from student;
+------+--------+----------+
| id   | name   | class_id |
+------+--------+----------+
| 1001 | 张三   |        1 |
| 2001 | 张三   |        2 |
| 3001 | 张三   |        3 |
| 4001 | 张三   |        4 |
+------+--------+----------+
4 rows in set (0.00 sec)

-- 不能插入主表中不存在的外键
mysql> insert into student values(5001,'张三',5);
ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`test`.`student`, CONSTRAINT `student_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`))

-- 不能删除已经使用的外键
mysql> delete from class where id=4;
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`test`.`student`, CONSTRAINT `student_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`))
```

## alter

- add
- modify
- drop

### 操作约束

- add & drop

```sql
-- 添加主键约束
alter table user add primary key(id);
-- 删除主键约束,每张表只有一个主键
alter table user drop primary key;

-- 唯一约束索引
alter table user add unique(id);
-- 删除唯一约束索引
alter table user drop index id;

-- 添加外键
   -- student_ibfk_1：外键名称
   -- class_id：内键key
   -- class: 外键关联表名
   -- id：外键key
ALTER TABLE student add FOREIGN KEY student_ibfk_1(class_id) REFERENCES class(id);
-- 删除外键约束
SHOW CREATE TABLE student; -- 查看表设置
   -- CREATE TABLE `student` (
   --   `id` int NOT NULL,
   --   `name` varchar(20) DEFAULT NULL,
   --   `class_id` int DEFAULT NULL,
   --   PRIMARY KEY (`id`),
   --   KEY `class_id` (`class_id`),
   --   CONSTRAINT `student_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
   -- ) ENGINE=InnoDB DEFAULT CHARSET=utf8
ALTER TABLE student DROP FOREIGN KEY student_ibfk_1;
```

- modify

```sql
-- 添加自增约束
ALTER TABLE s MODIFY id int auto_increment;
-- 删除自增约束
ALTER TABLE s MODIFY id int;

-- 添加非空约束
ALTER TABLE s MODIFY id int not null;
-- 添加非空约束
ALTER TABLE s MODIFY id int;

-- 添加默认约束
ALTER TABLE s MODIFY s_no int DEFAULT 10;
-- 添加默认约束
ALTER TABLE s MODIFY s_no int;
```

### 操作字段

```sql
-- 新增
ALTER TABLE s add num int;
-- 删除
ALTER TABLE s drop num;
```
