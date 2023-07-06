import { FC, useContext } from "react";
import cls from "./Footer.module.scss";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Footer: FC = () => {
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return;
  }
  const { isDark } = themeContext;
  return (
    <footer
      className={classNames(
        isDark ? cls.footerDark : cls.footerLight,
        cls.footer
      )}
    >
      <div className={classNames(cls.footerContent, "container")}>
        <p className="default-text">{t("footer.text")}</p>
      </div>
    </footer>
  );
};

export default Footer;
