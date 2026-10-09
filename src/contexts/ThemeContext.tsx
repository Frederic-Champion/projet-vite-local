import type React from "react";
import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContexte {
  modifierTheme: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContexte | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  function modifierTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return <ThemeContext value={{ theme, modifierTheme }}>{children}</ThemeContext>;
}

export function BoutonTheme() {
  const themeAffiche = useContext(ThemeContext);
  if (!themeAffiche) throw new Error("BoutonTheme doit être placé dans ThemeProvider");

  const { theme, modifierTheme } = themeAffiche;
  return (
    <button type="button" onClick={modifierTheme} className="border p-2">
      thème : {theme}
    </button>
  );
}
