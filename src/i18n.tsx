import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import englishTranslations from './locales/en/translation.json';
import frenchTranslations from './locales/fr/translation.json';


const i18n = i18next.createInstance({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    ns: ['modiffy'],
    defaultNS: 'modiffy',
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
    resources: {
        en: { modiffy: englishTranslations },
        fr: { modiffy: frenchTranslations },
    },
});

i18n.use(initReactI18next).init();

export default i18n;
