import { formatEuro } from "../utils/format";

interface Monture {
  id: string;
  marque: string;
  prix: number;
}

interface ListeMonturesProps {
  montures: Monture[]; // ⬅️ LE TROU : déclare ici la prop qui contient la liste
}

function ListeMontures({ montures }: ListeMonturesProps) {
  return (
    <ul>
      {montures.map((m) => (
        <li key={m.id}>
          {m.marque} — {formatEuro(m.prix)}
        </li>
      ))}
    </ul>
  );
}

//Composant page qui l'alimente

const CATALOGUE = [
  { id: "a1", marque: "Ray-Ban", prix: 149 },
  { id: "a2", marque: "Persol", prix: 229 },
  { id: "a3", marque: "Oakley", prix: 179 },
];

function PageCatalogue() {
  return (
    <section>
      <h2>Catalogue</h2>
      <ListeMontures montures={CATALOGUE} />
    </section>
  );
}

export default PageCatalogue;
