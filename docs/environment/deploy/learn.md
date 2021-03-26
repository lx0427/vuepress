```bash
mkdir www
echo 'hello docker !' >> www/index.html
# 运行指定目录
docker run -p 8000:80 -v /E/DOCKER/www:/usr/share/nginx/html nginx
```

