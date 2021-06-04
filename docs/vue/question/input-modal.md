# 输入框&弹框联动实现选择

## 初版

> input & modal为同一组件：同一页面多次出现的情况，弹框未复用，导致卡顿

## 使用事件总线实现兄弟组件通信

1. 共用弹框导致触发选择时，不知道去设置哪个input的值
    - 引入current-index，同时选择时返回
2. 涉及多个接口不同，返回字段不同问题
    - 使用传入api方式进行接口调用
    - 使用传入columns方式进行表格展示扩展

## 优化

> modal 中请求默认不触发，input触发on-focus时手动触发
> 事件订阅，需在组件销毁时清除

## 代码


```vue
<template>
    <Input
        :value="value"
        @on-focus="handleOpenServerModel()"
        icon="ios-arrow-down"
        v-bind="$attrs"
    ></Input>
</template>
<script>
export default {
    name: 'TNusringSearch',
    props: {
        value: {
            type: String,
            default: '',
        },
        // 0-nursingStaffFilterTypes 护理人员筛选类型 | 1-medicalStaffFilterTypes 医护人员筛选类型
        jobType: {
            type: Number,
            default: 0,
        },
        currentIndex: {
            type: [Number, null],
            default: null,
        },
        orderNo: {
            type: [Number, String],
        },
    },
    data() {
        return {
            openServerFlag: false,
        };
    },
    methods: {
        // 点击服务人员展示搜索弹框
        handleOpenServerModel() {
            this.$bus.$emit('openServerModalShow', {
                isShow: true,
                jobType: this.jobType,
                currentIndex: this.currentIndex,
                orderNo: this.orderNo,
            });
        },
    },
};
</script>
```

```vue
<template>
    <Modal
        v-model="modalVisible"
        width="1000"
        :mask-closable="false"
        class-name="modal-table"
        @on-cancel="closeModal"
        footer-hide
        title="选择服务人员111"
    >
        <Row :gutter="16" class="modal-query">
            <Col span="6" class="maxWidth">
                <Input
                    v-model="tableQueryAttr.realName"
                    @on-search="search"
                    search
                    placeholder="姓名"
                >
                    <Button
                        @click="search"
                        slot="append"
                        icon="ios-search"
                    ></Button>
                </Input>
            </Col>
            <Col span="6" class="maxWidth">
                <Input
                    v-model="tableQueryAttr.phone"
                    @on-search="search"
                    search
                    placeholder="手机号"
                >
                    <Button
                        @click="search"
                        slot="append"
                        icon="ios-search"
                    ></Button>
                </Input>
            </Col>
            <Col span="6" offset="6">
                <div class="inner-table-search">
                    <Button @click="search" type="primary">查询</Button>
                    <Button @click="reset" style="margin-left: 16px"
                        >重置</Button
                    >
                </div>
            </Col>
        </Row>
        <t-table
            @on-page-no-change="pageNoChange"
            @on-page-size-change="pageSizeChange"
            :columns="columns"
            :data="tableData"
            :loading="tableLoading"
            :total="total"
            :reset-current="tableComAttr.currentPage === 1"
            ><template slot-scope="params" slot="action">
                <div @click="peopleSelect(params.row)" class="action-btn">
                    选择
                </div>
            </template>
        </t-table>
    </Modal>
</template>
<script>
import { queryNurseList } from '@/api/nursing/servicePlan/servicePlan';
import { getAppointUserList } from '@/api/nursing/nursingOrder/nursingOrder.js';
import tableMixin from '@/mixins/tableMixin';
import enumeration from '@/config/enumeration';
export default {
    name: 'OpenServerModel',
    mixins: [tableMixin],
    data() {
        return {
            modalVisible: false,
            columns: [
                {
                    type: 'index',
                    title: '序号',
                },
                {
                    title: '姓名',
                    field: 'realName',
                },
                {
                    title: '性别',
                    field: 'sex',
                    formatter: ({ row }) => {
                        return row.sex === 0
                            ? '未知'
                            : row.sex === 1
                            ? '男'
                            : '女';
                    },
                    width: 80,
                },
                {
                    title: '职业',
                    field: 'jobDesc',
                    width: 100,
                },
                {
                    title: '联系电话',
                    field: 'phone',
                    width: 140,
                },
                {
                    title: '身份证',
                    field: 'idCard',
                },
                {
                    title: '护理机构',
                    field: 'orgName',
                },
                {
                    title: '操作',
                    render: 'action',
                    type: 'action',
                    width: 120,
                },
            ],
            tableQueryAttr: {
                realName: '',
                phone: '',
            },
            tableFlag: true,
            currentIndex: null,
            jobTypeMap: {
                0: enumeration.nursingStaffFilterTypes,
                1: enumeration.medicalStaffFilterTypes,
            },
            jobIds: '',
            orderNo: '', // 工单id
        };
    },
    created() {
        // 监听输入框点击
        this.$bus.$on('openServerModalShow', (params) => {
            const { isShow, currentIndex, jobType = 0, orderNo } = params;
            this.modalVisible = isShow;
            this.currentIndex = currentIndex;
            this.jobIds = this.jobTypeMap[jobType];
            this.orderNo = orderNo;
            if (isShow) {
                this.reset();
                this.search();
            }
        });
    },
    methods: {
        // 点击选择按钮
        peopleSelect(row) {
            this.$emit('select', { ...row, currentIndex: this.currentIndex });
            this.closeModal();
        },
        closeModal() {
            this.modalVisible = false;
        },
        async getTableList() {
            this.getTableListFn(async (getListMixin) => {
                const params = {
                    ...this.tableQueryAttr,
                    ...this.tableComAttr,
                };
                let res;
                if (this.orderNo) {
                    params.id = this.orderNo;
                    res = await getAppointUserList(params);
                } else {
                    params.jobIds = this.jobIds;
                    res = await queryNurseList(params);
                }
                if (res.code === this.code) getListMixin(res);
            });
        },
    },
    beforeDestroy() {
        this.$bus.$off('openServerModalShow');
    },
};
</script>
```
