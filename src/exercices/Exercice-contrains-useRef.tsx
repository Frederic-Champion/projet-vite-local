/* résultat attendu

Fermé :                     Ouvert :
┌──────────────────┐        ┌──────────────────┐
│ Marque : Toutes ▾│        │ Marque : Toutes ▾│
└──────────────────┘        ├──────────────────┤
                            │ Toutes           │
                            │ Ray-Ban          │
                            │ Oakley           │
                            │ Lindberg         │
                            └──────────────────┘



  return (
    <div className="flex max-w-fit flex-col gap-2 rounded-lg border p-4 text-left">
      <label className="flex justify-between" htmlFor="marque">
        <span>Marque : </span>
        <select id="marque">
          <option>Toutes</option>
          <option>Ray-Ban</option>
          <option>Oakley</option>
          <option>Lindberg</option>
        </select>
      </label>
    </div>
  );

  la version classique native en HTML; si je souhaite personnalisé au mieux un selecteur, voir ci dessous.

  */

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type M = "Toutes" | "Ray-Ban" | "Oakley" | "Lindberg";

const marque = ["Toutes", "Ray-Ban", "Oakley", "Lindberg"];

export function ExerciceUseRefContains() {
  const [marqueAffiche, setMarqueAffiche] = useState<M[] | []>([]);

  return (
    <div className="flex max-w-fit flex-col gap-2 rounded-lg border p-4 text-left">
      <button className="flex cursor-pointer justify-between gap-2 border p-2">
        <p>Marque : </p>
        <div className="flex">
          <ul>
            {marque.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <ChevronDown />
        </div>
      </button>
    </div>
  );
}
