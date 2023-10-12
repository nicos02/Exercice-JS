// Sélectionner le bouton
var bouton = document.getElementById("monBouton");

// Ajouter un écouteur d'événement pour l'événement click
bouton.addEventListener("click", function(event) {
  // Récupérer le type de l'événement
  var typeEvenement = event.type;
  
  // Afficher le type de l'événement dans une alerte
  alert("Type d'événement : " + typeEvenement);
});