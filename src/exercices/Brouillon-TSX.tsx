import { memo, useCallback, useState } from "react";

const BoutonAjouter = memo(function BoutonAjouter({ onAjouter }: { onAjouter: () => void }) {
  console.log("🟢 rendu de BoutonAjouter");
  return (
    <button onClick={onAjouter} className="border px-2">
      Ajouter un verre
    </button>
  );
});

export function Brouillon2() {
  const [note, setNote] = useState("");
  const [total, setTotal] = useState(0);

  const ajouter = useCallback(() => setTotal((prev) => prev + 1), []);

  return (
    <div className="flex flex-col gap-2 p-4">
      <input value={note} onChange={(e) => setNote(e.target.value)} className="border" />
      <p>Total : {total}</p>
      <BoutonAjouter onAjouter={ajouter} />
    </div>
  );
}
