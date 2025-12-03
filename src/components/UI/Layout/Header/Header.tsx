import ThemeToggleClassic from "../../ThemeToggles/ThemeToggleClassic/ThemeToggleClassic";
import ThemeToggleFromTo from "../../ThemeToggles/ThemeToggleFromTo/ThemeToggleFromTo";
import cls from "./Header.module.css";
import React, { useLayoutEffect, useState } from "react";

const Header: React.FC = () => {
  const [isHambActive, setIsHambActive] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (isHambActive) {
      document.querySelector("body")?.classList.add("_noscroll");
    } else {
      document.querySelector("body")?.classList.remove("_noscroll");
    }
  }, [isHambActive]);

  return (
    <header className={cls.header}>
      <div className={`${cls.headerContent} container`}>
        <p className={cls.headerLogo}>Владислав Космач</p>
        <nav className={cls.headerNav}>
          <a href="#home">Главная</a>
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className={cls.headerButtons}>
          <ThemeToggleFromTo />
          <ThemeToggleClassic />
          <div
            className={`${cls.headerHamb} ${isHambActive ? cls._active : ""}`}
            onClick={() => setIsHambActive((prev) => !prev)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div
          className={`${cls.headerPopup} ${isHambActive ? cls._active : ""}`}
        >
          <nav
            className={cls.headerNav}
            onClick={() => setIsHambActive((prev) => !prev)}
          >
            <a href="#home">Главная</a>
            <a href="#about">Обо мне</a>
            <a href="#skills">Умения</a>
            <a href="#projects">Проекты</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
