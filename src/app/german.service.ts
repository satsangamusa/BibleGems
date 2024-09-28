import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GermanService {

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
chapterName: "Gottes Weg",
chapterNumber: 0,
pageNumber: 0,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
 	Vor der Ankunft Jesu auf der Erde gab es eine gewisse Geschichte. Es gibt auch eine Geschichte nach seinem Tod. Die vor seiner Geburt aufgezeichnete Geschichte ist als bekannt <b>Altes Testament</b>, w&auml;hrend die nach Seiner Ankunft dokumentierte Geschichte als die bezeichnet wird <b>Neues Testament</b>. Das Alte Testament, das die Zeit vor seiner Geburt, sein Leben im Neuen Testament und die Ausbreitung der christlichen Gemeinschaft nach seinem Tod abdeckt, ist f&uuml;r die christliche Gemeinschaft von gro&szlig;er Bedeutung. Die Zusammenstellung des Alten und Neuen Testaments wird als bezeichnet <b>heilige Bibel</b>. Obwohl die christliche Bibel und die hinduistische Bhagavad-Gita beide darauf abzielen, Menschen zu erheben und zu Gott zu f&uuml;hren, haben sie doch ihre Unterschiede. Die Bhagavad-Gita besteht ausschlie&szlig;lich aus Krishnas Lehren, w&auml;hrend die Heilige Bibel historische Berichte vor und nach Jesus umfasst. Christliche Lehren stammen aus dem Alten Testament vor Christi Geburt und aus der Verbreitung durch seine Anh&auml;nger im Neuen Testament nach seinem Tod. Obwohl daran grunds&auml;tzlich nichts auszusetzen ist, wird bei genauerem Nachdenken deutlich, dass nur ein Teil der Bibel wesentlich ist, um Menschen auf dem Weg zu Gott zu f&uuml;hren. So wie wir in einem Theaterst&uuml;ck dazu neigen, bestimmte Charaktere zu bevorzugen, und in einem Drama mit mehreren Episoden wir vielleicht eine der anderen vorziehen, ist es im Fall der Bibel der Teil des Neuen Testaments, der sich auf Jesus Christus konzentriert &ndash; aus Seinem Von der Ankunft auf der Erde bis zu Seinem Weggang &ndash; das ist die h&ouml;chste Heiligkeit und Bedeutung f&uuml;r das Erreichen der Befreiung (moksham). Es ist wichtig zu verstehen, dass der Kern der Bibel in der Geschichte Jesu liegt. Die Worte Jesu sind wie ein Beutel voller Diamanten in der Bibel, und alles, was die Menschheit begreifen muss, ist darin zu finden <b>Evangelien von Matth&auml;us, Markus, Lukas und Johannes</b>. Die g&ouml;ttliche N&auml;he, die die Menschheit sucht, l&auml;sst sich in diesen vier Evangelien entdecken. Die h&ouml;chste Weisheit, die in diesen Evangelien enthalten ist, findet sich im Johannesevangelium und &uuml;bertrifft die menschliche Intelligenz. Obwohl die Bibel 1029 Seiten umfasst, nimmt die Geschichte Jesu im Neuen Testament nur 102 Seiten ein. Wenn die Bibel in zehn Teile unterteilt w&auml;re, &uuml;berstrahlt ein Teil die anderen neun, und diejenigen, die den Wert Jesu sch&auml;tzen, erkennen die tiefe Weisheit, die in diesem einen Teil enthalten ist.

	Wir sind hier, um einige der Worte Jesu aus den Evangelien von Matth&auml;us, Markus, Lukas und Johannes zu erl&auml;utern, die voller tiefer Weisheit sind. Man k&ouml;nnte sich fragen, warum wir diese Worte wiederholen, wenn viele Kirchenv&auml;ter, Pfarrer und Bisch&ouml;fe bereits ihre Interpretationen dargelegt haben. Hier ist meine Antwort: W&auml;hrend Prediger effektiv Verse aus dem Alten und Neuen Testament lehren, scheint es eine L&uuml;cke in der Erkl&auml;rung der Verse aus den vier Evangelien zu geben, die die Geschichte Christi umfassen. So wie Hindus die Geheimnisse der Bhagavad-Gita m&ouml;glicherweise noch nicht vollst&auml;ndig gel&uuml;ftet haben, k&ouml;nnten in den vier Evangelien zahlreiche verborgene Wahrheiten stecken, die Christen noch entdecken m&uuml;ssen. Dies ist keine Neidbekundung gegen&uuml;ber Predigern; Vielmehr ist es ein Ausdruck des Glaubens an Christus. Unser Ziel ist es, die Wahrheit zu verbreiten und sicherzustellen, dass die Menschen ein korrektes Verst&auml;ndnis von Jesus erlangen und ihn wertsch&auml;tzen k&ouml;nnen <b>Gr&ouml;&szlig;e und Macht.</b>

	Wenn Hindus meine B&uuml;cher mit dem Namen Christi sehen, gehen sie oft davon aus, dass es sich um christliche Literatur handelt, und weigern sich, sie zu lesen. Umgekehrt sind Christen m&ouml;glicherweise misstrauisch gegen&uuml;ber B&uuml;chern, die von einem Hindu-Guru verfasst wurden, und halten sich lieber an christliche Texte. Hindus hassen meine Arbeit, weil sie denken, dass ein christlicher Autor kein echter Hindu sein kann, w&auml;hrend einige Christen m&ouml;glicherweise vor meinen B&uuml;chern warnen, weil sie glauben, dass sie dazu gedacht sind, Christen zu bekehren Hinduismus und sollte vermieden werden. Hindus beschuldigen uns, ihr Volk zum Christentum zu bekehren, und Christen beschuldigen uns, sie zu Hindus zu machen. Es ist jedoch wichtig, unsere Absicht zu kl&auml;ren. Unser Ziel ist es nicht, jemanden zu bekehren, sondern unser Ziel ist es, Menschen zu ermutigen, die Weisheit des wahren Gottes zu suchen. Jedes Kind Gottes hat das <b>Rechts </b>um ihren Glauben an Gott zum Ausdruck zu bringen. Daher teilen wir geduldig Gottes Lehren, unabh&auml;ngig davon, was andere denken oder annehmen.

	Ich habe eine Frage an diejenigen, die vielleicht Zweifel oder Eifersucht hegen. <b>Gott ist als Mensch auf die Erde gekommen und gegangen, aber er hat auch versprochen, zur&uuml;ckzukehren. Kann jemand mit Sicherheit behaupten, dass Gott nur einmal erscheint? </b>Eine solche Behauptung scheint mit wahrer Weisheit unvereinbar zu sein. Gott hat seine R&uuml;ckkehr verk&uuml;ndet, wann immer es auf der Erde Not gibt. Er kommt in schwierigen Zeiten, wenn die Prinzipien des Dharma bedroht sind. Diese Aussage findet sich sowohl in der Bhagavad-Gita als auch in der Bibel. Gott kann jede Form annehmen und seine Lehren &uuml;bermitteln. <b>Es ist ein Fehler, wenn Hindus Krishnas R&uuml;ckkehr als Krishna erwarten und Christen erwarten, dass Jesus als Jesus zur&uuml;ckkehrt. </b>Wenn Gott sich entscheidet, zu kommen, gibt es keine Einschr&auml;nkungen hinsichtlich Zeitpunkt, Ort oder Form. Er mag sich in Formen manifestieren, die f&uuml;r den Menschen nicht erkennbar sind, aber seine Botschaft bleibt im Laufe der Zeit unver&auml;ndert. Dharma ist als g&ouml;ttliches Prinzip von Natur aus konsistent und unver&auml;nderlich, vergleichbar mit wissenschaftlichen Gesetzen. Folglich wird Gott immer das gleiche Dharma vermitteln, unabh&auml;ngig von seinem Namen, seiner Form oder der Religion, durch die er geboren wurde.

	Gott hat bei seinem Erscheinen nie eine bestimmte Religion auf der Erde etabliert. Seine Lehren sind nicht an einen bestimmten religi&ouml;sen Rahmen gebunden, und er bef&uuml;rwortete keine bestimmte Religion und geh&ouml;rte auch keiner Religion an. Stattdessen &uuml;bermittelte er seine g&ouml;ttlichen Prinzipien oder Dharmas, ohne sich auf eine bestimmte Religion zu beziehen. Die Schaffung von Religionen ist ein menschliches Unterfangen. Wenn Gott Fehlverhalten unter Menschen irgendeiner Religionsgruppe bemerkte, wies er sie auf ihre Fehler hin und f&uuml;hrte sie auf dem Weg <b>Gottes richtiger Weg</b>und f&ouml;rderte die Praxis des Dharma unabh&auml;ngig von der Religionszugeh&ouml;rigkeit. Dharmas selbst haben keine Religionen geschaffen. Menschen gr&uuml;ndeten Religionen auf der Grundlage ihres Verst&auml;ndnisses der g&ouml;ttlichen Weisheit, der Sprache, die sie sprachen, und ihres Verhaltens.

	Jede Religion folgt ihrer einzigartigen Methodik und verehrt eine bestimmte Gottheit. F&uuml;r Anh&auml;nger einer Religion ist es &uuml;blich, die mit diesem Glauben verbundenen Rituale einzuhalten. Es ist jedoch wichtig zu verstehen, dass diese religi&ouml;sen Praktiken menschliche Sch&ouml;pfungen sind. Wenn Gott auf der Erde menschliche Gestalt annimmt, h&auml;lt er sich an keine bestimmten religi&ouml;sen Rituale oder Br&auml;uche. Er verehrt auch keine anderen Gottheiten. Religi&ouml;se Praktiken und Rituale sind f&uuml;r Menschen, nicht f&uuml;r Gott. Stattdessen besteht Gottes Rolle darin, die Menschen auf dem Weg zu f&uuml;hren <b>richtige Weg</b>, und offenbaren etwaige M&auml;ngel in ihrer Hingabe. Wenn Gott als Mensch inkarniert, liegt sein Fokus auf der Vermittlung von Wissen &uuml;ber Gott und Gottes Dharmas und nicht auf der Teilnahme an der Verehrung von Gottheiten, wie es Menschen tun.

	Als Gott im Dvapara Yuga als Krishna inkarnierte, verehrte er keine Gottheit. Stattdessen offenbarte er die Weisheit von Paramatma (der H&ouml;chsten Seele) vollst&auml;ndig, als der richtige Zeitpunkt gekommen war. Als Gott im Kali Yuga als Jesus Christus inkarnierte, &uuml;bte er in &auml;hnlicher Weise keine Gottheitsanbetung aus, sondern predigte die Weisheit, die er vermitteln wollte. Seine wahre Gr&ouml;&szlig;e und G&ouml;ttlichkeit werden offenbar, wenn Er etwas vermittelt <b>Weisheit</b>. Zu anderen Zeiten mag er als gew&ouml;hnlicher Mensch erscheinen, ganz wie alle anderen auch. Die Unwissenden verwechseln ihn vielleicht mit einem gew&ouml;hnlichen Menschen, aber diejenigen mit Weisheit k&ouml;nnen es Erkenne Ihn als Gott. Wer vollkommene Weisheit besitzt, kann Ihn identifizieren, wann immer Er auf die Erde herabsteigt. Allerdings erkennen Menschen, die unter dem Einfluss Mayas stehen, Ihn unter keinen Umst&auml;nden an. Dar&uuml;ber hinaus nehmen die Menschen ihn manchmal als einen gew&ouml;hnlichen Menschen wahr, der ihn beleidigt und verschiedene Probleme verursacht.

	Wenn Gott alle paar tausend Jahre als Mensch auf die Erde kommt, k&ouml;nnen Menschen, die Schlangenbrut sind, ihn nicht erkennen. Sie erkennen ihn nicht nur nicht an, sondern unterziehen ihn auch der Folter. Manche fragen sich vielleicht, warum er gefoltert wird, wenn Menschen ihre Mitmenschen normalerweise nicht foltern. Die Antwort liegt in der Tatsache, dass Gott, wenn er als Mensch inkarniert, kein gew&ouml;hnliches Leben f&uuml;hrt. Sein Ziel ist es, g&ouml;ttliche Weisheit im Einklang mit dem Dharma zu vermitteln. Folglich entwickeln diejenigen, die unwissend sind und denen es an Verst&auml;ndnis f&uuml;r den Dharma mangelt, Feindseligkeit ihm gegen&uuml;ber, und dieser Hass kann zu seiner Verfolgung f&uuml;hren. Ohne g&ouml;ttliche Lehren g&auml;be es solche Gegner nicht. Wenn Er jedoch auf Adharmas im menschlichen Verhalten hinweist, werden diejenigen, die sich an Adharmas halten, obwohl sie glauben, dem Dharma zu folgen, ver&auml;rgert sein. Im Laufe der Geschichte haben die Menschen Ihm gegen&uuml;ber in jeder Inkarnation als Mensch Respektlosigkeit gezeigt. Einige waren neidisch auf Jesus, als er g&ouml;ttliche Weisheit lehrte. Sie erkannten seine Gr&ouml;&szlig;e und Weisheit nicht und verurteilten ihn schlie&szlig;lich zum Tode. Er starb wegen der religi&ouml;sen Anh&auml;nger, die dachten, sie seien Gnanis. Die Schlangenbrut hat das Gift der Unwissenheit. Das Leben Christi endete also durch die H&auml;nde der Schlangenbrut.

	Gott wei&szlig; alles &uuml;ber Gott, und die Menschen wissen nichts. Menschen k&ouml;nnen Gottes Dharmas (g&ouml;ttliche Prinzipien) nur dann begreifen, wenn Gott sie offenbart. G&ouml;ttliche Offenbarung ist f&uuml;r den Menschen unerl&auml;sslich, um Einblicke in Gottes Natur und Lehren zu gewinnen. Ein Teil Gottes, der in jedem Atom des Universums vorhanden ist, inkarniert als Mensch. Um f&uuml;r eine bestimmte Zeit auf der Welt zu existieren, ist ein System namens Karma beteiligt. Der Grund f&uuml;r die Geburt eines Menschen wird dem Karma zugeschrieben, aber Gott selbst liegt jenseits des Karma. Daher erzeugt Gott das f&uuml;r seine eigene Geburt notwendige Karma und inkarniert mit diesem Karma. Eine solche Person wird als bezeichnet <b>Swayambhu</b>, was &bdquo;selbstgeboren&ldquo; bedeutet, nicht an Karma gebunden. Ein solches Wesen nennt man <b>Gott oder Tr&ouml;ster (Adarana Karta)</b>. Es wird angenommen, dass sich Gott in der Vergangenheit viele Male als Bhagavan auf der Erde manifestiert hat, obwohl die genaue Anzahl der Wiederherstellungen des Dharma auf der Erde unbekannt bleibt. Viele Geheimnisse haben sich in den letzten Millionen Jahren gel&uuml;ftet, und die aufgezeichnete Geschichte erstreckt sich nur &uuml;ber wenige tausend Jahre. Daher ist unser Wissen &uuml;ber vergangene Ereignisse begrenzt, aber historische Aufzeichnungen weisen auf F&auml;lle hin, in denen Gott als Mensch inkarnierte, um die Menschheit zu f&uuml;hren.

	<b>  Es wird deutlich, dass Gott gelegentlich als Mensch auf der Erde inkarniert und stirbt. </b>Bei tiefer &Uuml;berlegung und mit der Weisheit, die wir besitzen, wird klar, dass Gott vor etwa 5.000 Jahren in Indien und vor etwa 2.000 Jahren in Israel geboren wurde. Diese g&ouml;ttliche Inkarnation war w&auml;hrend seiner Zeit in Israel als Jesus Christus bekannt. Er war f&uuml;r eine begrenzte Zeitspanne von 33 Jahren unter den Menschen auf der Erde pr&auml;sent, geleitet von seinem eigenen vorbestimmten Karma. W&auml;hrend der ersten 30 Jahre seines Lebens lebte Jesus als gew&ouml;hnlicher Jeevatma. In den folgenden drei Jahren &uuml;bermittelte er der Menschheit Atmas Weisheit, w&auml;hrend er zeitweise als Atma lebte.

	Manche Menschen m&ouml;gen meine Aussage in Frage stellen: &bdquo;Die G&ouml;ttlichkeit wird als Mensch auf der Erde geboren.&ldquo; Die G&ouml;ttlichkeit (Gott) breitet sich auf jedes Atom des Universums aus.&lsquo; Breitet sich Gott nicht aus? im gesamten Universum, wenn Er als Mensch geboren wird? Ist Gott, von dem gesagt wird, dass er in allen gegenw&auml;rtig ist, nicht in uns allen gegenw&auml;rtig, nachdem er als Bhagavan auf der Erde geboren wurde? Lassen Sie uns die Antwort anhand einer Analogie untersuchen. Betrachten Sie das Meer, das voller Wasser ist. Wenn wir einen Teil dieses Wassers aus dem Meer in einem kleinen Beh&auml;lter entnehmen, enth&auml;lt der Beh&auml;lter nun Meerwasser, aber das Meer bleibt voller Wasser. Das Wasser im Beh&auml;lter wird als &bdquo;abgetrenntes Wasser&ldquo; bezeichnet, w&auml;hrend das Wasser im Meer &bdquo;ungetrenntes Wasser&ldquo; ist. Sowohl das Meer als auch der Beh&auml;lter haben dasselbe Wasser, ohne dass sich die Eigenschaften des Wassers unterscheiden, mit Ausnahme des Wassers im Beh&auml;lter ist vom Meer getrennt. In &auml;hnlicher Weise k&ouml;nnen wir Gott mit dem Meer vergleichen. Bhagavan ist wie das getrennte Wasser im Beh&auml;lter und unterscheidet sich von Gott als dem Meer. Doch Beh&auml;lterwasser und Meerwasser sind ein und dasselbe; Ebenso sind Bhagavan und Gott identisch. Wenn Wasser in einen Beh&auml;lter gegeben wird, entleert es das Meer nicht und das Meer bleibt voll. Auch wenn ein Teil Gottes als Bhagavan inkarniert, ist Gott weiterhin allgegenw&auml;rtig wie zuvor. Es gibt keine Ver&auml;nderung an Gott, seinen g&ouml;ttlichen Prinzipien oder seiner Allgegenwart, wenn er als Bhagavan erscheint. Ein Teil Gottes wird zu Bhagavan, aber nicht der ganze Gott. Auch wenn Bhagavan nur ein Teil Gottes ist, hat er die gleichen Eigenschaften. Deshalb ist es nicht falsch zu sagen, dass Gott geboren wurde, obwohl nur ein Teil Gottes auf der Erde geboren wurde. Daher ist es nicht falsch zu sagen, dass Jesus &bdquo;Gott&ldquo; ist.

	Manche Menschen stellen vielleicht eine andere Frage: Wenn Jesus Gott ist, warum hat er dann Leiden ertragen, als Menschen ihm Schaden zuf&uuml;gten? Warum wurde er menschlicher Folter und Dem&uuml;tigung ausgesetzt? Sie fragen sich vielleicht auch, warum Jesus ihnen seine g&ouml;ttliche Identit&auml;t nicht offenbarte und seine g&ouml;ttliche Macht nicht nutzte, um diejenigen zu bestrafen, die ihn misshandelt hatten. Hier ist unsere Antwort: Um dies zu verstehen, m&uuml;ssen wir zun&auml;chst ein g&ouml;ttliches Geheimnis begreifen. Im K&ouml;rper eines gew&ouml;hnlichen Menschen gibt es drei Seelen &ndash; Jeevatma, Atma und Paramatma. Unter diesen drei Seelen wohnen Jeevatma und Atma beide im K&ouml;rper. Diese beiden Seelen liegen nicht au&szlig;erhalb des K&ouml;rpers. Die dritte Seele, Paramatma, erstreckt sich innerhalb und au&szlig;erhalb des K&ouml;rpers und durchdringt jedes Atom im Universum. Allerdings beteiligt sich Paramatma nicht aktiv an Handlungen innerhalb oder au&szlig;erhalb des K&ouml;rpers. Die zweite Seele, Atma, ist f&uuml;r alle K&ouml;rperfunktionen verantwortlich. Die erste Seele, Jeevatma, tut nichts anderes, als Freude und Leid zu erleben. Viele Menschen denken vielleicht, dass sie (Jeevatma) diejenigen sind, die jede Handlung ausf&uuml;hren, aber das ist im menschlichen K&ouml;rper nicht der Fall. Atma, das ohne unser Bewusstsein in uns wohnt, f&uuml;hrt die ganze Arbeit aus. Selbst Atma tut nichts nach seinem eigenen Willen. <b>Atma </b>Funktioniert gem <b>Karma</b>, die die zugrunde liegende Ursache jeder Aufgabe ist. Nach dem Gesetz des Karma ist Jeevatma dazu bestimmt, Freude und Leid zu erfahren. Damit Jeevatma diese Erfahrungen im K&ouml;rper machen kann, erleichtert Atma, das im ganzen K&ouml;rper verbreitet ist, diese K&ouml;rperfunktionen. Dazu geh&ouml;ren physiologische Prozesse wie die Verdauung von Nahrungsmitteln, die Regulierung des Herzschlags und die Steuerung von K&ouml;rperfunktionen wie die Trennung von Urin und Schwei&szlig; vom Blut. Die Rolle von Atma bei der Ausf&uuml;hrung dieser K&ouml;rperfunktionen erm&ouml;glicht Jeevatma die Koexistenz im K&ouml;rper. Im Inneren des K&ouml;rpers besteht die Hauptfunktion von Jeevatma darin, Erfahrungen zu machen. Dies ist ein inh&auml;rentes Gesetz, das jeden menschlichen K&ouml;rper beherrscht, unver&auml;nderlich und best&auml;ndig.

	Auch wenn Gott als Mensch geboren wird, funktioniert sein K&ouml;rper nach einem System, das dem eines gew&ouml;hnlichen Menschen &auml;hnelt. In Seinem K&ouml;rper muss Paramatma vorhanden sein, Atma verrichtet die ganze Arbeit und Jeevatma erlebt. Derselbe Prozess findet im K&ouml;rper Gottes statt, wenn Er menschliche Gestalt annimmt. Als Gott als Jesus kam, war sein K&ouml;rper nein anders als ein gew&ouml;hnlicher menschlicher K&ouml;rper. Folglich erlebte Er Leid und Freuden, genau wie jeder Jeevatma es tun w&uuml;rde. Jesus stand im Leben vor zahlreichen Herausforderungen, die er als Jeevatma alle bew&auml;ltigen musste. Um diese Erfahrungen in seinem irdischen Leben zu machen, schuf er sein eigenes Karma und inkarnierte als Mensch. Nun fragen Sie sich vielleicht, was ihn von uns unterscheidet. Es gibt tats&auml;chlich einen wesentlichen Unterschied. Wir haben zuvor gelernt, dass in jedem menschlichen K&ouml;rper nur Atma wirkt. In Bhagavans K&ouml;rper ist es ebenfalls Atma, der die Funktionen ausf&uuml;hrt. Dennoch gibt es einzigartige F&auml;lle, in denen etwas anderes in Bhagavans K&ouml;rper geschieht. Bei bestimmten Gelegenheiten weichen die drei Seelen von ihren herk&ouml;mmlichen Rollen ab und agieren anders. In solchen Momenten gelangt Jeevatma in einen Zustand, in dem es keine Erfahrung gibt, was es Atma erm&ouml;glicht, die Rolle von Jeevatma zu &uuml;bernehmen. Die Worte, die in diesem Zustand aus Bhagavans K&ouml;rper gesprochen werden und von Atma kommen, sind v&ouml;llig spiritueller Natur. Die tiefgreifenden spirituellen Wahrheiten und Gottes Dharmas werden nur offenbart, wenn Atma direkt spricht. In seltenen F&auml;llen verstummen Atma und Jeevatma und Paramatma &uuml;bernimmt und spricht. Solche Vorkommnisse k&ouml;nnen ein- oder zweimal im Leben Bhagavans passieren. Im Leben von Jesus, Krishna und Ravana Brahma gab es Situationen, in denen Paramatma sprach. Wenn Paramatma spricht, folgt Prakruti (die materielle Natur) seinen Worten. Ebenso steht tiefe Weisheit unter seiner Kontrolle, wenn Atma spricht. Im Leben dieser g&ouml;ttlichen Inkarnationen geschah Folgendes: <b>1) Paramatmas Worte &uuml;bten Befehl &uuml;ber Prakruti aus. 2) Atmas Worte vermittelten reine Atma-Weisheit. 3) Jeevatma erlebte Freude und Leid. </b>Paramatma sprach, als zu Jesu Lebzeiten ein Sturm im Meer ausbrach und er dem Sturm befahl, sich zu beruhigen. Es wurde deutlich, dass Prakruti Seinen Worten folgte und nachlie&szlig;. Als Atma dr&uuml;ckte er reine Weisheit aus. Als Jeevatma erlebte er im weiteren Verlauf seines Lebens auch verschiedene Freuden und Sorgen. &Auml;hnliche Ereignisse ereigneten sich in Krishnas Leben, als er der Sonne befahl und Saindhava t&ouml;tete. Es gab auch eine Gelegenheit, bei der Krishna eine universelle Form offenbarte und erkl&auml;rte: &bdquo;Ich bin Paramatma.&ldquo; Als Atma vermittelte er tiefe Weisheit in Form der Bhagavad-Gita und erlebte die Freuden und Sorgen des Lebens f&uuml;r die verbleibende Zeit als Jeevatma. Dieses Zusammenspiel der drei Seelen, die unterschiedliche Rollen &uuml;bernehmen, findet ausschlie&szlig;lich in Bhagavans K&ouml;rper statt. Die G&ouml;ttlichkeit nimmt nur einmal in Tausenden oder sogar Millionen von Jahren menschliche Gestalt an. Wenn Gott auf der Erde geboren wird, lebt er &uuml;berwiegend als Jeevatma, &auml;hnlich wie andere. Allerdings spricht er bei Bedarf mehrmals im Jahr f&uuml;r kurze Zeit als Atma. Das Sprechen als Paramatma kommt, wenn &uuml;berhaupt, sehr selten vor. Die Notwendigkeit, als Atma zu sprechen, entsteht, weil Er gekommen ist, um Dharmas zu vermitteln. Dies stellt Gottes System dar, das sich vom System der Maya unterscheidet.

	Solange Gott sich wie ein gew&ouml;hnlicher Mensch verh&auml;lt, gibt es keine Probleme. Maya ist jedoch dagegen, wenn Gott Weisheit als Atma vermittelt. Maya ist ein grunds&auml;tzlicher Gegner der Weisheit Gottes. Daher ist Maya, die oft als Satan bezeichnet wird, wachsam, wenn es darum geht, Einzelpersonen davon abzuhalten, ihre Loyalit&auml;t von Mayas Seite abzuwenden und sich der Weisheit Gottes zuzuwenden. Dar&uuml;ber hinaus sucht Maya aktiv nach denjenigen, die Interesse und Verst&auml;ndnis f&uuml;r Weisheit zeigen, und versucht, sie wieder auf ihre Seite zu ziehen. Aus diesem Grund haben viele Menschen nur begrenztes Interesse daran, die wahre g&ouml;ttliche Weisheit anzunehmen, was gr&ouml;&szlig;tenteils auf den Einfluss der Maya zur&uuml;ckzuf&uuml;hren ist. Folglich k&ouml;nnen selbst diejenigen, die &uuml;ber eine gewisse Weisheit verf&uuml;gen, vom Weg abweichen. An dieser Stelle k&ouml;nnten Sie eine Frage stellen: &bdquo;Heutzutage gibt es zahlreiche Gl&auml;ubige, die ihrem Glauben zutiefst verpflichtet sind. Sie suchen Weisheit bei verschiedenen spirituellen Gurus und zeigen unersch&uuml;tterliche Hingabe an Gottheiten. Fast jeder ist Gott ergeben, au&szlig;er a wenige Atheisten. Ist es m&ouml;glich, die Anh&auml;nger von Sai Baba und Ayyappa zu &auml;ndern? Neben den seit langem bestehenden Tempeln im Land werden zahlreiche neue Tempel zu Ehren von Shirdi Sai Baba und Ayyappa Swamy gebaut. Es scheint, dass Maya ihre Hingabe nicht behindert hat. Wie k&ouml;nnen wir Ihre Sichtweise akzeptieren?&ldquo; Hier ist meine Antwort.

	Maya steht in direktem Gegensatz zu Gottes Weg und seiner h&ouml;chsten Weisheit. Sein Widerstand gegen die tiefe Weisheit Gottes zeigt die gro&szlig;e Macht der Maya, die als bezeichnet wird <b>&bdquo;Maya duratyaya&ldquo; </b>in der Bhagavad-Gita. Das sagte Gott in der Bhagavad-Gita <b>es ist unm&ouml;glich, Maya zu erobern; </b>daher wird es bekannt <b>Maya t&auml;uscht Menschen auf unvorstellbare Weise. </b>Daher bleiben die Funktionsweisen der Maya weitgehend schwer fassbar und geheimnisvoll, sodass Einzelpersonen anf&auml;llig f&uuml;r ihre T&auml;uschungen sind. Maya funktioniert, indem sie ihre eigene Version der Weisheit erschafft. Da Gott selten alle Jahrtausende als Bhagavan auf der Erde inkarniert, produziert Maya zahlreiche Nachahmungen von Bhagavans, um die Menschen zu verwirren und davon abzuhalten, den echten Bhagavan zu erkennen. Es f&uuml;hrt viele Arten von Weisheit ein, was es f&uuml;r viele schwierig macht, wahre Weisheit von F&auml;lschung zu unterscheiden. Wenn es auf der Erde viele Bhagavans gibt, die mit Maya in Verbindung stehen, wer wird dann den wahren Bhagavan erkennen, der selten auf die Erde kommt? Wenn es Bhagavans gibt, die zahlreiche &uuml;bernat&uuml;rliche Taten und Wunder (Mahatyas) vollbringen, wer kann dann den wahren Bhagavan identifizieren, der in seinem Leben nur ein oder zwei Mahatyas vollbringt? Auf diese Weise ist es unm&ouml;glich geworden, Gottes Weisheit und Bhagavan zu erkennen. Gott zeigte seine Realit&auml;t in der universellen Form, etwas, das niemand jemals gesehen hat und jemals verstehen kann. Aber Maya veranlasste einige Leute zu schreiben, dass viele Devatas eine universelle Form zeigten, darunter Saibaba und Veerabrahmam, sodass die Menschen Krishnas universelle Form nicht als die h&ouml;chste betrachten. Wer glaubt, dass die universelle Form, die Krishna in der Bhagavad-Gita zeigt, die gr&ouml;&szlig;te von allen ist? Daher konnten Christen Jesus Christus nicht als Bhagavan anerkennen; Ebenso konnten Hindus Krishna nicht als Bhagavan kennen. Hindus konnten Krishna nicht als den wahren Gott betrachten. W&auml;hrend einige ihn als den letzten aller anderen G&ouml;tter betrachten, erkennen andere ihn nicht einmal als eine untergeordnete Gottheit an, weil sie seine Taten als boshaft empfinden. Niemand z&auml;hlt Krishna &uuml;berhaupt zu Gott wie Shirdi Sai Baba. In &auml;hnlicher Weise haben viele in der christlichen Tradition, obwohl sie Jesus Christus als den Sohn Gottes betrachten, das Wesentliche seiner Lehren nicht erfasst. Unter dem Einfluss der Maya verehren Christen das Kreuz, das an der Kreuzigung Jesu beteiligt war, anstelle von Jesus selbst. Sie dachten, sie w&uuml;rden als Hindus gez&auml;hlt, wenn sie Gottesdienste verrichteten <b>Jesus</b>' <b>Idol</b>; Daher beten sie zum Kreuz. W&auml;hrend Jesus sagte: &bdquo;<b>Wer mich gesehen hat, hat meinen Vater gesehen</b>&bdquo;Ist es nicht Mayas Werk, das Christen dazu brachte, das Kreuz zu respektieren, das den Tod Jesu verursachte, und nicht das Idol Jesu?&ldquo; Maya f&uuml;hrt Menschen strategisch vom Weg Gottes weg, auch wenn sie glauben, dass sie fest auf diesem Weg sind. Es untergr&auml;bt die Glaubw&uuml;rdigkeit derjenigen, die Gottes Weisheit verstehen und die Wahrheit sagen, und l&auml;sst ihre Worte minderwertig oder ungeh&ouml;rt erscheinen. Dar&uuml;ber hinaus hat Maya zur Bildung verschiedener Religionen und zur Illusion beigetragen, dass es f&uuml;r jede Religion unterschiedliche G&ouml;tter gibt. Obwohl es eine h&ouml;chste Macht gibt, die das Universum regiert, hat Maya den Glauben an mehrere G&ouml;tter gef&ouml;rdert, die verschiedenen Religionen entsprechen. Der Einfluss der Maya ist tiefgreifend und f&uuml;hrte zur Entstehung einer Vielzahl von G&ouml;ttern und religi&ouml;sen &Uuml;berzeugungen. Allein im christlichen Glauben verehren einige Gl&auml;ubige Maria, w&auml;hrend andere Christus anbeten. Ebenso gibt es im Hinduismus zahlreiche Gottheiten. Angesichts dieser Vielfalt ist es nun unerl&auml;sslich, sich auf die Suche nach dem ultimativen Oberhaupt aller Gottheiten und Religionen zu begeben. Allerdings ist diese Aufgabe nicht einfach. <b>Indem wir zun&auml;chst Maya und ihre Auswirkungen erkennen, k&ouml;nnen wir anschlie&szlig;end den Weg zu Gott suchen.</b> Daher ist es wichtig festzustellen, ob der Weg, den Sie gerade gehen, zu Gott f&uuml;hrt oder von Maya beeinflusst wird.

	Es gibt eine unendliche &uuml;bernat&uuml;rliche Kraft, die formlos, namenlos und undefiniert ist. Nennen wir es &bdquo;Paramatma&ldquo;. &Uuml;ber Paramatma, die Quelle aller Existenz, ist sehr wenig bekannt. Paramatma muss sich pers&ouml;nlich manifestieren und offenbaren, denn obwohl er jedes Atom durchdringt, bleiben wir darauf beschr&auml;nkt, nur die Pancha Bhutas (f&uuml;nf Grundelemente) zu verstehen. Unsere Sinne k&ouml;nnen nur das wahrnehmen, was in ihrer Reichweite liegt, und Paramatma liegt au&szlig;erhalb der Reichweite unserer Sinne. Wir k&ouml;nnen ihn nur verstehen, wenn er menschliche Gestalt annimmt, sich sichtbar macht und seine Weisheit offenbart. Sonst sind wir uns seiner nicht bewusst. Daher muss Paramatma als Mensch inkarnieren und seine Weisheit weitergeben. Er tritt hervor, um seine Dharmas zu enth&uuml;llen, aber diese Lehren verblassen mit der Zeit und erfordern seine R&uuml;ckkehr, um sie wiederherzustellen. Paramatma, der Sch&ouml;pfer des Universums, entscheidet sich oft daf&uuml;r, sich als Mensch zu manifestieren, eine &auml;hnliche Existenz wie ein gew&ouml;hnlicher Mensch zu f&uuml;hren und seinen Zweck zu erf&uuml;llen. Paramatma in einer solchen Form zu identifizieren, ist eine herausfordernde Aufgabe. Trotz Paramatmas zahlreichen Inkarnationen auf der Erde f&auml;llt es den Menschen bis heute schwer, Seine Anwesenheit zu erkennen.

 	Diejenigen, die Bhagavan nicht erkennen, wenn er anwesend ist, beginnen oft, ihn mit gro&szlig;er Hingabe anzubeten, nachdem er gegangen ist. Sie verehren ihn nicht, weil er Paramatma ist, sondern weil sie glauben, dass er gro&szlig;e Weisheit besitzt oder dass ihre W&uuml;nsche erf&uuml;llt werden. Sie erkennen jedoch immer noch nicht, dass Er Paramatma ist. Wir k&ouml;nnen die Inkarnationen von Paramatma anhand bestimmter Prinzipien erkennen. Auf diese Weise k&ouml;nnen wir erkennen, dass Paramatma am Ende des Dvapara Yuga als Krishna und sp&auml;ter im Kali Yuga als Jesus kam. Paramatma k&ouml;nnte auch zu einem sp&auml;teren Zeitpunkt gekommen sein, aber wir wissen es nicht.

	Unabh&auml;ngig davon, wie viele Geburten Paramatma hatte, gibt es keine &Auml;hnlichkeiten von einer Geburt zur anderen, au&szlig;er in seinen Dharmas. Obwohl die Essenz von Paramatma bei Krishna, der im Dvapara Yuga geboren wurde, und Jesus, der im Kali Yuga geboren wurde, gleich bleibt, unterscheiden sich ihre &auml;u&szlig;eren Leben erheblich. Sri Krishna genoss ein Leben in Wohlstand und hatte acht Frauen. Mit ihrem Einverst&auml;ndnis entf&uuml;hrte er auch seine erste Frau und t&ouml;tete seine Feinde. Nachdem man all dies beobachtet hat, wird es f&uuml;r jeden schwierig, Ihn als Bhagavan zu erkennen, der von einem Teil von Paramatma durchdrungen ist.

	Im Leben Jesu, der im Kali Yuga geboren wurde, gab es weder L&uuml;gen noch T&auml;uschungen. Jesus war sanftm&uuml;tig und hielt auch die andere Wange hin, wenn er von einem Feind geschlagen wurde. Er hatte keine Lust auf Frauen. Krishna und Jesus sind in weltlichen Angelegenheiten sehr unterschiedlich. Sogar Gurus beider Religionen irren sich in Bezug auf diese beiden. Hindu-Gurus kritisieren Jesus, indem sie fragen: &bdquo;Warum starb Jesus durch die Hand gew&ouml;hnlicher Menschen und warum rettete er sich nicht selbst?&ldquo; Warum musste er sterben, wenn er die g&ouml;ttliche Macht hatte, die Toten aufzuerwecken? Warum litt er, als er ans Kreuz genagelt wurde?&ldquo; In &auml;hnlicher Weise kritisieren Kirchenpastoren Krishna, indem sie argumentieren: &bdquo;Wie kann er Gott werden, wenn er viele Frauen hatte?&ldquo; Auf diese Weise konzentrieren sie sich auf die weltlichen Aspekte des Lebens von Jesus und Krishna, aber niemand denkt dar&uuml;ber nach, warum sich solche Ereignisse in ihrem Leben ereigneten. Paramatma selbst sagte, dass ihn niemand erkennen konnte, als er auf die Erde kam. Seine Aufgabe besteht darin, so zu tun, als w&uuml;rde ihn niemand erkennen. Seine Mission ist es, ein unbekannter Dieb unter uns zu sein und unsere Unwissenheit zu stehlen. Zuvor haben wir erw&auml;hnt, dass Gott nicht durch weltliche Angelegenheiten verstanden werden kann. <b>Gott kann nur durch Gottes Weisheit erkannt werden. </b>Selbst diejenigen, die behaupten, Gurus zu sein, verstehen dieses Prinzip oft nicht und versuchen, Gott anhand weltlicher Ma&szlig;st&auml;be zu messen. Wenn Gott auf die Erde kommt, erkennt ihn daher niemand. Diejenigen, die aufgrund weltlicher Angelegenheiten Wunder vollbringen, m&ouml;gen gro&szlig; und g&ouml;ttlich erscheinen, aber der wahre Gott wird oft &uuml;bersehen. Dies liegt daran, dass die Anwesenheit Gottes nicht anhand &auml;u&szlig;erer, weltlicher Faktoren identifiziert werden kann. Stattdessen kann die Inkarnation Gottes auf der Grundlage des Dharma erkannt werden. Der gleiche Dharma findet sich in der Bhagavad-Gita und in den Lehren Jesu, die es uns erm&ouml;glichen, sie als eins zu erkennen. Es gibt jedoch keine weiteren &Auml;hnlichkeiten zwischen ihnen in &auml;u&szlig;eren, weltlichen Angelegenheiten.

	Es gibt nur einen Gott f&uuml;r die ganze Welt, der als Mensch mit vielen Namen und Formen inkarniert, um die Menschheit zu ihm zu f&uuml;hren. Leider erkennen viele Menschen dies nicht und schaffen Religionen, die dar&uuml;ber streiten, wessen Gott gr&ouml;&szlig;er ist. Sie verstehen nicht, dass Gott in ihrer Religion und Gott in anderen Religionen derselbe sind. Menschen neigen dazu, ihre Religion mehr zu lieben als Gott, was eine gro&szlig;e Ignoranz darstellt. Es ist wichtig zu wissen, dass es nur einen Gott gibt, auch wenn wir ihn mit unterschiedlichen Namen nennen. Paramatma entscheidet &uuml;ber seine Rolle auf der Grundlage von Zeit, Nation und Volk und inkarniert als Bhagavan, um seine Dharmas zu lehren. Seine Geburten sind nicht gleich, aber sein Ziel ist immer dasselbe &ndash; seine Dharmas zu lehren. Als er als Jesus oder Krishna kam, waren die Dharmas, die er lehrte, dieselben. Gott und seine Dharmas m&ouml;gen unterschiedlich erscheinen, denn als Paramatma als Krishna und Jesus geboren wurde, unterschieden sich ihre Namen, Geburtsl&auml;nder und Pers&ouml;nlichkeiten.

	Nehmen wir als Beispiel den von Paramatma dargelegten Dharma. Sri Krishna sagte in der Gita: <b>&bdquo;Paritranaya Sadhunam vinasaya cha</b><b>dushkrutam&ldquo;, </b>was bedeutet<b>&bdquo;Ich werde die Gerechten besch&uuml;tzen und die B&ouml;sen vernichten.&ldquo; </b>Einige christliche Prediger nehmen diese Worte und sagen zu Hindus: &bdquo;Ihre Religion bietet keinen Schutz, und Ihr Gott wird nur S&uuml;nder t&ouml;ten.&ldquo; In unserer Religion gibt es jedoch Schutz f&uuml;r alle S&uuml;nder, und Jesus kam auf die Erde, um S&uuml;nder zu retten. W&auml;hrend dein Gott S&uuml;nder und b&ouml;se Menschen in deiner Religion vernichten mag, wird mein Gott (Jesus) dich besch&uuml;tzen. Daher behaupten Christen, dass ihr Gott der wahre Gott sei. Die Christen verstanden nicht die wahre Bedeutung dessen, was Herr Jesus diesbez&uuml;glich sagte, und die Hindus verstanden nicht die Bedeutung des Verses, den Krishna in der Gita sagte. Daher erscheinen ihnen Krishnas Worte und die Worte Jesu unterschiedlich. Sie glaubten, dass Krishna und Jesus unterschiedlich seien, wussten aber nicht, dass sie gleich seien und dass die Worte, die sie &auml;u&szlig;erten, dieselbe Bedeutung h&auml;tten. Die Worte &bdquo;die S&uuml;nder und B&ouml;sen vernichten&ldquo; bedeuten, dass sie die Waffe von verwenden <b>'Lehren' </b>um das Karma der S&uuml;nde und des B&ouml;sen zu beseitigen und sie rein zu machen. Wenn die B&ouml;sen rein werden, werden sie nicht in S&uuml;nden gefangen, sondern werden gerecht. Dann wird es keine b&ouml;sen Menschen mehr geben. Daher bedeuten die beiden Ausdr&uuml;cke &bdquo;in der Gita sagen, dass Krishna die B&ouml;sen beseitigen wird&ldquo; und &bdquo;in der Bibel sagen, dass Jesus dich vor S&uuml;nden besch&uuml;tzen wird&ldquo; dasselbe.

	Obwohl Jesus und Krishna unterschiedliche Sprachen sprachen, unterschiedliche Individuen waren und unterschiedliche Namen hatten, war der Zweck ihrer Worte derselbe. Aufgrund der Unf&auml;higkeit der Menschen, Gottes Konzept vollst&auml;ndig zu verstehen, und ihrer Tendenz, Seine Worte nach ihren Vorlieben zu interpretieren, spalteten sie den Gott, der denselben Dharma verk&uuml;ndete. Wann Hindus kritisieren Jesus und Christen behaupten, dass Krishna weder Gott noch Paramatma ist. Der K&ouml;nig und Vater von Paraloka, das Oberhaupt des Universums, das die ganze Welt durchdringt und in uns wohnt, lacht und wei&szlig;, dass diese Menschen blind sind, obwohl sie Augen haben. Krishna sagte in der Gita: &bdquo;Ich werde kommen, wenn eine Bedrohung f&uuml;r den Dharma besteht.&ldquo; Hindus erkennen ihn jedoch nur dann als Gott, wenn er in der gleichen Weise wie zuvor erscheint &ndash; mit Pfauenfedern, einer Fl&ouml;te und dem Chakra. Wenn Gott in einer anderen Form geboren wird, sagen sie: &bdquo;Du bist nicht unser Gott.&ldquo; In der Bibel sagte Jesus Christus, dass er wiederkommen w&uuml;rde. Christen werden Jesus Christus nur dann erkennen, wenn er in der gleichen Weise wie zuvor erscheint &ndash; mit Nagelnarben an seinen H&auml;nden und Speerspuren an seiner Seite. Sie werden sagen: &bdquo;Du bist nicht unser Herr&ldquo;, wenn Er in einer anderen Form kommt. Aufgrund der Unterschiede in ihrem Aussehen und Verhalten konnten Christen nicht erkennen, dass Jesus Krishna war, und ebenso konnten Hindus nicht anerkennen, dass Krishna Jesus war. Deshalb sagte Gott in der Gita<b>&bdquo;Die Leute entehren mich, weil sie mich und mein Mahatya nicht kennen.&ldquo; </b>Einige hinduistische Gurus werden Weisheit lehren und Krishna mit Upadesa versorgen, wenn Er wiederkommt. Wenn Jesus wiederkommt, wie es in der Bibel hei&szlig;t, werden ihn christliche Prediger, die ihn m&ouml;glicherweise nicht erkennen, taufen. Solange es Gurus gibt, die Krishna Weisheit lehren, wenn er seine Form und seinen Namen &auml;ndert, kann man sagen, dass in der hinduistischen Religion Unwissenheit herrscht. Ebenso kann man sagen, dass sie sich Gottes nicht vollst&auml;ndig bewusst sind, solange es Christen gibt, die Jesus die Bibelverse erkl&auml;ren, wenn er seine Gestalt &auml;ndert und vor ihnen erscheint.

	Es gibt einen starken Grund, warum selbst die gro&szlig;en Gnanis Gott nicht erkennen oder Gottes Weisheit nicht verstehen konnten, als Gott auf die Erde kam. Bevor man den Grund versteht, sollte man sich mit dem Sichtbaren vertraut machen <b>Schaffung</b>. Es gibt einen bedeutenden Gegner Gottes, weshalb Gott nicht vollst&auml;ndig verstanden wird. Christen nennen es &bdquo;Satan&ldquo;, Hindus nennen es &bdquo;Maya&ldquo; und Muslime nennen es &bdquo;Shaitan&ldquo;. Um das Geheimnis von etwas mit Namen wie zu verstehen <b>Maya, Satan oder Shaitan</b>, muss man zun&auml;chst das Geheimnis der Sch&ouml;pfung verstehen. Lassen Sie uns weiter unten auf die Details eingehen
  </div></div>
</span>`
},
{
chapterName: "Geheimnis der Schöpfung",
chapterNumber: 1,
pageNumber: 1,
verse: ``,
meaning: ``,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Paramatma (Gott) war vor der Erschaffung des Universums weder männlich noch weiblich. Paramatma wollte das Universum erschaffen und erschuf so das weibliche Prakruti oder Maya (Satan). Er ermittelte die erforderlichen Eigenschaften und alle dafür notwendigen Methoden. Da Prakruti weiblich war, stand Paramatma in starkem Kontrast zu ihr, und diese Eigenschaft ist als Purusha (männlich) bekannt. Paramatma wollte, dass Prakruti Ihm völlig entgegengesetzt war, also gewährte Er ihr die gleiche Autorität, weil Er glaubte, dass das Spiel spannender sein würde, wenn beide Gegner die gleiche Stärke hätten. Prakruti (Satan) steht im Gegensatz zu Paramatma, ist aber kein Feind. Obwohl es für Gott (Paramatma) natürlich ist, auf den Widerstand Satans (Prakruti) zu stoßen, sind sie keine Feinde voneinander.

  Paramatma, der Prakruti erschaffen hat, wird sie schlie&szlig;lich in sich aufnehmen. Er ist der Vater, Ehemann und Zerst&ouml;rer von Prakruti sowie die Kraft in ihr. Paramatma, der riesig ist, erschuf Prakruti und nimmt an einem Spiel namens &bdquo;Jagath&ldquo; teil. In diesem Spiel verkleidet sich Paramatma als Purusha (m&auml;nnlich), obwohl er au&szlig;erhalb des Spiels weder m&auml;nnlich noch weiblich ist. Prakruti ist in f&uuml;nf Elemente unterteilt &ndash; Himmel, Luft, Feuer, Wasser und Erde &ndash; und wird Prapancha genannt. Nach der Erschaffung von Prakruti wollte Paramatma einen Jagath erschaffen, der aus Lebewesen besteht, die Geburt und Tod erleben. Er erreichte dies, indem er Lebewesen mit Atma erschuf und Jagath innerhalb der Prapancha baute. Auf Telugu bedeutet 'Und'bedeutet Geburt, und <strong>Bewegung</strong>bedeutet Tod. Daher werden alle Lebewesen treffend als &bdquo;<strong>Jagath</strong>,&lsquo; was darauf hinweist, dass es aus Geburt und Tod besteht.

  Paramatma erschuf Jagath, bestehend aus Lebewesen innerhalb von Prakruti. Während Prakruti (weiblich) und Paramatma (Purusha) als gleichberechtigt gelten, wurde Jagati später getrennt geboren. Bisher hat Paramatma Prakruti (Prapancha) und Jagath erschaffen, was zu drei Komponenten führte, darunter Paramatma. Ursprünglich erschuf Paramatma, der weder Mann noch Frau war, Prakruti. Dann verwandelte sich Paramatma in Purusha (Atma), nahm Prakruti als seine Frau und gemeinsam brachten sie einen einzigartigen Nachkommen namens Jagath zur Welt. Wenn wir diese Beziehungen außer Acht lassen, hat Paramatma drei verschiedene Teile geschaffen – Prakruti, Purusha und Jagath. Prakruti ist weiblich, Paramatma ist männlich (Purusha) und Jagath sollte als nicht-binär (weder männlich noch weiblich) betrachtet werden. Das Hauptspiel besteht darin, dass Paramatma und Prakruti Jagath (nicht-binär) ziehen, der zwischen ihnen existiert. Für dieses Spiel gibt es Regeln. Obwohl Paramatma die Regeln definiert hat, nimmt Er am Spiel gemäß den Regeln teil, die Er aufgestellt hat, obwohl Er der Schöpfer von allem und über allem ist. Dieses Spiel hat, wie andere auch, ein Zeitlimit. Das Zeitlimit für das Jagath-Spiel beträgt 1000 Yugas oder 108 Crores Jahre, ähnlich wie beim Fußball ein Zeitlimit von 90 Minuten oder beim Cricket ein Zeitlimit von 50 Overs besteht. Die Spielerlebnisse werden nachts unterbrochen und tagsüber fortgesetzt, wobei sich jede Spiel- und Ruhephase über 108 crores (1,08 Milliarden) Jahre erstreckt.

  Paramatma, unspezifisch und undefiniert, schuf zunächst Prapancha (ohne Lebensform) und brachte anschließend die Lebewesen (Jagath) hervor. Paramatma erschuf Prakruti und wurde als Purusha anerkannt. Er erschuf Atma und teilte Prakruti, das mit Atmas Samen schwanger wird, in fünf Teile. Ein solches Prakruti wird Pancha Bhutas oder Prapancha genannt. Paramatma teilte Atma und Jeevatma in drei Teile: Jeevatma (das Lebensform Jagath), Atma und Paramatma. Er wurde als Paramatma anerkannt, nachdem er Jeevatmas und Atma geschaffen hatte. Er wurde neben Atmas (Jeevatma und Atma) als Paramatma und neben Prakruti als Purusha anerkannt. Es gibt eine Grundlage dafür, Ihn Purusha zu nennen, wenn es Prakruti und Paramatma gibt, wenn Seelen anwesend sind. Wenn Prakruti und Atmas nicht existieren, ist es nicht möglich, Ihn zu definieren. Die Lebensform Jagath wurde aus Prakruti und Purusha geboren. Paramatma plante, dass Mutter und Vater in Jagath die Attribute Prakruti und Purusha haben.

  Prakruti besitzt Eigenschaften, die denen von Purusha entgegengesetzt sind. Allerdings besteht Jagath aus Attributen sowohl von Prakruti als auch von Purusha. Die Lebensform Jagath verkörpert sowohl Paramatma-bezogene Jeevatma und Atmas als auch Prakruti-bezogene Körper und Gunas. Der Glaube an die Existenz Gottes stimmt mit Atma überein, während die entgegengesetzte Ansicht, dass Gott nicht existiert, mit Prakruti übereinstimmt. Die Menschen in Jagath weisen sowohl Merkmale von Prakruti als auch von Purusha auf. Um die Eigenschaften von Prakruti und Purusha zu symbolisieren, wurden Frauenkörper so geschaffen, dass sie Prakruti ähneln, während Männerkörper so gestaltet wurden, dass sie Paramatma darstellen. Es wurden auch nicht-binäre Individuen geschaffen, um Jagath zu symbolisieren, was darauf hindeutet, dass Jagath zusätzlich zu Prakruti und Paramatma existiert. Frauen, Männer und nicht-binäre Individuen symbolisieren Prakruti, Paramatma und den lebenden Jagath. Prakruti = Frauen, Jagath = Nicht-binär und Paramatma = Purusha (männlich). Gott machte seine Schöpfung bekannt, indem er Frauen erschuf, die Prakruti ähnelten, nicht-binäre Individuen, um Jagath zu symbolisieren, und Männer, die Paramatma repräsentierten. Gott brachte Kinder durch die Vereinigung von Männern und Frauen auf die Welt, um zu veranschaulichen, dass der lebende Jagath aus Atma und Prakruti geboren wird. Die sichtbare Mutter, der Vater und die Nachkommen veranschaulichen, wie die Schöpfung ursprünglich stattfand. Viele Menschen denken trotz ihrer Intelligenz oft nicht darüber nach, warum Männer sich von Frauen unterscheiden und warum Nachkommen sowohl von Männern als auch von Frauen geboren werden. Um Spiritualität wirklich zu verstehen, ist es wichtig, die Grundlagen der Spiritualität zu verstehen <b>„Geheimnis der Schöpfung“</b> in der spirituellen Bildung.

  Es ist wichtig zu verstehen, dass das Spiel zwischen Gott und Prakruti freundschaftlicher Natur ist. Prakruti und Paramatma liefern sich ein sanftes Tauziehen, bei dem jeder versucht, Jeevatma in diesem Spiel auf ihre jeweiligen Seiten zu ziehen. Paramatmas Pflicht besteht darin, Jeevatma Weisheit zu vermitteln und "Führe sie zu Ihm. " Umgekehrt hält Prakruti in Form von Maya mit seiner Gunas-Waffe die Menschen beschäftigt und hindert sie daran, über Gott nachzudenken. Prakruti verstrickt den Einzelnen in seine täglichen Aktivitäten, lenkt seine volle Aufmerksamkeit auf weltliche Bestrebungen und hindert ihn durch den Einfluss von Verlangen und damit verbundenen Gunas daran, sich Gott zuzuwenden. Das größte Spiel zwischen Paramatma und Prakruti bleibt namenlos. In der Form von Maya zieht Prakruti jeden auf subtile Weise auf seine Seite, oft ohne dass er sich dessen bewusst ist. Wenn jemand in Jagath an Gott denkt und nach Wissen über Ihn strebt, neigt Maya (Prakruti) dazu, sich auf ihn zu konzentrieren und ihn zu verführen. Maya (Satan) erscheint in diesem andauernden Kampf zwischen Gott und Satan stärker als Gott. Derzeit sind ihm 99 Prozent der Menschen treu. In einem solchen Szenario, in dem die Niederlage Gottes unvermeidlich erscheint, sollte Paramatma danach streben, die Oberhand zu gewinnen.

  Im Rahmen seiner Bemühungen wird Paramatma als Mensch unter der Menschheit inkarnieren und von sich selbst sprechen, mit dem Ziel, die Menschen zu ihm zu führen. Wie bereits erwähnt, gibt es keinen wahren Gegner und jede Seite verfolgt ihre eigene Strategie. Sowohl Satan (Maya) und Gott koexistieren in jedem Menschen, aber Einzelpersonen sind sich ihrer Anwesenheit oft nicht bewusst und kämpfen darum, Gott oder Maya zu erkennen. Der Mensch weiß oft nicht, auf wessen Seite er steht. Gott strebt danach, Menschen zu befreien, die vom Einfluss Mayas gefangen sind, und in diesem Streben wird Paramatma als Sohn Gottes auf der Erde geboren. Den Regeln des kosmischen Spiels folgend, darf er jedoch seine Identität als Sohn Gottes nicht preisgeben. Wenn Gott also als Mensch inkarniert, spricht er von Paramatma als einem gewöhnlichen Individuum. Paramatma vermittelt seine Weisheit und stellt sein Dharma wieder her. Umgekehrt formuliert Maya Strategien, um den Sohn Gottes als unwissend und töricht darzustellen. Es erschafft Gurus und Swamijis, die Mayas Adharmas als Dharmas fördern und die Lehren des Sohnes Gottes als Adharmas präsentieren. Maya konkurriert durch diese Gurus und Swamijis mit dem Sohn Gottes und führt dazu, dass die Menschen ihre Lehren annehmen, anstatt Gottes Weisheit. Maya verwendet Begriffe wie Paramatma, Moksham, Weisheit und Praxis, um den Menschen ihre Adharmas zu vermitteln, was es schwierig macht, Gottes Dharma von Satans Adharmas zu unterscheiden.

  Wenn jemand versucht, Gott zu finden, macht Maya ihn unfähig, zwischen Dharmas und Adharmas zu unterscheiden, was ihn dazu bringt, alles zu glauben, was ihm präsentiert wird. Es ist eine Grundregel des kosmischen Spiels, dass sowohl Satan (Maya) als auch Gott ihre Anwesenheit auf der Erde nicht offen offenbaren sollten. Wenn Paramatma als Bhagavan auf der Erde inkarniert, verzichtet Er darauf, zu erklären: „Ich bin Paramatma.“ Nach der gleichen Regel verkündet Prakruti bei seiner Geburt auf der Erde nicht: „Ich bin Maya.“ Wenn Maya jedoch inkarniert, kann sie behaupten: „Ich bin Bhagavan.“ Diesem Prinzip folgend bezeichnet sich Maya (Satan) als Bhagavan (der Sohn Gottes), vollbringt zahlreiche Wunder und manifestiert sich in der Form verschiedener Swamijis. Wenn Paramatma an einem Ort auf der Erde geboren wird, erschafft Prakruti viele Individuen, die den Namen Bhagavan tragen. Paramatmas Geburt dient ausschließlich der Vermittlung Seiner Dharmas, ohne dass er offen als Bhagavan anerkannt wird. Gleichzeitig erzeugt Maya bereits vor der Geburt von Paramatma viele mit dem Namen Bhagavan. Maya lässt die Menschen ihre Worte hören und hindert sie daran, den Worten des echten Bhagavan zuzuhören. In diesem kosmischen Spiel übt Maya ihren Einfluss aus und Gott erfüllt seinen Zweck.

  W&auml;hrend Maya im menschlichen K&ouml;rper st&auml;ndig die Form von Gunas annimmt, existiert Gott in der Form von Atma im K&ouml;rper. Wir haben bereits erw&auml;hnt, dass Maya und Paramatma als Menschen auf der Erde inkarnieren w&uuml;rden. Es ist wichtig zu verstehen, welche K&ouml;rper sie annehmen werden. Maya inkarniert in einem m&auml;nnlichen K&ouml;rper als Bhagavan und in einem weiblichen K&ouml;rper als Bhagavati. Paramatma inkarniert konsequent in einem m&auml;nnlichen K&ouml;rper. Als Frau tr&auml;gt Prakruti normalerweise einen weiblichen K&ouml;rper, kann sich aber auch in einem m&auml;nnlichen K&ouml;rper manifestieren, um andere zu t&auml;uschen. Es kann schwierig sein, den wahren Bhagavan in den Formen Bhagavati und Bhagavan zu erkennen. Es ist wichtig zu beachten, dass Bhagavan immer als Mann inkarniert wird. Der himmlische Vater Paramatma wurde als Jesus in m&auml;nnlicher Form inkarniert. Seine Geburt erfolgte durch eine jungfr&auml;uliche Geb&auml;rmutter ohne die Beteiligung eines menschlichen Vaters. Paramatma inkarniert auf der Erde, wenn es n&ouml;tig ist, mit <strong>Jesus </strong>eine solche Inkarnation zu sein. Es wird erwartet, dass der Heilige Geist in Zukunft auch auf der Erde inkarniert. Wir haben diese Schriftstelle geschrieben, um Sie dar&uuml;ber zu informieren, dass derselbe Paramatma, egal wie oft er geboren wird, dieselben Dharmas offenbaren wird. Der Zweck dieser Schriftstelle besteht darin, den Lesern zu helfen, die wesentlichen Worte Jesu im Neuen Testament der Bibel zu verstehen und sie mit den Lehren der Bhagavad-Gita zu vergleichen. Wir hoffen, dass Sie durch die Lekt&uuml;re die Gr&ouml;&szlig;e Jesu und den inneren Geist Krishnas kennenlernen.
</div></div>
<ion-row><ion-col class="ion-text-center">
<b>Von<br><br>
Der einzige Guru der drei Religionen, Begründer des Thraitha-Theorems, Autor von einhundert göttlichen Schriften </b><br><br>
<span style="font-size:20px;font-weight:bold">Sri. Sri. Sri Acharya Prabodhananda Yogeeshwarulu </span>
</ion-col></ion-row>
</span>`,

},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 2,
verse: `<b>(1) Das Matthäusevangelium, 3. Kapitel, 7. Vers.</b>`,
meaning: `<b>
(7) Ihr Natternbrut! Wer hat dich gewarnt, vor dem kommenden Zorn zu fliehen?
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> In diesem Vers <strong>'Schlangenbrut' </strong>ist ein neuer Begriff. Der Begriff wurde verwendet, um sich auf Menschen zu beziehen. Es bestehen jedoch Zweifel, ob Menschen als Nachkommen von Schlangen betrachtet werden k&ouml;nnen. Dies wirft f&uuml;r jeden, der diesen Vers liest, eine Frage auf. In diesem Vers m&uuml;ssen wir uns auch mit der detaillierten Bedeutung befassen <strong>&bdquo;kommender Zorn.&ldquo; </strong>Dar&uuml;ber hinaus gibt es in diesem Vers noch ein weiteres Wort: <strong>&bdquo;Wer hat dich gewarnt?&ldquo; </strong>Dieser Satz bezieht sich auf eine vergangene Zeit, und wir sollten versuchen zu verstehen, wer die Menschen in der Vergangenheit gewarnt hat. In diesem Vers gibt es drei Fragen, auf die wir Antworten ben&ouml;tigen.

  Ein Vogel ist der Feind einer Schlange. Der Vogel kann die Schlange t&ouml;ten. Die Schlange zischt zun&auml;chst, um den Vogel zu erschrecken, aber der Vogel hat keine Angst. Der Vogel kann die Schlange als Nahrung fressen. Das ist allgemein bekannt. Die Schlange und der Vogel werden im Rahmen der spirituellen Bildung als Metaphern verwendet. Die Taube unter den V&ouml;geln wird mit Atma verglichen, w&auml;hrend die Schlange mit Maya verglichen wird. Obwohl der Vers den Vogel nicht erw&auml;hnt, erw&auml;hnt er doch die Schlange. Wenn die Schlange mit Maya (Satan) verglichen wird, kann &bdquo;Vipernbrut&ldquo; als &bdquo;Nachkomme der Maya&ldquo; verstanden werden. Genauer gesagt wird &bdquo;Vipernbrut&ldquo; anstelle von &bdquo;Menschen mit Maya&ldquo; verwendet.'

  Maya bezieht sich auf die Zusammensetzung von Gunas. Diejenigen, die st&auml;ndig mit Gunas besch&auml;ftigt sind und sich nicht um Gott k&uuml;mmern, werden als &bdquo;Brut der Vipern&ldquo; bezeichnet. Es wird bekannt, dass denjenigen, die in Maya verstrickt sind, drohender Zorn bevorsteht. <strong>Zorn bedeutet in diesem Zusammenhang etwas Schreckliches oder Schwer Ertr&auml;gliches. </strong>Der Begriff &bdquo;kommender Zorn&ldquo; deutet darauf hin, dass er derzeit nicht existiert, sondern sich in der Zukunft manifestieren wird. Was Menschen zun&auml;chst nicht besitzen, aber durch Maya (Gunas) erwerben werden, sind alle Arten von gutem (Punya) und schlechtem Karma (S&uuml;nde). Die Erfahrungen, die aus schlechtem Karma resultieren, k&ouml;nnen ziemlich schrecklich sein. Daher, <strong>&bdquo;kommender Zorn&ldquo; bezieht sich auf das Karma, das sich im menschlichen Leben manifestieren wird</strong>. Jeder Mensch, der geboren wird, sammelt Karma an, weshalb dieser Vers lautet <strong>&bdquo;Ihr Vipernbrut! Wer hat dich gewarnt, vor dem kommenden Zorn zu fliehen?&lsquo; </strong>dient als Warnung f&uuml;r den Menschen.

  Wenn in dem Vers die Frage &bdquo;Wer hat dich gewarnt?&ldquo; steht, deutet das darauf hin, dass jemand in der Vergangenheit den Menschen Weisheit vermittelt hat, um dem Karma zu entkommen. Dieser Vers deutet darauf hin, dass es in der Vergangenheit eine Person gab, die eine Idee erz&auml;hlte, um Menschen zu helfen, drohendes Karma zu vermeiden. Daher ist es f&uuml;r den Menschen wichtig, die Identit&auml;t dieser Person herauszufinden, zu verstehen, was sie gesagt hat, und zu bestimmen, wann sie diese Weisheit &uuml;bermittelt hat. Sich an historische Ereignisse aus der Vergangenheit zu erinnern, kann eine herausfordernde Aufgabe sein. Wenn die Antwort auf die Eingangsfrage im ersten Kapitel der vier Evangelien nicht bekannt ist, wird die Angelegenheit in der zweiten g&ouml;ttlichen Schrift nicht verstanden. Folglich k&ouml;nnen die folgenden Verse aus der zweiten g&ouml;ttlichen Schrift nicht verstanden werden. Daher ist es wichtig, die Antwort auf die Ausgangsfrage zu finden. Bevor wir die Wahrheit in dieser Hinsicht ans Licht bringen, wollen wir die Bedeutung dieser zweiten g&ouml;ttlichen Schrift untersuchen. Die von Gott vermittelte Weisheit wurde vor etwa f&uuml;nftausend Jahren zu einer heiligen Schrift. Diese Schriftstelle besteht aus 18 Kapiteln und befindet sich in der Mitte der 18 Parvas des Mahabharata. Diese achtzehn Kapitel werden als die erste g&ouml;ttliche Schrift bezeichnet. Zu Beginn der Sch&ouml;pfung &uuml;bermittelte Gott Weisheit durch den Himmel. Diese Weisheit wurde als bekannt <strong>&bdquo;Japara </strong>Weisheit&lsquo; damals. Auf Telugu bedeutet 'F&uuml;r' getrennt oder verschieden, w&auml;hrend <strong>ja </strong>bedeutet geboren. &bdquo;Japara&ldquo; bedeutet also &bdquo;getrennt oder getrennt von der Geburt&ldquo;. Dieser Name erhielt es, weil Gott niemals der Geburt unterworfen ist. Die Japara-Weisheit wurde zun&auml;chst zur ersten g&ouml;ttlichen Schrift und nach dreitausend Jahren, also vor etwa zweitausend Jahren, auch zur zweiten g&ouml;ttlichen Schrift. Vor etwa 1400 Jahren wurde dieselbe Weisheit als dritte g&ouml;ttliche Schrift niedergeschrieben. Wir interpretieren nun den Satz aus der zweiten g&ouml;ttlichen Schrift.

  Wenn die Frage &bdquo;Wer hat dich gewarnt?&ldquo; aufgeworfen wird, sollten wir &uuml;ber denjenigen sprechen, der in der Vergangenheit Weisheit gesagt hat. Demnach war derjenige, der in der ersten g&ouml;ttlichen Schrift Weisheit verk&uuml;ndete, derjenige, der die Menschen zuerst warnte. Es gibt einen Grund, denjenigen zu kennen, der es in der Vergangenheit erz&auml;hlt hat. Da nur Gott seine Weisheit verk&uuml;nden kann und Gott der Einzige ist, lehrt derselbe Gott seine Weisheit, wann und wo immer es erforderlich ist. Deshalb hat derselbe, der es zuvor erz&auml;hlt hat, es noch einmal in Versen erz&auml;hlt. Wenn wir also denjenigen kennen wollen, der die Weisheit in der zweiten g&ouml;ttlichen Schrift gesagt hat, sollten wir zuerst denjenigen kennen, der die Weisheit in der Vergangenheit gesagt hat. Daher wurde es notwendig, die Frage zu stellen: Wer hat Sie gewarnt? Wenn Sie herausfinden k&ouml;nnen, wer es in der Vergangenheit gesagt hat, haben Sie die M&ouml;glichkeit zu erkennen, wer es jetzt sagt. Wir ermutigen Sie, sich dieser Schriftstelle mit dem zu n&auml;hern <strong>Glauben </strong>dass die Person, die die erste g&ouml;ttliche Schrift &uuml;bermittelt hat, auch die Quelle der zweiten g&ouml;ttlichen Schrift ist.

  Bevor wir die zweite g&ouml;ttliche Schrift lesen, m&uuml;ssen wir wissen, welche Verse Gott, der die erste g&ouml;ttliche Schrift erz&auml;hlte, in der Bibelstelle erz&auml;hlt hat. Die Bibel besteht aus insgesamt 66 Kapiteln, von denen vier Verse enthalten, die direkt von Gott gesprochen wurden. Die anderen 62 Kapitel enthalten Verse von anderen Gnanis. Diese Kapitel sind bekannt als 1) das Matth&auml;usevangelium, 2) das Markusevangelium, 3) das Lukasevangelium und 4) das Johannesevangelium. Diese vier Evangelienberichte befinden sich im zentralen Teil der Bibel und unterteilen sie effektiv in drei Hauptabschnitte. Die ersten 39 Kapitel bilden den ersten Teil, gefolgt von den vier Evangelien als zweiten Teil und die restlichen 23 Kapitel bilden den dritten Teil. Besonders hervorzuheben ist die Bezeichnung dieser vier Kapitel als <strong>&bdquo;Evangelien</strong>,&lsquo; und betont ihre Bedeutung, da sie die Worte Jesu w&auml;hrend seines irdischen Lebens enthalten.

  <b>
  Der erste Teil der Bibel hat 39 Teile.
  Der zweite Teil der Bibel hat 4 Evangelien.
  Der dritte Teil der Bibel besteht aus 23 Teilen.
  </b>

  Im ersten und dritten Teil vermittelten andere Gnanis die Weisheit Gottes. Jesus, eine Inkarnation desjenigen, der die erste göttliche Schrift überbrachte, wiederholte Verse in den vier Evangelien. Um dies zu verstehen, wird die Frage gestellt: <b>„Wer hat euch gewarnt, vor dem kommenden Zorn zu fliehen?“</b>. Man kann also sagen, dass dieser Vers, der über allen anderen steht, eine große Bedeutung hat.</div></div>
</span>`
},

{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 3,
verse: `<b>Das Matthäusevangelium, 3. Kapitel, 11. Vers</b>`,
meaning: ` <b>
(11) Ich taufe dich mit Wasser, um Manas (Geist) zu verändern. Aber nach mir kommt einer, der stärker ist als ich, dessen Sandalen ich nicht tragen kann. Er wird dich mit dem Heiligen Geist und Feuer taufen.
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> 	Dieser Vers enth&auml;lt die Worte <strong>&bdquo;Manaswechsel&ldquo; Und 'taufen,'</strong> sowie &bdquo;mit Wasser und mit Feuer&ldquo;. Um die Bedeutung dieses Verses vollst&auml;ndig zu verstehen, ist es wichtig, diese vier W&ouml;rter zu verstehen. Wenn eines dieser W&ouml;rter unklar bleibt, bleibt die Essenz des Verses schwer zu fassen. Schauen wir uns also die Bedeutung dieser vier W&ouml;rter genauer an. Das erste Wort ist &bdquo;Ver&auml;nderung des Manas&ldquo;. Manas (Geist) in unserem K&ouml;rper beh&auml;lt und erinnert sich an das, was gelernt und gespeichert wurde. Hier bezieht sich &bdquo;Ver&auml;nderung des Manas&ldquo; auf die Ver&auml;nderung des Manas. Manas ist daf&uuml;r verantwortlich, sich an die Ereignisse unseres Lebens zu erinnern. Wenn sich das erste Manas ver&auml;ndert und das zweite Manas an seine Stelle tritt, werden alle Erinnerungen an das erste Manas gel&ouml;scht. Das zweite Manas hat keine Erinnerung an das erste Manas. Das erste Manas h&ouml;rt mit dem Tod auf zu existieren und das zweite Manas entsteht mit der Geburt. Wenn das erste Manas durch das zweite Manas ersetzt wird, spricht man von einem &bdquo;Manas-Wechsel&ldquo;. Dieser nat&uuml;rliche Manas-&Uuml;bergang findet bei jedem Zyklus von Geburt und Tod statt. Die Taufe ist f&uuml;r den &bdquo;Manas-Wechsel&ldquo; nicht erforderlich, da sie auf nat&uuml;rliche Weise mit dem Prozess von Tod und Wiedergeburt erfolgt.

  Wenn ein Mensch stirbt und wiedergeboren wird, wirft er seinen alten K&ouml;rper ab und erh&auml;lt einen neuen. Diese physische Transformation wird als Geburt bezeichnet. Es ist wichtig zu erkennen, dass Menschen zwei verschiedene Arten von K&ouml;rpern besitzen: den sichtbaren (physischen) und den unsichtbaren (subtilen). So wie der alte, sichtbare K&ouml;rper im Verlauf der Geburt durch einen neuen ersetzt wird, bezeichnen Hindus (Indus) den unsichtbaren, feinstofflichen K&ouml;rper, wenn er eine Ver&auml;nderung erf&auml;hrt, als <strong>Upadesa</strong>,&lsquo; w&auml;hrend Christen es nennen <strong>'Taufe</strong>.&lsquo; Wie in diesem Vers erw&auml;hnt, bedeutet die Taufe die Umwandlung des unsichtbaren Manas. &Auml;hnlich wie das mit Erinnerungen beladene alte Manas im Tod verblasst und bei der Geburt ein neues Manas entsteht, erf&auml;hrt das Manas w&auml;hrend der Taufe eine tiefgreifende Ver&auml;nderung. Es h&ouml;rt auf, uns an banale, unwissende Erinnerungen zu erinnern, und f&auml;ngt an, es zu tun Erinnern <strong>Sie sich an Weisheit und g&ouml;ttliche Erinnerungen</strong>. Die Taufe ist der Prozess, durch den eine Person, geleitet von den Lehren eines Lehrer, erreicht eine Ver&auml;nderung des Manas im Leben. Bei dieser Transformation wird ein unwissendes Manas durch eines ersetzt, das auf Weisheit eingestellt ist.

<strong>Manas-Wandel = Abkehr von der Unwissenheit zur </strong>
<strong>Weisheit. </strong><strong>Taufe = Upadesa vom Guru erhalten.</strong>

  Der Baptist John bot &bdquo;Upadesa&ldquo; mit Wasser an und erkl&auml;rte: &bdquo;Ich taufe euch mit Wasser, aber jemand, der m&auml;chtiger ist als ich, wird danach kommen, der euch mit dem Heiligen Geist und Feuer taufen wird.&ldquo; Wir haben die Konzepte &bdquo;Manaswechsel&ldquo; und &bdquo;Taufe&ldquo; bereits im Detail untersucht. Lassen Sie uns nun tiefer in die Bedeutung von &bdquo;Wasser&ldquo; und &bdquo;Feuer&ldquo; (das Gegenteil von Wasser) eintauchen. Wir erhalten die Taufe vom Guru, aber es gibt zwei Arten von Gurus. Einige besitzen Weisheitskraft (Gnana Shakti), andere nicht. Viele Gurus f&uuml;hren die Taufe oder &bdquo;Upadesa&ldquo; &uuml;blicherweise mit Wasser durch. Einige verwenden m&ouml;glicherweise Milch, beides sichtbare Fl&uuml;ssigkeiten, w&auml;hrend andere als Teil des Prozesses heilige Asche oder Weihrauchrauch verwenden. Dar&uuml;ber hinaus vermittelt ein Guru w&auml;hrend &bdquo;Upadesa&ldquo; ein Mantra, ein Wort oder ein Bild, und es gibt zahlreiche solcher &bdquo;Upadesas&ldquo;, die von verschiedenen Gurus angeboten werden. John war einer dieser Gurus, und er bekannte sich offen zu seiner Methode und erkl&auml;rte: &bdquo;Ich taufe dich mit Wasser.&ldquo; Allerdings auch er k&uuml;ndigte die Ankunft eines Gr&ouml;&szlig;eren an, der mit dem Heiligen Geist und Feuer taufen w&uuml;rde. Wir haben &bdquo;Taufe&ldquo; als den Weg zur Umwandlung des Manas von Unwissenheit in Weisheit definiert. Wenn diese Transformation durch die Taufe erfolgt, hat sie die Macht, einen Menschen von allen S&uuml;nden zu reinigen. Guru gibt durch seine Taufe das entsprechende g&ouml;ttliche Feuer, um S&uuml;nden zu verbrennen. Der Guru sollte die G&ouml;ttlichkeit des Feuers besitzen. Der erste Vers im Kapitel &bdquo;Atma Samyama Yoga&ldquo; in der Bhagavad-Gita, der ersten g&ouml;ttlichen Schrift, betont die Notwendigkeit dieses g&ouml;ttlichen Feuers und besagt: &bdquo;cha yogee cha na niragnir nachaakriyah&ldquo;, was bedeutet <strong>&bdquo;Wem dieses g&ouml;ttliche Feuer (Gnana Shakti) fehlt und der aufh&ouml;rt zu handeln, ist kein Yogi (Guru).&ldquo;</strong>

  Ein echter Yogi (Guru) ist nicht jemand, der keine Taten unterl&auml;sst, sondern zeichnet sich durch die Pr&auml;senz des inneren Feuers aus, das symbolisiert <strong>Weisheitskraft</strong>. Dies ist es, was in dem Vers als &bdquo;Taufe mit Feuer&ldquo; erw&auml;hnt wird. Hier bedeutet &bdquo;Feuer&ldquo; das <strong>g&ouml;ttliche Kraft (Gnana Shakti)</strong>, was mit blo&szlig;em Auge nicht sichtbar ist. Wenn ein Mensch dieses g&ouml;ttliche Feuer von seinem Guru empf&auml;ngt, entfacht es eine transformative Kraft in ihm, die in der Lage ist, sein angesammeltes Karma wegzubrennen. Das dem Getauften verliehene Feuer der Weisheit (Gnana Shakti) beginnt, sein Karma zu zerst&ouml;ren. W&auml;hrend ein Guru wie Johannes die Taufe zum Zweck des &bdquo;Manaswechsels&ldquo; durchf&uuml;hrte, war er <strong>besa&szlig; nicht die Kraft der Weisheit</strong> in seiner Taufe verlangte er, Karma zu verbrennen. Daher sagte er: &bdquo;Ich kann euch nur mit Wasser taufen.&ldquo; Johannes erkl&auml;rte den Menschen, dass seine Taufe, <strong>mit Wasser durchgef&uuml;hrtSie</strong> w&uuml;rden ihr Karma nicht verbrennen. Stattdessen ging er davon aus, dass derjenige, der nach ihm kommen w&uuml;rde, eine Taufe durchf&uuml;hren w&uuml;rde, die dazu in der Lage w&auml;re.

<strong>Taufe mit Wasser = Upadesa, die kein Karma verbrennt. </strong>
<strong>Taufe mit Feuer = Upadesa, die Karma verbrennt</strong>
</div></div>
</span>`,
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 4,
verse: `<b>(3) Das Matthäusevangelium, 3. Kapitel, 12. Vers.</b>`,
meaning: `<b>
(12) Seine Wurfgabel ist in seiner Hand, und er wird seine Tenne reinigen, seinen Weizen in die Scheune sammeln und die Spreu mit unauslöschlichem Feuer verbrennen.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
  <ion-row><ion-col class="ion-text-center">
  <img src="assets/img/chaata.png"/><br>
  <img src="assets/img/kallam.png"/>
  </ion-col></ion-row>
<div class="poem"><div class="poemtext"> 	John, ein ber&uuml;hmter Guru seiner Zeit, war derjenige, der den fraglichen Vers sprach. In dieser Zeit spendete er vielen Menschen die &bdquo;Upadesa&ldquo; (Taufe). Johannes war ein gro&szlig;er &bdquo;Gnani (weiser Mensch)&ldquo; und hatte die Ankunft Jesu vorhergesehen. Er taufte Jesus Christus (Bhagavan), den Sohn Gottes. Er war auch der Guru Jesu. Obwohl John ein ber&uuml;hmter Guru war und zu dieser Zeit viele Menschen taufte, war er bescheiden. Bevor er Jesus taufte, zeigte er Demut, indem er sagte: &bdquo;Der nach mir kommt, ist m&auml;chtiger als ich, dessen Sandalen ich nicht zu tragen w&uuml;rdig bin.&ldquo; Als Jesus sich ihm taufen lie&szlig;, erkannte Johannes die gr&ouml;&szlig;ere spirituelle Macht Jesu an und sagte: <strong>&bdquo;Du solltest mich taufen. Kommst du zur Taufe zu mir?&ldquo; </strong>Diese Worte wurden von Johannes gesprochen, als er die Ankunft des Herrn voraussah. Der Vers enth&auml;lt auch Hinweise darauf <strong>ein Winning-Tablett</strong>,<strong>Weizen</strong>, und ein <strong>unausl&ouml;schliches Feuer</strong>. Manche fragen sich vielleicht, welche Bedeutung diese Elemente haben, da sie allt&auml;glich erscheinen. Wenn der Weizen mit der Worfschale aufgenommen, zerkleinert und mit Feuer verbrannt wird, wird daraus Brot. Wir alle blicken auf das Winning-Tablett, den Weizen und das Feuer im Ofen. Manche fragen sich vielleicht, was an diesem Satz so toll ist. Dieser Vers ist Teil der zweiten g&ouml;ttlichen Schrift und jeder Vers dieser Schrift vermittelt g&ouml;ttliche Weisheit. Wenn man ihn mit Weisheit und spiritueller Einsicht betrachtet, hat dieser Vers eine besondere Bedeutung und betont die Gr&ouml;&szlig;e Jesu Christi.

  In der Antike war es &uuml;blich, Neugeborene auf einem Tablett (Korb) zu platzieren. Sobald ein Baby zur Welt kam, wurde Reis in die Wurfschale gegossen, flachgedr&uuml;ckt und das Baby entsprechend dem Brauch darauf gelegt. Diese Praxis war in allen Teilen der Gesellschaft verbreitet, von den Armen bis zu den Reichen, von den Wissenden bis zu den Unwissenden. Man glaubte, dass Brahma, die Sch&ouml;pfergottheit, die Zukunft des S&auml;uglings einschreiben w&uuml;rde, was oft als &bdquo;&hellip;&ldquo; bezeichnet wird <strong>&bdquo;Karma-Schreiben&ldquo; oder &bdquo;Brahma Vrata&ldquo; </strong>auf der Stirn des Babys w&auml;hrend der zwei Minuten, die es auf dem Winning-Tablett verbrachte. Unabh&auml;ngig von pers&ouml;nlichen &Uuml;berzeugungen gelten die Worte des Johannes, insbesondere im Zusammenhang mit Jesus. Johannes verwendete einen Vergleich, indem er Taten mit Weizen verglich. Als Grundnahrungsmittel ist Weizen lebenserhaltend, verbraucht sich jedoch, wenn wir ihn konsumieren. In &auml;hnlicher Weise erf&auml;hrt Jeevatma Karma in Form von Taten. Wenn wir karmische Erfahrungen machen, nimmt das &bdquo;Karma&ldquo; unserer Taten ab. Karma-Schrift, auch Stirnschrift oder Gottes Urteil genannt, bedeutet, dass das Karma, das wir erfahren, in unseren K&ouml;rper eingeschrieben ist und dass unsere Lebenserfahrungen diese Einschreibung widerspiegeln. Johannes verglich die von unserem Karma beeinflussten Taten mit Weizen, und die &bdquo;Wrinning-Schale&ldquo; war symbolisch der Kopf, auf dem diese Taten aufbewahrt wurden. So wie wir K&ouml;rner aus einer Worfelschale ernten Um Essen zuzubereiten, wird unser Kopf als &bdquo;W&uuml;rfeltablett&ldquo; beschrieben, weil er das Karma speichert, das wir erleben.

  Karma wird in den Kopf eines Menschen eingeschrieben, ohne dass er sich dessen bewusst ist. Daher kann niemand die Zukunft vorhersagen. Jeder Mensch ist an das Karma gebunden und kann sich seinem Einfluss nicht entziehen. W&auml;hrend alle Menschen blo&szlig;e Marionetten zu sein scheinen, die vom Karma manipuliert werden, bleibt der Heilige Geist oder Paramatma au&szlig;erhalb der Kontrolle des Karmas. Wenn Gott sich entscheidet, als Mensch zu inkarnieren, erschafft Er sein eigenes Karma, indem er es sich auf den Kopf schreibt und so auf die Erde kommt. Er besitzt kein inh&auml;rentes Karma, sondern gestaltet bewusst sein eigenes Schicksal, um der Menschheit Weisheit zu vermitteln. In Bezug auf Gott, der sein eigenes Karma in die Hand nimmt, &auml;u&szlig;erte Johannes: <strong>&bdquo;Sein Winning-Tablett ist in seiner Hand.&ldquo; </strong>Niemand sonst auf der Welt besitzt eine solche Kontrolle &uuml;ber sein Karma. Im Gegensatz zu menschlichen Einschr&auml;nkungen formt Gott sein eigenes Karma und kommt als Mensch auf die Erde, um seine Weisheit zu teilen. Es ist wichtig zu verstehen, dass das Leben Jesu von der Geburt bis zum Tod eine Folge selbst konstruierten Karmas war. Seine Geburt in einer bescheidenen Scheune, sein Leiden und seine Kreuzigung waren alles Produkte seines selbst geschaffenen Schicksals. Ohne seine Zustimmung konnte keine &auml;u&szlig;ere Kraft seine Geburt herbeif&uuml;hren oder ihn qu&auml;len. Er bestimmte den Verlauf seines irdischen Daseins, indem er tats&auml;chlich sein eigenes Siebtablett in der Hand hielt.

  Alle gew&ouml;hnlichen Menschen sammeln f&uuml;r jede Tat, die sie tun, neues Karma an. Jede Aktion auf der Erde erzeugt neues Karma. So wie Rauch eng mit Feuer verbunden ist, ist Karma untrennbar mit Taten verbunden. Es ist ein grundlegendes Prinzip von Prakruti, dass jede Handlung karmische Konsequenzen hat. Wenn Gott inkarniert und als Sohn Gottes (Bhagavan) erscheint, erzeugt jede Handlung, die er unternimmt, auch neues Karma. Gew&ouml;hnliche Menschen sind nicht in der Lage, dem drohenden Karma zu entkommen. Bhagavan Jesus besitzt jedoch das volle Feuer der Weisheit (Gnana Shakti), was ihm erlaubt, das Karma zu verbrennen, das auf nat&uuml;rliche Weise aus seinen Handlungen entsteht. Christus, der vollendete Gnani, verf&uuml;gt immer &uuml;ber die volle Weisheitskraft. Alles Karma wird im unausl&ouml;schlichen Feuer der Weisheit verzehrt. Handlungen sind untrennbar mit Karma verbunden, &auml;hnlich wie K&ouml;rner mit Spreu verbunden sind. John dr&uuml;ckte dies aus als: <strong>&bdquo;Er verbrennt die Spreu mit unausl&ouml;schlichem Feuer&ldquo; </strong>Dies bedeutet, wie Christus durch seine Weisheit das mit Taten verbundene Karma beseitigt. Jesus reinigt sich vom Staub der Gunas und verbrennt das mit seinen Taten verbundene Karma. Johannes verglich den K&ouml;rper Jesu mit einer Tenne und symbolisierte damit, dass er den Einfluss von Gunas beseitigte, so wie man eine Tenne reinigt. Er setzte Taten mit Weizen, das aus diesen Taten entstehende Karma mit Spreu und das Feuer, das das Karma verzehrt, mit einem unausl&ouml;schlichen Feuer gleich. Johannes hat die Gr&ouml;&szlig;e Jesu in einem einzigen Satz zusammengefasst, doch leider haben wir seine Bedeutung nicht vollst&auml;ndig erfasst.

  Der Vers mag einfach erscheinen, aber er enth&auml;lt tiefgr&uuml;ndige und subtile Bedeutungen. Die vier Evangelien sind reich an Versen mit &auml;hnlicher Tiefe. Aufgrund meiner begrenzten Weisheit habe ich nicht alle 66 Kapitel der Bibel erkl&auml;rt, sondern mich auf die Beschreibungen der entscheidenden vier Evangelien konzentriert und andere Abschnitte nur selten ber&uuml;hrt.
</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 5,
verse: `<b>(4) Das Matthäusevangelium, 3. Kapitel, 16. und 17. Vers</b>`,
meaning: `
<b>
(16) Sobald Jesus getauft war, stieg er aus dem Wasser. In diesem Moment öffnete sich der Himmel und er sah, wie der Geist Gottes wie eine Taube herabkam und sich auf ihm niederließ.
<br><br>
(17) Und eine Stimme vom Himmel sagte: „Das ist mein Sohn, den ich liebe; mit ihm bin ich sehr zufrieden.“
</b>
`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">	Johannes taufte Jesus mit Wasser. Die Taufe wird auch als &bdquo;Upadesa&ldquo; bezeichnet. In Telugu bedeutet &bdquo;Upadesa&ldquo; ein an Ihr eigenes Land angrenzendes Land. Mit anderen Worten, es ist gleichbedeutend mit einem Nachbarland. Ein Nachbar wohnt in einem Nachbarland. Es gibt ein Nachbarland in Ihrem K&ouml;rper, und in diesem Nachbarland Ihres K&ouml;rpers wohnt ein Nachbar. Jeder Mensch hat ein Nachbarland und einen Nachbarn, obwohl diese Wesenheiten bei einem Menschen nicht sichtbar sind. Der Guru offenbart das unsichtbare Nachbarland w&auml;hrend der Taufe oder &bdquo;Upadesa&ldquo;. Johannes taufte Jesus mit Wasser, und bei dieser &bdquo;Upadesa&ldquo; ist kein Feuer im Spiel. Daher bezieht es sich auf den Namen und es fehlt ein Nachbarland und ein Nachbar. Dennoch muss der Prozess &bdquo;Upadesa&ldquo; auf diese Weise durchgef&uuml;hrt werden. Deshalb sagte Jesus in Vers 3:15: <strong>&bdquo;Lass es jetzt so sein; Es ist f&uuml;r uns angemessen, dies zu tun, um alle Gerechtigkeit (Weisheit) zu erf&uuml;llen.&ldquo;</strong>

  Obwohl Jesus Upadesa mit Wasser empfing, war er sich des Nachbarlandes in seinem K&ouml;rper bewusst. Er konnte jederzeit sowohl die sichtbare Au&szlig;enwelt als auch das unsichtbare Nachbarland sehen. Daher wurde es als echtes Upadesa angesehen, obwohl sich das von Johannes gegebene Upadesa nur auf den Namen bezog. Jesus wurde getauft, nachdem er drei&szlig;ig Jahre als gew&ouml;hnlicher Jeevatma gelebt hatte. Von diesem Zeitpunkt an begann Er, &uuml;ber g&ouml;ttliche Dinge in der Form von Weisheit zu sprechen, nicht als Jeevatma, sondern als Atma. Um zu zeigen, dass Jesus als Atma Paramatmas Weisheit vermittelte, stieg Atma wie eine Taube herab und landete auf ihm, unmittelbar nachdem er nach seiner Taufe aus dem Wasser aufgetaucht war. Dar&uuml;ber hinaus erkl&auml;rte Paramatma (der Heilige Geist).<strong>&bdquo;Das ist mein Sohn, den ich liebe; mit ihm bin ich sehr zufrieden.&ldquo; </strong>Der Heilige Geist (Gott) best&auml;tigte, dass Atma sein geliebter Sohn war, und er dr&uuml;ckte seine Freude &uuml;ber seinen geliebten Sohn Jesus aus. Dadurch wird deutlich, dass der Heilige Geist der Vater und Atma der Sohn ist, der als Jesus bekannt ist. All dies weist darauf hin, dass der Heilige Geist (Paramatma) nicht als Atma erschien, sondern als gew&ouml;hnlicher Mensch in dieser Welt lebte und als Jeevatma erschien. Ich habe das nicht gesagt, um Christen zu loben oder das Christentum zu f&ouml;rdern. Ich teile mit Ihnen, was meiner Meinung nach die absolute Wahrheit dar&uuml;ber ist, wie Gott sich auf der Erde manifestiert hat.
</div></div>
</span>`,
},

{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 6,
verse: `<b>(5)	Das Matthäusevangelium, 4. Kapitel, 10. Vers</b> `,
meaning: ` <b>
(10) Jesus sagte zu ihm: „Geh weg von mir, Satan! Denn es steht geschrieben: Betet den Herrn an sei dein Gott und diene Ihm allein.“
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> 	Das Wort <strong>'Satan' </strong>wird in diesem Vers vorgestellt. In den vorhergehenden Versen wird Satan gelegentlich als &bdquo;Versucher&ldquo; (shodakudu in Telugu) und in anderen F&auml;llen als &bdquo;Verleumder&ldquo; (apavadi in Telugu) bezeichnet. Der Begriff &bdquo;apavadi&ldquo; bedeutet jemand, der falsch urteilt und dabei l&uuml;gt &bdquo;shodakudu&ldquo; bedeutet jemanden, der das B&ouml;se in dir aufsp&uuml;rt und es, falls vorhanden, an die Oberfl&auml;che bringt. &bdquo;apavadi&ldquo; oder &bdquo;shodakudu&ldquo; wird in diesem Satz als Satan bezeichnet. Sowohl &bdquo;apavadi&ldquo; als auch &bdquo;shodakudu&ldquo; geh&ouml;ren zur Telugu-Sprache, aber das Wort&bdquo;Satan&ldquo; kommt nicht aus Telugu. Das Wort &bdquo;Satan&ldquo; kommt in dieser Schriftstelle h&auml;ufig vor. Im Bereich der spirituellen Bildung wird &bdquo;Satan&ldquo; synonym mit verwendet <strong>'Maya</strong>.&lsquo; Da Satan und Maya im Wesentlichen dasselbe sind, k&ouml;nnen Beschreibungen von Maya auch auf Satan angewendet werden.

  In der ersten g&ouml;ttlichen Schrift bezieht sich Maya auf die Essenz von Gunas im Kopf. &Uuml;ber Maya hei&szlig;t es in der ersten g&ouml;ttlichen Schrift<strong>, &bdquo;Gunamayee Mama Maaya&ldquo;, </strong>wobei &bdquo;mama maaya&ldquo; &bdquo;Maya geh&ouml;rt mir&ldquo; bedeutet, wie von Gott verk&uuml;ndet. Demnach hei&szlig;t es, Maya sei die Kombination von Gunas. Gott ist der Sch&ouml;pfer aller Dinge, einschlie&szlig;lich der Maya, und so erkl&auml;rte Gott, dass Maya ihm geh&ouml;rt. Maya ist weiblich, w&auml;hrend Gott und die beiden Seelen Atma und Jeevatma, die sich von Gott getrennt haben, m&auml;nnlich sind (insgesamt drei). Alles andere, was Gott geschaffen hat, kann als weiblich bezeichnet werden. Daher wird Maya als weiblich bezeichnet. Wir sollten Maya nicht als &auml;u&szlig;erlich betrachten; vielmehr befanden sich die Maya, die Jesus in Versuchung f&uuml;hrten, in seinem eigenen Kopf. Maya, die in seinem Kopf wohnte, versuchte Jesus und stritt sich mit ihm. Ebenso fungieren die Gunas im Kopf eines jeden Menschen als seine Maya, die ihn st&auml;ndig in Versuchung f&uuml;hren und mit ihm diskutieren. Nach der Taufe Jesu versuchte Maya ihn zun&auml;chst dreimal, und Jesus antwortete bei allen drei Gelegenheiten mit seiner Weisheit.

  Jesus hat in seinem Leben ein Beispiel gegeben, dem die Menschen nacheifern sollten. Wann immer Maya Jesus auf die Probe stellte, reagierte er mit Weisheit. Daher sollte jeder Mensch lernen, dasselbe zu tun. Als Satan Jesus aufforderte, sich vor ihr zu verneigen, gab Jesus Satan (Maya) eine passende Antwort. Jesus antwortete Satan und sagte: <strong>&bdquo;Bete den Herrn, deinen Gott, an und diene ihm allein.&ldquo; </strong>Jesus sprach diese Worte, aber es ist wichtig zu verstehen, dass es der Atma in seinem K&ouml;rper war, der diese Worte sprach. Der Heilige Geist, Paramatma, kommuniziert nicht direkt mit irgendjemandem. Stattdessen &uuml;bermittelt Er seine Weisheit durch den Atma. Wir sollten also erkennen, dass die Weisheit von Paramatma selbst vermittelt wurde, auch wenn sie von Atma im K&ouml;rper zum Ausdruck gebracht wurde. In der dritten und letzten g&ouml;ttlichen Schrift, in 3:7, sagt Gott: &bdquo;Die Weisheit Gottes ist niemandem au&szlig;er Gott bekannt.&ldquo; Dies unterstreicht, dass die vollst&auml;ndige Weisheit, die der Atma im K&ouml;rper offenbart, von Paramatma (Gott) &uuml;bermittelt wird.

  Heutzutage gibt es zw&ouml;lf gro&szlig;e Religionen auf der Welt, und der Hinduismus ist insofern einzigartig, als er alle Devatas umfasst, die es in anderen Religionen nicht gibt. Gott erschuf sowohl Devatas als auch Menschen. Allerdings haben die Menschen Gott verlassen und sich der Verehrung von Devatas zugewandt, ohne Gottes Weisheit vollst&auml;ndig zu verstehen. Diese Wahl unterstreicht, dass die Menschen den Lehren Gottes, wie sie in ihren Schriften zu finden sind, keine Priorit&auml;t einr&auml;umten. Diejenigen, die Gott aufgeben und Devatas verehren, k&ouml;nnen als unter dem Einfluss Mayas stehend angesehen werden und den Worten Mayas Beachtung schenken. Im Gro&szlig;en und Ganzen gibt es im Wesentlichen zwei Seiten: die Seite Gottes und die Seite Mayas. In einigen Religionen verehren die Menschen jedoch ausschlie&szlig;lich Gott, ohne sich an andere Devatas zu wenden. Vor allem im Hinduismus ist die Verehrung mehrerer Devatas au&szlig;er Gott &uuml;blicher. Folglich wird deutlich, dass diejenigen, die Devatas verehren, sich dem Einfluss der Maya anschlie&szlig;en.

</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 7,
verse: ` <b>(6)	Das Matthäusevangelium, 5. Kapitel, 10. Vers.</b>`,
meaning: `<b>
(10) Selig sind diejenigen, die wegen Gerechtigkeit (Weisheit) verfolgt werden, denn ihnen gehört das Königreich von Paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Der Vers enth&auml;lt das Wort &bdquo;Gerechtigkeit&ldquo;, sollte es aber sein <strong>&bdquo;Weisheit&ldquo; statt &bdquo;Gerechtigkeit&ldquo;. </strong>In der hebr&auml;ischen Sprache verwendete Jesus wahrscheinlich das Wort &bdquo;Weisheit&ldquo;. Bei der &Uuml;bersetzung ins Englische wurde das Wort, das dem hebr&auml;ischen Begriff entspricht, jedoch nicht genau wiedergegeben, und es wurde &bdquo;Gerechtigkeit&ldquo; anstelle von &bdquo;Weisheit&ldquo; verwendet. Es ist wichtig, zwischen zu unterscheiden &bdquo;Gerechtigkeit&ldquo; und &bdquo;Weisheit&ldquo;. <strong>Rechtschaffenheit und Gerechtigkeit sind Begriffe, die sich auf weltliche Angelegenheiten beziehen, w&auml;hrend Weisheit und Dharma mit g&ouml;ttlichen Angelegenheiten zu tun haben. </strong>Rechtschaffenheit und Gerechtigkeit sind mit Karma verbunden, w&auml;hrend Weisheit und Dharma die Macht haben, Karma zu verbrennen. Diese Unterscheidung unterstreicht, dass Gerechtigkeit zum materiellen Bereich geh&ouml;rt, w&auml;hrend Weisheit g&ouml;ttlicher Natur ist. In der Welt begegnen wir Gerechtigkeit, Korruption, Gerechtigkeit und Ungerechtigkeit. Gerechtigkeit f&uuml;hrt zu Punya (gutes Karma), wohingegen Korruption zu S&uuml;nde f&uuml;hrt. Ebenso f&uuml;hrt Gerechtigkeit zu Punya, w&auml;hrend Ungerechtigkeit zur S&uuml;nde f&uuml;hrt. Angesichts dieser Unterschiede ist klar, dass in dem betreffenden Vers &bdquo;Weisheit&ldquo; anstelle von &bdquo;Gerechtigkeit&ldquo; verwendet werden sollte.

  Diejenigen, die wegen ihres Strebens nach Weisheit verfolgt werden, und diejenigen, die auf dem Weg der Weisheit Schwierigkeiten ertragen, k&ouml;nnen als gesegnet angesehen werden. Denn durch ihr Leiden um der Weisheit willen k&ouml;nnen sie Moksham erreichen, was Befreiung von der Knechtschaft des Karma bedeutet. Wenn eine Person Moksham erreicht, transzendiert sie diese weltliche Existenz und tritt in einen anderen Zustand jenseits der Welt ein. Von einem solchen Individuum wird gesagt, dass es in Paraloka eingetreten sei, einem Zustand ohne weltliche Erfahrungen. Es ist wichtig zu beachten, dass nicht jeder Weg zur Weisheit mit Verfolgung oder Gewalt verbunden ist. Manche Menschen werden Weisheit erlangen und Moksham (Paraloka) ohne Hindernisse erreichen.
</dv></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 8,
verse: ` <b>(7)	Das Matthäusevangelium, 5. Kapitel, 17. Vers.</b> `,
meaning: ` <b>
(17) Glaube nicht, dass ich gekommen bin, um das Gesetz (Dharma Shastra) oder die Propheten abzuschaffen; Ich bin nicht gekommen, um sie abzuschaffen, sondern um sie zu erfüllen.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> Niemand kann das Dharma Shastra verurteilen. Es kann nicht verurteilt werden. Es existiert seit Anbeginn der Schöpfung und zahlreiche Propheten und Lehrer haben seine Weisheit weitergegeben. Wenn Paramatma (das Höchste Wesen) als Bhagavan auf die Erde herabsteigt, praktiziert Er nicht nur das Dharma Shastra, sondern macht seine Prinzipien auch für alle verständlich. Wenn Bhagavan jedoch als Sohn Gottes die im Dharma Shastra dargelegten Dharmas offenbart und praktiziert, erscheinen sie manchen Menschen möglicherweise nicht als Dharmas. Diese Diskrepanz ergibt sich aus der Tatsache, dass manche Menschen fälschlicherweise glauben, Adharmas seien Dharmas. Folglich können die wahren Dharmas wie Adharmas erscheinen, wenn Bhagavan seine Lehren vermittelt. Deshalb sagte Jesus im obigen Vers: <b>„Glaube nicht, dass ich gekommen bin, um das Gesetz (Dharma Shastra) abzuschaffen, sondern um es zu erfüllen.“</b>
  Die Menschen auf der Welt sind dem Einfluss von Maya (Satan) verfallen und glauben, dass Adharmas Dharmas sind. Daher nehmen sie an verschiedenen Formen der Anbetung teil und halten es für eine aufrichtige Hingabe. Maya hat das Verständnis der Menschen von Gott auf sich selbst gelenkt und sie glauben lassen, dass sie sich auf Gott zubewegen.  In diesem Prozess führt es sie dazu, Adharmas anstelle von Dharmas zu praktizieren, was sie effektiv in die entgegengesetzte Richtung zu Gott führt. In einem solchen Zustand, selbst wenn Gott als Mensch inkarniert Obwohl er ein Mensch ist und die wahren Dharmas praktiziert, können diese Handlungen für diejenigen, die von Maya beeinflusst wurden, irreführend erscheinen. Menschen könnten fälschlicherweise denken, dass das, was sie tun, der wahre Dharma sei und dass sie echte Gläubige seien. Sie könnten Gott, der als Mensch gekommen ist, beschuldigen, Adharmas zu befolgen, und ihn vielleicht sogar als Gotteslästerer bezeichnen. Als der wahre Gott als Jesus auf die Erde kam, waren das, was Er sagte und praktizierte, tatsächlich Dharmas. Allerdings schienen diese Dharmas den Lehren von Gelehrten, Swamis und Gurus zu widersprechen. Diese Diskrepanz ist der Grund, warum die Hohenpriester, Schriftgelehrten und Kaiphas Jesus ablehnten und ihn ablehnten. Daher betonte Jesus in dem Vers:<b>„Ich bin nicht gekommen, um sie abzuschaffen, sondern um sie zu erfüllen.“</b>
</div></div>
</span>  `
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 1,
pageNumber: 9,
verse: ` <b>(8)	Das Matthäusevangelium, 5. Kapitel, 18. Vers.</b>`,
meaning: `<b>(18) Denn wahrlich, ich sage euch: Bis der Himmel und Erde verschwinden, wird nicht der kleinste Buchstabe, nicht der kleinste Federstrich auf irgendeine Weise aus dem Gesetz (Dharma Shastra) verschwinden, bis alles vollendet ist. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> 	In diesem Vers ist der Begriff <strong>&bdquo;Dharma Shastra&ldquo; </strong>ist einzigartig und einige fragen sich vielleicht, was es bedeutet. Um solche Fragen beantworten zu k&ouml;nnen, ist es wichtig, das Konzept von Shastra (Wissenschaft), die verschiedenen Arten von Wissenschaften und die Besonderheit des Dharma Shastra innerhalb des Bereichs der Wissenschaften zu verstehen. Erstens: Wenn wir die Bedeutung des Wortes &bdquo;Shastra&ldquo; verstehen, werden wir Shastra bis zu einem gewissen Grad verstehen. Das Wort <strong>&bdquo;shastra&ldquo; </strong>leitet sich vom Telugu-Wort ab <strong>&bdquo;Shasanam&ldquo;</strong>,&lsquo; was die Idee von vermittelt <strong>&bdquo;muss durchgesetzt werden.&ldquo; </strong>Folglich impliziert &bdquo;Shastra&ldquo;. <strong>&bdquo;Was auch immer gesagt wird, muss wahr werden.&ldquo; </strong>Zus&auml;tzlich ist der Begriff <strong>'shapam' </strong>leitet sich von &bdquo;Shastra&ldquo; ab und bedeutet <strong>&bdquo;muss hingerichtet werden.&ldquo; </strong>Somit sind alle drei W&ouml;rter - <strong>Shasanam (Gesetz), Shapam (Fluch) und Shastra (Wissenschaft) </strong>haben die gleiche zugrunde liegende Bedeutung. Shastra wird typischerweise in sechs verschiedene Studienbereiche eingeteilt. Einige m&ouml;gen argumentieren, dass die sechs Wissenschaften in zwei Arten eingeteilt werden k&ouml;nnen, w&auml;hrend andere drei Kategorien vorschlagen. Im Gro&szlig;en und Ganzen k&ouml;nnen Shastras als zwei Arten betrachtet werden. Mit anderen Worten: Wir k&ouml;nnen Shastras als dreifach beschreiben. Wenn wir sie in zwei Typen einteilen, bezieht sich der eine auf weltliche Angelegenheiten und der andere auf Angelegenheiten im Zusammenhang mit Paramatma (dem H&ouml;chsten Wesen). In der dreifachen Klassifizierung sind vier Shastras mit weltlichen Belangen verbunden, eines bezieht sich ausschlie&szlig;lich auf Paramatma und das andere f&auml;llt in die Kategorie, in der es teilweise mit Paramatma und teilweise mit weltlichen Angelegenheiten zusammenh&auml;ngt.
	Die sechs Shastras lauten wie folgt: 1) Mathematik, 2) Astronomie, 3) Chemie, 4) Physik, 5) Astrologie und 6) Brahma Vidya. Die ersten vier befassen sich mit weltlichen Belangen, w&auml;hrend die f&uuml;nfte, die Astrologie, sowohl mit weltlichen als auch mit dem G&ouml;ttlichen in Verbindung steht. Wenn alternativ die Astrologie auch in die Kategorie der weltlichen Shastras einbezogen wird, werden die ersten f&uuml;nf Shastras als weltlich klassifiziert, w&auml;hrend Brahma Vidya Shastra die einzige Wissenschaft bleibt, die sich auf das G&ouml;ttliche bezieht. Insgesamt gibt es sechs Wissenschaften, wobei Brahma Vidya die bedeutendste ist. Aus diesem Grund ist es als Brahma Vidya Shastra bekannt, wobei &bdquo;Brahma&ldquo; Gr&ouml;&szlig;e bedeutet. &bdquo;Brahma&ldquo; ist kein Name, sondern ein Begriff, der Gottes gr&ouml;&szlig;tes und h&ouml;chstes Wesen bezeichnet. <strong>Da es sich um eine Wissenschaft handelt, die sich dem Verst&auml;ndnis Gottes widmet, wird sie passenderweise Brahma Vidya Shastra genannt. </strong>Da es sich bei Brahma Vidya um die Wissenschaft Gottes handelt, tr&auml;gt es die Bezeichnung &bdquo;Vidya&ldquo;. Die anderen f&uuml;nf weltlichen Wissenschaften, n&auml;mlich Mathematik, Astronomie,Chemie, Physik und Astrologie fehlen <strong>&bdquo;vidya&ldquo; </strong>Suffix in ihren Namen. Der Begriff &bdquo;Vidya&ldquo; ist der Wissenschaft vorbehalten, die sich auf Gott bezieht. Einige fragen sich vielleicht, was der Grund f&uuml;r diese Unterscheidung ist, und die Antwort lautet wie folgt.

	Wissenschaften k&ouml;nnen in zwei Arten unterteilt werden: weltliche und paramatmabezogene Wissenschaften. Die f&uuml;nf Materialwissenschaften k&ouml;nnen von jedem vollst&auml;ndig verstanden werden. Allerdings ist Brahma Vidya, das gr&ouml;&szlig;te von allen, das Gottes Dharmas offenbart, das einzige, das den Begriff &bdquo;Vidya&ldquo; in seinem Namen enth&auml;lt, was ihm den Titel des gr&ouml;&szlig;ten Vidya Shastra einbringt. Das Wort &bdquo;vidya&ldquo; (Bildung) hat seinen Ursprung im Laut <strong>&lsquo;vith</strong>,&lsquo; was Wissen bedeutet. Vidya impliziert Wissen, das erworben werden sollte. Ein &bdquo;vidyarthi&ldquo; (Sch&uuml;ler) ist jemand, der nach Wissen strebt, um etwas bittet, das er noch nicht besitzt, und es von denen erwirbt, die das Wissen besitzen. Die Sch&uuml;ler erhalten eine grundlegende Ausbildung von sachkundigen Lehrern. Vidya bezieht sich auf Wissen, das zwar bekannt, aber nicht vollst&auml;ndig verstanden werden kann. Ebenso kann niemand behaupten, das Thema Gott vollst&auml;ndig zu verstehen. Niemand kann behaupten, dass er vollst&auml;ndige Kenntnis von Gott besitzt. Es ist ein lebenslanges Streben, etwas &uuml;ber Gott zu lernen, und die Menschen gewinnen im Laufe ihres Lebens immer mehr Verst&auml;ndnis daf&uuml;r. Es gibt niemanden, der sagen kann, dass dies die Grenze ist und dass er alles wei&szlig;. Der Mensch wird sich immer weiter &uuml;ber die Materie Gottes informieren, sie aber nie vollst&auml;ndig verstehen. Daher wird die Wissenschaft Gottes immer als Vidya Shastra bezeichnet und ist immer das Brahma Vidya Shastra. Im Gegensatz dazu kann man die anderen f&uuml;nf Wissenschaften vollst&auml;ndig erfassen und l&auml;sst nichts mehr wissen. Daher wird ihren Namen nicht der Begriff &bdquo;vidya&ldquo; hinzugef&uuml;gt.

	Derjenige, der &uuml;ber vollst&auml;ndiges Wissen &uuml;ber Gott (das Brahma) verf&uuml;gt, kann diese Weisheit mit anderen teilen. Wenn es einem Einzelnen an Wissen &uuml;ber Gottes Weisheit mangelt, wer sonst kann dies mit Zuversicht vermitteln? Unsere Antwort auf diese Frage lautet wie folgt: Nur Gott selbst kennt seine eigene Weisheit vollst&auml;ndig. Folglich muss Gott seine Weisheit pers&ouml;nlich vermitteln. Allerdings kommuniziert Gott mit niemandem direkt. Stattdessen erscheint Gott zwar nicht als Gott, vermittelt aber seine Weisheit, indem er die Gestalt eines Menschen annimmt. Es ist wichtig zu beachten, dass Gott zwar in menschen&auml;hnlicher Form erscheint, aber kein Mensch ist. In der Gestalt eines Menschen hat Gott seine Weisheit in ihrer Gesamtheit offenbart und sie als eine Wissenschaft mit vorgeschriebenen Prinzipien und Verordnungen dargestellt. Daher wird das, was Gott offenbart hat, als Brahma Vidya Shastra bezeichnet. Gott selbst hat das Brahma Vidya Shastra mitgeteilt, und es ist die Pflicht der Menschheit, es zu verstehen. Wenn eine Person das volle Verst&auml;ndnis des Brahma Vidya erlangt, wird sie von Karma befreit und kann sich mit Gott vereinen. Folglich m&uuml;ssen Einzelpersonen beharrlich daran arbeiten, sich Wissen &uuml;ber Gottes Wissenschaft anzueignen, bis sie Moksham (Befreiung) erlangen. Daher tr&auml;gt es treffend den Namen Brahma Vidya, da es sich um die h&ouml;chste Form der Bildung der Welt handelt.

	Gottes Dharmas werden im Brahma Vidya Shastra dargelegt, weshalb es in den g&ouml;ttlichen Schriften als Dharma Shastra bezeichnet wird. Gott offenbarte seine Shastra zun&auml;chst mit Verordnungen gleich zu Beginn der Sch&ouml;pfung. Anschlie&szlig;end entstanden zu unterschiedlichen Zeiten und an unterschiedlichen Orten drei g&ouml;ttliche Schriften. Diese drei g&ouml;ttlichen Schriften k&ouml;nnen als die drei Dharma Shastras betrachtet werden, die alle ausschlie&szlig;lich Dharmas enthalten. Folglich teilen alle drei Dharma Shastras die gleichen Prinzipien und sind in Gottes Dharmas verwurzelt. Sie sind sich einig in ihrer Treue zum Brahma Vidya und lehren Gottes Dharmas. Dadurch best&auml;tigen sich die drei Dharma Shastras gegenseitig und widersprechen sich nicht. <strong>Das erste G&ouml;ttliche</strong><strong> Die heilige Schrift ist als Bhagavad-Gita bekannt, die zweite g&ouml;ttliche Schrift hei&szlig;t Bibel und die dritte g&ouml;ttliche Schrift (die letzte g&ouml;ttliche Schrift) hei&szlig;t Koran. </strong>Obwohl diese drei Schriften unterschiedliche Namen tragen, vermitteln sie die Dharmas desselben Gottes.

	Im Anschluss an das Brahma Vidya Shastra &uuml;bermittelten drei Propheten Gottes Weisheit, die sp&auml;ter zu drei verschiedenen g&ouml;ttlichen Schriften wurde. Obwohl diese drei g&ouml;ttlichen Schriften getrennt sind, erl&auml;utern sie alle die gleichen Dharmas Gottes aus drei verschiedenen Perspektiven. Da die in diesen Schriften dargelegten Dharmas auf Wissenschaft basieren, werden sie genau so verwirklicht, wie sie dargelegt und im Vers bekr&auml;ftigt wurden <strong>&bdquo;bis Himmel und Erde verschwinden.&ldquo; </strong>Der Himmel und die Erde der Au&szlig;enwelt sind ewig, so wie Gott sie dazu gemacht hat. Allerdings sind die unsichtbaren Gegenst&uuml;cke von Erde und Himmel im menschlichen K&ouml;rper v&ouml;llig verg&auml;nglich. Daher muss der Ausdruck &bdquo;bis Himmel und Erde verschwinden&ldquo; als &bdquo;bis der menschliche K&ouml;rper stirbt (verschwindet)&ldquo; verstanden werden. Wenn ein Einzelner nach Gottes Weisheit strebt, muss er sich an alle Gebote Gottes (Dharmas) halten. Ohne die Dharmas Gottes mit ganzem Herzen zu praktizieren, kann man Paraloka nicht erreichen. Wie im Dharma Shastra dargelegt, kann Moksham (Befreiung) nur erreicht werden, wenn alle Dharmas erf&uuml;llt sind. Selbst wenn eine Person nicht einmal ein wenig von dem praktiziert, was im Dharma Shastra dargelegt wird, wird sie Moksham nicht erreichen. Anstatt nur etwas vorzuschlagen, <strong>&bdquo;Auch wenn eine Kleinigkeit nicht den vorgeschriebenen Dharmas entspricht&ldquo;, </strong>es kommt zum Ausdruck <strong>als &bdquo;nicht der kleinste Buchstabe, nicht der kleinste Federstrich.&ldquo; </strong>Daher ist es wichtig, jeden Aspekt des Dharma Shastra zu befolgen, ohne etwas zu &uuml;bersehen. Es ist wichtig zu wissen, dass der erw&auml;hnte Buchstabe und Strich einer Feder nichts mit der Schrift im Buch zu tun hat.
</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 10,
verse: ` <b>(9)	Das Matthäusevangelium, 5. Kapitel, 19. Vers.</b>`,
meaning: `<b>
(19) Daher wird jeder, der eines der geringsten dieser Gebote außer Acht lässt und andere entsprechend lehrt, im Königreich von Paraloka als der Geringste bezeichnet, aber wer diese Gebote ausübt und lehrt, wird im Königreich von Paraloka als „Groß“ bezeichnet. </b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">	Obwohl es im Dharma Shastra einige grundlegende Dharmas gibt, sind viele mit ihnen verbunden. Gottes Dharmas werden auch als bezeichnet <strong>Gebote</strong>. Es gibt in erster Linie <strong>zwei </strong>Es handelt sich um das wichtigste Gebot Gottes, mit ihm sind jedoch noch mehrere andere verbunden. Jeder, der auch nur das kleinste dieser zusammenh&auml;ngenden Gebote &uuml;bertritt und solche Lehren verbreitet, handelt gegen die Gerechtigkeit. Eine Person sollte keines der von Gott angeordneten Dharmas &uuml;bertreten, egal ob geringf&uuml;gig oder bedeutsam. Jeder einzelne Dharma, egal wie klein, sollte ausnahmslos flei&szlig;ig praktiziert werden. Einige Menschen sind jedoch vom Pfad der Dharmas abgewichen, anstatt sich auch nur an die kleinsten Dharmas zu halten. Sie haben nicht nur Adharmas angenommen, sondern auch solche Lehren verbreitet. Obwohl sie von der Gesellschaft als Gurus angesehen werden, haben sie es vers&auml;umt, Gottes Gebote richtig zu verstehen. Bedauerlicherweise haben sie Gottes Dharmas f&auml;lschlicherweise als Adharmas interpretiert und sind zu Bef&uuml;rwortern von Adharmas geworden. Sie f&uuml;hren die Menschen in die Irre, indem sie solche Lehren vermitteln und behaupten, dass sie wahre Weisheit und die echten Gebote Gottes vermitteln. SogarObwohl sie in den Augen der Welt als gro&szlig;e Gurus angesehen werden, gelten sie in Gottes Augen als die Geringsten.

  Diejenigen, die die Dharmas verstehen, vermitteln sie den Interessierten genau als Dharmas, auch wenn es sich dabei nicht um bekannte Gurus handelt. Manche Menschen interpretieren Gottes Dharmas f&auml;lschlicherweise als Adharmas und lehren im Gegenzug diese Adharmas. Folglich k&ouml;nnen diejenigen, die Adharmas lehren, das K&ouml;nigreich von Paraloka nicht erreichen. Die Unwissenden werden niemals das K&ouml;nigreich von Paraloka erreichen, da es ihnen dauerhaft verschlossen bleibt und sie f&uuml;r unw&uuml;rdig h&auml;lt. Selbst wenn jemand, der Gottes Gebote aus den Schriften versteht, nicht als Guru gilt, wird er einen bedeutenden Platz in Paraloka erlangen, wenn er die Dharmas lehrt, die er kennt. Eine solche Person ist nicht nur als Anh&auml;nger der Dharmas bekannt, sondern genie&szlig;t auch hohes Ansehen in Gottes Augen. Ein wahrer Dharma-Anh&auml;nger ist jemand, der selbst die kleinsten Dharmas Gottes bis ins kleinste Detail akribisch vermittelt.
</div></div>

</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 1,
pageNumber: 11,
verse: `<b>(10)	Das Matthäusevangelium, 5. Kapitel, 20. Vers.</b> `,
meaning: ` <b>
      (20) Denn ich sage euch: Wenn eure Gerechtigkeit nicht die der Pharisäer und Gesetzeslehrer übertrifft, werdet ihr mit Sicherheit nicht in das Königreich von Paraloka eingehen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Auf der Welt gibt es viele Pharisäer, der Anhänger und Lehrer. Es ist wichtig, über eine größere Weisheit zu verfügen als sie. Gott hat erklärt, dass diejenigen, die weniger Weisheit besitzen als Pharisäer, Anhänger und Lehrer, nicht in die Paraloka eintreten können. Wie der Vers andeutet: Wenn man über mehr Weisheit verfügt als Swamis und Pharisäer, die Yajnas (rituelle Opfer) durchführen und im Widerspruch zu den Anweisungen Gottes handeln, wird man leicht Paraloka erreichen.
</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 12,
verse: `<b>(11)	Das Matthäusevangelium, 5. Kapitel, 28. Vers.</b> `,
meaning: `<b>
(28) Aber ich sage euch: Wer eine Frau lüstern ansieht, hat in seinem Herzen bereits Ehebruch mit ihr begangen. </b>     `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> 	Menschliche Handlungen k&ouml;nnen in zwei unterschiedliche Ans&auml;tze eingeteilt werden: &auml;u&szlig;ere Handlungen, die beobachtbar sind, und innere Handlungen, die innerhalb der Gedanken und Gef&uuml;hle einer Person stattfinden. Beide Dimensionen sind in jedem Menschen vorhanden. Bei einem Ansatz f&uuml;hrt eine Person mit inneren Gedanken und Emotionen Handlungen aus, die mit ihren Gunas in Zusammenhang stehen. Beim anderen Ansatz werden dieselben Aktionen durch die Interaktion von Gunas und dem physischen K&ouml;rper ausgef&uuml;hrt. Die Folgen dieser Handlungen f&uuml;hren entweder zu Punya (gutes Karma) oder zu S&uuml;nde (schlechtes Karma). Es ist wichtig zu beachten, dass es zwei Arten von Aktionen gibt: physische (sichtbare) und nicht-physische (unsichtbare).<strong>). Bei der Beurteilung des Charakters einer Person verl&auml;sst sich die Gesellschaft oft auf ihre beobachtbaren k&ouml;rperlichen Handlungen, um festzustellen, ob sie als gut oder schlecht gilt. Allerdings wird es schwieriger, solche Urteile zu f&auml;llen, wenn die Handlungen einer Person innerlich sind und Gedanken und Emotionen beinhalten, da diese nicht ohne weiteres erkennbar sind. </strong>Es ist schwierig festzustellen, ob eine Person gut oder schlecht ist, wenn wir uns ihrer Handlungen nicht bewusst sind.

  Von einer Person <strong>ein Schinken </strong>(das Ego oder Selbstgef&uuml;hl), ob in ihren physischen Handlungen oder nicht-physischen Gedanken vorhanden, spielt eine entscheidende Rolle bei der Entstehung von Karma. S&uuml;nde oder Punya-Karma wird von einer Person aufgrund der Anwesenheit von Aham in ihrem K&ouml;rper empfangen. W&auml;hrend die &auml;u&szlig;eren Organe des K&ouml;rpers an k&ouml;rperlichen Handlungen beteiligt sind, ist es die Funktion von Aham, die das karmische Ergebnis dieser Handlungen beeinflusst. Selbst wenn eine Person nicht physisch an einer Handlung beteiligt ist, f&uuml;gt ihr Aham, der sich neben Buddhi (Intellekt) befindet, Karma an, basierend auf dem, was Aham in den Gedanken von Buddhi wahrnimmt, wenn Kontemplation unter dem Einfluss von Gunas durchgef&uuml;hrt wird. Wenn Aham nicht aktiv ist, wird eine Person kein Karma ansammeln, selbst wenn sie k&ouml;rperlicher oder nichtk&ouml;rperlicher Arbeit nachgeht. Dieses Konzept spiegelt sich in der ersten g&ouml;ttlichen Schrift wider, insbesondere im 17. Vers des Moksha Sanyasa Yoga, in dem es hei&szlig;t: <strong>&bdquo;Obwohl ein Mensch alle Lebewesen auf der Welt vernichtet, ohne dass Aham in seinen Gef&uuml;hlen vorhanden ist, wird er sich f&uuml;r die Tat des T&ouml;tens keine S&uuml;nde auferlegen und er wird nicht als M&ouml;rder betrachtet.&ldquo; </strong>Dies unterstreicht die Bedeutung von Aham f&uuml;r die Bestimmung der moralischen Konsequenzen der eigenen Handlungen. Jesus &uuml;bermittelte auch eine &auml;hnliche Botschaft, als er sagte: <strong>&bdquo;Wegen Aham wirst du durch deine Gedanken S&uuml;nde begehen, selbst wenn du die Tat nicht k&ouml;rperlich ausgef&uuml;hrt hast.&ldquo; </strong>Dies offenbart die Einheit in den Lehren sowohl der ersten als auch der zweiten g&ouml;ttlichen Schrift sowie die Konsistenz der vermittelten Weisheit. Die Handlungen einer Person, die ohne Aham ausgef&uuml;hrt werden, werden so betrachtet, als ob sie nicht getan worden w&auml;ren, und Gedanken, die Aham beinhalten, werden so behandelt, als ob die Handlung ausgef&uuml;hrt worden w&auml;re. Daher beeinflusst die Anwesenheit von Aham im K&ouml;rper die Anh&auml;ufung von Punya und S&uuml;nde durch das Jeevatma. Folglich wurde von Beginn der Sch&ouml;pfung an festgestellt, dass &bdquo;das Ausf&uuml;hren von Handlungen ohne Aham Karma Yogam ist&ldquo;, ein Konzept, das sowohl in der ersten als auch in der zweiten g&ouml;ttlichen Schrift wiederholt wird.</div></div>
</span>`
    },
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 13,
verse: `<b>(12)	Das Matthäusevangelium, 5. Kapitel, 29. und 30. Vers.</b>`,
meaning: ` <b>
(29) Wenn dich dein rechtes Auge straucheln lässt, reiße es aus und wirf es weg. Es ist besser für dich, einen Teil deines Körpers zu verlieren, als dass dein ganzer Körper in die Hölle geworfen wird.
<br><br>
(30) Und wenn deine rechte Hand dich zum Stolpern bringt, dann schneide sie ab und wirf sie weg. Es ist besser für dich, einen Teil deines Körpers zu verlieren, als dass dein ganzer Körper in die Hölle fährt.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">	Vers 29 erw&auml;hnt <strong>'Auge,' </strong>und Vers 30 erw&auml;hnt <strong>'Hand.' </strong>Bei n&auml;herer Betrachtung wird deutlich, dass der menschliche K&ouml;rper aus zwei Arten von K&ouml;rperteilen besteht: physischen oder sichtbaren und nicht-physischen oder subtilen. Es gibt insgesamt zehn (10) physische K&ouml;rperteile und f&uuml;nfzehn (15) feinstoffliche K&ouml;rperteile, sodass sich die Gesamtzahl einschlie&szlig;lich Jeevatma auf 25 bel&auml;uft. Jeder K&ouml;rperteil entspricht einer bestimmten Funktion innerhalb des K&ouml;rpers. Der menschliche K&ouml;rper besitzt f&uuml;nf Gnanendriyas (Sinnesorgane) und f&uuml;nf Karmendriyas (einklagbaren Organen ). Diese beiden Organs&auml;tze erm&ouml;glichen gemeinsam k&ouml;rperliche Handlungen. Die Gnanendriyas, zu denen Auge, Ohr, Nase, Zunge und Haut geh&ouml;ren, dienen als Rezeptoren, die &auml;u&szlig;ere Informationen an die inneren F&auml;higkeiten weiterleiten. Ebenso gibt es f&uuml;nf Karmendriyas &ndash; H&auml;nde, Beine, Mund, Anus und Sexualorgan. Der Manas (Geist) &uuml;bermittelt diese Informationen dann von den Sinnen an den Buddhi (Intellekt). W&auml;hrend die Gnanendriyas dazu dienen, externe Informationen aus der Umgebung in die Umgebung zu &uuml;bertragen Als innere F&auml;higkeiten &uuml;bermittelt der innere Buddhi Anweisungen durch die Manas an die Karmendriyas, die anschlie&szlig;end die vom Buddhi angewiesenen Handlungen ausf&uuml;hren.

  Menschen f&uuml;hren Handlungen aus, die durch das Zusammenspiel von Gnanendriyas (Sinnesorganen) und Karmendriyas (einklagbaren Organen ) koordiniert werden. Insbesondere die <strong>Auge </strong>unter den Gnanendriyas und den <strong>Hand </strong>Unter den Karmendriyas kommt ihnen eine besondere Bedeutung zu, weshalb beide in diesen Versen erw&auml;hnt werden. Auch wenn der Buddhi (Intellekt) die Karmendriyas nicht anweist, eine Aufgabe auszuf&uuml;hren, kann einer Person dennoch S&uuml;nde zugeschrieben werden, basierend auf den Gedanken des Buddhi, wenn Aham (Ego), das eng mit dem Buddhi verbunden ist, aktiv ist. Dies unterstreicht die zentrale Rolle des Auges bei m&ouml;glichen S&uuml;nden. Wenn zum Beispiel eine Person eine Frau mit l&uuml;sternen Gedanken ansieht, kann sie aufgrund des Einflusses von Aham eine S&uuml;nde begehen, selbst wenn sie der anderen Person keinen k&ouml;rperlichen Schaden zugef&uuml;gt hat. Das Auge schafft auf diese Weise die M&ouml;glichkeit, einem Individuum S&uuml;nde f&uuml;r Handlungen anzulasten, die im physischen Bereich m&ouml;glicherweise nie stattfinden. Deshalb r&auml;t uns der Vers, &bdquo;das Auge auszustechen und wegzuwerfen&ldquo;. Es ist jedoch wichtig zu beachten, dass dies nicht w&ouml;rtlich genommen werden sollte, da das physische Entfernen des Auges nicht die beabsichtigte Bedeutung des Verses ist. Der Vers erw&auml;hnt ausdr&uuml;cklich &bdquo;Ihr rechtes Auge&ldquo;, aber es ist wichtig zu verstehen, dass sowohl das rechte als auch das linke Auge zu &auml;hnlichen Ergebnissen f&uuml;hren k&ouml;nnen. S&uuml;nde kann aus beiden Augen entstehen. Allein die Erw&auml;hnung des rechten Auges regt zum Nachdenken &uuml;ber den Grund dieser Unterscheidung an.
</div></div>

<div class="container" style="color:black;font-size: 11px;">
          <img src="assets/img/gnanendriyalu.png"  style="width:100%;">
          <div class="io-jeeva">
          Jeeva
          </div>
          <div class="io-mind">
          Geist
          </div>
          <div class="io-chittam">
            Chittam
          </div>
          <div class="io-intellect">
          Intellekt
          </div>
          <div class="io-ego">
            Ego
          </div>
          <div class="so-eye">
          Auge
          </div>
          <div class="so-nose">
            Nase
          </div>
          <div class="so-ear">
          Ohr
          </div>
          <div class="so-tongue">
          Zunge
          </div>
          <div class="so-skin">
          Haut
          </div>
          <div class="ao-hands">
          Hände
          </div>
          <div class="ao-legs">
          Beine
          </div>
          <div class="ao-mouth">
          Mund
          </div>
          <div class="ao-anus">
            Anus
          </div>
          <div class="ao-sex-organ">
          Geschlechtsorgan
          </div>
        </div>

        Der menschliche K&ouml;rper weist von Natur aus Unterschiede zwischen seiner rechten und linken Seite auf, die oft mit St&auml;rke und Schw&auml;che verbunden sind. In dem erw&auml;hnten Vers werden beide rechten K&ouml;rperteile, n&auml;mlich das rechte Auge und die rechte Hand, angegeben. Ein weiterer wesentlicher Punkt, der in diesem Vers ber&uuml;cksichtigt werden muss, ist die Aussage<strong>&bdquo;Es ist besser f&uuml;r dich, einen Teil deines K&ouml;rpers zu verlieren, als dass dein ganzer K&ouml;rper in die H&ouml;lle geworfen wird.&ldquo; </strong>Es ist wichtig zu erkennen, dass weder das Auge noch die Hand als &auml;u&szlig;ere K&ouml;rperteile die direkten Quellen der S&uuml;nde sind. Der prim&auml;re Treiber der S&uuml;nde ist die Anwesenheit von Aham (Ego) im K&ouml;rper. Diese Perspektive stimmt mit den Lehren &uuml;berein, die sowohl in der ersten als auch in der zweiten g&ouml;ttlichen Schrift zu finden sind. Daher wird deutlich, dass &auml;u&szlig;ere K&ouml;rperbestandteile keinen direkten Einfluss auf den Erwerb oder die Erfahrung von S&uuml;nde haben. <strong>Es ist das Gef&uuml;hl von Aham im K&ouml;rper, das zur S&uuml;nde f&uuml;hrt. Der im K&ouml;rper wohnende Jeeva erf&auml;hrt die S&uuml;nde. </strong>Die Verantwortung f&uuml;r den Erwerb von Karma liegt im Gef&uuml;hl von Aham, und es ist die Pflicht von Jeeva, das zu erfahren Auswirkungen von Karma. Daher, Die extern Auge (Gnanendriya) Und Hand (karmendriya) funktioniert ohne R&uuml;cksicht auf Karma.

        Manche fragen sich vielleicht, warum Jesus dazu riet, das Auge auszustechen und die Hand abzuschneiden, wenn das nichts mit Karma zu tun hat. Unsere Antwort ist, dass, wenn das Auge externe Informationen &uuml;bermittelt, diese den Buddhi (Intellekt) erreichen. Anschlie&szlig;end verarbeitet der Buddhi diese Informationen gem&auml;&szlig; den Gunas. Wenn jedoch die <strong>Aham (Ego) wird unterdr&uuml;ckt und gel&ouml;st </strong>Durch diese sensorischen Eingaben verhindert es, dass sich S&uuml;nde und Punya in den Gunas manifestieren, die der Buddhi verarbeitet, oder in dem vom Auge wahrgenommenen Anblick. Durch die Trennung des inneren Aham von den Informationen, die das Auge liefert, kann man die mit dem Auge verbundene S&uuml;nde wirksam verhindern, &auml;hnlich wie das Entfernen des Auges selbst. Ebenso ist es, als ob das Ohr entfernt w&uuml;rde, wenn das Aham nicht mit dem Geh&ouml;rten verbunden ist. Es ist wichtig zu erkennen, dass S&uuml;nde und Punya nicht nur von den Augen, sondern auch von den anderen vier Sinnen ausgehen. Angesichts der entscheidenden Rolle des Auges bei den Gnanendriyas und der nat&uuml;rlichen Vorherrschaft des rechten Auges bei der visuellen Wahrnehmung betonte Jesus in dem Vers &bdquo;das rechte Auge ausstechen&ldquo;. Obwohl der Vers einfach erscheinen mag, sollte seine subtile Bedeutung verstanden werden.

        Ebenso ist die Erw&auml;hnung der rechten Hand unter den Karmendriyas von Bedeutung. Karma geht nicht nur von der rechten Hand aus, sondern auch von den Handlungen anderer Karmendriyas. Karma tritt auch dann auf, wenn die Gnanendriyas sich nicht mit k&ouml;rperlichen Aufgaben befassen, und wird durch das Funktionieren der Karmendriyas erzeugt. Wenn wir uns auf die f&uuml;nf Gnanendriyas beziehen, gruppieren wir die beiden Augen als eine Einheit, genauso wie beide Ohren als eins gez&auml;hlt werden. Obwohl es zwei Nasenl&ouml;cher gibt, werden sie zusammen als eine Nase behandelt. Die restlichen Bestandteile bestehen aus Haut und Zunge. Ebenso werden in den Karmendriyas die beiden H&auml;nde als eine Einheit betrachtet, und das Gleiche gilt auch f&uuml;r die beiden Beine. Die restlichen drei sind der Mund, der Anus und das Geschlechtsorgan und liegen nicht paarweise vor. Da das rechte Auge und die rechte Hand in diesen paarigen Organen vergleichsweise dominanter sind, werden in dem Vers das rechte Auge und die rechte Hand hervorgehoben. Das rechte Auge verf&uuml;gt &uuml;ber ein besseres Sehverm&ouml;gen und die rechte Hand ist vielseitiger bei der Ausf&uuml;hrung von Aufgaben. In einer subtileren Interpretation des Verses forderte uns Jesus dazu auf <strong>Unterdr&uuml;cke Aham, um zu verhindern, dass S&uuml;nde aus dem Anblick des Auges und den Handlungen der Hand entsteht. </strong>Es ist jedoch wichtig zu verstehen, dass das Entfernen des rechten Auges oder der rechten Hand den Zufluss von Karma nicht stoppt, da auch andere K&ouml;rperorgane Karma verursachen k&ouml;nnen. Dieser Vers unterstreicht die Idee, dass Aham die grundlegende Quelle der S&uuml;nde ist, und betont die Notwendigkeit, sie zu kontrollieren. Die Organe des K&ouml;rpers erzeugen keine S&uuml;nde, noch tr&auml;gt der K&ouml;rper die Last der S&uuml;nde. Stattdessen ist es das Aham, das die S&uuml;nde im K&ouml;rper ansammelt. Dar&uuml;ber hinaus erf&auml;hrt Jeevatma, ein Bestandteil des K&ouml;rpers, schlechtes und gutes Karma. Der K&ouml;rper umfasst f&uuml;nf Gnanendriyas, f&uuml;nf Karmendriyas, f&uuml;nf Vayus, f&uuml;nf Tanmatras und f&uuml;nf Antahkaranas, wobei der Jeevatma Teil der Antahkaranas ist. Dies summiert sich auf insgesamt f&uuml;nfundzwanzig Komponenten, einschlie&szlig;lich des Jeevatma innerhalb des K&ouml;rperger&uuml;sts. Im Wesentlichen kann ein tiefgreifendes Verst&auml;ndnis der Mechanismen des K&ouml;rpers zu einem tieferen Verst&auml;ndnis der Verse Jesu f&uuml;hren. Ein wahrer Gnani erkennt diese komplexe Zusammensetzung des K&ouml;rpers. Wie ein Spiritualist einmal poetisch ausgedr&uuml;ckt hat, sollte jemand, dem dieses Wissen fehlt, nicht als Gnani betrachtet werden.
        <i>
        Panchatatvamulanu panchikarinchaka
        Manchi yatulamanna maatalanna
        Kunchamandu gajamu gruddupettina chandambu
        Akhila jivasanga aatmalinga.

  </i>
  <b>Bedeutung:</b> - Der Begriff Sankhya bezieht sich auf das umfassende Wissen von Pancha Bhutas, das Himmel, Luft, Feuer, Wasser und Erde umfasst. Dieses Wissen umfasst das Verständnis, wie jedes dieser Elemente geschaffen wurde, wie sie in fünf verschiedene Komponenten unterteilt wurden und wie diese fünfundzwanzig Teile zusammen die verschiedenen sichtbaren und unsichtbaren Organe und Komponenten des Körpers bilden. Anzunehmen, dass man ein Gnani (ein wissender oder erleuchteter Mensch) ist, ohne über ein tiefes Verständnis des Sankhya des Körpers zu verfügen, kommt einer falschen Behauptung gleich. Das kommt der Behauptung gleich, ein Elefant habe ein Ei unter einen Korb gelegt. Selbst wenn ein Elefant sicher mit Ketten angebunden und unter einen Korb gelegt würde, würde er in Wirklichkeit keine Eier legen. Daher ist die Behauptung, dass ein Elefant Eier unter einen Korb gelegt habe, völlig unbegründet. In ähnlicher Weise ist es falsch, wenn jemand sich selbst als Gnani bezeichnet, wenn ihm das Wissen über die komplizierten Details der Körperorgane fehlt. Wahre Weisheit erfordert ein tiefes Verständnis der Zusammensetzung des Körpers, einschließlich seiner sichtbaren und unsichtbaren Teile.</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 14,
verse: `  <b>(13)	Das Matthäusevangelium, 6. Kapitel, 3. und 4. Vers.</b>`,
meaning: ` <b>
(3) Aber wenn du Dharma machst, lass deine linke Hand nicht wissen, was deine rechte Hand tut.
<br><br>
(4) Damit dein Geben im Verborgenen geschieht. Dann wird dich dein Vater belohnen, der sieht, was im Verborgenen geschieht..
</b>`,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> 	Viele Prediger haben diesen Vers falsch interpretiert und meinen, er beziehe sich auf eine Spende. An manchen Orten der Anbetung wird sogar vorgeschlagen, dass das Geld, das f&uuml;r Gottes Dienst gespendet wird, so diskret sein sollte, dass &bdquo;die rechte Hand nicht wissen sollte, was die linke Hand tut&ldquo;. Daher werden Spenden vor der Spende oft versteckt oder in die Hand gewickelt. Es ist jedoch wichtig klarzustellen, dass es in diesem Vers nicht um Spenden geht; es geht um Dharma. Es gibt einen wesentlichen Unterschied zwischen Dharma und Spende. <strong>Beim Spenden geht es darum, anderen etwas zu geben, w&auml;hrend sich Dharma auf die Prinzipien bezieht, die man praktiziert. </strong>Um wirklich zu verstehen, wie man Dharma praktiziert, ist es wichtig zu verstehen, was diese Dharmas beinhalten. In diesem Vers wird von einer Spende keine Rede; Vielmehr betont es den Dharma. Gottes Dharmas sind in erster Linie zwei, wie in der g&ouml;ttlichen Schrift dargelegt. Der dritte ist physischer Natur. Es gibt auch andere Dharmas, die mit diesen drei Grundprinzipien verbunden sind. Um Gott zu erreichen, muss sich ein Mensch in erster Linie auf diese drei wesentlichen Dharmas konzentrieren, w&auml;hrend sich andere Dharmas um Aspekte Gottes drehen. Diese drei Kern-Dharmas sind die Schl&uuml;sselpraktiken, um Gott zu erreichen.

Die drei Dharmas Brahma, Karma und Bhakti Yoga sind notwendig, um Gott zu erreichen. Bei zwei davon handelt es sich um eine innere &Uuml;bung mit Gef&uuml;hlen oder Gedanken, bei einer um eine &auml;u&szlig;ere &Uuml;bung. Die Praxis der ersten beiden Dharmas ist f&uuml;r andere nicht erkennbar. Wenn es jedoch um den dritten Dharma geht, besteht die M&ouml;glichkeit, dass er bemerkt wird Andere. Aus diesem Grund bezieht sich Jesus in diesem Vers auf ein einzelnes &bdquo;Dharma&ldquo; und nicht auf &bdquo;Dharmas&ldquo;. Er betont, dass man einen Dharma, der von anderen wahrgenommen werden kann, mit Vorsicht und im Verborgenen praktizieren sollte. Er bringt dies zum Ausdruck, indem er sagt: <strong>&bdquo;Lass deine linke Hand nicht wissen, was deine rechte tut.&ldquo; </strong>Die zugrunde liegende Botschaft ist, dass andere Ihre Dharma-Praxis, wenn sie sie beobachten, m&ouml;glicherweise falsch interpretieren oder negativ beeinflusst werden. Daher r&auml;t Jesus, dass die Aus&uuml;bung des Dharma diskret und ohne die Anerkennung anderer erfolgen sollte.
</div></div>
</span>`
},
{
  chapterName: "Das Matthäusevangelium",
  chapterNumber: 2,
  pageNumber: 15,
  verse: `  <b>(14)	Das Matthäusevangelium, 6. Kapitel, 6. Vers.</b> `,
  meaning: `<b>
  (6) Aber wenn du betest, geh in dein Zimmer, schließe die Tür und bete zu deinem Vater, der unsichtbar ist. Dann wird dich dein Vater belohnen, der sieht, was im Verborgenen geschieht.</b>`,
  pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wenn Sie zu Gott beten, ist es wichtig sicherzustellen, dass Ihre Gebete mit Dharma gefüllt sind. Bloße verbale Äußerungen ohne Dharma stellen kein echtes Gebet dar und werden Sie nicht mit Gott verbinden. Wenn Sie also ein Gebet verrichten, das von anderen beobachtet werden kann, forderte Jesus Sie auf, in einen privaten Raum zu gehen, die Tür zu schließen und Ihre Gebete dem inneren Atma, der göttlichen Präsenz in Ihnen, darzubringen. Atma, der im Körper ist, ist der Vater der Menschen. Ein Gebet, das anderen vielleicht bekannt ist, sollte so verrichtet werden, dass es niemandem auffällt. Auf diese Weise wird Atma, der sich heimlich im Körper befindet, Sie belohnen. In der ersten göttlichen Schrift wird diese Praxis als bezeichnet <b>„Brahma (Großer) Yogam.“</b></div></div>
  </span>`
    },
    {
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 16,
verse: `  <b>(15)	Das Matthäusevangelium, 6. Kapitel, 7. und 8. Vers. </b> `,
meaning: `  <b>
(7) Wenn ihr betet, plappert nicht weiter wie die Heiden, denn sie glauben, dass sie wegen ihrer vielen Worte erhört werden.
<br><br>
(8) Sei nicht wie sie, denn dein Vater weiß, was du brauchst, bevor du ihn fragst.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Viele Menschen in der heutigen Gesellschaft beten eher mit sinnlosen Worten als <b>„Yogam“</b> das sich an den Dharma hält, wenn es darum geht, Gott zu erreichen. Sie gehen davon aus, dass Gott ihre Wünsche erfüllen wird, wenn sie viele Worte verwenden. Ihre Absicht ist nicht, sich mit Gott zu vereinen, sondern vielmehr, weltliche Wünsche und Vorteile zu suchen. Sie sollten jedoch nicht wie sie beten. Dein Vater, Atma, weiß bereits alles, noch bevor du fragst. Er weiß, was Ihnen gewährt werden sollte und was nicht. Daher ist es sinnlos, sich nach materiellen Vorteilen zu erkundigen. Dein Vater, Atma, führt dich entsprechend deinem Karma. Daher versorgt Sie Atma mit dem, was Sie durch Ihr vergangenes Karma verdient haben. Ob Sie darum bitten oder nicht, Atma verleiht alles entsprechend seinem Karma. Atma ist der Vater aller Menschen, und der Heilige Geist, der Vater von Atma, ist der Zeuge aller Dinge.
</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 17,
verse: ` <b>(16)	Das Matthäusevangelium, 7. Kapitel, 13. und 14. Vers.</b> `,
meaning: `<b>
(13) Treten Sie durch das schmale Tor ein. Denn weit ist das Tor und breit ist der Weg, der ins Verderben führt, und viele gehen hindurch.
<br><br>
(14) Aber klein ist das Tor und schmal der Weg, der zum Leben führt, und nur wenige finden ihn.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Es gibt zwei Wege auf dieser Welt: Der eine ist der Weg des Paramatma (des Heiligen Geistes) und der andere ist der Weg der Maya. Während es nur sehr wenige gibt, die Gott suchen, fühlen sich viele vom weiten Pfad der Maya angezogen. Das Tor nach Moksham ist eng und schwierig zu durchqueren. Auch der Weg Gottes ist schmal und nur wenige schaffen es, ihn zu entdecken.

  Der Vers erwähnt Gottes Tor (Eingang) und die Straße. Der erste ist der Eingang und der nächste ist der Weg. Für alle Menschen gibt es nur zwei Wege. Einer ist schmal und der andere breit. Das Tor zur schmalen Straße ist schmal und der Eingang zur breiten Straße ist breit. Der Eingang und der Weg müssen ein paar Mal größer sein als derjenige, der eintritt. Dann ist nur noch das Betreten des Tores und der Straße möglich. Die Größe des schmalen Tores und die Breite des schmalen Weges entsprechen der Größe der Person, die eindringt. Aber bei der zweiten Wahl sind die Größe des breiten Tors und die Breite der breiten Straße 108-mal größer als die Person, die eintritt. Auf diese Weise gibt es auf dieser Welt nur zwei Wege – einen mit einem 108-mal breiteren Tor und einer breiten Straße und den anderen mit einem Tor und einem Weg in exakter Größe. Der Herr verglich diese beiden Arten von Toren und Wegen mit Weisheit und Unwissenheit. Der Weg der Weisheit ist sehr schmal und die Eingangsgröße ist begrenzt, was das Gehen zu einer Herausforderung macht. Der Weg des Unwissenden ist 108-mal größer und frei von Hindernissen. Der Weg der Weisheit ist schmal und hat Hindernisse, aber sein Ziel ist Paramatma. Auch wenn es auf dem breiten Tor und dem breiten unwissenden Weg keine Hindernisse gibt, führt er zu Satan. Paramatmas Weg ist ohne Geburt und Tod, ohne Zerstörung und befindet sich immer in einem Zustand ohne Veränderung. Satans Weg hat Geburt, Tod und Zerstörung und ist ständig im Wandel. Obwohl der Weg von Paramatma weit überlegen und der Weg Satans der schlechteste ist, entscheiden sich die meisten Menschen dafür, den Weg Satans zu gehen. Wenn eine Person den Weg Satans betritt, werden sie von allen ihren Gefährten unterstützt und verursachen keinen Ärger. Es wird keine finanziellen Schwierigkeiten geben und das Leben wird sich angenehm anfühlen. Wenn sich jemand jedoch für den Weg der Weisheit entscheidet, können seine Verwandten und Ehepartner zu Feinden werden und ihm den Weg versperren. Das Leben kann herausfordernd werden. Daher wählen, wenn überhaupt, nur sehr wenige unter den Millionen den Weg der Weisheit.

  Viele Menschen gehen den weiten, unwissenden Weg entlang, der weder Hindernisse noch Widerstand darstellt. Überraschenderweise bemerken sie nicht, dass es einen schmalen Durchgang gibt, der nach Moksham und zum Vater der Paraloka führt. In der Bhagavad-Gita stellt Krishna fest, dass nicht einmal einer unter Tausenden den schmalen Pfad beschreiten möchte. Selten betritt jemand es, und noch seltener erreicht man das Ziel aufgrund von Hindernissen, die von Maya gestellt werden. Krishna betont in der Bhagavad-Gita weiter, dass die Person, die diese Hindernisse überwindet und das Ziel erreicht, als „der Gesegnete“ gilt und dass sich eine solche Person mit dem ewigen Paramatma vereinen wird. Sowohl Krishna als auch Jesus repräsentieren das Paramatma. Krishna erläuterte in der Bhagavad-Gita gegen Ende des Dvapara Yuga die Wege der Weisheit und Unwissenheit, während Jesus dreitausend Jahre nach Beginn des Kali Yuga eine ähnliche Botschaft im heiligen Text übermittelte. Wer die von Sri Krishna und Jesus Christus erklärten Wege der Weisheit und Unwissenheit versteht, sollte sich auf den vorgeschlagenen Weg der Weisheit begeben und trotz aller Hindernisse bestehen bleiben, bis er schließlich Paramatma erreicht, das ewige Moksham.

</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 18,
verse: ` <b>(17)	Das Matthäusevangelium, 7. Kapitel, 7. und 8. Verse.</b>
`,
meaning: `
<b>
(7) Bitte, und es wird dir gegeben; Suche und du wirst finden; klopfe an und die Tür wird dir geöffnet.<br><br>
(8) Denn jeder, der bittet, empfängt; wer sucht, findet; Und wer anklopft, dem wird die Tür geöffnet.
</b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> 	In diesem Vers sind drei wesentliche Verben:<strong>fragen, suchen und klopfen</strong>. Jesus hat uns angewiesen, diese drei Dinge in einem spirituellen Kontext zu tun. Die Lehren des Herrn drehen sich im Gegensatz zu vielen anderen nicht um weltliche Angelegenheiten. Leider haben viele diesen Vers missverstanden und ihn als Aufruf zu materiellem Segen interpretiert. Folglich begannen die Menschen entgegen Seiner urspr&uuml;nglichen Botschaft, den Herrn um irdische Gef&auml;lligkeiten zu bitten. Obwohl die Menschen die Heilige Bibel lesen, ist Satan in ihre Herzen eingedrungen, hat ihr Verst&auml;ndnis f&uuml;r die Lehren Jesu getr&uuml;bt und sie dazu gebracht, nach materiellen W&uuml;nschen zu streben. Es ist nicht die Absicht des Menschen, Gottes Wort zu &uuml;bertreten, aber Satan nutzt seinen Mangel an Verst&auml;ndnis aus und t&auml;uscht ihn, indem er denkt, er versto&szlig;e nicht gegen g&ouml;ttliche Gebote. In Wirklichkeit f&uuml;hrt dies dazu, dass sie Gottes Wort &uuml;bertreten. Satan, eine Sch&ouml;pfung Gottes, existiert &uuml;berall dort, wo Gottes Gegenwart sp&uuml;rbar ist. Wo immer Gottes Wort bleibt, kann auch der Einfluss Satans vorhanden sein. Daher ist es von entscheidender Bedeutung, Gottes Verse sorgf&auml;ltig zu verstehen und uns bei der Interpretation der Heiligen Schrift vor dem Einfluss Satans zu sch&uuml;tzen.

  Wir sollten Gott bitten, Gott suchen und an Gottes T&uuml;r klopfen. Das ist der Weg Gottes. Wenn du um etwas anderes bittest oder etwas anderes suchst, wird es der Weg Satans (Mayas) sein. Wer Gottes Weg folgt, sucht Gottes Weisheit. Sie haben vielleicht viele Fragen: Wie geht es Gott? Wie k&ouml;nnen wir Gott erreichen? Wie k&ouml;nnen wir alle Details &uuml;ber Gott verstehen? Gehen Sie nicht davon aus, dass niemand auf der Erde diese Fragen beantworten kann. Gott kommt und liefert die Antworten, die Sie suchen, wenn die Menschen auf der Erde aufgrund des Einflusses Satans keinen Zugang zu Gottes Informationen haben. Sie k&ouml;nnen Antworten auf Ihre Fragen finden, wissen aber m&ouml;glicherweise nicht, wer diese Antworten liefert. Selbst wenn Gott auf der Erde geboren wird und Antworten bietet, nehmen wir ihn oft als einen normalen Menschen und nicht als Gott wahr. Wenn Sie fragen, werden Sie vollkommene Weisheit erlangen. Wenn Sie suchen, werden Sie entdecken, dass Gott in menschlicher Form auf die Erde gekommen ist. Wenn Gott auf der Erde inkarniert, erhebt er nicht den Anspruch, Gott zu sein, und offenbart sich niemandem. Das ist seine Regel. Nach dieser Regel werden diejenigen, die nicht suchen, nicht finden, aber die Suchenden werden Ihn erkennen. Da nur wenige um Weisheit baten, als der Herr Jesus auf der Erde war, teilte er seine Weisheit mit ihnen. Weil es so wenige Suchende gab, erschien Er niemandem als Gott; F&uuml;r alle schien er ein gew&ouml;hnlicher Mann zu sein. Auch seine zw&ouml;lf J&uuml;nger sahen ihn als Prediger und waren sich nicht bewusst, dass Paramatma, der das gesamte Universum umfasste, als Jesus inkarniert war. Er verhielt sich absichtlich so, dass niemand ihn als Gott erkennen konnte.

  Der K&ouml;nig von Paraloka, Paramatma, wusch seinen J&uuml;ngern w&auml;hrend seiner Zeit als Mensch auf der Erde die F&uuml;&szlig;e. Diese dem&uuml;tige Tat machte es f&uuml;r seine J&uuml;nger und andere schwierig, ihn zu erkennen. Bedauerlicherweise erkannten die Menschen ihn nicht als den Herrn und behandelten ihn respektlos, indem sie ihn als einen gew&ouml;hnlichen Menschen betrachteten. Er ertrug Speichel in sein Gesicht, eine Dornenkrone auf seinem Kopf, Schl&auml;ge und die Kreuzigung. Selbst als Jesus starb und am dritten Tag im selben K&ouml;rper wieder auferstand, hielten ihn einige seiner J&uuml;nger f&uuml;r einen Teufel. Dies unterstreicht, dass seine J&uuml;nger zwar neugierig, aber nicht wirklich suchend waren. Wie das Sprichwort sagt<strong>, &bdquo;Sehen ist gr&ouml;&szlig;er als Zuh&ouml;ren&ldquo; </strong>diejenigen, die Ihn pers&ouml;nlich bezeugten, hatten einen h&ouml;heren Status als diejenigen, die lediglich Seine Lehren h&ouml;rten. W&auml;hrend die Menschen die M&ouml;glichkeit hatten, den Gott der ganzen Welt in der Gestalt von Jesus zu sehen, war es, als h&auml;tten sie ihn nicht wirklich gesehen. In diesem Zusammenhang beschrieb der Herr seine J&uuml;nger als blind, obwohl sie k&ouml;rperlich sehend waren. Um eine solche Blindheit zu vermeiden, sollte man Gott aktiv suchen. Wie der Vers andeutet, empf&auml;ngt jeder, der bittet, und jeder, der sucht, findet. Daher erh&auml;lt der Fragesteller Gottes Worte, der Suchende erh&auml;lt Gottes Form. Derjenige, der sieht, ist gr&ouml;&szlig;er als derjenige, der zuh&ouml;rt, und derjenige, der erlebt, ist gr&ouml;&szlig;er als derjenige, der sieht. Basierend auf diesem Prinzip erh&auml;lt derjenige, der anklopft, Zugang zum Reich des Moksham. Beim Klopfen geht es in diesem Zusammenhang nicht darum, an die T&uuml;r eines Nachbarn oder eines Fremden zu klopfen, sondern vielmehr darum, Zutritt zum K&ouml;nigreich Moksham und zu den Toren des K&ouml;nigreichs Paraloka zu suchen. Diejenigen, die Moksham suchen, vereinen sich mit Paramatma und erfahren seine wahre Essenz. Wer es gewohnt ist, zu bitten und zu suchen, sollte unbedingt versuchen, sich mit Gott zu vereinen. Das hei&szlig;t, sie werden auf jeden Fall ein Klopfer. Durch die Prozesse des Bittens, Suchens und Anklopfens kann jeder mit Gott in Einklang kommen. Daher sollten diese drei wesentlichen Eigenschaften von jedem Einzelnen gepflegt werden, wie im oben genannten Vers dargelegt. Der F&uuml;hrung Gottes folgend, erlangt der Fragesteller Weisheit, der Suchende findet Bhagavan und derjenige, der anklopft, erh&auml;lt Zugang zum Haus von Moksham.</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 19,
verse: `<b>(18)	Das Matthäusevangelium, 7. Kapitel, 15. Vers.</b>`,
meaning: ` <b>
(15) Hütet euch vor falschen Propheten. Sie kommen im Schafspelz zu Ihnen, aber Innerlich sind sie wilde Wölfe.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Menschen brauchen F&uuml;hrung, um ihren Weg zu Gott zu finden, und diese F&uuml;hrung kommt oft von anderen. Um auf Gottes Weg zu gehen, muss eine Person einem anderen vertrauen. Diejenigen, die diesem spirituellen Weg folgen, verlassen sich darauf, dass ihre F&uuml;hrer ihnen den Weg zeigen. Die Reise des Anh&auml;ngers h&auml;ngt vom F&uuml;hrer ab, da er dem Weg folgen muss, den der F&uuml;hrer beleuchtet. Dadurch ist der Follower auf den Leitfaden angewiesen, und wenn der Guide die richtige Richtung vorgibt, wird der Follower korrekt voranschreiten. Umgekehrt kann es sein, dass der Anh&auml;nger vom Weg abweicht, wenn der F&uuml;hrer die falsche Richtung vorgibt. Das endg&uuml;ltige Ziel eines gew&ouml;hnlichen Menschen wird stark vom gew&auml;hlten F&uuml;hrer oder Guru beeinflusst. Sobald eine Person als Guru anerkannt wird, neigen Einzelpersonen dazu, ihr Leben lang an ihre F&uuml;hrung zu glauben und ihr zu vertrauen. Daher sollten Sie bei der Auswahl einer Person als Guru oder F&uuml;hrer gro&szlig;e Sorgfalt walten lassen. In dem oben erw&auml;hnten Vers warnte der Herr: <strong>&bdquo;H&uuml;ten Sie sich vor falschen Propheten.&ldquo; </strong>Er warnte davor, dass einige zeitgen&ouml;ssische Gurus m&ouml;glicherweise keine echten F&uuml;hrer seien. Sie pr&auml;sentieren sich vielleicht im Schafspelz und geben vor, echte Gurus zu sein, aber in Wirklichkeit sind sie wie verkleidete wilde W&ouml;lfe. Den Lehren Jesu zufolge k&ouml;nnen sich viele Menschen wie Gurus kleiden und verhalten und in ihren Reden sogar W&ouml;rter wie Gott, Weisheit und Atma verwenden. Ihre wahre Natur f&uuml;hrt Sie jedoch m&ouml;glicherweise nicht n&auml;her zu Gott. So wie ein Wolf, der sich unter der Schafshaut verbirgt, kein Schaf ist, sind diese Individuen trotz ihres Aussehens keine echten Gurus. Daher r&auml;t der Herr, wachsam und vorsichtig gegen&uuml;ber falschen Propheten zu sein, um zu vermeiden, dass man sein Leben verschwendet, indem man denen folgt, die keine wahre F&uuml;hrung bieten.</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 20,
verse: `<b>(19)	Das Matthäusevangelium, 7. Kapitel, 21. Vers.</b>`,
meaning: ` <b>
(21) Nicht jeder, der zu mir sagt: „Herr, Herr“, wird in das Königreich eingehen Paraloka, aber nur derjenige, der den Willen meines Vaters tut, der in Paraloka ist. </b>
`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Herr Jesus ging von Paramatma aus. Jesus ist Bhagavan, der in menschlicher Form inkarniert ist, während Paramatma, der Vater von Paraloka, Gott in einem formlosen Zustand ist, der im gesamten Universum allgegenwärtig ist. Als Bhagavan, verkörpert als Jesus, auf der Erde wandelte, erkannten einige seine göttliche Großartigkeit und verehrten ihn für ihre materiellen Wünsche. Sie sprachen ihn mit „Herr, Herr“ an und suchten nach persönlichem Gewinn. Es reicht jedoch nicht aus, sich der sichtbaren Form des Herrn zu nähern und ihn groß zu nennen, ohne göttliche Weisheit zu erlangen. Obwohl das Eine in einer sichtbaren Form und das Eine in einer unsichtbaren Form gleich sind, gibt es in der sichtbaren Form inhärente Beschränkungen, wohingegen der unsichtbare Vater von Paraloka grenzenlos ist. Der grenzenlose Paramatma nimmt gelegentlich eine greifbare Form an, um der Menschheit seine göttlichen Lehren zu vermitteln. Jesus ist die von Paramatma zu diesem Zweck gewählte Form. Während der Herr sich uns als Jesus vorstellte, sprach der Vater von Paraloka durch die Worte Jesu. Gott inkarnierte als Jesus, um seine Dharmas zu verkünden.

  Jesus einfach „Herr“ zu nennen, ohne Gottes Weisheit in die Tat umzusetzen und sich dem Willen des Vaters von Paraloka anzuschließen, bringt keinen wirklichen Nutzen. Derjenige, der Gottes Weisheit aktiv praktiziert, steht höher als derjenige, der lediglich den Namen des Herrn ausspricht. Derjenige, der sich an Gottes Worte hält, ist wichtiger als derjenige, der nur vor Gott grüßt. Eine Person, die in Übereinstimmung mit Gottes Geboten lebt, folgt wirklich Gottes Willen, und solche Personen sind für Paraloka (Moksham) bestimmt. Gott sucht keine Schmeichelei und gibt ihr nicht nach; vielmehr freut sich Gott über diejenigen, die seine Weisheit annehmen und anwenden. Daher ist es sinnvoller, die Lehren Gottes in die Tat umzusetzen, als nur Lob auszusprechen. Gott besitzt ein Verständnis für die Gedanken und Absichten aller Wesen und kann zwischen denen, die seine Weisheit wirklich verstehen und danach leben, und denen, die dies nicht tun, unterscheiden. Diejenigen, die Gottes Weisheit verstehen und danach leben, legen besonderen Wert auf Gott. Wer die Weisheit missversteht oder missachtet und nicht im Einklang mit Gottes Geboten handelt, kann Moksham nicht erreichen.
</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 21,
verse: ` <b>(20)	Das Matthäusevangelium, 7. Kapitel, 22. und 23. Vers. </b>`,
meaning: ` <b>
(22) Viele werden an jenem Tag zu mir sagen: „Herr, Herr, haben wir nicht in deinem Namen prophezeit und in deinem Namen Dämonen ausgetrieben und in deinem Namen viele Wunder vollbracht?“
<br><br>
(23) Dann werde ich ihnen deutlich sagen: „Ich habe euch nie gekannt.“ Weg von mir, ihr Übeltäter!‘</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Manche Menschen, die die Gr&ouml;&szlig;e des Herrn (Jesus) erkennen, &uuml;bersehen m&ouml;glicherweise Paramatma, den Herrscher von Paraloka, und konzentrieren sich ausschlie&szlig;lich darauf, Jesus zu loben. Paramatma, der Vater der ganzen Welt, sandte einen Teil von sich selbst als Jesus. Jesus besitzt so viel Macht wie Paramatma. Den Herrn Jesus zu preisen ist vergleichbar mit dem Lob des Vaters, Paramatma. Viele Menschen loben den Herrn, aber es gibt auch solche, die dies tun aus egoistischen Motiven, w&auml;hrend andere in ihrer Hingabe an Gott selbstlos sind. Der Vater von Paraloka &uuml;bermittelte seine Botschaft bei zahlreichen Gelegenheiten durch Jesus, den er sandte. Viele sind mit den Worten des H&ouml;chsten Vaters vertraut, verstehen aber seine wahre Natur nicht. Man k&ouml;nnte behaupten, dass nicht einmal einer von Millionen, die die Worte des Vaters lesen, zuh&ouml;ren und ihn preisen, das eigentliche Wesen des Vaters wirklich versteht. Der Herr verk&uuml;ndete Gottes Gebote, Weisheit und Verse. Der sichtbare Herr (Jesus) dient als Symbol des unsichtbaren Gottes, und er ist das Bild und der Vertreter Gottes. Diejenigen, die die in den Versen enthaltene Weisheit und Gebote nicht begreifen, k&ouml;nnen nicht in vollem Umfang von ihrem Lobpreis f&uuml;r den Herrn profitieren.

  Die Menschheit kann nur einen gewissen Nutzen daraus ziehen, den Herrn als den H&ouml;chsten zu preisen. Es ist unbedingt zu erkennen, dass der ultimative Nutzen f&uuml;r eine Person darin besteht, Paraloka zu erreichen. Die bedeutendste Errungenschaft, die man erreichen kann, ist Paraloka. Es ist wichtig zu verstehen, dass das ultimative Ziel f&uuml;r jeden darin besteht, sich aus der Welt Satans (Maya) zu befreien und in das Reich Gottes einzutreten. Der ultimative und bedeutendste Gewinn f&uuml;r die Menschheit besteht darin, sich mit Gottes Paraloka zu vereinen, ohne jemals in diese Welt zur&uuml;ckzukehren, in der Satan lebt. Es gibt nichts Wertvolleres f&uuml;r einen Menschen, als Zugang zu Paraloka zu erhalten. Um solch enorme Vorteile zu erzielen und eine Verstrickung mit Satan zu vermeiden, muss man Gottes Weisheit vollst&auml;ndig erfassen. Diejenigen, die sich nicht mit der tiefen Weisheit befassen, die in den Versen Jesu und seinen Geboten enthalten ist, werden nur teilweise Anh&auml;nger und keine vollst&auml;ndigen Gl&auml;ubigen sein. Gesegnet ist derjenige, der alle Lehren des Herrn befolgt, ohne die Grenzen seiner Gebote zu &uuml;berschreiten. Selbst diejenigen, die Paramatmas Weisheit m&ouml;glicherweise nicht vollst&auml;ndig verstehen, sind keine vollst&auml;ndigen Gl&auml;ubigen, obwohl sie gro&szlig;e Prediger und gl&uuml;hende Lobpreiser des Herrn sind. Damit wollen wir solche Menschen nicht abtun, sondern betonen, dass sie an Gott glauben, ohne vollkommen gl&auml;ubig zu sein. Der Zweifel steckt in jedem Menschen, bis er Gottes Weisheit vollst&auml;ndig versteht, auch wenn er jetzt vielleicht noch nicht offensichtlich ist. Gro&szlig;e Prediger, die glauben, dass sie dem Herrn mit ganzem Herzen treu sind, hegen m&ouml;glicherweise immer noch Zweifel, bis sie ein umfassendes Verst&auml;ndnis der Weisheit Gottes erlangt haben. Deshalb verk&uuml;ndete der Herr: <strong>&bdquo;Derjenige, der mir mit seinem Manas Vertrauen schenkt, ist dem &uuml;berlegen, der mir schmeichelt.&ldquo; </strong>Vollst&auml;ndiger Glaube erfordert die volle Weisheit Gottes.

  Man kann sagen, dass diejenigen, die nicht verstehen, dass Jesus und Gott eins sind, und diejenigen, die glauben, dass Jesus als Jesus wiederkommen wird, die Weite Gottes nicht begreifen. Wer nicht erkennt, dass Gott ewig ist, ohne Anfang und Ende, dass Gott viele Male auf die Erde herabgestiegen ist und dass Er kommen wird, wann immer es n&ouml;tig ist, dem mangelt es an vollkommener Weisheit. Diejenigen mit vollkommener Weisheit k&ouml;nnen die Ankunft Gottes erkennen, w&auml;hrend diejenigen ohne absolute Weisheit sein Kommen nicht erkennen k&ouml;nnen. Selbst wenn Gott menschliche Gestalt angenommen hat und vor einer Person stand, kann es sein, dass derjenige, der nur seine &auml;u&szlig;ere Erscheinung und sein Handeln sieht, Gott nicht erkennt. Wenn der Herr inkognito erscheint, erkennen ihn einige Christen m&ouml;glicherweise nicht und sind sich seiner Gegenwart m&ouml;glicherweise nicht bewusst, sogar wenn sie versuchen, ihn zu taufen.

  Auf der Erde sind Gl&auml;ubige besser als Ungl&auml;ubige, und absolute Gl&auml;ubige &uuml;bertreffen gew&ouml;hnliche Gl&auml;ubige. Nur absolute Gl&auml;ubige k&ouml;nnen Paraloka betreten. Gott akzeptiert sie nicht, bis sie absolute Gl&auml;ubige werden. Wenn Gott Paraloka betritt, erkennt er nur absolute Gnanis an. Wenn jemand kein absoluter Gnani ist, wird Gott sagen: &bdquo;Ich kenne ihn nicht.&ldquo; Daher muss man danach streben, absolute Weisheit zu erlangen. Viele streben danach, n&auml;herzukommen Gott und betrete sein Reich. Da sie sich jedoch in der Herrschaft Satans (Maya) befinden, unternimmt Satan alle Anstrengungen, um sie daran zu hindern, Gott zu erreichen und vollst&auml;ndige Gnanis zu werden. Selbst Prediger, die sich des Widerstands Satans gegen Gott bewusst sind, k&ouml;nnen das Ausma&szlig; von Satans Einfluss m&ouml;glicherweise nicht vollst&auml;ndig begreifen. Diejenigen, denen ein umfassendes Verst&auml;ndnis der Aktivit&auml;ten Satans fehlt, folgen m&ouml;glicherweise versehentlich Satans Weg, w&auml;hrend sie glauben, sie seien auf dem Weg zu Gott. Aus diesem Grund hat Gott erkl&auml;rt, dass Prediger, die davon ausgehen, dass sie Gott nahe stehen, m&ouml;glicherweise dennoch nicht in seine Gegenwart gelangen.

  In dem Vers sagte Jesus: <strong>&bdquo;Obwohl ihr in meinem Namen D&auml;monen austreibt und Wunder vollbringt und in meinem Namen Kranke heilt, seid ihr &Uuml;belt&auml;ter. Geh weg von mir.&ldquo;</strong>

  In der heutigen Gesellschaft betrachten die Menschen diejenigen, die im Namen Gottes Wunder vollbringen, oft als wahre Anh&auml;nger und glauben, dass sie dem Herrn nahe stehen. Sogar diejenigen, die selbst Wunder wirken, denken m&ouml;glicherweise, dass sie in enger Verbindung mit dem Herrn stehen. Diese Wahrnehmung entsteht, weil sie sehen, wie sich die Herrlichkeit des Herrn in ihren Taten manifestiert. Wenn sie einem Patienten beim Rezitieren von Gottes Worten die H&auml;nde auflegen und der Patient Heilung erf&auml;hrt, f&uuml;hren sie dies auf die Wunder des Herrn zur&uuml;ck, die durch sie geschehen. Obwohl es wahr ist, dass Wunder geschehen k&ouml;nnen, die die Gegenwart des Herrn allen bekannt machen, &uuml;bersehen sie doch, warum der Herr sein Missfallen &uuml;ber solche Taten zum Ausdruck brachte, wie im obigen Vers erw&auml;hnt. Dabei vergessen sie die Worte des Herrn. Es stellt sich die Frage: Warum tadelte der Herr sie, wenn das, was sie taten, gut und eine Manifestation der Wunder des Herrn zu sein schien? Warum sagte Jesus, dass sie auf einem b&ouml;sen Weg gingen? Wenn der Herr das gesagt hat, ist es zweifellos wahr.

  Die unglaubliche Wahrheit wird deutlich, wenn Sie dar&uuml;ber nachdenken, was die Wahrheit in den Lehren des Herrn bedeutet. Es ist ein schwerer Fehler, wenn jemand nicht erkennt, ob die im Namen des Herrn vollbrachten Wunder von Gott oder Satan stammen. Viele, die in den Augen der Menschen als Prediger und Gurus auftreten, glauben, sie seien auf Gottes Weg, befinden sich aber in Wirklichkeit auf dem Weg Mayas. Diese Erkenntnis kann ziemlich beunruhigend sein. Es ist m&ouml;glich, dass sich viele Prediger &uuml;ber meine Worte aufregen, aber denken Sie bitte daran, dass dies nicht meine Worte sind; es sind die Worte Gottes. Wie es im Matth&auml;usevangelium 7:22 hei&szlig;t, sagte der Herr: <strong>&bdquo;Das ist b&ouml;se. Ich habe dich nie gekannt." </strong>Wir sollten anerkennen, dass dieselbe Maya (Satan), die den Herrn in der Vergangenheit versucht hat, auch heute noch versucht, uns zu t&auml;uschen. Maya (Satan) zu verstehen ist ebenfalls ein wesentlicher Teil der g&ouml;ttlichen Weisheit. Ohne Maya anzuerkennen, k&ouml;nnten wir f&auml;lschlicherweise Satan folgen, der die Gestalt Gottes annimmt, anstatt Gott zu folgen. Heutzutage machen viele Redner, Gurus und Prediger den gleichen Fehler. Satan (Maya), der viele Formen annehmen kann, vollbringt im Namen Gottes Tricks und Wunder. Wer sich nicht dar&uuml;ber im Klaren ist, dass dies Gott nicht gef&auml;llt, kann nicht vorankommen. Die beunruhigende Wahrheit ist, dass viele Menschen auf der Erde blind Satan folgen und glauben, dass es sich um Gott handelt. Sie sind sich der Tatsache nicht bewusst, dass sie den Weg Satans verfolgen, nicht den Weg Gottes. Es mag f&uuml;r sie fast unm&ouml;glich erscheinen, sich dem Einfluss Satans zu entziehen. Selbst wenn Gott selbst diese Wahrheit vermitteln w&uuml;rde, k&ouml;nnten sie Gott kritisieren, aber unver&auml;ndert bleiben. F&uuml;r sie erscheint Maya als Gott und Gott erscheint als blo&szlig;er Mensch.

  Diejenigen, die danach streben, in Gottes K&ouml;nigreich einzutreten und an Gott glauben, sollten &uuml;ber den zuvor erw&auml;hnten Vers nachdenken und dar&uuml;ber nachdenken, warum Gott diejenigen, die Wunder vollbringen, missbilligt und als &Uuml;belt&auml;ter bezeichnet. &Uuml;berlegen Sie, wer von Gott bevorzugt wird und Wer ist nicht. Es ist wichtig, sich mit Gottes Versen, Weisheit und Geboten vertraut zu machen. Sie sollten Gottes Weisheit voll und ganz annehmen, ohne seine Gebote zu &uuml;bertreten, und sie als die Grenzen erkennen, die um Sie herum gesetzt sind. Denken Sie daran, dass Gottes K&ouml;nigreich innerhalb dieser Grenzen liegt, w&auml;hrend Satans Herrschaft au&szlig;erhalb liegt. Bleiben Sie angesichts des Einflusses Satans wachsam und denken Sie an die Grenzen, die Jesus in seiner Heiligen Schrift f&uuml;r die gesamte Menschheit festgelegt hat.</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 22,
verse: ` <b>(21) Das Matthäusevangelium, 8. Kapitel, 22. Vers. </b>`,
meaning: ` <b>
(22) Jesus sagte zu ihm: „Folge mir nach und lass die Toten ihre eigenen Toten begraben.“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der oben erwähnte Vers war die Antwort Jesu, als einer seiner Jünger zu ihm sagte: „Herr, lass mich zuerst gehen und meinen Vater begraben.“ Manchen scheinen die Worte Jesu unklar zu sein, was Fragen nach ihrer Bedeutung aufwirft. Wenn wir dies bedenken, können wir die Menschheit in zwei Kategorien einteilen: Diejenigen, die Weisheit besitzen und sie als Yogam praktizieren, werden ewiges Leben (Moksham) erlangen. Es gibt nur sehr wenige solcher Menschen. Diejenigen, die Anspruch auf ewiges Leben haben, werden nicht zu den Toten gezählt. Diejenigen, die ewiges Leben erlangen, werden den Tod nie wirklich erleben und man kann sagen, dass sie Moksham erreicht haben. Andererseits können diejenigen, die unwissend sind oder sich nicht auf die Ausübung von Yogam einlassen, als spirituell tot betrachtet werden. Solche Menschen besitzen kein ewiges Leben und werden letztendlich dem Tod gegenüberstehen. Man kann sagen, dass sie dazu bestimmt sind, irgendwann den Tod zu erleben. Die Unwissenden werden oft von anderen Unwissenden begraben. Daher vermittelt die Aussage Jesu „Die Toten begraben die Toten“ die Vorstellung, dass diejenigen, denen es an Weisheit mangelt, als geistig Tote bezeichnet werden. Es betont, dass diejenigen, die Weisheit besitzen, sich nicht mit den Unwissenden verbünden sollten. Deshalb sagte Jesus zu seinem Jünger: „Du verstehst die Weisheit und folgst mir. Lasst die Unwissenden die Unwissenden begraben.“</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 23,
verse: ` <b>(22)	Das Matthäusevangelium, 9. Kapitel, 12. und 13. Vers.</b>`,
meaning: ` <b>
(12) Als Jesus dies hörte, sagte er: „Nicht die Gesunden brauchen einen Arzt, sondern die Kranken. “
<br><br>
(13) Denn ich bin nicht gekommen, die Gerechten zu rufen, sondern die Sünder.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wie wir bereits besprochen haben, kommt Gott gelegentlich auf die Erde, um Dharmas zu errichten. Ebenso erklärte Jesus, dass er gekommen sei, um die Unwissenden auf den Weg der Weisheit zu führen. Er erwähnte, dass er gekommen sei, um Sünder zu rufen, nicht die Gerechten. Hier stellen „Sünder“ diejenigen dar, die unwissend sind und denen es an Weisheit mangelt, während „Gerechte“ diejenigen bezeichnen, die Weisheit besitzen. Gott übernimmt die Rolle eines spirituellen Arztes, der oft als Prediger bezeichnet wird, um diejenigen zu heilen, die unter der Krankheit der Unwissenheit leiden. Durch die Medizin der Weisheit heilt er geistig Kranke. Diejenigen, die bereits spirituell gesund und weise sind, benötigen nicht die Führung eines solchen Arztes oder Predigers. Wenn sich die Krankheit der Unwissenheit weltweit ausbreitet und alle Menschen befällt, inkarniert Gott, um seine göttliche Medizin der Dharmas bereitzustellen und die Unwissenden in Gnanis (weise Individuen) zu verwandeln. Wenn Gott diese Rolle als spiritueller Arzt nicht übernehmen würde, würde die ganze Welt würde von Unwissenheit geplagt werden. Deshalb inkarniert Gott, um den Bedürftigen seine Weisheit zu offenbaren.</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 24,
verse: ` <b>(23) Das Matthäusevangelium, 8. Kapitel, 23., 24., 25. und 26. Vers. </b>`,
meaning: `<b>
(23) Dann stieg er in das Boot und seine Jünger folgten ihm.
<br><br>
(24) Plötzlich kam ein heftiger Sturm auf den See, so dass die Wellen über das Boot hinwegfegten. Aber Jesus schlief.
<br><br>
(25) Die Jünger gingen hin und weckten ihn und sagten: „Herr, rette uns!“ Wir werden ertrinken!“
<br><br>
(26) Er antwortete: „Du Kleingläubiger, warum fürchtest du dich so?“ Dann stand er auf und tadelte den Wind und die Wellen, und es war völlig ruhig. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Dieses Ereignis ist ein bedeutendes Ereignis im Leben Jesu. Auch wenn Jesus hier vielleicht nicht direkt eine Lektion erteilt hat, k&ouml;nnen wir aus diesem Ereignis viel lernen. Sowohl das Meer als auch der Sturm sind mit Prakruti verbunden. Die Luft im Sturm und das Wasser im Meer sind integrale Bestandteile von Prakruti. Prakruti steht unter der alleinigen Kontrolle von Paramatma, dem h&ouml;chsten g&ouml;ttlichen Wesen. Prakruti besteht aus f&uuml;nf Elementen: Himmel, Luft, Feuer, Wasser und Erde. Selbst Atma, das nach Paramatma G&ouml;ttlichkeit besitzt, hat keine Autorit&auml;t &uuml;ber Prakruti. Atma innerhalb des K&ouml;rpers regiert nur das Chara (ver&auml;nderbare) Prakruti, das in der Form des K&ouml;rpers existiert. Es &uuml;bt keine Autorit&auml;t &uuml;ber das Achara (unver&auml;nderliche) Prakruti aus. Prakruti achtet nicht auf Atma; es gehorcht ausschlie&szlig;lich dem Befehl von Paramatma. Prakruti besteht aus f&uuml;nf Bhootas, die als Lebenskr&auml;fte oder Jeevas verstanden werden k&ouml;nnen. Diese f&uuml;nf Jeevas stellen die f&uuml;nf Elemente von Prakruti dar und halten sich als solche an das g&ouml;ttliche Wort Gottes. Sie befolgen die Anweisungen von Paramatma.

  Da Jesus der Heilige Geist war, der als gew&ouml;hnlicher Mensch erschien, h&ouml;rte der Sturm auf dem Meer auf Seinen Befehl hin auf. Nur Gott kann Prakruti kontrollieren, daher kann Jesus als Gottes Inkarnation betrachtet werden. In den Versen 7, 8 und 9 des Gnana Yoga in der Bhagavad-Gita, der ersten g&ouml;ttlichen Schrift, wird erw&auml;hnt, dass Gott in menschlicher Form auf die Erde herabsteigt, um seine Weisheit zu vermitteln. Wenn Gott eine menschliche Gestalt annimmt, &auml;hnelt er &auml;u&szlig;erlich einem gew&ouml;hnlichen Menschen, auch wenn er kein gew&ouml;hnlicher Mensch ist. Da er als gew&ouml;hnlicher Mensch erscheint, ist es schwierig, ihn zu identifizieren. Es gibt jedoch zwei Schl&uuml;sselindikatoren, um Ihn zu erkennen: <strong>1) Die Pr&auml;senz der Inkarnation Gottes &uuml;berall dort, wo g&ouml;ttliche Dharmas gelehrt werden. 2) Die F&auml;higkeit, Prakruti zu befehlen, kann als Inkarnation Gottes anerkannt werden. </strong>Die Beruhigung des Meeres auf Befehl Jesu ist eine Manifestation dieser g&ouml;ttlichen Macht und zeigt, dass nur Gott solche Taten vollbringen kann. Wenn Dharmas gelehrt und Prakruti geboten wird, wird die menschliche Form Gottes erkennbar. Jesus lehrte Gottes Weisheit nicht nur, sondern praktizierte sie auch und befahl Prakruti. Daher kann Jesus als Gott in menschlicher Gestalt identifiziert werden. Das sofortige Ende des Sturms auf dem Meer diente als Beweis f&uuml;r die G&ouml;ttlichkeit Jesu.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 25,
verse: ` <b>(24) Das Matthäusevangelium, 9. Kapitel, 6. Vers.</b>`,
meaning: `<b>
(6) Ich möchte, dass Sie wissen, dass der Menschensohn auf Erden die Autorität hat, Sünden zu vergeben. Also sagte er zu dem gelähmten Mann: „Steh auf, nimm deine Matte und geh nach Hause.“ Dann stand der Mann auf und ging nach Hause.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus selbst sagte, dass der Menschensohn auf Erden die Autorität habe, Sünden zu vergeben. Als ein gelähmter Mann zu Jesus gebracht wurde, sagte er zu ihm: „Deine Sünden sind dir vergeben.“ Einige der Schriftgelehrten sagten sich, dass Jesus lästerte. Jesus kannte ihre Gedanken und sagte: „Warum hegt ihr böse Gedanken in euren Herzen? Was ist einfacher: zu sagen: „Deine Sünden sind vergeben“ oder zu sagen: „Steh auf und geh?“ Aber ich möchte, dass du weißt, dass der Menschensohn die Autorität hat, Sünden zu vergeben.“ Also sagte er zu dem gelähmten Mann: „Steh auf, nimm deine Matte und geh nach Hause.“ Dann stand der Mann auf und ging nach Hause.
  Wenn wir das beachten, vergab Jesus Sünden, weil die Schriftgelehrten schlecht von ihm dachten. Er erklärte auch, dass der Menschensohn auf Erden die Autorität habe, Sünden zu vergeben. Obwohl er als Sohn Gottes auf die Erde kam, demütigte er sich, indem er sich als Menschensohn identifizierte. Er sagte und bewies, dass er allein die Autorität besitzt, Sünden zu vergeben. Wer versteht, dass nur Gott (der Heilige Geist) Sünden vergeben kann, wird erkennen, wer Jesus wirklich ist. Indem Jesus behauptete, der Menschensohn zu sein, verschleierte er absichtlich seine Göttlichkeit, obwohl er vom Heiligen Geist abstammte. Der gelähmte Mann stand sofort auf und ging nach Hause, als Jesus ihn dazu aufforderte. Die Menge war erstaunt, als sie dieses Wunder miterlebte. Trotz dieser bemerkenswerten Tat wurde Jesus wie ein gewöhnlicher Mann behandelt und vor Gericht gestellt, als ob er schuldig wäre. Dies verdeutlicht, wie Menschen oft die Hilfe vergessen, die sie erhalten.
</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 26,
verse: ` <b>(25) Das Matthäusevangelium, 10. Kapitel, 20. Vers.</b>`,
meaning: `<b>
(20) Denn nicht ihr werdet es sein, der redet, sondern der Geist eures Vaters, der durch euch redet.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">	Obwohl dieser Vers gew&ouml;hnlich erscheinen mag, enth&auml;lt er tiefe spirituelle Weisheit. Es ist wichtig, den Begriff zu verstehen <strong>'Dein Vater' </strong>bezieht sich in diesem Vers nicht auf den leiblichen Vater, sondern auf den spirituellen Vater von Jeevatma. Atma, der Vater von Jeevatma, wohnt im K&ouml;rper und leitet ihn. Es ist wichtig, sich daran zu erinnern, dass der Vater von Atma Paramatma ist. Jeder Mensch repr&auml;sentiert Jeevatma. Abh&auml;ngig vom Karma einer Person beeinflusst und leitet Atma sie (Jeevatma) und f&uuml;hrt dazu, dass sie Karma (S&uuml;nden und Punya-Karma) erf&auml;hrt. Atma steuert alle K&ouml;rperfunktionen und bestimmt die Freude und den Schmerz, die Jeevatma im K&ouml;rper erf&auml;hrt.

  Jeevatma beteiligt sich nicht aktiv an k&ouml;rperlichen Funktionen. Trotz seiner offensichtlichen Unt&auml;tigkeit erf&auml;hrt Jeeva stillschweigend die Konsequenzen seines Handelns, sowohl Freude als auch Trauer. Obwohl sich Jeevatma als das Individuum im K&ouml;rper identifiziert, fehlt ihm die F&auml;higkeit zu handeln. Stattdessen ist es der Atma, der alle Aktivit&auml;ten im K&ouml;rper orchestriert. Aus Unwissenheit glaubt Jeevatma f&auml;lschlicherweise, dass er derjenige ist, der Handlungen durchf&uuml;hrt, indem er auf die Worte von &bdquo;Aham&ldquo; (dem Ego) h&ouml;rt. In Wirklichkeit ist Atma der wahre Akteur im K&ouml;rper, aber Jeevatma vergisst oft Atmas Anwesenheit und glaubt, dass er der Handelnde von allem ist. Im Kontext des Verses wollte Jesus die Unwissenden aufkl&auml;ren. Er vermittelte<strong>&bdquo;Dein Vater, Atma, wohnt in dir und kommuniziert durch dich.&ldquo;Du bist nicht derjenige, der spricht.</strong>&bdquo;Nach diesem Vers ist es offensichtlich, dass nicht nur die ausgef&uuml;hrten Taten, sondern auch die gesprochenen Worte nicht von Jeevatma artikuliert werden. Jesus erkl&auml;rte, dass es pure Unwissenheit sei, wenn die Menschen glauben, dass sie sprechen, w&auml;hrend es Atma ist, der die Worte artikuliert. Jeevatma f&uuml;hrt nicht die Taten aus, die von den zehn physischen K&ouml;rperteilen (Handlungsorganen) ausgef&uuml;hrt werden; Es ist Atma, der alles durch diese K&ouml;rperteile erreicht. Das Erkennen dieser Wahrheit stellt die h&ouml;chste Form der Weisheit unter allen Weisheiten dar.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 27,
verse: ` <b>(26) Das Matthäusevangelium, 10. Kapitel, 30. Vers.</b>`,
meaning: ` <b>
(30) Sogar die Haare auf deinem Kopf sind gezählt.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">	In einem Tempel teilen Menschen oft ihre Gedanken mit Gott und glauben, dass Gott sich ihrer innersten Gef&uuml;hle nicht bewusst ist. Sie zeigen Respekt und Ehrfurcht, wenn sie im Tempel sind, k&ouml;nnen sich aber drau&szlig;en anders verhalten. Beispielsweise kann es vorkommen, dass einige Personen nach dem Verlassen des Tempels zwei Sitze im Zug belegen, ohne anderen Fahrg&auml;sten Platz zu lassen, was r&uuml;cksichtsloses Verhalten an den Tag legt. Diese Aktion beruht auf der falschen Vorstellung, dass Gott sich ihrer Aktionen innerhalb des Tempels bewusst ist, jedoch nicht au&szlig;erhalb. Doch was <strong>Viele erkennen nicht, dass Gott allwissend und allgegenw&auml;rtig ist und alle Handlungen wahrnimmt, selbst an den entlegensten Orten. </strong>Dieser von Jesus gesprochene Vers hebt die Herrlichkeit Gottes hervor und dient als Erinnerung daran, dass sich Gottes Bewusstsein &uuml;berall erstreckt.

  Der Vers unterstreicht Gottes au&szlig;ergew&ouml;hnliche Sorgfalt gegen&uuml;ber den Menschen, da Gott ein pr&auml;zises System f&uuml;r alle Aspekte der menschlichen Existenz geschaffen hat. Dieses g&ouml;ttliche System umfasst selbst die kleinsten Details, wie zum Beispiel &bdquo;Karma-Visarga&ldquo; &ndash; die Aufteilung des Karmas in winzige Teile. Durch Karma-Visarga bestimmt Gott, wie oft eine Person ihre Augenlider &ouml;ffnen und schlie&szlig;en soll, und gew&auml;hrleistet so eine genaue Z&auml;hlung. Gott bestimmt auch die Anzahl der Haare auf unserem Kopf und wann und welche Haare ausfallen sollen, alles durch Karma-Visarga. Dar&uuml;ber hinaus orchestriert Gott die Herausforderungen, mit denen der Einzelne konfrontiert ist, und das Ausma&szlig; seines Leidens. In der Bhagavad-Gita bekr&auml;ftigt der Herr, dass Gott Wissen &uuml;ber alles besitzt, was auf der Erde geschehen ist, geschieht und geschehen wird. Dies best&auml;rkt die Vorstellung, dass es nichts gibt, was &uuml;ber Gottes Bewusstsein hinausgeht.</div></div>

</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 28,
verse: ` <b>(27) Das Matthäusevangelium, 10. Kapitel, 34., 35. und 36. Vers.</b>`,
meaning: `<b>
(34) Glauben Sie nicht, dass ich gekommen bin, um Frieden auf die Erde zu bringen. Ich bin nicht gekommen, um Frieden zu bringen, sondern um ein Schwert.
<br><br>
(35) Denn ich bin gekommen, um einen Mann gegen seinen Vater und eine Tochter gegen sie aufzuhetzen Mutter, eine Schwiegertochter gegen ihre Schwiegermutter.
<br><br>
(36) Die Feinde eines Mannes werden die Mitglieder seines eigenen Haushalts sein.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Auch wenn es vielleicht nicht fair ist zu sagen, dass Jesus absichtlich darauf abzielte, Konflikte zwischen Menschen zu schaffen, ist es doch offensichtlich, dass solche Konflikte entstanden sind. Jesus kam mit der Absicht, die Menschen von der Unwissenheit zur Weisheit zu führen, anstatt Zwietracht zu säen. Er teilte seine Weisheit mit guten Absichten, aber dies führte oft zu Streitigkeiten unter denen, die ihn teilten verstand seine Lehren nicht vollständig. Ähnlich wie kaltes Wasser, das auf Sand gesprüht wird, diesen abkühlt, während Kalksteine warm werden, ihr Aussehen verändern und sich in Kalk verwandeln, variiert die Rezeption der Weisheit Jesu. Diejenigen mit einem tiefen Verständnis der Weisheit finden Glück in den Lehren Jesu, während es unter den Unwissenden zu Konflikten kommt. Wenn ein Ehegatte in manchen Fällen nach Weisheit strebt, kann es sein, dass der andere anderer Meinung ist, was zu Meinungsverschiedenheiten innerhalb der Familie führt. Diese unerwartete Konsequenz kann zu Spaltungen innerhalb der Haushalte führen, in denen sich Väter gegen Söhne, Mütter gegen Töchter und Schwiegermütter gegen Schwiegertöchter wenden. Obwohl die Absichten Jesu edel sind, führen sie unbeabsichtigt dazu, dass die Menschen ihre Verwandtschaft vergessen und Feindschaft schüren. Deshalb verwandelt sich eine Blume, die Jesus schenkt, in einen Dorn. Wenn Er biegsames Holz gibt, wird es zu einem starken Schwert. Es ist wichtig zu beachten, dass dieses Ergebnis nicht die Schuld Jesu ist, sondern vielmehr das Ergebnis der menschlichen Natur und des Einflusses verschiedener Gunas.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 29,
verse: `<b>(28)	Das Matthäusevangelium, 10. Kapitel, 37. Vers.</b>`,
meaning: `<b>
(37) Wer seinen Vater oder seine Mutter mehr liebt als mich, ist meiner nicht würdig; Wer seinen Sohn oder seine Tochter mehr liebt als mich, ist meiner nicht würdig.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Es ist ein grundlegender Aspekt der menschlichen Natur, dass Eltern ihre Kinder lieben, genauso wie es f&uuml;r Kinder selbstverst&auml;ndlich ist, ihre Eltern zu lieben. Die Bindung zwischen Eltern und ihrem Nachwuchs ist oft von tiefer Liebe gepr&auml;gt, die jede andere Bindung auf der Welt &uuml;bertrifft. Der menschliche Geist wird jedoch auch ma&szlig;geblich von seinen inh&auml;renten Qualit&auml;ten, den sogenannten Gunas, beeinflusst. Wenn eine Person eine hat <strong>intensive Liebe zur Weisheit und zu Gott</strong>, tendieren sie von Natur aus eher zum Streben nach Weisheit als nach materiellen oder weltlichen Dingen. Es wird schwierig, der Weisheit Vorrang einzur&auml;umen, wenn die eigene Zuneigung haupts&auml;chlich anderswohin gerichtet ist. Der menschliche Geist steht unter dem Einfluss von sechs guten und schlechten Gunas, die Fesseln aus Gold bzw. Eisen &auml;hneln. Beide Arten von Gunas dienen der Bindung eines Individuums. Es ist jedoch wichtig zu beachten, dass weder extreme Liebe (eine gute Guna) noch Eifersucht (eine schlechte Guna) einen Menschen zur Weisheit f&uuml;hren. Was wirklich z&auml;hlt, ist das echte Interesse des Einzelnen an Weisheit. Zu den sechs schlechten Gunas geh&ouml;ren Gier (Kaama), Wut (Krodha), Geiz (Lobha), Leidenschaft (Moha), Arroganz (Madam) und Eifersucht (Matsara). Im Gegensatz dazu umfassen die sechs guten Gunas N&auml;chstenliebe (dana), Barmherzigkeit (daya), Wohlwollen (audarya), Leidenschaftslosigkeit (vairagya), Demut (vinaya) und Liebe (prema).</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 30,
verse: `<b>(29)	Das Matthäusevangelium, 10. Kapitel, 38. Vers.</b>`,
meaning: `<b>
(38) Wer sein Kreuz nicht auf sich nimmt und mir nachfolgt, ist meiner nicht würdig.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Christen sprechen oft vom Kreuz und hegen tiefe Ehrfurcht davor. Es ist üblich, dass Christen ein Kreuz um den Hals tragen, und dieses Symbol hat in ihrem Glauben eine große Bedeutung. Es ist allgemein bekannt, dass Jesus gekreuzigt wurde und am Kreuz starb. Es stellt sich die Frage, warum Christen ein Symbol, das als Instrument für die Hinrichtung Jesu verwendet wurde, so hoch schätzen. Die Antwort liegt in der tiefen Natur, jemandem zu folgen, der größer ist als man selbst, und seine Handlungen nachzuahmen. Allerdings nein Man hat darüber nachgedacht, warum das Kreuz, ein Symbol, das mit dem Tod des Herrn verbunden ist, einen so hohen Stellenwert haben sollte. Tatsächlich scheint es, ob absichtlich oder unabsichtlich, eine Lücke im Verständnis der Einzelheiten des Kreuzes zu geben. Nehmen wir uns einen Moment Zeit, um über das Kreuz nachzudenken und in tiefere Details einzutauchen.

  In diesem Vers warnte Jesus, dass man auf dem Weg Gottes wandelt, wenn man das Kreuz auf sich nimmt, während man auf dem Weg des Satans wandelt, wenn man vom Kreuz aufgefangen wird. Eine ähnliche Botschaft wird vermittelt, als Jesus sagte: „Wer nicht das Kreuz auf sich nimmt und mir nachfolgt, ist meiner nicht würdig.“ Das bedeutet, dass diejenigen, die das Kreuz nicht tragen, Gottes nicht würdig sind. Es ist wichtig zu verstehen, dass aus dieser Perspektive das Kreuz Satan symbolisiert. Für eine detailliertere Untersuchung dieses Konzepts lesen Sie bitte mein Buch „Ist das Kreuz Gott?“

  Das Kreuz stellt in spiritueller Symbolik die Schlange dar. Es ist üblich, Parallelen zwischen der Schlange und Satan und der Taube mit Atma zu ziehen. Satan oder Maya wohnt im menschlichen Körper und führt Menschen oft auf den Weg der Unwissenheit. Wenn Satan eine Person erhebt, bedeutet dies die Schwäche der Person und die Dominanz Satans. Wenn jemand andererseits das Kreuz trägt, bedeutet das, dass die Stärke des Einzelnen die Stärke Satans übertrifft. Aus diesem Grund trug Jesus an bestimmten Punkten seines Lebens das Kreuz, um zu zeigen, dass die Menschheit Satan besiegen kann. Als Jesus am Kreuz gekreuzigt wurde, symbolisierte dies ebenfalls das Kreuz, das ihn trug, und bedeutete, dass Satan jeden auf seinen Weg locken kann. Um den Weg der Weisheit zu gehen, müssen die Menschen bereit sein, ihr eigenes Kreuz zu tragen, wie Jesus in dem Vers betonte: „Wer nicht sein Kreuz auf sich nimmt und mir nachfolgt, ist meiner nicht würdig.“

  Wir symbolisieren Satan in Form eines Kreuzes, das eine kolossale Schlange oder Schlange darstellt, ähnlich dem Konzept der Maya. Maya hat die Macht, Menschen vom Weg zu Gott in die Irre zu führen und in die Unwissenheit zu führen. Um diesen Einfluss zu überwinden, müssen wir zunächst Maya verstehen. Bei der Analyse kann Maya als die Ansammlung von Gunas im Kopf einer Person identifiziert werden. Jeder, der sein Handeln an diesen Gunas ausrichtet, folgt unbeabsichtigt dem Weg der Unwissenheit und überlässt Maya im Wesentlichen die Kontrolle über seinen Kurs. Um Maya zu erobern, muss man die Gunas beherrschen und sich nicht von ihrem Einfluss beeinflussen lassen. Wenn eine Person dies erreicht, kann man sagen, dass sie Maya oder Satan mithilfe ihrer inneren Stärke besiegt hat. Eine solche Person kann Maya aufgreifen und den Weg der Weisheit gehen. Daher betont die Botschaft Jesu in diesem Vers, dass man durch die Überwindung des „Kreuzes“ – stellvertretend für Maya – der Gnade Gottes würdig wird. Es ist wichtig zu beachten, dass das „Kreuz“ nicht nur ein hölzernes Symbol ist, sondern vielmehr eine Darstellung der Python, einem Symbol Satans. Den Ältesten zufolge symbolisiert das Kreuz Maya, während der Vogel als Symbol für Atma steht. Während der Taufe Jesu durch Johannes soll der Geist (Atma) wie eine Taube herabgestiegen und in den Körper Jesu eingedrungen sein. In diesem Zusammenhang stellt das „Kreuz“ die Gegenkraft zu Atma dar. Daher unterstreicht die Lehre Jesu, dass jemand, der seine Weisheit und innere Stärke nutzt, das „Kreuz“ trägt und den Weg der Weisheit geht, Gottes und Paraloka würdig wird.
</div></div>

</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 31,
verse: `<b>(30)	Das Matthäusevangelium, 10. Kapitel, 40. Vers.</b>`,
meaning: ` <b>
(40) Wer dich aufnimmt, nimmt mich auf, und wer mich aufnimmt, nimmt den auf, der mich gesandt hat. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  W&auml;hrend Menschen Jeevatmas sind, werden sie von Atma erschaffen. Paramatma oder der Heilige Geist erschuf sowohl Atma als auch Prakruti. Wenn Paramatma jedoch als Mensch inkarniert, stellt sich die Frage, ob man ihn als Atma oder Jeevatma bezeichnen soll. Wenn Gott menschliche Gestalt annimmt, kann er aufgrund seines Aussehens als Jeevatma betrachtet werden. Wenn Menschen (Jeevatmas) sterben, nimmt Atma sie in sich auf. So wie Atma Menschen umfasst, umfasst es auch Gott, wenn Er als Mensch inkarniert und als Jeevatma erscheint. Dieses Konzept wird in dem Vers widergespiegelt: &bdquo;<strong>Wer dich aufnimmt, nimmt auch mich auf.&ldquo; </strong>Derjenige, der als Mensch inkarnierte (Jeevatma), ist in Wirklichkeit Gott. Es ist jedoch Gott, der den Mann wie Jesus gesandt hat. Wenn Atma einen Mann umfasst, der einem Jeevatma &auml;hnelt, ist es, als ob Gott, der Absender des Mannes, auch in Atma enthalten w&auml;re. Daher &uuml;bermittelte Jesus in dem Vers: <strong>&bdquo;Wer mich aufnimmt, nimmt den auf, der mich gesandt hat.&ldquo;</strong></div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 32,
verse: `<b>(31)	Das Matthäusevangelium, 11. Kapitel, 9. Vers.</b>`,
meaning: ` <b>
(9) Was wolltest du dir ansehen? Ein Prophet? Ja, das sage ich euch, und (ich bin) mehr als ein Prophet.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Man kann sagen, dass ein Prophet (Pravaktha) jemand ist, der Wissen lehrt, das niemand erz&auml;hlt hat. Auf Telugu bedeutet 'F&uuml;r' Wichtigkeit und <strong>'Vaktha' </strong>bedeutet derjenige, der spricht. Ein Prophet ist also jemand, der wesentliche Weisheit vermittelt. Jesus verk&uuml;ndete jedoch, dass er mehr als ein Prophet sei. Es gibt nur eine Person, die einen Propheten &uuml;bertrifft und Weisheit offenbart, die &uuml;ber die F&auml;higkeiten eines Propheten hinausgeht. Die g&ouml;ttliche Schrift behauptet: <strong>&bdquo;Gott hat seine Weisheit keinem Menschen weitergegeben. Gottes Weisheit bleibt allen au&szlig;er Gott unbekannt.&ldquo; </strong>In der letzten g&ouml;ttlichen Schrift hei&szlig;t es in Vers 3:7, dass Gott seine Weisheit weitergeben muss. Auf dieser Grundlage versteht man, dass Gott, obwohl er als Prophet kommt, um Weisheit zu verbreiten, mehr als ein Prophet ist. Das erkl&auml;rt die letzte g&ouml;ttliche Schrift in 42:51<strong>&bdquo;Gott kommuniziert nicht direkt mit Menschen.&ldquo; </strong>Gott kann sich jedoch als verkleideter Mann manifestieren und seine Botschaft &uuml;bermitteln. Wann immer Gott menschliche Gestalt annimmt, ist er mehr als nur ein Prophet, auch wenn er als Prophet bezeichnet wird. Angesichts der Aussage Jesu in diesem Vers wird deutlich, dass Jesus die Propheten &uuml;bertrifft und eine Inkarnation Gottes darstellt. Obwohl Jesus mehrfach seine Identit&auml;t offen erkl&auml;rte, erkannten ihn viele nicht.</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 33,
verse: `<b>(32)	Das Matthäusevangelium, 11. Kapitel, 28. Vers.</b>`,
meaning: ` <b>
(28) Kommt alle Müden und Beladenen zu mir, und ich werde euch Ruhe geben. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Es ist allgemein bekannt, dass Menschen m&uuml;de werden, wenn sie k&ouml;rperliche Lasten tragen. Allerdings versp&uuml;rt der Mensch auch M&uuml;digkeit, ohne dass er &uuml;berhaupt eine sichtbare Belastung tr&auml;gt. Die unsichtbare Last ist in diesem Fall S&uuml;nde (Karma), und jeder, der karmische Erfahrungen macht, neigt dazu, sich m&uuml;de zu f&uuml;hlen. Der Mensch begegnet st&auml;ndig Karma, au&szlig;er im Schlaf, wenn er vor&uuml;bergehend frei davon ist. Sogar in Tr&auml;umen ist der Einfluss von Karma bleibt bestehen und bedeutet einen konstanten Zustand der Arbeit. Angesichts der ewigen Natur dieser Last richtet Jesus eine Einladung an alle und sagt: <strong>"Komm zu mir. Ich werde dir Ruhe geben.&ldquo;</strong>

  Es stellt sich die Frage: Wie finden wir Ruhe, wenn wir uns an Jesus wenden, wenn wir st&auml;ndig Karma erleben? Die Antwort lautet wie folgt: Wenn Jesus denjenigen, die Ihn suchen, g&ouml;ttliche Weisheit vermittelt, wird das Karma aller, die mit dieser Weisheit vertraut sind, in der Weisheitskraft verbraucht. Durch die Zerst&ouml;rung des Karmas wird der Einzelne von seinen anhaltenden Auswirkungen befreit, wodurch die M&uuml;hsal des Leidens verringert wird und f&uuml;r Ruhe gesorgt wird. Diese Einladung richtet sich an Menschen aller Kasten und Religionen, wie Jesus bezeugt, als er sagte: <strong>&bdquo;Alle kommen zu mir.&ldquo; </strong>Manche bezeichnen Jesus vielleicht als einen christlichen Guru oder Propheten. Ihn nur als Christ zu bezeichnen, w&auml;re jedoch ungenau, da seine Berufung alle einschlie&szlig;t und Menschen aller Herkunft einl&auml;dt. Diejenigen, die seine Lehren annahmen und ihn suchten, sollten nicht auf das Etikett der Christen beschr&auml;nkt werden. Da Gott und g&ouml;ttliche Weisheit universell notwendig sind, l&auml;dt Jesus alle ein, wie er erkl&auml;rte: <strong>&bdquo;Alle kommen zu mir.&ldquo;</strong></div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 34,
verse: ` <b>(33)	Das Matthäusevangelium, 12. Kapitel, 17., 18., 19., 20. und 21. Vers.</b>`,
meaning: ` <b>
(17) Damit sollte sich erfüllen, was durch den Propheten Jesaja gesagt wurde.
<br><br>
(18) Hier ist mein Diener, den ich erwählt habe, der, den ich liebe, an dem ich Freude habe; Ich werde meinen Geist auf ihn legen.
<br><br>
(19) Er wird den Nationen Gerechtigkeit (Weisheit) verkünden; Er wird nicht streiten oder schreien; Niemand wird seine Stimme auf der Straße hören.
<br><br>
(20) Ein geknicktes Rohr wird er nicht zerbrechen und einen glimmenden Docht wird er nicht auslöschen, bis er die Gerechtigkeit (Weisheit) zum Sieg gebracht hat.
<br><br>
(21) Auf seinen Namen werden die Nationen ihre Hoffnung setzen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">	Vor etwa 350 Jahren sagte ein gro&szlig;er Mann namens Veerabrahmam die bevorstehenden Ereignisse und Naturkatastrophen voraus. In &auml;hnlicher Weise sagte ein gro&szlig;er Mann namens Jesaja das Kommen Jesu voraus. Wenn wir Jesajas Worte im Detail untersuchen, wird allen die Gr&ouml;&szlig;e seiner Worte bewusst. Es wurde klar, von wem Jesaja sprach. Jesaja lebte viele Jahre vor der Geburt Jesu. Im 13. Kapitel vermittelt Jesaja noch ein paar Dinge. Wenn man diese Verse betrachtet, wird deutlich, dass Gott, der Heilige Geist, von Jesus sprach. Untersucht man die Verse, in denen Jesus in der Heiligen Schrift &uuml;ber sich selbst sprach, und die Verse, in denen der Heilige Geist &uuml;ber Jesus sprach, wird deutlich, dass derjenige, der &uuml;ber Jesus (den Heiligen Geist) sprach, und Jesus identisch sind.

  Im ersten Vers hei&szlig;t es: <strong>&bdquo;Hier ist mein Diener.&ldquo; </strong>Es gibt verschiedene Formen des materialistischen Dienstes, aber dieser Vers bezieht sich nicht auf den materialistischen Dienst. Stattdessen geht es um den Dienst von Paramatma. Es gibt nur eine Form von Paramatmas Dienst, und zwar die echte <strong>Zu Paramatmas Dienst geh&ouml;rt es, Gottes Weisheit zu predigen und an andere weiterzugeben. </strong>Weil Jesus Gottes Weisheit aktiv verbreitete, verk&uuml;ndete der Heilige Geist: &bdquo;Hier ist mein Diener.&ldquo; Jeder, der Gottes Weisheit verbreitet, wird zum <strong>am meisten von Gott beg&uuml;nstigt</strong>. Deshalb dr&uuml;ckte Paramatma seine Liebe zu Jesus aus und sagte: <strong>&bdquo;Ich liebe ihn und freue mich &uuml;ber ihn.&ldquo; </strong>Dieses Gef&uuml;hl kommt zum Ausdruck <strong>15:28, 29 und 30 der letzten g&ouml;ttlichen Schrift</strong>, wo beschrieben wird, dass der Heilige Geist einen Menschen aus Ton erschafft und ihm seine Seele (die Seele des Heiligen Geistes) einhaucht. Anschlie&szlig;end erkennen Engel den Menschen als Gott und werfen sich vor Ihm nieder. Daher wird in &Uuml;bereinstimmung mit den Worten Jesajas: &bdquo;Der Heilige Geist wird seinen Geist auf ihn legen&ldquo; deutlich, dass Jesus in der menschlichen Inkarnation die Seele von Paramatma ist.

  Im 19. Vers hei&szlig;t es: &bdquo;Er wird den Nationen Gerechtigkeit verk&uuml;nden.&ldquo; Es scheint, dass die &Uuml;bersetzer der Bibel ins Englische m&ouml;glicherweise einen ungenauen Begriff verwendet haben. Es soll geschrieben werden als <strong>"Weisheit" </strong>anstatt <strong>"Gerechtigkeit." </strong>Gerechtigkeit ist enger mit der materiellen Welt verbunden und daher m&ouml;glicherweise nicht der passendste Begriff. W&auml;hrend <strong>Gerechtigkeit und Gerechtigkeit beziehen sich auf weltliche Angelegenheiten, Weisheit und Dharma sind mit Paramatma verbunden. </strong>Die Verwendung von &bdquo;Gerechtigkeit&ldquo; und &bdquo;Gerechtigkeit&ldquo; anstelle von &bdquo;Weisheit&ldquo; scheint ein &Uuml;bersetzungsfehler zu sein. Zahlreiche solcher Fehler wurden identifiziert, &uuml;berarbeitet und korrigiert.

  Im 19. Vers hei&szlig;t es: &bdquo;Er wird den Nationen Gerechtigkeit verk&uuml;nden.&ldquo; &bdquo;Verk&uuml;nden&ldquo; bedeutet hier predigen oder lehren. Der Vers k&ouml;nnte besser so verstanden werden: <strong>&bdquo;Er wird den Nationen Weisheit verbreiten.&ldquo; </strong>Diese &Auml;nderung steht im Einklang mit der Tatsache, dass Jesus, nachdem er 30 Jahre gelebt hatte, seine Weisheit etwa zwei Jahre und drei Monate lang lehrte, wie aus diesem Vers hervorgeht. W&auml;hrend dieser Zeit predigte Jesus selbstlos an verschiedenen Orten seine Weisheit und heilte viele Menschen mit verschiedenen Krankheiten. Er gab Blinden das Augenlicht zur&uuml;ck, erm&ouml;glichte Lahmen das Gehen, heilte Leprakranke und erweckte sogar Tote zum Leben. Trotz seiner wundersamen Taten beschuldigten einige Jesus, ein Zauberer zu sein, und warfen ihm vor, gegen Gott zu handeln. Dennoch lie&szlig; sich Jesus nicht auf Streitereien oder Schreie ein, wie in der Aussage best&auml;tigt wird: <strong>&bdquo;Er wird nicht streiten oder schreien.&ldquo;</strong>

  Jesus vermittelte denen, die sich Ihm n&auml;herten, seine Weisheit, verzichtete jedoch darauf, auf der Stra&szlig;e zu schreien, wie im Vers angedeutet: <strong>&bdquo;Niemand wird seine Stimme auf den Stra&szlig;en h&ouml;ren.&ldquo; </strong>Der Vers betont auch, dass Er kein geknicktes Rohr zerbrechen wird, und unterstreicht, dass Sein Handeln ausschlie&szlig;lich auf die Verbreitung von Weisheit ausgerichtet war. Dar&uuml;ber hinaus hebt der Vers die Rolle Jesu hervor, der daf&uuml;r sorgt, dass die Kraft der Weisheit, wenn sie einmal in einer Person entz&uuml;ndet wurde, unausl&ouml;schlich bleibt, bis sie das gesamte mit dieser Person verbundene Karma verbrennt. Da Karma in verschiedenen Formen vorkommt, wird es mit einem Docht verglichen, der aus vielen Str&auml;ngen besteht, was den Ausdruck erkl&auml;rt: <strong>&bdquo;Er wird keinen glimmenden Docht ausl&ouml;schen.&ldquo; </strong>Dar&uuml;ber hinaus bringt der Vers die Erwartung einiger auf die Weisheit Jesu zum Ausdruck, indem er sagt: <strong>&bdquo;Auf seinen Namen werden die Nationen ihre Hoffnung setzen.&ldquo;</strong></div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 35,
verse: `<b>(34)	Das Matthäusevangelium, 12. Kapitel, 31. Vers.</b>`,
meaning: `<b>
(31) Ich sage euch also, jede Art von Sünde und Verleumdung kann vergeben werden, aber Lästerung gegen den Geist (Atma) wird nicht vergeben.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Dieser Vers hat in der Heiligen Schrift eine besondere Bedeutung. Wenn Menschen Gottes Weisheit erfassen, verwandelt sich diese Weisheit in Feuer (Weisheitskraft). Dieses Feuer hat die Fähigkeit, verschiedene Sünden (Karma) wegzubrennen. Das Wissen um die göttliche Weisheit ermöglicht es den Menschen Vermeiden Sie Sünden, die nichts mit Atma zu tun haben. Es ist jedoch wichtig zu beachten, dass die Weisheitskraft Sünden, die aus Gotteslästerung und Handlungen gegen Atma resultieren, nicht befreien kann; Solche Sünden können unverzeihlich bleiben.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 36,
verse: `<b>(35)	Das Matthäusevangelium, 12. Kapitel, 32. Vers.</b>`,
meaning: `<b>
(32) Jedem, der ein Wort gegen den Menschensohn spricht, wird vergeben, aber jedem, der gegen den Heiligen Geist spricht, wird weder in diesem Zeitalter (Yuga) noch im kommenden Zeitalter (Yuga) vergeben. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Alle Menschen werden allgemein als Menschensöhne bezeichnet; Normale Menschen erkennen an, dass ihre Eltern Menschen sind. Aber Jesus sollte trotz seiner äußeren Erscheinung als gewöhnlicher Mensch nicht als Menschensohn kategorisiert werden. Als Jesus von seinem Vater sprach, stellte er klar, dass sein Vater in Paraloka existierte und nicht als Mensch auf der Erde. Folglich wird Jesus passenderweise als der Sohn Gottes identifiziert. Im Gegensatz dazu kann der allgemeine Begriff „Menschensohn“ auf alle Menschen auf Deutsch angewendet werden. Obwohl Jesus sich mit dem Namen und den Erfahrungen eines gewöhnlichen Menschen präsentiert, ist seine wahre Bezeichnung der Sohn Gottes.

  Der Samenspender für einen gewöhnlichen Menschen ist kein Mensch. Jeder Mann, der behauptet, Kinder zu haben, ist kein wirklicher Vater. Atma, das als Kopf des Körpers dient und alle Funktionen in ihm ausführt, ist der Samenspender für den Menschen und alle Lebewesen. Leider sind sich viele Menschen dieser Tatsache nicht bewusst. Folglich behauptet ein Mann, er sei der Vater eines anderen Menschen, obwohl er keine Funktionen im Körper ausüben kann. In der ersten und zweiten göttlichen Schrift wird mehrfach betont, dass Atma der einzige Handelnde aller Dinge ist. Während ein Mensch in Wirklichkeit keine Sünden begeht, weil er nicht in der Lage ist, Handlungen auszuführen, führt die falsche Vorstellung, dass er der Täter ist, zur Anhäufung von Sünden in seinem (Jeevatma-)Konto. Somit wird eine Person für Sünden verantwortlich, die sie nicht begangen hat. Auch wenn Atma der wahre Vater eines Menschen ist, wird der Mann als Sohn eines Menschen betrachtet, wenn er behauptet, sein Vater sei ein Mann.

  Jesus ist sich bewusst, dass sein Vater der Vater von Paraloka ist. Im Gegensatz zu allen anderen wurde Er nicht aus Atma geboren. Jesus erkennt an, dass er der Sohn Gottes, der Heilige Geist, ist. In der gesamten Bibel wird Jesus als Sohn Gottes bezeichnet, weil er bei vielen Gelegenheiten ausdrücklich erklärte, dass sein Vater der Heilige Geist sei. Gottes Weisheit hat die Macht, Sünden zu vergeben, die gewöhnlichen Menschen begangen werden. Die Sünde der Gotteslästerung gegen den Sohn Gottes wird jedoch niemals vergeben werden. Diese Sünde der Gotteslästerung ist dazu bestimmt, erlebt zu werden <b>zwei Yugas</b> – im aktuellen Yuga (Ära) und im darauffolgenden.
</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 37,
verse: `<b>(36)	Das Matthäusevangelium, 12. Kapitel, 36. und 37. Vers.</b>`,
meaning: ` <b>
(36) Aber ich sage euch, dass jeder am Tag des Gerichts für jedes leere Wort, das er geredet hat, Rechenschaft ablegen muss.
<br><br>
(37) Denn durch deine Worte wirst du freigesprochen, und durch deine Worte wirst du verurteilt. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Vom Moment der Geburt an f&uuml;hrt der Mensch zahlreiche Handlungen durch und spricht viele Worte. Sie glauben, dass sie f&uuml;r jede noch so kleine Tat und jedes Wort pers&ouml;nlich verantwortlich sind. In Wirklichkeit haben sie nichts getan. Es ist der Atma im K&ouml;rper, der alle Handlungen ausf&uuml;hrt. Ein ahnungsloser Mensch schreibt jedoch f&auml;lschlicherweise jede Handlung und jedes Wort sich selbst zu, und folglich fallen ihm die karmischen Konsequenzen seiner Taten und Worte zu. Atma speichert das gesamte angesammelte Karma im Karma-Chakra und bewertet es am Tag des Todes. An diesem J&uuml;ngsten Tag bewertet Atma jede Tat und jedes Wort des Einzelnen und w&auml;gt die damit verbundenen S&uuml;nden und Punya ab. Eine Person gilt als Gnani (weise Person), wenn sie im Leben Weisheit erlangt, und umgekehrt gilt eine Person als unwissend, wenn sie Taten mit Unwissenheit ausf&uuml;hrt. Dar&uuml;ber hinaus ber&uuml;cksichtigt Atma, ob eine Person Weisheit (Gnani) erlangt hat oder in Unwissenheit bleibt. Das Urteil basiert auf dem Status des Individuums als Gnani oder Unwissender und bestimmt entsprechend sein n&auml;chstes Leben. Der Heilige Geist beurteilt einen Menschen nicht aufgrund seines Karmas. Es ist der Atma, der f&uuml;r alle Funktionen im K&ouml;rper verantwortlich ist, der das Individuum am Tag seines Todes beurteilt und den Jeeva in das n&auml;chste Leben weist. Dieser Tag ist als bekannt <strong>'Tag des J&uuml;ngsten Gerichts' </strong>oder <strong>'letzter Tag,' </strong>dient auch als erster Tag des n&auml;chsten Lebens (Geburtstag). Wenn man erkennt, dass Atma in den letzten und ersten Tagen des Lebens der ultimative Schiedsrichter ist, sollte man verstehen, dass der Heilige Geist an diesen Prozessen nicht beteiligt ist. Der letzte Tag kann als Tag der Karma-Z&auml;hlung bezeichnet werden. Atma ist derjenige, der alle Funktionen des K&ouml;rpers ausf&uuml;hrt. Wenn man dies versteht, gilt eine Person, die glaubt, nichts pers&ouml;nlich getan zu haben, weder als S&uuml;nder noch als tugendhafte Person. Es ist wichtig zu erkennen, dass der Atma das Karma in den Taten eines Menschen bestimmt und ihn zur n&auml;chsten Geburt f&uuml;hrt. Abh&auml;ngig von den eigenen Gedanken werden sie entweder als Gnani, Unwissender, Gerechter oder S&uuml;nder beurteilt.</div></div></span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 38,
verse: `<b>(37)	Das Matthäusevangelium, 12. Kapitel, 40. Vers.</b>`,
meaning: ` <b>
(40) Denn wie Jona drei Tage und drei Nächte im Bauch eines riesigen Fisches war, so wird der Menschensohn drei Tage und drei Nächte im Herzen der Erde sein. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">	Dieser Vers zieht eine Parallele zwischen den Ereignissen vor der Zeit Jesu und den prophezeiten Ereignissen. Darin hei&szlig;t es, dass Jona, nachdem er von einem riesigen Fisch verschluckt worden war, drei Tage und drei N&auml;chte in dessen Bauch verweilte. Der Vers prophezeit auch: &bdquo;Jesus wird drei Tage und drei N&auml;chte im Herzen der Erde sein.&ldquo; W&auml;hrend es zutreffend ist, dass Jona drei Tage und drei N&auml;chte im Fisch verbrachte, l&auml;sst sich nicht pr&auml;zise sagen, dass Jesus, der Menschensohn, ebenso lange im Herzen der Erde lebte. Historisch gesehen wurde Jesus am Freitagabend am Kreuz gekreuzigt und ist am Sonntagmorgen vor Tagesanbruch von den Toten auferstanden. Historischen Aufzeichnungen zufolge wurde Jesus wahrscheinlich zwischen 15:30 und 16:00 Uhr gekreuzigt. am Freitag, und sein Leichnam wurde am Freitagabend in ein Grab gelegt. Folglich war Jesus nicht tags&uuml;ber am Freitag im Grab, sondern in der Nacht zum Freitag und den gesamten Samstag &uuml;ber. Die Auferstehung soll am Sonntag vor Tagesanbruch stattgefunden haben. Deshalb verbrachte Jesus die Freitagnacht und den ganzen Samstag im Grab und stand vor Sonntagmorgen von den Toten auf. Der Vers scheint anzudeuten, dass Jesus nur zwei N&auml;chte und einen Tag begraben wurde. Folglich k&ouml;nnte dieser Vers in der Heiligen Schrift falsch erscheinen, was Zweifel an seiner Richtigkeit aufkommen l&auml;sst. Dennoch gilt der Vers in der g&ouml;ttlichen Schrift als absolut zutreffend. Als andere die Echtheit dieses bestimmten Verses in Frage stellten, versp&uuml;rte auch ich Zweifel. Nachdem ich gesagt habe, dass es in diesem Satz keinen Platz f&uuml;r Unwahrheit au&szlig;er der Wahrheit gibt, musste ich antworten, was andere mich fragten. Doch erinnern wir uns an die F&uuml;hrung in Matth&auml;us 10:20: <strong>&bdquo;Denn nicht du wirst reden, sondern der Geist deines Vaters, der durch dich redet.&ldquo; </strong>zerstreut das Bed&uuml;rfnis nach Angst, indem es eine Antwort gibt. Das Verst&auml;ndnis ist, dass der Geist oder Atma derjenige ist, der Fragen stellt und Antworten gibt. Als Jeevas besteht unsere Aufgabe darin, zuzuh&ouml;ren und zu verstehen, was Atma mitteilt.

	Derjenige, der gemeinhin als Menschensohn bezeichnet wird, ist in Wahrheit der Sohn Gottes. Obwohl wir Jesus gemeinhin als den Sohn Gottes bezeichnen, ist es wichtig zu erkennen, dass er nicht der Sohn eines Menschen, sondern Gottes selbst ist. Diese Behauptung wird mit Gewissheit aufgestellt und basiert auf dem Verst&auml;ndnis, dass er der menschgewordene Gott ist. W&auml;hrend der von Gott bewohnte K&ouml;rper den Tod erlebte, ist Gott selbst unsterblich. Tats&auml;chlich gibt es vier Arten des Todes: nat&uuml;rlicher Tod, unnat&uuml;rlicher Tod, vor&uuml;bergehender Tod und endg&uuml;ltiger Tod. W&auml;hrend die Mehrheit mit der ersten Art vertraut ist, kennen diejenigen, die &uuml;ber spirituelle Weisheit oder &bdquo;Gnanis&ldquo; verf&uuml;gen, alle vier Arten. Der letzte Tod tritt ein, wenn Gott menschliche Gestalt annimmt oder wenn eine Person Moksham erreicht, also mit Gott verschmilzt. Obwohl der Glaube an den Tod Jesu am Kreuz weit verbreitet ist, kann niemand mit Sicherheit sagen, welche konkrete Art von Tod er erlebt hat.

	In diesem Vers hei&szlig;t es, dass Jesus drei Tage und drei N&auml;chte im Herzen der Erde war, sein Tod wird jedoch nicht ausdr&uuml;cklich erw&auml;hnt. W&auml;hrend seiner Kreuzigung herrschte der Glaube vor, dass er am Kreuz gestorben sei. Als Jesus jedoch am Sonntagmorgen aus dem Grab kam, behauptete er, er habe den Tod nicht erlebt. Um der Skepsis seiner J&uuml;nger entgegenzuwirken, zeigte er die Spuren der N&auml;gel an seinen Handgelenken und F&uuml;&szlig;en sowie die Wunde des Speeres und machte damit deutlich, dass er nicht gestorben war. Dennoch best&auml;tigen historische Aufzeichnungen, dass sein Leichnam nach seinem Tod am Freitagabend vom Kreuz abgenommen und in ein Grab gelegt wurde. Dieser offensichtliche Widerspruch, bei dem Er am Freitag starb und am Sonntag so erschien, als w&auml;re Er nicht gestorben, wirft Fragen zu der scheinbar unwahren Aussage auf <strong>Er w&uuml;rde drei Tage und drei N&auml;chte im Herzen der Erde verbringen. </strong>Laut 12:40 war Er nicht drei N&auml;chte und drei Tage dort, sondern nur zwei N&auml;chte und einen Tag. Die Erforschung des Grundes f&uuml;r diese scheinbare Inkonsistenz enth&uuml;llt eine tiefere Wahrheit, die in der scheinbaren Falschheit verborgen ist. Lassen Sie uns weiter untersuchen, wie sich die Wahrheit in diesem scheinbaren Widerspruch verbirgt.

	Es ist wahr, dass Jesus am Kreuz starb, aber niemand wusste, dass es so war <strong>vor&uuml;bergehender Tod</strong>. Jesus erlebte einen vor&uuml;bergehenden Tod von vier Arten von Todesf&auml;llen und erstand am fr&uuml;hen Sonntagmorgen aus dem vor&uuml;bergehenden Tod wieder auf. Er teilte seinen J&uuml;ngern mit, dass er nicht tot sei. Er w&auml;re nicht wieder auferstanden, wenn er einen nat&uuml;rlichen Tod erlebt h&auml;tte. Er stand jedoch am dritten Tag auf, weil er einen &bdquo;vor&uuml;bergehenden Tod&ldquo; erlitt. Daher ist die Vorstellung, dass Jesus am Kreuz gestorben ist, ein Missverst&auml;ndnis und nicht wahr. Ebenso ist die Schriftstelle, die besagt, dass Jesus drei Tage lang im Grab lag, zutreffend, erfordert jedoch ein tieferes Verst&auml;ndnis. Jesus ist als Jeevatma im K&ouml;rper pr&auml;sent, w&auml;hrend Atma, der Vater aller Dinge, ebenfalls im K&ouml;rper wohnt. Jeevatma erf&auml;hrt die Folgen des Karmas in jedem menschlichen K&ouml;rper, w&auml;hrend Atma die notwendigen Handlungen im Einklang mit dem Karma ausf&uuml;hrt. Atma durchdringt den gesamten K&ouml;rper, w&auml;hrend Jeevatma im Kopf lokalisiert ist. Atma &uuml;bt die Kontrolle &uuml;ber den K&ouml;rper durch seine zehn Teile und Organe aus. Die Vitalit&auml;t eines Menschen wird oft mit k&ouml;rperlicher Bewegung in Verbindung gebracht, und eine Person gilt als lebendig, wenn der K&ouml;rper in Bewegung ist. Wenn umgekehrt die zehn Teile und Organe nicht mehr funktionieren und die Atmung ausbleibt, gilt die Person als tot. Im Falle eines nat&uuml;rlichen Todes verlassen sowohl Atma als auch Jeevatma den K&ouml;rper, was zur Immobilisierung des K&ouml;rpers aufgrund der Abwesenheit von Atma f&uuml;hrt.

	Im Falle eines vor&uuml;bergehenden Todes verlassen weder Atma noch Jeevatma den K&ouml;rper. Atma erf&auml;hrt eine Kontraktion, schrumpft von den Au&szlig;enkanten auf eine winzige Gr&ouml;&szlig;e und dringt &auml;hnlich wie Jeevatma in den Kopf ein. W&auml;hrend dieser Zeit sind keine Organe des K&ouml;rpers funktionsf&auml;hig und die Atmung h&ouml;rt auf, was den Anschein eines Todes erweckt. Der Mann wird allgemein als tot angesehen, da sowohl &auml;u&szlig;ere als auch innere K&ouml;rperfunktionen aufh&ouml;ren. Die Auferstehung findet statt, wenn Atma seine gewohnte Funktion wieder aufnimmt, auftaucht und wieder zu arbeiten beginnt. Dieses Ph&auml;nomen wird am Beispiel von Jesus veranschaulicht. W&auml;hrend seiner Kreuzigung zog sich Atma in seinem K&ouml;rper zusammen und behielt diesen Zustand f&uuml;r Freitagnacht und den gesamten Samstag bei. Am fr&uuml;hen Sonntagmorgen nahm Atma seine normale Funktion wieder auf, was dazu f&uuml;hrte, dass Jesus lebend aus dem Grab hervorkam. Atma erfahren <strong>vor&uuml;bergehender Tod </strong>f&uuml;r nur zwei N&auml;chte und einen Tag. W&auml;hrend der Atma im K&ouml;rper Jesu zwei N&auml;chte und einen Tag im Grab war, kann man auch mit Recht sagen, dass Jesus (Jeevatma) drei N&auml;chte und drei Tage im Grab war, was einen Vorgang darstellt, den wir nicht vollst&auml;ndig verstehen. Lasst uns sehen, was es war.

	Man kann sagen, dass Jesus aufgrund von Atmas Handlungen in seinem K&ouml;rper auferstanden ist. Doch bevor Atma am Kreuz starb, war Jeevatma bereits im K&ouml;rper begraben. Die Verbindung zwischen Jeevatma und Buddhi wurde im K&ouml;rper Jesu unterbrochen, nachdem er am Donnerstag von seiner bevorstehenden Verhaftung erfahren hatte. Jesus trat in einen unbekannten Zustand ein, ohne sich seiner Verhaftung, seines Prozesses, seiner Auspeitschung und seiner Kreuzigung bewusst zu sein und wurde im Wesentlichen in seinem K&ouml;rpergrab begraben. Er blieb drei Tage lang bewusstlos, wie in einem Grab. Trotzdem f&uuml;hrte Atma alle notwendigen K&ouml;rperfunktionen aus, aber Jesus war sich dieser Handlungen nicht bewusst. Um zu verhindern, dass Jesus mit der Auspeitschung und Kreuzigung Schmerzen oder Leiden erleidet, schickte Atma ihn in einen unbekannten Zustand, &auml;hnlich dem Schlaf. Jeevatma blieb im K&ouml;rper begraben, bis Atma ihn am Sonntagmorgen weckte. Daher hei&szlig;t es in dem Vers: &bdquo;Jesus war drei Tage und drei N&auml;chte im Grab.&ldquo; Die Menschen wussten, dass der K&ouml;rper Jesu ins Grab gelegt wurde, aber der Jeevatma in Seinem K&ouml;rper geriet zuvor in einen Zustand des Unbekannten. Danach erlebte der Atma Jesu am Freitagabend einen vor&uuml;bergehenden Tod. Menschen, die nur sichtbare Dinge beobachten konnten, waren sich der Wirkung von Atma und Jeevatma im K&ouml;rper Jesu jedoch nicht bewusst. Es ist wahr, dass Jesus drei Tage und drei N&auml;chte im Grab war und Sein Atma zwei N&auml;chte und einen Tag im Grab.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 39,
verse: `<b>(38)	Das Matthäusevangelium, 13. Kapitel, 13., 14. und 15. Vers.</b>`,
meaning: `<b>
(13) Obwohl sie sehen, sehen sie nicht; Obwohl sie hören, hören und verstehen sie nicht.
<br><br>
(14) In ihnen erfüllt sich die Prophezeiung Jesajas: Ihr werdet immer hören, aber niemals verstehen; Du wirst immer sehen, aber niemals wahrnehmen.
<br><br>
(15) Denn das Herz dieses Volkes ist verhärtet; Sie hören kaum mit ihren Ohren und haben ihre Augen geschlossen. Andernfalls könnten sie mit ihren Augen sehen, mit ihren Ohren hören, mit ihren Herzen verstehen und sich umdrehen, und ich würde sie heilen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der Prophet Jesaja hat dies schon vor langer Zeit prophezeit. Sowohl damals als auch heute gab es unwissende Menschen. Sie sehen mit ihren Augen, hören mit ihren Ohren und lenken ihr Manas (Geist) ab, selbst nachdem sie es mit ihrem Buddhi verstanden haben. Aufgrund ihres mangelnden Interesses an dem, was sie gesehen, gehört und gewusst haben, wird ihr Buddhi langsamer, um zu vermeiden, dass ihr Karma durch Jesus zerstört wird. Ihre Ohren werden taub für die göttliche Weisheit. Sie hören auf alles, was gesagt wird, verstehen aber nicht, was sie hören, und verstricken sich in materielle Dinge. Sie können nur das Geld sehen. Für sie erscheinen diejenigen, die Weisheit besitzen, dumm.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 40,
verse: `<b>(39)	Das Matthäusevangelium, 15. Kapitel, 7., 8. und 9. Vers.</b>`,
meaning: `<b>
(7) Ihr Heuchler! Jesaja hatte Recht, als er über dich prophezeite.
<br><br>
(8) Diese Leute ehren mich mit ihren Lippen, aber ihre Herzen sind fern von mir.
<br><br>
(9) Sie beten mich umsonst an; Ihre Lehren sind lediglich menschliche Regeln. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Wir haben oft gesagt: &bdquo;Gott kennt die Sache Gottes; Menschen wissen es nicht.&ldquo; Gott kann &uuml;ber sich selbst sprechen, und die Menschen werden erfahren, wenn Gott offenbart, wie sie ihn anbeten sollen. Obwohl Gott vorhergesagt hat, wie er angebetet werden soll, predigen viele andere Wege, die sich von dem unterscheiden, was Gott gesagt hat. Viele Swamis und Gurus lehren Menschen von Menschen geschaffene Regeln wie Upadesas und andere Methoden der Anbetung. Gott selbst offenbart, dass &bdquo;solche Upadesas und Anbetung zwecklos sind&ldquo; und die Menschen nicht n&auml;her zu ihm bringen k&ouml;nnen. Viele Swamis und Gurus sprechen in ihren Reden &uuml;ber Gott, predigen aber gegen Gott gerichtete und unausgesprochene Gottesdienste und Upadesas. Obwohl diese Gurus und Swamis &uuml;ber Gott und Weisheit sprechen, verrichten sie vergebliche Gottesdienste, ohne die g&ouml;ttliche Weisheit zu verstehen, und verleiten andere dazu, dasselbe zu tun. Fasten hat zum Beispiel nichts mit der Anbetung Gottes zu tun. Sie leiden nicht nur unter dem Fasten, sondern bel&auml;stigen auch den Gott in ihrem Inneren. Auf diese Weise schaden sie dem Gott im Inneren. In &auml;hnlicher Weise hie&szlig; es vor f&uuml;nftausend Jahren in der Bhagavad-Gita: &bdquo;<strong>Du kannst mich nicht kennen und erreichen, indem du die Veden studierst, spendest oder Opfer und Bu&szlig;e &ldquo; </strong>In der Bhagavad-Gita sagt Gott, dass viele Menschen Ihn hoch ehren, Ihn aber vergeblich verehren, in einer Adharma-Manier. Der Herr hat jetzt dasselbe in der Heiligen Schrift gesagt.

  Worte kommen aus dem Mund, aber Gef&uuml;hle kommen aus dem Herzen. Obwohl viele Menschen in den h&ouml;chsten T&ouml;nen von Gott sprechen, stimmen ihre Herzen nicht wirklich mit Gottes Grunds&auml;tzen &uuml;berein. Trotz Wenn sie ihr Lob preisen, haben sie Gottes Dharmas nicht im Herzen. Mayas Dharmas fanden in ihren Herzen statt. Sie sprechen von Gott, aber was sie unter dem Einfluss der Maya tun, ist eine Anti-Gott-Anbetung. Viele Gurus nennen das, was sie sagen, Gottes Weisheit, aber die Anbetung, die sie aus&uuml;ben, wird sie, wie Gott sagte, nicht mit Gott vereinen. In der Gita wird auch davor gewarnt, dass diese Gottesdienste auf dem falschen Weg sind. Ber&uuml;hmte Peetadipatis f&uuml;hren jedoch vergebliche Yajnas, Spenden, Fasten, vedische Ges&auml;nge und Bu&szlig;e durch. Die Heilige Bibel und die Bhagavad-Gita besagen, dass diejenigen, die sich auf diese Praktiken einlassen, weit von Gott entfernt sind. Deshalb lasst uns von nun an Gott nicht nur in unseren Worten verherrlichen, sondern auch dem folgen, was Gott gesagt hat, und sinnlose und gottfeindliche Anbetung hinter uns lassen.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 41,
verse: `<b>(40)	Das Matthäusevangelium, 15. Kapitel, 11. Vers.</b>`,
meaning: ` <b>
(11) Was jemandem in den Mund geht, verunreinigt ihn nicht, sondern was aus seinem Mund herauskommt, das verunreinigt ihn. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Der Mensch nimmt Nahrung durch den Mund auf, und die Vielfalt der Nahrung ist riesig und nicht auf eine einzige Art beschr&auml;nkt. Einzelpersonen k&ouml;nnen entweder als Vegetarier oder Nicht-Vegetarier kategorisiert werden. Einige spirituelle F&uuml;hrer, wie Swamis und Gurus, bef&uuml;rworten den Vegetarismus als einen Weg zum Verst&auml;ndnis der Weisheit Gottes und behaupten, dass der Verzicht auf Fleisch unerl&auml;sslich sei. Hier sagte der Herr: <strong>&bdquo;Was jemandem in den Mund geht, verunreinigt ihn nicht, sondern was aus seinem Mund kommt, das verunreinigt ihn.&ldquo; </strong>Es gibt unterschiedliche Meinungen &uuml;ber Ern&auml;hrungspraktiken f&uuml;r diejenigen, die auf dem Weg der g&ouml;ttlichen Weisheit sind. Einige empfehlen den Verzicht auf nicht-vegetarische Kost, andere empfehlen eine ausschlie&szlig;lich rohe, ungekochte Kost. Einige schlagen eine vegetarische Ern&auml;hrung vor, die auf eine Mahlzeit am Tag beschr&auml;nkt ist. Trotz dieser vielf&auml;ltigen Ern&auml;hrungseinschr&auml;nkungen wird betont, dass die Heiligkeit oder Unreinheit eines Individuums nicht durch die verzehrten Lebensmittel bestimmt wird. W&auml;hrend die Nahrung, die wir essen, Auswirkungen auf die k&ouml;rperliche Gesundheit haben kann, hat sie keinen Einfluss auf die geistige Reinheit. Das Essen einer bestimmten Nahrung behindert nicht das Streben nach g&ouml;ttlicher Weisheit. Der Mensch nimmt Nahrung mit dem Mund auf und artikuliert W&ouml;rter mit demselben Organ. Insbesondere die Nahrungsaufnahme durch den Mund stellt kein Problem dar; vielmehr sind es die Worte, die aus dem Mund kommen, die das Potenzial haben, einen Menschen zu verunreinigen. W&auml;hrend der Mensch sich auf Handlungen und verbale &Auml;u&szlig;erungen einl&auml;sst, wird seine wahre Natur durch seine Worte enth&uuml;llt. <strong>&Auml;lteste vertreten den Glauben, dass jemand, der g&ouml;ttliche Weisheit besitzt, als heilig gilt, w&auml;hrend diejenigen, denen es an Weisheit mangelt, als unrein gelten. </strong>Eine Person mit Weisheit wird aufgrund ihrer Sprache als rein angesehen. Umgekehrt zeigt sich Unwissenheit in den Worten von jemandem, dem es an Weisheit mangelt. Die Befleckung eines Einzelnen wird durch seine Rede deutlich; Daher &uuml;bermittelte Jesus den oben genannten Vers. Nach den Lehren der Bibel und der Bhagavad-Gita wird ein Mensch nicht durch die Nahrung, die er zu sich nimmt, verunreinigt. Vielmehr ist es das eigene Karma, das f&uuml;r den Lebensunterhalt sorgt. Wer den Weg der Weisheit beschreitet, ist nicht an Ern&auml;hrungsbeschr&auml;nkungen gebunden. Was f&uuml;r Gott z&auml;hlt, ist nicht die konkrete Nahrungsaufnahme, sondern das Festhalten am Weisheitspfad. Daher ist es f&uuml;r Gott belanglos, welche Nahrung auch immer entsprechend den eigenen Gewohnheiten verzehrt wird.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 42,
verse: `<b>(41)	Das Matthäusevangelium, 15. Kapitel, 12. und 13. Vers.</b>`,
meaning: `<b>
(12) Da kamen die Jünger zu ihm und fragten: „Wisst ihr, dass die Pharisäer beleidigt waren, als sie das hörten?“
<br><br>
(13)  Er antwortete: „Jede Pflanze, die mein himmlischer Vater nicht gepflanzt hat, wird an den Wurzeln ausgerissen.“ </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Als der Herr verk&uuml;ndete, dass der Mensch nicht durch Nahrung verunreinigt werde und die Freiheit habe, jede Nahrung zu sich zu nehmen, w&auml;hrend er dennoch am Weg Gottes festhalte, erhoben die Pharis&auml;er Einw&auml;nde. Sie bestritten, dass den Worten des Herrn g&ouml;ttliche Weisheit fehlte, und lehnten sie entschieden ab. Sie beschuldigten Jesus, Unwissenheit zu f&ouml;rdern, und stellten die Quelle seiner Autorit&auml;t in Frage, solche Prinzipien zu lehren. Die Pharis&auml;er, die sich selbst als gro&szlig;e Lehrer betrachteten, behaupteten, dass nur sie die rechtm&auml;&szlig;ige Autorit&auml;t h&auml;tten, Weisheit &uuml;ber Gott zu vermitteln. Als die J&uuml;nger von den Einw&auml;nden der Pharis&auml;er erfuhren, informierten sie Jesus &uuml;ber die Situation. Als Antwort erkl&auml;rte er: <strong>&bdquo;Jede Pflanze, die nicht von meinem himmlischen Vater gepflanzt wurde, wird mit der Wurzel ausgerottet.&ldquo;</strong>

  Der Paraloka-Vater, Paramatma, etabliert seine Dharmas, die auf der Erde schwinden k&ouml;nnen, aber niemals wirklich untergehen. Wenn eine solche Verminderung auftritt, inkarniert Paramatma als Bhagavan, um diese Dharmas zu verst&auml;rken. Wenn die Dharmas schw&auml;cher werden, vermehren sich die Adharmas. Dharmas sind g&ouml;ttlich und geh&ouml;ren Gott, w&auml;hrend Adharmas mit Satan verbunden sind. Paramatma s&auml;t die Samen von Dharmas, w&auml;hrend Satan die Samen von Adharmas s&auml;t. Bei Paramatmas irdischer Inkarnation, um seine Dharmas zu vermitteln, nimmt Satan verschiedene Formen an, wie etwa Gelehrte, Pharis&auml;er, Lehrer und Swamis. In dieser Gestalt vermittelt Satan seine eigene Version der Weisheit und &uuml;berzeugt die Menschen davon, dass seine Dharmas gleichbedeutend mit Gottes Dharmas sind. Die Dharmas der Maya (Satans) untergraben gelegentlich die Dharmas von Paramatma. Manche fragen sich vielleicht, warum die Dharmas der Maya die m&auml;chtigen Dharmas Gottes schw&auml;chen k&ouml;nnen. Paramatma inkarniert als Paraloka-Vater an einem bestimmten Ort und zu einer bestimmten Zeit als Bhagavan, um seine Dharmas zu verbreiten. Obwohl diese Dharmas in diesem Zeitraum an St&auml;rke gewinnen k&ouml;nnen, l&auml;sst sie nach einigen tausend Jahren nach. Dies liegt daran, dass Gottes R&uuml;ckkehr als Bhagavan nur dann erfolgt, wenn dies als notwendig erachtet wird. Im Gegensatz dazu erschafft Maya st&auml;ndig Gurus und Swamis und &uuml;berzeugt sie davon, dass ihre Weisheit gleichbedeutend mit der Weisheit Gottes ist. Durch sie verbreitet Maya kontinuierlich ihre Dharmas und sorgt so f&uuml;r einen anhaltenden Einfluss auf die Erde.

  Menschen f&uuml;hlen sich oft zu Swamis, Gurus und Babas hingezogen, die st&auml;ndig unter dem Einfluss der Maya agieren, und nicht zu dem seltenen Erscheinen eines unbekannten Bhagavan, der alle tausend Jahre auftaucht. W&auml;hrend sich Gott immer nur an einem Ort manifestiert, wird Satan an vielen Orten in verschiedenen Formen geboren und &uuml;bernimmt Rollen wie Swamis, Gurus und Babas, wodurch Gottes Dharmas aktiv gemindert wird. &Auml;hnlich wie ein mit Unkraut &uuml;berwuchertes Feld das Wachstum der von einem Bauern gepflanzten B&auml;ume beeintr&auml;chtigt, breitet sich der Einfluss Satans um Gottes gepflanzte Dharmas aus. Um dem entgegenzuwirken, greift Gott wie ein flei&szlig;iger Bauer ein, indem er das Unkraut einschlie&szlig;lich seiner Wurzeln ausrei&szlig;t, um die von ihm ges&auml;ten B&auml;ume zu st&auml;rken. Im Laufe der Zeit kann es jedoch vorkommen, dass viele Unkr&auml;uter wieder auftauchen, ohne dass eine gezielte Aussaat erfolgt. Paramatma, der mit einem Bauern verglichen wird, pflanzte zun&auml;chst Seine Dharmas. Satan wiederum s&auml;t Unkraut (Adharmas) um Gottes Pflanzen (Dharmas). Die nat&uuml;rliche Schw&auml;chung der Pflanze Gottes erfolgt unter dem Einfluss des Unkrauts der Maya. Um dieses Problem anzugehen, greift Gott ein, <strong>viele der Dharmas der Maya extrahieren </strong>die in Seine eingedrungen sind Dharmas. Dies steht im Einklang mit der Essenz der Aussage Jesu: Gott zerst&ouml;rt Satans Dharmas, untergr&auml;bt seine eigenen und st&auml;rkt so seine g&ouml;ttlichen Prinzipien.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 43,
verse: `<b>(42) Das Matthäusevangelium, 15. Kapitel, 14. Vers.</b>`,
meaning: `<b>
(14) Verlasse sie; Sie sind blinde Führer. Wenn der Blinde den Blinden führt, fallen beide in die Grube.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Personen, die unter dem Einfluss der Maya standen, darunter Pandits und Pharisäer, die selbst Teil der Maya sind, kritisierten Bhagavan Jesus, ohne Gottes Weisheit zu verstehen. Sie sind sich der Weisheit Gottes nicht bewusst und haben keinen Einblick in die göttliche Weisheit. Sie bleiben blind, ohne Weisheit zu sehen. Wie können diejenigen, denen die Weisheit Gottes fehlt, sie verkünden und andere darin anleiten? Sie geben vor, Weisheit zu haben und verbreiten, was sie als Gottes Weisheit empfinden. Menschen, die diesen scheinbaren Sehern vertrauen, suchen Führung und gehen davon aus, dass sie die Weisheit Gottes vollständig kennen. Ohne dass sie es wissen, sind diese Führer selbst blind. Stellen Sie sich ein Szenario vor, in dem eine blinde Person andere, die ebenfalls blind sind, anführt, indem sie vorgibt, sehend zu sein, und sie auf dem Weg führt. Unweigerlich stolpert der blinde Anführer in die Grube und führt die anderen in die gleiche missliche Lage. Ebenso verspotten diejenigen, die die Weisheit Gottes nicht kennen, diejenigen mit wahrer Weisheit und bezeichnen sich selbst als große Gurus. Wer weise ist, muss nicht mit ihnen streiten. Personen, denen die Weisheit fehlt, können den Gipfel des Moksham nicht erklimmen. Auch wenn viele einem Guru folgen, dem es an Weisheit und Weisheit mangelt, erreicht keiner Moksham. Stattdessen fallen sie in die <b>Grube von Gunas.</b></div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 44,
verse: ` <b>(43) Das Matthäusevangelium, 16. Kapitel, 21. und 22. Vers.<br>
Das Matthäusevangelium, 17. Kapitel, Vers 22. und 23. Vers.
<br>
Das Matthäusevangelium, 20. Kapitel, Vers 17., 18. und 19.   Vers.</b>
`,
meaning: ` <b>
(16:21) Von da an begann Jesus seinen Jüngern zu erklären, dass er nach Jerusalem gehen und viel von den Ältesten, den Hohenpriestern und den Gesetzeslehrern erleiden und dass er getötet werden müsse und am dritten Tag zum Leben erweckt werden. (Erstes Mal)
<br><br>
(16:22) Petrus nahm ihn beiseite und fing an, ihn zu tadeln. „Niemals, Herr!“ er sagte. „Das wird dir nie passieren!“
<br><br>
(17:22) Als sie in Galiläa zusammenkamen, sagte er zu ihnen: „Der Menschensohn wird in die Hände der Menschen gegeben werden.“
<br><br>
(17:23) Sie werden ihn töten, und am dritten Tag wird er zum Leben erweckt.“ Und die Jünger waren voller Trauer. (Zweites Mal)
<br><br>
(20:17) Nun ging Jesus nach Jerusalem hinauf. Unterwegs nahm er die Zwölf beiseite und sagte zu ihnen:
<br><br>
(20:18) Wir ziehen hinauf nach Jerusalem, und der Menschensohn wird den Hohenpriestern und Gesetzeslehrern ausgeliefert werden. Sie werden ihn zum Tode verurteilen.
<br><br>
(20:19) Sie werden ihn den Heiden ausliefern, damit sie ihn verspotten und auspeitschen gekreuzigt. Am dritten Tag wird er zum Leben erweckt!“ (Drittes Mal)
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus sagte in den Kapiteln 16, 17 und 20 des Matthäusevangeliums seine eigene Zukunft voraus. Angesichts der Ungewissheit und Unbekanntheit der Zukunft ist es für gewöhnliche Menschen ungewöhnlich, den Zeitpunkt ihres Todes vorherzusagen. Jesus enthüllte die Umstände seines Todes jedoch nicht nur einmal, sondern dreimal und zeigte damit etwas Außergewöhnliches in ihm. Dieser Akt diente dazu, den Unwissenden zu zeigen, dass Er mehr als nur ein Mensch war. Die Fähigkeit, so detailliert über den Tod eines Menschen zu sprechen, ist eine Seltenheit, aber Jesus konnte dies tun, weil er seinen Tod vorherbestimmt hatte. Atma ist der alleinige Bestimmte des Lebenskarmas im Körper.

  Jesus sprach bei drei verschiedenen Gelegenheiten ausdrücklich über seinen bevorstehenden Tod. Seine Fähigkeit, sein Schicksal vorherzusagen, entsprang seinem vorherbestimmten Karma. Laut Jesus ist Atma – der Richter des Karma – der Sohn von Paramatma. Jesus behauptete stets, dass sein Vater der Heilige Geist sei, und identifizierte sich selbst als den Atma, der für die Bestimmung des Karma verantwortlich ist. Nachdem Jesus über sein Lebenskarma entschieden hatte, prophezeite er, dass er den Ältesten und Hohenpriestern übergeben, von ihnen getötet und am dritten Tag zum Leben erweckt werden würde. Bemerkenswerterweise verliefen diese Ereignisse genau so, wie Er es vorhergesagt hatte. Jesus sprach ohne Furcht von seinem Tod, ein Beweis, den jeder anspruchsvolle Mensch erkennen kann und der zeigt, dass Jesus kein gewöhnlicher Mensch war; Er hatte etwas Außergewöhnliches an sich.
</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 45,
verse: `<b>(44)	Das Matthäusevangelium, 19. Kapitel, 23. und 24. Vers.</b>`,
meaning: `<b>
(23) Da sagte Jesus zu seinen Jüngern: „Wahrlich, ich sage euch; Für jemanden, der reich ist, ist es schwer, das Königreich Paraloka zu betreten.
<br><br>
(24) Nochmals sage ich euch: Es ist leichter, dass ein Kamel durch ein Nadelöhr geht, als dass jemand, der reich ist, in das Reich Gottes gelangt.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> 	Jesus erz&auml;hlte ein Gleichnis, in dem es hie&szlig;: <strong>&bdquo;Es ist leichter, dass ein Kamel durch ein Nadel&ouml;hr geht, als dass ein reicher Mensch in das Reich Gottes gelangt.&ldquo; </strong>So wie es f&uuml;r ein Kamel unm&ouml;glich ist, durch ein Nadel&ouml;hr zu navigieren, so ist es auch f&uuml;r einen reichen Menschen eine Herausforderung, in das Reich Gottes einzutreten. Einige &Auml;lteste glauben, dass Reichtum oft Arroganz hervorruft, eine Eigenschaft, die als eine der sechs negativen Eigenschaften (Gunas) gilt. Arroganz, die f&uuml;nfte dieser Eigenschaften, geht mit Gier (Kaama), Wut (Krodha), Geiz (Lobha), Leidenschaft (Moha) und Eifersucht (Matsara) einher. Arroganz ist bei jedem Menschen in unterschiedlichem Ausma&szlig; vorhanden. Ob 90 %, 80 %, 70 %, 60 %, 50 %, 40 % oder 30 %, jeder besitzt ein gewisses Ma&szlig; an Arroganz. Eine Person kann 90 % Arroganz an den Tag legen, w&auml;hrend eine andere 80 % Arroganz aufweist und manche sogar nur 30 % Arroganz zum Ausdruck bringen.

  Arroganz pr&auml;gt nicht nur die Gedanken des Jeevatma im K&ouml;rper, sondern auch die anderen f&uuml;nf damit verbundenen Gunas spielen eine bedeutende Rolle. Der Grad der Arroganz kann unterschiedlich sein, und man hat beobachtet, dass die Armen im Allgemeinen weniger arrogant sind als die Reichen. Der Je wohlhabender eine Person ist, desto h&ouml;her ist tendenziell auch ihr Ma&szlig; an Arroganz. Jemand mit Millionen von Dollar kann ein noch gr&ouml;&szlig;eres Ma&szlig; an Arroganz an den Tag legen und sich st&auml;rker von den anderen Gunas beeinflussen lassen. Reichtum hat die Macht, bei einem Menschen bedeutende Ver&auml;nderungen herbeizuf&uuml;hren und ihn oft von der Weisheit abzubringen. Im Zusammenhang mit <strong>moksham </strong>Da es mit einem Nadel&ouml;hr verglichen wird, erstreckt sich die Analogie darauf, dass die Reichen mit einem Kamel vergleichbar sind. So wie ein Kamel nicht durch ein Nadel&ouml;hr gehen kann, steht ein wohlhabender Mensch mit dem starken Einfluss von Gunas, der einem Kamel &auml;hnelt, bei der Erlangung der Befreiung vor Herausforderungen. Die Analogie betont, dass ein wohlhabender Mensch unter dem Einfluss m&auml;chtiger gunas steht, so wie ein Kamel nicht durch ein Nadel&ouml;hr passen kann <strong>Gunas</strong>st&ouml;&szlig;t beim Betreten von Paraloka (Moksham) auf Hindernisse.</div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 46,
verse: `<b>(45)	Das Matthäusevangelium, 22. Kapitel, 36., 37., 38., 39. und 40. Vers.</b>`,
meaning: `<b>
(36) Lehrer, welches ist das größte Gebot im Gesetz (Dharma Shastra)?
<br><br>
(37) Jesus antwortete: „Liebe den Herrn, deinen Gott, mit deinem ganzen Herzen, mit deiner ganzen Seele und mit deinem ganzen Verstand.“
<br><br>
(38) Dies ist das erste und größte Gebot.
<br><br>
(39) Und das zweite ist so: „Liebe deinen Nächsten wie dich selbst.“
<br><br>
(40) Das ganze Gesetz und die Propheten hängen an diesen beiden Geboten.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Einige Menschen wandten sich an Jesus und stellten eine Frage zum wichtigsten Gebot des Gesetzes (Dharma Shastra), mit der Absicht, ihn auf die Probe zu stellen und ihn m&ouml;glicherweise zu verspotten, wenn er stolperte. Als Antwort antwortete Jesus prompt: <strong>&bdquo;Liebe den Herrn, deinen Gott, mit deinem ganzen Herzen, deiner ganzen Seele und deinem ganzen Verstand.&ldquo; </strong>Er betonte, dass diese Weisung das oberste und gr&ouml;&szlig;te Gebot sei, gefolgt von einem zweiten Gebot. Die Verwendung des Begriffs &bdquo;Gebot&ldquo; in diesem Vers unterstreicht seine Bedeutung, da Jesus behauptet, dass diese beiden Gebote als Grundlage f&uuml;r das gesamte Gesetz und die Propheten dienen. Dieser Vers wird wie folgt erkl&auml;rt.

  Ein Gebot ist im Wesentlichen eine Anweisung zum direkten Handeln. Im weiteren Kontext stellt sich die Frage: Wer ist die Autorit&auml;t, die den Befehl erteilt? Die Antwort liegt in der Erkenntnis, dass die &Auml;lteren &uuml;blicherweise den J&uuml;ngeren Befehle erteilen. Diese Idee erweiternd: Gott, der Sch&ouml;pfer der Welt, besitzt die h&ouml;chste Autorit&auml;t, und was er befehlend mitteilt, wird als a angesehen <strong>Gebot </strong>oder <strong>Gesetz</strong>. Dieses Gesetz umfasst unab&auml;nderliche Gesetze und wird allgemein als bezeichnet <strong>Dharma</strong>. Der Begriff &bdquo;Dharma&ldquo; wird verwendet, weil dieses Gesetz von Natur aus unver&auml;nderlich ist. Beispielsweise ist die Sch&auml;rfe einer Chilischote eine unver&auml;nderliche Eigenschaft oder ein Dharma der Chilischote. Diese Sch&auml;rfe ist in allen Chilischoten durchg&auml;ngig vorhanden. Man kann also sagen, dass das Dharma der Chilischoten in ihrer Sch&auml;rfe liegt. Ebenso ist S&auml;ure das Dharma von Tamarinde und Bitterkeit das Dharma von Neem.

  Dharma umfasst eine Reihe von Regeln und Vorschriften. Wenn man fragt, wer Dharma hat, dann hat alles, was geschaffen wird, Dharma, genau wie die geschaffene Tamarinde, Chili und Neem Dharma haben. Da Gott der Sch&ouml;pfer der Sch&ouml;pfung ist, besitzt er keine Dharmas. Der Sch&ouml;pfergott steht &uuml;ber den Zw&auml;ngen des Dharma. Sowohl Atma als auch Jeevatma, mit Ausnahme von Gott, unterliegen Dharmas. Dar&uuml;ber hinaus besitzt das geschaffene Prakruti auch seine eigenen Dharmas. Um Brahma Vidya oder spirituelle Bildung zu verstehen, ist das Verst&auml;ndnis der Dharmas von Atma und Jeevatma von entscheidender Bedeutung. Jeevatma, speziell dazu gedacht, Brahma Vidya zu verstehen, <strong>Man muss nur mit dem Dharma von Atma vertraut sein.</strong>

  In diesem Vers wird die Methode zum Verst&auml;ndnis von Atma als bedeutsam hervorgehoben. Das Dharma Shastra befasst sich mit der Natur des Atma, wobei der wichtigste Dharma wie folgt beschrieben wird <strong>&bdquo;Den Herrn, deinen Gott, zu lieben, ist das erste und gr&ouml;&szlig;te Gebot.&ldquo; </strong>Der Herr, auf den hier Bezug genommen wird, ist in erster Linie derjenige, der geboren wird. Jesus betonte, dass das oberste Gebot darin besteht, den geborenen Gott zu lieben. Es stellt sich jedoch die Frage: Wenn Gott der Sch&ouml;pfer, ungeschaffen und ohne Dharma ist, wie kann dann auch der Urgeborene (der Herr) als Gott betrachtet werden? Das Dilemma dreht sich darum, ob der Selbstexistierende Gott oder der Geborene Gott ist. Die Antwort auf dieses Dilemma wird wie folgt erl&auml;utert.

  Gott, der Ungeborene und Sch&ouml;pfer, erlebte keine Geburt. Urspr&uuml;nglich erschuf Gott Prakruti. Nach der Erschaffung von Prakruti hatte Gott (Paramatma) die Absicht, Lebewesen hervorzubringen. Nachdem Prakruti entstanden war, entschied sich Gott, keine direkten Ma&szlig;nahmen zu ergreifen. Nach der Erschaffung der f&uuml;nf Elemente &ndash; Himmel, Luft, Feuer, Wasser und Erde &ndash; w&uuml;nschte sich Gott einen Zustand der Inaktivit&auml;t. Als Gott sich in einer Form manifestieren wollte, <strong>Atma </strong>(der Herr) wurde ins Leben gerufen, um Lebewesen zu erschaffen, zu regieren und letztendlich zu vernichten. Atma formuliert Regeln und &uuml;berwacht den Kreislauf von Leben und Tod aller Lebewesen. Da Atma der Sch&ouml;pfer aller Lebewesen ist, ist es angemessen, Atma als Gott zu bezeichnen. <strong>Folglich wird Gott, der Sch&ouml;pfer von Prakruti, als prim&auml;re Entit&auml;t anerkannt, w&auml;hrend Gott, der Sch&ouml;pfer der lebenden Organismen innerhalb von Prakruti, als sekund&auml;re Entit&auml;t anerkannt wird.</strong>

  Der erste Gott, der als Paramatma erkannt wird, erschuf Atma, ist Gott f&uuml;r Atma und bleibt von Atma verschieden. Der zweite Gott, bekannt als Atma, ist der Sch&ouml;pfer aller Lebewesen. Obwohl sowohl Paramatma als auch Atma als Sch&ouml;pfer und G&ouml;tter fungieren, <strong>Der erste Gott (Paramatma) steht &uuml;ber den Dharmas, w&auml;hrend der zweite Gott (Atma) an den Dharmas festh&auml;lt. Der Gott ohne Dharmas ist der prim&auml;re Sch&ouml;pfer, wohingegen der Gott mit Dharmas der sekund&auml;re Sch&ouml;pfer ist. </strong>Niemand wei&szlig;, dass es zwei G&ouml;tter auf der Welt gibt. Obwohl es zwei G&ouml;tter gibt, wobei der erste Gott der gr&ouml;&szlig;te ist, hat Atma als Sch&ouml;pfer des Menschen eine besondere Bedeutung f&uuml;r den Menschen. F&uuml;r den Menschen ist es wichtig, ausschlie&szlig;lich Atma zu verehren. Einzelpersonen werden ermutigt, die mit dem zweiten Gott verbundenen Dharmas zu verstehen. Wichtig ist, dass sich alle in den Schriften offenbarten Dharmas um Atma drehen.

  Wenn ein Mensch anbeten und beten m&ouml;chte, richtet er sich an den zweiten Gott, Atma. Niemand kann den ersten Gott anbeten. Es ist niemandem m&ouml;glich, Ihn zu beten oder anzubeten. Aus diesem Grund werden Anbetung und Gebet zum ersten Gott als unn&ouml;tig erachtet <strong>Gott zeugt weder, noch wird er geboren</strong>, wie in der letzten Schriftstelle betont. Sure 112 unterstreicht dies noch mehr <strong>Der erste Gott ist gegen&uuml;ber Gebeten gleichg&uuml;ltig</strong>. Es ist bemerkenswert, dass sowohl Christen als auch Muslime die Existenz zweier G&ouml;tter (zweier Allahs) m&ouml;glicherweise nicht anerkennen, da sie an dem Glauben an einen einzigen Gott festhalten, den sie verehren. Allerdings ist der Unterschied zwischen <strong>der anzubetende Gott und der urspr&uuml;ngliche Sch&ouml;pfergott </strong>wird oft &uuml;bersehen. Die Hindus sind Sie sind sich Gottes nicht bewusst, verehren aber viele Gottheiten und gehen insgesamt den falschen Weg (den unwissenden Weg).

  Der erste Gott transzendiert den Bereich der Dharmas und macht ihn unerkennbar und jenseits der Anbetung. Um Atma, den von Dharmas regierten Gott, zu verehren, sind bestimmte Elemente des menschlichen K&ouml;rpers unerl&auml;sslich. Laut Dharma Shastra ist es f&uuml;r Jeeva von entscheidender Bedeutung, Atma, den Gott, zu verehren und dabei sowohl Manas als auch Buddhi zu verwenden. Dies wird zu einem bedeutenden Dharma. Der Vers betont, <strong>&bdquo;Liebe Atma, den Gott, mit deinem ganzen Herzen, deiner ganzen Seele und deinem ganzen Verstand.&ldquo; </strong>wo Liebe als Anbetung interpretiert wird. Dies ist das wichtigste Gebot oder Dharma<strong>. Wenn man das Gebot als Dharma interpretiert, bedeutet &bdquo;ganz dein Herz&ldquo; dein ganzes Buddhi und &bdquo;ganz deine Seele&ldquo; bezieht sich auf dich, Jeeva. Liebe bedeutet in diesem Zusammenhang Anbetung. Im Dharma Shastra hei&szlig;t es, dass man Atma, den Gott, mit seinem Geist und seinem Buddhi verehren soll. </strong>Lassen Sie uns anhand der Erw&auml;hnung des zweiten Gebots n&auml;her darauf eingehen, was es beinhaltet.

  Das zweite Gebot weist darauf hin, <strong>"Liebe deinen N&auml;chsten wie dich selbst." </strong>Diese beiden Gebote bilden den Grundstein des Dharma Shastra und der Lehren der Propheten, wie im Vers dargelegt. Im Wesentlichen dienen sie als Grundlage f&uuml;r die Dharmas im Bereich von Brahma Vidya und als Anleitung, die die Propheten bei der Vermittlung dieser Dharmas gegeben haben. Der Vers deutet auf subtile Weise an, dass Selbstliebe und die Priorisierung des pers&ouml;nlichen Wohlbefindens universelle Tendenzen sind. Wenn Menschen mit Bedrohungen konfrontiert werden, zeigen sie einen angeborenen Instinkt, ihr eigenes Leben zu sch&uuml;tzen, und unternehmen dabei oft au&szlig;ergew&ouml;hnliche Anstrengungen, auch wenn sie daf&uuml;r ihren Besitz opfern m&uuml;ssen. Die tiefe Hoffnung, die Menschen f&uuml;r ihr eigenes Leben hegen, zeigt sich in ihren Gebeten zu verschiedenen Gottheiten und ihrer Bereitschaft, alle Ma&szlig;nahmen zu ergreifen, um ihr Wohlergehen zu gew&auml;hrleisten. Diese Beobachtung unterstreicht die angeborene Tendenz des Einzelnen, der Selbstliebe Vorrang einzur&auml;umen. Der Vers fordert: &bdquo;Liebe deinen N&auml;chsten wie dich selbst&ldquo; und betont die Notwendigkeit, dem N&auml;chsten das gleiche Ma&szlig; an F&uuml;rsorge und R&uuml;cksichtnahme entgegenzubringen, wie man von Natur aus um sein eigenes Wohlergehen bem&uuml;ht ist und sein eigenes Leben wertsch&auml;tzt.

  W&auml;hrend sich das herk&ouml;mmliche Verst&auml;ndnis eines &bdquo;Nachbarn&ldquo; oft auf jemanden bezieht, der nebenan wohnt, fordert uns der Vers &bdquo;Liebe deinen N&auml;chsten wie dich selbst&ldquo; dazu auf, die Liebe demjenigen entgegenzubringen, der uns sehr nahe steht, und nicht unserem Nachbarn von nebenan. Wenn man tiefer geht, regt der Vers zum Nachdenken dar&uuml;ber an, wer unser N&auml;chster wirklich ist. Gem&auml;&szlig; dem Vers, abgesehen von Ihrem <strong>Atma</strong>, es gibt niemanden sonst in deinem K&ouml;rper. Wenn Sie sich als Seele (Jeevatma) identifizieren, gibt es eine andere Seele, die Ihnen &auml;hnlich ist &ndash; den zweiten Gott, Atma. Insgesamt gibt es nur drei Seelen, was zwei Seelen au&szlig;er dir selbst bedeutet, von denen eine Paramatma ist. Allerdings ist es unpraktisch, Paramatma als deinen N&auml;chsten zu bezeichnen, da Er allgegenw&auml;rtig und alldurchdringend ist. Mit Ausnahme von Paramatma ist der verbleibende Atma dein Nachbar. Dieses Konzept steht im Einklang mit dem Verst&auml;ndnis, dass mit Ausnahme von Atma und Paramatma die gesamte Sch&ouml;pfung als weibliches Prakruti betrachtet wird, wobei Atma und Paramatma den m&auml;nnlichen Aspekt repr&auml;sentieren.

  Da Atma das einzige m&auml;nnliche Wesen ist, das mit Ihnen verwandt ist, wird es zu Recht als Ihr Nachbar betrachtet. Der erste Gott, Paramatma, steht jenseits des Bereichs der Anbetung, der Beziehungen und der Dharmas und macht Atma zum rechtm&auml;&szlig;igen Gegenstand der Anbetung. Die g&ouml;ttlichen Schriften bekr&auml;ftigen immer wieder die W&uuml;rdigkeit der Anbetung von Atma und bezeichnen ihn als &bdquo;Atma&ldquo;. <strong>&bdquo;dein Allah.&ldquo; </strong>Diese Erkl&auml;rung wird in Sure 6:102, 3:18 und 16:51 wiederholt. Die Bedeutung der beiden Gebote &bdquo;Liebe deinen N&auml;chsten (Atma) wie dich selbst&ldquo; wird darin unterstrichen Dharma Shastra. <strong>Die Anbetung des Atma erweist sich als die Hauptaufgabe von Gurus, Predigern und Propheten. </strong>Dies wird deutlich in der Antwort, die Jesus einem Pharis&auml;er gab, als er nach dem grundlegendsten Dharma des Gesetzes gefragt wurde. Das Nachdenken &uuml;ber diesen Vers f&uuml;hrt zu einer tieferen Betrachtung des Wesens, auf das Sie Ihre Anbetung richten.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 47,
verse: ` <b>(46)	Das Matthäusevangelium, 23. Kapitel, 8., 9. und 10. Vers.</b>`,
meaning: ` <b>
(8) „Aber du darfst nicht ‚Rabbi‘ genannt werden, denn du hast einen Lehrer, und das bist du alle Brüder.
<br><br>
(9) Und nenne niemanden auf der Erde „Vater“, denn du hast einen Vater, und er ist darin paraloka.
<br><br>
(10) Ihr dürft auch nicht als Guru bezeichnet werden, denn ihr habt einen Guru den Messias. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Manche bezeichnen einen Prediger m&ouml;glicherweise als Vater oder halten Gurus, die predigen, f&uuml;r gleichberechtigt mit einem Vater. Der Vers besagt jedoch, dass niemand als Prediger bezeichnet werden sollte. Es hei&szlig;t, niemanden Rabbi zu nennen, da es nur einen Meister gibt und alle anderen Br&uuml;der sind, wie es im Vers hei&szlig;t. Ein Prediger ist jemand, der lehrt, aber der Vers bezieht sich speziell auf jemanden, der g&ouml;ttliche Weisheit lehrt. Dem Vers zufolge kennt nur eine Person die g&ouml;ttliche Weisheit und niemand sonst. Warum wissen die anderen es nicht? Wer ist derjenige, der es wei&szlig;? Die Antwort auf diese Fragen lautet wie folgt.

  Gottes Weisheit ist niemandem au&szlig;er Gott bekannt, wie in den g&ouml;ttlichen Schriften dargelegt. In den g&ouml;ttlichen Schriften wird auch erw&auml;hnt, dass Gott seine Weisheit keinem Menschen weitergegeben hat. Das bedeutet, dass niemand Gottes Weisheit kennt. Deshalb kann niemand Gottes Weisheit lehren. Daher sollten Sie nicht Rabbi genannt werden, wie es im Vers hei&szlig;t. Nur Gott kann die Weisheit Gottes lehren. Daher hei&szlig;t es in dem Vers, dass dein Meister nur einer ist und Er ist Gott. Ein Mensch ist kein Meister (Lehrer), und alle Menschen sind Br&uuml;der, wie es im Vers hei&szlig;t.

  Jeder hat leibliche Eltern. Jeder glaubt, dass die sichtbaren Eltern aus der Kindheit die wahren Eltern sind. Viele &Auml;lteste raten dazu, dass man seine Eltern respektieren sollte. Jeder respektiert seine leiblichen Eltern. Man kann sagen, dass es au&szlig;er den sichtbaren Eltern keine weiteren Mutter- oder Vaterfiguren gibt. All dies hat einen weltlichen Bezug. Allerdings hat jeder Mensch nach g&ouml;ttlicher Weisheit unsichtbare, unbekannte Eltern. Wenn man fragt, ob sichtbare Eltern echte Eltern oder unsichtbare Eltern echte Eltern sind, wird deutlich, dass unsichtbare Eltern echte Eltern sind. Der Grund, warum wir das sagen, ist, dass der Vater der Samenspender f&uuml;r jeden Menschen ist. Entsprechend, <strong>Gott (Atma), der unsichtbare Vater, ist der Samenspender aller Lebewesen. </strong>Somit wird der unsichtbare Vater zum wahren Vater. Ob wir es wissen oder nicht, unser leiblicher Vater ist Atma. Daher, <strong>Nenne keinen Mann auf der Erde deinen Vater, denn einer ist dein Vater, der in Paraloka ist</strong>, wie im Vers gesagt.

  Der Vers besagt, dass der sichtbare Prediger nicht der wahre Prediger ist, der biologische Vater nicht der tats&auml;chliche Vater ist und der sichtbare Guru nicht der richtige Guru ist. Viele lehren etwas und werden Gurus genannt. Wenn Sie als Guru bezeichnet werden, spielen Sie eine Rolle, die nicht zu Ihnen passt. Gott allein kann jederzeit als Guru auf die Erde kommen. Wann Gott inkarniert als Mensch, wird zum Guru und lehrt Weisheit. Deshalb sollten wir verstehen, dass die <strong>Die Inkarnation Gottes als Mensch auf Erden ist der wahre Guru.</strong></div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 48,
verse: ` <b>(47)	Das Matthäusevangelium, 23. Kapitel, 15. Vers.</b>`,
meaning: `  <b>
(15) „Wehe euch, ihr Gesetzeslehrer und Pharisäer, ihr Heuchler! Sie reisen über Land und Meer, um einen einzelnen Konvertiten zu gewinnen, und wenn Sie Erfolg haben, machen Sie ihn doppelt so sehr zu einem Kind der Hölle wie Sie. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Die Religion existierte erst dreitausend Jahre nach dem Kali Yuga. Vor zweitausend Jahren, als das Christentum entstand, entstanden Christen zunächst als Gruppen und bildeten später eine christliche Gemeinschaft. Nach einiger Zeit behauptete die christliche Gemeinschaft, eine christliche Religion zu sein. So wurde die erste Religion geboren. Nachdem sie behaupteten, eine christliche Religion zu sein, versuchten sie, ihren Glauben zu erweitern. Andere identifizierten sich später aufgrund ihrer Lehren als Religion. So entstanden nacheinander Religionen. Sehr bald bildeten sich auf der Erde zwölf Religionen. Nach der Gründung der Religionen engagierten sich einige Menschen für die Ausweitung ihres Glaubens. Sie reisten über Land und Meer, um andere zu ihrer Religion zu bekehren.

  Religion wird durch den Willen der Menschen geschaffen, nicht durch Gottes Weisheit. In diesen von Menschen geschaffenen Religionen scheint es göttliche Weisheit zu geben, aber die Weisheit in ihnen steht im Widerspruch zu der von Gott offenbarten Weisheit. Daher wird eine Person, die sich unabhängig von ihrer Religion auf die göttliche Weisheit und Schrift verlässt, Gottes Lehren und Weisheit verstehen. Wenn eine Person an eine Religion gebunden ist und behauptet, einer bestimmten religiösen Gruppe anzugehören, wird sie die Weisheit der Maya verstehen. Wenn jemand eine Religion annimmt, verstrickt er sich in Sünde. Andererseits ist eine Person ohne Religionszugehörigkeit berechtigt, das Königreich Paraloka zu betreten.
</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 49,
verse: `<b>(48) Das Matthäusevangelium, 24. Kapitel, 35. Vers.</b>`,
meaning: ` <b>
(35) Der Himmel und Erde werden vergehen, aber meine Worte werden niemals vergehen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> 	Paramatma (Gott) spricht nicht. Atma, das im K&ouml;rper wohnt, kann sprechen. Atma ist der zweite Sch&ouml;pfer und der zweite Gott. Das im K&ouml;rper vorhandene Atma kommuniziert durch Sprache. Der zweite Gott (Atma) vermittelt der Menschheit viel Weisheit. Die auf diese Weise gelehrte Weisheit wird durch Worte vermittelt. Atmas Lehren aus dem K&ouml;rper in Form von Worten werden niemals vergehen, selbst wenn der Himmel und die Erde vergehen w&uuml;rden, wie es im Vers hei&szlig;t. Was hier zu beachten ist, ist <strong>dass der erw&auml;hnte Himmel und die Erde vergehen werden, aber meine Worte werden niemals vergehen. </strong>Aber man kann sagen, dass der Himmel und die Erde niemals vergehen. Der Vers scheint jedoch zu vermitteln, dass der Himmel und die Erde vergehen werden. Daher sollten wir verstehen, dass sowohl der Himmel als auch die Erde, die im Vers erw&auml;hnt werden, nicht der Himmel und die Erde sind, die wir sehen. Der im Vers beschriebene Himmel und die Erde sind verg&auml;nglich. Die Erde und der Himmel, die niemals vergehen, sind eine Art, w&auml;hrend die verg&auml;ngliche Erde und der Himmel eine andere Art sind. Im Prakruti, das die Form des menschlichen K&ouml;rpers hat, gibt es den Himmel, die Luft, das Feuer, das Wasser und vieles mehr Erde. Sie alle &ndash; der erste Himmel, die letzte Erde und die &uuml;brige Luft, das Feuer und das Wasser &ndash; sind in Form des K&ouml;rpers verg&auml;nglich. <strong>Der menschliche K&ouml;rper wird sterben, aber die vom Menschen vermittelte Weisheit wird niemals vergehen.</strong></div></div>
</span>`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 50,
verse: `<b>(49)	Das Matthäusevangelium, 24. Kapitel, 42. Vers. </b>`,
meaning: ` <b>
(42) Darum sei wachsam, denn du weißt nicht, an welchem Tag dein Herr kommen wird.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wann immer es eine Bedrohung f&uuml;r Gottes Dharmas auf der Erde gibt und sich Satans Dharmas weithin ausbreiten, sendet Gott einen Teil von sich selbst auf die Erde, um seine Gebote (Dharmas) zu sch&uuml;tzen. Wann immer es n&ouml;tig ist, muss Gott als Mensch kommen. Krishna im Dvapara Yuga und der Herr Jesus im Kali Yuga kamen auf diese Weise. Bemerkenswerterweise konnten wir sie nach ihrer Ankunft und Abreise identifizieren, aber als sie auf der Erde waren, konnten wir nicht identifizieren, wer sie waren. Niemand erkannte, wann Gott selbst als der Herr kam. Sogar diejenigen, die seine Herrlichkeit sahen, konnten nicht wissen, dass er Gott war, sondern hielten ihn f&uuml;r gro&szlig;artig. Im Dvapara Yuga sagte Krishna: <strong>&bdquo;Ich werde kommen, wenn die Dharmas verschmutzt sind.&ldquo; </strong>Er kam erneut als Herr Jesus und wiederholte seine Dharmas. Es wird keinen Unterschied in den Geboten geben, die er gegeben hat, weder im Dvapara Yuga noch im Kali Yuga. Aber es gibt keine &Auml;hnlichkeiten in ihren Namen, Leben und Lebensstilen. Daher betonte Satan ihre &auml;u&szlig;erlichen Unterschiede und brachte die Menschen dazu, nicht zu erkennen, dass beide gleich waren. Der Mensch braucht etwas Weisheit, um zu wissen, wer gekommen ist, wer kommen wird, wann er gekommen ist und wann er kommen kann. Solange der Mensch in Unwissenheit ist, kennt er das Kommen Gottes nicht und bleibt sich dessen nicht bewusst, selbst nachdem Gott gekommen und gegangen ist. Wenn Menschen also Gottes Ankunft erfahren und Ihn erkennen wollen, m&uuml;ssen sie &uuml;ber Weisheit in Bezug auf Gott verf&uuml;gen. Heutzutage ist Gottes Weisheit nicht bekannt und die Weisheit Satans ist weit verbreitet. Somit, <strong>&bdquo;Du wei&szlig;t nicht, an welchem Tag dein Herr kommen wird&ldquo; </strong>sagte der Vers<strong>. &bdquo;Bleib wach, um Ihn kennenzulernen&ldquo; </strong>wird auch in dem Vers erw&auml;hnt. Hier <strong>&bdquo;Wach bleiben&ldquo; bedeutet, Weisheit zu haben.</strong></div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 51,
verse: ` <b>(50) Das Matthäusevangelium, 26. Kapitel, 26., 27. und 28. Vers.</b>`,
meaning: `<b>
(26) Während sie aßen, nahm Jesus das Brot, und als er gedankt hatte, brach er es und gab es seinen Jüngern und sagte: Nehmt und esst! das ist mein Körper."
<br><br>
(27) Und er nahm einen Kelch, dankte und reichte ihn ihnen mit den Worten: „Trinkt alle daraus!“
<br><br>
(28) Dies ist mein Blut des Bundes (Gottes Weisheit ohne die Fesseln der Unwissenheit), das für viele zur Vergebung der Sünden ausgegossen wird. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	W&auml;hrend Jesus und seine zw&ouml;lf J&uuml;nger a&szlig;en, nahm Jesus das Brot, segnete es, brach es, gab es seinen J&uuml;ngern und sagte: <strong>&bdquo;Nimm und iss; das ist mein K&ouml;rper." </strong>Er nahm auch Traubensaft in eine Tasse und sagte: <strong>&bdquo;Ihr trinkt alle daraus; das ist mein Blut.&ldquo; </strong>Er verglich Traubensaft mit Seinem Blut und f&uuml;hrte es weiter aus, indem er erkl&auml;rte: <strong>&bdquo;Dies ist mein Blut des Bundes, das f&uuml;r viele vergossen wird zur Vergebung der S&uuml;nden.&ldquo;</strong>

  Diese scheinbar allt&auml;glichen Worte Jesu sollten zu den wichtigsten seiner Lehren gez&auml;hlt werden. Bedauerlicherweise begreifen einige Christen, die den Kern dieser beim Essen gesprochenen Worte nicht kennen, ihre Bedeutung nicht. <strong>Manche interpretieren, dass Jesus diese Worte &uuml;ber seine Vergangenheit oder Zukunft sprach, obwohl es um die Gegenwart ging.</strong>

  Jesus gab Traubensaft in einen Becher und sagte: &bdquo;Das ist mein Blut&ldquo;, aber er machte nicht deutlich, dass es das Blut seines K&ouml;rpers war, das am Kreuz vergossen wurde. Dennoch f&uuml;hren viele christliche Prediger das in diesem Vers erw&auml;hnte Blut auf das am Kreuz vergossene Blut Jesu zur&uuml;ck und behaupten, dass die S&uuml;nden eines Menschen vergeben seien, weil Jesus sein Blut f&uuml;r S&uuml;nder vergossen habe. Es besteht jedoch eine Diskrepanz zwischen dem, was der Mensch sagt, und dem, was Jesus sagte. Jesus erw&auml;hnte in dem Vers nicht das Blut seines K&ouml;rpers. In solchen F&auml;llen w&auml;re es unfair zu sagen, dass Jesus sein Blut f&uuml;r S&uuml;nder vergossen hat. An diesem Tag begingen diejenigen, die Jesus ans Kreuz brachten, ihn sein Blut vergie&szlig;en lie&szlig;en und seinen Tod verursachten, eine schreckliche und unverzeihliche S&uuml;nde. Es w&auml;re jedoch falsch zu behaupten, dass die S&uuml;nden der Menschen durch den Tod Jesu vergeben wurden und vergeben werden.

  Als Jesus seinen J&uuml;ngern Traubensaft gab und sagte: <strong>&bdquo;Dies ist das Blut des Bundes, das f&uuml;r viele vergossen wird zur Vergebung der S&uuml;nden.&ldquo; </strong>Er verwendete die Gegenwartsform, um anzuzeigen, dass es in diesem Moment geschah, und erw&auml;hnte kein zuk&uuml;nftiges Ereignis. Er spielte nicht auf das zuk&uuml;nftige Vergie&szlig;en seines Blutes am Kreuz an. Daher w&auml;re es falsch zu behaupten, dass das am Kreuz vergossene Blut der Vergebung der S&uuml;nden diente. <strong>Diejenigen, die daf&uuml;r verantwortlich waren, dass Jesus sein Blut am Kreuz vergoss, empfingen S&uuml;nde, nicht Vergebung der S&uuml;nden. </strong>Was Jesus bezog, war das Blut des Bundes, was Gottes Weisheit bedeutete, die nicht an Unwissenheit gebunden ist. Er lehrte diese g&ouml;ttliche Weisheit t&auml;glich und verglich sie mit dem Ausgie&szlig;en des Blutes des Bundes aus Seinem Mund. Er verbreitete jeden Tag das Feuer der Weisheit, um die S&uuml;nden der Menschen wegzubrennen, und verglich seine Lehren mit dem Blut des Bundes, das aus seinem Mund floss. Die wahre Bedeutung dieses Verses kann nur durch sorgf&auml;ltige Analyse verstanden werden.

  Die Bedeutung der Aussage wird kaum verstanden, da das Wort &bdquo;Bund&ldquo; oft in der Formulierung &bdquo;Bundblut&ldquo; weggelassen wird und nur das Wort &bdquo;Blut&ldquo; ber&uuml;cksichtigt wird. Es ist nicht klar, dass &bdquo;Bund&ldquo; &bdquo;Weisheit mit Dharmas&ldquo; bedeutet. Ein weiterer Grund f&uuml;r die Erw&auml;hnung von &bdquo;Blut&ldquo; in dem Vers ist nicht physisches Blut. Der physische K&ouml;rper ist voller Blut und solange Blut im K&ouml;rper vorhanden ist, ist der K&ouml;rper lebendig. Wenn der K&ouml;rper sein Blut vergie&szlig;t, stirbt der K&ouml;rper. Dadurch wird bekannt, dass die Essenz des K&ouml;rpers Blut ist. W&auml;hrend sie a&szlig;en, nahm Jesus zun&auml;chst das Brot, reichte es seinen J&uuml;ngern und sagte: <strong>&bdquo;Nimm und iss; das ist mein K&ouml;rper." </strong>Hier verglich er Brot mit seinem K&ouml;rper. Dann nahm er Traubensaft in einen Becher, reichte ihn ihnen und sagte: <strong>&bdquo;Das ist mein Blut des Bundes.&ldquo; </strong>Er sagte &uuml;ber das Brot: &bdquo;Das ist mein K&ouml;rper. ISS das." Jesus verglich das Brot mit seinem K&ouml;rper und forderte sie auf, es zu essen. Wenn du Brot isst, dann isst du den Leib Jesu. Die Basis und das Wesen des K&ouml;rpers ist sein Blut.

  Wenn man die g&ouml;ttliche Weisheit mit dem Blut des Bundes vergleicht, kann der Leib des Brotes mit der Heiligen Schrift und der Weisheit Gottes verglichen werden. Auf diese Weise, <strong>Der K&ouml;rper enth&auml;lt Blut und die Schrift enth&auml;lt Weisheit. Den K&ouml;rper zu essen bedeutet, die Heilige Schrift zu lesen und sie zu lesen, wird die Essenz ihrer Weisheit offenbaren. Blut zu trinken bedeutet, Weisheit zu verstehen. </strong>Leider konzentrieren sich die Menschen oft nur auf das Brot und die Traube Saft, den Jesus gab, ohne zu erkennen, dass das Brot die g&ouml;ttliche Schrift und der Traubensaft ihre Weisheit darstellt. <strong>Jesus verglich die Schrift mit seinem K&ouml;rper (Brot) und die Weisheit darin mit Blut (Traubensaft). Das Vergie&szlig;en des Blutes des Bundes Ist sich auf die Weisheit der Dharmas, die zu dieser Zeit gelehrt wurde. </strong>Viele haben nicht erkannt, dass Jesus die Schrift mit seinem K&ouml;rper und ihre Weisheit mit Blut verglich, was zu der falschen Annahme f&uuml;hrte, dass das am Kreuz vergossene Blut der Vergebung der S&uuml;nden diente.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 52,
verse: `<b>(51)	Das Matthäusevangelium, 28. Kapitel, 18. Vers.</b>`,
meaning: `<b>
(18) Dann kam Jesus zu ihnen und sagte: „Mir ist alle Macht in Paraloka und auf der Erde gegeben.“ </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Auf Telugu bedeutet &bdquo;Loka&ldquo;, Erfahrungen zu machen. In Loka erleben wir sowohl Strapazen als auch Freuden. Die Erfahrung des Vergn&uuml;gens wird Svarga Loka (Himmel) genannt, w&auml;hrend die Erfahrung der Not Naraka Loka (H&ouml;lle) genannt wird. Loka ist kein eigenst&auml;ndiges Land oder besonderer Ort; Vielmehr ist es die Summe aller Erfahrungen. Je nachdem, wie man Freude und Leid erlebt, wird Loka in Himmel und H&ouml;lle geteilt. Alle Erfahrungen von Himmel und H&ouml;lle finden auf der Erde statt und sind keine getrennten physischen Orte. Abh&auml;ngig von den Erfahrungen k&ouml;nnen wir sie also als Himmel oder H&ouml;lle bezeichnen, aber in Wirklichkeit gibt es sowohl Himmel als auch H&ouml;lle auf der Erde.

  Es gibt zwei Arten von Lokas auf der Erde &ndash; Ihaloka und Paraloka. <strong>Ihaloka beinhaltet Erfahrungen, w&auml;hrend Paraloka keine Erfahrungen hat. </strong>Sowohl Ihaloka als auch Paraloka existieren auf der Erde. &bdquo;Para&ldquo; bedeutet &bdquo;verschieden&ldquo; oder &bdquo;getrennt&ldquo;. Paraloka bedeutet etwas anderes als Erfahrungen. Mit anderen Worten: Paraloka hat keine Erfahrung und unterscheidet sich vom Loka. In Telugu bezeichnet &bdquo;Manishi&ldquo; jemanden, der Erfahrungen durch Manas (Geist) sammelt. Daher geh&ouml;ren alle Menschen auf der Erde zu Ihaloka. Kein Mensch hat Paraloka gesehen. Ein k&ouml;rpertragender Mann ist nie ohne Erfahrungen. Daher kann man sagen, dass jeder Mensch der Loka angeh&ouml;rt und in Ihaloka lebt. Man k&ouml;nnte sagen, dass derjenige ohne Erfahrung in Paraloka ist. <strong>&bdquo;Alle Autorit&auml;t in Paraloka und auf der Erde wurde mir gegeben&ldquo;, sagte er </strong>der obige Vers.

  Wenn Jesus ein gew&ouml;hnlicher Mann w&auml;re, w&auml;re er in Ihaloka und w&uuml;rde Paraloka nicht kennen. Obwohl er wie ein gew&ouml;hnlicher Mensch aussah, hatte sein K&ouml;rper nur Atma und kein Jeevatma. Atma lebte im K&ouml;rper Jesu und gab vor, ein Jeevatma zu sein. Sowohl Atma als auch Jeevatma existieren in allen Menschen, wobei Atma alle K&ouml;rperfunktionen ausf&uuml;hrt und Jeevatma bei der Arbeit Freude und Leid erlebt. Auf diese Weise kann man sagen, dass Jeevatma im K&ouml;rper eines Menschen zeitweise im Himmel und zu anderen Zeiten in der H&ouml;lle ist. Aber wenn Gott als Mensch kommt, hat sein K&ouml;rper kein Jeevatma. Obwohl Atma im K&ouml;rper des Sohnes Gottes wirkt, erf&auml;hrt er nichts. Deshalb soll er in Paraloka sein. Da Jesus kein gew&ouml;hnlicher Mensch war, hat er Autorit&auml;t auf der Erde (Ihaloka) und Paraloka. Der Heilige Geist, Paramatma, gab Atma (Jesus) vollst&auml;ndige Autorit&auml;t. Jesus, der Atma ist, ist auch das Oberhaupt der g&ouml;ttlichen Weisheit. Gottes Weisheit ist jetzt jedem au&szlig;er Gott bekannt. Daher ist das Thema Seelen den Menschen unbekannt. Jesus lehrte die Weisheit der drei Seelen und wies seine J&uuml;nger, die die Weisheit der Seelen kannten, an, allen Menschen Atmas Weisheit zu lehren.</div></div>
</span>
`
},
{
chapterName: "Das Matthäusevangelium",
chapterNumber: 2,
pageNumber: 53,
verse: ` <b>(52)	Das Matthäusevangelium, 28. Kapitel, 19. und 20. Vers.</b>`,
meaning: ` <b>
(19) Darum geht hin und macht alle Völker zu Jüngern und tauft sie auf den Namen des Vaters und des Sohnes und des Heiligen Geistes.
<br><br>
(20) Lehre sie, alles zu befolgen, was ich dir geboten habe. Und sicherlich bin ich immer bei dir, bis zum Ende des Zeitalters (Yuga).</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Das Matth&auml;usevangelium besteht aus 28 Kapiteln. Die letzten Verse, 19. und 20. von Kapitel 28, enthalten das Geheimnis der gesamten spirituellen Erziehung. Die in Vers 19 erw&auml;hnten Informationen &uuml;ber die drei Seelen sind die wichtigste Weisheit der Heiligen Schrift. In diesem Vers wird das Wort &bdquo;Vater&ldquo; vor dem Wort &bdquo;Sohn&ldquo; verwendet, was sorgf&auml;ltige &Uuml;berlegung erfordert, um es zu verstehen. Wer dar&uuml;ber nachdenkt, wird wissen, dass es sich bei der Reihenfolge um den Sohn, den Vater und den Heiligen Geist handelt. Zur weiteren Erl&auml;uterung: <strong>Man muss verstehen, dass der Sohn Jeevatma, der Vater Atma und der Heilige Geist Paramatma ist. </strong>Au&szlig;er diesen drei gibt es keine anderen Seelen auf der Welt. Nach dem Thraitha-Theorem sind diese drei Seelen Jeevatma, Atma und Paramatma.

  Taufe bedeutet Upadesa. In Telugu bedeutet &bdquo;Upa&ldquo; (sub) angrenzend. Upadesa bedeutet ein benachbartes oder angrenzendes Land. Genauer gesagt bedeutet es &bdquo;das Land, in dem Sie sich gerade befinden, zu verlassen und die Erlaubnis einzuholen, in das angrenzende oder benachbarte Land zu reisen.&ldquo; Ein Beamter muss zun&auml;chst die Erlaubnis erteilen, in das Nachbarland zu reisen. Dieser Beamte kann als Guru bezeichnet werden. Guru bedeutet derjenige, der das Oberhaupt des Nachbarlandes oder Paraloka ist. Egal wie viele Gurus es auf der Erde gibt, Gott, das Oberhaupt von Paraloka, ist der wahre Guru. Gott, der Herrscher von Paraloka, ist der wahre Guru, der uns die wahre Taufe gibt, wenn er als Mensch auf die Erde kommt. Obwohl es viele Gurus auf der Erde gibt, sind sie alle nur dem Namen nach Gurus. Die Taufe, die sie geben, erfolgt nur im Namen.

  Wenn Gott, der wahre Guru, nicht als Mensch auf der Erde ist, m&uuml;ssen Prediger gem&auml;&szlig; der Weisheitstradition einige J&uuml;nger machen und ihnen Upadesa geben. Upadesa ist wie eine Erlaubnis f&uuml;r das Nachbarland. Im Upadesa-Prozess unterweist der Guru seine Sch&uuml;ler mit Wasser, einem Mantra, einem Wort oder Vibhuti (heiliger Asche). Upadesa ist die Erlaubnis nach Paraloka, und das Wort oder Wasser ist wie eine Eintrittskarte f&uuml;r den Eintritt nach Paraloka. Die meisten Gurus verwenden im Upadesa-Prozess ein Mantra oder ein Wort. Ebenso sagte Jesus zu seinen J&uuml;ngern: <strong>&bdquo;Geht und macht Menschen aller Nationen zu J&uuml;ngern.&ldquo; </strong>Er sagte seinen J&uuml;ngern auch, sie sollten sie taufen, wenn sie J&uuml;nger w&uuml;rden. Als er den J&uuml;ngern die Erlaubnis f&uuml;r den Upadesa-Prozess gab, sagte er: &bdquo;Taufe sie im Namen der drei Seelen &ndash; des Vaters, des Sohnes und des Heiligen Geistes.&ldquo; Der Weisheitstradition zufolge sollte die Taufe auf diese Weise erfolgen. Als John, ein Guru, die Taufe gab, vollzog er die Taufe mit Wasser. Nach dieser Methode erhielt Jesus auch Upadesa von Johannes. Zu dieser Zeit sah Johannes Jesus und sprach.

  Das sagt das Matth&auml;usevangelium in den Versen 3:14 und 3:15. <strong>Als Jesus zu ihm kam, versuchte Johannes ihn abzuschrecken, indem er sagte: &bdquo;Ich muss von dir getauft werden, und kommst du zu mir?&ldquo; Jesus antwortete: &bdquo;So soll es nun sein; Es ist f&uuml;r uns angemessen, dies zu tun, um alle Gerechtigkeit (Weisheit) zu erf&uuml;llen.&ldquo; </strong>Sogar Jesus sagte, dass man gem&auml;&szlig; der Weisheitstradition die Taufe vom Guru empfangen muss. Das Gleiche habe ich auch &uuml;ber die Taufe gesagt. Jesus erm&auml;chtigte seine J&uuml;nger zur Taufe und sagte: &bdquo;Alle Menschen m&uuml;ssen getauft werden, nicht nur eine Kaste oder eine Gruppe.&ldquo; Er forderte sie auch auf, ein Einreisedokument des Vaters, des Sohnes und des Heiligen Geistes vorzulegen. Jesus forderte seine J&uuml;nger auf, die Arbeit zu tun, weil Gott nicht immer als Mensch auf der Erde sein konnte, um Upadesa zu geben. Zus&auml;tzlich zur Taufe forderte Jesus seine J&uuml;nger auch auf, sie zu lehren, alles zu befolgen, was er seinen J&uuml;ngern sagte.

  Jesus sagte auch: &bdquo;Ich bin immer bei euch&ldquo;, ohne bei den J&uuml;ngern Zweifel zu wecken, dass sie keine Gurus waren. Er sagte insbesondere: <strong>&bdquo;Ich bin immer bei dir, sogar bis zum Ende des Yuga.&ldquo; </strong>Diejenigen, die sich mit Yugas auskennen, stellen m&ouml;glicherweise eine Frage, wenn sie h&ouml;ren, was Jesus gesagt hat. Yuga (&Auml;ra) endet nicht und ein weiteres Yuga beginnt am Ende des aktuellen Yuga. Warum hat Jesus in diesem Fall gesagt, dass die Yugas ein Ende haben, wenn es doch kein Ende f&uuml;r sie gibt? Die Antwort lautet wie folgt. Die Zeit ist ewig und dauert ewig, genau wie Gott (Paramatma). Zeit ist als Spitzname f&uuml;r Gott auch ewig. Da die Zeit Paramatma ist, werden die drei Seelen nach der Zeit benannt. Paramatma ist in drei Seelen unterteilt &ndash; Jeevatma, Atma und Paramatma. Der Zeit werden die Namen Vergangenheit, Zukunft und Gegenwart gegeben, sodass diese drei Namen in der Zeit erscheinen. Der Name &bdquo;Yoga&ldquo;, der notwendig ist, um Gott zu erreichen, wird der Zeit gegeben. Auf diese Weise werden die vier Namen der Zeit gegeben und das Wort &bdquo;Yogam&ldquo; wird am Ende aller vier Namen angeh&auml;ngt, um anzuzeigen, dass &bdquo;Yogam&ldquo; notwendig ist, um Gott zu erreichen.

  Die Zeit ist in vier Teile unterteilt, die jeweils Kruta, Traita, Dvapara und Kali genannt werden. Das Wort &bdquo;Yogam&ldquo; wird am Ende jedes Namens hinzugef&uuml;gt, wodurch die Namen Kruta Yuga, Traita Yuga, Dvapara Yuga und Kali Yuga entstehen. <strong>Kruta bedeutet derjenige (Atma), der es tut. Traita bedeutet drei. Dvapara bedeutet der Eine (Paramatma), der von den beiden getrennt ist. Kali bedeutet derjenige (Jeevatma), der zerst&ouml;rt wird. </strong>Die erste g&ouml;ttliche Schrift bezeichnet diese drei Seelen als <strong>Kshara, Akshara und Purushottama</strong>. In Telugu bedeutet Kshara zerst&ouml;rbarer Jeevatma, Akshara bedeutet unzerst&ouml;rbarer Atma und Purushottama bedeutet Paramatma, der sowohl Jeevatma als auch Atma &uuml;berlegen ist. In der letzten g&ouml;ttlichen Schrift, Vers 50:21, werden diese drei als bezeichnet <strong>der Passagier, der Fahrer und der Zeuge</strong>, und in der zweiten g&ouml;ttlichen Schrift, <strong>der Sohn, der Vater und der Heilige Geist. Yogam </strong>ist notwendig, um diese drei M&auml;nner (Purusha) zu verstehen, weshalb das Wort &bdquo;Yogam&ldquo; am Ende der vier Yuga-Namen hinzugef&uuml;gt wird. Durch Yoga kann Jeevatma sich selbst erkennen; daher wird es Kali Yogam genannt. Durch Yoga wird Atma erkannt; daher wird es Kruta Yogam genannt. Durch Yoga kann man Paramatma erreichen; Daher wird es Traita Yogam und Dvapara Yogam genannt. Diejenigen, die reich an g&ouml;ttlicher Weisheit sind, gaben diese Namen. Mit der Zeit wurde aus Traita Treta und aus dem Wort Yogam Yuga. Aus diesem Grund hei&szlig;t es in dem Vers: <strong>&bdquo;Ende des Yuga&ldquo; </strong>wird anstelle von verwendet <strong>&bdquo;Ende des Yoga.&ldquo; </strong>Wenn das richtige Wort verwendet wird, kann Jesu Aussage &bdquo;Ich werde immer bei dir sein bis zum Ende des Yogas&ldquo; als &bdquo;Ich bin immer bei dir bis zum Ende des Yogas&ldquo; interpretiert werden. Wenn Jeevatma das Ende des Yogam erreicht, vereint er sich mit Gott. Wenn Gott und Jeeva getrennt sind, ist Yogam notwendig, um sich mit Gott zu vereinen, und Gott wird mit Jeevatma pr&auml;sent sein. <strong>Sobald Yogam abgeschlossen ist, wird Jeevatma mit Gott verschmelzen</strong>, und es wird nicht mehr n&ouml;tig sein, dass Gott bei Jeevatma anwesend ist. Das ist der Sinn hinter der Aussage <strong>&bdquo;Bis zum Ende des Yuga.</strong></div></div>
</span>
`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 54,
verse: ` <b>(1)	Das Markusevangelium, 2. Kapitel, 19. und 20. Vers.</b>`,
meaning: `<b>
(19) Wie können die Gäste des Bräutigams fasten, während er bei ihnen ist? Sie können es nicht, solange sie ihn bei sich haben.
<br><br>
(20) Aber es wird die Zeit kommen, da ihnen der Bräutigam genommen wird, und an jenem Tag werden sie fasten.</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Einige Leute kamen zu Jesus und fragten: „Warum fasten die Jünger des Johannes und die Jünger der Pharisäer, aber nicht deine?“ Jesus antwortete mit den folgenden Versen. In diesem Zusammenhang bezieht sich Fasten auf den Verzicht auf Nahrung, eine weltliche Bedeutung. In Telugu ist das Wort für den Bräutigam „Pellikoduku“, was übersetzt „Sohn der Ehe“ bedeutet. In Telugu hat der Ausdruck „Sohn der Ehe“ eine besondere Bedeutung, da das Wort „Ehe“ (oder „Pelli“ in Telugu) symbolisiert Gott im spirituellen Sinne. Daher bezieht sich der „Sohn der Ehe“ auf den Sohn Gottes. Wenn Jesus, der Sohn Gottes, bei seinen Anhängern ist, werden sie Freude erleben und nicht fasten. Wenn ihnen jedoch der Bräutigam (der Sohn Gottes) weggenommen wird, werden diejenigen, die bei ihm waren, vor Trauer fasten, weil er von ihnen abweicht. Ebenso werden die Jünger Jesu nicht fasten, solange er bei ihnen ist. Wenn Jesus abwesend ist, werden sie voller Trauer fasten. Der Ausdruck „Bräutigam“ (der Sohn der Ehe) sollte so verstanden werden, dass er sich auf den Sohn Gottes bezieht.</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 55,
verse: `<b>(2) Das Markusevangelium, 4. Kapitel, 38. und 39. Vers.</b>`,
meaning: ` <b>
(38) Jesus war im Heck und schlief auf einem Kissen. Die Jünger weckten ihn und sagte zu ihm: „Lehrer, ist es dir egal, ob wir ertrinken?“
<br><br>
(39) Er stand auf, tadelte den Wind und sagte zu den Wellen: „Ruhe! Sei ruhig! “ Dann ließ der Wind nach und es war völlig ruhig. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Als Jesus und seine Jünger in einem kleinen Boot das Meer überquerten, gerieten sie in einen Sturm und das Boot begann durch die Wellen Wasser zu nehmen. Die Jünger hatten große Angst und fürchteten, sie könnten ertrinken. Sie weckten Jesus und informierten ihn über die gefährliche Situation. Jesus stand auf, tadelte den Wind und befahl den Wellen, still zu sein. Der Wind hörte auf und eine Stille legte sich auf das Meer. Die Jünger waren erstaunt und fragten einander: „Es ist ein großes Wunder, und wie ist es passiert?“ Sie erkannten die Macht Jesu, verstanden aber den Grund dafür nicht ganz. In diesem Vorfall steckt bemerkenswerte Weisheit.

  Jesus ist kein gewöhnlicher Mann; Es muss betont werden, dass Er Gott ist, der wie ein gewöhnlicher Mensch aussah und sich verhielt. Wenn Gott, der Heilige Geist, in menschlicher Form erscheint, Niemand kann Ihn erkennen. Die Geburt Gottes ist ein Geheimnis, wenn Er ein Mensch ist, und niemand kann Ihn jemals durch weltliches Wissen kennen. Es ist vielleicht nur möglich, ihn durch Weisheit zu kennen. Es gibt zwei Möglichkeiten, Gottes Menschwerdung auf der Grundlage von Weisheit zu erkennen: 1) Man kann wissen, dass es Gottes Menschwerdung gibt, wo immer Gottes Dharmas, die niemand erklärt hat, wissenschaftlich offenbart werden. 2) Man kann sagen, dass Paramatma überall dort, wo Prakruti regiert wird, in menschlicher Form vorliegt. Ohne diese beiden Methoden kann niemand die Menschwerdung Gottes erkennen.

  Devatas verneigten sich im Traita Yuga vor Ravana Brahma. Als Er die neun Planeten bestellte, wurde bekannt, dass Er kein gewöhnlicher Mensch war. Ravana Brahma lehrte göttliche Dharmas, die niemand kannte, und ließ die Menschen sie praktizieren. So wurde bekannt, dass Ravana Brahma die Inkarnation Gottes ist. Ebenso wurde bekannt, dass Krishna im Dvapara Yuga die Inkarnation Gottes war, als er Sun befahl und Dharmas in der Bhagavad-Gita lehrte. Jesus, der vor 2.000 Jahren als Mensch kam, wurde auf zwei Arten als Gott anerkannt: indem er das Meer befahl und göttliche Dharmas lehrte. Der Sturm während der Seereise schien dazu zu dienen, den Menschen bewusst zu machen, wer Jesus war. Auch wenn Gottes Menschwerdung geheim ist, hat Gott diese Gelegenheit gegeben, es zu erfahren.
</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 56,
verse: `<b>(3)	Das Markusevangelium, 5. Kapitel, 38., 39., 40., 41., 42. und 43. Vers.</b>`,
meaning: `<b>
(38) Als sie zum Haus des Synagogenvorstehers kamen, sah Jesus einen Tumult, bei dem die Menschen laut weinten und jammerten.
<br><br>
(39) Er ging hinein und sagte zu ihnen: „Warum dieser Aufruhr und dieses Wehklagen? Das Kind ist nicht tot, sondern schläft.“
<br><br>
(40) Aber sie lachten über ihn. Nachdem er sie alle hinausgeworfen hatte, nahm er den Vater des Kindes mit und die Mutter und die Jünger, die bei ihm waren, gingen hinein, wo das Kind war.
<br><br>
(41) Er nahm sie bei der Hand und sagte zu ihr: „Talitha koum!“ (was bedeutet „Kleines Mädchen, ich sage dir, steh auf!“).
<br><br>
(42) Sofort stand das Mädchen auf und begann herumzulaufen (sie war zwölf Jahre alt). Darüber waren sie völlig erstaunt.
<br><br>
(43) Er befahl strikt, niemandem etwas davon zu erzählen und forderte sie auf, ihr etwas zu essen zu geben.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Es ist eine große Überraschung, wenn ein Mensch wieder zum Leben erwacht, nachdem er für tot erklärt wurde. Jesus hat im Laufe seines Lebens mehrere Menschen von den Toten auferweckt. Er hat nicht nur andere auferweckt, sondern auch selbst ist von den Toten auferstanden. Wenn wir über dieses Ereignis nachdenken, werden einige unbekannte Geheimnisse aufgedeckt. Es gibt vier Arten von Todesfällen: rechtzeitiger Tod (natürlicher Tod), vorzeitiger Tod, vorübergehender Tod und endgültiger Tod. Sobald ein Mensch den endgültigen Tod erlebt, wird er nicht wiedergeboren; Stattdessen erlangen sie Befreiung oder Moksham. Der natürliche Tod ist die häufigste Todesform, bei der ein Mensch seinen jetzigen Körper verlässt und zur nächsten Geburt übergeht. Es gibt keine andere Möglichkeit, als im natürlichen Tod zur nächsten Geburt zu gehen. Bei einem vorzeitigen Tod stirbt ein Mensch nicht vollständig, sondern verliert die Hälfte seines Körpers und lebt mit der verbleibenden Hälfte weiter. Auch wenn es unglaublich erscheinen mag, geschieht Folgendes. Der menschliche Körper besteht aus zwei Teilen. Der menschliche Körper und die Körper aller Lebewesen bestehen sowohl aus physischen (sichtbaren) als auch nichtphysischen (feinstofflichen) Teilen.

  Im Falle des menschlichen Körpers besteht der physische Körper aus zehn Teilen und der feinstoffliche Körper aus fünfzehn Teilen. Im Falle eines vorzeitigen Todes hinterlässt ein Mensch seinen physischen Körper aus zehn Teilen und existiert weiterhin mit seinem feinstofflichen Körper aus fünfzehn Teilen. Infolgedessen kann jemand, der einen vorzeitigen Tod erlebt hat, als „halbtot“ betrachtet werden. Wenn der Rest des feinstofflichen Körpers schließlich stirbt, führt dies zum natürlichen Tod und die Person erlebt die nächste Geburt. Während des vorzeitigen Todes ist die Person nicht sichtbar, aber sie existiert mit ihrem feinstofflichen Körper weiter, bis sie den natürlichen Tod erlebt.

  Derzeit weiß niemand, was bei einem vorübergehenden Tod passiert. Bei einem vorübergehenden Tod hören alle Körperfunktionen auf und das Jeevatma verbleibt im Körper, befindet sich jedoch im Schlafzustand. Beim vorübergehenden Tod scheint die Person tot zu sein, aber das Jeevatma bleibt im Körper. Dies hat zu Vorfällen geführt, bei denen Menschen, die einen vorübergehenden Tod erlebten, fälschlicherweise für tot erklärt und begraben wurden, obwohl sie noch am Leben waren. Niemand kann erkennen, dass eine Person, die einen vorübergehenden Tod erlitten hat, nicht tatsächlich tot ist. Infolgedessen gab es zahlreiche Fälle, in denen Menschen lebendig begraben wurden.

<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
Die Geschichte von Abdul Aziz in Jammu und Kaschmir
</b></ion-col></ion-row>
  Am 7. Dezember 2009 wurde um 13:30 Uhr eine Geschichte auf dem Sender TV9 ausgestrahlt. Abdul Aziz, ein 60-jähriger Mann, war eine Woche zuvor, am 30. November 2009, in Rajouri, einem Dorf in Jammu und Kaschmir, verstorben. Da er Muslim war, wurde er nach islamischer Tradition begraben.

  Drei Tage nach seiner Beerdigung ging bei der Polizei eine Beschwerde ein, in der behauptet wurde, dass Abdul Aziz nicht eines natürlichen Todes gestorben sei und dass möglicherweise ein Verbrechen im Spiel gewesen sei. Die Polizei nahm den Fall umgehend auf, begab sich zum Friedhof und exhumierte die Leiche von Abdul Aziz im Beisein seiner Angehörigen. Anschließend wurde sein Leichnam zur Obduktion in ein staatliches Krankenhaus gebracht.

  Bei der Autopsie schlug der Arzt zunächst mit einem Messer auf den Kopf, um den Schädel zu untersuchen, dabei wurde der Kopf verletzt. Zum Erstaunen aller Anwesenden wachte der bis dahin totgeglaubte Abdul Aziz auf und erkundigte sich nach der Lage. Der ungläubige Arzt, der immer noch mit der unerwarteten Wendung der Ereignisse zurechtkam, setzte sich und fragte: „Wir führen eine Autopsie durch.“ Abdul Aziz antwortete ruhig: „Ich lebe.“ Der Arzt informierte sofort die Angehörigen von Abdul Aziz über den wundersamen Vorfall und sie kamen, um ihn nach Hause zu bringen.

  Drei Tage zuvor hatte derselbe Arzt Abdul Aziz fünfzehn Minuten lang untersucht und seinen Tod bestätigt. Der Arzt erkannte die Außergewöhnlichkeit dieses Ereignisses und beschrieb es als Wunder. Die Menschen im Dorf Rajouri waren gleichermaßen erstaunt darüber, dass Abdul Aziz, den sie mit eigenen Händen begraben hatten, drei Tage später wieder zum Leben erweckt wurde. Mittlerweile sind seit dem Vorfall sechs Jahre und sieben Monate vergangen. Alle Fernsehsender sendeten diese Nachricht am selben Tag. Angesichts der Tatsache, dass sich dieser Vorfall im Beisein von Ärzten ereignete, bleibt er unbestreitbar und jenseits bloßen Aberglaubens.

  <ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
  Ein Vorfall im Bezirk Visakhapatnam
  </b></ion-col></ion-row>
  Srungavarapu Kota liegt auf dem Weg zum Araku-Tal in Visakhapatnam. Es gibt ein Dorf namens Saarepuram, 12 km von Srungavarapu Kota entfernt. In diesem Dorf lebte eine 67-jährige Frau namens Samudramma, die seit zehn Jahren an Bluthochdruck und Diabetes litt. Sie wurde von Dr. Dharmalingachari, einem leitenden Arzt in Srungavarapu Kota, medizinisch behandelt. Dr. Dharmalingachari war ein bekannter 60-jähriger Veteran mit einem Abschluss in M.B.B.S.

  Vor sechs Jahren wurde Samudramma eines Abends um 18 Uhr zu Dr. Dharmalingachari gebracht, nachdem die Ärzte eines staatlichen Krankenhauses ihre für tot erklärt hatten. Als der Arzt sie untersuchte, konnte er keinen Puls feststellen. Er erklärte sie für tot und erklärte, dass sie keine medizinische Behandlung benötige, da sie weder atmete noch pulsierte. Ihre Leiche wurde in ihr 12 km entferntes Dorf zurückgebracht, um am nächsten Tag begraben zu werden, da es bereits Nacht war. Aufgrund des starken Regens, der zwei Tage anhielt, wurde Samudrammas Leiche jedoch drei Tage lang auf der Veranda aufbewahrt. Zur Überraschung aller stand sie am vierten Morgen auf und rief nach ihren Verwandten. Sie kontaktierten sofort Dr. Dharmalingachari und brachten sie nach 15 Tagen zu ihm. Der Arzt fragte sie dann, ob sie Yamas Diener oder Yamaloka gesehen habe, da sie seit drei Tagen für tot erklärt worden sei. Sie sagte, sie habe nichts gesehen.

  Dieser Vorfall ereignete sich vor sechs Jahren im Beisein eines Arztes und kann daher weder geleugnet noch als abergläubisch abgetan werden.
  <ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
  Survivor from Pyre (Übersetzt aus einer Telugu-Zeitung) 10. Juli 2012, Sakshi News

  </b></ion-col></ion-row>
  <b>Chennai:</b> Am Dienstag bestätigten Ärzte den Tod des 50-jährigen Muttuswamy aus Krishurayapuram im Bezirk Karur in Tamil Nadu. Sie rieten seinen Verwandten, mit den Bestattungsriten fortzufahren. Da sie glaubten, dass Muttuswamy dem Alter und einer Krankheit erlegen war, versammelten sich die Verwandten auf dem Friedhof, um den Scheiterhaufen durchzuführen.
  Als sie gerade das Feuer anzünden wollten, näherte sich Muttuswamys Schwester Paapatti der Leiche. Voller Trauer fiel sie auf die Leiche und schrie: „Bruder, wirst du mich verlassen?“ In diesem ergreifenden Moment bewegten sich Muttuswamys Beine und Arme und es gab ein leichtes Stöhnen. Die weinenden Angehörigen waren schockiert und riefen: „Muttuswamy...Muttuswamy!“ Muttuswamy erwachte vom Scheiterhaufen, als wäre er gerade erst aus dem Schlaf aufgewacht, und fragte seine Verwandten, was passiert sei. Sie alle umarmten Muttuswamy voller Freude und brachten ihn zurück ins Krankenhaus. Bemerkenswerterweise hatte Muttuswamys Tochter erst am Tag zuvor geheiratet.

  <b>Fahrlässigkeit der Ärzte:</b> Angehörige kritisierten die Ärzte für ihre Nachlässigkeit bei der Behandlung von Muttuswamy, der vor zehn Tagen in ein örtliches Krankenhaus eingeliefert worden war krank werden. Sie verurteilten die Ärzte für den Vorfall und die Nachricht verbreitete sich schnell im gesamten Bezirk Karur. Dieser Vorfall löste eine breite Debatte aus und wurde als weiteres Beispiel für einen vorübergehenden Tod angesehen.
  <img src="assets/img/temp_death.png"/>
  Wenn jemand einen vorübergehenden Tod erleidet, kann er in diesem Zustand bis zu einem Jahr oder länger überleben. Die Wiederbelebung kann entweder spontan oder durch Klopfen oder Aufwecken erfolgen. In vielen Fällen erwachen Personen, die morgens einen vorübergehenden Tod erleiden, abends, während andere nach einer Woche oder länger das Bewusstsein wiedererlangen. Kürzlich erwachte ein Mann namens Muttuswamy in Tamil Nadu wieder zum Leben, nachdem er auf einem Scheiterhaufen gelegen hatte. In ähnlicher Weise ließ Jesus ein Mädchen wieder auferstehen, das einen vorübergehenden Tod erlitten hatte, und erklärte, dass sie nicht wirklich tot sei. Es gibt auch einen historischen Bericht über die Wiederbelebung Jesu. Es ist wichtig anzumerken, dass alle diese Vorfälle auf einen vorübergehenden Tod zurückzuführen waren. Unsere Schrift: <b>„Das Geheimnis des Todes„“</b> befasst sich mit den vier Arten des Todes und ihrer Realität. Durch die Lektüre dieser Schriftstelle erhalten Sie ein umfassendes Verständnis der verschiedenen Arten des Todes.
</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 57,
verse: `<b>(4)	Das Markusevangelium, 7. Kapitel, 15., 16., 17., 18., 19., 20., 21., 22. und 23. Vers.</b><`,
meaning: `<b>
(15) Nichts außerhalb des Menschen kann ihn verunreinigen, indem er in ihn hineingeht.
<br><br>
(16) Vielmehr ist es das, was aus einer Person kommt, die sie verunreinigt.
<br><br>
(17) Nachdem er die Menge verlassen und das Haus betreten hatte, fragten ihn seine Jünger nach diesem Gleichnis.
<br><br>
(18) „Bist du so langweilig?“ er hat gefragt. „Sehen Sie nicht, dass nichts in einen hineinkommt?“ Kann eine Person von außen sie verunreinigen?
<br><br>
(19) Denn es geht nicht in ihr Herz, sondern in ihren Magen und dann wieder heraus der Körper.
<br><br>
(20) Er fuhr fort: „Was aus einem Menschen herauskommt, ist das, was ihn verunreinigt.“
<br><br>
(21) Denn die bösen Gedanken kommen von innen, aus dem Herzen eines Menschen – sexuelle Unmoral, Diebstahl, Mord,
<br><br>
(22) Ehebruch, Gier, Bosheit, Betrug, Unzucht, Neid, Verleumdung, Hochmut und Torheit.
<br><br>
(23) All diese Übel kommen von innen und verunreinigen den Menschen. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der Mensch wird mit sechs schlechten und sechs guten Gunas geboren. Gunas wachsen auch mit dem Individuum, beeinflussen das im Kopf befindliche Buddhi und veranlassen unter seinem Kommando äußere Handlungen. Buddhi weist Karmendriyas (Handlungsorgane) an, Handlungen außerhalb des Körpers durchzuführen und dabei im Einklang mit Gunas zu agieren. Da Buddhi im Einklang mit den Gunas arbeitet, beeinflussen die negativen Gunas Buddhi, der dann die Handlungen der Gunas steuert, und die äußeren Sinne reagieren entsprechend dem Befehl Buddhis. Diese Gunas manifestieren sich als unerwünschte Eigenschaften wie Gier (Kaama), Wut (Krodha), Geiz (Lobha), Leidenschaft (Moha), Arroganz (Madam) und Eifersucht (Matsara). Die Gunas wirken zunächst auf die Buddhi ein und regieren anschließend von dort aus den Körper. Alle von Menschen begangenen Fehler haben ihre Wurzeln im Einfluss von Gunas im Körper.

  Von außen aufgenommene Nahrung trägt zur Gesundheit des Körpers bei, beeinträchtigt jedoch nicht die Buddhi. Solche Lebensmittel werden in Nährstoffe umgewandelt und fördern so das körperliche Wohlbefinden. Die Nahrung, die Menschen zu sich nehmen, hat keinen direkten Einfluss auf die Buddhi; Es gelangt in den Körper und unterstützt die allgemeine Gesundheit. Wenn Nahrung dem Körper zugute kommt, stärkt sie die Gesundheit und erhält sie. Daher führt die von außen in den Körper gelangende Nahrung beim Menschen nicht zu unerwünschtem Verhalten. Es ist die Wirkung der Gunas, die aus dem Körperinneren kommt und zu negativem Verhalten führen kann. Daher kann es akzeptabel sein, von den Ernährungsregeln abzuweichen, aber die Kontrolle über die Gunas ist von entscheidender Bedeutung.
</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 58,
verse: ` <b>(5)	Das Markusevangelium, 3. Kapitel, 35. Vers.</b>`,
meaning: ` <b>
(35) Wer den Willen Gottes tut, ist mein Bruder, meine Schwester und meine Mutter.</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wenn wir uns fragen, was Gottes Wille ist, können wir verstehen, dass seine Gebote (Dharmas) seinen Willen darstellen. Indem wir seine Gebote befolgen, richten wir uns nach Gottes Willen. Wenn wir umgekehrt nach unseren eigenen Wünschen handeln, ohne seine Gebote zu befolgen, verstoßen wir gegen seine Führung und folgen dem Willen Satans. Wenn Gott als Bhagavan auf der Erde inkarniert, werden diejenigen, die seine Weisheit verstehen, danach handeln, seine Lehren verbreiten und seine Gebote verbreiten, ihm näher kommen. Umgekehrt werden diejenigen, die den Weg Satans wählen, zu Gegnern Gottes. Diejenigen, die Gottes Worte aktiv fördern und sich an seine Gebote halten, gelten als seine Schwestern, Brüder und engsten Anhänger. Unabhängig davon, ob Gott physisch auf der Erde präsent ist oder nicht, ist es wichtig zu erkennen, dass Gnanis (diejenigen, die über Weisheit verfügen) innerhalb seiner Grenzen, die seinen Befehlen folgen, als Gott nahe angesehen werden.</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 59,
verse: ` <b>(6)	Das Markusevangelium, 4. Kapitel, 17. Vers.</b>`,
meaning: `<b>
(17) Da sie aber keine Wurzel haben, bleiben sie nur kurze Zeit bestehen. Wenn es wegen des Wortes zu Schwierigkeiten oder Verfolgung kommt, fallen sie schnell ab.</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In der Gita spricht Lord Krishna von vier Arten von Anhängern: 1) Jene, die in Not anbeten, 2) Jene, die um Reichtum beten, 3) Jene, die daran interessiert sind, etwas über Gott zu erfahren, 4) Jene, die Weisheit (Gnanis) besitzen. Der Herr sagte in der Gita, dass Er Gnanis bevorzugt. In ähnlicher Weise spricht Herr Jesus in der Bibel von vier Arten von Anhängern, aber der Vers, auf den hier Bezug genommen wird, bezieht sich nur auf eine dieser Arten. Manche Menschen sind neugierig auf Gottes Weisheit und versuchen, ihr zu folgen. Satan beginnt, sie auf seine Weise in Versuchung zu führen. Dabei stehen sie vor vielen Problemen. Wenn sie aufgrund ihrer Weisheit auf Schwierigkeiten stoßen, beginnt Satan in ihren Köpfen zu predigen. Satan sagt zu ihnen: „Ihr steht vor Schwierigkeiten, weil ihr Weisheit kennt.“ Sei nicht dumm. Sie können den kommenden Problemen entkommen, indem Sie so tun, als wären Sie auf dem Weg der Weisheit.“ Wer das wahre Wesen der Weisheit nicht versteht, beginnt möglicherweise, entsprechend zu handeln. Wenn die Person nach einiger Zeit aufgrund ihrer Weisheit oder ihres Gurus mit Problemen konfrontiert wird und diese Probleme zu Konflikten mit anderen oder Ängsten vor Verfolgung führen, wird Maya die Situation ausnutzen. Maya erzeugt diese Art von Gedanken im Kopf der Person, und manche beginnen zu denken: „Ich hätte von Anfang an klüger sein sollen.“ Ich bin in diese Situation geraten, weil ich dem Guru auf der Suche nach Weisheit gefolgt bin, obwohl meine nahen Verwandten mich davor gewarnt haben. Warum sollte ich für diese Weisheit leiden? Es ist besser, die Weisheit und den Guru aufzugeben. Der Weisheit blind zu folgen, wird für meine Familie und mich nur zum Ruin führen. Da wir in der Welt sind, müssen wir uns ihren Wegen anpassen. Die Bewohner des Waldes haben unabhängig von ihrem Handeln keine Probleme, aber es wäre dumm von uns im Dorf, gegen die Normen zu verstoßen.“ Solche Gedanken können dazu führen, dass sich Menschen von der Weisheit distanzieren, selbst nachdem sie schon einige Zeit auf dem Weg waren. Daher sagte Jesus, dass selbst diejenigen, die schon seit einiger Zeit auf dem Weg der Weisheit sind, Einwände erheben werden, wenn um der Weisheit willen Mühe und Qual anfallen.

  Wer Gottes Weisheit wirklich schätzt und ihre Bedeutung versteht, wird den Versuchungen Satans nicht zum Opfer fallen. Man kann den Klauen Satans nicht entkommen, wenn man es nicht wertschätzt Weisheit und ihren Guru mehr als ihre Frau, enge Freunde und sogar ihr eigenes Leben, obwohl sie wissen, dass ihnen auf dem Weg der Weisheit Verfolgung oder Tod drohen kann. Sogar die Jünger des Herrn Jesus hatten am Tag seiner Verhaftung Angst vor den Wachen und verließen ihren Guru, um ihr eigenes Leben zu retten. Sie flohen aus Angst vor Unruhen und Verfolgung. Wenn sie auch bereit gewesen wären, an diesem Tag zusammen mit dem Herrn Jesus dem Tod ins Auge zu blicken, wäre ihr Leben gesegnet gewesen. Maya behinderte die Jünger an diesem Tag teilweise. Im Gegensatz zu ihnen sollten wir auf dem Weg der Weisheit allen Schwierigkeiten und Verfolgungen standhalten. Gesegnet ist derjenige, der bereit ist, für den göttlichen Weg zu sterben, anstatt in Angst auf dem Weg der Unwissenheit zu leben. In der Bhagavad-Gita sagte der Herr: <b>„Es ist besser, im Paramatma-Dharma zu sterben, das dein Dharma ist, als auf dem Weg Satans zu fürchten, was nicht dein Dharma ist.“</b>
</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 60,
verse: ` <b>(7)	Das Markusevangelium, 4. Kapitel, 21. und 22. Vers.</b>`,
meaning: `<b>
(21) Er sagte zu ihnen: „Bringt ihr eine Lampe mit, um sie unter eine Schüssel oder ein Bett zu stellen? Stellen Sie es stattdessen nicht auf seinen Ständer?
<br><br>
(22) Denn was verborgen ist, soll enthüllt werden, und was verborgen ist, soll ans Licht gebracht werden. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Heutzutage sagen viele Gurus, dass Schüler ihre Weisheit nicht mit anderen teilen sollten. Sie sagen, dass ihre Weisheit vertraulich ist und nur mit denen geteilt werden sollte, die Upadesa erhalten haben. Wenn ihnen jemand eine Frage stellt, vermeiden sie es, darauf zu antworten. Weisheit sollte jedoch nicht verborgen bleiben. Gott selbst kommt in menschlicher Gestalt und gibt sich die Mühe, Weisheit zu vermitteln. Obwohl wir die wahre Weisheit nicht kennen, sollten wir keine Ausreden dafür finden, die kleine Weisheit, die wir kennen, weiterzugeben. Weisheit ist wie eine Lampe, die die Unwissenheit anderer beseitigt. So wie ein Gegenstand in der Dunkelheit im Licht der Lampe gesehen werden kann, kann ein unbekanntes Ding in der Unwissenheit mit Weisheit verstanden werden. Weisheit ist nötig, um Unwissenheit zu vertreiben, genauso wie eine Lampe nötig ist, um Dunkelheit zu vertreiben. Eine Lampe anzuzünden und sie dann unter eine Schüssel zu stellen, ist dumm. Ebenso ist es unklug, die Weisheit, die man besitzt, nicht weiterzugeben. Sogar Geheimnisse sind dazu da, preisgegeben zu werden. Bhagavan offenbarte die beste göttliche Weisheit der Welt. In diesem Fall kann etwas von geringerem Wert als Weisheit nicht verborgen bleiben. Kein Geheimnis der Welt kann verborgen bleiben; es wird sicherlich rauskommen. Gottes Weisheit ist für jeden notwendig und sollte nicht geheim gehalten werden. Wer es verheimlichen will, kann das nicht.</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 61,
verse: `<b>(8)	Das Markusevangelium, 6. Kapitel, 4. Vers.</b>`,
meaning: `<b>
(4) Jesus sagte zu ihnen: „Ein Prophet ist nicht ohne Ehre außer in seiner eigenen Stadt. bei seinen Verwandten und in seinem eigenen Zuhause.“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In Telugu wird ein Prophet als jemand definiert, der etwas Wichtiges lehrt. Die Weisheit von Paramatma ist das Wichtigste für jeden Menschen. Eine Person, die diese Weisheit vermittelt, wird Prophet genannt. Gewöhnliche Menschen kennen die Weisheit von Paramatma nicht, außer denen, die aus Paramatma stammen. Derjenige, der aus Paramatma kommt und als Mann geboren wird, wird Bhagavan oder Prophet genannt. Der Prophet ist es nicht wird in seinem eigenen Zuhause, unter seinen Verwandten oder in seiner eigenen Stadt geehrt, weil er wie ein gewöhnlicher Mann erscheint. Egal wie großartig jemand ist, es ist natürlich, dass er zu Hause und von den Verwandten unterschätzt wird. Da sie den Propheten seit ihrer Kindheit gesehen haben, verspotten Familienmitglieder und Verwandte ihn möglicherweise und sagen, dass er keine Größe habe und dass nur Narren auf ihn hören würden. Sie können auch behaupten, dass Er nichts anderes weiß als sie wissen. Nicht einmal Gott kann für seine eigenen Familienangehörigen ein Prophet werden. Selbst wenn andere seine Größe erkennen und darüber sprechen, fragen sich seine Verwandten und Familienangehörigen, welche Vorzüglichkeit er besitzt. Sie erkennen seine Bedeutung nicht an und machen sich über ihn lustig, indem sie auf Dinge hinweisen, wie zum Beispiel, dass er in seiner Kindheit das Bett nass machte und seine Unterwäsche beschmutzte. Deshalb wird er in seinem eigenen Zuhause und in seiner Stadt nicht geehrt, obwohl er für andere ein Prophet ist. Nach diesem Grundsatz wurde Herr Jesus von seiner Familie und seinen Verwandten nicht als Prophet anerkannt.</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 62,
verse: `<b>(9)	Das Markusevangelium, 8. Kapitel, 38. Vers.</b>`,
meaning: `<b>
(38) Wenn sich jemand in dieser ehebrecherischen und sündigen Generation meiner und meiner Worte schämt, wird sich der Menschensohn seiner schämen, wenn er in der Herrlichkeit seines Vaters mit den heiligen Engeln kommt.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Manche Menschen lernen Weisheit in der Gesellschaft, entscheiden sich aber dafür, sie geheim zu halten. Sie halten es für einen Fehler, Weisheit zu kennen; Daher tun sie es vertraulich. Möglicherweise schämen sie sich auch, zu einem Guru zu gehen und von ihm Weisheit zu lernen, und behandeln dies daher vertraulich. Manche Menschen sind auf der Suche nach einem Guru, um Schüler zu werden, bevorzugen aber aufgrund ihres Status und Reichtums einen wohlhabenden Guru. Es ist ihnen peinlich, sich an einen armen Guru zu wenden, selbst wenn dieser Guru mehr Weisheit hat. Folglich wählen sie einen wohlhabenden Guru, der möglicherweise nicht viel Weisheit besitzt. Obwohl einige Menschen Weisheit von einem Guru gelernt haben, möchten sie nicht als Schüler dieses Gurus bezeichnet werden. Daher schämen sich viele Menschen und achten sehr darauf, nicht bloßgestellt zu werden.

  Man mag sich für materielle Dinge schämen, aber man sollte sich nicht für die Weisheit von Paramatma schämen. Betrachten wir ein Beispiel. Zwei Personen gehen auf der Straße. Der eine ist gutaussehend, aber arm und unintelligent, während der andere unattraktiv, aber reich und intelligent ist. Sie sind beide nahe Verwandte. Menschen, die sie auf der Straße sehen, werden sie nach ihrem äußeren Erscheinungsbild beurteilen, nicht nach ihrer Intelligenz. Nach einer Weile sieht sie ein Reisender und fragt den gutaussehenden Menschen, wer die zweite Person sei. Der gutaussehende Mensch schämt sich zu sagen, dass der unattraktive Mensch aufgrund seines Aussehens sein enger Verwandter sei. Stattdessen sagt er einfach, dass sie sich kennen. Die unattraktive Person denkt, dass sie aufgrund ihres Aussehens als Bekannter und nicht als naher Verwandter vorgestellt wurde. Später sieht sie ein anderer Reisender und fragt die unattraktive Person, wer die andere Person sei. Da die unattraktive Person intelligent ist, reagiert sie ähnlich, indem sie sagt, sie sei lediglich ein Bekannter. Der gutaussehende Mensch freut sich, als Bekannter und nicht als Verwandter vorgestellt zu werden. Die unattraktive Person denkt: „Ich schäme mich auch, diese dumme Person als meinen nahen Verwandten vorzustellen.“ Die unattraktive Person folgte dem Verhalten der gutaussehenden Person.

  Der zweite Reisende, der die unattraktive Person fragte, hatte viele Jahre lang eine Regel. Seine Regel bestand darin, 10.000 Münzen zu geben, wenn er nahe Verwandte traf. Allerdings, obwohl sie Da sie nahe Verwandte waren, erhielten sie die 10.000 Münzen nicht, weil sie sich nicht als solche vorstellten. Folglich erhielt der erste Arme kein Geld. Da die zweite Person reich ist, ist es ihm egal, ob er das Geld erhalten hat oder nicht. Die erste Person hat Geld verloren, weil sie sich schämte und log. Wenn Sie sich für Weisheit schämen, nur weil andere sie nicht mögen, dann schämt sich die Weisheit auch für Sie. Der Erste hat Geld verloren, weil er sich zuerst schämte und log. Daher würden sie künftig keine Gewinnbefreiung erhalten. Auf dieser Grundlage sagte der Herr: <b>„Wenn sich jemand für mich und meine Worte schämt, schäme ich mich auch für ihn.“</b> Daher sollte man verstehen, dass es in Ordnung ist, sich für materielle Dinge zu schämen, aber man sollte sich nicht für Paramatmas Weisheit schämen.
</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 63,
verse: `<b>(10)	Das Markusevangelium, 9. Kapitel, 7h Vers.</b>`,
meaning: `<b>
(7) Da erschien eine Wolke und bedeckte sie, und eine Stimme kam aus der Wolke: „Das ist mein Sohn, den ich liebe. Hör ihm zu!“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Die meisten Menschen sind sich der Wolken am Himmel nicht bewusst. Während der Regenzeit erzeugen die Wolken Donner und machen einen lauten Lärm. Die Wolken sind lebendig und erfüllen viele Aufgaben, ihre spezifischen Rollen sind jedoch unbekannt. Der Geschichte zufolge hörte die Sonne die göttliche Weisheit, die die Wolken erstmals zu Beginn der Schöpfung offenbarten. Es gibt keine Geheimnisse, die den Wolken auf der Erde unbekannt sind. Gott hinter den Wolken sagte über Jesus:<b> „Das ist mein geliebter Sohn. Hör ihm zu."</b> Deshalb ist es Gottes Wille, dass die Menschen Gottes Weisheit von Jesus hören. Was Gott als Mensch sagt, ist Gottes Weisheit, aber wenn die Menschen nicht zuhören, spricht Gott aus den Wolken. Obwohl Menschen nicht immer respektieren, was andere sagen, schätzen sie, was die Wolken sagen, weshalb Gott aus den Wolken am Himmel sprach.</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 3,
pageNumber: 64,
verse: ` <b>(11)	Das Markusevangelium, 10. Kapitel, 17. und 18. Vers.</b>`,
meaning: ` <b>
(17) Als Jesus sich auf den Weg machte, lief ein Mann auf ihn zu und fiel auf die Knie vor ihm. „Guter Lehrer“, fragte er, „was muss ich tun, um ewiges Leben zu erben?“
<br><br>
(18) „Warum nennst du mich gut?“ Jesus antwortete. „Niemand ist gut – außer Gott allein. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Einige Christen behaupten, dass die Bibel urspr&uuml;nglich auf Hebr&auml;isch geschrieben und dann in viele andere Sprachen &uuml;bersetzt wurde. Daher wurden einige W&ouml;rter nicht richtig &uuml;bersetzt. Beispielsweise wird im ersten Vers der Ausdruck &bdquo;Guter Lehrer&ldquo; und im zweiten Vers &bdquo;Gott ist gut&ldquo; verwendet. Basierend auf dem, was Jesus sagte, <strong>&bdquo;Niemand ist gut &ndash; au&szlig;er Gott allein&ldquo; </strong>Das Wort sollte weder &bdquo;Guter Lehrer&ldquo; noch &bdquo;Guter Gott&ldquo; lauten. Eine Person, die Weisheit eloquent lehrt, kann als guter Lehrer bezeichnet werden, und jemand, der gute Taten vollbringt, kann als guter Mensch bezeichnet werden.

  Es gibt gute Lehrer und gute Menschen auf der Erde. Daher w&uuml;rde es Gott herabw&uuml;rdigen, sie zu vergleichen und zu sagen: <strong>&bdquo;Niemand ist gut &ndash; au&szlig;er Gott allein.&ldquo; </strong>Abgesehen davon gibt es keine &Uuml;bereinstimmung zwischen den Worten &bdquo;guter Lehrer&ldquo; im ersten Satz und &bdquo;guter Mensch&ldquo; im zweiten Satz. Die zweite g&ouml;ttliche Schrift, die Bibel, wurde in mehr Sprachen &uuml;bersetzt als die beiden anderen heiligen Schriften. Die Bibel wurde in 1.400 Sprachen &uuml;bersetzt und ist damit die einzige Schriftstelle, die in die meisten Sprachen &uuml;bersetzt wurde.

  Die erste g&ouml;ttliche Schrift ist die Grundlage f&uuml;r die zweite g&ouml;ttliche Schrift, die Bibel, und die letzte g&ouml;ttliche Schrift, den Koran. Der Koran gibt in 5:44, 5:46, 5:48 und 5:68 Zeugnis daf&uuml;r <strong>Die Weisheit der ersten g&ouml;ttlichen Schrift, der Taurat (Bhagavad-Gita), ist auch in den beiden anderen Schriften pr&auml;sent. </strong>Wenn wir daher die im Markusevangelium verwendeten Worte 10:17 und 10:18 betrachten, k&ouml;nnen wir verstehen, dass es zwar viele gute Lehrer und gute Menschen auf der Welt gibt, aber kein Uttama Purusha (H&ouml;chstes Wesen) darunter M&auml;nner. Daher hei&szlig;t es in der Bhagavad-Gita: <strong>&bdquo;Gott allein ist Purushottama.&ldquo; </strong>Man kann sagen, dass in den obigen Versen nicht verwandte W&ouml;rter verwendet wurden, wobei das Wort &bdquo;Purushottama&ldquo; h&auml;tte lauten sollen. Dies wird gut verstanden, wenn man sich die Verse 16, 17 und 18 im 15. Kapitel der Bhagavad-Gita ansieht Purushottama Prapti Yoga.

  Gem&auml;&szlig; der ersten g&ouml;ttlichen Schrift gibt es nur ein Purusha. Obwohl es nur einen Purusha gibt, ist Gott in drei Teile geteilt: Jeevatma, Atma und Paramatma. Unter diesen drei M&auml;nnern <strong>Der Mann, der besser ist als Jeevatma und Atma, ist Paramatma, auch bekannt als Purushottama</strong>, wie in der Bhagavad-Gita erw&auml;hnt. Man kann sagen, dass alle au&szlig;er den drei M&auml;nnern Prakruti sind, was weiblich ist. M&auml;nner und Frauen auf der Welt sind alle mit der weiblichen Natur verbunden. Deshalb sagte Jesus in dem Vers: <strong>&bdquo;Nenn mich nicht Purushottama (Uttama Purusha). Gott allein ist Uttama Purusha.&ldquo; </strong>Es gibt drei Hauptreligionen auf der Erde. Die Menschen jeder Religion nahmen eine g&ouml;ttliche Schrift und sagten, dies sei unsere Schrift. In Wirklichkeit beziehen sich diese drei Schriften jedoch nicht auf eine bestimmte Religion. Sie vermitteln allen Menschen Weisheit und sollten daher als Schriften betrachtet werden, die f&uuml;r alle Menschen bestimmt sind.</div></div>
</span>`
},
{
chapterName: "Das Markusevangelium",
chapterNumber: 4,
pageNumber: 65,
verse: `<b>(12)	Das Markusevangelium, 16. Kapitel, 15. und 16. Vers.</b>`,
meaning: `<b>
(15) Er sagte zu ihnen: „Geht in die ganze Welt und verkündet allen das Evangelium.“ Schaffung.
<br><br>
(16) Wer glaubt und sich taufen lässt, wird gerettet; wer aber nicht glaubt, wird verurteilt.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Nachdem Jesus gekreuzigt und ins Grab gelegt worden war, erhob er sich am Sonntagmorgen im Morgengrauen aus dem Grab. Er erschien zuerst Maria Magdalena und dann anderen J&uuml;ngern. Jesus erschien den J&uuml;ngern dreiunddrei&szlig;ig Mal, nachdem er aus dem Grab gekommen war. Er erz&auml;hlte den elf J&uuml;ngern die beiden oben genannten Verse, als sie zum Essen zusammensa&szlig;en. Da alle Menschen auf der Welt in Unwissenheit versunken sind, wies er seine J&uuml;nger an, dorthin zu gehen <strong>predige das Evangelium, das Gottes Weisheit ist</strong>, zu ihnen. Die gleiche Botschaft wird im 15. Vers &uuml;bermittelt: <strong>&bdquo;Gehe in die ganze Welt und verk&uuml;nde das Evangelium der ganzen Sch&ouml;pfung.&ldquo; </strong>Hier bedeutet &bdquo;die ganze Welt&ldquo; nicht verschiedene Welten; es bezieht sich auf Menschen, die auf der Erde ihren Lebensunterhalt verdienen und auf verschiedene Weise leiden.

  Jesus sagte auch: &bdquo;Verk&uuml;ndet der ganzen Sch&ouml;pfung das Evangelium.&ldquo; Es bedeutet, das Evangelium, die g&ouml;ttliche Weisheit, Menschen jeden Alters zu predigen. Er sagte, man solle ihnen g&ouml;ttliche Weisheit predigen und ihnen die Erlaubnis, die &bdquo;Taufe&ldquo;, gew&auml;hren, nach Paraloka zu gehen. Die Taufe ist wie eine Erlaubnis zur Befreiung oder Paraloka. Diejenigen, denen die Erlaubnis zur Paraloka gew&auml;hrt wurde, werden durch meine Weisheit gerettet und der Erfahrung der S&uuml;nde entkommen. Er sagte, dass die N&ouml;te der S&uuml;nde diejenigen bestrafen w&uuml;rden, die nicht getauft sind, da sie keinen Schutz vor S&uuml;nden haben.</div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 66,
verse: `<b>(1)	Das Lukasevangelium, 2. Kapitel, 49. Vers.</b>`,
meaning: ` <b>
(49) „Warum hast du nach mir gesucht?“ er hat gefragt. „Wussten Sie nicht, dass ich im Geschäft meines Vaters tätig sein musste?“ </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Die Eltern Jesu suchten ihn, und als sie ihn sahen, waren sie erstaunt. Seine Mutter sagte zu ihm: „Junge, warum hast du uns so behandelt? Dein Vater und ich haben ängstlich nach dir gesucht.“ Als Antwort sagte Jesus: „Warum hast du nach mir gesucht? Wussten Sie nicht, dass ich im Geschäft meines Vaters tätig sein musste?“ Obwohl auch Jesu sichtbarer (physischer) Vater anwesend war, bezog er sich auf seinen unsichtbaren (nichtphysischen) Vater. Es ist wichtig zu klären, auf welchen Vater sich Jesus bezog, damit wir die Aufgaben des Vaters verstehen und folglich verstehen können, welche Aufgaben Jesus erfüllen würde und warum er seine Mutter und seinen Vater verlassen hat.

  In seinen eigenen Worten erklärte sich Jesus zum Menschensohn. Manchmal behauptete er auch, der Sohn Gottes zu sein. Daher ist er sowohl der Menschensohn als auch der Sohn Gottes. Wenn man fragt, wessen Söhne all diese Menschen sind, kann man sagen, dass alle Menschen Söhne des Menschen sind. Allerdings gibt es hier ein Geheimnis. Damit ein Mann geboren werden kann, ist ein Samenspender (Samenspender) erforderlich. Obwohl es natürlich ist, anzunehmen, dass der Vater der Samenspender für die Geburt eines Mannes ist, ist es wichtig zu beachten, dass ein Mann, obwohl er männlich zu sein scheint, nicht als Mann gezählt werden kann, da er als Vorbild für ihn geschaffen wurde ein Mann. Sowohl ein Mann als auch seine Frau können zum weiblichen Prakruti gezählt werden.

  Obwohl Jeevatma, der sich in einem menschlichen Körper befindet, ein mit dem Atma verbundener Mann ist, kann Er niemanden zeugen. Atma, das im Körper ist, hat jeden Menschen geboren. Wir haben bereits festgestellt, dass Atma alle Aufgaben im Körper erledigt und der Samenspender für alle Wesen ist. Jesus bezeichnete sich selbst als „Menschensohn“, obwohl er kein gewöhnlicher Mensch war, um anzudeuten, dass sein Vater nicht der sichtbare Joseph war, sondern vielmehr Atma, der in allen menschlichen Körpern wohnt. Die erste göttliche Schrift lehrt uns, dass jedes aus dem Mutterleib geborene Lebewesen Atma als Vater und Prakruti als Mutter hat. Allerdings wurde Jesus direkt ohne leiblichen Vater geboren, da er der Sohn des Heiligen Geistes (Paramatma) war, der sich von Atma unterscheidet. Aus diesem Grund wird er als Sohn Gottes bezeichnet. Als Jesus seine Eltern traf, sagte er ihnen, er müsse sich um die Arbeit seines Vaters kümmern, nannte aber nicht den Vater, auf den er sich bezog (Atma oder der Heilige Geist). Er hielt sich seiner Meinung nach für den Sohn Gottes. Jesus erfüllte nicht die Aufgaben des Atma, der sich im Körper befindet. Er konzentrierte sich darauf, Gottes Weisheit zu verbreiten. Der allgegenwärtige Paramatma übernimmt die Aufgabe, göttliche Weisheit zu verbreiten. Daher hatte Jesus die Absicht, das Werk seines Vaters (des Heiligen Geistes) zu tun. Paramatma selbst erschuf einen Körper und füllte ihn mit seiner eigenen Seele. Obwohl Jesus Gott war, bezeichnete er sich manchmal als Menschensohn und manchmal als Sohn Gottes, um zu verhindern, dass die Menschen ihn erkannten.
</div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 67,
verse: `<b>(2)	Das Lukasevangelium, 11. Kapitel, 37., 38., 39., 40. und 41. Vers.</b>`,
meaning: `<b>
(37) Während Jesus redete, lud ihn einer der Pharisäer zum Essen nach Hause ein. Also ging er hinein und nahm seinen Platz am Tisch ein.
<br><br>
(38) Sein Gastgeber war erstaunt, als er sah, dass er sich zum Essen hinsetzte, ohne zuvor die nach jüdischem Brauch vorgeschriebene Händewaschzeremonie durchzuführen.
<br><br>
(39) Da sagte der Herr zu ihm: „Ihr Pharisäer achtet so sorgfältig darauf, das Äußere des Bechers und der Schüssel zu reinigen, aber innen seid ihr schmutzig – voller Gier und Bosheit!
<br><br>
(40) Dummköpfe! Hat Gott nicht sowohl das Innere als auch das Äußere geschaffen?
<br><br>
(41) Reinige also das Innere, indem du den Armen Geschenke (Dharmas) gibst, und du wirst überall rein sein.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Im letzten Vers heißt es: „Reinige dein Inneres, indem du den Armen Geschenke (Dharmas) gibst, und du wirst überall rein sein.“ Leider haben die Menschen diesen Vers nicht richtig verstanden und ihn auf unterschiedliche Weise interpretiert. Wenn Jesus von „Geschenken geben“ spricht, verstehen die Menschen darunter die Spende von Geld, Kleidung und Lebensmitteln an die Armen. Jesus behauptete jedoch nicht, dass äußere Taten der Nächstenliebe einen Menschen von innen heraus reinigen würden. Seine Absicht war es, die Praxis des Dharma zu verinnerlichen und nur dann innere Übel zu beseitigen. Jesus legte nicht Wert auf äußere Reinheit, sondern betonte stattdessen die Reinigung innerer Qualitäten (Gunas). Deshalb ermutigte er andere, dem Weg des Dharma zu folgen, der den Gunas entgegensteht. Jesus selbst erlebte eine innere Reinigung und befolgte den Weg des Dharma. Deshalb forderte er andere dazu auf, denselben Weg zu gehen.</div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 68,
verse: `<b>(3)	Das Lukasevangelium, 12. Kapitel, 4. und 5. Vers.</b>`,
meaning: ` <b>
(4) Ich sage euch, meine Freunde, habt keine Angst vor denen, die den Körper töten und danach nichts mehr tun können.
<br><br>
(5) Aber ich werde dir zeigen, wen du fürchten solltest: Fürchte dich vor dem, der, nachdem dein Körper getötet wurde, die Macht hat, dich in die Hölle zu werfen. Ja, ich sage dir, fürchte dich vor ihm. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Menschen können dem Körper schaden, aber sie können dem inneren Jeevatma nicht schaden. Da Jeevatma von außen unsichtbar ist, bleibt es davon unberührt. Da der Körper sichtbar ist, können andere ihm nur Schaden zufügen, nicht aber der Jeevatma. Daher besteht kein Grund zur Angst vor solchen Personen. Der Einzige, den man fürchten muss, ist Gott. Selbst im Tod beurteilt Gott unsere Sünden, verhängt Strafe und verursacht Leid. Die Bindungen zwischen Individuen werden nach dem Tod unterbrochen. Auch wenn der Verstorbene im Haushalt des Mörders wiedergeboren wird, erkennen sie den Mörder nicht als Feind an. Gott erkennt das Jeevatma jedoch auch nach dem Tod und ist sich seiner nachfolgenden Geburten bewusst. Daher ist es von entscheidender Bedeutung, Gott zu fürchten, der uns für unser Karma nach dem Tod zur Verantwortung zieht. Es besteht kein Grund zur Angst vor anderen Menschen, die dem Jeevatma keinen Schaden zufügen können und uns nach dem Tod nicht wiedererkennen. </div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 69,
verse: `<b>(4)	Das Lukasevangelium, 12. Kapitel, 25. Vers.</b>`,
meaning: ` <b>
(25) Wer von euch kann durch Sorgen seine Größe um eine Elle vergrößern?</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Auch wenn Einzelpersonen glauben, dass sie alles durch ihre Intelligenz erreichen, gibt es keinen inhärenten Zusammenhang zwischen ihnen und ihrer Intelligenz. Menschen sind nicht unabhängig und nicht in der Lage, selbstständig zu handeln. Sie ähneln Marionetten, die vom Karma manipuliert werden. Diejenigen, die glauben, sie könnten tun, was sie wollen, befinden sich in einem Zustand der Unwissenheit über sich selbst. Gemäß der Struktur, die Gott geschaffen hat, steht das Karma unter der Kontrolle Gottes, und der Einzelne steht unter der Kontrolle des Karmas. Da Karma sie regiert, können sie keine Entscheidungen unabhängig treffen. Unabhängig davon, wie sehr sie planen und ihre Intelligenz nutzen, können sie ihre Körpergröße nicht ändern. Wenn jeder Einzelne sich selbst versteht und über das Ausmaß seiner Macht nachdenkt, wird er seine Bedeutungslosigkeit erkennen und erkennen, dass Gott unendlich größer ist als er.</div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 70,
verse: `<b>(5)	Das Lukasevangelium, 12. Kapitel, 33. und 34. Vers.</b>`,
meaning: ` <b>
(33) Verkaufe deinen Besitz und gib ihn den Armen. Sorgen Sie für Geldbörsen, die sich nicht abnutzen, einen Schatz in Paraloka, der niemals vergehen wird, wo kein Dieb in die Nähe kommt und keine Motte zerstört.
<br><br>
(34) Denn wo dein Schatz ist, da wird auch dein Herz sein.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Es gibt zwei Arten von Reichtum: einen, mit dem man alles auf der Welt kaufen kann, und einen anderen, mit dem man Gott kaufen kann, der jenseits der Welt ist. Ersteres ist materieller Reichtum, der von Menschen geschaffen wurde und mit bloßem Auge sichtbar ist und mit dem wir materielle Besitztümer kaufen, während letzteres Weisheitsreichtum ist, der vom Göttlichen geschaffen wurde und nicht leicht sichtbar ist. Es gibt viele Unterschiede zwischen Weisheitsreichtum und materiellem Reichtum. Während Diebe materiellen Reichtum stehlen können, können sie keinen Weisheitsreichtum stehlen, da dieser kein physisches Gut ist. Motten können materiellen Reichtum zerstören, aber sie können Weisheitsreichtum nicht beschädigen. Materieller Reichtum kann nicht einmal das kleinste Karma beseitigen, aber Weisheitsreichtum kann selbst großes Karma beseitigen. Materiellen Reichtum kann man durch Arbeit erlangen, doch Weisheitsreichtum erlangt man durch die Vertrautheit mit dem Göttlichen. Materieller Reichtum kann geschätzt werden, Weisheitsreichtum jedoch nicht. Wenn eine Person stirbt, wird ihre Verbindung zum materiellen Reichtum unterbrochen, da nicht einmal ein Penny zum Jeevatma gehört. Im Gegensatz dazu begleitet der Weisheitsreichtum das Jeevatma auch nach dem Tod, da die gesamte Weisheit, die man im Leben erlangt, in zukünftige Geburten übertragen wird. Diejenigen, die auf der Welt reich sind, mögen in der Gesellschaft respektiert werden, aber nicht in der Gegenwart Gottes. Gott erkennt diejenigen mit Weisheit und Reichtum an, auch wenn andere Menschen sie nicht respektieren. Zusammenfassend lässt sich sagen, dass es viele Unterschiede zwischen materiellem Reichtum und Weisheitsreichtum gibt.</div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 71,
verse: `<b>(6)	Das Lukasevangelium, 12. Kapitel, 49. Vers.</b>`,
meaning: ` <b>
(49) Ich bin gekommen, um Feuer auf die Erde zu bringen, und ich wünschte, es wäre bereits angezündet. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In diesem Zusammenhang bezieht sich der Begriff „Feuer“ nicht auf das gewöhnliche Feuer, das wir täglich sehen. Es gibt zwei Arten von Feuer: gewöhnliches Feuer und außergewöhnliches Feuer (Weisheitsfeuer). Gewöhnliches Feuer kann dabei Brennholz und andere Gegenstände verbrennen Gnanagni (Weisheitsfeuer) verbrennt das Brennholz des Karma. Während die Menschen in Sünde verstrickt sind und Nöte erleiden, kommt Gott herab, um das Feuer der Weisheit zu bringen, um ihr Karma zu verbrennen, sie aus dem Kreislauf von Geburt und Tod zu befreien und ihnen zu helfen, Gott zu erreichen. Wenn Gott Weisheit vermittelt, vergleicht er es mit Feuer, denn der Erwerb von Weisheit kann zur Befreiung führen. Gott brachte dieses Feuer in der Vergangenheit auf die Erde und es brannte eine Weile, bevor es verschwand. Jesus kam, um das Feuer neu zu entfachen und es am Brennen zu halten. Er wollte, dass das Feuer weiter brennt, also verkündete er, dass er gekommen sei, um ein Feuer zu entfachen, wo keins war, und er wünschte, dass das Feuer, das er zuvor entzündet hatte, bestehen bliebe.</div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 72,
verse: `<b>(7)	Das Lukasevangelium, 12. Kapitel, 51., 52. und 53. Vers.</b>
`, meaning: `<b>
(51) Glaubst du, ich bin gekommen, um Frieden auf die Erde zu bringen? Nein, das sage ich Ihnen, aber Spaltung.
<br><br>
(52) Von nun an werden fünf in einer Familie gegeneinander geteilt sein, drei gegen zwei und zwei gegen drei.
<br><br>
(53) Sie werden gespalten sein: Vater gegen Sohn und Sohn gegen Vater, Mutter gegen Tochter und Tochter gegen Mutter, Schwiegermutter gegen Schwiegertochter und Schwiegertochter gegen Schwiegermutter. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Paramatma offenbart seine Weisheit, wenn er in Bhagavans Form auf der Erde inkarniert. Bhagavans Weisheit erzeugt bei denen, die sich auf Satans Weg befinden, gegensätzliche Gefühle. In solchen Fällen kommt es zu Meinungsverschiedenheiten zwischen denen, die Weisheit verstehen, und denen, die dies nicht tun. Diejenigen, die über Weisheit verfügen, werden denen widersprechen, denen es daran mangelt. Wenn sich eine solche Situation im selben Haushalt ereignet, können Familienmitglieder einander feindselig gegenüberstehen. Wenn jemand versucht, zu Hause Weisheit zu erlangen, wird Satan wachsam sein. Satan fördert die Spaltung, indem er Väter gegen Söhne, Söhne gegen Väter, Mütter gegen Töchter, Töchter gegen Mütter, Schwiegermütter gegen Schwiegertöchter und Schwiegertöchter gegen Schwiegermütter ausspielt. Sogar Bhagavan (Guru) kann Ihnen raten, denen zu widersprechen, die sich Ihnen in Fragen der Weisheit widersetzen, da er weiß, dass ein Mann und eine Frau wegen seiner Weisheit streiten. Folglich kann es sein, dass sich ihr Streit eher verschärft als dass er nachlässt. Daher, Der Herr sagte: „Ich bin nicht gekommen, um Versöhnung zu bringen, sondern um Spaltung.“ Glaubst du, dass Bhagavan, der gekommen ist, um Weisheit auf Erden zu lehren, dir rät, auf deinen Haushalt zu achten und gleichzeitig Seine Weisheit zu vernachlässigen? Glauben Sie, dass der Herr, der Sie angewiesen hat, Ihre Hand abzuschneiden, wenn dies Gottes Weisheit behindert, Ihnen vorschlägt, sich mit Ihrer Frau und Ihren Verwandten zu versöhnen? Niemals. Er ermahnte Sie, keine Kompromisse mit ihnen einzugehen, auch wenn das bedeutet, dass Sie Ihr Leben opfern. Daher entstehen aufgrund der Weisheit Gottes viele Konflikte in Familien. Vor allem dort, wo wahre Weisheit verkündet wird, wird es innerhalb der Familie Zwietracht geben. Es gibt keine Meinungsverschiedenheiten, wenn Satans Weisheit unter dem Deckmantel göttlicher Weisheit dargestellt wird. Jeder neigt dazu, eine solche Weisheit zu unterstützen. Man kann erkennen, dass, wenn alle Haushaltsmitglieder aufgrund göttlicher Weisheit zu Gegnern werden, diese Weisheit wirklich Gottes Weisheit ist. </div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 73,
verse: `<b>(8)	Das Lukasevangelium, 13. Kapitel, 3. Vers.</b>`,
meaning: `<b>(3) Wenn ihr eure Meinung nicht ändert, werdet auch ihr alle zugrunde gehen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Manas (Geist) ist der wichtigste Teil des Körpers und wird so genannt, weil er Erinnerungen speichert. Es operiert ständig unter dem Einfluss von Maya (Satan) und verstärkt weltliche Anliegen. Seit der Geburt eines Menschen ist der Geist auf Satan ausgerichtet und hat nie im Einklang mit Gott funktioniert. Die Umwandlung eines solchen Geistes vom Einfluss Satans hin zur Ausrichtung Gottes wird als „Gesinnungswandel“ bezeichnet. Niemand kann ohne eine Änderung seiner Meinung auf die Seite Gottes wechseln. Wenn der Geist eine Transformation erfährt, beginnt sich Gnanagni (Weisheitsfeuer) zu manifestieren. Durch die Zerstörung seines gesamten Karmas durch Gnanagni vereint sich ein Mensch mit Gott, ohne Geburt und Tod zu erleben. Wenn der Geist unverändert bleibt und weiterhin Gedanken diktiert, muss ein Individuum Zyklen von Geburt und Tod durchmachen und die Qualen der Hölle ertragen. Daher ist es für jeden unabdingbar, seine Meinung zu ändern.
</div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 74,
verse: ` <b>(9)	Das Lukasevangelium, 14. Kapitel, 26. Vers.</b>`,
meaning: `<b>
(26) Wenn jemand zu mir kommt und Vater und Mutter, Frau und Kinder, Brüder und Schwestern, ja sogar sein eigenes Leben nicht hasst, kann ein solcher Mensch nicht mein Jünger sein.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wenn jemand das hört, wird er überrascht sein und fragen: „Was ist das für eine Weisheit?“ Was für ein Guru? Was für Schüler?“ Man könnte zu einem Guru kommen und ihn fragen: „Sagt irgendein Guru seinen Schülern, dass sie kein Schüler sind, es sei denn, sie schimpfen mit ihrer Familie?“ Hier müssen wir nachdenken. Wenn eine Person ihre ganze Familie ausschimpft, ist der Guru kein Verrückter, der erfreut ist und sie als Schüler akzeptiert. Es wird nicht empfohlen, jeden wahllos zu hassen. Der Guru freut sich, wenn ein Schüler im Einklang mit den Gefühlen des Gurus die Unwissenden schimpft, die auf Satans Weg gehen. Wenn ein Schüler sich dem Unwissenden widersetzt, erkennt der Guru, dass der Schüler mit seinen Lehren übereinstimmt und akzeptiert sie. Wenn ein Schüler die Unwissenden unterstützt, anstatt ihnen zu widersprechen, wird der Guru ihn nicht als Schüler anerkennen. Hass ist zwischen zwei Gruppen weit verbreitet – Gnanis (weise) und den Unwissenden. Wenn Vater und Mutter, Frau und Kinder, Brüder und Schwestern auf der Liste der Unwissenden stehen, sollte der Schüler sich ihnen widersetzen. Der Herr sagte, dass jemand, der sich den Unwissenden nicht widersetzt und die Verwandten bevorzugt, nicht sein Jünger ist. Es wird betont, dass man bei Unwissenheit keine Kompromisse eingehen sollte. Jesus sagte, dass der Jünger seine Mutter, seinen Vater, seine Brüder und Schwestern, seine Frau und seine Kinder verlassen sollte, wenn sie den Weg zur Weisheit behindern.</div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 75,
verse: ` <b>(10)	Das Lukasevangelium, 14. Kapitel, 27. Vers.</b>`,
meaning: `<b>
(27) Wer nicht sein Kreuz trägt und mir nachfolgt, kann nicht mein Jünger sein. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wenn Brennholz gebündelt ist, lässt es sich leichter aufnehmen und über weite Strecken transportieren; es wäre sonst nicht möglich, es zu tragen. Wenn die 108 Gunas im Geist einer Person in einem dysfunktionalen Zustand zusammengebunden sind, werden sie zu einem Bündel In den Händen des Menschen. Es gibt zwei Arten von Gunas – gute und schlechte – im menschlichen Körper. Die sechs schlechten Gunas sind Gier (Kaama), Wut (Krodha), Geiz (Lobha), Leidenschaft (Moha), Arroganz (Madam) und Eifersucht (Matsara). Ebenso sind die sechs guten Gunas Nächstenliebe (dana), Barmherzigkeit (daya), Wohlwollen (audarya), Leidenschaftslosigkeit (vairagya), Demut (vinaya) und Liebe (prema). Jedes der sechs schlechten und guten Gunas ist weiter in neun Teile unterteilt. Somit sind die sechs schlechten Gunas in 54 Teile unterteilt, und die sechs guten Gunas sind ebenfalls in 54 Teile unterteilt. Zusammen ergeben die guten und schlechten Gunas insgesamt 108.

  Die 108 Teile von Gunas werden aufgerufen Maya in der ersten göttlichen Schrift. In der zweiten göttlichen Schrift werden sie genannt Satan. In der letzten göttlichen Schrift werden diese Gunas benannt Teufel. Gott selbst sprach in der ersten göttlichen Schrift von Maya als „Guna-mayi mama maya“. Das bedeutet, dass die von Gott geschaffene Maya in Form von Gunas im menschlichen Körper vorliegt. Gott schuf Maya hauptsächlich, um die Menschen daran zu hindern, dem göttlichen Weg zu folgen. Maya kann einen Menschen dazu bringen, an ihrer Seite zu bleiben, anstatt Gottes Weg zu folgen. Man kann sagen, dass Maya Guna ist, oder Guna ist Maya. In Telugu bedeutet Maya „unsichtbar“. Maya ist im Kopf präsent, ohne gesehen zu werden. Maya, die in unserem Körper vorhanden ist, wird auch Kreuz genannt. Im spirituellen Sinne wird Maya mit einer Python verglichen, während Atma mit einer Taube verglichen wird.

  Eine Python ist eine mächtige Schlange. Wer darin gefangen ist, kann nicht frei werden. Das bedeutet, dass Maya stark ist. Jesus sagte, dass jeder, der Maya kontrolliert, bündelt und in der Hand hält, mein Jünger ist. Jesus sagte, dass der Eroberer von Maya wirklich mein Jünger war. Wer auch immer Maya (das Kreuz) fängt und Gottes Weg folgt, indem er es trägt, ist ein wahrer Jünger Gottes. Einer, der das Kreuz trägt, über das wir heute viel reden, und Jesus nachfolgt, ist sein Jünger, wie in diesem Vers gesagt wird.
</div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 76,
verse: `<b>(11)	Das Lukasevangelium, 18. Kapitel, 29. Vers.</b>`,
meaning: `<b>
(29) „Wahrlich, ich sage euch“, sagte Jesus zu ihnen: „Niemand, der um des Reiches Gottes willen sein Haus, seine Frau, seine Brüder, seine Schwestern, seine Eltern oder seine Kinder verlassen hat, wird es nicht versäumen, ein Vielfaches zu empfangen in diesem Zeitalter und im kommenden Zeitalter ewiges Leben.“ </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Das Reich Gottes bezieht sich auf Moksham, was die Befreiung aus dem Kreislauf der Wiedergeburt bedeutet. Sobald ein Mensch Moksham (Befreiung) erreicht, wird er nicht auf der Erde wiedergeboren und leidet nicht unter Satan. Moksham bedeutet, von Satan befreit zu werden und mit Gott zu verschmelzen. Mit anderen Worten: Der Mensch wird eins mit Gott. Die Vereinigung des Jeeva, das klein ist und eine bestimmte Form hat, mit dem unendlich großen, grenzenlosen und allgegenwärtigen Gott ist eine herausragende Leistung. Um diese Position zu erreichen, muss eine Person dem Weg der Weisheit folgen und bereit sein, Bindungen an ihren Ehepartner, ihre Kinder, Eltern, Geschwister und ihr Zuhause aufzugeben, wenn diese Bindungen ihre spirituelle Reise behindern. Eine solche Person wird in dieser Welt zu einem vollständigen Gnani und erreicht Gott im Paraloka. Den Ehepartner, die Kinder, die Geschwister und die Eltern aufzugeben, ist eine bedeutsame Entscheidung, denn Maya umgibt einen Menschen und bindet ihn an seine Nächsten und Liebsten. Prahlada zählte seinen Vater nicht mit, Mirabai verließ ihren Ehemann und ihre Verwandten und Buddha verließ eine junge Frau, einen einjährigen Sohn, Eltern, sein Zuhause und sein Königreich zugunsten der Weisheit. Allerdings diejenigen, die Abstand nehmen sich selbst von ihren Lieben zu trennen, kann Gott näher kommen. Wenn Sie jemanden für die Ewigkeit gewinnen möchten, ist es eine kluge Entscheidung, jemanden zurückzulassen, der für eine Weile bei Ihnen bleibt. Allerdings mag eine solche Entscheidung der Welt als dumm erscheinen. Es kommt selten vor, dass man jemanden findet, der bereit ist, um Gottes willen alles im Reich Satans zurückzulassen. Denn wenn jemand eine Vorstellung von Gott hat, konzentriert sich Satan hauptsächlich auf ihn und lenkt ihn vom Gedanken und vom Weg der Weisheit ab. Es ist für einen Menschen unmöglich, die Macht Satans zu überwinden und zu besiegen, wie es in der Bhagavad-Gita, Vignana Yogam, Vers 14 heißt. Man mag sich fragen, wie es möglich ist, zu Gott zu gehen, wenn Satans Macht so groß ist. Warum versuchen und scheitern? Wenn jemand jedoch völlig auf Gott vertraut und seine Bemühungen fortsetzt, obwohl er nicht in der Lage ist, sich gegen Satan zu behaupten, wird Gott selbst ihn von Satan auf seine Seite ziehen. Daher besteht die einzige Möglichkeit für den kleinsten Menschen, Satan zu besiegen, darin, sich völlig Gott zu ergeben. In der Bhagavad-Gita heißt es: „Maya Metam Tarantite“ was bedeutet „Ich werde ihn aus Maya herausholen“ über diejenigen, die Gott vollkommen vertrauen. Wenn also eine Person ihr volles Vertrauen und ihre Last auf Gott legt, kann Gott sie vor Satan retten.</div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 77,
verse: `<b>(12)	Das Lukasevangelium, 21. Kapitel, 15. Vers.</b>`,
meaning: ` <b>
(15) I will give you words and wisdom that none of your adversaries will be able to resist or contradict. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wenn kleine Kinder, die über ein gewisses Wissen über Weisheit verfügen, die Lehren renommierter Prediger und Gurus in Frage stellen, finden sie in ihren Lehren keine Antworten. Deshalb haben Prediger die Regel aufgestellt, dass niemand ihre Lehren in Frage stellen sollte. Der Hauptgrund für das Fehlen von Antworten in ihren Lehren liegt darin, dass sie nicht auf wissenschaftlichen Erkenntnissen basieren. Unwissenschaftliche Lehre kann keine Antworten auf rationale Fragen geben. Prediger unterrichten weiterhin, antworten aber nicht, wenn sie gefragt werden. Wenn Paramatma als Bhagavan inkarniert, lehrt Er die wahre Weisheit Paramatmas. Daher können diejenigen, die die von Bhagavan gelehrte Weisheit kennen, jede Frage lehren und beantworten. Gegner, die Bhagavans Anhänger sehen, die Paramatmas Weisheit kennen, kommen zu ihnen mit dem Ego, dass sie Gurus und Gnanis sind, und sprechen widersprüchlich. Die Weisheit, dass Gegner nicht widersprechen können, wurde den Anhängern zu einem solchen Zeitpunkt bereits mitgeteilt. Das Wort Gottes sagt, dass viele Menschen neidisch sind und die Rivalität gegenüber denen, die wahre Weisheit kennen, verstärken. Selbst als Gott herabkam, stellten sich ihm Gegner und sagten: „Du kennst die Weisheit noch nicht und musst an einen bestimmten Ort gehen, um echte Weisheit zu lernen.“ Einige Leute kamen zu mir und sagten: „Du kennst keine Weisheit.“ Solche Leute werden auch zu Ihnen kommen. Gott sagte im obigen Vers, dass er Ihnen die Weisheit geben würde, diese Fragen zu beantworten.</div></div>
</span>`
},
{
chapterName: "Das Lukasevangelium",
chapterNumber: 4,
pageNumber: 78,
verse: ` <b>(13)	Das Lukasevangelium, 21. Kapitel, 17. Vers . </b>`,
meaning: `<b>
(17) Alle werden dich wegen mir hassen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Die von Bhagavan, dem Sohn Gottes, offenbarte Weisheit richtet sich gegen diejenigen, die von Satan besessen sind. Es besteht die Möglichkeit, dass gewöhnliche Menschen diese Weisheit missverstehen, da sie anscheinend völlig gegen Prediger und Gurus gerichtet ist, die diese Weisheit besitzen Weisheit. Pandits, Prediger und Gurus mögen oft nicht die Worte derer, die den Namen Gottes predigen. Sie und die Menschen, die ihnen folgen, beginnen diejenigen zu hassen, die Gottes Weg predigen, weil sie Gottes Worte im Widerspruch zu ihren Lehren finden. Daher sagte Gott im obigen Vers: <b>„Jeder wird dich wegen mir hassen.“</b>   </div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 79,
verse: `<b>(1)	Das Johannesevangelium, 1. Kapitel, 1. Vers.</b>`,
meaning: `<b>(1) Im Anfang war das Wort, und das Wort war bei Gott, und das Wort war Gott.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Das Johannesevangelium umfasst 21 Kapitel. In dieser Schriftstelle werde ich Erklärungen für einige der Verse liefern, die die Menschen nicht verstanden haben, missverstanden haben oder die sie möglicherweise falsch interpretieren. Ich habe diese Verse als Teil des Gottesdienstes ausgewählt und fühle mich wie eine bloße Feder, dass Gott mich für diese Arbeit benutzt. Zuvor habe ich einige Verse aus der ersten göttlichen Schrift, der Bhagavad-Gita, und der dritten göttlichen Schrift, dem Koran, erklärt. Da es mir ein großes Anliegen ist, alle drei göttlichen Schriften zu erklären, werde ich nun einige Verse aus der zweiten göttlichen Schrift, dem Injeel (Bibel), illustrieren. Die in dieser Schriftstelle vermittelte Weisheit ist wissenschaftlich und authentisch. Schauen wir uns nun den ersten Vers des ersten Kapitels des Johannesevangeliums an, der aus drei kurzen Sätzen besteht, die erklärt werden müssen, um ihn vollständig zu verstehen.
  Lassen Sie uns nun die ersten drei Worte des Johannesevangeliums in der zweiten göttlichen Schrift besprechen.
  <b>
    Das Wort war am Anfang.
    Das Wort war bei Gott.
    Das Wort war Gott.</b>

    In den Lehren der Bibel bezeichnen wir diese drei Verse als die Anfangsverse der Bibel. Manche m&ouml;gen argumentieren, dass die Verse aus Genesis als die ersten Worte der Bibel bezeichnet werden sollten. Allerdings haben wir unsere Methode bereits erkl&auml;rt. Wir betrachten Lehren, die Menschen brauchen, als heilige Schriften und werden die ersten Verse daraus besprechen. Diesem Grundsatz folgend lehrte Bhagavan Jesus die vier Evangelien. Obwohl das Johannesevangelium das letzte war, begann es mit den Lehren. Ebenso haben wir den 11. Vers des zweiten Kapitels als Anfang der Bhagavad-Gita genommen, weil Gottes Weisheit von dort aus begann. Als erste drei S&auml;tze haben wir auch die Verse 11, 12 und 13 aus Sankhya-Yoga &uuml;bernommen. Ebenso stammen die ersten Verse aus dem 43. Kapitel des Injeel (der Bibel), und wir haben als erste drei S&auml;tze drei Verse aus dem Taurat (Bhagavad-Gita) &uuml;bernommen. Hier haben wir jedoch als erste drei S&auml;tze drei S&auml;tze aus einem Vers des Johannesevangeliums genommen und nicht drei aufeinanderfolgende Verse. Die Reihenfolge der S&auml;tze ist nicht wichtig; Wir haben diejenigen, die drei Bedeutungen vermittelten, als drei S&auml;tze genommen. Obwohl es sich um drei kurze S&auml;tze handelt, hat jeder von ihnen eine tiefe Bedeutung.

    Diese drei S&auml;tze vermitteln subtile Bedeutungen. Die ersten drei S&auml;tze der Bhagavad-Gita befassen sich mit den Konzepten von Jeevatma und Atma. Die einleitenden Worte des Johannesevangeliums lehren jedoch eine besondere Bedeutung. Die Einweihung des Bhagavad-Die Gita bespricht die drei Komponenten &ndash; Jeevatma, Atma und den K&ouml;rper. Umgekehrt befassen sich die ersten drei S&auml;tze des Johannesevangeliums mit den drei Aspekten Weisheit, Atma und Paramatma. Dennoch verdeutlichen diese S&auml;tze nicht explizit die Positionen von Atma und Paramatma. Obwohl der Begriff &bdquo;Gott&ldquo; in zwei der S&auml;tze vorkommt, bleiben Weisheit und Atma zweideutig identifizierbar. Schauen wir uns nun den ersten Satz des Trios genauer an.

    Der erste Satz lautet <strong>&bdquo;Das Wort war am Anfang.&ldquo; </strong>Ein Wort wird in der Sprache artikuliert und durch einen aus dem Mund kommenden Ton erzeugt. Man kann einen Ton wahrnehmen und anhand der akustischen Hinweise erkennen, ob ein Satz lang oder kurz ist. Die Sprache des Satzes ist m&ouml;glicherweise nicht unbedingt vertraut und kann unterschiedlich lang sein. Es ist nicht bestimmbar, ob das Wort (der Satz) leise oder laut gesprochen wurde. Lassen Sie uns den Satz analysieren <strong>&bdquo;Das Wort war am Anfang.&ldquo; </strong>Obwohl wir wissen, dass das Wort am Anfang gesprochen wurde, verf&uuml;gten die Menschen zu diesem Anfangsstadium &uuml;ber keinerlei Sprachkenntnisse. Daher stellt sich die relevante Frage nach der Sprache, in der das Wort gesprochen wurde. Um diese Frage zu beantworten, betrachten wir die Ereignisse, die sich zu Beginn ereigneten.

    Wenn wir uns zu Beginn nach dem Ursprung des Klangs erkundigen, k&ouml;nnen wir den Klang, den das menschliche Ohr h&ouml;rt, Prakruti zuschreiben. Prakruti besteht aus f&uuml;nf gro&szlig;en Bhootas &ndash; Erde, Wasser, Luft, Feuer und Himmel &ndash; von denen jeder Leben besitzt. Der mit Leben ausgestattete Himmel erzeugte zu Beginn den Ton. Dies wirft die Frage auf, wie der Himmel Klang erzeugt, wenn er scheinbar leer ist. Diese Untersuchung ist rational und das Verst&auml;ndnis der Antworten verwandelt sie in eine wissenschaftliche Untersuchung. Hat laut Brahma Vidya Shastra der Himmel selbst den Klang erzeugt? Da der Himmel ein Jeeva ist, ist Jeevatma nicht f&auml;hig und kann nicht nach wissenschaftlichen Prinzipien handeln; es ist das Dharma von Jeevatma. Paramatma hat auch einen Dharma. Paramatma (Gott) besitzt keinen Namen, keine Form und kein Werk. Dies ist das prim&auml;re Dharma Gottes. Gott ist kein Handelnder; Er geht keiner Arbeit nach. Gem&auml;&szlig; Jeevatmas Dharma ist Jeevatma nicht f&auml;hig und kann keine Arbeit verrichten. Obwohl Gott dazu in der Lage ist, greift er nicht in die Taten ein. Daher haben Jeevatma und Gott gegens&auml;tzliche Dharmas. Am Anfang strahlte das Wort durch den Himmel. Da es sich bei der Sky ebenfalls um einen Jeeva handelt, erzeugte sie dieses Ger&auml;usch nicht. Der Klang, der vom Himmel kam, ist ein Faktum, aber der Jeeva des Himmels ist dazu nicht in der Lage und kann auch keinen Klang erzeugen. Daher k&ouml;nnte jemand hinter dem Himmel die Ger&auml;uschquelle gewesen sein. Gott hat den Klang nicht geschaffen, weil er sich nicht mit der Arbeit besch&auml;ftigt. Obwohl das Ger&auml;usch vom Himmel wahr ist, sind weder der Jeeva des Himmels noch Gott die Ursache des Ger&auml;usches. Es kann zweifelhaft sein, ob es neben beiden noch jemanden gab.

    Um diesen Zweifel auszur&auml;umen, ist es wichtig, die Wesenheiten im Universum zu verstehen. Urspr&uuml;nglich hat Gott das Universum erschaffen. Obwohl Gott Gott war, erschuf er Prakruti aus sich selbst. Er erschuf zuerst Prakruti aus f&uuml;nf Teilen und dann Atma und Jeevatma, um dem Prakruti, das kein Leben hatte, Vitalit&auml;t zu verleihen. &Auml;hnlich wie er selbst schuf Gott das m&auml;nnliche (Purusha) Atma und Jeevatma. Er ernannte Jeevatma zum Passagier und Atma zum Fahrer und &uuml;bertrug Atma die Ausf&uuml;hrung aller Aufgaben. In jedem Individuum f&uuml;hrt Atma alle Funktionen im K&ouml;rper aus und existiert gleichzeitig mit Jeevatma. In seinen Schriften behauptete Gott, dass selbst gro&szlig;e Gelehrte Atma m&ouml;glicherweise nicht vollst&auml;ndig verstehen. NurEngagierte Yogis k&ouml;nnen, wie im 11. Vers der Bhagavad-Gita Purushottama Prapti Yoga erw&auml;hnt, Atma wirklich verstehen und betonen, dass Atma im K&ouml;rper verborgen bleibt, ohne dass man es erkennt.

    Wenn Gott nicht wirkt, fragen sich manche vielleicht, wie er Prakruti, Atma und Jeevatma geschaffen hat. Meine Antwort ist, dass es wahr ist, dass Gott nicht arbeitet. Dieses Prinzip wurde von Gott nach der Erschaffung von Prakruti, Atma und Jeevatma formuliert. Vor dem Sch&ouml;pfungsakt war Gott die einzige Existenz und w&auml;hrend dieser Zeit war Gott mit der Arbeit besch&auml;ftigt. Vor der Sch&ouml;pfung gab es kein anderes Wesen als Gott. Folglich wirkte Gott vor dem Sch&ouml;pfungsakt. Gott erschuf Prakruti, gefolgt von der Erschaffung von Atma und Jeevatma. Anschlie&szlig;end etablierte Gott sein Dharma. W&auml;hrend Gott es unterlie&szlig;, nach der Sch&ouml;pfung zu wirken, war er vor dem Sch&ouml;pfungsakt aktiv. Gott delegierte alle Verantwortlichkeiten an Atma und bestimmte, dass Atma alle Aufgaben ausf&uuml;hren w&uuml;rde. Folglich h&ouml;rte Paramatma auf, sich an den Handlungen zu beteiligen, die er nach der Erschaffung von Atma zu verrichten pflegte. Als Atma die Verantwortung &uuml;bernahm, wurde Paramatma ein passiver Beobachter (Zeuge).

    Gott besch&auml;ftigt sich nicht mit der Arbeit; Jeeva ist handlungsunf&auml;hig und Atma ist derjenige, der alle Aufgaben ausf&uuml;hrt. Daher war es Atma, der zu Beginn den Klang vom Himmel erzeugte. Atma, verborgen im Himmel, erzeugte den Ton. Der von Atma erzeugte Klang wurde zu Gottes Weisheit und wird daher als &bdquo;Wort&ldquo; bezeichnet, was einen Klang mit Bedeutung bedeutet. Der Satz beschreibt das Sch&ouml;pfungsereignis <strong>&bdquo;Das Wort war am Anfang&ldquo; </strong>wird verwendet, um auszudr&uuml;cken, dass ein bedeutungsvoller Klang vom Himmel stammt. Wir haben gelernt, was das &bdquo;Wort&ldquo; ist und wer es artikuliert hat. Das &bdquo;Wort&ldquo; wurde von Atma mit Gottes Weisheit in Form von Klang gesprochen. Was Atma vom Himmel artikulierte, wurde zur ersten Weisheit f&uuml;r die Welt. Obwohl das Ger&auml;usch vom Himmel Weisheit enthielt, manifestierte es sich als lautes Ger&auml;usch in Form von Donner, das jenseits des Verst&auml;ndnisses der menschlichen Sprache lag. Die Sonne verstand das donnernde Ger&auml;usch am Himmel und &uuml;bermittelte die Botschaft in einer f&uuml;r Menschen verst&auml;ndlichen Sprache an einen Mann namens Manu auf der Erde, da sie erkannte, dass es f&uuml;r Menschen unverst&auml;ndlich war.

    Gottes Weisheit manifestierte sich zu Beginn der Sch&ouml;pfung in Form eines unverst&auml;ndlichen Klangs. Dies wird im ersten Satz des ersten Kapitels des Johannesevangeliums zum Ausdruck gebracht, in dem es hei&szlig;t, dass die <strong>&bdquo;Das Wort war am Anfang.&ldquo; </strong>An diesem Tag waren sich die Menschen nicht bewusst, dass der Klang Gottes Weisheit in sich trug; Sie verstanden es erst einigerma&szlig;en, als die Sonne die Botschaft &uuml;berbrachte. Krishna &uuml;bermittelte dieselbe Weisheit in Form der Bhagavad-Gita und erkl&auml;rte, dass es sich um dieselbe Weisheit handelte, die zu Beginn der Sch&ouml;pfung gesprochen wurde. Allerdings konzentrierte sich die menschliche Aufmerksamkeit zun&auml;chst nicht auf den donnernden Klang, und bis heute ist sich niemand bewusst, dass der Klang des Donners die Weisheit der Bhagavad-Gita verk&ouml;rpert. Die Sonne &uuml;bermittelte Manu die gleiche Weisheit, die Krishna gesprochen hatte, und &uuml;bersetzte die vom Himmel kommende Weisheit in Form von Donner. Die Weisheit aus dem Klang des Himmels entstand aus dem Atma des Himmels. Atmas Weisheit entstand aus Atma selbst. Atma selbst wurde zur Weisheit, und dieselbe Weisheit kam aus Atma. Diese Weisheit von Atma ist vergleichbar damit, wie sich Baumwolle in Faden verwandelt und der Faden aus der Baumwolle entsteht. W&auml;hrend Baumwolle und Faden unterschiedlich sind, wird Baumwolle zum Faden. Ebenso sind Atma und Weisheit unterschiedlich, aber Atmas Weisheit geht von Atma aus. Wird der Faden getrennt, besteht er aus Baumwollfasern; Ebenso enth&auml;lt die Weisheit von Atma, wenn man sie zerlegt, die Essenz von Atma. Am Anfang &uuml;bermittelte Gott seine Weisheit durch den Klang des Himmels, wie im Koran 42:51 beschrieben, wo Gott seine Weisheit unter anderem durch die Offenbarung des Himmels offenbart. Gott &uuml;bermittelte seine Weisheit w&auml;hrend der Initiation der Sch&ouml;pfung durch das Atma des Himmels. Die in Form von Donner dargebotene Weisheit war f&uuml;r Menschen nicht verst&auml;ndlich, da ihr eine Sprache fehlte, die sie verstehen konnten. Folglich &uuml;bermittelte die Sonne, nachdem sie die Weisheit in den Donnern erfasst hatte, sie einem Menschen auf der Erde in menschlicher Sprache. Schlie&szlig;lich verbreitete sich diese Weisheit auf der ganzen Erde. Im Laufe der Zeit ersetzten jedoch Adharmas die Dharmas, was dazu f&uuml;hrte, dass die urspr&uuml;nglich vermittelte Weisheit aus dem menschlichen Ged&auml;chtnis verschwand. Im Dvapara Yuga nahm Bhagavan die Form von Krishna an und teilte Arjuna mit, dass er die gleiche Weisheit teilte, die die Sonne &uuml;bermittelt hatte. Obwohl die gleiche Weisheit in Form der Bhagavad-Gita, der ersten g&ouml;ttlichen Schrift, pr&auml;sentiert wird, haben die Menschen ihre Urspr&uuml;nge vergessen.

    Die ersten drei S&auml;tze des Johannesevangeliums wurden 3000 Jahre nach der Verk&uuml;ndung der Bhagavad-Gita geschrieben, als die Menschen die von Gott vermittelte Weisheit vergessen hatten. Der Satz <strong>&bdquo;Das Wort war am Anfang&ldquo; </strong>ist nun verstanden. Es wird anerkannt, dass die Weisheit in Form von Donner aus dem Atma des Himmels stammt, wie im zweiten Satz angegeben. Daher wird behauptet, dass <strong>&bdquo;Das Wort war bei Gott.&ldquo; </strong>Weitere Untersuchungen zeigen, dass der Klang des Wortes aus Atma geboren wurde. So wie der gedrehte Faden aus Baumwollfasern entsteht, verwandelt sich Atmas Beweglichkeit in Energie, und die Weisheit in der Energie manifestiert sich in Form von Klang. &Auml;hnlich wie der Faden Baumwollfasern enth&auml;lt, umfasst der Klang der Weisheit die Kraft von Atma. Atmas Weisheit liegt sowohl in Form von Atmas Kraft als auch in Form von Atma selbst vor. Atmas Weisheit und Atma sind ein und dasselbe, und daher hei&szlig;t es: <strong>&bdquo;Das Wort war Gott.&ldquo;</strong>

    Bisher haben wir besprochen, dass Gott Jeevatma und Atma erschaffen hat, wobei Gott aktiv vor der Sch&ouml;pfung gewirkt hat. Doch nach dem Sch&ouml;pfungsakt erm&auml;chtigte Gott Atma, die Aufgaben auszuf&uuml;hren, indem er scheinbar verschwand und seine Anwesenheit unbekannt machte. Gott verzichtete darauf, irgendwelche Aufgaben zu erf&uuml;llen, und in diesem Zustand wurde Er jemandem &auml;hnlich, der nicht existierte. Folglich &uuml;bernahm Atma die Verantwortung, Gottes Werk auszuf&uuml;hren. Obwohl Atma die Funktionen von Jeevatma und Paramatma ausf&uuml;hrt, bleiben seine Handlungen vor anderen verborgen. Die oben genannten Aussagen beschreiben den gesamten Betriebsablauf von Atma. Als Paramatma das Universum erschuf, gab es zun&auml;chst drei Seelen, doch nach der Erschaffung erkennt man nur noch zwei Seelen &ndash; Jeevatma und Atma. In Abwesenheit von Paramatmas Anwesenheit &uuml;bernahm Atma die Rolle von Paramatma, weshalb Atma als Gott bezeichnet werden kann. Obwohl Atma kein Gott (Paramatma) ist, f&uuml;hrt er Gottes Aufgaben aus und nimmt Gottes Position ein.

    Die Weisheit von Atma hat ihren Ursprung im Atma selbst. Durch die Behauptung, dass Atma Gott ist, wird dies best&auml;tigt <strong>Das Wort (Weisheit) war bei Gott</strong>. Diese Aussage ist richtig, wenn wir Atma als Gott betrachten. Auch wenn Atma nicht Gott ist, muss er als Gott anerkannt werden, weil Gott Atma die Autorit&auml;t verliehen hat, als Gott zu handeln. Wenn daher das Wort (Weisheit) als Atma identifiziert wird, kann erkl&auml;rt werden, dass dieselbe Weisheit (Atma) Gott ist. Diese Erkl&auml;rung stimmt mit der Aussage im Johannesevangelium &uuml;berein <strong>Das Wort war Gott</strong>. Nachdem ich Fragen wie &bdquo;Was ist das Wort?&ldquo;, &bdquo;Wie ist das Wort mit Atma verbunden?&ldquo; behandelt habe. und &bdquo;Warum gilt Atma als Gott?&ldquo; gehe ich davon aus, dass die Bedeutung der ersten drei S&auml;tze aus dem Johannesevangelium 1:1 nun verst&auml;ndlich ist. Wenn man Wenn jemand dies nach einer so detaillierten Erkl&auml;rung nicht begreift, bleibt die Weisheit von Atma m&ouml;glicherweise schwer zu fassen. Das Verst&auml;ndnis von Atmas Weisheit ist entscheidend, um Gottes System zu verstehen. Um Gottes Wege zu erkennen, muss man zun&auml;chst die Weisheit des Wortes verstehen. Sobald diese Weisheit bekannt ist, wird klar, dass die Weisheit Atma ist und Atma Gott ist.

    <table width="516">
    <tbody>
    <tr>
    <td width="119">
    <p><strong>Bei der Sch&ouml;pfung</strong></p>
    </td>
    <td width="155">
    <p><strong>Gott (Paramatma)</strong></p>
    </td>
    <td width="88">
    <p><strong>Prakriti</strong></p>
    </td>
    <td width="63">
    <p><strong>Atma</strong></p>
    </td>
    <td width="90">
    <p><strong>Jeevatma</strong></p>
    </td>
    </tr>
    <tr>
    <td width="119">
    <p><strong>Nach der Sch&ouml;pfung</strong></p>
    </td>
    <td width="155">
    <p><strong>(Paramatma)</strong></p>
    </td>
    <td width="88">
    <p><strong>Prakriti</strong></p>
    </td>
    <td width="63">
    <p><strong>Atma</strong></p>
    </td>
    <td width="90">
    <p><strong>Jeevatma</strong></p>
    </td>
    </tr>
    <tr>
    <td width="119">
    <p><strong>Nach der Sch&ouml;pfung</strong></p>
    </td>
    <td width="155">
    <p><strong>Atma (Gott)</strong></p>
    </td>
    <td width="88">
    <p><strong>Prakriti</strong></p>
    </td>
    <td width="63">
    <p><strong>Atma</strong></p>
    </td>
    <td width="90">
    <p><strong>Jeevatma</strong></p>
    </td>
    </tr>
    </tbody>
    </table>

    Im Akt der Sch&ouml;pfung arbeitete Gott daran, sowohl das weibliche Prakruti als auch das m&auml;nnliche Atma und Jeevatma zu erschaffen. Urspr&uuml;nglich erschuf Gott als Purusha (m&auml;nnlich) zwei ihm &auml;hnliche Seelen, Atma und Jeevatma. Nach der Erschaffung von Prakruti, Atma und Jeevatma &uuml;bernahm Gott die Rolle des Zeugen ohne aktive Beteiligung. Angesichts der angeborenen Natur Gottes, sich nicht an der Arbeit zu beteiligen, mag es scheinen, als ob es keinen Gott g&auml;be, obwohl er existiert. Wenn das Gleichgewicht der Dharmas gest&ouml;rt ist und Adharmas auf der Erde vorherrschen, sendet Gott seine Seele als Bhagavan, um die Dharmas wiederherzustellen. Bei der Wiederherstellung der Dharmas wird ein Vertreter Gottes entsandt, wodurch die Notwendigkeit entf&auml;llt, dass Gott sich direkt an der Arbeit beteiligt. Atma hingegen &uuml;bernimmt die Verantwortung f&uuml;r alle anderen Aufgaben. Folglich wird Gott nach der Sch&ouml;pfung tr&auml;ge und scheinbar irrelevant. Man k&ouml;nnte sagen, dass Gott in diesem Zustand als nicht existent erscheint. Atma tritt ein, um die wahrgenommene L&uuml;cke Gottes zu f&uuml;llen, und wird effektiv zu Gott, wodurch wir uns der Abwesenheit Gottes nicht bewusst werden. Daher der Satz <strong>&bdquo;Das Wort war Gott&ldquo; </strong>wird in der zweiten g&ouml;ttlichen Schrift dargestellt und bedeutet eine Unterscheidung zwischen Gott und dem Wort. Obwohl das Wort nicht von Natur aus Gott ist, verwandelte es sich in Gott. Der Ausdruck <strong>&bdquo;Das Wort war Gott&ldquo; </strong>hebt die Umwandlung des Wortes (der Weisheit) in Gott hervor. Da das Wort (Weisheit) mit Atma identifiziert wird und Atma als Gott betrachtet wird, wird behauptet, dass Atma als Wort Gott ist. Jeder irrt, wenn er wei&szlig;, wer Gott und wer Atma ist.

    In Wirklichkeit existiert Gott nach dem Sch&ouml;pfungsakt nicht mehr. Ohne dass jemand wei&szlig;, dass es keinen Gott auf der Welt gibt, &uuml;bernimmt Atma die Rolle Gottes und erf&uuml;llt die Pflichten sowohl von Jeevatma als auch von Prakruti. Gleichzeitig nimmt Atma eine gott&auml;hnliche Position ein. Nach der Sch&ouml;pfung verwandelte sich Gott in ein formloses, namenloses Wesen ohne zugewiesene Aufgaben. Einen solchen Gott als nicht existent zu beschreiben, k&ouml;nnte zutreffender sein, als seine Existenz zu behaupten. Da es kein Wesen an der Stelle Gottes gibt, &uuml;bernimmt Atma die Rolle Gottes, was durch den Satz erl&auml;utert wird <strong>&bdquo;Das Wort war Gott</strong>&ldquo; im dritten Satz. Obwohl viele Menschen diese S&auml;tze h&ouml;ren und studieren, bleibt das zugrunde liegende Geheimnis unbekannt.

    Um die Realit&auml;t &uuml;ber Atma zu verdeutlichen, das die Rolle Gottes verk&ouml;rpert, wird Folgendes gesagt: <strong>&bdquo;Das Wort war Gott.&ldquo; </strong>Wenn Atma, der Gott verk&ouml;rpert, eine Handlung ausf&uuml;hrt, f&uuml;hrt er die Handlung auf &bdquo;Jeevatma hat getan&ldquo; oder &bdquo;Gott hat getan&ldquo; zur&uuml;ck und &uuml;berzeugt so jeden von der Existenz Gottes. Es kann sich die Frage stellen, wer die Autorit&auml;t &uuml;ber das Universum hat, wenn es keinen Gott gibt, oder ob diese Perspektive mit Gottes Weisheit oder Atheismus &uuml;bereinstimmt. Die Antwort auf diese Anfragen lautet wie folgt: Wir sagen, dass Gott nicht an der Stelle Gottes steht, aber wir sagen nicht, dass Gott &uuml;berhaupt nicht existiert. Gottes Handeln bleibt unbekannt, und es wird betont, dass Ihm ein Name, ein Werk oder eine Form fehlt und er daher keine direkte Beziehung zu den Menschen hat, aber wir haben nie gesagt, dass Gott &uuml;berhaupt nicht existiert. In Zeiten Angesichts einer Bedrohung der Dharmas sendet Gott seinen Vertreter, um die Ordnung wiederherzustellen. Selbst in diesem Szenario verzichtet der Repr&auml;sentant darauf, ausdr&uuml;cklich zu behaupten, Gott zu sein, und nimmt den Spitznamen &bdquo;Bhagavan&ldquo; an. Das Geheimnis um Gottes Identit&auml;t und Eigenschaften bleibt bestehen. Gott ist da, doch niemand wei&szlig;, wie Gott ist. Seit der Sch&ouml;pfung hat niemand Gott gesehen oder direkt mit ihm kommuniziert. &Uuml;ber alles auf der Welt kann man alles sagen, aber niemand kann etwas Definitives &uuml;ber Gott sagen. Begriffe wie &bdquo;Allah&ldquo; im Kruta Yuga bedeuten Gottes grenzenlose Natur, und Bezeichnungen wie &bdquo;Parabrahma&ldquo; betonen Gottes &Uuml;berlegenheit &uuml;ber Atma, der verschiedene Rollen erf&uuml;llt. Dar&uuml;ber hinaus unterstreicht der Begriff &bdquo;Paramatma&ldquo; Gottes Unterscheidung von Atma und &bdquo;Purushottama&ldquo; bezeichnet Gottes Vorherrschaft im Vergleich zu Jeevatma und Atma. Es ist besser zuzugeben, dass weder Sie noch ich etwas &uuml;ber Gott wissen.
    </div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 80,
verse: ` <b>(2) 	Das Johannesevangelium, 1. Kapitel, 9. Vers.</b>`,
meaning: `<b>
(9) Das wahre Licht, das allen Licht gibt, kam in die Welt. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wenn es in der Außenwelt Licht gibt, liegt das an einem brennenden Feuer. In diesem Zusammenhang wird jedoch in dem Vers das wahre Licht erwähnt. Das wahre Licht entzündet sich ohne Feuer und dringt in jeden Menschen ein und erleuchtet den gesamten Körper von Kopf bis Fuß. Es gibt nur ein solches Licht ohne Feuer, und das ist Atma, das von Gott kommt und von Gott (dem Schöpfer) bezeichnet wird. Atma versorgt den gesamten Körper mit Licht des Bewusstseins. Wenn Atma in den Körper eintritt, werden die 25 Billionen Zellen im menschlichen Körper mit seinem Licht gefüllt. Jede Zelle wird zu einer brennenden Lampe ohne Feuer. Das Licht der Lampe hat eine bestimmte Temperatur. Der menschliche Körper hat aufgrund des Atma-Lichts eine Temperatur von 30 °C. Wenn Atma den Körper verlässt, wird der Körper kalt, ohne Wärme. Ein Körper ohne Atmas Licht wird als toter Körper bezeichnet. In Vers 24:35 heißt es:<b> „Atma ist das Licht und der Körper ist die Nische.“</b> Man kann sagen, dass Atma, das den Körper erleuchtet, als das wahre Licht bezeichnet werden kann.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 81,
verse: ` <b>(3)	Das Johannesevangelium, 1. Kapitel, 10. Vers.</b>`,
meaning: ` <b>
(10) Er war in der Welt, und obwohl die Welt durch ihn geschaffen wurde, erkannte die Welt ihn nicht.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der Begriff „Loka (Welt)“ bezieht sich in Telugu auf etwas, das Erfahrungen durchmacht. Atma ist in Menschen vorhanden, die Erfahrungen machen, und es ist der Schöpfer aller Menschen. Es ist jedoch entscheidend, den Unterschied zwischen Atma und Gott zu erkennen. Gott erschuf Atma und Atma wiederum erschuf die Menschen. Es ist wichtig zu verstehen, dass Gott den Menschen nicht direkt erschaffen hat; Stattdessen bildete Er die gesamte Prapancha, zunächst ohne jegliche Lebewesen. Gott brachte zuerst Prakruti hervor und ermächtigte dann Atma, menschliches Leben zu erzeugen, zu regieren und zu beenden. Seitdem erschafft Atma kontinuierlich Menschen, fungiert als tragendes Licht des menschlichen Lebens und orchestriert die Prozesse von Tod und Wiedergeburt. Trotzdem sind sich die Menschen oft der Gegenwart von Atma nicht bewusst, der ihnen nahe und in ihnen ist und im Wesentlichen Gott ist. Atma bringt Menschen zur Welt; Daher ist Atma der Vater der Menschen. Gott erschuf Atma; somit Er ist der Vater von Atma. Obwohl Atma manchmal als Gott bezeichnet wird, ist der wahre Gott der Heilige Geist, während Atma der Vater der Menschen ist.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 82,
verse: ` <b>(4)	Das Johannesevangelium, 1. Kapitel, 11. Vers.</b>`,
meaning: `  <b>
(11) Er kam zu dem, was ihm gehörte, aber die Seinen nahmen ihn nicht auf.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der Begriff „die Seinen“ umfasst alle, die Er geschaffen hat. Atma erweckte die Menschen auf Befehl des Heiligen Geistes und manifestierte sich ihnen in Form göttlicher Weisheit, die als Wort bezeichnet wird. Auch wenn Atma in Form von Weisheit zu den Menschen gelangte, neigen Menschen dazu, ihr eigenes Wissen als bedeutsam wahrzunehmen und die angebotene Weisheit oft zu übersehen oder abzulehnen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 83,
verse: `  <b>(5)	Das Johannesevangelium, 1. Kapitel, 12. Vers.</b>`,
meaning: `<b>
(12) Doch allen, die ihn aufnahmen, denen, die an seinen Namen glaubten, gab er das Recht, Kinder Gottes zu werden.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Diejenigen, die die von Atma gebotene Weisheit verstehen, werden Atma annehmen. Diejenigen, die mit Atmas Weisheit vertraut sind und an Atma glauben, haben die Aussicht, Atmas Erben zu werden. Folglich heißt es in dem Vers: „Er gab das Recht, Kinder Gottes zu werden.“ Der Begriff „Gottes Kinder“ bezeichnet diejenigen, die mit der Weisheit von Atma vertraut sind.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 84,
verse: ` <b>(6)	Das Johannesevangelium, 1. Kapitel, 13. Vers</b>`,
meaning: `<b>
(13) Men born not of natural descent, nor of human decision or a husband’s will, but born of God.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Alle Menschen stammen aus Atma. Sie sind weder aus Frauenblut geboren noch der Wille von Männern oder Frauen.
</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 85,
verse: `<b>(7)	Das Johannesevangelium, 1. Kapitel, 14. Vers.</b>`,
meaning: ` <b>
(14) Das Wort ist Fleisch geworden und hat unter uns Wohnung genommen. Wir haben seine Herrlichkeit gesehen, die Herrlichkeit des einzigen Sohnes, der vom Vater kam, voller Gnade und Wahrheit. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der Gott Atma (Weisheit) nahm eine physische Form an, die der eines Menschen ähnelte, und wohnte unter den Menschen, wobei er Gnade und Weisheit ausstrahlte.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 86,
verse: `  <b>(8)	Das Johannesevangelium, 1. Kapitel, 18. Vers.</b>`,
meaning: ` <b>
(18) Kein Mensch hat jemals Gott gesehen; der eingeborene Sohn, der im Schoß des Vaters ist, offenbarte ihn.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Das Wort &bdquo;Gott&ldquo; wird sowohl f&uuml;r Atma als auch f&uuml;r Paramatma verwendet. In der letzten g&ouml;ttlichen Schrift wird der Begriff &bdquo;Allah&ldquo; f&uuml;r beide G&ouml;tter verwendet &ndash; Atma und Paramatma. Daher konnten Muslime nicht zwei G&ouml;tter erkennen. Um diesen Fehler zu vermeiden, hei&szlig;t es in der Bibel, dass Atma der Vater und Paramatma der Heilige Geist ist. Der Begriff &bdquo;gezeugter Sohn&ldquo; bezieht sich auf <strong>der einzige von Gott geschaffene Sohn</strong>. Paramatma (der Heilige Geist) ist ewig. Nachdem Paramatma zu Beginn Prakruti erschaffen hatte, erschuf er einen Sohn namens Atma, um alle Lebewesen ins Leben zu rufen. Atma erschuf alle Lebewesen gem&auml;&szlig; den Geboten des Heiligen Geistes. Daher gibt es f&uuml;r alle Lebewesen nur einen Vater (den geschaffenen Gott). Der Vater des erschaffenen Atma ist der Heilige Geist. &bdquo;<strong>&bdquo;Niemand hat jemals Gott (den Heiligen Geist oder Paramatma) gesehen.&ldquo; </strong>wie im Vers angegeben. Gott (der Heilige Geist) hat keine Form, keinen Namen und kein Werk; Daher hat noch nie jemand Paramatma gesehen. Atma, der eingeborene Sohn, offenbart den unsichtbaren Gott durch seine Weisheit. Atma ist der einziggezeugte Sohn, der vom Herzen des Gro&szlig;en Gottes, Paramatma, getrennt ist. Da niemand den Heiligen Geist gesehen hat, kann nur Atma &uuml;ber seinen Vater, den Heiligen Geist, sprechen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 87,
verse: ` <b>(9)	Das Johannesevangelium, 1. Kapitel, 51. Vers.</b>`,
meaning: `<b>
(51) Dann fügte er hinzu: „Wahrlich, ich sage euch, ihr werdet sehen, wie sich der Himmel öffnet und die Engel Gottes auf dem Menschensohn auf- und niedersteigen.“ </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Dies ist das Wort, das Jesus zu Nathanael selbst sprach. Jesus behauptete, der Menschensohn zu sein, obwohl Nathanael ihn als den Sohn Gottes bezeichnet hatte. Jesus leugnete nicht, der Sohn Gottes zu sein, sondern reduzierte sich stattdessen auf den Menschensohn. Er versicherte Nathanael und anderen, dass sie Zeuge außergewöhnlicher Ereignisse werden würden. Wie wir bereits betont haben, dienen Gottes Diener, die Engel, als Herrscher in der menschlichen Welt. Diese Engel, die oft als Bhutas und Planeten (Grahas) bezeichnet werden, sind am Himmel zahlreich, insgesamt Milliarden. Während einer Begegnung mit Jesus stiegen die Diener Gottes, die sich seiner Identität bewusst waren, vom Himmel herab und verneigten sich vor ihm. Viele Menschen wissen jedoch nicht, wer Jesus wirklich ist, und verneigen sich nicht vor ihm. Ähnliche Hinweise finden sich im Koran, der letzten göttlichen Schrift, insbesondere in den Versen 15:28, 15:29 und 15:30. In dem genannten Vers wird prophezeit, dass Nathanael Zeuge der Anwesenheit von Bhutas und Grahas um den Menschensohn werden würde, als ob sich die Türen zum Himmel geöffnet hätten. Der Ausdruck „auf- und absteigend“ bezeichnet das Kommen und Gehen, während „auf den Menschensohn herabsteigen“ die Ankunft der Engel bei Jesus impliziert. Als Nathanael Jesus als den Sohn Gottes anerkannte, versicherte ihm Jesus in Vers 50, dass er Zeuge noch größerer Phänomene werden würde, da er Nathanaels Weisheitsvision erkannte. Es folgt Vers 51, in dem es heißt, dass Nathanael, er hatte ein weises* Auge , Dinge wahrnehmen konnte, die über das gewöhnliche Sehvermögen anderer hinausgingen. Die in Vers 51 beschriebenen Ereignisse sind nur für diejenigen sichtbar, die über göttliche Weisheit verfügen, und geben Einblick in die wahre Identität Jesu.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 88,
verse: `<b>(10)	Das Johannesevangelium, 3. Kapitel, 3. Vers.</b>`,
meaning: ` <b>
(3) Jesus antwortete: „Wahrlich, ich sage euch: Niemand kann das Reich Gottes sehen, es sei denn sie werden wiedergeboren. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der Vers sollte nicht wörtlich interpretiert werden, da er eine tiefere, symbolische Bedeutung hat. Gott und sein Reich sind für niemanden physisch sichtbar. Jesus brachte ausdrücklich zum Ausdruck, dass das Verstehen und Wahrnehmen des Reiches Gottes eine geistliche Wiedergeburt erfordert. Dies bedeutet nicht einen physischen Tod und eine anschließende Wiedergeburt. Wörtlich genommen würde es bedeuten, dass jeder, der Gott kennenlernen möchte, einen physischen Tod erleiden müsste, was ein Missverständnis ist. Nikodemus, der eine wörtliche Interpretation vertrat, stellte eine Frage, die auf diesem Missverständnis beruhte.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 89,
verse: `<b>(11)	Das Johannesevangelium, 3. Kapitel, 4., 5., 6., 7. und 8. Vers.</b>`,
meaning: `<b>
(4) „Wie kann jemand geboren werden, wenn er alt ist?“ fragte Nikodemus. „Sicherlich können sie nicht ein zweites Mal in den Mutterleib eintreten, um geboren zu werden!“
<br><br>
(5) Jesus antwortete: „Wahrlich, ich sage euch: Niemand kann in das Reich Gottes kommen es sei denn, sie werden aus Wasser und dem Geist (Atma) geboren.
<br><br>
(6) Fleisch gebiert Fleisch, aber der Geist (Atma) gebiert Geist.
<br><br>
(7) Es sollte dich nicht überraschen, dass ich sage: „Du musst wiedergeboren werden.“
<br><br>
(3:8) Der Wind weht, wohin er will. Man hört sein Geräusch, kann aber nicht sagen, woher es kommt oder wohin es geht. So ist es auch mit jedem, der aus dem Geist (Atma) geboren wurde.“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wenn ein Mensch stirbt und wiedergeboren wird, nennt man das Wiedergeburt. Erfolgt die Wiedergeburt k&ouml;rperlich, ver&auml;ndern sich alle Organe des Menschen. Wenn das geschieht, wird auch der Wunsch, Gott und Gottes K&ouml;nigreich zu sehen, verschwinden. Der K&ouml;rper sollte nicht sterben, um die Organe und Ambitionen so zu erhalten, wie sie sind. Der K&ouml;rper enth&auml;lt sowohl Weisheit als auch Unwissenheit, aber die Unwissenheit im K&ouml;rper sollte vollst&auml;ndig sterben. Wenn ein Mensch unwissende Gedanken und W&uuml;nsche loswird, gilt er als in Unwissenheit tot und aus Weisheit geboren. Man kann sagen, dass jemand, der sich von der Unwissenheit befreit und Weisheit erlangt, aus Atma geboren ist. <strong>Die Pflicht des Menschen besteht darin, Atma im K&ouml;rper zu kennen</strong>. Um Atma zu kennen, muss man Atmas Weisheit kennen. Wenn ein Mensch die Weisheit von Atma kennt, gilt er als aus Atma geboren. Wenn der K&ouml;rper stirbt, bekommt ein Mensch einen neuen K&ouml;rper, aber seinen Willen im selben K&ouml;rper zu &auml;ndern, ohne einen neuen K&ouml;rper zu bekommen, ist wie eine neue Geburt. Der Wind weht, wohin er will, und wir h&ouml;ren sein Ger&auml;usch, je nachdem, wo er weht. Wenn der Wind seine Richtung &auml;ndert und ein Mensch sein Ziel &auml;ndert, ist das eine Neugeburt f&uuml;r ihn. Wer Atma begehrt, kennt Atma im selben K&ouml;rper und im selben Leben. Es ist nicht n&ouml;tig, in ein anderes Leben zu gehen, um Atma zu kennen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 90,
verse: `<b>(12)	Das Johannesevangelium, 3. Kapitel, 13. Vers. </b>`,
meaning: `<b>
(13) Niemand ist jemals nach Paraloka gegangen, außer dem, der aus Paraloka kam – der Menschensohn. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Ihaloka, Himmel (Swarga-Loka), H&ouml;lle (Naraka-Loka) und Paraloka sind die Namen der vier Welten. Die Welt (Loka), in der wir alle leben, hei&szlig;t Ihaloka. Himmel und H&ouml;lle sind keine getrennten Welten; beide sind auf der Erde. Loka ist weder ein K&ouml;nigreich noch ein Territorium. Der Ort und die Zeit der gemeinsamen Erfahrung werden Loka genannt. Der Ort, an dem man Not erlebt, wird Yamaloka, Naraka-Loka oder H&ouml;lle genannt. Ebenso wird der Ort, an dem man Gl&uuml;ck erlebt, Swarga-Loka oder Himmel genannt. Da diese beiden Erfahrungen auf der Erde stattfinden, kann man sagen, dass diese Welt (Ihaloka) sowohl Himmel als auch H&ouml;lle ist. Paraloka unterscheidet sich jedoch von H&ouml;lle und Himmel. W&auml;hrend sowohl die H&ouml;lle als auch der Himmel Erfahrungen beinhalten, hat Paraloka keine Erfahrungen. Der Zustand, in dem es keine Erfahrung gibt, wird Paraloka genannt. Wenn eine Person Karma transzendiert, erf&auml;hrt sie weder Gl&uuml;ck noch Leid und tritt in Paraloka ein. Man nennt ihn den Zustand des Einsseins mit Gott, Mukti oder Moksham. Eine Person in Ihaloka ist immer an S&uuml;nde und Punya-Karma gebunden. Wer in Paraloka ist, hat kein Karma. Wenn eine Person in Ihaloka stirbt, kann sie nicht nach Paraloka gehen, sondern nach Ihaloka zur&uuml;ckkehren. Andererseits kehrt eine Person in Paraloka, wenn sie aus irgendeinem Grund auf die Welt kommt, nach Paraloka zur&uuml;ck. Obwohl der Bewohner von Paraloka, der aus Paraloka kam, gem&auml;&szlig; Seinem Willen einige Zeit auf dieser Welt bleibt, wird Er daher sp&auml;ter in Paraloka eintreten. Daher der Vers &bdquo;<strong>Niemand ist jemals nach Paraloka gegangen, au&szlig;er dem Menschensohn, der in Paraloka ist</strong>&bdquo;Impliziert, dass derjenige, der in Paraloka ist, Gott ist. Selbst wenn jemand, der Gott wurde, als Mensch geboren wird, wird er nach Paraloka zur&uuml;ckkehren. Das Gleiche kommt in Johannes 3,13 zum Ausdruck.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 91,
verse: ` <b>(13)	Das Johannesevangelium, 3. Kapitel, 15. Vers.</b>`,
meaning: `<b>
(15) Damit jeder, der an ihn glaubt, nicht verloren geht, sondern ewiges Leben hat.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jeder, der an Gott glaubt, wird ewiges Leben erlangen, ohne den Tod zu erleiden. Es steht jedoch geschrieben: &bdquo;Ewiges Leben gibt es nur durch Ihn.&ldquo; Paramatma existiert sowohl innerhalb als auch au&szlig;erhalb des K&ouml;rpers. <strong>Wenn Jeevatma mit Paramatma verschmilzt, hei&szlig;t es, dass Jeevatma Paraloka erreicht hat, das auch als das Reich Gottes anerkannt wird</strong>. Man kann auch sagen, dass Jeevatma ewiges Leben (moksham) erlangt hat. In dem Vers hei&szlig;t es: &bdquo;Wer an Gott glaubt, wird letztendlich vom Karma befreit und erh&auml;lt ewiges Leben.&ldquo; Paraloka, der das ewige Leben repr&auml;sentiert, durchdringt alles Folglich vereint sich jeder, der Moksham erreicht, mit dem Heiligen Geist (Paramatma) in seinem K&ouml;rper.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 92,
verse: `<b>(14)	Das Johannesevangelium, 3. Kapitel, 17. Vers.</b>`,
meaning: `<b>
(17) Denn Gott hat seinen Sohn nicht in die Welt gesandt, um die Welt zu richten, sondern um die Welt durch ihn zu retten. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Gott sandte seinen Sohn als Mensch in die Welt, um die Menschen zu retten, nicht um sie zu richten. Die Verantwortung des Mannes, der von Gott kam, besteht darin, den Menschen Gottes Weisheit zu lehren und sie von ihren Sünden zu retten. Er kam nicht, um die Sünden und Punya der Menschen zu richten. Gott hat seinen Stellvertreter nicht zum Gericht auf die Erde geschickt; Stattdessen kam er, um Menschen zu retten. Dieser Vers ist in der Bibel von entscheidender Bedeutung. Atma richtet einen Menschen, wenn er stirbt. Der Einer, der von Gott kam, lehrt die Menschen, wie sie dem Karma entkommen können, während der Atma die Aufgabe übernimmt, sie zu richten.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 93,
verse: `<b>(15)	Das Johannesevangelium, 3. Kapitel, 18. Vers. </b>`,
meaning: `<b>
(18) Wer an ihn glaubt, wird nicht gerichtet, aber wer nicht glaubt, wird bereits gerichtet, weil er nicht an den Namen des einzigen Sohnes Gottes geglaubt hat. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der Vers sagt: &bdquo;Einer, der an ihn glaubt&ldquo;, was sich entweder auf den unsichtbaren Gott oder den sichtbaren Gottesvertreter bezieht, der von Gott kam. In dem Vers hei&szlig;t es auch: &bdquo;Sie haben nicht an den Namen des einzigen Sohnes Gottes geglaubt&ldquo;, was bedeutet, dass er so verstanden werden sollte, dass er sich auf den Vertreter Gottes bezieht, der von Gott kam. Gott selbst kam in der Gestalt eines Menschen auf die Erde, um den Menschen Weisheit zu lehren. Jesus sagte, "<strong>Ich bin der Sohn Gottes oder der Menschensohn oder Gottes einziger Sohn</strong>&bdquo;, um nicht erkannt zu werden. Im Hinduismus wird Gott Bhagavan genannt, wenn er sich verkleidet und als Mensch auf die Erde kommt. Krishna ist derjenige, der so kam; daher wird Er in der Bhagavad-Gita Bhagavan genannt. Obwohl Jesus, der Sohn Gottes, als Mensch erschien, sollte er auch Bhagavan genannt werden. Wenn Gott als Mensch auf der Erde inkarniert, nennen ihn Hindus Bhagavan und Christen nennen ihn Menschensohn. W&auml;hrend es in der letzten g&ouml;ttlichen Schrift (15:28, 29, 30) hei&szlig;t, dass <strong>Gott sendet seinen Vertreter, indem er ihm seine Seele einhaucht</strong>Muslime glauben, dass Gott nicht als Mensch kommt. Wer nicht an Gottes Stellvertreter, den Sohn Gottes, glaubt, ist bereits gerichtet.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 94,
verse: `<b>(16) Das Johannesevangelium, 3. Kapitel, 19., 20., 21. Vers.</b>`,
meaning: ` <b>
(19) Dies ist das Urteil: Licht ist in die Welt gekommen, aber die Menschen liebten die Dunkelheit anstelle des Lichts, weil ihre Taten böse waren.
<br><br>
(20) Jeder, der Böses tut, hasst das Licht und wird nicht ins Licht kommen, aus Angst, dass seine Taten aufgedeckt werden.
<br><br>
(21) Wer aber in der Wahrheit lebt, der kommt ins Licht, damit deutlich wird, dass das, was er getan hat, vor Gott getan wurde. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Paramatma, der niemandem bekannt ist, symbolisiert die Dunkelheit. Atma, von Paramatma ins Leben gerufen, verk&ouml;rpert das wahre Licht. Paramatma hat zwei S&ouml;hne erschaffen: einen unsichtbaren Atma, der als Licht im K&ouml;rper dient, und einen weiteren Atma, der als Mensch unter Menschen inkarniert. W&auml;hrend der Atma, der unsichtbar ist und den K&ouml;rper erleuchtet, als Sohn bezeichnet wird, wird der andere Sohn Gottes, der sich als Mensch manifestiert, eindeutig bezeichnet <strong>der eingeborene Sohn</strong>. Jesus, der eingeborene Sohn, stieg auf die Erde herab. Aufgrund ihrer b&ouml;swilligen Taten hegten die Menschen jedoch ihre eigene Dunkelheit und hielten sich davon fern, sich Jesus, dem Licht der Weisheit, zu n&auml;hern.

  Jeder unwissende Mensch hegt Abneigung gegen den Vertreter Gottes, der das bringt <strong>Licht der Weisheit </strong>zur Welt. Sie bef&uuml;rchten, dass ihre sch&auml;ndlichen Taten in der Gegenwart des Vertreters Gottes aufgedeckt werden, was sie dazu verleitet, das Licht zu meiden ihre Taten verheimlichen. Diejenigen, die erwarten, dass Gottes Licht, das auf der Erde menschliche Gestalt annimmt, ihre dunklen Taten enth&uuml;llen wird, vermeiden es, zum Sohn Gottes zu kommen, wenn Er erscheint. Diejenigen, die an Gottes Weisheit festhalten, verstehen, dass Atma f&uuml;r alle ihre Handlungen im K&ouml;rper verantwortlich ist. Sie n&auml;hern sich dem Sohn Gottes, weil alle ihre Taten im Innern geschehen <strong>Gottes Licht, geleitet von Weisheit</strong>. Allerdings erkennt nur ein kleiner Teil der Menschen auf der Erde, dass Atma, der Gott ist, f&uuml;r alle ihre Handlungen verantwortlich ist. Folglich n&auml;hert sich nur eine begrenzte Anzahl dem Sohn Gottes, wenn er erscheint. Da die Erde von Individuen bev&ouml;lkert ist, die glauben, dass sie allein f&uuml;r ihre Taten verantwortlich seien, verzichten sie darauf, den Sohn Gottes zu suchen. Sie halten sich nicht nur vom Sohn Gottes fern, sondern hegen auch Feindseligkeit und belasten den Stellvertreter Gottes, der nur selten auf der Erde erscheint. Sie verspotten den Sohn Gottes und unterwerfen ihn zahlreichen Drangsalen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 95,
verse: ` <b>(17)	Das Johannesevangelium, 5. Kapitel, 19. Vers.</b>`,
meaning: ` <b>
(19) Jesus gab ihnen diese Antwort: „Wahrlich, wahrlich, ich sage euch: Der Sohn kann nichts allein tun; Er kann nur das tun, was er seinen Vater tun sieht, denn was auch immer der Vater tut, tut auch der Sohn.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In diesem Vers geht die Erw&auml;hnung von &bdquo;Vater und Sohn&ldquo; mit der Aussage einher, dass &bdquo;der Sohn tun wird, was der Vater tut.&ldquo; Es ist von entscheidender Bedeutung, die Identit&auml;t von Vater und Sohn zu erkennen, da der Heilige Geist (Gott) der einzige ist. Obwohl Gott einen ewigen Sohn hat, gibt es auch einen anderen Sohn, der gelegentlich auf der Erde inkarniert. Es ist wichtig herauszufinden, an welchen Sohn sich der Vers richtet. Johannes 3:17 betont: &bdquo;<strong>Denn Gott hat seinen Sohn nicht in die Welt gesandt, um die Welt zu verurteilen, sondern um die Welt durch ihn zu retten</strong>&bdquo;bezieht sich auf Gottes Sohn, der sich auf der Erde manifestiert. Dieser Vers (5:19) bezieht sich auf den Sohn Atma, der als Licht im menschlichen K&ouml;rper dient. Atma ist ewig auf der Erde und sorgt f&uuml;r &bdquo;<strong>das Licht der Mobilit&auml;t</strong>&rsquo; auf den K&ouml;rper eines jeden. Auf dieser Grundlage sollte man, insbesondere beim Lesen des Verses, feststellen, von welchem der beiden S&ouml;hne Gott, der Heilige Geist, in dem Vers gesprochen hat. Johannes 5:19 charakterisiert Atma als Gottes ewigen Sohn und besagt, dass Atma die Handlungen des Heiligen Geistes widerspiegelt und sich ausschlie&szlig;lich mit vom Vater geerbten Aufgaben besch&auml;ftigt und nichts selbstst&auml;ndig tut.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 96,
verse: `<b>(18)	Das Johannesevangelium, 5. Kapitel, 20. Vers.</b>`,
meaning: ` <b>
(20) Denn der Vater liebt den Sohn und zeigt ihm alles, was er tut. Ja, und Er wird Ihm noch größere Werke als diese zeigen, sodass Sie staunen werden.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wenn wir fragen, wer gesagt hat: &bdquo;<strong>Paramatma (der Heilige Geist) liebt den Sohn und zeigt ihm alles, was er tut</strong>&bdquo;Wir finden, dass Jesus, der zweite Sohn Gottes, diese Worte zu seinen J&uuml;ngern sprach, als er auf der Erde war. Niemand konnte den Sohn Gottes vollst&auml;ndig erkennen, als er als Mensch unter den Menschen wandelte. Trotz seiner Lehren und Wunder erlitten einige f&uuml;r ihn gro&szlig;es Leid und Dem&uuml;tigungen, was letztendlich zu seinem Tod f&uuml;hrte. Doch Gottes einziggezeugter Sohn namens Jesus war in ihrer Mitte und sagte: &bdquo;<strong>Der</strong><strong> Vater wird Ihm (Atma) noch gr&ouml;&szlig;ere Werke als diese zeigen, sodass du staunen wirst</strong>.&ldquo; Gott befahl Atma, &uuml;ber die Jeevas zu herrschen und noch Gr&ouml;&szlig;eres zu zeigen. Lassen Sie uns nun untersuchen, was diese gro&szlig;artigen Dinge sind.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 97,
verse: `<b>(19)	Das Johannesevangelium, 5. Kapitel, 21., 22., 23. Vers. </b>`,
meaning: `<b>
(21) Denn so wie der Vater die Toten auferweckt und ihnen Leben gibt, so macht auch der Sohn lebendig, wem er es geben möchte.
<br><br>
(22) Darüber hinaus richtet der Vater niemanden, sondern hat das gesamte Urteil dem Sohn anvertraut.
<br><br>
(23) Damit alle den Sohn ehren, so wie sie den Vater ehren. Wer den Sohn nicht ehrt, ehrt nicht den Vater, der ihn gesandt hat.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Hier gibt es etwas Bemerkenswertes. Obwohl es eine Erw&auml;hnung gibt von &bdquo;<strong>zwei Allahs</strong>Im Koran konnten Muslime es nicht finden. Ebenso wird erw&auml;hnt: &bdquo;<strong>zwei S&ouml;hne</strong>&ldquo; in der Bibel, aber Christen konnten es nicht verstehen und nur von einem Sohn sprechen. Alle drei dieser Verse haben das Wort &bdquo;Sohn&ldquo;. Man muss bestimmen, welcher der beiden S&ouml;hne in diesen Versen erw&auml;hnt wird. Viele k&ouml;nnen nicht verstehen, dass es einen zweiten Sohn gibt, weil in den Versen jeweils nur ein Sohn erw&auml;hnt wird. Gott sagte, "<strong>Denn Gott hat seinen Sohn nicht in die Welt gesandt, um die Welt zu richten, sondern um die Welt durch ihn zu retten&ldquo; in Johannes 3:17 und &bdquo;Der Vater hat alles Gericht dem Sohn anvertraut&ldquo; in Johannes 5:22</strong>. Auf dieser Grundlage sollte man verstehen, dass Gott zwei S&ouml;hne hat.

  Gott sagte &uuml;ber Atma: &bdquo;So wie der Vater, der Heilige Geist, die Toten auferweckt und ihnen Leben gibt, so erweckt auch der Sohn die Toten auf und gibt ihnen Leben.&ldquo; So wie der Vater die Toten auferweckt und Leben schenkt, entscheidet Atma &uuml;ber die n&auml;chsten Lebenserfahrungen eines Menschen nach dem Tod, basierend auf den S&uuml;nden und Punya seines vergangenen Lebens. Daher hei&szlig;t es in dem Vers: &bdquo;Wie der Vater gibt auch der Sohn Leben, wem er gef&auml;llt.&ldquo; &bdquo;<strong>Wen Er mag</strong>" bedeutet "<strong>diejenigen, die vom Karma bestimmt sind</strong>&ldquo; aus Atmas Sicht. Da Atma das verborgene Licht im K&ouml;rper ist, das das Karma eines Menschen im n&auml;chsten Leben bestimmt, hei&szlig;t es in dem Vers: &bdquo;Er wird den wiederbeleben, den er gerichtet hat.&ldquo; &bdquo;Auferstehen&ldquo; bedeutet &bdquo;wiedergeboren werden&ldquo;.

  Gott gab Atma die Macht, die Toten zu richten und sie wieder zum Leben zu erwecken, damit jeder seinen Sohn Atma verherrlichen konnte, so wie jeder den Heiligen Geist als den gro&szlig;en Gott verherrlicht. Im Moment des Todes eines Menschen bestimmt Atma, das Licht im K&ouml;rper, sein Karma f&uuml;r das zweite Leben auf der Grundlage der S&uuml;nden und Punya seines vergangenen Lebens und f&uuml;hrt ihn sofort in das zweite Leben. Atma entscheidet auf der Grundlage des Karmas der Person &uuml;ber das zweite Leben und gibt ihr wieder Leben. Diejenigen, die nicht wissen, dass Atma so gro&szlig;e Dinge tut, sehen Atma nicht mit gro&szlig;em Respekt. Wer Atma nicht respektiert, wird Gott, der Atma gesandt hat, nicht respektieren. Solche Unwissenheit respektiert weder Atma, das im K&ouml;rper ist, noch Paramatma, das innerhalb und au&szlig;erhalb des K&ouml;rpers ist.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 98,
verse: `<b>(20)	Das Johannesevangelium, 5. Kapitel, 24. Vers.</b>`,
meaning: ` <b>
(24) Wahrlich, wahrlich, ich sage euch: Wer mein Wort hört und dem glaubt, der mich gesandt hat, der hat ewiges Leben und wird nicht gerichtet, sondern ist vom Tod zum Leben übergegangen. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Zuvor wurde in den Versen 5:21, 5:22 und 5:23 die Seele (Atma) besprochen, die die Beweglichkeit im Körper darstellt. In Vers 5:24 geht es um die Seele, die in menschlicher Form mit dem Namen Jesus kam. Wer an den Heiligen Geist glaubt, der Jesus, den eingeborenen Sohn, gesandt hat, wird Moksham erreichen. Eine solche Person erlangt Moksham, ohne sich unmittelbar nach ihrem Tod einem Urteil zu unterziehen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 99,
verse: ` <b>(21)	Das Johannesevangelium, 5. Kapitel, 26. Vers.</b>`,
meaning: ` <b>
(26) Denn wie der Vater Leben in sich selbst hat, so hat er auch dem Sohn gegeben, Leben in sich selbst zu haben.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Gott, der Heilige Geist, ist ewig und ewig. So wie Paramatma ewig ist, wurde Atma, seinem Sohn, die Autorität verliehen, für immer ewig zu sein. Der Heilige Geist, der Vater von Atma, verlieh ihm diese Autorität. In der ersten göttlichen Schrift wird Jeevatma beim Vergleich von Jeevatma mit Atma als Kshara (vergängliche Seele) bezeichnet, während Atma als Akshara (unvergängliche Seele) bezeichnet wird.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 100,
verse: ` <b>(22)	Das Johannesevangelium, 5. Kapitel, 37. Vers.</b>`,
meaning: `<b>
(37) Du hast seine Stimme nie gehört und seine Gestalt nie gesehen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In diesem Zusammenhang bezieht sich „Sein“ auf Paramatma (den Heiligen Geist). Gott, bekannt als Paramatma oder der Heilige Geist, hat keinen Namen, keine Form oder bestimmte Aufgaben. Niemand hat einen solchen Gott gesehen, weil ihm eine erkennbare Form fehlt. Folglich hat noch nie ein Mensch Gott gesehen. Gott kommuniziert mit niemandem, da er untätig bleibt. Daher kann man behaupten, dass kein lebender Mensch Gott wirklich gesehen hat. Jede Behauptung, man habe Gott bezeugt, kann als falsch angesehen werden. Gott ist weder sichtbar noch stimmlich.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 101,
verse: `<b>(23)	Das Johannesevangelium, 5. Kapitel, 38. Vers. </b>`,
meaning: `<b>
(38) Sein Wort wohnt auch nicht in euch, denn ihr glaubt dem, den Er gesandt hat, nicht.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Obwohl der erste Sch&ouml;pfer, der Heilige Geist, sich nicht aktiv an der Arbeit beteiligt, gibt es bestimmte Verantwortlichkeiten, die in seinen Zust&auml;ndigkeitsbereich fallen. Dennoch verzichtet Er auf direkte Ma&szlig;nahmen. Stattdessen hat Gott, Paramatma, seine Diener mit der Ausf&uuml;hrung seiner Arbeit beauftragt. Diese Millionen von Dienern bilden sein Herrschaftsgebiet und f&uuml;hren alle ihm zugewiesenen Aufgaben aus. W&auml;hrend Gott selbst unt&auml;tig bleibt, erf&uuml;llen seine Diener die Rollen, die er &uuml;bernehmen soll. Paramatma hat jedoch eine entscheidende Aufgabe vor sich &ndash; die Vermittlung g&ouml;ttlicher Weisheit. F&uuml;r diese Aufgabe ist Gott selbst erforderlich, da seine Diener sie nicht erf&uuml;llen k&ouml;nnen. In der letzten Bibelstelle hei&szlig;t es: &bdquo;<strong>Gott sollte Gottes Weisheit lehren, denn niemand au&szlig;er Gott kennt Gottes Weisheit</strong>.&ldquo; Verkleidet kommt Gott, um die Weisheit zu lehren von Gott. Obwohl Er verkleidet spricht, bleibt seine Identit&auml;t unbekannt, da niemand den Verkleideten erkennen kann. Obwohl Gott seine Weisheit vermittelt, wird sie oft nicht als seine Worte erkannt. Da Gott weise ist, nimmt er die Gestalt von &bdquo;<strong>Bhagavan</strong>&ldquo; und vermittelt Weisheit.

  Selbst wenn Gott pers&ouml;nlich als Mann verkleidet auf die Erde kommt, um Weisheit zu lehren, sagt er auch voraus, dass er einen besonderen Mann schickt, dessen wahre Identit&auml;t unbekannt bleiben wird. &bdquo;Wer von Gott kommt, wird Gottes Weisheit lehren&ldquo;, erkl&auml;rte Gott selbst in seinen g&ouml;ttlichen Schriften. Folglich erwartet jeder, dass der von Gott Gesandte Gottes Weisheit &uuml;bermitteln wird. Somit bleibt die Menschwerdung Gottes f&uuml;r alle verborgen. Obwohl Gott w&auml;hrend des Treta Yuga als Mensch auf die Erde kam, erkannte ihn niemand. W&auml;hrend des Dvapara Yuga kam Gott als Mensch und vermittelte die Lehren der Bhagavad-Gita und erkl&auml;rte sie sogar <strong>"Ich bin Gott" </strong>in der Bhagavad-Gita, doch niemand erkannte Ihn. Als Gott im Kali Yuga als Jesus inkarnierte, erkannte ihn niemand, was ihn vor zahlreiche Herausforderungen stellte. Niemand erkannte, dass Er der wahre Gott war. Einige, die behaupteten, Gottes Gl&auml;ubige zu sein, behaupteten, Jesus sei der Menschensohn, erkannten ihn jedoch nicht als Gott an. Andere identifizierten Jesus als den Sohn Gottes, erkannten aber dennoch nicht seine G&ouml;ttlichkeit an.

  Obwohl Jesus der menschgewordene Gott war, erkl&auml;rte er: &bdquo;<strong>Du hast dem nicht geglaubt, den Er gesandt hat</strong>&ldquo; in diesem Vers, ohne seine wahre Identit&auml;t preiszugeben. Er brachte zum Ausdruck, dass den Menschen das Vertrauen in den von Gott gesandten Mann fehlte, und erkl&auml;rte: &bdquo;Gottes Wort lebte nicht in euch.&ldquo; Wenn es keinen Glauben an den von Gott gesandten Mann gibt, warum findet Gottes Wort dann bei den Menschen keinen Anklang? Der Grund liegt im Unglauben an den g&ouml;ttlichen Boten, der Gott selbst und der Tr&auml;ger der Weisheit ist. Folglich kann Gottes Wort bei denen keine Wurzeln schlagen, denen es an Glauben an Ihn mangelt.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 102,
verse: ` <b>(24)	Das Johannesevangelium, 6. Kapitel, 25., 26., 27. Vers.</b>`,
meaning: ` <b>
(25) Als sie ihn auf der anderen Seite des Sees fanden, fragten sie ihn: „Rabbi, wann bist du hier angekommen?“
<br><br>
(26) Jesus antwortete: „Wahrlich, ich sage euch: Ihr sucht mich, nicht weil Du hast die Zeichen gesehen, die ich vollbracht habe, aber weil du die Brote gegessen hast und satt geworden bist.
<br><br>
(27) Arbeitet nicht für eine Speise, die verdirbt, sondern für eine Speise, die bis zum ewigen Leben Bestand hat, das euch der Menschensohn geben wird. Denn Gott, der Vater, hat sein Gütesiegel auf ihn gelegt.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	In diesem Vers werden zwei Arten von Lebensmitteln hervorgehoben: verderbliche Lebensmittel und unverg&auml;ngliche Lebensmittel. Viele Menschen sind auf der Suche nach verderblicher Nahrung, wie es deutlich wurde, als sich eine Menschenmenge Jesus n&auml;herte und fragte: &bdquo;Wann bist du hierher gekommen?&ldquo; Jesus antwortete: <strong>&bdquo;Sie suchen nicht Gottes Weisheit; Du suchst mich und hoffst auf Brote</strong>.&ldquo; Er riet ihnen au&szlig;erdem: &bdquo;M&uuml;ht euch nicht f&uuml;r verderbliche Lebensmittel ab.&ldquo; Zu den verderblichen Lebensmitteln z&auml;hlen allt&auml;gliche Lebensmittel, die innerhalb von drei Stunden verzehrt, verdaut und vernichtet werden. Die Verdauung ist im Wesentlichen ein Prozess der Zerst&ouml;rung, bei dem die gesamte aufgenommene Nahrung im Verdauungstrakt zersetzt und in Abfall umgewandelt wird, &auml;hnlich wie das Verbrennen von Holz zu Asche.&nbsp;

  Im Gegensatz dazu gilt die Weisheit, die ein Mensch durch seine Ohren erwirbt und in Form von Worten in seinen Geist gelangt, als unverg&auml;ngliche Nahrung. <strong>Gottes Weisheit ist die einzige Nahrung, die nicht zerst&ouml;rt werden kann</strong>. <strong>Gottes Weisheit zu lesen oder zu h&ouml;ren ist so, als w&uuml;rde man unverg&auml;ngliche Nahrung f&uuml;r den Geist zu sich nehmen. </strong>Der Menschensohn sorgt f&uuml;r diese unzerst&ouml;rbare Nahrung, wie der Vers zeigt: &bdquo;<strong>Denn Gott, der Vater, hat sein G&uuml;tesiegel auf ihn gelegt.</strong>&bdquo;&sbquo;Siegel&lsquo; bedeutet Annahme oder Entscheidung. Nach dieser Entscheidung sandte Gott seinen eingeborenen Sohn, um seine Weisheit weiterzugeben. Der Begriff &bdquo;G&uuml;tesiegel&ldquo; im Vers bedeutet Gottes Entscheidung oder Zustimmung. Im Koran hei&szlig;t es, dass Gott Seine Weisheit keinem Menschen offenbart hat, und betont, dass derjenige, der Gottes Weisheit weitergibt, kein gew&ouml;hnlicher Mensch ist. Gott behauptete, dass seine Weisheit nur ihm selbst bekannt sei, und implizierte damit, dass der gezeugte Sohn, der kommt, um Gottes Weisheit zu offenbaren, Gott selbst ist. Der Ausdruck &bdquo;der Sohn Gottes&ldquo; mag Menschen irref&uuml;hren, aber er kann als &bdquo;Sohn&ldquo; verstanden werden, was &bdquo;Gottes Manifestation&ldquo; bedeutet. Gott, der sich daf&uuml;r entscheidet, nicht direkt als Gott zu den Menschen zu sprechen, nimmt die Gestalt des Sohnes an. Diese Interpretation findet Unterst&uuml;tzung im folgenden Vers.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 103,
verse: `  <b>(25)	Das Johannesevangelium, 6. Kapitel, 32. Vers. </b>`,
meaning: ` <b>
(32) Jesus sagte zu ihnen: „Wahrlich, ich sage euch: Es ist nicht Mose, der euch das Brot aus Paraloka gegeben hat, sondern mein Vater, der euch das wahre Brot aus Paraloka gibt.“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	In dem erw&auml;hnten Vers erkl&auml;rte Jesus: &bdquo;<strong>Moses hat dir nicht das Brot der Weisheit von Paraloka gegeben</strong>.&ldquo; Dies wirft Fragen auf: Ist das von Moses gelehrte Dharma Shastra falsch? Fehlt es Moses&lsquo; Dharma Shastra an Weisheit in Bezug auf Dharmas? Wenn das, was Moses lehrte, nicht das wahre Brot Gottes ist, warum wird es dann Moses&lsquo; Dharma Shastra genannt? Diese Fragen geben Anlass zu verschiedenen &Uuml;berlegungen. Einerseits ist es falsch zu behaupten, dass das, was Moses lehrte, kein Dharma Shastra sei. Andererseits kann im Einklang mit Gottes Aussage behauptet werden, dass das, was Moses lehrte, nicht Dharma Shastra ist. Es stimmt auch, dass Moses aus Paraloka kein unverg&auml;ngliches Brot lieferte. Solche Fragen und Zweifel entstehen und erfordern angemessene Antworten, um die wahre g&ouml;ttliche Weisheit zu verstehen.

  Der Prophet Moses ist unter Christen wohlbekannt, doch vielen Muslimen ist vielleicht nicht bewusst, dass sich der Name &bdquo;Moses&ldquo; in der Bibel im Laufe von 1400 Jahren in &bdquo;Musa&ldquo; verwandelte. Es ist wichtig zu beachten, dass Moses und Musa tats&auml;chlich denselben Namen haben. Die Aussage, dass Moses das Dharma Shastra nicht &uuml;bermittelt habe, kann sowohl wahr als auch falsch sein und eine faszinierende Zweideutigkeit mit einem starken, unbekannten Grund darstellen. Diese Offenbarung mag einige &uuml;berraschen und bei anderen auf Uneinigkeit sto&szlig;en, aber ihre Wahrheit bleibt unabh&auml;ngig von Meinungen. Es ist wahr, dass der Prophet Moses vor einigen tausend Jahren existierte. Vor etwa f&uuml;nftausend Jahren teilte der Prophet Moses die Weisheit, die er besa&szlig;. Ein Prophet ist per Definition jemand, der Gottes Weisheit vermittelt, und Moses hat sich diesen Titel schon in jungen Jahren durch g&ouml;ttliche Gedanken erworben. Im Alter von 20 Jahren <strong>Bhagavan</strong>, der auf die Erde herabgestiegen war, versorgte Moses mit der ersten g&ouml;ttlichen Schrift, bekannt als &bdquo;<strong>Taurath</strong>.&lsquo; Moses teilte weiterhin die Weisheit, die in dieser Schriftstelle enthalten ist.

  Da es in Dharmas verwurzelt war, wurde es als Moses&lsquo; Dharma Shastra bekannt. Moses starb im Alter von 54 Jahren. Nach Moses&lsquo; Tod trat Bhagavan in seinen K&ouml;rper ein und &uuml;bermittelte Dharmas, von denen Moses neun Jahre lang nie gesprochen hatte. Trotz Bhagavan Diese Tatsache blieb unbekannt, als er Moses&lsquo; K&ouml;rper im Alter von 63 Jahren verlie&szlig;, was die Menschen zu der Annahme veranlasste, dass der Prophet Moses 63 Jahre gelebt und die Dharmas selbst gelehrt hatte. Obwohl Gott Moses eine g&ouml;ttliche Schrift gab, vermittelte er ihm Weisheit nicht direkt. Daher ist die Aussage wahr: &bdquo;Moses wurde das Brot von Paraloka nicht gegeben.&ldquo; Die Weisheit, die Gott durch Moses&lsquo; K&ouml;rper vermittelt, ist als Moses&lsquo; Dharma Shastra bekannt. Aus diesem Grund hei&szlig;t es in dem Vers: &bdquo;Der Vater von Paraloka, der Heilige Geist, gab wahres Brot.&ldquo; Die tats&auml;chliche Lebenserwartung von Moses betrug 54 Jahre, und niemand wusste, dass Gott die Lebenserwartung von Moses auf 63 Jahre verl&auml;ngerte. Alle diese Geheimnisse werden in meiner Schrift erl&auml;utert, <strong>Krishna Musa</strong>.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 104,
verse: ` <b>(26)	Das Johannesevangelium, 6. Kapitel, 47. Vers.</b>`,
meaning: `<b>
(6:47) Niemand hat den Vater gesehen außer dem, der von Gott ist; nur Er hat den Vater gesehen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Diesen Vers zu verstehen ist keine schwierige Aufgabe. Wenn man die Bhagavad-Gita, die Bibel und den Koran in ihrer Gesamtheit liest, wird deutlich, dass die Verse in diesen letzten g&ouml;ttlichen Schriften subtile Bedeutungen haben. Insbesondere die Verse des Korans haben eine Tiefe, die andere g&ouml;ttliche Schriften &uuml;bertrifft, sodass ihre Bedeutung f&uuml;r viele schwer fassbar ist. Auch wenn Verse in der Bibel einfach erscheinen m&ouml;gen, entzieht sich ihre wahre Realit&auml;t oft dem Verst&auml;ndnis. Folglich sorgt Gott durch uns f&uuml;r ein umfassendes Verst&auml;ndnis jedes Verses.

  Gott, dargestellt als der Heilige Geist, existiert sowohl vor als auch nach der Sch&ouml;pfung. Er ist der prim&auml;re Gott. Die wahre Erscheinung oder Natur Gottes bleibt den Menschen unbekannt. In der letzten g&ouml;ttlichen Schrift, dem Koran, wird der prim&auml;re Gott Allah genannt, und der zweite Gott, Atma, wird ebenfalls als Allah bezeichnet. Daher ist Paramatma der erste Allah und Atma der zweite Allah. In der zweiten g&ouml;ttlichen Schrift, der Bibel, wird Paramatma als Gott bezeichnet und Atma als Vater. Es ist von entscheidender Bedeutung zu erkennen, dass der Heilige Geist der Vater von Atma und Atma der Vater der Menschen ist. Der Koran best&auml;tigt, dass sowohl Paramatma als auch Atma G&ouml;tter sind, w&auml;hrend die Bibel den einen als Gott und den anderen als den Vater unterscheidet. Es ist wichtig zu verstehen, dass der Vater der Menschheit Atma und der Vater von Atma der Heilige Geist ist. Der Vers betont, dass kein Mensch den Vater (Atma) gesehen hat und die Natur von Atma nicht kennt. <strong>Allerdings ist Atma der Einzige, der von Gott stammt und daher Zeuge seines Vaters, des Heiligen Geistes, geworden ist. Im Gegensatz dazu hat Jeevatma seinen Vater Atma nie gesehen.</strong></div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 105,
verse: `<b>(27)	Das Johannesevangelium, 7. Kapitel, 37. und 38. Vers.</b>`,
meaning: ` <b>
(37) Am letzten und größten Tag des Festes stand Jesus da und sagte mit lauter Stimme: „Wer durstig ist, der komme zu mir und trinke.“
<br><br>
(38) Wer an mich glaubt, dem werden, wie die Heilige Schrift sagt, Ströme lebendigen Wassers aus seinem Inneren fließen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der Vers hat eine subtile Bedeutung. So wie ein durstiger Mensch von Natur aus nach Wasser strebt, wird das Streben nach Weisheit mit Durst verglichen. Der Vers besagt:&bdquo;<strong>Wer nach Weisheit d&uuml;rstet, soll zu mir kommen und seinen Durst stillen</strong>.&ldquo; Wenn sich jemand Jesus n&auml;hert und g&ouml;ttliche Weisheit empf&auml;ngt, ist das so, als w&uuml;rde man ihn zufriedenstellen <strong>Durst nach Weisheit </strong>von Jesus. Wer an Jesus glaubt, erlangt vollkommene g&ouml;ttliche Weisheit, wird zum Aufbewahrungsort der Weisheit und teilt sie mit anderen. Jesus verk&uuml;ndete, dass aus ihrem Inneren Str&ouml;me lebendigen Wassers flie&szlig;en w&uuml;rden. In diesem Kontext, <strong>Lebendiges Wasser symbolisiert g&ouml;ttliche Weisheit</strong>, das den Menschen Moksham (Befreiung) verleiht und sie in einem ewigen Zustand h&auml;lt. Daher wird Weisheit als lebendiges Wasser bezeichnet. So wie Menschen ihren k&ouml;rperlichen Durst stillen, indem sie Wasser durch den Mund trinken, sollten sie dies auch tun <strong>N&auml;hren Sie ihren Intellekt (Buddhi) mit g&ouml;ttlicher Weisheit, indem Sie durch ihre Ohren h&ouml;ren.</strong></div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 106,
verse: `<b>(28)	Das Johannesevangelium, 8. Kapitel, 12. Vers.</b>`,
meaning: ` <b>
(12) Als Jesus erneut zu den Menschen sprach, sagte er: „Ich bin das Licht der Welt. Wer mir folgt, wird niemals in der Dunkelheit wandeln, sondern das Licht des Lebens haben.“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Gott, bekannt als der Heilige Geist, erschuf Atma, um seine Herrschaft auszu&uuml;ben und durch andere zu wirken. Er erkl&auml;rte Atma zu seinem Sohn und gab ihm die Macht, seine Aufgaben auszuf&uuml;hren. Atma erhielt die Autorit&auml;t, Menschenleben zu nehmen, ein Urteil auf der Grundlage ihres Karmas aus fr&uuml;heren Leben zu f&auml;llen und ihre Wiedergeburt zu erleichtern. In der Rolle eines Richters handelt Atma im Einklang mit dem Karma jedes Einzelnen. Die menschliche Verstrickung in Karma beeinflusst ihre Gedanken, und Atma, der auf dieses Karma reagiert, vermittelt Unwissenheit, wie sie der Einzelne anstrebt. Folglich nehmen mit der Zeit die Adharmas auf der Erde zu.

  Der Heilige Geist oder Gott muss in menschlicher Form als Bhagavan auf der Erde inkarnieren, um Adharmas einzud&auml;mmen und Dharmas zu f&ouml;rdern, wenn Adharmas aufgrund menschlicher Interessen und durch Atma verursachter Unwissenheit entstehen. Wenn Gott die Gestalt eines Menschen annimmt, wird Er Bhagavan genannt. Diese Inkarnation lehrt g&ouml;ttliche Weisheit, ohne seine g&ouml;ttliche Identit&auml;t zu offenbaren, und wird oft als Sohn Gottes bezeichnet, wobei Gott sein Vater ist. Dieser Perspektive zufolge gibt es einen Gott, den Sch&ouml;pfer, der zwei S&ouml;hne hat &ndash; einen als permanenten Atma im Menschen und einen anderen als vor&uuml;bergehenden Sohn in menschlicher Form. Wenn der erste Sohn (Atma) im Menschen Adharmas entwickelt, vermittelt der zweite vor&uuml;bergehende Sohn, der als Mensch inkarniert ist, Dharmas. Somit gibt es nur einen Gott mit zwei S&ouml;hnen. Der Sohn in der Gestalt von Jesus verk&uuml;ndete: &bdquo;<strong>Ich bin das Licht der Welt</strong>.&ldquo; Weisheit verwandelt sich in ein Weisheitsfeuer (Gnana Shakti), das menschliches Karma verbrennt. Jesus verk&ouml;rpert das Feuer der Weisheit und ist das Licht der Weisheit. Er kam, um die Menschheit Weisheit zu lehren, und diejenigen, die seiner Weisheit folgen und sie begreifen, werden nicht in Unwissenheit, sondern in Weisheit leben. Daher erkl&auml;rte Jesus: &bdquo;Wer mir nachfolgt, wird niemals in der Dunkelheit wandeln, sondern das Licht des Lebens haben.&ldquo; Nur Gott, der in menschlicher Form inkarniert, kann das Licht der Weisheit verleihen und Dharmas errichten.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 107,
verse: `<b>(29)	Das Johannesevangelium, 8. Kapitel, 14. Vers.</b>`,
meaning: `<b>
(14) Jesus antwortete: „Auch wenn ich für mich selbst Zeugnis gebe, ist mein Zeugnis gültig, denn ich weiß, woher ich komme und wohin ich gehe.“ Aber Sie haben keine Ahnung, woher ich komme oder wohin ich gehe.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   	Jesus &auml;hnelte in seiner &auml;u&szlig;eren Erscheinung einem gew&ouml;hnlichen Menschen ohne besondere Merkmale. Als Individuen, die in K&ouml;rpern aus Prakruti leben, erscheint die &auml;u&szlig;ere Erscheinung jedes Lebewesens gleich. Auch Jesus stellte sich als gew&ouml;hnlicher Mensch dar. Unter den &Auml;ltesten gibt es ein Sprichwort, dass niemand wei&szlig;, welche Art von Schlange sich in einem Termitenh&uuml;gel aufh&auml;lt, was eine Parallele zur mysteri&ouml;sen Natur der Jeeva in einem K&ouml;rper darstellt. Jeder geborene Jeeva kommt von irgendwoher in einen K&ouml;rper, geleitet von den Entscheidungen des Atma, die auf seinem Karma basieren. Nach Vollendung von Karma und Tod tritt der Jeeva unter dem Urteil des Atma in einen neuen K&ouml;rper ein. Obwohl der Jeeva im K&ouml;rper wohnt, ist er sich seiner Herkunft bei jeder neuen Geburt nicht bewusst. Das Manas (Geist) ist das Organ, das f&uuml;r das Erinnern verantwortlich ist, aber auch es stirbt mit jedem Leben, das vergeht, was zum Verlust der Erinnerung an fr&uuml;here Leben f&uuml;hrt. Folglich erinnert sich ein Mensch, beispielsweise im Alter von 40 Jahren, nur an die letzten 40 Jahre der aktuellen Geburt und nicht an die zahlreichen vorherigen.

  Dieser Vorgang gilt nicht nur f&uuml;r den Menschen, sondern f&uuml;r jedes Lebewesen. Obwohl Jesus wie ein gew&ouml;hnlicher Mensch erscheinen mag, ist es wichtig zu &uuml;berlegen, ob derselbe zyklische Prozess auf ihn zutrifft. Jesus wurde in Israel geboren, was bedeutet, dass er von woanders herkam. Aber er war sich seiner Herkunft bewusst und sagte: &bdquo;<strong>Ich wei&szlig;, woher ich komme</strong>.&ldquo; Im Gegensatz zu gew&ouml;hnlichen Menschen, die sich ihrer zuk&uuml;nftigen Geburt nach dem Tod nicht bewusst sind, war sich Jesus seiner Bestimmung nach dem Tod sehr bewusst. Dieser krasse Unterschied zwischen Jesus und einem gew&ouml;hnlichen Menschen veranlasst einen, nach der Einzigartigkeit Jesu zu fragen. Die Antwort auf diese Frage stellt den Schl&uuml;ssel zur besten Weisheit dar und offenbart, dass Jesus kein gew&ouml;hnlicher Mensch war, sondern mit einem bestimmten Ziel geboren wurde.

  Eine Person, die vor der Geburt mit einem vorher festgelegten Ziel geboren wurde, wird als &bdquo;f&uuml;r eine Sache geboren&ldquo; bezeichnet. Kein Mensch besitzt vor der Geburt einen solchen Zweck. Im Gegensatz dazu wird Gott mit der spezifischen Absicht geboren, den Dharma auf der Erde zu etablieren. Nur Gott und nicht irgendein Mensch hat die F&auml;higkeit, Dharma zu etablieren. Gott bleibt ewig und unver&auml;ndert, unbeeinflusst von Geburt oder Tod, und beh&auml;lt die st&auml;ndige Erinnerung daran. Wenn Gott in Form eines verkleideten Menschen auf der Erde inkarniert, Dharma-Lehren vermittelt und geht, erlebt er nach dem Tod keine Wiedergeburt, ein Schicksal, das gew&ouml;hnlichen Menschen gemeinsam ist. Durch den Tod wird das Manas (Geist) eines Menschen zerst&ouml;rt, aber Gott stirbt weder noch wird er woanders geboren. Er nimmt eine einzigartige Verkleidung als Mensch an, erf&uuml;llt seinen Zweck und kehrt dann zu seinem Ursprung zur&uuml;ck. So erkl&auml;rte Jesus in diesem Vers: &bdquo;<strong>Ich wei&szlig;, wohin ich gehe</strong>&bdquo;, was die Besonderheit der Existenz und Absicht Gottes betont.

  Den Menschen fehlt das Wissen &uuml;ber den Aufenthaltsort oder die Natur Gottes. Wenn Gott als Mensch inkarniert, bleibt sein Ursprung unbekannt. Im Gegensatz zu einer herk&ouml;mmlichen menschlichen Geburt ist die Geburt Gottes eindeutig; Er wird nicht anderswo wiedergeboren, nachdem er an einem anderen Ort gestorben ist. Der allgegenw&auml;rtige Gott, der bereits im Mutterleib existiert, ver&auml;ndert seine Form und scheint als Baby geboren zu werden. Angesichts der Tatsache, dass Gott dort pr&auml;sent ist, wo er geboren wurde, wird es schwierig, seinen Ursprung genau zu bestimmen. Diejenigen, die nicht wissen, dass Gott allgegenw&auml;rtig ist, wissen nicht, woher Jesus kam. Dar&uuml;ber hinaus bleibt die Bestimmung Gottes nach der Annahme einer anderen Form unbekannt. Folglich erkl&auml;rte Jesus in diesem Vers: &bdquo;<strong>Du hast</strong><strong> Keine Ahnung, woher ich komme oder wohin ich gehe</strong>&ldquo; und betont die geheimnisvolle Natur der Existenz und der Bewegungen Gottes.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 108,
verse: `<b>(30)	Das Johannesevangelium, 8. Kapitel, 19. Vers.</b>`,
meaning: `<b>
(19) Da fragten sie ihn: „Wo ist dein Vater?“ „Ihr kennt weder mich noch meinen Vater“, antwortete Jesus. „Wenn du mich kennen würdest, würdest du auch meinen Vater kennen.“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Existiert Gott? Wenn ja, wie geht es ihm? Wo ist er? Wenn Sie die Antworten auf diese Fragen kennen, werden Sie verstehen, wer der Vater und der Sohn sind. Es gibt nur einen Gott, aber wir sollten wissen, woher der Sohn kam. Die W&ouml;rter &bdquo;Vater&ldquo; und &bdquo;Sohn&ldquo; werden in der Bibel h&auml;ufig verwendet. <strong>Man sollte verstehen, dass &bdquo;Vater&ldquo; Gott bedeutet; Der Begriff wurde in der Bibel verwendet, um sich auf Gott zu beziehen. Im Koran wird Gott &bdquo;Allah&ldquo; genannt und in der Bhagavad-Gita wird Gott als &bdquo;Paramatma&ldquo; bezeichnet. </strong>Obwohl diese Worte unterschiedlich sind, bedeuten sie alle Gott. Das Wesen Gottes sollte im Begriff &bdquo;Vater&ldquo; gesehen werden. Als Jesus auf der Erde war, fragten ihn die Pharis&auml;er nach seinem Vater. Jesus antwortete: &bdquo;<strong>Du hast weder mich noch meinen Vater gesehen</strong>.&ldquo; Die Pharis&auml;er erkundigten sich nicht nach Jesus, obwohl er vor ihnen war. Sie wollten etwas &uuml;ber seinen leiblichen Vater wissen, ohne zu wissen, dass der Vater Jesu Gott war. Sie w&auml;ren vielleicht &uuml;berrascht gewesen, als Jesus direkt &uuml;ber sich selbst und seinen Vater sprach. Sie glaubten, Jesus pers&ouml;nlich zu sehen, und baten ihn, etwas &uuml;ber seinen unbekannten Vater herauszufinden. Dann sagte Jesus: &bdquo;<strong>Du hast weder mich noch meinen Vater gesehen</strong>.&ldquo; Wir m&uuml;ssen die Bedeutung dieses Wortes verstehen.

  Der Vater Jesu ist der Heilige Geist. Atma, der Sohn des Heiligen Geistes, ist in allen K&ouml;rpern pr&auml;sent und regelt deren Wirken. Der Heilige Geist, der als Vater bezeichnet wird, und Atma, der als Sohn bekannt ist, sind allgegenw&auml;rtig. Der Heilige Geist, Paramatma, ist ewig und existiert schon vor der Sch&ouml;pfung. Atma, der Sohn des Heiligen Geistes, ist seit der Sch&ouml;pfung in allen K&ouml;rpern pr&auml;sent.

  Neben dem ewigen Sohn Atma hat Gott (der Heilige Geist) einen weiteren Sohn namens &bdquo;<strong>der eingeborene Sohn</strong>&rsquo;, der gelegentlich auf die Erde kommt. Es gibt erhebliche Unterschiede zwischen dem bleibenden Sohn (Atma) und dem vor&uuml;bergehenden Sohn (dem einziggezeugten Sohn). Wenn zum Beispiel Atma mit einem normalen menschlichen K&ouml;rper einhergeht, hat der K&ouml;rper ein separates Jeevatma. Obwohl der gesamte K&ouml;rper zu Atma geh&ouml;rt und Atma der Kopf des K&ouml;rpers ist, wohnt Jeevatma auch mit Atma im K&ouml;rper und denkt, dass der K&ouml;rper mir geh&ouml;rt. Wenn der vor&uuml;bergehende Sohn, der einziggezeugte Sohn, mit einem K&ouml;rper auf die Erde kommt, gibt es in diesem K&ouml;rper kein Jeevatma. Im K&ouml;rper eines gew&ouml;hnlichen Menschen sind Gott und Atma unterschiedlich. Atma f&uuml;hrt jede Aufgabe in diesem K&ouml;rper aus, und Gott arbeitet nicht. Aber im K&ouml;rper des einziggezeugten Sohnes wohnt Paramatma (Gott) als Atma und f&uuml;hrt Aufgaben in Atmas Form aus. Da es im K&ouml;rper des eingeborenen Sohnes kein Jeevatma gibt, fungiert derjenige, der als Atma fungiert, auch als Jeevatma. Obwohl Gott derjenige im K&ouml;rper des eingeborenen Sohnes ist, gibt er vor, Jeevatma zu sein. <strong>Derjenige, der als einziggeborener Sohn verkleidet kam, ist der Heilige Geist (Gott). Dass Gott sich wie Jeevatma verh&auml;lt. </strong>Es gibt viele Unterschiede zwischen Gottes bleibendem Sohn und dem zeitweiligen Sohn.

  Man kann sagen, dass die meisten Menschen sich nicht bewusst sind, dass Gott einen bleibenden Sohn und den eingeborenen Sohn hat, der gelegentlich kommt. Indem man sich Weisheit aneignet, kann man es Die Existenz von Atma und Atmas Weisheit verstehen, aber den einziggezeugten Sohn zu erkennen, ist eine Herausforderung. Es ist schwierig, den einziggeborenen Sohn unter so vielen Menschen zu identifizieren. Daher identifizierte niemand den eingeborenen Sohn, der im Treta Yuga, Dvapara Yuga und Kali Yuga kam. Obwohl Jesus im Kali Yuga der eingeborene Sohn Gottes war, konnten die Menschen ihn nicht als den zweiten Sohn Gottes erkennen. Trotz seiner Verk&uuml;ndigung, der Sohn Gottes zu sein, konnten die Menschen ihn nicht identifizieren und unterwarfen ihn vielen Beleidigungen und Folterungen. Die Menschen erkannten diejenigen, die im Dvapara Yuga und Kali Yuga kamen, nicht als den Sohn Gottes an, obwohl sie erkl&auml;rten: &bdquo;Ich bin der Sohn Gottes.&ldquo; Ich z&ouml;gere zu behaupten, dass derjenige, der im Treta Yuga kam, der Sohn Gottes war. An diesem Tag kam Gott selbst als Sohn verkleidet und verbreitete Weisheit auf der Erde. Obwohl er als gro&szlig;er Gnani bekannt war und Weisheit lehrte, z&ouml;gere ich auch zu sagen, dass er Bhagavan war, weil er unter den Menschen als b&ouml;ser Mann dargestellt wurde. Dennoch habe ich keine Angst zu sagen: &bdquo;<strong>Ravana Brahma ist der eingeborene Sohn</strong>.&ldquo;

  Im Dvapara Yuga kam Krishna als Bhagavan. Sowohl Bhagavan als auch der einziggezeugte Sohn sind gleich. Da Krishna jedoch als schlau dargestellt wurde, sind sich viele Menschen seiner Gr&ouml;&szlig;e auch heute noch nicht bewusst. Obwohl Gott als Mensch verkleidet erschien und g&ouml;ttliche Dharmas lehrte, konzentrierten sich die Menschen nicht auf die Weisheit, die er vermittelte; Stattdessen untersuchten sie haupts&auml;chlich sein Verhalten w&auml;hrend dieser Zeit. Nur wenige von Millionen erkannten seine Weisheit und erkl&auml;rten, dass Krishna Gott sei, aber die Mehrheit sprach schlecht &uuml;ber ihn. Diejenigen, die sich der Inkarnation Krishnas im Dvapara Yuga nicht bewusst waren, fanden es schwierig, Jesus im Kali Yuga als den Sohn Gottes zu erkennen. Da Krishna und Jesus voraussahen, dass die Menschen die Weisheit, die sie lehrten, m&ouml;glicherweise nicht erkennen w&uuml;rden, erkl&auml;rten sie beide: &bdquo;<strong>Wir sind G&ouml;tter</strong>&bdquo;, im Kontext ihrer Worte, in der &Uuml;berzeugung, dass Menschen dadurch ihre Weisheit erkennen k&ouml;nnen. Ebenso sagte Jesus: &bdquo;<strong>Du kennst weder mich noch meinen Vater. </strong>mit der Absicht, den Menschen bewusst zu machen, dass Gott und Jesus dasselbe sind.

  Diejenigen, die behaupten, Gott ergeben zu sein, sprechen oft sarkastisch, wenn sie anderen begegnen, die mehr Weisheit besitzen als sie selbst. Die Pharis&auml;er sprachen mit der gleichen Einstellung zu Jesus. Da sie wussten, dass Jesus ohne Vater von Maria geboren wurde, fragten sie ihn: &bdquo;Wo ist dein Vater?&ldquo; Jesus verstand, dass sie ihn verspotteten und nicht mit Hingabe darum baten. Er antwortete mit einer umwerfenden Antwort: &bdquo;<strong>Du kennst weder mich noch meinen Vater</strong>.&ldquo; Wer seine Worte richtig versteht, wird verstehen, dass der sichtbare Jesus und der unsichtbare Gott ein und dasselbe sind. Jesus sagte auch: &bdquo;<strong>Wenn du mich kennen w&uuml;rdest, w&uuml;rdest du auch meinen Vater kennen</strong>.&ldquo; Man kann jedoch sagen, dass diejenigen, die seine Worte h&ouml;rten, nicht verstanden, was er sagte. Wenn sie seine Botschaft verstanden h&auml;tten, h&auml;tten sie an diesem Tag erkannt, wer Jesus war. Sie h&auml;tten erkannt, dass er kein gew&ouml;hnlicher Mann war. Trotz Jesu Worten behandelten sie ihn wie einen gew&ouml;hnlichen Menschen. Es scheint, dass sie nichts Bemerkenswertes &uuml;ber Jesus wussten.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 109,
verse: `  <b>(31)	Das Johannesevangelium, 8. Kapitel, 21. Vers.</b>`,
meaning: ` <b>
(21) Noch einmal sagte Jesus zu ihnen: „Ich gehe hin, und ihr werdet mich suchen, und ihr werdet in eurer Sünde sterben.“ Wo ich hingehe, kannst du nicht kommen.“ </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Jesus sprach viele Worte, um die Menschen &uuml;ber sich selbst zu informieren, und die obigen Worte sind ein Beispiel. &bdquo;<strong>Ich gehe weg und du wirst nach mir suchen. Wo ich hingehe, kannst du nicht kommen</strong>&ldquo;, sagte Jesus zu den Menschen. Oberfl&auml;chlich betrachtet scheint dieser Vers nicht besonders tiefgr&uuml;ndig zu sein. Wenn jemand irgendwohin geht, ohne andere zu informieren, wissen wir nicht, wohin er gegangen ist, und selbst wenn wir suchen, k&ouml;nnen wir ihn m&ouml;glicherweise nicht finden. Der Mangel an Informationen bedeutet, dass wir nicht dorthin gehen k&ouml;nnen, wo sie hingegangen sind. Sie fragen sich vielleicht, welche Weisheit in diesem h&auml;ufigen Vorfall steckt. Betrachten wir es aus einem anderen Blickwinkel. In unserer Jugend haben wir das Spiel &bdquo;Dieb und Polizei&ldquo; gespielt. Bei diesem Spiel versteckt sich der Dieb und nach ein paar Minuten beginnt die Polizei mit der Suche nach ihm. Um den Dieb zu fangen, muss die Polizei zu dem Ort gehen, an dem sich der Dieb versteckt. Wenn die Polizei das Versteck nicht erreichen kann, kann sie den Dieb auch bei einer anderen Suche nicht finden. Eines Tages, als ich zehn war, spielten wir dieses Spiel. Ich war der Dieb und die anderen waren die Polizei. Bevor ich mich versteckte, sagte ich: &bdquo;Ich gehe und du kannst mich nicht finden.&ldquo; Sie antworteten selbstbewusst: &bdquo;Wir werden Sie in zehn Minuten finden.&ldquo; Dann f&uuml;gte ich hinzu: &bdquo;Wo ich hingehe, da kannst du nicht hinkommen&ldquo; und versteckte mich vor ihnen.

  Zwei Minuten sp&auml;ter begann die Polizei mit der Verfolgung, konnte mich aber eine halbe Stunde lang nicht finden. Obwohl sie alle Orte durchsuchten, konnten sie nicht erreichen, wo ich mich versteckte. An diesem Tag sa&szlig; ich im Pooja-Raum meines Hauses und hatte die T&uuml;ren geschlossen. Die anderen, die als Polizei spielten, durchsuchten &uuml;berall, auch das Haus, in dem ich mich versteckte, aber sie kamen nicht in den Pooja-Raum, weil die T&uuml;ren geschlossen waren, und sie suchten nicht drinnen. Anfangs dachte ich, der obige Vers sei nichts Besonderes, da er dem Spiel &bdquo;Dieb und Polizei&ldquo; &auml;hnelte. Sp&auml;ter wurde mir jedoch klar, dass der Satz &bdquo;<strong>Du wirst in deiner S&uuml;nde sterben</strong>&bdquo;Der Vers hatte eine bedeutende Bedeutung. Obwohl es einem Spiel &auml;hnelte, entdeckte ich, dass es tiefe Weisheit enthielt. Anschlie&szlig;end vertiefte ich mich in ein umfassendes Verst&auml;ndnis der Bedeutung dieses Wortes. Hier ist, was es bedeutet.

  Jesus war eine Zeit lang f&uuml;r jeden auf der Erde sichtbar, aber leider glaubte niemand an ihn. Obwohl er viele Wunder vollbrachte, um zu beweisen, dass er kein gew&ouml;hnlicher Mensch war &ndash; er gab Blinden das Augenlicht, lie&szlig; Lahme gehen, heilte Lepra und erweckte sogar Tote wieder zum Leben, um seine F&auml;higkeit zu demonstrieren, S&uuml;nden zu vergeben &ndash;, erkannten die Menschen seine F&auml;higkeit nicht an wahre Gr&ouml;&szlig;e. Sogar diejenigen, die Jesus zu seinen Lebzeiten nicht erkannten, suchten sp&auml;ter nach ihm und suchten nach Linderung ihres Leidens. Es wird jedoch keinen Nutzen bringen, nach Ihm zu suchen, wenn Er nicht mehr da ist, da Er f&uuml;r niemanden sichtbar sein wird. Menschen, die in ihren S&uuml;nden sterben, k&ouml;nnen von Jesus keine Vergebung erhalten, da sie nicht wissen, wohin Er gegangen ist. Selbst wenn diejenigen, die Jesus zu seinen Lebzeiten verleugnet haben, ihn sp&auml;ter als Gott anerkennen, werden ihre S&uuml;nden nicht vergeben. All dies hatte Jesus den Menschen im Voraus vorhergesagt. Als Jesus sagte: &bdquo;<strong>Ich gehe weg</strong>&bdquo;Niemand bat ihn, l&auml;nger zu bleiben. Stattdessen riefen die Menschen, er solle gekreuzigt werden, was zu seinem Tod am Kreuz f&uuml;hrte.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 110,
verse: `<b>(32)	Das Johannesevangelium, 8. Kapitel, Verse 23 und 24.</b>`,
meaning: `<b>
(23) Aber er fuhr fort: „Ihr seid von unten; Ich bin von oben. Du bist von dieser Welt; Ich bin nicht von dieser Welt.
<br><br>
(24) Ich habe dir gesagt, dass du in deinen Sünden sterben würdest; Wenn du nicht glaubst, dass ich Er bin, wirst du tatsächlich in deinen Sünden sterben.“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	In diesen beiden Versen scheint der 24. Vers dem 21. Vers zu &auml;hneln, aber der 23. Vers ist einzigartig. Jesus gab den Menschen eine zweite Chance zu erkennen, dass er kein gew&ouml;hnlicher Mensch war, und sagte: &bdquo;Ihr seid von unten; Ich bin von oben. Du bist von dieser Welt; Ich bin nicht von dieser Welt.&ldquo; Dieser Vers ist in zwei Teile gegliedert: Der erste lautet: &bdquo;Ihr seid von unten; Ich bin von oben&ldquo;, und die zweite lautet: &bdquo;Du bist von dieser Welt; Ich bin nicht von dieser Welt.&ldquo; Basierend auf dem ersten Teil des Verses: &bdquo;Ihr seid von unten; Ich komme von oben.&ldquo; Seit Kruta Yuga gab es zwei Arten von Menschen &ndash; die niederen Menschen und die oberen Menschen. Es gibt einen Grund, warum diese beiden Namen &ndash; der untere und der obere &ndash; entstanden sind. So werden Menschen in die untere und obere Kategorie eingeteilt.

  Das Zeitalter des Kruta Yuga umfasst 1.728.000 Jahre. W&auml;hrend der ersten tausend Jahre des Kruta Yuga entstanden unter den Menschen zwei St&auml;mme &ndash; die Gnanis (diejenigen mit Weisheit) und die Unwissenden. Zu dieser Zeit gab es nur sehr wenige Gnanis auf der Erde, w&auml;hrend es unz&auml;hlige Unwissende gab. In diesem Yuga betrug die Weltbev&ouml;lkerung nur etwa 30 Millionen und die indische Bev&ouml;lkerung nicht mehr als 300.000. Die Sonne kam auf die Erde herab und vermittelte einer Person namens Manu g&ouml;ttliche Weisheit. Nur zwei oder drei Personen lernten die Weisheit direkt von Manu, und alle anderen Menschen hatten gro&szlig;en Respekt vor diesen Gnanis und lernten die g&ouml;ttliche Weisheit von ihnen. Damals sch&auml;tzten die Menschen die Gnanis sehr und lie&szlig;en sie auf dem oberen Sitz sitzen, w&auml;hrend sie selbst auf dem Boden sa&szlig;en und der Weisheit lauschten. Es war &uuml;blich, dass die Leute den Gurus den oberen Sitz &uuml;berlie&szlig;en und auf dem Boden sa&szlig;en. Darauf aufbauend sagte Jesus: &bdquo;Ihr seid von unten; Ich bin von oben.&ldquo; Das heisst, "<strong>Ich bin euer Lehrer (Guru) f&uuml;r euch alle</strong>.&ldquo;

  Es war &uuml;blich, dass Lehrer auf dem oberen Sitz sa&szlig;en, w&auml;hrend Menschen, die nach Weisheit suchten, auf dem Boden sa&szlig;en. Fr&uuml;her vermittelten Lehrer den Menschen, dass sie unter den Lehrern standen, die &uuml;ber ihnen standen. Die Lehrer, die g&ouml;ttliche Weisheit vermittelten, waren als Lehrer von Brahma Vidya bekannt. &bdquo;Brahma&ldquo; bedeutet gro&szlig;artig und &bdquo;Brahma Vidya&ldquo; bedeutet gro&szlig;artige Lehre. Die Lehrer, die Kenntnisse &uuml;ber Brahma Vidya besa&szlig;en, wurden Brahmanen genannt. Mit Brahmanen waren damals Lehrer gemeint. Nur zwei oder drei Lehrer in ganz Indien wurden als Brahmanen bezeichnet. Diese Brahmanen stuften den Rest des Volkes als &bdquo;niederes Volk&ldquo; ein. Alle, denen es an Weisheit mangelte, wurden als &bdquo;niederes Volk&ldquo; bezeichnet. Nach einiger Zeit wurde das Kastensystem gegr&uuml;ndet zu dieser Abteilung. Als das Kastensystem Gestalt annahm, begannen diejenigen, die Brahma Vidya kannten, zu sagen: &bdquo;Wir sind Brahmanen.&ldquo; In &auml;hnlicher Weise wurden diejenigen, die unwissend waren, mit der Aufschrift &bdquo;Ihr seid unter uns (Maa-diguvavaru in Telugu)&ldquo; versehen. Somit sind zwei St&auml;mme - <strong>das obere (Eguvavaru in Telugu) und das untere (Diguvavaru in Telugu) </strong>- gebildet. Obwohl das Wort &bdquo;niedriger&ldquo; (Maadiguva vaaru) auch heute noch existiert, verstehen die Menschen seine historische Bedeutung m&ouml;glicherweise nicht vollst&auml;ndig. Im Laufe der Zeit wandelte sich der Begriff &bdquo;Maadiguva vaaru&ldquo; in die Madiga-Kaste (planm&auml;&szlig;ige Kaste), die heute als niedrigere Kaste gez&auml;hlt wird.

  Als das Kastensystem entstand, gab es zwei Kasten &ndash; die Brahmanen und die Madiga (Scheduled Caste). Der Begriff &bdquo;Madiga&ldquo; wurde urspr&uuml;nglich verwendet, um diejenigen zu bezeichnen, die als unwissend galten und denen es an Weisheit mangelte. Doch im Laufe der Zeit entstanden selbst unter denen, denen es an Weisheit mangelte, zahlreiche Kasten, und diejenigen, die nicht klassifiziert wurden, wurden immer noch als Madiga bezeichnet. R&uuml;ckblickend war Madiga urspr&uuml;nglich keine Kaste, sondern ein Name, den zwei oder drei Lehrer den Unwissenden gaben. Auf dieser Grundlage k&ouml;nnen Menschen aus allen Kasten, denen es an Weisheit mangelt, Madiga genannt werden. Aufgrund dessen werden die Menschen in Kasten eingeteilt eine unbekannte Geschichte. Es ist ungerecht und ignorant, die verbleibenden Menschen als Madiga zu bezeichnen. Vor &uuml;ber 2.000 Jahren verwendete Jesus auch die W&ouml;rter &bdquo;oben&ldquo; (Eguvavaru) und &bdquo;unten&ldquo; (Diguvavaru). Er sagte, "<strong>Du bist von unten; Ich bin von oben</strong>&ldquo;, bezogen auf die Unwissenden. Es sollte verstanden werden, dass die W&ouml;rter &bdquo;oben&ldquo; und &bdquo;unten&ldquo; verwendet werden, um anzuzeigen: &bdquo;Ich bin ein Gnani, und du bist unwissend.&ldquo;

  Das zweite Wort Jesu lautet: &bdquo;Ihr seid von dieser Welt; Ich bin nicht von dieser Welt.&ldquo; &bdquo;Loka&ldquo; (Welt) bedeutet auf Telugu &bdquo;Erfahrungen machen&ldquo;. Es gibt zwei Arten von Menschen, basierend auf den Erfahrungen, die sie gemacht haben. Wer Erfahrungen hat, geh&ouml;rt zu dieser Welt, und wer keine Erfahrung hat, geh&ouml;rt nicht zu dieser Welt. Gew&ouml;hnliche Menschen genie&szlig;en jede Erfahrung auf der Welt, also sind sie die Bewohner dieser Welt. Jesus, der keinerlei Erfahrung hat, sagte, dass er nicht von dieser Welt sei. Obwohl Er wie ein Mann aussieht, hat Er keine Erfahrungen wie ein Mann. Auch wenn Jesus einen menschlichen K&ouml;rper hat, ist er kein Jeevatma wie andere. Wenn Er kein Jeevatma ist, gibt es kein Karma. Daher hat Er keine Erfahrung, die auf Karma basiert. Paramatma hat Jesus speziell gesandt. Mit anderen Worten: Der Heilige Geist kam in der Gestalt von Jesus. Gem&auml;&szlig; dem spirituellen Dharma sollten wir das nicht sagen. Paramatma hat Jesus speziell erschaffen und gesandt. Deshalb sollte Jesus der Sohn des Heiligen Geistes genannt werden. Da Jesus kein Jeevatma ist, kann man sagen, dass er keine Erfahrungen hat. Wenn Jesus ein Jeevatma w&auml;re, sollte er nicht der Sohn des Heiligen Geistes genannt werden. Jeevatma ist der Sohn von Atma. Atmas Vater ist der Heilige Geist. Daher wird Jeevatma der Enkel des Heiligen Geistes. Jesus wird Gottes Sohn genannt, weil er von Gott von Gott gesandt wurde. Jesus wurde auch ausdr&uuml;cklich als der eingeborene Sohn bezeichnet. Atma ist der Sohn des Heiligen Geistes. Der eingeborene Sohn ist der vor&uuml;bergehende Sohn, der in Not auf die Erde kommt. Daher wird der vor&uuml;bergehende Sohn wie Atma zum Sohn des Heiligen Geistes und nicht wie Jeevatma zu einem Enkel. Jeevatma sammelt Erfahrung. Daher ist Jeevatma, der Erfahrungen hat, von dieser Welt. Jesus ist als Atma, der keine Erfahrungen hat, nicht von dieser Welt. Er kommt aus Paraloka.

  Jesus gab den Menschen eine zweite Chance, ihn als au&szlig;ergew&ouml;hnlichen Mann zu erkennen und zitierte diese Verse (Johannes 8:23, 24). Allerdings konnten die Menschen die Gr&ouml;&szlig;e Jesu nicht wahrnehmen und betrachteten ihn als einen gew&ouml;hnlichen Menschen. Daher k&ouml;nnen sie weder durch Jesus noch durch seine Lehren von ihren S&uuml;nden freigesprochen werden. Jesus, der Sohn des Heiligen Geistes, kam unter die Menschen und sprach viele Worte, um sich bekannt zu machen. Er bekr&auml;ftigte zum zweiten Mal, dass diejenigen, die ihn nicht finden und an ihn glauben k&ouml;nnten, in ihren S&uuml;nden sterben w&uuml;rden, wie er bereits in Johannes 8:21 erw&auml;hnt hatte. Er bot eine dritte Gelegenheit, indem er seine letzten Worte sprach. Jesus wiederholte drei Versgruppen, um den Menschen zu helfen, ihn zu identifizieren. Er warnte davor, dass denen, die ihn nicht erkannten, ihre S&uuml;nden nicht vergeben w&uuml;rden. Schauen wir uns den dritten Verssatz an, um zu sehen, was Er gesagt hat.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 111,
verse: `<b>(33)	Das Johannesevangelium, 8. Kapitel, 24. Vers.</b>`,
meaning: `<b>
(24) Ich habe dir gesagt, dass du in deinen Sünden sterben würdest; Wenn du nicht glaubst, dass ich Er bin, wirst du tatsächlich in deinen Sünden sterben.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Es wird bekannt, dass dieser Vers eine dritte Chance gab, herauszufinden, wer Jesus war. In diesem Vers sagte Jesus der &Ouml;ffentlichkeit direkt, wer er war. Er sagte, "<strong>Diejenigen, die nicht glauben, dass Ich der Heilige Geist und der Sch&ouml;pfer bin, werden in ihrer S&uuml;nde sterben</strong>.&ldquo; Jesus Er selbst erkl&auml;rte, wer er war. Zun&auml;chst sagte er: &bdquo;<strong>Ich werde weg gehen; Du kannst nicht an den Ort kommen, an den ich gegangen bin</strong>&bdquo;, um ihnen Gelegenheit zu geben, Ihn zu verstehen. Im zweiten Vers sagte er: &bdquo;<strong>Du bist von dieser Welt; Ich bin nicht von dieser Welt</strong>&ldquo;, indem er weitere Einzelheiten lieferte, die ihnen helfen sollten, zu verstehen, wer Er war. Aus dem zweiten Vers kann man verstehen, dass Jesus der Heilige Geist ist. Im dritten Vers sagte er: &bdquo;<strong>Wer nicht glaubt, dass ich Er bin, kann nicht aus der S&uuml;nde herauskommen</strong>&ldquo;, was f&uuml;r mehr Klarheit sorgt. Im dritten Vers erkl&auml;rte Jesus: &bdquo;<strong>ich bin Gott</strong>.&ldquo; Trotzdem erkannten die Menschen Jesus als einen gew&ouml;hnlichen Menschen und konnten nicht erkennen, dass er Gott war. Einige waren jedoch von den Worten Jesu &uuml;berrascht. Obwohl sie es nicht glaubten, fragten sie ihn, wer er sei. Jesus antwortete mit diesen drei Versen (Johannes 8:21, 22, 23), um ihnen zu verdeutlichen, dass er kein gew&ouml;hnlicher Mensch war. Sie erkannten dies jedoch nicht und fragten: &bdquo;Wer bist du?&ldquo; Jesus antwortete: &bdquo;<strong>Genau das, was ich Ihnen von Anfang an gesagt habe</strong>.&ldquo;

  Dar&uuml;ber hinaus sagte er: &bdquo;Er, der mich gesandt hat, ist vertrauensw&uuml;rdig, und was ich von ihm geh&ouml;rt habe, sage ich der Welt.&ldquo; Die Menschen erkannten jedoch nicht, dass er von seinem Vater (dem Heiligen Geist) sprach. Obwohl Er so viel sagte, erkannten die Menschen Jesus nicht. Einige behandelten ihn wie einen gew&ouml;hnlichen Menschen, andere behandelten ihn schlechter als einen gew&ouml;hnlichen Menschen. Jesus sagte noch etwas anderes &uuml;ber diese Menschen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 112,
verse: ` <b>(34)	Das Johannesevangelium, 8. Kapitel, 28. Vers.</b>`,
meaning: ` <b>
(28) Also sagte Jesus: „Wenn du den Menschensohn erhöht hast, dann wirst du erkennen, dass ich er bin und dass ich nichts aus eigener Kraft tue, sondern nur das sage, was der Vater mich gelehrt hat.“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	In diesem Vers gibt es einige Verwirrung hinsichtlich der Formulierung: &bdquo;<strong>Du hast den Menschensohn erh&ouml;ht</strong>.&ldquo; Man kann den Satz vielleicht nicht verstehen. Um diesen Satz richtig zu interpretieren, sollte man ihn als &bdquo;Wenn Menschen Jesus &uuml;ber ihre K&ouml;pfe heben&ldquo; lesen, statt als &bdquo;Wenn du Jesus emporgehoben hast&ldquo;. Manche fragen sich vielleicht: &bdquo;Warum sollten Menschen Jesus &uuml;ber ihren Kopf erheben?&ldquo; Die Antwort lautet: <strong>Jesus sollte mit dem Kopf verstanden werden </strong>das ist &uuml;ber unserem K&ouml;rper. Einer, der Jesus mit ihren eigenen versteht <strong>Intellekt (Buddhi) </strong>werden wissen, dass Jesus der Heilige Geist ist. Dar&uuml;ber hinaus offenbart dieser Vers, dass die g&ouml;ttliche Weisheit, die Jesus lehrte, nicht seine eigene ist; Stattdessen lehrt er, wie vom Heiligen Geist geleitet.

  Anstatt zu sagen, dass die Menschen Jesus mit dem Buddhi im Kopf verstehen sollten, hei&szlig;t es in dem Vers, dass die Menschen Jesus erh&ouml;ht haben. Es wird bekannt, dass Jesus Paramatma (der Heilige Geist) ist, wenn man ihn versteht <strong>mit dem Buddhi </strong>im K&ouml;rper. Solange die Menschen nicht verstanden haben, dass Jesus Gott ist, &bdquo;<strong>Die S&uuml;nden der Menschen werden nicht vergeben und sie sterben in ihrer S&uuml;nde</strong>&ldquo;, wie es in den vorherigen drei Versen hei&szlig;t. Wenn sie verstehen, was Jesus gesagt hat, wird ihnen klar, dass Jesus Gott ist. Das Geheimnis, dass der Heilige Geist als Mensch inkarniert, um Seine Weisheit zu lehren, wird enth&uuml;llt. Wenn man erf&auml;hrt, dass Jesus Gott ist, denken manche vielleicht, dass Jesus selbst die ganze Weisheit ausspricht, die Jesus spricht. Es ist jedoch nicht m&ouml;glich, das zu sagen, was manche Leute denken. Der Grund daf&uuml;r ist, dass nachdem ich gesagt habe: &bdquo;<strong>Ich bin Er</strong>&bdquo;Er sprach ein weiteres Wort.

  Jesus sagte, "<strong>Ich tue nichts allein, sondern spreche nur das aus, was der Vater mir beigebracht hat</strong>.&ldquo; Dies k&ouml;nnte den Eindruck erwecken, dass der Vater und Jesus verschieden sind. Der Grund daf&uuml;r, es auf zwei Arten auszudr&uuml;cken, liegt in der Tatsache, dass Jesus ein Mensch war. Gott ist in seiner wahren Form unsichtbar und verk&ouml;rpert Macht. Wenn Gott eine menschliche Gestalt annimmt und ein Individuum diese Wahrheit mit dem Intellekt (Buddhi) wahrnimmt, wird es verstehen, dass der Heilige Geist und Jesus ein und dasselbe sind. Wenn Gott jedoch als Mensch inkarniert, verst&ouml;&szlig;t es gegen das spirituelle Gesetz, wenn die Inkarnation offen erkl&auml;rt: &bdquo;Ich bin Gott.&ldquo; Auch wenn man die sichtbare Person als Gott erkennen kann, sollte diese Wahrheit nicht offen offenbart werden <strong>spirituelles Gesetz</strong>.

  Dieser geistlichen Regel folgend erkl&auml;rte Jesus: &bdquo;<strong>Ich tue nichts allein, sondern spreche nur das aus, was der Vater mir beigebracht hat</strong>&bdquo;, indem er sich an die Prinzipien des spirituellen Gesetzes hielt.

  Jesus sagte: &bdquo;Ich sage, was der Vater gesagt hat.&ldquo; Beide S&auml;tze &ndash; &bdquo;Ich tue nichts allein&ldquo; und &bdquo;Gott tut alles&ldquo; &ndash; bedeuten dasselbe. Wenn Menschen erkennen, dass Jesus der Heilige Geist ist, werden ihnen ihre S&uuml;nden vergeben. W&auml;hrend es klug ist zu verstehen, dass Jesus der Heilige Geist ist, ist es spirituell falsch zu sagen, dass der Heilige Geist Jesus ist. Deshalb sagte Jesus selbst: &bdquo;<strong>Solange Sie nicht wissen, dass ich Gott bin, werden Ihre S&uuml;nden nicht vergeben</strong>," Und "<strong>Ich bin Er</strong>&ldquo;, damit die Menschen verstehen w&uuml;rden, wer Jesus war. Gem&auml;&szlig; dem geistlichen Gesetz sagte er schlie&szlig;lich: &bdquo;Ich tue alles, was mein Vater mir gesagt hat.&ldquo; Daher sollte man nicht davon ausgehen, dass Jesus in dem Vers auf zwei Arten sprach. Obwohl in dem Vers geschrieben steht, dass &bdquo;Ich bin Gott&ldquo; und &bdquo;Ich tue, was Gott sagt&ldquo;, haben beide die gleiche Bedeutung. Man k&ouml;nnte denken, dass Jesus widerspr&uuml;chliche Dinge gesagt hat, wenn man das nicht versteht. Wer Weisheit versteht, kann erkennen, dass Gott als Mensch kommt, sollte aber nicht erkl&auml;ren, dass eine bestimmte Person Gott ist. Deshalb sagte Jesus auch: &bdquo;Ich bin Gott&ldquo; in einem Wort und &bdquo;Mein Vater ist Gott&ldquo; in einem anderen. Beides ist wahr. Dar&uuml;ber hinaus sagte Jesus den Menschen Folgendes:</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 113,
verse: `<b>(35)	Das Johannesevangelium, 8. Kapitel, 29. Vers.</b>`,
meaning: ` <b>
(29) Der mich gesandt hat, ist bei mir; Er hat mich nicht allein gelassen, denn ich tue immer, was Ihm gefällt. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Dieser Vers soll darauf hinweisen, dass Jesus und der Heilige Geist ein und dasselbe sind. Um dies zu untermauern, sagte Jesus: „Der mich gesandt hat, ist bei mir.“ Das bedeutet, dass der Gott, der Jesus gesandt hat, in ihm ist und dass der Heilige Geist und Jesus eins sind. Im menschlichen Körper gibt es etwas, das „Wille“ genannt wird. Jesus sagte, dass er die Dinge immer nach Gottes Willen tun würde. Auf andere Weise sagte er, dass Gottes Wille in ihm wirkt. Es ist ein Zeugnis dafür, dass Gott in Jesus ist. Jesus sagte auch, dass der Heilige Geist ihn nicht allein gelassen habe. Es ist, als ob Jesus sagte, dass Gott mit ihm sei und dass Gott er sei. Jesus selbst sprach diese Worte, um ihn als Gott anzuerkennen. Obwohl Gott im Kali Yuga als „Jesus“ erschien, erkannten ihn die Menschen nicht. Daher war es für Jesus notwendig, diese Worte zu sagen, um seine Größe zu erkennen. Sonst würden die Menschen die Weisheit Jesu nicht begreifen. Als Jesus diese Verse sprach, glaubten ihm einige Menschen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 114,
verse: ` <b>(36)	Das Johannesevangelium, 8. Kapitel, 53. und 54. Vers.</b>`,
meaning: ` <b>
(53) Bist du größer als unser Vater Abraham? Er starb, und auch die Propheten starben. Was glaubst du wer du bist?"
<br><br>
(54) Jesus antwortete: „Wenn ich mich selbst verherrliche, bedeutet meine Herrlichkeit nichts.“ Mein Vater, den du als deinen Gott behauptest, ist derjenige, der mich verherrlicht.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Obwohl Jesus den Menschen detaillierte Erklärungen lieferte, um ihn zu verstehen, hatten sie Schwierigkeiten, seine Identität zu begreifen, was sie zu der Frage veranlasste: „Wer bist du?“ Als Antwort darauf sagte Jesus: „Wenn ich mich selbst verherrliche, bedeutet meine Herrlichkeit nichts.“ Nachdem er bereits fünf Mal über sich selbst gesprochen hatte, erkannte er, dass seine Worte möglicherweise als falsch wahrgenommen werden könnten, wenn er sie wiederholte oder weiter ausführte. Deshalb erklärte Jesus: „Wenn ich noch einmal etwas anderes sage als bisher, dann verherrlicht mich mein Vater, den du als deinen Gott behauptest.“ Diese Aussage unterstreicht die grundlegende Einheit zwischen Jesus und seinem Vater, den die Menschen als Gott bezeichnen. Bei Einhaltung spiritueller Regeln sollte man jedoch nicht direkt behaupten, Gott zu sein. Daher erklärte Jesus zunächst: „Ich bin Gott“, um den Menschen zu helfen, ihn zu verstehen. Später stellte er klar, dass Gott sein Vater sei. „Nur weil ich dir zwei Dinge anders gesagt habe, solltest du dich nicht verwirren lassen. Du solltest mich mit der Wahrheit verstehen“, sagte Jesus und betonte.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 115,
verse: `<b>(37)	Das Johannesevangelium, 8. Kapitel, 55. Vers. </b>`,
meaning: `<b>
(55) Obwohl du ihn nicht kennst, kenne ich ihn. Wenn ich sagen würde, dass ich es nicht tue, wäre ich ein Lügner wie Sie, aber ich kenne ihn und gehorche seinem Wort. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus verkündete: „Ihr kennt Gott nicht; Ich kenne Gott“, womit er die Wahrnehmung vieler ansprach, die ihn als einen gewöhnlichen Menschen betrachteten. Die Notwendigkeit einer solchen Aussage entstand, um die besondere Beziehung Jesu zu Gott zu verdeutlichen. Einige fragten sich, wie Jesus, der wie andere ein Mensch war, behaupten konnte, Gott zu kennen, während andere dies nicht taten. Um diese Frage zu beantworten, können wir die wiederholte Erklärung Jesu „Ich bin Er“ in drei verschiedenen Versen betrachten. Dieser Aussage zufolge besitzt Jesus kein Jeevatma in seinem Körper, obwohl er eine menschliche Gestalt hat. Stattdessen dient der Heilige Geist als alleiniger Atma in Seinem Körper und beteiligt sich aktiv an jeder Handlung. Das Missverständnis entsteht, wenn Menschen annehmen, dass der Atma der Jeevatma ist, was sie zu der Annahme führt, dass Jesus Gott möglicherweise nicht kennt. Die Wahrheit ist jedoch, dass Paramatma (der Heilige Geist) selbst im Körper Jesu wohnt und ihm Gott bekannt macht. Da der Heilige Geist das Bewusstsein in Jesus ist, besteht keine Notwendigkeit für ein separates Wissen; Jesus besitzt von Natur aus Gott als sein Bewusstsein. Im Gegensatz dazu haben gewöhnliche Menschen den Geist (Manas) als Bewusstsein in ihrem Körper, ihnen fehlt jedoch das Bewusstsein von Atma oder Paramatma. Der Mangel an Paramatmas Bewusstsein ist der Grund, warum Menschen Gott nicht kennen, wohingegen Jesus Gott mit Gott als seinem Bewusstsein von Natur aus kennt.

  Wenn Jesus behaupten würde: „Ich kenne Gott nicht“, würde dies auf einen Mangel an Gottesbewusstsein in Ihm hinweisen, ähnlich wie bei gewöhnlichen Menschen. Eine solche Aussage käme einer Unwahrheit gleich. Deshalb erklärte Jesus: „Wenn ich sagen würde, dass ich Gott nicht kenne, wäre ich ein Lügner wie du.“ Die Einzigartigkeit liegt darin, dass der Heilige Geist der Einzige ist Bewohner im Körper Jesu, wodurch die Existenz eines dualen Seelenpaares – Atma, verantwortlich für Handlungen, und Jeevatma, für Erfahrungen – beseitigt wird. Im Körper Jesu, in dem nur der Heilige Geist wohnt, stammt jedes gesprochene Wort vom Heiligen Geist. Daher, als Jesus sagte: „Ich bin mir seiner bewusst. Ich kenne ihn und ich gehorche seinem Wort“, diese Worte kamen vom Heiligen Geist, obwohl Jesus auf eine Art und Weise sprach wie alle anderen. Trotz seiner äußeren Erscheinung als gewöhnlicher Mensch gab es für ihn keinen Aspekt, der ihm unbekannt war. Eine Veranschaulichung dieses tiefgreifenden Wissens offenbarte sich, als Jesus über Abraham sprach, eine längst verstorbene Gestalt, was bei den Menschen um ihn herum Erstaunen hervorrief und eine Frage auslöste.
</div></div>

</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 116,
verse: ` <b>(38)	Das Johannesevangelium, 8. Kapitel, 57. und 58. Vers.</b>`,
meaning: `<b>
(57) „Du bist noch nicht fünfzig Jahre alt“, sagten sie zu ihm, „und du hast es gesehen Abraham!“.
<br><br>
(58) „Wahrlich, ich sage euch“, antwortete Jesus, „bevor Abraham geboren wurde, war ich es!“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Als Jesus diese Worte aussprach, war er ungef&auml;hr 32 Jahre alt und stand kurz vor dem Eintritt in sein 33. Lebensjahr. Abraham, eine historische Figur, lebte Jahrhunderte vor Jesus und war f&uuml;r die Menschen zur Zeit Jesu wie ein Urgro&szlig;vater. Als Jesus sich auf Abraham bezog, fragten sich die anwesenden Juden, wie er von einem Mann sprechen konnte, der ihm lange vorausgegangen war und in einer anderen Zeit geboren und gestorben war. Als Antwort darauf machte Jesus die r&auml;tselhafte Aussage: &bdquo;Bevor Abraham geboren wurde, war ich es.&ldquo; Angesichts der klaren Generationsunterschiede zwischen Jesus und Abraham erschien diese Behauptung den Menschen um ihn herum tr&uuml;gerisch. Dennoch war das, was Jesus ausdr&uuml;ckte, eine absolute Wahrheit, auch wenn es seinen Zeitgenossen paradox erschien.

  Lassen Sie uns die Wahrheit hinter dieser Aussage erforschen. Der physische K&ouml;rper Jesu wurde vor etwa 32 Jahren geboren. In Seinem K&ouml;rper wohnt jedoch nur der Heilige Geist, nicht der Jeevatma. Wenn Jeevatma anwesend w&auml;re, h&auml;tte Jesus keine Erinnerungen an fr&uuml;here Geburten, da Jeevatma solche Erinnerungen nicht beh&auml;lt. Im Gegensatz dazu ist Paramatma (die H&ouml;chste Seele) im K&ouml;rper Jesu vorhanden und ewig. Es existierte bereits vor der Erschaffung des Universums und ist der Sch&ouml;pfer aller Lebewesen, einschlie&szlig;lich Abrahams. Abraham wurde, wie jeder andere Mensch, mit dem Heiligen Geist als Zeugen geboren, lebte und starb. W&auml;hrend Atma Abraham das Leben schenkte, war Gott (Paramatma) Zeuge der gesamten Reise. <strong>Gott ist der ultimative Zeuge, Atma ist der Handelnde und Jeevatma erf&auml;hrt das Leben</strong>. Obwohl Abraham durch Atma geboren wurde, wei&szlig; Gott als ultimativer Zeuge alles &uuml;ber Abraham. Paramatma wei&szlig;, wie oft Abraham in der Vergangenheit geboren wurde und wie oft er in der Zukunft geboren werden wird. Als Jesus daher sagte: &bdquo;Bevor Abraham geboren wurde, war ich&ldquo;, bezog er sich auf seine Identit&auml;t als den ewigen Paramatma, der bereits vor Abrahams Geburt existierte und nach seinem Tod weiter existieren wird. Diese Aussage betont die zeitlose Existenz Jesu jenseits der Grenzen physischer Geburt und Tod.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 117,
verse: `<b>(39)	Das Johannesevangelium, 9. Kapitel, 39. Vers.</b>`,
meaning: ` <b>
(39) Jesus sagte: „Um des Gerichts willen bin ich in diese Welt gekommen, damit die Blinden werden sehen, und die sehen, werden blind werden.“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Als einige Menschen Jesus beschuldigten, ein S&uuml;nder zu sein, h&ouml;rte die Person, deren Karma von Jesus entfernt worden war, ihre Worte und antwortete mit der folgenden Information.

  (Johannes 9:25-38) Er antwortete: <strong>&bdquo;Ob er ein S&uuml;nder ist oder nicht, wei&szlig; ich nicht. Eines wei&szlig; ich. Ich war blind, aber jetzt sehe ich!"</strong>. Dann fragten sie ihn: <strong>"Was hat er dir getan? Wie hat er dir die Augen ge&ouml;ffnet?&ldquo; </strong>Er antwortete, <strong>&bdquo;Ich habe es dir bereits gesagt und du hast nicht zugeh&ouml;rt. Warum willst du es noch einmal h&ouml;ren? M&ouml;chtest du auch seine J&uuml;nger werden?&ldquo; </strong>Dann beschimpften sie ihn und sagten: <strong>&bdquo;Du bist der Sch&uuml;ler dieses Kerls! Wir sind J&uuml;nger Moses! Wir wissen, dass Gott zu Mose gesprochen hat, aber was diesen Kerl betrifft, wissen wir nicht einmal, woher er kam.&ldquo; </strong>Der Mann antwortete: <strong>&bdquo;Das ist doch bemerkenswert! Du wei&szlig;t nicht, woher er kam, aber er &ouml;ffnete mir die Augen. Wir wissen, dass Gott nicht auf S&uuml;nder h&ouml;rt. Er h&ouml;rt auf die gottesf&uuml;rchtige Person, die seinen Willen tut. Niemand hat jemals davon geh&ouml;rt, einem blind geborenen Mann die Augen zu &ouml;ffnen. Wenn dieser Mann nicht von Gott w&auml;re, k&ouml;nnte Er nichts tun.&ldquo; </strong>Darauf antworteten sie: <strong>&bdquo;Du warst von Geburt an in S&uuml;nde versunken; Wie kannst du es wagen, uns zu belehren!&ldquo; </strong>Und sie warfen ihn raus. Jesus h&ouml;rte, dass sie ihn hinausgeworfen hatten, und als Jesus ihn fand, sagte er: <strong>&bdquo;Glauben Sie an den Menschensohn?&ldquo; &bdquo;Wer ist er, Herr?&ldquo; </strong>fragte der Mann. <strong>&bdquo;Sag es mir, damit ich an ihn glaube.&ldquo; </strong>Jesus sagte, "<strong>Du hast Ihn jetzt gesehen; Tats&auml;chlich ist Er derjenige, der mit Ihnen spricht.&ldquo; </strong>Dann sagte der Mann: <strong>&bdquo;Herr, ich glaube&ldquo; </strong>und er betete ihn an. Nach den Ereignissen, die gerade geschehen waren, sagte Jesus: <strong>&bdquo;Zum Gericht bin ich in diese Welt gekommen, damit die Blinden sehen und die Sehenden blind werden.&ldquo; </strong>Diese Aussage kann vor dem Hintergrund der vorangegangenen Ereignisse verstanden werden.

  Der Zweck der Aussage Jesu bestand darin, dies zu vermitteln <strong>Wer an Gott glaubt, kann mich sehen</strong>, auch wenn sie nicht wissen, wer Er ist. Diejenigen, die nicht an Gott glauben, interagieren vielleicht t&auml;glich mit Jesus und sehen seinen physischen K&ouml;rper, aber sie k&ouml;nnen ihn nicht erkennen. Deshalb sagte Jesus, dass er in die Welt gekommen sei, um den Ungl&auml;ubigen das Unwissen dar&uuml;ber zu machen, dass er Gott ist. Obwohl Gott menschliche Gestalt annimmt und neben den Ungl&auml;ubigen steht, k&ouml;nnen sie aufgrund ihrer unwissenden Blindheit den Sohn Gottes nicht erkennen. Diese Blindheit ist eine Art Unwissenheit, die sie daran hindert, Gott zu erkennen, selbst wenn er in menschlicher Form erscheint. Als Jesus das sagte <strong>Ein Gl&auml;ubiger, der Gottes Menschwerdung (den Sohn Gottes) sieht, erkennt Ihn m&ouml;glicherweise nicht anhand der &auml;u&szlig;eren Erscheinung, sondern durch Intuition</strong>, fragten einige der Menschen um ihn herum, ob sie auch blind seien. Jesus antwortete ihnen so.</div></div>

</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 118,
verse: `<b>(40)	Das Johannesevangelium, 9. Kapitel, 41. Vers.</b>`,
meaning: `<b>
(41) Jesus sagte: „Wenn du blind wärst, wärst du nicht der Sünde schuldig; Aber jetzt, wo Sie behaupten, Sie könnten es sehen, bleiben Ihre Schuldgefühle bestehen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	In Vers 39 erl&auml;uterte Jesus den Unterschied zwischen denen mit und denen ohne Glauben. Er erkl&auml;rte, dass ein blinder Mensch mit g&ouml;ttlichem Glauben Ihn sehen k&ouml;nne, w&auml;hrend Ungl&auml;ubige Ihn physisch sehen, aber Seine wahre Identit&auml;t nicht erkennen k&ouml;nnten. Im 41. Vers Jesus vertiefte sich weiter in das Verhalten derjenigen, die mit a arbeiten <strong>weltliche Perspektive</strong>. Menschen mit einer weltlichen Denkweise verk&uuml;nden: &bdquo;Ich sehe&ldquo;, schreiben ihre Handlungen sich selbst zu und sammeln folglich Karma f&uuml;r ihre Taten an. Gott hat den Menschen das Sehverm&ouml;gen verliehen, um seine Weisheit zu begreifen, doch nicht jeder nutzt sein Sehverm&ouml;gen, um Gott zu erkennen. Manche bleiben geistig blind, obwohl sie physische Augen haben. Was weltliche Angelegenheiten angeht, ist jeder Einzelne im Grunde blind. Die Wahrheit ist, dass niemand selbstst&auml;ndig weltliche Aktivit&auml;ten aus&uuml;bt. Niemand besitzt Seh- oder H&ouml;rverm&ouml;gen. Trotz ihres inh&auml;renten Mangels behaupten die Menschen: &bdquo;Ich sehe&ldquo;, gehen f&auml;lschlicherweise davon aus, dass sie sehend sind, und begehen infolgedessen S&uuml;nde f&uuml;r ihre Handlungen. Obwohl Menschen geistig blind sind, h&auml;ufen sie S&uuml;nde an, wenn sie f&auml;lschlicherweise glauben, dass sie sehend sind. Jesus betonte, dass man seine geistige Blindheit erkennen und anerkennen muss <strong>die Wahrheit </strong>Nichts gesehen zu haben, befreit sie von der S&uuml;nde. Im Wesentlichen verhindert die Anerkennung der eigenen spirituellen Blindheit die Anh&auml;ufung von S&uuml;nde in weltlichen Angelegenheiten.

  Diejenigen, denen es an g&ouml;ttlicher Weisheit mangelt, sind sich ihrer mangelnden Sicht auf weltliche Dinge nicht bewusst. Ihre Unf&auml;higkeit, die Worte Jesu zu verstehen, r&uuml;hrt von ihrer Unwissenheit dar&uuml;ber her, dass Gott das Sehverm&ouml;gen nur dazu gegeben hat, Dinge zu verstehen, die ihn betreffen. Um die Essenz des Verses zu verstehen, muss die Jeeva (Seele) jedes Einzelnen zun&auml;chst erkennen, ob er blind ist oder Einsicht in den K&ouml;rper besitzt. In Wahrheit ist der Jeeva im K&ouml;rper eines jeden Menschen in jeder Hinsicht v&ouml;llig blind. Jeder Jeeva glaubt f&auml;lschlicherweise, dass der K&ouml;rper ihm geh&ouml;rt und dass er der Urheber aller Handlungen im K&ouml;rper ist. Jeevatma hat jedoch keine unabh&auml;ngige Vertretung im K&ouml;rper; <strong>Atma </strong>ist der wahre Eigent&uuml;mer und Verantwortliche. Atma wirkt kontinuierlich im K&ouml;rper, und in Wirklichkeit f&uuml;hrt Jeeva keine Aufgaben im K&ouml;rper aus. Jeeva ist blind, taub und in jeder Hinsicht behindert. Positioniert neben dem <strong>Buddhi </strong>(Intellekt) im K&ouml;rper wird Jeeva auf Informationen aufmerksam, die den Intellekt erreichen, aber Jeeva kann nichts unabh&auml;ngig davon wissen. Trotz mangelnder direkter Kenntnis glaubt Jeeva f&auml;lschlicherweise, dass sie alles pers&ouml;nlich miterlebt hat. Obwohl Atma die aktive Kraft im K&ouml;rper ist, schreibt Jeeva f&auml;lschlicherweise alle Handlungen sich selbst zu. Wenn Jeeva f&auml;lschlicherweise die Verantwortung f&uuml;r eine Tat &uuml;bernimmt, muss sie die mit dieser Tat verbundenen karmischen Konsequenzen ertragen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 119,
verse: `<b>(41)	Das Johannesevangelium, 10. Kapitel, 18. Vers.</b>`,
meaning: `<b>
(18) Niemand nimmt mir das Leben, aber ich gebe es aus eigenem Antrieb hin. Ich habe die Autorität, es niederzulegen und die Autorität, es wieder aufzunehmen. Diesen Befehl habe ich von meinem Vater erhalten. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Niemand wei&szlig;, wann ein gew&ouml;hnlicher Mensch dieses Leben verlassen wird. Sobald jemand stirbt, wird er nicht zur&uuml;ckkehren. Dies zeigt sich in jedem Todesfall. Auch Jeeva verl&auml;sst den K&ouml;rper im Tod. Den meisten Menschen ist das jedoch nicht bewusst <strong>Jeeva ist von der Lebenskraft eines Menschen getrennt</strong>. Viele Menschen denken, dass Jeeva und die Lebenskraft dasselbe sind. Aber in dem Vers hei&szlig;t es: &bdquo;<strong>Niemand nimmt mir das Leben</strong>&ldquo;, was zeigt, dass Jesus anders ist und dass seine Kraft anders ist. Obwohl jeder wie Jesus seine eigene Lebenskraft in seinem K&ouml;rper hat, kann er sie nicht beiseite legen oder wieder aufnehmen. Im K&ouml;rper gibt es viele innere Organe, Leben, Buddhi und Manas. Alles im K&ouml;rper unterliegt der Kontrolle des Atman, nicht der Kontrolle des Menschen. Daher entscheidet Atma, ob das Leben einer Person aufgegeben wird oder Schicke es dorthin, wohin Atma es w&uuml;nscht, denn es ist seine Aufgabe. <strong>Jeeva </strong>hat keinen Bezug zur Lebenskraft in ihrem K&ouml;rper, aber <strong>Atma </strong>hat eine Beziehung zur Lebenskraft im K&ouml;rper.

  Jesus ist kein gew&ouml;hnlicher Jeeva, sondern Er ist Atma. Als solcher hat er die Autorit&auml;t, sein Leben beiseite zu legen, und niemand kann es ihm nehmen. Das bedeutet, dass <strong>Jesus stirbt nicht durch die Hand anderer</strong>; Wenn er sterben w&uuml;rde, w&uuml;rde er sich daf&uuml;r entscheiden, sein Leben beiseite zu legen. Nur Atma hat die Macht, das Leben beiseite zu legen und es dann wieder zur&uuml;ckzubringen, wenn es gew&uuml;nscht wird. Der Heilige Geist gab Jesus die Autorit&auml;t dazu, wie Jesus selbst erkl&auml;rte: &bdquo;<strong>Niemand nimmt mir das Leben, aber ich gebe es aus eigenem Antrieb hin. Ich habe die Autorit&auml;t, es niederzulegen und wieder aufzunehmen. Diesen Befehl habe ich von meinem Vater erhalten</strong>.&ldquo; Wie vorhergesagt, versteckte Jesus sein Leben (Prana oder Atem) bei seiner Kreuzigung in seinem K&ouml;rper und schien f&uuml;r die Menschen um ihn herum tot zu sein. Dennoch kam er am fr&uuml;hen Sonntagmorgen lebend wieder heraus, nachdem er sein Leben zur&uuml;ckgenommen hatte. Dies zeigt, dass Jesus als Atma die Macht hat, sein Leben niederzulegen und dann im selben K&ouml;rper wieder zum Leben zu erwecken, und dass ihm diese Autorit&auml;t von seinem Vater, dem Heiligen Geist, gegeben wurde. Dar&uuml;ber hinaus hat Atma die Autorit&auml;t, anderen das Leben zu nehmen und sie zur Reinkarnation zu schicken.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 120,
verse: ` <b>(42)	Das Johannesevangelium, 10. Kapitel,30.Vers.</b>`,
meaning: ` <b>
(30) Ich und der Vater sind eins. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Atma ist der Vater von Jeeva und dementsprechend ist Paramatma f&uuml;r die Erschaffung von Atma verantwortlich. Daher ist Atma auch der Vater der Menschen, w&auml;hrend Paramatma der Vater von Atma ist. Da Jesus Atma ist, ist er der Sohn Gottes. Wann <strong>Ein Sohn schenkt seinem Vater gro&szlig;e Aufmerksamkeit</strong>Es bedeutet einen Zustand der Verbindung zwischen dem Sohn und dem Vater. Dies ist der Kern der Aussage Jesu: &bdquo;<strong>Ich und mein Vater sind eins</strong>&ldquo;, als er seinen Fokus auf seinen Vater, den Heiligen Geist, richtete.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 121,
verse: ` <b>(43)	Das Johannesevangelium, 11. Kapitel, 25. Vers.</b>`,
meaning: ` <b>
(25) Jesus sagte zu ihr: „Ich bin die Auferstehung und das Leben.“ Derjenige, der glaubt in mir werden sie leben, auch wenn sie sterben.“ </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
In diesem Zusammenhang steht „Auferstehung“ für Geburt, während „Leben“ Befreiung (moksham) bedeutet, also Freiheit vom Kreislauf der Wiedergeburt. Da sowohl Geburt als auch Moksham mit Atma zusammenhängen, erklärte Jesus: „Wer an mich glaubt, wird nach dem Tod nicht wiedergeboren, sondern wird es erreichen.<b>“ moksham.“</b></div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 122,
verse: `<b>(44)	Das Johannesevangelium, 11. Kapitel, 26. Vers.</b>`,
meaning: `<b>
(26) Wer im Glauben an mich lebt, wird niemals sterben.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Derjenige, der Moksham erreicht hat, wird ewiges Leben erfahren und nie wieder dem Tod ins Auge sehen. Deshalb verkündete Jesus: „Jeder, der an Gott glaubt, wird Moksham erreichen und nie wieder sterben.“</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 123,
verse: `<b>(45)	Das Johannesevangelium, 12. Kapitel, 25. Vers.</b>`,
meaning: `<b>
(25) Wer sein Leben liebt, wird es verlieren, während jeder, der sein Leben in dieser Welt hasst, es für das ewige Leben behalten wird.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Die Aussage Jesu: „Wer sein Leben liebt, wird es verlieren“ kann wie folgt erklärt werden: Menschen (Jeeva) benötigen Leben, um auf der Erde zu existieren, und diejenigen, die an ihrem irdischen Leben hängen, werden es unweigerlich verlieren, da sie nicht ewig leben können. Das Leben eines Menschen hängt vom Fluss von Prana (Lebenskraft) in seinem Körper ab, und sobald er stirbt, hört seine Atmung dauerhaft auf. Sobald der letzte Atemzug den Körper verlässt und mit der Außenluft verschmilzt, wird er nie wieder zurückkehren. Wenn jemand von seiner ersten zur zweiten Geburt übergeht, erhält er einen neuen Atem (Leben), aber der alte wird nie wiedererlangt. Daher werden diejenigen, die ihrem irdischen Leben Priorität einräumen und daran festhalten, es irgendwann verlieren. Trotz dieser Gewissheit lieben die Menschen von Natur aus ihr Leben über alles und streben danach, ihre Zeit auf der Erde zu verlängern.

  Eine Person, die sich Moksham wünscht und nicht in dieser Welt leben möchte, hasst ihr eigenes Leben, was auf mangelndes Interesse an weltlichen Angelegenheiten hinweist. Ein solcher Mensch verlässt den Kreislauf der Geburt und erlangt ewiges Leben. Dieses Leben ist frei vom Tod, und die Person, die es erlangt, wird es beschützen. Während diejenigen, die Moksham erreichen, kein besonderes Leben führen, das dem eines gewöhnlichen Menschen ähnelt, wird der Begriff „ewiges Leben“ verwendet, um uns das Verständnis des Konzepts zu erleichtern. Es ist wichtig zu beachten, dass jeder, der Moksham erreicht, für immer in einem Zustand der Ewigkeit bleiben wird, ohne Geburt oder Tod.
</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 124,
verse: `<b>(46)	Das Johannesevangelium, 12. Kapitel, 40. Vers.</b>`,
meaning: `<b>
(40) Er hat ihre Augen verblendet und ihre Herzen verhärtet, sodass sie mit ihren Augen nicht sehen, mit ihren Herzen nicht verstehen und sich nicht umkehren können – und ich würde sie heilen. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  	Als Gott als Mensch kam und den Menschen die Weisheit verk&uuml;ndete, die sie brauchten, blendete Atma, Gott im K&ouml;rper, ihre Augen und verh&auml;rtete ihre Herzen, so dass sie mit ihren Herzen weder sehen noch verstehen noch Karma loswerden konnten. Karma ist die Ursache ihres Leidens. In diesem Vers ist es wichtig zu beachten, dass der vom Heiligen Geist geschaffene Atma in jedem K&ouml;rper vorhanden ist und jeden regiert. Obwohl Atma der Sohn des Heiligen Geistes ist, wird der Heilige Geist, der Sch&ouml;pfer, als Mensch geboren, um Weisheit zu vermitteln. Obwohl der Geborene der Heilige Geist ist, wird er statt Gott der Sohn Gottes genannt. Demnach wird Atma, der sich im K&ouml;rper befindet, zum Sohn des Heiligen Geistes. Die Inkarnation des Heiligen Geistes als Mensch wird auch Sohn des Heiligen Geistes genannt. Atma im K&ouml;rper blendet die Augen des unwissenden Menschen und verh&auml;rtet sein Herz, so dass er die Worte des Sohnes Gottes nicht versteht und sein Karma nicht loswerden kann.

  Der Heilige Geist, der Sch&ouml;pfer, erschuf einen Sohn Atma und platzierte ihn im menschlichen K&ouml;rper. Dar&uuml;ber hinaus erschuf der Heilige Geist einen weiteren Sohn in Menschengestalt, um den Unwissenden Weisheit zu vermitteln. W&auml;hrend Atma im menschlichen K&ouml;rper auf den ganzen K&ouml;rper verteilt ist, ist die menschliche Inkarnation von <strong>Atma </strong>erscheint nur regelm&auml;&szlig;ig auf der Erde, um Weisheit zu lehren. Sogar Wenn die menschliche Inkarnation von Atma Menschen Weisheit vermittelt, die desinteressiert und neidisch auf den Heiligen Geist sind, f&uuml;hrt der Atma im K&ouml;rper dazu, dass ihr Intellekt (Buddhi) nicht in der Lage ist, sie zu begreifen. Wenn jedoch eine Person besitzt <strong>Hingabe und Interesse </strong>Im Heiligen Geist erm&ouml;glicht ihnen der Atma im K&ouml;rper, die Worte der menschlichen Inkarnation von Atma zu verstehen. Man muss sowohl den Atma im K&ouml;rper als auch den zweiten Sohn erkennen, der durch eine menschliche Form verk&ouml;rpert wird. <strong>um die Weisheit des Heiligen Geistes wirklich zu begreifen</strong>.</div></div>
  </span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 125,
verse: ` <b>(47)	Das Johannesevangelium, 12. Kapitel, 47. und 48. Vers.</b>`,
meaning: ` <b>
(47) Wenn jemand meine Worte hört, sie aber nicht befolgt, verurteile ich ihn nicht. Denn ich bin nicht gekommen, um die Welt zu richten, sondern um die Welt zu retten.
<br><br>
(48) Es gibt einen Richter für denjenigen, der mich ablehnt und meine Worte nicht annimmt; Die Worte, die ich gesprochen habe, werden sie am letzten Tag richten. `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Man kann sagen, dass derjenige, der diese Worte sprach, der Atma ist, der die Form eines Menschen hat. Wenn jemand die Weisheit h&ouml;rt, die Gott vermittelt, wenn Er in menschlicher Form erscheint, sie aber nicht versteht, beurteilt der Atma in menschlicher Form sein n&auml;chstes Leben nicht auf der Grundlage von S&uuml;nde und Punya nach dem Tod. Der Atma, der als Mensch kam, um Weisheit zu lehren, kam nicht, um &uuml;ber das n&auml;chste Leben der Menschen zu richten. Gott (Atma) kam als Mensch, um den Menschen seine Weisheit zu offenbaren und sie zu retten. Jemand anders beurteilt das sp&auml;tere Leben eines Menschen, der nicht auf die Worte des Atma in menschlicher Form h&ouml;rt und Ihn nicht als gro&szlig;artig anerkennt. Man sollte wissen, dass ein solcher Richter der Atma ist, der immer im K&ouml;rper pr&auml;sent ist. Der Atma im menschlichen K&ouml;rper entscheidet &uuml;ber die n&auml;chste Geburt am Tag des Todes, basierend auf der Weisheit, die ihm der Atma in menschlicher Form vermittelt. <strong>Man kann den Heiligen Geist nicht kennen, wenn man nicht die Arbeit des Atma im K&ouml;rper und des Atma (Bhagavan) versteht, der in menschlicher Form erscheint.</strong></div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 126,
verse: ` <b>(48)	Das Johannesevangelium, 12. Kapitel, 49. und 50. Vers.</b>`,
meaning: ` <b>
(49) Denn ich habe nicht aus eigenem Antrieb geredet, sondern der Vater, der mich gesandt hat, hat mir geboten, alles zu sagen, was ich geredet habe.
<br><br>
(50) Ich weiß, dass sein Befehl zum ewigen Leben führt. Was ich also sage, ist genau das, was der Vater mir gesagt hat. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Man sollte verstehen, dass die <strong>Atma (Gott)</strong>, der als Mensch kam, sprach diese Worte. Jesus, Gott in der Gestalt eines Menschen, &auml;u&szlig;erte diese Aussage. Wann immer Gott als Mensch inkarniert, kommt all seine Weisheit vom Heiligen Geist. Derjenige, der in menschlicher Gestalt kam, erw&auml;hnte, dass der Heilige Geist ihn dazu veranlasste, diese Weisheit zu &uuml;bermitteln. Die Weisheit, die der Atma (Bhagavan) in menschlicher Form vermittelt, f&uuml;hrt dazu <strong>ewiges Leben (moksham)</strong>. Obwohl derjenige, der in menschlicher Form kam, nicht ausdr&uuml;cklich als Gott identifiziert wird, erkl&auml;rte er: &bdquo;<strong>Was auch immer ich sage, ist genau das, was der Vater mir gesagt hat</strong>&ldquo;, was offenbart, dass der Sprecher der Heilige Geist ist. Damit wird deutlich, dass derjenige, der spricht, der Heilige Geist ist. Gem&auml;&szlig; der spirituelle Lehre sollte dies jedoch der Fall sein Es muss betont werden, dass der Heilige Geist der Vater ist und der Atma, der in menschlicher Form kam, der Sohn ist.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 127,
verse: ` <b>(49) Das Johannesevangelium, 14. Kapitel, 7. Vers.</b>`,
meaning: ` <b>
(7) Wenn du mich wirklich kennst, wirst du auch meinen Vater kennen. Von nun an kennen Sie ihn und haben ihn gesehen.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Dieser Vers &auml;hnelt dem zuvor erw&auml;hnten (Johannes 12:49, 12:50). Wie ich bereits erw&auml;hnt habe, sind der Vater und der Sohn dasselbe; Dennoch sollte der spirituellen Lehre zufolge gesagt werden, dass der Vater und der Sohn getrennt sind. Jesus sagte, "<strong>Wenn du mich wirklich kennst, wirst du auch meinen Vater kennen</strong>.&ldquo; Obwohl Gott, als er als Mensch kam, der Sohn Gottes genannt wird, liegt der Vater selbst tats&auml;chlich in der Form des Sohnes vor. Daher hei&szlig;t es in dem Vers: &bdquo;<strong>Wenn Sie den Sohn kennen, kennen Sie den Vater</strong>.&ldquo;</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 128,
verse: ` <b>(50) Das Johannesevangelium, 14. Kapitel, 8. und 9. Vers.</b>`,
meaning: ` <b>
(8) Philippus sagte: „Herr, zeige uns den Vater, dann wird uns das genügen.“
<br><br>
(9) Jesus antwortete: „Erkennst du mich nicht, Philippus, auch nachdem ich so lange unter euch gewesen bin? Jeder, der mich gesehen hat, hat den Vater gesehen. Wie kannst du sagen: „Zeig uns den Vater“?</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dieser Vers offenbart, dass derjenige mit einer sichtbaren Form der Heilige Geist ist. Deshalb sagte Jesus:<b> „Wer mich gesehen hat, hat den Vater gesehen.“</b></div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 129,
verse: `<b>(51)	Das Johannesevangelium, 14. Kapitel, 10. Vers. </b>`,
meaning: `<b>
(10) Glaubt ihr nicht, dass ich im Vater bin und dass der Vater in mir ist? Die Worte, die ich Ihnen sage, spreche ich nicht aus eigener Kraft. Vielmehr ist es der Vater, der in mir lebt und sein Werk tut.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wenn eine Person verkleidet ist, sind sie und ihre Verkleidung untrennbar miteinander verbunden. Wenn also ein reicher Mann die Gestalt eines Bettlers annimmt, existieren sowohl der wohlhabende Mensch als auch der Bettler nebeneinander. Der reiche Mann nimmt w&auml;hrend seiner Verkleidung das Aussehen eines Bettlers an. Obwohl sich der Bettler zum Betteln auf einen Basar wagt, ist es in Wirklichkeit der reiche Mann, der diese Tat ausf&uuml;hrt. Der unsichtbare reiche Mann spielt die Rolle eines Bettlers. Da der reiche Mann im Bettler wohnt und die Worte des Bettlers vom reichen Mann stammen, kann man behaupten, dass der reiche Mann im Bettler steckt und umgekehrt der Bettler im reichen Mann &ndash; sie existieren zusammen. Da die innere Person eine gr&ouml;&szlig;ere Bedeutung hat als die &auml;u&szlig;ere Fassade, werden alle verdeckten Handlungen vom inneren Selbst ausgef&uuml;hrt. Da die innere Person wichtiger ist als das &auml;u&szlig;ere Erscheinungsbild, ist es richtig zu sagen, dass alle Aufgaben, die von der &auml;u&szlig;erlich sichtbaren Person ausgef&uuml;hrt werden, dem inneren Individuum geh&ouml;ren. Trotz der &auml;u&szlig;eren Erscheinung des Bettlers verk&ouml;rpert er in seinem Inneren den reichen Menschen. In gewissem Sinne kann man best&auml;tigen, dass der Bettler tats&auml;chlich der reiche Mensch. Der Heilige Geist, verborgen in menschlicher Form, hat Bedeutung. Es ist unbedingt erforderlich zu erkennen, dass die Verkleidung vor&uuml;bergehend ist, w&auml;hrend die Seele darin ewig ist. Das kann man behaupten <strong>Der Eine in Jesus ist der Heilige Geist</strong>. Daher verk&uuml;ndete Jesus: &bdquo;Der Vater ist in mir, und ich bin im Vater.&ldquo;</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 130,
verse: `<b>(52)	Das Johannesevangelium, 14. Kapitel, 6. Vers.</b>`,
meaning: `<b>
(6) Jesus antwortete: „Ich bin der Weg und die Wahrheit und das Leben.“ Niemand kommt zu sich der Vater außer durch mich. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Aufbauend auf dem vorherigen Beispiel f&uuml;hrt der Weg zum Verst&auml;ndnis des reichen Mannes &uuml;ber den Bettler. Wird der Bettler gefasst, wird die Identit&auml;t des reichen Mannes offenbar. Sobald der reiche Mann erkannt wird, kann man auf den Reichtum zugreifen, den er besitzt. Ebenso f&uuml;hrt der Weg, Gott zu verstehen, &uuml;ber die Inkarnation als Mensch. Wenn jemand denjenigen versteht, der die menschliche Gestalt angenommen hat, wird er auch den Gott verstehen, der in ihm wohnt. Die Bekanntschaft mit Gott f&uuml;hrt dazu, das ewige Leben zu erlangen, das Gott innewohnt. Daher erkl&auml;rte Jesus einmal: &bdquo;<strong>Ich bin der Weg und die Wahrheit und das Leben</strong>.&ldquo; Als Jesus sagte: &bdquo;Ich bin der Weg&ldquo;, bedeutet das <strong>der Weg, Gott durch mich zu verstehen</strong>. Er sagte auch: &bdquo;Ich bin die Wahrheit&ldquo;, was andeutete, dass Er die wahre Manifestation Gottes ist. Dar&uuml;ber hinaus verk&uuml;ndete er: &bdquo;<strong>Ich bin ewiges Leben</strong>.&ldquo; Diese Behauptung basiert auf der Tatsache, dass der wahre Gott in der Gestalt von Jesus erkl&auml;rte, dass jeder, der mit Ihm vertraut ist, Paraloka (Moksham) erreichen und ewiges Leben erfahren w&uuml;rde, ohne im Paraloka dem Tod ins Auge zu sehen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 131,
verse: ` <b>(53)	Das Johannesevangelium, 14. Kapitel, 16. Vers.</b>`,
meaning: `<b>
(16) Ich werde den Vater bitten, und er wird dir einen anderen Befürworter geben, der dir hilft und für immer bei dir ist. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der Heilige Geist bleibt nicht dauerhaft in menschlicher Form unter den Menschen. Gelegentlich ver&auml;ndert der Heilige Geist sein Aussehen und tritt bei Bedarf in das Leben der Menschen ein. Als der Heilige Geist die Gestalt Jesu annahm, lebte er nur 33 Jahre unter den Menschen. Von diesen 33 Jahren vermittelte er nur drei Jahre lang Weisheit. Noch bevor er drei Jahre vollendet hatte, verlie&szlig; er das Volk bereits nach zwei Jahren und drei Monaten. Jesus sagte: &bdquo;Ich werde meinen Vater bitten, ein zweites Mal einen anderen F&uuml;rsprecher (Adaranakarta) zu senden, der l&auml;nger lebt als ich und Weisheit lehrt.&ldquo; Der Kommende ist derselbe wie derjenige, der sagt, dass er den Kommenden fleht. Es ist derselbe, der kommt. Es ist derselbe, der gesagt hat, dass er denjenigen bitten w&uuml;rde, der kommt. Es ist derselbe, der sagte, er w&uuml;rde einen anderen F&uuml;rsprecher (Tr&ouml;ster) schicken. <strong>Es gibt nur eins</strong>. Es ist derselbe, der gesagt hat, derselbe, der gefragt hat, und derselbe, der kommt. Wenn wir nicht verstehen, dass es nur einen gibt, der alle Charaktere spielt, kann derjenige, der sagt, fragt und kommt, anders erscheinen. Ohne das zu erkennen <strong>Es gibt nur einen, der diese Rollen orchestriert</strong>Wir k&ouml;nnen den Gott, der vor uns in menschlicher Form steht, den Gott, der fleht, und den Gott, der kommt, nicht begreifen. Es ist wichtig zu verstehen, dass derjenige, der als Jesus den Vater anfleht, der bevorstehende Tr&ouml;ster ist. Der ankommende F&uuml;rsprecher ist der Heilige Geist.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 132,
verse: `<b>(54)	Das Johannesevangelium, 14. Kapitel, 17. Vers.</b>`,
meaning: `<b>
(17) Die Welt kann Ihn nicht annehmen, weil sie Ihn weder sieht noch kennt. Aber du kennst ihn, denn er lebt mit dir und wird in dir sein. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Der Begriff „Welt (Loka)“ kann so verstanden werden, dass er diejenigen Personen umfasst, die die Folgen des Karmas auf der Erde erleiden. Wenn Gott menschliche Gestalt annimmt, können diejenigen, die durch Karma gebunden sind, Ihn möglicherweise nicht wahrnehmen oder anerkennen. Wer Ihn nicht erkennt, ist nicht in der Lage, Seine Lehren oder göttliche Weisheit zu empfangen. Nur wer durch Jesus Weisheit erlangt hat, wird den Tröster, der nach Jesus kommt, in menschlicher Gestalt erkennen können. Der Tröster wohnt in diesen Menschen, und diejenigen, die ihn kennen, werden mit ihm koexistieren und seine Gegenwart als Atma in ihnen erkennen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 133,
verse: `<b>(55)	Das Johannesevangelium, 14. Kapitel, 20. Vers.</b>`,
meaning: ` <b>
(20) An jenem Tag werdet ihr erkennen, dass ich in meinem Vater bin und ihr in mir seid und ich in euch bin. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Bevor man sich mit diesem Vers befasst, sollte man die wahre Gestalt Gottes begreifen. Gott ist in drei Aspekte unterteilt, die die ganze Welt durchdringen. Obwohl es nur einen Gott gibt, ist Er in drei Seelen unterteilt: Jeevatma, Atma und Paramatma. <strong>Jeevatma befindet sich an einem bestimmten Ort im K&ouml;rper aller Lebewesen, w&auml;hrend sich Atma &uuml;ber den gesamten K&ouml;rper jedes Lebewesens erstreckt. Paramatma ist sowohl innerhalb als auch au&szlig;erhalb des K&ouml;rpers vorhanden und existiert in jedem Molek&uuml;l</strong>. Eine Person, die dieses Konzept versteht, wird als vollst&auml;ndiger Gnani betrachtet. Paramatma, der Sch&ouml;pfer, nimmt menschliche Gestalt an, um den Menschen Weisheit zu vermitteln. W&auml;hrend dieser Manifestation behauptet Er, dass Er der Sohn und der Vater Paramatma ist. Diese Terminologie dient der Unterscheidung, es kann jedoch best&auml;tigt werden, dass sowohl der Sohn als auch der Vater von Natur aus gleich sind. Gott erscheint in der Gestalt des &bdquo;<strong>Sohn</strong>&ldquo; und wohnt sein ganzes Leben lang auf der Erde und vermittelt Weisheit. Dies dient als Methode zur Verbreitung von Weisheit. Alternativ sandte Gott einen Atma aus sich selbst aus, um Jeevas zu erschaffen, zu erhalten und zu t&ouml;ten. Der Atma, der die K&ouml;rper der Lebewesen regiert, wird auch als Sohn Gottes angesehen. Atma liegt in Paramatma und Jeevatma existiert im Bereich von Atma. Folglich ist der Ausdruck &bdquo;<strong>Ich bin (Atma) in meinem Vater</strong>&bdquo;wird verwendet, anstatt zu sagen: &bdquo;<strong>Ich bin (Atma) in meinem Vater, dem Paramatma.&ldquo; </strong>Da Jeeva innerhalb des von Atma regierten K&ouml;rpers pr&auml;sent ist, betont der Vers: &bdquo;Du (Jeevatmas) bist in mir (Atma).&ldquo; Der im ganzen K&ouml;rper verteilte Atma ist auch in dir (Jeevatma) verteilt, der sich an einem bestimmten Ort befindet. Daher hei&szlig;t es in dem Vers: &bdquo;<strong>An dem Tag, an dem du die Weisheit der Seelen kennst, wirst du wissen, dass ich in dir bin</strong>.&ldquo; Diejenigen, die mit dem Konzept der drei Seelen nicht vertraut sind, k&ouml;nnen nicht erkennen, wer in wem wohnt. Daher, <strong>Es ist von entscheidender Bedeutung, das Thraitha-Theorem zu verstehen, das erkl&auml;rt, wie Gott die Form von drei Seelen hat</strong>.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 134,
verse: ` <b>(56)	Das Johannesevangelium, 14. Kapitel, 25. und 26. Vers.</b>`,
meaning: `<b>
(25) All dies habe ich gesprochen, als ich noch bei euch war.
<br><br>
(26) Aber der Fürsprecher, der Heilige Geist, den der Vater in meinem Namen senden wird, wird euch alles lehren und euch an alles erinnern, was ich euch gesagt habe. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Bei einer Gelegenheit wandte sich Jesus an seine J&uuml;nger und sagte: &bdquo;W&auml;hrend ich noch bei euch bin, spreche ich diese Worte.&ldquo; Dar&uuml;ber hinaus &uuml;bermittelte er: &bdquo;Nach meinem Tod w&uuml;rde ein anderer F&uuml;rsprecher (Adaranakarta) zu Ihnen kommen.&ldquo; Dar&uuml;ber hinaus erkl&auml;rte er: &bdquo;<strong>Der Anwalt, der wie ich kommt, w&uuml;rde Sie an alles erinnern, was ich gesagt habe, und alles lehren, was ich nicht gesagt habe</strong>.&ldquo; Ein wichtiger Aspekt, den es hier zu ber&uuml;cksichtigen gilt, ist die Verwendung des Namens &bdquo;F&uuml;rsprecher&ldquo; durch Jesus. Er verdeutlichte die Bedeutung des Wortes &bdquo;F&uuml;rsprecher&ldquo; und erkl&auml;rte: &bdquo;<strong>F&uuml;rsprecher ist der Heilige Geist, den der Vater in meinem Namen senden wird</strong>.&ldquo; Eine genaue Untersuchung des Verses zeigt, dass er mit &bdquo;dem Vater&ldquo; beginnt und mit &bdquo;dem Heiligen Geist&ldquo; endet. Diese Reihenfolge legt nahe, dass der Vater Jesu der Heilige Geist ist. Man kann davon ausgehen, dass der Sohn derjenige ist, der sich verkleidet, w&auml;hrend der Vater derjenige ist, der sich nicht verkleidet. In Wirklichkeit sind beide ein und dasselbe<strong>. Derjenige, der Weisheit vermittelt und Karma beseitigt, wird als F&uuml;rsprecher (Tr&ouml;ster) bezeichnet.</strong>. Als Jesus behauptete, dass Gott derjenige ist, der Gott im Namen des F&uuml;rsprechers sendet, formulierte er: &bdquo;Der Vater ist der Heilige Geist, der meinen Namen senden wird.&ldquo; Das verdeutlicht das <strong>Gott nimmt eine Form an, nimmt die Gestalt des F&uuml;rsprechers an und vermittelt g&ouml;ttliche Weisheit</strong>. Es ist bemerkenswert, dass Jesus diese Worte &uuml;bermittelte, um sicherzustellen, dass auch diejenigen, die sich dieser Angelegenheit nicht bewusst sind, sie verstehen k&ouml;nnen.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 135,
verse: ` <b>(57)	Das Johannesevangelium, 15. Kapitel, 23. Vers. </b>`,
meaning: `<b>
(23) Whoever hates me hates my Father as well.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Ich habe von Anfang an behauptet, dass Gott in der Gestalt von Jesus verborgen ist und dass der Name, der der Verkleidung Gottes zugeschrieben wird, Jesus ist. Tats&auml;chlich ist niemand au&szlig;er dem Heiligen Geist im Namen Jesu gekommen. Folglich l&auml;stert jeder, der Jesus l&auml;stert, auch Paramatma. Der Tr&ouml;ster (F&uuml;rsprecher) ist nicht derjenige, der nach Jesus kommen wird. Jesus war auch ein F&uuml;rsprecher. Wann immer Gott menschliche Gestalt annimmt, sollte er stets der F&uuml;rsprecher genannt werden. <strong>Der F&uuml;rsprecher vermittelt Weisheit, die als Heilmittel gegen Karma dient. </strong>und Gott allein stellt Lehren bereit, die Karma beseitigen. Daher kann best&auml;tigt werden, dass der F&uuml;rsprecher ein Synonym f&uuml;r den Heiligen Geist ist. Allerdings erweist es sich als Herausforderung, Gott zu erkennen, wenn er auf der Erde menschliche Gestalt annimmt. Diese Herausforderung wird von Personen im Christentum unterstrichen, die behaupten, Gnani zu sein und Jesus als Bruder bezeichnen. Es wird betont, dass Jesus f&uuml;r niemanden ein Bruder ist. Unabh&auml;ngig davon, ob er als Jesus oder unter einem anderen Namen erscheint, wird er als der Heilige Geist identifiziert, was ihn zu einem Vater und nicht zu einem Bruder macht.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 136,
verse: `<b>(58)	Das Johannesevangelium, 15. Kapitel, 24. und 25 Vers. </b>`,
meaning: ` <b>
(24) Wenn ich unter ihnen nicht die Werke getan hätte, die sonst niemand getan hat, würden sie sich keiner Sünde schuldig machen. So wie es ist, haben sie es gesehen und dennoch haben sie sowohl mich als auch meinen Vater gehasst.
<br><br>
(25) Aber damit soll erfüllt werden, was in ihrem Gesetz geschrieben steht: „Sie hassten mich ohne Grund.“</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Die Aufgabe, die niemand auf Erden erfüllen kann, besteht darin, die Sünden eines Menschen zu vergeben und zu beseitigen. Jesus erklärte, dass es keine Sünden gegeben hätte, wenn er nicht die Aufgabe übernommen hätte, das Karma anderer zu vergeben. Als er bestimmten Menschen öffentlich ihre Sünden vergab, hegten diejenigen, die neidisch waren und seine Größe nicht kannten, Hass gegen ihn. Jesus zu hassen bedeutet, den Heiligen Geist zu hassen. Diejenigen, die Hass gegen Ihn hegten <b>ohne triftigen Grund</b> begangene Sünde.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 137,
verse: ` <b>(59)	Das Johannesevangelium, 15. Kapitel, 26 und 27 Vers. </b>`,
meaning: `<b>
(26) Wenn der Fürsprecher kommt, den ich euch vom Vater senden werde – der Geist der Wahrheit, der vom Vater ausgeht –, wird er über mich Zeugnis ablegen.
<br><br>
(27) Und auch du musst Zeugnis geben, denn du warst bei mir von Anfang an.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Jesus kam als F&uuml;rsprecher (Bhagavan) und erw&auml;hnte, dass Er einen weiteren F&uuml;rsprecher vom Vater zu den Menschen senden w&uuml;rde. In &Uuml;bereinstimmung mit dem spirituellen Gesetz &uuml;bermittelte er, was er sagen sollte. Es gibt jedoch keinen anderen F&uuml;rsprecher beim Vater; <strong>es gibt nur einen Gott </strong>der gelegentlich in der Gestalt eines Anwalts auftritt. Niemand sonst schickt ihn. Wenn Jesus und der Heilige Geist als gleich betrachtet werden, sind sowohl der Absender als auch der Kommende identisch. Jesus erkl&auml;rte: &bdquo;<strong>Der Geist der Wahrheit kommt als F&uuml;rsprecher und wird f&uuml;r mich Zeugnis ablegen</strong>.&ldquo; Wenn der Kommende und der Gehende derselbe sind, ist es nicht verwunderlich, dass der Kommende &uuml;ber den Gehenden spricht. W&auml;hrend der kommende F&uuml;rsprecher &uuml;ber Jesus spricht, werden sich seine J&uuml;nger zweifellos an ihn erinnern. Folglich werden die J&uuml;nger best&auml;tigen, dass Jesus gekommen ist und Weisheit vermittelt hat.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 138,
verse: ` <b>(60)	Das Johannesevangelium, 16. Kapitel, 7. Vers. </b>`,
meaning: `<b>
(7) Aber wahrlich, ich sage euch: Es ist zu eurem Besten, dass ich weggehe. Wenn ich nicht weggehe, wird der Befürworter  nicht zu dir kommen; aber wenn ich gehe, werde ich ihn zu dir senden.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   In der Analogie zu einer einzelnen Person, die in einem Theaterst&uuml;ck zwei Charaktere spielt, erscheint der zweite Charakter auf der B&uuml;hne, nachdem der erste Charakter gegangen ist. Da es sich um dieselbe Person handelt, die beide Rollen spielt, muss die erste Figur hinter die Kulissen gehen, damit die Person in der ersten Figur die zweite Rolle &uuml;bernehmen kann. Es ist nicht m&ouml;glich, dass die zweite Figur auftaucht, es sei denn, die erste Figur geht hinter die B&uuml;hne. Dieser &Uuml;bergang erfolgt, weil dieselbe Person beide Charaktere darstellt. Ebenso wird erwartet, dass derjenige, der in der Rolle Jesu kam, in einer zweiten Rolle auf die Erde zur&uuml;ckkehrt. Wenn Jesus das Volk verl&auml;sst, wird daher derjenige, der die Rolle Jesu gespielt hat, in einer zweiten Rolle zur&uuml;ckkehren. Der Heilige Geist &uuml;bernahm die Rolle Jesu. Wenn Er wiederkommen w&uuml;rde, um bei den Menschen zu sein, w&uuml;rde Er es tun Er muss seine Rolle als Jesus aufgeben und in einer neuen Rolle, mit einem neuen Namen und einem neuen Erscheinungsbild wieder auftauchen. So erkl&auml;rte Jesus: &bdquo;<strong>Es ist zu deinem Besten, dass ich weggehe. Wenn ich nicht weggehe, wird der Anwalt nicht zu Ihnen kommen</strong>.&ldquo; Obwohl er nicht ausdr&uuml;cklich erw&auml;hnte, dass er als F&uuml;rsprecher zur&uuml;ckkehren w&uuml;rde, sagte er: &bdquo;Ich werde ihn zu euch schicken, wenn ich gehe.&ldquo; Anhand dieser Worte kann jeder mit Intelligenz leicht erkennen, dass der Abgehende und der Zur&uuml;ckgekehrte derselbe sind.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 139,
verse: `<b>(61)	Das Johannesevangelium, 16. Kapitel, 8. Vers.  </b>`,
meaning: ` <b>
(8) When He comes, He will prove the world to be in the wrong about sin and righteousness and judgment.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Nachdem die Rolle Jesu hinter den Kulissen verschwindet, wird der F&uuml;rsprecher (Bhagavan) in der zweiten Rolle und zweiten Inkarnation auftreten. Der Begriff &bdquo;F&uuml;rsprecher&ldquo; stellt die Inkarnation Gottes dar, ist aber nicht Gottes Name. Derjenige, der als Anwalt auftritt, k&ouml;nnte jeden Namen auf der Welt haben. Daher kann niemand feststellen, ob diese Person die Inkarnation Gottes ist. Obwohl niemand die Form oder den Namen des F&uuml;rsprechers kennt, besteht eine gewisse Chance, ihn anhand seiner Handlungen zu erkennen. Wenn das <strong>F&uuml;rsprecher </strong>Als er auf die Erde kommt, spricht er &uuml;ber S&uuml;nde und enth&uuml;llt, wie sich ein Mensch S&uuml;nde aneignet, wo sie bis zum Tod gespeichert wird und welche Folgen die S&uuml;nde hat. <strong>Er erkl&auml;rt, dass g&ouml;ttliche Weisheit notwendig sei, um sich von erworbenen S&uuml;nden zu befreien</strong>, denn S&uuml;nden sind wie Brennholz und Weisheit ist wie Feuer. Nur durch Weisheit kann man der Erfahrung der S&uuml;nde entkommen und g&ouml;ttliche Weisheit erlangen. Die S&uuml;nde eines Menschen, der im Leben nicht die g&ouml;ttliche Weisheit erlangt, bleibt bis zum Tod bestehen. Eine solche Person muss am selben Tag, in derselben Minute und in demselben Augenblick nach dem Tod wiedergeboren werden. Der Todestag wird als letzter Tag bezeichnet. Der letzte Tag des Lebens wird zum ersten Tag des n&auml;chsten Lebens. Die Person muss innerhalb einer Sekunde nach ihrem Tod wiedergeboren werden. Man kann sagen, dass der Zeitunterschied zwischen Tod und Wiedergeburt nur eine Zehntelsekunde betr&auml;gt. In dieser kurzen Zeit, <strong>Atma </strong>beurteilt den Verstorbenen auf der Grundlage seiner S&uuml;nde und Punya. Atma entscheidet dann, was die Person in jedem Moment der zweiten Geburt essen, trinken und erleben muss. Das Leben des Geborenen wird durch das Urteil des Todes bestimmt. Wie ein Mensch sein n&auml;chstes Leben leben wird, wird auf der Grundlage des Urteils &uuml;ber seinen letzten Tag entschieden. Der Atma, der bei der verstorbenen Person ist, beurteilt sie aufgrund ihrer Taten aus der Kindheit richtig. Die im n&auml;chsten Leben zu ergreifenden Ma&szlig;nahmen werden entsprechend dem vorhandenen Karma entschieden. Niemand kann diese Entscheidung au&szlig;er Kraft setzen und jeder muss das Urteil akzeptieren.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 140,
verse: `<b>(62)	Das Johannesevangelium, 16. Kapitel, 12. Vers. </b>`,
meaning: `<b>
(12) Ich habe euch viel mehr zu sagen, mehr als ihr jetzt ertragen könnt. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Wenn Gott als Mensch inkarniert, ist es wichtig, sorgf&auml;ltig Weisheit zu vermitteln und dabei die Stimmungen der Menschen zu ber&uuml;cksichtigen. Die Lehren sollten auf die Zeit und den Kontext zugeschnitten sein. G&ouml;ttliche Weisheit muss mit Sensibilit&auml;t f&uuml;r die Bereitschaft des Publikums, die Wahrheit anzunehmen, vermittelt werden. Wenn Sie einer verlobten Frau im Vergleich dazu mitteilen, dass sie bereits Ihre Ehefrau ist, akzeptiert sie dies m&ouml;glicherweise nicht vor der Hochzeit, was zu potenziellen Konflikten f&uuml;hren kann. Es w&uuml;rde jedoch Gl&uuml;ck bringen, die gleichen Informationen nach der Hochzeit weiterzugeben ohne Streit. Ebenso besteht die Gefahr von Missverst&auml;ndnissen und Widerstand, wenn man g&ouml;ttliche Weisheit denen pr&auml;sentiert, die die Wahrheit m&ouml;glicherweise nicht tolerieren. Selbst wenn Gott menschliche Gestalt annimmt, muss die Wahrheit daher mit Bedacht weitergegeben werden. Wenn man beispielsweise behaupten w&uuml;rde, dass Ravana Brahma eine Inkarnation Gottes sei, k&ouml;nnte das heutige Publikum das Konzept einigerma&szlig;en verstehen. W&auml;re jedoch die gleiche Aussage vor 50 Jahren gemacht worden, h&auml;tte es m&ouml;glicherweise Meinungsverschiedenheiten gegeben, da die Menschen Ravana als b&ouml;se und monstr&ouml;s betrachteten. Daher gibt es F&auml;lle, in denen Weisheit, die fr&uuml;her geteilt werden sollte, zur&uuml;ckgestellt werden muss. In diesem Zusammenhang erkannte Jesus dieses Prinzip an, als er sagte: &bdquo;<strong>Ich habe dir viel mehr zu sagen, mehr als du jetzt ertragen kannst</strong>&ldquo;, an seine J&uuml;nger. Er erkannte, dass es f&uuml;r ihn an der Zeit war, sich von der Menschheit zu trennen, und teilte seinen J&uuml;ngern mit, dass der kommende F&uuml;rsprecher das &uuml;bermitteln w&uuml;rde, was er nicht gesagt hatte.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 141,
verse: `<b>(63)	Das Johannesevangelium, 16. Kapitel, 13. Vers. </b>`,
meaning: `<b>
(13) Wenn aber Er, der Geist der Wahrheit, kommt, wird Er euch in die ganze Wahrheit führen. Er wird nicht aus eigener Kraft sprechen; Er wird nur das sagen, was er hört, und er wird Ihnen sagen, was noch kommt.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus prophezeite über den bevorstehenden Fürsprecher. Der Begriff <b>„Geist der Wahrheit“</b> bedeutet „Gott der Weisheit.‘ Jesus vermittelte, dass der Gott, der nach ihm kommen würde, jeden in die Wahrheit führen und nur die Wahrheit weitergeben würde. Obwohl Gott menschliche Gestalt annahm und sich menschlich verhielt, erwähnte Jesus: „Als Mensch lehrt er nichts aus eigener Kraft; Er spricht nur, was er hört.“ Wenn man sich fragt, wer den Anwalt informiert hat, gibt es nur eine Quelle. Da es nur einen gibt, der kommt, ist Er derselbe, der die Weisheit vermittelt. Folglich ist es offensichtlich, dass die sichtbare Person auch artikulieren kann, was Gott gesprochen hat. Nur Gott kann Gottes Weisheit vermitteln. Anstatt zu behaupten, dass Menschen nicht in der Lage seien, Gottes Weisheit zu vermitteln, wird formuliert, dass der Fürsprecher nur das sagen wird, was er gehört hat.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 142,
verse: ` <b>(64) Das Johannesevangelium, 16. Kapitel, 14. und 15. Vers. </b>`,
meaning: ` <b>
(14) Er wird mich verherrlichen, denn von mir wird er empfangen, was er euch kundtun wird.
<br><br>
(15) Alles, was dem Vater gehört, gehört mir. Deshalb habe ich gesagt, dass der Geist von mir empfangen wird, was er euch kundtun wird.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Wenn Sie sich diesen Vers ansehen, ergeben einige Teile Sinn, andere hingegen nicht. Dieser Vers ist wie ein Versteckspiel mit Menschen. Zuvor erw&auml;hnte Jesus, dass der neu kommende Geist der Wahrheit lehren w&uuml;rde, was Er h&ouml;rt. Anschlie&szlig;end erkl&auml;rte er im n&auml;chsten Vers, dass der F&uuml;rsprecher das, was er von Jesus erhielt, nehmen und es den Menschen &uuml;bermitteln w&uuml;rde. Dar&uuml;ber hinaus behauptete Jesus, dass der F&uuml;rsprecher Dinge ausdr&uuml;cken w&uuml;rde, die Jesus nicht gesagt hatte. In der aktuellen Erkl&auml;rung erw&auml;hnt Jesus jedoch, dass der F&uuml;rsprecher die Menschen dar&uuml;ber informieren w&uuml;rde, was er von Jesus erhalten habe. Die scheinbare Widerspr&uuml;chlichkeit in den Aussagen Jesu kann zu Verwirrung f&uuml;hren. Dennoch gibt es einen bewussten Grund f&uuml;r diese Unklarheit. Jesus entschied sich daf&uuml;r, sich auf diese Weise auszudr&uuml;cken <strong>die wirklich</strong><strong> Diejenigen, die an Seiner Weisheit interessiert sind, w&uuml;rden verstehen, w&auml;hrend diejenigen, die kein Interesse daran haben, dies nicht tun w&uuml;rden</strong>. Er erkl&auml;rte weiter, dass der kommende F&uuml;rsprecher mitteilen w&uuml;rde, was Jesus gesagt hatte, um ihn zu verherrlichen. Jesus bekr&auml;ftigte dann, dass alles, was dem Vater geh&ouml;rt, Ihm geh&ouml;rt, wobei der Vater sich auf den Heiligen Geist oder Gott bezog. Durch die Betonung, dass Gottes Weisheit ihm geh&ouml;rt und dass der F&uuml;rsprecher vermitteln w&uuml;rde, was er von Jesus empfangen hatte, wird deutlich, dass Jesus und der Heilige Geist synonym sind. Anstatt ausdr&uuml;cklich zu sagen: &bdquo;<strong>ich bin Gott</strong>&bdquo;, Jesus formulierte es so: &bdquo;<strong>Alle Worte Gottes geh&ouml;ren mir</strong>.&ldquo;</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 143,
verse: ` <b>(65)	Das Johannesevangelium, 16. Kapitel, 16. Vers. </b>`,
meaning: `<b>
(16) Jesus sagte weiter: „In einer kleinen Weile wirst du mich nicht mehr sehen, und dann, nach einer kleinen Weile, wirst du mich sehen.“ </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus teilte seinen Jüngern mit, dass sie ihn nach einer Weile nicht mehr sehen würden, und deutete damit an, dass er sich aus der Mitte des Volkes zurückzog und dass er nicht mehr vor ihnen erscheinen würde. Er erwähnte auch, dass sie ihn nach einer Weile wiedersehen würden, was bedeutete, dass er seine physische Form verlassen und nicht in derselben körperlichen Manifestation wieder auftauchen würde. Diese Aussage verwirrte die Jünger und veranlasste sie zu der Frage, warum Jesus davon sprach, ihn nach einer Weile wiederzusehen. Als Jesus sagte: „In einer kleinen Weile wirst du mich nicht mehr sehen, und dann, nach einer kleinen Weile, wirst du mich sehen“, haben sich einige vielleicht gefragt, ob er sich vorübergehend verstecken und dann wieder auftauchen würde. In einem früheren Fall hatte Jesus jedoch erklärt: „Ich werde gehen. Der Anwalt wird nicht zu Ihnen kommen, es sei denn, ich gehe. Ich werde gehen und ihn schicken.“ Damit deutete Jesus an, dass er sein Versprechen erfüllen würde, abzureisen, und dass sie ihn nach einiger Zeit durch den kommenden Fürsprecher, der auch Jesus war, wiedersehen würden. In diesem Zusammenhang wird der Vers kohärent, wenn man erkennt, dass der Abgehende (Jesus) und der Zurückkommende (Fürsprecher) identisch sind. Jesus betonte, dass es gleichbedeutend ist, einen von beiden zu sehen, als nur einen zu sehen, da Jesus und der Fürsprecher ein und dasselbe sind.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 144,
verse: ` <b>(66) Das Johannesevangelium, 16. Kapitel, 17., 18., 19., 20., 21. und 22. Vers. </b>`,
meaning: `<b>
(17) Da sagten einige seiner Jünger zueinander: „Was meint er damit, wenn er sagt: ‚In einer kleinen Weile werdet ihr mich nicht mehr sehen, und nach einer kleinen Weile werdet ihr mich sehen‘?“ „Weil ich zum Vater gehe“?
<br><br>
(18) Sie fragten immer wieder: „Was meint Er mit ‚eine kleine Weile‘?“ Wir nicht Verstehe, was Er sagt.“
<br><br>
(19) Jesus sah, dass sie ihn danach fragen wollten, und sagte zu ihnen: „Fragt ihr einander, was ich meinte, als ich sagte: ‚In einer kleinen Weile werdet ihr mich nicht mehr sehen, und dann danach?‘ Eine Weile wirst du mich sehen?
<br><br>
(20) Wahrlich, ich sage euch: Ihr werdet weinen und trauern, während die Welt jubelt. Du wirst trauern, aber deine Trauer wird sich in Freude verwandeln.
<br><br>
(21) Eine Frau, die ein Kind zur Welt bringt, hat Schmerzen, weil ihre Zeit gekommen ist; Doch als ihr Baby zur Welt kommt, vergisst sie den Kummer vor Freude darüber, dass ein Kind auf die Welt kommt.
<br><br>
(22) Also mit dir: Jetzt ist deine Zeit der Trauer, aber ich werde dich wiedersehen und du wirst jubeln, und niemand wird dir deine Freude nehmen.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Als Jesus die Worte aussprach: „In einer kleinen Weile wirst du mich nicht mehr sehen, und dann, nach einer kleinen Weile, wirst du mich sehen“, war es für die Menschen schwer zu verstehen. Als Reaktion darauf veranschaulichte Jesus das Konzept anhand eines Gleichnisses von einer Frau, die ein Kind zur Welt bringt. Er teilte mit, dass die Jünger aufgrund seines Weggangs in gewissem Kummer leiden würden, ebenso wie die Frau während der Geburt Schmerzen verspürt. Er versicherte ihnen jedoch, dass sie Freude und Fröhlichkeit erleben würden, ähnlich der Frau, die den Schmerz vergisst, sobald das Kind geboren ist. Jesus wandte sich an die Anwesenden und räumte ein, dass sein Weggang eine Zeit des Schmerzes mit sich bringen würde, betonte jedoch, dass dieser Kummer von der Freude bei seiner Rückkehr übertönt werden würde.</div></div>
</span>`
},
{
chapterName: "Das Johannesevangelium",
chapterNumber: 5,
pageNumber: 145,
verse: ` <b>(67)	Das Johannesevangelium, 16. Kapitel, 25. Vers. </b>`,
meaning: `<b>
(25) Obwohl ich im übertragenen Sinne gesprochen habe, kommt eine Zeit, in der ich diese Art von Sprache nicht mehr verwenden werde, sondern euch klar und deutlich von meinem Vater erzählen werde. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Die Worte Jesu galten, wie bereits erw&auml;hnt, als unklar, was den Menschen Schwierigkeiten bereitete, sie zu verstehen, und zu Verwirrung f&uuml;hrte. Jesus selbst gab zu, bildlich gesprochen zu haben, um ein sofortiges Verst&auml;ndnis zu verhindern. Er behauptete auch: &bdquo;Ich werde es in Zukunft nicht mehr im &uuml;bertragenen Sinne sagen.&ldquo; Ich werde dir alles klar und deutlich sagen.&ldquo; Allerdings erscheint selbst diese Aussage etwas zweideutig. Jesus erkl&auml;rte, dass er bald gehen w&uuml;rde und der F&uuml;rsprecher mit dem Heiligen Geist kommen w&uuml;rde, um alles zu erkl&auml;ren. Er stellte klar, dass der F&uuml;rsprecher nur dann kommen w&uuml;rde, wenn er ginge, und dass die J&uuml;nger &uuml;ber seinen Weggang traurig sein w&uuml;rden, sich aber &uuml;ber ein Wiedersehen mit ihm freuen w&uuml;rden. Nun f&uuml;gt er hinzu: &bdquo;<strong>Bisher sagte ich undeutlich. Wenn ich zur&uuml;ckkomme, werde ich dir alles klar erz&auml;hlen</strong>.&ldquo; Diese Aussage f&uuml;hrt zu einer gewissen Unsicherheit dar&uuml;ber, ob der Kommende ein anderer F&uuml;rsprecher ist oder ob Jesus selbst zur&uuml;ckkehren wird.</div></div>
</span>`
},
{
chapterName: "Die Schrift der Johannes-Offenbarung",
chapterNumber: 6,
pageNumber: 146,
verse: ` <b>(14)	Die Offenbarung des Johannes, 9. Kapitel, 4., 5. und 6. Vers s.</b>`,
meaning: `<b>
(4) Ihnen wurde gesagt, sie sollten weder dem Gras der Erde noch irgendeiner Pflanze oder einem Baum Schaden zufügen, sondern nur den Menschen, die nicht das Siegel Gottes auf ihrer Stirn trugen.
<p>
<div class="container">
          <img src="assets/img/Devunimudra_inside.png"   style="width:100%;">
          <div class="top-left">
           <u>DAS SIEGEL GOTTES</u>
          </div>
          <div class="top-right1">
          Natur
           </div>
           <div class="top-right2">
           Heiliger Geist
          </div>
          <div class="dm-top-right3">
          Vater
          </div>
          <div class="dm-top-right4">
          Sohn
          </div>
          <div class="dm-bottom-left2">
          Körper
           </div>
          <div class="bottom-left">
            <u>Für alle Religionen</u>
           </div>
        </div>
</p>
(5) Sie durften sie nicht töten, sondern nur fünf Monate lang foltern. Und die Qual, die sie erlitten, war wie die des Stichs eines Skorpions, wenn er zuschlägt.
<br><br>
(6) In jenen Tagen werden die Menschen den Tod suchen, ihn aber nicht finden; sie werden sich danach sehnen zu sterben, aber der Tod wird ihnen entgehen. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">  	Im dritten Vers vor diesen Versen, Offenbarung 9:3, hei&szlig;t es: &bdquo;<strong>Aus dem Rauch kamen Heuschrecken auf die Erde und erhielten Macht wie die Skorpione der Erde</strong>.&ldquo; Dieser Vers weist darauf hin, dass die Heuschrecken aus dem Rauch auftauchten. Der hier genannte Rauch entsteht jedoch nicht durch die Verbrennung von Holz oder anderen Materialien. Stattdessen handelt es sich um eine dichte Wolke, die im Morgengrauen eines Wintertages erscheint, wenn die Sonne noch nicht aufgegangen ist. Diese Wolke reduziert das Sonnenlicht und erzeugt Dunkelheit. Aus dieser dunklen Wolke kommen die Heuschreckenschw&auml;rme. Da sie in gro&szlig;en Gruppen wie eine Armee auf der Erde ankommen, werden sie als &bdquo;Heuschreckenschw&auml;rme&ldquo; bezeichnet. Niemand wei&szlig; genau, woher die Heuschrecken kommen, aber man geht davon aus, dass sie aus dem wolkigen Nebel des Himmels stammen. Ihre Geburt und ihr Wachstum bleiben ein R&auml;tsel, und sie tauchen ohne klaren Ursprung aus dem Rauch in der Leere auf. Heuschreckenschw&auml;rme k&ouml;nnen Hunderte, Tausende oder sogar Millionen umfassen.

  Die Heuschrecken &uuml;bertragen zahlreiche Krankheiten, unter denen Menschen leiden. Obwohl sie wie gew&ouml;hnliche Heuschrecken aussehen m&ouml;gen, bilden sie eine Armee von Engeln, die als Diener Gottes dienen und auf seinen Befehl entsandt werden. Gott befahl den Heuschrecken, Menschen zu befallen, und durch seinen Befehl wirkt sich diese Heuschreckenarmee auf die Menschheit aus. Aus einem unsichtbaren Reich kommend, verstecken sie sich und bei&szlig;en Menschen, dringen in Form von Krankheiten in ihren K&ouml;rper ein und verursachen Qualen. Gott hat sie mit so viel Gift ausgestattet wie Skorpione auf der Erde. Die Menschen leiden erheblich unter der Ankunft von Heuschrecken aus der unsichtbaren Welt, die als Leidenstr&auml;ger f&uuml;r menschliche S&uuml;nden dienen. Sie wurden angewiesen, das Gras der Erde, keine Pflanzen oder B&auml;ume au&szlig;er Menschen zu sch&auml;digen. W&auml;hrend allgemein davon ausgegangen wird, dass Heuschrecken Gras, Pflanzen und B&auml;ume sch&auml;digen, stellt der Vers klar, dass diese Heuschrecken nicht der Vegetation schaden, sondern es auf Menschen abgesehen haben. Der Ursprung der Heuschrecken, ihr Lebensunterhalt und ihre Mission sind f&uuml;r den Menschen immer noch unbekannt.

  Aus den vier hier erw&auml;hnten Versen geht hervor, dass das Heer der Engel in Form von Heuschrecken kommt, um die Menschen zu plagen. Die Armee der Diener Gottes in Form von Heuschrecken besitzt die Macht, Menschen bis zu f&uuml;nf Monate lang zu qu&auml;len, doch ihnen fehlt die Macht, den Tod herbeizuf&uuml;hren. Wenn die Heuschrecken Menschen unsichtbar bei&szlig;en, l&ouml;sen sie eine Krankheit aus, die Schmerzen verursacht, die denen eines Skorpionstichs &auml;hneln. Die Intensit&auml;t des Leidens variiert je nach individuellem Karma und reicht von leichtem Unbehagen bis zum Ausma&szlig; eines Skorpionstichs. Da niemand diesem Schmerz entkommen kann, muss der Mensch ihn ertragen. Der Vers weist darauf hin, dass sich Menschen in schweren Leiden m&ouml;glicherweise den Tod als Ausweg w&uuml;nschen, es ihnen aber nicht gestattet ist ihr eigenes Leben beenden. Daher muss der Mensch den Schmerz ertragen. Der Vers bringt weiter zum Ausdruck, dass ihnen sogar der Tod entgeht, was bedeutet, dass Menschen dem durch die Heuschrecken verursachten Leid nicht entkommen k&ouml;nnen.

  Wenn die Heuschrecken, die aus unsichtbaren Rauchwolken stammen, hundertmal kommen, werden sie m&ouml;glicherweise nur einmal sichtbar. Sie bleiben unbemerkt und k&ouml;nnen verschiedene Auswirkungen auf den Menschen haben und Sch&auml;den in Form von Krankheiten oder auf andere Weise verursachen. Der Vers weist darauf hin, dass ihr Schaden ausschlie&szlig;lich auf Menschen gerichtet ist und sich in jeder Form manifestieren kann. Es wird behauptet, dass die Menschen diesen Schaden ertragen werden, weil den Heuschrecken befohlen wird, ihn anzurichten. Selbst wenn Menschen aufgrund unertr&auml;glichen Leidens den Tod suchen, bleibt dieser unerreichbar, da der Tod vor ihnen davonl&auml;uft. Obwohl die Menschen auf verschiedene Weise unter den &bdquo;unsichtbaren Heuschrecken (Dienern)&ldquo; leiden, die Gott gesandt hat, denken sie nicht &uuml;ber die Ursachen ihres Leidens nach. Sie k&ouml;nnen ihrem Leiden nicht durch Gottes Worte entkommen.

  Weltweit treten viele neue Krankheiten auf, doch die Menschen denken oft nicht &uuml;ber deren Ursprung nach. Das Erkennen einer neuen Krankheit braucht Zeit, und die Suche nach einem Heilmittel kann noch l&auml;nger dauern. So wie ein Heilmittel f&uuml;r eine Krankheit entdeckt wird, kann eine andere schwer fassbare Krankheit auftauchen. Neben Krankheiten gibt es auch nicht diagnostizierbare Beschwerden und Leiden. W&auml;hrend manche Menschen anerkennen, dass unsichtbare Kr&auml;fte zum Leid beitragen, wei&szlig; niemand, wie man ihnen effektiv entgegenwirken kann. <strong>Die einzige M&ouml;glichkeit, durch unsichtbare Engel verursachtes Leid zu vermeiden, besteht darin, das Siegel Gottes zu tragen, ein Symbol der Macht Gottes. Gott befahl seinen Dienern, nur diejenigen zu verfolgen, die nicht das Siegel Gottes tragen</strong>. Obwohl einige glauben, dass sichtbare Heuschrecken Pflanzen und B&auml;umen schaden k&ouml;nnen, <strong>Gott wies seine unsichtbaren Heuschrecken an, ausschlie&szlig;lich denen Schaden zuzuf&uuml;gen, denen das Siegel Gottes auf der Stirn fehlt</strong>. In der letzten g&ouml;ttlichen Schrift wird in den Versen 5:22 und 22:32 das Siegel Gottes erw&auml;hnt. Das Akshara Parabrahma Yoga der ersten g&ouml;ttlichen Schrift, der Bhagavad-Gita, weist auf das Siegel Gottes hin. In meiner Schrift hei&szlig;t es: &bdquo;<strong>Das Siegel Gottes</strong>&bdquo;Wir beschreiben detailliert, wie das Siegel Gottes aussieht. Anstatt andere zu hinterfragen, glauben Sie an Gott und tragen Sie das Siegel Gottes, da es nicht an eine bestimmte Religion gebunden ist. Das Siegel Gottes wird in drei g&ouml;ttlichen Schriften erw&auml;hnt. Die Offenbarung der Bibel erkl&auml;rt die Katastrophen, die dadurch verursacht werden, dass man das Siegel Gottes nicht tr&auml;gt. Christen sollten nicht z&ouml;gern, Gottes Siegel zu tragen; es ist eine Frage des Glaubens. <strong>Sch&uuml;tzen Sie sich unabh&auml;ngig von Ihrer Religion vor Leid. H&ouml;ren Sie mir zu und tragen Sie das &bdquo;Siegel Gottes&ldquo;, das bisher unbekannt war. Sch&uuml;tze dich vor Leiden. </strong></div></div>
</span>`
},
{
chapterName: "Drei Finger.",
chapterNumber: 7,
pageNumber: 147,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">  	Das Portr&auml;t Jesu erscheint den Menschen selten. Bei n&auml;herer Betrachtung, <strong>Man sieht Jesus, wie er mit seiner rechten Hand drei Finger zeigt</strong>. Jesus vermittelte etwa drei Jahre lang g&ouml;ttliche Weisheit, und selbst nach seinem Tod scheint sein Portr&auml;t den Menschen Lehren zu vermitteln. Obwohl die Interpretationen variieren k&ouml;nnen, verstehe ich beim Betrachten des Bildes, dass es eine entscheidende Botschaft aus den Lehren Jesu enth&auml;lt. In der ersten g&ouml;ttlichen Schrift wird Gott in drei Teilen dargestellt: <strong>Kshara, Akshara und Purushottama</strong>. In &auml;hnlicher Weise wird in der letzten g&ouml;ttlichen Schrift beschrieben, dass Gott drei Aspekte hat: <strong>Passagier, Fahrer und Zeuge</strong>. In der zweiten g&ouml;ttlichen Schrift wird gesagt, dass Gott aus drei Teilen besteht: <strong>Sohn, Vater und der Heilige Geist</strong>. Die drei Aspekte Gottes werden in der Bhagavad-Gita, der Bibel und dem Koran als dieselbe Weisheit dargelegt. Die grundlegende Weisheit dieser drei Schriften liegt im Verst&auml;ndnis der drei Aspekte Gottes. Sobald man die drei Aspekte Gottes versteht, wird ein vollst&auml;ndiges Verst&auml;ndnis der Weisheit Gottes m&ouml;glich.

  Allerdings wissen Hindus, die die Bhagavad-Gita lesen, nicht, wer <strong>Jeevatma (Kshara) </strong>Und <strong>Atma (Akshara) </strong>Sind. Ebenso wissen Christen nicht, wer der Sohn und der Vater sind. Muslime wissen nicht, wer <strong>der Beifahrer und der Fahrer sind</strong>. In der Bhagavad-Gita, die ich geschrieben habe, habe ich erw&auml;hnt, dass Hindus sich des verderblich Jeeva und des im K&ouml;rper gegenw&auml;rtigen ewigen Gottes nicht bewusst sind. In der Bibel habe ich auch festgestellt, dass Christen die Einzelheiten der beiden S&ouml;hne nicht verstehen &ndash; <strong>der Sohn und der Vater</strong>. Ebenso in der Schrift &bdquo;<strong>Die Diamantverse in der letzten g&ouml;ttlichen Schrift</strong>&bdquo;Ich erw&auml;hnte, dass Muslime nichts davon wissen <strong>zwei Allahs</strong>. Menschen dieser drei Religionen haben m&ouml;glicherweise keine Ahnung von den anderen beiden Teilen Gottes, die den Kern ihrer jeweiligen Schriften ausmachen. Der einzige Begriff, den jeder erkennt, ist &bdquo;Gott&ldquo;. Ohne es zu wissen, verehren sie alle den dritten Teil, bekannt als Purushottama in der Bhagavad-Gita, den Heiligen Geist in der Bibel und den Zeugen im Koran. Gott selbst erkl&auml;rte, dass es nicht richtig sei, den dritten Teil Gottes (den Heiligen Geist) anzubeten, der jenseits aller Anbetung und aller Dharmas liegt. Dennoch betet jeder &bdquo;<strong>der Gott, der nichts braucht</strong>.&ldquo; Man kann sagen, dass die menschliche Unwissenheit darin besteht, nicht zu wissen, dass Gott unsere Anbetung nicht braucht.

  Was Christen betrifft, so sind sie sich dessen nicht bewusst: &bdquo;<strong>zwei S&ouml;hne</strong>&ldquo;, erw&auml;hnt in ihrer Schrift. Obwohl die Bibel zwei S&ouml;hne erw&auml;hnt, glauben Christen, dass es nur einen Sohn gibt und sind mit der Weisheit zweier S&ouml;hne nicht vertraut. Sie wissen vielleicht nicht, dass es zwei S&ouml;hne gibt &ndash; <strong>der bleibende Sohn und der vor&uuml;bergehende Sohn</strong>. Die Bibel bezeichnet sie als <strong>der Sohn und der eingeborene Sohn</strong>, aber Christen wissen nicht, wer diese beiden S&ouml;hne sind. Ebenso darf niemand in irgendeiner Religion wissen, dass es zwei G&ouml;tter gibt &ndash; <strong>der Gott, der der Vater ist, und der Gott, der der Gro&szlig;vater ist</strong>. Auch wenn diese Wahrheit in der Heiligen Schrift wissenschaftlich dargelegt wird, glauben manche Menschen vielleicht nicht daran, und andere leugnen die Existenz zweier G&ouml;tter g&auml;nzlich. Obwohl es in den heiligen Schriften hei&szlig;t, dass es nur einen Gott gibt, den es anzubeten gilt, ist unklar, ob dieser Gott der Vater oder der Gro&szlig;vater ist.

  Diejenigen, die g&ouml;ttliche Weisheit besitzen und diejenigen, die die heiligen Schriften lesen, verehren aufgrund ihres Verst&auml;ndnisses nur einen Gott. Sie m&ouml;gen das verehren <strong>Gro&szlig;vater-Gott</strong>, der nicht angebetet werden sollte, statt dessen <strong>Vater Gott</strong>, der angebetet werden sollte. Die Begriffe &bdquo;Vater-Gott&ldquo; und &bdquo;Gro&szlig;vater-Gott&ldquo; m&ouml;gen neu erscheinen, aber diese Angelegenheit steht tats&auml;chlich in ihren Schriften. Menschen verstehen die wahre Weisheit oft nicht. Wenn ihm jemand die Wahrheit mitteilt, kann es sein, dass er ver&auml;rgert reagiert und sie ablehnt. In meiner Bibel habe ich gelesen, dass es zwei S&ouml;hne gibt &ndash; den Menschensohn und den Sohn Gottes &ndash; und dass der Heilige Geist, der die Position des Gro&szlig;vaters innehat, nicht angebetet werden sollte. Diejenigen, die den Heiligen Geist f&uuml;r Gott halten und ihn als solchen verehren, befinden sich m&ouml;glicherweise jetzt in einem Zustand der Verwirrung. Jesus lehrte viel &uuml;ber die beiden S&ouml;hne und den Heiligen Geist. Er portr&auml;tierte sogar &bdquo;<strong>Die beiden S&ouml;hne und ihr Vater, der Heilige Geist</strong>&ldquo;, mit seinen Fingern. Jesus zeigte mit seiner rechten Hand die beiden Finger &ndash; den Zeigefinger und den Mittelfinger &ndash; und auch den Daumen. Ich habe verstanden, dass der Daumen im Portr&auml;t ein Hinweis auf den Heiligen Geist ist. Da Gott derjenige ist, der dem Intellekt (Buddhi) Wahrnehmungskraft verleiht, zeigte Jesus gem&auml;&szlig; wahrer Weisheit sowohl den Vater (Atma) als auch den Sohn (Bhagavan) mit zwei Fingern (Zeige- und Mittelfinger). Es versteht sich, dass sie den bleibenden Sohn und den vor&uuml;bergehenden Sohn darstellen. Die Heilige Schrift fasst das zusammen <strong>Der Heilige Geist wird erst bekannt werden, wenn diese beiden S&ouml;hne bekannt sind</strong>. Jeder sollte wissen, dass es sich um ein spirituelles Geheimnis handelt, das der gesamten menschlichen Gesellschaft bekannt sein sollte <strong>die Sache mit den beiden S&ouml;hnen</strong>. Wenn Sie sich die drei Finger Jesu im Bild auf der n&auml;chsten Seite ansehen, erinnern sie uns an den Heiligen Geist und die beiden S&ouml;hne &ndash; Atma und den eingeborenen Sohn.</div></div>
<ion-row><ion-col class="ion-text-center">
<img src="assets/img/jesus.png"/>
</ion-col></ion-row>
</span>`
},
{
chapterName: "Karfreitag oder schlechter Freitag?",
chapterNumber: 8,
pageNumber: 148,
verse: ``,
meaning: ``,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext"> 	Bestimmte Ereignisse im Leben bringen Gl&uuml;ck, w&auml;hrend andere einem Menschen Kummer bereiten. In Momenten der Freude ist der Mensch fr&ouml;hlich und genie&szlig;t gutes Essen und gute Kleidung. Umgekehrt verliert man im Kummer den Appetit und das Interesse an verschiedenen Aspekten des Lebens. Das Diwali-Fest in Indien beispielsweise wird mit Feuerwerksk&ouml;rpern gefeiert, um an die Niederlage des b&ouml;sen D&auml;mons Narakasura an diesem Tag zu erinnern. In der Antike freuten sich die Schriftgelehrten, Pharis&auml;er und Gelehrten, die Jesus vor Gericht brachten und seine Hinrichtung orchestrierten, &uuml;ber seinen Tod. Sie feierten jedes Jahr den Todestag Jesu als Karfreitag und betrachteten ihn als einen Tag des Gl&uuml;cks. Seitdem ist das Fest als &bdquo;Karfreitag&ldquo; bekannt.

  In der Anfangszeit feierten Menschen, die sich der Gr&ouml;&szlig;e Jesu nicht bewusst waren, zusammen mit Schriftgelehrten und Gelehrten das Fest. Dies geschah, als der Wert und die Weisheit Jesu unbekannt waren. In der heutigen Zeit feiern selbst diejenigen, die mit der Weisheit Jesu vertraut sind, den Tag des Todes Jesu als Karfreitag. W&auml;hrend es &uuml;blich ist, an einem guten Tag freudig zu feiern, wird erwartet, dass der Tag, an dem Jesus starb, f&uuml;r seine Anh&auml;nger ein schmerzhafter Tag sein wird. Es ist &uuml;berraschend zu sehen, wie Christen, die Jesus als ihren Gott bekennen, gl&uuml;cklich neue Kleidung tragen und gutes Essen essen, ohne ihre Trauer &uuml;ber den Tod Jesu an diesem Tag zum Ausdruck zu bringen.

  Tats&auml;chlich sollte der Tag, an dem Jesus get&ouml;tet wurde, als &bdquo;schlechter Tag&ldquo; bezeichnet werden. Die Anh&auml;nger Jesu sollten ihre Trauer zum Ausdruck bringen und an diesem Tag auf das Essen verzichten. Es ist verwirrend, den Tag als Fest zu feiern und ihn &bdquo;Karfreitag&ldquo; zu nennen, als w&auml;re es ein Tag des Guten. Sogar diejenigen, die Jesus als ihren Familiengott betrachten, nehmen an der Feier teil und zeigen damit, dass sie den Wert Jesu nicht verstehen. Diejenigen, die Jesus zutiefst verehren, sollten diesen Tag als einen &bdquo;schlechten Freitag&ldquo; betrachten. Prediger tragen die Verantwortung, die Menschen &uuml;ber die Bedeutung des schlechten Freitags aufzukl&auml;ren und sie davon abzuhalten, ihn zu feiern. Menschen, die nicht zwischen einem Todestag und einem Geburtstag unterscheiden k&ouml;nnen, haben kein Verst&auml;ndnis f&uuml;r die Gr&ouml;&szlig;e der Weisheit Gottes. Wenn das Oberhaupt einer Familie stirbt, trauert die ganze Familie, und die gleiche Ehrfurcht sollte ihm entgegengebracht werden, wenn Jesus, der mehr gesch&auml;tzt werden sollte als ein Familienmitglied, stirbt. Den Tod Jesu als Fest ohne Trauer zu feiern, ist ein Fehler, wenn man annimmt, dass es sich um einen gl&uuml;ckverhei&szlig;enden Tag handelt. Jesus sagte, "<strong>Wer seinen Vater oder seine Mutter mehr liebt als mich, ist meiner nicht w&uuml;rdig; Wer seinen Sohn oder seine Tochter mehr liebt als mich, ist meiner nicht w&uuml;rdig</strong>.&ldquo; Wenn Menschen um den Tod eines Familienmitglieds trauern, den Tod Jesu aber nicht betrauern und ihn stattdessen als Fest feiern, wie k&ouml;nnen sie dann der Barmherzigkeit Jesu w&uuml;rdig sein? Deshalb lasst uns den Karfreitag als &bdquo;schlechten Freitag&ldquo; bezeichnen, um Jesus zu ehren. Es wird zu einem Akt der Ehrfurcht vor Jesus, wenn wir diesen Tag als einen b&ouml;sen Tag betrachten und trauern, ohne ihn zu feiern. Ansonsten, <strong>Wir dr&uuml;cken unsere Bewunderung f&uuml;r Jesus nur mit unseren Worten aus, nicht in unserem Herzen</strong>. Wenn Sie Jesus ehren, lieben, anbeten und zu ihm beten, dann verbreiten Sie die Vorstellung vom Karfreitag als schlechtem Freitag und helfen Sie allen, ihn zu verstehen. Dann werden Sie ein wahrer Anh&auml;nger Jesu. Wenn Sie den Karfreitag aufgeben, passiert Ihnen nichts Schlimmes; Es passieren nur gute Dinge.
</div></div>
<ion-row><ion-col class="ion-text-center">
Unter
Der einzige Guru der drei Religionen<br>
<b>Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu</b><br><br>
Auch wenn tausend Menschen zustimmen - eine Lüge kann nicht zur Wahrheit werden.<br>
Auch wenn tausend Menschen verneinen - die Wahrheit kann nicht zur Lüge werden.
</ion-col></ion-row>
</span>`
},
{
chapterName: "Ein Brief eines Hindus",
chapterNumber: 9,
pageNumber: 149,
verse: ``,
meaning: ``,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem">
<div class="poemtext"><em>Zuerst Niederwerfungen vor Swami&hellip;.</em>

  Jai Srirama! Mein Name ist Pittala Thirumalesha, 36 Jahre alt, Dorf Nalgonda, Distrikt Telangana. Beruf: Job, Kaste: Mudiraju (Boya-Kaste), Religion: Hindu-Religion, Beruf des Vaters: Erster Bauer, sp&auml;ter Rikschafahrer, Beruf der Mutter: Obstverk&auml;uferin, Meine Ausbildung: <strong>M.Sc., B.Ed. (Mathematik).</strong>

  Sir, ich schreibe diesen Brief mit der Absicht, dass meine spirituelle Einf&uuml;hrung etwas Gutes f&uuml;r diese Gesellschaft bewirken wird. Nachdem Sie Ihre Schriftstelle gelesen haben: &bdquo;<strong>Edelsteine in der Zweiten G&ouml;ttlichen Schrift</strong>&bdquo;Ich wollte diesen Brief schreiben. Es scheint, dass das Schreiben einer Bibelstelle die k&uuml;hnste Tat eines hinduistischen (Indhu) Swamiji ist. Viele denken, dass ein Swamiji zwar die Bhagavad-Gita schreiben darf, aber keine Bibel. Ich habe Ihre Schriften, die Bhagavad-Gita und den Koran bereits gelesen. Jetzt habe ich durch Ihr Schreiben auch die Weisheit der Bibel kennengelernt. Durch Sie habe ich die g&ouml;ttliche Weisheit in den drei Schriften der drei Religionen verstanden. Da ich den aktuellen Zustand der Gesellschaft kenne, bringe ich mit diesem Brief einige meiner Ansichten in guter Absicht zum Ausdruck.

  Die erste Schriftstelle, die ich lese, ist <strong>&bdquo;Das Geheimnis des Bermudadreiecks.&ldquo; </strong>Durch diese Schriftstelle erfuhr ich das Geheimnis, warum Flugzeuge und Schiffe im Bermudadreieck verschwinden. Ich bin so froh, diese seltsame Tatsache erkannt zu haben, die wie ein Hollywood-Film war. Dann lesen Sie die Bibelstelle <strong>&bdquo;Geister &ndash; Bhutas (Die wahren Vorf&auml;lle)&ldquo; </strong>und erfuhr wissenschaftliche Informationen &uuml;ber die &bdquo;unsichtbare (subtile) Welt&ldquo;. Au&szlig;erdem war ich so &uuml;berrascht, als ich erfuhr, wie Gottes Regierung und das g&ouml;ttliche Gesetz funktionieren, und ich danke meinem Gott daf&uuml;r, dass er das gr&ouml;&szlig;te Geheimnis kennt. Dann las ich die heiligen Schriften <strong>&bdquo;Die Geschichte eines Wahrheitssuchers&ldquo; </strong>Und <strong>&bdquo;Sri Krishna Gott oder Bhagavan?&ldquo; </strong>Ich war so gl&uuml;cklich, ein gro&szlig;es Geheimnis aus der Schriftstelle &bdquo;Sri Krishna Gott oder Bhagavan?&ldquo; zu erfahren. Nachdem ich nun ein Ziel f&uuml;r mein Leben gefunden habe, bin ich gl&uuml;cklich, den Krishna-Tempel in Prabodhashramamu, Chinna Podamala, besucht und Lord Krishna verehrt zu haben. Seit meinem Besuch im Prabodhashramam im Juli 2012 freue ich mich jeden Tag aufs Neue, die Weisheit aus Ihren 93 Schriften und 150 Vortr&auml;gen in mich aufgenommen zu haben.

  Durch die Schrift <strong>&bdquo;Tempeltraditionen (verborgene Wahrheiten)&ldquo; </strong>Ich habe etwas &uuml;ber die Bedeutung von Tempeln gelernt. Ich habe die wahre Bedeutung der unterdr&uuml;ckten Traditionen erfasst <strong>&bdquo;Indu Sampradayas (Traditionen).&ldquo; </strong>Aus der Schrift <strong>&bdquo;Mana Pandugalu (Unsere Feste)&ldquo; </strong>Ich habe nicht nur die Bedeutung von &bdquo;Pandu (Frucht)&ldquo; in &bdquo;Panduga (Fest)&ldquo; verstanden, sondern auch den wesentlichen Zweck von Festen und die Absicht der vorgeplanten Gedanken unserer &Auml;ltesten. Wie Sie in dieser Schriftstelle sagen, ist es hundertprozentig wahr, dass zuerst eine spirituelle Entwicklung und dann eine pers&ouml;nliche Entwicklung und sp&auml;ter eine soziale Entwicklung stattfindet. Jede Schriftstelle, die von Ihnen kommt, ist eine Weisheitsgrube. Jede Predigt ist ein Dharma-Schatz. Ihre Worte sind nicht nur f&uuml;r den Menschen von Nutzen, sondern f&uuml;r alle Lebewesen. Das ist die Wahrheit, die ich sage, nachdem ich sie in den letzten sechs Jahren erlebt habe.

  Ich war verzweifelt, als Ihre Hindu-Religion abf&auml;llige Worte gegen Sie, den gro&szlig;en Kaiser, sagte. Aber ich teile in diesem Brief einige Informationen mit, um alle &uuml;ber die Fakten zu informieren. Das Thraitha-Theorem der Bhagavad-Gita vermittelt die wahre Botschaft von Lord Krishna. Swamis Schriften <strong>&bdquo;Worte der Weisheit in der letzten g&ouml;ttlichen Schrift (704 Seiten)&ldquo; </strong>Und <strong>&bdquo;Diamanten in der letzten g&ouml;ttlichen Schrift&ldquo; </strong>lie&szlig; die Welt die g&ouml;ttliche Weisheit verstehen, die Gabriel (die Sonne) dem Propheten Mohammed sandte. Die Schrift des Yogeeswarlu <strong>&bdquo;Juwelen in der Zweiten G&ouml;ttlichen Schrift (352 Seiten)&ldquo; </strong>vermittelte die wahre Botschaft der Evangelien Jesu.

  Hier ist mein Appell an die Intellektuellen, die mit religi&ouml;sem Hass in den Schatten gestellt werden, an gnadenlose religi&ouml;se D&auml;monen, an unvollst&auml;ndige Gnanis, die verr&uuml;ckt nach der Religion sind, an politische Monster, die den Wert des Ashrams nicht kennen, an falsche Propheten, die die Gesellschaft mit Kastenkr&auml;tze und religi&ouml;sem Wahnsinn in die Irre f&uuml;hren, und an Rationalisten, die &hellip; die den Grund nicht kennen, wahrheitssuchende Gemeinschaften, die sich der Wahrheit nicht bewusst sind, und &Auml;lteste, die die Gesellschaft mit den Worten &bdquo;Gott&ldquo;, &bdquo;Seele&ldquo;, &bdquo;Anbetung&ldquo; und &bdquo;Weisheit&ldquo; in den Aberglauben treiben. Bitte lesen Sie mindestens eine von Swamis Schriften gr&uuml;ndlich durch, um die Gro&szlig;artigkeit dieser Schriften kennenzulernen <strong>&bdquo;Thraitha-Theorem&ldquo; </strong>und achten Sie genau darauf, was darin steht. Betrachten wir eines von Swamis Worten.

  <strong>&bdquo;Religionen sind verboten. Kasten sind irrational. Alle drei &ndash; die Bhagavad-Gita, die Bibel und der Koran &ndash; sind Teile derselben g&ouml;ttlichen Schrift. Wenn Ihr Gef&uuml;hl &uuml;ber die Kaste hinausgeht, treten Sie sofort dem Prabodha Seva Samithi bei. Gott m&ouml;chte, dass du Gnani &ndash; Sri &ndash; bist. Sri. Sri. Acharya Prabodhananda Yogeeswarlu&ldquo;</strong>

  Swamiji sagte nicht nur die oben genannten Worte, sondern f&uuml;hrte auch Ehen zwischen Kasten und Religionen durch. Er heiratete auch eine andere Kastenfrau. Handelt es sich um religi&ouml;sen Hass und giftige Schriften &uuml;ber einen so gro&szlig;en Swami? M&auml;nner denken einmal mit Diskretion.

  Swamis Schriften vermittelten die wahre Weisheit der Vemana-Gedichte. Sie erz&auml;hlen die wahre Bedeutung der philosophischen Gedichte von Veerabrahmam. Der Atmalinga Shatakam &uuml;bermittelte spirituelle Informationen. Er hat viele der gr&ouml;&szlig;ten der Welt unbekannten Geheimnisse und die g&ouml;ttlichen Informationen bereitgestellt, die zum spirituellen Wohlstand der Menschheit beitragen. Viele Atheisten, die aus seinen Schriften Weisheit gewonnen haben, sind wahre Gl&auml;ubige geworden. Sogar die Narren wurden Rationalisten. Blinde Gl&auml;ubige wurden mit dem wissenschaftlichen Ansatz zu spirituellen Wissenschaftlern. Sogar Terroristen haben sich ver&auml;ndert und sind zu Gnanis geworden.

  <strong>Ein Hindu, der seine Weisheit kennt, ist ein wahrer Indu (wahrer Gnani).</strong>

  <strong>Ein Christ, der seine Weisheit kennt, ist ein wahrer Christ (wahrer Gl&auml;ubiger Gottes). Ein Muslim, der seine Weisheit kennt, ist ein wahrer Muslim (wirklich gehorsam gegen&uuml;ber Gott).</strong>

  Seine Schriften beseitigen Karma und vergeben S&uuml;nden. Wenn Sie seine Schrift mit Hingabe und Glauben auf den K&ouml;rper legen, an dem Sie Schmerzen haben, wird sie ohne jegliche Unterst&uuml;tzung haften, bis sie das Karma, das sie verursacht hat, zerst&ouml;rt und Linderung verschafft. Auch wenn dies &uuml;berraschend sein mag, handelt es sich doch um eine offensichtliche Wahrheit, die auf meiner Erfahrung basiert.

  Durch seine Schriften erfuhr die Welt die Wahrheit &uuml;ber &bdquo;Bhagavan Ravana Brahma&ldquo;, die Inkarnation Gottes im Thraitha Yuga. Selbst Sita Devi, von der alle behaupten, sie sei das Opfer, beschuldigte Ravana Brahma nicht. Warum konnten die Arier, die das Ramayana schrieben, nicht sagen, wie alt Ravana Brahma zum Zeitpunkt der Entf&uuml;hrung von Sita war? Wenn diese Frage beantwortet w&uuml;rde, w&uuml;rden die urspr&uuml;nglichen verborgenen Geschichten des Ramayana ans Licht kommen. Ravana Brahma besuchte Sita Devi in Ashokavana mit seiner Frau Mandodari und <a href="https://en.wikipedia.org/wiki/Indrajit">Meghnaad</a>, aber warum wurde er als b&ouml;sartiger Mann dargestellt? Auch wenn die &Auml;lteren Ravana Brahma nahm nicht an Sitas Swayamvara teil. Ist es nicht eine Schande zu schreiben, dass er nicht in der Lage war, den Bogen Shivas bei Sitas Swayamvara zu heben? Als er Sita, seine Tochter, ohne sie zu ber&uuml;hren, in sein K&ouml;nigreich Sri Lanka mitnahm, w&uuml;rden Sie dann f&auml;lschlicherweise schreiben, dass er ein l&uuml;sterner Mann war? Einige egoistische Menschen haben Verschw&ouml;rungen gegen ihn geplant und behauptet, er habe sie aus Lust genommen; Wie ist das m&ouml;glich, wenn man davon ausgeht, dass jeder, der Sita ber&uuml;hrt, verbrannt werden w&uuml;rde? Zumindest im Moment sollte diese Gemeinschaft die Wahrheit im Ramayana kennen. Mandodari Devi, die das Geheimnis kannte, dass Sitas Leiden und die Inkarnation von Bhagavan Ravana Brahma bald enden w&uuml;rden, erz&auml;hlte den Menschen ihres K&ouml;nigreichs, dass Ravana Brahma Sita zum Wohl von Sita nach Lanka gebracht habe. Wir m&ouml;chten die Portr&auml;ts des gro&szlig;en Sri Bhagavan Ravana Brahma und Srimati Mandodari Devi sehen.

  Du wei&szlig;t nicht wirklich, wer du bist. Ver&ouml;ffentlichen Sie keine unn&ouml;tigen Junk-Nachrichten auf Facebook und YouTube. Wenn Sie l&auml;stern, sammeln Sie jahrelanges Karma an. H&ouml;ren Sie nicht zu, wenn Sie nicht m&uuml;ssen. Wenn Sie die Definition des Dharmas und die Anzahl der Dharmas nicht kennen, rufen Sie die Gnanis nicht zur Debatte im &ouml;ffentlichen Fernsehen an.

  Der Thraitha-Satz ist der eigentliche Standard. Dieser Standard wird verwendet, um das Ausma&szlig; des religi&ouml;sen Hasses zu messen. Durch die Weisheit im Thraitha-Theorem wird die Welt erfahren, wie viel Weisheit in den Religionen und wie viel Hass in den Religionen steckt. Die Weisheit des Thraitha-Theorems offenbart dieser Welt, wie viel Weisheit in den Religionen und wie viel Hass in den Religionen steckt. Prabodha Seva Samiti und seine f&uuml;nf Mitgliedsorganisationen glauben fest daran, dass alles, was geschieht, mit Gottes Erlaubnis geschehen wird.

  <strong>Prabodhashramam ist die einzige Organisation, die spirituelle Entwicklung erm&ouml;glicht</strong>. Alle anderen Organisationen setzen sich f&uuml;r Pers&ouml;nlichkeitsentwicklung und eine bessere Gesellschaft ein. Aber jeder sollte erkennen, dass es keine pers&ouml;nliche und soziale Entwicklung geben wird, wenn keine spirituelle Entwicklung stattfindet.

  Die Weisheit von Yogeeswarlu ist kasten- und religionsfrei. Deshalb kommen Menschen aller Religionen &ndash; Hindus, Muslime und Christen &ndash; in Harmonie zu ihm und freuen sich, die wahre g&ouml;ttliche Weisheit zu kennen. Wie Veerabrahmam sagte: Seine Weisheit vereint alle drei Religionen. Brahmam sagte in Kalagnanam (Prophezeiung): &bdquo;<strong>Alle gro&szlig;en Halbg&ouml;tter (Devatas) sind im Anandashramam.</strong>&bdquo;Devatas kamen und redeten voller Freude, um die Weisheit ihres Vaters zu erfahren. Er sagte auch: &bdquo;<strong>Prabodhashramam verf&uuml;gt &uuml;ber das h&ouml;chste Ma&szlig; an Weisheit. Diejenigen im Prabodhashramam bestehen aus Attributen des Allm&auml;chtigen. Dieser Allm&auml;chtige war nur Ananda Guru. Ananda Guru ist auch Guru f&uuml;r dich und mich.</strong>&bdquo;Solche Botschaften von Worten, die von Brahmam selbst gesprochen wurden, finden sich in Swamis Schriften. Sie sollten Gottes Weisheit mit Umsicht und Flei&szlig; erfassen.

  Sind diejenigen, die die Bhagavad-Gita nicht lesen, Retter der hinduistischen Dharmas? Werden die Narren, die die Ungerechtigkeit in der Geschichte nicht kennen, die Hindu-Religion aufrechterhalten? Kann man eine gleichberechtigte Gesellschaft aufbauen, ohne das &bdquo;Geheimnis des Anfangs&ldquo; und das &bdquo;Geheimnis der Sch&ouml;pfung&ldquo; zu kennen? Erkennen Sie die G&uuml;te der Heiligen Schrift, indem Sie sie geduldig und ohne religi&ouml;sen Hass lesen. Wenn du dich schlecht f&uuml;hlst, lass es. Es gibt keine Regel, dass jeder es glauben sollte. <strong>Die Schriften und Lehren von Thraitha Siddantha</strong>, die f&uuml;r die Menschheit so n&uuml;tzlich sind und ein rationales wissenschaftliches und spirituelles Bewusstsein haben und das offenbaren Geheimnisse von <strong>Brahma-, Karma- und Bhakti-Yogamen </strong>im Detail mit Jeevatma, Atma und Paramatma, sind f&uuml;r die gegenw&auml;rtige Gesellschaft von wesentlicher Bedeutung.

  Die Organisationen &ndash; UNO, World Peace Council, Police Act, IPC, CrPC, Prison Acts, CBI, CBCID, Intelligence Reports, ACB, Human Rights Watch, Woman Rights, SC ST Atrocities Act, Indian Trusts Act, Muslim Law, Christian Law, Arbeitsgesetze, GOs der Zentralregierung, GOs der Landesregierung, Wahlkommission, indische Verfassung, indische Gerichte, RTI Act, Information Technology Act 2000 &ndash; existieren tats&auml;chlich zum Wohle des menschlichen Wohlergehens. Spirituelle Institutionen haben die Verantwortung, den Menschen zu sagen, welche Art von Weisheit f&uuml;r ihr Wohlergehen geeignet ist. Prabodhashramam und seine Partner nehmen in solchen verantwortungsvollen Institutionen den ersten Platz ein. Vor allem d&uuml;rfen wir nicht vergessen, dass es auch so ist <strong>&bdquo;G&ouml;ttliches Gesetz und g&ouml;ttliche Verwaltung.&ldquo;</strong>

  Der Kern der drei g&ouml;ttlichen Schriften besteht darin, die drei Seelen zu erkl&auml;ren. Ein Leben ohne g&ouml;ttliche Weisheit ist eine Verschwendung. Gott gab dem Menschen das Leben, nur um Gottes Weisheit zu kennen. Gottes Weisheit geht &uuml;ber Kaste und Religion hinaus. Yogeeswarlu lieferte uns die wahre Bedeutung von Lord Krishnas Weisheit durch die &bdquo;erste g&ouml;ttliche Schrift Bhagavad-Gita&ldquo;. Er gab uns die Koranweisheit, die der Prophet Muhammad durch Gabriel erhielt, in den Schriften &bdquo;Weisheitsworte in der letzten g&ouml;ttlichen Schrift&ldquo; und &bdquo;Diamanten&ldquo;. in der Letzten G&ouml;ttlichen Schrift.&lsquo; Er erz&auml;hlte uns die Weisheit des Evangeliums in &sbquo;Juwelen in der Zweiten G&ouml;ttlichen Schrift&lsquo;. Er gibt uns praktische, echte g&ouml;ttliche Weisheit durch Schriften und Lehren. Erkenne die Weisheit, die Er gesagt hat, trage das Siegel Gottes und erhalte Vergebung der S&uuml;nden. Wenn man aufmerksam zuh&ouml;rt und es &uuml;bt, hat man Gl&uuml;ck. Wenn du nicht zuh&ouml;rst, ist das dein Karma. Alles geschieht nach Gottes Willen, und Gott wei&szlig; es.

  <strong>Hindus sollten wissen, welchen Gott sie anbeten sollen. Muslime m&uuml;ssen wissen, wer die beiden Allahs (die beiden Sch&ouml;pfer) sind. Christen m&uuml;ssen wissen, wer die beiden S&ouml;hne sind.</strong>

  Ein Mensch wird nie zu Gott, aber Gott kann als Mensch kommen. Um den Gott in menschlicher Gestalt zu erkennen, m&uuml;ssen wir zun&auml;chst seine Weisheit in uns haben. Um Gott zu erkennen, m&uuml;ssen wir diese beiden Prinzipien kennen, die die &Auml;ltesten gesagt haben. Wie der Yogi Vemana sagte, k&ouml;nnen seine Gedichte auf 1000 Arten verstanden werden, und in &auml;hnlicher Weise kann die Weisheit des Thraitha-Theorems auf 9000 Arten verstanden werden. Gem&auml;&szlig; dem Sprichwort &bdquo;Shraddhavan labhate gnanam (Wer Interesse hat, wird Weisheit erlangen)&ldquo; k&ouml;nnen diejenigen, die nachdenklich und intellektuell sind, die Weisheit von Thraitha verstehen.

  Geben Sie zumindest jetzt den Gedanken an Kaste und Religion auf und erkennen Sie die wahre g&ouml;ttliche Weisheit. Wenn Sie es jetzt nicht wissen, werden Sie es nie erfahren. Die Zeit dr&auml;ngt. Mach es jetzt.

  Ich biete Yogeeswarlu-F&uuml;&szlig;en Duftblumen an, um uns mehr g&ouml;ttliche Weisheit zu geben. Ich gr&uuml;&szlig;e Sie grenzenlos mit meinem ganzen Herzen, meiner ganzen Seele und meinem ganzen Verstand.</div></div>
    <ion-row><ion-col class="ion-text-center">
    Ihr gehorsamer Diener <br>
    <b>Thirumalesu </b>
    </ion-col></ion-row>
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
Der Zweiten Göttlichen Heiligen Schrift
</div>
<div class="img1-title3">
Die Evangelien Im Thraitha-Theorem
</div>
<div class="img1-title4">
 Autor: Der einzige Guru dreier Religionen (Hindu, Moslem, Christ), der Herrscher des spirituellen Königreichs, der Autor von mehr als hundert göttlichen heiligen Büchern, Indu Gnana Dharma Pradata, der sensationelle Autor, Adi Karta der Traita-Lehre
</div>
<div class="img1-title5">
Sri Sri Sri Acharya Prabodhananda Yogeeswarulu
</div>
</div>
</p>`
},
{
chapterName: "GLOSSAR",
chapterNumber: 11,
pageNumber: 151,
verse: ``,
meaning: ``,
pageText: `
<ion-row>
<ion-col class="ion-text-center">
<b>GLOSSAR</b></ion-col>
</ion-row>
<p><strong>Achara Prakruti</strong>: Unver&auml;nderliche f&uuml;nf Elemente &ndash; Himmel, Luft, Feuer, Wasser und Erde. Diejenigen (Prakruti), die kein Karma haben. Prapancha. Pancha Bhutas.</p>
<p><strong>Ungerechtigkeit</strong>: Sie sind gegen Dharmas. Sie verursachen gutes Karma, schlechtes Karma oder beides. In der Bhagavad-Gita erw&auml;hnte Adharmas &ndash; Veden studieren, Wohlt&auml;tigkeitsorganisationen durchf&uuml;hren, Opfer darbringen, Bube</p>
<p><strong>Agami-Karma</strong>: Neu kommende S&uuml;nde und Punya von der Geburt bis zum Tod. Drohendes Karma.</p>
<p><strong>Ein Schinken</strong>: Teil im K&ouml;rper, aber kein Guna.</p>
<p><strong>Antahkaranams</strong>: F&uuml;nf subtile K&ouml;rperteile &ndash; Jeeva (Jeevatma), Manas, Buddhi, Chittam und Aham.</p>
<p><strong>Astrologie</strong>: Wer spirituelle Weisheit kennt, kennt mit seiner Weisheit das Karma des anderen und informiert ihn. Um die zuk&uuml;nftige Weisheit zu erkennen, ist ein Auge erforderlich. Das, was mit Weisheitslicht erkannt wird.</p>
<p><strong>Atma</strong>: Einer, der mit sterblichen Wesen zusammenlebt. Einer, der unverg&auml;nglich ist. Einer, der in allen lebenden K&ouml;rpern vorhanden ist. Atma. Akshara purusha. Unsterbliche Seele.</p>
<p><strong>Bhagavan</strong>: Einer, der von Gott kam. Einer, der mit Gottes Informationen kam: Christus, Svayambhu oder Tr&ouml;ster oder der eingeborene Sohn. F&uuml;rsprecher oder Helfer. Bote Gottes. Guru.</p>
<p><strong>Buddhi</strong>: Es ist der Intellekt im K&ouml;rper, der die Vor- und Nachteile einer Handlung analysiert.</p>
<p><strong>Chara Prakruti</strong>: Das sich ver&auml;ndernde Prakruti. Jagath. Lebewesen. Chara Prakruti. Die Gesamtzahl der K&ouml;rperteile jedes Lebewesens betr&auml;gt 25.</p>
<p><strong>B&uuml;ndnisblut</strong>: Weisheitskraft. Essenz der Weisheit. Gottes Weisheit ohne Fesseln von Karma.</p>
<p><strong>Devatas:</strong> Unsichtbare Menschen. Halbg&ouml;tter.</p>
<p><strong>Dharma Shastra</strong>: Schriftstelle mit Dharmas (Weisheit). Gottes Gebote. Brahma Vidya. Super Wissenschaft.</p>
<p><strong>Dharmas</strong>: G&ouml;ttliche Weisheit. G&ouml;ttliche Lehren oder Prinzipien. Gebote. Das Befolgen von Dharmas f&uuml;hrt zur Befreiung von Leben und Tod.</p>
<p><strong>Geist</strong>: Person, die mit einem feinstofflichen K&ouml;rper lebt. Teufel oder D&auml;mon.</p>
<p><strong>Jeevatma</strong>: Sterbliche Seele im K&ouml;rper. Kshara Purusha oder Jeeva. <strong>Gnanendriyas</strong>: F&uuml;nf Sinnesorgane &ndash; Auge, Ohr, Nase, Zunge und Haut. <strong>Weiser</strong>: Eine Person, die g&ouml;ttliche Weisheit und Dharmas kennt. Brahma Gnani.</p>
<p><strong>Karma-Chakra</strong>: Es handelt sich um einen Satz mit 108 Teilen. Jeder der 12 Teile des Karma-Chakras hat eine andere Art von Karma. Jede Art von Karma ist weiter in neun Teile unterteilt. Zw&ouml;lf Teile haben 108 (12*9) Arten von Karma.</p>
<p><strong>Karma Visarga</strong>: Karma in winzige Teile aufteilen.</p>
<p><strong>Karma Yogam</strong>: Wenn ein Jeevatma Aham in seinem K&ouml;rper erkennt und nicht auf das h&ouml;rt, was Aham sagt, dann bekommt er kein Karma. Es ist Jeevas Kampf gegen Aham.</p>
<p><strong>Karma Yogi</strong>: Eine Person, die Weisheit kennt und Karma Yogam praktiziert.</p>
<p><strong>Karma</strong>: Unsichtbare S&uuml;nde und Verdienst.</p>
<p><strong>Karmendriyas</strong>: H&auml;nde, Beine, Mund, Anus und Sexualorgan.</p>
<p><strong>Geist</strong>: Es fungiert als Kommunikator zwischen Gehirn und Organen. Es erinnert sich und erinnert sich an Dinge.</p>
<p><strong>Moksham</strong>: Befreiung von Geburt, Tod, Leben, Leiden usw. Vereinigung mit Gott. Paraloka, Mukti oder Erl&ouml;sung. Befreiung.</p>
<p><strong>Paramatma</strong>: Was sich von Atma unterscheidet. Vater ganzer Lebewesen und Pancha Bhutas. Gott, der Heilige Geist, Allah, Purushottama, Uttama Purusha oder der Vater von Paraloka. H&ouml;chste Seele.</p>
<p><strong>Prakriti</strong>: Kombination aus Chara Prakruti und Achara Prakruti. Natur.</p>
<p><strong>Prarabdha Karma</strong>: Vorherbestimmtes Karma. Dies geschieht in diesem Leben von der Geburt bis zum Tod. Prarabdha-Karma wird entschieden, wenn ein Mann geboren wird.</p>
<p><strong>Verdienst</strong>: Es kommt von den guten Taten. Das, was im Leben Freude bereitet.</p>
<p><strong>Purusha</strong>: Bezieht sich auf Paramatma in jedem Lebewesen.</p>
<p><strong>Sanchita-Karma</strong>: Das Karma, das sich nach dem Erleben von Karma in jeder Geburt wie ein Haufen ansammelt, wird Sanchita-Karma genannt.</p>
<p><strong>S&uuml;nde</strong>: Es kommt von schlechten Taten. Es verursacht Schwierigkeiten und Kummer.</p>
<p><strong>Tanmatras</strong>: Abgeleitete Energien (Sehen, H&ouml;ren, Riechen, Schmecken und Tasten), die mit Sinnesorganen verbunden sind.</p>
<p><strong>Upadesha</strong>: Feuer der Weisheit als N&auml;chstenliebe erlangen. Land, das kein Land ist (Jeder, der ein kluges Auge hat, muss sehen). Weisheitsenergie, Paramatma. Taufe. Weisheitseinweihung.</p>
<p><strong>Yogi</strong>: Einer, der im Yoga ist. Der Macher von Yogam. Eine Person, die g&ouml;ttliche Weisheit kennt und Dharmas praktiziert.</p>`
},
{
chapterName: "Videos",
chapterNumber: 12,
pageNumber: 152,
verse: `
`, meaning: `
`, pageText: `
`
},
    {
      chapterName: "Teilen",
      chapterNumber: 13,
      pageNumber: 153,
      verse: `
    `, meaning: `
    `, pageText: `

    <ion-row>
    <ion-col style="font-size:17px">
      <ion-title class="ion-text-center"> <b>Die Apps teilen</b></ion-title><br>
    </ion-col>
  </ion-row>

  <ion-row>

    <ion-col class="ion-text-center">

          <ion-row>
            <ion-col>
              <span><b>Klicken Sie auf den untenstehenden Link, um diese App mit Ihren Freunden und Familienmitgliedern zu teilen</b></span>

            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
     <span><b>Whatsapp: <a href="https://wa.me/?text=https://play.google.com/store/apps/dev?id=7706717796953849920">Thraitha Theorem Apps für Android</a></b></span>
              <br>
              <span><b>Whatsapp <a href="https://wa.me/?text=https://apps.apple.com/us/developer/three-souls/id1541256362">Thraitha Theorem für iOS</a></b></span>
              <br>
     <span><b>Telegram <a href="https://play.google.com/store/apps/dev?id=7706717796953849920">Thraitha Theorem Apps für Android</a></b></span>
     <br>
     <span><b>Telegram  <a href="https://telegram.me/share/url?url=https://apps.apple.com/us/developer/three-souls/id1541256362">Thraitha Theorem für iOS</a></b></span>

            </ion-col>
          </ion-row>


    </ion-col>

  </ion-row>

    `
    },

  ];


  chapters: any = [

    { title: "Gottes Weg", component: 0, chapterNumber: 0, subs: null, icon: 'information' },
    { title: 'Geheimnis der Schöpfung', component: 1, chapterNumber: 1, subs: null, icon: 'information' },
    {
      title: 'Das Matthäusevangelium', component: null, chapterNumber: 2, icon: 'book',
      subs: [
        {
          shloka: "3-7. Ihr Natternbrut! Wer hat dich gewarnt, vor dem kommenden Zorn zu fliehen?",
          component: 2,
          subs: null
        },
        {
          shloka: "3-11. Ich taufe dich mit Wasser, um Manas (Geist) zu verändern. Aber nach mir kommt einer, der stärker ist als ich, dessen Sandalen ich nicht tragen kann. Er wird dich mit dem Heiligen Geist und Feuer taufen.",
          component: 3,
          subs: null
        },
        {
          shloka: "3-12. Seine Wurfgabel ist in seiner Hand, und er wird seine Tenne reinigen, seinen Weizen in die Scheune sammeln und die Spreu mit unauslöschlichem Feuer verbrennen.",
          component: 4,
          subs: null
        },
        {
          shloka: "3-16. Sobald Jesus getauft war, stieg er aus dem Wasser. In diesem Moment öffnete sich der Himmel und er sah, wie der Geist Gottes wie eine Taube herabkam und sich auf ihm niederließ.",
          component: 5,
          subs: null
        },
        {
          shloka: "3-17. Und eine Stimme vom Himmel sagte: „Das ist mein Sohn, den ich liebe; mit ihm bin ich sehr zufrieden.“",
          component: 5,
          subs: null
        },
        {
          shloka: "4-10. Jesus sagte zu ihm: „Geh weg von mir, Satan! Denn es steht geschrieben: Betet den Herrn an sei dein Gott und diene Ihm allein.“",
          component: 6,
          subs: null
        },
        {
          shloka: "5-10. Selig sind diejenigen, die wegen Gerechtigkeit (Weisheit) verfolgt werden, denn ihnen gehört das Königreich von Paraloka.",
          component: 7,
          subs: null
        },
        {
          shloka: "5-17. Glaube nicht, dass ich gekommen bin, um das Gesetz (Dharma Shastra) oder die Propheten abzuschaffen; Ich bin nicht gekommen, um sie abzuschaffen, sondern um sie zu erfüllen.",
          component: 8,
          subs: null
        },
        {
          shloka: "5-18. Denn wahrlich, ich sage euch: Bis der Himmel und Erde verschwinden, wird nicht der kleinste Buchstabe, nicht der kleinste Federstrich auf irgendeine Weise aus dem Gesetz (Dharma Shastra) verschwinden, bis alles vollendet ist.",
          component: 9,
          subs: null
        },
        {
          shloka: "5-19. Daher wird jeder, der eines der geringsten dieser Gebote außer Acht lässt und andere entsprechend lehrt, im Königreich von Paraloka als der Geringste bezeichnet, aber wer diese Gebote ausübt und lehrt, wird im Königreich von Paraloka als „Groß“ bezeichnet.",
          component: 10,

          subs: null
        },
        {
          shloka: "5-20. Denn ich sage euch: Wenn eure Gerechtigkeit nicht die der Pharisäer und Gesetzeslehrer übertrifft, werdet ihr mit Sicherheit nicht in das Königreich von Paraloka eingehen.",
          component: 11,
          subs: null
        },
        {
          shloka: "5-28. Aber ich sage euch: Wer eine Frau lüstern ansieht, hat in seinem Herzen bereits Ehebruch mit ihr begangen.",
          component: 12,
          subs: null
        },
        {
          shloka: "5-29. Wenn dich dein rechtes Auge straucheln lässt, reiße es aus und wirf es weg. Es ist besser für dich, einen Teil deines Körpers zu verlieren, als dass dein ganzer Körper in die Hölle geworfen wird.",
          component: 13,

          subs: null
        },
        {
          shloka: "5-30. Und wenn deine rechte Hand dich zum Stolpern bringt, dann schneide sie ab und wirf sie weg. Es ist besser für dich, einen Teil deines Körpers zu verlieren, als dass dein ganzer Körper in die Hölle fährt.",
          component: 13,

          subs: null
        },
        {
          shloka: "6-3. Aber wenn du Dharma machst, lass deine linke Hand nicht wissen, was deine rechte Hand tut.",
          component: 14,

          subs: null
        },
        {
          shloka: "6-4. Damit dein Geben im Verborgenen geschieht. Dann wird dich dein Vater belohnen, der sieht, was im Verborgenen geschieht.",
          component: 14,

          subs: null
        },
        {
          shloka: "6-6. Aber wenn du betest, geh in dein Zimmer, schließe die Tür und bete zu deinem Vater, der unsichtbar ist. Dann wird dich dein Vater belohnen, der sieht, was im Verborgenen geschieht.",
          component: 15,

          subs: null
        },
        {
          shloka: "6-7. Wenn ihr betet, plappert nicht weiter wie die Heiden, denn sie glauben, dass sie wegen ihrer vielen Worte erhört werden.",
          component: 16,

          subs: null
        },
        {
          shloka: "6-8. Sei nicht wie sie, denn dein Vater weiß, was du brauchst, bevor du ihn fragst.",
          component: 16,

          subs: null
        },
        {
          shloka: "7-7. Bitte, und es wird dir gegeben; Suche und du wirst finden; klopfe an und die Tür wird dir geöffnet.",
          component: 18,
          subs: null
        },
        {
          shloka: "7-8. Denn jeder, der bittet, empfängt; wer sucht, findet; Und wer anklopft, dem wird die Tür geöffnet.",
          component: 18,
          subs: null
        },
        {
          shloka: "7-13. Treten Sie durch das schmale Tor ein. Denn weit ist das Tor und breit ist der Weg, der ins Verderben führt, und viele gehen hindurch.",
          component: 17,
          subs: null
        },
        {
          shloka: "7-14. Aber klein ist das Tor und schmal der Weg, der zum Leben führt, und nur wenige finden ihn.",
          component: 17,
          subs: null
        },

        {
          shloka: "7-15. Hütet euch vor falschen Propheten. Sie kommen im Schafspelz zu Ihnen, aber Innerlich sind sie wilde Wölfe.",
          component: 19,
          subs: null
        },
        {
          shloka: "7-21. Nicht jeder, der zu mir sagt: „Herr, Herr“, wird in das Königreich eingehen Paraloka, aber nur derjenige, der den Willen meines Vaters tut, der in Paraloka ist.",
          component: 20,
          subs: null
        },
        {
          shloka: "7-22. Viele werden an jenem Tag zu mir sagen: „Herr, Herr, haben wir nicht in deinem Namen prophezeit und in deinem Namen Dämonen ausgetrieben und in deinem Namen viele Wunder vollbracht?“",
          component: 21,
          subs: null
        },
        {
          shloka: "7-23. Dann werde ich ihnen deutlich sagen: „Ich habe euch nie gekannt.“ Weg von mir, ihr Übeltäter!‘",
          component: 21,
          subs: null
        },
        {
          shloka: "8-22. Jesus sagte zu ihm: „Folge mir nach und lass die Toten ihre eigenen Toten begraben.“",
          component: 22,

          subs: null
        },
        {
          shloka: "9-12. Als Jesus dies hörte, sagte er: „Nicht die Gesunden brauchen einen Arzt, sondern die Kranken. “",
          component: 23,

          subs: null
        },
        {
          shloka: "9-13. Denn ich bin nicht gekommen, die Gerechten zu rufen, sondern die Sünder.",
          component: 23,

          subs: null
        },
        {
          shloka: "8-23. Dann stieg er in das Boot und seine Jünger folgten ihm.",
          component: 24,
          subs: null
        },
        {
          shloka: "8-24. Plötzlich kam ein heftiger Sturm auf den See, so dass die Wellen über das Boot hinwegfegten. Aber Jesus schlief.",
          component: 24,
          subs: null
        },
        {
          shloka: "8-25. Die Jünger gingen hin und weckten ihn und sagten: „Herr, rette uns!“ Wir werden ertrinken!“",
          component: 24,
          subs: null
        },
        {
          shloka: "8-26. Er antwortete: „Du Kleingläubiger, warum fürchtest du dich so?“ Dann stand er auf und tadelte den Wind und die Wellen, und es war völlig ruhig.",
          component: 24,
          subs: null
        },
        {
          shloka: "9-6. Ich möchte, dass Sie wissen, dass der Menschensohn auf Erden die Autorität hat, Sünden zu vergeben. Also sagte er zu dem gelähmten Mann: „Steh auf, nimm deine Matte und geh nach Hause.“ Dann stand der Mann auf und ging nach Hause.",
          component: 25,

          subs: null
        },
        {
          shloka: "10-20. Denn nicht ihr werdet es sein, der redet, sondern der Geist eures Vaters, der durch euch redet.",
          component: 26,

          subs: null
        },
        {
          shloka: "10-30. Sogar die Haare auf deinem Kopf sind gezählt.",
          component: 27,

          subs: null
        },
        {
          shloka: "10-34. Glauben Sie nicht, dass ich gekommen bin, um Frieden auf die Erde zu bringen. Ich bin nicht gekommen, um Frieden zu bringen, sondern um ein Schwert.",
          component: 28,

          subs: null
        },
        {
          shloka: "10-35. Denn ich bin gekommen, um einen Mann gegen seinen Vater und eine Tochter gegen sie aufzuhetzen Mutter, eine Schwiegertochter gegen ihre Schwiegermutter.",
          component: 28,

          subs: null
        },
        {
          shloka: "10-36. Die Feinde eines Mannes werden die Mitglieder seines eigenen Haushalts sein.",
          component: 28,

          subs: null
        },
        {
          shloka: "10-37. Wer seinen Vater oder seine Mutter mehr liebt als mich, ist meiner nicht würdig; Wer seinen Sohn oder seine Tochter mehr liebt als mich, ist meiner nicht würdig.",
          component: 29,
          subs: null
        },
        {
          shloka: "10-38. Wer sein Kreuz nicht auf sich nimmt und mir nachfolgt, ist meiner nicht würdig.",
          component: 30,
          subs: null
        },
        {
          shloka: "10-40. Wer dich aufnimmt, nimmt mich auf, und wer mich aufnimmt, nimmt den auf, der mich gesandt hat.",
          component: 31,
          subs: null
        },
        {
          shloka: "11-9. Was wolltest du dir ansehen? Ein Prophet? Ja, das sage ich euch, und (ich bin) mehr als ein Prophet.",
          component: 32,
          subs: null
        },
        {
          shloka: "11-28. Kommt alle Müden und Beladenen zu mir, und ich werde euch Ruhe geben.",
          component: 33,
          subs: null
        },
        {
          shloka: "12-17. Damit sollte sich erfüllen, was durch den Propheten Jesaja gesagt wurde.",
          component: 34,
          subs: null
        },
        {
          shloka: "12-18. Hier ist mein Diener, den ich erwählt habe, der, den ich liebe, an dem ich Freude habe; Ich werde meinen Geist auf ihn legen.",
          component: 34,
          subs: null
        },
        {
          shloka: "12-19. Er wird den Nationen Gerechtigkeit (Weisheit) verkünden; Er wird nicht streiten oder schreien; Niemand wird seine Stimme auf der Straße hören.",
          component: 34,
          subs: null
        },
        {
          shloka: "12-20. Ein geknicktes Rohr wird er nicht zerbrechen und einen glimmenden Docht wird er nicht auslöschen, bis er die Gerechtigkeit (Weisheit) zum Sieg gebracht hat.",
          component: 34,
          subs: null
        },
        {
          shloka: "12-21. Auf seinen Namen werden die Nationen ihre Hoffnung setzen.",
          component: 34,
          subs: null
        },
        {
          shloka: "12-31. Ich sage euch also, jede Art von Sünde und Verleumdung kann vergeben werden, aber Lästerung gegen den Geist (Atma) wird nicht vergeben.",
          component: 35,
          subs: null
        },
        {
          shloka: "12-32. Jedem, der ein Wort gegen den Menschensohn spricht, wird vergeben, aber jedem, der gegen den Heiligen Geist spricht, wird weder in diesem Zeitalter (Yuga) noch im kommenden Zeitalter (Yuga) vergeben.",
          component: 36,

          subs: null
        },
        {
          shloka: "12-36. Aber ich sage euch, dass jeder am Tag des Gerichts für jedes leere Wort, das er geredet hat, Rechenschaft ablegen muss. ",
          component: 37,
          subs: null
        },
        {
          shloka: "12-37. Denn durch deine Worte wirst du freigesprochen, und durch deine Worte wirst du verurteilt.",
          component: 37,
          subs: null
        },
        {
          shloka: "12-40. Denn wie Jona drei Tage und drei Nächte im Bauch eines riesigen Fisches war, so wird der Menschensohn drei Tage und drei Nächte im Herzen der Erde sein.",
          component: 38,

          subs: null
        },
        {
          shloka: "13-13. Obwohl sie sehen, sehen sie nicht; Obwohl sie hören, hören und verstehen sie nicht.",
          component: 39,
          subs: null
        },
        {
          shloka: "13-14. In ihnen erfüllt sich die Prophezeiung Jesajas: Ihr werdet immer hören, aber niemals verstehen; Du wirst immer sehen, aber niemals wahrnehmen.",
          component: 39,
          subs: null
        },
        {
          shloka: "13-15. Denn das Herz dieses Volkes ist verhärtet; Sie hören kaum mit ihren Ohren und haben ihre Augen geschlossen. Andernfalls könnten sie mit ihren Augen sehen, mit ihren Ohren hören, mit ihren Herzen verstehen und sich umdrehen, und ich würde sie heilen.",
          component: 39,
          subs: null
        },
        {
          shloka: "15-7. Ihr Heuchler! Jesaja hatte Recht, als er über dich prophezeite.",
          component: 40,
          subs: null
        },
        {
          shloka: "15-8. Diese Leute ehren mich mit ihren Lippen, aber ihre Herzen sind fern von mir. ",
          component: 40,
          subs: null
        },
        {
          shloka: "15-9. Sie beten mich umsonst an; Ihre Lehren sind lediglich menschliche Regeln.",
          component: 40,
          subs: null
        },
        {
          shloka: "15-11. Was jemandem in den Mund geht, verunreinigt ihn nicht, sondern was aus seinem Mund herauskommt, das verunreinigt ihn.",
          component: 41,
          subs: null
        },
        {
          shloka: "15-12. Da kamen die Jünger zu ihm und fragten: „Wisst ihr, dass die Pharisäer beleidigt waren, als sie das hörten?“",
          component: 42,
          subs: null
        },
        {
          shloka: "15-13. Er antwortete: „Jede Pflanze, die mein himmlischer Vater nicht gepflanzt hat, wird an den Wurzeln ausgerissen.“",
          component: 42,
          subs: null
        },
        {
          shloka: "15-14. Verlasse sie; Sie sind blinde Führer. Wenn der Blinde den Blinden führt, fallen beide in die Grube.",
          component: 43,
          subs: null
        },
        {
          shloka: "16-21. Von da an begann Jesus seinen Jüngern zu erklären, dass er nach Jerusalem gehen und viel von den Ältesten, den Hohenpriestern und den Gesetzeslehrern erleiden und dass er getötet werden müsse und am dritten Tag zum Leben erweckt werden. (Erstes Mal)",
          component: 44,
          subs: null
        },
        {
          shloka: "16-22. Petrus nahm ihn beiseite und fing an, ihn zu tadeln. „Niemals, Herr!“ er sagte. „Das wird dir nie passieren!“",
          component: 44,
          subs: null
        },
        {
          shloka: "17-22. Als sie in Galiläa zusammenkamen, sagte er zu ihnen: „Der Menschensohn wird in die Hände der Menschen gegeben werden.“",
          component: 44,
          subs: null
        },
        {
          shloka: "17-23. Sie werden ihn töten, und am dritten Tag wird er zum Leben erweckt.“ Und die Jünger waren voller Trauer. (Zweites Mal)",
          component: 44,
          subs: null
        },
        {
          shloka: "19-23. TDa sagte Jesus zu seinen Jüngern: „Wahrlich, ich sage euch; Für jemanden, der reich ist, ist es schwer, das Königreich Paraloka zu betreten.",
          component: 45,
          subs: null
        },
        {
          shloka: "19-24. Nochmals sage ich euch: Es ist leichter, dass ein Kamel durch ein Nadelöhr geht, als dass jemand, der reich ist, in das Reich Gottes gelangt.",
          component: 45,
          subs: null
        },
        {
          shloka: "20-17. Nun ging Jesus nach Jerusalem hinauf. Unterwegs nahm er die Zwölf beiseite und sagte zu ihnen: ",
          component: 44,
          subs: null
        },
        {
          shloka: "20-18. Wir ziehen hinauf nach Jerusalem, und der Menschensohn wird den Hohenpriestern und Gesetzeslehrern ausgeliefert werden. Sie werden ihn zum Tode verurteilen.",
          component: 44,
          subs: null
        },
        {
          shloka: "20-19. Sie werden ihn den Heiden ausliefern, damit sie ihn verspotten und auspeitschen gekreuzigt. Am dritten Tag wird er zum Leben erweckt!“ (Drittes Mal)",
          component: 44,
          subs: null
        },
        {
          shloka: "22-36. Lehrer, welches ist das größte Gebot im Gesetz (Dharma Shastra)?",
          component: 46,
          subs: null
        },
        {
          shloka: "22-37. Jesus antwortete: „Liebe den Herrn, deinen Gott, mit deinem ganzen Herzen, mit deiner ganzen Seele und mit deinem ganzen Verstand.“",
          component: 46,
          subs: null
        },
        {
          shloka: "22-38. Dies ist das erste und größte Gebot.",
          component: 46,
          subs: null
        },
        {
          shloka: "22-39. Und das zweite ist so: „Liebe deinen Nächsten wie dich selbst.“",
          component: 46,
          subs: null
        },
        {
          shloka: "22-40. Das ganze Gesetz und die Propheten hängen an diesen beiden Geboten.",
          component: 46,
          subs: null
        },
        {
          shloka: "23-8. „Aber du darfst nicht ‚Rabbi‘ genannt werden, denn du hast einen Lehrer, und das bist du alle Brüder.",
          component: 47,
          subs: null
        },
        {
          shloka: "23-9. Und nenne niemanden auf der Erde „Vater“, denn du hast einen Vater, und er ist darin paraloka.",
          component: 47,
          subs: null
        },
        {
          shloka: "23-10. Ihr dürft auch nicht als Guru bezeichnet werden, denn ihr habt einen Guru den Messias.",
          component: 47,
          subs: null
        },
        {
          shloka: "23-15. „Wehe euch, ihr Gesetzeslehrer und Pharisäer, ihr Heuchler! Sie reisen über Land und Meer, um einen einzelnen Konvertiten zu gewinnen, und wenn Sie Erfolg haben, machen Sie ihn doppelt so sehr zu einem Kind der Hölle wie Sie.",
          component: 48,
          subs: null
        },
        {
          shloka: " 24-35. Der Himmel und Erde werden vergehen, aber meine Worte werden niemals vergehen.",
          component: 49,
          subs: null
        },
        {
          shloka: "24-42. Darum sei wachsam, denn du weißt nicht, an welchem Tag dein Herr kommen wird.",
          component: 50,
          subs: null
        },
        {
          shloka: "26-26. Während sie aßen, nahm Jesus das Brot, und als er gedankt hatte, brach er es und gab es seinen Jüngern und sagte: Nehmt und esst! das ist mein Körper.",
          component: 51,
          subs: null
        },
        {
          shloka: "26-27. Und er nahm einen Kelch, dankte und reichte ihn ihnen mit den Worten: „Trinkt alle daraus!“",
          component: 51,
          subs: null
        },
        {
          shloka: "26-28. Dies ist mein Blut des Bundes (Gottes Weisheit ohne die Fesseln der Unwissenheit), das für viele zur Vergebung der Sünden ausgegossen wird.",
          component: 51,
          subs: null
        },
        {
          shloka: "28-18. Dann kam Jesus zu ihnen und sagte: „Mir ist alle Macht in Paraloka und auf der Erde gegeben.“",
          component: 52,
          subs: null
        },
        {
          shloka: "28-19. Darum geht hin und macht alle Völker zu Jüngern und tauft sie auf den Namen des Vaters und des Sohnes und des Heiligen Geistes.",
          component: 53,
          subs: null
        },
        {
          shloka: "28-20. Lehre sie, alles zu befolgen, was ich dir geboten habe. Und sicherlich bin ich immer bei dir, bis zum Ende des Zeitalters (Yuga).",
          component: 53,
          subs: null
        },

      ]
    },
    {
      title: 'Das Markusevangelium', component: null, chapterNumber: 3, icon: 'book',
      subs: [
        {
          shloka: "2-19. Wie können die Gäste des Bräutigams fasten, während er bei ihnen ist? Sie können es nicht, solange sie ihn bei sich haben.",
          component: 54,
          subs: null
        },
        {
          shloka: "2-20. Aber es wird die Zeit kommen, da ihnen der Bräutigam genommen wird, und an jenem Tag werden sie fasten.",
          component: 54,
          subs: null
        },
        {
          shloka: "4-38. Jesus war im Heck und schlief auf einem Kissen. Die Jünger weckten ihn und sagte zu ihm: „Lehrer, ist es dir egal, ob wir ertrinken?“",
          component: 55,
          subs: null
        },
        {
          shloka: "4-39. Er stand auf, tadelte den Wind und sagte zu den Wellen: „Ruhe! Sei ruhig!“ Dann ließ der Wind nach und es war völlig ruhig.",
          component: 55,
          subs: null
        },
        {
          shloka: "5-38. Als sie zum Haus des Synagogenvorstehers kamen, sah Jesus einen Tumult, bei dem die Menschen laut weinten und jammerten.",
          component: 56,
          subs: null
        },
        {
          shloka: "5-39. Er ging hinein und sagte zu ihnen: „Warum dieser Aufruhr und dieses Wehklagen? Das Kind ist nicht tot, sondern schläft.“",
          component: 56,
          subs: null
        },
        {
          shloka: "5-40. Aber sie lachten über ihn. Nachdem er sie alle hinausgeworfen hatte, nahm er den Vater des Kindes mit und die Mutter und die Jünger, die bei ihm waren, gingen hinein, wo das Kind war.",
          component: 56,
          subs: null
        },
        {
          shloka: "5-41. Er nahm sie bei der Hand und sagte zu ihr: „Talitha koum!“ (was bedeutet „Kleines Mädchen, ich sage dir, steh auf!“).",
          component: 56,
          subs: null
        },
        {
          shloka: "5-42. Sofort stand das Mädchen auf und begann herumzulaufen (sie war zwölf Jahre alt). Darüber waren sie völlig erstaunt.",
          component: 56,
          subs: null
        },
        {
          shloka: "5-43. Er befahl strikt, niemandem etwas davon zu erzählen und forderte sie auf, ihr etwas zu essen zu geben.",
          component: 56,
          subs: null
        },
        {
          shloka: "7-15. Nichts außerhalb des Menschen kann ihn verunreinigen, indem er in ihn hineingeht. ",
          component: 57,
          subs: null
        },
        {
          shloka: "7-16. Vielmehr ist es das, was aus einer Person kommt, die sie verunreinigt.",
          component: 57,
          subs: null
        },
        {
          shloka: "7-17. Nachdem er die Menge verlassen und das Haus betreten hatte, fragten ihn seine Jünger nach diesem Gleichnis.",
          component: 57,
          subs: null
        },
        {
          shloka: "7-18. „Bist du so langweilig?“ er hat gefragt. „Sehen Sie nicht, dass nichts in einen hineinkommt?“ Kann eine Person von außen sie verunreinigen?",
          component: 57,
          subs: null
        },
        {
          shloka: "7-19. Denn es geht nicht in ihr Herz, sondern in ihren Magen und dann wieder heraus der Körper.",
          component: 57,
          subs: null
        },
        {
          shloka: "7-20. Er fuhr fort: „Was aus einem Menschen herauskommt, ist das, was ihn verunreinigt.“",
          component: 57,
          subs: null
        },
        {
          shloka: "7-21. Denn die bösen Gedanken kommen von innen, aus dem Herzen eines Menschen – sexuelle Unmoral, Diebstahl, Mord,",
          component: 57,
          subs: null
        },
        {
          shloka: "7-22. Ehebruch, Gier, Bosheit, Betrug, Unzucht, Neid, Verleumdung, Hochmut und Torheit.",
          component: 57,
          subs: null
        },
        {
          shloka: "7-23. All diese Übel kommen von innen und verunreinigen den Menschen.",
          component: 57,
          subs: null
        },
        {
          shloka: "3-35. Wer den Willen Gottes tut, ist mein Bruder, meine Schwester und meine Mutter.",
          component: 58,
          subs: null
        },
        {
          shloka: "4-17. Da sie aber keine Wurzel haben, bleiben sie nur kurze Zeit bestehen. Wenn es wegen des Wortes zu Schwierigkeiten oder Verfolgung kommt, fallen sie schnell ab.",
          component: 59,
          subs: null
        },
        {
          shloka: "4-21. Er sagte zu ihnen: „Bringt ihr eine Lampe mit, um sie unter eine Schüssel oder ein Bett zu stellen? Stellen Sie es stattdessen nicht auf seinen Ständer?",
          component: 60,
          subs: null
        },
        {
          shloka: "4-22. Denn was verborgen ist, soll enthüllt werden, und was verborgen ist, soll ans Licht gebracht werden.",
          component: 60,
          subs: null
        },
        {
          shloka: "6-4. Jesus sagte zu ihnen: „Ein Prophet ist nicht ohne Ehre außer in seiner eigenen Stadt. bei seinen Verwandten und in seinem eigenen Zuhause.“",
          component: 61,
          subs: null
        },
        {
          shloka: "8-38. Wenn sich jemand in dieser ehebrecherischen und sündigen Generation meiner und meiner Worte schämt, wird sich der Menschensohn seiner schämen, wenn er in der Herrlichkeit seines Vaters mit den heiligen Engeln kommt.",
          component: 62,

          subs: null
        },

        {
          shloka: ` 9-7. Da erschien eine Wolke und bedeckte sie, und eine Stimme kam aus der Wolke: „Das ist mein Sohn, den ich liebe. Hör ihm zu! “`,
          component: 63,

          subs: null
        },
        {
          shloka: `10-17. Als Jesus sich auf den Weg machte, lief ein Mann auf ihn zu und fiel auf die Knie vor ihm. „Guter Lehrer“, fragte er, „was muss ich tun, um ewiges Leben zu erben?“`,
          component: 64,

          subs: null
        },
        {
          shloka: `10-18. „Warum nennst du mich gut?“ Jesus antwortete. „Niemand ist gut – außer Gott allein.`,
          component: 64,

          subs: null
        },
        {
          shloka: `16-15. Er sagte zu ihnen: „Geht in die ganze Welt und verkündet allen das Evangelium.“ Schaffung.`,
          component: 65,
          subs: null
        },
        {
          shloka: `16-16. Wer glaubt und sich taufen lässt, wird gerettet; wer aber nicht glaubt, wird verurteilt.`,
          component: 65,
          subs: null
        },

      ]
    },
    {
      title: 'Das Lukasevangelium', component: null, chapterNumber: 4, icon: 'book',
      subs: [
        {
          shloka: `2-49. „Warum hast du nach mir gesucht?“ er hat gefragt. „Wussten Sie nicht, dass ich im Geschäft meines Vaters tätig sein musste?“`,
          component: 66,
          subs: null
        },
        {
          shloka: `11-37. Während Jesus redete, lud ihn einer der Pharisäer zum Essen nach Hause ein. Also ging er hinein und nahm seinen Platz am Tisch ein.`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-38. Sein Gastgeber war erstaunt, als er sah, dass er sich zum Essen hinsetzte, ohne zuvor die nach jüdischem Brauch vorgeschriebene Händewaschzeremonie durchzuführen.`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-39. Da sagte der Herr zu ihm: „Ihr Pharisäer achtet so sorgfältig darauf, das Äußere des Bechers und der Schüssel zu reinigen, aber innen seid ihr schmutzig – voller Gier und Bosheit!`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-40. Dummköpfe! Hat Gott nicht sowohl das Innere als auch das Äußere geschaffen?`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-41. Reinige also das Innere, indem du den Armen Geschenke (Dharmas) gibst, und du wirst überall rein sein.`,
          component: 67,
          subs: null
        },
        {
          shloka: `12-4. Ich sage euch, meine Freunde, habt keine Angst vor denen, die den Körper töten und danach nichts mehr tun können.`,
          component: 68,

          subs: null
        },
        {
          shloka: `12-5. Aber ich werde dir zeigen, wen du fürchten solltest: Fürchte dich vor dem, der, nachdem dein Körper getötet wurde, die Macht hat, dich in die Hölle zu werfen. Ja, ich sage dir, fürchte dich vor ihm.`,
          component: 68,

          subs: null
        },
        {
          shloka: `12-25. Wer von euch kann durch Sorgen seine Größe um eine Elle vergrößern?`,
          component: 69,

          subs: null
        },
        {
          shloka: "12-33. Verkaufe deinen Besitz und gib ihn den Armen. Sorgen Sie für Geldbörsen, die sich nicht abnutzen, einen Schatz in Paraloka, der niemals vergehen wird, wo kein Dieb in die Nähe kommt und keine Motte zerstört.",
          component: 70,
          subs: null
        },
        {
          shloka: "12-34. Denn wo dein Schatz ist, da wird auch dein Herz sein.",
          component: 70,
          subs: null
        },
        {
          shloka: "12-49. Ich bin gekommen, um Feuer auf die Erde zu bringen, und ich wünschte, es wäre bereits angezündet. ",
          component: 71,
          subs: null
        },
        {
          shloka: "12-51. Glaubst du, ich bin gekommen, um Frieden auf die Erde zu bringen? Nein, das sage ich Ihnen, aber Spaltung.",
          component: 72,
          subs: null
        },
        {
          shloka: "12-52. Von nun an werden fünf in einer Familie gegeneinander geteilt sein, drei gegen zwei und zwei gegen drei.",
          component: 72,
          subs: null
        },
        {
          shloka: "12-53. Sie werden gespalten sein: Vater gegen Sohn und Sohn gegen Vater, Mutter gegen Tochter und Tochter gegen Mutter, Schwiegermutter gegen Schwiegertochter und Schwiegertochter gegen Schwiegermutter.",
          component: 72,
          subs: null
        },
        {
          shloka: "13-3. Wenn ihr eure Meinung nicht ändert, werdet auch ihr alle zugrunde gehen.",
          component: 73,
          subs: null
        },
        {
          shloka: "14-26. Wenn jemand zu mir kommt und Vater und Mutter, Frau und Kinder, Brüder und Schwestern, ja sogar sein eigenes Leben nicht hasst, kann ein solcher Mensch nicht mein Jünger sein.",
          component: 74,

          subs: null
        },
        {
          shloka: "14-27. Wer nicht sein Kreuz trägt und mir nachfolgt, kann nicht mein Jünger sein.",
          component: 75,
          subs: null
        },
        {
          shloka: "18-29. „Wahrlich, ich sage euch“, sagte Jesus zu ihnen: „Niemand, der um des Reiches Gottes willen sein Haus, seine Frau, seine Brüder, seine Schwestern, seine Eltern oder seine Kinder verlassen hat, wird es nicht versäumen, ein Vielfaches zu empfangen in diesem Zeitalter und im kommenden Zeitalter ewiges Leben.“",
          component: 76,
          subs: null
        },
        {
          shloka: "21-15. Ich werde dir Worte und Weisheit geben, denen keiner deiner Widersacher widerstehen oder widersprechen kann.",
          component: 77,

          subs: null
        },
        {
          shloka: "21-17. Alle werden dich wegen mir hassen.",
          component: 78,
          subs: null
        }



      ]

    },
    {
      title: 'Das Johannesevangelium', component: null, chapterNumber: 5, icon: 'book',
      subs: [
        {
          shloka: "1-1. Im Anfang war das Wort, und das Wort war bei Gott, und das Wort war Gott.",
          component: 79,
          subs: null
        },
        {
          shloka: "1-9. Das wahre Licht, das allen Licht gibt, kam in die Welt.",
          component: 80,
          subs: null
        },
        {
          shloka: "1-10. Er war in der Welt, und obwohl die Welt durch ihn geschaffen wurde, erkannte die Welt ihn nicht.",
          component: 81,
          subs: null
        },
        {
          shloka: "1-11. Er kam zu dem, was ihm gehörte, aber die Seinen nahmen ihn nicht auf.",
          component: 82,
          subs: null
        },
        {
          shloka: "1-12. Doch allen, die ihn aufnahmen, denen, die an seinen Namen glaubten, gab er das Recht, Kinder Gottes zu werden.",
          component: 83,
          subs: null
        },
        {
          shloka: "1-13. Männer, die nicht aus natürlicher Abstammung, noch aus menschlicher Entscheidung oder dem Willen eines Mannes geboren wurden, aber von Gott geboren.",
          component: 84,
          subs: null
        },
        {
          shloka: "1-14. Das Wort ist Fleisch geworden und hat unter uns Wohnung genommen. Wir haben seine Herrlichkeit gesehen, die Herrlichkeit des einzigen Sohnes, der vom Vater kam, voller Gnade und Wahrheit.",
          component: 85,
          subs: null
        },
        {
          shloka: "1-18. Kein Mensch hat jemals Gott gesehen; der eingeborene Sohn, der im Schoß des Vaters ist, offenbarte ihn.",
          component: 86,
          subs: null
        },
        {
          shloka: "1-51. Dann fügte er hinzu: „Wahrlich, ich sage euch, ihr werdet sehen, wie sich der Himmel öffnet und die Engel Gottes auf dem Menschensohn auf- und niedersteigen.“",
          component: 87,
          subs: null
        },
        {
          shloka: "3-3. Jesus antwortete: „Wahrlich, ich sage euch: Niemand kann das Reich Gottes sehen, es sei denn sie werden wiedergeboren.",
          component: 88,
          subs: null
        },
        {
          shloka: "3-4. „Wie kann jemand geboren werden, wenn er alt ist?“ fragte Nikodemus. „Sicherlich können sie nicht ein zweites Mal in den Mutterleib eintreten, um geboren zu werden!“",
          component: 89,
          subs: null
        },
        {
          shloka: "3-5. Jesus antwortete: „Wahrlich, ich sage euch: Niemand kann in das Reich Gottes kommen es sei denn, sie werden aus Wasser und dem Geist (Atma) geboren.",
          component: 89,
          subs: null
        },
        {
          shloka: "3-6. Fleisch gebiert Fleisch, aber der Geist (Atma) gebiert Geist.",
          component: 89,
          subs: null
        },
        {
          shloka: "3-7. Es sollte dich nicht überraschen, dass ich sage: „Du musst wiedergeboren werden.“",
          component: 89,
          subs: null
        },
        {
          shloka: "3-8. Der Wind weht, wohin er will. Man hört sein Geräusch, kann aber nicht sagen, woher es kommt oder wohin es geht. So ist es auch mit jedem, der aus dem Geist (Atma) geboren wurde.“",
          component: 89,
          subs: null
        },
        {
          shloka: "3-13. Niemand ist jemals nach Paraloka gegangen, außer dem, der aus Paraloka kam – der Menschensohn. ",
          component: 90,
          subs: null
        },
        {
          shloka: "3-15. Damit jeder, der an ihn glaubt, nicht verloren geht, sondern ewiges Leben hat.",
          component: 91,
          subs: null
        },
        {
          shloka: "3-17. Denn Gott hat seinen Sohn nicht in die Welt gesandt, um die Welt zu richten, sondern um die Welt durch ihn zu retten.",
          component: 92,
          subs: null
        },
        {
          shloka: "3-18. Wer an ihn glaubt, wird nicht gerichtet, aber wer nicht glaubt, wird bereits gerichtet, weil er nicht an den Namen des einzigen Sohnes Gottes geglaubt hat.",
          component: 93,
          subs: null
        },
        {
          shloka: "3-19. Dies ist das Urteil: Licht ist in die Welt gekommen, aber die Menschen liebten die Dunkelheit anstelle des Lichts, weil ihre Taten böse waren.",
          component: 94,
          subs: null
        },
        {
          shloka: "3-20. Jeder, der Böses tut, hasst das Licht und wird nicht ins Licht kommen, aus Angst, dass seine Taten aufgedeckt werden.",
          component: 94,
          subs: null
        },
        {
          shloka: "3-21. Wer aber in der Wahrheit lebt, der kommt ins Licht, damit deutlich wird, dass das, was er getan hat, vor Gott getan wurde.",
          component: 94,
          subs: null
        },
        {
          shloka: "5-19. Jesus gab ihnen diese Antwort: „Wahrlich, wahrlich, ich sage euch: Der Sohn kann nichts allein tun; Er kann nur das tun, was er seinen Vater tun sieht, denn was auch immer der Vater tut, tut auch der Sohn.",
          component: 95,
          subs: null
        },
        {
          shloka: "5-20. Denn der Vater liebt den Sohn und zeigt ihm alles, was er tut. Ja, und Er wird Ihm noch größere Werke als diese zeigen, sodass Sie staunen werden.",
          component: 96,
          subs: null
        },
        {
          shloka: "5-21. Denn so wie der Vater die Toten auferweckt und ihnen Leben gibt, so macht auch der Sohn lebendig, wem er es geben möchte.",
          component: 97,
          subs: null
        },
        {
          shloka: "5-22. Darüber hinaus richtet der Vater niemanden, sondern hat das gesamte Urteil dem Sohn anvertraut.",
          component: 97,
          subs: null
        },
        {
          shloka: "5-23. Damit alle den Sohn ehren, so wie sie den Vater ehren. Wer den Sohn nicht ehrt, ehrt nicht den Vater, der ihn gesandt hat.",
          component: 97,
          subs: null
        },
        {
          shloka: "5-24. Wahrlich, wahrlich, ich sage euch: Wer mein Wort hört und dem glaubt, der mich gesandt hat, der hat ewiges Leben und wird nicht gerichtet, sondern ist vom Tod zum Leben übergegangen.",
          component: 98,
          subs: null
        },
        {
          shloka: "5-26. Denn wie der Vater Leben in sich selbst hat, so hat er auch dem Sohn gegeben, Leben in sich selbst zu haben.",
          component: 99,
          subs: null
        },
        {
          shloka: "5-37. Du hast seine Stimme nie gehört und seine Gestalt nie gesehen.",
          component: 100,
          subs: null
        },
        {
          shloka: "5-38. Sein Wort wohnt auch nicht in euch, denn ihr glaubt dem, den Er gesandt hat, nicht.",
          component: 101,

          subs: null
        },
        {
          shloka: "6-25. Als sie ihn auf der anderen Seite des Sees fanden, fragten sie ihn: „Rabbi, wann bist du hier angekommen?“",
          component: 102,
          subs: null
        },
        {
          shloka: "6-26. Jesus antwortete: „Wahrlich, ich sage euch: Ihr sucht mich, nicht weil Du hast die Zeichen gesehen, die ich vollbracht habe, aber weil du die Brote gegessen hast und satt geworden bist.",
          component: 102,
          subs: null
        },
        {
          shloka: "6-27. Arbeitet nicht für eine Speise, die verdirbt, sondern für eine Speise, die bis zum ewigen Leben Bestand hat, das euch der Menschensohn ",
          component: 102,
          subs: null
        },
        {
          shloka: "6-32. Jesus sagte zu ihnen: „Wahrlich, ich sage euch: Es ist nicht Mose, der euch das Brot aus Paraloka gegeben hat, sondern mein Vater, der euch das wahre Brot aus Paraloka gibt.“",
          component: 103,
          subs: null
        },
        {
          shloka: "6-47. Niemand hat den Vater gesehen außer dem, der von Gott ist; nur Er hat den Vater gesehen.",
          component: 104,
          subs: null
        },
        {
          shloka: "7-37. Am letzten und größten Tag des Festes stand Jesus da und sagte mit lauter Stimme: „Wer durstig ist, der komme zu mir und trinke.“",
          component: 105,
          subs: null
        },
        {
          shloka: "7-38. Wer an mich glaubt, dem werden, wie die Heilige Schrift sagt, Ströme lebendigen Wassers aus seinem Inneren fließen.",
          component: 105,
          subs: null
        },
        {
          shloka: "8-12. Als Jesus erneut zu den Menschen sprach, sagte er: „Ich bin das Licht der Welt. Wer mir folgt, wird niemals in der Dunkelheit wandeln, sondern das Licht des Lebens haben.“",
          component: 106,
          subs: null
        },
        {
          shloka: "8-14. Jesus antwortete: „Auch wenn ich für mich selbst Zeugnis gebe, ist mein Zeugnis gültig, denn ich weiß, woher ich komme und wohin ich gehe.“ Aber Sie haben keine Ahnung, woher ich komme oder wohin ich gehe.",
          component: 107,
          subs: null
        },
        {
          shloka: "8-19. Da fragten sie ihn: „Wo ist dein Vater?“ „Ihr kennt weder mich noch meinen Vater“, antwortete Jesus. „Wenn du mich kennen würdest, würdest du auch meinen Vater kennen.“",
          component: 108,
          subs: null
        },
        {
          shloka: "8-21. Noch einmal sagte Jesus zu ihnen: „Ich gehe hin, und ihr werdet mich suchen, und ihr werdet in eurer Sünde sterben.“ Wo ich hingehe, kannst du nicht kommen.“",
          component: 109,
          subs: null
        },
        {
          shloka: "8-23. Aber er fuhr fort: „Ihr seid von unten; Ich bin von oben. Du bist von dieser Welt; Ich bin nicht von dieser Welt.",
          component: 110,
          subs: null
        },

        {
          shloka: "8-24. Ich habe dir gesagt, dass du in deinen Sünden sterben würdest; Wenn du nicht glaubst, dass ich Er bin, wirst du tatsächlich in deinen Sünden sterben.",
          component: 111,
          subs: null
        },
        {
          shloka: "8-28.  Also sagte Jesus: „Wenn du den Menschensohn erhöht hast, dann wirst du erkennen, dass ich er bin und dass ich nichts aus eigener Kraft tue, sondern nur das sage, was der Vater mich gelehrt hat.“",
          component: 112,
          subs: null
        },
        {
          shloka: "8-29. Der mich gesandt hat, ist bei mir; Er hat mich nicht allein gelassen, denn ich tue immer, was Ihm gefällt.",
          component: 113,
          subs: null
        },
        {
          shloka: "8-53. Bist du größer als unser Vater Abraham? Er starb, und auch die Propheten starben. Was glaubst du wer du bist?“",
          component: 114,
          subs: null
        },
        {
          shloka: "8-54. Jesus antwortete: „Wenn ich mich selbst verherrliche, bedeutet meine Herrlichkeit nichts.“ Mein Vater, den du als deinen Gott behauptest, ist derjenige, der mich verherrlicht.",
          component: 114,
          subs: null
        },
        {
          shloka: "8-55. Obwohl du ihn nicht kennst, kenne ich ihn. Wenn ich sagen würde, dass ich es nicht tue, wäre ich ein Lügner wie Sie, aber ich kenne ihn und gehorche seinem Wort.",
          component: 115,
          subs: null
        },
        {
          shloka: "8-57. „Du bist noch nicht fünfzig Jahre alt“, sagten sie zu ihm, „und du hast es gesehen Abraham!“.",
          component: 116,

          subs: null
        },
        {
          shloka: "8-58. „Wahrlich, ich sage euch“, antwortete Jesus, „bevor Abraham geboren wurde, war ich es!“",
          component: 116,

          subs: null
        },
        {
          shloka: "9-39. Jesus sagte: „Um des Gerichts willen bin ich in diese Welt gekommen, damit die Blinden werden sehen, und die sehen, werden blind werden.“",
          component: 117,
          subs: null
        },
        {
          shloka: "9-41. Jesus sagte: „Wenn du blind wärst, wärst du nicht der Sünde schuldig; Aber jetzt, wo Sie behaupten, Sie könnten es sehen, bleiben Ihre Schuldgefühle bestehen.",
          component: 118,

          subs: null
        },
        {
          shloka: "10-18. Niemand nimmt mir das Leben, aber ich gebe es aus eigenem Antrieb hin. Ich habe die Autorität, es niederzulegen und die Autorität, es wieder aufzunehmen. Diesen Befehl habe ich von meinem Vater erhalten.",
          component: 119,

          subs: null
        },
        {
          shloka: "10-30. Ich und der Vater sind eins.",
          component: 120,
          subs: null
        },
        {
          shloka: "11-25. Jesus sagte zu ihr: „Ich bin die Auferstehung und das Leben.“ Derjenige, der glaubt in mir werden sie leben, auch wenn sie sterben.“",
          component: 121,
          subs: null
        },
        {
          shloka: "11-26. Wer im Glauben an mich lebt, wird niemals sterben.",
          component: 122,
          subs: null
        },
        {
          shloka: "12-25. Wer sein Leben liebt, wird es verlieren, während jeder, der sein Leben in dieser Welt hasst, es für das ewige Leben behalten wird.",
          component: 123,
          subs: null
        },
        {
          shloka: "12-40. Er hat ihre Augen verblendet und ihre Herzen verhärtet, sodass sie mit ihren Augen nicht sehen, mit ihren Herzen nicht verstehen und sich nicht umkehren können – und ich würde sie heilen.",
          component: 124,
          subs: null
        },
        {
          shloka: "12-47. Wenn jemand meine Worte hört, sie aber nicht befolgt, verurteile ich ihn nicht. Denn ich bin nicht gekommen, um die Welt zu richten, sondern um die Welt zu retten.",
          component: 125,
          subs: null
        },
        {
          shloka: "12-48. Es gibt einen Richter für denjenigen, der mich ablehnt und meine Worte nicht annimmt; Die Worte, die ich gesprochen habe, werden sie am letzten Tag richten.",
          component: 125,
          subs: null
        },
        {
          shloka: "12-49. Denn ich habe nicht aus eigenem Antrieb geredet, sondern der Vater, der mich gesandt hat, hat mir geboten, alles zu sagen, was ich geredet habe.",
          component: 126,
          subs: null
        },
        {
          shloka: "12-50. Ich weiß, dass sein Befehl zum ewigen Leben führt. Was ich also sage, ist genau das, was der Vater mir gesagt hat.",
          component: 126,
          subs: null
        },
        {
          shloka: "14-7. Wenn du mich wirklich kennst, wirst du auch meinen Vater kennen. Von nun an kennen Sie ihn und haben ihn gesehen.",
          component: 127,
          subs: null
        },
        {
          shloka: "14-8. Philippus sagte: „Herr, zeige uns den Vater, dann wird uns das genügen.“",
          component: 128,
          subs: null
        },
        {
          shloka: "14-9. Jesus antwortete: „Erkennst du mich nicht, Philippus, auch nachdem ich so lange unter euch gewesen bin? Jeder, der mich gesehen hat, hat den Vater gesehen. Wie kannst du sagen: „Zeig uns den Vater“?",
          component: 128,
          subs: null
        },
        {
          shloka: "14-10. Glaubt ihr nicht, dass ich im Vater bin und dass der Vater in mir ist? Die Worte, die ich Ihnen sage, spreche ich nicht aus eigener Kraft. Vielmehr ist es der Vater, der in mir lebt und sein Werk tut.",
          component: 129,
          subs: null
        },
        {
          shloka: "14-6. Jesus antwortete: „Ich bin der Weg und die Wahrheit und das Leben.“ Niemand kommt zu sich der Vater außer durch mich.",
          component: 130,
          subs: null
        },
        {
          shloka: "14-16. Ich werde den Vater bitten, und er wird dir einen anderen Befürworter geben, der dir hilft und für immer bei dir ist.",
          component: 131,
          subs: null
        },
        {
          shloka: "14-17. Die Welt kann Ihn nicht annehmen, weil sie Ihn weder sieht noch kennt. Aber du kennst ihn, denn er lebt mit dir und wird in dir sein.",
          component: 132,
          subs: null
        },

        {
          shloka: "14-20. An jenem Tag werdet ihr erkennen, dass ich in meinem Vater bin und ihr in mir seid und ich in euch bin.",
          component: 133,
          subs: null
        },
        {
          shloka: "14-25. All dies habe ich gesprochen, als ich noch bei euch war.",
          component: 134,
          subs: null
        },
        {
          shloka: "14-26. Aber der Fürsprecher, der Heilige Geist, den der Vater in meinem Namen senden wird, wird euch alles lehren und euch an alles erinnern, was ich euch gesagt habe.",
          component: 134,
          subs: null
        },
        {
          shloka: " 15-23. Wer mich hasst, hasst auch meinen Vater.",
          component: 135,
          subs: null
        },
        {
          shloka: "15-24. Wenn ich unter ihnen nicht die Werke getan hätte, die sonst niemand getan hat, würden sie sich keiner Sünde schuldig machen. So wie es ist, haben sie es gesehen und dennoch haben sie sowohl mich als auch meinen Vater gehasst.",
          component: 136,
          subs: null
        },
        {
          shloka: "15-25. Aber damit soll erfüllt werden, was in ihrem Gesetz geschrieben steht: „Sie hassten mich ohne Grund.“",
          component: 136,
          subs: null
        },
        {
          shloka: "15-26. Wenn der Fürsprecher kommt, den ich euch vom Vater senden werde – der Geist der Wahrheit, der vom Vater ausgeht –, wird er über mich Zeugnis ablegen. ",
          component: 137,
          subs: null
        },
        {
          shloka: "15-27. Und auch du musst Zeugnis geben, denn du warst bei mir von Anfang an.",
          component: 137,
          subs: null
        },
        {
          shloka: "16-7. Aber wahrlich, ich sage euch: Es ist zu eurem Besten, dass ich weggehe. Wenn ich nicht weggehe, wird der Befürworter  nicht zu dir kommen; aber wenn ich gehe, werde ich ihn zu dir senden.",
          component: 138,
          subs: null
        },
        {
          shloka: "16-8. Wenn Er kommt, wird Er beweisen, dass die Welt in Bezug auf Sünde, Gerechtigkeit und Gericht im Unrecht ist.",
          component: 139,
          subs: null
        },
        {
          shloka: "16-12. Ich habe euch viel mehr zu sagen, mehr als ihr jetzt ertragen könnt.",
          component: 140,
          subs: null
        },
        {
          shloka: "16-13. Wenn aber Er, der Geist der Wahrheit, kommt, wird Er euch in die ganze Wahrheit führen. Er wird nicht aus eigener Kraft sprechen; Er wird nur das sagen, was er hört, und er wird Ihnen sagen, was noch kommt.",
          component: 141,
          subs: null
        },
        {
          shloka: "16-14. Er wird mich verherrlichen, denn von mir wird er empfangen, was er euch kundtun wird.",
          component: 142,
          subs: null
        },
        {
          shloka: "16-15. Alles, was dem Vater gehört, gehört mir. Deshalb habe ich gesagt, dass der Geist von mir empfangen wird, was er euch kundtun wird.",
          component: 142,
          subs: null
        },
        {
          shloka: "16-16. Jesus sagte weiter: „In einer kleinen Weile wirst du mich nicht mehr sehen, und dann, nach einer kleinen Weile, wirst du mich sehen.“",
          component: 143,
          subs: null
        },
        {
          shloka: "16-17. Da sagten einige seiner Jünger zueinander: „Was meint er damit, wenn er sagt: ‚In einer kleinen Weile werdet ihr mich nicht mehr sehen, und nach einer kleinen Weile werdet ihr mich sehen‘?“ „Weil ich zum Vater gehe“?",
          component: 144,
          subs: null
        },
        {
          shloka: "16-18. Sie fragten immer wieder: „Was meint Er mit ‚eine kleine Weile‘?“ Wir nicht Verstehe, was Er sagt.“",
          component: 144,
          subs: null
        },
        {
          shloka: "16-19. Jesus sah, dass sie ihn danach fragen wollten, und sagte zu ihnen: „Fragt ihr einander, was ich meinte, als ich sagte: ‚In einer kleinen Weile werdet ihr mich nicht mehr sehen, und dann danach?‘ Eine Weile wirst du mich sehen?",
          component: 144,
          subs: null
        },
        {
          shloka: "16-20. Wahrlich, ich sage euch: Ihr werdet weinen und trauern, während die Welt jubelt. Du wirst trauern, aber deine Trauer wird sich in Freude verwandeln.",
          component: 144,
          subs: null
        },
        {
          shloka: "16-21. Eine Frau, die ein Kind zur Welt bringt, hat Schmerzen, weil ihre Zeit gekommen ist; Doch als ihr Baby zur Welt kommt, vergisst sie den Kummer vor Freude darüber, dass ein Kind auf die Welt kommt.",
          component: 144,
          subs: null
        },
        {
          shloka: "16-22. Also mit dir: Jetzt ist deine Zeit der Trauer, aber ich werde dich wiedersehen und du wirst jubeln, und niemand wird dir deine Freude nehmen.",
          component: 144,
          subs: null
        },
        {
          shloka: "16-25. Obwohl ich im übertragenen Sinne gesprochen habe, kommt eine Zeit, in der ich diese Art von Sprache nicht mehr verwenden werde, sondern euch klar und deutlich von meinem Vater erzählen werde.",
          component: 145,

          subs: null
        },


      ]

    },
    {
      title: 'Die Schrift der Johannes-Offenbarung ', component: 146, chapterNumber: 6, subs: null, icon: 'information'
    },
    {
      title: 'Drei Finger.', component: 147, chapterNumber: 7, subs: null, icon: 'information'

    },
    {
      title: 'Karfreitag oder schlechter Freitag?', component: 148, chapterNumber: 8, subs: null, icon: 'information'

    },
    {
      title: 'Ein Brief eines Hindus', component: 149, chapterNumber: 9, subs: null, icon: 'information'

    },

    {
      title: 'GLOSSAR', component: 151, chapterNumber: 11, subs: null, icon: 'information'

    },

    {
      title: 'Videos', component: 152, chapterNumber: 12, subs: null, icon: 'videocam'

    }
    // ,
    // {
    //   title: 'Share', component: 153, chapterNumber: 13, subs: null, icon: 'share'

    // }
  ];



}
