import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

interface Monture {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface ReponseFetch {
  products: Monture[];
}

function ListeMonture() {
  const [donnee, setDonnee] = useState<ReponseFetch | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);
  const [chargement, setChargement] = useState(false);

  useEffect(() => {
    async function recup() {
      setChargement(true);
      setErreur(null);

      const url = "https://dummyjson.com/products/category/sunglasses";
      try {
        const reponse = await fetch(url);
        if (!reponse.ok) throw new Error(`c'est une erreur : ${reponse.status}`);
        const data = await reponse.json();
        setDonnee(data);
      } catch (e: unknown) {
        setErreur(e instanceof Error ? e.message : "Une erreur inconnue est survenue");
      } finally {
        setChargement(false);
      }
    }
    recup();
  }, []);

  if (chargement) return <p>Chargement en cours...</p>;
  if (erreur) return <p>Il y a une erreur : {erreur}</p>;
  const produits = donnee?.products ?? [];
  return (
    <ul>
      {produits.map((d) => (
        <li key={d.id}>
          <Link to={`/use-params/montures/${String(d.id)}`}>{d.title}</Link>
        </li>
      ))}
    </ul>
  );
}

function FicheMonture() {
  const { id } = useParams();
  const [monture, setMonture] = useState<Monture | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);
  const [chargement, setChargement] = useState(false);
  const naviguer = useNavigate();

  function handleRetourListe() {
    naviguer("/use-params/montures")
  }

  useEffect(() => {
    if (!id) return;

    async function charger() {
      setChargement(true);
      setErreur(null);

      try {
        const reponse = await fetch(`https://dummyjson.com/products/${id}`);
        if (!reponse.ok) throw new Error(`c'est une erreur : ${reponse.status}`);
        const data = await reponse.json();
        setMonture(data);
      } catch (e: unknown) {
        setErreur(e instanceof Error ? e.message : "Une erreur inconnue est survenue");
      } finally {
        setChargement(false);
      }
    }
    charger();
  }, [id]);

  if (chargement) return <p>Chargement en cours...</p>;
  if (erreur) return <p>Il y a une erreur : {erreur}</p>;
  if (!monture) return <p>Référence introuvable</p>;

  return (
    <div>
      <img src={monture.thumbnail} alt={monture.title} />
      <p>{monture.title}</p>
      <p>{monture.price}</p>
      <p>{monture.description}</p>
      <button onClick={handleRetourListe} type="button" className="mt-4 cursor-pointer rounded-lg border p-2">
        Retour à la liste
      </button>
      <button onClick={() => naviguer(-1)} type="button" className="mt-4 cursor-pointer rounded-lg border p-2">
        Précédent
      </button>
    </div>
  );
}

export { ListeMonture, FicheMonture };
