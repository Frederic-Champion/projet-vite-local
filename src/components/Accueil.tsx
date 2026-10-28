import { Link } from "react-router";
import { useTheme } from "../contexts/hookContext";

export default function Accueil() {
  const { theme } = useTheme();

  return (
    <nav className="flex flex-col gap-3 border border-b-blue-500 p-1 font-semibold">
      {/* petite ligne d'exercice sur les hooks personnalisés : */}
      <p className="pl-2 text-start">{theme === "dark" ? "mode sombre activé" : "mode sombre désactivé"}</p>
      {/* fin de l'exercice */}
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
      <Link className="text-blue-600 hover:underline" to="/exercice-children-ts">
        Exercice sur children - TS - Table
      </Link>
      <Link className="text-blue-600 hover:underline" to="/exercice-useref">
        Exercice useRef
      </Link>
      <Link className="text-blue-600 hover:underline" to="/use-ref-contains">
        Exercice useRef et contains : le clic extérieur
      </Link>
      <Link className="text-blue-600 hover:underline" to="/exercice-navigation">
        Exercice Navigation
      </Link>
      <Link className="text-blue-600 hover:underline" to="/exercice-outlet">
        Exercice Outlet-UseParams
      </Link>
      <Link className="text-blue-600 hover:underline" to="/use-outlet-context">
        Exercice useOutletContext
      </Link>
      <Link className="text-blue-600 hover:underline" to="/use-context">
        Exercice createContext - useContext
      </Link>
      <Link className="text-blue-600 hover:underline" to="/context-hook">
        Exercice createContext - useContext - HookPersonnalisé
      </Link>
      <Link className="text-blue-600 hover:underline" to="/use-reducer">
        Exercice useReducer
      </Link>
      <Link className="text-blue-600 hover:underline" to="/use-context-reducer">
        Exercice useReducer et useContext
      </Link>
      <Link className="text-blue-600 hover:underline" to="/use-context-reducer2">
        Exercice 2 : useReducer et useContext
      </Link>
      <Link className="text-blue-600 hover:underline" to="/use-memo">
        Exercice useMemo
      </Link>
      <Link className="text-blue-600 hover:underline" to="/use-callback">
        Exercice React.memo et useCallback
      </Link>
      <Link className="text-blue-600 hover:underline" to="/create-portal">
        Exercice Modales : CreatePortal et "dialogue"
      </Link>
      <Link className="text-blue-600 hover:underline" to="/error-boundary">
        Exercice Error Boundary
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
