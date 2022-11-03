---
title: "自用机场推荐——Glados"
date: 2022-01-05T01:33:24+08:00
tags:
  - 科学上网
categories:
  - 科学上网
---

> glados 邀请码`ZI0FM-ZYSS9-6P4NT-47NSN`，我们都会获得一定天数的奖励。

关于科学上网，一直有两个派别存在，那就是自建主机党和机场党。自建主机的好处就是极高的自由度，有一个虚拟主机可供差遣，你可以在上面搭个网站，搞点在线服务，挂点 24 小时的脚本等等；但是嘛也同样存在问题，一旦主机被墙，万事休矣，而且花费更高。所以自建主机只适合愿意折腾和动手的用户，而且最好有备用上网手段，不然很容易抓瞎。

所以对于只想上网看点东西的普通用户来说，其实购买机场的服务是一个更好的选择。现在很多机场用起来其实都挺方便的，服务也挺全的。这里就给大家介绍我自己在用的机场服务——glados。目前我用了小半年，用起来挺不错的，glados 的网址如下。

<https://glados.rocks/>

首先介绍一下 glados 的套餐，分为多个版本，日常使用的话购买基础版即可。glados 支持在购买前试用，所以你大可以先试用一下再决定要不要购买。

![glados套餐](https://raw.githubusercontent.com/lsmnoxa/image-host/main/img/20220113022449.png)

然后按照 glados 的提示下载 clash for windows（以下简称 cfw），这是一个功能强大的 clash 图形界面软件。而 clash 则是一个支持 Vmess、Shadowsocks、Trojan 等多种协议的隧道软件，所以就算你并不是 glados 的用户，也可以下载 clash 使用，仅需要一个客户端就可以连接上述几个协议的服务端。

![安装clash](https://raw.githubusercontent.com/lsmnoxa/image-host/main/img/20220113023038.png)

安装好 cfw 后，打开软件，将从 glados 得到的订阅地址添加到 cfw 中。然后点击左边的 General，选中 System Proxy 开启系统代理；再点击左边的 Proxies，点击上方的 Rule 按钮，将代理规则改为规则模式。这时候就应该可以随心所欲的上网了，你可以打开浏览器访问一下[谷歌](https://www.google.com)，不出意外的话应该就可以成功访问了。

![使用cfw](https://raw.githubusercontent.com/lsmnoxa/image-host/main/img/20220113024325.png)

当然，你这时候应该也发现了，glados 提供的不是单个节点的服务，而是很多个节点，这些节点由 clash 来负责，可以根据延迟和配置文件里预先设定好的规则进行切换。这样我们的上网可用性就会大大提高。当然这也有一个缺点，因为节点会自动切换，所以有时候一些网站会判定成异地登录，触发验证机制。遇到这种情况的话，可以将规则切换为 Global（全局），然后选择一个节点，这样就不会自动切换了。

如果你平时只使用浏览器上网，而不需要其他软件科学上网的话，也可以关闭系统代理。通过[switchyomega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)这个浏览器扩展来控制访问互联网时使用的代理。如果你使用的软件不支持系统代理，也可以在 cfw 中开启隧道模式，这类似于 VPN，会让整个系统的网络都通过代理连接。

如果需要其他系统的客户端，glados 也有相关的帮助，照着网页上的提示下载对应的客户端就可以了。

<https://glados.rocks/console/clash>

如果觉得 glados 挺好用的话，就可以考虑购买了。在购买之前也可以填写一下我的邀请码`ZI0FM-ZYSS9-6P4NT-47NSN`，我们都会获得一定天数的奖励。
