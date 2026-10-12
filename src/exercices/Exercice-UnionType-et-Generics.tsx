const montures = [
  { modele: "Aviator", prix: 189 },
  { modele: "Wayfarer", prix: 145 },
  { modele: "Clubmaster", prix: 210 },
  { modele: "Erika", prix: 132 },
  { modele: "Justin", prix: 98 },
];

const m = auHasard(montures); // m est de type Monture
const s = auHasard(["a", "b", "c"]); // s est de type string

function auHasard<T>(valeur: T[]): T {
  const i = Math.floor(Math.random() * (valeur.length + 1));
  return valeur[i];
}
