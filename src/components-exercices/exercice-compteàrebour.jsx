import { useState, useEffect } from "react";

function Minuteur2() {
  const [valeur, setValeur] = useState("");
  const [chrono, setChrono] = useState(0);
  const [on, setOn] = useState(false);

  function envoyer() {
    const duree = Number(valeur);
    if (duree > 0) {
      setOn(true);
      setChrono(duree);
    }
  }

  useEffect(() => {
    if (!on) return;
    const id = setInterval(() => {
      setChrono((x) => {
        if (x <= 1) {
          clearInterval(id);
          setOn(false);
          return 0;
        }
        return x - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [on]);

  return (
    <>
      <input placeholder="Ecrit là" value={valeur} onChange={(e) => setValeur(e.target.value)} />
      <button type="button" onClick={envoyer}>
        TOP
      </button>
      <p>ici est affiché le compte à rebours : {chrono}</p>
    </>
  );
}
export default Minuteur2;
