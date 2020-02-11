(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{263:function(a,e,t){a.exports=t.p+"assets/img/run-ios-success.0891e4cf.png"},267:function(a,e,t){"use strict";t.r(e);var s=t(38),r=Object(s.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ios-开发环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-开发环境配置","aria-hidden":"true"}},[a._v("#")]),a._v(" IOS 开发环境配置")]),a._v(" "),s("p",[a._v("基于官网文档")]),a._v(" "),s("h2",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装依赖")]),a._v(" "),s("p",[a._v("必须安装的依赖有：Node、Watchman 和 React Native 命令行工具以及 Xcode。")]),a._v(" "),s("p",[a._v("看一下有没有安装 "),s("a",{attrs:{href:"https://brew.sh/index_zh-cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("Homebrew"),s("OutboundLink")],1),a._v(" ,没有安装先安装一下")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew install node\nbrew install watchman\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[a._v("Homebrew 是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。")])]),a._v(" "),s("p",[a._v("确保你的node是10以上")]),a._v(" "),s("p",[a._v("如果你没办法用科学上网的方式，那就改一下镜像源, cnpm 官网说可能出现问题")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 使用nrm工具切换淘宝源\nnpx nrm use taobao\n\n# 如果之后需要切换回官方源可使用 \nnpx nrm use npm\n")])])]),s("h3",{attrs:{id:"yarn、eact-native-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn、eact-native-cli","aria-hidden":"true"}},[a._v("#")]),a._v(" Yarn、eact-native-cli")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install -g yarn react-native-cli\n")])])]),s("h3",{attrs:{id:"xcode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xcode","aria-hidden":"true"}},[a._v("#")]),a._v(" Xcode")]),a._v(" "),s("p",[a._v("这个Mac电脑直接应用商店搜，然后下载就好了")]),a._v(" "),s("h3",{attrs:{id:"创建新项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建新项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建新项目")]),a._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[a._v("必须要看的注意事项：0.60 及以上版本依赖CocoaPods安装。CocoaPods的仓库在国内也很难访问。如果在CocoaPods的安装步骤卡很久，可以试一下这个"),s("a",{attrs:{href:"https://mirror.tuna.tsinghua.edu.cn/help/CocoaPods/",target:"_blank",rel:"noopener noreferrer"}},[a._v("国内镜像"),s("OutboundLink")],1)])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("react-native init DemoProject\n")])])]),s("h3",{attrs:{id:"运行项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 运行项目")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd DemoProject\nnpm run ios\n")])])]),s("p",[s("img",{attrs:{src:t(263),alt:""}})]),a._v(" "),s("h2",{attrs:{id:"踩坑之路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#踩坑之路","aria-hidden":"true"}},[a._v("#")]),a._v(" 踩坑之路")]),a._v(" "),s("h3",{attrs:{id:"步骤：pod-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤：pod-install","aria-hidden":"true"}},[a._v("#")]),a._v(" 步骤：pod install")]),a._v(" "),s("p",[a._v("报错: 如图")]),a._v(" "),s("div",{staticStyle:{width:"40%"}},[a._v("![](../.vuepress/public/imgs/pod-erorr.png)")]),a._v(" "),s("p",[a._v("说明cocoapods有问题，接下来将cocoapods重新安装到最新版本")]),a._v(" "),s("p",[s("strong",[a._v("打开终端")])]),a._v(" "),s("p",[a._v("1、更新gem:   "),s("code",[a._v("sudo gem update --system")])]),a._v(" "),s("p",[a._v("2、查看gem当前的数据源:     "),s("code",[a._v("gem source -l")])]),a._v(" "),s("p",[a._v("3、删除gem源:  "),s("code",[a._v("gem sources --remove https://ruby.taobao.org/")]),a._v("     --刚查看的数据源")]),a._v(" "),s("p",[a._v("4、修改gem源 ："),s("code",[a._v("gem sources -a https://gems.ruby-china.com")])]),a._v(" "),s("p",[a._v("5、再次查看一下:  "),s("code",[a._v("gem source -l")]),a._v(" --查看是否已更新")]),a._v(" "),s("p",[a._v("6、升级cocoapods:  "),s("code",[a._v("sudo gem install -n /usr/local/bin cocoapods --pre")])]),a._v(" "),s("p",[a._v("7、查看升级后的cocoapods版本: "),s("code",[a._v("pod --version")]),a._v("     -- 1.8.4")]),a._v(" "),s("p",[a._v("至此cocoapods就安装好了")])])},[],!1,null,null,null);e.default=r.exports}}]);