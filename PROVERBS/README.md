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

> Des Proverbes, pour {{name}} {{userSexe?'👸':'🤴'}}

?> Je crois très sincèrement - comme pouvait le faire le roi David - que  déclarer ce que Dieu dit de nous, est salutaire pour notre âme.
Alors n'hésite pas {{name}}, à en faire des déclarations personnelles et pourquoi pas des sujets de prière.

<img src='images/bible-102684_1920.jpg' style="margin-top:30px"/>

***

# Un trésor 💎

> {{ msg }}

Je consulterai avec profit les proverbes et j'y trouverai des directives pour comprendre leur sens caché et les propos énigmatiques de ceux qui enseignent la sagesse. Je reconnaîtrai l'autorité du Seigneur : c'est l'ABC de ma sagesse. J'écouterai les avertissements de mon père et les conseils de ma mère. Les avertissements de la sagesse répondront sur moi l'Esprit du Seigneur et éclaireront mes conseils.

# Le chemin du bonheur 🗽

> {{ msg }}

J'écoute les leçons de la sagesse et je m'efforce de les comprendre. Je demande de l'aide à l'intelligence et j'appelle la raison au secours. Je les cherche comme l'argent, comme un trésor caché. 

L'Éternel m'aide et me protège comme un bouclier. Il me secourt et me garde à cause de mon équité, mon intégrité et ma droiture : c'est le chemin du bonheur. 

La sagesse est entrée dans mon cœur, la connaissance me donne de la joie, la réflexion me garde de l'erreur et la raison veille sur moi. Je choisis la conduite des bons et j'imite le comportement des justes. J'habiterai ce pays dans la loyauté et l'intégrité.

# Le bouclier du sage 🛡

> {{ msg }}

Grâce aux conseils je connais le bien-être et une vie longue et heureuse. Je pratique la bonté et la fidélité. Dieu et les hommes m'aiment et apprécient mon bon sens. Je ne me fie pas à ma propre intelligence, mais je place ma confiance dans le Seigneur. Je l'honore en Lui offrant une part de mes revenus : le meilleur de mes récoltes. 

J'accepte que le Seigneur soit mon éducateur. Je suis heureux car j'ai trouvé la sagesse et découvert la raison. Elles m'aident à vivre longtemps, elles me procurent prospérité et bonheur, elles me dirigent sur des sentiers agréables en toute sécurité. Le discernement et la réflexion, voilà mon guide. Grâce à eux je vis une vie véritable et belle. 

J'avance avec assurance, aucun obstacle ne me fera tomber. Le soir je me couche sans peur, la nuit mon sommeil est paisible. L'Éternel me garde en sécurité, il écarte tout piège de mes pas, je ne crains rien. 

Chaque fois que j'en ai la possibilité, je n'hésite pas à faire le bien à ceux qui en ont besoin. Le Seigneur me traite avec bonté, pour mon humilité. Il m'honore pour ma sagesse.

# Acquérir et garder fermement la sagesse 🎓

> {{ msg }}

J'aime la sagesse et je donne tout ce que je possède pour acquérir l'intelligence, je ne les oublierai plus.
Je ne renierai jamais l'éducation que j'ai reçue; c'est la base de ma vie : j'y reste attaché. 

Par-dessus tout je prendrais garde à ce que je pense au fond de moi-même : ma vie en dépend. 
Je garde mes yeux fixés droits devant moi. 
Je réfléchis au chemin que je vais prendre pour engager mes pas dans une direction sûre.

# Amour de Jeunesse 💌

> {{ msg }}

Je prête une oreille attentive aux paroles pleines de sagesse et d'intelligence.

<span v-if="sexeFm">
 Je me tiens éloigné du mari d'autrui; je ne le laisse même pas s'approcher du seuil de ma maison. <br/> 
 Pour mon époux je suis comme une source d'eau pure. <br/>
 Il boit à cette source ! Je ne laisse pas mon eau couler dans les rues et se disperser sur les places publiques. Qu'elle soit pour lui seul ! <br/>
 Je ne la partage pas avec des étrangers. 
 Il est rempli de bonheur et trouve sa joie dans la femme de sa jeunesse. <br/>
 Il me trouve aimable, et gracieuse comme la gazelle. <br/>
 Mon corps le comble toujours de plaisir. Je m'abandonne sans cesse à son amour. <br/>
 Pourquoi l'abandonnerais-je à une autre ? <br/>
 Pourquoi chercherais-je le plaisir auprès d'un étranger ?
</span>

<span v-else="sexeFm">
Je me tiens éloigné de la femme d'autrui; je ne m'approche même pas du seuil de sa maison. <br/>
La mienne est comme une source d'eau pure. <br/>
Je bois à cette source ! Je ne laisse pas son eau couler dans les rues et se disperser sur les places publiques. Qu'elle soit pour moi seul ! <br/>
Je ne la partage pas avec des étrangers. 
Je la remplie de bonheur, je trouve ma joie dans la femme de ma jeunesse. <br/>
Ma femme est aimable, et gracieuse comme la gazelle. <br/>
Que son corps me comble toujours de plaisir. Je m'abandonne sans cesse à son amour. <br/>
Pourquoi m'abandonnerais-je à la femme d'un autre ? <br/>
Pourquoi chercherais-je le plaisir auprès d'une étrangère ?
</span>


