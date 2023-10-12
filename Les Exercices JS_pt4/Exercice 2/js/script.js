// Attacher un écouteur d'événement de clavier à la balise <body>
document.body.addEventListener("keydown", function(event) {
  // Récupérer la valeur de la touche enfoncée
  var touche = event.key;
  
  // Afficher la valeur de la touche dans la console
  console.log(touche);
});