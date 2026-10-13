import React, { createContext, useContext, useState } from "react";

type Magasin = "Tours" | "Amboise";

interface MagasinContexte {
  magasin: Magasin;
  modifierMagasin: (valeur: Magasin) => void;
}

const MagasinContext = createContext<MagasinContexte | null>(null);

export function MagasinProvider({children}: {children: React.ReactNode}) {
  const [magasin, setMagasin] = useState<Magasin>("Tours");

  function modifierMagasin(valeur: Magasin) {
    setMagasin(valeur);
  }

  return <MagasinContext value={{magasin, modifierMagasin}}>{children}</MagasinContext>;
}

export function useMagasin() {
  const contexte = useContext(MagasinContext);
  if (!contexte) throw new Error("useMagasin doit être utilisé dans un MagasinProvider");
  return contexte;
}