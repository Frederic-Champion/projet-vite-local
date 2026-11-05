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
console.log(e());

const f = cpt.ajouter.bind(cpt);
console.log(f());

/* ----------------------------------------------------- */
console.log("une ligne de séparation entre deux exercices");

class Commande {
  constructor(numero, client) {
    this.numero = numero;
    this.client = client;
    this.articles = [];
  }

  ajouter(prix) {
    this.articles.push(prix);
  }
  total() {
    return this.articles.reduce((acc, prix) => acc + prix, 0);
  }
}

const cmd = new Commande("C-042", "Martin");
cmd.ajouter(120);
cmd.ajouter(80);
console.log(cmd.total()); // attendu : 200

const bouton = { onClick: (prix) => cmd.ajouter(prix) };
bouton.onClick(50);
console.log(cmd.total());

// découverte des class :

class CommandeLentilles extends Commande {
  constructor(numero, client, dureeMois) {
    super(numero, client);
    this.dureeMois = dureeMois;
  }
  prixMensuel() {
    return this.total() / this.dureeMois;
  }
}

const cl = new CommandeLentilles("C-060", "Petit", 6);
cl.ajouter(90);
cl.ajouter(30);
console.log(cl.total()); // attendu : 120
console.log(cl.prixMensuel()); // attendu : 20

/* ----------------------------------------------------- */

class ErreurOrdonnance extends Error {
  constructor(message) {
    super(message);
    this.name = "Erreur Ordonnance";
  }
}

function verifierSphere(sphere) {
  if (sphere < -20 || sphere > 20) throw new ErreurOrdonnance(`Correction hors limite' : ${sphere}`);
  else return sphere;
}

function tester(valeur) {
  try {
    console.log("OK :", verifierSphere(valeur));
  } catch (e) {
    if (e instanceof ErreurOrdonnance) {
      console.log("Ordonnance invalide :", e.message);
    } else {
      console.log("Bug inattendu");
    }
  }
}

tester(-2.5);
tester(35);

/* ----------------------------------------------------- */

class Equipement {
  constructor(nom, prix) {
    this.nom = nom;
    this.prix = prix;
  }
  prixTTC() {
    return this.prix * 1.2;
  }
}

class EquipementSolaire extends Equipement {
  constructor(nom, prix, indice) {
    super(nom, prix);
    this.indice = indice;
  }
  description() {
    return `${this.nom} - cat. ${this.indice} - ${this.prixTTC()}€`;
  }
}

const lunette = new EquipementSolaire("Aviator", 100, 3);
console.log(lunette.description());
console.log(lunette instanceof Equipement);
