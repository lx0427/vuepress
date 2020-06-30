# 规则记录

## 逸控代订单

1. 下单
2. 业务员：融资管理 - 融资管理 - 融资审核
3. 内勤审核

   ```sql
   -- 查询订单记录
   SELECT FPHM,HYNAME,CDATE,BLSFS,BLLY,HTAMT,WBNO00,WBNO01,WBNO02,WBNO03,`STATUS`,STATUS01,HTSTR08 FROM ex_contract ORDER BY CDATE DESC LIMIT 0,20;
   SELECT FPHM,HYDM,AMT,AMT1,AMT2,AMT3,CDATE,JKOPT_CODE,`STATUS`,EXTBILL,HKDATE,SALEMAN_CODE,NEIQINSH_DATE FROM fc_jkqd ORDER BY CDATE DESC LIMIT 0,20;

   -- 内勤审核（确定最新一条是需要审核数据）
   UPDATE ex_contract SET STATUS01 = 5 WHERE FPHM = (SELECT * FROM (SELECT FPHM FROM ex_contract ORDER BY CDATE DESC LIMIT 0,1) as a);
   UPDATE fc_jkqd SET `STATUS` = 5 WHERE FPHM = (SELECT * FROM (SELECT FPHM FROM fc_jkqd ORDER BY CDATE DESC LIMIT 0,1) as a);
   ```

4. 后台：融资模块 - 借款管理 - 审核
5. 客户端：我的融资 - 逸控代订单 - 发货申请（子订单）
6. 业务员：融资管理 - 还款管理 - 还款审核
7. 后台：融资模块 - 还款管理 - 审核
8. 内勤接单

   ```sql
   -- 查询订单详情记录
   SELECT sh_status,SHR_CODE,FPHM,HYDM,CDATE,WZLY,SL1,SL2,PRICE,HTAMT,PM,DQ1,DQ1CODE,DQ2,DQ2CODE,DQ3,DQ3CODE,DQNAME,CZ,GG,CD,LSXS,CK FROM ex_contract_mx ORDER BY CDATE DESC LIMIT 0,20;

   -- 内勤接单（确定最新一条是需要接单数据）
   UPDATE ex_contract_mx SET sh_status = 400 WHERE FPHM = (SELECT * FROM (SELECT FPHM FROM ex_contract_mx ORDER BY CDATE DESC LIMIT 0,1) as a);
   ```

## 纤币发放

1. `积分管理/积分规则设置`中设置次数与额度
2. `积分管理/纤币管理`中点击`商城赠送`

## 限时购

换行规则: 使用`>>`
