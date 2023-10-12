class Animal {
   constructor(name, race, pound, crie) {
     this.name = name; // Initialisation de la propriété name avec la valeur du paramètre name
     this.race = race; // Initialisation de la propriété race avec la valeur du paramètre race
     this.poids = pound; // Initialisation de la propriété poids avec la valeur du paramètre poids
     this.crie = crie; // Initialisation de la propriété crie avec la valeur du paramètre crie
   }
 }
 
 const animal = new Animal("Beethoven", "Labrador", "90kg", "Wouaf!!"); // Création d'une nouvelle instance de la classe Animal avec les valeurs spécifiées
 const animal2 = new Animal("Rex", "Labrador", "50kg", "Wouaf!!");
 const animal3 = new Animal("Mimi", "Labrador", "30kg", "Wouaf!!");
 
 console.log(animal, animal2, animal3); // Affichage de l'objet animal dans la console
 