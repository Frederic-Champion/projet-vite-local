import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface Verre {
  id: string;
  nom: string;
}
const VERRES = [
  { id: "v1", nom: "unif" },
  { id: "v2", nom: "prog" },
];

function CarteVerre({ verre }: { verre: Verre | undefined }) {
  return <p>{verre!.nom}</p>;
}

function Exercice1() {
  const [id, setId] = useState("v1");
  const verre = VERRES.find((v) => v.id === id);

  return (
    <div>
      <h1>Atelier Verres</h1>
      <button onClick={() => setId("v1")}>v1</button>
      <button onClick={() => setId("v9")}>v9</button>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            <p>Cette zone a rencontré un problème.</p>
            <button
              onClick={() => {
                resetErrorBoundary();
                console.log("bouton cliqué");
              }}
            >
              Réessayer
            </button>
          </div>
        )}
        resetKeys={[id]}
      >
        <CarteVerre verre={verre} />
      </ErrorBoundary>
    </div>
  );
}

/*--------------- Séparation d'exercice -------------- */

interface Client {
  id: number;
  nom: string;
  mutuelle?: { nom: string };
}

const CLIENTS: Client[] = [
  { id: 1, nom: "Martin", mutuelle: { nom: "MGEN" } },
  { id: 2, nom: "Durand" },
  { id: 3, nom: "Petit", mutuelle: { nom: "Harmonie" } },
];

function FicheClient({ client }: { client: Client }) {
  return (
    <article>
      <h3>{client.nom}</h3>
      <p>Mutuelle : {client.mutuelle!.nom}</p>
    </article>
  );
}

function Exercice2() {
  return (
    <ul>
      {CLIENTS.map((c) => (
        <ErrorBoundary fallback={<li>Une erreur est survenue.</li>} key={c.id}>
          <li>
            <FicheClient client={c} />
          </li>
        </ErrorBoundary>
      ))}
    </ul>
  );
}

/* --------------- Fusion des exercices ------------ */

export function ExerciceErrorBoundary() {
  return (
    <div className="flex flex-col gap-8">
      <Exercice1 />

      <div className="flex items-center gap-6">
        <hr className="grow" />
        <p>Séparation des exercices</p>
        <hr className="grow" />
      </div>

      <Exercice2 />
    </div>
  );
}
