import { useTheme } from "../../../../contexts/Themecontext/ThemeContext";
import cls from "./ThemeToggle.module.css";
import type { Theme } from "../../../../types";

interface IThemeToggleProps {
  className?: string;
  renderProp: ((args: Theme) => React.ReactNode) | React.ReactNode;
}

const ThemeToggle: React.FC<IThemeToggleProps> = ({
  className = "",
  renderProp,
}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      id="theme-toggle"
      className={`${cls.themeToggle} ${className}`}
      onClick={toggleTheme}
    >
      {typeof renderProp === "function" ? renderProp(theme) : renderProp}
    </div>
  );
};

export default ThemeToggle;
