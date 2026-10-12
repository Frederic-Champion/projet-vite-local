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

function ExercicePropsTableauType() {
  return (
    <section>
      <h2>Clients</h2>
      <ListeClients clients={CLIENTS} />
    </section>
  );
}

export default ExercicePropsTableauType;

/*  Résultat attendu

Ray-Ban Aviator — 189,00 € — Express (+15,00 €, total 204,00 €)
Persol 649 — 245,00 €
Oakley Holbrook — 165,00 € — Prioritaire (+8,00 €, total 173,00 €)


import { formatEuro } from "../utils/format";

const COMMANDES = [
  { id: "k1", reference: "Ray-Ban Aviator", prix: 189, urgence: { niveau: "Express", supplement: 15 } },
  { id: "k2", reference: "Persol 649", prix: 245 },
  { id: "k3", reference: "Oakley Holbrook", prix: 165, urgence: { niveau: "Prioritaire", supplement: 8 } },
];

interface Urgent {
  niveau: string;
  supplement: number;
}

interface Commande {
  id: string;
  reference: string;
  prix: number;
  urgence?: Urgent;
}

interface ListeCommandesProps {
  commandes: Commande[];
}

function ListeCommandes({ commandes }: ListeCommandesProps) {
  return (
    <ul>
      {commandes.map((c) => (
        <li>
          {c.reference} - {formatEuro(c.prix)}{" "}
          {c.urgence && (
            <>
              {" - "}
              {c.urgence.niveau} (+{formatEuro(c.urgence.supplement)}, total {formatEuro(c.prix + c.urgence.supplement)}
              )
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Brouillon2() {
  return <ListeCommandes commandes={COMMANDES} />;
}

*/
