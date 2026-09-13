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
    champRef.current.focus()
  }

  return (
    <div className="m-2 flex gap-2 mt-16">
      <input
        ref={champRef}
        type="text"
        placeholder="Modèle…"
        className="rounded border p-2"
      />
      <button onClick={handleFocus} className="rounded border p-2">
        Chercher une monture
      </button>
    </div>
  );
}


/* EXERCICES FUSIONNÉS */

export default function ExerciceUseRef() {
  return (
    <div>
      <CompteurDefaut />
      <RechercheMonture />
    </div>
  )
}
