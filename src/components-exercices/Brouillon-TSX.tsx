import { useRef, useState } from "react";

export default function Brouillon2() {
  return (
    <div>
      <ExerciceUseRefBis />
    </div>
  );
}

function ExerciceUseRefBis() {
  const [message, setMessage] = useState<string | number>("");
  const champRef = useRef<HTMLInputElement>(null);
  const totalRef = useRef(0);

  function ajouter() {
    if (!champRef.current) return;
    setMessage(`${champRef.current.value} ajouté`);
    totalRef.current += 1;
    champRef.current.focus();
    champRef.current.value = "";
  }

  function onInput() {
    setMessage("Saisis un modèle.");
  }

  function panier() {
    if (!totalRef.current) return;
    setMessage(`${totalRef.current} monture(s) ajoutée(s).`);
  }

  return (
    <div>
      <label htmlFor="champ">Champ : </label>
      <input ref={champRef} onClick={onInput} className="mx-2 rounded border p-2" id="champ" placeholder="vide" />
      <button type="submit" onClick={ajouter} className="mx-2 rounded border p-2">
        Ajouter au panier
      </button>
      <button onClick={panier} className="mx-2 rounded border p-2">
        Voir le panier
      </button>
      <p>Une ligne message :</p>
      {message}
    </div>
  );
}
