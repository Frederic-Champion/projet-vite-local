import { useEffect, useReducer } from "react";

// Quatres exercices dans le même fichier voir dessous
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

      <div className="my-8 flex items-center">
        <hr className="grow border-t border-gray-300" />
        <span className="mx-4 shrink font-medium text-gray-600">Séparation des exercices</span>
        <hr className="grow border-t border-gray-300" />
      </div>

      <QuatriemeExercice />
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
  montures: Monture[];
}
const ETAT_INITIAL: Etat = { chargement: true, erreur: null, montures: [] };

type ActionFetch = { type: "debut" } | { type: "succes"; montures: Monture[] } | { type: "echec"; message: string };

function reducerFetch(etat: Etat, action: ActionFetch): Etat {
  switch (action.type) {
    case "debut":
      return { chargement: true, erreur: null, montures: etat.montures };
    case "succes":
      return { chargement: false, erreur: null, montures: action.montures };
    case "echec":
      return { chargement: false, erreur: action.message, montures: etat.montures };
  }
}

function TroisiemeExercice() {
  const [etat, dispatch] = useReducer(reducerFetch, ETAT_INITIAL);

  useEffect(() => {
    const url = "https://dummyjson.com/products/category/sunglasses";
    async function loadData() {
      dispatch({ type: "debut" });
      try {
        const r = await fetch(url);
        if (!r.ok) throw new Error("échec du fetch");
        const data = await r.json();
        dispatch({ type: "succes", montures: data.products });
      } catch (e) {
        dispatch({ type: "echec", message: e instanceof Error ? e.message : "une erreur inattendue s'est produite" });
      }
    }
    loadData();
  }, []);

  if (etat.chargement) return <p>Une page de chargement</p>;
  if (etat.erreur) return <p>Une page d'erreur : {etat.erreur}</p>;
  return (
    <ul>
      {etat.montures.map((m) => (
        <li key={m.id}>{m.title}</li>
      ))}
    </ul>
  );
}

/* Quatrième Exercices */

interface MontureCatalogue {
  id: number;
  modele: string;
  marque: string;
}

const MONTURES: MontureCatalogue[] = [
  { id: 1, modele: "Wayfarer", marque: "Ray-Ban" },
  { id: 2, modele: "Clubmaster", marque: "Ray-Ban" },
  { id: 3, modele: "Aviator", marque: "Ray-Ban" },
  { id: 4, modele: "Erika", marque: "Ray-Ban" },
  { id: 5, modele: "Holbrook", marque: "Oakley" },
  { id: 6, modele: "Frogskins", marque: "Oakley" },
  { id: 7, modele: "649", marque: "Persol" },
  { id: 8, modele: "714", marque: "Persol" },
];

const PAR_PAGE = 3;

interface EtatFiltre {
  marque: string | null;
  page: number;
}
const ETAT_FILTRE_INITIAL: EtatFiltre = { marque: null, page: 1 };

type ActionFiltre =
  | { type: "choisirMarque"; marque: string | null }
  | { type: "pageSuivante" }
  | { type: "pagePrecedente" };

function reducerFiltre(etatFiltre: EtatFiltre, action: ActionFiltre): EtatFiltre {
  switch (action.type) {
    case "choisirMarque":
      return { marque: action.marque, page: 1 };
    case "pageSuivante":
      return { ...etatFiltre, page: etatFiltre.page + 1 };
    case "pagePrecedente":
      return { ...etatFiltre, page: etatFiltre.page - 1 };
  }
}

function QuatriemeExercice() {
  const [etatFiltre, dispatch] = useReducer(reducerFiltre, ETAT_FILTRE_INITIAL);

  const catalogueFiltre = etatFiltre.marque === null ? MONTURES : MONTURES.filter(m => m.marque === etatFiltre.marque) ;
  const pageFiltre = Math.ceil(catalogueFiltre.length / PAR_PAGE)
  const catalogueAffiche = catalogueFiltre.slice((etatFiltre.page - 1) * PAR_PAGE, etatFiltre.page * PAR_PAGE)


  return (
    <div>
      <button onClick={() => dispatch({ type: "choisirMarque", marque: null })} className="border p-2">
        Toutes
      </button>
      <button onClick={() => dispatch({ type: "choisirMarque", marque: "Ray-Ban" })} className="border p-2">
        Ray-Ban
      </button>
      <button onClick={() => dispatch({ type: "choisirMarque", marque: "Oakley" })} className="border p-2">
        Oakley
      </button>
      <button onClick={() => dispatch({ type: "choisirMarque", marque: "Persol" })} className="border p-2">
        Persol
      </button>
      <ul>
        {catalogueAffiche.map((m) => (
          <li key={m.id}>
            {m.modele}
            {m.marque}
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button disabled={etatFiltre.page <= 1} onClick={() => dispatch({type: "pagePrecedente"})} className="border p-2 disabled:opacity-50">
          Précédent
        </button>
        <p>Page : {etatFiltre.page} / {pageFiltre}</p>
        <button disabled={etatFiltre.page >= pageFiltre} onClick={() => dispatch({type: "pageSuivante"})} className="border p-2 disabled:opacity-50">
          Suivant
        </button>
      </div>
    </div>
  );
}