# Un bon conseil 🐜

> {{ msg }}

Je ne m'accorde aucun repos et je ne ferme pas l'œil avant de parvenir à me libérer d'une créance. 

J'observe la fourmi pour en tirer une leçon de sagesse. 

Je tiens compte des recommandations de mon père et de l'enseignement de ma mère.

# Des alliés de choix ✅

> {{ msg }}

La Sagesse est ma sœur, l'intelligence mon ami

# Écouter la sagesse 🧏

> {{ msg }}

J'apprends à avoir du bon sens et de l'esprit. 

Je recherche l'éducation plus que l'argent, la connaissance plus que l'or pur. 

Je déteste le mal, car je suis soumis au Seigneur. 

Je suis le conseil de la sagesse, je l'écoute et je la trouve.

# L'invitation de la sagesse 🍷

> {{ msg }}

Je me nourris à la table de la sagesse et je bois le vin qu'elle a préparé. 

Je prends le chemin de l'intelligence. Je ne critique que les sages. 

Je reconnais l'autorité du Seigneur, comme le commencement de ma sagesse.

# Un enfant juste 👼

> {{ msg }}

Je fais la joie de mes parents. 
En effet, ma conduite est juste: elle me préserve de la mort. 

Le Seigneur ne me laissera pas avoir faim. 
Mes mains sont actives, elles me procurent la richesse. 
J'amasse mes provisions pendant l'été et j'attire sur moi le bonheur.

On se souviendra de moi avec reconnaissance. 
J'accepte avec joie les directives. 
Je vis dans la sécurité, parce que je vis dans l'intégrité. 
Je reprends les autres avec franchise pour apporter la paix. 
Mes paroles sont sources de vie. 
Je ne tiens pas compte des offenses, par amour. 
Mes paroles sont intelligentes, on y reconnaît la sagesse.

J'amasse un trésor d'expérience et ma fortune me tient lieu de place forte. 
Mon travail me permet de vivre. 
J'avance dans la vie, parce que je tiens compte des avertissements. 
Je suis prudent, c'est pourquoi je tiens ma langue. 
Mes paroles valent l'argent le plus pur, et profitent à beaucoup. 

C'est la bénédiction du Seigneur qui me donne la prospérité. 
La pratique de la sagesse est un jeu pour moi. 
Mes souhaits me sont accordés, alors je me tiens toujours debout, même après l'ouragan. 
Je vivrais longtemps, puisque je reconnais l'autorité du Seigneur.

Mon espérance me procure la joie. 
Les plans du Seigneur me protègent comme une forteresse, rien ne me fera jamais tomber. 
Des paroles sages sortent de ma bouche; le tout avec bienveillance.

# {{userSexe?'Une Femme':'Un Homme'}} juste 😇

> {{ msg }}

J'utilise toujours des poids exacts.
Je suis modeste, intègre et juste.
Mon intégrité me met sur le droit chemin.
Grâce à mon expérience et ma justice je préserve ma vie de l'inquiétude.

J'apporte la prospérité autour de moi.
Mon intelligence me pousse à me taire.
Je suis digne de confiance; je garde tout pour moi.
Ma bonté me fait du bien.

La justice que je propage m'assure une récompense certaine.
Ma justice me préserve la vie.
Le Seigneur m'approuve pour mon intégrité.

J'échapperais à la punition à cause de ma justice.
Mon unique désir est de bien agir.
Je donne largement c'est pourquoi ma fortune s'accroît.

Je suis généreux c'est pourquoi, je suis comblé de bien en retour; je donne à boire c'est pourquoi je suis désaltéré. Je suis approuvé parce que j'agis bien.
Je prospère comme un arbre verdoyant.
J'oriente bien ma maison.

Mes actes sont comme un arbre de vie, ils gagnent les cœurs, j'ai ma récompense sur la terre.

# La conduite du juste 👑

> {{ msg }}

J'aime la correction, parce que j'aime la science. 
J'obtiens la faveur de l'Eternel à cause de ma bonté et ma racine ne sera pas ébranlée.
<span v-if="sexeFm">Je suis une femme vertueuse: la couronne de mon époux.</span>
<span v-else="sexeFm">Ma femme est vertueuse, elle est ma couronne.</span>
Mes pensées ne sont qu'équité et ma bouche une délivrance. 
Ma maison reste debout. 
Je suis estimé à cause de mon intelligence, je reste humble. 

Je prends soin de mon bétail et je cultive mon champ, c'est pourquoi je suis rassasié de pain. 
Ma racine donne du fruit et je me tire de la détresse. 
Je suis rassasié de bien par le fruit de ma bouche et je reçois selon l'œuvre de mes mains. 

Je suis sage c'est pourquoi j'écoute les conseils. 
Je suis prudent, c'est pourquoi je me garde de montrer ma colère. 
Je proclame la justice en disant la vérité, je suis affermie pour toujours. 
J'apporte la guérison par des paroles pleines de sagesse. 

Je conseille la paix, cela me procure de la joie. 
Aucun malheur ne m'arrive à cause de ma justice. 
Je suis agréable à l'Eternel, parce que j'agis avec vérité. 
Je cache ma science par prudence. 

