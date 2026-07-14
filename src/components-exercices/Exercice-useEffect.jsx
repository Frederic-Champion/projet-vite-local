import { useState, useEffect } from "react";

function CompteurEssais() {
  const [bouton, setBouton] = useState(true);

  useEffect(() => {
    document.title = ` ${bouton ? "ouvert" : "fermé"} - optique CHAMPION`;
  }, [bouton]);
  return (
    <div>
      <h2>ouverture : {bouton ? "ouvert" : "fermé"}</h2>
      <button type="button" onClick={() => setBouton(!bouton)}>
        {bouton ? "Click pour fermer" : "Click pour ouvrir"}
      </button>
    </div>
  );
}
export default CompteurEssais;
