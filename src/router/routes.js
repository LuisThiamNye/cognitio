
const routes = [
    {
        path: '/',
        component: () => import('layouts/Home'),
        children: [
            {
                path: '',
                name: 'HomePage',
                component: () => import('pages/home/Index'),
            },
        ],
    },
    {
        path: '/backstage',
        component: () => import('layouts/Backstage'),
        children: [{
            path: '',
            redirect: 'preferences',
        },
        {
            path: 'preferences',
            name: 'AppPreferences',
            component: () => import('pages/backstage/Preferences'),
        },
        {
            path: 'about',
            name: 'AboutPage',
            component: () => import('pages/backstage/About'),
        },
        ],
    },
    {
        path: '/sheet',
        component: () => import('layouts/Sheet'),
        children: [{
            path: '',
            component: () => import('pages/sheet/Index'),
        },
        ],
    },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404'),
    });
}

export default routes;
