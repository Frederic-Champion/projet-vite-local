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
      <Link className="text-blue-600 hover:underline" to="/exercice-children">
        Exercice sur children
      </Link>
      <Link className="text-blue-600 hover:underline" to="/exercice-children-refacto">
        Exercice sur children Refacto
      </Link>
    </nav>
  );
}

export function PageIntrouvable() {
  return (
    <div>
      <h1>Page Introuvable</h1>
      <Link className="rounded-lg border p-2 text-blue-600 hover:underline" to="/">
        ACCUEIL
      </Link>
    </div>
  );
}
