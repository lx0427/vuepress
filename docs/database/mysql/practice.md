# 联系

## index

```sql
-- 添加uni
-- CREATE TABLE user4 (id int, name VARCHAR(20) UNIQUE);
-- desc user4;

-- 使用alter add方式添加
-- CREATE TABLE user2 (id int, NAME VARCHAR(20));
-- ALTER TABLE user2 ADD UNIQUE (name);
-- DESC user2;

-- 使用alter drop方式删除
-- ALTER TABLE user4 DROP INDEX name;

-- 联合uni
-- CREATE TABLE user5 (id int, name VARCHAR(20), UNIQUE(id,name));
-- desc user5;

-- 使用alter add方式添加
-- alter table user5 add unique(id,name);
-- desc user5;

-- 使用alter drop方式删除
-- ALTER TABLE user5 DROP INDEX `id`;

-- INSERT INTO user5 VALUES(1,'zs');
-- INSERT INTO user5 VALUES(1,'ls');
-- SELECT * from user5;

-- 使用alter modify方式添加
-- alter TABLE user4 MODIFY name varchar(20) UNIQUE;
-- desc user4;

-- 非空约束
-- CREATE TABLE user6 (id int, name varchar(20) not null);
-- desc user6;

-- 默认约束

-- CREATE TABLE user7(id int,name varchar(20),age int DEFAULT 10);
-- desc user7;

-- 安装指定字段及顺序对应关系插入数据
-- INSERT INTO user7 (id,name) VALUES(1,'zs');
-- SELECT * FROM user7;

-- 外键约束 父子表

-- CREATE TABLE class(id int PRIMARY KEY  auto_increment , name VARCHAR(20));
-- DESC class;
-- ALTER TABLE class MODIFY id int PRIMARY KEY;

-- INSERT INTO class (name) VALUES('一班');
-- INSERT INTO class (name) VALUES('二班');
-- INSERT INTO class (name) VALUES('三班');
-- INSERT INTO class (name) VALUES('四班');

-- SELECT * FROM class;

-- desc class;

-- drop table class;

-- CREATE TABLE student (
-- 	id int PRIMARY KEY,
-- 	NAME varchar(20),
-- 	class_id int,
-- 	FOREIGN KEY (class_id) REFERENCES class(id)
-- );
-- desc student;

-- INSERT INTO student VALUES(1001,'张三',1);
-- INSERT INTO student VALUES(2001,'张三',2);
-- INSERT INTO student VALUES(3001,'张三',3);
-- INSERT INTO student VALUES(4001,'张三',4);
-- SELECT * FROM student;

-- INSERT INTO student VALUES(5001,'张三',5);
-- DELETE FROM class WHERE id=4;

-- alter table user add id int primary key auto_increment;
-- desc user;
-- alter table user drop id;

-- desc user;
-- alter TABLE user drop INDEX id;

-- alter TABLE user add unique(name);
-- desc user;

-- ALTER TABLE user DROP INDEX name;
-- desc user;
-- alter TABLE user drop PRIMARY KEY;

-- alter TABLE user add

-- SHOW CREATE TABLE class;
-- SHOW CREATE TABLE student;

-- CREATE TABLE `student` (
--   `id` int NOT NULL,
--   `name` varchar(20) DEFAULT NULL,
--   `class_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `class_id` (`class_id`),
--   CONSTRAINT `student_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8

-- ALTER TABLE student DROP FOREIGN KEY student_ibfk_1;

-- CREATE TABLE `student` (
--   `id` int NOT NULL,
--   `name` varchar(20) DEFAULT NULL,
--   `class_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `class_id` (`class_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8


-- alter TABLE user add UNIQUE(id);
-- alter TABLE user add UNIQUE(name);
-- ALTER TABLE user drop index id;
-- desc user;
-- alter table locstock add foreign key locstock_ibfk2(stockid) references product(stockid)

-- ALTER TABLE student add FOREIGN KEY student_ibfk_1(class_id) REFERENCES class(id);

-- desc class;
-- desc student;
-- ALTER TABLE student DROP INDEX class_id;
-- SELECT * from class;
-- DELETE from class WHERE id=4;
-- ALTER TABLE student DROP FOREIGN KEY student_ibfk_1;
-- desc student;

-- CREATE TABLE s (id int, s_no int );

-- ALTER TABLE s add PRIMARY KEY(id);
-- ALTER TABLE s MODIFY id int auto_increment;
-- ALTER TABLE s MODIFY id int;
-- ALTER TABLE s MODIFY id int not null;
-- ALTER TABLE s MODIFY s_no int DEFAULT 10;
-- create table s1 (id int unique,  name varchar(20));

-- ALTER TABLE s add num int;
-- ALTER TABLE s drop num;
-- desc s;

-- CREATE TABLE s2(id int PRIMARY KEY auto_increment);
-- ALTER TABLE s2 add num int;
-- desc s2;

-- INSERT INTO s2 (num) values(12);
-- INSERT INTO S2 VALUES(,134);

-- SELECT * from s2;

-- CREATE TABLE s3(id int PRIMARY KEY,num int);
-- desc S3;

-- INSERT INTO S3 VALUES(3,null);
-- SELECT * FROM S3;

-- RENAME TABLE s3 to s4;

-- SELECT * FROM S3;
-- SELECT * FROM S4;
```

## search

```sql
-- 学生表 Student
-- 学号
-- 姓名
-- 性别
-- 出生年月日
-- 所在班级
-- CREATE TABLE student (
-- 	sno VARCHAR ( 20 ) PRIMARY KEY,
-- 	sname VARCHAR ( 20 ) NOT NULL,
-- 	ssex VARCHAR ( 10 ) NOT NULL,
-- 	sbirthday datetime,
-- 	class VARCHAR ( 20 )
-- )

-- 教师表 Teacher
-- 教师编号
-- 教师姓名
-- 教师性别
-- 出生年月日
-- 职称
-- 所在部门
-- CREATE TABLE teacher (
-- 	tno VARCHAR ( 20 ) PRIMARY KEY,
-- 	tname VARCHAR ( 20 ) NOT NULL,
-- 	tsex VARCHAR ( 10 ) NOT NULL,
-- 	tbirthday datetime,
-- 	prof VARCHAR ( 20 ) NOT NULL,
-- 	depart VARCHAR ( 20 ) NOT NULL
-- );


-- 课程表 Course
-- 课程号
-- 课程名称
-- 教师编号
-- CREATE TABLE course(
-- 	cno VARCHAR(20) PRIMARY KEY,
-- 	cname VARCHAR(20) not null,
-- 	tno VARCHAR(20) not null,
-- 	FOREIGN KEY (tno) REFERENCES teacher(tno)
-- );

-- 成绩表 Score
-- 学号
-- 课程号
-- 成绩
-- CREATE TABLE score(
-- 	sno VARCHAR(20) not null,
-- 	cno VARCHAR(20) not null,
-- 	degree DECIMAL,
-- 	FOREIGN KEY(sno) REFERENCES student(sno),
-- 	FOREIGN KEY(cno) REFERENCES course(cno),
-- 	primary key(sno, cno)
-- );



-- INSERT INTO student VALUES('101','张强','男','1993-09-12','95033');
-- INSERT INTO student VALUES('102','道明','男','1993-07-26','95033');
-- INSERT INTO student VALUES('103','资源','男','1993-04-20','95033');
-- INSERT INTO student VALUES('104','学友','男','1993-02-26','95033');
-- INSERT INTO student VALUES('105','克强','男','1995-08-13','95033');
-- INSERT INTO student VALUES('106','王芳','女','1993-06-27','95033');
-- INSERT INTO student VALUES('107','燕子','女','1994-01-06','95032');
-- INSERT INTO student VALUES('108','张晓光','男','1994-01-06','95033');
-- INSERT INTO student VALUES('109','李艳丽','女','1994-01-06','95033');

-- INSERT INTO teacher VALUES('801','李斌','男','1964-01-06','教授','计算机系');
-- INSERT INTO teacher VALUES('802','张雪','女','1974-01-06','讲师','电子工程系');
-- INSERT INTO teacher VALUES('803','谢刚','男','1984-01-06','副教授','计算机系');
-- INSERT INTO teacher VALUES('804','王莽','男','1976-01-06','讲师','电子工程系');

-- INSERT INTO course VALUES('3-105','计算机导论','801');
-- INSERT INTO course VALUES('3-245','操作系统','803');
-- INSERT INTO course VALUES('6-166','数字电路','802');
-- INSERT INTO course VALUES('7-136','高等数学','804');

-- INSERT INTO score VALUES('103','3-105','86');
-- INSERT INTO score VALUES('103','3-245','72');
-- INSERT INTO score VALUES('103','7-136','68');
-- INSERT INTO score VALUES('105','6-166','98');
-- INSERT INTO score VALUES('105','3-245','72');
-- INSERT INTO score VALUES('105','7-136','54');
-- INSERT INTO score VALUES('109','6-166','86');
-- INSERT INTO score VALUES('109','3-245','72');
-- INSERT INTO score VALUES('109','7-136','88');
-- INSERT INTO score VALUES('104','3-105','69');
-- INSERT INTO score VALUES('104','6-166','72');
-- INSERT INTO score VALUES('104','7-136','81');

-- SELECT * FROM student;
-- SELECT * FROM teacher;
-- SELECT * FROM course;
-- SELECT * FROM score;

-- 1. student所有记录
-- SELECT * FROM student;

-- 2. student所有记录中的sname,ssex,class列
-- SELECT sname,ssex,class FROM student;

-- 3. 查询教师所有单位不重复的depart列  distinct
-- SELECT DISTINCT depart FROM teacher;

-- 4. 查询成绩在60-80之间的所有记录 between and 包含两头
-- SELECT * FROM score WHERE degree BETWEEN 60 and 80;
-- SELECT * FROM score WHERE degree > 60 and degree < 80;

-- 5. 查询score表中成绩为85,86或88的记录 in
-- SELECT  * FROM score WHERE degree in(85,86,88);

-- 6. 查询student表中"95031"或者性别为“女”的所有记录
-- SELECT * FROM student WHERE class='95031' or ssex='女';

-- 7. 以class降序查询student表中所有记录 asc desc
-- SELECT * FROM student order by class DESC;

-- 8. 以cno升序、degree降序查询score表中所有记录
-- SELECT * FROM score ORDER BY cno asc, degree desc;

-- 9、查询“95031”班的学生人数 count()
-- SELECT count(*) FROM student WHERE class = '95031';

-- 10、查询score表中的最高分的学生学号和课程号。（子查询或排序） max
-- SELECT sno,cno FROM score WHERE degree = (SELECT MAX(degree) FROM score);
-- 若只查询单个，可使用排序 limit startIndex, num;
-- SELECT sno,cno,degree FROM score ORDER BY degree desc LIMIT 0,1;


-- 11. 查询没门课程的平均成绩 GROUP BY & avg
-- SELECT * FROM course;
-- SELECT AVG(degree) FROM score WHERE cno = '3-105';
-- SELECT degree FROM score WHERE cno = '3-105';

-- SELECT cno,AVG(degree) FROM score GROUP BY cno;


-- 12. 查询score表中至少有二名学生选修的并以3开头的课程的平均分  having like
-- SELECT cno,avg(degree),count(*) FROM score GROUP BY cno HAVING COUNT(*)>=2 AND cno like '3%';


-- 13. 查询分数大于70,小于90的sno列
-- SELECT degree,cno FROM score WHERE degree>70 and degree<90;


-- 多表查询
-- 14. 查询所有学生的sname,cno 和degree列;
-- SELECT sno,sname FROM student;
-- SELECT sno,cno,degree FROM score;
-- SELECT sname,cno,degree FROM student,score WHERE student.sno = score.sno;


-- 15.查询所有学生的sno, cname, degree列
-- SELECT sno, cname, degree FROM course,score WHERE course.cno = score.cno;


-- 16.查询所有的学生 sname , cname, degree列
-- SELECT sname,cname,degree FROM student,course,score WHERE score.sno = student.sno AND score.cno = course.cno;
-- SELECT sname,cname,degree,score.sno as sc_sno,student.sno,score.cno as sc_cno,course.cno FROM student,course,score WHERE score.sno = student.sno AND score.cno = course.cno;

-- 17.查询班级是'95031'班学生每门课的平均分
-- SELECT sno FROM student WHERE class = '95031';
-- SELECT * FROM score WHERE sno in (SELECT sno FROM student WHERE class = '95031');
-- SELECT cno,avg(degree) FROM score WHERE sno in (SELECT sno FROM student WHERE class = '95031') GROUP BY cno;

-- 18.查询选修"3-105"课程的成绩高于'109'号同学'3-105'成绩 的所有同学的记录
-- SELECT * FROM score WHERE degree > (SELECT degree FROM score WHERE cno = '3-105' and sno = '109') AND cno = '3-105';


-- 19.查询成绩高于学号为'109',课程号为'3-105'的成绩的所有记录
-- SELECT * FROM score WHERE degree > (SELECT degree FROM score WHERE cno = '3-105' and sno = '109');

--  20.查询所有学号为108.101的同学同年出生的所有学生的sno,sname和sbirthday
-- SELECT sbirthday FROM student WHERE sno in('108','101');
-- SELECT sno,sname,sbirthday FROM student WHERE sbirthday in (SELECT sbirthday FROM student WHERE sno in('108','101'));

-- 21.查询 张旭 教师任课的学生的成绩
-- SELECT tno FROM teacher WHERE tname = '张旭';
-- SELECT cno FROM course WHERE course.tno = (SELECT tno FROM teacher WHERE tname = '张旭');
-- SELECT * FROM score WHERE cno = (SELECT cno FROM course WHERE course.tno = (SELECT tno FROM teacher WHERE tname = '张旭'));

-- 22.查询选修课程的同学人数多余 3 人的教师姓名
-- SELECT cno from score GROUP BY cno HAVING count(*)>3;
-- SELECT tno FROM course WHERE cno = (SELECT cno from score GROUP BY cno HAVING count(*)>3);
-- SELECT * FROM teacher WHERE tno = (SELECT tno FROM course WHERE cno = (SELECT cno from score GROUP BY cno HAVING count(*)>3));

-- 23.查询95033班和95031班全体学生的记录
-- SELECT * FROM student WHERE class in ('95033','95031');

-- 24.查询存在85分以上成绩的课程cno
-- SELECT cno FROM score WHERE degree > 85 GROUP BY cno;

-- 25.查出所有'计算机系' 教师所教课程的成绩表
-- SELECT tno FROM teacher WHERE depart = '计算机系';
-- SELECT cno FROM course WHERE tno in (SELECT tno FROM teacher WHERE depart = '计算机系');
-- SELECT * FROM score WHERE cno in (SELECT cno FROM course WHERE tno in (SELECT tno FROM teacher WHERE depart = '计算机系'));

-- 26.查询'计算机系'与'电子工程系' 不同职称的教师的name和rof
-- SELECT prof FROM teacher WHERE depart = '电子工程系' GROUP BY prof;
-- SELECT * FROM teacher WHERE depart ='计算机系' and prof NOT IN (SELECT prof FROM teacher WHERE depart = '电子工程系' GROUP BY prof);

-- 27 查询选修编号为"3-105"课程且成绩至少高于选修编号为'3-245'同学的c_no,s_no和sc_degree,并且按照sc_degree从高到地次序排序
-- SELECT degree FROM score WHERE cno = '3-245';
-- SELECT * FROM score WHERE cno = '3-105' and degree > ANY(SELECT degree FROM score WHERE cno = '3-245');

-- 28.查询选修编号为"3-105"且成绩高于选修编号为"3-245"课程的同学c_no.s_no和sc_degree
-- SELECT * FROM score WHERE cno = '3-105' and degree > ALL(SELECT degree FROM score WHERE cno = '3-245');

-- 总结: ANY 和 ALL
-- ANY:表示任何一个就行了,如;数组A中的值比数组B中任何一个都要大,那么只要A和B中最小的比较就行了.
-- ALL:表示所有都要比较,如:数组A中的值比数组B中所有的数都要大,那么A要和B中最大的值比较才行.

-- 29. 查询所有教师和同学的 name ,sex, birthday
-- SELECT tname as name, tsex as sex, tbirthday as birthday FROM teacher
-- UNION
-- SELECT sname as name, ssex as sex, sbirthday as birthday FROM student;

-- 30. 查询性别为女的所有教师和同学的 name ,sex, birthday
-- SELECT tname as name, tsex as sex, tbirthday as birthday FROM teacher WHERE tsex = '女'
-- UNION
-- SELECT sname as name, ssex as sex, sbirthday as birthday FROM student WHERE ssex = '女';

-- 31.查询成绩比该课程平均成绩低的同学的成绩表 分表查询
-- SELECT cno,avg(degree) FROM score GROUP BY cno;
-- SELECT * FROM score a WHERE degree < (SELECT AVG(degree) FROM score b WHERE a.cno = b.cno) ORDER BY cno;

-- 32.查询所有任课教师的t_name 和 t_depart(要在course表中可以查得到)
-- SELECT tno FROM course GROUP BY tno;
-- SELECT * FROM teacher WHERE tno in (SELECT tno FROM course GROUP BY tno);

-- 33.查出至少有2名男生的班号
-- SELECT class,count(*) FROM student WHERE ssex = '男' GROUP BY class HAVING count(*)>1;

-- 34.查询student 表中 不姓"王"的同学的记录
-- SELECT * FROM student WHERE sname not LIKE '王%';

-- 35. 查询student 中每个学生的姓名和年龄(当前时间 - 出生年份)
-- select *,year(now()) FROM student;
-- SELECT sname,YEAR(now()) - YEAR(sbirthday) as age FROM student;

-- 36. 查询student中年龄最大和最小的 s_birthday的值
-- SELECT MIN(sbirthday) as max, max(sbirthday) as min FROM student;

-- 37.以班级号和年龄从大到小的顺序查询student表中的全部记录
-- SELECT * FROM student ORDER BY class desc,sbirthday;

-- 38.查询"男"教师 及其所上的课
-- SELECT * FROM teacher WHERE tsex = '男';
-- SELECT * FROM course WHERE tno in (SELECT tno FROM teacher WHERE tsex = '男')

-- 39.查询最高分同学的s_no c_no 和 sc_degree;
-- SELECT max(degree) FROM score;
-- SELECT * FROM score WHERE degree = (SELECT max(degree) FROM score);

-- 40. 查询和"李军"同性别的所有同学的s_name
-- SELECT * FROM student;
-- SELECT ssex FROM student WHERE sname = '李军';
-- SELECT * FROM student WHERE ssex = (SELECT ssex FROM student WHERE sname = '李军');

-- 41.查询和"李军"同性别并且同班的所有同学的s_name
-- SELECT * FROM student
-- WHERE ssex = ( SELECT ssex FROM student WHERE sname = '李军')
-- AND class = ( SELECT class FROM student WHERE sname = '李军');


-- 42. 查询所有选修'计算机导论'课程的'男'同学的成绩表
-- SELECT * FROM student WHERE ssex = '男';
-- SELECT * FROM course WHERE cname = '计算机导论';
-- SELECT * FROM score
-- WHERE cno = (SELECT cno FROM course WHERE cname = '计算机导论')
-- AND sno in (SELECT sno FROM student WHERE ssex = '男');


-- CREATE TABLE grade(
-- 	low int,
-- 	up int,
-- 	grade CHAR(1)
-- );
--
-- INSERT INTO grade VALUES(90,100,'A');
-- INSERT INTO grade VALUES(80,89,'B');
-- INSERT INTO grade VALUES(70,79,'C');
-- INSERT INTO grade VALUES(60,69,'D');
-- INSERT INTO grade VALUES(0,59,'E');
-- SELECT * FROM grade;

-- 43. 查询所有同学的s_no , c_no 和grade列
SELECT sno,cno,grade FROM score,grade WHERE degree BETWEEN low AND up ORDER BY grade;

-- SELECT * FROM student;
```

## join

```sql
-- CREATE TABLE person(
-- 	id int,
-- 	name VARCHAR(20),
-- 	cardId int
-- );
--
-- CREATE TABLE card(
-- 	id int,
-- 	name VARCHAR(20)
-- );
--
-- INSERT into card VALUES (1,'饭卡');
-- INSERT into card VALUES (2,'建行卡');
-- INSERT into card VALUES (3,'交行卡');
-- INSERT into card VALUES (4,'工行卡');
-- INSERT into card VALUES (5,'农行卡');
--
-- INSERT INTO person VALUES (1,'张三',1);
-- INSERT INTO person VALUES (2,'李四',2);
-- INSERT INTO person VALUES (3,'王五',6);

--  SELECT * FROM person;
--  SELECT * FROM card;

-- SELECT * FROM person INNER JOIN card on person.cardId = card.id;
-- SELECT * FROM person JOIN card on person.cardId = card.id;

-- SELECT * FROM person LEFT JOIN card on person.cardId = card.id;
-- SELECT * FROM person LEFT OUTER JOIN card on person.cardId = card.id;


-- SELECT * FROM person RIGHT JOIN card on person.cardId = card.id;
-- SELECT * FROM person RIGHT OUTER JOIN card on person.cardId = card.id;

-- 不支持 FULL JOIN
-- SELECT * FROM person FULL JOIN card on person.cardId = card.id;

-- 使用左右连接 + union 实现 full jion
-- SELECT * FROM person LEFT JOIN card on person.cardId = card.id
-- UNION
-- SELECT * FROM person RIGHT JOIN card on person.cardId = card.id;

-- 事务

-- 查询自动提交是否开启  1/开启
-- SELECT @@autocommit;

-- 设置自动提交
-- set autocommit=1;

-- 手动提交
-- commit;

-- 回滚
-- rollback；


-- set autocommit=0;
-- set autocommit=1;
-- CREATE TABLE s (id int);
-- show tables;
-- INSERT INTO s VALUES(2);
-- ROLLBACK;
-- COMMIT;

-- SELECT * FROM s;

-- drop TABLE s;
-- SHOW tables;
-- CREATE TABLE bank (
-- 	id int,
-- 	money int
-- );

-- begin;
-- update bank set money=money-100 where id=1;
-- update bank set money=money+100 where id=2;
-- rollback;
-- SELECT * FROM bank;
--
-- start transaction;
-- update bank set money=money-100 where id=1;
-- update bank set money=money+100 where id=2;
-- rollback;
-- SELECT * FROM bank;
```
