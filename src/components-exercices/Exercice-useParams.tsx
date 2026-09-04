import { Link, useParams } from "react-router";

interface Client {
  id: string;
  nom: string;
  ville: string;
  derniereVisite: string;
}

const CLIENTS: Client[] = [
  { id: "c1", nom: "Marie Dubois", ville: "Tours", derniereVisite: "2026-03-12" },
  { id: "c2", nom: "Paul Renard", ville: "Amboise", derniereVisite: "2026-01-28" },
  { id: "c3", nom: "Sophie Lemaire", ville: "Blois", derniereVisite: "2026-05-04" },
];

function Clients() {
  return (
    <ul>
      {CLIENTS.map((c) => (
        <li key={c.id}>
          <Link to={`/exo-use-params/${c.id}`}>{c.nom}</Link>
        </li>
      ))}
    </ul>
  );
}

function FicheClient() {
  const { id } = useParams();
  const client = CLIENTS.find((c) => c.id === id);
  if (!client) return <p>Client introuvable</p>;
  return (
    <article className="mt-16">
      <h2>{client.nom}</h2>
      <p>{client.ville}</p>
      <p>{client.derniereVisite}</p>
    </article>
  );
}

export { Clients, FicheClient };
