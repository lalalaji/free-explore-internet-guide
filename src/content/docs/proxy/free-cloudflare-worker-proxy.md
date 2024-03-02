---
title: 免费白嫖 Cloudflare Worker 作为 v2ray 服务端
---

之前在其他地方看到一个使用 Cloudflare Worker 翻墙的评论，好奇之下通过搜索引擎查阅了一下，发现这个技术方案还挺有意思的，所以整理了一下，将过程分享出来。

## 方法步骤

### 新建 Cloudflare Worker

首先访问 [Cloudflare 主页](https://www.cloudflare.com/zh-cn/)，然后找到 worker，新建一个 worker。这个 worker 实际上是一个函数，可以由 Cloudflare 服务器来运行，不过有大神开发了一个特殊脚本，可以把 Cloudflare worker 的流量包装成 vless 流量，以达到翻墙的目的，这也是这篇文章要讨论的。

然后访问这个页面<https://github.com/zizifn/edgetunnel/blob/main/src/worker-vless.js>，然后将代码复制到 worker 中。复制完成后先别急着保存，脚本中有两行配置需要我们填写。

### 填写 UUID 和代理 IP

脚本中这两行就是我们要修改的地方，分别是 UUID 和代理 IP。

```js
let userID = "d342d11e-d424-4583-b36e-524ab1f0afa4";

let proxyIP = "";
```

UUID 可以在 windows PowerShell 窗口中使用`New-Guid`命令随机生成，代理 IP 可以直接填写`103.200.112.108`，之后保存。

### 测试 Worker

填写好配置并保存以后，访问 worker 网址，应该会得到一串响应，在网址后面加上`/你的 UUID`，就可以获得代理配置了。

### 优选 IP

其实这个时候将代理地址复制到代理软件中即可使用了，但是还有一个问题，那就是默认情况下连接 Cloudflare 网络的速度还是比较慢。所以我们还需要对 Cloudflare 网络里的 IP 池进行测速，选择其中速度最快和延迟最低的 IP。

这里列举两个测速工具 [Cloudflare 代理优选工具](https://github.com/badafans/better-cloudflare-ip/releases) 和 [Cloudflare 测速工具](https://github.com/XIU2/CloudflareSpeedTest)，测试当前网络环境最适合的 Cloudflare IP 地址，注意测试的时候关闭代理工具，使用真实 IP 测试，这样才能获得最准确的结果。

### 安装 v2ray

之后下载 v2ray 的客户端 [v2rayN](https://github.com/2dust/v2rayN/releases)，需要手机翻墙的话下载安卓版 [v2rayNG](https://github.com/2dust/v2rayNG/releases)。因为 v2ray 这个软件我也没怎么用过，所以就不特别详细介绍软件的使用方法了，和 Clash For Windows 的功能应该差不多，自己研究一下就行了。

将通过 worker 获得的代理配置复制粘贴到软件中，软件应该会自动识别、添加服务器并自动连接，这时候应当可以在软件的日志栏看到运行信息。默认情况下不会添加系统代理，记得在软件界面下方选择*自动配置系统代理*和*绕过大陆*，这时候就可以翻墙了。

如果通过前面的工具获得了优选 IP，那么就打开服务器配置，在地址一栏填写优选 IP，这样再测试一下，翻墙速度应该会变快。

### 限制

白嫖的固然很香，但是也是有限制的，每天 Cloudflare Worker 的访问上限是 10w 请求次数，一般用户应该够用了，如果不够的话，可以多申请几个账户。我看已经有人通过这种方式成功白嫖了几个月了，稳定性应该还可以，毕竟是免费的，还要求什么呢？

当然，毕竟这是一个免费服务，大家日常上网查查资料看个推肯定是没啥问题的，但是也不要滥用。万一薅羊毛到最后把人家的服务关了，最后大家都没得用，那也不是一件好事对吧。
