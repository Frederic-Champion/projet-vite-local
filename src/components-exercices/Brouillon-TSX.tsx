/* -- Résultat attendu --

Dupont — 289,00 € — Harmonie (remboursé 173,40 €)
Martin — 150,00 €
Bernard — 420,00 € — MGEN (remboursé 168,00 €)

*/

import { formatEuro } from "../utils/format";

const CLIENTS = [
  { id: "c1", nom: "Dupont", montant: 289, mutuelle: { nom: "Harmonie", tauxRmb: 0.6 } },
  { id: "c2", nom: "Martin", montant: 150 },
  { id: "c3", nom: "Bernard", montant: 420, mutuelle: { nom: "MGEN", tauxRmb: 0.4 } },
];

interface Mutuelle {
  nom: string;
  tauxRmb: number;
}

interface Client {
  id: string;
  nom: string;
  montant: number;
  mutuelle?: Mutuelle;
}

interface ListeClientsProps {
  clients: Client[];
}

function ListeClients({ clients }: ListeClientsProps) {
  return (
    <ul>
      {clients.map((c) => (
        <li key={c.id}>
          {c.nom} — {formatEuro(c.montant)}
          {c.mutuelle && (
            <>
              {" "}
              — {c.mutuelle.nom} (remboursé {formatEuro(c.montant * c.mutuelle.tauxRmb)})
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

function PageClients() {
  return (
    <section>
      <h2>Clients</h2>
      <ListeClients clients={CLIENTS} />
    </section>
  );
}

export default PageClients;
