import { Link } from "react-router";

export default function Accueil() {
  return (
    <nav className="flex flex-col gap-3 border border-b-blue-500 p-1 font-semibold">
      <Link className="text-blue-600 hover:underline" to="/brouillon2">
        Brouillon2
      </Link>
      <Link className="text-blue-600 hover:underline" to="/page-devis">
        ExercicePageDevis
      </Link>
      <Link className="text-blue-600 hover:underline" to="/props-tableau-type">
        ExercicePropsTableauType
      </Link>
      <Link className="text-blue-600 hover:underline" to="/fetch-search">
        ExerciceFetchSearch
      </Link>
      <Link className="text-blue-600 hover:underline" to="/lifting-state-up">
        LiftingStateUp
      </Link>
      <Link className="text-blue-600 hover:underline" to="/lifting-state-up-ts">
        LiftingStateUpTS
      </Link>
      <Link className="text-blue-600 hover:underline" to="/lifting-state-up-ts-2">
        LiftingStateUpTS
      </Link>
      <Link className="text-blue-600 hover:underline" to="/use-params">
        Exercice sur useParams
      </Link>

    </nav>
  );
}

export function PageIntrouvable() {
  return (
    <div>
      <h1>Page Introuvable</h1>
      <Link className="text-blue-600 hover:underline border rounded-lg p-2" to="/">
        ACCUEIL
      </Link>
    </div>
  );
}
