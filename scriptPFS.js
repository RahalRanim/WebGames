const contentChoixOrdinateur = document.getElementById('choix-ordinateur');
const contentChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('result');

const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur
let result
let choixOrdinateur

//Evenement 'Click sur les buttons'
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
  //récuperation de l'ID du boutton cliqué
  choixUtilisateur = e.target.id;
  //on ajoute l'image qui correspond au choix 
  contentChoixUtilisateur.innerHTML = `<img src ="${choixUtilisateur}.png">`
  generer_choix_ordinateur()
  verification()
}))

//Fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur(){
  random = Math.floor(Math.random() * 3 )+1
  if(random === 1 )
  {
    choixOrdinateur = "pierre"
  }
  if(random === 2 )
  {
    choixOrdinateur = "papier"
  }
  if(random === 3 )
  {
    choixOrdinateur = "ciseaux"
  }
  contentChoixOrdinateur.innerHTML = `<img src ="${choixOrdinateur}.png">`

}

//Fonction pour verifier si le joueur a gagné ou pas
function verification() {
  if(choixUtilisateur == choixOrdinateur)
  {
    result = "Equality!"
  }

  if(choixUtilisateur == "pierre" && choixOrdinateur=="papier")
  {
    result = "Lost!"
  }
  if(choixUtilisateur == "papier" && choixOrdinateur=="ciseaux")
  {
    result = "Lost!"
  }
  if(choixUtilisateur == "ciseaux" && choixOrdinateur=="pierre")
  {
    result = "Lost!"
  }

  if(choixOrdinateur == "pierre" && choixUtilisateur=="papier")
  {
    result = "Win!"
  }
  if(choixOrdinateur == "papier" && choixUtilisateur=="ciseaux")
  {
    result = "Win!"
  }
  if(choixOrdinateur == "ciseaux" && choixUtilisateur=="pierre")
  {
    result = "Win!"
  }

  contenantResultat.innerHTML = result;
}