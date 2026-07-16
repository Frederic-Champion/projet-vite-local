import { useState, useEffect } from "react";

export default function Minuteur() {
  const [seconde, setSeconde] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconde((actuelle) => {
        if (actuelle <= 1) {
          clearInterval(id);
          return 0;
        }
        return actuelle - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.title = `titre en ${seconde}s`;
  }, [seconde]);

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
