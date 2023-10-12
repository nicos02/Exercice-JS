// Définition de l'objet personnage
let personnage = {
  name: "Nicolas M", // Nom du personnage
  age: 29, // Âge du personnage
  rang: "Capitaine", // Rang du personnage
  crie: "C'est parti !", // Cri du personnage
};

let personnageJson = JSON.stringify(personnage); // Conversion de l'objet en chaîne JSON
console.log(personnageJson); // Affichage de la chaîne JSON dans la console