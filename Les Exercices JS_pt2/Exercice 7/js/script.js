function passwordCheck(event) {
  // Empêche le comportement par défaut de l'événement, dans ce cas la soumission du formulaire
  event.preventDefault();

  // Récupère la valeur de l'élément avec l'ID "password"
  var password = document.getElementById("password").value;

  // Récupère l'élément avec l'ID "confirm" pour une utilisation ultérieure
  var confirmField = document.getElementById("confirm");

  // Récupère l'élément avec l'ID "message" pour afficher les messages de correspondance des mots de passe
  var message = document.getElementById("message");

  if (password === confirm) {
    // Si les mots de passe correspondent, supprime la classe "mismatch" de l'élément confirmField
    confirmField.classList.remove("mismatch");
    // Ajoute la classe "match" à l'élément confirmField
    confirmField.classList.add("match");
    // Définit le texte du message à "Les mots de passe correspondent !"
    message.textContent = "Les mots de passe correspondent !";
    // Définit la couleur du texte du message en vert
    message.style.color = "green";
  } else {
    // Si les mots de passe ne correspondent pas, supprime la classe "match" de l'élément confirmField
    confirmField.classList.remove("match");
    // Ajoute la classe "mismatch" à l'élément confirmField
    confirmField.classList.add("mismatch");
    // Définit le texte du message à "Les mots de passe ne correspondent pas !"
    message.textContent = "Les mots de passe ne correspondent pas !";
    // Définit la couleur du texte du message en rouge
    message.style.color = "red";
  }
}
