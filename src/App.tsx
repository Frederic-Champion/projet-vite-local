import Accueil from "./components-exercices/Accueil";
import { PageIntrouvable } from "./components-exercices/Accueil";
import { House } from "lucide-react";
import { Route, Routes, Link } from "react-router";
import Brouillon2 from "./components-exercices/Brouillon-TSX";
import ExerciceFetchSearch from "./components-exercices/Exercice-fetch-search";
import ExercicePropsTableauType from "./components-exercices/exercice Props-TableauType";
import ExercicePageDevis from "./components-exercices/Exercice-FonctionProps";
import LiftingStateUp from "./components-exercices/Exercice-Lifting state up";
import LiftingStateUpTS from "./components-exercices/Exercice-LiftingStateUp";
import LiftingStateUpTS2 from "./components-exercices/Exercice-LiftingStateUp2";
import { Clients, FicheClient } from "./components-exercices/Exercice-useParams";
import { ListeMonture, FicheMonture } from "./components-exercices/Exercice-useParams-API";
import LayoutUseParams, { AccueilUseParams } from "./components-exercices/LayoutUseParams";

function App() {
  // return <Brouillon2 />;

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <nav className="flex gap-3 p-1 font-semibold">
        <Link to="/" aria-label="Accueil" className="inline-block rounded-full border p-2 text-blue-500">
          <House size={20} />
        </Link>
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
          <Route path="*" element={<PageIntrouvable />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
