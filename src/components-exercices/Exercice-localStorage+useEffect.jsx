import { useState, useEffect } from "react";

function Catalogue() {
  const [valeur, setValeur] = useState("");
  const [stock, setStock] = useState(() => {
    const liste = localStorage.getItem("montures");
    return liste ? JSON.parse(liste) : [];
  });

  function ajouter() {
    setValeur("");
    setStock([...stock, { mont: valeur, id: crypto.randomUUID() }]);
  }

  useEffect(() => {
    localStorage.setItem("montures", JSON.stringify(stock));
  }, [stock]);

  return (
    <>
      <input placeholder="monture ici" value={valeur} onChange={(e) => setValeur(e.target.value)} />
      <button type="button" onClick={ajouter}>
        Ajoute ici
      </button>
      <ul>
        {stock.map((m) => (
          <li key={m.id}>{m.mont}</li>
        ))}
      </ul>
    </>
  );
}
export default Catalogue;
