import cls from "./ThemeToggleFromTo.module.css";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const ThemeToggleFromTo: React.FC = () => {
  return (
    <ThemeToggle
      className={cls.themeToggle}
      renderProp={(theme) => (
        <>
          <FaMoon className={`${theme === "light" && cls._disabled}`} />{" "}
          <FaSun className={`${theme === "dark" && cls._disabled}`} />
          <div
            className={`${cls.themeToggleActiveCirle} ${
              theme === "light" && cls._move
            }`}
          ></div>
        </>
      )}
    />
  );
};

export default ThemeToggleFromTo;
