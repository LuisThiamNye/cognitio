// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

module.exports = ctx => ({
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: ['vue-i18n', 'quasar-lang-pack'],

    css: ['app.styl', 'fonts.styl', 'colortheme.styl'],

    extras: [
        // Icons: https://quasar.dev/vue-components/icon#Usage
        'eva-icons', // prefix eva-
        'material-icons-round', // prefix r_
        'material-icons',
    ],

    framework: {
        // iconSet: 'ionicons-v4',
        lang: 'en-gb', // Quasar language

        // all: true, // --- includes everything; for dev only!

        components: [
            'QLayout',
            'QHeader',
            'QFooter',
            'QDrawer',
            'QPageContainer',
            'QPage',
            'QBtn',
            'QIcon',
            'QList',
            'QItem',
            'QItemSection',
            'QItemLabel',
            'QScrollArea',
            'QTabs',
            'QTab',
            'QRouteTab',
            'QToolbar',
            'QToolbarTitle',
            'QImg',
        ],

        directives: [],

        // Quasar plugins
        plugins: [
            'LocalStorage',
            'SessionStorage',
        ],
    },

    supportIE: false,

    build: {
        scopeHoisting: true,
        // vueRouterMode: 'history',
        // vueCompiler: true,
        // gzip: true,
        // analyze: true,
        // extractCSS: false,
        extendWebpack(cfg) {
            cfg.module.rules.push({
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    formatter: require('eslint').CLIEngine.getFormatter('stylish'),
                },
            });
            cfg.module.rules.push({
                resourceQuery: /blockType=i18n/,
                use: [{ loader: '@kazupon/vue-i18n-loader' }, { loader: 'yaml-loader' }],
            });
        },
    },

    devServer: {
        // https: true,
        // port: 8080,
        open: true, // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    ssr: {
        pwa: false,
    },

    pwa: {
        // workboxPluginMode: 'InjectManifest',
        // workboxOptions: {}, // only for NON InjectManifest
        manifest: {
            // name: 'Cognitio',
            // short_name: 'Cognitio',
            // description: 'The study app',
            display: 'standalone',
            orientation: 'portrait',
            background_color: '#ffffff',
            theme_color: '#027be3',
            icons: [
                {
                    src: 'statics/icons/icon-128x128.png',
                    sizes: '128x128',
                    type: 'image/png',
                },
                {
                    src: 'statics/icons/icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: 'statics/icons/icon-256x256.png',
                    sizes: '256x256',
                    type: 'image/png',
                },
                {
                    src: 'statics/icons/icon-384x384.png',
                    sizes: '384x384',
                    type: 'image/png',
                },
                {
                    src: 'statics/icons/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },
    },

    cordova: {
        // id: 'com.luisthiamnye.cognitio',
        // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
        // bundler: 'builder', // or 'packager'

        extendWebpack(cfg) {
            // do something with Electron main process Webpack cfg
            // chainWebpack also available besides this extendWebpack
        },

        bundler: 'builder',

        packager: {
            // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
            // OS X / Mac App Store
            // appBundleId: '',
            // appCategoryType: '',
            // osxSign: '',
            // protocol: 'myapp://path',
            // Windows only
            // win32metadata: { ... }
        },

        builder: {
            // https://www.electron.build/configuration/configuration

            appId: 'com.luisthiamnye.cognitio',
            mac: {
                category: 'public.app-category.education',
            },
        },
    },
});
