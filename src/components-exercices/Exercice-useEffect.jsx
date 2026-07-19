// import { useState, useEffect } from "react";

// function CompteurEssais() {
//   const [bouton, setBouton] = useState(true);

//   useEffect(() => {
//     document.title = ` ${bouton ? "ouvert" : "fermé"} - optique CHAMPION`;
//   }, [bouton]);
//   return (
//     <div>
//       <h2>ouverture : {bouton ? "ouvert" : "fermé"}</h2>
//       <button type="button" onClick={() => setBouton(!bouton)}>
//         {bouton ? "Click pour fermer" : "Click pour ouvrir"}
//       </button>
//     </div>
//   );
// }
// export default CompteurEssais;

//                         //--------------------------------------------------------------------------------------//

// import { useState } from "react";

// function GestionMontures() {
//   const [marque, setMarque] = useState("");
//   const [prix, setPrix] = useState("");
//   const [monture, setMonture] = useState([]);

//   function ajouter() {
//     setMonture([...monture, { id: crypto.randomUUID(), marque, prix }]);
//     setMarque("");
//     setPrix("");
//   }
//   function supprimer(id) {
//     setMonture(monture.filter((m) => m.id !== id));
//   }

//   return (
//     <>
//       <h1>Gestionnaire de Montures</h1>
//       <input placeholder="Marque" value={marque} onChange={(e) => setMarque(e.target.value)} />
//       <input placeholder="Prix" value={prix} onChange={(e) => setPrix(e.target.value)} />
//       <button onClick={ajouter}>Ajouter</button>
//       <ul>
//         {monture.map((m) => (
//           <li key={m.id}>
//             {m.marque}-{m.prix}€<button onClick={() => supprimer(m.id)}>SUPPRIMER</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default GestionMontures;
