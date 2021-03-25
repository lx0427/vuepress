[root@gamermart /]# hostname mail.gamermart.jp
[root@gamermart /]# hostnamectl set-hostname mail.gamermart.jp
[root@gamermart /]# hostname
mail.gamermart.jp

mkdir -p /home/email/{mysql,vmail,clamav,nginx}

```bash
docker pull lejmr/iredmail:mysql-latest

docker run -h mail.gamermart.jp -p 443:443 -p 81:80 -p 25:25 -p 110:110 -p 143:143 -p 465:465 -p 587:587 -p 993:993 -p 995:995 -h mail.gamermart.jp -e "MYSQL_ROOT_PASSWORD=osyum123258" -e "SOGO_WORKERS=1" -e "TZ=Europe/Prague" -e "POSTMASTER_PASSWORD={PLAIN}osyum123258" -e "IREDAPD_PLUGINS=['reject_null_sender', 'reject_sender_login_mismatch', 'greylisting', 'throttle', 'amavisd_wblist', 'sql_alias_access_policy']" -v /home/mail/mysql:/var/lib/mysql -v /home/mail/vmail:/var/vmail -v /home/mail/clamav:/var/lib/clamav --name=iredmail --restart=always lejmr/iredmail:mysql-latest

v=spf1 a mx ip4:160.251.21.249 ip4:160.251.21.249 ~all

docker exec -it iredmail /bin/bash
```

# 生成 DKIM

amavisd showkeys

# 域名文本解析

https://www.osyum.com/EwoMail/

```bash
mkdir -p /home/iredmail/{mysql,vmail,clamav}
docker run -p 81:81 -p 443:443 \
 -h mail.gamermart.jp \
 -e "MYSQL_ROOT_PASSWORD=123456" \
 -e "SOGO_WORKERS=1" \
 -e "TZ=Europe/Prague" \
 -e "POSTMASTER_PASSWORD={PLAIN}123456" \
 -e "IREDAPD_PLUGINS=['reject_null_sender', 'reject_sender_login_mismatch', 'greylisting', 'throttle', 'amavisd_wblist', 'sql_alias_access_policy']" \
 -v /home/iredmail/mysql:/var/lib/mysql \
 -v /home/iredmail/vmail:/var/vmail \
 -v /home/iredmail/clamav:/var/lib/clamav \
 --name=iredmail lejmr/iredmail:mysql-latest
```

https://mail.gamermart.jp/iredadmin/login?msg=loginRequired
postmaster@gamermart.jp/123456

https://mail.gamermart.jp/mail/?_task=login&_err=session
