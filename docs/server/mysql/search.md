# 查询

## 属性

### 所有数据

```sql
SELECT * FROM student;
```

### 指定列

```sql
SELECT sname,ssex,class FROM student;
```

### like

```sql
SELECT cno,avg(degree),count(*) FROM score GROUP BY cno
HAVING COUNT(*)>=2 AND cno like '3%';
```

### no like

```sql
SELECT * FROM student WHERE sname not LIKE '王%';
```

### or

```sql
SELECT * FROM student WHERE class='95031' or ssex='女';
```

### having

```sql
SELECT cno,avg(degree),count(*) FROM score GROUP BY cno
HAVING COUNT(*)>=2 AND cno like '3%';
```

### order by

- asc：升序
- desc：降序

```sql
SELECT * FROM student order by class DESC;

-- 多字段排序
SELECT * FROM score ORDER BY cno asc, degree desc;
```

### group by

```sql
SELECT cno,AVG(degree) FROM score GROUP BY cno;
```

### between and

```sql
SELECT * FROM score WHERE degree BETWEEN 60 and 80;
SELECT * FROM score WHERE degree > 60 and degree < 80;
```

### limit

```sql
SELECT sno,cno,degree FROM score ORDER BY degree desc LIMIT 0,1;
```

### union

> 查询所有教师和同学的 name ,sex, birthday

```sql
SELECT tname as name, tsex as sex, tbirthday as birthday FROM teacher
UNION
SELECT sname as name, ssex as sex, sbirthday as birthday FROM student;
```

### 多表查询

> 查询所有的学生 sname , cname, degree 列

```sql
SELECT sname,cname,degree,score.sno as sc_sno,student.sno,course.cno
FROM student,course,score
WHERE score.sno = student.sno AND score.cno = course.cno;
```

```
+-----------+-----------------+--------+--------+-----+-------+
| sname     | cname           | degree | sc_sno | sno | cno   |
+-----------+-----------------+--------+--------+-----+-------+
| 李军      | 计算机导论      |     86 | 103    | 103 | 3-105 |
| 李军      | 操作系统        |     87 | 103    | 103 | 3-245 |
| 李军      | 高等数学        |     68 | 103    | 103 | 7-136 |
| 学友      | 计算机导论      |     94 | 104    | 104 | 3-105 |
| 学友      | 数字电路        |     80 | 104    | 104 | 6-166 |
| 学友      | 高等数学        |     81 | 104    | 104 | 7-136 |
| 克强      | 操作系统        |     72 | 105    | 105 | 3-245 |
| 克强      | 数字电路        |     98 | 105    | 105 | 6-166 |
| 克强      | 高等数学        |     54 | 105    | 105 | 7-136 |
| 李艳丽    | 计算机导论      |     60 | 109    | 109 | 3-105 |
| 李艳丽    | 数字电路        |     85 | 109    | 109 | 6-166 |
| 李艳丽    | 高等数学        |     88 | 109    | 109 | 7-136 |
+-----------+-----------------+--------+--------+-----+-------+
12 rows in set (0.09 sec)
```

## 方法

### min

> 查询 student 中年龄最小的 s_birthday 的值

```sql
SELECT MAX(sbirthday) as min FROM student;
```

### max

> 查询 student 中年龄最大的 s_birthday 的值

```sql
SELECT MIN(sbirthday) as max,  FROM student;
```

### in

```sql
SELECT  * FROM score WHERE degree in(85,86,88);
```

### not in

> 查询'计算机系'与'电子工程系' 不同职称的教师的 name 和 rof

```sql
SELECT * FROM teacher WHERE depart ='计算机系' and prof NOT IN (SELECT prof FROM teacher WHERE depart = '电子工程系' GROUP BY prof);
```

### any

> 查询选修编号为"3-105"课程且成绩至少高于选修编号为'3-245'同学的 c_no,s_no 和 sc_degree,并且按照 sc_degree 从高到地次序排序

