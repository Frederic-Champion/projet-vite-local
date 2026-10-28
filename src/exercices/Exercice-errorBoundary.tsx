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

function CarteVerre({ verre }: {verre: Verre | undefined}) {
  return <p>{verre!.nom}</p>;
}

export function ExerciceErrorBoundary() {
  const [id, setId] = useState("v1");
  const verre = VERRES.find((v) => v.id === id);

  return (
    <div>
      <h1>Atelier Verres</h1>
      <button onClick={() => setId("v1")}>v1</button>
      <button onClick={() => setId("v9")}>v9</button>
      <ErrorBoundary fallback={<p>Cette zone a rencontré un problème.</p>}>
        <CarteVerre verre={verre} />
      </ErrorBoundary>
    </div>
  );
}