Ma main est diligente, c'est pourquoi elle domine. 
Je me réjouis en me nourrissant de bonnes paroles. 
Je montre à mes amis la bonne voie. 
L'activité est mon précieux trésor. 
La vie est dans mon sentier : un sentier de justice.

# Être responsable 🧐

> {{ msg }}

Je tiens compte des avertissements de mon père. 
Je récolterai le fruit de mes paroles, c'est pourquoi je surveille ma bouche, afin de mettre ma vie à l’abri. 
Je suis actif c'est pourquoi j'obtiens ce que je désire. 
Je suis juste et je déteste le mensonge. 

L'honnêteté me protège, puisque je me conduis bien. 
Je rayonne comme une lumière brillante. 
Je trouve plus sage d'accepter les conseils et d'acquérir ma richesse petit à petit. 

Mes désires comblés sont comme un arbre de vie. 
Je respecte les ordres, c'est pourquoi je suis récompensé. 
Mon enseignement est sage et source de vie. 
Mon bon sens fait mon charme. 

Je suis avisé, je réfléchis donc avant d'agir. 
Je rétablis les situations par ma fidélité quand j'en ai la responsabilité. 
Je tiens compte des critiques, c'est pourquoi je suis honoré. 
Je fréquente les sages pour gagner en sagesse. 

Le bonheur est la récompense de mon honnêteté. 
Je n'hésiterai pas à punir mes enfants par amour; afin de leur laisser un héritage.
Nous mangerons à satiété.

# Une conduite appréciée 📌

> {{ msg }}

<span v-if="sexeFm">Je suis sage, j'assure la solidité de mon foyer.</span>
<span v-else="sexeFm">Ma femme est sage, elle assure la solidité de notre foyer.</span>
Je mène une vie droite par respect pour le Seigneur. <br/>
Mes paroles sages assurent ma protection; je suis  un témoin digne de confiance. 
Je réfléchis, c'est pourquoi j'acquiers facilement du savoir faire. 
<span v-if="sexeFm">Je surveille ma conduite par prudence et je suis pleine de bonnes volontés.</span><br/> 
<span v-else="sexeFm">Je surveille ma conduite par prudence et je suis plein de bonnes volontés.</span><br/> 
Ma maison est destinée à la prospérité; dans ma prudence je regarde où je mets mes pieds, car j'ai peur du mal et je m'en détourne. 
Le savoir fait mon honneur. <br/>
<span v-if="sexeFm">Je suis bonne avec les pauvres.</span><br/> 
<span v-else="sexeFm">Je suis bon avec les pauvres.</span><br/> 
Mes bonnes intentions me font rencontrer la bonté et la fidélité. 
Mon travail m'assure un salaire et la richesse est ma récompense. 
Par mon témoignage digne de foi, des vies sont sauvées. 
Je vis en toute sécurité, parce que je reconnais l'autorité du Seigneur. 
Par intelligence, je reste calme et pour ma santé, je cultive la paix. <br/>
Je porte secours aux indigents pour honorer  celui qui les a faits; je pratique la justice. 
Je suis apprécié pour ma compétence.

# A l'école du Seigneur 🗝

> {{ msg }}

Je donne des réponses toujours aimables et mes paroles sont réconfortantes. 
Je suis avisé c'est pourquoi j'accepte la réprimande et cela me fait vivre dans l'abondance. 
Mes paroles diffusent le savoir. 

L'Éternel reçoit favorablement mes prières, Il connaît mes pensées et Il m'aime parce que je pratique la justice. 
Je consulte les sages. 
Mon visage s'égaie à cause de la joie dans mon cœur ce bonheur me fait vivre dans une fête continuelle. 
J'ai l'ardent désir de m'instruire. 

Avec ce que je possède je vis soumis au Seigneur, je mange des plats modestes, mais préparé avec amour. 
J'apaise les disputes par ma patience et ma route est bien dégagée. 
Je suis raisonnable et cela fait la joie de mes parents. 

Les nombreux conseils que je reçois, assurent la réussite de mes projets. 
Je trouve agréable de savoir bien  répondre et trouver les mots justes au bon moment. 
Je suis la route qui monte vers la vie et le Seigneur protège mon terrain. 
Mes paroles sont inspirées par la bonté. 

Je jouirais d'une longue vie, parce que je ne me laisse pas acheter. 
Je réfléchis avant de répondre. 
Je sais que l'Eternel écoute ma prière. 

Le regard bienveillant me donne de la joie et les bonnes nouvelles me revigorent. 
Je suis attentif à la critique salutaire, j'ai donc ma place parmi les sages; leurs réprimandes me font acquérir du caractère.

Je reconnais l'autorité du Seigneur: je suis à son école. 
Je m'humilie avant d'accéder aux honneurs.

# Le Seigneur au quotidien 🥇

> {{ msg }}

Je forme des projets mais je laisse au Seigneur le dernier mot. 
Il examine le fond de mon cœur. 
J'expose mon activité au Seigneur et mes projets se réalisent. 

Par la bonté et la fidélité je répare mes torts: je respecte le Seigneur. 
Il approuve ma conduite et pousse mes ennemis à se réconcilier avec moi. 

