/*
  Résultat attendu :
┌───────────────────────────────────────────────┐
│ Commandées : 2 · Reçues : 1 · Livrées : 0     │ ← Compteurs
├───────────────────────────────────────────────┤
│ [ Nom du client      ] [ Commander ]          │ ← Formulaire
├───────────────────────────────────────────────┤
│ Mme Durand   commandée  [Avancer] [Supprimer] │
│ M. Petit     reçue      [Avancer] [Supprimer] │ ← ListeCommandes
│ Mme Leroy    commandée  [Avancer] [Supprimer] │
└───────────────────────────────────────────────┘
*/

import React, { createContext, useContext, useReducer, useState } from "react";

interface Commande {
  client: string;
  statut: "Commandé" | "Reçu" | "Livré";
  id: string;
}
type ActionCommande =
  { type: "ajouter"; commande: Commande } | { type: "avancer"; id: string } | { type: "supprimer"; id: string };

interface CommandeContexte {
  dispatch: (action: ActionCommande) => void;
  state: Commande[];
}

function reducerCommande(state: Commande[], action: ActionCommande): Commande[] {
  switch (action.type) {
    case "ajouter":
      return [...state, action.commande];
    case "avancer":
      return state.map((c) => (c.id === action.id ? { ...c, statut: c.statut === "Commandé" ? "Reçu" : "Livré" } : c));
    case "supprimer":
      return state.filter((c) => c.id !== action.id);
  }
}

const CommandeContext = createContext<CommandeContexte | null>(null);

function useCommande() {
  const contexte = useContext(CommandeContext);
  if (!contexte) throw new Error("useCommande doit être à l'intérieur du Provider");
  return contexte;
}

function CommandeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducerCommande, []);

  return <CommandeContext value={{ state, dispatch }}>{children}</CommandeContext>;
}

function Compteur() {
  const { state } = useCommande();

  return (
    <div className="flex justify-center gap-2">
      <p>Commandées : {state.filter((c) => c.statut === "Commandé").length}</p>
      <p>Reçues : {state.filter((c) => c.statut === "Reçu").length}</p>
      <p>Livrées : {state.filter((c) => c.statut === "Livré").length}</p>
    </div>
  );
}

function Formulaire() {
  const { dispatch } = useCommande();
  const [c, setC] = useState("");

  return (
    <div>
      <input value={c} onChange={(e) => setC(e.target.value)} className="border p-2" placeholder="Nom du Client ..." />
      <button
        onClick={() => {
          dispatch({ type: "ajouter", commande: { client: c, statut: "Commandé", id: crypto.randomUUID() } });
          setC("");
        }}
        className="border p-2"
      >
        Commander
      </button>
    </div>
  );
}

function ListeCommandes() {
  const { state, dispatch } = useCommande();

  return (
    <div>
      <ul>
        {state.map((c) => (
          <li key={c.id} className="flex justify-center gap-4">
            <p>
              {c.client} - Statut : {c.statut}
            </p>
            <div>
              <button
                disabled={c.statut === "Livré"}
                onClick={() => dispatch({ type: "avancer", id: c.id })}
                className="border p-2 disabled:opacity-50"
              >
                Avancer
              </button>
              <button onClick={() => dispatch({ type: "supprimer", id: c.id })} className="border p-2">
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExerciceContextReducer2() {
  return (
    <CommandeProvider>
      <div className="flex flex-col gap-4">
        <Compteur />
        <Formulaire />
        <ListeCommandes />
      </div>
    </CommandeProvider>
  );
}
