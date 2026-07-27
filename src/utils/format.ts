export function formatEuro(valeur: number) {
  return valeur.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}