Je préfère un maigre salaire gagné honnêtement que de gros revenus tirés d'affaire louches. 
J'élabore des plans, le Seigneur en dirige la réalisation. 

Je parle avec une autorité divine, pour ne pas me tromper dans mes jugements. 
Je laisse le Seigneur fixer la valeur des poids, pour avoir une balance juste. 
La pratique de la justice maintien mon autorité. 

J'aime qu'on me parle honnêtement et qu'on me dise la vérité. 
En toute sagesse, je fais tout pour apaiser la colère. 
Par le sourire sur mon visage je proclame la vie, ma bonté est comme une pluie rafraîchissante.

Je préfère acquérir la sagesse que de l'or, l'intelligence que de l'argent. 
Je me détourne  du mal car surveiller ma conduite, c'est veiller sur ma vie. 

Je préfère vivre modestement avec des pauvres que partager un riche butin avec des orgueilleux. 
Je connais le bonheur, parce que je fais confiance au Seigneur. 

Mon esprit sage me rend intelligent. 
Mes paroles sont aimables c'est pourquoi elles sont convaincantes. 

Le bon sens me procure la vie. 
Je réfléchis avant de parler, ce qui rend mes paroles encore plus convaincantes. 

Mes paroles aimables sont pareilles au miel qui est agréable au goût et bon pour la santé. 
Mes cheveux blancs sont une parure qui me couronne pour avoir suivi les traces de la justice. 

Je suis un héros pour avoir vaincu ma colère. 
Je préfère être maître de mon moi que de dominer les autres. 
C'est le Seigneur qui détermine mon avenir.

# Qui suis-je ? ⚖

> {{ msg }}

Je préfère manger en paix un croûton sec, que de participer à un banquet dans une maison où l'on se dispute. 
Je suis un serviteur compétent, c'est pourquoi je suis traité comme un fils. 
C'est le Seigneur qui éprouve ma valeur. 

Je ne prête pas l'oreille aux paroles malveillantes et je n'écoute pas les mauvaises langues. 
Je ne me moque pas des pauvres et je refuse de rire du malheur d'autrui. 
Je suis fier de mes enfants et petits-enfants et je sais qu'ils sont aussi fiers de moi. 
J'ai un langage distingué sans aucun mensonge. 
J’oublie les torts pour favoriser l'amitié. 

Les reproches ont plus d'influences sur moi que cent coups de bâton. 
Je ne veux pas nuire aux autres et j'évite de croiser le chemin des sots. 
Je ne rends pas le mal pour le bien. 
Je ne commence pas la dispute, je préfère m'arrêter avant que la querelle ne se déchaîne. 
Je ne vais pas déclarer innocent un coupable et condamner un innocent. 

A quoi peut servir l'argent dans ma main ? 
A me procurer la sagesse ! 

Je montre mon affection en toutes circonstances et je partage les difficultés des autres. 
Je ne veux pas me rendre responsable de la dette d'autrui. 
Je n'aime pas la querelle et je refuse de faire l'important. 

Mon esprit n'est pas rusé, ni ma langue mauvaise. 
Celui qui m'a donné naissance n'a pas de chagrin, il est rempli de joie. 
Ma bonne humeur favorise ma guérison. 

Je n'accepterai pas les cadeaux offerts pour dévier le cours de la justice. 
Je ne perds jamais de vue ce qui est sage. 
Je ne donne aucun chagrin à mon père et aucun regret à celle qui m'a mise au monde. 

Je ne trouve mauvais d'infliger une amende à un innocent et injuste de punir quelqu'un de respectable. 
J'évite de trop parler et je prends le temps de réfléchir: je me tais.

# La grâce de Dieu 🔆

> {{ msg }}

Je refuse de m'irriter quand on me propose de l'aide et de m'isoler des autres. 
Ce qui m'intéresse, ce n'est pas de faire étalage de mon opinion, mais de comprendre. 
Je refuse la méchanceté et l'affront. 

Mes paroles peuvent être profondes comme l'océan, vivifiantes comme un torrent et source de sagesse. 
Je trouve que cela n'est pas bien de favoriser le coupable et de faire justice à l'innocent. 
Je m'abstiens des paroles pouvant entraîner des disputes et provoquer des bagarres; les paroles qui prennent au piège et causent les ruines. 
Je m'abstiens de toute calomnie. 

Je ne gâche ni ne néglige mon travail. 
Le Seigneur est ma forteresse, j'accours près de Lui et je suis en sécurité. 
Ma fortune me tient lieu de citadelle, dans mon coffre-fort elle me protège comme un rempart élevé. 
J'accéderai aux honneurs à cause de mon humilité.

Je ne réponds qu'après avoir écouté. 
Je ne laisserai pas ma volonté défaillir, car elle me soutient dans la maladie. 
Je réfléchis pour acquérir des connaissances, je cherche à entendre des paroles instructives. 
J'aime offrir des cadeaux, cela ouvre bien des portes et permet de rencontrer des gens haut placé. 

Je ne donnerai pas raison au premier à plaider une cause; j'attends le moment où son adversaire le contredira. 
Pour faire cesser les querelles et les débats : je jetterais les dés. 
Loin de moi la dispute et l'offense. 

