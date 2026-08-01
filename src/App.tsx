// Section exercices à importer et commenter/décommenter dès que l'on souhaite afficher le composant avec App()

// import Brouillon from "./components-exercices/Brouillon-exercice";
// import Brouillon2 from "./components-exercices/Brouillon-TSX";
import PageAccueil from "./components-exercices/PageAccueil";
import PageSav from "./components-exercices/PageSav";
import { Route, Routes, Link } from "react-router";

function App() {
  // return <Brouillon2 />;

  return (
    <>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/sav">SAV</Link>
      </nav>
      <Routes>
        <Route path="/sav" element={<PageSav />} />
        <Route path="/" element={<PageAccueil />} />
      </Routes>
    </>
  );
}

export default App;
