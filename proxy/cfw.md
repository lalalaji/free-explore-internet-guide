---
title: "Clash for Windows简介"
date: 2022-01-14T00:58:15+08:00
tags:
  - 科学上网
categories:
  - 科学上网
toc: true
---

看了前一篇文章（[自用机场推荐——Glados](/post/glados/)的朋友或许对 clash for windows（以下简称 cfw）这个软件的功能不太了解，这里就来简单介绍一下这个软件的功能。如果你需要详细的文档，也可以直接查看下面的链接。我这里只简单介绍一下几个常用的功能。

<https://docs.cfw.lbyczf.com/contents/quickstart.html#%E5%90%AF%E5%8A%A8>

## 订阅地址更新

在 cfw 软件的左边就是配置文件的管理，如果你使用的是机场的服务，那么只需要把机场提供的订阅地址粘贴到这里，cfw 就会下载并使用。

![订阅地址](https://raw.githubusercontent.com/lsmnoxa/image-host/main/img/20220114010642.png)

你也可以在上面点击右键，选择设置，这样就会弹出一个对话框，在这里可以设置自动更新配置文件的间隔，一般设置成几个小时就够了。

![自动更新间隔](https://raw.githubusercontent.com/lsmnoxa/image-host/main/img/20220114011036.png)

## 允许局域网连接

先来看看 cfw 的主界面，在这里可以设置常用的配置，如果你在家里的话，建议允许局域网连接，更加方便。

- port，本地代理使用的端口号
- allow lan，是否允许本地局域网连接，如果允许的话，同一局域网的其他电脑或手机也可以通过代理访问互联网
- ipv6，是否启用 ipv6，如果你的运营商以及家里的路由器都支持 ipv6 的话就可以开启
- uwp launcher，在 win 系统下 uwp 应用默认直连，无法走代理，点击它可以启动调试工具解除该限制
- system proxy，是否启用系统代理，因为 cfw 的订阅规则一般包含了各种地址的访问规则，所以启用系统代理也没有什么影响
- start with windows，是否开机自启

![主界面配置](https://raw.githubusercontent.com/lsmnoxa/image-host/main/img/20220114011334.png)

## 静默启动

cfw 启动的时候会开启软件界面，不需要的话也可以让它静默启动。

![静默启动](https://raw.githubusercontent.com/lsmnoxa/image-host/main/img/20220114012736.png)

## 按延迟排序节点

如果需要按延迟排序节点的话，按下图设置。

![按延迟排序](https://raw.githubusercontent.com/lsmnoxa/image-host/main/img/20220114012847.png)
