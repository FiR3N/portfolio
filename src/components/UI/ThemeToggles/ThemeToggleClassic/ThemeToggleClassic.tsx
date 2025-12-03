import cls from "./ThemeToggleClassic.module.css";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const ThemeToggleClassic: React.FC = () => {
  return (
    <ThemeToggle
      className={cls.themeToggle}
      renderProp={(theme) => (theme === "light" ? <FaMoon /> : <FaSun />)}
    />
  );
};

export default ThemeToggleClassic;
