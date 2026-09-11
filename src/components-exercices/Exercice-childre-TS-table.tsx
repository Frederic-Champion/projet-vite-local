// (OD : -1.25 / -0.5 / 90 · OG : -1.5 / -0.75 / 85 · Addition : 2).

const ORDONNANCE: Ordonnance = {
  yeux: {
    OD: {
      sphere: -1.25,
      cylindre: -0.5,
      axe: 90,
    },
    OG: { sphere: -1.5, cylindre: -0.75, axe: 85 },
  },
  add: 2.0,
};

interface Correction {
  sphere: number;
  cylindre: number;
  axe: number;
}
interface Yeux {
  OD?: Correction;
  OG?: Correction;
}

interface Ordonnance {
  yeux: Yeux;
  add?: number;
}

interface RubriqueProps {
  titre: string;
  children: React.ReactNode;
  variante?: "normal" | "alerte";
}

interface TableauCorrectionsProps {
  ordonnance: Ordonnance;
}

function Rubrique({ titre, children, variante = "normal" }: RubriqueProps) {
  const couleurBordure = variante === "alerte" ? "border-red-500" : "";
  return (
    <div className={`m-2 max-w-fit rounded-md border bg-gray-700 ${couleurBordure}`}>
      <h2 className="text-3xl font-semibold">{titre}</h2>
      {children}
    </div>
  );
}

function TableauCorrections({ ordonnance }: TableauCorrectionsProps) {
  const corrections = Object.entries(ordonnance.yeux);
  const addition = ordonnance.add;

  return (
    <table className="border bg-gray-600">
      <thead className="border">
        <tr>
          <th className="border p-2" scope="col">
            Oeil
          </th>
          <th className="border p-2" scope="col">
            Sphère
          </th>
          <th className="border p-2" scope="col">
            Cylindre
          </th>
          <th className="border p-2" scope="col">
            Axe
          </th>
        </tr>
      </thead>
      <tbody>
        {corrections.map(([oeil, { sphere, cylindre, axe }]) => (
          <tr key={oeil}>
            <th className="border p-2" scope="row">
              {oeil}
            </th>
            <td>{sphere}</td>
            <td>{cylindre}</td>
            <td>{axe}</td>
          </tr>
        ))}
        {addition !== undefined && (
          <tr className="border">
            <th className="p-2" scope="row">
              Add
            </th>
            <td className="p-2" colSpan={2}></td>
            <td className="p-2">{addition}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function FicheOrdonnance() {
  return (
    <div>
      <Rubrique titre="Ordonnance">
        <TableauCorrections ordonnance={ORDONNANCE} />
      </Rubrique>
      <Rubrique titre="Remarque" variante="alerte">
        <p className="bg-gray-600 p-2">Ordonnance périmée depuis le 12/03/2026</p>
      </Rubrique>
    </div>
  );
}

export { FicheOrdonnance };
