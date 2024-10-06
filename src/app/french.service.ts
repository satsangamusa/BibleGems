import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FrenchService {

  constructor() {
  }
  public getYoutubeUrl(url: any) {
    return '//www.youtube.com/embed/' + url;
  }
  pages: Array<{ title: string, component: any }>=[];
  fontSize: number = 15;
  startPage: number = 0;
  endPage: number = 0;
  currentPage: number = 0;
  fontColor: any;
  bgColor: any;
  navigationFrom: any = null;
  mainItem = 0;
  routes!:Routes;
  selectedItem = 0;
  subItem = 0;
  language:string='en';
  networkStatus: any = "OFFLINE";
  bible: any = [

{
chapterName: "Le chemin de Dieu",
chapterNumber: 0,
pageNumber: 0,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
    Il y a eu une certaine histoire avant l&rsquo;arriv&eacute;e de J&eacute;sus sur Terre. Il y a aussi une histoire apr&egrave;s sa mort. L'histoire enregistr&eacute;e avant sa naissance est connue sous le nom de <strong>Ancien Testament</strong>, tandis que l'histoire document&eacute;e apr&egrave;s son arriv&eacute;e est appel&eacute;e la <strong>le Nouveau Testament</strong>. L'Ancien Testament couvrant la p&eacute;riode pr&eacute;c&eacute;dant sa naissance, sa vie dans le Nouveau Testament et la propagation de la communaut&eacute; chr&eacute;tienne apr&egrave;s sa mort rev&ecirc;t une grande importance pour la communaut&eacute; chr&eacute;tienne. La compilation de l'Ancien et du Nouveau Testament est connue sous le nom de <strong>Sainte Bible</strong>. Bien que la Bible chr&eacute;tienne et la Bhagavad-Gita hindoue visent toutes deux &agrave; &eacute;lever et &agrave; guider les humains vers Dieu, elles ont leurs diff&eacute;rences. La Bhagavad-Gita se compose uniquement des enseignements de Krishna, tandis que la Sainte Bible englobe des r&eacute;cits historiques avant et apr&egrave;s J&eacute;sus. Les enseignements chr&eacute;tiens sont tir&eacute;s de l&rsquo;Ancien Testament avant la naissance du Christ et de la propagation par ses fid&egrave;les dans le Nouveau Testament apr&egrave;s sa mort. Bien qu&rsquo;il n&rsquo;y ait rien de mal en soi &agrave; cela, apr&egrave;s une r&eacute;flexion plus approfondie, il devient &eacute;vident que seule une partie de la Bible est essentielle pour guider les gens sur le chemin qui m&egrave;ne &agrave; Dieu. Tout comme dans une pi&egrave;ce de th&eacute;&acirc;tre, nous avons tendance &agrave; privil&eacute;gier certains personnages, et dans un drame comportant plusieurs &eacute;pisodes, nous pouvons pr&eacute;f&eacute;rer l'un aux autres, dans le cas de la Bible, c'est la partie du Nouveau Testament qui se concentre sur J&eacute;sus-Christ - de son de son arriv&eacute;e sur Terre &agrave; son d&eacute;part &ndash; cela rev&ecirc;t la plus haute importance sacr&eacute;e et la plus grande importance pour parvenir &agrave; la lib&eacute;ration (moksham). Il est crucial de comprendre que l&rsquo;essence m&ecirc;me de la Bible r&eacute;side dans l&rsquo;histoire de J&eacute;sus. Les paroles de J&eacute;sus sont comme un sac de diamants dans la Bible, et tout ce que l&rsquo;humanit&eacute; a besoin de comprendre se trouve dans le <strong>&Eacute;vangiles de Matthieu, Marc, Luc et Jean</strong>. La proximit&eacute; divine recherch&eacute;e par l&rsquo;humanit&eacute; peut &ecirc;tre d&eacute;couverte dans ces quatre &Eacute;vangiles. La plus haute sagesse contenue dans ces &Eacute;vangiles se trouve dans l&rsquo;&Eacute;vangile de Jean, d&eacute;passant l&rsquo;intelligence humaine. Bien que la Bible compte 1 029 pages, l&rsquo;histoire de J&eacute;sus n&rsquo;occupe que 102 pages dans le Nouveau Testament. Si la Bible &eacute;tait divis&eacute;e en dix parties, une partie &eacute;clipserait les neuf autres, et ceux qui appr&eacute;cient la valeur de J&eacute;sus reconnaissent la profonde sagesse contenue dans cette seule partie.

    Nous sommes ici pour &eacute;lucider certaines paroles de J&eacute;sus tir&eacute;es des &Eacute;vangiles de Matthieu, Marc, Luc et Jean, qui regorgent d&rsquo;une profonde sagesse. On pourrait se demander pourquoi nous r&eacute;it&eacute;rons ces paroles alors que de nombreux p&egrave;res, pasteurs et &eacute;v&ecirc;ques ont d&eacute;j&agrave; propos&eacute; leurs interpr&eacute;tations. Voici ma r&eacute;ponse : alors que les pr&eacute;dicateurs enseignent efficacement des versets de l&rsquo;Ancien Testament et du Nouveau Testament, il semble y avoir une lacune dans l&rsquo;explication des versets des quatre &Eacute;vangiles, qui englobent l&rsquo;histoire du Christ. Tout comme les hindous n&rsquo;ont peut-&ecirc;tre pas encore compl&egrave;tement perc&eacute; les secrets de la Bhagavad-Gita, il se peut que les quatre &eacute;vangiles contiennent de nombreuses v&eacute;rit&eacute;s cach&eacute;es que les chr&eacute;tiens n&rsquo;ont pas encore d&eacute;couvertes. Il ne s&rsquo;agit pas d&rsquo;une d&eacute;claration d&rsquo;envie envers les pr&eacute;dicateurs ; c&rsquo;est plut&ocirc;t une expression de la foi en Christ. Notre objectif est de partager la v&eacute;rit&eacute; et de garantir que les gens puissent acqu&eacute;rir une compr&eacute;hension correcte de J&eacute;sus, en appr&eacute;ciant Son <strong>grandeur et puissance.</strong>

    Les hindous, en voyant mes livres contenant le nom du Christ, supposent souvent qu&rsquo;il s&rsquo;agit de litt&eacute;rature chr&eacute;tienne et refusent de les lire. &Agrave; l&rsquo;inverse, les chr&eacute;tiens peuvent se m&eacute;fier des livres &eacute;crits par un gourou hindou et pr&eacute;f&eacute;rer s&rsquo;en tenir aux textes chr&eacute;tiens. Les hindous d&eacute;testent mon travail, pensant qu'un auteur chr&eacute;tien ne peut pas &ecirc;tre un v&eacute;ritable hindou, tandis que certains chr&eacute;tiens peuvent mettre en garde contre mes livres, estimant qu'ils sont destin&eacute;s &agrave; convertir les chr&eacute;tiens &agrave; la religion. l'hindouisme et doit &ecirc;tre &eacute;vit&eacute;. Les hindous nous accusent de convertir leur peuple au christianisme, et les chr&eacute;tiens nous accusent de le transformer en hindous. Il est cependant essentiel de clarifier notre intention. Nous ne cherchons pas &agrave; convertir qui que ce soit, mais plut&ocirc;t &agrave; encourager les gens &agrave; rechercher la sagesse du vrai Dieu. Chaque enfant de Dieu a le <strong>droite </strong>pour exprimer leurs croyances sur Dieu. Ainsi, nous partageons patiemment les enseignements de Dieu, ind&eacute;pendamment de ce que les autres pensent ou supposent.

    J'ai une question pour ceux qui pourraient avoir des doutes ou de la jalousie. <strong>Dieu est venu sur Terre en tant qu'homme et est parti, mais il a &eacute;galement promis de revenir. Quelqu&rsquo;un peut-il affirmer avec certitude que Dieu n&rsquo;appara&icirc;t qu&rsquo;une seule fois ? </strong>Une telle affirmation semble incompatible avec la vraie sagesse. Dieu a proclam&eacute; Son retour chaque fois que le besoin s&rsquo;en fait sentir sur Terre. Il vient dans les moments d&rsquo;adversit&eacute; o&ugrave; les principes du dharma sont menac&eacute;s. Cette d&eacute;claration est &eacute;vidente &agrave; la fois dans la Bhagavad-Gita et dans la Bible. Dieu peut prendre n'importe quelle forme et d&eacute;livrer ses enseignements. <strong>C&rsquo;est une erreur pour les hindous d&rsquo;anticiper le retour de Krishna en tant que Krishna ou pour les chr&eacute;tiens d&rsquo;attendre le retour de J&eacute;sus en tant que J&eacute;sus. </strong>Lorsque Dieu choisit de venir, il n&rsquo;y a aucune contrainte concernant le moment, le lieu ou la forme. Il peut se manifester sous des formes d&eacute;passant la reconnaissance humaine, mais son message reste inchang&eacute; au fil du temps. Le Dharma, en tant que principe divin, est intrins&egrave;quement coh&eacute;rent et immuable, semblable aux lois scientifiques. Par cons&eacute;quent, Dieu transmettra toujours le m&ecirc;me dharma, quels que soient son nom, sa forme ou la religion par laquelle il est n&eacute;.

    Dieu n&rsquo;a jamais &eacute;tabli de religion sp&eacute;cifique sur Terre lorsqu&rsquo;Il est apparu. Ses enseignements ne sont li&eacute;s &agrave; aucun cadre religieux particulier et il n&rsquo;a approuv&eacute; ni n&rsquo;appartenait &agrave; aucune religion. Au lieu de cela, il a transmis ses principes divins, ou dharmas, sans faire r&eacute;f&eacute;rence &agrave; une religion sp&eacute;cifique. La cr&eacute;ation de religions est une entreprise humaine. Lorsque Dieu observait des actes r&eacute;pr&eacute;hensibles parmi des personnes d'un groupe religieux, il leur signalait leurs erreurs, les guidait sur le chemin. <strong>Le bon chemin de Dieu</strong>, et a encourag&eacute; la pratique du dharma quelle que soit l'affiliation religieuse. Les dharmas eux-m&ecirc;mes n&rsquo;ont pas cr&eacute;&eacute; de religions. Les humains ont form&eacute; des religions bas&eacute;es sur leur compr&eacute;hension de la sagesse divine, la langue qu&rsquo;ils parlaient et leurs comportements.

    Chaque religion suit sa m&eacute;thodologie unique et v&eacute;n&egrave;re une divinit&eacute; sp&eacute;cifique. Il est de coutume pour les adeptes d&rsquo;une religion d&rsquo;observer les rituels associ&eacute;s &agrave; cette foi. Cependant, il est essentiel de comprendre que ces pratiques religieuses sont des cr&eacute;ations humaines. Lorsque Dieu prend forme humaine sur Terre, il n&rsquo;adh&egrave;re &agrave; aucun rituel ou coutume religieux sp&eacute;cifique. Il ne s&rsquo;engage pas non plus dans le culte d&rsquo;autres divinit&eacute;s. Les pratiques et rituels religieux sont destin&eacute;s aux humains et non &agrave; Dieu. Au lieu de cela, le r&ocirc;le de Dieu est de guider les gens sur la voie <strong>bon chemin</strong>, r&eacute;v&eacute;lant toute lacune dans leur d&eacute;vouement. Lorsque Dieu s&rsquo;incarne en tant qu&rsquo;humain, Son objectif est de transmettre des connaissances sur Dieu et ses dharmas, plut&ocirc;t que de participer au culte de la divinit&eacute;, comme le font les humains.

    Lorsque Dieu s&rsquo;est incarn&eacute; sous la forme de Krishna dans le Dvapara Yuga, il ne s&rsquo;est engag&eacute; dans le culte d&rsquo;aucune divinit&eacute;. Au lieu de cela, Il a pleinement r&eacute;v&eacute;l&eacute; la sagesse de Paramatma (l&rsquo;&Acirc;me Supr&ecirc;me) lorsque le moment &eacute;tait venu. De m&ecirc;me, lorsque Dieu s&rsquo;est incarn&eacute; en J&eacute;sus-Christ dans le Kali Yuga, il ne s&rsquo;est pas engag&eacute; dans le culte de la divinit&eacute; mais a pr&ecirc;ch&eacute; la sagesse qu&rsquo;il avait l&rsquo;intention de transmettre. Sa v&eacute;ritable grandeur et sa divinit&eacute; deviennent apparentes lorsqu'Il communique <strong>sagesse</strong>. &Agrave; d&rsquo;autres moments, Il peut appara&icirc;tre comme un individu ordinaire, comme tout le monde. Les ignorants peuvent le prendre pour une personne ordinaire, mais ceux qui ont de la sagesse peuvent le prendre pour une personne ordinaire. reconnaissez-le comme Dieu. Ceux qui poss&egrave;dent une sagesse compl&egrave;te peuvent l&rsquo;identifier chaque fois qu&rsquo;il descend sur Terre. Cependant, les individus sous l&rsquo;influence de Maya ne parviennent &agrave; le reconna&icirc;tre en aucune circonstance. De plus, les humains Le per&ccedil;oivent parfois comme un individu ordinaire, le soumettant &agrave; des insultes et provoquant divers troubles.

    Lorsque Dieu vient sur Terre sous forme humaine une fois tous les quelques milliers d&rsquo;ann&eacute;es, les humains couv&eacute;s par des serpents ne peuvent pas le reconna&icirc;tre. Non seulement ils ne le reconnaissent pas, mais ils le soumettent &eacute;galement &agrave; la torture. Certains peuvent se demander pourquoi Il est soumis au tourment alors que les humains ne torturent g&eacute;n&eacute;ralement pas leurs semblables. La r&eacute;ponse r&eacute;side dans le fait que lorsque Dieu s&rsquo;incarne en tant qu&rsquo;humain, il ne m&egrave;ne pas une vie ordinaire. Son objectif est de transmettre la sagesse divine en alignement avec le dharma. Par cons&eacute;quent, ceux qui sont ignorants et manquent de compr&eacute;hension du dharma d&eacute;veloppent une animosit&eacute; &agrave; son &eacute;gard, et cette haine peut conduire &agrave; sa pers&eacute;cution. En l&rsquo;absence d&rsquo;enseignements divins, de tels adversaires n&rsquo;existeraient pas. Cependant, lorsqu&rsquo;Il souligne les adharmas dans la conduite humaine, ceux qui adh&egrave;rent aux adharmas, tout en croyant suivre le dharma, se mettront en col&egrave;re. Tout au long de l&rsquo;histoire, les humains ont fait preuve d&rsquo;un manque de respect &agrave; son &eacute;gard &agrave; chaque incarnation en tant qu&rsquo;humain. Certains enviaient J&eacute;sus lorsqu&rsquo;il enseignait la sagesse divine. Ils n&rsquo;ont pas r&eacute;ussi &agrave; appr&eacute;cier sa grandeur et sa sagesse, le condamnant finalement &agrave; mort. Il est mort &agrave; cause des fid&egrave;les religieux qui se prenaient pour des gnanis. La couv&eacute;e de serpents a le poison de l'ignorance. Ainsi, la vie du Christ s&rsquo;est termin&eacute;e entre les mains du couvain du serpent.

    Dieu sait tout de Dieu, et les humains ne savent rien. Les humains ne peuvent saisir les dharmas (principes divins) de Dieu que lorsque Dieu les r&eacute;v&egrave;le. La r&eacute;v&eacute;lation divine est essentielle pour que les humains puissent mieux comprendre la nature et les enseignements de Dieu. Une partie de Dieu, pr&eacute;sente dans chaque atome de l'univers, s'incarne en tant qu'humain. Pour exister dans le monde pendant une certaine p&eacute;riode, un syst&egrave;me connu sous le nom de karma est impliqu&eacute;. La cause de la naissance humaine est attribu&eacute;e au karma, mais Dieu lui-m&ecirc;me est au-del&agrave; du karma. Par cons&eacute;quent, Dieu g&eacute;n&egrave;re le karma n&eacute;cessaire &agrave; sa propre naissance et s&rsquo;incarne avec ce karma. Un tel individu est appel&eacute; <strong>Swayambhu</strong>, signifiant &laquo; n&eacute; de soi &raquo;, non li&eacute; par le karma. Un tel &ecirc;tre est connu sous le nom de <strong>Bhagavane ou Consolateur (Adarana Karta)</strong>. On pense que Dieu s'est peut-&ecirc;tre manifest&eacute; sur Terre sous la forme de Bhagavan &agrave; plusieurs reprises dans le pass&eacute;, bien que le nombre pr&eacute;cis de fois o&ugrave; le dharma a &eacute;t&eacute; restaur&eacute; sur Terre reste inconnu. De nombreux myst&egrave;res se sont r&eacute;v&eacute;l&eacute;s au cours des derniers millions d&rsquo;ann&eacute;es, et l&rsquo;histoire enregistr&eacute;e ne s&rsquo;&eacute;tend que sur quelques milliers d&rsquo;ann&eacute;es. En cons&eacute;quence, notre connaissance des &eacute;v&eacute;nements pass&eacute;s est limit&eacute;e, mais les documents historiques indiquent des cas o&ugrave; Dieu s&rsquo;est incarn&eacute; sous forme humaine pour guider l&rsquo;humanit&eacute;.

    <strong>Il devient &eacute;vident que Dieu s&rsquo;incarne et meurt occasionnellement en tant qu&rsquo;&ecirc;tre humain sur Terre. </strong>Apr&egrave;s une r&eacute;flexion approfondie et avec la sagesse que nous poss&eacute;dons, il devient &eacute;vident que Dieu est n&eacute; il y a environ 5 000 ans en Inde et il y a environ 2 000 ans en Isra&euml;l. Cette incarnation divine &eacute;tait connue sous le nom de J&eacute;sus-Christ pendant son s&eacute;jour en Isra&euml;l. Il a &eacute;t&eacute; pr&eacute;sent parmi les humains sur Terre pendant une dur&eacute;e limit&eacute;e de 33 ans, guid&eacute; par son propre karma pr&eacute;d&eacute;termin&eacute;. Durant les 30 premi&egrave;res ann&eacute;es de sa vie, J&eacute;sus v&eacute;cut comme un Jeevatma ordinaire. C&rsquo;est au cours des trois ann&eacute;es suivantes qu&rsquo;Il a transmis la sagesse d&rsquo;Atma &agrave; l&rsquo;humanit&eacute; tout en vivant parfois comme Atma.

    Certaines personnes pourraient remettre en question mon affirmation selon laquelle &laquo; la divinit&eacute; est n&eacute;e en tant qu&rsquo;homme sur terre &raquo;. La divinit&eacute; (Dieu) se propage &agrave; chaque atome de l&rsquo;univers. &raquo; Dieu ne se propage-t-il pas dans tout l&rsquo;univers lorsqu&rsquo;Il est n&eacute; en tant qu&rsquo;homme ? Est-ce que Dieu, dont on dit qu'il est pr&eacute;sent en tous, n'est pas pr&eacute;sent en chacun de nous apr&egrave;s &ecirc;tre n&eacute; en tant que Bhagavan sur terre ? Explorons la r&eacute;ponse en utilisant une analogie. Consid&eacute;rez la mer, qui est pleine d'eau. Si nous prenons une partie de cette eau de la mer dans un petit r&eacute;cipient, le r&eacute;cipient contient d&eacute;sormais de l'eau de mer, mais la mer reste pleine d'eau. L'eau dans le r&eacute;cipient est appel&eacute;e &laquo; eau s&eacute;par&eacute;e &raquo;, tandis que l'eau de la mer est &laquo; eau non s&eacute;par&eacute;e &raquo;. La mer et le r&eacute;cipient partagent la m&ecirc;me eau, sans diff&eacute;rence dans les propri&eacute;t&eacute;s de l'eau, sauf que l'eau du r&eacute;cipient est s&eacute;par&eacute; de la mer. Dans le m&ecirc;me ordre d&rsquo;id&eacute;es, nous pouvons comparer Dieu &agrave; la mer. Bhagavan est comme l'eau s&eacute;par&eacute;e dans le r&eacute;cipient, distinct de Dieu comme la mer. Pourtant, l&rsquo;eau du conteneur et l&rsquo;eau de mer ne font qu&rsquo;un ; de m&ecirc;me, Bhagavan et Dieu sont identiques. Lorsque l&rsquo;eau est plac&eacute;e dans un r&eacute;cipient, elle n&rsquo;&eacute;puise pas la mer et la mer reste pleine. De m&ecirc;me, lorsqu'une partie de Dieu s'incarne en tant que Bhagavan, Dieu continue d'&ecirc;tre omnipr&eacute;sent comme avant. Il n&rsquo;y a aucune alt&eacute;ration en Dieu, dans Ses principes divins ou dans Son omnipr&eacute;sence lorsqu&rsquo;Il appara&icirc;t en tant que Bhagavan. Une partie de Dieu devient Bhagavan, mais pas le Dieu tout entier. M&ecirc;me si Bhagavan n'est qu'une partie de Dieu, Il poss&egrave;de les m&ecirc;mes propri&eacute;t&eacute;s. Il n&rsquo;y a donc rien de mal &agrave; dire que Dieu est n&eacute;, m&ecirc;me si seule une partie de Dieu est n&eacute;e sur terre. Il n&rsquo;y a donc rien de mal &agrave; dire que J&eacute;sus est &laquo; Dieu &raquo;.

    Certaines personnes peuvent poser une autre question : si J&eacute;sus est Dieu, pourquoi a-t-il endur&eacute; la souffrance alors que les gens lui faisaient du mal ? Pourquoi a-t-il &eacute;t&eacute; soumis &agrave; la torture humaine et &agrave; l&rsquo;humiliation ? Ils peuvent &eacute;galement se demander pourquoi J&eacute;sus ne leur a pas r&eacute;v&eacute;l&eacute; son identit&eacute; divine et n&rsquo;a pas utilis&eacute; son pouvoir divin pour punir ceux qui l&rsquo;ont maltrait&eacute;. Voici notre r&eacute;ponse : Pour comprendre cela, nous devons d&rsquo;abord saisir un secret divin. Dans le corps d'une personne ordinaire, il existe trois &acirc;mes : Jeevatma, Atma et Paramatma. Parmi ces trois &acirc;mes, Jeevatma et Atma r&eacute;sident toutes deux dans le corps. Ces deux &acirc;mes ne sont pas ext&eacute;rieures au corps. La troisi&egrave;me &acirc;me, Paramatma, s'&eacute;tend &agrave; l'int&eacute;rieur et au-del&agrave; du corps, impr&eacute;gnant chaque atome de l'univers. Cependant, Paramatma ne s&rsquo;engage pas activement dans des actions &agrave; l&rsquo;int&eacute;rieur ou &agrave; l&rsquo;ext&eacute;rieur du corps. La deuxi&egrave;me &acirc;me, Atma, est responsable de toutes les fonctions corporelles. La premi&egrave;re &acirc;me, Jeevatma, ne fait rien sauf &eacute;prouver du plaisir et du chagrin. De nombreux individus peuvent penser que c&rsquo;est eux (Jeevatma) qui accomplissent chaque action, mais ce n&rsquo;est pas le cas dans le corps humain. L'Atma, qui r&eacute;side en nous sans notre conscience, effectue tout le travail. M&ecirc;me Atma ne fait rien selon sa propre volont&eacute;. <strong>Atma </strong>fonctionne selon <strong>karma</strong>, qui est la cause sous-jacente de chaque t&acirc;che. Selon la loi du karma, Jeevatma est destin&eacute; &agrave; &eacute;prouver du plaisir et du chagrin. Pour que Jeevatma subisse ces exp&eacute;riences dans le corps, l'Atma, qui se propage dans tout le corps, facilite ces fonctions corporelles. Cela inclut des processus physiologiques tels que la digestion des aliments, la r&eacute;gulation du rythme cardiaque et la gestion des fonctions corporelles telles que la s&eacute;paration de l'urine et de la sueur du sang. Le r&ocirc;le d&rsquo;Atma dans l&rsquo;ex&eacute;cution de ces fonctions corporelles permet &agrave; Jeevatma de coexister dans le corps. &Agrave; l&rsquo;int&eacute;rieur du corps, la fonction premi&egrave;re de Jeevatma est d&rsquo;exp&eacute;rimenter. Il s&rsquo;agit d&rsquo;une loi inh&eacute;rente r&eacute;gissant tout corps humain, immuable et constante.

    M&ecirc;me si Dieu est n&eacute; humain, son corps fonctionne selon un syst&egrave;me semblable &agrave; celui d&rsquo;un &ecirc;tre humain ordinaire. Dans Son corps, Paramatma doit &ecirc;tre pr&eacute;sent, Atma effectue tout le travail et Jeevatma fait l'exp&eacute;rience. Ce m&ecirc;me processus se produit dans le corps de Dieu lorsqu&rsquo;Il prend forme humaine. Quand Dieu est venu sous la forme de J&eacute;sus, son corps n'&eacute;tait plus iff&eacute;rent d'un corps humain ordinaire. Par cons&eacute;quent, Il a exp&eacute;riment&eacute; la souffrance et les plaisirs comme n&rsquo;importe quel Jeevatma. J&eacute;sus a fait face &agrave; de nombreux d&eacute;fis dans la vie, qu'il a tous d&ucirc; relever en tant que Jeevatma. Pour subir ces exp&eacute;riences dans sa vie terrestre, il a cr&eacute;&eacute; son propre karma et s&rsquo;est incarn&eacute; en tant qu&rsquo;humain. Maintenant, vous pourriez vous demander ce qui le distingue de nous. Il y a en effet une diff&eacute;rence significative. Nous avons appris pr&eacute;c&eacute;demment que seul l'Atma op&egrave;re dans chaque corps humain. Dans le corps de Bhagavan, c'est &eacute;galement l'Atma qui remplit les fonctions. N&eacute;anmoins, il existe des cas uniques o&ugrave; quelque chose de diff&eacute;rent se produit dans le corps de Bhagavan. &Agrave; certaines occasions, les trois &acirc;mes s'&eacute;cartent de leurs r&ocirc;les conventionnels et fonctionnent diff&eacute;remment. Pendant de tels moments, Jeevatma entre dans un &eacute;tat o&ugrave; il n'y a aucune exp&eacute;rience, permettant &agrave; Atma d'assumer le r&ocirc;le de Jeevatma. Les paroles prononc&eacute;es depuis le corps de Bhagavan dans cet &eacute;tat, venant de l'Atma, sont de nature enti&egrave;rement spirituelle. Les profondes v&eacute;rit&eacute;s spirituelles et les dharmas de Dieu ne sont r&eacute;v&eacute;l&eacute;s que lorsque l&rsquo;Atma parle directement. En de rares occasions, Atma et Jeevatma se taisent et Paramatma prend le relais et parle. De tels &eacute;v&eacute;nements peuvent se produire une ou deux fois dans la vie de Bhagavan. Dans la vie de J&eacute;sus, Krishna et Ravana Brahma, il y a eu des cas o&ugrave; Paramatma a parl&eacute;. Lorsque Paramatma parle, Prakruti (la nature mat&eacute;rielle) suit ses paroles. De m&ecirc;me, lorsque Atma parle, la profonde sagesse est sous Son contr&ocirc;le. Dans la vie de ces incarnations divines, les &eacute;v&eacute;nements suivants se sont produits&nbsp;: <strong>1) Les paroles de Paramatma exer&ccedil;aient un commandement sur Prakruti. 2) Les paroles d&rsquo;Atma transmettaient la pure sagesse d&rsquo;Atma. 3) Jeevatma a &eacute;prouv&eacute; du plaisir et du chagrin. </strong>Paramatma a parl&eacute; lorsqu&rsquo;une temp&ecirc;te a &eacute;clat&eacute; dans la mer pendant la vie de J&eacute;sus et lorsqu&rsquo;il a ordonn&eacute; &agrave; la temp&ecirc;te de se calmer. Il est devenu &eacute;vident que Prakruti a suivi Ses paroles et s'est apais&eacute;e. En tant qu'Atma, Il a exprim&eacute; la pure sagesse. Il a &eacute;galement connu diverses joies et peines en tant que Jeevatma pendant le reste de sa vie. Des &eacute;v&eacute;nements similaires se sont produits dans la vie de Krishna, o&ugrave; Il a command&eacute; le Soleil et a tu&eacute; Saindhava. Il y eut aussi une occasion o&ugrave; Krishna r&eacute;v&eacute;la une forme universelle et d&eacute;clara : &laquo; Je suis Paramatma &raquo;. En tant qu&rsquo;Atma, Il a transmis une profonde sagesse sous la forme de la Bhagavad-Gita et a exp&eacute;riment&eacute; les plaisirs et les chagrins de la vie en tant que Jeevatma pour le temps restant. Cette interaction des trois &acirc;mes assumant des r&ocirc;les distincts se produit exclusivement dans le corps de Bhagavan. La divinit&eacute; ne prend forme humaine qu&rsquo;une fois tous les milliers, voire millions d&rsquo;ann&eacute;es. Lorsque Dieu na&icirc;t sur Terre, Il vit principalement comme un Jeevatma, semblable aux autres. Cependant, Il parle occasionnellement en tant qu'Atma quelques fois par an pendant de br&egrave;ves p&eacute;riodes en cas de besoin. Parler en tant que Paramatma arrive tr&egrave;s rarement, voire pas du tout. La n&eacute;cessit&eacute; de parler en tant qu'Atma surgit parce qu'Il est venu transmettre les dharmas. Cela repr&eacute;sente le syst&egrave;me de Dieu, distinct du syst&egrave;me de Maya.

    Il n&rsquo;y a pas de probl&egrave;me tant que Dieu se comporte comme un homme ordinaire. Maya, cependant, s'oppose lorsque Dieu conf&egrave;re la sagesse sous forme d'Atma. Maya est fondamentalement oppos&eacute;e &agrave; la sagesse de Dieu. Par cons&eacute;quent, Maya, souvent appel&eacute;e Satan, veille avec vigilance &agrave; emp&ecirc;cher les individus de changer d&rsquo;all&eacute;geance du c&ocirc;t&eacute; de Maya pour embrasser la sagesse de Dieu. De plus, Maya recherche activement ceux qui manifestent un int&eacute;r&ecirc;t et une compr&eacute;hension de la sagesse, essayant de les d&eacute;tourner de son c&ocirc;t&eacute;. C&rsquo;est pourquoi de nombreuses personnes n&rsquo;ont qu&rsquo;un int&eacute;r&ecirc;t limit&eacute; &agrave; adopter la v&eacute;ritable sagesse divine, en grande partie &agrave; cause de l&rsquo;influence de Maya. Par cons&eacute;quent, m&ecirc;me ceux qui poss&egrave;dent une certaine sagesse peuvent s&rsquo;&eacute;carter du chemin. Vous pourriez poser une question &agrave; ce stade : &laquo; Aujourd&rsquo;hui, de nombreux fid&egrave;les sont profond&eacute;ment engag&eacute;s dans leur foi. Ils recherchent la sagesse aupr&egrave;s de divers gourous spirituels et affichent une d&eacute;votion in&eacute;branlable envers les divinit&eacute;s. Presque tout le monde est d&eacute;vou&eacute; &agrave; Dieu, &agrave; l'exception d'un quelques ath&eacute;es. Est-il possible de changer les d&eacute;vots de Sai Baba et Ayyappa ? Outre les temples anciens du pays, de nombreux nouveaux temples sont en cours de construction en l'honneur de Shirdi Sai Baba et d'Ayyappa Swamy. Il semble que Maya n&rsquo;ait pas fait obstacle &agrave; leur d&eacute;votion. Comment pouvons-nous accepter votre point de vue ? Voici ma r&eacute;ponse.

    Maya s&rsquo;oppose directement au chemin de Dieu et &agrave; la sagesse supr&ecirc;me. Son opposition &agrave; la profonde sagesse de Dieu d&eacute;montre le grand pouvoir de Maya, appel&eacute;e <strong>&laquo; Maya Duratiaya &raquo; </strong>dans la Bhagavad-Gita. Dieu a dit dans la Bhagavad-Gita que <strong>il est impossible de conqu&eacute;rir Maya ; </strong>on sait donc que <strong>Maya trompe les humains d'une mani&egrave;re inimaginable. </strong>Ainsi, le fonctionnement de Maya reste largement insaisissable et myst&eacute;rieux, laissant les individus vuln&eacute;rables &agrave; ses tromperies. Maya fonctionne en cr&eacute;ant sa propre version de la sagesse. Comme Dieu s'incarne rarement sur Terre en tant que Bhagavan une fois tous les milliers d'ann&eacute;es, Maya produit de nombreuses imitations des Bhagavans pour confondre et d&eacute;tourner les gens de la reconnaissance du v&eacute;ritable Bhagavan. Il introduit de nombreux types de sagesse, ce qui rend difficile pour beaucoup de distinguer la vraie sagesse de la contrefa&ccedil;on. Alors qu'il y aura de nombreux Bhagavans associ&eacute;s &agrave; Maya sur terre, qui reconna&icirc;tra le vrai Bhagavan qui vient rarement sur terre ? Lorsqu'il y a des Bhagavans qui font preuve de nombreux exploits et miracles surnaturels (mahatyas), qui peut identifier le vrai Bhagavan qui ne d&eacute;montre qu'un ou deux mahatyas dans sa vie ? De cette fa&ccedil;on, il est devenu impossible de reconna&icirc;tre la sagesse de Dieu et de Bhagavan. Dieu a montr&eacute; Sa r&eacute;alit&eacute; sous une forme universelle, quelque chose que personne n&rsquo;a jamais vu et ne pourra jamais comprendre. Mais Maya a incit&eacute; certaines personnes &agrave; &eacute;crire que de nombreux devatas pr&eacute;sentaient une forme universelle, notamment Saibaba et Veerabrahmam, afin que les gens ne consid&egrave;rent pas la forme universelle de Krishna comme la plus &eacute;lev&eacute;e. Qui pense que la forme universelle montr&eacute;e par Krishna dans la Bhagavad-Gita est la plus grande de toutes ? Ainsi, les chr&eacute;tiens ne pouvaient pas reconna&icirc;tre J&eacute;sus-Christ comme Bhagavan ; de m&ecirc;me, les hindous ne pouvaient pas conna&icirc;tre Krishna sous le nom de Bhagavan. Les hindous ne pouvaient pas consid&eacute;rer Krishna comme le vrai Dieu. Alors que certains le consid&egrave;rent comme le dernier de tous les autres dieux, d&rsquo;autres ne parviennent pas &agrave; le reconna&icirc;tre, m&ecirc;me comme une divinit&eacute; mineure, en raison de leur perception de ses actions comme &eacute;tant malveillantes. Personne ne consid&egrave;re Krishna comme Dieu, comme Shirdi Sai Baba. De m&ecirc;me, dans la tradition chr&eacute;tienne, bien que consid&eacute;rant J&eacute;sus-Christ comme le Fils de Dieu, nombreux sont ceux qui n&rsquo;ont pas saisi l&rsquo;essence de ses enseignements. Sous l&rsquo;influence maya, les chr&eacute;tiens v&eacute;n&egrave;rent la croix, qui a jou&eacute; un r&ocirc;le d&eacute;terminant dans la crucifixion de J&eacute;sus, au lieu de J&eacute;sus lui-m&ecirc;me. Ils pensaient qu'ils seraient consid&eacute;r&eacute;s comme hindous s'ils adoraient <strong>J&eacute;sus</strong>' <strong>idole</strong>; c'est pourquoi ils prient la croix. Alors que J&eacute;sus disait : &laquo;<strong>Celui qui m'a vu a vu mon P&egrave;re</strong>&raquo;, n&rsquo;est-ce pas l&rsquo;&oelig;uvre de Maya qui a amen&eacute; les chr&eacute;tiens &agrave; respecter la croix, qui a caus&eacute; la mort de J&eacute;sus, au lieu de l&rsquo;idole de J&eacute;sus ? Maya &eacute;loigne strat&eacute;giquement les gens du chemin de Dieu, m&ecirc;me s&rsquo;ils croient qu&rsquo;ils sont fermement sur ce chemin. Cela contribue &agrave; saper la cr&eacute;dibilit&eacute; de ceux qui comprennent la sagesse de Dieu et disent la v&eacute;rit&eacute;, faisant para&icirc;tre leurs paroles inf&eacute;rieures ou ignor&eacute;es. De plus, Maya a contribu&eacute; &agrave; la formation de diverses religions et &agrave; l&rsquo;illusion selon laquelle des dieux distincts existent pour chaque religion. Bien qu&rsquo;il existe un pouvoir supr&ecirc;me r&eacute;gissant l&rsquo;univers, Maya a favoris&eacute; la croyance en plusieurs dieux correspondant &agrave; diff&eacute;rentes religions. L'influence des Mayas est profonde, conduisant &agrave; l'&eacute;mergence d'une multitude de dieux et de croyances religieuses. Au sein de la seule foi chr&eacute;tienne, certains fid&egrave;les adorent Marie tandis que d&rsquo;autres adorent le Christ. De m&ecirc;me, l&rsquo;hindouisme compte de nombreuses divinit&eacute;s. &Agrave; la lumi&egrave;re de cette diversit&eacute;, il est d&eacute;sormais essentiel de se lancer dans une qu&ecirc;te pour discerner le chef ultime de toutes les divinit&eacute;s et religions. Toutefois, cette t&acirc;che n&rsquo;est pas facile. <strong>En reconnaissant d&rsquo;abord Maya et son impact, nous pouvons ensuite chercher le chemin qui m&egrave;ne &agrave; Dieu. </strong>Par cons&eacute;quent, il est important de d&eacute;terminer si le chemin que vous empruntez actuellement m&egrave;ne &agrave; Dieu ou est influenc&eacute; par Maya.

    Il existe un pouvoir surnaturel infini, sans forme, sans nom et ind&eacute;fini. Appelons-le &laquo; Paramatma &raquo;. On sait tr&egrave;s peu de choses sur Paramatma, la source de toute existence. Paramatma doit se manifester et se r&eacute;v&eacute;ler personnellement car, bien qu'il impr&egrave;gne chaque atome, nous restons limit&eacute;s &agrave; la compr&eacute;hension uniquement des Pancha Bhutas (cinq &eacute;l&eacute;ments de base). Nos sens ne peuvent percevoir que ce qui est &agrave; leur port&eacute;e, et Paramatma est hors de port&eacute;e de nos sens. Nous ne pouvons le comprendre que lorsqu&rsquo;il prend forme humaine, se rendant visible et r&eacute;v&eacute;lant sa sagesse. Sinon, nous ne le connaissons pas. Par cons&eacute;quent, Paramatma doit s&rsquo;incarner en tant qu&rsquo;humain et transmettre sa sagesse. Il &eacute;merge pour r&eacute;v&eacute;ler ses dharmas, mais ces enseignements s'estompent avec le temps, n&eacute;cessitant son retour pour les r&eacute;tablir. Paramatma, le cr&eacute;ateur de l'univers, choisit souvent de se manifester en tant qu'humain, menant une existence semblable &agrave; celle d'une personne ordinaire et accomplissant son dessein. Identifier Paramatma sous une telle forme est une t&acirc;che difficile. Malgr&eacute; les nombreuses incarnations de Paramatma sur Terre, les humains ont encore aujourd&rsquo;hui du mal &agrave; reconna&icirc;tre sa pr&eacute;sence.

    Ceux qui ne reconnaissent pas Bhagavan quand Il est pr&eacute;sent commencent souvent &agrave; L'adorer avec une grande d&eacute;votion apr&egrave;s Son d&eacute;part. Ils ne l'adorent pas parce qu'il est Paramatma, mais plut&ocirc;t parce qu'ils croient qu'il poss&egrave;de une grande sagesse ou que leurs d&eacute;sirs seront exauc&eacute;s. Cependant, ils ne r&eacute;alisent toujours pas qu&rsquo;Il est Paramatma. Nous pouvons reconna&icirc;tre les incarnations de Paramatma &agrave; travers certains principes. De cette fa&ccedil;on, nous pouvons identifier que Paramatma est venu sous le nom de Krishna &agrave; la fin du Dvapara Yuga et plus tard sous le nom de J&eacute;sus dans le Kali Yuga. Paramatma est peut-&ecirc;tre &eacute;galement venu plus tard, mais nous ne le savons pas.

    Quel que soit le nombre de naissances de Paramatma, il n'y a aucune similitude d'une naissance &agrave; l'autre, sauf dans Ses dharmas. Bien que l&rsquo;essence de Paramatma reste la m&ecirc;me chez Krishna, n&eacute; dans le Dvapara Yuga, et chez J&eacute;sus, n&eacute; dans le Kali Yuga, leurs vies ext&eacute;rieures sont tr&egrave;s diff&eacute;rentes. Sri Krishna menait une vie riche et avait huit &eacute;pouses. Il a &eacute;galement enlev&eacute; sa premi&egrave;re femme avec son consentement et tu&eacute; ses ennemis. Apr&egrave;s avoir observ&eacute; tout cela, il devient difficile pour quiconque de Le reconna&icirc;tre comme Bhagavan, qui est impr&eacute;gn&eacute; d'une partie de Paramatma.

    Il n&rsquo;y a eu aucun mensonge ni tromperie dans la vie de J&eacute;sus, n&eacute; dans le Kali Yuga. J&eacute;sus &eacute;tait doux et tendait l&rsquo;autre joue s&rsquo;il &eacute;tait gifl&eacute; par un ennemi. Il n'avait aucun d&eacute;sir pour les femmes. Krishna et J&eacute;sus sont tr&egrave;s diff&eacute;rents dans les affaires du monde. M&ecirc;me les gourous des deux religions se trompent sur ces deux-l&agrave;. Les gourous hindous critiquent J&eacute;sus en demandant : &laquo; Pourquoi J&eacute;sus est-il mort entre les mains de gens ordinaires et pourquoi ne s'est-il pas sauv&eacute; ? Pourquoi a-t-il d&ucirc; mourir s&rsquo;il avait le pouvoir divin de ressusciter les morts ? Pourquoi a-t-il souffert lorsqu&rsquo;il a &eacute;t&eacute; clou&eacute; sur la croix ? De la m&ecirc;me mani&egrave;re, les pasteurs d&rsquo;&eacute;glise critiquent Krishna en arguant : &laquo; Comment peut-il devenir Dieu alors qu&rsquo;il a eu plusieurs femmes ? De cette fa&ccedil;on, ils se concentrent sur les aspects mondains de la vie de J&eacute;sus et de Krishna, mais personne ne se demande pourquoi de tels &eacute;v&eacute;nements se sont produits dans leur vie. Paramatma lui-m&ecirc;me a dit que personne ne pouvait le reconna&icirc;tre lorsqu'il est venu sur Terre. Son r&ocirc;le est de faire semblant pour que personne ne le reconnaisse. Sa mission est d'&ecirc;tre un voleur non identifi&eacute; parmi nous, volant notre ignorance.&nbsp;

    Plus t&ocirc;t, nous avons mentionn&eacute; que Dieu ne peut pas &ecirc;tre compris &agrave; travers les choses du monde. <strong>Dieu ne peut &ecirc;tre reconnu que par la sagesse de Dieu. </strong>M&ecirc;me ceux qui pr&eacute;tendent &ecirc;tre des gourous ne parviennent souvent pas &agrave; saisir ce principe et tentent de mesurer Dieu en utilisant les normes du monde. Par cons&eacute;quent, lorsque Dieu vient sur Terre, personne ne le reconna&icirc;t. Ceux qui accomplissent des miracles bas&eacute;s sur des choses du monde peuvent para&icirc;tre grands et divins, mais le vrai Dieu est souvent n&eacute;glig&eacute;. En effet, la pr&eacute;sence de Dieu ne peut &ecirc;tre identifi&eacute;e sur la base de facteurs externes et mat&eacute;riels. Au lieu de cela, l&rsquo;incarnation de Dieu peut &ecirc;tre reconnue sur la base du dharma. Le m&ecirc;me dharma se retrouve dans la Bhagavad-Gita et dans les enseignements de J&eacute;sus, qui nous permettent de les reconna&icirc;tre comme un seul. Cependant, il n'y a pas d'autres similitudes entre eux en ce qui concerne les questions ext&eacute;rieures et mondaines.

    Il n&rsquo;y a qu&rsquo;un seul Dieu pour le monde entier, qui s&rsquo;incarne sous la forme d&rsquo;un homme avec de nombreux noms et formes pour guider l&rsquo;humanit&eacute; vers lui. Malheureusement, de nombreux humains ne s&rsquo;en rendent pas compte et cr&eacute;ent des religions qui se disputent pour savoir quel Dieu est le plus grand. Ils ne comprennent pas que Dieu dans leur religion et Dieu dans les autres religions sont identiques. Les humains ont tendance &agrave; aimer leur religion plus que Dieu, ce qui constitue une grande ignorance. Il est essentiel de savoir qu&rsquo;il n&rsquo;y a qu&rsquo;un seul Dieu, m&ecirc;me si nous l&rsquo;appelons par des noms diff&eacute;rents. Paramatma d&eacute;cide de son r&ocirc;le en fonction du temps, de la nation et des personnes, et s'incarne en tant que Bhagavan pour enseigner ses dharmas. Ses naissances ne sont pas les m&ecirc;mes, mais Son objectif est toujours le m&ecirc;me : enseigner Ses dharmas. Lorsqu&rsquo;Il est venu sous la forme de J&eacute;sus ou de Krishna, les dharmas qu&rsquo;Il enseignait &eacute;taient les m&ecirc;mes. Dieu et Ses dharmas peuvent appara&icirc;tre diff&eacute;rents parce que lorsque Paramatma est n&eacute; sous les noms de Krishna et J&eacute;sus, leurs noms, pays de naissance et personnalit&eacute;s diff&eacute;raient.

    Prenons comme exemple le dharma &eacute;nonc&eacute; par Paramatma. Sri Krishna a dit dans la Gita : <strong>&laquo; Paritranaya Sadhunam vinasaya chaturskrutam &raquo;, </strong>ce qui veut dire<strong>, &laquo;Je prot&eacute;gerai les justes et d&eacute;truirai les m&eacute;chants.&raquo; </strong>Certains pr&eacute;dicateurs chr&eacute;tiens reprennent ces paroles et disent aux hindous : &laquo; Votre religion n&rsquo;offre aucune protection et votre Dieu ne tuera que les p&eacute;cheurs. &raquo; Cependant, dans notre religion, tous les p&eacute;cheurs sont prot&eacute;g&eacute;s, et J&eacute;sus est venu sur Terre pour sauver les p&eacute;cheurs. M&ecirc;me si votre Dieu peut d&eacute;truire les p&eacute;cheurs et les m&eacute;chants dans votre religion, mon Dieu (J&eacute;sus) vous prot&eacute;gera. C&rsquo;est pourquoi les chr&eacute;tiens pr&eacute;tendent que leur Dieu est le vrai Dieu. Les chr&eacute;tiens n&rsquo;ont pas compris le vrai sens de ce que le Seigneur J&eacute;sus a dit &agrave; cet &eacute;gard, et les hindous n&rsquo;ont pas compris le sens du sloka prononc&eacute; par Krishna dans la Gita. Ainsi, les paroles de Krishna et celles de J&eacute;sus leur semblent diff&eacute;rentes. Ils croyaient que Krishna et J&eacute;sus &eacute;taient diff&eacute;rents, mais ils ne savaient pas qu&rsquo;ils &eacute;taient identiques et que les mots qu&rsquo;ils pronon&ccedil;aient avaient la m&ecirc;me signification. Les mots &laquo; d&eacute;truire les p&eacute;cheurs et les m&eacute;chants &raquo; signifient qu&rsquo;ils utilisent l&rsquo;arme du <strong>'enseignement' </strong>pour &eacute;liminer le karma du p&eacute;ch&eacute; et du mal et les rendre purs. Lorsque les m&eacute;chants deviennent purs, ils ne sont pas pris dans les p&eacute;ch&eacute;s mais deviennent justes. Alors il n&rsquo;y aura plus de m&eacute;chants. Ainsi, les deux expressions &laquo; dire dans la Gita que Krishna &eacute;liminera les m&eacute;chants &raquo; et &laquo; dire dans la Bible que J&eacute;sus vous prot&eacute;gera des p&eacute;ch&eacute;s &raquo; signifient la m&ecirc;me chose.

    M&ecirc;me si J&eacute;sus et Krishna parlaient des langues diff&eacute;rentes, &eacute;taient des individus diff&eacute;rents et portaient des noms diff&eacute;rents, le but de leurs paroles &eacute;tait le m&ecirc;me. En raison de l&rsquo;incapacit&eacute; des gens &agrave; saisir pleinement le concept de Dieu et de leur tendance &agrave; interpr&eacute;ter ses paroles selon leurs pr&eacute;f&eacute;rences, ils ont divis&eacute; le Dieu qui proclamait le m&ecirc;me dharma. QuandLes hindous critiquent J&eacute;sus et les chr&eacute;tiens pr&eacute;tendent que Krishna n'est pas Dieu ou Paramatma, le roi et p&egrave;re de Paraloka, la t&ecirc;te de l'univers qui impr&egrave;gne le monde entier et r&eacute;side en nous, rit, sachant que ces gens sont aveugles malgr&eacute; leurs yeux. Krishna a dit dans la Gita : &laquo; Je viendrai quand il y aura une menace pour le dharma. &raquo; Cependant, les hindous ne le reconnaissent comme Dieu que s'il appara&icirc;t de la m&ecirc;me mani&egrave;re qu'auparavant : avec des plumes de paon, une fl&ucirc;te et le chakra. Si Dieu est n&eacute; sous une forme diff&eacute;rente, ils disent : &laquo; Vous n&rsquo;&ecirc;tes pas notre Dieu &raquo;. Dans la Bible, J&eacute;sus-Christ a dit qu'il reviendrait. Les chr&eacute;tiens ne reconna&icirc;tront J&eacute;sus-Christ que s&rsquo;il appara&icirc;t de la m&ecirc;me mani&egrave;re qu&rsquo;avant &ndash; avec des cicatrices d&rsquo;ongles sur ses mains et des marques de lance sur son c&ocirc;t&eacute;. Ils diront : &laquo; Vous n&rsquo;&ecirc;tes pas notre Seigneur &raquo; s&rsquo;Il se pr&eacute;sente sous une forme diff&eacute;rente. En raison des diff&eacute;rences dans leurs apparences et leurs comportements, les chr&eacute;tiens ne pouvaient pas reconna&icirc;tre que J&eacute;sus &eacute;tait Krishna, et de m&ecirc;me, les hindous ne pouvaient pas reconna&icirc;tre que Krishna &eacute;tait J&eacute;sus. C'est pourquoi Dieu a dit dans la Gita<strong>, "Les gens me d&eacute;shonorent, car ils ne me connaissent pas, moi et mon mahatya." </strong>Certains gourous hindous enseigneront la sagesse et fourniront des upadesa &agrave; Krishna s'il revient. De m&ecirc;me, si J&eacute;sus revient, comme mentionn&eacute; dans la Bible, les pr&eacute;dicateurs chr&eacute;tiens, qui ne le reconna&icirc;tront peut-&ecirc;tre pas, le baptiseront. Tant qu&rsquo;il y aura des gourous qui enseigneront la sagesse &agrave; Krishna s&rsquo;il change de forme et de nom, on peut dire qu&rsquo;il y a de l&rsquo;ignorance dans la religion hindoue. De m&ecirc;me, tant qu&rsquo;il y aura des chr&eacute;tiens qui expliqueront les versets bibliques &agrave; J&eacute;sus s&rsquo;il change de forme et appara&icirc;t devant eux, on peut dire qu&rsquo;ils ne sont pas pleinement conscients de Dieu.

    Il y a une bonne raison pour laquelle m&ecirc;me les grands gnanis n&rsquo;ont pas pu reconna&icirc;tre Dieu ou comprendre la sagesse de Dieu lorsque Dieu est venu sur Terre. Avant d&rsquo;en comprendre la raison, il faut se familiariser avec le visible <strong>cr&eacute;ation</strong>. Il y a un opposant important &agrave; Dieu, c&rsquo;est pourquoi Dieu n&rsquo;est pas enti&egrave;rement compris. Les chr&eacute;tiens l&rsquo;appellent &laquo; Satan &raquo;, les hindous l&rsquo;appellent &laquo; Maya &raquo; et les musulmans l&rsquo;appellent &laquo; Shaitan &raquo;. Pour comprendre le secret de quelque chose avec des noms comme <strong>Maya, Satan ou Shaitan</strong>, il faut d&rsquo;abord comprendre le secret de la cr&eacute;ation. Examinons les d&eacute;tails ci-dessous.
</div></div>
</span>`
},
{
chapterName: "Le secret de la création",
chapterNumber: 1,
pageNumber: 1,
verse: ``,
meaning: ``,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma (Dieu) n'&eacute;tait ni homme ni femme avant la cr&eacute;ation de l'univers. Paramatma voulait cr&eacute;er l'univers et a ainsi fait exister la Prakruti f&eacute;minine ou Maya (Satan). Il a d&eacute;termin&eacute; les caract&eacute;ristiques requises et toutes les m&eacute;thodes n&eacute;cessaires. Puisque Prakruti &eacute;tait une femme, Paramatma contrastait fortement avec elle, et cette caract&eacute;ristique est connue sous le nom de Purusha (m&acirc;le). Paramatma d&eacute;sirait que Prakruti soit enti&egrave;rement oppos&eacute;e &agrave; Lui, alors Il lui accorda une autorit&eacute; &eacute;gale parce qu'Il croyait que le jeu serait plus excitant lorsque les deux adversaires poss&eacute;daient la m&ecirc;me force. Prakruti (Satan) est contraire &agrave; Paramatma mais n'est pas un ennemi. Bien qu&rsquo;il soit naturel que Dieu (Paramatma) fasse face &agrave; l&rsquo;opposition de Satan (Prakruti), ils ne sont pas ennemis l&rsquo;un de l&rsquo;autre.

	Paramatma, qui a cr&eacute;&eacute; Prakruti, finira par l'absorber en Lui. Il est le p&egrave;re, le mari et le destructeur de Prakruti, ainsi que la force qui est en elle. Paramatma, qui est vaste, a cr&eacute;&eacute; Prakruti et est engag&eacute; dans un jeu appel&eacute; &laquo; Jagath &raquo;. Dans ce jeu, Paramatma se d&eacute;guise en Purusha (m&acirc;le) m&ecirc;me si en dehors du jeu, il n'est ni un homme ni une femme. Prakruti est divis&eacute; en cinq &eacute;l&eacute;ments &ndash; Ciel, Air, Feu, Eau et Terre &ndash; et s'appelle Prapancha. Apr&egrave;s avoir cr&eacute;&eacute; Prakruti, Paramatma a souhait&eacute; cr&eacute;er un Jagath compos&eacute; d'&ecirc;tres vivants qui font l'exp&eacute;rience de la naissance et de la mort. Il y est parvenu en cr&eacute;ant des &ecirc;tres vivants avec Atma et en construisant Jagath au sein du Prapancha. En t&eacute;lougou, <strong>'Ja' </strong>signifie la naissance, et <strong>'gati' </strong>signifie la mort. Par cons&eacute;quent, tous les &ecirc;tres vivants portent &agrave; juste titre le nom de &laquo;<strong>Jagath</strong>&raquo;, indiquant qu&rsquo;il s&rsquo;agit de la naissance et de la mort.

	Paramatma a cr&eacute;&eacute; Jagath, compos&eacute; d'&ecirc;tres vivants au sein de Prakruti. Alors que Prakruti (femelle) et Paramatma (Purusha) sont consid&eacute;r&eacute;s comme &eacute;gaux, Jagati est n&eacute; s&eacute;par&eacute;ment plus tard. Jusqu'&agrave; pr&eacute;sent, Paramatma a cr&eacute;&eacute; Prakruti (Prapancha) et Jagath, r&eacute;sultant en trois composants, dont Paramatma. Initialement, Paramatma, qui n'&eacute;tait ni un homme ni une femme, cr&eacute;a Prakruti. Ensuite, Paramatma s'est transform&eacute; en Purusha (Atma), a pris Prakruti comme &eacute;pouse et ensemble, ils ont donn&eacute; naissance &agrave; une prog&eacute;niture unique nomm&eacute;e Jagath. Si nous ne tenons pas compte de ces relations, Paramatma a cr&eacute;&eacute; trois parties distinctes : Prakruti, Purusha et Jagath. Prakruti est une femme, Paramatma est un homme (Purusha) et Jagath doit &ecirc;tre consid&eacute;r&eacute; comme non binaire (ni homme ni femme). Le jeu principal est que Paramatma et Prakruti tra&icirc;nent Jagath (non binaire), qui existe entre eux. Il y a des r&egrave;gles pour ce jeu. Bien que Paramatma ait d&eacute;fini les r&egrave;gles, il participe au jeu selon les r&egrave;gles m&ecirc;mes qu'il a &eacute;tablies, m&ecirc;me s'il est le cr&eacute;ateur de tout et sup&eacute;rieur &agrave; tous. Ce jeu, comme d'autres, a une limite de temps. La limite de temps pour le jeu de Jagath est de 1 000 Yugas ou 108 crores d'ann&eacute;es, de la m&ecirc;me mani&egrave;re que le football a une limite de temps de 90 minutes ou que le cricket a une limite de 50 overs. Les exp&eacute;riences de jeu s'interrompent pendant la nuit et se poursuivent pendant la journ&eacute;e, chaque p&eacute;riode de jeu et de repos s'&eacute;tendant sur 108 crores (1,08 milliard) d'ann&eacute;es. Paramatma, non sp&eacute;cifique et ind&eacute;fini, a initialement cr&eacute;&eacute; Prapancha (sans forme de vie) et a ensuite donn&eacute; naissance aux &ecirc;tres vivants (Jagath). Paramatma cr&eacute;a Prakruti et fut reconnu comme Purusha. Il cr&eacute;a l'Atma et divisa Prakruti, qui con&ccedil;oit avec la graine de l'Atma, en cinq parties. Un tel Prakruti est appel&eacute; Pancha Bhutas ou Prapancha. Paramatma a divis&eacute; Atma et Jeevatma en trois parties&nbsp;: Jeevatma (le forme de vie Jagath), Atma et Paramatma. Il est devenu reconnu comme Paramatma apr&egrave;s avoir cr&eacute;&eacute; Jeevatmas et Atma. Il est devenu reconnu comme Paramatma aux c&ocirc;t&eacute;s d'Atmas (Jeevatma et Atma) et comme Purusha aux c&ocirc;t&eacute;s de Prakruti. Il y a une raison pour l'appeler Purusha quand il y a Prakruti et Paramatma quand les &acirc;mes sont pr&eacute;sentes. Si Prakruti et Atmas n'existent pas, il n'est pas possible de Le d&eacute;finir. La forme de vie Jagath est n&eacute;e de Prakruti et Purusha. Paramatma a pr&eacute;vu que la m&egrave;re et le p&egrave;re de Jagath aient les attributs de Prakruti et Purusha.

	Prakruti poss&egrave;de des caract&eacute;ristiques oppos&eacute;es &agrave; celles de Purusha. Cependant, Jagath se compose d'attributs &agrave; la fois de Prakruti et de Purusha. La forme de vie Jagath incarne &agrave; la fois Jeevatma et Atmas li&eacute;s &agrave; Paramatma, ainsi que des corps et gunas li&eacute;s &agrave; Prakruti. La croyance en l'existence de Dieu s'aligne sur l'Atma, tandis que le point de vue oppos&eacute; selon lequel Dieu n'existe pas s'aligne sur Prakruti. Les &ecirc;tres humains de Jagath pr&eacute;sentent des caract&eacute;ristiques &agrave; la fois de Prakruti et de Purusha. Pour symboliser les traits de Prakruti et Purusha, les corps des femmes ont &eacute;t&eacute; cr&eacute;&eacute;s pour ressembler &agrave; Prakruti, tandis que les corps des hommes ont &eacute;t&eacute; con&ccedil;us pour repr&eacute;senter Paramatma. Des individus non binaires ont &eacute;galement &eacute;t&eacute; cr&eacute;&eacute;s pour symboliser Jagath, indiquant que Jagath existe en plus de Prakruti et Paramatma. Les femmes, les hommes et les individus non binaires symbolisent Prakruti, Paramatma et le Jagath vivant. Prakruti = Femmes, Jagath = Non binaire et Paramatma = Purusha (Homme). Dieu a fait conna&icirc;tre sa cr&eacute;ation en cr&eacute;ant des femelle pour ressembler &agrave; Prakruti, des individus non binaires pour symboliser Jagath et des m&acirc;le pour repr&eacute;senter Paramatma. Dieu a mis au monde des enfants par l'union m&acirc;le et de femelle pour illustrer que le Jagath vivant est n&eacute; d'Atma et de Prakruti. La m&egrave;re, le p&egrave;re et la prog&eacute;niture visibles illustrent comment la cr&eacute;ation s'est produite initialement. De nombreuses personnes, malgr&eacute; leur intelligence, ne r&eacute;fl&eacute;chissent souvent pas aux raisons pour lesquelles les hommes diff&egrave;rent des femmes et pourquoi les enfants naissent &agrave; la fois d&rsquo;hommes et de femmes. Pour vraiment appr&eacute;hender la spiritualit&eacute;, il est essentiel de comprendre les bases de la <strong>&laquo;&nbsp;Secret de la cr&eacute;ation&nbsp;&raquo; </strong>en &eacute;ducation spirituelle.

	Il est important de comprendre que le jeu entre Dieu et Prakruti est de nature amicale. Prakruti et Paramatma s'engagent dans une douce lutte acharn&eacute;e, chacun essayant d'attirer Jeevatma dans son camp respectif dans ce jeu. Le devoir de Paramatma est de transmettre la sagesse &agrave; Jeevatma, en le guidant vers Lui. A l&rsquo;inverse, Prakruti, sous la forme de Maya avec son arme des gunas, occupe les &ecirc;tres humains, les emp&ecirc;chant de contempler Dieu. Prakruti pi&egrave;ge les individus dans leurs activit&eacute;s quotidiennes, d&eacute;tournant toute leur attention vers des activit&eacute;s mondaines et les emp&ecirc;chant de se tourner vers Dieu sous l'influence du d&eacute;sir et des gunas associ&eacute;s. Le jeu le plus grandiose entre Paramatma et Prakruti reste sans nom. Sous la forme de Maya, Prakruti attire subtilement tout le monde &agrave; son c&ocirc;t&eacute;, souvent &agrave; leur insu. Si quelqu'un au sein de Jagath pense &agrave; Dieu et cherche &agrave; le conna&icirc;tre, Maya (Prakruti) a tendance &agrave; se concentrer sur lui et &agrave; le prendre au pi&egrave;ge. Maya (Satan) appara&icirc;t plus forte que Dieu dans cette lutte continue entre Dieu et Satan. Actuellement, il d&eacute;tient l&rsquo;all&eacute;geance de 99 pour cent des &ecirc;tres humains. Dans un tel sc&eacute;nario, alors que la d&eacute;faite de Dieu semble in&eacute;vitable, Paramatma devrait s&rsquo;efforcer de l&rsquo;emporter.

	Dans le cadre de ses efforts, Paramatma s'incarnera en tant qu'humain parmi l'humanit&eacute; et parlera de lui-m&ecirc;me, dans le but de guider les gens vers lui. Comme mentionn&eacute; pr&eacute;c&eacute;demment, il n&rsquo;y a pas de v&eacute;ritable adversaire et chaque camp utilise sa propre strat&eacute;gie.

	Satan (Maya&rdquo;)&rdquo; et Dieu coexistent dans chaque &ecirc;tre humain, mais les individus ignorent souvent leur pr&eacute;sence et luttent pour reconna&icirc;tre Dieu ou Maya. Les humains ignorent souvent de quel c&ocirc;t&eacute; ils se trouvent. Dieu s&rsquo;efforce de lib&eacute;rer les individus pris au pi&egrave;ge de l&rsquo;influence de Maya, et dans cette qu&ecirc;te, Paramatma est n&eacute; sur Terre en tant que Fils de Dieu. Cependant, suivant les r&egrave;gles du jeu cosmique, Il ne doit pas r&eacute;v&eacute;ler Son identit&eacute; de Fils de Dieu. Ainsi, lorsque Dieu s&rsquo;incarne en tant qu&rsquo;humain, Il parle de Paramatma comme d&rsquo;un individu ordinaire. Paramatma transmet sa sagesse et r&eacute;tablit son dharma. &Agrave; l&rsquo;inverse, Maya formule des strat&eacute;gies pour d&eacute;crire le Fils de Dieu comme ignorant et insens&eacute;. Cela cr&eacute;e des gourous et des swamijis qui promeuvent les adharmas mayas comme des dharmas et pr&eacute;sentent les enseignements du Fils de Dieu comme des adharmas. Maya rivalise avec le Fils de Dieu &agrave; travers ces gourous et swamijis, conduisant les humains &agrave; adopter ses enseignements au lieu de la sagesse de Dieu. Maya utilise des termes tels que Paramatma, moksham, sagesse et pratique pour transmettre ses adharmas aux humains, ce qui rend difficile la distinction entre le dharma de Dieu et les adharmas de Satan.

	Si quelqu'un cherche &agrave; trouver Dieu, Maya le rend incapable de faire la distinction entre les dharmas et les adharmas, ce qui l'am&egrave;ne &agrave; croire tout ce qui lui est pr&eacute;sent&eacute;. C'est une r&egrave;gle fondamentale du jeu cosmique que ni Satan (Maya) ni Dieu ne doivent r&eacute;v&eacute;ler ouvertement leur pr&eacute;sence sur Terre. Lorsque Paramatma s'incarne en tant que Bhagavan sur Terre, Il s'abstient de d&eacute;clarer : &laquo; Je suis Paramatma &raquo;. Selon la m&ecirc;me r&egrave;gle, lorsque Prakruti na&icirc;t sur Terre, elle ne proclame pas : &laquo; Je suis Maya &raquo;. Cependant, lorsque Maya s'incarne, elle peut affirmer : &laquo; Je suis Bhagavan &raquo;. Suivant ce principe, Maya (Satan) se proclame Bhagavan (le Fils de Dieu), accomplit de nombreux miracles et se manifeste sous la forme de divers Swamijis. Lorsque Paramatma na&icirc;t en un seul endroit sur Terre, Prakruti cr&eacute;e de nombreux individus portant le nom de Bhagavan. La naissance de Paramatma a pour seul but de transmettre Ses dharmas sans &ecirc;tre ouvertement reconnu comme Bhagavan. Parall&egrave;lement, Maya en g&eacute;n&egrave;re beaucoup avec le nom Bhagavan avant m&ecirc;me la naissance de Paramatma. Maya am&egrave;ne les humains &agrave; entendre ses paroles et les emp&ecirc;che d'&eacute;couter les paroles du v&eacute;ritable Bhagavan. Dans ce jeu cosmique, Maya exerce son influence et Dieu accomplit son dessein. Alors que Maya prend continuellement la forme de gunas dans le corps humain, Dieu existe sous la forme d'Atma dans le corps. Nous avons mentionn&eacute; pr&eacute;c&eacute;demment que Maya et Paramatma s'incarneraient en tant qu'&ecirc;tres humains sur Terre. Il est important de comprendre les corps qu&rsquo;ils assumeront. Maya s'incarne dans un corps masculin sous le nom de Bhagavan et dans un corps f&eacute;minin sous le nom de Bhagavati. Paramatma s'incarne syst&eacute;matiquement dans un corps masculin. Prakruti, en tant que femelle, porte g&eacute;n&eacute;ralement un corps f&eacute;minin, mais elle peut &eacute;galement se manifester dans un corps masculin pour tromper les autres. Il peut &ecirc;tre difficile de discerner le vrai Bhagavan sous les formes de Bhagavati et Bhagavan. Il est crucial de noter que Bhagavan s&rsquo;incarne toujours en tant qu&rsquo;m&acirc;le. Le P&egrave;re c&eacute;leste, Paramatma, s'est incarn&eacute; en J&eacute;sus sous une forme masculine. Sa naissance s'est produite dans un ventre vierge sans la participation d'un p&egrave;re humain. Paramatma s'incarne sur Terre lorsque le besoin s'en fait sentir, avec <strong>J&eacute;sus </strong>&eacute;tant une de ces incarnations. Le Saint-Esprit devrait &eacute;galement s&rsquo;incarner sur Terre &agrave; l&rsquo;avenir.

	Nous avons &eacute;crit ce &Eacute;criture pour vous informer que peu importe le nombre de fois o&ugrave; le m&ecirc;me Paramatma na&icirc;t, il r&eacute;v&eacute;lera les m&ecirc;mes dharmas. Le but de ce &Eacute;criture est d'aider les lecteurs &agrave; comprendre les paroles essentielles de J&eacute;sus dans le Nouveau Testament de la Bible et de les comparer avec les enseignements de la Bhagavad-Gita. En lisant ceci, nous esp&eacute;rons que vous d&eacute;couvrirez la grandeur de J&eacute;sus et l&rsquo;esprit int&eacute;rieur de Krishna.

  </div></div>
<ion-row><ion-col class="ion-text-center">
<b>Par<br><br>
Le seul gourou des trois religions, à l'origine du théorème de Thraitha, l'auteur de cent écritures divines.</b><br><br>
<span style="font-size:20px;font-weight:bold">Sri. Sri. Sri Acharya Prabodhananda Yogeeshwarulu</span>
</ion-col></ion-row>

</span>`,

},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 2,
verse: `<b>(1) L'Évangile de Matthieu, chapitre 3, verset 7.</b>`,
meaning: `<b>
(3:7) Engeance de vipères ! Qui vous a averti de fuir la colère à venir ?
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dans ce verset, <strong>&laquo; couv&eacute;e de vip&egrave;res &raquo; </strong>est un nouveau terme. Le terme &eacute;tait utilis&eacute; pour d&eacute;signer les humains. Cependant, il existe un doute quant &agrave; savoir si les humains peuvent &ecirc;tre consid&eacute;r&eacute;s comme la prog&eacute;niture des serpents. Cela soul&egrave;ve une question pour quiconque lit ce verset. Dans ce verset, nous devons &eacute;galement approfondir la signification d&eacute;taill&eacute;e de <strong>&laquo;la col&egrave;re vient.&raquo; </strong>De plus, un autre mot dans ce verset est <strong>&laquo;&nbsp;Qui vous a pr&eacute;venu&nbsp;?&nbsp;&raquo; </strong>Cette phrase fait r&eacute;f&eacute;rence &agrave; une &eacute;poque pass&eacute;e, et nous devrions chercher &agrave; comprendre qui a averti les humains dans le pass&eacute;. Il y a trois questions auxquelles nous avons besoin de r&eacute;ponses dans ce verset.

	Un oiseau est l&rsquo;ennemi d&rsquo;un serpent. L'oiseau peut tuer le serpent. Le serpent siffle d&rsquo;abord pour effrayer l&rsquo;oiseau, mais l&rsquo;oiseau n&rsquo;a pas peur. L&rsquo;oiseau peut manger le serpent comme nourriture. C&rsquo;est de notori&eacute;t&eacute; publique. Le serpent et l'oiseau sont utilis&eacute;s comme m&eacute;taphores dans le contexte de l'&eacute;ducation spirituelle. Le pigeon parmi les oiseaux est compar&eacute; &agrave; Atma, tandis que le serpent est compar&eacute; &agrave; Maya. Bien que le verset ne mentionne pas l&rsquo;oiseau, il mentionne le serpent. Lorsque le serpent est compar&eacute; &agrave; Maya (Satan), &laquo; couv&eacute;e de vip&egrave;res &raquo; peut &ecirc;tre compris comme &laquo; prog&eacute;niture de Maya &raquo;. Pour &ecirc;tre plus pr&eacute;cis, &laquo; couv&eacute;e de vip&egrave;res &raquo; est utilis&eacute; au lieu de &laquo; &ecirc;tres humains avec Maya &raquo;.'

	Maya fait r&eacute;f&eacute;rence &agrave; la composition des gunas. Ceux qui sont constamment pr&eacute;occup&eacute;s par les gunas et ne se soucient pas de Dieu sont appel&eacute;s &laquo; la couv&eacute;e des vip&egrave;res &raquo;. On sait qu&rsquo;une col&egrave;re imminente attend ceux qui sont emp&ecirc;tr&eacute;s dans Maya. <strong>La col&egrave;re, dans ce contexte, signifie quelque chose de terrible ou de difficile &agrave; supporter. </strong>Le terme &laquo; col&egrave;re &agrave; venir &raquo; sugg&egrave;re qu&rsquo;elle n&rsquo;existe pas actuellement mais qu&rsquo;elle se manifestera dans le futur. Ce que les humains ne poss&egrave;dent pas initialement mais qu'ils acquerront gr&acirc;ce &agrave; Maya (gunas), ce sont toutes sortes de bons (punya) et de mauvais karma (p&eacute;ch&eacute;). Les exp&eacute;riences r&eacute;sultant d&rsquo;un mauvais karma peuvent &ecirc;tre assez terribles. Donc, <strong>&laquo; la col&egrave;re &agrave; venir &raquo; fait allusion au karma qui se manifestera dans la vie humaine</strong>. Chaque &ecirc;tre humain qui na&icirc;t accumule du karma, c'est pourquoi le verset <strong>&laquo; Esp&egrave;ce de vip&egrave;res ! Qui vous a conseill&eacute; de fuir la col&egrave;re &agrave; venir ? </strong>sert d'avertissement aux humains.

	Lorsque le verset mentionne &laquo; qui vous a pr&eacute;venu ? &raquo;, cela sugg&egrave;re que quelqu&rsquo;un dans le pass&eacute; a fourni aux humains la sagesse n&eacute;cessaire pour &eacute;chapper au karma. Ce verset implique qu'il y avait un individu qui avait eu une id&eacute;e dans le pass&eacute; pour aider les gens &agrave; &eacute;chapper au karma imminent. Par cons&eacute;quent, il est important que les humains d&eacute;couvrent l&rsquo;identit&eacute; de cette personne, comprennent ce qu&rsquo;elle a dit et d&eacute;terminent quand elle a transmis cette sagesse. Se rem&eacute;morer des &eacute;v&eacute;nements historiques du pass&eacute; peut &ecirc;tre une t&acirc;che difficile. Si la r&eacute;ponse &agrave; la question initiale pos&eacute;e dans le premier chapitre des quatre &Eacute;vangiles n&rsquo;est pas connue, le sujet de la deuxi&egrave;me &eacute;criture divine ne sera pas compris. Par la suite, les versets suivants de la deuxi&egrave;me &eacute;criture divine ne peuvent pas &ecirc;tre compris. Il est donc essentiel de discerner la r&eacute;ponse &agrave; la question initiale. Avant de d&eacute;couvrir la v&eacute;rit&eacute; &agrave; cet &eacute;gard, explorons la signification de cette deuxi&egrave;me &eacute;criture divine.

	La sagesse que Dieu a transmise est devenue une &eacute;criture il y a environ cinq mille ans. Cette &eacute;criture comprend 18 chapitres et se situe au milieu des 18 parvas du Mahabharata. Ces dix-huit chapitres sont appel&eacute;s la premi&egrave;re &eacute;criture divine. Au d&eacute;but de la cr&eacute;ation, Dieu a communiqu&eacute; la sagesse &agrave; travers le Ciel. Cette sagesse &eacute;tait connue sous le nom de <strong>'Japara </strong>sagesse &raquo;&agrave; cette &eacute;poque. En t&eacute;lougou, <strong>para </strong>signifie s&eacute;par&eacute; ou diff&eacute;rent, tandis que <strong>para </strong>signifie n&eacute;. &laquo; Japara &raquo; se traduit donc par &laquo; s&eacute;par&eacute; ou distinct de la naissance &raquo;. Il m&eacute;rite ce nom parce que Dieu n'est jamais sujet &agrave; la naissance. La sagesse Japara est initialement devenue la premi&egrave;re &eacute;criture divine et est &eacute;galement devenue la deuxi&egrave;me &eacute;criture divine apr&egrave;s trois mille ans, c'est-&agrave;-dire il y a environ deux mille ans. Il y a environ 1 400 ans, la m&ecirc;me sagesse a &eacute;t&eacute; transcrite dans la troisi&egrave;me &eacute;criture divine. Nous interpr&eacute;tons maintenant la phrase de la deuxi&egrave;me &eacute;criture divine.

	Lorsque la question &laquo;&nbsp;Qui vous a pr&eacute;venu&nbsp;?&nbsp;&raquo; est pos&eacute;e, nous devrions parler de celui qui a dit la sagesse dans le pass&eacute;. Selon cela, celui qui a dit la sagesse dans la premi&egrave;re &eacute;criture divine est celui qui a averti les humains en premier. Il y a une raison pour conna&icirc;tre celui qui l&rsquo;a dit dans le pass&eacute;. Puisque seul Dieu peut exprimer sa sagesse et que Dieu est le seul, le m&ecirc;me Dieu enseigne sa sagesse chaque fois que cela est n&eacute;cessaire. Par cons&eacute;quent, celui-l&agrave; m&ecirc;me qui l&rsquo;a dit plus t&ocirc;t l&rsquo;a r&eacute;p&eacute;t&eacute; en vers. Par cons&eacute;quent, si nous voulons conna&icirc;tre celui qui a prononc&eacute; la sagesse dans la deuxi&egrave;me &eacute;criture divine, nous devons d&rsquo;abord conna&icirc;tre celui qui a prononc&eacute; la sagesse dans le pass&eacute;. Il est donc devenu n&eacute;cessaire de se poser la question : qui vous a pr&eacute;venu ? Si vous parvenez &agrave; d&eacute;couvrir qui l&rsquo;a dit dans le pass&eacute;, vous aurez l&rsquo;occasion de reconna&icirc;tre qui le dit maintenant. Nous vous encourageons &agrave; aborder cette &Eacute;criture avec le <strong>croyance </strong>que l'individu qui a communiqu&eacute; la premi&egrave;re &eacute;criture divine est &eacute;galement la source de la seconde &eacute;criture divine.

	Avant de lire la deuxi&egrave;me &eacute;criture divine, nous devons savoir quels versets Dieu, qui a racont&eacute; la premi&egrave;re &eacute;criture divine, a dit dans l&rsquo;&eacute;criture biblique. La Bible comprend un total de 66 chapitres, dont quatre contiennent des versets directement prononc&eacute;s par Dieu. Les 62 autres chapitres contiennent des vers d'autres gnanis. Ces chapitres sont connus sous le nom de 1) L'&Eacute;vangile de Matthieu, 2) L'&Eacute;vangile de Marc, 3) L'&Eacute;vangile de Luc et 4) L'&Eacute;vangile de Jean. Ces quatre r&eacute;cits &eacute;vang&eacute;liques sont situ&eacute;s dans la partie centrale de la Bible, la divisant effectivement en trois sections principales. Les 39 chapitres initiaux forment la premi&egrave;re partie, suivis des quatre &Eacute;vangiles comme deuxi&egrave;me partie, les 23 chapitres restants constituant la troisi&egrave;me partie. Il convient de noter en particulier la d&eacute;signation de ces quatre chapitres comme <strong>&laquo; &Eacute;vangiles</strong>&raquo;, soulignant leur signification car ils contiennent les paroles de J&eacute;sus au cours de sa vie terrestre.

<b>La premi&egrave;re partie de la Bible comporte 39 parties. </b> <br>
<b>La deuxi&egrave;me partie de la Bible contient 4 &Eacute;vangiles. </b><br>
<b>La troisi&egrave;me partie de la Bible comporte 23 parties.</b>

	Dans les premi&egrave;re et troisi&egrave;me parties, d&rsquo;autres gnanis transmettaient la sagesse de Dieu. J&eacute;sus, incarnation de celui qui a d&eacute;livr&eacute; la premi&egrave;re &eacute;criture divine, a r&eacute;it&eacute;r&eacute; des versets des quatre &Eacute;vangiles. Par cons&eacute;quent, pour comprendre cela, la question<strong>&laquo;&nbsp;Qui vous a averti de fuir la col&egrave;re &agrave; venir&nbsp;?&nbsp;&raquo; </strong>est pos&eacute;. On peut donc dire que ce verset, plac&eacute; au-dessus de tous les autres, rev&ecirc;t une grande signification.
</div></div>
</span>`
},

{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 3,
verse: `<b>(2) L'Évangile de Matthieu, chapitre 3, verset 11.</b>`,
meaning: ` <b>
(3:11) Je te baptise avec de l'eau pour changer de manas (esprit). Mais après moi vient celui qui est plus puissant que moi, dont je ne suis pas digne de porter les sandales. Il vous baptisera du Saint-Esprit et de feu.
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Ce verset contient les mots <strong>'changement de manas' </strong>et <strong>'baptiser,' </strong>ainsi que &laquo; avec de l'eau et avec du feu &raquo;. Pour bien saisir le sens de ce verset, il est essentiel de comprendre ces quatre mots. Si l&rsquo;un de ces mots reste flou, l&rsquo;essence du verset reste insaisissable. Examinons donc la signification de ces quatre mots. Le premier mot est &laquo; changement de manas &raquo;. Manas (esprit) dans notre corps retient et rappelle ce qui a &eacute;t&eacute; appris et stock&eacute;. Ici, &laquo; changement de manas &raquo; fait r&eacute;f&eacute;rence &agrave; l&rsquo;alt&eacute;ration de manas. Manas est charg&eacute; de se souvenir des &eacute;v&eacute;nements de notre vie. Lorsque le premier manas subit un changement et que le deuxi&egrave;me manas prend sa place, tous les souvenirs du premier manas sont effac&eacute;s. Le deuxi&egrave;me manas n'a aucun souvenir du premier manas. Le premier manas cesse d'exister avec la mort, et le second manas &eacute;merge avec la naissance. Lorsque le premier manas est remplac&eacute; par le deuxi&egrave;me manas, cela s&rsquo;appelle un &laquo; changement de manas &raquo;. Cette transition naturelle du manas se produit &agrave; chaque cycle de naissance et de mort. Le bapt&ecirc;me n&rsquo;est pas n&eacute;cessaire pour le &laquo; changement de manas &raquo; car il se produit naturellement avec le processus de mort et de renaissance.&nbsp;

	Lorsqu&rsquo;une personne meurt et rena&icirc;t, elle se d&eacute;barrasse de son ancien corps et en acquiert un nouveau. Cette transformation physique qui se produit est connue sous le nom de naissance. Il est important de reconna&icirc;tre que les humains poss&egrave;dent deux types de corps distincts : le visible (physique) et l&rsquo;invisible (subtil). Tout comme l'ancien corps visible est remplac&eacute; par un nouveau lors du processus de naissance, de m&ecirc;me, lorsque le corps invisible et subtil subit un changement, les hindous (Indus) l'appellent <strong>Upadesa</strong>', tandis que les chr&eacute;tiens l'appellent <strong>'bapt&ecirc;me</strong>.&rsquo; Comme mentionn&eacute; dans ce verset, le bapt&ecirc;me signifie la transformation du manas invisible. Tout comme la fa&ccedil;on dont l'ancien manas, charg&eacute; de souvenirs, dispara&icirc;t dans la mort et qu'un nouveau manas &eacute;merge &agrave; la naissance, lors du bapt&ecirc;me, le manas subit un profond changement. Il cesse de nous rappeler des souvenirs banals et ignorants et commence &agrave; <strong>rappeler la sagesse et les souvenirs li&eacute;s au divin. </strong>Le bapt&ecirc;me est le processus par lequel un individu, guid&eacute; par les enseignements d'un <strong>Guru</strong>, atteint un changement de manas dans la vie. Dans cette transformation, un manas ignorant est remplac&eacute; par un manas en harmonie avec la sagesse.

<strong>Changement de Manas = Passer de l'ignorance &agrave; la sagesse. Bapt&ecirc;me = Atteindre l'upadesa du Guru.</strong>

	Baptiste Jean a offert une &laquo; upadesa &raquo; avec de l'eau, en d&eacute;clarant : &laquo; Je te baptise avec de l'eau, mais quelqu'un de plus puissant que moi viendra apr&egrave;s, qui te baptisera du Saint-Esprit et du feu. &raquo; Nous avons d&eacute;j&agrave; explor&eacute; en d&eacute;tail les concepts de &laquo; changement de manas &raquo; et de &laquo; bapt&ecirc;me &raquo;. Examinons maintenant la signification de &laquo; l&rsquo;eau &raquo; et du &laquo; feu (le contraire de l&rsquo;eau). &raquo; Nous obtenons le bapt&ecirc;me du gourou, mais il existe deux types de gourous. Certains poss&egrave;dent le pouvoir de sagesse (Gnana Shakti), tandis que d&rsquo;autres ne le poss&egrave;dent pas. De nombreux gourous pratiquent g&eacute;n&eacute;ralement le bapt&ecirc;me ou &laquo; upadesa &raquo; en utilisant de l&rsquo;eau. Certains peuvent utiliser du lait, qui sont tous deux des liquides visibles, tandis que d'autres utilisent des cendres sacr&eacute;es ou de la fum&eacute;e d'encens dans le cadre du processus. De plus, pendant &laquo; upadesa &raquo;, un gourou transmet un mantra, un mot ou une image, et il existe de nombreuses &laquo; upadesas &raquo; de ce type, propos&eacute;es par divers gourous. Jean &eacute;tait l'un de ces gourous, et il a ouvertement admis sa m&eacute;thode, d&eacute;clarant : &laquo; Je vous baptise d'eau. &raquo; Cependant, il pr&eacute;dit l'arriv&eacute;e de quelqu'un de plus grand, qui baptiserait du Saint-Esprit et du feu. Nous avons d&eacute;fini le &laquo; bapt&ecirc;me &raquo; comme le chemin vers la transformation du manas de l&rsquo;ignorance &agrave; la sagesse. Lorsque cette transformation se produit par le bapt&ecirc;me, elle a le pouvoir de purifier tous les p&eacute;ch&eacute;s d&rsquo;une personne. Guru donne le feu divin appropri&eacute; &agrave; travers son bapt&ecirc;me pour br&ucirc;ler les p&eacute;ch&eacute;s. Le Guru devrait poss&eacute;der la divinit&eacute; du feu. Le premier verset du chapitre &laquo; Atma Samyama Yoga &raquo; de la Bhagavad-Gita, la premi&egrave;re &eacute;criture divine, souligne la n&eacute;cessit&eacute; de ce feu divin, en d&eacute;clarant : &laquo; cha yogee cha na niragnir nachaakriyah &raquo;, ce qui signifie <strong>"Celui qui manque de ce feu divin (Gnana Shakti) et cesse d'agir n'est pas un yogi (Guru)."</strong>

	Un v&eacute;ritable yogi (gourou) n'est pas quelqu'un qui s'abstient d'agir mais se caract&eacute;rise par la pr&eacute;sence d'un feu int&eacute;rieur, qui symbolise <strong>pouvoir de sagesse</strong>. C'est ce que le verset mentionne comme &laquo; bapt&ecirc;me de feu &raquo;. Ici, &laquo; feu &raquo; signifie le <strong>pouvoir divin (Gnana Shakti)</strong>, qui n'est pas visible &agrave; l'&oelig;il nu. Lorsqu&rsquo;une personne re&ccedil;oit ce feu divin de son Guru, il enflamme en elle un pouvoir transformateur, capable de br&ucirc;ler son karma accumul&eacute;. Le feu de la sagesse (Gnana Shakti) accord&eacute; &agrave; l'individu baptis&eacute; commence &agrave; d&eacute;truire son karma. Alors qu&rsquo;un gourou comme Jean administrait le bapt&ecirc;me dans le but de &laquo; changer de manas &raquo;, il <strong>ne poss&eacute;dait pas le pouvoir de la sagesse </strong>dans son bapt&ecirc;me, il fallait br&ucirc;ler le karma. Ainsi, il a d&eacute;clar&eacute; : &laquo; Je ne peux que vous baptiser avec de l&rsquo;eau. &raquo; Jean expliqua au peuple que son bapt&ecirc;me, <strong>r&eacute;alis&eacute; avec de l'eau</strong>, ne br&ucirc;lerait pas leur karma. Au lieu de cela, il pr&eacute;voyait que celui qui viendrait apr&egrave;s lui administrerait un bapt&ecirc;me capable d&rsquo;accomplir cela.

<strong>Bapt&ecirc;me d'eau = Upadesa qui ne br&ucirc;le pas le karma </strong>
<strong>Bapt&ecirc;me de feu = Upadesa qui br&ucirc;le le karma</strong>
</div></div>
</span>`,
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 4,
verse: `<b>(3) L'Évangile de Matthieu, chapitre 3, verset 12.</b>`,
meaning: `<b>
(3:12) Son van est dans Sa main, et Il nettoiera Son aire de battage, rassemblant Son blé dans le grenier et brûlant la balle avec un feu qui ne s'éteint pas.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
  <ion-row><ion-col class="ion-text-center">
  <img src="assets/img/chaata.png"/><br>
  <img src="assets/img/kallam.png"/>
  </ion-col></ion-row>
<div class="poem"><div class="poemtext">
	C'est Jean, un gourou renomm&eacute; de son &eacute;poque, qui a prononc&eacute; le verset en question. &Agrave; cette &eacute;poque, il a transmis l&rsquo;upadesa (bapt&ecirc;me) &agrave; de nombreuses personnes. Jean &eacute;tait un grand &laquo; gnani (sage) &raquo; et avait pr&eacute;vu l&rsquo;arriv&eacute;e de J&eacute;sus. Il a baptis&eacute; J&eacute;sus-Christ (Bhagavan), le Fils de Dieu. Il &eacute;tait aussi le gourou de J&eacute;sus. M&ecirc;me si Jean &eacute;tait un gourou c&eacute;l&egrave;bre et qu&rsquo;il avait baptis&eacute; de nombreuses personnes &agrave; cette &eacute;poque, il &eacute;tait humble. Avant de baptiser J&eacute;sus, il a fait preuve d&rsquo;humilit&eacute; en disant : &laquo; Celui qui vient apr&egrave;s moi est plus puissant que moi, et je ne suis pas digne de porter ses sandales. &raquo; Lorsque J&eacute;sus l&rsquo;a approch&eacute; pour le bapt&ecirc;me, Jean a reconnu la plus grande puissance spirituelle de J&eacute;sus, en disant : <strong>&laquo; Tu devrais me baptiser. Viens-tu me voir pour le bapt&ecirc;me ? </strong>Ces paroles ont &eacute;t&eacute; prononc&eacute;es par Jean lorsqu'il pr&eacute;voyait l'arriv&eacute;e du Seigneur. Le verset contient &eacute;galement des r&eacute;f&eacute;rences &agrave; <strong>un plateau de vannage</strong>, <strong>bl&eacute;</strong>, et un <strong>feu inextinguible</strong>. Certains pourraient s&rsquo;interroger sur la signification de ces &eacute;l&eacute;ments tant ils paraissent banals. Si le bl&eacute; est ramass&eacute; avec le vannage, &eacute;cras&eacute; et br&ucirc;l&eacute; au feu, il devient du pain. Nous regardons tous le vannage, le bl&eacute; et le feu du four. Certains pourraient se demander ce qu&rsquo;il y a de si g&eacute;nial dans cette phrase. Ce verset fait partie de la deuxi&egrave;me &eacute;criture divine, et chaque verset de cette &eacute;criture transmet la sagesse divine. Consid&eacute;r&eacute; avec sagesse et perspicacit&eacute; spirituelle, ce verset rev&ecirc;t une signification particuli&egrave;re, soulignant la grandeur de J&eacute;sus-Christ.

	Dans les temps anciens, il &eacute;tait d&rsquo;usage de placer les nouveau-n&eacute;s sur un plateau de vannage (panier). D&egrave;s la naissance d&rsquo;un b&eacute;b&eacute;, le riz &eacute;tait vers&eacute; dans le plateau de vannage, aplati et le b&eacute;b&eacute; y &eacute;tait couch&eacute; selon la coutume. Cette pratique &eacute;tait r&eacute;pandue dans toutes les couches de la soci&eacute;t&eacute;, des pauvres aux riches, des bien inform&eacute;s aux ignorants. La croyance &eacute;tait que Brahma, la divinit&eacute; cr&eacute;atrice, inscrirait l&rsquo;avenir de l&rsquo;enfant, souvent appel&eacute; <strong>&laquo; &eacute;criture du karma &raquo; ou &laquo; Brahma Vrata &raquo;, </strong>sur le front du b&eacute;b&eacute; pendant les deux minutes pass&eacute;es sur le vannage. Quelles que soient ses convictions personnelles, les paroles de Jean, particuli&egrave;rement dans le contexte de J&eacute;sus, restent vraies. Jean a utilis&eacute; une analogie, comparant les actes au bl&eacute;. Le bl&eacute;, en tant qu&rsquo;aliment de base, entretient la vie, mais il s&rsquo;&eacute;puise &agrave; mesure que nous le consommons. Dans la m&ecirc;me veine, Jeevatma exp&eacute;rimente le karma sous forme d&rsquo;actes. &Agrave; mesure que nous vivons des exp&eacute;riences karmiques, le &laquo; karma &raquo; de nos actes diminue. L&rsquo;&eacute;criture du karma, &eacute;galement connue sous le nom d&rsquo;&eacute;criture sur le front ou jugement de Dieu, signifie que le karma dont nous faisons l&rsquo;exp&eacute;rience est inscrit dans notre corps et que nos exp&eacute;riences de vie refl&egrave;tent cette inscription. Jean a compar&eacute; les actes influenc&eacute;s par notre karma au bl&eacute;, et le &laquo; plateau &agrave; vanner &raquo; &eacute;tait symboliquement la t&ecirc;te o&ugrave; ces actes &eacute;taient stock&eacute;s. Tout comme nous r&eacute;coltons les grains sur un plateau de vannage Pour pr&eacute;parer la nourriture, notre t&ecirc;te est d&eacute;crite comme un &laquo; plateau de vannage &raquo; car elle stocke le karma dont nous faisons l&rsquo;exp&eacute;rience.

	Le karma s&rsquo;inscrit dans la t&ecirc;te d&rsquo;un &ecirc;tre humain &agrave; son insu. En cons&eacute;quence, personne ne peut pr&eacute;dire l&rsquo;avenir. Chaque &ecirc;tre humain est li&eacute; par le karma et ne peut &eacute;chapper &agrave; son influence. Alors que tous les humains semblent &ecirc;tre de simples marionnettes manipul&eacute;es par le karma, le Saint-Esprit ou Paramatma reste hors du contr&ocirc;le du karma. Lorsque Dieu choisit de s&rsquo;incarner en tant qu&rsquo;humain, il cr&eacute;e son propre karma en l&rsquo;&eacute;crivant sur sa propre t&ecirc;te, venant ainsi sur Terre. Il ne poss&egrave;de aucun karma inh&eacute;rent mais cr&eacute;e d&eacute;lib&eacute;r&eacute;ment son propre destin pour transmettre la sagesse &agrave; l&rsquo;humanit&eacute;. Concernant Dieu, qui prend en charge son propre karma, Jean a exprim&eacute;&nbsp;: <strong>&laquo;Son vannage est dans sa main.&raquo; </strong>Personne d&rsquo;autre au monde ne poss&egrave;de un tel contr&ocirc;le sur son karma. Contrairement aux limitations humaines, Dieu fa&ccedil;onne Son propre karma et descend en tant qu&rsquo;&ecirc;tre humain sur Terre pour partager Sa sagesse. Il est essentiel de comprendre que la vie de J&eacute;sus, de sa naissance &agrave; sa mort, &eacute;tait la cons&eacute;quence d&rsquo;un karma auto-construit. Sa naissance dans une humble grange, ses souffrances et sa crucifixion &eacute;taient tous les produits de son destin qu&rsquo;il s&rsquo;&eacute;tait lui-m&ecirc;me cr&eacute;&eacute;. Aucune force ext&eacute;rieure ne pourrait provoquer sa naissance ou le tourmenter sans son consentement. Il d&eacute;terminait le cours de son existence terrestre, tenant m&ecirc;me son propre plateau de vannage.

	Tous les gens ordinaires accumulent un nouveau karma pour chaque acte qu&rsquo;ils accomplissent. Chaque action sur Terre g&eacute;n&egrave;re un nouveau karma. Tout comme la fum&eacute;e est &eacute;troitement li&eacute;e au feu, le karma est intrins&egrave;quement associ&eacute; aux actes. C&rsquo;est un principe fondamental de Prakruti que chaque action entra&icirc;ne des cons&eacute;quences karmiques. Lorsque Dieu s&rsquo;incarne et appara&icirc;t comme le Fils de Dieu (Bhagavan), chaque action qu&rsquo;Il entreprend g&eacute;n&egrave;re &eacute;galement un nouveau karma. Les individus ordinaires sont incapables d&rsquo;&eacute;chapper au karma imminent. Cependant, Bhagavan J&eacute;sus poss&egrave;de le plein feu de la sagesse (Gnana Shakti), lui permettant de br&ucirc;ler le karma d&eacute;coulant naturellement de ses actions. Le Christ, le gnani consomm&eacute;, a toujours le plein pouvoir de sagesse. Tout karma est consum&eacute; dans le feu inextinguible de la sagesse. Les actions sont intrins&egrave;quement li&eacute;es au karma, tout comme les grains sont li&eacute;s &agrave; l&rsquo;ivraie. John a exprim&eacute; cela ainsi&nbsp;: <strong>&laquo; Il br&ucirc;le la paille avec un feu inextinguible &raquo; </strong>signifiant comment le Christ &eacute;radique le karma associ&eacute; aux actes gr&acirc;ce &agrave; sa sagesse. J&eacute;sus se purifie de la poussi&egrave;re des gunas et incin&egrave;re le karma li&eacute; &agrave; ses actions. Jean a compar&eacute; le corps de J&eacute;sus &agrave; une aire de battage, symbolisant la suppression de l&rsquo;influence des gunas, tout comme on nettoie une aire de battage. Il a assimil&eacute; les actes au bl&eacute;, le karma provenant de ces actes &agrave; la paille, et le feu qui consume le karma &agrave; un feu inextinguible. Jean a r&eacute;sum&eacute; la grandeur de J&eacute;sus en une seule phrase, mais malheureusement, nous n&rsquo;en avons pas pleinement saisi la signification.

	Le verset peut para&icirc;tre simple, mais il contient des significations profondes et subtiles. Les quatre &Eacute;vangiles sont riches en versets d&rsquo;une profondeur similaire. En raison de ma sagesse limit&eacute;e, je n&rsquo;ai pas fourni d&rsquo;explications pour les 66 chapitres de la Bible, mais je me suis concentr&eacute; sur les descriptions des quatre &eacute;vangiles cruciaux, abordant rarement les autres sections.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 5,
verse: `<b>(4) L'Évangile de Matthieu, chapitre 3, versets 16 et 17.</b>`,
meaning: `
<b>
(3:16) Dès que Jésus fut baptisé, Il sortit de l'eau. À ce moment-là, le ciel s’ouvrit et Il vit l’Esprit de Dieu descendre comme une colombe et se poser sur Lui.
<br><br>
(3:17) Et une voix venant du ciel dit : « Celui-ci est mon fils que j'aime ; avec lui, je suis très content.
</b>
`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Jean a baptis&eacute; J&eacute;sus avec de l&rsquo;eau. Le bapt&ecirc;me est &eacute;galement appel&eacute; &laquo; upadesa &raquo;. En telugu, &laquo; upadesa &raquo; d&eacute;signe un pays adjacent au v&ocirc;tre. Autrement dit, c&rsquo;est synonyme de pays voisin. Un voisin r&eacute;side dans un pays voisin. Il y a un pays voisin &agrave; l&rsquo;int&eacute;rieur de votre corps, et dans ce pays voisin de votre corps r&eacute;side un voisin. Chaque &ecirc;tre humain a un pays voisin et un voisin, m&ecirc;me si ces entit&eacute;s ne sont pas visibles chez un &ecirc;tre humain. Le Guru r&eacute;v&egrave;le le pays voisin invisible lors du bapt&ecirc;me ou &laquo; upadesa &raquo;. Jean a baptis&eacute; J&eacute;sus avec de l&rsquo;eau, et il n&rsquo;y a pas de feu impliqu&eacute; dans cette &laquo; upadesa &raquo;. Par cons&eacute;quent, elle se rapporte au nom et n&rsquo;a pas de pays voisin ni de voisin. N&eacute;anmoins, le processus d&rsquo;&laquo; upadesa &raquo; doit &ecirc;tre men&eacute; de cette mani&egrave;re. C&rsquo;est pourquoi J&eacute;sus dit au verset 3&nbsp;:15&nbsp;: <strong>&laquo; Qu&rsquo;il en soit ainsi maintenant&nbsp;; il nous convient de faire cela pour accomplir toute justice (sagesse).</strong>

	Bien que J&eacute;sus ait re&ccedil;u l&rsquo;upadesa avec de l&rsquo;eau, il &eacute;tait conscient du pays voisin &agrave; l&rsquo;int&eacute;rieur de son corps. Il pouvait voir &agrave; tout moment &agrave; la fois le monde ext&eacute;rieur visible et le pays voisin invisible. Par cons&eacute;quent, il &eacute;tait consid&eacute;r&eacute; comme une v&eacute;ritable upadesa, m&ecirc;me si l&rsquo;upadesa donn&eacute;e par Jean ne concernait que le nom. J&eacute;sus a &eacute;t&eacute; baptis&eacute; apr&egrave;s avoir v&eacute;cu trente ans comme un Jeevatma ordinaire. &Agrave; partir de ce moment-l&agrave;, Il a commenc&eacute; &agrave; parler des questions divines sous forme de sagesse, non pas comme un Jeevatma, mais comme un Atma. Pour d&eacute;montrer que J&eacute;sus, en tant qu&rsquo;Atma, transmettait la sagesse de Paramatma, Atma est descendu comme une colombe et s&rsquo;est pos&eacute; sur lui imm&eacute;diatement apr&egrave;s qu&rsquo;il soit sorti de l&rsquo;eau apr&egrave;s son bapt&ecirc;me. De plus, Paramatma (le Saint-Esprit) a d&eacute;clar&eacute;<strong>, &laquo;&nbsp;Voici mon fils, que j&rsquo;aime&nbsp;; avec lui, je suis bien content. </strong>Le Saint-Esprit (Dieu) a affirm&eacute; qu&rsquo;Atma &eacute;tait Son Fils bien-aim&eacute; et Il a exprim&eacute; Sa joie en Son Fils bien-aim&eacute;, J&eacute;sus. Par cela, il devient &eacute;vident que le Saint-Esprit est le P&egrave;re et qu&rsquo;Atma est le Fils connu sous le nom de J&eacute;sus. Tout cela indique que le Saint-Esprit (Paramatma) n&rsquo;est pas apparu comme Atma mais a plut&ocirc;t v&eacute;cu dans ce monde comme un homme ordinaire, apparaissant comme un Jeevatma. Je n&rsquo;ai pas dit cela pour louer les chr&eacute;tiens ou promouvoir le christianisme. Je partage avec vous ce que je crois &ecirc;tre la v&eacute;rit&eacute; absolue sur la fa&ccedil;on dont Dieu s&rsquo;est manifest&eacute; sur Terre.
</div></div>
</span>`,
},

{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 6,
verse: `<b>(5)	L'Évangile de Matthieu, chapitre 4, verset 10.</b> `,
meaning: ` <b>
(4:10) Jésus lui dit : « Loin de moi, Satan ! Car il est écrit : Adorez le Seigneur ton Dieu et ne sers que Lui.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le mot <strong>&lsquo;Satan&rsquo; </strong>est introduit dans ce verset. Dans les versets pr&eacute;c&eacute;dents, Satan est parfois qualifi&eacute; de &laquo; tentateur (shodakudu en telugu) &raquo; et dans d&rsquo;autres cas de &laquo; diffamateur (apavadi en telugu). &raquo; Le terme &laquo; apavadi &raquo; d&eacute;signe celui qui juge mal et ment, tandis que &laquo; Shodakudu &raquo; implique quelqu&rsquo;un qui recherche le mal en vous et, s&rsquo;il existe, le fait remonter &agrave; la surface. &laquo; apavadi &raquo; ou &laquo; shodakudu &raquo; est appel&eacute; Satan dans cette phrase. &laquo; apavadi &raquo; et &laquo; shodakudu &raquo; appartiennent tous deux &agrave; la langue telugu, mais le mot &laquo;&nbsp;Satan&nbsp;&raquo; ne vient pas du t&eacute;lougou. Le mot &laquo; Satan &raquo; appara&icirc;t fr&eacute;quemment dans cette &Eacute;criture. Dans le domaine de l&rsquo;&eacute;ducation spirituelle, &laquo; Satan &raquo; est utilis&eacute; de mani&egrave;re interchangeable avec <strong>&lsquo;Maya</strong>.&rsquo; Puisque Satan et Maya sont essentiellement les m&ecirc;mes, les descriptions de Maya peuvent &eacute;galement s&rsquo;appliquer &agrave; Satan.

	Dans la premi&egrave;re &eacute;criture divine, Maya fait r&eacute;f&eacute;rence &agrave; l&rsquo;essence des gunas dans la t&ecirc;te. Concernant Maya, la premi&egrave;re &eacute;criture divine d&eacute;clare<strong>, &lsquo;Gunamayee maman maaya,&rsquo; </strong>o&ugrave; &laquo; mama maaya &raquo; signifie &laquo; Maya est &agrave; moi &raquo;, comme le proclame Dieu. Selon cela, on dit que Maya est la combinaison de gunas. Dieu est le cr&eacute;ateur de toutes choses, y compris Maya, et Dieu a donc d&eacute;clar&eacute; que Maya lui appartenait. Maya est de genre f&eacute;minin, tandis que Dieu et les deux &acirc;mes, Atma et Jeevatma, qui se sont s&eacute;par&eacute;es de Dieu, sont masculins (un total de trois). Tout le reste cr&eacute;&eacute; par Dieu peut &ecirc;tre consid&eacute;r&eacute; comme f&eacute;minin. Par cons&eacute;quent, Maya est consid&eacute;r&eacute;e comme f&eacute;minine. Nous ne devons pas consid&eacute;rer Maya comme &eacute;tant ext&eacute;rieure&nbsp;; au contraire, la Maya qui a tent&eacute; J&eacute;sus &eacute;tait dans sa propre t&ecirc;te. R&eacute;sidant dans sa t&ecirc;te, Maya a tent&eacute; J&eacute;sus et s&rsquo;est disput&eacute;e avec lui. De m&ecirc;me, les gunas dans la t&ecirc;te de chaque personne agissent comme leurs Mayas, les tentant et d&eacute;battant constamment avec eux. Apr&egrave;s le bapt&ecirc;me de J&eacute;sus, Maya l&rsquo;a d&rsquo;abord tent&eacute; &agrave; trois reprises, et J&eacute;sus a r&eacute;pondu avec sa sagesse &agrave; chaque fois.

	J&eacute;sus a donn&eacute; un exemple dans sa vie que les humains devraient imiter. Chaque fois que Maya testait J&eacute;sus, il r&eacute;pondait avec sagesse. Par cons&eacute;quent, tout le monde devrait apprendre &agrave; faire de m&ecirc;me. Lorsque Satan a demand&eacute; &agrave; J&eacute;sus de se prosterner devant elle, J&eacute;sus a donn&eacute; &agrave; Satan (Maya) une r&eacute;ponse appropri&eacute;e. J&eacute;sus r&eacute;pondit &agrave; Satan en disant&nbsp;: <strong>&laquo;&nbsp;Adorez le Seigneur votre Dieu et servez-le seul.&nbsp;&raquo; </strong>J&eacute;sus a prononc&eacute; ces paroles, mais il est crucial de comprendre que c&rsquo;est l&rsquo;Atma &agrave; l&rsquo;int&eacute;rieur de Son corps qui a prononc&eacute; ces paroles. Le Saint-Esprit, Paramatma, ne communique directement avec personne. Au lieu de cela, Il transmet Sa sagesse &agrave; travers l&rsquo;Atma. Nous devons donc reconna&icirc;tre que la sagesse a &eacute;t&eacute; transmise par Paramatma lui-m&ecirc;me, m&ecirc;me si elle a &eacute;t&eacute; exprim&eacute;e par Atma dans le corps. Dans la troisi&egrave;me et derni&egrave;re &eacute;criture divine, en 3&nbsp;:7, Dieu d&eacute;clare&nbsp;: &laquo; La sagesse de Dieu n&rsquo;est connue de personne sauf de Dieu. &raquo; Cela souligne que la sagesse compl&egrave;te r&eacute;v&eacute;l&eacute;e par l&rsquo;Atma dans le corps est transmise par Paramatma (Dieu).

	Il existe aujourd&rsquo;hui douze grandes religions dans le monde, et l&rsquo;hindouisme est unique en ce sens qu&rsquo;il englobe tous les devatas absents des autres religions. Dieu a cr&eacute;&eacute; &agrave; la fois les devatas et les &ecirc;tres humains. Cependant, les humains ont abandonn&eacute; Dieu et se sont tourn&eacute;s vers le culte des devatas, sans comprendre pleinement la sagesse de Dieu. Ce choix souligne que les humains n&rsquo;ont pas donn&eacute; la priorit&eacute; aux enseignements de Dieu tels qu&rsquo;ils figurent dans leurs &Eacute;critures. Ceux qui abandonnent Dieu et adorent les devatas peuvent &ecirc;tre consid&eacute;r&eacute;s comme &eacute;tant sous l&rsquo;influence de Maya, tenant compte des paroles de Maya. Dans le grand sch&eacute;ma, il y a essentiellement deux c&ocirc;t&eacute;s&nbsp;: le c&ocirc;t&eacute; de Dieu et le c&ocirc;t&eacute; de Maya. Cependant, dans certaines religions, les gens adorent exclusivement Dieu sans se tourner vers d&rsquo;autres devatas. C&rsquo;est principalement dans l&rsquo;hindouisme que le culte de plusieurs devatas, en dehors de Dieu, est plus courant. Par cons&eacute;quent, il devient &eacute;vident que ceux qui adorent les devatas s&rsquo;alignent sur l&rsquo;influence de Maya.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 7,
verse: ` <b>(6)	L'Évangile de Matthieu, chapitre 5, verset 10.</b>`,
meaning: `<b>
(5:10) Bienheureux ceux qui sont persécutés à cause de la justice (la sagesse), car à eux est le royaume de paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le verset inclut le mot &laquo;&nbsp;justice&nbsp;&raquo;, mais il devrait &ecirc;tre <strong>&laquo; sagesse &raquo; au lieu de &laquo; justice &raquo;. </strong>Dans la langue h&eacute;bra&iuml;que, J&eacute;sus a probablement utilis&eacute; le mot &laquo; sagesse &raquo;. Cependant, lorsqu&rsquo;il a &eacute;t&eacute; traduit en anglais, le mot &eacute;quivalent au terme h&eacute;breu n&rsquo;a pas &eacute;t&eacute; repr&eacute;sent&eacute; avec pr&eacute;cision et &laquo; justice &raquo; a &eacute;t&eacute; utilis&eacute; &agrave; la place de &laquo; sagesse &raquo;. &laquo;&nbsp;justice&nbsp;&raquo; et &laquo;&nbsp;sagesse&nbsp;&raquo;. <strong>La droiture et la justice sont des concepts li&eacute;s aux affaires du monde, tandis que la sagesse et le dharma sont de nature divine. </strong>La droiture et la justice sont associ&eacute;es au karma, tandis que la sagesse et le dharma ont le pouvoir de br&ucirc;ler le karma. Cette distinction souligne que la justice appartient au domaine mat&eacute;riel, tandis que la sagesse est de nature divine. Dans le monde, nous rencontrons la droiture, la corruption, la justice et l&rsquo;injustice. La justice m&egrave;ne au punya (bon karma), tandis que la corruption aboutit au p&eacute;ch&eacute;. De m&ecirc;me, la justice donne naissance au punya, tandis que l&rsquo;injustice donne naissance au p&eacute;ch&eacute;. &Agrave; la lumi&egrave;re de ces diff&eacute;rences, il est clair que le verset en question devrait utiliser &laquo; sagesse &raquo; au lieu de &laquo; justice &raquo;.

	Ceux qui sont pers&eacute;cut&eacute;s pour leur qu&ecirc;te de la sagesse et ceux qui endurent des difficult&eacute;s sur le chemin de la sagesse peuvent &ecirc;tre consid&eacute;r&eacute;s comme des bienheureux. En effet, gr&acirc;ce &agrave; leur souffrance au nom de la sagesse, ils peuvent atteindre Moksham, qui signifie la lib&eacute;ration de l&rsquo;esclavage du karma. Lorsqu&rsquo;une personne atteint Moksham, elle transcende cette existence mondaine et entre dans un &eacute;tat diff&eacute;rent au-del&agrave; du monde. On dit qu&rsquo;un tel individu est entr&eacute; dans le paraloka, qui est un &eacute;tat d&eacute;pourvu d&rsquo;exp&eacute;riences mat&eacute;rielles. Il est important de noter que le cheminement de chacun vers la sagesse n&rsquo;implique pas la pers&eacute;cution ou la violence. Certaines personnes acquerront la sagesse et atteindront Moksham (paraloka) sans aucun obstacle.
</dv></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 8,
verse: ` <b>(7)	L'Évangile de Matthieu, chapitre 5, verset 17.</b> `,
meaning: ` <b>
(5:17) Ne pensez pas que je suis venu pour abolir la Loi (Dharma Shastra) ou les Prophètes ; Je ne suis pas venu pour les abolir mais pour les accomplir.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Personne ne peut condamner le Dharma Shastra. Cela ne peut pas &ecirc;tre condamn&eacute;. Il existe depuis l&rsquo;aube de la cr&eacute;ation, avec de nombreux proph&egrave;tes et enseignants lui transmettant sa sagesse. Lorsque Paramatma (l&rsquo;&Ecirc;tre Supr&ecirc;me) descend sur Terre en tant que Bhagavan, non seulement il pratique le Dharma Shastra mais il rend &eacute;galement ses principes compr&eacute;hensibles &agrave; tous. Cependant, lorsque Bhagavan, en tant que Fils de Dieu, r&eacute;v&egrave;le et pratique les dharmas d&eacute;crits dans le Dharma Shastra, ils peuvent ne pas appara&icirc;tre comme des dharmas &agrave; certains individus. Cette divergence vient du fait que certaines personnes croient &agrave; tort que les adharmas sont des dharmas. Par cons&eacute;quent, les vrais dharmas peuvent ressembler &agrave; des adharmas lorsque Bhagavan transmet Ses enseignements. C&rsquo;est pourquoi J&eacute;sus a d&eacute;clar&eacute; dans le verset ci-dessus&nbsp;: <strong>&laquo;&nbsp;Ne pensez pas que je suis venu pour abolir la Loi (Dharma Shastra), mais pour l&rsquo;accomplir.&nbsp;&raquo;</strong>

	Les gens dans le monde sont tomb&eacute;s sous l&rsquo;influence de Maya (Satan) et en sont venus &agrave; croire que les adharmas sont des dharmas. Par cons&eacute;quent, ils s&rsquo;adonnent &agrave; diverses formes d&rsquo;adoration, pensant qu&rsquo;il s&rsquo;agit d&rsquo;une d&eacute;votion sinc&egrave;re. Maya a r&eacute;orient&eacute; la compr&eacute;hension de Dieu des gens vers elle-m&ecirc;me, les amenant &agrave; croire qu&rsquo;ils progressent vers Dieu. Dans ce processus, cela les incite &agrave; pratiquer des adharmas plut&ocirc;t que des dharmas, les conduisant ainsi dans la direction oppos&eacute;e de Dieu. Dans un tel &eacute;tat, m&ecirc;me lorsque Dieu s&rsquo;incarne en humain et pratique les vrais dharmas, ces actions peuvent sembler trompeuses &agrave; ceux influenc&eacute;s par Maya. Les gens peuvent penser &agrave; tort que ce qu&rsquo;ils font est le vrai dharma et qu&rsquo;ils sont de v&eacute;ritables croyants. Ils pourraient accuser Dieu qui est venu en tant qu&rsquo;humain de suivre les adharmas et m&ecirc;me le qualifier de blasph&eacute;mateur. Lorsque le vrai Dieu est venu sur Terre sous la forme de J&eacute;sus, ce qu&rsquo;Il a dit et pratiqu&eacute; &eacute;taient en effet des dharmas. Cependant, ces dharmas semblaient contredire les enseignements des &eacute;rudits, des swamis et des gourous. Cette divergence est la raison pour laquelle les principaux sacrificateurs, les scribes et Ca&iuml;phe se sont oppos&eacute;s et ont d&eacute;nonc&eacute; J&eacute;sus. Par cons&eacute;quent, J&eacute;sus a soulign&eacute; dans le verset&nbsp;: <strong>&laquo; Je ne suis pas venu pour les abolir mais pour les accomplir. &raquo;</strong>
</div></div>
</span>  `
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 1,
pageNumber: 9,
verse: ` <b>(8)	L'Évangile de Matthieu, chapitre 5, verset 18.</b>`,
meaning: `<b>(5:18) Car en vérité, je vous le dis, jusqu'à ce que le ciel et la terre disparaissent, pas la plus petite lettre, pas le moindre trait de plume ne disparaîtra de quelque manière que ce soit de la Loi (Dharma Shastra) jusqu'à ce que tout soit accompli.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dans ce verset, le terme <strong>&lsquo;Dharma Shastra&rsquo; </strong>est unique, et certains peuvent se demander ce que cela signifie. Pour r&eacute;pondre &agrave; de telles questions, il est essentiel de comprendre le concept de shastra (science), les diff&eacute;rents types de sciences et la particularit&eacute; du Dharma Shastra dans le domaine des sciences. Premi&egrave;rement, si nous comprenons le sens du mot &laquo; shastra &raquo;, nous comprendrons le shastra dans une certaine mesure. Le mot <strong>&lsquo;shastra&rsquo; </strong>est d&eacute;riv&eacute; du mot Telugu <strong>&lsquo;Shasanam&rsquo;</strong>&raquo;, qui v&eacute;hicule l&rsquo;id&eacute;e de <strong>&laquo;doit &ecirc;tre appliqu&eacute;.&raquo; </strong>Par cons&eacute;quent, &laquo; shastra &raquo; implique <strong>&laquo;&nbsp;tout ce qui est dit doit arriver.&nbsp;&raquo; </strong>De plus, le terme <strong>&lsquo;</strong><strong>shapam&rsquo; </strong>est d&eacute;riv&eacute; de &laquo; shastra &raquo; et signifie <strong>&lsquo;doit &ecirc;tre ex&eacute;cut&eacute;.&rsquo; </strong>Ainsi, les trois mots &ndash; <strong>shasanam&rsquo; (statute), &lsquo;shapam' (mal&eacute;diction) et 'shastra' (science) </strong>partagent le m&ecirc;me sens sous-jacent. Shastra est g&eacute;n&eacute;ralement class&eacute; en six domaines d&rsquo;&eacute;tude distincts. Certains diront que les six sciences peuvent &ecirc;tre regroup&eacute;es en deux types, tandis que d&rsquo;autres proposent trois cat&eacute;gories. D&rsquo;une mani&egrave;re g&eacute;n&eacute;rale, les shastras peuvent &ecirc;tre consid&eacute;r&eacute;s comme deux types. En d&rsquo;autres termes, nous pouvons d&eacute;crire les shastras comme triples. Si nous les classons en deux types, l&rsquo;un est li&eacute; aux questions du monde et l&rsquo;autre aux questions li&eacute;es &agrave; Paramatma (l&rsquo;&Ecirc;tre Supr&ecirc;me). Dans la triple classification, quatre shastras sont associ&eacute;s &agrave; des pr&eacute;occupations mondaines, l&rsquo;un se rapporte uniquement &agrave; Paramatma et l&rsquo;autre entre dans la cat&eacute;gorie des &ecirc;tres partiellement li&eacute;s &agrave; Paramatma et partiellement li&eacute;s aux questions du monde.

	Les six shastras sont les suivants&nbsp;: 1) Math&eacute;matiques, 2) Astronomie, 3) Chimie, 4) Physique, 5) Astrologie et 6) Brahma Vidya. Parmi ceux-ci, les quatre premiers concernent les questions du monde, tandis que le cinqui&egrave;me, l&rsquo;astrologie, a des liens &agrave; la fois avec les pr&eacute;occupations du monde et avec le divin. Alternativement, si l&rsquo;astrologie est &eacute;galement consid&eacute;r&eacute;e dans la cat&eacute;gorie des shastras mondains, les cinq premiers shastras sont class&eacute;s comme mondains, tandis que Brahma Vidya Shastra reste la seule science li&eacute;e au Divin. Il existe un total de six sciences, Brahma Vidya &eacute;tant la plus importante. C&rsquo;est pourquoi il est connu sous le nom de Brahma Vidya shastra, &laquo; Brahma &raquo; signifiant grandeur. &laquo; Brahma &raquo; n&rsquo;est pas un nom, mais un terme utilis&eacute; pour d&eacute;signer la nature la plus grande et supr&ecirc;me de Dieu. <strong>Comme il s&rsquo;agit d&rsquo;une science d&eacute;di&eacute;e &agrave; la compr&eacute;hension de Dieu, elle porte &agrave; juste titre le nom de Brahma Vidya shastra. </strong>&Eacute;tant donn&eacute; que Brahma Vidya se rapporte &agrave; la science de Dieu, il porte la d&eacute;signation &laquo; vidya &raquo;. Les cinq autres sciences du monde, &agrave; savoir les math&eacute;matiques, l&rsquo;astronomie, La chimie, la physique et l&rsquo;astrologie n&rsquo;ont pas les <strong>&lsquo;vidya&rsquo; </strong>suffixe dans leurs noms. Le terme &laquo; vidya &raquo; est r&eacute;serv&eacute; &agrave; la science li&eacute;e &agrave; Dieu. Certains peuvent s&rsquo;interroger sur la raison de cette distinction, et la r&eacute;ponse est la suivante.

	Les sciences peuvent &ecirc;tre divis&eacute;es en deux types&nbsp;: celles li&eacute;es au monde et celles li&eacute;es au Paramatma. Les cinq sciences mat&eacute;rielles peuvent &ecirc;tre pleinement comprises par n&rsquo;importe qui. Cependant, Brahma Vidya, le plus grand de tous, qui r&eacute;v&egrave;le les dharmas de Dieu, est le seul &agrave; inclure le terme &laquo; vidya &raquo; dans son nom, ce qui lui vaut le titre de plus grand Vidya shastra. Le mot &laquo; vidya &raquo; (&eacute;ducation) vient du son <strong>&lsquo;avec</strong>&raquo;, ce qui signifie savoir. Vidya implique des connaissances qui doivent &ecirc;tre acquises. Un &laquo; vidyarthi &raquo; (&eacute;tudiant) est quelqu&rsquo;un qui recherche la connaissance, demande quelque chose qu&rsquo;il ne poss&egrave;de pas encore et l&rsquo;acquiert aupr&egrave;s de ceux qui poss&egrave;dent la connaissance. Les &eacute;tudiants acqui&egrave;rent une &eacute;ducation essentielle aupr&egrave;s d&rsquo;enseignants comp&eacute;tents. Vidya fait r&eacute;f&eacute;rence &agrave; une connaissance qui peut &ecirc;tre connue mais pas enti&egrave;rement comprise. De la m&ecirc;me mani&egrave;re, personne ne peut pr&eacute;tendre comprendre pleinement le sujet de Dieu. Personne ne peut affirmer poss&eacute;der une connaissance compl&egrave;te de Dieu. Apprendre &agrave; conna&icirc;tre Dieu est une qu&ecirc;te qui dure toute la vie, et les gens continuent &agrave; acqu&eacute;rir une compr&eacute;hension tout au long de leur vie. Personne ne peut dire que c&rsquo;est la limite et qu&rsquo;il sait tout. Les humains continueront toujours &agrave; en apprendre davantage sur la question de Dieu, mais ne le conna&icirc;tront jamais pleinement. Par cons&eacute;quent, la science de Dieu est toujours appel&eacute;e Vidya shastra, et elle est perp&eacute;tuellement le Brahma Vidya shastra. En revanche, on peut pleinement appr&eacute;hender les cinq autres sciences, ne laissant plus rien &agrave; savoir. En cons&eacute;quence, le terme &laquo; vidya &raquo; n&rsquo;est pas ajout&eacute; &agrave; leurs noms.

	Celui qui poss&egrave;de une connaissance compl&egrave;te de Dieu (le Brahma) peut partager cette sagesse avec les autres. Si quelqu&rsquo;un ne conna&icirc;t pas la sagesse de Dieu, qui d&rsquo;autre peut la transmettre en toute confiance&nbsp;? Notre r&eacute;ponse &agrave; cette question est la suivante&nbsp;: seul Dieu lui-m&ecirc;me conna&icirc;t pleinement sa propre sagesse. Par cons&eacute;quent, Dieu doit personnellement transmettre sa sagesse. Cependant, Dieu ne communique directement avec&nbsp;personne. Au lieu de cela, Dieu, m&ecirc;me s&rsquo;il n&rsquo;appara&icirc;t pas comme Dieu, transmet sa sagesse en prenant la forme d&rsquo;un homme. Il est important de noter que m&ecirc;me si Dieu appara&icirc;t sous une forme humaine, il n&rsquo;est pas un &ecirc;tre humain. Sous l&rsquo;apparence d&rsquo;un homme, Dieu a r&eacute;v&eacute;l&eacute; sa sagesse dans son int&eacute;gralit&eacute;, la pr&eacute;sentant comme une science dot&eacute;e de principes et d&rsquo;ordonnances prescrits. Par cons&eacute;quent, ce que Dieu a r&eacute;v&eacute;l&eacute; est appel&eacute; Brahma Vidya shastra. Dieu lui-m&ecirc;me a communiqu&eacute; le Brahma Vidya shastra, et il incombe &agrave; l&rsquo;humanit&eacute; de le comprendre. Lorsqu&rsquo;une personne acquiert une compr&eacute;hension compl&egrave;te du Brahma Vidya, elle est lib&eacute;r&eacute;e du karma et peut s&rsquo;unir &agrave; Dieu. Par cons&eacute;quent, les individus doivent persister dans l&rsquo;acquisition de la connaissance de la science divine jusqu&rsquo;&agrave; ce qu&rsquo;ils atteignent Moksham (la lib&eacute;ration). C&rsquo;est pourquoi il porte bien son nom de Brahma Vidya, car il s&rsquo;agit de la forme d&rsquo;&eacute;ducation la plus &eacute;lev&eacute;e au monde.

	Les dharmas de Dieu sont articul&eacute;s dans le Brahma Vidya shastra, c&rsquo;est pourquoi on l&rsquo;appelle le Dharma Shastra dans les &eacute;critures divines. Dieu a initialement r&eacute;v&eacute;l&eacute; Son shastra avec des ordonnances &agrave; l&rsquo;aube m&ecirc;me de la cr&eacute;ation. Par la suite, trois &eacute;critures divines ont &eacute;merg&eacute; &agrave; des &eacute;poques diff&eacute;rentes et dans des lieux distincts. Ces trois &eacute;critures divines peuvent &ecirc;tre consid&eacute;r&eacute;es comme les trois Dharma Shastras, qui contiennent toutes exclusivement des dharmas. Par cons&eacute;quent, les trois Dharma Shastras partagent les m&ecirc;mes principes et sont enracin&eacute;s dans les dharmas de Dieu. Ils sont unis dans leur adh&eacute;sion au Brahma Vidya et enseignent les dharmas de Dieu. En cons&eacute;quence, les trois Dharma Shastras se corroborent mutuellement et ne se contredisent pas. <strong>Le premier divin </strong><strong>L&rsquo;&eacute;criture divine est connue sous le nom de Bhagavad-Gita, la deuxi&egrave;me &eacute;criture divine est appel&eacute;e la Bible et la troisi&egrave;me &eacute;criture divine (l&rsquo;&eacute;criture divine finale) est appel&eacute;e le Coran. </strong>Bien que ces trois &eacute;critures portent des noms diff&eacute;rents, elles transmettent les dharmas du m&ecirc;me Dieu.

	&Agrave; la suite du Brahma Vidya shastra, trois proph&egrave;tes ont transmis la sagesse de Dieu, qui est ensuite devenue trois &eacute;critures divines distinctes. Bien que ces trois &eacute;critures divines soient distinctes, elles exposent toutes les m&ecirc;mes dharmas divins sous trois perspectives diff&eacute;rentes. Puisque les dharmas pr&eacute;sent&eacute;s dans ces &eacute;critures sont bas&eacute;s sur la science, ils seront r&eacute;alis&eacute;s exactement comme ils ont &eacute;t&eacute; &eacute;nonc&eacute;s, comme l&rsquo;affirme le verset. <strong>&lsquo;jusqu&rsquo;&agrave; ce que le ciel et la terre disparaissent.' </strong>Le Ciel et la Terre du monde ext&eacute;rieur sont &eacute;ternels, comme Dieu les a cr&eacute;&eacute;s ainsi. Cependant, les homologues invisibles de la Terre et du Ciel dans le corps humain sont enti&egrave;rement p&eacute;rissables. Par cons&eacute;quent, l&rsquo;expression &laquo; jusqu&rsquo;&agrave; ce que le ciel et la terre disparaissent &raquo; doit &ecirc;tre comprise comme &laquo; jusqu&rsquo;&agrave; ce que le corps humain meure (disparaisse). &raquo; Lorsqu&rsquo;un individu recherche la sagesse de Dieu, il doit adh&eacute;rer &agrave; tous les commandements de Dieu (dharmas). Sans pratiquer de tout c&oelig;ur les dharmas de Dieu, on ne peut pas atteindre la paraloka. Comme indiqu&eacute; dans le Dharma Shastra, Moksham (lib&eacute;ration) ne peut &ecirc;tre atteint que lorsque tous les dharmas ont &eacute;t&eacute; accomplis. M&ecirc;me si une personne ne pratique pas ne serait-ce qu&rsquo;un peu de ce qui est d&eacute;crit dans le Dharma Shastra, elle n&rsquo;atteindra pas Moksham. Au lieu de simplement sugg&eacute;rer, <strong>&laquo;&nbsp;m&ecirc;me si une petite chose n&rsquo;est pas suivie des dharmas prescrits&nbsp;&raquo;, </strong>il s&rsquo;exprime <strong>comme &laquo; pas la plus petite lettre, pas le moindre trait de plume &raquo;. </strong>Par cons&eacute;quent, il est crucial de suivre chaque aspect du Dharma Shastra sans rien n&eacute;gliger. Il est important de savoir que la lettre et le trait de plume &eacute;voqu&eacute;s n&rsquo;ont aucun rapport avec l&rsquo;&eacute;criture du livre.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 10,
verse: ` <b>(9)	L'Évangile de Matthieu, chapitre 5, verset 19.</b>`,
meaning: `<b>
(5:19) Par conséquent, quiconque met de côté l'un de ces moindres commandements et enseigne aux autres en conséquence sera appelé le moindre dans le royaume de paraloka, mais quiconque pratique et enseigne ces commandements sera appelé grand dans le royaume de paraloka. </b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Bien que certains dharmas fondamentaux soient d&eacute;crits dans le Dharma Shastra, beaucoup sont interconnect&eacute;s avec eux. Les dharmas de Dieu sont &eacute;galement appel&eacute;s <strong>commandements</strong>. Il y a principalement <strong>deux </strong>le plus essentiel des commandements de Dieu, mais plusieurs autres y sont li&eacute;s. Quiconque transgresse ne serait-ce que le plus petit de ces commandements li&eacute;s et transmet de tels enseignements agit contre la justice. Une personne ne doit transgresser aucun des dharmas, qu&rsquo;ils soient mineurs ou importants, selon les instructions de Dieu. Chaque dharma, aussi petit soit-il, doit &ecirc;tre pratiqu&eacute; avec diligence sans exception. Cependant, certains individus, au lieu d&rsquo;adh&eacute;rer m&ecirc;me aux plus petits dharmas, se sont &eacute;loign&eacute;s du chemin des dharmas. Ils ont non seulement adopt&eacute; les adharmas, mais ont &eacute;galement diffus&eacute; de tels enseignements. Bien qu&rsquo;ils soient consid&eacute;r&eacute;s comme des gourous par la soci&eacute;t&eacute;, ils n&rsquo;ont pas r&eacute;ussi &agrave; comprendre correctement les commandements de Dieu. Malheureusement, ils ont mal interpr&eacute;t&eacute; les dharmas de Dieu comme des adharmas et sont devenus des partisans des adharmas. Ils &eacute;garent les gens en transmettant de tels enseignements, affirmant qu&rsquo;ils transmettent la vraie sagesse et les v&eacute;ritables commandements de Dieu. M&ecirc;me bien qu&rsquo;ils puissent &ecirc;tre consid&eacute;r&eacute;s comme de grands gourous aux yeux du monde, aux yeux de Dieu, ils sont consid&eacute;r&eacute;s comme les moindres.

	Ceux qui comprennent les dharmas les transmettent avec pr&eacute;cision sous forme de dharmas &agrave; ceux qui sont int&eacute;ress&eacute;s, m&ecirc;me s&rsquo;ils ne sont pas des gourous bien connus. Certaines personnes interpr&egrave;tent &agrave; tort les dharmas de Dieu comme des adharmas et, &agrave; leur tour, enseignent ces adharmas. Par cons&eacute;quent, ceux qui enseignent les adharmas ne peuvent pas atteindre le royaume de paraloka. Les ignorants n&rsquo;atteindront jamais le royaume de paraloka, car celui-ci leur reste d&eacute;finitivement ferm&eacute;, les jugeant indignes. M&ecirc;me si quelqu&rsquo;un qui comprend les commandements de Dieu &agrave; partir des &Eacute;critures n&rsquo;est pas consid&eacute;r&eacute; comme un gourou, il atteindra une place importante dans la paraloka lorsqu&rsquo;il enseignera les dharmas qu&rsquo;il conna&icirc;t. Un tel individu n&rsquo;est pas seulement connu comme un adepte des dharmas, mais il jouit &eacute;galement d&rsquo;une haute estime aux yeux de Dieu. Un v&eacute;ritable adepte du dharma est celui qui transmet m&eacute;ticuleusement m&ecirc;me le plus petit des dharmas de Dieu, de mani&egrave;re tr&egrave;s d&eacute;taill&eacute;e.
</div></div>

</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 1,
pageNumber: 11,
verse: `<b>(10)	L'Évangile de Matthieu, chapitre 5, verset 20.</b> `,
meaning: ` <b>
      5:20) Car je vous dis qu'à moins que votre justice ne surpasse celle des pharisiens et des docteurs de la loi, vous n'entrerez certainement pas dans le royaume de paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dans le monde, il existe de nombreux pharisiens, dévots et enseignants. Il est essentiel de posséder une sagesse plus profonde qu’eux. Dieu a déclaré que ceux qui possèdent moins de sagesse que les pharisiens, les dévots et les enseignants ne peuvent pas entrer dans la paraloka. Comme le suggère le verset, lorsque vous possédez plus de sagesse que les Swamis et les Pharisiens, qui s’engagent dans des yajnas (sacrifices rituels) et agissent contrairement à ce que Dieu a ordonné, vous atteindrez facilement la paraloka.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 12,
verse: `<b>(11)	L'Évangile de Matthieu, chapitre 5, verset 28.</b> `,
meaning: `<b>
(5:28) Mais je vous dis que quiconque regarde une femme avec convoitise a déjà commis un adultère avec elle dans son cœur. </b>     `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Les actions humaines peuvent &ecirc;tre class&eacute;es en deux approches distinctes&nbsp;: les actions externes qui sont observables et les actions internes qui se produisent dans les pens&eacute;es et les sentiments d&rsquo;une personne. Ces deux dimensions sont pr&eacute;sentes chez chaque individu. Dans une approche, une personne s&rsquo;engage dans des actions li&eacute;es &agrave; ses gunas avec des pens&eacute;es et des &eacute;motions internes. Dans l&rsquo;autre approche, les m&ecirc;mes actions sont r&eacute;alis&eacute;es gr&acirc;ce &agrave; l&rsquo;interaction des gunas et du corps physique. Les cons&eacute;quences de ces actions aboutissent soit au punya (bon karma), soit au p&eacute;ch&eacute; (mauvais karma). Il est important de noter qu&rsquo;il existe deux types d&rsquo;actions&nbsp;: physiques (visibles) et non physiques (invisibles).<strong>). Lors de l&rsquo;&eacute;valuation du caract&egrave;re d&rsquo;une personne, la soci&eacute;t&eacute; s&rsquo;appuie souvent sur ses actions physiques observables pour d&eacute;terminer si elles sont consid&eacute;r&eacute;es comme bonnes ou mauvaises. Cependant, il devient plus difficile de porter de tels jugements lorsque les actions d&rsquo;une personne sont internes, impliquant des pens&eacute;es et des &eacute;motions, car elles ne sont pas facilement perceptibles. </strong>Il est difficile de d&eacute;terminer si une personne est bonne ou mauvaise quand on ignore ses actions.

	Celui d&rsquo;une personne <strong>aham </strong>(l&rsquo;ego ou le sentiment de soi), qu&rsquo;il soit pr&eacute;sent dans leurs actions physiques ou dans leurs pens&eacute;es non physiques, joue un r&ocirc;le crucial dans la g&eacute;n&eacute;ration du karma. Le p&eacute;ch&eacute; ou le punya karma est re&ccedil;u par un individu en raison de la pr&eacute;sence d&rsquo;aham dans son corps. M&ecirc;me si les organes externes du corps sont impliqu&eacute;s dans les actions physiques, c&rsquo;est le fonctionnement de l&rsquo;aham qui influence le r&eacute;sultat karmique de ces actions. M&ecirc;me lorsqu&rsquo;une personne ne s&rsquo;engage pas physiquement dans une action, son aham, situ&eacute; &agrave; c&ocirc;t&eacute; de buddhi (intellect), attache un karma bas&eacute; sur ce que l'aham ressent dans les pens&eacute;es de buddhi lorsque la contemplation est entreprise sous l&rsquo;influence de gunas. Si aham n&rsquo;est pas actif, une personne n&rsquo;accumulera pas de karma, m&ecirc;me si elle est impliqu&eacute;e dans un travail physique ou non physique. Ce concept se refl&egrave;te dans la premi&egrave;re &eacute;criture divine, en particulier dans le verset 17 du Moksha Sanyasa Yoga, qui d&eacute;clare&nbsp;: <strong>&laquo;&nbsp;M&ecirc;me si une personne &eacute;limine tous les &ecirc;tres du monde sans la pr&eacute;sence d&rsquo;aham dans ses sentiments, elle n&rsquo;encourra pas de p&eacute;ch&eacute; pour l&rsquo;acte de tuer, et elle ne sera pas consid&eacute;r&eacute;e comme un meurtrier.&nbsp;&raquo; </strong>Cela souligne l&rsquo;importance de l&rsquo;aham dans la d&eacute;termination des cons&eacute;quences morales de ses actes. J&eacute;sus a &eacute;galement transmis un message similaire lorsqu&rsquo;il a dit&nbsp;: <strong>&laquo;&nbsp;Vous encourrez un p&eacute;ch&eacute; par vos pens&eacute;es &agrave; cause de aham, m&ecirc;me si vous n&rsquo;avez pas physiquement accompli l&rsquo;action.&nbsp;&raquo; </strong>Cela r&eacute;v&egrave;le l&rsquo;unit&eacute; des enseignements des premi&egrave;re et deuxi&egrave;me &eacute;critures divines, ainsi que la coh&eacute;rence de la sagesse v&eacute;hicul&eacute;e. Les actions d&rsquo;une personne ex&eacute;cut&eacute;es sans aham sont consid&eacute;r&eacute;es comme si elles n&rsquo;avaient pas &eacute;t&eacute; accomplies, et les pens&eacute;es qui impliquent aham sont trait&eacute;es comme si l&rsquo;action avait &eacute;t&eacute; ex&eacute;cut&eacute;e. Par cons&eacute;quent, la pr&eacute;sence d&rsquo;aham dans le corps influence l&rsquo;accumulation de punya et de p&eacute;ch&eacute; par le Jeevatma. Par cons&eacute;quent, il a &eacute;t&eacute; d&eacute;clar&eacute; d&egrave;s le d&eacute;but de la cr&eacute;ation que &laquo;&nbsp;accomplir des actions sans aham est du Karma Yogam&nbsp;&raquo;, un concept r&eacute;it&eacute;r&eacute; dans les premi&egrave;re et deuxi&egrave;me &eacute;critures divines.
</div></div>
</span>`
    },
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 13,
verse: `<b>(12)	L'Évangile de Matthieu, chapitre 5, versets 29 et 30.</b>`,
meaning: ` <b>
(5:29) Si ton œil droit te fait trébucher, arrache-le et jette-le. Il vaut mieux que vous perdiez une partie de votre corps plutôt que de jeter tout votre corps en enfer.
<br><br>
(5:30) Et si ta main droite te fait trébucher, coupe-la et jette-la. Il est préférable que vous perdiez une partie de votre corps plutôt que tout votre corps aille en enfer.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le verset 29 mentionne <strong>&lsquo;&oelig;il,&rsquo; </strong>et le verset 30 mentionne <strong>&lsquo;main.&rsquo; </strong>En y regardant de plus pr&egrave;s, il devient &eacute;vident que le corps humain est constitu&eacute; de deux types de parties du corps : physiques ou visibles et non physiques ou subtiles. Il y a un total de dix (10) parties du corps physique et quinze (15) parties du corps subtiles, ce qui porte le nombre combin&eacute; &agrave; 25, y compris Jeevatma. Chaque partie du corps correspond &agrave; une fonction distincte au sein du corps. Le corps humain poss&egrave;de cinq gnanendriyas (organes sensoriels) et cinq karmendriyas (organes moteurs). Ces deux ensembles d&rsquo;organes permettent collectivement des actions physiques. Les gnanendriyas, qui comprennent les yeux, les oreilles, le nez, la langue et la peau, servent de r&eacute;cepteurs qui transmettent les informations externes aux facult&eacute;s internes. De m&ecirc;me, il existe cinq karmendriyas : les mains, les jambes, la bouche, l'anus et l'organe sexuel. Le manas (esprit) transmet ensuite cette information des sens au buddhi (intellect). Alors que les gnanendriyas servent &agrave; transmettre des informations externes de l'environnement vers le facult&eacute;s internes, le buddhi int&eacute;rieur transmet des instructions par le biais du manas aux karmendriyas, qui ex&eacute;cutent ensuite les actions selon les instructions du buddhi.

	Les humains effectuent des actions coordonn&eacute;es par l&rsquo;interaction des gnanendriyas (organes sensoriels) et des karmendriyas (organes moteurs). Notamment, le <strong>&oelig;il </strong>parmi les gnanendriyas et les <strong>main </strong>parmi les karmendriyas, ils rev&ecirc;tent une importance particuli&egrave;re, c'est pourquoi les deux sont mentionn&eacute;s dans ces versets. M&ecirc;me si le buddhi (intellect) ne dirige pas les karmendriyas pour accomplir une t&acirc;che, le p&eacute;ch&eacute; peut toujours &ecirc;tre attribu&eacute; &agrave; une personne sur la base des pens&eacute;es du buddhi lorsque l'aham (l'ego), &eacute;troitement li&eacute; au buddhi, est actif. Cela souligne le r&ocirc;le central de l&rsquo;&oelig;il dans le p&eacute;ch&eacute; potentiel. Par exemple, lorsqu&rsquo;une personne regarde une femme avec des pens&eacute;es lubriques, elle peut commettre un p&eacute;ch&eacute; en raison de l&rsquo;influence d&rsquo;aham, m&ecirc;me si elle n&rsquo;a pas fait de mal physiquement &agrave; l&rsquo;autre personne. L&rsquo;&oelig;il cr&eacute;e ainsi la possibilit&eacute; d&rsquo;attacher un p&eacute;ch&eacute; &agrave; un individu pour des actions qui pourraient ne jamais se produire dans le domaine physique. Par cons&eacute;quent, le verset nous conseille de &laquo; arracher l&rsquo;&oelig;il et de le jeter &raquo;. Cependant, il est essentiel de noter que cela ne doit pas &ecirc;tre pris au sens litt&eacute;ral, car retirer physiquement l&rsquo;&oelig;il n&rsquo;est pas le sens voulu du verset. Le verset mentionne sp&eacute;cifiquement &laquo; votre &oelig;il droit &raquo;, mais il est important de comprendre que l&rsquo;&oelig;il droit et l&rsquo;&oelig;il gauche sont capables de conduire &agrave; des r&eacute;sultats similaires. Le p&eacute;ch&eacute; peut provenir des deux yeux. La seule mention de l&rsquo;&oelig;il droit incite &agrave; r&eacute;fl&eacute;chir sur la raison de cette distinction.
</div></div>

<div class="container" style="color:black;font-size: 11px;">
          <img src="assets/img/gnanendriyalu.png"  style="width:100%;">
          <div class="io-jeeva">
            Jeeva
          </div>
          <div class="io-mind">
            L'esprit
          </div>
          <div class="io-chittam">
            Chittam
          </div>
          <div class="io-intellect">
            L'intellect
          </div>
          <div class="io-ego">
            Ego
          </div>
          <div class="so-eye">
            L'œil
          </div>
          <div class="so-nose">
            Nez
          </div>
          <div class="so-ear">
            Oreille
          </div>
          <div class="so-tongue">
            Langue
          </div>
          <div class="so-skin">
            Peau
          </div>
          <div class="ao-hands">
            Mains
          </div>
          <div class="ao-legs">
            Jambes
          </div>
          <div class="ao-mouth">
            Bouche
          </div>
          <div class="ao-anus">
            l'anus
          </div>
          <div class="ao-sex-organ">
           Organe sexuel
          </div>
        </div>

	Le corps humain pr&eacute;sente naturellement des diff&eacute;rences entre ses c&ocirc;t&eacute;s droit et gauche, souvent associ&eacute;es &agrave; la force et &agrave; la faiblesse. Dans le verset mentionn&eacute;, les deux parties droites du corps, &agrave; savoir l&rsquo;&oelig;il droit et la main droite, sont sp&eacute;cifi&eacute;es. Un autre point essentiel &agrave; consid&eacute;rer dans ce verset est la d&eacute;claration<strong>, &laquo;&nbsp;Il vaut mieux que vous perdiez une partie de votre corps plut&ocirc;t que tout votre corps soit jet&eacute; en enfer.&nbsp;&raquo; </strong>Il est crucial de reconna&icirc;tre que ni l&rsquo;&oelig;il ni la main, en tant que parties externes du corps, ne sont la source directe du p&eacute;ch&eacute;. Le principal moteur du p&eacute;ch&eacute; est la pr&eacute;sence de l&rsquo;aham (l&rsquo;ego) dans le corps. Cette perspective s&rsquo;aligne sur les enseignements trouv&eacute;s dans les premi&egrave;re et deuxi&egrave;me &eacute;critures divines. Il devient donc &eacute;vident que les composants corporels externes n&rsquo;ont aucune implication directe dans l&rsquo;acquisition ou l&rsquo;exp&eacute;rience du p&eacute;ch&eacute;. <strong>C'est le sentiment d'aham dans le corps qui am&egrave;ne le p&eacute;ch&eacute;. Le Jeeva r&eacute;sidant dans le corps exp&eacute;rimente le p&eacute;ch&eacute;. </strong>La responsabilit&eacute; de l'acquisition du karma incombe au sentiment d'aham, et il est du devoir de Jeeva d'exp&eacute;rimenter le sentiment d'aham. r&eacute;percussions dekarma. Donc, le externe &oelig;il (gnandriya) et la main (karmendriya) fonctionne sans &eacute;gard au karma.

	Certains peuvent se demander pourquoi J&eacute;sus a conseill&eacute; de arracher l&rsquo;&oelig;il et de couper la main alors que cela n&rsquo;a aucun rapport avec le karma. Notre r&eacute;ponse est que lorsque l&rsquo;&oelig;il transmet des informations externes, il atteint le buddhi (l&rsquo;intellect). Par la suite, le buddhi traite ces informations conform&eacute;ment aux gunas. Cependant, si le <strong>aham (ego) est supprim&eacute; et d&eacute;sengag&eacute; </strong>&agrave; partir de ces entr&eacute;es sensorielles, il emp&ecirc;che le p&eacute;ch&eacute; et le punya de se manifester dans les gunas que le buddhi traite ou dans la vue per&ccedil;ue par l'&oelig;il. En dissociant l&rsquo;aham int&eacute;rieur des informations fournies par l&rsquo;&oelig;il, on peut pr&eacute;venir efficacement le p&eacute;ch&eacute; associ&eacute; &agrave; l&rsquo;&oelig;il, ce qui revient &agrave; retirer l&rsquo;&oelig;il lui-m&ecirc;me. De m&ecirc;me, lorsque l&rsquo;aham n&rsquo;est pas connect&eacute; &agrave; ce qui est entendu, c&rsquo;est comme si l&rsquo;oreille &eacute;tait retir&eacute;e. Il est essentiel de reconna&icirc;tre que le p&eacute;ch&eacute; et le punya proviennent non seulement des yeux mais aussi des quatre autres sens. Compte tenu du r&ocirc;le crucial de l&rsquo;&oelig;il parmi les gnanendriyas et de la pr&eacute;dominance naturelle de l&rsquo;&oelig;il droit dans la perception visuelle, J&eacute;sus a mis l&rsquo;accent sur &laquo; arracher l&rsquo;&oelig;il droit &raquo; dans le verset. M&ecirc;me si le verset peut para&icirc;tre simple, sa signification subtile doit &ecirc;tre comprise.

	De m&ecirc;me, la mention de la main droite parmi les karmendriyas a une signification. Le karma n'&eacute;mane pas uniquement de la main droite mais aussi des actions accomplies par d'autres karmendriyas. Le karma se produit m&ecirc;me lorsque les gnanendriyas ne s'engagent pas dans des t&acirc;ches physiques et est g&eacute;n&eacute;r&eacute; par le fonctionnement des karmendriyas. Lorsque nous faisons r&eacute;f&eacute;rence aux cinq gnanendriyas, nous regroupons les deux yeux comme une seule entit&eacute;, tout comme les deux oreilles comptent pour une seule. Bien qu&rsquo;il y ait deux narines, elles sont collectivement trait&eacute;es comme un seul nez. Les composants restants sont constitu&eacute;s de la peau et de la langue. De m&ecirc;me, dans les karmendriyas, les deux mains sont consid&eacute;r&eacute;es comme une seule, et il en va de m&ecirc;me pour les deux jambes. Les trois autres sont la bouche, l'anus et l'organe sexuel et ne sont pas par paires. &Eacute;tant donn&eacute; que l&rsquo;&oelig;il droit et la main droite sont comparativement plus dominants dans ces organes appari&eacute;s, le verset distingue l&rsquo;&oelig;il droit et la main droite. L&rsquo;&oelig;il droit poss&egrave;de une vision sup&eacute;rieure et la main droite est plus polyvalente pour ex&eacute;cuter des t&acirc;ches. Dans une interpr&eacute;tation plus subtile du verset, J&eacute;sus nous a dit de <strong>supprimez aham pour &eacute;viter le p&eacute;ch&eacute; r&eacute;sultant de la vue de l'&oelig;il et des actions de la main. </strong>Cependant, il est crucial de comprendre que l&rsquo;&eacute;limination de l&rsquo;&oelig;il droit ou de la main droite n&rsquo;arr&ecirc;te pas l&rsquo;afflux de karma, car d&rsquo;autres organes corporels peuvent &eacute;galement donner lieu &agrave; du karma. Ce verset souligne l&rsquo;id&eacute;e selon laquelle aham est la source fondamentale du p&eacute;ch&eacute;, soulignant la n&eacute;cessit&eacute; de le contr&ocirc;ler. Les organes du corps ne g&eacute;n&egrave;rent pas de p&eacute;ch&eacute;, et le corps ne porte pas non plus le fardeau du p&eacute;ch&eacute;. Au lieu de cela, c&rsquo;est l&rsquo;aham qui accumule le p&eacute;ch&eacute; dans le corps. De plus, Jeevatma, une composante du corps, &eacute;prouve du mauvais et du bon karma. Le corps comprend cinq gnanendriyas, cinq karmendriyas, cinq vayus, cinq tanmatras et cinq antahkaranas, le Jeevatma faisant partie des antahkaranas. Cela repr&eacute;sente un total de vingt-cinq composants, y compris le Jeevatma dans le cadre du corps. Essentiellement, une compr&eacute;hension approfondie des m&eacute;canismes du corps peut conduire &agrave; une compr&eacute;hension plus profonde des versets de J&eacute;sus. Un vrai gnani reconna&icirc;t cette composition complexe du corps. Comme l&rsquo;a autrefois exprim&eacute; po&eacute;tiquement un spiritualiste, quiconque ne dispose pas d&rsquo;une telle connaissance ne devrait pas &ecirc;tre consid&eacute;r&eacute; comme un gnani.&nbsp;

<strong><em>Panchatatvamulanu panchikarinchaka </em></strong>
<strong><em>Manchi yatulamanna maatalanna</em></strong>
<strong><em>Kunchamandu gajamu gruddupettina chandambu </em></strong>
<strong><em>Akhila jivasanga aatmalinga.</em></strong>

  <strong>Signification</strong>: - Le terme sankhya fait r&eacute;f&eacute;rence &agrave; la connaissance globale des Pancha Bhutas, qui comprennent le Ciel, l'Air, le Feu, l'Eau et la Terre. Cette connaissance englobe la compr&eacute;hension de la fa&ccedil;on dont chacun de ces &eacute;l&eacute;ments a &eacute;t&eacute; cr&eacute;&eacute;, comment ils ont &eacute;t&eacute; divis&eacute;s en cinq composants distincts et comment ces vingt-cinq parties forment collectivement les diff&eacute;rents organes et composants du corps, visibles et invisibles. Se consid&eacute;rer comme un gnani (un connaisseur ou un individu &eacute;clair&eacute;) sans poss&eacute;der une compr&eacute;hension profonde du Sankhya du corps &eacute;quivaut &agrave; faire une fausse d&eacute;claration. Cela revient &agrave; affirmer qu&rsquo;un &eacute;l&eacute;phant a pondu un &oelig;uf sous un panier. En r&eacute;alit&eacute;, m&ecirc;me si un &eacute;l&eacute;phant &eacute;tait solidement attach&eacute; avec des cha&icirc;nes et plac&eacute; sous un panier, il ne pondrait pas d&rsquo;&oelig;ufs. Par cons&eacute;quent, l&rsquo;affirmation selon laquelle un &eacute;l&eacute;phant aurait pondu sous un panier est totalement sans fondement. Dans le m&ecirc;me ordre d'id&eacute;es, il est erron&eacute; qu'un individu se d&eacute;clare gnani lorsqu'il ne conna&icirc;t pas les d&eacute;tails complexes concernant les organes du corps. La vraie sagesse requiert une compr&eacute;hension profonde de la composition du corps, y compris de ses parties visibles et invisibles.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 14,
verse: `  <b>(13)	L'Évangile de Matthieu, chapitre 6, versets 3 et 4.</b>`,
meaning: ` <b>
(6:3) Mais lorsque vous pratiquez le dharma, ne laissez pas votre main gauche savoir ce que fait votre main droite.
<br><br>
(6:4) Afin que votre don se fasse en secret. Alors ton père, qui voit ce qui se fait en secret, te récompensera.
</b>`,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	De nombreux pr&eacute;dicateurs ont mal interpr&eacute;t&eacute; ce verset, sugg&eacute;rant qu&rsquo;il se rapporte au don. Dans certains lieux de culte, il est m&ecirc;me sugg&eacute;r&eacute; que l&rsquo;argent donn&eacute; pour le service de Dieu soit si discret que &laquo; la main droite ne sache pas ce que fait la main gauche &raquo;. En cons&eacute;quence, les contributions sont souvent cach&eacute;es ou envelopp&eacute;es dans la main avant d'&ecirc;tre donn&eacute;es. Cependant, il est important de pr&eacute;ciser que ce verset ne concerne pas le don ; il s'agit du dharma. Il existe une diff&eacute;rence significative entre le dharma et le don. <strong>Le don implique de donner aux autres, tandis que le dharma fait r&eacute;f&eacute;rence aux principes que l'on pratique. </strong>Pour vraiment comprendre comment pratiquer le dharma, il est essentiel de comprendre ce qu&rsquo;impliquent ces dharmas. Dans ce verset, il n&rsquo;y a aucune mention de don ; il met plut&ocirc;t l&rsquo;accent sur le dharma. Les dharmas de Dieu sont principalement au nombre de deux, comme indiqu&eacute; dans les &eacute;critures divines. Le troisi&egrave;me est physique. Il existe &eacute;galement d&rsquo;autres dharmas qui sont interconnect&eacute;s &agrave; ces trois dharmas principaux. Pour atteindre Dieu, une personne doit principalement se concentrer sur ces trois dharmas essentiels, tandis que d&rsquo;autres dharmas tournent autour d&rsquo;aspects de Dieu. Ces trois dharmas fondamentaux sont les pratiques cl&eacute;s pour atteindre Dieu.

	Les trois dharmas, Brahma, Karma et Bhakti Yoga, sont n&eacute;cessaires pour atteindre Dieu. Deux d&rsquo;entre eux impliquent une pratique interne avec des sentiments ou des pens&eacute;es, tandis qu&rsquo;un implique une pratique externe. La pratique des deux premiers dharmas n&rsquo;est pas reconnaissable par les autres. Cependant, lorsqu'il s'agit du troisi&egrave;me dharma, il est possible qu'il soit remarqu&eacute; par autres. C&rsquo;est pourquoi, dans le verset, J&eacute;sus fait r&eacute;f&eacute;rence &agrave; un &laquo; dharma &raquo; singulier plut&ocirc;t qu&rsquo;&agrave; des &laquo; dharmas &raquo;. Il souligne que chacun doit pratiquer un dharma qui peut &ecirc;tre remarqu&eacute; par les autres avec prudence et en secret. Il le transmet en disant : <strong>"Ne laisse pas ta main gauche savoir ce que fait ta main droite." </strong>Le message sous-jacent est que lorsque d&rsquo;autres observent votre pratique du dharma, ils peuvent la mal interpr&eacute;ter ou &ecirc;tre influenc&eacute;s n&eacute;gativement. Par cons&eacute;quent, J&eacute;sus conseille de pratiquer le dharma de mani&egrave;re discr&egrave;te et sans rechercher la reconnaissance des autres.
</div></div>
</span>`
},
{
  chapterName: "L'Évangile selon Matthieu",
  chapterNumber: 2,
  pageNumber: 15,
  verse: `  <b>(14)	L'Évangile de Matthieu, chapitre 6, verset 6.</b> `,
  meaning: `<b>
  (6:6) Mais quand tu pries, va dans ta chambre, ferme la porte et prie ton Père, qui est invisible. Alors ton père, qui voit ce qui se fait en secret, te récompensera.</b>`,
  pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Lorsque vous priez Dieu, il est essentiel de vous assurer que vos pri&egrave;res sont remplies de dharma. De simples expressions verbales sans dharma ne constituent pas une v&eacute;ritable pri&egrave;re et ne vous connecteront pas &agrave; Dieu. Par cons&eacute;quent, lorsque vous vous engagez dans une pri&egrave;re qui peut &ecirc;tre observ&eacute;e par d'autres, J&eacute;sus a dit d'entrer dans une pi&egrave;ce priv&eacute;e, de fermer la porte et d'offrir vos pri&egrave;res &agrave; l'Atma int&eacute;rieur, la pr&eacute;sence divine en vous. Atma, qui est dans le corps, est le p&egrave;re des humains. Une pri&egrave;re qui peut &ecirc;tre connue des autres doit &ecirc;tre conduite de telle mani&egrave;re que personne n'en soit conscient. Ce faisant, Atma, qui est secr&egrave;tement dans le corps, vous r&eacute;compensera. Dans la premi&egrave;re &eacute;criture divine, cette pratique est appel&eacute;e <strong>&laquo;Brahma (Grand) Yogam.&raquo;</strong>
</div></div>
  </span>`
    },
    {
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 16,
verse: `  <b>(15)	L'Évangile de Matthieu, chapitre 6, versets 7 et 8. </b> `,
meaning: `  <b>
(6:7) Lorsque vous priez, ne babillez pas comme les païens, car ils pensent qu'ils seront exaucés à cause de leurs nombreuses paroles.
<br><br>
(6:8) Ne soyez pas comme eux, car votre père sait ce dont vous avez besoin avant que vous le lui demandiez.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  De nombreuses personnes dans la société d'aujourd'hui prient avec des paroles futiles plutôt que <b></b>"Yoga"</b>, qui adhère au dharma pour atteindre Dieu. Ils supposent que Dieu comblera leurs désirs s’ils utilisent beaucoup de mots. Leur intention n’est pas de s’unir à Dieu, mais plutôt de rechercher les désirs et les bénéfices du monde. Cependant, vous ne devriez pas prier comme eux. Votre père, Atma, sait déjà tout avant même que vous le demandiez. Il sait ce qui devrait ou ne devrait pas vous être accordé. Il ne sert donc à rien de s’enquérir des avantages matériels. Votre Père, Atma, vous guide selon votre karma. Par conséquent, Atma vous fournit ce que vous avez gagné grâce à votre karma passé. Que vous le demandiez ou non, Atma accorde tout selon le karma. Atma est le Père de tous les humains, et le Saint-Esprit, le Père d'Atma, est le témoin de toutes choses.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 17,
verse: ` <b>(16)	L'Évangile de Matthieu, chapitre 7, versets 13 et 14.</b> `,
meaning: `<b>
(7:13) Entrez par la porte étroite. Car large est la porte et large est le chemin qui mènent à la perdition, et beaucoup entrent par là.
<br><br>
(7:14) Mais petite est la porte et resserré le chemin qui mène à la vie, et seuls quelques-uns les trouvent.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Il y a deux chemins dans ce monde : l&rsquo;un est le chemin du Paramatma (le Saint-Esprit) et l&rsquo;autre est le chemin de Maya. M&ecirc;me si tr&egrave;s peu de personnes recherchent Dieu, beaucoup sont attir&eacute;s par le vaste chemin de Maya. La porte d'entr&eacute;e de Moksham est &eacute;troite et difficile &agrave; traverser. Le chemin de Dieu est &eacute;galement &eacute;troit et seuls quelques-uns parviennent &agrave; le d&eacute;couvrir.

	Le verset mentionne la porte (l&rsquo;entr&eacute;e) de Dieu et la route. Le premier est l&rsquo;entr&eacute;e et le suivant est le chemin. Il n'y a que deux chemins pour tous les &ecirc;tres humains. L&rsquo;un est &eacute;troit et l&rsquo;autre large. La porte du chemin &eacute;troit est &eacute;troite, et l'entr&eacute;e du chemin large est large. L'entr&eacute;e et le chemin doivent &ecirc;tre quelques fois plus grands que celui qui entre. Ensuite, il est uniquement possible d'entrer par la porte et la route. La taille de la porte &eacute;troite et la largeur du chemin &eacute;troit sont &eacute;gales &agrave; la taille de la personne qui entre. Mais dans le deuxi&egrave;me choix, la taille de la porte large et la largeur de la route large sont 108 fois plus grandes que la personne qui entre. De cette fa&ccedil;on, il n&rsquo;y a que deux chemins dans ce monde : l&rsquo;un avec une porte 108 fois plus large et une route large, et l&rsquo;autre avec une porte et un chemin de taille exacte. Le Seigneur a compar&eacute; ces deux types de portes et de chemins &agrave; la sagesse et &agrave; l'ignorance. Le chemin de la sagesse est tr&egrave;s &eacute;troit et la taille de l&rsquo;entr&eacute;e est limit&eacute;e, ce qui rend la marche difficile. Le chemin de l&rsquo;ignorance est 108 fois plus grand et libre de tout obstacle. Le chemin de la sagesse est &eacute;troit et comporte des obstacles, mais sa destination est Paramatma. M&ecirc;me s&rsquo;il n&rsquo;y a aucun obstacle sur la large porte et sur le large chemin ignorant, cela m&egrave;ne &agrave; Satan. Le chemin de Paramatma est sans naissance ni mort, sans destruction et est toujours dans un &eacute;tat de non-changement. Le chemin de Satan comporte la naissance, la mort et la destruction et est toujours dans un &eacute;tat de changement. Bien que la voie de Paramatma soit de loin sup&eacute;rieure et que la voie de Satan soit la pire, la plupart des gens choisissent de marcher sur la voie de Satan. Lorsqu&rsquo;une personne s&rsquo;engage sur le chemin de Satan, tous ses associ&eacute;s la soutiennent et ne lui causent aucun probl&egrave;me. Il n'y aura pas de difficult&eacute;s financi&egrave;res et la vie sera confortable. Cependant, lorsqu&rsquo;une personne choisit la voie de la sagesse, ses proches et son conjoint peuvent devenir des ennemis et faire obstacle &agrave; son voyage. La vie peut devenir difficile. Par cons&eacute;quent, tr&egrave;s peu, voire aucun, parmi des millions de personnes choisissent la voie de la sagesse.

	Beaucoup de gens voyagent sur le chemin vaste et ignorant, qui ne pr&eacute;sente ni obstacle ni opposition. &Eacute;tonnamment, ils ignorent l&rsquo;existence d&rsquo;un passage &eacute;troit menant &agrave; Moksham et au P&egrave;re du Paraloka. Dans la Bhagavad-Gita, Krishna d&eacute;clare que m&ecirc;me un seul parmi des milliers de personnes ne souhaite pas parcourir le chemin &eacute;troit. Il est rare que quelqu'un y entre, et encore plus rare arrive-t-il &agrave; destination en raison des obstacles pos&eacute;s par Maya. Krishna, dans la Bhagavad-Gita, souligne en outre que la personne qui surmonte ces obstacles et atteint la destination est consid&eacute;r&eacute;e comme &laquo; la personne b&eacute;nie &raquo; et qu'un tel individu s'unira au Paramatma &eacute;ternel. Krishna et J&eacute;sus repr&eacute;sentent le Paramatma. Krishna a &eacute;lucid&eacute; les chemins de la sagesse et de l'ignorance dans la Bhagavad-Gita vers la fin du Dvapara Yuga, tandis que J&eacute;sus a transmis un message similaire dans le texte sacr&eacute;, trois mille ans apr&egrave;s le d&eacute;but du Kali Yuga. Ceux qui comprennent les chemins de la sagesse et de l'ignorance expliqu&eacute;s par Sri Krishna et J&eacute;sus-Christ devraient s'engager sur le chemin sugg&eacute;r&eacute; de la sagesse, en persistant malgr&eacute; tous les obstacles, jusqu'&agrave; ce qu'ils atteignent finalement Paramatma, qui est le Moksham &eacute;ternel.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 18,
verse: ` <b>(17)	L'Évangile de Matthieu, chapitre 7, versets 7 et 8.</b>
`,
meaning: `
<b>
(7:7) Demandez et il vous sera donné ; cherchez et vous trouverez ; frappez et la porte vous sera ouverte.<br><br>
(7:8) Car quiconque demande reçoit ; celui qui cherche trouve ; et à celui qui frappe, la porte s'ouvrira.
</b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dans ce verset, trois verbes essentiels :<strong>demander, chercher et frapper</strong>. J&eacute;sus nous a demand&eacute; d'accomplir ces trois choses dans un contexte spirituel. Les enseignements du Seigneur ne tournent pas autour de questions mondaines, contrairement &agrave; beaucoup d&rsquo;autres. Malheureusement, beaucoup ont mal compris ce verset, l&rsquo;interpr&eacute;tant comme un appel &agrave; des b&eacute;n&eacute;dictions mat&eacute;rielles. Par cons&eacute;quent, les gens ont commenc&eacute; &agrave; demander des faveurs terrestres au Seigneur, contrairement &agrave; son message original. M&ecirc;me si les gens lisent la Sainte Bible, Satan est entr&eacute; dans leur c&oelig;ur, obscurcissant leur compr&eacute;hension des enseignements de J&eacute;sus et les conduisant &agrave; rechercher des d&eacute;sirs mat&eacute;riels. L&rsquo;intention de l&rsquo;homme n&rsquo;est pas de transgresser la parole de Dieu, mais Satan capitalise sur leur manque de compr&eacute;hension, les trompant en leur faisant croire qu&rsquo;ils ne violent pas les commandements divins. En r&eacute;alit&eacute;, cela les am&egrave;ne &agrave; transgresser la parole de Dieu. Satan, une cr&eacute;ation de Dieu, existe partout o&ugrave; la pr&eacute;sence de Dieu se fait sentir. Partout o&ugrave; demeure la parole de Dieu, l&rsquo;influence de Satan peut &eacute;galement &ecirc;tre pr&eacute;sente. Par cons&eacute;quent, il est crucial de comprendre diligemment les versets de Dieu et de nous prot&eacute;ger contre l&rsquo;influence de Satan lors de l&rsquo;interpr&eacute;tation des &Eacute;critures.

	Nous devrions demander &agrave; Dieu, chercher Dieu et frapper &agrave; la porte de Dieu. C'est la voie de Dieu. Si vous demandez autre chose ou cherchez autre chose, ce sera la voie de Satan (Maya). Ceux qui suivent le chemin de Dieu recherchent la sagesse de Dieu. Vous vous posez peut-&ecirc;tre de nombreuses questions&nbsp;: comment va Dieu&nbsp;? Comment pouvons-nous atteindre Dieu ? Comment pouvons-nous comprendre tous les d&eacute;tails concernant Dieu ? Ne pr&eacute;sumez pas que personne sur Terre ne peut r&eacute;pondre &agrave; ces questions. Dieu vient et vous fournit les r&eacute;ponses que vous cherchez lorsque les humains sur Terre sont incapables d&rsquo;acc&eacute;der aux informations de Dieu &agrave; cause de l&rsquo;influence de Satan. Vous pouvez trouver des r&eacute;ponses &agrave; vos questions, mais vous ne savez peut-&ecirc;tre pas qui fournit ces r&eacute;ponses. M&ecirc;me lorsque Dieu est n&eacute; sur Terre et offre des r&eacute;ponses, nous le percevons souvent comme un &ecirc;tre humain ordinaire plut&ocirc;t que comme Dieu. Si vous le demandez, vous obtiendrez une sagesse compl&egrave;te. Si vous cherchez, vous d&eacute;couvrirez que Dieu est venu sur Terre sous forme humaine. Lorsque Dieu s&rsquo;incarne sur Terre, Il ne pr&eacute;tend pas &ecirc;tre Dieu et ne se r&eacute;v&egrave;le &agrave; personne. C'est Sa r&egrave;gle. Selon cette r&egrave;gle, celui qui ne cherche pas ne trouvera pas, mais ceux qui cherchent Le reconna&icirc;tront. Puisque seuls quelques-uns ont demand&eacute; la sagesse lorsque le Seigneur J&eacute;sus &eacute;tait sur Terre, il a partag&eacute; sa sagesse avec eux. Parce qu&rsquo;il y avait si peu de chercheurs, Il n&rsquo;est apparu comme Dieu &agrave; personne ; pour tous, il semblait &ecirc;tre un homme ordinaire. Ses douze disciples le percevaient &eacute;galement comme un pr&eacute;dicateur et ignoraient que Paramatma, qui englobait l'univers entier, s'&eacute;tait incarn&eacute; en J&eacute;sus. Il s&rsquo;est comport&eacute; intentionnellement d&rsquo;une mani&egrave;re qui a emp&ecirc;ch&eacute; quiconque de le reconna&icirc;tre comme Dieu.

	Le roi de Paraloka, Paramatma, a lav&eacute; les pieds de ses disciples pendant son s&eacute;jour sur Terre en tant qu'homme. Cet acte humble a rendu difficile pour ses disciples et les autres de le reconna&icirc;tre. Malheureusement, les gens n&rsquo;ont pas r&eacute;ussi &agrave; l&rsquo;identifier comme &eacute;tant le Seigneur et l&rsquo;ont trait&eacute; de mani&egrave;re irrespectueuse, le consid&eacute;rant comme un homme ordinaire. Il a endur&eacute; des crachats au visage, une couronne d'&eacute;pines sur la t&ecirc;te, des coups et la crucifixion. M&ecirc;me lorsque J&eacute;sus mourut et ressuscita avec le m&ecirc;me corps le troisi&egrave;me jour, certains de ses disciples le prirent pour un diable. Cela montre que ses disciples &eacute;taient curieux mais pas vraiment en qu&ecirc;te.

	Comme on dit<strong>, "voir vaut mieux qu'&eacute;couter", </strong>ceux qui l&rsquo;ont vu en personne d&eacute;tenaient un statut plus &eacute;lev&eacute; que ceux qui ont simplement entendu ses enseignements. Alors que les gens avaient l&rsquo;opportunit&eacute; de voir le Dieu du monde entier sous la forme de J&eacute;sus, c&rsquo;&eacute;tait comme s&rsquo;ils ne l&rsquo;avaient pas vraiment vu. Dans ce contexte, le Seigneur a d&eacute;crit ses disciples comme &eacute;tant aveugles, bien qu&rsquo;ils aient la vue physique. Pour &eacute;viter un tel aveuglement, il faut rechercher Dieu activement. Comme le sugg&egrave;re le verset, quiconque demande re&ccedil;oit, et quiconque cherche trouve. Par cons&eacute;quent, celui qui demande re&ccedil;oit les paroles de Dieu, celui qui cherche re&ccedil;oit la forme de Dieu. Celui qui voit est plus grand que celui qui &eacute;coute et celui qui exp&eacute;rimente est plus grand que celui qui voit. Selon ce principe, celui qui frappe acc&egrave;de au royaume de Moksham. Frapper, dans ce contexte, ne consiste pas &agrave; frapper &agrave; la porte d&rsquo;un voisin ou d&rsquo;un &eacute;tranger mais plut&ocirc;t &agrave; chercher &agrave; entrer dans le royaume de Moksham et aux portes du royaume de Paraloka. Ceux qui recherchent Moksham s'unissent &agrave; Paramatma et font l'exp&eacute;rience de sa v&eacute;ritable essence. Ceux qui sont habitu&eacute;s &agrave; demander et &agrave; chercher devraient absolument essayer de s&rsquo;unir &agrave; Dieu. Cela signifie qu&rsquo;ils deviendront certainement un heurtoir. Gr&acirc;ce aux processus consistant &agrave; demander, chercher et frapper, n&rsquo;importe qui peut entrer en union avec Dieu. Ainsi, ces trois qualit&eacute;s essentielles devraient &ecirc;tre cultiv&eacute;es par chaque individu, comme le souligne le verset susmentionn&eacute;. En suivant les conseils de Dieu, celui qui demande acquiert la sagesse, celui qui cherche trouve Bhagavan et celui qui frappe acc&egrave;de &agrave; la maison de Moksham.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 19,
verse: `<b>(18)	L'Évangile de Matthieu, chapitre 7, verset 15.</b>`,
meaning: ` <b>
(7:15) Faites attention aux faux prophètes. Ils viennent à vous déguisés en mouton, mais intérieurement, ce sont des loups féroces.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Les &ecirc;tres humains ont besoin d&rsquo;&ecirc;tre guid&eacute;s pour trouver leur chemin vers Dieu, et ces conseils viennent souvent des autres. Pour marcher sur le chemin de Dieu, une personne doit placer sa confiance en une autre. Ceux qui suivent ce chemin spirituel comptent sur leurs guides pour leur montrer le chemin. Le parcours du suiveur d&eacute;pend du guide, car il doit suivre le chemin que le guide &eacute;claire. Cela rend le suiveur d&eacute;pendant du guide, et si le guide fournit la bonne direction, le suiveur progressera correctement. A l&rsquo;inverse, si le guide propose une mauvaise direction, le suiveur risque de s&rsquo;&eacute;carter du chemin. La destination finale d'une personne ordinaire est fortement influenc&eacute;e par le guide ou le gourou choisi. Une fois qu&rsquo;une personne est reconnue comme gourou, elle a tendance &agrave; croire et &agrave; faire confiance &agrave; ses conseils tout au long de sa vie. Par cons&eacute;quent, une grande prudence doit &ecirc;tre exerc&eacute;e lors de la s&eacute;lection d&rsquo;une personne comme gourou ou guide. Dans le verset mentionn&eacute; ci-dessus, le Seigneur a averti : <strong>&laquo; M&eacute;fiez-vous des faux proph&egrave;tes. &raquo; </strong>Il a pr&eacute;venu que certains gourous contemporains pourraient ne pas &ecirc;tre de v&eacute;ritables guides. Ils peuvent se pr&eacute;senter d&eacute;guis&eacute;s en mouton, pr&eacute;tendant &ecirc;tre de v&eacute;ritables gourous, mais en r&eacute;alit&eacute;, ils sont comme des loups f&eacute;roces d&eacute;guis&eacute;s. Selon les enseignements de J&eacute;sus, de nombreuses personnes peuvent s'habiller et se comporter comme des gourous, utilisant m&ecirc;me des mots tels que Dieu, sagesse et Atma dans leur discours. Cependant, leur vraie nature ne vous rapproche peut-&ecirc;tre pas de Dieu. Tout comme un loup cach&eacute; sous la peau d&rsquo;un mouton n&rsquo;est pas un mouton, ces individus, malgr&eacute; leur apparence, ne sont pas de v&eacute;ritables gourous. Par cons&eacute;quent, le conseil du Seigneur est d&rsquo;&ecirc;tre vigilant et prudent &agrave; l&rsquo;&eacute;gard des faux proph&egrave;tes afin d&rsquo;&eacute;viter de perdre sa vie en suivant ceux qui n&rsquo;offrent pas de v&eacute;ritable direction.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 20,
verse: `<b>(19)	 L'Évangile de Matthieu, chapitre 7, verset 21.</b>`,
meaning: ` <b>
(7:21) Tous ceux qui me disent : « Seigneur, Seigneur » n’entreront pas dans le royaume de paraloka, mais seulement celui qui fait la volonté de mon Père qui est en paraloka. </b>
`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le Seigneur J&eacute;sus &eacute;manait de Paramatma. J&eacute;sus est Bhagavan incarn&eacute; sous forme humaine, tandis que Paramatma, le P&egrave;re de Paraloka, est Dieu dans un &eacute;tat sans forme, omnipr&eacute;sent dans tout l'univers. Lorsque Bhagavan, incarn&eacute; sous la forme de J&eacute;sus, parcourait la Terre, certains ont reconnu sa magnificence divine et l'ont v&eacute;n&eacute;r&eacute; pour leurs d&eacute;sirs mat&eacute;riels. Ils l&rsquo;appelaient &laquo; Seigneur, Seigneur &raquo;, cherchant des gains personnels. Cependant, s&rsquo;approcher de la forme visible du Seigneur et le qualifier de grand sans atteindre la sagesse divine est insuffisant. Bien que celui sous forme visible et celui sous forme invisible soient identiques, il existe des limites inh&eacute;rentes &agrave; la forme visible, alors que le P&egrave;re invisible de Paraloka est illimit&eacute;. Le Paramatma sans limites prend parfois une forme tangible pour transmettre ses enseignements divins &agrave; l'humanit&eacute;. J&eacute;sus est la forme choisie par Paramatma &agrave; cet effet. Alors que le Seigneur s'est pr&eacute;sent&eacute; &agrave; nous comme J&eacute;sus, le P&egrave;re de Paraloka a parl&eacute; &agrave; travers les paroles de J&eacute;sus. Dieu s'est incarn&eacute; en J&eacute;sus pour proclamer ses dharmas.

	Le simple fait d&rsquo;appeler J&eacute;sus &laquo; Seigneur &raquo; sans mettre en pratique la sagesse de Dieu et sans s&rsquo;aligner sur la volont&eacute; du P&egrave;re de Paraloka n&rsquo;apporte aucun b&eacute;n&eacute;fice r&eacute;el. Celui qui pratique activement la sagesse de Dieu est plus &eacute;lev&eacute; que celui qui prononce simplement le nom du Seigneur. Celui qui respecte les paroles de Dieu est plus important que celui qui se contente de saluer Dieu. Une personne qui vit conform&eacute;ment aux commandements de Dieu suit v&eacute;ritablement la volont&eacute; de Dieu, et ces individus sont destin&eacute;s &agrave; Paraloka (moksham). Dieu ne recherche pas la flatterie et n'y c&egrave;de pas ; Dieu est plut&ocirc;t satisfait de ceux qui embrassent et appliquent sa sagesse. Il est donc plus significatif de mettre en pratique les enseignements de Dieu plut&ocirc;t que de simplement louer. Dieu poss&egrave;de une compr&eacute;hension des pens&eacute;es et des intentions de tous les &ecirc;tres et peut faire la distinction entre ceux qui comprennent vraiment et vivent selon Sa sagesse et ceux qui ne la comprennent pas. Ceux qui comprennent et vivent selon la sagesse de Dieu rev&ecirc;tent une importance particuli&egrave;re pour Dieu. Ceux qui comprennent mal ou n&eacute;gligent la sagesse et n&rsquo;agissent pas conform&eacute;ment &agrave; Dieu ne peuvent pas atteindre Moksham.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 21,
verse: ` <b>(20)	L'Évangile de Matthieu, chapitre 7, versets 22 et 23. </b>`,
meaning: ` <b>
(7:22) Beaucoup me diront ce jour-là : « Seigneur, Seigneur, n’avons-nous pas prophétisé en ton nom et en ton nom chassé les démons et, en ton nom n’avons-nous pas accompli de nombreux miracles ?
<br><br>
(7:23) Alors je leur dirai clairement : « Je ne vous ai jamais connu. Loin de moi, vous les malfaiteurs ! »</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Certaines personnes qui reconnaissent la grandeur du Seigneur (J&eacute;sus) peuvent n&eacute;gliger Paramatma, le dirigeant de Paraloka, et se concentrer uniquement sur la louange de J&eacute;sus. Paramatma, le P&egrave;re du monde entier, a envoy&eacute; une partie de Lui-m&ecirc;me sous la forme de J&eacute;sus. J&eacute;sus poss&egrave;de autant de pouvoir que Paramatma. Louer le Seigneur J&eacute;sus revient &agrave; louer le P&egrave;re, Paramatma. Beaucoup de gens louent le Seigneur, mais il y en a qui le font par des motivations &eacute;go&iuml;stes, tandis que d&rsquo;autres sont altruistes dans leur d&eacute;votion &agrave; Dieu. Le P&egrave;re de Paraloka a transmis son message &agrave; travers J&eacute;sus, qu'il a envoy&eacute;, &agrave; de nombreuses reprises. Beaucoup connaissent les paroles du P&egrave;re Supr&ecirc;me mais ne comprennent pas sa vraie nature. On pourrait affirmer que m&ecirc;me un seul parmi les millions de personnes qui lisent les paroles du P&egrave;re, les &eacute;coutent et offrent leurs louanges ne comprend vraiment l&rsquo;essence m&ecirc;me du P&egrave;re. Le Seigneur a proclam&eacute; les commandements, la sagesse et les versets de Dieu. Le Seigneur visible (J&eacute;sus) sert de symbole du Dieu invisible, et Il est l&rsquo;image et le repr&eacute;sentant de Dieu. Ceux qui ne parviennent pas &agrave; saisir la sagesse et les commandements contenus dans les versets ne peuvent pas pleinement b&eacute;n&eacute;ficier de leurs louanges au Seigneur.

	L&rsquo;humanit&eacute; ne peut que tirer un certain profit de la louange du Seigneur comme &eacute;tant supr&ecirc;me. Il est imp&eacute;ratif de reconna&icirc;tre que le b&eacute;n&eacute;fice ultime pour une personne est d&rsquo;atteindre la paraloka. La r&eacute;alisation la plus significative que l&rsquo;on puisse atteindre est la paraloka. Il est crucial de comprendre que le but ultime de chacun est de se lib&eacute;rer du monde de Satan (Maya) et d&rsquo;entrer dans le royaume de Dieu. Le gain ultime et le plus significatif pour l&rsquo;humanit&eacute; est de s&rsquo;unir &agrave; la paraloka de Dieu sans jamais retourner dans ce monde o&ugrave; r&eacute;side Satan. Il n'y a rien de plus pr&eacute;cieux pour une personne que d'avoir acc&egrave;s au paraloka. Pour r&eacute;colter des b&eacute;n&eacute;fices aussi &eacute;normes et &eacute;viter d&rsquo;&ecirc;tre m&ecirc;l&eacute; &agrave; Satan, il faut pleinement saisir la sagesse de Dieu. Ceux qui n&rsquo;approfondissent pas la profonde sagesse contenue dans les versets de J&eacute;sus et dans ses commandements ne seront que des d&eacute;vots partiels plut&ocirc;t que des croyants complets. Bienheureux est celui qui suit tous les enseignements du Seigneur sans d&eacute;passer les limites de ses commandements. M&ecirc;me ceux qui ne comprennent pas pleinement la sagesse de Paramatma ne sont pas des croyants complets, bien qu&rsquo;ils soient de grands pr&eacute;dicateurs et de fervents louanges du Seigneur. Il ne s&rsquo;agit pas de rejeter de tels individus, mais de souligner qu&rsquo;ils ont foi en Dieu sans pour autant &ecirc;tre des croyants complets. Le doute r&eacute;side en chaque personne jusqu&rsquo;&agrave; ce qu&rsquo;elle comprenne compl&egrave;tement la sagesse de Dieu, m&ecirc;me si elle n&rsquo;est peut-&ecirc;tre pas apparente maintenant. Les grands pr&eacute;dicateurs qui croient &ecirc;tre des d&eacute;vots sans r&eacute;serve du Seigneur peuvent encore avoir des doutes jusqu&rsquo;&agrave; ce qu&rsquo;ils acqui&egrave;rent une compr&eacute;hension approfondie de la sagesse de Dieu. C&rsquo;est pourquoi le Seigneur a proclam&eacute; : <strong>&laquo;&nbsp;Celui qui me confie son manas est sup&eacute;rieur &agrave; celui qui me flatte.&nbsp;&raquo; </strong>Une foi compl&egrave;te requiert la pleine sagesse de Dieu.

	On peut dire que ceux qui ne comprennent pas que J&eacute;sus et Dieu ne font qu&rsquo;un et ceux qui croient que J&eacute;sus reviendra sous la forme de J&eacute;sus ne comprennent pas l&rsquo;immensit&eacute; de Dieu. Celui qui ne r&eacute;alise pas que Dieu est &eacute;ternel, sans commencement ni fin, que Dieu est descendu sur Terre &agrave; de nombreuses reprises et qu&rsquo;Il reviendra chaque fois que cela sera n&eacute;cessaire, manque de sagesse totale. Ceux qui ont une sagesse parfaite peuvent discerner la venue de Dieu, tandis que ceux qui manquent de sagesse absolue ne peuvent pas reconna&icirc;tre sa venue. M&ecirc;me lorsque Dieu a pris une forme humaine et s&rsquo;est tenu devant une personne, celui qui ne voit que son apparence ext&eacute;rieure et ses actions peut ne pas reconna&icirc;tre Dieu. Lorsque le Seigneur vient incognito, certains chr&eacute;tiens peuvent ne pas le reconna&icirc;tre et ignorer sa pr&eacute;sence, au point m&ecirc;me de tenter de le baptiser.

	Sur Terre, les croyants valent mieux que les non-croyants, et les croyants absolus surpassent les croyants ordinaires. Seuls les croyants absolus peuvent entrer dans la paraloka. Dieu ne les accepte que lorsqu&rsquo;ils deviennent des croyants absolus. En entrant dans la paraloka, Dieu ne reconna&icirc;t que les gnanis absolus. Si quelqu&rsquo;un n&rsquo;est pas un gnani absolu, Dieu dira : &laquo; Je ne le connais pas &raquo;. Il faut donc s&rsquo;efforcer d&rsquo;atteindre la sagesse absolue. Beaucoup aspirent &agrave; se rapprocher de Dieu et entrez dans son royaume. Cependant, comme ils sont sous la domination de Satan (Maya), Satan d&eacute;ploie tous ses efforts pour les emp&ecirc;cher d&rsquo;atteindre Dieu et de devenir des gnanis complets. M&ecirc;me les pr&eacute;dicateurs qui sont conscients de l&rsquo;opposition de Satan &agrave; Dieu ne comprennent peut-&ecirc;tre pas pleinement l&rsquo;&eacute;tendue de l&rsquo;influence de Satan. Ceux qui n&rsquo;ont pas une compr&eacute;hension globale des activit&eacute;s de Satan peuvent, par inadvertance, suivre le chemin de Satan tout en croyant qu&rsquo;ils sont sur le chemin qui m&egrave;ne &agrave; Dieu. C&rsquo;est pourquoi Dieu a d&eacute;clar&eacute; que les pr&eacute;dicateurs qui supposent qu&rsquo;ils sont proches de Dieu risquent de ne pas entrer dans sa pr&eacute;sence.

	Dans le verset, J&eacute;sus dit : <strong>&laquo; M&ecirc;me si vous chassez les d&eacute;mons, si vous accomplissez des miracles en mon nom et si vous gu&eacute;rissez les malades en mon nom, vous &ecirc;tes des malfaiteurs. &Eacute;loigne-toi de moi.</strong>

	Dans la soci&eacute;t&eacute; actuelle, les gens consid&egrave;rent souvent ceux qui accomplissent des miracles au nom de Dieu comme de v&eacute;ritables d&eacute;vots, les croyant proches du Seigneur. M&ecirc;me ceux qui font eux-m&ecirc;mes des merveilles peuvent penser qu&rsquo;ils sont en &eacute;troite communion avec le Seigneur. Cette perception surgit parce qu&rsquo;ils voient la gloire du Seigneur manifest&eacute;e &agrave; travers leurs actions. Lorsqu&rsquo;ils imposent les mains &agrave; un patient tout en r&eacute;citant les paroles de Dieu et que le patient exp&eacute;rimente la gu&eacute;rison, ils attribuent cela aux miracles du Seigneur qui se produisent &agrave; travers eux. S&rsquo;il est vrai que des miracles peuvent effectivement se produire, faisant conna&icirc;tre la pr&eacute;sence du Seigneur &agrave; tous, ils n&eacute;gligent pourquoi le Seigneur a exprim&eacute; son m&eacute;contentement face &agrave; de telles actions, comme mentionn&eacute; dans le verset ci-dessus. Ce faisant, ils oublient les paroles du Seigneur. La question se pose : Pourquoi le Seigneur les a-t-il r&eacute;primand&eacute;s si ce qu&rsquo;ils faisaient semblait &ecirc;tre une bonne chose et une manifestation des miracles du Seigneur ? Pourquoi J&eacute;sus a-t-il d&eacute;clar&eacute; qu&rsquo;ils marchaient sur un mauvais chemin ? Si le Seigneur l&rsquo;a dit, c&rsquo;est sans aucun doute vrai.

	L&rsquo;incroyable v&eacute;rit&eacute; devient &eacute;vidente lorsque vous r&eacute;fl&eacute;chissez &agrave; ce que signifie la v&eacute;rit&eacute; dans les enseignements du Seigneur. C&rsquo;est une grave erreur que de ne pas discerner si les miracles accomplis au nom du Seigneur sont de Dieu ou de Satan. Beaucoup de ceux qui apparaissent comme des pr&eacute;dicateurs et des gourous aux yeux du peuple croient qu&rsquo;ils sont sur le chemin de Dieu alors qu&rsquo;ils sont en fait sur le chemin de Maya. Cette prise de conscience peut &ecirc;tre assez p&eacute;nible. Il est possible que de nombreux pr&eacute;dicateurs soient contrari&eacute;s par mes paroles, mais rappelez-vous que ce ne sont pas mes paroles ; ce sont les paroles de Dieu. Comme indiqu&eacute; dans l'&Eacute;vangile de Matthieu 7&nbsp;:&nbsp;22, le Seigneur a dit&nbsp;: <strong>&laquo; C&rsquo;est mal. Je ne t'ai jamais connu. </strong>Nous devons reconna&icirc;tre que le m&ecirc;me Maya (Satan) qui a tent&eacute; le Seigneur dans le pass&eacute; tente encore de nous tromper aujourd'hui. Comprendre Maya (Satan) est &eacute;galement une partie essentielle de la sagesse divine. Sans reconna&icirc;tre Maya, nous pouvons suivre par erreur Satan, qui prend l&rsquo;apparence de Dieu, au lieu de suivre Dieu. Aujourd&rsquo;hui, de nombreux orateurs, gourous et pr&eacute;dicateurs font la m&ecirc;me erreur. Satan (Maya), qui peut prendre de nombreuses formes, accomplit des tours et des miracles au nom de Dieu. Ceux qui ignorent que cela ne pla&icirc;t pas &agrave; Dieu ne peuvent pas progresser. La triste v&eacute;rit&eacute; est que de nombreuses personnes sur Terre suivent aveugl&eacute;ment Satan, croyant qu&rsquo;il s&rsquo;agit de Dieu. Ils ignorent qu&rsquo;ils suivent le chemin de Satan et non celui de Dieu. Il peut sembler presque impossible pour eux de se lib&eacute;rer de l&rsquo;influence de Satan. M&ecirc;me si Dieu lui-m&ecirc;me transmettait cette v&eacute;rit&eacute;, ils pourraient critiquer Dieu mais rester inchang&eacute;s. Pour eux, Maya appara&icirc;t comme Dieu, et Dieu appara&icirc;t comme un simple &ecirc;tre humain.

	Ceux qui aspirent &agrave; entrer dans le royaume de Dieu et ont foi en Dieu devraient r&eacute;fl&eacute;chir au verset mentionn&eacute; pr&eacute;c&eacute;demment et se demander pourquoi Dieu a d&eacute;sapprouv&eacute; et qualifi&eacute; de malfaiteurs ceux qui accomplissent des miracles. Consid&eacute;rez qui est favoris&eacute; par Dieu et qui ne l'est pas. Il est essentiel de vous familiariser avec les versets, la sagesse et les commandements de Dieu. Vous devez pleinement embrasser la sagesse de Dieu sans transgresser ses commandements, en les reconnaissant comme les limites fix&eacute;es autour de vous. Gardez &agrave; l&rsquo;esprit que le royaume de Dieu se trouve &agrave; l&rsquo;int&eacute;rieur de ces fronti&egrave;res, tandis que la domination de Satan se situe &agrave; l&rsquo;ext&eacute;rieur. Restez vigilant face &agrave; l&rsquo;influence de Satan, en vous rappelant les limites trac&eacute;es par J&eacute;sus dans ses saintes &Eacute;critures pour toute l&rsquo;humanit&eacute;.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 22,
verse: ` <b>(21) L'Évangile de Matthieu, chapitre 8, verset 22. </b>`,
meaning: ` <b>
(8:22) Jésus lui dit : « Suis-moi et laisse les morts enterrer leurs propres morts. »</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Le verset mentionné ci-dessus était la réponse de Jésus lorsqu’un de ses disciples lui dit : « Seigneur, laisse-moi d’abord aller enterrer mon père. » Les paroles de Jésus peuvent sembler floues à certains, ce qui soulève des questions sur leur signification. Lorsque nous considérons cela, nous pouvons classer l’humanité en deux catégories : ceux qui possèdent la sagesse et la pratiquent comme yogam atteindront la vie éternelle (moksham). Ces personnes sont très peu nombreuses. Ceux qui sont éligibles à la vie éternelle ne seront pas comptés parmi les morts. Ceux qui atteignent la vie éternelle ne connaîtront jamais vraiment la mort et on peut dire qu’ils ont atteint Moksham. D’un autre côté, ceux qui sont ignorants ou ne s’engagent pas dans la pratique du yogam peuvent être considérés comme spirituellement morts. De tels individus ne possèdent pas la vie éternelle et finiront par affronter la mort. On peut dire qu’ils sont destinés à connaître la mort à un moment donné. Les ignorants sont souvent enterrés par d’autres ignorants. Par conséquent, la déclaration de Jésus : « Que les morts enterrent les morts » véhicule l’idée que ceux qui manquent de sagesse sont appelés les morts spirituels. Il souligne que ceux qui possèdent la sagesse ne doivent pas s’associer aux ignorants. C’est pourquoi Jésus dit au disciple : « Tu comprends la sagesse et suis-moi. Laissons les ignorants enterrer les ignorants.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 23,
verse: ` <b>(22)	L'Évangile de Matthieu, chapitre 9, versets 12 et 13.</b>`,
meaning: ` <b>
(9:12) En entendant cela, Jésus dit : « Ce ne sont pas les bien portants qui ont besoin d’un médecin, mais les malades. »
<br><br>
(9:13) Car je ne suis pas venu appeler des justes, mais des pécheurs.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Comme nous l’avons vu précédemment, Dieu descend occasionnellement sur Terre pour établir des dharmas. De la même manière, Jésus a déclaré qu’il était venu guider les ignorants sur le chemin de la sagesse. Il a mentionné qu’Il est venu appeler les pécheurs, pas les justes. Ici, les « pécheurs » représentent ceux qui sont ignorants et manquent de sagesse, tandis que les « justes » désignent ceux qui possèdent la sagesse. Dieu assume le rôle d'un médecin spirituel, souvent appelé prédicateur, pour guérir ceux qui souffrent de l'ignorance. Par la médecine de la sagesse, Il guérit les malades spirituels. Ceux qui sont déjà spirituellement en bonne santé et dotés de sagesse n’ont pas besoin des conseils d’un tel médecin ou prédicateur. Lorsque la maladie de l’ignorance se propage à l’échelle mondiale, affectant tous les peuples, Dieu s’incarne pour fournir sa médecine divine des dharmas et transformer les ignorants en gnanis (individus sages). Si Dieu n'assumait pas ce rôle de médecin spirituel, le monde entier serait en proie à l'ignorance. Par conséquent, Dieu s’incarne pour révéler sa sagesse à ceux qui en ont besoin.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 24,
verse: ` <b>(23) L'Évangile de Matthieu, chapitre 8, versets 23, 24, 25 et 26. </b>`,
meaning: `<b>
(8:23) Puis il monta dans la barque et ses disciples le suivirent.
<br><br>
(8:24) Soudain, une violente tempête s'éleva sur le lac, de sorte que les vagues balayèrent le bateau. Mais Jésus dormait.
<br><br>
(8:25) Les disciples allèrent le réveiller en disant : « Seigneur, sauve-nous ! Nous allons nous noyer !
<br><br>
(8:26) Il répondit : « Toi de peu de foi, pourquoi as-tu si peur ? » Puis il se leva et réprimanda les vents et les vagues, et tout fut complètement calme. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cet &eacute;v&eacute;nement est un incident significatif de la vie de J&eacute;sus. M&ecirc;me si J&eacute;sus n&rsquo;a peut-&ecirc;tre pas directement enseign&eacute; de le&ccedil;on ici, nous pouvons apprendre beaucoup de cet &eacute;v&eacute;nement. La mer et la temp&ecirc;te sont li&eacute;es &agrave; Prakruti. L&rsquo;air dans la temp&ecirc;te et l&rsquo;eau dans la mer font partie int&eacute;grante de Prakruti. Prakruti est sous le contr&ocirc;le exclusif de Paramatma, l'entit&eacute; divine supr&ecirc;me. Prakruti se compose de cinq &eacute;l&eacute;ments : le Ciel, l'Air, le Feu, l'Eau et la Terre. M&ecirc;me Atma, qui poss&egrave;de la divinit&eacute; suivant Paramatma, n'a aucune autorit&eacute; sur Prakruti. L'Atma &agrave; l'int&eacute;rieur du corps gouverne uniquement le Chara (Changeable) Prakruti, qui existe sous la forme du corps. Il n&rsquo;exerce aucune autorit&eacute; sur l&rsquo;Achara (Immuable) Prakruti. Prakruti ne tient pas compte de l'Atma ; il ob&eacute;it uniquement au commandement de Paramatma. Prakruti est compos&eacute; de cinq bhootas, qui peuvent &ecirc;tre compris comme des forces vitales ou Jeevas. Ces cinq Jeevas repr&eacute;sentent les cinq &eacute;l&eacute;ments de Prakruti et, en tant que tels, ils adh&egrave;rent &agrave; la parole divine de Dieu. Ils suivent les instructions de Paramatma.

	Parce que J&eacute;sus &eacute;tait le Saint-Esprit qui est apparu comme un homme ordinaire, la temp&ecirc;te sur la mer a cess&eacute; sur son ordre. Seul Dieu peut contr&ocirc;ler Prakruti, J&eacute;sus peut donc &ecirc;tre consid&eacute;r&eacute; comme l&rsquo;incarnation de Dieu. Il est mentionn&eacute; dans les versets 7, 8 et 9 du Gnana Yoga de la Bhagavad-Gita, la premi&egrave;re &eacute;criture divine, que Dieu descend sur Terre sous forme humaine pour transmettre sa sagesse. Lorsque Dieu prend une forme humaine, il ressemble ext&eacute;rieurement &agrave; un homme ordinaire, m&ecirc;me s&rsquo;il n&rsquo;est pas un individu ordinaire. Parce qu&rsquo;Il appara&icirc;t comme un homme ordinaire, L&rsquo;identifier est un d&eacute;fi. Cependant, il existe deux indicateurs cl&eacute;s pour le reconna&icirc;tre&nbsp;: <strong>1) La pr&eacute;sence de l&rsquo;incarnation de Dieu partout o&ugrave; les dharmas divins sont enseign&eacute;s. 2) La capacit&eacute; de commander Prakruti peut &ecirc;tre reconnue comme l&rsquo;incarnation de Dieu. </strong>L&rsquo;apaisement de la mer sur l&rsquo;ordre de J&eacute;sus est une manifestation de cette puissance divine, d&eacute;montrant que seul Dieu peut accomplir de tels exploits. Lorsque les dharmas sont enseign&eacute;s et que Prakruti est command&eacute;, la forme humaine de Dieu devient reconnaissable. J&eacute;sus a non seulement enseign&eacute; la sagesse de Dieu, mais il l&rsquo;a &eacute;galement pratiqu&eacute;e et a ordonn&eacute; Prakruti. Par cons&eacute;quent, J&eacute;sus peut &ecirc;tre identifi&eacute; comme Dieu sous forme humaine. La cessation imm&eacute;diate de la temp&ecirc;te sur la mer a servi de preuve de la divinit&eacute; de J&eacute;sus.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 25,
verse: ` <b>(24) L'Évangile de Matthieu, chapitre 9, verset 6.</b>`,
meaning: `<b>
(9:6) Je veux que vous sachiez que le Fils de l'homme a l'autorité sur terre pour pardonner les péchés. Alors, il dit au paralysé : « Lève-toi, prends ton tapis et rentre chez toi. » Puis l'homme s'est levé et est rentré chez lui.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jésus lui-même a dit que le Fils de l’homme a le pouvoir sur Terre de pardonner les péchés. Lorsqu’un homme paralysé fut amené à Jésus, il lui dit : « Tes péchés sont pardonnés. » Certains scribes se disaient que Jésus blasphémait. Connaissant leurs pensées, Jésus dit : « Pourquoi avez-vous de mauvaises pensées dans votre cœur ? Qu’est-ce qui est le plus simple : dire : « Vos péchés sont pardonnés » ou : « Lève-toi et marche ? » Mais je veux que vous sachiez que le Fils de l’homme a le pouvoir de pardonner les péchés. Alors Il dit au paralysé : « Lève-toi, prends ta natte et rentre chez toi. » Puis l'homme s'est levé et est rentré chez lui.

  Si nous observons cela, Jésus a pardonné les péchés parce que les scribes pensaient du mal de lui. Il a également déclaré que le Fils de l’homme a l’autorité sur Terre pour pardonner les péchés. Bien qu’il soit venu sur Terre en tant que Fils de Dieu, il s’est humilié en s’identifiant comme Fils de l’homme. Il a dit et prouvé que Lui seul possède l’autorité de pardonner les péchés. Ceux qui comprennent que seul Dieu (le Saint-Esprit) peut pardonner les péchés reconnaîtront qui est vraiment Jésus. En prétendant être le Fils de l’homme, Jésus a délibérément obscurci sa divinité, même s’il est né du Saint-Esprit. L’homme paralysé s’est immédiatement levé et est rentré chez lui lorsque Jésus le lui a demandé. La foule était étonnée après avoir été témoin de ce miracle. Malgré cet acte remarquable, Jésus a été traité comme un homme ordinaire et traduit en justice comme s’il était coupable. Cela illustre à quel point les humains oublient souvent l’aide qu’ils reçoivent.

</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 26,
verse: ` <b>(25) L'Évangile de Matthieu, chapitre 10, verset 20.</b>`,
meaning: `<b>
(10:20) Car ce n'est pas vous qui parlerez, mais l'Esprit de votre Père qui parlera à travers vous. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Bien que ce verset puisse para&icirc;tre ordinaire, il renferme une profonde sagesse spirituelle. Il est essentiel de comprendre que le terme <strong>&laquo;&nbsp;Votre p&egrave;re&nbsp;&raquo; </strong>dans ce verset ne fait pas r&eacute;f&eacute;rence au p&egrave;re biologique mais au P&egrave;re spirituel de Jeevatma. Atma, le P&egrave;re de Jeevatma, r&eacute;side dans le corps et le guide. Il est crucial de se rappeler que le P&egrave;re de l&rsquo;Atma est Paramatma. Chaque &ecirc;tre humain repr&eacute;sente Jeevatma. En fonction du karma d&rsquo;une personne, l&rsquo;Atma l&rsquo;influence et la guide (Jeevatma), lui faisant exp&eacute;rimenter le karma (p&eacute;ch&eacute;s et punya karma). Atma contr&ocirc;le toutes les fonctions corporelles et d&eacute;termine le plaisir et la douleur ressentis par Jeevatma dans le corps.

	Jeevatma ne s'engage activement dans aucune fonction corporelle. Malgr&eacute; son apparente inaction, Jeeva subit silencieusement les cons&eacute;quences de ses actes, &agrave; la fois joie et chagrin. Bien que Jeevatma s'identifie comme l'individu au sein du corps, il n'a pas la capacit&eacute; d'agir. Au lieu de cela, c'est l'Atma qui orchestre toutes les activit&eacute;s du corps. En raison de son ignorance, Jeevatma croit &agrave; tort que c'est lui qui accomplit des actions en &eacute;coutant les paroles de &laquo; aham &raquo; (l'ego). En r&eacute;alit&eacute;, Atma est le v&eacute;ritable acteur dans le corps, mais Jeevatma oublie souvent la pr&eacute;sence d&rsquo;Atma et croit qu&rsquo;il est l&rsquo;auteur de tout. Dans le contexte du verset, J&eacute;sus visait &agrave; &eacute;clairer ceux qui sont dans l&rsquo;ignorance. Il a transmis<strong>, &laquo; Votre p&egrave;re, Atma, r&eacute;side en vous et communique &agrave; travers vous.</strong><strong> Ce n'est pas vous qui parlez.</strong>&raquo; D'apr&egrave;s ce verset, il est &eacute;vident que non seulement les actes accomplis mais aussi les paroles prononc&eacute;es ne sont pas articul&eacute;es par Jeevatma. J&eacute;sus a d&eacute;clar&eacute; que c'est une pure ignorance de la part des gens de croire qu'ils parlent, alors que c'est Atma qui articule les mots. Jeevatma n'accomplit pas les actes ex&eacute;cut&eacute;s par les dix parties du corps physique (organes d'action) ; c'est l'Atma qui accomplit tout &agrave; travers ces parties du corps. Reconna&icirc;tre cette v&eacute;rit&eacute; repr&eacute;sente la forme de sagesse la plus &eacute;lev&eacute;e parmi toutes les sagesses.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 27,
verse: ` <b>(26) L'Évangile de Matthieu, chapitre 10, verset 30.</b>`,
meaning: ` <b>
(10:30) Même les cheveux de votre tête sont tous comptés.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dans un temple, les gens partagent souvent leurs pens&eacute;es avec Dieu, croyant que Dieu ignore leurs sentiments les plus intimes. Ils font preuve de respect et de crainte lorsqu&rsquo;ils sont dans le temple, mais peuvent se comporter diff&eacute;remment &agrave; l&rsquo;ext&eacute;rieur. Par exemple, apr&egrave;s avoir quitt&eacute; le temple, certaines personnes peuvent occuper deux si&egrave;ges de train sans permettre aux autres passagers de s'asseoir, faisant ainsi preuve d'un comportement inconsid&eacute;r&eacute;. Cette action d&eacute;coule de l&rsquo;id&eacute;e fausse selon laquelle Dieu est conscient de leurs actions &agrave; l&rsquo;int&eacute;rieur du temple mais pas &agrave; l&rsquo;ext&eacute;rieur. Cependant, quoi <strong>beaucoup ne r&eacute;alisent pas que Dieu est omniscient et omnipr&eacute;sent, percevant toutes les actions, m&ecirc;me dans les endroits les plus isol&eacute;s. </strong>Ce verset prononc&eacute; par J&eacute;sus met en &eacute;vidence la gloire de Dieu et rappelle que la conscience de Dieu s&rsquo;&eacute;tend partout.

	Le verset souligne l&rsquo;extraordinaire attention de Dieu envers les humains, car Dieu a &eacute;tabli un syst&egrave;me pr&eacute;cis pour tous les aspects de l&rsquo;existence humaine. Ce syst&egrave;me divin englobe m&ecirc;me les moindres d&eacute;tails, tels que le &laquo; karma-visarga &raquo; &ndash; la division du karma en petites parties. Gr&acirc;ce au karma-visarga, Dieu d&eacute;termine combien de fois une personne doit ouvrir et fermer les paupi&egrave;res, garantissant ainsi un d&eacute;compte pr&eacute;cis. Dieu dicte &eacute;galement le nombre de cheveux sur notre t&ecirc;te et quand et lesquels doivent tomber, tout au long du karma-visarga. De plus, Dieu orchestre les d&eacute;fis auxquels les individus sont confront&eacute;s et l&rsquo;&eacute;tendue de leurs souffrances. Dans la Bhagavad-Gita, le Seigneur affirme que Dieu poss&egrave;de la connaissance de tout ce qui s'est produit, se passe et se passera sur Terre. Cela renforce l&rsquo;id&eacute;e qu&rsquo;il n&rsquo;y a rien au-del&agrave; de la conscience de Dieu.
</div></div>

</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 28,
verse: ` <b>(27) L'Évangile de Matthieu, chapitre 10, versets 34, 35 et 36.</b>`,
meaning: `<b>
(10:34) Ne pensez pas que je suis venu apporter la paix sur la terre. Je ne suis pas venu apporter la paix, mais une épée.
<br><br>
(10:35) Car je suis venu pour retourner « un homme contre son père, une fille contre son père » mère, une belle-fille contre sa belle-mère.
<br><br>
(10:36) Les ennemis d’un homme seront les membres de sa propre maison.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Même s’il n’est peut-être pas juste de dire que Jésus avait intentionnellement voulu créer des conflits entre les humains, il est évident que de tels conflits ont surgi. Jésus est venu avec l’intention de conduire les gens de l’ignorance à la sagesse plutôt que de semer la discorde. Il partageait sa sagesse avec de bonnes intentions, mais cela conduisait souvent à des disputes entre ceux qui Je n’ai pas pleinement compris ses enseignements. Tout comme la façon dont l’eau froide pulvérisée sur le sable le refroidit, tandis que les calcaires se réchauffent, modifient leur apparence et se transforment en chaux, la réception de la sagesse de Jésus varie. Ceux qui ont une profonde compréhension de la sagesse trouvent leur bonheur dans les enseignements de Jésus, tandis que des conflits surgissent entre les ignorants. Dans certains cas, lorsqu’un conjoint recherche la sagesse, l’autre peut être en désaccord, ce qui entraîne des désaccords au sein des familles. Cette conséquence inattendue peut conduire à des divisions au sein des ménages, où les pères peuvent se retourner contre leurs fils, les mères contre leurs filles et les belles-mères contre leurs belles-filles. Bien que les intentions de Jésus soient nobles, elles conduisent par inadvertance les humains à oublier leur parenté et à favoriser l’inimitié. C'est pourquoi si Jésus donne une fleur, elle se transforme en épine. S’Il donne du bois pliable, celui-ci devient une épée solide. Il est important de noter que ce résultat n’est pas la faute de Jésus, mais plutôt le résultat de la nature humaine et de l’influence de différents gunas.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 29,
verse: `<b>(28)	L'Évangile de Matthieu, chapitre 10, verset 37.</b>`,
meaning: `<b>
(10:37) Celui qui aime son père ou sa mère plus que moi n'est pas digne de moi ; quiconque aime son fils ou sa fille plus que moi n'est pas digne de moi.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  C&rsquo;est un aspect fondamental de la nature humaine que les parents aiment leurs enfants, tout comme il est naturel que les enfants aiment leurs parents. Le lien entre les parents et leur prog&eacute;niture est souvent caract&eacute;ris&eacute; par un amour profond, d&eacute;passant tout autre attachement au monde. Cependant, l&rsquo;esprit humain est &eacute;galement fortement influenc&eacute; par ses qualit&eacute;s inh&eacute;rentes, appel&eacute;es gunas. Lorsqu'une personne abrite un <strong>amour intense pour la sagesse et Dieu</strong>, ils sont naturellement attir&eacute;s par la recherche de la sagesse plut&ocirc;t que par les choses mat&eacute;rielles ou mondaines. Il devient difficile de donner la priorit&eacute; &agrave; la sagesse lorsque l&rsquo;affection d&rsquo;une personne est principalement dirig&eacute;e ailleurs. L&rsquo;esprit humain fonctionne sous l&rsquo;influence de six gunas bons et mauvais, semblables &agrave; des cha&icirc;nes faites respectivement d&rsquo;or et de fer. Les deux types de gunas ont pour but de lier un individu. Cependant, il est important de noter que ni l&rsquo;amour extr&ecirc;me (un bon guna) ni la jalousie (un mauvais guna) ne conduisent une personne vers la sagesse. Ce qui compte vraiment, c&rsquo;est l&rsquo;int&eacute;r&ecirc;t v&eacute;ritable de l&rsquo;individu pour la sagesse. Les six mauvais gunas comprennent l'avidit&eacute; (kaama), la col&egrave;re (krodha), l'avarice (lobha), la passion (moha), l'arrogance (madame) et la jalousie (matsara). En revanche, les six bons gunas englobent la charit&eacute; (dana), la mis&eacute;ricorde (daya), la bienveillance (audarya), l'impartialit&eacute; (vairagya), l'humilit&eacute; (vinaya) et l'amour (prema).
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 30,
verse: `<b>(29)	L'Évangile de Matthieu, chapitre 10, verset 38.</b>`,
meaning: `<b>
(10:38) Celui qui ne prend pas sa croix et ne me suit n'est pas digne de moi.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Les chr&eacute;tiens parlent souvent de la croix et la v&eacute;n&egrave;rent profond&eacute;ment. Il est courant de voir des chr&eacute;tiens porter une croix autour du cou, et ce symbole rev&ecirc;t une grande importance dans leur foi. Il est bien connu que J&eacute;sus a &eacute;t&eacute; crucifi&eacute; et est mort sur la croix. La question qui se pose est de savoir pourquoi les chr&eacute;tiens tiennent en si haute estime un symbole qui a &eacute;t&eacute; utilis&eacute; comme instrument lors de l&rsquo;ex&eacute;cution de J&eacute;sus. La r&eacute;ponse r&eacute;side dans la nature profonde du fait de suivre quelqu&rsquo;un de plus grand que soi et d&rsquo;imiter ses actions. Cependant, non on s&rsquo;est demand&eacute; pourquoi la croix, symbole associ&eacute; &agrave; la mort du Seigneur, devrait &ecirc;tre tenue en si haute estime. En effet, intentionnellement ou non, il semble y avoir une lacune dans la compr&eacute;hension des d&eacute;tails de la croix. Prenons un moment pour contempler la croix et approfondir les d&eacute;tails.

	Dans le verset, J&eacute;sus avertit que <strong>Prendre la croix nous am&egrave;ne &agrave; marcher sur le chemin de Dieu, tandis que si la croix vous rel&egrave;ve, cela signifie marcher dans le chemin de Satan. </strong>Un message similaire est v&eacute;hicul&eacute; lorsque J&eacute;sus a dit : &laquo; Celui qui ne prend pas la croix et ne me suit n&rsquo;est pas digne de moi. &raquo; Cela implique que ceux qui ne portent pas la croix ne sont pas dignes de Dieu. Il est important de comprendre que, selon cette perspective, la croix symbolise Satan. Pour une exploration plus d&eacute;taill&eacute;e de ce concept, pensez &agrave; lire mon livre &laquo;&nbsp;La Croix est-elle Dieu&nbsp;?&nbsp;&raquo;

	La croix repr&eacute;sente le serpent dans la symbolique spirituelle. Il est courant de faire des parall&egrave;les entre le serpent et Satan, et la colombe avec Atma. Satan, ou Maya, r&eacute;side dans le corps humain et conduit souvent les individus sur le chemin de l'ignorance. Lorsque Satan &eacute;l&egrave;ve une personne, cela signifie la faiblesse de la personne et la domination de Satan. D&rsquo;un autre c&ocirc;t&eacute;, lorsqu&rsquo;une personne porte la croix, cela indique que sa force d&eacute;passe celle de Satan. C&rsquo;est pourquoi J&eacute;sus, &agrave; certains moments de sa vie, a port&eacute; la croix pour d&eacute;montrer que l&rsquo;humanit&eacute; peut vaincre Satan. De m&ecirc;me, lorsque J&eacute;sus a &eacute;t&eacute; crucifi&eacute; sur la croix, cela symbolisait la croix qui le portait, signifiant que Satan peut attirer n'importe qui sur son chemin. Pour parcourir le chemin de la sagesse, les humains doivent &ecirc;tre pr&ecirc;ts &agrave; porter leur propre croix, comme J&eacute;sus l&rsquo;a soulign&eacute; dans le verset : &laquo; Celui qui ne prend pas sa croix et ne me suit n&rsquo;est pas digne de moi. &raquo;

	Nous symbolisons Satan sous la forme d'une croix, qui repr&eacute;sente un serpent colossal, semblable au concept de Maya. Maya a le pouvoir d&rsquo;&eacute;garer les individus du chemin qui m&egrave;ne &agrave; Dieu et vers l&rsquo;ignorance. Pour surmonter une telle influence, nous devons d&rsquo;abord comprendre Maya. Apr&egrave;s analyse, Maya peut &ecirc;tre identifi&eacute;e comme un groupe de gunas dans la t&ecirc;te d&rsquo;une personne. Quiconque aligne ses actions sur ces gunas suit par inadvertance le chemin de l&rsquo;ignorance, permettant essentiellement &agrave; Maya de contr&ocirc;ler sa trajectoire. Pour conqu&eacute;rir Maya, il faut ma&icirc;triser les gunas, en refusant de se laisser influencer par leur influence. Lorsqu&rsquo;une personne y parvient, on peut dire qu&rsquo;elle a vaincu Maya, ou Satan, en utilisant sa force int&eacute;rieure. Une telle personne peut reprendre Maya et parcourir le chemin de la sagesse. Par cons&eacute;quent, le message de J&eacute;sus dans ce verset souligne qu&rsquo;en conqu&eacute;rant la &laquo; croix &raquo; &ndash; repr&eacute;sentative de Maya &ndash; on devient digne de la gr&acirc;ce de Dieu. Il est important de noter que la &laquo; croix &raquo; n&rsquo;est pas simplement un symbole en bois mais plut&ocirc;t une repr&eacute;sentation du python, symbole de Satan. Selon les anciens, la croix symbolise Maya, tandis que l'oiseau symbolise l'Atma. Lors du bapt&ecirc;me de J&eacute;sus par Jean, il a &eacute;t&eacute; dit que l&rsquo;Esprit (Atma) descendait comme une colombe et entrait dans le corps de J&eacute;sus. Dans ce contexte, la &laquo; croix &raquo; repr&eacute;sente la force oppos&eacute;e &agrave; l&rsquo;Atma. Par cons&eacute;quent, l&rsquo;enseignement de J&eacute;sus souligne que lorsqu&rsquo;une personne, utilisant sa sagesse et sa force int&eacute;rieure, porte la &laquo; croix &raquo; et suit le chemin de la sagesse, elle devient digne de Dieu et de paraloka.
</div></div>

</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 31,
verse: `<b>(30)	L'Évangile de Matthieu, chapitre 10, verset 40.</b>`,
meaning: ` <b>
(10:40) Celui qui te reçoit me reçoit, et celui qui me reçoit reçoit celui qui m'a envoyé. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Bien que les &ecirc;tres humains soient des Jeevatmas, ils sont cr&eacute;&eacute;s par Atma. Paramatma, ou le Saint-Esprit, a cr&eacute;&eacute; Atma et Prakruti. Cependant, lorsque Paramatma s'incarne en tant qu'homme, la question se pose de savoir s'il faut l'appeler Atma ou Jeevatma. Si Dieu prend une forme humaine, il peut &ecirc;tre consid&eacute;r&eacute; comme un Jeevatma en fonction de son apparence. Lorsque les &ecirc;tres humains (Jeevatmas) d&eacute;c&egrave;dent, l'Atma les incorpore en lui-m&ecirc;me. Tout comme l'Atma englobe les &ecirc;tres humains, il inclut &eacute;galement Dieu lorsqu'Il s'incarne en tant qu'homme et appara&icirc;t comme un Jeevatma. Ce concept est repris dans le verset : &laquo;<strong>Celui qui te re&ccedil;oit me re&ccedil;oit aussi. </strong>Celui qui s'est incarn&eacute; en &ecirc;tre humain (Jeevatma) est, en r&eacute;alit&eacute;, Dieu. Cependant, c'est Dieu qui a envoy&eacute; l'homme, comme J&eacute;sus. Lorsque l&rsquo;Atma englobe un homme ressemblant &agrave; un Jeevatma, c&rsquo;est comme si Dieu, l&rsquo;exp&eacute;diteur de l&rsquo;homme, &eacute;tait &eacute;galement inclus dans l&rsquo;Atma. Par cons&eacute;quent, dans le verset, J&eacute;sus a transmis : <strong>&laquo;&nbsp;Celui qui me re&ccedil;oit re&ccedil;oit celui qui m'a envoy&eacute;.&nbsp;&raquo;</strong>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 32,
verse: `<b>(31)	L'Évangile de Matthieu, chapitre 11, verset 9.</b>`,
meaning: ` <b>
(11:9) Qu’es-tu sorti voir ? Un prophète ? Oui, je vous le dis, et (je suis) plus qu'un prophète.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	On peut dire qu&rsquo;un proph&egrave;te (pravaktha) est celui qui enseigne une connaissance que personne n&rsquo;a dite. En t&eacute;lougou, <strong>'Pra'</strong> d&eacute;note l'importance, et <strong>'Vaktha' </strong>veut dire celui qui parle. Un proph&egrave;te est donc quelqu'un qui transmet une sagesse essentielle. Cependant, J&eacute;sus a proclam&eacute; qu&rsquo;il est plus qu&rsquo;un proph&egrave;te. Il n&rsquo;y a qu&rsquo;un seul individu qui surpasse un proph&egrave;te, r&eacute;v&eacute;lant une sagesse au-del&agrave; de la capacit&eacute; des proph&egrave;tes. L'&eacute;criture divine affirme, <strong>&laquo; Dieu n&rsquo;a transmis sa sagesse &agrave; aucun &ecirc;tre humain. La sagesse de Dieu reste inconnue de tous sauf de Dieu. </strong>Dans la derni&egrave;re &eacute;criture divine, il est d&eacute;clar&eacute; au verset 3&nbsp;:&nbsp;7 que Dieu doit transmettre sa sagesse. Sur cette base, on comprend que bien que Dieu vienne comme proph&egrave;te pour partager la sagesse, il est plus qu&rsquo;un proph&egrave;te. La derni&egrave;re &eacute;criture divine, en 42&nbsp;:51, d&eacute;clare<strong>, &laquo;&nbsp;Dieu ne communique pas directement avec les humains.&nbsp;&raquo; </strong>Cependant, Dieu peut se manifester sous la forme d&rsquo;un homme d&eacute;guis&eacute; et transmettre son message. Chaque fois que Dieu prend une forme humaine, m&ecirc;me s&rsquo;il est qualifi&eacute; de proph&egrave;te, il est plus qu&rsquo;un proph&egrave;te. &Agrave; la lumi&egrave;re de la d&eacute;claration de J&eacute;sus dans ce verset, il devient &eacute;vident que J&eacute;sus surpasse les proph&egrave;tes et repr&eacute;sente une incarnation de Dieu. Bien que J&eacute;sus ait d&eacute;clar&eacute; ouvertement son identit&eacute; &agrave; plusieurs reprises, beaucoup ne l&rsquo;ont pas reconnu.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 33,
verse: `<b>(32)	L'Évangile de Matthieu, chapitre 11, verset 28.</b>`,
meaning: ` <b>
(11:28) Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Il est commun&eacute;ment admis que les gens se lassent lorsqu&rsquo;ils portent un poids physique. Cependant, les humains ressentent &eacute;galement de la lassitude sans m&ecirc;me porter de fardeau visible. Le fardeau invisible, dans ce cas, est le p&eacute;ch&eacute; (karma), et quiconque subit des exp&eacute;riences karmiques a tendance &agrave; se sentir fatigu&eacute;. Les humains sont continuellement confront&eacute;s au karma, sauf pendant le sommeil o&ugrave; ils en sont temporairement lib&eacute;r&eacute;s. M&ecirc;me dans les r&ecirc;ves, l'influence de le karma persiste, signifiant un &eacute;tat de travail constant. Consid&eacute;rant la nature perp&eacute;tuelle de ce fardeau, J&eacute;sus adresse &agrave; tous une invitation en disant : <strong>"Venez &agrave; moi. Je vais te donner du repos.</strong>

	La question se pose : comment pouvons-nous trouver le repos lorsque nous nous tournons vers J&eacute;sus, &eacute;tant donn&eacute; que nous faisons constamment l&rsquo;exp&eacute;rience du karma ? La r&eacute;ponse est la suivante : lorsque J&eacute;sus transmet la sagesse divine &agrave; ceux qui le recherchent, le karma de tous ceux qui connaissent cette sagesse est consum&eacute; par le pouvoir de la sagesse. Gr&acirc;ce &agrave; la destruction du karma, les individus sont lib&eacute;r&eacute;s de son impact continu, r&eacute;duisant ainsi le labeur de la souffrance et leur procurant du repos. Cette invitation est &eacute;tendue aux personnes de toutes castes et religions, comme en t&eacute;moigne la parole de J&eacute;sus : <strong>"Venez tous &agrave; moi." </strong>Certains peuvent qualifier J&eacute;sus de gourou chr&eacute;tien ou de proph&egrave;te. Cependant, le qualifier uniquement de chr&eacute;tien serait inexact, car son appel est inclusif, invitant des personnes de tous horizons. Ceux qui ont embrass&eacute; ses enseignements et l&rsquo;ont recherch&eacute; ne devraient pas &ecirc;tre cantonn&eacute;s &agrave; l&rsquo;&eacute;tiquette de chr&eacute;tiens. Puisque Dieu et la sagesse divine sont universellement n&eacute;cessaires, J&eacute;sus &eacute;tend son invitation &agrave; tous, comme il l'a d&eacute;clar&eacute; : <strong>"Venez tous &agrave; moi."</strong>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 34,
verse: ` <b>(33) L'Évangile de Matthieu, chapitre 12, versets 17, 18, 19, 20 et 21.</b>`,
meaning: ` <b>
(12:17) C'était pour accomplir ce qui avait été annoncé par l'intermédiaire du prophète Isaïe.
<br><br>
(12:18) Voici mon serviteur que j'ai choisi, celui que j'aime, en qui je prends plaisir ; Je mettrai mon Esprit sur lui.
<br><br>
(12:19) Il proclamera la justice (la sagesse) aux nations ; Il ne se disputera pas et ne criera pas ; personne n’entendra sa voix dans les rues.
<br><br>
(12:20) Il ne brisera pas un roseau meurtri, et il n'éteindra pas une mèche qui couve, jusqu'à ce qu'il ait amené la justice (la sagesse) à la victoire.
<br><br>
(12:21) En son nom les nations placeront leur espérance. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il y a environ 350 ans, un grand homme nomm&eacute; Veerabrahmam a pr&eacute;dit les &eacute;v&eacute;nements et les catastrophes naturelles qui allaient se produire. De m&ecirc;me, un grand homme nomm&eacute; Isa&iuml;e a pr&eacute;dit la venue de J&eacute;sus. Si nous examinons les paroles d&rsquo;Isa&iuml;e en d&eacute;tail, la grandeur de ses paroles deviendra connue de tous. Il est devenu clair de qui Isa&iuml;e parlait. Isa&iuml;e a v&eacute;cu de nombreuses ann&eacute;es avant la naissance de J&eacute;sus. Dans le chapitre 13, Isa&iuml;e a transmis quelques autres choses. En regardant ces versets, il devient &eacute;vident que Dieu, le Saint-Esprit, a parl&eacute; de J&eacute;sus. En examinant les versets o&ugrave; J&eacute;sus a parl&eacute; de lui-m&ecirc;me dans les &Eacute;critures et les versets o&ugrave; le Saint-Esprit a parl&eacute; de J&eacute;sus, il devient &eacute;vident que celui qui a parl&eacute; de J&eacute;sus (le Saint-Esprit) et J&eacute;sus sont les m&ecirc;mes.

	Dans le premier verset, il est dit : <strong>"Voici mon serviteur." </strong>Il existe diverses formes de service mat&eacute;rialiste, mais ce verset ne fait pas r&eacute;f&eacute;rence au service mat&eacute;rialiste. Au lieu de cela, il parle du service de Paramatma. Il n&rsquo;existe qu&rsquo;une seule forme de service de Paramatma, et la v&eacute;ritable <strong>Le service de Paramatma consiste &agrave; pr&ecirc;cher et &agrave; diffuser la sagesse de Dieu aux autres. </strong>Parce que J&eacute;sus r&eacute;pandait activement la sagesse de Dieu, le Saint-Esprit a d&eacute;clar&eacute; : &laquo; Voici mon serviteur. &raquo; Quiconque propage la sagesse de Dieu devient le <strong>la plupart favoris&eacute; par Dieu</strong>. Par cons&eacute;quent, Paramatma a exprim&eacute; son amour pour J&eacute;sus en disant : <strong>"Je l'aime et je suis ravi de lui." </strong>Ce sentiment est exprim&eacute; dans <strong>15:28, 29 et 30 de la derni&egrave;re &eacute;criture divine</strong>, o&ugrave; il est d&eacute;crit que le Saint-Esprit cr&eacute;e un &ecirc;tre humain &agrave; partir d&rsquo;argile et y insuffle son &acirc;me (l&rsquo;&acirc;me du Saint-Esprit). Par la suite, les anges reconnaissent l&rsquo;&ecirc;tre humain comme Dieu et se prosternent devant Lui. Par cons&eacute;quent, conform&eacute;ment aux paroles d&rsquo;Isa&iuml;e : &laquo; Le Saint-Esprit mettra son esprit sur lui &raquo;, il devient &eacute;vident que J&eacute;sus, dans son incarnation humaine, est l&rsquo;&acirc;me de Paramatma.

	Le verset 19 d&eacute;clare : &laquo; Il proclamera la justice aux nations. &raquo; Il semble que les traducteurs de la Bible en anglais aient utilis&eacute; un terme inexact. Il est cens&eacute; s'&eacute;crire comme <strong>"sagesse" </strong>au lieu de <strong>"justice." </strong>La justice est plus &eacute;troitement li&eacute;e au monde mat&eacute;riel et ce n&rsquo;est donc peut-&ecirc;tre pas le terme le plus appropri&eacute;. Alors que <strong>la droiture et la justice concernent les affaires du monde, la sagesse et le dharma sont associ&eacute;s &agrave; Paramatma. </strong>L&rsquo;utilisation de &laquo; justice &raquo; et de &laquo; justice &raquo; au lieu de &laquo; sagesse &raquo; semble &ecirc;tre une erreur de traduction. De nombreuses erreurs de ce type ont &eacute;t&eacute; identifi&eacute;es, r&eacute;vis&eacute;es et corrig&eacute;es.

	Le verset 19 d&eacute;clare : &laquo; Il proclamera la justice aux nations. &raquo; Ici, &laquo; proclamer &raquo; signifie pr&ecirc;cher ou enseigner. Le verset pourrait &ecirc;tre mieux compris comme suit&nbsp;: <strong>&laquo; Il r&eacute;pandra la sagesse parmi les nations. &raquo; </strong>Cet amendement s&rsquo;aligne sur le fait qu&rsquo;apr&egrave;s avoir v&eacute;cu 30 ans, J&eacute;sus a enseign&eacute; sa sagesse pendant environ deux ans et trois mois, comme l&rsquo;indique ce verset. Pendant cette p&eacute;riode, J&eacute;sus a pr&ecirc;ch&eacute; sa sagesse de mani&egrave;re d&eacute;sint&eacute;ress&eacute;e en divers endroits, gu&eacute;rissant de nombreuses personnes atteintes de diff&eacute;rentes sortes de maladies. Il a rendu la vue aux aveugles, a permis aux boiteux de marcher, a gu&eacute;ri les l&eacute;preux et a m&ecirc;me ressuscit&eacute; les morts. Malgr&eacute; ses actions miraculeuses, certains accusaient J&eacute;sus d&rsquo;&ecirc;tre un sorcier et lui reprochaient d&rsquo;agir contre Dieu. N&eacute;anmoins, J&eacute;sus ne s'est pas livr&eacute; &agrave; des querelles ni &agrave; des cris, comme l'affirme la d&eacute;claration : <strong>"Il ne se disputera pas et ne criera pas."</strong>

	J&eacute;sus transmettait sa sagesse &agrave; ceux qui l'approchaient, mais il s'abstenait de crier dans les rues, comme l'indique le verset : <strong>&laquo; Personne n&rsquo;entendra sa voix dans les rues. &raquo; </strong>Le verset souligne &eacute;galement qu&rsquo;Il ne brisera pas un roseau meurtri, soulignant que Ses actions &eacute;taient uniquement ax&eacute;es sur la diffusion de la sagesse. De plus, le verset souligne le r&ocirc;le de J&eacute;sus en veillant &agrave; ce que le pouvoir de la sagesse, une fois allum&eacute; chez une personne, ne s&rsquo;&eacute;teigne pas jusqu&rsquo;&agrave; ce qu&rsquo;il br&ucirc;le tout le karma associ&eacute; &agrave; cet individu. Puisque le karma se pr&eacute;sente sous diverses formes, il est compar&eacute; &agrave; une m&egrave;che compos&eacute;e de plusieurs brins, ce qui explique la phrase&nbsp;: <strong>"Il n'&eacute;teindra pas une m&egrave;che qui couve." </strong>De plus, le verset exprime l&rsquo;attente de certains pour la sagesse de J&eacute;sus, d&eacute;clarant : <strong>&laquo; En son nom, les nations placeront leur esp&eacute;rance. &raquo;</strong>
</div></div>

</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 35,
verse: `<b>(34)	L'Évangile de Matthieu, chapitre 12, verset 31.</b>`,
meaning: `<b>
(12:31) Ainsi, je vous le dis, toute sorte de péché et de calomnie peut être pardonné, mais le blasphème contre l'Esprit (Atma) ne sera pas pardonné. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ce verset revêt une signification particulière dans l’Écriture. Lorsque les êtres humains saisissent la sagesse de Dieu, cette sagesse se transforme en feu (pouvoir de la sagesse). Ce feu a la capacité de brûler divers péchés (karma). Connaître la sagesse divine permet aux humains de évitez les péchés sans rapport avec l'Atma. Cependant, il est crucial de noter que le pouvoir de la sagesse ne peut pas absoudre les péchés résultant du blasphème et des actions contre l’Atma ; de tels péchés peuvent rester impardonnables.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 36,
verse: `<b>(35)	L'Évangile de Matthieu, chapitre 12, verset 32.</b>`,
meaning: `<b>
(12:32) Quiconque prononcera une parole contre le Fils de l'Homme sera pardonné, mais quiconque parlera contre le Saint-Esprit ne sera pas pardonné, ni dans cet âge (yuga) ni dans l'âge (yuga) à venir.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Tous les &ecirc;tres humains sont commun&eacute;ment appel&eacute;s fils de l&rsquo;homme ; les gens ordinaires reconnaissent que leurs parents sont humains. Mais J&eacute;sus, malgr&eacute; son apparence ext&eacute;rieure d&rsquo;homme ordinaire, ne doit pas &ecirc;tre cat&eacute;goris&eacute; comme le fils de l&rsquo;homme. Lorsque J&eacute;sus parlait de Son P&egrave;re, Il pr&eacute;cisait que Son P&egrave;re existait en paraloka, et non en tant qu'homme sur terre. Par cons&eacute;quent, J&eacute;sus est identifi&eacute; &agrave; juste titre comme le Fils de Dieu. En revanche, le terme g&eacute;n&eacute;ral &laquo; fils de l&rsquo;homme &raquo; peut s&rsquo;appliquer &agrave; tout le monde. Bien que J&eacute;sus se pr&eacute;sente avec le nom et les exp&eacute;riences d&rsquo;un homme ordinaire, sa v&eacute;ritable d&eacute;signation est le Fils de Dieu.

	Le donneur de graines d&rsquo;une personne ordinaire n&rsquo;est pas un humain. Tout homme qui pr&eacute;tend avoir des enfants n&rsquo;est pas vraiment un p&egrave;re. L'Atma, qui sert de t&ecirc;te au corps et remplit toutes les fonctions en son sein, est le donneur de graines pour les humains et tous les &ecirc;tres vivants. Malheureusement, de nombreux humains ignorent ce fait. Par cons&eacute;quent, un homme affirme qu&rsquo;il est le p&egrave;re d&rsquo;un autre humain, m&ecirc;me s&rsquo;il ne peut exercer aucune fonction dans son corps. Il est soulign&eacute; &agrave; plusieurs reprises dans les premi&egrave;re et deuxi&egrave;me &eacute;critures divines qu'Atma est l'unique auteur de toutes choses. Alors qu&rsquo;en r&eacute;alit&eacute; une personne ne commet aucun p&eacute;ch&eacute; parce qu&rsquo;elle est incapable d&rsquo;accomplir des actions, l&rsquo;id&eacute;e fausse selon laquelle elle est l&rsquo;auteur conduit &agrave; l&rsquo;accumulation de p&eacute;ch&eacute;s dans son r&eacute;cit (Jeevatma). Ainsi, une personne devient responsable des p&eacute;ch&eacute;s qu&rsquo;elle n&rsquo;a pas commis. De m&ecirc;me, bien qu'Atma soit le v&eacute;ritable P&egrave;re d'un homme, l'homme est consid&eacute;r&eacute; comme le fils d'un &ecirc;tre humain lorsqu'il pr&eacute;tend que son p&egrave;re est un homme.

	J&eacute;sus est conscient que son P&egrave;re est le P&egrave;re de la paraloka. Contrairement &agrave; tout le monde, Il n&rsquo;est pas n&eacute; d&rsquo;Atma. J&eacute;sus reconna&icirc;t qu'il est le Fils de Dieu, le Saint-Esprit. Tout au long des &eacute;critures bibliques, J&eacute;sus est appel&eacute; le Fils de Dieu parce qu&rsquo;il a explicitement d&eacute;clar&eacute; &agrave; plusieurs reprises que son P&egrave;re &eacute;tait le Saint-Esprit. La sagesse de Dieu a le pouvoir de pardonner les p&eacute;ch&eacute;s commis contre des individus ordinaires. Cependant, le p&eacute;ch&eacute; de blasph&egrave;me contre le Fils de Dieu ne sera jamais pardonn&eacute;. Ce p&eacute;ch&eacute; de blasph&egrave;me est destin&eacute; &agrave; &ecirc;tre v&eacute;cu pendant <strong>deux yugas </strong>&ndash; dans le yuga (&egrave;re) actuel et le suivant.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 37,
verse: `<b>(36)	L'Évangile de Matthieu, chapitre 12, versets 36 et 37.</b>`,
meaning: ` <b>
(12:36) Mais je vous dis que chacun devra rendre compte au jour du jugement de chaque parole creuse qu'il aura prononcée.
<br><br>
(12:37) Car par tes paroles tu seras acquitté, et par tes paroles tu seras condamné.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	D&egrave;s sa naissance, l&rsquo;humain s&rsquo;engage dans de nombreuses actions et prononce de nombreux mots. Ils croient qu&rsquo;ils sont personnellement responsables de chaque petit acte et de chaque petite parole. En r&eacute;alit&eacute;, ils n&rsquo;ont rien fait. C'est l'Atma dans le corps qui accomplit toutes les actions. Cependant, un individu inconscient s&rsquo;attribue faussement chaque action et chaque parole et, par cons&eacute;quent, les cons&eacute;quences karmiques de ses actes et de ses paroles lui reviennent. Atma stocke tout le karma accumul&eacute; dans le karma chakra et l'&eacute;value le jour de la mort. En ce jour du jugement, Atma &eacute;value chaque acte et chaque parole de l'individu, pesant les p&eacute;ch&eacute;s et le punya associ&eacute;s &agrave; chacun. Une personne est consid&eacute;r&eacute;e comme une gnani (personne sage) si elle acquiert la sagesse dans la vie, et inversement, une personne est consid&eacute;r&eacute;e comme ignorante si elle accomplit des actes avec ignorance. De plus, Atma consid&egrave;re si une personne a acquis la sagesse (gnani) ou reste dans l'ignorance. Le jugement est bas&eacute; sur le statut de l&rsquo;individu en tant que gnani ou ignorant, d&eacute;terminant en cons&eacute;quence sa prochaine vie. Le Saint-Esprit ne juge pas une personne sur la base de son karma. C'est l'Atma, responsable de toutes les fonctions du corps, qui juge l'individu le jour de sa mort et dirige le Jeeva vers la vie suivante. Cette journ&eacute;e est connue sous le nom de <strong>&laquo; jour du jugement &raquo; </strong>ou <strong>&laquo;dernier jour&raquo;, </strong>servant &eacute;galement de premier jour de la prochaine vie (anniversaire). En reconnaissant que l'Atma est l'arbitre ultime des derniers et des premiers jours de la vie, il faut comprendre que le Saint-Esprit ne participe pas &agrave; ces processus. Le dernier jour peut &ecirc;tre appel&eacute; le jour du comptage du karma. Atma est celui qui remplit toutes les fonctions du corps. Comprenant cela, si une personne croit n&rsquo;avoir rien fait personnellement, elle n&rsquo;est ni consid&eacute;r&eacute;e comme un p&eacute;cheur ni comme une personne vertueuse. Il est crucial de reconna&icirc;tre que l&rsquo;Atma d&eacute;termine le karma dans les actes d&rsquo;une personne et la guide vers la prochaine naissance. Selon les pens&eacute;es de chacun, ils seront jug&eacute;s soit comme un gnani, soit comme un ignorant, soit comme un juste ou comme un p&eacute;cheur.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 38,
verse: `<b>(37)	L'Évangile de Matthieu, chapitre 12, verset 40.</b>`,
meaning: ` <b>
(12:40) Car, comme Jonas fut trois jours et trois nuits dans le ventre d'un énorme poisson, de même le Fils de l'homme sera trois jours et trois nuits dans le sein de la terre. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Ce verset &eacute;tablit un parall&egrave;le entre les &eacute;v&eacute;nements pr&eacute;c&eacute;dant l'&eacute;poque de J&eacute;sus et les &eacute;v&eacute;nements proph&eacute;tis&eacute;s. Il note que Jonas, apr&egrave;s avoir &eacute;t&eacute; aval&eacute; par un poisson g&eacute;ant, a r&eacute;sid&eacute; dans son ventre pendant trois jours et trois nuits. Le verset proph&eacute;tise &eacute;galement : &laquo; J&eacute;sus sera trois jours et trois nuits au c&oelig;ur de la terre. &raquo; S&rsquo;il est exact que Jonas a pass&eacute; trois jours et trois nuits dans le poisson, il n&rsquo;est pas pr&eacute;cis d&rsquo;affirmer que J&eacute;sus, le Fils de l&rsquo;homme, a v&eacute;cu la m&ecirc;me dur&eacute;e au c&oelig;ur de la terre. Historiquement, J&eacute;sus a &eacute;t&eacute; crucifi&eacute; sur la croix le vendredi soir et est ressuscit&eacute; des morts avant l'aube du dimanche matin. Selon les documents historiques, J&eacute;sus a probablement &eacute;t&eacute; crucifi&eacute; entre 15h30 et 17h30. et 16 heures vendredi, et son corps a &eacute;t&eacute; d&eacute;pos&eacute; dans un tombeau vendredi soir. Par cons&eacute;quent, J&eacute;sus n&rsquo;&eacute;tait pas dans le tombeau pendant la journ&eacute;e du vendredi, mais plut&ocirc;t le vendredi soir et tout le samedi. La r&eacute;surrection aurait eu lieu dimanche avant l&rsquo;aube. Par cons&eacute;quent, J&eacute;sus a pass&eacute; la nuit du vendredi et toute la journ&eacute;e du samedi dans le tombeau, ressuscitant des morts avant le dimanche matin.

	Le verset semble indiquer que J&eacute;sus n&rsquo;a &eacute;t&eacute; enterr&eacute; que deux nuits et un jour. Par cons&eacute;quent, ce verset de l&rsquo;&Eacute;criture peut sembler incorrect, soulevant des doutes quant &agrave; son exactitude. N&eacute;anmoins, le verset de l&rsquo;&Eacute;criture divine est consid&eacute;r&eacute; comme d&rsquo;une exactitude infaillible. Lorsque d&rsquo;autres ont remis en question l&rsquo;authenticit&eacute; de ce verset particulier, j&rsquo;ai moi aussi &eacute;prouv&eacute; un sentiment de doute. Ayant dit qu&rsquo;il n&rsquo;y a pas de place pour le mensonge sauf la v&eacute;rit&eacute; dans cette phrase, j&rsquo;ai d&ucirc; r&eacute;pondre &agrave; ce que les autres m&rsquo;ont demand&eacute;. Pourtant, en rappelant les conseils de Matthieu 10&nbsp;:&nbsp;20, <strong>&laquo; Car ce n&rsquo;est pas vous qui parlerez, mais l&rsquo;Esprit de votre P&egrave;re qui parlera par vous. &raquo; </strong>dissipe le besoin de peur en fournissant une r&eacute;ponse. La compr&eacute;hension est que l&rsquo;Esprit, ou Atma, est celui qui pose des questions et apporte des r&eacute;ponses. En tant que Jeevas, notre r&ocirc;le est d'&eacute;couter et de comprendre ce que l'Atma communique.

	Celui qu&rsquo;on appelle commun&eacute;ment le Fils de l&rsquo;homme est, en v&eacute;rit&eacute;, le Fils de Dieu. Bien que nous qualifions commun&eacute;ment J&eacute;sus de Fils de Dieu, il est essentiel de reconna&icirc;tre qu&rsquo;il n&rsquo;est le fils d&rsquo;aucun &ecirc;tre humain mais de Dieu lui-m&ecirc;me. Cette affirmation est faite avec certitude, fond&eacute;e sur la compr&eacute;hension qu&rsquo;Il est Dieu incarn&eacute;. Alors que le corps habit&eacute; par Dieu a connu la mort, Dieu lui-m&ecirc;me est immortel. En fait, il existe quatre types de mort : la mort naturelle, la mort non naturelle, la mort temporaire et la mort ultime. Alors que la majorit&eacute; conna&icirc;t le premier type, ceux qui poss&egrave;dent la sagesse spirituelle, ou &laquo; gnanis &raquo;, connaissent les quatre types. La derni&egrave;re mort survient lorsque Dieu prend forme humaine ou lorsqu'une personne atteint Moksham, fusionnant avec Dieu. Malgr&eacute; la croyance largement r&eacute;pandue en la mort de J&eacute;sus sur la croix, personne ne peut dire avec certitude quel type de mort il a v&eacute;cu.

	Dans ce verset, il est dit que J&eacute;sus fut au c&oelig;ur de la terre pendant trois jours et trois nuits, mais il ne mentionne pas explicitement sa mort. Lors de sa crucifixion, la croyance dominante &eacute;tait qu&rsquo;il &eacute;tait mort sur la croix. Cependant, en sortant du tombeau dimanche matin, J&eacute;sus a affirm&eacute; qu&rsquo;il n&rsquo;avait pas connu la mort. Pour r&eacute;pondre au scepticisme de ses disciples, il a montr&eacute; les marques des clous sur ses poignets et ses pieds, ainsi que la blessure de la lance, indiquant clairement qu'il n'&eacute;tait pas mort. N&eacute;anmoins, les documents historiques affirment que son corps a &eacute;t&eacute; descendu de la croix et plac&eacute; dans un tombeau apr&egrave;s sa mort vendredi soir. Cette contradiction apparente, o&ugrave; il est mort vendredi alors qu'il est apparu dimanche comme s'il n'&eacute;tait pas mort, soul&egrave;ve des questions sur la d&eacute;claration apparemment fausse selon laquelle <strong>Il passerait trois jours et trois nuits au c&oelig;ur de la terre. </strong>Selon 12&nbsp;:40, Il n&rsquo;&eacute;tait pas l&agrave; pendant trois nuits et trois jours, mais n&rsquo;&eacute;tait l&agrave; que pendant deux nuits et un jour. Explorer la raison derri&egrave;re cette apparente incoh&eacute;rence r&eacute;v&egrave;le une v&eacute;rit&eacute; plus profonde cach&eacute;e dans l&rsquo;apparent mensonge. Examinons plus en d&eacute;tail comment la v&eacute;rit&eacute; se cache derri&egrave;re cette apparente contradiction.

	Il est vrai que J&eacute;sus est mort sur la croix, mais personne ne savait que c'&eacute;tait <strong>mort temporaire</strong>. J&eacute;sus a connu une mort temporaire parmi quatre sortes de morts et est ressuscit&eacute; t&ocirc;t dimanche matin apr&egrave;s une mort temporaire. Il a inform&eacute; ses disciples qu'il n'&eacute;tait pas mort. Il ne serait pas ressuscit&eacute; s&rsquo;il avait connu une mort naturelle. Cependant, il s&rsquo;est lev&eacute; le troisi&egrave;me jour parce qu&rsquo;il a eu une &laquo; mort temporaire &raquo;. Ainsi, l&rsquo;id&eacute;e selon laquelle J&eacute;sus est mort sur la croix est une id&eacute;e fausse et fausse. De m&ecirc;me, l&rsquo;&Eacute;criture affirmant que J&eacute;sus resta dans le tombeau pendant trois jours est exacte mais m&eacute;rite une compr&eacute;hension plus profonde.

	J&eacute;sus est pr&eacute;sent dans le corps en tant que Jeevatma, tandis qu'Atma, le P&egrave;re de tous, r&eacute;side &eacute;galement &agrave; l'int&eacute;rieur. Jeevatma exp&eacute;rimente les cons&eacute;quences du karma dans chaque corps humain, tandis qu'Atma accomplit les actions n&eacute;cessaires conform&eacute;ment au karma. L'Atma impr&egrave;gne tout le corps, tandis que Jeevatma est situ&eacute; dans la t&ecirc;te. Atma exerce un contr&ocirc;le sur le corps &agrave; travers ses dix parties et organes. La vitalit&eacute; d&rsquo;une personne est souvent associ&eacute;e au mouvement corporel, et une personne est consid&eacute;r&eacute;e comme vivante lorsque son corps est en mouvement. A l&rsquo;inverse, lorsque les dix parties et organes cessent de fonctionner, accompagn&eacute; d&rsquo;une absence de respiration, la personne est r&eacute;put&eacute;e morte. En cas de mort naturelle, Atma et Jeevatma sortent du corps, entra&icirc;nant l'immobilisation du corps en raison de l'absence d'Atma.

	Dans le cas d'une mort temporaire, ni Atma ni Jeevatma ne quittent le corps. Atma subit une contraction, r&eacute;tr&eacute;cissant des bords ext&eacute;rieurs jusqu'&agrave; une taille minuscule, et p&eacute;n&egrave;tre dans la t&ecirc;te de la m&ecirc;me mani&egrave;re que Jeevatma. Durant cette p&eacute;riode, aucun organe du corps ne fonctionne et la respiration s&rsquo;arr&ecirc;te, donnant l&rsquo;apparence de la mort. L&rsquo;homme est g&eacute;n&eacute;ralement per&ccedil;u comme mort puisque les fonctions corporelles externes et internes cessent. La r&eacute;surrection se produit lorsque l'Atma, reprenant sa fonction habituelle, &eacute;merge et recommence &agrave; fonctionner. Ce ph&eacute;nom&egrave;ne est illustr&eacute; dans le cas de J&eacute;sus. Lors de Sa crucifixion, Atma s'est contract&eacute; dans Son corps, maintenant cet &eacute;tat pendant la nuit du vendredi et pendant toute la journ&eacute;e du samedi. T&ocirc;t le dimanche matin, Atma a repris son fonctionnement normal, ce qui a permis &agrave; J&eacute;sus de sortir vivant du tombeau. Atma exp&eacute;riment&eacute; <strong>mort temporaire </strong>pour seulement deux nuits et un jour. Alors que l&rsquo;Atma dans le corps de J&eacute;sus est rest&eacute; dans le tombeau pendant deux nuits et un jour, il est &eacute;galement exact de dire que J&eacute;sus (Jeevatma) est rest&eacute; dans le tombeau pendant trois nuits et trois jours, d&eacute;crivant un processus que nous ne comprenons pas enti&egrave;rement. Voyons ce que c'&eacute;tait.

	On peut dire que J&eacute;sus a &eacute;t&eacute; ressuscit&eacute; gr&acirc;ce aux actions d&rsquo;Atma dans Son corps. Cependant, avant qu'Atma ne meure sur la croix, Jeevatma avait d&eacute;j&agrave; &eacute;t&eacute; enterr&eacute; dans le corps. Le lien entre Jeevatma et Buddhi a &eacute;t&eacute; rompu dans le corps de J&eacute;sus apr&egrave;s qu&rsquo;il ait appris son arrestation imminente jeudi. J&eacute;sus est entr&eacute; dans un &eacute;tat inconnu, ignorant compl&egrave;tement son arrestation, son proc&egrave;s, sa flagellation et sa crucifixion, &eacute;tant essentiellement enterr&eacute; dans son tombeau. Il est rest&eacute; inconscient pendant trois jours, comme dans une tombe. Malgr&eacute; cela, Atma accomplissait toutes les fonctions corporelles n&eacute;cessaires, mais J&eacute;sus &eacute;tait inconscient de ces actions. Pour emp&ecirc;cher J&eacute;sus d'&eacute;prouver toute douleur ou souffrance associ&eacute;e &agrave; la flagellation et &agrave; la crucifixion, Atma l'a envoy&eacute; dans un &eacute;tat inconnu, semblable au sommeil. Jeevatma est rest&eacute; enterr&eacute; dans le corps jusqu'&agrave; ce qu'Atma le r&eacute;veille dimanche matin. Par cons&eacute;quent, le verset d&eacute;clare : &laquo; J&eacute;sus resta dans le tombeau pendant trois jours et trois nuits. &raquo; Les gens savaient que le corps de J&eacute;sus avait &eacute;t&eacute; plac&eacute; dans le tombeau, mais le Jeevatma dans Son corps &eacute;tait entr&eacute; dans un &eacute;tat d&rsquo;inconnu avant cela. Par la suite, l&rsquo;Atma de J&eacute;sus a connu une mort temporaire vendredi soir. Cependant, les gens, qui ne pouvaient observer que les choses visibles, n&rsquo;&eacute;taient pas conscients du fonctionnement de l&rsquo;Atma et du Jeevatma dans le corps de J&eacute;sus. Il est vrai que J&eacute;sus est rest&eacute; dans la tombe pendant trois jours et trois nuits, et que Son Atma est rest&eacute; dans la tombe pendant deux nuits et un jour.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 39,
verse: `<b>(38)	L'Évangile de Matthieu, chapitre 13, versets 13, 14 et 15.</b>`,
meaning: `<b>
(13:13) Bien qu'ils voient, ils ne voient pas ; bien qu’ils entendent, ils n’entendent ni ne comprennent.
<br><br>
(13:14) En eux s'accomplit la prophétie d'Isaïe : Vous entendrez toujours mais vous ne comprendrez jamais ; vous verrez toujours mais ne percevrez jamais.
<br><br>
(13:15) Car le cœur de ce peuple est devenu insensible ; ils entendent à peine avec leurs oreilles et ils ont fermé les yeux. Autrement, ils pourraient voir de leurs yeux, entendre de leurs oreilles, comprendre de leur cœur et se tourner, et je les guérirais. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Le prophète Isaïe l’a prophétisé il y a longtemps. Hier comme aujourd’hui, il y a eu des gens ignorants. Ils voient avec leurs yeux, entendent avec leurs oreilles et détournent leur manas (esprit) même après avoir compris avec leur buddhi. En raison de leur manque d’intérêt pour ce qu’ils ont vu, entendu et connu, leur buddhi ralentit pour éviter de détruire leur karma à travers Jésus. Leurs oreilles deviennent sourdes à la sagesse divine. Ils écoutent tout ce qui se dit mais ne comprennent pas ce qu’ils entendent et s’empêtrent dans les choses matérielles. Ils ne peuvent voir que l'argent. Pour eux, ceux qui possèdent la sagesse semblent insensés.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 40,
verse: `<b>(39)	L'Évangile de Matthieu, chapitre 15, versets 7, 8 et 9 .</b>`,
meaning: `<b>
(15:7) Hypocrites ! Isaïe avait raison lorsqu’il a prophétisé à votre sujet.
<br><br>
(15:8) Ces gens m'honorent des lèvres, mais leur cœur est loin de moi.
<br><br>
(15:9) Ils m'adorent en vain ; leurs enseignements ne sont que des règles humaines. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Nous avons souvent dit : &laquo; Dieu conna&icirc;t les affaires de Dieu ; les humains ne le savent pas. Dieu peut parler de lui-m&ecirc;me, et les humains le sauront lorsque Dieu r&eacute;v&eacute;lera comment l&rsquo;adorer. Bien que Dieu ait pr&eacute;dit comment Il devrait &ecirc;tre ador&eacute;, beaucoup pr&ecirc;chent des mani&egrave;res diff&eacute;rentes qui diff&egrave;rent de ce que Dieu a dit. De nombreux swamis et gourous enseignent aux gens des r&egrave;gles cr&eacute;&eacute;es par l'homme, telles que les upadesas et d'autres m&eacute;thodes de culte. Dieu lui-m&ecirc;me r&eacute;v&egrave;le que &laquo; de telles upadesas et ce genre d&rsquo;adoration sont futiles &raquo; et ne peuvent pas rapprocher les humains de Lui. De nombreux swamis et gourous parlent de Dieu dans leurs discours, mais pr&ecirc;chent des cultes et des upadesas anti-Dieu et tacites. M&ecirc;me si ces gourous et swamis parlent de Dieu et de la sagesse, ils accomplissent des cultes futiles sans comprendre la sagesse divine et incitent les autres &agrave; faire de m&ecirc;me. Par exemple, le je&ucirc;ne n&rsquo;a rien &agrave; voir avec l&rsquo;adoration de Dieu. Non seulement ils souffrent du je&ucirc;ne, mais ils d&eacute;rangent &eacute;galement le Dieu int&eacute;rieur. C&rsquo;est ainsi qu&rsquo;ils nuisent au Dieu int&eacute;rieur. De m&ecirc;me, il a &eacute;t&eacute; dit dans la Bhagavad-Gita il y a cinq mille ans : &laquo;<strong>Vous ne pouvez pas me conna&icirc;tre et m'atteindre en &eacute;tudiant les Vedas, en faisant des dons ou en accomplissant des sacrifices (yajnas) et des p&eacute;nitences (tapas). </strong>Dans la Bhagavad-Gita, Dieu dit que beaucoup de gens l&rsquo;honorent hautement mais l&rsquo;adorent en vain, de mani&egrave;re adharma. Le Seigneur a dit la m&ecirc;me chose dans les Saintes &Eacute;critures maintenant.

	Les mots viennent de la bouche, mais les sentiments viennent du c&oelig;ur. M&ecirc;me si de nombreuses personnes font l&rsquo;&eacute;loge de Dieu, leur c&oelig;ur ne s&rsquo;aligne pas vraiment sur les principes divins. Malgr&eacute; leurs louanges, ils n&rsquo;ont pas les dharmas de Dieu dans leur c&oelig;ur. Les dharmas de Maya ont eu lieu dans leurs c&oelig;urs. Ils parlent de Dieu, mais ce qu&rsquo;ils font sous l&rsquo;influence de Maya est un culte anti-Dieu. De nombreux gourous qualifient ce qu&rsquo;ils disent de sagesse divine, mais le culte qu&rsquo;ils accomplissent, comme Dieu l&rsquo;a dit, ne les unira pas &agrave; Dieu. La Gita avertit &eacute;galement que ces cultes sont sur la mauvaise voie. Cependant, les c&eacute;l&egrave;bres Peetadipatis pratiquent des yajnas, des dons, des je&ucirc;nes, des chants v&eacute;diques et des p&eacute;nitences futiles. La Sainte Bible et la Bhagavad-Gita d&eacute;clarent que ceux qui se livrent &agrave; ces pratiques sont loin de Dieu. Par cons&eacute;quent, &agrave; partir de maintenant, non seulement glorifions Dieu dans nos paroles, mais suivons &eacute;galement ce que Dieu a dit, laissant derri&egrave;re nous une adoration futile et anti-Dieu.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 41,
verse: `<b>(40)	L'Évangile de Matthieu, chapitre 15, verset 11.</b>`,
meaning: ` <b>
(15:11) Ce qui entre dans la bouche de quelqu'un ne le souille pas, mais ce qui vient ce qui sort de leur bouche, c'est ce qui les souille. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	L&rsquo;homme consomme de la nourriture par la bouche et la vari&eacute;t&eacute; des aliments est vaste et ne se limite pas &agrave; un seul type. Les individus peuvent &ecirc;tre class&eacute;s comme v&eacute;g&eacute;tariens ou non v&eacute;g&eacute;tariens. Certains chefs spirituels, tels que les swamis et les gourous, pr&eacute;conisent le v&eacute;g&eacute;tarisme comme moyen de comprendre la sagesse de Dieu, affirmant qu&rsquo;il est essentiel d&rsquo;&eacute;viter la viande. Ici, le Seigneur a dit : <strong>&laquo; Ce qui entre dans la bouche de quelqu&rsquo;un ne le souille pas, mais ce qui sort de sa bouche, c&rsquo;est cela qui le souille. &raquo; </strong>Il existe diverses opinions concernant les pratiques alimentaires de ceux qui suivent le chemin de la sagesse divine. Certains recommandent de s&rsquo;abstenir de nourriture non v&eacute;g&eacute;tarienne, tandis que d&rsquo;autres sugg&egrave;rent un r&eacute;gime exclusivement compos&eacute; d&rsquo;aliments crus et non cuits. Certains proposent un r&eacute;gime v&eacute;g&eacute;tarien limit&eacute; &agrave; un repas par jour. Malgr&eacute; ces diverses restrictions alimentaires, il est soulign&eacute; que le caract&egrave;re sacr&eacute; ou impur d&rsquo;un individu n&rsquo;est pas d&eacute;termin&eacute; par la nourriture consomm&eacute;e. M&ecirc;me si la nourriture que nous mangeons peut avoir un impact sur la sant&eacute; physique, elle n&rsquo;influence pas la puret&eacute; spirituelle. Manger un aliment particulier n&rsquo;emp&ecirc;che pas la poursuite de la sagesse divine. L'homme consomme de la nourriture avec sa bouche et articule des mots avec le m&ecirc;me organe. Notamment, le processus d&rsquo;ingestion de nourriture par la bouche ne pose aucun probl&egrave;me ; ce sont plut&ocirc;t les mots qui sortent de la bouche qui ont le potentiel de souiller une personne. Alors que l&rsquo;homme s&rsquo;engage dans des actions et des expressions verbales, sa vraie nature se d&eacute;voile &agrave; travers ses paroles. <strong>Les anciens soutiennent la croyance selon laquelle celui qui poss&egrave;de la sagesse divine est consid&eacute;r&eacute; comme saint, tandis que celui qui manque de sagesse est consid&eacute;r&eacute; comme impur. </strong>Une personne sage est consid&eacute;r&eacute;e comme pure sur la base de son discours. &Agrave; l&rsquo;inverse, l&rsquo;ignorance est r&eacute;v&eacute;l&eacute;e dans les paroles de quelqu&rsquo;un qui manque de sagesse. La souillure d'un individu devient &eacute;vidente &agrave; travers son discours ; par cons&eacute;quent, J&eacute;sus a transmis le verset susmentionn&eacute;. Selon les enseignements de la Bible et de la Bhagavad-Gita, une personne n&rsquo;est pas souill&eacute;e par la nourriture qu&rsquo;elle consomme. C&rsquo;est plut&ocirc;t le karma de chacun qui assure sa subsistance. Ceux qui suivent le chemin de la sagesse ne sont pas soumis &agrave; des restrictions alimentaires. Ce qui compte pour Dieu n&rsquo;est pas la nourriture sp&eacute;cifique consomm&eacute;e mais l&rsquo;adh&eacute;sion au chemin de la sagesse. Par cons&eacute;quent, toute nourriture consomm&eacute;e conform&eacute;ment &agrave; ses habitudes est sans cons&eacute;quence pour Dieu.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 42,
verse: `<b>(41)	L'Évangile de Matthieu, chapitre 15, versets 12 et 13.</b>`,
meaning: `<b>
(15:12) Alors les disciples vinrent vers lui et lui demandèrent : « Savez-vous que les pharisiens ont été offensés en entendant cela ?
<br><br>
(15:13) Il répondit : « Toute plante que mon Père céleste n’a pas plantée sera arrachée par les racines. »</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Lorsque le Seigneur a proclam&eacute; que l&rsquo;homme n&rsquo;est pas souill&eacute; par la nourriture et qu&rsquo;il est libre de consommer n&rsquo;importe quelle nourriture tout en adh&eacute;rant au chemin de Dieu, les pharisiens ont soulev&eacute; des objections. Ils contestaient le manque de sagesse divine dans les paroles du Seigneur et les rejetaient cat&eacute;goriquement. Accusant J&eacute;sus de promouvoir l&rsquo;ignorance, ils remettaient en question la source de son autorit&eacute; pour enseigner de tels principes. Les Pharisiens, se consid&eacute;rant comme de grands enseignants, affirmaient qu&rsquo;eux seuls poss&eacute;daient l&rsquo;autorit&eacute; l&eacute;gitime pour transmettre la sagesse sur Dieu. Ayant appris les objections des pharisiens, les disciples inform&egrave;rent J&eacute;sus de la situation. En r&eacute;ponse, il a d&eacute;clar&eacute; : <strong>&laquo;&nbsp;Toute plante non plant&eacute;e par mon P&egrave;re c&eacute;leste sera d&eacute;racin&eacute;e jusqu&rsquo;aux racines.&nbsp;&raquo;</strong>

	Le P&egrave;re Paraloka, Paramatma, &eacute;tablit Ses dharmas, qui peuvent d&eacute;cliner sur Terre mais ne p&eacute;rissent jamais vraiment. Lorsqu'une telle diminution se produit, Paramatma s'incarne en tant que Bhagavan pour renforcer ces dharmas. &Agrave; mesure que les dharmas s&rsquo;affaiblissent, les adharmas prolif&egrave;rent. Les dharmas sont divins, appartenant &agrave; Dieu, tandis que les adharmas sont affili&eacute;s &agrave; Satan. Paramatma s&egrave;me les graines des dharmas, tandis que Satan s&egrave;me celles des adharmas. Lors de l&rsquo;incarnation terrestre de Paramatma pour transmettre ses dharmas, Satan prend diverses formes telles que des &eacute;rudits, des pharisiens, des enseignants et des swamis. Sous cette forme, Satan transmet sa propre version de la sagesse, persuadant les humains que ses dharmas sont synonymes des dharmas de Dieu. Les dharmas de Maya (Satan) sapent parfois les dharmas de Paramatma. Certains peuvent se demander pourquoi les dharmas de Maya peuvent affaiblir les puissants dharmas de Dieu. Paramatma, en tant que P&egrave;re Paraloka, s'incarne en tant que Bhagavan dans un lieu et un moment sp&eacute;cifiques pour propager Ses dharmas. Bien que ces dharmas puissent gagner en force au cours de cette p&eacute;riode, ils diminuent apr&egrave;s quelques milliers d&rsquo;ann&eacute;es. C&rsquo;est parce que le retour de Dieu en tant que Bhagavan ne se produit que lorsque cela est jug&eacute; n&eacute;cessaire. En revanche, Maya cr&eacute;e perp&eacute;tuellement des gourous et des swamis, les convainquant que sa sagesse est synonyme de la sagesse de Dieu. &Agrave; travers eux, Maya propage continuellement ses dharmas, assurant ainsi une influence persistante sur Terre.

	Les gens sont souvent attir&eacute;s par les swamis, les gourous et les babas qui op&egrave;rent constamment sous l'influence de Maya, plut&ocirc;t que par l'apparition peu fr&eacute;quente d'un Bhagavan non identifi&eacute; qui arrive une fois tous les mille ans. Alors que Dieu se manifeste en un seul endroit &agrave; la fois, Satan na&icirc;t sous diverses formes dans de nombreux endroits, assumant des r&ocirc;les tels que ceux de swamis, de gourous et de babas, diminuant activement les dharmas de Dieu. Semblable &agrave; un champ envahi par les mauvaises herbes affectant la croissance des arbres plant&eacute;s par un agriculteur, l&rsquo;influence de Satan prolif&egrave;re autour des dharmas plant&eacute;s par Dieu. Pour contrer cela, Dieu, semblable &agrave; un agriculteur assidu, intervient en d&eacute;racinant les mauvaises herbes, y compris leurs racines, pour fortifier les arbres qu'Il a sem&eacute;s. Cependant, au fil du temps, de nombreuses mauvaises herbes peuvent refaire surface sans qu&rsquo;elles soient sem&eacute;es intentionnellement. Paramatma, compar&eacute; &agrave; un agriculteur, a initialement plant&eacute; Ses dharmas. Satan, &agrave; son tour, cultive les mauvaises herbes (adharmas) autour des plantes (dharmas) de Dieu. L&rsquo;affaiblissement naturel de la plante divine se produit sous l&rsquo;influence des mauvaises herbes mayas. Pour r&eacute;soudre ce probl&egrave;me, Dieu intervient, <strong>extraire de nombreux dharmas mayas </strong>qui ont empi&eacute;t&eacute; sur Son dharmas. Cela correspond &agrave; l&rsquo;essence de la d&eacute;claration de J&eacute;sus : Dieu d&eacute;mant&egrave;le les dharmas de Satan en sapant les siens, renfor&ccedil;ant ainsi ses principes divins.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 43,
verse: `<b>(42) L'Évangile de Matthieu, chapitre 15, verset 14.</b>`,
meaning: `<b>
(15:14) Laissez-les ; ce sont des guides aveugles. Si un aveugle conduit un aveugle, tous deux tomberont dans une fosse. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Des individus sous l&rsquo;influence des Mayas, notamment des pandits et des pharisiens, qui font eux-m&ecirc;mes partie des Mayas, ont critiqu&eacute; Bhagavan J&eacute;sus sans comprendre la sagesse de Dieu. Ils ignorent la sagesse de Dieu et n&rsquo;ont aucun aper&ccedil;u de la sagesse divine. Ils restent aveugles sans la vision de la sagesse. Comment ceux qui sont d&eacute;pourvus de la sagesse de Dieu peuvent-ils la proclamer et guider les autres dans cette voie ? Ils pr&eacute;tendent avoir la vue de la sagesse et diffusent ce qu&rsquo;ils per&ccedil;oivent comme la sagesse de Dieu. Les gens, faisant confiance &agrave; ces voyants apparents, recherchent des conseils, en supposant qu&rsquo;ils poss&egrave;dent une connaissance compl&egrave;te de la sagesse de Dieu. &Agrave; leur insu, ces dirigeants eux-m&ecirc;mes sont aveugles. Imaginez un sc&eacute;nario dans lequel une personne aveugle guide d&rsquo;autres personnes &eacute;galement aveugles, pr&eacute;tendant avoir la vue et les guidant tout au long du chemin. In&eacute;vitablement, le leader aveugle tombe dans la fosse, entra&icirc;nant les autres dans la m&ecirc;me situation. De m&ecirc;me, ceux qui ignorent la sagesse de Dieu se moquent de ceux qui poss&egrave;dent la vraie sagesse, se proclamant eux-m&ecirc;mes grands gourous. Ceux qui ont de la sagesse n&rsquo;ont pas besoin de discuter avec eux. Les individus d&eacute;pourvus de sagesse et de vision ne peuvent pas monter au sommet de Moksham. Bien que beaucoup puissent suivre un gourou d&eacute;pourvu de vision et de sagesse, aucun n&rsquo;atteint Moksham ; au lieu de cela, ils tombent dans le <strong>fosse de gunas.</strong>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 44,
verse: ` <b>(43) L'Évangile de Matthieu, chapitre 16, versets 21 et 22.<br>
L'Évangile de Matthieu, chapitre 17, versets 22 et 23.
<br>
L'Évangile de Matthieu, chapitre 20, versets 17, 18 et 19.</b>
`,
meaning: ` <b>
(16:21) À partir de ce moment-là, Jésus commença à expliquer à ses disciples qu'il devait aller à Jérusalem et souffrir beaucoup de choses de la part des anciens, des principaux sacrificateurs et des docteurs de la loi, et qu'il devait être tué. et le troisième jour ressuscitera. (Première fois)
<br><br>
(16:22) Pierre le prit à part et commença à le réprimander. "Jamais, Seigneur!" dit-il. "Cela ne vous arrivera jamais!"
<br><br>
(17:22) Lorsqu'ils se rassemblèrent en Galilée, il leur dit : « Le Fils de l'homme va être livré entre les mains des hommes. »
<br><br>
(17:23) Ils le tueront, et le troisième jour il ressuscitera. Et les disciples furent remplis de tristesse. (Deuxième fois)
<br><br>
(20:17) Or Jésus montait à Jérusalem. En chemin, il prit les Douze à part et leur dit :
<br><br>
(20:18) Nous montons à Jérusalem, et le Fils de l'homme sera livré aux principaux sacrificateurs et aux docteurs de la loi. Ils le condamneront à mort.
<br><br>
(20:19) Ils le livreront aux païens pour qu'ils se moquent, qu'ils soient fouettés et crucifié. Le troisième jour, il ressuscitera ! (Troisième fois)
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jésus, dans les chapitres 16, 17 et 20 de l'Évangile de Matthieu, a prédit son propre avenir. Il est rare que des humains ordinaires prédisent l’heure de leur mort, étant donné l’incertitude et la nature inconnue de l’avenir. Jésus, cependant, a révélé les circonstances de sa mort non pas une mais trois fois, révélant ainsi quelque chose d’extraordinaire en lui. Cet acte a servi à démontrer à l’inconscient qu’Il était plus qu’un simple être humain. La capacité de parler de sa mort avec autant de détails est rare, mais Jésus pouvait le faire parce qu’il avait prédestiné sa disparition. L’Atma est le seul déterminant du karma de la vie dans le corps.

  Jésus, à trois reprises, a explicitement parlé de sa mort imminente. Sa capacité à prédire Son destin provenait de Son karma prédéterminé. Selon Jésus, Atma – le juge du karma – est le Fils de Paramatma. Jésus a constamment affirmé que Son Père est le Saint-Esprit, s'identifiant comme l'Atma responsable de la détermination du karma. Ayant décidé du karma de sa vie, Jésus a prophétisé qu’il serait livré aux anciens et aux principaux sacrificateurs, qu’il serait tué par eux et qu’il ressusciterait le troisième jour. Remarquablement, ces événements se sont déroulés exactement comme Il l’avait prédit. Jésus a parlé de sa mort sans crainte, une démonstration que tout individu perspicace peut reconnaître, indiquant que Jésus n'était pas un homme ordinaire ; il y avait quelque chose d’extraordinaire chez Lui.

</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 45,
verse: `<b>(44)	L'Évangile de Matthieu, chapitre 19, versets 23 et 24.</b>`,
meaning: `<b>
(19:23) Alors Jésus dit à ses disciples : « En vérité, je vous le dis ; il est difficile pour quelqu'un de riche d'entrer dans le royaume de paraloka.
<br><br>
(19:24) Encore une fois, je vous le dis, il est plus facile à un chameau de passer par le trou d'une aiguille qu'à un riche d'entrer dans le royaume de Dieu.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	J&eacute;sus a transmis une parabole, d&eacute;clarant : <strong>&laquo; Il est plus facile &agrave; un chameau de passer par le trou d&rsquo;une aiguille qu&rsquo;&agrave; un riche d&rsquo;entrer dans le royaume de Dieu. &raquo; </strong>Tout comme il est impossible pour un chameau de parcourir le trou d&rsquo;une aiguille, de m&ecirc;me, il est difficile pour un individu riche d&rsquo;entrer dans le royaume de Dieu. Certains anciens croient que la richesse engendre souvent l&rsquo;arrogance, un trait consid&eacute;r&eacute; comme l&rsquo;une des six qualit&eacute;s n&eacute;gatives (gunas). L'arrogance, la cinqui&egrave;me de ces qualit&eacute;s, accompagne l'avidit&eacute; (kaama), la col&egrave;re (krodha), l'avarice (lobha), la passion (moha) et la jalousie (matsara). L'arrogance est pr&eacute;sente &agrave; des degr&eacute;s divers chez chaque individu. Que ce soit &agrave; 90 %, 80 %, 70 %, 60 %, 50 %, 40 % ou 30 %, tout le monde poss&egrave;de un certain niveau d'arrogance. Une personne peut faire preuve d&rsquo;une arrogance de 90 %, tandis qu&rsquo;une autre peut en avoir 80 %, et certaines peuvent exprimer aussi peu que 30 % d&rsquo;arrogance.

	Non seulement l&rsquo;arrogance fa&ccedil;onne les pens&eacute;es du Jeevatma dans le corps, mais les cinq autres gunas associ&eacute;s jouent &eacute;galement un r&ocirc;le important. Le niveau d&rsquo;arrogance peut varier et on observe que les pauvres font g&eacute;n&eacute;ralement preuve de moins d&rsquo;arrogance que les riches. Plus un individu est riche, plus son niveau d&rsquo;arrogance a tendance &agrave; &ecirc;tre &eacute;lev&eacute;. Quelqu'un qui poss&egrave;de des millions de dollars peut faire preuve d'un degr&eacute; d'arrogance encore plus grand et &ecirc;tre davantage influenc&eacute; par les autres gunas. La richesse a le pouvoir d&rsquo;apporter des changements significatifs chez une personne, l&rsquo;&eacute;loignant souvent de la sagesse. Dans le contexte de <strong>moksham </strong>&eacute;tant compar&eacute; au chas d&rsquo;une aiguille, l&rsquo;analogie s&rsquo;&eacute;tend au riche &eacute;tant comparable &agrave; un chameau. Tout comme un chameau ne peut pas passer par le trou d&rsquo;une aiguille, une personne riche, avec la forte influence des gunas semblables &agrave; un chameau, fait face &agrave; des d&eacute;fis pour atteindre la lib&eacute;ration. L'analogie souligne que, tout comme un chameau ne peut pas passer par le trou d'une aiguille, une personne riche, sous l'influence de puissants <strong>gunas</strong>, rencontre des obstacles en entrant dans Paraloka (moksham).
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 46,
verse: `<b>(45)	L'Évangile de Matthieu, chapitre 22, versets 36, 37, 38, 39 et 40.</b>`,
meaning: `<b>
(22:36) Maître, quel est le plus grand commandement de la Loi (Dharma Shastra) ?
<br><br>
(22:37) Jésus répondit : « Aime le Seigneur ton Dieu de tout ton cœur et de tout ton cœur. ton âme et de tout ton esprit.
<br><br>
(22:38) C'est le premier et le plus grand commandement.
<br><br>
(22:39) Et la seconde est semblable : « Aime ton prochain comme toi-même. »
<br><br>
(22:40) Toute la Loi et les Prophètes dépendent de ces deux commandements.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Certaines personnes se sont approch&eacute;es de J&eacute;sus, lui posant une question sur le commandement le plus crucial de la loi (Dharma Shastra), avec l&rsquo;intention de le tester et potentiellement de se moquer de lui s&rsquo;il tr&eacute;buchait. En r&eacute;ponse, J&eacute;sus r&eacute;pondit aussit&ocirc;t : <strong>&laquo; Aime le Seigneur ton Dieu de tout ton c&oelig;ur, de toute ton &acirc;me et de tout ton esprit. &raquo; </strong>Il a soulign&eacute; que cette directive &eacute;tait le commandement principal et le plus grand, suivi d'un deuxi&egrave;me commandement. L&rsquo;utilisation du terme &laquo; commandement &raquo; dans ce verset souligne sa signification, J&eacute;sus affirmant que ces deux commandements servent de fondement &agrave; toute la loi et aux proph&egrave;tes. Ce verset est expliqu&eacute; comme suit.

	Un commandement est essentiellement une instruction donn&eacute;e &agrave; l&rsquo;action directe. Dans un contexte plus large, la question se pose : quelle est l&rsquo;autorit&eacute; qui donne l&rsquo;ordre ? La r&eacute;ponse r&eacute;side dans la compr&eacute;hension que les a&icirc;n&eacute;s donnent g&eacute;n&eacute;ralement des ordres aux plus jeunes. En &eacute;largissant cette id&eacute;e, Dieu, le cr&eacute;ateur du monde, d&eacute;tient la plus haute autorit&eacute;, et ce qu'Il communique de mani&egrave;re ordonn&eacute;e est consid&eacute;r&eacute; comme un <strong>commandement </strong>ou <strong>loi</strong>. Cette loi comporte des actes inalt&eacute;rables et est commun&eacute;ment appel&eacute;e <strong>dharma</strong>. Le terme &laquo; dharma &raquo; est utilis&eacute; parce que cette loi est intrins&egrave;quement immuable. Par exemple, le piquant d&rsquo;un piment est une caract&eacute;ristique inalt&eacute;rable, ou dharma, du piment. Ce piquant est syst&eacute;matiquement pr&eacute;sent dans tous les piments. Ainsi, on peut dire que le dharma des piments est leur piquant. De m&ecirc;me, l&rsquo;acidit&eacute; est le dharma du tamarin et l&rsquo;amertume est le dharma du neem.

	Le Dharma englobe un ensemble de r&egrave;gles et de r&egrave;glements. Si l&rsquo;on demande qui poss&egrave;de le dharma, alors tout ce qui est cr&eacute;&eacute; poss&egrave;de le dharma, tout comme le tamarin, le piment et le neem cr&eacute;&eacute;s. avoir le dharma. Puisque Dieu est le cr&eacute;ateur de la cr&eacute;ation, Il ne poss&egrave;de aucun dharma. Le Dieu cr&eacute;ateur se tient au-del&agrave; des contraintes du dharma. Atma et Jeevatma, &agrave; l'exclusion de Dieu, sont soumis aux dharmas. De plus, la Prakruti cr&eacute;&eacute;e poss&egrave;de &eacute;galement son propre ensemble de dharmas. Pour saisir Brahma Vidya ou l'&eacute;ducation spirituelle, la compr&eacute;hension des dharmas d'Atma et de Jeevatma devient cruciale. Jeevatma, sp&eacute;cifiquement destin&eacute; &agrave; comprendre Brahma Vidya, <strong>il suffit de se familiariser avec le dharma de l'Atma.</strong>

	Dans ce verset, la m&eacute;thode de compr&eacute;hension de l&rsquo;Atma est soulign&eacute;e comme &eacute;tant significative. Le Dharma Shastra plonge dans la nature de l'Atma, le dharma principal &eacute;tant d&eacute;crit comme <strong>&laquo; Aimer le Seigneur votre Dieu est le premier et le plus grand commandement. &raquo; </strong>Le Seigneur dont il est question ici est avant tout celui qui est n&eacute;. J&eacute;sus a soulign&eacute; que le commandement primordial est d&rsquo;aimer le Dieu qui est n&eacute;. Cependant, une question se pose : lorsque Dieu est le cr&eacute;ateur, incr&eacute;&eacute; et d&eacute;pourvu de dharma, comment le n&eacute; originel (le Seigneur) peut-il &eacute;galement &ecirc;tre consid&eacute;r&eacute; comme Dieu ? Le dilemme est de savoir si celui qui existe en soi est Dieu ou celui qui est n&eacute; est Dieu. La r&eacute;ponse &agrave; ce dilemme est &eacute;lucid&eacute;e comme suit.

	Dieu, l'enfant &agrave; na&icirc;tre et cr&eacute;ateur, n'a pas connu de naissance. Initialement, Dieu a cr&eacute;&eacute; Prakruti. Apr&egrave;s la cr&eacute;ation de Prakruti, Dieu (Paramatma) avait l'intention de faire na&icirc;tre des &ecirc;tres vivants. Une fois Prakruti form&eacute;e, Dieu a choisi de ne pas s&rsquo;engager dans une action directe. Apr&egrave;s avoir cr&eacute;&eacute; les cinq &eacute;l&eacute;ments &ndash; le Ciel, l&rsquo;Air, le Feu, l&rsquo;Eau et la Terre &ndash; Dieu a souhait&eacute; un &eacute;tat d&rsquo;inactivit&eacute;. Quand Dieu a voulu se manifester sous une forme, <strong>Atma </strong>(le Seigneur) est n&eacute; pour cr&eacute;er, gouverner et, finalement, mettre fin aux &ecirc;tres vivants. Atma formule des r&egrave;gles et supervise le cycle de vie et de mort de tous les &ecirc;tres vivants. Puisque Atma est le cr&eacute;ateur de tous les &ecirc;tres vivants, il convient de se r&eacute;f&eacute;rer &agrave; Atma comme &agrave; Dieu. <strong>Par cons&eacute;quent, Dieu, le cr&eacute;ateur de Prakruti, est reconnu comme l'entit&eacute; principale, tandis que Dieu, le cr&eacute;ateur des organismes vivants au sein de Prakruti, est reconnu comme l'entit&eacute; secondaire.</strong>

	Le premier Dieu, reconnu comme Paramatma, a cr&eacute;&eacute; l'Atma, est Dieu de l'Atma et reste distinct de l'Atma. Le deuxi&egrave;me Dieu, connu sous le nom d'Atma, est le cr&eacute;ateur des &ecirc;tres vivants. Bien que Paramatma et Atma fonctionnent tous deux comme des cr&eacute;ateurs et des dieux, <strong>le premier Dieu (Paramatma) est au-del&agrave; des dharmas, tandis que le second Dieu (Atma) adh&egrave;re aux dharmas. Le Dieu sans dharmas est le cr&eacute;ateur principal, tandis que le Dieu avec les dharmas est le cr&eacute;ateur secondaire. </strong>Personne ne sait qu'il existe deux dieux dans le monde. M&ecirc;me s'il existe deux dieux, le premier &eacute;tant le plus grand, l'Atma rev&ecirc;t une signification particuli&egrave;re pour les humains en tant que cr&eacute;ateur des &ecirc;tres humains. Il est essentiel que les humains v&eacute;n&egrave;rent Atma exclusivement. Les individus sont encourag&eacute;s &agrave; comprendre les dharmas associ&eacute;s au deuxi&egrave;me Dieu. Il est important de noter que tous les dharmas r&eacute;v&eacute;l&eacute;s dans les &Eacute;critures sont centr&eacute;s sur l&rsquo;Atma.

	Si une personne d&eacute;sire adorer et prier, elle est dirig&eacute;e vers le deuxi&egrave;me Dieu, Atma. Personne ne peut adorer le premier Dieu. Il n&rsquo;est possible &agrave; personne de le prier ou de l&rsquo;adorer. L'adoration et la pri&egrave;re au premier Dieu sont jug&eacute;es inutiles, pour cela <strong>Dieu n'engendre ni n'est n&eacute;</strong>, comme le souligne l&rsquo;&Eacute;criture finale. La sourate 112 renforce encore cela <strong>le premier Dieu est indiff&eacute;rent aux pri&egrave;res</strong>. Il est &agrave; noter que les chr&eacute;tiens et les musulmans peuvent ne pas reconna&icirc;tre l&rsquo;existence de deux dieux (deux Allah), car ils croient en un Dieu unique qu&rsquo;ils adorent. Cependant, la distinction entre <strong>le Dieu &agrave; adorer et le Dieu cr&eacute;ateur initial </strong>est souvent n&eacute;glig&eacute;. Les hindous sont Je ne connais pas Dieu, mais j'adore de nombreuses divinit&eacute;s et je marche compl&egrave;tement sur le mauvais chemin (chemin ignorant).

	Le premier Dieu transcende le royaume des dharmas, le rendant inconnaissable et au-del&agrave; de l&rsquo;adoration. Pour adorer Atma, le Dieu gouvern&eacute; par les dharmas, des &eacute;l&eacute;ments sp&eacute;cifiques du corps humain deviennent essentiels. Selon le Dharma Shastra, il est crucial pour Jeeva d'adorer Atma, le Dieu, en utilisant &agrave; la fois le manas et le bouddhi. Cela devient un dharma significatif. Le verset souligne : <strong>&laquo;&nbsp;Aimez Atma, le Dieu, de tout votre c&oelig;ur, de toute votre &acirc;me et de tout votre esprit&nbsp;&raquo; </strong>o&ugrave; l'amour est interpr&eacute;t&eacute; comme une adoration. Cela constitue le commandement ou dharma le plus important<strong>. En interpr&eacute;tant le commandement comme un dharma, &laquo; tout votre c&oelig;ur &raquo; signifie tout votre buddhi, et &laquo; toute votre &acirc;me &raquo; fait r&eacute;f&eacute;rence &agrave; vous, Jeeva. L'amour, dans ce contexte, implique l'adoration. Dans le Dharma Shastra, il est dit que vous devez adorer Atma, le Dieu, avec votre esprit et votre buddhi. </strong>Avec la mention du deuxi&egrave;me commandement, examinons ce qu&rsquo;il implique.

	Le deuxi&egrave;me commandement enseigne : <strong>&laquo; Aime ton prochain comme toi-m&ecirc;me. &raquo; </strong>Ces deux commandements constituent la pierre angulaire du Dharma Shastra et des enseignements des proph&egrave;tes, comme indiqu&eacute; dans le verset. Essentiellement, ils servent de fondement aux dharmas dans le domaine de Brahma Vidya et aux conseils fournis par les proph&egrave;tes pour transmettre ces dharmas. Le verset sugg&egrave;re subtilement que l&rsquo;amour-propre et la priorit&eacute; accord&eacute;e au bien-&ecirc;tre personnel sont des tendances universelles. Face &agrave; des menaces, les individus font preuve d&rsquo;un instinct inn&eacute; pour prot&eacute;ger leur propre vie, allant souvent jusqu&rsquo;au bout, m&ecirc;me au prix de sacrifices de biens. Le profond espoir que les individus nourrissent pour leur propre vie est &eacute;vident dans leurs pri&egrave;res adress&eacute;es &agrave; diverses divinit&eacute;s et dans leur volont&eacute; de prendre toute mesure pour assurer leur bien-&ecirc;tre. Cette observation met en &eacute;vidence la tendance inn&eacute;e des individus &agrave; donner la priorit&eacute; &agrave; l&rsquo;amour-propre. Le verset dit : &laquo; Aime ton prochain comme toi-m&ecirc;me &raquo;, soulignant l&rsquo;imp&eacute;ratif d&rsquo;accorder le m&ecirc;me degr&eacute; de soin et de consid&eacute;ration &agrave; son prochain que celui qui recherche intrins&egrave;quement son propre bien-&ecirc;tre et valorise sa propre vie.

	Alors que la compr&eacute;hension conventionnelle du &laquo; prochain &raquo; fait souvent r&eacute;f&eacute;rence &agrave; quelqu&rsquo;un qui vit &agrave; c&ocirc;t&eacute;, le verset &laquo; Aime ton prochain comme toi-m&ecirc;me &raquo; nous exhorte &agrave; &eacute;tendre notre amour &agrave; celui qui est tr&egrave;s proche de nous, et non &agrave; notre voisin d&rsquo;&agrave; c&ocirc;t&eacute;. En approfondissant, le verset nous incite &agrave; r&eacute;fl&eacute;chir sur qui est r&eacute;ellement notre prochain. Selon le verset, &agrave; part votre <strong>Atma</strong>, il n&rsquo;y a personne d&rsquo;autre dans votre corps. Si vous vous identifiez comme une &acirc;me (Jeevatma), il existe une autre &acirc;me qui vous ressemble &ndash; le deuxi&egrave;me Dieu, Atma. Au total, il n&rsquo;y a que trois &acirc;mes, ce qui signifie deux &acirc;mes en plus de vous-m&ecirc;me, dont Paramatma. Cependant, se r&eacute;f&eacute;rer &agrave; Paramatma comme &agrave; votre prochain n&rsquo;est pas pratique puisqu&rsquo;Il est omnipr&eacute;sent et omnipr&eacute;sent. &Agrave; l'exclusion de Paramatma, l'Atma restant est votre voisin. Ce concept s'aligne sur la compr&eacute;hension selon laquelle, &agrave; l'exception d'Atma et Paramatma, toute la cr&eacute;ation est consid&eacute;r&eacute;e comme une Prakruti f&eacute;minine, Atma et Paramatma repr&eacute;sentant l'aspect masculin.

	Atma, &eacute;tant la seule entit&eacute; masculine qui vous ressemble, est consid&eacute;r&eacute;e &agrave; juste titre comme votre prochain. Le premier Dieu, Paramatma, se situe au-del&agrave; du domaine du culte, des relations et des dharmas, faisant d'Atma le sujet l&eacute;gitime du culte. Les &eacute;critures divines affirment syst&eacute;matiquement la valeur d'adorer Atma, le qualifiant de <strong>'ton Allah.' </strong>Cette d&eacute;claration est r&eacute;it&eacute;r&eacute;e dans la sourate 6&nbsp;:102, 3&nbsp;:18 et 16&nbsp;:51. La signification des deux commandements &laquo;&nbsp;Aime ton prochain Atma comme toi-m&ecirc;me&nbsp;&raquo; est soulign&eacute;e dans le Dharma Shastra. <strong>L&rsquo;adoration de l&rsquo;Atma appara&icirc;t comme le devoir principal des gourous, des pr&eacute;dicateurs et des proph&egrave;tes. </strong>Cela est &eacute;vident dans la r&eacute;ponse que J&eacute;sus a donn&eacute;e &agrave; un pharisien interrog&eacute; sur le dharma le plus fondamental de la loi. R&eacute;fl&eacute;chir &agrave; ce verset incite &agrave; une consid&eacute;ration plus profonde de l&rsquo;entit&eacute; vers laquelle vous dirigez votre culte.

</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 47,
verse: ` <b>(46)	L'Évangile de Matthieu, chapitre 23, versets 8, 9 et 10.</b>`,
meaning: ` <b>
(23:8) « Mais vous ne devez pas être appelé « Rabbi », car vous avez un seul Maître, et vous êtes tous frères.
<br><br>
(23: 9) Et n’appelez personne sur terre « père », car vous avez un seul Père, et il est dans paraloka.
<br><br>
(23:10) Vous ne devez pas non plus être appelés instructeurs, car vous avez un seul instructeur, le Messie. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Certains peuvent qualifier un pr&eacute;dicateur de p&egrave;re ou consid&eacute;rer les gourous qui pr&ecirc;chent comme &eacute;gaux &agrave; un p&egrave;re. Cependant, le verset d&eacute;clare que personne ne devrait &ecirc;tre appel&eacute; pr&eacute;dicateur. Il est dit de n'appeler personne Rabbi, car il n'y a qu'un seul ma&icirc;tre et tous les autres sont fr&egrave;res, comme indiqu&eacute; dans le verset. Un pr&eacute;dicateur est quelqu'un qui enseigne, mais le verset fait sp&eacute;cifiquement r&eacute;f&eacute;rence &agrave; celui qui enseigne la sagesse divine. Selon le verset, une seule personne conna&icirc;t la sagesse divine, et personne d&rsquo;autre ne la conna&icirc;t. Pourquoi les autres ne le savent-ils pas ? Qui est celui qui sait ? La r&eacute;ponse &agrave; ces questions est la suivante.

	La sagesse de Dieu n&rsquo;est connue de personne sauf de Dieu, comme le disent les &eacute;critures divines. Il est &eacute;galement mentionn&eacute; dans les &eacute;critures divines que Dieu n&rsquo;a transmis sa sagesse &agrave; aucun &ecirc;tre humain. Cela signifie que personne ne conna&icirc;t la sagesse de Dieu. Personne ne peut donc enseigner la sagesse de Dieu. Par cons&eacute;quent, vous ne devriez pas &ecirc;tre appel&eacute; Rabbi, comme indiqu&eacute; dans le verset. Seul Dieu peut enseigner la sagesse de Dieu. Ainsi, il est dit dans le verset que votre ma&icirc;tre n&rsquo;est qu&rsquo;un, et qu&rsquo;Il est Dieu. Un &ecirc;tre humain n&rsquo;est pas un ma&icirc;tre (enseignant), et tous les &ecirc;tres humains sont fr&egrave;res, comme l&rsquo;indique le verset.

	Tout le monde a des parents biologiques. Tout le monde croit que les parents visibles depuis l&rsquo;enfance sont les vrais parents. De nombreux a&icirc;n&eacute;s vous conseillent de respecter vos parents. Tout le monde respecte ses parents biologiques. On peut dire qu&rsquo;il n&rsquo;y a pas d&rsquo;autres figures maternelles ou paternelles que les parents visibles. Tout cela est li&eacute; au monde. Cependant, tout homme a des parents invisibles et inconnus selon la sagesse divine. Si l&rsquo;on demande si les parents visibles sont de vrais parents ou si les parents invisibles sont de vrais parents, il devient &eacute;vident que les parents invisibles sont de vrais parents. La raison pour laquelle nous disons cela est que le p&egrave;re est le donneur de semences pour chaque &ecirc;tre humain. Par cons&eacute;quent, <strong>Dieu (Atma), le p&egrave;re invisible, est le donneur de graines de tous les &ecirc;tres vivants. </strong>Ainsi, le p&egrave;re invisible devient le v&eacute;ritable p&egrave;re. Que nous le sachions ou non, notre p&egrave;re biologique est Atma. Donc, <strong>n'appelle personne ton p&egrave;re sur la terre, car ton p&egrave;re est un seul, qui est en paraloka</strong>, comme le dit le verset.

	Le verset d&eacute;clare que le pr&eacute;dicateur visible n&rsquo;est pas le v&eacute;ritable pr&eacute;dicateur, que le p&egrave;re biologique n&rsquo;est pas le p&egrave;re r&eacute;el et que le gourou visible n&rsquo;est pas le bon gourou. Beaucoup enseignent quelque chose et sont appel&eacute;s gourous. Si on vous appelle gourou, alors vous jouez un r&ocirc;le qui ne vous convient pas. Dieu seul peut venir sur terre en tant que Guru &agrave; tout moment. Quand Dieu s'incarne en &ecirc;tre humain, il devient le Guru et enseigne la sagesse. Par cons&eacute;quent, nous devons comprendre que le <strong>l'incarnation de Dieu en tant qu'homme sur terre est le v&eacute;ritable Guru.</strong>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 48,
verse: ` <b>(47)	L'Évangile de Matthieu, chapitre 23, verset 15.</b>`,
meaning: `  <b>
(23:15) « Malheur à vous, docteurs de la loi et pharisiens, hypocrites ! Vous voyagez sur terre et sur mer pour gagner un seul converti, et lorsque vous avez réussi, vous en faites deux fois plus un enfant de l'enfer que vous.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La religion n’existait que trois mille ans après le Kali Yuga. Il y a deux mille ans, lorsque le christianisme est né, les chrétiens ont d’abord émergé sous forme de groupes, puis ont formé une communauté chrétienne. Après un certain temps, la communauté chrétienne s’est déclarée religion chrétienne. Ainsi est née la première religion. Après avoir prétendu être une religion chrétienne, ils ont essayé d’élargir leur foi. D’autres se sont ensuite identifiés comme une religion sur la base de leurs enseignements. Ainsi, les religions se sont créées les unes après les autres. Très vite, douze religions se sont formées sur terre. Après la création des religions, certaines personnes se sont impliquées dans l’expansion de leur foi. Ils ont voyagé sur terre et sur mer pour convertir les autres à leur religion.

  La religion est créée par la volonté des gens et non par la sagesse de Dieu. Dans ces religions créées par les hommes, il semble y avoir une sagesse divine, mais leur sagesse est contraire à la sagesse révélée par Dieu. Par conséquent, une personne qui s’appuie sur la sagesse divine et les Écritures, quelle que soit sa religion, comprendra les enseignements et la sagesse de Dieu. Si une personne est liée à la religion et prétend appartenir à un groupe religieux spécifique, elle comprendra la sagesse de Maya. Si une personne adhère à la religion, elle sera empêtrée dans le péché. En revanche, une personne sans appartenance religieuse pourra entrer dans le royaume de paraloka.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 49,
verse: `<b>(48) L'Évangile de Matthieu, chapitre 24, verset 35.</b>`,
meaning: ` <b>
(24:35) Le ciel et la terre passeront, mais mes paroles ne passeront jamais.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Paramatma (Dieu) ne parle pas. L'Atma, qui r&eacute;side dans le corps, peut parler. Atma est le deuxi&egrave;me cr&eacute;ateur et le deuxi&egrave;me Dieu. L'Atma, pr&eacute;sent dans le corps, communique par la parole. Le deuxi&egrave;me Dieu (Atma) conf&egrave;re beaucoup de sagesse &agrave; l'humanit&eacute;. La sagesse enseign&eacute;e de cette mani&egrave;re est transmise &agrave; travers les mots. Les enseignements corporels de l&rsquo;Atma, sous forme de mots, ne passeront jamais, m&ecirc;me si le ciel et la terre disparaissaient, comme indiqu&eacute; dans le verset. Ce qu'il est important de noter ici, c'est <strong>que le ciel et la terre mentionn&eacute;s passeront, mais mes paroles ne passeront jamais. </strong>Mais on peut dire que le ciel et la terre ne disparaissent jamais. Cependant, le verset semble exprimer que le ciel et la terre dispara&icirc;tront. Par cons&eacute;quent, nous devons comprendre que le ciel et la terre mentionn&eacute;s dans le verset ne sont pas le ciel et la terre que nous voyons. Le ciel et la terre d&eacute;crits dans le verset sont p&eacute;rissables. La terre et le ciel qui ne p&eacute;rissent jamais sont un type, tandis que la terre et le ciel p&eacute;rissables en sont un autre. Dans Prakruti, qui a la forme du corps humain, il y a le ciel, l'air, le feu, l'eau et Terre. Tous &ndash; le premier ciel, la derni&egrave;re terre et le reste de l&rsquo;air, du feu et de l&rsquo;eau &ndash; sous la forme du corps sont p&eacute;rissables. <strong>Le corps humain p&eacute;rira, mais la sagesse transmise par l&rsquo;homme ne passera jamais. </strong>
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 50,
verse: `<b>(49)	L'Évangile de Matthieu, chapitre 24, verset 42.</b>`,
meaning: ` <b>
(24:42) Veillez donc, car vous ne savez pas quel jour votre Seigneur viendra.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Chaque fois qu&rsquo;il y a une menace pour les dharmas de Dieu sur Terre et que les dharmas de Satan se propagent largement, Dieu envoie une partie de Lui-m&ecirc;me sur terre pour prot&eacute;ger Ses commandements (dharmas). Chaque fois que le besoin s&rsquo;en fait sentir, Dieu doit venir en tant qu&rsquo;&ecirc;tre humain. Krishna dans le Dvapara Yuga et le Seigneur J&eacute;sus dans le Kali Yuga sont venus de cette mani&egrave;re. &Eacute;tonnamment, nous avons pu les identifier apr&egrave;s leur arriv&eacute;e et leur d&eacute;part, mais lorsqu&rsquo;ils &eacute;taient sur Terre, nous ne pouvions pas identifier qui ils &eacute;taient. Personne n&rsquo;a reconnu le moment o&ugrave; Dieu Lui-m&ecirc;me est venu comme Seigneur. M&ecirc;me ceux qui voyaient sa gloire ne pouvaient pas savoir qu&rsquo;il &eacute;tait Dieu mais pensaient qu&rsquo;il &eacute;tait grand. Dans le Dvapara Yuga, Krishna a dit : <strong>"Je viendrai quand les dharmas seront pollu&eacute;s." </strong>Il est revenu en tant que Seigneur J&eacute;sus et a r&eacute;it&eacute;r&eacute; Ses dharmas. Il n&rsquo;y aura aucune diff&eacute;rence dans les commandements qu&rsquo;Il a donn&eacute;s, que ce soit dans le Dvapara Yuga ou dans le Kali Yuga. Mais il n&rsquo;y a aucune similitude dans leurs noms, leurs vies et leurs modes de vie. Par cons&eacute;quent, Satan a soulign&eacute; leurs diff&eacute;rences externes et a tromp&eacute; les humains pour qu&rsquo;ils ne r&eacute;alisent pas que les deux &eacute;taient identiques. L&rsquo;homme a besoin d&rsquo;un peu de sagesse pour savoir qui est venu, qui doit venir, quand Il est venu et quand Il peut venir. Tant que l&rsquo;homme est dans l&rsquo;ignorance, il ne conna&icirc;t pas la venue de Dieu et reste inconscient m&ecirc;me apr&egrave;s que Dieu soit venu et parti. Par cons&eacute;quent, si les gens veulent conna&icirc;tre l&rsquo;arriv&eacute;e de Dieu et Le reconna&icirc;tre, ils doivent poss&eacute;der la sagesse li&eacute;e &agrave; Dieu. De nos jours, la sagesse de Dieu n&rsquo;est pas connue et celle de Satan est largement r&eacute;pandue. Ainsi, <strong>&laquo; Vous ne savez pas quel jour votre Seigneur viendra &raquo; </strong>dit le verset<strong>. &laquo; Restez &eacute;veill&eacute; pour le conna&icirc;tre &raquo; </strong>est &eacute;galement mentionn&eacute; dans le verset. Ici <strong>&laquo; rester &eacute;veill&eacute; &raquo; signifie avoir de la sagesse.</strong>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 51,
verse: ` <b>(50) L'Évangile de Matthieu, chapitre 26, versets 26, 27 et 28.</b>`,
meaning: `<b>
(26:26) Pendant qu'ils mangeaient, Jésus prit du pain, et après avoir rendu grâce, il le rompit et le donna à ses disciples, en disant : « Prenez et mangez ; c'est mon corps.
<br><br>
(26:27) Puis il prit une coupe, et après avoir rendu grâce, il la leur donna en disant : « Buvez-en tous.
<br><br>
(26:28) Ceci est mon sang de l'alliance (la sagesse de Dieu sans les liens de l'ignorance), qui est versé pour beaucoup pour le pardon des péchés. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Pendant que J&eacute;sus et ses douze disciples mangeaient, J&eacute;sus prit du pain, le b&eacute;nit, le rompit, le donna &agrave; ses disciples et dit : <strong>&laquo; Prenez et mangez ; c'est mon corps. </strong>Il prit &eacute;galement du jus de raisin dans une tasse et dit : <strong>&laquo; Vous en buvez tous ; c'est mon sang. </strong>Il a compar&eacute; le jus de raisin &agrave; Son sang et a d&eacute;velopp&eacute; davantage en d&eacute;clarant&nbsp;: <strong>&laquo; Ceci est mon sang de l&rsquo;alliance, qui est vers&eacute; pour la multitude en r&eacute;mission des p&eacute;ch&eacute;s. &raquo; </strong>

	Ces paroles apparemment ordinaires de J&eacute;sus doivent &ecirc;tre consid&eacute;r&eacute;es parmi les plus importantes de ses enseignements. Malheureusement, certains chr&eacute;tiens, ignorant l&rsquo;essence de ces paroles prononc&eacute;es au moment des repas, ne parviennent pas &agrave; en saisir la signification. <strong>Certains interpr&egrave;tent que J&eacute;sus a prononc&eacute; ces paroles &agrave; propos de son pass&eacute; ou de son avenir alors qu&rsquo;il s&rsquo;agissait du pr&eacute;sent.</strong>

	J&eacute;sus a donn&eacute; du jus de raisin dans une coupe et a dit : &laquo; Ceci est mon sang &raquo;, mais il n'a pas pr&eacute;cis&eacute; que c'&eacute;tait le sang de son corps qui a &eacute;t&eacute; vers&eacute; sur la croix. N&eacute;anmoins, de nombreux pr&eacute;dicateurs chr&eacute;tiens attribuent le sang mentionn&eacute; dans ce verset au sang du corps de J&eacute;sus vers&eacute; sur la croix, affirmant que les p&eacute;ch&eacute;s d&rsquo;une personne sont pardonn&eacute;s parce que J&eacute;sus a vers&eacute; son sang pour les p&eacute;cheurs. Cependant, il y a une diff&eacute;rence entre ce que dit l&rsquo;homme et ce que J&eacute;sus a dit. J&eacute;sus n&rsquo;a pas mentionn&eacute; le sang de son corps dans ce verset. Dans de tels cas, il serait injuste de dire que J&eacute;sus a vers&eacute; son sang pour les p&eacute;cheurs. Ce jour-l&agrave;, ceux qui ont mis J&eacute;sus sur la croix, lui ont fait verser son sang et ont caus&eacute; sa mort, ont commis un p&eacute;ch&eacute; terrible et impardonnable. Cependant, il serait incorrect d&rsquo;affirmer que les p&eacute;ch&eacute;s des gens ont &eacute;t&eacute; pardonn&eacute;s et le seront par la mort de J&eacute;sus.

	Quand J&eacute;sus donna du jus de raisin &agrave; ses disciples et dit : <strong>&laquo; Ceci est le sang de l&rsquo;alliance, qui est r&eacute;pandu pour la multitude, en r&eacute;mission des p&eacute;ch&eacute;s &raquo; </strong>Il a utilis&eacute; le pr&eacute;sent, indiquant que cela se passait &agrave; ce moment-l&agrave;, et n'a pas mentionn&eacute; un &eacute;v&eacute;nement futur. Il n&rsquo;a pas fait allusion au futur d&eacute;versement de Son sang sur la croix. Il serait donc incorrect de pr&eacute;tendre que le sang vers&eacute; sur la croix &eacute;tait destin&eacute; au pardon des p&eacute;ch&eacute;s. <strong>Ceux qui sont responsables du fait que J&eacute;sus a vers&eacute; Son sang sur la croix ont re&ccedil;u le p&eacute;ch&eacute;, et non le pardon des p&eacute;ch&eacute;s. </strong>Ce &agrave; quoi J&eacute;sus faisait r&eacute;f&eacute;rence &eacute;tait le sang de l&rsquo;alliance, signifiant la sagesse de Dieu, qui n&rsquo;est pas li&eacute;e par l&rsquo;ignorance. Il enseignait quotidiennement cette sagesse divine, la comparant &agrave; l&rsquo;&eacute;coulement du sang de l&rsquo;alliance de sa bouche. Il a transmis chaque jour le feu de la sagesse pour br&ucirc;ler les p&eacute;ch&eacute;s humains, comparant ses enseignements au sang de l&rsquo;alliance coulant de sa bouche. La v&eacute;ritable signification de ce verset ne peut &ecirc;tre comprise que par une analyse minutieuse.

	Le sens de cette d&eacute;claration est mal compris car le mot &laquo; alliance &raquo; est souvent omis de l&rsquo;expression &laquo; sang de l&rsquo;alliance &raquo; et seul le mot &laquo; sang &raquo; est pris en compte. On ne r&eacute;alise pas que &laquo; alliance &raquo; signifie &laquo; sagesse avec dharmas &raquo;. Une autre raison pour mentionner &laquo; sang &raquo; dans le verset n&rsquo;est pas le sang physique. Le corps physique est plein de sang, et tant qu&rsquo;il y a du sang dans le corps, le corps est vivant. Si le corps verse son sang, le corps meurt. Selon cela, on apprend que l'essence du corps est le sang. Pendant qu'ils mangeaient, J&eacute;sus prit d'abord du pain et le donna &agrave; ses disciples, en disant : <strong>&laquo; Prenez et mangez ; c'est mon corps. </strong>Ici, il a compar&eacute; le pain &agrave; son corps. Puis il prit du jus de raisin dans une coupe et le leur donna en disant : <strong>" Ceci est mon sang de l'alliance. " </strong>Il a dit &agrave; propos du pain : &laquo; Ceci est mon corps. Mange &ccedil;a. J&eacute;sus a compar&eacute; le pain &agrave; son corps et leur a demand&eacute; de le manger. Si vous mangez du pain, alors vous mangez le corps de J&eacute;sus. La base et l&rsquo;essence du corps est son sang.

	Lorsqu&rsquo;on compare la sagesse divine au sang de l&rsquo;alliance, le corps de pain peut &ecirc;tre compar&eacute; aux Saintes &Eacute;critures et &agrave; la sagesse de Dieu. De cette fa&ccedil;on, <strong>le corps contient du sang et les &Eacute;critures contiennent de la sagesse. Manger le corps signifie lire l&rsquo;&Eacute;criture et sa lecture r&eacute;v&eacute;lera l&rsquo;essence de sa sagesse. Boire du sang signifie comprendre la sagesse. </strong>Malheureusement, les gens se concentrent souvent uniquement sur le pain et le raisin. le jus que J&eacute;sus a donn&eacute;, sans se rendre compte que le pain repr&eacute;sente l'&eacute;criture divine et que le jus de raisin repr&eacute;sente sa sagesse. <strong>J&eacute;sus a compar&eacute; les &Eacute;critures &agrave; son corps (pain) et la sagesse qu'il contient au sang (jus de raisin). L'effusion du sang de l'alliance fait r&eacute;f&eacute;rence &agrave; la sagesse des dharmas enseign&eacute;s &agrave; cette &eacute;poque.</strong>

	Beaucoup n&rsquo;ont pas compris que J&eacute;sus comparait les &Eacute;critures &agrave; son corps et sa sagesse au sang, ce qui conduit &agrave; croire &agrave; tort que le sang vers&eacute; sur la croix &eacute;tait destin&eacute; au pardon des p&eacute;ch&eacute;s.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 52,
verse: `<b>(51)	L'Évangile de Matthieu, chapitre 28, verset 18.</b>`,
meaning: `<b>
(28:18) Alors Jésus vint vers eux et dit : « Tout pouvoir à Paraloka et sur terre m'a été donné. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En Telugu, &laquo; Loka &raquo; signifie avoir des exp&eacute;riences. &Agrave; Loka, nous rencontrons &agrave; la fois des difficult&eacute;s et des plaisirs. L&rsquo;exp&eacute;rience du plaisir est appel&eacute;e Svarga Loka (le paradis), tandis que l&rsquo;exp&eacute;rience des difficult&eacute;s est appel&eacute;e Naraka Loka (l&rsquo;enfer). Loka n&rsquo;est pas un pays s&eacute;par&eacute; ou un lieu sp&eacute;cial ; c'est plut&ocirc;t la somme de toutes les exp&eacute;riences. Selon les exp&eacute;riences de plaisir et de chagrin de chacun, Loka est divis&eacute; en paradis et en enfer. Toutes les exp&eacute;riences du paradis et de l&rsquo;enfer se d&eacute;roulent sur terre et ne constituent pas des lieux physiques distincts. Ainsi, selon les exp&eacute;riences, nous pouvons les appeler le paradis ou l&rsquo;enfer, mais en r&eacute;alit&eacute;, le paradis et l&rsquo;enfer existent tous deux sur terre.

	Il existe deux types de lokas sur terre : Ihaloka et Paraloka. <strong>Ihaloka implique des exp&eacute;riences, alors que Paraloka n'a aucune exp&eacute;rience. </strong>Ihaloka et Paraloka existent tous deux sur terre. &laquo; Para &raquo; signifie diff&eacute;rent ou s&eacute;par&eacute;. Paraloka signifie quelque chose de diff&eacute;rent des exp&eacute;riences. En d&rsquo;autres termes, Paraloka n&rsquo;a aucune exp&eacute;rience et est distinct du loka. En telugu, &laquo; manishi&raquo; d&eacute;signe celui qui acquiert des exp&eacute;riences &agrave; travers le manas (l&rsquo;esprit). Par cons&eacute;quent, tous les habitants de la terre appartiennent &agrave; Ihaloka. Aucun homme n'a vu Paraloka. Un homme qui porte un body n'est jamais sans exp&eacute;riences. Par cons&eacute;quent, on peut dire que chaque personne appartient au loka et vit &agrave; Ihaloka. On peut dire que celui qui n'a aucune exp&eacute;rience est &agrave; Paraloka. <strong>"Toute autorit&eacute; &agrave; Paraloka et sur terre m'a &eacute;t&eacute; donn&eacute;e", a d&eacute;clar&eacute; </strong>le verset ci-dessus.

	Si J&eacute;sus &eacute;tait un homme ordinaire, il serait &agrave; Ihaloka et ne conna&icirc;trait pas Paraloka. Bien qu'il semble &ecirc;tre un homme ordinaire, son corps n'avait qu'Atma et non Jeevatma. Atma vivait dans le corps de J&eacute;sus et pr&eacute;tendait &ecirc;tre un Jeevatma. Atma et Jeevatma existent chez tous les humains, o&ugrave; Atma remplit toutes les fonctions du corps, et Jeevatma &eacute;prouve de la joie et du chagrin au travail. De cette fa&ccedil;on, on peut dire que Jeevatma dans le corps d&rsquo;une personne est parfois au paradis et en enfer &agrave; d&rsquo;autres moments. Mais quand Dieu vient sous forme humaine, Son corps n&rsquo;a pas de Jeevatma. Bien que l&rsquo;Atma travaille dans le corps du Fils de Dieu, il n&rsquo;&eacute;prouve rien. Par cons&eacute;quent, on dit qu&rsquo;il est &agrave; Paraloka. Puisque J&eacute;sus n'&eacute;tait pas un homme ordinaire, il a autorit&eacute; sur terre (Ihaloka) et Paraloka. Le Saint-Esprit, Paramatma, a donn&eacute; &agrave; Atma (J&eacute;sus) une autorit&eacute; compl&egrave;te. J&eacute;sus, qui est Atma, est aussi le chef de la sagesse divine. La sagesse de Dieu est d&eacute;sormais connue de tous, sauf de Dieu. Par cons&eacute;quent, le sujet des &acirc;mes est inconnu des gens. J&eacute;sus a enseign&eacute; la sagesse de trois &acirc;mes et a demand&eacute; &agrave; ses disciples, qui connaissaient la sagesse des &acirc;mes, d&rsquo;enseigner la sagesse de l&rsquo;Atma &agrave; tous.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 53,
verse: ` <b>(52)	L'Évangile de Matthieu, chapitre 28, versets 19 et 20.</b>`,
meaning: ` <b>
(28:19) Allez donc faire de toutes les nations des disciples, en les baptisant au nom du Père, du Fils et du Saint-Esprit.
<br><br>
(28:20) Apprenez-leur à obéir à tout ce que je vous ai commandé. Et sûrement, je suis toujours avec vous, jusqu'à la fin des temps (Yuga). </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	L'&Eacute;vangile de Matthieu compte 28 chapitres. Les derniers versets, 19 et 20 du chapitre 28, contiennent le secret de toute l'&eacute;ducation spirituelle. Les informations sur les trois &acirc;mes mentionn&eacute;es au verset 19 constituent la sagesse la plus importante des &Eacute;critures. Dans ce verset, le mot &laquo; P&egrave;re &raquo; est utilis&eacute; avant le mot &laquo; Fils &raquo;, ce qui n&eacute;cessite une r&eacute;flexion approfondie pour le comprendre. Ceux qui r&eacute;fl&eacute;chissent &agrave; cela sauront que la s&eacute;quence est le Fils, le P&egrave;re et le Saint-Esprit. Pour expliquer davantage, <strong>il faut comprendre que le Fils est Jeevatma, le P&egrave;re est Atma et le Saint-Esprit est Paramatma. </strong>Il n&rsquo;y a pas d&rsquo;autres &acirc;mes au monde que ces trois-l&agrave;. Selon le th&eacute;or&egrave;me de Thraitha, ces trois &acirc;mes sont Jeevatma, Atma et Paramatma.

	Le bapt&ecirc;me signifie upadesa. En Telugu, &laquo; Upa &raquo; (sub) signifie adjacent. Upadesa d&eacute;signe un pays voisin ou adjacent. Plus pr&eacute;cis&eacute;ment, cela signifie &laquo;&nbsp;quitter le pays dans lequel vous vous trouvez actuellement et obtenir l&rsquo;autorisation de vous rendre dans le pays adjacent ou voisin&nbsp;&raquo;. Un agent doit d'abord donner la permission de se rendre dans le pays voisin. Cet officier peut &ecirc;tre appel&eacute; un gourou. Guru signifie celui qui est &agrave; la t&ecirc;te du pays voisin ou Paraloka. Peu importe le nombre de gourous sur terre, Dieu, le chef de Paraloka, est le v&eacute;ritable gourou. Dieu, le souverain de Paraloka, est le v&eacute;ritable Guru qui nous donne le v&eacute;ritable bapt&ecirc;me lorsqu'Il vient sur terre en tant qu'homme. Bien qu&rsquo;il existe de nombreux gourous sur terre, ils n&rsquo;en ont tous que le nom. Le bapt&ecirc;me qu'ils donnent n'est que de nom.

	Lorsque Dieu, le v&eacute;ritable Guru, n'est pas sur terre en tant qu'humain, selon la tradition de la sagesse, les pr&eacute;dicateurs doivent faire des disciples et leur donner des upadesa. Upadesa est comme une autorisation pour le pays voisin. Dans le processus upadesa, le gourou instruit les disciples avec de l'eau, avec un mantra, un mot ou Vibhuti (cendre sacr&eacute;e). Upadesa est une autorisation pour Paraloka, et le mot ou l'eau est comme un ticket reconnaissant l'entr&eacute;e &agrave; Paraloka. La plupart des gourous utilisent un mantra ou un mot dans le processus upadesa. De m&ecirc;me, J&eacute;sus a dit &agrave; ses disciples : <strong>&laquo; Allez et faites des disciples de toutes les nations. &raquo; </strong>Il a &eacute;galement dit &agrave; ses disciples de les baptiser lorsqu&rsquo;ils deviendraient disciples. En donnant aux disciples le ticket de permission dans le processus upadesa, Il a dit : &laquo; Baptisez-les au nom des trois &acirc;mes &ndash; le P&egrave;re, le Fils et le Saint-Esprit. &raquo; Selon la tradition de sagesse, le bapt&ecirc;me devrait se faire de cette fa&ccedil;on. Ainsi, lorsque Jean, un gourou, a donn&eacute; le bapt&ecirc;me, il a administr&eacute; le bapt&ecirc;me d&rsquo;eau. Selon cette m&eacute;thode, J&eacute;sus a &eacute;galement re&ccedil;u l&rsquo;upadesa de Jean. A ce moment-l&agrave;, Jean vit J&eacute;sus et parla.

	C'est ce que dit l'&Eacute;vangile de Matthieu aux versets 3&nbsp;:14 et 3&nbsp;:15. <strong>Lorsque J&eacute;sus est venu vers lui, Jean a essay&eacute; de le dissuader en disant : &laquo; J'ai besoin d'&ecirc;tre baptis&eacute; par toi, et viens-tu &agrave; moi ? J&eacute;sus r&eacute;pondit : &laquo; Qu&rsquo;il en soit ainsi maintenant ; il nous convient de faire cela pour accomplir toute justice (sagesse). </strong>M&ecirc;me J&eacute;sus a dit qu'il fallait recevoir le bapt&ecirc;me du Guru selon la tradition de la sagesse. J'ai aussi dit la m&ecirc;me chose &agrave; propos du bapt&ecirc;me.

	J&eacute;sus a autoris&eacute; ses disciples &agrave; donner le bapt&ecirc;me et a d&eacute;clar&eacute; : &laquo; Tous les hommes doivent &ecirc;tre baptis&eacute;s, pas seulement une caste ou un groupe. &raquo; Il leur a &eacute;galement dit de donner un document d'entr&eacute;e du P&egrave;re, du Fils et du Saint-Esprit. J&eacute;sus a dit &agrave; ses disciples de faire le travail parce que Dieu ne pouvait pas toujours &ecirc;tre sur terre en tant qu'homme pour donner l'upadesa. En plus du bapt&ecirc;me, J&eacute;sus a &eacute;galement dit &agrave; ses disciples de leur apprendre &agrave; ob&eacute;ir &agrave; tout ce qu&rsquo;il leur disait.

	J&eacute;sus a &eacute;galement dit : &laquo; Je suis toujours avec vous &raquo;, sans faire douter les disciples qu'ils n'&eacute;taient pas des gourous. Il a notamment d&eacute;clar&eacute; : <strong>"Je suis toujours avec toi, m&ecirc;me jusqu'&agrave; la fin du yuga." </strong>Ceux qui connaissent les yugas peuvent poser une question lorsqu'ils entendent ce que J&eacute;sus a dit. Le Yuga (&egrave;re) ne se termine pas et un autre yuga commence &agrave; la fin du yuga actuel. Dans ce cas, pourquoi J&eacute;sus a-t-il dit qu&rsquo;il y avait une fin aux yugas, alors qu&rsquo;il n&rsquo;y en avait pas ? La r&eacute;ponse est la suivante. Le temps est &eacute;ternel et dure &eacute;ternellement, tout comme Dieu (Paramatma). Le temps, &eacute;tant le surnom de Dieu, est &eacute;galement &eacute;ternel. Puisque le temps est Paramatma, les trois &acirc;mes portent le nom du temps. Paramatma est divis&eacute; en trois &acirc;mes &ndash; Jeevatma, Atma et Paramatma. Les noms pass&eacute;, futur et pr&eacute;sent sont donn&eacute;s &agrave; l'heure afin que l'heure fasse appara&icirc;tre ces trois noms. Le nom de &laquo; yoga &raquo;, n&eacute;cessaire pour atteindre Dieu, est donn&eacute; au temps. De cette fa&ccedil;on, les quatre noms sont donn&eacute;s au temps, et le mot &laquo; yoga &raquo; est ajout&eacute; &agrave; la fin des quatre noms pour indiquer que le &laquo; yoga &raquo; est n&eacute;cessaire pour atteindre Dieu.

	Le temps est divis&eacute; en quatre parties nomm&eacute;es respectivement Kruta, Traita, Dvapara et Kali. Le mot &laquo; yoga &raquo; est ajout&eacute; &agrave; la fin de chaque nom, cr&eacute;ant les noms Kruta Yuga, Traita Yuga, Dvapara Yuga et Kali Yuga. <strong>Kruta signifie celui (Atma) qui fait. Traita signifie trois. Dvapara signifie celui (Paramatma) qui est s&eacute;par&eacute; des deux. Kali signifie celui (Jeevatma) qui est d&eacute;truit. </strong>La premi&egrave;re &eacute;criture divine fait r&eacute;f&eacute;rence &agrave; ces trois &acirc;mes comme <strong>Kshara, Akshara et Purushottama</strong>. En telugu, Kshara signifie Jeevatma destructible, Akshara signifie Atma indestructible et Purushottama signifie Paramatma, qui est sup&eacute;rieur &agrave; la fois &agrave; Jeevatma et &agrave; Atma. Dans la derni&egrave;re &eacute;criture divine, le verset 50&nbsp;:&nbsp;21, ces trois-l&agrave; sont appel&eacute;s <strong>le passager, le conducteur et le t&eacute;moin</strong>, et dans la deuxi&egrave;me &eacute;criture divine, <strong>le Fils, le P&egrave;re et le Saint-Esprit. Yogam </strong>est n&eacute;cessaire pour comprendre ces trois m&acirc;les (Purusha), c'est pourquoi le mot &laquo; yoga &raquo; est ajout&eacute; &agrave; la fin des quatre noms de yuga. Gr&acirc;ce au yogam, Jeevatma peut se conna&icirc;tre ; c'est pourquoi on l'appelle Kali Yogam. Avec le yogam, l'Atma sera connu ; c'est pourquoi on l'appelle Kruta Yogam. Par le yogam, on peut atteindre Paramatma ; c&rsquo;est pourquoi on l&rsquo;appelle Traita Yogam et Dvapara Yogam. Ceux qui sont riches en sagesse divine ont donn&eacute; ces noms. Au fil du temps, Traita est devenu Treta et le mot yogam est devenu yuga. C'est pourquoi dans le verset, <strong>'fin du yuga' </strong>est utilis&eacute; &agrave; la place de <strong>'fin du yogam.' </strong>Lorsque le mot correct est utilis&eacute;, la d&eacute;claration de J&eacute;sus &laquo; Je serai toujours avec vous jusqu&rsquo;&agrave; la fin du yogam &raquo; peut &ecirc;tre interpr&eacute;t&eacute;e comme &laquo; Je suis toujours avec vous jusqu&rsquo;&agrave; la conclusion du yogam &raquo;. Lorsque Jeevatma atteint la fin du yogam, il s'unit &agrave; Dieu. Lorsque Dieu et Jeeva sont s&eacute;par&eacute;s, le yogam est n&eacute;cessaire &agrave; l'union avec Dieu et Dieu sera pr&eacute;sent avec Jeevatma. <strong>Une fois le yoga termin&eacute;, Jeevatma fusionnera avec Dieu</strong>, et il ne sera plus n&eacute;cessaire que Dieu soit pr&eacute;sent avec Jeevatma. C'est le sens de la d&eacute;claration <strong>"jusqu'&agrave; la fin du yuga.</strong>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 54,
verse: ` <b>(1)	L'Évangile de Marc, chapitre 2, versets 19 et 20.</b>`,
meaning: `<b>
(2:19) Comment les invités de l'époux peuvent-ils jeûner pendant qu'il est avec eux ? Ils ne le peuvent pas, tant qu’ils l’ont avec eux.
<br><br>
(2:20) Mais le temps viendra où l'époux leur sera enlevé, et ce jour-là ils jeûneront. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Certaines personnes sont venues vers Jésus et lui ont demandé : « Pourquoi les disciples de Jean et les disciples des Pharisiens jeûnent-ils, et pas les vôtres ? Jésus répondit avec les versets suivants. Dans ce contexte, le jeûne fait référence à l’abstention de nourriture, une signification mondaine courante. En telugu, le mot pour le marié est « Pellikoduku », qui se traduit par « fils du mariage ». En telugu, l'expression « fils du mariage » a une signification particulière car le mot « mariage » (ou « Pelli » en telugu) symbolise Dieu dans un sens spirituel. Par conséquent, le « fils du mariage » fait référence au Fils de Dieu. Lorsque Jésus, le Fils de Dieu, est avec ses disciples, ils connaîtront la joie et ne jeûneront pas. Cependant, lorsque l'époux (le Fils de Dieu) leur est enlevé, ceux qui étaient avec lui jeûneront de chagrin parce qu'il les quitte. De même, les disciples de Jésus ne jeûneront pas tant qu’il sera présent avec eux. Quand Jésus est absent, ils jeûnent dans le chagrin. L’expression « époux » (le fils du mariage) doit être comprise comme faisant référence au Fils de Dieu.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 55,
verse: `<b>(2) L'Évangile de Marc, chapitre 4, versets 38 et 39.</b>`,
meaning: ` <b>
(4:38) Jésus était à l'arrière, dormant sur un coussin. Les disciples le réveillèrent et lui dit : « Maître, cela ne vous dérange pas si nous nous noyons ?
<br><br>
(4:39) Il se leva, réprimanda le vent et dit aux vagues : « Silence ! Restez tranquille ! Puis le vent s'est calmé et c'était complètement calme.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Alors que Jésus et ses disciples traversaient la mer dans un petit bateau, ils ont rencontré une tempête et le bateau a commencé à prendre l'eau à cause des vagues. Les disciples étaient terrifiés et craignaient de se noyer. Ils réveillèrent Jésus et l'informèrent de la situation périlleuse. Jésus se leva, réprimanda le vent et ordonna aux vagues de se calmer. Le vent cessa et le calme descendit sur la mer. Les disciples furent étonnés et se demandèrent entre eux : « C’est un grand prodige, et comment est-ce arrivé ? » Ils reconnaissaient la puissance de Jésus, mais ils n’en comprenaient pas pleinement la raison. Il y a une sagesse remarquable dans cet incident.

  Jésus n'est pas un homme ordinaire ; il faut souligner qu’Il est Dieu, qui ressemblait et se comportait comme un homme ordinaire. Quand Dieu, le Saint-Esprit, apparaît sous forme humaine, personne ne peut le reconnaître. La naissance de Dieu est un secret lorsqu’Il est un être humain, et personne ne pourra jamais Le connaître par la connaissance du monde. Il n’est peut-être possible de le connaître que par la sagesse. Il existe deux manières de reconnaître l’incarnation de Dieu sur la base de la sagesse : 1) On peut savoir qu’il y a une incarnation de Dieu partout où les dharmas de Dieu, que personne n’a expliqués, sont révélés scientifiquement. 2) On peut dire que Paramatma est sous forme humaine partout où Prakruti est gouvernée. Personne ne peut reconnaître l’incarnation de Dieu sans ces deux méthodes.

  Devatas s'est incliné devant Ravana Brahma dans le Traita Yuga. Lorsqu’Il ordonna les neuf planètes, on comprit qu’Il n’était pas un homme ordinaire. Ravana Brahma enseignait des dharmas divins, inconnus de tous, et faisait en sorte que les gens les pratiquent. Ainsi, il est devenu connu que Ravana Brahma est l’incarnation de Dieu. De même, il est devenu connu que Krishna dans le Dvapara Yuga était l’incarnation de Dieu lorsqu’Il commandait au Soleil et enseignait les dharmas dans la Bhagavad-Gita. Jésus, venu sous forme d'homme il y a 2 000 ans, a été reconnu comme Dieu de deux manières : en commandant la mer et en enseignant les dharmas divins. La tempête pendant le voyage en mer semblait avoir pour but de faire prendre conscience aux gens de qui était Jésus. Même si l’incarnation de Dieu est secrète, Dieu a fourni cette opportunité de le savoir.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 56,
verse: `<b>(3)	L'Évangile de Marc, chapitre 5, versets 38, 39, 40, 41, 42 et 43.</b>`,
meaning: `<b>
(5:38) Lorsqu'ils arrivèrent chez le chef de la synagogue, Jésus vit une agitation, avec des gens qui pleuraient et se lamentaient fort.
<br><br>
(5:39) Il entra et leur dit : « Pourquoi toute cette agitation et ces lamentations ? L'enfant n'est pas mort mais endormi.
<br><br>
(5:40) Mais ils se sont moqués de lui. Après les avoir tous éteints, il a emmené le père de l'enfant et la mère et les disciples qui étaient avec lui et entrèrent là où était l'enfant.
<br><br>
(5:41) Il lui prit la main et lui dit : « Talitha koum ! » (ce qui signifie « Petite fille, je te le dis, lève-toi ! »).
<br><br>
(5:42) Immédiatement, la jeune fille se leva et commença à marcher (elle avait douze ans). À cela, ils furent complètement étonnés.
<br><br>
(5:43) Il a donné des ordres stricts de ne laisser personne savoir cela et leur a dit de lui donner quelque chose à manger.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  C'est une grande surprise lorsqu'une personne revient à la vie après avoir été déclarée morte. Jésus a ramené plusieurs personnes d'entre les morts au cours de sa vie. Non seulement il a ressuscité les autres, mais il est aussi ressuscité des morts. Si nous contemplons cet événement, des mystères inconnus seront découverts. Il existe quatre types de décès : le décès opportun (mort naturelle), le décès prématuré, le décès temporaire et le décès définitif. Une fois qu’une personne fait l’expérience de la mort finale, elle ne naîtra pas de nouveau ; au lieu de cela, ils atteignent la libération ou moksham. La mort naturelle est la forme de mort la plus courante, dans laquelle une personne quitte son corps actuel et se dirige vers la prochaine naissance. Il n’y a pas d’autre choix que de passer à la prochaine naissance dans la mort naturelle.

  En cas de décès prématuré, une personne ne meurt pas entièrement mais perd la moitié de son corps et continue de vivre avec la moitié restante. Même si cela peut paraître incroyable, c’est pourtant ce qui se passe. Le corps humain se compose de deux parties. Le corps humain et le corps de tous les êtres vivants sont constitués de parties physiques (visibles) et non physiques (subtiles). Dans le cas du corps humain, le corps physique est composé de dix parties et le corps subtil de quinze parties. En cas de décès prématuré, une personne laisse derrière elle son corps physique composé de dix parties et continue d'exister avec son corps subtil composé de quinze parties. En conséquence, une personne qui a connu une mort prématurée peut être considérée comme « à moitié morte ». Lorsque le reste du corps subtil finit par mourir, cela conduit à la mort naturelle et la personne passe à la naissance suivante. Lors d'une mort prématurée, la personne n'est pas visible, mais elle continue d'exister avec son corps subtil jusqu'à ce qu'elle connaisse une mort naturelle.

  Actuellement, personne ne sait ce qui se passe lors d’une mort temporaire. Lors d'une mort temporaire, toutes les fonctions corporelles cessent et le Jeevatma reste dans le corps mais est en état de sommeil. En cas de mort temporaire, la personne semble morte, mais le Jeevatma reste dans le corps. Cela a conduit à des incidents où des personnes ayant connu une mort temporaire ont été déclarées mortes et enterrées par erreur, alors qu'elles étaient encore en vie. Personne ne peut détecter qu’une personne qui a subi une mort temporaire n’est pas réellement morte. En conséquence, de nombreux cas de personnes ont été enterrées vivantes.

<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
 L'histoire d'Abdul Aziz au Jammu-et-Cachemire
</b></ion-col></ion-row>
  Le 7 décembre 2009, un reportage est diffusé à 13h30 sur la chaîne TV9. Abdul Aziz, un homme de 60 ans, était décédé une semaine plus tôt, le 30 novembre 2009, à Rajouri, un village du Jammu-et-Cachemire. Conformément à la tradition islamique, comme il était musulman, il fut enterré.

  Trois jours après son enterrement, la police a reçu une plainte alléguant qu'Abdul Aziz n'était pas mort naturellement et qu'il pourrait s'agir d'un acte criminel. La police a rapidement enregistré le cas, s'est rendue au cimetière et a exhumé le cadavre d'Abdul Aziz en présence de ses proches. Son corps a ensuite été envoyé dans un hôpital public pour une autopsie.

  Lors de l'autopsie, le médecin a d'abord frappé la tête avec un couteau pour examiner le crâne, et la tête a été blessée. Au grand étonnement de toutes les personnes présentes, Abdul Aziz, présumé mort jusque-là, s'est réveillé et s'est enquis de la situation. Le médecin incrédule, encore en train de réfléchir à la tournure inattendue des événements, s’est assis et a demandé : « Nous faisons une autopsie. » Abdul Aziz a répondu calmement : « Je suis vivant. » Le médecin a immédiatement informé les proches d’Abdul Aziz de l’incident miraculeux, et ils sont arrivés pour le ramener chez lui.

  Trois jours auparavant, le même médecin avait examiné Abdul Aziz pendant quinze minutes et avait constaté son décès. Le médecin, reconnaissant le caractère extraordinaire de cet événement, le qualifia de miracle. Les habitants du village de Rajouri étaient également étonnés qu'Abdul Aziz, qu'ils avaient enterré de leurs propres mains, soit revenu à la vie trois jours plus tard.

  À l’heure actuelle, six ans et sept mois se sont écoulés depuis l’incident. Toutes les chaînes de télévision ont diffusé cette information le même jour. Étant donné que cet incident s’est produit en présence de médecins, il reste indéniable et dépasse la simple superstition.

  <ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
  Un incident dans le district de Visakhapatnam
  </b></ion-col></ion-row>
  Srungavarapu Kota est situé sur la route de la vallée d'Araku à Visakhapatnam. Il y a un village nommé Saarepuram, situé à 12 km de Srungavarapu Kota. Dans ce village vivait une femme de 67 ans nommée Samudramma qui souffrait d'hypertension et de diabète depuis dix ans. Elle a reçu des soins médicaux du Dr Dharmalingachari, médecin-chef à Srungavarapu Kota. Le Dr Dharmalingachari était un vétéran bien connu de 60 ans, diplômé en MBBS.

  Il y a six ans, un soir à 18 heures, Samudramma a été amenée chez le Dr Dharmalingachari après avoir été déclarée morte par les médecins d'un hôpital gouvernemental. Lorsque le médecin l’a examinée, il n’a pas trouvé de pouls. Il l'a déclarée morte, déclarant qu'elle n'avait besoin d'aucun traitement médical car elle n'avait ni respiration ni pouls. Son corps a été ramené dans leur village, à 12 km de là, pour être enterré le lendemain car il faisait déjà nuit. Cependant, le corps de Samudramma est resté sous le porche pendant trois jours en raison de fortes pluies qui ont duré deux jours. À la surprise générale, elle s’est levée et a appelé ses proches le quatrième matin. Ils ont immédiatement contacté le Dr Dharmalingachari et l'ont amenée chez lui après 15 jours. Le médecin lui a alors demandé si elle avait vu les serviteurs de Yama ou Yamaloka, car elle était déclarée morte depuis trois jours. Elle a dit qu'elle n'avait rien vu.

  Cet incident s'est produit il y a six ans en présence d'un médecin, il ne peut donc être nié ni rejeté comme superstitieux.
  <ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
  Survivant de Pyre (Traduit d'un journal Telugu) 10 juillet 2012, Sakshi News
  </b></ion-col></ion-row>
<strong>Chenna&iuml;&nbsp;: </strong>Mardi, les m&eacute;decins ont confirm&eacute; le d&eacute;c&egrave;s de Muttuswamy, 50 ans, de Krishurayapuram, dans le district de Karur au Tamil Nadu. Ils ont conseill&eacute; &agrave; ses proches de proc&eacute;der aux rites fun&eacute;raires. Croyant que Muttuswamy avait succomb&eacute; &agrave; la vieillesse et &agrave; la maladie, les proches se sont rassembl&eacute;s au cimeti&egrave;re pour faire le b&ucirc;cher.

    Alors qu&rsquo;ils &eacute;taient sur le point d&rsquo;allumer le feu, la s&oelig;ur de Muttuswamy, Paapatti, s&rsquo;est approch&eacute;e du corps. Accabl&eacute;e par le chagrin, elle tomba sur le cadavre et cria : &laquo; Fr&egrave;re, veux-tu me quitter ? &Agrave; ce moment poignant, les jambes et les bras de Muttuswamy boug&egrave;rent et il y eut un l&eacute;ger g&eacute;missement. Les proches, en larmes, ont &eacute;t&eacute; choqu&eacute;s et ont cri&eacute; : &laquo; Muttuswamy&hellip; Muttuswamy ! Muttuswamy s'est r&eacute;veill&eacute; du b&ucirc;cher comme s'il venait de se r&eacute;veiller et a demand&eacute; &agrave; ses proches ce qui s'&eacute;tait pass&eacute;. Ils ont tous embrass&eacute; Muttuswamy avec bonheur et l'ont ramen&eacute; &agrave; l'h&ocirc;pital. Notamment, la fille de Muttuswamy s&rsquo;&eacute;tait mari&eacute;e la veille.

<strong>N&eacute;gligence des m&eacute;decins&nbsp;: </strong>Des proches ont critiqu&eacute; les m&eacute;decins pour leur n&eacute;gligence dans le traitement de Muttuswamy, qui avait &eacute;t&eacute; admis dans un h&ocirc;pital local il y a dix jours apr&egrave;s tomber malade. Ils ont condamn&eacute; les m&eacute;decins pour cet incident et la nouvelle s'est rapidement r&eacute;pandue dans tout le district de Karur. Cet incident a suscit&eacute; un large d&eacute;bat et a &eacute;t&eacute; consid&eacute;r&eacute; comme un autre exemple de mort temporaire.

    <img src="assets/img/temp_death.png"/>
	Si une personne subit une mort temporaire, elle peut survivre dans cet &eacute;tat pendant un an ou plus. La renaissance peut se produire soit spontan&eacute;ment, soit avec l'aide de quelqu'un qui les tapote ou les r&eacute;veille. Dans de nombreux cas, les personnes qui meurent temporairement le matin se r&eacute;veillent le soir, tandis que d&rsquo;autres reprennent conscience apr&egrave;s une semaine ou plus. R&eacute;cemment, un homme nomm&eacute; Muttuswamy, au Tamil Nadu, est revenu &agrave; la vie apr&egrave;s avoir &eacute;t&eacute; sur un b&ucirc;cher fun&eacute;raire. De la m&ecirc;me mani&egrave;re, J&eacute;sus a ressuscit&eacute; une jeune fille qui avait connu une mort temporaire, d&eacute;clarant qu&rsquo;elle n&rsquo;&eacute;tait pas r&eacute;ellement morte. Il existe &eacute;galement un r&eacute;cit historique de la r&eacute;surrection de J&eacute;sus. Il est important de noter que tous ces incidents ont &eacute;t&eacute; attribu&eacute;s &agrave; des d&eacute;c&egrave;s temporaires.

	Notre &eacute;criture, '<strong>Le myst&egrave;re de la mort</strong>&raquo;, explore les quatre types de mort et leur r&eacute;alit&eacute;. La lecture de cette &Eacute;criture vous fournira une compr&eacute;hension globale des diff&eacute;rents types de mort.

  </div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 57,
verse: `<b>(4)	L'Évangile de Marc, chapitre 7, versets 15, 16, 17, 18, 19, 20, 21, 22 et 23.</b><`,
meaning: `<b>
(7:15) Rien en dehors d'une personne ne peut la souiller en entrant en elle.
<br><br>
(7:16) C'est plutôt ce qui sort d'une personne qui la souille.
<br><br>
(7:17) Après avoir quitté la foule et être entré dans la maison, ses disciples l'interrogeèrent sur cette parabole.
<br><br>
(7:18) « Es-tu si ennuyeux ? » il a demandé. « Ne voyez-vous pas que rien de ce qui entre dans un une personne de l'extérieur peut-elle les souiller ?
<br><br>
(7:19) Car cela ne rentre pas dans leur cœur mais dans leur estomac, puis hors de le corps. »
<br><br>
(7:20) Il a poursuivi : « Ce qui sort d’une personne est ce qui la souille.
<br><br>
(7:21) Car c'est de l'intérieur, du cœur d'une personne, que les mauvaises pensées viennent… l'immoralité sexuelle, le vol, le meurtre,
<br><br>
(7:22) l'adultère, l'avidité, la méchanceté, la tromperie, l'obscénité, l'envie, la calomnie, l'arrogance et la folie.
<br><br>
(7:23) Tous ces maux viennent de l’intérieur et souillent une personne.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  L'homme naît avec six mauvais gunas et six bons gunas. Les gunas grandissent également avec l'individu, influençant le bouddhi situé dans la tête et provoquant des actions extérieures sous son commandement. Buddhi demande aux karmendriyas (organes d'action) d'effectuer des actions en dehors du corps, en opérant conformément aux gunas. Comme Buddhi travaille en alignement avec les gunas, les gunas négatifs influencent buddhi, qui dirige ensuite les actions des gunas, et les sens externes répondent selon les ordres de buddhi. Ces gunas se manifestent par des qualités indésirables telles que l'avidité (kaama), la colère (krodha), l'avarice (lobha), la passion (moha), l'arrogance (madame) et la jalousie (matsara). Les gunas impactent d’abord le buddhi et gouvernent ensuite le corps à partir de là. Tous les torts commis par les humains sont enracinés dans l’influence des gunas à l’intérieur du corps.

  La nourriture consommée de l’extérieur contribue à la santé du corps mais n’affecte pas la buddhi. Ces aliments sont transformés en nutriments, favorisant ainsi le bien-être physique. La nourriture que mangent les humains n’a aucun impact direct sur la buddhi ; il pénètre dans le corps, favorisant la santé globale. Lorsque l’alimentation profite à l’organisme, elle le renforce et le maintient en bonne santé. Par conséquent, la nourriture entrant dans le corps de l’extérieur n’entraîne pas de comportement indésirable chez l’homme. C’est l’effet des gunas provenant de l’intérieur du corps qui peut entraîner une conduite négative. Par conséquent, s’écarter des règles alimentaires peut être acceptable, mais garder le contrôle sur les gunas est crucial.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 58,
verse: ` <b>(5)	L'Évangile de Marc, 3ème chapitre, 35ème verset.</b>`,
meaning: ` <b>
(3:35) Celui qui fait la volonté de Dieu est mon frère, ma sœur et ma mère. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lorsque nous nous interrogeons sur la volonté de Dieu, nous pouvons comprendre que ses commandements (dharmas) représentent sa volonté. En obéissant à ses commandements, nous nous alignons sur la volonté de Dieu. À l’inverse, si nous agissons selon nos propres désirs sans adhérer à ses commandements, nous violons ses conseils et suivons la volonté de Satan. Lorsque Dieu s'incarne sur terre en tant que Bhagavan, ceux qui comprennent sa sagesse, agissent conformément à elle, propagent ses enseignements et diffusent ses commandements se rapprocheront de lui. A l’inverse, ceux qui choisissent la voie de Satan deviennent des adversaires de Dieu. Ceux qui promeuvent activement les paroles de Dieu et adhèrent à ses commandements sont considérés comme ses sœurs, ses frères et ses plus proches disciples. Que Dieu soit physiquement présent sur terre ou non, il est crucial de reconnaître que les gnanis (ceux qui possèdent la sagesse) dans ses limites et qui suivent ses commandements seront considérés comme proches de Dieu.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 59,
verse: ` <b>(6)	L'Évangile de Marc, chapitre 4, verset 17.</b>`,
meaning: `<b>
(4:17) Mais comme ils n’ont pas de racine, ils ne durent que peu de temps. Quand des troubles ou des persécutions surviennent à cause de la parole, ils disparaissent rapidement. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dans la Gita, le Seigneur Krishna parle de quatre types de d&eacute;vots&nbsp;: 1) Ceux qui adorent en difficult&eacute;, 2) Ceux qui prient pour la richesse, 3) Ceux qui souhaitent conna&icirc;tre Dieu, 4) Ceux qui poss&egrave;dent la sagesse (Gnanis). Le Seigneur a dit dans la Gita qu'Il favorise les Gnanis. De m&ecirc;me, le Seigneur J&eacute;sus parle de quatre types de fid&egrave;les dans la Bible, mais le verset mentionn&eacute; ici ne concerne qu&rsquo;un seul de ces types. Certaines personnes sont curieuses de conna&icirc;tre la sagesse de Dieu et cherchent &agrave; la suivre. Satan commence &agrave; les tenter &agrave; sa mani&egrave;re. Ils font face &agrave; de nombreux probl&egrave;mes dans ce processus. Lorsqu&rsquo;ils rencontrent des difficult&eacute;s &agrave; cause de la sagesse, Satan commence &agrave; pr&ecirc;cher dans leur t&ecirc;te. Satan leur dit : &laquo; Vous faites face &agrave; des difficult&eacute;s parce que vous connaissez la sagesse. Ne soyez pas stupide. Vous pouvez &eacute;chapper aux probl&egrave;mes &agrave; venir en faisant semblant d&rsquo;&ecirc;tre sur le chemin de la sagesse. Ceux qui ne comprennent pas la v&eacute;ritable essence de la sagesse peuvent commencer &agrave; agir en cons&eacute;quence. Apr&egrave;s un certain temps, si la personne fait face &agrave; des probl&egrave;mes &agrave; cause de la sagesse ou du Guru, et que ces probl&egrave;mes conduisent &agrave; des conflits avec les autres ou &agrave; des craintes de pers&eacute;cution, Maya profitera de la situation. Maya cr&eacute;e ce genre de pens&eacute;es dans la t&ecirc;te de la personne, et les individus peuvent commencer &agrave; penser : &laquo; J'aurais d&ucirc; &ecirc;tre plus sage d&egrave;s le d&eacute;but. Je me suis retrouv&eacute; dans cette situation parce que j'ai suivi le Guru pour la sagesse, m&ecirc;me si mes proches m'avaient pr&eacute;venu de ne pas le faire. Pourquoi devrais-je souffrir pour cette sagesse ? Il vaut mieux abandonner la sagesse et le Guru. Suivre aveugl&eacute;ment la sagesse ne m&egrave;nera qu&rsquo;&agrave; la ruine pour ma famille et moi. Puisque nous sommes dans le monde, nous devons nous conformer &agrave; ses voies. Les habitants de la for&ecirc;t ne rencontrent aucun probl&egrave;me, quelles que soient leurs actions, mais il serait insens&eacute; pour nous, au village, d&rsquo;aller &agrave; l&rsquo;encontre des normes. De telles pens&eacute;es peuvent amener les individus &agrave; s&rsquo;&eacute;loigner de la sagesse, m&ecirc;me apr&egrave;s avoir &eacute;t&eacute; sur le chemin pendant un certain temps. Par cons&eacute;quent, J&eacute;sus a dit que m&ecirc;me ceux qui sont sur le chemin de la sagesse depuis un certain temps s&rsquo;opposeront au travail et &agrave; la torture pour l&rsquo;amour de la sagesse.

	Ceux qui valorisent v&eacute;ritablement la sagesse de Dieu et comprennent son importance ne seront pas la proie des tentations de Satan. On ne peut &eacute;chapper aux griffes de Satan &agrave; moins de valoriser la sagesse et leur Guru plus que leur femme, leurs amis proches et m&ecirc;me leur propre vie, m&ecirc;me s'ils savent qu'ils peuvent &ecirc;tre confront&eacute;s &agrave; la pers&eacute;cution ou &agrave; la mort sur le chemin de la sagesse. M&ecirc;me les disciples du Seigneur J&eacute;sus avaient peur des gardes le jour de son arrestation et ont abandonn&eacute; leur Guru pour sauver leur propre vie. Ils ont fui avec peur &agrave; cause des troubles et des pers&eacute;cutions. S&rsquo;ils avaient &eacute;galement &eacute;t&eacute; pr&eacute;par&eacute;s &agrave; affronter la mort aux c&ocirc;t&eacute;s du Seigneur J&eacute;sus ce jour-l&agrave;, leur vie aurait &eacute;t&eacute; b&eacute;nie. , Maya a partiellement g&ecirc;n&eacute; les disciples ce jour-l&agrave;. Contrairement &agrave; eux, nous devons rester fermes face &agrave; tout probl&egrave;me ou pers&eacute;cution sur le chemin de la sagesse. Bienheureux est celui qui est pr&ecirc;t &agrave; mourir pour le chemin divin plut&ocirc;t que de vivre dans la peur sur le chemin de l'ignorance. Dans la Bhagavad-Gita, le Seigneur dit : &laquo;<strong>Il vaut mieux mourir dans le dharma de Paramatma, qui est votre dharma, que de craindre sur le chemin de Satan, qui n&rsquo;est pas votre dharma.</strong>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 60,
verse: ` <b>(7)	L'Évangile de Marc, chapitre 4, versets 21 et 22.</b>`,
meaning: `<b>
(4:21) Il leur dit : « Apportez-vous une lampe pour la mettre sous un bol ou un lit ? Au lieu de cela, ne le mettez-vous pas sur son support ?
<br><br>
(4:22) Car tout ce qui est caché est destiné à être révélé, et tout ce qui est caché est destiné à être révélé. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  De nos jours, de nombreux gourous disent que les disciples ne devraient pas partager leur sagesse avec les autres. Ils disent que leur sagesse est confidentielle et ne doit être partagée qu'avec ceux qui ont reçu l'upadesa. Quand quelqu’un leur pose une question, ils évitent d’y répondre. Toutefois, la sagesse ne doit pas être cachée. Dieu lui-même se présente sous forme humaine et prend la peine de transmettre la sagesse. Même si nous ne connaissons pas la vraie sagesse, nous ne devrions pas trouver d’excuses pour partager le peu de sagesse que nous connaissons. La sagesse est comme une lampe qui enlève l’ignorance chez les autres. Tout comme un objet dans l’obscurité peut être vu à la lumière d’une lampe, une chose inconnue dans l’ignorance peut être comprise avec sagesse. La sagesse est nécessaire pour dissiper l’ignorance, tout comme une lampe est nécessaire pour dissiper les ténèbres. Allumer une lampe et la garder ensuite sous un bol est une folie. De même, il n’est pas sage de ne pas partager la sagesse que vous possédez. Même les secrets sont censés être divulgués. Bhagavan a révélé la meilleure sagesse divine au monde. Dans ce cas, tout ce qui a moins de valeur que la sagesse ne peut être caché. Aucun mystère au monde ne peut rester caché ; ça va sûrement sortir. La sagesse de Dieu est nécessaire à chacun et ne doit pas être gardée secrète. Ceux qui veulent le cacher ne peuvent pas le faire.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 61,
verse: `<b>(8)	L'Évangile de Marc, chapitre 6, verset 4.</b>`,
meaning: `<b>
(6:4) Jésus leur dit : « Un prophète n'est méprisé que dans sa ville, parmi ses proches et dans sa maison. »</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En telugu, un prophète est défini comme quelqu'un qui enseigne quelque chose d'important. La sagesse de Paramatma est la chose la plus essentielle pour chaque être humain. Une personne qui transmet cette sagesse est appelée un prophète. Les humains ordinaires ne connaissent pas la sagesse de Paramatma, à l'exception de celui qui vient de Paramatma. Celui qui vient de Paramatma et est né homme s'appelle Bhagavan ou Prophète. Le prophète n'est pas honoré dans sa propre maison, parmi ses proches ou dans sa propre ville parce qu'il apparaît comme un homme ordinaire. Peu importe à quel point quelqu'un est formidable, il est naturel d'être sous-estimé à la maison et par ses proches. Puisqu’ils ont vu le prophète depuis leur enfance, les membres de leur famille et leurs proches peuvent le ridiculiser en disant qu’il n’a pas de grandeur et que seuls les insensés l’écouteront. Ils peuvent aussi prétendre qu’Il ne sait rien au-delà de ce qu’ils savent.  Même Dieu ne peut pas devenir prophète pour les membres de sa propre famille. Même lorsque d’autres reconnaissent et parlent de sa grandeur, ses proches et les membres de sa famille se demandent quelle excellence il possède. Ils ne reconnaissent pas son importance et le ridiculisent, soulignant des choses comme le fait qu’il ait mouillé son lit et sali ses sous-vêtements dans son enfance. Par conséquent, bien qu’Il soit un prophète pour les autres, Il n’est pas honoré dans Sa propre maison et dans Sa propre ville. Selon ce principe, le Seigneur Jésus n’a pas été reconnu comme prophète par sa famille et ses proches.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 62,
verse: `<b>(9)	L'Évangile de Marc, chapitre 8, verset 38.</b>`,
meaning: `<b>
(8:38) Si quelqu’un a honte de moi et de mes paroles dans cette génération adultère et pécheresse, le Fils de l’homme aura honte de lui lorsqu’il viendra dans la gloire de son Père avec les saints anges. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Certaines personnes apprennent la sagesse dans la soci&eacute;t&eacute; mais choisissent de la garder secr&egrave;te. Ils pensent que conna&icirc;tre la sagesse est une erreur ; par cons&eacute;quent, ils le font de mani&egrave;re confidentielle. Ils peuvent &eacute;galement avoir honte d&rsquo;aller voir un Guru et d&rsquo;apprendre de lui la sagesse, et donc de la garder confidentielle. Certaines personnes recherchent un gourou pour devenir disciples mais pr&eacute;f&egrave;rent un gourou riche en raison de leur statut et de leur richesse. Ils sont g&ecirc;n&eacute;s d&rsquo;approcher un pauvre Guru, m&ecirc;me si ce Guru a plus de sagesse. Par cons&eacute;quent, ils choisissent un Guru riche qui ne poss&egrave;de peut-&ecirc;tre pas beaucoup de sagesse. Bien que certaines personnes aient appris la sagesse d&rsquo;un Guru, elles ne veulent pas &ecirc;tre consid&eacute;r&eacute;es comme des disciples de ce Guru. Ainsi, de nombreuses personnes ont honte et prennent grand soin d&rsquo;&eacute;viter d&rsquo;&ecirc;tre expos&eacute;es.

	On peut avoir honte des choses mat&eacute;rielles, mais on ne devrait pas avoir honte de la sagesse de Paramatma. Prenons un exemple. Deux personnes marchent sur la route. L&rsquo;un est beau mais pauvre et inintelligent, tandis que l&rsquo;autre est peu attrayant mais riche et intelligent. Ils sont tous deux des parents proches. Les gens qui les croiseront sur la route les jugeront sur leur apparence ext&eacute;rieure et non sur leur intelligence. Au bout d'un moment, un voyageur les aper&ccedil;oit et demande au beau personnage qui est la deuxi&egrave;me personne. La personne belle a honte de dire que la personne peu attrayante est son proche parent en raison de son apparence. Au lieu de cela, il dit simplement qu'ils se connaissent. La personne peu attrayante pense qu&rsquo;elle a &eacute;t&eacute; pr&eacute;sent&eacute;e comme une connaissance plut&ocirc;t que comme un parent proche en raison de son apparence. Plus tard, un autre voyageur les voit et demande &agrave; la personne peu attrayante qui est l'autre personne. &Eacute;tant intelligente, la personne peu attrayante r&eacute;pond de la m&ecirc;me mani&egrave;re en disant qu&rsquo;elle n&rsquo;est qu&rsquo;une simple connaissance. La belle personne est heureuse d&rsquo;&ecirc;tre pr&eacute;sent&eacute;e comme une connaissance plut&ocirc;t que comme un parent. La personne peu attrayante pense : &laquo; J'ai aussi honte de pr&eacute;senter cette personne stupide comme mon proche parent. &raquo; La personne peu attrayante suivait le comportement de la belle personne.

	Le deuxi&egrave;me voyageur, qui a demand&eacute; &agrave; la personne peu attrayante, avait une r&egrave;gle depuis de nombreuses ann&eacute;es. Sa r&egrave;gle &eacute;tait de donner 10 000 pi&egrave;ces s'il rencontrait des parents proches. Cependant, bien qu'ils &eacute;taient des parents proches, ils n'ont pas re&ccedil;u les 10 000 pi&egrave;ces car ils ne se sont pas pr&eacute;sent&eacute;s comme tels. Par cons&eacute;quent, le premier pauvre n&rsquo;a re&ccedil;u aucun argent. Puisque la deuxi&egrave;me personne est riche, peu lui importe de savoir si elle a re&ccedil;u l&rsquo;argent ou non. La premi&egrave;re personne a perdu de l&rsquo;argent parce qu&rsquo;elle avait honte et qu&rsquo;elle avait menti. Si vous avez honte de la sagesse simplement parce que les autres ne l&rsquo;aiment pas, alors la sagesse a aussi honte de vous. La premi&egrave;re personne a perdu de l'argent parce qu'elle avait d'abord eu honte et avait menti. Par cons&eacute;quent, ils ne b&eacute;n&eacute;ficieraient pas de lib&eacute;ration de b&eacute;n&eacute;fices futurs. Sur cette base, le Seigneur a dit : <strong>&laquo; Si quelqu&rsquo;un a honte de moi et de mes paroles, j&rsquo;ai aussi honte de lui. &raquo; </strong>Par cons&eacute;quent, il faut comprendre qu&rsquo;il est normal d&rsquo;avoir honte des questions mat&eacute;rielles, mais il ne faut pas avoir honte de la sagesse de Paramatma.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 63,
verse: `<b>(10)	L'Évangile de Marc, chapitre 9, verset 7.</b>`,
meaning: `<b>
(9:7) Alors une nuée apparut et les couvrit, et une voix sortit de la nuée : « Celui-ci est mon Fils que j'aime. Écoutez-le !</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	La plupart des gens ne se rendent pas compte des nuages dans le ciel. Pendant la saison des pluies, les nuages produisent du tonnerre et font un grand bruit. Les nuages sont vivants et accomplissent de nombreuses t&acirc;ches, mais leurs r&ocirc;les sp&eacute;cifiques sont inconnus. Selon l&rsquo;histoire, le Soleil a entendu la sagesse divine que les nuages ont r&eacute;v&eacute;l&eacute;e pour la premi&egrave;re fois au d&eacute;but de la cr&eacute;ation. Il n&rsquo;y a pas de secrets inconnus aux nuages sur terre. Dieu derri&egrave;re les nuages a dit &agrave; propos de J&eacute;sus : <strong>&laquo; Celui-ci est mon Fils bien-aim&eacute;. &Eacute;coutez-le. </strong>Par cons&eacute;quent, c&rsquo;est la volont&eacute; de Dieu que les gens entendent la sagesse de Dieu de la part de J&eacute;sus. Ce que Dieu dit en tant qu&rsquo;homme est la sagesse de Dieu, mais lorsque les humains n&rsquo;&eacute;coutent pas, Dieu parle depuis les nuages. M&ecirc;me si les humains ne respectent pas toujours ce que disent les autres, ils appr&eacute;cient ce que disent les nuages, c&rsquo;est pourquoi Dieu a parl&eacute; depuis les nuages dans le ciel.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 64,
verse: ` <b>(11)	L'Évangile de Marc, chapitre 10, versets 17 et 18.</b>`,
meaning: ` <b>
(10:17) Alors que Jésus commençait son chemin, un homme accourut vers lui et tomba à genoux. devant lui. « Bon professeur, a-t-il demandé, que dois-je faire pour hériter de la vie éternelle ?
<br><br>
(10:18) « Pourquoi m'appelles-tu bon ? » Jésus répondit. « Personne n’est bon, sauf Dieu seul. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Certains chr&eacute;tiens affirment que la Bible a &eacute;t&eacute; &eacute;crite &agrave; l&rsquo;origine en h&eacute;breu, puis traduite dans de nombreuses autres langues. Par cons&eacute;quent, certains mots n&rsquo;ont pas &eacute;t&eacute; traduits correctement. Par exemple, l&rsquo;expression &laquo; Bon professeur &raquo; est utilis&eacute;e dans le premier verset et dans le deuxi&egrave;me verset : &laquo; Dieu est bon &raquo;. Cependant, d'apr&egrave;s ce que J&eacute;sus a dit, <strong>"Personne n'est bon, sauf Dieu seul" </strong>le mot ne devrait ni &ecirc;tre &laquo; Bon professeur &raquo; ni &laquo; Bon Dieu &raquo;. Une personne qui enseigne la sagesse avec &eacute;loquence peut &ecirc;tre appel&eacute;e un bon professeur, et quelqu'un qui accomplit de bonnes actions peut &ecirc;tre appel&eacute; une bonne personne.

	Il y a de bons professeurs et de bonnes personnes sur terre. Ce serait donc rabaisser Dieu de les comparer et de dire : <strong>"Personne n'est bon, sauf Dieu seul." </strong>A part cela, il n'y a aucune correspondance entre les mots &laquo; bon professeur &raquo; dans la premi&egrave;re phrase et &laquo;&nbsp;bonne personne&nbsp;&raquo; dans la deuxi&egrave;me phrase. La deuxi&egrave;me &eacute;criture divine, la Bible, a &eacute;t&eacute; traduite dans plus de langues que les deux autres &eacute;critures saintes. La Bible a &eacute;t&eacute; traduite en 1&nbsp;400 langues, ce qui en fait le seul texte biblique traduit dans la plupart des langues.

	La premi&egrave;re &eacute;criture divine est la base de la deuxi&egrave;me &eacute;criture divine, la Bible, et de la derni&egrave;re &eacute;criture divine, le Coran. Le Coran fournit un t&eacute;moignage en 5:44, 5:46, 5:48 et 5:68 que <strong>la sagesse de la premi&egrave;re &eacute;criture divine, la Taurat (la Bhagavad-Gita), est &eacute;galement pr&eacute;sente dans les deux autres &eacute;critures. </strong>Par cons&eacute;quent, lorsque nous consid&eacute;rons les mots utilis&eacute;s dans l'&Eacute;vangile de Marc, 10&nbsp;:17 et 10&nbsp;:18, nous pouvons comprendre qu'il peut y avoir beaucoup de bons enseignants et de bonnes personnes dans le monde, mais qu'il n'y a pas d'Uttama Purusha (&Ecirc;tre supr&ecirc;me) parmi eux. hommes. Ainsi, comme le dit la Bhagavad-Gita, <strong>"Dieu seul est Purushottama." </strong>On peut dire que des mots sans rapport ont &eacute;t&eacute; utilis&eacute;s dans les versets ci-dessus, alors que le mot aurait d&ucirc; &ecirc;tre &laquo;&nbsp;Purushottama&nbsp;&raquo;. Cela est bien compris lorsque vous regardez les versets 16, 17 et 18 du 15&egrave;me chapitre de la Bhagavad-Gita, le Purushottama Prapti Yoga.

	Selon la premi&egrave;re &eacute;criture divine, il n&rsquo;existe qu&rsquo;un seul Purusha. Bien qu'il n'y ait qu'un seul Purusha, Dieu est divis&eacute; en trois : Jeevatma, Atma et Paramatma. Parmi ces trois m&acirc;les, <strong>le m&acirc;le qui est meilleur que Jeevatma et Atma est Paramatma, &eacute;galement connu sous le nom de Purushottama</strong>, comme mentionn&eacute; dans la Bhagavad-Gita. On peut dire que tous, sauf les trois m&acirc;les, sont Prakruti, qui est f&eacute;minine. Les hommes et les femmes du monde sont tous li&eacute;s &agrave; la nature f&eacute;minine. Par cons&eacute;quent, dans le verset, J&eacute;sus dit : <strong>&laquo; Ne m'appelez pas Purushottama (Uttama Purusha). Dieu seul est Uttama Purusha. </strong>Il existe trois religions principales sur terre. Les gens de chaque religion ont pris une &eacute;criture divine et ont dit que c'&eacute;tait notre &eacute;criture. Cependant, en r&eacute;alit&eacute;, ces trois &eacute;critures ne sont li&eacute;es &agrave; aucune religion sp&eacute;cifique. Ils apportent la sagesse &agrave; tous les &ecirc;tres humains et doivent donc &ecirc;tre consid&eacute;r&eacute;s comme des &eacute;critures destin&eacute;es &agrave; tous les &ecirc;tres humains.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 4,
pageNumber: 65,
verse: `<b>(12)	L'Évangile de Marc, chapitre 16, versets 15 et 16.</b>`,
meaning: `<b>
(16:15) Il leur dit : « Allez dans le monde entier et prêchez la bonne nouvelle à tous. création.
<br><br>
(16:16) Celui qui croira et se fera baptiser sera sauvé, mais celui qui ne croira pas sera condamné.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Apr&egrave;s que J&eacute;sus ait &eacute;t&eacute; crucifi&eacute; et d&eacute;pos&eacute; dans le tombeau, il est sorti du tombeau &agrave; l'aube du dimanche matin. Il est apparu d'abord &agrave; Marie-Madeleine, puis &agrave; d'autres disciples. J&eacute;sus est apparu trente-trois fois aux disciples apr&egrave;s &ecirc;tre sorti du tombeau. Il a racont&eacute; les deux versets ci-dessus aux onze disciples alors qu&rsquo;ils &eacute;taient assis ensemble pour un repas. Puisque tous les humains du monde sont plong&eacute;s dans l&rsquo;ignorance, il a demand&eacute; &agrave; ses disciples d&rsquo;aller et <strong>pr&ecirc;cher l&rsquo;&Eacute;vangile, qui est la sagesse de Dieu</strong>, &agrave; eux. Le m&ecirc;me message est transmis dans le verset 15, <strong>&laquo; Allez dans le monde entier et pr&ecirc;chez l&rsquo;&Eacute;vangile &agrave; toute la cr&eacute;ation. &raquo; </strong>Ici, &laquo; le monde entier &raquo; ne signifie pas des mondes diff&eacute;rents ; il fait r&eacute;f&eacute;rence aux personnes qui gagnent leur vie sur terre et souffrent de diverses mani&egrave;res.

	J&eacute;sus a &eacute;galement dit : &laquo; Pr&ecirc;chez la bonne nouvelle &agrave; toute la cr&eacute;ation. &raquo; Cela signifie pr&ecirc;cher l&rsquo;&Eacute;vangile, la sagesse divine, aux personnes de tous &acirc;ges. Il a dit de leur pr&ecirc;cher la sagesse divine et de leur accorder la permission, le &laquo; bapt&ecirc;me &raquo;, d&rsquo;aller &agrave; Paraloka. Le bapt&ecirc;me est comme un permis de lib&eacute;ration ou de paraloka. Ceux qui ont obtenu la permission de pratiquer le paraloka seront sauv&eacute;s par ma sagesse et &eacute;chapperont &agrave; l'exp&eacute;rience du p&eacute;ch&eacute;. Il a dit que les troubles dus aux p&eacute;ch&eacute;s puniraient ceux qui ne sont pas baptis&eacute;s car ils n&rsquo;ont pas de protection contre les p&eacute;ch&eacute;s.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 66,
verse: `<b>(1)	L'Évangile de Luc, chapitre 2, verset 49.</b>`,
meaning: ` <b>
(2:49) « Pourquoi me cherchiez-vous ? » il a demandé. « Ne saviez-vous pas que je devais travailler dans les affaires de mon père ? </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Les parents de J&eacute;sus le cherchaient et lorsqu&rsquo;ils le virent, ils furent &eacute;tonn&eacute;s. Sa m&egrave;re lui dit : &laquo; Mon fils, pourquoi nous as-tu trait&eacute; ainsi ? Ton p&egrave;re et moi te cherchions avec anxi&eacute;t&eacute;. En r&eacute;ponse, J&eacute;sus dit : <strong>&laquo; Pourquoi me cherchais-tu ? Ne savais-tu pas que je devais </strong><strong>passer &agrave; en des affaires de mon p&egrave;re ? </strong>Bien que le p&egrave;re visible (physique) de J&eacute;sus soit &eacute;galement l&agrave;, il faisait r&eacute;f&eacute;rence &agrave; son P&egrave;re invisible (non physique). Il est important de clarifier &agrave; quel p&egrave;re J&eacute;sus faisait r&eacute;f&eacute;rence afin que nous puissions comprendre les t&acirc;ches du P&egrave;re et, par cons&eacute;quent, comprendre les t&acirc;ches que J&eacute;sus accomplirait et pourquoi il a quitt&eacute; sa m&egrave;re et son p&egrave;re.

	Selon ses propres mots, J&eacute;sus s'est d&eacute;clar&eacute; Fils de l'homme. &Agrave; certaines occasions, il pr&eacute;tendait &eacute;galement &ecirc;tre le Fils de Dieu. Il est donc &agrave; la fois Fils de l&rsquo;homme et Fils de Dieu. Si l&rsquo;on demande de qui sont tous ces gens, on peut dire que tous les humains sont fils de l&rsquo;homme. Cependant, il y a un secret impliqu&eacute; ici. Pour qu&rsquo;un homme naisse, il faut un donneur de graines (sperme). Bien qu'il soit naturel de supposer que le p&egrave;re est le donneur de graines pour la naissance d'un homme, il est important de noter que, m&ecirc;me si un homme semble &ecirc;tre un homme en apparence, il ne peut pas &ecirc;tre consid&eacute;r&eacute; comme un homme parce qu'il est cr&eacute;&eacute; comme mod&egrave;le pour un m&acirc;le. Un homme et sa femme peuvent &ecirc;tre compt&eacute;s sous le f&eacute;minin Prakruti.

	Bien que Jeevatma, qui est dans un corps humain, soit un homme li&eacute; &agrave; l'Atma, Il ne peut pas engendrer quelqu'un. L'Atma, qui est dans le corps, a donn&eacute; naissance &agrave; chaque &ecirc;tre humain. Nous avons d&eacute;j&agrave; d&eacute;clar&eacute; Atma manquant accomplit toutes les t&acirc;ches du corps et est le donneur de graines pour tous les &ecirc;tres. J&eacute;sus s'est pr&eacute;sent&eacute; comme le &laquo; Fils de l'homme &raquo;, m&ecirc;me s'il n'&eacute;tait pas un homme ordinaire, pour indiquer que son P&egrave;re n'&eacute;tait pas le Joseph visible mais plut&ocirc;t l'Atma qui r&eacute;side dans tous les corps humains. La premi&egrave;re &eacute;criture divine nous enseigne que tout &ecirc;tre vivant n&eacute; du ventre d&rsquo;une m&egrave;re a Atma pour p&egrave;re et Prakruti pour m&egrave;re. Cependant, J&eacute;sus est n&eacute; directement sans p&egrave;re physique, car Il &eacute;tait le Fils du Saint-Esprit (Paramatma), qui est diff&eacute;rent d'Atma. C'est pourquoi il est appel&eacute; le Fils de Dieu. Lorsque J&eacute;sus a rencontr&eacute; ses parents, il leur a dit qu&rsquo;il devait s&rsquo;occuper du travail de son P&egrave;re, mais il n&rsquo;a pas pr&eacute;cis&eacute; de quel p&egrave;re il faisait r&eacute;f&eacute;rence (Atma ou le Saint-Esprit). Selon lui, il se consid&eacute;rait comme le Fils de Dieu. J&eacute;sus n'a pas accompli les t&acirc;ches de l'Atma, qui est dans le corps. Il se concentrait sur la diffusion de la sagesse de Dieu. Le Paramatma omnipr&eacute;sent accomplit la t&acirc;che de diffuser la sagesse divine. Par cons&eacute;quent, J&eacute;sus avait l&rsquo;intention d&rsquo;accomplir l&rsquo;&oelig;uvre de son P&egrave;re (le Saint-Esprit). Paramatma lui-m&ecirc;me a cr&eacute;&eacute; un corps et l'a rempli de sa propre &acirc;me. M&ecirc;me si J&eacute;sus &eacute;tait Dieu, il se r&eacute;f&eacute;rait &agrave; lui-m&ecirc;me comme au Fils de l&rsquo;homme &agrave; certains moments et au Fils de Dieu &agrave; d&rsquo;autres moments pour emp&ecirc;cher les gens de le reconna&icirc;tre.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 67,
verse: `<b>(2)	L'Évangile de Luc, chapitre 11, versets 37, 38, 39, 40 et 41.</b>`,
meaning: `<b>
(11:37) Pendant que Jésus parlait, un des pharisiens l'invita chez lui pour un repas. Alors il entra et prit place à table
<br><br>
(11:38) Son hôte fut étonné de voir qu'il s'asseyait pour manger sans avoir au préalable effectué la cérémonie de lavage des mains exigée par la coutume juive.
<br><br>
(11:39) Alors le Seigneur lui dit : « Vous, les Pharisiens, faites si attention à nettoyer l'extérieur de la coupe et du plat, mais à l'intérieur vous êtes sales, pleins d'avidité et de méchanceté !
<br><br>
(11:40) Imbéciles ! Dieu n’a-t-il pas créé l’intérieur comme l’extérieur ?
<br><br>
(11:41) Alors, nettoyez l'intérieur en offrant des cadeaux (dharmas) aux pauvres, et vous serez entièrement pur.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le dernier verset d&eacute;clare : <strong>&laquo;&nbsp;Nettoyez l&rsquo;int&eacute;rieur en offrant des cadeaux (dharmas) aux pauvres, et vous serez enti&egrave;rement pur.&nbsp;&raquo; </strong>Malheureusement, les humains n&rsquo;ont pas correctement compris ce verset et l&rsquo;ont interpr&eacute;t&eacute; de diverses mani&egrave;res. Lorsque J&eacute;sus parle de &laquo; donner des cadeaux &raquo;, les gens l&rsquo;interpr&egrave;tent comme un don d&rsquo;argent, de v&ecirc;tements et de nourriture aux pauvres. Cependant, J&eacute;sus n&rsquo;a pas affirm&eacute; que les actes de charit&eacute; ext&eacute;rieurs purifieraient une personne de l&rsquo;int&eacute;rieur. Son intention &eacute;tait que la pratique du dharma soit int&eacute;rioris&eacute;e, et alors seulement les maux int&eacute;rieurs seraient purifi&eacute;s. J&eacute;sus n&rsquo;a pas donn&eacute; la priorit&eacute; &agrave; la propret&eacute; ext&eacute;rieure mais a plut&ocirc;t soulign&eacute; la purification des qualit&eacute;s int&eacute;rieures (gunas). Par cons&eacute;quent, Il a encourag&eacute; les autres &agrave; suivre la voie du dharma, qui s&rsquo;oppose aux gunas. J&eacute;sus lui-m&ecirc;me a fait l'exp&eacute;rience d'une purification int&eacute;rieure et a adh&eacute;r&eacute; au chemin du dharma. C&rsquo;est pourquoi Il a exhort&eacute; les autres &agrave; suivre le m&ecirc;me chemin.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 68,
verse: `<b>(3)	L'Évangile de Luc, chapitre 12, versets 4 et 5.</b>`,
meaning: ` <b>
(12:4) Je vous le dis, mes amis, n'ayez pas peur de ceux qui tuent le corps et qui ne peuvent plus rien faire après.
<br><br>
(12:5) Mais Je vais vous montrer qui vous devez craindre : Craignez celui qui, après que votre corps a été tué, a le pouvoir de vous jeter en enfer. Oui, je vous le dis, craignez-le.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Les humains peuvent nuire au corps, mais ils ne peuvent pas nuire au Jeevatma intérieur. Jeevatma, étant invisible de l'extérieur, n'est pas affecté. Puisque le corps est visible, les autres ne peuvent que lui infliger du mal, pas le Jeevatma. Il n’y a donc aucune raison d’avoir peur de ces individus. Le seul à craindre, c'est Dieu. Même dans la mort, Dieu évalue nos péchés, nous inflige des punitions et provoque des souffrances. Les liens entre les individus sont rompus après la mort. Même si le défunt renaît dans la maison du meurtrier, il ne reconnaîtra pas le meurtrier comme un ennemi. Cependant, Dieu reconnaît le Jeevatma même après la mort et est conscient de ses naissances ultérieures. Il est donc crucial de craindre Dieu, qui nous tient responsable de notre karma après la mort. Il n’est pas nécessaire d’avoir peur des autres humains qui ne peuvent pas nuire au Jeevatma et ne nous reconnaîtront pas après la mort.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 69,
verse: `<b>(4)	L'Évangile de Luc, chapitre 12, verset 25.</b>`,
meaning: ` <b>
(12:25) Lequel d'entre vous, en s'inquiétant, peut ajouter une coudée à sa stature ? </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Même si les individus croient qu’ils accomplissent tout grâce à leur intelligence, il n’existe aucun lien inhérent entre eux et leur intelligence. Les gens ne sont pas indépendants et sont incapables d’agir seuls. Ils s’apparentent à des marionnettes manipulées par le karma. Ceux qui croient pouvoir agir à leur guise sont dans un état d’ignorance d’eux-mêmes. Selon la structure que Dieu a créée, le karma est sous le contrôle de Dieu, et les individus sont sous le contrôle du karma. Comme le karma les gouverne, ils ne peuvent pas prendre de décisions de manière indépendante. Quelle que soit la manière dont ils planifient et utilisent leur intelligence, ils ne peuvent pas modifier leur taille. Si chaque individu se comprend et contemple l’étendue de son pouvoir, il reconnaîtra son insignifiance et réalisera que Dieu est infiniment plus grand que lui.
</div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 70,
verse: `<b>(5)	L'Évangile de Luc, chapitre 12, versets 33 et 34.</b>`,
meaning: ` <b>
(12:33) Vendez vos biens et donnez-les aux pauvres. Prévoyez-vous des bourses qui ne s'useront pas, un trésor dans une paraloka qui ne faillira jamais, où aucun voleur ne s'approche et où aucun papillon ne détruit.
<br><br>
(12:34) Car là où est ton trésor, là sera aussi ton cœur.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il existe deux types de richesse : l’une qui peut acheter n’importe quoi dans le monde et l’autre qui peut acheter Dieu, qui est au-delà du monde. La première est une richesse matérielle, créée par les humains et visible à l’œil nu, avec laquelle nous achetons des biens matériels, tandis que la seconde est une richesse de sagesse, créée par le divin et difficilement visible. Il existe de nombreuses différences entre la richesse-sagesse et la richesse matérielle. Même si les voleurs peuvent voler la richesse matérielle, ils ne peuvent pas voler la richesse de la sagesse, car il ne s’agit pas d’une marchandise physique. Les papillons de nuit peuvent détruire la richesse matérielle, mais ils ne peuvent pas endommager la richesse de la sagesse. La richesse matérielle ne peut pas éliminer même le plus petit karma, mais la richesse de sagesse peut éliminer même le plus grand karma. On peut acquérir des richesses matérielles par le travail, mais la richesse en sagesse s’obtient par l’intimité avec le divin. La richesse matérielle peut être évaluée, mais la richesse de sagesse ne peut pas être mesurée. Lorsqu’une personne meurt, son lien avec la richesse matérielle est rompu, car même un centime ne va pas avec le Jeevatma. En revanche, la richesse de la sagesse accompagne le Jeevatma même après la mort, car toute la sagesse acquise dans la vie est reportée dans les naissances futures. Ceux qui sont riches dans le monde peuvent être respectés dans la société mais pas en présence de Dieu. Dieu reconnaît ceux qui possèdent de la sagesse, même si les autres humains ne les respectent pas. En résumé, il existe de nombreuses différences entre la richesse matérielle et la richesse spirituelle.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 71,
verse: `<b>(6)	L'Évangile de Luc, chapitre 12, verset 49.</b>`,
meaning: ` <b>
(49) (12:49) Je suis venu apporter le feu sur la terre, et comme j'aimerais qu'il soit déjà allumé. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dans ce contexte, le terme &laquo; feu &raquo; ne fait pas r&eacute;f&eacute;rence au feu ordinaire que nous voyons quotidiennement. Le feu est de deux types : le feu ordinaire et le feu extraordinaire (feu de sagesse). Un feu ordinaire peut br&ucirc;ler du bois de chauffage et d'autres objets, tout en <strong>gnanagni (le feu de la sagesse) br&ucirc;le le bois de chauffage du karma. </strong>Alors que les humains sont pris au pi&egrave;ge du p&eacute;ch&eacute; et subissent des &eacute;preuves, Dieu descend pour apporter le feu de la sagesse afin de br&ucirc;ler leur karma et de les lib&eacute;rer du cycle des naissances et des morts, les aidant ainsi &agrave; atteindre Dieu. Lorsque Dieu conf&egrave;re la sagesse, il la compare au feu, car acqu&eacute;rir la sagesse peut conduire &agrave; la lib&eacute;ration. Dieu a amen&eacute; ce feu sur terre dans le pass&eacute;, et il s'est allum&eacute; pendant un certain temps avant de dispara&icirc;tre. J&eacute;sus est venu rallumer le feu et l'entretenir. Il voulait que le feu continue &agrave; br&ucirc;ler, alors il a proclam&eacute; qu'il &eacute;tait venu allumer un feu l&agrave; o&ugrave; il n'y en avait pas, et il a souhait&eacute; que le feu qu'il avait allum&eacute; auparavant persiste.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 72,
verse: `<b>(7)	L'Évangile de Luc, chapitre 12, versets 51, 52 et 53.</b>
`, meaning: `<b>
(12:51) Pensez-vous que je suis venu apporter la paix sur terre ? Non, je vous le dis, mais la division.
<br><br>
(12:52) Désormais, dans une même famille, il y en aura cinq divisés les uns contre les autres, trois contre deux et deux contre trois.
<br><br>
(12:53) Ils seront divisés, père contre fils et fils contre père, mère contre fille et fille contre mère, belle-mère contre belle-fille et belle-fille contre belle-mère.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Paramatma r&eacute;v&egrave;le Sa sagesse lorsqu'Il s'incarne sur terre sous la forme de Bhagavan. La sagesse de Bhagavan g&eacute;n&egrave;re des sentiments oppos&eacute;s chez ceux qui sont sur le chemin de Satan. Dans de tels cas, des divergences d&rsquo;opinion surgissent entre ceux qui comprennent la sagesse et ceux qui ne la comprennent pas. Ceux qui poss&egrave;dent la sagesse ne seront pas d&rsquo;accord avec ceux qui en manquent. Lorsqu&rsquo;une telle situation se produit au sein d&rsquo;un m&ecirc;me foyer, les membres de la famille peuvent devenir hostiles les uns envers les autres. Si quelqu&rsquo;un tente d&rsquo;acqu&eacute;rir la sagesse chez lui, Satan sera vigilant. Satan favorise la division, opposant les p&egrave;res aux fils, les fils aux p&egrave;res, les m&egrave;res aux filles, les filles aux m&egrave;res, les belles-m&egrave;res aux belles-filles et les belles-filles aux belles-m&egrave;res. M&ecirc;me Bhagavan (Guru) peut vous conseiller d'&ecirc;tre en d&eacute;saccord avec ceux qui s'opposent &agrave; vous sur des questions de sagesse, sachant qu'un mari et une femme se disputent &agrave; cause de Sa sagesse. Par cons&eacute;quent, leur querelle risque de s&rsquo;intensifier plut&ocirc;t que de s&rsquo;apaiser. Donc, <strong>le Seigneur a dit : &laquo; Je ne suis pas venu apporter la r&eacute;conciliation mais la division. &raquo; </strong>Pensez-vous que Bhagavan, qui est venu enseigner la sagesse sur terre, vous conseille de faire attention &agrave; votre foyer tout en n&eacute;gligeant Sa sagesse ? Croyez-vous que le Seigneur, qui vous a demand&eacute; de vous couper la main si cela fait obstacle &agrave; la sagesse de Dieu, sugg&egrave;re de vous r&eacute;concilier avec votre femme et vos proches ? Jamais. Il vous a exhort&eacute; &agrave; ne pas faire de compromis avec eux, m&ecirc;me si cela signifie sacrifier votre vie. C&rsquo;est pourquoi de nombreux conflits surviennent dans les familles &agrave; cause de la sagesse de Dieu. En particulier, partout o&ugrave; la vraie sagesse est proclam&eacute;e, il y aura des discordes au sein du foyer. Il n&rsquo;y a aucun d&eacute;saccord lorsque la sagesse de Satan est pr&eacute;sent&eacute;e sous l&rsquo;apparence de la sagesse divine. Tout le monde a tendance &agrave; soutenir une telle sagesse. On peut discerner que si tous les membres de la famille deviennent des adversaires &agrave; cause de la sagesse divine, alors cette sagesse est v&eacute;ritablement la sagesse de Dieu.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 73,
verse: `<b>(8)	L'Évangile de Luc, chapitre 13, verset 3.</b>`,
meaning: `<b>(13:3) À moins que vous ne changiez d’avis, vous aussi périrez tous.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Manas (l'esprit) est la partie la plus cruciale du corps, ainsi nomm&eacute;e parce qu'elle retient les souvenirs. Il op&egrave;re constamment sous l&rsquo;influence de Maya (Satan), renfor&ccedil;ant les pr&eacute;occupations mondaines. Depuis la naissance d&rsquo;une personne, l&rsquo;esprit est align&eacute; sur Satan et n&rsquo;a jamais fonctionn&eacute; en alignement avec Dieu. La transformation d&rsquo;un tel esprit de l&rsquo;influence de Satan &agrave; l&rsquo;alignement de Dieu est appel&eacute;e un &laquo; changement d&rsquo;avis &raquo;. Personne ne peut passer du c&ocirc;t&eacute; de Dieu sans changer d&rsquo;avis. Lorsque l&rsquo;esprit subit une transformation, le gnanagni (le feu de la sagesse) commence &agrave; se manifester. Gr&acirc;ce &agrave; la destruction de tout son karma par gnanagni, une personne s'unit &agrave; Dieu sans conna&icirc;tre la naissance ni la mort. Si l&rsquo;esprit reste inchang&eacute; et continue de dicter ses pens&eacute;es, l&rsquo;individu doit subir des cycles de naissance, de mort et endurer les tourments de l&rsquo;enfer. Il est donc imp&eacute;ratif que chacun change d&rsquo;avis.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 74,
verse: ` <b>(9)	L'Évangile de Luc, chapitre 14, verset 26.</b>`,
meaning: `<b>
(14:26) Si quelqu'un vient à moi et ne hait pas son père et sa mère, sa femme et ses enfants, ses frères et ses sœurs, et même sa propre vie, une telle personne ne peut pas être mon disciple.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Si quelqu&rsquo;un &eacute;coute cela, il sera surpris et demandera : &laquo; De quel genre de sagesse s&rsquo;agit-il ? Quel genre de gourou ? Quel genre de disciples ? On peut venir voir un Guru et lui demander : &laquo; Est-ce qu&rsquo;un Guru dit &agrave; ses disciples qu&rsquo;il n&rsquo;est pas un disciple &agrave; moins de gronder sa famille ? Nous devons r&eacute;fl&eacute;chir ici. Si une personne gronde toute sa maison, le Guru n&rsquo;est pas fou de se r&eacute;jouir et de l&rsquo;accepter comme disciple. Il n&rsquo;est pas conseill&eacute; de ha&iuml;r tout le monde sans discernement. Le Guru se r&eacute;jouit lorsqu&rsquo;un disciple, conform&eacute;ment &agrave; ses sentiments, r&eacute;primande les ignorants qui marchent sur le chemin de Satan. Lorsqu&rsquo;un disciple s&rsquo;oppose &agrave; l&rsquo;ignorant, le Guru per&ccedil;oit que le disciple est align&eacute; sur ses enseignements et les accepte. Si un disciple soutient les ignorants au lieu de les contredire, le Guru ne le reconna&icirc;tra pas comme disciple. La haine est courante entre deux groupes : les gnanis (les sages) et les ignorants. Si le p&egrave;re et la m&egrave;re, la femme et les enfants, les fr&egrave;res et s&oelig;urs figurent sur la liste des ignorants, le disciple doit s'y opposer. Le Seigneur a dit que celui qui ne s&rsquo;oppose pas aux ignorants et favorise ses proches n&rsquo;est pas son disciple. Il est soulign&eacute; qu&rsquo;il ne faut pas faire de compromis sur l&rsquo;ignorance. J&eacute;sus a dit que le disciple devrait abandonner sa m&egrave;re, son p&egrave;re, ses fr&egrave;res et s&oelig;urs, sa femme et ses enfants s'ils entravent le chemin de la sagesse.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 75,
verse: ` <b>(10)	L'Évangile de Luc, chapitre 14, verset 27.</b>`,
meaning: `<b>
(14:27) quiconque ne porte pas sa croix et ne me suit pas ne peut pas être mon disciple. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Lorsque le bois de chauffage est regroup&eacute;, il devient plus facile &agrave; ramasser et &agrave; transporter sur de longues distances ; il ne serait pas possible de le transporter autrement. De m&ecirc;me, lorsque les 108 gunas dans l&rsquo;esprit d&rsquo;une personne sont li&eacute;s ensemble dans un &eacute;tat dysfonctionnel, ils deviennent un ensemble. entre les mains de l'homme. Il existe deux sortes de gunas &ndash; les bons et les mauvais &ndash; dans le corps humain.<strong>. </strong>

	<strong>Les six mauvais gunas sont l'avidit&eacute; (kaama), la col&egrave;re (krodha), l'avarice (lobha), la passion (moha), l'arrogance (madame) et la jalousie (matsara). De m&ecirc;me, les six bons gunas sont la charit&eacute; (dana), la mis&eacute;ricorde (daya), la bienveillance (audarya), l'impartialit&eacute; (vairagya), l'humilit&eacute; (vinaya) et l'amour (prema). </strong>Chacun des six mauvais et bons gunas est divis&eacute; en neuf parties. Ainsi, les six mauvais gunas sont divis&eacute;s en 54 parties, et les six bons gunas sont &eacute;galement divis&eacute;s en 54 parties. Ensemble, les bons et les mauvais gunas repr&eacute;sentent un total de 108.

	Les 108 parties des gunas s'appellent <strong>Maya </strong>dans la premi&egrave;re &eacute;criture divine. Dans la deuxi&egrave;me &eacute;criture divine, ils sont appel&eacute;s <strong>Satan</strong>. Dans la derni&egrave;re &eacute;criture divine, ces gunas sont nomm&eacute;s <strong>Satan</strong>. Dieu lui-m&ecirc;me a parl&eacute; de Maya comme de &laquo; Guna-mayi mama maya &raquo; dans la premi&egrave;re &eacute;criture divine. Cela signifie que Maya, que Dieu a cr&eacute;&eacute;e, se pr&eacute;sente sous la forme de gunas dans le corps humain. Dieu a cr&eacute;&eacute; Maya principalement pour emp&ecirc;cher les humains de suivre le chemin divin. Maya peut obliger une personne &agrave; rester &agrave; ses c&ocirc;t&eacute;s au lieu de suivre la voie de Dieu. On peut dire que Maya est guna, ou que guna est Maya. En telugu, Maya signifie &laquo; invisible &raquo;. Maya est pr&eacute;sente dans la t&ecirc;te sans &ecirc;tre vue. Maya, qui est pr&eacute;sente dans notre corps, est aussi appel&eacute;e la Croix. Au sens spirituel, Maya est compar&eacute;e &agrave; un python, tandis qu'Atma est compar&eacute; &agrave; une colombe.

	Un python est un serpent puissant. Celui qui a &eacute;t&eacute; pris par elle ne peut pas devenir libre. Cela signifie que Maya est forte. J&eacute;sus a dit que quiconque contr&ocirc;le, regroupe et tient une Maya aussi forte dans sa main est mon disciple. J&eacute;sus a dit que le conqu&eacute;rant de Maya &eacute;tait v&eacute;ritablement mon disciple. <strong>Celui qui capture Maya (la Croix) et suit le chemin de Dieu en la portant est un v&eacute;ritable disciple de Dieu. </strong>Celui qui porte la Croix dont nous parlons beaucoup aujourd'hui et qui suit J&eacute;sus est Son disciple, comme l'indique ce verset.
div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 76,
verse: `<b>(11)	L'Évangile de Luc, chapitre 18, verset 29.</b>`,
meaning: `<b>
(18:29) «En vérité, je vous le dis», leur dit Jésus, «personne qui a quitté son foyer, ou sa femme, ou ses frères, ou sœurs, ou parents ou enfants, à cause du royaume de Dieu, ne manquera de recevoir plusieurs fois autant. dans ce siècle et dans le siècle à venir, la vie éternelle. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le royaume de Dieu fait r&eacute;f&eacute;rence &agrave; Moksham, qui est la lib&eacute;ration du cycle des renaissances. Une fois qu&rsquo;une personne atteint Moksham (lib&eacute;ration), elle ne rena&icirc;t pas sur terre et ne souffre pas de Satan. Moksham signifie &ecirc;tre lib&eacute;r&eacute; de Satan et fusionner avec Dieu. En d&rsquo;autres termes, une personne ne fait plus qu&rsquo;un avec Dieu. L&rsquo;union du Jeeva, qui est petit et a une forme sp&eacute;cifique, avec le Dieu infiniment vaste, illimit&eacute; et omnipr&eacute;sent est une r&eacute;alisation exceptionnelle. Pour atteindre cette position, une personne doit suivre le chemin de la sagesse et &ecirc;tre pr&ecirc;te &agrave; abandonner ses attachements envers son conjoint, ses enfants, ses parents, ses fr&egrave;res et s&oelig;urs et son foyer si ces attachements entravent son cheminement spirituel. Une telle personne devient un gnani complet dans ce monde et atteint Dieu dans le Paraloka. Abandonner un conjoint, des enfants, des fr&egrave;res et s&oelig;urs et des parents est une d&eacute;cision importante car Maya entoure une personne et la lie &agrave; ses proches. Prahlada n'a pas compt&eacute; son p&egrave;re, Mirabai a quitt&eacute; son mari et ses proches, et Bouddha a abandonn&eacute; sa jeune &eacute;pouse, son fils d'un an, ses parents, sa maison et son royaume pour la sagesse. Cependant, ceux qui prennent leurs distances eux-m&ecirc;mes de leurs proches peuvent se rapprocher de Dieu. Pour acqu&eacute;rir quelqu&rsquo;un qui est &eacute;ternel, laisser derri&egrave;re lui quelqu&rsquo;un qui reste avec vous pendant un certain temps est une d&eacute;cision intelligente. Cependant, une telle d&eacute;cision peut para&icirc;tre insens&eacute;e aux yeux du monde. Il est rare de trouver quelqu&rsquo;un pr&ecirc;t &agrave; tout abandonner dans le royaume de Satan pour l&rsquo;amour de Dieu. Parce que lorsque quelqu&rsquo;un a l&rsquo;id&eacute;e de Dieu dans son esprit, Satan se concentre principalement sur lui et le d&eacute;tourne de la pens&eacute;e et du chemin de la sagesse. Il est impossible pour une personne de vaincre la puissance de Satan et de la conqu&eacute;rir, comme le dit la Bhagavad-Gita, Vignana Yogam, verset 14. On peut se demander comment il est possible d&rsquo;aller vers Dieu alors que la puissance de Satan est si grande. Pourquoi tenter et &eacute;chouer ? Cependant, si une personne fait enti&egrave;rement confiance &agrave; Dieu et continue ses efforts malgr&eacute; son incapacit&eacute; &agrave; s&rsquo;opposer &agrave; Satan, Dieu lui-m&ecirc;me l&rsquo;&eacute;loignera de Satan et la mettra &agrave; ses c&ocirc;t&eacute;s. Par cons&eacute;quent, la seule fa&ccedil;on pour le plus petit &ecirc;tre humain de vaincre Satan est de s&rsquo;abandonner compl&egrave;tement &agrave; Dieu. La Bhagavad-Gita d&eacute;clare : <strong>&laquo; Maya m&eacute;tam tarantite &raquo;, </strong>ce qui veut dire <strong>&laquo;Je vais le faire sortir de Maya&raquo; </strong>&agrave; propos de ceux qui font enti&egrave;rement confiance &agrave; Dieu. Ainsi, si une personne met toute sa confiance et son fardeau sur Dieu, Dieu peut la sauver de Satan.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 77,
verse: `<b>(12)	L'Évangile de Luc, chapitre 21, verset 15.</b>`,
meaning: ` <b>
(21:15) Je vous donnerai des paroles et une sagesse auxquelles aucun de vos adversaires ne pourra résister ou contredire. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lorsque de jeunes enfants, qui ont une certaine connaissance de la sagesse, remettent en question les enseignements de prédicateurs et de gourous renommés, ils ne trouvent pas de réponses dans leurs enseignements. C’est pourquoi les prédicateurs ont établi une règle selon laquelle personne ne devrait remettre en question leurs enseignements. La principale raison du manque de réponses dans leurs enseignements est qu’ils ne sont pas basés sur la science. L’enseignement non scientifique ne peut apporter de réponses aux questions rationnelles. Les prédicateurs continuent d’enseigner, mais ils ne répondent pas lorsqu’on leur demande. Lorsque Paramatma s'incarne en tant que Bhagavan, Il enseigne la vraie sagesse de Paramatma. Par conséquent, ceux qui connaissent la sagesse enseignée par Bhagavan peuvent enseigner et répondre à n'importe quelle question. Les adversaires qui voient les dévots de Bhagavan, qui connaissent la sagesse de Paramatma, viennent vers eux avec l'ego qu'ils sont des gourous et des gnanis et parlent de manière contradictoire. La sagesse contre laquelle les adversaires ne peuvent pas parler a déjà été communiquée aux dévots à ce moment-là. La parole de Dieu dit que beaucoup de gens sont jaloux et augmentent leur rivalité avec ceux qui connaissent la vraie sagesse. Même lorsque Dieu est descendu, des adversaires l’ont confronté et lui ont dit : « Vous ne connaissez pas encore la sagesse et vous devez aller dans un endroit spécifique pour apprendre la véritable sagesse. » Certaines personnes sont venues me voir et m’ont dit : « Tu ne connais pas la sagesse. » De telles personnes viendront également vers vous. Dieu a dit dans le verset ci-dessus qu’Il vous donnerait la sagesse d’y répondre.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 78,
verse: ` <b>(13)	L'Évangile de Luc, chapitre 21, verset 17 . </b>`,
meaning: `<b>
(21:17) Tout le monde vous détestera à cause de </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	La sagesse r&eacute;v&eacute;l&eacute;e par Bhagavan, le Fils de Dieu, est contre ceux qui sont poss&eacute;d&eacute;s par Satan. Il est possible que les gens ordinaires comprennent mal cette sagesse, car elle semble &ecirc;tre enti&egrave;rement contre les pr&eacute;dicateurs et les gourous qui poss&egrave;dent une certaine sagesse. Les pandits, les pr&eacute;dicateurs et les gourous n&rsquo;aiment souvent pas les paroles de ceux qui pr&ecirc;chent le nom de Dieu. Eux et ceux qui les suivent commencent &agrave; ha&iuml;r ceux qui pr&ecirc;chent la voie de Dieu parce qu&rsquo;ils trouvent les paroles de Dieu contraires &agrave; leurs enseignements. Par cons&eacute;quent, Dieu a dit dans le verset ci-dessus : <strong>"Tout le monde te d&eacute;testera &agrave; cause de moi."</strong>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 79,
verse: `<b>(1)	L'Évangile de Jean, 1er chapitre, 1er verset.</b>`,
meaning: `<b>(1:1) Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  L'Évangile de Jean comprend 21 chapitres. Dans ce Écriture, je fournirai des explications sur certains des versets que les humains n’ont pas réussi à comprendre, ont mal compris ou pourraient mal interpréter. J’ai choisi ces versets dans le cadre du service de Dieu, me sentant comme une simple plume que Dieu m’utilise pour faire ce travail. Plus tôt, j'ai expliqué quelques versets de la première écriture divine, la Bhagavad-Gita, et de la troisième écriture divine, le Coran. Comme je désire profondément expliquer les trois écritures divines, je vais maintenant illustrer quelques versets de la deuxième écriture divine, l'Injeel (Bible). La sagesse fournie dans cette écriture est scientifique et authentique. Examinons maintenant le premier verset du premier chapitre de l’Évangile de Jean, qui se compose de trois phrases courtes qu’il faut expliquer pour bien le comprendre.
	Discutons maintenant des trois premiers mots de l'&Eacute;vangile de Jean dans la deuxi&egrave;me &eacute;criture divine.

<strong>La Parole &eacute;tait au commencement. </strong>
<strong>La Parole &eacute;tait avec Dieu.</strong>
<strong>La Parole &eacute;tait Dieu.</strong>

	Dans les enseignements de la Bible, faisons r&eacute;f&eacute;rence &agrave; ces trois versets comme &eacute;tant les premiers versets de la Bible. Certains diront peut-&ecirc;tre que les versets de la Gen&egrave;se devraient &ecirc;tre consid&eacute;r&eacute;s comme les premiers mots de la Bible. Cependant, nous avons d&eacute;j&agrave; expliqu&eacute; notre m&eacute;thode. Nous consid&eacute;rons les enseignements dont les humains ont besoin comme des &Eacute;critures et en discuterons les premiers versets. Suivant ce principe, Bhagavan J&eacute;sus a enseign&eacute; les quatre &Eacute;vangiles. M&ecirc;me si l&rsquo;&Eacute;vangile de Jean &eacute;tait le dernier, il commen&ccedil;ait par les enseignements. De la m&ecirc;me mani&egrave;re, nous avons pris le verset 11 du deuxi&egrave;me chapitre comme le d&eacute;but de la Bhagavad-Gita parce que la sagesse de Dieu a commenc&eacute; &agrave; partir de l&agrave;. Nous avons &eacute;galement pris les versets 11, 12 et 13 du Sankhya-Yoga comme trois premi&egrave;res phrases. De m&ecirc;me, les premiers versets ont &eacute;t&eacute; tir&eacute;s du 43&egrave;me chapitre de l'Injeel (la Bible), et nous avons pris trois versets de la Taurat (Bhagavad-Gita) comme trois premi&egrave;res phrases. Ici, cependant, nous avons pris trois phrases d&rsquo;un verset de l&rsquo;&Eacute;vangile de Jean comme trois premi&egrave;res phrases, plut&ocirc;t que trois versets cons&eacute;cutifs. La s&eacute;quence des phrases n'a pas d'importance ; nous avons pris ceux qui transmettaient trois significations comme trois phrases. Bien qu&rsquo;il s&rsquo;agisse de trois phrases courtes, chacune d&rsquo;elles a une signification profonde.

	Ces trois phrases v&eacute;hiculent des significations subtiles. Les trois premi&egrave;res phrases de la Bhagavad-Gita approfondissent les concepts de Jeevatma et d'Atma. Cependant, les premiers mots de l&rsquo;&Eacute;vangile de Jean enseignent une signification particuli&egrave;re. L'initiation de la Bhagavad-Gita discute des trois composants : Jeevatma, Atma et le corps. &Agrave; l&rsquo;inverse, les trois premi&egrave;res phrases de l&rsquo;&Eacute;vangile de Jean explorent les trois aspects : la Sagesse, l&rsquo;Atma et le Paramatma. N&eacute;anmoins, ces phrases ne clarifient pas explicitement les positions d&rsquo;Atma et Paramatma. Bien que le terme &laquo; Dieu &raquo; apparaisse dans deux des phrases, la sagesse et l&rsquo;Atma restent identifiables de mani&egrave;re ambigu&euml;. Examinons maintenant la premi&egrave;re phrase du trio.

	La premi&egrave;re phrase est <strong>"La Parole &eacute;tait au commencement." </strong>Un mot est articul&eacute; dans la parole, g&eacute;n&eacute;r&eacute; par le son &eacute;manant de la bouche. On peut percevoir un son et discerner si une phrase est longue ou courte en fonction des signaux auditifs. La langue de la phrase n&rsquo;est pas n&eacute;cessairement famili&egrave;re et peut varier en longueur. Il est ind&eacute;terminable si le mot (la phrase) a &eacute;t&eacute; prononc&eacute; &agrave; voix basse ou forte. Analysons la phrase <strong>"La Parole &eacute;tait au commencement." </strong>M&ecirc;me si nous comprenons que le mot a &eacute;t&eacute; prononc&eacute; au d&eacute;but, les humains ne poss&eacute;daient aucune comp&eacute;tence linguistique &agrave; ce stade initial. D&egrave;s lors, une question pertinente se pose quant &agrave; la langue dans laquelle le mot a &eacute;t&eacute; prononc&eacute;. Pour r&eacute;pondre &agrave; cette question, consid&eacute;rons les &eacute;v&eacute;nements qui se sont produits au d&eacute;but.

	Si l&rsquo;on s&rsquo;enquiert au d&eacute;but de l&rsquo;origine du son, on peut attribuer le son entendu par l&rsquo;oreille humaine &agrave; Prakruti. Prakruti comprend cinq grands bhootas &ndash; Terre, Eau, Air, Feu et Ciel &ndash; chacun poss&eacute;dant la vie. Le Ciel, dot&eacute; de vie, a g&eacute;n&eacute;r&eacute; le son au d&eacute;but. Cela soul&egrave;ve la question de savoir comment le Ciel produit du son alors qu&rsquo;il semble vide. Cette enqu&ecirc;te est rationnelle et la compr&eacute;hension des r&eacute;ponses la transforme en une exploration scientifique. Selon Brahma Vidya Shastra, le Ciel lui-m&ecirc;me a-t-il cr&eacute;&eacute; le son ? Puisque le Ciel est un Jeeva, Jeevatma n'est pas capable et ne peut pas agir selon des principes scientifiques ; c'est le dharma de Jeevatma. Paramatma a &eacute;galement un dharma. Paramatma (Dieu) ne poss&egrave;de pas de nom, de forme ou d'&oelig;uvre. C'est le premier dharma de Dieu. Dieu n'est pas un agent d'action ; Il ne travaille pas. Selon le dharma de Jeevatma, Jeevatma n&rsquo;est pas capable et ne peut effectuer aucun travail. Bien que Dieu en soit capable, il ne s&rsquo;engage dans aucune action. Par cons&eacute;quent, Jeevatma et Dieu ont des dharmas oppos&eacute;s. Au d&eacute;but, la parole &eacute;manait du Ciel. Comme le Sky est &eacute;galement un Jeeva, il n&rsquo;a pas produit ce son. Le son provenant du Ciel est un &eacute;v&eacute;nement factuel, mais le Jeeva du Ciel n'en est pas capable et ne peut g&eacute;n&eacute;rer aucun son. Ainsi, quelqu&rsquo;un derri&egrave;re le Ciel pourrait &ecirc;tre la source du son. Dieu n'a pas cr&eacute;&eacute; le son parce qu'Il ne travaille pas. Bien que le son venant du Ciel soit vrai, ni le Jeeva du Ciel ni Dieu ne sont la cause du son. Un doute peut surgir s&rsquo;il y avait quelqu&rsquo;un en dehors des deux.

	Pour dissiper ce doute, il est essentiel de comprendre les entit&eacute;s de l&rsquo;univers. Initialement, Dieu a cr&eacute;&eacute; l'univers. Dieu, tout en &eacute;tant Dieu, a cr&eacute;&eacute; Prakruti &agrave; partir de Lui-m&ecirc;me. Il a d'abord cr&eacute;&eacute; Prakruti en cinq parties, puis a cr&eacute;&eacute; Atma et Jeevatma pour insuffler de la vitalit&eacute; &agrave; Prakruti, qui &eacute;tait d&eacute;pourvue de vie. Semblable &agrave; Lui-m&ecirc;me, Dieu a cr&eacute;&eacute; l&rsquo;Atma et le Jeevatma masculins (Purusha). Il d&eacute;signa Jeevatma comme passager et Atma comme conducteur, confiant &agrave; Atma l'ex&eacute;cution de toutes les t&acirc;ches. Chez chaque individu, Atma remplit toutes les fonctions du corps tout en coexistant avec Jeevatma. Dans Ses &Eacute;critures, Dieu affirmait que m&ecirc;me les grands &eacute;rudits ne pouvaient pas comprendre pleinement l&rsquo;Atma. Seulement Les yogis d&eacute;vou&eacute;s, comme mentionn&eacute; dans le verset 11 de la Bhagavad-Gita Purushottama Prapti Yoga, peuvent vraiment comprendre l'Atma, soulignant que l'Atma reste cach&eacute; dans le corps sans &ecirc;tre connu.

	Si Dieu n&rsquo;agit pas, certains pourraient se demander comment Il a cr&eacute;&eacute; Prakruti, Atma et Jeevatma. Ma r&eacute;ponse est qu'il est vrai que Dieu n'agit pas. Ce principe a &eacute;t&eacute; articul&eacute; par Dieu apr&egrave;s la cr&eacute;ation de Prakruti, Atma et Jeevatma. Avant l&rsquo;acte de cr&eacute;ation, Dieu &eacute;tait la seule existence et, pendant cette p&eacute;riode, Dieu s&rsquo;est engag&eacute; dans l&rsquo;&oelig;uvre. Il n&rsquo;y avait aucune entit&eacute; autre que Dieu avant la cr&eacute;ation. Par cons&eacute;quent, Dieu a travaill&eacute; avant l&rsquo;acte de cr&eacute;ation. Dieu a cr&eacute;&eacute; Prakruti, suivi de la cr&eacute;ation d'Atma et de Jeevatma. Par la suite, Dieu a &eacute;tabli Son dharma. M&ecirc;me si Dieu s&rsquo;est abstenu d&rsquo;&oelig;uvrer apr&egrave;s la cr&eacute;ation, il &eacute;tait actif avant l&rsquo;acte de cr&eacute;ation. Dieu a d&eacute;l&eacute;gu&eacute; toutes les responsabilit&eacute;s &agrave; Atma et a d&eacute;termin&eacute; qu'Atma ex&eacute;cuterait toutes les t&acirc;ches. Par cons&eacute;quent, Paramatma a cess&eacute; de s'engager dans les actions qu'Il avait l'habitude d'accomplir apr&egrave;s la cr&eacute;ation d'Atma. Alors qu'Atma assumait ses responsabilit&eacute;s, Paramatma devint un observateur passif (t&eacute;moin).

	Dieu ne s'engage pas dans le travail ; Jeeva est incapable d'agir et Atma est celui qui accomplit toutes les t&acirc;ches. Par cons&eacute;quent, c&rsquo;est Atma qui a produit le son du Ciel au d&eacute;but. Atma, cach&eacute; dans le Ciel, a g&eacute;n&eacute;r&eacute; le son. Le son cr&eacute;&eacute; par Atma est devenu la sagesse de Dieu, donc appel&eacute; &laquo; mot &raquo;, signifiant un son charg&eacute; de sens. D&eacute;crivant l'&eacute;v&eacute;nement de cr&eacute;ation, la phrase <strong>&laquo; La Parole &eacute;tait au commencement &raquo; </strong>est utilis&eacute; pour exprimer qu'un son significatif provient du ciel. Nous avons appris ce qu&rsquo;est le &laquo; mot &raquo; et qui l&rsquo;a formul&eacute;. La &laquo; parole &raquo; a &eacute;t&eacute; prononc&eacute;e avec la sagesse de Dieu par Atma sous forme de son. Ce que l'Atma a articul&eacute; depuis le Ciel est devenu la premi&egrave;re sagesse du monde. Bien que le son venant du Ciel contenait la sagesse, il se manifestait sous la forme d&rsquo;un son fort sous forme de tonnerre, au-del&agrave; de la compr&eacute;hension du langage humain. Le Soleil a compris le bruit du tonnerre dans le ciel et, reconnaissant son inintelligibilit&eacute; pour les humains, a transmis le message &agrave; un homme nomm&eacute; Manu sur Terre dans un langage compris par les humains.

	La sagesse de Dieu s&rsquo;est manifest&eacute;e sous la forme d&rsquo;un son incompr&eacute;hensible au d&eacute;but de la cr&eacute;ation. Ceci est exprim&eacute; dans la premi&egrave;re phrase du premier chapitre de l&rsquo;&Eacute;vangile de Jean, d&eacute;clarant que le <strong>"La Parole &eacute;tait au commencement." </strong>Ce jour-l&agrave;, les humains ignoraient que ce son portait la sagesse de Dieu ; Ils n&rsquo;ont compris qu&rsquo;un peu lorsque le Soleil a transmis le message. Krishna a transmis la m&ecirc;me sagesse sous la forme de la Bhagavad-Gita, d&eacute;clarant que c'&eacute;tait la m&ecirc;me sagesse parl&eacute;e au d&eacute;but de la cr&eacute;ation. Cependant, l&rsquo;attention humaine ne s&rsquo;est pas initialement concentr&eacute;e sur le son du tonnerre, et &agrave; ce jour, personne ne se rend compte que le son du tonnerre r&eacute;sume la sagesse de la Bhagavad-Gita. Le Soleil a transmis &agrave; Manu la m&ecirc;me sagesse que Krishna avait parl&eacute;e, traduisant la sagesse provenant du ciel sous forme de tonnerre. La sagesse du son du Ciel a &eacute;merg&eacute; de l'Atma du Ciel. La sagesse d&rsquo;Atma provient d&rsquo;Atma lui-m&ecirc;me. L'Atma lui-m&ecirc;me est devenu la sagesse, et la m&ecirc;me sagesse est sortie de l'Atma. Cette sagesse d&rsquo;Atma est comparable &agrave; la fa&ccedil;on dont le coton se transforme en fil, et le fil &eacute;merge du coton. Bien que le coton et le fil soient distincts, le coton devient le fil. De m&ecirc;me, l&rsquo;Atma et la sagesse sont diff&eacute;rents, mais la sagesse de l&rsquo;Atma &eacute;mane de l&rsquo;Atma. Si le fil est s&eacute;par&eacute;, il est constitu&eacute; de fibres de coton ; de m&ecirc;me, si la sagesse de l&rsquo;Atma est diss&eacute;qu&eacute;e, elle contient l&rsquo;essence de l&rsquo;Atma.

	Au d&eacute;but, Dieu a transmis sa sagesse &agrave; travers le son du ciel, comme d&eacute;crit dans le Coran 42&nbsp;:&nbsp;51, o&ugrave; l'une des fa&ccedil;ons dont Dieu r&eacute;v&egrave;le sa sagesse est &agrave; travers la r&eacute;v&eacute;lation du ciel. Dieu a transmis Sa sagesse &agrave; travers l'Atma du Ciel lors de l'initiation de la cr&eacute;ation. La sagesse, pr&eacute;sent&eacute;e sous la forme du tonnerre, n&rsquo;&eacute;tait pas compr&eacute;hensible pour les humains car il lui manquait un langage qu&rsquo;ils pourraient comprendre. Par cons&eacute;quent, le Soleil, ayant saisi la sagesse des tonnerres, la transmettait &agrave; un homme sur terre en langage humain. Finalement, cette sagesse s&rsquo;est r&eacute;pandue sur toute la terre. Cependant, au fil du temps, les adharmas ont remplac&eacute; les dharmas, provoquant la disparition de la sagesse initialement transmise de la m&eacute;moire humaine. Dans le Dvapara Yuga, Bhagavan a pris la forme de Krishna et a inform&eacute; Arjuna qu'il partageait la m&ecirc;me sagesse que le Soleil avait transmise. Bien qu&rsquo;ils aient la m&ecirc;me sagesse pr&eacute;sent&eacute;e sous la forme de la Bhagavad-Gita, la premi&egrave;re &eacute;criture divine, les humains ont oubli&eacute; ses origines.

	Les trois premi&egrave;res phrases de l'&Eacute;vangile de Jean ont &eacute;t&eacute; &eacute;crites 3000 ans apr&egrave;s que la Bhagavad-Gita ait &eacute;t&eacute; prononc&eacute;e, car les humains avaient oubli&eacute; la sagesse transmise par Dieu. La phrase <strong>&laquo; La Parole &eacute;tait au commencement &raquo; </strong>est maintenant compris. Il est reconnu que la sagesse sous forme de tonnerre provient de l'Atma du Ciel, comme l'indique la deuxi&egrave;me phrase. Par cons&eacute;quent, on affirme que <strong>&laquo;La Parole &eacute;tait avec Dieu.&raquo; </strong>Une exploration plus approfondie r&eacute;v&egrave;le que le son du mot est n&eacute; d'Atma. Tout comme le fil torsad&eacute; &eacute;merge de la fibre de coton, la mobilit&eacute; de l&rsquo;Atma se transforme en &eacute;nergie et la sagesse de l&rsquo;&eacute;nergie se manifeste sous forme de son. De la m&ecirc;me mani&egrave;re que le fil contient de la fibre de coton, le son de la sagesse englobe le pouvoir d&rsquo;Atma. La sagesse de l&rsquo;Atma se pr&eacute;sente &agrave; la fois sous la forme du pouvoir de l&rsquo;Atma et de l&rsquo;Atma lui-m&ecirc;me. La sagesse de l'Atma et l'Atma sont une seule et m&ecirc;me chose, et il est donc dit&nbsp;: <strong>&laquo; La Parole &eacute;tait Dieu. &raquo;</strong>

	Jusqu&rsquo;&agrave; pr&eacute;sent, nous avons discut&eacute; du fait que Dieu a cr&eacute;&eacute; Jeevatma et Atma, Dieu travaillant activement avant la cr&eacute;ation. Cependant, apr&egrave;s l'acte de cr&eacute;ation, Dieu a donn&eacute; &agrave; Atma le pouvoir d'accomplir les t&acirc;ches, disparaissant apparemment et rendant Sa pr&eacute;sence inconnue. Dieu s&rsquo;est abstenu d&rsquo;accomplir toute t&acirc;che et, dans cet &eacute;tat, il est devenu semblable &agrave; quelqu&rsquo;un qui n&rsquo;existe pas. Par cons&eacute;quent, Atma a assum&eacute; la responsabilit&eacute; d&rsquo;accomplir l&rsquo;&oelig;uvre de Dieu. Bien qu'Atma ex&eacute;cute les fonctions &agrave; la fois de Jeevatma et de Paramatma, ses actions restent cach&eacute;es aux autres. Les d&eacute;clarations susmentionn&eacute;es d&eacute;crivent l&rsquo;ensemble du processus op&eacute;rationnel d&rsquo;Atma. Initialement, lorsque Paramatma a cr&eacute;&eacute; l'univers, il y avait trois &acirc;mes, mais apr&egrave;s la cr&eacute;ation, seules deux &acirc;mes &ndash; Jeevatma et Atma &ndash; sont reconnues. En l&rsquo;absence de Paramatma, Atma a assum&eacute; le r&ocirc;le de Paramatma, c&rsquo;est pourquoi Atma peut &ecirc;tre appel&eacute; Dieu. Bien qu&rsquo;il ne soit pas Dieu (Paramatma), Atma accomplit les t&acirc;ches de Dieu et occupe la position de Dieu.

	La sagesse de l'Atma provient de l'Atma lui-m&ecirc;me. En affirmant qu'Atma est Dieu, on affirme que <strong>La Parole (sagesse) &eacute;tait avec Dieu</strong>. Cette affirmation est exacte lorsque nous consid&eacute;rons Atma comme Dieu. M&ecirc;me si l'Atma n'est pas Dieu, il doit &ecirc;tre reconnu comme Dieu parce que Dieu a conf&eacute;r&eacute; &agrave; l'Atma l'autorit&eacute; d'agir en tant que Dieu. Par cons&eacute;quent, lorsque la Parole (la sagesse) est identifi&eacute;e comme Atma, on peut d&eacute;clarer que la m&ecirc;me sagesse (Atma) est Dieu. Cette explication s'aligne avec la d&eacute;claration de l'&Eacute;vangile de Jean selon laquelle <strong>La Parole &eacute;tait Dieu</strong>. Apr&egrave;s avoir r&eacute;pondu &agrave; des questions telles que &laquo; Qu'est-ce que la Parole ? &raquo;, &laquo; Comment la Parole est-elle connect&eacute;e &agrave; l'Atma ? &raquo; et &laquo; Pourquoi Atma est-il consid&eacute;r&eacute; comme Dieu ? &raquo;, je suppose que le sens des trois premi&egrave;res phrases de l'&Eacute;vangile de Jean 1&nbsp;:&nbsp;1 est maintenant compr&eacute;hensible.

	Si l&rsquo;on ne parvient pas &agrave; comprendre cela apr&egrave;s une explication aussi d&eacute;taill&eacute;e, la sagesse de l&rsquo;Atma peut rester insaisissable. Comprendre la sagesse d&rsquo;Atma est crucial pour comprendre le syst&egrave;me de Dieu. Pour discerner les voies de Dieu, il faut commencer par comprendre la sagesse de la Parole. Une fois que cette sagesse est connue, il devient &eacute;vident que la sagesse est Atma et qu'Atma est Dieu.
<table>
<tbody>
<tr>
<td>
<p><strong>A la cr&eacute;ation</strong></p>
</td>
<td>
<p><strong>Dieu (Paramatma)</strong></p>
</td>
<td>
<p><strong>Prakriti</strong></p>
</td>
<td>
<p><strong>Atma</strong></p>
</td>
<td>
<p><strong>Jeevatma</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>Apr&egrave;s la cr&eacute;ation</strong></p>
</td>
<td>
<p><strong>(Paramatma)</strong></p>
</td>
<td>
<p><strong>Prakriti</strong></p>
</td>
<td>
<p><strong>Atma</strong></p>
</td>
<td>
<p><strong>Jeevatma</strong></p>
</td>
</tr>
<tr>
<td>
<p><strong>Apr&egrave;s la cr&eacute;ation</strong></p>
</td>
<td>
<p><strong>Atma (Dieu)</strong></p>
</td>
<td>
<p><strong>Prakriti</strong></p>
</td>
<td>
<p><strong>Atma</strong></p>
</td>
<td>
<p><strong>Jeevatma</strong></p>
</td>
</tr>
</tbody>
</table>

	Dans l'acte de cr&eacute;ation, Dieu a travaill&eacute; pour cr&eacute;er &agrave; la fois la Prakruti f&eacute;minine et l'Atma et le Jeevatma masculins. Initialement, Dieu, en tant que Purusha (m&acirc;le), a cr&eacute;&eacute; deux &acirc;mes, Atma et Jeevatma, semblables &agrave; Lui. Apr&egrave;s la cr&eacute;ation de Prakruti, Atma et Jeevatma, Dieu est pass&eacute; &agrave; un r&ocirc;le de t&eacute;moin sans implication active. &Eacute;tant donn&eacute; la nature inn&eacute;e de Dieu de ne pas s&rsquo;engager dans le travail, il peut sembler que Dieu n&rsquo;existe pas, malgr&eacute; son existence. Lorsque l'&eacute;quilibre des dharmas est perturb&eacute; et que les adharmas pr&eacute;valent sur Terre, Dieu envoie Son &acirc;me en tant que Bhagavan pour restaurer les dharmas. En r&eacute;tablissant les dharmas, le repr&eacute;sentant de Dieu est envoy&eacute;, &eacute;liminant ainsi le besoin de Dieu de s&rsquo;engager directement dans le travail. Atma, en revanche, assume la responsabilit&eacute; de toutes les autres t&acirc;ches. Par cons&eacute;quent, apr&egrave;s la cr&eacute;ation, Dieu devient inerte et apparemment hors de propos. On pourrait affirmer que Dieu, dans cet &eacute;tat, semble inexistant. Atma intervient pour combler le vide per&ccedil;u de Dieu et devient effectivement Dieu, nous rendant inconscients de l'absence de Dieu. D&rsquo;o&ugrave; l&rsquo;expression <strong>&laquo; La Parole &eacute;tait Dieu &raquo; </strong>est pr&eacute;sent&eacute; dans la deuxi&egrave;me &eacute;criture divine, signifiant une distinction entre Dieu et la parole. M&ecirc;me si la parole n&rsquo;est pas intrins&egrave;quement Dieu, elle s&rsquo;est transform&eacute;e en Dieu. L'expression <strong>&laquo; La Parole &eacute;tait Dieu &raquo; </strong>met en &eacute;vidence la transformation de la parole (sagesse) en Dieu. Puisque le mot (sagesse) est identifi&eacute; avec Atma et qu'Atma est consid&eacute;r&eacute; comme Dieu, il est affirm&eacute; qu'Atma, &eacute;tant le mot, est Dieu. Tout le monde se trompe en sachant qui est Dieu et qui est Atma.

	En r&eacute;alit&eacute;, Dieu n&rsquo;existe plus apr&egrave;s l&rsquo;acte de cr&eacute;ation. Sans que personne ne sache qu'il n'y a pas de Dieu dans le monde, Atma assume le r&ocirc;le de Dieu, accomplissant les devoirs de Jeevatma et de Prakruti. Simultan&eacute;ment, Atma assume une position proche de Dieu. Apr&egrave;s la cr&eacute;ation, Dieu s&rsquo;est transform&eacute; en une entit&eacute; sans forme et sans nom, sans t&acirc;che assign&eacute;e. D&eacute;crire un tel Dieu comme inexistant pourrait &ecirc;tre plus pr&eacute;cis que d&rsquo;affirmer son existence. Comme il n&rsquo;y a aucune entit&eacute; &agrave; la place de Dieu, Atma entre dans le r&ocirc;le de Dieu, &eacute;lucid&eacute; par la phrase <strong>&laquo; La Parole &eacute;tait Dieu</strong>&raquo; dans la troisi&egrave;me phrase. Bien que de nombreuses personnes entendent et &eacute;tudient ces phrases, le secret sous-jacent reste inconnu.

	Pour &eacute;lucider la r&eacute;alit&eacute; de l'Atma, qui incarne le r&ocirc;le de Dieu, il est d&eacute;clar&eacute; que <strong>&laquo; La Parole &eacute;tait Dieu. &raquo; </strong>Quand Atma, personnifiant Dieu, s&rsquo;engage dans une action, il attribue l&rsquo;action &agrave; &laquo; Jeevatma a fait &raquo; ou &laquo; Dieu a fait &raquo;, convainquant ainsi tout le monde de l&rsquo;existence de Dieu. Des questions peuvent se poser quant &agrave; savoir qui d&eacute;tient l&rsquo;autorit&eacute; sur l&rsquo;univers s&rsquo;il n&rsquo;y a pas de Dieu, ou si cette perspective s&rsquo;aligne sur la sagesse ou l&rsquo;ath&eacute;isme de Dieu. La r&eacute;ponse &agrave; ces questions est la suivante : nous disons que Dieu n&rsquo;est pas &agrave; la place de Dieu, mais nous ne disons pas que Dieu n&rsquo;existe pas du tout. Les actions de Dieu restent inconnues, et il est soulign&eacute; qu&rsquo;Il n&rsquo;a pas de nom, d&rsquo;&oelig;uvre ou de forme, et n&rsquo;a donc aucune relation directe avec les humains, mais nous n&rsquo;avons jamais dit que Dieu n&rsquo;existait pas du tout. Dans les temps d'une menace pour les dharmas, Dieu envoie Son repr&eacute;sentant pour r&eacute;tablir l'ordre. M&ecirc;me dans ce sc&eacute;nario, le repr&eacute;sentant s&rsquo;abstient de pr&eacute;tendre explicitement &ecirc;tre Dieu, adoptant le surnom de &laquo; Bhagavan &raquo;. Le myst&egrave;re entourant l&rsquo;identit&eacute; et les qualit&eacute;s de Dieu persiste. Dieu est l&agrave;, mais personne ne sait &agrave; quoi il ressemble. Personne n&rsquo;a vu ou communiqu&eacute; directement avec Dieu depuis la cr&eacute;ation. On peut tout dire sur n&rsquo;importe quoi dans le monde, mais personne ne peut rien dire de d&eacute;finitif sur Dieu. Des termes comme &laquo; Allah &raquo; dans le Kruta Yuga signifient la nature illimit&eacute;e de Dieu, et des d&eacute;signations comme &laquo; Parabrahma &raquo; soulignent la sup&eacute;riorit&eacute; de Dieu sur Atma, qui remplit divers r&ocirc;les. De plus, le terme &laquo; Paramatma &raquo; met en &eacute;vidence la distinction entre Dieu et Atma, et &laquo; Purushottama &raquo; d&eacute;signe la supr&eacute;matie de Dieu par rapport &agrave; Jeevatma et &agrave; Atma. Il vaut mieux admettre que ni vous ni moi ne savons rien de Dieu.
  </div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 80,
verse: ` <b>(2) 	L'Évangile de Jean, chapitre 1, verset 9.</b>`,
meaning: `<b>
(1:9) La vraie lumière qui éclaire tout le monde venait dans le monde </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	S&rsquo;il y a de la lumi&egrave;re dans le monde ext&eacute;rieur, c&rsquo;est gr&acirc;ce &agrave; un feu br&ucirc;lant. Cependant, dans ce contexte, la vraie lumi&egrave;re est mentionn&eacute;e dans le verset. La vraie lumi&egrave;re s&rsquo;allume sans feu et p&eacute;n&egrave;tre dans chaque &ecirc;tre humain, illuminant tout le corps de la t&ecirc;te aux pieds. Il n&rsquo;existe qu&rsquo;une seule lumi&egrave;re sans feu, c&rsquo;est l&rsquo;Atma, qui vient de Dieu et est d&eacute;sign&eacute; par Dieu (le Cr&eacute;ateur). L'Atma fournit la lumi&egrave;re de la conscience au corps tout entier. Lorsque l'Atma p&eacute;n&egrave;tre dans le corps, les 25 000 milliards de cellules du corps humain sont remplies de sa lumi&egrave;re. Chaque cellule devient une lampe allum&eacute;e sans feu. La lumi&egrave;re de la lampe a une temp&eacute;rature sp&eacute;cifique. Le corps humain a une temp&eacute;rature de 98,4 &deg;F &agrave; cause de la lumi&egrave;re d&rsquo;Atma. Lorsque l'Atma quitte le corps, le corps devient froid sans aucune chaleur. Un corps sans la lumi&egrave;re de l&rsquo;Atma est appel&eacute; un cadavre. Au verset 24&nbsp;:35, il est dit : <strong>"Atma est la lumi&egrave;re et le corps est la niche." </strong>On peut affirmer que l'Atma, qui illumine le corps, peut &ecirc;tre appel&eacute; la vraie lumi&egrave;re.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 81,
verse: ` <b>(3)	L'Évangile de Jean, 1er chapitre, 10e verset.</b>`,
meaning: ` <b>
(1:10) Il était dans le monde, et bien que le monde ait été créé à travers lui, le monde ne l'a pas reconnu.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Le terme « Loka (Monde) » en Telugu fait référence à quelque chose qui subit des expériences. L'Atma est présent chez les humains qui subissent des expériences et est le créateur de tous les êtres humains. Cependant, il est crucial de reconnaître la distinction entre Atma et Dieu. Dieu a créé Atma, et Atma, à son tour, a créé les humains. Il est important de comprendre que Dieu n’a pas directement créé les humains ; au lieu de cela, Il a formé le Prapancha entier, initialement dépourvu de tout être vivant. Dieu a d'abord engendré Prakruti, puis a donné à Atma le pouvoir de générer, gouverner et mettre fin à la vie humaine. Depuis lors, Atma a continuellement créé des humains, fonctionnant comme la lumière qui soutient la vie humaine et orchestrant les processus de mort et de renaissance. Malgré cela, les humains restent souvent inconscients de la présence de l’Atma, qui est proche et en eux et qui est essentiellement Dieu. L'Atma donne naissance aux êtres humains ; donc Atma est le Père des humains. Dieu a créé l'Atma ; ainsi Il est le Père d'Atma. Bien qu'Atma soit parfois appelé Dieu, le vrai Dieu est le Saint-Esprit, tandis qu'Atma est le Père des humains.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 82,
verse: ` <b>(4)	L'Évangile de Jean, 1er chapitre, 11e verset.</b>`,
meaning: `  <b>
(1:11) Il est venu vers ce qui lui appartenait, mais les siens ne l'ont pas reçu.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Le terme « les siens » englobe tous ceux qu’il a créés. Atma, agissant sur le commandement du Saint-Esprit, a donné naissance aux humains et s'est manifesté à eux sous la forme de la sagesse divine, appelée la Parole. Même si l'Atma est venu aux humains sous forme de sagesse, les humains ont tendance à percevoir leur propre connaissance comme importante, négligeant ou rejetant souvent la sagesse offerte.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 83,
verse: `  <b>(5)	L'Évangile de Jean, 1er chapitre, 12e verset</b>`,
meaning: `<b>
(1:12) Pourtant, à tous ceux qui l’ont reçu, à ceux qui ont cru en son nom, il a donné le droit de devenir enfants de Dieu. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ceux qui comprennent la sagesse offerte par l'Atma adopteront l'Atma. Ceux qui connaissent la sagesse d’Atma et ont foi en Atma ont la perspective de devenir les héritiers d’Atma. Par conséquent, le verset affirme : « Il a donné le droit de devenir enfants de Dieu ». Le terme « enfants de Dieu » désigne ceux qui connaissent la sagesse d’Atma.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 84,
verse: ` <b>(6)	L'Évangile de Jean, 1er chapitre, 13e verset.</b>`,
meaning: `<b>
(1:13) Les hommes nés ni d’une descendance naturelle, ni d’une décision humaine ou de la volonté d’un mari, mais né de Dieu.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Tous les êtres humains sont originaires d'Atma. Ils ne sont pas nés du sang des femmes ni la volonté des hommes ou des femmes.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 85,
verse: `<b>(7)	L'Évangile de Jean, 1er chapitre, 14e verset.</b>`,
meaning: ` <b>
(1:14) La Parole s'est faite chair et a élu domicile parmi nous. Nous avons vu sa gloire, la gloire du Fils unique, venu du Père, plein de grâce et de vérité. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Le Dieu Atma (Sagesse) a pris une forme physique, ressemblant à celle d'un humain, et a habité parmi les humains, rayonnant de grâce et de sagesse.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 86,
verse: `  <b>(8)	L'Évangile de Jean, 1er chapitre, 18e verset.</b>`,
meaning: ` <b>
(1:18) Aucun homme n’a jamais vu Dieu ; le Fils unique, qui est dans le sein du Père, l'a révélé. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le mot &laquo; Dieu &raquo; est utilis&eacute; &agrave; la fois pour Atma et Paramatma. Dans la derni&egrave;re &eacute;criture divine, le terme &laquo; Allah &raquo; est utilis&eacute; pour les deux dieux : Atma et Paramatma. Les musulmans ne pouvaient donc pas reconna&icirc;tre deux dieux. Pour &eacute;viter cette erreur, la Bible d&eacute;clare qu'Atma est le P&egrave;re et Paramatma est le Saint-Esprit. Le terme &laquo; Fils engendr&eacute; &raquo; fait r&eacute;f&eacute;rence &agrave; <strong>le fils unique cr&eacute;&eacute; par Dieu</strong>. Paramatma (le Saint-Esprit) est &eacute;ternel. Apr&egrave;s avoir cr&eacute;&eacute; Prakruti au d&eacute;but, Paramatma a cr&eacute;&eacute; un fils appel&eacute; Atma pour faire exister tous les &ecirc;tres vivants. Atma a cr&eacute;&eacute; tous les &ecirc;tres vivants selon les commandements du Saint-Esprit. Il n&rsquo;y a donc qu&rsquo;un seul P&egrave;re (Dieu cr&eacute;&eacute;) pour tous les &ecirc;tres vivants. Le P&egrave;re de l'Atma cr&eacute;&eacute; est le Saint-Esprit. "<strong>Personne n'a jamais vu Dieu (le Saint-Esprit ou Paramatma) &raquo;, </strong>comme indiqu&eacute; dans le verset. Dieu (le Saint-Esprit) n'a pas de forme, de nom ou d'&oelig;uvre ; par cons&eacute;quent, personne n'a jamais vu Paramatma. Atma, le Fils unique, r&eacute;v&egrave;le le Dieu invisible &agrave; travers sa sagesse. Atma est le Fils unique s&eacute;par&eacute; du c&oelig;ur du Grand Dieu, Paramatma. Parce que personne n'a vu le Saint-Esprit, seul Atma peut parler de son P&egrave;re, le Saint-Esprit.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 87,
verse: ` <b>(9)	L'Évangile de Jean, 1er chapitre, 51e verset.</b>`,
meaning: `<b>
(1:51) Il a ensuite ajouté : « En vérité, je vous le dis, vous verrez le ciel s'ouvrir et les anges de Dieu monter et descendre sur le Fils de l'homme. » </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  C’est la parole que Jésus a dite à Nathanaël lui-même. Jésus prétendait être le Fils de l’homme, même si Nathanaël l’avait qualifié de Fils de Dieu. Jésus n'a pas nié être le Fils de Dieu mais s'est plutôt réduit au Fils de l'homme. Il a assuré à Nathanaël et à d’autres qu’ils seraient témoins d’événements extraordinaires. Comme nous l’avons déjà souligné, les serviteurs de Dieu, les anges, dirigent le monde humain. Ces anges, souvent appelés Bhutas et Planètes (Grahas), sont nombreux dans le ciel et se comptent par milliards. Lors d'une rencontre avec Jésus, les serviteurs de Dieu, conscients de son identité, descendirent du ciel et s'inclinèrent devant lui. Cependant, de nombreux êtres humains ignorent qui est réellement Jésus et ne se prosternent pas devant Lui. Des références similaires se trouvent dans le Coran, la dernière écriture divine, en particulier dans les versets 15 :28, 15 :29 et 15 :30. Dans le verset mentionné, il est prophétisé que Nathanaël serait témoin de la présence de Bhutas et de Grahas autour du Fils de l'Homme, comme si les portes du ciel s'étaient ouvertes. L’expression « monter et descendre » désigne le va-et-vient, tandis que « descendre sur le Fils de l’homme » implique l’arrivée des anges auprès de Jésus. Lorsque Nathanaël reconnut Jésus comme le Fils de Dieu, Jésus, reconnaissant la vision de sagesse de Nathanaël, lui assura au verset 50 qu’il serait témoin de phénomènes encore plus grands. Le verset 51 suit, exprimant que Nathanaël, possédant une vision de sagesse, pouvait percevoir des choses au-delà de la vue ordinaire des autres. Les événements décrits au verset 51 ne sont visibles que par ceux qui possèdent la sagesse divine, donnant un aperçu de la véritable identité de Jésus.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 88,
verse: `<b>(10)	L'Évangile de Jean, 3ème chapitre, 3ème verset.</b>`,
meaning: ` <b>
(3:3) Jésus répondit : « En vérité, je vous le dis, personne ne peut voir le royaume de Dieu à moins ils sont nés de nouveau. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Le verset ne doit pas être interprété littéralement, car il a une signification symbolique plus profonde. Dieu et son royaume sont au-delà de la visibilité physique pour quiconque. Jésus a explicitement indiqué que comprendre et percevoir le royaume de Dieu nécessite une renaissance spirituelle. Cela n’implique pas une mort physique ni une renaissance ultérieure. Si on le prend littéralement, cela signifierait que quiconque cherche à connaître Dieu devrait subir une mort physique, ce qui est un malentendu. Nicodème, qui avait une interprétation littérale, a soulevé une question basée sur cette idée fausse.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 89,
verse: `<b>(11)	L'Évangile de Jean, chapitre 3, versets 4, 5, 6, 7 et 8.</b>`,
meaning: `<b>
(3:4) « Comment quelqu'un peut-il naître quand il est vieux ? » » demanda Nicodème. « Ils ne peuvent sûrement pas entrer une seconde fois dans le ventre de leur mère pour naître ! »
<br><br>
(3:5) Jésus répondit : « En vérité, je vous le dis, personne ne peut entrer dans le royaume de Dieu. à moins qu'ils ne soient nés de l'eau et de l'Esprit (Atma).
<br><br>
(3:6) La chair donne naissance à la chair, mais l'Esprit (Atma) donne naissance à l'esprit.
<br><br>
(3:7) Vous ne devriez pas être surpris de ma parole : « Vous devez naître de nouveau. »
<br><br>
(3:8) Le vent souffle où bon lui semble. Vous entendez son son, mais vous ne pouvez pas dire d’où il vient ni où il va. Il en va de même pour tous ceux qui sont nés de l’Esprit (Atma). </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Lorsqu&rsquo;un homme meurt et rena&icirc;t, cela s&rsquo;appelle une renaissance. Si la renaissance se produit physiquement, tous les organes de l&rsquo;homme changeront. Si cela se produit, le d&eacute;sir de voir Dieu et son Royaume dispara&icirc;tra &eacute;galement. Le corps ne doit pas mourir pour garder les organes et les ambitions tels qu&rsquo;ils sont. Le corps contient &agrave; la fois la sagesse et l&rsquo;ignorance, mais l&rsquo;ignorance dans le corps devrait compl&egrave;tement mourir. Lorsqu&rsquo;un homme se d&eacute;barrasse de ses pens&eacute;es et de ses d&eacute;sirs ignorants, il est consid&eacute;r&eacute; comme mort dans l&rsquo;ignorance et n&eacute; de la sagesse. On peut dire que celui qui se d&eacute;barrasse de l&rsquo;ignorance et acquiert la sagesse est n&eacute; de l&rsquo;Atma. <strong>Le devoir de l'homme est de conna&icirc;tre l'Atma dans le corps</strong>. Pour conna&icirc;tre l&rsquo;Atma, il faut conna&icirc;tre la sagesse de l&rsquo;Atma. Lorsqu'un homme conna&icirc;t la sagesse de l'Atma, il est consid&eacute;r&eacute; comme n&eacute; de l'Atma. Quand le corps meurt, l&rsquo;homme obtient un nouveau corps, mais changer sa volont&eacute; dans le m&ecirc;me corps sans obtenir un nouveau corps est comme une nouvelle naissance. Le vent souffle o&ugrave; bon lui semble, et on entend son bruit selon l'endroit o&ugrave; il souffle. &Agrave; mesure que le vent change de direction, si un homme change de but, ce sera pour lui une nouvelle naissance. Celui qui d&eacute;sire l'Atma conna&icirc;t l'Atma dans le m&ecirc;me corps et dans la m&ecirc;me vie. Il n'est pas n&eacute;cessaire d'aller dans une autre vie pour conna&icirc;tre l'Atma.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 90,
verse: `<b>(12)	L'Évangile de Jean, chapitre 3, verset 13. </b>`,
meaning: `<b>
(3:13) Personne n'est jamais allé à Paraloka sauf celui qui venait de Paraloka -le Fils de l'Homme. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Ihaloka, Heaven (Swarga-Loka), Hell (Naraka-Loka) et Paraloka sont les noms des quatre mondes. Le monde (Loka) dans lequel nous vivons tous s'appelle Ihaloka. Le paradis et l&rsquo;enfer ne sont pas des mondes s&eacute;par&eacute;s ; les deux sont sur terre. Loka n'est ni un royaume ni un territoire. Le lieu et le moment de l&rsquo;exp&eacute;rience commune sont appel&eacute;s loka. L&rsquo;endroit o&ugrave; l&rsquo;on &eacute;prouve des difficult&eacute;s s&rsquo;appelle Yamaloka, Naraka-Loka ou l&rsquo;enfer. De m&ecirc;me, l&rsquo;endroit o&ugrave; l&rsquo;on &eacute;prouve le bonheur s&rsquo;appelle Swarga-Loka ou paradis. Puisque ces deux exp&eacute;riences se produisent sur terre, on peut dire que ce monde (Ihaloka) est &agrave; la fois le paradis et l&rsquo;enfer. Cependant, Paraloka est diff&eacute;rent de l'enfer et du paradis. Alors que l'enfer et le paradis impliquent des exp&eacute;riences, Paraloka n'a aucune exp&eacute;rience. L&rsquo;&eacute;tat dans lequel il n&rsquo;y a aucune exp&eacute;rience s&rsquo;appelle Paraloka. Lorsqu'une personne transcende le karma, elle ne conna&icirc;t ni le bonheur ni le chagrin et entre dans Paraloka. C'est ce qu'on appelle l'&eacute;tat d'&ecirc;tre un avec Dieu, Mukti ou Moksham. Une personne &agrave; Ihaloka est toujours li&eacute;e par le p&eacute;ch&eacute; et le karma punya. Celui qui est &agrave; Paraloka n&rsquo;a aucun karma. Si une personne meurt &agrave; Ihaloka, elle ne peut pas aller &agrave; Paraloka mais retourner &agrave; Ihaloka. D'un autre c&ocirc;t&eacute;, une personne de Paraloka, lorsqu'elle vient au monde pour quelque n&eacute;cessit&eacute; que ce soit, retourne &agrave; Paraloka. Par cons&eacute;quent, bien que le r&eacute;sident de Paraloka venu de Paraloka reste dans ce monde pendant un certain temps selon sa volont&eacute;, il entrera plus tard &agrave; Paraloka. D&rsquo;o&ugrave; le verset &laquo;<strong>Personne n'est jamais entr&eacute; &agrave; Paraloka sauf le Fils de l'homme qui est &agrave; Paraloka</strong>&raquo; implique que celui qui est &agrave; Paraloka est Dieu. M&ecirc;me si quelqu&rsquo;un qui est devenu Dieu na&icirc;t humain, il reviendra &agrave; Paraloka. La m&ecirc;me chose est exprim&eacute;e dans Jean 3&nbsp;:13.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 91,
verse: ` <b>(13)	L'Évangile de Jean, chapitre 3, verset 15.</b>`,
meaning: `<b>
(3:15) Pour que quiconque croit en Lui ne périsse pas mais ait la vie éternelle. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Quiconque croit en Dieu obtiendra la vie &eacute;ternelle sans mourir. Cependant, il est &eacute;crit que &laquo; la vie &eacute;ternelle vient de Lui seul &raquo;. Paramatma existe &agrave; la fois &agrave; l'int&eacute;rieur et &agrave; l'ext&eacute;rieur du corps. <strong>Lorsque Jeevatma fusionne avec Paramatma, il est d&eacute;clar&eacute; que Jeevatma a atteint Paraloka, &eacute;galement reconnu comme le royaume de Dieu.</strong>. On peut &eacute;galement affirmer que Jeevatma a atteint la vie &eacute;ternelle (moksham). Le verset d&eacute;clare : &laquo; Celui qui croit en Dieu sera finalement lib&eacute;r&eacute; du karma et recevra la vie &eacute;ternelle. &raquo; Paraloka, repr&eacute;sentant la vie &eacute;ternelle, impr&egrave;gne partout, quel que soit l&rsquo;emplacement physique de chacun. Par cons&eacute;quent, quiconque atteint Moksham s'unit au Saint-Esprit (Paramatma) dans son corps.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 92,
verse: `<b>(14)	L'Évangile de Jean, chapitre 3, verset 17.</b>`,
meaning: `<b>
(3:17) Car Dieu n'a pas envoyé son Fils dans le monde pour juger le monde, mais pour sauver le monde par Lui. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dieu a envoyé son Fils en tant qu’homme dans le monde pour sauver les humains, et non pour les juger. La responsabilité de l’homme issu de Dieu est d’enseigner la sagesse de Dieu aux humains et de les sauver de leurs péchés. Il n'est pas venu pour juger les péchés et la punya des êtres humains. Dieu n’a pas envoyé son représentant sur terre pour le jugement ; au lieu de cela, Il est venu pour sauver les gens. Ce verset est crucial dans la Bible. Atma juge un homme quand il meurt. Le celui qui vient de Dieu enseigne aux humains comment échapper au karma, tandis que l'Atma accomplit la tâche de les juger.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 93,
verse: `<b>(15)	L'Évangile de Jean, chapitre 3, verset 18. </b>`,
meaning: `<b>
(3:18) Celui qui croit en Lui n’est pas jugé, mais celui qui ne croit pas est déjà jugé parce qu’il n’a pas cru au nom du Fils unique de Dieu.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le verset dit : &laquo; Celui qui croit en Lui &raquo;, ce qui fait r&eacute;f&eacute;rence soit au Dieu invisible, soit au repr&eacute;sentant visible de Dieu qui est venu de Dieu. Le verset d&eacute;clare &eacute;galement : &laquo; Ils n&rsquo;ont pas cru au nom du Fils unique de Dieu &raquo;, ce qui implique qu&rsquo;il doit &ecirc;tre compris comme faisant r&eacute;f&eacute;rence au repr&eacute;sentant de Dieu qui est venu de Dieu. Dieu lui-m&ecirc;me est venu sur terre sous la forme d&rsquo;un homme pour enseigner la sagesse aux humains. J&eacute;sus a dit : &laquo;<strong>Je suis le Fils de Dieu, ou le Fils de l&rsquo;homme, ou le Fils unique de Dieu</strong>&raquo;, pour ne pas &ecirc;tre reconnu. Dans l'hindouisme, Dieu est appel&eacute; Bhagavan lorsqu'il se d&eacute;guise et vient sur terre sous la forme d'un homme. Krishna est celui qui est venu comme &ccedil;a ; c'est pourquoi Il est appel&eacute; Bhagavan dans la Bhagavad-Gita. Bien que J&eacute;sus, qui est le Fils de Dieu, soit apparu comme un homme, Il devrait aussi &ecirc;tre appel&eacute; Bhagavan. Lorsque Dieu s'incarne en tant qu'homme sur terre, les hindous l'appellent Bhagavan et les chr&eacute;tiens l'appellent le Fils de l'homme. Alors qu'il est dit dans la derni&egrave;re &eacute;criture divine (15&nbsp;:28, 29, 30) que <strong>Dieu envoie son repr&eacute;sentant en lui insufflant son &acirc;me</strong>, les musulmans croient que Dieu ne vient pas en tant qu'homme. Celui qui n&rsquo;a pas foi au repr&eacute;sentant de Dieu, le Fils de Dieu, est d&eacute;j&agrave; jug&eacute;.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 94,
verse: `<b>(16) L'Évangile de Jean, 3ème chapitre, 19ème, 20ème, 21ème versets.</b>`,
meaning: ` <b>
(3:19) Voici le verdict : La lumière est venue dans le monde, mais les gens ont préféré les ténèbres à la lumière parce que leurs actions étaient mauvaises.
<br><br>
(3:20) Quiconque fait le mal déteste la lumière et ne vient pas à la lumière de peur que ses actes ne soient révélés.
<br><br>
(3:21) Mais quiconque vit selon la vérité vient à la lumière, afin qu'il soit clairement vu que ce qu'il a fait a été fait devant Dieu. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Paramatma, qui reste inconnu de tous, symbolise les t&eacute;n&egrave;bres. Atma, cr&eacute;&eacute; par Paramatma, incarne la vraie lumi&egrave;re. Paramatma a cr&eacute;&eacute; deux Fils : un Atma invisible, servant de lumi&egrave;re dans le corps, et un autre Atma qui s'incarne en tant qu'humain parmi les humains. Alors que l'Atma, invisible et illuminant le corps, est appel&eacute; le Fils, l'autre Fils de Dieu, se manifestant sous la forme d'un homme, est distinctement appel&eacute; <strong>le Fils unique engendr&eacute;</strong>. J&eacute;sus, le Fils unique, est descendu sur terre. Cependant, en raison de leurs actions malveillantes, les gens ch&eacute;rissaient leurs propres t&eacute;n&egrave;bres et s&rsquo;abstenaient de s&rsquo;approcher de J&eacute;sus, la lumi&egrave;re de la sagesse.

	Tout individu ignorant nourrit une aversion envers le repr&eacute;sentant de Dieu qui apporte le <strong>lumi&egrave;re de la sagesse </strong>au monde. Ils craignent que leurs actes n&eacute;fastes soient r&eacute;v&eacute;l&eacute;s en pr&eacute;sence du repr&eacute;sentant de Dieu, ce qui les am&egrave;ne &agrave; fuir la lumi&egrave;re et dissimuler leurs actes. Ceux qui anticipent que la lumi&egrave;re de Dieu, prenant forme humaine sur terre, d&eacute;voilera leurs sombres actions &eacute;vitent de venir vers le Fils de Dieu lorsqu&rsquo;Il appara&icirc;tra. Ceux qui adh&egrave;rent &agrave; la sagesse de Dieu comprennent que l&rsquo;Atma est responsable de toutes leurs actions au sein du corps. Ils s&rsquo;approchent du Fils de Dieu parce que toutes leurs actions sont &agrave; l&rsquo;int&eacute;rieur <strong>La lumi&egrave;re de Dieu, guid&eacute;e par la sagesse</strong>. Cependant, seule une petite fraction des gens sur terre reconna&icirc;t qu&rsquo;Atma, qui est Dieu, est responsable de toutes leurs actions. Par cons&eacute;quent, seul un nombre limit&eacute; de personnes s&rsquo;approchent du Fils de Dieu lors de son apparition. Puisque la terre est peupl&eacute;e d&rsquo;individus qui croient &ecirc;tre seuls responsables de leurs actes, ils s&rsquo;abstiennent de chercher le Fils de Dieu. Non seulement ils &eacute;vitent le Fils de Dieu, mais ils nourrissent &eacute;galement de l&rsquo;animosit&eacute; et infligent des difficult&eacute;s au repr&eacute;sentant de Dieu, qui se manifeste rarement sur terre. Ils se moquent du Fils de Dieu, le soumettant &agrave; de nombreuses tribulations.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 95,
verse: ` <b>(17)	L'Évangile de Jean, chapitre 5, verset 19.</b>`,
meaning: ` <b>
(5:19) Jésus leur donna cette réponse : « En vérité, je vous le dis, le Fils ne peut rien faire de lui-même ; Il ne peut faire que ce qu’il voit faire son Père, car tout ce que fait le Père, le Fils le fait aussi.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dans ce verset, la mention de &laquo;&nbsp;P&egrave;re et Fils&nbsp;&raquo; est accompagn&eacute;e de la d&eacute;claration selon laquelle &laquo;&nbsp;Le Fils fera les choses que fait le P&egrave;re&nbsp;&raquo;. Il est crucial de discerner les identit&eacute;s du P&egrave;re et du Fils, &eacute;tant donn&eacute; que le Saint-Esprit (Dieu) est le seul. Bien que Dieu ait un Fils &eacute;ternel, il existe &eacute;galement un autre Fils qui s&rsquo;incarne occasionnellement sur Terre. Il est important de d&eacute;terminer &agrave; quel Fils le verset s&rsquo;adresse. Jean 3&nbsp;:17 souligne : &laquo;<strong>Car Dieu n'a pas envoy&eacute; son Fils dans le monde pour condamner le monde, mais pour sauver le monde par lui.</strong>&raquo;, faisant r&eacute;f&eacute;rence au fils de Dieu, qui se manifeste sur Terre. Ce verset (5&nbsp;:&nbsp;19) fait r&eacute;f&eacute;rence au Fils, Atma, qui sert de lumi&egrave;re dans le corps humain. L'Atma est &eacute;ternel sur terre, fournissant &laquo;<strong>la lumi&egrave;re de la mobilit&eacute;</strong>&raquo; au corps de chacun. Sur cette base, surtout lors de la lecture du verset, il faut d&eacute;terminer lequel des deux fils dont Dieu, le Saint-Esprit, a parl&eacute; dans le verset. Jean 5&nbsp;:&nbsp;19 caract&eacute;rise Atma comme le fils &eacute;ternel de Dieu, d&eacute;clarant qu&rsquo;Atma refl&egrave;te les actions du Saint-Esprit et s&rsquo;engage uniquement dans les t&acirc;ches h&eacute;rit&eacute;es du P&egrave;re, sans rien faire de mani&egrave;re ind&eacute;pendante.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 96,
verse: `<b>(18)	L'Évangile de Jean, chapitre 5, verset 20.</b>`,
meaning: ` <b>
(5:20) Car le Père aime le Fils et lui montre tout ce qu'il fait. Oui, et Il lui montrera des œuvres encore plus grandes que celles-ci, afin que vous en soyez étonnés. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Quand nous demandons qui a dit : &laquo;<strong>Paramatma (le Saint-Esprit) aime le Fils et lui montre tout ce qu'il fait</strong>&raquo;, nous constatons que J&eacute;sus, le deuxi&egrave;me Fils de Dieu, a prononc&eacute; ces paroles &agrave; ses disciples alors qu&rsquo;il &eacute;tait sur terre. Personne n&rsquo;&eacute;tait capable de reconna&icirc;tre pleinement le Fils de Dieu lorsqu&rsquo;il marchait parmi les humains en tant qu&rsquo;homme. Malgr&eacute; ses enseignements et ses miracles, certains l&rsquo;ont soumis &agrave; de grandes souffrances et humiliations, conduisant finalement &agrave; sa mort. Cependant, le Fils unique de Dieu, nomm&eacute; J&eacute;sus, &eacute;tait au milieu d&rsquo;eux et dit : &laquo;<strong>Le </strong><strong>P&egrave;re lui montrera (Atma) des &oelig;uvres encore plus grandes que celles-ci afin que vous soyez &eacute;tonn&eacute;s</strong>.&raquo; Dieu a ordonn&eacute; &agrave; Atma de r&eacute;gner sur les Jeevas et de montrer des choses encore plus grandes. Explorons maintenant quelles sont ces grandes choses.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 97,
verse: `<b>(19)	L'Évangile de Jean, chapitre 5, versets 21, 22, 23. </b>`,
meaning: `<b>
(5:21) Car, de même que le Père ressuscite les morts et leur donne la vie, de même le Fils donne la vie à qui Il lui plaît de la donner.
<br><br>
(5:22) De plus, le Père ne juge personne, mais a confié tout jugement au Fils.
<br><br>
(5:23) Afin que tous honorent le Fils comme ils honorent le Père. Celui qui n'honore pas le Fils n'honore pas le Père qui l'a envoyé. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  T
	Il y a quelque chose de remarquable ici. Bien qu&rsquo;il soit fait mention de &laquo;<strong>deux Allah</strong>&raquo; dans le Coran, les musulmans ne pouvaient pas le trouver. De m&ecirc;me, il est fait mention de &laquo;<strong>deux fils</strong>&raquo; dans la Bible, mais les chr&eacute;tiens ne pouvaient pas le comprendre et parler d&rsquo;un seul Fils. Ces trois versets contiennent le mot &laquo; Fils &raquo;. Il faut d&eacute;terminer lequel des deux Fils est mentionn&eacute; dans ces versets. Beaucoup ne sont pas capables de comprendre qu&rsquo;il existe un deuxi&egrave;me Fils parce qu&rsquo;un seul Fils &agrave; la fois est mentionn&eacute; dans les versets. Dieu a dit : &laquo;<strong>Car Dieu n'a pas envoy&eacute; son Fils dans le monde pour juger le monde, mais pour sauver le monde par lui &raquo; dans Jean 3&nbsp;:17, et &laquo; Le P&egrave;re a confi&eacute; tout jugement au Fils &raquo; dans Jean 5&nbsp;:22.</strong>. Sur cette base, il faut comprendre que Dieu a deux Fils.

	Dieu a dit &agrave; propos d'Atma : &laquo; De m&ecirc;me que le P&egrave;re, le Saint-Esprit, ressuscite les morts et leur donne la vie, le Fils ressuscite aussi les morts et donne la vie. &raquo; Tout comme le P&egrave;re ressuscite les morts et donne la vie, Atma d&eacute;cide des prochaines exp&eacute;riences de vie d&rsquo;une personne apr&egrave;s la mort en fonction des p&eacute;ch&eacute;s et du punya de sa vie pass&eacute;e. Par cons&eacute;quent, &laquo; comme le P&egrave;re, le Fils donne la vie &agrave; qui il veut &raquo;, est-il dit dans le verset. "<strong>Qu'il aime</strong>" moyens "<strong>ceux qui sont d&eacute;termin&eacute;s par le karma</strong>&raquo; du point de vue d&rsquo;Atma. Comme l&rsquo;Atma est la lumi&egrave;re cach&eacute;e dans le corps qui d&eacute;termine le karma de la prochaine vie d&rsquo;une personne, &laquo; Il ressuscitera celui qu&rsquo;Il a jug&eacute; &raquo;, est-il dit dans le verset. &laquo; Ressusciter &raquo; signifie &laquo; na&icirc;tre de nouveau &raquo;.

	Dieu a donn&eacute; &agrave; Atma le pouvoir de juger les morts et de les ramener &agrave; la vie afin que chacun puisse glorifier son Fils, Atma, tout comme chacun glorifie le Saint-Esprit en tant que grand Dieu. Au moment m&ecirc;me de la mort d&rsquo;une personne, Atma, la lumi&egrave;re dans le corps, d&eacute;termine son karma pour la seconde vie en fonction des p&eacute;ch&eacute;s et du punya de sa vie pass&eacute;e et l&rsquo;emm&egrave;ne imm&eacute;diatement vers la seconde vie. Atma d&eacute;cide de la seconde vie en fonction du karma de la personne et lui redonne la vie. Ceux qui ne savent pas qu'Atma fait de si grandes choses ne voient pas Atma avec un grand respect. Celui qui ne respecte pas Atma ne respectera pas Dieu qui a envoy&eacute; Atma. Une telle ignorance ne respecte ni l&rsquo;Atma, qui est dans le corps, ni le Paramatma, qui est &agrave; l&rsquo;int&eacute;rieur et &agrave; l&rsquo;ext&eacute;rieur du corps.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 98,
verse: `<b>(20)	L'Évangile de Jean, chapitre 5, verset 24.</b>`,
meaning: ` <b>
(5:24) En vérité, je vous le dis, quiconque entend ma parole et croit Celui qui m'a envoyé a la vie éternelle et ne sera pas jugé mais est passé de la mort à la vie. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Auparavant, les versets 5 :21, 5 :22 et 5 :23 parlaient de l'âme (Atma), qui est la mobilité dans le corps. Le verset 5 : 24 parle de l’âme, qui est venue sous forme humaine sous le nom de Jésus. Celui qui croit au Saint-Esprit, qui a envoyé Jésus, le Fils unique, atteindra Moksham. Une telle personne atteint Moksham sans subir de jugement immédiatement après sa mort.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 99,
verse: ` <b>(21)	L'Évangile de Jean, chapitre 5, verset 26.</b>`,
meaning: ` <b>
(5:26) Car, de même que le Père a la vie en Lui-même, de même Il a donné au Fils aussi d'avoir la vie en Lui-même.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dieu, le Saint-Esprit, est éternel pour toujours. Tout comme Paramatma est éternel, Atma, Son fils, a reçu le pouvoir d'être éternel pour toujours. Le Saint-Esprit, le Père de l'Atma, lui a conféré cette autorité. Dans la première écriture divine, en comparant Jeevatma à Atma, Jeevatma est appelé Kshara (âme périssable), tandis qu'Atma est désigné comme Akshara (âme impérissable).
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 100,
verse: ` <b>(22)	L'Évangile de Jean, chapitre 5, verset 37.</b>`,
meaning: `<b>
(5:37) Vous n’avez jamais entendu Sa voix ni vu Sa forme. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dans ce contexte, « Son » fait référence à Paramatma (le Saint-Esprit). Dieu, connu sous le nom de Paramatma ou Saint-Esprit, est dépourvu de nom, de forme ou de tâches spécifiques. Personne n’a été témoin d’un tel Dieu parce qu’il lui manque une forme perceptible. Par conséquent, aucun humain n’a jamais posé les yeux sur Dieu. Dieu ne communique avec personne car il reste inactif. Par conséquent, on peut affirmer qu’aucune personne vivante n’a vraiment vu Dieu. Toute affirmation selon laquelle avoir été témoin de Dieu peut être considérée comme fausse. Dieu n'est ni visible ni vocal.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 101,
verse: `<b>(23)	L'Évangile de Jean, chapitre 5, verset 38. </b>`,
meaning: `<b>
(5:38) Sa parole n'habite pas non plus en vous, car vous ne croyez pas celui qu'Il a envoyé.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Bien que le premier cr&eacute;ateur, le Saint-Esprit, ne s&rsquo;engage pas activement dans son &oelig;uvre, certaines responsabilit&eacute;s rel&egrave;vent de Son domaine. N&eacute;anmoins, il s&rsquo;abstient de toute action directe. Au lieu de cela, Dieu, Paramatma, a assign&eacute; Ses serviteurs pour accomplir Son &oelig;uvre. Ces millions de serviteurs constituent Sa domination et ex&eacute;cutent toutes les t&acirc;ches qui Lui sont assign&eacute;es. Tandis que Dieu lui-m&ecirc;me reste inactif, ses serviteurs remplissent les r&ocirc;les qu&rsquo;il est cens&eacute; assumer. Paramatma, cependant, a une t&acirc;che cruciale &agrave; accomplir : transmettre la sagesse divine. Dieu lui-m&ecirc;me est requis pour cette t&acirc;che, car ses serviteurs ne peuvent pas l&rsquo;accomplir. La derni&egrave;re &eacute;criture d&eacute;clare : &laquo;<strong>Dieu devrait enseigner la sagesse de Dieu parce que personne ne conna&icirc;t la sagesse de Dieu sauf Dieu.</strong>.&raquo; D&eacute;guis&eacute;, Dieu vient enseigner la sagesse de Dieu. Bien qu&rsquo;Il parle d&eacute;guis&eacute;, Son identit&eacute; reste inconnue, car personne ne peut discerner celui qui est d&eacute;guis&eacute;. Bien que Dieu communique sa sagesse, celle-ci reste souvent m&eacute;connue comme &eacute;tant ses paroles. Comme Dieu est sage, il prend l&rsquo;apparence de &laquo;<strong>Bhagavan</strong>&raquo; et transmet la sagesse.

	M&ecirc;me lorsque Dieu vient personnellement sur terre d&eacute;guis&eacute; en homme pour enseigner la sagesse, il pr&eacute;dit &eacute;galement l&rsquo;envoi d&rsquo;un homme sp&eacute;cial dont la v&eacute;ritable identit&eacute; restera inconnue. &laquo; Celui qui vient de Dieu enseignera la sagesse de Dieu &raquo;, a d&eacute;clar&eacute; Dieu lui-m&ecirc;me dans ses &eacute;critures divines. Par cons&eacute;quent, tout le monde s&rsquo;attend &agrave; ce que celui qui est envoy&eacute; de Dieu transmette la sagesse de Dieu. Ainsi, l&rsquo;incarnation de Dieu reste voil&eacute;e pour tous. Bien que Dieu soit venu sur terre en tant qu&rsquo;homme pendant le Treta Yuga, personne ne l&rsquo;a reconnu. Pendant le Dvapara Yuga, Dieu est venu comme un homme et a transmis les enseignements de la Bhagavad-Gita, d&eacute;clarant m&ecirc;me <strong>"Je suis Dieu" </strong>dans la Bhagavad-Gita, pourtant personne ne l'a reconnu. De m&ecirc;me, lorsque Dieu s&rsquo;est incarn&eacute; en J&eacute;sus dans le Kali Yuga, personne ne l&rsquo;a reconnu, ce qui lui a pos&eacute; de nombreux d&eacute;fis. Personne n&rsquo;a r&eacute;alis&eacute; qu&rsquo;Il &eacute;tait le vrai Dieu. Certains qui pr&eacute;tendaient &ecirc;tre des croyants de Dieu affirmaient que J&eacute;sus &eacute;tait le Fils de l&rsquo;homme, sans le reconna&icirc;tre comme Dieu. D&rsquo;autres ont identifi&eacute; J&eacute;sus comme le Fils de Dieu, mais n&rsquo;ont toujours pas reconnu sa divinit&eacute;.

	Bien que J&eacute;sus soit Dieu incarn&eacute;, il a d&eacute;clar&eacute; : &laquo;<strong>Tu n'as pas cru celui qu'Il a envoy&eacute;</strong>&raquo; dans ce verset sans r&eacute;v&eacute;ler sa v&eacute;ritable identit&eacute;. Il a exprim&eacute; que les gens manquaient de foi en l&rsquo;homme envoy&eacute; par Dieu, d&eacute;clarant : &laquo; La parole de Dieu n&rsquo;a pas v&eacute;cu en vous. &raquo; S&rsquo;il n&rsquo;y a pas de foi en l&rsquo;homme envoy&eacute; par Dieu, pourquoi la parole de Dieu ne r&eacute;sonne-t-elle pas aupr&egrave;s des humains ? La raison r&eacute;side dans l&rsquo;incr&eacute;dulit&eacute; envers le messager divin, qui est Dieu lui-m&ecirc;me et porteur de sagesse. Par cons&eacute;quent, la parole de Dieu ne parvient pas &agrave; s&rsquo;enraciner chez ceux qui manquent de foi en Lui.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 102,
verse: ` <b>(24)	L'Évangile de Jean, chapitre 6, versets 25, 26, 27.</b>`,
meaning: ` <b>
(6:25) Lorsqu'ils le trouvèrent de l'autre côté du lac, ils lui demandèrent : « Rabbi, quand es-tu arrivé ici ?
<br><br>
(6:26) Jésus répondit : « En vérité, je vous le dis, vous me cherchez, non pas parce que tu as vu les signes que j'ai accomplis mais parce que tu as mangé les pains et que tu es rassasié.
<br><br>
(6:27) Ne travaillez pas pour une nourriture qui se gâte, mais pour une nourriture qui dure jusqu'à la vie éternelle, que le Fils de l'homme vous donnera. Car sur Lui, Dieu le Père a placé son sceau d’approbation. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Ce verset met l&rsquo;accent sur deux types de nourriture : la nourriture p&eacute;rissable et la nourriture imp&eacute;rissable. De nombreux humains recherchent de la nourriture p&eacute;rissable, comme l&rsquo;illustre le cas o&ugrave; une foule s&rsquo;est approch&eacute;e de J&eacute;sus et lui a demand&eacute; : &laquo; Quand es-tu venu ici ? J&eacute;sus r&eacute;pondit : <strong>&laquo; Vous ne recherchez pas la sagesse de Dieu ; tu me cherches, esp&eacute;rant des miches de pain</strong>.&raquo; Il leur conseilla en outre : &laquo; Ne vous fatiguez pas pour des denr&eacute;es p&eacute;rissables. &raquo; La nourriture quotidienne, qui est consomm&eacute;e, dig&eacute;r&eacute;e et d&eacute;truite dans un d&eacute;lai de trois heures, entre dans la cat&eacute;gorie des aliments p&eacute;rissables. La digestion, par essence, est un processus de destruction, dans lequel tous les aliments ing&eacute;r&eacute;s sont d&eacute;compos&eacute;s dans le tube digestif et transform&eacute;s en d&eacute;chets, un peu comme la combustion du bois en cendres.

	En revanche, la sagesse qu&rsquo;une personne acquiert par ses oreilles, entrant dans son esprit sous forme de mots, est consid&eacute;r&eacute;e comme une nourriture imp&eacute;rissable. <strong>La sagesse de Dieu est la seule nourriture qui ne peut &ecirc;tre d&eacute;truite</strong>. <strong>Lire ou entendre la sagesse de Dieu &eacute;quivaut &agrave; consommer une nourriture imp&eacute;rissable pour l&rsquo;esprit. </strong>Le Fils de l&rsquo;homme fournit cette nourriture indestructible, comme l&rsquo;indique le verset &laquo;<strong>Car sur Lui, Dieu le P&egrave;re a plac&eacute; son sceau d&rsquo;approbation.</strong>&laquo;&nbsp;&laquo;&nbsp;Sceau&nbsp;&raquo; signifie acceptation ou d&eacute;cision. Dieu, ayant d&eacute;cid&eacute;, a envoy&eacute; son Fils engendr&eacute; pour partager sa sagesse. Le terme &laquo; sceau d&rsquo;approbation &raquo; dans le verset signifie la d&eacute;cision ou le consentement de Dieu. Dans le Coran, il est d&eacute;clar&eacute; que Dieu n&rsquo;a r&eacute;v&eacute;l&eacute; sa sagesse &agrave; aucun &ecirc;tre humain, soulignant que celui qui transmet la sagesse de Dieu n&rsquo;est pas une personne ordinaire. Dieu a affirm&eacute; que Sa sagesse n&rsquo;est connue que de Lui-m&ecirc;me, ce qui implique que le Fils engendr&eacute; qui vient r&eacute;v&eacute;ler la sagesse de Dieu est Dieu Lui-m&ecirc;me. L&rsquo;expression &laquo; le Fils de Dieu &raquo; peut induire les humains en erreur, mais elle peut &ecirc;tre comprise comme &laquo; Fils &raquo; signifiant &laquo; la manifestation de Dieu &raquo;. Dieu, choisissant de ne pas venir directement en tant que Dieu pour parler aux humains, adopte l'apparence du Fils. Cette interpr&eacute;tation trouve un soutien dans le verset suivant.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 103,
verse: `  <b>(25)	L'Évangile de Jean, chapitre 6, verset 32. </b>`,
meaning: ` <b>
(6:32) Jésus leur dit : « En vérité, je vous le dis, ce n'est pas Moïse qui vous a donné le pain de Paraloka, mais c'est mon Père qui vous donne le vrai pain de Paraloka. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dans le verset mentionn&eacute;, J&eacute;sus a d&eacute;clar&eacute; : &laquo;<strong>Mo&iuml;se ne vous a pas donn&eacute; le pain de sagesse de Paraloka</strong>.&raquo; Cela soul&egrave;ve des questions : le Dharma Shastra enseign&eacute; par Mo&iuml;se est-il faux ? Le Dharma Shastra de Mo&iuml;se manque-t-il de sagesse avec les dharmas ? Si ce que Mo&iuml;se a enseign&eacute; n&rsquo;est pas le vrai pain de Dieu, pourquoi est-il appel&eacute; le Dharma Shastra de Mo&iuml;se ? Ces questions suscitent diverses r&eacute;flexions. D&rsquo;une part, il est faux de pr&eacute;tendre que ce que Mo&iuml;se a enseign&eacute; n&rsquo;est pas le Dharma Shastra. D&rsquo;un autre c&ocirc;t&eacute;, conform&eacute;ment &agrave; la d&eacute;claration de Dieu, on peut affirmer que ce que Mo&iuml;se a enseign&eacute; n&rsquo;est pas le Dharma Shastra. Il est &eacute;galement exact que Mo&iuml;se n&rsquo;a pas fourni de pain imp&eacute;rissable de Paraloka. De telles questions et doutes surgissent, cr&eacute;ant un besoin de r&eacute;ponses appropri&eacute;es pour comprendre la v&eacute;ritable sagesse divine.

	Le proph&egrave;te Mo&iuml;se est bien connu parmi les chr&eacute;tiens, mais de nombreux musulmans ne savent peut-&ecirc;tre pas que le nom &laquo; Mo&iuml;se &raquo; dans la Bible s&rsquo;est transform&eacute; en &laquo; Musa &raquo; en 1&nbsp;400 ans. Il est crucial de noter que Mo&iuml;se et Musa portent effectivement le m&ecirc;me nom. L&rsquo;affirmation selon laquelle Mo&iuml;se n&rsquo;a pas transmis le Dharma Shastra peut &ecirc;tre &agrave; la fois vraie et fausse, pr&eacute;sentant une ambigu&iuml;t&eacute; intrigante avec une raison forte et inconnue. Cette r&eacute;v&eacute;lation peut surprendre certains et se heurter au d&eacute;saccord d&rsquo;autres, mais sa v&eacute;rit&eacute; reste ind&eacute;pendante des opinions. Il est vrai que le proph&egrave;te Mo&iuml;se existait il y a quelques milliers d&rsquo;ann&eacute;es. Il y a environ cinq mille ans, le proph&egrave;te Mo&iuml;se a fait part de la sagesse qu&rsquo;il poss&eacute;dait. Un proph&egrave;te, par d&eacute;finition, est quelqu&rsquo;un qui transmet la sagesse de Dieu, et Mo&iuml;se a obtenu ce titre gr&acirc;ce &agrave; ses pens&eacute;es divines d&egrave;s son plus jeune &acirc;ge. A l'&acirc;ge de 20 ans, <strong>Bhagavan</strong>, qui &eacute;tait descendu sur terre, a fourni &agrave; Mo&iuml;se la premi&egrave;re &eacute;criture divine, connue sous le nom de &laquo;<strong>Taurath</strong>.&rsquo; Mo&iuml;se a continu&eacute; &agrave; partager la sagesse contenue dans cette &Eacute;criture.

	Puisqu&rsquo;il &eacute;tait enracin&eacute; dans les dharmas, il est devenu connu sous le nom de Dharma Shastra de Mo&iuml;se. Mo&iuml;se est d&eacute;c&eacute;d&eacute; &agrave; l'&acirc;ge de 54 ans. Apr&egrave;s la mort de Mo&iuml;se, Bhagavan est entr&eacute; dans son corps et a transmis des dharmas dont Mo&iuml;se n'avait jamais parl&eacute; depuis neuf ans. Malgr&eacute; Bhagavan Ayant quitt&eacute; le corps de Mo&iuml;se &agrave; l&rsquo;&acirc;ge de 63 ans, ce fait est rest&eacute; inconnu, ce qui a amen&eacute; les gens &agrave; croire que le proph&egrave;te Mo&iuml;se avait v&eacute;cu 63 ans et avait lui-m&ecirc;me enseign&eacute; les dharmas. Bien que Dieu ait fourni &agrave; Mo&iuml;se une &eacute;criture divine, il ne lui a pas directement transmis la sagesse. Par cons&eacute;quent, la d&eacute;claration : &laquo; Mo&iuml;se n&rsquo;a pas re&ccedil;u le pain de Paraloka &raquo; est vraie. La sagesse transmise par Dieu &agrave; travers le corps de Mo&iuml;se est connue sous le nom de Dharma Shastra de Mo&iuml;se. C'est pourquoi le verset d&eacute;clare : &laquo; Le P&egrave;re de Paraloka, le Saint-Esprit, a donn&eacute; du vrai pain. &raquo; La dur&eacute;e de vie r&eacute;elle de Mo&iuml;se &eacute;tait de 54 ans, et personne ne savait que Dieu avait prolong&eacute; la vie de Mo&iuml;se jusqu&rsquo;&agrave; 63 ans. Tous ces myst&egrave;res sont &eacute;lucid&eacute;s dans mes &eacute;critures, <strong>Krishna Moussa</strong>.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 104,
verse: ` <b>(26)	L'Évangile de Jean, chapitre 6, verset 47.</b>`,
meaning: `<b>
(6:47) Personne n'a vu le Père, sauf celui qui vient de Dieu ; Lui seul a vu le Père. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Comprendre ce verset n&rsquo;est pas une t&acirc;che difficile. En lisant la Bhagavad-Gita, la Bible et le Coran dans leur int&eacute;gralit&eacute;, il devient &eacute;vident que les versets de ces derni&egrave;res &eacute;critures divines portent des significations subtiles. Les versets du Coran, en particulier, ont une profondeur qui surpasse les autres &eacute;critures divines, rendant leur signification insaisissable pour beaucoup. M&ecirc;me si les versets de la Bible peuvent para&icirc;tre simples, leur v&eacute;ritable r&eacute;alit&eacute; &eacute;chappe souvent &agrave; la compr&eacute;hension. Par cons&eacute;quent, Dieu fournit une compr&eacute;hension globale de chaque verset &agrave; travers nous.

	Dieu, repr&eacute;sent&eacute; par le Saint-Esprit, existe avant et apr&egrave;s la cr&eacute;ation. Il est le Dieu primordial. La v&eacute;ritable apparence ou nature de Dieu reste inconnue des humains. Dans la derni&egrave;re &eacute;criture divine, le Coran, le Dieu principal est nomm&eacute; Allah, et le deuxi&egrave;me Dieu, Atma, est &eacute;galement appel&eacute; Allah. Par cons&eacute;quent, Paramatma est le premier Allah et Atma est le deuxi&egrave;me Allah. Dans la deuxi&egrave;me &eacute;criture divine, la Bible, Paramatma est d&eacute;sign&eacute; comme Dieu et Atma est appel&eacute; le P&egrave;re. Il est crucial de reconna&icirc;tre que le Saint-Esprit est le P&egrave;re de l&rsquo;Atma et qu&rsquo;Atma est le P&egrave;re des humains. Le Coran affirme que Paramatma et Atma sont des dieux, tandis que la Bible distingue l'un comme Dieu et l'autre comme le P&egrave;re. Il est essentiel de comprendre que le P&egrave;re de l&rsquo;humanit&eacute; est Atma et que le P&egrave;re de l&rsquo;Atma est le Saint-Esprit. Le verset souligne qu&rsquo;aucun humain n&rsquo;a vu le P&egrave;re (Atma) et ignore la nature de l&rsquo;Atma. <strong>Cependant, Atma est le seul qui soit originaire de Dieu et ait donc &eacute;t&eacute; t&eacute;moin de son P&egrave;re, le Saint-Esprit. En revanche, Jeevatma n'a jamais vu son p&egrave;re, Atma.</strong>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 105,
verse: `<b>(27)	L'Évangile de Jean, chapitre 7, versets 37 et 38.</b>`,
meaning: ` <b>
(7:37) Le dernier et le plus grand jour de la fête, Jésus se leva et dit d'une voix forte : « Que quiconque a soif vienne à moi et boive. »
<br><br>
(7:38) Quiconque croit en moi, comme le dit l'Écriture, des fleuves d'eau vive couleront de son sein.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le verset a une signification subtile. Tout comme une personne assoiff&eacute;e recherche naturellement de l&rsquo;eau, la poursuite de ceux qui recherchent la sagesse est assimil&eacute;e &agrave; la soif. Le verset d&eacute;clare, "<strong>Celui qui a soif de sagesse devrait venir &agrave; moi et &eacute;tancher sa soif</strong>.&raquo; Quand quelqu'un s'approche de J&eacute;sus et re&ccedil;oit la sagesse divine, cela revient &agrave; satisfaire son <strong>soif de sagesse </strong>de J&eacute;sus. Ceux qui croient en J&eacute;sus atteignent la sagesse divine compl&egrave;te, devenant des d&eacute;positaires de la sagesse et la partageant avec les autres. J&eacute;sus a proclam&eacute; que des fleuves d&rsquo;eau vive couleraient de leur sein. Dans ce contexte, <strong>l'eau vive symbolise la sagesse divine</strong>, qui conf&egrave;re Moksham (lib&eacute;ration) aux humains et les maintient dans un &eacute;tat perp&eacute;tuel. C&rsquo;est pourquoi la sagesse est appel&eacute;e eau vive. Tout comme les humains satisfont leur soif physique en buvant de l&rsquo;eau par la bouche, ils devraient &eacute;galement <strong>nourrir leur intellect (buddhi) avec la sagesse divine en &eacute;coutant &agrave; travers leurs oreilles.</strong></div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 106,
verse: `<b>(28)	L'Évangile de Jean, chapitre 8, verset 12.</b>`,
meaning: ` <b>
(8:12) Lorsque Jésus parla de nouveau au peuple, il dit : « Je suis la lumière du monde. Celui qui me suit ne marchera jamais dans les ténèbres mais aura la lumière de la vie. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dieu, connu sous le nom de Saint-Esprit, a cr&eacute;&eacute; Atma pour exercer son r&egrave;gne et &oelig;uvrer &agrave; travers les autres. Il d&eacute;clara qu'Atma &eacute;tait son fils et lui donna le pouvoir d'accomplir ses t&acirc;ches. Atma a re&ccedil;u le pouvoir de prendre des vies humaines, de porter un jugement bas&eacute; sur leur karma de naissances pr&eacute;c&eacute;dentes et de faciliter leur renaissance. Dans le r&ocirc;le de juge, Atma agit en fonction du karma de chaque individu. L'enchev&ecirc;trement humain dans le karma influence leurs pens&eacute;es, et l'Atma, en r&eacute;ponse &agrave; ce karma, transmet l'ignorance recherch&eacute;e par les individus. Par cons&eacute;quent, avec le temps, les adharmas augmentent sur Terre.

	Le Saint-Esprit, ou Dieu, doit s'incarner sur Terre sous forme humaine en tant que Bhagavan pour freiner les adharmas et promouvoir les dharmas lorsque les adharmas &eacute;mergent en raison des int&eacute;r&ecirc;ts humains et de l'ignorance induite par l'Atma. Lorsque Dieu prend l'apparence d'un homme, Il est appel&eacute; Bhagavan. Cette incarnation enseigne la sagesse divine sans r&eacute;v&eacute;ler son identit&eacute; divine, &eacute;tant souvent appel&eacute;e le Fils de Dieu, Dieu &eacute;tant son P&egrave;re. Selon cette perspective, il existe un Dieu, le cr&eacute;ateur, qui a deux Fils : l&rsquo;un comme Atma permanent chez les humains et l&rsquo;autre comme Fils temporaire sous forme humaine. Lorsque le premier Fils (Atma) chez les humains d&eacute;veloppe des adharmas, le deuxi&egrave;me Fils temporaire, incarn&eacute; en tant qu'humain, transmet des dharmas. Il n&rsquo;y a donc qu&rsquo;un seul Dieu avec deux Fils. Le Fils sous la forme de J&eacute;sus a proclam&eacute; : &laquo;<strong>Je suis la lumi&egrave;re du monde</strong>.&raquo; La sagesse se transforme en feu de sagesse (Gnana Shakti), br&ucirc;lant le karma humain. J&eacute;sus, incarnant le feu de la sagesse, est la lumi&egrave;re de la sagesse. Il est venu enseigner la sagesse &agrave; l&rsquo;humanit&eacute;, et ceux qui suivent et comprennent sa sagesse ne demeureront pas dans l&rsquo;ignorance mais dans la sagesse. C&rsquo;est pourquoi J&eacute;sus a d&eacute;clar&eacute; : &laquo; Celui qui me suit ne marchera jamais dans les t&eacute;n&egrave;bres mais aura la lumi&egrave;re de la vie. &raquo; Seul Dieu, qui s'incarne sous forme humaine, peut accorder la lumi&egrave;re de la sagesse et &eacute;tablir les dharmas.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 107,
verse: `<b>(29)	L'Évangile de Jean, chapitre 8, verset 14.</b>`,
meaning: `<b>
(8:14) Jésus répondit : « Même si je témoigne en ma propre faveur, mon témoignage est valable, car je sais d'où je viens et où je vais. Mais vous n’avez aucune idée d’où je viens ni où je vais. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	J&eacute;sus, dans son apparence ext&eacute;rieure, ressemblait &agrave; un homme ordinaire sans aucun trait distinctif. En tant qu'individus habitant dans des corps constitu&eacute;s de Prakruti, l'apparence ext&eacute;rieure de chaque &ecirc;tre appara&icirc;t la m&ecirc;me. J&eacute;sus aussi s&rsquo;est pr&eacute;sent&eacute; comme un &ecirc;tre humain ordinaire. Il y a un dicton parmi les anciens selon lequel personne ne sait quel type de serpent r&eacute;side dans une termiti&egrave;re, &eacute;tablissant un parall&egrave;le avec la nature myst&eacute;rieuse du Jeeva dans un corps. Chaque Jeeva n&eacute; vient dans un corps de quelque part, guid&eacute; par les d&eacute;cisions de l'Atma bas&eacute;es sur son karma. Apr&egrave;s avoir termin&eacute; le karma et la mort, le Jeeva entre dans un nouveau corps sous le jugement de l'Atma. Bien qu'il r&eacute;side dans le corps, le Jeeva ignore son origine &agrave; chaque nouvelle naissance. Le manas (esprit) est l&rsquo;organe responsable de la m&eacute;moire, mais il meurt &eacute;galement &agrave; chaque vie qui passe, entra&icirc;nant la perte de la m&eacute;moire des naissances pr&eacute;c&eacute;dentes. Par cons&eacute;quent, un individu, par exemple &acirc;g&eacute; de 40 ans, ne se souvient que des 40 derni&egrave;res ann&eacute;es de sa naissance actuelle et non des nombreuses ann&eacute;es pr&eacute;c&eacute;dentes.

	Ce processus s&rsquo;applique non seulement aux humains mais aussi &agrave; toute cr&eacute;ature vivante. M&ecirc;me si J&eacute;sus peut sembler &ecirc;tre un homme ordinaire, il est essentiel de se demander si le m&ecirc;me processus cyclique s&rsquo;applique &agrave; lui. J&eacute;sus est n&eacute; en Isra&euml;l, ce qui signifie qu'il vient d'ailleurs. Mais il &eacute;tait conscient de son origine, d&eacute;clarant : &laquo;<strong>Je sais d'o&ugrave; je viens</strong>.&raquo; Contrairement aux individus ordinaires qui n&rsquo;ont pas conscience de leur future naissance apr&egrave;s leur mort, J&eacute;sus &eacute;tait parfaitement conscient de sa destination apr&egrave;s sa mort. Cette diff&eacute;rence frappante entre J&eacute;sus et un homme ordinaire incite &agrave; s&rsquo;interroger sur le caract&egrave;re unique de J&eacute;sus. La r&eacute;ponse &agrave; cette question d&eacute;tient la cl&eacute; de la meilleure sagesse, r&eacute;v&eacute;lant que J&eacute;sus n&rsquo;&eacute;tait pas un homme ordinaire mais qu&rsquo;il est n&eacute; dans un but pr&eacute;cis.

	Un individu n&eacute; avec un objectif pr&eacute;d&eacute;termin&eacute; avant sa naissance est appel&eacute; &laquo; n&eacute; pour une cause &raquo;. Aucun &ecirc;tre humain ne poss&egrave;de un tel objectif avant la naissance. En revanche, Dieu est n&eacute; avec l&rsquo;intention sp&eacute;cifique d&rsquo;&eacute;tablir le dharma sur Terre. Seul Dieu, et non n&rsquo;importe quel &ecirc;tre humain, a la capacit&eacute; d&rsquo;&eacute;tablir le dharma. Dieu reste &eacute;ternel et inchang&eacute;, non affect&eacute; par la naissance ou la mort, conservant une m&eacute;moire coh&eacute;rente. Lorsque Dieu s'incarne sur Terre sous la forme d'un homme d&eacute;guis&eacute;, transmet des enseignements sur le dharma et s'en va, il ne rena&icirc;t pas apr&egrave;s la mort, un destin commun aux humains ordinaires. Dans la mort, le manas (l&rsquo;esprit) d&rsquo;un humain est d&eacute;truit, mais Dieu ne meurt ni ne na&icirc;t ailleurs. Il rev&ecirc;t un d&eacute;guisement unique en tant qu'homme, accomplit son dessein, puis retourne &agrave; son origine. Ainsi, dans le verset, J&eacute;sus d&eacute;clare : &laquo;<strong>Je sais o&ugrave; je vais</strong>&raquo;, soulignant la nature distinctive de l&rsquo;existence et du dessein de Dieu.

	&nbsp;Les humains manquent de connaissance de l&rsquo;endroit o&ugrave; se trouve Dieu ou de la nature de Dieu. Lorsque Dieu s&rsquo;incarne en homme, son origine reste inconnue. Contrairement &agrave; une naissance humaine conventionnelle, la naissance de Dieu est distincte ; Il ne rena&icirc;t pas ailleurs apr&egrave;s &ecirc;tre mort ailleurs. Le Dieu omnipr&eacute;sent, existant m&ecirc;me dans l&rsquo;ut&eacute;rus, transforme sa forme et semble na&icirc;tre comme un b&eacute;b&eacute;. &Eacute;tant donn&eacute; que Dieu est pr&eacute;sent l&agrave; o&ugrave; il est n&eacute;, il devient difficile de d&eacute;terminer son origine. Ceux qui ignorent que Dieu est omnipr&eacute;sent restent inconscients de l&rsquo;origine de J&eacute;sus. De plus, la destination de Dieu apr&egrave;s avoir pris une forme diff&eacute;rente reste inconnue. Par cons&eacute;quent, dans le verset, J&eacute;sus a d&eacute;clar&eacute; : &laquo;<strong>Tu as </strong><strong>aucune id&eacute;e d'o&ugrave; je viens ni o&ugrave; je vais</strong>&raquo;, soulignant la nature myst&eacute;rieuse de l&rsquo;existence et des mouvements de Dieu.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 108,
verse: `<b>(30)	L'Évangile de Jean, chapitre 8, verset 19.</b>`,
meaning: `<b>
(8:19) Alors ils lui demandèrent : « Où est ton Père ? » « Vous ne me connaissez ni moi ni mon Père », répondit Jésus. « Si vous me connaissiez, vous connaîtriez aussi mon Père. » </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dieu existe-t-il ? S&rsquo;il le fait, comment va-t-il ? O&ugrave; est-il ? Si vous connaissez les r&eacute;ponses &agrave; ces questions, vous comprendrez qui sont le P&egrave;re et le Fils. Il n&rsquo;y a qu&rsquo;un seul Dieu, mais nous devons savoir d&rsquo;o&ugrave; vient le Fils. Les mots &laquo; P&egrave;re &raquo; et &laquo; Fils &raquo; sont fr&eacute;quemment utilis&eacute;s dans la Bible. <strong>Il faut comprendre que &laquo; P&egrave;re &raquo; signifie Dieu ; le terme &eacute;tait utilis&eacute; pour d&eacute;signer Dieu dans la Bible. Dans le Coran, Dieu est appel&eacute; &laquo; Allah &raquo; et dans la Bhagavad-Gita, Dieu est appel&eacute; &laquo; Paramatma &raquo;. </strong>Bien que ces mots soient diff&eacute;rents, ils signifient tous Dieu. L&rsquo;essence de Dieu doit &ecirc;tre vue dans le terme &laquo; P&egrave;re &raquo;. Lorsque J&eacute;sus &eacute;tait sur terre, les pharisiens l&rsquo;interrogeaient sur son P&egrave;re. J&eacute;sus r&eacute;pondit : &laquo;<strong>Tu ne m'as pas vu ni mon p&egrave;re</strong>.&raquo; Les pharisiens ne se sont pas renseign&eacute;s sur J&eacute;sus, m&ecirc;me s'il &eacute;tait devant eux. Ils voulaient en savoir plus sur son p&egrave;re physique, sans se rendre compte que le p&egrave;re de J&eacute;sus &eacute;tait Dieu. Ils auraient pu &ecirc;tre surpris lorsque J&eacute;sus parlait directement de lui-m&ecirc;me et de son P&egrave;re. Ils pensaient voir J&eacute;sus en personne et lui demand&egrave;rent de se renseigner sur son p&egrave;re inconnu. Alors J&eacute;sus dit : &laquo;<strong>Tu ne m'as pas vu ni mon p&egrave;re</strong>.&raquo; Nous devons comprendre le sens de ce mot.

	Le P&egrave;re de J&eacute;sus est le Saint-Esprit. Atma, le Fils du Saint-Esprit, est pr&eacute;sent dans tous les corps et gouverne leurs op&eacute;rations. Le Saint-Esprit, appel&eacute; P&egrave;re, et Atma, appel&eacute; Fils, sont toujours pr&eacute;sents. Le Saint-Esprit, Paramatma, est &eacute;ternel et existe avant la cr&eacute;ation. Atma, le Fils du Saint-Esprit, est pr&eacute;sent dans tous les corps depuis la cr&eacute;ation.

	Outre le Fils permanent, Atma, Dieu (le Saint-Esprit) a un autre Fils appel&eacute; &laquo;<strong>le Fils unique engendr&eacute;</strong>', qui vient occasionnellement sur la terre. Il existe des diff&eacute;rences significatives entre le Fils permanent (Atma) et le Fils temporaire (le Fils unique). Par exemple, lorsque l&rsquo;Atma est accompagn&eacute; d&rsquo;un corps humain normal, le corps a un Jeevatma s&eacute;par&eacute;. Bien que le corps entier appartienne &agrave; l&rsquo;Atma et qu&rsquo;Atma soit la t&ecirc;te du corps, Jeevatma r&eacute;side &eacute;galement avec l&rsquo;Atma dans le corps et pense que le corps est le mien. Si le Fils temporaire, le Fils unique, vient sur terre avec un corps, il n'y a pas de Jeevatma dans ce corps. Dans le corps d&rsquo;une personne ordinaire, Dieu et l&rsquo;Atma sont diff&eacute;rents. Atma accomplit toutes les t&acirc;ches dans ce corps, et Dieu n'op&egrave;re pas. Mais dans le corps du Fils unique, Paramatma (Dieu) r&eacute;side en tant qu&rsquo;Atma et accomplit des t&acirc;ches sous la forme d&rsquo;Atma. Parce qu&rsquo;il n&rsquo;y a pas de Jeevatma dans le corps du Fils unique, celui qui agit comme Atma agit &eacute;galement comme Jeevatma. Bien que celui qui est dans le corps du Fils unique soit Dieu, Il pr&eacute;tend &ecirc;tre Jeevatma. <strong>Celui qui est venu d&eacute;guis&eacute; en Fils unique est le Saint-Esprit (Dieu). Que Dieu agit comme Jeevatma. </strong>Il existe de nombreuses diff&eacute;rences entre le Fils permanent de Dieu et le Fils temporaire.

	On peut dire que la plupart des gens ignorent que Dieu a un Fils permanent et un Fils unique qui vient occasionnellement. En acqu&eacute;rant la sagesse, on peut comprendre l&rsquo;existence de l&rsquo;Atma et la sagesse de l&rsquo;Atma, mais reconna&icirc;tre le Fils unique est un d&eacute;fi. Identifier le Fils unique parmi tant d&rsquo;humains est difficile. Par cons&eacute;quent, personne n&rsquo;a identifi&eacute; le Fils unique qui est venu au Treta Yuga, au Dvapara Yuga et au Kali Yuga. Bien que J&eacute;sus ait &eacute;t&eacute; le Fils unique de Dieu dans le Kali Yuga, les gens ne pouvaient pas le reconna&icirc;tre comme le deuxi&egrave;me Fils de Dieu. Malgr&eacute; sa proclamation du Fils de Dieu, les gens n&rsquo;ont pas pu l&rsquo;identifier et l&rsquo;ont soumis &agrave; de nombreuses insultes et tortures. Les gens n&rsquo;ont pas reconnu ceux qui sont venus au Dvapara Yuga et au Kali Yuga comme le Fils de Dieu, m&ecirc;me s&rsquo;ils ont d&eacute;clar&eacute; : &laquo; Je suis le Fils de Dieu &raquo;. J'h&eacute;site &agrave; affirmer que celui qui est venu &agrave; Treta Yuga &eacute;tait le Fils de Dieu. Ce jour-l&agrave;, Dieu lui-m&ecirc;me est venu d&eacute;guis&eacute; en Fils et a transmis la sagesse sur terre. M&ecirc;me s'Il &eacute;tait connu comme un grand gnani et enseignait la sagesse, j'h&eacute;site &eacute;galement &agrave; dire qu'Il &eacute;tait Bhagavan parce qu'Il &eacute;tait d&eacute;crit comme un homme mauvais parmi les gens. Pourtant, je n'ai pas peur de dire : &laquo;<strong>Ravana Brahma est le Fils unique</strong>.&raquo;

	Dans le Dvapara Yuga, Krishna est venu en tant que Bhagavan. Bhagavan et le Fils unique sont identiques. Cependant, parce que Krishna a &eacute;t&eacute; d&eacute;crit comme rus&eacute;, de nombreuses personnes ignorent encore aujourd&rsquo;hui sa grandeur. M&ecirc;me si Dieu est venu d&eacute;guis&eacute; en homme et a enseign&eacute; les dharmas divins, les humains ne se sont pas concentr&eacute;s sur la sagesse qu&rsquo;Il leur a transmise ; au lieu de cela, ils ont surtout scrut&eacute; Son comportement pendant cette p&eacute;riode. Seuls quelques-uns, sur des millions, ont reconnu sa sagesse et ont d&eacute;clar&eacute; que Krishna &eacute;tait Dieu, mais la majorit&eacute; a dit du mal de lui. Ceux qui n&rsquo;&eacute;taient pas au courant de l&rsquo;incarnation de Krishna dans le Dvapara Yuga ont trouv&eacute; difficile de reconna&icirc;tre J&eacute;sus comme le Fils de Dieu dans le Kali Yuga. Parce que Krishna et J&eacute;sus avaient pr&eacute;vu que les humains pourraient ne pas reconna&icirc;tre la sagesse qu'ils enseignaient, ils ont tous deux d&eacute;clar&eacute; : &laquo;<strong>Nous sommes des dieux</strong>&raquo;, dans le contexte de leurs propos, estimant que les humains peuvent ainsi reconna&icirc;tre leur sagesse. De m&ecirc;me, J&eacute;sus a dit : &laquo;<strong>Vous ne me connaissez ni moi ni mon P&egrave;re. </strong>avec l'intention de faire comprendre aux gens que Dieu et J&eacute;sus sont identiques.

	Ceux qui pr&eacute;tendent avoir une d&eacute;votion envers Dieu parlent souvent de mani&egrave;re sarcastique lorsqu&rsquo;ils rencontrent d&rsquo;autres personnes qui poss&egrave;dent plus de sagesse qu&rsquo;eux. Les pharisiens parlaient &agrave; J&eacute;sus avec la m&ecirc;me attitude. Sachant que J&eacute;sus est n&eacute; de Marie sans p&egrave;re, ils lui demand&egrave;rent : &laquo; O&ugrave; est ton p&egrave;re ? J&eacute;sus comprit qu'ils se moquaient de lui et ne demandaient pas avec d&eacute;votion. Il a r&eacute;pondu avec une r&eacute;ponse ahurissante : &laquo;<strong>Tu ne me connais ni moi ni mon p&egrave;re</strong>.&raquo; Ceux qui comprennent correctement ses paroles comprendront que J&eacute;sus visible et le Dieu invisible ne font qu&rsquo;un. J&eacute;sus a &eacute;galement dit : &laquo;<strong>Si tu me connaissais, tu conna&icirc;trais aussi mon p&egrave;re</strong>.&raquo; Cependant, on peut dire que ceux qui ont entendu ses paroles n&rsquo;ont pas compris ce qu&rsquo;il disait. S&rsquo;ils avaient compris son message, ils auraient reconnu qui &eacute;tait J&eacute;sus ce jour-l&agrave;. Ils auraient r&eacute;alis&eacute; qu&rsquo;Il n&rsquo;&eacute;tait pas un homme ordinaire. Malgr&eacute; les paroles de J&eacute;sus, ils l&rsquo;ont trait&eacute; comme s&rsquo;il &eacute;tait un homme ordinaire. Il semble qu&rsquo;ils ne connaissaient rien de remarquable &agrave; propos de J&eacute;sus.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 109,
verse: `  <b>(31)	L'Évangile de Jean, chapitre 8, verset 21.</b>`,
meaning: ` <b>
(8:21) Jésus leur dit encore une fois : « Je m'en vais, et vous me chercherez, et vous mourrez dans votre péché. Là où je vais, tu ne peux pas venir. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	J&eacute;sus a prononc&eacute; de nombreuses paroles pour faire conna&icirc;tre aux gens qui il est, et les paroles ci-dessus en sont un exemple. "<strong>Je m'en vais et tu me chercheras. L&agrave; o&ugrave; je vais, tu ne peux pas venir</strong>&raquo;, dit J&eacute;sus au peuple. &Agrave; premi&egrave;re vue, ce verset peut ne pas sembler particuli&egrave;rement profond. Quand quelqu&rsquo;un va quelque part sans en informer les autres, nous ne savons pas o&ugrave; il est all&eacute;, et m&ecirc;me si nous cherchons, nous ne pourrons peut-&ecirc;tre pas le trouver. Le manque d&rsquo;informations signifie que nous ne pouvons pas aller l&agrave; o&ugrave; ils sont all&eacute;s. Vous vous demandez peut-&ecirc;tre quelle sagesse r&eacute;side dans cet &eacute;v&eacute;nement courant. Regardons-le sous un autre angle. Dans notre jeunesse, nous jouions au jeu du &laquo; Voleur et police &raquo;. Dans ce jeu, le voleur se cache et apr&egrave;s quelques minutes, la police commence &agrave; chercher pour l'attraper. Pour attraper le voleur, la police doit se rendre &agrave; l'endroit o&ugrave; se cache le voleur. Si la police ne parvient pas &agrave; atteindre la cachette, elle ne pourra pas retrouver le voleur m&ecirc;me apr&egrave;s avoir cherch&eacute; ailleurs. Un jour, quand j'avais dix ans, nous avons jou&eacute; &agrave; ce jeu. J'&eacute;tais le voleur et les autres &eacute;taient la police. Avant de me cacher, j&rsquo;ai dit : &laquo; J&rsquo;y vais et vous ne pouvez pas me trouver. &raquo; Ils ont r&eacute;pondu avec assurance : &laquo; Nous vous retrouverons dans dix minutes. &raquo; Puis j&rsquo;ai ajout&eacute; : &laquo; L&agrave; o&ugrave; je vais, vous ne pouvez pas venir &raquo;, et je suis all&eacute; me cacher d&rsquo;eux.

	Deux minutes plus tard, la police a commenc&eacute; la poursuite mais n'a pas pu me retrouver pendant une demi-heure. Malgr&eacute; des recherches partout, ils n&rsquo;ont pas pu atteindre l&rsquo;endroit o&ugrave; je me cachais. Ce jour-l&agrave;, j'&eacute;tais assis dans la salle Pooja de ma maison et j'avais ferm&eacute; les portes. Les autres qui jouaient le r&ocirc;le de la police ont fouill&eacute; partout, y compris la maison o&ugrave; je me cachais, mais ils ne sont pas venus dans la salle du pooja parce que les portes &eacute;taient ferm&eacute;es, et ils n&rsquo;ont pas fouill&eacute; &agrave; l&rsquo;int&eacute;rieur. Au d&eacute;part, je pensais qu&rsquo;il n&rsquo;y avait rien de sp&eacute;cial dans le verset ci-dessus, car il ressemblait au jeu &laquo; Voleur et Police &raquo;. Cependant, j&rsquo;ai r&eacute;alis&eacute; plus tard que l&rsquo;expression &laquo;&nbsp;&raquo;<strong>Tu mourras dans ton p&eacute;ch&eacute;</strong>&raquo; dans le verset avait une signification significative. M&ecirc;me si cela ressemblait &agrave; un jeu, j&rsquo;ai d&eacute;couvert qu&rsquo;il contenait une profonde sagesse. J&rsquo;ai ensuite approfondi la compr&eacute;hension globale de la signification de ce mot. Voici ce que cela signifie.

	J&eacute;sus &eacute;tait visible &agrave; tous sur terre pendant un certain temps, mais malheureusement, personne ne croyait en Lui. Bien qu&rsquo;il ait accompli de nombreux miracles pour prouver qu&rsquo;Il n&rsquo;&eacute;tait pas un homme ordinaire &ndash; redonner la vue aux aveugles, permettre aux boiteux de marcher, gu&eacute;rir la l&egrave;pre et m&ecirc;me ramener les morts &agrave; la vie pour d&eacute;montrer sa capacit&eacute; &agrave; pardonner les p&eacute;ch&eacute;s &ndash; les gens n&rsquo;ont pas reconnu Son vraie grandeur. M&ecirc;me ceux qui n&rsquo;ont pas reconnu J&eacute;sus de son vivant le chercheront plus tard, cherchant un soulagement &agrave; leurs souffrances. Cependant, il n&rsquo;y aura aucun avantage &agrave; le chercher une fois qu&rsquo;il sera parti, car il ne sera visible &agrave; personne. Les personnes qui meurent dans leurs p&eacute;ch&eacute;s ne peuvent pas se voir pardonner par J&eacute;sus, car elles ne savent pas o&ugrave; il est all&eacute;. M&ecirc;me si ceux qui ont reni&eacute; J&eacute;sus de son vivant le reconnaissent plus tard comme Dieu, leurs p&eacute;ch&eacute;s ne seront pas pardonn&eacute;s. J&eacute;sus avait pr&eacute;dit toutes ces choses au peuple &agrave; l&rsquo;avance. Quand J&eacute;sus dit : &laquo;<strong>je m'en vais</strong>&raquo;, personne ne lui a demand&eacute; de rester plus longtemps. Au lieu de cela, les gens criaient pour qu&rsquo;il soit crucifi&eacute;, ce qui conduisait &agrave; sa mort sur la croix.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 110,
verse: `<b>(32)	L'Évangile de Jean, chapitre 8, versets 23 et 24.</b>`,
meaning: `<b>
(8:23) Mais il continua : « Vous venez d’en bas ; Je viens d'en haut. Vous êtes de ce monde ; Je ne suis pas de ce monde.
<br><br>
(8:24) Je t'ai dit que tu mourrais dans tes péchés ; si vous ne croyez pas que je suis Lui, vous mourrez effectivement dans vos péchés.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dans ces deux versets, le verset 24 semble similaire au verset 21, mais le verset 23 est unique. J&eacute;sus a donn&eacute; aux gens une seconde chance de reconna&icirc;tre qu'il n'&eacute;tait pas un homme ordinaire et a dit : &laquo; Vous venez d'en bas ; Je viens d'en haut. Vous &ecirc;tes de ce monde ; Je ne suis pas de ce monde. Ce verset est divis&eacute; en deux parties : la premi&egrave;re est &laquo; Vous &ecirc;tes d'en bas ; Je viens d'en haut &raquo;, et le second est &laquo; Vous &ecirc;tes de ce monde ; Je ne suis pas de ce monde. Bas&eacute; sur la premi&egrave;re partie du verset : &laquo; Vous venez d&rsquo;en bas ; Je viens d&rsquo;en haut &raquo;, il y a eu deux sortes de personnes depuis le Kruta Yuga : les gens inf&eacute;rieurs et les gens sup&eacute;rieurs. Il y a une raison derri&egrave;re la fa&ccedil;on dont ces deux noms &ndash; le inf&eacute;rieur et le sup&eacute;rieur &ndash; sont apparus. C&rsquo;est ainsi que les gens sont divis&eacute;s en cat&eacute;gories inf&eacute;rieures et sup&eacute;rieures.

	L&rsquo;&acirc;ge du Kruta Yuga s&rsquo;&eacute;tend sur 1&nbsp;728&nbsp;000 ans. Au cours des mille premi&egrave;res ann&eacute;es du Kruta Yuga, deux tribus ont &eacute;merg&eacute; parmi le peuple : les gnanis (ceux qui ont de la sagesse) et les ignorants. Il y avait tr&egrave;s peu de gnanis sur Terre &agrave; cette &eacute;poque, alors que les ignorants &eacute;taient innombrables. Dans que yuga, la population mondiale n'&eacute;tait que d'environ 30 millions d'habitants, et la population indienne ne d&eacute;passait pas 300 000 personnes. Le Soleil est descendu sur Terre et a transmis la sagesse divine &agrave; une personne nomm&eacute;e Manu. Seules deux ou trois personnes ont appris la sagesse directement de Manu, et tous les autres avaient un grand respect pour ces gnanis, apprenant d'eux la sagesse divine. &Agrave; cette &eacute;poque, les gens tenaient les gnanis en haute estime, les faisant asseoir sur le si&egrave;ge sup&eacute;rieur alors qu'eux-m&ecirc;mes &eacute;taient assis par terre, &eacute;coutant la sagesse. Il &eacute;tait de coutume que les gens donnent le si&egrave;ge sup&eacute;rieur aux gourous et s'assoient par terre. Sur cette base, J&eacute;sus a dit : &laquo; Vous venez d&rsquo;en bas ; Je viens d&rsquo;en haut. Cela signifie, "<strong>Je suis votre professeur (gourou) pour vous tous</strong>.&raquo;

	Il &eacute;tait courant que les enseignants s'assoient sur le si&egrave;ge sup&eacute;rieur tandis que les personnes en qu&ecirc;te de sagesse s'asseyaient par terre. Les enseignants avaient l'habitude de faire comprendre aux gens qu'ils &eacute;taient en dessous des enseignants qui &eacute;taient au-dessus d'eux. Les enseignants qui transmettaient la sagesse divine &eacute;taient connus sous le nom d'enseignants de Brahma Vidya. &laquo; Brahma &raquo; signifie grand et &laquo; Brahma Vidya &raquo; signifie grand enseignement. Les enseignants qui poss&eacute;daient la connaissance de Brahma Vidya &eacute;taient appel&eacute;s brahmanes. &Agrave; cette &eacute;poque, les brahmanes signifiaient enseignants. Seuls deux ou trois enseignants dans toute l&rsquo;Inde &eacute;taient appel&eacute;s brahmanes. Ces brahmanes avaient l'habitude de cat&eacute;goriser le reste de la population comme des &laquo; personnes inf&eacute;rieures &raquo;. Tous ceux qui manquaient de sagesse &eacute;taient d&eacute;sign&eacute;s comme des &laquo; personnes inf&eacute;rieures &raquo;. De cette fa&ccedil;on, le pays tout entier avait des &laquo; personnes inf&eacute;rieures &raquo;. sur cette division.Au bout d'un certain temps, le syst&egrave;me des castes s'est mis en place sur la base de cette division &Agrave; mesure que le syst&egrave;me des castes prenait forme, ceux qui connaissaient Brahma Vidya ont commenc&eacute; &agrave; dire : &laquo; Nous sommes des brahmanes &raquo;. De m&ecirc;me, ceux qui &eacute;taient ignorants &eacute;taient &eacute;tiquet&eacute;s &laquo; Vous &ecirc;tes en dessous de nous (Maa-diguvavaru en telugu). &raquo; Ainsi, deux tribus - <strong>le sup&eacute;rieur (Eguvavaru en Telugu) et le inf&eacute;rieur (Diguvavaru en Telugu) </strong>- form&eacute;. Bien que le mot &laquo; inf&eacute;rieur (Maadiguva vaaru) &raquo; existe encore aujourd&rsquo;hui, les gens ne comprennent peut-&ecirc;tre pas pleinement sa signification historique. Au fil du temps, le terme &laquo; Maadiguva vaaru &raquo; s'est transform&eacute; en caste Madiga (caste r&eacute;pertori&eacute;e), qui est d&eacute;sormais consid&eacute;r&eacute;e comme une caste inf&eacute;rieure.

	Lorsque le syst&egrave;me des castes est n&eacute;, il y avait deux castes : les brahmanes et les Madiga (caste r&eacute;pertori&eacute;e). Le terme &laquo; Madiga &raquo; &eacute;tait initialement utilis&eacute; pour d&eacute;signer ceux qui &eacute;taient consid&eacute;r&eacute;s comme ignorants et manquant de sagesse. Cependant, au fil du temps, m&ecirc;me parmi ceux qui manquaient de sagesse, de nombreuses castes ont &eacute;merg&eacute;, et ceux qui restaient non class&eacute;s &eacute;taient toujours &eacute;tiquet&eacute;s comme Madiga. En regardant l'histoire, Madiga n'&eacute;tait pas &agrave; l'origine une caste mais plut&ocirc;t un nom donn&eacute; aux ignorants par deux ou trois enseignants. Sur cette base, les personnes de toutes les castes qui manquent de sagesse peuvent &ecirc;tre appel&eacute;es Madiga. Les gens sont divis&eacute;s en castes en raison de une histoire inconnue. Il est injuste et ignorant de qualifier les personnes restantes de Madiga. Il y a plus de 2&nbsp;000 ans, J&eacute;sus utilisait &eacute;galement les mots &laquo; sup&eacute;rieur &raquo; (Eguvavaru) et &laquo; inf&eacute;rieur &raquo; (Diguvavaru). Il a dit : &laquo;<strong>Vous &ecirc;tes d'en bas ; je viens d'en haut</strong>&raquo;, faisant r&eacute;f&eacute;rence aux ignorants. Il faut comprendre que les mots &laquo; sup&eacute;rieur &raquo; et &laquo; inf&eacute;rieur &raquo; sont utilis&eacute;s pour indiquer : &laquo; Je suis un gnani et vous &ecirc;tes ignorant &raquo;.

	La deuxi&egrave;me parole de J&eacute;sus est : &laquo; Vous &ecirc;tes de ce monde ; Je ne suis pas de ce monde. &laquo; Loka &raquo; (Monde) en Telugu signifie &laquo; avoir des exp&eacute;riences &raquo;. Il existe deux types de personnes en fonction des exp&eacute;riences qu'elles vivent. Ceux qui ont des exp&eacute;riences appartiennent &agrave; ce monde, et ceux qui n&rsquo;en ont pas n&rsquo;appartiennent pas &agrave; ce monde. Les gens ordinaires profitent de toutes les exp&eacute;riences du monde, ils sont donc les r&eacute;sidents de ce monde. J&eacute;sus, qui n'a aucune exp&eacute;rience, a dit qu'il n'&eacute;tait pas de ce monde. Bien qu&rsquo;Il ressemble &agrave; un homme, Il n&rsquo;a aucune exp&eacute;rience semblable &agrave; celle d&rsquo;un homme. M&ecirc;me si J&eacute;sus est dans un corps humain, Il n&rsquo;est pas un Jeevatma comme les autres. Lorsqu&rsquo;Il n&rsquo;est pas un Jeevatma, il n&rsquo;y a pas de karma. Par cons&eacute;quent, Il n&rsquo;a pas d&rsquo;exp&eacute;rience bas&eacute;e sur le karma. Paramatma a sp&eacute;cialement envoy&eacute; J&eacute;sus. En d&rsquo;autres termes, le Saint-Esprit est venu d&eacute;guis&eacute; en J&eacute;sus. Selon le dharma spirituel, nous ne devrions pas dire cela. Paramatma a sp&eacute;cialement cr&eacute;&eacute; et envoy&eacute; J&eacute;sus. Par cons&eacute;quent, J&eacute;sus devrait &ecirc;tre appel&eacute; le Fils du Saint-Esprit. Comme J&eacute;sus n'est pas un Jeevatma, on peut dire qu'il n'a pas d'exp&eacute;riences. Si J&eacute;sus &eacute;tait un Jeevatma, il ne devrait pas &ecirc;tre appel&eacute; le Fils du Saint-Esprit. Jeevatma est le Fils d'Atma. Le P&egrave;re d&rsquo;Atma est le Saint-Esprit. Par cons&eacute;quent, Jeevatma devient le petit-fils du Saint-Esprit. J&eacute;sus est appel&eacute; fils de Dieu parce qu&rsquo;il est envoy&eacute; de Dieu par Dieu. J&eacute;sus a &eacute;galement &eacute;t&eacute; explicitement appel&eacute; le Fils unique. Atma est le Fils du Saint-Esprit. Le Fils unique est le Fils temporaire qui descend sur terre dans le besoin. Par cons&eacute;quent, le Fils temporaire devient le Fils du Saint-Esprit comme Atma et ne deviendra pas un petit-fils comme Jeevatma. Jeevatma acquiert de l'exp&eacute;rience. Par cons&eacute;quent, Jeevatma, qui a des exp&eacute;riences, vient de ce monde. J&eacute;sus, en tant qu'Atma, qui n'a pas d'exp&eacute;riences, n'est pas de ce monde. Il est originaire de Paraloka.

	J&eacute;sus a donn&eacute; au peuple une seconde chance de le reconna&icirc;tre comme un homme extraordinaire et a cit&eacute; ces versets (Jean 8&nbsp;:&nbsp;23, 24). Cependant, les humains ne pouvaient pas percevoir la grandeur de J&eacute;sus et le consid&eacute;raient comme un homme ordinaire. Par cons&eacute;quent, ils ne peuvent pas &ecirc;tre absous de leurs p&eacute;ch&eacute;s par J&eacute;sus ou par ses enseignements. J&eacute;sus, le Fils du Saint-Esprit, est venu parmi les hommes et a prononc&eacute; de nombreuses paroles pour se faire conna&icirc;tre. Il a r&eacute;it&eacute;r&eacute; pour la deuxi&egrave;me fois que ceux qui ne pourraient pas le trouver et croire en Lui mourraient dans leurs p&eacute;ch&eacute;s, comme Il l'avait mentionn&eacute; plus t&ocirc;t dans Jean 8&nbsp;:21. Il a fourni une troisi&egrave;me opportunit&eacute; en pronon&ccedil;ant Ses derni&egrave;res paroles. J&eacute;sus a r&eacute;p&eacute;t&eacute; trois s&eacute;ries de versets pour aider les gens &agrave; l&rsquo;identifier. Il a averti que ceux qui ne le reconna&icirc;traient pas ne se verraient pas pardonner leurs p&eacute;ch&eacute;s. Examinons la troisi&egrave;me s&eacute;rie de versets pour voir ce qu&rsquo;Il a dit.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 111,
verse: `<b>(33)	L'Évangile de Jean, chapitre 8, verset 24.</b>`,
meaning: `<b>
(8:24) Je t'ai dit que tu mourrais dans tes péchés ; si vous ne croyez pas que je suis Lui, vous mourrez effectivement dans vos péchés.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	On sait que ce verset donnait une troisi&egrave;me chance de savoir qui &eacute;tait J&eacute;sus. Dans ce verset, J&eacute;sus dit directement au public qui il &eacute;tait. Il a dit : &laquo;<strong>Ceux qui ne croient pas que je suis le Saint-Esprit et que le Cr&eacute;ateur mourra dans leur p&eacute;ch&eacute;</strong>.&raquo; J&eacute;sus Lui-m&ecirc;me a d&eacute;clar&eacute; qui il &eacute;tait. Au d&eacute;part, il a dit : &laquo;<strong>je m'en irai ; tu ne peux pas venir &agrave; l'endroit o&ugrave; je suis all&eacute;</strong>&raquo;, pour leur donner l&rsquo;occasion de Le comprendre. Dans le deuxi&egrave;me verset, il dit : &laquo;<strong>Vous &ecirc;tes de ce monde ; je ne suis pas de ce monde</strong>&raquo;, fournissant plus de d&eacute;tails pour les aider &agrave; comprendre qui Il &eacute;tait. On peut comprendre que J&eacute;sus est le Saint-Esprit &agrave; partir du deuxi&egrave;me verset. Dans le troisi&egrave;me verset, il dit : &laquo;<strong>Celui qui ne croit pas que je le suis n'est pas capable de sortir du p&eacute;ch&eacute;</strong>&raquo;, apportant une plus grande clart&eacute;. Dans le troisi&egrave;me verset, J&eacute;sus d&eacute;clare : &laquo;<strong>je suis Dieu</strong>.&raquo; Malgr&eacute; cela, les gens reconnaissaient J&eacute;sus comme un homme ordinaire et &eacute;taient incapables de r&eacute;aliser qu&rsquo;Il &eacute;tait Dieu. Cependant, certains ont &eacute;t&eacute; surpris par les paroles de J&eacute;sus. M&ecirc;me s&rsquo;ils n&rsquo;y croyaient pas, ils lui demand&egrave;rent qui il &eacute;tait. J&eacute;sus a r&eacute;pondu en utilisant ces trois versets (Jean 8&nbsp;:&nbsp;21, 22, 23) pour les aider &agrave; comprendre qu&rsquo;il n&rsquo;&eacute;tait pas un homme ordinaire. N&eacute;anmoins, ils ne s&rsquo;en rendirent pas compte et demand&egrave;rent : &laquo; Qui es-tu ? &raquo; J&eacute;sus r&eacute;pondit : &laquo;<strong>Juste ce que je te dis depuis le d&eacute;but</strong>.&raquo;

	De plus, il a dit : &laquo; Celui qui m&rsquo;a envoy&eacute; est digne de confiance, et ce que j&rsquo;ai entendu de lui, je le dis au monde. &raquo; Cependant, les gens ne r&eacute;alisaient pas qu&rsquo;Il parlait de son P&egrave;re (le Saint-Esprit). M&ecirc;me s&rsquo;il en disait tant, les gens ne reconnaissaient pas J&eacute;sus. Certains le traitaient comme un homme ordinaire, et d&rsquo;autres le traitaient pire qu&rsquo;un homme ordinaire. J&eacute;sus a dit autre chose &agrave; propos de ces gens.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 112,
verse: ` <b>(34)	L'Évangile de Jean, chapitre 8, verset 28.</b>`,
meaning: ` <b>
(8:28) Ainsi, Jésus a dit : « Quand vous aurez élevé le Fils de l’homme, alors vous saurez que je suis Lui et que je ne fais rien de moi-même, mais je dis simplement ce que le Père m’a enseigné.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Il y a une certaine confusion dans ce verset concernant la phrase &laquo;<strong>Tu as &eacute;lev&eacute; le Fils de l'homme</strong>.&raquo; On ne comprend peut-&ecirc;tre pas cette phrase. Pour interpr&eacute;ter correctement cette phrase, il faut la lire comme &laquo; Quand les gens &eacute;l&egrave;vent J&eacute;sus au-dessus de leurs t&ecirc;tes &raquo; au lieu de &laquo; Quand vous avez &eacute;lev&eacute; J&eacute;sus &raquo;. Certains pourraient se demander : &laquo; Pourquoi les gens &eacute;l&egrave;veraient-ils J&eacute;sus au-dessus de leur t&ecirc;te ? &raquo; La r&eacute;ponse est que <strong>J&eacute;sus doit &ecirc;tre compris avec la t&ecirc;te </strong>c'est sur notre corps. Celui qui comprend J&eacute;sus avec son <strong>intellect (bouddhi) </strong>saura que J&eacute;sus est le Saint-Esprit. De plus, ce verset r&eacute;v&egrave;le que la sagesse divine enseign&eacute;e par J&eacute;sus n&rsquo;est pas la sienne ; au lieu de cela, il enseigne selon les directives du Saint-Esprit.

	Au lieu de dire que les humains devraient comprendre J&eacute;sus avec la buddhi dans la t&ecirc;te, le verset dit que les gens ont &eacute;lev&eacute; J&eacute;sus. On sait que J&eacute;sus est Paramatma (le Saint-Esprit) si l'on le comprend <strong>avec le buddhi </strong>dans le corps. Tant que les gens n&rsquo;auront pas compris que J&eacute;sus est Dieu, &raquo;<strong>les p&eacute;ch&eacute;s du peuple ne sont pas pardonn&eacute;s et ils meurent dans leur p&eacute;ch&eacute;</strong>&raquo;, comme indiqu&eacute; dans les trois versets pr&eacute;c&eacute;dents. S&rsquo;ils comprennent ce que J&eacute;sus a dit, on comprendra que J&eacute;sus est Dieu. Le secret que le Saint-Esprit incarne en tant qu&rsquo;homme pour enseigner sa sagesse se r&eacute;v&egrave;le. Lorsqu&rsquo;on apprend que J&eacute;sus est Dieu, certains peuvent penser que J&eacute;sus lui-m&ecirc;me exprime toute la sagesse dont J&eacute;sus parle. Cependant, il n&rsquo;est pas possible de le dire comme certains le pensent. La raison est qu&rsquo;apr&egrave;s avoir dit : &laquo;<strong>je suis Lui</strong>&raquo;, Il pronon&ccedil;a un autre mot.

	J&eacute;sus a dit : &laquo;<strong>Je ne fais rien par moi-m&ecirc;me mais je dis simplement ce que le P&egrave;re m'a appris</strong>.&raquo; Cela pourrait donner l&rsquo;impression que le P&egrave;re et J&eacute;sus sont distincts. La raison pour laquelle nous l&rsquo;exprimons de deux mani&egrave;res est enracin&eacute;e dans le fait que J&eacute;sus &eacute;tait un homme. Dieu, sous sa vraie forme, est invisible et incarne le pouvoir. Lorsque Dieu prend une forme humaine, et si un individu per&ccedil;oit cette v&eacute;rit&eacute; avec l&rsquo;intellect (buddhi), il comprendra que le Saint-Esprit et J&eacute;sus sont une seule et m&ecirc;me personne. Cependant, lorsque Dieu s&rsquo;incarne en tant qu&rsquo;homme, il est contraire &agrave; la loi spirituelle que l&rsquo;incarnation d&eacute;clare ouvertement : &laquo; Je suis Dieu &raquo;. M&ecirc;me si l'on peut reconna&icirc;tre la personne visible comme Dieu, cette v&eacute;rit&eacute; ne devrait pas &ecirc;tre ouvertement r&eacute;v&eacute;l&eacute;e selon <strong>loi spirituelle</strong>. Suivant cette r&egrave;gle spirituelle, J&eacute;sus a d&eacute;clar&eacute; : &laquo;<strong>Je ne fais rien par moi-m&ecirc;me mais je dis simplement ce que le P&egrave;re m'a appris</strong>&raquo;, adh&eacute;rant aux principes de la loi spirituelle.

	J&eacute;sus a dit : &laquo; Je dis ce que le P&egrave;re a dit. &raquo; Les deux expressions &ndash; &laquo; Je ne fais rien par moi-m&ecirc;me &raquo; et &laquo; Dieu fait tout &raquo; &mdash; signifient la m&ecirc;me chose. Lorsque les gens reconnaissent que J&eacute;sus est le Saint-Esprit, leurs p&eacute;ch&eacute;s seront pardonn&eacute;s. S&rsquo;il est sage de comprendre que J&eacute;sus est le Saint-Esprit, il est spirituellement incorrect de dire que le Saint-Esprit est J&eacute;sus. C&rsquo;est pourquoi J&eacute;sus lui-m&ecirc;me a dit : &laquo;<strong>Jusqu'&agrave; ce que tu saches que je suis Dieu, tes p&eacute;ch&eacute;s ne seront pas pardonn&eacute;s</strong>," et "<strong>je suis Lui</strong>&raquo;, afin que les humains comprennent qui &eacute;tait J&eacute;sus. Selon la loi spirituelle, il a finalement d&eacute;clar&eacute; : &laquo; Je fais tout ce que mon P&egrave;re m&rsquo;a dit de faire. &raquo; Par cons&eacute;quent, il ne faut pas supposer que J&eacute;sus a parl&eacute; de deux mani&egrave;res dans ce verset. Bien qu&rsquo;il soit &eacute;crit dans le verset que &laquo; je suis Dieu &raquo; et &laquo; je fais ce que Dieu dit &raquo;, les deux v&eacute;hiculent le m&ecirc;me sens. On peut penser que J&eacute;sus a dit des choses contradictoires si cela n&rsquo;est pas compris. Celui qui comprend la sagesse peut reconna&icirc;tre que Dieu vient en tant qu&rsquo;homme mais ne doit pas d&eacute;clarer qu&rsquo;une personne en particulier est Dieu. Par cons&eacute;quent, J&eacute;sus a &eacute;galement dit : &laquo; Je suis Dieu &raquo; en un mot et &laquo; Mon P&egrave;re est Dieu &raquo; en un autre. Les deux sont vrais. De plus, J&eacute;sus a dit ce qui suit au peuple.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 113,
verse: `<b>(35)	L'Évangile de Jean, chapitre 8, verset 29.</b>`,
meaning: ` <b>
(8:29) Celui qui m'a envoyé est avec moi ; Il ne m'a pas laissé seul, car je fais toujours ce qui Lui plaît.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Ce verset indiquerait que J&eacute;sus et le Saint-Esprit sont une seule et m&ecirc;me personne. Pour appuyer cela, J&eacute;sus a dit : &laquo; Celui qui m&rsquo;a envoy&eacute; est avec moi. &raquo; Cela signifie que le Dieu qui a envoy&eacute; J&eacute;sus est en Lui et que le Saint-Esprit et J&eacute;sus sont identiques. Il y a quelque chose qui s&rsquo;appelle &laquo; Volont&eacute; &raquo; dans le corps humain. J&eacute;sus a dit qu&rsquo;il ferait toujours les choses selon la volont&eacute; de Dieu. D&rsquo;une mani&egrave;re diff&eacute;rente, Il a dit que la volont&eacute; de Dieu op&egrave;re en Lui. C'est un t&eacute;moignage du fait que Dieu est en J&eacute;sus. J&eacute;sus a &eacute;galement dit que le Saint-Esprit ne l&rsquo;avait pas laiss&eacute; seul. C'est comme si J&eacute;sus disait que Dieu &eacute;tait avec Lui et que Dieu &eacute;tait Lui. J&eacute;sus lui-m&ecirc;me a prononc&eacute; ces paroles pour le reconna&icirc;tre comme Dieu. Bien que Dieu soit venu sous la forme de &laquo; J&eacute;sus &raquo; dans le Kali Yuga, les gens ne l&rsquo;ont pas reconnu. Il devenait donc n&eacute;cessaire que J&eacute;sus prononce ces paroles pour reconna&icirc;tre sa grandeur. Autrement, les gens ne saisiraient pas la sagesse de J&eacute;sus. Lorsque J&eacute;sus pronon&ccedil;a ces versets, certaines personnes le crurent.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 114,
verse: ` <b>(36)	L'Évangile de Jean, chapitre 8, versets 53 et 54.</b>`,
meaning: ` <b>
(8:53) Es-tu plus grand que notre père Abraham ? Il est mort, tout comme les prophètes. Pour qui te prends-tu ?
<br><br>
(8:54) Jésus répondit : « Si je me glorifie, ma gloire ne signifie rien. Mon Père, celui que vous proclamez votre Dieu, c'est celui qui me glorifie. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Bien que J&eacute;sus ait fourni des explications d&eacute;taill&eacute;es pour que les gens le comprennent, ils ont eu du mal &agrave; saisir son identit&eacute;, ce qui les a amen&eacute;s &agrave; se demander : &laquo; Qui es-tu ? En r&eacute;ponse, J&eacute;sus a d&eacute;clar&eacute; : &laquo; Si je me glorifie, ma gloire ne signifie rien. &raquo; Ayant d&eacute;j&agrave; parl&eacute; de lui-m&ecirc;me &agrave; cinq reprises, il a reconnu que ses paroles pouvaient &ecirc;tre per&ccedil;ues comme fausses s&rsquo;il les r&eacute;p&eacute;tait ou les d&eacute;veloppait davantage. C&rsquo;est pourquoi J&eacute;sus a expliqu&eacute; : &laquo; Si je dis encore une fois quelque chose de diff&eacute;rent de ce qui a &eacute;t&eacute; dit jusqu&rsquo;&agrave; pr&eacute;sent, alors mon P&egrave;re, que vous proclamez votre Dieu, me glorifie. &raquo; Cette d&eacute;claration souligne l&rsquo;unit&eacute; fondamentale entre J&eacute;sus et son P&egrave;re, que les gens consid&egrave;rent comme Dieu. Cependant, conform&eacute;ment aux r&egrave;gles spirituelles, il ne faut pas pr&eacute;tendre directement &ecirc;tre Dieu. Par cons&eacute;quent, J&eacute;sus a d&eacute;clar&eacute; initialement : &laquo; Je suis Dieu &raquo; pour aider les gens &agrave; le comprendre. Plus tard, il a pr&eacute;cis&eacute; en d&eacute;clarant que Dieu &eacute;tait son P&egrave;re. &laquo; Ce n&rsquo;est pas parce que je vous ai dit deux choses diff&eacute;remment que vous devriez &ecirc;tre confus. Vous devez me comprendre avec la v&eacute;rit&eacute; &raquo;, a d&eacute;clar&eacute; J&eacute;sus, soulignant l'importance de comprendre son identit&eacute; au-del&agrave; des expressions superficielles.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 115,
verse: `<b>(37)	L'Évangile de Jean, chapitre 8, verset 55. </b>`,
meaning: `<b>
(8:55) Même si vous ne le connaissez pas, je le connais. Si je disais que non, je serais un menteur comme vous, mais je le connais et j’obéis à sa parole. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	J&eacute;sus a proclam&eacute; : &laquo; Vous ne connaissez pas Dieu ; Je connais Dieu &raquo;, r&eacute;pondant &agrave; la perception de beaucoup qui le consid&eacute;raient comme un homme ordinaire. Le besoin d&rsquo;une telle d&eacute;claration s&rsquo;est fait sentir pour clarifier la relation distincte de J&eacute;sus avec Dieu. Certains se demandaient comment J&eacute;sus, &eacute;tant humain comme les autres, pouvait pr&eacute;tendre conna&icirc;tre Dieu alors que d&rsquo;autres ne le connaissaient pas. Pour r&eacute;pondre &agrave; cette question, nous pouvons consid&eacute;rer la d&eacute;claration r&eacute;p&eacute;t&eacute;e de J&eacute;sus : &laquo; Je le suis &raquo;, dans trois versets distincts. Selon cette d&eacute;claration, J&eacute;sus ne poss&egrave;de pas Jeevatma dans son corps, m&ecirc;me s'il a une forme humaine. Au lieu de cela, le Saint-Esprit sert d&rsquo;Atma unique dans Son corps, s&rsquo;engageant activement dans chaque action. L'id&eacute;e fausse surgit lorsque les gens supposent que l'Atma est le Jeevatma, ce qui les am&egrave;ne &agrave; croire que J&eacute;sus ne conna&icirc;t peut-&ecirc;tre pas Dieu. Cependant, la v&eacute;rit&eacute; est que Paramatma (le Saint-Esprit) lui-m&ecirc;me r&eacute;side dans le corps de J&eacute;sus, lui faisant conna&icirc;tre Dieu. Comme le Saint-Esprit est la conscience en J&eacute;sus, il n&rsquo;est pas n&eacute;cessaire d&rsquo;avoir une connaissance s&eacute;par&eacute;e ; J&eacute;sus poss&egrave;de intrins&egrave;quement Dieu comme Sa conscience. En revanche, les humains ordinaires ont l'esprit (manas) comme conscience dans leur corps mais n'ont pas la conscience de l'Atma ou du Paramatma. Le manque de conscience de Paramatma est la raison pour laquelle les humains ne connaissent pas Dieu, alors que J&eacute;sus, avec Dieu comme conscience, conna&icirc;t Dieu de mani&egrave;re inh&eacute;rente.

	Si J&eacute;sus devait affirmer : &laquo; Je ne connais pas Dieu &raquo;, cela sugg&eacute;rerait un manque de conscience de Dieu en Lui, comme chez les humains ordinaires. Une telle affirmation &eacute;quivaudrait &agrave; un mensonge. C&rsquo;est pourquoi J&eacute;sus a d&eacute;clar&eacute; : &laquo; Si je disais que je ne connais pas Dieu, je serais un menteur comme toi. &raquo; La particularit&eacute; r&eacute;side dans le fait que le Saint-Esprit est le seul habitant du corps de J&eacute;sus, &eacute;liminant ainsi l&rsquo;existence d&rsquo;une double paire d&rsquo;&acirc;mes &ndash; Atma, responsable des actions, et Jeevatma, des exp&eacute;riences. Dans le corps de J&eacute;sus, o&ugrave; seul le Saint-Esprit r&eacute;side, chaque parole prononc&eacute;e provient du Saint-Esprit. Par cons&eacute;quent, lorsque J&eacute;sus a exprim&eacute; : &laquo; Je suis conscient de Lui. Je le connais et j&rsquo;ob&eacute;is &agrave; sa parole &raquo;, ces paroles &eacute;manaient du Saint-Esprit, bien que J&eacute;sus parle d&rsquo;une mani&egrave;re semblable &agrave; celle de tout le monde. Malgr&eacute; son apparence ext&eacute;rieure d&rsquo;homme ordinaire, il n&rsquo;y avait aucun aspect qui lui &eacute;tait inconnu. Une illustration de cette profonde connaissance s&rsquo;est r&eacute;v&eacute;l&eacute;e lorsque J&eacute;sus a parl&eacute; d&rsquo;Abraham, un personnage d&eacute;c&eacute;d&eacute; depuis longtemps, suscitant l&rsquo;&eacute;tonnement et suscitant une question parmi ceux qui l&rsquo;entouraient.</div></div>

</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 116,
verse: ` <b>(38)	L'Évangile de Jean, chapitre 8, versets 57 et 58.</b>`,
meaning: `<b>
(8:57) «Tu n'as pas encore cinquante ans», lui dirent-ils, «et tu as vu Abraham!”.
<br><br>
(8:58) « En vérité, je vous le dis », répondit Jésus, « avant la naissance d'Abraham, Je suis pour le reste également! »
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Lorsque J&eacute;sus pronon&ccedil;a ces paroles, il avait environ 32 ans, sur le point d'entrer dans sa 33e ann&eacute;e. Abraham, un personnage historique, avait v&eacute;cu des si&egrave;cles avant J&eacute;sus, semblable &agrave; un arri&egrave;re-grand-p&egrave;re pour le peuple de l&rsquo;&eacute;poque de J&eacute;sus. Lorsque J&eacute;sus faisait r&eacute;f&eacute;rence &agrave; Abraham, les Juifs pr&eacute;sents se demandaient comment il pouvait parler d'un homme qui l'avait longtemps pr&eacute;c&eacute;d&eacute;, &eacute;tant n&eacute; et mort &agrave; une &eacute;poque diff&eacute;rente. En r&eacute;ponse, J&eacute;sus a fait la d&eacute;claration &eacute;nigmatique : &laquo; Avant la naissance d&rsquo;Abraham, je le suis. &raquo; Cette affirmation a sembl&eacute; trompeuse &agrave; son entourage, &eacute;tant donn&eacute; la distinction g&eacute;n&eacute;rationnelle claire entre J&eacute;sus et Abraham. N&eacute;anmoins, ce que J&eacute;sus exprimait &eacute;tait une v&eacute;rit&eacute; absolue, m&ecirc;me si cela paraissait paradoxal &agrave; ses contemporains.

	Explorons la v&eacute;rit&eacute; derri&egrave;re cette d&eacute;claration. Le corps physique de J&eacute;sus est n&eacute; il y a environ 32 ans. Cependant, seul le Saint-Esprit r&eacute;side dans Son corps, pas le Jeevatma. Si Jeevatma &eacute;tait pr&eacute;sent, J&eacute;sus n&rsquo;aurait pas de souvenirs de ses naissances pr&eacute;c&eacute;dentes, car Jeevatma ne conserve pas de tels souvenirs. En revanche, Paramatma (l&rsquo;&acirc;me supr&ecirc;me) est pr&eacute;sente dans le corps de J&eacute;sus et est &eacute;ternelle. Il existe avant la cr&eacute;ation de l&rsquo;univers et est le cr&eacute;ateur de tous les &ecirc;tres vivants, y compris Abraham. Abraham, comme tout autre &ecirc;tre humain, est n&eacute;, a v&eacute;cu et est mort, avec le Saint-Esprit comme t&eacute;moin. Tandis qu'Atma donnait la vie &agrave; Abraham, Dieu (Paramatma) fut t&eacute;moin de tout le voyage. <strong>Dieu est le t&eacute;moin ultime, Atma est l'acteur et Jeevatma fait l'exp&eacute;rience de la vie.</strong>. Bien qu'Abraham soit n&eacute; par Atma, Dieu, en tant que t&eacute;moin ultime, sait tout sur Abraham. Paramatma sait combien de fois Abraham est n&eacute; dans le pass&eacute; et combien de fois il na&icirc;tra dans le futur. Par cons&eacute;quent, lorsque J&eacute;sus a dit : &laquo; Avant la naissance d&rsquo;Abraham, je suis &raquo;, il a fait r&eacute;f&eacute;rence &agrave; son identit&eacute; comme au Paramatma &eacute;ternel qui existait avant la naissance d&rsquo;Abraham et continuera d&rsquo;exister apr&egrave;s sa mort. Cette d&eacute;claration met l&rsquo;accent sur l&rsquo;existence intemporelle de J&eacute;sus au-del&agrave; des limites de la naissance et de la mort physiques.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 117,
verse: `<b>(39)	L'Évangile de Jean, chapitre 9, verset 39.</b>`,
meaning: ` <b>
(9:39) Jésus a dit : « Je suis venu dans ce monde pour le jugement, afin que les aveugles verront et ceux qui voient deviendront aveugles.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Lorsque certaines personnes ont accus&eacute; J&eacute;sus d'&ecirc;tre un p&eacute;cheur, l'individu dont le karma avait &eacute;t&eacute; supprim&eacute; par J&eacute;sus a entendu leurs paroles et a r&eacute;pondu avec l'information suivante.

	(Jean 9&nbsp;:25-38) Il r&eacute;pondit : <strong>&laquo; Qu&rsquo;il soit p&eacute;cheur ou non, je ne le sais pas. Une chose que je sais. J'&eacute;tais aveugle mais maintenant je vois !</strong>. Alors ils lui demand&egrave;rent : <strong>&laquo; Que t&rsquo;a-t-il fait ? Comment vous a-t-il ouvert les yeux ? </strong>Il a r&eacute;pondu, <strong>&laquo;Je vous l'ai d&eacute;j&agrave; dit et vous ne m'avez pas &eacute;cout&eacute;. Pourquoi veux-tu l'entendre &agrave; nouveau ? Voulez-vous aussi devenir ses disciples ? </strong>Alors ils lui jet&egrave;rent des insultes et dirent : <strong>&laquo; Vous &ecirc;tes le disciple de cet homme ! Nous sommes des disciples de Mo&iuml;se ! Nous savons que Dieu a parl&eacute; &agrave; Mo&iuml;se, mais quant &agrave; lui, nous ne savons m&ecirc;me pas d&rsquo;o&ugrave; il vient. </strong>L'homme r&eacute;pondit : <strong>&laquo; C&rsquo;est remarquable ! Vous ne savez pas d'o&ugrave; il vient, pourtant il m'a ouvert les yeux. Nous savons que Dieu n'&eacute;coute pas les p&eacute;cheurs. Il &eacute;coute la personne pieuse qui fait sa volont&eacute;. Personne n&rsquo;a jamais entendu parler d&rsquo;ouvrir les yeux d&rsquo;un aveugle-n&eacute;. Si cet homme n&rsquo;&eacute;tait pas de Dieu, il ne pourrait rien faire. </strong>A cela ils r&eacute;pondirent : <strong>&laquo; Vous &eacute;tiez baign&eacute; dans le p&eacute;ch&eacute; &agrave; votre naissance ; comment oses-tu nous faire la morale&nbsp;!&nbsp;&raquo; </strong>Et ils l'ont mis dehors. J&eacute;sus apprit qu'ils l'avaient chass&eacute;, et quand J&eacute;sus le trouva, il dit : <strong>"Croyez-vous au Fils de l'Homme ?" &laquo;&nbsp;Qui est-il, monsieur&nbsp;?&nbsp;&raquo; </strong>&raquo; demanda l'homme. <strong>&laquo;&nbsp;Dites-le-moi pour que je croie en Lui.&nbsp;&raquo; </strong>J&eacute;sus a dit : &laquo;<strong>Vous l'avez maintenant vu ; en fait, c&rsquo;est Lui qui vous parle. </strong>Alors l'homme dit : <strong>"Seigneur, je crois" </strong>et il l'adora. Apr&egrave;s les &eacute;v&eacute;nements qui venaient de se produire, J&eacute;sus dit : <strong>&laquo; Pour le jugement, je suis venu dans ce monde, afin que les aveugles voient et que ceux qui voient deviennent aveugles. &raquo; </strong>Cette d&eacute;claration peut &ecirc;tre comprise &agrave; la lumi&egrave;re des &eacute;v&eacute;nements pr&eacute;c&eacute;dents.

	Le but de la d&eacute;claration de J&eacute;sus &eacute;tait de transmettre que <strong>ceux qui ont foi en Dieu peuvent me voir</strong>, m&ecirc;me s&rsquo;ils ne savent pas qui Il est. Ceux qui ne croient pas en Dieu peuvent interagir quotidiennement avec J&eacute;sus et voir son corps physique, mais ils ne peuvent pas le reconna&icirc;tre. Par cons&eacute;quent, J&eacute;sus a dit qu&rsquo;Il est venu dans le monde pour faire ignorer aux incroyants qu&rsquo;Il est Dieu. Bien que Dieu ait pris une forme humaine et se tienne aux c&ocirc;t&eacute;s des incroyants, ils ne peuvent pas reconna&icirc;tre le Fils de Dieu en raison de leur aveuglement ignorant. Cet aveuglement est une forme d&rsquo;ignorance qui les emp&ecirc;che de conna&icirc;tre Dieu, m&ecirc;me lorsqu&rsquo;Il appara&icirc;t sous forme humaine. Quand J&eacute;sus a dit cela <strong>un d&eacute;vot qui voit l&rsquo;incarnation de Dieu (le Fils de Dieu) peut ne pas le reconna&icirc;tre sur la base de son apparence ext&eacute;rieure, mais plut&ocirc;t par intuition.</strong>, certaines personnes autour de lui ont demand&eacute; s'ils &eacute;taient &eacute;galement aveugles. J&eacute;sus leur r&eacute;pondit ainsi.
</div></div>

</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 118,
verse: `<b>(40)	L'Évangile de Jean, chapitre 9, verset 41.</b>`,
meaning: `<b>
(9:41) Jésus a dit : « Si vous étiez aveugle, vous ne seriez pas coupable de péché ; mais maintenant que vous prétendez voir, votre culpabilité demeure. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Au verset 39, J&eacute;sus explique la distinction entre ceux qui ont la foi et ceux qui n&rsquo;en ont pas. Il a d&eacute;clar&eacute; qu&rsquo;une personne aveugle ayant une foi divine pouvait le voir, tandis que les incroyants pouvaient le voir physiquement mais ne pouvaient pas percevoir sa v&eacute;ritable identit&eacute;. Au verset 41, J&eacute;sus approfondi le comportement de ceux qui op&egrave;rent avec un <strong>point de vue du monde</strong>. Les individus ayant une mentalit&eacute; mondaine proclament : &laquo; Je vois &raquo;, s&rsquo;attribuant leurs actions et accumulant par cons&eacute;quent du karma pour leurs actes. Dieu a accord&eacute; la vue aux humains pour comprendre sa sagesse, mais tout le monde n&rsquo;utilise pas sa vision pour reconna&icirc;tre Dieu. Certains restent spirituellement aveugles malgr&eacute; leurs yeux physiques. En ce qui concerne les choses du monde, chaque individu est, par essence, aveugle. La v&eacute;rit&eacute; est que personne ne s&rsquo;engage de mani&egrave;re autonome dans des activit&eacute;s mondaines. Personne ne poss&egrave;de la vue ou l&rsquo;ou&iuml;e. Malgr&eacute; leur manque inh&eacute;rent, les gens pr&eacute;tendent : &laquo; Je vois &raquo;, supposant faussement qu&rsquo;ils ont la vue et encourent par cons&eacute;quent le p&eacute;ch&eacute; pour leurs actions. M&ecirc;me si les humains sont spirituellement aveugles, ils accumulent des p&eacute;ch&eacute;s lorsqu&rsquo;ils croient &agrave; tort qu&rsquo;ils poss&egrave;dent la vue. J&eacute;sus a soulign&eacute; que reconna&icirc;tre son aveuglement spirituel et reconna&icirc;tre <strong>la v&eacute;rit&eacute; </strong>le fait de n'avoir rien vu les absout du p&eacute;ch&eacute;. Essentiellement, reconna&icirc;tre sa c&eacute;cit&eacute; spirituelle emp&ecirc;che l&rsquo;accumulation de p&eacute;ch&eacute;s dans les affaires du monde.

	Ceux qui manquent de sagesse divine ne se rendent pas compte de leur manque de vision dans les affaires mondaines. Leur incapacit&eacute; &agrave; comprendre les paroles de J&eacute;sus vient de leur ignorance du fait que Dieu a dot&eacute; la vue uniquement pour comprendre les choses qui lui sont li&eacute;es. Pour saisir l&rsquo;essence du verset, le Jeeva (&acirc;me) de chaque individu doit d&rsquo;abord reconna&icirc;tre s&rsquo;il est aveugle ou s&rsquo;il poss&egrave;de une vision du corps. En v&eacute;rit&eacute;, le Jeeva dans le corps de chaque personne est enti&egrave;rement aveugle &agrave; tous &eacute;gards. Chaque Jeeva croit &agrave; tort que le corps lui appartient et qu'il est l'auteur de toutes les actions du corps. Cependant, Jeevatma n'a aucune agence ind&eacute;pendante dans le corps ; <strong>Atma </strong>est le v&eacute;ritable propri&eacute;taire et contr&ocirc;leur. Atma op&egrave;re continuellement dans le corps et, en r&eacute;alit&eacute;, Jeeva n&rsquo;effectue aucune t&acirc;che dans le corps. Priv&eacute;e de vue, d'audition et de pleine fonctionnalit&eacute;, Jeeva est aveugle, sourde et handicap&eacute;e dans tous les sens. Situ&eacute; &agrave; c&ocirc;t&eacute; du <strong>bouddhi </strong>(intellect) dans le corps, Jeeva prend conscience des informations qui atteignent l'intellect, mais Jeeva ne peut rien savoir de mani&egrave;re ind&eacute;pendante. Malgr&eacute; son manque de connaissances directes, Jeeva croit &agrave; tort qu'elle a &eacute;t&eacute; personnellement t&eacute;moin de tout. Bien que l'Atma soit la force active du corps, Jeeva s'attribue &agrave; tort toutes les actions. Lorsque Jeeva revendique &agrave; tort la responsabilit&eacute; d'un acte, elle doit subir les cons&eacute;quences karmiques associ&eacute;es &agrave; cet acte.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 119,
verse: `<b>(41)	L'Évangile de Jean, chapitre 10, verset 18.</b>`,
meaning: `<b>
(10:18) Personne ne me prend la vie, mais je la donne de mon propre gré. J'ai le pouvoir de le déposer et le pouvoir de le reprendre. Ce commandement, je l'ai reçu de mon Père. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Personne ne sait quand une personne ordinaire quittera cette vie. Une fois que quelqu&rsquo;un meurt, il ne reviendra pas. Cela est &eacute;vident dans chaque d&eacute;c&egrave;s. Jeeva quitte &eacute;galement le corps dans la mort. Cependant, la plupart des gens ne r&eacute;alisent pas que <strong>Jeeva est s&eacute;par&eacute; de la force vitale d'une personne</strong>. Beaucoup de gens pensent que Jeeva et la force vitale sont identiques. Mais dans le verset, il est dit : &laquo;<strong>Personne ne me prend la vie</strong>&raquo;, ce qui montre que J&eacute;sus est diff&eacute;rent et que sa force est diff&eacute;rente. Bien que chacun ait sa propre force vitale dans son corps, comme J&eacute;sus, il ne peut pas la mettre de c&ocirc;t&eacute; ni la reprendre. Dans le corps se trouvent de nombreux organes internes, la vie, Buddhi et Manas. Tout ce qui se trouve &agrave; l&rsquo;int&eacute;rieur du corps est sous le contr&ocirc;le de l&rsquo;Atma et non sous le contr&ocirc;le de l&rsquo;homme. Par cons&eacute;quent, Atma d&eacute;cide s&rsquo;il faut mettre de c&ocirc;t&eacute; la vie d&rsquo;une personne ou envoyez-le l&agrave; o&ugrave; Atma le souhaite, car c'est sa t&acirc;che. <strong>Jeeva </strong>n'a aucun rapport avec la force vitale de leur corps, mais <strong>Atma </strong>a une relation avec la force vitale du corps.

	J&eacute;sus n'est pas un Jeeva ordinaire, mais plut&ocirc;t Il est Atma. En tant que tel, il a le pouvoir de mettre de c&ocirc;t&eacute; sa vie, et personne ne peut la lui reprendre. Cela signifie que <strong>J&eacute;sus ne meurt pas entre les mains de quelqu&rsquo;un d&rsquo;autre</strong>; s&rsquo;il devait mourir, il choisirait de mettre sa vie de c&ocirc;t&eacute;. Seul Atma a le pouvoir de mettre la vie de c&ocirc;t&eacute; puis de la ramener quand on le souhaite. Le Saint-Esprit a donn&eacute; &agrave; J&eacute;sus l&rsquo;autorit&eacute; de faire cela, comme J&eacute;sus lui-m&ecirc;me l&rsquo;a d&eacute;clar&eacute; : &laquo;<strong>Personne ne me prend la vie, mais je la donne de mon propre gr&eacute;. J'ai le pouvoir de le d&eacute;poser et de le reprendre. Ce commandement que j'ai re&ccedil;u de mon P&egrave;re</strong>.&raquo; Comme pr&eacute;dit, J&eacute;sus a cach&eacute; sa vie (prana ou respiration) dans son corps lorsqu&rsquo;il a &eacute;t&eacute; crucifi&eacute;, apparaissant mort &agrave; ceux qui l&rsquo;entouraient. Pourtant, il en est ressorti vivant t&ocirc;t dimanche matin, apr&egrave;s avoir repris sa vie. Cela d&eacute;montre que J&eacute;sus, &eacute;tant Atma, a le pouvoir de donner sa vie puis de revenir &agrave; la vie dans le m&ecirc;me corps, et cette autorit&eacute; lui a &eacute;t&eacute; donn&eacute;e par son P&egrave;re, le Saint-Esprit. De plus, Atma a le pouvoir de prendre la vie des autres et de les envoyer en r&eacute;incarnation.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 120,
verse: ` <b>(42)	L'Évangile de Jean, chapitre 10, verset 30.</b>`,
meaning: ` <b>(10:30) Moi et le Père sommes un. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Atma est le P&egrave;re de Jeeva et, par cons&eacute;quent, Paramatma est responsable de la cr&eacute;ation d'Atma. Par cons&eacute;quent, Atma est aussi le P&egrave;re des &ecirc;tres humains, tandis que Paramatma est le P&egrave;re de l'Atma. Comme J&eacute;sus est Atma, Il est le Fils de Dieu. Quand <strong>un fils pr&ecirc;te une attention particuli&egrave;re &agrave; son p&egrave;re</strong>, cela signifie un &eacute;tat d'union entre le fils et le p&egrave;re. C&rsquo;est l&rsquo;essence de la d&eacute;claration de J&eacute;sus : &laquo;<strong>Moi et mon p&egrave;re ne faisons qu'un</strong>&raquo;, alors qu&rsquo;il dirigeait son attention vers son p&egrave;re, le Saint-Esprit.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 121,
verse: ` <b>(43) L'Évangile de Jean, chapitre 11, verset 25.</b>`,
meaning: ` <b>
(11:25) Jésus lui dit : « Je suis la résurrection et la vie. Celui qui croit en moi vivront, même s'ils meurent. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Dans ce contexte, &laquo; r&eacute;surrection &raquo; indique la naissance, tandis que &laquo; vie &raquo; signifie lib&eacute;ration (moksham), impliquant la libert&eacute; du cycle des renaissances. Puisque la naissance et Moksham sont li&eacute;s &agrave; l'Atma, J&eacute;sus a d&eacute;clar&eacute; : &laquo; Celui qui croit en moi ne rena&icirc;tra pas apr&egrave;s la mort mais atteindra <strong>moksham</strong>.&raquo;</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 122,
verse: `<b>(44)	L'Évangile de Jean, chapitre 11, verset 26.</b>`,
meaning: `<b>(11:26) Celui qui vit en croyant en moi ne mourra jamais. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Celui qui a atteint Moksham conna&icirc;tra la vie &eacute;ternelle et ne fera plus jamais face &agrave; la mort. C&rsquo;est pourquoi J&eacute;sus a proclam&eacute; : &laquo; Quiconque a foi en Dieu atteindra Moksham et ne mourra plus jamais. &raquo;</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 123,
verse: `<b>(45)	L'Évangile de Jean, chapitre 12, verset 25.</b>`,
meaning: `<b>
(12:25) Quiconque aime sa vie la perdra, tandis que quiconque déteste sa vie dans ce monde la gardera pour la vie éternelle.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	La d&eacute;claration de J&eacute;sus : &laquo; Quiconque aime sa vie la perdra &raquo; peut s&rsquo;expliquer ainsi : les humains (Jeeva) ont besoin de la vie pour exister sur terre, et ceux qui s&rsquo;attachent &agrave; leur vie terrestre la perdront in&eacute;vitablement puisqu&rsquo;ils ne peuvent pas vivre &eacute;ternellement. La vie d&rsquo;une personne d&eacute;pend du flux de Prana (force vitale) dans son corps, et une fois qu&rsquo;elle meurt, sa respiration cesse d&eacute;finitivement. Une fois que le dernier souffle quitte le corps et fusionne avec l&rsquo;air ext&eacute;rieur, il ne reviendra jamais. Lorsqu'une personne passe de sa premi&egrave;re naissance &agrave; sa seconde, elle re&ccedil;oit un nouveau souffle (vie), mais l'ancienne n'est jamais retrouv&eacute;e. Par cons&eacute;quent, ceux qui donnent la priorit&eacute; &agrave; leur vie terrestre et s&rsquo;y accrochent finiront par la perdre. Malgr&eacute; cette certitude, les gens aiment naturellement leur vie plus que toute autre chose et cherchent &agrave; prolonger leur s&eacute;jour sur terre.

	Une personne qui d&eacute;sire Moksham et ne souhaite pas vivre dans ce monde d&eacute;teste sa propre vie, ce qui indique un manque d'int&eacute;r&ecirc;t pour les affaires du monde. Une telle personne abandonne le cycle des naissances et atteint la vie &eacute;ternelle. Cette vie est libre de la mort et celui qui y parviendra la prot&eacute;gera. M&ecirc;me si ceux qui atteignent Moksham n&rsquo;ont pas une vie sp&eacute;ciale semblable &agrave; celle d&rsquo;une personne ordinaire, le terme &laquo; vie &eacute;ternelle &raquo; est utilis&eacute; pour nous aider &agrave; comprendre le concept. Il est important de noter que quiconque atteint Moksham restera dans un &eacute;tat d&rsquo;&eacute;ternit&eacute; pour toujours, sans naissance ni mort.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 124,
verse: `<b>(46)	L'Évangile de Jean, chapitre 12, verset 40.</b>`,
meaning: `<b>
(12:40) Il a aveuglé leurs yeux et endurci leur cœur, de sorte qu'ils ne peuvent ni voir de leurs yeux, ni comprendre de leur cœur, ni se tourner – et je les guérirais. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Quand Dieu est venu en tant qu'homme et a dit aux gens la sagesse dont ils avaient besoin, Atma, Dieu dans le corps, a aveugl&eacute; leurs yeux et endurci leur c&oelig;ur afin qu'ils ne puissent ni voir ni comprendre avec leur c&oelig;ur ni se d&eacute;barrasser du karma. Le karma est la cause de leurs souffrances. Dans ce verset, ce qu&rsquo;il est important de noter est que l&rsquo;Atma, cr&eacute;&eacute; par le Saint-Esprit, est dans le corps de chacun et dirige chacun. Bien qu'Atma soit le Fils du Saint-Esprit, le Saint-Esprit, le Cr&eacute;ateur, est n&eacute; en tant qu'homme pour transmettre la sagesse. Bien que celui qui est n&eacute; soit le Saint-Esprit, il est appel&eacute; Fils de Dieu au lieu de Dieu. Selon cela, Atma, qui est dans le corps, devient le Fils du Saint-Esprit. L&rsquo;incarnation du Saint-Esprit en tant qu&rsquo;&ecirc;tre humain est &eacute;galement appel&eacute;e Fils du Saint-Esprit. L&rsquo;Atma dans le corps aveugle les yeux de l&rsquo;homme ignorant et endurcit son c&oelig;ur afin qu&rsquo;il ne comprenne pas les paroles du Fils de Dieu et ne puisse se d&eacute;barrasser de son karma.

	Le Saint-Esprit, le Cr&eacute;ateur, a cr&eacute;&eacute; un fils Atma et l'a plac&eacute; dans le corps humain. De plus, le Saint-Esprit a cr&eacute;&eacute; un autre Fils sous forme humaine pour transmettre la sagesse &agrave; ceux qui &eacute;taient ignorants. Tandis que l'Atma dans le corps humain est toujours pr&eacute;sent, l'incarnation humaine de <strong>Atma </strong>n'appara&icirc;t sur terre que p&eacute;riodiquement pour enseigner la sagesse. M&ecirc;me Lorsque l'incarnation humaine de l'Atma transmet la sagesse &agrave; des individus d&eacute;sint&eacute;ress&eacute;s et envieux du Saint-Esprit, l'Atma dans le corps rend leur intellect (buddhi) incapable de le comprendre. Toutefois, si un individu poss&egrave;de <strong>d&eacute;vouement et int&eacute;r&ecirc;t </strong>dans le Saint-Esprit, l'Atma dans le corps leur permet de comprendre les paroles de l'incarnation humaine de l'Atma. Il faut reconna&icirc;tre &agrave; la fois l'Atma dans le corps et le deuxi&egrave;me Fils, incarn&eacute; par une forme humaine, <strong>pour vraiment comprendre la sagesse du Saint-Esprit</strong>.</div></div>
  </span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 125,
verse: ` <b>(47)	L'Évangile de Jean, chapitre 12, versets 47 et 48.</b>`,
meaning: ` <b>
(12:47) Si quelqu'un entend mes paroles mais ne les tient pas, je ne le juge pas. Car je ne suis pas venu pour juger le monde, mais pour sauver le monde.
<br><br>
(12:48) Il y a un juge pour celui qui me rejette et n'accepte pas mes paroles ; les paroles mêmes que j'ai prononcées les jugeront au dernier jour.`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	On peut dire que celui qui a prononc&eacute; ces mots est l'Atma qui a la forme d'un &ecirc;tre humain. Quand quelqu'un entend mais n&eacute;glige de comprendre la sagesse transmise par Dieu lorsqu'Il vient sous forme humaine, l'Atma sous forme humaine ne juge pas sa prochaine vie sur la base du p&eacute;ch&eacute; et du punya apr&egrave;s la mort. L&rsquo;Atma, qui est venu en tant qu&rsquo;homme pour enseigner la sagesse, n&rsquo;est pas venu pour juger la prochaine vie des humains. Dieu (Atma) est venu en tant qu'homme pour r&eacute;v&eacute;ler sa sagesse aux gens et les sauver. Quelqu'un d'autre juge la vie ult&eacute;rieure d'un homme qui n'&eacute;coute pas les paroles de l'Atma sous forme humaine et ne Le reconna&icirc;t pas comme grand. Il faut savoir qu'un tel juge est l'Atma, qui est toujours pr&eacute;sent dans le corps. L'Atma dans le corps humain d&eacute;cide de la prochaine naissance le jour de la mort sur la base de la sagesse transmise par l'Atma, qui est sous forme humaine. <strong>On ne peut pas conna&icirc;tre le Saint-Esprit &agrave; moins de comprendre le travail de l'Atma dans le corps et de l'Atma (Bhagavan), qui se pr&eacute;sente sous forme humaine.</strong></div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 126,
verse: ` <b>(48)	L'Évangile de Jean, chapitre 12, versets 49 et 50.</b>`,
meaning: ` <b>
(12:49) Car je n'ai pas parlé de moi-même, mais le Père qui m'a envoyé m'a ordonné de dire tout ce que j'ai dit.
<br><br>
(12:50) Je sais que son commandement mène à la vie éternelle. Donc, quoi que je dise, c’est exactement ce que le Père m’a dit de dire.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Il faut comprendre que le <strong>Atma (Dieu)</strong>, venu en tant qu'&ecirc;tre humain, a prononc&eacute; ces paroles. J&eacute;sus, Dieu sous la forme d'un &ecirc;tre humain, a prononc&eacute; cette d&eacute;claration. Chaque fois que Dieu s&rsquo;incarne en tant qu&rsquo;homme, toute sa sagesse vient du Saint-Esprit. Celui qui est venu sous forme humaine a mentionn&eacute; que le Saint-Esprit l&rsquo;avait pouss&eacute; &agrave; transmettre cette sagesse. La sagesse transmise par l'Atma (Bhagavan) sous forme humaine conduit &agrave; <strong>la vie &eacute;ternelle (moksham)</strong>. Bien que celui qui est venu sous forme humaine ne soit pas explicitement identifi&eacute; comme Dieu, il a d&eacute;clar&eacute; : &laquo;<strong>Tout ce que je dis, c'est exactement ce que le P&egrave;re m'a dit de dire</strong>&raquo;, r&eacute;v&eacute;lant que celui qui parle est le Saint-Esprit. Avec cela, il devient &eacute;vident que celui qui parle est le Saint-Esprit. Cependant, conform&eacute;ment &agrave; la doctrine spirituelle, Il convient de souligner que le Saint-Esprit est le P&egrave;re et que l'Atma qui est venu sous forme humaine est le Fils.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 127,
verse: ` <b>(49) L'Évangile de Jean, chapitre 14, verset 7.</b>`,
meaning: ` <b>
(14:7) Si vous me connaissez vraiment, vous connaîtrez aussi mon Père. Désormais, vous le connaissez et vous l’avez vu.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Ce verset est similaire &agrave; celui mentionn&eacute; pr&eacute;c&eacute;demment (Jean 12&nbsp;:49, 12&nbsp;:50). Comme je l'ai mentionn&eacute; pr&eacute;c&eacute;demment, le P&egrave;re et le Fils sont identiques&nbsp;; pourtant, selon la doctrine spirituelle, il faut dire que le P&egrave;re et le Fils sont s&eacute;par&eacute;s. J&eacute;sus a dit : &laquo;<strong>Si tu me connais vraiment, tu conna&icirc;tras aussi mon p&egrave;re</strong>.&raquo; Bien que Dieu, lorsqu&rsquo;Il est venu sous forme humaine, soit appel&eacute; Fils de Dieu, en fait, le P&egrave;re Lui-m&ecirc;me est sous la forme du Fils. Par cons&eacute;quent, le verset d&eacute;clare : &laquo;<strong>Si tu connais le Fils, tu connais le P&egrave;re</strong>.&raquo;</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 128,
verse: ` <b>(50) L'Évangile de Jean, chapitre 14, versets 8 et 9.</b>`,
meaning: ` <b>
(14:8) Philippe dit : « Seigneur, montre-nous le Père et cela nous suffira. »
<br><br>
(14:9) Jésus répondit : « Ne me connais-tu pas, Philippe, même après avoir été si longtemps parmi toi ? Quiconque m'a vu a vu le Père. Comment pouvez-vous dire : « montre-nous le Père ? » </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ce verset r&eacute;v&egrave;le que celui qui a une forme visible est le Saint-Esprit. C&rsquo;est pourquoi J&eacute;sus a dit : <strong>"Quiconque m'a vu a vu le P&egrave;re."</strong></div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 129,
verse: `<b>(51)	L'Évangile de Jean, chapitre 14, verset 10. </b>`,
meaning: `<b>
(14:10) Ne croyez-vous pas que je suis dans le Père et que le Père est en moi ? Les paroles que je vous dis, je ne les prononce pas avec ma propre autorité. C'est plutôt le Père, vivant en moi, qui fait son œuvre. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Lorsqu'une personne est d&eacute;guis&eacute;e, elle et son d&eacute;guisement sont indissociables. Par cons&eacute;quent, lorsqu&rsquo;un homme riche prend l&rsquo;apparence d&rsquo;un mendiant, l&rsquo;individu riche et le mendiant coexistent. L'homme riche prend l'apparence d'un mendiant lors de son d&eacute;guisement. M&ecirc;me si le mendiant s&rsquo;aventure dans un bazar pour mendier, c&rsquo;est en r&eacute;alit&eacute; l&rsquo;homme riche qui accomplit cet acte. L&rsquo;homme riche invisible joue le r&ocirc;le d&rsquo;un mendiant. Comme le riche r&eacute;side dans le mendiant, et que les paroles du mendiant proviennent du riche, on peut affirmer que le riche est dans le mendiant, et r&eacute;ciproquement, le mendiant est dans le riche : ils existent ensemble. Puisque la personnalit&eacute; int&eacute;rieure a une plus grande importance que la fa&ccedil;ade ext&eacute;rieure, toutes les actions entreprises d&eacute;guis&eacute;es sont ex&eacute;cut&eacute;es par le moi int&eacute;rieur. &Eacute;tant donn&eacute; que la personne int&eacute;rieure est plus cruciale que l&rsquo;apparence ext&eacute;rieure, il est exact d&rsquo;affirmer que toutes les t&acirc;ches accomplies par la personne visible ext&eacute;rieurement appartiennent &agrave; l&rsquo;individu int&eacute;rieur. Malgr&eacute; son apparence ext&eacute;rieure, le mendiant incarne le riche qui sommeille en lui. Dans un sens, on peut affirmer que le mendiant est effectivement la personne riche. Le Saint-Esprit, cach&eacute; sous la forme humaine, rev&ecirc;t une signification. Il est imp&eacute;ratif de reconna&icirc;tre que le d&eacute;guisement est temporaire, tandis que l'&acirc;me int&eacute;rieure est &eacute;ternelle. On peut affirmer que <strong>celui qui est en J&eacute;sus est le Saint-Esprit</strong>. C&rsquo;est pourquoi J&eacute;sus a proclam&eacute; : &laquo; Le P&egrave;re est en moi, et je suis dans le P&egrave;re. &raquo;</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 130,
verse: `<b>(52)	L'Évangile de Jean, chapitre 14, verset 6.</b>`,
meaning: `<b>
(14:6) Jésus répondit : « Je suis le chemin, la vérité et la vie. Personne ne vient le Père sauf par moi. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	En nous appuyant sur l&rsquo;exemple pr&eacute;c&eacute;dent, la voie &agrave; suivre pour comprendre l&rsquo;homme riche passe par le mendiant. Si le mendiant est appr&eacute;hend&eacute;, l&rsquo;identit&eacute; de l&rsquo;homme riche devient &eacute;vidente. Une fois l&rsquo;homme riche reconnu, on peut acc&eacute;der &agrave; la richesse qu&rsquo;il poss&egrave;de. De m&ecirc;me, la voie pour comprendre Dieu passe par l&rsquo;incarnation en tant qu&rsquo;&ecirc;tre humain. Si quelqu&rsquo;un comprend celui qui a pris forme humaine, il comprendra &eacute;galement le Dieu r&eacute;sidant en Lui. La connaissance de Dieu m&egrave;ne &agrave; l&rsquo;obtention de la vie &eacute;ternelle inh&eacute;rente &agrave; Dieu. C&rsquo;est pourquoi, un jour, J&eacute;sus a d&eacute;clar&eacute; : &laquo;<strong>Je suis le chemin, la v&eacute;rit&eacute; et la vie</strong>.&raquo; Quand J&eacute;sus dit : &laquo; Je suis le chemin &raquo;, cela signifie <strong>le chemin pour comprendre Dieu &agrave; travers moi</strong>. Il a &eacute;galement d&eacute;clar&eacute; : &laquo; Je suis la v&eacute;rit&eacute; &raquo;, ce qui implique qu'Il est la v&eacute;ritable manifestation de Dieu. De plus, il a proclam&eacute; : &laquo;<strong>je suis la vie &eacute;ternelle</strong>.&raquo; Cette affirmation est fond&eacute;e sur le fait que le vrai Dieu sous la forme de J&eacute;sus a d&eacute;clar&eacute; que toute personne qui le conna&icirc;t atteindrait la paraloka (moksham) et conna&icirc;trait la vie &eacute;ternelle sans affronter la mort dans la paraloka.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 131,
verse: ` <b>(53)	L'Évangile de Jean, chapitre 14, verset 16.</b>`,
meaning: `<b>
(14:16) Je demanderai au Père, et Il vous donnera un autre Avocat pour vous aider et être avec vous pour toujours. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le Saint-Esprit ne demeure pas en permanence sous forme humaine parmi le peuple. Parfois, le Saint-Esprit change d&rsquo;apparence et entre dans la vie des gens lorsque cela est n&eacute;cessaire. Lorsque le Saint-Esprit a pris la forme de J&eacute;sus, il a v&eacute;cu parmi le peuple pendant seulement 33 ans. Sur ces 33 ann&eacute;es, Il a transmis la sagesse pendant seulement trois ans. Avant m&ecirc;me d&rsquo;avoir accompli trois ans, Il quitta le peuple apr&egrave;s seulement deux ans et trois mois. J&eacute;sus a dit : &laquo; Je prierai mon P&egrave;re d&rsquo;envoyer une seconde fois un autre avocat (Adaranakarta), qui vivra plus longtemps que moi et enseigne la sagesse. &raquo; Celui qui vient est la m&ecirc;me personne que celui qui dit qu'il implore celui qui vient. C'est le m&ecirc;me qui vient. C'est le m&ecirc;me qui a dit qu'Il solliciterait celui qui vient. C'est le m&ecirc;me qui a dit qu'Il enverrait un autre Avocat (Consolateur). <strong>Il n'y en a qu'un</strong>. C'est le m&ecirc;me qui a dit, c'est le m&ecirc;me qui a demand&eacute;, et c'est le m&ecirc;me qui vient. Si l&rsquo;on ne comprend pas qu&rsquo;il n&rsquo;y a qu&rsquo;un seul qui joue tous les personnages, celui qui dit, demande et vient peut para&icirc;tre diff&eacute;rent. Sans reconna&icirc;tre que <strong>il n'y en a qu'un qui orchestre ces r&ocirc;les</strong>, nous ne parvenons pas &agrave; comprendre le Dieu devant nous sous forme humaine, le Dieu qui implore et le Dieu qui arrive Il est crucial de comprendre que celui qui implore le P&egrave;re en tant que J&eacute;sus est le prochain Consolateur. L&rsquo;Avocat qui arrive est le Saint-Esprit.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 132,
verse: `<b>(54)	L'Évangile de Jean, chapitre 14, verset 17.</b>`,
meaning: `<b>
(14:17) Le monde ne peut pas l’accepter parce qu’il ne le voit ni ne le connaît. Mais vous le connaissez, car il vit avec vous et sera en vous. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Le terme &laquo; monde (loka) &raquo; peut &ecirc;tre compris comme englobant les individus qui subissent les cons&eacute;quences du karma sur terre. Lorsque Dieu prend forme humaine, ceux qui sont li&eacute;s par le karma peuvent ne pas le percevoir ou le reconna&icirc;tre. Ceux qui ne le reconnaissent pas sont incapables de recevoir ses enseignements ou la sagesse divine. Seuls ceux qui ont acquis une certaine sagesse gr&acirc;ce &agrave; J&eacute;sus seront capables de reconna&icirc;tre le Consolateur qui vient apr&egrave;s J&eacute;sus sous forme humaine. Le Consolateur demeure au sein de ces individus, et ceux qui Le connaissent coexisteront avec Lui, r&eacute;alisant Sa pr&eacute;sence en eux sous forme d'Atma.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 133,
verse: `<b>(55) L'Évangile de Jean, chapitre 14, verset 20.</b>`,
meaning: ` <b>
(14:20) Ce jour-là, vous réaliserez que je suis en mon Père, que vous êtes en moi et que je suis en vous. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Avant d&rsquo;approfondir ce verset, il faut saisir la v&eacute;ritable forme de Dieu. Dieu est divis&eacute; en trois aspects, impr&eacute;gnant le monde entier. Bien qu'il n'y ait qu'un seul Dieu, Il est divis&eacute; en trois &acirc;mes : Jeevatma, Atma et Paramatma. <strong>Jeevatma r&eacute;side dans un endroit sp&eacute;cifique dans le corps de tous les &ecirc;tres vivants, tandis que l'Atma s'&eacute;tend dans l'int&eacute;gralit&eacute; du corps de chaque &ecirc;tre vivant. Paramatma est pr&eacute;sent &agrave; la fois &agrave; l'int&eacute;rieur et &agrave; l'ext&eacute;rieur du corps, existant dans chaque mol&eacute;cule</strong>. Un individu qui comprend ce concept est consid&eacute;r&eacute; comme un gnani complet. Paramatma, le Cr&eacute;ateur, prend forme humaine pour transmettre la sagesse aux gens. Au cours de cette manifestation, il affirme qu'il est le Fils et que le P&egrave;re est Paramatma. Cette terminologie sert &agrave; &eacute;tablir une distinction, mais on peut affirmer que le Fils et le P&egrave;re sont intrins&egrave;quement identiques. Dieu appara&icirc;t sous l'apparence du "<strong>Fils</strong>&raquo; et r&eacute;side sur terre tout au long de sa vie, transmettant la sagesse. Cela sert de m&eacute;thode de diffusion de la sagesse. Alternativement, Dieu a envoy&eacute; un Atma de Lui-m&ecirc;me pour cr&eacute;er, soutenir et tuer les Jeevas. L'Atma, qui gouverne les corps des &ecirc;tres vivants, est &eacute;galement consid&eacute;r&eacute; comme le Fils de Dieu. Atma r&eacute;side dans Paramatma et Jeevatma existe dans le royaume d'Atma. Par cons&eacute;quent, l&rsquo;expression &laquo;<strong>Je suis (Atma) en mon P&egrave;re</strong>" est utilis&eacute; au lieu de dire "<strong>Je suis (Atma) en mon P&egrave;re, le Paramatma. </strong>Comme Jeeva est pr&eacute;sent dans le corps r&eacute;gi par l'Atma, le verset souligne : &laquo; Vous (Jeevatmas) &ecirc;tes en moi (Atma). &raquo; L'Atma, diffus&eacute; dans tout le corps, est &eacute;galement dispers&eacute; en vous (Jeevatma), qui se trouve dans un endroit sp&eacute;cifique. Par cons&eacute;quent, le verset d&eacute;clare : &laquo;<strong>Le jour o&ugrave; tu conna&icirc;tras la sagesse des &acirc;mes, tu sauras que je suis en toi</strong>.&raquo; Ceux qui ne connaissent pas le concept des trois &acirc;mes ne parviennent pas &agrave; discerner qui r&eacute;side en qui. Donc, <strong>il est crucial de comprendre le th&eacute;or&egrave;me de Thraitha, qui explique comment Dieu est sous la forme de trois &acirc;mes.</strong></div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 134,
verse: ` <b>(56)	L'Évangile de Jean, chapitre 14, versets 25 et 26.</b>`,
meaning: `<b>
(14:25) Tout cela, je l'ai dit alors que j'étais encore avec  vous.
<br><br>
(14:26) Mais l'Avocat, le Saint-Esprit, que le Père enverra en mon nom, vous enseignera toutes choses et vous rappellera tout ce que je vous ai dit. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Un jour, J&eacute;sus s&rsquo;est adress&eacute; &agrave; ses disciples en disant : &laquo; Pendant que je suis encore avec vous, je dis ces paroles. &raquo; De plus, Il a transmis : &laquo; Un autre avocat (Adaranakarta) viendra vers vous apr&egrave;s mon d&eacute;c&egrave;s. &raquo; De plus, il a expliqu&eacute; : &laquo;<strong>L'Avocat, qui vient comme moi, vous rappellerait tout ce que j'avais dit et enseignerait tout ce que je n'avais pas dit.</strong>.&raquo; Un aspect important &agrave; consid&eacute;rer ici est l&rsquo;utilisation par J&eacute;sus du nom &laquo; Avocat &raquo;. Clarifiant la signification du mot Avocat, Il a d&eacute;clar&eacute; : &laquo;<strong>L'avocat est le Saint-Esprit que le P&egrave;re enverra en mon nom</strong>.&raquo; Un examen attentif du verset r&eacute;v&egrave;le qu&rsquo;il commence par &laquo; le P&egrave;re &raquo; et se termine par &laquo; le Saint-Esprit &raquo;. Cette s&eacute;quence sugg&egrave;re que le p&egrave;re de J&eacute;sus est le Saint-Esprit. On peut postuler que le Fils est celui qui est d&eacute;guis&eacute;, tandis que le P&egrave;re est celui qui n'est pas d&eacute;guis&eacute;. En r&eacute;alit&eacute;, ils ne font qu&rsquo;un<strong>. Celui qui transmet la sagesse et &eacute;limine le karma est appel&eacute; l'Avocat (Consolateur).</strong>. Lorsque J&eacute;sus a affirm&eacute; que Dieu est celui qui envoie Dieu au nom de l&rsquo;Avocat, il a expliqu&eacute; : &laquo; Le P&egrave;re est le Saint-Esprit qui enverra mon nom. &raquo; Ceci explique que <strong>Dieu prend une forme, adopte l'apparence de l'Avocat et transmet la sagesse divine</strong>. Il est &agrave; noter que J&eacute;sus a transmis ces paroles pour que m&ecirc;me ceux qui ne le savent pas puissent comprendre.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 135,
verse: ` <b>(57)	L'Évangile de Jean, chapitre 15, verset 23. </b>`,
meaning: `<b>
(15:23) Celui qui me hait hait aussi mon Père.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	J&rsquo;affirme depuis le d&eacute;but que Dieu est cach&eacute; sous la forme de J&eacute;sus et que le nom attribu&eacute; au d&eacute;guisement de Dieu est J&eacute;sus. En effet, personne d&rsquo;autre que le Saint-Esprit n&rsquo;est venu au nom de J&eacute;sus. Par cons&eacute;quent, quiconque blasph&egrave;me J&eacute;sus blasph&egrave;me &eacute;galement Paramatma. Le Consolateur (Avocat) n&rsquo;est pas celui qui viendra apr&egrave;s J&eacute;sus. J&eacute;sus &eacute;tait aussi un avocat. Chaque fois que Dieu prend une forme humaine, il devrait syst&eacute;matiquement &ecirc;tre appel&eacute; l&rsquo;Avocat. <strong>L'Avocat transmet la sagesse qui sert de rem&egrave;de au karma, </strong>et Dieu seul fournit des enseignements qui &eacute;radiquent le karma. On peut donc affirmer que l&rsquo;Avocat est synonyme du Saint-Esprit. Cependant, reconna&icirc;tre Dieu lorsqu&rsquo;Il prend forme humaine sur Terre s&rsquo;av&egrave;re &ecirc;tre un d&eacute;fi. Ce d&eacute;fi est soulign&eacute; par les individus du christianisme qui pr&eacute;tendent &ecirc;tre des gnani et se r&eacute;f&egrave;rent &agrave; J&eacute;sus comme &agrave; un fr&egrave;re. Il est soulign&eacute; que J&eacute;sus n&rsquo;est le fr&egrave;re de personne. Qu&rsquo;il apparaisse sous le nom de J&eacute;sus ou sous un autre nom, il est identifi&eacute; comme le Saint-Esprit, faisant de lui un p&egrave;re et non un fr&egrave;re.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 136,
verse: `<b>(58)	L'Évangile de Jean, chapitre 15, versets 24 et 25 </b>`,
meaning: ` <b>
(15:24) Si je n'avais pas fait parmi eux les œuvres que personne d'autre n'a faites, ils ne seraient pas coupables de péché. Ils l’ont vu, et pourtant ils m’ont haï, moi et mon Père
<br><br>
(15:25) Mais c’est pour accomplir ce qui est écrit dans leur Loi : « Ils m’ont haï sans raison. »</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	La t&acirc;che que personne ne peut accomplir sur terre est de pardonner et d&rsquo;effacer les p&eacute;ch&eacute;s d&rsquo;une personne. J&eacute;sus a d&eacute;clar&eacute; que les p&eacute;ch&eacute;s n&rsquo;auraient pas &eacute;t&eacute; commis s&rsquo;il n&rsquo;avait pas entrepris l&rsquo;&oelig;uvre consistant &agrave; pardonner le karma des autres. Lorsqu&rsquo;Il pardonna publiquement les p&eacute;ch&eacute;s de certains individus, ceux qui &eacute;taient envieux et ignorants de Sa grandeur nourrissaient de la haine envers Lui. Ha&iuml;r J&eacute;sus &eacute;quivaut &agrave; ha&iuml;r le Saint-Esprit. Ceux qui nourrissaient de la haine envers Lui <strong>sans raison valable </strong>encouru un p&eacute;ch&eacute;.
  </div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 137,
verse: ` <b>(59)	L'Évangile de Jean, chapitre 15, versets 26 et 27. </b>`,
meaning: `<b>
(15:26) Quand viendra le Défenseur que je vous enverrai de la part du Père – l'Esprit de vérité qui sort du Père – Il témoignera de moi
<br><br>
(15:27) Et toi aussi, tu dois témoigner, car tu es avec moi depuis le début. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	J&eacute;sus est venu en tant qu'Avocat (Bhagavan) et a mentionn&eacute; qu'Il enverrait un autre Avocat de la part du P&egrave;re aupr&egrave;s du peuple. Conform&eacute;ment &agrave; la loi spirituelle, il transmettait ce qu&rsquo;il &eacute;tait cens&eacute; dire. Cependant, il n&rsquo;y a pas d&rsquo;autre Avocat aupr&egrave;s du P&egrave;re ; <strong>il n'y a qu'un seul Dieu </strong>qui appara&icirc;t occasionnellement sous les traits d'un avocat. Personne d&rsquo;autre ne l&rsquo;envoie. Lorsque J&eacute;sus et le Saint-Esprit sont consid&eacute;r&eacute;s comme identiques, l&rsquo;envoyeur et celui qui vient sont identiques. J&eacute;sus a d&eacute;clar&eacute; : &laquo;<strong>L'Esprit de v&eacute;rit&eacute; vient comme mon avocat et il t&eacute;moignera de moi</strong>.&raquo; Lorsque celui qui vient et celui qui s&rsquo;en va sont identiques, il n&rsquo;est pas &eacute;tonnant que celui qui vient parle de celui qui s&rsquo;en va. Tandis que le prochain Avocat parlera de J&eacute;sus, ses disciples se souviendront sans aucun doute de lui. Par cons&eacute;quent, les disciples affirmeront que J&eacute;sus est venu et a transmis la sagesse.
  </div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 138,
verse: ` <b>(60)	L'Évangile de Jean, chapitre 16, verset 7. </b>`,
meaning: `<b>
(16:7) Mais en vérité, je vous le dis, c'est pour votre bien que je m'en vais. Si je ne m'en vais, l'Avocat ne viendra pas vers vous ; mais si je pars, je vous l'enverrai.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	&Agrave; l&rsquo;instar d&rsquo;une seule personne jouant deux personnages dans une pi&egrave;ce de th&eacute;&acirc;tre, le deuxi&egrave;me personnage appara&icirc;t sur sc&egrave;ne apr&egrave;s la sortie du premier personnage. Puisque c'est la m&ecirc;me personne qui joue les deux r&ocirc;les, le premier personnage doit aller dans les coulisses pour que la personne du premier personnage assume le deuxi&egrave;me r&ocirc;le. Il n&rsquo;est pas possible pour le deuxi&egrave;me personnage d&rsquo;&eacute;merger &agrave; moins que le premier personnage ne rentre dans les coulisses. Cette transition se produit parce que la m&ecirc;me personne incarne les deux personnages. De m&ecirc;me, celui qui est venu dans le r&ocirc;le de J&eacute;sus devrait revenir sur terre dans un deuxi&egrave;me personnage. Ainsi, lorsque J&eacute;sus quittera le peuple, celui qui a jou&eacute; le r&ocirc;le de J&eacute;sus reviendra dans un second r&ocirc;le. Le Saint-Esprit a assum&eacute; le r&ocirc;le de J&eacute;sus. S&rsquo;Il devait revenir pour &ecirc;tre avec le peuple, Il devons abandonner son r&ocirc;le de J&eacute;sus et r&eacute;appara&icirc;tre dans un nouveau r&ocirc;le, avec un nouveau nom et une nouvelle apparence. Ainsi, J&eacute;sus a d&eacute;clar&eacute; : &laquo;<strong>C'est pour votre bien que je m'en vais. Si je ne pars pas, l'Avocat ne viendra pas vers vous</strong>.&raquo; Sans mentionner explicitement qu&rsquo;il reviendrait en tant qu&rsquo;avocat, il a d&eacute;clar&eacute; : &laquo; Je vous l&rsquo;enverrai quand je partirai. &raquo; &Agrave; partir de ces paroles, toute personne intelligente discernera facilement que celui qui part et celui qui revient sont les m&ecirc;mes.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 139,
verse: `<b>(61)	L'Évangile de Jean, chapitre 16, verset 8.  </b>`,
meaning: ` <b>
(16:8) Quand Il viendra, Il prouvera que le monde a tort en matière de péché, de justice et de jugement.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Apr&egrave;s que le r&ocirc;le de J&eacute;sus ait disparu dans les coulisses, l'Avocat (Bhagavan) viendra dans le deuxi&egrave;me r&ocirc;le et la deuxi&egrave;me incarnation. Le terme &laquo; Avocat &raquo; repr&eacute;sente l&rsquo;incarnation de Dieu, mais ce n&rsquo;est pas le nom de Dieu. Celui qui vient en tant qu&rsquo;Avocat pourrait avoir n&rsquo;importe quel nom dans le monde. Personne ne peut donc d&eacute;terminer si cette personne est l&rsquo;incarnation de Dieu. Bien que personne ne connaisse la forme ou le nom du D&eacute;fenseur, il existe une certaine chance de le reconna&icirc;tre &agrave; travers ses actions. Quand le <strong>Avocat </strong>vient sur terre, il discute du p&eacute;ch&eacute;, r&eacute;v&eacute;lant comment une personne acquiert le p&eacute;ch&eacute;, o&ugrave; il est stock&eacute; jusqu'au moment de la mort, et les cons&eacute;quences du p&eacute;ch&eacute;. <strong>Il explique que la sagesse divine est n&eacute;cessaire pour se d&eacute;barrasser des p&eacute;ch&eacute;s acquis</strong>, comme les p&eacute;ch&eacute;s sont comme du bois de chauffage et la sagesse est comme le feu. Ce n&rsquo;est que par la sagesse que l&rsquo;on peut &eacute;chapper au p&eacute;ch&eacute; et acqu&eacute;rir la sagesse divine. Le p&eacute;ch&eacute; d&rsquo;une personne qui n&rsquo;atteint pas la sagesse divine dans la vie persiste jusqu&rsquo;&agrave; la mort. Une telle personne doit rena&icirc;tre le m&ecirc;me jour, la m&ecirc;me minute et le m&ecirc;me instant apr&egrave;s sa mort. Le jour du d&eacute;c&egrave;s est appel&eacute; le dernier jour. Le dernier jour de la vie devient le premier jour de la prochaine vie. La personne doit rena&icirc;tre dans la seconde qui suit sa mort. On peut dire que le d&eacute;calage horaire entre la mort et la renaissance n'est que d'un dixi&egrave;me de seconde. Dans ce court laps de temps, <strong>Atma </strong>juge le d&eacute;funt en fonction de son p&eacute;ch&eacute; et de son punya. Atma d&eacute;cide alors de ce que la personne doit manger, boire et exp&eacute;rimenter &agrave; chaque instant de sa seconde naissance. La vie du nouveau-n&eacute; est d&eacute;termin&eacute;e par le jugement port&eacute; lors de la mort. La mani&egrave;re dont une personne vivra sa prochaine vie est d&eacute;cid&eacute;e en fonction du jugement de son dernier jour. L'Atma, qui est avec la personne d&eacute;c&eacute;d&eacute;e, la juge correctement sur la base de ses actes depuis son enfance. Les actions &agrave; entreprendre dans la prochaine vie sont d&eacute;cid&eacute;es en fonction du karma existant. Personne ne peut annuler cette d&eacute;cision et chacun doit accepter le jugement.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 140,
verse: `<b>(62)	L'Évangile de Jean, chapitre 16, verset 12. </b>`,
meaning: `<b>
(16:12) J'ai bien plus à te dire, plus que ce que tu peux supporter maintenant. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Lorsque Dieu s&rsquo;incarne en tant qu&rsquo;humain, il est crucial de transmettre soigneusement la sagesse, en tenant compte de l&rsquo;humeur des gens, et les enseignements doivent &ecirc;tre adapt&eacute;s en fonction de l&rsquo;&eacute;poque et du contexte. La sagesse divine doit &ecirc;tre transmise avec sensibilit&eacute;, compte tenu de la volont&eacute; du public de recevoir la v&eacute;rit&eacute;. En revanche, si vous informez une femme fianc&eacute;e qu'elle est d&eacute;j&agrave; votre &eacute;pouse, il se peut qu'elle ne l'accepte pas avant le mariage, ce qui pourrait entra&icirc;ner des conflits.Pourtant, partager les m&ecirc;mes informations apr&egrave;s le mariage apporterait du bonheur sans contestation. De m&ecirc;me, lorsqu&rsquo;on pr&eacute;sente la sagesse divine &agrave; ceux qui ne tol&egrave;rent pas la v&eacute;rit&eacute;, il existe un risque d&rsquo;incompr&eacute;hension et d&rsquo;opposition. Par cons&eacute;quent, m&ecirc;me lorsque Dieu prend forme humaine, la v&eacute;rit&eacute; doit &ecirc;tre partag&eacute;e judicieusement. Par exemple, si l&rsquo;on affirmait que Ravana Brahma est une incarnation de Dieu, le public contemporain pourrait saisir le concept dans une certaine mesure. Cependant, si la m&ecirc;me d&eacute;claration avait &eacute;t&eacute; faite il y a 50 ans, il y aurait peut-&ecirc;tre eu un d&eacute;saccord, les gens consid&eacute;rant Ravana comme diabolique et monstrueux. Il existe donc des cas o&ugrave; la sagesse cens&eacute;e &ecirc;tre partag&eacute;e plus t&ocirc;t doit &ecirc;tre diff&eacute;r&eacute;e. Dans ce contexte, J&eacute;sus a reconnu ce principe lorsqu&rsquo;il a d&eacute;clar&eacute; : &laquo;<strong>J'ai bien plus &agrave; te dire, plus que ce que tu peux supporter maintenant</strong>&raquo;, &agrave; ses disciples. Reconnaissant qu'il &eacute;tait temps pour lui de quitter l'humanit&eacute;, il informa ses disciples que le futur avocat transmettrait ce qu'il n'avait pas dit.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 141,
verse: `<b>(63)	L'Évangile de Jean, chapitre 16, verset 13. </b>`,
meaning: `<b>
(16:13) Mais quand Lui, l’Esprit de vérité, viendra, Il vous guidera dans toute la vérité. Il ne parlera pas de lui-même ; Il ne dira que ce qu’il entend et il vous dira ce qui est encore à venir. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	J&eacute;sus a proph&eacute;tis&eacute; au sujet du prochain Avocat. Le terme &laquo; Esprit de v&eacute;rit&eacute; &raquo; signifie &laquo;<strong>Dieu de sagesse</strong>.&rsquo; J&eacute;sus a transmis que le Dieu qui viendrait apr&egrave;s lui conduirait tout le monde dans la v&eacute;rit&eacute; et ne communiquerait que la v&eacute;rit&eacute;. Bien que Dieu ait pris une forme humaine et se soit comport&eacute; de mani&egrave;re humaine, J&eacute;sus a mentionn&eacute; : &laquo; En tant qu&rsquo;humain, il n&rsquo;enseigne rien de lui-m&ecirc;me ; Il ne dit que ce qu&rsquo;il entend. &raquo; Si l&rsquo;on se demande qui a inform&eacute; l&rsquo;Avocat, il n&rsquo;existe qu&rsquo;une seule source. Puisqu&rsquo;il n&rsquo;y a qu&rsquo;un seul qui vient, c&rsquo;est lui-m&ecirc;me qui transmet la sagesse. Par cons&eacute;quent, il est &eacute;vident que la personne visible peut aussi exprimer ce que Dieu a dit. Seul Dieu peut communiquer la sagesse de Dieu. Plut&ocirc;t que d&rsquo;affirmer que les humains sont incapables de transmettre la sagesse de Dieu, il est dit que l&rsquo;Avocat ne dira que ce qu&rsquo;Il a entendu.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 142,
verse: ` <b>(64) L'Évangile de Jean, chapitre 16, versets 14 et 15. </b>`,
meaning: ` <b>
(16:14) Il me glorifiera car c'est de moi qu'Il recevra ce qu'Il vous fera connaître.
<br><br>
(16:15) Tout ce qui appartient au Père est à moi. C'est pourquoi j'ai dit que l'Esprit recevra de moi ce qu'Il vous fera connaître.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Si vous regardez ce verset, certaines parties ont du sens tandis que d&rsquo;autres n&rsquo;en ont pas. Ce verset est comme jouer &agrave; un jeu de cache-cache avec les gens. Plus t&ocirc;t, J&eacute;sus a mentionn&eacute; que le nouvel Esprit de v&eacute;rit&eacute; enseignerait ce qu&rsquo;il entend. Par la suite, dans le verset suivant, Il a d&eacute;clar&eacute; que l&rsquo;Avocat prendrait ce qu&rsquo;Il avait re&ccedil;u de J&eacute;sus et le transmettrait au peuple. De plus, J&eacute;sus a affirm&eacute; que l&rsquo;Avocat exprimerait des choses que J&eacute;sus n&rsquo;avait pas dites. Cependant, dans la d&eacute;claration actuelle, J&eacute;sus mentionne que l'Avocat informerait les gens de ce qu'il avait re&ccedil;u de J&eacute;sus. L&rsquo;apparente incoh&eacute;rence des d&eacute;clarations de J&eacute;sus peut pr&ecirc;ter &agrave; confusion. Il y a pourtant une raison d&eacute;lib&eacute;r&eacute;e &agrave; cette ambigu&iuml;t&eacute;. J&eacute;sus a choisi de s'exprimer d'une mani&egrave;re qui <strong>ceux v&eacute;ritablement </strong><strong>int&eacute;ress&eacute;s par sa sagesse comprendraient, tandis que ceux qui manquent d'int&eacute;r&ecirc;t ne comprendraient pas.</strong>. Il a en outre d&eacute;clar&eacute; que le futur avocat partagerait ce que J&eacute;sus avait dit pour le glorifier. J&eacute;sus a ensuite affirm&eacute; que tout ce qui appartient au P&egrave;re lui appartient, le P&egrave;re faisant r&eacute;f&eacute;rence au Saint-Esprit ou &agrave; Dieu. En soulignant que la sagesse de Dieu lui appartient et que l&rsquo;Avocat transmettrait ce qu&rsquo;il avait re&ccedil;u de J&eacute;sus, il devient &eacute;vident que J&eacute;sus et le Saint-Esprit sont synonymes. Au lieu de d&eacute;clarer explicitement : &laquo;<strong>je suis Dieu</strong>", J&eacute;sus l'a formul&eacute; comme suit: "<strong>Toutes les paroles de Dieu sont &agrave; moi</strong>.&raquo;</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 143,
verse: ` <b>(65)	L'Évangile de Jean, chapitre 16, verset 16. </b>`,
meaning: `<b>
(16:16) Jésus poursuivit en disant : « Dans peu de temps, vous ne me verrez plus, et puis après un peu de temps, vous me verrez. » </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	J&eacute;sus fit savoir &agrave; ses disciples qu'ils ne le verraient plus apr&egrave;s un certain temps, indiquant ainsi son d&eacute;part du peuple et la cessation de son apparition. Il a &eacute;galement mentionn&eacute; qu'ils le reverraient apr&egrave;s un petit moment, ce qui implique qu'il quitterait sa forme physique, pour ne pas r&eacute;appara&icirc;tre dans la m&ecirc;me manifestation corporelle. Cette d&eacute;claration a rendu les disciples perplexes, les amenant &agrave; se demander pourquoi J&eacute;sus parlait de le revoir apr&egrave;s un petit moment. Lorsque J&eacute;sus a d&eacute;clar&eacute; : &laquo; Dans peu de temps, vous ne me verrez plus, et puis apr&egrave;s un peu de temps, vous me verrez &raquo;, certains se sont peut-&ecirc;tre demand&eacute; s'il se cacherait temporairement puis r&eacute;appara&icirc;trait. Cependant, dans un cas pr&eacute;c&eacute;dent, J&eacute;sus avait expliqu&eacute; : &laquo; J&rsquo;irai. L'avocat ne viendra pas vers vous &agrave; moins que j'y aille. J'irai et je l'enverrai.&raquo; Ainsi, J&eacute;sus sugg&eacute;rait qu&rsquo;Il tiendrait Sa promesse de partir et qu&rsquo;apr&egrave;s un certain temps, ils Le reverraient &agrave; travers le prochain Avocat, qui &eacute;tait aussi J&eacute;sus. Dans ce contexte, le verset devient coh&eacute;rent lorsqu'on se rend compte que celui (J&eacute;sus) qui part et celui (l'Avocat) qui revient sont identiques. J&eacute;sus a soulign&eacute; que voir l&rsquo;un ou l&rsquo;autre &eacute;quivaut &agrave; n&rsquo;en voir qu&rsquo;un seul, puisque J&eacute;sus et l&rsquo;Avocat sont une seule et m&ecirc;me personne.</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 144,
verse: ` <b>(66) L'Évangile de Jean, chapitre 16, versets 17, 18, 19, 20, 21 et 22. </b>`,
meaning: `<b>
(16:17) Alors quelques-uns de ses disciples se dirent entre eux : « Que veut-il dire en disant : Dans peu de temps vous ne me verrez plus, et puis dans peu de temps vous me verrez ? « Parce que je vais chez le Père » ?
<br><br>
(16:18) Ils n’arrêtaient pas de demander : « Que veut-Il dire par « un peu de temps » ? Nous ne le faisons pas comprenez ce qu’Il ​​dit.
<br><br>
(16:19) Jésus vit qu'ils voulaient l'interroger à ce sujet, alors il leur dit : « Vous demandez-vous mutuellement ce que je voulais dire quand je vous ai dit : « Dans peu de temps, vous ne me verrez plus, et puis après tu me verras dans un moment' ?
<br><br>
(16:20) En vérité, je vous le dis, vous pleurerez et vous pleurerez tandis que le monde se réjouira. Vous serez affligé, mais votre chagrin se transformera en joie.
<br><br>
(16:21) Une femme qui accouche d'un enfant souffre parce que son heure est venue ; mais quand son bébé naît, elle oublie l'angoisse à cause de sa joie qu'un enfant naisse au monde.
<br><br>
(16:22) Ainsi, avec vous : C'est maintenant votre temps de chagrin, mais je vous reverrai et vous vous réjouirez, et personne ne vous enlèvera votre joie. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Lorsque J&eacute;sus pronon&ccedil;a ces mots : &laquo; Dans peu de temps, vous ne me verrez plus, et puis dans peu de temps vous me verrez &raquo;, les gens ont eu du mal &agrave; comprendre. En r&eacute;ponse, J&eacute;sus a illustr&eacute; le concept en utilisant la parabole d&rsquo;une femme qui accouche. Il a transmis que, tout comme la femme ressent des douleurs lors de l'accouchement, les disciples subiraient une certaine d&eacute;tresse &agrave; cause de son d&eacute;part. Cependant, Il les a rassur&eacute;s en leur disant qu&rsquo;ils &eacute;prouveraient une joie et un bonheur semblables &agrave; ceux d&rsquo;une femme qui oublie la douleur une fois son enfant n&eacute;. J&eacute;sus s'est adress&eacute; aux personnes pr&eacute;sentes, reconnaissant qu'il y aurait une p&eacute;riode de douleur caus&eacute;e par son d&eacute;part, mais a soulign&eacute; que cette tristesse serait &eacute;clips&eacute;e par la joie de son retour.
  </div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 145,
verse: ` <b>(67)	L'Évangile de Jean, chapitre 16, verset 25. </b>`,
meaning: `<b>
(16:25) Bien que j'aie parlé au sens figuré, un temps vient où je n'utiliserai plus ce genre de langage mais où je vous parlerai clairement de mon Père.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
	Les paroles de J&eacute;sus, comme mentionn&eacute; pr&eacute;c&eacute;demment, &eacute;taient reconnues comme obscures, causant des difficult&eacute;s &agrave; comprendre et conduisant &agrave; la confusion. J&eacute;sus lui-m&ecirc;me a admis avoir parl&eacute; au sens figur&eacute; pour emp&ecirc;cher une compr&eacute;hension imm&eacute;diate. Il a &eacute;galement affirm&eacute; : &laquo; Je ne dirai pas au sens figur&eacute; &agrave; l&rsquo;avenir. Je vais tout vous dire clairement. Cependant, m&ecirc;me cette affirmation semble quelque peu ambigu&euml;. J&eacute;sus a d&eacute;clar&eacute; qu'il partirait bient&ocirc;t et que l'Avocat avec le Saint-Esprit viendrait pour tout &eacute;lucider. Il a pr&eacute;cis&eacute; que l'Avocat ne viendrait que s'il partait et que les disciples seraient attrist&eacute;s par son d&eacute;part mais se r&eacute;jouiraient de le revoir. Maintenant, ajoute-t-il : &laquo;<strong>Jusqu&rsquo;&agrave; pr&eacute;sent, j&rsquo;ai dit obscur&eacute;ment. Quand je reviendrai, je te dirai tout clairement</strong>.&raquo; Cette d&eacute;claration introduit un certain degr&eacute; d&rsquo;incertitude quant &agrave; savoir si celui qui vient est un autre Avocat ou si J&eacute;sus lui-m&ecirc;me reviendra.</div></div>
</span>`
},
{
chapterName: "L'Écriture de l'Apocalypse de Jean",
chapterNumber: 6,
pageNumber: 146,
verse: ` <b>(1)	L'Apocalypse de Jean, chapitre 9, versets 4, 5 et 6.</b>`,
meaning: `<b>
(9:4) Il leur fut dit de ne pas nuire à l'herbe de la terre, ni à aucune plante ou arbre, mais seulement aux personnes qui n'avaient pas le sceau de Dieu sur le front.
<p>
<div class="container">
          <img src="assets/img/Devunimudra_inside.png"   style="width:100%;">
          <div class="top-left">
           <u> The Seal Of God</u>
          </div>
          <div class="top-right1">
            Nature
           </div>
           <div class="top-right2">
           Holy Spirit
          </div>
          <div class="dm-top-right3">
           Father
          </div>
          <div class="dm-top-right4">
           Son
          </div>
          <div class="dm-bottom-left2">
            Body
           </div>
          <div class="bottom-left">
            <u> For All Religions</u>
           </div>
        </div>
</p>
(9:5) Ils n'étaient pas autorisés à les tuer mais seulement à les torturer pendant cinq mois. Et l'agonie qu'ils souffraient était semblable à celle de la piqûre d'un scorpion lorsqu'il frappe.
<br><br>
(9:6) Durant ces jours-là, les gens chercheront la mort mais ne la trouveront pas ; ils désireront mourir, mais la mort leur échappera. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
	Le troisi&egrave;me verset pr&eacute;c&eacute;dant ces versets, Apocalypse 9&nbsp;:3, d&eacute;clare : &laquo;<strong>De la fum&eacute;e, des sauterelles sont descendues sur la terre et ont re&ccedil;u un pouvoir semblable &agrave; celui des scorpions de la terre.</strong>.&raquo; Ce verset indique que les sauterelles sont sorties de la fum&eacute;e. Toutefois, la fum&eacute;e mentionn&eacute;e ici n&rsquo;est pas produite par la combustion de bois ou d&rsquo;autres mat&eacute;riaux. Il s&rsquo;agit plut&ocirc;t d&rsquo;un nuage dense qui appara&icirc;t &agrave; l&rsquo;aube d&rsquo;un jour d&rsquo;hiver, lorsque le soleil n&rsquo;est pas encore lev&eacute;. Ce nuage r&eacute;duit la lumi&egrave;re du soleil et cr&eacute;e l'obscurit&eacute;. Les essaims de criquets proviennent de ce nuage sombre. Lorsqu&rsquo;ils arrivent sur terre en grands groupes comme une arm&eacute;e, ils sont connus sous le nom d&rsquo;&laquo; essaims de criquets &raquo;. Personne ne sait exactement d&rsquo;o&ugrave; viennent les criquets, mais on pense qu&rsquo;ils proviennent de la brume nuageuse du ciel. Leur naissance et leur croissance restent un myst&egrave;re, et ils &eacute;mergent de la fum&eacute;e du vide sans aucune origine claire. Les essaims de criquets peuvent se compter par centaines, milliers, voire millions.

	Les criquets sont porteurs de nombreuses maladies qui affligent les humains. Bien qu&rsquo;ils puissent appara&icirc;tre comme des sauterelles ordinaires, ils constituent une arm&eacute;e d&rsquo;anges, servant de serviteurs de Dieu, envoy&eacute;s sur son ordre. Dieu a ordonn&eacute; aux sauterelles d&rsquo;affliger les humains, et par son commandement, cette arm&eacute;e de sauterelles affecte l&rsquo;humanit&eacute;. &Eacute;mergeant d'un royaume invisible, ils se cachent et infligent des morsures aux gens, p&eacute;n&eacute;trant dans leur corps sous forme de maladies et provoquant des tourments. Dieu les a dot&eacute;s d'autant de poison que les scorpions au sol. Les humains souffrent consid&eacute;rablement &agrave; cause de l&rsquo;arriv&eacute;e des sauterelles du monde invisible, qui servent d&rsquo;agents de souffrance pour les p&eacute;ch&eacute;s humains. Il leur &eacute;tait demand&eacute; de ne pas nuire &agrave; l'herbe de la terre, aux plantes ou aux arbres, &agrave; l'exception des humains. Alors que l&rsquo;hypoth&egrave;se courante est que les criquets nuisent &agrave; l&rsquo;herbe, aux plantes et aux arbres, le verset pr&eacute;cise que ces criquets ne nuisent pas &agrave; la v&eacute;g&eacute;tation mais ciblent les humains. L'origine des criquets, leur subsistance et leur mission restent inconnus des humains.

	Il ressort clairement des quatre versets mentionn&eacute;s ici que l&rsquo;arm&eacute;e des anges sous forme de sauterelles vient affliger les humains. L&rsquo;arm&eacute;e des serviteurs de Dieu, prenant la forme de sauterelles, poss&egrave;de le pouvoir de tourmenter les humains jusqu&rsquo;&agrave; cinq mois, mais ils n&rsquo;ont pas le pouvoir de causer la mort. Lorsque les criquets piquent les humains de mani&egrave;re invisible, ils provoquent une maladie qui inflige une douleur semblable &agrave; la piq&ucirc;re d'un scorpion. L'intensit&eacute; de la souffrance varie en fonction du karma individuel, allant d'un l&eacute;ger inconfort au niveau d'une piq&ucirc;re de scorpion. Comme personne ne peut &eacute;chapper &agrave; cette douleur, les humains doivent la supporter. Le verset indique que lors de souffrances graves, les gens peuvent souhaiter la mort pour s'&eacute;chapper, mais il ne leur est pas permis de le faire. mettre fin &agrave; leurs jours. Les humains doivent donc endurer la douleur. Le verset indique en outre que m&ecirc;me la mort leur &eacute;chappe, ce qui signifie que les humains ne peuvent &eacute;chapper aux souffrances caus&eacute;es par les sauterelles.

	Si les criquets, issus de nuages de fum&eacute;e invisibles, reviennent cent fois, ils ne deviendront visibles qu'une seule fois. Restant invisibles, ils peuvent avoir divers effets sur les humains, causant des dommages sous forme de maladie ou par d&rsquo;autres moyens. Le verset indique que leur pr&eacute;judice est dirig&eacute; uniquement contre les humains et peut se manifester sous n&rsquo;importe quelle forme. Il est dit que les humains subiront ce mal parce que les sauterelles ont re&ccedil;u l&rsquo;ordre de l&rsquo;infliger. M&ecirc;me si les humains recherchent la mort en raison de souffrances insupportables, celle-ci reste insaisissable car la mort les fuit. Bien que les humains souffrent de diverses mani&egrave;res &agrave; cause des &laquo; sauterelles invisibles (serviteurs) &raquo; que Dieu a envoy&eacute;es, ils ne r&eacute;fl&eacute;chissent pas aux causes de leur souffrance. Ils sont incapables d&rsquo;&eacute;chapper &agrave; leurs souffrances gr&acirc;ce aux paroles de Dieu.

	De nombreuses nouvelles maladies apparaissent dans le monde, mais les humains ne r&eacute;fl&eacute;chissent souvent pas &agrave; leurs origines. Identifier une nouvelle maladie prend du temps, et trouver un rem&egrave;de peut prendre encore plus de temps. Tout comme un rem&egrave;de est d&eacute;couvert pour une maladie, une autre maladie insaisissable peut faire surface. &Agrave; c&ocirc;t&eacute; des maladies, il existe des affections et des souffrances impossibles &agrave; diagnostiquer. M&ecirc;me si certaines personnes reconnaissent que des forces invisibles contribuent &agrave; la souffrance, personne ne sait comment y faire face efficacement. <strong>La seule fa&ccedil;on d&rsquo;&eacute;viter les souffrances caus&eacute;es par les anges invisibles est de porter le Sceau de Dieu, symbole de la puissance de Dieu. Dieu a ordonn&eacute; &agrave; ses serviteurs de pers&eacute;cuter uniquement ceux qui ne portent pas le sceau de Dieu.</strong>. M&ecirc;me si certains pensent que les criquets visibles peuvent nuire aux plantes et aux arbres, <strong>Dieu a ordonn&eacute; &agrave; ses sauterelles invisibles d'infliger du mal uniquement &agrave; ceux qui n'ont pas le sceau de Dieu sur le front.</strong>. Dans la derni&egrave;re &eacute;criture divine, les versets 5&nbsp;:22 et 22&nbsp;:32 mentionnent le Sceau de Dieu. L'Akshara Parabrahma Yoga de la premi&egrave;re &eacute;criture divine, la Bhagavad-Gita, fait allusion au Sceau de Dieu. Dans mes &eacute;critures, &laquo;<strong>Le sceau de Dieu</strong>&raquo;, nous d&eacute;taillons &agrave; quoi ressemble le Sceau de Dieu. Au lieu de remettre en question les autres, ayez foi en Dieu et portez le Sceau de Dieu, car il n&rsquo;est li&eacute; &agrave; aucune religion particuli&egrave;re. Le Sceau de Dieu est mentionn&eacute; dans trois &eacute;critures divines. L'Apocalypse de la Bible explique les d&eacute;sastres caus&eacute;s par le non-port du Sceau de Dieu. Les chr&eacute;tiens ne devraient pas h&eacute;siter &agrave; porter le sceau de Dieu ; c'est une question de foi. <strong>Quelle que soit votre religion, prot&eacute;gez-vous de la souffrance. &Eacute;coutez-moi et portez &laquo; Le Sceau de Dieu &raquo;, qui &eacute;tait auparavant inconnu. Prot&eacute;gez-vous de la souffrance.</strong></div></div>
</span>`
},
{
chapterName: "Trois doigts",
chapterNumber: 7,
pageNumber: 147,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
	Le portrait de J&eacute;sus appara&icirc;t rarement aux gens. En y regardant de plus pr&egrave;s, <strong>On peut voir J&eacute;sus montrant trois doigts avec sa main droite</strong>. J&eacute;sus a transmis la sagesse divine pendant environ trois ans, et m&ecirc;me apr&egrave;s sa mort, son portrait semble transmettre des enseignements au peuple. Bien que les interpr&eacute;tations puissent varier, d&rsquo;apr&egrave;s ce que j&rsquo;ai compris en voyant l&rsquo;image, elle contient un message crucial tir&eacute; des enseignements de J&eacute;sus. Dans la premi&egrave;re &eacute;criture divine, Dieu est repr&eacute;sent&eacute; en trois parties : <strong>Kshara, Akshara et Purushottama</strong>. De m&ecirc;me, dans la derni&egrave;re &eacute;criture divine, Dieu est d&eacute;crit comme ayant trois aspects : <strong>Passager, conducteur et t&eacute;moin</strong>. Dans la deuxi&egrave;me &eacute;criture divine, Dieu est dit &ecirc;tre en trois parties : <strong>Fils, P&egrave;re et Saint-Esprit</strong>. Les trois aspects de Dieu sont expos&eacute;s dans la Bhagavad-Gita, la Bible et le Coran comme une m&ecirc;me sagesse. La sagesse fondamentale de ces trois &eacute;critures r&eacute;side dans la compr&eacute;hension des trois aspects de Dieu. Une fois que l&rsquo;on comprend les trois aspects de Dieu, une compr&eacute;hension compl&egrave;te de la sagesse de Dieu devient possible.

	Cependant, les hindous qui lisent la Bhagavad-Gita ne savent pas qui <strong>Jeevatma (Kshara) </strong>et <strong>Atma (Akshara) </strong>sont. De m&ecirc;me, les chr&eacute;tiens ne savent pas qui sont le Fils et le P&egrave;re. Les musulmans ne savent pas qui <strong>le Passager et le Conducteur sont</strong>. Dans la Bhagavad-Gita que j&rsquo;ai &eacute;crite, j&rsquo;ai mentionn&eacute; que les hindous ignorent l&rsquo;existence du Jeeva p&eacute;rissable et du Dieu &eacute;ternel pr&eacute;sent dans le corps. Dans la Bible, j'ai aussi not&eacute; que les chr&eacute;tiens ne comprennent pas les d&eacute;tails des deux fils - <strong>le Fils et le P&egrave;re</strong>. De m&ecirc;me, dans l&rsquo;&Eacute;criture &laquo;<strong>Les versets de diamant dans l'&Eacute;criture divine finale</strong>", j'ai mentionn&eacute; que les musulmans ne connaissent pas le <strong>deux Allah</strong>. Les gens de ces trois religions n&rsquo;ont peut-&ecirc;tre aucune id&eacute;e des deux autres parties de Dieu, qui constituent l&rsquo;essence principale de leurs &eacute;critures respectives. Le seul terme que tout le monde reconna&icirc;t est &laquo; Dieu &raquo;. Sans le savoir, tous adorent la troisi&egrave;me partie, connue sous le nom de Purushottama dans la Bhagavad-Gita, le Saint-Esprit dans la Bible et le T&eacute;moin dans le Coran. Dieu Lui-m&ecirc;me a d&eacute;clar&eacute; qu&rsquo;il n&rsquo;est pas juste d&rsquo;adorer la troisi&egrave;me partie de Dieu (le Saint-Esprit), qui est au-del&agrave; de toute adoration et de tout dharma. Pourtant, tout le monde adore &laquo;<strong>le Dieu qui n'a besoin de rien</strong>.&raquo; On peut dire que l&rsquo;ignorance humaine consiste &agrave; ne pas savoir que Dieu n&rsquo;a pas besoin de notre adoration.

	Concernant les chr&eacute;tiens, ils ignorent le &laquo;<strong>deux fils</strong>&raquo; mentionn&eacute; dans leurs &Eacute;critures. Bien que la Bible mentionne deux Fils, les chr&eacute;tiens croient qu&rsquo;il n&rsquo;y a qu&rsquo;un seul Fils et ne connaissent pas la sagesse de deux Fils. Ils ne savent peut-&ecirc;tre pas qu&rsquo;il y a deux Fils &ndash; <strong>le Fils Permanent et le Fils Temporaire</strong>. La Bible les d&eacute;signe comme <strong>le Fils et le Fils unique</strong>, mais les chr&eacute;tiens ne savent pas qui sont ces deux Fils. De m&ecirc;me, personne dans aucune religion ne peut savoir qu'il existe deux dieux - <strong>le Dieu qui est le P&egrave;re et le Dieu qui est le Grand-P&egrave;re</strong>. M&ecirc;me si cette v&eacute;rit&eacute; est pr&eacute;sent&eacute;e scientifiquement dans les &Eacute;critures, certaines personnes peuvent ne pas y croire, et d&rsquo;autres nient carr&eacute;ment l&rsquo;existence de deux Dieux. Bien que les &Eacute;critures d&eacute;clarent qu&rsquo;il n&rsquo;y a qu&rsquo;un seul Dieu &agrave; adorer, il n&rsquo;est pas clair si ce Dieu est le P&egrave;re ou le Grand-P&egrave;re.

	Ceux qui poss&egrave;dent la sagesse divine et ceux qui lisent les &Eacute;critures n&rsquo;adorent qu&rsquo;un seul Dieu en fonction de leur compr&eacute;hension. Ils peuvent adorer le <strong>Grand-p&egrave;re-Dieu</strong>, qui ne devrait pas &ecirc;tre ador&eacute;, au lieu du <strong>Dieu-P&egrave;re</strong>, qui devrait &ecirc;tre ador&eacute;. Les termes P&egrave;re-Dieu et Grand-P&egrave;re-Dieu peuvent sembler nouveaux, mais cette question se trouve en r&eacute;alit&eacute; dans leurs &eacute;critures. Souvent, les gens ne parviennent pas &agrave; comprendre la vraie sagesse. Lorsque quelqu&rsquo;un partage la v&eacute;rit&eacute; avec lui, il peut r&eacute;agir avec col&egrave;re et la rejeter. Dans ma Bible, j'ai lu qu'il y a deux Fils &ndash; le Fils de l'homme et le Fils de Dieu &ndash; et que le Saint-Esprit, qui est dans la position de Grand-P&egrave;re, ne doit pas &ecirc;tre ador&eacute;. Ceux qui consid&egrave;rent le Saint-Esprit comme Dieu et l&rsquo;adorent comme tel peuvent maintenant se trouver dans un &eacute;tat de confusion. J&eacute;sus a enseign&eacute; de mani&egrave;re significative sur les deux Fils et le Saint-Esprit. Il a m&ecirc;me d&eacute;peint &laquo;<strong>Les deux Fils et leur P&egrave;re, le Saint-Esprit</strong>&raquo;, en utilisant ses doigts. J&eacute;sus a utilis&eacute; sa main droite pour montrer les deux doigts &ndash; l&rsquo;index et le majeur &ndash; ainsi que le pouce. J'ai compris que le pouce est une indication du Saint-Esprit dans le portrait. Puisque Dieu est celui qui accorde le pouvoir de perception &agrave; l'intellect (buddhi), selon la vraie sagesse, J&eacute;sus a montr&eacute; &agrave; la fois le P&egrave;re (Atma) et le Fils (Bhagavan) avec deux doigts (index et majeur). Il est entendu qu'ils repr&eacute;sentent le Fils permanent et le Fils temporaire. L'&Eacute;criture r&eacute;sume que <strong>le Saint-Esprit ne sera pas connu tant que ces deux Fils ne seront pas connus</strong>. Tout le monde devrait savoir que le secret spirituel qui devrait &ecirc;tre connu de toute la soci&eacute;t&eacute; humaine est <strong>l'affaire des deux fils</strong>. Si vous regardez les trois doigts de J&eacute;sus sur l&rsquo;image de la page suivante, ils nous rappellent le Saint-Esprit et les deux Fils &ndash; Atma et le Fils unique.
</div></div>
<ion-row><ion-col class="ion-text-center">
<img src="assets/img/jesus.png"/>
</ion-col></ion-row>
</span>`
},
{
chapterName: "Vendredi saint ou mauvais vendredi ?",
chapterNumber: 8,
pageNumber: 148,
verse: ``,
meaning: ``,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
	Certains &eacute;v&eacute;nements de la vie apportent du bonheur, tandis que d'autres apportent du chagrin &agrave; une personne. Pendant les moments de joie, un individu est joyeux et appr&eacute;cie la bonne nourriture et les bons v&ecirc;tements. &Agrave; l&rsquo;inverse, face au chagrin, on perd l&rsquo;app&eacute;tit et l&rsquo;int&eacute;r&ecirc;t pour divers aspects de la vie. Le festival de Diwali en Inde, par exemple, est c&eacute;l&eacute;br&eacute; avec des p&eacute;tards pour comm&eacute;morer la d&eacute;faite du m&eacute;chant d&eacute;mon Narakasura ce jour-l&agrave;. Dans les temps anciens, les scribes, les pharisiens et les &eacute;rudits qui conduisaient J&eacute;sus devant le tribunal et orchestraient son ex&eacute;cution se r&eacute;jouissaient de sa mort. Ils c&eacute;l&eacute;braient chaque ann&eacute;e l&rsquo;anniversaire de la mort de J&eacute;sus comme le Vendredi Saint, le consid&eacute;rant comme un jour de bonheur. Depuis lors, le festival est connu sous le nom de &laquo; Vendredi saint &raquo;.

	Au d&eacute;but, des individus qui n&rsquo;&eacute;taient pas conscients de la grandeur de J&eacute;sus, ainsi que des scribes et des &eacute;rudits, c&eacute;l&eacute;braient la f&ecirc;te. Cela s&rsquo;est produit alors que la valeur et la sagesse de J&eacute;sus &eacute;taient inconnues. &Agrave; l&rsquo;heure actuelle, m&ecirc;me ceux qui connaissent la sagesse de J&eacute;sus c&eacute;l&egrave;brent le jour de la mort de J&eacute;sus comme le Vendredi Saint. M&ecirc;me s&rsquo;il est de coutume de c&eacute;l&eacute;brer joyeusement un bon jour, le jour de la mort de J&eacute;sus s&rsquo;annonce comme un jour douloureux pour ses fid&egrave;les. Il est surprenant de voir des chr&eacute;tiens, qui professent J&eacute;sus comme leur Dieu, porter joyeusement de nouveaux v&ecirc;tements et manger de la bonne nourriture sans exprimer leur chagrin face &agrave; la mort de J&eacute;sus ce jour-l&agrave;.

	En effet, le jour o&ugrave; J&eacute;sus a &eacute;t&eacute; tu&eacute; devrait &ecirc;tre qualifi&eacute; de &laquo; mauvais jour &raquo;. Les fid&egrave;les de J&eacute;sus devraient exprimer leur tristesse et s&rsquo;abstenir de manger ce jour-l&agrave;. Il est d&eacute;routant de c&eacute;l&eacute;brer cette journ&eacute;e comme une f&ecirc;te et de l&rsquo;appeler &laquo; Vendredi saint &raquo; comme s&rsquo;il s&rsquo;agissait d&rsquo;un jour de bont&eacute;. M&ecirc;me ceux qui consid&egrave;rent J&eacute;sus comme le Dieu de leur famille participent &agrave; la c&eacute;l&eacute;bration, r&eacute;v&eacute;lant leur manque de compr&eacute;hension de la valeur de J&eacute;sus. Ceux qui v&eacute;n&egrave;rent profond&eacute;ment J&eacute;sus devraient consid&eacute;rer ce jour comme un &laquo; mauvais vendredi &raquo;. Les pr&eacute;dicateurs ont la responsabilit&eacute; d&rsquo;&eacute;duquer les gens sur la signification du mauvais vendredi et de les d&eacute;courager de le c&eacute;l&eacute;brer. Les individus qui ne parviennent pas &agrave; faire la distinction entre un jour de d&eacute;c&egrave;s et un anniversaire ne comprennent pas la grandeur de la sagesse de Dieu. Lorsque le chef de famille d&eacute;c&egrave;de, toute la famille pleure, et le m&ecirc;me respect devrait &ecirc;tre accord&eacute; lorsque J&eacute;sus, qui devrait &ecirc;tre estim&eacute; plus qu'un membre de la famille, meurt. C&eacute;l&eacute;brer la mort de J&eacute;sus comme une f&ecirc;te sans chagrin est une erreur, pensant que c&rsquo;est un jour de bon augure. J&eacute;sus a dit : &laquo;<strong>Celui qui aime son p&egrave;re ou sa m&egrave;re plus que moi n'est pas digne de moi ; quiconque aime son fils ou sa fille plus que moi n'est pas digne de moi</strong>.&raquo; Lorsque les gens pleurent la mort d&rsquo;un membre de leur famille mais ne pleurent pas la mort de J&eacute;sus et la c&eacute;l&egrave;brent plut&ocirc;t comme une f&ecirc;te, comment peuvent-ils &ecirc;tre dignes de la mis&eacute;ricorde de J&eacute;sus ? Par cons&eacute;quent, appelons le Vendredi Saint un &laquo; Mauvais Vendredi &raquo; pour honorer J&eacute;sus. Cela devient un acte de respect envers J&eacute;sus lorsque nous consid&eacute;rons ce jour comme un jour mauvais et que nous pleurons sans le c&eacute;l&eacute;brer. Sinon, <strong>nous exprimons notre admiration pour J&eacute;sus seulement avec nos paroles, pas dans notre c&oelig;ur</strong>. Si vous honorez, aimez, adorez et priez J&eacute;sus, alors propagez la notion du Vendredi Saint comme du Mauvais Vendredi et aidez tout le monde &agrave; la comprendre. Alors vous deviendrez un v&eacute;ritable d&eacute;vot de J&eacute;sus. Lorsque vous abandonnez le Vendredi saint, rien de mal ne vous arrive ; seules de bonnes choses arrivent.</div></div>
<ion-row><ion-col class="ion-text-center">
Par<br>
Le seul gourou des trois religions<br>
<b>Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu</b><br><br>
<strong>M&ecirc;me si un millier de personnes le soutiennent, un mensonge ne peut pas devenir v&eacute;rit&eacute;. </strong><br>
<strong>mille personnes nient - la v&eacute;rit&eacute; ne peut pas devenir un mensonge </strong>
</ion-col></ion-row>
</span>`
},
{
chapterName: "Une lettre d'un hindou",
chapterNumber: 9,
pageNumber: 149,
verse: ``,
meaning: ``,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem">
<div class="poemtext">
<em>Tout d&rsquo;abord, prosternations &agrave; Swami&hellip;.</em>

    Jai Srirama! Je m'appelle Pittala Thirumalesha, 36 ans, village de Nalgonda, district de Telangana. Profession : Emploi, Caste : Mudiraju (caste Boya), Religion : Religion hindoue, Profession du p&egrave;re : Premier agriculteur puis tireur de pousse-pousse, Profession de la m&egrave;re : vendeuse de fruits, Mon &eacute;ducation : <strong>M.Sc., B.Ed. (Math&eacute;matiques).</strong>

    Monsieur, j'&eacute;cris cette lettre avec l'intention que mon introduction spirituelle fasse quelque chose de bien pour cette soci&eacute;t&eacute;. Apr&egrave;s avoir lu votre &Eacute;criture, &laquo;&nbsp;<strong>Joyaux dans la deuxi&egrave;me &eacute;criture divine</strong>&raquo;, Je voulais &eacute;crire cette lettre. Il semble qu&rsquo;&eacute;crire des &eacute;critures sur la Bible soit l&rsquo;acte le plus audacieux d&rsquo;un Swamiji hindou (Indhu). Beaucoup pensent qu'un Swamiji peut &eacute;crire la Bhagavad-Gita mais pas la Bible. J'ai d&eacute;j&agrave; lu vos &eacute;critures, la Bhagavad-Gita et le Coran. Maintenant, j&rsquo;ai &eacute;galement appris la sagesse de la Bible gr&acirc;ce &agrave; vos &eacute;crits. J'ai compris la sagesse divine dans les trois &eacute;critures des trois religions &agrave; travers vous. Connaissant l&rsquo;&eacute;tat actuel de la soci&eacute;t&eacute;, j&rsquo;exprime certains de mes points de vue avec de bonnes intentions &agrave; travers cette lettre.

    La premi&egrave;re &eacute;criture que j'ai lue est <strong>&laquo;Le secret du triangle des Bermudes.&raquo; </strong>Gr&acirc;ce &agrave; cette &eacute;criture, j'ai appris le secret de la disparition des avions et des navires dans le Triangle des Bermudes. Je suis si heureux d'avoir r&eacute;alis&eacute; ce fait &eacute;trange qui ressemblait &agrave; un film hollywoodien. Alors lisez l'&Eacute;criture <strong>"Fant&ocirc;mes - Bhutas (Les vrais incidents)" </strong>et j&rsquo;ai appris des informations scientifiques sur le &laquo; monde invisible (subtil) &raquo;. En outre, j&rsquo;ai &eacute;t&eacute; tr&egrave;s surpris lorsque j&rsquo;ai appris comment fonctionnent le gouvernement de Dieu et la Loi divine, et je remercie mon Dieu de conna&icirc;tre le plus grand myst&egrave;re. J'ai ensuite lu les &eacute;critures <strong>"L'histoire d'un chercheur de v&eacute;rit&eacute;" </strong>et <strong>&laquo; Sri Krishna Dieu ou Bhagavan ? </strong>J'&eacute;tais si heureuse d'apprendre un grand secret de l'&eacute;criture &laquo; Sri Krishna Dieu ou Bhagavan ? Maintenant que j'ai trouv&eacute; une destination pour ma vie, je suis heureux d'avoir visit&eacute; le temple de Krishna &agrave; Prabodhashramamu, Chinna Podamala, et d'avoir ador&eacute; le Seigneur Krishna. Depuis ma visite au Prabodhashramam en juillet 2012, je suis chaque jour ravi de joie d'avoir absorb&eacute; la sagesse de vos 93 &eacute;critures et 150 conf&eacute;rences.

    &Agrave; travers l'&Eacute;criture <strong>&laquo; Traditions du temple (v&eacute;rit&eacute;s cach&eacute;es) &raquo;, </strong>J'ai appris l'importance des temples. J'ai saisi le vrai sens des traditions supprim&eacute;es de <strong>&laquo;&nbsp;Indu Sampradayas (Traditions).&nbsp;&raquo; </strong>De l'&Eacute;criture <strong>&laquo; Mana Pandugalu (Nos festivals) &raquo; </strong>J&rsquo;ai non seulement compris la signification de &laquo; Pandu (fruit) &raquo; dans &laquo; Panduga (festival) &raquo;, mais j&rsquo;ai &eacute;galement compris le but essentiel des festivals et l&rsquo;intention de la pens&eacute;e pr&eacute;-planifi&eacute;e de nos a&icirc;n&eacute;s. Comme vous l&rsquo;avez dit dans ce verset, il est vrai &agrave; cent pour cent qu&rsquo;il y a d&rsquo;abord un d&eacute;veloppement spirituel, puis un d&eacute;veloppement personnel et ensuite un d&eacute;veloppement social. Chaque &eacute;criture qui vient de vous est une mine de sagesse. Chaque pr&eacute;dication est un tr&eacute;sor du dharma. Vos paroles sont b&eacute;n&eacute;fiques non seulement aux humains mais aussi &agrave; tous les &ecirc;tres vivants. C&rsquo;est la v&eacute;rit&eacute; que je dis apr&egrave;s avoir v&eacute;cu ces six derni&egrave;res ann&eacute;es.

    J'ai &eacute;t&eacute; d&eacute;courag&eacute; lorsque votre religion, les hindous, a prononc&eacute; des paroles d&eacute;sobligeantes contre vous, le grand empereur. Mais je partage quelques informations &agrave; travers cette lettre pour que tout le monde soit conscient des faits.

    Le th&eacute;or&egrave;me de Thraitha Bhagavad-Gita a transmis le v&eacute;ritable message du Seigneur Krishna. Les &eacute;critures de Swami <strong>&laquo;Paroles de sagesse dans la Derni&egrave;re &Eacute;criture Divine (704 pages)&raquo; </strong>et <strong>&laquo;Les diamants dans la derni&egrave;re &eacute;criture divine&raquo; </strong>a fait comprendre au monde la sagesse divine que Gabriel (Le Soleil) a envoy&eacute;e au Proph&egrave;te Mohammed. L'&eacute;criture du Yogeeswarlu <strong>&laquo; Joyaux de la Seconde &Eacute;criture divine (352 pages) &raquo; </strong>a transmis le vrai message des &Eacute;vangiles de J&eacute;sus.

    Voici mon appel aux intellectuels &eacute;clips&eacute;s par la haine religieuse, aux d&eacute;mons religieux impitoyables, aux gnanis incomplets et fous de religion, aux monstres politiques qui ne connaissent pas la valeur de l'ashram, aux faux proph&egrave;tes qui trompent la soci&eacute;t&eacute; avec la gale des castes et la folie religieuse, aux rationalistes qui n'en connaissent pas la raison, les communaut&eacute;s de recherche de la v&eacute;rit&eacute; qui ne sont pas conscientes de la v&eacute;rit&eacute; et les anciens qui poussent la soci&eacute;t&eacute; vers la superstition en utilisant les mots Dieu, &Acirc;me, adoration et sagesse. Veuillez lire attentivement au moins un des versets de Swami pour conna&icirc;tre la grandeur du <strong>&laquo; Th&eacute;or&egrave;me de Thraitha &raquo; </strong>et faites tr&egrave;s attention &agrave; ce qui est dit. Observons une des paroles de Swami.

    <strong>&laquo; Les religions sont interdites. Les castes sont irrationnelles. Tous trois &ndash; la Bhagavad-Gita, la Bible et le Coran &ndash; font partie de la m&ecirc;me &eacute;criture divine. Si votre sentiment d&eacute;passe la caste, rejoignez imm&eacute;diatement le Prabodha Seva Samithi. Dieu veut que tu sois gnani &ndash; Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu &raquo;</strong>

    Swamiji a non seulement prononc&eacute; les paroles ci-dessus, mais a &eacute;galement c&eacute;l&eacute;br&eacute; des mariages inter-castes et inter-religieux. Il a &eacute;galement &eacute;pous&eacute; une autre femme de caste. Est-ce de la haine religieuse et des &eacute;crits empoisonn&eacute;s sur un si grand Swami ? Hommes, r&eacute;fl&eacute;chissez une fois avec discr&eacute;tion.

    Les &eacute;critures de Swami transmettaient la v&eacute;ritable sagesse des po&egrave;mes Vemana. Ils racontent le vrai sens des po&egrave;mes philosophiques de Veerabrahmam. L'Atmalinga Shatakam transmettait des informations spirituelles. Il a fourni bon nombre des plus grands secrets inconnus du monde et les informations divines qui contribuent &agrave; la prosp&eacute;rit&eacute; spirituelle de l&rsquo;humanit&eacute;. De nombreux ath&eacute;es qui ont tir&eacute; la sagesse de ses &eacute;critures sont devenus de vrais croyants. M&ecirc;me les imb&eacute;ciles sont devenus rationalistes. Les croyants aveugles sont devenus des scientifiques spirituels gr&acirc;ce &agrave; l&rsquo;approche scientifique. M&ecirc;me les terroristes ont chang&eacute; et sont devenus des gnanis.

    <strong>Un hindou qui conna&icirc;t sa sagesse est un vrai Indu (un vrai gnani).</strong>

    <strong>Un chr&eacute;tien qui conna&icirc;t sa sagesse est un vrai chr&eacute;tien (un vrai croyant en Dieu). Un musulman qui conna&icirc;t sa sagesse est un vrai musulman (vraiment ob&eacute;issant &agrave; Dieu).</strong>

    Ses &eacute;critures &eacute;radiquent le karma et pardonnent le p&eacute;ch&eacute;. Si vous appliquez Son &eacute;criture sur le corps o&ugrave; vous souffrez avec d&eacute;votion et croyance, elle s'accrochera sans aucun soutien jusqu'&agrave; ce qu'elle d&eacute;truise le karma qui l'a provoqu&eacute;e et apporte un soulagement. M&ecirc;me si cela peut surprendre, il s&rsquo;agit d&rsquo;une v&eacute;rit&eacute; flagrante, bas&eacute;e sur mon exp&eacute;rience.

    C&rsquo;est gr&acirc;ce &agrave; ses &eacute;crits que le monde a appris la v&eacute;rit&eacute; sur &laquo; Bhagavan Ravana Brahma &raquo;, l&rsquo;incarnation de Dieu dans le Thraitha Yuga. M&ecirc;me Sita Devi, que tout le monde consid&egrave;re comme la victime, n'a pas accus&eacute; Ravana Brahma. Pourquoi les Aryens qui ont &eacute;crit le Ramayana n'ont-ils pas pu donner l'&acirc;ge de Ravana Brahma au moment de l'enl&egrave;vement de Sita ? Si l&rsquo;on r&eacute;pondait &agrave; cette question, les histoires cach&eacute;es originales du Ramayana ressortiraient. Ravana Brahma a rendu visite &agrave; Sita Devi &agrave; Ashokavana avec sa femme Mandodari et <a href="https://en.wikipedia.org/wiki/Indrajit">Meghnaad</a>, mais pourquoi a-t-il &eacute;t&eacute; d&eacute;crit comme un homme vicieux ? M&ecirc;me si les personnes &acirc;g&eacute;es Ravana Brahma n&rsquo;a pas assist&eacute; au swayamvara de Sita, n&rsquo;est-il pas dommage d&rsquo;&eacute;crire qu&rsquo;il n&rsquo;a pas pu lever l&rsquo;arc de Shiva lors du swayamvara de Sita ? Lorsqu&rsquo;il a emmen&eacute; Sita, sa fille, sans la toucher dans son royaume du Sri Lanka, &eacute;cririez-vous faussement qu&rsquo;il &eacute;tait un homme lubrique ? Certaines personnes &eacute;go&iuml;stes ont complot&eacute; contre lui, pr&eacute;tendant qu'il l'avait prise avec convoitise ; comment est-ce possible sur la base de ce que vous avez dit selon lequel quiconque toucherait Sita serait br&ucirc;l&eacute; vif ? Au moins pour l&rsquo;instant, cette communaut&eacute; devrait conna&icirc;tre la v&eacute;rit&eacute; du Ramayana. Mandodari Devi, qui connaissait le secret selon lequel les souffrances de Sita et l'incarnation de Bhagavan Ravana Brahma prendraient bient&ocirc;t fin, avait l'habitude de dire aux gens de son royaume que Ravana Brahma avait amen&eacute; Sita &agrave; Lanka pour le bien-&ecirc;tre de Sita. Nous souhaitons voir les portraits des grands Sri Bhagavan Ravana Brahma et Srimati Mandodari Devi.

    Vous ne savez pas vraiment qui vous &ecirc;tes. Ne mettez pas de messages ind&eacute;sirables inutiles sur Facebook et YouTube, et lorsque vous blasph&egrave;mez, vous accumulerez des ann&eacute;es de karma. N'&eacute;coutez pas si vous n'&ecirc;tes pas oblig&eacute; de le faire. Lorsque vous ne connaissez pas la d&eacute;finition du dharma et combien de dharmas, n&rsquo;appelez pas les gnanis pour un d&eacute;bat &agrave; la t&eacute;l&eacute;vision publique.

    Le th&eacute;or&egrave;me de Thraitha est la v&eacute;ritable norme. Cette norme est utilis&eacute;e pour mesurer le niveau de haine religieuse. Le monde saura combien de sagesse il y a dans les religions et combien de haine il y a dans les religions gr&acirc;ce &agrave; la sagesse du th&eacute;or&egrave;me de Thraitha. La sagesse du th&eacute;or&egrave;me de Thraitha r&eacute;v&egrave;le &agrave; ce monde combien de sagesse il y a dans les religions et combien de haine il y a dans les religions. Prabodha Seva Samiti et ses cinq affili&eacute;s croient fermement que quoi qu&rsquo;il arrive, cela se produira avec la permission de Dieu.

    <strong>Prabodhashramam est la seule organisation qui apporte le d&eacute;veloppement spirituel</strong>. Toutes les autres organisations &oelig;uvrent au d&eacute;veloppement de la personnalit&eacute; et &agrave; une soci&eacute;t&eacute; meilleure. Mais chacun devrait reconna&icirc;tre que sans d&eacute;veloppement spirituel, il n&rsquo;y aura pas de d&eacute;veloppement personnel et social.

    La sagesse de Yogeeswarlu est sans caste et sans religion. C&rsquo;est pourquoi les gens de toutes les religions &ndash; hindous, musulmans et chr&eacute;tiens &ndash; viennent &agrave; lui en harmonie et sont heureux de conna&icirc;tre la v&eacute;ritable sagesse divine. Comme l'a dit Veerabrahmam, sa sagesse unit les trois religions. Brahmam a dit dans Kalagnanam (proph&eacute;tie) : &laquo;<strong>Tous les grands demi-dieux (devatas) sont &agrave; Anandashramam.</strong>&raquo; Devatas est venu et a parl&eacute; avec joie pour apprendre la sagesse de leur p&egrave;re. Il a &eacute;galement d&eacute;clar&eacute; : &laquo;<strong>Prabodhashramam poss&egrave;de le plus haut niveau de sagesse. Ceux de Prabodhashramam sont constitu&eacute;s d'attributs du Tout-Puissant. Ce tout-puissant n&rsquo;&eacute;tait qu&rsquo;Ananda Guru. Ananda Guru est &eacute;galement Guru pour vous et moi.</strong>&raquo; De tels messages de paroles prononc&eacute;es par Brahmam lui-m&ecirc;me se trouvent dans les &eacute;critures de Swami. Vous devez saisir la sagesse de Dieu avec discr&eacute;tion et diligence.

    Ceux qui ne lisent pas la Bhagavad-Gita sont-ils les sauveurs des dharmas hindous ? Les imb&eacute;ciles, qui ne connaissent pas l&rsquo;injustice de l&rsquo;histoire, d&eacute;fendront-ils la religion hindoue ? Pouvez-vous construire une soci&eacute;t&eacute; &eacute;galitaire sans conna&icirc;tre le &laquo; Secret du commencement &raquo; et le &laquo; Secret de la cr&eacute;ation &raquo; ? Reconnaissez la bont&eacute; des &Eacute;critures en les lisant avec patience et sans haine religieuse. Si vous vous sentez mal, laissez tomber. Il n&rsquo;y a pas de r&egrave;gle selon laquelle tout le monde devrait y croire. <strong>Les &eacute;critures et enseignements de Thraitha Siddantha</strong>, qui sont si b&eacute;n&eacute;fiques pour l'humanit&eacute; et ont une conscience scientifique et spirituelle rationnelle et r&eacute;v&egrave;lent le sssecrets de <strong>Brahma, Karma et Bhakti Yogams </strong>en d&eacute;tail avec Jeevatma, Atma et Paramatma, sont essentiels &agrave; la soci&eacute;t&eacute; actuelle.

    Les organisations - ONU, Conseil mondial de la paix, Police Act, IPC, CrPC, Prison Acts, CBI, CBCID, Intelligence Reports, ACB, Human Rights Watch, Woman Rights, SC ST Atrocities Act, Indian Trusts Act, Muslim Law, Christian Law, Les lois sur le travail, les GO du gouvernement central, les GO du gouvernement des &Eacute;tats, la Commission &eacute;lectorale, la Constitution indienne, les tribunaux indiens, la loi RTI, la loi sur les technologies de l&rsquo;information de 2000 &ndash; existent, en fait, pour le bien-&ecirc;tre humain. Les institutions spirituelles ont la responsabilit&eacute; de dire aux gens quel type de sagesse convient &agrave; leur bien-&ecirc;tre. Prabodhashramam et ses affili&eacute;s occupent la premi&egrave;re place dans ces institutions responsables. Il ne faut surtout pas oublier qu'il existe &eacute;galement <strong>&laquo; Loi divine et administration divine &raquo;.</strong>

    L&rsquo;essence des trois &eacute;critures divines est d&rsquo;expliquer les trois &acirc;mes. La vie sans la sagesse divine est un gaspillage. Dieu a donn&eacute; la vie &agrave; l&rsquo;homme uniquement pour conna&icirc;tre la sagesse de Dieu. La sagesse de Dieu va au-del&agrave; des castes et de la religion. Yogeeswarlu a fourni le v&eacute;ritable sens de la sagesse du Seigneur Krishna &agrave; travers la &laquo; premi&egrave;re &eacute;criture divine Bhagavad-Gita &raquo;. Il nous a donn&eacute; la sagesse du Coran, qui est venue au proph&egrave;te Mahomet par l'interm&eacute;diaire de Gabriel, dans les &eacute;critures &laquo; Paroles de sagesse dans la derni&egrave;re &Eacute;criture divine &raquo; et &laquo; Diamants &raquo;. dans la Derni&egrave;re &Eacute;criture Divine.' Il nous a parl&eacute; de la sagesse &eacute;vang&eacute;lique de J&eacute;sus dans 'Les joyaux de la Deuxi&egrave;me &Eacute;criture Divine.' Il nous donne une v&eacute;ritable sagesse divine pratique &agrave; travers les &eacute;critures et les enseignements. Connaissez la sagesse qu&rsquo;Il a dite, portez le Sceau de Dieu et recevez le pardon des p&eacute;ch&eacute;s. Si vous &eacute;coutez attentivement et pratiquez, vous avez de la chance. Si vous n'&eacute;coutez pas, c'est votre karma. Tout se passe selon la volont&eacute; de Dieu, et Dieu le sait.

    <strong>Les hindous devraient savoir quel Dieu adorer. Les musulmans ont besoin de savoir qui sont les deux Allah (les deux cr&eacute;ateurs). Les chr&eacute;tiens doivent savoir qui sont ces deux fils.</strong>

    Un homme ne devient jamais Dieu, mais Dieu peut venir en tant qu'homme. Pour reconna&icirc;tre le Dieu qui est sous forme humaine, nous devons d&rsquo;abord avoir sa sagesse en nous. Pour reconna&icirc;tre Dieu, nous devons conna&icirc;tre ces deux principes &eacute;nonc&eacute;s par les anciens. Comme Vemana Yogi l'a dit, ses po&egrave;mes peuvent &ecirc;tre compris de 1000 fa&ccedil;ons, et de m&ecirc;me, la sagesse du th&eacute;or&egrave;me de Thraitha peut &ecirc;tre comprise de 9000 fa&ccedil;ons. Selon le dicton &laquo; Shraddhavan labhate gnanam (Ceux qui sont int&eacute;ress&eacute;s atteindront la sagesse) &raquo;, ceux qui sont r&eacute;fl&eacute;chis et intellectuels peuvent comprendre la sagesse de Thraitha.

    Au moins maintenant, abandonnez la pens&eacute;e de caste et de religion et connaissez la v&eacute;ritable sagesse divine. Si vous ne le savez pas maintenant, vous ne le saurez jamais. Le temps presse. Faites-le maintenant.

    J'offre des fleurs parfum&eacute;es aux pieds de Yogeeswarlu pour nous donner plus de sagesse divine. J'offre des salutations illimit&eacute;es de tout mon c&oelig;ur, de toute mon &acirc;me et de mon esprit.

    Votre serviteur ob&eacute;issant
    <strong>Thirumalesu.</strong>


</span>
`
},
{
chapterName: "",
chapterNumber: 10,
pageNumber: 150,
verse: ``,
meaning: ``,
pageText: `
<p style="text-align:center;">
<div class="container">
<img src="assets/img/1.png"   style="width:100%;">
<div class="img1-title1">
  Gems in
</div>
<div class="img1-title2">
 The Second Divine Scripture
</div>
<div class="img1-title3">
 (Gospels in the Thraitha Theorem)
</div>
<div class="img1-title4">
 Writer: The only Guru of three religions(Hindu, Muslim, Christian), The Emperor of Spiritual Kingdom, The writer of more than hundred divine holy books, Indu Gnana Dharma Pradata, The Sensational Writer, Adi Karta of Traita Doctrine
</div>
<div class="img1-title5">
Sri Sri Sri Acharya Prabodhananda Yogeeswarulu
</div>
</div>
</p>`
},
{
chapterName: "GLOSSAIRE",
chapterNumber: 11,
pageNumber: 151,
verse: ``,
meaning: ``,
pageText: `
<ion-row>
<ion-col class="ion-text-center">
<b>GLOSSARY</b></ion-col>
</ion-row>
<div class="poem">
<div class="poemtext">
<strong>Achara Prakruti</strong>: Cinq &eacute;l&eacute;ments immuables - Ciel, Air, Feu, Eau et Terre. Ceux (Prakruti) qui n'ont pas de karma. Prapancha. Pancha Bhutas.

<strong>L'injustice</strong>: Ils sont contre les dharmas. Ils provoquent un bon karma, un mauvais karma, ou les deux. Adharmas mentionn&eacute;s dans la Bhagavad-Gita - &eacute;tudier les Vedas, faire des &oelig;uvres caritatives, accomplir des sacrifices (yajnas), des p&eacute;nitences (tapas), etc.

<strong>Karma d'Agami</strong>: P&eacute;ch&eacute; et punya nouvellement arriv&eacute;s de la naissance &agrave; la mort. Karma imminent.

<strong>Aham</strong>: Partie int&eacute;rieure du corps mais pas guna.

<strong>Antahkaranams</strong>: Cinq parties subtiles du corps - Jeeva (Jeevatma), Manas, Buddhi, Chittam et Aham.

<strong>Astrologie</strong>: Celui qui conna&icirc;t la sagesse spirituelle conna&icirc;t le karma de l'autre avec sa sagesse et l'informe. Conna&icirc;tre le futur &oelig;il de sagesse est n&eacute;cessaire. Ce qui est connu avec la lumi&egrave;re de la sagesse.

<strong>Atma</strong>: Celui qui habite avec un &ecirc;tre mortel. Celui qui est imp&eacute;rissable. Celui qui est dans tous les corps vivants. Atma. Akshara Purusha. L'&acirc;me immortelle.

<strong>Bhagavan</strong>: Celui qui vient de Dieu. Celui qui est venu avec l'information de Dieu Christ, Svayambhu ou Consolateur ou le Fils unique. Avocat ou assistant. Messager de Dieu. Gourou.

<strong>Bouddhi</strong>: C'est l'intellect dans le corps, qui analyse le pour et le contre d'une action.

<strong>Chara Prakruti</strong>: La Prakruti changeante. Jagath. Des &ecirc;tres vivants. Chara Prakruti. Le nombre total de parties du corps de chaque &ecirc;tre vivant est de 25.

<strong>Sang de l'Alliance</strong>: Pouvoir de la sagesse. Essence de sagesse. La sagesse de Dieu sans les liens du karma.

<strong>Devatas</strong>: Des humains invisibles. Demi-dieux.

<strong>Dharma Shastra</strong>: &Eacute;criture avec dharmas (sagesse). Les commandements de Dieu. Brahma Vidya. Super science.

<strong>Dharmas</strong>: Sagesse divine. Doctrines ou principes divins. Commandements. Suivre les dharmas m&egrave;ne &agrave; la lib&eacute;ration de la vie et de la mort.

<strong>Fant&ocirc;me</strong>: Personne vivant avec un corps subtil. Diable ou d&eacute;mon.

<strong>Jeevatma</strong>: &Acirc;me mortelle dans le corps. Kshara purusha ou Jeeva. <strong>Gnanendriyas</strong>: Cinq organes sensoriels : les yeux, les oreilles, le nez, la langue et la peau. <strong>Conduit</strong>: Une personne qui conna&icirc;t la sagesse divine et les dharmas. Brahma gnani.

<strong>Karma-Chakra</strong>: C'est un ensemble de 108 pi&egrave;ces. Chacune des 12 parties du Karma chakra poss&egrave;de un type de karma diff&eacute;rent. Chaque type de karma est divis&eacute; en neuf parties. Douze parties contiennent 108 (12*9) types de karma.

<strong>Karma Visarga</strong>: Diviser le karma en petites parties.

<strong>Karma Yogam</strong>: Lorsqu'un Jeevatma reconna&icirc;t Aham dans son corps et n'&eacute;coute pas ce qu'Aham dit, alors il n'obtient aucun karma. C'est le combat de Jeeva contre Aham.

<strong>Karma Yogi</strong>: Une personne qui conna&icirc;t la sagesse et pratique le Karma Yogam.

<strong>Karma</strong>: P&eacute;ch&eacute; invisible et m&eacute;rite.

<strong>Karmendriyas</strong>: Mains, jambes, bouche, anus et organe sexuel.

<strong>Le mien</strong>: Il fonctionne comme communicateur entre le cerveau et les organes. Il se souvient et se souvient des choses.

<strong>Moksham</strong>: Lib&eacute;ration de la naissance, de la mort, de la vie, des souffrances, etc. Union avec Dieu. Paraloka, Mukti ou Salut. Lib&eacute;ration.

<strong>Paramatma</strong>: Ce qui est diff&eacute;rent d'Atma. P&egrave;re d'&ecirc;tres vivants entiers et de Pancha Bhutas. Dieu, le Saint-Esprit, Allah, Purushottama, Uttama Purusha ou le p&egrave;re de paraloka. l'&acirc;me supr&ecirc;me.

<strong>Prakriti</strong>: Combinaison de Chara Prakruti et Achara Prakruti. Nature.

<strong>Prarabdha Karma</strong>: Karma pr&eacute;d&eacute;termin&eacute;. Cela se produit dans cette vie, de la naissance &agrave; la mort. Le karma Prarabdha est d&eacute;cid&eacute; &agrave; la naissance d'un homme.

<strong>Punya</strong>: Cela vient des bonnes actions. Ce qui provoque des plaisirs dans la vie.

<strong>Purusha</strong>: Se rapportant &agrave; Paramatma chez tout &ecirc;tre vivant.

<strong>Karma de Sanchita</strong>: Le karma accumul&eacute; comme un tas apr&egrave;s avoir exp&eacute;riment&eacute; le karma &agrave; chaque naissance est appel&eacute; karma sanchita.

<strong>P&eacute;ch&eacute;</strong>: Cela vient de mauvaises actions. Cela provoque des difficult&eacute;s et du chagrin.

<strong>Tanmatras</strong>: &Eacute;nergies d&eacute;riv&eacute;es (vue, ou&iuml;e, odorat, go&ucirc;t et toucher) connect&eacute;es aux organes des sens.

<strong>Upadesha</strong>: Obtenir le feu de la sagesse comme charit&eacute;. Pays qui n&rsquo;est pas un pays (Tous ceux qui ont l&rsquo;&oelig;il de la sagesse doivent voir). &Eacute;nergie de sagesse, Paramatma. Bapt&ecirc;me. Initiation &agrave; la sagesse.

<br /><strong>Yogi</strong>: Celui qui est en Yogam. Celui qui pratique le Yogam. Une personne qui conna&icirc;t la sagesse divine et pratique les dharmas.

</div>
</div>`
},
{
chapterName: "Vidéo",
chapterNumber: 12,
pageNumber: 152,
verse: `
`, meaning: `
`, pageText: `
`
},
    {
      chapterName: "Share",
      chapterNumber: 13,
      pageNumber: 153,
      verse: `
    `, meaning: `
    `, pageText: `

    <ion-row>
    <ion-col style="font-size:17px">
      <ion-title class="ion-text-center"> <b>Share The Apps </b></ion-title><br>
    </ion-col>
  </ion-row>

  <ion-row>

    <ion-col class="ion-text-center">

          <ion-row>
            <ion-col>
              <span><b>Click on the below link to share this app among your friends and family members</b></span>

            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
     <span><b>Whatsapp: <a href="https://wa.me/?text=https://play.google.com/store/apps/dev?id=7706717796953849920">Thraitha Theorem Apps For Android</a></b></span>
              <br>
              <span><b>Whatsapp <a href="https://wa.me/?text=https://apps.apple.com/us/developer/three-souls/id1541256362">Thraitha Theorem For iOS</a></b></span>
              <br>
     <span><b>Telegram <a href="https://play.google.com/store/apps/dev?id=7706717796953849920">Thraitha Theorem Apps For Android</a></b></span>
     <br>
     <span><b>Telegram  <a href="https://telegram.me/share/url?url=https://apps.apple.com/us/developer/three-souls/id1541256362">Thraitha Theorem Apps For iOS</a></b></span>

            </ion-col>
          </ion-row>


    </ion-col>

  </ion-row>

    `
    },

  ];


  chapters: any = [

    { title: "Le chemin de Dieu", component: 0, chapterNumber: 0, subs: null, icon: 'information' },
    { title: 'Le secret de la création', component: 1, chapterNumber: 1, subs: null, icon: 'information' },
    {
      title: "L'Évangile selon Matthieu", component: null, chapterNumber: 2, icon: 'book',
      subs: [
        {
          shloka: "(3:7)  Engeance de vipères ! Qui vous a averti de fuir la colère à venir ?",
          component: 2,
          subs: null
        },
        {
          shloka: "(3:11) Je te baptise avec de l'eau pour changer de manas (esprit). Mais après moi vient celui qui est plus puissant que moi, dont je ne suis pas digne de porter les sandales. Il vous baptisera du Saint-Esprit et de feu.",
          component: 3,
          subs: null
        },
        {
          shloka: "(3:12) Son van est dans Sa main, et Il nettoiera Son aire de battage, rassemblant Son blé dans le grenier et brûlant la balle avec un feu qui ne s'éteint pas.",
          component: 4,
          subs: null
        },
        {
          shloka: "(3:16) Dès que Jésus fut baptisé, Il sortit de l'eau. À ce moment-là, le ciel s’ouvrit et Il vit l’Esprit de Dieu descendre comme une colombe et se poser sur Lui.",
          component: 5,
          subs: null
        },
        {
          shloka: "(3:17) Et une voix venant du ciel dit : « Celui-ci est mon fils que j'aime ; avec lui, je suis  très content.",
          component: 5,
          subs: null
        },
        {
          shloka: "(4:10) Jésus lui dit : « Loin de moi, Satan ! Car il est écrit : Adorez le Seigneur ton Dieu et ne sers que Lui.",
          component: 6,
          subs: null
        },
        {
          shloka: "(5:10) Bienheureux ceux qui sont persécutés à cause de la justice (la sagesse), car à eux est le royaume de paraloka.",
          component: 7,
          subs: null
        },
        {
          shloka: "(5:17) Ne pensez pas que je suis venu pour abolir la Loi (Dharma Shastra) ou les Prophètes ; Je ne suis pas venu pour les abolir mais pour les accomplir.",
          component: 8,
          subs: null
        },
        {
          shloka: "(5:18) Car en vérité, je vous le dis, jusqu'à ce que le ciel et la terre disparaissent, pas la plus petite lettre, pas le moindre trait de plume ne disparaîtra de quelque manière que ce soit de la Loi (Dharma Shastra) jusqu'à ce que tout soit accompli.",
          component: 9,
          subs: null
        },
        {
          shloka: "(5:19) Par conséquent, quiconque met de côté l'un de ces moindres commandements et enseigne aux autres en conséquence sera appelé le moindre dans le royaume de paraloka, mais quiconque pratique et enseigne ces commandements sera appelé grand dans le royaume de paraloka.",
          component: 10,

          subs: null
        },
        {
          shloka: "(5:20) Car je vous dis qu'à moins que votre justice ne surpasse celle des pharisiens et des docteurs de la loi, vous n'entrerez certainement pas dans le royaume de paraloka.",
          component: 11,
          subs: null
        },
        {
          shloka: "(5:28) Mais je vous dis que quiconque regarde une femme avec convoitise a déjà commis un adultère avec elle dans son cœur.",
          component: 12,
          subs: null
        },
        {
          shloka: "(5:29) Si ton œil droit te fait trébucher, arrache-le et jette-le. Il vaut mieux que vous perdiez une partie de votre corps plutôt que de jeter tout votre corps en enfer.",
          component: 13,

          subs: null
        },
        {
          shloka: "(5:30) Et si ta main droite te fait trébucher, coupe-la et jette-la. Il est préférable que vous perdiez une partie de votre corps plutôt que tout votre corps aille en enfer.",
          component: 13,

          subs: null
        },
        {
          shloka: "(6:3) Mais lorsque vous pratiquez le dharma, ne laissez pas votre main gauche savoir ce que fait votre main droite.",
          component: 14,

          subs: null
        },
        {
          shloka: "(6:4) Afin que votre don se fasse en secret. Alors ton père, qui voit ce qui se fait en secret, te récompensera.",
          component: 14,

          subs: null
        },
        {
          shloka: "(6:6) Mais quand tu pries, va dans ta chambre, ferme la porte et prie ton Père, qui est invisible. Alors ton père, qui voit ce qui se fait en secret, te récompensera.",
          component: 15,

          subs: null
        },
        {
          shloka: "(6:7) Lorsque vous priez, ne babillez pas comme les païens, car ils pensent qu'ils seront exaucés à cause de leurs nombreuses paroles.",
          component: 16,

          subs: null
        },
        {
          shloka: "(6:8) Ne soyez pas comme eux, car votre père sait ce dont vous avez besoin avant que vous le lui demandiez.",
          component: 16,

          subs: null
        },
        {
          shloka: "(7:7) Demandez et il vous sera donné ; cherchez et vous trouverez ; frappez et la porte vous sera ouverte.",
          component: 18,
          subs: null
        },
        {
          shloka: "(7:8) Car quiconque demande reçoit ; celui qui cherche trouve ; et à celui qui frappe, la porte s'ouvrira.",
          component: 18,
          subs: null
        },
        {
          shloka: "(7:13) Entrez par la porte étroite. Car large est la porte et large est le chemin qui mènent à la perdition, et beaucoup entrent par là.",
          component: 17,
          subs: null
        },
        {
          shloka: "(7:14) Mais petite est la porte et resserré le chemin qui mène à la vie, et seuls quelques-uns les trouvent.",
          component: 17,
          subs: null
        },

        {
          shloka: "(7:15) Faites attention aux faux prophètes. Ils viennent à vous déguisés en mouton, mais intérieurement, ce sont des loups féroces.",
          component: 19,
          subs: null
        },
        {
          shloka: "(7:21) Tous ceux qui me disent : « Seigneur, Seigneur » n’entreront pas dans le royaume de paraloka, mais seulement celui qui fait la volonté de mon Père qui est en paraloka.",
          component: 20,
          subs: null
        },
        {
          shloka: "(7:22) Beaucoup me diront ce jour-là : « Seigneur, Seigneur, n’avons-nous pas prophétisé en ton nom et en ton nom chassé les démons et, en ton nom n’avons-nous pas accompli de nombreux miracles ?",
          component: 21,
          subs: null
        },
        {
          shloka: "(7:23) Alors je leur dirai clairement : « Je ne vous ai jamais connu. Loin de moi, vous les malfaiteurs ! »",
          component: 21,
          subs: null
        },
        {
          shloka: "(8:22) Jésus lui dit : « Suis-moi et laisse les morts enterrer leurs propres morts. »",
          component: 22,

          subs: null
        },
        {
          shloka: "(9:12) En entendant cela, Jésus dit : « Ce ne sont pas les bien portants qui ont besoin d’un médecin, mais les malades. »",
          component: 23,

          subs: null
        },
        {
          shloka: "(9:13) Car je ne suis pas venu appeler des justes, mais des pécheurs.",
          component: 23,

          subs: null
        },
        {
          shloka: "(8:23) Puis il monta dans la barque et ses disciples le suivirent.",
          component: 24,
          subs: null
        },
        {
          shloka: "(8:24) Soudain, une violente tempête s'éleva sur le lac, de sorte que les vagues balayèrent le bateau. Mais Jésus dormait.",
          component: 24,
          subs: null
        },
        {
          shloka: "(8:25) Les disciples allèrent le réveiller en disant : « Seigneur, sauve-nous ! Nous allons nous noyer !",
          component: 24,
          subs: null
        },
        {
          shloka: "(8:26) Il répondit : « Toi de peu de foi, pourquoi as-tu si peur ? » Puis il se leva et réprimanda les vents et les vagues, et tout fut complètement calme.",
          component: 24,
          subs: null
        },
        {
          shloka: "(9:6) Je veux que vous sachiez que le Fils de l'homme a l'autorité sur terre pour pardonner les péchés. Alors, il dit au paralysé : « Lève-toi, prends ton tapis et rentre chez toi. » Puis l'homme s'est levé et est rentré chez lui.",
          component: 25,

          subs: null
        },
        {
          shloka: "(10:20) Car ce n'est pas vous qui parlerez, mais l'Esprit de votre Père qui parlera à travers vous.",
          component: 26,

          subs: null
        },
        {
          shloka: "(10 :30) Même les cheveux de votre tête sont tous comptés.",
          component: 27,

          subs: null
        },
        {
          shloka: "(10:34) Ne pensez pas que je suis venu apporter la paix sur la terre. Je ne suis pas venu apporter la paix, mais une épée.",
          component: 28,

          subs: null
        },
        {
          shloka: "(10:35) Car je suis venu pour retourner « un homme contre son père, une fille contre son père » mère, une belle-fille contre sa belle-mère.",
          component: 28,

          subs: null
        },
        {
          shloka: "(10:36) Les ennemis d’un homme seront les membres de sa propre maison.",
          component: 28,

          subs: null
        },
        {
          shloka: "(10:37) Celui qui aime son père ou sa mère plus que moi n'est pas digne de moi ; quiconque aime son fils ou sa fille plus que moi n'est pas digne de moi.",
          component: 29,
          subs: null
        },
        {
          shloka: "(10:38) Celui qui ne prend pas sa croix et ne me suit n'est pas digne de moi.",
          component: 30,
          subs: null
        },
        {
          shloka: "(10:40) Celui qui te reçoit me reçoit, et celui qui me reçoit reçoit celui qui m'a envoyé.",
          component: 31,
          subs: null
        },
        {
          shloka: "(11:9) Qu’es-tu sorti voir ? Un prophète ? Oui, je vous le dis, et (je suis) plus qu'un prophète.",
          component: 32,
          subs: null
        },
        {
          shloka: "(11:28) Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos",
          component: 33,
          subs: null
        },
        {
          shloka: "(12:17) C'était pour accomplir ce qui avait été annoncé par l'intermédiaire du prophète Isaïe.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:18) Voici mon serviteur que j'ai choisi, celui que j'aime, en qui je prends plaisir ; Je mettrai mon Esprit sur lui",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:19) Il proclamera la justice (la sagesse) aux nations ; Il ne se disputera pas et ne criera pas ; personne n’entendra sa voix dans les rues.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:20) Il ne brisera pas un roseau meurtri, et il n'éteindra pas une mèche qui couve, jusqu'à ce qu'il ait amené la justice (la sagesse) à la victoire.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:21) En son nom les nations placeront leur espérance.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:31) Ainsi, je vous le dis, toute sorte de péché et de calomnie peut être pardonné, mais le blasphème contre l'Esprit (Atma) ne sera pas pardonné.",
          component: 35,
          subs: null
        },
        {
          shloka: "(12:32) Quiconque prononcera une parole contre le Fils de l'Homme sera pardonné, mais quiconque parlera contre le Saint-Esprit ne sera pas pardonné, ni dans cet âge (yuga) ni dans l'âge (yuga) à venir.",
          component: 36,

          subs: null
        },
        {
          shloka: "(12:36) Mais je vous dis que chacun devra rendre compte au jour du jugement de chaque parole creuse qu'il aura prononcée.",
          component: 37,
          subs: null
        },
        {
          shloka: "(12:37) Car par tes paroles tu seras acquitté, et par tes paroles tu seras condamné.",
          component: 37,
          subs: null
        },
        {
          shloka: "(12:40) Car, comme Jonas fut trois jours et trois nuits dans le ventre d'un énorme poisson, de même le Fils de l'homme sera trois jours et trois nuits dans le sein de la terre.",
          component: 38,

          subs: null
        },
        {
          shloka: "(13:13) Bien qu'ils voient, ils ne voient pas ; bien qu’ils entendent, ils n’entendent ni ne comprennent.",
          component: 39,
          subs: null
        },
        {
          shloka: "(13:14) En eux s'accomplit la prophétie d'Isaïe : Vous entendrez toujours mais vous ne comprendrez jamais ; vous verrez toujours mais ne percevrez jamais.",
          component: 39,
          subs: null
        },
        {
          shloka: "(13:15) Car le cœur de ce peuple est devenu insensible ; ils entendent à peine avec leurs oreilles et ils ont fermé les yeux. Autrement, ils pourraient voir de leurs yeux, entendre de leurs oreilles, comprendre de leur cœur et se tourner, et je les guérirais.",
          component: 39,
          subs: null
        },
        {
          shloka: "(15:7) Hypocrites! Isaïe avait raison lorsqu’il a prophétisé à votre sujet.",
          component: 40,
          subs: null
        },
        {
          shloka: "(15:8) Ces gens m'honorent des lèvres, mais leur cœur est loin de moi",
          component: 40,
          subs: null
        },
        {
          shloka: "(15:9) Ils m'adorent en vain ; leurs enseignements ne sont que des règles humaines.",
          component: 40,
          subs: null
        },
        {
          shloka: "(15:11) Ce qui entre dans la bouche de quelqu'un ne le souille pas, mais ce qui vient ce qui sort de leur bouche, c'est ce qui les souille.",
          component: 41,
          subs: null
        },
        {
          shloka: "(15:12) Alors les disciples vinrent vers lui et lui demandèrent : « Savez-vous que les pharisiens ont été offensés en entendant cela ?",
          component: 42,
          subs: null
        },
        {
          shloka: "(15:13) Il répondit : « Toute plante que mon Père céleste n’a pas plantée sera arrachée par les racines. »",
          component: 42,
          subs: null
        },
        {
          shloka: "(15:14) Laissez-les ; ce sont des guides aveugles. Si un aveugle conduit un aveugle, tous deux tomberont dans une fosse.",
          component: 43,
          subs: null
        },
        {
          shloka: "(16:21) À partir de ce moment-là, Jésus commença à expliquer à ses disciples qu'il devait aller à Jérusalem et souffrir beaucoup de choses de la part des anciens, des principaux sacrificateurs et des docteurs de la loi, et qu'il devait être tué. et le troisième jour ressuscitera. (Première fois",
          component: 44,
          subs: null
        },
        {
          shloka: `(16:22) Pierre le prit à part et commença à le réprimander. "Jamais, Seigneur!" dit-il. "Cela ne vous arrivera jamais!"`,
          component: 44,
          subs: null
        },
        {
          shloka: "(17:22) Lorsqu'ils se rassemblèrent en Galilée, il leur dit : « Le Fils de l'homme va être livré entre les mains des hommes. »",
          component: 44,
          subs: null
        },
        {
          shloka: "(17:23) Ils le tueront, et le troisième jour il ressuscitera. Et les disciples furent remplis de tristesse. (Deuxième fois)",
          component: 44,
          subs: null
        },
        {
          shloka: "(19:23) Alors Jésus dit à ses disciples : « En vérité, je vous le dis ; il est difficile pour quelqu'un de riche d'entrer dans le royaume de paraloka",
          component: 45,
          subs: null
        },
        {
          shloka: "(19:24) Encore une fois, je vous le dis, il est plus facile à un chameau de passer par le trou d'une aiguille qu'à un riche d'entrer dans le royaume de Dieu.",
          component: 45,
          subs: null
        },
        {
          shloka: "(20:17) Or Jésus montait à Jérusalem. En chemin, il prit les Douze à part et leur dit ",
          component: 44,
          subs: null
        },
        {
          shloka: "(20:18) Nous montons à Jérusalem, et le Fils de l'homme sera livré aux principaux sacrificateurs et aux docteurs de la loi. Ils le condamneront à mort.",
          component: 44,
          subs: null
        },
        {
          shloka: "(20:19) Ils le livreront aux païens pour qu'ils se moquent, qu'ils soient fouettés et crucifié. Le troisième jour, il ressuscitera ! (Troisième fois)",
          component: 44,
          subs: null
        },
        {
          shloka: "(22:36) Maître, quel est le plus grand commandement de la Loi (Dharma Shastra) ?",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:37) Jésus répondit : « Aime le Seigneur ton Dieu de tout ton cœur et de tout ton cœur. ton âme et de tout ton esprit.",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:38) C'est le premier et le plus grand commandement.",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:39) Et la seconde est semblable : « Aime ton prochain comme toi-même. »",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:40) Toute la Loi et les Prophètes dépendent de ces deux commandements.",
          component: 46,
          subs: null
        },
        {
          shloka: "(23:8) « Mais vous ne devez pas être appelé « Rabbi », car vous avez un seul Maître, et vous êtes tous frères.",
          component: 47,
          subs: null
        },
        {
          shloka: "(23: 9) Et n’appelez personne sur terre « père », car vous avez un seul Père, et il est dans paraloka.",
          component: 47,
          subs: null
        },
        {
          shloka: "(23:10) Vous ne devez pas non plus être appelés instructeurs, car vous avez un seul instructeur, le Messie.",
          component: 47,
          subs: null
        },
        {
          shloka: "(23:15) « Malheur à vous, docteurs de la loi et pharisiens, hypocrites ! Vous voyagez sur terre et sur mer pour gagner un seul converti, et lorsque vous avez réussi, vous en faites deux fois plus un enfant de l'enfer que vous.",
          component: 48,
          subs: null
        },
        {
          shloka: "(24:35) Le ciel et la terre passeront, mais mes paroles ne passeront jamais.",
          component: 49,
          subs: null
        },
        {
          shloka: "(24:42) Veillez donc, car vous ne savez pas quel jour votre Seigneur viendra.",
          component: 50,
          subs: null
        },
        {
          shloka: "(26:26) Pendant qu'ils mangeaient, Jésus prit du pain, et après avoir rendu grâce, il le rompit et le donna à ses disciples, en disant : « Prenez et mangez ; c'est mon corps.",
          component: 51,
          subs: null
        },
        {
          shloka: "(26:27) Puis il prit une coupe, et après avoir rendu grâce, il la leur donna en disant : « Buvez-en tous.",
          component: 51,
          subs: null
        },
        {
          shloka: "(26:28) Ceci est mon sang de l'alliance (la sagesse de Dieu sans les liens de l'ignorance), qui est versé pour beaucoup pour le pardon des péchés.",
          component: 51,
          subs: null
        },
        {
          shloka: "(28:18) Alors Jésus vint vers eux et dit : « Tout pouvoir à Paraloka et sur terre m'a été donné.",
          component: 52,
          subs: null
        },
        {
          shloka: "(28:19) Allez donc faire de toutes les nations des disciples, en les baptisant au nom du Père, du Fils et du Saint-Esprit.",
          component: 53,
          subs: null
        },
        {
          shloka: "(28:20) Apprenez-leur à obéir à tout ce que je vous ai commandé. Et sûrement, je suis toujours avec vous, jusqu'à la fin des temps (Yuga).",
          component: 53,
          subs: null
        },

      ]
    },
    {
      title: "L'Évangile de Marc", component: null, chapterNumber: 3, icon: 'book',
      subs: [
        {
          shloka: "(2:19) Comment les invités de l'époux peuvent-ils jeûner pendant qu'il est avec eux ? Ils ne le peuvent pas, tant qu’ils l’ont avec eux.",
          component: 54,
          subs: null
        },
        {
          shloka: "(2:20) Mais le temps viendra où l'époux leur sera enlevé, et ce jour-là ils jeûneront.",
          component: 54,
          subs: null
        },
        {
          shloka: "(4:38) Jésus était à l'arrière, dormant sur un coussin. Les disciples le réveillèrent et lui dit : « Maître, cela ne vous dérange pas si nous nous noyons ?",
          component: 55,
          subs: null
        },
        {
          shloka: "(4:39) Il se leva, réprimanda le vent et dit aux vagues : « Silence ! Restez tranquille ! Puis le vent s'est calmé et c'était complètement calme.",
          component: 55,
          subs: null
        },
        {
          shloka: "(5:38) Lorsqu'ils arrivèrent chez le chef de la synagogue, Jésus vit une agitation, avec des gens qui pleuraient et se lamentaient fort.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:39) Il entra et leur dit : « Pourquoi toute cette agitation et ces lamentations ? L'enfant n'est pas mort mais endormi.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:40) Mais ils se sont moqués de lui. Après les avoir tous éteints, il a emmené le père de l'enfant et la mère et les disciples qui étaient avec lui et entrèrent là où était l'enfant.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:41) Il lui prit la main et lui dit : « Talitha koum ! » (ce qui signifie « Petite fille, je te le dis, lève-toi ! »).",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:42) Immédiatement, la jeune fille se leva et commença à marcher (elle avait douze ans). À cela, ils furent complètement étonnés.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:43) Il a donné des ordres stricts de ne laisser personne savoir cela et leur a dit de lui donner quelque chose à manger.",
          component: 56,
          subs: null
        },
        {
          shloka: "(7:15) Rien en dehors d'une personne ne peut la souiller en entrant en elle. ",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:16) C'est plutôt ce qui sort d'une personne qui la souille.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:17) Après avoir quitté la foule et être entré dans la maison, ses disciples l'interrogeèrent sur cette parabole.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:18) « Es-tu si ennuyeux ? » il a demandé. « Ne voyez-vous pas que rien de ce qui entre dans un une personne de l'extérieur peut-elle les souiller ?",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:19) Car cela ne rentre pas dans leur cœur mais dans leur estomac, puis hors de le corps. »",
          component: 57,
          subs: null
        },
        {
          shloka: "(7 :20) Il a poursuivi : « Ce qui sort d’une personne est ce qui la souille.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:21) Car c'est de l'intérieur, du cœur d'une personne, que les mauvaises pensées viennent... l'immoralité sexuelle, le vol, le meurtre,",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:22) l'adultère, l'avidité, la méchanceté, la tromperie, l'obscénité, l'envie, la calomnie, l'arrogance et la folie.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:23) Tous ces maux viennent de l’intérieur et souillent une personne.",
          component: 57,
          subs: null
        },
        {
          shloka: "(3:35) Celui qui fait la volonté de Dieu est mon frère, ma sœur et ma mère.",
          component: 58,
          subs: null
        },
        {
          shloka: "(4:17) Mais comme ils n’ont pas de racine, ils ne durent que peu de temps. Quand des troubles ou des persécutions surviennent à cause de la parole, ils disparaissent rapidement.",
          component: 59,
          subs: null
        },
        {
          shloka: "(4:21) Il leur dit : « Apportez-vous une lampe pour la mettre sous un bol ou un lit ? Au lieu de cela, ne le mettez-vous pas sur son support ?",
          component: 60,
          subs: null
        },
        {
          shloka: "(4:22) Car tout ce qui est caché est destiné à être révélé, et tout ce qui est caché est destiné à être révélé.",
          component: 60,
          subs: null
        },
        {
          shloka: "(6:4) Jésus leur dit : « Un prophète n'est méprisé que dans sa ville, parmi ses proches et dans sa maison. »",
          component: 61,
          subs: null
        },
        {
          shloka: "(8:38) Si quelqu’un a honte de moi et de mes paroles dans cette génération adultère et pécheresse, le Fils de l’homme aura honte de lui lorsqu’il viendra dans la gloire de son Père avec les saints anges.",
          component: 62,

          subs: null
        },

        {
          shloka: `(9:7) Alors une nuée apparut et les couvrit, et une voix sortit de la nuée : « Celui-ci est mon Fils que j'aime. Écoutez-le !`,
          component: 63,

          subs: null
        },
        {
          shloka: `(10:17) Alors que Jésus commençait son chemin, un homme accourut vers lui et tomba à genoux. devant lui. « Bon professeur, a-t-il demandé, que dois-je faire pour hériter de la vie éternelle ?`,
          component: 64,

          subs: null
        },
        {
          shloka: `(10:18) « Pourquoi m'appelles-tu bon ? » Jésus répondit. « Personne n’est bon, sauf Dieu seul.`,
          component: 64,

          subs: null
        },
        {
          shloka: `(16:15) Il leur dit : « Allez dans le monde entier et prêchez la bonne nouvelle à tous. création.`,
          component: 65,
          subs: null
        },
        {
          shloka: `(16:16) Celui qui croira et se fera baptiser sera sauvé, mais celui qui ne croira pas sera condamné.`,
          component: 65,
          subs: null
        },


      ]
    },
    {
      title: "L'Évangile de Luc", component: null, chapterNumber: 4, icon: 'book',
      subs: [
        {
          shloka: `(2:49) « Pourquoi me cherchiez-vous ? » il a demandé. « Ne saviez-vous pas que je devais travailler dans les affaires de mon père ?`,
          component: 66,
          subs: null
        },
        {
          shloka: `(11:37) Pendant que Jésus parlait, un des pharisiens l'invita chez lui pour un repas. Alors il entra et prit place à table.`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:38) Son hôte fut étonné de voir qu'il s'asseyait pour manger sans avoir au préalable effectué la cérémonie de lavage des mains exigée par la coutume juive.`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:39) Alors le Seigneur lui dit : « Vous, les Pharisiens, faites si attention à nettoyer l'extérieur de la coupe et du plat, mais à l'intérieur vous êtes sales, pleins d'avidité et de méchanceté !`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:40) Imbéciles ! Dieu n’a-t-il pas créé l’intérieur comme l’extérieur ?`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:41) Alors, nettoyez l'intérieur en offrant des cadeaux (dharmas) aux pauvres, et vous serez entièrement pur.`,
          component: 67,
          subs: null
        },
        {
          shloka: `(12:4) Je vous le dis, mes amis, n'ayez pas peur de ceux qui tuent le corps et qui ne peuvent plus rien faire après.`,
          component: 68,

          subs: null
        },
        {
          shloka: `(12:5) Mais Je vais vous montrer qui vous devez craindre : Craignez celui qui, après que votre corps a été tué, a le pouvoir de vous jeter en enfer. Oui, je vous le dis, craignez-le.`,
          component: 68,

          subs: null
        },
        {
          shloka: `(12:25) Lequel d'entre vous, en s'inquiétant, peut ajouter une coudée à sa stature ?`,
          component: 69,

          subs: null
        },
        {
          shloka: "(12:33) Vendez vos biens et donnez-les aux pauvres. Prévoyez-vous des bourses qui ne s'useront pas, un trésor dans une paraloka qui ne faillira jamais, où aucun voleur ne s'approche et où aucun papillon ne détruit.",
          component: 70,
          subs: null
        },
        {
          shloka: "(12:34) Car là où est ton trésor, là sera aussi ton cœur.",
          component: 70,
          subs: null
        },
        {
          shloka: "(12:49) Je suis venu apporter le feu sur la terre, et comme j'aimerais qu'il soit déjà allumé.",
          component: 71,
          subs: null
        },
        {
          shloka: "(12:51) Pensez-vous que je suis venu apporter la paix sur terre ? Non, je vous le dis, mais la division.",
          component: 72,
          subs: null
        },
        {
          shloka: "(12:52) Désormais, dans une même famille, il y en aura cinq divisés les uns contre les autres, trois contre deux et deux contre trois.",
          component: 72,
          subs: null
        },
        {
          shloka: "(12:53) Ils seront divisés, père contre fils et fils contre père, mère contre fille et fille contre mère, belle-mère contre belle-fille et belle-fille contre belle-mère.",
          component: 72,
          subs: null
        },
        {
          shloka: "(13:3) À moins que vous ne changiez d’avis, vous aussi périrez tous.",
          component: 73,
          subs: null
        },
        {
          shloka: "(14:26) Si quelqu'un vient à moi et ne hait pas son père et sa mère, sa femme et ses enfants, ses frères et ses sœurs, et même sa propre vie, une telle personne ne peut pas être mon disciple.",
          component: 74,

          subs: null
        },
        {
          shloka: "(14:27) quiconque ne porte pas sa croix et ne me suit pas ne peut pas être mon disciple.",
          component: 75,
          subs: null
        },
        {
          shloka: "(18:29) «En vérité, je vous le dis», leur dit Jésus, «personne qui a quitté son foyer, ou sa femme, ou ses frères, ou sœurs, ou parents ou enfants, à cause du royaume de Dieu, ne manquera de recevoir plusieurs fois autant. dans ce siècle et dans le siècle à venir, la vie éternelle.",
          component: 76,
          subs: null
        },
        {
          shloka: "(21:15) Je vous donnerai des paroles et une sagesse auxquelles aucun de vos adversaires ne pourra résister ou contredire.",
          component: 77,

          subs: null
        },
        {
          shloka: "(21:17) Tout le monde vous détestera à cause de moi.",
          component: 78,
          subs: null
        }



      ]

    },
    {
      title: "L'Évangile de Jean", component: null, chapterNumber: 5, icon: 'book',
      subs: [
        {
          shloka: "(1:1) Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu.",
          component: 79,
          subs: null
        },
        {
          shloka: "(1:9) La vraie lumière qui éclaire tout le monde venait dans le monde.",
          component: 80,
          subs: null
        },
        {
          shloka: "(1:10) Il était dans le monde, et bien que le monde ait été créé à travers lui, le monde ne l'a pas reconnu.",
          component: 81,
          subs: null
        },
        {
          shloka: "(1:11) Il est venu vers ce qui lui appartenait, mais les siens ne l'ont pas reçu.",
          component: 82,
          subs: null
        },
        {
          shloka: "(1:12) Pourtant, à tous ceux qui l’ont reçu, à ceux qui ont cru en son nom, il a donné le droit de devenir enfants de Dieu.",
          component: 83,
          subs: null
        },
        {
          shloka: "(1:13) Les hommes nés ni d’une descendance naturelle, ni d’une décision humaine ou de la volonté d’un mari, mais né de Dieu.",
          component: 84,
          subs: null
        },
        {
          shloka: "(1:14) La Parole s'est faite chair et a élu domicile parmi nous. Nous avons vu sa gloire, la gloire du Fils unique, venu du Père, plein de grâce et de vérité.",
          component: 85,
          subs: null
        },
        {
          shloka: "(1:18) Aucun homme n’a jamais vu Dieu ; le Fils unique, qui est dans le sein du Père, l'a révélé.",
          component: 86,
          subs: null
        },
        {
          shloka: "(1:51) Il a ensuite ajouté : « En vérité, je vous le dis, vous verrez le ciel s'ouvrir et les anges de Dieu monter et descendre sur le Fils de l'homme. »",
          component: 87,
          subs: null
        },
        {
          shloka: "(3:3) Jésus répondit : « En vérité, je vous le dis, personne ne peut voir le royaume de Dieu à moins ils sont nés de nouveau.",
          component: 88,
          subs: null
        },
        {
          shloka: "(3:4) « Comment quelqu'un peut-il naître quand il est vieux ? » » demanda Nicodème. « Ils ne peuvent sûrement pas entrer une seconde fois dans le ventre de leur mère pour naître ! »",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:5) Jésus répondit : « En vérité, je vous le dis, personne ne peut entrer dans le royaume de Dieu. à moins qu'ils ne soient nés de l'eau et de l'Esprit (Atma).",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:6) La chair donne naissance à la chair, mais l'Esprit (Atma) donne naissance à l'esprit.",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:7) Vous ne devriez pas être surpris de ma parole : « Vous devez naître de nouveau. »",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:8) Le vent souffle où bon lui semble. Vous entendez son son, mais vous ne pouvez pas dire d’où il vient ni où il va. Il en va de même pour tous ceux qui sont nés de l’Esprit (Atma).",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:13) Personne n'est jamais allé à Paraloka sauf celui qui venait de Paraloka -le Fils de l'Homme.",
          component: 90,
          subs: null
        },
        {
          shloka: "(3:15) Pour que quiconque croit en Lui ne périsse pas mais ait la vie éternelle.",
          component: 91,
          subs: null
        },
        {
          shloka: "(3:17) Car Dieu n'a pas envoyé son Fils dans le monde pour juger le monde, mais pour sauver le monde par Lui.",
          component: 92,
          subs: null
        },
        {
          shloka: "(3:18) Celui qui croit en Lui n’est pas jugé, mais celui qui ne croit pas est déjà jugé parce qu’il n’a pas cru au nom du Fils unique de Dieu.",
          component: 93,
          subs: null
        },
        {
          shloka: "(3:19) Voici le verdict : La lumière est venue dans le monde, mais les gens ont préféré les ténèbres à la lumière parce que leurs actions étaient mauvaises.",
          component: 94,
          subs: null
        },
        {
          shloka: "(3:20) Quiconque fait le mal déteste la lumière et ne vient pas à la lumière de peur que ses actes ne soient révélés.",
          component: 94,
          subs: null
        },
        {
          shloka: "(3:21) Mais quiconque vit selon la vérité vient à la lumière, afin qu'il soit clairement vu que ce qu'il a fait a été fait devant Dieu.",
          component: 94,
          subs: null
        },
        {
          shloka: "(5:19) Jésus leur donna cette réponse : « En vérité, je vous le dis, le Fils ne peut rien faire de lui-même ; Il ne peut faire que ce qu’il voit faire son Père, car tout ce que fait le Père, le Fils le fait aussi.",
          component: 95,
          subs: null
        },
        {
          shloka: "(5:20) Car le Père aime le Fils et lui montre tout ce qu'il fait. Oui, et Il lui montrera des œuvres encore plus grandes que celles-ci, afin que vous en soyez étonnés.",
          component: 96,
          subs: null
        },
        {
          shloka: "(5:21) Car, de même que le Père ressuscite les morts et leur donne la vie, de même le Fils donne la vie à qui Il lui plaît de la donner.",
          component: 97,
          subs: null
        },
        {
          shloka: "(5:22) De plus, le Père ne juge personne, mais a confié tout jugement au Fils.",
          component: 97,
          subs: null
        },
        {
          shloka: "(5:23) Afin que tous honorent le Fils comme ils honorent le Père. Celui qui n'honore pas le Fils n'honore pas le Père qui l'a envoyé.",
          component: 97,
          subs: null
        },
        {
          shloka: "(5:24) En vérité, je vous le dis, quiconque entend ma parole et croit Celui qui m'a envoyé a la vie éternelle et ne sera pas jugé mais est passé de la mort à la vie.",
          component: 98,
          subs: null
        },
        {
          shloka: "(5:26) Car, de même que le Père a la vie en Lui-même, de même Il a donné au Fils aussi d'avoir la vie en Lui-même.",
          component: 99,
          subs: null
        },
        {
          shloka: "(5:37) Vous n’avez jamais entendu Sa voix ni vu Sa forme.",
          component: 100,
          subs: null
        },
        {
          shloka: "(5:38) Sa parole n'habite pas non plus en vous, car vous ne croyez pas celui qu'Il a envoyé.",
          component: 101,

          subs: null
        },
        {
          shloka: "(6:25) Lorsqu'ils le trouvèrent de l'autre côté du lac, ils lui demandèrent : « Rabbi, quand es-tu arrivé ici ?",
          component: 102,
          subs: null
        },
        {
          shloka: "(6:26) Jésus répondit : « En vérité, je vous le dis, vous me cherchez, non pas parce que tu as vu les signes que j'ai accomplis mais parce que tu as mangé les pains et que tu es rassasié.",
          component: 102,
          subs: null
        },
        {
          shloka: "(6:27) Ne travaillez pas pour une nourriture qui se gâte, mais pour une nourriture qui dure jusqu'à la vie éternelle, que le Fils de l'homme vous donnera. Car sur Lui, Dieu le Père a placé son sceau d’approbation.",
          component: 102,
          subs: null
        },
        {
          shloka: "(6:32) Jésus leur dit : « En vérité, je vous le dis, ce n'est pas Moïse qui vous a donné le pain de Paraloka, mais c'est mon Père qui vous donne le vrai pain de Paraloka.",
          component: 103,
          subs: null
        },
        {
          shloka: "(6:47) Personne n'a vu le Père, sauf celui qui vient de Dieu ; Lui seul a vu le Père.",
          component: 104,
          subs: null
        },
        {
          shloka: "(7:37) Le dernier et le plus grand jour de la fête, Jésus se leva et dit d'une voix forte : « Que quiconque a soif vienne à moi et boive. »",
          component: 105,
          subs: null
        },
        {
          shloka: "(7:38) Quiconque croit en moi, comme le dit l'Écriture, des fleuves d'eau vive couleront de son sein.",
          component: 105,
          subs: null
        },
        {
          shloka: "(8:12) Lorsque Jésus parla de nouveau au peuple, il dit : « Je suis la lumière du monde. Celui qui me suit ne marchera jamais dans les ténèbres mais aura la lumière de la vie.",
          component: 106,
          subs: null
        },
        {
          shloka: "(8:14) Jésus répondit : « Même si je témoigne en ma propre faveur, mon témoignage est valable, car je sais d'où je viens et où je vais. Mais vous n’avez aucune idée d’où je viens ni où je vais.",
          component: 107,
          subs: null
        },
        {
          shloka: "(8:19) Alors ils lui demandèrent : « Où est ton Père ? » « Vous ne me connaissez ni moi ni mon Père », répondit Jésus. « Si vous me connaissiez, vous connaîtriez aussi mon Père. »",
          component: 108,
          subs: null
        },
        {
          shloka: "(8:21) Jésus leur dit encore une fois : « Je m'en vais, et vous me chercherez, et vous mourrez dans votre péché. Là où je vais, tu ne peux pas venir.",
          component: 109,
          subs: null
        },
        {
          shloka: "(8:23) Mais il continua : « Vous venez d’en bas ; Je viens d'en haut. Vous êtes de ce monde ; Je ne suis pas de ce monde. (8:24) Je t'ai dit que tu mourrais dans tes péchés ; si vous ne croyez pas que je suis Lui, vous mourrez effectivement dans vos péchés.",
          component: 110,
          subs: null
        },

        {
          shloka: "(8:24) Je t'ai dit que tu mourrais dans tes péchés ; si vous ne croyez pas que je suis Lui, vous mourrez effectivement dans vos péchés.",
          component: 111,
          subs: null
        },
        {
          shloka: "(8:28) Ainsi, Jésus a dit : « Quand vous aurez élevé le Fils de l’homme, alors vous saurez que je suis Lui et que je ne fais rien de moi-même, mais je dis simplement ce que le Père m’a enseigné.",
          component: 112,
          subs: null
        },
        {
          shloka: "(8:29) Celui qui m'a envoyé est avec moi ; Il ne m'a pas laissé seul, car je fais toujours ce qui Lui plaît.",
          component: 113,
          subs: null
        },
        {
          shloka: "(8:53) Es-tu plus grand que notre père Abraham ? Il est mort, tout comme les prophètes. Pour qui te prends-tu ?",
          component: 114,
          subs: null
        },
        {
          shloka: "(8:54) Jésus répondit : « Si je me glorifie, ma gloire ne signifie rien. Mon Père, celui que vous proclamez votre Dieu, c'est celui qui me glorifie.",
          component: 114,
          subs: null
        },
        {
          shloka: "(8:55) Même si vous ne le connaissez pas, je le connais. Si je disais que non, je serais un menteur comme vous, mais je le connais et j’obéis à sa parole.",
          component: 115,
          subs: null
        },
        {
          shloka: "(8:57) «Tu n'as pas encore cinquante ans», lui dirent-ils, «et tu as vu Abraham!”.",
          component: 116,

          subs: null
        },
        {
          shloka: "(8:58) « En vérité, je vous le dis », répondit Jésus, « avant la naissance d'Abraham, Je suis pour le reste également! »",
          component: 116,

          subs: null
        },
        {
          shloka: "(9:39) Jésus a dit : « Je suis venu dans ce monde pour le jugement, afin que les aveugles verront et ceux qui voient deviendront aveugles.",
          component: 117,
          subs: null
        },
        {
          shloka: "(9 :41) Jésus a dit : « Si vous étiez aveugle, vous ne seriez pas coupable de péché ; mais maintenant que vous prétendez voir, votre culpabilité demeure.",
          component: 118,

          subs: null
        },
        {
          shloka: "(10:18) Personne ne me prend la vie, mais je la donne de mon propre gré. J'ai le pouvoir de le déposer et le pouvoir de le reprendre. Ce commandement, je l'ai reçu de mon Père.",
          component: 119,

          subs: null
        },
        {
          shloka: "(10:30) Moi et le Père sommes un.",
          component: 120,
          subs: null
        },
        {
          shloka: "(11:25) Jésus lui dit : « Je suis la résurrection et la vie. Celui qui croit en moi vivront, même s'ils meurent.",
          component: 121,
          subs: null
        },
        {
          shloka: "(11:26) Celui qui vit en croyant en moi ne mourra jamais.",
          component: 122,
          subs: null
        },
        {
          shloka: "(12:25) Quiconque aime sa vie la perdra, tandis que quiconque déteste sa vie dans ce monde la gardera pour la vie éternelle.",
          component: 123,
          subs: null
        },
        {
          shloka: "(12:40) Il a aveuglé leurs yeux et endurci leur cœur, de sorte qu'ils ne peuvent ni voir de leurs yeux, ni comprendre de leur cœur, ni se tourner – et je les guérirais.",
          component: 124,
          subs: null
        },
        {
          shloka: "(12:47) Si quelqu'un entend mes paroles mais ne les tient pas, je ne le juge pas. Car je ne suis pas venu pour juger le monde, mais pour sauver le monde.",
          component: 125,
          subs: null
        },
        {
          shloka: "(12:48) Il y a un juge pour celui qui me rejette et n'accepte pas mes paroles ; les paroles mêmes que j'ai prononcées les jugeront au dernier jour.",
          component: 125,
          subs: null
        },
        {
          shloka: "(12:49) Car je n'ai pas parlé de moi-même, mais le Père qui m'a envoyé m'a ordonné de dire tout ce que j'ai dit.",
          component: 126,
          subs: null
        },
        {
          shloka: "(12:50) Je sais que son commandement mène à la vie éternelle. Donc, quoi que je dise, c’est exactement ce que le Père m’a dit de dire.",
          component: 126,
          subs: null
        },
        {
          shloka: "(14:7) Si vous me connaissez vraiment, vous connaîtrez aussi mon Père. Désormais, vous le connaissez et vous l’avez vu.",
          component: 127,
          subs: null
        },
        {
          shloka: "(14:8) Philippe dit : « Seigneur, montre-nous le Père et cela nous suffira. »",
          component: 128,
          subs: null
        },
        {
          shloka: "(14:9) Jésus répondit : « Ne me connais-tu pas, Philippe, même après avoir été si longtemps parmi toi ? Quiconque m'a vu a vu le Père. Comment pouvez-vous dire : « montre-nous le Père ? »",
          component: 128,
          subs: null
        },
        {
          shloka: "(14:10) Ne croyez-vous pas que je suis dans le Père et que le Père est en moi ? Les paroles que je vous dis, je ne les prononce pas avec ma propre autorité. C'est plutôt le Père, vivant en moi, qui fait son œuvre.",
          component: 129,
          subs: null
        },
        {
          shloka: "(14:6) Jésus répondit : « Je suis le chemin, la vérité et la vie. Personne ne vient le Père sauf par moi.",
          component: 130,
          subs: null
        },
        {
          shloka: "(14:16) Je demanderai au Père, et Il vous donnera un autre Avocat pour vous aider et être avec vous pour toujours.",
          component: 131,
          subs: null
        },
        {
          shloka: "(14:17) Le monde ne peut pas l’accepter parce qu’il ne le voit ni ne le connaît. Mais vous le connaissez, car il vit avec vous et sera en vous.",
          component: 132,
          subs: null
        },

        {
          shloka: "(14:20) Ce jour-là, vous réaliserez que je suis en mon Père, que vous êtes en moi et que je suis en vous.",
          component: 133,
          subs: null
        },
        {
          shloka: "(14:25) Tout cela, je l'ai dit alors que j'étais encore avec vous",
          component: 134,
          subs: null
        },
        {
          shloka: "(14:26) Mais l'Avocat, le Saint-Esprit, que le Père enverra en mon nom, vous enseignera toutes choses et vous rappellera tout ce que je vous ai dit.",
          component: 134,
          subs: null
        },
        {
          shloka: "(15:23) Celui qui me hait hait aussi mon Père.",
          component: 135,
          subs: null
        },
        {
          shloka: "(15:24) Si je n'avais pas fait parmi eux les œuvres que personne d'autre n'a faites, ils ne seraient pas coupables de péché. Ils l’ont vu, et pourtant ils m’ont haï, moi et mon Père.",
          component: 136,
          subs: null
        },
        {
          shloka: "(15:25) Mais c’est pour accomplir ce qui est écrit dans leur Loi : « Ils m’ont haï sans raison. »",
          component: 136,
          subs: null
        },
        {
          shloka: "(15:26) Quand viendra le Défenseur que je vous enverrai de la part du Père – l'Esprit de vérité qui sort du Père – Il témoignera de moi.",
          component: 137,
          subs: null
        },
        {
          shloka: "(15:27) Et toi aussi, tu dois témoigner, car tu es avec moi depuis le début.",
          component: 137,
          subs: null
        },
        {
          shloka: "(16:7) Mais en vérité, je vous le dis, c'est pour votre bien que je m'en vais. Si je ne m'en vais, l'Avocat ne viendra pas vers vous ; mais si je pars, je vous l'enverrai.",
          component: 138,
          subs: null
        },
        {
          shloka: "(16:8) Quand Il viendra, Il prouvera que le monde a tort en matière de péché, de justice et de jugement.",
          component: 139,
          subs: null
        },
        {
          shloka: "(16:12) J'ai bien plus à te dire, plus que ce que tu peux supporter maintenant.",
          component: 140,
          subs: null
        },
        {
          shloka: "(16:13) Mais quand Lui, l’Esprit de vérité, viendra, Il vous guidera dans toute la vérité. Il ne parlera pas de lui-même ; Il ne dira que ce qu’il entend et il vous dira ce qui est encore à venir",
          component: 141,
          subs: null
        },
        {
          shloka: "(16:14) Il me glorifiera car c'est de moi qu'Il recevra ce qu'Il vous fera connaître.",
          component: 142,
          subs: null
        },
        {
          shloka: "(16:15) Tout ce qui appartient au Père est à moi. C'est pourquoi j'ai dit que l'Esprit recevra de moi ce qu'Il vous fera connaître.",
          component: 142,
          subs: null
        },
        {
          shloka: "(16:16) Jésus poursuivit en disant : « Dans peu de temps, vous ne me verrez plus, et puis après un peu de temps, vous me verrez. »",
          component: 143,
          subs: null
        },
        {
          shloka: "(16:17) Alors quelques-uns de ses disciples se dirent entre eux : « Que veut-il dire en disant : Dans peu de temps vous ne me verrez plus, et puis dans peu de temps vous me verrez ? « Parce que je vais chez le Père » ?",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:18) Ils n’arrêtaient pas de demander : « Que veut-Il dire par « un peu de temps » ? Nous ne le faisons pas comprenez ce qu’Il ​​dit.",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:19) Jésus vit qu'ils voulaient l'interroger à ce sujet, alors il leur dit : « Vous demandez-vous mutuellement ce que je voulais dire quand je vous ai dit : « Dans peu de temps, vous ne me verrez plus, et puis après tu me verras dans un moment' ?",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:20) En vérité, je vous le dis, vous pleurerez et vous pleurerez tandis que le monde se réjouira. Vous serez affligé, mais votre chagrin se transformera en joie.",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:21) Une femme qui accouche d'un enfant souffre parce que son heure est venue ; mais quand son bébé naît, elle oublie l'angoisse à cause de sa joie qu'un enfant naisse au monde.",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:22) Ainsi, avec vous : C'est maintenant votre temps de chagrin, mais je vous reverrai et vous vous réjouirez, et personne ne vous enlèvera votre joie.",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:25) Bien que j'aie parlé au sens figuré, un temps vient où je n'utiliserai plus ce genre de langage mais où je vous parlerai clairement de mon Père.",
          component: 145,

          subs: null
        },


      ]

    },
    {
      title: "Les révélations", component: 146, chapterNumber: 6, subs: null, icon: 'information'
    },
    {
      title: 'Les trois doigts', component: 147, chapterNumber: 7, subs: null, icon: 'information'

    },
    {
      title: 'Bon vendredi - mauvais vendredi', component: 148, chapterNumber: 8, subs: null, icon: 'information'

    },
    {
      title: "Lettre d'un hindou", component: 149, chapterNumber: 9, subs: null, icon: 'information'

    },

    {
      title: 'Glossaire', component: 151, chapterNumber: 11, subs: null, icon: 'information'

    },

    {
      title: 'Vidéo', component: 152, chapterNumber: 12, subs: null, icon: 'videocam'

    }
    // ,
    // {
    //   title: 'Share', component: 153, chapterNumber: 13, subs: null, icon: 'share'

    // }
  ];



}

