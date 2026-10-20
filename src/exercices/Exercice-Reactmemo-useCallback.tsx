import { memo, useCallback, useState } from "react";

interface Verre {
  id: number;
  nom: string;
}

const VERRES: Verre[] = [
  { id: 1, nom: "Unifocal standard" },
  { id: 2, nom: "Progressif confort" },
  { id: 3, nom: "Mi-distance bureau" },
];

interface BoutonVerreProps {
  verre: Verre;
  onAjouter: (id: number) => void;
}

const BoutonVerre = memo(function BoutonVerre({ verre, onAjouter }: BoutonVerreProps) {
  console.log("rendu", verre.nom);
  return (
    <button onClick={() => onAjouter(verre.id)} className="border p-2">
      {verre.nom}
    </button>
  );
});

export function ExerciceUseCallback() {
  const [recherche, setRecherche] = useState("");
  const [panier, setPanier] = useState<number[]>([]);

const ajouter = useCallback((id: number) => {
  setPanier(prev => [...prev, id])
}, [])

  return (
    <div className="flex flex-col gap-4 p-6">
      <input value={recherche} onChange={(e) => setRecherche(e.target.value)} className="border p-2" />
      <div className="flex gap-2">
        {VERRES.map((v) => (
          <BoutonVerre key={v.id} verre={v} onAjouter={ajouter} />
        ))}
      </div>
      <p>Articles dans le panier : {panier.length}</p>
    </div>
  );
}