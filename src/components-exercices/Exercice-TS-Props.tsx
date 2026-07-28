// ─────────────────────────────────────────────
// Le contrat : ce que CarteMonture attend
// ─────────────────────────────────────────────
interface CarteMontureProps {
  marque: string;
  modele: string;
  prix: number;
  traitement?: string; // facultative → comblée par un défaut
  promo?: number; // facultative → absence = rien à afficher
}

// ─────────────────────────────────────────────
// Utilitaire d'affichage (DRY : le formatage est écrit une seule fois)
// ─────────────────────────────────────────────
function formatEuro(valeur: number) {
  return valeur.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
}

// ─────────────────────────────────────────────
// Le composant réutilisable
// ─────────────────────────────────────────────
function CarteMonture({ marque, modele, prix, traitement = "aucun", promo }: CarteMontureProps) {
  return (
    <article>
      <h2>{marque}</h2>
      <h3>{modele}</h3>
      <p>Traitement : {traitement}</p>

      {promo ? (
        <>
          <p className="line-through">{formatEuro(prix)}</p>
          <p>Promotion : {promo} %</p>
          <p>Prix remisé : {formatEuro(prix - (prix * promo) / 100)}</p>
        </>
      ) : (
        <p>{formatEuro(prix)}</p>
      )}
    </article>
  );
}

// ─────────────────────────────────────────────
// Le composant-page : il détient les données et les distribue
// ─────────────────────────────────────────────
export default function CarteMontureExport() {
  return (
    <div>
      {/* complète */}
      <CarteMonture marque="Ray-Ban" modele="Clubmaster" traitement="Polarisant" prix={150} promo={20} />

      {/* sans traitement → le défaut "aucun" prend le relais */}
      <CarteMonture marque="Oakley" modele="Holbrook" prix={129} promo={10} />

      {/* sans promo → le bloc promo n'existe pas dans le DOM */}
      <CarteMonture marque="Persol" modele="649" traitement="Anti-reflet" prix={289} />
    </div>
  );
}

/* Exercice fait à la suite pour pratiquer sur une autre forme.

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


*/
