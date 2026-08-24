import { useState } from "react";

function SaisieClient({ onEnvoyer }) {
  const [nom, setNom] = useState("");
  const [dossier, setDossier] = useState("");

  function envoyer() {
    const infoClients = {
      nom: nom,
      dossier: dossier,
    };
    onEnvoyer(infoClients);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          envoyer();
        }}
      >
        <div>
          <label htmlFor="nom">Tape ton Nom complet</label>
          <input
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
            }}
            id="nom"
            placeholder="Nom Complet"
          />
        </div>
        <div>
          <label htmlFor="dossier">Numéro de dossier</label>
          <input
            value={dossier}
            onChange={(e) => {
              setDossier(e.target.value);
            }}
            id="dossier"
            placeholder="dossier n°"
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

function PageClient() {
  const [info, setInfo] = useState({ nom: "", dossier: "" });

  function recevoir(data) {
    setInfo(data);
  }

  return (
    <>
      <SaisieClient onEnvoyer={recevoir} />
      <div>
        {info.nom} - {info.dossier}
      </div>
    </>
  );
}

function LiftingStateUp() {
  return <PageClient />;
}

export default LiftingStateUp;
