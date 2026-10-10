import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

interface ThemeContexte {
  modifierTheme: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContexte | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const preference = localStorage.getItem("theme")
    if (preference === "dark" || preference === "light") return preference;
    return 'light';
  });

  function modifierTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    const page = document.documentElement;
    page.classList.toggle("dark", theme === "dark")
    localStorage.setItem('theme', `${theme}`)
  }, [theme])

  return <ThemeContext value={{ theme, modifierTheme }}>{children}</ThemeContext>;
}

export function BoutonTheme() {
  const themeAffiche = useContext(ThemeContext);
  if (!themeAffiche) throw new Error("BoutonTheme doit être placé dans ThemeProvider");

  const { theme, modifierTheme } = themeAffiche;
  return (
    <button type="button" onClick={modifierTheme} className="inline-block cursor-pointer rounded-full border p-2 text-blue-500">
      {theme === "light" ? <Sun size={20}/> : <Moon size={20}/>}
    </button>
  );
}
