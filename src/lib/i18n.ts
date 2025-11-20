import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en.json';
import ptbrTranslation from '../locales/ptbr.json';

i18next.use(initReactI18next).init({
  debug: import.meta.env.DEV,
  resources: {
    'pt-BR': {
      translation: ptbrTranslation,
    },
    'en-US': {
      translation: enTranslation,
    },
  },
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
});