```sql
SELECT * FROM score WHERE cno = '3-105'
and degree > ANY(SELECT degree FROM score WHERE cno = '3-245');
```

### all

> 查询选修编号为"3-105"且成绩高于选修编号为"3-245"课程的同学 c_no.s_no 和 sc_degree

```sql
SELECT * FROM score WHERE cno = '3-105'
and degree > ALL(SELECT degree FROM score WHERE cno = '3-245');
```

### count

```sql
SELECT count(*) FROM student WHERE class = '95031';
```

### distinct

> 去重

```sql
SELECT DISTINCT(depart)  FROM teacher;
```

### avg

```sql
SELECT cno,AVG(degree) FROM score GROUP BY cno;
```

### year

> 查询 student 中每个学生的姓名和年龄(当前时间 - 出生年份)

```sql
SELECT sname,YEAR(now()) - YEAR(sbirthday) as age FROM student;
```

### 子查询

> 查询 score 表中的最高分的学生学号和课程号

```sql
SELECT sno,cno FROM score WHERE degree = (SELECT MAX(degree) FROM score);
```

## jion

### join

> 与 INNER JOIN 查询结果相同

```sql
SELECT * FROM person INNER JOIN card on person.cardId = card.id;
SELECT * FROM person JOIN card on person.cardId = card.id;
```

```
+------+--------+--------+------+-----------+
| id   | name   | cardId | id   | name      |
+------+--------+--------+------+-----------+
|    1 | 张三   |      1 |    1 | 饭卡      |
|    2 | 李四   |      2 |    2 | 建行卡    |
+------+--------+--------+------+-----------+
2 rows in set (0.00 sec)
```

### left join

> 右侧表无匹配数据显示 null
> 与 LEFT OUTER JOIN 查询结果相同

```sql
SELECT * FROM person LEFT JOIN card on person.cardId = card.id;
```

```
+------+--------+--------+------+-----------+
| id   | name   | cardId | id   | name      |
+------+--------+--------+------+-----------+
|    1 | 张三   |      1 |    1 | 饭卡      |
|    2 | 李四   |      2 |    2 | 建行卡    |
|    3 | 王五   |      6 | NULL | NULL      |
+------+--------+--------+------+-----------+
3 rows in set (0.00 sec)
```

### right join

> 左侧表无匹配数据显示 null
> 与 RIGHT OUTER JOIN 查询结果相同

```sql
SELECT * FROM person RIGHT JOIN card on person.cardId = card.id;
```

```
+------+--------+--------+------+-----------+
| id   | name   | cardId | id   | name      |
+------+--------+--------+------+-----------+
|    1 | 张三   |      1 |    1 | 饭卡      |
|    2 | 李四   |      2 |    2 | 建行卡    |
| NULL | NULL   |   NULL |    3 | 交行卡    |
| NULL | NULL   |   NULL |    4 | 工行卡    |
| NULL | NULL   |   NULL |    5 | 农行卡    |
+------+--------+--------+------+-----------+
5 rows in set (0.00 sec)
```

### full jion 实现

- 不支持 full join

```sql
SELECT * FROM person LEFT JOIN card on person.cardId = card.id
UNION
SELECT * FROM person RIGHT JOIN card on person.cardId = card.id;
```

```
+------+--------+--------+------+-----------+
| id   | name   | cardId | id   | name      |
+------+--------+--------+------+-----------+
|    1 | 张三   |      1 |    1 | 饭卡      |
|    2 | 李四   |      2 |    2 | 建行卡    |
|    3 | 王五   |      6 | NULL | NULL      |
| NULL | NULL   |   NULL |    3 | 交行卡    |
| NULL | NULL   |   NULL |    4 | 工行卡    |
| NULL | NULL   |   NULL |    5 | 农行卡    |
+------+--------+--------+------+-----------+
6 rows in set (0.00 sec)
```
