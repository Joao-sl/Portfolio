import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en.json';
import ptbrTranslation from '../locales/ptbr.json';

i18next.use(initReactI18next).init({
  debug: import.meta.env.DEV,
  resources: {
    ptbr: {
      translation: ptbrTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  lng: 'ptbr',
  fallbackLng: 'ptbr',
  interpolation: {
    escapeValue: false,
  },
});
