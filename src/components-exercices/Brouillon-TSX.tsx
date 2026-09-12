import { useParams } from "react-router";

const MONTURES: Monture[] = [
  { id: "m1", modele: "Ray-Ban Wayfarer", etat: "commande" },
  { id: "m2", modele: "Persol 649" },
  { id: "m3", modele: "Oakley Holbrook", etat: "rupture" },
  { id: "m4", modele: "Moscot Lemtosh", etat: "disponible" },
];

interface Monture {
  id: string;
  modele: string;
  etat?: string;
}

function BadgesStock() {
  return (
    <ul>
      {MONTURES.map((m) => (
        <li key={m.id}>
          {m.modele} - {!m.etat && "disponible"}
        </li>
      ))}
    </ul>
  )
}

export default function Brouillon2() {
    return (
    <div>
    </div>
  );
}
