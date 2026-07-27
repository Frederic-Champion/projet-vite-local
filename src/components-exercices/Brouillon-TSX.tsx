import { formatEuro } from "../utils/format";

interface FicheDevisProps {
  nom: string;
  montantVerres: number;
  urgent: boolean;
  mutuelle?: string;
  tauxRmb?: number;
}

function FicheDevis({ nom, montantVerres, urgent, mutuelle = "aucune", tauxRmb }: FicheDevisProps) {
  return (
    <article>
      <h2>{nom}</h2>
      {urgent && <p className="font-semibold text-red-500">Ça urge !!</p>}
      <p>Prix TTC : {formatEuro(montantVerres)}</p>
      {mutuelle !== "aucune" && <p>Mutuelle : {mutuelle}</p>}
      {tauxRmb && (
        <>
          <p>taux de remboursement : {tauxRmb}</p>
          <p>RAC : {formatEuro(montantVerres - (montantVerres * tauxRmb) / 100)}</p>
        </>
      )}
    </article>
  );
}

export default function Brouillon2() {
  return (
    <>
      <FicheDevis nom="David" montantVerres={300} urgent={false} mutuelle="MGEN" tauxRmb={60} />
      <FicheDevis nom="Martine" montantVerres={400} urgent={true} />
      <FicheDevis nom="Paul" montantVerres={200} urgent={false} mutuelle="Harmonie" />
    </>
  );
}
