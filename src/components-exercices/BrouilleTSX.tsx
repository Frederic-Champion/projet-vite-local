interface resumeClientProps {
  nom: string;
  age: number;
}
function resumeClient({ nom, age }: resumeClientProps);

interface calculerRACProps {
  prixVerres: number;
  tauxRmb: number;
}
function calculerRAC({ prixVerres, tauxRmb }: calculerRACProps);

interface afficherMontureProps {
  marque: string;
  prix: number;
  enStock: boolean;
}
function afficherMonture({ marque, prix, enStock }: afficherMontureProps);