J'assure ma nourriture par mes paroles: ce que je dis me permet de gagner ma vie. 
Je fais attention à ce que je dis, car mes paroles peuvent être source de vie ou de mort. 
<span v-if="sexeFm">J'ai trouvé un époux ! Quel bonheur, c'est une grâce, obtenue de l'Eternel.</span>
<span v-else="sexeFm">J'ai trouvé une femme ! Quel bonheur, c'est une grâce, obtenue de l'Eternel.</span> 

Je veux parler avec assurance et répondre avec douceur.
<span v-if="sexeFm">Je préfère avoir une seule amie véritable : elle est plus loyale qu'une sœur.</span>
<span v-else="sexeFm">Je préfère avoir un seul ami véritable : il est plus loyal qu'un frère.</span>

# Un don de l'Eternel 🎁

> {{ msg }}

Je préfère être pauvre et intègre, que de parler pour tromper. 
Je canalise mon enthousiasme et privilégie l'expérience sans me hâter. 
Je refuse de tourner ma colère contre l'Eternel pour mes erreurs de conduite. 
J'acquiers du sens parce que j'aime mon âme, je garde l'intelligence pour trouver le bonheur. 

Je suis lent à la colère et je me plais à oublier les offenses. 
<span v-if="sexeFm">J'ai hérité de mes pères une maison et des richesses, mais mon mariage est un don de l'Eternel. </span>
<span v-else="sexeFm">J'ai hérité de mes pères une maison et des richesses, mais ma femme est un don de l'Eternel. </span>
Je respecte les règles pour protéger ma vie. 

Lorsque je donne aux pauvres, je prête à Dieu. 
Je corrigerai mes enfants tant que je le pourrais, sans jamais m'emporter. 
A force d'écouter les conseils et de me laisser éduquer: je finirai par devenir sage. 
J'élaborerai des plans en me rappelant que seul la décision du Seigneur se réalisera. 

Ce qu'on attend de moi c'est la bonté. 
Je préfère être pauvre que menteur. 
Respecter le Seigneur me conduit à la vie, une vie dans l'abondance et à l'abri du malheur.

La critique est pour moi source de leçon. 
Je me tourne vers les leçons de l'expérience en écoutant les avertissements.

# La lampe de l'âme 🪔

> {{ msg }}

Par sagesse j'évite de m'enivrer de vin. 
Il est pour moi honorable de me retirer d'une dispute. 
Je sais puiser dans les pensées cachées des autres, comme dans des eaux profondes. 

Je mène une vie intègre, quel bonheur pour mes enfants après moi! 
L'Éternel m'a donné des yeux pour voir et des oreilles pour entendre. 

Je n'aime pas trop le sommeil, je préfère garder mes yeux ouverts pour manger à ma faim. 
Les paroles instructives sont pour moi un trésor bien plus précieux que l'or et les perles. 
Lorsque je fais des projets, je prends conseil, et je ne me lance pas dans une bataille sans une stratégie bien conçue. 

Celui qui parle à tort et à travers trahit aussi les secrets, j'évite donc les gens qui bavardent trop. 
Je ne dis pas : « Je me vengerai ! » 
Je préfère me confier en l'Eternel et je sais qu'Il me délivrera. 

C'est le Seigneur qui dirige mes pas, comment un humain pourrait-il comprendre mes voies ? 
Je trouve dangereux de faire des promesses à l'Eternel avant de réfléchir. 
Ma conscience est la lampe que le Seigneur m'a donnée: elle éclaire les profondeurs de mon être. 

# C'est le Seigneur qui donne la victoire 🏆

> {{ msg }}

Mon esprit est comme un ruisseau que la main du Seigneur dirige là où il veut. 
Je lui laisse le soin d'examiner le fond de mon cœur, même quand je pense agir avec droiture. 
Je préfère bien sûr avoir une conduite juste et équitable devant le Seigneur plutôt que de multiplier les sacrifices. 

Je m'applique à élaborer des plans, pour rendre profitable mes projets, tout en gardant ma conduite droite. 
<span v-if="sexeFm">Je préfère partager le coin d'un toit ou un pays désert, que de vivre dans la querelle et l'irritation. </span>
<span v-else="sexeFm">Je préfère partager le coin d'un toit ou un pays désert, que de vivre dans  la maison d'une femme querelleuse et irritable. </span>
J'acquiers de l'expérience par l'enseignement que je reçois. Je ne ferai pas sourde oreille aux cris des indigents. 
Pour calmer la colère ou même la violente fureur de quelqu'un, je suis prêt à donner un cadeau ou un présent en toute discrétion. 

L'application du droit fait ma joie. 
On trouve de précieuse réserve et des trésors dans ma maison. 
Je suis traité avec justice et respect pour mon honnêteté et ma bonté. 
Je prends d'assaut la ville fortement défendue et j'abats les fortifications dans lesquelles elle mettait sa confiance.

Pour m'éviter des tourments, je surveille ce qui sort de ma bouche. 
Je donne sans rien retenir. Je sais écouter c'est pourquoi on m'accorde le droit de parler. 
Je veille sur ma conduite car devant l'Eternel, il n'y a ni sagesse, ni intelligence, ni conseil qui tienne. 
J'équiperai mon cheval pour le jour du combat, mais je sais que c'est le Seigneur qui donne la victoire.

# Quelques limites 🚧

