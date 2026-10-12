import { useState, useEffect } from "react";

function ListeClients() {
  const [clients, setClients] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    async function charger() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("c'est un avion");
        const data = await res.json();
        setClients(data);
      } catch (e) {
        setErreur(e.message);
      } finally {
        setChargement(false);
      }
    }
    charger();
  }, []);

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p>erreur : {erreur}</p>;

  return (
    <ul>
      {clients.map((c) => (
        <li key={c.id}>
          {c.name} — {c.email} ({c.company.name})
        </li>
      ))}
    </ul>
  );
}

export default ListeClients;
