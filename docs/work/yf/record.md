# 记录

## webim用户转化
:::tip
页面埋值：片区(districtName)，小区名(houseName)，小区id(houseId)或小区pinyin
:::

### 未登录逻辑
1. 未登录
2. 点击打开弹框
3. 在弹框中埋入指定data-im='1'
4. 在登录逻辑中加入判断，异化处理登录 => 登录完成,拿到用户信息，调用接口

### 登录逻辑

* 获取用户信息，调用接口，跳转页面
* ucm_curUrl => 跳转url