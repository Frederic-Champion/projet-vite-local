import { useState, useEffect } from "react";

function ListeArticles() {
  const [donnees, setDonnees] = useState([]);
  const [erreur, setErreur] = useState("");
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    async function recuperation() {
      try {
        const reponse = await fetch("https://raw.githubusercontent.com/mledoze/countries/master/countries.json");
        if (!reponse.ok) throw new Error("ceci est une erreur");
        const data = await reponse.json();
        setDonnees(data);
      } catch (e) {
        setErreur(e.message);
      } finally {
        setChargement(false);
      }
    }
    recuperation();
  }, []);
  if (erreur) return <p>erreur : {erreur}</p>;
  if (chargement) return <p>Chargement ...</p>;

  return (
    <div>
      <ul>
        {donnees.map((d) => (
          <li>{d.name.common}</li>
        ))}
      </ul>
    </div>
  );
}
export default ListeArticles;
