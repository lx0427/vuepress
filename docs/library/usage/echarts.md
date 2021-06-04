# echarts

## 常见问题

### map数据源

[datav](http://datav.aliyun.com/tools/atlas/#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5)

### 重新渲染保持原有渲染配置

> geo相关处理
```js
this.myChart.on('georoam', (params) => {
    // 如果是拖拽事件, params.dy和params.dx有值
    this.geoOption = this.myChart.getOption().geo[0];
});
this.mapOption.geo = this.geoOption;
this.myChart.setOption(this.mapOption);
```

> map相关处理
```js
this.myChart.on('georoam', (params) => {
    // seriesGeneralOption 合并到 series 配置中
    this.seriesGeneralOption = this.myChart.getOption().series[0];
});
```

### 地图展示区域resize

```js
window.addEventListener('resize', () => {
    this.myChart.resize()
});
```

### 地图展示样式切换

```js
// true => noMerge:true 不进行选项合并，使用覆盖方式
this.myChart.setOption(this.mapOption, true);
```