import { Link, Navigate, useLocation, useNavigate, useParams, Outlet } from "react-router";

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
  const location = useLocation();
  const nomEnregistre = location.state?.client;

  return (
    <div>
      {nomEnregistre && <p className="py-4">{nomEnregistre} est enregistré.</p>}
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
  const naviguer = useNavigate();

  const client = CLIENTS.find((c) => c.id === id);
  if (!client) return <Navigate replace to="/exercice-navigation" />;
  return (
    <div>
      <p>
        {client.nom} - {client.mutuelle}
      </p>
      <button
        onClick={() => naviguer("/exercice-navigation", { state: { client: client.nom } })}
        className="mx-2 rounded border p-2"
      >
        Enregistrer
      </button>
    </div>
  );
}

function LayoutClients() {
  return (
    <div className="flex flex-col">
      <h1>Espace Clients</h1>
      <Link className="mx-2 mb-16 w-fit self-center rounded border p-2" to="/exercice-navigation">
        Liste Clients
      </Link>
      <Outlet />
    </div>
  );
}

export { FicheClients3, ListeClients3, LayoutClients };
