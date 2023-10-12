// let personnage = {
//   name: "Nicolas M", // Nom du personnage
//   age: 29, // Âge du personnage
//   rang: "Capitaine", // Rang du personnage
//   crie: "C'est parti !", // Cri du personnage
// };

// console.log(personnage); // Affiche l'objet personnage dans la console

// function Personnage(name, age, rang, crie) {
//   this.name = name; // Assigner la valeur du paramètre name à la propriété name de l'objet
//   this.age = age; // Assigner la valeur du paramètre age à la propriété age de l'objet
//   this.rang = rang; // Assigner la valeur du paramètre rang à la propriété rang de l'objet
//   this.crie = crie; // Assigner la valeur du paramètre crie à la propriété crie de l'objet
// }

// let personnage = new Personnage("Nicolas", 29, "Capitaine", "C'est parti !"); // Créer une nouvelle instance de l'objet Personnage avec les valeurs spécifiées
// console.log(personnage); // Affiche l'objet personnage dans la console

class Personnage {
  constructor(name, age, rang, crie) {
    // Définition du constructeur de la classe Personnage
    this.name = name; // Initialisation de la propriété name avec la valeur du paramètre name
    this.age = age; // Initialisation de la propriété age avec la valeur du paramètre age
    this.rang = rang; // Initialisation de la propriété rang avec la valeur du paramètre rang
    this.crie = crie; // Initialisation de la propriété crie avec la valeur du paramètre crie
  }
}

const personnage = new Personnage("Nicolas", 29, "Capitaine", "C'est parti !"); // Création d'une nouvelle instance de la classe Personnage avec les valeurs spécifiées
console.log(personnage); // Affichage de l'objet personnage dans la console

