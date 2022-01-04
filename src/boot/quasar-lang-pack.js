import { Quasar } from 'quasar';

export default async () => {
    const langIso = Quasar.lang.getLocale();

    try {
        await import(`quasar/lang/${langIso}`)
            .then((requestedLang) => {
                Quasar.lang.set(requestedLang.default);
            });
    } catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
    }
};
