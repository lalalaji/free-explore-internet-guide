# Clash 教程

clash 是一个使用 go 语言编写的基于规则的隧道软件，是目前主流的代理软件之一。clash 支持 shadowsocks、vmess、trojan 等多种协议，可以用一个软件连接多个代理服务端。而它强大的基于规则的分流功能，可以灵活的配置国内和国外的流量分流。这也是 clash 目前非常流行的原因。

本文主要介绍 clash 命令行以及 clash 的核心功能以及配置，可以作为 clash 图形界面客户端的补充阅读，让大家对 clash 图形客户端提供的功能有更好的理解。

## 简单介绍

clash 是一个开源的软件，托管在 github 上，这里是[项目官网](https://github.com/Dreamacro/clash)，因为软件图标是一只黑猫，又被亲切的称为小猫咪。

clash 项目有多个版本，没有什么特殊要求的话，使用 premium 版即可。

- [开源版](https://github.com/Dreamacro/clash/releases)，托管在 Github 上的开源软件。
- [Premium 版](https://github.com/Dreamacro/clash/releases/tag/premium)，Premium 版是开源版开发者开发的闭源私有版本，支持一些高级功能，可以免费使用。
- [Meta 版](https://github.com/MetaCubeX/Clash.Meta)，也是根据开源版 fork 出来的分支，功能比原版多一点，但没有覆盖 Premium 版的全部功能。

以上几个版本都是命令行软件，对于大众来说使用起来有诸多不便。大家最常用的还是各种基于 clash 开发的图形客户端，如安卓版[Clash for Android](https://github.com/Kr328/ClashForAndroid)、Windows 版[Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg/releases)等等。

这些图形客户端的使用方法同样在我的教程里有说明，大家可以顺便看看。

## 开始使用

### 转换订阅

虽然现在有很多不同的代理软件和机场提供不同的服务，但是体系是相通的，都是提供一些全球各地的节点，然后通过策略规则实现分流。现在也有一些订阅转换功能，可以在他们之间转换。

推荐使用 subconverter，支持自建服务，有效保护隐私，防止泄露订阅文件内容。

<https://github.com/tindy2013/subconverter/blob/master/README-cn.md>

### docker 启动

这里介绍一下 linux 平台下 clash 命令行的使用，最简单方便的就是使用 docker compose 部署。

先创建目录，存放 clash 的配置文件。

```sh
mkdir ~/.config/clash -p && cd ~/.config/clash
```

然后是 clash 配置文件，可以自己编写，或者直接从机场获取订阅文件，将其命名为`config.yaml`，同样放置在目录下。接下来就是创建 docker compose 配置文件。

<details>
  <summary>创建docker compose配置文件</summary>

```sh
tee docker-compose.yml <<"EOL"
version: "3"
services:
  clash:
    # ghcr.io/dreamacro/clash
    # ghcr.io/dreamacro/clash-premium
    # dreamacro/clash
    # dreamacro/clash-premium
    image: dreamacro/clash-premium
    container_name: clash
    volumes:
      - ./config.yaml:/root/.config/clash/config.yaml
      # - ./ui:/ui # dashboard volume
    ports:
      - "7890:7890"
      - "7891:7891"
      # - "8080:8080" # external controller (Restful API)
    # TUN
    # cap_add:
    #   - NET_ADMIN
    # devices:
    #   - /dev/net/tun
    restart: unless-stopped
    network_mode: "host" # 使用宿主的网络，自动开放所有端口
EOL
```

</details>

一切就绪之后，运行以下即可启动 clash 服务。

```sh
docker compose up -d
# 一些发行版的docker版本比较旧，使用下面的命令
docker-compose up -d
```

此时可以通过 docker ps 命令来查看 clash 是否正常运行。

```sh
docker ps -a
```

然后，本地程序就可以通过 clash 的代理端口(默认是 7890，不同的机场订阅文件配置或许不同)访问网络了。

## 基本功能

### 端口配置

此部分的配置控制着 clash 向外暴露的端口号和服务。

<details>
  <summary>端口配置部分</summary>

```yaml
# HTTP代理端口
# Port of HTTP(S) proxy server on the local end
port: 7890

# SOCKS5代理端口
# Port of SOCKS5 proxy server on the local end
socks-port: 7891
# linux和macOS的透明代理端口
# Transparent proxy server port for Linux and macOS (Redirect TCP and TProxy UDP)
# redir-port: 7892

# linux的透明代理端口
# Transparent proxy server port for Linux (TProxy TCP and TProxy UDP)
# tproxy-port: 7893

# HTTP和SOCKS混合代理端口
# HTTP(S) and SOCKS4(A)/SOCKS5 server on the same port
# mixed-port: 7890

# 可以设置代理端口的用户认证
# authentication of local SOCKS5/HTTP(S) server
# authentication:
#  - "user1:pass1"
#  - "user2:pass2"
```

</details>

### 网络配置

这部分是 clash 网络相关的一些配置。

<details>
  <summary>网络配置部分</summary>

```yaml
# 设置为true的话，允许本地局域网的其他设备访问clash代理
# Set to true to allow connections to the local-end server from
# other LAN IP addresses
allow-lan: true

# 当允许LAN设备访问的时候，此选项才生效
# 设置clash要绑定的IP地址，'*'为绑定所有IP地址
# This is only applicable when `allow-lan` is `true`
# '*': bind all IP addresses
# 192.168.122.11: bind a single IPv4 address
# "[aaaa::a8aa:ff:fe09:57d8]": bind a single IPv6 address
bind-address: "*"

# 是否启用ipv6功能
# When set to false, resolver won't translate hostnames to IPv6 addresses
ipv6: false

# 出口网卡名
# Outbound interface name
interface-name: en0

# fwmark on Linux only
routing-mark: 6666
```

</details>

### 工作模式配置

clash 的工作模式，默认为规则模式，按配置文件中的规则对国内外流量进行分流。以下是其他模式。

- direct，直连模式，所有流量不使用代理
- global，全局模式，所有流量都走代理
- rule，规则模式，按规则对流量进行分流
- script，脚本模式，仅 premium 版可用，允许用户编写脚本以编程的方式设置规则

```yaml
# Clash router working mode
# rule: rule-based packet routing
# global: all packets will be forwarded to a single endpoint
# direct: directly forward the packets to the Internet
mode: rule
```

### 外部控制器配置

除了配置文件以外，clash 还支持通过 RESTful API 的方式来控制。使用这个功能之前，需要先配置外部控制器的 IP 地址和端口号。如果外部控制器监听所有地址，那么建议为控制器设置一个密码，防止其他人恶意访问和修改 clash 配置。

<details>
  <summary>外部控制器配置部分</summary>

```yaml
# RESTful web API listening address
external-controller: 127.0.0.1:9090

# A relative path to the configuration directory or an absolute path to a
# directory in which you put some static web resource. Clash core will then
# serve it at `http://{{external-controller}}/ui`.
external-ui: folder
# 外部控制器的密码
# Secret for the RESTful API (optional)
# Authenticate by spedifying HTTP header `Authorization: Bearer ${secret}`
# ALWAYS set a secret if RESTful API is listening on 0.0.0.0
# secret: ""
```

</details>

配置好了之后，就可以使用 web 控制面板来访问 clash 了，通过以下链接访问并输入 clash 的信息，就能控制 clash 了。

- <http://clash.razord.top>
- <http://yacd.haishan.me>

如果连接失败，可以尝试访问并关闭该选项`chrome://flags/#block-insecure-private-network-requests`。

## DNS 功能

clash 自带 DNS 功能，可以用来应对 DNS 污染的问题。一般情况下机场订阅都会特别注意规则的编写，所以即使 clash 客户端不配置 DNS 功能也可以正常使用。只有当 clash 在路由器上作为透明网关使用的时候，才必须配置 DNS 功能。

clash 支持 redir-host 和 fake-ip 两种模式，现在 redir-host 模式不推荐使用，因为 fake-ip 模式的性能更好，也不用担心 DNS 污染的问题。clash DNS 的机制和原理较为复杂，这里就不再介绍。详细介绍可以参考这几篇文章。

- [Clash for Windows 的 wiki 文档](https://github.com/Fndroid/clash_for_windows_pkg/wiki/DNS%E6%B1%A1%E6%9F%93%E5%AF%B9Clash%EF%BC%88for-Windows%EF%BC%89%E7%9A%84%E5%BD%B1%E5%93%8D)
- [浅谈在代理环境中的 DNS 解析行为](https://blog.skk.moe/post/what-happend-to-dns-in-proxy)

### fake-ip-filter

clash 的 DNS 功能需要配置 nameserver 和 fallback 两组名称服务器，用于进行分流规则的判定。两者配置均支持 DOH 和 DOT 加密协议，推荐使用 DOH，受到运营商的干扰较小。如果 nameserver 服务器没有 DNS 污染的话，其实完全用不到 fallback 服务器就能正常工作。

使用 fake-ip 模式时，clash 会向客户端返回一个虚假 IP，在此期间，clash 会通过规则来判定请求到底直连还是需要走代理。所以客户端拿到的只是一个虚假的 IP 段。

一些应用需要真实 IP 地址才能正常工作，fake-ip-filter 指定的域名不会返回 fake-ip，而是真实域名。例如 QQ 网页版快捷登录，就利用了 qq 的域名`localhost.ptlogin2.qq.com`解析到本地回环地址来判断本地 QQ 是否登录。

<details>
  <summary>DNS配置部分</summary>

```yaml
# DNS server settings
# This section is optional. When not present, the DNS server will be disabled.
dns:
  enable: false
  listen: 0.0.0.0:53
  # ipv6: false # when the false, response to AAAA questions will be empty

  # These nameservers are used to resolve the DNS nameserver hostnames below.
  # Specify IP addresses only
  default-nameserver:
    - 114.114.114.114
    - 8.8.8.8
  enhanced-mode: fake-ip # or redir-host (not recommended)
  fake-ip-range: 198.18.0.1/16 # Fake IP addresses pool CIDR
  # use-hosts: true # lookup hosts and return IP record

  # Hostnames in this list will not be resolved with fake IPs
  # i.e. questions to these domain names will always be answered with their
  # real IP addresses
  # fake-ip-filter:
  #   - '*.lan'
  #   - localhost.ptlogin2.qq.com

  # Supports UDP, TCP, DoT, DoH. You can specify the port to connect to.
  # All DNS questions are sent directly to the nameserver, without proxies
  # involved. Clash answers the DNS question with the first result gathered.
  nameserver:
    - 114.114.114.114 # default value
    - 8.8.8.8 # default value
    - tls://dns.rubyfish.cn:853 # DNS over TLS
    - https://1.1.1.1/dns-query # DNS over HTTPS
    - dhcp://en0 # dns from dhcp
    # - '8.8.8.8#en0'

  # When `fallback` is present, the DNS server will send concurrent requests
  # to the servers in this section along with servers in `nameservers`.
  # The answers from fallback servers are used when the GEOIP country
  # is not `CN`.
  # fallback:
  #   - tcp://1.1.1.1
  #   - 'tcp://1.1.1.1#en0'
```

</details>

## 策略组功能

### proxy 配置

proxies 节点下可以配置远程代理服务器的详细信息，如 IP 地址、密码、加密方式等等。一般这都是由机场提供服务，无需用户手动设置，就不再赘述了。clash 支持的代理协议有 shadowsocks、shadowsocksR、vmess、trojan、snell、http 和 socks5 协议。

<details>
  <summary>代理配置</summary>

```yaml
proxies:
  # Shadowsocks
  # The supported ciphers (encryption methods):
  #   aes-128-gcm aes-192-gcm aes-256-gcm
  #   aes-128-cfb aes-192-cfb aes-256-cfb
  #   aes-128-ctr aes-192-ctr aes-256-ctr
  #   rc4-md5 chacha20-ietf xchacha20
  #   chacha20-ietf-poly1305 xchacha20-ietf-poly1305
  - name: "ss1"
    type: ss
    server: server
    port: 443
    cipher: chacha20-ietf-poly1305
    password: "password"
    # udp: true
```

</details>

### Proxy Groups 配置

一般的机场都提供了大量节点，它们会按照一定的规则被编辑成组来使用，这就是代理组。代理组有 relay、url-test、fallback、load-balance、select 等类型，作用各不相同。

relay 会将流量按顺序链式转发，注意 relay 的转发链中不能包含其他 relay 型代理。

<details>
  <summary>relay</summary>

```yaml
proxy-groups:
  # relay chains the proxies. proxies shall not contain a relay. No UDP support.
  # Traffic: clash <-> http <-> vmess <-> ss1 <-> ss2 <-> Internet
  - name: "relay"
    type: relay
    proxies:
      - http
      - vmess
      - ss1
      - ss2
```

</details>

url-test 会用给定的 URL 测试，并自动选择最佳的代理节点。

<details>
  <summary>url-test</summary>

```yaml
- name: "auto"
  type: url-test
  proxies:
    - ss1
    - ss2
    - vmess1
  # tolerance: 150
  # lazy: true
  url: "http://www.gstatic.com/generate_204"
  interval: 300
```

</details>

fallback 和 url-test 机制类似，使用 URL 来测试节点，但是会尽量按照配置中列出的节点顺序来选择。

<details>
  <summary>fallback</summary>

```yaml
- name: "fallback-auto"
  type: fallback
  proxies:
    - ss1
    - ss2
    - vmess1
  url: "http://www.gstatic.com/generate_204"
  interval: 300
```

</details>

select 需要用户手动选择一个节点，配置文件通常应该提供几个自动测试的代理组，最后再提供一个 select 类型的代理组方便用户手动切换。

<details>
  <summary>select</summary>

```yaml
- name: Proxy
  type: select
  # disable-udp: true
  proxies:
    - ss1
    - ss2
    - vmess1
    - auto
```

</details>

通常机场的订阅文件会将代理节点分为几个组，Video 组包含专门代理视频的节点，还有几个 Auto 类型的代理组自动切换节点，再加上几个 select 类型的节点手动切换节点，防止自动节点有时不可用。

### Proxy Providers 配置

Proxy Providers 支持从 URL 或者文件加载 Proxy Groups，可以减少配置文件的大小。

<details>
  <summary>proxy providers</summary>

```yaml
proxy-providers:
  provider1:
    type: file
    path: /test.yaml
    health-check:
      enable: true
      interval: 36000
      url: http://www.gstatic.com/generate_204
```

</details>

而在`test.yaml`配置文件中，通过 proxies 节点配置代理，这样 clash 就能够读取到代理配置了。

<details>
  <summary>test.yaml</summary>

```yaml
proxies:
  - name: "ss1"
    type: ss
    server: server
    port: 443
    cipher: chacha20-ietf-poly1305
    password: "password"

  - name: "ss2"
    type: ss
    server: server
    port: 443
    cipher: chacha20-ietf-poly1305
    password: "password"
    plugin: obfs
    plugin-opts:
      mode: tls
```

</details>

## 规则

clash 的规则功能可以按规则对流量进行分流，

<details>
  <summary>规则</summary>

```yaml
rules:
  - DOMAIN-SUFFIX,google.com,auto
  - DOMAIN-KEYWORD,google,auto
  - DOMAIN,google.com,auto
  - DOMAIN-SUFFIX,ad.com,REJECT
  - SRC-IP-CIDR,192.168.1.201/32,DIRECT
  # optional param "no-resolve" for IP rules (GEOIP, IP-CIDR, IP-CIDR6)
  - IP-CIDR,127.0.0.0/8,DIRECT
  - GEOIP,CN,DIRECT
  - DST-PORT,80,DIRECT
  - SRC-PORT,7777,DIRECT
  - RULE-SET,apple,REJECT # Premium only
  - MATCH,auto
```

</details>

### 规则类型

每一条规则的格式如`type,value,policy`，type 是规则的类型；value 是要匹配的值，根据类型的不同可以是域名、字符串、IP 地址或 IP 段、国家代码、进程名、端口号等等；policy 是要使用的策略组的名字。

- `DOMAIN`，严格按照域名匹配，例如`DOMAIN,www.google.com,policy`只会匹配`www.google.com`域名的流量到对应代理。
- `DOMAIN-SUFFIX`，匹配所有域名后缀，例如`DOMAIN-SUFFIX,youtube.com,policy`会匹配`youtube.com`、`www.youtube.com`等任意以`youtube.com`结尾的域名。
- `DOMAIN-KEYWORD`，匹配带有关键字的域名，例如`DOMAIN-KEYWORD,github,policy`会匹配所有域名中包含`github`关键字的域名。
- `GEOIP`会匹配符合国家代码的 IP 地址，例如`GEOIP,cn,DIRECT`就会让所有中国的 IP 地址直连。
- `IP-CIDR`，匹配 IP 段，如`IP-CIDR,127.0.0.0/8,DIRECT`
- `IP-CIDR6`，匹配 IPv6 段，如`IP-CIDR6,2620:0:2d0:200::7/32,policy`
- `SRC-IP-CIDR`，匹配源 IP 段，如`SRC-IP-CIDR,192.168.1.201/32,DIRECT`
- `SRC-PORT`，匹配源端口，如`SRC-PORT,80,policy`
- `DST-PORT`，匹配目标端口，如`DST-PORT,80,policy`
- `PROCESS-NAME`，匹配进程名，如`PROCESS-NAME,steam,DIRECT`
- `MATCH`，放到规则最后，匹配剩余的所有连接，例如`MATCH,DIRECT`表示剩余所有未命中规则的流量全部直连

### 策略组

clash 内置两个策略组，`DIRECT`是直连，`REJECT`是拒绝。除此以外，策略组的值可以是`proxies`或者`proxy-group`或者`proxy-provider`中定义的代理节点。

最后，几种 IP 类规则还可以在最后添加`no-resolve`参数。默认情况下，当 clash 遇到 IP 类规则的时候，会尝试通过配置文件中定义的 DNS 服务器将域名解析为 IP 地址，再做匹配。而加了`no-resolve`参数以后，clash 就会忽略这类规则，不再尝试去解析域名。只有当 clash 遇到直接指定 IP 地址的请求时候才会用这些 IP 类规则进行匹配。

## Premium 特性

这里介绍的配置文件仅支持 premium 版，要查看 premium 版的全部功能，可以访问[官方文档](https://github.com/Dreamacro/clash/wiki/Clash-Premium-Features)

### TUN 模式

TUN 模式可以创建一个虚拟网卡，以实现无感的全局代理模式。使用 TUN 模式时推荐使用 DNS 的 fake-ip 模式。

<details>
  <summary>TUN配置</summary>

```yaml
tun:
  enable: true
  stack: system # or gvisor
  # dns-hijack:
  #   - 8.8.8.8:53
  #   - tcp://8.8.8.8:53
  #   - any:53
  #   - tcp://any:53
  auto-route: true # auto set global route
  auto-detect-interface: true # conflict with interface-name
```

</details>

### 脚本模式

脚本模式允许用户编写自定义脚本，更加灵活的针对不同的流量进行规则分流。

<details>
  <summary>脚本配置</summary>

```yaml
mode: Script

# https://lancellc.gitbook.io/clash/clash-config-file/script
script:
  code: |
    def main(ctx, metadata):
      ip = metadata["dst_ip"] = ctx.resolve_ip(metadata["host"])
      if ip == "":
        return "DIRECT"

      code = ctx.geoip(ip)
      if code == "LAN" or code == "CN":
        return "DIRECT"

      return "Proxy" # default policy for requests which are not matched by any other script
```

</details>

context 包含的属性和方法如下，可以在脚本中使用。

<details>
  <summary>context属性</summary>

```javascript
interface Metadata {
  type: string // socks5、http
  network: string // tcp
  host: string
  src_ip: string
  src_port: string
  dst_ip: string
  dst_port: string
}

interface Context {
  resolve_ip: (host: string) => string // ip string
  resolve_process_name: (metadata: Metadata) => string
  resolve_process_path: (metadata: Metadata) => string
  geoip: (ip: string) => string // country code
  log: (log: string) => void
  proxy_providers: Record<string, Array<{ name: string, alive: boolean, delay: number }>>
  rule_providers: Record<string, { match: (metadata: Metadata) => boolean }>
}
```

</details>

脚本遵循 Python 语法，支持一些内建函数。

### Script Shortcuts

在规则上使用脚本，本质上是一个条件表达式。

<details>
  <summary>配置</summary>

```yaml
script:
  shortcuts:
    quic: network == 'udp' and dst_port == 443

rules:
  - SCRIPT,quic,REJECT
```

</details>

可以使用的函数。

<details>
  <summary>函数</summary>

```typescript
type resolve_ip = (host: string) => string; // ip string
type in_cidr = (ip: string, cidr: string) => boolean; // ip in cidr
type geoip = (ip: string) => string; // country code
type match_provider = (name: string) => boolean; // in rule provider
type resolve_process_name = () => string; // find process name (curl .e.g)
type resolve_process_path = () => string; // find process path (/usr/bin/curl .e.g)
```

</details>

### Rule Provider

默认情况下，所有规则都要写在配置文件中，当规则较多的时候，配置文件就极难维护了。这时候可以使用 Rule Provider，从 URL 或者文件获取规则，可以极大的减小配置文件的大小。

<details>
  <summary>配置</summary>

```yaml
rule-providers:
  apple:
    behavior: "domain"
    type: http
    url: "url"
    interval: 3600
    path: ./apple.yaml
  microsoft:
    behavior: "domain"
    type: file
    path: /microsoft.yaml
```

</details>

Rule Provider 有三种类型。`domain`只能定义域名。

```yaml
payload:
  - ".blogger.com"
  - "*.*.microsoft.com"
  - "books.itunes.apple.com"
```

`ipcr`只能定义 IP 段。

```yaml
payload:
  - "192.168.1.0/24"
  - "10.0.0.0.1/32"
```

`classical`可以定义各种类型的规则。

<details>
  <summary>classical</summary>

```yaml
payload:
  - DOMAIN-SUFFIX,google.com
  - DOMAIN-KEYWORD,google
  - DOMAIN,ad.com
  - SRC-IP-CIDR,192.168.1.201/32
  - IP-CIDR,127.0.0.0/8
  - GEOIP,CN
  - DST-PORT,80
  - SRC-PORT,7777
  # MATCH is not necessary here
```

</details>

Github 上有各种第三方规则集，可以选择使用。

- <https://github.com/Loyalsoldier/clash-rules>
- <https://github.com/Hackl0us/SS-Rule-Snippet>
- <https://github.com/ACL4SSR/ACL4SSR/tree/master>

## 参考资料

- [Stash Wiki](https://stash.wiki)
- [Clash Wiki 配置文件](https://github.com/Dreamacro/clash/wiki/Configuration)
- [Clash for Windows 文档](https://docs.cfw.lbyczf.com)
- [Unofficial Clash Wiki](https://lancellc.gitbook.io/clash/)
