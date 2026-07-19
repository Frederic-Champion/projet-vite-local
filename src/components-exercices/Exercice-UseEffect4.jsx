// import { useState, useEffect } from "react";

// export default function Affichage() {
//   const [compteur, setCompteur] = useState(0);
//   const [largeur, setLargeur] = useState(window.innerWidth);
//   const [ecran, setEcran] = useState(() => {
//     return localStorage.getItem("taille") === "plein";
//   });

//   useEffect(() => {
//     const taille = ecran ? "plein" : "fenetre";
//     localStorage.setItem("taille", taille);
//   }, [ecran]);

//   useEffect(() => {
//     function handleResize() {
//       setLargeur(window.innerWidth);
//     }

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <p>CLients servis : {compteur}</p>
//       <p>largueur en pixel : {largeur} </p>
//       <p>{ecran ? "Plein Écran" : "Fenêtré"}</p>
//       <button type="button" onClick={() => setCompteur(compteur + 1)}>
//         client servi
//       </button>
//       <button type="button" onClick={() => setEcran(!ecran)}>
//         switch écran
//       </button>
//     </>
//   );
// }

// import { useState, useEffect } from "react";

// export default function Fetch() {
//   const [data, setData] = useState(null);
//   const [load, setLoad] = useState(false);
//   const [erreur, setErreur] = useState(null);

//   useEffect(() => {
//     async function telecharger() {
//       setLoad(true);
//       setErreur(null);
//       try {
//         const url = "https://api.optique-exemple.com/client/1";
//         const reponse = await fetch(url);
//         if (!reponse.ok) {
//           throw new Error("ceci est un avion");
//         }
//         const d = await reponse.json();
//         setData(d);
//       } catch (err) {
//         console.log(err); // apprendre à debug
//         console.log("juste le message :", err.message); // vu de l'utilisateur
//         setErreur(err.message);
//       } finally {
//         setLoad(false);
//       }
//     }
//     telecharger();
//   }, []);
//   if (load) return <p>Chargement...</p>;
//   if (erreur) return <p>Erreur : {erreur}</p>;
//   if (!data) return null;
//   return (
//     <>
//       <p>C'est Superman</p>
//       <ul>
//         <li>
//           {data.nom}-{data.email}
//         </li>
//       </ul>
//     </>
//   );
// }

// Version avec .then ci dessous :

//   useEffect(() => {
//     setLoad(true);
//     setErreur(null);
//     fetch("https://api.optique-exemple.com/client/1")
//       .then((r) => {
//         if (!r.ok) throw new Error("ça bug");
//         return r.json();
//       })
//       .then((d) => setData(d))
//       .catch((err) => setErreur(err.message))
//       .finally(() => setLoad(false));
//   }, []);
