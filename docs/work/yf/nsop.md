# nsop
::: tip 
`nsop`后台项目本地启动
:::

## 本地启动

1. 全局清除环境变量`${staticUrl}`
2. 根据实际调整接口
3. 项目目录：E:\home-base\home-base-web\home-base-backend\src\main\webapp\app
4. 打开`main.html`,使用`live server`,`go live`启动服务

::: danger 
引用第三方插件，使用模块化引用
:::

* 配置文件：`config/main.js`
* 引用时，不要加`.js`

```js
requirejs.config({
  paths: {
    'angularjs-dropdown-multiselect':'/lib/multi-select/angularjs-dropdown-multiselect.min',
  },
  shim: {
    'angularjs-dropdown-multiselect':{
      deps: ['angular'],
      exports: 'angularjs-dropdown-multiselect'
    },
  }
});
require(['angularjs-dropdown-multiselect'],function() {...})
```

* `developer.js`
```js
// module中注入
var dialogpa = angular.module('dialogpa', ['mainApp','angularjs-dropdown-multiselect']);

dialogpa.controller('developer_edit', ['$scope', function ($scope) {...}])

angular.bootstrap(document.getElementById('basehouse.developer.edit'), ['dialogpa']);
```
