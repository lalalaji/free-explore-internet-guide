---
title: 免费翻墙节点
---

如果不想为了翻墙而付费，其实网络上也有一些免费的节点可供使用。不过既然是免费的节点，也就不要指望速度有多快了，而且不排除可能存在一些钓鱼节点。总之呢就是一句话，免费的才是最贵的。

## 免费节点

### get_subscribe

[get_subscribe 项目](https://github.com/ermaozi/get_subscribe) 搜集了一些免费节点供大家使用，支持 clash 和 v2ray。clash 对应的订阅地址我放到下面了，直接复制并导入到 clash 客户端中即可使用。

```txt
https://raw.githubusercontent.com/ermaozi/get_subscribe/main/subscribe/clash.yml
```

这些免费节点我也没有测试过，只是添加到了 clash 软件中看了一下延迟，光是看延迟就感觉这些节点的质量不怎么样。如果实在不想花钱购买机场服务，那就将就着用吧。

![免费节点延迟](../../../assets/image/free-proxy-20240304020532.avif)

### AutoMergePublicNodes

[AutoMergePublicNodes 项目](https://github.com/chengaopan/AutoMergePublicNodes) 会自动抓取并合并互联网上各个渠道公开的免费节点，更新非常频繁（每日多次自动抓取）。支持 Clash Meta（mihomo）以及 Base64 订阅。

Clash Meta 订阅链接：

```txt
https://raw.githubusercontent.com/chengaopan/AutoMergePublicNodes/master/list.meta.yml
```

### FreeNodes

[FreeNodes 项目](https://github.com/Barabama/FreeNodes) 是一个基于爬虫的免费节点收集项目，每日中午定时抓取更新，并整合了多个公共来源的可用节点，支持 Clash / v2ray。

Clash 合并订阅链接：

```txt
https://raw.githubusercontent.com/Barabama/FreeNodes/refs/heads/feat/ai-crawler-v2/nodes/merged.yaml
```

### ProxyPool

[ProxyPool 项目](https://github.com/snakem982/proxypool) 每天在 8 点、12 点、18 点、22 点定时多频次自动更新节点信息，支持多种协议以及 mihomo/clash-meta 客户端。

Clash Meta 订阅链接：

```txt
https://raw.githubusercontent.com/snakem982/proxypool/main/source/clash-meta-2.yaml
```

### FreeProxies

[FreeProxies 项目](https://github.com/mfuu/FreeProxies) 对网络公开节点进行了自动去重整合，每 8 小时自动更新一次。

Clash 订阅链接：

```txt
https://raw.githubusercontent.com/mfuu/FreeProxies/master/sub.yaml
```

## 无法下载订阅的解决方案（镜像加速）

由于国内网络环境对 `raw.githubusercontent.com` 存在严重的 DNS 污染与连接阻断，在 Clash / mihomo 客户端直接添加上述订阅链接时，经常会遇到下载失败、更新超时（Connection timed out）或 SSL 握手错误。

如果遇到网络问题无法拉取订阅，可以通过以下镜像加速服务替换订阅链接后再导入客户端：

### 1. GitHub 代理前缀加速（推荐）

在原本的 GitHub Raw 订阅链接前，直接拼接代理前缀即可。常用稳定镜像站：

- `https://ghproxy.net/`
- `https://gh-proxy.com/`

**替换方式**：直接在 Raw 链接前加上镜像前缀。

**替换示例**：

- AutoMergePublicNodes 镜像链接：
  ```txt
  https://ghproxy.net/https://raw.githubusercontent.com/chengaopan/AutoMergePublicNodes/master/list.meta.yml
  ```
- FreeNodes 镜像链接：
  ```txt
  https://ghproxy.net/https://raw.githubusercontent.com/Barabama/FreeNodes/refs/heads/feat/ai-crawler-v2/nodes/merged.yaml
  ```
- ProxyPool 镜像链接：
  ```txt
  https://ghproxy.net/https://raw.githubusercontent.com/snakem982/proxypool/main/source/clash-meta-2.yaml
  ```

### 2. jsDelivr CDN 加速

针对 GitHub 公开仓库的文件，可以通过 jsDelivr 全球 CDN 进行缓存加速拉取。

常用的 jsDelivr 节点：

- `https://cdn.jsdelivr.net/`
- `https://fastly.jsdelivr.net/`

**转换规则**：
把 `https://raw.githubusercontent.com/<用户名>/<仓库名>/<分支>/<文件路径>`  
替换为：  
`https://fastly.jsdelivr.net/gh/<用户名>/<仓库名>@<分支>/<文件路径>`

**替换示例**：

- AutoMergePublicNodes CDN 链接：
  ```txt
  https://fastly.jsdelivr.net/gh/chengaopan/AutoMergePublicNodes@master/list.meta.yml
  ```
- FreeNodes CDN 链接：
  ```txt
  https://fastly.jsdelivr.net/gh/Barabama/FreeNodes@feat/ai-crawler-v2/nodes/merged.yaml
  ```
- ProxyPool CDN 链接：
  ```txt
  https://fastly.jsdelivr.net/gh/snakem982/proxypool@main/source/clash-meta-2.yaml
  ```

> [!TIP]
> jsDelivr 节点在国内大部分网络环境下直连访问速度极快，但由于 CDN 存在边缘缓存机制，节点刷新可能略有延迟；而 `ghproxy.net` 为实时反向代理，能第一时间获取最新提交。两个方案可互为备用。
