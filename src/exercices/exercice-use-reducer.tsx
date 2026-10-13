import { useReducer } from "react";

interface Produit {
  id: number;
  produit: string;
}

interface LignePanier {
  produit: Produit;
  quantite: number;
}

type ActionPanier =
  | { type: "ajouter"; produit: Produit; quantite: number }
  | { type: "supprimer"; id: number }
  | { type: "modifier"; id: number; quantite: number };

const CATALOGUE: Produit[] = [
  { id: 1, produit: "Ray-Ban Wayfarer" },
  { id: 2, produit: "Oakley Holbrook" },
  { id: 3, produit: "Persol 649" },
];

function reducerFormatLong(panier: LignePanier[], action: ActionPanier): LignePanier[] {
  switch (action.type) {
    case "ajouter":
      return [...panier, { produit: action.produit, quantite: action.quantite }];
    case "supprimer":
      return panier.filter((p) => action.id !== p.produit.id);
    case "modifier":
      return panier.map((p) => (p.produit.id !== action.id ? p : { ...p, quantite: action.quantite }));
    default:
      return panier;
  }
}

export function ExerciceUseReducer() {
  const [panier, dispatch] = useReducer(reducerFormatLong, []);

  return (
    <>
      <section className="flex flex-col">
        <h2>CATALOGUE</h2>
        {CATALOGUE.map((c) => (
          <button className="cursor-pointer border p-2" key={c.id}>
            {c.produit}
          </button>
        ))}
      </section>
      <section className="flex flex-col">
        <h2>PANIER</h2>
        {panier.map((l) => (
          <p key={l.produit.id}>
            {l.produit.produit} - quantite: {l.quantite}
            <button className="cursor-pointer border p-2">modifier +1</button>
            <button className="cursor-pointer border p-2">Supprimer</button>
          </p>
        ))}
      </section>
    </>
  );
}
