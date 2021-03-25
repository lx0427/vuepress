## dns 配置

| 类型  |            名称            |                       值                       |  TTL   |
| :---: | :------------------------: | :--------------------------------------------: | :----: |
|   A   |             @              |                 160.251.21.249                 | 600 秒 |
|   A   |            mail            |                 160.251.21.249                 | 600 秒 |
| CNAME |            imap            |               mail.gamermart.jp                | 600 秒 |
| CNAME |            pop             |               mail.gamermart.jp                | 600 秒 |
| CNAME |            pop3            |               mail.gamermart.jp                | 600 秒 |
| CNAME |            smtp            |               mail.gamermart.jp                | 600 秒 |
|  MX   |        gamermart.jp        |           mail.gamermart.jp(优先:1)            | 600 秒 |
|  --   |             --             |                       --                       |   --   |
| CNAME |    enterpriseenrollment    |   enterpriseenrollment.manage.microsoft.com    | 1 小时 |
| CNAME |   enterpriseregistration   |       enterpriseregistration.windows.net       | 1 小时 |
| CNAME |        lyncdiscover        |             webdir.online.lync.com             | 1 小时 |
| CNAME |            sip             |             sipdir.online.lync.com             | 1 小时 |
|  MX   |             @              |    gamermart-jp.mail.protection.outlook.com    | 1 小时 |
|  TXT  |             @              | v=spf1 include:spf.protection.outlook.com -all | 1 小时 |
| CNAME |        autodiscover        |            autodiscover.outlook.com            | 1 小时 |
|  SRV  |       \_sip \_tls @        |        sipdir.online.lync.com 100 1 443        | 1 小时 |
|  SRV  | \_sipfederationtls \_tcp @ |       sipfed.online.lync.com 100 1 5061        | 1 小时 |

### 域名基础了解

- A: 主机记录
- MX: 邮件交换记录
- CNAME: 别名

### spf 设置

> 如果除了邮件服务器，网站也可能直接发邮件，也可能通过中继服务器发邮件

| TXT | @ | v=spf1 a mx ip4:160.251.21.249 ip4:160.251.21.249 ~all | 600 秒 |

## 服务器

### swap

```bash
# 查看swap
free -m
```

### hostname 设置为你的域名

```bash
hostname mail.gamermart.jp
hostnamectl set-hostname mail.gamermart.jp
```

## docker 搭建

[docker bestwu/ewomail 文档](https://hub.docker.com/r/bestwu/ewomail/)

```bash
# 拉取镜像
docker pull bestwu/ewomail
# 创建本地映射目录
mkdir -p /home/ewomail/{mysql,vmail,rainloop}
mkdir -p /home/ewomail/ssl/{certs,private,dkim}

# mail.gamermart.jp 更换为自己的域名
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

### 10024 错误

错误原因：10024 端口跑的服务主要用于 ewomail 中反垃圾反病毒作用，然而 docker 镜像中没有集成，所以会无法接收到邮件。

```bash
docker exec -it ewomail /bin/bash
vi /etc/postfix/main.cf
:737
# 注释 content_filter = smtp-amavis:[127.0.0.1]:10024
exit
```

### DKIM 设置

> DKIM 是电子邮件验证标准，域名密钥识别邮件标准，主要是用来防止被判定为垃圾邮件。
> 每个域名都需要添加一个 dkim 的 key，EwoMail 默认安装后已自动添加主域名 dkim，只需要设置好 dkim 的 dns 即可。

```bash
docker exec ewomail amavisd showkeys
# ; key#1, domain gamermart.jp, /ewomail/dkim/mail.pem
# dkim._domainkey.gamermart.jp.	3600 TXT (
#   "v=DKIM1; p="
#   "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDB33JFXj3+sJ/TSM0ZbvRqYKgO"
#   "pOYnxHXj5/9I2m/lM4tU0PmPj7j5vQOd8+2VYUu5YwAh4EAABVD1kml7lqk0cP7b"
#   "OoP0wJHc0csAXevjIj9Z0uEhdrf96LTsPU1KwWk3YToF+iZjrQoG2BULnE8ql2HT"
#   "rY1T3PhSIkc1K1F9+wIDAQAB")
```

> 将内容拷贝至[DKIM 整理](https://www.osyum.com/EwoMail/)

| TXT | `dkim._domainkey` | v=DKIM1;p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDB33JFXj3+sJ/TSM0ZbvRqYKgOpOYnxHXj5/9I2m/lM4tU0PmPj7j5vQOd8+2VYUu5YwAh4EAABVD1kml7lqk0cP7bOoP0wJHc0csAXevjIj9Z0uEhdrf96LTsPU1KwWk3YToF+iZjrQoG2BULnE8ql2HTrY1T3PhSIkc1K1F9+wIDAQAB | 600 秒 |

> 十分钟后验证生效

```bash
docker exec ewomail amavisd testkeys
# TESTING#1: dkim._domainkey.gamermart.jp      => pass
```

## 访问地址

[ewomail 官方文档](http://doc.ewomail.com/docs/ewomail/jianjie)

> 邮件管理后台

- 地址：http://gamermart.jp:8080
- 账号密码：admin/ewomail123
- 添加邮箱密码，即可登录用户邮件平台

> Rainloop 管理端

- 地址：http://gamermart.jp:8000/?admin
- 账号密码：admin/12345

> 用户邮件平台

http://gamermart.jp:8000

## nodemailer 连接

```js
async sendMail(title, content, toMail) {
  const emailOptions = {
    host: 'mail.gamermart.jp',
    port: 25,
    secure: false, // use SSL 465  //no use 587
    auth: {
      user: 'root@gamermart.jp', // user name
      pass: '12345678', // password
    },
    tls: {
      rejectUnauthorized: false,
    },
  }
  const transporter = nodemailer.createTransport(emailOptions)
  const mailOptions = {
    from: `"GamerMart"<${emailOptions.auth.user}>`, // sender address mailfrom must be same with the user
    to: toMail, // list of receivers
    subject: title, // Subject line
    text: content, // plaintext body
  }

  // 用回调函数记录状态
  function send(mailOptions) {
    return new Promise(async (resolve, reject) => {
      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          reject(error)
        } else {
          transporter.close()
          resolve({ code: 1, data: info })
        }
      })
    })
  }
  try {
    return await send(mailOptions)
  } catch (error) {
    throw (500, error)
  }
}
```
