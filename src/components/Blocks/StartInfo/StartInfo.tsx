import { FC, useContext } from "react";

import cls from "./StartInfo.module.scss";
import { useTranslation } from "react-i18next";
import Button from "../../UI/Button/Button";
import classNames from "classnames";
import { ThemeContext } from "../../../contexts/ThemeContext";

import { TypeAnimation } from "react-type-animation";

const StartInfo: FC = () => {
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return null;
  }
  const { isDark } = themeContext;

  return (
    <div
      className={classNames(
        isDark ? cls.startInfoDark : cls.startInfoLight,
        cls.startInfo
      )}
    >
      <div className={classNames(cls.startInfoContent, "container")}>
        <div className={cls.startInfoText}>
          <p className={classNames(cls.startInfoTextGreeting, "purple-text")}>
            {t("startInfo.greeting.part1")}
            <span> 👋 </span>
            {t("startInfo.greeting.part2")}
          </p>
          <h1 className={cls.startInfoTextName}>{t("name")}</h1>
          <TypeAnimation
            key={t("startInfo.animatedText.part1")}
            sequence={[t("startInfo.animatedText.part1"), 1000]}
            className={cls.animatedText}
            repeat={Infinity}
          />
          <p className={classNames(cls.startInfoTextDesc, "default-text")}>
            {t("startInfo.text")}
          </p>
          <Button>{t("startInfo.buttonText")}</Button>
        </div>
      </div>
    </div>
  );
};

export default StartInfo;
