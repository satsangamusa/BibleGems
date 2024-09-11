import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItalianService {

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
chapterName: "La via di Dio",
chapterNumber: 0,
pageNumber: 0,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  C'era della storia prima dell'arrivo di Ges&ugrave; sulla Terra. C'&egrave; anche qualche storia dopo la Sua morte. La storia registrata prima della Sua nascita &egrave; conosciuta come <b> Antico Testamento </b> , mentre la storia documentata dopo il Suo arrivo &egrave; chiamata the <b> Nuovo Testamento </b> . L'Antico Testamento che copre il periodo prima della Sua nascita, la Sua vita nel Nuovo Testamento e la propagazione della comunit&agrave; cristiana dopo la Sua morte, riveste un grande significato per la comunit&agrave; cristiana. La raccolta sia dell'Antico che del Nuovo Testamento &egrave; conosciuta come <b> Sacra Bibbia </b> . Anche se la Bibbia cristiana e la Bhagavad-Gita ind&ugrave; mirano entrambe a elevare e guidare gli esseri umani verso Dio, hanno le loro differenze. La Bhagavad-Gita consiste esclusivamente degli insegnamenti di Krishna, mentre la Sacra Bibbia comprende resoconti storici prima e dopo Ges&ugrave;. Gli insegnamenti cristiani provengono dall&rsquo;Antico Testamento prima della nascita di Cristo e dalla propagazione da parte dei Suoi devoti nel Nuovo Testamento dopo la Sua morte. Anche se non c&rsquo;&egrave; nulla di intrinsecamente sbagliato in questo, dopo una riflessione pi&ugrave; approfondita, diventa evidente che solo una parte della Bibbia &egrave; essenziale per guidare le persone sul cammino verso Dio. Proprio come in una commedia, tendiamo a favorire certi personaggi, e in un dramma con pi&ugrave; episodi, potremmo preferirne uno rispetto agli altri, nel caso della Bibbia, &egrave; la parte del Nuovo Testamento incentrata su Ges&ugrave; Cristo, dalla Sua dall'arrivo sulla Terra alla Sua dipartita, che detiene la massima santit&agrave; e importanza nel raggiungimento della liberazione (moksham). &Egrave; fondamentale capire che l&rsquo;essenza centrale della Bibbia risiede nella storia di Ges&ugrave;. Le parole di Ges&ugrave; sono come un sacco di diamanti all&rsquo;interno della Bibbia, e tutto ci&ograve; che l&rsquo;umanit&agrave; ha bisogno di cogliere pu&ograve; essere trovato in essa <b> Vangeli di Matteo, Marco, Luca e Giovanni </b> . La vicinanza divina che l'umanit&agrave; ricerca pu&ograve; essere scoperta in questi quattro Vangeli. La saggezza pi&ugrave; alta contenuta in questi Vangeli si trova nel Vangelo di Giovanni, superando l'intelligenza umana. Nonostante la Bibbia sia lunga 1029 pagine, la storia di Ges&ugrave; occupa solo 102 pagine nel Nuovo Testamento. Se la Bibbia fosse divisa in dieci parti, una parte supera le altre nove, e coloro che apprezzano il valore di Ges&ugrave; riconoscono la profonda saggezza contenuta in quest&rsquo;unica parte.

  Siamo qui per chiarire alcune delle parole di Ges&ugrave; tratte dai Vangeli di Matteo, Marco, Luca e Giovanni, che sono pieni di profonda saggezza. Ci si potrebbe chiedere perch&eacute; ribadiamo queste parole quando molti padri, pastori e vescovi hanno gi&agrave; offerto le loro interpretazioni. Ecco la mia risposta: mentre i predicatori insegnano effettivamente versetti dell&rsquo;Antico e del Nuovo Testamento, sembra esserci una lacuna nella spiegazione dei versetti dei quattro Vangeli, che racchiudono la storia di Cristo. Proprio come gli ind&ugrave; potrebbero non aver ancora svelato completamente i segreti della Bhagavad-Gita, potrebbero esserci numerose verit&agrave; nascoste nei quattro Vangeli che i cristiani devono ancora scoprire. Questa non &egrave; una dichiarazione di invidia verso i predicatori; piuttosto, &egrave; un&rsquo;espressione di fede in Cristo. Il nostro scopo &egrave; condividere la verit&agrave; e garantire che le persone possano acquisire una corretta comprensione di Ges&ugrave;, apprezzando la Sua <b> grandezza e potere. </b>

  Gli ind&ugrave;, vedendo i miei libri che contengono il nome di Cristo, spesso presumono che siano letteratura cristiana e si rifiutano di leggerli. Al contrario, i cristiani potrebbero diffidare dei libri scritti da un guru ind&ugrave; e preferire attenersi ai testi cristiani. Gli ind&ugrave; odiano il mio lavoro, pensando che un autore cristiano non possa essere un vero ind&ugrave;, mentre alcuni cristiani potrebbero mettere in guardia contro i miei libri, ritenendo che abbiano lo scopo di convertire i cristiani a Induismo e dovrebbe essere evitato. Gli ind&ugrave; ci accusano di convertire la loro gente al cristianesimo, e i cristiani ci accusano di trasformarli in ind&ugrave;. Tuttavia, &egrave; essenziale chiarire le nostre intenzioni. Non cerchiamo di convertire nessuno, ma piuttosto il nostro obiettivo &egrave; incoraggiare le persone a cercare la saggezza del vero Dio. Ogni figlio di Dio ha il Giusto esprimere le proprie convinzioni su Dio. Pertanto, condividiamo con pazienza gli insegnamenti di Dio, indipendentemente da ci&ograve; che gli altri possono pensare o supporre.

  Ho una domanda per coloro che possono nutrire dubbi o gelosie. <b> Dio &egrave; venuto sulla Terra come uomo e se ne &egrave; andato, ma ha anche promesso di ritornare. Qualcuno pu&ograve; affermare con sicurezza che Dio appare solo una volta? </b> Una simile affermazione sembrerebbe incompatibile con la vera saggezza. Dio ha proclamato il Suo ritorno ogni volta che ce n&rsquo;&egrave; bisogno sulla Terra. Viene nei momenti di avversit&agrave; quando i principi del dharma sono minacciati. Questa dichiarazione &egrave; evidente sia nella Bhagavad-Gita che nella Bibbia. Dio pu&ograve; assumere qualsiasi forma e trasmettere i Suoi insegnamenti. <b> &Egrave; un errore per gli ind&ugrave; anticipare il ritorno di Krishna come Krishna o per i cristiani aspettarsi che Ges&ugrave; ritorni come Ges&ugrave;. </b> Quando Dio sceglie di venire, non ci sono vincoli riguardo al tempo, al luogo o alla forma. Potrebbe manifestarsi in forme oltre il riconoscimento umano, ma il Suo messaggio rimane immutato nel tempo. Il Dharma, in quanto principio divino, &egrave; intrinsecamente coerente e immutabile, simile alle leggi scientifiche. Di conseguenza, Dio impartir&agrave; sempre lo stesso dharma, indipendentemente dal Suo nome, dalla Sua forma o dalla religione attraverso la quale &egrave; nato.

  Dio non ha mai stabilito una religione specifica sulla Terra quando &egrave; apparso. I Suoi insegnamenti non sono vincolati da alcun quadro religioso particolare ed Egli non appoggiava n&eacute; apparteneva ad alcuna religione. Invece, trasmise i Suoi principi divini, o dharma, senza fare riferimento ad alcuna religione specifica. La creazione delle religioni &egrave; un&rsquo;impresa umana. Quando Dio osservava le trasgressioni commesse da persone di qualsiasi gruppo religioso, ne sottolineava gli errori e li guidava verso il futuro <b> Il percorso corretto di Dio </b> incoraggiava la pratica del dharma indipendentemente dall'affiliazione religiosa. I Dharma stessi non hanno creato le religioni. Gli esseri umani hanno formato religioni basate sulla loro comprensione della saggezza divina, sulla lingua che parlavano e sui loro comportamenti.

  Ogni religione segue la sua metodologia unica e adora una divinit&agrave; specifica. &Egrave; consuetudine che gli aderenti ad una religione osservino i rituali associati a quella fede. Tuttavia, &egrave; fondamentale capire che queste pratiche religiose sono creazioni umane. Quando Dio assume forma umana sulla Terra, non aderisce ad alcun rituale o costume religioso specifico. N&eacute; si impegna nell&rsquo;adorazione di altre divinit&agrave;. Le pratiche e i rituali religiosi sono per gli esseri umani, non per Dio. Invece, il ruolo di Dio &egrave; quello di guidare le persone verso il futuro <b> strada giusta </b> , rivelando eventuali carenze nella loro devozione. Quando Dio si incarna come essere umano, il Suo obiettivo &egrave; trasmettere la conoscenza di Dio e dei Suoi dharma, piuttosto che partecipare all&rsquo;adorazione della divinit&agrave;, come fanno gli esseri umani.

  Quando Dio si incarn&ograve; come Krishna nel Dvapara Yuga, non si impegn&ograve; nell&rsquo;adorazione di alcuna divinit&agrave;. Invece, rivel&ograve; pienamente la saggezza del Paramatma (l&rsquo;Anima Suprema) quando fu il momento giusto. Allo stesso modo, quando Dio si incarn&ograve; come Ges&ugrave; Cristo nel Kali Yuga, non si impegn&ograve; nell&rsquo;adorazione delle divinit&agrave; ma predic&ograve; la saggezza che intendeva trasmettere. La Sua vera grandezza e divinit&agrave; diventano evidenti quando impartisce <b> saggezza </b> . In altri momenti, pu&ograve; apparire come un individuo comune, proprio come tutti gli altri. Gli ignoranti possono scambiarLo per una persona comune, ma quelli dotati di saggezza s&igrave; riconoscerlo come Dio. Coloro che possiedono la saggezza completa possono identificarLo ogni volta che discende sulla Terra. Tuttavia, gli individui sotto l&rsquo;influenza di Maya non riescono a riconoscerLo in nessuna circostanza. Inoltre, gli esseri umani a volte Lo percepiscono come un individuo comune, sottoponendoLo ad insulti e causandogli vari problemi.

  Quando Dio viene sulla Terra come essere umano una volta ogni qualche migliaio di anni, gli umani che sono stirpe di serpenti non possono riconoscerlo. Non solo non lo riconoscono, ma lo sottopongono anche a tortura. Alcuni potrebbero chiedersi perch&eacute; Egli sia sottoposto a tormento quando gli esseri umani in genere non torturano i loro simili. La risposta sta nel fatto che quando Dio si incarna come essere umano, non conduce una vita ordinaria. Il suo scopo &egrave; impartire saggezza divina in allineamento con il dharma. Di conseguenza, coloro che sono ignoranti e non comprendono il dharma sviluppano animosit&agrave; nei Suoi confronti, e questo odio pu&ograve; portare alla Sua persecuzione. In assenza di insegnamenti divini, non esisterebbero tali avversari. Tuttavia, quando Egli sottolinea gli adharma nella condotta umana, coloro che vi aderiscono, pur credendo di seguire il dharma, si arrabbieranno. Nel corso della storia, gli esseri umani hanno mostrato mancanza di rispetto nei Suoi confronti in ogni incarnazione umana. Alcuni erano invidiosi di Ges&ugrave; quando insegnava la saggezza divina. Non riuscirono ad apprezzare la Sua grandezza e saggezza, condannandolo infine a morte. Mor&igrave; a causa dei seguaci religiosi che pensavano di essere gnanis. La stirpe dei serpenti possiede il veleno dell'ignoranza. Quindi, la vita di Cristo fin&igrave; per mano della stirpe di serpenti.

  Dio conosce ogni cosa su Dio e gli esseri umani non sanno nulla. Gli esseri umani possono comprendere i dharma di Dio (principi divini) solo quando Dio li rivela. La rivelazione divina &egrave; essenziale affinch&eacute; gli esseri umani possano acquisire una visione approfondita della natura e degli insegnamenti di Dio. Una porzione di Dio, presente in ogni atomo dell'universo, si incarna come essere umano. Per esistere nel mondo per un certo periodo, &egrave; coinvolto un sistema noto come karma. La causa della nascita umana &egrave; attribuita al karma, ma Dio stesso &egrave; al di l&agrave; del karma. Pertanto, Dio genera il karma necessario per la Sua nascita e si incarna con quel karma. Tale individuo viene chiamato <b> Swayambhu </b> , che significa "nato da s&eacute;", non vincolato dal karma. Un tale essere &egrave; conosciuto come <b> Dio o Consolatore (Adarana Karta) </b> . Si ritiene che Dio possa essersi manifestato sulla Terra come Bhagavan molte volte in passato, sebbene il numero preciso di volte in cui il dharma sia stato restaurato sulla Terra rimane sconosciuto. Molti misteri si sono svelati negli ultimi milioni di anni e la storia documentata abbraccia solo poche migliaia di anni. Di conseguenza, la nostra conoscenza degli eventi passati &egrave; limitata, ma i documenti storici indicano casi in cui Dio si &egrave; incarnato come essere umano per guidare l&rsquo;umanit&agrave;.

  <b> Diventa evidente che Dio si incarna e muore occasionalmente come essere umano sulla Terra. </b> Dopo una profonda riflessione e con la saggezza che possediamo, diventa evidente che Dio &egrave; nato circa 5.000 anni fa in India e circa 2.000 anni fa in Israele. Questa incarnazione divina era conosciuta come Ges&ugrave; Cristo durante la Sua permanenza in Israele. Fu presente tra gli umani sulla Terra per un periodo limitato di 33 anni, guidato dal Suo karma predeterminato. Durante i primi 30 anni della Sua vita, Ges&ugrave; visse come un normale Jeevatma. Fu nei tre anni successivi che Egli impart&igrave; la saggezza dell&rsquo;Atma all&rsquo;umanit&agrave;, vivendo a volte come Atma.

  Alcuni potrebbero mettere in dubbio la mia affermazione secondo cui &ldquo;La divinit&agrave; nasce come uomo sulla terra&rdquo;. La divinit&agrave; (Dio) si diffonde in ogni atomo dell&rsquo;universo&rdquo;. Dio non si diffonde in tutto l&rsquo;universo quando nasce come uomo? Dio, che si dice sia presente in tutti, non &egrave; forse presente in tutti noi dopo essere nato come Bhagavan sulla terra? Esploriamo la risposta utilizzando un&rsquo;analogia. Considera il mare, che &egrave; pieno d'acqua. Se prendiamo una parte di quell'acqua dal mare in un piccolo contenitore, il contenitore ora contiene acqua di mare, ma il mare rimane pieno d'acqua. L'acqua nel contenitore viene definita "acqua separata", mentre l'acqua del mare &egrave; "acqua non separata". Sia il mare che il contenitore condividono la stessa acqua, senza alcuna differenza nelle propriet&agrave; dell'acqua, tranne l'acqua del contenitore &egrave; separato dal mare. Allo stesso modo, possiamo paragonare Dio al mare. Bhagavan &egrave; come l'acqua separata nel contenitore, distinta da Dio come il mare. Tuttavia, l&rsquo;acqua del contenitore e l&rsquo;acqua di mare sono la stessa cosa; allo stesso modo, Bhagavan e Dio sono identici. Quando l&rsquo;acqua viene messa in un contenitore, non impoverisce il mare, che rimane pieno. Allo stesso modo, quando una parte di Dio si incarna come Bhagavan, Dio continua ad essere onnipresente come prima. Non c&rsquo;&egrave; alcuna alterazione in Dio, nei Suoi principi divini o nella Sua onnipresenza quando appare come Bhagavan. Una parte di Dio diventa Bhagavan, ma non il Dio intero. Anche se Bhagavan &egrave; solo una parte di Dio, ha le stesse propriet&agrave;. Pertanto, non c&rsquo;&egrave; niente di sbagliato nel dire che Dio &egrave; nato, anche se solo una parte di Dio nasce sulla terra. Quindi non c&rsquo;&egrave; niente di sbagliato nel dire che Ges&ugrave; &egrave; &ldquo;Dio&rdquo;.

  Alcuni individui potrebbero porre un&rsquo;altra domanda: se Ges&ugrave; &egrave; Dio, perch&eacute; sopport&ograve; la sofferenza quando le persone Lo danneggiarono? Perch&eacute; fu sottoposto alla tortura e all&rsquo;umiliazione umana? Potrebbero anche chiedersi perch&eacute; Ges&ugrave; non abbia rivelato loro la Sua identit&agrave; divina e non abbia impiegato il Suo potere divino per punire coloro che Lo maltrattavano. Ecco la nostra risposta: Per comprendere questo dobbiamo prima cogliere un segreto divino. Nel corpo di una persona comune esistono tre anime: Jeevatma, Atma e Paramatma. Tra queste tre anime, Jeevatma e Atma risiedono entrambe nel corpo. Queste due anime non sono esterne al corpo. La terza anima, Paramatma, si estende dentro e oltre il corpo, permeando ogni atomo dell'universo. Tuttavia, il Paramatma non si impegna attivamente in azioni all'interno o all'esterno del corpo. La seconda anima, Atma, &egrave; responsabile di tutte le funzioni corporee. La prima anima, Jeevatma, non fa altro che sperimentare piacere e dolore. Molti individui potrebbero pensare che loro (Jeevatma) siano coloro che eseguono ogni azione, ma non &egrave; cos&igrave; nel corpo umano. L'Atma, che risiede dentro di noi senza la nostra consapevolezza cosciente, svolge tutto il lavoro. Perfino l'Atma non fa nulla secondo la propria volont&agrave;. <b> Atma </b> funziona secondo <b> karma </b> , che &egrave; la causa alla base di ogni attivit&agrave;. Secondo la legge del karma, Jeevatma &egrave; destinato a provare piacere e dolore. Affinch&eacute; Jeevatma possa subire queste esperienze all'interno del corpo, l'Atma, che &egrave; diffuso in tutto il corpo, facilita queste funzioni corporee. Ci&ograve; include processi fisiologici come la digestione del cibo, la regolazione del battito cardiaco e la gestione delle funzioni corporee come la separazione dell'urina e del sudore dal sangue. Il ruolo dell&rsquo;Atma nello svolgimento di queste funzioni corporee consente a Jeevatma di coesistere all&rsquo;interno del corpo. All&rsquo;interno del corpo, la funzione primaria di Jeevatma &egrave; sperimentare. Questa &egrave; una legge intrinseca che governa ogni corpo umano, immutabile e costante.

  Anche se Dio nasce come essere umano, il Suo corpo opera con un sistema simile a quello di un essere umano comune. Nel Suo corpo deve essere presente Paramatma, l'Atma esegue tutto il lavoro e Jeevatma sperimenta. Questo stesso processo avviene nel corpo di Dio quando assume forma umana. Quando Dio venne come Ges&ugrave;, il Suo corpo era no diverso da un normale corpo umano. Di conseguenza, speriment&ograve; sofferenze e piaceri proprio come farebbe qualsiasi Jeevatma. Ges&ugrave; affront&ograve; numerose sfide nella vita, tutte quelle che dovette affrontare come Jeevatma. Per sottoporsi a queste esperienze nella Sua vita terrena, cre&ograve; il Suo karma e si incarn&ograve; come essere umano. Ora potresti chiederti cosa lo distingue da noi. C'&egrave; davvero una differenza significativa. Abbiamo precedentemente appreso che solo l'Atma opera all'interno di ogni corpo umano. Anche nel corpo di Bhagavan &egrave; l&rsquo;Atma a svolgere le funzioni. Tuttavia, ci sono casi unici in cui qualcosa di diverso traspare nel corpo di Bhagavan. In certe occasioni, le tre anime si discostano dai loro ruoli convenzionali e operano in modo diverso. Durante tali momenti, Jeevatma entra in uno stato in cui non c'&egrave; esperienza, consentendo all'Atma di assumere il ruolo di Jeevatma. Le parole pronunciate dal corpo di Bhagavan in questo stato, provenienti da Atma, sono di natura interamente spirituale. Le profonde verit&agrave; spirituali e i dharma di Dio vengono rivelati solo quando l&rsquo;Atma parla direttamente. In rare occasioni, Atma e Jeevatma diventano silenziosi e Paramatma prende il sopravvento e parla. Tali eventi possono verificarsi una o due volte nella vita di Bhagavan. Nella vita di Ges&ugrave;, Krishna e Ravana Brahma, ci furono casi in cui Paramatma parl&ograve;. Quando il Paramatma parla, Prakruti (la natura materiale) segue le Sue parole. Allo stesso modo, quando l&rsquo;Atma parla, la profonda saggezza &egrave; sotto il Suo controllo. Nella vita di queste incarnazioni divine &egrave; accaduto quanto segue: <b> 1) Le parole del Paramatma esercitavano il comando su Prakruti. 2) Le parole di Atma trasmettono la pura saggezza dell&rsquo;Atma. 3) Jeevatma ha sperimentato piacere e dolore. </b> Paramatma parl&ograve; quando scoppi&ograve; una tempesta nel mare durante la vita di Ges&ugrave; e quando Egli comand&ograve; alla tempesta di calmarsi. Divenne evidente che Prakruti segu&igrave; le Sue parole e si calm&ograve;. Come Atma, esprime pura saggezza. Ha anche sperimentato varie gioie e dolori come Jeevatma durante il resto della Sua vita. Eventi simili si verificarono nella vita di Krishna, quando Egli comand&ograve; il Sole e uccise Saindhava. Ci fu anche un&rsquo;occasione in cui Krishna rivel&ograve; una forma universale e dichiar&ograve;: &ldquo;Io sono Paramatma&rdquo;. Come Atma, trasmise una profonda saggezza nella forma della Bhagavad-Gita e speriment&ograve; i piaceri e i dolori della vita come un Jeevatma per il tempo rimanente. Questa interazione delle tre anime che assumono ruoli distinti avviene esclusivamente all&rsquo;interno del corpo di Bhagavan. La divinit&agrave; assume forma umana solo una volta ogni migliaia o addirittura milioni di anni. Quando Dio nasce sulla Terra, vive prevalentemente come Jeevatma, simile agli altri. Tuttavia, Egli parla occasionalmente come Atma alcune volte all'anno per brevi periodi quando necessario. Parlare come Paramatma accade molto raramente, se non del tutto. La necessit&agrave; di parlare come Atma nasce perch&eacute; Egli &egrave; venuto per impartire i dharma. Questo rappresenta il sistema di Dio, distinto dal sistema di Maya.

  Non ci sono problemi finch&eacute; Dio si comporta come un uomo comune. Maya, tuttavia, si oppone quando Dio impartisce la saggezza come Atma. Maya &egrave; fondamentalmente contraria alla saggezza di Dio. Pertanto, Maya, spesso definita Satana, &egrave; vigile nell&rsquo;impedire agli individui di spostare la loro fedelt&agrave; dalla parte di Maya per abbracciare la saggezza di Dio. Inoltre, Maya cerca attivamente coloro che mostrano interesse e comprensione per la saggezza, tentando di riportarli dalla sua parte. Questo &egrave; il motivo per cui molte persone hanno solo un interesse limitato nell&rsquo;abbracciare la vera saggezza divina, in gran parte a causa dell&rsquo;influenza di Maya. Di conseguenza, anche coloro che possiedono una certa saggezza potrebbero deviare dal sentiero. A questo punto potresti sollevare una domanda: &ldquo;Oggi ci sono numerosi devoti che sono profondamente impegnati nella loro fede. Cercano la saggezza di vari guru spirituali e mostrano una devozione incrollabile alle divinit&agrave;. Quasi tutti sono devoti a Dio, tranne a pochi atei. &Egrave; possibile cambiare i devoti di Sai Baba e Ayyappa? Oltre ai templi di vecchia data nel paese, numerosi nuovi templi vengono costruiti in onore di Shirdi Sai Baba e Ayyappa Swamy. Sembra che Maya non abbia ostacolato la loro devozione. Come possiamo accettare la tua prospettiva?&rdquo; Ecco la mia risposta.

  Maya &egrave; in diretta opposizione al sentiero di Dio e alla saggezza suprema. Il suo opposizione alla profonda saggezza di Dio dimostra il grande potere di Maya, a cui ci si riferisce come <b> 'Maya duratyaya' </b> nella Bhagavad-Gita. Dio lo ha detto nella Bhagavad-Gita <b> &egrave; impossibile conquistare Maya; </b> quindi si sa che <b> Maya inganna in modo inimmaginabile gli esseri umani. </b> Pertanto, il funzionamento di Maya rimane in gran parte sfuggente e misterioso, lasciando gli individui suscettibili ai suoi inganni. Maya opera creando la propria versione di saggezza. Poich&eacute; Dio raramente si incarna sulla Terra come Bhagavan una volta ogni migliaia di anni, Maya produce numerose imitazioni dei Bhagavan per confondere e distogliere le persone dal riconoscere il vero Bhagavan. Introduce molti tipi di saggezza, rendendo difficile per molti distinguere la vera saggezza da quella contraffatta. Quando ci sono molti Bhagavan associati a Maya sulla terra, chi riconoscer&agrave; il vero Bhagavan che raramente viene sulla terra? Quando ci sono Bhagavan che esibiscono numerose imprese e miracoli soprannaturali (mahatya), chi pu&ograve; identificare il vero Bhagavan che dimostra solo uno o due mahatya in una vita? In questo modo &egrave; diventato impossibile riconoscere la saggezza di Dio e di Bhagavan. Dio ha mostrato la Sua realt&agrave; in forma universale, qualcosa che nessuno ha mai visto e potr&agrave; mai comprendere. Ma Maya influenz&ograve; alcune persone a scrivere che molti devata mostravano una forma universale, inclusi Saibaba e Veerabrahmam, cos&igrave; che le persone non considerano la forma universale di Krishna come la pi&ugrave; elevata. Chi pensa che la forma universale mostrata da Krishna nella Bhagavad-Gita sia la pi&ugrave; grande di tutte? Pertanto, i cristiani non potevano riconoscere Ges&ugrave; Cristo come Bhagavan; allo stesso modo, gli ind&ugrave; non potevano conoscere Krishna come Bhagavan. Gli ind&ugrave; non potevano considerare Krishna il vero Dio. Mentre alcuni lo vedono come l'ultimo di tutti gli altri Dei, altri non riescono a riconoscerlo nemmeno come una divinit&agrave; minore a causa della percezione delle sue azioni come maliziose. Nessuno considera Krishna nemmeno come Dio, come Shirdi Sai Baba. Allo stesso modo, nella tradizione cristiana, pur considerando Ges&ugrave; Cristo come il Figlio di Dio, molti non hanno colto l&rsquo;essenza dei Suoi insegnamenti. Sotto l&rsquo;influenza di Maya, i cristiani venerano la croce, che fu determinante nella crocifissione di Ges&ugrave;, invece di Ges&ugrave; stesso. Pensavano che se avessero adorato sarebbero stati considerati ind&ugrave; <b> Ges&ugrave; </b> &rsquo; <b> idolo </b> ; quindi pregano la croce. Mentre Ges&ugrave; diceva: &ldquo; <b> Chi ha visto me ha visto il Padre mio </b> &rdquo;, non &egrave; forse l&rsquo;opera di Maya che ha fatto s&igrave; che i cristiani rispettassero la croce, che caus&ograve; la morte di Ges&ugrave;, invece dell&rsquo;idolo di Ges&ugrave;? Maya allontana strategicamente le persone dal sentiero di Dio, anche quando credono di essere fermamente su quel sentiero. Funziona per minare la credibilit&agrave; di coloro che comprendono la saggezza di Dio e dicono la verit&agrave;, facendo apparire le loro parole inferiori o inascoltate. Inoltre, Maya ha contribuito alla formazione di varie religioni e all'illusione che esistano Dei distinti per ciascuna religione. Nonostante esista un potere supremo che governa l'universo, Maya ha favorito la fede in pi&ugrave; Dei corrispondenti a diverse religioni. L'influenza di Maya &egrave; profonda e porta all'emergere di una moltitudine di divinit&agrave; e credenze religiose. Solo all'interno della fede cristiana, alcuni devoti adorano Maria mentre altri adorano Cristo. Allo stesso modo, l&rsquo;Induismo vanta numerose divinit&agrave;. Alla luce di questa diversit&agrave;, &egrave; ora essenziale intraprendere una ricerca per discernere il capo ultimo di tutte le divinit&agrave; e religioni. Tuttavia, questo compito non &egrave; facile. <b> Riconoscendo innanzitutto Maya e il suo impatto, possiamo successivamente cercare il percorso verso Dio. </b><b><br /></b>

  Pertanto, &egrave; importante determinare se il percorso che stai attualmente percorrendo conduce a Dio o &egrave; influenzato da Maya.

  Esiste un potere soprannaturale infinito che &egrave; senza forma, senza nome e indefinito. Chiamiamolo "Paramatma". Si sa molto poco del Paramatma, la fonte di tutta l'esistenza. Il Paramatma deve manifestarsi e rivelarsi personalmente perch&eacute;, pur permeando ogni atomo, restiamo limitati a comprendere solo i Pancha Bhuta (cinque elementi fondamentali). I nostri sensi possono percepire solo ci&ograve; che &egrave; nel loro raggio d'azione, e il Paramatma &egrave; oltre la portata dei nostri sensi. Possiamo comprenderlo solo quando assume forma umana, rendendosi visibile e rivelando la sua saggezza. Altrimenti rimaniamo inconsapevoli di Lui. Pertanto, Paramatma deve incarnarsi come essere umano e impartire la Sua saggezza. Egli emerge per rivelare i Suoi dharma, ma questi insegnamenti svaniscono nel tempo, rendendo necessario il Suo ritorno per ripristinarli. Paramatma, il creatore dell'universo, sceglie spesso di manifestarsi come essere umano, conducendo un'esistenza simile a quella di una persona comune e adempiendo al Suo scopo. Identificare il Paramatma in tale forma &egrave; un compito impegnativo. Nonostante le numerose incarnazioni di Paramatma sulla Terra, gli esseri umani hanno faticato a riconoscere la Sua presenza anche oggi.

  Coloro che non riescono a riconoscere Bhagavan quando &egrave; presente spesso iniziano ad adorarlo con grande devozione dopo che se ne &egrave; andato. Non Lo adorano perch&eacute; &egrave; Paramatma, ma piuttosto perch&eacute; credono che possieda una grande saggezza o che i loro desideri saranno soddisfatti. Tuttavia, ancora non si rendono conto che Egli &egrave; Paramatma. Possiamo riconoscere le incarnazioni del Paramatma attraverso determinati principi. In questo modo, possiamo identificare che Paramatma venne come Krishna alla fine del Dvapara Yuga e successivamente come Ges&ugrave; nel Kali Yuga. Il Paramatma potrebbe anche essere arrivato in un secondo momento, ma non lo sappiamo.

  Indipendentemente da quante nascite ha avuto Paramatma, non ci sono somiglianze tra una nascita e l'altra tranne che nei Suoi dharma. Sebbene l&rsquo;essenza del Paramatma rimanga la stessa in Krishna, che nacque nel Dvapara Yuga, e in Ges&ugrave;, che nacque nel Kali Yuga, le loro vite esteriori sono molto diverse. Sri Krishna godeva di una vita ricca e aveva otto mogli. Rap&igrave; anche la sua prima moglie con il suo consenso e uccise i suoi nemici. Dopo aver osservato tutto ci&ograve;, diventa difficile per chiunque riconoscerlo come Bhagavan, che &egrave; permeato di una parte del Paramatma.

  Non ci furono bugie o inganni nella vita di Ges&ugrave;, che nacque nel Kali Yuga. Ges&ugrave; era mite e porgeva l'altra guancia se veniva schiaffeggiato da un nemico. Non aveva alcuna passione per le donne. Krishna e Ges&ugrave; sono molto diversi nelle questioni mondane. Anche i Guru di entrambe le religioni si sbagliano su questi due. I guru ind&ugrave; criticano Ges&ugrave; chiedendo: &ldquo;Perch&eacute; Ges&ugrave; &egrave; morto per mano della gente comune e perch&eacute; non si &egrave; salvato? Perch&eacute; doveva morire se aveva il potere divino di resuscitare i morti? Perch&eacute; ha sofferto quando &egrave; stato inchiodato sulla croce?&rdquo; Allo stesso modo, i pastori della chiesa criticano Krishna sostenendo: &ldquo;Come pu&ograve; diventare Dio se ha molte mogli?&rdquo; In questo modo si concentrano sugli aspetti mondani della vita di Ges&ugrave; e Krishna, ma nessuno si chiede perch&eacute; tali eventi siano accaduti nella loro vita. Lo stesso Paramatma disse che nessuno avrebbe potuto riconoscerLo quando venne sulla Terra. Il suo ruolo &egrave; fingere affinch&eacute; nessuno lo riconosca. La sua missione &egrave; essere un ladro non identificato tra noi, rubando la nostra ignoranza.

  In precedenza abbiamo accennato al fatto che Dio non pu&ograve; essere compreso attraverso le questioni mondane. <b> Dio pu&ograve; essere riconosciuto solo attraverso la Sua saggezza. </b> Anche coloro che affermano di essere Guru spesso non riescono a cogliere questo principio e tentano di misurare Dio utilizzando standard mondani. Di conseguenza, quando Dio viene sulla Terra, nessuno Lo riconosce. Coloro che compiono miracoli basati su questioni mondane possono apparire grandi e simili a Dio, ma il vero Dio viene spesso trascurato. Questo perch&eacute; la presenza di Dio non pu&ograve; essere identificata sulla base di fattori esterni e mondani. Invece, l&rsquo;incarnazione di Dio pu&ograve; essere riconosciuta sulla base del dharma. Lo stesso dharma si ritrova nella Bhagavad-Gita e negli insegnamenti di Ges&ugrave;, che ci permettono di riconoscerli come uno. Tuttavia, non ci sono altre somiglianze tra loro nelle questioni esterne e mondane.

  C'&egrave; un solo Dio per il mondo intero, che si incarna come un uomo con molti nomi e forme per guidare l'umanit&agrave; verso di lui. Sfortunatamente, molti esseri umani non riescono a rendersene conto e creano religioni che discutono su quale Dio sia pi&ugrave; grande. Non riescono a capire che Dio nella loro religione e Dio nelle altre religioni sono la stessa cosa. Gli esseri umani tendono ad amare la loro religione pi&ugrave; di Dio, il che &egrave; una grande ignoranza. &Egrave; essenziale sapere che esiste un solo Dio, anche se lo chiamiamo con nomi diversi. Paramatma decide il Suo ruolo in base al tempo, alla nazione e alle persone e si incarna come Bhagavan per insegnare i Suoi dharma. Le Sue nascite non sono le stesse, ma il Suo scopo &egrave; sempre lo stesso: insegnare i Suoi dharma. Quando venne come Ges&ugrave; o Krishna, i dharma che insegnava erano gli stessi. Dio e i Suoi dharma possono apparire diversi perch&eacute; quando Paramatma nacque come Krishna e Ges&ugrave;, i loro nomi, paesi di nascita e personalit&agrave; differivano.

  Prendiamo come esempio il dharma affermato dal Paramatma. Sri Krishna disse nella Gita, <b> 'Paritranaya Sadhunam vinasaya chadushkrutam,' </b> il che significa <b> , &ldquo;Protegger&ograve; i giusti e distrugger&ograve; i malvagi&rdquo;. </b> Alcuni predicatori cristiani prendono queste parole e dicono agli ind&ugrave;: &ldquo;La vostra religione non offre protezione e il vostro Dio uccider&agrave; solo i peccatori&rdquo;. Tuttavia, nella nostra religione, c&rsquo;&egrave; protezione per tutti i peccatori e Ges&ugrave; venne sulla Terra per salvare i peccatori. Mentre il tuo Dio pu&ograve; distruggere i peccatori e le persone malvagie nella tua religione, il mio Dio (Ges&ugrave;) ti protegger&agrave;. Pertanto, i cristiani affermano che il loro Dio &egrave; il vero Dio. I cristiani non capirono il vero significato di ci&ograve; che il Signore Ges&ugrave; disse a questo riguardo, e gli ind&ugrave; non capirono il significato dello sloka che Krishna disse nella Gita. Pertanto, le parole di Krishna e quelle di Ges&ugrave; sembrano loro diverse. Credevano che Krishna e Ges&ugrave; fossero diversi, ma non sapevano che erano la stessa cosa e che le parole che pronunciavano avevano lo stesso significato. Le parole &ldquo;distruggere i peccatori e i malvagi&rdquo; significano che usano l&rsquo;arma di <b> 'insegnamento' </b> per rimuovere il karma del peccato e del male e renderli puri. Quando i malvagi diventeranno puri, non saranno pi&ugrave; catturati nei peccati ma diventeranno giusti. Allora non ci saranno persone malvagie. Pertanto, le due frasi &ldquo;dire nella Gita che Krishna eliminer&agrave; i malvagi&rdquo; e &ldquo;dire nella Bibbia che Ges&ugrave; ti protegger&agrave; dai peccati&rdquo; significano la stessa cosa.

  Anche se Ges&ugrave; e Krishna parlavano lingue diverse, erano individui diversi e avevano nomi diversi, lo scopo delle loro parole era lo stesso. A causa dell&rsquo;incapacit&agrave; delle persone di comprendere pienamente il concetto di Dio e della loro tendenza a interpretare le Sue parole per adattarle alle proprie preferenze, hanno diviso il Dio che proclamava lo stesso dharma. Quando

  Gli ind&ugrave; criticano Ges&ugrave;, e i cristiani sostengono che Krishna non &egrave; Dio o Paramatma, il Re e Padre di paraloka, il Capo dell'universo che pervade il mondo intero e risiede dentro di noi, ride, sapendo che queste persone sono cieche nonostante abbiano gli occhi. Krishna ha detto nella Gita: &ldquo;Verr&ograve; quando ci sar&agrave; una minaccia al dharma&rdquo;. Tuttavia, gli ind&ugrave; Lo riconoscono come Dio solo se appare nello stesso modo di prima: con piume di pavone, un flauto e il chakra. Se Dio nasce in una forma diversa, dicono: &ldquo;Tu non sei il nostro Dio&rdquo;. Nella Bibbia, Ges&ugrave; Cristo disse che sarebbe tornato. I cristiani riconosceranno Ges&ugrave; Cristo solo se apparir&agrave; nello stesso modo di prima: con cicatrici di chiodi sulle mani e segni di lancia sul fianco. Diranno: &ldquo;Tu non sei il nostro Signore&rdquo;, se Egli viene in una forma diversa. A causa delle differenze nel loro aspetto e comportamento, i cristiani non potevano riconoscere che Ges&ugrave; era Krishna e, allo stesso modo, gli ind&ugrave; non potevano riconoscere che Krishna era Ges&ugrave;. Ecco perch&eacute; Dio dice nella Gita <b> , &ldquo;Le persone mi disonorano, perch&eacute; non conoscono me e il mio mahatya&rdquo;. </b> Alcuni guru ind&ugrave; insegneranno la saggezza e forniranno upadesa a Krishna se verr&agrave; di nuovo. Allo stesso modo, se Ges&ugrave; venisse di nuovo, come menzionato nella Bibbia, i predicatori cristiani, che potrebbero non riconoscerlo, lo battezzerebbero. Finch&eacute; ci saranno Guru che insegneranno la saggezza a Krishna se Lui cambia forma e nome, si pu&ograve; dire che c&rsquo;&egrave; ignoranza nella religione ind&ugrave;. Allo stesso modo, finch&eacute; ci saranno cristiani che spiegheranno i versetti della Bibbia a Ges&ugrave; se Egli cambia forma e appare davanti a loro, si pu&ograve; dire che non sono pienamente consapevoli di Dio.

  C&rsquo;&egrave; una forte ragione per cui perfino i grandi gnani non poterono riconoscere Dio o comprendere la saggezza di Dio quando Dio venne sulla Terra. Prima di comprenderne la ragione, bisognerebbe conoscere il visibile <b> creazione </b> . Esiste un significativo oppositore di Dio, motivo per cui Dio non &egrave; pienamente compreso. I cristiani lo chiamano &ldquo;Satana&rdquo;, gli ind&ugrave; lo chiamano &ldquo;Maya&rdquo; e i musulmani lo chiamano &ldquo;Shaitan&rdquo;. Comprendere il segreto di qualcosa con nomi come <b> Maya, Satana o Shaitan </b> , bisogna prima comprendere il segreto della creazione. Approfondiamo i dettagli di seguito.

</div></div>
</span>`
},
{
chapterName: "Il segreto della creazione",
chapterNumber: 1,
pageNumber: 1,
verse: ``,
meaning: ``,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma (Dio) non era n&eacute; maschio n&eacute; femmina prima della creazione dell'universo. Paramatma voleva creare l'universo e cos&igrave; diede all'esistenza la Prakruti femminile o Maya (Satana). Ha determinato le caratteristiche richieste e tutti i metodi necessari per questo. Poich&eacute; Prakruti era una donna, Paramatma era in netto contrasto con lei, e questa caratteristica &egrave; conosciuta come Purusha (maschio). Paramatma desiderava che Prakruti fosse completamente opposta a Lui, quindi le concesse pari autorit&agrave; perch&eacute; credeva che il gioco sarebbe stato pi&ugrave; emozionante quando entrambi gli avversari avessero posseduto la stessa forza. Prakruti (Satana) &egrave; contrario al Paramatma ma non un nemico. Sebbene sia naturale per Dio (Paramatma) affrontare l&rsquo;opposizione di Satana (Prakruti), non sono nemici l&rsquo;uno dell&rsquo;altro.

  Paramatma, che ha creato Prakruti, alla fine la assorbir&agrave; in S&eacute;. &Egrave; il padre, marito e distruttore di Prakruti, cos&igrave; come la forza dentro di lei. Paramatma, che &egrave; vasto, ha creato Prakruti ed &egrave; impegnato in un gioco chiamato "Jagath". In questo gioco, Paramatma si traveste da Purusha (maschio) anche se al di fuori dello spettacolo non &egrave; n&eacute; maschio n&eacute; femmina. Prakruti &egrave; divisa in cinque elementi - Cielo, Aria, Fuoco, Acqua e Terra - e si chiama Prapancha. Dopo aver creato Prakruti, Paramatma desiderava creare un Jagath composto da esseri viventi che sperimentano la nascita e la morte. Ha raggiunto questo obiettivo creando esseri viventi con Atma e costruendo Jagath all'interno del Prapancha. In telugu, <b>'Ja' </b>significa nascita, e <b>'Gati' </b>significa morte. Quindi, tutti gli esseri viventi sono giustamente chiamati "<b>Jagath</b>&rdquo;, indicando che consiste di nascita e morte.

  Paramatma cre&ograve; Jagath, composto da esseri viventi all'interno di Prakruti. Mentre Prakruti (femmina) e Paramatma (Purusha) sono considerati uguali, Jagati nacque separatamente in seguito. Finora, Paramatma ha creato Prakruti (Prapancha) e Jagath, risultando in tre componenti, incluso Paramatma. Inizialmente, Paramatma, che non era n&eacute; maschio n&eacute; femmina, cre&ograve; Prakruti. Quindi, Paramatma si trasform&ograve; in Purusha (Atma), prese Prakruti come sua moglie e insieme generarono una prole unica chiamata Jagath. Se ignoriamo queste relazioni, Paramatma ha creato tre parti distinte: Prakruti, Purusha e Jagath. Prakruti &egrave; femminile, Paramatma &egrave; maschile (Purusha) e Jagath dovrebbe essere considerato non binario (n&eacute; maschio n&eacute; femmina). Il gioco principale &egrave; che Paramatma e Prakruti trascinano Jagath (non binario), che esiste tra loro. Ci sono regole per questo gioco. Sebbene Paramatma abbia definito le regole, partecipa al gioco secondo le stesse regole che ha stabilito, anche se &egrave; il creatore di tutto e superiore a tutto. Questo gioco, come altri, ha un limite di tempo. Il limite di tempo per il gioco di Jagath &egrave; di 1000 Yuga o 108 crore di anni, in modo simile a come il calcio ha un limite di tempo di 90 minuti o il cricket ha un limite di 50 over. Il gioco si interrompe durante la notte e continua durante il giorno, con ogni periodo di gioco e di riposo che copre 108 crore (1,08 miliardi) di anni.

  Paramatma, non specifico e indefinito, cre&ograve; inizialmente Prapancha (senza forma di vita) e successivamente gener&ograve; gli esseri viventi (Jagath). Paramatma cre&ograve; Prakruti e fu riconosciuto come Purusha. Cre&ograve; l&rsquo;Atma e divise Prakruti, che concepisce con il seme dell&rsquo;Atma, in cinque parti. Tale Prakruti &egrave; chiamata Pancha Bhutas o Prapancha. Paramatma ha diviso Atma e Jeevatma in tre parti: Jeevatma (il

  forma di vita Jagath), Atma e Paramatma. Divenne riconosciuto come Paramatma dopo aver creato Jeevatmas e Atma. Divenne riconosciuto come Paramatma insieme ad Atmas (Jeevatma e Atma) e come Purusha insieme a Prakruti. Esiste una base per chiamarlo Purusha quando c'&egrave; Prakruti e Paramatma quando sono presenti le anime. Se Prakruti e Atmas non esistono, non &egrave; possibile definirlo. La forma di vita Jagath nacque da Prakruti e Purusha. Paramatma ha pianificato in modo che la madre e il padre di Jagath abbiano gli attributi di Prakruti e Purusha.

  Prakruti possiede caratteristiche opposte a quelle di Purusha. Tuttavia, Jagath &egrave; costituito da attributi sia di Prakruti che di Purusha. La forma di vita Jagath incarna sia Jeevatma e Atmas legati a Paramatma, sia corpi e guna legati a Prakruti. La fede nell'esistenza di Dio &egrave; in linea con Atma, mentre la visione opposta secondo cui Dio non esiste &egrave; in linea con Prakruti. Gli esseri umani a Jagath mostrano caratteristiche sia di Prakruti che di Purusha. Per simboleggiare i tratti di Prakruti e Purusha, i corpi delle donne furono creati per assomigliare a Prakruti, mentre i corpi degli uomini furono progettati per rappresentare Paramatma. Sono stati creati anche individui non binari per simboleggiare Jagath, indicando che Jagath esiste in aggiunta a a Prakruti e Paramatma. Donne, uomini e individui non binari simboleggiano Prakruti, Paramatma e il Jagath vivente. Prakruti = Donne, Jagath = Non binario e Paramatma = Purusha (Maschio). Dio ha reso nota la Sua creazione creando femmine per assomigliare a Prakruti, individui non binari per simboleggiare Jagath e maschi per rappresentare Paramatma. Dio ha portato i bambini nel mondo attraverso l'unione di maschi e femmine per illustrare che il Jagath vivente nasce da Atma e Prakruti. La madre, il padre e la prole visibili illustrano come avvenne inizialmente la creazione. Molti individui, nonostante la loro intelligenza, spesso non contemplano il motivo per cui gli uomini differiscono dalle donne e perch&eacute; i figli nascono sia da uomini che da donne. Per cogliere veramente la spiritualit&agrave;, &egrave; essenziale comprenderne le basi <b>&ldquo;Il segreto della creazione&rdquo; </b>nell'educazione spirituale.

  &Egrave; importante capire che il gioco tra Dio e Prakruti &egrave; di natura amichevole. Prakruti e Paramatma si impegnano in un delicato tiro alla fune, tentando ciascuno di attirare Jeevatma dalla propria parte in questo gioco. Il dovere di Paramatma &egrave; impartire saggezza a Jeevatma, guidandoli verso di Lui. Al contrario, Prakruti, sotto forma di Maya con la sua arma di guna, tiene occupati gli esseri umani, impedendo loro di contemplare Dio. Prakruti intrappola gli individui nelle loro attivit&agrave; quotidiane, distogliendo la loro piena attenzione verso obiettivi mondani e impedendo loro di rivolgersi a Dio attraverso l'influenza del desiderio e dei guna associati. Il gioco pi&ugrave; grandioso tra Paramatma e Prakruti rimane senza nome. Nella forma di Maya, Prakruti attira sottilmente tutti dalla sua parte, spesso senza che loro se ne accorgano. Se qualcuno all'interno di Jagath pensa a Dio e cerca la conoscenza su di Lui, Maya (Prakruti) tende a concentrarsi su di lui e ad intrappolarlo. Maya (Satana) appare pi&ugrave; forte di Dio in questa continua lotta tra Dio e Satana. Attualmente gode della fedelt&agrave; del 99% degli esseri umani. In uno scenario del genere, quando la sconfitta di Dio pu&ograve; sembrare inevitabile, il Paramatma dovrebbe sforzarsi di prevalere.

  Come parte dei Suoi sforzi, Paramatma si incarner&agrave; come essere umano tra l&rsquo;umanit&agrave; e parler&agrave; di Se stesso, con l&rsquo;obiettivo di guidare le persone verso di Lui. Come accennato in precedenza, non esiste un vero avversario e ciascuna parte utilizza la propria strategia. Entrambi Satana (Maya)

  e Dio coesistono in ogni essere umano, ma gli individui spesso non sono consapevoli della loro presenza e faticano a riconoscere Dio o Maya. Gli esseri umani spesso rimangono ignari da che parte stanno. Dio si sforza di liberare gli individui intrappolati dall&rsquo;influenza di Maya e, in questa ricerca, Paramatma nasce sulla Terra come Figlio di Dio. Tuttavia, seguendo le regole del gioco cosmico, Egli non deve rivelare la Sua identit&agrave; di Figlio di Dio. Pertanto, quando Dio si incarna come essere umano, parla del Paramatma come di un individuo comune. Paramatma impartisce la Sua saggezza e ristabilisce il Suo dharma. Al contrario, Maya formula strategie per rappresentare il Figlio di Dio come ignorante e stolto. Crea Guru e Swamiji che promuovono gli adharma di Maya come dharma e presentano gli insegnamenti del Figlio di Dio come adharma. Maya compete con il Figlio di Dio attraverso questi Guru e Swamiji, portando gli esseri umani ad abbracciare i suoi insegnamenti invece della saggezza di Dio. Maya utilizza termini come Paramatma, moksham, saggezza e pratica per trasmettere i suoi adharma agli esseri umani, rendendo difficile distinguere il dharma di Dio dagli adharma di Satana.

  Se qualcuno cerca di trovare Dio, Maya lo rende incapace di distinguere tra dharma e adharma, portandolo a credere a qualunque cosa gli venga presentata. Una regola fondamentale del gioco cosmico &egrave; che sia Satana (Maya) che Dio non rivelino apertamente la loro presenza sulla Terra. Quando Paramatma si incarna come Bhagavan sulla Terra, si astiene dal dichiarare: &ldquo;Io sono Paramatma&rdquo;. Per la stessa regola, quando Prakruti nasce sulla Terra, non proclama: &ldquo;Io sono Maya&rdquo;. Tuttavia, quando Maya si incarna, pu&ograve; affermare: &ldquo;Io sono Bhagavan&rdquo;. Seguendo questo principio, Maya (Satana) si proclama Bhagavan (il Figlio di Dio), compie numerosi miracoli e si manifesta sotto forma di vari Swamiji. Quando il Paramatma nasce in un posto sulla Terra, Prakruti crea molti individui che portano il nome Bhagavan. La nascita di Paramatma &egrave; intesa esclusivamente a impartire i Suoi dharma senza essere apertamente riconosciuto come Bhagavan. Allo stesso tempo, Maya ne genera molti con il nome Bhagavan anche prima della nascita di Paramatma. Maya fa s&igrave; che gli esseri umani ascoltino le sue parole e impedisce loro di ascoltare le parole del vero Bhagavan. In questo gioco cosmico, Maya esercita la sua influenza e Dio adempie al Suo scopo.

  Mentre Maya assume continuamente la forma di guna all'interno del corpo umano, Dio esiste sotto forma di Atma all'interno del corpo. Abbiamo precedentemente menzionato che Maya e Paramatma si sarebbero incarnati come esseri umani sulla Terra. &Egrave; importante capire i corpi che assumeranno. Maya si incarna in un corpo maschile come Bhagavan e in un corpo femminile come Bhagavati. Paramatma si incarna costantemente in un corpo maschile. Prakruti, in quanto donna, indossa tipicamente un corpo femminile, ma pu&ograve; anche manifestarsi in un corpo maschile per ingannare gli altri. Potrebbe essere difficile discernere il vero Bhagavan nelle forme di Bhagavati e Bhagavan. &Egrave; fondamentale notare che Bhagavan &egrave; sempre incarnato come maschio. Il Padre Celeste, Paramatma, si incarn&ograve; come Ges&ugrave; in forma maschile. La sua nascita &egrave; avvenuta attraverso un grembo verginale senza il coinvolgimento di un padre umano. Paramatma si incarna sulla Terra quando se ne presenta la necessit&agrave;, con <b>Ges&ugrave; </b>essendo una di queste incarnazioni. Si prevede che anche lo Spirito Santo si incarner&agrave; sulla Terra in futuro.

  Abbiamo scritto questa scrittura per informarvi che, non importa quante volte nasce lo stesso Paramatma, Egli riveler&agrave; gli stessi dharma. Lo scopo di questa scrittura &egrave; aiutare i lettori a comprendere le parole essenziali di Ges&ugrave; nel Nuovo Testamento della Bibbia e a confrontarle con gli insegnamenti della Bhagavad-Gita. Leggendo questo, speriamo che tu possa conoscere la grandezza di Ges&ugrave; e lo spirito interiore di Krishna.


  </div></div>
<ion-row><ion-col class="ion-text-center">
<b>Di  <br><br>
L'unico Guru di tre religioni, ideatore del teorema Thraitha, autore di cento scritture divine </b><br><br>
<span style="font-size:20px;font-weight:bold">Sri. Sri. Sri Acharya Prabodhananda Yogeeshwarulu</span>
</ion-col></ion-row>
</span>`,

},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 2,
verse: `<b>1) Il Vangelo di Matteo, 3° capitolo, 7° versetto</b>`,
meaning: `<b>
(3:7) Razza di vipere! Chi ti ha avvertito di fuggire dall'ira imminente?
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">

  In questo verso, <strong>&ldquo;razza di vipere&rdquo; </strong>&egrave; un termine nuovo. Il termine era usato per riferirsi agli esseri umani. Tuttavia, vi sono dubbi sul fatto che gli esseri umani possano essere considerati discendenti dei serpenti. Ci&ograve; solleva una domanda per chiunque legga questo versetto. In questo versetto dobbiamo anche approfondire il significato dettagliato di <strong>'ira venuta.' </strong>Inoltre, un'altra parola in questo versetto &egrave; <strong>&laquo;Chi ti ha avvertito?&raquo; </strong>Questa frase si riferisce a un tempo passato e dovremmo cercare di capire chi ha messo in guardia gli esseri umani in passato. Ci sono tre domande a cui dobbiamo rispondere in questo versetto.

  Un uccello &egrave; nemico di un serpente. L'uccello pu&ograve; uccidere il serpente. Inizialmente il serpente sibila per spaventare l'uccello, ma l'uccello non ha paura. L'uccello pu&ograve; mangiare il serpente come cibo. Questa &egrave; conoscenza comune. Il serpente e l'uccello sono usati come metafore nel contesto dell'educazione spirituale. Il piccione tra gli uccelli &egrave; paragonato ad Atma, mentre il serpente &egrave; paragonato a Maya. Sebbene il versetto non menzioni l&rsquo;uccello, menziona il serpente. Quando il serpente viene paragonato a Maya (Satana), &ldquo;razza di vipere&rdquo; pu&ograve; essere intesa come &ldquo;progenie di Maya&rdquo;. Per essere pi&ugrave; precisi, &ldquo;razza di vipere&rdquo; viene usata invece di &ldquo;esseri umani con Maya&rdquo;.&rsquo;

  Maya si riferisce alla composizione dei guna. Coloro che sono costantemente preoccupati per i guna e non mostrano alcun interesse per Dio vengono definiti &ldquo;razza di vipere&rdquo;. Si sa che l&rsquo;ira imminente attende coloro che sono intrappolati in Maya. <strong>L&rsquo;ira, in questo contesto, significa qualcosa di terribile o difficile da sopportare. </strong>Il termine &ldquo;ira imminente&rdquo; suggerisce che attualmente non esiste ma si manifester&agrave; in futuro. Ci&ograve; che gli esseri umani inizialmente non possiedono ma acquisiranno grazie a Maya (guna) sono tutti i tipi di karma buono (punya) e cattivo (peccato). Le esperienze derivanti dal karma negativo possono essere davvero terribili. Perci&ograve;, <strong>&ldquo;ira imminente&rdquo; allude al karma che si manifester&agrave; nella vita umana</strong>. Ogni essere umano che nasce accumula karma, ecco perch&eacute; il verso <strong>&laquo;Razza di vipere! Chi ti ha insegnato a fuggire dall&rsquo;ira imminente?&rsquo; </strong>serve da monito per gli esseri umani.

  Quando il versetto menziona &ldquo;chi ti ha avvertito?&rdquo; suggerisce che qualcuno in passato ha fornito agli esseri umani la saggezza per sfuggire al karma. Questo verso implica che in passato ci sia stato un individuo che ha espresso un'idea per aiutare le persone a eludere il karma incombente. Di conseguenza, &egrave; importante per gli esseri umani scoprire l&rsquo;identit&agrave; di questa persona, capire cosa ha detto e determinare quando ha trasmesso questa saggezza. Ricordare eventi storici del passato pu&ograve; essere un compito impegnativo. Se non si conosce la risposta alla domanda iniziale posta nel primo capitolo dei quattro Vangeli, non si capir&agrave; quanto si trova nella seconda Scrittura divina. Pertanto i seguenti versetti della seconda Scrittura divina non possono essere compresi. &Egrave; quindi essenziale discernere la risposta alla domanda iniziale. Prima di scoprire la verit&agrave; a questo riguardo, esploriamo il significato di questa seconda scrittura divina.

  La saggezza impartita da Dio divenne una scrittura circa cinquemila anni fa. Questa scrittura comprende 18 capitoli ed &egrave; situata al centro dei 18 parva del Mahabharata. Questi diciotto capitoli sono indicati come la prima scrittura divina. All'inizio della creazione, Dio ha comunicato la saggezza attraverso il Cielo. Questa saggezza era conosciuta come <strong>'Japara </strong>saggezza&rsquo; in quel momento. In telugu, <strong>'Ja' </strong>significa separato o diverso, mentre <strong>'Para' </strong>significa nato. "Japara" si traduce quindi in "separato o distinto dalla nascita". Si &egrave; guadagnato questo nome perch&eacute; Dio non &egrave; mai soggetto alla nascita. La saggezza Japara inizialmente divenne la prima scrittura divina e divenne anche la seconda scrittura divina dopo tremila anni, cio&egrave; circa duemila anni fa da adesso. Circa 1400 anni fa, la stessa saggezza fu trascritta come la terza scrittura divina. Ora interpretiamo la frase della seconda scrittura divina.

  Quando viene sollevata la domanda &ldquo;Chi ti ha avvertito?&rdquo;, dovremmo parlare di colui che ha detto la saggezza in passato. Secondo questo, colui che ha detto la saggezza nella prima scrittura divina &egrave; colui che per primo ha avvertito gli esseri umani. C'&egrave; una ragione per conoscere colui che ha raccontato in passato. Poich&eacute; solo Dio pu&ograve; rivelare la Sua saggezza e Dio &egrave; l&rsquo;unico, lo stesso Dio insegna la Sua saggezza ogni volta e ovunque richiesto. Pertanto, lo stesso che ha detto prima ha raccontato di nuovo in versi. Quindi, se vogliamo conoscere colui che ha detto la saggezza nella seconda scrittura divina, dovremmo prima conoscere colui che ha detto la saggezza nel passato. Quindi &egrave; diventato necessario porsi la domanda: chi ti ha avvertito? Se riesci a scoprire chi lo ha detto in passato, avrai l&rsquo;opportunit&agrave; di riconoscere chi lo sta dicendo adesso. Ti invitiamo ad avvicinarti a questa scrittura con il <strong>credenza </strong>che l'individuo che ha comunicato la prima scrittura divina &egrave; anche la fonte della seconda scrittura divina.

  Prima di leggere la seconda scrittura divina, dobbiamo sapere quali versetti Dio, che raccont&ograve; la prima scrittura divina, ha detto nella scrittura biblica. La Bibbia comprende un totale di 66 capitoli, di cui quattro contengono versetti pronunciati direttamente da Dio. Gli altri 62 capitoli contengono versi di altri gnani. Questi capitoli sono conosciuti come 1) Il Vangelo di Matteo, 2) Il Vangelo di Marco, 3) Il Vangelo di Luca e 4) Il Vangelo di Giovanni. Questi quattro racconti evangelici sono situati nella parte centrale della Bibbia, dividendola di fatto in tre sezioni principali. I primi 39 capitoli costituiscono la prima parte, seguiti dai quattro Vangeli come seconda parte, mentre i restanti 23 capitoli costituiscono la terza parte. Di particolare nota &egrave; la designazione di questi quattro capitoli come <strong>&laquo;Vangeli</strong>&rdquo;, sottolineandone il significato poich&eacute; contengono le parole di Ges&ugrave; durante la sua vita terrena.

  <b>
  La prima parte della Bibbia è composta da 39 parti.
  La seconda parte della Bibbia ha 4 Vangeli.
  La terza parte della Bibbia ha 23 parti.
  </b>

  Nella prima e nella terza parte, altri gnani trasmettevano la saggezza di Dio. Ges&ugrave;, incarnazione di colui che ha consegnato la prima Scrittura divina, ha ripetuto i versetti dei quattro Vangeli. Pertanto, per capire questo, la domanda<b>, &lsquo;Chi ti ha avvertito di fuggire dall&rsquo;ira futura?&rsquo; </b>&egrave; posto. Quindi, si pu&ograve; dire che questo versetto, posto al di sopra di tutti gli altri, ha un grande significato.
  </div></div>
</span>`
},

{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 3,
verse: `<b>2) Il Vangelo di Matteo, 3° capitolo, 11° versetto.</b>`,
meaning: ` <b>
(3:11) Ti battezzo con acqua per cambiare manas (mente). Ma dopo di me viene uno più potente di me, del quale non sono degno di portare i sandali. Egli ti battezzerà in Spirito Santo e fuoco.
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Questo versetto contiene le parole <strong>&ldquo;cambiamento di manas&rdquo; </strong>E <strong>'battezzare,' </strong>cos&igrave; come &ldquo;con acqua e fuoco&rdquo;. Per comprendere appieno il significato di questo versetto, &egrave; essenziale comprendere queste quattro parole. Se una qualsiasi di queste parole rimane poco chiara, l&rsquo;essenza del versetto resta sfuggente. Quindi, approfondiamo i significati di queste quattro parole. La prima parola &egrave; &ldquo;cambiamento di manas&rdquo;. Manas (mente) nel nostro corpo trattiene e ricorda ci&ograve; che &egrave; stato appreso e immagazzinato. Qui, &ldquo;cambiamento di manas&rdquo; si riferisce all&rsquo;alterazione di manas. Manas ha il compito di ricordare gli eventi della nostra vita. Quando il primo manas subisce un cambiamento e il secondo manas prende il suo posto, tutti i ricordi del primo manas vengono cancellati. Il secondo manas non ha ricordo del primo manas. Il primo manas cessa di esistere con la morte, e il secondo manas emerge con la nascita. Quando il primo manas viene sostituito dal secondo manas, si parla di &ldquo;cambio di manas&rdquo;. Questa transizione naturale di manas avviene con ogni ciclo di nascita e morte. Il battesimo non &egrave; necessario per il &ldquo;cambio di manas&rdquo; perch&eacute; avviene naturalmente con il processo di morte e rinascita.

  Quando una persona muore e rinasce, perde il suo vecchio corpo e ne acquisisce uno nuovo. Questa trasformazione fisica che avviene &egrave; conosciuta come nascita. &Egrave; importante riconoscere che gli esseri umani possiedono due tipi distinti di corpi: quello visibile (fisico) e quello invisibile (sottile). Proprio come il vecchio corpo visibile viene sostituito da uno nuovo nel processo di nascita, allo stesso modo, quando il corpo invisibile e sottile subisce un cambiamento, gli ind&ugrave; (Indu) lo chiamano <strong>Upadesa</strong>&rdquo;, come lo chiamano i cristiani <strong>'battesimo</strong>.&rsquo; Come menzionato in questo verso, il battesimo significa la trasformazione del manas invisibile. Proprio come il vecchio manas, carico di ricordi, svanisce con la morte e un nuovo manas emerge con la nascita, durante il battesimo il manas subisce un profondo cambiamento. Smette di ricordarci ricordi banali e ignoranti e inizia a farlo <strong>richiamare la saggezza e i ricordi legati al divino. </strong>Il battesimo &egrave; il processo attraverso il quale un individuo, guidato dagli insegnamenti di a <strong>Insegnante</strong>, ottiene un cambiamento di manas nella vita. In questa trasformazione, un manas ignorante viene sostituito con uno in sintonia con la saggezza.

  <strong>Cambiamento di Manas = Passaggio dall'ignoranza alla saggezza.</strong>
  <strong>Battesimo = Ottenere upadesa dal Guru.</strong>

  Il battista Giovanni offr&igrave; 'upadesa' con acqua, dichiarando: "Io vi battezzo con acqua, ma qualcuno pi&ugrave; potente di me verr&agrave; dopo, e vi battezzer&agrave; con lo Spirito Santo e fuoco". Abbiamo gi&agrave; esplorato in dettaglio i concetti di &ldquo;cambiamento di manas&rdquo; e &ldquo;battesimo&rdquo;. Ora approfondiamo i significati di &ldquo;acqua&rdquo; e &ldquo;fuoco (l&rsquo;opposto dell&rsquo;acqua)&rdquo;. Otteniamo il battesimo dal Guru, ma ci sono due tipi di Guru. Alcuni possiedono il potere della saggezza (Gnana Shakti), mentre altri no. Molti Guru eseguono comunemente il battesimo o &ldquo;upadesa&rdquo; usando l&rsquo;acqua. Alcuni possono usare il latte, entrambi liquidi visibili, mentre altri usano la cenere sacra o il fumo dell'incenso come parte del processo. Inoltre, durante l'upadesa, un Guru impartisce un mantra, una parola o un'immagine, e esistono numerosi "upadesa" di questo tipo, offerti da vari Guru. John era uno di questi Guru e ammise apertamente il suo metodo, affermando: "Ti battezzo con acqua". Tuttavia, anche lui predisse l'arrivo di qualcuno pi&ugrave; grande, che avrebbe battezzato in Spirito Santo e fuoco. Abbiamo definito il &ldquo;battesimo&rdquo; come il percorso verso la trasformazione del manas dall&rsquo;ignoranza alla saggezza. Quando questa trasformazione avviene attraverso il battesimo, ha il potere di purificare tutti i peccati di una persona. Il Guru d&agrave; il fuoco divino appropriato attraverso il suo battesimo per bruciare i peccati. Il Guru dovrebbe possedere la divinit&agrave; del fuoco. Il primo verso del capitolo 'Atma Samyama Yoga' nella Bhagavad-Gita, la prima scrittura divina, sottolinea la necessit&agrave; di questo fuoco divino, affermando: 'cha yogee cha na niragnir nachaakriyah', che significa <strong>&ldquo;Uno a cui manca questo fuoco divino (Gnana Shakti) e cessa di agire non &egrave; uno yogi (Guru).&rdquo;</strong>

  Un vero yogi (Guru) non &egrave; colui che si astiene dall'azione ma &egrave; caratterizzato dalla presenza del fuoco interiore, che simboleggia <strong>potere della saggezza</strong>. Questo &egrave; ci&ograve; che il versetto menziona come &ldquo;battesimo con il fuoco&rdquo;. Qui &ldquo;fuoco&rdquo; significa il <strong>potere divino (Gnana Shakti)</strong>, che non &egrave; visibile ad occhio nudo. Quando una persona riceve questo fuoco divino dal proprio Guru, accende dentro di s&eacute; un potere di trasformazione, capace di bruciare il karma accumulato. Il fuoco della saggezza (Gnana Shakti) conferito all'individuo battezzato inizia a distruggere il suo karma. Mentre un guru come John amministrava il battesimo allo scopo di &ldquo;cambiare manas&rdquo;, lui <strong>non possedeva il potere della saggezza </strong>nel suo battesimo richiesto per bruciare il karma. Pertanto, afferm&ograve;: &ldquo;Posso battezzarvi solo con acqua&rdquo;. Giovanni spieg&ograve; alla gente che il suo battesimo, <strong>eseguita con acqua</strong>, non brucerebbero il loro karma. Anticipava invece che colui che sarebbe venuto dopo di lui avrebbe amministrato un battesimo capace di realizzare questo.

  <strong>Battesimo con acqua = Upadesa che non brucia il karma&nbsp;</strong>
  <strong>Battesimo con fuoco = Upadesa che brucia il karma</strong>
</div></div>
</span>`,
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 4,
verse: `<b>3) Il Vangelo di Matteo, 3° capitolo, 12° versetto.</b>`,
meaning: `<b>
(3:12) Il suo ventilabro è nella Sua mano, ed Egli pulirà la Sua aia, raccogliendo il Suo grano nel granaio e bruciando la pula con fuoco inestinguibile.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
  <ion-row><ion-col class="ion-text-center">
  <img src="assets/img/chaata.png"/><br>
  <img src="assets/img/kallam.png"/>
  </ion-col></ion-row>
<div class="poem"><div class="poemtext">
  John, un rinomato guru del suo tempo, fu colui che pronunci&ograve; il verso in questione. Durante quell&rsquo;epoca impart&igrave; &ldquo;upadesa&rdquo; (battesimo) a molte persone. Giovanni era un grande &ldquo;gnani (saggio)&rdquo; e aveva previsto la venuta di Ges&ugrave;. Battezz&ograve; Ges&ugrave; Cristo (Bhagavan), il Figlio di Dio. Era anche il guru di Ges&ugrave;. Sebbene John fosse un famoso guru e battezz&ograve; molte persone a quel tempo, era umile. Prima di battezzare Ges&ugrave;, mostr&ograve; umilt&agrave; dicendo: &ldquo;colui che viene dopo di me &egrave; pi&ugrave; potente di me, di cui io non sono degno di portare i sandali&rdquo;. Quando Ges&ugrave; gli si avvicin&ograve; per il battesimo, Giovanni riconobbe il maggiore potere spirituale di Ges&ugrave;, dicendo: <strong>&ldquo;Dovresti battezzarmi. Vieni da me per il battesimo?" </strong>Queste parole furono pronunciate da Giovanni quando previde la venuta del Signore. Il versetto contiene anche riferimenti a <strong>un vassoio per vagliare</strong>, <strong>grano</strong>e un <strong>fuoco inestinguibile</strong>. Alcuni potrebbero interrogarsi sul significato di questi elementi poich&eacute; sembrano banali. Se il grano viene raccolto con il ventilabro, schiacciato e bruciato nel fuoco, diventa pane. Stiamo tutti guardando il vassoio di ventilatura, il grano e il fuoco nel forno. Alcuni potrebbero chiedersi cosa ci sia di cos&igrave; straordinario in questa frase. Questo versetto fa parte della seconda scrittura divina e ogni versetto di questa scrittura trasmette saggezza divina. Se visto con saggezza e perspicacia spirituale, questo versetto assume un significato speciale, sottolineando la grandezza di Ges&ugrave; Cristo.

  Nell'antichit&agrave; era consuetudine mettere i neonati su un vassoio (cestino) per la vagliatura. Non appena nasceva un bambino, il riso veniva versato nel vassoio di vagliatura, appiattito, e il bambino vi veniva adagiato secondo l'usanza. Questa pratica era prevalente in tutti i settori della societ&agrave;, dai poveri ai ricchi, dai sapienti agli ignoranti. La convinzione era che Brahma, la divinit&agrave; creatrice, avrebbe iscritto il futuro del bambino, spesso indicato come <strong>&ldquo;scrittura del karma&rdquo; o &ldquo;Brahma Vrata&rdquo;, </strong>sulla fronte del bambino durante i due minuti trascorsi sul vassoio di vagliatura. Indipendentemente dalle convinzioni personali, le parole di Giovanni, in particolare nel contesto di Ges&ugrave;, restano vere. Giovanni us&ograve; un'analogia, paragonando le azioni al grano. Il grano, in quanto alimento base, sostiene la vita, ma si esaurisce man mano che lo consumiamo. Allo stesso modo, Jeevatma sperimenta il karma sotto forma di azioni. Quando subiamo esperienze karmiche, il &ldquo;karma&rdquo; delle nostre azioni diminuisce. La scrittura del karma, conosciuta anche come scrittura sulla fronte o giudizio di Dio, significa che il karma che sperimentiamo &egrave; iscritto nel nostro corpo e le nostre esperienze di vita riflettono questa iscrizione. Giovanni paragon&ograve; le azioni influenzate dal nostro karma al grano, e il &ldquo;vassoio per la vagliatura&rdquo; era simbolicamente la testa dove venivano conservate queste azioni. Proprio come raccogliamo i cereali da un vassoio di vagliatura

  per preparare il cibo, la nostra testa &egrave; descritta come un &ldquo;vassoio per vagliare&rdquo; perch&eacute; immagazzina il karma che sperimentiamo.

  Il karma &egrave; inscritto nella testa di un essere umano senza che ne sia consapevole. Di conseguenza, nessuno pu&ograve; prevedere il futuro. Ogni essere umano &egrave; vincolato dal karma e non pu&ograve; sfuggire alla sua influenza. Mentre tutti gli esseri umani sembrano essere semplici burattini manipolati dal karma, lo Spirito Santo o Paramatma rimane fuori dal controllo del karma. Quando Dio sceglie di incarnarsi come essere umano, crea il Suo karma scrivendolo sulla Sua testa, venendo cos&igrave; sulla Terra. Non possiede karma intrinseco ma crea deliberatamente il proprio destino per impartire saggezza all'umanit&agrave;. Riguardo a Dio, che si fa carico del Suo karma, Giovanni espresse: <strong>"Il suo vassoio per ventilare &egrave; nella Sua mano." </strong>Nessun altro al mondo possiede un tale controllo sul proprio karma. In contrasto con i limiti umani, Dio modella il Suo karma e discende come essere umano sulla Terra per condividere la Sua saggezza. &Egrave; essenziale comprendere che la vita di Ges&ugrave;, dalla nascita alla morte, fu una conseguenza del karma autocostruito. La sua nascita in un umile fienile, la sua sofferenza e la sua crocifissione furono tutti prodotti del destino da lui stesso creato. Nessuna forza esterna potrebbe provocare la Sua nascita o tormentarlo senza il Suo consenso. Egli determin&ograve; il corso della Sua esistenza terrena, tenendo infatti in mano il Suo vassoio per la vagliatura.

  Tutte le persone comuni accumulano nuovo karma per ogni azione che compiono. Ogni azione sulla Terra genera nuovo karma. Proprio come il fumo &egrave; strettamente legato al fuoco, il karma &egrave; intrinsecamente associato alle azioni. &Egrave; un principio fondamentale di Prakruti che ogni azione porta conseguenze karmiche. Quando Dio si incarna e appare come il Figlio di Dio (Bhagavan), ogni azione che intraprende genera anche nuovo karma. Gli individui comuni non sono in grado di sfuggire al karma incombente. Tuttavia, Bhagavan Ges&ugrave; possiede il pieno fuoco della saggezza (Gnana Shakti), che Gli permette di bruciare il karma che sorge naturalmente dalle Sue azioni. Cristo, il consumato gnani, ha sempre il pieno potere di saggezza. Tutto il karma &egrave; consumato nel fuoco inestinguibile della saggezza. Le azioni sono intrinsecamente connesse al karma, proprio come i cereali sono legati alla pula. John lo espresse come, <strong>&ldquo;Brucia la pula con fuoco inestinguibile&rdquo;, </strong>a significare come Cristo sradica il karma associato alle azioni attraverso la Sua saggezza. Ges&ugrave; si purifica dalla polvere dei guna e incenerisce il karma intrecciato con le Sue azioni. Giovanni paragon&ograve; il corpo di Ges&ugrave; a un&rsquo;aia, a simboleggiare la Sua rimozione dell&rsquo;influenza dei guna, proprio come si pulisce un&rsquo;aia. Paragon&ograve; le azioni al grano, il karma originato da quelle azioni alla pula e il fuoco che consuma il karma a un fuoco inestinguibile. Giovanni ha racchiuso la grandezza di Ges&ugrave; in una sola frase, ma purtroppo non ne abbiamo compreso appieno il significato.

  Il versetto pu&ograve; sembrare semplice, ma contiene significati profondi e sottili. I quattro Vangeli sono ricchi di versetti di simile profondit&agrave;. A causa della mia saggezza limitata, non ho fornito spiegazioni per tutti i 66 capitoli della Bibbia, ma mi sono concentrato sulle descrizioni dei quattro Vangeli cruciali, toccando raramente altre sezioni.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 5,
verse: `<b>4) Il Vangelo di Matteo, capitolo 3, versetti 16 e 17.</b>`,
meaning: `
<b>
(3:16) Non appena Gesù fu battezzato, uscì dall'acqua. In quel momento il cielo si aprì ed egli vide lo Spirito di Dio scendere come una colomba e posarsi su di lui.
<br><br>
(3:17) E una voce dal cielo disse: “Questo è mio figlio, che amo; con lui, lo sono  molto contento.”
</b>
`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Giovanni battezz&ograve; Ges&ugrave; con acqua. Il battesimo viene anche chiamato &ldquo;upadesa&rdquo;. In telugu, &ldquo;upadesa&rdquo; significa un paese adiacente al tuo. In altre parole, &egrave; sinonimo di un paese vicino. Un vicino risiede in un paese vicino. C'&egrave; un paese vicino all'interno del tuo corpo, e dentro quel paese vicino al tuo corpo risiede un vicino. Ogni essere umano ha un paese vicino e un vicino, sebbene queste entit&agrave; non siano visibili in un essere umano. Il Guru rivela il paese vicino invisibile durante il battesimo o &ldquo;upadesa&rdquo;. Giovanni battezz&ograve; Ges&ugrave; con acqua, e non c&rsquo;&egrave; fuoco coinvolto in questo &ldquo;upadesa&rdquo;. Pertanto, appartiene al nome e manca di un paese vicino e limitrofo. Tuttavia, il processo di &ldquo;upadesa&rdquo; deve essere portato avanti in questo modo. Questo &egrave; il motivo per cui Ges&ugrave; disse nel versetto 3:15: <strong>&ldquo;Lascia che sia cos&igrave; adesso; &egrave; giusto che facciamo questo per adempiere ogni giustizia (saggezza)&rdquo;.</strong>

  Sebbene Ges&ugrave; ricevesse upadesa con l'acqua, era consapevole del territorio circostante all'interno del Suo corpo. Poteva vedere in ogni momento sia il mondo esterno visibile che il paese vicino invisibile. Pertanto, era considerato un vero upadesa, anche se l'upadesa fornito da Giovanni riguardava solo il nome. Ges&ugrave; fu battezzato dopo aver vissuto trent'anni come un normale Jeevatma. Da quel momento in poi, cominci&ograve; a parlare di questioni divine sotto forma di saggezza non come Jeevatma, ma come Atma. Per dimostrare che Ges&ugrave;, come Atma, trasmise la saggezza di Paramatma, Atma discese come una colomba e si pos&ograve; su di lui immediatamente dopo essere emerso dall&rsquo;acqua dopo il Suo battesimo. Inoltre, il Paramatma (lo Spirito Santo) dichiar&ograve;<strong>, &ldquo;Questo &egrave; mio figlio, che amo; con lui sono molto contento. </strong>Lo Spirito Santo (Dio) afferm&ograve; che Atma era il Suo amato Figlio ed espresse la Sua gioia nel Suo amato Figlio, Ges&ugrave;. Da ci&ograve; diventa evidente che lo Spirito Santo &egrave; il Padre e Atma &egrave; il Figlio conosciuto come Ges&ugrave;. Tutto ci&ograve; indica che lo Spirito Santo (Paramatma) non &egrave; apparso come Atma ma ha invece vissuto in questo mondo come un uomo comune, apparendo come Jeevatma. Non ho detto questo per lodare i cristiani o promuovere il cristianesimo. Condivido con te quella che credo sia la verit&agrave; assoluta su come Dio si &egrave; manifestato sulla Terra.
</div></div>
</span>`,
},

{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 6,
verse: `<b>5) Il Vangelo di Matteo, capitolo 4, versetto 10.</b> `,
meaning: ` <b>
(4:10) Gesù gli disse: “Allontanati da me, Satana! Perché sta scritto: Adorate il Signore tuo Dio e servire Lui solo”.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La parola <strong>'Satana' </strong>&egrave; introdotto in questo versetto. Nei versi precedenti, Satana viene talvolta definito un "tentatore (shodakudu in telugu)" e in altri casi come un "diffamatore (apavadi in telugu)". Il termine "apavadi" significa colui che giudica in modo sbagliato e dice bugie "shodakudu" implica qualcuno che cerca il male dentro di te e, se esiste, lo porta in superficie. "apavadi" o "shodakudu" &egrave; indicato come Satana in questa frase. Sia "apavadi" che "shodakudu" appartengono alla lingua telugu, ma la parola&nbsp;"Satana" non viene dal telugu. La parola &ldquo;Satana&rdquo; appare spesso in queste scritture. Nel campo dell&rsquo;educazione spirituale, &ldquo;Satana&rdquo; &egrave; usato in modo intercambiabile con <strong>'Maya</strong>.&rdquo; Poich&eacute; Satana e Maya sono essenzialmente la stessa cosa, le descrizioni di Maya possono essere applicate anche a Satana.

  Nella prima scrittura divina, Maya si riferisce all'essenza dei guna all'interno della testa. Per quanto riguarda Maya, afferma la prima scrittura divina<strong>, "Gunamayee mamma maaya," </strong>dove &ldquo;mama maaya&rdquo; significa &ldquo;Maya &egrave; mia&rdquo;, come proclamato da Dio. Secondo questo si dice che Maya &egrave; la combinazione dei guna. Dio &egrave; il creatore di tutte le cose, inclusa Maya, e quindi Dio ha dichiarato che Maya &egrave; Sua. Maya &egrave; di genere femminile, mentre Dio e le due anime, Atma e Jeevatma, che si separarono da Dio, sono maschili (per un totale di tre). Tutto il resto creato da Dio pu&ograve; dirsi femminile. Pertanto, Maya viene definita femminile. Non dovremmo considerare Maya come qualcosa di esterno; piuttosto, la Maya che tent&ograve; Ges&ugrave; era nella Sua stessa testa. Risiedendo nella Sua testa, Maya tent&ograve; Ges&ugrave; e cominci&ograve; a discutere con lui. Allo stesso modo, i guna nella testa di ogni persona agiscono come la loro Maya, tentandoli e dibattendo costantemente con loro. Dopo il battesimo di Ges&ugrave;, Maya inizialmente lo tent&ograve; tre volte, e Ges&ugrave; rispose con la Sua saggezza in tutte e tre le occasioni.

  Ges&ugrave; ha dato un esempio nella Sua vita che gli esseri umani dovrebbero emulare. Ogni volta che Maya metteva alla prova Ges&ugrave;, Egli rispondeva con saggezza. Pertanto, ogni persona dovrebbe imparare a fare lo stesso. Quando Satana chiese a Ges&ugrave; di inchinarsi davanti a lei, Ges&ugrave; diede a Satana (Maya) una risposta adeguata. Ges&ugrave; rispose a Satana dicendo: <strong>&ldquo;Adora il Signore tuo Dio e servi Lui solo&rdquo;. </strong>Ges&ugrave; pronunci&ograve; queste parole, ma &egrave; fondamentale capire che fu l&rsquo;Atma nel Suo corpo a pronunciare quelle parole. Lo Spirito Santo, Paramatma, non comunica direttamente con nessuno. Invece, trasmette la Sua saggezza attraverso l&rsquo;Atma. Quindi dovremmo riconoscere che la saggezza &egrave; stata impartita dal Paramatma stesso, anche se &egrave; stata espressa dall&rsquo;Atma nel corpo. Nella terza e ultima Scrittura divina, in 3:7, Dio afferma: &ldquo;La saggezza di Dio non &egrave; conosciuta da nessuno eccetto Dio&rdquo;. Ci&ograve; sottolinea che la saggezza completa rivelata dall'Atma all'interno del corpo &egrave; trasmessa da Paramatma (Dio).

  Ci sono dodici principali religioni nel mondo oggi e l'Induismo &egrave; unico in quanto comprende tutti i devata non presenti nelle altre religioni. Dio cre&ograve; sia i devata che gli esseri umani. Tuttavia, gli esseri umani hanno abbandonato Dio e si sono rivolti al culto dei devata, senza comprendere appieno la saggezza di Dio. Questa scelta sottolinea che gli esseri umani non hanno dato priorit&agrave; agli insegnamenti di Dio contenuti nelle loro Scritture. Coloro che abbandonano Dio e adorano i devata possono essere visti come se fossero sotto l'influenza di Maya, prestando ascolto alle parole di Maya. Nello schema generale, ci sono essenzialmente due parti: la parte di Dio e la parte di Maya. Tuttavia, in alcune religioni, le persone adorano esclusivamente Dio senza rivolgersi ad altri devata. &Egrave; soprattutto all&rsquo;interno dell&rsquo;induismo che il culto di pi&ugrave; devata, oltre a Dio, &egrave; pi&ugrave; comune. Di conseguenza, diventa evidente che coloro che adorano i devata si stanno allineando con l&rsquo;influenza di Maya.
<p><br /><br /></p>
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 7,
verse: ` <b>6) Il Vangelo di Matteo, capitolo 5, versetto 10.</b>`,
meaning: `<b>
(5:10) Beati coloro che sono perseguitati a causa della rettitudine (saggezza), perché di loro è il regno di paraloka..</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il versetto include la parola &ldquo;giustizia&rdquo;, ma dovrebbe esserlo <strong>&ldquo;saggezza&rdquo; invece di &ldquo;giustizia&rdquo;. </strong>Nella lingua ebraica, Ges&ugrave; probabilmente us&ograve; la parola "saggezza". Tuttavia, quando tradotta in inglese, la parola equivalente al termine ebraico non era rappresentata in modo accurato e "giustizia" veniva usata al posto di "saggezza". 'giustizia' e 'saggezza'. <strong>Rettitudine e giustizia sono concetti legati a questioni mondane, mentre saggezza e dharma sono di divino. </strong>Rettitudine e giustizia sono associate al karma, mentre saggezza e dharma hanno il potere di bruciare il karma. Questa distinzione sottolinea che la rettitudine appartiene al regno materiale, mentre la saggezza &egrave; di divino. Nel mondo incontriamo rettitudine, corruzione, giustizia e ingiustizia. La rettitudine porta al punya (buon karma), mentre la corruzione porta al peccato. Allo stesso modo, la giustizia produce punya, mentre l&rsquo;ingiustizia d&agrave; origine al peccato. Alla luce di queste differenze, &egrave; chiaro che il versetto in questione dovrebbe usare &ldquo;saggezza&rdquo; al posto di &ldquo;rettitudine&rdquo;.

  Coloro che affrontano la persecuzione per la ricerca della saggezza e coloro che sopportano difficolt&agrave; sul sentiero della saggezza possono essere considerati beati. Questo perch&eacute;, attraverso la loro sofferenza per amore della saggezza, possono ottenere moksham, che significa liberazione dalla schiavit&ugrave; del karma. Quando una persona raggiunge moksham, trascende questa esistenza mondana ed entra in uno stato diverso oltre il mondo. Si dice che un tale individuo sia entrato in paraloka, che &egrave; uno stato privo di esperienze mondane. &Egrave; importante notare che non tutti il viaggio verso la saggezza implica persecuzione o violenza. Alcuni individui acquisiranno saggezza e otterranno moksham (paraloka) senza alcun ostacolo.
</dv></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 8,
verse: ` <b> 7) Il Vangelo di Matteo, capitolo 5, versetto 17.</b> `,
meaning: ` <b>
(5:17) Non pensate che io sia venuto ad abolire la Legge (Dharma Shastra) o i Profeti; Non sono venuto ad abolirli ma a dar loro compimento.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nessuno pu&ograve; condannare il Dharma Shastra. Non pu&ograve; essere condannato. Esiste fin dagli albori della creazione, con numerosi profeti e insegnanti che ne impartiscono la saggezza. Quando Paramatma (l'Essere Supremo) discende sulla Terra come Bhagavan, non solo pratica il Dharma Shastra ma ne rende anche i principi comprensibili a tutti. Tuttavia, quando Bhagavan, come Figlio di Dio, rivela e pratica i dharma delineati nel Dharma Shastra, essi potrebbero non apparire come dharma ad alcuni individui. Questa discrepanza deriva dal fatto che alcune persone credono erroneamente che gli adharma siano dharma. Di conseguenza, i veri dharma possono sembrare adharma quando Bhagavan impartisce i Suoi insegnamenti. Questo &egrave; il motivo per cui Ges&ugrave; afferm&ograve; nel versetto sopra: <strong>&lsquo;Non pensare che io sia venuto ad abolire la Legge (Dharma Shastra), ma a soddisfarla.&rsquo;</strong>

  Le persone nel mondo sono cadute nell'influenza di Maya (Satana) e sono arrivate a credere che gli adharma siano dharma. Di conseguenza, si impegnano in varie forme di culto, ritenendolo devozione sincera. Maya ha reindirizzato la comprensione di Dio da parte delle persone verso se stessa, portandole a credere che stanno progredendo verso Dio. In questo processo, li guida a praticare gli adharma piuttosto che i dharma, conducendoli di fatto nella direzione opposta a quella di Dio. In tale stato, anche quando Dio si incarna come a umano e pratica i veri dharma, quelle azioni possono apparire fuorvianti a coloro che sono influenzati da Maya. Le persone potrebbero erroneamente pensare che ci&ograve; che stanno facendo sia il vero dharma e che siano credenti genuini. Potrebbero accusare Dio che &egrave; venuto come essere umano di seguire gli adharma e potrebbero addirittura etichettarlo come un blasfemo. Quando il vero Dio venne sulla Terra come Ges&ugrave;, ci&ograve; che disse e pratic&ograve; erano davvero dharma. Tuttavia, questi dharma sembravano contraddire gli insegnamenti di studiosi, swami, e guru. Questa discrepanza &egrave; il motivo per cui i capi sacerdoti, gli scribi, e Caifa si opposero e denunciarono Ges&ugrave;. Quindi, Ges&ugrave; ha sottolineato nel versetto: <strong>&ldquo;Non sono venuto ad abolirli ma a dar loro compimento&rdquo;.</strong>
</div></div>
</span>  `
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 1,
pageNumber: 9,
verse: ` <b>8) Il Vangelo di Matteo, capitolo 5, versetto 18.</b>`,
meaning: `<b>(5:18) Poiché in verità vi dico, finché il cielo e la terra non scompariranno, né la più piccola lettera, né il minimo tratto di penna, scompariranno in alcun modo dalla Legge (Dharma Shastra) finché tutto non sarà compiuto. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In questo verso, il termine <strong>"Dharma Shastra" </strong>&egrave; unico e alcuni potrebbero chiedersi cosa significhi. Per affrontare tali domande, &egrave; essenziale comprendere il concetto di shastra (scienza), i vari tipi di scienze e la particolarit&agrave; del Dharma Shastra nel campo delle scienze. Innanzitutto, se comprendiamo il significato della parola &ldquo;shastra&rdquo;, comprenderemo in una certa misura gli shastra. La parola <strong>'shastra' </strong>deriva dalla parola telugu <strong>'Shasanam'</strong>,&rsquo; che trasmette l&rsquo;idea di <strong>"deve essere applicato." </strong>Di conseguenza, &ldquo;shastra&rdquo; implica <strong>"tutto ci&ograve; che viene affermato deve accadere." </strong>Inoltre, il termine <strong>'shapam' </strong>deriva da "shastra" e significa <strong>"deve essere giustiziato." </strong>Quindi, tutte e tre le parole - <strong>shasanam&rsquo; (statuto), &rsquo;shapam&rsquo; (maledizione) e &rsquo;shastra&rsquo; (scienza) </strong>condividono lo stesso significato di fondo. Shastra &egrave; tipicamente classificato in sei distinte aree di studio. Alcuni potrebbero sostenere che le sei scienze possono essere raggruppate in due tipi, mentre altri propongono tre categorie. In generale, gli shastra possono essere considerati di due tipi. In altre parole, possiamo descrivere gli shastra come triplici. Se li classifichiamo in due tipi, un gruppo &egrave; correlato a questioni mondane e l'altro riguarda questioni relative al Paramatma (l'Essere Supremo). Nella triplice classificazione, quattro shastra sono associati a preoccupazioni mondane, uno si riferisce esclusivamente al Paramatma e l'altro rientra nella categoria di essere parzialmente correlato al Paramatma e parzialmente correlato a questioni mondane.

  I sei shastra sono i seguenti: 1) Matematica, 2) Astronomia, 3) Chimica, 4) Fisica, 5) Astrologia e 6) Brahma Vidya. Di questi, i primi quattro riguardano questioni mondane, mentre il quinto, l'Astrologia, ha collegamenti sia con le preoccupazioni mondane che con quelle divine. In alternativa, se anche l'astrologia viene considerata all'interno della categoria degli shastra mondani, i primi cinque shastra sono classificati come mondani, mentre Brahma Vidya Shastra rimane l'unica scienza correlata al Divino. Ci sono un totale di sei scienze, di cui Brahma Vidya &egrave; la pi&ugrave; significativa. Questo &egrave; il motivo per cui &egrave; conosciuto come Brahma Vidya shastra, dove &ldquo;Brahma&rdquo; significa grandezza. &ldquo;Brahma&rdquo; non &egrave; un nome, ma un termine usato per denotare la natura pi&ugrave; grande e suprema di Dio. <strong>Poich&eacute; &egrave; una scienza dedicata alla comprensione di Dio, &egrave; appropriatamente chiamata Brahma Vidya shastra. </strong>Dato che Brahma Vidya appartiene alla scienza di Dio, porta la designazione &ldquo;vidya&rdquo;. Le altre cinque scienze mondane, vale a dire matematica, astronomia, Chimica, Fisica e Astrologia mancano del <strong>'vidya' </strong>suffisso nei loro nomi. Il termine &ldquo;vidya&rdquo; &egrave; riservato alla scienza relativa a Dio. Qualcuno potrebbe chiedersi il motivo di questa distinzione, e la risposta &egrave; la seguente.

  Le scienze possono essere divise in due tipi: legate al mondo e legate al Paramatma. Le cinque scienze materiali possono essere pienamente comprese da chiunque. Tuttavia, Brahma Vidya, il pi&ugrave; grande di tutti, che rivela i dharma di Dio, &egrave; l&rsquo;unico che include il termine &ldquo;vidya&rdquo; nel suo nome, guadagnandosi il titolo di pi&ugrave; grande Vidya shastra. La parola "vidya" (educazione) ha origine dal suono <strong>'con</strong>&rdquo;, che significa sapere. Vidya implica la conoscenza che dovrebbe essere acquisita. Un &ldquo;vidyarthi&rdquo; (studente) &egrave; qualcuno che cerca la conoscenza, chiedendo qualcosa che non possiede ancora e acquisendolo da coloro che possiedono la conoscenza. Gli studenti acquisiscono un&rsquo;istruzione essenziale da insegnanti competenti. Vidya si riferisce alla conoscenza che pu&ograve; essere conosciuta ma non pienamente compresa. Allo stesso modo, nessuno pu&ograve; affermare di comprendere appieno l&rsquo;argomento di Dio. Nessuno pu&ograve; affermare di possedere una conoscenza completa di Dio. Imparare a conoscere Dio &egrave; una ricerca che dura tutta la vita e le persone continuano ad acquisire comprensione per tutta la vita. Non c'&egrave; nessuno che possa dire che questo &egrave; il limite e che loro sanno tutto. Gli esseri umani continueranno sempre a imparare riguardo alla questione di Dio, ma non la conosceranno mai pienamente. Pertanto, ci si riferisce sempre alla scienza di Dio come Vidya shastra, ed &egrave; perennemente il Brahma Vidya shastra. Le altre cinque scienze, invece, si possono comprendere appieno, senza lasciare altro da sapere. Di conseguenza, il termine &ldquo;vidya&rdquo; non viene aggiunto ai loro nomi.

  Colui che possiede la conoscenza completa di Dio (il Brahma) pu&ograve; condividere questa saggezza con gli altri. Se un individuo non conosce la saggezza di Dio, chi altro pu&ograve; trasmetterla con sicurezza? La nostra risposta a questa domanda &egrave; la seguente: solo Dio stesso conosce pienamente la propria saggezza. Di conseguenza, Dio deve trasmettere personalmente la Sua saggezza. Tuttavia, Dio non comunica direttamente con nessuno. Invece, Dio, pur non apparendo come Dio, impartisce la Sua saggezza assumendo la forma di un uomo. &Egrave; importante notare che, sebbene Dio possa presentarsi in una forma simile a quella umana, non &egrave; un essere umano. Nelle sembianze di un uomo, Dio ha rivelato la Sua saggezza nella sua interezza, presentandola come una scienza con principi e ordinanze prescritte. Pertanto, ci&ograve; che Dio ha rivelato viene definito Brahma Vidya shastra. Dio stesso ha comunicato il Brahma Vidya shastra ed &egrave; compito dell&rsquo;umanit&agrave; comprenderlo. Quando una persona acquisisce la piena comprensione della Brahma Vidya, viene liberata dal karma e pu&ograve; unirsi a Dio. Di conseguenza, gli individui devono persistere nell&rsquo;acquisire la conoscenza della scienza di Dio finch&eacute; non ottengono moksham (liberazione). Pertanto, &egrave; giustamente chiamato Brahma Vidya, poich&eacute; &egrave; la pi&ugrave; alta forma di educazione nel mondo.

  I dharma di Dio sono articolati nel Brahma Vidya shastra, motivo per cui nelle scritture divine viene chiamato Dharma Shastra. Inizialmente Dio rivel&ograve; i Suoi shastra tramite ordinanze fin dagli albori della creazione. Successivamente, tre scritture divine emersero in tempi diversi e in luoghi distinti. Queste tre scritture divine possono essere considerate come i tre Dharma Shastra, che contengono tutti esclusivamente dharma. Di conseguenza, tutti e tre i Dharma Shastra condividono gli stessi principi e sono radicati nei dharma di Dio. Sono uniti nella loro adesione alla Brahma Vidya e insegnano i dharma di Dio. Di conseguenza, i tre Dharma Shastra si confermano reciprocamente e non si contraddicono a vicenda. <strong>Il primo divino&nbsp;</strong><strong>La scrittura divina &egrave; conosciuta come Bhagavad-Gita, la seconda scrittura divina &egrave; chiamata Bibbia e la terza scrittura divina (la scrittura divina finale) &egrave; chiamata Corano. </strong>Sebbene queste tre scritture portino nomi diversi, trasmettono i dharma dello stesso Dio.

  Seguendo il Brahma Vidya shastra, tre profeti trasmisero la saggezza di Dio, che successivamente divennero tre distinte scritture divine. Sebbene queste tre scritture divine siano separate, tutte espongono gli stessi dharma di Dio da tre diverse prospettive. Poich&eacute; i dharma presentati in queste scritture sono basati sulla scienza, saranno realizzati esattamente come sono stati affermati, come affermato nel versetto <strong>"finch&eacute; il cielo e la terra non scompariranno." </strong>Il Cielo e la Terra del mondo esterno sono eterni, poich&eacute; Dio li ha resi tali. Tuttavia, le controparti invisibili della Terra e del Cielo all'interno del corpo umano sono completamente deperibili. Pertanto, la frase &ldquo;finch&eacute; il cielo e la terra non scompaiono&rdquo; deve essere intesa come &ldquo;finch&eacute; il corpo umano non muore (scompare)&rdquo;. Quando un individuo cerca la saggezza di Dio, deve aderire a tutti i comandamenti di Dio (dharma). Senza praticare con tutto il cuore i dharma di Dio, non &egrave; possibile ottenere paraloka. Come delineato nel Dharma Shastra, moksham (liberazione) pu&ograve; essere raggiunto solo quando tutti i dharma sono stati adempiuti. Anche se una persona non pratica nemmeno un po&rsquo; di ci&ograve; che &egrave; delineato nel Dharma Shastra, non otterr&agrave; moksham. Invece di limitarsi a suggerire, <strong>'anche se una piccola cosa non viene seguita dai dharma prescritti,' </strong>&egrave; espresso <strong>come "non la lettera pi&ugrave; piccola, non il minimo tratto di penna". </strong>Pertanto, &egrave; fondamentale seguire ogni aspetto del Dharma Shastra senza tralasciare nulla. &Egrave; importante sapere che la lettera e il tratto di penna menzionati non hanno nulla a che vedere con la scrittura del libro.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 10,
verse: ` <b>9) Il Vangelo di Matteo, capitolo 5, versetto 19.</b>`,
meaning: `<b>
(5:19) Pertanto, chiunque metta da parte uno di questi minimi comandamenti e insegni agli altri di conseguenza sarà chiamato minimo nel regno di paraloka, ma chiunque pratichi e insegni questi comandamenti sarà chiamato grande nel regno di paraloka.
 </b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Sebbene ci siano alcuni dharma fondamentali delineati nel Dharma Shastra, molti sono interconnessi con essi. I dharma di Dio vengono anche chiamati <strong>comandamenti</strong>. Ci sono principalmente <strong>due </strong>il pi&ugrave; essenziale dei comandamenti di Dio, ma molti altri sono collegati ad essi. Chiunque trasgredisca anche il pi&ugrave; piccolo di questi comandamenti collegati e impartisca tali insegnamenti agisce contro la rettitudine. Una persona non dovrebbe trasgredire nessuno dei dharma, siano essi minori o significativi, come indicato da Dio. Ogni singolo dharma, non importa quanto piccolo, dovrebbe essere praticato diligentemente senza eccezioni. Tuttavia, alcuni individui, invece di aderire anche ai pi&ugrave; piccoli dharma, si sono allontanati dal sentiero dei dharma. Non solo hanno abbracciato gli adharma, ma hanno anche diffuso tali insegnamenti. Nonostante siano considerati Guru dalla societ&agrave;, non sono riusciti a comprendere correttamente i comandamenti di Dio. Purtroppo, hanno frainteso i dharma di Dio come adharma e sono diventati sostenitori degli adharma. Fuorviano le persone impartendo tali insegnamenti, affermando di impartire la vera saggezza e i genuini comandamenti di Dio. Anche&nbsp;sebbene possano essere stimati come grandi Guru agli occhi del mondo, agli occhi di Dio sono considerati gli minimo.

  Coloro che comprendono i dharma li trasmettono accuratamente come dharma a coloro che sono interessati, anche se non sono Guru molto conosciuti. Alcuni individui interpretano erroneamente i dharma di Dio come adharma e, a loro volta, insegnano questi adharma. Di conseguenza, coloro che insegnano adharma non possono ottenere il regno di paraloka. Gli ignoranti non raggiungeranno mai il regno di paraloka, poich&eacute; esso rimane loro permanentemente chiuso, ritenendoli indegni. Anche se qualcuno che comprende i comandamenti di Dio dalle Scritture non &egrave; considerato un Guru, otterr&agrave; un posto significativo nel paraloka quando insegner&agrave; i dharma che conosce. Un individuo del genere non &egrave; solo conosciuto come un seguace dei dharma, ma gode anche di grande considerazione agli occhi di Dio. Un vero seguace del dharma &egrave; colui che impartisce meticolosamente anche il pi&ugrave; piccolo dei dharma di Dio in grande dettaglio.
</div></div>

</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 1,
pageNumber: 11,
verse: `<b>10) Il Vangelo di Matteo, capitolo 5, versetto 20.</b> `,
meaning: ` <b>
(5:20) Poiché vi dico che a meno che la vostra giustizia non superi quella dei farisei e degli insegnanti della legge, certamente non entrerete nel regno di paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nel mondo ci sono molti farisei, devoti e insegnanti. È essenziale possedere una saggezza più profonda della loro. Dio ha affermato che coloro che possiedono meno saggezza dei farisei, dei devoti e degli insegnanti non possono entrare in paraloka. Come suggerisce il versetto, quando possiedi più saggezza degli Swami e dei Farisei, che si impegnano in yajnas (sacrifici rituali) e agiscono contrariamente a ciò che Dio ha istruito, otterrai facilmente paraloka.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 12,
verse: `<b> 11) Il Vangelo di Matteo, capitolo 5, versetto 28.</b> `,
meaning: `<b>
(5:28) Ma io vi dico che chiunque guarda una donna con desiderio ha già commesso adulterio con lei nel suo cuore. </b>     `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Le azioni umane possono essere classificate in due approcci distinti: azioni esterne osservabili e azioni interne che si verificano nei pensieri e nei sentimenti di una persona. Entrambe queste dimensioni sono presenti in ogni individuo. In un approccio, una persona si impegna in azioni legate ai propri guna con pensieri ed emozioni interiori. Nell'altro approccio, le stesse azioni vengono eseguite attraverso l'interazione dei guna e del corpo fisico. Le conseguenze di queste azioni si traducono in punya (buon karma) o in peccato (cattivo karma). &Egrave; importante notare che esistono due tipi di azioni: fisiche (visibili) e non fisiche (invisibili).<strong>). Quando si valuta il carattere di una persona, la societ&agrave; spesso fa affidamento sulle sue azioni fisiche osservabili per determinare se sono considerate buone o cattive. Tuttavia, diventa pi&ugrave; difficile esprimere tali giudizi quando le azioni di una persona sono interne e coinvolgono pensieri ed emozioni, poich&eacute; non sono facilmente distinguibili. </strong>&Egrave; difficile stabilire se una persona &egrave; buona o cattiva quando non siamo consapevoli delle sue azioni.

  Quello di una persona <strong>aham </strong>(l'ego o senso di s&eacute;), presente nelle loro azioni fisiche o nei pensieri non fisici, gioca un ruolo cruciale nella generazione del karma. Il peccato o punya karma viene ricevuto da un individuo a causa della presenza di aham nel proprio corpo. Sebbene gli organi esterni del corpo siano coinvolti nelle azioni fisiche, &egrave; il funzionamento di aham che influenza l&rsquo;esito karmico di tali azioni. Anche quando una persona non &egrave; impegnata fisicamente in un'azione, il suo aham, situato accanto a buddhi (intelletto), attribuisce il karma in base a ci&ograve; che aham percepisce nei pensieri di buddhi quando la contemplazione viene intrapresa con l'influenza dei guna. Se aham non &egrave; attivo, una persona non accumuler&agrave; karma, anche se &egrave; coinvolta in un lavoro fisico o non fisico. Questo concetto si riflette nella prima scrittura divina, in particolare nel versetto 17 del Moksha Sanyasa Yoga, che afferma: <strong>"Sebbene una persona elimini tutti gli esseri del mondo senza la presenza di aham nei suoi sentimenti, non incorrer&agrave; nel peccato per l'atto di uccidere e non sar&agrave; considerata un assassino." </strong>Ci&ograve; sottolinea l&rsquo;importanza di aham nel determinare le conseguenze morali delle proprie azioni. Anche Ges&ugrave; trasmise un messaggio simile quando disse: <strong>&lsquo;Incorrerai nel peccato attraverso i tuoi pensieri a causa di aham, anche se non hai compiuto fisicamente l&rsquo;azione.&rsquo; </strong>Ci&ograve; rivela l'unit&agrave; negli insegnamenti sia della prima che della seconda scrittura divina, nonch&eacute; la coerenza della saggezza trasmessa. Le azioni di una persona compiute senza aham sono considerate come se non fossero state compiute, e i pensieri che coinvolgono aham sono trattati come se l&rsquo;azione fosse stata eseguita. Quindi, la presenza di aham all'interno del corpo influenza l'accumulo di punya e peccato da parte del Jeevatma. Di conseguenza, &egrave; stato affermato fin dall&rsquo;inizio della creazione che &ldquo;compiere azioni senza aham &egrave; Karma Yogam&rdquo;, un concetto ribadito sia nella prima che nella seconda scrittura divina.
</div></div>
</span>`
    },
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 13,
verse: `<b>12) Il Vangelo di Matteo, capitolo 5, versetti 29 e 30.</b>`,
meaning: ` <b>
(5:29) Se l'occhio destro vi fa inciampare, cavalo e gettalo via. È meglio per te perdere una parte del tuo corpo, piuttosto che tutto il tuo corpo venga gettato nell'Inferno.
<br><br>
(5:30) E se la vostra mano destra vi fa inciampare, tagliala e gettala via. È meglio per te perdere una parte del tuo corpo, piuttosto che tutto il tuo corpo vada nella Geenna.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il versetto 29 menziona <strong>'occhio,' </strong>e il versetto 30 menziona <strong>'mano.' </strong>Ad un esame pi&ugrave; attento, diventa evidente che il corpo umano &egrave; costituito da due tipi di parti del corpo: fisiche o visibili e non fisiche o sottili. Ci sono un totale di dieci (10) parti del corpo fisico e quindici (15) parti del corpo sottile, portando il conteggio combinato a 25, incluso Jeevatma. Ogni parte del corpo corrisponde ad una funzione distinta all'interno del corpo. Il corpo umano possiede cinque gnanendriyas (organi di senso) e cinque karmendriyas (organi motori). Questi due gruppi di organi consentono collettivamente azioni fisiche. Gli gnanendriyas, che comprendono l'occhio, l'orecchio, il naso, la lingua e la pelle, fungono da recettori che trasmettono informazioni esterne alle facolt&agrave; interiori. Allo stesso modo, ci sono cinque karmendriya: mani, gambe, bocca, ano e organo sessuale. Il manas (mente) trasmette quindi queste informazioni dai sensi al buddhi (intelletto). Mentre le gnanendriyas servono a trasmettere informazioni esterne dall'ambiente circostante all'ambiente facolt&agrave; interne, la buddhi interiore trasmette istruzioni attraverso il manas ai karmendriya, che successivamente eseguono le azioni come dirette dalla buddhi.

  Gli esseri umani eseguono azioni coordinate dall'interazione di gnanendriya (organi sensoriali) e karmendriya (organi motori). In particolare, il <strong>occhio </strong>tra i e i <strong>mano </strong>tra i karmendriya rivestono particolare importanza, motivo per cui entrambi sono menzionati in questi versi. Anche se il buddhi (intelletto) non dirige i karmendriyas a svolgere un compito, il peccato pu&ograve; comunque essere attribuito a una persona in base ai pensieri del buddhi quando aham (ego), strettamente connesso al buddhi, &egrave; attivo. Ci&ograve; sottolinea il ruolo fondamentale dell&rsquo;occhio nel potenziale peccato. Ad esempio, quando una persona guarda una donna con pensieri lussuriosi, pu&ograve; incorrere nel peccato a causa dell&rsquo;influenza di aham, anche se non ha danneggiato fisicamente l&rsquo;altra persona. L'occhio, in questo modo, crea la possibilit&agrave; di attribuire il peccato a un individuo per azioni che potrebbero non verificarsi mai nel regno fisico. Pertanto, il versetto ci consiglia di &ldquo;cavare l&rsquo;occhio e gettarlo via&rdquo;. Tuttavia, &egrave; essenziale notare che questo non dovrebbe essere preso alla lettera, poich&eacute; rimuovere fisicamente un occhio non &egrave; il significato inteso dal versetto. Il versetto menziona specificamente &ldquo;il tuo occhio destro&rdquo;, ma &egrave; importante capire che sia l&rsquo;occhio destro che quello sinistro sono in grado di portare a risultati simili. Il peccato pu&ograve; nascere da entrambi gli occhi. La menzione del solo occhio destro induce a riflettere sul motivo di questa distinzione.

</div></div>

<div class="container" style="color:black;font-size: 11px;">
          <img src="assets/img/gnanendriyalu.png"  style="width:100%;">
          <div class="io-jeeva">
            Jeeva
          </div>
          <div class="io-mind">
          Spirito
          </div>
          <div class="io-chittam">
            Chittam
          </div>
          <div class="io-intellect">
          Intelletto
          </div>
          <div class="io-ego">
            Ego
          </div>
          <div class="so-eye">
          Occhio
          </div>
          <div class="so-nose">
          Naso
          </div>
          <div class="so-ear">
          Orecchio
          </div>
          <div class="so-tongue">
          Lingua
          </div>
          <div class="so-skin">
          La pelle
          </div>
          <div class="ao-hands">
          Le mani
          </div>
          <div class="ao-legs">
          Gambe
          </div>
          <div class="ao-mouth">
          Bocca
          </div>
          <div class="ao-anus">
          Ano
          </div>
          <div class="ao-sex-organ">
          Organo sessuale
          </div>
        </div>

    Il corpo umano presenta naturalmente differenze tra il lato destro e quello sinistro, spesso associate a forza e debolezza. Nel versetto menzionato vengono specificate entrambe le parti del corpo del lato destro, vale a dire l'occhio destro e la mano destra. Un altro punto essenziale da considerare in questo versetto &egrave; la dichiarazione<strong>"&Egrave; meglio per te perdere una parte del tuo corpo, piuttosto che tutto il tuo corpo venga gettato nella inferno". </strong>&Egrave; fondamentale riconoscere che n&eacute; l'occhio n&eacute; la mano, come parti esterne del corpo, sono la fonte diretta del peccato. Il motore principale del peccato &egrave; la presenza di aham (ego) all'interno del corpo. Questa prospettiva &egrave; in linea con gli insegnamenti che si trovano sia nella prima che nella seconda scrittura divina. Diventa quindi evidente che le componenti corporee esterne non hanno alcun coinvolgimento diretto nell&rsquo;acquisizione o nell&rsquo;esperienza del peccato. <strong>&Egrave; il sentimento di aham nel corpo che porta al peccato. Il Jeeva che risiede nel corpo sperimenta il peccato. </strong>La responsabilit&agrave; dell'acquisizione del karma risiede nel sentimento di aham, ed &egrave; dovere di Jeeva sperimentarlo ripercussioni Dikarma. Perci&ograve;,IL esterno occhio (Gnanendriya) E funzione della mano (karmendriya) senza riguardo al karma.

    Alcuni potrebbero chiedersi perch&eacute; Ges&ugrave; consigli&ograve; di cavare un occhio e di tagliare la mano quando non hanno alcuna relazione con il karma. La nostra risposta &egrave; che quando l'occhio trasmette informazioni esterne, raggiunge buddhi (intelletto). Successivamente, la Buddhi elabora queste informazioni in accordo con i guna. Tuttavia, se il <strong>aham (ego) viene represso e disimpegnato </strong>da questi input sensoriali, impedisce al peccato e al punya di manifestarsi nei guna che la buddhi elabora o nella vista percepita dall'occhio. Dissociando l'aham interiore dalle informazioni fornite dall'occhio, si pu&ograve; prevenire efficacemente il peccato associato all'occhio, simile alla rimozione dell'occhio stesso. Allo stesso modo, quando l&rsquo;aham non &egrave; collegato a ci&ograve; che si sente, &egrave; come se l&rsquo;orecchio fosse stato rimosso. &Egrave; essenziale riconoscere che sin e punya hanno origine non solo dagli occhi ma anche dagli altri quattro sensi. Dato il ruolo fondamentale dell&rsquo;occhio tra gli gnanendriya e la naturale predominanza dell&rsquo;occhio destro nella percezione visiva, Ges&ugrave; enfatizz&ograve; &ldquo;cavare l&rsquo;occhio destro&rdquo; nel versetto. Sebbene il versetto possa sembrare semplice, il suo significato sottile dovrebbe essere compreso.

    Allo stesso modo, la menzione della mano destra tra i karmendriya ha un significato. Il karma non emana esclusivamente dalla mano destra ma anche dalle azioni compiute da altri karmendriya. Il karma si verifica anche quando gli gnanendriya non sono impegnati in compiti fisici ed &egrave; generato attraverso il funzionamento dei karmendriya. Quando ci riferiamo ai cinque gnanendriya, raggruppiamo i due occhi come un'unica entit&agrave;, proprio come entrambe le orecchie sono contate come una sola. Sebbene ci siano due narici, vengono trattate collettivamente come un unico naso. I restanti componenti sono costituiti dalla pelle e dalla lingua. Allo stesso modo, nei karmendriya, le due mani sono considerate come una, e lo stesso vale per le due gambe. I restanti tre sono la bocca, l'ano e l'organo sessuale e non sono in coppia. Dato che l'occhio destro e la mano destra sono relativamente pi&ugrave; dominanti in questi organi accoppiati, il versetto individua l'occhio destro e la mano destra. L'occhio destro possiede una visione superiore e la mano destra &egrave; pi&ugrave; versatile nell'esecuzione dei compiti. In un'interpretazione pi&ugrave; sottile del versetto, Ges&ugrave; ce lo ha detto <strong>sopprimi aham per prevenire il peccato derivante dalla vista degli occhi e dalle azioni della mano. </strong>Tuttavia, &egrave; fondamentale comprendere che l&rsquo;eliminazione dell&rsquo;occhio destro o della mano destra non arresta l&rsquo;afflusso di karma, poich&eacute; anche altri organi del corpo possono dare origine al karma. Questo versetto sottolinea l'idea che aham &egrave; la fonte fondamentale del peccato, sottolineando la necessit&agrave; di controllarlo. Gli organi del corpo non generano il peccato, n&eacute; il corpo porta il peso del peccato. Invece, &egrave; l&rsquo;aham che accumula il peccato nel corpo. Inoltre, Jeevatma, una componente del corpo, sperimenta karma buono e cattivo. Il corpo comprende cinque gnanendriya, cinque karmendriya, cinque vayu, cinque tanmatra e cinque antahkarana, con il Jeevatma che fa parte degli antahkarana. Ci&ograve; si riassume in un totale di venticinque componenti, incluso il Jeevatma nella struttura del corpo. In sostanza, una comprensione profonda dei meccanismi del corpo pu&ograve; portare a una comprensione pi&ugrave; profonda dei versetti di Ges&ugrave;. Un vero gnani riconosce questa intricata composizione del corpo. Come uno spiritista una volta trasmesso poeticamente, chiunque sia privo di tale conoscenza non dovrebbe essere considerato uno gnani.

    <strong><em>Panchatatvamulanu panchikarinchaka</em></strong>
    <strong><em>Manchi yatulamanna maatalanna</em></strong>
    <strong><em>Kunchamandu gajamu gruddupettina chandambu </em></strong>
    <strong><em>Akhila jivasanga aatmalinga.</em></strong>

    <strong>Senso</strong>: - Il termine sankhya si riferisce alla conoscenza completa dei Pancha Bhuta, che includono Cielo, Aria, Fuoco, Acqua e Terra. Questa conoscenza comprende la comprensione di come &egrave; stato creato ciascuno di questi elementi, di come sono stati divisi in cinque componenti distinte e di come queste venticinque parti formano collettivamente i vari organi e componenti del corpo, sia visibili che invisibili. Assumere di essere uno gnani (un conoscitore o un individuo illuminato) senza possedere una profonda comprensione del Sankhya del corpo &egrave; come fare una falsa affermazione. Equivale ad affermare che un elefante abbia deposto un uovo sotto un cesto. In realt&agrave;, anche se un elefante fosse legato saldamente con catene e posto sotto un cesto, non deporrebbe le uova. Pertanto, l&rsquo;affermazione che un elefante abbia deposto le uova sotto un cesto &egrave; del tutto priva di fondamento. Allo stesso modo, &egrave; errato per un individuo dichiararsi gnani quando non ha conoscenza degli intricati dettagli riguardanti gli organi del corpo. La vera saggezza richiede una profonda comprensione della composizione del corpo, comprese le sue parti visibili e invisibili.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 14,
verse: `  <b> 13) Il Vangelo di Matteo, capitolo 6, versetti 3 e 4.</b>`,
meaning: ` <b>
(6:3) Ma quando fai il dharma, non lasciare che la tua mano sinistra sappia cosa sta facendo la tua mano destra.
<br><br>
(6:4) Affinché la tua donazione possa essere segreta. Allora tuo padre, che vede ciò che si fa di nascosto, ti ricompenserà.
</b>`,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Molti predicatori hanno interpretato erroneamente questo versetto, suggerendo che si riferisca alla donazione. In certi luoghi di culto si suggerisce addirittura che il denaro dato per il servizio di Dio dovrebbe essere cos&igrave; discreto che &ldquo;la mano destra non dovrebbe sapere cosa fa la mano sinistra&rdquo;. Di conseguenza, i contributi vengono spesso nascosti o avvolti nelle mani prima di essere donati. Tuttavia, &egrave; importante chiarire che questo versetto non riguarda la donazione; si tratta del dharma. C&rsquo;&egrave; una differenza significativa tra dharma e donazione. <strong>La donazione implica dare agli altri, mentre il dharma si riferisce ai principi che si praticano. </strong>Per capire veramente come praticare il dharma, &egrave; essenziale comprendere cosa comportano questi dharma. In questo versetto non si fa menzione della donazione; piuttosto, enfatizza il dharma. I dharma di Dio sono principalmente due, come delineato nelle scritture divine. Il terzo &egrave; fisico. Ci sono anche altri dharma che sono interconnessi con questi tre primari. Per raggiungere Dio, una persona deve concentrarsi principalmente su questi tre dharma essenziali, mentre gli altri dharma ruotano attorno ad aspetti di Dio. Questi tre dharma fondamentali sono le pratiche chiave per raggiungere Dio.

  I tre dharma, Brahma, Karma e Bhakti Yoga, sono necessari per raggiungere Dio. Due di essi implicano la pratica interna con sentimenti o pensieri, mentre uno coinvolge la pratica esterna. La pratica dei primi due dharma non &egrave; riconoscibile dagli altri. Tuttavia, quando si tratta del terzo dharma, c&rsquo;&egrave; la possibilit&agrave; che venga notato altri.

  &nbsp;Questo &egrave; il motivo per cui, nel versetto, Ges&ugrave; si riferisce a un singolare &ldquo;dharma&rdquo; piuttosto che a &ldquo;dharmas&rdquo;. Egli sottolinea che si dovrebbe praticare un dharma che potrebbe essere notato dagli altri con cautela e in segreto. Lo trasmette dicendo: <strong>&ldquo;non sappia la tua mano sinistra ci&ograve; che fa la tua destra&rdquo;. </strong>Il messaggio di fondo &egrave; che quando gli altri osservano la tua pratica del Dharma, potrebbero interpretarla male o esserne influenzati negativamente. Quindi, Ges&ugrave; consiglia che quando si pratica il dharma, ci&ograve; dovrebbe essere fatto con discrezione e senza cercare il riconoscimento degli altri.
</div></div>
</span>`
},
{
  chapterName: "Il Vangelo secondo Matteo",
  chapterNumber: 2,
  pageNumber: 15,
  verse: `  <b>14) Il Vangelo di Matteo, 6° capitolo, 6° versetto.</b> `,
  meaning: `<b>
  (6:6) Ma quando preghi, vai nella tua stanza, chiudi la porta e prega tuo Padre, che è invisibile. Allora tuo padre, che vede ciò che si fa di nascosto, ti ricompenserà.</b>`,
  pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando preghi Dio, &egrave; essenziale assicurarti che le tue preghiere siano piene di dharma. Mere espressioni verbali senza dharma non costituiscono una preghiera genuina e non ti metteranno in contatto con Dio. Pertanto, quando sei impegnato in una preghiera che pu&ograve; essere osservata da altri, Ges&ugrave; disse di entrare in una stanza privata, chiudere la porta e offrire le tue preghiere all'Atma interiore, la presenza divina dentro di te. Atma, che &egrave; nel corpo, &egrave; il padre degli esseri umani. Una preghiera che pu&ograve; essere conosciuta da altri dovrebbe essere condotta in modo tale che nessuno se ne accorga. Cos&igrave; facendo, l'Atma, che &egrave; segretamente nel corpo, ti ricompenser&agrave;. Nella prima Scrittura divina, questa pratica viene chiamata <strong>&lsquo;Brahma (Grande) Yogam.&rsquo;</strong>
</div></div>
  </span>`
    },
    {
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 16,
verse: `  <b>15) Il Vangelo di Matteo, capitolo 6, versetti 7 e 8. </b> `,
meaning: `  <b>
(6:7) Quando pregate, non continuate a balbettare come i pagani, perché pensano che saranno ascoltati a causa delle loro molte parole.
<br><br>
(6:8) Non essere come loro, perché tuo padre sa di cosa hai bisogno prima che tu glielo chieda.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Molte persone nella societ&agrave; odierna pregano con parole futili piuttosto che con parole futili <strong>"Yogam", </strong>che aderisce al dharma nel raggiungere Dio. Presumono che Dio soddisfer&agrave; i loro desideri se usano molte parole. La loro intenzione non &egrave; unirsi a Dio, ma piuttosto cercare desideri e benefici mondani. Tuttavia, non dovresti pregare come loro. Tuo padre, Atma, sa gi&agrave; tutto ancor prima che tu lo chieda. Lui sa cosa dovrebbe o non dovrebbe esserti concesso. Pertanto, &egrave; inutile informarsi sui benefici materiali. Tuo Padre, Atma, ti guida secondo il tuo karma. Quindi, l&rsquo;Atma ti fornisce ci&ograve; che hai guadagnato attraverso il tuo karma passato. Che tu lo chieda o no, l'Atma concede tutto secondo il karma. Atma &egrave; il Padre di tutti gli esseri umani e lo Spirito Santo, il Padre di Atma, &egrave; il testimone di tutte le cose.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 17,
verse: ` <b> 16) Il Vangelo di Matteo, capitolo 7, versetti 13 e 14.</b> `,
meaning: `<b>
(7:13) Entra attraverso la porta stretta. Poiché larga è la porta e spaziosa la strada che conduce alla perdizione, e molti entrano per essa.
<br><br>
(7:14) Ma piccola è la porta e angusta la strada che conduce alla vita, e solo pochi la trovano.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ci sono due sentieri in questo mondo: uno è il sentiero del Paramatma (Lo Spirito Santo), e l'altro è il sentiero di Maya. Anche se sono pochissimi coloro che cercano Dio, molti sono attratti dal vasto sentiero di Maya. La porta per Moksham è stretta e difficile da attraversare. Anche la via di Dio è stretta e solo pochi riescono a scoprirla.

  Il versetto menziona la porta (ingresso) di Dio e la strada. Il primo è l'ingresso e il successivo è il sentiero. Ci sono solo due strade per tutti gli esseri umani. Uno è stretto e l'altro è largo. La porta della strada stretta è stretta e l’ingresso della strada larga è largo. L'ingresso e il percorso devono essere alcune volte più grandi di chi entra. Quindi è possibile entrare solo dal cancello e dalla strada. La dimensione della porta stretta e la larghezza del sentiero stretto equivalgono alla dimensione della persona che entra. Ma nella seconda scelta, la dimensione del cancello largo e la larghezza della strada larga sono 108 volte più grandi della persona che entra. In questo modo, ci sono solo due sentieri in questo mondo: uno con un cancello 108 volte più largo e una strada ampia, e l’altro con un cancello e un sentiero di dimensioni esatte. Il Signore paragonò questi due tipi di porte e sentieri alla saggezza e all'ignoranza. Il sentiero della saggezza è molto stretto e l'ingresso è di dimensioni limitate, il che rende difficile percorrerlo. Il sentiero dell'ignorante è 108 volte più ampio ed è libero da ostacoli. Il sentiero della saggezza è stretto e presenta ostacoli, ma la sua destinazione è Paramatma. Anche se non ci sono ostacoli sull’ampia porta e sull’ampio sentiero dell’ignoranza, essi conducono a Satana. Il sentiero del Paramatma è senza nascita e morte, senza distruzione ed è sempre in uno stato di immutabilità. Il percorso di Satana prevede nascita, morte e distruzione ed è sempre in uno stato di cambiamento. Sebbene la via del Paramatma sia di gran lunga superiore e la via di Satana sia la peggiore, la maggior parte delle persone sceglie di camminare sulla strada di Satana. Quando una persona entra nel cammino di Satana, tutti i suoi compagni la sostengono e non causano alcun problema. Non ci saranno difficoltà finanziarie e la vita si sentirà a proprio agio. Tuttavia, quando una persona sceglie la via della saggezza, i suoi parenti e coniugi possono diventare nemici e ostacolare il suo viaggio. La vita può diventare impegnativa. Quindi, pochissimi, se non nessuno, tra milioni scelgono il sentiero della saggezza.

  Molte persone stanno percorrendo il sentiero vasto e ignorante, che non presenta ostacoli o opposizioni. Sorprendentemente, rimangono ignari dell'esistenza di uno stretto passaggio che conduce a moksham e al Padre della paraloka. Nella Bhagavad-Gita, Krishna afferma che nemmeno uno tra migliaia desidera percorrere il sentiero stretto. Raramente qualcuno vi entra, e ancora più raro arriva a destinazione a causa degli ostacoli posti da Maya. Krishna, nella Bhagavad-Gita, sottolinea ulteriormente che la persona che supera questi ostacoli e raggiunge la destinazione è considerata "il benedetto" e tale individuo si unirà all'eterno Paramatma. Sia Krishna che Gesù rappresentano il Paramatma. Krishna ha chiarito i sentieri della saggezza e dell'ignoranza nella Bhagavad-Gita verso la fine del Dvapara Yuga, mentre Gesù ha trasmesso un messaggio simile nel testo sacro, tremila anni dopo l'inizio del Kali Yuga. Coloro che comprendono i sentieri della saggezza e dell'ignoranza spiegati da Sri Krishna e Gesù Cristo dovrebbero intraprendere il sentiero suggerito della saggezza, perseverando nonostante tutti gli ostacoli, finché alla fine raggiungono Paramatma, che è l'eterno moksham.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 18,
verse: ` <b>17) Il Vangelo di Matteo, capitolo 7, versetti 7 e 8.</b>
`,
meaning: `
<b>
(7:7) Chiedete e vi sarà dato; cerca e troverai; bussa e la porta ti sarà aperta.<br><br>
(7:8) Poiché chiunque chiede riceve; chi cerca trova; e a chi bussa sarà aperto.
</b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In questo verso, tre verbi essenziali:<strong>chiedere, cercare e bussare</strong>. Ges&ugrave; ci ha insegnato a compiere queste tre cose in un contesto spirituale. Gli insegnamenti del Signore non ruotano attorno a questioni mondane, a differenza di molti altri. Sfortunatamente molti hanno frainteso questo versetto, interpretandolo come un appello a benedizioni materiali. Di conseguenza, le persone iniziarono a richiedere favori terreni al Signore, contrariamente al Suo messaggio originale. Anche se le persone leggono la Sacra Bibbia, Satana &egrave; entrato nei loro cuori, offuscando la loro comprensione degli insegnamenti di Ges&ugrave; e portandoli a ricercare desideri materiali. L&rsquo;intento dell&rsquo;uomo non &egrave; quello di trasgredire la parola di Dio, ma Satana sfrutta la loro mancanza di comprensione, inducendoli a pensare che non stanno violando i comandamenti divini. In realt&agrave;, questo li porta a trasgredire la parola di Dio. Satana, una creazione di Dio, esiste ovunque si avverta la presenza di Dio. Ovunque dimora la parola di Dio, pu&ograve; essere presente anche l&rsquo;influenza di Satana. Pertanto, &egrave; fondamentale comprendere diligentemente i versetti di Dio e salvaguardarci dall&rsquo;influenza di Satana quando interpretiamo le Scritture.

  Dovremmo chiedere a Dio, cercare Dio e bussare alla Sua porta. Questa &egrave; la via di Dio. Se chiedi qualcos'altro o cerchi qualcos'altro, sar&agrave; la via di Satana (Maya). Coloro che seguono il cammino di Dio cercano la saggezza di Dio. Potresti avere molte domande: come sta Dio? Come possiamo raggiungere Dio? Come possiamo comprendere tutti i dettagli su Dio? Non dare per scontato che nessuno sulla Terra possa rispondere a queste domande. Dio viene e fornisce le risposte che cerchi quando gli esseri umani sulla Terra non sono in grado di accedere alle informazioni di Dio a causa dell&rsquo;influenza di Satana. Puoi trovare le risposte alle tue domande, ma potresti non riconoscere chi fornisce queste risposte. Anche quando Dio nasce sulla Terra e offre risposte, spesso Lo percepiamo come un normale essere umano piuttosto che come Dio. Se lo chiedi, otterrai la saggezza completa. Se cerchi, scoprirai che Dio &egrave; venuto sulla Terra in forma umana. Quando Dio si incarna sulla Terra, non afferma di essere Dio e non si rivela a nessuno. Questa &egrave; la Sua regola. Secondo questa regola chi non cerca non trover&agrave;, ma i cercatori lo riconosceranno. Poich&eacute; solo pochi chiedevano saggezza quando il Signore Ges&ugrave; era sulla Terra, Egli condivise con loro la Sua saggezza. Poich&eacute; c&rsquo;erano cos&igrave; pochi cercatori, Egli non apparve come Dio a nessuno; a tutti sembrava un uomo comune. Anche i suoi dodici discepoli Lo percepivano come un predicatore e non erano consapevoli che Paramatma, che abbracciava l&rsquo;intero universo, si era incarnato come Ges&ugrave;. Si comport&ograve; intenzionalmente in un modo tale da impedire a chiunque di riconoscerlo come Dio.

  Il re di Paraloka, Paramatma, lav&ograve; i piedi dei Suoi discepoli durante il Suo tempo sulla Terra come uomo. Questo atto umile rese difficile per i Suoi discepoli e per gli altri riconoscerlo. Purtroppo, le persone non Lo identificarono come il Signore e Lo trattarono in modo irrispettoso, considerandolo un uomo comune. Sopport&ograve; gli sputi in faccia, una corona di spine sul capo, le percosse e la crocifissione. Anche quando Ges&ugrave; mor&igrave; e risuscit&ograve; con lo stesso corpo il terzo giorno, alcuni dei suoi discepoli lo scambiarono per un diavolo. Ci&ograve; evidenzia che i Suoi discepoli erano curiosi ma non cercavano veramente.

  Come dice il proverbio<strong>, "vedere &egrave; pi&ugrave; grande che ascoltare", </strong>coloro che Lo hanno testimoniato di persona avevano uno status pi&ugrave; elevato rispetto a coloro che avevano semplicemente ascoltato i Suoi insegnamenti. Anche se le persone avevano l&rsquo;opportunit&agrave; di vedere il Dio del mondo intero nella forma di Ges&ugrave;, era come se non Lo avessero visto veramente. In questo contesto, il Signore descrisse i Suoi discepoli come ciechi, nonostante avessero la vista fisica. Per evitare tale cecit&agrave;, si dovrebbe cercare attivamente Dio. Come suggerisce il versetto, chiunque chiede riceve e chiunque cerca trova. Pertanto, chi chiede riceve le parole di Dio, chi cerca ottiene la forma di Dio. Chi vede &egrave; pi&ugrave; grande di chi ascolta e chi sperimenta &egrave; pi&ugrave; grande di chi vede. In base a questo principio, chi bussa accede al regno del moksham. Bussare, in questo contesto, non significa bussare alla porta di un vicino o di uno sconosciuto, ma piuttosto cercare di entrare nel regno di moksham e nelle porte del regno di Paraloka. Coloro che cercano moksham si uniscono al Paramatma e sperimentano la Sua vera essenza. Coloro che sono abituati a chiedere e a cercare dovrebbero assolutamente cercare di unirsi a Dio. Ci&ograve; significa che diventeranno sicuramente un battente. Attraverso i processi di chiedere, cercare e bussare, chiunque pu&ograve; entrare in unione con Dio. Pertanto, queste tre qualit&agrave; essenziali dovrebbero essere coltivate da ogni individuo, come sottolineato nel versetto summenzionato. Seguendo la guida di Dio, chi chiede acquisisce saggezza, chi cerca trova Bhagavan e chi bussa ottiene l&rsquo;accesso alla casa di moksham.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 19,
verse: `<b>18) Il Vangelo di Matteo, capitolo 7, versetto 15.</b>`,
meaning: ` <b>
(7:15) Attenzione ai falsi profeti. Vengono da te travestiti da pecore, ma interiormente sono lupi feroci.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Gli esseri umani hanno bisogno di una guida per trovare la strada verso Dio, e questa guida spesso proviene da altri. Per camminare sulla via di Dio, una persona deve riporre la propria fiducia in un&rsquo;altra. Coloro che seguono questo percorso spirituale fanno affidamento sulle loro guide per mostrare loro la strada. Il viaggio del seguace dipende dalla guida, poich&eacute; deve seguire il percorso che la guida illumina. Ci&ograve; rende il seguace dipendente dalla guida e, se la guida fornisce la direzione corretta, il seguace progredir&agrave; correttamente. Al contrario, se la guida offre la direzione sbagliata, il seguace potrebbe allontanarsi dal percorso. La destinazione finale di una persona comune &egrave; fortemente influenzata dalla guida o dal guru scelto. Una volta che una persona viene riconosciuta come guru, gli individui tendono a credere e ad fidarsi della sua guida per tutta la vita. Pertanto, &egrave; necessario prestare molta attenzione quando si seleziona qualcuno come guru o guida. Nel versetto menzionato sopra, il Signore avverte: <strong>&ldquo;Attenzione ai falsi profeti&rdquo;. </strong>Ha avvertito che alcuni guru contemporanei potrebbero non essere delle vere guide. Possono presentarsi travestiti da pecore, fingendo di essere veri guru, ma in realt&agrave; sono come lupi feroci sotto mentite spoglie. Secondo gli insegnamenti di Ges&ugrave;, molti individui possono vestirsi e agire come guru, anche usando parole come Dio, saggezza e Atma nei loro discorsi. Tuttavia, la loro vera natura potrebbe non avvicinarti a Dio. Proprio come un lupo nascosto sotto la pelle di una pecora non &egrave; una pecora, questi individui, nonostante il loro aspetto, non sono veri guru. Pertanto, il consiglio del Signore &egrave; di essere vigili e cauti nei confronti dei falsi profeti per evitare di sprecare la propria vita seguendo coloro che non offrono la vera guida.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 20,
verse: `<b>19) Il Vangelo di Matteo, capitolo 7, versetto 21.</b>`,
meaning: ` <b>
(7:21) Non tutti quelli che mi dicono: ‘Signore, Signore’, entreranno nel regno di paraloka, ma solo colui che fa la volontà del Padre mio che è in paraloka. </b>
`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il Signore Gesù emanò dal Paramatma. Gesù è Bhagavan incarnato in forma umana, mentre Paramatma, il Padre di Paraloka, è Dio in uno stato senza forma, onnipresente in tutto l'universo. Quando Bhagavan, incarnato come Gesù, camminava sulla Terra, alcuni riconobbero la Sua magnificenza divina e Lo venerarono per i loro desideri materiali. Si rivolgevano a Lui chiamandolo “Signore, Signore”, cercando guadagni personali. Tuttavia, avvicinarsi alla forma visibile del Signore e chiamarlo grande senza raggiungere la saggezza divina non è sufficiente. Sebbene quello in forma visibile e quello in forma invisibile siano la stessa cosa, ci sono limitazioni intrinseche alla forma visibile, mentre il Padre invisibile di Paraloka è illimitato. Lo sconfinato Paramatma assume occasionalmente una forma tangibile per impartire i Suoi insegnamenti divini all'umanità. Gesù è la forma scelta dal Paramatma per questo scopo. Mentre il Signore si presentava a noi come Gesù, il Padre di Paraloka parlava attraverso le parole di Gesù. Dio si è incarnato come Gesù per proclamare i Suoi dharma.

  Chiamare semplicemente Gesù “Signore” senza mettere in pratica la saggezza di Dio e allinearsi con la volontà del Padre di Paraloka non porta alcun beneficio reale. Colui che pratica attivamente la saggezza di Dio è più elevato di colui che si limita a pronunciare il nome del Signore. Colui che si attiene alle parole di Dio è più importante di colui che si limita a salutarLo. Una persona che vive in conformità con i comandamenti di Dio segue veramente la volontà di Dio, e tali individui sono destinati a Paraloka (moksham). Dio non cerca l'adulazione e non cede ad essa; piuttosto, Dio si compiace di coloro che abbracciano e applicano la Sua saggezza. Pertanto, è più significativo mettere in pratica gli insegnamenti di Dio piuttosto che limitarsi a offrire lodi. Dio possiede una comprensione dei pensieri e delle intenzioni di tutti gli esseri e può distinguere tra coloro che comprendono veramente e vivono secondo la Sua saggezza e coloro che non lo fanno. Coloro che comprendono e vivono secondo la saggezza di Dio hanno per Lui un’importanza speciale. Coloro che fraintendono o trascurano la saggezza e non agiscono in conformità con Dio non possono ottenere moksham.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 21,
verse: ` <b>20)  Il Vangelo di Matteo, capitolo 7, versetti 22 e 23. </b>`,
meaning: ` <b>
(7:22) Molti mi diranno in quel giorno: ‘Signore, Signore, non abbiamo noi profetizzato in nome tuo e in nome tuo scacciato demoni e, in nome tuo, compiuto molti miracoli?
<br><br>
(7:23) Allora dirò loro chiaramente: ‘Non vi ho mai conosciuti. Lontano da me, malfattori!»</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Alcune persone che riconoscono la grandezza del Signore (Ges&ugrave;) potrebbero trascurare Paramatma, il sovrano di paraloka, e concentrarsi esclusivamente sulla lode di Ges&ugrave;. Paramatma, il Padre del mondo intero, ha inviato una parte di Se stesso come Ges&ugrave;. Ges&ugrave; possiede tanto potere quanto Paramatma. Lodare il Signore Ges&ugrave; &egrave; come lodare il Padre, Paramatma. Molte persone offrono la loro lode al Signore, ma c'&egrave; chi lo fa. per motivi egoistici, mentre altri sono altruisti nella loro devozione a Dio. Il Padre di paraloka trasmise il suo messaggio attraverso Ges&ugrave;, che invi&ograve;, in numerose occasioni. Molti hanno familiarit&agrave; con le parole del Padre Supremo ma non comprendono la Sua vera natura. Si potrebbe affermare che nemmeno uno su milioni di persone che leggono le parole del Padre, ascoltano e offrono la loro lode, comprende veramente la vera essenza del Padre. Il Signore proclam&ograve; i comandamenti, la saggezza e i versetti di Dio. Il Signore visibile (Ges&ugrave;) funge da simbolo del Dio invisibile ed &egrave; l'immagine e il rappresentante di Dio. Coloro che non riescono a cogliere la saggezza e i comandamenti contenuti nei versetti non possono trarre pieno beneficio dalla lode del Signore.

  L&rsquo;umanit&agrave; pu&ograve; trarre solo qualche profitto dal lodare il Signore come supremo. &Egrave; imperativo riconoscere che il beneficio finale per una persona &egrave; raggiungere paraloka. Il risultato pi&ugrave; significativo che si pu&ograve; raggiungere &egrave; la paraloka. &Egrave; fondamentale comprendere che l&rsquo;obiettivo finale di chiunque &egrave; liberarsi dal mondo di Satana (Maya) ed entrare nel regno di Dio. Il guadagno finale e pi&ugrave; significativo per l&rsquo;umanit&agrave; &egrave; unirsi alla paraloka di Dio senza mai ritornare in questo mondo dove risiede Satana. Non c'&egrave; niente di pi&ugrave; prezioso per una persona che ottenere l'accesso alla paraloka. Per ottenere benefici cos&igrave; enormi ed evitare di rimanere invischiati con Satana, &egrave; necessario comprendere appieno la saggezza di Dio. Coloro che non approfondiscono la profonda saggezza contenuta nei versetti di Ges&ugrave; e nei Suoi comandamenti saranno solo devoti parziali piuttosto che credenti completi. Beato &egrave; colui che segue tutti gli insegnamenti del Signore senza oltrepassare i limiti dei Suoi comandamenti. Anche coloro che potrebbero non comprendere appieno la saggezza del Paramatma non sono credenti completi, nonostante siano grandi predicatori e ferventi lodatori del Signore. Questo non &egrave; per respingere tali individui, ma per sottolineare che hanno fede in Dio senza essere dei credenti completi. Il dubbio risiede in ogni persona finch&eacute; non comprende completamente la saggezza di Dio, anche se potrebbe non essere evidente ora. I grandi predicatori che credono di essere devoti sinceri del Signore possono ancora nutrire dubbi finch&eacute; non acquisiscono una comprensione approfondita della saggezza di Dio. Pertanto, il Signore ha proclamato: <strong>&ldquo;Chi ripone fiducia in me con il suo manas &egrave; superiore a chi mi adula&rdquo;. </strong>La fede completa richiede la piena saggezza di Dio.

  Si pu&ograve; dire che coloro che non capiscono che Ges&ugrave; e Dio sono uno e coloro che credono che Ges&ugrave; ritorner&agrave; come Ges&ugrave; non comprendono la vastit&agrave; di Dio. Chi non si rende conto che Dio &egrave; eterno, senza inizio n&eacute; fine, che Dio &egrave; disceso sulla Terra molte volte e che verr&agrave; ogni volta che sar&agrave; necessario, manca di completa saggezza. Coloro che possiedono una saggezza perfetta possono discernere l&rsquo;arrivo di Dio, mentre coloro che non hanno una saggezza assoluta non possono riconoscere la Sua venuta. Anche quando Dio ha assunto forma umana e si &egrave; presentato davanti a una persona, colui che vede solo il Suo aspetto esteriore e le Sue azioni potrebbe non riuscire a riconoscere Dio. Quando il Signore viene in incognito, alcuni cristiani potrebbero non riconoscerlo e non essere consapevoli della sua presenza, al punto da tentare di battezzarlo.

  Sulla Terra, i credenti sono migliori dei non credenti, e i credenti assoluti superano i credenti comuni. Solo i credenti assoluti possono entrare nella paraloka. Dio non li accetta finch&eacute; non diventano credenti assoluti. Quando entri in paraloka, Dio riconosce solo gli gnani assoluti. Se qualcuno non &egrave; un gnani assoluto, Dio dir&agrave;: &ldquo;Non lo conosco&rdquo;. Quindi, bisogna sforzarsi di raggiungere la saggezza assoluta. Molti aspirano ad avvicinarsi Dio ed entrare nel suo regno. Tuttavia, poich&eacute; sono sotto il dominio di Satana (Maya), Satana fa tutto il possibile per impedire loro di raggiungere Dio e di diventare gnanis completi. Persino i predicatori consapevoli dell&rsquo;opposizione di Satana a Dio potrebbero non comprendere appieno la portata dell&rsquo;influenza di Satana. Coloro che non hanno una comprensione globale delle attivit&agrave; di Satana potrebbero inavvertitamente seguire il percorso di Satana credendo di essere sulla strada che conduce a Dio. Questo &egrave; il motivo per cui Dio ha affermato che i predicatori che presumono di essere vicini a Dio potrebbero comunque non riuscire a entrare alla Sua presenza.

  Nel versetto, Ges&ugrave; disse: <strong>&ldquo;Anche se in nome mio scacciate demoni, fate miracoli e in nome mio guarite infermi, voi siete malfattori. Allontanati da me.</strong>

  Nella societ&agrave; odierna, le persone spesso considerano coloro che compiono miracoli nel nome di Dio come veri devoti, credendo che siano vicini al Signore. Anche coloro che operano essi stessi miracoli possono pensare di essere in stretta comunione con il Signore. Questa percezione nasce perch&eacute; vedono la gloria del Signore manifestata attraverso le loro azioni. Quando impongono le mani su un paziente mentre recita le parole di Dio, e il paziente sperimenta la guarigione, attribuiscono ci&ograve; ai miracoli del Signore che avvengono attraverso di lui. Anche se &egrave; vero che i miracoli possono effettivamente accadere, rendendo nota a tutti la presenza del Signore, essi trascurano il motivo per cui il Signore espresse disappunto per tali azioni, come menzionato nel versetto precedente. Cos&igrave; facendo, dimenticano le parole del Signore. Sorge la domanda: perch&eacute; il Signore li rimproverava se ci&ograve; che stavano facendo sembrava essere buono e una manifestazione dei miracoli del Signore? Perch&eacute; Ges&ugrave; afferm&ograve; che stavano camminando su una strada malvagia? Se il Signore lo ha detto, &egrave; senza dubbio vero.

  L&rsquo;incredibile verit&agrave; diventa evidente quando contempli il significato della verit&agrave; negli insegnamenti del Signore. &Egrave; un grave errore non discernere se i miracoli compiuti nel nome del Signore provengono da Dio o da Satana. Molti di coloro che agli occhi della gente appaiono come predicatori e guru credono di essere sulla via di Dio ma, in realt&agrave;, sono sulla via di Maya. Questa realizzazione pu&ograve; essere piuttosto angosciante. &Egrave; possibile che molti predicatori si arrabbino con le mie parole, ma per favore ricorda che queste non sono le mie parole; sono le parole di Dio. Come affermato nel Vangelo di Matteo 7:22, il Signore disse: <strong>&ldquo;Questo &egrave; malvagio. Non ti ho mai conosciuto." </strong>Dovremmo riconoscere che la stessa Maya (Satana) che tent&ograve; il Signore in passato sta ancora tentando di ingannarci oggi. Anche comprendere Maya (Satana) &egrave; una parte essenziale della saggezza divina. Senza riconoscere Maya, potremmo erroneamente seguire Satana, che assume le sembianze di Dio, invece di seguire Dio. Oggi molti oratori, guru e predicatori commettono lo stesso errore. Satana (Maya), che pu&ograve; assumere molte forme, compie trucchi e miracoli in nome di Dio. Chi non sa che questo non piace a Dio non pu&ograve; progredire. La verit&agrave; triste &egrave; che molte persone sulla Terra seguono ciecamente Satana, credendo che sia Dio. Sono ignari del fatto che stanno seguendo la via di Satana, non quella di Dio. Potrebbe sembrare quasi impossibile per loro liberarsi dall&rsquo;influenza di Satana. Anche se Dio stesso dovesse trasmettere questa verit&agrave;, potrebbero criticarlo ma rimanere immutati. Per loro Maya appare come Dio e Dio appare come un semplice essere umano.

  Coloro che aspirano ad entrare nel Regno di Dio e hanno fede in Dio dovrebbero riflettere sul versetto menzionato in precedenza e contemplare il motivo per cui Dio disapprovava e si riferiva a coloro che compiono miracoli come malfattori. Considera chi &egrave; favorito da Dio e chi non lo &egrave;. &Egrave; essenziale familiarizzare con i versetti, la saggezza e i comandamenti di Dio. Dovresti abbracciare pienamente la saggezza di Dio senza trasgredire i Suoi comandamenti, riconoscendoli come i confini stabiliti intorno a te. Tieni presente che il regno di Dio &egrave; all&rsquo;interno di questi confini, mentre il dominio di Satana si trova all&rsquo;esterno. Rimani vigile di fronte all&rsquo;influenza di Satana, ricordando i confini delineati da Ges&ugrave; nelle sue Sacre Scritture per tutta l&rsquo;umanit&agrave;.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 22,
verse: ` <b> 21) Il Vangelo di Matteo, capitolo 8, versetto 22. </b>`,
meaning: ` <b>
(8:22) Gesù gli disse: “Seguimi, e lascia che i morti seppelliscano i loro morti”.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il versetto menzionato sopra fu la risposta di Gesù quando uno dei suoi discepoli gli disse: “Signore, lasciami prima andare a seppellire mio padre”. Le parole di Gesù potrebbero sembrare poco chiare ad alcuni, suscitando domande sul loro significato. Se consideriamo questo, possiamo classificare l’umanità in due categorie: coloro che possiedono la saggezza e la praticano come yogam otterranno la vita eterna (moksham). Queste persone sono molto poche. Coloro che hanno diritto alla vita eterna non saranno annoverati tra i morti. Coloro che raggiungono la vita eterna non sperimenteranno mai veramente la morte e si può dire che abbiano raggiunto moksham. D’altra parte, coloro che sono ignoranti o non si impegnano nella pratica dello yogam possono essere considerati spiritualmente morti. Tali individui non possiedono la vita eterna e alla fine affronteranno la morte. Si può dire che sono destinati a sperimentare la morte ad un certo punto. Gli ignoranti vengono spesso sepolti da altri individui ignoranti. Pertanto, l’affermazione di Gesù: “Lascia che i morti seppelliscano i morti”, trasmette l’idea che coloro che mancano di saggezza vengono definiti spiritualmente morti. Sottolinea che coloro che possiedono la saggezza non dovrebbero associarsi agli ignoranti. Pertanto, Gesù disse al discepolo: “Comprendi la saggezza e seguimi. Lasciamo che gli ignoranti seppelliscano gli ignoranti”.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 23,
verse: ` <b>22) Il Vangelo di Matteo, capitolo 9, versetti 12 e 13.</b>`,
meaning: ` <b>
(9:12) Udendo ciò, Gesù disse: “Non sono i sani che hanno bisogno del medico, ma i malati”.
<br><br>
(9:13) Poiché non sono venuto a chiamare i giusti, ma i peccatori.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Come abbiamo discusso in precedenza, Dio di tanto in tanto discende sulla Terra per stabilire i dharma. Allo stesso modo, Gesù affermò di essere venuto per guidare gli ignoranti sulla via della saggezza. Ha detto che è venuto per chiamare i peccatori, non i giusti. Qui i “peccatori” rappresentano coloro che sono ignoranti e privi di saggezza, mentre i “giusti” denotano coloro che possiedono saggezza. Dio assume il ruolo di medico spirituale, spesso definito predicatore, per guarire coloro che sono afflitti dalla malattia dell’ignoranza. Attraverso la medicina della saggezza, guarisce i malati spiritualmente. Coloro che sono già spiritualmente sani e dotati di saggezza non necessitano della guida di un tale medico o predicatore. Quando la malattia dell’ignoranza si diffonde a livello globale, colpendo tutte le persone, Dio si incarna per fornire la Sua medicina divina dei dharma e trasformare gli ignoranti in gnani (individui saggi). Se Dio non assumesse questo ruolo di medico spirituale, il mondo intero sarebbe afflitto dall’ignoranza. Pertanto, Dio si incarna per rivelare la Sua saggezza a chi è nel bisogno.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 24,
verse: ` <b>23) Vangelo di Matteo, capitolo 8, versetti 23, 24, 25 e 26. </b>`,
meaning: `<b>
(8:23) Poi salì sulla barca e i suoi discepoli lo seguirono.
<br><br>
(8:24) All'improvviso si scatenò sul lago una tempesta furiosa, tanto che le onde travolsero la barca. Ma Gesù stava dormendo.
<br><br>
(8:25) I discepoli andarono e lo svegliarono, dicendo: “Signore, salvaci! Stiamo per annegare!”
<br><br>
(8:26) Egli rispose: “Uomo di poca fede, perché hai tanta paura?” Allora si alzò, sgridò i venti e le onde e tutto fu calmo.  </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Questo evento &egrave; un episodio significativo della vita di Ges&ugrave;. Anche se Ges&ugrave; potrebbe non aver impartito direttamente una lezione qui, c&rsquo;&egrave; molto che possiamo imparare da questo evento. Sia il mare che la tempesta sono collegati a Prakruti. L'aria nella tempesta e l'acqua nel mare sono componenti integrali di Prakruti. Prakruti &egrave; sotto il controllo esclusivo di Paramatma, l'entit&agrave; divina suprema. Prakruti &egrave; composta da cinque elementi: Cielo, Aria, Fuoco, Acqua e Terra. Perfino Atma, che possiede la divinit&agrave; seguendo Paramatma, non ha alcuna autorit&agrave; su Prakruti. L'Atma all'interno del corpo governa solo la Chara (mutevole) Prakruti, che esiste nella forma del corpo. Non esercita alcuna autorit&agrave; sulla Prakruti Achara (immutabile). Prakruti non presta ascolto all'Atma; obbedisce esclusivamente al comando del Paramatma. Prakruti &egrave; composta da cinque bhoota, che possono essere intesi come forze vitali o Jeeva. Questi cinque Jeeva rappresentano i cinque elementi di Prakruti e, come tali, aderiscono alla parola divina di Dio. Seguono le istruzioni del Paramatma.

  Poich&eacute; Ges&ugrave; era lo Spirito Santo apparso come un uomo comune, la tempesta nel mare cess&ograve; al Suo comando. Solo Dio pu&ograve; controllare Prakruti, quindi Ges&ugrave; pu&ograve; essere considerato l&rsquo;incarnazione di Dio. &Egrave; menzionato nei versi 7, 8 e 9 dello Gnana Yoga nella Bhagavad-Gita, la prima scrittura divina, che Dio discende sulla Terra in forma umana per impartire la Sua saggezza. Quando Dio assume una forma umana, assomiglia esteriormente a un uomo comune, anche se non &egrave; un individuo comune. Poich&eacute; appare come un uomo comune, identificarlo &egrave; una sfida. Tuttavia, ci sono due indicatori chiave per riconoscerlo: <strong>1) La presenza dell'incarnazione di Dio ovunque vengano insegnati i dharma divini. 2) La capacit&agrave; di comandare Prakruti pu&ograve; essere riconosciuta come l'incarnazione di Dio. </strong>Il calmarsi del mare al comando di Ges&ugrave; &egrave; una manifestazione di questo potere divino, a dimostrazione che solo Dio pu&ograve; compiere tali imprese. Quando vengono insegnati i dharma e viene comandata la Prakruti, la forma umana di Dio diventa riconoscibile. Ges&ugrave; non solo insegn&ograve; la saggezza di Dio, ma la pratic&ograve; anche e comand&ograve; Prakruti. Pertanto, Ges&ugrave; pu&ograve; essere identificato come Dio in forma umana. L&rsquo;immediata cessazione della tempesta sul mare serv&igrave; come prova della divinit&agrave; di Ges&ugrave;.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 25,
verse: ` <b>24) Il Vangelo di Matteo, capitolo 9, versetto 6.</b>`,
meaning: `<b>
(9:6) Voglio che sappiate che il Figlio dell'Uomo ha l'autorità sulla terra di perdonare i peccati. Allora disse al paralitico: “Alzati, prendi il tuo lettuccio e vattene a casa”. Poi l'uomo si alzò e tornò a casa.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Gesù stesso ha detto che il Figlio dell'Uomo ha il potere sulla Terra di perdonare i peccati. Quando un uomo paralitico fu portato da Gesù, Egli gli disse: “I tuoi peccati ti sono perdonati”. Alcuni scribi dicevano tra loro che Gesù bestemmiava. Conoscendo i loro pensieri, Gesù disse: “Perché avete pensieri malvagi nei vostri cuori? Che cosa è più facile: dire: “Ti sono perdonati i peccati”, oppure dire: “Alzati e cammina?”. Ma voglio che sappiate che il Figlio dell’uomo ha il potere di perdonare i peccati». Allora disse al paralitico: “Alzati, prendi il tuo lettuccio e vattene a casa”. Poi l'uomo si alzò e tornò a casa.

  Se osserviamo questo, Gesù perdonò i peccati perché gli scribi pensavano male di lui. Ha anche dichiarato che il Figlio dell'Uomo ha l'autorità sulla Terra di perdonare i peccati. Nonostante sia venuto sulla Terra come Figlio di Dio, Egli umiliò Se stesso identificandosi come Figlio dell’Uomo. Ha detto e dimostrato che solo Lui possiede l'autorità di perdonare i peccati. Coloro che comprendono che solo Dio (Lo Spirito Santo) può perdonare i peccati riconosceranno chi è veramente Gesù. Affermando di essere il Figlio dell'Uomo, Gesù ha deliberatamente oscurato la Sua divinità, anche se proveniva dallo Spirito Santo. L'uomo paralitico si alzò immediatamente e tornò a casa quando Gesù gli ordinò di farlo. La folla rimase stupita dopo aver assistito a questo miracolo. Nonostante avesse compiuto un atto così straordinario, Gesù fu trattato come un uomo comune e portato in tribunale come se fosse colpevole. Ciò illustra come gli esseri umani spesso dimenticano l’aiuto che ricevono.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 26,
verse: ` <b>25) Il Vangelo di Matteo, capitolo 10, versetto 20.</b>`,
meaning: `<b>
(10:20) Poiché non sarai tu a parlare, ma sarà lo Spirito del Padre tuo a parlare attraverso di te. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Sebbene questo versetto possa sembrare ordinario, racchiude una profonda saggezza spirituale. &Egrave; essenziale capire che il termine <strong>"Tuo padre" </strong>in questo verso non si riferisce al proprio padre biologico ma al Padre spirituale di Jeevatma. Atma, il Padre di Jeevatma, risiede nel corpo e lo guida. &Egrave; fondamentale ricordare che il Padre dell&rsquo;Atma &egrave; Paramatma. Ogni essere umano rappresenta Jeevatma. A seconda del karma di una persona, l&rsquo;Atma la influenza e la guida (Jeevatma), facendole sperimentare il karma (peccati e punya karma). L'Atma controlla tutte le funzioni corporee e determina il piacere e il dolore sperimentati da Jeevatma all'interno del corpo.

  Jeevatma non si impegna attivamente in alcuna funzione corporea. Nonostante la sua apparente inazione, Jeeva sperimenta silenziosamente le conseguenze delle sue azioni, sia gioia che dolore. Sebbene Jeevatma si identifichi come l'individuo all'interno del corpo, gli manca la capacit&agrave; di agire. Invece &egrave; l&rsquo;Atma che orchestra tutte le attivit&agrave; all&rsquo;interno del corpo. A causa dell'ignoranza, Jeevatma crede erroneamente di essere lui a compiere azioni ascoltando le parole di "aham" (l'ego). In realt&agrave;, l'Atma &egrave; il vero attore all'interno del corpo, ma Jeevatma spesso dimentica la presenza dell'Atma e crede di essere l'autore di tutto. Nel contesto del versetto, Ges&ugrave; mirava a illuminare coloro che erano nell'ignoranza. Ha trasmesso<strong>, &ldquo;Tuo padre, Atma, risiede dentro di te e comunica attraverso di te.&nbsp;</strong><strong>Non sei tu a parlare.</strong>"Secondo questo verso, &egrave; evidente che non solo le azioni compiute ma anche le parole pronunciate non sono articolate da Jeevatma. Ges&ugrave; afferm&ograve; che &egrave; pura ignoranza credere di parlare, mentre &egrave; Atma ad articolare le parole. Jeevatma non compie le azioni eseguite dalle dieci parti del corpo fisico (organi d'azione); &egrave; l'Atma che realizza ogni cosa attraverso queste parti del corpo. Riconoscere questa verit&agrave; rappresenta la pi&ugrave; alta forma di saggezza tra tutte le saggezze.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 27,
verse: ` <b>26) Vangelo di Matteo, capitolo 10, versetto 30.</b>`,
meaning: ` <b>
(10:30) Anche gli stessi capelli del tuo capo sono tutti contati.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In un tempio, le persone spesso condividono i propri pensieri con Dio, credendo che Dio non sia a conoscenza dei loro sentimenti pi&ugrave; intimi. Mostrano rispetto e soggezione quando sono nel tempio, ma possono comportarsi diversamente fuori. Ad esempio, dopo aver lasciato il tempio, alcune persone potrebbero occupare due posti sul treno senza permettere agli altri passeggeri di sedersi, mostrando un comportamento sconsiderato. Questa azione nasce dall'idea sbagliata che Dio sia consapevole delle loro azioni all'interno del tempio ma non all'esterno. Tuttavia, cosa <strong>molti non riescono a rendersi conto che Dio &egrave; onnisciente e onnipresente, percependo tutte le azioni, anche nei luoghi pi&ugrave; appartati. </strong>Questo versetto pronunciato da Ges&ugrave; evidenzia la gloria di Dio e serve a ricordare che la consapevolezza di Dio si estende ovunque.

  Il versetto evidenzia la straordinaria attenzione di Dio nei confronti degli esseri umani, poich&eacute; Dio ha stabilito un sistema preciso per tutti gli aspetti dell&rsquo;esistenza umana. Questo sistema divino comprende anche i dettagli pi&ugrave; minuti, come il &ldquo;karma-visarga&rdquo;, la divisione del karma in piccole parti. Attraverso il karma-visarga, Dio determina quante volte una persona dovrebbe aprire e chiudere le palpebre, garantendo un conteggio preciso. Dio detta anche il numero dei capelli sulla nostra testa e quando e quali capelli dovrebbero cadere, tutto attraverso il karma-visarga. Inoltre, Dio orchestra le sfide che gli individui affrontano e la portata della loro sofferenza. Nella Bhagavad-Gita, il Signore afferma che Dio possiede la conoscenza di tutto ci&ograve; che &egrave; accaduto, sta accadendo e accadr&agrave; sulla Terra. Ci&ograve; rafforza l&rsquo;idea che non esiste nulla oltre la consapevolezza di Dio.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 28,
verse: ` <b> 27) Il Vangelo di Matteo, capitolo 10, versetti 34, 35 e 36.</b>`,
meaning: `<b>
(10:34) Non credere che io sia venuto a portare la pace sulla terra. Non sono venuto a portare la pace, ma la spada.
<br><br>
(10:35) Poiché sono venuto a mettere “‘l’uomo contro suo padre, la figlia contro di lei”. madre, una nuora contro la suocera.
<br><br>
(10:36) I nemici di un uomo saranno i membri della sua stessa casa.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Anche se potrebbe non essere giusto affermare che Ges&ugrave; mirasse intenzionalmente a creare conflitti tra gli esseri umani, &egrave; evidente che tali conflitti sono sorti. Ges&ugrave; &egrave; venuto con l'intenzione di condurre le persone dall'ignoranza alla saggezza piuttosto che seminare discordia.&nbsp;

  Ha condiviso la sua saggezza con buone intenzioni, ma spesso ha portato a controversie tra coloro chenon comprendeva pienamente i Suoi insegnamenti. Proprio come l&rsquo;acqua fredda spruzzata sulla sabbia la raffredda, mentre i calcari diventano caldi, alterando il loro aspetto e trasformandosi in calce, la ricezione della saggezza di Ges&ugrave; varia. Coloro che hanno una profonda comprensione della saggezza trovano felicit&agrave; negli insegnamenti di Ges&ugrave;, mentre sorgono conflitti tra gli ignoranti. In alcuni casi, quando uno dei coniugi cerca la saggezza, l&rsquo;altro potrebbe non essere d&rsquo;accordo, portando a disaccordi all&rsquo;interno delle famiglie. Questa conseguenza inaspettata pu&ograve; portare a divisioni all&rsquo;interno delle famiglie, dove i padri possono rivoltarsi contro i figli, le madri contro le figlie e le suocere contro le nuore. Sebbene le intenzioni di Ges&ugrave; siano nobili, inavvertitamente portano gli esseri umani a dimenticare la loro parentela e a favorire l&rsquo;inimicizia. Ecco perch&eacute; se Ges&ugrave; dona un fiore, questo si trasforma in una spina. Se d&agrave; legno flessibile, diventa una spada robusta. &Egrave; importante notare che questo risultato non &egrave; colpa di Ges&ugrave;, ma piuttosto il risultato della natura umana e dell&rsquo;influenza di diversi guna.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 29,
verse: `<b>28) Il Vangelo di Matteo, capitolo 10, versetto 37.</b>`,
meaning: `<b>
(10:37) Chiunque ama suo padre o sua madre più di me non è degno di me; chiunque ama il proprio figlio o la propria figlia più di me non è degno di me.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  &Egrave; un aspetto fondamentale della natura umana che i genitori amino i propri figli, cos&igrave; come &egrave; naturale che i figli amino i propri genitori. Il legame tra genitori e figli &egrave; spesso caratterizzato da un amore profondo, che supera qualsiasi altro attaccamento al mondo. Tuttavia, la mente umana &egrave; influenzata in modo significativo anche dalle sue qualit&agrave; intrinseche, conosciute come guna. Quando una persona ospita un <strong>amore intenso per la saggezza e Dio</strong>, gravitano naturalmente verso la ricerca della saggezza piuttosto che verso cose materiali o mondane. Diventa difficile dare priorit&agrave; alla saggezza quando il proprio affetto &egrave; diretto principalmente altrove. La mente umana opera sotto l'influenza di sei guna buoni e cattivi, simili rispettivamente a catene fatte d'oro e di ferro. Entrambi i tipi di guna hanno lo scopo di legare un individuo. Tuttavia, &egrave; importante notare che n&eacute; l&rsquo;amore estremo (un buon guna) n&eacute; la gelosia (un cattivo guna) portano una persona verso la saggezza. Ci&ograve; che conta veramente &egrave; il genuino interesse dell&rsquo;individuo per la saggezza. I sei guna cattivi includono l'avidit&agrave; (kaama), la rabbia (krodha), l'avarizia (lobha), la passione (moha), l'arroganza (madam) e la gelosia (matsara). Al contrario, i sei guna buoni comprendono carit&agrave; (dana), misericordia (daya), benevolenza (audarya), distacco (vairagya), umilt&agrave; (vinaya) e amore (prema).
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 30,
verse: `<b> 29) Il Vangelo di Matteo, capitolo 10, versetto 38.</b>`,
meaning: `<b>
(10:38) Chi non prende la sua croce e non mi segue, non è degno di me.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  I cristiani spesso parlano e nutrono una profonda riverenza per la croce. &Egrave; comune vedere i cristiani portare una croce al collo e questo simbolo ha una grande importanza nella loro fede. &Egrave; ampiamente noto che Ges&ugrave; fu crocifisso e mor&igrave; sulla croce. La domanda che sorge spontanea &egrave; perch&eacute; i cristiani tengono in cos&igrave; alta considerazione un simbolo che fu usato come strumento per l&rsquo;esecuzione di Ges&ugrave;. La risposta sta nella natura profonda di seguire qualcuno pi&ugrave; grande di loro ed emulare le sue azioni.&nbsp;

  Tuttavia, no ci si &egrave; chiesti perch&eacute; la croce, simbolo associato alla morte del Signore, dovrebbe essere tenuta in cos&igrave; alta considerazione. In effetti, intenzionalmente o meno, sembra esserci una lacuna nella comprensione dei dettagli della croce. Prendiamoci un momento per contemplare la croce e approfondire i dettagli.

  Nel versetto Ges&ugrave; lo avverte <strong>prendere la croce porta a camminare sulla via di Dio, mentre se la croce ti solleva, significa camminare sulla via di Satana. </strong>Un messaggio simile viene trasmesso quando Ges&ugrave; disse: &ldquo;Chi non prende la croce e non mi segue, non &egrave; degno di me&rdquo;. Ci&ograve; implica che coloro che non portano la croce non sono degni di Dio. &Egrave; importante capire che, secondo questa prospettiva, la croce simboleggia Satana. Per un&rsquo;esplorazione pi&ugrave; dettagliata di questo concetto, ti invitiamo a leggere il mio libro &ldquo;La croce &egrave; Dio?&rdquo;

  La croce rappresenta il serpente nel simbolismo spirituale. &Egrave; comune tracciare paralleli tra il serpente e Satana e la colomba con Atma. Satana, o Maya, risiede nel corpo umano e spesso conduce gli individui lungo il sentiero dell&rsquo;ignoranza. Quando Satana solleva una persona, ci&ograve; indica la debolezza della persona e il dominio di Satana. D&rsquo;altra parte, quando una persona porta la croce, ci&ograve; indica che la sua forza supera quella di Satana. Ecco perch&eacute; Ges&ugrave;, in certi momenti della Sua vita, ha portato la croce per dimostrare che l'umanit&agrave; pu&ograve; vincere Satana. Allo stesso modo, quando Ges&ugrave; fu crocifisso sulla croce, simboleggiava la croce che lo portava, a significare che Satana pu&ograve; attirare chiunque sul suo cammino. Per percorrere il cammino della saggezza, gli esseri umani devono essere disposti a portare la propria croce, come Ges&ugrave; sottoline&ograve; nel versetto: &ldquo;Chi non prende la sua croce e non mi segue, non &egrave; degno di me&rdquo;.

  Simboleggiamo Satana sotto forma di una croce, che rappresenta un colossale serpente o serpente, simile al concetto di Maya. Maya ha il potere di sviare gli individui dal sentiero verso Dio e verso l'ignoranza. Per superare tale influenza, dobbiamo prima comprendere Maya. Dopo l&rsquo;analisi, Maya pu&ograve; essere identificata come l&rsquo;insieme di guna all&rsquo;interno della testa di una persona. Chiunque allinei le proprie azioni con questi guna segue inavvertitamente il percorso dell'ignoranza, consentendo essenzialmente a Maya di controllare il proprio corso. Per conquistare Maya, &egrave; necessario acquisire la padronanza dei guna, rifiutando di lasciarsi influenzare dalla loro influenza. Quando una persona raggiunge questo obiettivo, si pu&ograve; dire che ha sconfitto Maya, o Satana, usando la sua forza interiore. Una persona del genere pu&ograve; accogliere Maya e percorrere il sentiero della saggezza. Pertanto, il messaggio di Ges&ugrave; nel versetto sottolinea che vincendo la &ldquo;croce&rdquo; &ndash; rappresentante di Maya &ndash; si diventa degni della grazia di Dio. &Egrave; importante notare che la &ldquo;croce&rdquo; non &egrave; semplicemente un simbolo di legno ma piuttosto una rappresentazione del pitone, simbolo di Satana. Secondo gli anziani, la croce simboleggia Maya, mentre l'uccello &egrave; un simbolo di Atma. Durante il battesimo di Ges&ugrave; da parte di Giovanni, si disse che lo Spirito (Atma) discese come una colomba ed entr&ograve; nel corpo di Ges&ugrave;. In questo contesto, la &ldquo;croce&rdquo; rappresenta la forza opposta ad Atma. Pertanto, l&rsquo;insegnamento di Ges&ugrave; sottolinea che quando una persona, utilizzando la propria saggezza e forza interiore, porta la &ldquo;croce&rdquo; e percorre il sentiero della saggezza, diventa degna di Dio e paraloka.
</div></div>

</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 31,
verse: `<b>30) Il Vangelo di Matteo, capitolo 10, versetto 40.</b>`,
meaning: ` <b>
(10:40) Chi riceve voi riceve me, e chi riceve me riceve colui che mi ha mandato. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Sebbene gli esseri umani siano Jeevatma, sono creati dall'Atma. Paramatma, o lo Spirito Santo, cre&ograve; sia Atma che Prakruti. Tuttavia, quando Paramatma si incarna come uomo, sorge la domanda se riferirsi a Lui come Atma o Jeevatma. Se Dio assume forma umana, pu&ograve; essere considerato un Jeevatma in base al Suo aspetto. Quando gli esseri umani (Jeevatmas) muoiono, l'Atma li incorpora in s&eacute;. Proprio come l'Atma comprende gli esseri umani, include anche Dio quando si incarna come uomo e appare come un Jeevatma. Questo concetto &egrave; ripreso nel versetto: &ldquo;<strong>Chi riceve voi, riceve anche me&rdquo;. </strong>Colui che si &egrave; incarnato come essere umano (Jeevatma) &egrave;, in realt&agrave;, Dio. Tuttavia, &egrave; Dio che ha mandato l&rsquo;uomo, come Ges&ugrave;. Quando l&rsquo;Atma comprende un uomo che assomiglia a un Jeevatma, &egrave; come se anche Dio, il mittente dell&rsquo;uomo, fosse incluso nell&rsquo;Atma. Quindi, nel versetto, Ges&ugrave; trasmise: <strong>&ldquo;Chi riceve me, riceve colui che mi ha mandato&rdquo;.</strong>
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 32,
verse: `<b>31) Il Vangelo di Matteo, capitolo 11, versetto 9.</b>`,
meaning: `<b>
(11:9) Cosa sei andato a vedere? Un profeta? Sì, te lo dico, e (sono) più che un profeta.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si pu&ograve; dire che un profeta (pravaktha) &egrave; colui che insegna la conoscenza che nessuno ha raccontato. In telugu, <strong>'Pra' </strong>denota importanza e <strong>"Vaktha" </strong>significa colui che parla. Un profeta &egrave; quindi qualcuno che impartisce la saggezza essenziale. Tuttavia, Ges&ugrave; ha proclamato di essere pi&ugrave; di un profeta. C'&egrave; solo un individuo che supera un profeta, rivelando una saggezza che va oltre la capacit&agrave; dei profeti. La divina Scrittura afferma: <strong>&ldquo;Dio non ha impartito la Sua saggezza a nessun essere umano. La saggezza di Dio rimane sconosciuta a tutti tranne che a Dio&rdquo;. </strong>Nelle Scritture divine finali, nel versetto 3:7 si afferma che Dio deve trasmettere la Sua saggezza. Sulla base di ci&ograve;, si comprende che, sebbene Dio venga come profeta per condividere la saggezza, Egli &egrave; pi&ugrave; di un profeta. L'ultima scrittura divina, in 42:51, dichiara<strong>, &ldquo;Dio non comunica direttamente con gli esseri umani&rdquo;. </strong>Tuttavia, Dio pu&ograve; manifestarsi come un uomo travestito e trasmettere il Suo messaggio. Ogni volta che Dio assume forma umana, anche se indicato come profeta, Egli &egrave; pi&ugrave; di un profeta. Alla luce dell&rsquo;affermazione di Ges&ugrave; in questo versetto, diventa evidente che Ges&ugrave; supera i profeti e rappresenta un&rsquo;incarnazione di Dio. Nonostante Ges&ugrave; abbia dichiarato apertamente la sua identit&agrave; in pi&ugrave; occasioni, molti non sono riusciti a riconoscerlo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 33,
verse: `<b>32) Il Vangelo di Matteo, capitolo 11, versetto 28.</b>`,
meaning: ` <b>
(11:28) Venite a me, voi tutti che siete stanchi e oppressi, e io vi darò riposo. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  &Egrave; opinione comune che le persone si stanchino quando trasportano peso fisico. Ma anche gli esseri umani sperimentano la stanchezza senza nemmeno portare alcun peso visibile. Il fardello invisibile, in questo caso, &egrave; il peccato (karma), e chiunque subisca esperienze karmiche tende a sentirsi stanco. Gli esseri umani incontrano continuamente il karma, tranne durante il sonno quando ne sono temporaneamente liberi. Anche nei sogni, l'influenza di il karma persiste, a significare un costante stato di travaglio. Considerando la natura perpetua di questo peso, Ges&ugrave; rivolge a tutti un invito dicendo: <strong>&ldquo;Vieni da me. Ti dar&ograve; riposo&rdquo;.</strong>

  Sorge la domanda: come troviamo riposo quando ci rivolgiamo a Ges&ugrave;, dato che sperimentiamo costantemente il karma? La risposta &egrave; la seguente: quando Ges&ugrave; impartisce la saggezza divina a coloro che lo cercano, il karma di tutti coloro che conoscono questa saggezza viene consumato nel potere della saggezza. Attraverso la distruzione del karma, gli individui vengono liberati dal suo impatto continuo, riducendo la fatica della sofferenza e fornendo riposo. Questo invito &egrave; esteso a persone di ogni casta e religione, come testimonia Ges&ugrave; che dice: <strong>"Venite tutti da me." </strong>Alcuni potrebbero riferirsi a Ges&ugrave; come a un guru o profeta cristiano. Tuttavia, etichettarlo esclusivamente come cristiano sarebbe inesatto, poich&eacute; la sua chiamata &egrave; inclusiva e invita persone di ogni provenienza. Coloro che abbracciarono i Suoi insegnamenti e Lo cercarono non dovrebbero essere confinati nell&rsquo;etichetta di cristiani. Poich&eacute; Dio e la Sapienza divina sono universalmente necessari, Ges&ugrave; estende a tutti il suo invito, come ha dichiarato: <strong>"Venite tutti da me."</strong>
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 34,
verse: ` <b>33) Il Vangelo di Matteo, capitolo 12, versetti 17,18,19, 20 e 21.</b>`,
meaning: ` <b>
(12:17) Questo doveva adempiere ciò che era stato detto tramite il profeta Isaia.
<br><br>
(12:18) Ecco il mio servitore che ho scelto, colui che amo, nel quale mi compiaccio; Metterò su di lui il mio Spirito.
<br><br>
(12:19) Proclamerà la giustizia (saggezza) alle nazioni; Non litigherà né griderà; nessuno sentirà la sua voce nelle strade.
<br><br>
(12:20) Non spezzerà una canna rotta, e non spegnerà un lucignolo fumante, finché non abbia fatto trionfare la giustizia (saggezza).
<br><br>
(12:21) Nel suo nome le nazioni riporranno la loro speranza. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Circa 350 anni fa, un grande uomo di nome Veerabrahmam predisse gli eventi e i disastri naturali che stavano per verificarsi. Allo stesso modo, un grande uomo di nome Isaia predisse la venuta di Ges&ugrave;. Se esaminiamo in dettaglio le parole di Isaia, la grandezza delle sue parole diventer&agrave; nota a tutti. Divenne chiaro di chi stava parlando Isaia. Isaia visse molti anni prima della nascita di Ges&ugrave;. Nel 13&deg; capitolo Isaia trasmise alcune altre cose. Osservando questi versetti diventa evidente che Dio, lo Spirito Santo, ha parlato di Ges&ugrave;. Esaminando i versetti in cui Ges&ugrave; parla di Se stesso nelle Scritture e i versetti in cui lo Spirito Santo parla di Ges&ugrave;, diventa evidente che colui che ha parlato di Ges&ugrave; (lo Spirito Santo) e Ges&ugrave; sono la stessa cosa.

  Nel primo verso si afferma: <strong>&ldquo;Ecco il mio servitore&rdquo;. </strong>Esistono varie forme di servizio materialistico, ma questo verso non si riferisce al servizio materialistico. Si parla invece del servizio del Paramatma. Esiste solo una forma di servizio al Paramatma, ed &egrave; quella genuina <strong>Il servizio di Paramatma implica la predicazione e la diffusione della saggezza di Dio agli altri. </strong>Poich&eacute; Ges&ugrave; stava diffondendo attivamente la saggezza di Dio, lo Spirito Santo dichiar&ograve;: &ldquo;Ecco il mio servitore&rdquo;. Chiunque propaghi la saggezza di Dio diventa il <strong>maggior parte favorito da Dio</strong>. Pertanto, Paramatma espresse amore per Ges&ugrave;, dicendo: <strong>"Lo amo e sono felice in lui." </strong>Questo sentimento &egrave; articolato in <strong>15:28, 29 e 30 della scrittura divina finale</strong>, dove viene descritto che lo Spirito Santo crea un essere umano dall'argilla e soffia in lui la Sua anima (l'anima dello Spirito Santo). Successivamente gli angeli riconoscono l&rsquo;essere umano come Dio e si prostrano davanti a Lui. Pertanto, in accordo con le parole di Isaia, &ldquo;Lo Spirito Santo metter&agrave; su di Lui il Suo spirito&rdquo;, diventa evidente che Ges&ugrave;, nell&rsquo;incarnazione umana, &egrave; l&rsquo;anima di Paramatma.

  Il versetto 19 afferma: &ldquo;Egli proclamer&agrave; la giustizia alle nazioni&rdquo;. Sembra che i traduttori della Bibbia in inglese possano aver usato un termine impreciso. Dovrebbe essere scritto come <strong>"saggezza" </strong>invece di <strong>"giustizia." </strong>La giustizia &egrave; pi&ugrave; strettamente legata al mondo materiale e quindi potrebbe non essere il termine pi&ugrave; adatto. Mentre <strong>la rettitudine e la giustizia riguardano questioni mondane, la saggezza e il dharma sono associati al Paramatma. </strong>L&rsquo;uso di &ldquo;rettitudine&rdquo; e &ldquo;giustizia&rdquo; invece di &ldquo;saggezza&rdquo; sembra essere un errore di traduzione. Numerosi errori di questo tipo sono stati identificati, rivisti e corretti.

  Il versetto 19 afferma: &ldquo;Egli proclamer&agrave; la giustizia alle nazioni&rdquo;. Qui &ldquo;proclamare&rdquo; significa predicare o insegnare. Il versetto potrebbe essere meglio compreso come: <strong>&ldquo;Egli diffonder&agrave; la saggezza alle nazioni&rdquo;. </strong>Questo emendamento &egrave; in linea con il fatto che, dopo aver vissuto per 30 anni, Ges&ugrave; insegn&ograve; la Sua saggezza per circa due anni e tre mesi, come indicato da questo versetto. Durante questo periodo Ges&ugrave; predic&ograve; altruisticamente la sua saggezza in vari luoghi, guarendo molte persone affette da diversi tipi di malattie. Restitu&igrave; la vista ai ciechi, permise agli zoppi di camminare, guar&igrave; i malati di lebbra e risuscit&ograve; persino i morti. Nonostante le Sue azioni miracolose, alcuni accusarono Ges&ugrave; di essere un mago e Lo incolparono di agire contro Dio. Tuttavia Ges&ugrave; non litig&ograve; n&eacute; grid&ograve;, come afferma il comunicato: <strong>&ldquo;Non litigher&agrave; n&eacute; grider&agrave;&rdquo;.</strong>

  Ges&ugrave; trasmetteva la sua saggezza a coloro che si avvicinavano a Lui, tuttavia si asteneva dal gridare per le strade, come indicato nel versetto: <strong>&ldquo;nessuno ascolter&agrave; la sua voce nelle strade&rdquo;. </strong>Il versetto sottolinea anche che Egli non spezzer&agrave; una canna rotta, sottolineando che le Sue azioni erano focalizzate esclusivamente sulla diffusione della saggezza. Inoltre, il versetto evidenzia il ruolo di Ges&ugrave; nel garantire che il potere della saggezza, una volta acceso in una persona, rimanga inestinguibile finch&eacute; non brucia tutto il karma associato a quell&rsquo;individuo. Poich&eacute; il karma si presenta in varie forme, &egrave; paragonato a uno stoppino composto da molti fili, spiegando la frase: <strong>&ldquo;Egli non spegner&agrave; un lucignolo fumante&rdquo;. </strong>Inoltre, il versetto esprime l&rsquo;attesa di alcuni per la saggezza di Ges&ugrave;, affermando: <strong>&ldquo;Nel suo nome le nazioni riporranno la loro speranza&rdquo;.</strong>
</div></div>

</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 35,
verse: `<b>34) Il Vangelo di Matteo, capitolo 12, versetto 31.</b>`,
meaning: `<b>
(12:31) Quindi, vi dico, ogni tipo di peccato e di calunnia può essere perdonato, ma la bestemmia contro lo Spirito (Atma) non sarà perdonata.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Questo versetto ha un significato particolare nelle Scritture. Quando gli esseri umani comprendono la saggezza di Dio, quella saggezza si trasforma in fuoco (potere della saggezza). Questo fuoco ha la capacità di bruciare vari peccati (karma). Conoscere la saggezza divina consente agli esseri umani di farlo evitare i peccati non legati all'Atma. Tuttavia, è fondamentale notare che il potere della saggezza non può assolvere i peccati derivanti dalla blasfemia e dalle azioni contro l’Atma; tali peccati possono rimanere imperdonabili.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 36,
verse: `<b>35) Il Vangelo di Matteo, capitolo 12, versetto 32.</b>`,
meaning: `<b>
(12:32) Chiunque dica una parola contro il Figlio dell'Uomo sarà perdonato, ma chiunque parli contro lo Spirito Santo non sarà perdonato, né in questa epoca (yuga) né nell'era (yuga) a venire. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Tutti gli esseri umani sono comunemente indicati come figli dell'uomo; le persone comuni riconoscono che i loro genitori sono umani. Ma Ges&ugrave;, nonostante il Suo aspetto esteriore come un uomo comune, non dovrebbe essere classificato come il figlio dell&rsquo;uomo. Quando Ges&ugrave; parl&ograve; di Suo Padre, specific&ograve; che Suo Padre esisteva in paraloka, non come uomo sulla terra. Di conseguenza, Ges&ugrave; &egrave; appropriatamente identificato come il Figlio di Dio. Al contrario, il termine generale &ldquo;figlio dell&rsquo;uomo&rdquo; pu&ograve; essere applicato a tutte le persone. Nonostante Ges&ugrave; si presenti con il nome e le esperienze di un uomo comune, la Sua vera designazione &egrave; Figlio di Dio.

  Il donatore di semi per una persona comune non &egrave; un essere umano. Qualsiasi uomo che affermi di avere figli non &egrave; veramente un padre. L'Atma, che funge da capo del corpo e svolge tutte le funzioni al suo interno, &egrave; il donatore di semi per gli esseri umani e tutti gli esseri viventi. Sfortunatamente, molti esseri umani non sono consapevoli di questo fatto. Di conseguenza, un uomo afferma di essere il padre di un altro essere umano, anche se non pu&ograve; svolgere alcuna funzione all'interno del corpo. &Egrave; sottolineato pi&ugrave; volte nella prima e nella seconda scrittura divina che Atma &egrave; l'unico artefice di tutte le cose. Mentre una persona, in realt&agrave;, non commette alcun peccato perch&eacute; &egrave; incapace di compiere azioni, l'idea sbagliata che sia lui l'autore porta all'accumulo di peccati nel suo conto (Jeevatma). Pertanto, una persona diventa responsabile dei peccati che non ha commesso. Allo stesso modo, nonostante Atma sia il vero Padre di un uomo, l'uomo &egrave; considerato figlio di un essere umano quando afferma che suo padre &egrave; un uomo.

  Ges&ugrave; &egrave; consapevole che Suo Padre &egrave; il Padre di paraloka. A differenza di tutti gli altri, non &egrave; nato da Atma. Ges&ugrave; riconosce di essere il Figlio di Dio, lo Spirito Santo. In tutte le Scritture bibliche, Ges&ugrave; viene definito il Figlio di Dio perch&eacute; in molte occasioni afferm&ograve; esplicitamente che Suo Padre era lo Spirito Santo. La saggezza di Dio ha il potere di perdonare i peccati commessi contro individui comuni. Tuttavia, il peccato di blasfemia contro il Figlio di Dio non sar&agrave; mai perdonato. Questo peccato di blasfemia &egrave; destinato a essere sperimentato <strong>due yuga </strong>&ndash; nell&rsquo;attuale yuga (era) e in quella successiva.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 37,
verse: `<b>36) Il Vangelo di Matteo, capitolo 12, versetti 36 e 37.</b>`,
meaning: ` <b>
(12:36) Ma vi dico che ognuno dovrà rendere conto nel giorno del giudizio di ogni parola vuota che avrà pronunciato.
<br><br>
(12:37) Poiché in base alle tue parole sarai assolto, e in base alle tue parole sarai condannato.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dal momento della nascita, gli esseri umani compiono numerose azioni e pronunciano molte parole. Credono di essere personalmente responsabili di ogni piccola azione e parola. In realt&agrave; non hanno fatto nulla. &Egrave; l'Atma nel corpo che esegue tutte le azioni. Tuttavia, un individuo inconsapevole attribuisce falsamente ogni azione e parola a se stesso e, di conseguenza, le conseguenze karmiche delle sue azioni e parole ricadono su di lui. L'Atma immagazzina tutto il karma accumulato nel karma chakra e lo valuta il giorno della morte. In questo giorno del giudizio, l'Atma valuta ogni azione e parola dell'individuo, soppesando i peccati e i punya associati a ciascuno. Una persona &egrave; considerata uno gnani (persona saggia) se acquisisce saggezza nella vita e, al contrario, una persona &egrave; considerata ignorante se compie azioni con ignoranza. Inoltre, l'Atma considera se una persona ha acquisito la saggezza (gnani) o rimane nell'ignoranza. Il giudizio si basa sullo status dell&rsquo;individuo come gnani o ignorante, determinando di conseguenza la sua prossima vita. Lo Spirito Santo non giudica una persona in base al karma. &Egrave; l'Atma, responsabile di tutte le funzioni del corpo, che giudica l'individuo nel giorno della morte e dirige il Jeeva alla vita successiva. Questo giorno &egrave; conosciuto come il <strong>&ldquo;il giorno del giudizio&rdquo; </strong>O <strong>"ultimo giorno", </strong>servendo anche come primo giorno della prossima vita (compleanno). Riconoscendo che Atma &egrave; l'arbitro ultimo degli ultimi e dei primi giorni di vita, si dovrebbe capire che lo Spirito Santo non partecipa a questi processi. L'ultimo giorno pu&ograve; essere definito il giorno del conteggio del karma. Atma &egrave; colui che svolge tutte le funzioni del corpo. Comprendendo questo, se una persona crede di non aver fatto nulla personalmente, non &egrave; n&eacute; considerata una persona peccatrice n&eacute; virtuosa. &Egrave; fondamentale riconoscere che l&rsquo;Atma determina il karma nelle azioni di una persona e la guida alla nascita successiva. A seconda dei propri pensieri, saranno giudicati come gnani, ignoranti, giusti o peccatori.
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 38,
verse: `<b>37) Il Vangelo di Matteo, capitolo 12, versetto 40.</b>`,
meaning: ` <b>
(12:40) Poiché come Giona rimase tre giorni e tre notti nel ventre di un grosso pesce, così il Figlio dell'Uomo resterà tre giorni e tre notti nel cuore della terra.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Questo versetto traccia un parallelo tra gli eventi precedenti il tempo di Ges&ugrave; e gli avvenimenti profetizzati. Si nota che Giona, dopo essere stato inghiottito da un pesce gigante, risiedette nel suo ventre per tre giorni e tre notti. Il versetto profetizza anche: &ldquo;Ges&ugrave; rester&agrave; tre giorni e tre notti nel cuore della terra&rdquo;. Mentre &egrave; esatto che Giona trascorse tre giorni e tre notti nei pesci, non &egrave; esatto affermare che Ges&ugrave;, il Figlio dell'Uomo, visse per lo stesso periodo nel cuore della terra. Storicamente, Ges&ugrave; fu crocifisso sulla croce venerd&igrave; sera e resuscit&ograve; dai morti prima dell&rsquo;alba della domenica mattina. Secondo i documenti storici, Ges&ugrave; fu probabilmente crocifisso tra le 15:30 e le 17:30. e le 16:00 venerd&igrave; e il suo corpo fu deposto in una tomba venerd&igrave; sera. Di conseguenza, Ges&ugrave; non era nel sepolcro durante il giorno del venerd&igrave;, ma piuttosto il venerd&igrave; notte e tutto il sabato. Si dice che la risurrezione sia avvenuta prima dell'alba di domenica. Pertanto, Ges&ugrave; trascorse la notte del venerd&igrave; e l'intera giornata del sabato nel sepolcro, risorgendo dai morti prima della domenica mattina.

  Il versetto sembra indicare che Ges&ugrave; fu sepolto solo per due notti e un giorno. Di conseguenza, questo versetto delle Scritture potrebbe sembrare errato, sollevando dubbi sulla sua accuratezza. Tuttavia, il versetto delle Scritture divine &egrave; considerato continuamente accurato. Quando altri mettevano in dubbio l&rsquo;autenticit&agrave; di questo particolare versetto, anch&rsquo;io provavo un senso di dubbio. Detto che in questa frase non c'&egrave; spazio per la falsit&agrave; se non per la verit&agrave;, dovevo rispondere a quello che mi chiedevano gli altri. Tuttavia, ricordando la guida di Matteo 10:20, <strong>&ldquo;Poich&eacute; non sarai tu a parlare, ma sar&agrave; lo Spirito del Padre tuo che parler&agrave; attraverso di te&rdquo; </strong>dissipa il bisogno di paura nel fornire una risposta. La comprensione &egrave; che lo Spirito, o Atma, &egrave; colui che pone domande e fornisce risposte. Come Jeeva, il nostro ruolo &egrave; ascoltare e comprendere ci&ograve; che l'Atma sta comunicando.

  Colui che comunemente viene chiamato Figlio dell'Uomo &egrave;, in verit&agrave;, il Figlio di Dio. Anche se comunemente etichettiamo Ges&ugrave; come il Figlio di Dio, &egrave; essenziale riconoscere che Egli non &egrave; il figlio di nessun essere umano ma di Dio stesso. Questa affermazione &egrave; fatta con certezza, fondata sulla comprensione che Egli &egrave; Dio incarnato. Mentre il corpo abitato da Dio ha conosciuto la morte, Dio stesso &egrave; immortale. In realt&agrave;, ci sono quattro tipi di morte: morte naturale, morte innaturale, morte temporanea e morte definitiva. Mentre la maggioranza ha familiarit&agrave; con il primo tipo, coloro che possiedono saggezza spirituale, o &ldquo;gnani&rdquo;, conoscono tutti e quattro i tipi. L'ultima morte avviene quando Dio assume forma umana o quando una persona raggiunge moksham, fondendosi con Dio. Nonostante la credenza diffusa nella morte di Ges&ugrave; sulla croce, nessuno pu&ograve; dire con certezza il tipo specifico di morte che Egli speriment&ograve;.

  In questo versetto si afferma che Ges&ugrave; rimase nel cuore della terra per tre giorni e tre notti, ma non viene menzionata esplicitamente la Sua morte. Durante la Sua crocifissione, la convinzione prevalente era che fosse morto sulla croce. Tuttavia, uscendo dalla tomba la domenica mattina, Ges&ugrave; afferm&ograve; di non aver sperimentato la morte. Per rispondere allo scetticismo dei Suoi discepoli, mostr&ograve; i segni dei chiodi sui Suoi polsi e sui Suoi piedi, insieme alla ferita della lancia, rendendo chiaro che non era morto. Tuttavia, i documenti storici affermano che il Suo corpo fu deposto dalla croce e deposto in una tomba dopo la Sua morte, avvenuta venerd&igrave; sera. Questa apparente contraddizione, secondo cui Egli mor&igrave; venerd&igrave; ma apparve domenica come se non fosse morto, solleva interrogativi sull&rsquo;affermazione apparentemente falsa secondo cui <strong>Resterebbe tre giorni e tre notti nel cuore della terra. </strong>Secondo le 12:40, Egli non fu l&igrave; per tre notti e tre giorni, ma fu invece l&igrave; solo per due notti e un giorno. Esplorare il motivo dietro questa apparente incoerenza svela una verit&agrave; pi&ugrave; profonda nascosta nell&rsquo;apparente falsit&agrave;. Esaminiamo ulteriormente come si nasconde la verit&agrave; all'interno di questa apparente contraddizione.

  &Egrave; vero che Ges&ugrave; &egrave; morto sulla croce, ma nessuno sapeva che fosse cos&igrave; <strong>morte temporanea</strong>. Ges&ugrave; ha sperimentato una morte temporanea tra quattro tipi di morte ed &egrave; risorto domenica mattina presto da una morte temporanea. Inform&ograve; i suoi discepoli che non era morto. Non sarebbe risorto se avesse conosciuto la morte naturale. Tuttavia, Egli si alz&ograve; il terzo giorno perch&eacute; ebbe una &ldquo;morte temporanea&rdquo;. Pertanto, l&rsquo;idea che Ges&ugrave; sia morto sulla croce &egrave; un&rsquo;idea sbagliata e non vera. Allo stesso modo, la scrittura che afferma che Ges&ugrave; rimase nella tomba per tre giorni &egrave; accurata ma merita una comprensione pi&ugrave; profonda. Ges&ugrave; &egrave; presente nel corpo come Jeevatma, mentre anche Atma, il Padre di tutti, risiede dentro. Jeevatma sperimenta le conseguenze del karma all'interno di ogni corpo umano, mentre Atma esegue le azioni necessarie in accordo con il karma. L'Atma permea l'intero corpo, mentre Jeevatma &egrave; localizzato nella testa. L'Atma esercita il controllo sul corpo attraverso le sue dieci parti e organi. La vitalit&agrave; di una persona &egrave; spesso associata al movimento del corpo e una persona &egrave; considerata viva quando il corpo &egrave; in movimento. Al contrario, quando le dieci parti e gli organi smettono di funzionare, accompagnata dall'assenza di respirazione, la persona viene considerata morta. In caso di morte naturale, sia Atma che Jeevatma escono dal corpo, provocando l'immobilizzazione del corpo a causa dell'assenza di Atma.

  Nel caso della morte temporanea, n&eacute; Atma n&eacute; Jeevatma lasciano il corpo. L'Atma subisce una contrazione, restringendosi dai bordi esterni fino a raggiungere dimensioni minuscole, ed entra nella testa in modo simile a Jeevatma. Durante questo periodo nessuno degli organi del corpo funziona e la respirazione cessa, dando l&rsquo;impressione di morte. L'uomo &egrave; comunemente percepito come morto poich&eacute; cessano le funzioni corporee sia esterne che interne. La resurrezione avviene quando l'Atma, riprendendo la sua funzione abituale, emerge e riprende a funzionare. Questo fenomeno &egrave; esemplificato nel caso di Ges&ugrave;. Durante la Sua crocifissione, l'Atma si contrasse nel Suo corpo, mantenendo questo stato per la notte del venerd&igrave; e per l'intero sabato. La domenica mattina presto, Atma riprese la normale funzione, facendo emergere Ges&ugrave; vivo dalla tomba. L'Atma ha sperimentato <strong>morte temporanea </strong>solo per due notti e un giorno. Mentre l&rsquo;Atma nel corpo di Ges&ugrave; rimase nella tomba per due notti e un giorno, &egrave; anche accurato dire che Ges&ugrave; (Jeevatma) rimase nella tomba per tre notti e tre giorni, descrivendo un processo non pienamente compreso da noi. Vediamo di cosa si trattava.

  Si pu&ograve; dire che Ges&ugrave; sia risorto grazie alle azioni di Atma nel Suo corpo. Tuttavia, prima che Atma morisse sulla croce, Jeevatma era gi&agrave; stato sepolto nel corpo. La connessione tra Jeevatma e Buddhi &egrave; stata interrotta nel corpo di Ges&ugrave; dopo che gioved&igrave; ha saputo del suo imminente arresto. Ges&ugrave; entr&ograve; in uno stato sconosciuto, completamente ignaro del Suo arresto, processo, fustigazione e crocifissione, essendo essenzialmente sepolto nella Sua tomba corporea. Rimase privo di sensi per tre giorni, come in una tomba. Nonostante ci&ograve;, Atma svolgeva tutte le funzioni corporee necessarie, ma Ges&ugrave; era ignaro di queste azioni. Per evitare che Ges&ugrave; sperimentasse qualsiasi dolore o sofferenza associata alla fustigazione e alla crocifissione, Atma lo mand&ograve; in uno stato sconosciuto, simile al sonno. Jeevatma rimase sepolto nel corpo finch&eacute; Atma non lo svegli&ograve; domenica mattina. Quindi, il versetto afferma: &ldquo;Ges&ugrave; rimase nel sepolcro tre giorni e tre notti&rdquo;. La gente sapeva che il corpo di Ges&ugrave; era stato deposto nella tomba, ma il Jeevatma nel Suo corpo era gi&agrave; entrato in uno stato sconosciuto. Successivamente, l&rsquo;Atma di Ges&ugrave; speriment&ograve; la morte temporanea venerd&igrave; sera. Tuttavia, le persone che potevano osservare solo le cose visibili, non erano consapevoli del funzionamento di Atma e Jeevatma nel corpo di Ges&ugrave;. &Egrave; vero che Ges&ugrave; rimase nella tomba per tre giorni e tre notti, e il Suo Atma rimase nella tomba per due notti e un giorno.

</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 39,
verse: `<b>38) Il Vangelo di Matteo, capitolo 13, versetti 13, 14 e 15.</b>`,
meaning: `<b>
(13:13) Pur vedendo, non vedono; pur sentendo, non sentono né capiscono.
<br><br>
(13:14) In essi si compie la profezia di Isaia: Udrete sempre ma non comprenderete mai; vedrai sempre ma non percepirai mai.
<br><br>
(13:15) Poiché il cuore di questo popolo è diventato insensibile; sentono a malapena con le orecchie e hanno chiuso gli occhi. Altrimenti, potrebbero vedere con i loro occhi, udire con le loro orecchie, comprendere con il loro cuore e voltarsi, e io li guarirei.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il profeta Isaia lo profetizzò molto tempo fa. Sia allora che oggi ci sono state persone ignoranti. Vedono con gli occhi, sentono con le orecchie e distolgono il manas (mente) anche dopo aver compreso con buddhi. A causa della loro mancanza di interesse per ciò che hanno visto, sentito e conosciuto, la loro buddhi rallenta per evitare di distruggere il loro karma attraverso Gesù. Le loro orecchie diventano sorde alla saggezza divina. Ascoltano tutto ciò che viene detto ma non capiscono ciò che sentono e rimangono intrappolati nelle cose materiali. Possono vedere solo i soldi. A loro, coloro che possiedono la saggezza appaiono stolti.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 40,
verse: `<b>39) Il Vangelo di Matteo, capitolo 15, versetti 7, 8 e 9 .</b>`,
meaning: `<b>
(15:7) Ipocriti! Isaia aveva ragione quando profetizzò su di te.
<br><br>
(15:8) Queste persone mi onorano con le loro labbra, ma i loro cuori sono lontani da me.
<br><br>
(15:9) Mi adorano invano; i loro insegnamenti sono semplicemente regole umane.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abbiamo spesso detto: &ldquo;Dio conosce la questione di Dio; gli esseri umani non lo sanno&rdquo;. Dio pu&ograve; parlare di Se stesso e gli esseri umani lo sapranno quando Dio riveler&agrave; come adorarLo. Sebbene Dio abbia predetto come dovrebbe essere adorato, molti predicano modi diversi che differiscono da ci&ograve; che Dio ha detto. Molti swami e guru insegnano alle persone regole create dall'uomo, come upadesa e altri metodi di adorazione. Dio stesso rivela che &ldquo;tali upadesa e adorazione sono futili&rdquo; e non possono avvicinare gli esseri umani a Lui. Molti swami e guru parlano di Dio nei loro discorsi, ma predicano adorazioni e upadesa anti-Dio e inespresse su Dio. Anche se questi guru e swami parlano di Dio e della saggezza, compiono adorazioni futili senza comprendere la saggezza divina e inducono gli altri a fare lo stesso. Ad esempio, il digiuno non ha nulla a che fare con l&rsquo;adorazione di Dio. Non solo soffrono a causa del digiuno, ma disturbano anche il Dio interiore. &Egrave; cos&igrave; che danneggiano il Dio interiore. Allo stesso modo, cinquemila anni fa fu detto nella Bhagavad-Gita: &ldquo;<strong>Non puoi conoscermi e raggiungermi attraverso lo studio dei Veda, facendo donazioni o eseguendo sacrifici (yajnas) e penitenze (tapas).&rdquo; </strong>Nella Bhagavad-Gita, Dio dice che molte persone Lo onorano altamente ma Lo adorano invano, in modo adharmico. Il Signore ha detto la stessa cosa ora nella Sacra Scrittura.

  Le parole vengono dalla bocca, ma i sentimenti vengono dal cuore. Anche se molte persone parlano bene di Dio, i loro cuori non sono veramente in linea con i Suoi principi. Nonostante loro lode, non hanno i dharma di Dio nei loro cuori. I dharma di Maya avevano luogo nei loro cuori. Parlano di Dio, ma ci&ograve; che fanno sotto l&rsquo;influenza di Maya &egrave; adorazione anti-Dio. Molti guru chiamano ci&ograve; che dicono saggezza di Dio, ma l&rsquo;adorazione che compiono, come ha detto Dio, non li unir&agrave; a Lui. La Gita avverte anche che questi culti sono sulla strada sbagliata. Tuttavia, i famosi Peetadipati eseguono inutili yajna, donazioni, digiuni, canti vedici e penitenze. La Sacra Bibbia e la Bhagavad-Gita affermano che coloro che si impegnano in queste pratiche sono lontani da Dio. Pertanto, da ora in poi, non solo glorifichiamo Dio con le nostre parole, ma seguiamo anche ci&ograve; che Dio ha detto, lasciando dietro di noi l&rsquo;adorazione futile e anti-Dio.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 41,
verse: `<b>40) Il Vangelo di Matteo, capitolo 15, versetto 11.</b>`,
meaning: ` <b>
(15:11) Ciò che entra nella bocca di qualcuno non lo contamina, ma ciò che viene dalla loro bocca, ecco ciò che li contamina. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  L'uomo consuma il cibo attraverso la bocca e la variet&agrave; del cibo &egrave; vasta e non si limita a un unico tipo. Gli individui possono essere classificati come vegetariani o non vegetariani. Alcuni leader spirituali, come swami e guru, sostengono il vegetarianismo come un percorso per comprendere la saggezza di Dio, affermando che evitare la carne &egrave; essenziale. Qui il Signore ha detto: <strong>&ldquo;Ci&ograve; che entra nella bocca di qualcuno non lo contamina, ma ci&ograve; che esce dalla sua bocca &egrave; quello che lo contamina&rdquo;. </strong>Esistono varie opinioni riguardo alle pratiche alimentari per chi &egrave; sulla via della saggezza divina. Alcuni raccomandano di astenersi dal cibo non vegetariano, mentre altri suggeriscono una dieta composta esclusivamente da cibi crudi e non cotti. Alcuni propongono una dieta vegetariana limitata ad un pasto al giorno. Nonostante queste diverse restrizioni dietetiche, viene sottolineato che la santit&agrave; o l&rsquo;impurit&agrave; di un individuo non &egrave; determinata dal cibo consumato. Anche se il cibo che mangiamo pu&ograve; avere un impatto sulla salute fisica, non influisce sulla purezza spirituale. Mangiare un cibo particolare non ostacola la ricerca della saggezza divina. L'uomo consuma il cibo con la bocca e articola le parole con lo stesso organo. In particolare, il processo di ingestione del cibo attraverso la bocca non pone problemi; piuttosto, sono le parole che escono dalla bocca che hanno il potenziale di contaminare una persona. Mentre l'uomo si impegna in azioni ed espressioni verbali, la sua vera natura viene svelata attraverso le sue parole. <strong>Gli anziani sostengono la convinzione che chi possiede la saggezza divina &egrave; considerato santo, mentre chi ne &egrave; privo &egrave; considerato impuro. </strong>Una persona dotata di saggezza &egrave; considerata pura in base alle sue parole. Al contrario, l&rsquo;ignoranza viene messa a nudo dalle parole di qualcuno privo di saggezza. La contaminazione di un individuo diventa evidente attraverso le sue parole; quindi, Ges&ugrave; trasmise il suddetto versetto. Secondo gli insegnamenti della Bibbia e della Bhagavad-Gita, una persona non &egrave; contaminata dal cibo che consuma. Piuttosto, &egrave; il proprio karma che fornisce sostentamento. Coloro che sono sul sentiero della saggezza non sono vincolati da restrizioni dietetiche. Ci&ograve; che conta per Dio non &egrave; il cibo specifico consumato ma l&rsquo;adesione al sentiero della saggezza. Pertanto, qualunque cibo venga consumato secondo le proprie abitudini &egrave; irrilevante per Dio.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 42,
verse: `<b>41) Il Vangelo di Matteo, capitolo 15, versetti 12 e 13.</b>`,
meaning: `<b>
(15:12) Allora i discepoli si avvicinarono a lui e gli dissero: "Sai che i farisei si scandalizzarono quando udirono questo?"
<br><br>
(15:13) Egli rispose: “Ogni pianta che il mio Padre celeste non ha piantato sarà sradicata”.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando il Signore proclam&ograve; che l&rsquo;uomo non &egrave; contaminato dal cibo ed &egrave; libero di consumare qualsiasi nutrimento pur aderendo alla via di Dio, i farisei sollevarono obiezioni. Contestavano che le parole del Signore mancassero di saggezza divina e le respingevano apertamente. Accusando Ges&ugrave; di promuovere l&rsquo;ignoranza, misero in dubbio la fonte della Sua autorit&agrave; nell&rsquo;insegnare tali principi. I farisei, considerandosi grandi maestri, affermavano che solo loro possedevano la legittima autorit&agrave; per impartire saggezza su Dio. Dopo aver appreso delle obiezioni dei farisei, i discepoli informarono Ges&ugrave; della situazione. In risposta, Egli dichiar&ograve;: <strong>&lsquo;Ogni pianta non piantata dal mio Padre celeste sar&agrave; sradicata dalle radici&rsquo;.</strong>

  Il Padre Paraloka, Paramatma, stabilisce i Suoi dharma, che possono svanire sulla Terra ma non perire mai veramente. Quando si verifica tale diminuzione, Paramatma si incarna come Bhagavan per rafforzare questi dharma. Man mano che i dharma si indeboliscono, gli adharma proliferano. I dharma sono divini, appartengono a Dio, mentre gli adharma sono affiliati a Satana. Paramatma semina i semi dei dharma, mentre Satana semina quelli degli adharma. Durante l&rsquo;incarnazione terrena di Paramatma per impartire i Suoi dharma, Satana assume varie forme come studiosi, farisei, insegnanti e swami. In questa veste, Satana impartisce la propria versione di saggezza, convincendo gli esseri umani che i suoi dharma sono sinonimi dei dharma di Dio. I dharma di Maya (Satana) talvolta minano i dharma di Paramatma. Alcuni potrebbero chiedersi perch&eacute; i dharma di Maya possano indebolire i potenti dharma di Dio. Paramatma, come Padre Paraloka, si incarna come Bhagavan in un luogo e in un tempo specifici per propagare i Suoi dharma. Sebbene questi dharma possano acquisire forza durante quel periodo, svaniscono dopo poche migliaia di anni. Questo perch&eacute; il ritorno di Dio come Bhagavan avviene solo quando ritenuto necessario. Al contrario, Maya crea continuamente guru e swami, convincendoli che la sua saggezza &egrave; sinonimo della saggezza di Dio. Attraverso di loro, Maya propaga continuamente i suoi dharma, assicurando un'influenza persistente sulla Terra.

  Le persone sono spesso attratte dagli swami, dai guru e dai baba che operano costantemente sotto l&rsquo;influenza di Maya, piuttosto che dalla rara apparizione di un Bhagavan non identificato che arriva una volta ogni mille anni. Mentre Dio si manifesta in un luogo alla volta, Satana nasce in varie forme in molti luoghi, assumendo ruoli come quello di swami, guru e baba, diminuendo attivamente i dharma di Dio. Similmente a un campo invaso dalle erbacce che influiscono sulla crescita degli alberi piantati da un contadino, l&rsquo;influenza di Satana prolifera attorno ai dharma piantati da Dio. Per contrastare questo, Dio, come un agricoltore diligente, interviene sradicando le erbacce, comprese le loro radici, per fortificare gli alberi che ha seminato. Tuttavia, col passare del tempo, molte erbe infestanti potrebbero riemergere senza alcuna semina intenzionale. Paramatma, paragonato a un contadino, inizialmente piant&ograve; i Suoi dharma. Satana, a sua volta, coltiva le erbacce (adharma) attorno alle piante di Dio (dharma). L&rsquo;indebolimento naturale della pianta di Dio avviene sotto l&rsquo;influenza delle erbacce di Maya. Per risolvere questo problema, Dio interviene, <strong>estraendo molti dei dharma di Maya </strong>che hanno invaso il Suo dharma. Ci&ograve; &egrave; in linea con l&rsquo;essenza dell&rsquo;affermazione di Ges&ugrave;: Dio smantella i dharma di Satana minando i Suoi, rafforzando e fortificando cos&igrave; i Suoi principi divini.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 43,
verse: `<b>42) Il Vangelo di Matteo, capitolo 15, versetto 14.</b>`,
meaning: `<b>
((15:14) Lasciali; sono guide cieche. Se il cieco guida un altro cieco, entrambi cadranno in una fossa.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Gli individui sotto l&rsquo;influenza di Maya, inclusi Pandit e Farisei, che sono essi stessi parte di Maya, criticarono Bhagavan Ges&ugrave; senza comprendere la saggezza di Dio. Non sono consapevoli della saggezza di Dio, non hanno alcuna visione della saggezza divina. Rimangono ciechi senza la vista della saggezza. Come possono coloro che sono privi della saggezza di Dio proclamarla e guidare gli altri in essa? Fanno finta di avere una vista saggia e diffondono ci&ograve; che percepiscono come saggezza di Dio. Le persone, confidando in questi apparenti veggenti, cercano una guida, presupponendo di possedere una conoscenza completa della saggezza di Dio. A loro insaputa, questi stessi leader sono ciechi. Immagina uno scenario in cui una persona cieca guida altri ciechi anch'essi, sostenendo di avere la vista e guidandoli lungo la strada. Inevitabilmente, il leader cieco inciampa nella fossa, portando gli altri nella stessa situazione. Allo stesso modo, coloro che ignorano la saggezza di Dio deridono coloro che possiedono la vera saggezza, proclamandosi grandi guru. Quelli dotati di saggezza non hanno bisogno di impegnarsi in discussioni con loro. Gli individui privi della vista-saggezza non possono ascendere al pinnacolo di moksham. Sebbene molti possano seguire un guru privo della vista della saggezza, nessuno raggiunge moksham; invece, cadono nel <strong>fossa dei guna.</strong>
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 44,
verse: ` <b>43) Il Vangelo di Matteo, capitolo 16, versetti 21 e 22.<br>
Il Vangelo di Matteo, capitolo 17, versetti 22 e 23.
<br>
Il Vangelo di Matteo, capitolo 20, versetti 17, 18 e 19.</b>
`,
meaning: ` <b>
(16:21) Da quel momento in poi Gesù cominciò a spiegare ai suoi discepoli che doveva andare a Gerusalemme e soffrire molte cose per mano degli anziani, dei capi sacerdoti e degli insegnanti della legge, e che doveva essere ucciso e risorgerà il terzo giorno. (Prima volta)
<br><br>
(16:22) Pietro lo prese da parte e cominciò a rimproverarlo. “Mai, Signore!” ha detto. "Questo non ti succederà mai!"
<br><br>
(17:22) Quando si riunirono in Galilea, disse loro: “Il Figlio dell’Uomo sta per essere consegnato nelle mani degli uomini”.
<br><br>
(17:23) Lo uccideranno, e il terzo giorno risorgerà”alla vita . E i discepoli erano pieni di dolore. (Seconda volta)
<br><br>
(20:17) Ora Gesù stava salendo a Gerusalemme. Lungo la strada prese da parte i Dodici e disse loro:
<br><br>
(20:18) Saliamo a Gerusalemme, e il Figlio dell'Uomo sarà consegnato nelle mani dei capi sacerdoti e degli insegnanti della legge. Lo condanneranno a morte.
<br><br>
(20:19) Lo consegneranno ai Gentili perché sia ​​deriso e flagellato e crocifisso. Il terzo giorno sarà risuscitato! alla vita ” (Terza volta)
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Gesù, nei capitoli 16, 17 e 20 del Vangelo di Matteo, predisse il proprio futuro. È raro che gli esseri umani comuni prevedano l’ora della propria morte, data l’incertezza e la natura sconosciuta del futuro. Gesù, tuttavia, rivelò le circostanze della Sua morte non solo una ma tre volte, mostrando qualcosa di straordinario dentro di Lui. Questo atto servì a dimostrare agli ignari che Egli era più di un semplice essere umano. La capacità di parlare della propria morte in modo così dettagliato è una rarità, ma Gesù poteva farlo perché aveva preordinato la Sua morte. L’Atma è l’unico determinante del karma della vita all’interno del corpo.

  Gesù, in tre diverse occasioni, parlò esplicitamente della Sua morte imminente. La sua capacità di predire il suo destino derivava dal suo karma predeterminato. Secondo Gesù, Atma – il giudice del karma – è il Figlio di Paramatma. Gesù affermò costantemente che Suo Padre è lo Spirito Santo, identificandosi come l'Atma responsabile della determinazione del karma. Dopo aver deciso il karma della Sua vita, Gesù profetizzò che sarebbe stato consegnato agli anziani e ai capi sacerdoti, sarebbe stato ucciso da loro e sarebbe risuscitato il terzo giorno. Sorprendentemente, questi eventi si sono svolti esattamente come Egli aveva predetto. Gesù parlò della Sua morte senza paura, una dimostrazione che ogni individuo discernente può riconoscere, indicando che Gesù non era un uomo comune; c'era qualcosa di straordinario in Lui.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 45,
verse: `<b>44) Il Vangelo di Matteo, capitolo 19, versetti 23 e 24.</b>`,
meaning: `<b>
(19:23) Allora Gesù disse ai suoi discepoli: “In verità vi dico; è difficile per qualcuno che è ricco entrare nel regno di paraloka.
<br><br>
(19:24) Ancora una volta vi dico che è più facile che un cammello passi per la cruna di un ago che un ricco entri nel regno di Dio.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ges&ugrave; raccont&ograve; una parabola affermando: <strong>&ldquo;&Egrave; pi&ugrave; facile che un cammello passi per la cruna di un ago, che un ricco entri nel regno di Dio&rdquo;. </strong>Proprio come &egrave; impossibile per un cammello passare attraverso la cruna di un ago, allo stesso modo &egrave; difficile per un individuo ricco entrare nel Regno di Dio. Alcuni anziani credono che la ricchezza spesso generi arroganza, una caratteristica considerata una delle sei qualit&agrave; negative (guna). L'arroganza, la quinta di queste qualit&agrave;, accompagna l'avidit&agrave; (kaama), la rabbia (krodha), l'avarizia (lobha), la passione (moha) e la gelosia (matsara). L&rsquo;arroganza &egrave; presente a vari livelli in ogni individuo. Che sia al 90%, 80%, 70%, 60%, 50%, 40% o 30%, tutti possiedono un certo livello di arroganza. Una persona pu&ograve; mostrare il 90% di arroganza, mentre un'altra potrebbe averne l'80% e alcune potrebbero esprimere solo il 30% di arroganza.

  Non solo l'arroganza modella i pensieri del Jeevatma all'interno del corpo, ma anche gli altri cinque guna associati svolgono un ruolo significativo. Il livello di arroganza pu&ograve; variare e si osserva che i poveri generalmente mostrano meno arroganza dei ricchi. IL pi&ugrave; un individuo &egrave; ricco, pi&ugrave; alto tende ad essere il suo livello di arroganza. Qualcuno con milioni di dollari pu&ograve; manifestare un grado ancora maggiore di arroganza ed essere maggiormente influenzato dagli altri guna. La ricchezza ha il potere di provocare cambiamenti significativi in una persona, spesso allontanandola dalla saggezza. Nel contesto di <strong>moksham </strong>essendo paragonato alla cruna di un ago, l'analogia si estende al fatto che il ricco &egrave; paragonabile a un cammello. Proprio come un cammello non pu&ograve; passare attraverso la cruna di un ago, una persona ricca, con la forte influenza dei guna simili a un cammello, affronta sfide per ottenere la liberazione. L'analogia sottolinea che proprio come un cammello non pu&ograve; passare per la cruna di un ago, una persona ricca, sotto l'influenza di potenti <strong>guna</strong>, incontra ostacoli nell'entrare in paraloka (moksham).
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 46,
verse: `<b>45) Il Vangelo di Matteo, capitolo 22, versetti 36, 37, 38, 39 e 40.</b>`,
meaning: `<b>
(22:36) Maestro, qual è il più grande comandamento della Legge (Dharma Shastra)?
<br><br>
(22:37) Gesù rispose: “Ama il Signore Dio tuo con tutto il tuo cuore e con tutto la tua anima e con tutta la tua mente”.
<br><br>
(22:38) Questo è il primo e il più grande comandamento.
<br><br>
(22:39) E il secondo è simile: “Ama il tuo prossimo come te stesso”.
<br><br>
(22:40) Tutta la Legge e i Profeti dipendono da questi due comandamenti.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Alcune persone si avvicinarono a Ges&ugrave;, ponendo una domanda sul comandamento pi&ugrave; importante della legge (Dharma Shastra), con l'intenzione di metterlo alla prova e potenzialmente deriderlo se fosse inciampato. In risposta, Ges&ugrave; prontamente rispose: <strong>&ldquo;Ama il Signore tuo Dio con tutto il cuore, l&rsquo;anima e la mente&rdquo;. </strong>Sottoline&ograve; che questa direttiva era il comandamento principale e pi&ugrave; grande, seguito da un secondo comandamento. L&rsquo;uso del termine &ldquo;comandamento&rdquo; in questo versetto ne sottolinea il significato, poich&eacute; Ges&ugrave; afferma che questi due comandamenti servono come fondamento per tutta la legge e per i Profeti. Questo versetto &egrave; spiegato come segue.

  Un comandamento &egrave; essenzialmente un'istruzione data all'azione diretta. In un contesto pi&ugrave; ampio sorge la domanda: chi &egrave; l&rsquo;autorit&agrave; che impartisce il comando? La risposta sta nel fatto che gli anziani comunemente danno comandi ai pi&ugrave; giovani. Estendendo questa idea, Dio, il creatore del mondo, detiene la massima autorit&agrave; e ci&ograve; che comunica in modo autoritario &egrave; considerato un <strong>comandamento </strong>O <strong>legge</strong>. Questa legge comprende atti inalterabili e viene comunemente chiamata <strong>dharma</strong>. Il termine &ldquo;dharma&rdquo; viene utilizzato perch&eacute; questa legge &egrave; intrinsecamente immutabile. Ad esempio, la piccantezza di un peperoncino &egrave; una caratteristica inalterabile, o dharma, del peperoncino. Questa piccantezza &egrave; costantemente presente in tutti i peperoncini. Quindi si pu&ograve; dire che il dharma del peperoncino &egrave; la sua piccantezza. Allo stesso modo, l&rsquo;asprezza &egrave; il dharma del tamarindo, e l&rsquo;amarezza &egrave; il dharma del neem.

  Il Dharma comprende un insieme di regole e regolamenti. Se ci si chiede chi ha il dharma, allora tutto ci&ograve; che viene creato ha il dharma, proprio come il tamarindo, il peperoncino e il neem creati. avere dharma. Poich&eacute; Dio &egrave; il creatore della creazione, non possiede alcun dharma. Il Dio creatore si trova oltre i vincoli del dharma. Sia Atma che Jeevatma, escluso Dio, sono soggetti ai dharma. Inoltre, la Prakruti creata possiede anche il proprio insieme di dharma. Per comprendere Brahma Vidya o educazione spirituale, comprendere i dharma di Atma e Jeevatma diventa cruciale. Jeevatma, specificamente destinato a comprendere Brahma Vidya, <strong>ha solo bisogno di conoscere il dharma dell'Atma.</strong>

  In questo verso viene evidenziato come significativo il metodo per comprendere l&rsquo;Atma. Il Dharma Shastra approfondisce la natura dell'Atma, con il dharma principale delineato come <strong>&ldquo;Amare il Signore tuo Dio &egrave; il primo e il pi&ugrave; grande comandamento&rdquo;. </strong>Il Signore a cui si fa riferimento qui &egrave; principalmente colui che nasce. Ges&ugrave; ha sottolineato che il comandamento supremo &egrave; amare il Dio che &egrave; nato. Tuttavia, sorge una domanda: quando Dio &egrave; il creatore, non creato e privo di dharma, come pu&ograve; anche il nato primariamente (il Signore) essere considerato Dio? Il dilemma &egrave; incentrato sulla questione se l&rsquo;esistente in s&eacute; &egrave; Dio o colui che &egrave; nato &egrave; Dio. La risposta a questo dilemma &egrave; chiarita come segue.

  Dio, il non nato e creatore, non ha subito una nascita. Inizialmente, Dio cre&ograve; Prakruti. Dopo la creazione di Prakruti, Dio (Paramatma) intendeva generare esseri viventi. Una volta formata Prakruti, Dio scelse di non impegnarsi in un&rsquo;azione diretta. Dopo aver creato i cinque elementi &ndash; Cielo, Aria, Fuoco, Acqua e Terra &ndash; Dio desiderava uno stato di inattivit&agrave;. Quando Dio volle manifestarsi in una forma, <strong>Atma </strong>(il Signore) venne all&rsquo;esistenza per creare, governare e, in definitiva, eliminare gli esseri viventi. Atma formula regole e supervisiona il ciclo di vita e morte per tutti gli esseri viventi. Poich&eacute; Atma &egrave; il creatore di tutti gli esseri viventi, &egrave; appropriato riferirsi ad Atma come a Dio. <strong>Di conseguenza, Dio, il creatore di Prakruti, &egrave; riconosciuto come l'entit&agrave; primaria, mentre Dio, il creatore degli organismi viventi all'interno di Prakruti, &egrave; riconosciuto come l'entit&agrave; secondaria.</strong>

  Il primo Dio, riconosciuto come Paramatma, cre&ograve; Atma, &egrave; Dio per Atma e rimane distinto da Atma. Il secondo Dio, conosciuto come Atma, &egrave; il creatore degli esseri viventi. Sebbene sia Paramatma che Atma funzionino come creatori e Dei, <strong>il primo Dio (Paramatma) &egrave; oltre i dharma, mentre il secondo Dio (Atma) aderisce ai dharma. Il Dio senza dharma &egrave; il creatore primario, mentre il Dio con dharma &egrave; il creatore secondario. </strong>Nessuno sa che ci sono due Dei nel mondo. Anche se ci sono due Dei, di cui il primo Dio &egrave; il pi&ugrave; grande, Atma ha un significato speciale per gli esseri umani in quanto creatore degli esseri umani. &Egrave; essenziale che gli esseri umani adorino esclusivamente l&rsquo;Atma. Gli individui sono incoraggiati a comprendere i dharma associati al secondo Dio. &Egrave; importante sottolineare che tutti i dharma rivelati nelle scritture sono incentrati sull'Atma.

  Se una persona desidera adorare e pregare, &egrave; diretta al secondo Dio, Atma. Nessuno pu&ograve; adorare il primo Dio. Non &egrave; possibile per nessuno pregarlo o adorarlo. Per questo motivo l'adorazione e la preghiera al primo Dio sono ritenute inutili <strong>Dio non genera n&eacute; nasce</strong>, come sottolineato nella scrittura finale. La Sura 112 lo rafforza ulteriormente <strong>il primo Dio &egrave; indifferente alle preghiere</strong>. &Egrave; interessante notare che sia i cristiani che i musulmani potrebbero non riconoscere l'esistenza di due Dei (due Allah), poich&eacute; sostengono la fede in un Dio unico che adorano. Tuttavia, la distinzione tra <strong>il Dio da adorare e il Dio creatore iniziale </strong>viene spesso trascurato. Gli ind&ugrave; lo sono inconsapevoli di Dio ma adorano molte divinit&agrave; e camminano del tutto sulla strada sbagliata (sentiero ignorante).

  Il primo Dio trascende il regno dei dharma, rendendolo inconoscibile e al di l&agrave; dell'adorazione. Per adorare Atma, il Dio governato dai dharma, diventano essenziali elementi specifici del corpo umano. Secondo il Dharma Shastra, &egrave; fondamentale per Jeeva adorare Atma, il Dio, usando sia manas che buddhi. Questo diventa un dharma significativo. Il versetto sottolinea, <strong>&ldquo;Ama Atma, il Dio, con tutto il tuo cuore, anima e mente&rdquo;, </strong>dove l'amore &egrave; interpretato come adorazione. Questo &egrave; il comandamento o dharma pi&ugrave; importante<strong>. Interpretando il comandamento come dharma, "tutto il tuo cuore" significa tutto il tuo buddhi, e "tutta la tua anima" si riferisce a te, Jeeva. L'amore, in questo contesto, implica l'adorazione. Nel Dharma Shastra &egrave; detto che dovresti adorare Atma, il Dio, con la tua mente e il tuo buddhi. </strong>Con la menzione del secondo comandamento, approfondiamo cosa comporta.

  Il secondo comandamento insegna: <strong>&ldquo;Ama il tuo prossimo come te stesso&rdquo;. </strong>Questi due comandamenti costituiscono la pietra angolare del Dharma Shastra e degli insegnamenti dei Profeti, come affermato nel versetto. Essenzialmente, servono come fondamento per i dharma nel regno di Brahma Vidya e come guida fornita dai Profeti nell'impartire questi dharma. Il versetto suggerisce sottilmente che l&rsquo;amor proprio e la priorit&agrave; del benessere personale sono tendenze universali. Di fronte alle minacce, gli individui mostrano un istinto innato di salvaguardare la propria vita, spesso facendo di tutto, anche a costo di sacrificare i propri beni. La profonda speranza che gli individui nutrono per la propria vita &egrave; evidente nelle loro preghiere alle varie divinit&agrave; e nella loro volont&agrave; di intraprendere qualsiasi misura per garantire il loro benessere. Questa osservazione evidenzia la tendenza innata degli individui a dare priorit&agrave; all&rsquo;amor proprio. Il versetto insegna: &ldquo;Ama il tuo prossimo come te stesso&rdquo;, sottolineando l&rsquo;imperativo di estendere al prossimo lo stesso grado di cura e considerazione mentre si cerca intrinsecamente il proprio benessere e si valorizza la propria vita.

  Mentre la concezione convenzionale di &ldquo;prossimo&rdquo; si riferisce spesso a qualcuno che vive nella porta accanto, il versetto &ldquo;Ama il tuo prossimo come te stesso&rdquo; ci spinge a estendere l&rsquo;amore a chi ci &egrave; molto vicino, non al nostro vicino di casa. Scavando pi&ugrave; in profondit&agrave;, il versetto induce a riflettere su chi sia veramente il nostro prossimo. Secondo il versetto, a parte il tuo <strong>Atma</strong>, non c'&egrave; nessun altro nel tuo corpo. Se ti identifichi come un'anima (Jeevatma), c'&egrave; un'altra anima simile a te: il secondo Dio, Atma. In totale, ci sono solo tre anime, il che significa due anime oltre a te, di cui una &egrave; Paramatma. Tuttavia, riferirsi al Paramatma come al tuo prossimo non &egrave; pratico poich&eacute; Egli &egrave; onnipresente e onnipervadente. Escludendo Paramatma, l'Atma rimanente &egrave; il tuo prossimo. Questo concetto &egrave; in linea con la comprensione che, ad eccezione di Atma e Paramatma, tutta la creazione &egrave; considerata Prakruti femminile, con Atma e Paramatma che rappresentano l'aspetto maschile.

  Atma, essendo l'unica entit&agrave; maschile affine a te, &egrave; giustamente considerata il tuo prossimo. Il primo Dio, Paramatma, si trova oltre il regno dell'adorazione, delle relazioni e dei dharma, rendendo Atma il legittimo soggetto di adorazione. Le scritture divine affermano costantemente la dignit&agrave; di adorare Atma, etichettandolo come <strong>&ldquo;il tuo Allah&rdquo;. </strong>Questa dichiarazione &egrave; ribadita nella Sura 6:102, 3:18 e 16:51. Il significato dei due comandamenti, &ldquo;Ama il tuo prossimo Atma come te stesso&rdquo;, &egrave; sottolineato nel Dharma Shastra. <strong>Adorare Atma emerge come il dovere primario di guru, predicatori e profeti. </strong>Ci&ograve; &egrave; evidente nella risposta che Ges&ugrave; diede a un fariseo interrogato sul dharma pi&ugrave; fondamentale della legge. Riflettere su questo verso spinge a una considerazione pi&ugrave; profonda dell&rsquo;entit&agrave; verso cui stai dirigendo la tua adorazione.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 47,
verse: ` <b> 46) Il Vangelo di Matteo, capitolo 23, versetti 8, 9 e 10.</b>`,
meaning: ` <b>
(23:8) “Ma tu non ti chiameremo ‘Rabbi’, perché hai un solo Maestro e sei tutto fratelli.
<br><br>
(23:9) E non chiamate nessuno sulla terra “padre”, perché avete un solo Padre, ed Egli Egli è presente nel paraloka.
<br><br>
(23:10) Né dovete essere chiamati istruttori, perché avete un Istruttore, il Messia. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Alcuni potrebbero riferirsi a un predicatore come a un padre o considerare i guru che predicano alla stregua di un padre. Tuttavia, il versetto afferma che nessuno dovrebbe essere chiamato predicatore. Dice di non chiamare nessuno Rabbi, poich&eacute; c'&egrave; un solo maestro e tutti gli altri sono fratelli, come affermato nel versetto. Un predicatore &egrave; qualcuno che insegna, ma il versetto si riferisce specificamente a chi insegna la saggezza divina. Secondo il versetto, solo una persona conosce la saggezza divina e nessun altro. Perch&eacute; gli altri non lo sanno? Chi &egrave; colui che lo sa? La risposta a queste domande &egrave; la seguente.

  La saggezza di Dio non &egrave; nota a nessuno tranne che a Dio, come affermato nelle divine Scritture. Nelle divine Scritture viene anche menzionato che Dio non ha trasmesso la Sua saggezza a nessun essere umano. Ci&ograve; significa che nessuno conosce la saggezza di Dio. Pertanto, nessuno pu&ograve; insegnare la saggezza di Dio. Quindi, non dovresti essere chiamato Rabbi, come affermato nel versetto. Solo Dio pu&ograve; insegnare la saggezza di Dio. Pertanto, nel versetto si dice che il tuo maestro &egrave; solo uno, ed &egrave; Dio. Un essere umano non &egrave; un maestro (insegnante) e tutti gli esseri umani sono fratelli, come affermato nel versetto.

  Tutti hanno genitori biologici. Tutti credono che i genitori visibili fin dall'infanzia siano i veri genitori. Molti anziani consigliano di rispettare i propri genitori. Tutti rispettano i propri genitori biologici. Si pu&ograve; dire che non esistono altre figure materne o paterne oltre ai genitori visibili. Tutto questo &egrave; legato al mondo. Ogni uomo per&ograve; ha genitori invisibili e sconosciuti secondo la sapienza divina. Se viene chiesto se i genitori visibili sono veri genitori o se i genitori invisibili sono veri genitori, diventa evidente che i genitori invisibili sono veri genitori. La ragione per cui diciamo questo &egrave; che il padre &egrave; il donatore del seme di ogni essere umano. Di conseguenza, <strong>Dio (Atma), il padre invisibile, &egrave; il donatore di semi di tutti gli esseri viventi. </strong>Quindi il padre invisibile diventa il vero padre. Che lo sappiamo o no, il nostro padre naturale &egrave; Atma. Perci&ograve;, <strong>non chiamare nessun uomo tuo padre sulla terra, perch&eacute; uno &egrave; tuo padre, che &egrave; in paraloka</strong>, come detto nel versetto.

  Il verso afferma che il predicatore visibile non &egrave; il vero predicatore, il padre biologico non &egrave; il padre reale e il guru visibile non &egrave; il guru giusto. Molti insegnano qualcosa e sono chiamati guru. Se vieni chiamato guru, allora stai interpretando un ruolo che non &egrave; adatto a te. Solo Dio pu&ograve; venire sulla terra come Guru in qualsiasi momento. Quando Dio si incarna come essere umano, diventa il Guru e insegna la saggezza. Pertanto, dovremmo capire che il <strong>incarnazione di Dio come uomo sulla terra &egrave; il vero Guru.</strong>
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 48,
verse: ` <b>47) Il Vangelo di Matteo, capitolo 23, versetto 15.</b>`,
meaning: `  <b>
(23:15) “Guai a voi, dottori della legge e farisei, ipocriti! Viaggi per terra e per mare per conquistare un singolo convertito, e quando ci sei riuscito, lo rendi due volte più figlio dell'inferno di te.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La religione non esisteva fino a tremila anni dopo il Kali Yuga. Duemila anni fa, quando nacque il cristianesimo, i cristiani emersero inizialmente come gruppi e in seguito formarono una comunità cristiana. Dopo qualche tempo, la comunità cristiana affermò di essere una religione cristiana. Nacque così la prima religione. Dopo aver affermato di essere una religione cristiana, hanno cercato di espandere la loro fede. Altri successivamente si identificarono come una religione in base ai loro insegnamenti. Pertanto, le religioni furono create una dopo l'altra. Molto presto si formarono sulla terra dodici religioni. Dopo la creazione delle religioni, alcune persone furono coinvolte nell’espansione della propria fede. Viaggiavano per terra e per mare per convertire altri alla loro religione.

  La religione è creata dalla volontà delle persone, non dalla saggezza di Dio. In queste religioni create dalle persone sembra esserci saggezza divina, ma la saggezza in esse è contraria alla saggezza rivelata da Dio. Pertanto, una persona che fa affidamento sulla saggezza divina e sulle Scritture, indipendentemente dalla religione, comprenderà gli insegnamenti e la saggezza di Dio. Se una persona è legata alla religione e afferma di appartenere a uno specifico gruppo religioso, capirà la saggezza di Maya. Se una persona abbraccia la religione, rimarrà invischiata nel peccato. D'altra parte, una persona senza affiliazione religiosa potrà entrare nel regno di paraloka.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 49,
verse: `<b>48) Il Vangelo di Matteo, capitolo 24, versetto 35.</b>`,
meaning: ` <b>
(24:35) Il cielo e la terra passeranno, ma le mie parole non passeranno mai.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma (Dio) non parla. L'Atma, che risiede nel corpo, pu&ograve; parlare. Atma &egrave; il secondo creatore e il secondo Dio. L'Atma, presente nel corpo, comunica attraverso la parola. Il secondo Dio (Atma) impartisce molta saggezza all'umanit&agrave;. La saggezza insegnata in questo modo viene trasmessa attraverso le parole. Gli insegnamenti di Atma provenienti dal corpo, sotto forma di parole, non scompariranno mai, anche se il cielo e la terra dovessero scomparire, come affermato nel verso. Ci&ograve; che &egrave; importante notare qui &egrave; <strong>che il cielo e la terra menzionati passeranno, ma le mie parole non passeranno mai. </strong>Ma si pu&ograve; dire che il cielo e la terra non passano mai. Tuttavia, il versetto sembra trasmettere che il cielo e la terra passeranno. Pertanto, dovremmo capire che sia il cielo che la terra menzionati nel versetto non sono il cielo e la terra che vediamo. Il cielo e la terra descritti nel versetto sono deperibili. La terra e il cielo che non periscono mai sono di un tipo, mentre la terra e il cielo deperibili sono di un altro tipo. In Prakruti, che ha la forma del corpo umano, ci sono il cielo, l'aria, il fuoco, l'acqua e terra. Tutti loro, il primo cielo, l'ultima terra e il resto dell'aria, del fuoco e dell'acqua, nella forma del corpo sono deperibili. <strong>Il corpo umano perir&agrave;, ma la saggezza impartita dall&rsquo;uomo non passer&agrave; mai.</strong>
</div></div>
</span>`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 50,
verse: `<b> 49) Il Vangelo di Matteo, capitolo 24, versetto 42. </b>`,
meaning: ` <b>
(24:42) Vegliate dunque, perché non sapete in quale giorno il vostro Signore verrà.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ogni volta che c&rsquo;&egrave; una minaccia ai dharma di Dio sulla Terra, e i dharma di Satana si diffondono ampiamente, Dio invia una parte di Se Stesso sulla terra per proteggere i Suoi comandamenti (dharma). Ogni volta che c&rsquo;&egrave; bisogno, Dio deve venire come essere umano. Krishna nel Dvapara Yuga e il Signore Ges&ugrave; nel Kali Yuga vennero in quel modo. Sorprendentemente, siamo riusciti a identificarli dopo il loro arrivo e la loro partenza, ma quando erano sulla Terra, non siamo riusciti a identificare chi fossero. Nessuno riconobbe quando Dio stesso venne come Signore. Persino coloro che videro la Sua gloria non potevano sapere che era Dio ma pensavano che fosse grande. Nel Dvapara Yuga Krishna disse: <strong>&ldquo;Verr&ograve; quando i dharma saranno contaminati&rdquo;. </strong>Venne di nuovo come Signore Ges&ugrave; e ribad&igrave; i Suoi dharma. Non ci sar&agrave; alcuna differenza nei comandamenti che Egli diede, n&eacute; nel Dvapara Yuga n&eacute; nel Kali Yuga. Ma non ci sono somiglianze nei loro nomi, vite e stili di vita. Quindi Satana enfatizz&ograve; le loro differenze esterne e ingann&ograve; gli esseri umani facendogli non capire che entrambi erano uguali. L&rsquo;uomo ha bisogno di un po&rsquo; di saggezza per sapere chi &egrave; venuto, chi verr&agrave;, quando &egrave; venuto e quando potr&agrave; venire. Finch&eacute; l&rsquo;uomo &egrave; nell&rsquo;ignoranza, non conosce la venuta di Dio e rimane inconsapevole anche dopo che Dio &egrave; venuto e se n&rsquo;&egrave; andato. Pertanto, se le persone vogliono conoscere l&rsquo;arrivo di Dio e riconoscerLo, devono possedere la saggezza relativa a Dio. Al giorno d&rsquo;oggi, la saggezza di Dio non &egrave; conosciuta, mentre la saggezza di Satana &egrave; diffusa. Quindi, <strong>&laquo;Non sai in quale giorno il tuo Signore verr&agrave;&raquo; </strong>diceva il verso<strong>. &ldquo;Rimanete svegli per conoscerlo&rdquo;, </strong>&egrave; menzionato anche nel versetto. Qui <strong>&ldquo;stare svegli&rdquo; significa avere saggezza.</strong>
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 51,
verse: ` <b>50) Il Vangelo di Matteo, capitolo 26, versetti 26, 27 e 28.</b>`,
meaning: `<b>
(26:26) Mentre mangiavano, Gesù prese il pane e, dopo aver reso grazie, lo spezzò e lo diede ai suoi discepoli, dicendo: «Prendete e mangiate; questo è il mio corpo”.
<br><br>
(26:27) Poi prese un calice e, dopo aver reso grazie, lo diede loro, dicendo: «Bevetene tutti.
<br><br>
(26:28) Questo è il mio sangue del patto (la saggezza di Dio senza i vincoli dell’ignoranza), che viene versato per molti per il perdono dei peccati. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mentre Ges&ugrave; e i suoi dodici discepoli mangiavano, Ges&ugrave; prese il pane, lo benedisse, lo spezz&ograve;, lo diede ai suoi discepoli e disse: <strong>&ldquo;Prendete e mangiate; questo &egrave; il mio corpo&rdquo;. </strong>Prese anche il succo d'uva in una tazza e disse: <strong>&ldquo;Bevetene tutti; questo &egrave; il mio sangue&rdquo;. </strong>Paragon&ograve; il succo d'uva al Suo sangue ed elabor&ograve; ulteriormente, affermando: <strong>&ldquo;Questo &egrave; il mio sangue dell&rsquo;alleanza, versato per molti in remissione dei peccati&rdquo;. </strong>Queste parole apparentemente ordinarie di Ges&ugrave; dovrebbero essere considerate tra i pi&ugrave; importanti dei Suoi insegnamenti. Purtroppo alcuni cristiani, ignari dell&rsquo;essenza di queste parole pronunciate durante i pasti, non riescono a coglierne il significato. <strong>Alcuni interpretano che Ges&ugrave; abbia pronunciato queste parole riguardo al Suo passato o futuro, sebbene riguardassero il presente.</strong>

  Ges&ugrave; diede del succo d&rsquo;uva in una coppa e disse: &ldquo;Questo &egrave; il mio sangue&rdquo;, ma non specific&ograve; che era il sangue del Suo corpo versato sulla croce. Tuttavia, molti predicatori cristiani attribuiscono il sangue menzionato in questo versetto al sangue del corpo di Ges&ugrave; versato sulla croce, sostenendo che i peccati di una persona sono perdonati perch&eacute; Ges&ugrave; ha versato il Suo sangue per i peccatori. Esiste per&ograve; una discrepanza tra ci&ograve; che dice l&rsquo;uomo e ci&ograve; che ha detto Ges&ugrave;. Ges&ugrave; non ha menzionato il sangue del Suo corpo nel versetto. In questi casi, sarebbe ingiusto dire che Ges&ugrave; ha versato il Suo sangue per i peccatori. Quel giorno, coloro che misero Ges&ugrave; in croce, Gli fecero versare il Suo sangue e causarono la Sua morte, commisero un peccato terribile e imperdonabile. Tuttavia, sarebbe errato affermare che i peccati delle persone sono stati perdonati e saranno perdonati con la morte di Ges&ugrave;.

  Quando Ges&ugrave; diede il succo d'uva ai suoi discepoli e disse: <strong>&laquo;Questo &egrave; il sangue dell'alleanza, versato per molti in remissione dei peccati&raquo; </strong>Ha usato il tempo presente, indicando che stava accadendo in quel momento, e non ha menzionato un evento futuro. Non alludeva al futuro spargimento del Suo sangue sulla croce. Sarebbe quindi errato affermare che il sangue versato sulla croce fosse per il perdono dei peccati. <strong>Coloro che sono responsabili del fatto che Ges&ugrave; abbia versato il Suo sangue sulla croce hanno ricevuto il peccato, non il perdono dei peccati. </strong>Ci&ograve; a cui Ges&ugrave; si riferiva era il sangue del patto, a significare la saggezza di Dio, che non &egrave; vincolata dall&rsquo;ignoranza. Insegnava quotidianamente questa saggezza divina, paragonandola allo spargimento del sangue dell'alleanza dalla Sua bocca. Ogni giorno impartiva il fuoco della saggezza per bruciare i peccati umani, paragonando i Suoi insegnamenti al sangue del patto che scorreva dalla Sua bocca. Il vero significato di questo versetto pu&ograve; essere compreso solo attraverso un'attenta analisi.

  Il significato dell&rsquo;affermazione &egrave; poco compreso perch&eacute; la parola &ldquo;patto&rdquo; &egrave; spesso omessa dalla frase &ldquo;sangue del patto&rdquo; e viene presa in considerazione solo la parola &ldquo;sangue&rdquo;. Non ci si rende conto che &ldquo;patto&rdquo; significa &ldquo;saggezza con dharma&rdquo;. Un altro motivo per menzionare &ldquo;sangue&rdquo; nel versetto non &egrave; il sangue fisico. Il corpo fisico &egrave; pieno di sangue e finch&eacute; c'&egrave; sangue nel corpo, il corpo &egrave; vivo. Se il corpo versa il suo sangue, il corpo muore. In base a ci&ograve;, si sa che l'essenza del corpo &egrave; il sangue. Mentre mangiavano, Ges&ugrave; prese prima il pane e lo diede ai suoi discepoli dicendo: <strong>&ldquo;Prendete e mangiate; questo &egrave; il mio corpo&rdquo;. </strong>Qui ha paragonato il pane al suo corpo. Poi prese del succo d'uva in una coppa e lo diede loro dicendo: <strong>&ldquo;Questo &egrave; il mio sangue del patto&rdquo;. </strong>Ha detto del pane: &ldquo;Questo &egrave; il mio corpo. Mangia questo." Ges&ugrave; paragon&ograve; il pane al Suo corpo e ordin&ograve; loro di mangiarlo. Se mangi il pane, allora mangi il corpo di Ges&ugrave;. La base e l'essenza del corpo &egrave; il suo sangue.

  Confrontando la saggezza divina con il sangue del patto, il corpo del pane pu&ograve; essere paragonato alla Sacra Scrittura e alla saggezza di Dio. In questo modo, <strong>il corpo contiene sangue e la Scrittura contiene saggezza. Mangiare il corpo significa leggere la Scrittura e leggerla riveler&agrave; l'essenza della sua saggezza. Bere sangue significa comprendere la saggezza. </strong>Sfortunatamente, spesso le persone si concentrano solo sul pane e sull'uva succo che Ges&ugrave; diede, senza rendersi conto che il pane rappresenta la divina scrittura, e il succo d'uva rappresenta la sua saggezza. <strong>Ges&ugrave; paragon&ograve; le Scritture al Suo corpo (pane) e la saggezza in esso contenuta al sangue (succo d'uva). Lo spargimento del sangue del patto si riferisce alla saggezza con i dharma insegnati in quel momento. </strong>Molti non sono riusciti a riconoscere che Ges&ugrave; paragon&ograve; le Scritture al Suo corpo e la sua saggezza al sangue, portando all&rsquo;errata convinzione che il sangue versato sulla croce fosse per il perdono dei peccati.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 52,
verse: `<b> 51) Il Vangelo di Matteo, capitolo 28, versetto 18.</b>`,
meaning: `<b>
(28:18) Allora Gesù venne da loro e disse: “Mi è stata data ogni autorità in paraloka e sulla terra. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In telugu, "Loka" significa avere esperienze. A Loka incontriamo sia difficolt&agrave; che piaceri. L'esperienza del piacere &egrave; chiamata Svarga Loka (paradiso), mentre l'esperienza delle difficolt&agrave; &egrave; chiamata Naraka Loka (inferno). Loka non &egrave; un paese separato o un luogo speciale; piuttosto, &egrave; la somma di tutte le esperienze. Secondo le proprie esperienze di piacere e dolore, Loka &egrave; diviso in paradiso e inferno. Tutte le esperienze del paradiso e dell'inferno hanno luogo sulla terra e non sono luoghi fisici separati. Quindi, a seconda delle esperienze, potremmo chiamarli paradiso o inferno, ma in realt&agrave; sulla terra esistono sia il paradiso che l&rsquo;inferno.

  Esistono due tipi di loka sulla terra: Ihaloka e Paraloka. <strong>Ihaloka implica esperienze, mentre Paraloka non ha alcuna esperienza. </strong>Sia Ihaloka che Paraloka esistono sulla terra. &lsquo;Para&rsquo; significa diverso o separato. Paraloka significa qualcosa di diverso dalle esperienze. In altre parole, Paraloka non ha esperienza ed &egrave; distinto dal loka. In telugu, "essere umano" significa colui che acquisisce esperienze attraverso manas (mente). Pertanto, tutte le persone sulla terra appartengono a Ihaloka. Nessun uomo ha visto Paraloka. Un uomo che indossa un corpo non &egrave; mai privo di esperienze. Pertanto si pu&ograve; dire che ogni persona appartiene al loka e vive a Ihaloka. Si pu&ograve; dire che chi non ha esperienza &egrave; a Paraloka. <strong>"Tutta l'autorit&agrave; a Paraloka e sulla terra mi &egrave; stata data", ha detto </strong>il versetto sopra.

  Se Ges&ugrave; fosse un uomo comune, sarebbe a Ihaloka e non conoscerebbe Paraloka. Nonostante sembrasse un uomo comune, il suo corpo aveva solo Atma e non Jeevatma. Atma viveva nel corpo di Ges&ugrave; e fingeva di essere un Jeevatma. Sia Atma che Jeevatma esistono in tutti gli esseri umani, dove Atma svolge tutte le funzioni del corpo e Jeevatma sperimenta gioia e dolore al lavoro. In questo modo, si pu&ograve; dire che Jeevatma nel corpo di una persona a volte &egrave; in paradiso e altre volte all&rsquo;inferno. Ma quando Dio viene come essere umano, il Suo corpo non ha Jeevatma. Sebbene l'Atma operi nel corpo del Figlio di Dio, non sperimenta nulla. Pertanto si dice che sia a Paraloka. Poich&eacute; Ges&ugrave; non era un uomo comune, ha autorit&agrave; sulla terra (Ihaloka) e Paraloka. Lo Spirito Santo, Paramatma, diede ad Atma (Ges&ugrave;) completa autorit&agrave;. Ges&ugrave;, che &egrave; Atma, &egrave; anche il capo della saggezza divina. La saggezza di Dio &egrave; ora nota a chiunque tranne che a Dio. Pertanto, il tema delle anime &egrave; sconosciuto alle persone. Ges&ugrave; insegn&ograve; la saggezza di tre anime e ordin&ograve; ai Suoi discepoli, che conoscevano la saggezza delle anime, di insegnare la saggezza di Atma a tutte le persone.
</div></div>
</span>
`
},
{
chapterName: "Il Vangelo secondo Matteo",
chapterNumber: 2,
pageNumber: 53,
verse: ` <b> 52) Il Vangelo di Matteo, capitolo 28, versetti 19 e 20.</b>`,
meaning: ` <b>
(28:19) Andate dunque e ammaestrate tutte le nazioni, battezzandole nel nome del Padre e del Figlio e dello Spirito Santo.
<br><br>
(28:20) Insegnando loro a obbedire a tutto ciò che vi ho comandato. E sicuramente sono sempre con te, fino alla fine dell'era (Yuga).     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il Vangelo di Matteo ha 28 capitoli. Gli ultimi versetti, 19 e 20 del capitolo 28, contengono il segreto di tutta l'educazione spirituale. L'informazione sulle tre anime menzionate nel versetto 19 &egrave; la saggezza pi&ugrave; importante nelle Scritture. In questo versetto, la parola &ldquo;Padre&rdquo; &egrave; usata prima della parola &ldquo;Figlio&rdquo;, richiedendo un&rsquo;attenta considerazione per capirla. Coloro che riflettono su questo sapranno che la sequenza &egrave; il Figlio, il Padre e lo Spirito Santo. Per spiegare ulteriormente, <strong>bisogna capire che il Figlio &egrave; Jeevatma, il Padre &egrave; Atma e lo Spirito Santo &egrave; Paramatma. </strong>Non ci sono altre anime al mondo oltre a queste tre. Secondo il teorema Thraitha, queste tre anime sono Jeevatma, Atma e Paramatma.

  Battesimo significa upadesa. In telugu, "Upa" (sub) significa adiacente. Upadesa significa un paese vicino o adiacente. Pi&ugrave; in dettaglio, significa &ldquo;lasciare il paese in cui ti trovi adesso e ottenere il permesso di andare nel paese adiacente o vicino&rdquo;. Un ufficiale deve prima dare il permesso di recarsi nel paese vicino. Quell'ufficiale pu&ograve; essere chiamato un Guru. Guru significa colui che &egrave; il capo del paese vicino o Paraloka. Non importa quanti guru ci siano sulla terra, Dio, il capo di Paraloka, &egrave; il vero Guru. Dio, il sovrano di Paraloka, &egrave; il vero Guru che ci d&agrave; il vero battesimo quando viene sulla terra come uomo. Sebbene ci siano molti guru sulla terra, sono tutti guru solo di nome. Il battesimo che danno &egrave; solo di nome.

  Quando Dio, il vero Guru, non &egrave; sulla terra come essere umano, secondo la tradizione di saggezza, i predicatori devono fare alcuni discepoli e dare loro upadesa. Upadesa &egrave; come il permesso per il paese vicino. Nel processo upadesa, il guru istruisce i discepoli con l'acqua, con un mantra, una parola o Vibhuti (cenere sacra). Upadesa &egrave; il permesso per Paraloka, e la parola o l'acqua &egrave; come un biglietto che riconosce l'ingresso a Paraloka. La maggior parte dei guru usa un mantra o una parola nel processo upadesa. Allo stesso modo, Ges&ugrave; disse ai suoi discepoli: <strong>&ldquo;Andate e fate discepoli persone di tutte le nazioni&rdquo;. </strong>Inoltre disse ai Suoi discepoli di battezzarli quando fossero diventati discepoli. Nel dare ai discepoli il permesso nel processo upadesa, Egli disse: &ldquo;Battezzateli nel nome delle tre anime: il Padre, il Figlio e lo Spirito Santo&rdquo;. Secondo la tradizione sapienziale il battesimo dovrebbe essere fatto in questo modo. Quindi, quando Giovanni, un Guru, diede il battesimo, amministr&ograve; il battesimo con l'acqua. Secondo questo metodo anche Ges&ugrave; ricevette upadesa da Giovanni. In quel momento Giovanni vide Ges&ugrave; e parl&ograve;.

  Questo &egrave; ci&ograve; che dice il Vangelo di Matteo nei versetti 3:14 e 3:15. <strong>Quando Ges&ugrave; venne a Lui, Giovanni cerc&ograve; di dissuaderlo, dicendo: &ldquo;Ho bisogno di essere battezzato da te, e Tu vieni da me?&rdquo; Ges&ugrave; rispose: &ldquo;Lascia fare per ora; &egrave; giusto che facciamo questo per adempiere ogni giustizia (saggezza)&rdquo;. </strong>Anche Ges&ugrave; disse che bisogna ricevere il battesimo dal Guru secondo la tradizione della saggezza. Ho detto la stessa cosa anche del battesimo. Ges&ugrave; autorizz&ograve; i Suoi discepoli a dare il battesimo e disse: &ldquo;Tutte le persone hanno bisogno di essere battezzate, non solo una casta o un gruppo&rdquo;. Disse loro anche di dare un documento d'ingresso del Padre, del Figlio e dello Spirito Santo. Ges&ugrave; disse ai Suoi discepoli di compiere l'opera perch&eacute; Dio non poteva sempre essere sulla terra come uomo per dare upadesa. Oltre al battesimo, Ges&ugrave; disse anche ai Suoi discepoli di insegnare loro a obbedire a tutte le cose che aveva detto ai Suoi discepoli.

  Ges&ugrave; disse anche: &ldquo;Io sono sempre con voi&rdquo;, senza suscitare dubbi nei discepoli sul fatto che non fossero guru. In particolare ha detto: <strong>&ldquo;Io sono con te sempre, fino alla fine dello yuga.&rdquo; </strong>Coloro che conoscono gli yuga potrebbero porre una domanda quando sentono ci&ograve; che ha detto Ges&ugrave;. Yuga (era) non finisce e un altro yuga inizia alla fine dell'attuale yuga. In tal caso, perch&eacute; Ges&ugrave; disse che c&rsquo;&egrave; fine agli yuga, quando per essi non c&rsquo;&egrave; fine? La risposta &egrave; la seguente. Il tempo &egrave; eterno e dura per sempre, proprio come Dio (Paramatma). Anche il tempo, essendo un soprannome di Dio, &egrave; eterno. Poich&eacute; il tempo &egrave; Paramatma, le tre anime prendono il nome dal tempo. Paramatma &egrave; diviso in tre anime: Jeevatma, Atma e Paramatma. I nomi passato, futuro e presente vengono dati al tempo in modo che il tempo contenga questi tre nomi. Al tempo viene dato il nome di &ldquo;yogam&rdquo;, necessario per raggiungere Dio. In questo modo, i quattro nomi vengono dati al tempo e la parola &ldquo;yogam&rdquo; viene aggiunta alla fine di tutti e quattro i nomi per indicare che &ldquo;yogam&rdquo; &egrave; necessario per raggiungere Dio.

  Il tempo &egrave; diviso in quattro parti chiamate rispettivamente Kruta, Traita, Dvapara e Kali. La parola "yogam" viene aggiunta alla fine di ciascun nome, creando i nomi Kruta Yuga, Traita Yuga, Dvapara Yuga e Kali Yuga. <strong>Kruta significa colui (Atma) che fa. Traita significa tre. Dvapara significa colui (Paramatma) che &egrave; separato dai due. Kali significa colui (Jeevatma) che viene distrutto. </strong>La prima scrittura divina si riferisce a queste tre anime come <strong>Kshara, Akshara e Purushottama</strong>. In telugu, Kshara significa Jeevatma distruttibile, Akshara significa Atma indistruttibile e Purushottama significa Paramatma, che &egrave; superiore sia a Jeevatma che ad Atma. Nella Scrittura divina finale, versetto 50:21, questi tre vengono chiamati <strong>il passeggero, l'autista e il testimone</strong>, e nella seconda divina scrittura, <strong>il Figlio, il Padre e lo Spirito Santo. Yogam </strong>&egrave; necessario comprendere questi tre maschi (Purusha), motivo per cui la parola &ldquo;yogam&rdquo; &egrave; aggiunta alla fine dei quattro nomi yuga. Attraverso yogam, Jeevatma pu&ograve; conoscere se stesso; quindi &egrave; chiamato Kali Yogam. Con yogam si conoscer&agrave; l'Atma; quindi &egrave; chiamato Kruta Yogam. Con yogam si pu&ograve; raggiungere Paramatma; pertanto &egrave; chiamato Traita Yogam e Dvapara Yogam. Coloro che sono ricchi di saggezza divina hanno dato questi nomi. Nel corso del tempo, Traita divenne Treta e la parola yogam divenne yuga. Ecco perch&eacute; nel versetto <strong>&ldquo;fine dello yuga&rdquo; </strong>viene utilizzato al posto di <strong>'fine dello yogam.' </strong>Quando viene usata la parola corretta, l&rsquo;affermazione di Ges&ugrave; &ldquo;Sar&ograve; sempre con voi fino alla fine dello yogam&rdquo; pu&ograve; essere interpretata come &ldquo;Io sono con voi sempre fino alla conclusione dello yogam&rdquo;. Quando Jeevatma raggiunge la fine dello yogam, si unisce a Dio. Quando Dio e Jeeva sono separati, yogam &egrave; necessario per l'unione con Dio e Dio sar&agrave; presente con Jeevatma. <strong>Una volta completato lo yogam, Jeevatma si fonder&agrave; con Dio</strong>, e non ci sar&agrave; pi&ugrave; bisogno che Dio sia presente con Jeevatma. Questo &egrave; il significato dietro l'affermazione <strong>&ldquo;fino alla fine dello yuga&rdquo;.</strong>
  </div></div>
</span>
`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 54,
verse: ` <b>1) Il Vangelo di Marco, capitolo 2, versetti 19 e 20.</b>`,
meaning: `<b>
(2:19) Come possono digiunare gli ospiti dello sposo mentre lui è con loro? Non possono, finché lo hanno con loro.
<br><br>
(2:20) Ma verrà il tempo in cui lo sposo sarà loro tolto, e in quel giorno digiuneranno. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Alcune persone vennero da Gesù e chiesero: “Perché i discepoli di Giovanni e i discepoli dei farisei digiunano, ma non i tuoi?” Gesù rispose con i seguenti versetti. In questo contesto, il digiuno si riferisce all’astensione dal cibo, un significato comune nel mondo. In telugu, la parola per lo sposo è "Pellikoduku", che si traduce in "figlio del matrimonio". In telugu, la frase "figlio del matrimonio" ha un significato speciale perché la parola "matrimonio" (o "Pelli" in telugu) simboleggia Dio in senso spirituale. Pertanto, il “figlio del matrimonio” si riferisce al Figlio di Dio. Quando Gesù, il Figlio di Dio, è con i Suoi seguaci, sperimenteranno la gioia e non il digiuno. Tuttavia, quando lo sposo (il Figlio di Dio) sarà loro tolto, quelli che erano con lui digiuneranno con dolore perché Egli si allontana da loro. Allo stesso modo, i discepoli di Gesù non digiuneranno finché Egli sarà presente con loro. Quando Gesù è assente, digiuneranno nel dolore. La frase “sposo” (il figlio del matrimonio) dovrebbe essere intesa come riferita al Figlio di Dio.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 55,
verse: `<b>2) Il Vangelo di Marco, capitolo 4, versetti 38 e 39.</b>`,
meaning: ` <b>
(4:38) Gesù era a poppa e dormiva su un cuscino. I discepoli lo svegliarono e gli disse: "Maestro, non ti importa se affoghiamo?"
<br><br>
(4:39) Si alzò, sgridò il vento e disse alle onde: “Silenzio! Stai fermo!” Poi il vento si è calmato ed è stato tutto calmo. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mentre Gesù e i suoi discepoli stavano attraversando il mare su una piccola barca, incontrarono una tempesta e la barca cominciò ad imbarcare acqua a causa delle onde. I discepoli erano terrorizzati e temevano di annegare. Svegliarono Gesù e lo informarono della situazione pericolosa. Gesù si alzò, sgridò il vento e comandò alle onde di calmarsi. Il vento cessò e la calma scese sul mare. I discepoli rimasero stupiti e si chiedevano tra loro: «È un grande miracolo: come è potuto accadere?». Riconoscevano il potere di Gesù, ma non ne capivano appieno il motivo. C’è una notevole saggezza in questo incidente.
  Gesù non è un uomo comune; va sottolineato che Egli è Dio, che appariva e si comportava come un uomo comune. Quando Dio, lo Spirito Santo, viene in forma umana, nessuno può riconoscerlo. La nascita di Dio è un segreto quando Egli è un essere umano, e nessuno potrà mai conoscerlo attraverso la conoscenza mondana. Potrebbe essere possibile conoscerlo solo attraverso la saggezza. Ci sono due modi per riconoscere l’incarnazione di Dio in base alla saggezza: 1) Si può sapere che c’è l’incarnazione di Dio ovunque i suoi dharma, che nessuno ha spiegato, vengono rivelati scientificamente. 2) Si può dire che il Paramatma è in forma umana ovunque sia governata Prakruti. Nessuno può riconoscere l’incarnazione di Dio senza questi due metodi.

  I Devata si inchinarono a Ravana Brahma nel Traita Yuga. Quando ordinò i nove pianeti, si seppe che non era un uomo comune. Ravana Brahma insegnò i dharma divini, che erano sconosciuti a chiunque, e fece sì che le persone li praticassero. Pertanto, si è saputo che Ravana Brahma è l’incarnazione di Dio. Allo stesso modo, si seppe che Krishna nel Dvapara Yuga era l’incarnazione di Dio quando comandò il Sole e insegnò i dharma nella Bhagavad-Gita. Gesù, che venne come uomo 2.000 anni fa, fu riconosciuto come Dio in due modi: comandando il mare e insegnando i dharma divini. La tempesta durante il viaggio in mare sembrava servire a far prendere coscienza di chi fosse Gesù. Anche se l’incarnazione di Dio è segreta, Dio ha fornito questa opportunità di saperlo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 56,
verse: `<b> 3) Il Vangelo di Marco, capitolo 5, versetti 38, 39, 40, 41, 42 e 43.</b>`,
meaning: `<b>
(5:38) Quando giunsero a casa del capo della sinagoga, Gesù vide un trambusto, con persone che piangevano e si lamentavano ad alta voce.
<br><br>
(5:39) Egli entrò e disse loro: “Perché tutto questo trambusto e questo lamento? Il bambino non è morto ma dorme”.
<br><br>
(17:40) Ma loro risero di lui. Dopo averli messi fuori tutti, prese il padre del bambino e la madre e i discepoli che erano con lui andarono dov'era il bambino.
<br><br>
(5:41) La prese per mano e le disse: "Talitha koum!" (che significa “Bambina, ti dico, alzati!”).
<br><br>
(5:42) Immediatamente la ragazza si alzò e cominciò a camminare (aveva dodici anni). A questo punto rimasero completamente stupiti.
<br><br>
(5:43) Diede ordini severi di non farlo sapere a nessuno e disse loro di darle qualcosa da mangiare.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  È una grande sorpresa quando una persona ritorna in vita dopo essere stata dichiarata morta. Gesù riportò in vita diverse persone durante la Sua vita. Non solo ha resuscitato altri, ma è anche risorto lui stesso dai morti. Se contempliamo questo evento, alcuni misteri sconosciuti verranno svelati. Esistono quattro tipi di morte: morte tempestiva (morte naturale), morte prematura, morte temporanea e morte definitiva. Una volta che una persona sperimenta la morte finale, non rinascerà; invece, ottengono la liberazione o moksham. La morte naturale è la forma più comune di morte, in cui una persona lascia il proprio corpo attuale e passa alla nascita successiva. Non esiste altra scelta che andare alla nascita successiva con morte naturale.

  In caso di morte prematura la persona non muore del tutto ma perde metà del proprio corpo e continua a vivere con la restante metà. Anche se può sembrare incredibile, questo è ciò che accade. Il corpo umano è composto da due parti. Il corpo umano e i corpi di tutti gli esseri viventi sono costituiti sia da parti fisiche (visibili) che non fisiche (sottili). Nel caso del corpo umano, il corpo fisico è composto da dieci parti, mentre il corpo sottile è composto da quindici parti. In caso di morte prematura, una persona lascia il proprio corpo fisico composto da dieci parti e continua ad esistere con il proprio corpo sottile composto da quindici parti. Di conseguenza, qualcuno che ha sperimentato una morte prematura può essere considerato “mezzo morto”. Quando il resto del corpo sottile alla fine muore, ciò porta alla morte naturale e la persona passa alla nascita successiva. Durante la morte prematura, la persona non è visibile, ma continua a esistere con il suo corpo sottile finché non sperimenta la morte naturale.

  Attualmente nessuno è a conoscenza di ciò che accade durante la morte temporanea. Nella morte temporanea tutte le funzioni corporee cessano e il Jeevatma rimane nel corpo ma è in uno stato di sonno. Nella morte temporanea, la persona sembra morta, ma il Jeevatma rimane nel corpo. Ciò ha portato a incidenti in cui persone che hanno subito una morte temporanea sono state erroneamente dichiarate morte e sepolte, anche se erano ancora vive. Nessuno può scoprire che una persona che ha subito una morte temporanea non è effettivamente morta. Di conseguenza, ci sono stati numerosi casi di persone sepolte vive.
<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
La storia di Abdul Aziz in Jammu e Kashmir
</b></ion-col></ion-row>

  Il 7 dicembre 2009 una storia è andata in onda alle 13:30 sul canale TV9. Abdul Aziz, un uomo di 60 anni, era morto una settimana prima, il 30 novembre 2009, a Rajouri, un villaggio nello Jammu e Kashmir. Secondo la tradizione islamica, poiché era musulmano, fu sepolto.

  Tre giorni dopo la sua sepoltura, la polizia ha ricevuto una denuncia in cui si sosteneva che Abdul Aziz non era morto naturalmente e che poteva essere coinvolto un atto scorretto. La polizia ha prontamente registrato il caso, si è recata al cimitero ed ha riesumato il cadavere di Abdul Aziz alla presenza dei suoi parenti. Il suo corpo è stato poi inviato a un ospedale governativo per un esame post mortem.

  Durante l'autopsia, il medico ha prima colpito la testa con un coltello per esaminare il cranio e la testa è rimasta ferita. Tra lo stupore di tutti i presenti, Abdul Aziz, fino ad allora ritenuto morto, si svegliò e si informò sulla situazione. Il dottore incredulo, ancora elaborando la svolta inaspettata degli eventi, si sedette e chiese: "Stiamo facendo un'autopsia". Abdul Aziz rispose con calma: “Sono vivo”. Il medico informò immediatamente i parenti di Abdul Aziz dell’incidente miracoloso, ed essi arrivarono per riportarlo a casa.

  Tre giorni prima, lo stesso medico aveva visitato Abdul Aziz per quindici minuti e ne aveva confermato il decesso. Il medico, riconoscendo la straordinarietà dell'evento, lo definì un miracolo. La gente del villaggio di Rajouri era altrettanto stupita che Abdul Aziz, che avevano seppellito con le loro stesse mani, fosse tornato in vita tre giorni dopo.

  Ad oggi sono trascorsi sei anni e sette mesi da quando si è verificato l'incidente. Tutti i canali televisivi hanno trasmesso questa notizia lo stesso giorno. Dato che questo incidente è avvenuto in presenza di medici, rimane innegabile e al di là della mera superstizione.

<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
Un incidente nel distretto di Visakhapatnam
  </b></ion-col></ion-row>
  Srungavarapu Kota si trova sulla strada per la valle di Araku a Visakhapatnam. C'è un villaggio chiamato Saarepuram, situato a 12 km da Srungavarapu Kota. In questo villaggio viveva una donna di 67 anni di nome Samudramma che soffriva di pressione alta e diabete da dieci anni. Ha ricevuto cure mediche dal dottor Dharmalingachari, un medico esperto di Srungavarapu Kota. Il dottor Dharmalingachari era un noto veterano di 60 anni con una laurea in M.B.B.S.

  Sei anni fa, una sera alle 18:00, Samudramma fu portato dal dottor Dharmalingachari dopo essere stato dichiarato morto dai medici di un ospedale governativo. Quando il medico la esaminò, non riuscì a trovare il polso. L'ha dichiarata morta, affermando che non aveva bisogno di alcuna cura medica poiché non aveva respiro né polso. Il suo corpo è stato riportato al loro villaggio, a 12 km di distanza, per essere sepolto il giorno successivo perché era già notte. Tuttavia, il corpo di Samudramma fu tenuto nel portico per tre giorni a causa della forte pioggia che durò due giorni. Con sorpresa di tutti, il quarto mattino si alzò e chiamò i suoi parenti. Hanno immediatamente contattato il dottor Dharmalingachari e gliel'hanno portata dopo 15 giorni. Il medico poi le chiese se avesse visto i servi di Yama o Yamaloka, poiché era stata dichiarata morta da tre giorni. Ha detto che non ha visto nulla.

  Questo incidente è avvenuto sei anni fa in presenza di un medico, quindi non può essere negato o liquidato come superstizioso.

  <ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
  Sopravvissuto da Pyre (Tradotto da un giornale Telugu) 10 luglio 2012, Sakshi Notizie
  </b></ion-col></ion-row>
    <strong>Chennai: </strong>Marted&igrave;, i medici hanno confermato la morte del 50enne Muttuswamy di Krishurayapuram nel distretto di Karur nel Tamil Nadu. Consigliarono ai parenti di procedere ai riti funebri. Credendo che Muttuswamy fosse morto a causa della vecchiaia e della malattia, i parenti si riunirono al cimitero per eseguire la pira.

    Mentre stavano per appiccare l'incendio, la sorella di Muttuswamy, Paapatti, si avvicin&ograve; al corpo. Sopraffatta dal dolore, cadde sul cadavere e grid&ograve;: "Fratello, mi lasci?" In quel momento toccante, le gambe e le braccia di Muttuswamy si mossero e si ud&igrave; un leggero gemito. I parenti in lacrime rimasero scioccati e gridarono: "Muttuswamy...Muttuswamy!" Muttuswamy si svegli&ograve; dalla pira come se si fosse appena alzato dal sonno e chiese ai suoi parenti cosa fosse successo. Tutti abbracciarono Muttuswamy con gioia e lo riportarono in ospedale. In particolare, la figlia di Muttuswamy si era sposata proprio il giorno prima.

    <strong>Negligenza dei medici: </strong>I parenti hanno criticato i medici per la loro negligenza nel curare Muttuswamy, che era stato ricoverato in un ospedale locale dieci giorni fa dopo ammalarsi. Hanno condannato i medici per l'incidente e la notizia si &egrave; diffusa rapidamente in tutto il distretto di Karur. Questo incidente ha suscitato un ampio dibattito ed &egrave; stato visto come un altro esempio di morte temporanea.

    Se qualcuno subisce una morte temporanea, pu&ograve; sopravvivere in quello stato fino a un anno o pi&ugrave;. Il risveglio pu&ograve; avvenire spontaneamente o con l'aiuto di qualcuno che li picchietta o li sveglia. In molti casi, gli individui che subiscono una morte temporanea al mattino si risvegliano la sera, mentre altri riprendono
  <img src="assets/img/temp_death.png"/>
    conoscenza dopo una settimana o pi&ugrave;. Recentemente, un uomo di nome Muttuswamy nel Tamil Nadu &egrave; tornato in vita dopo essere stato su una pira funeraria. Allo stesso modo, Ges&ugrave; risuscit&ograve; una ragazza che aveva subito una morte temporanea, dichiarando che in realt&agrave; non era morta. C'&egrave; anche un resoconto storico di Ges&ugrave; che resuscita se stesso. &Egrave; importante notare che tutti questi incidenti sono stati attribuiti a morte temporanea.

    La nostra Scrittura, &lsquo;<strong>Il mistero della morte</strong>&rdquo;, approfondisce i quattro tipi di morte e la loro realt&agrave;. Leggere questa scrittura ti fornir&agrave; una comprensione completa dei vari tipi di morte.
  </div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 57,
verse: `<b>4) Il Vangelo di Marco, capitolo 7, versetti 15, 16, 17, 18, 19, 20, 21, 22 e 23.</b><`,
meaning: `<b>
(7:15) Niente al di fuori di una persona può contaminarla entrando in essa.
<br><br>
(7:16) Piuttosto, è ciò che esce da una persona che la contamina.
<br><br>
(7:17) Dopo che ebbe lasciato la folla ed entrò in casa, i suoi discepoli gli chiesero riguardo a questa parabola.
<br><br>
(7:18) “Sei così noioso?” chiese. “Non vedi che nulla di ciò che entra in a persona esterna può contaminarli?
<br><br>
(7:19) Perché non entra nel loro cuore ma nel loro stomaco, e poi esce il corpo."
<br><br>
(7:20) Proseguì: “Ciò che esce da una persona è ciò che la contamina.
<br><br>
(7:21) Poiché è dall'interno, dal cuore di una persona, che vengono i pensieri malvagi: immoralità sessuale, furto, omicidio,
<br><br>
(7:22) adulterio, avidità, malizia, inganno, oscenità, invidia, calunnia, arroganza e follia.
<br><br>
(7:23) Tutti questi mali vengono dall'interno e contaminano una persona.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  L'uomo nasce con sei guna cattivi e sei guna buoni. Anche i guna crescono insieme all'individuo, influenzando la buddhi situata nella testa e provocando azioni esterne sotto il suo comando. Buddhi istruisce i karmendriya (organi d'azione) a compiere azioni al di fuori del corpo, operando in accordo con i guna. Poiché Buddhi lavora in allineamento con i guna, i guna negativi influenzano Buddhi, che poi dirige le azioni dei guna, e i sensi esterni rispondono secondo il comando di Buddhi. Questi guna si manifestano come qualità indesiderabili come l'avidità (kaama), la rabbia (krodha), l'avarizia (lobha), la passione (moha), l'arroganza (madam) e la gelosia (matsara). I guna colpiscono prima il buddhi e successivamente governano il corpo da lì. Tutti gli errori commessi dagli esseri umani sono radicati nell'influenza dei guna all'interno del corpo.

  Il cibo consumato dall’esterno contribuisce alla salute del corpo ma non influisce sulla Buddhi. Tale cibo viene convertito in sostanze nutritive, favorendo il benessere fisico. Il cibo che mangiano gli esseri umani non ha alcun impatto diretto sulla Buddhi; entra nel corpo, sostenendo la salute generale. Quando il cibo apporta benefici al corpo, lo rafforza e mantiene una buona salute. Pertanto, il cibo che entra nel corpo dall'esterno non porta a comportamenti indesiderabili nell'uomo. È l’effetto dei guna originati dall’interno del corpo che può provocare una condotta negativa. Di conseguenza, deviare dalle regole dietetiche può essere accettabile, ma mantenere il controllo sui guna è fondamentale.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 58,
verse: ` <b> 5) Il Vangelo di Marco, capitolo 3, versetto 35.</b>`,
meaning: ` <b>
(3:35) Chiunque fa la volontà di Dio è mio fratello, mia sorella e mia madre.   </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando ci chiediamo quale sia la volontà di Dio, possiamo capire che i Suoi comandamenti (dharma) rappresentano la Sua volontà. Obbedendo ai Suoi comandamenti, ci allineiamo alla volontà di Dio. Al contrario, se agiamo secondo i nostri desideri senza aderire ai Suoi comandi, violiamo la Sua guida e seguiamo la volontà di Satana. Quando Dio si incarna sulla terra come Bhagavan, coloro che comprendono la Sua saggezza, agiscono in conformità con essa, propagano i Suoi insegnamenti e diffondono i Suoi comandamenti si avvicineranno a Lui. Al contrario, coloro che scelgono la via di Satana diventano avversari di Dio. Coloro che promuovono attivamente le parole di Dio e aderiscono ai Suoi comandamenti sono considerati Sue sorelle, fratelli e seguaci più stretti. Che Dio sia fisicamente presente sulla terra o meno, è fondamentale riconoscere che gli gnani (coloro che possiedono saggezza) entro i Suoi confini e seguono i Suoi comandi saranno considerati vicini a Dio.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 59,
verse: ` <b> 6) Il Vangelo di Marco, capitolo 4, versetto 17.</b>`,
meaning: `<b>
(4:17) Ma poiché non hanno radice, durano solo poco tempo. Quando arrivano difficoltà o persecuzioni a causa della parola, essi si allontanano rapidamente. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nella Gita, il Signore Krishna parla di quattro tipi di devoti: 1) Coloro che adorano nei guai, 2) Coloro che pregano per la ricchezza, 3) Coloro che sono interessati a conoscere Dio, 4) Coloro che possiedono saggezza (Gnani). Il Signore dice nella Gita che Egli favorisce gli Gnani. Allo stesso modo, il Signore Ges&ugrave; parla di quattro tipi di devoti nella Bibbia, ma il versetto a cui si fa riferimento qui riguarda solo uno di questi tipi. Alcuni individui sono curiosi della saggezza di Dio e cercano di seguirla. Satana comincia a tentarli a modo suo. Affrontano molti problemi in questo processo. Quando incontrano difficolt&agrave; a causa della saggezza, Satana comincia a predicare nelle loro teste. Satana dice loro: &ldquo;Voi state affrontando problemi perch&eacute; conoscete la saggezza. Non essere sciocco. Puoi sfuggire ai problemi imminenti fingendo di essere sul sentiero della saggezza. Coloro che non comprendono la vera essenza della saggezza potrebbero iniziare ad agire di conseguenza. Dopo un po&rsquo; di tempo, se la persona affronta problemi a causa della saggezza o del Guru, e questi problemi portano a conflitti con gli altri o a paure di persecuzioni, Maya trarr&agrave; vantaggio dalla situazione. Maya crea questo tipo di pensieri nella testa della persona e le persone possono iniziare a pensare: &ldquo;Avrei dovuto essere pi&ugrave; saggio fin dall&rsquo;inizio. Mi sono trovato in questa situazione perch&eacute; ho seguito il Guru per saggezza, anche se i miei parenti pi&ugrave; stretti mi avevano avvertito di non farlo. Perch&eacute; dovrei soffrire per questa saggezza? &Egrave; meglio abbandonare la saggezza e il Guru. Seguire ciecamente la saggezza porter&agrave; solo alla rovina mia e della mia famiglia. Poich&eacute; siamo nel mondo, dobbiamo conformarci alle sue usanze. Quelli nella foresta non affrontano problemi indipendentemente dalle loro azioni, ma sarebbe sciocco per noi del villaggio andare contro le norme&rdquo;. Tali pensieri possono indurre gli individui ad allontanarsi dalla saggezza, anche dopo essere stati sul sentiero per un po&rsquo; di tempo. Pertanto, Ges&ugrave; disse che anche coloro che sono stati sulla via della saggezza per qualche tempo si opporranno quando ci sono fatiche e torture per amore della saggezza.

  Coloro che apprezzano veramente la saggezza di Dio e ne comprendono l&rsquo;importanza non cadranno preda delle tentazioni di Satana. Non si pu&ograve; sfuggire alle grinfie di Satana a meno che non si valorizzi saggezza e il loro Guru pi&ugrave; della moglie, degli amici intimi e persino della loro stessa vita, nonostante sappiano che potrebbero affrontare persecuzioni o morte sul sentiero della saggezza. Perfino i discepoli del Signore Ges&ugrave; avevano paura delle guardie il giorno del Suo arresto e abbandonarono il loro Guru per salvare la propria vita. Fuggirono con paura a causa dei problemi e delle persecuzioni. Se anche loro fossero stati preparati ad affrontare la morte insieme al Signore Ges&ugrave; quel giorno, la loro vita sarebbe stata benedetta. Maya ostacol&ograve; parzialmente i discepoli quel giorno. A differenza di loro, dovremmo restare saldi di fronte a qualsiasi problema o persecuzione sul sentiero della saggezza. Beato &egrave; colui che &egrave; disposto a morire per il sentiero divino piuttosto che vivere nella paura sul sentiero dell'ignoranza. Nella Bhagavad-Gita, il Signore disse: &ldquo;<strong>&Egrave; meglio morire nel dharma del Paramatma, che &egrave; il tuo dharma, piuttosto che temere sul sentiero di Satana, che non &egrave; il tuo dharma&rdquo;.</strong>
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 60,
verse: ` <b> 7) Il Vangelo di Marco, capitolo 4, versetti 21 e 22.</b>`,
meaning: `<b>
(4:21) Disse loro: “Portate dentro una lampada da mettere sotto una ciotola o sotto un letto? Invece non lo metti sul suo piedistallo?
<br><br>
(4:22) Poiché tutto ciò che è nascosto deve essere svelato, e tutto ciò che è nascosto deve essere portato allo scoperto.    </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Al giorno d'oggi, molti guru dicono che i discepoli non dovrebbero condividere la loro saggezza con gli altri. Dicono che la loro saggezza è confidenziale e dovrebbe essere condivisa solo con coloro che hanno ricevuto upadesa. Quando qualcuno fa loro una domanda, evitano di rispondere. Tuttavia, la saggezza non dovrebbe essere nascosta. Dio stesso viene in forma umana e si prende la briga di trasmettere saggezza. Anche se non conosciamo la vera saggezza, non dovremmo trovare scuse per condividere la poca saggezza che conosciamo. La saggezza è come una lampada che rimuove l'ignoranza negli altri. Proprio come un oggetto nell’oscurità può essere visto alla luce della lampada, una cosa sconosciuta nell’ignoranza può essere compresa con saggezza. La saggezza è necessaria per dissipare l’ignoranza, proprio come è necessaria una lampada per dissipare le tenebre. Accendere una lampada e poi tenerla sotto una ciotola è una follia. Allo stesso modo, non è saggio non condividere la saggezza che possiedi. Anche i segreti sono destinati ad essere svelati. Bhagavan ha rivelato la migliore saggezza divina del mondo. In tal caso, nulla di valore inferiore alla saggezza non può essere nascosto. Nessun mistero al mondo può essere tenuto nascosto; uscirà sicuramente. La saggezza di Dio è necessaria per tutti e non dovrebbe essere tenuta segreta. Chi vuole nasconderlo non può farlo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 61,
verse: `<b> 8) Il Vangelo di Marco, capitolo 6, versetto 4.</b>`,
meaning: `<b>
(6:4) Gesù disse loro: “Un profeta non è disprezzato se non nella sua città, tra i suoi parenti e in casa sua”.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In Telugu, un profeta è definito come qualcuno che insegna qualcosa di importante. La saggezza del Paramatma è la cosa più essenziale per ogni essere umano. Una persona che impartisce questa saggezza è chiamata profeta. Gli esseri umani comuni non conoscono la saggezza del Paramatma, tranne colui che proviene dal Paramatma. Colui che viene dal Paramatma e nasce come uomo è chiamato Bhagavan o Profeta. Il profeta non è onorato nella propria casa, tra i suoi parenti, o nella sua stessa città perché sembra un uomo comune. Non importa quanto qualcuno sia eccezionale, è naturale essere sottovalutati a casa e dai parenti. Poiché hanno visto il profeta fin dall’infanzia, familiari e parenti potrebbero ridicolizzarlo, dicendo che non ha grandezza e che solo gli sciocchi lo ascolteranno. Potrebbero anche affermare che Egli non conosce nulla oltre ciò che sanno loro. Persino Dio non può diventare un profeta per i membri della Sua stessa famiglia. Anche quando gli altri riconoscono e parlano della Sua grandezza, i Suoi parenti e i suoi familiari si chiedono quale eccellenza Egli possieda. Non riconoscono la Sua importanza e Lo mettono in ridicolo, sottolineando cose come il fatto che bagnava il letto e sporcava la biancheria intima durante la Sua infanzia. Pertanto, pur essendo un profeta per gli altri, non è onorato nella Sua casa e nella Sua città. Secondo questo principio, il Signore Gesù non fu riconosciuto come profeta dalla Sua famiglia e dai Suoi parenti.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 62,
verse: `<b> 9) Il Vangelo di Marco, capitolo 8, versetto 38.</b>`,
meaning: `<b>
(8:38) Se qualcuno si vergognerà di me e delle mie parole davanti a questa generazione adultera e peccatrice, il Figlio dell’Uomo si vergognerà di loro quando verrà nella gloria di suo Padre con i santi angeli.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Alcune persone imparano la saggezza nella societ&agrave; ma scelgono di mantenerla segreta. Sentono che conoscere la saggezza &egrave; un errore; quindi, lo fanno in modo confidenziale. Potrebbero anche vergognarsi di andare da un Guru e imparare la saggezza da lui, e quindi mantenerla riservata. Alcuni individui sono alla ricerca di un Guru per diventare discepoli, ma preferiscono un Guru ricco a causa del loro status e ricchezza. Sono imbarazzati ad avvicinarsi ad un Guru povero, anche se quel Guru ha pi&ugrave; saggezza. Di conseguenza, scelgono un Guru ricco che potrebbe non possedere molta saggezza. Sebbene alcuni individui abbiano imparato la saggezza da un Guru, non vogliono essere indicati come discepoli di quel Guru. Pertanto, molte persone si vergognano e fanno molta attenzione a evitare di essere smascherate.

  Ci si pu&ograve; vergognare delle cose materiali, ma non ci si dovrebbe vergognare della saggezza del Paramatma. Consideriamo un esempio. Due persone stanno camminando sulla strada. Uno &egrave; bello ma povero e poco intelligente, mentre l'altro &egrave; poco attraente ma ricco e intelligente. Sono entrambi parenti stretti. Le persone che li vedono per strada li giudicheranno dal loro aspetto esteriore, non dalla loro intelligenza. Dopo un po', un viaggiatore li vede e chiede al bell'uomo chi sia la seconda persona. La persona bella si vergogna di dire che la persona poco attraente &egrave; un suo parente stretto a causa del suo aspetto. Invece, dice semplicemente che si conoscono. La persona poco attraente pensa di essere stata presentata come un conoscente piuttosto che come un parente stretto a causa del suo aspetto. Pi&ugrave; tardi, un altro viaggiatore li vede e chiede alla persona poco attraente chi sia l'altra persona. Essendo intelligente, la persona poco attraente risponde in modo simile dicendo che sono semplici conoscenti. La persona bella &egrave; lieta di essere presentata come un conoscente piuttosto che come un parente. La persona poco attraente pensa: "Anche io mi vergogno di presentare questa persona stupida come un mio parente stretto". La persona poco attraente ha seguito il comportamento della persona bella.

  Il secondo viaggiatore, che ha chiesto alla persona poco attraente, ha avuto una regola per molti anni. La sua regola era di donare 10.000 monete se avesse incontrato parenti stretti. Tuttavia, sebbene loro fossero parenti stretti, non hanno ricevuto le 10.000 monete perch&eacute; non si sono presentati come tali. Di conseguenza, il primo povero non ha ricevuto denaro. Dato che la seconda persona &egrave; ricca, non gli importa se ha ricevuto il denaro oppure no. La prima persona ha perso soldi perch&eacute; si vergognava e ha mentito. Se ti vergogni della saggezza solo perch&eacute; agli altri non piace, allora anche la saggezza si vergogna di te. La prima persona ha perso soldi perch&eacute; prima si &egrave; vergognata e ha mentito. Pertanto, non riceverebbero la futura liberazione dei profitti. Sulla base di ci&ograve;, il Signore disse: <strong>&ldquo;Se qualcuno si vergogna di me e delle mie parole, anch&rsquo;io mi vergogno di lui&rdquo;. </strong>Pertanto, si dovrebbe capire che va bene vergognarsi delle questioni materiali, ma non ci si dovrebbe vergognare della saggezza del Paramatma.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 63,
verse: `<b>10) Il Vangelo di Marco, capitolo 9, versetto 7.</b>`,
meaning: `<b>
(9:7) Allora apparve una nuvola e li coprì, e dalla nuvola venne una voce: “Questo è mio Figlio, che amo. Ascoltalo!”</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La maggior parte delle persone non si rende conto delle nuvole nel cielo. Durante la stagione delle piogge, le nuvole producono tuoni e fanno un forte rumore. Le nuvole sono vive e svolgono molti compiti, ma i loro ruoli specifici sono sconosciuti. Secondo la storia, il Sole ud&igrave; la saggezza divina che le nuvole rivelarono per la prima volta all'inizio della creazione. Non ci sono segreti sconosciuti alle nuvole sulla terra. Dio dietro le nuvole disse di Ges&ugrave;: <strong>&ldquo;Questo &egrave; il mio amato Figlio. Ascoltalo. </strong>Pertanto, &egrave; volont&agrave; di Dio che le persone ascoltino la saggezza di Dio da Ges&ugrave;. Ci&ograve; che Dio dice come uomo &egrave; la Sua saggezza, ma quando gli esseri umani non ascoltano, Dio parla dalle nuvole. Anche se gli esseri umani non sempre rispettano ci&ograve; che dicono gli altri, apprezzano ci&ograve; che dicono le nuvole, motivo per cui Dio ha parlato dalle nuvole nel cielo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 3,
pageNumber: 64,
verse: ` <b>  11) Il Vangelo di Marco, capitolo 10, versetti 17 e 18.</b>`,
meaning: ` <b>
(10:17) Mentre Gesù si metteva in cammino, un uomo gli corse incontro e cadde in ginocchio prima di lui. “Buon maestro”, chiese, “che cosa devo fare per ereditare la vita eterna?”
<br><br>
(10:18) “Perché mi chiami buono?” Gesù rispose. “Nessuno è buono, tranne Dio solo.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Alcuni cristiani sostengono che la Bibbia sia stata originariamente scritta in ebraico e poi tradotta in molte altre lingue. Pertanto alcune parole non sono state tradotte correttamente. Ad esempio, nel primo versetto viene usata la frase &ldquo;Buon insegnante&rdquo; e nel secondo &ldquo;Dio &egrave; buono&rdquo;. Tuttavia, in base a ci&ograve; che Ges&ugrave; disse, <strong>&ldquo;Nessuno &egrave; buono, tranne Dio solo&rdquo; </strong>la parola non dovrebbe essere n&eacute; &ldquo;Buon insegnante&rdquo; n&eacute; &ldquo;Buon Dio&rdquo;. Una persona che insegna la saggezza in modo eloquente pu&ograve; essere definita un buon insegnante, e qualcuno che compie buone azioni pu&ograve; essere definito una brava persona.

  Ci sono buoni insegnanti e brave persone sulla terra. Pertanto, sarebbe sminuire Dio paragonarli e dire: <strong>&ldquo;Nessuno &egrave; buono, tranne Dio solo&rdquo;. </strong>A parte questo, non c&rsquo;&egrave; corrispondenza tra le parole &ldquo;buon insegnante&rdquo; nella prima frase e "brava persona" nella seconda frase. La seconda scrittura divina, la Bibbia, &egrave; stata tradotta in pi&ugrave; lingue delle altre due sacre scritture. La Bibbia &egrave; stata tradotta in 1.400 lingue, rendendola l'unica Scrittura tradotta nella maggior parte delle lingue.

  La prima scrittura divina &egrave; la base per la seconda scrittura divina, la Bibbia, e l'ultima scrittura divina, il Corano. Il Corano fornisce testimonianza in 5:44, 5:46, 5:48 e 5:68 che <strong>la saggezza della prima scrittura divina, la Taurat (la Bhagavad-Gita), &egrave; presente anche nelle altre due scritture. </strong>Pertanto, quando consideriamo le parole usate nel Vangelo di Marco, 10:17 e 10:18, possiamo capire che possono esserci molti buoni insegnanti e brave persone nel mondo, ma non c'&egrave; Uttama Purusha (Essere Supremo) tra uomini. Quindi, come affermato nella Bhagavad-Gita, <strong>&ldquo;Solo Dio &egrave; Purushottama&rdquo;. </strong>Si pu&ograve; dire che nei versi precedenti siano state usate parole non correlate, dove la parola avrebbe dovuto essere 'Purushottama.' Questo si capisce bene se si guardano i versetti 16, 17 e 18 del 15&deg; capitolo della Bhagavad-Gita, il Purushottama Prapti Yoga.

  Secondo la prima scrittura divina, esiste un solo Purusha. Sebbene esista un solo Purusha, Dio &egrave; diviso in tre: Jeevatma, Atma e Paramatma. Tra questi tre maschi, <strong>il maschio che &egrave; migliore di Jeevatma e Atma &egrave; Paramatma, noto anche come Purushottama</strong>, come menzionato nella Bhagavad-Gita. Si pu&ograve; dire che tutti tranne i tre maschi sono Prakruti, che &egrave; femminile. Gli uomini e le donne nel mondo sono tutti legati alla natura femminile. Pertanto, nel versetto, Ges&ugrave; disse: <strong>&ldquo;Non chiamarmi Purushottama (Uttama Purusha). Solo Dio &egrave; Uttama Purusha&rdquo;. </strong>Ci sono tre religioni principali sulla terra. Le persone di ogni religione hanno preso una scrittura divina e hanno detto che questa &egrave; la nostra scrittura. Tuttavia, in realt&agrave;, queste tre scritture non sono collegate ad alcuna religione specifica. Forniscono saggezza a tutti gli esseri umani e, pertanto, dovrebbero essere considerati scritture destinate a tutti gli esseri umani.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Marco",
chapterNumber: 4,
pageNumber: 65,
verse: `<b>12) Il Vangelo di Marco, capitolo 16, versetti 15 e 16.</b>`,
meaning: `<b>
(16:15) Disse loro: “Andate in tutto il mondo e predicate il Vangelo a tutti creazione.
<br><br>
(16:16) Chi crederà e sarà battezzato sarà salvato, ma chi non crederà sarà condannato.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dopo che Ges&ugrave; fu crocifisso e deposto nel sepolcro, si alz&ograve; dalla tomba all'alba della domenica mattina. Apparve prima a Maria Maddalena e poi agli altri discepoli. Ges&ugrave; apparve ai discepoli trentatr&eacute; volte dopo essere uscito dal sepolcro. Egli raccont&ograve; i due versetti precedenti agli undici discepoli mentre sedevano insieme per un pasto. Poich&eacute; tutti gli esseri umani nel mondo sono immersi nell'ignoranza, Egli ordin&ograve; ai Suoi discepoli di andare e <strong>predicare il Vangelo, che &egrave; la saggezza di Dio</strong>, a loro. Lo stesso messaggio &egrave; trasmesso nel quindicesimo versetto, <strong>&ldquo;Andate in tutto il mondo e predicate il Vangelo a tutta la creazione&rdquo;. </strong>Qui &ldquo;tutto il mondo&rdquo; non significa mondi diversi; si riferisce a persone che si guadagnano da vivere sulla terra e soffrono in vari modi.

  Ges&ugrave; disse anche: &ldquo;Predicate il Vangelo a tutta la creazione&rdquo;. Significa predicare il Vangelo, la saggezza divina, a persone di tutte le et&agrave;. Disse di predicare loro la saggezza divina e di concedere loro il permesso, il &ldquo;battesimo&rdquo;, di andare a paraloka. Il battesimo &egrave; come un permesso alla liberazione o paraloka. Coloro a cui &egrave; stato concesso il permesso di paraloka saranno salvati dalla mia saggezza e fuggiranno dall'esperienza del peccato. Ha detto che i problemi dei peccati punirebbero coloro che non sono battezzati poich&eacute; non hanno protezione dai peccati.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 66,
verse: `<b> 1) Il Vangelo di Luca, 2° capitolo, 49° versetto.</b>`,
meaning: ` <b>
(2:49) “Perché mi stavi cercando?” chiese. "Non sapevi che dovevo occuparmi degli affari di mio padre?"   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  I genitori di Ges&ugrave; lo cercavano e quando lo videro rimasero stupiti. Sua madre gli disse: &laquo;Figlio, perch&eacute; ci hai trattato cos&igrave;? Tuo padre ed io ti abbiamo cercato con ansia. In risposta, Ges&ugrave; disse: <strong>&ldquo;Perch&eacute; mi cercavi? Non sapevi che dovevo occuparmi degli affari di mio padre? </strong>Sebbene fosse presente anche il padre visibile (fisico) di Ges&ugrave;, Egli si riferiva al suo Padre invisibile (non fisico). &Egrave; importante chiarire a quale padre Ges&ugrave; si riferiva per poter comprendere i compiti del Padre e, di conseguenza, comprendere i compiti che Ges&ugrave; avrebbe svolto e perch&eacute; ha lasciato sua madre e suo padre.

  Con le sue stesse parole, Ges&ugrave; si &egrave; dichiarato Figlio dell'Uomo. In alcune occasioni afferm&ograve; anche di essere il Figlio di Dio. Pertanto, Egli &egrave; sia il Figlio dell'Uomo che il Figlio di Dio. Se ci si chiede di chi siano i figli di tutte queste persone, si pu&ograve; dire che tutti gli esseri umani sono figli dell&rsquo;uomo. Tuttavia, qui c&rsquo;&egrave; un segreto. Perch&eacute; possa nascere un uomo &egrave; necessario un donatore di semi (sperma). Sebbene sia naturale supporre che il padre sia il donatore del seme per la nascita di un uomo, &egrave; importante notare che, sebbene un uomo sembri essere maschio in apparenza, Egli non pu&ograve; essere considerato maschio perch&eacute; &egrave; creato come modello per lui. un maschio. Sia l'uomo che la moglie possono essere annoverati sotto la forma femminile Prakruti.

  Sebbene Jeevatma, che &egrave; in un corpo umano, sia maschio imparentato con l'Atma, non pu&ograve; generare qualcuno. L'Atma, che &egrave; nel corpo, ha fatto nascere ogni essere umano. Abbiamo gi&agrave; affermato che l'Atma svolge tutti i compiti del corpo ed &egrave; il donatore di semi per tutti gli esseri. Ges&ugrave; si riferiva a se stesso come il &ldquo;Figlio dell&rsquo;Uomo&rdquo;, anche se non era un uomo comune, per indicare che suo Padre non era il Giuseppe visibile ma piuttosto l&rsquo;Atma che risiede in tutti i corpi umani. La prima scrittura divina ci insegna che ogni essere vivente nato dal grembo materno ha Atma come padre e Prakruti come madre. Tuttavia, Ges&ugrave; nacque direttamente senza un padre fisico, poich&eacute; era il Figlio dello Spirito Santo (Paramatma), che &egrave; diverso da Atma. Questo &egrave; il motivo per cui viene chiamato Figlio di Dio. Quando Ges&ugrave; incontr&ograve; i Suoi genitori, disse loro che doveva occuparsi dell&rsquo;opera di Suo Padre, ma non specific&ograve; a quale padre si riferisse (Atma o Spirito Santo). Secondo la sua opinione, si considerava il Figlio di Dio. Ges&ugrave; non ha svolto i compiti dell'Atma, che &egrave; nel corpo. Era concentrato sulla diffusione della saggezza di Dio. L'onnipresente Paramatma svolge il compito di diffondere la saggezza divina. Pertanto, Ges&ugrave; intendeva compiere l&rsquo;opera di Suo Padre (lo Spirito Santo). Paramatma stesso cre&ograve; un corpo e lo riemp&igrave; della Sua stessa anima. Anche se Ges&ugrave; era Dio, a volte si riferiva a Se stesso come al Figlio dell&rsquo;uomo e altre volte al Figlio di Dio per impedire alle persone di riconoscerlo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 67,
verse: `<b> 2) Il Vangelo di Luca, capitolo 11, versetti 37, 38, 39, 40 e 41.</b>`,
meaning: `<b>
(11:37) Mentre Gesù parlava, uno dei farisei lo invitò a casa per un pasto. Allora entrò e prese posto al tavolo.
<br><br>
(11:38) Il suo ospite rimase stupito nel vedere che si sedeva a mangiare senza prima eseguire la cerimonia del lavaggio delle mani richiesta dall'usanza ebraica.
<br><br>
(11:39) Allora il Signore gli disse: “Voi farisei siete così attenti a pulire l'esterno della tazza e del piatto, ma dentro siete sporchi, pieni di avidità e di malvagità!
<br><br>
(11:40) Sciocchi! Dio non ha creato l’interno così come l’esterno?
<br><br>
(11:41) Quindi, pulite l'interno offrendo doni (dharma) ai poveri, e sarete puliti dappertutto.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  L'ultimo versetto afferma: <strong>&ldquo;Pulisci l&rsquo;interno offrendo doni (dharma) ai poveri, e sarai pulito dappertutto&rdquo;. </strong>Sfortunatamente, gli esseri umani non hanno compreso correttamente questo versetto e lo hanno interpretato in vari modi. Quando Ges&ugrave; menziona &ldquo;fare doni&rdquo;, le persone lo interpretano come una donazione di denaro, vestiti e cibo ai poveri. Tuttavia, Ges&ugrave; non ha affermato che gli atti esterni di carit&agrave; purificherebbero una persona dal di dentro. La sua intenzione era che la pratica del dharma dovesse essere interiorizzata e solo allora i mali interiori sarebbero stati purificati. Ges&ugrave; non ha dato priorit&agrave; alla pulizia esteriore ma ha invece sottolineato la purificazione delle qualit&agrave; interiori (guna). Pertanto, ha incoraggiato gli altri a seguire il percorso del dharma, che si oppone ai guna. Ges&ugrave; stesso speriment&ograve; la purificazione interiore e ader&igrave; al sentiero del dharma. Ecco perch&eacute; ha esortato gli altri a percorrere lo stesso percorso.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 68,
verse: `<b> 3) Il Vangelo di Luca, capitolo 12, versetti 4 e 5.</b>`,
meaning: ` <b>
(12:4) Vi dico, amici miei, non abbiate paura di coloro che uccidono il corpo e dopo ciò non possono più fare.
<br><br>
(12:5) Ma ti mostrerò chi dovresti temere: temere colui che, dopo che il tuo corpo sarà stato ucciso, ha il potere di gettarti nell'inferno. Sì, te lo dico, temilo.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Gli esseri umani possono danneggiare il corpo, ma non possono danneggiare il Jeevatma interiore. Jeevatma, essendo invisibile dall'esterno, rimane inalterato. Poiché il corpo è visibile, gli altri possono solo infliggergli danni, non il Jeevatma. Pertanto, non è necessario temere tali individui. L’unico da temere è Dio. Anche nella morte, Dio valuta i nostri peccati, amministra la punizione e causa sofferenza. I legami tra gli individui vengono recisi dopo la morte. Anche se il defunto rinasce nella famiglia dell’assassino, questi non riconoscerà l’assassino come un nemico. Tuttavia, Dio riconosce il Jeevatma anche dopo la morte ed è consapevole delle sue nascite successive. Pertanto, è fondamentale temere Dio, che ci ritiene responsabili del nostro karma dopo la morte. Non c'è bisogno di temere gli altri umani che non possono danneggiare il Jeevatma e non ci riconosceranno dopo la morte.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 69,
verse: `<b>4) Il Vangelo di Luca, capitolo 12, versetto 25.</b>`,
meaning: ` <b>
(12:25) Chi di voi preoccupandosi può aumentare la sua statura di un cubito?   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Anche se gli individui credono di realizzare tutto attraverso la loro intelligenza, non esiste alcuna connessione intrinseca tra loro e la loro intelligenza. Le persone non sono indipendenti e non sono in grado di agire da sole. Sono simili a burattini manipolati dal karma. Coloro che credono di poter agire come vogliono si trovano in uno stato di ignoranza su se stessi. Secondo la struttura che Dio ha creato, il karma è sotto il controllo di Dio e gli individui sono sotto il controllo del karma. Poiché il karma li governa, non possono prendere decisioni in modo indipendente. Indipendentemente da quanto pianificano e utilizzano la loro intelligenza, non possono alterare la loro altezza. Se ogni individuo comprende se stesso e contempla la portata del proprio potere, riconoscerà la propria insignificanza, realizzando che Dio è infinitamente più grande di lui.
</div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 70,
verse: `<b> 5) Il Vangelo di Luca, capitolo 12, versetti 33 e 34.</b>`,
meaning: ` <b>
(12:33) Vendi i tuoi beni e dallo ai poveri. Procuratevi delle borse che non si consumino, un tesoro in paraloka che non verrà mai meno, dove nessun ladro si avvicina e nessuna tarma distrugge.
<br><br>
(12:34) Poiché dov'è il tuo tesoro, lì sarà anche il tuo cuore.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ci sono due tipi di ricchezza: una che può comprare qualunque cosa nel mondo e un'altra che può comprare Dio, che è al di là del mondo. La prima è la ricchezza materiale, creata dall'uomo e visibile ad occhio nudo, con la quale acquistiamo beni materiali, mentre la seconda è la ricchezza di saggezza, creata dal divino e non facilmente visibile. Ci sono molte differenze tra ricchezza di saggezza e ricchezza materiale. Sebbene i ladri possano rubare la ricchezza materiale, non possono rubare la ricchezza della saggezza, poiché non è un bene fisico. Le falene possono distruggere la ricchezza materiale, ma non possono danneggiare la ricchezza della saggezza. La ricchezza materiale non può eliminare nemmeno il karma più piccolo, ma la ricchezza di saggezza può eliminare anche il karma più grande. Si può acquisire ricchezza materiale attraverso il lavoro, ma la ricchezza di saggezza si ottiene attraverso l’intimità con il divino. La ricchezza materiale può essere valutata, ma la ricchezza saggia non può essere misurata. Quando una persona muore, il suo legame con la ricchezza materiale viene interrotto, poiché nemmeno un centesimo va con il Jeevatma. Al contrario, la ricchezza di saggezza accompagna il Jeevatma anche dopo la morte, poiché tutta la saggezza acquisita nella vita viene portata avanti nelle nascite future. Coloro che sono ricchi nel mondo possono essere rispettati nella società ma non alla presenza di Dio. Dio riconosce coloro che possiedono la ricchezza della saggezza, anche se gli altri esseri umani non li rispettano. In sintesi, ci sono molte differenze tra ricchezza materiale e ricchezza di saggezza.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 71,
verse: `<b>6) Il Vangelo di Luca, capitolo 12, versetto 4.</b>`,
meaning: ` <b>
(12:49) Sono venuto a portare il fuoco sulla terra, e come vorrei che fosse già acceso.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In questo contesto, il termine &ldquo;fuoco&rdquo; non si riferisce al fuoco ordinario che vediamo quotidianamente. Il fuoco &egrave; di due tipi: fuoco ordinario e fuoco straordinario (fuoco della saggezza). Il fuoco ordinario pu&ograve; bruciare legna da ardere e altri oggetti, mentre <strong>gnanagni (fuoco della saggezza) brucia la legna del karma. </strong>Mentre gli esseri umani sono intrappolati nel peccato e soffrono difficolt&agrave;, Dio discende per portare il fuoco della saggezza per bruciare il loro karma e liberarli dal ciclo di nascita e morte, aiutandoli a raggiungere Dio. Quando Dio impartisce la saggezza, la paragona al fuoco perch&eacute; acquisire saggezza pu&ograve; portare alla liberazione. Dio port&ograve; questo fuoco sulla terra in passato ed esso si accese per un po' prima di scomparire. Ges&ugrave; &egrave; venuto per riaccendere il fuoco e mantenerlo acceso. Voleva che il fuoco continuasse ad ardere, cos&igrave; proclam&ograve; che era venuto per accendere un fuoco dove non ce n'era, e desiderava che il fuoco che aveva acceso in precedenza persistesse.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 72,
verse: `<b> 7) Il Vangelo di Luca, capitolo 12, versetti 51, 52 e 53.</b>
`, meaning: `<b>
(12:51) Pensi che io sia venuto a portare la pace sulla terra? No, te lo dico, ma la divisione.
<br><br>
(12:52) D'ora in poi saremo in cinque in una famiglia divisi gli uni contro gli altri, tre contro due e due contro tre.
<br><br>
(12:53) Saranno divisi, padre contro figlio e figlio contro padre, madre contro figlia e figlia contro madre, suocera contro nuora e nuora contro suocera.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma rivela la Sua saggezza quando si incarna sulla terra nella forma di Bhagavan. La saggezza di Bhagavan genera sentimenti opposti per coloro che sono sul sentiero di Satana. In questi casi sorgono differenze di opinione tra coloro che comprendono la saggezza e coloro che non la comprendono. Coloro che possiedono la saggezza non saranno d&rsquo;accordo con coloro che ne sono privi. Quando una situazione del genere si verifica all&rsquo;interno della stessa famiglia, i membri della famiglia possono diventare ostili gli uni verso gli altri. Se qualcuno tenta di acquisire saggezza in casa, Satana sar&agrave; vigile. Satana favorisce la divisione, mettendo i padri contro i figli, i figli contro i padri, le madri contro le figlie, le figlie contro le madri, le suocere contro le nuore e le nuore contro le suocere. Perfino Bhagavan (Guru) pu&ograve; consigliarti di non essere d'accordo con coloro che ti si oppongono su questioni di saggezza, sapendo che marito e moglie litigano a causa della Sua saggezza. Di conseguenza, il loro litigio potrebbe intensificarsi anzich&eacute; placarsi. Perci&ograve;, <strong>il Signore ha detto: &ldquo;Non sono venuto a portare riconciliazione, ma divisione&rdquo;. </strong>Pensi che Bhagavan, che &egrave; venuto per insegnare la saggezza sulla terra, ti consigli di prestare attenzione alla tua famiglia trascurando la Sua saggezza? Credi che il Signore, che ti ha ordinato di tagliarti la mano se ostacola la saggezza di Dio, suggerisce di riconciliarti con tua moglie e i tuoi parenti? Mai. Ti ha esortato a non scendere a compromessi con loro, anche se ci&ograve; significa sacrificare la tua vita. Pertanto, a causa della saggezza di Dio, nelle famiglie sorgono molti conflitti. In particolare, ovunque venga proclamata la vera saggezza, ci sar&agrave; discordia all&rsquo;interno della famiglia. Non ci sono disaccordi quando la saggezza di Satana viene presentata sotto le spoglie della saggezza divina. Tutti tendono a sostenere tale saggezza. Si pu&ograve; discernere che se tutti i membri della famiglia diventano avversari a causa della saggezza divina, allora tale saggezza &egrave; genuinamente la saggezza di Dio.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 73,
verse: `<b> 8) Il Vangelo di Luca, capitolo 13, versetto 3.</b>`,
meaning: `<b>(13:3) A meno che non cambiate idea, anche voi perirete tutti.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Manas (mente) è la parte più importante del corpo, chiamata così perché conserva i ricordi. Opera costantemente sotto l’influenza di Maya (Satana), rafforzando le preoccupazioni mondane. Fin dalla nascita di una persona, la mente è stata allineata con Satana e non ha mai funzionato in allineamento con Dio. La trasformazione di tale mente dall’influenza di Satana all’allineamento di Dio è definita “cambiamento di mente”. Nessuno può passare dalla parte di Dio senza un cambiamento nella propria mente. Quando la mente subisce la trasformazione, gnanagni (fuoco della saggezza) inizia a manifestarsi. Attraverso la distruzione del suo intero karma da parte di gnanagni, una persona si unisce a Dio senza sperimentare nascita e morte. Se la mente rimane immutata e continua a dettare i pensieri, un individuo deve sottoporsi a cicli di nascita, morte e sopportare i tormenti dell'inferno. Pertanto, è imperativo che tutti subiscano un cambiamento di mentalità.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 74,
verse: ` <b>9) Il Vangelo di Luca, capitolo 14, versetto 26.</b>`,
meaning: `<b>
(14:26) Se qualcuno viene a me e non odia padre e madre, moglie e figli, fratelli e sorelle — sì, anche la propria vita — tale persona non può essere mio discepolo.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Se qualcuno ascolta questo, rimarrà sorpreso e chiederà: “Che tipo di saggezza è questa? Che tipo di Guru? Che tipo di discepoli?” Si può andare da un Guru e chiedergli: “Qualche Guru dice ai propri discepoli che non sono un discepolo a meno che non rimproverino la propria famiglia?” Dobbiamo pensare qui. Se una persona rimprovera tutta la sua famiglia, il Guru non è un pazzo da compiacersi e accettarla come discepola. Non è consigliabile odiare tutti indiscriminatamente. Il Guru si compiace quando un discepolo, in linea con i sentimenti del Guru, rimprovera gli ignoranti che camminano sul sentiero di Satana. Quando un discepolo si oppone all'ignorante, il Guru percepisce che il discepolo è allineato con i suoi insegnamenti e li accetta. Se un discepolo sostiene gli ignoranti invece di contraddirli, il Guru non li riconoscerà come discepolo. L’odio è comune tra due gruppi: gli gnanis (saggi) e gli ignoranti. Se padre e madre, moglie e figli, fratelli e sorelle rientrano nella lista degli ignoranti, il discepolo dovrebbe opporsi a loro. Il Signore ha detto che chi non si oppone agli ignoranti e favorisce i parenti non è suo discepolo. Si sottolinea che non si dovrebbe scendere a compromessi sull'ignoranza. Gesù disse che il discepolo dovrebbe abbandonare la madre, il padre, i fratelli e le sorelle, la moglie e i figli se ostacolano il cammino verso la saggezza.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 75,
verse: ` <b>10) Il Vangelo di Luca, capitolo 14, versetto 27.</b>`,
meaning: `<b>
(14:27) chi non porta la sua croce e non mi segue non può essere mio discepolo.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando la legna da ardere viene raggruppata, diventa pi&ugrave; facile raccoglierla e trasportarla per lunghe distanze; non sarebbe possibile trasportarlo altrimenti. Allo stesso modo, quando i 108 guna nella mente di una persona sono legati insieme in una condizione disfunzionale, diventano un fascio nelle mani dell'uomo. Nel corpo umano ci sono due tipi di guna: buoni e cattivi<strong>. I sei guna cattivi sono avidit&agrave; (kaama), rabbia (krodha), avarizia (lobha), passione (moha), arroganza (madam) e gelosia (matsara). Allo stesso modo, i sei guna buoni sono carit&agrave; (dana), misericordia (daya), benevolenza (audarya), imparzialit&agrave; (vairagya), umilt&agrave; (vinaya) e amore (prema). </strong>Ciascuno dei sei guna buoni e cattivi &egrave; ulteriormente diviso in nove parti. Pertanto, i sei guna cattivi sono divisi in 54 parti, e anche i sei guna buoni sono divisi in 54 parti. Insieme, i guna buoni e cattivi costituiscono un totale di 108.

  Vengono chiamate le 108 parti dei guna <strong>maya </strong>nella prima Scrittura divina. Nella seconda Scrittura divina vengono chiamati <strong>Satana</strong>. Nella scrittura divina finale, questi guna vengono nominati <strong>Diavolo</strong>. Dio stesso parl&ograve; di Maya come &ldquo;Guna-mayi mama maya&rdquo; nella prima scrittura divina. Significa che Maya, creata da Dio, &egrave; sotto forma di guna nel corpo umano. Dio cre&ograve; Maya principalmente per impedire agli esseri umani di seguire il sentiero divino. Maya pu&ograve; far s&igrave; che una persona rimanga al suo fianco invece di seguire la via di Dio. Si pu&ograve; dire che Maya &egrave; guna, o guna &egrave; Maya. In telugu, Maya significa "invisibile". Maya &egrave; presente nella testa senza essere vista. Maya, che &egrave; presente nel nostro corpo, &egrave; anche chiamata Croce. In senso spirituale, Maya &egrave; paragonata ad un pitone, mentre Atma &egrave; paragonata ad una colomba.

  Un pitone &egrave; un potente serpente. Chi ne &egrave; rimasto intrappolato non pu&ograve; liberarsi. Ci&ograve; significa che Maya &egrave; forte. Ges&ugrave; disse che chiunque controlli, raggruppi e tenga in mano una Maya cos&igrave; forte &egrave; mio discepolo. Ges&ugrave; disse che il vincitore di Maya era veramente un mio discepolo. <strong>Chiunque catturi Maya (la Croce) e segua il cammino di Dio portandola &egrave; un vero discepolo di Dio. </strong>Colui che porta la Croce di cui parliamo tanto oggi e segue Ges&ugrave; &egrave; Suo discepolo, come affermato in questo versetto.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 76,
verse: `<b>11) Il Vangelo di Luca, capitolo 18, versetto 29.</b>`,
meaning: `<b>
(18:29) “In verità vi dico”, disse loro Gesù, “nessuno che abbia lasciato casa o moglie o fratelli o sorelle o genitori o figli per amore del regno di Dio mancherà di ricevere molte volte tanto in questo secolo e nel secolo futuro la vita eterna”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il regno di Dio si riferisce a Moksham, che &egrave; la liberazione dal ciclo delle rinascite. Una volta che una persona ottiene Moksham (liberazione), non rinasce sulla terra e non soffre a causa di Satana. Moksham significa essere liberati da Satana e fondersi con Dio. In altre parole, una persona diventa tutt&rsquo;uno con Dio. L'unione di Jeeva, che &egrave; piccolo e ha una forma specifica, con il Dio infinitamente vasto, illimitato e onnipresente &egrave; un risultato eccezionale. Per raggiungere questa posizione, una persona deve seguire il percorso della saggezza ed essere disposta a rinunciare agli attaccamenti al proprio coniuge, ai figli, ai genitori, ai fratelli e alla casa se questi attaccamenti ostacolano il proprio viaggio spirituale. Una persona del genere diventa uno gnani completo in questo mondo e raggiunge Dio nel Paraloka. Rinunciare al coniuge, ai figli, ai fratelli e ai genitori &egrave; una decisione significativa perch&eacute; Maya circonda una persona e la lega ai suoi cari. Prahlada non cont&ograve; suo padre, Mirabai lasci&ograve; il marito e i parenti e Buddha abbandon&ograve; la giovane moglie, il figlio di un anno, i genitori, la casa e il regno per la saggezza. Quelli che, per&ograve;, prendono le distanze&nbsp;allontanarsi dai propri cari possano avvicinarsi a Dio. Per acquisire qualcuno che &egrave; eterno, lasciare indietro qualcuno che resta con te per un po' &egrave; una decisione intelligente. Tuttavia, una tale decisione pu&ograve; sembrare sciocca al mondo. &Egrave; raro trovare qualcuno disposto a lasciare tutto alle spalle nel regno di Satana per amore di Dio. Perch&eacute; quando qualcuno ha in mente l&rsquo;idea di Dio, Satana si concentra principalmente su di lui e lo distoglie dal pensiero e dal cammino della saggezza. &Egrave; impossibile per una persona superare il potere di Satana e conquistarlo, come affermato nella Bhagavad-Gita, Vignana Yogam, versetto 14. Ci si potrebbe chiedere come sia possibile andare a Dio quando il potere di Satana &egrave; cos&igrave; grande. Perch&eacute; tentare e fallire? Tuttavia, se una persona confida completamente in Dio e continua i propri sforzi nonostante la sua incapacit&agrave; di opporsi a Satana, Dio Stesso la allontaner&agrave; da Satana e la porter&agrave; al Suo fianco. Pertanto, l&rsquo;unico modo in cui il pi&ugrave; piccolo essere umano pu&ograve; sconfiggere Satana &egrave; arrendersi completamente a Dio. La Bhagavad-Gita afferma: <strong>&ldquo;Maya metam tarantite&rdquo;, </strong>il che significa <strong>"Lo tirer&ograve; fuori da Maya," </strong>su coloro che confidano completamente in Dio. Pertanto, se una persona ripone tutta la sua fiducia e il suo fardello in Dio, Dio pu&ograve; salvarla da Satana.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 77,
verse: `<b>12) Il Vangelo di Luca, capitolo 21, versetto 15.</b>`,
meaning: ` <b>
(21:15) Ti darò parole e saggezza a cui nessuno dei tuoi avversari potrà resistere o contraddire. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando i bambini piccoli, che hanno una certa conoscenza della saggezza, mettono in dubbio gli insegnamenti di famosi predicatori e guru, non trovano risposte nei loro insegnamenti. Pertanto, i predicatori hanno stabilito una regola secondo cui nessuno dovrebbe mettere in discussione i loro insegnamenti. La ragione principale della mancanza di risposte nei loro insegnamenti è che non si basano sulla scienza. L’insegnamento non scientifico non può fornire risposte a domande razionali. I predicatori continuano a insegnare, ma non rispondono quando gli viene chiesto. Quando Paramatma si incarna come Bhagavan, insegna la vera saggezza del Paramatma. Pertanto, coloro che conoscono la saggezza insegnata da Bhagavan possono insegnare e rispondere a qualsiasi domanda. Gli avversari che vedono i devoti di Bhagavan, che conoscono la saggezza del Paramatma, si avvicinano a loro con l’ego di essere guru e gnani e parlano in modo contraddittorio. La saggezza contro cui gli avversari non possono opporsi è già stata raccontata ai devoti in quel momento. La parola di Dio dice che molte persone sono gelose e aumentano la rivalità contro coloro che conoscono la vera saggezza. Anche quando Dio scese, gli avversari Lo affrontarono e dissero: “Non conosci ancora la saggezza e devi andare in un luogo specifico per imparare la vera saggezza”. Alcune persone vennero da me e dissero: “Tu non conosci la saggezza”. Anche queste persone verranno da te. Dio ha detto nel versetto sopra che ti avrebbe dato la saggezza per rispondere.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Luca",
chapterNumber: 4,
pageNumber: 78,
verse: ` <b>13) Il Vangelo di Luca, capitolo 21, versetto 17. </b>`,
meaning: `<b>
(21:17) Tutti vi odieranno a causa mia. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La saggezza rivelata da Bhagavan, il Figlio di Dio, &egrave; contro coloro che sono posseduti da Satana. C'&egrave; la possibilit&agrave; che la gente comune possa fraintendere questa saggezza, poich&eacute; sembra essere del tutto contro i predicatori e i guru che possiedono qualche&nbsp;saggezza. Pandit, predicatori e guru spesso non amano le parole di coloro che predicano il nome di Dio. Loro, e le persone che li seguono, cominciano a odiare coloro che predicano la via di Dio perch&eacute; trovano le parole di Dio contrarie ai loro insegnamenti. Pertanto, Dio ha detto nel versetto precedente: <strong>"Tutti ti odieranno a causa mia." </strong>
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 79,
verse: `<b> 1) Il Vangelo di Giovanni, 1° capitolo, 1° versetto.</b>`,
meaning: `<b>(1:1) In principio era la Parola, e la Parola era presso Dio, e la Parola era Dio.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">

  Il Vangelo di Giovanni comprende 21 capitoli. In questo versetto fornirò spiegazioni per alcuni versetti che gli esseri umani non sono riusciti a comprendere, hanno frainteso o potrebbero interpretare in modo errato. Ho scelto questi versetti come parte del servizio a Dio, sentendomi come una semplice penna che Dio mi usa per svolgere questo lavoro. In precedenza, ho spiegato alcuni versetti della prima scrittura divina, la Bhagavad-Gita, e della terza scrittura divina, il Corano. Poiché desidero profondamente spiegare tutte e tre le scritture divine, illustrerò ora alcuni versetti della seconda scrittura divina, l'Injeel (Bibbia). La saggezza fornita in queste scritture è scientifica e autentica. Esaminiamo ora il primo versetto del primo capitolo del Vangelo di Giovanni, che è composto da tre brevi frasi che devono essere spiegate per comprenderlo appieno.

  Parliamo ora delle prime tre parole del Vangelo di Giovanni nella seconda Scrittura divina.
  <strong>La Parola era al principio.&nbsp;</strong>
  <strong>La Parola era con Dio.</strong>
  <strong>La Parola era Dio.</strong>

  Negli insegnamenti della Bibbia, ci riferiamo a questi tre versetti come ai versetti iniziali della Bibbia. Alcuni potrebbero obiettare che i versetti della Genesi dovrebbero essere definiti le prime parole della Bibbia. Tuttavia abbiamo gi&agrave; spiegato il nostro metodo. Considereremo gli insegnamenti di cui gli esseri umani hanno bisogno come scritture e ne discuteremo i primi versetti. Seguendo questo principio, Bhagavan Jesus insegn&ograve; i quattro Vangeli. Anche se il Vangelo di Giovanni fu l'ultimo, cominci&ograve; con gli insegnamenti. Allo stesso modo, abbiamo preso l&rsquo;undicesimo versetto del secondo capitolo come l&rsquo;inizio della Bhagavad-Gita perch&eacute; la saggezza di Dio &egrave; iniziata da l&igrave;. Abbiamo anche preso i versi 11, 12 e 13 del Sankhya-Yoga come prime tre frasi. Allo stesso modo, i primi versi sono stati presi dal 43&deg; capitolo dell'Injeel (la Bibbia), e abbiamo preso tre versi dal Taurat (Bhagavad-Gita) come prime tre frasi. Qui, tuttavia, abbiamo preso tre frasi da un versetto del Vangelo di Giovanni come prime tre frasi, anzich&eacute; tre versetti consecutivi. La sequenza delle frasi non &egrave; importante; abbiamo preso come tre frasi quelle che trasmettevano tre significati. Sebbene si tratti di tre frasi brevi, ognuna di esse ha un significato profondo.

  Queste tre frasi trasmettono significati sottili. Le prime tre frasi della Bhagavad-Gita approfondiscono i concetti di Jeevatma e Atma. Tuttavia, le parole iniziali del Vangelo di Giovanni insegnano un significato speciale. L'iniziazione del Bhagavad-Gita discute le tre componenti: Jeevatma, Atma e il corpo. Al contrario, le tre frasi iniziali del Vangelo di Giovanni esplorano i tre aspetti: Saggezza, Atma e Paramatma. Tuttavia, queste frasi non chiariscono esplicitamente le posizioni di Atma e Paramatma. Sebbene il termine &ldquo;Dio&rdquo; appaia in due frasi, saggezza e Atma rimangono ambiguamente identificabili. Ora, esaminiamo attentamente la prima frase del trio.

  La prima frase &egrave; <strong>&ldquo;La Parola era al principio&rdquo;. </strong>Una parola si articola in un discorso, generato dal suono emanato dalla bocca. Si pu&ograve; percepire un suono e discernere se una frase &egrave; lunga o breve in base ai segnali uditivi. Il linguaggio della frase potrebbe non essere necessariamente familiare e pu&ograve; variare in lunghezza. Non &egrave; possibile determinare se la parola (frase) sia stata pronunciata a voce bassa o ad alta voce. Analizziamo la frase <strong>&ldquo;La Parola era al principio&rdquo;. </strong>Anche se sappiamo che la parola veniva pronunciata all'inizio, in quella fase iniziale gli esseri umani non possedevano alcuna competenza linguistica. Pertanto, sorge una domanda pertinente sulla lingua in cui &egrave; stata pronunciata la parola. Per rispondere a questa indagine, consideriamo gli eventi accaduti all&rsquo;inizio.

  Se inizialmente ci informiamo sull'origine del suono, possiamo attribuire il suono udito dall'orecchio umano a Prakruti. Prakruti comprende cinque grandi bhoota: Terra, Acqua, Aria, Fuoco e Cielo, ciascuno dei quali possiede la vita. Il Cielo, dotato di vita, gener&ograve; in principio il suono. Ci&ograve; solleva la questione di come il Cielo produca il suono quando &egrave; apparentemente vuoto. Questa indagine &egrave; razionale e la comprensione delle risposte la trasforma in un'esplorazione scientifica. Secondo Brahma Vidya Shastra, &egrave; stato il Cielo stesso a creare il suono? Poich&eacute; il Cielo &egrave; un Jeeva, Jeevatma non &egrave; capace e non pu&ograve; agire secondo principi scientifici; &egrave; il dharma di Jeevatma. Anche il Paramatma ha un dharma. Paramatma (Dio) non possiede un nome, una forma o un'opera. Questo &egrave; il dharma primario di Dio. Dio non &egrave; un agente d'azione; Non si impegna nel lavoro. Secondo il Dharma di Jeevatma, Jeevatma non &egrave; capace e non pu&ograve; svolgere alcun lavoro. Sebbene Dio sia capace, non intraprende alcuna azione. Pertanto, Jeevatma e Dio hanno dharma opposti. In principio la parola emanava attraverso il Cielo. Poich&eacute; anche il Cielo &egrave; un Jeeva, non ha prodotto quel suono. Il suono proveniente dal Cielo &egrave; un evento reale, ma il Jeeva del Cielo non &egrave; in grado e non pu&ograve; generare alcun suono. Quindi, qualcuno dietro il cielo potrebbe essere stato la fonte del suono. Dio non ha creato il suono perch&eacute; non &egrave; impegnato nell&rsquo;opera. Sebbene il suono del cielo sia vero, n&eacute; il Jeeva del cielo n&eacute; Dio sono la causa del suono. Potrebbe sorgere il dubbio se ci fosse qualcuno al di fuori di entrambi.

  Per dissipare questo dubbio, &egrave; essenziale comprendere le entit&agrave; dell'universo. Inizialmente, Dio cre&ograve; l'universo. Dio, pur essendo Dio, cre&ograve; Prakruti da Se stesso. Prima cre&ograve; Prakruti come cinque parti e poi cre&ograve; Atma e Jeevatma per infondere vitalit&agrave; in Prakruti, che era priva di vita. Simile a Se stesso, Dio cre&ograve; l'Atma e il Jeevatma maschili (Purusha). Design&ograve; Jeevatma come passeggero e Atma come autista, affidando ad Atma l'esecuzione di tutti i compiti. In ogni individuo, l'Atma svolge tutte le funzioni del corpo mentre coesiste con Jeevatma. Nelle Sue scritture, Dio afferma che anche i grandi studiosi potrebbero non comprendere appieno l&rsquo;Atma. Soltanto gli yogi devoti, come menzionato nell'undicesimo verso della Bhagavad-Gita Purushottama Prapti Yoga, possono veramente comprendere l'Atma, sottolineando che l'Atma rimane nascosto nel corpo senza essere conosciuto.

  Se Dio non opera, alcuni potrebbero chiedersi come ha creato Prakruti, Atma e Jeevatma. La mia risposta &egrave; che &egrave; vero che Dio non opera. Questo principio &egrave; stato articolato da Dio dopo la creazione di Prakruti, Atma e Jeevatma. Prima dell&rsquo;atto della creazione, Dio era l&rsquo;unica esistenza e, durante quel periodo, Dio era impegnato nell&rsquo;opera. Non esisteva altra entit&agrave; oltre a Dio prima della creazione. Di conseguenza, Dio ha operato prima dell'atto della creazione. Dio cre&ograve; Prakruti, seguito dalla creazione di Atma e Jeevatma. Successivamente, Dio stabil&igrave; il Suo dharma. Mentre Dio si astenne dall'operare dopo la creazione, Egli era attivo prima dell'atto della creazione. Dio ha delegato tutte le responsabilit&agrave; ad Atma e ha stabilito che Atma avrebbe eseguito tutti i compiti. Di conseguenza, Paramatma smise di impegnarsi nelle azioni che era solito compiere dopo la creazione di Atma. Quando Atma si assunse le responsabilit&agrave;, Paramatma divenne un osservatore passivo (testimone).

  Dio non si impegna nel lavoro; Jeeva &egrave; incapace di agire e Atma &egrave; colei che svolge tutti i compiti. Pertanto all'inizio fu Atma a produrre il suono dal Cielo. Atma, nascosta nel Cielo, ha generato il suono. Il suono creato da Atma divenne la saggezza di Dio, per questo chiamata &ldquo;parola&rdquo;, a significare un suono dotato di significato. Descrivendo l'evento di creazione, la frase <strong>&ldquo;La Parola era al principio&rdquo; </strong>&egrave; usato per esprimere che un suono significativo proveniva dal Cielo. Abbiamo imparato cos&rsquo;&egrave; la &ldquo;parola&rdquo; e chi l&rsquo;ha articolata. La &ldquo;parola&rdquo; &egrave; stata pronunciata con la saggezza di Dio da Atma sotto forma di suono. Ci&ograve; che Atma ha articolato dal Cielo &egrave; diventata la prima saggezza per il mondo. Sebbene il suono proveniente dal Cielo contenesse saggezza, si manifest&ograve; come un suono forte sotto forma di tuono, oltre la comprensione del linguaggio umano. Il Sole comprese il suono fragoroso nel Cielo e, riconoscendone l'incomprensibilit&agrave; per gli esseri umani, trasmise il messaggio a un uomo di nome Manu sulla Terra in una lingua compresa dagli umani.

  La saggezza di Dio manifestata sotto forma di un suono incomprensibile all&rsquo;inizio della creazione. Ci&ograve; si articola nella prima frase del primo capitolo del Vangelo di Giovanni, affermando che il <strong>&ldquo;La Parola era al principio&rdquo;. </strong>Quel giorno gli esseri umani non erano consapevoli che quel suono portava con s&eacute; la saggezza di Dio; Hanno capito solo qualcosa quando il Sole ha trasmesso il messaggio. Krishna trasmise la stessa saggezza nella forma della Bhagavad-Gita, affermando che si trattava della stessa saggezza espressa all'inizio della creazione. Tuttavia, all'inizio l'attenzione umana non si concentr&ograve; sul suono del tuono e fino ad oggi nessuno si rende conto che il suono del tuono racchiude la saggezza della Bhagavad-Gita. Il Sole trasmise a Manu la stessa saggezza di cui Krishna aveva parlato, traducendo la saggezza proveniente dal cielo sotto forma di tuono. La saggezza del suono del Cielo emerse dall'Atma del Cielo. La saggezza dell&rsquo;Atma ha origine dall&rsquo;Atma stesso. L'Atma stesso divenne la saggezza, e la stessa saggezza venne fuori dall'Atma. Questa saggezza dell'Atma &egrave; paragonabile al modo in cui il cotone si trasforma in filo e il filo emerge dal cotone. Mentre cotone e filo sono distinti, il cotone diventa il filo. Allo stesso modo, Atma e saggezza sono diversi, ma la saggezza dell&rsquo;Atma emana dall&rsquo;Atma. Se il filo &egrave; separato, &egrave; costituito da fibre di cotone; allo stesso modo, se la saggezza dell&rsquo;Atma viene sezionata, contiene l&rsquo;essenza dell&rsquo;Atma.

  All'inizio, Dio trasmise la Sua saggezza attraverso il suono del Cielo, come descritto nel Corano 42:51, dove uno dei modi in cui Dio rivela la Sua saggezza &egrave; attraverso la rivelazione dal Cielo. Dio ha trasmesso la Sua saggezza attraverso l'Atma del Cielo durante l'inizio della creazione. La saggezza, presentata sotto forma di tuono, non era comprensibile agli umani poich&eacute; mancava di un linguaggio che potessero comprendere. Di conseguenza, il Sole, avendo colto la saggezza nei tuoni, la trasmise all'uomo sulla terra in linguaggio umano. Alla fine, questa saggezza si diffuse in tutta la terra. Tuttavia, col passare del tempo, gli adharma sostituirono i dharma, facendo svanire dalla memoria umana la saggezza inizialmente trasmessa. Nel Dvapara Yuga, Bhagavan assunse la forma di Krishna e inform&ograve; Arjuna che condivideva la stessa saggezza trasmessa dal Sole. Pur avendo la stessa saggezza presentata sotto forma di Bhagavad-Gita, la prima scrittura divina, gli esseri umani ne hanno dimenticato le origini.

  Le prime tre frasi del Vangelo di Giovanni furono scritte 3000 anni dopo la pronuncia della Bhagavad-Gita, poich&eacute; gli esseri umani avevano dimenticato la saggezza impartita da Dio. La frase <strong>&ldquo;La Parola era al principio&rdquo; </strong>ormai &egrave; capito. &Egrave; riconosciuto che la saggezza sotto forma di tuono ha avuto origine dall'Atma del Cielo, come indicato nella seconda frase. Pertanto si afferma ci&ograve; <strong>&ldquo;La Parola era presso Dio&rdquo;. </strong>Un'ulteriore esplorazione rivela che il suono della parola &egrave; nato dall'Atma. Proprio come il filo ritorto emerge dalla fibra di cotone, la mobilit&agrave; dell&rsquo;Atma si trasforma in energia e la saggezza nell&rsquo;energia si manifesta sotto forma di suono. Proprio come il filo contiene la fibra di cotone, il suono della saggezza racchiude il potere dell&rsquo;Atma. La saggezza dell&rsquo;Atma &egrave; nella forma sia del potere dell&rsquo;Atma che dell&rsquo;Atma stesso. La saggezza dell&rsquo;Atma e l&rsquo;Atma sono la stessa cosa, e per questo &egrave; detto: <strong>&ldquo;La Parola era Dio&rdquo;.</strong>

  Finora abbiamo discusso del fatto che Dio cre&ograve; Jeevatma e Atma, operando attivamente prima della creazione. Tuttavia, dopo l&rsquo;atto della creazione, Dio diede ad Atma il potere di svolgere i compiti, apparentemente scomparendo e rendendo sconosciuta la Sua presenza. Dio si astenne dall&rsquo;eseguire qualsiasi compito e, in questo stato, divent&ograve; simile a qualcuno che non esisteva. Di conseguenza, Atma si assunse la responsabilit&agrave; di compiere l&rsquo;opera di Dio. Sebbene l'Atma esegua le funzioni sia di Jeevatma che di Paramatma, le sue azioni rimangono nascoste agli altri. Le predette dichiarazioni delineano l'intero processo operativo di Atma. Inizialmente, quando Paramatma cre&ograve; l'universo, c'erano tre anime, ma dopo la creazione vengono riconosciute solo due anime: Jeevatma e Atma. In assenza della presenza di Paramatma, Atma assume il ruolo di Paramatma, motivo per cui Atma pu&ograve; essere definito Dio. Pur non essendo Dio (Paramatma), Atma svolge i compiti di Dio e occupa la posizione di Dio.

  La saggezza dell'Atma ha origine dall'Atma stesso. Affermando che Atma &egrave; Dio, si afferma questo <strong>La Parola (saggezza) era presso Dio</strong>. Questa affermazione &egrave; accurata quando consideriamo Atma come Dio. Anche se Atma non &egrave; Dio, deve essere riconosciuto come Dio perch&eacute; Dio ha conferito ad Atma l&rsquo;autorit&agrave; di agire come Dio. Pertanto, quando la Parola (saggezza) viene identificata come Atma, si pu&ograve; dichiarare che la stessa saggezza (Atma) &egrave; Dio. Questa spiegazione &egrave; in linea con l'affermazione nel Vangelo di Giovanni che <strong>La Parola era Dio</strong>. Dopo aver affrontato domande come &ldquo;Cos&rsquo;&egrave; la Parola?&rdquo;, &ldquo;Come &egrave; collegata la Parola all&rsquo;Atma?&rdquo; e &ldquo;Perch&eacute; Atma &egrave; considerato Dio?&rdquo;, presumo che il significato delle prime tre frasi del Vangelo di Giovanni 1:1 sia ora comprensibile. Se uno Se non si riesce a coglierlo dopo una spiegazione cos&igrave; dettagliata, la saggezza dell'Atma potrebbe rimanere sfuggente. Comprendere la saggezza di Atma &egrave; fondamentale per comprendere il sistema di Dio. Per discernere le vie di Dio, bisogna iniziare con la comprensione della saggezza della Parola. Una volta conosciuta questa saggezza, diventa evidente che la saggezza &egrave; Atma e l&rsquo;Atma &egrave; Dio.


  <table>
  <tbody>
  <tr>
  <td>
  <strong>Alla creazione</strong>
  </td>
  <td>
  <strong>Dio (Paramatma)</strong>
  </td>
  <td>
  <strong>Prakriti</strong>
  </td>
  <td>
  <strong>Atma</strong>
  </td>
  <td>
  <strong>Jeevatma</strong>
  </td>
  </tr>
  <tr>
  <td>
  <strong>Dopo la creazione</strong>
  </td>
  <td>
  <strong>(Paramatma)</strong>
  </td>
  <td>
  <strong>Prakriti</strong>
  </td>
  <td>
  <strong>Atma</strong>
  </td>
  <td>
  <strong>Jeevatma</strong>
  </td>
  </tr>
  <tr>
  <td>
  <strong>Dopo la creazione</strong>
  </td>
  <td>
  <strong> Atma (Dio)</strong>
  </td>
  <td>
  <strong>Prakriti</strong>
  </td>
  <td>
  <strong>Atma</strong>
  </td>
  <td>
  <strong>Jeevatma</strong>
  </td>
  </tr>
  </tbody>
  </table>

  Nell'atto della creazione, Dio ha lavorato per creare sia la Prakruti femminile che l'Atma e Jeevatma maschili. Inizialmente, Dio, come Purusha (maschio), cre&ograve; due anime, Atma e Jeevatma, simili a Lui. Dopo la creazione di Prakruti, Atma e Jeevatma, Dio pass&ograve; al ruolo di testimone senza coinvolgimento attivo. Data la natura innata di Dio che non si impegna nel lavoro, pu&ograve; sembrare che Dio non esista, nonostante la Sua esistenza. Quando l&rsquo;equilibrio dei dharma viene interrotto e gli adharma prevalgono sulla Terra, Dio invia la Sua anima come Bhagavan per restaurare i dharma. Nel ristabilire i dharma, viene inviato il rappresentante di Dio, eliminando la necessit&agrave; che Dio si impegni direttamente nell&rsquo;opera. L'Atma, d'altro canto, si assume la responsabilit&agrave; di tutti gli altri compiti. Di conseguenza, dopo la creazione, Dio diventa inerte e apparentemente irrilevante. Si potrebbe affermare che Dio, in questo stato, appare inesistente. L'Atma interviene per riempire il vuoto percepito di Dio e diventa effettivamente Dio, rendendoci ignari dell'assenza di Dio. Da qui la frase <strong>&ldquo;La Parola era Dio&rdquo; </strong>&egrave; presentato nella seconda Scrittura divina, a significare una distinzione tra Dio e la Parola. Anche se la parola non &egrave; intrinsecamente Dio, si &egrave; trasformata in Dio. L'espressione <strong>&ldquo;La Parola era Dio&rdquo; </strong>mette in risalto la trasformazione della Parola (sapienza) in Dio. Poich&eacute; la parola (saggezza) &egrave; identificata con Atma, e Atma &egrave; considerato Dio, si afferma che Atma, essendo la parola, &egrave; Dio. Tutti sbagliano nel sapere chi &egrave; Dio e chi &egrave; Atma.

  In realt&agrave;, Dio non esiste pi&ugrave; dopo l'atto della creazione. Senza che nessuno sappia che non esiste Dio nel mondo, Atma assume il ruolo di Dio, eseguendo i doveri sia di Jeevatma che di Prakruti. Allo stesso tempo, l'Atma assume una posizione simile a Dio. Dopo la creazione, Dio si trasform&ograve; in un'entit&agrave; senza forma e senza nome, senza compiti assegnati. Descrivere un tale Dio come inesistente potrebbe essere pi&ugrave; accurato che affermare la Sua esistenza. Poich&eacute; non esiste alcuna entit&agrave; al posto di Dio, Atma assume il ruolo di Dio, chiarito dalla frase <strong>&ldquo;La Parola era Dio</strong>"nella terza frase. Nonostante molte persone ascoltino e studino queste frasi, il segreto sottostante rimane sconosciuto.

  Per chiarire la realt&agrave; dell&rsquo;Atma, che incarna il ruolo di Dio, si afferma quanto segue <strong>&ldquo;La Parola era Dio&rdquo;. </strong>Quando Atma, personificando Dio, si impegna in qualsiasi azione, attribuisce l&rsquo;azione a &ldquo;Jeevatma ha fatto&rdquo; o &ldquo;Dio ha fatto&rdquo;, convincendo tutti dell&rsquo;esistenza di Dio. Potrebbero sorgere domande su chi detiene l&rsquo;autorit&agrave; sull&rsquo;universo se non esiste Dio, o se questa prospettiva &egrave; in linea con la saggezza di Dio o l&rsquo;ateismo. La risposta a queste domande &egrave; la seguente: stiamo dicendo che Dio non &egrave; al posto di Dio, ma non stiamo dicendo che Dio non esiste affatto. Le azioni di Dio rimangono sconosciute e viene sottolineato che Egli non ha un nome, un&rsquo;opera o una forma, quindi non ha alcun rapporto diretto con gli esseri umani, ma non abbiamo mai detto che Dio non esistesse affatto. A volte di una minaccia ai dharma, Dio invia il Suo rappresentante per ristabilire l&rsquo;ordine. Anche in questo scenario, il rappresentante si astiene dal dichiarare esplicitamente di essere Dio, adottando il soprannome di &ldquo;Bhagavan&rdquo;. Il mistero che circonda l&rsquo;identit&agrave; e le qualit&agrave; di Dio persiste. Dio &egrave; l&igrave;, eppure nessuno sa com'&egrave; Dio. Nessuno ha visto o comunicato direttamente con Dio sin dalla creazione. Si pu&ograve; dire tutto su qualsiasi cosa nel mondo, ma nessuno pu&ograve; dire nulla di definitivo su Dio. Termini come &ldquo;Allah&rdquo; nel Kruta Yuga indicano la natura illimitata di Dio, e designazioni come &ldquo;Parabrahma&rdquo; sottolineano la superiorit&agrave; di Dio su Atma, che ricopre vari ruoli. Inoltre, il termine &ldquo;Paramatma&rdquo; evidenzia la distinzione di Dio da Atma, e &ldquo;Purushottama&rdquo; denota la supremazia di Dio rispetto a Jeevatma e Atma. &Egrave; meglio ammettere che n&eacute; tu n&eacute; io sappiamo nulla di Dio.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 80,
verse: ` <b> 2) Il Vangelo di Giovanni, 1° capitolo, 9° versetto.</b>`,
meaning: `<b>
(1:9) Veniva nel mondo la luce vera, quella che illumina ogni uomo.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Se c'&egrave; luce nel mondo esterno, &egrave; grazie ad un fuoco che brucia. Tuttavia, in questo contesto, nel versetto viene menzionata la vera luce. La vera luce si accende senza fuoco ed entra in ogni essere umano, illuminandone l'intero corpo dalla testa ai piedi. Esiste solo una luce senza fuoco, ed &egrave; Atma, che viene da Dio ed &egrave; designata da Dio (il Creatore). L'Atma fornisce la luce della coscienza all'intero corpo. Quando l'Atma entra nel corpo, i 25 trilioni di cellule del corpo umano vengono riempiti della sua luce. Ogni cellula diventa una lampada accesa senza fuoco. La luce della lampada ha una temperatura specifica. Il corpo umano ha una temperatura di 98,4 &deg;F a causa della luce dell&rsquo;Atma. Quando l'Atma lascia il corpo, il corpo diventa freddo senza alcun calore. Un corpo senza la luce dell&rsquo;Atma &egrave; chiamato corpo morto. Nel versetto 24:35 si dice: <strong>&ldquo;Atma &egrave; la luce e il corpo &egrave; la nicchia&rdquo;. </strong>Si pu&ograve; affermare che l'Atma, che illumina il corpo, pu&ograve; essere definita la vera luce.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 81,
verse: ` <b>3) Il Vangelo di Giovanni, 1° capitolo, 10° versetto.</b>`,
meaning: ` <b>
(1:10) Era nel mondo, e sebbene il mondo sia stato creato per mezzo di lui, il mondo non lo ha riconosciuto.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il termine "Loka (mondo)" in telugu si riferisce a qualcosa che subisce esperienze. L'Atma è presente negli esseri umani che subiscono esperienze ed è il creatore di tutti gli esseri umani. Tuttavia, è fondamentale riconoscere la distinzione tra Atma e Dio. Dio creò Atma e Atma, a sua volta, creò gli esseri umani. È importante capire che Dio non ha creato direttamente gli esseri umani; formò invece l'intero Prapancha, inizialmente privo di esseri viventi. Dio prima ha prodotto Prakruti e poi ha conferito all'Arma il potere di generare, governare e porre fine alla vita umana. Da allora, l’Atma ha continuato a creare gli esseri umani, funzionando come la luce che sostiene la vita umana e orchestrando i processi di morte e rinascita. Nonostante ciò, gli esseri umani spesso rimangono ignari della presenza dell’Atma, che è vicino e dentro di loro ed è essenzialmente Dio. L'Atma dà alla luce gli esseri umani; quindi Atma è il Padre per gli esseri umani. Dio creò l'Atma; quindi Egli è il Padre di Atma. Sebbene Atma venga talvolta chiamato Dio, il vero Dio è lo Spirito Santo, mentre Atma è il Padre degli esseri umani.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 82,
verse: ` <b> 4) Il Vangelo di Giovanni, 1° capitolo, 11° versetto.</b>`,
meaning: `  <b>
(1:11) Egli venne a ciò che era suo, ma i suoi non lo accolsero. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il termine “suoi” comprende tutti coloro che Egli ha creato. Atma, agendo secondo il comandamento dello Spirito Santo, portò all'esistenza gli esseri umani e si manifestò loro sotto forma di saggezza divina, chiamata Parola. Anche se l’Atma è giunto agli esseri umani sotto forma di saggezza, gli esseri umani tendono a percepire la propria conoscenza come significativa, spesso trascurando o respingendo la saggezza offerta.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 83,
verse: `  <b>5) Il Vangelo di Giovanni, 1° capitolo, 12° versetto.</b>`,
meaning: `<b>
(1:12) Eppure a tutti quelli che lo ricevettero, a quelli che credevano nel suo nome, diede il diritto di diventare figli di Dio. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Coloro che comprendono la saggezza offerta dall'Atma, l'abbracceranno. Coloro che conoscono la saggezza dell’Atma e mantengono fede nell’Atma hanno la prospettiva di diventare i suoi eredi. Di conseguenza, il versetto afferma: “Ha dato il diritto di diventare figli di Dio”. Il termine “figli di Dio” denota coloro che hanno familiarità con la saggezza di Atma.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 84,
verse: ` <b>6) Il Vangelo di Giovanni, 1° capitolo, 13° versetto.</b>`,
meaning: `<b>
(1:13) Uomini nati non da discendenza naturale, né da decisione umana o volontà di un marito, ma nato da Dio.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Tutti gli esseri umani provengono da Atma. Non nascono da sangue di donna né la volontà dei maschi o delle femmine.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 85,
verse: `<b> 7) Il Vangelo di Giovanni, 1° capitolo, 14° versetto.</b>`,
meaning: ` <b>
(1:14) Il Verbo si fece carne e venne ad abitare in mezzo a noi. Abbiamo visto la sua gloria, la gloria del Figlio unigenito, venuto dal Padre, pieno di grazia e di verità. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il Dio Atma (Saggezza) assunse una forma fisica, simile a quella di un essere umano, e dimorò tra gli esseri umani, irradiando grazia e saggezza.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 86,
verse: `  <b>8) Il Vangelo di Giovanni, 1° capitolo, 18° versetto.</b>`,
meaning: ` <b>
(1:18) Nessun uomo ha mai visto Dio; lo ha rivelato il Figlio unigenito, che è nel seno del Padre. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La parola &ldquo;Dio&rdquo; &egrave; usata sia per Atma che per Paramatma. Nella scrittura divina finale, il termine &ldquo;Allah&rdquo; &egrave; usato per entrambi gli Dei: Atma e Paramatma. Quindi, i musulmani non potevano riconoscere due Dei. Per evitare questo errore, la Bibbia afferma che Atma &egrave; il Padre e Paramatma &egrave; lo Spirito Santo. Il termine &ldquo;Figlio generato&rdquo; si riferisce a <strong>l'unico figlio creato da Dio</strong>. Paramatma (lo Spirito Santo) &egrave; eterno. Dopo aver creato Prakruti all'inizio, Paramatma cre&ograve; un figlio chiamato Atma per portare all'esistenza tutti gli esseri viventi. Atma ha creato tutti gli esseri viventi secondo i comandamenti dello Spirito Santo. Pertanto, esiste un solo Padre (creato Dio) per tutti gli esseri viventi. Il Padre dell'Atma creato &egrave; lo Spirito Santo. &ldquo;<strong>Nessuno ha mai visto Dio (lo Spirito Santo o Paramatma)&rdquo; </strong>come affermato nel versetto. Dio (lo Spirito Santo) non ha forma, nome o opera; quindi nessuno ha mai visto il Paramatma. Atma, il Figlio unigenito, rivela il Dio invisibile attraverso la Sua saggezza. Atma &egrave; il Figlio unigenito separato dal cuore del Grande Dio, Paramatma. Poich&eacute; nessuno ha visto lo Spirito Santo, solo Atma pu&ograve; parlare di suo Padre, lo Spirito Santo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 87,
verse: ` <b>9) Il Vangelo di Giovanni, 1° capitolo, 51° versetto.</b>`,
meaning: `<b>
(1:51) Poi aggiunse: “In verità vi dico, vedrete il cielo aprirsi e gli angeli di Dio salire e scendere sul Figlio dell’Uomo”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Questa è la parola che Gesù ha rivolto allo stesso Natanaele. Gesù affermava di essere il Figlio dell'uomo, anche se Natanaele lo aveva definito il Figlio di Dio. Gesù non ha negato di essere Figlio di Dio ma si è invece ridotto a Figlio dell'Uomo. Assicurò a Natanaele e ad altri che sarebbero stati testimoni di eventi straordinari. Come abbiamo sottolineato in precedenza, i servitori di Dio, gli angeli, servono come governanti nel mondo umano. Questi angeli, spesso indicati come Bhuta e Pianeti (Graha), sono numerosi nel cielo, per un totale di miliardi. Durante l'incontro con Gesù, i servi di Dio, consapevoli della Sua identità, scesero dal cielo e si inchinarono davanti a Lui. Tuttavia, molti esseri umani rimangono inconsapevoli di chi sia veramente Gesù e non si inchinano davanti a Lui. Riferimenti simili si trovano nel Corano, l'ultima scrittura divina, in particolare nei versetti 15:28, 15:29 e 15:30. Nel verso menzionato, è profetizzato che Natanaele sarebbe stato testimone della presenza di Bhuta e Graha attorno al Figlio dell'Uomo, come se le porte del cielo si fossero aperte. La frase “ascendere e discendere” denota andare e venire, mentre “discendere sul Figlio dell’Uomo” implica l’arrivo degli angeli a Gesù. Quando Natanaele riconobbe Gesù come il Figlio di Dio, Gesù, riconoscendo la visione saggia di Natanaele, gli assicurò nel versetto 50 che sarebbe stato testimone di fenomeni ancora più grandi. Segue il versetto 51, in cui si esprime che Natanaele, possedendo una visione saggia, poteva percepire cose oltre la vista ordinaria degli altri. Gli eventi descritti nel versetto 51 sono visibili solo a coloro che possiedono la saggezza divina, fornendo informazioni sulla vera identità di Gesù.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 88,
verse: `<b>10) Il Vangelo di Giovanni, 3° capitolo, 3° versetto.</b>`,
meaning: ` <b>
(3:3) Gesù rispose: “In verità, in verità vi dico, nessuno può vedere il regno di Dio se non rinascono.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il versetto non dovrebbe essere interpretato alla lettera, poiché ha un significato simbolico più profondo. Dio e il Suo regno sono al di là della visibilità fisica per chiunque. Gesù ha trasmesso esplicitamente che comprendere e percepire il regno di Dio richiede una rinascita spirituale. Ciò non implica una morte fisica e una successiva rinascita. Se preso alla lettera, significherebbe che chiunque cerchi di conoscere Dio dovrebbe subire una morte fisica, il che è un malinteso. Nicodemo, che sosteneva un'interpretazione letterale, sollevò una questione basata su questo malinteso.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 89,
verse: `<b>11) Il Vangelo di Giovanni, 3° capitolo, 4°, 5°, 6°, 7° e 8° versetto.</b>`,
meaning: `<b>
(3:4) “Come può qualcuno nascere quando è vecchio?” chiese Nicodemo. “Certamente non possono entrare una seconda volta nel grembo della madre per nascere!”
<br><br>
(3:5) Gesù rispose: “In verità, in verità ti dico, nessuno può entrare nel regno di Dio a meno che non siano nati dall'acqua e dallo Spirito (Atma).
<br><br>
(3:6) La carne genera carne, ma lo Spirito (Atma) genera spirito.
<br><br>
(3:7) Non dovresti sorprenderti se dico: “Devi rinascere”.
<br><br>
(3:8) Il vento soffia dove vuole. Ne senti il ​​suono, ma non puoi dire da dove viene o dove sta andando. Così è per chiunque sia nato dallo Spirito (Atma).” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando un uomo muore e rinasce, si chiama rinascita. Se la rinascita avviene fisicamente, tutti gli organi dell'uomo cambieranno. Se ci&ograve; accadesse, anche il desiderio di vedere Dio e il suo Regno svanirebbe. Il corpo non dovrebbe morire per mantenere gli organi e le ambizioni cos&igrave; come sono. Il corpo contiene sia saggezza che ignoranza, ma l'ignoranza nel corpo dovrebbe morire completamente. Quando un uomo si libera dei pensieri e dei desideri ignoranti, &egrave; considerato morto nell'ignoranza e nato dalla saggezza. Si pu&ograve; dire che colui che si libera dell'ignoranza e acquisisce la saggezza sia nato da Atma. <strong>Il dovere dell'uomo &egrave; conoscere l'Atma nel corpo</strong>. Per conoscere l&rsquo;Atma, bisogna conoscere la saggezza dell&rsquo;Atma. Quando un uomo conosce la saggezza dell'Atma, &egrave; considerato nato da Atma. Quando il corpo muore, un uomo ottiene un nuovo corpo, ma cambiare la propria volont&agrave; nello stesso corpo senza ottenere un nuovo corpo &egrave; come una nuova nascita. Il vento soffia dove vuole e ne sentiamo il suono a seconda di dove soffia. Come il vento cambia direzione, se un uomo cambia il suo scopo, per lui sar&agrave; una nuova nascita. Chi desidera l'Atma conosce l'Atma nello stesso corpo e nella stessa vita. Non &egrave; necessario andare in un'altra vita per conoscere l'Atma.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 90,
verse: `<b>12) Il Vangelo di Giovanni, 3° capitolo, 13° versetto. </b>`,
meaning: `<b>
(3:13) Nessuno è mai andato a Paraloka tranne colui che veniva da Paraloka —il Figlio dell'Uomo. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ihaloka, Paradiso (Swarga-Loka), Inferno (Naraka-Loka) e Paraloka sono i nomi dei quattro mondi. Il mondo (Loka) in cui tutti viviamo si chiama Ihaloka. Il paradiso e l'inferno non sono mondi separati; entrambi sono sulla terra. Loka non &egrave; n&eacute; un regno n&eacute; un territorio. Il luogo e il tempo dell'esperienza insieme sono chiamati loka. Il luogo in cui si sperimentano difficolt&agrave; si chiama Yamaloka, Naraka-Loka o inferno. Allo stesso modo, il luogo in cui si sperimenta la felicit&agrave; &egrave; chiamato Swarga-Loka o paradiso. Poich&eacute; entrambe queste esperienze accadono sulla terra, si pu&ograve; dire che questo mondo (Ihaloka) &egrave; sia paradiso che inferno. Tuttavia, Paraloka &egrave; diverso dall'inferno e dal paradiso. Mentre sia l'inferno che il paradiso implicano esperienze, Paraloka non ha alcuna esperienza. Lo stato in cui non c'&egrave; esperienza &egrave; chiamato Paraloka. Quando una persona trascende il karma, non sperimenta n&eacute; felicit&agrave; n&eacute; dolore ed entra in Paraloka. Si chiama lo stato di essere uno con Dio, Mukti o Moksham. Una persona a Ihaloka &egrave; sempre vincolata dal peccato e dal punya karma. Chiunque sia a Paraloka non ha alcun karma. Se una persona muore a Ihaloka, non pu&ograve; andare a Paraloka ma tornare a Ihaloka. D'altra parte, una persona a Paraloka, quando viene in questo mondo per qualsiasi necessit&agrave;, ritorna a Paraloka. Pertanto, sebbene il residente di Paraloka venuto da Paraloka rimanga in questo mondo per qualche tempo secondo la Sua volont&agrave;, in seguito entrer&agrave; a Paraloka. Quindi il versetto &ldquo;<strong>Nessuno &egrave; mai andato a Paraloka tranne il Figlio dell'Uomo che &egrave; a Paraloka</strong>&rdquo; implica che colui che &egrave; a Paraloka &egrave; Dio. Anche se qualcuno che &egrave; diventato Dio nasce come essere umano, ritorner&agrave; a Paraloka. La stessa cosa &egrave; espressa in Giovanni 3:13.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 91,
verse: ` <b>13) Il Vangelo di Giovanni, 3° capitolo, 15° versetto.</b>`,
meaning: `<b>
(3:15) Che chiunque crede in Lui non perisca ma abbia vita eterna.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Chiunque crede in Dio otterr&agrave; la vita eterna senza subire la morte. Tuttavia, &egrave; scritto che &ldquo;la vita eterna &egrave; solo attraverso Lui&rdquo;. Il Paramatma esiste sia all'interno che all'esterno del corpo. <strong>Quando Jeevatma si fonde con Paramatma, si afferma che Jeevatma ha raggiunto Paraloka, riconosciuto anche come il regno di Dio</strong>. Si pu&ograve; anche affermare che Jeevatma ha raggiunto la vita eterna (moksham). Il versetto dichiara: &ldquo;Chi crede in Dio alla fine sar&agrave; liberato dal karma e ricever&agrave; la vita eterna&rdquo;. Paraloka, che rappresenta la vita eterna, pervade ovunque, indipendentemente dalla propria posizione fisica. Di conseguenza, chiunque raggiunga moksham si unisce allo Spirito Santo (Paramatma) nel proprio corpo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 92,
verse: `<b> 14) Il Vangelo di Giovanni, 3° capitolo, 17° versetto.</b>`,
meaning: `<b>
(3:17) Poiché Dio non ha mandato suo Figlio nel mondo per giudicare il mondo, ma per salvare il mondo attraverso Lui.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dio ha mandato suo Figlio come uomo nel mondo per salvare gli esseri umani, non per giudicarli. La responsabilità dell’uomo venuto da Dio è insegnare la saggezza di Dio agli esseri umani e salvarli dai loro peccati. Non è venuto per giudicare i peccati e i punya degli esseri umani. Dio non ha mandato il Suo rappresentante sulla terra per il giudizio; invece, è venuto per salvare le persone. Questo versetto è cruciale nella Bibbia. L'Atma giudica un uomo quando muore. IL colui che è venuto da Dio insegna agli esseri umani come sfuggire al karma, mentre l'Atma svolge il compito di giudicarli.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 93,
verse: `<b> 15)  Il Vangelo di Giovanni, 3° capitolo, 18° versetto. </b>`,
meaning: `<b>
(3:18) Chi crede in Lui non è giudicato, ma chi non crede è già giudicato perché non ha creduto nel nome dell’unigenito Figlio di Dio.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il versetto dice: &ldquo;Uno che crede in Lui&rdquo;, che si riferisce al Dio invisibile o al rappresentante di Dio visibile che venne da Dio. Il versetto afferma inoltre: &ldquo;Non hanno creduto nel nome dell&rsquo;unigenito Figlio di Dio&rdquo;, il che implica che dovrebbe essere inteso come riferito al rappresentante di Dio venuto da Dio. Dio stesso venne sulla terra sotto mentite spoglie di uomo per insegnare la saggezza agli esseri umani. Ges&ugrave; disse: &ldquo;<strong>Io sono il Figlio di Dio, o il Figlio dell&rsquo;Uomo, o l&rsquo;unico e unico Figlio di Dio</strong>&rdquo;, per non essere riconosciuto. Nell'Induismo, Dio &egrave; chiamato Bhagavan quando si traveste e viene sulla terra come uomo. Krishna &egrave; colui che &egrave; venuto cos&igrave;; quindi &egrave; chiamato Bhagavan nella Bhagavad-Gita. Sebbene Ges&ugrave;, che &egrave; il Figlio di Dio, sia apparso come un uomo, dovrebbe anche essere chiamato Bhagavan. Quando Dio si incarna come uomo sulla terra, gli ind&ugrave; lo chiamano Bhagavan e i cristiani lo chiamano il Figlio dell&rsquo;uomo. Mentre nella Scrittura divina finale (15:28, 29, 30) si dice che <strong>Dio manda il Suo rappresentante insufflando in Lui la Sua anima</strong>, I musulmani credono che Dio non venga come uomo. Chi non ha fede nel rappresentante di Dio, il Figlio di Dio, &egrave; gi&agrave; giudicato.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 94,
verse: `<b>16) Il Vangelo di Giovanni, capitolo 3, versetti 19, 20, 21.</b>`,
meaning: ` <b>
(3:19) Questo è il verdetto: la luce è venuta nel mondo, ma gli uomini hanno am ato le tenebre invece della luce perché le loro azioni erano malvagie.
<br><br>
(3:20) Tutti coloro che fanno il male odiano la luce e non verranno alla luce per paura che le loro azioni vengano smascherate.
<br><br>
(3:21) Ma chiunque vive secondo la verità viene alla luce, affinché si possa vedere chiaramente che ciò che ha fatto è stato fatto agli occhi di Dio. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma, che rimane sconosciuto a chiunque, simboleggia l'oscurit&agrave;. L'Atma, portato all'esistenza dal Paramatma, incarna la vera luce. Paramatma ha creato due Figli: un Atma invisibile, che funge da luce all'interno del corpo, e un altro Atma che si incarna come un essere umano tra gli umani. Mentre l'Atma, invisibile e che illumina il corpo, &egrave; indicato come il Figlio, l'altro Figlio di Dio, che si manifesta come uomo, &egrave; distintamente chiamato <strong>il Figlio unigenito</strong>. Ges&ugrave;, il Figlio unigenito, &egrave; disceso sulla terra. Tuttavia, a causa delle loro azioni malevole, le persone coltivavano la propria oscurit&agrave; e si astenevano dall&rsquo;avvicinarsi a Ges&ugrave;, la luce della saggezza.

  Ogni individuo ignorante nutre avversione verso il rappresentante di Dio che porta il <strong>luce della saggezza </strong>al mondo. Temono che le loro azioni nefaste vengano smascherate alla presenza del rappresentante di Dio, portandoli a rifuggire la luce e nascondere le loro azioni. Coloro che anticipano che la luce di Dio, prendendo forma umana sulla terra, sveler&agrave; le loro azioni oscure, evitano di avvicinarsi al Figlio di Dio quando apparir&agrave;. Coloro che aderiscono alla saggezza di Dio comprendono che l&rsquo;Atma &egrave; responsabile di tutte le loro azioni all&rsquo;interno del corpo. Si avvicinano al Figlio di Dio perch&eacute; tutte le loro azioni sono interiori <strong>La luce di Dio, guidata dalla saggezza</strong>. Tuttavia, solo una piccola parte delle persone sulla terra riconosce che Atma, che &egrave; Dio, &egrave; responsabile di tutte le loro azioni. Di conseguenza, solo un numero limitato si avvicina al Figlio di Dio quando appare. Poich&eacute; la terra &egrave; popolata da individui che credono di essere gli unici responsabili delle proprie azioni, si astengono dal cercare il Figlio di Dio. Non solo si tengono alla larga dal Figlio di Dio, ma nutrono anche animosit&agrave; e infliggono difficolt&agrave; al rappresentante di Dio, che raramente si manifesta sulla terra. Deridono il Figlio di Dio, sottoponendolo a numerose tribolazioni.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 95,
verse: ` <b>17) Il Vangelo di Giovanni, capitolo 5, versetto 19.</b>`,
meaning: ` <b>
(5:19) Gesù diede loro questa risposta: “In verità vi dico, il Figlio non può fare nulla da solo; Può fare solo ciò che vede fare dal Padre, perché tutto ciò che fa il Padre, lo fa anche il Figlio.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In questo versetto, la menzione di &ldquo;Padre e Figlio&rdquo; &egrave; accompagnata dall&rsquo;affermazione che &ldquo;Il Figlio far&agrave; le cose che fa il Padre&rdquo;. &Egrave; fondamentale discernere l&rsquo;identit&agrave; del Padre e del Figlio, dato che lo Spirito Santo (Dio) &egrave; l&rsquo;unico. Sebbene Dio abbia un Figlio eterno, esiste anche un altro Figlio che occasionalmente si incarna sulla Terra. &Egrave; importante accertare a quale Figlio si rivolge il versetto. Giovanni 3:17 sottolinea: &ldquo;<strong>Perch&eacute; Dio non ha mandato suo Figlio nel mondo per condannare il mondo, ma per salvare il mondo per mezzo di Lui</strong>&rdquo;, riferendosi al figlio di Dio, che si manifesta sulla Terra. Questo verso (5:19) si riferisce al Figlio, Atma, che funge da luce nel corpo umano. L'Atma &egrave; eterno sulla terra, fornendo "<strong>la luce della mobilit&agrave;</strong>&rsquo; al corpo di tutti. Sulla base di ci&ograve;, soprattutto leggendo il versetto, si dovrebbe determinare di quale dei due figli Dio, lo Spirito Santo, ha parlato nel versetto. Giovanni 5:19 caratterizza Atma come il figlio eterno di Dio, affermando che Atma rispecchia le azioni dello Spirito Santo e si impegna esclusivamente nei compiti ereditati dal Padre, senza fare nulla in modo indipendente.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 96,
verse: `<b>18) Il Vangelo di Giovanni, capitolo 5, versetto 20.</b>`,
meaning: ` <b>
(5:20) Perché il Padre ama il Figlio e Gli mostra tutto ciò che fa. Sì, e gli mostrerà opere ancora più grandi di queste, così che ne rimarrai stupito. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando chiediamo chi ha detto: "Paramatma (lo Spirito Santo) ama il Figlio e Gli mostra tutto ciò che fa”, troviamo che Gesù, il secondo Figlio di Dio, pronunciò queste parole ai Suoi discepoli mentre era sulla terra. Nessuno è stato in grado di riconoscere pienamente il Figlio di Dio quando camminava tra gli esseri umani come uomo. Nonostante i Suoi insegnamenti e i Suoi miracoli, alcuni Lo sottoposero a grandi sofferenze e umiliazioni, che alla fine lo portarono alla morte. Ma l’unigenito Figlio di Dio, chiamato Gesù, era in mezzo a loro e disse: “IL Il Padre gli mostrerà (Atma) opere ancora più grandi di queste così che rimarrete stupiti.” Dio comandò ad Atma di governare sui Jeeva e di mostrare cose ancora più grandi. Esploriamo ora quali sono queste grandi cose.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 97,
verse: `<b>19) Il Vangelo di Giovanni, capitolo 5, versetti 21, 22, 23. </b>`,
meaning: `<b>
(5:21) Perché proprio come il Padre risuscita i morti e dà loro la vita, così anche il Figlio dà la vita a chi vuole darla.
<br><br>
(5:22) Inoltre, il Padre non giudica nessuno, ma ha affidato ogni giudizio al Figlio.
<br><br>
(5:23) Affinché tutti onorino il Figlio proprio come onorano il Padre. Chi non onora il Figlio non onora il Padre che lo ha mandato. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  C'&egrave; qualcosa di degno di nota qui. Anche se si parla di "<strong>due Allah</strong>&rsquo; nel Corano, i musulmani non sono riusciti a trovarlo. Allo stesso modo, si parla di "<strong>due figli</strong>&rsquo; nella Bibbia, ma i cristiani non potevano capirla e parlare di un solo Figlio. Tutti e tre questi versetti contengono la parola &ldquo;Figlio&rdquo;. Bisogna determinare quale dei due Figli &egrave; menzionato in questi versetti. Molti non sono in grado di comprendere che esiste un secondo Figlio perch&eacute; nei versetti viene menzionato solo un Figlio alla volta. Dio disse: &ldquo;<strong>Poich&eacute; Dio non ha mandato suo Figlio nel mondo per giudicare il mondo, ma per salvare il mondo per mezzo di Lui&rdquo; in Giovanni 3:17, e &ldquo;Il Padre ha affidato ogni giudizio al Figlio&rdquo; in Giovanni 5:22</strong>. Sulla base di ci&ograve;, si dovrebbe capire che Dio ha due figli.

  Dio disse riguardo ad Atma: &ldquo;Come il Padre, lo Spirito Santo, risuscita i morti e d&agrave; loro la vita, anche il Figlio risuscita i morti e d&agrave; loro la vita&rdquo;. Proprio come il Padre resuscita i morti e d&agrave; la vita, Atma decide le prossime esperienze di vita di una persona dopo la morte in base ai peccati e ai punya della sua vita passata. Perci&ograve; nel versetto si dice: &laquo;Come il Padre, anche il Figlio d&agrave; la vita a chi vuole&raquo;. &ldquo;<strong>Chi gli piace</strong>" significa "<strong>coloro che sono determinati dal karma</strong>"Dalla prospettiva di Atma. Poich&eacute; l&rsquo;Atma &egrave; la luce nascosta nel corpo che determina il karma della prossima vita di una persona, &ldquo;Egli risusciter&agrave; colui che ha giudicato&rdquo;, si dice nel verso. &ldquo;Resuscitare&rdquo; significa &ldquo;nascere di nuovo&rdquo;.

  Dio ha dato ad Atma il potere di giudicare i morti e di riportarli in vita affinch&eacute; tutti potessero glorificare suo Figlio, Atma, proprio come tutti glorificano lo Spirito Santo come il grande Dio. Nel momento stesso della morte di una persona, Atma, la luce nel corpo, determina il suo karma per la seconda vita in base ai peccati e ai punya della vita passata e la porta immediatamente alla seconda vita. L&rsquo;Atma decide la seconda vita in base al karma della persona e le dona nuovamente la vita. Coloro che non sanno che l'Atma fa cose cos&igrave; grandi non vedono l'Atma con grande rispetto. Chi non rispetta l'Atma non rispetter&agrave; Dio che ha inviato l'Atma. Tale ignoranza non rispetta n&eacute; l'Atma, che &egrave; nel corpo, n&eacute; il Paramatma, che &egrave; dentro e fuori dal corpo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 98,
verse: `<b>20) Il Vangelo di Giovanni, capitolo 5, versetto 24.</b>`,
meaning: ` <b>
(5:24) In verità in verità vi dico: chiunque ascolta la mia parola e crede a Colui che mi ha mandato ha vita eterna e non sarà giudicato, ma è passato dalla morte alla vita. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In precedenza, i versetti 5:21, 5:22 e 5:23 parlavano dell'Anima (Atma), che è la mobilità nel corpo. Il versetto 5:24 parla dell'Anima, che venne in forma umana con il nome Gesù. Chiunque crede nello Spirito Santo, che ha mandato Gesù, il Figlio unigenito, otterrà moksham. Una persona del genere ottiene moksham senza subire giudizio immediatamente dopo la morte.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 99,
verse: ` <b>21) Il Vangelo di Giovanni, capitolo 5, versetto 26.</b>`,
meaning: ` <b>
(5:26) Poiché come il Padre ha vita in Se stesso, così ha concesso anche al Figlio di avere vita in Se stesso.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dio, lo Spirito Santo, è eterno per sempre. Proprio come Paramatma è eterno, ad Atma, Suo figlio, è stata concessa l'autorità di essere eterno per sempre. Lo Spirito Santo, il Padre di Atma, Gli ha conferito tale autorità. Nella prima scrittura divina quando si confronta Jeevatma con Atma, Jeevatma viene indicato come Kshara (anima deperibile), mentre Atma è designato come Akshara (anima imperitura).
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 100,
verse: ` <b> 22) Il Vangelo di Giovanni, capitolo 5, versetto 37.</b>`,
meaning: `<b>
(5:37) Non avete mai sentito la Sua voce né visto la Sua forma.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In questo contesto, “Suo” si riferisce a Paramatma (lo Spirito Santo). Dio, conosciuto come Paramatma o Spirito Santo, è privo di nome, forma o compiti specifici. Nessuno è stato testimone di un tale Dio perché gli manca una forma distinguibile. Di conseguenza, nessun essere umano ha mai posato gli occhi su Dio. Dio non comunica con nessuno poiché rimane inattivo. Pertanto si può affermare che nessuna persona vivente ha veramente visto Dio. Qualsiasi affermazione di aver testimoniato Dio può essere considerata falsa. Dio non è né visibile né vocale.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 101,
verse: `<b> 23) Il Vangelo di Giovanni, capitolo 5, versetto 38.</b>`,
meaning: `<b>
(5:38) Né la Sua parola dimora in te, poiché non credi a colui che Egli ha mandato.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Sebbene il primo creatore, lo Spirito Santo, non si impegni attivamente nell&rsquo;opera, ci sono alcune responsabilit&agrave; che rientrano nel Suo dominio. Tuttavia si astiene dall&rsquo;azione diretta. Invece, Dio, Paramatma, ha incaricato i Suoi servitori di svolgere la Sua opera. Questi milioni di servitori costituiscono il Suo dominio ed eseguono tutti i compiti a Lui assegnati. Mentre Dio stesso rimane inattivo, i Suoi servitori svolgono i ruoli che Egli dovrebbe assumere. Il Paramatma, tuttavia, ha un compito cruciale da svolgere: impartire la saggezza divina. Per questo compito &egrave; necessario Dio stesso, poich&eacute; i Suoi servitori non possono svolgerlo. La scrittura finale afferma: &ldquo;<strong>Dio dovrebbe insegnare la Sua saggezza perch&eacute; nessun uomo conosce la Sua saggezza tranne Lui</strong>.&rdquo; Sotto mentite spoglie, Dio viene a insegnare la saggezza di Dio. Sebbene Egli parli sotto mentite spoglie, la Sua identit&agrave; rimane sconosciuta, poich&eacute; nessuno pu&ograve; discernere colui che &egrave; sotto mentite spoglie. Nonostante Dio impartisca la Sua saggezza, spesso queste non vengono riconosciute come Sue parole. Poich&eacute; Dio &egrave; saggio, assume le sembianze di "<strong>Bhagavan</strong>&rsquo; e impartisce saggezza.

  Anche quando Dio viene personalmente sulla terra travestito da uomo per insegnare la saggezza, predice anche l&rsquo;invio di un uomo speciale la cui vera identit&agrave; rimarr&agrave; sconosciuta. &ldquo;Colui che viene da Dio insegner&agrave; la saggezza di Dio&rdquo;, dichiar&ograve; Dio stesso nelle Sue divine scritture. Di conseguenza, tutti anticipano che colui che &egrave; stato inviato da Dio trasmetter&agrave; la Sua saggezza. Pertanto, l&rsquo;incarnazione di Dio rimane velata a tutti. Sebbene Dio venne sulla terra come uomo durante il Treta Yuga, nessuno Lo riconobbe. Durante il Dvapara Yuga, Dio venne come uomo e impart&igrave; gli insegnamenti della Bhagavad-Gita, dichiarando addirittura <strong>&ldquo;Io sono Dio&rdquo; </strong>nella Bhagavad-Gita, eppure nessuno Lo riconobbe. Allo stesso modo, quando Dio si incarn&ograve; come Ges&ugrave; nel Kali Yuga, nessuno Lo riconobbe, causandogli numerose sfide. Nessuno si rendeva conto che Egli era il vero Dio. Alcuni che si professavano credenti di Dio affermavano che Ges&ugrave; era il Figlio dell&rsquo;uomo, non riconoscendolo come Dio. Altri identificarono Ges&ugrave; come il Figlio di Dio ma non riuscirono ancora a riconoscere la Sua divinit&agrave;.

  Sebbene Ges&ugrave; fosse Dio incarnato, afferm&ograve;: &ldquo;<strong>Non hai creduto a colui che ha mandato</strong>&rdquo; in questo versetto senza rivelare la Sua vera identit&agrave;. Ha espresso che le persone mancavano di fede nell&rsquo;uomo mandato da Dio, affermando: &ldquo;La parola di Dio non ha vissuto in te&rdquo;. Se non c&rsquo;&egrave; fede nell&rsquo;uomo inviato da Dio, perch&eacute; la parola di Dio non risuona tra gli esseri umani? La ragione sta nell'incredulit&agrave; nel messaggero divino, che &egrave; Dio stesso e portatore di saggezza. Di conseguenza, la parola di Dio non riesce a mettere radici in coloro che non hanno fede in Lui.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 102,
verse: ` <b>24) Il Vangelo di Giovanni, capitolo 6, versetti 25, 26, 27.</b>`,
meaning: ` <b>
(6:25) Quando Lo trovarono sull'altra sponda del lago, gli chiesero: "Rabbi, quando sei arrivato qui?"
<br><br>
(6:26) Gesù rispose: “In verità vi dico che mi cercate, non perché avete visto i segni che ho compiuto ma perché avete mangiato i pani e vi siete saziati.
<br><br>
(6:27) Datevi da fare non per il cibo che va a male, ma per il cibo che dura per la vita eterna, che il Figlio dell'Uomo vi darà. Perché su di Lui Dio Padre ha posto il suo sigillo di approvazione.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Questo versetto enfatizza due tipi di cibo: cibo deperibile e cibo imperituro. Molti esseri umani cercano cibo deperibile, come illustrato quando una folla si avvicin&ograve; a Ges&ugrave; chiedendo: &ldquo;Quando sei venuto qui?&rdquo; Ges&ugrave; rispose, &ldquo;Non stai cercando la saggezza di Dio; mi cercate sperando in pani.&rdquo; Li consigli&ograve; inoltre: &ldquo;Non faticate per il cibo deperibile&rdquo;. Il cibo quotidiano, che viene consumato, digerito e distrutto entro tre ore, rientra nella categoria degli alimenti deperibili. La digestione, in sostanza, &egrave; un processo di distruzione, in cui tutto il cibo ingerito viene scomposto nel tratto digestivo e trasformato in rifiuti, proprio come bruciare il legno riducendolo in cenere. Al contrario, la saggezza che una persona acquisisce attraverso le sue orecchie, entrando nella sua mente sotto forma di parole, &egrave; considerata cibo imperituro. La saggezza di Dio &egrave; l&rsquo;unico cibo che non pu&ograve; essere distrutto. Leggere o ascoltare la saggezza di Dio &egrave; come consumare cibo imperituro per la mente. Il Figlio dell&rsquo;Uomo provvede questo cibo indistruttibile, come indica il versetto: &ldquo;Perch&eacute; su di Lui Dio Padre ha posto il suo sigillo di approvazione."'Sigillo' significa accettazione o decisione. Dio, avendo deciso, mand&ograve; il Suo Figlio generato a condividere la Sua saggezza. Il termine &ldquo;sigillo di approvazione&rdquo; nel versetto indica la decisione o il consenso di Dio. Nel Corano si afferma che Dio non ha rivelato la Sua saggezza a nessun essere umano, sottolineando che colui che impartisce la saggezza di Dio non &egrave; una persona comune. Dio ha affermato che la Sua saggezza &egrave; conosciuta solo da Lui stesso, implicando che il Figlio generato che viene a rivelare la saggezza di Dio &egrave; Dio stesso. La frase "il Figlio di Dio" pu&ograve; fuorviare gli esseri umani, ma pu&ograve; essere intesa come "Figlio" che significa "manifestazione di Dio". Dio, scegliendo di non presentarsi direttamente come Dio per parlare agli esseri umani, adotta le sembianze del Figlio. Questa interpretazione trova sostegno nel versetto successivo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 103,
verse: `  <b>25) Il Vangelo di Giovanni, capitolo 6, versetto 32. </b>`,
meaning: ` <b>
(6:32) Gesù disse loro: “In verità vi dico, non è Mosè che vi ha dato il pane da paraloka, ma è mio Padre che vi dà il vero pane da paraloka. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nel versetto menzionato, Ges&ugrave; dichiar&ograve;: &ldquo;<strong>Mos&egrave; non vi ha dato il pane della saggezza da Paraloka</strong>.&rdquo; Ci&ograve; solleva domande: il Dharma Shastra insegnato da Mos&egrave; &egrave; falso? Il Dharma Shastra di Mos&egrave; manca di saggezza riguardo ai dharma? Se ci&ograve; che Mos&egrave; insegn&ograve; non &egrave; il vero pane di Dio, perch&eacute; viene chiamato Dharma Shastra di Mos&egrave;? Queste domande inducono a diverse considerazioni. Da un lato, &egrave; falso affermare che ci&ograve; che Mos&egrave; insegn&ograve; non &egrave; Dharma Shastra. D&rsquo;altra parte, in linea con l&rsquo;affermazione di Dio, si pu&ograve; affermare che ci&ograve; che Mos&egrave; insegn&ograve; non &egrave; Dharma Shastra. &Egrave; anche vero che Mos&egrave; non forn&igrave; il pane imperituro da Paraloka. Tali domande e dubbi sorgono, creando la necessit&agrave; di risposte adeguate per comprendere la vera saggezza divina.

  Il profeta Mos&egrave; &egrave; ben noto tra i cristiani, ma molti musulmani potrebbero non essere consapevoli del fatto che il nome &ldquo;Mos&egrave;&rdquo; nella Bibbia si &egrave; trasformato in &ldquo;Musa&rdquo; nel corso di 1400 anni. &Egrave; fondamentale notare che Mos&egrave; e Musa sono, in effetti, lo stesso nome. L'affermazione secondo cui Mos&egrave; non trasmise il Dharma Shastra pu&ograve; essere sia vera che falsa, presentando un'intrigante ambiguit&agrave; con una ragione forte e sconosciuta. Questa rivelazione potrebbe sorprendere alcuni e incontrare il disaccordo di altri, ma la sua verit&agrave; rimane indipendente dalle opinioni. &Egrave; vero che il profeta Mos&egrave; esisteva qualche migliaio di anni fa. Circa cinquemila anni fa, il profeta Mos&egrave; condivise la saggezza che possedeva. Un profeta, per definizione, &egrave; qualcuno che impartisce la saggezza di Dio, e Mos&egrave; si guadagn&ograve; questo titolo grazie ai pensieri divini fin dalla giovane et&agrave;. All'et&agrave; di 20 anni, <strong>Bhagavan</strong>, disceso sulla terra, forn&igrave; a Mos&egrave; la prima scrittura divina, conosciuta come '<strong>Taurath</strong>.&rsquo; Mos&egrave; continu&ograve; a condividere la saggezza contenuta in quella scrittura.

  Poich&eacute; era radicato nei dharma, divenne noto come Dharma Shastra di Mos&egrave;. Mos&egrave; mor&igrave; all&rsquo;et&agrave; di 54 anni. Dopo la morte di Mos&egrave;, Bhagavan entr&ograve; nel suo corpo e trasmise i dharma di cui Mos&egrave; non aveva mai parlato per nove anni. Nonostante Bhagavan lasciando il corpo di Mos&egrave; all'et&agrave; di 63 anni, questo fatto rimase sconosciuto, portando le persone a credere che il profeta Mos&egrave; avesse vissuto per 63 anni e avesse insegnato lui stesso i dharma. Sebbene Dio abbia fornito a Mos&egrave; una scrittura divina, non gli ha impartito direttamente la saggezza. Quindi, l&rsquo;affermazione: &ldquo;A Mos&egrave; non fu dato il pane di Paraloka&rdquo;, &egrave; vera. La saggezza impartita da Dio attraverso il corpo di Mos&egrave; &egrave; conosciuta come Dharma Shastra di Mos&egrave;. Questo &egrave; il motivo per cui il versetto afferma: &ldquo;Il Padre di Paraloka, lo Spirito Santo, ha dato il vero pane&rdquo;. La durata effettiva della vita di Mos&egrave; era di 54 anni, e nessuno sapeva che Dio aveva prolungato la vita di Mos&egrave; a 63 anni. Tutti questi misteri sono chiariti nelle mie Scritture, <strong>Krishna Musa</strong>.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 104,
verse: ` <b>26) Il Vangelo di Giovanni, capitolo 6, versetto 46.</b>`,
meaning: `<b>
(6:46) Nessuno ha visto il Padre eccetto colui che viene da Dio; solo Lui ha visto il Padre. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Comprendere questo versetto non &egrave; un compito impegnativo. Dopo aver letto la Bhagavad-Gita, la Bibbia e il Corano nella loro interezza, diventa evidente che i versetti di queste ultime scritture divine portano significati sottili. I versetti del Corano, in particolare, hanno una profondit&agrave; che supera le altre scritture divine, rendendo il loro significato sfuggente a molti. Sebbene i versetti della Bibbia possano sembrare semplici, la loro vera realt&agrave; spesso sfugge alla comprensione. Di conseguenza, Dio ci fornisce una comprensione completa di ogni versetto attraverso di noi.

  Dio, rappresentato come lo Spirito Santo, esiste sia prima che dopo la creazione. &Egrave; il Dio primario. La vera apparenza o natura di Dio rimane sconosciuta agli esseri umani. Nella scrittura divina finale, il Corano, il Dio primario &egrave; chiamato Allah, e anche il secondo Dio, Atma, &egrave; chiamato Allah. Quindi, Paramatma &egrave; il primo Allah e Atma &egrave; il secondo Allah. Nella seconda scrittura divina, la Bibbia, Paramatma &egrave; designato come Dio e Atma &egrave; indicato come il Padre. &Egrave; fondamentale riconoscere che lo Spirito Santo &egrave; il Padre dell&rsquo;Atma e l&rsquo;Atma &egrave; il Padre degli esseri umani. Il Corano afferma che sia Paramatma che Atma sono Dei, mentre la Bibbia distingue l'uno come Dio e l'altro come Padre. &Egrave; essenziale comprendere che il Padre dell'umanit&agrave; &egrave; Atma e il Padre dell'Atma &egrave; lo Spirito Santo. Il verso sottolinea che nessun essere umano ha visto il Padre (Atma) e ignora la natura dell&rsquo;Atma. <strong>Atma per&ograve; &egrave; l'unico che ha avuto origine da Dio e ha quindi testimoniato suo Padre, lo Spirito Santo. Al contrario, Jeevatma non &egrave; mai stato testimone di suo Padre, Atma.</strong>
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 105,
verse: `<b>27) Il Vangelo di Giovanni, capitolo 7, versetti 37 e 38.</b>`,
meaning: ` <b>
(7:37) Nell’ultimo e più grande giorno della festa, Gesù si alzò e disse ad alta voce: “Chi ha sete venga a me e beva”.
<br><br>
(7:38) Chi crede in me, come ha detto la Scrittura, fiumi d'acqua viva sgorgheranno dal suo interno.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il verso ha un significato sottile. Proprio come una persona assetata cerca naturalmente l&rsquo;acqua, la ricerca di coloro che cercano la saggezza &egrave; paragonata alla sete. Il versetto afferma: &ldquo;<strong>Chiunque abbia sete di saggezza dovrebbe venire a me e dissetarsi</strong>.&rdquo; Quando qualcuno si avvicina a Ges&ugrave; e riceve la saggezza divina, &egrave; come soddisfarlo <strong>sete di saggezza </strong>da Ges&ugrave;. Coloro che credono in Ges&ugrave; raggiungono la completa saggezza divina, diventando depositari di saggezza e condividendola con gli altri. Ges&ugrave; ha annunciato che dal loro interno sgorgheranno fiumi di acqua viva. In questo contesto, <strong>l'acqua viva simboleggia la saggezza divina</strong>, che conferisce moksham (liberazione) agli esseri umani e li mantiene in uno stato perpetuo. Quindi, la saggezza viene definita acqua viva. Proprio come gli esseri umani soddisfano la loro sete fisica bevendo acqua attraverso la bocca, dovrebbero fare altrettanto <strong>nutrire il loro intelletto (buddhi) con la saggezza divina ascoltando attraverso le loro orecchie.</strong>
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 106,
verse: `<b>28) Il Vangelo di Giovanni, capitolo 8, versetto 12.</b>`,
meaning: ` <b>
(8:12) Quando Gesù parlò di nuovo alla gente, disse: “Io sono la luce del mondo. Chi segue me non camminerà mai nelle tenebre ma avrà la luce della vita”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dio, conosciuto come Spirito Santo, cre&ograve; Atma per esercitare il Suo governo e operare attraverso gli altri. Dichiar&ograve; che Atma era suo figlio e gli diede il potere di svolgere i Suoi compiti. Atma ha ricevuto l'autorit&agrave; di togliere vite umane, giudicando in base al loro karma delle nascite precedenti e facilitando la loro rinascita. Nel ruolo di giudice, l&rsquo;Atma agisce in accordo con il karma di ogni individuo. Il coinvolgimento umano nel karma influenza i loro pensieri e l'Atma, rispondendo a questo karma, impartisce l'ignoranza ricercata dagli individui. Di conseguenza, nel tempo, gli adharma aumentano sulla Terra.

  Lo Spirito Santo, o Dio, deve incarnarsi sulla Terra in forma umana come Bhagavan per frenare gli adharma e promuovere i dharma quando gli adharma emergono a causa degli interessi umani e dell&rsquo;ignoranza indotta dall&rsquo;Atma. Quando Dio assume le sembianze di un uomo, viene chiamato Bhagavan. Questa incarnazione insegna la saggezza divina senza rivelare la Sua identit&agrave; divina, spesso definita Figlio di Dio, essendo Dio Suo Padre. Secondo questa prospettiva, esiste un Dio, il creatore, che ha due Figli: uno come Atma permanente negli esseri umani e un altro come Figlio temporaneo in forma umana. Quando il primo Figlio (Atma) negli esseri umani sviluppa adharma, il secondo Figlio temporaneo, incarnato come essere umano, impartisce i dharma. Quindi, c'&egrave; un solo Dio con due Figli. Il Figlio nella forma di Ges&ugrave; proclam&ograve;: &ldquo;<strong>Sono la luce del mondo</strong>.&rdquo; La saggezza si trasforma in un fuoco di saggezza (Gnana Shakti), bruciando il karma umano. Ges&ugrave;, incarnando il fuoco della saggezza, &egrave; la luce della saggezza. &Egrave; venuto per insegnare la saggezza all&rsquo;umanit&agrave;, e coloro che seguono e comprendono la Sua saggezza non dimoreranno nell&rsquo;ignoranza ma nella saggezza. Per questo Ges&ugrave; dichiar&ograve;: &ldquo;Chi segue me non camminer&agrave; mai nelle tenebre, ma avr&agrave; la luce della vita&rdquo;. Solo Dio, che si incarna in forma umana, pu&ograve; conferire la luce della saggezza e stabilire i dharma.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 107,
verse: `<b>29) Il Vangelo di Giovanni, capitolo 8, versetto 14.</b>`,
meaning: `<b>
(8:14) Gesù rispose: “Anche se testimonio a nome mio, la mia testimonianza è valida, perché so da dove vengo e dove vado. Ma non hai idea da dove vengo né dove sto andando.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ges&ugrave;, nel Suo aspetto esteriore, somigliava a un uomo comune senza alcuna caratteristica distintiva. In quanto individui che dimorano in corpi fatti di Prakruti, l'aspetto esteriore di ogni essere appare lo stesso. Anche Ges&ugrave; si &egrave; presentato come un essere umano comune. C'&egrave; un detto tra gli anziani secondo cui nessuno sa che tipo di serpente risieda in un termitaio, tracciando un parallelo con la misteriosa natura del Jeeva all'interno di un corpo. Ogni Jeeva nato entra in un corpo da qualche parte, guidato dalle decisioni dell'Atma basate sul suo karma. Dopo aver completato il karma e la morte, il Jeeva entra in un nuovo corpo sotto il giudizio dell'Atma. Nonostante risieda nel corpo, il Jeeva rimane inconsapevole della sua origine ad ogni nuova nascita. Il manas (mente) &egrave; l'organo responsabile del ricordo, ma anch'esso muore con il passare della vita, causando la perdita della memoria delle nascite precedenti. Di conseguenza, un individuo, ad esempio, all'et&agrave; di 40 anni, ricorda solo gli ultimi 40 anni della nascita attuale e non i numerosi precedenti.

  Questo processo si applica non solo agli esseri umani ma anche a ogni creatura vivente. Sebbene Ges&ugrave; possa sembrare un uomo comune, &egrave; essenziale considerare se anche per Lui si applica lo stesso processo ciclico. Ges&ugrave; &egrave; nato in Israele, a significare che veniva da altrove. Ma era consapevole della Sua origine, affermando: &ldquo;<strong>So da dove vengo</strong>.&rdquo; A differenza degli individui comuni che non sono consapevoli delle loro future nascite dopo la morte, Ges&ugrave; era profondamente consapevole della Sua destinazione dopo la morte. Questa netta differenza tra Ges&ugrave; e un uomo comune spinge a indagare sull&rsquo;unicit&agrave; di Ges&ugrave;. La risposta a questa domanda contiene la chiave della migliore saggezza, rivelando che Ges&ugrave; non era un uomo comune ma nacque con uno scopo specifico.

  Un individuo nato con uno scopo predeterminato prima della nascita &egrave; definito "nato per una causa". Nessun essere umano possiede un tale scopo prenatale. Al contrario, Dio nasce con l&rsquo;intento specifico di stabilire il dharma sulla Terra. Solo Dio, e non qualsiasi essere umano, ha la capacit&agrave; di stabilire il dharma. Dio rimane eterno e immutabile, non influenzato dalla nascita o dalla morte, mantenendo una memoria coerente. Quando Dio si incarna sulla Terra sotto forma di uomo travestito, impartisce insegnamenti sul dharma e se ne va, non subisce la rinascita dopo la morte, un destino comune agli esseri umani comuni. Nella morte, il manas (mente) di un essere umano viene distrutto, ma Dio non muore n&eacute; nasce altrove. Assume un travestimento unico da uomo, adempie al Suo scopo e poi ritorna alla Sua origine. Pertanto, nel versetto, Ges&ugrave; dichiar&ograve;: &ldquo;<strong>So dove sto andando</strong>&rdquo;, sottolineando la natura distintiva dell&rsquo;esistenza e del proposito di Dio.

  Gli esseri umani non hanno conoscenza di dove si trovi o della natura di Dio. Quando Dio si incarna come uomo, la Sua origine rimane sconosciuta. A differenza di una nascita umana convenzionale, la nascita di Dio &egrave; distinta; Non rinasce altrove dopo essere morto in qualche altro luogo. Il Dio onnipresente, esistente anche nel grembo materno, trasforma la Sua forma e sembra nascere come un bambino. Dato che Dio &egrave; presente dove nasce, diventa difficile individuare la Sua origine. Coloro che non sono consapevoli che Dio &egrave; onnipresente rimangono ignari delle origini di Ges&ugrave;. Inoltre, la destinazione di Dio dopo aver assunto una forma diversa rimane sconosciuta. Di conseguenza, nel versetto, Ges&ugrave; afferm&ograve;: "<strong>Hai Nessuna idea da dove vengo o dove sto andando</strong>&rdquo;, sottolineando la natura misteriosa dell&rsquo;esistenza e dei movimenti di Dio.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 108,
verse: `<b> 30) Il Vangelo di Giovanni, capitolo 8, versetto 19.</b>`,
meaning: `<b>
(8:19) Allora gli chiesero: “Dov’è tuo Padre?” “Voi non conoscete né me né il Padre mio”, rispose Gesù. “Se mi conosceste, conoscereste anche il Padre mio”.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dio esiste? Se lo fa, come sta? Dove si trova? Se conosci le risposte a queste domande, capirai chi sono il Padre e il Figlio. C'&egrave; un solo Dio, ma dovremmo sapere da dove viene il Figlio. Le parole &ldquo;Padre&rdquo; e &ldquo;Figlio&rdquo; sono usate spesso nella Bibbia. <strong>Si dovrebbe capire che &ldquo;Padre&rdquo; significa Dio; il termine era usato per riferirsi a Dio nella Bibbia. Nel Corano, Dio &egrave; chiamato &ldquo;Allah&rdquo;, e nella Bhagavad-Gita, Dio &egrave; chiamato &ldquo;Paramatma&rdquo;. </strong>Sebbene queste parole siano diverse, tutte significano Dio. L&rsquo;essenza di Dio dovrebbe essere vista nel termine &ldquo;Padre&rdquo;. Quando Ges&ugrave; era sulla terra, i farisei Gli chiesero di suo Padre. Ges&ugrave; rispose: &ldquo;<strong>Non hai visto n&eacute; me n&eacute; mio Padre</strong>.&rdquo; I farisei non chiedevano informazioni su Ges&ugrave;, anche se Egli era davanti a loro. Volevano sapere del suo padre fisico, senza rendersi conto che il padre di Ges&ugrave; era Dio. Potrebbero essere rimasti sorpresi quando Ges&ugrave; parl&ograve; direttamente di Se stesso e di suo Padre. Pensavano di vedere Ges&ugrave; di persona e gli chiesero di informarsi sul suo padre sconosciuto. Allora Ges&ugrave; disse: &ldquo;<strong>Non hai visto n&eacute; me n&eacute; mio Padre</strong>.&rdquo; Dobbiamo capire il significato di quella parola.

  Il Padre di Ges&ugrave; &egrave; lo Spirito Santo. Atma, il Figlio dello Spirito Santo, &egrave; presente in tutti i corpi e ne governa le operazioni. Lo Spirito Santo, chiamato Padre, e l'Atma, conosciuto come Figlio, sono sempre presenti. Lo Spirito Santo, Paramatma, &egrave; eterno ed esiste da prima della creazione. Atma, il Figlio dello Spirito Santo, &egrave; presente in tutti i corpi fin da dopo la creazione.

  Oltre al Figlio permanente, Atma, Dio (lo Spirito Santo) ha un altro Figlio chiamato &ldquo;<strong>il Figlio unigenito</strong>&rdquo;, che ogni tanto viene sulla terra. Ci sono differenze significative tra il Figlio permanente (Atma) e il Figlio temporaneo (il Figlio unigenito). Ad esempio, quando l'Atma si presenta con un normale corpo umano, il corpo ha un Jeevatma separato. Sebbene l&rsquo;intero corpo appartenga all&rsquo;Atma e l&rsquo;Atma sia la testa del corpo, anche Jeevatma risiede con l&rsquo;Atma nel corpo e pensa che il corpo sia mio. Se il Figlio temporaneo, il Figlio unigenito, viene sulla terra con un corpo, non c'&egrave; Jeevatma in quel corpo. Nel corpo di una persona comune, Dio e Atma sono diversi. L'Atma esegue ogni compito in quel corpo e Dio non opera. Ma nel corpo del Figlio unigenito, Paramatma (Dio) risiede come Atma e svolge compiti nella forma di Atma. Poich&eacute; non c&rsquo;&egrave; Jeevatma nel corpo del Figlio unigenito, colui che agisce come Atma agisce anche come Jeevatma. Sebbene Colui che &egrave; nel corpo del Figlio unigenito sia Dio, Egli finge di essere Jeevatma. <strong>Colui che &egrave; venuto sotto mentite spoglie come il Figlio unigenito &egrave; lo Spirito Santo (Dio). Quel Dio si comporta come Jeevatma. </strong>Ci sono molte differenze tra il Figlio permanente di Dio e il Figlio temporaneo.

  Si pu&ograve; dire che la maggior parte delle persone non sa che Dio ha un Figlio permanente e un Figlio unigenito che viene occasionalmente. Acquisendo saggezza, si pu&ograve; comprendere l&rsquo;esistenza dell&rsquo;Atma e la saggezza dell&rsquo;Atma, ma riconoscere il Figlio unigenito &egrave; una sfida. Individuare il Figlio unigenito tra tanti esseri umani &egrave; difficile. Pertanto, nessuno ha identificato il Figlio unigenito che venne nel Treta Yuga, Dvapara Yuga e Kali Yuga. Sebbene Ges&ugrave; fosse l&rsquo;unigenito Figlio di Dio nel Kali Yuga, le persone non potevano riconoscerlo come il secondo Figlio di Dio. Nonostante la Sua proclamazione di essere il Figlio di Dio, le persone non riuscivano a identificarlo e Lo sottoponevano a molti insulti e torture. Le persone non sono riuscite a riconoscere coloro che sono venuti nel Dvapara Yuga e nel Kali Yuga come il Figlio di Dio, anche se hanno dichiarato: &ldquo;Io sono il Figlio di Dio&rdquo;. Esito ad affermare che colui che venne nel Treta Yuga era il Figlio di Dio. Quel giorno, Dio stesso venne sotto mentite spoglie di Figlio e impart&igrave; la saggezza sulla terra. Anche se era conosciuto come un grande gnani e insegnava la saggezza, sono anche riluttante a dire che fosse Bhagavan perch&eacute; era ritratto come un uomo malvagio tra la gente. Eppure non ho paura di dire: &ldquo;<strong>Ravana Brahma &egrave; il Figlio unigenito</strong>.&rdquo;

  Nel Dvapara Yuga, Krishna venne come Bhagavan. Sia Bhagavan che il Figlio unigenito sono la stessa cosa. Tuttavia, poich&eacute; Krishna veniva descritto come astuto, molte persone ancora oggi non sono consapevoli della Sua grandezza. Anche se Dio venne sotto mentite spoglie come uomo e insegn&ograve; i dharma divini, gli esseri umani non si concentrarono sulla saggezza che Egli impart&igrave;; invece, esaminarono soprattutto il Suo comportamento in quel periodo. Solo pochi, su milioni, riconobbero la Sua saggezza e dichiararono che Krishna era Dio, ma la maggioranza parl&ograve; male di Lui. Coloro che non erano a conoscenza dell&rsquo;incarnazione di Krishna nel Dvapara Yuga trovarono difficile riconoscere Ges&ugrave; come il Figlio di Dio nel Kali Yuga. Poich&eacute; Krishna e Ges&ugrave; prevedevano che gli esseri umani avrebbero potuto non riconoscere la saggezza che insegnavano, entrambi affermarono: &ldquo;<strong>Siamo Dei</strong>&rdquo;, nel contesto delle loro parole, credendo che gli esseri umani possano riconoscere la loro saggezza in questo modo. Allo stesso modo, Ges&ugrave; disse: &ldquo;<strong>Non conosci n&eacute; me n&eacute; mio Padre", </strong>con l'intento di far capire che Dio e Ges&ugrave; sono la stessa cosa.

  Coloro che affermano di avere devozione a Dio spesso parlano in modo sarcastico quando incontrano altri che possiedono pi&ugrave; saggezza di loro. I farisei si rivolgevano a Ges&ugrave; con lo stesso atteggiamento. Sapendo che Ges&ugrave; era nato da Maria senza padre, gli chiesero: "Dov'&egrave; tuo padre?" Ges&ugrave; cap&igrave; che lo stavano prendendo in giro e non chiedevano con devozione. Ha risposto con una risposta sbalorditiva: &ldquo;<strong>Non conosci me n&eacute; mio Padre</strong>.&rdquo; Coloro che comprendono correttamente le Sue parole capiranno che il Ges&ugrave; visibile e il Dio invisibile sono la stessa cosa. Ges&ugrave; disse anche: &ldquo;<strong>Se mi conosceste, conoscereste anche il Padre mio</strong>.&rdquo; Tuttavia si pu&ograve; dire che coloro che ascoltarono le Sue parole non capirono ci&ograve; che stava dicendo. Se avessero compreso il Suo messaggio, avrebbero riconosciuto chi era Ges&ugrave; quel giorno. Avrebbero capito che non era un uomo comune. Nonostante le parole di Ges&ugrave;, Lo trattavano come se fosse un uomo comune. Sembra che non sapessero nulla di straordinario su Ges&ugrave;.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 109,
verse: `  <b>31) Il Vangelo di Giovanni, capitolo 8, versetto 21.</b>`,
meaning: ` <b>
(8:21) Ancora una volta Gesù disse loro: “Io vado e voi mi cercherete e morirete nel vostro peccato. Dove vado io, tu non puoi venire”.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ges&ugrave; ha pronunciato molte parole per far conoscere Se stesso alle persone, e le parole sopra sono un esempio. &ldquo;<strong>Io vado via e tu mi cercherai. Dove vado io, tu non puoi venire</strong>&rdquo;, disse Ges&ugrave; alla gente. A prima vista, questo versetto potrebbe non sembrare particolarmente profondo. Quando qualcuno va da qualche parte senza informare gli altri, non sappiamo dove &egrave; andato e, anche se cerchiamo, potremmo non riuscire a trovarlo. La mancanza di informazioni significa che non possiamo andare dove sono andati loro. Potresti chiederti quale saggezza risieda in questo evento comune. Guardiamo la cosa da un&rsquo;altra angolazione. Da piccoli giocavamo al gioco &ldquo;Ladro e polizia&rdquo;. In questo gioco, il ladro si nasconde e dopo un paio di minuti la polizia inizia a cercare di catturarlo. Per catturare il ladro, la polizia deve recarsi nel luogo in cui si nasconde il ladro. Se la polizia non riesce a raggiungere il nascondiglio, non riuscir&agrave; a trovare il ladro nemmeno dopo aver cercato altrove. Un giorno, quando avevo dieci anni, giocammo a questo gioco. Io ero il ladro e gli altri erano la polizia. Prima di nascondermi ho detto: &ldquo;Vado e non mi troverete&rdquo;. Risposero con sicurezza: &ldquo;Ti troveremo tra dieci minuti&rdquo;. Poi ho aggiunto: "Dove vado io, tu non puoi venire", e sono andato a nascondermi da loro.

  Due minuti dopo, la polizia ha iniziato l&rsquo;inseguimento ma non &egrave; riuscita a trovarmi per mezz&rsquo;ora. Nonostante abbiano perquisito tutti i posti, non sono riusciti a raggiungere il posto in cui mi nascondevo. Quel giorno ero seduto nella stanza della pooja di casa mia e avevo chiuso le porte. Gli altri, giocando come poliziotti, hanno perquisito ovunque, inclusa la casa in cui mi nascondevo, ma non sono venuti nella stanza della pooja perch&eacute; le porte erano chiuse e non hanno cercato all'interno. Inizialmente, pensavo che non ci fosse nulla di speciale nel verso sopra, poich&eacute; somigliava al gioco &ldquo;Ladro e polizia&rdquo;. Tuttavia, in seguito mi sono reso conto che la frase &ldquo;<strong>Morirai nel tuo peccato</strong>" nel versetto aveva un significato significativo. Sebbene somigliasse a un gioco, scoprii che conteneva una profonda saggezza. Ho quindi approfondito la comprensione completa del significato di questa parola. Ecco cosa significa

  Ges&ugrave; &egrave; stato visibile a tutti sulla terra per qualche tempo, ma sfortunatamente nessuno credeva in Lui. Nonostante avesse compiuto molti miracoli per dimostrare che non era un uomo comune &ndash; dando la vista ai ciechi, permettendo agli zoppi di camminare, curando la lebbra e persino riportando in vita i morti per dimostrare la Sua capacit&agrave; di perdonare i peccati &ndash; le persone non riuscivano a riconoscere la Sua vera grandezza. Anche coloro che non riconobbero Ges&ugrave; durante la Sua vita lo avrebbero poi cercato, cercando sollievo dalla loro sofferenza. Tuttavia, non ci sar&agrave; alcun beneficio nel cercarlo una volta che se ne sar&agrave; andato, poich&eacute; non sar&agrave; visibile a nessuno. Le persone che muoiono nei loro peccati non possono essere perdonate da Ges&ugrave;, poich&eacute; non sanno dove &egrave; andato. Anche se coloro che negarono Ges&ugrave; durante la Sua vita in seguito Lo riconosceranno come Dio, i loro peccati non saranno perdonati. Ges&ugrave; aveva predetto tutte queste cose alla gente in anticipo. Quando Ges&ugrave; disse: &ldquo;<strong>Sto andando via</strong>&rdquo;, nessuno gli chiese di restare pi&ugrave; a lungo. Invece, la gente grid&ograve; che fosse crocifisso, portandolo alla morte sulla croce.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 110,
verse: `<b> 32) Il Vangelo di Giovanni, capitolo 8, versetti 23 e 24.</b>`,
meaning: `<b>
(8:23) Ma continuò: “Voi siete dal basso; Vengo dall'alto. Tu sei di questo mondo; Non sono di questo mondo.
<br><br>
(8:24) Ti avevo detto che saresti morto nei tuoi peccati; se non credi che Io sono Lui, davvero morirai nei tuoi peccati”.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In questi due versetti, il 24esimo sembra simile al 21esimo, ma il 23esimo &egrave; unico. Ges&ugrave; diede alla gente una seconda possibilit&agrave; per riconoscere che non era un uomo comune e disse: &ldquo;Voi siete dal basso; Vengo dall'alto. Tu sei di questo mondo; Non sono di questo mondo&rdquo;. Questo versetto &egrave; diviso in due parti: la prima &egrave; &ldquo;Tu sei dal basso; Io vengo dall'alto&rdquo;, e la seconda &egrave; &ldquo;Voi siete di questo mondo; Non sono di questo mondo&rdquo;. Basato sulla prima parte del versetto: &ldquo;Tu sei dal basso; Io vengo dall&rsquo;alto&rdquo;, ci sono stati due tipi di persone sin dal Kruta Yuga: le persone inferiori e quelle superiori. C'&egrave; una ragione dietro la nascita di questi due nomi: inferiore e superiore. Ecco come le persone vengono divise nelle categorie inferiore e superiore.

  L'et&agrave; del Kruta Yuga abbraccia 1.728.000 anni. Durante i primi mille anni del Kruta Yuga, tra la gente emersero due trib&ugrave;: gli gnani (quelli dotati di saggezza) e gli ignoranti. A quel tempo sulla Terra c&rsquo;erano pochissimi gnani, mentre gli ignoranti erano innumerevoli. In quello yuga, la popolazione mondiale contava solo circa 30 milioni di persone e la popolazione indiana non superava i 300.000. Il Sole discese sulla Terra e impart&igrave; la saggezza divina a una persona chiamata Manu. Solo due o tre individui impararono la saggezza direttamente da Manu, e tutte le altre persone nutrirono un grande rispetto per questi gnani, imparando da loro la saggezza divina. A quei tempi, le persone tenevano in grande considerazione gli gnanis, facendoli sedere sul sedile superiore mentre loro stessi sedevano sul pavimento, ascoltando la saggezza. Era consuetudine che le persone cedessero il posto superiore ai guru e si sedessero sul pavimento. Basandosi su ci&ograve;, Ges&ugrave; disse: &ldquo;Voi siete dal basso; Io vengo dall'alto." Ci&ograve; significa: &ldquo;<strong>Sono il vostro insegnante (Guru) per tutti voi</strong>.&rdquo;


  Era normale che gli insegnanti sedessero sul posto pi&ugrave; alto mentre le persone che cercavano la saggezza sedevano sul pavimento. Gli insegnanti erano soliti comunicare alla gente che erano al di sotto degli insegnanti che erano al di sopra di loro. Gli insegnanti che impartirono la saggezza divina erano conosciuti come insegnanti di Brahma Vidya. &lsquo;Brahma&rsquo; significa grande, e &lsquo;Brahma Vidya&rsquo; significa grande insegnamento. Gli insegnanti che possedevano la conoscenza di Brahma Vidya erano chiamati Bramini. A quei tempi, Brahmini significavano insegnanti. Solo due o tre insegnanti in tutta l&rsquo;India venivano chiamati Bramini. Quei bramini classificavano il resto della gente come "persone inferiori". Tutti coloro che mancavano di saggezza venivano designati come "persone inferiori". In questo modo, l'intero paese aveva "persone inferiori". su questa divisione. Quando il sistema delle caste prese forma, coloro che conoscevano Brahma Vidya cominciarono a dire: &ldquo;Noi siamo bramini&rdquo;. Allo stesso modo, coloro che erano ignoranti venivano etichettati &ldquo;Sei al di sotto di noi (Maa-diguvavaru in telugu)&rdquo;. Quindi, due trib&ugrave; - <strong>quello superiore (Eguvavaru in telugu) e quello inferiore (Diguvavaru in telugu) </strong>- formato. Sebbene la parola &ldquo;inferiore (Maadiguva vaaru)&rdquo; esista ancora oggi, le persone potrebbero non comprenderne appieno il significato storico. Nel corso del tempo, il termine &ldquo;Maadiguva vaaru&rdquo; si &egrave; trasformato nella casta Madiga (casta programmata), che ora &egrave; considerata una casta inferiore.

  Quando ebbe origine il sistema delle caste, c'erano due caste: i Bramini e i Madiga (casta programmata). Il termine &ldquo;Madiga&rdquo; era inizialmente usato per riferirsi a coloro che erano considerati ignoranti e privi di saggezza. Tuttavia, nel corso del tempo, anche tra coloro che mancavano di saggezza, emersero numerose caste e coloro che rimasero non classificati furono ancora etichettati come Madiga. Guardando indietro nella storia, Madiga non era originariamente una casta ma piuttosto un nome dato agli ignoranti da due o tre insegnanti. Sulla base di ci&ograve;, le persone di tutte le caste che mancano di saggezza possono essere chiamate Madiga. Le persone sono divise in caste a causa di una storia sconosciuta. &Egrave; ingiusto e ignorante etichettare le persone rimanenti come Madiga. Oltre 2.000 anni fa, Ges&ugrave; us&ograve; anche le parole &ldquo;superiore&rdquo; (Eguvavaru) e &ldquo;inferiore&rdquo; (Diguvavaru). Ha detto: &ldquo;<strong>Tu vieni dal basso; Vengo dall'alto</strong>&rdquo;, riferendosi agli ignoranti. Dovrebbe essere chiaro che le parole &ldquo;superiore&rdquo; e &ldquo;inferiore&rdquo; sono usate per indicare: &ldquo;Io sono uno gnani e tu sei ignorante&rdquo;.

  La seconda parola di Ges&ugrave; &egrave;: &ldquo;Voi siete di questo mondo; Non sono di questo mondo&rdquo;. "Loka" (Mondo) in telugu significa "avere esperienze". Esistono due tipi di persone in base alle esperienze che hanno. Quelli con esperienze appartengono a questo mondo e quelli senza esperienze non appartengono a questo mondo. Le persone comuni godono di ogni esperienza nel mondo, quindi sono i residenti di questo mondo. Ges&ugrave;, che non ha alcuna esperienza, ha detto che non era di questo mondo. Sebbene sembri un uomo, non ha alcuna esperienza come un uomo. Anche se Ges&ugrave; ha un corpo umano, non &egrave; un Jeevatma come gli altri. Quando non &egrave; un Jeevatma, non c'&egrave; karma. Quindi, non ha esperienza basata sul karma. Paramatma invi&ograve; Ges&ugrave; appositamente. In altre parole, lo Spirito Santo venne sotto mentite spoglie di Ges&ugrave;. Secondo il dharma spirituale non dovremmo dire questo. Paramatma cre&ograve; e invi&ograve; appositamente Ges&ugrave;. Pertanto, Ges&ugrave; dovrebbe essere chiamato il Figlio dello Spirito Santo. Poich&eacute; Ges&ugrave; non &egrave; un Jeevatma, si pu&ograve; dire che non ha esperienze. Se Ges&ugrave; fosse un Jeevatma, non dovrebbe essere chiamato il Figlio dello Spirito Santo. Jeevatma &egrave; il Figlio di Atma. Il Padre di Atma &egrave; lo Spirito Santo. Quindi, Jeevatma diventa il nipote dello Spirito Santo. Ges&ugrave; &egrave; chiamato figlio di Dio perch&eacute; &egrave; mandato da Dio da Dio. Ges&ugrave; &egrave; stato anche esplicitamente chiamato Figlio unigenito. Atma &egrave; il Figlio dello Spirito Santo. Il Figlio unigenito &egrave; il Figlio temporaneo che discende sulla terra nel bisogno. Pertanto, il Figlio temporaneo diventa il Figlio dello Spirito Santo come Atma e non diventer&agrave; un nipote come Jeevatma. Jeevatma acquisisce esperienza. Quindi, Jeevatma, che ha esperienze, proviene da questo mondo. Ges&ugrave;, come Atma, che non ha esperienze, non &egrave; di questo mondo. Viene da Paraloka.

  Ges&ugrave; diede alle persone una seconda possibilit&agrave; di riconoscerlo come un uomo straordinario e cit&ograve; questi versetti (Giovanni 8:23, 24). Tuttavia, gli esseri umani non potevano percepire la grandezza di Ges&ugrave; e Lo consideravano un uomo comune. Pertanto, non possono essere assolti dai loro peccati da Ges&ugrave; o dai Suoi insegnamenti. Ges&ugrave;, il Figlio dello Spirito Santo, &egrave; venuto tra gli uomini e ha detto molte parole per farsi conoscere. Ribad&igrave; per la seconda volta che coloro che non fossero riusciti a trovarlo e a credere in Lui sarebbero morti nei loro peccati, come aveva menzionato in precedenza in Giovanni 8:21. Forn&igrave; una terza opportunit&agrave; pronunciando le Sue ultime parole. Ges&ugrave; ripet&eacute; tre serie di versetti per aiutare le persone a identificarLo. Avvert&igrave; che coloro che non Lo avessero riconosciuto non sarebbero stati perdonati dei loro peccati. Esaminiamo la terza serie di versetti per vedere cosa disse.

</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 111,
verse: `<b> 33)  Il Vangelo di Giovanni, capitolo 8, versetto 24.</b>`,
meaning: `<b>
(8:24) Ti avevo detto che saresti morto nei tuoi peccati; se non credi che Io sono Lui, morirai davvero nei tuoi peccati.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si sa che questo versetto diede una terza possibilit&agrave; di sapere chi era Ges&ugrave;. In questo versetto, Ges&ugrave; disse direttamente al pubblico chi era. Ha detto: &ldquo;<b>Coloro che non credono che io sono lo Spirito Santo e il Creatore moriranno nel loro peccato</b>.&rdquo; Ges&ugrave; Lui stesso dichiar&ograve; chi era. Inizialmente, ha detto: &ldquo;<b>me ne andr&ograve;; non puoi venire nel posto dove sono andato</b>&rdquo;, per dare loro qualche opportunit&agrave; di capirlo. Nel secondo versetto, Egli disse: &ldquo;<b>Tu sei di questo mondo; Non sono di questo mondo</b>&rdquo;, fornendo maggiori dettagli per aiutarli a capire chi fosse. Si pu&ograve; capire che Ges&ugrave; &egrave; lo Spirito Santo dal secondo versetto. Nel terzo versetto, Egli disse: &ldquo;<b>Chi non crede che Io Sono non &egrave; in grado di uscire dal peccato</b>&rdquo;, fornendo maggiore chiarezza. Nel terzo versetto, Ges&ugrave; dichiar&ograve;: &ldquo;<b>Io sono Dio</b>.&rdquo; Nonostante ci&ograve;, le persone riconoscevano Ges&ugrave; come un uomo comune e non erano in grado di realizzare che fosse Dio. Alcuni per&ograve; rimasero sorpresi dalle parole di Ges&ugrave;. Sebbene non ci credessero, gli chiesero chi fosse. Ges&ugrave; rispose usando questi tre versetti (Giovanni 8:21, 22, 23) per aiutarli a capire che non era un uomo comune. Tuttavia non se ne rendevano conto e chiedevano: &ldquo;Chi sei?&rdquo; Ges&ugrave; rispose: &ldquo;<b>Proprio quello che ti ho detto fin dall'inizio</b>.&rdquo;

  Inoltre, ha detto: &ldquo;Colui che mi ha mandato &egrave; degno di fiducia, e quello che ho udito da lui, lo dico al mondo&rdquo;. Tuttavia, le persone non si rendevano conto che stava parlando di suo Padre (lo Spirito Santo). Sebbene dicesse cos&igrave; tanto, la gente non riconobbe Ges&ugrave;. Alcuni Lo trattavano come un uomo comune, altri Lo trattavano peggio di un uomo comune. Ges&ugrave; disse qualcos'altro riguardo a quelle persone.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 112,
verse: ` <b> 34) Il Vangelo di Giovanni, capitolo 8, versetto 28.</b>`,
meaning: ` <b>
(8:28) Quindi, Gesù disse: “Quando avrete innalzato il Figlio dell’Uomo, allora saprete che Io sono Lui e che non faccio nulla da me stesso ma dico proprio ciò che il Padre mi ha insegnato. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  C'&egrave; una certa confusione in questo versetto riguardo alla frase: "<b>Hai innalzato il Figlio dell'uomo</b>.&rdquo; Forse non si capisce la frase. Per interpretare correttamente questa frase, bisognerebbe leggerla come &ldquo;Quando le persone sollevano Ges&ugrave; sopra le loro teste&rdquo; invece di &ldquo;Quando hai innalzato Ges&ugrave;&rdquo;. Alcuni potrebbero chiedersi: &ldquo;Perch&eacute; le persone dovrebbero sollevare Ges&ugrave; sopra le loro teste?&rdquo; La risposta &egrave; questa <b>Ges&ugrave; va capito con la testa </b>quello &egrave; sul nostro corpo. Uno che capisce Ges&ugrave; con loro <b>intelletto (buddhi) </b>sapr&agrave; che Ges&ugrave; &egrave; lo Spirito Santo. Inoltre, questo versetto rivela che la saggezza divina insegnata da Ges&ugrave; non &egrave; la Sua; invece, insegna come diretto dallo Spirito Santo.

  Invece di affermare che gli esseri umani dovrebbero comprendere Ges&ugrave; con la buddhi in testa, il versetto dice che le persone hanno elevato Ges&ugrave;. Si sa che Ges&ugrave; &egrave; Paramatma (lo Spirito Santo) se lo si comprende <b>con il Buddhi </b>nel corpo. Finch&eacute; la gente non avr&agrave; capito che Ges&ugrave; &egrave; Dio&rdquo;,<b>i peccati delle persone non vengono perdonati e muoiono nel loro peccato</b>&rdquo;, come affermato nei tre versi precedenti. Se capiscono quello che ha detto Ges&ugrave;, si sapr&agrave; che Ges&ugrave; &egrave; Dio. Il segreto secondo cui lo Spirito Santo si incarna come uomo per insegnare la Sua saggezza viene rivelato. Quando si apprende che Ges&ugrave; &egrave; Dio, alcuni potrebbero pensare che Ges&ugrave; stesso stia dicendo tutta la saggezza di cui Ges&ugrave; parla. Tuttavia non &egrave; possibile dirlo come pensano alcuni. Il motivo &egrave; che dopo aver detto: &ldquo;<b>Io sono Lui</b>&rdquo;, Pronunci&ograve; un'altra parola.

  Ges&ugrave; disse: &ldquo;<b>Non faccio nulla da solo, ma dico proprio quello che il Padre mi ha insegnato</b>.&rdquo; Ci&ograve; potrebbe creare l&rsquo;impressione che il Padre e Ges&ugrave; siano distinti. Il motivo per cui lo esprimiamo in due modi &egrave; radicato nel fatto che Ges&ugrave; era un uomo. Dio, nella Sua vera forma, &egrave; invisibile e incarna il potere. Quando Dio assume una forma umana, e se un individuo percepisce questa verit&agrave; con l'intelletto (buddhi), capir&agrave; che lo Spirito Santo e Ges&ugrave; sono la stessa cosa. Tuttavia, quando Dio si incarna come uomo, &egrave; contro la legge spirituale che l&rsquo;incarnazione dichiari apertamente: &ldquo;Io sono Dio&rdquo;. Anche se si pu&ograve; riconoscere la persona visibile come Dio, questa verit&agrave; non dovrebbe essere rivelata apertamente secondo <b>legge spirituale</b>. Seguendo questa regola spirituale, Ges&ugrave; afferm&ograve;: &ldquo;<b>Non faccio nulla da solo, ma dico proprio quello che il Padre mi ha insegnato</b>&rdquo;, aderendo ai principi della legge spirituale.

  Ges&ugrave; disse: &ldquo;Dico quello che ha detto il Padre&rdquo;. Entrambe le frasi &ndash; &ldquo;Io non faccio nulla da solo&rdquo; e &ldquo;Dio fa tutto&rdquo; &ndash; significano la stessa cosa. Quando le persone riconoscono che Ges&ugrave; &egrave; lo Spirito Santo, i loro peccati saranno perdonati. Sebbene sia saggio comprendere che Ges&ugrave; &egrave; lo Spirito Santo, &egrave; spiritualmente errato dire che lo Spirito Santo &egrave; Ges&ugrave;. Pertanto, Ges&ugrave; stesso disse: &ldquo;<b>Finch&eacute; non saprai che io sono Dio, i tuoi peccati non ti saranno perdonati</b>," E "<b>Io sono Lui</b>&rdquo;, affinch&eacute; gli esseri umani capissero chi era Ges&ugrave;. Secondo la legge spirituale, alla fine disse: &ldquo;Sto facendo tutto ci&ograve; che mio Padre mi ha detto di fare&rdquo;. Pertanto, non si dovrebbe presumere che Ges&ugrave; abbia parlato in due modi nel versetto. Sebbene nel versetto sia scritto &ldquo;Io sono Dio&rdquo; e &ldquo;Sto facendo ci&ograve; che Dio dice&rdquo;, entrambi trasmettono lo stesso significato. Si potrebbe pensare che Ges&ugrave; abbia detto cose contraddittorie se non si capisce questo. Chi comprende la saggezza pu&ograve; riconoscere che Dio viene come uomo, ma non dovrebbe dichiarare che una persona in particolare &egrave; Dio. Perci&ograve; Ges&ugrave; ha detto anche: &ldquo;Io sono Dio&rdquo; in una parola e &ldquo;Il Padre mio &egrave; Dio&rdquo; in un&rsquo;altra. Entrambi sono veri. Inoltre, Ges&ugrave; disse alle persone quanto segue.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 113,
verse: `<b>35) Il Vangelo di Giovanni, capitolo 8, versetto 29.</b>`,
meaning: ` <b>
(8:29) Colui che mi ha mandato è con me; Non mi ha lasciato solo, perché faccio sempre ciò che gli piace. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si dice che questo versetto indichi che Gesù e lo Spirito Santo sono la stessa cosa. A sostegno di ciò, Gesù disse: “Colui che mi ha mandato è con me”. Ciò significa che il Dio che ha mandato Gesù è in Lui e che lo Spirito Santo e Gesù sono la stessa cosa. C’è qualcosa chiamato “Volontà” nel corpo umano. Gesù disse che avrebbe sempre fatto le cose secondo la volontà di Dio. In un modo diverso, ha detto che la volontà di Dio opera in Lui. È una testimonianza del fatto che Dio è in Gesù. Gesù disse anche che lo Spirito Santo non lo aveva lasciato solo. È come se Gesù dicesse che Dio era con Lui e che Dio era Lui. Gesù stesso ha pronunciato queste parole per riconoscerlo come Dio. Sebbene Dio sia venuto come “Gesù” nel Kali Yuga, le persone non Lo hanno riconosciuto. Pertanto, è diventato necessario che Gesù pronunciasse queste parole per riconoscere la sua grandezza. Altrimenti le persone non capirebbero la saggezza di Gesù. Quando Gesù pronunciò questi versetti, alcune persone Gli credettero.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 114,
verse: ` <b> 36) Il Vangelo di Giovanni, capitolo 8, versetti 53 e 54.</b>`,
meaning: ` <b>
(8:53) Sei tu più grande del nostro padre Abramo? Morì, e così fecero anche i profeti. Chi pensi di essere?"
<br><br>
(8:54) Gesù rispose: “Se glorifico me stesso, la mia gloria non significa nulla. Padre mio, colui che rivendichi come tuo Dio, è colui che mi glorifica. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Sebbene Gesù fornisse spiegazioni dettagliate affinché le persone Lo capissero, queste hanno faticato a cogliere la Sua identità, portandole a chiedersi: “Chi sei?” In risposta, Gesù affermò: “Se glorifico me stesso, la mia gloria non significa nulla”. Avendo già parlato di Se stesso in cinque occasioni, riconobbe il potenziale per le Sue parole di essere percepite come false se le avesse ripetute o elaborate ulteriormente. Perciò Gesù spiegò: “Se dico ancora una volta qualcosa di diverso da quanto detto finora, allora il Padre mio, che voi ritenete vostro Dio, mi glorifica”. Questa affermazione sottolinea l’unità fondamentale tra Gesù e suo Padre, che le persone considerano Dio. Tuttavia, nel rispetto delle regole spirituali, non si dovrebbe affermare direttamente di essere Dio. Quindi, Gesù dichiarò inizialmente “Io sono Dio” per aiutare le persone a capirlo. Successivamente chiarì affermando che Dio era suo Padre. “Solo perché ti ho detto due cose in modo diverso, non dovresti essere confuso. Dovresti capirmi con la verità”, ha detto Gesù, sottolineando l’importanza di comprendere la Sua identità oltre le espressioni superficiali.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 115,
verse: `<b>37) Il Vangelo di Giovanni, capitolo 8, versetto 55. </b>`,
meaning: `<b>
(8:55) Anche se tu non Lo conosci, io Lo conosco. Se dicessi di no, sarei un bugiardo come te, ma Lo conosco e obbedisco alla Sua parola.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Gesù ha proclamato: “Voi non conoscete Dio; Conosco Dio”, affrontando la percezione di molti che Lo consideravano un uomo comune. La necessità di una simile affermazione è nata per chiarire la distinta relazione di Gesù con Dio. Alcuni si chiedevano come Gesù, essendo umano come gli altri, potesse affermare di conoscere Dio mentre gli altri non lo facevano. Per rispondere a questa domanda, possiamo considerare la ripetuta dichiarazione di Gesù, “Io sono Lui”, in tre versetti distinti. Secondo questa affermazione, Gesù non possiede Jeevatma nel Suo corpo, anche se ha una forma umana. Invece, lo Spirito Santo funge da unico Atma nel Suo corpo, impegnandosi attivamente in ogni azione. L’equivoco nasce quando le persone presumono che l’Atma sia il Jeevatma, portandole a credere che Gesù potrebbe non conoscere Dio. Tuttavia, la verità è che lo stesso Paramatma (lo Spirito Santo) risiede nel corpo di Gesù, facendogli conoscere Dio. Poiché lo Spirito Santo è la coscienza dentro Gesù, non c'è bisogno di una conoscenza separata; Gesù possiede intrinsecamente Dio come Sua coscienza. Al contrario, gli esseri umani comuni hanno la mente (manas) come coscienza nei loro corpi ma non hanno la coscienza né di Atma né di Paramatma. La mancanza della coscienza di Paramatma è la ragione per cui gli esseri umani non conoscono Dio, mentre Gesù, con Dio come Sua coscienza, Lo conosce intrinsecamente.

  Se Gesù affermasse: “Non conosco Dio”, ciò suggerirebbe una mancanza di coscienza di Dio in Lui, simile a quella degli esseri umani comuni. Una simile affermazione equivarrebbe a falsità. Pertanto, Gesù dichiarò: “Se dicessi che non conosco Dio, sarei un bugiardo come te”. L'unicità sta nel fatto che lo Spirito Santo è l'unico abitante nel corpo di Gesù, eliminando l'esistenza di una doppia coppia di anime: Atma, responsabile delle azioni, e Jeevatma, delle esperienze. Nel corpo di Gesù, dove risiede solo lo Spirito Santo, ogni parola pronunciata ha origine dallo Spirito Santo. Quindi, quando Gesù espresse: “Sono cosciente di Lui. Lo conosco e obbedisco alla sua parola”, queste parole emanavano dallo Spirito Santo, nonostante Gesù parlasse in modo simile a tutti gli altri. Nonostante il Suo aspetto esteriore di uomo comune, non c’era nessun aspetto che Gli fosse sconosciuto. Un esempio di questa profonda conoscenza si sviluppò quando Gesù parlò di Abramo, figura morta da tempo, suscitando stupore e suscitando una domanda in coloro che lo circondavano.
</div></div>

</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 116,
verse: ` <b>38) Il Vangelo di Giovanni, capitolo 8, versetti 57 e 58.</b>`,
meaning: `<b>
(8:57) “Non hai ancora cinquant'anni”, gli dissero, “e hai visto Abramo!”.
<br><br>
(8:58) “In verità vi dico”, rispose Gesù, “prima che Abramo nascesse, io sono!” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando Ges&ugrave; pronunci&ograve; queste parole, aveva circa 32 anni, sul punto di entrare nel suo 33&deg; anno. Abramo, una figura storica, era vissuto secoli prima di Ges&ugrave;, simile a un bisnonno della gente del tempo di Ges&ugrave;. Quando Ges&ugrave; si rifer&igrave; ad Abramo, gli ebrei presenti si chiesero come potesse parlare di un uomo che lo aveva preceduto di molto, essendo nato e morto in un'epoca diversa. In risposta, Ges&ugrave; fece l&rsquo;enigmatica affermazione: &ldquo;Prima che Abramo nascesse, io sono&rdquo;. Questa affermazione apparve ingannevole a coloro che lo circondavano, data la chiara distinzione generazionale tra Ges&ugrave; e Abramo. Ci&ograve; nonostante, ci&ograve; che Ges&ugrave; espresse era una verit&agrave; assoluta, anche se ai suoi contemporanei sembr&ograve; paradossale.

  Esploriamo la verit&agrave; dietro questa affermazione. Il corpo fisico di Ges&ugrave; &egrave; nato circa 32 anni fa. Tuttavia, solo lo Spirito Santo risiede nel Suo corpo, non il Jeevatma. Se Jeevatma fosse presente, Ges&ugrave; non avrebbe ricordi delle nascite precedenti, poich&eacute; Jeevatma non conserva tali ricordi. Al contrario, Paramatma (l&rsquo;Anima Suprema) &egrave; presente nel corpo di Ges&ugrave; ed &egrave; eterno. Esiste da prima della creazione dell'universo ed &egrave; il creatore di tutti gli esseri viventi, compreso Abramo. Abramo, come ogni altro essere umano, nacque, visse e mor&igrave;, con lo Spirito Santo come testimone. Mentre Atma diede la vita ad Abramo, Dio (Paramatma) fu testimone dell'intero viaggio. <b>Dio &egrave; il testimone supremo, Atma &egrave; colui che agisce e Jeevatma sperimenta la vita</b>. Sebbene Abramo sia nato attraverso Atma, Dio, come testimone ultimo, sa tutto di Abramo. Paramatma sa quante volte Abramo &egrave; nato nel passato e quante volte nascer&agrave; nel futuro. Pertanto, quando Ges&ugrave; disse: &ldquo;Prima che Abramo nascesse, io sono&rdquo;, si riferiva alla Sua identit&agrave; come l&rsquo;eterno Paramatma che esiste da prima della nascita di Abramo e continuer&agrave; ad esistere dopo la Sua morte. Questa affermazione sottolinea l&rsquo;esistenza senza tempo di Ges&ugrave; oltre i limiti della nascita e della morte fisica.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 117,
verse: `<b>39) Il Vangelo di Giovanni, capitolo 9, versetto 39.</b>`,
meaning: ` <b>
(9:39) Gesù disse: “Sono venuto in questo mondo per il giudizio, affinché i ciechi vedrà e quelli che vedono diventeranno ciechi”.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando alcune persone accusarono Ges&ugrave; di essere un peccatore, l&rsquo;individuo il cui karma era stato rimosso da Ges&ugrave; ud&igrave; le loro parole e rispose con le seguenti informazioni.

  (Giovanni 9:25-38) Egli rispose: <b>&ldquo;Se sia un peccatore o no, non lo so. Una cosa so. Ero cieco ma ora vedo!&rdquo;</b>. Allora gli chiesero: <b>&ldquo;Cosa ti ha fatto? Come ti ha aperto gli occhi?&rdquo; </b>Ha risposto, <b>&ldquo;Te l&rsquo;ho gi&agrave; detto e non mi hai ascoltato. Perch&eacute; vuoi ascoltarlo di nuovo? Vuoi diventare anche tu Suoi discepoli?&rdquo; </b>Allora lo insultarono e dissero: <b>&ldquo;Tu sei il discepolo di quest&rsquo;uomo! Siamo discepoli di Mos&egrave;! Sappiamo che Dio ha parlato a Mos&egrave;, ma quanto a costui non sappiamo nemmeno da dove venga.&rdquo;. </b>L'uomo rispose: <b>&ldquo;Questo &egrave; straordinario! Non sai da dove viene, eppure mi ha aperto gli occhi. Sappiamo che Dio non ascolta i peccatori. Ascolta la persona pia che fa la Sua volont&agrave;. Nessuno ha mai sentito parlare di aprire gli occhi a un uomo nato cieco. Se quest&rsquo;uomo non venisse da Dio, non potrebbe fare nulla&rdquo;. </b>A questo hanno risposto: <b>&ldquo;Sei stato immerso nel peccato fin dalla nascita; come osi darci la lezione!" </b>E lo hanno buttato fuori. Ges&ugrave; venne a sapere che lo avevano cacciato fuori e, quando lo trov&ograve;, disse: <b>&ldquo;Credi nel Figlio dell&rsquo;Uomo?&rdquo; "Chi &egrave; Lui, signore?" </b>chiese l'uomo. <b>&ldquo;Dimmelo affinch&eacute; io creda in Lui&rdquo;. </b>Ges&ugrave; disse: &ldquo;<b>Adesso Lo hai visto; infatti &egrave; Lui che parla con te&rdquo;. </b>Poi l'uomo disse: <b>&ldquo;Signore, io credo&rdquo;, </b>e lo ador&ograve;. Dopo gli avvenimenti appena accaduti, Ges&ugrave; disse: <b>&ldquo;Sono venuto in questo mondo per il giudizio, affinch&eacute; i ciechi vedano e coloro che vedono diventino ciechi&rdquo;. </b>Questa affermazione pu&ograve; essere compresa alla luce degli eventi precedenti.

  Lo scopo della dichiarazione di Ges&ugrave; era di trasmettere questo <b>coloro che hanno fede in Dio possono vedermi</b>, anche se non sanno chi &egrave;. Coloro che non credono in Dio possono interagire con Ges&ugrave; quotidianamente e vedere il Suo corpo fisico, ma non riescono a riconoscerLo. Pertanto, Ges&ugrave; ha detto che &egrave; venuto nel mondo per rendere i non credenti inconsapevoli che Egli &egrave; Dio. Nonostante Dio assuma forma umana e stia accanto ai non credenti, essi non riescono a riconoscere il Figlio di Dio a causa della loro ignorante cecit&agrave;. Questa cecit&agrave; &egrave; un tipo di ignoranza che impedisce loro di conoscere Dio, anche quando appare in forma umana. Quando Ges&ugrave; disse questo <b>un devoto che vede l&rsquo;incarnazione di Dio (il Figlio di Dio) potrebbe non riconoscerLo in base all&rsquo;apparenza esteriore, ma invece, attraverso l&rsquo;intuizione</b>, alcune delle persone intorno a Lui chiesero se anche loro erano ciechi. Ges&ugrave; rispose loro cos&igrave;.
</div></div>

</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 118,
verse: `<b>40) Il Vangelo di Giovanni, capitolo 9, versetto 41.</b>`,
meaning: `<b>
(9:41) Gesù disse: “Se fossi cieco, non saresti colpevole di peccato; ma ora che affermi di poter vedere, la tua colpa rimane.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nel versetto 39, Ges&ugrave; spieg&ograve; la distinzione tra coloro che hanno fede e coloro che non hanno fede. Affermava che una persona cieca con fede divina poteva vederlo, mentre i non credenti potevano vederlo fisicamente ma non potevano percepire la Sua vera identit&agrave;. Nel versetto 41, Ges&ugrave; approfondito il comportamento di chi opera con a <b>prospettiva mondana</b>. Gli individui con una mentalit&agrave; mondana proclamano: &ldquo;Sto vedendo&rdquo;, attribuendo le loro azioni a se stessi e di conseguenza accumulando karma per le loro azioni. Dio ha donato la vista agli esseri umani per comprendere la Sua saggezza, ma non tutti impiegano la propria vista per riconoscere Dio. Alcuni rimangono spiritualmente ciechi nonostante abbiano la vista fisica. Per quanto riguarda le questioni mondane, ogni individuo &egrave;, essenzialmente, cieco. La verit&agrave; &egrave; che nessuno si impegna autonomamente in attivit&agrave; mondane. Nessuno possiede la vista o l'udito. Nonostante la loro intrinseca mancanza, le persone affermano: &ldquo;Io vedo&rdquo;, presumendo falsamente di avere la vista e di conseguenza incorrendo nel peccato per le loro azioni. Anche se gli esseri umani sono spiritualmente ciechi, accumulano peccati quando credono erroneamente di possedere la vista. Ges&ugrave; ha sottolineato che riconoscere la propria cecit&agrave; spirituale e ammetterlo <b>la verit&agrave; </b>di non aver visto nulla li assolve dal peccato. In sostanza, riconoscere la propria cecit&agrave; spirituale previene l&rsquo;accumulo di peccati nelle questioni mondane.

  Coloro che mancano della saggezza divina non sono consapevoli della loro mancanza di vista nelle questioni mondane. La loro incapacit&agrave; di comprendere le parole di Ges&ugrave; deriva dalla loro ignoranza del fatto che Dio ha dotato la vista solo per comprendere questioni relative a Lui. Per cogliere l'essenza del versetto, il Jeeva (anima) di ogni individuo deve prima riconoscere se &egrave; cieco o possiede visione profonda nel corpo. In verit&agrave;, il Jeeva nel corpo di ogni persona &egrave; completamente cieco in tutti gli aspetti. Ogni Jeeva crede erroneamente che il corpo gli appartenga e che siano loro gli autori di tutte le azioni nel corpo. Tuttavia, Jeevatma non ha un'agenzia indipendente nel corpo; <b>Atma </b>&egrave; il vero proprietario e responsabile del trattamento. L'Atma opera continuamente all'interno del corpo e, in realt&agrave;, Jeeva non svolge alcun compito nel corpo. Privo di vista, udito e piena funzionalit&agrave;, Jeeva &egrave; cieco, sordo e disabile in tutti i sensi. Posizionato accanto a <b>Buddhi </b>(intelletto) nel corpo, Jeeva diventa consapevole delle informazioni che raggiungono l'intelletto, ma Jeeva non pu&ograve; sapere nulla in modo indipendente. Nonostante manchi di conoscenza diretta, Jeeva crede erroneamente di aver assistito personalmente a tutto. Sebbene Atma sia la forza attiva nel corpo, Jeeva attribuisce erroneamente tutte le azioni a se stesso. Quando Jeeva rivendica falsamente la responsabilit&agrave; di un'azione, deve sopportare le conseguenze karmiche associate a tale azione.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 119,
verse: `<b>41) Il Vangelo di Giovanni, capitolo 10, versetto 18.</b>`,
meaning: `<b>
(10:18) Nessuno mi toglie la vita, ma la offro da me stesso. Ho l’autorità di deporla e l’autorità di riprenderla. Questo comando l'ho ricevuto dal Padre mio. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nessuno sa quando una persona comune lascer&agrave; questa vita. Una volta che qualcuno muore, non torner&agrave;. Ci&ograve; &egrave; evidente in ogni morte. Anche Jeeva lascia il corpo nella morte. Tuttavia, la maggior parte delle persone non se ne rende conto <b>Jeeva &egrave; separato dalla forza vitale in una persona</b>. Molte persone pensano che Jeeva e la forza vitale siano la stessa cosa. Ma nel versetto si dice: &ldquo;<b>Nessuno mi toglie la vita</b>&rdquo;, il che dimostra che Ges&ugrave; &egrave; diverso e la sua forza &egrave; diversa. Sebbene ognuno abbia la propria forza vitale nel proprio corpo, come Ges&ugrave;, non pu&ograve; metterla da parte n&eacute; riprenderla. All'interno del corpo ci sono molti organi interni, vita, buddhi e manas. Qualunque cosa all'interno del corpo &egrave; sotto il controllo dell'Atma, non sotto il controllo dell'uomo. Quindi, l&rsquo;Atma decide se mettere da parte la vita di una persona oppure inviatelo dove l'Atma desidera, poich&eacute; &egrave; il suo compito. <b>Jeeva </b>non ha alcuna relazione con la forza vitale nel loro corpo, ma <b>Atma </b>ha una relazione con la forza vitale nel corpo.

  Ges&ugrave; non &egrave; un Jeeva ordinario, ma piuttosto &egrave; Atma. In quanto tale, Egli ha l&rsquo;autorit&agrave; di mettere da parte la Sua vita e nessuno pu&ograve; portargliela via. Questo significa questo <b>Ges&ugrave; non muore per mano di nessun altro</b>; se dovesse morire, sceglierebbe di mettere da parte la Sua vita. Solo l'Atma ha il potere di mettere da parte la vita e poi riportarla indietro quando lo si desidera. Lo Spirito Santo ha dato a Ges&ugrave; l&rsquo;autorit&agrave; di fare questo, come Ges&ugrave; stesso ha dichiarato: &ldquo;<b>Nessuno mi toglie la vita, ma la offro da me stesso. Ho l&rsquo;autorit&agrave; di deporlo e riprenderlo. Questo comando l'ho ricevuto dal Padre mio</b>.&rdquo; Come predetto, Ges&ugrave; fece nascondere la Sua vita (prana o respiro) nel Suo corpo quando fu crocifisso, apparendo morto a coloro che lo circondavano. Eppure &egrave; emerso vivo la domenica mattina presto, dopo aver ripreso in mano la Sua vita. Ci&ograve; dimostra che Ges&ugrave;, essendo Atma, ha il potere di deporre la Sua vita e poi ritornare in vita nello stesso corpo, e questa autorit&agrave; Gli &egrave; stata data da Suo Padre, lo Spirito Santo. Inoltre, Atma ha l&rsquo;autorit&agrave; di togliere la vita agli altri e inviarli alla reincarnazione.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 120,
verse: ` <b>42) Vangelo di Giovanni, capitolo 10, versetto 30.</b>`,
meaning: ` <b>
(10:30) Io e il Padre siamo uno.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Atma &egrave; il Padre di Jeeva e, di conseguenza, Paramatma &egrave; responsabile della creazione di Atma. Pertanto, Atma &egrave; anche il Padre degli esseri umani, mentre Paramatma &egrave; il Padre di Atma. Poich&eacute; Ges&ugrave; &egrave; Atma, Egli &egrave; il Figlio di Dio. Quando <b>un figlio presta molta attenzione a suo padre</b>, significa uno stato di unione tra il figlio e il padre. Questa &egrave; l&rsquo;essenza dell&rsquo;affermazione di Ges&ugrave;: &ldquo;<b>Io e mio Padre siamo uno</b>&rdquo;, mentre dirigeva la Sua attenzione verso Suo padre, lo Spirito Santo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 121,
verse: ` <b> 43) Il Vangelo di Giovanni, capitolo 11, versetto 25.</b>`,
meaning: ` <b>
(11:25) Gesù le disse: “Io sono la risurrezione e la vita. Quello che crede in me vivranno, anche se moriranno”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In questo contesto, “resurrezione” è indicativa di nascita, mentre “vita” significa liberazione (moksham), implicando la libertà dal ciclo della rinascita. Poiché sia ​​la nascita che il moksham sono legati ad Atma, Gesù dichiarò: “Colui che crede in me non rinascerà dopo la morte ma otterrà <b>moksham</b>.”
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 122,
verse: `<b>44) Vangelo di Giovanni, capitolo 11, versetto 26.</b>`,
meaning: `<b>
(11:26) Chi vive credendo in me non morirà mai.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Colui che ha raggiunto moksham sperimenterà la vita eterna e non affronterà mai più la morte. Pertanto, Gesù proclamò: “Chiunque abbia fede in Dio otterrà moksham e non morirà mai più”.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 123,
verse: `<b>45) Il Vangelo di Giovanni, capitolo 12, versetto 25.</b>`,
meaning: `<b>
(12:25) Chiunque ama la propria vita la perderà, mentre chiunque odia la propria vita in questo mondo la conserverà per la vita eterna.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  L&rsquo;affermazione di Ges&ugrave;, &ldquo;Chiunque ama la propria vita, la perder&agrave;&rdquo;, pu&ograve; essere spiegata come segue: gli esseri umani (Jeeva) hanno bisogno che la vita esista sulla terra, e coloro che si attaccano alla loro vita terrena la perderanno inevitabilmente poich&eacute; non possono vivere per sempre. La vita di una persona dipende dal flusso del Prana (forza vitale) nel suo corpo e, una volta morta, la sua respirazione cessa permanentemente. Una volta che l&rsquo;ultimo respiro lascia il corpo e si fonde con l&rsquo;aria esterna, non torner&agrave; pi&ugrave;. Quando qualcuno passa dalla prima nascita alla seconda, riceve un nuovo respiro (vita), ma quello vecchio non viene mai riacquistato. Pertanto, coloro che danno priorit&agrave; alla propria vita terrena e ad essa si aggrappano, alla fine la perderanno. Nonostante questa certezza, le persone amano naturalmente la propria vita pi&ugrave; di ogni altra cosa e cercano di prolungare il proprio tempo sulla terra.

  Una persona che desidera moksham e non desidera vivere in questo mondo odia la propria vita, indicando una mancanza di interesse per gli affari mondani. Una persona del genere abbandona il ciclo della nascita e ottiene la vita eterna. Questa vita &egrave; libera dalla morte e la persona che la raggiunge la protegger&agrave;. Sebbene coloro che ottengono moksham non abbiano una vita speciale simile a quella di una persona comune, il termine &ldquo;vita eterna&rdquo; viene utilizzato per aiutarci a comprendere il concetto. &Egrave; importante notare che chiunque raggiunga moksham rimarr&agrave; per sempre in uno stato di eternit&agrave;, senza nascita o morte.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 124,
verse: `<b>46) Il Vangelo di Giovanni, capitolo 12, versetto 40.</b>`,
meaning: `<b>
(12:40) Ha accecato i loro occhi e indurito i loro cuori, così che non possano né vedere con gli occhi, né capire con il cuore, né voltarsi — e io li guarirei. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando Dio venne come uomo e disse alle persone la saggezza di cui avevano bisogno, Atma, Dio nel corpo, accec&ograve; i loro occhi e indur&igrave; i loro cuori in modo che non potessero n&eacute; vedere n&eacute; capire con i loro cuori n&eacute; liberarsi del karma. Il karma &egrave; la causa della loro sofferenza. In questo verso, ci&ograve; che &egrave; importante notare &egrave; che l&rsquo;Atma, creato dallo Spirito Santo, &egrave; nel corpo di ognuno e fa funzionare tutti. Sebbene Atma sia il Figlio dello Spirito Santo, lo Spirito Santo, il Creatore, nasce come uomo per impartire saggezza. Sebbene il nato sia lo Spirito Santo, Egli &egrave; chiamato Figlio di Dio invece che Dio. In base a ci&ograve; l'Atma, che &egrave; nel corpo, diventa il Figlio dello Spirito Santo. L&rsquo;incarnazione dello Spirito Santo come essere umano &egrave; anche chiamata il Figlio dello Spirito Santo. L&rsquo;Atma nel corpo acceca gli occhi dell&rsquo;uomo ignorante e indurisce il suo cuore affinch&eacute; non comprendano le parole del Figlio di Dio e non possano liberarsi del proprio karma.

  Lo Spirito Santo, il Creatore, cre&ograve; un figlio Atma e lo pose nel corpo umano. Inoltre, lo Spirito Santo cre&ograve; un altro Figlio in forma umana per impartire saggezza a coloro che erano ignoranti. Mentre l'Atma nel corpo umano &egrave; sempre presente, l'incarnazione umana del <b>Atma </b>appare sulla terra solo periodicamente per insegnare la saggezza. Anche quando l'incarnazione umana dell'Atma impartisce saggezza a individui che sono disinteressati e invidiosi dello Spirito Santo, l'Atma all'interno del corpo fa s&igrave; che il loro intelletto (buddhi) non sia in grado di comprenderlo. Tuttavia, se un individuo possiede <b>devozione e interesse </b>nello Spirito Santo, l'Atma nel corpo consente loro di comprendere le parole dell'incarnazione umana dell'Atma. Bisogna riconoscere sia l'Atma nel corpo che il secondo Figlio, incarnato in forma umana, <b>per comprendere veramente la saggezza dello Spirito Santo</b>.
</div></div>
  </span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 125,
verse: ` <b>47) Il Vangelo di Giovanni, capitolo 12, versetti 47 e 48.</b>`,
meaning: ` <b>
(12:47) Se qualcuno ascolta le mie parole ma non le osserva, non lo giudico. Perché non sono venuto per giudicare il mondo, ma per salvare il mondo.
<br><br>
(12:48) C'è un giudice per chi mi rifiuta e non accetta le mie parole; le stesse parole che ho detto li giudicheranno nell’ultimo giorno. `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si pu&ograve; dire che colui che ha pronunciato queste parole &egrave; l'Atma che ha la forma di un essere umano. Quando qualcuno ascolta ma trascura di comprendere la saggezza impartita da Dio quando viene in forma umana, l'Atma in forma umana non giudica la sua prossima vita in base al peccato e al punya dopo la morte. L&rsquo;Atma, venuto come uomo per insegnare la saggezza, non &egrave; venuto per giudicare la prossima vita degli esseri umani. Dio (Atma) venne come uomo per rivelare la Sua saggezza alle persone e salvarle. Qualcun altro giudica la vita successiva di un uomo che non ascolta le parole dell'Atma in forma umana e non Lo riconosce grande. Bisogna sapere che tale giudice &egrave; l'Atma, che &egrave; sempre presente nel corpo. L'Atma nel corpo umano decide la prossima nascita nel giorno della morte in base alla saggezza impartita dall'Atma, che &egrave; in forma umana. <b>Non si pu&ograve; conoscere lo Spirito Santo se non si comprende l'opera dell'Atma nel corpo e dell'Atma (Bhagavan), che viene in forma umana.</b>
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 126,
verse: ` <b>48) Il Vangelo di Giovanni, capitolo 12, versetti 49 e 50.</b>`,
meaning: ` <b>
(12:49) Poiché non ho parlato da me stesso, ma il Padre che mi ha mandato mi ha comandato di dire tutto ciò che ho detto.
<br><br>
(12:50) So che il suo comando conduce alla vita eterna. Quindi, qualunque cosa io dica è proprio ciò che il Padre mi ha detto di dire. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si dovrebbe capire che il <b>Atma (Bhagavan)</b>, venuto come essere umano, ha pronunciato queste parole. Ges&ugrave;, Dio in forma di essere umano, ha pronunciato questa affermazione. Ogni volta che Dio si incarna come uomo, tutta la Sua saggezza proviene dallo Spirito Santo. Colui che venne in forma umana menzion&ograve; che lo Spirito Santo lo spinse a trasmettere questa saggezza. La saggezza impartita dall'Atma (Bhagavan) in forma umana porta a <b>vita eterna (moksham)</b>. Sebbene Colui che venne in forma umana non sia esplicitamente identificato come Dio, Egli afferm&ograve;: &ldquo;<b>Qualunque cosa dico &egrave; proprio ci&ograve; che il Padre mi ha detto di dire</b>&rdquo;, rivelando che chi parla &egrave; lo Spirito Santo. Con ci&ograve; diventa evidente che a parlare &egrave; lo Spirito Santo. Tuttavia, secondo la dottrina spirituale, dovrebbe farlo Va sottolineato che lo Spirito Santo &egrave; il Padre e l'Atma venuto in forma umana &egrave; il Figlio.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 127,
verse: ` <b>49) Il Vangelo di Giovanni, capitolo 14, versetto 7.</b>`,
meaning: ` <b>
(14:7) Se mi conosci veramente, conoscerai anche mio Padre. Da ora in poi Lo conosci e Lo hai visto.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Questo versetto &egrave; simile a quello menzionato prima (Giovanni 12:49, 12:50). Come ho detto prima, il Padre e il Figlio sono la stessa cosa; tuttavia, secondo la dottrina spirituale, si dovrebbe dire che il Padre e il Figlio sono separati. Ges&ugrave; disse: &ldquo;<b>Se veramente mi conoscete, conoscerete anche mio Padre</b>.&rdquo; Sebbene Dio, quando venne come essere umano, sia chiamato il Figlio di Dio, in realt&agrave;, il Padre stesso ha la forma del Figlio. Quindi, il versetto afferma: &ldquo;<b>Se conosci il Figlio, conosci il Padre</b>.&rdquo;
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 128,
verse: ` <b>50) Il Vangelo di Giovanni, capitolo 14, versetti 8 e 9.</b>`,
meaning: ` <b>
(14:8) Filippo disse: “Signore, mostraci il Padre e questo ci basterà”.
<br><br>
(14:9) Gesù rispose: “Non mi conosci, Filippo, anche dopo che sono tra voi da così tanto tempo? Chi ha visto me ha visto il Padre. Come puoi dire “mostraci il Padre?” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Questo versetto rivela che colui che ha una forma visibile è lo Spirito Santo. Pertanto, Gesù disse: <b>“Chi ha visto me ha visto il Padre”</b>.</b>
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 129,
verse: `<b> 51) Il Vangelo di Giovanni, capitolo 14, versetto 10.</b>`,
meaning: `<b>
(14:10) Non credi che io sono nel Padre e che il Padre è in me? Le parole che ti dico non le dico con la mia autorità. Piuttosto, è il Padre, che vive in me, a compiere la Sua opera. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando una persona &egrave; travestita, lui e il suo travestimento sono inseparabili. Pertanto, quando un uomo ricco assume le sembianze di un mendicante, sia l'individuo ricco che il mendicante coesistono. Il ricco assume l'aspetto di un mendicante durante il suo travestimento. Anche se il mendicante si avventura in un bazar per chiedere l'elemosina, in realt&agrave; &egrave; il ricco a compiere questo atto. Il ricco invisibile interpreta il ruolo di un mendicante. Poich&eacute; l&rsquo;uomo ricco risiede nel mendicante, e le parole del mendicante hanno origine dall&rsquo;uomo ricco, si pu&ograve; affermare che l&rsquo;uomo ricco &egrave; dentro il mendicante e, reciprocamente, il mendicante &egrave; dentro l&rsquo;uomo ricco: esistono insieme. Poich&eacute; la persona interiore ha un significato maggiore rispetto alla facciata esterna, tutte le azioni intraprese sotto mentite spoglie vengono eseguite dal s&eacute; interiore. Dato che la persona interiore &egrave; pi&ugrave; cruciale dell'apparenza esterna, &egrave; corretto affermare che tutti i compiti svolti dalla persona visibile esteriormente appartengono all'individuo interiore. Nonostante l&rsquo;aspetto esteriore del mendicante, egli incarna il ricco interiore. In un certo senso si pu&ograve; affermare che il mendicante &egrave;, infatti, la persona ricca. Lo Spirito Santo, nascosto nella forma umana, ha un significato. &Egrave; fondamentale riconoscere che il travestimento &egrave; temporaneo, mentre l'anima interiore &egrave; eterna. Si pu&ograve; affermare questo <b>quello dentro Ges&ugrave; &egrave; lo Spirito Santo</b>. Per questo Ges&ugrave; ha proclamato: &ldquo;Il Padre &egrave; in me e io sono nel Padre&rdquo;.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 130,
verse: `<b> 52) Il Vangelo di Giovanni, capitolo 14, versetto 6</b>`,
meaning: `<b>
(14:6) Gesù rispose: “Io sono la via, la verità e la vita. Non viene nessuno il Padre se non per mezzo di me. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Basandosi sull&rsquo;esempio precedente, il percorso per comprendere l&rsquo;uomo ricco passa attraverso il mendicante. Se il mendicante viene catturato, l'identit&agrave; del ricco diventa evidente. Una volta riconosciuto il ricco si pu&ograve; accedere alle ricchezze che possiede. Allo stesso modo, la via per comprendere Dio passa attraverso l&rsquo;incarnazione come essere umano. Se qualcuno comprende Colui che ha preso forma umana, comprender&agrave; anche il Dio che risiede in Lui. La conoscenza di Dio porta a ottenere la vita eterna inerente a Dio. Quindi, in un&rsquo;occasione, Ges&ugrave; dichiar&ograve;: &ldquo;<b>Io sono la via, la verit&agrave; e la vita</b>.&rdquo; Quando Ges&ugrave; disse: &ldquo;Io sono la via&rdquo;, ci&ograve; significa <b>il percorso per comprendere Dio attraverso di me</b>. Ha anche affermato: &ldquo;Io sono la verit&agrave;&rdquo;, implicando che Egli &egrave; la genuina manifestazione di Dio. Inoltre, Egli proclam&ograve;: &ldquo;<b>Sono la vita eterna</b>.&rdquo; Questa affermazione &egrave; fondata sul fatto che il vero Dio nella forma di Ges&ugrave; dichiar&ograve; che chiunque avesse familiarit&agrave; con Lui avrebbe raggiunto la paraloka (moksham) e avrebbe sperimentato la vita eterna senza affrontare la morte nella paraloka.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 131,
verse: ` <b> 53) Il Vangelo di Giovanni, capitolo 14, versetto 16.</b>`,
meaning: `<b>
(14:16) Chiederò al Padre, ed Egli ti darà un altro Avvocato per aiutarti e essere con te per sempre.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lo Spirito Santo non rimane permanentemente in forma umana tra le persone. Occasionalmente, lo Spirito Santo cambia aspetto ed entra nella vita delle persone quando necessario. Quando lo Spirito Santo assunse la forma di Ges&ugrave;, visse tra la gente solo per 33 anni. Di questi 33 anni, Egli impart&igrave; saggezza solo per tre anni. Ancor prima di compiere tre anni, si allontan&ograve; dal popolo dopo soli due anni e tre mesi. Ges&ugrave; disse: &ldquo;Pregher&ograve; mio Padre di mandare un altro Avvocato (Adaranakarta) una seconda volta, che viva pi&ugrave; a lungo di me e insegni la saggezza&rdquo;. Colui che viene &egrave; la stessa persona che dice di supplicare colui che viene. &Egrave; lo stesso che sta arrivando. &Egrave; lo stesso che ha detto che avrebbe richiesto colui che verr&agrave;. &Egrave; lo stesso che ha detto che avrebbe mandato un altro Avvocato (Consolatore). <b>Ce n'&egrave; solo uno</b>. &Egrave; lo stesso che ha detto, &egrave; lo stesso che ha chiesto, &egrave; lo stesso che viene. Se non capiamo che ce n'&egrave; uno solo che interpreta tutti i personaggi, colui che dice, chiede e viene pu&ograve; apparire diverso. Senza riconoscerlo <b>ce n'&egrave; solo uno che orchestra questi ruoli</b>, non riusciamo a comprendere il Dio che abbiamo davanti in forma umana, il Dio che implora e il Dio che arriva. &Egrave; fondamentale comprendere che colui che supplica il Padre come Ges&ugrave; &egrave; il prossimo Consolatore. Il Difensore che arriva &egrave; lo Spirito Santo.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 132,
verse: `<b> 54) Il Vangelo di Giovanni, capitolo 14, versetto 17.</b>`,
meaning: `<b>
(14:17) Il mondo non può accettarLo perché non Lo vede né Lo conosce. Ma tu Lo conosci, perché vive con te e sarà in te.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il termine “mondo (loka)” può essere inteso come comprensivo di quegli individui che subiscono le conseguenze del karma sulla terra. Quando Dio assume forma umana, coloro che sono vincolati dal karma potrebbero non percepirlo o riconoscerlo. Coloro che non riescono a riconoscerlo non sono in grado di ricevere i suoi insegnamenti o la saggezza divina. Solo coloro che hanno acquisito un po’ di saggezza attraverso Gesù saranno in grado di riconoscere il Consolatore che verrà dopo Gesù in forma umana. Il Consolatore dimora in quegli individui e coloro che Lo conoscono coesisteranno con Lui, realizzando la Sua presenza in loro come Atma.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 133,
verse: `<b>55) Il Vangelo di Giovanni, capitolo 14, versetto 20.</b>`,
meaning: ` <b>
(14:20) Quel giorno realizzerai che io sono nel Padre mio, e tu sei in me, e io sono in te.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Prima di approfondire questo versetto, si dovrebbe cogliere la vera forma di Dio. Dio &egrave; diviso in tre aspetti, che permeano il mondo intero. Sebbene esista un solo Dio, Egli &egrave; diviso in tre anime: Jeevatma, Atma e Paramatma. <b>Jeevatma risiede in una posizione specifica all'interno dei corpi di tutti gli esseri viventi, mentre Atma si estende attraverso l'intero corpo di ogni essere vivente. Paramatma &egrave; presente sia all'interno che all'esterno del corpo, esistendo all'interno di ogni molecola</b>. Un individuo che comprende questo concetto &egrave; considerato uno gnani completo. Paramatma, il Creatore, assume la forma umana per impartire saggezza alle persone. Durante questa manifestazione, Egli afferma di essere il Figlio e il Padre &egrave; Paramatma. Questa terminologia ha uno scopo di distinzione, ma si pu&ograve; affermare che sia il Figlio che il Padre sono intrinsecamente la stessa cosa. Dio appare sotto le sembianze del<b>Figlio</b>&rsquo; e risiede sulla terra per tutta la Sua vita, impartendo saggezza. Questo serve come metodo per la diffusione della saggezza. In alternativa, Dio ha inviato un Atma da Se stesso per creare, sostenere e uccidere Jeeva. Anche l'Atma, che governa i corpi degli esseri viventi, &egrave; considerato il Figlio di Dio. L'Atma risiede nel Paramatma e Jeevatma esiste nel regno dell'Atma. Di conseguenza, l&rsquo;espressione &ldquo;<b>Io sono (Atma) nel Padre mio</b>" viene utilizzato invece di affermare: "<b>Io sono (Atma) in mio Padre, il Paramatma&rdquo;. </b>Poich&eacute; Jeeva &egrave; presente nel corpo governato da Atma, il verso sottolinea: "Tu (Jeevatmas) sei in me (Atma)." L'Atma, diffuso in tutto il corpo, &egrave; disperso anche dentro di te (Jeevatma), che ti trovi in un luogo specifico. Pertanto, il versetto afferma: &ldquo;<b>Il giorno in cui conoscerai la saggezza delle anime, saprai che Io sono in te</b>.&rdquo; Coloro che non hanno familiarit&agrave; con il concetto delle tre anime non riescono a discernere chi risiede in chi. Perci&ograve;, <b>&egrave; fondamentale comprendere il teorema Thraitha, che chiarisce come Dio sia sotto forma di tre anime</b>.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 134,
verse: ` <b>56) Vangelo di Giovanni, capitolo 14, versetti 25 e 26.</b>`,
meaning: `<b>
(14:25) Tutto questo vi ho detto mentre ero ancora con voi.
<br><br>
(14:26) Ma il Consolatore, lo Spirito Santo, che il Padre manderà nel mio nome, vi insegnerà ogni cosa e vi ricorderà tutto ciò che vi ho detto. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  In un&rsquo;occasione, Ges&ugrave; si rivolse ai Suoi discepoli, dicendo: &ldquo;Mentre sono ancora con voi, dico queste parole&rdquo;. Inoltre, Egli ha comunicato: &ldquo;Un altro Avvocato (Adaranakarta) verr&agrave; da te dopo la mia morte&rdquo;. Inoltre, ha spiegato: &ldquo;<b>L'Avvocato, che viene come me, ti ricorderebbe tutto ci&ograve; che ho detto e ti insegnerebbe tutto ci&ograve; che non ho detto</b>.&rdquo; Un aspetto importante da considerare qui &egrave; l&rsquo;uso da parte di Ges&ugrave; del nome &ldquo;Avvocato&rdquo;. Chiarendo il significato di Avvocato, Egli afferm&ograve;: &ldquo;<b>Avvocato &egrave; lo Spirito Santo che il Padre mander&agrave; nel mio nome</b>.&rdquo; Un attento esame del versetto rivela che inizia con &ldquo;il Padre&rdquo; e si conclude con &ldquo;lo Spirito Santo&rdquo;. Questa sequenza suggerisce che il padre di Ges&ugrave; &egrave; lo Spirito Santo. Si pu&ograve; postulare che il Figlio sia quello travestito, mentre il Padre sia quello non travestito. In realt&agrave;, entrambi sono la stessa cosa<b>. Colui che impartisce saggezza e rimuove il karma viene chiamato Avvocato (Consolatore)</b>. Quando Ges&ugrave; afferm&ograve; che Dio &egrave; Colui che manda Dio nel nome del Consolatore, espresse cos&igrave;: &ldquo;Il Padre &egrave; lo Spirito Santo che mander&agrave; nel mio nome&rdquo;. Questo lo chiarisce <b>Dio assume una forma, adotta le sembianze del Difensore e impartisce la saggezza divina</b>. &Egrave; interessante notare che Ges&ugrave; trasmise queste parole per garantire che anche coloro che non erano a conoscenza di questa questione potessero comprenderle.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 135,
verse: ` <b> 57) Vangelo di Giovanni, capitolo 15, versetto 23 . </b>`,
meaning: `<b>
(15:23) Chi odia me, odia anche il Padre mio.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ho affermato fin dall&rsquo;inizio che Dio &egrave; nascosto nella forma di Ges&ugrave;, e il nome attribuito al travestimento di Dio &egrave; Ges&ugrave;. In effetti, nessun altro se non lo Spirito Santo &egrave; venuto nel nome di Ges&ugrave;. Di conseguenza, chiunque bestemmia Ges&ugrave; bestemmia anche Paramatma. Il Consolatore (Avvocato) non &egrave; colui che verr&agrave; dopo Ges&ugrave;. Ges&ugrave; era anche un Avvocato. Ogni volta che Dio assume forma umana, dovrebbe essere costantemente chiamato il Difensore. <b>Il Difensore impartisce saggezza che serve come rimedio al karma, </b>e solo Dio fornisce insegnamenti che sradicano il karma. Si pu&ograve; quindi affermare che l'Avvocato &egrave; sinonimo di Spirito Santo.&nbsp;

  Tuttavia, riconoscere Dio quando assume forma umana sulla Terra si rivela una sfida. Questa sfida &egrave; sottolineata da individui cristiani che affermano di essere gnani e si riferiscono a Ges&ugrave; come a un fratello. Si sottolinea che Ges&ugrave; non &egrave; fratello di nessuno. Indipendentemente dal fatto che appaia come Ges&ugrave; o sotto un altro nome, &egrave; identificato come lo Spirito Santo, rendendolo un Padre, non un fratello.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 136,
verse: `<b>58) Il Vangelo di Giovanni, capitolo 15, versetti 24 e 25. </b>`,
meaning: ` <b>
(15:24) Se non avessi fatto tra loro le opere che nessun altro ha fatto, non sarebbero colpevoli di peccato. Così è, hanno visto, eppure hanno odiato me e il Padre mio.
<br><br>
(25) Ma questo è perché si compia ciò che sta scritto nella loro Legge: «Mi hanno odiato senza motivo».</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Il compito che nessuno pu&ograve; svolgere sulla terra &egrave; perdonare e rimuovere i peccati di una persona. Ges&ugrave; afferm&ograve; che non sarebbero stati commessi peccati se Egli non avesse intrapreso l&rsquo;opera di perdonare il karma degli altri. Quando perdon&ograve; pubblicamente i peccati di alcuni individui, coloro che erano invidiosi e ignoranti della Sua grandezza nutrivano odio nei Suoi confronti. Odiare Ges&ugrave; equivale a odiare lo Spirito Santo. Coloro che nutrivano odio verso di Lui <b>senza un valido motivo </b>incorso nel peccato.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 137,
verse: ` <b> 59) Il Vangelo di Giovanni, 15° capitolo, 26 e 27 versetti. </b>`,
meaning: `<b>
(15:26) Quando verrà il Consolatore che vi manderò da parte del Padre, lo Spirito di verità che esce dal Padre, egli testimonierà di me.
<br><br>
(15:27) E anche tu devi testimoniare, poiché sei stato con me fin dal principio.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ges&ugrave; venne come Avvocato (Bhagavan) e disse che avrebbe mandato alla gente un altro Avvocato dal Padre. In conformit&agrave; con la legge spirituale, ha trasmesso ci&ograve; che avrebbe dovuto dire. Tuttavia non c'&egrave; nessun altro Avvocato presso il Padre; <b>c'&egrave; un solo Dio </b>che occasionalmente appare nelle vesti di un avvocato. Nessun altro lo manda. Quando Ges&ugrave; e lo Spirito Santo sono considerati la stessa cosa, sia il mittente che colui che viene sono identici. Ges&ugrave; afferm&ograve;: &ldquo;<b>Lo Spirito della verit&agrave; viene come Avvocato e testimonier&agrave; di me</b>.&rdquo; Quando colui che viene e colui che va sono la stessa cosa, non sorprende che colui che viene parli di colui che va. Mentre il prossimo Avvocato parler&agrave; di Ges&ugrave;, i Suoi discepoli Lo ricorderanno senza dubbio. Di conseguenza, i discepoli affermeranno che Ges&ugrave; &egrave; venuto e ha trasmesso la sapienza.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 138,
verse: ` <b> 60) Il Vangelo di Giovanni, capitolo 16, versetto 7. </b>`,
meaning: `<b>
(16:7) Ma in verità ti dico che è per il tuo bene che me ne vado. Se non me ne vado, il Consolatore non verrà a te; ma se vado, ve lo manderò..</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nell'analogia di una singola persona che interpreta due personaggi in un'opera teatrale, il secondo personaggio appare sul palco dopo che il primo &egrave; uscito. Poich&eacute; &egrave; la stessa persona a interpretare entrambi i ruoli, il primo personaggio deve andare dietro le quinte affinch&eacute; la persona del primo personaggio possa assumere il secondo ruolo.

  Non &egrave; possibile che il secondo personaggio emerga a meno che il primo non vada nel backstage. Questa transizione avviene perch&eacute; la stessa persona interpreta entrambi i personaggi. Allo stesso modo, ci si aspetta che colui che &egrave; venuto nel ruolo di Ges&ugrave; ritorni sulla terra in un secondo personaggio. Pertanto, quando Ges&ugrave; si allontaner&agrave; dalla gente, colui che ha interpretato il ruolo di Ges&ugrave; ritorner&agrave; in un secondo ruolo. Lo Spirito Santo ha assunto il ruolo di Ges&ugrave;. Se dovesse venire di nuovo per stare con la gente, lo farebbe deve rinunciare al Suo ruolo di Ges&ugrave; e riapparire in un nuovo ruolo, con un nuovo nome e un nuovo aspetto. Pertanto, Ges&ugrave; afferm&ograve;: &ldquo;<b>&Egrave; per il tuo bene che me ne vado. Se non me ne vado, l'Avvocato non verr&agrave; da te</b>.&rdquo; Pur non menzionando esplicitamente che sarebbe tornato come Avvocato, ha comunicato: &ldquo;Te lo mander&ograve; quando me ne andr&ograve;&rdquo;. Da queste parole chiunque abbia intelligenza discerner&agrave; facilmente che chi parte e chi ritorna sono la stessa cosa.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 139,
verse: `<b> 61) Il Vangelo di Giovanni, capitolo 16, versetto 8. </b>`,
meaning: ` <b>
(16:8) Quando verrà, dimostrerà che il mondo ha torto riguardo al peccato, alla giustizia e al giudizio.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dopo che il ruolo di Ges&ugrave; scompare dietro le quinte, l&rsquo;Avvocato (Bhagavan) arriver&agrave; nel secondo ruolo e nella seconda incarnazione. Il termine &ldquo;Avvocato&rdquo; rappresenta l&rsquo;incarnazione di Dio, ma non &egrave; il nome di Dio. Colui che viene come Avvocato potrebbe avere qualsiasi nome al mondo. Pertanto, nessuno pu&ograve; determinare se questa persona &egrave; l&rsquo;incarnazione di Dio. Anche se nessuno conosce la forma o il nome del Difensore, c&rsquo;&egrave; qualche possibilit&agrave; di riconoscerlo attraverso le Sue azioni. Quando il <b>Avvocato </b>viene sulla terra, discute del peccato, rivelando come una persona acquisisce il peccato, dove viene immagazzinato fino al momento della morte e le conseguenze del peccato. <b>Spiega che la saggezza divina &egrave; necessaria per liberarsi dai peccati acquisiti</b>, poich&eacute; i peccati sono come legna da ardere e la saggezza &egrave; come il fuoco. Solo attraverso la saggezza si pu&ograve; sfuggire all&rsquo;esperienza del peccato e acquisire la saggezza divina. Il peccato di una persona che non raggiunge la saggezza divina nella vita persiste fino alla morte. Una persona del genere deve rinascere lo stesso giorno, minuto e istante dopo la morte. Il giorno della morte &egrave; conosciuto come l'ultimo giorno. L'ultimo giorno di vita diventa il primo giorno della prossima vita. La persona deve rinascere entro un secondo dalla sua morte. Si pu&ograve; dire che la differenza temporale tra la morte e la rinascita &egrave; solo di un decimo di secondo. In quel breve tempo, <b>Atma </b>giudica i defunti in base al loro peccato e punya. L'Atma poi decide cosa la persona deve mangiare, bere e sperimentare in ogni momento della seconda nascita. La vita del nato &egrave; determinata dal giudizio espresso nella morte. Il modo in cui una persona vivr&agrave; la sua prossima vita viene deciso in base al giudizio del suo ultimo giorno. L'Atma, che &egrave; con la persona deceduta, la giudica correttamente in base alle sue azioni fin dall'infanzia. Le azioni da intraprendere nella prossima vita vengono decise in base al karma esistente. Nessuno pu&ograve; annullare questa decisione e tutti devono accettare il giudizio.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 140,
verse: `<b>62) Il Vangelo di Giovanni, capitolo 16, versetto 12. </b>`,
meaning: `<b>
(16:12) Ho molto di più da dirti, più di quanto tu possa sopportare ora. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando Dio si incarna come essere umano, &egrave; fondamentale impartire con attenzione la saggezza, considerando gli stati d&rsquo;animo delle persone, e gli insegnamenti dovrebbero essere adattati in base al tempo e al contesto. La saggezza divina deve essere trasmessa con sensibilit&agrave; per garantire la disponibilit&agrave; del pubblico a ricevere la verit&agrave;. In confronto, se informi una donna fidanzata con te che &egrave; gi&agrave; tua moglie, potrebbe non accettarlo prima del matrimonio, causando potenziali conflitti. Tuttavia, condividere le stesse informazioni dopo il matrimonio porterebbe felicit&agrave; senza contesa. Allo stesso modo, quando si presenta la saggezza divina a coloro che potrebbero non tollerare la verit&agrave;, c&rsquo;&egrave; il rischio di incomprensioni e opposizione. Pertanto, anche quando Dio assume forma umana, la verit&agrave; deve essere condivisa con giudizio. Ad esempio, se si dovesse affermare che Ravana Brahma &egrave; un&rsquo;incarnazione di Dio, il pubblico contemporaneo potrebbe afferrare il concetto in una certa misura. Tuttavia, se la stessa affermazione fosse stata fatta 50 anni fa, ci sarebbe stato disaccordo e le persone avrebbero visto Ravana come malvagio e mostruoso. Quindi, ci sono casi in cui la saggezza che dovrebbe essere condivisa prima deve essere rinviata. In questo contesto, Ges&ugrave; riconobbe questo principio quando afferm&ograve;: &ldquo;<b>Ho molto di pi&ugrave; da dirti, pi&ugrave; di quanto tu possa sopportare ora</b>&rdquo;, ai suoi discepoli. Riconoscendo che era giunto il momento per Lui di allontanarsi dall'umanit&agrave;, Egli inform&ograve; i Suoi discepoli che il prossimo Avvocato avrebbe riferito ci&ograve; che Egli non aveva detto.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 141,
verse: `<b>63) Il Vangelo di Giovanni, capitolo 16, versetto 13. </b>`,
meaning: `<b>
(13) (16:13) Ma quando verrà Lui, lo Spirito della verità, Egli vi guiderà in tutta la verità. Non parlerà da solo; Dirà solo ciò che sente e ti dirà ciò che deve ancora venire. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Gesù profetizzò riguardo al prossimo Avvocato. Il termine <b>“Spirito di verità”</b> significa “Dio della saggezza.’ Gesù comunicò che il Dio che sarebbe venuto dopo di Lui avrebbe condotto tutti alla verità e avrebbe comunicato solo la verità. Nonostante Dio abbia assunto forma umana, comportandosi in modo umano, Gesù menzionò: “Come essere umano, non insegna nulla da solo; Dice solo quello che sente”. Se ci si chiede chi abbia informato l'avvocato, la fonte è una sola. Poiché ce n'è solo uno che sta arrivando, è lo stesso che trasmette la saggezza. Di conseguenza, è evidente che anche la persona visibile può esprimere ciò che Dio ha detto. Solo Dio può comunicare la Sua saggezza. Invece di affermare che gli esseri umani sono incapaci di trasmettere la saggezza di Dio, si afferma che il Difensore dirà solo ciò che ha sentito.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 142,
verse: ` <b 64) Il Vangelo di Giovanni, capitolo 16, versetti 14 e 15.</b>`,
meaning: ` <b>
(16:14) Mi glorificherà perché è da me che riceverà ciò che vi farà conoscere.
<br><br>
(16:15) Tutto ciò che appartiene al Padre è mio. Per questo ho detto che lo Spirito riceverà da me che vi farà conoscere.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Se guardi questo versetto, alcune parti hanno senso mentre altre no. Questo verso &egrave; come giocare a nascondino con le persone. In precedenza, Ges&ugrave; aveva menzionato che il nuovo Spirito di verit&agrave; avrebbe insegnato ci&ograve; che aveva udito. Successivamente, nel versetto successivo, Egli afferm&ograve; che il Difensore avrebbe preso ci&ograve; che aveva ricevuto da Ges&ugrave; e lo avrebbe trasmesso alla gente. Inoltre, Ges&ugrave; afferm&ograve; che l'avvocato avrebbe espresso cose che Ges&ugrave; non aveva detto. Tuttavia, nella dichiarazione attuale, Ges&ugrave; menziona che il Difensore avrebbe informato le persone su ci&ograve; che aveva ricevuto da Ges&ugrave;. L&rsquo;apparente incoerenza nelle affermazioni di Ges&ugrave; pu&ograve; creare confusione. Tuttavia, c&rsquo;&egrave; una ragione precisa per questa ambiguit&agrave;. Ges&ugrave; ha scelto di esprimersi in questo modo <b>quelli veramente interessati alla Sua saggezza comprenderebbero, mentre coloro che sono privi di interesse no</b>. Afferm&ograve; inoltre che il prossimo Avvocato avrebbe condiviso ci&ograve; che Ges&ugrave; aveva detto per glorificarlo. Ges&ugrave; poi afferm&ograve; che tutto ci&ograve; che appartiene al Padre &egrave; Suo, riferendosi al Padre allo Spirito Santo o Dio. Sottolineando che la saggezza di Dio &egrave; Sua e che il Difensore avrebbe trasmesso ci&ograve; che aveva ricevuto da Ges&ugrave;, diventa evidente che Ges&ugrave; e lo Spirito Santo sono sinonimi. Invece di affermare esplicitamente: "<b>Io sono Dio</b>", Ges&ugrave; lo espresse cos&igrave;: "<b>Tutte le parole di Dio sono mie</b>.&rdquo;</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 143,
verse: ` <b>65) Il Vangelo di Giovanni, capitolo 16, versetto 16 </b>`,
meaning: `<b>
(16:16) Gesù proseguì dicendo: “Tra un po’ non mi vedrete più, e poi, dopo un po’, mi vedrete”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Gesù comunicò ai suoi discepoli che dopo un po' non lo avrebbero più rivisto, indicando la sua partenza dalla gente e la cessazione della sua apparizione a loro. Menzionò anche che lo avrebbero rivisto dopo un po' di tempo, lasciando intendere che avrebbe lasciato la sua forma fisica, per non riapparire nella stessa manifestazione corporea. Questa affermazione lasciò perplessi i discepoli, portandoli a chiedersi perché Gesù avesse parlato di rivederlo dopo poco tempo. Quando Gesù dichiarò: “Tra un po’ non mi vedrete più, e poi, dopo un po’, mi vedrete”, alcuni potrebbero essersi chiesti se si sarebbe nascosto temporaneamente per poi riapparire. Tuttavia, in un caso precedente, Gesù aveva spiegato: “Andrò. L'Avvocato non verrà da te a meno che non vada io. andrò e lo manderò”. Quindi, Gesù stava suggerendo che avrebbe mantenuto la Sua promessa di andarsene, e dopo un po’ di tempo Lo avrebbero rivisto attraverso il prossimo Avvocato, che era anche lui Gesù. In questo contesto, il versetto diventa coerente quando ci si rende conto che colui (Gesù) che parte e colui (Avvocato) che ritorna sono identici. Gesù ha sottolineato che vedere l'uno o l'altro di loro equivale a vederne solo uno, poiché Gesù e l'Avvocato sono la stessa cosa.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 144,
verse: ` <b>66) Il Vangelo di Giovanni, capitolo 16, versetti 17, 18, 19, 20, 21 e 22. </b>`,
meaning: `<b>
(16:17) A questo punto alcuni dei suoi discepoli dissero tra loro: "Che cosa vuol dire dicendo: 'Tra poco non mi vedrete più, e poi dopo un po' non mi vedrete?' “Perché vado dal Padre”?”
<br><br>
(16:18) Continuavano a chiedere: “Che cosa intende con ‘un po’ di tempo’? Noi no capire cosa sta dicendo”.
<br><br>
(16:19) Gesù vide che volevano interrogarlo su questo, così disse loro: “Vi state chiedendo l'un l'altro cosa intendevo quando ho detto: 'Tra poco non mi vedrete più, e poi tra poco mi vedrai'?
<br><br>
(16:20) In verità ti dico che piangerai e ti lamenterai mentre il mondo si rallegrerà. Ti addolorerai, ma il tuo dolore si trasformerà in gioia.
<br><br>
(16:21) Una donna che dà alla luce un bambino prova dolore perché è giunta la sua ora; ma quando nasce il suo bambino, dimentica l'angoscia per la gioia che sia venuto al mondo un bambino.
<br><br>
(16:22) Quindi, con te: Ora è il tuo momento di dolore, ma ti rivedrò e gioirai, e nessuno ti toglierà la gioia. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Quando Gesù pronunciò le parole: “Tra poco non mi vedrete più, e dopo poco mi vedrete”, le persone trovarono difficile da comprendere. In risposta, Gesù illustrò il concetto usando la parabola di una donna che partorisce. Egli spiegò che, proprio come la donna prova dolore durante il parto, i discepoli avrebbero subito una certa angoscia a causa della Sua partenza. Tuttavia, li rassicurò che avrebbero sperimentato gioia e contentezza simili a quelle della donna che dimentica il dolore una volta nato il bambino. Gesù si è rivolto ai presenti, riconoscendo che ci sarebbe stato un periodo di dolore causato dalla Sua partenza, ma ha sottolineato che questo dolore sarebbe stato eclissato dalla gioia al Suo ritorno.
</div></div>
</span>`
},
{
chapterName: "Il Vangelo di Giovanni",
chapterNumber: 5,
pageNumber: 145,
verse: ` <b>(67) Il Vangelo di Giovanni, capitolo 16, versetto 25. </b>`,
meaning: `<b>
(16:25) Anche se ho parlato in senso figurato, verrà il tempo in cui non userò più questo tipo di linguaggio ma vi parlerò chiaramente di mio Padre.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Le parole di Ges&ugrave;, come accennato in precedenza, erano riconosciute come oscure, causando difficolt&agrave; di comprensione e confusione. Ges&ugrave; stesso ha ammesso di parlare in senso figurato per impedire una comprensione immediata. Ha anche affermato: &ldquo;Non lo dir&ograve; in senso figurato in futuro. Ti dir&ograve; tutto chiaramente&rdquo;. Tuttavia anche questa affermazione appare alquanto ambigua. Ges&ugrave; dichiar&ograve; che presto se ne sarebbe andato e che l'Avvocato con lo Spirito Santo sarebbe venuto a chiarire ogni cosa. Chiarisce che il Difensore sarebbe venuto solo se se ne fosse andato e che i discepoli sarebbero stati rattristati dalla sua partenza ma si sarebbero rallegrati nel rivederlo. Ora, aggiunge: &ldquo;<b>Finora l'ho detto oscuramente. Quando torner&ograve; ti dir&ograve; tutto chiaramente</b>.&rdquo; Questa affermazione introduce un certo grado di incertezza riguardo al fatto se colui che verr&agrave; sar&agrave; un diverso Avvocato o se Ges&ugrave; stesso torner&agrave;.
</div></div>
</span>`
},
{
chapterName: "La Scrittura dell'Apocalisse di Giovanni",
chapterNumber: 6,
pageNumber: 146,
verse: ` <b>(14)	L'Apocalisse di Giovanni, capitolo 9, versetti 4, 5 e 6.</b>`,
meaning: `<b>
(9:4) Fu detto loro di non danneggiare l'erba della terra né alcuna pianta o albero, ma solo quelle persone che non avevano il sigillo di Dio sulla fronte.
<p>
<div class="container">
          <img src="assets/img/Devunimudra_inside.png"   style="width:100%;">
          <div class="top-left">
           <u> IL SIGILLO DI DIO</u>
          </div>
          <div class="top-right1">
          Natura
           </div>
           <div class="top-right2">
           Spirito Santo
          </div>
          <div class="dm-top-right3">
          Padre
          </div>
          <div class="dm-top-right4">
          Figlio
          </div>
          <div class="dm-bottom-left2">
          Corpo
           </div>
          <div class="bottom-left">
            <u>Per tutte le religioni</u>
           </div>
        </div>
</p>
(9:5) Non era loro permesso ucciderli ma solo torturarli per cinque mesi. E l'agonia che soffrirono fu come quella della puntura dello scorpione quando colpisce.
<br><br>
(9:6) Durante quei giorni le persone cercheranno la morte ma non la troveranno; desidereranno morire, ma la morte sfuggirà loro. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">

  Il terzo versetto che precede questi versetti, Apocalisse 9:3, afferma: &ldquo;<b>Dal fumo scesero le locuste sulla terra e ricevettero un potere pari a quello degli scorpioni della terra</b>.&rdquo; Questo versetto indica che le locuste emersero dal fumo. Tuttavia il fumo a cui si fa riferimento non &egrave; prodotto dalla combustione di legna o altri materiali. Si tratta invece di una nube densa che appare all'alba di una giornata invernale quando il sole non &egrave; ancora sorto. Questa nuvola riduce la luce solare e crea oscurit&agrave;. Gli sciami di locuste provengono da questa nube oscura. Poich&eacute; arrivano sulla terra in grandi gruppi come un esercito, sono conosciuti come &ldquo;sciami di locuste&rdquo;. Nessuno sa esattamente da dove provengano le locuste, ma si ritiene che provengano dalla nebbia nuvolosa del cielo. La loro nascita e crescita restano un mistero, ed emergono dal fumo del vuoto senza alcuna origine chiara. Gli sciami di locuste possono essere centinaia, migliaia o addirittura milioni.

  Le locuste portano numerose malattie che affliggono le persone. Sebbene possano apparire come normali locuste, costituiscono un esercito di angeli, che servono come servitori di Dio, inviati per Suo comando. Dio ha ordinato alle locuste di affliggere gli esseri umani e, attraverso il Suo comando, questo esercito di locuste colpisce l&rsquo;umanit&agrave;.

  Emergendo da un regno invisibile, si nascondono e infliggono morsi alle persone, entrando nei loro corpi sotto forma di malattie e causando tormenti. Dio li ha dotati di tanto veleno quanto gli scorpioni sulla terra. Gli esseri umani soffrono notevolmente a causa dell&rsquo;arrivo delle locuste dal mondo invisibile, che fungono da agenti di sofferenza per i peccati umani. &Egrave; stato loro detto di non danneggiare l'erba della terra, nessuna pianta o albero tranne gli esseri umani. Sebbene l&rsquo;ipotesi comune sia che le locuste danneggino l&rsquo;erba, le piante e gli alberi, il versetto chiarisce che queste locuste non danneggiano la vegetazione ma prendono di mira gli esseri umani. L'origine delle locuste, il loro sostentamento e la loro missione rimangono sconosciuti agli esseri umani.

  &Egrave; evidente dai quattro versetti qui menzionati che l&rsquo;esercito degli angeli sotto forma di locuste viene ad affliggere gli esseri umani. L&rsquo;esercito dei servitori di Dio, assumendo la forma di locuste, possiede il potere di tormentare gli esseri umani fino a cinque mesi, ma non ha l&rsquo;autorit&agrave; di causare la morte. Quando le locuste mordono invisibilmente gli esseri umani, provocano una malattia che provoca un dolore simile alla puntura di uno scorpione. L'intensit&agrave; della sofferenza varia in base al karma individuale, spaziando da un lieve disagio al livello di una puntura di scorpione. Poich&eacute; nessuno pu&ograve; sfuggire a questo dolore, gli esseri umani devono sopportarlo. Il versetto indica che durante una grave sofferenza, le persone possono desiderare la morte come via di fuga, ma non gli &egrave; permesso porre fine alla propria vita. Quindi, gli esseri umani devono sopportare il dolore. Il versetto comunica inoltre che perfino la morte sfugge loro, a significare che gli esseri umani non possono sfuggire alla sofferenza causata dalle locuste.

  Se le locuste, originate da invisibili nubi fumose, arrivassero cento volte, potrebbero diventare visibili solo una volta. Rimanendo invisibili, possono avere vari effetti sugli esseri umani, causando danni sotto forma di malattie o con altri mezzi. Il versetto indica che il loro danno &egrave; diretto esclusivamente agli esseri umani e pu&ograve; manifestarsi in qualsiasi forma. Si afferma che gli esseri umani sopporteranno questo danno perch&eacute; alle locuste viene comandato di infliggerlo. Anche se gli esseri umani cercano la morte a causa di sofferenze insopportabili, questa rimane sfuggente poich&eacute; la morte fugge da loro. Sebbene gli esseri umani soffrano in vari modi a causa delle &ldquo;locuste invisibili (servitori)&rdquo; che Dio ha mandato, non contemplano le cause della loro sofferenza. Non sono in grado di sfuggire alla sofferenza attraverso le parole di Dio.

  Molte nuove malattie stanno emergendo in tutto il mondo, ma gli esseri umani spesso non contemplano le loro origini. Identificare una nuova malattia richiede tempo e trovare una cura pu&ograve; richiedere ancora pi&ugrave; tempo. Proprio quando viene scoperta una cura per un disturbo, ne pu&ograve; emergere un altro sfuggente. Accanto alle malattie ci sono disturbi e sofferenze non diagnosticabili. Anche se alcune persone riconoscono che le forze invisibili contribuiscono alla sofferenza, nessuno sa come affrontarle in modo efficace. <b>L&rsquo;unico modo per evitare la sofferenza causata dagli angeli invisibili &egrave; indossare il Sigillo di Dio, simbolo della potenza di Dio. Dio comand&ograve; ai Suoi servitori di perseguitare solo coloro che non indossano il Sigillo di Dio</b>. Sebbene alcuni credano che le locuste visibili possano danneggiare piante e alberi, <b>Dio ha diretto le Sue locuste invisibili affinch&eacute; infliggessero danno esclusivamente a coloro che non avevano il Sigillo di Dio sulla fronte</b>. Nella Scrittura divina finale, i versetti 5:22 e 22:32 menzionano il Sigillo di Dio. L'Akshara Parabrahma Yoga della prima scrittura divina, Bhagavad-Gita, allude al Sigillo di Dio. Nella mia scrittura, &ldquo;<b>Il Sigillo di Dio</b>&rdquo;, descriviamo in dettaglio l&rsquo;aspetto del Sigillo di Dio. Invece di mettere in discussione gli altri, abbi fede in Dio e indossa il Sigillo di Dio, poich&eacute; non &egrave; legato ad alcuna religione particolare. Il Sigillo di Dio &egrave; menzionato in tre scritture divine. L'Apocalisse della Bibbia spiega i disastri causati dal non indossare il Sigillo di Dio. I cristiani non dovrebbero esitare a indossare il sigillo di Dio; &egrave; una questione di fede. <b>Indipendentemente dalla tua religione, proteggiti dalla sofferenza. Ascoltami e indossa &ldquo;Il Sigillo di Dio&rdquo;, che prima era sconosciuto. Proteggiti dalla sofferenza.</b>

</div></div>
</span>`
},
{
chapterName: "Tre dita",
chapterNumber: 7,
pageNumber: 147,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
  Il ritratto di Ges&ugrave; appare raramente alla gente. Ad un esame pi&ugrave; attento, <b>Si pu&ograve; vedere Ges&ugrave; che mostra tre dita con la mano destra</b>. Ges&ugrave; impart&igrave; la saggezza divina per circa tre anni e, anche dopo la Sua morte, il Suo ritratto sembra trasmettere insegnamenti alla gente. Sebbene le interpretazioni possano variare, la mia comprensione vedendo l&rsquo;immagine &egrave; che contiene un messaggio cruciale degli insegnamenti di Ges&ugrave;. Nella prima Scrittura divina, Dio &egrave; raffigurato in tre parti: <b>Kshara, Akshara e Purushottama</b>. Allo stesso modo, nell'ultima scrittura divina, Dio &egrave; descritto come avente tre aspetti: <b>Passeggero, conducente e testimone</b>. Nella seconda Scrittura divina, si dice che Dio &egrave; diviso in tre parti: <b>Figlio, Padre e Spirito Santo</b>. I tre aspetti di Dio sono esposti nella Bhagavad-Gita, nella Bibbia e nel Corano come la stessa saggezza. La saggezza fondamentale contenuta in queste tre scritture sta nella comprensione dei tre aspetti di Dio. Una volta compresi i tre aspetti di Dio, diventa possibile la comprensione completa della saggezza di Dio.

  Tuttavia, gli ind&ugrave; che leggono la Bhagavad-Gita non sanno chi <b>Jeevatma (Kshara) </b>E <b>Atma (Akshara) </b>Sono. Allo stesso modo, i cristiani non sanno chi sono il Figlio e il Padre. I musulmani non sanno chi <b>il Passeggero e il Conducente lo sono</b>. Nella Bhagavad-Gita che ho scritto, ho menzionato che gli ind&ugrave; non sono consapevoli del deperibile Jeeva e del Dio eterno presente nel corpo. Nella Bibbia ho anche notato che i cristiani non comprendono i dettagli dei due figli - <b>il Figlio e il Padre</b>. Allo stesso modo, nella Scrittura &ldquo;<b>I Versetti del Diamante nella Scrittura Divina Finale</b>&rdquo;, Ho detto che i musulmani non conoscono il <b>due Allah</b>. Le persone di queste tre religioni potrebbero non avere idea delle altre due parti di Dio, che sono l&rsquo;essenza principale delle rispettive scritture. L&rsquo;unico termine che tutti riconoscono &egrave; &ldquo;Dio&rdquo;. Inconsapevolmente, tutti adorano la terza parte, conosciuta come Purushottama nella Bhagavad-Gita, lo Spirito Santo nella Bibbia e il Testimone nel Corano. Dio stesso ha affermato che non &egrave; giusto adorare la terza parte di Dio (lo Spirito Santo), che &egrave; al di l&agrave; di ogni adorazione e di ogni dharma. Eppure tutti adorano&rdquo;<b>il Dio che non ha bisogno di nulla</b>.&rdquo; Si pu&ograve; dire che l'ignoranza umana sta nel non sapere che Dio non ha bisogno della nostra adorazione.

  Per quanto riguarda i cristiani, essi non sono consapevoli del &ldquo;<b>due figli</b>&rdquo; menzionati nelle loro scritture. Sebbene la Bibbia menzioni due Figli, i cristiani credono che esista un solo Figlio e non hanno familiarit&agrave; con la saggezza di due Figli. Potrebbero non sapere che ci sono due Figli &ndash; <b>il Figlio permanente e il Figlio temporaneo</b>. La Bibbia si riferisce a loro come <b>il Figlio e il Figlio unigenito</b>, ma i cristiani non sanno chi sono questi due Figli. Allo stesso modo, nessuno in nessuna religione pu&ograve; sapere che esistono due Dei: <b>il Dio, che &egrave; il Padre, e il Dio, che &egrave; il Nonno</b>. Anche se questa verit&agrave; &egrave; presentata scientificamente nelle Scritture, alcune persone potrebbero non crederci, mentre altre negano del tutto l&rsquo;esistenza di due Dei. Sebbene le Scritture affermino che esiste un solo Dio da adorare, non &egrave; chiaro se questo Dio sia il Padre o il Nonno.

  Coloro che possiedono la saggezza divina e coloro che leggono le Scritture adorano un solo Dio in base alla loro comprensione. Possono adorare il <b>Nonno-Dio</b>, che non dovrebbe essere adorato, invece del <b>Padre-Dio</b>, che dovrebbe essere adorato. I termini Padre-Dio e Nonno-Dio possono sembrare nuovi, ma in realt&agrave; la questione &egrave; presente nelle loro scritture. Le persone spesso non riescono a comprendere la vera saggezza. Quando qualcuno condivide con loro la verit&agrave;, potrebbero reagire con rabbia e rifiutarla. Nella mia Bibbia leggo che ci sono due Figli - il Figlio dell'Uomo e il Figlio di Dio - e che lo Spirito Santo, che &egrave; nella posizione del Nonno, non dovrebbe essere adorato. Coloro che considerano lo Spirito Santo Dio e Lo adorano come tale potrebbero ora trovarsi in uno stato di confusione. Ges&ugrave; insegn&ograve; in modo significativo riguardo ai due Figli e allo Spirito Santo. Ha anche ritratto&rdquo;<b>I due Figli e il loro Padre, lo Spirito Santo</b>", usando le dita. Ges&ugrave; ha usato la mano destra per mostrare le due dita - l'indice e il medio - e anche il pollice. Ho capito che il pollice nel ritratto &egrave; un'indicazione dello Spirito Santo. Poich&eacute; Dio &egrave; Colui che concede il potere percettivo all'intelletto (buddhi), secondo vera saggezza, Ges&ugrave; mostr&ograve; sia il Padre (Atma) che il Figlio (Bhagavan) con due dita (indice e medio). Resta inteso che rappresentano il Figlio permanente e il Figlio temporaneo. La Scrittura lo riassume <b>lo Spirito Santo non sar&agrave; conosciuto finch&eacute; non saranno conosciuti quei due Figli</b>. Tutti dovrebbero sapere che il segreto spirituale che dovrebbe essere noto all&rsquo;intera societ&agrave; umana &egrave; <b>la questione dei due Figli</b>. Se guardi le tre dita di Ges&ugrave; nell&rsquo;immagine della pagina successiva, ci ricordano lo Spirito Santo e i due Figli: Atma e il Figlio unigenito.

</div></div>
<ion-row><ion-col class="ion-text-center">
<img src="assets/img/jesus.png"/>
</ion-col></ion-row>
</span>`
},
{
chapterName: "Venerdì Santo o Venerdì Brutto?",
chapterNumber: 8,
pageNumber: 148,
verse: ``,
meaning: ``,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">

  Alcuni eventi nella vita portano felicit&agrave;, mentre altri portano dolore a una persona. Durante i momenti di gioia, un individuo &egrave; allegro e apprezza il buon cibo e il buon vestiario. Al contrario, di fronte al dolore, si perde l&rsquo;appetito e l&rsquo;interesse per vari aspetti della vita. La festa del Diwali in India, ad esempio, viene celebrata con petardi per commemorare la sconfitta del malvagio demone Narakasura in quel giorno. Nei tempi antichi, gli scribi, i farisei e gli studiosi che portarono Ges&ugrave; davanti alla corte e orchestrarono la Sua esecuzione si rallegrarono della Sua morte. Ogni anno celebravano l&rsquo;anniversario della morte di Ges&ugrave; come Venerd&igrave; Santo, considerandolo un giorno di felicit&agrave;. Da allora, la festa &egrave; conosciuta come il &ldquo;Venerd&igrave; Santo&rdquo;.

  Nei primi tempi, persone che non erano a conoscenza della grandezza di Ges&ugrave;, insieme agli scribi e agli studiosi, celebravano la festa. Ci&ograve; accadde quando il valore e la saggezza di Ges&ugrave; erano sconosciuti. Al giorno d&rsquo;oggi, anche coloro che hanno familiarit&agrave; con la saggezza di Ges&ugrave; celebrano il giorno della sua morte come Venerd&igrave; Santo. Sebbene sia consuetudine festeggiare con gioia in una bella giornata, il giorno in cui Ges&ugrave; mor&igrave; dovrebbe essere un giorno doloroso per i Suoi devoti. &Egrave; sorprendente vedere i cristiani, che professano Ges&ugrave; come loro Dio, indossare felicemente abiti nuovi e mangiare buon cibo senza esprimere dolore per la morte di Ges&ugrave; quel giorno.

  In effetti, il giorno in cui Ges&ugrave; fu ucciso dovrebbe essere etichettato come un &ldquo;brutto giorno&rdquo;. I devoti di Ges&ugrave; dovrebbero esprimere dolore e astenersi dal mangiare quel giorno. &Egrave; sconcertante celebrare la giornata come una festa e chiamarla &ldquo;Venerd&igrave; Santo&rdquo; come se fosse un giorno di bont&agrave;. Anche coloro che considerano Ges&ugrave; la loro famiglia Dio partecipano alla celebrazione, rivelando la loro incomprensione del valore di Ges&ugrave;. Coloro che venerano profondamente Ges&ugrave; dovrebbero considerare quel giorno come un &ldquo;Brutto Venerd&igrave;&rdquo;. I predicatori hanno la responsabilit&agrave; di educare le persone sul significato del Brutto Venerd&igrave; e di scoraggiarle dal celebrarlo. Le persone che non riescono a distinguere tra il giorno della morte e il compleanno non comprendono la grandezza della saggezza di Dio. Quando muore un capofamiglia, tutta la famiglia piange, e la stessa riverenza va riservata quando muore Ges&ugrave;, che dovrebbe essere stimato pi&ugrave; di un familiare. Celebrare la morte di Ges&ugrave; come una festa senza dolore &egrave; un errore, dando per scontato che sia un giorno propizio. Ges&ugrave; disse: &ldquo;<b>Chi ama suo padre o sua madre pi&ugrave; di me, non &egrave; degno di me; chiunque ama il proprio figlio o la propria figlia pi&ugrave; di me non &egrave; degno di me</b>.&rdquo; Quando le persone piangono la morte di un membro della famiglia ma non piangono la morte di Ges&ugrave; e la celebrano invece come una festa, come possono essere degne della misericordia di Ges&ugrave;? Pertanto, chiamiamo il Venerd&igrave; Santo un &ldquo;Brutto Venerd&igrave;&rdquo; per onorare Ges&ugrave;. Diventa un atto di riverenza verso Ges&ugrave; quando consideriamo quel giorno come un giorno malvagio e lo piangiamo senza celebrarlo. Altrimenti, <b>esprimiamo ammirazione per Ges&ugrave; solo con le nostre parole, non nel nostro cuore</b>. Se onori, ami, adori e preghi Ges&ugrave;, allora diffondi il concetto del Venerd&igrave; Santo come Venerd&igrave; Cattivo e aiuta tutti a capirlo. Allora diventerai un vero devoto di Ges&ugrave;. Quando abbandoni il Venerd&igrave; Santo, non ti succede nulla di male; accadono solo cose belle.
</div></div>
<ion-row><ion-col class="ion-text-center">
Di
L'unico guru di tre religioni<br>
<b>Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu</b><br><br>

Sebbene mille persone sostengano, una bugia non può diventare verità mille persone negano: la verità non può diventare una bugia.

</ion-col></ion-row>
</span>`
},
{
chapterName: "Una lettera da un indù",
chapterNumber: 9,
pageNumber: 149,
verse: ``,
meaning: ``,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem">
<div class="poemtext">
<em>Per prima cosa, prostrazioni a Swami&hellip;.</em>

  Jai Srirama! Mi chiamo Pittala Thirumalesha, 36 anni, villaggio di Nalgonda, distretto di Telangana. Occupazione: Lavoro, Casta: Mudiraju (casta Boya), Religione: Religione ind&ugrave;, Occupazione del padre: prima agricoltore e poi tiratore di risci&ograve;, Occupazione della madre: venditrice di frutta, La mia educazione: <b>M.Sc., B.Ed. (Matematica).</b>

  Signore, scrivo questa lettera con l'intento che la mia presentazione spirituale faccia qualcosa di buono per questa societ&agrave;. Dopo aver letto le tue Scritture, &ldquo;<b>Le gemme nella Seconda Scrittura Divina</b>&rdquo;, Volevo scrivere questa lettera. Sembra che scrivere le scritture sulla Bibbia sia l'atto pi&ugrave; audace di uno Swamiji ind&ugrave; (Indhu). Molti pensano che uno Swamiji possa scrivere la Bhagavad-Gita ma non la Bibbia. Ho gi&agrave; letto le tue Scritture, la Bhagavad-Gita e il Corano. Ora ho anche imparato la saggezza della Bibbia attraverso i tuoi scritti. Attraverso te ho compreso la saggezza divina nelle tre scritture delle tre religioni. Conoscendo lo stato attuale della societ&agrave;, attraverso questa lettera esprimo alcune delle mie opinioni con buone intenzioni.

  La prima scrittura che leggo &egrave; <b>"Il segreto del triangolo delle Bermuda." </b>Attraverso queste scritture ho imparato il segreto del perch&eacute; aerei e navi scompaiono nel Triangolo delle Bermuda. Sono cos&igrave; felice di aver realizzato questo fatto strano che sembrava un film di Hollywood. Poi leggi le Scritture <b>&ldquo;Fantasmi - Bhutas (I veri incidenti)&rdquo; </b>e venne a conoscenza di informazioni scientifiche sul &ldquo;mondo invisibile (sottile)&rdquo;. Inoltre, sono rimasto molto sorpreso quando ho saputo come operano il governo di Dio e la Legge Divina, e ringrazio il mio Dio per aver conosciuto il mistero pi&ugrave; grande. Poi leggo le Scritture <b>&ldquo;La storia di un cercatore di verit&agrave;&rdquo; </b>E <b>&ldquo;Sri Krishna Dio o Bhagavan?&rdquo; </b>Ero cos&igrave; felice di apprendere un grande segreto dalle scritture "Sri Krishna Dio o Bhagavan?" Ora che ho trovato una destinazione per la mia vita, sono felice di aver visitato il tempio di Krishna a Prabodhashramamu, Chinna Podamala, e di aver adorato il Signore Krishna. Da quando ho visitato il Prabodhashramam nel luglio 2012, sono ogni giorno elettrizzato dalla gioia per aver assorbito la saggezza dalle tue 93 scritture e 150 conferenze.

  Attraverso la Scrittura <b>&ldquo;Tradizioni del tempio (verit&agrave; nascoste)&rdquo; </b>Ho imparato a conoscere il significato dei templi. Ho colto il vero significato delle tradizioni soppresse da <b>&ldquo;Indu Sampradayas (Tradizioni).&rdquo; </b>Dalla Scrittura <b>&ldquo;Mana Pandugalu (I nostri festival)&rdquo; </b>Non solo ho compreso il significato di "Pandu (frutto)" in "Panduga (festa)", ma ho anche compreso lo scopo essenziale delle feste e l'intento del pensiero pre-pianificato dei nostri anziani. Come hai detto in queste scritture, &egrave; vero al cento per cento che avviene prima lo sviluppo spirituale, poi lo sviluppo personale e successivamente lo sviluppo sociale. Ogni scrittura che proviene da te &egrave; una miniera di saggezza. Ogni predicazione &egrave; un tesoro del Dharma. Le tue parole sono benefiche non solo per gli esseri umani ma anche per tutti gli esseri viventi. Questa &egrave; la verit&agrave; che dico dopo aver sperimentato negli ultimi sei anni.

  Ero scoraggiato quando la tua religione ind&ugrave; ha detto parole dispregiative contro di te, il grande imperatore. Ma con questa lettera condivido alcune informazioni per rendere tutti consapevoli dei fatti.

  Il Teorema Thraitha Bhagavad-Gita trasmette il vero messaggio del Signore Krishna. Le Scritture di Swami <b>&ldquo;Parole di saggezza nell&rsquo;Ultima Scrittura Divina (704 pagine)&rdquo; </b>E <b>&ldquo;I diamanti nell&rsquo;ultima Scrittura Divina&rdquo; </b>ha fatto comprendere al mondo la saggezza divina che Gabriele (Il Sole) ha inviato al profeta Maometto. La scrittura dello Yogeeswarlu <b>&ldquo;Le gemme nella Seconda Scrittura Divina (352 pagine)&rdquo; </b>trasmesso il vero messaggio dei Vangeli di Ges&ugrave;.

  Ecco il mio appello agli intellettuali sminuiti dall&rsquo;odio religioso, demoni religiosi spietati, gnani incompleti pazzi per la religione, mostri politici che non conoscono il valore dell&rsquo;ashram, falsi profeti che fuorviano la societ&agrave; con la scabbia di casta e la follia religiosa, razionalisti che non ne conoscono il motivo, le comunit&agrave; che cercano la verit&agrave; non sono consapevoli della verit&agrave; e gli anziani che spingono la societ&agrave; alla superstizione usando le parole Dio, Anima, adorazione e saggezza. Per favore leggi attentamente almeno una delle scritture di Swami per conoscerne la grandezza <b>&ldquo;Teorema di Thraitha&rdquo; </b>e prestare molta attenzione a ci&ograve; che dice. Osserviamo una delle parole di Swami.

  <b>&ldquo;Le religioni sono proibite. Le caste sono irrazionali. Tutti e tre - la Bhagavad-Gita, la Bibbia e il Corano - sono parti della stessa scrittura divina. Se i tuoi sentimenti vanno oltre la casta, unisciti immediatamente al Prabodha Seva Samithi. Dio vuole che tu sia gnani &ndash; Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu&rdquo;</b>

  Swamiji non solo ha detto le parole di cui sopra, ma ha anche celebrato matrimoni tra caste e religioni. Spos&ograve; anche un'altra donna della casta. &Egrave; odio religioso e scrittura velenosa su un cos&igrave; grande Swami? Uomini, pensate una volta con discrezione.

  Le Scritture di Swami trasmettono la vera saggezza delle poesie Vemana. Raccontano il vero significato delle poesie filosofiche di Veerabrahmam. L'Atmalinga Shatakam trasmetteva informazioni spirituali. Ha fornito molti dei pi&ugrave; grandi segreti sconosciuti al mondo e le informazioni divine che contribuiscono alla prosperit&agrave; spirituale dell&rsquo;umanit&agrave;. Molti atei che hanno colto la saggezza delle sue scritture sono diventati veri credenti. Anche gli sciocchi diventavano razionalisti. I credenti ciechi sono diventati scienziati spirituali con l&rsquo;approccio scientifico. Anche i terroristi sono cambiati e sono diventati gnanis.

  <b>Un ind&ugrave; che conosce la sua saggezza &egrave; un vero ind&ugrave; (vero gnani).</b>

  <b>Un cristiano che conosce la sua saggezza &egrave; un vero cristiano (vero credente in Dio). Un musulmano che conosce la propria saggezza &egrave; un vero musulmano (veramente obbediente a Dio).</b>

  Le sue scritture sradicano il karma e perdonano i peccati. Se metti le Sue scritture sul corpo dove provi dolore con devozione e fede, esso si attaccher&agrave; senza alcun supporto finch&eacute; non distrugger&agrave; il karma che lo ha causato e fornir&agrave; sollievo. Sebbene ci&ograve; possa sorprendere, &egrave; una palese verit&agrave; raccontata in base alla mia esperienza.

  &Egrave; attraverso i Suoi scritti che il mondo &egrave; giunto a conoscere la verit&agrave; su &ldquo;Bhagavan Ravana Brahma&rdquo;, l&rsquo;incarnazione di Dio nel Thraitha Yuga. Persino Sita Devi, che tutti sostengono essere la vittima, non ha accusato Ravana Brahma. Perch&eacute; gli ariani che scrissero il Ramayana non potevano dire l'et&agrave; di Ravana Brahma al momento del rapimento di Sita? Se si rispondesse a questa domanda, verrebbero alla luce le storie nascoste originali del Ramayana. Ravana Brahma visit&ograve; Sita Devi ad Ashokavana con la moglie Mandodari e <a href="https://en.wikipedia.org/wiki/Indrajit">Meghnaad</a>, ma perch&eacute; veniva ritratto come un uomo vizioso? Anche se anziani Ravana Brahma non ha partecipato allo swayamvara di Sita, non &egrave; un peccato scrivere che non &egrave; stato in grado di sollevare l'arco di Shiva nello swayamvara di Sita? Quando port&ograve; Sita, sua figlia, senza toccarla, nel suo regno, nello Sri Lanka, scriveresti falsamente che era un uomo lussurioso? Alcune persone egoiste hanno ordito cospirazioni contro di lui, dicendo che la prendeva con lussuria; come &egrave; possibile in base a ci&ograve; che hai detto secondo cui chiunque avesse toccato Sita sarebbe morto bruciato? Almeno per ora, questa comunit&agrave; dovrebbe conoscere la verit&agrave; nel Ramayana. Mandodari Devi, che conosceva il segreto secondo cui la sofferenza di Sita e l'incarnazione di Bhagavan Ravana Brahma sarebbero finite presto, era solita dire alla gente del suo regno che Ravana Brahma aveva portato Sita a Lanka per il benessere di Sita. Desideriamo vedere i ritratti del grande Sri Bhagavan Ravana Brahma e Srimati Mandodari Devi.

  Non sai veramente chi sei. Non mettere messaggi spazzatura inutili su Facebook e YouTube, e quando bestemmi accumulerai anni di karma. Non ascoltare se non &egrave; necessario. Quando non conosci la definizione del dharma e quanti dharma, non chiamare gnani per il dibattito sulla TV pubblica.

  Il teorema di Thraitha &egrave; il vero standard. Questo standard viene utilizzato per misurare il livello di odio religioso. Il mondo verr&agrave; a sapere quanta saggezza c'&egrave; nelle religioni e quanto odio c'&egrave; nelle religioni attraverso la saggezza del Teorema Thraitha. La saggezza del Teorema Thraitha rivela a questo mondo quanta saggezza c'&egrave; nelle religioni e quanto odio c'&egrave; nelle religioni. Prabodha Seva Samiti e i suoi cinque affiliati credono fermamente che qualunque cosa accada, accadr&agrave; con il permesso di Dio.

  <b>Prabodhashramam &egrave; l'unica organizzazione che porta sviluppo spirituale</b>. Tutte le altre organizzazioni lavorano per lo sviluppo della personalit&agrave; e una societ&agrave; migliore. Ma tutti dovrebbero riconoscere che se non avviene lo sviluppo spirituale, non si verificheranno lo sviluppo personale e sociale.

  La saggezza di Yogeeswarlu &egrave; priva di caste e non religioso. Ecco perch&eacute; persone di tutte le religioni - ind&ugrave;, musulmani e cristiani - si rivolgono a lui con armonia e sono felici di conoscere la vera saggezza divina. Come ha detto Veerabrahmam, la Sua saggezza unisce tutte e tre le religioni. Brahmam disse in Kalagnanam (profezia): &ldquo;<b>Tutti i grandi semidei (devata) sono ad Anandashramam.</b>I Devata vennero e parlarono con gioia per apprendere la saggezza del loro padre. Ha anche detto: &ldquo;<b>Prabodhashramam ha il pi&ugrave; alto livello di saggezza. Quelli in Prabodhashramam consistono in attributi dell'Onnipotente. Quell&rsquo;onnipotente era solo Ananda Guru. Ananda Guru &egrave; Guru anche per te e per me.</b>Tali messaggi di parole pronunciate dallo stesso Brahmam si trovano nelle scritture di Swami. Dovresti cogliere la saggezza di Dio con discrezione e diligenza.

  Coloro che non leggono la Bhagavad-Gita sono forse i salvatori dei dharma ind&ugrave;? Gli sciocchi, che non conoscono l&rsquo;ingiustizia della storia, sosterranno la religione ind&ugrave;? &Egrave; possibile costruire una societ&agrave; equa senza conoscere il &ldquo;Segreto dell&rsquo;inizio&rdquo; e il &ldquo;Segreto della creazione&rdquo;? Riconosci la bont&agrave; delle Scritture leggendole con pazienza e senza odio religioso. Se ti senti male, lascialo. Non esiste una regola secondo la quale tutti dovrebbero crederci. <b>Le scritture e gli insegnamenti del Thraitha Siddantha</b>, che sono cos&igrave; benefici per l'umanit&agrave; e hanno una coscienza scientifica e spirituale razionale e rivelano il

  segreti di <b>Brahma, Karma e Bhakti Yoga </b>in dettaglio con Jeevatma, Atma e Paramatma, sono essenziali per la societ&agrave; attuale.

  Le organizzazioni: ONU, World Peace Council, Police Act, IPC, CrPC, Prison Acts, CBI, CBCID, Intelligence Reports, ACB, Human Rights Watch, Woman Rights, SC ST Atrocities Act, Indian Trusts Act, Muslim Law, Christian Law, Le leggi sul lavoro, i GO del governo centrale, i GO del governo statale, la Commissione elettorale, la Costituzione indiana, i tribunali indiani, la legge RTI, la legge sulla tecnologia dell&rsquo;informazione del 2000 &ndash; esistono, infatti, per il bene del benessere umano. Le istituzioni spirituali hanno la responsabilit&agrave; di dire alle persone quale tipo di saggezza &egrave; adatta al loro benessere. Prabodhashramam e i suoi affiliati occupano il primo posto in tali istituzioni responsabili. Soprattutto non dobbiamo dimenticare che esiste anche <b>&ldquo;Legge divina e amministrazione divina&rdquo;.</b>

  L'essenza delle tre scritture divine &egrave; spiegare le tre anime. La vita senza la saggezza divina &egrave; uno spreco. Dio ha dato la vita all&rsquo;uomo solo perch&eacute; conoscesse la Sua saggezza. La saggezza di Dio va oltre la casta e la religione. Yogeeswarlu ha fornito il vero significato della saggezza del Signore Krishna attraverso la "prima scrittura divina Bhagavad-Gita". Ci ha dato la saggezza del Corano, che &egrave; arrivata al profeta Muhammad attraverso Gabriele, nelle scritture "Parole di saggezza nell'ultima Scrittura divina" e "Diamanti nell'Ultima Scrittura Divina.' Ci ha raccontato la saggezza del Vangelo di Ges&ugrave; in 'Gemme nella Seconda Scrittura Divina.' Ci sta dando la vera saggezza divina pratica attraverso le scritture e gli insegnamenti. Conosci la saggezza che Egli ha detto e indossa il Sigillo di Dio e ricevi il perdono dei peccati. Se ascolti attentamente e lo pratichi, sei fortunato. Se non ascolti, questo &egrave; il tuo karma. Tutto avviene secondo la volont&agrave; di Dio, e Dio lo sa.

  <b>Gli ind&ugrave; dovrebbero sapere quale Dio adorare. I musulmani devono sapere chi sono i due Allah (i due creatori). I cristiani hanno bisogno di sapere chi sono i due figli.</b>

  Un uomo non diventa mai Dio, ma Dio pu&ograve; venire come uomo. Per riconoscere il Dio che &egrave; in forma umana, dobbiamo prima avere in noi la sua saggezza. Per riconoscere Dio, dobbiamo conoscere questi due principi affermati dagli anziani. Come ha detto Vemana yogi, le sue poesie possono essere comprese in 1000 modi e, allo stesso modo, la saggezza del teorema Thraitha pu&ograve; essere compresa in 9000 modi. Secondo il detto &ldquo;Shraddhavan labhate gnanam (Coloro che hanno interesse otterranno la saggezza)&rdquo;, coloro che sono riflessivi e intellettuali possono comprendere la saggezza di Thraitha.

  Almeno ora abbandona il pensiero delle caste e della religione e conosci la vera saggezza divina. Se non lo sai adesso, non lo saprai mai. Il tempo &egrave; breve. Fallo adesso.

  Offro fiori profumati ai piedi di Yogeeswarlu per darci pi&ugrave; saggezza divina. Offro saluti illimitati con tutto il mio cuore, tutta la mia anima e mente.

Il tuo servitore obbediente
<b>Thirumalesu </b>
</div></div>
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
Gemme Nella
</div>
<div class="img1-title2">
Seconda Divina Scrittura
</div>
<div class="img1-title3">
 (Vangeli nel Teorema Thraitha)
</div>
<div class="img1-title4">
Scrittore: L'unico Guru di tre religioni (indù, musulmano, cristiano), L'Imperatore del Regno Spirituale, Lo scrittore di più di cento libri sacri divini, Indu Gnana Dharma Pradata, Lo Scrittore Sensazionale, Adi Karta della Dottrina Traita
</div>
<div class="img1-title5">
Sri Sri Sri Acharya Prabodhananda Yogeeswarulu
</div>
</div>
</p>`
},
{
chapterName: "GLOSSARIO",
chapterNumber: 11,
pageNumber: 151,
verse: ``,
meaning: ``,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<ion-row>
<ion-col class="ion-text-center">
<b>GLOSSARIO</b></ion-col>
</ion-row>
  <b>Achara Prakruti</b>: Cinque elementi immutabili: cielo, aria, fuoco, acqua e terra. Quelli (Prakruti) che non hanno karma. Prapancha. Pancha Bhuta.

  <b>Ingiustizia</b>: Sono contro i dharma. Causano karma positivo, karma negativo o entrambi. Adharma menzionati nella Bhagavad-Gita: studiare i Veda, fare beneficenza, compiere sacrifici (yajnas), penitenze (tapas) ecc.

  <b>Agami Karma</b>: Nuovo peccato e punya dalla nascita alla morte. Karma imminente.

  <b>Aham</b>: Parte interna del corpo ma non guna.

  <b>Antahkaranams</b>: Cinque parti sottili del corpo: Jeeva (Jeevatma), Manas, Buddhi, Chittam e Aham.

  <b>Astrologia</b>: Chi conosce la saggezza spirituale conosce il karma dell'altro con la sua saggezza e lo informa. Per conoscere il futuro &egrave; necessario l'occhio della saggezza. Ci&ograve; che &egrave; conosciuto con la luce della saggezza.

  <b>Atma</b>: Colui che abita con l'essere mortale. Uno che &egrave; imperituro. Colui che &egrave; in tutti i corpi viventi. Atma&rdquo;,&rdquo; Akshara purusha&rdquo;,&rdquo; Anima immortale.

  <b>Bhagavan</b>: Uno che &egrave; venuto da Dio. Colui che &egrave; venuto con le informazioni di Dio&rdquo;.&rdquo; Cristo, Svayambhu o Consolatore o il Figlio unigenito. Avvocato o aiutante. Messaggero di Dio. Guru.

  <b>Buddhi</b>: &Egrave; l'intelletto nel corpo, che analizza i pro e i contro di un'azione.

  <b>Chara Prakruti</b>: La Prakruti mutevole. Jagath. Esseri viventi. Chara Prakruti. Le parti totali del corpo di ogni essere vivente sono 25.

  <b>Sangue del patto</b>: Potere della saggezza. Essenza della saggezza. La saggezza di Dio senza vincoli del karma.

  <b>Dei</b>: Umani invisibili. Semidei.

  <b>Dharma Shastra</b>: Scrittura con dharmas (saggezza). I comandamenti di Dio. Brahma Vidya. Superscienza.

  <b>Dharma</b>: Saggezza divina. Dottrine o principi divini. Comandamenti. Seguire i dharma porta alla liberazione dalla vita e dalla morte.

  <b>Fantasma</b>: Persona che vive con un corpo sottile. Diavolo o demone.

  <b>Jeevatma: </b>Anima mortale nel corpo. Kshara purusha o Jeeva<b>.&nbsp;</b>

  <b>Gnanendriyas: </b>Cinque organi di senso: occhio, orecchio, naso, lingua e&nbsp;

  <b>Gnani: </b>Una persona che conosce la saggezza e i dharma divini. Brahmagnani.

  <b>Karma Chakra</b>: &Egrave; un insieme di 108 parti. Ognuna delle 12 parti del Karma chakra ha un diverso tipo di karma. Ogni tipo di karma &egrave; ulteriormente suddiviso in nove parti. Dodici parti hanno 108 (12*9) tipi di karma.

  <b>Karma Visarga</b>: Dividere il karma in piccole parti.

  <b>Karma Yogam</b>: Quando un Jeevatma riconosce Aham nel suo corpo e non ascolta ci&ograve; che dice Aham, non riceve alcun karma. &Egrave; la lotta di Jeeva contro Aham.

  <b>Karma Yogi</b>: Una persona che conosce la saggezza e pratica il Karma Yogam.

  <b>Karma</b>: Peccato invisibile e punya

  <b>Karmendriyas</b>: Mani, gambe, bocca, ano e organi sessuali.

  <b>Manas</b>: Funziona come comunicatore tra cervello e organi. Ricorda e riconsidera le cose.

  <b>Moksham: </b>Liberazione dalla nascita, dalla morte, dalla vita, dalle sofferenze, ecc. Unione con Dio. Paraloka, Mukti o Salvezza. Liberazione.

  <b>Paramatma</b>: Che &egrave; diverso da Atma. Padre di interi esseri viventi e Pancha Bhuta. Dio, lo Spirito Santo, Allah, Purushottama, Uttama Purusha o il padre di paraloka. Anima suprema.

  <b>Prakriti</b>: Combinazione di Chara Prakruti e Achara Prakruti. Natura.

  <b>Prarabdha Karma</b>: Karma predeterminato. Questo accade in questa vita dalla nascita alla morte. Il Prarabdha Karma viene deciso quando nasce un uomo.

  <b>Avere</b>: Viene dalle buone azioni. Ci&ograve; che provoca piaceri nella vita.

  <b>Purusha</b>: Pertinente al Paramatma in ogni essere vivente.

  <b>Sanchita karma</b>: Il karma accumulato come un mucchio dopo aver sperimentato il karma in ogni nascita &egrave; chiamato sanchita karma.

  <b>Peccato</b>: Viene dalle cattive azioni. Causa difficolt&agrave; e dolore.

  <b>Tanmatra</b>: Energie derivate (vista, udito, olfatto, gusto e tatto) collegate agli organi di senso.

  <b>Upadesha</b>: Ottenere il fuoco della saggezza come carit&agrave;. Paese che non &egrave; paese (Chi ha l'occhio della saggezza deve vedere). Energia della saggezza, Paramatma. Battesimo. Iniziazione alla saggezza.

  <b>Yogi</b>: Uno che &egrave; in Yogam. Colui che fa Yogam. Una persona che conosce la saggezza divina e pratica i dharma.

</span>
`
},
{
chapterName: "Video",
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

    { title: "La via di Dio", component: 0, chapterNumber: 0, subs: null, icon: 'information' },
    { title: 'Il segreto della creazione', component: 1, chapterNumber: 1, subs: null, icon: 'information' },
    {
      title: 'Il Vangelo secondo Matteo', component: null, chapterNumber: 2, icon: 'book',
      subs: [
        {
          shloka: "(3:7) Razza di vipere! Chi ti ha avvertito di fuggire dall'ira imminente?",
          component: 2,
          subs: null
        },
        {
          shloka: "3-11. I baptize you with water...",
          component: 3,
          subs: null
        },
        {
          shloka: "3-12. His winnowing fork...",
          component: 4,
          subs: null
        },
        {
          shloka: "3-16. As soon as Jesus was...",
          component: 5,
          subs: null
        },
        {
          shloka: "3-17. And a voice from the sky...",
          component: 5,
          subs: null
        },
        {
          shloka: "4-10. Jesus said to him, “Away from me...",
          component: 6,
          subs: null
        },
        {
          shloka: "5-10. Blessed are those who are persecuted...",
          component: 7,
          subs: null
        },
        {
          shloka: "5-17. Do not think that I have come to abolish...",
          component: 8,
          subs: null
        },
        {
          shloka: "5-18. For truly I tell you, until sky and earth...",
          component: 9,
          subs: null
        },
        {
          shloka: "5-19. Therefore, anyone who sets aside...",
          component: 10,

          subs: null
        },
        {
          shloka: "5-20. For I tell you that unless...",
          component: 11,
          subs: null
        },
        {
          shloka: "5-28. But I tell you that anyone...",
          component: 12,
          subs: null
        },
        {
          shloka: "5-29. If your right eye causes you...",
          component: 13,

          subs: null
        },
        {
          shloka: "5-30. And if your right hand causes...",
          component: 13,

          subs: null
        },
        {
          shloka: "6-3. But when you do dharma...",
          component: 14,

          subs: null
        },
        {
          shloka: "6-4. So that your giving may be in...",
          component: 14,

          subs: null
        },
        {
          shloka: "6-6. But when you pray, go into your...",
          component: 15,

          subs: null
        },
        {
          shloka: "6-7. When you pray, do not keep...",
          component: 16,

          subs: null
        },
        {
          shloka: "6-8. Do not be like them, for your...",
          component: 16,

          subs: null
        },
        {
          shloka: "7-7. Ask and it will be given to you...",
          component: 18,
          subs: null
        },
        {
          shloka: "7-8. For everyone who asks receives...",
          component: 18,
          subs: null
        },
        {
          shloka: "7-13. Enter through the narrow gate...",
          component: 17,
          subs: null
        },
        {
          shloka: "7-14. But small is the gate and...",
          component: 17,
          subs: null
        },

        {
          shloka: "7-15. Watch out for false prophets...",
          component: 19,
          subs: null
        },
        {
          shloka: "7-21. Not everyone who says to me...",
          component: 20,
          subs: null
        },
        {
          shloka: "7-22. Many will say to me on that day...",
          component: 21,
          subs: null
        },
        {
          shloka: "7-23. Then I will tell them plainly...",
          component: 21,
          subs: null
        },
        {
          shloka: "8-22. Jesus told him, “Follow me...",
          component: 22,

          subs: null
        },
        {
          shloka: "9-12. On hearing this, Jesus said...",
          component: 23,

          subs: null
        },
        {
          shloka: "9-13. For I have not come to cal...",
          component: 23,

          subs: null
        },
        {
          shloka: "8-23. Then he got into the boat... ",
          component: 24,
          subs: null
        },
        {
          shloka: "8-24. Suddenly a furious storm...",
          component: 24,
          subs: null
        },
        {
          shloka: "8-25. The disciples went and wok...",
          component: 24,
          subs: null
        },
        {
          shloka: "8-26. He replied, “You of little faith...",
          component: 24,
          subs: null
        },
        {
          shloka: "9-6. I want you to know that the Son...",
          component: 25,

          subs: null
        },
        {
          shloka: "10-20. For it will not be you speaking...",
          component: 26,

          subs: null
        },
        {
          shloka: "10-30. Even the very hairs of your...",
          component: 27,

          subs: null
        },
        {
          shloka: "10-34. Do not suppose that I have...",
          component: 28,

          subs: null
        },
        {
          shloka: "10-35. For I have come to turn...",
          component: 28,

          subs: null
        },
        {
          shloka: "10-36. A man’s enemies will be...",
          component: 28,

          subs: null
        },
        {
          shloka: "10-37. Anyone who loves their father...",
          component: 29,
          subs: null
        },
        {
          shloka: "10-38. Whoever does not take up... ",
          component: 30,
          subs: null
        },
        {
          shloka: "10-40. Anyone who welcomes (receives)...",
          component: 31,
          subs: null
        },
        {
          shloka: "11-9. What did you go out to see?...",
          component: 32,
          subs: null
        },
        {
          shloka: "11-28. Come to me, all you who are...",
          component: 33,
          subs: null
        },
        {
          shloka: "12-17. This was to fulfill what was...",
          component: 34,
          subs: null
        },
        {
          shloka: "12-18. Here is my servant whom...",
          component: 34,
          subs: null
        },
        {
          shloka: "12-19. He will proclaim justice (wisdom)...",
          component: 34,
          subs: null
        },
        {
          shloka: "12-20. A bruised reed he will not break...",
          component: 34,
          subs: null
        },
        {
          shloka: "12-21. In his name the nations wil...",
          component: 34,
          subs: null
        },
        {
          shloka: "12-31. So, I tell you, every kind of sin...",
          component: 35,
          subs: null
        },
        {
          shloka: "12-32. Anyone who speaks a word against...",
          component: 36,

          subs: null
        },
        {
          shloka: "12-36. But I tell you that everyone...",
          component: 37,
          subs: null
        },
        {
          shloka: "12-37. For by your words you...",
          component: 37,
          subs: null
        },
        {
          shloka: "12-40. For as Jonah was three days...",
          component: 38,

          subs: null
        },
        {
          shloka: "13-13. Though seeing, they do not...",
          component: 39,
          subs: null
        },
        {
          shloka: "13-14. In them is fulfilled the prophecy...",
          component: 39,
          subs: null
        },
        {
          shloka: "13-15. For this people’s heart has become...",
          component: 39,
          subs: null
        },
        {
          shloka: "15-7. You hypocrites! Isaiah was...",
          component: 40,
          subs: null
        },
        {
          shloka: "15-8. These people honor me with their lips...",
          component: 40,
          subs: null
        },
        {
          shloka: "15-9. They worship me in vain;...",
          component: 40,
          subs: null
        },
        {
          shloka: "15-11. What goes into someone’s mouth...",
          component: 41,
          subs: null
        },
        {
          shloka: "15-12. Then the disciples came to...",
          component: 42,
          subs: null
        },
        {
          shloka: "15-13. He replied, “Every plant that...",
          component: 42,
          subs: null
        },
        {
          shloka: "15-14. Leave them; they are blind...",
          component: 43,
          subs: null
        },
        {
          shloka: "16-21. From that time on Jesus began...",
          component: 44,
          subs: null
        },
        {
          shloka: "16-22. Peter took him aside and began...",
          component: 44,
          subs: null
        },
        {
          shloka: "17-22. When they came together...",
          component: 44,
          subs: null
        },
        {
          shloka: "17-23. They will kill him, and on the...",
          component: 44,
          subs: null
        },
        {
          shloka: "19-23. Then Jesus said to his disciples...",
          component: 45,
          subs: null
        },
        {
          shloka: "19-24. Again, I tell you, it is easier...",
          component: 45,
          subs: null
        },
        {
          shloka: "20-17. Now Jesus was going up...",
          component: 44,
          subs: null
        },
        {
          shloka: "20-18. We are going up to Jerusalem...",
          component: 44,
          subs: null
        },
        {
          shloka: "20-19. They will hand him over to...",
          component: 44,
          subs: null
        },
        {
          shloka: "22-36. Teacher, which is the greatest...",
          component: 46,
          subs: null
        },
        {
          shloka: "22-37. Jesus replied: “Love the Lord...",
          component: 46,
          subs: null
        },
        {
          shloka: "22-38. This is the first and greatest...",
          component: 46,
          subs: null
        },
        {
          shloka: "22-39. And the second is like it...",
          component: 46,
          subs: null
        },
        {
          shloka: "22-40. All the Law and the Prophets...",
          component: 46,
          subs: null
        },
        {
          shloka: "23-8. But you are not to be called...",
          component: 47,
          subs: null
        },
        {
          shloka: "23-9. And do not call anyone on earth...",
          component: 47,
          subs: null
        },
        {
          shloka: "23-10. Nor are you to be called instructors...",
          component: 47,
          subs: null
        },
        {
          shloka: "23-15. Woe to you, teachers of the law...",
          component: 48,
          subs: null
        },
        {
          shloka: " 24-35. Sky and earth will pass away...",
          component: 49,
          subs: null
        },
        {
          shloka: "24-42. Therefore, keep watch, because...",
          component: 50,
          subs: null
        },
        {
          shloka: "26-26. While they were eating, Jesus ...",
          component: 51,
          subs: null
        },
        {
          shloka: "26-27. Then he took a cup, and when...",
          component: 51,
          subs: null
        },
        {
          shloka: "26-28. This is my blood of the covenant...",
          component: 51,
          subs: null
        },
        {
          shloka: "28-18. Then Jesus came to them and...",
          component: 52,
          subs: null
        },
        {
          shloka: "28-19. Therefore, go and make disciples...",
          component: 53,
          subs: null
        },
        {
          shloka: "28-20. Teaching them to obey everything...",
          component: 53,
          subs: null
        },

      ]
    },
    {
      title: 'Il Vangelo di Marco', component: null, chapterNumber: 3, icon: 'book',
      subs: [
        {
          shloka: "2-19. How can the guests of the...",
          component: 54,
          subs: null
        },
        {
          shloka: "2-20. But the time will come when...",
          component: 54,
          subs: null
        },
        {
          shloka: "4t-38. Jesus was in the stern,...",
          component: 55,
          subs: null
        },
        {
          shloka: "4-39. He got up, rebuked the wind...",
          component: 55,
          subs: null
        },
        {
          shloka: "5-38. When they came to the home...",
          component: 56,
          subs: null
        },
        {
          shloka: "5-39. He went in and said to them...",
          component: 56,
          subs: null
        },
        {
          shloka: "5-40. But they laughed at him...",
          component: 56,
          subs: null
        },
        {
          shloka: "5-41. He took her by the hand...",
          component: 56,
          subs: null
        },
        {
          shloka: "5-42. Immediately the girl stood...",
          component: 56,
          subs: null
        },
        {
          shloka: "5-43. He gave strict orders not to...",
          component: 56,
          subs: null
        },
        {
          shloka: "7-15. Nothing outside a person...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-16. Rather, it is what comes out of a...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-17. After he had left the crowd and ...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-18. “Are you so dull?” he asked...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-19. For it does not go into their...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-20. He went on: “What comes out...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-21. For it is from within, out of a...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-22. dultery, greed, malice, deceit...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-23. All these evils come from inside...",
          component: 57,
          subs: null
        },
        {
          shloka: "3-35. Whoever does God’s will is my...",
          component: 58,
          subs: null
        },
        {
          shloka: "4-17. But since they have no root...",
          component: 59,
          subs: null
        },
        {
          shloka: "4-21. He said to them, “Do you...",
          component: 60,
          subs: null
        },
        {
          shloka: "4-22. For whatever is hidden is meant...",
          component: 60,
          subs: null
        },
        {
          shloka: "6-4. Jesus said to them, “A prophet...",
          component: 61,
          subs: null
        },
        {
          shloka: "8-38. If anyone is ashamed of me and...",
          component: 62,

          subs: null
        },

        {
          shloka: ` 9-7. Then a cloud appeared and covered ...`,
          component: 63,

          subs: null
        },
        {
          shloka: `10-17. As Jesus started on his way...`,
          component: 64,

          subs: null
        },
        {
          shloka: `10-18. “Why do you call me good?”...`,
          component: 64,

          subs: null
        },


      ]
    },
    {
      title: 'Il Vangelo di Luca', component: null, chapterNumber: 4, icon: 'book',
      subs: [


        {
          shloka: `16-15. He said to them, “Go into...`,
          component: 65,
          subs: null
        },
        {
          shloka: `16-16. Whoever believes and is...`,
          component: 65,
          subs: null
        },
        {
          shloka: `2-49. “Why were you searching for me?”...`,
          component: 66,
          subs: null
        },
        {
          shloka: `11-37. As Jesus was speaking, one...`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-38. His host was amazed to see...`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-39. Then the Lord said to him, “You...`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-40. Fools! Didn’t God make the...`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-41. So, clean the inside by giving...`,
          component: 67,
          subs: null
        },
        {
          shloka: `12-4. I tell you, my friends, do not...`,
          component: 68,

          subs: null
        },
        {
          shloka: `12-5. But I will show you whom you...`,
          component: 68,

          subs: null
        },
        {
          shloka: `12-25. Which of you by worrying can...`,
          component: 69,

          subs: null
        },
        {
          shloka: "12-33. Sell your possessions and give...",
          component: 70,
          subs: null
        },
        {
          shloka: "12-34. For where your treasure is,...",
          component: 70,
          subs: null
        },
        {
          shloka: "12-49. I have come to bring fire...",
          component: 71,
          subs: null
        },
        {
          shloka: "12-51. Do you think I came to bring...",
          component: 72,
          subs: null
        },
        {
          shloka: "12-52. From now on there will be five...",
          component: 72,
          subs: null
        },
        {
          shloka: "12-53. They will be divided, father against...",
          component: 72,
          subs: null
        },
        {
          shloka: "13-3. Unless you change your mind...",
          component: 73,
          subs: null
        },
        {
          shloka: "14-26. If anyone comes to me and does...",
          component: 74,

          subs: null
        },
        {
          shloka: "14-27. Whoever does not carry their...",
          component: 75,
          subs: null
        },
        {
          shloka: "18-29. “Truly I tell you,” Jesus said to them...",
          component: 76,
          subs: null
        },
        {
          shloka: "21-15. I will give you words and wisdom...",
          component: 77,

          subs: null
        },
        {
          shloka: "21-17. Everyone will hate you...",
          component: 78,
          subs: null
        }



      ]

    },
    {
      title: 'Il Vangelo di Giovanni ', component: null, chapterNumber: 5, icon: 'book',
      subs: [
        {
          shloka: "1-1. In the beginning was the Word...",
          component: 79,
          subs: null
        },
        {
          shloka: "1-9. The true light that gives light...",
          component: 80,
          subs: null
        },
        {
          shloka: "1-10. He was in the world, and though...",
          component: 81,
          subs: null
        },
        {
          shloka: "1-11. He came to that which was his...",
          component: 82,
          subs: null
        },
        {
          shloka: "1-12. Yet to all who did receive him...",
          component: 83,
          subs: null
        },
        {
          shloka: "1-13. Men born not of natural descent...",
          component: 84,
          subs: null
        },
        {
          shloka: "1-14. The Word became flesh and made...",
          component: 85,
          subs: null
        },
        {
          shloka: "1-18. No man has seen God at any...",
          component: 86,
          subs: null
        },
        {
          shloka: "1-51. He then added, “Very truly...",
          component: 87,
          subs: null
        },
        {
          shloka: "3-3. Jesus replied, “Very truly...",
          component: 88,
          subs: null
        },
        {
          shloka: "3-4. “How can someone be...",
          component: 89,
          subs: null
        },
        {
          shloka: "3-5. Jesus answered, “Very truly...",
          component: 89,
          subs: null
        },
        {
          shloka: "3-6. Flesh gives birth to flesh, but...",
          component: 89,
          subs: null
        },
        {
          shloka: "3-7. You should not be surprise...",
          component: 89,
          subs: null
        },
        {
          shloka: "3-8. The wind blows wherever it...",
          component: 89,
          subs: null
        },
        {
          shloka: "3-13. No one has ever gone into...",
          component: 90,
          subs: null
        },
        {
          shloka: "3-15. That whosoever believes in him...",
          component: 91,
          subs: null
        },
        {
          shloka: "3-17. For God did not send his Son...",
          component: 92,
          subs: null
        },
        {
          shloka: "3-18. Whoever believes in him is...",
          component: 93,
          subs: null
        },
        {
          shloka: "3=19. This is the verdict: Light has...",
          component: 94,
          subs: null
        },
        {
          shloka: "3-20. Everyone who does evil hate...",
          component: 94,
          subs: null
        },
        {
          shloka: "3-21. But whoever lives by the truth...",
          component: 94,
          subs: null
        },
        {
          shloka: "5-19. Jesus gave them this answer:...",
          component: 95,
          subs: null
        },
        {
          shloka: "5-20. For the Father loves the Son and...",
          component: 96,
          subs: null
        },
        {
          shloka: "5-21. For just as the Father raises...",
          component: 97,
          subs: null
        },
        {
          shloka: "5-22. Moreover, the Father judges no...",
          component: 97,
          subs: null
        },
        {
          shloka: "5-23. That all may honor the Son...",
          component: 97,
          subs: null
        },
        {
          shloka: "5-24. Very truly I tell you, whoever...",
          component: 98,
          subs: null
        },
        {
          shloka: "5-26. For as the Father has life...",
          component: 99,
          subs: null
        },
        {
          shloka: "5-37. You have never heard his voice...",
          component: 100,
          subs: null
        },
        {
          shloka: "5-38. Nor does his word dwell in...",
          component: 101,

          subs: null
        },
        {
          shloka: "6-25. When they found him on the...",
          component: 102,
          subs: null
        },
        {
          shloka: "6-26. Jesus answered, “Very truly...",
          component: 102,
          subs: null
        },
        {
          shloka: "6-27. Do not work for food that spoils...",
          component: 102,
          subs: null
        },
        {
          shloka: "6-32. Jesus said to them, “Very truly...",
          component: 103,
          subs: null
        },
        {
          shloka: "6-47. No one has seen the Father...",
          component: 104,
          subs: null
        },
        {
          shloka: "7-37. On the last and greatest da...",
          component: 105,
          subs: null
        },
        {
          shloka: "7-38. Whoever believes in me, as...",
          component: 105,
          subs: null
        },
        {
          shloka: "8-12. When Jesus spoke again to the...",
          component: 106,
          subs: null
        },
        {
          shloka: "8-14. Jesus answered, “Even if I testify...",
          component: 107,
          subs: null
        },
        {
          shloka: "8-19t. Then they asked him, “Where...",
          component: 108,
          subs: null
        },
        {
          shloka: "8-21. Once more Jesus said to them...",
          component: 109,
          subs: null
        },
        {
          shloka: "8-23. But he continued, “You are from...",
          component: 110,
          subs: null
        },

        {
          shloka: "8-24. I told you that you would die...",
          component: 111,
          subs: null
        },
        {
          shloka: "8-28.  So, Jesus said, “When you...",
          component: 112,
          subs: null
        },
        {
          shloka: "8-29. The one who sent me is with...",
          component: 113,
          subs: null
        },
        {
          shloka: "8-53. Are you greater than our...",
          component: 114,
          subs: null
        },
        {
          shloka: "8-54. Jesus replied, “If I glorify...",
          component: 114,
          subs: null
        },
        {
          shloka: "8-55. Though you do not know ...",
          component: 115,
          subs: null
        },
        {
          shloka: "8-57. You are not yet fifty years old...",
          component: 116,

          subs: null
        },
        {
          shloka: "8-58. Very truly I tell you,” Jesus answered...",
          component: 116,

          subs: null
        },
        {
          shloka: "9-39. Jesus said, “For judgment I have...",
          component: 117,
          subs: null
        },
        {
          shloka: "9-41. Jesus said, “If you were blind,...",
          component: 118,

          subs: null
        },
        {
          shloka: "10-18. No one takes life from me...",
          component: 119,

          subs: null
        },
        {
          shloka: "10-30.  I and the Father are one...",
          component: 120,
          subs: null
        },
        {
          shloka: "11-25. Jesus said to her, “I am the...",
          component: 121,
          subs: null
        },
        {
          shloka: "11-26. Whoever lives by believing in...",
          component: 122,
          subs: null
        },
        {
          shloka: "12-25. Anyone who loves their lif...",
          component: 123,
          subs: null
        },
        {
          shloka: "12-40. He has blinded their eyes...",
          component: 124,
          subs: null
        },
        {
          shloka: "12-47. If anyone hears my words...",
          component: 125,
          subs: null
        },
        {
          shloka: "12-48. There is a judge for the one...",
          component: 125,
          subs: null
        },
        {
          shloka: "12-49. For I did not speak on my own...",
          component: 126,
          subs: null
        },
        {
          shloka: "12-50. I know that his command leads...",
          component: 126,
          subs: null
        },
        {
          shloka: "14-7. If you really know me, you wi...",
          component: 127,
          subs: null
        },
        {
          shloka: "14-8. Philip said, “Lord, show us the...",
          component: 128,
          subs: null
        },
        {
          shloka: "14-9. Jesus answered: “Don’t you know...",
          component: 128,
          subs: null
        },
        {
          shloka: "14-10. Don’t you believe that I am in...",
          component: 129,
          subs: null
        },
        {
          shloka: "14-6. Jesus answered, “I am the way...",
          component: 130,
          subs: null
        },
        {
          shloka: "14-16. I will ask the Father, and he will...",
          component: 131,
          subs: null
        },
        {
          shloka: "14-17. The world cannot accept him...",
          component: 132,
          subs: null
        },

        {
          shloka: "14-20. On that day you will realize...",
          component: 133,
          subs: null
        },
        {
          shloka: "14-25. All this I have spoken while...",
          component: 134,
          subs: null
        },
        {
          shloka: "14-26. But the Advocate, the Holy Spirit...",
          component: 134,
          subs: null
        },
        {
          shloka: " 15-23. Whoever hates me hates...",
          component: 135,
          subs: null
        },
        {
          shloka: "15-24. If I had not done among them the...",
          component: 136,
          subs: null
        },
        {
          shloka: "15-25. But this is to fulfill what is...",
          component: 136,
          subs: null
        },
        {
          shloka: "15-26. When the Advocate comes... ",
          component: 137,
          subs: null
        },
        {
          shloka: "15-27. And you also must testify...",
          component: 137,
          subs: null
        },
        {
          shloka: "16-7. But very truly I tell you, it is for...",
          component: 138,
          subs: null
        },
        {
          shloka: "16-8. When he comes, he will prov...",
          component: 139,
          subs: null
        },
        {
          shloka: "16-12. I have much more to say...",
          component: 140,
          subs: null
        },
        {
          shloka: "16-13. But when he, the Spirit of truth...",
          component: 141,
          subs: null
        },
        {
          shloka: "16-14. He will glorify me because...",
          component: 142,
          subs: null
        },
        {
          shloka: "16t-15. All that belongs to the Father...",
          component: 142,
          subs: null
        },
        {
          shloka: "16-16. Jesus went on to say, “In a...",
          component: 143,
          subs: null
        },
        {
          shloka: "16-17. At this, some of his disciple...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-18. They kept asking, “What does...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-19. Jesus saw that they wanted...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-20. Very truly I tell you, you wil...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-21. A woman giving birth to a child...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-22. So, with you: Now is your time...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-25. Though I have been speaking...",
          component: 145,

          subs: null
        },


      ]

    },
    {
      title: 'Le rivelazioni ', component: 146, chapterNumber: 6, subs: null, icon: 'information'
    },
    {
      title: 'Le tre dita', component: 147, chapterNumber: 7, subs: null, icon: 'information'

    },
    {
      title: 'Venerdì santo - Venerdì cattivo', component: 148, chapterNumber: 8, subs: null, icon: 'information'

    },
    {
      title: 'Una lettera di un indù', component: 149, chapterNumber: 9, subs: null, icon: 'information'

    },

    {
      title: 'Glossario', component: 151, chapterNumber: 11, subs: null, icon: 'information'

    },

    {
      title: 'Video', component: 152, chapterNumber: 12, subs: null, icon: 'videocam'

    }
    // ,
    // {
    //   title: 'Share', component: 153, chapterNumber: 13, subs: null, icon: 'share'

    // }
  ];



}
