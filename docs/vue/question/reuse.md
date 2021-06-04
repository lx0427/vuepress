# 组件复用导致的问题

## 问题重现

`slot-com.vue`
```vue
<template>
    <div>
        <h1>{{ title }}</h1>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
    },
};
</script>
```

`index.vue`
```vue
<template>
    <div>
        <slot-com :title="title" v-if="type === 2">
            <Form
                ref="formValidate"
                :model="formValidate"
                :rules="ruleValidate"
                :label-width="80"
            >
                <FormItem label="Name1" prop="name">
                    <Input
                        v-model="formValidate.name"
                        placeholder="Enter your name"
                    ></Input>
                </FormItem>
            </Form>
        </slot-com>
        <slot-com :title="title" v-if="type !== 2">
            <Form
                ref="formValidate1"
                :model="formValidate1"
                :rules="ruleValidate1"
                :label-width="80"
            >
                <FormItem label="Name2" prop="name">
                    <Input
                        v-model="formValidate1.name"
                        placeholder="Enter your name"
                    ></Input>
                </FormItem>
            </Form>
        </slot-com>
        <slot-com :title="title">
            <Form
                ref="formValidate2"
                :model="formValidate2"
                :rules="ruleValidate2"
                :label-width="80"
            >
                <FormItem label="Name" prop="name">
                    <Input
                        v-model="formValidate2.name"
                        placeholder="Enter your name"
                    ></Input>
                </FormItem>
            </Form>
        </slot-com>
    </div>
</template>
<script>
import SlotCom from './slot-com';
export default {
    components: {
        SlotCom,
    },
    mounted () {
        setTimeout(() => {
            this.type = 2
        }, 1000);
    },
    data() {
        return {
            type: '',
            title: '参保人',
            formValidate: { name: '' },
            ruleValidate: {
                // name: [{ required: true }],
            },
            formValidate1: { name: '' },
            ruleValidate1: {
                name: [{ required: true }],
            },
            formValidate2: { name: '' },
            ruleValidate2: {
                name: [{ required: true }],
            },
        };
    },
};
</script>
```

## 问题描述

> 组件复用导致rules对应错乱

## 解决方案

1. slot-com添加key
2. Form添加key
3. v-if改为v-show