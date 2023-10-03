/**
 * @author      Jean Némarre <jean.nemarre@divtec.ch>
 * @version     0.1
 * @since       2016-09-23
 *
 * http://usejsdoc.org/
 */

'use strict'; // Demande un interprétation stricte du code
console.log('Coucou');

// Récupération des éléments HTML
const form = document.getElementById('formRect');
const txtHauteur = document.getElementById('hauteur');
const divRectange = document.getElementById('rectangle');
console.log(form, txtHauteur, divRectange);

function miseAJour(event) {
  // Stoppe l'envoi du formulaire
  event.preventDefault();
  let hauteur = parseInt(txtHauteur.value);
  // Si hauteur n'est PAS un nombre
  if (isNaN(hauteur)) {
    alert('Entrez un nombre !');
    return; // Stoppe la fonction
  }
  divRectange.style.height = hauteur + 'px';
}

// Ecoute l'envoi (submit) du formulaire
form.addEventListener('submit', miseAJour);
// form.addEventListener('submit', () => {
//   alert('Envoyé !');
// });