> {{ msg }}

Je considère qu'avoir une bonne réputation est mieux que de grandes richesses: l'estime des autres m'est préférable à l'or et l'argent. Je n'oublierai pas ce qu'il y a de commun entre le riche et le pauvre : c'est l'Eternel qui les a faits. 
Quand je vois venir le malheur, je me mets à l’abri. 
Je serais récompensé de richesse, d'honneur et d'une longue vie, pour mon humilité et ma soumission au Seigneur. 

Je tiens à ma vie s'est pourquoi je me tiens éloigné des hommes corrompus. 
Je donnerai de bonnes habitudes à mes enfants dès leur plus jeune âge :  ils les conserveront jusque dans la vieillesse. 
Je regarde les autres avec bonté et je partage mon pain avec ceux qui en manquent: c'est une bénédiction. 

Afin de faire cesser les querelles et les insultes, je m'éloignerai du moqueur. 
J'ai des intentions pures et mes paroles sont aimables, c'est ainsi que j'ai gagné l'amitié du roi. 
Je crois que l'Eternel veille sur la connaissance, c'est pourquoi il démasque les propos des gens de mauvaise foi. 
Je comprends que la correction est utile pour guérir l'enfant, de la tendance à aimer ce qui est déraisonnable.

Je prête l'oreille et écoute les paroles des sages ; j'ouvre mon esprit à l'expérience qui m'est transmise. 
Je suis heureux de les garder en mémoire et d'être toujours prêt à les citer. 
Je désire placer ma confiance dans le Seigneur, c'est pourquoi je veux les connaître dès aujourd'hui. 
J'ai reçu pour moi une trentaine de conseils et de réflexions. 
Je veux des informations réellement dignes de confiance. 
Si quelqu'un m'envoie chercher la vérité, je pourrai ainsi lui communiquer des informations sûres.

Je ne profite pas de la faiblesse d'un indigent pour le dépouiller et je n'accable pas au tribunal quelqu'un qui est sans défense. 
Je ne me lie pas à quelqu'un d'irritable et je fuis la compagnie de celui qui est violent. 
Je ne me porte pas garant d'un emprunt ou d'une dette, si  je n'ai pas de quoi payer. 
Je refuse de déplacer la limite ancienne, posée par mes pères. 
Je suis habile dans mon travail, c'est pourquoi j'offre mes services aux rois.

# Seigneur je te fais confiance 🎯

> {{ msg }}

Quand je suis à table avec un personnage important, je fais attention à ce qui est devant moi; en réfrénant mon appétit, sans convoiter les bons plats. 
Je ne me fatigue pas à courir après la richesse: je cesse même d'y penser. 
Je ne convoiterai, ni ne partagerai le repas d'un homme mal intentionné. 

Je ne parlerai pas aux oreilles de l'homme stupide: il ne reconnaîtra pas la valeur de mes paroles. 
Je respecterai la limite ancienne et le terrain des orphelins. 
J'ouvre mon cœur à l'instruction et mes oreilles aux paroles de la connaissance. 
Je n'hésiterai pas à punir mon enfant, pour le préserver du séjour des morts.

Je suis dans la joie quand mon cœur acquiert de la sage et quand je parle avec droiture. 
Je n'envie pas les pécheurs, mais je suis constamment soumis au Seigneur. 
C'est alors que j'ai un avenir et mon espérance ne sera pas déçue. 

Je dirige mon cœur dans le droit chemin. 
Je ne fréquente pas les ivrognes et les gourmands. 

J'écouterai mon père car je lui dois ma vie; je ne mépriserai pas ma mère lorsqu'elle aura vieilli. 
J'apprends à être véridique, sage, discipliné et intelligent; ce sont pour moi des qualités importantes. 
Je donnerai à mon père et ma mère le bonheur et la joie d'avoir donné la vie à un enfant sage et intelligent. 
Seigneur je te fais confiance et je prends plaisir à suivre ton exemple.

# Respecter le Seigneur {{userSexe?'🙇‍♀️':'🙇‍♂️'}}

> {{ msg }}

Je n'envie pas ceux qui font le mal, d'ailleurs je ne recherche pas leurs compagnies. 
J'ai besoin de sagesse pour construire ma maison, de l'intelligence pour la rendre habitable et du savoir-faire pour remplir les pièces de toutes sortes d'objets agréables et précieux. 

La sagesse constitue ma force et l'expérience augmente mon pouvoir. 
En effet, c'est par une bonne stratégie que je gagnerai la bataille, c'est pourquoi je m'entoure d'un grand nombre  de conseillers. 
Je m'efforcerai de sauver ceux qui sont condamnés injustement. 

Je mange du miel, car il fait du bien et son goût est agréable. 
Et je me rappelle que la sagesse aussi est bonne pour la vie. 
Si j'arrive à la pratiquer, j'aurai un avenir et de l'espérance. 

Je ne m'approprierai jamais par la ruse les biens d'autrui; car je sais que même si je tombe sept fois, je me relèverai. 
Je ne pourrais donc pas me réjouir de la chute de mon prochain, ni même de mon ennemi. 
Ceux qui font le mal n'ont pas d'avenir c'est pourquoi je ne peux pas les envier. 

