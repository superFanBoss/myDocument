# IOS 开发环境配置

基于官网文档

## 安装依赖

必须安装的依赖有：Node、Watchman 和 React Native 命令行工具以及 Xcode。
 
看一下有没有安装 [Homebrew](https://brew.sh/index_zh-cn) ,没有安装先安装一下

```
brew install node
brew install watchman
```

::: tip
Homebrew 是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。
:::

确保你的node是10以上

如果你没办法用科学上网的方式，那就改一下镜像源, cnpm 官网说可能出现问题

```
# 使用nrm工具切换淘宝源
npx nrm use taobao

# 如果之后需要切换回官方源可使用 
npx nrm use npm
```

### Yarn、eact-native-cli

```
npm install -g yarn react-native-cli
```

### Xcode

这个Mac电脑直接应用商店搜，然后下载就好了

### 创建新项目
::: warning
必须要看的注意事项：0.60 及以上版本依赖CocoaPods安装。CocoaPods的仓库在国内也很难访问。如果在CocoaPods的安装步骤卡很久，可以试一下这个[国内镜像](https://mirror.tuna.tsinghua.edu.cn/help/CocoaPods/)
:::

```
react-native init DemoProject
```

### 运行项目

```
cd DemoProject
npm run ios
```
![](../.vuepress/public/imgs/run-ios-success.png)  





## 踩坑之路

### 步骤：pod install 

报错: 如图

<div style="width: 40%">![](../.vuepress/public/imgs/pod-erorr.png)</div>  

说明cocoapods有问题，接下来将cocoapods重新安装到最新版本

**打开终端**

1、更新gem:&emsp;  `sudo gem update --system`

2、查看gem当前的数据源:&emsp;    `gem source -l`

3、删除gem源:&emsp; `gem sources --remove https://ruby.taobao.org/`   &emsp;&emsp;--刚查看的数据源

4、修改gem源&emsp;：`gem sources -a https://gems.ruby-china.com`

5、再次查看一下:&emsp; `gem source -l` --查看是否已更新

6、升级cocoapods:&emsp; `sudo gem install -n /usr/local/bin cocoapods --pre`

7、查看升级后的cocoapods版本:&emsp;`pod --version`   &emsp;&emsp;-- 1.8.4


至此cocoapods就安装好了