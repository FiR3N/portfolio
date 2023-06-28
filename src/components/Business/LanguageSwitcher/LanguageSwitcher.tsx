import { useTranslation } from "react-i18next";
import cls from "./LanguageSwitcher.module.scss";
import { languages } from "../../../utils/consts";
import i18next from "i18next";

const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const languageChangeHandler = () => {
    const currentLanguage = localStorage.getItem("language") || "ru";
    const indexCurrentLanguage = languages.findIndex(
      (item) => item === currentLanguage
    );
    const newLanguage =
      indexCurrentLanguage + 1 >= languages.length
        ? languages[0]
        : languages[indexCurrentLanguage + 1];
    localStorage.setItem("language", newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  return (
    <div className={cls.languageSwitcher} onClick={languageChangeHandler}>
      {t("currentLanguage.name")}
    </div>
  );
};

export default LanguageSwitcher;
