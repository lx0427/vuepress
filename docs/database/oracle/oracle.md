# oracle

## 本地 oracle 环境

1.  [下载地址](https://www.oracle.com/database/technologies/oracle-database-software-downloads.html)
2.  下载 12 版本，file1 + file2, 解压, 合并解压后的 database
3.  双击 database/setup.exe
4.  去掉更新勾选，下一步
5.  电子邮件弹框，是
6.  仅安装数据库软件，下一步
7.  单实例数据库安装，下一步
8.  语言，下一步
9.  标准版，下一步
10. 创建 window 账户，admin/123456, 下一步
11. 安装路径，D:\Oracle, 下一步
12. 安装
13. 配置环境变量

    ```bash
    ORACLE_BASE=E:\oracle_base
    ORACLE_HOME=E:\oracle_base\product\12.1.0\dbhome_1
    ORACLE_SID=ORCL
    ```

14. 创建数据库，cmd `dbca`
15. 创建数据库
16. 信息填写

    ```bash
    数据库名 ORCL
    管理口令 Aini123456
    确认口令 Aini123456
    admin 口令 123456
    # 去掉创建为容器数据库，下一步
    ```

17. 创建报错

    ```bash
    用 net configuration assistant 添加监听程序；
    用系统管理员身份运行database configuration assistant 创建数据库。
    ```

18. orcacle/sql developTool

    ```bash
    scott/tiger
    scott/Aini123456
    system/Aini123456
    ```

19. 密码锁定

    ```bash
    sqlplus
    # 用户名
    system
    # 口令
    Aini123456
    # 连接数据库
    conn sys/sys as sysdba
    # 解锁用户
    alter user scott account unlock;
    # 提交
    commit;
    ```

## node-oracle

> [环境搭建原文](https://www.cnblogs.com/rysinal/p/7779055.html)

## 问题

### ORA-12514: TNS: 监听程序当前无法识别连接描述符中请求的服务

1. oracle/net manage/本地/服务命名/orcl
2. 左侧-测试按钮/测试账号连接是否成功
3. listener/tcpIp

   ```bash
    # 本地ip
    192.168.0.52
    # 端口
    1521
   ```

### ORA-00942: 表或视图不存在

> 检查数据库连接
