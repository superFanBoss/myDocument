const navConf = require('../config/toolBarConf');
const rnConf = require('../config/reactNativeConf');
const ES6Conf = require('../config/ES6Conf');
const reactConf = require('../config/reactConf');
module.exports = {
    base: '/myDocument/',
    title: '十一点半',
    description: 'Just playing around',
    themeConfig: {
    nav: navConf,
    sidebar: {
        '/reactNative/': rnConf,
        '/language/ES6/': ES6Conf,
        '/react/':reactConf
    }
}
}