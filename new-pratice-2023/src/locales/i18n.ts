import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/resource.json";
import vn from "./vn/resource.json";
import LanguageDetector from "i18next-browser-languagedetector";

export const LangKeys = {
  en: "en",
  vi: "vi",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      [LangKeys.en]: {
        translation: en,
      },

      [LangKeys.vi]: {
        translation: vn,
      },
    },
    fallbackLng: LangKeys.en,
    debug: false,
    interpolation: { escapeValue: false },
  });

export default i18n;
