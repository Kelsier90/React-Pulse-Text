import { createContext, ReactNode, useCallback, useLayoutEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextValueType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextValueType>({
  theme: "dark",
  setTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeState, setThemeState] = useState<Theme>(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme) return localStorageTheme as Theme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const setTheme = useCallback((theme: Theme) => {
    setThemeState(theme);
    localStorage.setItem("theme", theme);
  }, []);

  useLayoutEffect(() => {
    window.document.documentElement.setAttribute("data-theme", themeState);
  }, [themeState]);

  return <ThemeContext value={{ theme: themeState, setTheme }}>{children}</ThemeContext>;
}
