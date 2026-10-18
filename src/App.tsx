import Accueil from "./components/Accueil";
import { PageIntrouvable } from "./components/Accueil";
import { House, Undo2 } from "lucide-react";
import { Route, Routes, Link, useNavigate, useLocation } from "react-router";
import { Brouillon2 } from "./exercices/Brouillon-TSX";
import ExerciceFetchSearch from "./exercices/Exercice-fetch-search";
import ExercicePropsTableauType from "./exercices/exercice Props-TableauType";
import ExercicePageDevis from "./exercices/Exercice-FonctionProps";
import LiftingStateUp from "./exercices/Exercice-Lifting state up";
import LiftingStateUpTS from "./exercices/Exercice-LiftingStateUp";
import LiftingStateUpTS2 from "./exercices/Exercice-LiftingStateUp2";
import { Clients, FicheClient } from "./exercices/Exercice-useParams";
import { ListeMonture, FicheMonture } from "./exercices/Exercice-useParams-API";
import LayoutUseParams, { AccueilUseParams } from "./exercices/LayoutUseParams";
import { ExerciceChildren } from "./exercices/ExerciceChildren";
import { FicheClient2 } from "./exercices/ExerciceChildrenRefacto";
import { FicheOrdonnance } from "./exercices/Exercice-children-TS-table";
import ExerciceUseRef from "./exercices/Exercice-useRef";
import { FicheClients3, ListeClients3, LayoutClients } from "./exercices/ExerciceNavigation";
import { Affichage, ListeMonturesExo, FicheMontureExo } from "./exercices/Exercice-Outlet-UseParams";
import { ListeFavoris, LayoutFavoris } from "./exercices/Exercice-useOutletContext";
import { ExerciceUseContext } from "./exercices/Exercice-createContext-useContext";
import { BoutonTheme } from "./components/BoutonTheme";
import { ExerciceContextHook } from "./exercices/exercice-context-hook";
import { ExerciceUseReducer } from "./exercices/exercice-use-reducer";
import { ExerciceContextReducer } from "./exercices/Exercice-usecontext-usereducer";
import { ExerciceUseMemo } from "./exercices/Exercice-useMemo";
import { ExerciceUseRefContains } from "./exercices/Exercice-contrains-useRef";
import { ExerciceContextReducer2 } from "./exercices/Exercice-usecontext-usereducer2";

function App() {
  // return <Brouillon2 />;
  const naviguer = useNavigate();
  const location = useLocation();

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <nav className="flex gap-3 p-1 font-semibold">
        <BoutonTheme />
        <Link to="/" aria-label="Accueil" className="inline-block rounded-full border p-2 text-blue-500">
          <House size={20} />
        </Link>
        {location.pathname !== "/" && (
          <button
            type="button"
            onClick={() => naviguer(-1)}
            aria-label="Précédent"
            className="inline-block cursor-pointer rounded-full border p-2 text-blue-500"
          >
            <Undo2 size={20} />
          </button>
        )}
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/brouillon2" element={<Brouillon2 />} />
          <Route path="/page-devis" element={<ExercicePageDevis />} />
          <Route path="/props-tableau-type" element={<ExercicePropsTableauType />} />
          <Route path="/fetch-search" element={<ExerciceFetchSearch />} />
          <Route path="/lifting-state-up" element={<LiftingStateUp />} />
          <Route path="/lifting-state-up-ts" element={<LiftingStateUpTS />} />
          <Route path="/lifting-state-up-ts-2" element={<LiftingStateUpTS2 />} />
          <Route path="/use-params" element={<LayoutUseParams />}>
            <Route index element={<AccueilUseParams />} />
            <Route path="clients" element={<Clients />} />
            <Route path="clients/:id" element={<FicheClient />} />
            <Route path="montures" element={<ListeMonture />} />
            <Route path="montures/:id" element={<FicheMonture />} />
          </Route>
          <Route path="/exercice-children" element={<ExerciceChildren />} />
          <Route path="*" element={<PageIntrouvable />} />
          <Route path="/exercice-children-refacto" element={<FicheClient2 />} />
          <Route path="/exercice-children-ts" element={<FicheOrdonnance />} />
          <Route path="/exercice-useref" element={<ExerciceUseRef />} />
          <Route path="/use-ref-contains" element={<ExerciceUseRefContains />} />
          <Route path="/exercice-navigation" element={<LayoutClients />}>
            <Route index element={<ListeClients3 />} />
            <Route path="fiche-client/:id" element={<FicheClients3 />} />
          </Route>
          <Route path="/exercice-outlet" element={<Affichage />}>
            <Route index element={<ListeMonturesExo />} />
            <Route path="fiche-monture/:id" element={<FicheMontureExo />} />
          </Route>
          <Route path="use-outlet-context" element={<LayoutFavoris />}>
            <Route index element={<ListeFavoris />} />
          </Route>
          <Route path="/use-context" element={<ExerciceUseContext />} />
          <Route path="/context-hook" element={<ExerciceContextHook />} />
          <Route path="/use-reducer" element={<ExerciceUseReducer />} />
          <Route path="/use-context-reducer" element={<ExerciceContextReducer />} />
          <Route path="/use-context-reducer2" element={<ExerciceContextReducer2 />} />
          <Route path="/use-memo" element={<ExerciceUseMemo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
