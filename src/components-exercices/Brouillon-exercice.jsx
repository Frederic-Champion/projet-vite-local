import { useState, useEffect } from "react";

export default function RechercheVilles() {
  const [load, setLoad] = useState(false);
  const [erreur, setErreur] = useState(null);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      async function chargement() {
        try {
          setLoad(true);
          setErreur(null);

          const r = await fetch(`https://api.optique-exemple.com/magasins?ville=${search}`);
          if (!r.ok) {
            throw new Error("ceci est une erreur");
          }
          const d = await r.json();
          setData(d);
        } catch (e) {
          setErreur(e.message);
        } finally {
          setLoad(false);
        }
      }
      chargement();
    }, 300);

    return () => clearTimeout(id);
  }, [search]);

  if (load) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;

  return (
    <>
      <input placeholder="recherche de pays" value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {data.map((m) => (
          <li key={m.nom}>
            {m.nom}
            {m.ville}
          </li>
        ))}
      </ul>
    </>
  );
}
