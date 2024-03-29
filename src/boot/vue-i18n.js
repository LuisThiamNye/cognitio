import VueI18n from 'vue-i18n';
import messages from 'src/i18n';
import { Quasar } from 'quasar';

export default ({ app, Vue }) => {
    // we tell Vue to use our Vue package:
    Vue.use(VueI18n);

    // Set i18n instance on app;
    // We inject it into root component by doing so;
    // new Vue({..., i18n: ... }).$mount(...)

    app.i18n = new VueI18n({
        locale: Quasar.lang.getLocale(),
        fallbackLocale: 'en-gb',
        messages,
    });
};
