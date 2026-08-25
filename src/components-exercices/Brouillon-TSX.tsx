import { useState } from "react";

interface Client {
  nom: string;
  dossier: string;
}

interface SaisieClientProps {
  onEnvoyer: (client: Client) => void;
}

function SaisieClient({ onEnvoyer }: SaisieClientProps) {
  const [nom, setNom] = useState("");
  const [dossier, setDossier] = useState("");

  function envoyer(e: React.SubmitEvent) {
    e.preventDefault();
    const data: Client = {
      nom: nom,
      dossier: dossier,
    };
    onEnvoyer(data);
  }

  return (
    <div>
      <form onSubmit={envoyer}>
        <div>
          <label htmlFor="nom">Tape le nom complet</label>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} id="nom" placeholder="Nom Complet" />
        </div>
        <div>
          <label htmlFor="dossier">Numéro de dossier</label>
          <input
            type="text"
            value={dossier}
            onChange={(e) => setDossier(e.target.value)}
            id="dossier"
            placeholder="Dossier n°"
          />
        </div>
        <button type="submit">ajouter</button>
      </form>
    </div>
  );
}

function PageClient() {
  const [data, setData] = useState({ nom: "", dossier: "" });

  function recuperer(info: Client) {
    setData(info);
  }

  return (
    <>
      <SaisieClient onEnvoyer={recuperer} />
      <div>
        {data.nom} - {data.dossier}
      </div>
    </>
  );
}

export default function Brouillon2() {
  return <PageClient />;
}
