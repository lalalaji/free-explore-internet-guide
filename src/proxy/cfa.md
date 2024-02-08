# Clash For Android 教程

Clash For Android （以下简称 cfa）是一个基于 Clash 的开源安卓客户端，让安卓用户也能使用 Clash 代理。

## 下载

能用 Google Play 的话就直接安装，否则的话，就直接软件的[Github Release 页面](https://github.com/Kr328/ClashForAndroid/releases)下载。

下载页面的应用按照稳定性分为*Pre Release*（预发行也就是测试版）和*Release*（没打标签默认就是正式版）。其下又按照使用的 Clash 内核分为 foss（开源内核版）和 premium（高级内核版）。每个内核还按照目标平台分为多个版本，如果不知道自己的平台是什么的话，可以直接下载 universal（通用版），通用版包含所有平台的内容，因此体积也最大。

如果你不知道我在说什么的话，就直接右键复制[这个链接地址](https://github.com/Kr328/ClashForAndroid/releases/download/v2.5.9/cfa-2.5.9-premium-universal-release.apk)，然后粘贴到[这篇文章](/network/github.md#github-文件下载)里介绍的几个网站中下载。

## 开始使用

### 启动代理

打开 cfa，点击主界面的配置按钮，在点击右上角的`+`号，选择*从 URL 导入*，然后复制粘贴订阅地址，并为新订阅添加一个名字，然后点击右上角的保存按钮。

![新建配置](/img/cfa-new-profile.jpg)

然后在配置界面确保已经选中了刚刚新建的配置，然后返回主界面，点击*已停止 点此启动*按钮，就可以启动 Clash 代理了。

![cfa主界面](/img/cfa-main.jpg)

如果你的安卓系统支持的话，还可以将已经建立的 Clash VPN 添加到快速设置中，这样下次使用的时候就更加方便快捷了。

### 排除应用

点击*设置->网络*，通过配置*访问控制模式*和*访问控制应用包列表*，就可以设置可由 Clash 代理流量的应用，如果你需要同时使用国内应用和墙外应用，就可以通过这个功能配置。
