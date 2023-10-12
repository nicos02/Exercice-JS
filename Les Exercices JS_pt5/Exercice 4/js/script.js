const personnage = {
  name: "Nicolas M", // Nom du personnage
  age: 29, // Âge du personnage
  rang: "Capitaine", // Rang du personnage
  crie: "Haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", // Cri du personnage
  crier() {
    // Méthode pour crier
    console.log(this.crie); // Affiche la valeur de la propriété crie dans la console
  },
};

personnage.crier(); // Appelle la méthode crier et affiche "Haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" dans la console
