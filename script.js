/**
 * @author      Jean Némarre <jean.nemarre@divtec.ch>
 * @version     0.1
 * @since       2016-09-23
 *
 * http://usejsdoc.org/
 */

'use strict'; // Demande un interprétation stricte du code

// Récupération des éléments HTML utiles
const formRect = document.getElementById('formRect');
const txtHauteur = document.getElementById('hauteur');
const divRectangle = document.getElementById('rectangle');
console.log(formRect, txtHauteur, divRectangle);

/**
 * Fonction appelée lors de l'envoi du formulaire
 */
function miseAJour(event) {
  // Stoppe l'envoi du formulaire
  event.preventDefault();
  let hauteur = parseInt(txtHauteur.value); // Retourne un entier ou NaN
  if(isNaN(hauteur)) {
    alert('Entrez un nombre !');
    return; // Stoppe le script, code de la fonction
  }
  divRectangle.style.height = hauteur + 'px';
}

// Ecoute l'envoi du formulaire
formRect.addEventListener('submit', miseAJour);

// formRect.addEventListener('submit', () => {
//   event.preventDefault();
//   alert('miseAJour');
// });

