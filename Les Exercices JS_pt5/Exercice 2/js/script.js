let car = {
  // Propriétés de la voiture
  make: "Renault", // Marque de la voiture
  model: "Clio", // Modèle de la voiture
  color: "Bleu-Ciel", // Couleur de la voiture

  // Méthode pour afficher les propriétés de la voiture
  showCar: function() {
    console.log(`Une belle ${this.make} ${this.model}, de couleur ${this.color}.`); // Affiche les détails de la voiture
  }
};

car.showCar(); // Affiche "Une belle Renault Clio, de couleur bleu-ciel."