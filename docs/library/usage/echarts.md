# echarts

## 常见问题

### 地图数据渲染

> label 默认使用`cp`参数设置，若无，则使用`经纬度矩形中心点经纬度`

### map 数据源

[datav 最多直到市级区域](http://datav.aliyun.com/tools/atlas/#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5)

### 获取当前渲染配置

> geo 相关处理

```js
this.geoOption = this.myChart.getOption().geo[0];
```

> map 相关处理

```js
this.seriesGeneralOption = this.myChart.getOption().series[0];
```

### 样式切换，使用配置覆盖方式

```js
// true => noMerge:true 不进行选项合并，使用覆盖方式
this.myChart.setOption(this.mapOption, true);
```

### 生成区域内随机经纬度

```js
this.geoComponent = this.myChart
  .getModel()
  .getComponent("geo").coordinateSystem;

// 调用返回经纬度
generatePointLAL(this.geoComponent, orgArea);
```

```js
/**
 * 生成指定区域内随机点
 * @param {*} geo 当前地图组件
 * @param {*} areaName 区域名称
 * @returns [lon,lat]
 */
export const generatePointLAL = (geo, areaName) => {
  var region = geo.getRegion(areaName);
  var rect = region.getBoundingRect();
  var coord = [Infinity, Infinity];
  while (!region.contain(coord)) {
    coord[0] = rect.x + Math.random() * rect.width;
    coord[1] = rect.y + Math.random() * rect.height;
  }
  return coord;
};
```

### 地图区域文案及标注的重叠

> 根据缩放比例控制需要展示的 label

```js
// geo
/**
 * 生成geo组件，区域label重叠处理
 * @param {*} echartInstance 当前地图实例
 * @returns regions
 */
export const generateRegionsByZoom = (echartInstance) => {
  let regions = [
    { name: "滨海新区" },
    { name: "西青区" },
    { name: "河东区" },
    { name: "津南区" },
    { name: "东丽区" },
    { name: "红桥区" },
    { name: "蓟州区" },
    { name: "静海区" },
    { name: "河北区" },
    { name: "北辰区" },
    { name: "武清区" },
    { name: "宝坻区" },
    { name: "宁河区" },
    { name: "南开区" },
    { name: "河西区" },
    { name: "和平区" },
  ];
  let option = echartInstance.getOption();
  let zoom = option ? option.geo[0].zoom : 1.2;
  return regions.map((v) => {
    if (v.name === "南开区") {
      v.label = { show: zoom >= 1.45 };
    } else if (["河北区", "和平区"].includes(v.name)) {
      v.label = { show: zoom >= 2.6 };
    } else {
      v.label = { show: true };
    }
    return v;
  });
};
```

> 通过标注定位位置控制标注点的显示

```js
/**
 * 根据放大比例控制标注点的显示或隐藏
 * @param {*} data 需要展示的数据
 * @param {*} echartInstance 当前地图实例
 * @returns
 */
export const convertData = (data, echartInstance) => {
  let option = echartInstance.getOption();
  let zoom = option ? option.geo[0].zoom : 1.2;
  var res = [];
  for (var i = 0; i < data.length; i++) {
    let name = data[i].name;
    var geoCoord = geoCoordMap[name];
    if (geoCoord) {
      if (name === "南开区") {
        geoCoord = zoom >= 1.45 ? geoCoord : [0, 0];
      } else if (["河北区", "和平区"].includes(name)) {
        geoCoord = zoom >= 2.6 ? geoCoord : [0, 0];
      }
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};
```

### 自定义工具栏

> 通过 dom 定位的方式自定义，配合 setOption 控制地图切换

## Event

### 图表视图需重置

```js
this.myChart.clear();
```

### 监听拖拽滚动事件

```js
this.myChart.on("georoam", (params) => {
  // 如果是拖拽事件, params.dy和params.dx有值
  // 如果是缩放事件, params.dy和params.dx为undefined
});
```

### resize 影响图表渲染

```js
this.resizeEvent = () => {
  this.myChart.resize();
};
window.addEventListener("resize", this.resizeEvent);
```

> 组件销毁时，需清理

```js
window.removeEventListener("resize", this.resizeEvent);
```

### 禁止将图表拖出视图区域

> 全局监听鼠标事件，移除图表区域

```js
this.resizeEvent = () => {
  this.myChart.resize();
  // 视口变化需重新获取图表数据
  this.$nextTick(() => {
    this.mapPosition = this.$refs.geoMap.getClientRects()[0];
  });
};
this.mousedownEvent = (event) => {
  if (event.path[0].tagName === "CANVAS") {
    this.isDrag = true;
  }
};
this.mousemoveEvent = (event) => {
  let { x, y } = event;
  let { top, left, right, bottom } = this.mapPosition;
  if (this.isDrag && (x <= left || x >= right || y <= top || y >= bottom)) {
    this.isDrag = false;
    this.drawMap();
  }
};
this.mouseupEvent = (event) => {
  this.isDrag = false;
};
window.addEventListener("resize", this.resizeEvent);
window.addEventListener("mousedown", this.mousedownEvent);
window.addEventListener("mousemove", this.mousemoveEvent, true);
window.addEventListener("mouseup", this.mouseupEvent);
```

> 组件销毁时，需清理

```js
window.removeEventListener("resize", this.resizeEvent);
window.removeEventListener("mousedown", this.mousedownEvent);
window.removeEventListener("mousemove", this.mousemoveEvent);
window.removeEventListener("mouseup", this.mouseupEvent);
```

## 其他工具方法

### 获取地图矩形中心点经纬度

```js
export const getCenter = (geoJson) => {
  let temp = [];
  let map = {};
  let { features } = geoJson;
  features.forEach((v) => {
    // map[v.properties.name] = {
    //     oldCenter: v.properties.center,
    //     center: getcoordinates(v.geometry.coordinates),
    //     // coordinates: getcoordinates(v.geometry.coordinates),
    //     // coordinates: getcoordinates(v.geometry.coordinates).length,
    // }
    map[v.properties.name] = getcoordinates(v.geometry.coordinates);
    temp.push({
      name: v.properties.name,
      value: getcoordinates(v.geometry.coordinates),
    });
  });
  console.log(JSON.stringify(map));
  console.log(JSON.stringify(temp));
  return temp;
};

function getcoordinates(list) {
  let temp = [];
  let minx = 1000;
  let maxx = 0;
  let miny = 1000;
  let maxy = 0;
  list.forEach((arr) => {
    arr.forEach((el) => {
      el.forEach((v) => {
        if (minx > v[0]) {
          minx = v[0];
        }
        if (maxx < v[0]) {
          maxx = v[0];
        }
        if (miny > v[1]) {
          miny = v[1];
        }
        if (maxy < v[1]) {
          maxy = v[1];
        }
        temp.push(v);
      });
    });
  });
  // return [[minx, maxx], [miny, maxy]]
  return [(minx + maxx) / 2 - 0.06, (miny + maxy) / 2 - 0.04];
}
```
