import React, { createContext, useContext, useReducer, useState } from "react";

/*
  Exercice : useReducer + Context + hook personnalisé.
  Trajet de la donnée :
  un lecteur appelle dispatch(action)
    → React passe (file actuelle, action) au reducer
    → le reducer renvoie la nouvelle file
    → le Provider se re-rend avec cette nouvelle valeur
    → tous les lecteurs du Context se re-rendent.
*/

/* ===== 1. Types ===== */

interface Client {
  nom: string;
  id: string; 
}

type ActionFile = { type: "ajouter"; client: Client } | { type: "servir" } | { type: "vider" };

// Interface du CONTEXT : ce que le Provider transmet aux lecteurs.
// Elle fixe le nom des clés que les lecteurs déstructureront.
interface FileContexte {
  file: Client[];
  dispatch: (action: ActionFile) => void; // dispatch reçoit une action, ne renvoie rien
}

/* ===== 2. Reducer ===== */

// Fonction PURE, hors composant : (état actuel, action) → nouvel état.
function reducerFile(listeClients: Client[], action: ActionFile): Client[] {
  switch (action.type) {
    case "ajouter":
      return [...listeClients, action.client];
    case "servir":
      return listeClients.slice(1);
    case "vider":
      return [];
  }
}

/* ===== 3. Context + Provider ===== */

const FileContext = createContext<FileContexte | null>(null);

function FileProvider({ children }: { children: React.ReactNode }) {
  const [listeClients, dispatch] = useReducer(reducerFile, []);

  return <FileContext value={{ file: listeClients, dispatch }}>{children}</FileContext>;
}

/* ===== 4. Hook personnalisé ===== */

// Centralise la lecture + la garde : chaque lecteur tient en une ligne.
function useFile() {
  const context = useContext(FileContext);
  if (!context) throw new Error("useFile doit être utilisé à l'intérieur de FileProvider");
  return context;
}

/* ===== 5. Lecteurs ===== */
// Aucun ne reçoit de props : ils lisent tous la même file via useFile.

function BandeauComptoir() {
  const { file } = useFile();

  return <h2>{file.length > 0 ? `Clients en attente : ${file.length}` : "Aucun client en attente"}</h2>;
}

function Comptoir() {
  const { dispatch } = useFile();
  const [nom, setNom] = useState("");

  function ajouter() {
    if (nom.trim() === "") return;
    dispatch({ type: "ajouter", client: { nom, id: crypto.randomUUID() } });
    setNom("");
  }

  return (
    <div>
      <input value={nom} onChange={(e) => setNom(e.target.value)} className="border p-2" placeholder="Nom du client" />
      <button onClick={ajouter} className="cursor-pointer border p-2">
        Ajouter
      </button>
    </div>
  );
}

function Ecran() {
  const { file, dispatch } = useFile();

  return (
    <div className="flex flex-col items-center">
      <ol className="list-inside list-decimal">
        {file.map((f) => (
          <li key={f.id}>{f.nom}</li>
        ))}
      </ol>

      <div className="flex">
        <button
          disabled={file.length === 0}
          onClick={() => dispatch({ type: "servir" })}
          className="cursor-pointer border p-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Servir le suivant
        </button>
        <button onClick={() => dispatch({ type: "vider" })} className="cursor-pointer border p-2">
          Vider
        </button>
      </div>
    </div>
  );
}

/* ===== 6. Page ===== */

// La page ne lit rien : elle pose le Provider et place les lecteurs dessous.
export function ExerciceContextReducer() {
  return (
    <FileProvider>
      <BandeauComptoir />
      <Comptoir />
      <Ecran />
    </FileProvider>
  );
}
