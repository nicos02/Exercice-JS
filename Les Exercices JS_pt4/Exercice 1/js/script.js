// En utilisant new Date(), je créez une nouvelle instance de l'objet Date qui représente la date et l'heure actuelles.
var date = new Date();

// Obtenir les informations de la date locale
var jour = date.getDate();
// on met le mois + 1 car le mois est indexé a partir de 0
var mois = date.getMonth() + 1; 
// on met l'annee
var annee = date.getFullYear();

// Afficher la date locale
console.log(jour + "/" + mois + "/" + annee);