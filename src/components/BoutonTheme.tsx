import { useTheme } from "../contexts/hookContext";
import { Sun, Moon } from "lucide-react";


export function BoutonTheme() {
  const context = useTheme();
  const { theme, modifierTheme } = context;

  return (
    <button
      type="button"
      onClick={modifierTheme}
      className="inline-block cursor-pointer rounded-full border p-2 text-blue-500"
      aria-label="Changer de thème"
    >
      {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}