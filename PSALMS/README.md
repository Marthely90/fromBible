<script>
  new Vue({
    el: '#data',
    data: { msg: message, sexeFm: userSexe, name: name }
  })
</script>
<div id="data">

<div style="text-align: right"> 

[RETOURNER A L'ACCUEIL]()

</div>
  
> Des Psaumes, pour {{name}} {{userSexe?'👸':'🤴'}}

?> Je crois très sincèrement - comme pouvait le faire le roi David - que  déclarer ce que Dieu dit de nous, est salutaire pour notre âme.
Alors n'hésite pas {{name}}, à en faire des déclarations personnelles et pourquoi pas des sujets de prière.

<img src='images/bible-1846174_1920.jpg'/>

***

# Le vrai bonheur 🐬

> {{ msg }}

<span v-if="sexeFm">Je suis Heureuse, pourquoi ?</span>
<span v-else="sexeFm">Je suis Heureux, pourquoi ?</span>

* Je ne suis pas le conseil des gens sans foi ni loi;
* Je ne m'arrête pas sur le chemin de ceux qui se détournent de Dieu;
* Je ne m'assieds pas avec ceux qui se moquent de tout
* J'aime l'enseignement du Seigneur :  <b> je médite jour et nuit Sa parole</b>

?>Je suis comme un arbre planté près d'un cours d'eau, produisant mes fruits quand ma saison arrive, et mon feuillage ne perd jamais sa fraîcheur. Tout ce que je fais réussi. L'Éternel connaît ma conduite.

# {{userSexe?'La reine':'Le roi'}} que Dieu consacre {{userSexe?'👸':'🤴'}}

> {{ msg }}

A Sion, la montagne qui m'est consacrée, dit l'Eternel, je t'ai consacré <span v-if="sexeFm">reine</span><span v-else="sexeFm">roi</span>.
Laissez-moi citer le décret du Seigneur; il m'a déclaré: 
"C'est toi qui es <span v-if="sexeFm">ma fille</span><span v-else="sexeFm">mon fils</span>. A partir d'aujourd'hui, c'est moi qui suis ton père."

Si je Lui demande toutes les nations,
Il me les donnera en propriété;
Mon domaine s'étendra jusqu'au bout du monde.
Je les maîtriserai avec une autorité de fer,
Je pourrai les briser comme un pot d'argile.

<span v-if="sexeFm">Je me montre intelligente :</span>
<span v-else="sexeFm">Je me montre intelligent :</span>
Je me laisse avertir et je me soumets avec respect au Seigneur, reconnaissant son autorité, car sa colère peut s'enflammer tout à coup.

?>Quel bonheur de recourir à l'Eternel !

# Entouré d'ennemis 🌪

> {{ msg }}

Mes ennemis sont nombreux ! <br/>
Des gens se dressent contre moi ! <br/>
Ils disent à mon sujet : "Aucune chance que Dieu vienne à son secours !"

Mais, le Seigneur est pour moi un bouclier protecteur,
Il me rend ma dignité et ma fierté.

Quand j'appelle le Seigneur à mon secours,
Il me répond de la montagne qui lui est consacrée. <br/>
Je me suis endormi pour la nuit;
Au réveil je reprends conscience que <b>le Seigneur est mon appui</b>.<br/>
Je n'ai plus peur de ces milliers de gens qui m'assaillent de tous côtés.

?>Le Seigneur frappe à la joue mes ennemis et casse les dents des méchants.
C'est Lui qui sauve. Sa bénédiction demeure sur son peuple.

# Défendu par Dieu ⚔️

> {{ msg }}

Quand je l'appelle au secours, Il rétablit mon droit et me réponds.
Déjà quand j'étais opprimé, Il m'a rendu la liberté.
Il me fait la grâce d'écouter ma prière.

Vous autres, jusqu'à quand salirez vous mon honneur, 
vous qui aimez accuser pour rien, et qui cherchez à me calomnier ?
Apprenez que le Seigneur me distingue à cause de ma fidélité: 
Il m'écoute quand je l'appelle au secours.
Quand je suis faché, je ne me mets pas en tort,
Je réfléchis pendant la nuit et je reste tranquille.
J'offre plutôt des sacrifes convenables et je me fie à la décision du Seigneur.

Beaucoup se pleignent :
"Ah! que nous aimerions voir le bonheur ! Seigneur, fais-nous bon accueil."

?> Mais dans mon coeur le Seigneur met plus de joie que ces gens n'en trouvent à récolter tout leur blé et tout leur vin.
Aussitôt couché, je m'endort en paix, car le Seigneur me fait vivre en sécurité.

***

[RETOURNER A L'ACCUEIL]()
</div>
