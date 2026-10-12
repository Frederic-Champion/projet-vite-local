import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContexte {
  modifierTheme: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContexte | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const preference = localStorage.getItem("theme");
    if (preference === "dark" || preference === "light") return preference;
    return "light";
  });

  function modifierTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    const page = document.documentElement;
    page.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", `${theme}`);
  }, [theme]);

  return <ThemeContext value={{ theme, modifierTheme }}>{children}</ThemeContext>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme doit être utilisé dans ThemeProvider");
  return context;
}
