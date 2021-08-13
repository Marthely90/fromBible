/*Fait le lien entre mon compteur et mon code html*/
const compteur = document.getElementById("compteur");
 
/*Ajoute 1 au compteur lors de la visite*/
const addCompteur = async () => {
  /*
    async et await :
      async initialise le await
      await sert a éviter les bugs ou autre en disant
        - temps que ma ligne de code n'est pas effectuée
          je ne passe pas a la suivante
 
    API : count en ligne free et facile a use
  */
  const data = await fetch("https://api.countapi.xyz/hit/inod-Compteur/visits");
  const count = await data.json();
  compteur.innerHTML = count.value;
  compteur.style.filter = "blur(0)";
};
 
addCompteur();