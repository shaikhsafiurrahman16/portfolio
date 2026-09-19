import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  resolvedTheme: "dark",
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-theme",
  attribute = "class",
}) {
  const [theme, setThemeState] = useState(() => {
    try {
      return localStorage.getItem(storageKey) || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return theme;
  });

  useEffect(() => {
    const root = document.documentElement;

    let targetTheme = theme;
    if (theme === "system") {
      targetTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    setResolvedTheme(targetTheme);

    if (attribute === "class") {
      root.classList.remove("light", "dark");
      root.classList.add(targetTheme);
    } else {
      root.setAttribute(attribute, targetTheme);
    }
  }, [theme, attribute]);

  const setTheme = (newTheme) => {
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch (e) {
      console.error(e);
    }
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
