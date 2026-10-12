import { createContext, useContext, useState } from "react";

export function ExerciceUseContext() {

  return (
    <div className="flex flex-col gap-20">
    <ExerciceContexte />
    <p>Un espace entre deux exercice</p>
    <ExerciceUseContext2 />
  </div>
)
}

const MutuelleContext = createContext<string>("Aucune mutuelle");
function ExerciceContexte() {
  const [mutuelle, setMutuelle] = useState("Harmonie");

  return (
    <div className="p-4">
      <button onClick={() => setMutuelle("MGEN")}>Changer de mutuelle</button>
      <MutuelleContext value={mutuelle}>
        <FicheClient />
      </MutuelleContext>
    </div>
  );
}

function FicheClient() {
  return (
    <section>
      <Remboursement />
    </section>
  );
}

function Remboursement() {
  const mutuelle = useContext(MutuelleContext);
  return <p>Mutuelle : {mutuelle}</p>;
}


/* Séparation deuxième exercice */



type Theme = "clair" | "sombre";

interface ThemeContexte {
  theme: Theme;
  basculerTheme: () => void;
}

const ThemeContext = createContext<ThemeContexte | null>(null);
function ExerciceUseContext2() {
  const [theme, setTheme] = useState<Theme>("clair");

  function basculerTheme() {
    setTheme((prev) => (prev === "clair" ? "sombre" : "clair"));
  }

  return (
    <ThemeContext value={{ theme, basculerTheme }}>
      <div className="p-4">
        <BarreOutils />
      </div>
    </ThemeContext>
  );
}

function BarreOutils() {
  return (
    <nav>
      <BoutonTheme />
    </nav>
  );
}

function BoutonTheme() {
  const leTheme = useContext(ThemeContext)
  if (!leTheme) throw new Error("pas de thème ?")

  const {theme, basculerTheme} = leTheme

  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <button onClick={basculerTheme}>
        Passer en {theme === "clair" ? "sombre" : "clair"}
      </button>
    </div>
  );
}