# 图片上传

1. 监听 change 事件
1. 拿到`input:file`DOM
1. 将 file 文件转成 base64 的 url 做本地渲染
1. fd = new FormData()
1. fd.append('files',file)
1. 将 fd 传入接口请求上传图片
