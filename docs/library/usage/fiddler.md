# fiddler

## web session 快捷方式

|    快捷键    |                        含义                        |
| :----------: | :------------------------------------------------: |
|    Ctrl+x    |          删除当前所有的 web session 请求           |
|    Ctrl+A    |               选中所有的 web session               |
| Shift+Delete |                删除未选中的 session                |
| R 和 shift+R |             重复请求当前选中的 session             |
|  Alt+Enter   |              查看当前 session 的属性               |
| Shift+Enter  |            启动该 session 的 inspectors            |
|      m       | 给选中的 session 添加描述，将显示在 comment 一栏中 |
|    Ctrl+1    |           改变当前 session 的颜色 （红）           |
|    Ctrl+2    |                         蓝                         |
|    Ctrl+3    |                         黄                         |
|    Ctrl+4    |                         绿                         |
|    Ctrl+5    |                         橙                         |
|    Ctrl+6    |                         紫                         |

## 参数描述

|     名称     |                     含义                      |
| :----------: | :-------------------------------------------: |
|      #       | 抓取 HTTP Request 的顺序，从 1 开始，以此递增 |
|    Result    |                  HTTP 状态码                  |
|   Protocol   |     请求使用的协议，如 HTTP/HTTPS/FTP 等      |
|     Host     |               请求地址的主机名                |
|     URL      |                请求资源的位置                 |
|     Body     |                 该请求的大小                  |
|   Caching    |       请求的缓存过期时间或者缓存控制值        |
| Content-Type |                请求响应的类型                 |
|   Process    |           发送此请求的进程：进程 ID           |
|   Comments   |           允许用户为此回话添加备注            |
|    Custom    |             允许用户设置自定义值              |

## 图标描述

|                             图标                             |                            含义                            |
| :----------------------------------------------------------: | :--------------------------------------------------------: |
|   ![上箭头](../../.vuepress/images/fiddler/fiddler_01.gif)   |                     请求已经发往服务器                     |
|   ![下箭头](../../.vuepress/images/fiddler/fiddler_02.gif)   |                   已从服务器下载响应结果                   |
| ![上箭头暂停](../../.vuepress/images/fiddler/fiddler_03.gif) |                      请求从断点处暂停                      |
| ![下箭头暂停](../../.vuepress/images/fiddler/fiddler_04.gif) |                      响应从断点处暂停                      |
| ![气泡感叹号](../../.vuepress/images/fiddler/fiddler_05.gif) |     请求使用 HTTP 的 HEAD 方法，即响应没有内容（Body）     |
| ![发送右箭头](../../.vuepress/images/fiddler/fiddler_06.png) |                 请求使用 HTTP 的 POST 方法                 |
|     ![锁](../../.vuepress/images/fiddler/fiddler_07.gif)     | 请求使用 HTTP 的 CONNECT 方法，使用 HTTPS 协议建立连接隧道 |
|   ![文档球](../../.vuepress/images/fiddler/fiddler_08.gif)   |                      响应是 HTML 格式                      |
|  ![文档图片](../../.vuepress/images/fiddler/fiddler_09.gif)  |                       响应是一张图片                       |
|   ![文档S](../../.vuepress/images/fiddler/fiddler_10.gif)    |                       响应是脚本格式                       |
|   ![文档U](../../.vuepress/images/fiddler/fiddler_11.gif)    |                      响应是 CSS 格式                       |
| ![文档标签球](../../.vuepress/images/fiddler/fiddler_12.gif) |                      响应是 XML 格式                       |
|    ![json](../../.vuepress/images/fiddler/fiddler_13.png)    |                      响应是 JSON 格式                      |
|    ![乐符](../../.vuepress/images/fiddler/fiddler_14.png)    |                     响应是一个音频文件                     |
|    ![视频](../../.vuepress/images/fiddler/fiddler_15.png)    |                     响应是一个视频文件                     |
|    ![海豚](../../.vuepress/images/fiddler/fiddler_16.png)    |                   响应是一个 SilverLight                   |
|   ![文档f](../../.vuepress/images/fiddler/fiddler_17.png)    |                      响应是一个 FLASH                      |
|   ![文档A](../../.vuepress/images/fiddler/fiddler_18.png)    |                       响应是一个字体                       |
|   ![纯文档](../../.vuepress/images/fiddler/fiddler_19.gif)   |                        普通响应成功                        |
|  ![右下箭头](../../.vuepress/images/fiddler/fiddler_20.gif)  |        响应是 HTTP/300、301、302、303 或 307 重定向        |
|    ![保存](../../.vuepress/images/fiddler/fiddler_21.gif)    |          响应是 HTTP/304（无变更）：使用缓存文件           |
|    ![钥匙](../../.vuepress/images/fiddler/fiddler_22.gif)    |                   响应需要客户端证书验证                   |
| ![危险感叹号](../../.vuepress/images/fiddler/fiddler_23.gif) |                         服务端错误                         |
|    ![禁止](../../.vuepress/images/fiddler/fiddler_24.gif)    |            会话被客户端、Fiddler 或者服务端终止            |

## 命令操作

|  命令  |  对应请求项  |                                 介绍                                  |      示例      |
| :----: | :----------: | :-------------------------------------------------------------------: | :------------: |
|   ?    |     All      |         问号后边跟一个字符串，可以匹配出包含这个字符串的请求          |    ?google     |
|   >    |     Body     |      大于号后面跟一个数字，可以匹配出请求大小，大于这个数字请求       |     >1000      |
|   <    |     Body     |        小于号跟大于号相反，匹配出请求大小，小于这个数字的请求         |      <100      |
|   =    |    Result    |                等于号后面跟数字，可以匹配 HTTP 返回码                 |      =200      |
|   @    |     Host     |                      @后面跟 Host，可以匹配域名                       | @www.baidu.com |
| select | Content-Type |              select 后面跟响应类型，可以匹配到相关的类型              |  select image  |
|  cls   |     All      |                           清空当前所有请求                            |      cls       |
|  dump  |     All      | 将所有请求打包成 saz 压缩包，保存到“我的文档\Fiddler2\Captures”目录下 |      dump      |
| start  |     All      |                             开始监听请求                              |     start      |
|  stop  |     All      |                             停止监听请求                              |      stop      |

## 断点命令

|   命令    | 对应请求项 |                           介绍                           |     示例      |  解除   |
| :-------: | :--------: | :------------------------------------------------------: | :-----------: | :-----: |
|  bpafter  |    All     | bpafter 后边跟一个字符串，表示中断所有包含该字符串的请求 | bpafter baidu | bpafter |
|    bpu    |    All     |   跟 bpafter 差不多，只不过这个是收到请求了，中断响应    |   bpu baidu   |   bpu   |
|    bps    |   Result   |       后面跟状态吗，表示中断所有是这个状态码的请求       |    bps 200    |   bps   |
| bpv / bpm | HTTP 方法  |      只中断 HTTP 方法的命令，HTTP 方法如 POST、GET       |    bpv get    |   bpv   |
|  g / go   |    All     |                  放行所有中断下来的请求                  |       g       |         |

## 拦截请求修改请求内容

```bash
bpafter /api/user/os/user/info
# 选中指定请求
# 右侧响应 - Raw
# 可修改响应状态 code 返回内容
```

## 参考文档

https://www.cnblogs.com/shy1766IT/p/5199334.html
