import i18n from "i18next"
import translationEN from "./locales/en/translation.json"
import translationPT from "./locales/pt/translation.json"
import translationRU from "./locales/ru/translation.json"
import translationDE from "./locales/de/translation.json"
import translationFR from "./locales/fr/translation.json"
import translationES from "./locales/es/translation.json"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  },
  ru: {
    translation: translationRU
  },
  de: {
    translation: translationDE
  },
  fr: {
    translation: translationFR
  },
  es: {
    translation: translationES
  }
}

i18n
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  })