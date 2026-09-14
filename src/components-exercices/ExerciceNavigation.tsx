import { Link, useParams } from "react-router";

interface Client {
  id: string;
  nom: string;
  mutuelle: string;
}

const CLIENTS: Client[] = [
  { id: "c1", nom: "Dupont", mutuelle: "Harmonie" },
  { id: "c2", nom: "Martin", mutuelle: "MGEN" },
];

function ListeClients3() {
  return (
    <div>
      {CLIENTS.map((c) => (
        <Link className="mx-2 rounded border p-2" key={c.id} to={`/exercice-navigation/fiche-client/${c.id}`}>
          {c.nom}
        </Link>
      ))}
    </div>
  );
}

function FicheClients3() {
  const { id } = useParams();

  const client = CLIENTS.find((c) => c.id === id);
  if (!client) return <p>Client inexistant</p>

  return (
    <div>
      {client.nom} - {client.mutuelle}
    </div>
  );
}

export { FicheClients3, ListeClients3 };
