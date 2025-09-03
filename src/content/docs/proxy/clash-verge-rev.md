---
title: Clash Verge Rev 使用指南
sidebar:
  order: 2
---

[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev) 是一个基于 Clash Meta 内核的开源 Windows 客户端，在原来的 Clash For Windows 跑路之后，是目前为数不多的还在积极更新维护的 Clash 客户端。如果你觉得 Clash For Windows 用起来还不错的话，也可以继续使用。但如果你觉得 Clash For Windows 不好用，想寻找一个替代品的话，那么就可以来试试 Clash Verge Rev。

Clash Verge Rev 也有 [官方文档](https://clash-verge-rev.github.io/index.html)，不过官方文档写的比较简洁，只介绍了几个高级功能。所以我这里就补充一下软件的基本用法吧。

## 下载软件

下载软件的时候最好通过官方链接下载，不要下载网络上不明来源的软件，避免出现安全风险。[点击这里从官方发布页下载 Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases)，点击`Assets`或者`Show all asstes`展开所有链接，寻找类似`Clash.Verge_1.5.3_x64-setup.exe`的就是 Windows 版的下载地址。

下载之后正常安装即可，如果之前已经安装了 Clash For Windows，最好完全卸载之后在安装 Clash Verge Rev，避免程序产生冲突。

## 快速上手

### 导入订阅

使用软件之前需要导入机场的订阅地址。

![导入订阅](../../../assets/image//clash-verge-rev-20240222185253.avif)

### 开启代理

然后开启系统代理，应该就可以访问外网了。如果只是使用浏览器科学上网的话，这样就足够了。

![开启系统代理](../../../assets/image//clash-verge-rev-20240222185655.avif)

### TUN 模式全局透明代理

我个人更喜欢使用 TUN 模式，这样系统中其他程序就不需要进行任何代理设置，也能透明的通过代理上网。

> [!warning]
> 如果你正在使用加速器等类似程序，需要提前关闭 Clash 的 TUN 模式，否则可能会产生冲突。

![开启 TUN 模式](../../../assets/image//clash-verge-rev-20240222190617.avif)

开启成功之后，在控制面板中应该可以看到名为 Meta 的虚拟网卡。

![虚拟网卡](../../../assets/image//clash-verge-rev-20240222192127.avif)

### 开机自启

最后一步就是设置软件开机自启，这样就可以在电脑开机之后自动启动 Clash Verge Rev 了。

![开机自启](../../../assets/image//clash-verge-rev-20240222191247.avif)

### 其他功能

如果想要局域网其他设备也能通过本机访问外网，可以开启局域网连接功能。这样其他设备就可以通过`<本机 IP>:7897`来访问外网了（Clash Verge Rev 默认端口号 7897，也可以自定义修改）。

![其他设置](../../../assets/image//clash-verge-rev-20240222191446.avif)

## 疑难解答

### 无法连接到代理服务器

这是 Windows 系统的一个限制，UWP 无法访问本地回环地址代理。所以当启用了系统代理之后，UWP 应用就无法上网了。Clash Verge Rev 内置了 UWP 工具可以解决这个问题。

![打开 UWP 工具](../../../assets/image//clash-verge-rev-20240222192854.avif)

打开 UWP 工具之后，点击 _Exemplify All_ 解除所有 UWP 的限制，然后点击 _Save Changes_ 保存即可。

![Exemplify All](../../../assets/image//cfw-uwp-loopback-acleu.avif)
