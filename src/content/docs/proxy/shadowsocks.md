---
title: Shadowsocks 简介
sidebar:
  order: 5
---

:::caution
本文目前已经过时，内容仅供参考，请等待博主更新
:::

shadowsocks（也称影梭）是一个高性能的代理软件，曾经广泛使用。不过目前代理软件有很多选择，除了影梭、还有 v2ray、trojan、clash 等，但是要了解科学上网，影梭还是有必要介绍一下的。

## 常用实现

影梭有多种语言的实现，包括 C 语言实现、Python 实现等等。目前主流的实现是 rust 版和 go 版。下面依次介绍一下。

### shadowsocks-rust

[shadowsocks-rust](https://github.com/shadowsocks/shadowsocks-rust) 是影梭基于 rust 语言的实现，不过各大 linux 的软件仓库里并没有收录。所以最简单的运行方法是利用 docker，如果你允许 docker 服务开机自启，那么使用下面带有`--restart always`的命令就可以实现开机自启，非常方便。

```sh
docker run --name ssserver-rust \
  --restart always \
  -p 8388:8388/tcp \
  -p 8388:8388/udp \
  -v /path/to/config.json:/etc/shadowsocks-rust/config.json \
  -dit ghcr.io/shadowsocks/ssserver-rust:latest
```

或者你也可以省去端口映射，直接让 docker 在宿主机网络里运行，这样可以缩短命令。

```sh
docker run --name ssserver-rust \
  --restart always \
  --network host \
  -v /path/to/config.json:/etc/shadowsocks-rust/config.json \
  -dit ghcr.io/shadowsocks/ssserver-rust:latest
```

### go-shadowsocks2

[go-shadowsocks2](https://github.com/shadowsocks/go-shadowsocks2) 基于 go 语言实现，也很常用，而且提供了另外一种设置方式——通过字符串设置。下面的命令使用`AEAD_CHACHA20_POLY1305`加密方式，在服务端以 8488 和给定密码运行影梭服务端。

```sh
go-shadowsocks2 -s 'ss://AEAD_CHACHA20_POLY1305:your-password@:8488' -verbose
```

客户端也用同样的方式运行。

```sh
go-shadowsocks2 -c 'ss://AEAD_CHACHA20_POLY1305:your-password@[server_address]:8488' \
    -verbose -socks :1080 -u -udptun :8053=8.8.8.8:53,:8054=8.8.4.4:53 \
                             -tcptun :8053=8.8.8.8:53,:8054=8.8.4.4:53
```

go 实现同样支持 docker 运行，但是并没有发布官方的 docker 镜像，需要我们自己编译运行。

### gost

[gost](https://github.com/ginuerzh/gost) 是一个 GO 语言实现的安全隧道，用到了影梭的 go 实现，所以同样支持影梭协议，gost 有官方 docker 镜像，可以当做是 go 实现的替代品，也支持将代理嵌套多层。

使用 docker 启动服务端。

```sh
docker run --name gost-server \
  --restart always \
  --network host \
  -d \
  ginuerzh/gost:latest -L=ss2://AEAD_CHACHA20_POLY1305:password@:8338
```

客户端也是类似的。

```sh
docker run --name gost-client \
  --restart always \
  --network host \
  -d \
  gost -L=:8080 -F=ss2://AEAD_CHACHA20_POLY1305:password@server_ip:8338
```

## 配置文件介绍

影梭的通用配置方法是配置文件。

### 服务端

服务端配置文件类似下面所示，各选项说明如下：

- server, 服务器 IP 地址，设置为`0.0.0.0`在服务器所有网络接口上开启服务
- server_port，服务端的端口号
- local_port，只在客户端有用，服务端会忽略
- password，连接时所需密码
- method，加密方式，只推荐`chacha20-ietf-poly1305`和`aes-256-gcm`两种，其他的不安全

```json
{
  "server": "0.0.0.0",
  "server_port": 8388,
  "local_port": 1080,
  "password": "barfoo!",
  "method": "chacha20-ietf-poly1305"
}
```

### 客户端

几乎一样，只需要把`server`改为服务端的 IP 地址即可。

```json
{
  "server": "your_server_ip",
  "server_port": 8388,
  "local_port": 1080,
  "password": "barfoo!",
  "method": "chacha20-ietf-poly1305"
}
```
