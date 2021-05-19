# map

## 示例

```vue
<template>
    <div class="map_area" ref="geoMap"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            myChart: null,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.myChart = echarts.init(this.$refs.geoMap);
            let geoJson = require('./tianjin.json');
            echarts.registerMap('tianjin', geoJson);
            this.drawMap();
        },
        async drawMap() {
            let option = {
                backgroundColor: '#000020', // 全局背景
                // 工具栏设置
                legend: {
                    orient: 'vertical',
                    top: 20,
                    left: 20,
                    data: [
                        // 展示信息
                        { name: '失能评估申请' },
                        { name: '符合享受待遇' },
                    ],
                    itemStyle: {
                        color: '#0be5f2', // 选中图标颜色
                    },
                    textStyle: {
                        color: '#0be5f2', // 选中文字颜色
                    },
                    inactiveColor: 'red', // 未选中图标+文字颜色
                    selected: {
                        失能评估申请: false, // key对应系列名称
                        符合享受待遇: true,
                    },
                    selectedMode: 'single', // 单选模式
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a}<br/>{b}<br/>{c} (p / km2)',
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {},
                    },
                },
                geo: {
                    map: 'tianjin', // 对应registerMap名称
                    roam: true, // 控制地图鼠标缩放与移动
                    label: {
                        // 区域label样式控制
                        normal: {
                            show: true,
                            color: '#fff',
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#017fbc',
                        },
                        emphasis: {
                            areaColor: 'orange',
                            borderWidth: 0,
                        },
                    },
                },
            };
            option.series = [
                {
                    name: '失能评估申请', // 系列名称
                    coordinateSystem: 'geo',
                    type: 'effectScatter', // 带涟漪效果标注
                    showEffectOn: 'render', // 显示特效时机
                    // 涟漪特效相关配置
                    rippleEffect: {
                        brushType: 'stroke',
                    },
                    // 设置图标样式
                    itemStyle: {
                        color: 'yellow',
                        shadowBlur: 10,
                        shadowColor: '#333',
                    },
                    symbolSize: 20, // 调整标记图标大小，每个data数据项可单独设置，优先级高于全部设置
                    data: [
                        {
                            name: '蓟州区',
                            value: [6945, 6398], // 数据来源：properties.cp中获取 6945,6418 下移20
                        },
                    ],
                },
                {
                    name: '符合享受待遇',
                    coordinateSystem: 'geo',
                    type: 'scatter',
                    symbol: 'pin', // 调整标记形状
                    symbolSize: 40,
                    legendHoverLink: true, // hover legend时动画效果
                    itemStyle: {
                        color: 'red',
                    },
                    data: [
                        {
                            name: 'hello',
                            value: [6915, 6398],
                        },
                        {
                            name: 'haha',
                            value: [6955, 6358],
                        },
                    ],
                },
            ];
            this.myChart.setOption(option);
        },
    },
};
</script>

<style lang="less" scoped>
.map {
    &_area {
        width: 800px;
        height: 800px;
    }
}
</style>
```