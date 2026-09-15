import { Outlet, Link, useParams, Navigate, useNavigate, useLocation } from "react-router";
import { formatEuro } from "../utils/format";
import { useState, useEffect } from "react";

const MONTURES = [
  { id: "m1", modele: "Aviator", marque: "Ray-Ban", prix: 149 },
  { id: "m2", modele: "Oakley Holbrook", marque: "Oakley", prix: 129 },
  { id: "m3", modele: "Clubmaster", marque: "Ray-Ban", prix: 159 },
];

function ListeMonturesExo() {
  const location = useLocation();
  const [montureSave, setMontureSave] = useState(location.state?.monture);

  useEffect(() => {
    if (montureSave) {
      const timer = setTimeout(() => {
        setMontureSave("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [montureSave]);

  return (
    <div>
      {montureSave && <p className="py-4">{montureSave} enregistré</p>}
      {MONTURES.map((m) => (
        <Link key={m.id} className="mx-2 rounded border p-2" to={`/exercice-outlet/fiche-monture/${m.id}`}>
          {m.modele}
        </Link>
      ))}
    </div>
  );
}

function FicheMontureExo() {
  const { id } = useParams();
  const naviguer = useNavigate();

  const monture = MONTURES.find((m) => m.id === id);
  if (!monture) return <Navigate replace to="/exercice-outlet" />;
  return (
    <div>
      <h2>{monture.modele}</h2>
      <p>{monture.marque}</p>
      <p>{formatEuro(monture.prix)}</p>
      <button
        onClick={() => naviguer("/exercice-outlet", { state: { monture: monture.modele } })}
        className="mx-2 rounded border p-2"
      >
        Enregistrer la monture
      </button>
    </div>
  );
}

function Affichage() {
  return (
    <div>
      <h1>Catalogue Montures</h1>
      <Outlet />
    </div>
  );
}

export { Affichage, FicheMontureExo, ListeMonturesExo };
