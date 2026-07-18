import { useState, useEffect } from "react";

function RechercheServeur() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    async function charger() {
      try {
        setChargement(true);
        setErreur(null);

        const url = `https://jsonplaceholder.typicode.com/users?username_like=${search}`;
        const r = await fetch(url);

        if (!r.ok) {
          throw new Error("Réponse serveur invalide");
        }

        const data = await r.json();
        setUsers(data);
      } catch (e) {
        setErreur(e.message);
      } finally {
        setChargement(false);
      }
    }
    charger();
  }, [search]);

  // rendus conditionnels (early return)
  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cherche un username..." />
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.username} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RechercheServeur;

//test en version .then

useEffect(() => {
  function brouillon() {
    setLoad(true);
    setErreur(null);
    const url = `https://api.optique-exemple.com/magasins?ville=${search}`;
    fetch(`https://api.optique-exemple.com/magasins?ville=${search}`)
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch((e) => setErreur(e.message))
      .finally(() => setLoad(false));
  }
  brouillon();
}, [search]);
