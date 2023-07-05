import { useState, useCallback, ReactNode, FC } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "false" ? false : true
  );

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
    localStorage.setItem("isDark", String(!isDark));
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
