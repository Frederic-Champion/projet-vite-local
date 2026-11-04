class Fidelite {
  constructor(nom) {
    this.nom = nom;
    this.points = 0;
    this.ajouterPoints = this.ajouterPoints.bind(this);
  }
  ajouterPoints(n) {
    this.points += n;
    console.log(`${this.nom} : ${this.points} points`);
  }
}

const carte = new Fidelite("Mme Martin");

function simulerAchat(callback) {
  callback(10);
}

simulerAchat(carte.ajouterPoints);
simulerAchat(carte.ajouterPoints);
// simulerAchat(carte.ajouterPoints.bind(carte));
// simulerAchat(() => carte.ajouterPoints(10));

// Ma prédiction : Ne va pas function car pas de bind, this n'a pas d'objet avec le point donc undefined. Donc plante.

// pas de possibilité de réparer avant ? Là on répare au moment de l'appel, pas possible de le réparer dans la class directement ?
