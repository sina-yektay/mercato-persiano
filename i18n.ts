import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./public/locales/en/common.json";
import itTranslation from "./public/locales/it/common.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  it: {
    translation: itTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en", // Fallback language if translation is not available for the selected language
  interpolation: {
    escapeValue: false, // React already escapes the values, so no need to escape again
  },
});

export default i18n;
