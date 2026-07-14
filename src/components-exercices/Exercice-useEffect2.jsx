import { useState, useEffect } from "react";

export default function Minuteur() {
  const [seconde, setSeconde] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconde((actuelle) => actuelle - 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <p>Minuteur : {seconde}</p>
    </div>
  );
}

// function DerniereTouche() {
//   const [touche, setTouche] = useState("(aucune)");

//   useEffect(() => {
//     function handleKey(e) {
//       setTouche(e.key);
//     }
//     window.addEventListener("keydown", handleKey);

//     return () => {
//       window.removeEventListener("keydown", handleKey)
//     };
//   }, []);

//   return <p>Dernière touche pressée : {touche}</p>;
// }

// export default DerniereTouche;
