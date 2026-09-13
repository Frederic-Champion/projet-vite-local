interface Formation {
  diplome: string;
  ecole: string;
  ville: string;
  debut: string;
  fin: string;
  id: string;
}

type FormationVille = Pick<Formation, "ville">;
type FormSeach = Partial<Formation>;
type FormationSansDate = Omit<Formation, "fin">;
type DiplomeParEcole = Record<string, number>;

type Exercice = Partial<Omit<Formation, "id" | "diplome">> & Pick<Formation, "id" | "diplome">;


/*

type EtatStock = "disponible" | "commande" | "rupture";
interface Monture {
  id: string;
  modele: string;
  etat?: EtatStock;
}
type BadgesStockProps = Omit<Monture, "id">;

function libelleEtat(etat: EtatStock) {
  switch (etat) {
    case "disponible":
      return "En stock";
    case "commande":
      return "Sur commande";
    case "rupture":
      return "Rupture";
  }
}

function BadgesStock({ modele, etat = "disponible" }: BadgesStockProps) {
  return (
    <li>
      {modele} - {libelleEtat(etat)}
    </li>
  );
}

export default function Brouillon2() {
  const MONTURES: Monture[] = [
    { id: "m1", modele: "Ray-Ban Wayfarer", etat: "commande" },
    { id: "m2", modele: "Persol 649" },
    { id: "m3", modele: "Oakley Holbrook", etat: "rupture" },
    { id: "m4", modele: "Moscot Lemtosh", etat: "disponible" },
  ];

  return (
    <ul>
      {MONTURES.map((m) => (
        <BadgesStock key={m.id} modele={m.modele} etat={m.etat} />
      ))}
    </ul>
  );
}

*/