import { FC, useContext } from "react";
import cls from "./Projects.module.scss";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../contexts/ThemeContext";
import classNames from "classnames";
import projects from "../../../assets/data/projects.json";

import Button from "../../UI/Button/Button";

const Projects: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return;
  }
  const { isDark } = themeContext;

  return (
    <div
      className={classNames(
        isDark ? cls.projectsDark : cls.projectsLight,
        cls.projects
      )}
    >
      <div className={classNames(cls.projectsContent, "container")}>
        <h2 className={cls.projectsTitle}>{t("projects.title")}</h2>
        <div className={cls.projectsList}>
          {projects.map((project) => (
            <div className={cls.projectsItem}>
              <p className={classNames(cls.projectsItemType, "purple-text")}>
                {currentLanguage === "ru"
                  ? project.type.ru
                  : currentLanguage === "en"
                  ? project.type.en
                  : project.type.by}
              </p>
              <h3 className={cls.projectsItemTitle}>
                {currentLanguage === "ru"
                  ? project.name.ru
                  : currentLanguage === "en"
                  ? project.name.en
                  : project.name.by}
              </h3>
              <div className={cls.projectsItemLinks}>
                {project.github.links.map((link) => (
                  <a
                    href={link}
                    target="_blank"
                    className={cls.projectsItemLink}
                  >
                    <svg viewBox="0 0 128 128">
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                        ></path>
                        <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                      </g>
                    </svg>
                  </a>
                ))}
              </div>
              <img
                src={project.image}
                alt={"project_image"}
                className={cls.projectsItemImage}
              />
              <div className={cls.projectsItemTechnologys}></div>
              <p
                className={classNames(
                  cls.projectsItemDescription,
                  "default-text"
                )}
              >
                {" "}
                {currentLanguage === "ru"
                  ? project.description?.ru
                  : currentLanguage === "en"
                  ? project.description?.en
                  : project.description?.by}
              </p>
              <a href={project.demoLink} target="_blank">
                <Button>
                  {t("projects.buttonText")}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                  </svg>
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
