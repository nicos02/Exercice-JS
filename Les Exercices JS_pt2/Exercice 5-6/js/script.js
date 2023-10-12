function showText() {
   // Récupère l'élément avec l'ID "text" et supprime la classe "hidden"
   document.getElementById("text").classList.remove("hidden");
}

function hideText() {
   // Récupère l'élément avec l'ID "text" et ajoute la classe "hidden"
   document.getElementById("text").classList.add("hidden");
}
function changeTextColor() {
   // Récupère l'élément avec l'ID "text"
   var textElement = document.getElementById("text");
   
   // Vérifie si l'élément a déjà la classe "color-text"
   if (textElement.classList.contains("color-text")) {
      // Si oui, supprime la classe "color-text"
      textElement.classList.remove("color-text");
   } else {
      // Sinon, ajoute la classe "color-text"
      textElement.classList.add("color-text");
   }
}