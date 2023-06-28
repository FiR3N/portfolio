import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import by from "../assets/locales/belarusian.json";
import ru from "../assets/locales/russian.json";
import en from "../assets/locales/english.json";

i18next.use(initReactI18next).init({
  lng: localStorage.getItem("language") ?? "ru",
  fallbackLng: "ru",
  resources: {
    ru: {
      translation: ru,
    },
    en: {
      translation: en,
    },
    by: {
      translation: by,
    },
  },
});

export default i18next;
