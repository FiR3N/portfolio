import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../../contexts/Themecontext/ThemeContext";
import cls from "./ThemeToggle.module.css";

interface IThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<IThemeToggleProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      id="theme-toggle"
      className={`${cls.themeToggle} ${className}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </div>
  );
};

export default ThemeToggle;
