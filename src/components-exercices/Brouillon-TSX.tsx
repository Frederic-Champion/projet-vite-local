/*
Monture cassée — Ray-Ban Aviator   [Traiter]
Verres rayés — Persol 649          [Traiter]
Branche tordue — Oakley Holbrook   [Traiter]
*/

import { useState } from "react";

const SAV = [
  { id: "s1", probleme: "Monture cassée", modele: "Ray-Ban Aviator", traite: false },
  { id: "s2", probleme: "Verres rayés", modele: "Persol 649", traite: false },
  { id: "s3", probleme: "Branche tordue", modele: "Oakley Holbrook", traite: false },
];

interface Sav {
  id: string;
  probleme: string;
  modele: string;
  traite: boolean;
}

interface ListeSavProps {
  savs: Sav[];
  onTraiter: (id: string) => void;
}

function ListeSav({ savs, onTraiter }: ListeSavProps) {
  return (
    <ul>
      {savs.map((s) => (
        <li key={s.id}>
          {s.probleme} — {s.modele}
          {s.traite ? " ✓ traité" : <button onClick={() => onTraiter(s.id)}>Traiter</button>}
        </li>
      ))}
    </ul>
  );
}

export default function ExportListeSav() {
  const [liste, setListe] = useState(SAV);

  function retirer(id: string) {
    setListe(
      liste.map((l) => {
        return l.id === id ? { ...l, traite: !l.traite } : l;
      }),
    );
  }
  return <ListeSav savs={liste} onTraiter={retirer} />;
}
