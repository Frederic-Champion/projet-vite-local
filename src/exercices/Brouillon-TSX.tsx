import { useState } from "react";

const PRIX_PAR_INDICE: Record<string, number> = {
  "1.5": 40,
  "1.6": 70,
  "1.67": 110,
};

function prixVerre(indice: string): number {
  const indiceTrouve = Object.keys(PRIX_PAR_INDICE).find((i) => i === indice);
  if (!indiceTrouve) throw new Error("Indice inconnu : <indice>");
  return PRIX_PAR_INDICE[indiceTrouve];
}

export function Brouillon2() {
  const [indice, setIndice] = useState("");
  const [resultat, setResultat] = useState<string | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);

  function calculer() {
    try {
      const res = prixVerre(indice);
      setResultat(`Prix : ${String(res)}`)
    } catch (e) {
      if (e instanceof Error) setErreur(e.message);
    }
  }

  return (
    <div className="flex flex-col gap-2 p-4">
      <input
        value={indice}
        onChange={(e) => setIndice(e.target.value)}
        placeholder="Indice (ex : 1.6)"
        className="border p-1"
      />
      <button onClick={calculer} className="border p-1">
        Calculer
      </button>
      {resultat && <p>{resultat}</p>}
      {erreur && <p className="text-red-600">{erreur}</p>}
    </div>
  );
}

const marques = ["Éyewear", "Lacoste", "alain mikli", "Ray-Ban"];
const trier = marques.toSorted((a, b) => a.localeCompare(b))

console.log(trier)