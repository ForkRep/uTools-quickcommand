const routes = [{
        path: '/configuration',
        name: 'configuration',
        component: () =>
            import ('pages/ConfigurationPage.vue')
    },
    {
        path: '/code',
        name: 'code',
        component: () =>
            import ('pages/RunCodePage.vue')
    },
    {
        path: '/newcommand',
        component: () =>
            import ('pages/NewCommand.vue')
    },
    {
        path: '/:type(default|files|img|key|regex|window|professional)_:uid(\\w+)',
        name: 'command',
        component: () =>
            import ('pages/CommandPage.vue')
    },
    {
        path: '/panel_:tags(\\w+)',
        name: 'panel',
        component: () =>
            import ('pages/ConfigurationPage.vue')
    },
    {
        path: '/needupdate',
        name: 'needupdate',
        props: true,
        component: () =>
            import ('pages/updateWarningPage.vue')
    },
    {
        path: '/loading',
        name: 'loading',
        component: () =>
            import ('pages/LoadingPage.vue')
    }

]

export default routes