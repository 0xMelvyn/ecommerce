// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer toutes les images miniatures
    const thumbnails = document.querySelectorAll('.thumbnails img');
  
    // Récupérer l'image principale
    const mainImage = document.querySelector('.product img');
  
    // Parcourir les images miniatures et ajouter un gestionnaire d'événement de clic à chacune
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener('click', function() {
        // Mettre à jour l'attribut src de l'image principale avec l'URL de l'image miniature cliquée
        const thumbnailSrc = thumbnail.getAttribute('src');
        mainImage.setAttribute('src', thumbnailSrc);
      });
    });
  });

  function incrementer() {
    var compteur = document.getElementById("compteur");
    var valeur = parseInt(compteur.innerHTML);
    compteur.innerHTML = valeur + 1;
  }

  function decrease() {
    var compteur = document.getElementById("compteur");
    var valeur = parseInt(compteur.innerHTML);
    if (valeur > 1) {
    compteur.innerHTML = valeur - 1;
    }
  }