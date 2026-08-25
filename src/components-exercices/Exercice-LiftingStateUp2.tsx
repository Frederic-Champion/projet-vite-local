import { useState } from "react";

interface Monture {
  marque: string;
  modele: string;
  prix: number
}
interface SaisieMontureProps {
  onAjouter: (monture: Monture) => void;
}

function SaisieMonture({onAjouter}: SaisieMontureProps) {
  const [marque, setMarque] = useState('');
  const [modele, setModele] = useState('');
  const [prix, setPrix] = useState('');

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault()
    const monture: Monture = {
      marque: marque,
      modele: modele,
      prix: Number(prix),
    }
    onAjouter(monture)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="marque">Tape la Marque</label>
        <input type="text" value={marque} onChange={(e)=> setMarque(e.target.value)} id="marque" placeholder="Marque"/>
      </div>
      <div>
        <label htmlFor="modele">Saisie le Modèle</label>
        <input type="text" value={modele} onChange={(e)=> setModele(e.target.value)} id="modele" placeholder="modèle"/>
      </div>
      <div>
        <label htmlFor="prix">Écris le prix</label>
        <input type="number" value={prix} onChange={(e)=> setPrix(e.target.value)} id="prix" placeholder="Prix"/>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}

function AjoutMonture() {
  const [monture, setMonture] = useState<Monture|null>(null);

  function handleAjout(monture: Monture) {
    setMonture(monture)
  }

  return (
    <div>
      <SaisieMonture onAjouter={handleAjout} />
      {monture && <div>{monture.marque}-{monture.modele} : {monture.prix}€</div>}
    </div>
  );
}

export default function LiftingStateUpTS2() {
  return <AjoutMonture />;
}