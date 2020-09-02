# error

## Cannot create namespace game_mall.log_order_status in multi-document transaction.

由于事务不能在不存在的集合上进行，所以要进行事务的集合必须已经创建。如果集合没有创建，就会报这个异常。
解决方案是在先把集合创建好，再开启事务

可尝试如下方法：
db.createCollection("xxx")
