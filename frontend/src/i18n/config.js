import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-xhr-backend";

i18n.use(Backend).use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    fr: {
      translations: require('./locales/fr/translations.json')
    },
    de: {
        translations: require('./locales/de/translations.json')
    },
    es: {
        translations: require('./locales/es/translations.json')
    },
    pt: {
        translations: require('./locales/pt/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'fr', 'de', 'es', 'pt'];

export default i18n;