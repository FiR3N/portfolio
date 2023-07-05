import { FC, useContext, useLayoutEffect, useState } from "react";
import cls from "./Header.module.scss";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../Business/LanguageSwitcher/LanguageSwitcher";
import { ThemeContext } from "../../../contexts/ThemeContext";
import ThemeSwitcher from "../../Business/ThemeSwitcher/ThemeSwitcher";

const Header: FC = () => {
  const { t } = useTranslation();
  const [isHambActive, setIsHambActive] = useState(false);
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return null;
  }
  const { isDark } = themeContext;

  useLayoutEffect(() => {
    if (isHambActive) {
      document.body.classList.add("_noscroll");
    } else {
      document.body.classList.remove("_noscroll");
    }
  }, [isHambActive]);

  return (
    <header
      className={classNames(
        isDark ? cls.headerDark : cls.headerLight,
        cls.header
      )}
    >
      <div className={classNames(cls.headerContent, "container")}>
        <div
          className={classNames(
            isHambActive && cls._popupActive,
            cls.headerPopup
          )}
        >
          <nav className={cls.navbar}>
            <ul className={cls.menuList}>
              <li className={classNames(cls.menuItem, cls._menuItemActive)}>
                {t("navbar.home")}
              </li>
              <li className={cls.menuItem}>{t("navbar.about")}</li>
              <li className={cls.menuItem}>{t("navbar.skills")}</li>
              <li className={cls.menuItem}>{t("navbar.works")}</li>
              <li className={cls.menuItem}>{t("navbar.contact")}</li>
            </ul>
          </nav>
        </div>

        <div className={cls.logo}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
          </svg>
          <p className={cls.logoText}>{t("name")}</p>
        </div>
        <nav className={cls.navbar}>
          <ul className={cls.menuList}>
            <li className={cls.menuItem}>{t("navbar.home")}</li>
            <li className={cls.menuItem}>{t("navbar.about")}</li>
            <li className={cls.menuItem}>{t("navbar.skills")}</li>
            <li className={cls.menuItem}>{t("navbar.works")}</li>
            <li className={cls.menuItem}>{t("navbar.contact")}</li>
          </ul>
        </nav>
        <div className={cls.headerButtons}>
          <div
            className={classNames(isHambActive && cls._hambActive, cls.hamb)}
            onClick={() => setIsHambActive((prev) => !prev)}
          >
            <div className={cls.hambContent}>
              <span className={cls.hambBar}></span>
              <span className={cls.hambBar}></span>
              <span className={cls.hambBar}></span>
            </div>
          </div>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
