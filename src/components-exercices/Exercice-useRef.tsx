import { useRef, useState } from "react";

function CompteurDefaut() {
  const totalDefauts = useRef(0);
  const [message, setMessage] = useState("");

  function signalerDefaut() {
    totalDefauts.current += 1;
    setMessage("Défaut signalé.");
  }

  function voirTotal() {
    setMessage(`${totalDefauts.current} défaut(s) signalé(s) depuis l'ouverture de la page.`);
  }

  return (
    <div className="m-2 flex flex-col gap-2">
      <div className="flex gap-2">
        <button onClick={signalerDefaut} className="rounded border p-2">
          Signaler un défaut
        </button>
        <button onClick={voirTotal} className="rounded border p-2">
          Voir le total
        </button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

/* DOUBLE EXERCICE SUR LE MEME COMPOSANT */

function RechercheMonture() {
  const champRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    if (champRef.current === null) return;
    champRef.current.focus();
  }

  return (
    <div className="m-2 mt-16 flex gap-2">
      <input ref={champRef} type="text" placeholder="Modèle…" className="rounded border p-2" />
      <button onClick={handleFocus} className="rounded border p-2">
        Chercher une monture
      </button>
    </div>
  );
}

/* TRIPLE EXERCICE SUR LE MEME COMPOSANT */

function ExerciceUseRefBis() {
  const [champ, setChamp] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const ajoutRef = useRef(0);

  function ajouter() {
    if (!champ) {
      setMessage("Saisis un modèle.");
      return;
    }
    ajoutRef.current += 1;
    setMessage(`${champ} ajoutée.`);
    setChamp("");
    inputRef.current?.focus();
  }

  function panier() {
    if (ajoutRef.current === 0) setMessage("Panier Vide");
    else setMessage(`${ajoutRef.current} monture(s) ajoutée(s).`);
  }

  return (
    <div className="m-2 mt-16 flex gap-2">
      <label htmlFor="champ">Champ :</label>
      <input
        ref={inputRef}
        id="champ"
        placeholder="Vide"
        className="mx-2 rounded border p-2"
        onChange={(e) => setChamp(e.target.value)}
        value={champ}
      />
      <button onClick={ajouter} className="mx-2 rounded border p-2">
        Ajouter au panier
      </button>
      <button onClick={panier} className="mx-2 rounded border p-2">
        Voir le panier
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

/* EXERCICES FUSIONNÉS */

export default function ExerciceUseRef() {
  return (
    <div>
      <CompteurDefaut />
      <RechercheMonture />
      <ExerciceUseRefBis />
    </div>
  );
}
