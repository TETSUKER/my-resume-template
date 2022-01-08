import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/locale.json';
import translationRU from './locales/ru/locale.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;