Je respecte le Seigneur et le roi. 
Je ne m'associe pas à ceux qui veulent tout changer, qui sait quel malheur l'Eternel et le roi peuvent leur causer ?

Je pense qu'il n'est pas bien de juger avec parti pris; mais une réponse donnée avec franchise est une vraie preuve d'amitié. 
Je n'envisage de bâtir une maison qu'après avoir terminé mes travaux aux dehors et préparé mes champs pour la récolte. 
J'estime qu'il ne faut pas accuser un voisin sans motif, même pour se venger.

# Attentif et patient ⛄

> {{ msg }}

J'honore Dieu parce qu'Il tient les choses cachées. 
J'honore les rois parce qu'ils examinent le fond des choses. 
Je ne connais pas jusqu'où s'élève le ciel, ni jusqu'où va la profondeur de la terre. 
Je ne connais pas davantage les pensées des rois. 
Je ne me mettrai pas en avant devant le roi, je préfère qu'il le fasse de sa bouche. 
Ce que j'ai vu, je ne me presserai pas de le raconter sans aucune preuve. 

Quand j'ai un différend avec mon prochain, je le règle avec lui, sans révéler les confidences d'un autre. 
Je sais qu'une parole juste dite au bon moment est précieuse. 
Je reçois d'une oreille attentive les avertissements donnés par une personne sage. 
Je porte du réconfort à mon Maître à cause de ma fidélité. 

Avec beaucoup de patience je persuade le dirigeant, tout comme avec des paroles douces je viens à bout des résistances les plus solides. 
Quand je trouve du miel, je n'en mange pas trop, pour ne pas être dégoûté au point de le vomir. 
Je ne rends pas trop visite à mon ami, de peur qu'il ne se lasse de moi. 
Je donnerai à manger et à boire à mes ennemis. 
<span v-if="sexeFm">Je préfère vivre au coin d'un toit que dans une maison pleine de querelles. </span>
<span v-else="sexeFm">JJe préfère vivre au coin d'un toit que de partager la maison d'une femme querelleuse.</span>

# Prendre du recul 🍃

> {{ msg }}

Comme le moineau et l'hirondelle qui volettent sans se poser, une malédiction injustifiée ne peut pas m'atteindre. 
Je ne réponds pas au sot en l'imitant, pour ne pas devenir comme lui; 
Mais je lui réponds comme il le mérite pour qu'il ne s'imagine pas être sage. 
Je préfère éviter de me mêler d'une dispute qui ne me concerne pas.

# Ce qui nous entoure 🏞

> {{ msg }}

Comment me vanterai-je de ce que je ferai demain ? 
Je ne sais même pas ce qui arrivera aujourd'hui. 
Je ne me permets pas de chanter mes louanges, je laisse ce soin aux autres. 

Je préfère reprendre ouvertement, que de me taire par amitié. 
Je n'abandonne pas mes amis, ni ceux de mon père; dans la difficulté : un voisin près de moi vaut mieux qu'un parent qui se trouve loin. Mon cœur est rempli de joie devant une conduite sage. 
Par prudence, quand je vois venir un malheur je me mets à l'abri. 

Je m'affine au contact de mon prochain, tout comme le fer aiguise le fer. 
Je soigne le figuier et prends soin de mon maître, j'en tirerai du fruit et des honneurs. 
Je trouve chez les autres le reflet de mes propres sentiments. 
Je suis attentif à mon travail, ainsi qu'à l'état de chacun de mes projets.

# Une source stable ⚓

> {{ msg }}

J'ai autant d'assurance qu'un jeune lion. 
La stabilité règne autour de moi, à cause de mon intelligence et de mon instruction.
J'observe la loi, c'est pourquoi je ne peux pas féliciter un méchant. 
Je comprends très bien tout ce qui est juste parce que je cherche à obéir au Seigneur. 

J'ai préféré la pauvreté à la richesse, tant que cela me garde dans l'intégrité.
J'obéis à la loi, en effet le bonheur est réservé aux hommes intègres. 
Mon triomphe est une grande joie pour tous. 

Je ne cacherai pas mes transgressions, Mais je les avouerai et je les délaisserai afin d'obtenir miséricorde. 
Je trouve mon salut dans la voie de l'intégrité. 
J'ai beaucoup de pain parce que je cultive mon champ. 
Je serai comblé de bonheur pour ma fidélité. 

Je me confie dans le Seigneur c'est pourquoi je connaîtrai la prospérité. 
Je ne me fie pas aux impulsions de mon cœur, je me conduis avec sagesse pour échapper au danger. 
Je ne manquerai jamais de rien, je suis généreux. 

# Source de joie 🎊

> {{ msg }}

J'aime la sagesse, c'est ce qui donne de la joie à mon père. 
Je déborde de joie. 
Je sais reconnaître le droit des pauvres et apaiser la colère autour de moi. 
Je recherche la compagnie des gens intègres. 

Je retiens et calme ma mauvaise humeur. 
Je sais qu'il faut traiter même les plus petits avec équité. 
Je suis attentif aux punitions et aux réprimandes car ils sont source de sagesse. 
Je corrigerai mes enfants, afin de ne point avoir d'inquiétude à leur sujet : ils feront les délices de mon cœur.

