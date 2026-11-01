// Version function Constructeur
function Client(nom, mutuelle) {
  this.nom = nom;
  this.mutuelle = mutuelle;
  this.presenter = function () {
    return `${this.nom} (${this.mutuelle})`;
  };
}

//Version class (renommé Client2 pour eviter les erreurs)
class Client2 {
  constructor(nom, mutuelle) {
    this.nom = nom;
    this.mutuelle = mutuelle;
  }
  presenter() {
    return `${this.nom} (${this.mutuelle})`;
  }
}

const c1 = new Client("Martin", "MGEN");
const c2 = new Client2("Petit", "Harmonie");
console.log(c1.presenter());
console.log(c2.presenter());

/* ----------------------------------------------------- */

class Verre {
  constructor(type, prix) {
    this.type = type;
    this.prix = prix;
  }

  decrire() {
    return `Verre ${this.type} à ${this.prix} €`;
  }
  prixRemise(taux) {
    return this.prix * (1 - taux);
  }
}

const v = new Verre("progressif", 300);
console.log(v.decrire());
console.log(v.prixRemise(0.1));

/* ----------------------------------------------------- */

class Compteur {
  constructor() {
    this.total = 0;
  }
  ajouter() {
    this.total += 1;
    return `Total : ${this.total}`;
  }
}

const cpt = new Compteur();
console.log(cpt.ajouter());

const e = () => cpt.ajouter();
console.log(e())

const f = cpt.ajouter.bind(cpt);
console.log(f());