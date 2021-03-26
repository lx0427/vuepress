## nginx

> 本地端口必须与`conf`listen端口保持一致
>
> <本地>:<容器>

### router history

#### docker-compose.yml

```yml
version: '2.4'
services:
  admin:
    container_name: admin
    image: nginx
    restart: always
    ports:
      - 8000:8000
    volumes:
      - /E/DOCKER/gamermart/admin:/webserver
      - /E/DOCKER/server-config/nginx/admin.conf:/etc/nginx/nginx.conf
      - /E/DOCKER/server-config/nginx/admin-log:/var/log/nginx
```

#### admin.conf

```conf
#user  nginx;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
    worker_connections  1024;
}
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  /var/log/nginx/access.log  main;
    client_max_body_size 10m;
    sendfile        on;
    #tcp_nopush     on;
    keepalive_timeout  65;
    #gzip  on;
    server {
        listen       8000;
        server_name  localhost;
        root         /webserver;
        location / {
            try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }
        location @router {
          rewrite ^.*$ /index.html last;
        }
    }
    include /etc/nginx/conf.d/*.conf;
}
```

### 静态资源

#### docker-compose.yml

```yml
version: '2.4'
services:
  admin:
    container_name: admin
    image: nginx
    restart: always
    ports:
      - 8000:8000
    volumes:
      - /E/DOCKER/gamermart/admin:/webserver
      - /E/DOCKER/server-config/nginx/admin.conf:/etc/nginx/nginx.conf
      - /E/DOCKER/server-config/nginx/admin-log:/var/log/nginx
```

#### wsc.conf

```conf
#user  nginx;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
    worker_connections  1024;
}
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  /var/log/nginx/access.log  main;
    client_max_body_size 10m;
    sendfile        on;
    #tcp_nopush     on;
    keepalive_timeout  65;
    #gzip  on;
    server {
        listen       3001;
        server_name  localhost;
        root         /webserver;
        location / {
            try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }
    }
    include /etc/nginx/conf.d/*.conf;
}
```

## redis

```conf
requirepass 123456
#daemonize yes
bind 0.0.0.0
appendonly yes
```

## start

```bash

```

