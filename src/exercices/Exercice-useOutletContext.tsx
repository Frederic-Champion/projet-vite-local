import { useState } from "react";
import { Outlet, useOutletContext } from "react-router";

export interface ContexteFavoris {
  ajouterFavori: (nom: string) => void;
}

export function LayoutFavoris() {
  const [favoris, setFavoris] = useState<string[]>([]);

  function ajouterFavori(nom: string) {
    setFavoris((prev) => [...prev, nom]);
  }

  return (
    <div>
      <h1>Favoris : {favoris.length}</h1>
      <Outlet context={{ajouterFavori}} />
    </div>
  );
}

const MONTURES = ["Ray-Ban Aviator", "Oakley Holbrook", "Persol 714"];

export function ListeFavoris() {
  const { ajouterFavori } = useOutletContext<ContexteFavoris>();

  return (
    <ul>
      {MONTURES.map((m) => (
        <li key={m}>
          {m} <button onClick={() => ajouterFavori(m)}>♡</button>
        </li>
      ))}
    </ul>
  );
}