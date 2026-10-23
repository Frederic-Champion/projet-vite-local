import React, { useState } from "react";
import { MagasinContext, type Magasin } from "./hookContext";

export function MagasinProvider({children}: {children: React.ReactNode}) {
  const [magasin, setMagasin] = useState<Magasin>("Tours");

  function modifierMagasin(valeur: Magasin) {
    setMagasin(valeur);
  }

  return <MagasinContext value={{magasin, modifierMagasin}}>{children}</MagasinContext>;
}

