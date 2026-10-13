import { MagasinProvider, useMagasin } from "../contexts/MagasinContext";
import { cn } from "../utils/cn";

/* Voir le composant MagasinContext.tsx pour avoir la suite de l'exercice */

function SelecteurMagasin() {
  const { magasin, modifierMagasin } = useMagasin();

  return (
    <div>
      <button
        className={cn("border p-2", magasin === "Tours" && "bg-blue-100")}
        onClick={() => modifierMagasin("Tours")}
      >
        Tours
      </button>
      <button
        className={cn("border p-2", magasin === "Amboise" && "bg-blue-100")}
        onClick={() => modifierMagasin("Amboise")}
      >
        Amboise
      </button>
    </div>
  );
}

function AffichageMagasin() {
  const { magasin } = useMagasin();
  return <p>Magasin sélectionné : {magasin}</p>;
}

export function ExerciceContextHook() {
  return (
    <MagasinProvider>
      <SelecteurMagasin />
      <AffichageMagasin />
    </MagasinProvider>
  );
}
