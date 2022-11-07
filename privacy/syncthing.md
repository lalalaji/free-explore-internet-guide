# syncthing

这是一个开源的跨平台文件分享工具。

## 开始使用

### 安装

有两种安装方式，第一种就是直接下载压缩包。到[项目发布页](https://github.com/syncthing/syncthing/releases)寻找发布的最新版，然后在项目资产（Assets）中寻找适合自己系统的压缩包并下载。例如现在常用的 64 位 windows 系统，就去寻找类似`syncthing-widows-amd64-v1.22`名称的压缩包。

如果无法下载的话参考[解决 Github 访问问题](/network/github.md)。下载之后解压就获得了可以运行的文件夹。

如果你想使用命令行方式安装，还可以试试 scoop 这个工具，安装配置好之后可以像 linux 系统那样通过命令行方式安装。

```sh
scoop install syncthing
```

### 启动

下载好之后，就可以通过双击`syncthing.exe`或者命令行运行`syncthing`的方式启动软件。启动之后应当会自动打开浏览器，并显示 web 管理界面。

![syncthing](/img/syncthing.png)

### 同步文件

默认情况下同步文件夹位于`~/Sync`。在同步之前需要先配置远程设备，需要得知设备 ID。设备 ID 可以通过右上角菜单*操作->显示 ID*的方式获得，有了 ID，就可以将对方添加为远程设备。之后就可以同步文件了。
