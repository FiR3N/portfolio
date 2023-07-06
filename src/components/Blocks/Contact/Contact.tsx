import { FC, useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import cls from "./Contact.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const Contact: FC = () => {
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return;
  }
  const { isDark } = themeContext;

  return (
    <div
      className={classNames(
        isDark ? cls.contactDark : cls.contactLight,
        cls.contact
      )}
    >
      <div className={classNames(cls.contactContent, "container")}>
        <h2 className={cls.contactTitle}>{t("contact.name")}</h2>
        <p
          className={classNames(cls.contactText, "default-text")}
          dangerouslySetInnerHTML={{
            __html: t("contact.text"),
          }}
        ></p>
      </div>
    </div>
  );
};

export default Contact;
