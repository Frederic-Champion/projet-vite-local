import { useEffect, useMemo, useState } from "react";
import { formatEuro } from "../utils/format";

export function ExerciceUseMemo() {
  return (
    <div>
      <PremierExercice />
      <div className="my-8 flex items-center">
        <hr className="grow border-t border-gray-300" />
        <span className="mx-4 shrink font-medium text-gray-600">Séparation des exercices</span>
        <hr className="grow border-t border-gray-300" />
      </div>
      <DeuxiemeExercice />
      <div className="my-8 flex items-center">
        <hr className="grow border-t border-gray-300" />
        <span className="mx-4 shrink font-medium text-gray-600">Séparation des exercices</span>
        <hr className="grow border-t border-gray-300" />
      </div>
      <TroisiemeExercice />
    </div>
  );
}

interface Monture {
  id: number;
  nom: string;
  prix: number;
}

const MONTURES: Monture[] = [
  { id: 1, nom: "Ray-Ban Clubmaster", prix: 159 },
  { id: 2, nom: "Oakley Holbrook", prix: 129 },
  { id: 3, nom: "Lindberg Air", prix: 420 },
];

function PremierExercice() {
  const [critereTri, setCritereTri] = useState<"prix" | "nom">("prix");
  const [note, setNote] = useState("");

  const monturesTriees = useMemo(() => {
    console.log("Tri recalculé");
    return [...MONTURES].sort((a, b) => (critereTri === "prix" ? a.prix - b.prix : a.nom.localeCompare(b.nom)));
  }, [critereTri]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-2">
        <button onClick={() => setCritereTri("prix")} className="border p-2">
          Par prix
        </button>
        <button onClick={() => setCritereTri("nom")} className="border p-2">
          Par nom
        </button>
      </div>
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="border p-2"
        placeholder="Note pour le client"
      />
      <ul>
        {monturesTriees.map((m) => (
          <li key={m.id}>
            {m.nom} — {m.prix} €
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Séparation d'exercice

┌─────────────────────────────────┐
│  🕐 13:42:07                     │
│  Ventes : 3                      │
│  Total : 870 €                   │
│  Moyenne : 290 €                 │
│  [ Ajouter une vente de 150 € ]  │
└─────────────────────────────────┘

*/

const statDepart = [320, 410, 140];

function DeuxiemeExercice() {
  const [ventes, setVentes] = useState(statDepart);
  const [date, setDate] = useState(() => new Date().toLocaleTimeString("fr-FR"));

  useEffect(() => {
    const intervalle = setInterval(() => {
      setDate(new Date().toLocaleTimeString("fr-FR"));
    }, 1000);
    return () => clearInterval(intervalle);
  }, []);

  const calcul = useMemo(() => {
    console.log("Stats recalculées");
    const total = ventes.reduce((acc, a) => a + acc, 0);
    const moyenne = ventes.length === 0 ? 0 : total / ventes.length;
    return { total, moyenne };
  }, [ventes]);

  return (
    <div className="flex max-w-fit flex-col gap-2 rounded-lg border p-4 text-left">
      <div>Heure avec useEffect {date}</div>
      <h3>Ventes : {ventes.length}</h3>
      <p>Total : {formatEuro(calcul.total)}</p>
      <p>Moyenne : {formatEuro(calcul.moyenne)}</p>
      <button onClick={() => setVentes((prev) => [...prev, 150])} className="cursor-pointer border p-2">
        Ajouter une vente de 150€
      </button>
    </div>
  );
}

/* ------------ Séparation d'exercices --------------- */

interface Verre {
  id: number;
  nom: string;
  prix: number;
}

const VERRES: Verre[] = [
  { id: 1, nom: "Unifocal standard", prix: 45 },
  { id: 2, nom: "Progressif confort", prix: 320 },
  { id: 3, nom: "Unifocal aminci", prix: 110 },
  { id: 4, nom: "Progressif premium", prix: 540 },
  { id: 5, nom: "Mi-distance bureau", prix: 210 },
];

function TroisiemeExercice() {
  const [recherche, setRecherche] = useState("");
  const [ordre, setOrdre] = useState<"croissant" | "decroissant">("croissant");
  const [afficherId, setAfficherId] = useState(false);

  const verresAffiches = useMemo(() => {
    const V = VERRES.filter((v) => v.nom.toLowerCase().includes(recherche.toLowerCase()));
    return [...V.sort((a, b) => (ordre === "croissant" ? a.prix - b.prix : b.prix - a.prix))];
  }, [ordre, recherche]);

  return (
    <div className="flex flex-col gap-4 p-6">
      <input
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        placeholder="Rechercher un verre"
        className="border p-2"
      />
      <button onClick={() => setOrdre((prev) => (prev === "croissant" ? "decroissant" : "croissant"))}>
        Tri : {ordre}
      </button>
      <label>
        <input type="checkbox" checked={afficherId} onChange={(e) => setAfficherId(e.target.checked)} />
        Afficher les identifiants
      </label>
      <ul>
        {verresAffiches.map((v) => (
          <li key={v.id}>
            {afficherId && `#${v.id} `}
            {v.nom} : {v.prix} €
          </li>
        ))}
      </ul>
    </div>
  );
}
