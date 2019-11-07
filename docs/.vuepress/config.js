module.exports = {
    base: '/myDocument/',
    title: '十一点半',
    description: 'Just playing around',
    themeConfig: {
    nav: [{
        text: '简介',
        link: '/'
    },
    {
        text: '小程序',
        link: '/smallProgram/'
    },
    {
        text: 'ReactNative',
        link: '/reactNative/'
    },
    {
        text: '工具',
        items: [{
            text: 'git',
            link: '/tools/git/'
          },
          {
            text: 'webstom',
            link: '/tools/webstom/'
          }
        ]
    }],
    sidebar: {
        '/reactNative/': [{
            title: "指南",
            collapsable: true,
            children: [
                ''
            ]
          },
          {
            title: "快速开始",
            collapsable: true,
            children: [
                'androidConfig'
            ]
          }
        ]
    }
}
}