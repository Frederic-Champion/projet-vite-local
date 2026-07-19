//import { useState, useEffect } from "react";

// export default function ExerciceUseEffect3() {
//   const [dark, setDark] = useState(() => {
//     return localStorage.getItem("theme") === "Sombre";
//   });

//   useEffect(() => {
//     const theme = dark ? "Sombre" : "Clair";
//     localStorage.setItem("theme", theme);
//   }, [dark]);

//   return (
//     <>
//       <button type="button" onClick={() => setDark(!dark)}>
//         change de thème
//       </button>
//       <p>thème : {dark ? "Sombre" : "Clair"}</p>
//     </>
//   );
// }

// import { useState, useEffect } from "react";

// export default function LargeurFenetre() {
//   const [largeur, setLargeur] = useState(window.innerWidth);  // largeur au départ

//   useEffect(() => {
//     function handleResize() {
//       setLargeur(window.innerWidth);   // TROU 1 : la nouvelle largeur de la fenêtre
//     }

//     window.addEventListener("resize", handleResize);  // TROU 2 (l'événement) + TROU 3 (la fonction)

//     return () => window.removeEventListener("resize", handleResize);  // TROU 4
//   }, []);   // ← pourquoi [] ici ? (question bonus, réponds en mots) : parce que le listener écoute déjà la taille de l'écran qui change donc pas besoin.

//   return <p>Largeur : {largeur}px</p>;
// }

// import { useState, useEffect } from "react";

// export default function RechercheVilles() {
//   const [load, setLoad] = useState(false);
//   const [erreur, setErreur] = useState(null);
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const id = setTimeout(() => {
//       async function chargement() {
//         try {
//           setLoad(true);
//           setErreur(null);

//           const r = await fetch(`https://api.optique-exemple.com/magasins?ville=${search}`);
//           if (!r.ok) {
//             throw new Error("ceci est une erreur");
//           }
//           const d = await r.json();
//           setData(d);
//         } catch (e) {
//           setErreur(e.message);
//         } finally {
//           setLoad(false);
//         }
//       }
//       chargement();
//     }, 300);

//     return () => clearTimeout(id);
//   }, [search]);

//   if (load) return <p>Chargement...</p>;
//   if (erreur) return <p>Erreur : {erreur}</p>;

//   return (
//     <>
//       <input placeholder="recherche de pays" value={search} onChange={(e) => setSearch(e.target.value)} />
//       <ul>
//         {data.map((m) => (
//           <li key={m.nom}>
//             {m.nom}
//             {m.ville}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
