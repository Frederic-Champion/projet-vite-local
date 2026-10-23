import { createContext, useContext } from "react";

export type Magasin = "Tours" | "Amboise";

interface MagasinContexte {
  magasin: Magasin;
  modifierMagasin: (valeur: Magasin) => void;
}

export const MagasinContext = createContext<MagasinContexte | null>(null);

export function useMagasin() {
  const contexte = useContext(MagasinContext);
  if (!contexte) throw new Error("useMagasin doit être utilisé dans un MagasinProvider");
  return contexte;
}

/*  2eme contexte séparé  */

export type Theme = "light" | "dark";

interface ThemeContexte {
  modifierTheme: () => void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContexte | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme doit être utilisé dans ThemeProvider");
  return context;
}
