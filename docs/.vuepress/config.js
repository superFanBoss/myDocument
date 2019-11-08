const navConf = require('../config/toolBarConf');
const rnConf = require('../config/reactNativeConf');
module.exports = {
    base: '/myDocument/',
    title: '十一点半',
    description: 'Just playing around',
    themeConfig: {
    nav: navConf,
    sidebar: {
        '/reactNative/': rnConf
    }
}
}