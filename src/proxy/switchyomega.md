# SwitchyOmega 浏览器扩展

SwitchyOmega 是一个浏览器代理扩展，可以根据预设或者自定义的规则来为每一个网页设置是否使用代理，让你流畅的访问国内和墙外网站。

## 安装

现在主流浏览器都是 chromium 内核，因此都支持 chrome 商店的扩展，直接访问[chrome 商店](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en)即可将扩展安装到浏览器中。

如果你没办法访问 chrome 商店的话，也可以从 SwitchyOmega 的 Github 发布页下载[crx 文件](https://github.com/FelisCatus/SwitchyOmega/releases/download/v2.5.20/SwitchyOmega_Chromium.crx)，然后本地安装。

## 配置

点击浏览器上 SwitchyOmega 的扩展图标，选择设置，打开设置窗口。

先点击左边情景模式的*新建情景模式*，新建一个代理服务器模式，并按照自己当前所使用的代理配置填写内容。配置完毕后记得保存。

![proxy](/img/switchyomega-proxy.png)

然后再点击*新建情景模式*，新建一个自动切换模式。将默认情景模式设置为*直接连接*，匹配规则列表的设置为*刚刚设置的代理规则*，然后在*规则列表设置*那里选择*AutoProxy*格式，并填入`https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt`作为预设的规则，再点击*立即更新情景模式*。最后别忘了保存。

![auto](/img/switchyomega-auto.png)

这样一来，SwitchyOmega 扩展的配置就算完成了。这样浏览器在访问一个网站的时候，默认会直接连接，假如遇到手动设定或者预设规则里面的网址时就会切换使用代理访问。假如遇到了不在规则中又无法访问的网站时，只需要手动点击 SwitchyOmega 扩展，然后选择加入代理规则，这样网页就会自动刷新并使用代理访问。

使用一段时间之后，常用的网站都根据规则分类好了，你就可以享受丝滑的上网体验，国内墙外自动切换两不误。
