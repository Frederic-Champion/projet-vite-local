import { useState } from "react";
import { formatEuro } from "../utils/format";

const PRESTATIONS = [
  { id: "p1", libelle: "Verres progressifs", prix: 420 },
  { id: "p2", libelle: "Anti-reflet", prix: 89 },
  { id: "p3", libelle: "Traitement UV", prix: 45 },
];

interface Prestation {
  id: string;
  libelle: string;
  prix: number;
}

interface ListePrestationsProps {
  prestations: Prestation[];
  onRetirer: (id: string) => void;
}

function ListePrestations({ prestations, onRetirer }: ListePrestationsProps) {
  return (
    <ul>
      {prestations.map((p) => (
        <li key={p.id}>
          {p.libelle} — {formatEuro(p.prix)} <button onClick={() => onRetirer(p.id)}>Retirer</button>
        </li>
      ))}
    </ul>
  );
}

function ExercicePageDevis() {
  const [lignes, setLignes] = useState(PRESTATIONS);

  function retirer(id: string) {
    setLignes(lignes.filter((l) => l.id !== id));
  }

  return (
    <section>
      <h2>Devis</h2>
      <ListePrestations prestations={lignes} onRetirer={retirer} />
    </section>
  );
}

export default ExercicePageDevis;

/* Résultat attendu

Ray-Ban Aviator — 189,00 € — stock : 4   [−] [+]
Persol 649 — 245,00 € — stock : 2        [−] [+]
Oakley Holbrook — 165,00 € — stock : 7   [−] [+]


import { formatEuro } from "../utils/format";
import { useState } from "react";

const STOCK_INITIAL = [
  { id: "m1", marque: "Ray-Ban Aviator", prix: 189, stock: 4 },
  { id: "m2", marque: "Persol 649", prix: 245, stock: 2 },
  { id: "m3", marque: "Oakley Holbrook", prix: 165, stock: 7 },
];

interface Reference {
  id: string;
  marque: string;
  prix: number;
  stock: number;
}

interface ListeStockProps {
  references: Reference[];
  onModifierStock: (id: string, x: number) => void;
}

function ListeStock({ references, onModifierStock }: ListeStockProps) {
  return (
    <ul>
      {references.map((r) => (
        <li key={r.id}>
          {r.marque} — {formatEuro(r.prix)} — {r.stock}
          {"  "}
          <button onClick={() => onModifierStock(r.id, -1)}>[ - ]</button>
          <button onClick={() => onModifierStock(r.id, 1)}>[ + ]</button>
        </li>
      ))}
    </ul>
  );
}

export default function ExportListe() {
  const [liste, setListe] = useState(STOCK_INITIAL);

  function quantite(id: string, x: number) {
    setListe(
      liste.map((o) => {
        return o.id === id ? { ...o, stock: o.stock + x } : o;
      }),
    );
  }

  return <ListeStock references={liste} onModifierStock={quantite} />;
}

*/
