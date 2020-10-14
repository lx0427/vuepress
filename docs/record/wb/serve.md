# 服务器

## aws

### aws 重启

1. [进入服务器管理界面](https://ap-northeast-1.console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#Instances:sort=desc:tag:Name)
   ```
   zzyiy00@gmail.com
   Zzy_0521
   ```
2. 重启服务，`操作-实例状态-重启`

### 连接服务器

- protocol: SSH
- ip: 13.231.19.131
- port: 22
- validate:
  - public Key
  - ec2-user
  - 用户秘钥：导入文件`my_key.pem`, 内容如下:
    ```
    -----BEGIN RSA PRIVATE KEY-----
    MIIEowIBAAKCAQEAiDedpnW80xBihI+27IFtYYWXjLIM4UF5K3fD09zmod4xxBEufjhk6hIZvJVL
    EaVf2i9kYuwovwOuQ+AYq1BxkEK0VZ/8iRhsvIWwy/UDPmZ7kmqzB9htmMZb7gCeRbOmGkM1R1bj
    jWktOjOGlA9aRBnSGlX1+TthEvPCT7i4sMJeMCW3JhGd82jj7TFmSNtt9JgfVNcO0qshp6BDozvJ
    okEV3TiPq4aVPq4aBkOzjuYU/NLM80guqDFgJPMJ3JpIndNHDWucFDj0ZOscUNiiHI3FPLNLHBhZ
    8MwOrv+W6IPZKlTMiASm02R9JnQybjZ4sGvzwABxDou6Zl9cK1KSeQIDAQABAoIBACyADs6stA03
    0xd/Y8EL31H2tLXQDQkhvJYIwD7ccbP7xMJK4qd1gPI/C41iMG4JWrEKvn7aq80LRMkD0stUsmTw
    hb1bUMLw6cUE3+chmfeuvzvsA6TSfatlUe8E4K/gqqj1v9gYeKpf69iRsKt6AIEy9kKIRp0vWt04
    KQimTh/gQq/9s81xIUMpaffd3xQ71YNWz9T3UwXh0qJRmMeWdUHvy6Ceh4DPA48pzzmV4DqlVoCz
    SyE/n7MRbzhML7WASvaGn9+sDVzV0/JU53gYyYTD1Hqs1zv38jPhpUdw5gbGvWPb7kDaafj49/wP
    KKcrz2kpq93OCv7a4633HR6MA0kCgYEA6Kffn0ybeH9E5mYYx8hG29N1MfcAN1c7+hNZLf8jLywj
    IajuL6m6ugMEk3i53DjjIh8YBSiF+7K1oY6NR8ux3t5YjNb2no/F8mCBm6EdFq4jP8LRIw5iJMzq
    UGGdxrm+WW+iFZ7kMlG9kwZnOAc2tIDj/H0CnZlW5AYxPhCla0sCgYEAleKRkYKwrfOeTBgQqxqN
    U/BZDfzs9l1dNn/4zPnWTbFKra0+93BSJ0D0a3cqZwFihPsG2mQDyLNS0vcpLwWxMKGjvDfMDIx4
    WvOjYIizqFlIqwn/Z4kkWos3XaDviMd6PUnzkW2OCxnCEclM/NBPoeGbLjLToc0wBjevJRdWussC
    gYBy8fXG43dwihiFaG3XzrhLhWbCf9FIhj3oqMSHuCUu+jSFPcwoGkhZ/IG3Ro81IZn+UrRwX/wK
    Rdn87swYa6f+f4XqV45S+p+Gx21hcbFIclKR/vOKyWFt4xvlCMWF2GEWGNRQsEb4IXBzAlfe05mQ
    hpmdNjojmQ3X7MNJcbn4jwKBgG39du9+JWNxvH+AxXKaqI2peeCe89GTEB03agAZcx9OdEvhL6zq
    +w6dRwA50Z8HUCHgCNZowLIejjAMemdsWOwkIgC0PYQT7RppYkIr7xMiegYx7wAujsP3F6kYuc74
    +4ZQZ3IYID2bKGRfAaUgxN85rOQJHm7FIXHemSOx7c5jAoGBAK63PkTQ214YwsppfUusLtQPRZ4w
    /JKfMk86io9BcaIR3XGvXzIVgRn5q6ByZ4de+pc4wQeMB0yU58re74jxxQQ7L6CM2C/5oqMmQwvb
    QjFxCwOERU/LM1007KTOwBe1lCxkENvrqPFzX+39vnbVr5vD9m4kS9rlA6LHS/b8peHh
    -----END RSA PRIVATE KEY-----
    ```

### 可访问端口

1. 网络安全-安全组-安全组 ID(sg-04dc9609148a981da)-编辑入站规则
2. 开启防火墙端口
   ```bash
   firewall-cmd --zone=public --add-port=27017/tcp --permanent;
   ```

> 重载，每次新增端口后需重载

```bash
firewall-cmd --reload
```

> 查看已开启端口

```bash
firewall-cmd --zone=public --list-ports
```
