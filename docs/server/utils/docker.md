# docker

```bash
# 安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
# 系统自启动
sudo systemctl start docker
```

## docker 命令

### ps

```bash
# 查看启动容器
docker ps
# 查看全部容器
docker ps -a
```

### run

```bash
docker run --name ng01 -p 8080:80 -d nginx
```

### exec

> 只能进入运行中容器

```bash
# 进入docker容器
docker exec -it nginx bash
# 退出容器
exit
```

### stop

```bash
docker stop ng01
```

### rm

```bash
docker rm ng01
```

### start

```bash
docker start ng01
```

### restart

```bash
docker restart ng01
```

### images

> 查看本地镜像

```bash
docker images
```

## nginx

### 挂载部署

1. 人事基层政委 mobile
   ```bash
   docker run --name pcf-mobile -p 3009:3009 -v /nginxconf/personnel-committee-frontend/mobile/default.conf:/etc/nginx/conf.d/default.conf -v /frontendServer/personnel-committee-frontend/mobile:/usr/share/nginx/html -d nginx
   ```
2. 人事基层政委 admin
   ```bash
   docker run --name pcf-admin -p 4009:4009 -v /nginxconf/personnel-committee-frontend/admin/default.conf:/etc/nginx/conf.d/default.conf -v /frontendServer/personnel-committee-frontend/admin:/usr/share/nginx/html -d nginx
   ```

> default.conf
> history 模式

```conf
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;
	  root   /usr/share/nginx/html;

    location / {
      try_files $uri $uri/ /index.html;
      index  index.html index.htm;
    }
    location @router {
      rewrite ^.*$ /index.html last;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {}
}
```

### 安装

```bash
# 安装最新版
docker pull nginx:latest
```

### 配置查看

```bash
cd /etc/nginx/
ls
# nginx.conf conf.d
cd /etc/nginx/conf.d/
ls
# default.conf
cd /var/log/nginx/
ls
# access.log  error.log
```

default.conf

```conf
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```
