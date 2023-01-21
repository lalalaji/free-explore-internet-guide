---
prev: /airport/glados.md
---

# Clash For Windows 教程

看了前一篇文章（[自用机场推荐——Glados](/airport/glados.md)）的朋友或许对 clash for windows（以下简称 cfw）这个软件的功能不太了解，这里就来简单介绍一下这个软件的功能。

如果你需要更详细的文档，也可以直接查看下面的官方文档，里面详细介绍了 cfw 的各项功能。我这里只简单介绍一下几个常用的功能。

<https://docs.cfw.lbyczf.com>

## 下载软件

cfw 的安装包可以在 Github 上找到，链接<https://github.com/Fndroid/clash_for_windows_pkg/releases>，找形如`Clash.for.Windows.Setup.0.20.14.exe`的链接，这就是要下载的 Windows 版安装包。如果找不到这样的链接，点击下方的*Show all assets*就可以展开所有下载包了。

如果下载速度慢，可以右键点击链接，选择*复制链接地址*，然后将这个形如`https://github.com/Fndroid/clash_for_windows_pkg/releases/download/0.20.14/Clash.for.Windows.Setup.xxxx.exe`的链接复制到[ghproxy](https://ghproxy.com)中代理下载，应该就可以下载成功了。

## 快速上手

### 导入配置文件

当你购买了支持 Clash 的机场订阅服务之后，应该会获得一个 Clash 配置文件订阅地址，访问这个地址即可下载配置文件。cfw 支持从订阅地址下载配置，切换到 Profile 界面，即可进行如下操作。

1. 将订阅地址复制粘贴到这里
1. 点击下载按钮即可下载配置文件
1. 下载之后再点一下，出现绿色竖线表示已经启用该配置
1. 将来如果需要更新的话，点击右边的刷新按钮即可

![添加订阅](/img/cfw-profile.png)

如果无法 cfw 下载配置文件失败，也可以从浏览器或者其他地方先下载配置文件，然后拖动到 cfw 软件上，一样可以启用配置。

### 开启代理

导入配置文件之后，返回 General 界面，开启系统代理以及开机自启，即可开始使用 cfw 代理上网。

![开启代理](/img/cfw-start.png)

如果你仅需要在浏览器中使用代理上网，可以参考[Switchy Omega 浏览器扩展](/proxy/switchyomega.md)这一篇的内容配置扩展，配置完毕后关闭系统代理，这样就可以避免那些使用系统代理的程序走国外节点，反而导致速度变慢的问题。

### 测试节点

支持 clash 的机场通常都包含多个节点，如果某个节点不可用，也可以在 cfw 中切换到其他节点。在切换节点之前也可以通过点击界面上的测试图标来测试节点的延迟。

![测试节点](/img/cfw-proxies.png)

## 功能设置

有一些 cfw 设置我会顺便开启，如果你觉得有用的话，也可以和我一样设置。

### 自动更新配置

你也可以在上面点击右键，选择设置，这样就会弹出一个对话框，在这里可以设置自动更新配置文件的间隔。机场不可能天天更新配置文件，所以 12 或者 24 小时足够了。

![打开设置](/img/cfw-profile-settings.png)

![设置自动更新间隔](/img/cfw-autoupdate.png)

### 允许局域网连接

先来看看 cfw 的主界面，在这里可以设置常用的配置。如果你在家里的话，建议允许局域网连接，这样同一路由器下的其他设备就可以通过你的设备来翻墙了，有时候不方便设置 cfw 的时候会很有用。

- Port，本地代理使用的端口号
- Allow LAN，是否允许本地局域网连接，如果允许的话，同一局域网的其他电脑或手机也可以通过代理访问互联网
- IPv6，是否启用 ipv6，如果你的运营商以及家里的路由器都支持 ipv6 的话就可以开启
- UWP Loopback，win 系统下 uwp 应用默认直连，无法走代理，点击它可以启动调试工具解除该限制
- System Proxy，是否启用系统代理，因为 cfw 的订阅规则一般包含了各种地址的访问规则，所以启用系统代理也没有什么影响
- Start with Windows，是否开机自启

![主界面配置](/img/cfw-general.png)

### 静默启动

cfw 启动的时候会开启软件界面，需要手动点叉让其最小化到系统托盘区，开启静默启动选项，可以让它自动在后台悄悄运行。

![静默启动](/img/cfw-silent-start.png)

### 按延迟排序节点

如果需要按延迟排序节点的话，按下图设置。这样在节点界面所有节点就会以延迟排序，方便我们手动选择节点。

![按延迟排序](/img/cfw-orderby-latency.png)

### TUN 模式全局代理

系统代理可以应对大多数情况，但是有些程序它不吃系统代理，也没有设置代理选项的地方。这时候如果想要使用代理就可以使用 TUN Mode，该模式会新增一块虚拟网卡，将所有网络流量导入这块网卡，这样就可以实现全局代理，让所有程序都能通过代理运行。不过这种情况下可能导致一些需要直连的程序也走代理运行，这时候可能需要手动添加规则，具体配置方法参考[clash](./clash.md)。

开启 TUN 模式需要先启用*Service Mode*。在 General 界面点击*Service Mode*右边的*Manage*，然后点击*Install*按钮，稍等片刻就会安装完毕，在这个过程中 cfw 会重启。开启成功之后，*Service Mode*旁边就会多出一个绿色的地球图标，表示开启成功。

然后再点击*TUN Mode*的开关，就可以开启 TUN 模式了。遇到问题可以参考[官方文档 常见问题](https://docs.cfw.lbyczf.com/contents/questions.html)，列出了很多常见问题以及解决办法。

## 高级功能

### mixin

mixin 是 cfw 的一项高级功能，允许用户手动添加一部分 clash 配置，然后 cfw 会将其和订阅配置混合在一起。

这个功能非常有用，既可以让用户使用机场订阅的配置，又能够让用户灵活的修改一些规则。mixin 功能需要用户手动编辑配置文件，所以只适合了解 clash 配置文件各项功能的高级用户使用。

mixin 的开启方式很简单，在 clash 主界面找到 mixin，点击旁边的齿轮图标，就能打开编辑器，在其中按需编辑配置文件即可。最后开启 mixin 开关，就能启用它了。

![mixin](/img/cfw-mixin.png)

该文件是 YAML 格式的文件，主要结构就是 mixin 对象，所有要混合的配置都必须在 mixin 对象下。

编辑 mixin 配置文件的时候要格外小心，如果配置内容或者文件格式出错，会导致 clash 无法正常代理。遇到这种情况时，先关掉 mixin 功能，然后检查并修改 mixin 配置文件，修改完成以后，clash 就能正常工作了。

下面是我根据<https://github.com/Loyalsoldier/clash-rules>项目而添加的配置文件，适合 glados 机场。如果你使用的其他机场的服务，记得将规则中的`Proxy`改为你机场配置文件定义中的 Proxy Group 的名字。

```yaml
mixin: # object
  rule-providers:
    reject:
      type: http
      behavior: domain
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
      path: ./ruleset/reject.yaml
      interval: 86400

    icloud:
      type: http
      behavior: domain
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt"
      path: ./ruleset/icloud.yaml
      interval: 86400

    apple:
      type: http
      behavior: domain
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt"
      path: ./ruleset/apple.yaml
      interval: 86400

    google:
      type: http
      behavior: domain
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt"
      path: ./ruleset/google.yaml
      interval: 86400

    proxy:
      type: http
      behavior: domain
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt"
      path: ./ruleset/proxy.yaml
      interval: 86400

    direct:
      type: http
      behavior: domain
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
      path: ./ruleset/direct.yaml
      interval: 86400

    private:
      type: http
      behavior: domain
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt"
      path: ./ruleset/private.yaml
      interval: 86400

    gfw:
      type: http
      behavior: domain
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt"
      path: ./ruleset/gfw.yaml
      interval: 86400

    greatfire:
      type: http
      behavior: domain
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt"
      path: ./ruleset/greatfire.yaml
      interval: 86400

    tld-not-cn:
      type: http
      behavior: domain
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt"
      path: ./ruleset/tld-not-cn.yaml
      interval: 86400

    telegramcidr:
      type: http
      behavior: ipcidr
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt"
      path: ./ruleset/telegramcidr.yaml
      interval: 86400

    cncidr:
      type: http
      behavior: ipcidr
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
      path: ./ruleset/cncidr.yaml
      interval: 86400

    lancidr:
      type: http
      behavior: ipcidr
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt"
      path: ./ruleset/lancidr.yaml
      interval: 86400

    applications:
      type: http
      behavior: classical
      url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt"
      path: ./ruleset/applications.yaml
      interval: 86400
  rules:
    - RULE-SET,applications,DIRECT
    - DOMAIN,clash.razord.top,DIRECT
    - DOMAIN,yacd.haishan.me,DIRECT
    - DOMAIN-SUFFIX,test-ipv6.com,DIRECT
    - DOMAIN-SUFFIX,speedtest.com,DIRECT
    - RULE-SET,private,DIRECT
    - RULE-SET,reject,REJECT
    - RULE-SET,icloud,DIRECT
    - RULE-SET,apple,DIRECT
    - RULE-SET,google,DIRECT
    - RULE-SET,direct,DIRECT
    - RULE-SET,lancidr,DIRECT
    - RULE-SET,cncidr,DIRECT
    - RULE-SET,proxy,Proxy
    - RULE-SET,telegramcidr,Proxy
    - GEOIP,LAN,DIRECT
    - GEOIP,CN,DIRECT
    - MATCH,Proxy
```

## 疑难解答

### 开启系统代理后，UWP 应用无法上网了

这是 Windows 系统的一个限制，UWP 无法访问本地回环地址代理。所以当启用了系统代理之后，UWP 应用就无法上网了。解决办法也很简单，在 General 界面找到*UWP Loopback*，打开工具，然后排除需要访问网络的 UWP 即可。

![UWP Loopback](/img/cfw-uwp-loopback.png)

如果不确定排除哪个应用，点击*Exemplify All*解除所有 UWP 的限制，然后点击*Save Changes*保存即可。

![Exemplify All](/img/cfw-uwp-loopback-acleu.png)
