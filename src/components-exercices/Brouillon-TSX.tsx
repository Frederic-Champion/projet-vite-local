/*

Dossier #A12 — Monture Ray-Ban — statut : en attente   [Traité]
Dossier #B07 — Verres Essilor — statut : traité        [Traité]
Dossier #C33 — Étui cuir      — statut : en attente    [Traité]

*/

import { useState } from "react";

const SAVS_INITIAUX = [
  { id: "A12", produit: "Monture Ray-Ban", statut: "en attente" },
  { id: "B07", produit: "Verres Essilor", statut: "traité" },
  { id: "C33", produit: "Étui cuir", statut: "en attente" },
];

interface sav {
  id: string;
  produit: string;
  statut: string;
}

interface ListeSavProps {
  savs: sav[];
  onTraiter: (id: string) => void;
}

function ListeSav({ savs, onTraiter }: ListeSavProps) {
  return (
    <ul>
      {savs.map((s) => (
        <li key={s.id}>
          {s.id} - {s.produit} - statut :{" "}
          {s.statut !== "en attente" ? (
            "traité"
          ) : (
            <>
              en attente
              <button onClick={() => onTraiter(s.id)}>[Traité]</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function PageSav() {
  const [dossiers, setDossiers] = useState<sav[]>(SAVS_INITIAUX);

  function traitement(id: string) {
    setDossiers(
      [...dossiers].map((d) => {
        return d.id === id ? { ...d, statut: "traité" } : d;
      }),
    );
  }

  return <ListeSav savs={dossiers} onTraiter={traitement} />;
}
