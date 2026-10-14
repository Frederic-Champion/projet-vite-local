import { useReducer } from "react";

// Trois exercices dans le même fichier voir dessous
export function ExerciceUseReducer() {
  return (
    <div className="flex flex-col gap-16">
      <PremierExercice />

      <div className="my-8 flex items-center">
        <hr className="grow border-t border-gray-300" />

        <span className="mx-4 shrink font-medium text-gray-600">Séparation des exercices</span>

        <hr className="grow border-t border-gray-300" />
      </div>

      <DeuxièmeExercice />

      <div className="my-8 flex items-center">
        <hr className="grow border-t border-gray-300" />

        <span className="mx-4 shrink font-medium text-gray-600">Séparation des exercices</span>

        <hr className="grow border-t border-gray-300" />
      </div>

      <TroisiemeExercice />
    </div>
  );
}

/* Premier Exercice */
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
  | { type: "modifier"; id: number; ecart: number };

const CATALOGUE: Produit[] = [
  { id: 1, produit: "Ray-Ban Wayfarer" },
  { id: 2, produit: "Oakley Holbrook" },
  { id: 3, produit: "Persol 649" },
];

function reducerFormatLong(panier: LignePanier[], action: ActionPanier): LignePanier[] {
  switch (action.type) {
    case "ajouter":
      if (panier.some((a) => action.produit.id === a.produit.id))
        return panier.map((p) =>
          p.produit.id !== action.produit.id ? p : { ...p, quantite: p.quantite + action.quantite },
        );
      return [...panier, { produit: action.produit, quantite: action.quantite }];
    case "supprimer":
      return panier.filter((p) => action.id !== p.produit.id);
    case "modifier":
      return panier.map((p) => (p.produit.id !== action.id ? p : { ...p, quantite: action.ecart + p.quantite }));
    default:
      return panier;
  }
}

function PremierExercice() {
  const [panier, dispatch] = useReducer(reducerFormatLong, []);

  return (
    <div>
      <section className="flex flex-col">
        <h2>CATALOGUE</h2>
        {CATALOGUE.map((c) => (
          <button
            onClick={() => dispatch({ type: "ajouter", produit: c, quantite: 1 })}
            className="cursor-pointer border p-2"
            key={c.id}
          >
            {c.produit}
          </button>
        ))}
      </section>
      <section className="flex flex-col">
        <h2>PANIER</h2>
        {panier.map((l) => (
          <p key={l.produit.id}>
            {l.produit.produit} - quantite: {l.quantite}
            <button
              onClick={() => dispatch({ type: "modifier", id: l.produit.id, ecart: 1 })}
              className="cursor-pointer border p-2"
            >
              modifier +1
            </button>
            <button
              onClick={() => dispatch({ type: "supprimer", id: l.produit.id })}
              className="cursor-pointer border p-2"
            >
              Supprimer
            </button>
          </p>
        ))}
      </section>
    </div>
  );
}

/*  Deuxième exercice dans le même fichier  */

type ActionCompteur = { type: "incrementer" } | { type: "ajouter"; montant: number } | { type: "reinitialiser" };

function reducerCompteur(compteur: number, action: ActionCompteur): number {
  switch (action.type) {
    case "incrementer":
      return compteur + 1;
    case "ajouter":
      return compteur + action.montant;
    case "reinitialiser":
      return 0;
  }
}

function DeuxièmeExercice() {
  const [compteur, dispatch] = useReducer(reducerCompteur, 0);
  return (
    <div>
      <button onClick={() => dispatch({ type: "incrementer" })} className="border p-2">
        +1
      </button>
      <button onClick={() => dispatch({ type: "ajouter", montant: 3 })} className="border p-2">
        +x
      </button>
      <button onClick={() => dispatch({ type: "reinitialiser" })} className="border p-2">
        0
      </button>
      <h3>Passage : {compteur}</h3>
    </div>
  );
}

/*  Troisième exercice dans le même fichier  */

interface Monture {
  id: number;
  title: string;
}
interface Etat {
  chargement: boolean;
  erreur: string | null;
  monture: Monture;
}

type ActionFetch = { type: "debut" } | { type: "succes"; montures: Monture[] } | { type: "echec"; message: string };

function reducerFetch(montures: Monture[], action: ActionFetch) {
  const url = "https://dummyjson.com/products/category/sunglasses";
  switch (action.type) {
    //continuer la function
  }
}

function TroisiemeExercice() {
  const [montures, dispatch] = useReducer(reducerFetch, [])

  return <div>Test</div>;
}
