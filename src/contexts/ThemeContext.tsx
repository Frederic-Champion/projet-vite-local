import type React from "react";
import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "./hookContext";

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
