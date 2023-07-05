import { FC, useContext } from "react";
import cls from "./AboutMe.module.scss";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../contexts/ThemeContext";

import me from "../../../assets/images/startinfo-me.jpg";

const AboutMe: FC = () => {
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }
  const { isDark } = themeContext;

  return (
    <div
      className={classNames(
        isDark ? cls.aboutMeDark : cls.aboutMeLight,
        cls.aboutMe
      )}
    >
      <div className={classNames(cls.aboutMeContent, "container")}>
        <h2 className={cls.aboutMeTitle}>{t("aboutMe.title")}</h2>
        <div className={cls.aboutMeMain}>
          <div className={cls.aboutMeMainText}>
            <p className="default-text">{t("aboutMe.text.part1")}</p>
            <p className="default-text">{t("aboutMe.text.part2")}</p>
            <p className="default-text">{t("aboutMe.text.part3")}</p>
            <p
              className="default-text"
              dangerouslySetInnerHTML={{
                __html: t("aboutMe.text.part4"),
              }}
            ></p>
            <p className="default-text">{t("aboutMe.text.part5")}</p>
          </div>

          <img className={cls.aboutMeMainImage} src={me} alt="It's me man" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
