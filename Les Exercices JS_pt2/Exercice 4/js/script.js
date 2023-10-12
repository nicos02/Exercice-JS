      // Récupère l'élément de l'image
      const image = document.querySelector("img.image-hover");
      // Ajoute un écouteur d'événement pour le survol de l'image
      image.addEventListener("mouseover", () => {
        // Ajoute la bordure rouge à l'image
        image.style.border = "3px solid red";
      });
      // Ajoute un écouteur d'événement pour la fin du survol de l'image
      image.addEventListener("mouseout", () => {
        // Supprime la bordure rouge à l'image
        image.style.border = "none";
      });