Je suis heureux parce que j'obéis à la loi de Dieu. 
J'ai compris que pour accéder aux honneurs, il faut avoir l'esprit humble. 
Je sais qu'il est dangereux d'avoir peur des autres, mais je me confie au Seigneur, c'est ma sécurité. 
Je suis contre la malhonnêteté.

# Rien à y ajouter 🧫

> {{ msg }}

Je reconnais que toutes les promesses de Dieu sont dignes de confiance. 
Il est mon bouclier, celui qui me défend. 
Je n'ajoute rien à ses paroles. 

Je demande deux choses, et je sais qu'Il ne me les refusera pas avant que je meure : me garder de dire des paroles fausses ou mensongères, me donner ni pauvreté ni richesse ; mais m'accorder ce qui m'est nécessaire pour vivre, car dans l'abondance, je pourrais le renier et dire : « Qui est l'Eternel ? » Ou bien, pressé par la misère, je pourrais me mettre à voler et déshonorer ainsi mon Dieu.

# Conseil à {{userSexe?'une reine':'un roi'}} {{userSexe?'👸':'🤴'}}

> {{ msg }}

Quand j'écoute les conseils que Lemouel, roi de Massa, a reçus de sa mère, voici ce que j'en tire comme leçons :

<span v-if="sexeFm">
Je ne gâcherais pas les forces d'un homme, pour le perdre. 
Cela ne me convient pas de boire du vin et d'aimer les boissons enivrantes, car après avoir bu je pourrai oublier le droit. 
Je suis une femme vaillante : quelle joie pour celui qui m'a épousé ! 
J'ai plus de valeur que les perles précieuses. 
Notre maison ne manque de rien; je ne lui cause jamais de tort, mais je lui donne du bonheur tous les jours de sa vie. 
Comment ?</br>
Eh bien je me procure le nécessaire pour travailler de ma main avec ardeur. 
Comme un navire marchands, je ramène de loin notre nourriture. 
Je me lève avant le jour, pour préparer le repas et organiser les tâches du quotidien. 
Je prends le temps de bien réfléchir avant de dépenser l'argent que je gagne. 
Je travaille avec plein d'énergie et ne laisse jamais mes bras inactifs. 
Je travaille même la nuit et on pourra constater que mes affaires marchent bien. 
Je tends la main aux malheureux et je suis généreuse envers les pauvres. 
Je ne crains pas le froid, peu importe la neige, car J'ai revêtu toute ma famille d'un double vêtement. 
Je me fabrique des tapis et porte des habits raffinés. 
Je tisse des habits que je vends et livre des ceintures aux marchands. 
Ma force et ma dignité sont ma parure; J'envisage l'avenir avec le sourire. 
Je m'exprime avec sagesse et je sais donner des conseils avec bonté. 
Je veille à la bonne marche de la maison et je ne nourris aucune paresse.
Je suis honoré par mon mari, qui siège au conseil de la ville. 
Nos enfants viennent me féliciter et mon mari aussi me fait son éloge : "<i>bien des filles montrent leur valeur, mai toi - dit-il - tu les surpasses toutes."</i> 
Au-delà de mon charme et de ma beauté, c'est parce que je suis soumise au Seigneur, que je suis digne de louanges.
</span>
<span v-else="sexeFm">
Je ne gâcherais pas mes forces avec les femmes, celles qui perdent les rois. 
Il ne me convient pas de boire du vin et d'aimer les boissons enivrantes, car après avoir bu je pourrai oublier le droit. 
Ma Femme est vaillante : quelle joie de l'avoir trouvé ! 
Elle a plus de valeur que les perles précieuses. 
J'ai confiance en elle et notre maison ne manque de rien. 
Elle ne me cause jamais de tort, mais elle me donne du bonheur tous les jours de ma vie. 
Que fait-elle ?</br>
Elle se procure le nécessaire pour travailler de sa main avec ardeur. 
Comme un navire marchands, elle amène de loin notre nourriture. 
Elle se lève avant le jour, prépare le repas et organise les tâches du quotidien. 
Elle prend le temps de bien réfléchir avant de dépenser l'argent qu'elle gagne. 
Elle travaille avec plein d'énergie et ne laisse jamais ses bras inactifs. 
Elle travaille même la nuit et on peut constater que c'est affaire marche bien. 
Elle tend la main aux malheureux et est généreuse envers les pauvres. 
Elle ne craint pas le froid, peu importe la neige, car elle a revêtu toute la famille d'un double vêtement. 
Elle se fabrique des tapis et porte des habits raffinés. 
Elle tisse des habits qu'elle vend et livre des ceintures aux marchands. 
Sa force et sa dignité sont sa parure; elle envisage l'avenir avec le sourire. 
Elle s'exprime avec sagesse et sait donner des conseils avec bonté. 
Elle veille à la bonne marche de la maison et ne nourrit aucune paresse.
Je suis honoré d'être son mari, moi qui siège au conseil de la ville. 
Nos enfants viennent la féliciter et moi aussi je fais son éloge : "<i>bien des filles montrent leur valeur, mai elle, elle les surpasse toutes."</i> 
Au-delà de son charme et de sa beauté, c'est parce qu’elle est soumise au Seigneur, qu'elle est digne de louanges.
</span>

***

[RETOURNER A L'ACCUEIL]()

</div>
