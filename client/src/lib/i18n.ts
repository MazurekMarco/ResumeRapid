import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from '../locales/en/translation.json';
import itTranslation from '../locales/it/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  it: {
    translation: itTranslation
  }
};

// Initialize i18next after the app has mounted
const initI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      debug: false,
      interpolation: {
        escapeValue: false, // React already escapes values
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      }
    });
    
  return i18n;
};

export { initI18n };
export default i18n;