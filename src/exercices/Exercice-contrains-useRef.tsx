import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Marque = "Toutes" | "Ray-Ban" | "Oakley" | "Lindberg";

const MARQUES: Marque[] = ["Toutes", "Ray-Ban", "Oakley", "Lindberg"];

export function ExerciceUseRefContains() {
  const [marque, setMarque] = useState<Marque>("Toutes");
  const [ouvert, setOuvert] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // e.target est un EventTarget, contains attend un Node → as Node
      if (!menuRef.current?.contains(e.target as Node)) {
        setOuvert(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick); // même référence → bien retiré
  }, []);

  function choisir(m: Marque) {
    setMarque(m);
    setOuvert(false);
  }

  return (
    <div ref={menuRef} className="relative max-w-fit">
      <button
        onClick={() => setOuvert((prev) => !prev)}
        className="flex cursor-pointer items-center gap-2 rounded-lg border p-2"
      >
        Marque : {marque}
        <ChevronDown size={16} />
      </button>

      {ouvert && (
        <ul className="absolute top-full left-0 z-10 mt-1 w-full rounded-lg border bg-white p-1">
          {MARQUES.map((m) => (
            <li key={m}>
              <button onClick={() => choisir(m)} className="w-full cursor-pointer p-2 text-left hover:bg-gray-100">
                {m}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}