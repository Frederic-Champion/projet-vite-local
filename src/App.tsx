// import Brouillon from "./components-exercices/Brouillon-exercice";
import Brouillon2 from "./components-exercices/Brouillon-TSX";
import ExerciceFetchSearch from "./components-exercices/Exercice-fetch-search";
import ExercicePropsTableauType from "./components-exercices/exercice Props-TableauType";
import ExercicePageDevis from "./components-exercices/Exercice-FonctionProps";
import { Route, Routes, Link } from "react-router";

function App() {
  // return <Brouillon2 />;

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <nav className="flex gap-3 border border-b-blue-500 p-1 font-semibold">
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
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/brouillon2" element={<Brouillon2 />} />
          <Route path="/page-devis" element={<ExercicePageDevis />} />
          <Route path="/props-tableau-type" element={<ExercicePropsTableauType />} />
          <Route path="/fetch-search" element={<ExerciceFetchSearch />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
