---
title: 解决 Github 访问问题
---

Github 是全球最大的开源代码托管平台，上面有大量的开源资源，其中不乏一些宝藏。然而因为众所周知的原因，Github 也惨遭被墙，在国内访问会时不时抽风。所以这里就来尝试解决一下 Github 的访问问题。

## Github 镜像访问

下载 [steamcommunity302](https://www.dogfight360.com/blog/686/)，并使用管理员权限打开。打开设置，在 _Github 访问_ 上打勾，然后保存设置。之后重新启动 steam 社区 302 程序，应该就可以无障碍访问 Github 了。

![steam 社区 302](../../../assets/image/steam-community-302.avif)

如果没有办法使用这个软件，那就只能多试几次了。Github 并没有被墙完全阻断，所以如果访问出现问题，等一两分钟再刷新应该就可以访问了。

## 修改 hosts

[github520](https://github.com/521xueweihan/GitHub520) 项目提供了随时更新的国内优化过的 hosts，在一定程度上也可以解决 Github 访问问题。访问项目阅读自述文件，按照提示修改 hosts 后，应该就可以正常访问 Github 了。

修改 hosts 之后，Windows 系统下一般需要使用命令来刷新一下。

```pwsh
ipconfig /flushdns
```

## Github 克隆

如果只需要克隆 Github 项目的话，也可以看看 [gitclone](https://gitclone.com) 这个网站，提供了对 Github 大量项目的镜像，能以较快的速度进行克隆。

不过如果你准备在 Github 上工作，那就不能依赖这个网站。还是得自己想办法，才能正常访问并把代码提交到 Github 上。

## Github 文件下载

其实 Github 页面访问倒不是什么问题，毕竟如果只是看看的话，重试几次也不是不可以。但是很多工具都要通过 Github 下载，这就是很大的问题了。

这里提供了几个 Github 文件下载加速的网站。

- <https://mirror.ghproxy.com/>

使用起来很简单，在 Github Release 页面找到想要下载的链接，右键选择复制链接地址，然后将地址粘贴到上述网站，就能以较快的速度进行下载。
