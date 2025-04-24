import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ZuluService {

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
chapterName: "Indlela kaNkulunkulu",
chapterNumber: 0,
pageNumber: 0,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kwakukhona umlando ngaphambi kokufika kukaJesu Umhlaba. Kukhona futhi umlando othile ngemva kokufa Kwakhe. Umlando eyalotshwa ngaphambi kokuzalwa Kwakhe yaziwa ngokuthi <strong>iTestamente Elidala</strong>, kuyilapho umlando obhalwe ngemva kokufika Kwakhe ubizwa <strong>iTestamente Elisha</strong>. ITestamente Elidala elihlanganisa inkathi ngaphambi kokuzalwa Kwakhe, ukuphila Kwakhe eTestamenteni Elisha, kanye ukusakazwa komphakathi wamaKrestu emva kokufa Kwakhe, kubambe ukubaluleka okukhulu emphakathini wobuKristu. Ukuhlanganiswa kokubili iTestamente Elidala nelisha laziwa ngokuthi <strong>iNgcwele</strong><strong>IBhayibheli</strong>. Ngenkathi iBhayibheli lobuKristu kanye ne-Hindu Bhagavad-Gita zombili zihlose ukuphakamisa nokuqondisa abantu kuNkulunkulu, zikwenzile ukungezwani kwabo. Bhagavad-Gita iqukethe kuphela Izimfundiso zikaKrishna, kuyilapho iBhayibheli Elingcwele lihlanganisa ukulandisa okungokomlando ngaphambi nangemva kukaJesu. Izimfundiso zobuKristu zithathwe eTestamenteni Elidala ngaphambi kokuzalwa kukaKristu futhi kusukela ekusakazweni ngabazinikele Bakhe eTestamenteni Elisha emva kokufa Kwakhe. Ngenkathi kungekho lutho olungalungile ngalo lokhu, lapho ucabangisisa ngokujulile, kuba sobala ukuthi ingxenye yeBhayibheli ibalulekile ekuqondiseni abantu endleleni kuNkulunkulu. Njengomdlalo weshashalazi, sivame ukuthanda abalingisi abathile, nasedrama eneziqephu eziningi, singakhetha eyodwa phezu abanye, endabeni yeBhayibheli, yingxenye yeLisha ITestamente eligxile kuJesu Kristu&mdash;kusukela ekufikeni Kwakhe eMhlabeni ekusukeni Kwakhe&mdash;okuphethe ubungcwele obukhulu kanye ukubaluleka ekuzuzeni inkululeko (moksham). Kubalulekile ukuthi qonda ukuthi ingqikithi yeBhayibheli isemlandweni kaJesu. Amazwi kaJesu anjengesaka ledayimane ngaphakathi IBhayibheli, nakho konke lokho isintu okudingeka sikuqonde kungatholakala kulo <strong>iVangeli likaMathewu, likaMarku, likaLuka noJohane</strong>. Okwaphezulu ukusondelana okufunwa yisintu kungatholakala kulezi ezine AmaVangeli. Ukuhlakanipha okuphakeme kakhulu okuqukethwe kula maVangeli kungaba etholakala eVangelini likaJohane, idlula ubuhlakani bomuntu. Naphezu kokuba iBhayibheli linamakhasi angu-1029, umlando kaJesu inamakhasi ayi-102 kuphela eTestamenteni Elisha. Uma iBhayibheli zahlukaniswa zaba izingxenye eziyishumi, enye idlula enye eyisishiyagalolunye futhi labo abaqaphela ukubaluleka kukaJesu bayaqaphela ukuhlakanipha okujulile okuqukethwe kule ngxenye eyodwa.

  Silapha ukuze sicacise amanye amazwi kaJesu encwadini AmaVangeli kaMathewu, uMarku, uLuka, noJohane, agcwele ngokuhlakanipha okujulile. Omunye angase azibuze ukuthi kungani thina ephinda la mazwi lapho oBaba abaningi, abefundisi, kanye ababhishobhi sebenikezile izincazelo zabo. Nakhu okwami impendulo: kuyilapho abashumayeli befundisa ngokuphumelelayo amavesi avela ku Testamenteni lakudala naseTestamenteni Elisha, kubonakala kunegebe encazelweni yamavesi avela kumaVangeli amane, okuthi ihlanganisa umlando kaKristu. Njengoba nje amaHindu kungenzeka okwamanje ziveze ngokugcwele izimfihlo zeBhagavad-Gita, lapho kungaba amaqiniso amaningi afihliwe ngaphakathi kwamaVangeli amane AmaKristu kusafanele athole. Lesi akusona isitatimende somona kubashumayeli; kunalokho, kuwukubonakaliswa kokholo kuKristu. Inhloso yethu ukwabelana ngeqiniso nokuqinisekisa ukuthi abantu bangakwazi zuza ukuqonda okunembile ngoJesu, ngokwazisa <strong>Ubukhulu namandla akhe</strong>.

  AmaHindu, lapho ebona izincwadi zami ezinegama likaKristu, ngokuvamile bacabanga ukuthi ziyizincwadi zobuKristu futhi bayenqaba ukufunda bona. Ngakolunye uhlangothi, amaKristu angase azixwaye izincwadi ezilotshwe nguGuru wamaHindu futhi bakhetha ukunamathela emibhalweni yobuKristu. AmaHindu ngizonda umsebenzi wami, ngicabanga ukuthi umbhali ongumKristu akanakuba yiqiniso Hindu, kuyilapho amanye amaKristu angase axwayise ngezincwadi zami, bekholelwa ukuthi bahloselwe ukuguqulela amaKristu UbuHindu futhi kufanele bugwenywe. AmaHindu asibeka icala beguqulela abantu babo ebuKristwini, namaKrestu asola thina sokuwaguqula abe amaHindu. Nokho, kubalulekile ukucacisa inhloso yethu. Asifuni ukuguqula muntu, kodwa kunalokho, wethu umgomo uwukukhuthaza abantu ukuba bafune ukuhlakanipha kukaNkulunkulu weqiniso. Wonke umntwana kaNkulunkulu <strong>unelungelo</strong> lokuveza izinkolelo zakhe mayelana UNkulunkulu. Ngakho, sihlanganyela izimfundiso zikaNkulunkulu ngesineke, kungakhathaliseki ukuthi yikuphi lokho abanye abangase bakucabange noma bakucabange.

  Nginombuzo kulabo abangase babe nokungabaza noma umona<strong>. UNkulunkulu ufikile eMhlabeni njengomuntu futhi wahamba, kodwa Wathembisa nokuthi uzobuya. Ingabe noma ubani angagomela ngokuzethemba ukuthi uNkulunkulu uvela kanye kuphela? </strong>Isimangalo esinjalo singabonakala akuhambisani nokuhlakanipha kweqiniso. UNkulunkulu umemezele ukubuya Kwakhe noma nini kunesidingo Emhlabeni. Ufika ngezikhathi ubunzima lapho izimiso ze-dharma zisengozini. Lokhu isimemezelo siyabonakala kokubili kuyiBhagavad-Gita naseBhayibhelini. UNkulunkulu angathatha noma yisiphi isimo futhi alethe izimfundiso Zakhe. <strong>Kuyiphutha ukuze amaHindu alindele ukubuya kukaKrishna njengoKrishna noma AmaKristu alindele ukuba uJesu abuye njengoJesu. </strong>Lapho uNkulunkulu ekhetha ukuza, azikho izithiyo mayelana nesikhathi, indawo, noma ifomu. Angase abonakale ngezimo ezingaphezu komuntu ukuqashelwa, kodwa umlayezo Wakhe uhlala ungashintshile ngokuhamba kwesikhathi. I-Dharma, njengezimiso zaphezulu, iyavumelana ngokwemvelo futhi engaguquki, efana nemithetho yesayensi. Ngenxa yalokho, uNkulunkulu uyokwenza njalo unikeza i-dharma efanayo, kungakhathaliseki igama Lakhe, isimo, noma inkolo Azalwa ngayo.

  UNkulunkulu akakaze amise inkolo ethile eMhlabeni ngenkathi Evela. Izimfundiso zakhe aziboshwe yinoma iyiphi uhlaka oluthile lwenkolo, futhi Akazange alukhuthaze noma basonta noma iyiphi inkolo. Kunalokho, Wedlulisa ubuNkulunkulu Bakhe izimiso, noma ama-dharma, ngaphandle kokubhekisela kunoma yikuphi okuqondile inkolo. Ukudalwa kwezinkolo kuwumsebenzi womuntu. Nini UNkulunkulu wabona izenzo ezimbi phakathi kwabantu banoma iyiphi inkolo iqembu, Waveza iziphambeko zabo, wabaqondisa <strong>kwabakaNkulunkulu indlela efanele, </strong>futhi wakhuthaza umkhuba we-dharma kungakhathaliseki ukuthi ungowaluphi uhlangothi lwenkolo. U-Dharmas ngokwabo akazange dala izinkolo. Abantu bakha izinkolo ngokusekelwe kwezabo ukuqonda ukuhlakanipha kwaphezulu, ulimi ababelukhuluma, kanye ukuziphatha kwabo.

  Inkolo ngayinye ilandela indlela yayo eyingqayizivele futhi ukhonza unkulunkulu othile. Kuyisiko kubalandeli be-a inkolo ukugcina amasiko ahambisana nalolo kholo. Nokho, kubalulekile ukuqonda ukuthi lezi zinqubo zenkolo yindalo yomuntu. Lapho uNkulunkulu ethatha isimo somuntu Emhlabeni, Akanamatheli kunoma yimiphi imikhuba yenkolo ethile noma Umnyango wezimpahla. Futhi Akahlanganyeli ekukhulekeleni yezinye izithixo. Imikhuba nemikhuba yenkolo ingeyabantu, hayi ekaNkulunkulu. Kunalokho, indima kaNkulunkulu ukuqondisa abantu <strong>endleleni efanele</strong>, embula noma yikuphi ukushiyeka ekuzinikeleni kwabo. Lapho uNkulunkulu esesimweni somuntu, ugxile ekudluliseleni ulwazi ngoNkulunkulu kanye ne-dharmas kaNkulunkulu, kunokuba uhlanganyele ukukhulekela unkulunkulu, njengoba kwenza abantu.

  Lapho uNkulunkulu ethatha isimo somuntu njengoKrishna eDvapara Yuga, Akazange ahlanganyele ekukhulekeleni noma yimuphi unkulunkulu. Kunalokho, Yena ngokugcwele wembula ukuhlakanipha kweParamatma (uMphefumulo Ophakeme) lapho isikhathi sasilungile. Ngokufanayo, lapho uNkulunkulu ethatha isimo somuntu njengoJesu UKristu eKali Yuga, Akazange ahlanganyele ekukhulekeleni unkulunkulu kodwa washumayela ukuhlakanipha ayehlose ukukuveza. Iqiniso lakhe ubukhulu nobunkulunkulu buvela obala lapho Yena unikeza <strong>ukuhlakanipha</strong>. Ngezinye izikhathi, Angase abonakale njengomuntu umuntu ojwayelekile, njengawo wonke umuntu. Abangazi banga baMphambanise njengomuntu ojwayelekile, kepha labo abanobuhlakani angaMqonda njengoNkulunkulu. Labo abanokuhlakanipha okuphelele angamkhomba noma nini lapho ehlela eMhlabeni. Nokho, abantu abangaphansi kwethonya likaMaya bayehluleka ukuMqaphela noma yisiphi isimo. Ngaphezu kwalokho, ngezinye izikhathi abantu bayambona Yena njengomuntu ojwayelekile, emfaka ekuthukweni nasekumbangeleni izinkinga ezihlukahlukene.

  Lapho uNkulunkulu eza Emhlabeni njengomuntu kanye kwabambalwa iminyaka eyinkulungwane, abantu abayizinyoka abakwazi qaphelani yena. Akukhona nje ukuthi abaMqapheli, kodwa nabo futhi bamfake ekuhlushweni. Abanye bangase bazibuze ukuthi kungani Enjalo bayahlushwa lapho ngokuvamile abantu bengahlukumezi abangani babo. Impendulo ilele eqinisweni lokuthi lapho uNkulunkulu esesimweni somuntu, Akaphili impilo ejwayelekile. Okwakhe inhloso iwukunikeza ukuhlakanipha kwaphezulu ukuqondanisa ne-dharma. Ngenxa yalokho, labo abangenalwazi nabantula ukuqonda ye-dharma ikhulisa ubutha Kuye, futhi le nzondo ingakwazi kuholela ekuhlushweni kwaKhe. Lapho engekho kwaphezulu izimfundiso, ngabe abekho abaphikisi abanjalo. Nokho, nini Uveza ama-adharma ekuziphatheni komuntu, lawo abambelela kukho ama-adharma, ngenkathi ekholelwa ukuthi alandela i-dharma, azokwenza ukuthukuthela. Kuwo wonke umlando, abantu baye babonisa ukungamhloniphi Yena kukho konke esesimweni somuntu. Abanye babenomona ngoJesu lapho efundisa ukuhlakanipha kwaphezulu. Bona wehluleka ukwazisa ubukhulu nokuhlakanipha Kwakhe, ekugcineni bemgwebela ukufa. Wafa ngenxa yezenkolo abalandeli ababecabanga ukuthi bangama-gnanis. Isizukulwane senyoka inobuthi bokungazi. Ngakho, ukuphila kukaKristu kwaphela ngesikhathi izandla zohlobo lwenyoka.

  UNkulunkulu wazi zonke izinto ngoNkulunkulu, futhi abantu bayazi lutho. Abantu bangabamba kuphela i-dharmas kaNkulunkulu (yaphezulu izimiso) lapho uNkulunkulu ezembula. Isambulo saphezulu sibalulekile ukuze abantu bathole ukuqonda ngesimo sikaNkulunkulu kanye izimfundiso. Ingxenye kaNkulunkulu, ekhona kuwo wonke ama-athomu umkhathi, uthatha umzimba womuntu. Ukuba khona emhlabeni ukuze isikhathi esithile, uhlelo olwaziwa ngokuthi i-karma luhilelekile. Imbangela ukuzalwa komuntu kuthiwa kudalwe yi-karma, kodwa uNkulunkulu uqobo lwakhe ngaphandle kwe-karma. Ngakho-ke, uNkulunkulu udala i-karma edingekayo ngenxa yokuzalwa Kwakhe uqobo futhi abe esenyameni ngaleyo karma. Okunjalo Umuntu ubizwa ngokuthi <strong>Svayambhu</strong>, okusho ukuthi &lsquo;ukuzalela,&rsquo; engaboshiwe yi-karma. Isidalwa esinjalo saziwa ngokuthi <strong>Bhagavan noma Umduduzi (Adarana Karta)</strong>. Kukholakala ukuthi uNkulunkulu angaba wabonakaliswa eMhlabeni njengeBhagavan izikhathi eziningi esikhathini esidlule,nakuba inani eliqondile lezikhathi lapho i-dharma yaba khona ukubuyiselwa eMhlabeni kuhlala akwaziwa. Izimfihlakalo eziningi zinekwembuleka ezigidini zeminyaka edlule, nomlando oqoshiwe ithatha iminyaka eyizinkulungwane ezimbalwa kuphela. Ngenxa yalokho, ulwazi lwethu lwe zehlakalo ezedlule zinomkhawulo, kodwa amarekhodi omlando abonisa izenzakalo lapho uNkulunkulu ethathe isimo somuntu ukuze aqondise isintu.

  <strong>Kuyacaca ukuthi uNkulunkulu uthatha isimo somuntu futhi uyafa njengalokhu umuntu emhlabeni ngezikhathi ezithile</strong>. Ekucabangeni okujulile futhi ngokuhlakanipha esinakho, kuba sobala ukuthi uNkulunkulu wazalwa cishe eminyakeni engu-5,000 edlule eNdiya nasezindaweni ezizungezile eminyakeni eyizi-2 000 edlule kwa-Israyeli. Lokhu kuba sesimweni somuntu saphezulu kwakwaziwa ngokuthi UJesu Kristu ngesikhathi Sakhe kwa-Israyeli. Wayekhona phakathi abantu eMhlabeni isikhathi esilinganiselwe seminyaka engama-33, beholwa nguYe i-karma enqunywe kusengaphambili. Phakathi neminyaka yokuqala engu-30 yokuphila Kwakhe, UJesu wayephila njengeJeevatma evamile. Kwaba ngokulandelayo iminyaka emithathu lapho Anikeza ukuhlakanipha kuka-Atma esintwini ngenkathi ngiphila njengo-Atma ngezinye izikhathi.

  Abanye abantu bangase babuze amazwi ami okuthi &lsquo;Ubunkulunkulu buzalwa njengomuntu emhlabeni. Ubunkulunkulu (uNkulunkulu) busakazeka kuye yonke i-athomu yendawo yonke.&rsquo; Ingabe uNkulunkulu akasakazeki kuyo yonke indawo indawo yonke lapho ezalwa njengomuntu? UNkulunkulu, ngubani kuthiwa ubekhona kukho konke, akekho kithi sonke ngemva kokuba khona wazalwa njengo Bhagavan emhlabeni? Ake sihlole impendulo ngokusebenzisa isifaniso. Cabanga ngolwandle, olugcwele amanzi. Uma sithatha ingxenye yalawo manzi aphuma olwandle esitsheni esincane, isitsha manje siphethe amanzi olwandle, kodwa ulwandle luhlala lugcwele amanzi. Amanzi esitsheni abizwa ngokuthi &lsquo;ahlukanisiwe amanzi, &rsquo; kuyilapho amanzi olwandle &lsquo;engamanzi angahlukanisiwe.&rsquo; Kokubili ulwandle nesitsha kuhlukaniselana amanzi afanayo, nomehluko ezimpahleni zamanzi, ngaphandle kokuthi isitsha amanzi ahlukene nolwandle. Ngendlela efanayo, singafanisa UNkulunkulu olwandle. I-Bhagavan ifana namanzi ahlukene phakathi isitsha, esihlukile kuNkulunkulu njengolwandle. Nokho, isitsha amanzi namanzi olwandle kuyafana; ngokufanayo, Bhagavan noNkulunkulu bayafana. Uma amanzi efakwa esitsheni, alunciphisi ulwandle, nolwandle luhlala lugcwele. Ngokunjalo, lapho ingxenye kaNkulunkulu ithatha isimo somuntu njengeBhagavan, uNkulunkulu uyaqhubeka ube yonke indawo njengakuqala. Akukho-nguquko kuNkulunkulu, yakhe izimiso zaphezulu, noma ukuba khona Kwakhe yonke indawo lapho ebonakala njenga Bhagavan. Ingxenye kaNkulunkulu iba yiBhagavan, kodwa hhayi yonke UNkulunkulu. Nakuba uBhagavan eyingxenye kaNkulunkulu kuphela, Unayo izakhiwo ezifanayo. Ngakho-ke, akukho lutho olungalungile ngokusho lokho UNkulunkulu uyazalwa, nakuba yingxenye kaNkulunkulu kuphela ezalwa emhlabeni. Ngakho, akukho lutho olungalungile ngokuthi uJesu &lsquo;unguNkulunkulu.

  Abanye abantu bangase babuze omunye umbuzo: Uma uJesu enguye Nkulunkulu, kungani abekezelela ukuhlupheka lapho abantu bemlimaza? Kungani abhekana nokuhlushwa nokuthotshiswa komuntu? Bona ingase futhi ibuze ukuthi kungani uJesu engazange adalule ubuyena Bakhe bobunkulunkulu kuye kubo futhi asebenzise amandla Akhe obunkulunkulu ukujezisa labo aba baMphatha kabi. Nansi impendulo yethu: Ukuze sikuqonde lokhu, thina kumelwe aqale aqonde imfihlo yaphezulu. Ngaphakathi komuntu ojwayelekile umzimba, kukhona imiphefumulo emithathu - Jeevatma, Atma, kanye I-Paramatma. Phakathi kwale miphefumulo emithathu, iJeevatma ne-Atma bobabili bahlala ngaphakathi komzimba. Le miphefumulo emibili ayikho ngaphandle emzimbeni. Umphefumulo wesithathu, iParamatma, udlulela ngaphakathi futhi ngaphandle komzimba, lingena kuwo wonke ama-athomu endaweni yonke. Kodwa-ke, iParamatma ayizibandakanyi ngenkuthalo ezenzweni ngaphakathi noma ngaphandle komzimba. Umphefumulo wesibili, u-Atma, unjalo unomthwalo wemfanelo kuyo yonke imisebenzi yomzimba. Umphefumulo wokuqala, uJeevatma, akenzi lutho ngaphandle kokuthola injabulo nosizi. Abaningi abantu bangacabanga ukuthi bona (Jeevatma) yibona ukwenza zonke izenzo, kodwa akunjalo ngaphakathi kwe umzimba womuntu. I-Atma, ehlala ngaphakathi kwethu ngaphandle kwethu ukuqwashisa ngokwazi, wenza wonke umsebenzi. Ngisho no-Atma uyakwenza lingenzi utho ngokwentando yalo. I-<strong>Atma</strong> iyasebenza ngokwe <strong>karma</strong>, okuyimbangela eyisisekelo yazo zonke umsebenzi. Ngokomthetho we-karma, i-Jeevatma imiselwe thola injabulo nosizi. Ukuze i-Jeevatma idlule lokhu okuhlangenwe nakho ngaphakathi komzimba, i-Atma, esakazwayo kuwo wonke umzimba, kusiza le misebenzi yomzimba. Lokhu kuhlanganisa izinqubo zomzimba ezifana nokugaya ukudla, ukulawula ukushaya kwenhliziyo, nokulawula imisebenzi yomzimba efana ne ukuhlukana komchamo nomjuluko egazini. Indima ka-Atma ukwenza le misebenzi yomzimba kwenza i-Jeevatma ikwazi ukuphilisana emzimbeni. Ngaphakathi komzimba, umsebenzi oyinhloko kaJeevatma ukuzibonela. Lona umthetho wemvelo olawula wonke umuntu umzimba, ongaguquki futhi uhlala njalo.

  Nakuba uNkulunkulu ezalwa njengomuntu, umzimba Wakhe uyasebenza ngohlelo olufana nelomuntu ojwayelekile. Kwakhe umzimba, iParamatma kumele ibe khona, i-Atma yenza konke umsebenzi, kanye nokuhlangenwe nakho kwe-Jeevatma. Le nqubo efanayo iyenzeka emzimbeni kaNkulunkulu lapho ethatha isimo somuntu. Lapho uNkulunkulu weza njengoJesu, umzimba Wakhe wawungehlukile kovamile umzimba womuntu. Ngenxa yalokho, Wabhekana nokuhlupheka futhi izinjabulo njenganoma iyiphi i-Jeevatma. UJesu wabhekana neziningi izinselelo empilweni, konke okwakumele abhekane nakho njengeJeevatma. Ukuze abhekane nalezi zimo empilweni Yakhe yasemhlabeni, wadala okwakhe I-karma yakhe futhi yenziwe njengomuntu. Manje, ungase ubuze yini emehlukanisa nathi. Kukhona eyodwa ebalulekile ngempela umehluko. Ngaphambilini safunda ukuthi yi-Atma kuphela esebenzayo kuwo wonke umzimba womuntu. Emzimbeni kaBhagavan, kunjalo I-Atma eyenza imisebenzi. Noma kunjalo, zikhona izimo ezihlukile lapho kwenzeka okuthile okuhlukile ngaphakathi Umzimba kaBhagavan. Kwezinye izimo, imiphefumulo emithathu iyaphambuka kusuka ezindimeni zabo ezijwayelekile futhi basebenze ngokuhlukile. Phakathi izikhathi ezinjalo, i-Jeevatma ingena esimweni lapho kungekho khona isipiliyoni, esivumela u-Atma ukuthi athathe indima ye-Jeevatma. Amazwi akhulunywa emzimbeni kaBhagavan kulesi simo, ephuma I-Atma, ingokomoya ngokuphelele ngokwemvelo. Okujulile okungokomoya amaqiniso kanye ne-dharma kaNkulunkulu yembulwa kuphela lapho u-Atma ekhuluma ngqo. Ezikhathini ezingavamile, u-Atma noJeevatma bayathula, noParamatma uyathatha uyakhuluma. Izehlakalo ezinjalo zingase kwenzeke kanye noma kabili empilweni kaBhagavan. Ezimpilweni ze UJesu, uKrishna, noRavana Brahma, kwakunezimo lapho kukhuluma uParamatma. Lapho iParamatma ikhuluma, uPrakruti (imvelo) ilandela amazwi Akhe. Ngokufanayo, lapho Atma uyakhuluma, ukuhlakanipha okujulile kungaphansi kokulawula Kwakhe. Ezimpilweni lezi zidalwa zaphezulu, okulandelayo kwenzeka<strong>: 1) Amazwi kaParamatma asebenzisa umyalo phezu kwePrakruti. 2) Amazwi ka-Atma adlulisa ukuhlakanipha okumsulwa kwe-Atma. 3) Jeevatma wazibonela injabulo futhi usizi.</strong> UParamatma ukhulume lapho kwaqubuka isiphepho olwandle ngesikhathi sikaJesu nangesikhathi yena wayala isivunguvungu ukuthi sehlise umoya. Kwaba sobala ukuthi U-Prakruti walandela amazwi Akhe futhi wehla. Njengo-Atma, Waveza ukuhlakanipha okumsulwa. Wabuye wathola injabulo ehlukahlukene futhi usizi njengeJeevatma phakathi nayo yonke impilo yakhe. Imicimbi efanayo kwenzeka empilweni kaKrishna, lapho eyala khona iLanga futhi wabulala uSaindhava. Kwakukhona futhi isenzakalo lapho uKrishna wembule isimo sendawo yonke futhi wamemezela, "NgiyiParamatma." Njengoba Atma, Wadlulisela ukuhlakanipha okujulile ngesimo se Bhagavad-Gita, futhi wezwa ubumnandi nosizi empilweni njengeJeevatma yesikhathi esisele. Lokhu kuhlangana kwabathathu imiphefumulo ethatha izindima ezihlukene yenzeka ngaphakathi kuphela Umzimba kaBhagavan. UbuNkulunkulu buthatha isimo somuntu kanye kuphela izinkulungwane noma izigidi zeminyaka. Lapho uNkulunkulu ezalwa Emhlabeni, Uphila kakhulu njengeJeevatma, ngokufana nabanye. Nokho, ngezikhathi ezithile Ukhuluma njengo-Atma izikhathi ezimbalwa ngonyaka isikhathi esifushane lapho kudingeka. Ekhuluma njengeParamatma kwenzeka kuyaqabukela, uma kwenzeka. Isidingo sokukhuluma njengo-Atma kuvela ngoba Uzele ukuzonikeza ama-dharmas. Lokhu imelela isimiso sikaNkulunkulu, esihlukile esimisweni samaMaya.

  Ayikho inkinga inqobo nje uma uNkulunkulu eziphathisa okomuntu umuntu ojwayelekile. Nokho, uMaya uyaphikisa lapho uNkulunkulu emnikeza ukuhlakanipha njengo-Atma. IMaya iphikisana ngokuyisisekelo nekaNkulunkulu ukuhlakanipha. Ngakho-ke, iMaya, evame ukubizwa ngokuthi uSathane, iqaphile ekuvimbeleni abantu ukuthi basuke ekuthembekeni kwabo Uhlangothi lukaMaya lokwamukela ukuhlakanipha kukaNkulunkulu. Ngaphezu kwalokho, Maya ifuna ngenkuthalo labo abakhombisa intshisekelo futhi ukuqonda ukuhlakanipha, ezama ukubabuyisela emuva kukho ohlangothini. Yingakho abantu abaningi benentshisekelo elinganiselwe kuphela ukwamukela ukuhlakanipha kwaphezulu kweqiniso, ikakhulukazi ngenxa yethonya UMaya. Ngenxa yalokho, ngisho nalabo abanokuhlakanipha okuthile ingase iphambuke endleleni. Ungase uphakamise umbuzo kuleli phuzu: &ldquo;Baningi abazinikele namuhla abajule kakhulu bazibophezele ekukholweni kwabo. Bafuna ukuhlakanipha ezinhlobonhlobo i-spiritual gurus futhi ubonise ukuzinikela okungantengantengi konkulunkulu. Cishe wonke umuntu uzinikele kuNkulunkulu, ngaphandle kwabambalwa abangakholelwa kuNkulunkulu. Kungenzeka yini ukushintsha abazinikele bakaSai Baba no-Ayyappa? Ngaphandle kwamathempeli amadala ezweni, amaningi amathempeli amasha akhiwa ukuhlonipha uShirdi Sai Baba kanye no-Ayyappa Swamy. Kubonakala sengathi uMaya akazange avimbezele ukuzinikela kwabo. Singawamukela kanjani umbono wakho?&rdquo; Nakhu impendulo yami.

  IMaya ime ngokumelene ngqo nendlela kaNkulunkulu futhi ukuhlakanipha okuphezulu. Ukumelana kwayo nokuhlakanipha okujulile kukaNkulunkulu ikhombisa amandla amakhulu kaMaya, okukhulunywa ngawo njenge-'<strong>Maya duratyaya' </strong>ku-Bhagavad-Gita. UNkulunkulu wathi phakathi Bhagavad-Gita ukuthi <strong>akunakwenzeka ukunqoba amaMaya</strong>; ngakho kuyaziwa ukuthi <strong>uMaya uyakhohlisa ngendlela engacabangeki abantu.</strong> Ngakho, ukusebenza kwamaMaya kusenzima kakhulu futhi okungaqondakali, okushiya abantu abathile besengozini yayo izinkohliso. I-Maya isebenza ngokwakha inguqulo yayo ye ukuhlakanipha. Njengoba uNkulunkulu engavamile ukuba sesimweni somuntu eMhlabeni njengeBhagavan kanye ezinkulungwaneni zeminyaka, iMaya ikhiqiza ukulingisa okuningi AmaBhagavan ukudida nokuphambukisa abantu ekuboneni uBhagavan wangempela. Yethula izinhlobo eziningi zokuhlakanipha, okwenza kube nzima ngabaningi ukuhlukanisa ukuhlakanipha kweqiniso ku mbumbulu. Lapho kunamaBhagavan amaningi ahambisana nawo Maya emhlabeni, ngubani ozoqaphela Bhagavan weqiniso ngubani akuvamile ukuza emhlabeni? Lapho kukhona amaBhagavani khombisa izimangaliso nezimangaliso eziningi ezingaphezu kwemvelo (mahatyas), okwazi ukuhlonza iBhagavan leqiniso elikhombisayo kuphela i-mahatyas eyodwa noma amabili empilweni? Ngale ndlela, kuye kwaba akunakwenzeka ukubona ukuhlakanipha kukaNkulunkulu kanye neBhagavan. uNkulunkuluwabonisa ubuqiniso Bakhe esimweni sendawo yonke, into engekho muntu owake wabona futhi angaqonda. Kodwa amaMaya athonya abanye abantu ukubhala ukuthi ama-devatas amaningi abonise indawo yonke ifomu, okuhlanganisa uSaibaba no-Veerabrahmam ukuze abantu benze ungabali ifomu lika-Krishna lendawo yonke njengephezulu kakhulu. Ubani ocabangayo uhlobo lomhlaba wonke u-Krishna alubonise ku-Bhagavad-Gita yilona okukhulu kunakho konke? Ngakho, amaKristu awakwazanga ukubona uJesu Kristu njengoBhagavan; ngokufanayo, amaHindu ayengakwazi ukwazi Krishna njengoba Bhagavan. AmaHindu ayengenakubheka uKrishna njengoNkulunkulu weqiniso. Nakuba abanye beMbheka njengowokugcina kubo bonke abanye oNkulunkulu, abanye bayehluleka bamazi njengonkulunkulu omncane ngenxa yokubona kwabo Izenzo zakhe njengobubi. Akekho obala uKrishna njengo UNkulunkulu, njengoShirdi Sai Baba. Ngokufanayo, esikweni lobuKristu, naphezu kokubheka uJesu Kristu njengeNdodana kaNkulunkulu, abaningi baye bambheka akazange ayibambe ingqikithi yezimfundiso Zakhe. Ngaphansi kwethonya yamaMaya, amaKristu ahlonipha isiphambano, okwaba usizo olukhulu ekubethelweni kukaJesu, esikhundleni sikaJesu uqobo. Babecabanga bona babeyobhekwa njengamaHindu uma bekhulekela <strong>isithixo sikaJesu;</strong> ngakho, bathandaza esiphambanweni. Ngenkathi uJesu ethi, <strong>&ldquo;Lowo onakho ongibonile mina umbonile uBaba,&rdquo;</strong> akuwona yini umsebenzi kaMaya owawenza AmaKristu ayayihlonipha esiphambanweni, okwabangela ukufa kukaJesu, esikhundleni salokho wesithombe sikaJesu? IMaya iholela abantu kude nekaNkulunkulu endleleni, ngisho nalapho bekholwa ukuthi baqinile kuleyo ndlela. Isebenza ukubukela phansi ukwethembeka kwalabo abaqondayo ukuhlakanipha kukaNkulunkulu nokukhuluma iqiniso, okwenza amazwi abo abonakale okuphansi noma okungezwakali. Ngaphezu kwalokho, iMaya ifake isandla ukwakhiwa kwezinkolo ezihlukahlukene kanye nenkohliso ehlukanisayo Onkulunkulu bakhona ngenkolo ngayinye. Nakuba kukhona oyedwa ophakeme amandla abusa indawo yonke, uMaya uye wakhuthaza ukukholelwa kuwo onkulunkulu abaningi abahambisana nezinkolo ezahlukene. Ithonya Maya lijulile, okuholela ukuvela uquqaba loNkulunkulu nezinkolelo zenkolo. Ngaphakathi komKristu ukholo lulodwa, abanye abazinikele bakhonza uMariya kuyilapho abanye bekhonza UKristu. Ngokufanayo, ubuHindu buqhosha ngonkulunkulu abaningi. Ekukhanyeni kwe lokhu kwehlukahlukana, kubalulekile manje ukuqala umkhankaso wokubona inhloko yokugcina yabo bonke onkulunkulu nezinkolo. Nokho, lo msebenzi akulula. <strong>Ngokuqala ngokuqaphela iMaya nomthelela wayo, singakwazi funani indlela eya kuNkulunkulu.</strong> Ngakho-ke, kunjalo kubalulekile ukunquma ukuthi indlela okuyo njengamanje iholela kuNkulunkulu noma ithonywe amaMaya.

  Kukhona amandla angaphezu kwawemvelo angenamkhawulo angenasimo, engenagama, futhi engachazwanga. Ake sibhekisele kuyo ngokuthi &lsquo;Paramatma.&rsquo; Kakhulu kuncane okwaziwayo ngeParamatma, umthombo wakho konke ukuba khona. I-Paramatma kumele izibonakalise yona futhi izembule Yena ngoba, naphezu kokungena kuwo wonke ama-athomu, sihlala silinganiselwe ukuqonda kuphela i-Pancha Bhutas (izakhi ezinhlanu eziyisisekelo). Izinzwa zethu zingabona kuphela lokho okungaphakathi kobubanzi bazo, futhi I-Paramatma ingaphezu kokuqonda izinzwa zethu. Singakwazi kuphela ukuMqonda lapho Ethatha isimo somuntu, enza Yena uqobo ebonakala futhi embula ukuhlakanipha Kwakhe. Kungenjalo, thina nihlale ningamazi. Ngakho-ke, iParamatma kumele ibe yinyama njengomuntu futhi adlulisele ukuhlakanipha Kwakhe. Aqhamuke azodalula owakhe dharmas, kodwa lezi zimfundiso ziyanyamalala ngokuhamba kwesikhathi, zidinge ezakhe buyela ukuze ubabuyisele. Paramatma, umdali we umkhathi, ngokuvamile ukhetha ukuveza njengomuntu, ehola ubukhona obufana nomuntu ojwayelekile, nokugcwalisa Okwakhe inhloso. Ukuhlonza i-Paramatma ngendlela enjalo kuyinselele umsebenzi. Naphezu kokuzalwa kukaParamatma okuningi eMhlabeni, abantu bazabalaze ukubona ubukhona Bakhe kuze kube manje usuku.

  Labo abehluleka ukuqaphela uBhagavan uma Ekhona abakhona ngokuvamile baqala ukumkhonza ngokuzinikela okukhulu ngemva kwalokho uhambile. Abamkhulekeli ngoba enjalo I-Paramatma, kodwa kunalokho ngoba bakholelwa ukuthi unakho ukuhlakanipha okukhulu noma ukuthi izifiso zabo zizofezeka. Nokho, abakaqapheli ukuthi UyiParamatma. Siyakwazi ukubona iscalekiso se Paramatma ngokusebenzisa izimiso ezithile. Kungale ndlela, singabona ukuthi iParamatma yeza njengoKrishna ukuphela kwe-Dvapara Yuga futhi kamuva njengoJesu eKali Yuga. I-Paramatma kungenzeka ukuthi nayo ifike ngokuhamba kwesikhathi, kodwa thina asiyazi.

  Noma ngabe zingaki izingane zokuzalwa iParamatma, akukho ukufana kokunye ukuzalwa kuya kokunye ngaphandle kwakhe i-dharmas. Yize ingqikithi yeParamatma isalokhu ifana Krishna, owazalwa Dvapara Yuga, noJesu, ngubani wazalelwa eKali Yuga, izimpilo zabo zangaphandle ziningi kakhulu ezahlukene. USri Krishna wayejabulela ukuphila ingcebo futhi enabayisishiyagalombili abafazi. Waphinde wathumba unkosikazi Wakhe wokuqala ngemvume yakhe futhi wabulala izitha Zakhe. Ngemva kokubuka konke lokhu, kuba inselele kunoma ngubani ukuthi abone ukuthi unguBhagavan, onguye igcwele ingxenye yeParamatma.

  Awekho amanga noma inkohliso empilweni kaJesu, owathi wazalelwa eKali Yuga. UJesu wayemnene futhi wayezophenduka esinye isihlathi uma sishaywa yisitha. Wayengenayo inkanuko yabesifazane. UKrishna noJesu bahluke kakhulu ezindabeni zezwe. NgishoAmaGuru kuzo zombili izinkolo anephutha ngalezi ezimbili. UmHindu AmaGuru agxeka uJesu ngokubuza, &ldquo;Kungani uJesu afela ezandleni kwabantu abajwayelekile, futhi kungani engazisindisanga? Kungani? Ingabe kufanele afe uma enamandla kaNkulunkulu okuvusa abafileyo? Kungani ahlupheka lapho ebethelwa esiphambanweni?&rdquo; Ngokufanayo, Abefundisi besonto bagxeka uKrishna ngokuphikisana ngokuthi, &ldquo;Angakwenza kanjani waba uNkulunkulu ngenkathi Enabafazi abaningi na?&rdquo; Ngale ndlela, bagxila ezicini zezwe zezimpilo zikaJesu noKrishna, kodwa cha umuntu ucabanga ukuthi kungani izenzakalo ezinjalo zenzeka ekuphileni kwabo. UParamatma uqobo Lwakhe wathi akekho ongamazi lapho Efika Emhlabeni. Indima yakhe wukuzenzisa ukuze cha umuntu uyaMqaphela. Umsebenzi wakhe wukuba isela elingaziwa phakathi kwethu, ukweba ukungazi kwethu.

  Ngaphambili, sishilo ukuthi uNkulunkulu akanakuqondakala ngezindaba zomhlaba<strong>. UNkulunkulu angabonwa kuphela ngokuhlakanipha kukaNkulunkulu</strong>. Nalabo abathi bangamaGuru ngokuvamile bayehluleka ukubamba lesi simiso futhi bazame ukukala uNkulunkulu ngokusebenzisa izindinganiso zomhlaba. Ngakho, lapho uNkulunkulu efika Umhlaba, akekho omaziyo. Abenza izimangaliso ngokusekelwe ezindabeni zezwe kungase kubonakale mkhulu futhi njengoNkulunkulu, kodwa uNkulunkulu weqiniso uvame ukudlula ubheka. Lokhu kungenxa kaNkulunkulu ubukhona abukwazi ukubonakala ngokusekelwe kwangaphandle, okwezwe izici. Kunalokho, ukuba senyameni kukaNkulunkulu kungaqashelwa ngokusekelwe kulokhu i-dharma. I-dharma efanayo ingatholakala ku-Bhagavad-Gita nasezimfundisweni zikaJesu, ezisivumela ukuba sizibone njengomunye. Nokho, akukho okunye ukufana phakathi kwabo ezindabeni zangaphandle, zezwe.

  Munye kuphela uNkulunkulu womhlaba wonke, lowo uzalwa njengendoda enamagama amaningi nezindlela zokuqondisa ubuntu kuye. Ngeshwa, abantu abaningi bayehluleka qaphela lokhu futhi udale izinkolo eziphikisana ngokuthi uNkulunkulu ungubani okukhulu. Behluleka ukuqonda ukuthi uNkulunkulu enkolweni yabo futhi UNkulunkulu kwezinye izinkolo uyafana. Abantu bathambekele ekuthandeni kwabo inkolo kunoNkulunkulu, okuwukungazi okukhulu. Ikona kubalulekile ukwazi ukuthi munye kuphela uNkulunkulu, nakuba thina niMbize ngamagama ahlukene. I-Paramatma inquma indima Yakhe ngokusekelwe ngesikhathi, isizwe, kanye nabantu, futhi esesimweni somuntu njenge Bhagavan fundisa i-dharma Yakhe. Ukuzalwa Kwakhe akufani, kodwa inhloso Yakhe yilokhu njalo kuyafana - ukufundisa ama-dharmas akhe. Lapho Efika njengoba UJesu noma uKrishna, ama-dharma awafundisa ayefana. uNkulunkulu kanye ne-dharmas Yakhe ingase ibonakale ihlukile ngoba nini UParamatma wazalwa njengoKrishna noJesu, amagama abo, amazwe azalelwa kuwo, futhi ubuntu babungafani.

  Ake sithathe i-dharma eshiwo yiParamatma njenge isibonelo. USri Krishna uthe eGita, <strong>'Paritranaya Sadhunam vinasaya chaturskrutam,&rsquo;</strong> okusho ukuthi, <strong>&ldquo;Ngizoyivikela olungile futhi abhubhise ababi.&rdquo;</strong> Omunye umKristu abashumayeli bathatha lamazwi bese bethi kumaHindu, &ldquo;Inkolo yenu akunasivikelo, futhi uNkulunkulu wakho uzobulala izoni kuphela.&rdquo; Nokho, enkolweni yethu, kukhona isivikelo kuzo zonke izoni, futhi UJesu weza eMhlabeni ukuzosindisa izoni. Ngenkathi uNkulunkulu wakho engakwenza bhubhisa izoni nababi enkolweni yakho, Nkulunkulu wami (UJesu) uzokuvikela. Ngakho-ke, amaKristu asho ukuthi awo UNkulunkulu unguNkulunkulu weqiniso. AmaKristu ayengaqondi iqiniso incazelo yalokho okwashiwo iNkosi uJesu mayelana nalokhu, kanye namaHindu akazange ayiqonde incazelo ye-sloka eshiwo u-Krishna eGita. Ngakho, amazwi kaKrishna namazwi kaJesu abonakala ezahlukene kubo. Babekholelwa ukuthi uKrishna noJesu babenjalo ezahlukene, kodwa babengazi ukuthi ayefana futhi ukuthi amagama abawashoyo anencazelo efanayo. Amazwi &lsquo;ukubhubhisa izoni nababi&rsquo; kusho ukuthi basebenzisa isikhali <strong>'sokufundisa' </strong>ukususa i-karma yesono nobubi kanye zenze zibe msulwa. Lapho ababi behlambuluka, ngeke abanjwe ezonweni kodwa abe ngolungileyo. Khona-ke ngeke kube khona noma yibaphi abantu ababi. Ngakho, imishwana emibili, 'ukusho ku-Gita lokho UKrishna uzoqeda ababi&rsquo; kanye &lsquo;nokusho eBhayibhelini ukuthi uJesu uzonivikela ezonweni,&rsquo; kusho into efanayo.

  Nakuba uJesu noKrishna bakhuluma okuhlukile izilimi, zazingabantu abahlukene, futhi zinamagama ahlukene, inhloso yamazwi abo yayifana. Ngenxa yabantu ukungakwazi ukuqonda ngokugcwele umqondo kaNkulunkulu kanye nokuthambekela kwabo bahumushe amazwi Akhe ukuze avumelane nalokho abakuthandayo, bahlukanisa UNkulunkulu owamemezela i-dharma efanayo. Lapho amaHindu egxeka UJesu, namaKristu bathi uKrishna akayena uNkulunkulu noma I-Paramatma, iNkosi kanye noBaba we-paraloka, iNhloko ye- indawo yonke egcwele umhlaba wonke futhi ehlala ngaphakathi kwethu, uhleka, azi ukuthi laba bantu bayizimpumputhe nakuba benakho amehlo. UKrishna uthe kuyi-Gita, &ldquo;Ngizofika uma kunosongo ku-dharma." Nokho, amaHindu amqaphela njengoNkulunkulu kuphela uma Yena ivela ngendlela efanayo nangaphambili - ngezimpaphe zepigogo, umtshingo, kanye ne-chakra. Uma uNkulunkulu ezalwa esesimweni esihlukile, bona uthi, &ldquo;Awusiye uNkulunkulu wethu.&rdquo; EBhayibhelini, uJesu Kristu washo lokho Wayezobuya futhi. AmaKristu azombona uJesu Kristu kuphela uma Evela ngendlela efanayo nangaphambili - enezibazi zezinzipho ezandleni Zakhe nezibazi zomkhonto ohlangothini lwaKhe. Bazothi, &ldquo;Wena abasiyo iNkosi yethu,&rdquo; uma Eza ngesimo esehlukile. Ngenxa ye umehluko ekubukekeni nasekuziphatheni kwabo, amaKristu akakwazanga ukubona ukuthi uJesu wayenguKrishna, futhi ngokufanayo, AmaHindu awakwazanga ukuvuma ukuthi uKrishna wayenguJesu. Leyo kungani uNkulunkulu wathi eGita<strong>, &ldquo;Abantu bayangihlambalaza, ngoba bayangihlambalaza angazi mina nenkosi yami."</strong>Amanye ama-Hindu gurus azofundisa ukuhlakanipha futhi unikeze upadesa ku-Krishna uma Ebuya futhi. Ngokufanayo, uma uJesu ebuya futhi, njengoba kushiwo eBhayibhelini, Abashumayeli abangamaKristu, okungenzeka bangamazi, bazobhapathiza yena. Inqobo nje uma kukhona amaGuru azofundisa ubuhlakani U-Krishna uma Eshintsha isimo Sakhe negama, kungashiwo lokho kukhona ukungazi enkolweni yamaHindu. Ngokufanayo, inqobo nje uma kukhona amaKrestu azochaza amavesi eBhayibheli kuJesu uma Ushintsha isimo Sakhe futhi avele phambi kwabo, kungathiwa ukuthi abamazi ngokugcwele uNkulunkulu.

  Kunesizathu esinamandla sokuthi kungani ngisho nama-gnanis amakhulu akakwazanga ukubona uNkulunkulu noma ukuqonda ukuhlakanipha kukaNkulunkulu lapho UNkulunkulu weza emhlabeni. Ngaphambi kokuqonda isizathu, eyodwa kufanele ajwayelane ne-<strong>ndalo bonakalayo</strong>. Kukhona omelene noNkulunkulu obalulekile, yingakho uNkulunkulu engekho ngokugcwele waqonda. AmaKristu ayibiza ngokuthi &lsquo;uSathane,&rsquo; amaHindu ayibiza ngokuthi &lsquo;iMaya,&rsquo; futhi amaSulumane ambiza ngokuthi &lsquo;uShaitan.&rsquo; Ukuze aqonde imfihlo enamagama <strong>anjengoMaya, uSathane, noma uShaitan</strong>, umuntu kumelwe akwenze qala uqonde imfihlo yendalo. Ake singene ku imininingwane ngezansi.
</div></div>
</span>`
},
{
chapterName: "Imfihlo Yendalo",
chapterNumber: 1,
pageNumber: 1,
verse: ``,
meaning: ``,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UParamatma (uNkulunkulu) wayengeyena owesilisa noma owesifazane ngaphambili indawo yonke yadalwa. I-Paramatma yayifuna ukudala ifayela le- indawo yonke futhi ngaleyo ndlela kwavela iPrakruti yesifazane noma UMaya (uSathane). Wanquma izici ezidingekayo futhi zonke izindlela ezidingekayo ngakho. Njengoba uPrakruti wayengowesifazane, I-Paramatma yayihluke kakhulu kuye, futhi lokhu Isici saziwa ngokuthi iPurusha (owesilisa). I-Paramatma ifisa U-Prakruti ukuba ahluke ngokuphelele kuye, ngakho wamnikeza ukulingana igunya ngoba Wayekholelwa ukuthi umdlalo uzoba ngaphezulu kuyajabulisa lapho bobabili abaphikisi benamandla alinganayo. I-Prakruti (uSathane) iphambene neParamatma kodwa ayisona isitha. Nakuba kungokwemvelo kuNkulunkulu (Paramatma) ukubhekana nokuphikiswa kusuka kuSathane (Prakruti), abazona izitha zomunye nomunye.

  I-Paramatma, eyadala i-Prakruti, izogcina amufake kuYe. Ungubaba, umyeni, futhi umbhubhisi wePrakruti, kanye namandla angaphakathi kwakhe. UParamatma, omkhulu, udale iPrakruti futhi umatasatasa umdlalo obizwa ngokuthi &lsquo;iJagath.&rsquo; Kulo mdlalo, uParamatma uyazifihla Yena ngokwakhe njengoPurusha (owesilisa) nakuba engaphandle komdlalo, Yena akayena owesilisa nowesifazane. I-Prakruti ihlukaniswe yaba yisihlanu izakhi - Isibhakabhaka, Umoya, Umlilo, Amanzi, Nomhlaba - futhi ibizwa ngegama I-Prapancha. Ngemva kokudala i-Prakruti, iParamatma yayifisa ukwenza kanjalo dala i-Jagath ehlanganisa izidalwa eziphilayo ezithola ukuzalwa nokufa. Uzuze lokhu ngokudala izidalwa eziphilayo nge-Atma kanye nokwakha iJagath ngaphakathi kwePrapancha. Ku IsiTelugu, <b>&lsquo;Ja&rsquo; </b>kusho ukuzalwa, futhi <b>&lsquo;Gati&rsquo; </b>kusho ukufa. Ngakho, konke izinto eziphilayo ziqanjwe ngokufanelekile ngokuthi <b>&lsquo;iJagathi,&rsquo; </b>okubonisa ukuthi lihlanganisa wokuzalwa nokufa.

  I-Paramatma idale i-Jagath, ehlanganisa izidalwa eziphilayo ngaphakathi Prakruti. Ngenkathi uPrakruti (owesifazane) noParamatma (I-Purusha) ithathwa njengelingana, uJagati wazalwa ngokuhlukana kamuva. Kuze kube manje, iParamatma idale iPrakruti (Prapancha) kanye neJagathi, okuholela ezingxenyeni ezintathu, kuhlanganise I-Paramatma. Ekuqaleni, uParamatma, owayengeyena owesilisa noma female, wadala Prakruti. Ngemuva kwalokho, iParamatma yaguqulwa yaba UPurusha (Atma), wathatha uPrakruti njengomkakhe, futhi ndawonye, bona wazala inzalo eyingqayizivele ebizwa ngokuthi uJagati. Uma singanaki lobu budlelwano, iParamatma idale izingxenye ezintathu ezihlukene - ePrakruti, ePurusha, naseJagath. UPrakruti ngowesifazane, uParamatma ungowesifazane owesilisa (iPurusha), kanye neJagathi kufanele kuthathwe njengokungewona kanambambili (akukho owesilisa noma owesifazane). Umdlalo oyinhloko yilokho I-Paramatma ne-Prakruti idonsa i-Jagath (okungeyona kanambambili), ekhona phakathi kwabo. Kunemithetho yalo mdlalo. Nakuba I-Paramatma ichaze imithetho, Ubamba iqhaza emdlalweni ngokwemithetho ayimisayo, noma Ekhona umdali wakho konke futhi ongaphezu kwakho konke. Lo mdlalo, njengeminye, unayo umkhawulo wesikhathi. Umkhawulo wesikhathi wegeyimu ye-Jagath ngu-1000 Yugas noma i-108 crores yeminyaka, efana nendlela ibhola elinemizuzu engama-90 umkhawulo wesikhathi noma ikhilikithi inomkhawulo wama-overs angu-50. Umdlalo imizwa iphuka ebusuku futhi iyaqhubeka phakathi nosuku usuku ngalunye, isikhathi ngasinye sokudlala nesokuphumula sithatha ama-crores angu-108 (1.08 billion) iminyaka.

  I-Paramatma, engacacisiwe futhi engacacisiwe, ekuqaleni wadala i-Prapancha (ngaphandle kwendlela yokuphila) futhi kamuva wakhipha izidalwa eziphilayo (iJagath). I-Paramatma idaliwe Prakruti futhi waqashelwa ngokuthi Purusha. Wakha u-Atma futhi yahlukanisa i-Prakruti, ekhulelwa nenzalo ka-Atma, yaba izingxenye ezinhlanu. I-Prakruti enjalo ibizwa ngokuthi i-Pancha Bhutas noma i-Prapancha. I-Paramatma ihlukanise i-Atma ne-Jeevatma izingxenye ezintathu: I-Jeevatma (i-fe-form Jagath), i-Atma, ne-Paramatma. Yena yaziwa njengeParamatma ngemuva kokudala iJeevatmas kanye ne-Atma. Waqashelwa njengeParamatma eceleni I-Atmas (i-Jeevatma ne-Atma) kanye ne-Purusha eceleni kwe-Prakruti. Kunesisekelo sokumbiza ngoPurusha uma kukhona iPrakruti kanye neParamatma lapho imiphefumulo ikhona. Uma Prakruti futhi Atmas azikho, akwenzeki ukumchaza. Indlela yokuphila iJagath wazalwa uPrakruti noPurusha. I-Paramatma ihlele kanjalo umama nobaba eJagath banezimfanelo zePrakruti kanye nePurusha.

  I-Prakruti inezici eziphambene nalezo ze Phurusha. Kodwa-ke, iJagath iqukethe izimfanelo zazo zombili Prakruti futhi Purusha. I-Jagath yesimo sempilo ihlanganisa kokubili I-Jeevatma ne-Atmas ehlobene neParamatma, kanye nePrakruti imizimba ehlobene nezibhamu. Inkolelo yokuthi uNkulunkulu ukhona ihambisana ne-Atma, kuyilapho umbono ophikisayo wokuthi uNkulunkulu akakwenzi zikhona ezihambisana Prakruti. Umbukiso wabantu eJagath izici zazo zombili iPrakruti nePurusha. Ukufanekisa izici zePrakruti nePurusha, imizimba yabesifazane yadalwa ukuze ifana nePrakruti, kuyilapho imizimba yamadoda zenzelwe uku bamele iParamatma. Abantu abangebona kanambambili nabo babekhona idalwe ukuze ifanekisele iJagati, okubonisa ukuthi iJagati ikhona ngaphezu kwePrakruti neParamatma. Abesifazane, amadoda, nabangewona abantu kanambambili bafanekisela iPrakruti, iParamatma, kanye ne ohlala eJagathi. I-Prakruti = Abesifazane, i-Jagath = Okungeyona kanambambili, kanye Paramatma = Purusha (Owesilisa). UNkulunkulu wenza indalo Yakhe yaziwe ngokuthi ukudala abesifazane ukuze bafane noPrakruti, abantu abangabodwana kanambambili ukufanekisela iJagath, futhi abesilisa bamele iParamatma. uNkulunkulu waletha izingane emhlabeni ngokuhlangana kwabesilisa kanye abesifazane ukukhombisa ukuthi uJagathi ophilayo uzalwa ngu-Atma kanye I-Prakruti. Umama obonakalayo, ubaba, nenzalo bayabonisa ukuthi ukudalwa kwenzeka kanjani ekuqaleni. Abantu abaningi, naphezu kwabo ubuhlakani, ngokuvamile abacabangi ukuthi kungani amadoda ehluka kubo abesifazane futhi kungani inzalo izalwa kokubili amadoda kanye abesifazane. Ukuze ubambe ingokomoya ngempela, kubalulekile ukuqonda izisekelo <b>&lsquo;zeMfihlo Yendalo&rsquo; </b>emfundweni engokomoya

  Kubalulekile ukuqonda ukuthi umdlalo phakathi UNkulunkulu noPrakruti banobungane emvelweni. I-Prakruti neParamatma babambene ngezihluthu, ngamunye ezama ukudweba I-Jeevatma ezinhlangothini ezihlukene kulo mdlalo. I-Paramatma Umsebenzi uwukunikeza ubuhlakani kuJeevatma, ubaqondise ngakubo Yena. Ngakolunye uhlangothi, iPrakruti, ngesimo samaMaya nesikhali sayo yezibhamu, igcina abantu bematasa, ibavimbele ezindla ngoNkulunkulu. I-Prakruti ibamba abantu nsuku zonke imisebenzi, ephambukisa ukunaka kwabo ngokugcwele ezintweni zezwe, futhi zibavimbele ekuphendukeleni kuNkulunkulu ngokusebenzisa ithonya lesifiso kanye nezibhamu ezihambisanayo. Umdlalo omkhulu kakhulu phakathi kweParamatma nePrakruti kuhlala kungaziwa. Kwe uhlobo lwamaMaya, iPrakruti idonsela wonke umuntu eceleni kwayo, ngokuvamile ngaphandle kokuqaphela kwabo. Uma kukhona ongaphakathi eJagath uyacabanga ngoNkulunkulu futhi ufuna ulwazi Ngaye, Maya (Prakruti) ijwayele ukugxila futhi ibacuphe. Kuvela uMaya (uSathane). enamandla kunoNkulunkulu kulomzabalazo oqhubekayo phakathi kukaNkulunkulu kanye USathane. Njengamanje, ibambe ukwethembeka kwamaphesenti angama-99 abantu izidalwa. Esimweni esinjalo, lapho ukunqotshwa kukaNkulunkulu kungase kubonakale Ngokungenakugwemeka, iParamatma kufanele ilwele ukunqoba.

  Njengengxenye yemizamo Yakhe, iParamatma izoba yinyama njenge umuntu phakathi kwesintu futhi akhulume Ngaye, ehlose ukuqondisa abantu kuYe. Njengoba kushiwo ngaphambili, alikho iqiniso isitha, futhi uhlangothi ngalunye lisebenzisa isu lalo. Bobabili uSathane (Maya) noNkulunkulu uphilisana phakathi kwawo wonke umuntu, kodwa abantu ngokuvamile abaqapheli ubukhona babo kanye nomzabalazo wabo qaphela uNkulunkulu noma uMaya. Abantu bavame ukuhlala bengenandaba basohlangothini lukabani. UNkulunkulu ulwela ukukhulula abantu ngabanye ebanjwe ithonya likaMaya, futhi kulokhu, iParamatma izalwa eMhlabeni njengeNdodana kaNkulunkulu. Nokho, ukulandela imithetho womdlalo we-cosmic, Akumele embule ubuyena njengeNdodana kaNkulunkulu. Ngakho, lapho uNkulunkulu ethatha isimo somuntu, ukhuluma ngaye I-Paramatma njengomuntu ojwayelekile. I-Paramatma idlulisa Yakhe ukuhlakanipha futhi amise kabusha i-dharma Yakhe. Ngokuphambene, Maya uqamba amasu okuveza iNdodana kaNkulunkulu njengengenalwazi futhi ubuwula. Idala amaGurus namaSwamiji akhuthaza amaMaya adharmas njenge-dharmas futhi wethule izimfundiso zeNdodana kaNkulunkulu njenge-adharma. UMaya uqhudelana neNdodana kaNkulunkulu ngokusebenzisa lezi Gurus kanye Swamijis, okuholela abantu ukuba bamukele yayo izimfundiso esikhundleni sokuhlakanipha kukaNkulunkulu. AmaMaya asebenzisa amagama anjalo njenge-Paramatma, i-moksham, ukuhlakanipha, nokuzijwayeza ukudlulisa ama-adharma kubantu, okwenza kube inselele ukuhlukanisa I-dharma kaNkulunkulu evela kuma-adharma kaSathane.

  Uma othile efuna ukuthola uNkulunkulu, uMaya uyamnikeza ayikwazi ukuhlukanisa phakathi kwama-dharma nama-adharma, okuholayo ukuze bakholwe konke okunikezwa kubo. Kuyi-umthetho oyisisekelo womdlalo we-cosmic ukuthi bobabili uSathane (Maya) futhi uNkulunkulu akufanele aveze ngokusobala ubukhona babo eMhlabeni. Lapho i-Paramatma ithatha i-Bhagavan Emhlabeni, Yena uyenqaba ukusho ukuthi, "NgiyiParamatma." Ngomthetho ofanayo, lapho uPrakruti ezalwa eMhlabeni, akamemezeli ukuthi, &ldquo;Nginguye Maya.&rdquo; Nokho, lapho uMaya ezalwa, angagomela, &ldquo;Nginguye Bhagavan.&rdquo; Elandela lesi simiso, uMaya (uSathane) uyamemezela yona uqobo njengeBhagavan (iNdodana kaNkulunkulu), yenza okuningi izimangaliso, futhi kubonakala ngendlela yamaSwamiji ahlukahlukene. Nini I-Paramatma izalelwa endaweni eyodwa eMhlabeni, i-Prakruti idala abantu abaningi ababizwa ngegama elithi Bhagavan. I-Paramatma ukuzalwa kuhloswe kuphela ukunikeza i-dharmas Yakhe ngaphandle kokuba eyaziwa ngokusobala njengeBhagavan. Ngesikhathi esifanayo, iMaya ikhiqiza abaningi abanegama elithi Bhagavan ngisho nangaphambi kokuzalwa kuka I-Paramatma. IMaya yenza abantu bezwe amazwi ayo futhi ibavimbela ekulaleleni amazwi aqotho Bhagavan. Kulo mdlalo we-cosmic, i-Maya isebenzisa ithonya layo, futhi UNkulunkulu uyayifeza injongo Yakhe.

  Ngenkathi amaMaya ehlala ethatha uhlobo lwezibhamu ngaphakathi umzimba womuntu, uNkulunkulu ukhona ngesimo Atma ngaphakathi umzimba. Sishilo ngaphambilini ukuthi iMaya neParamatma uzokwenziwa abantu emhlabeni. Kubalulekile uku baqonde imizimba abazoyithatha. I-Maya umzimba wesilisa njenge Bhagavan nomzimba wesifazane njenge Bhagavati. I-Paramatma ihlala izalwa emzimbeni wesilisa. Prakruti, njengoba owesifazane, ngokuvamile ugqoka umzimba wesifazane, kodwa futhi uyakwazi zibonakalisa emzimbeni wesilisa ukuze akhohlise abanye. Kungenzeka inselele yokwehlukanisa iBhagavan yeqiniso ngezindlela ze IBhagavati neBhagavan. Kubalulekile ukuqaphela ukuthi uBhagavan unjalo njalo efakwe njengomuntu wesilisa. UBaba waseZulwini, Paramatma, wathathwa njengoJesu ngesimo sowesilisa. Ukuzalwa kwakhe kwenzeka ngesibeletho sentombi ngaphandle kokubandakanyeka komuntu ubaba. I-Paramatma incarnates Emhlabeni lapho kuphakama isidingo, <b>noJesu</b> engomunye onjalo. UMoya oNgcwele futhi kulindeleke ukuthi afakwe eMhlabeni esikhathini esizayo.

  Sibhale lo mbhalo ukukwazisa ukuthi cha kungakhathaliseki ukuthi iParamatma efanayo izalwa kangaki, Uyokwenza yembula ama-dharmas afanayo. Inhloso yalombhalo ukusiza abafundi baqonde amazwi kaJesu abalulekile encwadini ye testamente ensha futhi ukuziqhathanisa ne izimfundiso zeBhagavad-Gita. Ngokufunda lokhu, sithemba wena bayofinyelela ekwazini ubukhulu bukaJesu nomoya ongaphakathi we Krishna.

  <b>Ngu</b>
  <b>Okuwukuphela kweGuru Yezinkolo Ezintathu,</b>
  <b>Umsunguli we Thraitha Theorem, UMlobi WemiBhalo Engcwele Eyikhulu ESri. ESri. Sri Acharya Prabodhananda Yogeeshwarulu</b>

  </div></div>

</span>`,

},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 2,
verse: `<b>(1) IVangeli likaMathewu, isahluko 3, ivesi lesi-7.</b>`,
meaning: `<b>
(3:7) Nina nzalo yezinyoka! Ubani owakuxwayisa ukuba ubalekele ulaka oluzayo?
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuleli vesi, <b>&lsquo;inzalo yamabululu&rsquo; </b>igama elisha. Igama lalisetshenziselwa ukubhekisela kubantu. Nokho, kukhona ukungabaza mayelana ukuthi abantu bangathathwa njengenzalo yezinyoka. Lokhu kuphakamisa umbuzo kunoma ubani ofunda leli vesi. Kulokhu ivesi, sidinga futhi sijule encazelweni enemininingwane <b>&lsquo;lokuza kolaka.&rsquo;</b> Ngaphezu kwalokho, elinye igama kuleli vesi ithi <b>&lsquo;Ubani okuxwayise?&rsquo; </b>Le nkulumo ibhekisela esikhathini esidlule, nathi kufanele ifune ukuqonda ukuthi ubani owaxwayisa abantu esikhathini esidlule. Kunemibuzo emithathu esidinga izimpendulo zayo kuleli vesi.

  Inyoni isitha senyoka. Inyoni ingabulala inyoka. Inyoka iqale ihayize ukuze yethuse inyoni, kodwa akunjalo besaba. Inyoni ingadla inyoka njengokudla kwayo. Lokhu kuvamile ulwazi. Inyoka nenyoni zisetshenziswa njengezingathekiso ku umongo wemfundo engokomoya. Ijuba phakathi kwezinyoni iqhathaniswa ne-Atma, kuyilapho inyoka iqhathaniswa neMaya. Nakuba leli vesi lingakhulumi ngenyoni, liyakhuluma inyoka. Lapho inyoka iqhathaniswa neMaya (uSathane), &lsquo;Inzalo yezinyoka&rsquo; ingaqondwa &lsquo;njengenzalo kaMaya.&rsquo; Kunemba kakhudlwana, &lsquo;inzalo yamabululu&rsquo; isetshenziswa esikhundleni sokuthi &lsquo;umuntu izidalwa noMaya.&rsquo;

  I-Maya ibhekisela ekubunjweni kweGunas. Labo abakhona ehlale ematasa ngezibhamu futhi engakhombisi ukukhathazeka UNkulunkulu ubizwa ngokuthi &lsquo;inzalo yezinyoka.&rsquo; Iyaziwa ukuthi ulaka oluzayo lulindele labo ababoshiwe UMaya. <b>Ulaka, kulo mongo, lusho into embi kakhulu noma okunzima ukukuthwala. </b>Igama elithi &lsquo;intukuthelo ezayo&rsquo; lisikisela lokho ayikho okwamanje kodwa izobonakala ngokuzayo. Ini abantu abanalo ekuqaleni kodwa bazozuza ngenxa kaMaya (gunas) yizo zonke izinhlobo zokuhle (punya) kanye ne-karma embi (isono). Iokuhlangenwe nakho okubangelwa i-karma embi kungase kube kubi kakhulu. Ngakho-ke, <b>&lsquo;ukuza kolaka&rsquo; kubhekiselwa ku-karma ezokwenza kubonakala empilweni yomuntu</b>. Wonke umuntu ozelwe iqongelela i-karma, yingakho ivesi elithi <b>&lsquo;Nina nzalo ka izinyoka! Ubani owanixwayisa ukuba nibalekele okuzayo ulaka?&rsquo;</b> lusebenza njengesixwayiso kubantu.

  Lapho leli vesi lithi, &lsquo;ngubani owanixwayisa?&rsquo; liyasikisela ukuthi othile esikhathini esidlule wanikeza abantu ukuhlakanipha ukubalekela i-karma. Leli vesi lisikisela ukuthi kwakukhona umuntu owasho umbono esikhathini esidlule ukusiza abantu bagweme okuzayo i-karma. Ngakho-ke, kubalulekile ukuthi abantu bembule ungubani lo muntu, qonda ukuthi utheni, futhi nquma ukuthi ukudlulisele nini lokhu kuhlakanipha. Ukukhumbula umlando izehlakalo zesikhathi esidlule zingaba umsebenzi oyinselele. Uma impendulo ku mbuzo wokuqala obuzwe esahlukweni sokuqala kwezine AmaVangeli awaziwa, indaba embhalweni wesibili waphezulu ngeke kuqondwe. Ngemva kwalokho, amavesi alandelayo kusukela embhalweni wesibili waphezulu angeke kuqondwe. Ngakho, kubalulekile ukuqonda impendulo yombuzo wokuqala. Ngaphambilini ukuze embule iqiniso mayelana nalokhu, ake sihlole ukubaluleka kwalombhalo wesibili waphezulu.

  Ukuhlakanipha okwanikezwa uNkulunkulu kwaba umbhalo cishe eminyakeni eyizinkulungwane ezinhlanu edlule. Lo mbhalo inezahluko eziyi-18 futhi imaphakathi ne-18 i-parvas ye-Mahabharata. Lezi zahluko eziyishumi nesishiyagalombili ziyi okubhekiselwa kuwo njengombhalo wokuqala waphezulu. Ekuqaleni kwendalweni, uNkulunkulu wadlulisela ukuhlakanipha ngesibhakabhaka. Lokhu ukuhlakanipha kwakwaziwa ngokuthi &lsquo;ukuhlakanipha kwe<b>Japara</b>&rsquo; ngaleso sikhathi. Ku IsiTelugu, elithi <b>&lsquo;Para&rsquo; </b>lisho ukwehlukana noma ukwehluka, kanti elithi <b>&lsquo;Ja&rsquo; </b>lisho wazalwa. 'Japara' ngaleyo ndlela ihumusha 'ukuhlukanisa noma ohlukene nokuzalwa. &rsquo;Yathola leli gama ngoba uNkulunkulu akalokothi azalwe. Ukuhlakanipha kweJapara ekuqaleni kwaba umbhalo wokuqala waphezulu futhi futhi waba umbhalo waphezulu wesibili ngemva kwezinkulungwane ezintathu iminyaka ecishe ibe yizinkulungwane ezimbili ezedlule kusukela manje. Cishe eminyakeni eyi-1400 edlule, ukuhlakanipha okufanayo kwabhalwa ngokuthi umbhalo wesithathu waphezulu. Manje sesihumusha umusho ovela embhalweni wesibili waphezulu.

  Lapho kuphakanyiswa umbuzo othi &lsquo;Ubani okuxwayise?&rsquo;, thina kufanele akhulume ngalowo owakhuluma ukuhlakanipha endulo. Ngokusho kwalokhu, lowo owakhuluma ukuhlakanipha kwaphezulu wokuqala umbhalo yiwo owaxwayisa abantu kuqala. Kunesizathu ngokwazi owakhuluma kudala. Ngoba uNkulunkulu kuphela ongakwazi tshela ukuhlakanipha Kwakhe futhi uNkulunkulu uyedwa, uNkulunkulu ofanayo ofundisayo Ukuhlakanipha Kwakhe noma nini nanoma kuphi lapho kudingeka. Ngakho-ke, lowo owasho ngaphambili waphinda futhi emavesini. Ngakho, uma thina ufuna ukwazi lowo owatshela ukuhlakanipha kwesibili saphezulu umbhalo, kufanele siqale sazi lowo owasho ukuhlakanipha ku okwedlule. Ngakho-ke kwadingeka ukubuza umbuzo - ubani wakuxwayisa? Uma ungathola ukuthi ubani owakusho esikhathini esidlule, uzokwazi ube nethuba lokubona ukuthi ubani okushoyo manje. Thina zikukhuthaza ukuthi ukhulume lombhalo <b>ngenkolelo </b>yokuthi umuntu owadlulisela umbhalo wokuqala waphezulu ngu futhi umthombo wombhalo wesibili waphezulu.

  Ngaphambi kokuba sifunde umbhalo waphezulu wesibili, kudingeka siwufunde yazini amavesi uNkulunkulu, owatshela umbhalo wokuqala waphezulu, awasho embhalweni weBhayibheli. IBhayibheli lihlanganisa ama-66 esewonke izahluko ezine eziqukethe amavesi akhulunywa nguNkulunkulu ngokuqondile. Ezinye izahluko ezingama-62 zinamavesi avela kwamanye ama-gnanis. Lezi izahluko zaziwa ngokuthi 1) IVangeli likaMathewu, 2) IVangeli kaMarku, 3) IVangeli likaLuka, kanye 4) IVangeli likaJohane. Lokhu kulandisa kwamaVangeli amane kutholakala engxenyeni emaphakathi yeBhayibheli, elihlukanisa ngokuphumelelayo laba izingxenye ezintathu eziyinhloko. Izahluko zokuqala ezingama-39 zakha ingxenye yokuqala, zilandelwa ezine AmaVangeli njengengxenye yesibili, nezahluko ezingu-23 ezisele eyakha ingxenye yesithathu. Okuphawuleka kakhulu ukuqokwa zalezi zahluko ezine &lsquo;<b>njengamaVangeli,&rsquo; </b>zigcizelela awo ukubaluleka njengoba equkethe amazwi kaJesu ngesikhathi Sakhe impilo yasemhlabeni.

  <b>Ingxenye yokuqala yeBhayibheli inezingxenye ezingu-39.</b>
  <b>Ingxenye yesibili yeBhayibheli inamaVangeli ama-4.</b>
  <b>Ingxenye yesithathu yeBhayibheli inezingxenye ezingu-23.</b>

  Engxenyeni yokuqala neyesithathu, amanye ama-gnani adlulisa okukaNkulunkulu ukuhlakanipha. UJesu, isimo somzimba salowo owakhulula owokuqala umbhalo waphezulu, amavesi aphindaphindekayo emaVangelini amane. Ngakho-ke, ukuqonda lokhu, umbuzo othi, <b>&lsquo;Ubani owanixwayisa ukubalekela ulaka oluzayo?&rsquo;</b> kubekwa. Ngakho, kungaba wathi leli vesi, elibekwe ngaphezu kwawo wonke amanye, libambe elikhulu ukubaluleka.

  </div></div>
</span>`
},

{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 3,
verse: `<b>2) IVangeli likaMathewu, isahluko 3, ivesi 11.</b>`,
meaning: ` <b>
(3:11) Mina nginibhapathiza ngamanzi okushintsha imana (ingqondo). Kodwa emva kwami kuza omunye onamandla amakhulu kunami, engingafanele ukuthwala izimbadada zami. Uzokwenza anibhapathize ngoMoya oNgcwele nangomlilo.
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lokhu ivesi iqukethe amazwi <b>&lsquo;shintsha wemana&rsquo;</b><b>&lsquo;nokubhapathiza,&rsquo; </b>kanye &lsquo;namanzi nangomlilo.&rsquo; Ukuze uqonde ngokugcwele incazelo yaleli vesi, kubalulekile ukuthi qondani lawa magama amane. Uma elinye lalawa magama akukacaci, ingqikithi yaleli vesi ihlale ingaqondakali. Ngakho, ake sihlole izincazelo zala magama amane. Igama lokuqala &lsquo;ukushintsha imana.&rsquo; UManase (ingqondo) emizimbeni yethu igcina futhi ukhumbula lokho okufundiwe futhi kwagcinwa. Lapha, 'ukushintsha i-manas ibhekisela ekuguqulweni kwe-manas. UManas unesibopho ngokukhumbula izehlakalo zempilo yethu. Lapho i-manas yokuqala iba noshintsho futhi imana yesibili ithatha indawo yayo, konke izinkumbulo zamanasi okuqala ziyasulwa. Imana yesibili akakhumbuli imana yokuqala. Imanasi yokuqala iyaphela ukuba khona nokufa, futhi i-manas yesibili ivela ngokuzalwa. Lapho imana yokuqala ithathelwa indawo yesibili, kuba wabizwa ngokuthi &lsquo;ushintsho lwemana.&rsquo; Lokhu kuguquka okungokwemvelo kwemana kwenzeka ngomjikelezo ngamunye wokuzalwa nokufa. Ubhapathizo okungadingekile &lsquo;ekushintsheni kwemana&rsquo; ngoba kuyenzeka ngokwemvelo ngenqubo yokufa nokuzalwa kabusha.

  Uma umuntu efa futhi ezalwa kabusha, uchitha ubudala bakhe umzimba bese uthola entsha. Lokhu ukuguqulwa ngokomzimba ukuthi kwenzeka kwaziwa ngokuthi ukuzalwa. Kubalulekile ukuqaphela lokho abantu banezinhlobo ezimbili zemizimba ehlukene: obonakalayo (okungokomzimba) nokungabonakali (okucashile). Njengomzimba omdala, obonakalayo ithathelwa indawo entsha ngesikhathi sokuzalwa, ngokufanayo, lapho umzimba ongabonakali, ocashile uyashintsha, amaHindu (Indus) babhekisela kulo ngokuthi <b>&lsquo;upadesa,&rsquo; </b>kuyilapho amaKristu ethi <b>&lsquo;ubhapathizo.&rsquo; </b>Njengoba okukhulunywa ngakho kuleli vesi, ubhapathizo lusho ukuguqulwa wemana engabonwayo. Okufana nokuthi amadala amadala, athwele izinkumbulo, ziyaphela ekufeni, bese kuvela i-manas entsha ukuzalwa, ngesikhathi sokubhapathizwa, i-manas ibhekana nokujulile shintsha. Iyayeka ukusikhumbuza izinto ezivamile, ezingenalwazi izinkumbulo futhi iqala ukukhumbula <b>ukuhlakanipha futhi okwaphezulu izinkumbulo ezihlobene</b>. Umbhabhadiso yinchubo lapho umuntu ngamunye, eqondiswa izimfundiso zika <b>Guru</b>, uthola ushintsho wemana empilweni. Kulolu shintsho, i-manas engazi lutho esikhundleni salowo ohambisana nokuhlakanipha.

  <b>Ukushintsha kukaManase = Ukuphenduka ekungazini uye ekuhlakanipheni.</b>
  <b>Ubhapathizo = Ukuthola upadesa kuGuru.</b>

  UJohane uMbhapathizi wanikela &lsquo;upadesa&rsquo; ngamanzi, ethi, &ldquo;I anibhapathize ngamanzi, kepha onamandla kunami ozakuza emva kwakhe, yena ozalibhabhathiza ngoMoya oNgcwele njalo umlilo.&rdquo; Sike sahlola imiqondo &lsquo;yokushintsha kwe manas&rsquo; kanye &lsquo;nobhapathizo&rsquo; ngokuningiliziwe. Manje, ake singene ku-izincazelo &lsquo;zamanzi&rsquo; kanye &lsquo;nomlilo (okuphambene namanzi).&rsquo; Siyazuza ubhapathizo oluvela kuGuru, kodwa kunezinhlobo ezimbili zamaGuru. Abanye banamandla okuhlakanipha (Gnana Shakti), kanti abanye abanawo. AmaGuru amaningi ajwayele ukubhabhadisa noma 'upadesa' esebenzisa amanzi. Abanye bangasebenzisa ubisi, kokubili okuwuketshezi olubonakalayo, kuyilapho abanye basebenzisa umlotha ongcwele noma intuthu yempepho njengengxenye inqubo. Ukwengeza, phakathi 'ne-upadesa,' i-Guru inikeza i-mantra, igama, noma isithombe, futhi ziningi ezinjalo &lsquo;ama-upadesa&rsquo; akhona, anikezwa amaGuru ahlukahlukene. UJohane wayengomunye kulawa maGuru, futhi wavuma obala endleleni yakhe, ethi, &ldquo;Mina nginibhapathiza ngamanzi.&rdquo; Nokho, wabikezela nangokufika lomunye omkhulu, owayezabhabhathiza ngoMoya oNgcwele kanye umlilo. Sichaze &lsquo;ubhapathizo&rsquo; njengendlela eya enguqukweni wemanasi kusukela ekungazini kuya ekuhlakanipheni. Lapho lokhu ukuguqulwa kwenzeka ngobhapathizo, lunamandla ahlanze zonke izono zomuntu. UGuru unikeza okwaphezulu okufanelekile umlilo ngobhapathizo lwakhe ukuze ashise izono. U-Guru kufanele abe ne- ubuNkulunkulu bomlilo. Ivesi lokuqala esahlukweni sika-Atma Samyama Yoga&rsquo; eBhagavad-Gita, umbhalo wokuqala waphezulu, igcizelela isidingo salomlilo waphezulu, ithi, &lsquo;cha yogee cha na niragnir nachaakriyah,&rsquo; okusho <b>ukuthi &ldquo;Ontula lokhu umlilo waphezulu (Gnana Shakti), futhi uyeke ukwenza akuyona i-yogi (Guru).</b>

  I-yogi yangempela (iGuru) akuyena umuntu ogwema isenzo kodwa libonakala ngokuba khona komlilo wangaphakathi, okuyinto ifanekisela <b>amandla okuhlakanipha</b>. Yilokhu okushiwo ivesi &lsquo;njengokubhapathizwa ngomlilo.&rsquo; Lapha, &lsquo;umlilo&rsquo; ufanekisela <b>amandla kaNkulunkulu (Gnana Shakti)</b>, engabonakali ngeso lenyama. Lapho umuntu uthola lo mlilo saphezulu Guru yabo, it okhela a amandla okuguqula ngaphakathi kwabo, akwazi ukuvutha i-karma yabo eqoqiwe. Umlilo wokuhlakanipha (Gnana Shakti) okunikezwa umuntu obhapathiziwe kuqala ukubhubhisa okwakhe i-karma. Ngenkathi i-guru efana noJohane ibhabhadisa abantu injongo &lsquo;yokushintsha imana,&rsquo; <b>wayengenakho ukuhlakanipha amandla</b> ekubhapathizweni kwakhe ayedingeka ukuze ashise i-karma. Ngakho, yena wathi, &ldquo;Mina kuphela ngingakubhabhathiza ngamanzi.&rdquo; UJohn wachaza abantu ubhapathizo lwakhe, <b>lwamanzi, </b>olwaluyoba nalo ungashisi i-karma yabo. Kunalokho, wayekulindele lokho ababezoza ngemva kwakhe babezobhapathiza ekwazi ukufeza lokhu.

  <b>Ukubhabhadiswa ngamanzi = Upadesa ongashisi i-karma</b>
  <b>Ubhapathizo ngomlilo = Upadesa oshisa i-karma</b>
</div></div>
</span>`,
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 4,
verse: `<b>(3) IVangeli likaMathewu, isahluko 3, ivesi 12.</b>`,
meaning: `<b>
(3:12) Imfoloko Yakhe yokwela isesandleni Sakhe, futhi Uyokwenza hlambulula isibuya Sakhe, ubuthela amabele akhe phakathi isibaya nokushiswa kwamakhoba ngokungacimekiyo umlilo.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
  <ion-row><ion-col class="ion-text-center">
  <img src="assets/img/chaata.png"/><br>
  <img src="assets/img/kallam.png"/>
  </ion-col></ion-row>
<div class="poem"><div class="poemtext">
  UJohn, umfundisi owaziwayo wesikhathi sakhe, nguye owawenza wakhuluma leli vesi okukhulunywa ngalo. Ngaleso sikhathi, wanikeza &lsquo;upadesa&rsquo; (ubhapathizo) kubantu abaningi. UJohane &lsquo;wayengumngane omkhulu (umuntu ohlakaniphile)&rsquo; futhi wayekubone kusengaphambili ukufika kukaJesu. Yena wabhapathiza uJesu Kristu (Bhagavan), iNdodana kaNkulunkulu. Naye wayenjalo umfundisi kaJesu. Nakuba uJohn wayengumfundisi odumile futhi wabhapathiza abantu abaningi ngaleso sikhathi, wayethobekile. Ngaphambi kwakhe ebhapathiza uJesu, wabonisa ukuthobeka ngokuthi, &ldquo;lowo oza emva kwami unamandla kunami, engizimbadada zakhe ayifanele ukuthwala.&rdquo; Lapho uJesu eza kuye ezobhapathizwa, UJohane wawavuma amandla kaJesu amakhulu omoya, ethi, <strong>&ldquo;Kufanele ningibhapathize. Uza kimi ubhapathizo?&rdquo; </strong>Lawa mazwi ashiwo nguJohane lapho ebona kusengaphambili mayelana nokufika kweNkosi. Leli vesi liqukethe izinkomba kuye a <strong>ugqoko wokwela, ukolweni</strong>, futhi <strong>umlilo ongacimekiyo</strong>. Abanye bangase bazibuze mayelana ukubaluleka kwalezi zakhi kusukela zivela indawo evamile. Uma ukolweni ubuthwa kanye nokwela ugqoko futhi ochotshoziwe futhi ashiswe ngomlilo, kuba isinkwa. Thina bonke babheke ithreyi lokwela, ukolweni, nomlilo phakathi kuhhavini. Abanye bangase babuze ukuthi yini enkulu kangaka ngalo musho. Leli vesi liyingxenye yombhalo wesibili waphezulu, kanye nawo wonke Ivesi elikulo mbhalo lidlulisela ukuhlakanipha kwaphezulu. Uma ibukwa ngokuhlakanipha nokuqondisisa okungokomoya, leli vesi liphethe okukhethekile okusho ukuthi, kugcizelela ubukhulu bukaJesu Kristu.

  Ezikhathini zasendulo, kwakuwumkhuba ukubeka umntwana osanda kuzalwa izingane ethreyini yokwela (ubhasikidi). Ngokushesha nje umntwana kuzalwa, irayisi lalizothelwa ku-withreyi ye-innowing, isicaba, nomntwana walaliswa phezu kwalo njengokwesiko. Lo mkhuba lalidlange kuzo zonke izigaba zomphakathi, kusukela kwabampofu kuya abacebile, kusukela konolwazi kuya kwabangazi. Inkolelo kwakuwukuthi uBrahma, unkulunkulu ongumdali, wayebhala elosana esizayo, okuvame ukubizwa ngokuthi <strong>'ukubhala i-karma' noma 'i-Brahma Vrata,&rsquo; </strong>ebunzini lomntwana phakathi nemizuzu emibili abayichitha esetshenziswe ethreyini yokwela. Kungakhathaleki izinkolelo zomuntu siqu, Amazwi kaJohane, ikakhulukazi endabeni kaJesu, ayiqiniso. UJohane wasebenzisa isifaniso, eqhathanisa nezenzo zikakolweni. Ukolweni, njengento eyisisekelo ukudla, kusekela ukuphila, kodwa kuncipha njengoba sikudla. Esimeni esifanayo vein, uJeevatma uthola i-karma ngendlela yezenzo. Njengathi sibhekana nokuhlangenwe nakho kwe-karmic, 'i-karma' yezenzo zethu iyancipha. Ukubhala kwe-Karma, eyaziwa nangokuthi ukubhala kwesiphongo noma Ukwahlulela kukaNkulunkulu, kubonisa ukuthi i-karma esiyitholayo iyiyo ezilotshwe emizimbeni yethu, futhi okuhlangenwe nakho kwethu ekuphileni kubonisa lokhu umbhalo. UJohn wafanisa izenzo ezithonywe i-karma yethu ukolweni, futhi &lsquo;ithreyi lokwela&rsquo; laliwumfanekiso wekhanda lapho kwakugcinwa khona lezi zincwadi. Njengoba sivuna okusanhlamvu ithreyi lokwela ukulungisa ukudla, ikhanda lethu lichazwa ngokuthi a &lsquo;ithreyi yokwela&rsquo; ngoba igcina i-karma esiyitholayo.

  I-Karma ibhalwe ekhanda lomuntu ngaphandle kwayo ukuqaphela. Ngenxa yalokho, akekho ongabikezela ikusasa. Njalo Umuntu uboshwe yi-karma futhi akanakubalekela ithonya layo. Nakuba bonke abantu bebonakala bengonodoli nje abakhonjwe indlela I-karma, uMoya oNgcwele noma i-Paramatma ihlala ngaphandle ukulawula i-karma. Lapho uNkulunkulu ekhetha ukuba sesimweni somuntu, Udala i-karma Yakhe ngokuyibhala ekhanda Lakhe, kanjalo eza eMhlabeni. Akanayo i-karma yemvelo kodwa ubhala ngamabomu isiphetho Sakhe ukuze adlulisele ukuhlakanipha kubo ubuntu. Ngokuphathelene noNkulunkulu, ophethe Okwakhe karma, uJohn wazwakalisa, <strong>&lsquo;Ithreyi lakhe lokwela likuYakhe isandla.&rsquo; </strong>Akekho omunye emhlabeni onegunya elinjalo karma yabo. Ngokuphambene nokulinganiselwa komuntu, uNkulunkulu ubumba Owakhe i-karma yakhe futhi yehla njengomuntu eMhlabeni ukuze abelane ngayo Ukuhlakanipha kwakhe. Kubalulekile ukuqonda ukuthi ukuphila kukaJesu, kusukela ukuzalwa kuze kube sekufeni, kwaba umphumela we-karma eyakhiwe ngokwakho. Ukuzalwa kwakhe esibayeni esithobekile, ukuhlupheka kwakhe, nokubethelwa kwakhe esiphambanweni zonke zaziyimikhiqizo yesiphetho sakhe azidalele sona. Awekho amandla angaphandle angaletha ukuzalwa Kwakhe noma amhluphe ngaphandle Kwakhe imvume. Wanquma inkambo yokuba khona Kwakhe emhlabeni, ngempela ephethe ithileyi laKhe lokwela.

  Bonke abantu abajwayelekile bathola i-karma entsha ngazo zonke izenzo benza. Isenzo ngasinye eMhlabeni sikhiqiza i-karma entsha. Nje njengoba intuthu ihlobene eduze nomlilo, i-karma ingaphakathi ehambisana nezenzo. Kuwumgomo oyisisekelo wePrakruti ukuthi zonke izenzo zinemiphumela karmic. Lapho uNkulunkulu ithatha umzimba futhi ibonakala njengeNdodana kaNkulunkulu (Bhagavan), njalo isenzo Asenzayo futhi ukhiqiza i-karma entsha. Okuvamile abantu ngabanye abakwazi ukubalekela i-karma ezayo. Nokho, uBhagavan uJesu unomlilo ogcwele wokuhlakanipha (Gnana Shakti), emvumela ukuthi ashise i-karma ngokwemvelo okuvela ezenzweni Zakhe. UKristu, iGnani eliphelele, njalo unamandla aphelele okuhlakanipha. Yonke i-karma idliwe ku-umlilo ongacimi wokuhlakanipha. Izenzo zingaphakathi exhunywe ku-karma, kufana nezinhlamvu ezixhunywe namakhoba. UJohane waveza lokhu ngokuthi, <strong>&lsquo;Utshisa amakhoba ngokungacimekiyo umlilo,&rsquo; </strong>okubonisa indlela uKristu ayiqeda ngayo i-karma ehlobene ngezenzo ngokuhlakanipha Kwakhe. UJesu uyazihlanza ku uthuli lwezibhamu futhi kushise i-karma ehlanganiswe neYakhe izenzo. UJohane wafanisa umzimba kaJesu nesibuya, okufanekisela ukususwa Kwakhe kwethonya lezibhamu, njengesinye uhlanza isibuya. Walinganisa izenzo nokolweni, i-karma evela kulezo zenzo kuya kumakhoba, kanye nomlilo lowo idla i-karma emlilweni ongacimeki. UJohane wahlanganisa ubukhulu bukaJesu ngomusho owodwa, nokho, ngokudabukisayo, asikakuqondi ngokugcwele ukubaluleka kwayo.

  Leli vesi lingase libonakale liqondile, kodwa liqukethe izincazelo ezijulile nezicashile. AmaVangeli amane acebile amavesi anokujula okufanayo. Ngenxa yokuhlakanipha kwami okulinganiselwe, angikaze yanikeza izincazelo zazo zonke izahluko zeBhayibheli ezingu-66 kodwa ziye egxile ezincazelweni zamaVangeli amane abalulekile, kuyaqabukela ukuthinta kwezinye izigaba.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 5,
verse: `<b>(4) IVangeli likaMathewu, isahluko 3, 16 kanye Amavesi 17.</b>`,
meaning: `
<b>
(3:16) Ngokushesha nje lapho uJesu ebhapathizwa, waphuma emanzini. Ngaso leso sikhathi izulu lavuleka, futhi Wabona uMoya kaNkulunkulu wehla njengejuba futhi ehlela kuYe.
<br><br>
(3:17) Kwavela izwi ezulwini, lathi: “Lo uyindodana yami; engimthandayo; naye, ngiyajabula.”
</b>
`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UJohane wabhabhathiza uJesu ngamanzi. Ubhapathizo lubizwa nangokuthi &lsquo;upadesa.&rsquo; NgesiTelugu, elithi &lsquo;upadesa&rsquo; lisho izwe elincikene nalo okwakho. Ngamanye amazwi, kufana nomakhelwane izwe. Umakhelwane uhlala ezweni elingumakhelwane. Nakhu izwe elingumakhelwane ngaphakathi komzimba wakho, futhi ngaphakathi kwalokho umakhelwane izwe lomzimba wakho lihlala umakhelwane. Njalo umuntu unezwe elingumakhelwane kanye nomakhelwane, nakuba lezi zinhlangano azibonakali kumuntu. I-Guru wembula izwe elingumakhelwane elingabonakali ngesikhathi ebhapathizwa noma &lsquo;upadesa.&rsquo; UJohane wabhapathiza uJesu ngamanzi, futhi akukho mlilo ehilelekile kulokhu &lsquo;upadesa.&rsquo; Ngakho-ke, kuphathelene negama futhi akanalo izwe elingumakhelwane nomakhelwane. Noma kunjalo, inqubo &lsquo;yokupadesa&rsquo; kumele yenziwe ngale ndlela. Yingakho uJesu athi kuvesi 3:15, <strong>&ldquo;Makube njalo manje; Ikona okufanele ukuthi senze lokhu ukuze sigcwalise ukulunga konke (ukuhlakanipha).&rdquo;</strong>

  Nakuba uJesu wathola upadesa ngamanzi, Wayekwazi izwe elingumakhelwane ngaphakathi komzimba Wakhe. Wayebabona bobabili umhlaba wangaphandle obonakalayo kanye nezwe elingumakhelwane elingabonakali konke isikhathi. Ngakho-ke, kwakubhekwa njenge-upadesa yangempela, ngisho nakuba upadesa owanikezwa uJohane wawuphathelene negama kuphela. UJesu wabhapathizwa ngemva kokuphila iminyaka engamashumi amathathu njengomuntu ovamile I-Jeevatma. Kusukela ngaleso sikhathi kuqhubeke, Waqala ukukhuluma ngobunkulunkulu izindaba ngendlela yokuhlakanipha hhayi njengeJeevatma, kodwa njenge-Atma. Ukukhombisa ukuthi uJesu, njengo-Atma, wadlulisela iParamatma ukuhlakanipha, u-Atma wehla njengejuba futhi wahlala phezu kwakhe ngokushesha ngemva kokuba Ephumile emanzini elandela owakhe ubhapathizo. Ngaphezu kwalokho, iParamatma (uMoya oNgcwele) wathi: <strong>&ldquo;Le yindodana yami engiyithandayo; naye, ngiyaphila ngijabule.&rdquo; </strong>UMoya oNgcwele (uNkulunkulu) waqinisekisa ukuthi u-Atma wayengowaKhe iNdodana ethandekayo, futhi Yabonisa injabulo Yayo ngeNdodana Yayo ethandekayo, uJesu. Ngalokhu, kuba sobala ukuthi uMoya oNgcwele nguye UBaba, futhi u-Atma yiNdodana eyaziwa ngokuthi uJesu. Konke lokhu kuyakhombisa ukuthi uMoya oNgcwele (Paramatma) awuzange uvele njenge-Atma kodwa esikhundleni salokho waphila kulomhlaba njengomuntu ojwayelekile, ebonakala njenge I-Jeevatma. Angikusho lokhu ukuze ngituse amaKristu noma ngikhuthaze UbuKristu. Ngihlanganyela nawe lokho engikholelwa ukuthi yikho iqiniso eliphelele lokuthi uNkulunkulu wabonakala kanjani emhlabeni.
</div></div>
</span>`,
},

{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 6,
verse: `<b>(5)	IVangeli likaMathewu, isahluko 4, ivesi 10.</b> `,
meaning: ` <b>
(4:10) UJesu wathi kuye: Suka kimi, Sathane; Ngoba kulotshiwe ukuthi: Wokhuleka eNkosini uNkulunkulu wakho, umkhonze kuphela.”
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Igama elithi <strong>&lsquo;Sathane&rsquo; </strong>lethulwa kuleli vesi. Kwe Emavesini andulelayo, uSathane ngezinye izikhathi ubizwa ngokuthi &lsquo;umlingi (shodakudu ngesi-Telugu)' futhi kwezinye izimo 'njengomdeleli (apavadi ngesiTelugu).&rsquo; Igama elithi &ldquo;apavadi&rdquo; lisho umuntu owahlulelayo ngokungalungile futhi uqamba amanga, kuyilapho elithi "shodakudu" lisikisela othile ufuna okubi ngaphakathi kwakho, futhi, uma kukhona, akuveze obala. &lsquo;Apavadi&rsquo; noma &lsquo;shodakudu&rsquo; kubhekiselwa kuye ngokuthi uSathane kulo musho. Kokubili elithi 'apavadi' nelithi 'shodakudu' kungolimi lwesiTelugu, kodwa igama elithi &lsquo;Sathane&rsquo; aliveli eTelugu. Igama elithi &lsquo;Sathane&rsquo; ivela kaningi kulo mbhalo. Emkhakheni womoya imfundo, &lsquo;uSathane&rsquo; usetshenziswa ngokufanayo <strong>&lsquo;noMaya.&rsquo;</strong> Kusukela USathane namaMaya bayafana, izincazelo zamaMaya ingasetshenziswa nakuSathane.

  Embhalweni wokuqala waphezulu, uMaya ubhekisela engqikithini wezibhamu ngaphakathi kwekhanda. Ngokuphathelene noMaya, unkulunkulu wokuqala umbhalo uthi, <strong>&lsquo;Gunamayee mama maaya,&rsquo; </strong>lapho &lsquo;mama elithi maaya&rsquo; lisho ukuthi &lsquo;uMaya ungowami,&rsquo; njengoba kumenyezelwe uNkulunkulu. Ngokusho kulokhu, kuthiwa iMaya iyinhlanganisela yezibhamu. UNkulunkulu ukhona umdali wezinto zonke, kuhlanganise noMaya, kanjalo, uNkulunkulu wamemezela ukuthi uMaya ungowaKhe. UMaya ungowobulili besifazane, kuyilapho uNkulunkulu nemiphefumulo emibili, u-Atma noJeevatma, ngubani abahlukanisiwe noNkulunkulu, bangabesilisa (ingqikithi yabathathu). Konke okunye okudalwe nguNkulunkulu kungathiwa kungokwabesifazane. Ngakho-ke, amaMaya abizwa ngokuthi abesifazane. Akufanele bheka uMaya njengowangaphandle; kunalokho, amaMaya lokho walinga uJesu wayesekhanda laKhe. Ehlala ekhanda lakhe, UMaya walinga uJesu futhi waphikisana naye. Ngokufanayo, izibhamu ngaphakathi kwekhanda lawo wonke umuntu zisebenza njengazo UMaya, elinga njalo futhi ephikisana nabo. Ukulandela Ukubhapathizwa kukaJesu, uMaya waqala ukumlinga kathathu, futhi UJesu waphendula ngokuhlakanipha Kwakhe kuzo zontathu izikhathi.

  UJesu wabeka isibonelo ekuphileni kwaKhe okufanele abantu belingisa. Njalo lapho uMaya evivinya uJesu, wayephendula ngokuthi ukuhlakanipha. Ngakho-ke, wonke umuntu kufanele afunde ukwenza okufanayo. Lapho uSathane ecela uJesu ukuba amkhothamele, uJesu wanika uSathane (Maya) impendulo efanele. UJesu wamphendula uSathane, wathi: <strong>&ldquo;Wokhuleka kuJehova uNkulunkulu wakho, umkhonze Yena yedwa.&rdquo; </strong>UJesu wawasho la mazwi, kodwa abalulekile qonda ukuthi kwakuyi-Atma engaphakathi emzimbeni Wakhe eyayikhuluma lawo mazwi. UMoya oNgcwele, iParamatma, awukwenzi ukuxhumana ngokuqondile nanoma ubani. Kunalokho He wedlulisa Akhe ukuhlakanipha nge-Atma. Ngakho-ke, kufanele siqaphele ukuthi ukuhlakanipha kwanikezwa nguParamatma uqobo, noma kunjalo kuboniswe ngu-Atma ngaphakathi komzimba. Kweyesithathu neyokugcina umbhalo waphezulu, ku 3:7, uNkulunkulu uthi, &ldquo;Ukuhlakanipha kukaNkulunkulu akwaziwa kunoma yimuphi umuntu ngaphandle kukaNkulunkulu.&rdquo; Lokhu kugcizelela ukuthi okuphelele ukuhlakanipha okwembulwa yi-Atma ngaphakathi komzimba kuhanjiswa ngu Paramatma (uNkulunkulu).

  Kunezinkolo eziyishumi nambili ezinkulu emhlabeni namuhla, futhi UbuHindu ihlukile ngoba ayihlanganisi wonke ama-devatas ekhona kwezinye izinkolo. UNkulunkulu wadala kokubili ama-devatas kanye abantu. Nokho, abantu bamshiyile uNkulunkulu futhi waphendukela ekukhulekeleni ama-devatas, ngaphandle kokuqonda ngokugcwele Ukuhlakanipha kukaNkulunkulu. Lokhu kukhetha kugcizelela ukuthi abantu abazange babeke kuqala izimfundiso zikaNkulunkulu njengoba zitholakala emibhalweni yabo. Labo abalahla uNkulunkulu futhi bakhonze ama-devatas bangabonakala njengomuntu ngaphansi kwethonya likaMaya, elalela amazwi kaMaya. Kwe uhlelo olukhulu, empeleni kunezinhlangothi ezimbili: uhlangothi lukaNkulunkulu kanye Engxenyeni kaMaya. Nokho, kwezinye izinkolo, abantu kuphela khonza uNkulunkulu ngaphandle kokuphendukela kwamanye ama-devatas. Ngokuyinhloko ngaphakathi kobuHindu obukhonza ama-devatas amaningi, ngaphandle kwalokho UNkulunkulu, uvame kakhulu. Ngenxa yalokho, kuyacaca ukuthi labo abakhonza ama-devatas bahambisana nabo Ithonya likaMaya.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 7,
verse: ` <b>(6)	IVangeli likaMathewu, isahluko 5, ivesi 10.</b>`,
meaning: `<b>
(5:10) Babusisiwe abashushiswa ngenxa lokulunga (ukuhlakanipha), ngoba umbuso ungowabo we paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Leli vesi lihlanganisa negama elithi &lsquo;ukulunga,&rsquo; kodwa lona kufanele kube <strong>&lsquo;ukuhlakanipha&rsquo; esikhundleni &lsquo;sokulunga.&rsquo; </strong>Encwadini Ngolimi lwesiHebheru, cishe uJesu wasebenzisa igama elithi &lsquo;ukuhlakanipha.&rsquo; Nokho, lapho lihunyushelwa esiNgisini, igama elilingana ne igama lesiHeberu lalingamelwe ngokunembile, futhi &lsquo;Ukulunga&rsquo; kwasetshenziswa esikhundleni &lsquo;sokuhlakanipha.&rsquo; Kubalulekile uku hlukanisa phakathi &lsquo;ukulunga&rsquo; futhi &lsquo;ukuhlakanipha.&rsquo; <strong>Ukulunga nobulungisa imiqondo ehlobene izindaba zomhlaba, kuyilapho ukuhlakanipha ne-dharma kungokwaphezulu imvelo. </strong>Ukulunga nobulungisa kuhlotshaniswa ne-karma, kuyilapho ukuhlakanipha ne-dharma kunamandla okushisa i-karma. Lokhu umehluko ugcizelela ukuthi ukulunga kumayelana indawo yenyama, kuyilapho ukuhlakanipha kungokwesimo saphezulu. Emhlabeni, sibhekana nokulunga, ukonakala, ubulungisa nokungabi nabulungisa. Ukulunga kuholela ku-punya (karma enhle), kanti ukonakala kubangela isono. Ngokufanayo, ubulungisa buveza i-punya, kuyilapho ukungalungi kubangela isono. Uma kubhekwa lo mehluko, kusobala ukuthi ivesi okukhulunywa ngalo kufanele lisebenzise &lsquo;ukuhlakanipha&rsquo; esikhundleni sokuthi &lsquo;ukulunga.&rsquo;

  Labo ababhekana nokushushiswa ngenxa yokuphishekela kwabo ukuhlakanipha nalabo abakhuthazelela ubunzima endleleni yokuhlakanipha bangakwazi kuthiwe ubusisiwe. Lokhu kungenxa yokuthi, ngokuhlupheka kwabo ngenxa yokuhlakanipha, bangafinyelela moksham, okuyinto kusho ukukhululwa ebugqilini be-karma. Lapho umuntu ifinyelela moksham, bayadlula lobukhona bezwe futhi ngena esimeni esihlukile ngaphesheya komhlaba. Umuntu onjalo unjalo kuthiwa ingene eparaloka, okuyisimo esingenawo okuhlangenwe nakho kwezwe. Kubalulekile ukuqaphela ukuthi akuwona wonke umuntu uhambo oluya ekuhlakanipheni luhlanganisa ukushushiswa noma ubudlova. Abanye abantu ngabanye bayozuza ukuhlakanipha futhi bathole i-moksham (paraloka) ngaphandle kwanoma yiziphi izithiyo.
</dv></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 8,
verse: ` <b>(7)	IVangeli likaMathewu, isahluko 5, ivesi 17.</b> `,
meaning: ` <b>
(5:17) Ningacabangi ukuthi ngize ukuchitha uMthetho (Dharma Shastra) noma abaProfethi; angizange ngize aziqede kodwa azigcwalise.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Akekho ongalahla i-Dharma Shastra. Ngeke kube njalo balahliwe. Selokhu kwaba khona kusukela ekuseni indalo, enabaprofethi nabafundisi abaningi abayidluliselayo ukuhlakanipha. Lapho iParamatma (uMuntu Ophakeme) yehlela ku Umhlaba njengoBhagavan, Akagcini nje ngokwenza i-Dharma Shastra kodwa futhi yenza izimiso zayo ziqondakale kubo bonke. Nokho, lapho uBhagavan, njengeNdodana kaNkulunkulu, embula futhi enza ama-dharma achazwe ku-Dharma Shastra, angase angaveli njenge-dharma kwabanye abantu. Lokhu kwehluka kuvela ku iqiniso lokuthi abanye abantu bakholelwa ngephutha ukuthi i-adharma injalo i-dharmas. Ngenxa yalokho, i-dharmas yeqiniso ingase ibonakale sengathi adharmas lapho uBhagavan edlulisela izimfundiso Zakhe. Kungakho UJesu wathi evesini elingenhla, <strong>&lsquo;Ningacabangi ukuthi nginakho nize ukuzoqeda uMthetho (i-Dharma Shastra) kodwa ukuwugcwalisa.&rsquo;</strong>

  Abantu emhlabeni bawele ethonyeni le Maya (uSathane) futhi baye bakholelwa ukuthi ama-adharma anjalo i-dharmas. Ngenxa yalokho, bahlanganyela ezinhlotsheni ezihlukahlukene ukukhonza, becabanga ukuthi ukuzinikela okuqotho. UMaya uqondise kabusha ukuqonda kwabantu ngoNkulunkulu kuye uqobo, okuholela kubo kholwa ukuthi bathuthukela kuNkulunkulu. Kule nqubo, it ubaqondisa ukuthi benze ama-adharma kune-dharmas, ebaholela ngendlela ephambene noNkulunkulu. Ku isimo esinjalo, ngisho nalapho uNkulunkulu ethatha isimo somuntu futhi imikhuba ye-dharma yeqiniso, lezo zenzo zingase zivele ezidukisayo kulabo abathonywe uMaya. Abantu kungenzeka ngephutha bacabange ukuthi abakwenzayo kuyi-dharma yeqiniso nokuthi bangamakholwa oqobo. Bangase basole uNkulunkulu ofike njengomuntu wokulandela ama-adharma no-May ngisho nokuMbiza ngokuthi ungumhlambazi. Lapho uNkulunkulu wangempela efika Umhlaba njengoJesu, lokho Akusho nakwenza kwakunjalo ngempela i-dharmas. Kodwa-ke, lawa ma-dharma abonakala ephikisana ne- izimfundiso zezazi, ama-swamis, nama-gurus. Lokhu kungafani kungani abapristi abakhulu, nababhali, noKayafase baphikisa futhi wakhuza uJesu. Ngakho, uJesu uyagcizelela evesini elithi, <strong>&ldquo;Iangizanga ukuzokuqeda, kodwa ukugcwalisa.&rdquo;</strong>
</div></div>
</span>  `
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 1,
pageNumber: 9,
verse: ` <b>(8)	IVangeli likaMathewu, isahluko 5, ivesi 18.</b>`,
meaning: `<b>(5:18) Ngokuba ngiqinisile ngithi kini: Kuze kudlule izulu nomhlaba, hhayi uhlamvu oluncane kunazo zonke, hhayi nokushaywa okuncane kwepeni, uzonyamalala nganoma iyiphi indlela eMthethweni (Dharma Shastra) kuze kube yilapho konke sekufeziwe.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuleli vesi, igama elithi <strong>'Dharma Shastra' </strong>liyingqayizivele, futhi abanye bangase bazibuze ukuthi lisho ukuthini. Ukuphendula imibuzo enjalo, kubalulekile ukuqonda umqondo we-shastra (isayensi), izinhlobo ezahlukahlukene zesayensi, kanye nokuhluka kweDharma Shastra ngaphakathi emkhakheni wesayensi. Okokuqala, uma siqonda incazelo yegama elithi &lsquo;shastra&rsquo;, sizoliqonda elithi shastra ngezinga elithile. Igama elithi <strong>&lsquo;shastra&rsquo; </strong>lisuselwa olimini lwesiTelugu igama elithi <strong>&lsquo;shasanam,&rsquo; </strong>elidlulisela umqondo wokuthi <strong>&lsquo;kumelwe kube kuphoqelelwe.&rsquo;</strong> Ngenxa yalokho, elithi &lsquo;shastra&rsquo; lisho <strong>&lsquo;noma yini eshiwoyo kumelwe kwenzeke.&rsquo;</strong> Ngaphezu kwalokho, igama elithi <strong>&lsquo;shapam</strong>&rsquo; liwukuthi lisuselwa kwelithi &lsquo;shastra,&rsquo; futhi lisho <strong>&lsquo;kufanele kube abulawe.&rsquo; </strong>Ngakho, womathathu la magama <strong>- shasanam&rsquo; (isimiso), I-&lsquo;shapam&rsquo; (isiqalekiso), nethi &lsquo;shastra&rsquo; (isayensi) </strong>ihlanganyela okufanayo incazelo eyisisekelo. I-Shastra ijwayele ukuhlukaniswa kwabayisithupha izindawo ezihlukene zokufunda. Abanye bangase baphikise ngokuthi isayensi eziyisithupha zingahlukaniswa zibe izinhlobo ezimbili, kuyilapho ezinye ziphakamisa ezintathu izigaba. Ngokuvamile, ama-shastras angabhekwa njengamabili izinhlobo. Ngamanye amazwi, singachaza ama-shastra njengokuphindwe kathathu. Uma sizihlukanisa njengezinhlobo ezimbili, isethi eyodwa ihlobene nezwe izindaba, kanti enye iphathelene nezindaba eziphathelene nazo I-Paramatma (uMuntu Ophakeme). Kuzigaba ezintathu, ama-shastra amane ahlotshaniswa nokukhathazeka kwezwe, omunye ulandisa kuphela kuParamatma, kanti okunye kuwela esigabeni sokuba khona ihlobene kancane neParamatma futhi ihlobene kancane nezwe izindaba.

  Ama-shastra ayisithupha ami kanje: 1) Izibalo, 2) I-Astronomy, 3) I-Chemistry, 4) I-Physics, 5) I-Astrology, kanye 6) Brahma Vidya. Kulezi, ezine zokuqala zikhathazekile izindaba zomhlaba, kuyilapho eyesihlanu, Astrology, has ukuxhumana kokubili ukukhathazeka kwezwe kanye nokwaphezulu. Kungenjalo, uma Astrology kubhekwa futhi phakathi kwesigaba samashastras asemhlabeni, amashastra amahlanu okuqala ahlukaniswa njengawezwe, kanti uBrahma Vidya I-Shastra isalokhu iyisayensi yodwa ehlobene ne-Divine. Lapho ziyisayensi eyisithupha isiyonke, kanti uBrahma Vidya nguyena ohamba phambili okubalulekile. Yingakho yaziwa ngokuthi i-Brahma Vidya shastra, nge &lsquo;Brahma&rsquo; ekhombisa ubukhulu. 'Brahma' akulona igama, kodwa igama elisetshenziselwa ukuchaza isimo sikaNkulunkulu esikhulu kunazo zonke nesiphakeme kakhulu. <strong>Njengoba kuyisayensi enikelwe ekuqondeni uNkulunkulu, kunjalo iqanjwe ngokufanelekile ngokuthi iBrahma Vidya shastra. </strong>Kulokho I-Brahma Vidya iphathelene nesayensi kaNkulunkulu, iphethe igama elithi 'vidya'. Ezinye isayensi yezwe emihlanu, okungukuthi Izibalo, i-Astronomy, iKhemistry, iPhysics, ne-Astrology, ntula isijobelelo esithi <strong>&lsquo;vidya&rsquo;</strong> emagameni abo. Igama elithi 'vidya' lisho kubekelwe isayensi ehlobene noNkulunkulu. Abanye bangase bazibuze mayelana nesizathu salo mehluko, futhi impendulo ithi uyalandela.

  Isayensi ingahlukaniswa ngezinhlobo ezimbili: eziphathelene nomhlaba kanye ne-Paramatma ehlobene. Isayensi yezinto ezinhlanu ingaba ngokugcwele kuqondwe yinoma ngubani. Nokho, uBrahma Vidya, okukhulu kunakho konke, okwembula i-dharmas kaNkulunkulu, yiyona yodwa lokho kufaka phakathi igama elithi 'vidya' egameni layo, liyithola isihloko sokuthi i-Vidya shastra enkulu kakhulu. Igama elithi &lsquo;vidya&rsquo; (imfundo) livela emsindweni othi <strong>&lsquo;vith,&rsquo; </strong>okusho ukwazi. Vidya kusho ulwazi okufanele luzuzwe. A 'vidyarthi' (umfundi) ngumuntu ofuna ulwazi, olucelayo into abangakabi nayo futhi beyizuza kulabo abanolwazi. Abafundi bathola okubalulekile imfundo kothisha abanolwazi. U-Vidya ubhekisela ku ulwazi olungaziwa kodwa olungaqondwa ngokugcwele. Kungendlela efanayo, akekho ongathi uqonda ngokugcwele isihloko sikaNkulunkulu. Akekho ongagomela ngokuthi banakho okuphelele ulwazi ngoNkulunkulu. Ukufunda ngoNkulunkulu kuwumsebenzi wokuphila kwakho konke, futhi abantu bayaqhubeka nokuthola ukuqonda kukho konke ukuphila kwabo. Akekho ongasho ukuthi lo mkhawulo futhi bona wazi konke. Abantu bayohlale befunda mayelana indaba kaNkulunkulu, kodwa abasoze bazi ngokugcwele. Ngakho-ke, isayensi kaNkulunkulu ihlale ibizwa ngokuthi i-Vidya shastra, futhi kunjalo ngokungapheli Brahma Vidya shastra. Ngokuphambene, umuntu angakwazi ngokugcwele bamba ezinye isayensi ezinhlanu, ungashiyi lutho eyaziwayo. Ngenxa yalokho, igama elithi &lsquo;vidya&rsquo; alifakwa emagameni abo.

  Lowo onolwazi oluphelele ngoNkulunkulu (UBrahma) angabelana nabanye ngalokhu kuhlakanipha. Uma umuntu akanalo ulwazi ngokuhlakanipha kukaNkulunkulu, ubani omunye ongaqiniseka ukuyidlulisela? Impendulo yethu kulo mbuzo ithi: UNkulunkulu kuphela yena uzazi ngokugcwele ukuhlakanipha Kwakhe. Ngakho, uNkulunkulu kufanele mathupha adlulisele ukuhlakanipha Kwakhe. Nokho, uNkulunkulu akakwenzi ukuxhumana ngokuqondile nanoma ubani. Kunalokho, uNkulunkulu, kuyilapho kungenjalo ebonakala njengoNkulunkulu, enikeza ukuhlakanipha Kwakhe ngakho ukuthatha isimo se Indoda. Kubalulekile ukuqaphela ukuthi ngenkathi uNkulunkulu engase angene a isimo somuntu, Akayena umuntu. Ngomfanekiso ka-umuntu, uNkulunkulu ukwambulile ukuhlakanipha Kwakhe konke, ekuveza njengesayensi enemigomo nezimiso ezimisiwe. Ngakho-ke, lokho uNkulunkulu akwambulile kubhekiselwa kukho ngokuthi iBrahma Vidya shastra. UNkulunkulu Uqobo Lwakhe wakhuluma ngeBrahma Vidya Shastra, futhi kuyisibopho esintwini ukuthi sikuqonde. Lapho umuntu ezuza ukuqonda okuphelele kweBrahma Vidya, bakhululiwe ku-karma futhi bangahlangana noNkulunkulu. Ngakho-ke, abantu kufanele baphikelele ekuzuzeni ulwazi yesayensi kaNkulunkulu baze bathole i-moksham (inkululeko). Ngakho-ke, ibizwa ngokufanelekile ngokuthi iBrahma Vidya, njengoba iphakeme kakhulu uhlobo lwemfundo emhlabeni.

  I-dharmas kaNkulunkulu ivezwe kuBrahma Vidya shastra, yingakho ibizwa ngokuthi i-Dharma Shastra in imibhalo engcwele. UNkulunkulu ekuqaleni wembula shastra Yakhe nge izimiso ekuqaleni kwendalo. Ngemva kwalokho, ezintathu imibhalo engcwele yavela ngezikhathi ezihlukene futhi ehlukene izindawo. Le mibhalo emithathu yaphezulu ingathathwa njenge ezintathu Dharma Shastras, wonke aqukethe kuphela i-dharmas. Ngenxa yalokho, bobathathu abakwaDharma Shastra bahlanganyela izimiso ezifanayo futhi zisekelwe ku-dharmas kaNkulunkulu. Kunjalo babumbene ekubambeleleni kwabo kuBrahma Vidya futhi bafundise kaNkulunkulu i-dharmas. Ngenxa yalokho, ama-Dharma Shastra amathathu ngokuhlanganyela qinisanani futhi ningaphikisani okunye. <strong>Umbhalo wokuqala waphezulu waziwa ngokuthi iBhagavad Gita, umbhalo wesibili waphezulu ubizwa ngokuthi iBhayibheli, futhi umbhalo waphezulu wesithathu (umbhalo wokugcina waphezulu) uthi ebizwa ngeQuran.</strong> Ngenkathi le mibhalo emithathu iphethe okuhlukile amagama, adlulisa ama-dharma kaNkulunkulu ofanayo.

  Kulandela uBrahma Vidya shastra, abaprofethi abathathu yadlulisela ukuhlakanipha kukaNkulunkulu, okwathi kamuva kwaba kuthathu imibhalo engcwele yaphezulu. Nakuba lezi ezintathu zaphezulu imibhalo ihlukene, yonke ichaza ngekaNkulunkulu oyedwa dharmas ngemibono emithathu ehlukene. Kusukela ku-dharmas okwethulwa ngaphakathi kwale mibhalo kusekelwe isayensi, bona zizofezeka njengoba kushiwo, njengoba kuqinisekisiwe ivesi <strong>&lsquo;kuze kunyamalale izulu nomhlaba.&rsquo; </strong>Izwe elingaphandle Isibhakabhaka noMhlaba kungunaphakade, njengoba uNkulunkulu ekwenzile. Nokho, ozakwabo abangabonakali boMhlaba nesibhakabhaka ngaphakathi komuntu umzimba uyabhubha ngokuphelele. Ngakho, inkulumo ethi &lsquo;kuze kube isibhakabhaka futhi umhlaba uyanyamalala&rsquo; kumelwe uqondwe ngokuthi &lsquo;kuze kube umzimba womuntu iyafa (iyanyamalala).&rsquo; Lapho umuntu efuna ukuhlakanipha kukaNkulunkulu, kufanele babambelele kuyo yonke imiyalo kaNkulunkulu ( dharmas ). Ngaphandle kokwenza i-dharma kaNkulunkulu ngenhliziyo yonke, umuntu angeke uthole i-paraloka. Njengoba kushiwo ku-Dharma Shastra, moksham (inkululeko) ingafinyelelwa kuphela uma wonke ama-dharma enawo kugcwalisekile. Ngisho noma umuntu engazilolongi ngisho nokuncane lokho okushiwo ku-Dharma Shastra, ngeke bakufinyelele i-moksham. Esikhundleni sokumane usikisele, <strong>&lsquo;ngisho noma into encane ayilandelwa kuma-dharma anqunyiwe,&rsquo;</strong> kunjalo kuchazwe <strong>ngokuthi &lsquo;hhayi uhlamvu oluncane kunawo wonke, hhayi nokuncane uhlamvu lwe ipeni.&rsquo;</strong> Ngakho-ke, kubalulekile ukulandela zonke izici ze UDharma Shastra ngaphandle kokushiya noma yini enganakiwe. Ikona kubalulekile ukwazi ukuthi uhlamvu kanye unhlangothi ipeni okukhulunywa ngakho akuhlobene nokulotshwa encwadini.
</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 10,
verse: ` <b>(9)	IVangeli likaMathewu, isahluko 5, ivesi 19.</b>`,
meaning: `<b>
(5:19) Ngakho-ke, noma ubani obeka eceleni omunye we emincane yale miyalo, afundise abanye kanjalo uyakuthiwa omncinyane embusweni we paraloka, kodwa loba ngubani ozenzayo lezifundisayo imiyalo iyothiwa mikhulu embusweni ka i-paraloka. </b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ngenkathi kukhona ama-dharmas ayisisekelo achazwe kuwo i-Dharma Shastra, eziningi zixhumene nazo. I-dharmas kaNkulunkulu nayo ibizwa ngokuthi &lt;strong&gt;imiyalo&lt;/strong&gt;. Lapho ngokuyinhloko ziyimithetho &lt;strong&gt;emibili&lt;/strong&gt; ebaluleke kakhulu emiyalweni kaNkulunkulu, kodwa abanye abaningi baxhumene nabo. Noma ubani weqa ngisho nokuncane kakhulu kwalokhu okuxhumene imiyalo nokudlulisela izimfundiso ezinjalo wenza ngokumelene ukulunga. Umuntu akufanele eqe noma iyiphi yemithetho dharmas, kungakhathaliseki ukuthi mancane noma abalulekile, njengoba kuyaliwe ngoNkulunkulu. Yonke i-dharma eyodwa, kungakhathaliseki ukuthi incane kangakanani, kufanele ibe kwenziwa ngokuzimisela ngaphandle kokukhetha. Nokho, abanye abantu, esikhundleni sokunamathela ngisho nama-dharma amancane kakhulu, baphambukile endleleni ye-dharmas. Abanayo nje kuphela zamukela ama-adharma kodwa futhi zasakaza izimfundiso ezinjalo. Noma kunjalo bethathwa njengamaGuru ngumphakathi, behlulekile ukuqonda kahle imiyalo kaNkulunkulu. Ngokudabukisayo, baye baqonda kabi i-dharma kaNkulunkulu njenge-adharma futhi baye benza babe abasekeli be-adharma. Badukisa abantu bedlulisela izimfundiso ezinjalo, begomela ngokuthi bayafundisa ukuhlakanipha kweqiniso nemiyalo yeqiniso kaNkulunkulu. Ngisho nakuba zingabhekwa njengamaGugu amakhulu emehlweni o emhlabeni, emehlweni kaNkulunkulu, bathathwa njengabancane.

  Labo ababamba i-dharmas banikeze ngokufanelekile njengama-dharmas kulabo abanentshisekelo, noma ngabe bengaziwa kakhulu Gurus. Abanye abantu bahumusha kabi ama-dharma kaNkulunkulu ngokuthi ama-adharma futhi, ngokulandelayo, afundise lezi adharma. Ngenxa yalokho, labo abafundisa ama-adharma abakwazi ukuthola umbuso we i-paraloka. Abangazi abasoze bawuthola umbuso we paraloka, njengoba ihlala ivaliwe unomphela kubo, deeming abangafaneleki. Ngisho noma umuntu oqonda okukaNkulunkulu imiyalo evela emibhalweni ayithathwa njengeGuru, bazothola indawo ebalulekile ku-paraloka lapho befundisa ama-dharma abawaziyo. Umuntu onjalo akaziwa nje ngokuthi umlandeli we-dharmas kodwa futhi uhlonipha kakhulu emehlweni kaNkulunkulu. Umlandeli we-dharma weqiniso yilowo odlulisela ngokucophelela encane ye-dharma kaNkulunkulu ngemininingwane enkulu.
</div></div>

</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 1,
pageNumber: 11,
verse: `<b>(10)	IVangeli likaMathewu, isahluko 5, 20 ivesi.</b> `,
meaning: ` <b>
      (5:20) Ngoba ngithi kini ngaphandle kokuba ukulunga kwenu udlula owabaFarisi nabafundisi umthetho, aniyikungena embusweni ka i-paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ezweni, baningi abaFarisi, abazinikele, kanye othisha. Kubalulekile ukuba nokuhlakanipha okujule kakhudlwana kunabo. UNkulunkulu ushilo ukuthi labo abadla kancane ukuhlakanipha kunabaFarisi, abazinikele, nabafundisi abanakungena i-paraloka. Njengoba ivesi lisikisela, uma unezinto eziningi ukuhlakanipha kunamaSwami nabaFarisi, abahlanganyela kuma-yajnas (imihlatshelo yesiko) futhi wenze ngokuphambene nalokho uNkulunkulu akuyalile, uzothola kalula i-paraloka.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 12,
verse: `<b>(11)	IVangeli likaMathewu, isahluko 5, 28 ivesi.</b> `,
meaning: `<b>
(5:28) Kodwa ngiyanitshela ukuthi noma ubani obheka owesifazane ngokukhanuka usephingile naye phakathi inhliziyo yakhe. </b>     `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Izenzo zomuntu zingahlukaniswa zibe izingxenye ezimbili ezihlukene approaches: izenzo zangaphandle ezibonakalayo nezingaphakathi izenzo ezenzeka ngaphakathi kwemicabango nemizwa yomuntu. Kokubili yalezi zilinganiso zikhona kuwo wonke umuntu. Kokunye indlela, umuntu uhlanganyela ezenzweni ezihlobene nezibhamu zabo ngemicabango nemizwelo yangaphakathi. Ngenye indlela, izenzo ezifanayo zenziwa ngokusebenzisana kwe izibhamu kanye nomzimba wenyama. Imiphumela yalokhu izenzo ziphumela ku-punya (karma enhle) noma isono (i-karma embi). Kubalulekile ukuqaphela ukuthi kunezinhlobo ezimbili zezenzo: ngokomzimba (okubonakalayo) nokungezona ngokomzimba (okungabonakali<strong>). Lapho uhlola isimilo somuntu, umphakathi uvame ukuncika kubo izenzo ezibonakalayo ezibonakalayo ukuze kutholwe ukuthi ngabe kunjalo zibhekwa njengezinhle noma ezimbi. Nokho, kuba ngaphezulu inselele ukwenza izahlulelo ezinjalo lapho umuntu izenzo zingaphakathi, ezibandakanya imicabango nemizwa, njengoba azibonakali kalula. </strong>Kunzima ukuthola kungakhathaliseki ukuthi umuntu muhle noma mubi lapho thina singazi ngabo izenzo.

  I-<strong>aham</strong> yomuntu (i-ego noma umuzwa wokuzicabangela), noma ngabe abakhona ezenzweni zabo zomzimba noma emicabangweni engeyona engokwenyama, idlala indima ebalulekile esizukulwaneni se-karma. Isono noma i-punya I-karma itholwa ngumuntu ngenxa yokuba khona kwe-aham emzimbeni wabo. Ngenkathi izitho zangaphandle zomzimba zikhona ebandakanyeka ezenzweni zomzimba, kungukusebenza kwe-aham lokho ithonya umphumela we-karmic walezo zenzo. Noma ngabe umuntu akazibandakanyi ngokoqobo esenzweni, i-aham yabo, itholakala eduze kwe-buddhi (ingqondo), inamathisela i-karma ngokusekelwe ku- lokho u-aham akuzwayo emicabangweni ye-buddhi lapho ukucatshangelwa kwenziwa ngethonya lezibhamu. Uma i-aham ayisebenzi, umuntu ngeke aqongelele i-karma, noma ngabe bahileleke emsebenzini womzimba noma ongewona owomzimba. Lo mqondo kubonakala embhalweni wokuqala waphezulu, ikakhulukazi kweye-17 ivesi le-Moksha Sanyasa Yoga, elithi, <strong>&ldquo;Nakuba umuntu uqeda zonke izidalwa emhlabeni ngaphandle ubukhona buka aham emizweni yabo, abayikuzilethela isono ngesenzo sokubulala, futhi ngeke babhekwe njenge umbulali.&rdquo; </strong>Lokhu kugcizelela ukubaluleka kwe-aham ukunquma imiphumela yokuziphatha yezenzo zomuntu. uJesu futhi wadlulisa umyalezo ofanayo lapho Ethi, <strong>&lsquo;Nizozifaka isono ngemicabango yakho ngenxa aham, ngisho noma wena abasenzanga isenzo ngokomzimba.&rsquo;</strong> Lokhu kwembula ubunye ezimfundisweni zombili zokuqala nezesibili zaphezulu imibhalo, kanye nokuvumelana kokuhlakanipha okunikezwayo. Izenzo zomuntu ezenziwa ngaphandle kwe-aham zibhekwa njenge uma zingenziwanga, kanye nemicabango ebandakanya u-aham kuthathwe sengathi isenzo senziwe. Ngakho, ukuba khona kwe i-aham ngaphakathi komzimba ithonya ukuqoqwa kwe-punya futhi isono ngaseJeevatma. Ngenxa yalokho, kwashiwo kusukela ekuqaleni kwendalo ukuthi &lsquo;ukwenza izenzo ngaphandle kuka-aham iKarma Yogam,&rsquo; umqondo uphinde waphindwa kukho kokubili kokuqala kanye imibhalo yaphezulu yesibili.
</div></div>
</span>`
    },
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 13,
verse: `<b>(12)	IVangeli likaMathewu, isahluko 5, 29 kanye 30 amavesi.</b>`,
meaning: ` <b>
(5:29) Uma iso lakho lokunene likukhubekisa, likhiphe; awukhiphe awulahle. Kungcono kuwe ukulahlekelwa eyodwa ingxenye yomzimba wakho kunokuba wonke umzimba wakho ube uphonswe esihogweni.
<br><br>
(5:30) Futhi uma isandla sakho sokunene sikukhubekisa e, yinqume, uyilahle. Kungcono ukuthi ulahlekelwe sinye somzimba wakho kunokuba wonke umzimba wakho uhambe esihogweni.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ivesi 29 ikhuluma <strong>&lsquo;ngeso,&rsquo; </strong>futhi ivesi 30 ikhuluma <strong>&lsquo;ngesandla.&rsquo; </strong>Lapho ihlolisisa, iba ngokusobala ukuthi umzimba womuntu wakhiwe izinhlobo ezimbili zomzimba izingxenye: ezibonakalayo noma ezibonakalayo nezingezona ezomzimba noma ezicashile. Bangu isamba sezitho zomzimba eziyishumi (10) neziyishumi nanhlanu (15) ezicashile izingxenye zomzimba, okuletha isibalo esihlanganisiwe sibe ngu-25, kuhlanganisa I-Jeevatma. Isitho somzimba ngasinye sihambisana nomsebenzi ohlukile emzimbeni. Umzimba womuntu unama-gnanendriya amahlanu (izitho zezinzwa) kanye ne-karmendriyas emihlanu (izitho zezimoto). Lezi amasethi amabili wezitho ngokuhlanganyela anika amandla izenzo zomzimba. gnanendriyas, okuhlanganisa iso, indlebe, ikhala, ulimi, kanye isikhumba, sisebenza njengama-receptors adlulisela ulwazi lwangaphandle ku amakhono angaphakathi. Ngokufanayo, kukhona karmendriyas ezinhlanu-izandla, imilenze, umlomo, ididi nesitho socansi. Ingqondo (ingqondo) bese idlulisela lolu lwazi kusuka ezinzwa kuya kubhuddhi (ingqondo). Ngenkathi ama-gnanendriyas esebenza ukudlulisa ngaphandle ulwazi oluvela endaweni ezungezile lungene kumakhono angaphakathi, i-buddhi yangaphakathi idlulisa iziyalezo ngokusebenzisa imana ku ama-karmendriyas, okuthi kamuva enze izenzo njenge iqondiswe ngubuddhi.

  Abantu benza izenzo ezididiyelwe ngokusebenzisana kwe gnanendriyas (izitho zezinzwa) kanye karmendriyas (izitho zomzimba). Ngokuphawulekayo, <strong>iso</strong> phakathi gnanendriyas futhi <strong>isandla</strong> phakathi kwe-karmendriyas sibambe ukubaluleka okuthile, yingakho kukhulunywa ngazo zombili kula mavesi. Noma ngabe i i-buddhi (ingqondo) ayiqondisi i-karmendriyas ukuthi iyenze umsebenzi, isono sisengabekwa kumuntu ngokusekelwe ku imicabango ye-buddhi lapho i-aham (ego), ixhunywe eduze i-buddhi, iyasebenza. Lokhu kugcizelela indima ebalulekile ye-iso esonweni esingase sibe khona. Ngokwesibonelo, lapho umuntu egqolozele a owesifazane nemicabango ekhanukelayo, bangase bazitholele isono ngenxa ithonya le-aham, ngisho noma bengalimazanga ngokomzimba omunye umuntu. Iso, ngale ndlela, lidala ukuthi kube nokwenzeka ukuhlanganisa isono kumuntu ngezenzo okungenzeka zingenzeki endaweni yenyama. Ngakho-ke, leli vesi liseluleka ukuba &lsquo;sibambe khipha iso, ulilahle.&rsquo; Nokho, kubalulekile ukuphawula ukuthi lokhu akufanele kuthathwe ngokoqobo, njengokususa ngokomzimba iso lomuntu akuyona incazelo ehlosiwe yevesi. Ivesi ikhuluma ngokuqondile &lsquo;ngeso lakho lesokudla,&rsquo; kodwa kubalulekile baqonde ukuthi kokubili iso lesokudla nesokunxele bayakwazi okuholela emiphumeleni efanayo. Isono singavela kuwo womabili amehlo. Ukukhulunywa ngeso langakwesokudla kukodwa kukhuthaza ukucabanga mayelana isizathu salo mehluko.
</div></div>

<div class="container" style="color:black;font-size: 11px;">
          <img src="assets/img/gnanendriyalu.png"  style="width:100%;">
          <div class="io-jeeva">
            IJeeva
          </div>
          <div class="io-mind">
            Inqondo
          </div>
          <div class="io-chittam">
            IChittam
          </div>
          <div class="io-intellect">
            Ubuhlakani
          </div>
          <div class="io-ego">
            I-ego
          </div>
          <div class="so-eye">
            Iso
          </div>
          <div class="so-nose">
            Ikhala
          </div>
          <div class="so-ear">
            Indlebe
          </div>
          <div class="so-tongue">
            Ulimi
          </div>
          <div class="so-skin">
            Isikhumba
          </div>
          <div class="ao-hands">
            Izandla
          </div>
          <div class="ao-legs">
            Imilenze
          </div>
          <div class="ao-mouth">
            Umlomo
          </div>
          <div class="ao-anus">
             I-Anus
          </div>
          <div class="ao-sex-organ">
            Isitho Socansi
          </div>
        </div>
Umzimba womuntu ngokwemvelo ubonisa umehluko phakathi izinhlangothi zayo zokunene nesobunxele, ngokuvamile ezihlotshaniswa namandla kanye ubuthakathaka. Evesini elishiwo, zombili izingxenye zomzimba ezingakwesokudla, okungukuthi iso lesokudla nesandla sokudla, kucacisiwe. Okunye Iphuzu elibalulekile okufanele licatshangelwe kuleli vesi yinkulumo ethi<strong>, &ldquo;Kunjalo kungcono kuwe ukuba ulahlekelwe yisitho esisodwa somzimba wakho kunokuba ulahlekelwe yisitho sakho umzimba wonke uphonswe esihogweni.&rdquo;</strong> Kubalulekile ukuqaphela ukuthi alikho iso noma isandla, njengezitho zomzimba ezingaphandle imithombo eqondile yesono. Umshayeli oyinhloko wesono yi ubukhona be-aham (ego) ngaphakathi komzimba. Lo mbono uyahambisana ngezimfundiso ezitholakala kokubili kweyaphezulu yokuqala neyesibili imibhalo. Ngakho-ke, kuba sobala ukuthi umzimba wangaphandle izingxenye azikho ukubandakanyeka okuqondile ekuthengeni noma isipiliyoni sesono<strong>. Kuwumuzwa we-aham ngaphakathi emzimbeni lokho kuletha isono. I-Jeeva ehlala emzimbeni iyahlangabezana isono.</strong> Isibopho sokuthola i-karma silele umuzwa we-aham, futhi kuwumsebenzi we-Jeeva ukuzwa imiphumela ye-karma. Ngakho-ke, iso langaphandle (gnanendriya) kanye nesandla (karmendriya) zisebenza ngaphandle kokunaka kwe karma.

Abanye bangase bazibuze ukuthi kungani uJesu eluleka ngokukhipha imifula iso nokusika isandla uma zingahlobene ne-karma. Impendulo yethu ukuthi lapho iso lidlulisela ngaphandle ulwazi, lufinyelela ku-buddhi (ubuhlakani). Kamuva, i-buddhi icubungula lolu lwazi ngokuhambisana ne-zibhamu. Nokho, uma i-<strong>aham (ego) icindezelwe futhi ukuhlukana </strong>nalezi zinzwa, kuvimbela isono futhi i-punya ekuvezeni ezimpumeni ukuthi amaBuddha acubungula noma ekubonweni okubonwa ngeso. Ngokuhlukanisa ingaphakathi aham kusukela ulwazi olunikezwa iso, umuntu ukuvimbela ngempumelelo isono esihambisana neso, ngokufana ekhipha iso uqobo. Ngokufanayo, lapho i-aham ingekho exhunywe kulokho okuzwayo, kuba sengathi indlebe isusiwe. Kunjalo kubalulekile ukuqaphela ukuthi isono ne-punya akuveli kuphela emehlweni kodwa nakweminye imizwa emine. Kunikezwe indima ebalulekile yeso phakathi kwama-gnanendriyas kanye nemvelo ukubusa kweso langakwesokudla ekuboneni okubonakalayo, uJesu wagcizelela &lsquo;ukukhipha iso lokunene&rsquo; evesini. Ngenkathi amavesi ingase ibonakale iqondile, ukubaluleka kwayo okucashile kufanele kuqondwe.

Ngokufanayo, ukukhulunywa kwesandla sokunene phakathi kwe I-karmendriyas inokubaluleka. I-Karma ayigcini nje ziphuma esandleni sokudla kodwa nasezenzweni eyenziwa ezinye karmendriyas. I-Karma yenzeka noma nini ama-gnanendriyas awahlanganyeli emisebenzini yomzimba futhi ekhiqizwa ngokusebenza kwe-karmendriyas. Nini ebhekisela kuma-gnanendriya amahlanu, sihlanganisa amehlo amabili njenge into eyodwa, njengoba izindlebe zombili zibalwa njengento eyodwa. Nakuba lapho ngamakhala amabili, aphathwa njengekhala elilodwa ngokuhlangene. izingxenye ezisele zihlanganisa isikhumba nolimi. Ngokufanayo, ku-karmendriyas, izandla ezimbili zibhekwa njengokukodwa, futhi okufanayo kusebenza emilenzeni emibili. Okusele ezintathu umlomo, indunu, futhi isitho socansi futhi kukhona hayi ngababili. Uma kubhekwa iso langakwesokudla nesandla sokudla ngokuqhathaniswa okubusa kakhulu kulezi zitho ezibhanqiwe, ivesi liqokomisa iso lokudla nesandla sokudla. Iso langakwesokudla ibona kahle kakhulu, futhi isandla sokudla sishintshashintsha kakhudlwana ekwenzeni imisebenzi. Ngencazelo ecashile yevesi, uJesu wasitshela ukuthi <strong>sicindezele u-aham ukuze sivimbele isono esivela ukubona iso kanye nezenzo zesandla.</strong> Nokho, kunjalo kubalulekile ukuqonda ukuthi ukususa iso lesokudla noma isandla sokunene kwenza hayi ukumisa ukungena kwe-karma, njengoba nezinye izitho zomzimba zingakwazi yenza i-karma. Leli vesi ligcizelela umqondo wokuthi aham ungumthombo oyisisekelo wesono, egcizelela isidingo yilawule. Izitho zomzimba azidali isono, futhi azenzi umzimba uthwele umthwalo wesono. Kunalokho, yi-aham leyo buthelela isono emzimbeni. Ngaphezu kwalokho, i-Jeevatma, ingxenye yomzimba, ihlangabezana ne-karma embi nenhle. Umzimba uhlanganisa ama-gnanendriya amahlanu, ama-karmendriya amahlanu, amahlanu i-vayus, ama-tanmatra amahlanu, nama-antahkarana amahlanu, ne I-Jeevatma iyingxenye ye-antahkaranas. Lokhu kuhlanganisa isamba sezingxenye ezingamashumi amabili nanhlanu, kuhlanganise ne-Jeevatma ngaphakathi uhlaka lomzimba. Empeleni, ukuqonda okujulile kwezinqubo zomzimba kungaholela ekuqondeni okujulile emavesini kaJesu. I-gnani yangempela iyakubona lokhu okuyinkimbinkimbi ukwakheka komzimba. Njengomuntu othanda imimoya wake wankondlo Ngokweqile, noma ubani ongenalo ulwazi olunjalo akufanele abe kungathiwa i-gnani.
        <i>
      Panchatatvamulanu panchikarinchaka
      Manchi yatulamanna maatalanna
      Kunchamandu gajamu gruddupettina chandambu
      Akhila jivasanga aatmalinga.
  </i>
<b>Incazelo:-</b>  Igama elithi sankhya libhekisela ku ulwazi olunzulu lwePancha Bhutas, oluhlanganisa Isibhakabhaka, Umoya, Umlilo, Amanzi, Nomhlaba. Lolu lwazi luhlanganisa ukuqonda ukuthi ngayinye yalezi zakhi yadalwa kanjani, zahlukaniswa kanjani zaba izingxenye ezinhlanu ezihlukene, nokuthi kanjani lezi zingxenye ezingamashumi amabili nanhlanu zihlangene zakha izitho ezihlukahlukene futhi izingxenye zomzimba, ezibonakalayo nezingabonakali. Ngokucabangela ukuba ube i-gnani (umuntu owaziyo noma okhanyiselwe) ngaphandle kokuba nokuqonda okujulile kweSankhya ye mzimba ufana nokwenza isimangalo esingamanga. Kufana nokuthi egomela ngokuthi indlovu izalela iqanda ngaphansi kukabhasikidi. Ku iqiniso, ngisho noma indlovu yayizoboshwa ngokuvikelekile ngamaketanga futhi ibekwe ngaphansi kukabhasikidi, yayingeke izalele amaqanda. Ngakho-ke, ukugomela kokuthi indlovu izalela amaqanda ngaphansi kwe-ubhasikidi awunasisekelo ngokuphelele. Ngendlela efanayo, kuyiphutha umuntu ukuzimemezela ukuthi uyi-gnani lapho entula ulwazi lwemininingwane eyinkimbinkimbi ephathelene nomzimba izitho zomzimba. Ukuhlakanipha kweqiniso kudinga ukuqonda okujulile kwe ukwakheka komzimba, okuhlanganisa izingxenye zayo ezibonakalayo nezingabonakali.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 14,
verse: `  <b>(13)	IVangeli likaMathewu, isahluko 6, 3 no 4 amavesi.</b>`,
meaning: ` <b>
(6:3) Kodwa lapho wenza i-dharma, ungavumeli kwesokunxele sakho isandla sakho sazi esikwenzayo esokunene.
<br><br>
(6:4) Ukuze ukupha kwakho kube ngasese. Bese eyakho ubaba obona okwenziwa ngasese uyovuza wena.
</b>`,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abashumayeli abaningi balihumushe kabi leli vesi, esikisela ukuthi kuphathelene nomnikelo. Ezindaweni ezithile ukukhulekela, kuze kuphakanyiswe ukuthi imali inikezwe uNkulunkulu inkonzo kufanele ihlakaniphe kangangokuthi &ldquo;isandla sokunene akufanele yazini ukuthi isandla sobunxele senzani.&rdquo; Ngenxa yalokho, iminikelo ngokuvamile kufihlwa noma kusongwe esandleni ngaphambi kokunikelwa. Nokho, kubalulekile ukucacisa ukuthi leli vesi alikhulumi umnikelo; imayelana nedharma. Kunomehluko obalulekile phakathi kwe-dharma nomnikelo. <strong>Ukunikela kuhlanganisa ukupha abanye, kuyilapho i-dharma ibhekisela ku-principlesone imikhuba. </strong>Ukuze uqonde ngempela indlela yokwenza i-dharma, kunjalo kubalulekile ukuqonda ukuthi lawa ma-dharma ahlanganisani. Kulokhu ivesi, akushiwo lutho ngomnikelo; kunalokho, liyagcizelela i-dharma. Ama-dharma kaNkulunkulu ngokuyinhloko amabili, njengoba kushiwo ku mbhalo waphezulu. Eyesithathu ingokomzimba. Kukhona nezinye ama-dharmas axhumene nalezi zintathu eziyinhloko eyodwa. Ukuze afinyelele uNkulunkulu, umuntu ngokuyinhloko udinga ukugxila kulokhu ama-dharma amathathu abalulekile, kanti amanye ama-dharma azungeza izici zikaNkulunkulu. Lawa ma dharma amathathu ayisisekelo yizinqubo ezibalulekile lokuzuza uNkulunkulu.

  Ama-dharma amathathu, i-Brahma, i-Karma, ne-Bhakti Yoga, ziyadingeka ukuze zifinyelele kuNkulunkulu. Okubili kwakho kuhilela ngaphakathi ukuzijwayeza nemizwa noma imicabango, kuyilapho omunye kuhilela yangaphandle ukuzijwayeza. Umkhuba wama-dharmas amabili okuqala awunjalo okubonakala kwabanye. Nokho, uma kuziwa kwesesithathu dharma, kukhona okungenzeka ukuthi ibonwe ngabanye. Lokhu yingakho, evesini, uJesu ebhekisela ebunyeni &lsquo;idharma&rsquo; kunalokho kune-&lsquo;dharmas.&rsquo; Ugcizelela ukuthi umuntu kufanele azilolonge dharma engase ibonwe abanye ngokuqapha futhi imfihlo. Ukudlulisa lokhu ngokuthi, <strong>&ldquo;ungasivumeli isinxele sakho isandla sakho sazi ukuthi isandla sakho sokunene senzani.&rdquo; </strong>Okungaphansi umyalezo wukuthi lapho abanye bebona umkhuba wakho we-dharma, bangase bakuchaze kabi noma bathonyeke kabi. Ngakho-ke, uJesu weluleka ukuthi lapho wenza i-dharma, kufanele kube njalo kwenziwa ngobuhlakani nangaphandle kokufuna ukuqashelwa abanye.
</div></div>
</span>`
},
{
  chapterName: "IVangeli likaMathewu",
  chapterNumber: 2,
  pageNumber: 15,
  verse: `  <b>(14)	IVangeli likaMathewu, isahluko 6, ivesi 6.</b> `,
  meaning: `<b>
  (6:6) Kodwa nxa ukhuleka, ngena ekamelweni lakho, ulivale; emnyango, nikhuleke kuYihlo ongabonwayo. Khona-ke uyihlo obona okwenziwa ngasese uzokubona ukuklomelisa.</b>`,
  pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho uthandaza kuNkulunkulu, kubalulekile ukuqiniseka ukuthi uthandaza imithandazo igcwele i-dharma. Izimpawu zomlomo nje ngaphandle kwe-dharma akuwenzi umthandazo wangempela futhi ngeke ukuxhumana noNkulunkulu. Ngakho-ke, lapho uhlanganyela emthandazweni lokho bangabonwa ngabanye, uJesu wathi akangene ekamelweni elingasese; vala umnyango, futhi uthandaze ku-Atma yangaphakathi, ubukhona bukaNkulunkulu phakathi kwakho. U-Atma, osenyameni, nguye ubaba wabantu. Umthandazo ongase waziwe ngabanye kufanele kwenziwe ngendlela yokuthi kungabi bikho owaziyo ngakho. Ngokwenza ngakho, Atma, ngubani ngasese emzimbeni, uyokuvuza. Kwe umbhalo wokuqala waphezulu, lo mkhuba ubizwa ngokuthi <strong>&lsquo;uBrahma (Okuhle) I-Yogam.&rsquo;</strong></div></div>
  </span>`
    },
    {
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 16,
verse: `  <b>(15)	IVangeli likaMathewu, isahluko 6, 7th kanye 8 amavesi. </b> `,
meaning: `  <b>
(6:7) Lapho nithandaza, ningaqhubeki nibhibhidla kanjalo abezizwe, ngokuba bacabanga ukuthi bayakuzwiwa ngenxa yakho amazwi abo amaningi.
<br><br>
(6:8) Ningafani nabo, ngokuba uyihlo uyakwazi; udinga ngaphambi kokuthi umcele.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abantu abaningi emphakathini namuhla bathandaza ngamazwi ayize esikhundleni se 'Yogam,' enamathela ku-dharma ekufinyeleleni UNkulunkulu. Bacabanga ukuthi uNkulunkulu uzofeza izifiso zabo uma besebenzisa amazwi amaningi. Inhloso yabo akukhona ukuhlangana noNkulunkulu, kodwa kunalokho ukufuna izifiso zezwe kanye nezinzuzo. Nokho, akufanele khulekani njengabo. Ubaba wakho, u-Atma, useyazi yonke into nangaphambi kokuba ubuze. Uyazi okufanele noma okungafanele kube inikelwe wena. Ngakho-ke, akusizi ukubuza mayelana izinzuzo zezinto ezibonakalayo. UYihlo, u-Atma, ukuhola njengokusho karma yakho. Ngakho-ke, i-Atma ikunikeza ngalokho onakho ezuzwe nge-karma yakho edlule. Ukuthi uyabuza noma cha, Atma inikeza konke ngokuvumelana ne-karma. U-Atma unguBaba we bonke abantu, noMoya oNgcwele, uYise ka-Atma, nguye fakaza ezintweni zonke.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 17,
verse: ` <b>(16)	IVangeli likaMathewu, isahluko 7, 13 no 14 amavesi.</b> `,
meaning: `<b>
(7:13) Ngenani ngesango elincane. Ngokuba ububanzi buyisihluthulelo isango futhi ibanzi indlela eholela ekubhujisweni; baningi abangena ngalo.
<br><br>
(7:14) Kodwa isango lincane futhi liwumngcingo indlela leyo kuholela ekuphileni, futhi bambalwa kuphela abayitholayo.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Zimbili izindlela kulo mhlaba: eyodwa iyindlela ye I-Paramatma (uMoya oNgcwele), kanti enye indlela yamaMaya. Nakuba bembalwa kakhulu abafuna uNkulunkulu, abaningi badonseleka kuye indlela enkulu yamaMaya. Isango eliya e-moksham lincane futhi inselele ukudabula. Indlela kaNkulunkulu nayo incane, futhi kuphela abambalwa bakwazi ukuyithola.

  Ivesi likhuluma ngesango likaNkulunkulu (ukungena) kanye nendlela. Esokuqala siyindlela yokungena, elandelayo indlela. Bangu imigwaqo emibili kuphela yabo bonke abantu. Omunye uyingcingo, futhi enye ibanzi. Isango eliya endleleni ewumngcingo lincane, futhi ukungena endleleni ebanzi kubanzi. Indawo yokungena nendlela kufanele ibe mkhulu ngokuphindwe kambalwa kunalowo ongena. Bese kuba njalo kungenzeka kuphela ukungena esangweni kanye nomgwaqo. Isango elincane usayizi nobubanzi bendlela ewumngcingo bulingana nobukhulu bomuntu ongena. Kodwa ekukhetheni kwesibili, ubukhulu besango elibanzi futhi ububanzi bomgwaqo obanzi bukhulu ngokuphindwe ka-108 kunomuntu ongena. Ngale ndlela, zimbili kuphela izindlela kulokhu izwe—elinesango eliphindwe izikhathi ezingu-108 ububanzi nomgwaqo obanzi, futhi enye inesango nendlela yobukhulu obuqondile. INkosi yaqhathanisa lezi zinhlobo ezimbili zamasango nezindlela eziya ekuhlakanipheni nasekungazini. Indlela yokuhlakanipha incane kakhulu, futhi usayizi wokungena unjalo kulinganiselwe, okwenza kube inselele ukuhamba. Indlela yokungazi lutho ingu-108 izikhathi ezinkulu futhi azinazithiyo. Indlela yokuhlakanipha incane futhi inezithiyo, kodwa lapho iya khona iParamatma. Nakuba zingekho izithiyo esangweni elibanzi kanye indlela ebanzi yokungazi, iholela kuSathane. Indlela yeParamatma ngaphandle kokuzalwa nokufa, ngaphandle kokubhujiswa, futhi uhlala ekhona isimo sokungabi nanguquko. USathane unokuzalwa, ukufa, kanye ukubhujiswa futhi uhlale usesimweni soshintsho. Nakuba indlela yeParamatma iphakeme kakhulu, futhi indlela kaSathane yimbi kakhulu, abantu abaningi bakhetha ukuhamba endleleni kaSathane. Lapho umuntu bangena endleleni kaSathane, bonke abahlanganyeli babo bayabasekela futhi benza kungabanga nkathazo. Ngeke kube khona ubunzima bezezimali, futhi impilo izozizwa ikhululekile. Nokho, lapho umuntu ekhetha indlela yokuhlakanipha, izihlobo zabo nabashade nabo bangase babe izitha futhi zivimbele uhambo lwabo. Ukuphila kungase kube inselele. Ngakho, bambalwa kakhulu, uma bekhona, phakathi kwezigidi ezikhethayo indlela yokuhlakanipha.

  Abantu abaningi bahambahamba ngobukhulu, abangenalwazi indlela, eletha izithiyo noma ukuphikiswa. Ngokumangazayo, bahlala benganaki ukuba khona kwendima emincane eholela kuMokwam noYise wePharage. Ku I-Bhagavad-Gita, iKrishna ithi hhayi eyodwa phakathi Izinkulungwane zifisa ukunqamula indlela emincane. Akuvamile ukwenza Othile uyifaka, futhi ngisho neRarer ifinyelela lapho uya khona Ngenxa yezithiyo ezibangelwa uMaya. UKrishna, eBhagavad-Gita, kugcizelela futhi ukuthi umuntu onqoba lezi izithiyo nokufinyelela lapho uya khona kubhekwa njenge ubusisiwe, 'futhi umuntu onjalo uzohlangana nalokhu okuphakade Paramatma. Bobabili uKrishna noJesu bamelela i-paramatma. UKrishna wacacisa izindlela zokuhlakanipha nokungazi ku Bhagavad-gita ngasekupheleni kweDVapara yuga, kuyilapho uJesu udlulisele umyalezo ofanayo embhalweni ongcwele, izinkulungwane ezintathu iminyaka iye eKali Yuga. Labo abaqonda izindlela ze Ukuhlakanipha nokungazi njengoba kuchaziwe nguSri Krishna noJesu UKristu kufanele aqale indlela ephakanyisiwe yokuhlakanipha, ukuphikelela naphezu kwazo zonke izithiyo, aze afike ekugcineni I-Paramatma, eyi moksham yaphakade.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 18,
verse: ` <b>(17) IVangeli likaMathewu, isahluko 7, 7th no Amavesi 8.</b>
`,
meaning: `
<b>
(7:7) Buzani futhi niyophiwa; funa futhi uzothola; Qoqoza kanye nomnyango kuzovulelwa.<br><br>
(7:8) Kuwo wonke umuntu ocelayo uyamukela; lowo o Ifuna ukuthola; nakulowo ongqongqozayo, umnyango uzokwazi kuvulwe.
</b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuleli vesi, tento ezintathu ezibalulekile - <strong>buza, funa, futhi qoqoza</strong>. UJesu wasiyala ukuba senze lezi zinto ezintathu umongo ongokomoya. Izimfundiso zeNkosi aziguquki Izindaba zezwe, ngokungafani nezinye eziningi. Ngeshwa, abaningi banayo aqondiswanga leli vesi, alihumushela njengekholi yezinto ezibonakalayo Izibusiso. Ngenxa yalokho, abantu baqala ukucela umhlaba Umusa ovela eNkosini, ngokungafani nomyalezo wakhe wokuqala. -Lingeneyo yize abantu befunda iBhayibheli elingcwele, uSathane ufake eyabo izinhliziyo, zifunga ukuqonda kwazo izimfundiso zikaJesu futhi ebaholela ukufuna izifiso ezibonakalayo. Inhloso yomuntu akuyona weqa iZwi likaNkulunkulu, kepha uSathane ubiza ukuntuleka kwabo ukuqondisisa, ukuzinqoba ukuba bacabange ukuthi azikho ukwephula imiyalo yaphezulu. Eqinisweni, lokhu kubaholela Pressgress Izwi LikaNkulunkulu. USathane, indalo kaNkulunkulu, ukhona nomaphi lapho ubukhona bukaNkulunkulu buzwakala khona. Nomaphi lapho iZwi likaNkulunkulu lihlala khona, Ithonya likaSathane nalo lingase libe khona. Ngakho-ke, kunjalo kubalulekile ukuqonda amavesi nokuvikela ngenkuthalo ngokwethu siphikisana nethonya likaSathane lapho lihumusha UmBhalo.

  Kufanele sibuze uNkulunkulu, sifune uNkulunkulu, futhi singqongqoze emnyango kaNkulunkulu. Le yindlela kaNkulunkulu. Uma ubuza enye into noma ufune Okunye, kuzoba yindlela kaSathane (Maya). Labo landela indlela kaNkulunkulu funa ukuhlakanipha kukaNkulunkulu. Ungahle ube nakho okuningi Imibuzo: Unjani uNkulunkulu? Singafinyelela kanjani uNkulunkulu? Singakwazi kanjani Qondisisa yonke imininingwane ngoNkulunkulu? Ungacabangi ukuthi cha omunye emhlabeni ungaphendula le mibuzo. UNkulunkulu uyeza futhi ihlinzeka ngezimpendulo ozifunayo lapho kukhona abantu emhlabeni ayikwazi ukufinyelela imininingwane kaNkulunkulu ngenxa yethonya le USathane. Ungathola izimpendulo zemibuzo yakho, kepha kungenzeka ungavumi Qaphela ukuthi ubani onikeza lezi zimpendulo. Ngisho nalapho uNkulunkulu ezalwa Emhlabeni futhi unikeza izimpendulo, sivame ukumbona njenge umuntu ovamile ukuba nguNkulunkulu. Uma ubuza, uzothola Qedela ukuhlakanipha. Uma usesha, uzothola ukuthi uNkulunkulu une woza emhlabeni ngesimo somuntu. Lapho uNkulunkulu emcabangile emhlabeni, Akasho ukuthi unguNkulunkulu futhi akazivezi Noma ngubani. Lokhu kubusa kwakhe. Ngokwalo mthetho, labo abenzayo Ukungafunwayo ngeke bakuthole, kepha abafunayo bayakubona. Selokhu Abambalwa babuzwa kuphela lapho iNkosi uJesu esemhlabeni, yena wabelana nabo ngokuhlakanipha kwakhe. Ngoba babembalwa kakhulu Abafuna, akazange avele njengoNkulunkulu kunoma ngubani; kubo bonke, wabonakala njengendoda ejwayelekile. Abafundi bakhe abayishumi nambili, nabo, bamthola Njengomshumayeli futhi ayengazi ukuthi i-paramatma, ngubani wahlanganisa yonke indawo yonke, wayekade enaka uphawu njengoJesu. Yena uziphathe ngenhloso ngendlela evimbela noma ngubani ukumbona njengoNkulunkulu.

  Inkosi yebandla le Paraloka, i-paramatma, yageza izinyawo zayo abafundi ngesikhathi sakhe emhlabeni njengendoda. Lesi senzo sokuthobeka kwenza kwaba inselele kubafundi bakhe nabanye ukuba babone Yena. Ngokudabukisayo, abantu bahluleka ukumkhombisa njengeNkosi futhi wamphatha ngokungamhloniphi, maqondana nowesilisa ojwayelekile. Wakhuthazela emkhafulela ubuso bakhe, umqhele wameva ekhanda lakhe, Ukushaya, nokubethelwa. Ngisho nalapho uJesu efa futhi wavuka futhi Ngomzimba ofanayo ngosuku lwesithathu, abanye babafundi bakhe akazange ame kabi ngedeveli. Lokhu kugcizelela ukuthi abafundi bakhe babekhona Ukubuza ulwazi kodwa hhayi ukufuna ngempela.

  Njengoba isisho sihamba, <strong>"Ukubona kukhulu kune Ukulalela, "</strong>labo abamfakazile mathupha abambe ngaphezulu Isimo kunalabo abazwa nje izimfundiso zakhe. Lapho Abantu babe nethuba lokubona uNkulunkulu womhlaba wonke ngesimo sikaJesu, kwakunjengokungathi bengekho ngempela uMbonile. Ku kulesi simo, iNkosi yachaza abafundi Bayo njengezimpumputhe, naphezu kwalokho ukubona ngokomzimba. Ukuze agweme ubumpumputhe obunjalo, umuntu kufanele funani uNkulunkulu ngenkuthalo. Njengoba ivesi lisikisela, wonke umuntu obuzayo uyamukela, nalowo ofunayo uyathola. Ngakho-ke, obuzayo uthola amazwi kaNkulunkulu, ofunayo uthola isimo sikaNkulunkulu. Lowo othi obonayo mkhulu kunalowo ozwayo nozwayo okuhlangenwe nakho kukhulu kunalowo obonayo. Ngokusekelwe kulokhu isimiso, lowo ongqongqozayo uthola ukufinyelela endaweni i-moksham. Ukungqongqoza, kulo mongo, akukhona ukungqongqoza umnyango kamakhelwane noma womuntu ongamazi kodwa mayelana nokufuna ukungena embusweni kaMoksham nasemasangweni ombuso ka Paraloka. Labo abafuna i-moksham bahlangana neParamatma futhi uzwe ingqikithi Yakhe yeqiniso. Abajwayele ukubuza futhi ukufuna kufanele nakanjani sizame ukuhlangana noNkulunkulu. Lokho kusho nakanjani bayoba ongqongqozayo. Ngezinqubo yokucela, ukufuna, nokungqongqoza, noma ubani angangena ebunyeni noNkulunkulu. Ngakho, lezi zimfanelo ezintathu ezibalulekile kufanele zibe kutshalwe yiwo wonke umuntu, njengoba kuchaziwe ku ivesi okukhulunywe ngalo ngenhla. Elandela isiqondiso sikaNkulunkulu, umceli uthola ukuhlakanipha, ofunayo uthola uBhagavan, kanye nalowo o ungqongqoza uthola ukungena endlini ka-moksham.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 19,
verse: `<b>(18)	IVangeli likaMathewu, isahluko 7, 15 ivesi.</b>`,
meaning: ` <b>
(7:15) Qaphela abaprofethi bamanga. Beza kuwe ezembathweni zezimvu, kodwa ngaphakathi balolaka izimpisi.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abantu badinga isiqondiso ukuze bathole indlela yabo UNkulunkulu, futhi lesi siqondiso ngokuvamile sivela kwabanye. Ukungena Indlela kaNkulunkulu, umuntu kufanele abeke ithemba lakhe komunye. Labo abalandela le ndlela yomoya bathembele kubaqondisi babo ukuba bababonise indlela. Uhambo lomlandeli luncike kumhlahlandlela, njengoba bona kumele ilandele indlela umhlahlandlela oyikhanyisayo. Lokhu kwenza umlandeli uncike kumhlahlandlela, futhi uma umhlahlandlela uhlinzeka nge isiqondiso esifanele, umlandeli uzothuthuka ngendlela efanele. Ngokuphambene, uma umhlahlandlela enikeza isiqondiso esingalungile, umlandeli ingase iphambuke endleleni. Indawo yokugcina ye- umuntu ojwayelekile uthonywa kakhulu ngumhlahlandlela okhethiwe noma guru. Lapho umuntu eseqashelwa njenge-guru, abantu bathambekele ukukholwa nokwethemba isiqondiso sabo kukho konke ukuphila kwabo. Ngakho-ke, kufanele kuqashelwe kakhulu lapho ukhetha othile njengomfundisi wakho noma umqondisi. Evesini elishiwo ngenhla, uJehova waxwayisa, &lsquo;<strong>Xwayani abaprofethi bamanga.&rsquo; </strong>Waxwayisa ukuthi amanye ama-contemporary gurus angase angabi abaqondisi bangempela. Bangase baziveze bembethe isikhumba semvu, bezenzisa ukuze babe ongqongqoshe bangempela, kodwa eqinisweni, banjengonya izimpisi zizifihle. Ngokwezimfundiso zikaJesu, abaningi abantu ngabanye bangase bagqoke futhi baziphathe njenge-guru, ngisho nokusebenzisa amagama anjalo njengoNkulunkulu, ukuhlakanipha, no-Atma enkulumweni yabo. Nokho, yabo imvelo yeqiniso ingase ingakusondezi eduze noNkulunkulu. Njengempisi nje okufihlwe ngaphansi kwesikhumba semvu akuyona imvu, laba bantu, naphezu kokubukeka kwabo, abawona ama-gurus angempela. Ngakho-ke, iseluleko seNkosi siwukuba siqaphe futhi siqaphe ngamanga abaprofethi ukugwema ukuchitha impilo yomuntu ngokulandela labo abakwenzayo unganikezi isiqondiso seqiniso.</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 20,
verse: `<b>(19)	IVangeli likaMathewu, isahluko 7, 21 ivesi.</b>`,
meaning: ` <b>
(7:21) Akubona bonke abathi kimi, ‘Nkosi, Nkosi,’ abayokwenza ngena embusweni weparaloka, kodwa lowo kuphela owenza intando kaBaba oseparaloka. </b>
`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  INkosi uJesu yavela eParamatma. UJesu ukhona I-Bhagavan isesimweni somuntu, kuyilapho i-Paramatma, UBaba kaParaloka, unguNkulunkulu ongenasimo, ukuyo yonke indawo kuwo wonke umhlaba. Lapho i-Bhagavan, ifakwe njenge UJesu, wahamba eMhlabeni, abanye babona ubuNkulunkulu Bakhe ubukhazikhazi futhi bemhlonipha ngezifiso zabo zezinto ezibonakalayo. Bona wambiza ngokuthi ‘Nkosi, Nkosi,’ efuna izinzuzo zomuntu siqu. Nokho, ukusondela esimweni esibonakalayo seNkosi nokubiza Yena omkhulu ngaphandle kokuzuza ukuhlakanipha kwaphezulu akanele. Nakuba lowo osesimweni esibonakalayo kanye nalowo ongabonakali amafomu afanayo, kunemikhawulo yemvelo kokubonakalayo ifomu, kanti uBaba ongabonakali weParaloka akanamkhawulo. I-Paramatma engenamkhawulo ngezikhathi ezithile ithatha ifomu elibambekayo adlulisele izimfundiso Zakhe ezingcwele esintwini. UJesu uyisimo ekhethwe yiParamatma ngale njongo. Ngenkathi iNkosi waziveza kithi njengoJesu, uYise kaParaloka wakhuluma ngamazwi kaJesu. UNkulunkulu wenziwa umuntu njengoJesu memezelani ama-dharma yakhe.

  Ukumane ubize uJesu ngokuthi ‘iNkosi’ ngaphandle kokubeka ukuhlakanipha kukaNkulunkulu ukwenza kanye nokuhambisana nentando kaBaba waseParaloka akulethi izinzuzo zangempela. Lowo owenza ngokuzimisela okukaNkulunkulu ukuhlakanipha kuphakeme kunalowo okhuluma amazwi nje Igama leNkosi. Lowo ogcina amazwi kaNkulunkulu mkhulu obalulekile kunalowo okhonzela uNkulunkulu nje. Umuntu ophila ngokuvumelana nemiyalo kaNkulunkulu ngempela ukulandela intando kaNkulunkulu, futhi abantu abanjalo bamiselwe Paraloka (moksham). UNkulunkulu akafuni ukuthopha futhi akakufuni vumani kukho; kunalokho, uNkulunkulu uthokoziswa yilabo abamukelayo futhi sebenzisa ukuhlakanipha Kwakhe. Ngakho-ke, kunengqondo ngokwengeziwe ukuzijwayeza Izimfundiso zikaNkulunkulu kunokumane unikeze udumo. uNkulunkulu inokuqonda imicabango nezinhloso zonke izidalwa futhi angakwazi ukuhlukanisa phakathi kwalabo ngempela baqonde futhi baphile ngokuhlakanipha Kwakhe nalabo abangakwenzi. Labo abaqondayo futhi baphile ngokuhlakanipha kukaNkulunkulu bakhethekile ukubaluleka kuNkulunkulu. Labo abangaqondi kahle noma abanganaki ukuhlakanipha nokwehluleka ukwenza ngokuvumelana nokukaNkulunkulu angeke kufinyelelwe i-moksham.

</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 21,
verse: ` <b>(20)	IVangeli likaMathewu, isahluko 7, 22 kanye Amavesi 23. </b>`,
meaning: ` <b>
(7:22) Abaningi bayokuthi kimi ngalolo suku, ‘Nkosi, Nkosi, yenze asiprofethi ngegama lakho nangegama lakho siqhube sikhipha amademoni, senze amaningi ngegama lakho izimangaliso?
<br><br>
(7:23) Khona-ke ngizobatshela ngokucacile, ‘Angizange nginazi. sukani kimi nina benzi bokubi!’</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abanye abantu abaqaphela ubukhulu beNkosi (UJesu) angase anganaki uParamatma, umbusi weparaloka, kanye gxila ekudumiseni uJesu kuphela. Paramatma, uYise womhlaba wonke, wathumela ingxenye Yakhe njengoJesu. UJesu uphethe njenge amandla amaningi njengeParamatma. Ukudumisa iNkosi uJesu kuyafana edumisa uBaba, uParamatma. Abantu abaningi banikeza udumo lwabo eNkosini, kodwa kukhona abenza kanjalo ngenxa yobugovu izisusa, kuyilapho abanye bengenabugovu ekuzinikeleni kwabo kuNkulunkulu. Ubaba weparaloka wadlulisela umlayezo wakhe ngoJesu, lowo wathumela, ezikhathini eziningi. Abaningi bayayazi lamazwi kaBaba oPhezukonke kodwa abaqondi iqiniso Lakhe imvelo. Kungase kushiwo ukuthi akukho ngisho neyodwa ezigidini abafunda amazwi kaBaba, balalele, futhi banikele indumiso yabo, ngempela uyayiqonda ingqikithi kaBaba yangempela. INkosi imemezele Imiyalo kaNkulunkulu, ukuhlakanipha, namavesi. INkosi ebonakalayo (UJesu) ukhonza njengophawu lukaNkulunkulu ongabonakali, futhi unguye umfanekiso nommeleli kaNkulunkulu. Abahlulekayo ukubamba ukuhlakanipha nemiyalo equkethwe emavesini ngeke bazuze ngokugcwele ekudumiseni kwabo iNkosi.

  Isintu singathola inzuzo ethile kuphela ekudumiseni INkosi njengophakeme. Kubalulekile ukuqaphela ukuthi ekugcineni inzuzo yomuntu iwukuthola i-paraloka. Okubaluleke kakhulu impumelelo umuntu angafinyelela kuyo yi-paraloka. Kubalulekile uku qonda ukuthi inhloso enkulu kunoma ngubani ukugqashula ezweni likaSathane (Maya) futhi ungene endaweni kaNkulunkulu. Okokugcina futhi inzuzo ebaluleke kakhulu esintwini ukuhlangana nokukaNkulunkulu paraloka ngaphandle kokubuyela kuleli zwe lapho uSathane uhlala. Ayikho into ebaluleke ukwedlula umuntu ukuthola ukufinyelela ku-paraloka. Ukuze uthole izinzuzo ezinkulu kangaka futhi agweme ukuzihlanganisa noSathane, umuntu kufanele akuqonde ngokugcwele okukaNkulunkulu ukuhlakanipha. Labo abangajuli ekuhlakanipheni okujulile equkethwe emavesini kaJesu nemiyalo Yakhe kuyoba kuphela abazinikele ngokwengxenye kunamakholwa aphelele. Ubusisiwe wena lowo olandela zonke izifundiso zeNkosi ngokungaqedi imingcele yemiyalo yaKhe. Ngisho nalabo abangase ukungaqondi ngokugcwele ukuhlakanipha kweParamatma akuphelele amakholwa, naphezu kokuba abashumayeli abakhulu nabadumisi abashisekayo yeNkosi. Lokhu akukhona ukuxosha abantu abanjalo, kodwa ukuba gcizelela ukuthi banokholo kuNkulunkulu ngaphandle kokuphelela amakholwa. Ukungabaza kungaphakathi kwawo wonke umuntu aze aphelele ukuqonda ukuhlakanipha kukaNkulunkulu, ngisho noma kungase kungabonakali manje. Abashumayeli abakhulu abakholelwa ukuthi bazinikele ngenhliziyo yonke weNkosi usengaba nokungabaza baze bazuze ngokugcwele ukuqonda ukuhlakanipha kukaNkulunkulu. Ngakho-ke, iNkosi wamemeza wathi: <strong>&ldquo;Lowo othembela kimi ngomphefumulo wakhe uManas uphakeme kunalowo ongithophayo.&rdquo;</strong>Qedela ukholo ludinga ukuhlakanipha okuphelele kukaNkulunkulu.

  Kungashiwo ukuthi labo abangakuqondi lokho UJesu noNkulunkulu bamunye futhi labo abakholelwa ukuthi uJesu uyokwenza buya njengoba uJesu engabuqondi ubukhulu bukaNkulunkulu. Umuntu ongaboni ukuthi uNkulunkulu ungunaphakade, ngaphandle isiqalo noma isiphetho, ukuthi uNkulunkulu wehlele eMhlabeni abaningi izikhathi, nokuthi Uyofika noma nini lapho kunesidingo, uyashoda ukuhlakanipha okuphelele. Labo abanokuhlakanipha okuphelele bangakwazi ukuqonda ukufika kukaNkulunkulu, kuyilapho labo abangenakho ukuhlakanipha okuphelele bengakwazi qaphela ukuza kwaKhe. Ngisho nalapho uNkulunkulu ethathe isimo somuntu futhi wema phambi komuntu, lowo obona ingaphandle Lakhe kuphela ukubukeka nezenzo kungase kuhluleke ukubona uNkulunkulu. Lapho Inkosi ifika incognito, amanye amaKristu angase angamazi futhi bangase bangaqapheli ubukhona Bakhe, kuze kube seqophelweni loku ezama ukuMbhabhadisa.

  Emhlabeni, amakholwa angcono kunabangakholwa, futhi amakholwa aphelele adlula amakholwa ajwayelekile. Okuphelele kuphela amakholwa angangena paraloka. UNkulunkulu akabemukeli kuze kube amakholwa aphelele. Lapho kungena paraloka, Nkulunkulu uvuma kuphela ama-gnanis aphelele. Uma umuntu engeyena gnani ngokuphelele, uNkulunkulu uzothi, "Angibazi." Ngakho, eyodwa kumelwe ilwele ukuthola ukuhlakanipha okuphelele. Abaningi bafisa ukudweba eduze noNkulunkulu futhi ungene embusweni wakhe. Nokho, njengoba benjalo ngaphansi kokubusa kukaSathane (uMaya), uSathane wenza imizamo yakhe yonke kwe batholile ekufinyeleleni uNkulunkulu futhi kusukela ekubeni ginis gnanis. Ngisho nabashumayeli abaziyo ngoSathane Ukuphikiswa uNkulunkulu kungenzeka kungakuqondi ngokuphelele ubukhulu be Ithonya likaSathane. Labo abaswele okuphelele Ukuqonda ngemisebenzi kaSathane kungalandela ngokungafanele Indlela kaSathane ngenkathi bekholelwa ukuthi basendleleni eya kuNkulunkulu. Leli kungani uNkulunkulu eshilo ukuthi abashumayeli abacabanga ukuthi bakhona eduze noNkulunkulu kungenzeka kusekufushane ekungeneni ubukhona bakhe.

  Evesini, uJesu wathi, <strong>"Noma ukhipha amademoni futhi enze izimangaliso egameni lami, futhi aphulukise Sigula ngegama lami, uwenzi bokubi. Suka kimi. "</strong>

  Emphakathini wanamuhla, abantu bavame ukubheka labo yenza izimangaliso egameni likaNkulunkulu njengokuzinikela kweqiniso, Ukubakholelwa ukuthi basondele eNkosini. Ngisho nalabo abasebenza Izimangaliso ngokwazo zingacabanga ukuthi ziseduze neNkosi. Lo mbono uphakama ngoba babona inkazimulo Inkosi yabonisa ngezenzo zabo. Lapho belele izandla zabo esigulini ngenkathi ephinda amazwi kaNkulunkulu, futhi Ukuhlangenwe nakho kwesiguli ukuphulukiswa, bakubeka kuJehova izimangaliso zenzeka ngazo. Ngenkathi kuyiqiniso lokho izimangaliso ngenzeka ngempela, ukwenza ukuba khona kweNkosi kwaziwe kubo bonke, Babuka ukuthi kungani iNkosi izwakalise ukungajabuli nalokho Izenzo, njengoba kushiwo evesini elingenhla. Ngokwenza kanjalo, bona khohlwa amazwi eNkosi. Kuphakama umbuzo: Kungani iNkosi yakwenza baphindisele uma bebekwenzani bekubonakala kulungile nokubonakaliswa kwezimangaliso zeNkosi? Kungani uJesu asho ukuthi babehamba ngendlela embi? Uma iNkosi isho kanjalo, akungabazeki ukuthi kuyiqiniso.

  Iqiniso elingakholeki liyabonakala lapho wena cabanga ngalokho iqiniso kusho izimfundiso zeNkosi. Ikona iphutha elikhulu kumuntu ongaliboni ukuthi Izimangaliso ezenziwa egameni leNkosi zivela kuNkulunkulu noma uSathane. Abaningi abavela njengabashumayeli kanye ne-gurus emehlweni kaJehova Abantu bakholelwa ukuthi basendleleni kaNkulunkulu kodwa empeleni, ngamaMaya indlela. Lokhu kwaziswa kungakhathaza impela. Kungenzeka ukuthi Abashumayeli abaningi bangacasulwa ngamazwi ami, kepha ngicela Khumbula ukuthi lawa akuwona amazwi ami; bangamazwi ka Nkulunkulu. Njengoba kushiwo eVangelini likaMathewu 7:22, iNkosi wathi, <strong>"Lokhu kubi. Angikaze ngikwazi. " </strong>Kufanele sivume ukuthi elifanayo maya (Sathane) elilinga iNkosi esikhathini esedlule usazama ukusikhohlisa namuhla. Ukuqonda Maya (USathane) futhi uyingxenye ebalulekile yokuhlakanipha kwaphezulu. Phandle kwa-ukuqaphela uMaya, singalandela ngephutha uSathane, ngubani Uthatha igama likaNkulunkulu, esikhundleni sokulandela uNkulunkulu. Namuhla, Izikhulumi eziningi, iGurus, nabashumayeli benza iphutha elifanayo. USathane (Maya), ongathatha izindlela eziningi, enza amaqhinga nezimangaliso egameni likaNkulunkulu. Labo abangazi ukuthi lokhu akumjabulisi uNkulunkulu akunakuthuthuka. Okucindezelayo Iqiniso ukuthi abantu abaningi emhlabeni balandela uSathane ngokungaboni, ukukholelwa ukuthi unguNkulunkulu. Banganaki iqiniso lokuthi bona baphishekela indlela kaSathane, hhayi uNkulunkulu. Kungabonakala cishe akunakwenzeka ukuba bahlukane nethonya likaSathane. -Lingeneyo Uma uNkulunkulu uqobo lwaKhe ezodlulisela leli qiniso, angakwazi ukugxeka Unkulunkulu kepha uhlale engashintshiwe. Kubo, uMaya uvela njengoNkulunkulu, futhi uNkulunkulu ubonakala njengomuntu nje ongumuntu.

  Labo abafisa ukungena eMbusweni kaNkulunkulu futhi babe nokholo KuNkulunkulu kufanele kubonise evesini elishiwo ngaphambili futhi cabanga ngengakho uNkulunkulu engamukeli futhi abhekisele kulabo owenza izimangaliso njengabenzi bokubi. Cabanga ukuthi ngubani othandwa yi Nkulunkulu futhi ongeyena. Kubalulekile ukuze uzijwayeze nge Amavesi kaNkulunkulu, ukuhlakanipha, nemiyalo. Kufanele ngokugcwele yamukela ukuhlakanipha kukaNkulunkulu ngaphandle kokuphula okwakhe imiyalo, ubabone njengoba imingcele ibeka eduze kwakho. Khumbula ukuthi uMbuso kaNkulunkulu uphakathi kwalokhu Imingcele, ngenkathi umbuso kaSathane ulele ngaphandle. Hlala uphapheme ngaphakathi ubuso bethonya likaSathane, ukhumbula imingcele kuhlelwe uJesu embhalweni wakhe ongcwele kubo bonke abantu.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 22,
verse: ` <b>(21) IVangeli likaMathewu, Isahluko 8, 22 isiqendu. </b>`,
meaning: ` <b>
(8:22) UJesu wamtshela, "Ngilandele, bese kubafile ukungcwaba abafa babo. "</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Leli vesi elingenhla elishiwoyo ukusabela kukaJesu lapho Omunye wabafundi bakhe wathi kuye: "Nkosi, ngiqale uke ngihambe ngiyomngcwaba ubaba wami." Amazwi kaJesu angabonakala engacacile kwabanye, kushukumisela imibuzo ngencazelo yabo. Lapho sicabanga lokhu, singakwazi ukuhlukanisa ubuntu ngezigaba ezimbili: labo unobuhlakani futhi wenze njengoba i-yogam izothola impilo yaphakade (Moksham). Abantu abanjalo bambalwa kakhulu ngenani. Labo kufanelekile ukuthi impilo engapheliyo ngeke ibalwe phakathi kwe ufile. Labo abathola impilo engapheli ngeke iphinde ngenze uhlangabezana nokufa futhi kungashiwo ukuthi uzuze uMoksham. Ngakolunye uhlangothi, labo abangazi noma abangazi lutho Umkhuba we-yogam ungabhekwa njengofile ngokomoya. Abantu abanjalo abanayo impilo yaphakade futhi ekugcineni bayo Ukufa kobuso. Kungashiwo ukuthi zimiselwe ezintweni ukufa ngesinye isikhathi. Abangenalwazi bavame Ukungcwatshwa okunye abantu abangazi. Ngakho-ke, amazwi kaJesu, "ake abafileyo o ngcwaba abafileyo, "kudlulisa umbono wokuthi labo abalele ukuhlakanipha kubhekiselwa kuwo njengoba efile ngokomoya. Kugcizelela ukuthi lezo abanakho ukuhlakanipha akufanele bazihlanganise ne ukungazi. Ngakho-ke, uJesu watshela umfundi, "uyaqonda Ukuhlakanipha Futhi Ngilandele. Abe abangakwazi ukungcwaba abazi. "</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 23,
verse: ` <b>(22)	IVangeli likaMathewu, Isahluko 9, 12th kanye Amavesi we-13.</b>`,
meaning: ` <b>
(9:12) Lapho ezwa lokhu, uJesu wathi, "Akuyena ophilile abadinga udokotela, kepha abagulayo. "
<br><br>
(9:13) Ngoba angizanga ukubiza olungile, kepha Izoni.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Njengoba saxoxa phambilini, uNkulunkulu ngezikhathi ezithile yehlela emhlabeni ukusungula ama-dharmas. Ngokufanayo, uJesu wathi weza ukuzohola ukungazi lutho emkhondweni we Ukuhlakanipha. Ushilo ukuthi weza ukubiza izoni, hhayi balungile. Nazi 'izoni' zibonisa labo abangazi futhi Ukuntuleka ukuhlakanipha, ngenkathi 'abalungile' babona labo abanakho Ukuhlakanipha. UNkulunkulu Uthatha Indima Yodokotela Ongokomoya, Imvamisa okubizwa ngokuthi umshumayeli, ukuphulukisa labo abahlushwa ukugula ngokungazi. Ngomuthi wokuhlakanipha, uyaphambuka ogulayo ngokomoya. Labo asevele bephilile ngokomoya Ukuhlakanipha akudingi ukuholwa ngudokotela noma Umshumayeli. Lapho isifo sokungazi sisakazeka emhlabeni wonke, okuthinta bonke abantu, uNkulunkulu ufaka umhlobiso wokuhlinzeka ngokwaphezulu kwakhe umuthi we-dharmas futhi uguqule abangenalwazi babe yi-gnanis (abantu abahlakaniphile). Ukube uNkulunkulu akazange athathe le ndima njengengokomoya Udokotela, umhlaba wonke uzohlushwa ukungazi. Ngakho-ke, uNkulunkulu uyamhlonza ukuveza ukuhlakanipha kwakhe kulabo abaku isidingo.</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 24,
verse: ` <b>(23) IVangeli likaMathewu, Isahluko 8, 23. 24th, 25th ne-26th amavesi. </b>`,
meaning: `<b>
(8:23) Wabe esengena esikebheni kanye nabafundi bakhe wamlandela.
<br><br>
(8:24) Ngokuphazima kwengqondo kwaqhamuka isivunguvungu esithukuthele echibini, Ukuze amagagasi akhukhule phezu kwesikebhe. Kepha uJesu wayekhona ukulala.
<br><br>
(8:25) Abafundi baya bamvusa, bathi: "Nkosi, Sisindise! Sizominza! "
<br><br>
(8:26) Waphendula wathi: "Wena nokholo oluncane, kungani unjalo kanjalo wesaba? " Wabe esesukuma wakhuza imimoya futhi Amagagasi, futhi kwakuzolile ngokuphelele. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lo mcimbi uyisigameko esikhulu esivela empilweni kaJesu. Lapho Kungenzeka ukuthi uJesu akazange afundise ngokuqondile isifundo lapha, kuningi Singafunda kulo mcimbi. Bobabili ulwandle kanye nesivunguvungu exhunywe kwiPrakruti. Umoya esivunguvungwini namanzi ku Ulwandle luyizinto ezihlanganayo zePrakruti. Prakruti ungaphansi kwe Ukulawulwa kuphela kwe-paramatma, inhlangano ephakeme kakhulu yaphezulu. Prakruti Inezinto ezinhlanu: isibhakabhaka, umoya, umlilo, amanzi, nomhlaba. -Lingeneyo I-Atma, enokwedlula ubunkulunkulu ukulandela i-paramatma, ayinalo igunya ngaphezulu kwePrakruti. I-ATMA ngaphakathi komzimba iphatha kuphela Chara (okuguqukayo) Prakruti, okukhona ngendlela ye mzimba. Akunasisekelo noma yiliphi igunya phezu kwe-Achaara (Engaguquki) Prakruti. IPrakruti ayilaleli atma; kuphela ulalela umyalo we-paramatma. IPrakruti yakhiwa Ama-Bhootas amahlanu, angaqondakala njengamandla okuphila noma ama-jeevas. Lezi zinto ezinhlanu zimelela izinto ezinhlanu zePrakruti futhi, Ngenxa yalokho, banamathela eZwini likaNkulunkulu laphezulu. Balandela Imiyalo yeParamatma.

  Ngoba uJesu wayenguMoya oNgcwele owavela njenge Indoda ejwayelekile, isivunguvungu solwandle saphela umyalo wakhe. NguNkulunkulu kuphela ongalawula iPrakruti, ngakho-ke uJesu angabhekwa kanjalo Ukunakwa uNkulunkulu. Kukhulunywa ngamavesi 7, 8, no-9 wegnana I-Yoga eBhagavad-Gita, umbhalo wokuqala waphezulu, uNkulunkulu yehlela emhlabeni ngesimo somuntu ukudlulisa ukuhlakanipha kwakhe. Nini UNkulunkulu uthatha isimo somuntu, wafana ngaphandle Umuntu ojwayelekile, yize engeyena umuntu ojwayelekile. Ngoba ubonakala njengendoda ejwayelekile, ekhomba yena inselele. Kodwa-ke, kunezikhombisi ezimbili ezibalulekile zokubona Yena: <strong>1) Ukuba khona kombandela kaNkulunkulu noma kuphi lapho ungcwele UDharmas ufundiswa.2) Amandla okuyala i-Prakruti ingabonakala njengokuhlongozwa uNkulunkulu</strong>. Ukuzola kwe Ulwandle emyalweni kaJesu lubonakaliswa kwalawa mandla aphezulu, ekhombisa ukuthi uNkulunkulu kuphela ongenza lezo zinto. Nini UDharmas ufundiswa futhi i-Prakruti iyaliwe, umuntu Uhlobo lukaNkulunkulu luyabonakala. UJesu akagcinanga ngokufundisa uNkulunkulu kuphela Ukuhlakanipha kodwa futhi kwenza kwakwenza futhi kwayala iPrakruti. Ngakho-ke, uJesu angakhonjwa njengoNkulunkulu ngesimo somuntu. Le khasi ukunqanyulwa ngokushesha kwesivunguvungu olwandle okunikezwe njengobufakazi kobunkulunkulu bukaJesu.
</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 25,
verse: ` <b>(24)IVangeli likaMathewu, Isahluko 9, ivesi 6.</b>`,
meaning: `<b>
(9: 6) Ngifuna wazi ukuthi iNdodana yomuntu inayo igunya emhlabeni lokuthethelela izono. Ngakho-ke, wathi ku ndoda ekhubazekile, "vuka, thatha umati wakho uhambe uye ekhaya." Uwesilisa wasukuma waya ekhaya.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UJesu ngokwakhe wathi iNdodana yomuntu inegunya kuzo Umhlaba wokuthethelela izono. Lapho kwenziwa umuntu okhubazekile UJesu wathi kuye: "Izono zakho zithethelelwe." Ezinye ze Ababhali bathi kubo bathi uJesu wayehlambalaza. Ukwazi imicabango yabo, uJesu wathi, "Kungani ujabulisa ububi imicabango ku yizinhliziyo zethu? Okulula: ukusho, 'izono zakho Uthethelelwe, 'noma uthi,' Sukuma uhambe? 'Kepha ngifuna ukuba wazi Ukuthi iNdodana yomuntu inegunya lokuthethelela izono. " Ngakho-ke, yena wathi kofe uhlangothi, "Sukuma, uthathe mat wakho uhambe uye ekhaya. " Uwesilisa wasukuma waya ekhaya.

  Uma sibona lokhu, uJesu wathethelela izono ngoba ababhali wacabanga okubi ngaye. Ubuye wamemezela ukuthi iNdodana yomuntu inayo igunya emhlabeni lokuthethelela izono. Naphezu kokuza emhlabeni njengoba INdodana kaNkulunkulu, wazithoba ngokukhomba njengendodana womuntu. Watshela futhi wakufakazela ukuthi ungowedwa anaso igunya lokuthethelela izono. Labo abaqondayo ukuthi uNkulunkulu kuphela (UMoya oNgcwele) ungathethelela izono uyokwazi ukuthi uJesu ngempela ungubani. Ngokufuna ukuba yiNdodana yomuntu, uJesu ngamabomu bafihla ubunkulunkulu bakhe, yize ayevela engcwele Umoya. Umuntu okhubazekile wasukuma wabuyela ekhaya Lapho uJesu emyalela ukuba enze kanjalo. Isixuku samangala Ngemuva kokufakaza lesi simangaliso. Naphezu kokwenza okunjalo Isenzo esimangalisayo, uJesu waphathwa njengendoda ejwayelekile futhi baletha enkantolo sengathi unecala. Lokhu kukhombisa kanjani Abantu bavame ukukhohlwa usizo abalutholayo.
</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 26,
verse: ` <b>(25) IVangeli likaMathewu, Isahluko 10, 20 isiqendu.</b>`,
meaning: `<b>
(10:20) Ngoba ngeke kube ukhuluma, kepha umoya we Uyihlo ekhuluma ngawe. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ngenkathi leli vesi lingabonakala lijwayelekile, libambe okukhulu Ukuhlakanipha okungokomoya. Kubalulekile ukuqonda ukuthi ithemu <strong>'uyihlo' </strong>kuleli vesi alibhekiseli kumuntu Ubaba wezemvelo kodwa kuYise ongokomoya weJeevatma. I-Atma, Ubaba weJevatma, uhlala ngaphakathi emzimbeni waqondisa. Kubalulekile ukukhumbula ukuthi uYise we-ATMA nguParamatma. Wonke umuntu omele uJeevatma. Kuya nge karma yomuntu, i-atma ithonya futhi ibaqondise (Jeevatma), wabangela ukuba bathole uKarma (izono kanye ne-punja karma). I-Atma ilawula yonke imisebenzi yomzimba futhi inquma ubumnandi nobuhlungu obutholwa yiJeevatma ngaphakathi emzimbeni.

  UJeevatma akagcini ngenkuthalo kunoma iyiphi umzimba Imisebenzi. Naphezu kokungabi nanconywa okusobala, uJeeva buthule uhlangabezana nemiphumela yezenzo zayo, injabulo futhi usizi. Yize uJevatma aziveza njengomuntu ngamunye Emzimbeni, antula amandla okwenza okuthile. Esikhundleni salokho, kunjalo Atma ohlela yonke imisebenzi ngaphakathi emzimbeni. Ngenxa ye ukungazi, uJeevatma ukholelwa ngephutha ukuthi nguyena enza izenzo ngokulalela amagama athi 'Ahamu' (ama-ego). Eqinisweni, i-Atma ingumlingisi weqiniso ngaphakathi komzimba, kepha uJeevatma kuvame ukukhohlwa ukuba khona kwe-ATMA futhi kukholwa ukuthi ungumenzi konke. Ngokwesimo sevesi, uJesu wahlose uku khanyisa labo abangazazi. Wadlulisa, <strong>"uyihlo, U-Atma, uhlala ngaphakathi kwakho futhi ukhulume ngayo wena. Akuyena okhulumayo. "</strong> Ngokusho kwaleli vesi, kuyabonakala ukuthi hhayi kuphela imisebenzi eyenziwe kodwa futhi Amagama akhulunywayo awachazwa yiJeevatma. UJesu wathi kungukungazi kwabantu ukukholelwa ukuthi bakhona ekhuluma, kanti kungukuthi atma abonisa amagama. UJeevatma akenzi izenzo ezenziwa yishumi izingxenye zomzimba wenyama (izinhlaka zezenzo); kungukuthi Ifeza konke ngalezi zitho zomzimba. Ukubona leli qiniso kufanekisela uhlobo oluphakeme kakhulu lokuhlakanipha phakathi kwakho konke ukuhlakanipha.</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 27,
verse: ` <b>(26) IVangeli likaMathewu, Isahluko 10, 30 isiqendu.</b>`,
meaning: ` <b>
(10:30) Ngisho nezinwele zekhanda lakho konke kubaliwe.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ethempelini, abantu bavame ukuhlanganyela imicabango yabo noNkulunkulu, Ukukholelwa ukuthi uNkulunkulu akazi ngemizwa yabo engaphakathi. Bona Khombisa inhlonipho nokumangala lapho usethempelini kodwa ungahle uziphathe ngokuhlukile ngaphandle. Isibonelo, ngemuva kokushiya ithempeli, abanye abantu bangahlala izihlalo ezimbili zesitimela ngaphandle kokuvumela abanye abagibeli bahlale, bebonisa indlela yokuziphatha engafanele. Leli isenzo sivela emcabangweni ongaqondile wokuthi uNkulunkulu uyazi Izenzo ngaphakathi kwethempeli kodwa hhayi ngaphandle. Noma kunjalo, Yini <strong>abaningi abaye yehluleke ukuqaphela ukuthi uNkulunkulu u-Omniscient futhi Omnipresent, ukuqonda zonke izenzo, ngisho nakuningi izindawo ezivikelekile</strong>. Leli vesi elikhulunywe uJesu liqokomisa inkazimulo kaNkulunkulu futhi ukhonza njengesikhumbuzo sokuthi ukuqonda kukaNkulunkulu inwebeka yonke indawo.

  Leli vesi liqokomisa ukugcwala okungavamile kukaNkulunkulu ngakubantu, njengoba uNkulunkulu esungule uhlelo oluqondile lwe nke izici zokuba khona komuntu. Lolu hlelo lwaphezulu kuhlanganisa ngisho nemininingwane emincane, efana ne-'Karma I-Visarga'-isigaba seKarma sibe izingxenye ezincane. Nge-karma UVisarga, uNkulunkulu unquma ukuthi umuntu kangaki umuntu kufanele Vula futhi uvale izinkophe zabo, uqinisekise ukubalwa okuqondile. UNkulunkulu futhi ibeka inani lezinwele emakhanda ethu nalapho futhi Izinwele kufanele ziphume, zonke ngeKarma-Visarga. Ngokwengeziwe, UNkulunkulu uhlobisa izinselelo abantu ababhekana nazo kanye naku ubukhulu bokuhlupheka kwabo. EBhagavad-Gita, INkosi Iyaqinisekisa Ukuthi uNkulunkulu unolwazi ngakho konke okwenzekile, kuyenzeka, futhi ngeke kwenzeke emhlabeni. Lokhu kuqinisa i- umbono wokuthi thakukho lutho olungaphezu kokuqwashisa ngoNkulunkulu.
</div></div>

</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 28,
verse: ` <b>(27) IVangeli likaMathewu, Isahluko 10, 34th, Amavesi angama-35 nama-36th.</b>`,
meaning: `<b>
(10:34) Ungasho ukuthi sengize ukuletha ukuthula emhlabeni. Angizelanga ukuzoletha ukuthula, kepha a inkemba.
<br><br>
(10:35) Ngoba ngizele "umuntu ngokumelene naye Ubaba, indodakazi emelene nonina, indodakazi Umthetho ngokumelene noninazala wakhe.
<br><br>
(10:36) Izitha zomuntu kuzoba amalungu akhe Ungumnikazi wendlu.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ngenkathi kungenzeka kungabi kuhle ukusho ukuthi uJesu ngamabomu kuhloswe ukudala izingxabano phakathi kwabantu, kusobala ukuthi lokho Izingxabano zivelile. UJesu weza ngenhloso yokuhola abantu abavela ngokungazi ukuhlakanipha kunokuhlwanyela. Wabelana ngokuhlakanipha kwakhe ngezinhloso ezinhle, kepha kuvame ukuholela Izingxabano phakathi kwalabo abangayiqondanga ngokuphelele izimfundiso. Kufana nokuthi amanzi abandayo afafazwa kanjani esihlabathini kuyapholisa, Ngenkathi amamitha arestones afudumele, aguqula ukubukeka kwawo, futhi Ukuphenduka ku-lime, ukwamukelwa kokuhlakanipha kukaJesu kuyahluka. Lezo Ngokuqonda okujulile kokuhlakanipha thola injabulo kuJesu ' Izimfundiso, ngenkathi zivela izingxabano phakathi kwabangenayo. Kwezinye amacala, lapho oshade naye efuna ukuhlakanipha, omunye ngoMeyi Ukungavumelani, okuholela ekungangeni kokungavumelani emindenini. Leli Umphumela ongalindelekile ungaholela ekwahlukanisweni ngaphakathi amakhaya, lapho obaba bangaphendukela khona amadodana, omama ngokumelene namadodakazi, kanye nonyoko kumadodakazi - phakathi Umthetho. Yize izinhloso zikaJesu zinhle, zihola ngokungafanele Kubantu bakhohlwa ubuhlobo babo nokukhuthaza ubutha. Leyo Kungani u-Jesu enikeza imbali, iphenduka amubi. Uma enika Izinkuni ezigoqiwe, ziba inkemba eqinile. Kubalulekile Qaphela ukuthi lo mphumela akuyona iphutha likaJesu, kodwa kunalokho umphumela yemvelo yomuntu kanye nethonya lama-gunas ahlukile.</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 29,
verse: `<b>(28)	IVangeli likaMathewu, Isahluko 10, 37 isiqendu.</b>`,
meaning: `<b>
(10:37) Noma ngubani othanda uyise noma umama wake waba ngaphezulu kunami ukungangifanele; noma ngubani othanda indodana noma indodakazi engaphezu kwami ayingifanele.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuyisisekelo esiyisisekelo semvelo yomuntu kubazali ukuthanda izingane zabo, njengoba kungokwemvelo izingane ukuba zithande abazali babo. Isibopho phakathi kwabazali nenzalo yabo kuvame ukuvezwa uthando olujulile, kudlula noma yikuphi okunye okunamathiselwe emhlabeni. Kodwa-ke, ingqondo yomuntu nayo ethonywe kakhulu yizimpawu zayo ezenzeka, ezaziwa ngokuthi gunas. Lapho umuntu ecwebezela <strong>uthando olukhulu ngokuhlakanipha Futhi uNkulunkulu</strong>, banamandla ngokwemvelo babheke ekuphishekeleni ukuhlakanipha kunokuba izinto ezibonakalayo noma zezwe. Iba kuyinselele ukubeka phambili ukuhlakanipha lapho uthando lomuntu lukhona ngokuyinhloko kuqondiswe kwenye indawo. Ingqondo yomuntu iyasebenza ngaphansi Ithonya lama-gunas ayisithupha amabi, afana nemijondolo eyenziwe yegolide nensimbi, ngokulandelana. Zombili lezi zinhlobo zeGunAs zisebenza inhloso yokubopha umuntu. Kodwa-ke, kubalulekile Qaphela ukuthi uthando oludlulele (i-guna enhle) noma umhawu (abakwaDala Guna) bahola umuntu ekuhlakanipheni. Okubaluleke Ngempela yintshisekelo yomuntu yangempela ekuhlakanipheni. Abayisithupha babi gunas ifaka ukuhaha (KAAMA), intukuthelo (Krodha), i-Avarice (Lobhe), I-Passion (Moha), ukuzikhukhumeza (Madam), kanye nomhawu (Matsara). Phakathi kwa-Qhathanisa, ama-gunas amahle ayisithupha ahlanganisa isisa (Dana), isihe (Daya), I-benevolence (audarya), Dispassion (Vairagya), ukuthobeka (vinaya), nothando (Prema).</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 30,
verse: `<b>(29)	IVangeli likaMathewu, Isahluko 10, 38th isiqendu.</b>`,
meaning: `<b>
(10:38) Noma ngubani ongathathi isiphambano sawo futhi ngilandela angingifanele.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  AmaKhristu ajwayele ukukhuluma futhi abambe inhlonipho ejulile Isiphambano. Kujwayelekile ukubona amaKristu agqoke isiphambano nxazonke izintamo zabo, futhi lolu phawu luba lubaluleke kakhulu kubo Ukukholwa. Kuyaziwa kabanzi ukuthi uJesu wabethelwa esiphambanweni futhi washona ku Isiphambano. Umbuzo ovela yikho amaKristu ebambelele kulokhu Bheka uphawu olusetshenziswa njengethuluzi likaJesu ' Ukubulawa. Impendulo ilele esimweni esijulile sokulandela umuntu omkhulu kunabo futhi enze izenzo zabo. Kodwa-ke, akekho umuntu ocabanga ukuthi kungani isiphambano, uphawu ezihambisana nokufa kweNkosi, kufanele ibanjelwe phezulu ukubheka. Ngempela, kungaba ngamabomu noma ngokungazi, lapho Kubukeka sengathi kuyigebe ekuqondeni imininingwane yesiphambano. Ake sithathe isikhashana ukucabanga ngesiphambano futhi sazi Imininingwane ejulile.

  Evesini, uJesu waxwayisa ngokuthi <strong>ukuthatha isiphambano uhola umuntu ukuba ahambe ngendlela kaNkulunkulu, kuyilapho isiphambano sikukhetha phezulu, kusho ukuhamba ngendlela kaSathane</strong>. Umlayezo ofanayo kudluliswa lapho uJesu ethi, "Noma ngubani ongathathi Isiphambano ungilandele angingifanele. " Lokhu kusho lokho Labo abangathwali isiphambano abamfanele uNkulunkulu. Ikona kubalulekile ukukuqonda lokho, ngokusho kwalombono, Isiphambano sifanekisela uSathane. Ukuhlola okuningiliziwe kwe Lo mqondo, sicela ucabangele ukufunda incwadi yami, "yisiphambano unkulunkulu?

  Isiphambano simelela inyoka ezifanekisweni ezingokomoya. Kuvamile ukudweba ukufana phakathi kwenyoka noSathane, nejuba nge-atma. USathane, noma uMaya, resokodonga ngaphakathi kwe umzimba womuntu futhi uvame ukuholela abantu phansi indlela ye ukungazi. Lapho uSathane ephakamisa umuntu, kusho umuntu ubuthakathaka kanye nokubusa kukaSathane. Ngakolunye uhlangothi, lapho a umuntu uphethe isiphambano, kukhombisa ukuthi umuntu ngamunye amandla adlula ekaSathane. Yingakho uJesu, nakanjani amaphuzu empilweni yakhe, ephethe isiphambano ukukhombisa lokho Ubuntu bunganqoba uSathane. Ngokufanayo, lapho uJesu ekhona Kubethelwe esiphambanweni, kwabonisa isiphambano ukumthwalela, Ukubonisa ukuthi uSathane angaheha noma ngubani endleleni yawo. Ukuhamba indlela yokuhlakanipha, abantu kumele bazimisele ukuthwala okwabo Isiphambano, njengoba uJesu agcizelelwa evesini, "Noma ngubani ongasho lutho Thatha isiphambano sabo ungilandele angingifanele.

  Sifanekisela uSathane ngesimo sesiphambano, okuyinto imele inyoka enkulu noma inyoka, emuncy emcabangweni we Maya. UMaya unamandla okuholela abantu abathile baduka ku indlela eya kuNkulunkulu nasekungazini. Ukunqoba okunjalo Ithonya, kufanele siqale siqonde Maya. Lapho kuhlaziya, maya ingakhonjwa njengeqoqo lama-gunas ngaphakathi kwekhanda lomuntu. Noma ngubani ovumelanisa nezenzo zawo ngalezi zibhamu zingahlosile landela indlela yokungazi, empeleni evumela iMaya ukuba lawula isifundo sabo. Ukunqoba iMaya, umuntu kufanele athole kahle ngaphezulu kwe-gunas, yenqaba ukudonswa yithonya labo. Nini Umuntu ufinyelela lokhu, kungashiwo ukuthi bahlule UMaya, noma uSathane, esebenzisa amandla abo angaphakathi. Umuntu onjalo angakwazi Thatha iMaya bese uhamba indlela yokuhlakanipha. Ngakho-ke, uJesu ' Umlayezo evesini ugcizelela lokho ngokunqoba 'Cross'-omelele uMaya - umuntu uyabafanele uNkulunkulu UGrace. Kubalulekile ukuqaphela ukuthi 'isiphambano' akuyona nje uphawu lokhuni kodwa kunalokho ukumelwa kwePython, iphawu lukaSathane. Ngokusho kwabadala, isiphambano sifanekisela UMaya, ngenkathi inyoni imi njengophawu lwe-atma. Ngesikhathi sikaJesu ' Ubhapathizo nguJohane, kwathiwa umoya (atma) wehla njengejuba futhi ungene emzimbeni kaJesu. Kulesi simo, 'isiphambano' imele amandla aphikisayo ku-atma. Ngakho-ke, uJesu ' ukufundisa kugcizelela ukuthi lapho umuntu, esebenzisa ukuhlakanipha namandla angaphakathi, kuthwala 'isiphambano' futhi uhambe Indlela yokuhlakanipha, baba okufanele uNkulunkulu abe yi-Paraloka.</div></div>

</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 31,
verse: `<b>(30)	IVangeli likaMathewu, Isahluko 10, 40 isiqendu.</b>`,
meaning: ` <b>
(10:40) Noma ngubani otholile uyamukela, futhi noma ngubani ongemukelayo ethola lowo othunyelwe mina. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ngenkathi abantu beJeevatmas, badalwa Atma. UParamatma, noma uMoya oNgcwele, wadala zombili i-Atma futhi Prakruti. Kodwa-ke, lapho i-paramatma ifakazela njengendoda, umbuzo uphakama ukuthi ubhekise kuye njenge-atma noma i-jeevatma. Uma uNkulunkulu ethatha isimo somuntu, angabhekwa njengeJeevatma kususelwa ekubukekeni kwakhe. Lapho abantu (jeevatmas) dlula, ku-Atma uwahlanganisa kubo uqobo. Njengoba nje ku-atma kubandakanya abantu, futhi kubandakanya uNkulunkulu lapho yena Ibabaza njengendoda futhi ivela njenge-jeevatma. Lo mqondo kubhalwe evesini, <strong>"Noma ngubani owamukela ethola mina. "</strong> Lowo owawugada njengomuntu ongumuntu (Jeevatma) uwukuthi, Eqinisweni, uNkulunkulu. Kodwa-ke, nguNkulunkulu owathumela le ndoda, efana UJesu. Lapho i-ATMA ihlanganisa indoda efana ne-jeevatma, Kunjengokungathi uNkulunkulu, umthumeli wendoda, ufakiwe ngaphakathi Atma. Ngakho-ke, evesini, uJesu wadlulisela, <strong>"Lowo o ngithola mina ngithola lowo ongithumileyo. "</strong></div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 32,
verse: `<b>(31)	IVangeli likaMathewu, Isahluko 11, 9th isiqendu.</b>`,
meaning: ` <b>
(11:9) Uphume wabonani? Umprofethi? Yebo, ngiyasho Wena, futhi (ngikhona) ngaphezu komprofethi..</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kungashiwo ukuthi umprofethi (Pravaktha) ungomunye fundisa ulwazi olungatshelwa muntu. Phakathi kwa Telugu, '<strong>Pra'</strong>des ukubaluleka, futhi '<strong>vaktha' </strong>kusho lowo okhulumayo. Ngakho-ke umprofethi othile ungumuntu ofaka okubalulekile Ukuhlakanipha. Kodwa-ke, uJesu wamemezela ukuthi ungaphezu kwe umprofethi. Munye kuphela odlula umprofethi kuphela, kwembula ukuhlakanipha ngaphesheya kwamandla wabaprofethi. I-Divine imibhalo isho, <strong>"UNkulunkulu akazange anikeze ukuhlakanipha kwakhe kunoma yimuphi umuntu. Ukuhlakanipha kukaNkulunkulu kuhlala kungaziwa konke ngaphandle kukaNkulunkulu. " </strong>Ku Umbhalo wokugcina waphezulu, kushiwo evesini 3: 7 ukuthi uNkulunkulu kufanele dlulisa ukuhlakanipha kwakhe. Ngokusekelwe kulokhu, kuyaqondakala ukuthi Yize uNkulunkulu eza njengomprofethi ukuze ahlanganyele ukuhlakanipha, uphakeme kunomprofethi. Umbhalo wokugcina waphezulu, ngo-42: 51, umemezele<strong>, "uNkulunkulu akakhulumi ngqo Abantu. "</strong>Kodwa-ke, uNkulunkulu angabonakalisa njengendoda efihliwe futhi dlulisa umyalezo wakhe. Noma nini lapho uNkulunkulu ethatha isimo somuntu, Noma ngabe kubizwa ngokuthi ngumprofethi, ungaphezu komprofethi. Phakathi kwa- ukukhanya kwesitatimende sikaJesu kuleli vesi, kuba sobala ukuthi UJesu wedlula abaprofethi futhi umele ukubonwa kwe UNkulunkulu. Naphezu kokumemezela obala ukuthi ungubani Izikhathi, abaningi bahlulekile ukumbona.</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 33,
verse: `<b>(32)	IVangeli likaMathewu, Isahluko 11, 28 isiqendu. </b>`,
meaning: ` <b>
(11:28) Wozani kimi, nina nonke enikhathele futhi Sisindwa, futhi ngizokunika ukuphumula. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuyindlela evamile yokuthi abantu abakhathele lapho uphethe isisindo somzimba. Kodwa-ke, Humans futhi ukuzwa ukukhathala ngaphandle kokunikeza noma yimuphi umthwalo obonakalayo. Umthwalo ongabonakali, kulokhu, yisono (karma), nawo wonke umuntu Ngubani owenza okuhlangenwe nakho kwaKarmic kuvame ukuzizwa ediniwe. Abantu bahlala njalo behlangana noKarma, ngaphandle kokulala lapho bekhululekile okwesikhashana kuyo. Ngisho nasemaphusheni, Ithonya leKarma Phepha, libonisa isimo sokusebenza njalo. Uma kucatshangelwa uhlobo olungapheli lwalo mthwalo, uJesu uyanzuzo Isimemo kubo bonke, esithi, <strong>"Woza kimi. Ngizonikela ukuphumula. "</strong>

  Umbuzo uphakama: Sikuthola kanjani ukuphumula lapho kuguquka KuJesu, unikezwe ukuthi njalo sithola ikarma? Le khasi Impendulo imi ngalendlela elandelayo: Lapho uJesu enikeza ukuhlakanipha kwaphezulu labo abamfuna, iKarma yabo bonke ababejwayelene nayo Lokhu kuhlakanipha kudliwa ngamandla okuhlakanipha. Ngokusebenzisa Ukubhujiswa kweKarma, abantu bakhululwa ngenxa yayo umthelela oqhubekayo, ukunciphisa ukubulawa kokuhlupheka, nokuhlinzeka phumula. Lesi simemo sinwetshwa kubantu bazo zonke izinkawu futhi Izinkolo, njengoba kufakazelwa uJesu zithi, <strong>"Bonke beza ku mina. " </strong>Abanye bangabhekisela kuJesu njenge-guru noma umprofethi ongumKristu. Kodwa-ke, umbhalela ukumfaka kuphela njengomKristu kungaba okungalungile, Njengoba ucingo lwakhe lubandakanya, ukumema abantu bazo zonke izizinda. Lezo owamukela izimfundiso zakhe wamfuna eboshelwe elebula lamaKristu. Njengoba uNkulunkulu noNkulunkulu Ukuhlakanipha kuyadingeka emhlabeni wonke, uJesu welula isimemo sakhe Kubo bonke, njengoba amemezele, <strong>"Nonke hozani kumina."</strong>
</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 34,
verse: ` <b>(33)	IVangeli likaMathewu, Isahluko 12, 17th, 18, 19, 19th amavesi angama-20 nengama-21.</b>`,
meaning: ` <b>
(12:17) Lokhu bekungukufeza lokho okwakhulunywa ngayo umprofethi u-Isaya.
<br><br>
(12:18) Nansi inceku yami engiyikhethile, Engikuthandayo, engijabulisa engijabulisa ngakho; Ngizofaka umoya wami yena.
<br><br>
(12: 19) Uzomemezela ubulungiswa (ukuhlakanipha) ku izizwe; Ngeke axabane noma amemeze; akekho ozozwa izwi lakhe emigwaqweni.
<br><br>
(12:20) Umhlanga olimele ungeke aphule, futhi u-wick oshayayo ngeke aphume, aze aze ukuletha ubulungiswa (ukuhlakanipha) kuya ekunqobeni.
<br><br>
(12:21) Ngegama lakhe izizwe zizobeka ithemba lazo. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cishe eminyakeni engama-350 edlule, indoda enkulu egama lingu UVeerabrahmam wabikezela izehlakalo nezinhlekelele zemvelo lokho base bezokwenzeka. Ngokufanayo, indoda enkulu egama lingu-Isaya kwabikezela ukuza kukaJesu. Uma sihlola amazwi ka-Isaya ngaphakathi Imininingwane, ubukhulu emazwini akhe bazokwaziwa yibo bonke. Yona Kwacaca ukuthi u-Isaya akhuluma ngabani. U-Isaya waphila abaningi iminyaka ngaphambi kokuba uJesu azalwe. Esahlukweni 13, u-Isaya udlulisele izinto ezimbalwa. Uma ubheka la mavesi, Uba sobala ukuthi uNkulunkulu, uMoya oNgcwele, wakhuluma ngoJesu. Ukuhlola amavesi lapho uJesu ayekhuluma ngayo ngaye Umbhalo namavesi lapho umoya ongcwele ukhulume khona UJesu, kuyabonakala ukuthi lowo owakhuluma ngoJesu (Umoya ongcwele) noJesu bayefana.

  Phakathi kwa-Ivesi lokuqala, lishiwo, "<strong>Nansi eyami inceku. "</strong> Kunezindlela ezahlukahlukene zensiza yokuthanda izinto ezibonakalayo, kepha Leli vesi alibhekiseli kwinkonzo yokuthanda izinto ezibonakalayo. Esikhundleni salokho, it Ikhuluma ngensizakalo yeParamatma. Kunefomu elilodwa kuphela yenkonzo kaParamatma, kanye ne-<strong>paramatma yangempela Inkonzo ifaka ukushumayela nokusakaza ukuhlakanipha kukaNkulunkulu kuyo abanye</strong>. Ngenxa yokuthi uJesu wayesakaza ngokuhlakanipha ukuhlakanipha kukaNkulunkulu ngenkuthalo, uMoya oNgcwele wamemezela, "Nansi inceku yami." Noma ngubani Kusakaza ukuhlakanipha kukaNkulunkulu <strong>kuba ngcono kakhulu uNkulunkulu.</strong> Ngakho-ke, uParamatma waveza uthando ngoJesu, ethi, <strong>"Ngiyamthanda yena futhi ngiyajabula nguye. " </strong>Lokhu kuzwakala kuchaziwe ngo-<strong>15:28, 29, no-30 embhalweni wokugcina waphezulu</strong>, lapho kukhona kuchaze ukuthi uMoya oNgcwele udala umuntu ngobumba Futhi uphefumulela umphefumulo wakhe (umphefumulo womoya ongcwele) ungene kubo. Kamuva, izingelosi zibona umuntu njengoNkulunkulu futhi gcoma phambi kwakhe. Ngakho-ke, ngokuya ngo-Isaya Amagama athi, "UMoya oNgcwele uyokubeka umoya wakhe phezu kwakhe," kuba kusobala ukuthi uJesu, ekucabangeni komuntu, umphefumulo we Paramatma.

  Ivesi le-19 lithi, "uzomemezela ubulungiswa ku izizwe. " Kubonakala sengathi abahumushi beBhayibheli besiNgisi kungenzeka usebenzise igama elinganembile. Kufanele ibhalwe <strong>'njengokuhlakanipha' </strong>esikhundleni <strong>'sobulungiswa.' </strong>Ubulungiswa buxhumene kakhulu ezweni lezinto ezibonakalayo, ngakho-ke, kungenzeka kube okungcono kakhulu Ithemu elifanele. Ngenkathi <strong>ukulunga nobulungiswa kuphathelene Izindaba zezwe, ukuhlakanipha ne-Dharma kuhlotshaniswa ne Paramatma</strong>. Ukusetshenziswa "kokulunga" kanye "nobulungiswa" esikhundleni salokho ka "ukuhlakanipha" kubonakala kuyiphutha lokuhumusha. Okuningi okunjalo Kuhlonziwe amaphutha, abukeziwe, futhi alungiswa.

  Ivesi le-19 lithi, "uzomemezela ubulungiswa ku izizwe. " Lapha, "ukumemezela" kusho ukushumayela noma ukufundisa. Ivesi kungaqondwa kangcono njengoba, <strong>"uzokusakaza ukuhlakanipha ku izizwe. " </strong>Lokhu kuchitshiyelwa kuqondanisa neqiniso lokuthi, ngemuva Ukuphila iminyaka engama-30, uJesu wafundisa ukuhlakanipha kwakhe cishe iminyaka emibili nezinyanga ezintathu, njengoba kuboniswe yileli vesi. Ngalesi sikhathi, UJesu wakushumayela ngokungenabugovu ngokuhlakanipha kwakhe ezindaweni ezahlukahlukene, elapha abantu abaningi abanayo izinhlobo ezahlukene zezifo. Wabuyisela ukubona ezimpumputhe, kwanika amandla izinyonga ukuba zihambe, zaphulukisa iziguli ezichoko. waze wavusa abafileyo. Naphezu kwezenzo zakhe eziyisimangaliso, Abanye basola uJesu ngokuba ngumthakathi futhi basola ngaye ukwenza uNkulunkulu. Noma kunjalo, uJesu akazange azibandane ukuxabana noma ukukhala, njengoba kuhloswe ngesitatimende, <strong>"uzokwazi hhayi ukuxabana noma ukukhala. "</strong>

  UJesu wadlulisela ukuhlakanipha kwakhe kulabo abasondela kuye Yena, nokho wenqabile ukumemeza emigwaqweni, njengoba kukhonjisiwe Evesini, <strong>"Akekho oyokuzwa izwi lakhe emigwaqweni." </strong>Le khasi Ivesi ligcizelela futhi ukuthi ngeke aphule umhlanga olimele, ukugcizelela ukuthi izenzo zakhe zazigxile kakhulu ekusakazeni Ukuhlakanipha. Ngaphezu kwalokho, leli vesi liqokomisa iqhaza likaJesu Ukuqinisekisa ukuthi amandla okuhlakanipha, wake wanikwa kumuntu, ihlala ibuyekezwa kuze kube yilapho ishisa yonke ikarma ezihambisana nalowo muntu. Njengoba uKarma eza ezahlukene amafomu, afaniswa nentambo eyakhiwe ngemicu eminingi, Ukuchaza ibinzana, <strong>"ngeke akhiphe ukumamatheka I-Wick. " </strong>Ngaphezu kwalokho, leli vesi libonisa ukulindelwa kwe abanye ngobuhlakani bukaJesu, besho, <strong>"egameni lakhe, izizwe uzobeka ithemba labo. "</strong></div></div>

</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 35,
verse: `<b>(34)	IVangeli likaMathewu, Isahluko 12, 31st isiqendu.</b>`,
meaning: `<b>
(12:31) Ngakho-ke, ngithi kuwe, zonke izinhlobo zesono nokunyundela kungakwazi Uxolelwe, kepha ukuhlambalaza umoya (Atma) ngeke uthethelelwe.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Leli vesi liba namandla athile emBhalweni. Lapho abantu beqonda ukuhlakanipha kukaNkulunkulu, lokho kuhlakanipha iguqula ibe ngumlilo (amandla okuhlakanipha). Lo mlilo unamandla ukushisa izono ezahlukahlukene (Karma). Ukwazi ukuhlakanipha kwaphezulu Ivumela abantu ukuthi bagweme izono ezihlobene ne-Atma. Kodwa-ke, kunjalo kubalulekile ukuqaphela ukuthi amandla okuhlakanipha angeke akwazi ukweba izono ukuvela kokuhlambalaza kanye nezenzo ngokumelene ne-ATMA; izono ezinjalo kungahle kuxoshele.</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 36,
verse: `<b>(35)	IVangeli likaMathewu, Isahluko 12, 32nd isiqendu.</b>`,
meaning: `<b>
(12:32) Noma ngubani okhuluma izwi ngokumelene nendodana ka Umuntu uzothethelelwa, kepha noma ngubani okhuluma ngokumelene UMoya oNgcwele ngeke uthethelelwe, kungaba kulo nyaka (yuga) noma eminyakeni yobudala (Yuga) ezayo.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Bonke abantu bavame ukubizwa ngokuthi amadodana womuntu; Abantu abavamile bayavuma ukuthi abazali babo bakhona umuntu. Kepha uJesu, naphezu kokubukeka kwangaphandle njenge Indoda ejwayelekile, akufanele ihlukaniswe njengeNdodana yomuntu. Lapho uJesu ekhuluma ngoyise, wachaza ukuthi uYise ubekhona efenitheke, hhayi njengendoda esemhlabeni. Ngenxa yalokho, uJesu kuhlonzwa ngendlela efanele njengeNdodana kaNkulunkulu. Ngokuphambene, Isikhathi esivamile esithi "Indodana yomuntu" ingafakwa kubo bonke abantu. Phezu kokuba UJesu wazethula ngegama nangokuhlangenwe nakho kwe Indoda ejwayelekile, ukubizwa kwakhe kwangempela yiNdodana kaNkulunkulu.

  Umnikeli wembewu womuntu ojwayelekile akayona umuntu. Noma yimuphi umuntu othi izingane azilona ubaba ngempela. I-Atma, okusebenza njengekhanda lomzimba futhi kwenziwe konke kusebenza ngaphakathi kwalo, ingumuntu onikela ngeMbewu nakubo bonke abaphilayo izidalwa. Ngeshwa, abantu abaningi abazi ngaleli qiniso. Ngenxa yalokho, indoda iyagomela ukuthi unguyise womunye umuntu, yize engeke enze noma yimiphi imisebenzi ngaphakathi umzimba. Kugcizelelwa kaninginingi ku-Okokuqala futhi Imibhalo yaphezulu yaphezulu yokuthi i-ATMA ingumenzi wazo zonke izinto. Ngenkathi umuntu, empeleni, akenzi izono ngoba yena ayikwazi ukwenza isenzo sokwenza, umbono ongelona iqiniso Ingabe umdwebi uholela ekuqongeleleni kwesono ku (Jeevatma) akhawunti. Ngakho-ke, umuntu uba nesibopho sezono anazo azenzile. Ngokufanayo, naphezu kokuba u-Atma abe ubaba weqiniso indoda, le ndoda ibhekwa njengendodana yomuntu lapho Uthi uYise uyindoda.

  UJesu uyazi ukuthi uYise unguYise we-paraloka. Ngokungafani nowo wonke umuntu, akazalwanga nge-atma. UJesu Uyavuma ukuthi uyiNdodana kaNkulunkulu, uMoya oNgcwele. Kuwo wonke umbhalo weBhayibheli, uJesu ubizwa ngokuthi yiNdodana kaNkulunkulu ngoba eshiwo ngokucacile kaninginingi ukuthi Ubaba wayenguMoya oNgcwele. Ukuhlakanipha KukaNkulunkulu Kunamandla Thethelela izono ezenziwa kubantu abajwayelekile. Noma kunjalo, Isono sokuhlambalaza iNdodana kaNkulunkulu ngeke sibe khona ngithethelelwe. Lesi sono sokuhlambalaza simiselwe ukubonwa Kwama-<strong>yugas amabili </strong>- eYuga yamanje (era) kanye ne-elandelayo munye.
</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 37,
verse: `<b>(36)	IVangeli likaMathewu, Isahluko 12, 36th no Amavesi angama-37.</b>`,
meaning: ` <b>
(12:36) Kepha ngithi kuwe wonke umuntu kuzofanele anikeze a akhawunti ngosuku lokwahlulela kuwo wonke amagama angenalutho bakhulumile.
<br><br>
(12:37) Ngoba ngamazwi akho uzotholwa, futhi Amagama akho uzolahlwa.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kusukela ngesikhathi sokuzalwa, abantu bazibandakanye kweziningi Izenzo nokukhuluma amagama amaningi. Bakholelwa ukuthi bangomuntu uqobo onesibopho sayo yonke itayitela elincane negama. Eqinisweni, banayo angenzi lutho. Kuyinto atma ngaphakathi komzimba owenza konke Izenzo. Kodwa-ke, izimfanelo ezingazi lutho ngamanga zonke izenzo nezwi ziye ngokwazo, futhi ngenxa yalokho, Imiphumela yeKarmic yezenzo zabo namazwi ayabalalisa kubo. Utma Izitolo zonke ze-karma eziqoqiwe eKarma Chakra futhi uyihlole ngosuku lokufa. Ngalolu suku lokwahlulela, atma ihlola wonke amadizili kanye nezwi lomuntu ngamunye, enesisindo izono ne-punya ezihambisana naleso naleso. Umuntu uthathwa njenge UGnani (umuntu ohlakaniphile) uma bethola ukuhlakanipha empilweni, futhi Ngakolunye uhlangothi, umuntu uthathwa njengongenalwazi uma enza ngezenzo ngokungazi. Ngaphezu kwalokho, i-Atma ibheka ukuthi umuntu uthole ukuhlakanipha (uGnani) noma uhlala ngokungazi. Ukwahlulela kusekelwe esimweni somuntu ngamunye njenge UGnani noma Ongenalwazi, Ukunquma Impilo Yabo Elandelayo ngokufanele. UMoya oNgcwele awehluleli umuntu osuselwa Karma. Yi-Atma, ebhekele yonke imisebenzi emzimbeni, ehlulela umuntu ngosuku lokufa futhi aqondise Jeeva empilweni elandelayo. Lolu suku lwaziwa ngokuthi '<strong>ukwahlulela usuku '</strong>noma' <strong>usuku lokugcina, </strong>'lusebenza njengosuku lokuqala lwempilo elandelayo (usuku lokuzalwa). Ukubona ukuthi i-ATMA yi-arbiter enkulu kunazo zonke ku- Izinsuku zokugcina nezokuqala zokuphila, umuntu kufanele aqonde ukuthi zingcwele Umoya awuhlanganyeli kulezi zinqubo. Usuku lokugcina lungakwazi kubhekiswe kuyo njengosuku lokubala iKarma. I-Atma yiyona owenza yonke imisebenzi yomzimba. Ukuqonda lokhu, uma Umuntu ukholelwa ukuthi abakenzi mathupha, bona, bona azithathwa njengesoni noma umuntu omuhle. Kunjalo kubalulekile ukubona ukuthi i-atma inquma i-karma in a Izenzo zomuntu futhi ziziqondise ekuzalweni okulandelayo. Okwenzayo Emicabangweni yomuntu, bayohlulelwa njenge-gnani, abazi, balungile, noma isoni.</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 38,
verse: `<b>(37)	IVangeli likaMathewu, Isahluko 12, 40 isiqendu.</b>`,
meaning: ` <b>
(12:40) Ngoba njengoba uJona ayesezinsuku ezintathu nobusuku obuthathu Isisu senhlanzi enkulu, kanjalo neNdodana yomuntu iyoba ngabathathu izinsuku nobusuku obuthathu enhliziyweni yomhlaba. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Leli vesi lidonsela ukufana phakathi kwemicimbi kwandulela isikhathi sikaJesu kanye nokuvela okuprofethwe. Yona Amanothi athi uJona, ngemuva kokugwinywa yinhlanzi enkulu, ehlala Ngaphakathi kwesisu sayo izinsuku ezintathu nobusuku obuthathu. Ivesi futhi kuprofethathi, "uJesu uyoba izinsuku ezintathu nobusuku obuthathu ku inhliziyo yomhlaba. " Ngenkathi kunembile ukuthi uJona uchithe ezintathu izinsuku nobusuku obuthathu enkineni, akuqondile ukusho lokho UJesu, iNdodana yomuntu, waphila isikhathi esifanayo enhliziyweni womhlaba. Ngokomzopha, uJesu wabethelwa esiphambanweni NgoLwesihlanu kusihlwa futhi wavuka kwabafileyo ngaphambi kokusa ngeSonto ngeSonto ekuseni. Ngokwemibhalo Engokomlando, kungenzeka ukuthi uJesu wayekhona Kubethelwe phakathi kuka-3: 30 P.M. kanye 4 P.M. NgoLwesihlanu, nomzimba wakhe wabekwa ethuneni ngoLwesihlanu kusihlwa. Ngenxa yalokho, uJesu wayengekho ethuneni ngesikhathi sasemini ngoLwesihlanu, kodwa kunalokho NgoLwesihlanu ebusuku kanye nonke ngoMgqibelo. Uvuko kuthiwa sekwenzeke ngaphambi kokusa ngeSonto. Ngakho-ke, UJesu wachitha uLwesihlanu ebusuku kanye nosuku lonke ngoMgqibelo avuka kwa bafileyo ekseni ngeSonto.

  Leli vesi libonakala libonisa ukuthi uJesu wembelwa ubusuku obubili kuphela nosuku olulodwa. Ngenxa yalokho, leli vesi ku umBhalo ungabonakala ungalungile, ukhulisa ukungabaza mayelana ukunemba. Noma kunjalo, leli vesi emBhalweni laphezulu kubhekwa njengento enembile ngokungapheli. Lapho abanye bebuzwa ubuqiniso baleli vesi elithile, nami ngithole umuzwa wokungabaza. Sengishilo ukuthi alikho indawo yokuba iqiniso Ngaphandle kweqiniso kulesi sigwebo, bekufanele ngiphendule lokho abanye ungibuze. Noma kunjalo, ukukhumbula ukuholwa kuMathewu 10:20, <strong>"ngakho Awusiye ozokhuluma, kepha umoya we Ubaba wakho ukhuluma ngawe, "</strong>ususa isidingo sokwesaba ekunikezeni impendulo. Ukuqonda ukuthi umoya, noma i-Atma, yiyona ephendula imibuzo nokunikeza izimpendulo. Nga-Jeevas, indima yethu ukulalela nokuqonda ukuthi yini i-atma Ukuxhumana.

  Lowo owayebizwa ngokuthi indodana yomuntu, kuyo Iqiniso, iNdodana kaNkulunkulu. Yize sivame ukufaka ilebula uJesu njenge Ndodana kaNkulunkulu, kubalulekile ukubona ukuthi akayena indodana ka Noma yimuphi umuntu kodwa uNkulunkulu uqobo. Lokhu kushiwo kwenziwa nge Ukuqiniseka, kwahlelwa ekuqondeni ukuthi unguNkulunkulu emzimbeni. Ngenkathi umzimba owakhiwe uNkulunkulu wabhekana nokufa, Uzimu ngokwakhe akafi. Eqinisweni, kunezinhlobo ezine zokufa: ukufa kwemvelo, ukufa okungeyona okungokwemvelo, ukufa kwesikhashana, kanye ukufa ekugcineni. Ngenkathi iningi labantu lijwayelene nolokuqala Thayipha, labo abanokuhlakanipha okungokomoya, noma 'gnanis,' bazi konke izinhlobo ezine. Ukufa kokugcina kwenzeka lapho uNkulunkulu ethatha umuntu ifomu noma lapho umuntu ethola uMoksham, ehlangana noNkulunkulu. Naphezu kwenkolelo ebanzi ekufeni kukaJesu esiphambanweni, cha umuntu angasho ngohlobo oluthile lokufa yena onolwazi.

  Kuleli vesi, kushiwo ukuthi uJesu wayesenhliziyweni ye Umhlaba izinsuku ezintathu nobusuku obuthathu, nokho akubonisi ngokusobala yisho ukufa kwakhe. Ngesikhathi ebethelwa kwakhe, inkolelo ekhona Ukuthi wayeseshonile esiphambanweni. Kodwa-ke, lapho uqhamuka kusukela ethuneni ngeSonto ekuseni, uJesu wathi akazange enza okuthile ngife ukufa. Ukubhekana nokungabaza kwabafundi bakhe, Wabonisa amamaki ezipikili ezansi nasezinyaweni zakhe, kanye ngesilonda esivela emkhombeni, ukukwenza kwacaca ukuthi wayengenayo Wafa. Noma kunjalo, amarekhodi omlando aqinisekisa ukuthi umzimba wakhe wawukhona yehliselwe phansi esiphambanweni futhi ibekwe ethuneni ngemuva kokushona kwakhe NgoLwesihlanu kusihlwa. Lokhu kubonakala okubonakalayo, lapho afela khona NgoLwesihlanu kuze kube ngeSonto kube sengathi angafanga, ishukumisa imibuzo mayelana nesitatimende esibonakala sengathi iqiniso Ukuthi <strong>wayezoba izinsuku ezintathu nobusuku obuthathu enhliziyweni womhlaba</strong>. Ngokwe-12: 40, wayengekho lapho ubusuku obuthathu futhi izinsuku ezintathu, kodwa esikhundleni salokho kwakukhona kuphela ubusuku obubili neyodwa usuku. Ukuhlola isizathu ngemuva kwalokhu kubonakala kungahambisani yembula iqiniso elijulile elifihlwe ngaphakathi kokubonakala amanga. Ake siqhubeke nokuhlola ukuthi iqiniso lifihlwe kanjani Ngaphakathi kwalokhu kungqubuzana okusobala.

  Kuliqiniso ukuthi uJesu wafela esiphambanweni, kepha akekho owaziyo Ukuthi <strong>kwakungukufa isikhashana</strong>. UJesu wabhekana nesikhashana Ukufa kwezinhlobo ezine zokufa nokuvuka kwangaphambilini ekuseni kusuka ekufeni kwesikhashana. Wazisa abafundi bakhe ukuthi Wayengafile. Ubengeke avuke futhi uma ayenayo wabona ukufa kwemvelo. Kodwa-ke, wasukuma elesithathu usuku ngoba athole 'ukufa okwesikhashana.' Ngakho-ke, umbono wokuthi UJesu wafela esiphambanweni ngumbono ongaqondile futhi hhayi iqiniso. Ngokufanayo, umbhalo uthi uJesu wayesethuneni lakhe Izinsuku ezintathu zinembile kodwa zivumela ukuqonda okujulile.

  UJesu ukhona ngaphakathi komzimba njengoJevatma, ngenkathi ku-Atma, Ubaba wabo bonke, uhlala futhi ngaphakathi. UJeevatma uhlangabezana ne imiphumela ye-karma ngaphakathi komzimba ngamunye womuntu, ngenkathi ku-atma yenza isenzo esidingekayo ngokuya nge-karma. Atma igcwele umzimba wonke, kanti iJeevatma itholakala ngaphakathi ikhanda. I-ATMA Exerts Ukulawula Umzimba Kube Yishumi Lawo izingxenye nezitho. Ubungqabavu bomuntu buvame ukuhlotshaniswa ngokunyakaza komzimba, futhi umuntu uthathwa njengophila lapho umzimba uyanyakaza. Ngakolunye uhlangothi, lapho izingxenye eziyishumi nezitho zomzimba yeka ukusebenza, kuhambisana nokungabikho kokuphefumula, Umuntu uthathwa njengofile. Uma kwenzeka kufa kwemvelo, zombili-Atma neJevatma baphuma emzimbeni, okuholele ku kungasebenzi komzimba ngenxa yokungabikho kwe-Atma.

  Endabeni yokufa isikhashana, noma i-atma noma UJeevatma usuka emzimbeni. U-Atma Ufuna a ukuncipha, ukuncipha kusuka emaphethelweni angaphandle kusayizi omncane, futhi ungena ekhanda ngokufanayo neJevatma. Ngalesi sikhathi, akekho kokusebenza kwezitho zomzimba, nokuphefumula kuyaphela, kunikeze ukubukeka kokufa. Indoda ivame ukubonwa njengefile kusukela zombili imisebenzi yangaphandle nangaphakathi kwangaphakathi ziyeka. Uvuko uvela lapho ku-atma, eqala kabusha umsebenzi wayo ojwayelekile, kuvela futhi kuqala ukusebenza futhi. Lesi simo sithi kuboniswe endabeni kaJesu. Ngesikhathi sokubethelwa kwakhe, atma Inenkontileka ngaphakathi emzimbeni wakhe, igcina lesi simo sangoLwesihlanu ebusuku kanye nonke ngoMgqibelo. Ekuqaleni kwelanga ekuseni, atma kuphinde kwaqala umsebenzi ojwayelekile, okuholela ekuqubukeni kukaJesu kusuka Ithuna Liphila. U-ATMA uhlangabezana <strong>nokufa kwesikhashana </strong>kuphela ubusuku obubili nosuku. Ngenkathi u-Atma emzimbeni kaJesu wawukhona ithuna ngobusuku obubili nosuku, kubuye kuthambe ukukusho lokho UJesu (Jeevatma) wayesethuneni ubusuku obuthathu nantathu izinsuku, ezibonisa inqubo engaqondakali ngokuphelele ngathi. Ake sibheke Kwakuyini.

  Kungashiwo ukuthi uJesu wavuswa ngenxa ka-Atma izenzo ngaphakathi emzimbeni wakhe. Kodwa-ke, ngaphambi kokuthi u-Atma afe ku Isiphambano, uJeevatma wayesengcwatshwe emzimbeni. Le khasi ukuxhumana phakathi kukaJeevatma noBuddhi bahlukaniswe ngaphakathi Isidudu sikaJesu ngemuva kokufunda ngokuboshwa kwakhe Lwesine. UJesu wangena ezweni elingaziwa, ngokuphelele ungazi ukuboshwa kwakhe, ukuqulwa kwecala, ukushaywa, nokubethelwa, empeleni ukungcwatshwa ethuneni lomzimba wakhe. Wahlala engazi lutho izinsuku ezintathu, njengokungathi ethuneni. Ngaphandle kwalokhu, i-ATMA yenziwa konke imisebenzi edingekayo emzimbeni, kepha uJesu wayenganaki kulokhu Izenzo. Ukuvimbela uJesu ekuboneni noma yibuphi ubuhlungu noma Ukuhlupheka okuhambisana nokushayisana nokubethelwa, kuthunyelwe ku-Atma kuye esifundazweni esingaziwa, esifana nokulala. Jeevatma wahlala wangcwatshwa emzimbeni waze wamvusa ku-Atma NgeSonto ekuseni. Ngakho-ke, leli vesi lithi, "uJesu wayekhona izinsuku ezintathu nobusuku obuthathu. " Abantu babazi ukuthi uJesu ' isidumbu sabekwa ethuneni, kepha uJeevatma emzimbeni wakhe ungene esimweni sokungaziwa ngaphambi kwalokho. Ngemuva kwalokho, uJesu ' U-Atma wahlangabezana nokufa kwesikhashana ngoLwesihlanu kusihlwa. Kodwa-ke, abantu, ababekwazi ukugcina izinto ezibonakalayo kuphela, zazikhona ungazi ngokusebenza kwe-ATMA neJeevatma emzimbeni kaJesu. Kuliqiniso ukuthi uJesu wayesethuneni izinsuku ezintathu nantathu Ubusuku, futhi u-Atma wakhe wayesethuneni lobusuku obubili nosuku.
</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 39,
verse: `<b>(38)	IVangeli likaMathewu, Isahluko 13, 13 14th, namavesi ayi-15.</b>`,
meaning: `<b>
(13:13) Yize bebona, ababoni; nokho Ukuzwa, abazwayo noma baqonde.
<br><br>
(13:14) Kubo kugcwaliseka isiprofetho se-IUSaiya: Wena uzohlala ezwa kodwa angalokothi aqonde; uzokwenza kanjalo hlala njalo kodwa ungalokothi ubone.
<br><br>
(13:15) Ukuze inhliziyo yale nto isibizelwe; Azizwa nezindlebe zabo, futhi zivale amehlo abo. Ngaphandle kwalokho, bangase babone ngamehlo abo, Yizwa ngezindlebe zabo, uqonde ngezinhliziyo zabo, Futhi phenduka, futhi ngangibaphilisa. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Umprofethi u-Isaya waprofeta ngalokhu isikhathi eside edlule. Kokubili ke manje, kube nabantu abangazi. Babona ngamehlo abo, bezwa ngezindlebe zabo, baphambukise babo IManas (ingqondo) ngisho nangemva kokuqonda neBuddhi yayo. Ngenxa yokuntula kwabo isithakazelo kulokho abakubonile, bezwa, futhi Kuyaziwa, uBuddhi wawo wehle ukugwema ukucekela phansi kwabo Karma ngoJesu. Izindlebe zabo ziba yisithulu ekuhlakanipheni kwaphezulu. Balalela konke okushiwoyo kepha abaqondi Lokho abakuzwayo futhi baboshwa ezintweni ezibonakalayo. Bona ingabona imali kuphela. Kubo, labo abanokuhlakanipha avele eyisiwula.</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 40,
verse: `<b>(39)	IVangeli likaMathewu, 15 isahluko, 7, 8, namavesi 9th.</b>`,
meaning: `<b>
(15:7) Nina bazenzisi! U-Isaya wayeqinisile lapho yena waprofeta ngawe.
<br><br>
(15:8) Laba bantu bangihlonipha ngezindebe zabo, kodwa babo izinhliziyo zikude nami.
<br><br>
(15:9) Bangikhonza ngeze; izimfundiso zabo imithetho yabantu nje.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Sivame ukuthi, "UZimu uyayazi le ndaba kaNkulunkulu; Abantu abazi. " UZimu angakhuluma ngaye, futhi Abantu bayokwazi lapho uNkulunkulu embula ukuthi ungamkhulekela kanjani Yena. Yize uNkulunkulu ebikezele ukuthi kufanele akhonze kanjani, Abaningi bashumayela izindlela ezahlukahlukene ezihluke kulokho uNkulunkulu akushilo. AmaSwamis amaningi ne-gurus afundisa abantu abadalwe ngumuntu Imithetho, njenge-Upadas nezinye izindlela zokukhulekela. UNkulunkulu Ngokwakhe wembula ukuthi "ama-upadesa kanye nokukhulekelwa kuyize" futhi ayikwazi ukuletha abantu eduze kwakhe. AmaSwamis amaningi futhi UGurus ukhuluma ngoNkulunkulu ezinkulumweni zabo kodwa ashumayele u-Anti-God Futhi ukukhulekelwa kukaNkulunkulu no-Upussas. Noma lezi UGurus noSwamis bakhuluma ngoNkulunkulu nokuhlakanipha, bayasebenza Ukukhulekelwa okuyize ngaphandle kokuqonda ukuhlakanipha kwaphezulu nokuhola abanye ukwenza okufanayo. Isibonelo, ukuzila ukudla akuhlangene Ngokukhulekela uNkulunkulu. Akukhona nje kuphela ukuthi bahlushwa ukuzila ukudla, Kepha futhi bahlupha uNkulunkulu ngaphakathi. Yindlela abanjalo balimaza uNkulunkulu ngaphakathi. Ngokufanayo, kwathiwa ku Bhagavad-gita eminyakeni eyizinkulungwane ezinhlanu eyedlule, <strong>"Awukwazi yazi futhi ungifinyelele ngokufunda ama-vedas, okwenza Iminikelo, noma ukwenza imihlatshelo (yajnas) kanye nokuncenga (Tapas). "</strong> EBhagavad-Gita, uNkulunkulu wathi abantu abaningi amhloniphe kakhulu kodwa amkhulekele ngeze, e-adharma indlela. INkosi ishilo into efanayo emBhalweni Ongcwele Manje.

  Amagama avela emlonyeni, kepha imizwa ivela Inhliziyo. Yize abantu abaningi bekhuluma kakhulu uNkulunkulu, abo Izinhliziyo azihambelani ngempela nezimiso zikaNkulunkulu. Naphezu kwabo Ndumiso, abanawo ama-Dharmas aNkulunkulu ezinhliziyweni zabo. Maya UDharmas wenzeka ezinhliziyweni zabo. Bakhuluma ngoNkulunkulu, kepha Lokho abakwenzayo ngaphansi kwethonya likaMaya kungukukhulekelwa kukaNkulunkulu. AmaGurus amaningi asho lokho abakushoyo njengokuhlakanipha kukaNkulunkulu, kepha Ukukhulekela abakwenzayo, njengoba uNkulunkulu asho, ngeke abahlanganyele NginoNkulunkulu. Kuphinde kwaxwayiswa ku-gita ukuthi lezo zikhulekelwe endleleni engafanele. Kodwa-ke, i-Peetadipatis edumile yenza Ama-Yajnas ayize, iminikelo, ukuzila ukudla, ukucwaswa kwe-vedic, nokuphenduka. IBHAYIBHILI Engcwele neBhagavad-Gita State ukuthi labo abahlanganyela Kule mikhuba kukude noNkulunkulu. Ngakho-ke, kusukela manje kuqhubeke, Masingakhazimulisi uNkulunkulu kuphela ngamazwi ethu kodwa futhi salandela ini UZimu wathi, kushiye laba yimibi kutfutfu kukhonta.
</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 41,
verse: `<b>(40)	IVangeli likaMathewu, Isahluko 15, 11 isiqendu.</b>`,
meaning: ` <b>
(15:11) Okungena emlonyeni womuntu akukwenzi zingcolise, kepha okuphuma emlonyeni wazo, ukuthi yilokho okungcolisayo. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Umuntu udla ukudla ngomlomo, nezinhlobonhlobo kokudla kukhulu, kungagcini ngohlobo olulodwa. Abantu bangaba ihlukaniswe njengezinhlobo zemifino noma okungezona imifino. Abaholi abangokomoya, njengeSwamis neGurus, bameli imifino njengendlela yokuqonda ukuhlakanipha kukaNkulunkulu, Ukugomela ukuthi ukugwema inyama kubalulekile. Lapha iNkosi wathi, <strong>"Okungena emlonyeni womuntu akukungcolisi zona, kodwa okuphuma emlonyeni wazo, yilokho uyamngcolisa. " </strong>Imibono ehlukahlukene ikhona ngokudla Imikhuba yalabo abasendleleni yokuhlakanipha kwaphezulu. - ukuncoma ukugwema ukudla okungewona imifino, kuyilapho abanye Phakamisa ukudla okukudla okuluhlaza kuphela, okungaphekiwe. -Phakamisa ukudla okwenziwe ngemifino kukhawulelwe ekudleni okukodwa ngosuku. Phezu kokuba le mikhawulo ehlukahlukene yokudla, kugcizelelwa ukuthi ukungcweliswa komhlaba noma ukungcola komuntu akunqunywa ukudla okudliwayo. Ngenkathi ukudla esikudlayo kungaba nomthelela Empilweni engokomzimba, akukutholeli ubumsulwa obungokomoya. Ukudla noma yikuphi ukudla okuthile akuvimbeli ukuphishekela umbuso waphezulu Ukuhlakanipha. Umuntu udla ukudla ngomlomo wakhe futhi uvelele amagama anesitho esifanayo. Ikakhulukazi, inqubo yokungena Ukudla ngomlomo akunankinga; Esikhundleni salokho, yi-Wamanje lokho kuvela emlonyeni onamandla okungcolisa umuntu. Ngenkathi umuntu ebamba ezenzweni nasezenhlosweni izinkulumo, imvelo yakhe yangempela yembulwa kuye amagama. <strong>Abadala baxhasa inkolelo yokuthi umuntu ophethe unkulunkulu Ukuhlakanipha kuthathwa njengokungcwele, kuyilapho lokho kuntula ukuhlakanipha kuyinto kubhekwe okungcolile. </strong>Umuntu onokuhlakanipha uthathwa njenge okumsulwa ngokusekelwe enkulumweni yabo. Ngakolunye uhlangothi, ukungazi kudalulwa Ngamazwi omuntu entula ukuhlakanipha. Ukungcola kwe umuntu othile ubonakalisa ngenkulumo yabo; Ngakho-ke, uJesu udlulise ivesi okungenhla. Ngokuya kwe-zimfundiso zebhayibheli neBhagavad-Gita, umuntu akayona kungcoliswe ngokudla abakudlayo. Esikhundleni salokho, yi-karma yomuntu leyo Inikeza ukondla. Labo abasendleleni yokuhlakanipha ayona eboshwe ngemikhawulo yokudla. Okubalulekile kuNkulunkulu akuyena Ukudla okuthize okudliwe kepha ukunamathela endleleni yokuhlakanipha. Ngakho-ke, noma ngabe yikuphi ukudla okudliwayo ngokuya nge Imikhuba yomuntu ayibalulekile kuNkulunkulu.</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 42,
verse: `<b>(41)	IVangeli likaMathewu, Isahluko 15, 12th no Amavesi we-13.</b>`,
meaning: `<b>
(15:12) Kube sekufika abafundi kuye, bambuza bathi: "Yenza Uyazi ukuthi abaFarisi bakhungathekile lapho Bezwa lokhu? "
<br><br>
(15:13) Waphendula wathi, "Zonke izitshalo ezazisezulwini Ubaba akakatshalanga uzodonswa yizimpande. " </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho iNkosi imemezela ukuthi umuntu akangcolisiwe ukudla futhi kukhululekile ukusebenzisa noma yikuphi ukondliwa ngenkathi kunjalo Ukunamathela endleleni kaNkulunkulu, abaFarisi baphakamisa iziphikiso. Bona wancintisana ngokuthi amazwi eNkosi awasweli ukuhlakanipha kwaphezulu futhi Kusobala ukuthi kubalwe. Ukumangalela uJesu ngokuthuthukisa ukungazi, Babuze umthombo wegunya lakhe ukufundisa okunjalo izimiso. AbaFarisi, bazibheka bakhulu Othisha, bagomela ukuthi banazo kuphela abanazo ezifanele igunya lokudlulisela ukuhlakanipha ngoNkulunkulu. Lapho ufunda Iziphikiso ZabaFarisi, abafundi bamnika uJesu ngokuthi isimo. Ukuphendula, wamemezela<strong>, 'Zonke izitshalo azitshalwanga NguBaba wami osezulwini uzosuswa yizimpande. </strong><strong>'</strong>

  Ubaba we Paraloka, Paramatma, umisa okwakhe I-Dharmas, engangena emhlabathini kodwa ingashabalali ngokweqiniso. Lapho ukwehla okunjalo kwenzeka, i-paramatma ifakazela njengoba I-Bhagavan ukuqinisa lezi dharmas. Njengoba ama-dharmas awenza buthaka, I-Adharmas iyanda. Ama-Dharmas anguNkulunkulu, ongokwaNkulunkulu, Ngenkathi u-Adharmas exhumene noSathane. I-Paramatma ihlwanyela imbewu ye-Dharmas, kanti uSathane uhlwanyela labo bakwa-Adharmas. Lapho emzimbeni we-paramatma wasemhlabeni ukudlulisa ama-dharmas akhe, USathane uthatha izindlela ezahlukahlukene ezinjengezazi, abaFarisi, Othisha, namaSwamis. Kulesi siga, uSathane unikeza okwayo inguqulo yokuhlakanipha, ekholisa abantu ukuthi ama-dharmas ayo kufana ne-dharmas kaNkulunkulu. I-maya's (USathane) Dharmas ngezikhathi ezithile ubukela phansi ama-dhamatma's dharmas. Abanye bangase Umbuzo Kungani ama-Dharmas kaMaya anganciphisa amandla kaNkulunkulu dharmas. I-Paramatma, njengobaba efeba, emzimbeni Bhagavan endaweni ethile nesikhathi sokusakaza okwakhe dharmas. Yize lezi dharmas zingathola amandla ngesikhathi Leyo nkathi, bancipha ngemuva kweminyaka eyizinkulungwane ezimbalwa. Lokhu Ngoba ukubuya kukaNkulunkulu njengoba uBhagavan kwenzeka kuphela lapho kuthathwa kunesidingo. Ngokuphambene nalokho, iMaya ngokuhlukile idala i-gurus futhi Swamis, ubakholisa ukuthi ukuhlakanipha kwako kuyafana Ukuhlakanipha KukaNkulunkulu. Ngabo, amaMaya asakaza ama-dharmas awo ngokuqhubekayo, ukuqinisekisa ithonya eliqhubekayo emhlabeni.

  Abantu bavame ukudonswa eSwamis, iGurus kanye neBabas abasebenza ngokungaguquki ngaphansi kwethonya likaMaya, kunokuba ukubukeka okungathandeki kweBhagavava engaziwa ngubani ifika kanye eminyakeni eyinkulungwane. Ngenkathi uNkulunkulu ebonakalisa koyedwa beka ngesikhathi, uSathane uzalelwa ezinhlotsheni ezahlukahlukene kwazo zonke eziningi Izindawo, zithatha izindima ezinjengeSwamis, iGurus kanye neBabas, ukunciphisa ngenkuthalo i-dharmas kaNkulunkulu. Ifana ne-Overrun yensimu nokhula oluthinta ukukhula kwezihlahla ezitshalwe ngumlimi, Ithonya likaSathane landa ezungeze uNkulunkulu elitshaliwe dharmas. Ukuze alwe nalokhu, uNkulunkulu, afana nomlimi okhuthele, zingenelela ngokususa ukhula, kufaka phakathi izimpande zazo, ukuze Qinisa izihlahla ahlwanyele. Kodwa-ke, ngokuhamba kwesikhathi, ukhula oluningi kungavuselelwa kabusha ngaphandle kokuhlwanyela ngenhloso. I-Paramatma, kufaniswe nomlimi, ekuqaleni watshala ama-dharmas akhe. USathane, ngaphakathi Jika, ukhuthaze ukhula (adharmas) ezungeze izitshalo zikaNkulunkulu (dharmas). Ukuncipha kwemvelo kwesitshalo sikaNkulunkulu kwenzeka ngaphansi kwe ithonya lokhula lukaMaya. Ukubhekana nalokhu, uNkulunkulu zingenelela, <strong>ekhipha ama-dharmas amaningi Maya </strong>anawo ngingene phezu kwe-dharmas yakhe. Lokhu kuqondanisa nomqondo we UJesu ' Isitatimende - Unkulunkulu okhipha ama-dharmas kaSathane babukela phansi okwakhe, ngaleyo ndlela baqinisa futhi bawakha akhe izimiso zaphezulu.</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 43,
verse: `<b>(42) IVangeli likaMathewu, 15th chapter, 14th verse.</b>`,
meaning: `<b>
(15:14) Bayeke; Bangabaqondisi abayizimpumputhe. Uma izimpumputhe zihola izimpumputhe, zombili zizowela emgodini. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abantu abangaphansi kwethonya likaMaya, kufaka phakathi Ama-pandites nabaFarisi, abayingxenye yeMaya, wagxeka uBhagavan Jesus ngaphandle kokuqonda uNkulunkulu Ukuhlakanipha. Azizi ukuhlakanipha kukaNkulunkulu, ukuntula noma yikuphi ukuqondisisa ku-dukuhlakanipha kwe-Inine. Bahlala bayizimpumputhe ngaphandle kokuqonda. Kungenzeka kanjani ukuthi labo abangenayo ukuhlakanipha kukaNkulunkulu bamemezele futhi baqondise futhi baqondise? abanye kuso? Benza sengathi banokubuka ngokuhlakanipha futhi basakazeka Lokho abakubona njengokuhlakanipha kukaNkulunkulu. Abantu, bethemba lezi Ababonisi ababonakalayo, bafuna ukuholwa, bacabanga ukuthi banakho Ulwazi oluphelele lokuhlakanipha kukaNkulunkulu. Bengazi, Abaholi ngokwabo bayimpumputhe. Cabanga ngesimo lapho Umuntu oyimpumputhe uhola abanye abayimpumputhe, abathi banayo ukubona futhi ubaqondise endleleni. Ngokungenakugwenywa, izimpumputhe Umholi ukhubethekile emgodini, ehola abanye ngokufanayo Predicament. Ngokufanayo, labo abangenalwazi lokuhlakanipha kukaNkulunkulu bahlekisa labo abanokuhlakanipha kwangempela, bazimemezela bakhulu gurus. Labo abanokuhlakanipha akudingeki bahlanganyele nengxabano nabo zona. Abantu abantula ukuhlakanipha - Ukubona akunakukhuphukela ku ipinnacle of moksham. Yize abaningi bangalandela i-guru Ukuntula ukuhlakanipha, akekho othola uMoksham; Esikhundleni salokho, bayawa <strong>emgodini weGunas.</strong></div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 44,
verse: ` <b>(43)IVangeli likaMathewu, Isahluko 16, 21 futhi Amavesi angama-22. IVangeli likaMathewu,17: Amavesi 22nd namavesi angama-23
<br>
IVangeli lika Mathewu, Isahluko 20, amavesi 17, 18th, no Amavesi akwa-19.</b>
`,
meaning: ` <b>
(16:21) Kulesosikhathi kuJesu waqala ukuchaza okwakhe abafundi ukuthi kumele aye eJerusalema futhi ahlupheke izinto eziningi ezandleni zabadala, induna abapristi, kanye nabafundisi bomthetho, nokuthi kufanele Ukubulawa kwathi ngosuku lwesithathu kuvuselelwa empilweni. (Okokuqala Isikhathi)
<br><br>
(16:22) UPhetro wamthatha eceleni waqala ukumkhuza. "Qha, Nkosi!" uthe. "Lokhu ngeke kwenzekele Wena! "
<br><br>
(17:22) Lapho behlangene eGalile, wathi kuyo zona, "iNdodana yomuntu izohanjiswa ku izandla zabantu. "
<br><br>
(17:23) Bazakumbulala, nangosuku lwesithathu ukhuliswe empilweni. " Futhi abafundi bagcwala usizi. (Okwesibili)
<br><br>
(20:17) Manje uJesu wayekhuphukela eJerusalema. Use Wathatha eceleni, wathatha abayishumi nambili eceleni wathi kubo.
<br><br>
(20:18) We wenyukela eJerusalema, nendodana ka Umuntu uzokhululwa kubaphristi abakhulu naku abafundisi boMthetho. Bazomlahla ngokufa.
<br><br>
(20:19) Bazomnika abeZizwe ukuba babe kugcotshwe futhi kushayelwe futhi kubethelwe. Ngosuku lwesithathu yena uzovuselwa empilweni! " (Okwesithathu)
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UJesu, ezahlukweni 16, 17, no-20 weVangeli lika UMathewu, wabikezela ikusasa lakhe. Kujwayelekile ngokujwayelekile Abantu ukubikezela isikhathi sokufa kwabo, banikezwe ukungaqiniseki nohlobo lwekusasa. Nokho, uJesu, udalule izimo zokufa kwakhe hhayi kanye kuphela kodwa Kathathu, kukhombisa okuthile okungajwayelekile ngaphakathi kuye. Lo mthetho wawukhombisa ukukhombisa abangazi ukuthi wayekhona ngaphezu komuntu nje. Amandla okukhuluma ngakho ukufa komuntu ngemininingwane enjalo kuyinto evumayo, kepha uJesu angenza kanjalo Ngoba wayeseqedile ukubulawa kwakhe. U-Atma ume njenge inquma yempilo yempilo ngaphakathi emzimbeni.

  UJesu, ngezikhathi ezintathu ezihlukene, wakhuluma ngokucacile ngokufa kwakhe okuzayo. Ikhono lakhe lokubikezela ikusasa lakhe umile kusuka ku-karma yakhe enqunyelwe kusengaphambili. NgokukaJesu, I-Atma-Ijaji leKarma - liyindodana kaParamatma. UJesu kwagomela ngokungaguquki ukuthi uYise nguMoya oNgcwele, Ukuzibona njenge-atma ebhekele ukunquma Karma. Lapho esenqume iKarma Yempilo Yakhe, uJesu waprofeta ukuthi Wayezonikelwa kubadala nabapristi abakhulu, abe babulawa yibo, futhi basukume baphile ngosuku lwesithathu. Kuyamangaza ukuthi, Le micimbi yenzeka ncamashi njengoba ayebikezele. UJesu wakhuluma ngokufa kwakhe ngaphandle kokwesaba, umboniso wokuthi konke umuntu oqondayo angabona, ekhombisa ukuthi uJesu wayekhona Akekho umuntu ojwayelekile; Kwakunokuthile okungajwayelekile ngakho Yena.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 45,
verse: `<b>(44)	IVangeli likaMathewu, 19 Isahluko, 23 futhi Amavesi angama-24.</b>`,
meaning: `<b>
(19:23) Khona-ke uJesu wathi kubafundi bakhe: "Ngiqinisile ngithi kini; Kunzima kothile ocebile ukungena eMbusweni we-paraloka.
<br><br>
(19:24) Futhi, ngithi kuwe, kulula ukuthi ikamela lihambe ngokusebenzisa iso lenaliti kunomuntu onjalo Ucebile ukungena embusweni kaNkulunkulu.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UJesu wadlulisa umzekeliso, wathi, "Kulula ngo ikamela ukuze udlule esweni lenaliti kune Umuntu ocebile ukungena embusweni kaNkulunkulu. " Njengoba kunjalo akunakwenzeka ukuthi ikamela ukuzulazula iso lenaliti, ngokufanayo, Kuyinselele ukuthi umuntu ocebile angene embusweni we UNkulunkulu. Abanye abadala bakholelwa ukuthi ingcebo ivame ukuzala ukuzikhukhumeza, Isici esithathwa njengesinye sezimpawu eziyisithupha ezingezinhle (ama-gunas). Ukuzikhukhumeza, owesihlanu walezi zimfanelo, uhambisana nokuhaha (Kaama), Intukuthelo (Krodha), i-Avarice (Lobhe), inkanuko (Moha), futhi umhawu (matsara). Ukuzikhukhumeza kukhona kuma-degree ahlukahlukene phakathi wonke umuntu. Ukuthi ngabe kungama-90%, 80%, 70%, 60%, 50%, I-40%, noma i-30%, wonke umuntu unezilinganiso ezithile zokuzikhukhumeza. Okukodwa umuntu angakhombisa ukuzikhukhumeza ngo-90%, kanti omunye angaba nawo I-80%, futhi abanye bangase babonise njengokuzikhukhumeza okungama-30%.

  Akugcini nje ngokuzikhukhumeza imicabango ye Jeevatma ngaphakathi emzimbeni, kodwa ezinye ezinhlanu Izibhamu ezihambisana nazo Futhi dlala indima ebalulekile. Izinga lokuzikhukhumeza lingahluka, futhi Kuphawulwe ukuthi abampofu ngokuvamile bakhombise ukuzikhukhumeza okuncane kunabacebile. Umuntu ocebile umuntu, akhuphuka kuwo izinga lokuzikhukhumeza livame ukuba. Umuntu onezigidi zamaRandi ingabonisa isilinganiso esiphakeme kakhulu sokuzikhukhumeza futhi ube ethonywe ngokwengeziwe ezinye izibhamu. Ingcebo inamandla okuthi alethe izinguquko ezibalulekile kumuntu, zivame ukuzihola kude nokuhlakanipha. Ngokwesimo sikaMoksham wafaniswa esweni lenaliti, i-analogy ifinyelela kwabacebile ngokuba iqhathaniswa nekamela. Njengoba nje ikamela alikwazi ukudlula iso lenaliti, umuntu ocebile, onethonya elinamandla Gunas akin nekamela, abhekene nezinselelo zokuthola inkululeko. I-analogy igcizelela ukuthi njengoba nje ikamela lingakwazi ulingane nenaliti, umuntu ocebile, ngaphansi kwe Ithonya lama-gunas anamandla, ahlangabezana nezingqinamba zokungena i-prafeca (moksham).
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 46,
verse: `<b>(45)	IVangeli likaMathewu, Isahluko sama-22, 36, 37th, 38th, 39th namavesi angama-40.</b>`,
meaning: `<b>
(22:36) Mfundisi, okuwumyalo omkhulu kunayo yonke Emthethweni (Dharma Shastra)?
<br><br>
(22:37) UJesu waphendula: "Thandani uJehova uNkulunkulu wakho ngakho konke inhliziyo yakho nangayo yonke imiphefumulo yakho nangayo yonke eyakho ingqondo. "
<br><br>
(22:38) Lo ngumyalo wokuqala nowokuqala omkhulu.
<br><br>
(22:39) Futhi owesibili unjengokuthi: 'Thanda umakhelwane wakho njengoba ngokwakho. '
<br><br>
(22:40) Wonke umthetho nabaprofethi balenga kulezi ezimbili imiyalo.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abanye abantu basondela kuJesu, babuza umbuzo mayelana Umyalo obaluleke kakhulu emthethweni (Dharma Shastra), ngenhloso yokuhlola nokwazi ukumukisa uma yena wakhubeka. Ukuphendula, uJesu waphendula ngokushesha, wathi: <strong>"Thanda</strong><strong>Inkosi yakho ngayo yonke inhliziyo yakho, umphefumulo nengqondo. " </strong>Yena ukugcizelele ukuthi lo mkhombe kwakuwukuphela futhi okukhulu kakhulu Umyalo, ulandele umyalo wesibili. Ukusetshenziswa yegama elithi 'umyalo' kuleli vesi ligcizelela ukubaluleka, UJesu ugomela ukuthi lezi ezimbili Imiyalo isebenza njengesisekelo sawo wonke umthetho kanye Abaporofidi. Leli vesi lichazwa ngokulandelayo.

  Umyalo ungumfundisi onikezwe wona isenzo esiqondile. Ngokwesimo esibanzi, kuphakama umbuzo: Ngubani Ingabe igunya likhipha umyalo? Impendulo ilele ku ukuqonda ukuthi abadala bavame ukunikeza imiyalo ku mncane. Ukunwebisa lo mbono, uNkulunkulu, uMdali wezwe, ubamba igunya eliphakeme kakhulu, nokuthi akhulumisana nani ngokomthetho kubhekwa <strong>njengomyalo</strong> noma <strong>umthetho</strong>. Leli Umthetho uhlanganisa izenzo ezingachazwakala futhi uvame ukubizwa ngokuthi njenge-<strong>dharma</strong>. Igama elithi 'Dharma' liqashiwe ngoba lo mthetho ukhona ayinakushintshiwe ngokwemvelo. Ngokwesibonelo, ukucwaswa kwe-chili Upelepele uyisici esingenakufinyeleleka, noma i-Dharma, ye-chili upelepele. Lokhu kwenziwa ngokungaguquguquki kuwo wonke amaChili pepper. Ngakho-ke, kungashiwo ukuthi i-Dharma yama-chili pepper ukuhlakanipha kwayo. Ngokufanayo, ubuningi yiDharma yeTamarind, Futhi ukululekwa kuyinto dharma ye-neem.

  I-Dharma ihlanganisa iqoqo lemithetho nemigomo. Nxa Omunye ubuza ukuthi ngubani onama-dharma, khona-ke noma yini eyenziwe ine dharma, njenge-tamarind edaliwe nje, uChili no-Neem banayo Dharma. Njengoba uNkulunkulu enguMdali wendalo, akayenzi unazo ama-dharmas. UMdali uNkulunkulu umi ngaphezu kwe izingqinamba ze-Dharma. Bobabili i-atma kanye ne-jeevatma, ngaphandle UNkulunkulu, angaphansi kwe-Dharmas. Ngokwengeziwe, i-prakruti edaliwe Futhi inesethi yayo ye-Dharmas. Ukuze Uqonde Brahma Vidya noma imfundo yokomoya, ukuqonda ama-dharmas we-atma futhi UJeevatma uba nzima. Jeevatma, ihloselwe ngqo Shcici ukucophelela iBrahma Vidya, <strong>kudingeka kuphela ukujwayelane nge-Dharma ye-Atma.</strong>

  Kuleli vesi, indlela yokuqonda i-Atma kuqokonyiswe njengokubalulekile. I-Dharma Shastra Dlulela ku Uhlobo lwe-Atma, nge-Dharma ephambili echazwe <strong>"njengothando Inkosi uNkulunkulu wakho ingeyokuqala nokukhulu Umyalo. "</strong> Inkosi okukhulunywa ngayo lapha ngokuyinhloko ozelwe. UJesu wagcizelela ukuthi iparamount Umyalo ukuthanda uNkulunkulu okuzelwe. Noma kunjalo, Kuphakama Umbuzo: Lapho uNkulunkulu enguMdali, engafakwanga, futhi angenayo i-Dharma, kungenzeka kanjani ukuthi azalwe (iNkosi) futhi kubhekwe uNkulunkulu? Izikhungo ze-Dilemma zizungeze noma ngabe Ukuzethemba uNkulunkulu noma ozelwe nguNkulunkulu. Impendulo yalokhu I-Quandary icacisiwe kanjena.

  UNkulunkulu, ongakazalwa noMdali, akazalwa. Ekuqaleni, uNkulunkulu wadala iPrakruti. Kulandela ukudalwa kwe UPrakruti, uNkulunkulu (Paramatma) wayehlose ukuletha abaphilayo izidalwa. Lapho iPrakruti yasungulwa, uNkulunkulu wakhetha ukungazibandakanyi isenzo esiqondile. Ngemuva kokudala izakhi ezinhlanu - isibhakabhaka, umoya, umlilo, Amanzi, nomhlaba - uNkulunkulu wayefisa isimo sokungasebenzi. Lapho uNkulunkulu ngifisa ukukhombisa ngendlela, i-<strong>Atma </strong>(iNkosi) yangena Ukuba khona kokwenza, ukuphatha, futhi, ekugcineni, kuqeda impilo izidalwa. U-ATMA wenza imithetho futhi wengamele umjikelezo wokuphila futhi Ukufa ngenxa yazo zonke izinto eziphilayo. Njengoba u-Atma unguMdali wabo bonke abaphilayo izidalwa, kufanelekile ukubhekisa ku-atma NjengoNkulunkulu. <strong>Ngenxa yalokho, Nkulunkulu, UMdali wePrakruti, wamukelwa njengenhlangano eyinhloko, Ngenkathi uNkulunkulu, uMdali wezinto eziphilayo ngaphakathi kwePrakruti, uyavunywa njengenhlangano yesibili.</strong>

  UNkulunkulu Wokuqala, owamukelwa njenge-paramatma, wadala i-atma, Ingabe uNkulunkulu uye ku-atma, futhi uhlala ehlukile ku-atma. Okwesibili Nkulunkulu, obizwa nge-Atma, nguMdali wezinto eziphilayo. Nokho bobabili i-paramatma nomsebenzi we-atma njengabadali nonkulunkulu, <strong>Unkulunkulu wokuqala (i-paramatma) ungaphezu kwe-dharmas, kuyilapho Unkulunkulu wesibili (atma) unamathela eDharmas. Unkulunkulu ngaphandle Udharmas unguMdali ophambili, kanti uNkulunkulu naye Udharmas unguMdali wesibili. </strong>Akekho owaziyo ukuthi lapho bangonkulunkulu ababili emhlabeni. Noma kukhona onkulunkulu ababili, NgoNkulunkulu wokuqala ungumuntu omkhulu, u-Atma ubamba okhethekile ukubaluleka kubantu njengoMdali wabantu. Ikona kubalulekile kubantu ukukhulekela ku-Atma kuphela. Abantu bayakhuthazwa ukuba baqonde ama-dharmas ahambisana Unkulunkulu wesibili. Ngokubalulekile, wonke ama-dharmas avezwa ngaphakathi ImiBhalo igxile ku-Atma.

  Uma umuntu efisa ukukhulekela futhi athandaze, kuyaqondiswa ubheke kunkulunkulu wesibili, atma. Akekho ongakhonza okokuqala UNkulunkulu. Akunakwenzeka ukuthi noma ngubani athandaze noma amkhonze. Ukukhulekela nokuthandaza kuNkulunkulu wokuqala kuthathwa njengokudingekile, <strong>Ngoba loNkulunkulu akaze azalwe futhi akazalwa</strong>, njengoba kugcizelelwa ku umbhalo wokugcina. USurah 112 ugcizelela futhi ukuthi <strong>uNkulunkulu wokuqala ayinandaba nemikhuleko.</strong> Kuyaphawuleka ukuthi womabili amaKristu futhi amaSulumane kungenzeka angakuboni ubukhona bonkulunkulu ababili (ababili U-Allahs), njengoba bexhasa inkolelo ngoNkulunkulu oyedwa khonza. Kodwa-ke, umehluko phakathi <strong>kukaNkulunkulu Kukhulekelwe futhi uMdali wokuqala uNkulunkulu </strong>uvame ukunganakwa. AmaHindu awazi uNkulunkulu kepha akhonze onkulunkulu abaningi futhi Hambani ngendlela engafanele (indlela engazi) ngokuphelele.

  Unkulunkulu wokuqala weqa indawo ye-Dharmas, ekwenza Kuye engaziwa nangaphezulu kokukhulekelwa. Ukukhuleka ku-Atma, The UZimu wabuswa nguDharmas, izakhi ezithile zomuntu umzimba uba obalulekile. Ngokusho kukaDharma Shastra, kunjalo kubalulekile ukuthi uJeeva akhulekele ku-ATMA, uNkulunkulu, esebenzisa ama-manas womabili noBuddhi. Lokhu kuba yi-Dharma ebalulekile. Ivesi Ugcizelela, <strong>"thanda u-Atma, uNkulunkulu, ngenhliziyo yakho yonke, umphefumulo. nengqondo, "</strong>lapho uthando luhunyushwa njengokukhulekelwa. Lokhu kumi njengomyalo ophambili noma i-Dharma. <strong>Ukutolika Umyalo njengeDharma, 'yonke inhliziyo yakho' isho konke okwakho UBuddhi, futhi 'wonke umphefumulo wakho' ubhekisele kuwe, Jeeva. Uthando, kulokhu umongo, kusho ukukhulekelwa. E-Dharma Shastra, kuthiwa ukuthi kufanele ukhulekele ku-ATMA, uNkulunkulu, enomqondo wakho</strong><strong>neBuddhi lakho</strong>. Ngokukhulunywa kwesibili Umyalo, ake sinikezele kulokho okubandakanya.

  Umyalo wesibili uyalela, <strong>"thanda okwakho umakhelwane njengoba wena. "</strong> Le miyalo emibili yakha itshe le-Dharma Shastra nezimfundiso ze Abaporofidi, njengoba kushiwo evesini. Empeleni, bakhonza njenge Isisekelo se-Dharmas ngaphakathi kwe-Realm of Brahma Vidya kanye nokuholwa okunikezwe ngabaporofidi ekudluliseni lokhu dharmas. Leli vesi liphakamisa ukuthi ukuzithanda kanye Ukubekwa ngaphambi kwenhlala-kahle yomuntu siqu kuvame ukuthambekela. Lapho ubhekene nezinsongo, abantu babonisa isimo sangaphakathi ukuvikela izimpilo zabo, imvamisa iya ngokwejwayelekile Ubude, noma ngabe kunezindleko zokudela impahla. Le khasi Ithemba eliphambili lezokuvakasha kwabantu ezimpilweni zabo kuyabonakala emithandazweni yabo konkulunkulu abahlukahlukene nokuzimisela kwabo yenza noma yisiphi isilinganiso sokuqinisekisa inhlala-kahle yabo. Leli ukubonwa kuqokomisa ukuthambekela kwangaphakathi kwabantu ukubeka phambili ukuzithanda. Ivesi liyala, "Thanda umakhelwane wakho njengoba ngokwakho, "ukugcizelela okubalulekile ukuze kunwetshwe okufanayo izinga lokunakekelwa nokucatshangelwa komakhelwane bomuntu njengoyedwa ngokwemvelo kufuna inhlala-kahle yabo futhi izindinganiso zazo Impilo.

  Ngenkathi ukuqonda okuvamile 'umakhelwane' kuvame ukubhekisela kumuntu ophilayo osondelene naye, leli vesi, "thanda elakho Umakhelwane njengoba wena "usinxusa ukuba sinwebe uthando kuye Eduze kwethu, hhayi umakhelwane wethu olandelayo. Ukuphuza kujule, Ivesi livusa ukubonisa ukuthi umakhelwane wethu ngempela. Ngokwevesi, eceleni kwe-<strong>Atma</strong> yakho, akekho okunye ngaphakathi komzimba wakho. Uma ukhomba njengomphefumlo (jeevatma), lapho ngomunye umphefumulo ofana nawe - uNkulunkulu wesibili, i-atma. Sekukonke, Kunemiphefumulo emithathu kuphela, ekhombisa imiphefumulo emibili ngaphandle kwalokho ngokwakho, nge-paramatma eyodwa. Kodwa-ke, kubhekiswa ku Paramatma njengoba umakhelwane wakho kungenzeki kahle kusukela kunjalo i-ompernipresent futhi konke-i-pervading. Ngaphandle kwe-paramatma, the osele ku-Atma umakhelwane wakho. Lo mqondo uqondanisa ne Ukuqonda lokho, ngaphandle kwe-Atma neParamatma, konke Indalo ibhekwa njengowesifazane Prakruti, one-Atma futhi I-Paramatma emele isici sabantu besilisa.

  I-Atma, ukuba ukuphela kwenhlangano ye-masculine akink kuwe, ngokufanele uthathwa njengomakhelwane wakho. UNkulunkulu Wokuqala, UParamatma, ume ngaphezu kombuso wokukhulekelwa, ubudlelwane , nama-dharmas, okwenza ama-atma ngesihloko esifanele kokukhulekelwa. ImiBhalo yaphezulu igcizelela njalo Ukufanelekela ukukhulekela ku-Atma, kumbhalela ukuthi ' <strong>UAllah</strong>. 'Lesi simemezelo siphinde saphindwa eSurah 6: 102, 3:18, futhi 16:51. Ukubaluleka kwemiyalo emibili, "thanda eyakho Umakhelwane u-ATMA njengoba uzithanda wena, "ugcizelele eDharma Shastra<strong>. Ukukhulekela ku-Atma kuvela njengomsebenzi oyinhloko we UGurus, abashumayeli nabaprofethi. </strong>Lokhu kubonakala ku Impendulo uJesu yanikeza umFarisi lapho ebuzwa imibuzo nge I-Dharma ebalulekile emthethweni. Ukucabanga ngaleli vesi kushukumisa ukucatshangelwa okujulile kwebhizinisi oliqondisa ukukhulekelwa kwakho kuyo.

</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 47,
verse: ` <b>(46)	IVangeli likaMathewu, Isahluko 23RD, 8th, 9th, namavesi ayi-10.</b>`,
meaning: ` <b>
(23:8) "Kepha akufanele ubizwa ngokuthi 'Rabi,' kuwe ube nothisha oyedwa, futhi nina ningabafowethu.
<br><br>
(23:9) Futhi ungabizi muntu kuyise emhlabeni, 'ngawe babe nobaba oyedwa, futhi usebaphathekayo.
<br><br>
(23:10) Futhi futhi awubizwa ngokuthi abafundisi, kuwe Unomfundisi oyedwa, uMesiya. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abanye bangabhekisela kumshumayeli njengobaba noma acabangele UGurus oshumayela olingana nobaba. Kodwa-ke, leli vesi lifunda ukuthi akekho umuntu okufanele abizwe ngokuthi umshumayeli. Ithi ukungabizi Noma ngubani uRabi, njengoba kunenkosi eyodwa kuphela, futhi bonke abanye bakhona Bafowethu, njengoba kushiwo evesini. Umshumayeli ngumuntu Ufundisa, kepha leli vesi libhekisela ngqo kulowo ofundisa Ukuhlakanipha kwaphezulu. Ngokwevesi, umuntu oyedwa kuphela owaziyo Ukuhlakanipha kwaphezulu, futhi akekho omunye owenzayo. Kungani bonke abanye Angazi? Ngubani owaziyo? Impendulo kulabo Imibuzo imi ngalendlela elandelayo.

  Ukuhlakanipha kukaNkulunkulu akaziwa muntu ngaphandle kukaNkulunkulu, njengoba kushiwo emiBhalweni yaphezulu. Kukhulunywa futhi ku-Divine ImiBhalo uNkulunkulu akazange aphasise ukuhlakanipha kwakhe kunoma yimuphi umuntu kokuba. Lokhu kusho ukuthi akekho owaziyo ukuhlakanipha kukaNkulunkulu. Ngakho-ke, akekho umuntu ongafundisa ukuhlakanipha kukaNkulunkulu. Ngakho-ke, kufanele ungabizwa ngokuthi Rabi, njengoba kushiwo evesini. NguNkulunkulu kuphela ongafundisayo ukuhlakanipha kukaNkulunkulu. Ngakho-ke, kuthiwa evesini inkosi yakho Munye kuphela, futhi UnguNkulunkulu. Umuntu ongumuntu akuyona inkosi (Mfundisi), nabo bonke abantu bangabafowethu, njengoba kushiwo ku vesi.

  Wonke umuntu unabazali bemvelo. Wonke umuntu uyakukholwa lokho Abazali ababonakalayo kusukela ebuntwaneni bangabazali bangempela. -Ngakanani Abadala beluleka ukuthi kufanele uhloniphe abazali bakho. Wonke umuntu ihlonipha abazali babo bemvelo. Kungashiwo ukuthi kukhona Akekho omunye amanani noma ubaba kuphela ngaphandle kwabazali ababonakalayo. Konke lokhu kuhlobene nezwe. Kodwa-ke, wonke umuntu akabonakali, Bazali abangaziwa ngokusho kokuhlakanipha kwaphezulu. Uma ebuzwa ukuthi Abazali ababonakalayo abazali bangempela noma abazali abangabonakali bangempela Bazali, kuba sobala ukuthi abazali abangabonakali bangokoqobo Bazali. Isizathu sokuthi sikusho lokhu ukuthi uYise yiNzalo onikelayo kuwo wonke umuntu. Ngokuvumelana nalokho, <strong>uNkulunkulu (atma), Baba ongabonakali, ungumnikelo wembewu wazo zonke izidalwa eziphilayo</strong>. Ngakho-ke, Ubaba ongabonakali uba ubaba wangempela. Ukuthi siyazi noma cha, ubaba wethu wokuzalwa ngu-Atma. <strong>Ngakho-ke, ungabizi Umuntu uyihlo emhlabeni wakho emhlabeni, ngokuba umuntu ungubani, Ngubani osekhungweni, </strong>njengoba kusho evesini.

  Leli vesi lithi umshumayeli obonakalayo akayona iqiniso umshumayeli, ubaba wezemvelo akayona ubaba uqobo, no I-Guru ebonakalayo akuyona i-guru efanele. Abaningi bafundisa okuthile futhi babizwa ngokuthi yi-gurus. Uma ubizwa nge-guru, khona-ke uyadlala Indima engakulungele. NKULUNKULU WONKE UNKULUNKULU njenge-guru nganoma yisiphi isikhathi. Lapho uNkulunkulu efaka umuntu njengomuntu, Uba yi-guru futhi afundise ukuhlakanipha. Ngakho-ke, thina kufanele baqonde ukuthi <strong>ukubonwa kukaNkulunkulu njengendoda Umhlaba uyi-guru yangempela.</strong>
</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 48,
verse: ` <b>(47)	IVangeli likaMathewu, Isahluko 23, 15 isiqendu.</b>`,
meaning: `  <b>
(23:15) "Maye kuwe, othisha bomthetho nabaFarisi, Nina bazenzisi! Uhamba phezu komhlaba nolwandle ukunqoba a ukuguqula okukodwa, nalapho usuphumelele, wena Zenzele ingane ephindwe kabili yesihogo njengoba unjalo.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Inkolo ayizange ibe khona kuze kube yiminyaka eyizinkulungwane ezintathu emva Kali yuga. Eminyakeni eyizinkulungwane ezimbili edlule, lapho kuzalwa ubuKristu, AmaKhristu ekuqaleni aqhamuke njengamaqembu futhi kamuva aqala kwakhiwa a Umphakathi wamaKristu. Ngemuva kwesikhashana, umKristu Umphakathi wazithi ziyinkolo yobuKristu. Ngakho-ke, Inkolo yokuqala yazalwa. Ngemuva kokufuna ukuba yinkolo yobuKristu, bazama ukwandisa ukholo lwabo. Abanye kamuva bakhonjwa bona njengenkolo esekelwe ezimfundisweni zabo. Ngakho-ke, Izinkolo zadalwa zalandelana. Maduze nje, ishumi nambili Izinkolo zakhiwa emhlabeni. Ngemuva kokudalwa kwezinkolo, ezinye abantu babandakanyeka ekwandiseni izinkolo zabo. Bona wahamba phezu komhlaba nolwandle ukuguqula abanye enkolweni yabo.

  Inkolo yadalwa yintando yabantu, hhayi ngobuhlakani bukaNkulunkulu. Kulezi zinkolo ezidalwe ngabantu, kubonakala sengathi ziba nguNkulunkulu Ukuhlakanipha, kepha ukuhlakanipha kubo kuphambene nokuhlakanipha kwembulwa uNkulunkulu. Ngakho-ke, umuntu othembela ekuhlakanipheni kwaphezulu nomBhalo, noma ngabe uphi inkolo, uzokuqonda teacukukhala nokuhlakanipha. Uma umuntu eboshelwe enkolweni nasekubizeni ukuba ngeqembu lenkolo ethile, bazoqonda Ukuhlakanipha kukaMaya. Uma umuntu ehlanganisa inkolo, uzoba ebanjwa esonweni. Ngakolunye uhlangothi, umuntu ongenakho ngokwenkolo Ukuhlangana kuzofanelekela ukungena embusweni wePharage.
</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 49,
verse: `<b>(48) IVangeli likaMathewu, Isahluko 24, 35th isiqendu.</b>`,
meaning: ` <b>
(24:35) Isibhakabhaka nomhlaba kuzodlula, kepha amazwi ami azovuma ungalokothi udlule.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UParamatma (uNkulunkulu) akakhulumi. I-ATMA, ehlala Emzimbeni, uyakwazi ukukhuluma. U-ATMA unguMdali wesibili no Unkulunkulu wesibili. I-ATMA, ikhona emzimbeni, iyaxhumana Inkulumo. Unkulunkulu wesibili (atma) unikeza ukuhlakanipha okuningi ubuntu. Ukuhlakanipha okufundiswe ngale ndlela kuyavezwa ngamagama. Izimfundiso ze-ATMA ezivela emzimbeni, ngesimo se amagama, awokuphinde adlule, noma ngabe isibhakabhaka nomhlaba bekufanele Dlula, njengoba kushiwo evesini. Okubalulekile ukuqaphela Nakhu <strong>ukuthi isibhakabhaka nomhlaba okukhulunywe ngaye kuzodlula, Kepha amazwi ami awusoze wadlula</strong>. Kepha kungashiwo lokho isibhakabhaka nomhlaba awukaze udlule. Noma kunjalo, leli vesi Kubukeka kukhombisa ukuthi isibhakabhaka nomhlaba kuzodlula. Ngakho-ke, kufanele siqonde ukuthi zombili isibhakabhaka nomhlaba okukhulunywe ngaye evesini akusona isibhakabhaka nomhlaba esiwubonayo. Le khasi Isibhakabhaka nomhlaba okuchazwe evesini kuyabonakala. Le khasi umhlaba nesibhakabhaka esingalokothi siphele uhlobo olulodwa, kuyilapho Umhlaba obonakalayo nesibhakabhaka ngolunye uhlobo. EPrakruti, okuyi ngesimo somzimba womuntu, kukhona isibhakabhaka, umoya, umlilo, amanzi, nomhlaba. Bonke - isibhakabhaka sokuqala, umhlaba wokugcina, kanye umoya osele, umlilo, kanye namanzi- ngesimo somzimba iyabonakala. <strong>Umzimba womuntu uzoshabalala, kepha Ukuhlakanipha okunikezwe ngumuntu ngeke kudlule.</strong></div></div>
</span>`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 50,
verse: `<b>(49)	IVangeli likaMathewu, 24 Isahluko, 42nd isiqendu. </b>`,
meaning: ` <b>
(24:42) Ngakho-ke, hlala ubukele, ngoba awukwenzi yazini ukuthi iNkosi yenu izofika ngaluphi usuku.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Noma nini lapho kunosongo kuma-dharmas kaNkulunkulu emhlabeni, Futhi ama-dharmas kaSathane asakazeka kakhulu, uNkulunkulu uthumela ingxenye Yena ngokwakhe emhlabathini ukuvikela imiyalo yakhe (Dharmas). Noma nini lapho kunesidingo, uNkulunkulu kufanele eze njengomuntu ongumuntu. UKrishna eDVapara yuga naseNkosini Jesu eKali Yuga wafika ngaleyo ndlela. Ngokumangazayo, singazikhomba ngemuva bafika bahamba, kodwa lapho besemhlabeni, sasikwazi ungakhombe ukuthi bangobani. Akekho owabona lapho uNkulunkulu Ngokwakhe weza njengeNkosi. Ngisho nalabo ababona inkazimulo yakhe babekwazi Angazi ukuthi wayenguNkulunkulu kodwa wacabanga ukuthi mkhulu. Phakathi kwa- UDVapara yuga, uKrishna wathi, <strong>"Ngizofika lapho ama-dharmas kungcolisiwe. " </strong>Wabuya futhi njengeNkosi uJesu futhi waphinda yena dharmas. Ngeke kube khona umehluko ku Imiyalo ayinike yona, kungaba eDVara yuga noma eKali Yuga. Kepha akukho ukufana ngamagama azo, izimpilo nangendlela yokuphila. Ngakho-ke, uSathane wagcizelela umehluko wawo wangaphandle futhi bakhohlise abantu ukuba bangazi ukuthi bobabili babefana. Indoda idinga ukuhlakanipha okuthile ukuze wazi ukuthi ngubani ofikile, ngubani Woza, lapho efikile, futhi lapho efika. Inkani nje Umuntu uyakuzi, akazi ukuza uNkulunkulu futhi kuhlala kungazi ngisho nangemva kokuba uNkulunkulu efikile. Ngakho-ke, uma abantu bafuna ukwazi ukufika kukaNkulunkulu futhi baqaphele Yena, kufanele babe nokuhlakanipha okuhlobene noNkulunkulu. Kulezi zinsuku, Ukuhlakanipha kukaNkulunkulu akwaziwa, futhi ukuhlakanipha kukaSathane kugcwele. Ngakho-ke, "<strong>Anazi ukuthi iNkosi Yakho Ithanda Woza, "</strong>kusho ivesi. <strong>"Hlala uphapheme ukuze umazi," </strong>futhi okukhulunywe ngaye evesini. Lapha '<strong>uhlale uphapheme' kusho ukuba Ukuhlakanipha.</strong></div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 51,
verse: ` <b>(50) IVangeli likaMathewu, Isahluko 26, 26, Amavesi angama-27 nama-28.</b>`,
meaning: `<b>
(26:26) Ngenkathi bedla, uJesu wathatha isinkwa, futhi lapho ebonge, wayiphula wayinika yona Abafundi bakhe, bathi: "Thatha udle; Lo mzimba wami. "
<br><br>
(26:27) Wabe esethatha inkomishi, kwathi lapho enikele Ngiyabonga, Wabanika, bathi, "Phuzani kuso, konke kuwe.
<br><br>
(26: 28) Leli yigazi lami lesivumelwano (ukuhlakanipha kukaNkulunkulu ngaphandle kwezibopho zokungazi), okukhona wathululela abaningi ukuze intethelelo yezono. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ngenkathi uJesu nabafundi bakhe abayishumi nambili bedla, uJesu wathatha isinkwa, wasibusisa, wasihlephula, wayinika abafundi bakhe, futhi wathi, <strong>"Thatha udle; Lo mzimba wami. " </strong>Wathatha nejusi lamagilebhisi Endebeni wathi, <strong>"Nonke niphuze kulo; lena yimi igazi. "</strong> Waqhathanisa ujusi wamagilebhisi egazini lakhe futhi wacacisa Ngaphezu kwalokho, wathi, <strong>"Leli yigazi lami lesivumelwano, okuyilo Ukuthululelwa abaningi ukuze intethelelo yezono. "</strong>

  Lawa mazwi abonakala evamile kaJesu kufanele abe kubhekwe phakathi kwezimfundiso zakhe ezibaluleke kakhulu. Ngeshwa, amanye amaKristu, angazi ngomongo we la magama akhulunywa ngesikhathi sokudla, ahluleke ukuqonda okwabo ukubaluleka. <strong>Abanye bahumusha ukuthi uJesu wakhuluma la mazwi mayelana nesikhathi sakhe esedlule noma esizayo yize kwakukhona njengamanje.</strong>

  UJesu wanika ujusi wamagilebhisi endebeni futhi wathi, "Lokhu kuyimi igazi, "kepha akazange achaze ukuthi kwakuyigazi lomzimba wakhe lokho kwahlaselwa esiphambanweni. Noma kunjalo, amaKristu amaningi Abashumayeli bathi igazi mkufakwe leli vesi kuJesu ' Igazi lomzimba elichithekile esiphambanweni, lithi izono zomuntu baxolelwa ngoba uJesu wachitha igazi lakhe ngezoni. Kodwa-ke, kunokungafani phakathi kokushiwo umuntu futhi Lokho uJesu akusho. UJesu akazange asho igazi lomzimba wakhe ku ivesi. Ezimweni ezinjalo, bekungaba ukungalungile ukusho ukuthi uJesu wachitha Igazi lakhe lezoni. Ngalolo suku, labo ababeka uJesu ku wamnqamula igazi lakhe, wabulala. wenze isono esibi futhi esingenakuthethelelwa. Kodwa-ke, bekuzokwenza ungalungile ukusho ukuthi izono zabantu baxolelwe futhi bazokwazi Uxolelwe ngokufa kukaJesu.

  Lapho uJesu enikeza ujusi wamagilebhisi kubafundi bakhe futhi wathi, <strong>"Leli yigazi lesivumelwano, elikhona wawuthulula abaningi ngokuthethelelwa kwezono, "</strong>wasebenzisa isikhathi samanje, esibonisa ukuthi senzeka kulokho isikhashana, futhi akazange asho umcimbi wesikhathi esizayo. Akazange aqaphele ekuchitheni ikusasa legazi lakhe esiphambanweni. Ngakho-ke, yona bekungalungile ukuthi igazi lichithwe esiphambanweni kwakuwukuthethelelwa kwezono. <strong>Labo ababhekele uJesu Ukuchitha igazi lakhe esiphambanweni kwathola isono, hhayi intethelelo yesono.</strong>Lokho uJesu kwakukhuluma ngaye kwakuyigazi lesivumelwano, Ukubonisa ukuhlakanipha kukaNkulunkulu, okungaboshelwe ukungazi. Yena wafundisa ukuhlakanipha kwaphezulu nsuku zonke, ukuqhathanisa nokuthulula ngaphandle yegazi lesivumelwano emlonyeni wakhe. Wanikeza umlilo wokuhlakanipha usuku nosuku ukuze ushise izono zabantu, ufafaze wakhe izimfundiso egqoke igazi lenkomba ligeleza emlonyeni wakhe. Iqiniso Okushiwo yileli vesi kungaqondakala ngokucophelela ukuhlaziywa.

  Okushiwo isitatimende akuqondakali kahle Ngoba igama elithi 'isivumelwano' livame ukushiywa lisuka kwisisho 'Igazi lesivumelwano' linegama elithi 'igazi' elibhekwa kuphela. Yona akuboni ukuthi 'isivumelwano' sisho 'ukuhlakanipha noDharmas.' Esinye isizathu sokusho ukuthi 'igazi' evesini alikho igazi lomzimba. Umzimba wenyama ugcwele igazi, futhi ubude Njengoba kunegazi emzimbeni, umzimba uyaphila. Uma umzimba uveza Igazi layo, umzimba uyafa. Ngokwalokhu, kuyaziwa Ukuthi umongo womzimba uyigazi. Ngenkathi bedla, Okokuqala uJesu wathatha isinkwa, wayinika abafundi bakhe, wathi, <strong>"Thatha futhi udle; Lo mzimba wami. "</strong> Lapha waqhathanisa nesinkwa nokwakhe umzimba. Wayesethatha ujusi wamagilebhisi endebeni futhi wabanika, esithi, <strong>"Leli yigazi lami lesivumelwano." </strong>Uthe nge Isinkwa, "Lona ngumzimba wami. Yidla lokhu. " UJesu waqhathanisa isinkwa kuye Umzimba wakhe ubayale ukuba bayidle. Uma udla isinkwa, ke udla umzimba kaJesu. Isisekelo kanye nomongo wemzimba yigazi lawo.

  Lapho uqhathanisa ukuhlakanipha kwaphezulu egazini lesivumelwano, Umzimba wesinkwa ungafaniswa nomBhalo Ongcwele futhi Ukuhlakanipha KukaNkulunkulu. Ngale ndlela, <strong>umzimba uqukethe igazi, kanye umbhalo uqukethe ukuhlakanipha. Ukudla umzimba kusho ukufunda Umbhalo nokufunda kuzokwembula umongo wawo Ukuhlakanipha. Ukuphuza igazi kusho ukuqonda Ukuhlakanipha.</strong> Ngeshwa, abantu bavame ukugxila kuphela kwisinkwa kanye nejusi lamagilebhisi uJesu alinikezayo, ngaphandle kokubona ukuthi isinkwa umele umbhalo waphezulu, futhi ujusi wamagilebhisi umele kuthile Ukuhlakanipha. <strong>UJesu waqhathanisa umBhalo wakhe umzimba (isinkwa) nobuhlakani ngaphakathi kwalo kuya kwegazi (amagilebhisi ujusi). Ukuchitheka kwegazi lesivumelwano kubhekisele ku Ukuhlakanipha noDharmas kufundiswa ngaleso sikhathi.</strong>

  Abaningi behlulekile ukuqaphela ukuthi uJesu wafanisa Umbhalo emzimbeni wakhe nokuhlakanipha kwawo kwegazi, okuholela ku inkolelo engafanele yokuthi igazi elichithekile esiphambanweni lalingo Ukuthethelelwa kwezono.</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 52,
verse: `<b>(51)	IVangeli likaMathewu, 28, i-18 isiqendu.</b>`,
meaning: `<b>
(28:18) Khona-ke uJesu weza kubo wathi: "Bonke igunya efenina nasemhlabeni linikezwe mina. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  ETelugu, 'loka' kusho ukuba nokuhlangenwe nakho. ELoka, thina hlangana nobunzima nobumnandi. Isipiliyoni se Injabulo ibizwa ngeSvarga Loka (Izulu), ngenkathi isipiliyoni wobunzima kubhekiselwa kuzo njengeNaraka Loka (Isihogo). I-Loka akuyona Izwe elihlukile noma indawo ekhethekile; Esikhundleni salokho, yisamba sabo bonke okuhlangenwe nakho. Ngokusho kokuhlangenwe nakho komuntu kwenjabulo futhi Usizi, uLika uhlukaniswe ezulwini nesihogo. Konke okuhlangenwe nakho Izulu nesihogo senzeka emhlabeni futhi asihlukile izindawo ezibonakalayo. Ngakho-ke, kuya ngolwazi, kungenzeka bhekisa kubo njengeZulu noma esihogweni, kepha empeleni, bobabili izulu nobabili Isihogo sikhona emhlabeni.

  Kunezinhlobo ezimbili zeLokas Emhlabeni - Ihaloka kanye ne Paraloka. <strong>Ihaloka ifaka okuhlangenwe nakho, kanti i-Paraloka ayinakho okuhlangenwe nakho</strong>. Bobabili i-iHaloka ne-Paraloka kukhona emhlabeni. 'Para' kusho okuhlukile noma okuhlukile. Paraloka kusho okuhlukile kokuhlangenwe nakho. Ngamanye amazwi, I-Paraloka ayinakho okuhlangenwe nakho futhi ihlukile kuLoka. Phakathi kwa- UTelugu, 'Manishi' kusho lowo othola okuhlangenwe nakho ngokusebenzisa ama-manas (ingqondo). Ngakho-ke, bonke abantu emhlabeni ungowakwa-Ihaloka. Akekho umuntu oke wabona i-Paraloka. Ukugqokwa komzimba Indoda ayikaze ibe khona ngaphandle kokuhlangenwe nakho. Ngakho-ke, kungaba ukusho lokho Wonke umuntu ungowe-loka futhi uhlala e-Ihaloka. Kungenzeka kushiwo ukuthi lowo ongenawo isipiliyoni u se Paraloka. <strong>"Konke Kwangiphiwe igunya e Paraloka nasemhlabeni, " kusho</strong> ivesi elingenhla.

  Ukube uJesu wayengumuntu ojwayelekile, wayezoba se-Ihaloka futhi ungazi i-Paraloka. Naphezu kokubonakala njengokujwayelekile Indoda, umzimba wakhe waba no-Atma kuphela hhayi uJeevatma. u-Atma wayehlala ngaphakathi Umzimba kaJesu futhi wenza sengathi uyiJeevatma. Kokubili ku-atma kanye UJeevatma ukhona kubo bonke abantu, lapho u-Atma enza khona wonke umzimba Imisebenzi, futhi uJeevatma uhlangabezana nenjabulo nosizi emsebenzini. Phakathi kwa- Ngale ndlela, kungashiwo ukuthi uJeivatma emzimbeni womuntu ukhona Izulu ngezikhathi ezithile nasesihogweni ngezinye izikhathi. Kepha lapho uNkulunkulu Iza njengomuntu, umzimba wakhe awunayo Jeevatma. Nokho u-Atma usebenza emzimbeni weNdodana kaNkulunkulu, akunjalo uhlangabezana nanoma yini. Ngakho-ke, kuthiwa ube yi-Paraloka. Njengoba uJesu wayengeyena umuntu ojwayelekile, unegunya emhlabeni (Ihaloka) ne-paral. UMoya oNgcwele, uParamatma, wanika u Atma (Jesu) igunya eliphelele. Jesu, ngubani o-Atma, naye uyikhanda kokuhlakanipha kwaphezulu. Ukuhlakanipha kukaNkulunkulu manje kuyaziwa noma ngubani ngaphandle kukaNkulunkulu. Ngakho-ke, isihloko semiphefumulo asiziwa abantu. UJesu wafundisa ukuhlakanipha kwemiphefumulo emithathu futhi wayalwa Abafundi bakhe, ababekwazi ukuhlakanipha kwemiphefumulo, ukufundisa Ukuhlakanipha kuka Atma kubo bonke abantu.</div></div>
</span>
`
},
{
chapterName: "IVangeli likaMathewu",
chapterNumber: 2,
pageNumber: 53,
verse: ` <b>(52)	IVangeli likaMathewu, 28, 19, namavesi angama-20.</b>`,
meaning: ` <b>
(28:19) Ngakho-ke, hambani nifundise zonke izizwe. bababhapathiza egameni likaYise nowe Indodana nangoMoya oNgcwele.
<br><br>
(28:20) Bafundise ukuba balalele konke enginakho uyakuyala. Futhi impela, nginawe njalo, ukuze ukuphela kweminyaka yobudala (Yuga).    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  IVangeli likaMathewu linezahluko ezingama-28. Amavesi okugcina, 19th, no-20 kwesahluko 28, siqukethe imfihlo yalokhu imfundo engokomoya. Imininingwane mayelana nemiphefumulo emithathu okukhulunywe ngaye evesini 19 kungukuhlakanipha okubaluleke kakhulu ngaphakathi UmBhalo. Kuleli vesi, igama elithi 'baba' lisetshenziswa ngaphambi kwe Izwi elithi 'ndodana,' lidinga ukucatshangelwa ngokucophelela ukuliqonda. Labo abacabanga ngalokhu bazokwazi ukuthi ukulandelana kungukuthi Ndodana, uYise, noMoya oNgcwele. Ukuqhubeka nokuchaza, <strong>eyodwa kumele aqonde ukuthi indodana yiJevatma, uYise u Atma, noMoya oNgcwele nguParamatma</strong>. Ayikho enye imiphefumulo emhlabeni ngaphandle kwalawa amathathu. Ngokuya kwe- UThraitha Theorem, le miphefumulo emithathu yiJeevatma, Atma, futhi Paramatma.

  Ukubhabhadiswa kusho u-Upudasa. ETelugu, 'Upa' (sub) kusho eduze. I-Upadesa isho izwe elingumakhelwane noma eliseduze. Ngemininingwane eminingi, kusho "ukushiya leli lizwe lapho ukhona manje futhi ukuthola imvume yokuya esondele noma izwe elingumakhelwane. " Isikhulu kufanele siqale sinikeze imvume kuyo Iya ezweni elingumakhelwane. Leso sikhulu singabizwa ngokuthi yi guru. UGuru usho lowo oyinhloko yalowo omakhelwane izwe noma i-prafuca. Akunandaba ukuthi bangaki ama-gurus asemhlabeni, UNkulunkulu, inhloko ye Paraloka, uyisisu sangempela. Unkulunkulu, umbusi we Paraloka, i-guru yangempela enikeza ukubhapathizwa kweqiniso lapho iza emhlabeni njengendoda. Yize kukhona ama-gurus amaningi Umhlaba, bonke bangama-gurus ngegama kuphela. Ukubhabhadiswa abakunikezayo ngegama kuphela.

  Lapho uNkulunkulu, i-guru yangempela, awekho emhlabeni njengomuntu, Ngokwesiko lokuhlakanipha, abashumayeli kufanele benze abanye abafundi babanika u-upadasa. I-padesa ifana imvume ezweni elingumakhelwane. Enqubweni ye-upadesa, AmaGuru afundisa abafundi ngamanzi, ene-mantra, izwi, noma IVibhuti (umlotha ongcwele). U-Upadesa uyimvume yokuba yi-Parolaka, futhi igama noma amanzi afana nethikithi elibona ukungena ku Paraloka. Iningi le-gurus lisebenzisa i-mantra noma igama ku-upadesa inqubo. Ngokufanayo, uJesu watshela abafundi bakhe, <strong>"Hamba wenze abantu bazo zonke izizwe abafundi. " </strong>Ubuye watshela abafundi bakhe ukuba Babhabhathize lapho baba ngabafundi. Lapho unikeza Ubafundi Ithikithi lemvume kwinqubo ye-upadesa, kusho yena, 'Babhapathize Ngegama Lemiphefumulo Emithathu - Ubaba, Ndodana, noMoya oNgcwele. " Ngokwesiko lokuhlakanipha, Ubhapathizo kufanele lwenziwe ngale ndlela. Ngakho-ke, lapho uJohn, i-guru, wanika Ubhapathizo, waphatha ubhapathizo ngamanzi. Ngokuvumelana ne Leyo ndlela, uJesu wathola no-Upadasa kuJohane. Kulokho Isikhathi, uJohn wabona uJesu wakhuluma.

  Yilokhu iVangeli likaMathewu lithi ngamavesi 3:14 futhi 3:15. <strong>Lapho uJesu eza kuye, uJohane wazama ukumvimba, esithi, "Ngidinga ukubhapathizwa nguwe, futhi uyafika mina? " UJesu waphendula wathi: "Akube njalo manje; kufanelekile ngathi Yenza lokhu ukufeza konke ukulunga (ukuhlakanipha). " </strong>Ngisho noJesu wathi Umuntu kumele athole ubhapathizo kusuka ku-guru ngokuya nge Isiko lokuhlakanipha. Ngiphinde ngasho into efanayo ngobhapathizo.

  UJesu wagunyaza abafundi bakhe ukuba babhapathizwe futhi bathi, "Bonke abantu badinga ukubhapathizwa, hhayi nje i-caste noma iqembu." Yena futhi wabatshela ukuthi banikeze incwadi yokungena kaYise, iNdodana, noMoya oNgcwele. UJesu watshela abafundi bakhe ukuba benze umsebenzi ngoba uNkulunkulu wayengeke abe njalo emhlabeni njengomuntu ozopha UCadesa. Phakathi kwa-Ngaphezu kokubhapathizwa, uJesu wabuye watshela abafundi bakhe Bafundise ukulalela zonke izinto watshela abafundi bakhe.

  UJesu wathi futhi, "Ngihlala nginawe," ngaphandle kokubangela ukungabaza kubafundi ukuthi kwakungeyona i-gurus. Kuyaphawuleka wathi, <strong>"Nginawe njalo, kuze kube sekupheleni kwe yuga. "</strong> Labo abaziyo ngama-yugas angabeka umbuzo Lapho bezwa lokho uJesu akusho. IYuga (era) akapheli, futhi Omunye uYuga uqala ekugcineni kweYuga yamanje. Ngaleso sizathu, Kungani uJesu athi kuphele ama-yugas, lapho kukhona akupheli kubo? Impendulo imi ngalendlela elandelayo. Isikhathi sihlala njalo futhi Ihlala phakade, njengoNkulunkulu (Paramatma). Isikhathi, ukuba Isidlaliso sikaNkulunkulu, siphinde saphakade. Kusukela ngesikhathi uParamatma, Imiphefumulo emithathu yeqambelwe ngemuva kwesikhathi. I-Paramatma ihlukene phakathi Emiphefumulweni emithathu - uJeevatma, e-Atma, neParamatma. Amagama esedlule, ikusasa, kanye nesikhathi samanje kunikezwa isikhathi ukuze Isikhathi amagama amathathu avela kuwo. Igama elithi 'Yogam,' kudingekile ukufinyelela uNkulunkulu, kunikezwa isikhathi. Ngale ndlela, laba abane amagama anikezwa isikhathi, futhi igama elithi 'yogam' liyafakwa ukuphela kwawo wonke amagama amane ukukhombisa 'i-yogam' kuyadingeka Finyelela uNkulunkulu.

  Isikhathi sihlukaniswe izingxenye ezine ezibizwa ngeKruta, Traita, I-DVapara, noKali, ngokulandelana. Igama elithi 'yogam' lingezwe kulo Ukuphela kwegama ngalinye, kwakha amagama Kruta Yuga, Traita UYuga, iDVapara yuga, neKali Yuga. <strong>UKruta usho lowo (Atma) Ngubani owenza. I-Traita isho ezintathu. I-Dvapara isho eyodwa (paramatma) ehlukaniswe kulokhu. Kali kusho eyodwa (Jeevatma) ebhujiswa</strong>. Okokuqala Umbhalo waphezulu ubhekisa kule miphefumulo emithathu njenge <strong>Kshara</strong>, <strong>U-Akshara, noPurushottama</strong>. ETelugu, kusho iKshara I-jeevatma ebonakalayo, i-Akshara isho i-atma engaqondakali, futhi i-punushottama isho i-paramatma, ephakeme kunabo bobabili Jeevatma ne-ATMA. Embhalweni wokugcina waphezulu, ivesi 50:21, lezi ezintathu zibizwa <strong>ngokuthi Umgibeli, Umshayeli, kanye Ufakazi, </strong>nasemBhalweni wesibili waphezulu, <strong>iNdodana, Ubaba, noMoya oNgcwele. I-Yogam</strong>iyadingeka baqonde laba abesilisa abathathu (i-Purusha), yingakho Igama elithi 'yogam' lingezwe ekugcineni kwamagama amane eYuga. Nge-yogam, uJeevatma uyazi ngokwakhe; Ngakho-ke ibizwa Kali Yogam. Nge-yogam, u-Atma uzokwaziwa; Ngakho-ke ibizwa Kruta Yogam. Ngo Yogam, umuntu angafinyelela i Paramatma; Ngakho-ke, Ibizwa ngokuthi yi-Traita Yogam ne-Dvapara yogam. Labo Ukuceba ngobuhlakani baphezulu kwanika lawa magama. Ngokuhamba kwesikhathi, traina waba treta, futhi iZwi le-yogam laba nguYuga. Yingakho evesini, '<strong>ukuphela kwe-yuga' </strong>kusetshenziswa esikhundleni <strong>'sokuphela kwe i-yogam. ' </strong>Lapho kusetshenziswa igama elifanele, kusho isitatimende sikaJesu ngokuthi ngizo njalo ube nawe kuze kube sekupheleni kwe-yogam "kungaba Kuhunyushwa ngokuthi "Nginawe njalo kuze kube sekupheleni kwe yogam. " Lapho uJeevatma efika ekugcineni kwe-yogam, ehlanganisa NginoNkulunkulu. Lapho uNkulunkulu noJeva behlukile, i-yogam kudingekile ebunyeni noNkulunkulu futhi uNkulunkulu uzobe ekhona Jeevatma. <strong>Lapho i-yogam isiqediwe, uJeevatma uzohlangana KuNkulunkulu, </strong>futhi ngeke kusaba yisidingo sokuba uNkulunkulu abe ekhona ngeJeevatma. Lokhu kwencazelo ngemuva kwe isitatimende <strong>"kuze kube sekupheleni kwe-yuga."</strong></div></div>
</span>
`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 54,
verse: ` <b>(1)	IVangeli likaMarku, Isahluko 2, 19 naku-20 amavesi.</b>`,
meaning: `<b>
(2:19) Izimenywa zoMyeni zingashesha kanjani lapho Unabo? Ngeke, isikhathi eside njengathi banaye nabo.
<br><br>
(2:20) Kepha isikhathi siyofika lapho umkhwenyana ethanda Kuthathwe kubo, futhi ngalolo suku bayozila. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abanye abantu beza kuJesu babuza, "Kungani kunjalo Abafundi bakaJohane nabafundi babaFarisi bazila ukudla, Kepha hhayi okwakho? " UJesu waphendula ngamavesi alandelayo. Kulokhu umongo, ukuzila ukudla kusho ukugwema ukudla, okuvamile okushiwo yizwe. ETelugu, igama lomyeni 'Pellikoduku,' ehumusha 'indodana yomshado.' ETelugu, ibinzana elithi "indodana yomshado 'linencazelo ekhethekile ngoba igama elithi 'umshado' (noma 'pelli' eTelugu) lifanekisela uNkulunkulu ku Ngokomoya. Ngakho-ke, 'indodana yomshado' ibhekisela kuJehova Ndodana kaNkulunkulu. Lapho uJesu, iNdodana kaNkulunkulu, unabalandeli bakhe, Bazothola injabulo futhi hhayi ngokushesha. Kodwa-ke, lapho U'mkhwenyana' (INdodana KaNkulunkulu) Ususwe kubo, Labo ababenaye bayozila ngosizi ngoba esuka kusuka kubo. Ngokufanayo, abafundi bakaJesu ngeke basheshe basheshe bazishize inqobo nje uma yena ukhona nabo. Lapho uJesu engekho, azoshesha ukungena usizi. Ibinzana elithi 'UMKWENYANA' (indodana yomshado) kufanele kuqondwe njengokubhekisele kwiNdodana kaNkulunkulu.</div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 55,
verse: `<b>(2) IVangeli likaMarku, Isahluko 4, 38th no-39 amavesi.</b>`,
meaning: ` <b>
(4:38) UJesu wayesemuva, elele emjuka. Le khasi abafundi bamvusa, bathi kuye: "Mfundisi, musani Unakekela uma siminza? "
<br><br>
(4:39) Wasukuma, wakhuza umoya, wathi ku Amagagasi, "ethule! Yiba! " Khona-ke umoya wawufa phansi Kwakuzolile ngokuphelele. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho uJesu nabafundi bakhe bewela ulwandle ku isikebhe esincane, bahlangana nesivunguvungu, futhi isikebhe saqala ukuthatha amanzi ngenxa yamagagasi. Abafundi Weukwesaba kabusha futhi wesaba ukuthi bazocwila. Bavuka uJesu futhi wamtshela ngesimo esinamandla. UJesu wavuka, wakhuza Umoya, futhi wayala amagagasi abe nzima. Umoya waphela, nehla ezolile phezu kolwandle. Abafundi babekhona wamangala wambuza omunye komunye, "Kuyisimanga, futhi kanjani Ngabe kwenzeka? " Babona amandla kaJesu, kepha abakwenzanga Qonda ngokugcwele isizathu sawo. Kukhona ukuhlakanipha okumangalisayo Kulesi sehlakalo.

  UJesu akayena umuntu ojwayelekile; Kumele kugcizelelwe lokho UnguNkulunkulu, owabheka futhi waziphatha njengendoda ejwayelekile. Lapho uNkulunkulu, uMoya oNgcwele, eza ngesimo somuntu, akekho ongakwazi Mvume. Ukuzalwa kukaNkulunkulu kuyimfihlo lapho engumuntu ukuba, futhi akekho ongamazi ngezwe ulwazi. Kungenzeka kuphela ukwazi ukuthi umazi Ukuhlakanipha. Kunezindlela ezimbili zokuqaphela ukubonwa kukaNkulunkulu kususelwa ekuhlakanipheni: 1) Kuyaziwa ukuthi kukhona uNkulunkulu Ukufakwa emzimbeni noma kuphi lapho uNkulunkulu anguNkulunkulu, khona akekho onayo kuchaziwe, kwembulwa ngokwesayensi. 2) kungashiwo lokho I-Paramatma isesimweni somuntu nomaphi lapho iPrakruti ilawulwa khona. Akekho umuntu ongabona ukuhlukaniswa kukaNkulunkulu ngaphandle kwalawa amabili Izindlela.

  UDevatas wakhothamela eRavana Brahma eTraita Yuga. Lapho eyalile amaplanethi ayisishiyagalolunye, kwaziwa ukuthi yena kwakungeyona indoda evamile. URavana Brahma ufundise i-Dharmas Divine, ezingaziwa noma ngubani, futhi zenza abantu bazijwayeze zona. Ngakho-ke, kwaziwa ukuthi uRavana Brahma unguNkulunkulu ukufakwa emzimbeni. Ngokufanayo, kwaziwa ngokuthi iKrishna eDvapara UYuga wayengumuntu kaNkulunkulu lapho eyalile ilanga futhi Ufundise Dharmas eBhagavad-Gita. UJesu, oweza njengomuntu Eminyakeni engu-2 000 edlule, yaqashelwa njengoNkulunkulu ngezindlela ezimbili: ngo eyala ulwandle futhi ufundise ama-dharmas aphezulu. Isivunguvungu Ngesikhathi sohambo lolwandle kwakubonakala sengathi kusiza inhloso yokwenza Abantu bayakwazi ukuthi uJesu wayengubani. Noma ukufakwa kukaNkulunkulu kuyimfihlo, uNkulunkulu wanikeza leli thuba ukwazi.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 56,
verse: `<b>(3)	IVangeli likaMarku, Isahluko 5, 38th, 39th, 40th, 41st, 42nd kanye amavesi angama-43.</b>`,
meaning: `<b>
(5:38) Lapho befika ekhaya lesinagoge umholi, uJesu wabona isiyaluyalu, nabantu abakhala futhi ekhala kakhulu.
<br><br>
(5:39) Wangena wathi kubo: "Okwenza konke lokhu Isiphithiphithi kanye nokukhala? Ingane ayifile kepha ulele. "
<br><br>
(5:40) Kepha bamhleka usulu. Ngemuva kokuba ababeke bonke ukuphuma, wathatha uyise nonina wengane kanye nonina abafundi ababenaye bangena lapho ingane yayikhona.
<br><br>
(5:41) Wamthatha ngesandla wathi kuye: "Talitha Koum! " (okusho ukuthi "ntombazane encane, ngithi kuwe, vuka!").
<br><br>
(5:42) Ngokushesha le ntombazane yasukuma yaqala ukuhamba azungeze (wayeneminyaka eyishumi nambili). Kulokhu babekhona emangele ngokuphelele.
<br><br>
(5:43) Wanikeza ama-oda aqinile ukuba angavumeli muntu azi ngalokhu futhi wabatshela ukuthi bamnikeze okuthile abangakudla.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuyamangaza kakhulu lapho umuntu ebuyela empilweni ngemuva kokuthi kumenyezelwe ukuthi ushonile. UJesu wabuyisa abantu abaningana kwabafileyo ngesikhathi sokuphila kwakhe. Akazange avuse abanye kuphela, Kepha futhi wavuka kwabafileyo ngokwakhe. Uma sicabangela lokhu Umcimbi, ezinye izimfihlakalo ezingaziwa zizombulwa. Bangu izinhlobo ezine zokufa: ukufa okufika ngesikhathi (ukufa kwemvelo), ngokungafanele ukufa, ukufa kwesikhashana, nokufa kokugcina. Uma umuntu ubona ukufa kokugcina, ngeke bazalwe kabusha; Esikhundleni salokho, bathola inkululeko noma i-moksham. Ukufa Kwemvelo yi- uhlobo oluvame kakhulu lokufa, lapho umuntu eshiya khona Umzimba wamanje bese uya kokuzalwa okulandelayo. Akunakukhetha ngaphandle kokuya kokuzalwa okulandelayo ngokufa kwemvelo.

  Endabeni yokufa okungazelelwe, umuntu akayenzi ngife ngokuphelele kodwa esikhundleni salokho ulahlekelwa yingxenye yomzimba wabo futhi uyaqhubeka ukuhlala nengxenye esele. Yize kungabonakala Akunakukholwa, yilokhu okwenzekayo. Umzimba womuntu uqukethe kwezingxenye ezimbili. Umzimba womuntu nemizimba yazo zonke izidalwa eziphilayo ziqukethe izingxenye zombili zenyama (ezibonakalayo) nezingezinhle (ezicashile). Endabeni yomzimba womuntu, umzimba wenyama wakhiwa kwezingxenye eziyishumi, futhi umzimba ocashile wakhiwa izingxenye eziyishumi nanhlanu. Uma kwenzeka kufa kungazelelwe, umuntu ushiya ngemuva kwawo umzimba wenyama wezingxenye eziyishumi futhi uyaqhubeka nokuba khona nge umzimba ocashile wezingxenye eziyishumi nanhlanu. Ngenxa yalokho, umuntu onawo ubone ukufa okungazelelwe kungabhekwa 'kufile uhhafu.' Lapho wonke umzimba ocashile ugcina efa, kuholela ukufa kwemvelo, nomuntu uya kokuzalwa okulandelayo. Ngesikhathi ukufa okungazelelwe, umuntu akabonakali, kepha ayaqhubeka zikhona ngomzimba wazo ocashile kuze kube yilapho zithola ukufa kwemvelo.

  Okwamanje, akekho owaziyo ukuthi kwenzekani ngesikhathi ukufa kwesikhashana. Ekufeni kwesikhashana, yonke imisebenzi yomzimba phela, futhi i-jeevatma ihlala emzimbeni kepha isesimweni se Ukulala. Ngokufa okwesikhashana, umuntu uvela efile, kepha UJeevatma uhlala emzimbeni. Lokhu kuholele ezigabeni lapho Abantu abathola ukufa okwesikhashana babengafanele Umethe ufile, wangcwatshwa, yize ayesaphila. -Nokuba umuntu angabona ukuthi umuntu oye wabhekana nesikhashana ukufa akufile empeleni. Ngenxa yalokho, kuye kwaba khona Izimo eziningi zabantu bangcwatshwa bephila.
<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
Indaba ka-Abdul Aziz eJammu naseKashmir
</b></ion-col></ion-row>
  NgoDisemba 7, 2009, indaba evezwe ngo-1: 30 pm ku- Isiteshi se-TV9. U-Abdul Aziz, indoda eneminyaka engu-60 ubudala, yayidlulile a isonto Phambilini, ngoNovemba 30, 2009, eRajouri, idolobhana elalingena UJammu noKashmir. Ukulandela isiko lamaSulumane, njengoba ayenguye UMuslim, wangcwatshwa.

  Ezinsukwini ezintathu emva kokungcwatshwa kwakhe, amaphoyisa athola a isikhalazo sisolwa ngokuthi u-Abdul Aziz akazange ashonile ngokwemvelo, futhi Lokho kudlala kabi kungahle kuhileleke. Amaphoyisa abhaliswe ngokushesha Icala, laya emathuneni, futhi lakhipha u-Abdul Isidumbu sika-Aziz phambi kwezihlobo zakhe. Isidumbu sakhe ngaleso sikhathi kuthunyelwe esibhedlela sikahulumeni ukuze kuhlolwe isidumbu sangemva kwesidumbu.

  Ngesikhathi se-autopsy, udokotela waqala washaya ikhanda nge Ummese wokuhlola ugebhezi, futhi ikhanda lalimala. Ku Ukuthukuthela kwawo wonke umuntu okhona, u-Abdul Aziz, ocatshangelwe efile Kuze kube yileso sikhathi, uvuke wabuza ngalesi simo. Le khasi udokotela omangalisayo, usacubungula ithuba elingalindelekile Imicimbi, yahlala phansi, yabuza, "Senza i-autopsy." U-Abdul U-Aziz waphendula ngomoya ophansi, "Ngiyaphila." Udokotela ngokushesha wazise izihlobo zika-Abdul Aziz zesigameko esiyisimangaliso, futhi bafika bambuyisela ekhaya.

  Ezinsukwini ezintathu ngaphambili, udokotela ofanayo wayesehlole u-Abdul I-Aziz imizuzu eyishumi nanhlanu futhi yaqinisekisa ukufa kwakhe. Udokotela, Ukubona uhlobo olungejwayelekile lomcimbi, wachaza njengesimangaliso. Abantu baseRajouri Village bebenjalo ngokulinganayo umangele ukuthi u-Abdul Aziz, ababemngcwabe nabo izandla uqobo, wayebuyele empilweni ezinsukwini ezintathu kamuva.

  Njengamanje, sekudlule iminyaka eyisithupha nezinyanga eziyisikhombisa Isigameko senzeke. Zonke iziteshi ze-TV zakhipha lezi zindaba ku- ngosuku olufanayo. Njengoba kunikezwe ukuthi lesi sehlakalo sidlulile phambi kobukhona odokotela, ihlala inganakwa futhi idlula nje inkolelo-ze.
<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
 Isigameko esifundeni seVisakhapatnam
  </b></ion-col></ion-row>
  ISrungavarapu Kota itholakala endleleni eya e-Araku Valley eVisakhapatnam. Kunomuzi ogama lakhe linguSaarepuram, Itholakala ku-12 km kude neSrungavarapu KOTA. Kuleli dolobhana, waphila owesifazane oneminyaka engama-67 ubudala ogama lakhe behlushwa umfutho wegazi ophakeme kanye nesifo sikashukela kwabayishumi iminyaka. Uthole ukwelashwa kuDkt. I-Dharmalingachari, udokotela ophezulu eSrungavarapu Kota. UDkt UDharmalingachari wayengumakadebona owaziwayo oneminyaka engama-60 ubudala nge degree in M.B.B.S.

  Eminyakeni eyisithupha edlule, ngolunye usuku kusihlwa ngo-6 PM, Samudramma wayekhona ulethwe kuDkt Dharmalingari ngemuva kokushiwo kufile ngodokotela esibhedlela sikahulumeni. Lapho udokotela Wayihlola, akakwazanga ukuthola ukushaya. Wamenyezeleka, besho ukuthi wayengadingi ukwelashwa njengoba ayenakho akukho ukuphefumula noma ukushayela. Isidumbu sakhe sabuyiselwa edolobhaneni lakubo, 12 km, ukuze angcwatshwe ngosuku olulandelayo njengoba kwase kuvele ebusuku. Kodwa-ke, umzimba kaSamudramma wagcinwa emphemeni we Izinsuku ezintathu ngenxa yemvula enkulu eyathatha izinsuku ezimbili. Kwamangaza wonke umuntu, wasukuma wabiza izihlobo zakhe Ngokwesine ekuseni. Ngokushesha baxhumana noDkt. UDharmalingachari wamletha kuye ngemuva kwezinsuku eziyi-15. Le khasi UDokotela wabe esembuza ukuthi abonile yini izinceku zikaYama noma I-Yamaloka, njengoba yayimenyezelwe ifile izinsuku ezintathu. Yena wathi akabonanga lutho.

  Lesi sehlakalo senzeka eminyakeni eyisithupha edlule phambi kwe Udokotela, ngakho-ke angeke ukwenqatshelwe noma axoshwe njengezinkolelo-ze.
  <ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
  Osindile kusuka kuPyre (ehunyushwe kusuka kuTelugu Iphephandaba) NgoJulayi 10, 2012, Sakshi News

  </b></ion-col></ion-row>
<b>UChennai:</b> NgoLwesibili, odokotela bakuqinisekisa ukufa kwe Muttusamy oneminyaka engu-50 ubudala weKrishurayapuram ku-karur Isifunda saseTamil Nadu. Bayalulekwa izihlobo zakhe ukuthi baqhubeke nemicikilisho yomngcwabo. Ukukholelwa ukuthi uMtuttuswamy wayenayo unqotshwe ukuguga nokugula, izihlobo ziqoqele e amathuna ukwenza i-pyre.

Njengoba bebezoqala umlilo, muttuswamy's UDade Paapatti wasondela emzimbeni. Ukunqoba usizi, yena wawela isidumbu wamemeza wathi, "Mfowethu, uzongishiya?" Kulelo mzuzu omangalisayo, imilenze nezingalo zikaMutushwamy zihambile, Futhi kwaba khona ukububula okuncane. Izihlobo ezinezinyembezi zashaqeka Futhi kwamemeza, "Muttuswamy ... Mutuswamy!" Muttuswamy wavuka esuka ePyre kube sengathi uvele uvukile ebuthongweni futhi wabuza izihlobo zakhe ngokwenzekile. Bonke bamanga Muttunumy ngenjabulo futhi wambuyisela esibhedlela. Ikakhulukazi, indodakazi kaMuttushamy yashada nje usuku ngaphambili.
  <b>Udokotela:</b> Izihlobo zigxekile odokotela ngazo ukunganaki kwabo ekwelapheni uMutusamy, owayekade ekhona wangeniswa esibhedlela sendawo ezinsukwini eziyishumi ezedlule ngemuva kokugula. Bona Ukulahla odokotela ngalesi sigameko, kanye nezindaba ngokushesha Sakaza esifundeni saseKarur. Lesi sehlakalo sivumile impikiswano ebanzi futhi yabonwa njengesinye isibonelo se ukufa kwesikhashana.<img src="assets/img/temp_death.png"/>

    Uma othile ehlangabezana nokufa okwesikhashana, kungenzeka usinde kuleso simo kuze kube unyaka noma ngaphezulu. Imvuselelo ingakwazi zenzeka nge-spontounely noma ngosizo lomuntu ukushaya noma ukubavusa. Ezimweni eziningi, abantu abathile Ukufa okwesikhashana ekuseni uvuke ku kusihlwa, kanti abanye bathola ukuqaphela ngemuva kwesonto noma Okuningi. Muva nje, indoda egama linguMuttuswamy eTamil Nadu ubuyele empilweni ngemuva kokuba emngcwabeni we-Pyre. Ngokufanayo, uJesu wavusa intombazane eyayinokufa isikhashana kwesikhashana, ememezela ukuthi empeleni wayengekho empeleni. Kukhona futhi Ukulandisa okungokomlando kukaJesu ukuvuselela yena. Kubalulekile Qaphela ukuthi zonke lezi zehlakalo ezibangelwa okwesikhashana Ukufa.

  Umbhalo wethu, <strong>'imfihlakalo yokufa,' </strong>Dlulisa ku izinhlobo ezine zokufa kanye neqiniso labo. Ukufunda lo mbhalo kuzokwenza ukukunikeza ukuqonda okuphelele kwe izinhlobo ezahlukahlukene zokufa.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 57,
verse: `<b>(4)	IVangeli likaMarku, Isahluko 7, 15, 16, 16 17th, 18, 19, 19, 20th, 21, amavesi angama-22 nangama-23.</b><`,
meaning: `<b>
(7:15) Lutho ngaphandle komuntu ongawangcolisa ngalo ukuya kubo.
<br><br>
(7:16) Esikhundleni salokho, yilokho okuphuma kumuntu ukuthi uyamngcolisa.
<br><br>
(7:17) Ngemuva kokuba eseshiye isixuku wangena indlu, abafundi bakhe bambuza ngalo mfanekiso.
<br><br>
(7:18) "Ingabe uthambile kangaka?" ebuza. "Awukuboni lokho akukho lutho olungena umuntu kusuka ngaphandle olungaphandle zingcolise?
<br><br>
(7:19) Ngoba ayingeni enhliziyweni yabo kepha baye kwabo isisu, bese uphuma emzimbeni. "
<br><br>
(7:20) Waqhubeka: "Okuphuma kumuntu yilokho uyamngcolisa.
<br><br>
(7:21) Ngoba kuvela ngaphakathi, enhliziyweni yomuntu, ukuthi Imicabango emibi yaphela - ukweba okubi, ukweba, ukubulala,
<br><br>
(7:22) Ukuphinga, ukuhaha, ububi, inkohliso, amanyala, umona, Ukunyundela, ukuzikhukhumeza, nobuwula.
<br><br>
(7:23) Zonke lezi zinto zobubi zivela ngaphakathi futhi zingcolisa a umuntu.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Indoda izalwa ine-gunas embi eyisithupha nama-gunas amahle ayisithupha. Gunas futhi ukhula kanye nomuntu ngamunye, ethonya i- UBuddhi otholakala ekhanda futhi wenza izenzo zangaphandle ngaphansi komyalo wayo. UBuddhi uyalela uKamendriyas (izitho ze senzo) ukwenza izenzo ngaphandle komzimba, zisebenza ngaphakathi ngokuya ngeGunas. Njengoba uBuddhi usebenza ngokuhambisana nalo gunas, i-gunas engemihle ithonya uBuddhi, oqondisa Izenzo zeGunas, kanye nezinzwa zangaphandle ziyaphendula ngokusho komyalo kaBuddhi. Lezi zibhamu zibonakala njenge izimfanelo ezingathandeki ezifana nokuhaha (KAAMA), intukuthelo (krodha), I-Avarice (Lobhe), Intshiseko (Moha), Ukuzikhukhumeza (Madam), kanye umhawu (matsara). Ama-gunas aqala umthelela iBuddhi futhi Ngemuva kwalokho abusa umzimba lapho. Konke okungalungile okwenziwe ngabantu kusekelwe ethonyeni lama-gunas ngaphakathi komzimba.

  Ukudla okudliwe kusuka ngaphandle kunomthelela ku Impilo yomzimba kepha ayithinti iBuddhi. Ukudla okunjalo kuyinto iguqulwe yaba yizakhi zomzimba, ukukhuthaza inhlala-kahle emzimbeni. Le khasi Ukudla Kwabantu Ukudla akunamthelela oqondile kuBuddhi; Ingena umzimba, ukusekela impilo yonke. Lapho ukudla kuzuza umzimba, kuyaqinisa futhi kugcinwe impilo enhle. Ngakho-ke, ukudla okungena emzimbeni ngaphandle akuholeli ekungathandeki isimilo kubantu. Kungumphumela we-gunas evela kusuka ngaphakathi emzimbeni ongaphumela ekuziphatheni okubi. Ngenxa yalokho, ekuphambukeni emithethweni yokudla kungamukeleka, Kodwa ukugcina ukulawula phezu kwetonasi kubalulekile.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 58,
verse: ` <b>(5)	IVangeli likaMarku, isahluko 3, ivesi lama-35.</b>`,
meaning: ` <b>
(3:35) Noma ngubani owenza intando kaNkulunkulu ungumfowethu nodadewethu nomama. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho singabaza lokho intando kaNkulunkulu, singakuqonda ukuthi imiyalo yakhe (i-Dharmas) imelela intando yakhe. Ngase- Silalela imiyalo yakhe, sizivumelanisa nentando kaNkulunkulu. Ngakolunye uhlangothi, uma senza ngokwezifiso zethu ngaphandle Sinamathela emiyalweni yakhe, sephula ukuholwa sakhe futhi silandele Intando kaSathane. Lapho uNkulunkulu efaka emhlabathini njengeBhagavan, Labo abakuqonda ukuhlakanipha kwakhe, yenza ngokuhambisana nakho, asakaze izimfundiso zakhe, futhi asabalalise imiyalo yakhe uzosondela kuye. Ngakolunye uhlangothi, labo abakhetha indlela kaSathane oba izitha zikaNkulunkulu. Labo abasebenza ngenkuthalo ukuthuthukisa amazwi kaNkulunkulu nokunamathela emiyalweni yakhe kubhekwa njengodadewabo, abafowethu, kanye nabalandeli abaseduze kakhulu. Ukuthi uNkulunkulu ukhona emzimbeni emhlabeni noma cha, kubalulekile ukubona ukuthi i-ganas (labo abanokuhlakanipha) ngaphakathi kwakhe imingcele elandela imiyalo yakhe izothathwa njengesondele KuNkulunkulu.</div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 59,
verse: ` <b>(6)	IVangeli likaMarku, Isahluko 4, ivesi 17.</b>`,
meaning: `<b>
(4:17) Kepha njengoba bengenampande, bagcina kuphela a isikhathi esifushane. Lapho kuvela ubunzima noma ukushushiswa Ngenxa yeZwi, ngokushesha bawa. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  E-gita, iNkosi uKrishna ukhuluma ngezinhlobo ezine ze abazinikele: 1) Labo abakhonza enkingeni, 2) labo abathandazayo ukuthola ingcebo, 3) labo abanesifiso sokwazi ngoNkulunkulu, 4) Labo abanobuhlakani (GNANIS). INkosi yathi ku UGita ukuthi uthanda uGnanis. Ngokufanayo, Nkosi Jesu uxoxa ngawo izinhlobo ezine zabazinikele eBhayibhelini, kepha leli vesi libhekisele kulo Lapha uzungeza eyodwa yalezi zinhlobo. Abanye abantu Ufuna ukwazi ngobuhlakani bukaNkulunkulu futhi ufuna ukuyilandela. Kuqala USatashe ukulinga ngendlela yayo. Babhekana nezinkinga eziningi kulokho inqubo. Lapho be-ECO ubunzima be-wonter ngenxa yokuhlakanipha, USathane uqala ukushumayela emakhanda abo. USathane wathi kubo: "Nina babhekene nezinkinga ngoba uyazi ukuhlakanipha. Ungabi ubuwula. Ungabalekela izinkinga ezizayo ngokwenza sengathi indlela yokuhlakanipha. " Labo abangaqondi iqiniso Umqondo wokuhlakanipha ungaqala ukwenza ngokufanele. Ngemuva kokunye isikhathi, uma umuntu ebhekene nezinkinga ngenxa yobuhlakani noma i-guru, Futhi lezi zingqinamba ziholela ezingxabanweni nabanye noma ukwesaba kwe Ukushushiswa, iMaya kuzosebenzisa lesi simo. UMeya kwakha lezi zinhlobo zemicabango ekhanda lomuntu, futhi abantu bangaqala ukucabanga, "bekufanele ngabe ngihlakaniphile kusukela Isiqalo. Ngingene kulesi simo ngoba ngilandele UGuru ngokuhlakanipha, yize izihlobo zami ezisondelene nazo zingixwayisa hhayi. Kungani kufanele ngihlupheke kulokhu kuhlakanipha? Kungcono Ukulahla ukuhlakanipha kanye ne-guru. Kulandela ngokungaboni ukuhlakanipha kuzokwenza Kuholela ekuchithekeni komndeni wami kanye nami kuphela. Njengoba siku Umhlaba, kufanele sivumelane nezindlela zayo. Labo abasehlathini babhekene no izinkinga kungakhathalekile izenzo zabo, kodwa bekuzoba yisiwula nathi edolobhaneni sizokulwa nezindlela. " Imicabango enjalo ingakwazi yenza abantu baziqhelelele ekuhlakanipheni, yebo ngemuva kokuba sendleleni isikhashana. Ngakho-ke, uJesu wathi ukuthi ngisho nalabo abebesendleleni yokuhlakanipha Isikhathi esithile sizokwenqaba lapho kukhandleka futhi kuhlukunyezwa ngenxa kokuhlakanipha.

  Labo abakubuse ngempela ukuhlakanipha kukaNkulunkulu futhi baqonde Ukubaluleka ngeke kwenzeke ezilingweni zikaSathane. Okukodwa Ayikwazi ukubalekela imichilo kaSathane ngaphandle kokuthi bakwazisa ukuhlakanipha ne-guru yabo engaphezu komkabo, abangane abaseduze, futhi Impilo Yabo, Yize Yazi Ukuthi Bangabhekana Nokushushiswa noma ukufa endleleni yokuhlakanipha. Ngisho abafundi beNkosi uJesu besaba onogada ngosuku lokuboshwa kwakhe futhi washiya i-guru yabo ukusindisa izimpilo zabo. Babalekela ukwesaba ngenxa yenkinga nokushushiswa. Ukube babekhona walungiselela ukubhekana nokufa kanye neNkosi uJesu ngalolo suku, abo Ukuphila bekungabusiswa. UMaya wavimba abafundi ngokwengxenye ngalolo suku. Ngokungafani nabo, kufanele sime siqine ebusweni kwanoma iyiphi inkathazo noma ukushushiswa endleleni yokuhlakanipha. -Busisekile nguyena ozimisele ukufela indlela yaphezulu kunokuba Ukuphila ngokwesaba endleleni yokungazi. EBhagavad-Gita, INkosi yathi, <strong>"Kungcono ukufa eDharma kaParamatma, okuyi-Dharma yakho, kunokuba wesabe endleleni kaSathane, okungeyona i-dharma yakho. "</strong></div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 60,
verse: ` <b>(7)	IVangeli likaMarku, Isahluko 4, 21st no-22 amavesi.</b>`,
meaning: `<b>
(4:21) Wathi kubo: "Uyakubeka isibani ukuze usibeke phansi Ngaphansi kwesitsha noma embhedeni? Esikhundleni salokho, awukubeki ukuma kwalo?
<br><br>
(4:22) Noma yini efihliwe kuye kwenziwa ukuthi ivezwe, futhi noma yini efihliwe yenzelwe ukukhishwa kuvulekile.    </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Esikhathini samanje, ama-gurus amaningi athi abafundi akufanele babelane nabanye ukuhlakanipha kwabo. Bathi yabo Ukuhlakanipha kuyimfihlo futhi kufanele kwabelwane ngalo kuphela abathole upadasa. Lapho umuntu ebabuza a Umbuzo, bayakugwema ukuphendula. Kodwa-ke, ukuhlakanipha akufanele zifihlwe. UNkulunkulu ngokwakhe uza ngesimo somuntu futhi athathe inkathazo yokudlulisa ukuhlakanipha. Yize singazi iqiniso ukuhlakanipha, akufanele singenze izaba zokwabelana kancane ukuhlakanipha esikwaziyo. Ukuhlakanipha kufana nesibani esisusa ukungazi kwabanye. Njengoba nje into ebumnyameni ingabonakala ekukhanyeni kwesibani, into engaziwa ekungazini ingaba waqonda ngokuhlakanipha. Ukuhlakanipha kuyadingeka ukususa Ukungazi, njengoba nje isibani siyadingeka ukuqeda ubumnyama. Ukukhanyisa isibani bese bekugcina ngaphansi kwesitsha kuwubuwula. Ngokufanayo, akukhona ukuhlakanipha ukuba ungahlanganyeli nokuhlakanipha onakho. Ngisho nezimfihlo zenzelwe ukudalulwa. IBhagavavan yaveza Ukuhlakanipha okuhle kakhulu kwaphezulu emhlabeni. Kuleso simo, noma yini ephansi inani kunokuhlakanipha akunakufihlwa. Ayikho imfihlakalo ku Umhlaba ungagcinwa ufihliwe; Impela kuzophuma. Ukuhlakanipha KukaNkulunkulu kuyadingeka kuwo wonke umuntu futhi akufanele kugcinwe kuyimfihlo. Labo abafuna ukufihla ngeke benze kanjalo.</div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 61,
verse: `<b>(8)	IVangeli likaMarku, Isahluko 6, Ivesi 4.</b>`,
meaning: `<b>
(6:4) UJesu wathi kubo: "Umprofethi akwenzi Hlonipha ngaphandle kwedolobha lakubo, phakathi kwezihlobo zakhe futhi ekhaya lakhe. "     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  ETelugu, umprofethi uchazwa njengomuntu ofundisayo into ebalulekile. Ukuhlakanipha kweParamatma kuningi into ebalulekile kubo bonke abantu. Umuntu odlulisa Lokhu kuhlakanipha kubizwa ngokuthi umprofethi. Abantu abajwayelekile abazi ukuhlakanipha kwe-paramatma, ngaphandle kwalowo ovela Paramatma. Lowo ovela eParamatma futhi wazalwa Njengoba indoda ibizwa ngeBhagavava noma umprofethi. Umprofethi akayona ehlonishwe ekhaya lakhe, phakathi kwezihlobo zakhe, noma ezakhe idolobha ngoba kubonakala sengathi liyindoda ejwayelekile. Akunandaba Umuntu omkhulu kangakanani, kungokwemvelo ukubulawa phansi ikhaya nangezihlobo. Njengoba bembonile lo mprofethi kusukela ubuntwana, amalungu omndeni nezihlobo angahlekwa usulu, bethi akanabukhulu nokuthi iziwula kuphela ezizolalela kuyena. Bangase futhi bathi akazi lutho ngaphezu kwalokho abakwaziyo. Ngisho NKULUNKULU! kumalungu omndeni wakhe. Ngisho noma abanye bayabona futhi Khuluma ngobukhulu bakhe, izihlobo zakhe namalungu omndeni wakhe Buza ukuthi ufuna ubuhleni. Abazi Ukubaluleka kwakhe nokuhlekwa usulu, kuveza izinto ezifana Yena wamola embhedeni futhi akhuthaze izingubo zakhe zangaphansi kwakhe ubuntwana. Ngakho-ke, ngenkathi engumprofethi kwabanye, akayena ehlonishwe ekhaya lakhe nasedolobheni. Ngokwesimiso, INkosi uJesu ayibonwa njengomprofethi ngumndeni wakhe futhi izihlobo.</div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 62,
verse: `<b>(9)	IVangeli likaMarku, Isahluko 8, ivesi 38.</b>`,
meaning: `<b>
(8:38) Uma umuntu enamahloni ngami namazwi ami kulokhu Isizukulwane esiphingayo nesona, iNdodana yomuntu intando babe namahloni ngabo lapho efika kuYise Udumo ngezingelosi ezingcwele. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abanye abantu bafunda ukuhlakanipha emphakathini kodwa bakhethe ukugcina kuyimfihlo. Banomuzwa wokuthi ukwazi ukuhlakanipha kuyiphutha; Ngakho-ke, Bakwenza ngemfihlo. Bangazizwa benamahloni okuya ku I-Guru futhi ufunde ukuhlakanipha kubo, ngakho-ke yigcine ngiyimfihlo. Abanye abantu bafuna i-guru ukuze babe abafundi kepha bakhetha i-guru ecebile ngenxa yesimo sabo nengcebo. Banamahloni ithuba lokuya eGuru elimpofu, Noma ngabe lelo guru linokuhlakanipha okwengeziwe. Ngenxa yalokho, bakhetha I-guru ecebile okungenzeka ingeke ibe nokuhlakanipha okuningi. Nokho Abanye abantu bafundile ukuhlakanipha okuvela ku-guru, bayakwenza Akafuni ukubhekiswa kubo njengabafundi baleyo juru. Ngakho-ke, abaningi Abantu bazizwa benamahloni futhi banakekele kakhulu ukugwema ukuba kuvezwe.

  Umuntu angase abe namahloni ngezinto ezibonakalayo, kodwa oyedwa akufanele ube namahloni ngokuhlakanipha kweParamatma. Asicabangela isibonelo. Abantu ababili bahamba emgwaqeni. Eyodwa muhle kodwa umpofu futhi akahlakaniphile, kanti omunye unjalo engathandeki kodwa ecebile futhi ehlakaniphile. Basondele bobabili izihlobo. Abantu abababona endleleni bayobahlulela ngokuthi ukubonakala kwabo kwangaphandle, hhayi ngokuhlakanipha kwabo. Ngemva kwe-ngenkathi, isihambi siyawabona bese ebuza umuntu omuhle ukuthi ubani umuntu wesibili ngu. Omuhle unamahloni ukusho ukuthi umuntu ongakhangi uyisihlobo sakhe esiseduze ngenxa ukubukeka kwabo. Kunalokho, uvele athi bayazana okunye. Umuntu ongakhangi ucabanga ukuthi uke waba wethulwa njengomuntu omaziyo esikhundleni sokuba yisihlobo esiseduze ngenxa yokubukeka kwakhe. Kamuva, esinye isihambi siyababona bese ebuza lo muntu ongakhangi ukuthi ubani omunye. Njengoba ehlakaniphile, umuntu ongakhangi usabela ngendlela efanayo bethi bayazana nje. Omuhle umuntu uyakujabulela ukwethulwa njengomuntu amaziyo kunalokho kunesihlobo. Umuntu ongakhangi uyacabanga, &ldquo;Nami nginguye nginamahloni okwethula lesi siphukuphuku njengesihlobo sami esiseduze." Umuntu ongakhangi wayelandela ukuziphatha kwe- umuntu omuhle.

  Umhambi wesibili, owabuza umuntu ongakhangi, kwaba nomthetho iminyaka eminingi. Umthetho wakhe kwakuwukunikeza izinhlamvu zemali eziyi-10,000 uma wahlangana nezihlobo eziseduze. Nokho, nakuba babeseduze ezihlotsheni zabo, abazange bathole izinhlamvu zemali eziyi-10 000 ngoba bona abazange bazethule benjalo. Ngakho, okokuqala umuntu ompofu akatholanga mali. Kusukela okwesibili umuntu ucebile, akanandaba ukuthi uyitholile yini imali noma cha. Umuntu wokuqala walahlekelwa yimali ngoba enamahloni futhi eqamba amanga. Uma unamahloni ngokuhlakanipha ngoba nje abanye bengathandi khona-ke ukuhlakanipha kuyakuba namahloni ngawe. Umuntu wokuqala ulahlekile imali ngoba waqala waba namahloni waqamba amanga. Ngakho, ba ngeke ithole inkululeko yenzuzo yesikhathi esizayo. Ngokusekelwe kulokhu, INkosi yathi, <strong>&ldquo;Uma umuntu eba namahloni ngami nangamazwi ami, nginjalo futhi ube namahloni ngabo.&rdquo; </strong>Ngakho-ke, umuntu kufanele aqonde ukuthi kulungile ukuba namahloni ngezinto ezibonakalayo, kodwa eyodwa akufanele ube namahloni ngokuhlakanipha kukaParamatma.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 63,
verse: `<b>(10)	IVangeli likaMarku, isahluko 9, ivesi lesi-7.</b>`,
meaning: `<b>
(9:7) Khona-ke kwavela ifu labasibekela, futhi kwavela izwi efwini, lithi: “Lo yiNdodana yami engiyiyo uthando. Mlaleleni!”</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abantu abaningi abawazi amafu esibhakabhakeni. Phakathi nenkathi yemvula, amafu akhipha ukuduma nokwenza umsindo omkhulu. Amafu ayaphila futhi enza imisebenzi eminingi, kodwa izindima zabo ezithile azaziwa. Ngokomlando, iLanga wezwa ukuhlakanipha kwaphezulu amafu ayembule ekuqaleni isiqalo sendalo. Azikho izimfihlo ezingaziwa kwabakwa amafu emhlabeni. UNkulunkulu emva kwamafu wathi mayelana UJesu, <strong>&ldquo;Lo uyiNdodana yami ethandekayo. Mlaleleni.&rdquo; </strong>Ngakho-ke, ikuyintando kaNkulunkulu ukuthi abantu bezwe ukuhlakanipha kukaNkulunkulu kuJesu. Lokho uNkulunkulu akushoyo njengomuntu kuwukuhlakanipha kukaNkulunkulu, kodwa uma kungabantu ningalaleli, uNkulunkulu ukhuluma esemafwini. Nakuba abantu bangase bangahloniphi njalo lokho abanye abakushoyo, bayakwazisa lokho okushiwo abanye amafu athi, yingakho uNkulunkulu ekhuluma esemafwini esibhakabhakeni.</div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 3,
pageNumber: 64,
verse: ` <b>(11)	IVangeli likaMarku, isahluko 10, 17th kanye 18 amavesi.</b>`,
meaning: ` <b>
(10:17) Njengoba uJesu eqala indlela yakhe, indoda ethile yagijimela kuye wawa ngamadolo phambi kwakhe. "Mfundisi omuhle" wabuza: “Yini okufanele ngiyenze ukuze ngidle ifa lokuphila okuphakade na?”
<br><br>
(10:18) “Kungani ungibiza ngokuthi ngimuhle?” UJesu waphendula. “Akakho omuhle,ngaphandle kukaNkulunkulu yedwa.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Amanye amaKristu athi iBhayibheli lalikhona ekuqaleni eyabhalwa ngesiHebheru yabe isihunyushelwa kwezinye eziningi izilimi. Ngakho, amanye amagama awahunyushwanga ngendlela efanele. Ngokwesibonelo, igama elithi &ldquo;Mfundisi Omuhle&rdquo; lisetshenziswe kweyokuqala evesini lesibili, &ldquo;uNkulunkulu muhle.&rdquo; Nokho, esekelwe kulokho uJesu akusho, <strong>&ldquo;Akekho omuhle, ngaphandle kukaGodlone,&rdquo; </strong>Igama akufanele libe &lsquo;umfundisi Omuhle&rsquo; noma &lsquo;uNkulunkulu Omuhle.&rsquo; Umuntu ofundisa ukuhlakanipha ngokuqephuza angabizwa ngomuhle umfundisi, nomuntu owenza okuhle angabizwa umuntu omuhle.

  Kukhona abafundisi abahle kanye nabantu abalungile emhlabeni. Ngakho-ke, yona ngabe kube ukululaza UNkulunkulu ukubaqhathanisa futhi athi, <strong>&ldquo;Akekho ohambayo&mdash;ngaphandle kukaNkulunkulu yedwa.&rdquo;</strong> Ngaphandle kwalokho, akukho qondanisa phakathi kwamagama &lsquo;thisha omuhle&rsquo; emshweni wokuqala kanye &lsquo;nomuntu omuhle&rsquo; emshweni wesibili. Owesibili waphezulu umbhalo, iBhayibheli, selihunyushelwe ezilimini ezengeziwe kuneminye imibhalo emibili engcwele. IBhayibheli belinjalo ihunyushelwe ezilimini eziyi-1,400, okwenza kube ukuphela kombhalo esihunyushelwe ezilimini eziningi.

  Umbhalo wokuqala waphezulu uyisisekelo sowesibili umbhalo waphezulu, iBhayibheli, nombhalo wokugcina waphezulu, I-Quran. I-Quran inikeza ubufakazi ku-5:44, 5:46, 5:48, kanye 5:68 ukuthi <strong>ukuhlakanipha kombhalo wokuqala waphezulu, I-Taurat (i-Bhagavad-Gita), nayo ikhona kwenye imibhalo emibili. </strong>Ngakho-ke, lapho sicabangela i-wods esetshenzisiwe eVangelini likaMarku, 10:17 kanye 10:18, singakuqonda lokho kungase kube othisha abaningi abahle nabantu abalungile emhlabeni, kodwa akukho Uttama Purusha (Ophakeme) phakathi amadoda. Ngakho, njengoba kushiwo kuyiBhagavad-Gita, <strong>&ldquo;uNkulunkulu yedwa Purushottama.&rdquo; </strong>Kungashiwo ukuthi kusetshenziswe amagama angahlobene emavesini angenhla, lapho igama bekufanele libe khona &lsquo;Purushottama.&rsquo; Lokhu kuqondwa kahle uma ubheka amavesi 16, 17, kanye ne-18 esahlukweni se-15 seBhagavad-Gita, I-Purushottama Prapti Yoga.

  Ngokombhalo wokuqala waphezulu, munye kuphela Phurusha. Nakuba kunePhurusha elilodwa kuphela, uNkulunkulu uhlukene phakathi zibe ezintathu - Jeevatma, Atma, futhi Paramatma. Phakathi kwalokhu abesilisa abathathu, <strong>owesilisa ongcono kunoJeevatma futhi I-Atma yiParamatma, eyaziwa nangokuthi iPurushottama, </strong>njenge okukhulunywa ngakho eBhagavad-Gita. Kungashiwo ukuthi konke ngaphandle kwe-abesilisa abathathu yiPrakruti, okungowesifazane. Abesilisa nabesifazane emhlabeni wonke ahlobene nemvelo yabesifazane. Ngakho-ke, ku-UJesu wathi: <strong>&ldquo;Ningangibizi ngePurushottama (Uttama Phusha). UNkulunkulu kuphela u-Uttama Purusha. " </strong>Zintathu izinkolo ezinkulu emhlabeni. Abantu benkolo ngayinye bathatha umbhalo waphezulu futhi wathi lo umbhalo wethu. Nokho, ku iqiniso, le mibhalo emithathu ayihlobene nanoma iyiphi into ethile inkolo. Banikeza ukuhlakanipha kubo bonke abantu, futhi ngakho-ke, kufanele zithathwe njengemibhalo eqondiswe kubo bonke abantu.</div></div>
</span>`
},
{
chapterName: "IVangeli likaMarku",
chapterNumber: 4,
pageNumber: 65,
verse: `<b>(12)	IVangeli likaMarku, isahluko 16, 15th kanye 16 amavesi.</b>`,
meaning: `<b>
(16:15) Wathi kubo: “Hambani niye ezweni lonke shumayelani ivangeli kuyo yonke indalo.
<br><br>
(16:16) Okholwayo abhapathizwe uyakusindiswa; kodwa ongakholwayo uzalahlwa.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ngemva kokuba uJesu ebethelwe esiphambanweni futhi wabekwa ethuneni, wavuka kusukela ethuneni ekuseni ngeSonto ekuseni. Waqala wavela kuMariya Magdalena bese kuba nakwabanye abafundi. UJesu wabonakala kubafundi izikhathi ezingamashumi amathathu nantathu sebephumile ethuneni. Watshela amavesi amabili angenhla kubafundi abayishumi nanye lapho bahlala ndawonye ukuze badle. Ngoba bonke abantu emhlabeni banjalo ecwile ekungazini, Wayala abafundi Bakhe ukuba bahambe <strong>futhi ushumayele ivangeli, eliwukuhlakanipha kukaNkulunkulu</strong>, kubo. Umlayezo ofanayo uvezwa evesini 15, <strong>&ldquo;Hambani niye kuwo wonke amabandla emhlabeni futhi nishumayele ivangeli kukho konke okudaliweyo.&rdquo; </strong>Lapha, &lsquo;bonke abangcwele umhlaba&rsquo; awusho imihlaba ehlukene; libhekise kubantu abathi bathola ukuphila kwabo emhlabeni futhi bahlupheke ngezindlela ezihlukahlukene.

  UJesu futhi wathi, &ldquo;Shumayelani ivangeli kuyo yonke indalo.&rdquo; kusho ukushumayela ivangeli, ukuhlakanipha kwaphezulu, kubantu babo bonke iminyaka. Wathi mabashumayele ukuhlakanipha kwaphezulu futhi babanike imvume, &lsquo;ubhapathizo,&rsquo; ukuya eparaloka. Ubhapathizo lufana nemvume ekukhululweni noma paraloka. Labo abanikiwe imvume paraloka uyosindiswa ngokuhlakanipha kwami futhi ngiphunyuke ngesipiliyoni sesono. Wathi izinkathazo zezono angajezisa labo abangabhapathiziwe njengoba bengabhapathiziwe ukuvikelwa ezonweni.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 66,
verse: `<b>(1)	IVangeli likaLuka, isahluko 2, ivesi 49.</b>`,
meaning: ` <b>
(2:49) “Beningifunelani na?” wabuza. “Beningazi yini ukuthi kufanele ngibe semhlanganweni kaBaba na?” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abazali bakaJesu babemfuna, futhi lapho bembona Yena, bamangala. Unina wathi kuye: “Ndodana, ngani usiphethe kanje? Mina noyihlo besikhona ngikufuna ngokukhathazeka.” Ephendula, uJesu wathi: “Ngani ubungifuna? Ubungazi ukuthi kufanele ngibe phakathi umsebenzi kaBaba wami?" Nakuba uJesu ebonakala (enyameni) nobaba wayekhona, Wayebhekisele kokungabonakali kwakhe (hayi ngokomzimba) Baba. Kubalulekile ukucacisa ukuthi wayengubani ubaba uJesu ukuze siqonde imisebenzi kaBaba futhi, ngenxa yalokho, baqonde imisebenzi uJesu ayezoyenza futhi kungani Eshiya unina noyise.

  Ngamazwi akhe, uJesu wazibiza ngokuthi uyiNdodana koMuntu. Kwezinye izikhathi, Wabuye wathi uyiNdodana ka uNkulunkulu. Ngakho-ke, Uyikho kokubili iNdodana yoMuntu kanye neNdodana kaNkulunkulu. Uma umuntu ebuza ukuthi bangamadodana kabani bonke laba bantu, kungashiwo kanjalo bonke abantu bangamadodana abantu. Nokho, kunemfihlo ehilelekile lapha. Ukuze indoda izalwe, kudingeka umnikezeli wembewu (isidoda). Nakuba kungokwemvelo ukucabanga ukuthi ubaba uyimbewu onikelayo ngesikhathi sokuzalwa kwendoda, kubalulekile ukuqaphela ukuthi, nakuba umuntu ubonakala engowesilisa ngokubukeka, akanakubalwa njengowesilisa ngoba udalwe njengesibonelo sowesilisa. Kokubili indoda nomkakhe ingabalwa ngaphansi kwePrakruti yesifazane.

  Nakuba i-Jeevatma, esemzimbeni womuntu, i-Atma ohlobene-owesilisa, Akakwazi ukuzala umuntu. I-Atma, engaphakathi umzimba, wenziwe wonke umuntu ozelwe. Sesikushilo lokho I-Atma yenza yonke imisebenzi emzimbeni futhi inikela ngembewu yayo zonke izidalwa. UJesu wazibiza ngokuthi “iNdodana yomuntu,” yebo nakuba Wayengeyena umuntu ovamile, ukuze abonise ukuthi uYise kwakungeyena uJosefa obonakalayo kodwa kunalokho u-Atma ohlala ngaphakathi yonke imizimba yabantu. Umbhalo wokuqala waphezulu usifundisa lokho yonke into ephilayo ezelwe esibelethweni sikamama ine-Atma njengeyayo ubaba noPrakruti njengonina. Nokho, uJesu wazalwa ngokuqondile ngaphandle kukayise wenyama, njengoba WayeyiNdodana yoNgcwele Umoya (Paramatma), owehlukile ku-Atma. Kungakho Yena ubizwa ngokuthi iNdodana kaNkulunkulu. Lapho uJesu ehlangana nabazali bakhe, Wabatshela ukuthi kufanele abe mayelana nomsebenzi kaYise kodwa akazange cacisa ubaba ayekhuluma ngaye (Atma noma uMoya oNgcwele). Ngokubona kwakhe, Wayezibheka njengeNdodana kaNkulunkulu. UJesu akazange enze imisebenzi ye-Atma, esemzimbeni. Wayegxile ekusakazeni ukuhlakanipha kukaNkulunkulu. Okhona yonke indawo I-Paramatma yenza umsebenzi wokusabalalisa ukuhlakanipha kwaphezulu. Ngakho-ke, uJesu wayehlose ukwenza okukaYise (uMoya oNgcwele) umsebenzi. UParamatma uqobo Lwakhe wadala umzimba futhi wawugcwalisa ngoWakhe umphefumulo wakho. Nakuba uJesu wayenguNkulunkulu, wayebhekisela Kuye njengeNdodana yoMuntu ngezinye izikhathi kanye neNdodana kaNkulunkulu ngezinye izikhathi ukuvimbela abantu ukuthi bangamazi.

</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 67,
verse: `<b>(2)	IVangeli likaLuka, isahluko 11, 37, 38, Amavesi 39, 40 kanye 41.</b>`,
meaning: `<b>
(11:37) Njengoba uJesu ekhuluma, omunye wabaFarisi wammemela ekhaya ukuze adle. Ngakho, wangena wathatha indawo yakhe etafuleni.
<br><br>
(11:38) Umninimzi wakhe wamangala lapho ebona ehlala phansi udle ungakagezi izandla kuqala umkhosi odingwa isiko lamaJuda.
<br><br>
(11:39) Khona-ke iNkosi yathi kuye: “Nina baFarisi qaphela kakhulu ukuhlanza ingaphandle lendebe nesitsha, kodwa ngaphakathi ungcolile—ugcwele ukuhaha kanye ububi!
<br><br>
(11:40) Ziwula! UNkulunkulu akawenzanga yini ingaphakathi nengaphakathi ngaphandle?
<br><br>
(11:41) Ngakho, hlanza ingaphakathi ngokunikeza izipho (dharmas) ku ompofu, futhi uyakuba ohlanzekile yonke indawo.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ivesi lokugcina lithi, <strong>&ldquo;Hlanza ingaphakathi ngokupha izipho (Dharmas) kwabampofu, futhi nizohlanzeka nonke phezu.&rdquo;</strong> Ngeshwa, abantu abaqondi kahle leli vesi futhi balihumushe ngezindlela ezihlukahlukene. Lapho uJesu ikhuluma &lsquo;ngokuphana ngezipho,&rsquo; abantu baye bakubheka njengokunikela imali, izingubo, nokudla kwabampofu. Nokho, uJesu akazange bagomela ngokuthi izenzo zangaphandle zesisa zingahlanza umuntu ngaphakathi. Inhloso yakhe kwakuwukuthi umkhuba we-dharma kufanele ube ukufakwa ngaphakathi, futhi kungaleso sikhathi kuphela ububi obungaphakathi bungahlanzwa. UJesu akazange abeke kuqala inhlanzeko yangaphandle kodwa kunalokho wakugcizelela ukuhlanzwa kwezimfanelo zangaphakathi (gunas). Ngakho-ke, Yena wakhuthaza abanye ukuba balandele indlela ye-dharma, okuyinto uphikisa izibhamu. UJesu ngokwakhe wazibonela ingaphakathi ukuhlanzwa futhi wanamathela endleleni ye-dharma. Kungakho Yena unxuse abanye ukuthi bahambe ngendlela efanayo.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 68,
verse: `<b>(3)	IVangeli likaLuka, isahluko 12, 4th and 5th amavesi.</b>`,
meaning: ` <b>
(12:4) Ngithi kini, bangane bami: Ningabesabi labo ababulala umzimba, emva kwalokho bangabi nakwenza okunye.
<br><br>
(12:5) Kodwa ngizonibonisa okufanele nesabe: Yesabani lowo othi esebulewe umzimba wakho unaye igunya lokukuphonsa esihogweni. Yebo, ngithi kini: Yesabani yena.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Abantu bangalimaza umzimba, kodwa abakwazi ukulimaza umzimba Jeevatma ngaphakathi. I-Jeevatma, engabonakali ngaphandle, ihlala ingathinteki. Njengoba umzimba ubonakala, abanye bangakwazi kuphela ukulimaza kuyo, hhayi i-Jeevatma. Ngakho-ke, akukho isidingo sokwesaba abantu abanjalo. Okufanele esatshwe uNkulunkulu kuphela. Ngisho nasekufeni, uNkulunkulu uhlola izono zethu, uyasiphatha isijeziso, futhi kubangela ukuhlupheka. Izibopho phakathi abantu bayahlukaniswa ngemva kokufa. Noma ngabe umufi ukhona abazelwe kabusha endlini yombulali, abayikumazi umbulali njengesitha. Nokho, uNkulunkulu uyayibona iJeevatma ngisho nangemva kokufa futhi uyazi ngokuzalwa kwayo okwalandela. Ngakho, kubalulekile ukwesaba uNkulunkulu, osenza silandise ngekarma yethu ngemva kokufa. Asikho isidingo sokwesaba abanye abantu abangakwazi ukulimaza i-Jeevatma futhi ngeke isiqaphele ngemva kokufa.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 69,
verse: `<b>(4)	IVangeli likaLuka, isahluko 12, ivesi 25.</b>`,
meaning: ` <b>
(12:25) Yimuphi kini ngokukhathazeka anganezela ekukhuleni kwakhe ingalo eyodwa? </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nakuba abantu bekholelwa ukuthi banjalo ukufeza konke ngobuhlakani babo, akukho ukuxhumana okukhona phakathi kwabo nobuhlakani babo. Abantu abazimele futhi abakwazi ukwenza okuthile eyabo. Bafana nopopayi abasetshenziswa i-karma. Labo abakholelwa ukuthi bangenza ngokuthanda kwabo basesimweni sokuthi ukungazi ngabo. Ngokwesakhiwo ukuthi UNkulunkulu udalile, i-karma ilawulwa nguNkulunkulu, futhi abantu ngabanye bakhona ekulawuleni i-karma. Njengoba i-karma ibabusa, abakwazi ukwenza izinqumo ngokuzimela. Kungakhathaliseki ukuthi bahlela kangakanani futhi basebenzise ubuhlakani babo, abakwazi ukuguqula ubude babo. Uma wonke umuntu uyaziqonda futhi uyazindla ubukhulu bamandla abo, bayokwazi wabo ubuncane, beqaphela ukuthi uNkulunkulu mkhulu ngokungenasiphelo kunabo.</div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 70,
verse: `<b>(5) IVangeli likaLuka, isahluko 12, 33 kanye 34 amavesi.</b>`,
meaning: ` <b>
  (12:33) Thengisani ngempahla yenu niyinike aba mpofu. Ziphekeleni izikhwama ezingagqoki out, umcebo paraloka ongasoze wehluleka, lapho alikho isela elingasondeli, alinanundu elichithayo.<br>
(12:34) Ngokuba lapho kukhona ingcebo yakho, kulapho inhliziyo yakho kuzoba njalo.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kunezinhlobo ezimbili zengcebo: eyodwa engathenga noma yini emhlabeni kanye nenye engathenga uNkulunkulu, ongaphezu kwe umhlaba. Owokuqala umcebo wezinto ezibonakalayo, owadalwa abantu kanye ebonakalayo ngeso lenyama, esithenga ngayo impahla impahla, kuyilapho yokugcina kuwukuhlakanipha ingcebo, adalwe yobuNkulunkulu futhi engabonakali kalula. Kunokwehluka okuningi phakathi kokuhlakanipha-ingcebo nengcebo yezinto ezibonakalayo. Ngenkathi amasela bangantshontsha ingcebo yezinto ezibonakalayo, abakwazi ukweba ingcebo yokuhlakanipha, njengoba akuyona impahla engokwenyama. Amabhu angacekela phansi impahla ingcebo, kepha abakwazi ukulimaza ingcebo yokuhlakanipha. Okubalulekile ingcebo ayikwazi ukuqeda ngisho nekarma encane, kodwa ukuhlakanipha ingcebo ingaqeda ngisho ne-karma enkulu. Umuntu angathola izinto ezibonakalayo ingcebo ngomsebenzi, kepha ingcebo yokuhlakanipha izuzwa ukusondelana noNkulunkulu. Ingcebo yezinto ezibonakalayo ingalinganiswa, kodwa ingcebo yokuhlakanipha ayinakulinganiswa. Lapho umuntu efa, ukuphila kwabo ukuxhumana nengcebo yezinto ezibonakalayo kunqanyuliwe, njengoba kungekho ngisho ipenny ihamba neJeevatma. Ngokuphambene, ingcebo yokuhlakanipha ihambisana neJeevatma ngisho nangemva kokufa, njengakho konke ukuhlakanipha inzuzo eyodwa empilweni iqhutshelwa phambili ekuzalweni okuzayo. Labo aba bacebile emhlabeni bangahlonishwa emphakathini kodwa hhayi phakathi ubukhona bukaNkulunkulu. UNkulunkulu uyababona abacebile ngokuhlakanipha, ngisho noma abanye abantu bengabahloniphi. Kafushane, lapho kunemehluko omningi phakathi kwengcebo yezinto ezibonakalayo nokuhlakanipha ingcebo.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 71,
verse: `<b>(6)	IVangeli likaLuka, isahluko 12, ivesi 49.</b>`,
meaning: ` <b>
(12:49) Ngize ukuletha umlilo emhlabeni, futhi kanjani Sengathi ngabe sekubasiwe.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kulo mongo, igama elithi 'umlilo' alibhekiseli ku-umlilo ojwayelekile esiwubona nsuku zonke. Umlilo uyizinhlobo ezimbili: umlilo ojwayelekile kanye umlilo ongajwayelekile (umlilo wokuhlakanipha). Umlilo ovamile ungavutha izinkuni nezinye izinto, kuyilapho <strong>i-gnanagni (umlilo wokuhlakanipha) ushisa izinkuni ze-karma</strong>. Njengoba abantu bebanjwe ogibeni lwesono futhi abhekane nobunzima, uNkulunkulu uyehla ukuze alethe umlilo wokuhlakanipha kuwo shisa i-karma yabo futhi ubakhulule emjikelezweni wokuzalwa nokufa, ukubasiza bafinyelele kuNkulunkulu. Lapho uNkulunkulu edlulisela ukuhlakanipha, Ukufanisa nomlilo ngoba ukuzuza ukuhlakanipha kungaholela inkululeko. UNkulunkulu waletha lomlilo emhlabeni esikhathini esidlule, futhi yavutha isikhashana ngaphambi kokunyamalala. UJesu weza ukuzobusa umlilo uhlale uvutha. Ubefuna ukuthi umlilo uqhubeke evutha, ngakho Wamemezela ukuthi Uzele ukuzobasa umlilo lapho kwakungekho, futhi Wafisa umlilo ayenawo ngaphambili kokhela ukuphikelela.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 72,
verse: `<b>(7)	IVangeli likaLuka, isahluko 12, 51, 52 kanye namavesi 53.</b>
`, meaning: `<b>
(12:51) Ingabe nicabanga ukuthi ngizele ukuletha ukuthula emhlabeni Qha, ngithi kini, kodwa ukwahlukana.
<br><br>
(12:52) Kusukela manje kuqhubeke kuyoba nabahlanu emkhayeni owodwa bahlukene phakathi, abathathu nababili, nababili ngokumelene nabathathu.
<br><br>
(12:53) Bayohlukana, uyise emelene nendodana nendodana noyise, unina nendodakazi nendodakazi ngokumelene nonina, umamezala ngokumelene nomalokazana umalokazana ngokumelene nomamezala. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  I-Paramatma yembula ukuhlakanipha Kwakhe lapho ethatha isimo somuntu umhlaba ngesimo sikaBhagavan. Ukuhlakanipha kukaBhagavan kuyakhiqiza imizwa ephikisayo kulabo abasendleleni kaSathane. Ezimweni ezinjalo, ukuhlukana kwemibono kuvela phakathi kwalabo abaqondisisayo ukuhlakanipha nalabo abangakwenzi. Abanokuhlakanipha bayokwenza ungavumelani nalabo abangenalo. Lapho kuvela isimo esinjalo emndenini owodwa, amalungu omndeni angase abe benobutha komunye nomunye. Uma umuntu ezama ukuzuza ukuhlakanipha ekhaya, uSathane uzobe eqaphile. USathane udala ukuhlukana, ukuxabana oyise bamelene namadodana, amadodana ngokumelene noyise, omama ngokumelene amadodakazi, amadodakazi ngokumelene nawonina, noninazala ngokumelene omalokazana, omalokazana bamelane laboninazala umthetho. Ngisho noBhagavan (Guru) angakweluleka ukuthi ungavumelani naye labo abaphikisana nawe ezindabeni zokuhlakanipha, bazi ukuthi indoda nomfazi bayaxabana ngenxa yokuhlakanipha Kwakhe. Ngenxa yalokho, ukuxabana kwabo kungase kushube kunokuba kunciphe. Ngakho-ke, <strong>iNkosi yathi, &ldquo;Angizanga alethe ukubuyisana kodwa ukwahlukana.&rdquo; </strong>Uyakucabanga lokho UBhagavan, ozele ukuzofundisa ukuhlakanipha emhlabeni, uyeluleka ukuthi ulalele indlu yakho ube udebeselela ukuhlakanipha kwakhe na? Yenza uyakholwa ukuthi iNkosi, eyakuyala ukunquma yakho isandla uma kuvimbela ukuhlakanipha kukaNkulunkulu, kusikisela ukubuyisana nayo umkakho nezihlobo zakho? Ungalokothi. Wanikhuthaza ukuba ningakwenzi vumelana nazo, ngisho noma kusho ukudela ukuphila kwakho. Ngakho, izingxabano eziningi ziyavela emindenini ngenxa kaNkulunkulu ukuhlakanipha. Ngokuphawulekayo, nomaphi lapho kumenyezelwa khona ukuhlakanipha kweqiniso, lapho kuzoba nokungezwani ekhaya. Abekho ukungavumelani lapho ukuhlakanipha kukaSathane kwethulwa ngaphansi kwe ukuhlakanipha kwaphezulu. Wonke umuntu uvame ukusekela abanjalo ukuhlakanipha. Umuntu angakubona lokho uma wonke amalungu omndeni babe izitha ngenxa yokuhlakanipha kwaphezulu, khona-ke ukuhlakanipha okunjalo iwukuhlakanipha kweqiniso kukaNkulunkulu.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 73,
verse: `<b>(8)	IVangeli likaLuka, isahluko 13, ivesi 3.</b>`,
meaning: `<b>(13:3) Ngaphandle kokuba ushintshe umqondo wakho, nani nonke niyokwenza bhubha.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UManase (ingqondo) uyingxenye ebaluleke kakhulu yomzimba, ebizwa ngokuthi ngakho ngoba igcina izinkumbulo. Ihlanganisa ntly isebenza ngaphansi ithonya lamaMaya (uSathane), eqinisa izinkathazo zezwe. Kusukela ekuzalweni komuntu, ingqondo ibihambisana noSathane futhi akakaze asebenze ekuqondaneni noNkulunkulu. ukuguqulwa komqondo onjalo usuke ethonyeni likaSathane uye kwelikaNkulunkulu ukuqondana kubizwa ngokuthi "ukushintsha kwengqondo." Akekho ongakwazi ukuguquka ohlangothini lukaNkulunkulu ngaphandle koshintsho emqondweni wabo. Lapho ingqondo ishintsha, i-gnanagni (umlilo wokuhlakanipha) iyaqala i-manifest. Ngokubhujiswa kwe-karma yabo yonke ngo gnanagni, umuntu uhlangana noNkulunkulu ngaphandle kokuzalwa nokufa. Uma ingqondo ihlala ingashintshile futhi iqhubeka lawula imicabango, umuntu kufanele abhekane nemijikelezo yokuzalwa, ukufa, ubekezele ekuhlushweni esihogweni. Ngakho-ke, kunjalo kuphoqelekile ukuthi wonke umuntu ashintshe umqondo.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 74,
verse: ` <b>(9)	IVangeli likaLuka, isahluko 14, ivesi 26.</b>`,
meaning: `<b>
(14:26) Uma umuntu eza kimi futhi engazondi ubaba nomama, unkosikazi nabantwana, abafowabo, kanye odade—yebo, ngisho nokuphila kwabo siqu—umuntu onjalo angeke abe ngumfundi wami.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Uma umuntu elalela lokhu, uzomangala futhi abuze, “Inhlakanipho enjani le? Hlobo luni lweGuru? Hlobo luni lwe abafundi?” Umuntu angase eze kuGuru futhi ambuze, “Ingabe noma yimuphi uGuru utshele abafundi babo ukuthi abawona umfundi ngaphandle uma bathethisa umndeni wabo?" Kudingeka sicabange lapha. Uma umuntu uthethisa bonke abendlu yabo, uGuru akayena uhlanya wajabula futhi wamukele njengomfundi. Akwelulekwa ukuthi uzonde wonke umuntu ngokungakhethi. U-Guru uyajabula lapho umfundi, ngokuvumelana nemizwa kaGuru, uthethisa abangenalwazi abahamba endleleni kaSathane. Lapho umfundi ephikisana ngokungazi, uGuru uyabona ukuthi umfundi uhambisana nowakhe izimfundiso futhi uyazamukela. Uma umfundi esekela abangenalwazi esikhundleni sokubaphikisa, i-Guru ngeke ivume kubo njengomfundi. Inzondo ijwayelekile phakathi kwamaqembu amabili - gnanis (abahlakaniphileyo) nabangenalwazi. Uma ubaba nomama, unkosikazi kanye izingane, abafowethu nodadewethu basohlwini lokungazi lutho, umfundi kufanele abaphikise. INkosi yathi lowo owenzayo angaphikisani nokungazi futhi athande izihlobo akuyena umfundi wakhe. Kuyagcizelelwa ukuthi umuntu akumele ayekethise ukungazi. UJesu wathi abafundi kufanele babalahle umama, ubaba, abafowabo nodadewabo, unkosikazi, nabantwana uma bekhona vimba indlela eya ekuhlakanipheni.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 75,
verse: ` <b>(10)	IVangeli likaLuka, isahluko 14, ivesi 27.</b>`,
meaning: `<b>
(14:27) Noma ubani ongathwali isiphambano sabo futhi uyalandela ngingebe ngumfundi wami.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho izinkuni zihlanganiswa, kuba lula ukuzitheza futhi baphathe amabanga amade; kwakungeke kwenzeke ukulithwala kungenjalo. Ngokufanayo, lapho izibhamu eziyi-108 ezisengqondweni yomuntu zikhona behlanganiswe ndawonye esimweni sokungasebenzi, baba abopha ezandleni zomuntu. Kunezinhlobo ezimbili zezibhamu - okuhle nokubi - emzimbeni womuntu.

  <strong>Igunas embi eziyisithupha ukuhaha (kaama), intukuthelo (krodha), i-avarice (lobha), uthando (moha), ukuzidla (nkosikazi), kanye umona (matsara). Ngokufanayo, ama-guns ayisithupha amahle isisa (dana), isihe (daya), umusa (audarya), inkanuko (vairagya), ukuthobeka (vinaya), nothando (uma). </strong>Isibhamu ngasinye kweziyisithupha ezimbi nezinhle siphinde sihlukaniswe zibe izingxenye eziyisishiyagalolunye. Ngakho-ke, izibhamu ezimbi eziyisithupha zihlukaniswe zaba ngu-54 izingxenye, kanye nezibhamu ezinhle eziyisithupha zihlukaniswe izingxenye ezingama-54 futhi. Ngokuhlangene, izibhamu ezinhle nezimbi zenza isamba esingu-108.

  Izingxenye ezingu-108 zezibhamu zibizwa ngokuthi ama<strong>Maya</strong> kunkulunkulu wokuqala umbhalo. Embhalweni wesibili waphezulu, babizwa ngokuthi <strong>uSathane. </strong>Embhalweni wokugcina waphezulu, lezi guna zibizwa ngokuthi ama-<strong>Iblis. </strong>uNkulunkulu Ngokwakhe wakhuluma ngoMaya ngokuthi &ldquo;Guna-mayi mama maya&rdquo; ekuqaleni umbhalo waphezulu. Kusho ukuthi iMaya, eyadalwa nguNkulunkulu, iphakathi uhlobo lwezibhamu emzimbeni womuntu. UNkulunkulu ngokuyinhloko wadala Maya ukuze avimbele abantu ukuba balandele indlela yaphezulu. UMaya ingenza umuntu ahlale eceleni kwayo esikhundleni sokulandela okukaNkulunkulu indlela. Kungashiwo ukuthi i-Maya i-guna, noma i-guna i-Maya. Ku IsiTelugu, isiMaya sisho &lsquo;ongabonakali.&rsquo; IsiMaya sikhona ekhanda ngaphandle kokubonwa. IMaya, ekhona emizimbeni yethu, nayo ikhona okuthiwa yiSiphambano. Ngomqondo ongokomoya, iMaya iqhathaniswa ne-a python, kuyilapho i-Atma iqhathaniswa nejuba.

  Inhlwathi iyinyoka enamandla. Omunye obanjwe ngalo angeke akhululeke. Lokho kusho ukuthi iMaya inamandla. UJesu wathi ukuthi noma ubani olawulayo, ahlanganise, futhi abambe iMaya eqinile kangaka isandla sabo singumfundi wami. UJesu wathi umnqobi wamaMaya ngempela wayengumfundi wami. <strong>Noma ubani othumba iMaya (Isiphambano) futhi ulandela indlela kaNkulunkulu ngokuyithwala ungumfundi weqiniso we Nkulunkulu.</strong> Ophethe Isiphambano esikhuluma ngaso kakhulu namuhla futhi ulandela uJesu ungumfundi Wakhe, njengoba kushiwo kuleli vesi.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 76,
verse: `<b>(11)	IVangeli likaLuka, isahluko 18, ivesi 29.</b>`,
meaning: `<b>
(18:29) “Ngiqinisile ngithi kini,” kusho uJesu kubo, “akekho muntu oshiye ikhaya noma unkosikazi noma abafowabo noma odadewabo noma abazali noma abantwana ngenxa yombuso kaNkulunkulu uyohluleka ukwamukela okuphindwe kaningi kulenkathi, futhi enkathini ezayo ukuphila okuphakade.” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Umbuso weUNkulunkulu ubhekisela kuMoksham, okungukuthi ukukhululwa emjikelezweni wokuzalwa kabusha. Uma umuntu ezuza Moksham (inkululeko), abazalwa kabusha emhlabeni futhi abakwenzi uhlushwa uSathane. I-Moksham isho ukukhululwa kuSathane nokuhlangana noNkulunkulu. Ngamanye amazwi, umuntu uba munye noNkulunkulu. Inyunyana yeJeeva, encane futhi ene- ifomu elithile, elinobubanzi obungenamkhawulo, obungenamkhawulo, kanye uNkulunkulu osendaweni yonke uyimpumelelo evelele. Ukuzuza lokhu isikhundla, umuntu kufanele alandele indlela yokuhlakanipha futhi abe bazimisele ukuyeka ukunamathela kwabashade nabo, izingane, abazali, izingane zakubo, kanye nekhaya uma lezi zinamathiselo zibavimbela uhambo olungokomoya. Umuntu onjalo uba gnani ngokuphelele lo mhlaba futhi ufinyelela uNkulunkulu eParaloka. Ukulahla umlingani, izingane, izingane zakini, nabazali kuyisinqumo esibalulekile ngoba AmaMaya azungeza umuntu futhi ambophe eduze kwakhe nabathandekayo eyodwa. UPrahlada akazange ambale uyise, uMirabai wamshiya umyeni nezihlobo, futhi uBuddha washiya unkosikazi osemusha, Indodana enonyaka owodwa ubudala, abazali, ikhaya, kanye nombuso ukuze uthole ukuhlakanipha. Nokho, labo abaziqhelelanisa nabathandekayo babo angasondela kuNkulunkulu. Ukuze uthole umuntu waphakade, ukushiya umuntu ohlala nawe isikhathi eside kuyinto isinqumo esihlakaniphile. Nokho, isinqumo esinjalo singase sibonakale siwubuwula emhlabeni. Akuvamile ukuthola umuntu ozimisele ukuhamba yonke into engemuva embusweni kaSathane ngenxa kaNkulunkulu. Ngoba lapho noma ubani ethola umqondo kaNkulunkulu engqondweni yakhe, ikakhulukazi uSathane igxile kuzo futhi iwaphambukise emcabangweni nasengqondweni indlela yokuhlakanipha. Akunakwenzeka ukuthi umuntu anqobe Amandla kaSathane futhi awunqobe, njengoba kushiwo kuBhagavad-Gita, Vignana Yogam, ivesi 14. Umuntu angase azibuze ukuthi kungenzeka kanjani ukuya kuNkulunkulu lapho amandla kaSathane emakhulu kangaka. Kungani uzame futhi uhlulekile? Nokho, uma umuntu ethembela ngokuphelele kuNkulunkulu futhi bayaqhubeka nemizamo yabo naphezu kokungakwazi ukumelana nabo USathane, uNkulunkulu uqobo Lwakhe uzobasusa kuSathane abayise ohlangothini Lwakhe. Ngakho-ke, ukuphela kwendlela yokuba umuntu omncane anqobe USathane kufanele azinikele ngokuphelele kuNkulunkulu. Bhagavad-Gita ithi, <strong>&ldquo;Maya metam tarantite,&rdquo; </strong>okusho ukuthi <strong>&ldquo;Ngizomkhipha kwaMaya,&rdquo; </strong>mayelana nalabo abathembela ngokuphelele kuNkulunkulu. Ngakho, uma umuntu ubeka ithemba lakhe eliphelele nomthwalo wakhe kuNkulunkulu, uNkulunkulu angabasindisa kuSathane.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 77,
verse: `<b>(12)	IVangeli likaLuka, isahluko 21, ivesi 15.</b>`,
meaning: ` <b>
(21:15) Ngizokunika amazwi nokuhlakanipha okungekho izitha zakho ziyokwazi ukumelana noma ukuphikisa.. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho izingane ezincane, abanolwazi oluthile ukuhlakanipha, ukungabaza izimfundiso zabashumayeli abadumile kanye ama-gurus, abazitholi izimpendulo ezimfundisweni zabo. Ngakho-ke, abashumayeli benze umthetho wokuthi akekho umuntu okufanele abuze ababo izimfundiso. Isizathu esiyinhloko sokuntuleka kwezimpendulo kuzo izimfundiso ukuthi azisekelwe kwisayensi. Okungahambisani nesayensi ukufundisa akukwazi ukunikeza izimpendulo zemibuzo ephusile. Abashumayeli bayaqhubeka befundisa, kodwa abaphenduli ukuthi nini kubuza. Lapho iParamatma ithatha iBhagavan, Uyafundisa ukuhlakanipha kweqiniso kweParamatma. Ngakho-ke, labo abakwaziyo ukuhlakanipha okufundiswa nguBhagavan kungafundisa futhi kuphendule noma yikuphi umbuzo. Izitha ezibona abazinikele bakaBhagavan, abaziyo Ukuhlakanipha kweParamatma, woza kubo nge-ego abayikho gurus kanye ne-gnanis futhi ukhulume ngokuphikisana. Ukuhlakanipha lokho izitha abakwazi ukukhuluma ngokumelene kakade utshelwe abazinikele ngaleso sikhathi. Izwi likaNkulunkulu lithi abaningi abantu banomona futhi andisa umbango kulabo abaziyo ukuhlakanipha kweqiniso. Ngisho nalapho uNkulunkulu ehla, izitha babhekana naye wathi, “Awukakwazi ukuhlakanipha futhi kudingeka baye endaweni ethile ukuze bafunde ukuhlakanipha kwangempela.” Abanye abantu beza kimi bathi: “Awukwazi ukuhlakanipha.” Enjalo abantu bazoza kuwe. UNkulunkulu washo evesini elingenhla ukuthi Wayeyokunika ukuhlakanipha ukuze uwaphendule.</div></div>
</span>`
},
{
chapterName: "IVangeli likaLuka",
chapterNumber: 4,
pageNumber: 78,
verse: ` <b>(13)	IVangeli likaLuka, isahluko 21, ivesi 17. </b>`,
meaning: `<b>
(21:17) Wonke umuntu uyonizonda ngenxa yami.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ubuhlakani obembulwa nguBhagavan, iNdodana kaNkulunkulu, ngokumelene nalabo abaphethwe uSathane. Likhona ithuba ukuze abantu abavamile bangakuqondi lokhu kuhlakanipha, njengoba kunjalo kubonakala kuphambene ngokuphelele nabashumayeli nama-gurus banokuhlakanipha okuthile. Ama-Pandits, abashumayeli, nama-gurus bavame ukwenza hayi njengamazwi alabo abashumayela igama likaNkulunkulu. Bona, futhi abantu ababalandelayo, baqala ukuzonda labo ababalandelayo bashumayela indlela kaNkulunkulu ngoba bathola amazwi kaNkulunkulu ephambene izimfundiso zabo. Ngakho, uNkulunkulu evesini elingenhla wathi, <strong>&ldquo;Wonke umuntu uzozonda ngenxa yami.&rdquo;</strong>
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 79,
verse: `<b>(1)	IVangeli likaJohane, isahluko 1, ivesi 1.</b>`,
meaning: `<b>(1:1) Ekuqaleni wayekhona uLizwi, uLizwi wayekhona noNkulunkulu, futhi uLizwi wayenguNkulunkulu.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  IVangeli likaJohane linezahluko ezingu-21. Kulokhu umbhalo, ngizonikeza izincazelo kwamanye amavesi ukuthi abantu behlulekile ukuqonda, ukungaqondi, noma amandla tolika ngokungeyikho. Ngikhethe la mavesi njengengxenye Inkonzo kaNkulunkulu, ngizizwa njengepeni nje uNkulunkulu angisebenzisela lona lomsebenzi. Ngaphambilini, ngichaze amavesi athile avela kuNkulunkulu wokuqala umbhalo, iBhagavad-Gita, nombhalo wesithathu waphezulu, I-Quran. Njengoba ngifisa ngokujulile ukuchaza wonke ama-divi amathathu nemibhalo, Manje ngizofanekisa amanye amavesi avela kuNkulunkulu wesibili umbhalo, i-Injeel (iBhayibheli). Ukuhlakanipha okunikezwa kulokhu umbhalo ungokwesayensi futhi uyiqiniso. Manje, ake sihlole eyokuqala ivesi lesahluko sokuqala seVangeli likaJohane, elithi iqukethe imisho emithathu emifushane okufanele ichazelwe ukuqonde ngokugcwele.

  Manje ake sixoxe ngamazwi amathathu okuqala eVangeli lika Johane embhalweni wesibili waphezulu.
<b>
            ULizwi wayekhona ekuqaleni.
            ULizwi wayenoNkulunkulu.
            ULizwi wayenguNkulunkulu.
</b>
  Ezimfundisweni zeBhayibheli, ake sibhekisele kulezi zintathu amavesi njengamavesi okuqala eBhayibheli. Abanye bangase baphikisane ukuthi amavesi akuGenesise kufanele abizwe ngokuthi amagama okuqala ka iBhayibheli. Nokho, sesiyichazile kakade indlela yethu. Thina cabangela izimfundiso ezidingwa abantu njengemibhalo nentando xoxani ngamavesi okuqala kuyo. Ngokulandela lesi simiso, Bhagavan UJesu wafundisa amaVangeli amane. Nakuba i- IVangeli likaJohane kwaba ngelokugcina, laqala ngezimfundiso. Ngokufanayo, sithathe ivesi 11 lesahluko sesibili njenge ukuqala kweBhagavad-Gita ngoba ukuhlakanipha kukaNkulunkulu kwaqala kusukela lapho. Siphinde sathatha amavesi 11, 12, kanye ne-13 I-Sankhya-Yoga njengemisho emithathu yokuqala. Ngokufanayo, owokuqala amavesi athathwe esahlukweni 43 se-Injeel (IBhayibheli), futhi sathatha amavesi amathathu eTaurat (Bhagavad Gita) njengemisho emithathu yokuqala. Nokho, lapha sithathe ezintathu imisho evela evesini elilodwa eVangelini likaJohane njengelokuqala imisho emithathu, esikhundleni samavesi amathathu alandelanayo. ukulandelana kwemisho akubalulekile; sathatha labo ukuthi udlulise izincazelo ezintathu njengemisho emithathu. Nakuba lezi yimisho emithathu emifushane, ngamunye wabo ujulile incazelo.

  Le misho emithathu idlulisa izincazelo ezicashile. Okokuqala imisho emithathu yeBhagavad-Gita ingena emiqondweni kweJeevatma kanye ne-Atma. Nokho, amazwi okuqala ka-IVangeli likaJohane lifundisa incazelo ekhethekile. Ukuqaliswa kwe I-Bhagavad-Gita ixoxa ngezingxenye ezintathu - Jeevatma, Atma, kanye nomzimba. Ngokuphambene, imisho emithathu yokuqala ye IVangeli likaJohane lihlola izici ezintathu - Ukuhlakanipha, Atma, kanye neParamatma. Noma kunjalo, le misho ayicacile cacisa izikhundla ze-Atma neParamatma. Nakuba i- Igama elithi 'Nkulunkulu' livela emishweni emibili, ukuhlakanipha no-Atma hlala ukhonjwa ngendlela engaqondakali. Manje, ake sihlolisise eyokuqala umusho wabathathu.

  Umusho wokuqala uthi <b>&ldquo;ULizwi wayekuye iqala.&rdquo;</b> Igama liphinyiselwe enkulumweni, elakhiwe ngu umsindo ophuma emlonyeni. Umuntu angabona umsindo futhi babone ukuthi umusho mude noma mfushane ngokusekelwe ku- izimpawu zokuzwa. Ulimi lomusho akumele ajwayeleke futhi angahluka ngobude. Ikona okungenakunqunywa ukuthi igama (umusho) lalikhulumela phansi noma ngokuzwakalayo. Ake sihlaziye umusho <b>&ldquo;ULizwi wayekhona iqala.&rdquo; </b>Ngenkathi siqonda ukuthi izwi lakhulunywa ngalo ekuqaleni, abantu babengenawo amakhono olimi leso sigaba sokuqala. Ngakho-ke, kuphakama umbuzo ofanelekile mayelana ulimi okwakhulunywa ngalo igama. Ukubhekana nalokhu uphenyo, ake sicabangele izehlakalo ezenzeka lapho ukuqala.

  Uma sibuza ngomsuka womsindo ekuqaleni, singasho ukuthi umsindo ozwakala indlebe yomuntu eya ePrakruti. I-Prakruti iqukethe amabhoota amahlanu amakhulu - Umhlaba, Amanzi, Umoya, Umlilo, Nesibhakabhaka - ngakunye kunempilo. Isibhakabhaka, ophiwe impilo, wakhiqiza umsindo ekuqaleni. Lokhu kuphakamisa umbuzo wokuthi isibhakabhaka siwukhiqiza kanjani umsindo uma sinjalo ebonakala ingenalutho. Lo mbuzo unengqondo, futhi uyawuqonda izimpendulo zikuguqula kube ukuhlola kwesayensi. Ngokuvumelana ne Brahma Vidya Shastra, ingabe isibhakabhaka ngokwaso sakha umsindo? Njengoba isibhakabhaka siyi-Jeeva, i-Jeevatma ayikwazi futhi ayikwazi ukwenza ngokwezimiso zesayensi; yi-dharma yaseJeevatma. I-Paramatma nayo ine-dharma eyodwa. I-Paramatma (uNkulunkulu) ayifuni unegama, ifomu, noma umsebenzi. Lena i-dharma eyinhloko ye uNkulunkulu. UNkulunkulu akayena ummeleli wesenzo; Akangeni emsebenzini. Ngokusho kwe-dharma kaJeevatma, iJeevatma ayikwazi futhi ayikwazi ukwenza noma yimuphi umsebenzi. Nakuba uNkulunkulu enamandla, uyakwazi ungazibandakanyi kunoma yiziphi izenzo. Ngakho-ke, uJeevatma noNkulunkulu banabo ama-dharmas aphikisanayo. Ekuqaleni, igama lavela ngeSibhakabhaka. Njengoba iSky futhi kuyiJeeva, ayizange ikhiqize lowo msindo. Umsindo ovela esibhakabhakeni uyiqiniso ukwenzeka, kodwa uJeeva we zulu ayikwazi futhi ayikwazi khiqiza noma yimuphi umsindo. Ngakho-ke, othile ngemuva kwe-Sky kungenzeka abe nakho kube ngumthombo womsindo. UNkulunkulu akazange adale umsindo ngoba Akahlanganyeli emsebenzini. Nakuba umsindo ovela isibhakabhaka siyiqiniso, iJeeva yesibhakabhaka noma uNkulunkulu akuyona imbangela yomsindo. Kungase kuphakame ukungabaza ukuthi ngabe ukhona yini umuntu ngaphandle kwakho kokubili.

  Ukuqeda lokhu kungabaza, kubalulekile ukuqonda izinhlangano endaweni yonke. Ekuqaleni, uNkulunkulu wadala indawo yonke. Nkulunkulu, ngenkathi enguNkulunkulu, wadala uPrakruti evela Kuye. Waqala wadala I-Prakruti njengezingxenye ezinhlanu bese idala i-Atma ne-Jeevatma ukuze faka ubungqabavu ePrakruti, eyayingenakho ukuphila. Fana Ngokwakhe, uNkulunkulu wadala isilisa (Purusha) Atma kanye noJeevatma. Uqoke i-Jeevatma njengomgibeli kanye ne-Atma njenge-umshayeli, ephathisa u-Atma ukwenza yonke imisebenzi. Kuzo zonke Umuntu ngamunye, i-Atma yenza yonke imisebenzi ngaphakathi komzimba ngenkathi ukuhlala noJeevatma. Emibhalweni Yakhe, uNkulunkulu wakuqinisekisa lokho ngisho nezifundiswa ezinkulu zingase zingamqondi ngokugcwele u-Atma. Kuphela i-yogis ezinikele, njengoba kushiwo ku-Bhagavad-Gita I-Purushottama Prapti Yoga ivesi le-11, ingaqonda ngempela I-Atma, igcizelela ukuthi i-Atma ihlala ifihliwe ngaphakathi umzimba ngaphandle kokwaziwa.

  Uma uNkulunkulu engasebenzi, abanye bangabuza ukuthi wenze kanjani Prakruti, Atma, futhi Jeevatma. Impendulo yami ithi kuyiqiniso ukuthi uNkulunkulu ayisebenzi. Lesi simiso sashiwo nguNkulunkulu ngemva kwe ukudalwa kwePrakruti, Atma, kanye neJeevatma. Ngaphambi kwesenzo sika Indalo, uNkulunkulu uyena yedwa futhi, ngaleso sikhathi, UNkulunkulu wahlanganyela emsebenzini. Kwakungekho muntu ngaphandle kukaNkulunkulu ngaphambi kokudalwa. Ngakho, uNkulunkulu wasebenza ngaphambi kwesenzo sika indalo. UNkulunkulu wadala iPrakruti, elandelwa ukudalwa kwe Atma ne-Jeevatma. Ngemva kwalokho, uNkulunkulu wasungula uMbuso wakhe e dharma. Ngenkathi uNkulunkulu egwema ukusebenza ngemva kokudala, Yena yayisebenza ngaphambi kwesenzo sokudala. UNkulunkulu wakuphathisa konke izibopho ku-Atma futhi wanquma ukuthi u-Atma wayezokwenza yenza yonke imisebenzi. Ngenxa yalokho, iParamatma yayeka ukuzibandakanya ezenzweni Ayevame ukuzenza ngemva kokudalwa kwe-Atma. Njengoba i-Atma ithatha imithwalo yemfanelo, iParamatma yaba isibukeli esingenzi lutho (ufakazi).

  UNkulunkulu akazibandakanyi nomsebenzi; UJeeva akakwazi isenzo, futhi i-Atma iyona eyenza yonke imisebenzi. Ngakho-ke, kwakungu-Atma owakhipha umsindo ovela esibhakabhakeni ukuqala. I-Atma, efihliwe ngaphakathi kwe-Sky, ikhiqize i- umsindo. Umsindo owadalwa u-Atma waba ukuhlakanipha kukaNkulunkulu, ngakho-ke kubhekiselwa kulo ngokuthi &lsquo;igama,&rsquo; elisho umsindo one incazelo. Echaza isenzakalo sendalo, inkulumo ethi <b>&ldquo;Izwi lalikhona ekuqaleni&rdquo;</b> lisetshenziselwa ukuveza lokho okunenjongo umsindo uvela esibhakabhakeni. Sifunde ukuthi 'izwi' lithini ukhona nokuthi ubani owakuvezayo. &lsquo;Izwi&rsquo; lakhulunywa nelikaNkulunkulu ukuhlakanipha nge-Atma ngendlela yomsindo. Lokho u-Atma akushilo kusukela esibhakabhakeni kwaba ukuhlakanipha kokuqala emhlabeni. Nokho umsindo ovela esibhakabhakeni wawuphethe ukuhlakanipha, wawubonakala njengomsindo omkhulu umsindo ngendlela yokuduma, ngale kokuqonda kwe ulimi lomuntu. ILanga laqonda ukuduma umsindo esibhakabhakeni futhi, ebona ukungaqondakali kwawo abantu, wadlulisela umlayezo endodeni okuthiwa nguManu o Umhlaba ngolimi oluqondwa ngabantu.

  Ukuhlakanipha kukaNkulunkulu kubonakaliswa ngesimo se msindo ongaqondakali ekuqaleni kwendalo. Lokhu ivezwe emushweni wokuqala wesahluko sokuqala sikaJohane IVangeli, lithi <b>&ldquo;uLizwi wayekhona ekuqaleni.&rdquo; </b>Vuliwe ngalolo suku, abantu babengazi ukuthi lowo msindo wawusho okaNkulunkulu ukuhlakanipha; Babeqonda kancane lapho iLanga wedlulisa umlayezo. UKrishna udlulise ukuhlakanipha okufanayo ku simo seBhagavad-Gita, esho ukuthi iyafana ukuhlakanipha okwakhulunywa ekuqaleni kwendalo. Nokho, umuntu ukunaka akuzange kugxile emsindweni wokuduma kwezulu ekuqaleni, futhi kuze kube yilolu suku, akekho oqaphela ukuthi umsindo we ukuduma kuhlanganisa ukuhlakanipha kweBhagavad-Gita. ILanga lidlulisele ukuhlakanipha okufanayo kuManu uKrishna ayenakho okukhulunywayo, ukuhumusha ukuhlakanipha okuvela esibhakabhakeni uhlobo lokuduma. Ukuhlakanipha okuvela emsindweni wesibhakabhaka wavela ku-Atma of the Sky. Ukuhlakanipha kuka-Atma kwaqala kusuka ku-Atma uqobo. I-Atma ngokwayo yaba ukuhlakanipha, futhi okufanayo ukuhlakanipha kwaphuma ku-Atma. Lokhu kuhlakanipha okuvela ku-Atma kuyinto kuqhathaniswa nendlela ukotini oguquka ngayo ube yintambo, kanye intambo iphuma ukotini. Nakuba ukotini nentambo kukhona ehlukile, ukotini uba intambo. Ngokufanayo, u-Atma no ukuhlakanipha kuhlukile, kodwa ukuhlakanipha kuka-Atma kuvela ku-Atma. Uma intambo ihlukaniswa, iqukethe imicu yekotini; ngokunjalo, uma ukuhlakanipha kwe-Atma kuhlakaziwe, kuqukethe ingqikithi ye-Atma.

  Ekuqaleni, uNkulunkulu wadlulisela ukuhlakanipha Kwakhe ngoMoya umsindo wesibhakabhaka, njengoba kuchazwe kuQuran 42:51, lapho omunye we izindlela uNkulunkulu embula ngazo ukuhlakanipha Kwakhe kungesambulo evela esibhakabhakeni. UNkulunkulu wedlulisa ukuhlakanipha Kwakhe nge-Atma Yesibhakabhaka ngesikhathi sokuqala kwendalo. Ukuhlakanipha, eyethulwe ngendlela yokuduma, yayingaqondwa abantu njengoba bebengenalo ulimi abangaluqonda. Ngakho-ke, iLanga selibambe ukuhlakanipha ku-ukuduma, yasidlulisela kumuntu osemhlabeni ngolimi lwabantu. Ekugcineni, lokhu kuhlakanipha kwasakazekela emhlabeni wonke. Nokho, njengoba isikhathi siqhubeka, ama-adharmas athatha indawo ye-dharmas, okubangela ekuqaleni idlulisele ukuhlakanipha ukuze kunyamalale enkumbulweni yomuntu. Ku U-Dvapara Yuga, u-Bhagavan wathatha uhlobo lwe-Krishna kanye wazisa u-Arjuna ukuthi wayehlanganyela ukuhlakanipha okufanayo iLanga yayidlulisile. Naphezu kokuba nokuhlakanipha okufanayo okwethulwe kuyo isimo seBhagavad-Gita, umbhalo wokuqala waphezulu, abantu sebekhohliwe umsuka wayo.

  Imisho emithathu yokuqala eVangelini likaJohane yayi eyabhalwa eminyakeni engu-3000 ngemva kokukhulunywa kweBhagavad-Gita, njenge abantu base bekhohliwe ukuhlakanipha okuvela kuNkulunkulu. Umusho <b>&ldquo;ULizwi wayekhona ekuqaleni&rdquo; </b>manje waqonda. Kuyaqashelwa ukuthi ukuhlakanipha ngesimo ukuduma kwavela ku-Atma of the Sky, njengoba kukhonjisiwe ku umusho wesibili. Ngakho-ke, kuyagonyelwa ukuthi <b>&ldquo;uLizwi wayenoNkulunkulu.&rdquo; </b>Ukuhlola okwengeziwe kuveza ukuthi umsindo we leli gama lazalwa ku-Atma. Njengomucu osontekile iphuma ku-cotton fiber, ukuhamba kuka-Atma kuguqulelwe amandla, kanye nokuhlakanipha emandleni abonakaliswa efomini yomsindo. Ngokufanayo nendlela intambo equkethe i-cotton fiber, umsindo wokuhlakanipha uhlanganisa amandla ka-Atma. Ukuhlakanipha kuka-Atma isesimweni samandla ka-Atma kanye ne-Atma uqobo. I-Atma ukuhlakanipha kanye ne-Atma kuyafana, futhi kungakho wathi: <b>&ldquo;ULizwi wayenguNkulunkulu.&rdquo;</b>

  Kuze kube manje, sixoxile ukuthi uNkulunkulu wadala iJeevatma kanye ne-Atma, noNkulunkulu esebenza ngenkuthalo ngaphambi kokudala. Nokho, ngemva kwesenzo sokudala, uNkulunkulu wanika u-Atma amandla okwenza imisebenzi, ebonakala inyamalala nokwenza ubukhona Bakhe engaziwa. UNkulunkulu wayeka ukwenza noma yimiphi imisebenzi, futhi, phakathi lesi simo, Wafana nalowo owayengekho. Ngenxa yalokho, u-Atma wathatha umthwalo wemfanelo wokwenza Umsebenzi kaNkulunkulu. Nakuba i-Atma yenza imisebenzi yakho kokubili I-Jeevatma neParamatma, izenzo zayo zihlala zifihliwe abanye. Izitatimende ezishiwo ngenhla zichaza konke inqubo yokusebenza ye-Atma. Ekuqaleni, lapho Paramatma wadala indawo yonke, kwakukhona imiphefumulo emithathu, kodwa ngemva kokudalwa, imiphefumulo emibili kuphela&mdash;iJeevatma ne-Atma&mdash;eyaziwayo. Kwe ukungabikho kobukhona beParamatma, u-Atma wathatha indima yokuba I-Paramatma, yingakho i-Atma ingabizwa ngokuthi uNkulunkulu. Yize engeyena uNkulunkulu (Paramatma), u-Atma wenza okukaNkulunkulu imisebenzi futhi uthatha isikhundla sikaNkulunkulu.

  Ukuhlakanipha kwe-Atma kuvela ku-Atma uqobo. Ngu egomela ngokuthi u-Atma unguNkulunkulu, kuyaqinisekiswa ukuthi <b>uLizwi (ukuhlakanipha) kwakunoNkulunkulu.</b> Lesi sitatimende sinembile uma thina bheka u-Atma njengoNkulunkulu. Nakuba u-Atma engeyena uNkulunkulu, kufanele kuthiwe unguNkulunkulu ngoba uNkulunkulu ukuphile Atma igunya lokwenza njengoNkulunkulu. Ngakho-ke, lapho iZwi (ukuhlakanipha) kubhekwa njenge-Atma, kungamenyezelwa ukuthi kuyafana ukuhlakanipha (Atma) nguNkulunkulu. Le ncazelo ihambisana ne-Vangelini likaJohane ukuthi <b>uLizwi wayenguNkulunkulu. </b>Ngemva kokuphendula imibuzo enjengokuthi &ldquo;Liyini Izwi?&rdquo;, &ldquo;Kanjani Ingabe iZwi lixhunywe ku-Atma?&rdquo; futhi &ldquo;Kungani kucatshangelwa i-Atma UNkulunkulu?&rdquo;, Ngicabanga ukuthi incazelo yemisho emithathu yokuqala kusukela eVangelini likaJohane 1:1 manje seliqondakala. Uma omunye ehluleka ukubamba lokhu ngemva kwencazelo enemininingwane enjalo, ukuhlakanipha kwe I-Atma ingase ihlale ingaqondakali. Ukuqonda ukuhlakanipha kuka-Atma kubalulekile ukuqonda isimiso sikaNkulunkulu. Ukuqonda izindlela zikaNkulunkulu, umuntu kufanele aqale ngokuqonda ukuhlakanipha kwe Izwi. Uma lokhu kuhlakanipha sekwaziwa, kuba sobala ukuthi Ukuhlakanipha kungu-Atma, futhi u-Atma unguNkulunkulu.

<table style="width:100%">
<tr>
  <td>Ekudalweni</td>
  <td>Unkulunkulu  (Paramatma)</td>
  <td>iPrakruti</td>
  <td>I-Atma</td>
  <td>iJeevatma</td>
</tr>
<tr>
  <td>Ngemva Kokudala</td>
  <td>iParamatma</td>
  <td>iPrakruti</td>
  <td>I-Atma</td>
  <td>iJeevatma</td>
</tr>
<tr>
  <td>Ngemva Kokudala</td>
  <td>I-Atma</td>
  <td>iPrakruti</td>
  <td>I-Atma</td>
  <td>iJeevatma</td>
</tr>
</table>
  Esenzweni sokudala, uNkulunkulu wasebenza ukuze adale kokubili I-Prakruti yesifazane kanye ne-Atma ne-Jeevatma yesilisa. Ekuqaleni, uNkulunkulu, njengePurusha (owesilisa), wadala imiphefumulo emibili, i-Atma kanye noJeevatma, ofana naYe. Ngemva kokudalwa kwe I-Prakruti, i-Atma, ne-Jeevatma, uNkulunkulu uguqule indima ye ukufakaza ngaphandle kokuhlanganyela ngokugcwele. Ngokusekelwe kuNkulunkulu ukungazibandakanyi emsebenzini, kungase kubonakale sengathi akukho UNkulunkulu, naphezu kokuba khona Kwakhe. Lapho ibhalansi ye-dharmas kuphazamiseke, futhi ama-adharma anqobe emhlabeni, uNkulunkulu uthumela umphefumulo Wakhe njengeBhagavan ukubuyisela i-dharmas. Ekusunguleni kabusha ama-dharma, Kuthunyelwe ummeleli kaNkulunkulu, esusa isidingo sokuba uNkulunkulu enze bahlanganyele ngqo emsebenzini. U-Atma, ngakolunye uhlangothi, uyacabanga isibopho sayo yonke eminye imisebenzi. Ngakho, ngemva kokudala, UNkulunkulu uba ongenzi lutho futhi abonakale engenamsebenzi. Kungashiwo ukuthi uNkulunkulu, kulesi simo, ubonakala engekho. U-Atma uyangena agcwalise okuyize okucatshangwayo kukaNkulunkulu futhi ngempumelelo abe nguNkulunkulu, kusenza singanaki ukungabikho kukaNkulunkulu. Ngakho-ke, umusho othi <strong>&ldquo;ULizwi wayenguNkulunkulu&rdquo; </strong>uvezwa kwesesibili saphezulu umbhalo, obonisa umehluko phakathi kukaNkulunkulu nezwi. Nakuba igama lingeyena uNkulunkulu ngokwemvelo, laguqulwa laba nguNkulunkulu. Inkulumo ethi <strong>&ldquo;ULizwi wayenguNkulunkulu&rdquo; </strong>iqokomisa ukuguqulwa kwezwi (ukuhlakanipha) libe nguNkulunkulu. Kusukela izwi (ukuhlakanipha) kuhlotshaniswa ne-Atma, futhi u-Atma uthathwa njengoNkulunkulu, kuthiwa u-Atma, okuyizwi, unguNkulunkulu. Wonke umuntu unjalo wenza iphutha ngokwazi ukuthi uNkulunkulu ungubani nokuthi ungubani u-Atma.

  Eqinisweni, uNkulunkulu akasekho ngemva kwesenzo of indalo. Ngaphandle kokwazi ukuthi akekho uNkulunkulu emhlabeni, I-Atma ithatha indima kaNkulunkulu, yenza imisebenzi yabo bobabili Jeevatma futhi Prakruti. Ngesikhathi esifanayo, i-Atma ithatha isikhundla esifana noNkulunkulu. Ngemva kokudala, uNkulunkulu waguquka waba ibhizinisi elingenasimo, elingenagama elingenayo imisebenzi eyabelwe. Iyachaza uNkulunkulu onjengaye ongekho angase anembe kakhulu kunalokho eqinisekisa ubukhona Bakhe. Njengoba kungekho lutho endaweni kaNkulunkulu, U-Atma ungena endimeni kaNkulunkulu, ecaciswa yinkulumo ethi <strong>&ldquo;ULizwi wayenguNkulunkulu&rdquo;</strong> emshweni wesithathu. Naphezu kwabantu abaningi ukuzwa nokufunda le misho, imfihlo ewumsuka kuhlala kungaziwa.

  Ukucacisa iqiniso nge-Atma, ehlanganisa indima kaNkulunkulu, kuthiwa <strong>&ldquo;uLizwi wayenguNkulunkulu.&rdquo; </strong>Lapho u-Atma, ukwenza samuntu uNkulunkulu, uhlanganyela kunoma yisiphi isenzo, kubonisa isenzo ukuthi &ldquo;uJeevatma wenzile&rdquo; noma &ldquo;uNkulunkulu wenzile,&rdquo; ekholisa wonke umuntu ngobukhona bukaNkulunkulu. Kungase kuphakame imibuzo mayelana nokuthi ubani ophethe igunya phezu kwendawo yonke uma uNkulunkulu engekho, noma ngabe lokhu umbono uhambisana nokuhlakanipha kukaNkulunkulu noma ukungakholelwa kuNkulunkulu. Impendulo kulemibuzo imi kanje: Sithi uNkulunkulu akekho indawo kaNkulunkulu, kodwa asisho ukuthi uNkulunkulu akekho kube bonke. Izenzo zikaNkulunkulu azikaziwa, futhi kuyagcizelelwa lokho Akanalo igama, umsebenzi, noma isimo, yingakho engenalo ngokuqondile ubudlelwano nabantu, kodwa asikaze sithi uNkulunkulu akazange zikhona nhlobo. Ezikhathini zosongo ku-dharmas, uNkulunkulu uthumela oKhe omele ukubuyisela ukuhleleka. Nakulesi simo, ummeleli uyakugwema ukusho ngokucacile ukuthi unguNkulunkulu, ukuthatha i-moniker &lsquo;Bhagavan.&rsquo; Imfihlakalo ezungezile Ubuyena nezimfanelo zikaNkulunkulu kuyaqhubeka. UNkulunkulu ukhona, nokho akekho uyazi ukuthi uNkulunkulu unjani. Akekho oke wabona noma ngokuqondile wakhuluma noNkulunkulu kusukela ekudalweni. Kungashiwo noma yini nganoma yini emhlabeni, kodwa akekho ongasho lutho okuqinisekile ngoNkulunkulu. Amagama anjengokuthi &lsquo;Allah&rsquo; ku-Kruta Yuga asho Isimo sikaNkulunkulu esingenamkhawulo, kanye neziqu ezinjengokuthi &lsquo;Parabrahma&rsquo; gcizelela ukuphakama kukaNkulunkulu phezu kuka-Atma, ogcwalisa okuhlukahlukene izindima. Ukwengeza, igama elithi &lsquo;Paramatma&rsquo; ligqamisa okukaNkulunkulu umehluko ku-Atma, futhi elithi &lsquo;Purushottama&rsquo; lisho ekaNkulunkulu ukuphakama uma kuqhathaniswa neJeevatma ne-Atma. Kungcono uku vuma ukuthi mina nawe asazi lutho ngoNkulunkulu.  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 80,
verse: ` <b>(2) IVangeli likaJohane, isahluko 1, ivesi 9.</b>`,
meaning: `<b>
(1:9) Ukukhanya kweqiniso okukhanyisa wonke umuntu kwakungukukhanya eza emhlabeni.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Uma kukhona ukukhanya emhlabeni ongaphandle, kungenxa a umlilo ovuthayo. Nokho, kulo mongo, kukhulunywa ngokukhanya kweqiniso evesini. Ukukhanya kweqiniso kubaswe ngaphandle komlilo futhi kuyangena wonke umuntu, ekhanyisa umzimba wonke kusukela ekhanda kuye kuye uzwane. Kukhona ukukhanya okukodwa okunjalo ngaphandle komlilo, futhi lokho yi-Atma, evela kuNkulunkulu futhi ekhethwe uNkulunkulu (uMdali). I-Atma inikeza ukukhanya kokwazi kuwo wonke umzimba. Nini I-Atma ingena emzimbeni, amaseli angu-25 trillion emzimbeni womuntu agcwaliswe ukukhanya kwawo. Ingqamuzana ngalinye liba isibani esivuthayo ngaphandle komlilo. Ukukhanya kwesibani kunezinga lokushisa elithile. Umzimba womuntu unezinga lokushisa elingu-98.4 &deg;F ngenxa Ukukhanya kwe-Atma. Lapho i-Atma ishiya umzimba, umzimba uba kubanda ngaphandle kokushisa. Umzimba ongenakho ukukhanya kwe-Atma ubizwa ngokuthi isidumbu. Evesini 24:35 kuthiwa, <strong>&ldquo;U-Atma ungukukhanya, futhi umzimba uyisiphephelo.&rdquo; </strong>Kungashiwo ukuthi Atma, okuyinto ikhanyisa umzimba, ingabizwa ngokuthi ukukhanya kweqiniso.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 81,
verse: ` <b>(3)	IVangeli likaJohane, isahluko 1, ivesi 10.</b>`,
meaning: ` <b>
(1:10) Wayesezweni, futhi nakuba izwe lalikhona owenziwe ngaye, izwe alimazanga.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Igama elithi ‘Loka (Umhlaba)’ ngesiTelugu libhekisela kokuthile lokho okuhlangenwe nakho. I-Atma ikhona kubantu abanjalo bhekana nesipiliyoni, futhi ingumdali wabo bonke abantu. Kodwa-ke, kubalulekile ukuqaphela umehluko phakathi kwe-Atma noNkulunkulu. UNkulunkulu wadala i-Atma, futhi u-Atma, naye, wadala abantu. Kubalulekile ukuqonda ukuthi uNkulunkulu akazange ngokuqondile dala abantu; esikhundleni salokho, Wakha yonke Prapancha, ekuqaleni ingenazo izinto eziphilayo. UNkulunkulu waqala waveza U-Prakruti wabe esenika i-Atma amandla okukhiqiza, ukubusa, kanye ukuqeda ukuphila komuntu. Kusukela lapho, i-Atma ibilokhu iqhubeka edala abantu, esebenza njengokukhanya okuqhubekayo komuntu ukuphila, kanye nokuhlela izinqubo zokufa nokuzalwa kabusha. Naphezu kwalokhu, abantu bavame ukuhlala benganakile ukuba khona kwe I-Atma, eseduze futhi ingaphakathi kubo futhi empeleni inguNkulunkulu. I-Atma izala abantu; ngakho-ke u-Atma unguBaba ku abantu. UNkulunkulu wadala i-Atma; ngakho unguBaba ku-Atma. Nakuba ngezinye izikhathi i-Atma ibizwa ngokuthi uNkulunkulu, uNkulunkulu weqiniso unguMoya oNgcwele, kanti u-Atma unguYise wabantu.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 82,
verse: ` <b>(4)	IVangeli likaJohane, isahluko 1, ivesi 11.</b>`,
meaning: `  <b>
(1:11) Weza kokungokwakhe, kodwa okwakhe akamemukelanga.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Igama elithi “Okwakhe” lihlanganisa bonke labo Yena kudaliwe. Atma, esebenza ngomyalo oNgcwele Umoya, wenza abantu baba khona, futhi wabonakaliswa kubo ngesimo sokuhlakanipha kwaphezulu, okubhekiselwa kukho njengeZwi. Ngisho nakuba u-Atma weza kubantu ngendlela yokuhlakanipha, abantu bathambekele ekuboneni olwabo ulwazi njengolubalulekile, kaningi ukunganaki noma ukulahla ukuhlakanipha okunikezwayo.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 83,
verse: `  <b>(5)	IVangeli likaJohane, isahluko 1, ivesi 12. </b>`,
meaning: `<b>
(1:12) Nokho kubo bonke abamamukelayo, kulabo wakholwa egameni lakhe, wanika ilungelo lokuba abantwana bakaNkulunkulu.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Labo abaqonda ukuhlakanipha okunikezwa u-Atma uzokwamukela u-Atma. Labo abajwayelene ne-Atma ukuhlakanipha futhi ubambe ukholo ku-Atma unethemba lokuba Izindlalifa zika-Atma. Ngakho-ke, leli vesi liyagomela, “Wanikela ilungelo lokuba ngabantwana bakaNkulunkulu.” Igama elithi “abantwana bakaNkulunkulu” lisho labo abajwayelene nokuhlakanipha kuka-Atma.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 84,
verse: ` <b>(6)	IVangeli likaJohane, isahluko 1, ivesi 13.</b>`,
meaning: `<b>
(1:13) Abantu abazalwa ngokungewona wozalo lwemvelo, noma ngabantu isinqumo noma intando yendoda, kodwa ezelwe nguNkulunkulu.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Bonke abantu bavela ku-Atma. Abazalwa ngegazi labesifazane noma intando yabesilisa noma yabesifazane.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 85,
verse: `<b>(7)	IVangeli likaJohane, isahluko 1, ivesi 14.</b>`,
meaning: ` <b>
(1:14) ULizwi waba yinyama futhi wakha indawo yakhe yokuhlala phakathi kwethu. Sabona inkazimulo yakhe, inkazimulo yalowo oyedwa neNdodana ezelwe yodwa, evela kuYise, egcwele umusa kanye neqiniso. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UNkulunkulu u-Atma (Ukuhlakanipha) wathatha isimo somzimba, efana neyomuntu, futhi yahlala phakathi kwabantu, ekhazimula umusa nokuhlakanipha.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 86,
verse: `  <b>(8)	IVangeli likaJohane, isahluko 1, ivesi 18.</b>`,
meaning: ` <b>
(1:18) Akekho umuntu oye wabona uNkulunkulu noma nini; okuodwa iNdodana ezelwe, esesifubeni sikaYise, wamembula.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Igama elithi &lsquo;Nkulunkulu&rsquo; lisetshenziselwa kokubili i-Atma neParamatma. Ku umbhalo wokugcina waphezulu, igama elithi &lsquo;Allah&rsquo; lisetshenziswa kubo bobabili oNkulunkulu I-Atma neParamatma. Ngakho, amaSulumane awakwazanga ukuqaphela oNkulunkulu ababili. Ukuze kugwenywe leli phutha, iBhayibheli lithi u-Atma unjalo uBaba, kanye neParamatma nguMoya oNgcwele. Igama &lsquo;iNdodana ezelwe&rsquo; ibhekisela <strong>endodaneni okuwukuphela kwayo eyadalwa uNkulunkulu</strong>. I-Paramatma (uMoya oNgcwele) ingunaphakade. Ngemuva kokudala i-Prakruti ku ekuqaleni, uParamatma wadala indodana ebizwa ngokuthi u-Atma ukuletha zonke izidalwa eziphilayo zibe khona. U-Atma wadala zonke izidalwa eziphilayo ngokwemiyalo kaMoya oNgcwele. Ngakho-ke, kukhona uBaba oyedwa (uNkulunkulu odaliwe) wabo bonke abaphilayo. Ubaba we-Atma edaliwe nguMoya oNgcwele. <strong>&ldquo;Akekho owake waba khona sabona uNkulunkulu (uMoya oNgcwele noma iParamatma),&rdquo; </strong>njengoba kushiwo encwadini ivesi. UNkulunkulu (uMoya oNgcwele) akanaso isimo, igama, noma umsebenzi; ngakho-ke, akekho owake wabona iParamatma. Atma, kuphela iNdodana ezelwe, yembula uNkulunkulu ongabonakali ngokuhlakanipha Kwakhe. U-Atma uyiNdodana ezelwe yodwa ehlukene nenhliziyo ye UNkulunkulu Omkhulu, Paramatma. Ngoba akekho oke wabona oNgcwele Moya, u-Atma kuphela ongakhuluma ngoYise, uMoya oNgcwele.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 87,
verse: ` <b>(9)	IVangeli likaJohane, isahluko 1, ivesi 51.</b>`,
meaning: `<b>
(1:51) Wabe esenezela, “Ngiqinisile ngithi kini, nizobona izulu liyavuleka, nezingelosi zikaNkulunkulu zenyuka futhi yehlela phezu kweNdodana yomuntu.”  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Leli yizwi uJesu alikhuluma kuNathanayeli uqobo lwakhe. UJesu wathi uyiNdodana yoMuntu, nakuba uNathanayeli wayebize Yena njengeNdodana kaNkulunkulu. UJesu akazange akuphike ukuba khona iNdodana kaNkulunkulu kodwa esikhundleni salokho wazehlisa waba yiNdodana yoMuntu. Waqinisekisa uNathanayeli nabanye ukuthi babezofakaza izenzakalo ezingajwayelekile. Njengoba sike sagcizelela ngaphambili, ekaNkulunkulu izinceku, izingelosi, zikhonza njengababusi emhlabeni wabantu. Lezi izingelosi, ezivame ukubizwa ngokuthi amaBhuta namaplanethi (Grahas), ziyi eziningi esibhakabhakeni, eziyizigidigidi. Ngesikhathi sokuhlangana no UJesu, izinceku zikaNkulunkulu, zazi ukuthi ungubani, zehla ezulwini futhi bakhothama phambi Kwakhe. Nokho, abantu abaningi izidalwa zihlala zingazi ukuthi uJesu ungubani ngempela futhi azikhothami phansi phambi Kwakhe. Izikhombo ezifanayo ziyatholakala kwi-Quran, umbhalo wokugcina waphezulu, ikakhulukazi emavesini 15:28, 15:29 , kanye 15:30. Evesini okukhulunywe ngalo, kuprofethwe ukuthi uNathanayeli uzofakaza ukuba khona kweBhutas neGrahas ezungeze Ndodana yomuntu, sengathi iminyango yezulu ivuliwe. Isisho ‘ukwenyuka nokwehla’ kufanekisa ukuza nokuhamba, nge ‘ukwehla phezu kweNdodana yomuntu’ okusho ukufika kwezingelosi kuJesu. Lapho uNathanayeli evuma uJesu njengeNdodana kaNkulunkulu, uJesu, eqaphela umbono kaNathanayeli wokuhlakanipha, wamqinisekisa evesini 50 ukuthi wayezobona izehlakalo ezinkulu nakakhulu. Isiqephu 51 kulandela, eveza ukuthi uNathanayeli, ebona ngokuhlakanipha, bekwazi ukubona izinto ezingaphezu kokujwayelekile kwabanye. Izenzakalo ezichazwe evesini 51 zibonakala kuphela kulabo abane ukuhlakanipha kukaNkulunkulu, okwenza siqonde ukuthi uJesu ungubani ngempela.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 88,
verse: `<b>(10)	IVangeli likaJohane, isahluko 3, ivesi 3.</b>`,
meaning: ` <b>
(3:3) UJesu waphendula wathi: “Ngiqinisile ngithi kini: Akakho ongabona umbuso kaNkulunkulu ngaphandle kokuthi bazalwe kabusha.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ivesi akufanele lihunyushwe njengoba lisho incazelo ejulile, engokomfanekiso. UNkulunkulu nombuso Wakhe kudlulele ukubonakala ngokomzimba kunoma ubani. UJesu wakuveza ngokucacile lokho ukuqonda nokubona umbuso kaNkulunkulu kudinga ukuzalwa kabusha okungokomoya. Lokhu akusho ukufa komzimba kanye ukuzalwa kabusha okulandelayo. Uma kuthathwa njengokungokoqobo, kungasho lokho noma ubani ofuna ukwazi uNkulunkulu kungadinga ukudlula umzimba ukufa, okuwukungaqondi. uNikodemu, owayebambe ukuhumusha ngokwezwi nezwi, kwaphakamisa umbuzo osekelwe kulokhu umbono oyiphutha.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 89,
verse: `<b>(11)	IVangeli likaJohane, isahluko 3, 4, 5, 6, Ivesi lesi-7, nelesi-8.</b>`,
meaning: `<b>
(3:4) “Umuntu angazalwa kanjani esemdala?” Kubuza uNikodima. “Ngempela abakwazi ukungena ngomzuzwana isikhathi esizalweni sikanina ukuba bazalwe!”
<br><br>
(3:5) UJesu waphendula wathi: “Ngiqinisile ngithi kini: Akakho ongakwenza bangene embusweni kaNkulunkulu ngaphandle kokuthi bazalwe amanzi noMoya (Atma).
<br><br>
(3:6) Inyama izala inyama, kodwa uMoya (Atma) uzala umoya.
<br><br>
(3:7) Akufanele nimangale lapho ngithi, “Wena kufanele azalwe kabusha.”
<br><br>
(3:8) Umoya uphephetha nomaphi lapho uthanda khona. Uyakuzwa umsindo, kodwa awukwazi ukusho ukuthi uvelaphi noma lapho liya khona. Ngakho, kunjalo nawo wonke umuntu ozelwe ngu Umoya (Atma).” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho umuntu efa futhi ezalwa kabusha, kubizwa ngokuthi ukuzalwa kabusha. Uma ukuzalwa kabusha kwenzeka ngokomzimba, zonke izitho zomuntu zizokwenza shintsha. Uma lokho kwenzeka, isifiso sokubona uNkulunkulu nokukaNkulunkulu umbuso nawo uzoshabalala. Umzimba akufanele ufe ukugcina izitho nezifiso njengoba zinjalo. Umzimba uqukethe kokubili ukuhlakanipha nokungazi, kepha ukungazi emzimbeni kufanele ukufa ngokuphelele. Lapho indoda isusa imicabango yokungazi futhi izifiso, uthathwa njengofile ngokungazi futhi ozelwe ukuhlakanipha. Umuntu osusa ukungazi futhi azuze ukuhlakanipha angakwazi kuthiwa uzalwa ngu-Atma<strong>. Umsebenzi womuntu ukwazi u-Atma</strong><strong>emzimbeni. </strong>Ukuze wazi i-Atma, umuntu kufanele azi ukuhlakanipha kuka-Atma. Lapho umuntu ekwazi ukuhlakanipha kwe-Atma, ubhekwa njengozelwe kwe-Atma. Lapho umzimba ufa, umuntu uthola umzimba omusha, kodwa ukushintsha intando yomuntu emzimbeni ofanayo ngaphandle kokuthola okusha umzimba ufana nokuzalwa okusha. Umoya uphephetha nomaphi lapho uthanda khona, futhi siyawuzwa umsindo wayo kuye ngokuthi ivuthela kuphi. Njengoba umoya ushintsha indlela yawo, uma umuntu eshintsha injongo yakhe, uyokwenza kube ukuzalwa okusha kuye. Umuntu ofisa u-Atma uyazi u-Atma ngaphakathi umzimba ofanayo nokuphila okufanayo. Asikho isidingo sokuya enye impilo ukwazi u-Atma.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 90,
verse: `<b>(12)	IVangeli likaJohane, isahluko 3, ivesi 13. </b>`,
meaning: `<b>
(3:13) Akekho owake wangena eParaloka ngaphandle kwe owavela eParaloka—iNdodana yomuntu. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ihaloka, Izulu (Swarga-Loka), Isihogo (Naraka-Loka), kanye I-Paraloka amagama emihlaba emine. Umhlaba (Loka) lapho esihlala khona sonke kubizwa ngokuthi Ihaloka. Izulu nesihogo akukhona imihlaba ehlukene; bobabili basemhlabeni. Loka akuwona umbuso noma insimu. Indawo kanye nesikhathi sokuhlangenwe nakho ndawonye ebizwa ngokuthi. Indawo lapho umuntu ehlangabezana nobunzima ibizwa ngokuthi Yamaloka, Naraka-Loka, noma isihogo. Ngokufanayo, indawo lapho eyodwa okuhlangenwe nakho kwenjabulo kubizwa ngokuthi i-Swarga-Loka noma izulu. Kusukela kokubili lokhu okuhlangenwe nakho kwenzeka emhlabeni, kungashiwo ukuthi lokhu umhlaba (Ihaloka) kokubili izulu nesihogo. Nokho, uParaloka ehlukile esihogweni nasezulwini. Ngenkathi kokubili isihogo nezulu zibandakanya okuhlangenwe nakho, uParaloka akanakho okuhlangenwe nakho. Isimo esingenaso isipiliyoni sibizwa ngokuthi iParaloka. Lapho umuntu edlula i-karma, akabi nakho injabulo noma usizi bese ungena eParaloka. Ibizwa ngokuthi isimo ukuba munye noNkulunkulu, uMukti, noma uMoksham. Umuntu e-Ihaloka njalo eboshwe isono kanye ne-punya karma. Noma ubani oseParaloka ayikho i-karma. Uma umuntu efa e-Ihaloka, bona awukwazi ukuya eParaloka kodwa ubuyele e-Ihaloka. Ngokolunye uhlangothi, umuntu eParaloka, lapho eza kulo mhlaba nganoma yisiphi isidingo, ubuyela eParaloka. Ngakho-ke, nakuba i- isakhamuzi saseParaloka esivela eParaloka sihlala kulokhu emhlabeni okwesikhathi esithile ngokwentando Yakhe, Uyongena kamuva I-Paraloka. Ngakho, ivesi elithi <strong>&ldquo;Akekho owake wangena kulo UParaloka ngaphandle kweNdodana yoMuntu eseParaloka&rdquo; </strong>kusho ukuthi lowo oseParaloka unguNkulunkulu. Noma ngabe ubani waba uNkulunkulu uzalwa njengomuntu, uzobuyela eParaloka. I into efanayo kuvezwe kuJohane 3:13.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 91,
verse: ` <b>(13)	IVangeli likaJohane, isahluko 3, ivesi 15.</b>`,
meaning: `<b>
(3:15) Ukuze yilowo nalowo okholwa kuYe akufanele abhubhe, kepha abe nokuphila okuphakade.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wonke umuntu okholwa kuNkulunkulu uyozuza ukuphila okuphakade ngaphandle kokufa. Nokho, kulotshiwe ukuthi, &ldquo;Phakade ukuphila kungaye kuphela.&rdquo; I-Paramatma ikhona kokubili ngaphakathi nangaphakathi ngaphandle komzimba. <strong>Lapho i-Jeevatma ihlangana neParamatma, kuthiwa iJeevatma izuze iParaloka, nayo waziwa njengombuso kaNkulunkulu</strong>. Kungabuye kushiwo ukuthi iJeevatma ithole ukuphila okuphakade (moksham). Ivesi uthi, &ldquo;Lowo okholwa kuNkulunkulu uyokhululwa ekugcineni ku-karma futhi uthole ukuphila okuphakade.&rdquo; UParaloka, omele ukuphila okuphakade, kugcwele yonke indawo, kungakhathaliseki ukuthi umuntu unjani ngokomzimba indawo. Ngenxa yalokho, noma ubani ozuza i-moksham uyahlangana ngoMoya oNgcwele (Paramatma) emizimbeni yabo.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 92,
verse: `<b>(14)	IVangeli likaJohane, isahluko 3, ivesi 17.</b>`,
meaning: `<b>
(3:17) Ngoba uNkulunkulu akayithumelanga iNdodana yakhe ezweni ahlulele umhlaba, kodwa ukusindisa umhlaba ngaye.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UNkulunkulu wathumela iNdodana yakhe njengomuntu emhlabeni ukuze isindise abantu, hhayi ukwahlulela bona. Umthwalo wendoda owa evela kuNkulunkulu iwukufundisa abantu ukuhlakanipha kukaNkulunkulu nokusindisa kubo ezonweni zabo. Akazanga ukuzokwahlulela izono futhi i-punya yabantu. UNkulunkulu akazange athumele ummeleli Wakhe emhlabeni ngokwahlulela; kunalokho, Weza ukuzosindisa abantu. Lokhu Ivesi libalulekile eBhayibhelini. U-Atma wehlulela umuntu lapho efa. Lowo ovela kuNkulunkulu ufundisa abantu indlela yokuphunyuka kusukela ku-karma, kuyilapho i-Atma yenza umsebenzi wokubahlulela.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 93,
verse: `<b>(15)	IVangeli likaJohane, isahluko 3, ivesi 18. </b>`,
meaning: `<b>
(3:18) Lowo okholwa kuye akahlulelwa, kodwa ongakholwayo umi wahlulelwa ngoba bengakholwanga ebizweni likaNkulunkulu iNdodana eyodwa.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ivesi lithi, &ldquo;Lowo okholwa Kuye,&rdquo; elibhekisela kuNkulunkulu ongabonakali noma kummeleli kaNkulunkulu obonakalayo owavela kuNkulunkulu. Leli vesi libuye lithi, &ldquo;Abazange babekholelwa egameni leNdodana kaNkulunkulu ezelwe yodwa,&rdquo; okusho ukuthi ukuthi kufanele kuqondwe njengokubhekisela kokukaNkulunkulu ummeleli ovela kuNkulunkulu. UNkulunkulu ngokwakhe weza emhlabeni ekusithekeni komuntu ukufundisa abantu ukuhlakanipha. UJesu wathi, <strong>&ldquo;NgiyiNdodana kaNkulunkulu, noma iNdodana yoMuntu, noma iNdodana kaNkulunkulu iNdodana yodwa,&rdquo; </strong>ukuze angaqashelwa. EbuHindu, uNkulunkulu okuthiwa uBhagavani lapho Ezifihla futhi eza emhlabeni njengendoda. UKrishna uyena owafika kanjalo; ngakho Ukhona ebizwa ngeBhagavan eBhagavad-Gita. Nakuba uJesu, ngubani iNdodana kaNkulunkulu, yabonakala njengomuntu, kufanele futhi ibizwe Bhagavan. Lapho uNkulunkulu eba sesimweni somuntu emhlabeni, amaHindu abiza kanjalo Yena uBhagavan, namaKrestu ambiza ngeNdodana yoMuntu. Ngenkathi kunjalo kushiwo embhalweni wokugcina waphezulu ( 15:28, 29, 30 ) <strong>ukuthi uNkulunkulu uthumela ummeleli wakhe ngokuphefumulela umphefumulo Wakhe Kuye</strong>, AmaSulumane akholelwa ukuthi uNkulunkulu akezi njengomuntu. Noma ubani ayinalo ukholo kummeleli kaNkulunkulu, iNdodana kaNkulunkulu esehlulelwe.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 94,
verse: `<b>(16) IVangeli likaJohane, isahluko 3, 19, 20, Amavesi 21.</b>`,
meaning: ` <b>
(3:19) Lesi yisinqumo: Ukukhanya kungenile izwe, kepha abantu bathanda ubumnyama kunokukhanya ngoba izenzo zabo zazizimbi.
<br><br>
(3:20) Wonke umuntu owenza okubi uzonda ukukhanya futhi uyokwenza bangangeni ekukhanyeni, besaba ukuthi izenzo zabo ziyakwenzeka obala.
<br><br>
(3:21) Kodwa lowo ophila eqinisweni uyangena ukukhanya, ukuze kubonakale ngokusobala lokho abakwenzayo okwenziwayo kuye kwenziwa phambi kukaNkulunkulu. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  I-Paramatma, engaziwa muntu, ifanekisela ubumnyama. I-Atma, eyasungulwa ngu I-Paramatma, ihlanganisa ukukhanya kweqiniso. I-Paramatma idaliwe Amadodana amabili: i-Atma engabonakali, esebenza njengokukhanya ngaphakathi komzimba, kanye nenye i-Atma eba sesimweni somuntu phakathi kwabantu. Ngenkathi i-Atma, engabonakali futhi ekhanyisa umzimba, kubhekiselwa kuyo njengeNdodana, enye iNdodana kaNkulunkulu, ibonakalisa njengomuntu, iyiyo ngendlela ehlukile ebizwa ngokuthi <strong>iNdodana ezelwe yodwa</strong>. UJesu, yedwa iNdodana ezelwe, yehlela emhlabeni. Nokho, ngenxa yabo izenzo ezinonya, abantu babazisa ubumnyama babo futhi wagwema ukusondela kuJesu, ukukhanya kokuhlakanipha.

  Wonke umuntu ongenalwazi unenzondo Ummeleli kaNkulunkulu oletha <strong>ukukhanya kokuhlakanipha </strong>ku umhlaba. Besaba ukuthi izenzo zabo ezimbi zizodalulwa ubukhona bommeleli kaNkulunkulu, okubenza bagweme ukukhanya futhi ufihle izenzo zabo. Labo abalindele lokho okukaNkulunkulu ukukhanya, okuthatha isimo somuntu emhlabeni, kuyokwembula izenzo zabo zobumnyama gwema ukuza eNdodaneni kaNkulunkulu lapho ibonakala. Labo aba babambelele ekuhlakanipheni kukaNkulunkulu baqonde ukuthi u-Atma uyaziphendulela kuzo zonke izenzo zabo ngaphakathi emzimbeni. Basondela eNdodaneni kaNkulunkulu ngoba zonke izenzo zabo zingaphakathi <strong>ukhanya kukaNkulunkulu, ziqondiswa ukuhlakanipha.</strong> Nokho, ingxenye encane kuphela yabantu emhlabeni uyaqaphela ukuthi u-Atma, onguNkulunkulu, unesibopho sakho konke izenzo. Ngenxa yalokho, inani elilinganiselwe kuphela elisondela INdodana kaNkulunkulu uma Ivela. Njengoba umhlaba ugcwele abantu abakholelwa ukuthi banesibopho sabo kuphela izenzo, bayakugwema ukufuna iNdodana kaNkulunkulu. Hhayi nje ukwenza bayayibalekela iNdodana kaNkulunkulu, kodwa futhi bayafukamela inzondo kanye nokufaka ubunzima kummeleli kaNkulunkulu, owathi ayibonakali njalo emhlabeni. Bayihleka usulu iNdodana kaNkulunkulu, emfaka ezinsizini eziningi.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 95,
verse: ` <b>(17)	IVangeli likaJohane, isahluko 5, ivesi 19.</b>`,
meaning: ` <b>
(5:19) UJesu wabaphendula wathi: “Ngiqinisile ngithi wena, iNdodana ingenze lutho ngokwaYo; Angenza kuphela lokho abona uYise ekwenza, ngoba noma yini UBaba wenza neNdodana.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuleli vesi, kukhulunywa &lsquo;ngoBaba neNdodana&rsquo; okuhambisana namazwi athi &ldquo;iNdodana iyozenza izinto lokho uBaba akwenzayo.&rdquo; Kubalulekile ukuhlukanisa imininingwane uYise neNdodana, banikezwe ukuthi uMoya oNgcwele (uNkulunkulu) nguye yedwa eyodwa. Nakuba uNkulunkulu eneNdodana eyodwa yaphakade, kukhona nenye INdodana eyenzeka ngezikhathi ezithile eMhlabeni. Kubalulekile ukuthola ukuthi leli vesi likhuluma ngayiphi iNdodana. Johane 3:17 uyagcizelela, <strong>&ldquo;Ngokuba uNkulunkulu akayithumanga iNdodana yakhe ezweni alahle umhlaba, kodwa ukusindisa umhlaba ngoyena,&rdquo;</strong> ebhekise eNdodaneni kaNkulunkulu, ebonakalisa umhlaba. Leli vesi (5:19) libhekisela eNdodaneni, u-Atma, osebenza njengokukhanya ngaphakathi kwe umzimba womuntu. I-Atma ingunaphakade emhlabeni, inikeza <strong>&lsquo;ukukhanya wokuhamba&rsquo;</strong> emzimbeni wawo wonke umuntu. Ngokusekelwe kulokhu, ikakhulukazi lapho ngokufunda ivesi, umuntu kufanele anqume ukuthi iyiphi kumadodana amabili UNkulunkulu, uMoya oNgcwele, ukhulume ngaye evesini. Johane 5:19 uveza u-Atma njengendodana kaNkulunkulu yaphakade, esho ukuthi u-Atma sibukisa izenzo zikaMoya oNgcwele futhi sizibandakanya kuphela imisebenzi ezuzwe njengefa kuBaba, engenzi lutho ngokuzimela.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 96,
verse: `<b>(18)	IVangeli likaJohane, isahluko 5, ivesi 20.</b>`,
meaning: ` <b>
(5:20) Ngoba uYise uyayithanda iNdodana futhi uyibonisa konke Uyakwenza. Yebo, futhi UzoMkhombisa okukhulu nakakhulu imisebenzi kunalena, ukuze nimangale. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Uma sibuza ukuthi ubani owathi, <strong>&ldquo;Paramatma (uMoya oNgcwele) ithanda iNdodana futhi iYikhombisa konke Ekwenzayo,&rdquo; </strong>sithola ukuthi uJesu, iNdodana kaNkulunkulu yesibili, yakhuluma la mazwi kubafundi Bayo ngenkathi Wayesemhlabeni. Akekho owakwazi ukuqaphela ngokugcwele iNdodana ka UNkulunkulu ngenkathi ehamba phakathi kwabantu njengomuntu. Naphezu Kwakhe izimfundiso nezimangaliso, abanye bamfaka ekuhluphekeni okukhulu kanye nokuthotshiswa, ekugcineni okuholela ekufeni Kwakhe. Nokho, INdodana kaNkulunkulu ezelwe yodwa, egama layo linguJesu, yayiphakathi kwabo futhi wathi, <strong>&ldquo;UBaba uzoMkhombisa (Atma) imisebenzi emikhulu kakhulu kunalezi ukuze nimangale.&rdquo; </strong>UNkulunkulu wayala I-Atma yokubusa phezu kwamaJeeva futhi ibonise izinto ezinkulu nakakhulu. Manje ake sihlole ukuthi ziyini lezo zinto ezinkulu.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 97,
verse: `<b>(19)	IVangeli likaJohane, isahluko 5, 21, 22, Amavesi 23. </b>`,
meaning: `<b>
(5:21) Ngoba njengoba nje uBaba evusa abafileyo futhi epha ukuphila kwabo, kanjalo neNdodana iyabaphilisa lowo enguye ngithokozile ukuyinika.
<br><br>
(5:22) Ngaphezu kwalokho, uBaba akahluleli muntu, kodwa umahluleli ukuphathise iNdodana konke ukwahlulela.
<br><br>
(5:23) Ukuze bonke badumise iNdodana njengoba nje bedumisa uBaba. Ongayihloniphi iNdodana akayihloniphi hlonipha uBaba owamthumayo.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kukhona okuphawulekayo lapha. Nakuba kukhona a kukhulunywa <strong>&lsquo;ngoAllah ababili</strong>&rsquo; eQur&rsquo;an, amaSulumane awakwazanga ukukuthola. Ngokufanayo, kukhulunywa &lsquo;<strong>ngamadodana Amabili</strong>&rsquo; eBhayibhelini, kodwa AmaKristu ayengenakuliqonda futhi akhulume ngeNdodana eyodwa kuphela. Womathathu la mavesi anegama elithi &lsquo;iNdodana.&rsquo; Umuntu udinga nquma ukuthi yimaphi amaDodana amabili okukhulunywa ngawo kula mavesi. Abaningi abakwazi ukuqonda ukuthi kukhona iNdodana yesibili ngoba iNdodana eyodwa kuphela ngesikhathi okukhulunywa ngayo emavesini. uNkulunkulu wathi: <strong>&ldquo;Ngokuba uNkulunkulu akayithumanga iNdodana yakhe ezweni ukuba yahlulele umhlaba kodwa ukusindisa umhlaba ngaye&rdquo; kuJohane 3:17. futhi &ldquo;uYise ukuphathise iNdodana konke ukwahlulela&rdquo; ku Johane 5:22 . </strong>Ngokusekelwe kulokhu, umuntu kufanele aqonde ukuthi uNkulunkulu unakho Amadodana amabili.

  UNkulunkulu wathi ngo-Atma, &ldquo;NjengoBaba, uMoya oNgcwele, ivusa abafileyo futhi ibaphilise, neNdodana ivusa abafileyo futhi unikeza ukuphila.&rdquo; Njengoba nje uBaba evusa abafileyo futhi abaphilise. U-Atma unquma okuhlangenwe nakho komuntu okulandelayo kwempilo ngemva kokufa ngokusekelwe ezonweni zabo zesikhathi esidlule kanye ne-punya. Ngakho-ke, "Njengoba UBaba, iNdodana iyamphilisa lowo ethanda ukumnika ukuphila,&rdquo; kushiwo encwadini ivesi. <strong>&ldquo;Lowo Amthandayo&rdquo; </strong>kusho <strong>&ldquo;labo abazimisele nge-karma&rdquo; </strong>ngokombono ka-Atma. Njengoba i-Atma ingukukhanya okufihliwe emzimbeni onquma i-karma yempilo elandelayo yomuntu, &ldquo;Uyovusa lowo owamahlulela,&rdquo; kushiwo leli vesi. &ldquo;Ukuvusa&rdquo; kusho &ldquo;ukuzalwa kabusha.&rdquo;

  UNkulunkulu wanika u-Atma amandla okwahlulela abafileyo futhi alethe babuyiselwe ekuphileni ukuze wonke umuntu akhazimulise iNdodana yakhe, u-Atma, njengoba nje wonke umuntu ekhazimulisa uMoya oNgcwele njengoNkulunkulu omkhulu. E- umzuzu wokufa komuntu, i-Atma, ukukhanya emzimbeni, inquma i-karma yabo yempilo yesibili ngokusekelwe esikhathini sabo esidlule izono zokuphila kanye ne-punya futhi ngokushesha iziyisa kwesibili ukuphila. U-Atma unquma impilo yesibili ngokusekelwe ku-karma yomuntu futhi abanike ukuphila futhi. Labo abangazi ukuthi Atma wenza izinto ezinkulu kangaka ungamboni u-Atma ngenkulu inhlonipho. Eyodwa ongamhloniphi u-Atma ngeke amhloniphe uNkulunkulu omthumileyo I-Atma. Ukungazi okunjalo akuhloniphi i-Atma, engaphakathi umzimba, noma iParamatma, engaphakathi nangaphandle komzimba.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 98,
verse: `<b>(20)	IVangeli likaJohane, isahluko 5, ivesi 24.</b>`,
meaning: ` <b>
(5:24) Ngiqinisile, ngiqinisile ngithi kini: Yilowo nalowo ozwa izwi lami, futhi okholwa ngulowo ongithumileyo unokuphila okuphakade, kodwa kasoze wahlulelwa kodwa weqile ekufeni wangena ekuphileni. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ngaphambili, amavesi 5:21, 5:22, no-5:23 ayexoxa ngoMphefumulo. (Atma), ohambayo emzimbeni. Ivesi 5:24 lithi ngoMphefumulo, owaba sesimweni somuntu negama UJesu. Lowo okholwa nguMoya oNgcwele, owathuma uJesu, the iNdodana ezelwe yodwa, iyozuza moksham. Umuntu onjalo uyazuza moksham ngaphandle kokwahlulela ngokushesha ngemva kwalokho ukufa kwabo.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 99,
verse: ` <b>(21)	IVangeli likaJohane, isahluko 5, ivesi 26.</b>`,
meaning: ` <b>
(5:26) Ngokuba njengalokhu uBaba enokuphila kuye, unakho kanjalo wayinika iNdodana ukuthi ibe nokuphila kuyo ngokwayo.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UNkulunkulu, uMoya oNgcwele, ungunaphakade. Njengoba kunje I-Paramatma ingunaphakade, u-Atma, indodana Yakhe, unikiwe igunya lokuhlala kuze kube phakade. UMoya oNgcwele, the Baba we Atma, wamnika lelogunya. Esaphezulu sokuqala umbhalo lapho uqhathanisa i-Jeevatma ne-Atma, i-Jeevatma ibizwa ngokuthi i-Kshara (umphefumulo Obhubhayo), kuyilapho i-Atma injalo ebizwa ngokuthi i-Akshara (umphefumulo ongenakonakala).
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 100,
verse: ` <b>(22)	IVangeli likaJohane, isahluko 5, ivesi 37.</b>`,
meaning: `<b>
(5:37) Anikaze nizwe izwi Lakhe, nibone nelakhe ifomu.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kulo mongo, elithi ‘Okwakhe’ libhekisela kuParamatma (uMoya oNgcwele). UNkulunkulu, owaziwa ngokuthi iParamatma noma uMoya oNgcwele, akanawo igama, ifomu, noma imisebenzi ethile. Akekho owake wabona uNkulunkulu onjalo ngoba akanasimo esibonakalayo. Ngenxa yalokho, akekho umuntu useke wabeka amehlo kuNkulunkulu. UNkulunkulu akaxhumani naye noma ubani njengoba Ehlala engasebenzi. Ngakho-ke, kungagonyelwa ukuthi akekho umuntu ophilayo oke wabona uNkulunkulu ngempela. Noma yikuphi ukugomela kwe ukufakaza ngoNkulunkulu kungabhekwa njengamanga. UNkulunkulu akayena ebonakalayo noma ngezwi.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 101,
verse: `<b>(23)	IVangeli likaJohane, isahluko 5, ivesi 38. </b>`,
meaning: `<b>
(5:38) Futhi izwi lakhe alihlali kini, ngoba nina kholwani nguye amthumileyo.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nakuba umdali wokuqala, uMoya oNgcwele, engakwenzi bahlanganyele ngenkuthalo emsebenzini, kunezibopho ezithile ukuthi awe ngaphansi kombuso waKhe. Noma kunjalo, Uyakugwema ngokuqondile isenzo. Kunalokho, uNkulunkulu, iParamatma, wabele izinceku zaKhe enze umsebenzi Wakhe. Lezi zigidi zezinceku zakha ezaKhe ukubusa nokwenza yonke imisebenzi emiselwe Yena. Ngenkathi UNkulunkulu Uqobo Lwakhe uhlala engenzi lutho, izinceku Zakhe zifeza indima ayiyo okufanele ngenze. I-Paramatma, nokho, inomsebenzi obalulekile umsebenzi osuseduze - ukunikezwa kokuhlakanipha kwaphezulu. UNkulunkulu Uqobo Lwakhe odingekayo kulo msebenzi, njengoba izinceku zakhe zingenakuwenza. Umbhalo wokugcina uthi, <strong>&ldquo;UNkulunkulu kufanele afundise ukuhlakanipha kukaNkulunkulu ngoba akekho owazi ukuhlakanipha kukaNkulunkulu ngaphandle kukaNkulunkulu.&rdquo; </strong>Ku uzifihle, uNkulunkulu uyeza ukuzofundisa ukuhlakanipha kukaNkulunkulu. Nakuba Yena ukhuluma ngokucasha, Isiqu Sakhe asaziwa, njengoba kungekho muntu angabona lowo ocashile. Naphezu kokuthi uNkulunkulu edlulisela owakhe ukuhlakanipha, ngokuvamile akubonakali njengamazwi Akhe. Njengoba uNkulunkulu enjalo uhlakaniphe, Uthatha isithunzi esithi '<strong>Bhagavan</strong>' futhi unikeza ukuhlakanipha.

  Ngisho nalapho uNkulunkulu efika mathupha emhlabeni eguqulwe njenge umuntu wokufundisa ukuhlakanipha, Ubikezela futhi ukuthumela indoda ekhethekile obani bangempela bayohlala bengaziwa. &ldquo;Ofikayo kuNkulunkulu uyofundisa ukuhlakanipha kukaNkulunkulu,&rdquo; kusho uNkulunkulu uqobo Lwakhe imibhalo engcwele. Ngakho-ke, wonke umuntu ulindele ukuthi othunywe nguNkulunkulu uyodlulisa ukuhlakanipha kukaNkulunkulu. Ngakho, uNkulunkulu ukuzalwa komuntu kuhlala kugubuzele kubo bonke. Nakuba uNkulunkulu weza emhlabeni njengendoda ngesikhathi seTreta Yuga, akekho owamazi. Phakathi iDvapara Yuga, uNkulunkulu weza njengomuntu futhi wadlulisela Izimfundiso zeBhagavad-Gita, ngisho nokusho ukuthi <strong>&ldquo;NginguNkulunkulu&rdquo; </strong>kuyo iBhagavad-Gita, nokho akekho owamaziyo. Ngokufanayo, nini UNkulunkulu esesimweni somuntu njengoJesu eKali Yuga, akekho owabona Yena, ambangela izinselelo eziningi. Akekho owaqaphela ukuthi Yena wayenguNkulunkulu wangempela. Abanye ababethi bangamakholwa kaNkulunkulu bathi uJesu uyiNdodana yoMuntu, behluleka ukumvuma njengoNkulunkulu. Abanye bathi uJesu uyiNdodana kaNkulunkulu kodwa basawa ukuntula ukububona ubunkulunkulu Bakhe.

  Nakuba uJesu ayenguNkulunkulu esesimweni somuntu, wathi, <strong>&ldquo;Ukwenzile ningakholwa nguye amthumileyo&rdquo; </strong>kuleli vesi ngaphandle kokwembula Ubuyena bangempela. Uveze ukuthi abantu abanalo ukholo ku umuntu othunywe nguNkulunkulu, ethi, &ldquo;Izwi likaNkulunkulu alihlalanga kini.&rdquo; Uma akukho ukukholwa kumuntu othunywe nguNkulunkulu, kungani izwi likaNkulunkulu lenza awuhambisani nabantu? Isizathu silele ekungakholwani isithunywa saphezulu, onguNkulunkulu uqobo Lwakhe kanye nomthwali we ukuhlakanipha. Ngakho-ke, izwi likaNkulunkulu liyehluleka ukugxila kulabo abangenalo ukholo kuye.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 102,
verse: ` <b>(24)	IVangeli likaJohane, isahluko 6, 25, 26, Amavesi 27.</b>`,
meaning: ` <b>
(6:25) Lapho bemthola ngaphesheya komgwaqo echibini, bambuza bathi: “Rabi, ufike nini lapha na?”
<br><br>
(6:26) UJesu waphendula wathi: “Ngiqinisile, ngiqinisile ngithi kini: Ninjalo ningidinga, kungeyisikho ngoba nabona izibonakaliso zami kodwa ngenxa yokuthi ladla izinkwa, ladla ukugcwalisa kwakho.
<br><br>
(6:27) Ningasebenzeli ukudla okonakalayo, kodwa ukudla omi kuze kube-ngukuphila okuphakade, ekuthandayo iNdodana yomuntu ngikunike. Ngokuba uNkulunkulu uYise ubeke okwakhe phezu kwakhe uphawu lokuvunywa.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Leli vesi ligcizelela izinhlobo ezimbili zokudla: Okubolayo ukudla kanye nokudla Okungaboli. Abantu abaningi bafuna ukubhubha ukudla, njengoba kufanekiswa lapho isixuku sisondela kuJesu, simbuza, &ldquo;Ufike nini lapha?&rdquo; UJesu waphendula wathi: <strong>&ldquo;Awuyena ukufuna ukuhlakanipha kukaNkulunkulu; niyangifuna, niyethemba izinkwa.&rdquo;</strong>Wabuye wabaluleka, &ldquo;Ningakhandleki ukudla okonakalayo.&rdquo; Ukudla kwansuku zonke, okudliwayo, okugaywe, futhi yacekelwa phansi emahoreni amathathu, iwela esigabeni se ukudla okonakalayo. Ukugaya, empeleni, kuyinqubo ye ukubhujiswa, lapho konke ukudla okudliwe kuphulwa khona umgudu wokugaya ukudla bese uguqulwa ube yimfucuza, njengokusha izinkuni zibe umlotha.

  Ngokuphambene, ukuhlakanipha umuntu akuthola ngokusebenzisa kwabo izindlebe, ezingena engqondweni yabo ngesimo samagama, kucatshangelwa ukudla okungaboli<strong>. Ukuhlakanipha kukaNkulunkulu kuwukuphela kokudla lokho ayikwazi ukuchithwa. Ukufunda noma ukuzwa ukuhlakanipha kukaNkulunkulu kufana nokudla g ukudla okungaboliyo kwengqondo</strong>. INdodana Yomuntu inikeza lokhu kudla okungenakubhubhiswa, okushiwo yivesi, <strong>&ldquo;Ngokuba uNkulunkulu uBaba ubeke uphawu lwakhe kuye imvume.&rdquo; </strong>&lsquo;Uphawu&rsquo; kusho ukwamukela noma isinqumo. UNkulunkulu, onakho wanquma, wathumela iNdodana Yakhe ezelwe ukuba yabelane ngokuhlakanipha Kwakhe. Igama &lsquo;uphawu lokuvunyelwa&rsquo; evesini lubonisa isinqumo sikaNkulunkulu noma imvume. Ku-Qur'an, kushiwo ukuthi uNkulunkulu akazange embule owakhe ukuhlakanipha kunoma yimuphi umuntu, eqokomisa ukuthi lowo onikeza ukuhlakanipha kukaNkulunkulu akayena umuntu ovamile. UNkulunkulu wakugomela lokho Ukuhlakanipha Kwakhe kwaziwa Nguye kuphela, okusho ukuthi INdodana ezelwe ezayo izokwembula ukuhlakanipha kukaNkulunkulu nguNkulunkulu Ngokwakhe. Inkulumo ethi &ldquo;iNdodana kaNkulunkulu&rdquo; ingase idukise abantu, kodwa lingaqondwa ngokuthi &lsquo;iNdodana&rsquo; okusho &ldquo;ukubonakala kukaNkulunkulu.&rdquo; UNkulunkulu, ekhetha ukungezi ngokuqondile njengoNkulunkulu ukuze akhulume nabantu, ethatha isithombe seNdodana. Le ncazelo ithola ukwesekwa evesini elilandelayo.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 103,
verse: `  <b>(25)	IVangeli likaJohane, isahluko 6, ivesi 32. </b>`,
meaning: ` <b>
(6:32) UJesu wathi kubo: “Ngiqinisile, ngiqinisile ngithi kini: Akunjalo; uMose oninike isinkwa esivela ku-paraloka, kodwa nguBaba oninika isinkwa seqiniso esivela i-paraloka. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Evesini okukhulunywe ngalo, uJesu wathi, <strong>&ldquo;UMose akazange ngikunike isinkwa sokuhlakanipha esivela eParaloka.&rdquo; </strong>Lokhu kuphakamisa imibuzo: Ingabe i-Dharma Shastra efundiswa uMose ingamanga? Ingabe I-Dharma Shastra kaMose ayinakho ukuhlakanipha nama-dharmas? Uma kuthiwani UMose wafundisa akusona isinkwa seqiniso sikaNkulunkulu, kungani sibizwa I-Dharma Shastra kaMose? Le mibuzo iphendula imibuzo ehlukahlukene ukucatshangelwa. Ngakolunye uhlangothi, kungamanga ukusho ukuthi yini UMose wafundisa akuyona iDharma Shastra. Ngakolunye uhlangothi, kungokuvumelana nezwi likaNkulunkulu, kungagonyelwa ukuthi yini UMose wafundisa akuyona iDharma Shastra. Kunembile futhi lokho UMose akazange anikeze isinkwa esingaboli esivela eParaloka. Enjalo kuphakama imibuzo nokungabaza, okwenza kube nesidingo sezimpendulo ezifanele ukuqonda ukuhlakanipha kweqiniso kwaphezulu.

  Umprofethi uMose waziwa kakhulu phakathi kwamaKristu, nokho AmaSulumane amaningi angase angaqapheli ukuthi igama elithi 'Mose' ku IBhayibheli laguqulwa laba &lsquo;uMusa&rsquo; ngaphezu kweminyaka eyi-1400. Kubalulekile uku qaphela ukuthi uMose noMusa ngempela igama elifanayo. Isitatimende sokuthi uMose akazange adlulise i-Dharma Shastra kube yiqiniso noma amanga, wethule ukudideka okuthakazelisayo nge isizathu esinamandla, esingaziwa. Lesi sambulo singabamangaza abanye futhi ubhekane nokungavumelani kwabanye, kodwa iqiniso lakho lihlala likhona ngaphandle kwemibono. Kuyiqiniso ukuthi umprofethi uMose yayikhona eminyakeni eyizinkulungwane ezimbalwa edlule. Cishe izinkulungwane ezinhlanu eminyakeni edlule, umprofethi uMose wabelana ngokuhlakanipha yena enomoya. Umprofethi, ngokwencazelo, ngumuntu ophanayo Ukuhlakanipha kukaNkulunkulu, futhi uMose wazuza lesi sikhundla ngoNkulunkulu imicabango kusukela esemncane. Lapho eneminyaka engu-20, u<strong>Bhagavan</strong>, owa wehlele emhlabeni, walungiselela uMose owokuqala umbhalo waphezulu, owaziwa ngokuthi <strong>&lsquo;iTaurath.&rsquo; </strong>UMose waqhubeka ehlanganyela ukuhlakanipha okukulowo mbhalo.

  Njengoba yayisekelwe ku-dharmas, yaziwa ngokuthi UMose 'Dharma Shastra. UMose washona eneminyaka engu-54. Ngemva kokufa kukaMose, uBhagavan wangena emzimbeni wakhe futhi wahambisa dharmas uMose ayengakaze akhulume ngayo iminyaka eyisishiyagalolunye. Nakuba uBhagavan eshiya isidumbu sikaMose eneminyaka engu-63, leli qiniso kwasala kungaziwa, okwenza abantu bamkholelwe lowo Mprofethi UMose wayesephile iminyaka engu-63 futhi wafundisa i-dharmas ngokwakhe. Nakuba uNkulunkulu anikeza uMose umbhalo waphezulu, wamnikeza angamnikezi ngokuqondile ukuhlakanipha. Ngakho-ke, isitatimende, &ldquo;UMose akanikezwanga isinkwa esivela eParaloka, kuyiqiniso.Ukuhlakanipha okunikezwa ngomzimba kaMose nguNkulunkulu kwaziwa ngokuthi UMose 'Dharma Shastra. Kungakho leli vesi lithi, &ldquo;UBaba kaParaloka, uMoya oNgcwele, wanikeza isinkwa sangempela.&rdquo; KaMose Isikhathi sokuphila sangempela sasiyiminyaka engu-54, futhi akekho owayazi ukuthi uNkulunkulu wandisa ukuphila kukaMose kwaba iminyaka engu-63. Zonke lezi zimfihlakalo kucaciswe embhalweni wami, <strong>uKrishna Musa.</strong>
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 104,
verse: ` <b>(26)	IVangeli likaJohane, isahluko 6, ivesi 46.</b>`,
meaning: `<b>
(6:46) Akakho oke wabona uBaba, kuphela lowo ivela kuNkulunkulu; nguye kuphela obone uBaba.. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ukuqonda leli vesi akuwona umsebenzi oyinselele. Phezu ukufunda iBhagavad-Gita, iBhayibheli, kanye neQur&rsquo;an kweyabo ngokuphelele, kuba sobala ukuthi amavesi kulezi zokugcina zaphezulu imibhalo inezincazelo ezicashile. Amavesi eQuran, ku ikakhulukazi, bamba ukujula okwedlula eminye imibhalo engcwele, okwenza izincazelo zabo zibe nzima kwabaningi. Ngenkathi amavesi ku IBhayibheli lingase libonakale liqondile, iqiniso lawo langempela kaningi ibalekela ukuqonda. Ngakho, uNkulunkulu unikeza ukuqonda okuphelele kwawo wonke amavesi ngathi.

  UNkulunkulu, emelelwa njengoMoya oNgcwele, ukhona kokubili ngaphambili nangemva kokudalwa. UnguNkulunkulu oyinhloko. Ukubukeka kweqiniso noma ubunjalo bukaNkulunkulu buhlala bungaziwa kubantu. Kowamanqamu umbhalo waphezulu, i-Quran, uNkulunkulu oyinhloko ubizwa ngokuthi u-Allah, kanti uNkulunkulu wesibili, u-Atma, ubizwa nangokuthi u-Allah. Ngakho, I-Paramatma ingu-Allah wokuqala, futhi u-Atma ungu-Allah wesibili. Ku umbhalo waphezulu wesibili, iBhayibheli, Paramatma kuyinto eqokwe njengoNkulunkulu, futhi i-Atma iyisikhangiso egqoke njengoBaba. Ikona kubalulekile ukuqaphela ukuthi uMoya oNgcwele unguYise we-Atma, futhi u-Atma unguYise wabantu. I-Quran iqinisekisa lokho kokubili I-Paramatma ne-Atma zingoNkulunkulu, kuyilapho iBhayibheli lihlukanisa omunye njengoNkulunkulu omunye njengoBaba. Kubalulekile uku qonda ukuthi uYise wesintu ngu-Atma, kanye UBaba ka-Atma unguMoya oNgcwele. Leli vesi ligcizelela ukuthi cha Umuntu umbonile uBaba (Atma) futhi akazi lutho nge-Atma imvelo. <strong>Kodwa-ke, u-Atma nguyena kuphela ovela kuyo UNkulunkulu futhi ngenxa yalokho uye wafakaza ngoYise, oNgcwele Umoya. Ngokuphambene, uJeevatma akakaze abone eyakhe Baba, Atma.</strong>
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 105,
verse: `<b>(27)	IVangeli likaJohane, isahluko 7, 37th kanye 38th amavesi.</b>`,
meaning: ` <b>
(7:37) Ngosuku lokugcina nolwedlulele lomkhosi, uJesu wema, wamemeza ngezwi elikhulu, wathi: “Lowo okhona makamyeke; owomile uze kimi, uphuze.
<br><br>
(7:38) Lowo okholwa kimi, njengoba nje umBhalo ushilo, kuyogeleza imifula yamanzi aphilayo phakathi kwabo.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Leli vesi linencazelo ecashile. Njengowomile nje ngokwemvelo umuntu ufuna amanzi, ukuphishekela abawafunayo ukuhlakanipha kufaniswa nokoma. Ivesi lithi<strong>, &ldquo;Noma ubani owomileyo ngokuba ukuhlakanipha kufanele kufike kimi, kucime ukoma kwabo.&rdquo; </strong>Lapho othile eza kuJesu futhi ethola ukuhlakanipha kwaphezulu, kufana nokwanelisa <strong>ukomela kwabo ukuhlakanipha </strong>okuvela kuJesu. Labo abakholelwa kuJesu bathola ukuhlakanipha okuphelele kwaphezulu, baba izinqolobane zokuhlakanipha nokwabelana ngakho nabanye. UJesu wamemezela ukuthi kuyogobhoza imifula yamanzi aphilayo phakathi bona. Kulo mongo, <strong>amanzi aphilayo afanekisela okwaphezulu ukuhlakanipha</strong>, okunikeza i-moksham (inkululeko) kubantu futhi uzigcina zisesimweni esiphakade. Ngakho-ke, kubhekiselwa kukuhlakanipha ukuze njengamanzi aphilayo. Njengoba nje abantu besuthisa ukoma kwabo okungokwenyama ukuphuza amanzi ngemilomo yabo, kufanele ngokufanayo <strong>bondla ingqondo yabo(buddhi) ngokuhlakanipha kwaphezulu ngokulalela ngezindlebe zabo.</strong></div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 106,
verse: `<b>(28)	IVangeli likaJohane, isahluko 8, ivesi 12.</b>`,
meaning: ` <b>
(8:12) UJesu esephinda ekhuluma ebantwini, wathi: “Mina ngiwukukhanya kwezwe. Ongilandelayo uzongilandela ungahambi ebumnyameni, kodwa uyakuba nokukhanya kokuphila."  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UNkulunkulu, owaziwa ngokuthi uMoya oNgcwele, wadala i-Atma ukuze ifeze Ukubusa Kwakhe nokusebenza ngabanye. Wamemezela ukuthi u-Atma ungowakhe wamnika amandla okwenza imisebenzi Yakhe. I-Atma wathola igunya lokuthatha ukuphila kwabantu, ekhipha isahlulelo ngokusekelwe ku-karma yabo kusukela ekuzalweni kwangaphambili, kanye nokwenza lula ukuzalwa kabusha kwabo. Endimeni yejaji, u-Atma wenza ngokuhambisana nge-karma yomuntu ngamunye. Ukuzibandakanya komuntu ku-karma ithonya imicabango yabo, futhi u-Atma, ephendula le karma, idlulisa ukungazi njengoba kufunwa abantu ngabanye. Ngenxa yalokho, kuphelile isikhathi, ama-adharma ayanda emhlabeni.

  UMoya oNgcwele, noma uNkulunkulu, kumele abe sesimweni somuntu eMhlabeni isimo somuntu njenge-Bhagavan ukunqanda ama-adharma nokukhuthaza dharmas lapho ama-adharma evela ngenxa yezithakazelo zomuntu kanye Ukungazi okubangelwa i-Atma. Lapho uNkulunkulu ethatha isithombe sa umuntu, Ubizwa ngeBhagavan. Lesi simo somuntu sisifundisa ngokwaphezulu ukuhlakanipha ngaphandle kokuveza ubuyena Bakhe obungcwele, ezikhathini eziningi ebizwa ngokuthi iNdodana kaNkulunkulu, noNkulunkulu enguYise waKhe. Ngokwalo mbono, kukhona uNkulunkulu oyedwa, umdali, onamadodana amabili-enye njenge-Atma ehlala njalo ngaphakathi abantu kanti omunye uyiNdodana yesikhashana esesimweni somuntu. Nini iNdodana yokuqala (Atma) phakathi kwabantu yakha ama-adharma, iNdodana yesibili yesikhashana, esesimweni somuntu, idlulisela i-dharmas. Ngakho, munye kuphela uNkulunkulu onamadodana amabili. INdodana ngesimo sikaJesu wamemezela, <strong>&ldquo;Mina ngiwukukhanya kwezwe.&rdquo; </strong>Ukuhlakanipha kuguquka kube umlilo wokuhlakanipha (Gnana Shakti), ovuthayo kude ne-karma yomuntu. UJesu, efaka umlilo wokuhlakanipha, nguye ukukhanya kokuhlakanipha. Weza ukufundisa abantu ukuhlakanipha, futhi labo abalandela futhi baqonde ukuhlakanipha Kwakhe ngeke bahlale ukungazi kodwa ngokuhlakanipha. Ngakho, uJesu wathi, &ldquo;Noma ubani ongilandelayo akasoze ahamba ebumnyameni kodwa uyoba nokukhanya kwe impilo.&rdquo; UNkulunkulu kuphela, osesimweni somuntu, ongapha ukukhanya kokuhlakanipha, futhi amise dharmas.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 107,
verse: `<b>(29)	IVangeli likaJohane, isahluko 8, ivesi 14.</b>`,
meaning: `<b>
(8:14) UJesu waphendula wathi: “Noma ngizifakaza ngokwami Ubufakazi bami buqinisile, ngokuba ngiyazi lapho ngafika khona ngisuka lalapho ngiya khona. Kodwa awazi lapho ngivela khona nalapho ngiya khona.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UJesu, ekubonakaleni Kwakhe kwangaphandle, wayefana ne umuntu ojwayelekile ongenazo izici ezihlukile. Njengabantu ngabanye ukuhlala ngaphakathi kwemizimba eyenziwe ngePrakruti, yangaphandle ukubonakala kwazo zonke izidalwa kubonakala kufana. UJesu, futhi, wazethula njengomuntu ojwayelekile. Kukhona a esho phakathi kwabadala ukuthi akekho owaziyo ukuthi hlobo luni lwenyoka uhlala esidulini somuhlwa, udweba ukuhambisana ne imvelo engaqondakali ye-Jeeva ngaphakathi komzimba. Wonke uJeeva ozelwe ingena emzimbeni ivela endaweni ethile, iholwa izinqumo ye-Atma esekelwe ku-karma yayo. Ngemva kokuqeda i-karma futhi ukufa, i-Jeeva ingena emzimbeni omusha ngaphansi kokwahlulelwa I-Atma. Naphezu kokuhlala emzimbeni, iJeeva ihlala ingazi umsuka wako wokuzalwa okusha ngakunye. I-manas (ingqondo) ithi e isitho unesibopho sokukhumbula, kodwa, futhi, uyafa ngamunye ukuphila okudlulayo, okubangela ukulahlekelwa inkumbulo kusukela ekuzalweni kwangaphambili. Ngakho-ke, umuntu, uthi, eneminyaka engu-40, ukhumbula kuphela iminyaka engu-40 yokugcina yokuzalwa kwamanje hhayi eminingi edlule.

  Le nqubo ayisebenzi kubantu kuphela kodwa futhi zonke izidalwa eziphilayo. Nakuba uJesu engase abonakale engumuntu ovamile indoda, kubalulekile ukucabangela ukuthi cyclical efanayo inqubo isebenza Kuye. UJesu wazalelwa kwa-Israyeli, okusho ukuthi Yena yavela kwenye indawo. Kodwa wayeyazi imvelaphi Yakhe, ethi, <strong>&ldquo;Ngiyazi lapho ngivela khona.&rdquo; </strong>Ngokungafani nezejwayelekile abantu abangazi ngokuzalwa kwabo okuzayo lapho befa, UJesu wayeyazi kahle indawo ayeya kuyo ngemva kokufa. Lokhu umehluko omkhulu phakathi kukaJesu nomuntu ojwayelekile omunye ukubuza ngobungqayizivele bukaJesu. Impendulo ethi lo mbuzo uphethe isihluthulelo sokuhlakanipha okungcono kakhulu, okuveza lokho UJesu wayengeyena umuntu ovamile kodwa wazalwa engumuntu oqondile inhloso.

  Umuntu owazalwa enenjongo enqunyelwe ngaphambili ukuzalwa kubizwa ngokuthi "ukuzalwa ngesizathu." Akekho umuntu onalo inhloso enjalo ngaphambi kokuzalwa. Ngokuphambene, uNkulunkulu uzalwa ena- inhloso ethile yokusungula i-dharma Emhlabeni. UNkulunkulu kuphela, futhi hayi noma yimuphi umuntu, onekhono lokusungula i-dharma. uNkulunkulu ihlala ingunaphakade futhi ingaguquki, ayithinteki ngokuzalwa noma ukufa, ukugcina inkumbulo engaguquki. Lapho uNkulunkulu ethatha isimo somuntu Umhlaba ngesimo somuntu ozifihlile, udlulisela izimfundiso dharma, futhi uyahamba, Akatholi ukuzalwa kabusha ngemva kokufa, isiphetho esivamile kubantu abavamile. Ekufeni, imana yomuntu (ingqondo) iyachithwa, kepha uNkulunkulu akafi futhi akazalwa kwenye indawo. Uthatha ukuzifihla okuyingqayizivele njengomuntu, agcwalise Okwakhe inhloso, bese ebuyela emsuka Wakhe. Ngakho, evesini, UJesu wathi, <strong>&ldquo;Ngiyazi lapho ngiya khona,&rdquo; </strong>egcizelela ubukhona bukaNkulunkulu kanye nenjongo yakhe.

  Abantu abanalo ulwazi lokuthi ukuphi noma imvelo kaNkulunkulu. Lapho uNkulunkulu ethatha isimo somuntu, imvelaphi Yakhe ihlala engaziwa. Ngokungafani nokuzalwa komuntu okuvamile, ukuzalwa kukaNkulunkulu kunjalo ezehlukene; Akaphinde azalwe kabusha kwenye indawo ngemva kokushona kwenye indawo. UNkulunkulu okhona yonke indawo, okhona ngisho nasezweni esibelethweni, uguqula isimo Sakhe futhi abonakale ezalwa njengomntwana. Njengoba uNkulunkulu ekhona lapho ezalelwa khona, kuba inselele ukukhomba umsuka Wakhe. Labo abangazi ukuthi uNkulunkulu ukhona abakhona yonke indawo bahlala benganakile ukuthi uJesu wavelaphi. Ngaphezu kwalokho, isiphetho sikaNkulunkulu ngemva kokuthatha okwehlukile ifomu alaziwa. Ngakho, evesini, uJesu wathi, <strong>&ldquo;Anazi ukuthi ngivelaphi nokuthi ngikuphi ehamba,&rdquo; </strong>egcizelela ubukhona bukaNkulunkulu obuyimfihlakalo kanye nokunyakaza.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 108,
verse: `<b>(30)	IVangeli likaJohane, isahluko 8, ivesi 19.</b>`,
meaning: `<b>
(8:19) Khona-ke bambuza, “Uphi uYihlo na? “Anazi mina noma uBaba,” kuphendula uJesu. “Uma beningazi mina, beniyakumazi noBaba.” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ingabe uNkulunkulu ukhona? Uma Ekwenza, unjani? Ukuphi? Uma uyazazi izimpendulo zale mibuzo, uzoqonda ukuthi uBaba neNdodana bangobani. Munye kuphela uNkulunkulu, kodwa thina kufanele bazi lapho iNdodana yavela khona. Amagama 'Baba' kanye &lsquo;INdodana&rsquo; isetshenziswa kaningi eBhayibhelini. <strong>Umuntu kufanele aqonde ukuthi &lsquo;uBaba&rsquo; kusho uNkulunkulu; leli gama lalisetshenziselwa ukubhekisela kuNkulunkulu</strong><strong>eBhayibhelini. Ku-Qur'an, uNkulunkulu ubizwa ngokuthi 'Allah,' futhi IBhagavad-Gita, uNkulunkulu ubizwa ngokuthi &lsquo;iParamatma.&rsquo;</strong>Nakuba lawa mazwi ahlukile, wonke asho uNkulunkulu. Ingqikithi ye UNkulunkulu kufanele abonakale egameni elithi &lsquo;Baba.&rsquo; Lapho uJesu eqhubeka emhlabeni, abaFarisi bambuza ngoYise. UJesu waphendula wathi: <strong>&ldquo;Aningibonanga mina noBaba.&rdquo; </strong>AbaFarisi abazange buza ngoJesu, nakuba ayephambi kwabo. Bona wayefuna ukwazi ngoyise wenyama, engakuqapheli lokho Ubaba kaJesu wayenguNkulunkulu. Bangase bamangale lapho UJesu wakhuluma ngokuqondile ngaYe nangoYise. Bacabanga babebona uJesu mathupha futhi bamcela ukuba athole ngoyise ongaziwa. Khona-ke uJesu wathi: <strong>&ldquo;Anibonanga mina noma uBaba wami.&rdquo; </strong>Kudingeka siqonde incazelo yalokho izwi.

  UYise kaJesu unguMoya oNgcwele. Atma, uMoya oNgcwele INdodana, ikhona kuyo yonke imizimba futhi ilawula ukusebenza kwayo. UMoya oNgcwele, obizwa ngokuthi uBaba, no-Atma, owaziwa ngokuthi Ndodana, bakhona njalo. UMoya oNgcwele, iParamatma, ungunaphakade futhi ukhona kusukela ngaphambi kokudalwa. Atma, uMoya oNgcwele INdodana, ibikhona kuyo yonke imizimba kusukela ngemva kokudalwa.

  Ngaphandle kweNdodana yaphakade, u-Atma, uNkulunkulu (uMoya oNgcwele) unenye iNdodana ebizwa ngokuthi <strong>&lsquo;iNdodana ezelwe yodwa,&rsquo;</strong> yona ngezinye izikhathi ufika emhlabeni. Zikhona ezibalulekile umehluko phakathi kweNdodana ehlala njalo (Atma) kanye ne iNdodana yesikhashana (iNdodana ezelwe yodwa). Ngokwesibonelo, nini I-Atma iza nomzimba womuntu ojwayelekile, umzimba une- ahlukanise i-Jeevatma. Nakuba umzimba wonke ungoka-Atma, futhi i-Atma iyinhloko yomzimba, i-Jeevatma nayo ihlala ne-Atma emzimbeni futhi ucabanga ukuthi umzimba ungowami. Uma okwesikhashana Ndodana, incebi yodwa iNdodana ethandekayo, iza emhlabeni inomzimba, akukho Jeevatma kulowo mzimba. Emzimbeni womuntu ojwayelekile, UNkulunkulu no-Atma bahlukile. I-Atma yenza yonke imisebenzi kulokho umzimba, futhi uNkulunkulu akasebenzi. Kodwa eNdodaneni ezelwe yodwa umzimba, iParamatma (uNkulunkulu) ihlala njenge-Atma futhi yenza imisebenzi kuyo Ifomu le-Atma. Ngoba akukho Jeevatma kozelwe yedwa Umzimba weNdodana, lowo osebenza njengo-Atma naye usebenza njengoJeevatma. Nakuba osemzimbeni weNdodana ezelwe yodwa nguNkulunkulu, Yena uzenza iJeevatma. <strong>Owafika ezifihla ngokuthi iNdodana ezelwe yodwa nguMoya oNgcwele (uNkulunkulu). UNkulunkulu unjalo ukwenza njengoJeevatma</strong>. Kunomehluko omningi phakathi INdodana kaNkulunkulu yaphakade kanye neNdodana yesikhashana.

  Kungashiwo ukuthi abantu abaningi abazi ukuthi uNkulunkulu uneNdodana engunaphakade neNdodana ezelwe yodwa ezayo ngezikhathi ezithile. Ngokuzuza ukuhlakanipha, umuntu angaqonda ubukhona bokuhlakanipha kuka-Atma no-Atma, kodwa ukuqaphela okuwukuphela kwayo iNdodana ezelwe iyinselele. Ukukhomba iNdodana ezelwe yodwa phakathi kwabantu abaningi kunzima. Ngakho-ke, akekho wakhomba iNdodana ezelwe yodwa eyafika eTreta Yuga, Dvapara Yuga, Kali Yuga. Nakuba uJesu kwakunguye yedwa iNdodana kaNkulunkulu ezelwe eKali Yuga, abantu abakwazanga baMqaphele njengeNdodana yesibili kaNkulunkulu. Naphezu Kwakhe isimemezelo sokuba yiNdodana kaNkulunkulu, abantu abakwazanga ukukukhomba Wamfaka ekuthukweni nasekuhlushweni okuningi. Abantu behlulekile ukubona labo abeza eDvapara Yuga naseKali Yuga njengeNdodana kaNkulunkulu, nakuba bathi, &ldquo;Mina nginguye iNdodana kaNkulunkulu.&rdquo; Ngiyangabaza ukuqinisekisa ukuthi lowo ongene eTreta U-Yuga wayeyiNdodana kaNkulunkulu. Ngalolo suku, uNkulunkulu Uqobo Lwakhe wangena uzifihle njengeNdodana futhi wanikeza ukuhlakanipha emhlabeni. Ngisho nakuba Ayaziwa njenge-gnani enkulu futhi efundisa ukuhlakanipha, Ingiyangabaza futhi ukusho ukuthi WayenguBhagavan ngoba Wayenjalo evezwe njengomuntu omubi phakathi kwabantu. Nokho, angesabi ukuthi, <strong>&ldquo;uRavana Brahma uyiNdodana ezelwe yodwa.&rdquo;</strong>

  E-Dvapara Yuga, u-Krishna weza njengo-Bhagavan. Kokubili UBhagavan kanye neNdodana ezelwe yodwa bayafana. Nokho, ngenxa yokuthi uKrishna wayevezwe njengobuqili, abantu abaningi banjalo namanje ababazi ubukhulu Bakhe nanamuhla. Nakuba uNkulunkulu engenile wazifihla njengomuntu futhi wafundisa i-dharmas yaphezulu, abantu abazange gxila ekuhlakanipheni akunikezile; kunalokho, ikakhulukazi wahlolisisa ukuziphatha Kwakhe ngaleso sikhathi. Abambalwa kuphela, ngaphandle izigidi, waqaphela ukuhlakanipha Kwakhe futhi wamemezela ukuthi uKrishna wayenjalo UNkulunkulu, kodwa iningi lakhuluma kabi Ngaye. Labo ababekhona engazi ngokuzalwa kukaKrishna eDvapara Yuga wayithola kuyinselele yokwamukela uJesu njengeNdodana kaNkulunkulu eKali I-Yuga. Ngoba uKrishna noJesu babekulindele lokho abantu bangakwazi ukuhlakanipha ababekufundisa, bobabili bathi, <strong>&ldquo;SingoNkulunkulu,&rdquo;</strong>ngokwengqikithi yamazwi abo, bekholelwa lokho abantu bangakubona ukuhlakanipha kwabo ngokwenza kanjalo. Ngokufanayo, UJesu wathi: <strong>&ldquo;Anazi mina noma uBaba.&rdquo;</strong> ngenhloso yokwenza abantu babone ukuthi uNkulunkulu noJesu yibona okufanayo.

  Labo abathi bazinikele kuNkulunkulu bavame ukukhuluma ngokubhuqa lapho behlangana nabanye abanokuningi ukuhlakanipha kunabo. AbaFarisi bakhuluma loJesu labanye isimo sengqondo esifanayo. Ukwazi ukuthi uJesu wazalwa nguMariya ngaphandle kwe uyise, bambuza bathi: &ldquo;Uphi uyihlo na?&rdquo; UJesu baqonda ukuthi babemklolodela futhi bengaceli kanye ukuzinikela. Waphendula ngempendulo emangazayo, <strong>&ldquo;Uyayenza kabangazi mina loba uBaba.&rdquo;</strong> Labo abaqonda baKhe amazwi ngendlela efanele bayoqonda ukuthi uJesu obonakalayo kanye uNkulunkulu ongabonakali uyefana. UJesu futhi wathi, <strong>&ldquo;Uma ukholwa beningazi mina, beniyakumazi noBaba.&rdquo; </strong>Nokho, kungaba kuthiwa labo abezwa amazwi Akhe abazange baqonde lokho Ayekusho. Ukube bebewuqondisile umlayezo waKhe. babeyobona ukuthi uJesu wayengubani ngalolo suku. Bona ngabe ubonile ukuthi ubengeyena umuntu ojwayelekile. Noma kunjalo Amazwi kaJesu, bamphatha njengokungathi ungumuntu ojwayelekile. Kubonakala sengathi babengazi lutho oluphawulekayo ngoJesu.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 109,
verse: `  <b>(31)	IVangeli likaJohane, isahluko 8, ivesi 21.</b>`,
meaning: ` <b>
(8:21) UJesu waphinda wathi kubo: “Ngiyamuka; futhi niyongifuna, futhi niyofela esonweni senu. Lapho ngiya khona, ningeze nina." </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UJesu wakhuluma amazwi amaningi ukuze atshele abantu Yena uqobo, namagama angenhla ayisibonelo esisodwa. <strong>"Ngiyahamba khatshana, njalo lizangidinga. Lapho ngiya khona, wena angeke eze,&rdquo; </strong>kusho uJesu kubantu. Empeleni, lokhu Ivesi lingase lingabonakali lijulile. Lapho umuntu iya ndawana thize ngaphandle kokwazisa abanye, asazi lapho beye khona, futhi noma sicinga, singase singabikho ngikwazi ukuzithola. Ukushoda kolwazi kusho ukuthi thina abakwazi ukuya lapho beye khona. Ungase uzibuze ukuthi yini ukuhlakanipha kutholakala kulokhu okwenzekayo. Ake sikubheke kusuka elinye i-engeli. Ebusheni bethu, sasivame ukudlala umdlalo othi &lsquo;Isela kanye namaPhoyisa.&rsquo; Kulo mdlalo, isela liyacasha, futhi ngemva kwemizuzwana embalwa imizuzu, amaphoyisa aqala ukucinga ukubamba. Ukuze ubambe isela, amaphoyisa kufanele aye lapho isela lihlala khona ding. Uma amaphoyisa engakwazi ukufinyelela lapho ecashe khona, awakwazi ukuyithola isela ngisho nangemva kokucinga kwenye indawo. Ngolunye usuku, lapho ngineminyaka eyishumi, siwudlalile lo mdlalo. Mina ngangiyisela, abanye babengabo amaphoyisa. Ngaphambi kokuba ngicashe, ngathi, &ldquo;Ngiyahamba, kodwa anikwazi ukungithola mina.&rdquo; Baphendula ngokuzethemba, &ldquo;Sizokuthola emizuzwini eyishumi.&rdquo; Ngabe senginezela, &ldquo;Lapho ngiya khona, ningeze nina,&rdquo; ngacasha kusuka kubo.

  Ngemva kwemizuzu emibili, amaphoyisa aqala ukujaha kodwa akwazi ungangitholi isigamu sehora. Naphezu kokusesha zonke izindawo, abakwazanga ukufinyelela lapho bengicashe khona. Ngalolo suku, ngangihlezi ekamelweni le-pooja endlini yami, futhi ngase ngivale iminyango. Iabanye bedlala njengamaphoyisa basesha yonke indawo, kuhlanganise nabakwa- endlini engangicashe kuyo, kodwa abazange beze epooja ngoba iminyango yayivaliwe, futhi abazange bafune ngaphakathi. Ekuqaleni, ngangicabanga ukuthi akukho okukhethekile kulokhu okungenhla ivesi, njengoba lalifana nomdlalo othi &lsquo;Isela Namaphoyisa.&rsquo; Nokho, Kamuva ngabona ukuthi inkulumo ethi <strong>&ldquo;Uyofela esonweni sakho&rdquo;</strong> encwadini ivesi linencazelo ebalulekile. Nakuba kwakufana nomdlalo, Ngathola ukuthi iqukethe ukuhlakanipha okujulile. Ngase ngizama ekuqondeni okuphelele kwencazelo yalokhu izwi. Nakhu elikushoyo.

  UJesu wabonakala kubo bonke abantu emhlabeni isikhathi esithile, kodwa ngeshwa, akekho owakholwa Kuye. Naphezu kokudlala izimangaliso eziningi ukufakazela ukuthi wayengeyena umuntu ojwayelekile&mdash;okwenza izimpumputhe zibone, izinyonga zihambe, zelapha uchoko, ngisho nokubuyisela abafileyo ekuphileni ukuze babonise Amandla akhe okuthethelela izono&mdash;abantu abakwazanga ukubona iqiniso Lakhe ubukhulu. Ngisho nalabo ababengamazi uJesu ngesikhathi Sakhe ukuphila kwabo kwakuzomfuna kamuva, befuna ukukhululeka kubo ukuhlupheka. Nokho, ngeke kube nenzuzo ekufuneni Naye uma esehambile, njengoba engeke abonakale kunoma ubani. Abantu abafela ezonweni zabo ngeke bathethelelwe nguJesu, njengoba abazi ukuthi wayaphi. Noma ngabe abaphikayo UJesu ngesikhathi sokuphila Kwakhe kamuva uyamamukela njengoNkulunkulu, wabo izono aziyikuthethelelwa. UJesu wayezibikezele zonke lezi zinto abantu kusengaphambili. Lapho uJesu ethi, <strong>&ldquo;Ngiyahamba,&rdquo; </strong>cha omunye wamcela ukuthi ahlale isikhathi eside. Kunalokho, abantu bammemeza ukubethelwa, okuholela ekufeni Kwakhe esiphambanweni.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 110,
verse: `<b>(32)	IVangeli likaJohane, isahluko 8, amavesi 23 kanye 24.</b>`,
meaning: `<b>
(8:23) Kodwa waqhubeka, “Nina ningabaphansi; Nginguye kusuka phezulu. Nina ningabakalumhlaba; Mina angiyena owalokhu umhlaba.
<br><br>
(8:24) Nganitshela ukuthi niyakufela ezonweni zenu; uma u ningakholwa ukuthi mina nginguye, nizofela kini izono.”  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kula mavesi amabili, ivesi 24 libonakala lifana ne Ivesi 21, kodwa ivesi 23 lihlukile. UJesu wanika abantu ithuba lesibili lokubona ukuthi Wayengeyena umuntu ojwayelekile wathi: &ldquo;Nina ningabaphansi; ngivela phezulu. Ungowalokhu umhlaba; mina angisiye owaleli zwe. Leli vesi lihlukaniswe kabili izingxenye: eyokuqala ithi &ldquo;Nina ningabaphansi; ngingowaphezulu,&rdquo; owesibili uthi: &ldquo;Nina ningabalelizwe; Mina angiyena owalokhu emhlabeni.&rdquo; Ngokusekelwe engxenyeni yokuqala yevesi, &ldquo;Nina nivela ngezansi; mina ngingowaphezulu,&rdquo; kube nezinhlobo ezimbili zabantu kusukela ku-Kruta Yuga - abantu abaphansi kanye nabantu abaphezulu. Kunesizathu ngemuva kokuthi la magama amabili - aphansi futhi phezulu - kwaba khona. Bahlukaniswa kanje abantu ezigabeni eziphansi neziphezulu.

  Ubudala bukaKruta Yuga buhlanganisa iminyaka eyi-1,728,000. Ngesikhathi se Eminyakeni eyinkulungwane yokuqala kaKruta Yuga, kwavela izizwe ezimbili phakathi abantu - ama-gnanis (labo abanobuhlakani) nabangenalwazi. Kwakukhona ama-gnani ambalwa kakhulu eMhlabeni ngaleso sikhathi, kuyilapho abangenalwazi babengenakubalwa. Kuleyo yuga, inani labantu emhlabeni babengaba izigidi ezingu-30 kuphela, kanti amaNdiya ayengekho ezingaphezu kuka-300,000. ILanga lehlela eMhlabeni futhi wadlulisela ukuhlakanipha kwaphezulu kumuntu ogama lakhe linguManu. Ababili kuphela noma abantu abathathu bafunda ukuhlakanipha ngokuqondile kuManu, kanye bonke abanye abantu babebahlonipha kakhulu la ma-gnani, befunda ukuhlakanipha kwaphezulu okuvela kubo. Ngalezo zinsuku, abantu babebamba gnanis ngokuhlonishwa okukhulu, okubenza bahlale esihlalweni esiphezulu ngenkathi bona bahlala phansi, belalela ukuhlakanipha. Bekuyi ngokwesiko ukuthi abantu banikeze isihlalo esiphezulu ku-gurus futhi bahlale kuso phansi. Ngokusekelwe kulokhu, uJesu wathi, &ldquo;Nina ningabaphansi; Nginguye kusuka phezulu.&rdquo; Lokhu kusho ukuthi<strong>, &ldquo;Nginguthisha wakho (iGuru) kini konke.&rdquo;</strong>

  Kwakuvamile ukuthi othisha bahlale esihlalweni esiphezulu kuyilapho abantu abafuna ukuhlakanipha behlezi phansi. Othisha ejwayele ukudlulisela kubantu ukuthi bangaphansi kothisha ababengaphezu kwabo. Abafundisi abanikeza okwaphezulu ukuhlakanipha kwaziwa ngokuthi othisha bakaBrahma Vidya. 'Brahma' lisho okukhulu, futhi elithi &lsquo;Brahma Vidya&rsquo; lisho ukufundisa okukhulu. Iothisha abanolwazi lweBrahma Vidya babe ebizwa ngokuthi ama-Brahmins. Ngalezo zinsuku, amaBrahmin ayesho othisha. Kuphela othisha ababili noma abathathu kulo lonke elaseNdiya babebizwa ngokuthi Brahmins. Lawo ma-Brahmin ayejwayele ukuhlukanisa ingxenye esele abantu &lsquo;njengabantu abaphansi.&rsquo; Bonke labo ababentula ukuhlakanipha babenjalo abaqokwe &lsquo;njengabantu abaphansi.&rsquo; Ngalendlela, lonke izwe lalinakho &lsquo;abantu abaphansi.&rsquo; Ngemva kwesikhathi esithile, isimiso sokuhlukaniswa kwezigaba saqala ukusekela kulesi sigaba. Njengoba uhlelo lwezigaba luqala, labo ababe wayazi ukuthi uBrahma Vidya waqala ukuthi, "SingamaBrahmins." Ngokufanayo, labo ababengazi babebhalwe ukuthi &ldquo;Ungaphansi kwethu (Maadiguva vaaru ngesiTelugu). Ngakho, izizwe ezimbili - <strong>engenhla (Eguvavaru ngesiTelugu) kanye nephansi (Diguva</strong><strong> varu in I-Telugu) </strong>- yakhiwe. Nakuba igama elithi &lsquo;phansi (Maa Diguva vaaru)&rsquo; ikhona nanamuhla, abantu bangase bangawuqondi ngokugcwele umlando wayo incazelo. Ngokuhamba kwesikhathi, igama elithi 'Maa diguva vaaru' lashintsha esigabeni sikaMadiga (isigaba esihleliwe), osekubalwa manje njengomuntu ophansi.

  Lapho uhlelo lwezigaba luqala, kwakukhona ezimbili izinhlaka&mdash;amaBrahmin namaMadiga (Isigaba Esihleliwe). Igama elithi &lsquo;Madiga&rsquo; ekuqaleni lalisetshenziselwa ukubhekisela kulabo ababekhona bebhekwa njengabangenalwazi nabantula ukuhlakanipha. Nokho, ngokuhamba kwesikhathi, ngisho naphakathi kwalabo abaswele ukuhlakanipha, izigaba eziningi kwavela, futhi labo abasala bengahlukaniswanga babesaqhubeka ebhalwe ukuthi Madiga. Uma sibheka emuva emlandweni, uMadiga wayengekho ekuqaleni uhlaka kodwa kunalokho igama elinikezwa abangenalwazi abafundisi ababili noma abathathu. Ngokusekelwe kulokhu, abantu abavela kuzo zonke izinhlaka abangenakuhlakanipha bangabizwa ngoMadiga. Abantu bahlukene phakathi izinhlaka ngenxa yomlando ongaziwa. Kuwukungalungi nokungazi ukwenza bhala abantu abasele ngoMadiga. Eminyakeni engaphezu kuka-2 000 edlule, UJesu futhi wasebenzisa igama elithi &lsquo;phezulu&rsquo; ( Eguva varu ) nelithi &lsquo;phansi&rsquo; (Diguva varu). Wathi, <strong>&ldquo;Nina ningabaphansi; ngisuka phezulu,&rdquo;</strong> ebhekise kwabangazi. Kufanele kuqondwe lokho Igama elithi &lsquo;phezulu&rsquo; nelithi &lsquo;phansi&rsquo; asetshenziselwa ukukhombisa ukuthi, &ldquo;I am a gnani, futhi aninalwazi.&rdquo;

  Igama likaJesu lesibili lithi, &ldquo;Nina ningabalelizwe; angisiye owa lo mhlaba.&rdquo; &lsquo;Loka&rsquo; (Umhlaba) ngesiTelugu kusho &lsquo;ukuba nolwazi.&rsquo; Kunezinhlobo ezimbili zabantu ezisuselwa kokuhlangenwe nakho kwazo babe. Labo abanokuhlangenwe nakho bangabomhlaba, nalabo ngaphandle kokuhlangenwe nakho akukona okwaleli zwe. Okuvamile abantu bajabulela konke okuhlangenwe nakho emhlabeni, ngakho bangabo abahlali balo mhlaba. UJesu, ongenakho isipiliyoni, wathi Wayengeyena owaleli zwe. Nakuba Yena ubukeka njengomuntu, akanakho okuhlangenwe nakho njengendoda. Ngisho noma uJesu esemzimbeni womuntu, akayona i-Jeevatma efana abanye. Uma engeyena i-Jeevatma, ayikho i-karma. Ngakho, Akanalo ulwazi olusekelwe ku-karma. I-Paramatma ngokukhethekile wathumela uJesu. Ngamanye amazwi, uMoya oNgcwele wangena uzifihle njengoJesu. Ngokusho kwe-dharma engokomoya, akufanele usho lokho. I-Paramatma idalwe futhi yathumela uJesu ngokukhethekile. Ngakho-ke, uJesu kufanele abizwe ngeNdodana kaMoya oNgcwele. Njengoba UJesu akayona iJeevatma, kungathiwa akanayo okuhlangenwe nakho. Ukube uJesu ubeyiJeevatma, bekungafanele abizwe iNdodana kaMoya oNgcwele. UJeevatma uyiNdodana ka-Atma. I-Atma UBaba unguMoya oNgcwele. Ngakho-ke, i-Jeevatma iba yimzukulu kaMoya oNgcwele. UJesu ubizwa ngokuthi indodana kaNkulunkulu ngoba Uthunywe nguNkulunkulu. UJesu naye wayebizwa ngokusobala ngokuthi iNdodana ezelwe yodwa. U-Atma uyiNdodana kaMoya oNgcwele. Okuodwa iNdodana ezelwe iyiNdodana yesikhashana eyehlela phezu kwe umhlaba oswele. Ngakho-ke, iNdodana yesikhashana iba iNdodana kaMoya oNgcwele njengo-Atma futhi ngeke abe umzukulu njengaye I-Jeevatma. U-Jeevatma uthola ulwazi. Ngakho-ke, uJeevatma, onakho okuhlangenwe nakho, kuvela kulo mhlaba. UJesu, njengo-Atma, ongakwenzi abe nakho, akusilo okwaleli zwe. Ungowase Paraloka.

  UJesu wanika abantu ithuba lesibili lokumazi njengendoda engavamile futhi wacaphuna la mavesi (Johane 8:23; 24). Nokho, abantu abakwazanga ukubona ubukhulu bukaJesu futhi wayeMthatha njengomuntu ojwayelekile. Ngakho-ke, ngeke babe bakhululwe ezonweni zabo ngoJesu noma ngezimfundiso Zakhe. UJesu, iNdodana kaMoya oNgcwele, weza phakathi kwabantu futhi wakhuluma amazwi amaningi kubo azenze Aziwe. Wakuphinda okwesibili lokho labo ababengenakumthola futhi bakholwe Kuye babeyofela ezinhliziyweni zabo izono, njengoba eshilo ekuqaleni kuJohane 8:21. Wanikeza ithuba lesithathu ngokukhuluma amazwi Akhe okugcina. UJesu waphinda amasethi amathathu amavesi ukusiza abantu ukuthi baMbone. Waxwayisa ukuthi labo abangamqapheliyo babengeke bathethelelwe izono zabo. Ake sihlole iqoqo lesithathu lamavesi ukuze sibone ukuthi Yena kusho.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 111,
verse: `<b>(33)	IVangeli likaJohane, isahluko 8, ivesi 24.</b>`,
meaning: `<b>
(8:24) Nganitshela ukuthi niyakufela ezonweni zenu; uma u ningakholwa ukuthi mina nginguye, nizofela kini izono.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuyaziwa ukuthi leli vesi linikeze ithuba lesithathu wazi ukuthi uJesu wayengubani. Kuleli vesi, uJesu watshela umphakathi ngokuqondile Wayengubani. Wathi: <strong>&ldquo;Labo abangakholwa ukuthi nginguye uMoya oNgcwele, futhi uMdali uyofela esonweni sabo.&rdquo; </strong>UJesu Yena uqobo wamemezela ukuthi Wayengubani. Ekuqaleni, Wathi, <strong>&ldquo;Ngizohamba; anikwazi ukuza endaweni engiye khona,&rdquo;</strong> ukunikeza bathole ithuba lokuMqonda. Kweyesibili ivesi, Wathi, <strong>&ldquo;Nina ningabalelizwe ; angisiye owalumhlaba,&rdquo;</strong> ukunikeza imininingwane eyengeziwe ukubasiza baqonde ukuthi Wayengubani. Kungaqondwa ukuthi uJesu unguMoya oNgcwele ovela ku ivesi lesibili. Evesini lesithathu, Wathi, <strong>&ldquo;Owenzayo ningakholwa ukuthi nginguye, akanakuphuma esonweni,&rdquo;</strong> enikeza ukucaca okukhulu. Evesini lesithathu, uJesu wathi, <strong>&ldquo; nginguNkulunkulu.&rdquo; </strong>Naphezu kwalokhu, abantu baqaphela uJesu njengomuntu ovamile umuntu futhi abakwazanga ukubona ukuthi WayenguNkulunkulu. Nokho, abanye bamangala ngamazwi kaJesu. Nakuba abazange bakholwe, bambuza ukuthi Ungubani. UJesu waphendula esebenzisa lamavesi amathathu ( Johane 8:21, 22, 23 ) ukuze abasize baqonde ukuthi Wayengeyena umuntu ojwayelekile. Noma kunjalo, abazange wakubona lokhu futhi wabuza, &ldquo;Ungubani na?&rdquo; UJesu waphendula, <strong>&ldquo;Yini nje Kade ngikutshela kwasekuqaleni.&rdquo;</strong>

  Ngaphezu kwalokho, Wathi, &ldquo;Lowo ongithumileyo uthembekile, futhi lokho engikuzwile kuye ngikutshela umhlaba. Nokho, abantu wayengazi ukuthi wayekhuluma ngoYise (oNgcwele Umoya). Nakuba Asho okuningi, abantu abazange baqaphele uJesu. Abanye babemphatha njengomuntu ojwayelekile, kanti abanye wamphatha kabi kunomuntu ojwayelekile. UJesu washo okuthile okunye ngalabo bantu.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 112,
verse: ` <b>(34)	IVangeli likaJohane, isahluko 8, ivesi 28.</b>`,
meaning: ` <b>
(8:28) Ngakho, uJesu wathi, “Lapho seniyiphakamisile iNdodana koMuntu, khona niyokwazi ukuthi nginguye nokuthi nginguye lutho ngokwami, kodwa ngikhulume lokho uBaba anakho wangifundisa. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kukhona ukudideka okuthile kuleli vesi mayelana amazwi athi, <strong>&ldquo;Uyiphakamisile iNdodana yomuntu.&rdquo; </strong>Omunye angeke qonda umusho. Ukuze uhumushe lesi sisho ngendlela efanele, eyodwa kufanele ifundeke ngokuthi &ldquo;Lapho abantu bephakamisa uJesu phezu kwamakhanda abo&rdquo; esikhundleni sokuthi &ldquo;Lapho usuphakamise uJesu.&rdquo; Abanye bangase babuze, &ldquo;Kungani ingabe abantu bazomphakamisa uJesu phezu kwamakhanda abo?&rdquo; Impendulo ithi ukuthi <strong>uJesu aqondwe ngekhanda </strong>eliphelile umzimba wethu. Lowo oqonda uJesu <strong>ngobuhlakani bakhe</strong><strong>(uBuddhi)</strong> uzokwazi ukuthi uJesu unguMoya oNgcwele. Ngaphezu kwalokho, leli vesi lembula ukuthi ukuhlakanipha kwaphezulu okufundiswa uJesu akusikho okwakhe; kunalokho, Ufundisa njengoba eqondiswa Umoya Oyincwele.

  Esikhundleni sokusho ukuthi abantu kufanele baqonde uJesu ngobhuda ekhanda, ivesi lithi abantu banayo wamphakamisa uJesu. Kuyaziwa ukuthi uJesu uyiParamatma (UMoya oNgcwele) uma umuntu emqonda <strong>ngebuddhi</strong> ku umzimba. Uma nje abantu bengakaqondi ukuthi uJesu unguNkulunkulu, <strong>&ldquo;Izono zabantu azithethelelwa, futhi bayafa isono sabo,&rdquo; </strong>njengoba kushiwo emavesini amathathu adlule. Uma bona qonda njengoba uJesu asho, kuyaziwa ukuthi uJesu unguNkulunkulu. Imfihlo ukuthi uMoya oNgcwele uba sesimweni somuntu ukuze afundise Owakhe ukuhlakanipha kuyembulwa. Lapho kufundwa ukuthi uJesu unguNkulunkulu, abanye bangase bacabange ukuthi uJesu ngokwakhe usho konke ukuhlakanipha lokho UJesu uyakhuluma. Nokho, akunakwenzeka ukusho njengoba abanye abantu cabanga. Isizathu ukuthi emva kokuthi, <strong>&ldquo;Nginguye,&rdquo; </strong>Wakhuluma elinye igama.

  UJesu wathi: <strong>&ldquo;Angenzi lutho ngokwami, kodwa ngikhuluma nje lokho uBaba angifundise khona.&rdquo; </strong>Lokhu kungase kudale umbono wokuthi uBaba noJesu bahlukene.

  Isizathu sokuyiveza ngezindlela ezimbili sisuka ku-iqiniso lokuthi uJesu wayengumuntu. UNkulunkulu, esimweni Sakhe sangempela, akabonakali futhi ihlanganisa amandla. Lapho uNkulunkulu ethatha isimo somuntu, futhi uma Umuntu ngamunye ubona leli qiniso ngobuhlakani (buddhi), bona uzoqonda ukuthi uMoya oNgcwele noJesu bamunye futhi okufanayo. Nokho, lapho uNkulunkulu ethatha isimo somuntu, kuphambene umthetho kamoya ukuze ukuzalwa komuntu kumemezele ngokusobala, &ldquo;NginguNkulunkulu.&rdquo; Ngisho noma umuntu engabona umuntu obonakalayo njengoNkulunkulu, lokhu iqiniso akufanele lembulwe obala <strong>ngokomthetho kamoya. </strong>Ngemva kwalomthetho ongokomoya, uJesu wathi, <strong>&ldquo;Angenzi lutho kimi kodwa nikhulume lokho uBaba angifundisile ngakho,&rdquo; </strong>ukubambelela ezimisweni zomthetho kamoya.

  UJesu wathi: &ldquo;Ngikhuluma lokho uBaba akushilo.&rdquo; Kokubili imishwana &mdash; &ldquo;Angenzi lutho ngokwami&rdquo; nokuthi &ldquo;UNkulunkulu uyakwenza konke'&rdquo; &mdash; kusho into efanayo. Lapho abantu beqaphela ukuthi uJesu unguMoya oNgcwele, bazothethelelwa izono zabo. Ngenkathi kunjalo kuwukuhlakanipha ukuqonda ukuthi uJesu unguMoya oNgcwele, kungokomoya akulungile ukusho ukuthi uMoya oNgcwele nguJesu. Ngakho-ke, uJesu Yena uqobo wathi, <strong>&ldquo;Nize nazi ukuthi nginguNkulunkulu, izona zenu ngingathethelelwa,&rdquo; </strong>futhi &ldquo;<strong>Nginguye,&rdquo; </strong>ukuze abantu benze kanjalo baqonde ukuthi uJesu wayengubani. Ngokomthetho womoya, Yena ekugcineni wathi, &ldquo;Ngenza konke uBaba angitshele kona yenzani.&rdquo; Ngakho-ke, umuntu akufanele acabange ukuthi uJesu wakhuluma kabili izindlela evesini. Nakuba kulotshiwe evesini ukuthi &ldquo;Nginguye UNkulunkulu&rdquo; nelithi &ldquo;Ngenza lokho uNkulunkulu akushoyo,&rdquo; womabili asho okufanayo incazelo. Omunye angase acabange ukuthi uJesu wakhuluma izinto eziphikisanayo uma lokhu kungaqondakali. Umuntu oqonda ukuhlakanipha angakwazi qaphela ukuthi uNkulunkulu uza njengomuntu kodwa akufanele akumemezele lokho umuntu othize nguNkulunkulu. Ngakho-ke, noJesu wathi, &ldquo;Nginguye UNkulunkulu&rdquo; kwelinye igama futhi &ldquo;uBaba wami unguNkulunkulu&rdquo; kwelinye. Zombili zikhona iqiniso. Ngaphezu kwalokho, uJesu washo okulandelayo ku abantu.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 113,
verse: `<b>(35)	IVangeli likaJohane, isahluko 8, ivesi 29.</b>`,
meaning: ` <b>
(8:29) Lowo ongithumileyo unami; Akahambanga mina ngedwa, ngokuba ngenza njalo okuthokozisayo.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Leli vesi kuthiwa libonisa ukuthi uJesu noMoya oNgcwele ziyafana. Ukuze asekele lokhu, uJesu wathi, “Lowo ongithumileyo unami.” Lokhu kusho ukuthi uNkulunkulu owathuma uJesu kuye nokuthi uMoya oNgcwele noJesu bayafana. Nakhu into ebizwa ngokuthi 'Intando' emzimbeni womuntu. UJesu wathi Yena ngaso sonke isikhathi uzokwenza izinto ngokwentando kaNkulunkulu. Kokwehlukile ngendlela, Wathi intando kaNkulunkulu isebenza Kuye. Kuwubufakazi eqinisweni lokuthi uNkulunkulu ukuJesu. UJesu futhi wathi oNgcwele UMoya wayengamshiyanga yedwa. Kunjengokungathi uJesu uthe uNkulunkulu ukhona kanye naYe nokuthi uNkulunkulu kwakunguYe. UJesu ngokwakhe wakhuluma lezi amazwi okumazi njengoNkulunkulu. Nakuba uNkulunkulu weza ‘njengoJesu’ eKali Yuga, abantu babengamazi. Ngakho-ke, kwadingeka ukuba uJesu akhulume la mazwi ukuze abone ukuthi Owakhe ubukhulu. Ngaphandle kwalokho, abantu bebengeke bakuqonde ukuhlakanipha kukaJesu. Lapho uJesu ekhuluma la mavesi, abanye abantu bamkholwa.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 114,
verse: ` <b>(36)IVangeli likaJohane, isahluko 8, 53 kanye no-54 amavesi.</b>`,
meaning: ` <b>
(8:53) Wena umkhulu yini kunobaba wethu u-Abrahama? Yena bafa, kanjalo nabaprofethi. Ucabangani wena ziphi?”
<br><br>
(8:54) UJesu waphendula wathi: “Uma ngizikhazimulisa mina, udumo lwami lusho; lutho. UBaba wami, enithi unguNkulunkulu wenu ongidumisayo. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nakuba uJesu anikeza izincazelo ezinemininingwane abantu ukuze bamqonde, bazabalaza ukubamba ubuyena, ebahola ukuba babuze, “Ningobani na?” Ephendula, uJesu wathi, “Uma ngizikhazimulisa mina, udumo lwami aluyilutho.” Ukuba esekhulume Ngaye izikhathi ezinhlanu, Wabona amandla okuthi amazwi Akhe athathwe njengangamanga ukube Wayenjalo ukuphinda noma ukuchaza kabanzi. Ngakho-ke, uJesu wachaza, “Uma mina sho okunye okwehlukile kulokhu obekwenzeka kuze kube manje, uBaba wami, enithi unguNkulunkulu wenu, uyangikhazimulisa.” Lesi sitatimende sigcizelela okuyisisekelo ubunye phakathi kukaJesu noYise, abantu abathi unguNkulunkulu. Nokho, ngokuhambisana nemithetho engokomoya, umuntu akufanele zisho ngokuqondile ukuthi unguNkulunkulu. Ngakho, uJesu wathi, “NginguNkulunkulu” ekuqaleni ukusiza abantu ukuthi bamqonde. Kamuva, Wacacisa ngokuthi ethi uNkulunkulu unguYise. “Ngoba nginitshele ezimbili izinto ngendlela ehlukile, akufanele udideke. Kumele ngiqonde ngeqiniso,” kusho uJesu, egcizelela ukubaluleka kokuqonda ubunjalo Bakhe ngale kokungaphandle izinkulumo.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 115,
verse: `<b>(37)	IVangeli likaJohane, isahluko 8, ivesi 55. </b>`,
meaning: `<b>
(8:55) Nakuba ningamazi, mina ngiyamazi. Uma ngi ngathi angizange ngibe ngumqambimanga njengani, kodwa ngiyazi Yena futhi ulalele izwi Lakhe.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UJesu wamemezela, “Anazi uNkulunkulu; Ngiyamazi uNkulunkulu,” ekhuluma ngombono wabaningi ababemthatha njengo umuntu ojwayelekile. Isidingo sesitatimende esinjalo saphakama ukuze sicacise Ubuhlobo obuhlukile bukaJesu noNkulunkulu. Abanye babuza ukuthi kanjani UJesu, engumuntu njengabanye, wayengasho ukuthi umazi uNkulunkulu nini abanye abazange. Ukuze siphendule lo mbuzo, singacabanga ngoJesu isimemezelo esiphindaphindiwe, “Nginguye,” emavesini amathathu ahlukene. Ngokwalesi sitatimende, uJesu akanayo iJeevatma emzimbeni Wakhe, nakuba Enesimo somuntu. Kunalokho, UMoya oNgcwele usebenza njenge-Atma yedwa emzimbeni Wakhe, ngenkuthalo ukuzibandakanya kuzo zonke izenzo. Umbono oyiphutha uvela lapho abantu bacabanga ukuthi i-Atma yiJeevatma ebaholela kuyo kholwa ukuthi uJesu kungenzeka ukuthi akamazi uNkulunkulu. Nokho, iqiniso liwukuthi I-Paramatma (uMoya oNgcwele) uqobo uhlala emzimbeni kaJesu, benza uNkulunkulu aziwe kuYe. Njengoba uMoya oNgcwele ungu ukwazi ngaphakathi kuJesu, asikho isidingo sokuhlukanisa ukwazi; UJesu ngokwemvelo unoNkulunkulu njengokwazi Kwakhe. Ngokuphambene, abantu abajwayelekile banengqondo (manas) njenge emizimbeni yabo kodwa bentula ukwazi kungaba Atma noma Paramatma. Ukushoda kweParamatma ukwazi kuyisizathu esenza abantu bangamazi uNkulunkulu, kanti uJesu, enoNkulunkulu njengokwazi Kwakhe, ngokwemvelo uyamazi uNkulunkulu.

  Ukube uJesu ubengagomela ngokuthi, “Angimazi uNkulunkulu,” bekuyoba njalo kusikisela ukuntula ukwazi kukaNkulunkulu Kuye, okufana nokujwayelekile abantu. Inkulumo enjalo ingafana namanga. Ngakho-ke, uJesu wathi, “Uma bengithi angimazi uNkulunkulu, bengiyakumazi ube ngumqambimanga njengawe.” Ubungqayizivele bukhona eqinisweni lokuthi oNgcwele Umoya uwukuphela komuntu ohlala emzimbeni kaJesu, ususa ubukhona bemiphefumulo emibili - i-Atma, enesibopho sezenzo, kanye ne-Jeevatma, ukuze uthole okuhlangenwe nakho. Emzimbeni kaJesu, lapho kuphela UMoya oNgcwele uhlala, wonke amazwi ashiwoyo asuka koNgcwele Umoya. Ngakho, lapho uJesu ethi, “Ngiyamazi.  niyamazi, futhi ngiyaligcina izwi Lakhe,” la mazwi aphuma kuwo uMoya oNgcwele, naphezu kokuthi uJesu ekhuluma ngendlela efuze bonke abanye. Naphezu kokubukeka Kwakhe kwangaphandle njengomuntu ojwayelekile umuntu, kwakungekho isici esasingaziwa Kuye. Umfanekiso we lolu lwazi olujulile lwembuleka lapho uJesu ekhuluma ngalo u-Abrahama , umuntu owashona kudala, evusa ukumangala futhi ephakamisa umbuzo kulabo abaseduze Naye.

</div></div>

</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 116,
verse: ` <b>(38)	IVangeli likaJohane, isahluko 8, 57th kanye 58th amavesi.</b>`,
meaning: `<b>
(8:57) “Awukabi naminyaka engamashumi amahlanu,” besho kubo Wathi, “Umbonile u-Abrahama!”
<br><br>
(8:58) “Ngiqinisile ngiqinisile ngithi kini,” kuphendula uJesu, “ngaphambili U-Abrahama wazalwa, mina nginguye!” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho uJesu esho la mazwi, wayesesondele Uneminyaka engama-32 ubudala, esezongena onyakeni Wakhe wama-33. Abrahama, umuntu ongokomlando, owaphila emakhulwini eminyaka ngaphambi kukaJesu, njengaku-a ukhokho kubantu besikhathi sikaJesu. Lapho uJesu kubhekiselwa ku-Abrahama, amaJuda ayekhona abuza ukuthi Yena kanjani wayengakhuluma ngomuntu osekunesikhathi eside amandulele, owayekhona wazalwa futhi wafa enkathini ehlukile. Ephendula, uJesu wenza Inkulumo eyindida, &ldquo;Ngaphambi kokuzalwa kuka-Abrahama, mina ngikhona.&rdquo; Lokhu ukugomela kwabonakala kuyinkohliso kulabo abaseduze Naye, kunikezwe umehluko ocacile wesizukulwane phakathi kukaJesu no-Abrahama. Noma kunjalo, lokho uJesu akusho kwakuyiqiniso eliphelele, noma ngabe kwakubonakala kuyindida kubantu besikhathi Sakhe.

  Ake sihlole iqiniso ngemuva kwalesi sitatimende. uJesu' umzimba wenyama wazalwa cishe eminyakeni engama-32 edlule. Nokho, uMoya oNgcwele kuphela ohlala emzimbeni Wakhe, hhayi iJeevatma. Uma UJeevatma wayekhona, uJesu wayengeke abe nezinkumbulo ukuzalwa kwangaphambilini, njengoba i-Jeevatma ingagcini izinkumbulo ezinjalo. Ku Ngokuphambene, iParamatma (uMphefumulo Ophakeme) ikhona encwadini kaJesu. umzimba futhi ungunaphakade. Ikhona kusukela ngaphambi kokudalwa indawo yonke futhi ungumdali wazo zonke izinto eziphilayo, kuhlanganise u-Abrahama. U-Abrahama, njenganoma yimuphi omunye umuntu, wazalwa, waphila, futhi wafa, noMoya oNgcwele njengofakazi. Ngenkathi u-Atma wanika u-Abrahama ukuphila, uNkulunkulu (Paramatma) wabona konke uhambo. <strong>UNkulunkulu ungufakazi omkhulu, u-Atma ungumenzi, futhi Jeevatma uhlangabezana nokuphila</strong>. Nakuba u-Abrahama azalwa nge-Atma, uNkulunkulu, njengofakazi omkhulu, wazi konke ngo-Abrahama. UParamatma uyazi ukuthi u-Abrahama kangaki wazalwa esikhathini esidlule nokuthi uzozalwa kangaki ku esizayo. Ngakho, lapho uJesu ethi, &ldquo;Ngaphambi kokuba u-Abrahama azalwe, Nginguye,&rdquo; Wabhekisela ebuyena njengeParamatma yaphakade eyathi yayikhona kusukela ngaphambi kokuzalwa kuka-Abrahama futhi izoqhubeka ikhona zikhona emva kokufa Kwakhe. Le nkulumo igcizelela ukuthi uJesu akaphelelwa yisikhathi ubukhona obungaphezu kwemikhawulo yokuzalwa nokufa.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 117,
verse: `<b>(39)	IVangeli likaJohane, isahluko 9, ivesi 39.</b>`,
meaning: ` <b>
(9:39) UJesu wathi: “Ngize ukwahlulela kulokhu; umhlaba, ukuze izimpumputhe zibone, nababonayo babone ube yizimpumputhe.”   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho abanye abantu besola uJesu ngokuthi uyisoni, ba Umuntu ogama lakhe lalisusiwe uJesu wezwa amazwi abo futhi baphendule ngolwazi olulandelayo.

  ( Johane 9:25-38 ) Waphendula wathi: <strong>&ldquo;Ukuthi uyisoni noma hayi, angazi. Yinye into engiyaziyo. Ngangingaboni kodwa manje Ngiyabona!"</strong>. Base bembuza, bathi: <strong>&ldquo;Wenzeni kuwe na? Kanjani Wavula amehlo akho na?&rdquo;</strong> Waphendula wathi: <strong>&ldquo;Nginitshelile; kakade futhi anilalelanga. Kungani ufuna ukuyizwa</strong><strong>futhi? Niyafuna ukuba ngabafundi Bakhe nani na?&rdquo; </strong>Bese bethi wamthuka wathi: <strong>&ldquo;Wena ungumfundi walo muntu! Singabafundi bakaMose! Siyazi ukuthi uNkulunkulu wakhuluma naye UMose, kodwa lomfo, asazi nalapho Akhona kwavela.&rdquo;</strong>Indoda yaphendula yathi, <strong>&ldquo;Manje kuyamangaza lokho! Anazi lapho avela khona, kodwa yena wavula eyami amehlo. Siyazi ukuthi uNkulunkulu akazilaleli izoni. Yena ulalela umuntu owesaba uNkulunkulu owenza intando yaKhe. Akekho onayo owake wezwa ngokuvula amehlo omuntu owazalwa eyimpumputhe. Uma lokhu umuntu ubengaveli kuNkulunkulu, ubengenze lutho.&rdquo; </strong>Kulokhu waphendula, <strong>&ldquo;Wacwile esonweni ekuzalweni kwakho; unjani wena sifundise!&rdquo; </strong>Base bemkhiphela ngaphandle. UJesu wezwa ukuthi babenakho wamkhiphela ngaphandle, futhi lapho uJesu emthola, wathi<strong>: &ldquo;Yenza uyakholwa eNdodaneni yomuntu na? &ldquo;Ubani, mnumzane?&rdquo; </strong>indoda kubuza. <strong>&ldquo;Ngitshele ukuze ngikholwe kuye.&rdquo; </strong>UJesu wathi, <strong>&ldquo;Senimbonile manje; eqinisweni, Nguye okhulumayo nawe." </strong>Wayesethi lowo muntu: <strong>&ldquo;Nkosi, ngiyakholwa,&rdquo; </strong>wayesethi baMkhonza. Ngemva kwezenzakalo ezazisanda kwenzeka, uJesu wathi: <strong>&ldquo;Ngizele ukwahlulela kuleli zwe, ukuze abangcwele izimpumputhe ziyobona, nababonayo bayoba yizimpumputhe.&rdquo; </strong>Lokhu isitatimende singaqondwa uma kubhekwa izehlakalo ezedlule.

  Injongo yamazwi kaJesu kwakuwukudlulisela ukuthi<strong> labo abanokholo kuNkulunkulu bangangibona</strong>, ngisho noma bengibona angazi ukuthi ungubani. Labo abangakholelwa kuNkulunkulu bangase bahlanganyele noJesu nsuku zonke futhi babone umzimba Wakhe wenyama, kodwa bona awukwazi ukuMbona. Ngakho-ke, uJesu wathi Wangena umhlaba ukwenza abangakholwa bangazi ukuthi unguNkulunkulu. Noma kunjalo UNkulunkulu ethatha isimo somuntu futhi emi eduze kwabangakholwa, abakwazi ukubona iNdodana kaNkulunkulu ngenxa yokungazi kwabo ubumpumputhe. Lobu bumpumputhe wuhlobo lokungazi oluvimbayo ekwazini uNkulunkulu, ngisho nalapho ebonakala engumuntu ifomu. Lapho uJesu ethi <strong>umuntu ozinikele obona okukaNkulunkulu enyameni (iNdodana kaNkulunkulu) angase angamboni esekelwe ekubukekeni kwangaphandle, kodwa esikhundleni salokho, </strong>ngokusebenzisa into abanye abantu ababemzungezile babuza ukuthi bakhona yini angaboni futhi. UJesu wabaphendula kanje.
</div></div>

</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 118,
verse: `<b>(40)	IVangeli likaJohane, isahluko 9, ivesi 41.</b>`,
meaning: `<b>
(9:41) UJesu wathi: “Uma beniyizimpumputhe, ngabe anikho unecala lesono; kodwa manje njengoba uthi uyabona, yakho icala lihlala likhona.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Evesini 39, uJesu wachaza umehluko phakathi abanokholo nabangaphandle. Wathi impumputhe umuntu onokholo olungcwele wayekwazi ukumbona, kuyilapho abangakholwa babekwazi bambone ngokwenyama kodwa abakwazanga ukubona ubuyena bangempela. Kwe Evesini lama-41, uJesu waqhubeka ehlolisisa ukuziphatha kwalabo ukusebenza <strong>ngombono wezwe</strong>. Abantu abane-a Izingqondo zezwe zimemezela ukuthi, "Ngiyabona," zichaza ukuthi ziyini izenzo zabo futhi ngenxa yalokho baqongelela i-karma ngezenzo zabo. UNkulunkulu wanika abantu ukubona bayakuqonda ukuhlakanipha Kwakhe, nokho akusibo bonke abasebenzisa okwabo umbono wokubona uNkulunkulu. Abanye bahlala bezimpumputhe ngokomoya naphezu kwalokho ukuba namehlo enyama. Mayelana nezindaba zomhlaba, zonke umuntu ngamunye empeleni uyimpumputhe. Iqiniso alikho muntu uzenzela umathanda emisebenzini yezwe. Akekho onayo ukubona noma ukuzwa. Naphezu kokuntula kwabo ngokwemvelo, abantu bathi, &ldquo;Nginguye ababonayo,&rdquo; beqamba amanga becabanga ukuthi bayabona futhi ngenxa yalokho bazitholele isono ngezenzo zabo. Nakuba abantu benjalo abayizimpumputhe ngokomoya, baqongelela isono lapho benza iphutha bakholwe ukuthi bayakwazi ukubona. UJesu wakugcizelela lokho ubumpumputhe bomuntu obungokomoya kanye nokuvuma <strong>iqiniso</strong> lokuthi bengaboni lutho olubakhulula esonweni. Empeleni, ukuqaphela ubumpumputhe bomuntu obungokomoya kuvimbela ukunqwabelana kwesono ezindabeni zezwe.

  Labo abangenalo ukuhlakanipha kwaphezulu abakwazi ukuntula kwabo ukubonwa ezindabeni zezwe. Ukungakwazi kwabo ukuqonda Amazwi kaJesu avela ekungazini kwabo uNkulunkulu abaphakele ukubona kuphela ukuqonda izindaba eziphathelene Naye. Ukuze ubambe ingqikithi yaleli vesi, iJeeva (umphefumulo) womuntu ngamunye kufanele kuqala bona ukuthi bayizimpumputhe noma benokuqondisisa umzimba. Eqinisweni, iJeeva emzimbeni wawo wonke umuntu iyimpumputhe ngokuphelele kuzo zonke izici. UJeeva ngamunye ukholelwa ngephutha ukuthi umzimba kungokwabo nokuthi bangabenzi bazo zonke izenzo ku umzimba. Kodwa-ke, iJeevatma ayinayo i-ejensi ezimele umzimba; I-<strong>Atma</strong> ingumnikazi nomlawuli wangempela. Atma njalo isebenza ngaphakathi emzimbeni, futhi, empeleni, i-Jeeva ayisebenzi noma yimiphi imisebenzi emzimbeni. Ababoni, bengezwa, futhi bagcwele ukusebenza, i-Jeeva iyimpumputhe, isithulu, futhi ikhubazekile ngayo yonke imiqondo. Ibekwe eduze kwe-<strong>buddhi </strong>(ubuhlakani) emzimbeni, u-Jeeva uyaqaphela ulwazi olufinyelela ekuhlakanipheni, kodwa UJeeva akakwazi ngokuzimela lutho. Naphezu kokuntula okuqondile ulwazi, uJeeva ukholelwa ngephutha ukuthi unalo mathupha wafakaza konke. Nakuba i-Atma ingamandla asebenzayo ku-umzimba, u-Jeeva ubeka ngokungalungile zonke izenzo kuyena. Lapho Jeeva ngamanga uthi unesibopho ngesenzo, kufanele sibekezelele imiphumela ye-karmic ehambisana naleso senzo.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 119,
verse: `<b>(41)	IVangeli likaJohane, isahluko 10, ivesi 18.</b>`,
meaning: `<b>
(10:18) Akakho osusa ukuphila kimi, kepha mina ngikubeka phansi ngokuthanda kwami. Nginegunya lokuyibeka futhi igunya lokulithatha futhi. Lo myalo ngawuthola evela kuBaba. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Akekho owaziyo ukuthi umuntu ojwayelekile uzoshiya nini lokhu ukuphila. Uma umuntu esefile, ngeke abuye. Lokhu kubonakala ku konke ukufa. I-Jeeva nayo iphuma emzimbeni ekufeni. Nokho, abantu abaningi abaqapheli ukuthi <strong>iJeeva ihlukene emandleni okuphila kumuntu</strong>. Abantu abaningi bacabanga ukuthi uJeeva namandla okuphila ayafana. Kodwa evesini kuthiwa, <strong>&ldquo;Cha umuntu uthatha ukuphila kimi,&rdquo;</strong> okubonisa ukuthi uJesu uhlukile, namandla akhe ahlukile. Nakuba wonke umuntu enempilo yakhe amandla emzimbeni wabo, njengoJesu, abakwazi ukuwabeka eceleni noma ukuwathatha phezulu futhi. Emzimbeni kunezitho eziningi zangaphakathi, ukuphila, i-buddhi, ne-manas. Noma yini engaphakathi emzimbeni ingaphansi ukulawula i-Atma, hhayi ngaphansi kokulawula komuntu. Ngakho, Atma enquma ukuthi abeke eceleni ukuphila komuntu noma akuthumele kuphi I-Atma ifisa, njengoba kungumsebenzi wayo. U<strong>Jeeva</strong>akahlobene nempilo amandla emzimbeni wabo, kepha u-<strong>Atma </strong>unobudlelwano nempilo amandla emzimbeni.

  UJesu akayona iJeeva evamile, kodwa kunalokho Ungu-Atma. Njengoba kanjalo, unegunya lokubeka eceleni ukuphila Kwakhe, futhi akekho ongakwenza lisuse kuYe. Lokhu kusho ukuthi <strong>uJesu akafi izandla zomunye umuntu</strong>; uma Efa, Wayengakhetha ukulala eceleni kwempilo Yakhe. U-Atma kuphela onamandla okubeka impilo eceleni futhi bese uyibuyisela lapho uthanda. UMoya oNgcwele wanika uJesu amandla igunya lokwenza lokhu, njengoba uJesu uqobo asho, <strong>&ldquo;Akakho othathayo ukuphila kimi, kodwa ngikudela ngokwami. ngine- igunya lokuyibeka phansi, futhi iyithathe futhi. Lokhu umyalo ngawamukela kuBaba.&rdquo; </strong>Njengoba kwakubikezelwe, uJesu wenza ukuphila Kwakhe (i-prana noma ukuphefumula) kufihlwe emzimbeni Wakhe ngenkathi Esekhona ebethelwe esiphambanweni, ebonakala efile kwabaseduze kwakhe. Nokho Yena uvele ephila ngeSonto ekuseni, esethathile emuva Kwakhe ukuphila. Lokhu kubonisa ukuthi uJesu, engu-Atma, unamandla ukubeka phansi ukuphila kwaKhe futhi abuye aphile emzimbeni ofanayo, futhi leligunya walinikwa nguYise, oNgcwele Umoya. Ukwengeza, i-Atma inegunya lokuthatha izimpilo zabanye futhi uzithumele ukuphindukuzalwa.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 120,
verse: ` <b>(42)	IVangeli likaJohane, isahluko 10, ivesi 30.</b>`,
meaning: ` <b>
(10:30) Mina noBaba simunye.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  U-Atma unguBaba weJeeva, futhi ngokuhambisanayo, I-Paramatma inesibopho sokudalwa kwe-Atma. Ngakho-ke, U-Atma futhi unguBaba wabantu, kuyilapho iParamatma inguye uBaba ka-Atma. Njengoba uJesu eyi-Atma, uyiNdodana kaNkulunkulu. Uma <strong>indodana iqaphelisisa uyise</strong>, kusho a isimo sokuhlangana phakathi kwendodana noyise. Lena yi-Ingqikithi yamazwi kaJesu, <strong>&ldquo;Mina noBaba wami simunye,&rdquo; </strong>njengoba Yena waqondisa ukugxila Kwakhe kuyise, uMoya oNgcwele.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 121,
verse: ` <b>(43)	IVangeli likaJohane, isahluko 11, ivesi 25.</b>`,
meaning: ` <b>
(11:25) UJesu wathi kuye: “Mina ngingukuvuka nokuvuka; ukuphila. okholwa yimi uyakuphila, nokho bayafa.” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kulo mongo, &lsquo;uvuko&rsquo; luyinkomba yokuzalwa, kuyilapho 'impilo' isho ukukhululeka (moksham), okusho ukukhululeka ku- umjikelezo wokuzalwa kabusha. Njengoba kokubili ukuzalwa kanye ne-moksham kuhlobene Atma, uJesu wathi, &ldquo;Lowo okholwa kimi ngeke abe khona azalwe kabusha ngemva kokufa kodwa azothola i-<strong>moksham</strong>.&rdquo;
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 122,
verse: `<b>(44)	IVangeli likaJohane, isahluko 11, ivesi 26.</b>`,
meaning: `<b>
(11:26) Lowo ophila ngokukholwa kimi kasoze afa naphakade.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lowo othole i-moksham uzobhekana nakho ukuphila okuphakade futhi ungaphinde ubhekane nokufa. Ngakho-ke, uJesu wamemezela, “Wonke umuntu okholwa kuNkulunkulu uyozuza moksham futhi ungaphinde ufe.”
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 123,
verse: `<b>(45)	IVangeli likaJohane, isahluko 12, ivesi 25.</b>`,
meaning: `<b>
(12:25) Noma ubani othanda ukuphila kwakhe uyolahlekelwa yikho, kuyilapho noma ubani ozonda ukuphila kwakhe kuleli zwe uyokugcina ukuze uthole ukuphila okuphakade.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Amazwi kaJesu athi: “Lowo othanda ukuphila kwakhe uyolahlekelwa yona,” ingachazwa ngale ndlela: Abantu (Jeeva) bafuna ukuphila ukuze emhlabeni, nalabo abanamathela emhlabeni wabo ukuphila kuyolahlekelwa nakanjani njengoba bengakwazi ukuphila phakade. Impilo yomuntu incike ekugelezeni kwePrana (amandla okuphila) emandleni abo umzimba, futhi uma sebefile, ukuphefumula kwabo kunqamuka unomphela. Lapho umoya wokugcina uphuma emzimbeni futhi uhlangana nengaphandle umoya, awusoze wabuya. Lapho umuntu ephuma kuqala ukuzalwa okwesibili kwabo, bathola umoya omusha (ukuphila), kodwa endala ayibuyi. Ngakho-ke, labo ababeka phambili zabo ukuphila kwasemhlabeni nokubambelela kukho kuyogcina kulahlekelwe yikho. Ngaphandle kwalokhu ngokuqinisekile, abantu bathanda ukuphila kwabo ngokwemvelo ngaphezu kwanoma yini okunye futhi bafune ukwandisa isikhathi sabo emhlabeni.

  Umuntu ofisa i-moksham futhi ongafisi abaphila kuleli zwe bazonda ukuphila kwabo siqu, okubonisa ukuntula isithakazelo ezindabeni zomhlaba. Umuntu onjalo uyawuyeka umjikelezo wokuzalwa futhi uthole ukuphila okuphakade. Lokhu kuphila kukhululekile ekufeni, futhi umuntu oyitholayo uzoyivikela. Ngenkathi labo abazuzayo i-moksham ayinayo impilo ekhethekile efana neye- umuntu ojwayelekile, igama elithi ‘ukuphila okuphakade’ lisetshenziselwa ukusisiza baqonde umqondo. Kubalulekile ukuqaphela ukuthi noma ubani ozuza e-moksham uyohlala esesimweni saphakade, ngaphandle kokuzalwa noma ukufa.

</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 124,
verse: `<b>(46)	IVangeli likaJohane, isahluko 12, ivesi 40.</b>`,
meaning: `<b>
(12:40) Uye waphuphuthekisa amehlo abo futhi wawenza lukhuni izinhliziyo, ukuze bangaboni ngamehlo abo, noma baqonde ngezinhliziyo zabo, futhi bangaphenduki—futhi bengingathanda balaphe. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho uNkulunkulu efika njengomuntu futhi watshela abantu ukuthi ukuhlakanipha ababekudinga, u-Atma, uNkulunkulu enyameni, waphuphuthekisa amehlo abo futhi bazenza lukhuni izinhliziyo zabo ukuze bangaboni noma baqonde ngezinhliziyo zabo noma balahle i-karma. I-Karma yiyona imbangela yokuhlupheka kwabo. Kuleli vesi, yini ebalulekile ukuphawula ukuthi i-Atma, eyadalwa nguMoya oNgcwele, isemzimbeni wawo wonke umuntu, egijima wonke umuntu. Nakuba u-Atma eyiNdodana kaMoya oNgcwele, uMoya oNgcwele, uMdali, uzalwa engumuntu ukuze adlulisele ukuhlakanipha. Nakuba ozelwe enguMoya oNgcwele, ubizwa ngokuthi iNdodana kaNkulunkulu esikhundleni sikaNkulunkulu. Ngokusho kwalokhu, i-Atma, esemzimbeni, iba yiNdodana kaMoya oNgcwele. Ukuzalwa kukaMoya oNgcwele njengomuntu ubizwa nangokuthi iNdodana kaMoya oNgcwele. I-Atma emzimbeni uphuphuthekisa amehlo omuntu ongenalwazi futhi uqinise awo inhliziyo ukuze bangaqondi amazwi eNdodana kaNkulunkulu futhi abakwazi ukususa i-karma yabo.

  UMoya oNgcwele, uMdali, wadala indodana u-Atma kanye wakubeka emzimbeni womuntu. Ngaphezu kwalokho, uMoya oNgcwele wadala enye iNdodana esesimweni somuntu ukuze idlulisele ukuhlakanipha kulabo ababengazi. Ngenkathi i-Atma ngaphakathi komzimba womuntu ihlala njalo okwamanje, ukuzalwa komuntu kwe-Atma kubonakala kuphela emhlabeni ngezikhathi ezithile ukufundisa ukuhlakanipha. Ngisho nalapho umuntu Ukuzalwa kwe-Atma kunikeza ukuhlakanipha kubantu abanjalo abangathandi futhi banomona ngoMoya oNgcwele, i-Atma ngaphakathi umzimba udala ukuthi ubuhlakani babo (buddhi) bungakwazi ukuqonde. Kodwa-ke, uma umuntu ene-ukusimisela kanye nentshisekelo kuMoya oNgcwele, i-Atma engaphakathi komzimba ibenza baqonde amazwi omuntu ukuzalwa kwe-Atma. Umuntu kufanele abone kokubili i-Atma ngaphakathi umzimba kanye neNdodana yesibili, ifakwe isimo somuntu, ukuze ukuqonda ngempela ukuhlakanipha kukaMoya oNgcwele.

</div></div>
  </span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 125,
verse: ` <b>(47)	IVangeli likaJohane, isahluko 12, 47 kanye 48 amavesi.</b>`,
meaning: ` <b>
(12:47) Uma umuntu ezwa amazwi ami kodwa angawagcini bona, angimahluleli lowo muntu. Ngoba angizange ngize ahlulele umhlaba, kodwa ukusindisa umhlaba.
<br><br>
(12:48) Kukhona umahluleli walowo ongalayo futhi akawemukeli amazwi ami; wona kanye amazwi enginawo okhulunyiweyo uyobahlulela ngosuku lokugcina. `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kungashiwo ukuthi owakhuluma la mazwi nguye U-Atma osesimweni somuntu. Uma noma ubani ezwa kodwa badebeselela ukuqonda ukuhlakanipha okunikezwa nguNkulunkulu lapho Efika esesimweni somuntu, i-Atma esesimweni somuntu yenza bangahluleli ukuphila kwabo okulandelayo ngokusekelwe esonweni nasepunya ngemva kokufa. U-Atma, owafika njengomuntu ezofundisa ukuhlakanipha, akazange afike ukwahlulela impilo elandelayo yabantu. UNkulunkulu (Atma) weza njengomuntu ukuze embule Ukuhlakanipha kwakhe kubantu futhi abasindise. Omunye uyahlulela impilo eyalandela yomuntu ongawalaleli amazwi ye-Atma esesimweni somuntu futhi ayiMvumi njenge enkulu. Umuntu kufanele azi ukuthi ijaji elinjalo ngu-Atma, okhona njalo ekhona emzimbeni. I-Atma emzimbeni womuntu inquma ukuzalwa okulandelayo ngosuku lokufa ngokusekelwe ekuhlakanipheni inikezwa i-Atma, esesimweni somuntu. <strong>Umuntu akakwazi bazi uMoya oNgcwele ngaphandle uma beqonda umsebenzi ka i-Atma emzimbeni kanye ne-Atma (Bhagavan), ezayo ngesimo somuntu.</strong>
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 126,
verse: ` <b>(48)	IVangeli likaJohane, isahluko 12, 49 kanye 50 amavesi.</b>`,
meaning: ` <b>
(12:49) Ngokuba angikhulumanga ngokwami, kodwa uBaba ongithumileyo wangilaya ukuthi ngikhulume konke engilakho kukhulunywa.
<br><br>
(12:50) Ngiyazi ukuthi umyalo wakhe uholela ekuphileni okuphakade. Ngakho-ke, noma yini engiyishoyo yilokho uBaba angitshele khona ukusho. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Umuntu kufanele aqonde ukuthi i-<strong>Atma (Bhagavan), </strong>ngubani weza njengomuntu, wakhuluma lamazwi. Jesu, Nkulunkulu enhlitiyweni isimo somuntu, washo lesi sitatimende. Noma nini uNkulunkulu esesimweni somuntu, konke ukuhlakanipha Kwakhe kuvela koNgcwele Umoya. Lowo owafika esesimweni somuntu wakhuluma ngokuthi UMoya oNgcwele wamshukumisela ukuba adlulisele lokhu kuhlakanipha. Ukuhlakanipha inikezwe i-Atma (Bhagavan) ngesimo somuntu sihola ekuphileni <strong>okuphakade (moksham). </strong>Nakuba owangena isimo somuntu asicaciswanga ngokuthi uNkulunkulu, Wathi, <strong>&ldquo;Lokho engikushoyo yilokho uBaba angitshele khona,&rdquo; </strong>embula ukuthi okhulumayo unguMoya oNgcwele. Nalokhu, ukuba sobala ukuthi lowo okhulumayo unguMoya oNgcwele. Nokho, ngokuvumelana nemfundiso engokomoya, kufanele kube wagcizelela ukuthi uMoya oNgcwele unguBaba, kanye ne-Atma oweza esesimweni somuntu yiNdodana.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 127,
verse: ` <b>(49) IVangeli likaJohane, isahluko 14, ivesi 7.</b>`,
meaning: ` <b>
(14:7) Uma beningazi ngempela, beniyakumazi uBaba njengo kahle. Kusukela manje kuya phambili, niyamazi futhi nimbonile.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Leli vesi liyafana nalelo okukhulunywe ngalo ekuqaleni (John12:49, 12:50). Njengoba ngike ngasho ngaphambili, uBaba neNdodana ziyefana; nokho, ngokwemfundiso engokomoya, kufanele kube njalo wathi uYise neNdodana bahlukene. UJesu wathi, <strong>&ldquo;Uma niyangazi ngempela, niyakumazi noBaba.&rdquo; </strong>Nakuba uNkulunkulu, lapho efika njengomuntu, ubizwa ngokuthi iNdodana ka UNkulunkulu, empeleni, uYise uqobo usesimweni seNdodana. Ngakho, Ivesi lithi, <strong>&ldquo;Uma niyazi iNdodana, niyamazi uBaba.&rdquo;</strong></div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 128,
verse: ` <b>(50) IVangeli likaJohane, isahluko 14, amavesi 8 no-9.</b>`,
meaning: ` <b>
(14:8) UFiliphu wathi, “Nkosi, sibonise uYihlo futhi lokho kuyakuba khona kusanele thina.”
<br><br>
(14:9) UJesu waphendula: “Awungazi yini, Filiphu, na? ngemva kokuba ngibe phakathi kwenu isikhathi eside kangaka? Noma ubani ongibonile mina umbonile uBaba. Ungasho kanjani ukuthi, “bonisa thina Baba?" </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
Leli vesi lembula ukuthi onesimo esibonakalayo ngu UMoya oNgcwele. Ngakho-ke uJesu wathi: <b>“Noma ubani ongibonile umbonile uBaba.”</b>
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 129,
verse: `<b>(51)	IVangeli likaJohane, isahluko 14, ivesi 10. </b>`,
meaning: `<b>
(14:10) Awukholwa yini ukuthi mina ngikuBaba, futhi ukuthi uBaba ukimi? Amazwi engiwasho kini ngiyawenza ngingakhulumi ngelami igunya. Kunalokho, uBaba, ophila kimi, owenza umsebenzi Wakhe.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Uma umuntu ecashile, yena kanye nokuzifihla kwakhe engahlukaniseki. Ngakho-ke, lapho umuntu ocebile ethatha isithombe se isinxibi, kokubili umuntu ocebile nesinxibi bahlala ndawonye. Isicebi sithatha ukubonakala kwesinxibi ngesikhathi saso zifihle. Nakuba isinxibi singena esitolo sokuyocela, siyacela empeleni yindoda ecebile eyenza lesi senzo. Okungabonwayo isicebi sidlala indima yesinxibi. Njengesicebi uhlala ngaphakathi kwesinxibi, futhi amazwi esinxibi avela endodeni ecebile, kungagonyelwa ukuthi isicebi singaphakathi isinxibi, futhi ngokuphindaphindiwe, isinxibi singaphakathi kwabacebile umuntu&mdash;zikhona ndawonye. Njengoba i-inner persona ibamba ukubaluleka okukhulu kunongaphambili olungaphambili lwesonto, zonke izenzo okwenziwa ngokucasha abulawa umuntu ongaphakathi. Inikezwe ukuthi umuntu n ngaphakathi kubaluleke kakhulu kunokwangaphandle ukubukeka, kunembile ukusho ukuthi yonke imisebenzi eyenziwa ngu umuntu obonakala ngaphandle ungowomuntu wangaphakathi. Naphezu kokubonakala kwangaphandle kwesinxibi, sihlanganisa umuntu ocebile ngaphakathi. Ngomqondo othile, kungaqinisekiswa ukuthi isinxibi ngempela ungumuntu ocebile. UMoya oNgcwele, ufihliwe kumuntu ifomu, libamba ukubaluleka. Kubalulekile ukuqaphela ukuthi ukuzifihla kungokwesikhashana, kuyilapho umphefumulo ongaphakathi ungowaphakade. Kungaba njalo wagomela ngokuthi <strong>lowo ongaphakathi kuJesu unguMoya oNgcwele</strong>. Ngakho, UJesu wathi: &ldquo;UBaba ukimi, nami ngikuBaba.&rdquo;</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 130,
verse: `<b>(52)	IVangeli likaJohane, isahluko 14, ivesi 6.</b>`,
meaning: `<b>
(14:6) UJesu waphendula: “Mina ngiyindlela neqiniso ne impilo. Akekho oza kuBaba ngaphandle kokuba eze mina. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ukwakhela esibonelweni sangaphambilini, indlela eya ukuqonda isicebi kungesinxibi. Uma isinxibi siyabanjwa, ubunikazi besicebi buba sobala. Uma isicebi sesibonwa, umuntu angangena ingcebo anayo. Ngokufanayo, indlela yokuqonda uNkulunkulu kungenxa yokuba sesimweni somuntu. Uma umuntu uyamqonda lowo othathe isimo somuntu, nabo bayokwenza baqonde uNkulunkulu ohlala phakathi Kwakhe. Ukujwayelana UNkulunkulu uholela ekuzuzeni ukuphila okuphakade okuvela kuNkulunkulu. Ngakho, kwelinye Ngezikhathi ezithile, uJesu wathi, <strong>&ldquo;Mina ngiyindlela neqiniso ne impilo.&rdquo;</strong> Lapho uJesu ethi, &ldquo;Mina ngiyindlela,&rdquo; ubonisa <strong>indlela ukuqonda uNkulunkulu ngami. </strong>Wabuye wathi, &ldquo;NginguJehova iqiniso,&rdquo; okusho ukuthi uwukubonakaliswa kwangempela kukaNkulunkulu. Ngaphezu kwalokho, wamemezela, <strong>&ldquo;Mina ngingukuphila okuphakade.&rdquo; </strong>Lokhu kugomela kusekelwe eqinisweni lokuthi uNkulunkulu weqiniso osesimweni sikaJesu wamemezela ukuthi noma ubani ojwayelene Naye wayezothola i-paraloka (moksham) futhi uthole ukuphila okuphakade ngaphandle kokubhekana nokufa i-paraloka.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 131,
verse: ` <b>(53)	IVangeli likaJohane, isahluko 14, ivesi 16.</b>`,
meaning: `<b>
(14:16) Ngizocela kuBaba, futhi uyoninika omunye uMmeli ukuthi akusize futhi abe nawe kuze kube phakade.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UMoya oNgcwele awuhlali unomphela kumuntu isimo phakathi kwabantu. Ngezinye izikhathi, uMoya oNgcwele uyashintsha ukubukeka futhi ingena ezimpilweni zabantu uma kudingeka. Ngenkathi uMoya oNgcwele ethatha isimo sikaJesu, Waphila phakathi kwe abantu iminyaka engu-33 kuphela. Kule minyaka engama-33, Wapha ukuhlakanipha iminyaka emithathu kuphela. Nangaphambi kokuqeda ezintathu iminyaka, Wasuka kubantu ngemva kweminyaka emibili kuphela futhi izinyanga ezintathu. UJesu wathi: &ldquo;Ngizocela uBaba ukuba athumele omunye Ummeli (Adaranakarta) okwesibili, ophila isikhathi eside kune mina futhi ungifundise ukuhlakanipha.&rdquo; Ofikayo nguyena umuntu njengalowo othi Uyancenga ozayo. Nguye lo ozayo. Yilo kanye owathi ukuthi wayezacela kuye ozayo. Kuyafana owathi Uzothumela omunye uMmeli (UMduduzi). <strong>Kukhona eyodwa kuphela</strong>. Yilowo owathi, inguyena owabuzayo, futhi uyena ozayo. Uma singaqondi ukuthi munye kuphela odlalayo bonke abalingiswa, lowo othi, abuze, futhi afike kungenzeka abonakale ehlukile. Ngaphandle kokuqaphela <strong>ukuthi munye kuphela</strong><strong>ukuhlela lezi zindima</strong>, siyehluleka ukuqonda uNkulunkulu ngo phambi kwethu osesimweni somuntu, uNkulunkulu onxusayo, noNkulunkulu ofikayo.

  Kubalulekile ukuqonda ukuthi lowo oncengayo UBaba njengoJesu unguMduduzi ozayo. Ukufika Ummeli unguMoya oNgcwele.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 132,
verse: `<b>(54)	IVangeli likaJohane, isahluko 14, ivesi 17.</b>`,
meaning: `<b>
(14:17) Izwe alinakumamukela ngenxa yalo futhi abaMboni futhi abamazi. Kodwa uyamazi, ngoba uhlala lani njalo uzakuba kini.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Igama elithi ‘umhlaba (loka)’ lingaqondwa njengelihlanganisa labo bantu abathola imiphumela ye-karma umhlaba. Lapho uNkulunkulu ethatha isimo somuntu, labo ababoshwe yi-karma kungenzeka bangamboni noma bamamukele. Abahlulekayo bayamazi Yena abakwazi ukwamukela izimfundiso Zakhe noma ubuNkulunkulu ukuhlakanipha. Yilabo kuphela abaye bazuza ukuhlakanipha okuthile UJesu uyokwazi ukubona uMduduzi oza emva kwakhe UJesu esesimweni somuntu. UMduduzi uhlala phakathi kwalabo abantu ngabanye, futhi labo abajwayelene Naye bayohlala ndawonye naye, ebona ubukhona Bakhe phakathi kwabo njengo-Atma.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 133,
verse: `<b>(55)	IVangeli likaJohane, isahluko 14, ivesi 20.</b>`,
meaning: ` <b>
(14:20) Ngalolo suku niyokwazi ukuthi ngiphakathi kwami Baba, nawe ukimi, nami ngikini..   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ngaphambi kokungena kuleli vesi, umuntu kufanele abambe iqiniso isimo sikaNkulunkulu. UNkulunkulu uhlukaniswe waba izingxenye ezintathu, egcwele umhlaba wonke. Nakuba eyedwa uNkulunkulu, uhlukene phakathi imiphefumulo emithathu&mdash;iJeevatma, i-Atma, neParamatma<strong>. I-Jeevatma ihlala endaweni ethile ngaphakathi kwemizimba yabo bonke abaphilayo izidalwa, kuyilapho i-Atma inweba kulo lonke leli umzimba womuntu wonke. I-Paramatma ikhona kokubili ngaphakathi nangaphandle komzimba, ekhona phakathi kwazo zonke ingqamuzana. </strong>Umuntu owuqondayo lo mqondo kubhekwa njenge-gnani ephelele. Paramatma, uMdali, ithatha isimo somuntu ukuze idlulisele ukuhlakanipha kubantu. Phakathi nalokhu ukubonakaliswa, Uyagomela ukuthi uyiNdodana, noYise uyiyo I-Paramatma. Leli gama lamagama lisebenza inhloso yokwehlukanisa, kodwa kungaqinisekiswa ukuthi bobabili iNdodana noYise bayikho ngokwemvelo efanayo. UNkulunkulu ubonakala esesimweni <strong>&lsquo;seNdodana</strong>&rsquo; kanye uhlala emhlabeni kukho konke ukuphila Kwakhe, enikeza ukuhlakanipha. Lokhu kusebenza njengendlela yokusabalalisa ukuhlakanipha. Kungenjalo, uNkulunkulu wathumela i-Atma evela Kuye ukuze adale, sekela, futhi abulale Jeevas. I-Atma, elawula imizimba ye- izidalwa eziphilayo, futhi uthathwa njengeNdodana kaNkulunkulu. U-Atma uhlala ngaphakathi kweParamatma, futhi i-Jeevatma ikhona endaweni ye- I-Atma. Ngenxa yalokho, inkulumo ethi <strong>&ldquo;Ngingu (Atma) empilweni yami UBaba&rdquo;</strong> lisetshenziswa esikhundleni sokuthi, <strong>&ldquo;Ngi (Atma) kuBaba, iParamatma.&rdquo; </strong>Njengoba uJeeva ekhona ngaphakathi komzimba libuswa i-Atma, leli vesi liyagcizelela, &ldquo;Nina (Jeevatmas) ni kimi (Atma).&rdquo; I-Atma, isakazeke kuwo wonke umzimba, futhi bahlakazeka ngaphakathi kuwe (Jeevatma), ngubani in a ethize indawo. Ngakho-ke, leli vesi lithi, <strong>&ldquo;Ngosuku lapho uyazi ukuhlakanipha kwemiphefumulo, niyakwazi ukuthi ngiphakathi kwenu wena.&rdquo;</strong>Labo abangawazi umqondo wemiphefumulo emithathu bayahluleka ukubona ukuthi ubani ohlala phakathi kwakhe. Ngakho-ke<strong>, kubalulekile ukuqonda i-Thraitha Theorem, ecacisayo ukuthi uNkulunkulu usesimweni semiphefumulo emithathu.</strong>
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 134,
verse: ` <b>(56)	IVangeli likaJohane, isahluko 14, 25th kanye 26 amavesi.</b>`,
meaning: `<b>
(14:25) Konke lokhu ngikukhulumile ngisenani.
<br><br>
(14:26) Kodwa uMmeli, uMoya oNgcwele, owathi UBaba uyakuthumela egameni lami, uzonifundisa zonke izinto futhi ngizonikhumbuza ngakho konke engikushilo kini. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ngesinye isikhathi, uJesu wakhuluma nabafundi bakhe, wathi "Ngisenani, ngikhuluma lamazwi." Ngaphezu kwalokho, Yena kudluliselwe, &ldquo;Omunye ummeli (Adaranakarta) uzofika wena emva kokushona kwami." Ngaphezu kwalokho, Wachaza<strong>, &ldquo;Ummeli oza njengami angakukhumbuza konke engangikukhulumile ngakufundisa konke engangingenakho kukhulunywa.&rdquo; </strong>Isici esibalulekile okufanele sicatshangelwe lapha ukusebenzisa kukaJesu igama elithi &lsquo;Mmeli.&rsquo; Ecacisa incazelo yoMmeli, wathi, <strong>&ldquo;UMmeli nguMoya oNgcwele uBaba azothanda thumela egameni lami.&rdquo; </strong>Ukuhlolisisa leli vesi kwembula ukuthi iqala &lsquo;ngoBaba&rsquo; futhi iphethe &lsquo;ngoNgcwele Umoya.&rsquo; Lokhu kulandelana kusikisela ukuthi uyise kaJesu uNgcwele Umoya. Kungabekwa ukuthi iNdodana iyona ecashile, kuyilapho uBaba nguye ongafihlwanga. Eqinisweni, bobabili banjalo eyodwa futhi efanayo.

  <strong>Lowo onikeza ukuhlakanipha futhi asuse i-karma ebizwa ngokuthi uMmeli (uMduduzi). </strong>Lapho uJesu wagomela ngokuthi uNkulunkulu nguye othumela uNkulunkulu egameni le Ummeli, Washo, &ldquo;UBaba unguMoya oNgcwele ozokwenza thumela egameni lami.&rdquo; Lokhu kucacisa ukuthi <strong>uNkulunkulu uthatha isimo, athathe umfuziselo woMmeli, anikeze ubuNkulunkulu ukuhlakanipha. </strong>Kuyaphawuleka ukuthi uJesu wadlulisela la mazwi ku qinisekisa ukuthi nalabo abangazi ngalolu daba bangaluqonda.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 135,
verse: ` <b>(57)	IVangeli likaJohane, isahluko 15, ivesi 23. </b>`,
meaning: `<b>
(15:23) Lowo ozonda mina uzonda noBaba. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Bengilokhu ngigomela kwasekuqaleni ukuthi uNkulunkulu ukhona kufihlwe ngesimo sikaJesu, negama okuthiwe lilo Inkazimulo kaNkulunkulu nguJesu. Ngempela, akekho omunye ngaphandle kukaMoya oNgcwele ufikile ngegama likaJesu. Ngenxa yalokho, noma ubani ukuhlambalaza uJesu futhi ukuhlambalaza iParamatma. UMduduzi (uMmeli) akuyena ozofika emva kukaJesu. UJesu naye wayenguMmeli. Noma nini lapho uNkulunkulu ethatha umuntu ngesimo, Kufanele njalo abizwe ngoMmeli. <strong>Ummeli unikeza ukuhlakanipha okusebenza njengekhambi karma, </strong>futhi uNkulunkulu kuphela onikeza izimfundiso eziqedayo i-karma. Ngakho-ke, kungaqinisekiswa ukuthi uMmeli okufanayo noMoya oNgcwele. Nokho, ukuqaphela uNkulunkulu lapho Ethatha isimo somuntu Emhlabeni kufakazela ukuba inselele. Le nselelo igcizelelwa ngabantu ngabanye UbuKristu abathi ba-gnani futhi babhekise kuJesu njengo umfowethu. Kuyagcizelelwa ukuthi uJesu akayena umfowabo wanoma ubani. Kungakhathaliseki ukuthi uvela njengoJesu noma ngaphansi komunye Igama, Ukhonjwa njengoMoya oNgcwele, uMenza uBaba,hayi umfowethu.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 136,
verse: `<b>(58)	IVangeli likaJohane, isahluko 15, 24 kanye Amavesi 25. </b>`,
meaning: ` <b>
(15:24) Uma bengingenzanga phakathi kwabo imisebenzi, akukho muntu uma kungenjalo, babengeke babe nesono. Njengoba kunjalo, bona babonile, kepha bayangizonda mina neyami Baba.
<br><br>
(15:25) Kodwa lokhu kwenzelwa ukugcwalisa okulotshiweyo emthethweni wabo ukuthi:'Bangizonda ngaphandle kwesizathu.’ </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Umsebenzi ongeke ufezwe muntu emhlabeni owokuthi thethelela futhi ususe izono zomuntu. UJesu washo ukuthi izono bekungeke kwenzeke ukube Akawenzanga umsebenzi wokuthethelela i-karma yabanye. Lapho Esesidlangalaleni wathethelela izono zabantu abathile, labo ababenomona futhi ngokunganaki ubukhulu Bakhe bafukamela inzondo Ngaye. Ukuzonda uJesu kufana nokuzonda uMoya oNgcwele. Labo aba wafukamela inzondo Ngaye <strong>ngaphandle kwesizathu esizwakalayo</strong> isono.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 137,
verse: ` <b>(59)	IVangeli likaJohane, isahluko 15, 26 no-27 amavesi. </b>`,
meaning: `<b>
(15:26) Lapho kufika uMmeli, engizomthuma kuye kini elivela kuBaba—uMoya weqiniso ophumayo evela kuBaba—Yena uzofakaza ngami.
<br><br>
(15:27) Futhi nawe kufanele ufakaze, ngoba ubulokhu nami kusukela ekuqaleni.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UJesu weza njengoMmeli (Bhagavan) wakhuluma ukuthi athumele omunye uMmeli ovela kuBaba eze kubo abantu. Ngokuvumelana nomthetho komoya He dlulisa lokho bekufanele asho. Nokho, akekho omunye uMmeli onaye uBaba; <strong>munye kuphela uNkulunkulu </strong>ovela kuye ngezikhathi ezithile isithunzi soMmeli. Akekho omunye oMthumayo. Lapho uJesu noMoya oNgcwele uthathwa njengofanayo, kokubili umthumeli naleyo ezayo iyafana. UJesu wathi, <strong>&ldquo;UMoya we iqiniso liza njengoMmeli, futhi uzofakaza ngami."</strong> Lapho ozayo nohambayo yibo okufanayo, akumangalisi ukuthi ozayo uzokhuluma ngakho ohambayo. Njengoba uMmeli ozayo exoxa ngoJesu, Wakhe abafundi ngokungangabazeki bayomkhumbula. Ngenxa yalokho, abafundi bazoqinisekisa ukuthi uJesu weza futhi wanikeza ukuhlakanipha.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 138,
verse: ` <b>(60)	IVangeli likaJohane, isahluko 16, ivesi 7. </b>`,
meaning: `<b>
(16:7) Kodwa ngiqinisile ngithi kini: Kungokuhle nina ngiyahamba. Ngaphandle kokuthi ngihambe, uMmeli angeke woza kuwe; kepha uma ngimuka, ngiyakumthumela kini.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Esifanisweni somuntu oyedwa odlala abalingisi ababili emdlalweni, umlingiswa wesibili uvela esiteji ngemva kwesokuqala uhlamvu luyaphuma. Njengoba kungumuntu oyedwa odlala izindima zombili, umlingiswa wokuqala kufanele ahambe ngemuva kumuntu okuye umlingiswa wokuqala ukuthatha indima yesibili. Akwenzeki ukuze umlingiswa wesibili avele ngaphandle uma umlingiswa wokuqala uya ngemuva kwesiteji. Lolu shintsho lwenzeka ngenxa efanayo umuntu uveza bobabili abalingisi. Ngokufanayo, lowo weza endimeni kaJesu kulindeleke ukuthi abuyele emhlabeni ngomzuzwana uhlamvu. Ngakho-ke, lapho uJesu emuka kubantu, ilowo owadlala indima kaJesu uzobuya endimeni yesibili. UMoya oNgcwele wathatha indima kaJesu. Uma Wayezofika futhi ukuze abe nabantu, kuzofanele alahle abaKhe indima njengoJesu futhi avele endimeni entsha, negama elisha, futhi ukubukeka okusha. Ngakho-ke, uJesu wathi, <strong>&ldquo;Kulungele nina ngiyahamba. Ngaphandle kokuthi ngihambe, uMmeli angeke woza kuwe.&rdquo; </strong>Nakuba engasho ngokucacile ukuthi Wayezokwenza buya njengoMmeli, Wedlulisela, &ldquo;NgizoMthumela kini uma ngihamba.&rdquo; Kusukela kulawa mazwi, noma ubani onobuhlakani uzokwazi qondani kalula ukuthi omukayo nobuyayo okufanayo.
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 139,
verse: `<b>(61)	IVangeli likaJohane, isahluko 16, ivesi 8  </b>`,
meaning: ` <b>
16:8) Lapho efika, uyofakazela ukuthi izwe likuwo okungalungile ngesono nokulunga nokwahlulela.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ngemva kokunyamalala kwendima kaJesu ngokusobala, U-Advocate (Bhagavan) uzongena endimeni yesibili neyesibili ukuzalwa komuntu. Igama elithi &lsquo;uMmeli&rsquo; limelela ukuba senyameni kukaNkulunkulu, kodwa akusilo igama likaNkulunkulu. Lowo oza njengoMmeli angaba negama emhlabeni. Ngakho-ke, akekho ongakwazi nquma ukuthi lo muntu ungumuntu kaNkulunkulu yini. Nakuba kungekho muntu uyalazi ifomu noma igama loMmeli, maningi amathuba okuthi eqaphela Yena ngokusebenzisa Okwakhe izenzo. Nini <strong>uMmeli </strong>uyeza emhlabeni, Uxoxa ngesono, embula ukuthi umuntu uzuza kanjani isono, lapho sigcinwa kuze kufike isikhathi ukufa, nemiphumela yesono. <strong>Uyakuchaza lokho kwaphezulu ukuhlakanipha kuyadingeka ukuze uzikhulule ezonweni ezizuziwe</strong>, njengezono banjengezinkuni, nokuhlakanipha kunjengomlilo. Ngokuhlakanipha kuphela umuntu angaphunyula ekubhekaneni nesono futhi azuze ukuhlakanipha kwaphezulu. Isono somuntu ongakutholi ukuhlakanipha kwaphezulu empilweni iphikelela kuze kube sekufeni. Umuntu onjalo kufanele azalwe kabusha ngaso leso sikhathi usuku, umzuzu, nomzuzu ngemva kokufa. Usuku lokufa eyaziwa ngokuthi usuku lokugcina. Usuku lokugcina lokuphila luba usuku lokuqala wempilo elandelayo. Umuntu kumele azalwe kabusha kungakapheli umzuzwana ukufa kwabo. Kungashiwo ukuthi umehluko wesikhathi phakathi ukufa nokuzalwa kabusha kuyingxenye eyodwa kweshumi yomzuzwana. Ngamafuphi isikhathi, u-<strong>Atma</strong> wehlulela umufi ngokusekelwe esonweni sabo kanye ne-punya. U-Atma ube esenquma ukuthi yini umuntu okufanele ayidle, ayiphuze, futhi isipiliyoni ngaso sonke isikhathi sokuzalwa kwesibili. Impilo ye ozelwe kunqunywa ukwahlulelwa okwenziwa ekufeni. Kanjani umuntu uzophila impilo yakhe elandelayo kunqunywa ngokusekelwe ekwahluleleni ngosuku lwabo lokugcina. I-Atma, ekanye nomuntu oshonile, ubahlulela ngendlela efanele ngokusekelwe ezenzweni zabo kusukela ebuntwaneni. Izenzo ezizothathwa empilweni elandelayo zinqunywa ngokusho ku-karma ekhona. Akekho ongakwazi ukweqa lesi sinqumo, futhi wonke umuntu kufanele amukele ukwahlulelwa.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 140,
verse: `<b>(62)	IVangeli likaJohane, isahluko 16, ivesi 12. </b>`,
meaning: `<b>
(16:12) Nginokuningi engingakusho kini, ngaphezu kwenu; manje angathwala. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho uNkulunkulu ethatha isimo somuntu, kubalulekile ukuqaphela nikeza ukuhlakanipha, ucabangela imizwa yabantu, nezimfundiso kufanele ihambisane nesikhathi nesimo. Okwaphezulu ukuhlakanipha kudinga ukuhanjiswa ngokuzwela kwabalaleli ukulungela ukuthola iqiniso. Ngokuqhathanisa, uma wazisa a owesifazane osethembisene umshado ukuthi usengumkakho, kungenzeka ungakwemukeli ngaphambi komshado, okuholela ekungqubuzaneni okungenzeka. Nokho, ukwabelana ngolwazi olufanayo ngemva komshado kungaletha injabulo ngaphandle kokuxabana. Ngokufanayo, nini ethula ukuhlakanipha kwaphezulu kulabo abangase bangakubekezeleli iqiniso, kunengozi yokungaqondi nokuphikiswa. Ngakho-ke, ngisho nalapho uNkulunkulu ethatha isimo somuntu, iqiniso kufanele kwabelwane ngobuhlakani. Isibonelo, uma umuntu egomela ukuthi uRavana Brahma ungumzimba kaNkulunkulu, wesimanje izethameli zingase ziwubambe umqondo ngezinga elithile. Nokho, ngabe kwashiwo isitatimende esifanayo eminyakeni engu-50 edlule, kungenzeka bebelokhu bengavumelani, nabantu bebheka iRavana njengobubi futhi esabekayo. Ngakho, kunezimo lapho ukuhlakanipha lokho okuhloswe ukuthi kwabiwe ngaphambi kwesikhathi kumele kuhlehliswe. Kulo mongo, UJesu wasivuma lesi simiso lapho ethi, <strong>&ldquo;Sengikwenzile okuningi engingakusho kini, okungaphezu kwalokho eningakuthwala manje,&rdquo; </strong>ku Abafundi bakhe. Ebona ukuthi kwase kuyisikhathi sokuthi ahambe esintwini, Wazisa abafundi Bakhe ukuthi ukuza Ummeli wayezodlulisela lokho Angazange akukhulume.</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 141,
verse: `<b>(63)	IVangeli likaJohane, isahluko 16, ivesi 13. </b>`,
meaning: `<b>
(16:13) Kodwa lapho Yena, uMoya weqiniso, efika, Uyokwenza aniqondise kulo lonke iqiniso. Akayikukhuluma ngeyaKhe okwakho; Uzokhuluma kuphela lokho Akuzwayo, futhi Uyokusho wena lokho okuseza. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UJesu waprofetha ngoMmeli ozayo. Igama elithi &lsquo;uMoya weqiniso&rsquo; lisho <strong>&lsquo;uNkulunkulu wokuhlakanipha.&rsquo; </strong>UJesu waveza ukuthi uNkulunkulu owayezakuza emva Kwakhe wayezohola wonke umuntu eqinisweni futhi akhulume iqiniso kuphela. Naphezu kokuthi uNkulunkulu ethathe isimo somuntu, eziphatha njengomuntu Ngendlela, uJesu wathi, &ldquo;Njengomuntu, akafundisi lutho Okwakhe; Ukhuluma kuphela lokho Akuzwayo.&rdquo; Uma umuntu ezibuza ukuthi ubani kwazisa uMmeli, munye umthombo. Njengoba kukhona munye kuphela ozayo, nguyena odlulisa ivangeli ukuhlakanipha. Ngenxa yalokho, kusobala ukuthi umuntu obonakalayo angakwazi futhi chaza lokho uNkulunkulu akukhulumile. UNkulunkulu kuphela ongakwazi khuluma ngokuhlakanipha kukaNkulunkulu. Kunokuba asho ukuthi abantu abakwazi ukudlulisa ukuhlakanipha kukaNkulunkulu, kubekwe ukuthi Ummeli uzokhuluma kuphela lokho Akuzwile.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 142,
verse: ` <b>(64) IVangeli likaJohane, isahluko 16, 14 kanye Amavesi 15. </b>`,
meaning: ` <b>
(16:14) Uzongikhazimulisa ngoba uvela kimi uyakwemukela lokho Azakunazisa khona.
<br><br>
(16:15) Konke okungokukaBaba kungokwami. Leyo kungani ngithe uMoya uyakwamukela kimi ukuthi uyakwamukela kwazisa wena.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Uma ubheka leli vesi, ezinye izingxenye zinengqondo ngenkathi abanye abakwenzi. Leli vesi lifana nokudlala umdlalo wokucasha nabantu. Ngaphambili, uJesu washo ukuthi abasanda kufika Umoya weqiniso wawuyofundisa lokho Akuzwayo. Ngemva kwalokho, ku-vesi elilandelayo, Wathi uMmeli uyothatha lokho Yena wamukele kuJesu futhi wakudlulisela kubantu. Ngaphezu kwalokho, UJesu wagomela ngokuthi uMmeli wayeyoveza izinto ezinjalo UJesu wayengashongo. Nokho, esitatimendeni samanje, uJesu isho ukuthi uMmeli uzokwazisa abantu lokho ayekuthole kuJesu. Ukungahambisani okusobala emazwini kaJesu kungase kubangele ukudideka. Nokho, kukhona isizathu samabomu salokhu kungaqondakali. UJesu wakhetha ukuveza Yena ngokwakhe ngendlela <strong>labo abanesithakazelo ngobuqotho Kwakhe ukuhlakanipha bekuyoqonda, kuyilapho abangenasithakazelo ngeke. </strong>Uqhube wathi u-Advocate ozayo uzofika wabelane ngalokho uJesu ayekushilo ukuze amkhazimulise. UJesu wabe eseqinisekisa ukuthi konke okungokukaBaba kungokwaKhe, kuYise ebhekise kuMoya oNgcwele noma uNkulunkulu. Ngokugcizelela ukuthi okukaNkulunkulu ukuhlakanipha kungokwaKhe nokuthi uMmeli adlulise lokho Anakho etholwe kuJesu, kuba sobala ukuthi uJesu noNgcwele Umoya ziyafana. Esikhundleni sokusho ngokucacile, &ldquo;NginguNkulunkulu,&rdquo; UJesu wathi, <strong>&ldquo;Onke amazwi kaNkulunkulu angawami.&rdquo;</strong>
  </div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 143,
verse: ` <b>(65)	IVangeli likaJohane, isahluko 16, ivesi 16. </b>`,
meaning: `<b>
(16:16) UJesu waqhubeka wathi: “Kuseyisikhashana nizokwazi ningabe nisangibona, bese kuthi emva kwesikhashana nibone ngibone.” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  UJesu watshela abafundi bakhe ukuthi bazombona kungabe kusaba khona emva kwesikhashana, ekhombisa ukumuka Kwakhe phakathi abantu kanye nokuphela kokubonakala Kwakhe kubo. Naye futhi wathi bazophinde bambone emva kwesikhashana. okusho ukuthi wayezoshiya isimo Sakhe senyama, angaphinde avele ekubonakalisweni komzimba ofanayo. Lesi sitatimende sabadidayo abafundi, ebaholela ekubuzeni ukuthi kungani uJesu ekhuluma ngokubona Naye futhi emva kwesikhashana. Lapho uJesu ethi, “Kancane Kuseyisikhashana, anisayikungibona, futhi emva kwesikhashana nibe nani uzongibona,” abanye bangase bazibuze ukuthi Uyongibona yini fihla okwesikhashana bese uvela futhi. Nokho, ekuqaleni Ngokwesibonelo, uJesu wayechazile, “Ngizohamba. Ngeke uMmeli ngize kuwe ngaphandle kokuthi ngihambe. ngizohamba ngiMthume.” Ngakho, uJesu wayephakamisa ukuthi wayezofeza isithembiso Sakhe sokumuka, futhi ngemva kwesikhathi esithile, babezobona u-Hngiphinde ngokuza Ummeli, owayenguJesu futhi. Kulo mongo, ivesi kuyahambisana lapho umuntu ebona ukuthi lowo (uJesu) ezisukayo kanye (uMmeli) obuyayo ziyefana. UJesu ugcizelele ukuthi ukubona eyodwa yazo kuyalingana ebona munye kuphela, njengoba uJesu noMmeli bemunye futhi okufanayo.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 144,
verse: ` <b>(66) IVangeli likaJohane, isahluko 16, 17, 18, Ivesi 19, 20, 21 kanye 22. </b>`,
meaning: `<b>
(16:17) Kulokhu, abanye babafundi bakhe bathi komunye omunye, “Usho ukuthini ngokuthi, ‘Kancane kanti anisayikungibona, futhi emva kwesikhashana kuyilapho nizongibona,’ futhi ‘Ngoba ngiya kini Ubaba?"
<br><br>
(16:18) Babelokhu bebuza, “Usho ukuthini ngokuthi ‘ isikhathi esincane'? Asiqondi ukuthi uthini.”
<br><br>
(16:19) UJesu wabona ukuthi babefuna ukumbuza mayelana lokhu, ngakho wathi kubo: “Niyabuzana na? engangikuqondile lapho ngithi, ‘Kuseyisikhashana nizobona ningasangiboni, kuthi emva kwesikhashana nibone mina'?
<br><br>
(16:20) Ngiqinisile, ngiqinisile ngithi kini: Niyokhala nilile kuyilapho izwe lijabula. Uzakuba lusizi, kodwa usizi lwakho izophenduka intokozo.
<br><br>
(16:21) Owesifazane obeletha umntwana uba nobuhlungu ngoba isikhathi sakhe sesifikile; kodwa uma ingane yakhe ezelwe, uyakhohlwa usizi ngenxa yentokozo yakhe ukuthi umntwana uzelwe emhlabeni.
<br><br>
(16:22) Ngakho, nawe: Manje yisikhathi sakho sosizi, kodwa ngizo futhi niyokubona futhi niyojabula, futhi akekho oyokwamukela susa injabulo yakho. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Lapho uJesu esho la mazwi, “Kuseyisikhashana nizokwazi ningabe nisangibona, kuthi emva kwesikhashana nibone. abantu bakuthola kuyinselele ukuqonda. Ephendula, uJesu wafanekisa lo mqondo esebenzisa umfanekiso wowesifazane obeletha. Wakudlulisa lokho, njengoba nje owesifazane ezwa ubuhlungu phakathi ekubelethweni komntwana, abafundi babezahlupheka ngenxa yoku Ukuhamba kwakhe. Nokho, wabaqinisekisa ukuthi babeyokwenza thola intokozo nenjabulo njengowesifazane okhohlwayo ubuhlungu lapho umntwana esezelwe. UJesu wakhuluma nababekhona, ukuvuma ukuthi kuzoba nenkathi yobuhlungu obubangelwa Ukushiya kwakhe, kodwa wagcizelela ukuthi lolu sizi luzodlula ngenjabulo ekubuyeni Kwakhe.
</div></div>
</span>`
},
{
chapterName: "IVangeli likaJohane",
chapterNumber: 5,
pageNumber: 145,
verse: ` <b>(67)	IVangeli likaJohane, isahluko 16, ivesi 25. </b>`,
meaning: `<b>
(16:25) Nakuba bengikhuluma ngomfanekiso, siyeza isikhathi lapho ngingabe ngisalusebenzisa lolu hlobo kodwa ngizalitshela ngokusobala ngoBaba.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Amazwi kaJesu, njengoba kushiwo ngaphambili, ayenjalo okuvunywa ukuthi akucacile, okubangela ubunzima kubantu ukuqonda nokuholela ekudidekeni. UJesu uqobo wavuma ukukhuluma ngomfanekiso ukuvimbela ukuqonda ngokushesha. Uphinde wagomela wathi, &ldquo;Ngeke ngisho ngendlela engokomfanekiso esikhathini esizayo. ngizokwenza ngikutshele konke ngokucacile.&rdquo; Nokho, ngisho lesi sitatimende kubonakala kungaqondakali. UJesu wamemezela ukuthi wayeyokwenza sukani masinyane, futhi uMmeli ngoMoya oNgcwele wayezofika ukucacisa konke. Wacacisa ukuthi uMmeli uzoyenza woza kuphela uma Ehamba nokuthi abafundi bazodabuka ngokuhamba Kwakhe kodwa wayezojabula lapho embona futhi. Manje, Uyanezela<strong>, &ldquo;Kuze kube manje, ngishilo ngokungacacile. Lapho ngibuya, ngiuzokutshela konke ngokucacile." </strong>Lesi sitatimende sethula izinga lokungaqiniseki mayelana nokuthi lowo ozayo uMmeli ohlukile noma ngabe uJesu uqobo uzobuya.
</div></div>
</span>`
},
{
chapterName: "ISambulo sikaJohane",
chapterNumber: 6,
pageNumber: 146,
verse: ` <b>1) ISambulo sikaJohane, isahluko 9, 4, 5, kanye 6 amavesi.</b>`,
meaning: `<b>
(9:4) Zatshelwa ukuba zingalimazi utshani bomhlaba noma yisiphi isitshalo noma isihlahla, kodwa kuphela labo bantu abangazange banophawu lukaNkulunkulu emabunzini abo.
<p>
<div class="container">
          <img src="assets/img/Devunimudra_inside.png"   style="width:100%;">
          <div class="top-left">
           <u>UPhawu lukaNkulunkulu</u>
          </div>
          <div class="top-right1">
            Imvelo
           </div>
           <div class="top-right2">
          UMoya oNgcwele
          </div>
          <div class="dm-top-right3">
           Baba
          </div>
          <div class="dm-top-right4">
           Indodana
          </div>
          <div class="dm-bottom-left2">
            Umzimba
           </div>
          <div class="bottom-left">
            <u>Okwazo Zonke Izinkolo</u>
           </div>
        </div>
</p>
(9:5) Babengavunyelwe ukubabulala kodwa kuphela babahlukuluze izinyanga ezinhlanu. Nobuhlungu babo ukuhlupheka kwakunjengodosi lukafezela lapho kuyagadla.
<br><br>
(9:6) Ngalezozinsuku abantu bayofuna ukufa kodwa bayokufuna ungakutholi; bayofisa ukufa, kodwa ukufa kuyophunyuka bona. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
  Ivesi lesithathu elandulele la mavesi, isAmbulo 9:3; uthi, <strong>&ldquo;Kuphuma emsini isikhonyane sehlela emhlabeni</strong><strong>futhi sanikwa amandla afana nawawofezela bomhlaba.&rdquo; </strong>Leli vesi libonisa ukuthi isikhonyane saphuma emsini. Nokho, intuthu okukhulunywa ngayo lapha ayikhiqizwa izinkuni ezivuthayo noma ezinye izinto. Kunalokho, liyifu eliminyene okubonakala ekuntweleni kokusa ngosuku lwasebusika ilanga lingakafiki uvukile. Leli fu linciphisa ukukhanya kwelanga futhi lidale ubumnyama. Izintethe ziphuma kulelifu elimnyama. Njengoba befika emgwaqeni umhlaba ngamaqembu amakhulu njengebutho, aziwa ngokuthi &ldquo;isikhonyane izinkumbi.&rdquo; Akekho owazi kahle ukuthi isikhonyane sivelaphi. kodwa kukholakala ukuthi zisuka enkungu yesibhakabhaka esiguqubele. Ukuzalwa nokukhula kwazo kuhlala kuyimfihlakalo, futhi ziyavela kusukela entuthuni esikhaleni ngaphandle kwanoma iyiphi imvelaphi ecacile. Isikhonyane izinkumbi zingaba ngamakhulu, izinkulungwane, noma ngisho izigidi.

  Isikhonyane sithwala izifo eziningi ezihlupha abantu. Nakuba zingase zibonakale njengezintethe ezivamile, zakha ibutho lezingelosi, ezikhonza njengezinceku zikaNkulunkulu, zithunywe nguye umyalo. UNkulunkulu wayala isikhonyane ukuba sihluphe abantu, futhi ngomyalo waKhe, Ibutho lesikhonyane lithinta isintu. Njengoba zivela endaweni engabonakali, ziyacasha futhi zilume abantu, abangena emizimbeni yabo ngesimo sezifo kanye ebanga ukuhlushwa. UNkulunkulu wabapha ubuthi obungango ofezela phansi. Abantu bahlupheka kakhulu ngenxa ukufika kwesikhonyane esivela ezweni elingabonakali, sisebenza njengamanxusa lokuhlushwa ngenxa yezono zabantu. Bayalwa ukuthi bangalimazi utshani bomhlaba, noma yiziphi izitshalo, noma izihlahla ngaphandle kwabantu. Nakuba umcabango ovamile uwukuthi isikhonyane silimaza utshani, izitshalo, nezihlahla, leli vesi licacisa ukuthi lezi sikhonyane azikwenzi lokho zilimaza izitshalo kodwa zibhekiswe kubantu. Umsuka wesikhonyane, sazo ukudla, futhi umsebenzi wabo uhlala ungaziwa kubantu.

  Kusobala emavesini amane ashiwo lapha ukuthi ibutho lezingelosi lisesimweni sesikhonyane liyafika lizohlupha abantu. Ibutho lezinceku zikaNkulunkulu, lithatha isimo sesikhonyane, unamandla okuhlupha abantu kuze kube yizinyanga ezinhlanu, nokho abanalo igunya lokubangela ukufa. Lapho isikhonyane ziluma abantu ngokungabonakali, zidala isifo esibanga izinhlungu njengodosi lukafezela. Amandla okuhlupheka ayahluka ngokusekelwe ku-karma yomuntu ngamunye, kusukela ekungaphatheki kahle okuncane kuya ku-izinga lodosi lukafezela. Njengoba kungekho muntu ongabalekela lobu buhlungu, abantu kufanele ikubekezelele. Ivesi libonisa ukuthi ngesikhathi ezinzima ukuhlupheka, abantu bangase bafise ukufa njengendlela yokubalekela, kodwa kunjalo bengavunyelwe ukuzibulala. Ngakho-ke, abantu kufanele ubekezelele ubuhlungu. Leli vesi liqhubeka liveza ukuthi ngisho nokufa iyababalekela, okusho ukuthi abantu abanakubalekela ukuhlupheka okubangelwa yisikhonyane.

  Uma isikhonyane esivela emafwini ashunqayo angabonakali, ziza izikhathi eziyikhulu, zingase zibonakale kanye kuphela. Ngokuhlala engabonakali, angaba nemiphumela ehlukahlukene kubantu, ukulimaza ngendlela yesifo noma ngezinye izindlela. Leli vesi libonisa ukuthi ukulimala kwabo kubhekiswe kubantu kuphela futhi ingabonakalisa nganoma yiluphi uhlobo. Kuthiwa abantu bayokwenza lokho nibekezelele lokhu kubi, ngokuba kuyalwa isikhonyane yona. Ngisho noma abantu befuna ukufa ngenxa yokuhlupheka okungabekezeleleki, kodwa akulula njengoba ukufa kubabalekela. Nakuba abantu bahlushwa ngezindlela ezihlukahlukene ngenxa &ldquo;yesikhonyane esingabonakali (izinceku)&rdquo; ezithunywe nguNkulunkulu, azicabangi izinkinga zabo. Abakwazi ukuphunyuka kwabo ukuhlupheka ngamazwi kaNkulunkulu.

  Izifo eziningi ezintsha ziyavela emhlabeni wonke, nokho abantu ngokuvamile abacabangi ngemvelaphi yabo. Ukukhomba isifo esisha kuthatha isikhathi, futhi ukuthola ikhambi kungaba ngisho nangokwengeziwe isikhathi eside. Njengoba nje kutholakala ikhambi lesifo esisodwa, esinye okungase kuvele okungajwayelekile. Eceleni kwezifo, kukhona izifo ezithathelwanayo nokuvuvukala. Ngenkathi abanye abantu bavuma ukuthi amandla angabonakali anesandla ekuhluphekeni, cha umuntu uyazi ukuthi angabhekana kanjani nazo ngempumelelo. <strong>Okuwukuphela kwendlela ukugwema ukuhlupheka okubangelwa izingelosi ezingabonakali kuwukwembatha Uphawu lukaNkulunkulu, uphawu lwamandla kaNkulunkulu. UNkulunkulu wayala abaKhe izinceku ukushushisa kuphela labo abangalufaki uPhawu kaNkulunkulu. </strong>Nakuba abanye bekholelwa ukuthi isikhonyane esibonakalayo singalimaza izitshalo nezihlahla, <strong>uNkulunkulu waqondisa isikhonyane saKhe esingabonakali ukulimaza kuphela labo abangenalo uPhawu lukaNkulunkulu phezu kwabo emabunzini. </strong>Embhalweni wokugcina waphezulu, amavesi 5:22 no 22:32 khuluma ngoPhawu lukaNkulunkulu. I-Akshara Parabrahma Yoga ye umbhalo wokuqala waphezulu, iBhagavad-Gita, ubonisa uphawu lukaNkulunkulu. Ku umbhalo wami, <strong>&ldquo;uPhawu lukaNkulunkulu,</strong>&rdquo; sichaza kabanzi ukuthi uPhawu lukaNkulunkulu kanjani ubukeka. Esikhundleni sokubuza abanye, yiba nokholo kuNkulunkulu futhi gqoka uPhawu lukaNkulunkulu, njengoba lungaboshiwe kunoma iyiphi inkolo ethile. UPhawu lukaNkulunkulu kukhulunywa ngalo emibhalweni emithathu yaphezulu. Isambulo seBhayibheli sichaza izinhlekelele ezibangelwa ukungenzi egqoke uPhawu lukaNkulunkulu. AmaKristu akufanele angabaze ukugqoka uphawu lukaNkulunkulu; kuyindaba yokholo. <strong>Noma ngabe uyiyiphi inkolo, zivikele ekuhluphekeni. Lalela kimi ugqoke &ldquo;UPhawu lukaNkulunkulu,&rdquo; olwalungaziwa ngaphambili. Vikela ngokwakho ekuhluphekeni.</strong>
</div></div>
</span>`
},
{
chapterName: "Iminwe Emithathu",
chapterNumber: 7,
pageNumber: 147,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
  Umfanekiso kaJesu awuvamile ukuvela kubantu. Phezu ukuhlolisisa, <strong>uJesu angabonakala ebonisa iminwe emithathu ngesandla saKhe sokunene</strong>. UJesu wanikeza ukuhlakanipha kwaphezulu ukuze cishe iminyaka emithathu, futhi ngisho nangemva kokufa Kwakhe, Kwakhe isithombe sibonakala sidlulisela izimfundiso kubantu. Ngenkathi izincazelo zingahluka, ukuqonda kwami lapho ngibona isithombe siwukuthi iqukethe umlayezo obalulekile ovela kuJesu izimfundiso. Embhalweni wokuqala waphezulu, uNkulunkulu uvezwe ngabathathu izingxenye - <strong>Kshara, Akshara, futhi Purushottama</strong>. Ngokufanayo, kumbhalo wokugcina waphezulu, uNkulunkulu uchazwa njengonezici ezintathu - <strong>Umgibeli, Umshayeli, kanye noFakazi.</strong> Esaphezulu wesibili umbhalo, uNkulunkulu kuthiwa unezingxenye ezintathu - <strong>iNdodana, uYise, kanye</strong><strong>uMoya oNgcwele</strong>. Izingxenye ezintathu zikaNkulunkulu zichazwe encwadini IBhagavad-Gita, iBhayibheli, neQuran njengokuhlakanipha okufanayo. Ukuhlakanipha okuyisisekelo kule mibhalo emithathu kulele ukuqonda izingxenye ezintathu zikaNkulunkulu. Kanye eyodwa uyaqonda izici ezintathu zikaNkulunkulu, ziphelele ukuqonda ukuhlakanipha kukaNkulunkulu kuyenzeka.

  Nokho, amaHindu afunda iBhagavad-Gita awakwenzi lokho yazi ukuthi obani <strong>uJeevatma (Kshara) </strong>no-<strong>Atma (Akshara).</strong> Ngokufanayo, amaKristu akazi ukuthi ubani iNdodana noYise kukhona. AmaSulumane akazi ukuthi ubani <strong>umgibeli nomshayeli kukhona. </strong>Encwadini ethi Bhagavad-Gita engayibhala, ngikhulume ngamaHindu abaqapheli iJeeva ebhubhayo, noNkulunkulu waphakade ekhona emzimbeni. EBhayibhelini, ngaphawula nokuthi amaKristu enza kanjalo ungaqondi imininingwane yamadodana amabili - <strong>iNdodana kanye Baba</strong>. Ngokufanayo, embhalweni othi <strong>&ldquo;Amavesi wezi Dayimane UmBhalo Wokugcina Waphezulu,&rdquo; </strong>ngasho ukuthi amaSulumane awawazi mayelana <strong>noAllah ababili</strong>. Abantu balezi zinkolo ezintathu bangase babe nakho akukho mbono ngezinye izingxenye ezimbili zikaNkulunkulu, okuyizona eziyinhloko ingqikithi yemibhalo yabo. Igama kuphela wonke umuntu uyaqaphela ukuthi &lsquo;unguNkulunkulu.&rsquo; Ngokungazi, bonke bayakhulekela ingxenye yesithathu, eyaziwa ngokuthi Purushottama in Bhagavad-Gita, UMoya oNgcwele eBhayibhelini, kanye noFakazi eQuran. uNkulunkulu Ngokwakhe wathi akulungile ukukhulekela ingxenye yesithathu se UNkulunkulu (uMoya oNgcwele), ongaphezu kwakho konke ukukhulekelwa nakho konke i-dharmas. Nokho, wonke umuntu ukhulekela <strong>&ldquo;uNkulunkulu ongamkhonzi</strong><strong>ongadingi noma yini.&rdquo; </strong>Kungashiwo ukuthi ukungazi komuntu akukona ukwazi ukuthi uNkulunkulu akakudingi ukukhulekelwa kwethu.

  Ngokuphathelene namaKristu, abawazi <strong>&ldquo;ababili Amadodana&rdquo;</strong> okukhulunywa ngawo embhalweni wabo. Nakuba iBhayibheli ikhuluma ngamaDodana amabili, amaKrestu akholelwa ukuthi kuneNdodana eyodwa kuphela futhi abajwayelene nokuhlakanipha kwamadodana amabili. Bangase abazi ukuthi kukhona amadodana amabili - <strong>iNdodana Engunaphakade kanye iNdodana Yesikhashana</strong>. IBhayibheli libabiza ngokuthi <strong>iNdodana futhi iNdodana ezelwe yodwa,</strong> kodwa amaKristu akazi ukuthi ngobani laba Amadodana amabili. Ngokufanayo, akekho kunoma iyiphi inkolo ongase akwazi lokho kukhona oNkulunkulu ababili - <strong>uNkulunkulu, onguYise, kanye Unkulunkulu, onguBabamkhulu. </strong>Nakuba lokhu kuyiqiniso okwethulwe ngokwesayensi embhalweni, abanye abantu bangase bangabi kholwa, futhi abanye bayaphika ukuba khona koNkulunkulu ababili ngokuphelele. Nakuba imibhalo isho ukuthi munye kuphela UNkulunkulu okufanele akhulekelwe, akucaci noma lo Nkulunkulu nguyena Ubaba noma uBabamkhulu.

  Labo abanokuhlakanipha kwaphezulu nalabo abafundayo imibhalo ikhonza uNkulunkulu oyedwa kuphela ngokusekelwe kweyabo ukuqonda. Bangase bakhulekele <strong>uMkhulu-uNkulunkulu</strong>, lowo akufanele akhulekelwe, esikhundleni <strong>sikaBaba-uNkulunkulu</strong>, ngubani kufanele akhulekelwe. Amagama athi uBaba-uNkulunkulu kanye UBabamkhulu-uNkulunkulu angase abonakale emusha, kodwa lolu daba empeleni luphakathi imibhalo yabo. Abantu ngokuvamile bayehluleka ukuqonda iqiniso ukuhlakanipha. Lapho othile ehlanganyela nabo iqiniso, bangase bahlanganyele nabo asabele ngokucasuka anqabe. EBhayibhelini lami, ngafunda ukuthi zimbili Amadodana - iNdodana yoMuntu neNdodana kaNkulunkulu - nokuthi oNgcwele UMoya, osesikhundleni sikaMkhulu, akufanele abe bakhonzwa. Labo ababheka uMoya oNgcwele njengoNkulunkulu futhi kade bemkhulekela kanjalo kungenzeka manje basesimweni ukudideka. UJesu wafundisa ngokuphawulekayo ngamadodana amabili kanye uMoya oNgcwele. Waze waveza <strong>&ldquo;Amadodana amabili kanye nawo Baba, uMoya oNgcwele,&rdquo; </strong>esebenzisa iminwe yakhe. UJesu wasebenzisa ilungelo lakhe isandla ukukhombisa iminwe emibili - umunwe wokukhomba nophakathi umunwe - kanye nesithupha. Ngaqonda ukuthi isithupha siyisibonakaliso sikaMoya oNgcwele esithombeni. Njengoba uNkulunkulu enguye onikeza amandla okuqonda kungqondongqondo (buddhi), ngokuhlakanipha kweqiniso, uJesu wabonisa kokubili uYise (Atma) kanye neNdodana (Bhagavan) eneminwe emibili (inkomba kanye phakathi). Kuyaqondwa ukuthi bamele unomphela Indodana neNdodana yesikhashana. Umbhalo ufingqa ukuthi <strong>Umoya oNgcwele ngeke waziwe kuze kube yilawo maDodana amabili eyaziwayo</strong>. Wonke umuntu kufanele azi ukuthi imfihlo kamoya okuyinto Indaba okufanele yaziwe yiwo wonke <strong>umphakathi wesintu wamadodana amabili. </strong>Uma ubheka iminwe emithathu kaJesu kusithombe ekhasini elilandelayo, basikhumbuza uMoya oNgcwele kanye Amadodana amabili - u-Atma neNdodana ezelwe yodwa.
</div></div>
<ion-row><ion-col class="ion-text-center">
<img src="assets/img/jesus.png"/>
</ion-col></ion-row>
</span>`
},
{
chapterName: "ULwesihlanu Oluhle noma uLwesihlanu Olubi?",
chapterNumber: 8,
pageNumber: 148,
verse: ``,
meaning: ``,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
  Izenzakalo ezithile ekuphileni ziletha injabulo, kuyilapho ezinye ziletha usizi kumuntu. Ngezikhathi zenjabulo, umuntu ngamunye ujabule futhi ujabulele ukudla okuhle nezingubo. Ngokuphambene, nini ebhekene nosizi, umuntu ulahlekelwa isifiso sokudla nesithakazelo ezintweni ezihlukahlukene izici zokuphila. Umkhosi we-Diwali eNdiya, isibonelo, igujwe ngeziqhumane ukukhumbula ukunqotshwa kwe-idemoni elibi uNarakasura ngalolo suku. Ezikhathini zasendulo, ababhali, nabaFarisi, nezazi baletha uJesu phambi kwebandla enkantolo futhi wahlela ukubulawa Kwakhe wajabula ngokufa Kwakhe. Njalo ngonyaka babegubha unyaka wokufa kukaJesu njengoMuhle NgoLwesihlanu, silubheka njengosuku lwenjabulo. Kusukela lapho, umkhosi bekwaziwa ngokuthi &lsquo;Good Friday.&rsquo;

  Ezinsukwini zokuqala, abantu ababengazi ngoJesu. ubukhulu, kanye nababhali nezazi, bagubha umkhosi. Lokhu kwenzeka lapho ukubaluleka nokuhlakanipha kukaJesu kwaba engaziwa. Esikhathini samanje, ngisho nalabo who abajwayele Ukuhlakanipha kukaJesu bagubha usuku lokufa kukaJesu njengoluhle NgoLwesihlanu. Nakuba kuwumkhuba ukugubha ngenjabulo ngosuku oluhle, usuku uJesu afa ngalo kulindeleke ukuba lube usuku olubuhlungu kuKhe abazinikele. Kuyamangaza ukubona amaKristu, abathi UJesu njengoNkulunkulu wabo, ngenjabulo egqoke izingubo ezintsha futhi edla ukudla okuhle ngaphandle kokuzwakalisa ukudabuka ngokufa kukaJesu kulokho usuku.

  Ngempela, usuku uJesu abulawa ngalo kufanele lubhalwe phansi &lsquo;njengosuku Olubi.&rsquo; Abazinikele bakaJesu kufanele babonise ukudabuka kanye yekani ukudla ngalolo suku. Kuyaxaka ukugubha usuku njengomkhosi futhi ulubize ngokuthi 'uLwesihlanu Oluhle' njengokungathi usuku lwo buhle. Ngisho nalabo ababheka uJesu njengomkhaya wabo njengoNkulunkulu bahlanganyele emkhosini, beveza ukuntula kwabo ukuqonda ukubaluleka kukaJesu. Labo abamhlonipha ngokujulile uJesu kufanele babheke lolo suku &lsquo;njengoLwesihlanu Olubi.&rsquo; Abashumayeli bathwala isibopho sokufundisa abantu ngokubaluleka Kokubi NgoLwesihlanu nokungabakhuthazi ukuthi bawugubhe. Abantu ngabanye abehluleka ukuhlukanisa phakathi kosuku lokufa kanye nokuntuleka kosuku lokuzalwa ukuqonda ubukhulu bokuhlakanipha kukaNkulunkulu. Lapho inhloko yomndeni iyashona, wonke umndeni uyalila, futhi inhlonipho efanayo kufanele inikezwe lapho uJesu, okufanele ahlonishwe ngaphezu kwelunga lomndeni, liyashona. Ukubungaza Ukufa kukaJesu njengomkhosi ongenalo usizi kuyiphutha, uma sicabanga kanjalo kube usuku oluhle. UJesu wathi <strong>&ldquo;Noma ubani othanda umphefumulo wakhe uyise noma unina ngaphezu kwami akangifanele mina; noma ubani othanda indodana noma indodakazi yakhe ngaphezu kwami akangifanele.&rdquo; </strong>Lapho abantu belilela ukufa ilungu lomndeni kodwa ungakulileli ukufa kukaJesu futhi esikhundleni salokho uwugubhe njengomkhosi, bangawufanelekela kanjani uJesu? isihe? Ngakho-ke, ake sibhekisele kuLwesihlanu Oluhle ngokuthi 'uLwesihlanu Olubi' ukudumisa uJesu. Kuba isenzo senhlonipho kuJesu lapho lolo suku silubheka njengolubi, silile ngaphandle ukuyibungaza. Kungenjalo, <strong>sibonisa ukuthi siyamhlonipha uJesu ngamazwi ethu kuphela, hayi ezinhliziyweni zethu. </strong>Uma uhlonipha, thanda, khuleka, futhi uthandaze kuJesu, bese usakaza umbono weGood NgoLwesihlanu njengoLwesihlanu Olubi futhi usize wonke umuntu ukuthi aluqonde. Kunawo uzoba umkhohlisi weqiniso kaJesu. Lapho ulahla Okuhle NgoLwesihlanu, akukho okubi okwenzeka kuwe; kwenzeka izinto ezinhle kuphela.

</div></div>
<ion-row><ion-col class="ion-text-center">
Ngu<br>
I-Guru Kuphela Yezinkolo Ezintathu<br>
<b>ESri. ESri. ESri. Acharya Prabodhananda Yogeeswarlu</b><br><br>

Nakuba abantu abayinkulungwane besekela - amanga awakwazi abe iqiniso.<br>
Nakuba abantu abayinkulungwane bephika - iqiniso alikwazi abe amanga.
</ion-col></ion-row>
</span>`
},
{
chapterName: "Incwadi evela kumHindu",
chapterNumber: 9,
pageNumber: 149,
verse: ``,
meaning: ``,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem">
<div class="poemtext">
<i>Okokuqala, ukukhuleka ku-Swami…. </i>
  Jai Srirama! Igama lami nginguPittala Thirumalesha, oneminyaka engama-36, Isigodi saseNalgonda, esifundeni saseTelangana. Umsebenzi: Umsebenzi, uCaste: Mudiraju (Boya caste), Inkolo: Inkolo yamaHindu, ekaBaba umsebenzi: Umlimi wokuqala kamuva owadonsa urisho, umama umsebenzi: umthengisi wezithelo, Imfundo yami: <strong>M.Sc., B.Ed. (Izibalo).</strong>

  Mnumzane, ngibhala le ncwadi ngenhloso yami isingeniso esingokomoya sizokwenza okuthile okuhle kulo mphakathi. Ngemva kokufunda umbhalo wakho, <strong>&ldquo;Amagugu EbuNkulunkulu Besibili UmBhalo,&rdquo;</strong> ngangifuna ukubhala le ncwadi. Kubonakala sengathi ukubhala umbhalo weBhayibheli uyisenzo sobuqili kunazo zonke somHindu (Indhu) Swamiji. Abaningi bacabanga ukuthi iSwamiji ingabhala Bhagavad-Gita kodwa hhayi iBhayibheli. Sengikufundile eyakho imibhalo engcwele, iBhagavad-Gita, kanye neQuran. Manje nami nginakho wafunda ukuhlakanipha kweBhayibheli ngokubhala kwakho. waqonda ukuhlakanipha kwaphezulu emibhalweni emithathu ye zinkolo ezintathu ngawe. Ukwazi isimo samanje se mphakathini, ngiveza eminye yemibono yami ngezinhloso ezinhle ngale ncwadi.

  Umbhalo wokuqala engawufunda uthi <strong>&ldquo;Imfihlo YeBermuda Unxantathu.&rdquo; </strong>Ngalo mbhalo, ngafunda imfihlo yokuthi kungani izindiza nemikhumbi kuyanyamalala eBermuda Triangle. nginjalo ngiyajabula ukuqaphela leli qiniso eliyinqaba elalifana neHollywood imuvi. Bese ufunda umbhalo othi <strong>&ldquo;Izipoki - Bhutas (Okwangempela Izehlakalo)&rdquo; </strong>futhi ngathola ulwazi lwesayensi mayelana "umhlaba ongabonakali (ocashile)." Ngaphandle kwalokho, ngamangala kakhulu lapho ngiwayazi indlela uhulumeni kaNkulunkulu noMthetho Waphezulu ngisebenze, futhi ngibonga uNkulunkulu wami ngokwazi imfihlakalo enkulu kakhulu. Ibese ufunda imibhalo ethi <strong>&ldquo;Indaba Yeqiniso</strong><strong>Olifunayo&rdquo; </strong>kanye <strong>&ldquo;noSri Krishna God noma Bhagavan?&rdquo; </strong>Ngajabula kakhulu ukufunda imfihlo enkulu embhalweni othi &ldquo;Sri Krishna God noma Bhagavan?" Manje njengoba sengiyitholile indawo yokuphila kwami, ngiyajabula ukuthi ngivakashele ithempeli laseKrishna Prabodhashramamu, Chinna Podamala, futhi wakhonza iNkosi Krishna. Selokhu ngavakashela iPrabodhashramam ngoJulayi 2012, ngikhona ngijabule ngenjabulo nsuku zonke ngokumunca ukuhlakanipha okuvela kuwe Imibhalo engama-93 nezinkulumo eziyi-150.

  Ngemibhalo engcwele <strong>&ldquo;Amasiko Ethempeli (Afihliwe Amaqiniso),&rdquo;</strong> ngafunda ngokubaluleka kwamathempeli. Nginayo wathola incazelo yangempela yamasiko acindezelwe kusukela <strong>&ldquo;Indu Sampradayas (Amasiko).&rdquo; </strong>Kusuka umbhalo othi <strong>&ldquo;Mana Pandugalu (Imikhosi Yethu)&rdquo; </strong>Anginayo nje kuphela waqonda incazelo yegama elithi &lsquo;Pandu (fruit)&rsquo; ku-&ldquo;Panduga (festival)&rdquo; kodwa futhi waqonda injongo ebalulekile yemikhosi kanye ne inhloso yomcabango ohlelwe ngaphambili wabadala bethu. Njengoba ushilo kulokhu umbhalo, kuyiqiniso ngamaphesenti ayikhulu ukuthi owokuqala ongokomoya ukuthuthukiswa bese kuba ukuthuthukiswa komuntu siqu futhi kamuva kwezenhlalo intuthuko iyenzeka. Yonke imibhalo evela kuwe iyimayini yokuhlakanipha. Konke ukushumayela kuyingcebo ye-dharma. Eyakho amazwi awazuzisi nje abantu kuphela kodwa nakubo bonke abaphilayo izinto. Leli iqiniso engilikhulumayo ngemuva kokuzwana nalo iminyaka eyisithupha edlule.

  Ngadumala lapho inkolo yenu yamaHindu ithi amazwi ayinhlamba ngawe nkosi enkulu. Kodwa mina ukwabelana ngolwazi oluthile ngale ncwadi ukwenza wonke umuntu uyawazi amaqiniso.

  U-Thraitha Theorem Bhagavad-Gita udlulisele okwangempela umyalezo weNkosi Krishna. Imibhalo kaSwami <strong>&ldquo;Amazwi okuhlakanipha emBhalweni Wokugcina Waphezulu (amakhasi angu-704)&rdquo; </strong>kanye <strong>&ldquo;Nedayimane ku UmBhalo Wokugcina Waphezulu&rdquo; </strong>wenza umhlaba waqonda ukuhlakanipha kwaphezulu uGabriyeli (ILanga) akuthumele kuMprofethi Mohammed. Umbhalo weYogeeswarlu <strong>&ldquo;Amagugu ku I-Second Divine Scripture (amakhasi angu-352)&rdquo; </strong>yayidlulisela okwangempela umyalezo wamaVangeli kaJesu.

  Nasi isikhalo sami kongqondongqondo abancane inzondo engokwenkolo, amademoni enkolo angenasihawu, angaphelele gnanis abahlanya ngenkolo, izilo zezombusazwe ngubani abalazi inani le-ashram, abaprofethi bamanga abadukisayo umphakathi onotwayi bezinhlanga kanye nobuhlanya benkolo, ama-rationalists abangasazi isizathu, imiphakathi ethola iqiniso lokho abalazi iqiniso, nabadala abaphushayo umphakathi ungene enkolelo-ze usebenzisa amagama athi Nkulunkulu, uMphefumulo, ukukhonza, kanye nokuhlakanipha. Sicela ufunde okungenani umbhalo owodwa kaSwami ngokuphelele ukwazi ubukhulu be <strong>&ldquo;Thraitha Theorem&rdquo;</strong> futhi ukunakisise lokho elikushoyo. Asibheka elinye lamazwi kaSwami.

  <strong>&ldquo;Izinkolo azivunyelwe. Ama-castes awanangqondo. Konke ezintathu - IBhagavad-Gita, iBhayibheli, kanye Quran - kukhona izingxenye zombhalo ofanayo waphezulu. Uma umuzwa wakho uhamba ngale kwe-caste, ngokushesha ujoyine i-Prabodha Seva Samithi. UNkulunkulu ufuna ube gnani - Sri. ESri. ESri. Acharya Prabodhananda Yogeeswarlu&rdquo;</strong>

  I-Swamiji ayishongo amagama angenhla kuphela kodwa futhi yenziwe imishado phakathi kwezigaba nezinkolo. Naye washada omunye wesifazane weqembu. Ingabe inzondo engokwenkolo nobuthi ubhala ku-Swami enkulu kangaka? Madoda, ucabanga kanye ukuqonda.

  Imibhalo ka Swami idlulisa ukuhlakanipha kwangempela kweVemana izinkondlo. Basho incazelo yangempela yezinkondlo zefilosofi ka Veerabrahmam. I-Atmalinga Shatakam idlulisele ngokomoya ulwazi. Unikeze izimfihlo eziningi ezinkulu engaziwa emhlabeni kanye nolwazi lwaphezulu ukuthi inomthelela ekuchumeni okungokomoya kwabantu. Abaningi abangakholelwa kuNkulunkulu abaye babamba ukuhlakanipha emibhalweni yakhe engcwele baba amakholwa eqiniso. Ngisho neziwula zaphenduka ama-rationalists. Izimpumputhe amakholwa aba ososayensi abangokomoya kanye nesayensi sondela. Ngisho namaphekula aseshintshile aphenduka ama-gnanis.

  <strong>UmHindu owazi ukuhlakanipha kwakhe uyi-Indu yeqiniso (i-gnani yeqiniso).</strong>

  <strong>UmKristu owazi ukuhlakanipha kwakhe ungumKristu weqiniso (weqiniso okholwayo kaNkulunkulu).</strong>

  <strong>UmSulumane owazi ukuhlakanipha kwakhe ungumSulumane weqiniso (ngempela olalela uNkulunkulu).</strong>

  Imibhalo yakhe iqeda i-karma futhi ithethelele isono. Uma ubeka Umbhalo wakhe emzimbeni lapho unezinhlungu ngokuzinikela futhi inkolelo, izobambelela ngaphandle kokusekela ize ibhubhise i-karma eyabangela futhi inikeza impumuzo. Nakuba lokhu kungase kufike ngokumangazayo, kuyiqiniso elisobala elishiwo ngokusekelwe kokuhlangenwe nakho kwami.

  Kungemibhalo Yakhe umhlaba uze kuyo ukwazi iqiniso mayelana 'neBhagavan Ravana Brahma,' isimo sikaNkulunkulu eThraitha Yuga. Ngisho noSita Devi, ubani wonke umuntu uthi uyisisulu, akazange asole uRavana Brahma. Kungani ama-Aryans abhala iRamayana engakwazi ukusho iminyaka kaRavana Brahma ngesikhathi sokuthunjwa kukaSita? Uma lokhu umbuzo waphendulwa, izindaba ezifihliwe zokuqala ze Ramayana wayezophuma. U-Ravana Brahma uvakashele eSita Devi U-Ashokavana nonkosikazi uMadoda noMeghnaad, kodwa kungani kwakunjalo waveza njengendoda enonya? Nakuba Ravana asebekhulile UBrahma akazange ahambele i-swayamvara kaSita, akulona ihlazo lokho bhala ukuthi akakwazanga ukuphakamisa umnsalo kaShiva kuSita swayamvara? Ngenkathi ethatha uSita, indodakazi yakhe, ngaphandle ukumthinta embusweni wakhe eSri Lanka, ungabhala ngamanga ukuthi ubengumuntu ohahayo? Abanye abantu abanobugovu bahlelile bakha uzungu ngaye, bethi wamthatha ngokukhanuka; Kanjani kungenzeka yini lokhu ngokusekelwe kulokho okushilo ukuthi noma ubani wathinta uSita uzoshiswa afe? Okungenani okwamanje, lokhu umphakathi kufanele wazi iqiniso eRamayana. Amadodari UDevi, owayazi imfihlo yokuthi ukuhlupheka kukaSita, nokuba sesimweni somuntu kaBhagavan Ravana Brahma izophela maduze, wayevame ukutshela abantu bombuso wakhe ukuthi uRavana Brahma alethe uSita kubo Lanka enhlalakahleni ye Sita. Sifisa ukubona izithombe ze- omkhulu uSri Bhagavan Ravana Brahma noSrimati Mandodari I-Devi.

  Awunaqiniso ngiyazi ukuthi ungubani. Ungabeki imiyalezo engadingekile ku-Facebook naku-YouTube, kanye lapho uhlambalaza, uzoqongelela iminyaka ye-karma. Yenza ungalaleli uma ungadingi. Lapho ungazi incazelo ye-dharma nokuthi mangaki ama-dharma, ungabizi ama-gnanis ngenkulumo-mpikiswano kumabonakude womphakathi.

  I-Thraitha Theorem iyindinganiso yangempela. Lokhu kujwayelekile esetshenziswa ukukala izinga lenzondo engokwenkolo. Umhlaba uyokwenza ukwazi ukuthi kungakanani ukuhlakanipha ezinkolweni, nokuthi kanjani inzondo eningi ikhona ezinkolweni ngobuhlakani eThraitha Ithiyori. Ukuhlakanipha kuka-Thraitha Theorem kwembula kulo mhlaba ukuthi kanjani kungakanani ukuhlakanipha okukhona ezinkolweni, nenzondo engakanani lapho usezinkolweni. I-Prabodha Seva Samiti kanye nezinhlanu zayo ezinhlanu ngokuqinile kholwa ukuthi konke okwenzekayo kuzokwenzeka ngokukaNkulunkulu imvume.

  <strong>I-Prabodhashramam ukuphela kwenhlangano leyo kuletha ukukhula ngokomoya. </strong>Zonke ezinye izinhlangano ziyasebenza ukuthuthukisa ubuntu kanye nomphakathi ongcono. Kodwa wonke umuntu kufanele uqaphele ukuthi uma ukukhula ngokomoya akukwenzi kwenzeke, ubuntu kanye nokuthuthukiswa komphakathi ngeke kwenzeke.

  Ukuhlakanipha kwe-Yogeeswarlu akuna-caste nenkolo mahhala. Yingakho abantu bazo zonke izinkolo - amaHindu, amaSulumane, kanye AmaKristu - eze kuye ngokuvumelana futhi bayajabula ukwazi ukuhlakanipha kwangempela kwaphezulu. Njengoba uVeerabrahmam asho, ubuhlakani Bakhe bunjalo ukuhlanganisa zontathu izinkolo. Kusho uBrahmam ngesiKalagnanam (isiprofetho), <strong>&ldquo;Bonke onkulunkulu abakhulu (ama-devatas) bakhona Anandashramam.&rdquo; </strong>Ama-Devatas afika futhi akhuluma ngenjabulo yokufunda ukuhlakanipha kukayise. Ubuye wathi, <strong>&ldquo;Prabodhashramam inezinga eliphezulu lokuhlakanipha. Abaphakathi I-Prabodhashramam iqukethe izimfanelo zikaSomandla. Lokho uSomandla kwakungu-Ananda Guru kuphela. U-Ananda Guru unguGuru mina nawe futhi.&rdquo; </strong>Imilayezo enjalo yamagama akhulunywa ngayo UBrahmam ngokwakhe utholakala emibhalweni kaSwami. Kumele bamba ukuhlakanipha kukaNkulunkulu ngokukhalipha nangenkuthalo.

  Ingabe labo abangayifundi iBhagavad-Gita bangabasindisi I-dharma yamaHindu? Ingabe iziwula, abangazi nabulungisa emlandweni, basekele inkolo yobuHindu? Ungakwazi yini ukwakha elinganayo umphakathi ngaphandle kokwazi &ldquo;Imfihlo yokuqala&rdquo; kanye&ldquo;Imfihlo yendalo?&rdquo; Qaphela ubuhle emibhalweni ngokufunda ngesineke nangaphandle kwenzondo engokwenkolo. Uma uphatheke kabi, shiya. Awukho umthetho okufanele wonke umuntu awukholelwe yona. <strong>The Thraitha Siddantha imibhalo kanye nezimfundiso, </strong>okuyinto zizuzisa kakhulu esintwini futhi zinesayensi enengqondo futhi ukwazi okungokomoya futhi uveze izimfihlo <strong>zeBrahma, I-Karma, ne-Bhakti Yogams </strong>ngokuningiliziwe ne-Jeevatma, i-Atma kanye I-Paramatma, ibalulekile emphakathini wamanje.

  Izinhlangano - UNO, World Peace Council, Police Act, IPC, CrPC, Prison Acts, CBI, CBCID, Intelligence Reports, ACB, Human Rights Watch, Woman Rights, SC ST Atrocities Act, I-Indian Trusts Act, Umthetho WamaSulumane, Umthetho WamaKristu, Izenzo Zabasebenzi, I-Central Government GOs, I-State Government GOs, Ukhetho Ikhomishini, uMthethosisekelo waseNdiya, Izinkantolo zaseNdiya, uMthetho we-RTI, I-Information Technology Act 2000 - ikhona, empeleni, ngenxa inhlalakahle yabantu. Izikhungo zomoya zinesibopho ukutshela abantu ukuthi hlobo luni lokuhlakanipha olufanele inhlalakahle yabo. I-Prabodhashramam kanye nabasebenzisana nayo bathatha indawo yokuqala kulokho izikhungo ezinomthwalo wemfanelo. Ngaphezu kwakho konke, akumelwe sikukhohlwe lokho kukhona futhi <strong>&ldquo;UMthetho Waphezulu Nokuphatha Kwaphezulu.&rdquo;</strong>

  Ingqikithi yemibhalo emithathu yaphezulu iwukuchaza mayelana nemiphefumulo emithathu. Ukuphila ngaphandle kokuhlakanipha kukaNkulunkulu kuyize. UNkulunkulu wanika umuntu ukuphila ukuze azi ukuhlakanipha kukaNkulunkulu kuphela. Ukuhlakanipha kukaNkulunkulu kungaphezu kwesigaba nenkolo. I-Yogeeswarlu inikeze iqiniso incazelo yokuhlakanipha kweNkosi Krishna &lsquo;ngoNkulunkulu wokuqala umbhalo Bhagavad-Gita.&rsquo; Wasinika ukuhlakanipha kweQuran, okuyikhona weza kuMprofethi uMuhammad ngoGabriyeli, emibhalweni &lsquo;Amazwi Ahlakaniphile EmBhalweni Wokugcina Waphezulu&rsquo; kanye &lsquo;Nedayimane Elithi umBhalo Wokugcina Waphezulu.&rsquo; Wasitshela ukuhlakanipha kweVangeli likaJesu ngo &lsquo;Amagugu EmBhalweni Wesibili Waphezulu.&rsquo; Usinika okuwusizo ukuhlakanipha kwangempela kwaphezulu ngemibhalo nezimfundiso. Yazi ukuhlakanipha Akushilo futhi wembathe uPhawu lukaNkulunkulu futhi wemukele ukuthethelelwa kwezono. Uma ulalelisisa futhi uzilolonge, unjalo unenhlanhla. Uma ungalaleli, leyo karma yakho. Konke kuyikho okwenzeka ngokwentando kaNkulunkulu, futhi uNkulunkulu uyakwazi.

  <strong>AmaHindu kufanele azi ukuthi yimuphi uNkulunkulu okufanele amkhulekele.</strong>

  <strong>AmaSulumane adinga ukwazi ukuthi ngobani oAllah ababili (laba ababili abadali).</strong>

  <strong>AmaKristu kudingeka azi ukuthi obani la madodana amabili.</strong>

  Umuntu akalokothi abe nguNkulunkulu, kodwa uNkulunkulu angafika njengomuntu. Ukuze siqaphele uNkulunkulu osesimweni somuntu, kumelwe siqale sibe naye ukuhlakanipha kwakhe kithi. Ukuze sazi uNkulunkulu, sidinga ukwazi laba ababili izimiso ezashiwo abadala. Njengoba uVemana yogi eshilo izinkondlo zakhe kuqondwe ngezindlela eziyi-1000, futhi ngokufanayo, i-Thraitha Ukuhlakanipha kwe-theorem kungaqondwa ngezindlela ezingu-9000. Ngokusho ethi &ldquo;Shraddhavan labhate gnanam (Labo abanayo inzalo izozuza ukuhlakanipha)&rdquo;, labo abacabangayo futhi ongqondongqondo bangaqonda ubuhlakani bukaThraitha.

  Okungenani manje, wuyeke umcabango wesigaba nenkolo kanye wazi ukuhlakanipha kwangempela kwaphezulu. Uma ungazi manje, uzokwazi ungazi. Isikhathi Sifishane. Kwenze Manje.

  Nginikeza izimbali zephunga elimnandi ezinyaweni ze-Yogeeswarlu ukuze zisinike ukuhlakanipha kwaphezulu okwengeziwe. Nginikeza ukubingelela okungenamkhawulo ngakho konke okwami inhliziyo nomphefumulo wami wonke nengqondo yami.
</div></div>
<ion-row><ion-col class="ion-text-center">
Inceku Yakho Elalelayo <br>
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
   Amagugu Aphakathi
</div>
<div class="img1-title2">
UbuNkulunkulu besibili Umbhalo
</div>
<div class="img1-title3">
 (Ivangeli ku Thraitha Theorem)
</div>
<div class="img1-title4">
 Umbhali: Okuwukuphela kweGuru yezinkolo ezintathu (amaHindu, amaSulumane, amaKrestu), uMbusi Wombuso Kamoya, Umbhali wezincwadi ezingcwele ezingaphezu kwekhulu, u-Indu Gnana Dharma Pradata, Umlobi Omangalisayo, u-Adi Karta weTraita Doctrine
</div>
<div class="img1-title5">
Sri Sri Sri Acharya Prabodhananda Yogeeswarulu
</div>
</div>
</p>`
},
{
chapterName: "UHLU LWEZINHLOKO",
chapterNumber: 11,
pageNumber: 151,
verse: ``,
meaning: ``,
pageText: `
<ion-row>
<ion-col class="ion-text-center">
<b>UHLU LWEZINHLOKO</b></ion-col>
</ion-row>
<div class="poem">
<div class="poemtext">
<b>I-Achara Prakruti</b>: Izinto ezinhlanu ezingaguquki - Isibhakabhaka, Umoya, Umlilo, Amanzi Nomhlaba. Labo (Prakruti) abangenayo i-karma.Prapancha. I-Pancha Bhutas.

<b>I-Adharmas</b>: Baphikisana ne-dharmas. Badala i-karma enhle, i-karma embi, noma kokubili. I-Adharmas eshiwo ku-Bhagavad-Gita - ukufunda amaVedas, ukwenza iminikelo, ukwenza imihlatshelo (yajnas), izijeziso (tapas) etc.

<b>I-Agami karma</b>: Isono esisanda kufika kanye ne-punya kusukela ekuzalweni kuya ukufa. I-karma ezayo.

<b>U-Aham</b>: Ingxenye ngaphakathi komzimba kodwa hayi i-guna.

<b>Ama-Antahkaranams</b>: Izitho ezinhlanu zomzimba ezicashile - iJeeva (Jeevatma), UManas, uBuddhi, uChittam, no-Aham.

<b>Ukubhula Ngezinkanyezi</b>: Owazi ukuhlakanipha okungokomoya uyamazi omunye i-karma yomuntu ngokuhlakanipha kwakhe futhi iyamazisa. Ukuze ukwazi kudingeka iso lobuhlakani besikhathi esizayo. Lokho okwaziwa ngakho ukukhanya kokuhlakanipha.

<b>Atma: </b>Lowo ohlala nomuntu ofayo. Omunye okhona engaboli. Lowo osemizimbeni yonke ephilayo. I-Atma. Akshara purusha. Umphefumulo ongafi.

<b>Bhagavan: </b>Lowo ovela kuNkulunkulu. Owafika naye ulwazi luka Nkulunkulu uKristu, Svayambhu noma uMduduzi noma yedwa iNdodana ezelwe. Ummeli noma uMsizi. Isithunywa sikaNkulunkulu. Guru.

<b>UBuddhi: </b>Kuwukuhlakanipha emzimbeni, okuhlaziya izinzuzo kanye ububi besenzo.

<b>I-Chara Prakruti: </b>I-Prakruti eshintshayo. Jagath. Izidalwa eziphilayo. Chara Prakruti. Ingqikithi yezitho zomzimba kuyo yonke into ephilayo ingama 25.

<b>Igazi lesivumelwano: </b>Amandla okuhlakanipha. Ingqikithi yokuhlakanipha. Ukuhlakanipha kwa Nkulunkulu ngaphandle kwezibopho ze-karma.

<b>Ama-Devatas: </b>Abantu abangabonakali. Demi-onkulunkulu.

<b>I-Dharma Shastra: </b>Umbhalo one-dharmas (ukuhlakanipha). Imiyalelo ka Nkulunkulu. Brahma Vidya. Isayensi ephezulu.

<b>Dharmas: </b>Ukuhlakanipha kwaphezulu. Izimfundiso noma izimiso zaphezulu. Imiyalo. Ukulandela i-dharmas kuholela ekukhululweni ukuphila nokufa.

<b>Isipoki: </b>Umuntu ophila nomzimba ocashile. UDeveli noma idemoni.

<b>Jeevatma: </b>Umphefumulo ofayo emzimbeni. Kshara purusha noma Jeeva.

<b>Gnanendriyas: </b>Izitho ezinhlanu zezinzwa - iso, indlebe, ikhala, ulimi, kanye nesikhumba.

<b>UGnani: </b>Umuntu owazi ukuhlakanipha kwaphezulu nama dharmas. Brahma gnani.

<b>I-Karma Chakra: </b>Iqoqo lezingxenye eziyi 108. Ingxenye ngayinye kweziyi 12 ze Karma chakra inohlobo oluhlukile lwe karma. Uhlobo ngalunye lwe karma iphinde ihlukaniswe izingxenye eziyisishiyagalolunye. Izingxenye eziyishumi nambili zine 108 (12*9) izinhlobo ze-karma.

<b>I-Karma visarga: </b>Ukuhlukanisa i-karma ibe izingxenye ezincane.

<b>I-Karma Yogam: </b>Lapho i-Jeevatma ibona u-Aham emzimbeni wakhe futhi engalaleli u-Aham akushoyo, khona-ke akakutholi noma iyiphi i-karma. Yimpi kaJeeva ngokumelene no Aham.

<b>I-Karma Yogi: </b>Umuntu owazi ukuhlakanipha futhi owenza i-Karma I-Yogam.

<b>I-Karma: </b>Isono esingabonakali kanye ne punya.

<b>I-Karmendriyas: </b>Izandla, imilenze, umlomo, ididi nesitho socansi.

<b>I-Manas: </b>Isebenza njengokuxhumana phakathi kobuchopho kanye izitho zomzimba. Ikhumbula futhi ikhumbule izinto.

<b>Moksham: </b>Ukukhululwa ekuzalweni, ekufeni, empilweni, ekuhluphekeni, etc. Ubunye noNkulunkulu. Paraloka, Mukti noma Insindiso. Inkululeko.

<b>I-Paramatma: </b>Okuhlukile ku-Atma. Baba ngokuphelele izidalwa eziphilayo kanye ne Pancha Bhutas. UNkulunkulu, uMoya oNgcwele, Allah, Purushottama, Uttama Purusha noma uyise paraloka. Umphefumulo ophakeme.

<b>I-Prakruti: </b>Inhlanganisela ye-Chara Prakruti ne Achara Prakruti. Imvelo.

<b>I-Prarabdha karma: </b>I-karma enqunywe ngaphambili. Lokhu kwenzeka ku lempilo kusukela ekuzalweni kuze kube sekufeni. I-Prarabdha karma inqunywa nini umuntu uyazalwa.

<b>Phunya: </b>Kuvela ezenzweni ezinhle. Lokho okubangelayo ubumnandi empilweni.

<b>I-Purusha: </b>Iphathelene neParamatma kunoma yisiphi isidalwa esiphilayo.

<b>I-Sanchita karma: </b>I-karma yanqwabelana njengenqwaba ngemva ukuthola i-karma kukho konke ukuzalwa kubizwa ngokuthi i-sanchita karma.

<b>Isono: </b>Kuvela ezenzweni ezimbi. Kubangela ubunzima nosizi.

<b>I-Tanmatras: </b>Amandla aphumayo (ukubona, ukuzwa, ukuhogela, ukunambitha, kanye nokuthinta) okuxhumene nezitho zenzwa.

<b>Upadesa: </b>Ukuthola umlilo wokuhlakanipha njengesisa. Izwe okuyilo hayi izwe (Wonke umuntu onokuhlakanipha iso kumele abone). Ukuhlakanipha amandla, Paramatma. Ubhapathizo. Ukuqala kokuhlakanipha.

<b>I-Yogi: </b>Lowo ose Yogam. Umenzi we Yogam. Umuntu othi uyazi ukuhlakanipha kwaphezulu kanye nemikhuba dharmas.
</div>
</div>`
},
{
chapterName: "Ividiyo",
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

    { title: "Indlela kaNkulunkulu", component: 0, chapterNumber: 0, subs: null, icon: 'information' },
    { title: 'Imfihlo Yendalo', component: 1, chapterNumber: 1, subs: null, icon: 'information' },
    {
      title: 'IVangeli likaMathewu', component: null, chapterNumber: 2, icon: 'book',
      subs: [
        {
          shloka: "(3:7) Nina nzalo yezinyoka! Ubani owakuxwayisa ukuba ubalekele ulaka oluzayo?",
          component: 2,
          subs: null
        },
        {
          shloka: "(3:11) Mina nginibhapathiza ngamanzi okushintsha imana (ingqondo). Kodwa emva kwami kuza omunye onamandla amakhulu kunami, engingafanele ukuthwala izimbadada zami. Uzokwenza anibhapathize ngoMoya oNgcwele nangomlilo.",
          component: 3,
          subs: null
        },
        {
          shloka: "(3:12) Imfoloko Yakhe yokwela isesandleni Sakhe, futhi Uyokwenza hlambulula isibuya Sakhe, ubuthela amabele akhe phakathi isibaya nokushiswa kwamakhoba ngokungacimekiyo umlilo.",
          component: 4,
          subs: null
        },
        {
          shloka: "(3:16) Ngokushesha nje lapho uJesu ebhapathizwa, waphuma emanzini. Ngaso leso sikhathi izulu lavuleka, futhi Wabona uMoya kaNkulunkulu wehla njengejuba futhi ehlela kuYe.",
          component: 5,
          subs: null
        },
        {
          shloka: "(3:17) Kwavela izwi ezulwini, lathi: “Lo uyindodana yami; engimthandayo; naye, ngiyajabula.”",
          component: 5,
          subs: null
        },
        {
          shloka: "(4:10) UJesu wathi kuye: Suka kimi, Sathane; Ngoba kulotshiwe ukuthi: Wokhuleka eNkosini uNkulunkulu wakho, umkhonze kuphela.”",
          component: 6,
          subs: null
        },
        {
          shloka: "(5:10) Babusisiwe abashushiswa ngenxa lokulunga (ukuhlakanipha), ngoba umbuso ungowabo we paraloka. ",
          component: 7,
          subs: null
        },
        {
          shloka: "(5:17) Ningacabangi ukuthi ngize ukuchitha uMthetho (Dharma Shastra) noma abaProfethi; angizange ngize aziqede kodwa azigcwalise.",
          component: 8,
          subs: null
        },
        {
          shloka: "(5:18) Ngokuba ngiqinisile ngithi kini: Kuze kudlule izulu nomhlaba, hhayi uhlamvu oluncane kunazo zonke, hhayi nokushaywa okuncane kwepeni, uzonyamalala nganoma iyiphi indlela eMthethweni (Dharma Shastra) kuze kube yilapho konke sekufeziwe.",
          component: 9,
          subs: null
        },
        {
          shloka: "(5:19) Ngakho-ke, noma ubani obeka eceleni omunye we emincane yale miyalo, afundise abanye kanjalo uyakuthiwa omncinyane embusweni we paraloka, kodwa loba ngubani ozenzayo lezifundisayo imiyalo iyothiwa mikhulu embusweni ka i-paraloka.",
          component: 10,

          subs: null
        },
        {
          shloka: "(5:20) Ngoba ngithi kini ngaphandle kokuba ukulunga kwenu udlula owabaFarisi nabafundisi umthetho, aniyikungena embusweni ka i-paraloka.",
          component: 11,
          subs: null
        },
        {
          shloka: "(5:28) Kodwa ngiyanitshela ukuthi noma ubani obheka owesifazane ngokukhanuka usephingile naye phakathi inhliziyo yakhe.",
          component: 12,
          subs: null
        },
        {
          shloka: "(5:29) Uma iso lakho lokunene likukhubekisa, likhiphe; awukhiphe awulahle. Kungcono kuwe ukulahlekelwa eyodwa ingxenye yomzimba wakho kunokuba wonke umzimba wakho ube uphonswe esihogweni.",
          component: 13,

          subs: null
        },
        {
          shloka: "(5:30) Futhi uma isandla sakho sokunene sikukhubekisa e, yinqume, uyilahle. Kungcono ukuthi ulahlekelwe sinye somzimba wakho kunokuba wonke umzimba wakho uhambe esihogweni.",
          component: 13,

          subs: null
        },
        {
          shloka: "(6:3) Kodwa lapho wenza i-dharma, ungavumeli kwesokunxele sakho isandla sakho sazi esikwenzayo esokunene.",
          component: 14,

          subs: null
        },
        {
          shloka: "(6:4) Ukuze ukupha kwakho kube ngasese. Bese eyakho ubaba obona okwenziwa ngasese uyovuza wena.",
          component: 14,

          subs: null
        },
        {
          shloka: "(6:6) Kodwa nxa ukhuleka, ngena ekamelweni lakho, ulivale; emnyango, nikhuleke kuYihlo ongabonwayo. Khona-ke uyihlo obona okwenziwa ngasese uzokubona ukuklomelisa.",
          component: 15,

          subs: null
        },
        {
          shloka: "(6:7) Lapho nithandaza, ningaqhubeki nibhibhidla kanjalo abezizwe, ngokuba bacabanga ukuthi bayakuzwiwa ngenxa yakho amazwi abo amaningi.",
          component: 16,

          subs: null
        },
        {
          shloka: "(6:8) Ningafani nabo, ngokuba uyihlo uyakwazi; udinga ngaphambi kokuthi umcele.",
          component: 16,

          subs: null
        },
        {
          shloka: "(7:7) Buzani futhi niyophiwa; funa futhi uzothola; Qoqoza kanye nomnyango kuzovulelwa.",
          component: 18,
          subs: null
        },
        {
          shloka: "(7:8) Kuwo wonke umuntu ocelayo uyamukela; lowo o Ifuna ukuthola; nakulowo ongqongqozayo, umnyango uzokwazi kuvulwe.",
          component: 18,
          subs: null
        },
        {
          shloka: "(7:13) Ngenani ngesango elincane. Ngokuba ububanzi buyisihluthulelo isango futhi ibanzi indlela eholela ekubhujisweni; baningi abangena ngalo.",
          component: 17,
          subs: null
        },
        {
          shloka: "(7:14) Kodwa isango lincane futhi liwumngcingo indlela leyo kuholela ekuphileni, futhi bambalwa kuphela abayitholayo.",
          component: 17,
          subs: null
        },

        {
          shloka: "(7:15) Qaphela abaprofethi bamanga. Beza kuwe ezembathweni zezimvu, kodwa ngaphakathi balolaka izimpisi.",
          component: 19,
          subs: null
        },
        {
          shloka: "(7:21) Akubona bonke abathi kimi, ‘Nkosi, Nkosi,’ abayokwenza ngena embusweni weparaloka, kodwa lowo kuphela owenza intando kaBaba oseparaloka.",
          component: 20,
          subs: null
        },
        {
          shloka: "(7:22) Abaningi bayokuthi kimi ngalolo suku, ‘Nkosi, Nkosi, yenze asiprofethi ngegama lakho nangegama lakho siqhube sikhipha amademoni, senze amaningi ngegama lakho izimangaliso?",
          component: 21,
          subs: null
        },
        {
          shloka: "(7:23) Khona-ke ngizobatshela ngokucacile, ‘Angizange nginazi. sukani kimi nina benzi bokubi!’",
          component: 21,
          subs: null
        },
        {
          shloka: "(8:22) UJesu wamtshela, 'Ngilandele, bese kubafile ukungcwaba abafa babo. '",
          component: 22,

          subs: null
        },
        {
          shloka: "(9:12) Lapho ezwa lokhu, uJesu wathi, 'Akuyena ophilile abadinga udokotela, kepha abagulayo. '",
          component: 23,

          subs: null
        },
        {
          shloka: "(9:13) Ngoba angizanga ukubiza olungile, kepha Izoni.",
          component: 23,

          subs: null
        },
        {
          shloka: "(8:23) Wabe esengena esikebheni kanye nabafundi bakhe wamlandela.8-23. Then he got into the boat... ",
          component: 24,
          subs: null
        },
        {
          shloka: "(8:24) Ngokuphazima kwengqondo kwaqhamuka isivunguvungu esithukuthele echibini, Ukuze amagagasi akhukhule phezu kwesikebhe. Kepha uJesu wayekhona ukulala.",
          component: 24,
          subs: null
        },
        {
          shloka: "(8:25) Abafundi baya bamvusa, bathi: 'Nkosi, Sisindise! Sizominza!'",
          component: 24,
          subs: null
        },
        {
          shloka: "(8:26) Waphendula wathi: 'Wena nokholo oluncane, kungani unjalo kanjalo wesaba?' Wabe esesukuma wakhuza imimoya futhi Amagagasi, futhi kwakuzolile ngokuphelele.",
          component: 24,
          subs: null
        },
        {
          shloka: "(9:6) Ngifuna wazi ukuthi iNdodana yomuntu inayo igunya emhlabeni lokuthethelela izono. Ngakho-ke, wathi ku ndoda ekhubazekile, 'vuka, thatha umati wakho uhambe uye ekhaya.' Uwesilisa wasukuma waya ekhaya.",
          component: 25,

          subs: null
        },
        {
          shloka: "(10:20) Ngoba ngeke kube ukhuluma, kepha umoya we Uyihlo ekhuluma ngawe.",
          component: 26,

          subs: null
        },
        {
          shloka: "(10:30) Ngisho nezinwele zekhanda lakho konke kubaliwe.",
          component: 27,

          subs: null
        },
        {
          shloka: "(10:34) Ungasho ukuthi sengize ukuletha ukuthula emhlabeni. Angizelanga ukuzoletha ukuthula, kepha a inkemba.",
          component: 28,

          subs: null
        },
        {
          shloka: "(10:35) Ngoba ngizele 'umuntu ngokumelene naye Ubaba, indodakazi emelene nonina, indodakazi Umthetho ngokumelene noninazala wakhe.",
          component: 28,

          subs: null
        },
        {
          shloka: "(10:36) Izitha zomuntu kuzoba amalungu akhe Ungumnikazi wendlu.",
          component: 28,

          subs: null
        },
        {
          shloka: "(10:37) Noma ngubani othanda uyise noma umama wake waba ngaphezulu kunami ukungangifanele; noma ngubani othanda indodana noma indodakazi engaphezu kwami ayingifanele.",
          component: 29,
          subs: null
        },
        {
          shloka: "(10:38) Noma ngubani ongathathi isiphambano sawo futhi ngilandela angingifanele.",
          component: 30,
          subs: null
        },
        {
          shloka: "(10:40) Noma ngubani otholile uyamukela, futhi noma ngubani ongemukelayo ethola lowo othunyelwe mina.",
          component: 31,
          subs: null
        },
        {
          shloka: "(11:9) Uphume wabonani? Umprofethi? Yebo, ngiyasho Wena, futhi (ngikhona) ngaphezu komprofethi.",
          component: 32,
          subs: null
        },
        {
          shloka: "(11:28) Wozani kimi, nina nonke enikhathele futhi Sisindwa, futhi ngizokunika ukuphumula.",
          component: 33,
          subs: null
        },
        {
          shloka: "(12:17) Lokhu bekungukufeza lokho okwakhulunywa ngayo umprofethi u-Isaya.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:18) Nansi inceku yami engiyikhethile, Engikuthandayo, engijabulisa engijabulisa ngakho; Ngizofaka umoya wami yena.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:19) Uzomemezela ubulungiswa (ukuhlakanipha) ku izizwe; Ngeke axabane noma amemeze; akekho ozozwa izwi lakhe emigwaqweni.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:20) Umhlanga olimele ungeke aphule, futhi u-wick oshayayo ngeke aphume, aze aze ukuletha ubulungiswa (ukuhlakanipha) kuya ekunqobeni.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:21) Ngegama lakhe izizwe zizobeka ithemba lazo.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:31) Ngakho-ke, ngithi kuwe, zonke izinhlobo zesono nokunyundela kungakwazi Uxolelwe, kepha ukuhlambalaza umoya (Atma) ngeke uthethelelwe.",
          component: 35,
          subs: null
        },
        {
          shloka: "(12:32) Noma ngubani okhuluma izwi ngokumelene nendodana ka Umuntu uzothethelelwa, kepha noma ngubani okhuluma ngokumelene UMoya oNgcwele ngeke uthethelelwe, kungaba kulo nyaka (yuga) noma eminyakeni yobudala (Yuga) ezayo.",
          component: 36,

          subs: null
        },
        {
          shloka: "(12:36) Kepha ngithi kuwe wonke umuntu kuzofanele anikeze a akhawunti ngosuku lokwahlulela kuwo wonke amagama angenalutho bakhulumile.",
          component: 37,
          subs: null
        },
        {
          shloka: "(12:37) Ngoba ngamazwi akho uzotholwa, futhi Amagama akho uzolahlwa.",
          component: 37,
          subs: null
        },
        {
          shloka: "(12:40) Ngoba njengoba uJona ayesezinsuku ezintathu nobusuku obuthathu Isisu senhlanzi enkulu, kanjalo neNdodana yomuntu iyoba ngabathathu izinsuku nobusuku obuthathu enhliziyweni yomhlaba.",
          component: 38,

          subs: null
        },
        {
          shloka: "(13:13) Yize bebona, ababoni; nokho Ukuzwa, abazwayo noma baqonde.",
          component: 39,
          subs: null
        },
        {
          shloka: "(13:14) Kubo kugcwaliseka isiprofetho se-IUSaiya: Wena uzohlala ezwa kodwa angalokothi aqonde; uzokwenza kanjalo hlala njalo kodwa ungalokothi ubone.",
          component: 39,
          subs: null
        },
        {
          shloka: "(13:15) Ukuze inhliziyo yale nto isibizelwe; Azizwa nezindlebe zabo, futhi zivale amehlo abo. Ngaphandle kwalokho, bangase babone ngamehlo abo, Yizwa ngezindlebe zabo, uqonde ngezinhliziyo zabo, Futhi phenduka, futhi ngangibaphilisa.",
          component: 39,
          subs: null
        },
        {
          shloka: "(15:7) Nina bazenzisi! U-Isaya wayeqinisile lapho yena waprofeta ngawe.",
          component: 40,
          subs: null
        },
        {
          shloka: "(15:8) Laba bantu bangihlonipha ngezindebe zabo, kodwa babo izinhliziyo zikude nami.",
          component: 40,
          subs: null
        },
        {
          shloka: "(15:9) Bangikhonza ngeze; izimfundiso zabo imithetho yabantu nje.",
          component: 40,
          subs: null
        },
        {
          shloka: "(15:11) Okungena emlonyeni womuntu akukwenzi zingcolise, kepha okuphuma emlonyeni wazo, ukuthi yilokho okungcolisayo.",
          component: 41,
          subs: null
        },
        {
          shloka: "(15:12) Kube sekufika abafundi kuye, bambuza bathi: 'Yenza Uyazi ukuthi abaFarisi bakhungathekile lapho Bezwa lokhu? '",
          component: 42,
          subs: null
        },
        {
          shloka: "(15:13) Waphendula wathi, 'Zonke izitshalo ezazisezulwini Ubaba akakatshalanga uzodonswa yizimpande. '",
          component: 42,
          subs: null
        },
        {
          shloka: "(15:14) Bayeke; Bangabaqondisi abayizimpumputhe. Uma izimpumputhe zihola izimpumputhe, zombili zizowela emgodini.",
          component: 43,
          subs: null
        },
        {
          shloka: "(16:21) Kulesosikhathi kuJesu waqala ukuchaza okwakhe abafundi ukuthi kumele aye eJerusalema futhi ahlupheke izinto eziningi ezandleni zabadala, induna abapristi, kanye nabafundisi bomthetho, nokuthi kufanele Ukubulawa kwathi ngosuku lwesithathu kuvuselelwa empilweni. (Okokuqala Isikhathi)",
          component: 44,
          subs: null
        },
        {
          shloka: "(16:22) UPhetro wamthatha eceleni waqala ukumkhuza. 'Qha, Nkosi!' uthe. 'Lokhu ngeke kwenzekele Wena! '",
          component: 44,
          subs: null
        },
        {
          shloka: "(17:22) Lapho behlangene eGalile, wathi kuyo zona, 'iNdodana yomuntu izohanjiswa ku izandla zabantu. '",
          component: 44,
          subs: null
        },
        {
          shloka: "(17:23) Bazakumbulala, nangosuku lwesithathu ukhuliswe empilweni. 'Futhi abafundi bagcwala usizi. (Okwesibili)",
          component: 44,
          subs: null
        },
        {
          shloka: "(19:23) Khona-ke uJesu wathi kubafundi bakhe: 'Ngiqinisile ngithi kini; Kunzima kothile ocebile ukungena eMbusweni we-paraloka.",
          component: 45,
          subs: null
        },
        {
          shloka: "(19:24) Futhi, ngithi kuwe, kulula ukuthi ikamela lihambe ngokusebenzisa iso lenaliti kunomuntu onjalo Ucebile ukungena embusweni kaNkulunkulu.",
          component: 45,
          subs: null
        },
        {
          shloka: "(20:17) Manje uJesu wayekhuphukela eJerusalema. Use Wathatha eceleni, wathatha abayishumi nambili eceleni wathi kubo.",
          component: 44,
          subs: null
        },
        {
          shloka: "(20:18) We wenyukela eJerusalema, nendodana ka Umuntu uzokhululwa kubaphristi abakhulu naku abafundisi boMthetho. Bazomlahla ngokufa.",
          component: 44,
          subs: null
        },
        {
          shloka: "(20:19) Bazomnika abeZizwe ukuba babe kugcotshwe futhi kushayelwe futhi kubethelwe. Ngosuku lwesithathu yena uzovuselwa empilweni!  (Okwesithathu)",
          component: 44,
          subs: null
        },
        {
          shloka: "(22:36) Mfundisi, okuwumyalo omkhulu kunayo yonke Emthethweni (Dharma Shastra)?",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:37) UJesu waphendula: Thandani uJehova uNkulunkulu wakho ngakho konke inhliziyo yakho nangayo yonke imiphefumulo yakho nangayo yonke eyakho ingqondo. ",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:38) Lo ngumyalo wokuqala nowokuqala omkhulu.",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:39) Futhi owesibili unjengokuthi: 'Thanda umakhelwane wakho njengoba ngokwakho. '",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:40) Wonke umthetho nabaprofethi balenga kulezi ezimbili imiyalo.",
          component: 46,
          subs: null
        },
        {
          shloka: "(23:8) Kepha akufanele ubizwa ngokuthi 'Rabi,' kuwe ube nothisha oyedwa, futhi nina ningabafowethu.",
          component: 47,
          subs: null
        },
        {
          shloka: "(23:9) Futhi ungabizi muntu kuyise emhlabeni, 'ngawe babe nobaba oyedwa, futhi usebaphathekayo.",
          component: 47,
          subs: null
        },
        {
          shloka: "(23:10) Futhi futhi awubizwa ngokuthi abafundisi, kuwe Unomfundisi oyedwa, uMesiya.",
          component: 47,
          subs: null
        },
        {
          shloka: "(23:15) 'Maye kuwe, othisha bomthetho nabaFarisi, Nina bazenzisi! Uhamba phezu komhlaba nolwandle ukunqoba a ukuguqula okukodwa, nalapho usuphumelele, wena Zenzele ingane ephindwe kabili yesihogo njengoba unjalo.",
          component: 48,
          subs: null
        },
        {
          shloka: "(24:35) Isibhakabhaka nomhlaba kuzodlula, kepha amazwi ami azovuma ungalokothi udlule.",
          component: 49,
          subs: null
        },
        {
          shloka: "(24:42) Ngakho-ke, hlala ubukele, ngoba awukwenzi yazini ukuthi iNkosi yenu izofika ngaluphi usuku.",
          component: 50,
          subs: null
        },
        {
          shloka: "(26:26) Ngenkathi bedla, uJesu wathatha isinkwa, futhi lapho ebonge, wayiphula wayinika yona Abafundi bakhe, bathi: 'Thatha udle; Lo mzimba wami. '",
          component: 51,
          subs: null
        },
        {
          shloka: "(26:27) Wabe esethatha inkomishi, kwathi lapho enikele Ngiyabonga, Wabanika, bathi, 'Phuzani kuso, konke kuwe.",
          component: 51,
          subs: null
        },
        {
          shloka: "(26: 28) Leli yigazi lami lesivumelwano (ukuhlakanipha kukaNkulunkulu ngaphandle kwezibopho zokungazi), okukhona wathululela abaningi ukuze intethelelo yezono.",
          component: 51,
          subs: null
        },
        {
          shloka: "(28:18) Khona-ke uJesu weza kubo wathi: 'Bonke igunya efenina nasemhlabeni linikezwe mina.",
          component: 52,
          subs: null
        },
        {
          shloka: "(28:19) Ngakho-ke, hambani nifundise zonke izizwe. bababhapathiza egameni likaYise nowe Indodana nangoMoya oNgcwele.",
          component: 53,
          subs: null
        },
        {
          shloka: "(28:20) Bafundise ukuba balalele konke enginakho uyakuyala. Futhi impela, nginawe njalo, ukuze ukuphela kweminyaka yobudala (Yuga).",
          component: 53,
          subs: null
        },

      ]
    },
    {
      title: 'IVangeli likaMarku', component: null, chapterNumber: 3, icon: 'book',
      subs: [
        {
          shloka: "(2:19) Izimenywa zoMyeni zingashesha kanjani lapho Unabo? Ngeke, isikhathi eside njengathi banaye nabo.",
          component: 54,
          subs: null
        },
        {
          shloka: "(2:20) Kepha isikhathi siyofika lapho umkhwenyana ethanda Kuthathwe kubo, futhi ngalolo suku bayozila.",
          component: 54,
          subs: null
        },
        {
          shloka: "(4:38) UJesu wayesemuva, elele emjuka. Le khasi abafundi bamvusa, bathi kuye: 'Mfundisi, musani Unakekela uma siminza? '",
          component: 55,
          subs: null
        },
        {
          shloka: "(4:39) Wasukuma, wakhuza umoya, wathi ku Amagagasi, 'ethule! Yiba! 'Khona-ke umoya wawufa phansi Kwakuzolile ngokuphelele.",
          component: 55,
          subs: null
        },
        {
          shloka: "(5:38) Lapho befika ekhaya lesinagoge umholi, uJesu wabona isiyaluyalu, nabantu abakhala futhi ekhala kakhulu.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:39) Wangena wathi kubo: 'Okwenza konke lokhu Isiphithiphithi kanye nokukhala? Ingane ayifile kepha ulele. '",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:40) Kepha bamhleka usulu. Ngemuva kokuba ababeke bonke ukuphuma, wathatha uyise nonina wengane kanye nonina abafundi ababenaye bangena lapho ingane yayikhona.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:41) Wamthatha ngesandla wathi kuye: 'Talitha Koum! ' (okusho ukuthi 'ntombazane encane, ngithi kuwe, vuka!').",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:42) Ngokushesha le ntombazane yasukuma yaqala ukuhamba azungeze (wayeneminyaka eyishumi nambili). Kulokhu babekhona emangele ngokuphelele.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:43) Wanikeza ama-oda aqinile ukuba angavumeli muntu azi ngalokhu futhi wabatshela ukuthi bamnikeze okuthile abangakudla.",
          component: 56,
          subs: null
        },
        {
          shloka: "(7:15) Lutho ngaphandle komuntu ongawangcolisa ngalo ukuya kubo.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:16) Esikhundleni salokho, yilokho okuphuma kumuntu ukuthi uyamngcolisa.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:17) Ngemuva kokuba eseshiye isixuku wangena indlu, abafundi bakhe bambuza ngalo mfanekiso.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:18) 'Ingabe uthambile kangaka?' ebuza. 'Awukuboni lokho akukho lutho olungena umuntu kusuka ngaphandle olungaphandle zingcolise?",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:19) Ngoba ayingeni enhliziyweni yabo kepha baye kwabo isisu, bese uphuma emzimbeni. '",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:20) Waqhubeka: 'Okuphuma kumuntu yilokho uyamngcolisa.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:21) Ngoba kuvela ngaphakathi, enhliziyweni yomuntu, ukuthi Imicabango emibi yaphela - ukweba okubi, ukweba, ukubulala,",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:22) Ukuphinga, ukuhaha, ububi, inkohliso, amanyala, umona, Ukunyundela, ukuzikhukhumeza, nobuwula.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:23) Zonke lezi zinto zobubi zivela ngaphakathi futhi zingcolisa a umuntu.",
          component: 57,
          subs: null
        },
        {
          shloka: "(3:35) Noma ngubani owenza intando kaNkulunkulu ungumfowethu nodadewethu nomama.",
          component: 58,
          subs: null
        },
        {
          shloka: "(4:17) Kepha njengoba bengenampande, bagcina kuphela a isikhathi esifushane. Lapho kuvela ubunzima noma ukushushiswa Ngenxa yeZwi, ngokushesha bawa.",
          component: 59,
          subs: null
        },
        {
          shloka: "(4:21) Wathi kubo: 'Uyakubeka isibani ukuze usibeke phansi Ngaphansi kwesitsha noma embhedeni? Esikhundleni salokho, awukubeki ukuma kwalo?",
          component: 60,
          subs: null
        },
        {
          shloka: "(4:22) Noma yini efihliwe kuye kwenziwa ukuthi ivezwe, futhi noma yini efihliwe yenzelwe ukukhishwa kuvulekile.",
          component: 60,
          subs: null
        },
        {
          shloka: "(6:4) UJesu wathi kubo: 'Umprofethi akwenzi Hlonipha ngaphandle kwedolobha lakubo, phakathi kwezihlobo zakhe futhi ekhaya lakhe. '",
          component: 61,
          subs: null
        },
        {
          shloka: "(8:38) Uma umuntu enamahloni ngami namazwi ami kulokhu Isizukulwane esiphingayo nesona, iNdodana yomuntu intando babe namahloni ngabo lapho efika kuYise Udumo ngezingelosi ezingcwele.",
          component: 62,

          subs: null
        },

        {
          shloka: `(9:7) Khona-ke kwavela ifu labasibekela, futhi kwavela izwi efwini, lithi: “Lo yiNdodana yami engiyiyo uthando. Mlaleleni!”`,
          component: 63,

          subs: null
        },
        {
          shloka: `(10:17) Njengoba uJesu eqala indlela yakhe, indoda ethile yagijimela kuye wawa ngamadolo phambi kwakhe. "Mfundisi omuhle" wabuza: “Yini okufanele ngiyenze ukuze ngidle ifa lokuphila okuphakade na?”`,
          component: 64,

          subs: null
        },
        {
          shloka: `(10:18) “Kungani ungibiza ngokuthi ngimuhle?” UJesu waphendula. “Akakho omuhle,ngaphandle kukaNkulunkulu yedwa.`,
          component: 64,

          subs: null
        },
        {
          shloka: `(16:15) Wathi kubo: “Hambani niye ezweni lonke shumayelani ivangeli kuyo yonke indalo.`,
          component: 65,
          subs: null
        },
        {
          shloka: `16:16) Okholwayo abhapathizwe uyakusindiswa; kodwa ongakholwayo uzalahlwa.`,
          component: 65,
          subs: null
        }

      ]
    },
    {
      title: 'IVangeli likaLuka', component: null, chapterNumber: 4, icon: 'book',
      subs: [

        {
          shloka: `(2:49) “Beningifunelani na?” wabuza. “Beningazi yini ukuthi kufanele ngibe semhlanganweni kaBaba na?”`,
          component: 66,
          subs: null
        },
        {
          shloka: `(11:37) Njengoba uJesu ekhuluma, omunye wabaFarisi wammemela ekhaya ukuze adle. Ngakho, wangena wathatha indawo yakhe etafuleni.`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:38) Umninimzi wakhe wamangala lapho ebona ehlala phansi udle ungakagezi izandla kuqala umkhosi odingwa isiko lamaJuda.`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:39) Khona-ke iNkosi yathi kuye: “Nina baFarisi qaphela kakhulu ukuhlanza ingaphandle lendebe nesitsha, kodwa ngaphakathi ungcolile—ugcwele ukuhaha kanye ububi!`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:40) Ziwula! UNkulunkulu akawenzanga yini ingaphakathi nengaphakathi ngaphandle?`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:41) Ngakho, hlanza ingaphakathi ngokunikeza izipho (dharmas) ku ompofu, futhi uyakuba ohlanzekile yonke indawo.`,
          component: 67,
          subs: null
        },
        {
          shloka: `(12:4) Ngithi kini, bangane bami: Ningabesabi labo ababulala umzimba, emva kwalokho bangabi nakwenza okunye.`,
          component: 68,

          subs: null
        },
        {
          shloka: `(12:5) Kodwa ngizonibonisa okufanele nesabe: Yesabani lowo othi esebulewe umzimba wakho unaye igunya lokukuphonsa esihogweni. Yebo, ngithi kini: Yesabani yena.`,
          component: 68,

          subs: null
        },
        {
          shloka: `12:25) Yimuphi kini ngokukhathazeka anganezela ekukhuleni kwakhe ingalo eyodwa?`,
          component: 69,

          subs: null
        },
        {
          shloka: "(12:33) Thengisani ngempahla yenu niyinike aba mpofu. Ziphekeleni izikhwama ezingagqoki out, umcebo paraloka ongasoze wehluleka, lapho alikho isela elingasondeli, alinanundu elichithayo.",
          component: 70,
          subs: null
        },
        {
          shloka: "(12:34) Ngokuba lapho kukhona ingcebo yakho, kulapho inhliziyo yakho kuzoba njalo.",
          component: 70,
          subs: null
        },
        {
          shloka: "(12:49) Ngize ukuletha umlilo emhlabeni, futhi kanjani Sengathi ngabe sekubasiwe.",
          component: 71,
          subs: null
        },
        {
          shloka: "(12:51) Ingabe nicabanga ukuthi ngizele ukuletha ukuthula emhlabeni Qha, ngithi kini, kodwa ukwahlukana.",
          component: 72,
          subs: null
        },
        {
          shloka: "(12:52) Kusukela manje kuqhubeke kuyoba nabahlanu emkhayeni owodwa bahlukene phakathi, abathathu nababili, nababili ngokumelene nabathathu.",
          component: 72,
          subs: null
        },
        {
          shloka: "(12:53) Bayohlukana, uyise emelene nendodana nendodana noyise, unina nendodakazi nendodakazi ngokumelene nonina, umamezala ngokumelene nomalokazana umalokazana ngokumelene nomamezala.",
          component: 72,
          subs: null
        },
        {
          shloka: "(13:3) Ngaphandle kokuba ushintshe umqondo wakho, nani nonke niyokwenza bhubha.",
          component: 73,
          subs: null
        },
        {
          shloka: "(14:26) Uma umuntu eza kimi futhi engazondi ubaba nomama, unkosikazi nabantwana, abafowabo, kanye odade—yebo, ngisho nokuphila kwabo siqu—umuntu onjalo angeke abe ngumfundi wami.",
          component: 74,

          subs: null
        },
        {
          shloka: "(14:27) Noma ubani ongathwali isiphambano sabo futhi uyalandela ngingebe ngumfundi wami.",
          component: 75,
          subs: null
        },
        {
          shloka: "(18:29) 'Ngiqinisile ngithi kini,' kusho uJesu kubo, 'akekho muntu oshiye ikhaya noma unkosikazi noma abafowabo noma odadewabo noma abazali noma abantwana ngenxa yombuso kaNkulunkulu uyohluleka ukwamukela okuphindwe kaningi kulenkathi, futhi enkathini ezayo ukuphila okuphakade.'",
          component: 76,
          subs: null
        },
        {
          shloka: "(21:15) Ngizokunika amazwi nokuhlakanipha okungekho izitha zakho ziyokwazi ukumelana noma ukuphikisa.",
          component: 77,

          subs: null
        },
        {
          shloka: "(21:17) Wonke umuntu uyonizonda ngenxa yami.",
          component: 78,
          subs: null
        }



      ]

    },
    {
      title: 'IVangeli likaJohane ', component: null, chapterNumber: 5, icon: 'book',
      subs: [
        {
          shloka: "(1:1) Ekuqaleni wayekhona uLizwi, uLizwi wayekhona noNkulunkulu, futhi uLizwi wayenguNkulunkulu.",
          component: 79,
          subs: null
        },
        {
          shloka: "(1:9) Ukukhanya kweqiniso okukhanyisa wonke umuntu kwakungukukhanya eza emhlabeni.",
          component: 80,
          subs: null
        },
        {
          shloka: "(1:10) Wayesezweni, futhi nakuba izwe lalikhona owenziwe ngaye, izwe alimazanga.",
          component: 81,
          subs: null
        },
        {
          shloka: "(1:11) Weza kokungokwakhe, kodwa okwakhe akamemukelanga.",
          component: 82,
          subs: null
        },
        {
          shloka: "(1:12) Nokho kubo bonke abamamukelayo, kulabo wakholwa egameni lakhe, wanika ilungelo lokuba abantwana bakaNkulunkulu.",
          component: 83,
          subs: null
        },
        {
          shloka: "(1:13) Abantu abazalwa ngokungewona wozalo lwemvelo, noma ngabantu isinqumo noma intando yendoda, kodwa ezelwe nguNkulunkulu.",
          component: 84,
          subs: null
        },
        {
          shloka: "(1:14) ULizwi waba yinyama futhi wakha indawo yakhe yokuhlala phakathi kwethu. Sabona inkazimulo yakhe, inkazimulo yalowo oyedwa neNdodana ezelwe yodwa, evela kuYise, egcwele umusa kanye neqiniso.",
          component: 85,
          subs: null
        },
        {
          shloka: "(1:18) Akekho umuntu oye wabona uNkulunkulu noma nini; okuodwa iNdodana ezelwe, esesifubeni sikaYise, wamembula.",
          component: 86,
          subs: null
        },
        {
          shloka: "(1:51) Wabe esenezela, 'Ngiqinisile ngithi kini, nizobona izulu liyavuleka, nezingelosi zikaNkulunkulu zenyuka futhi yehlela phezu kweNdodana yomuntu.'",
          component: 87,
          subs: null
        },
        {
          shloka: "(3:3) UJesu waphendula wathi: 'Ngiqinisile ngithi kini: Akakho ongabona umbuso kaNkulunkulu ngaphandle kokuthi bazalwe kabusha.",
          component: 88,
          subs: null
        },
        {
          shloka: "(3:4) 'Umuntu angazalwa kanjani esemdala?' Kubuza uNikodima. 'Ngempela abakwazi ukungena ngomzuzwana isikhathi esizalweni sikanina ukuba bazalwe!'",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:5) UJesu waphendula wathi: 'Ngiqinisile ngithi kini: Akakho ongakwenza bangene embusweni kaNkulunkulu ngaphandle kokuthi bazalwe amanzi noMoya (Atma).",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:6) Inyama izala inyama, kodwa uMoya (Atma) uzala umoya.",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:7) Akufanele nimangale lapho ngithi, 'Wena kufanele azalwe kabusha.'",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:8) Umoya uphephetha nomaphi lapho uthanda khona. Uyakuzwa umsindo, kodwa awukwazi ukusho ukuthi uvelaphi noma lapho liya khona. Ngakho, kunjalo nawo wonke umuntu ozelwe ngu Umoya (Atma).'",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:13) Akekho owake wangena eParaloka ngaphandle kwe owavela eParaloka—iNdodana yomuntu.",
          component: 90,
          subs: null
        },
        {
          shloka: "(3:15) Ukuze yilowo nalowo okholwa kuYe akufanele abhubhe, kepha abe nokuphila okuphakade.",
          component: 91,
          subs: null
        },
        {
          shloka: "(3:17) Ngoba uNkulunkulu akayithumelanga iNdodana yakhe ezweni ahlulele umhlaba, kodwa ukusindisa umhlaba ngaye.",
          component: 92,
          subs: null
        },
        {
          shloka: "(3:18) Lowo okholwa kuye akahlulelwa, kodwa ongakholwayo umi wahlulelwa ngoba bengakholwanga ebizweni likaNkulunkulu iNdodana eyodwa.",
          component: 93,
          subs: null
        },
        {
          shloka: "(3:19) Lesi yisinqumo: Ukukhanya kungenile izwe, kepha abantu bathanda ubumnyama kunokukhanya ngoba izenzo zabo zazizimbi.",
          component: 94,
          subs: null
        },
        {
          shloka: "(3:20) Wonke umuntu owenza okubi uzonda ukukhanya futhi uyokwenza bangangeni ekukhanyeni, besaba ukuthi izenzo zabo ziyakwenzeka obala.",
          component: 94,
          subs: null
        },
        {
          shloka: "(3:21) Kodwa lowo ophila eqinisweni uyangena ukukhanya, ukuze kubonakale ngokusobala lokho abakwenzayo okwenziwayo kuye kwenziwa phambi kukaNkulunkulu.",
          component: 94,
          subs: null
        },
        {
          shloka: "(5:19) UJesu wabaphendula wathi: “Ngiqinisile ngithi wena, iNdodana ingenze lutho ngokwaYo; Angenza kuphela lokho abona uYise ekwenza, ngoba noma yini UBaba wenza neNdodana.",
          component: 95,
          subs: null
        },
        {
          shloka: "(5:20) Ngoba uYise uyayithanda iNdodana futhi uyibonisa konke Uyakwenza. Yebo, futhi UzoMkhombisa okukhulu nakakhulu imisebenzi kunalena, ukuze nimangale.",
          component: 96,
          subs: null
        },
        {
          shloka: "(5:21) Ngoba njengoba nje uBaba evusa abafileyo futhi epha ukuphila kwabo, kanjalo neNdodana iyabaphilisa lowo enguye ngithokozile ukuyinika.",
          component: 97,
          subs: null
        },
        {
          shloka: "(5:22) Ngaphezu kwalokho, uBaba akahluleli muntu, kodwa umahluleli ukuphathise iNdodana konke ukwahlulela.",
          component: 97,
          subs: null
        },
        {
          shloka: "(5:23) Ukuze bonke badumise iNdodana njengoba nje bedumisa uBaba. Ongayihloniphi iNdodana akayihloniphi hlonipha uBaba owamthumayo.",
          component: 97,
          subs: null
        },
        {
          shloka: "(5:24) Ngiqinisile, ngiqinisile ngithi kini: Yilowo nalowo ozwa izwi lami, futhi okholwa ngulowo ongithumileyo unokuphila okuphakade, kodwa kasoze wahlulelwa kodwa weqile ekufeni wangena ekuphileni.",
          component: 98,
          subs: null
        },
        {
          shloka: "(5:26) Ngokuba njengalokhu uBaba enokuphila kuye, unakho kanjalo wayinika iNdodana ukuthi ibe nokuphila kuyo ngokwayo.",
          component: 99,
          subs: null
        },
        {
          shloka: "(5:37) Anikaze nizwe izwi Lakhe, nibone nelakhe ifomu.",
          component: 100,
          subs: null
        },
        {
          shloka: "(5:38) Futhi izwi lakhe alihlali kini, ngoba nina kholwani nguye amthumileyo.",
          component: 101,

          subs: null
        },
        {
          shloka: "(6:25) Lapho bemthola ngaphesheya komgwaqo echibini, bambuza bathi: 'Rabi, ufike nini lapha na?'",
          component: 102,
          subs: null
        },
        {
          shloka: "(6:26) UJesu waphendula wathi: 'Ngiqinisile, ngiqinisile ngithi kini: Ninjalo ningidinga, kungeyisikho ngoba nabona izibonakaliso zami kodwa ngenxa yokuthi ladla izinkwa, ladla ukugcwalisa kwakho.",
          component: 102,
          subs: null
        },
        {
          shloka: "(6:27) Ningasebenzeli ukudla okonakalayo, kodwa ukudla omi kuze kube-ngukuphila okuphakade, ekuthandayo iNdodana yomuntu ngikunike. Ngokuba uNkulunkulu uYise ubeke okwakhe phezu kwakhe uphawu lokuvunywa.",
          component: 102,
          subs: null
        },
        {
          shloka: "(6:32) UJesu wathi kubo: 'Ngiqinisile, ngiqinisile ngithi kini: Akunjalo; uMose oninike isinkwa esivela ku-paraloka, kodwa nguBaba oninika isinkwa seqiniso esivela i-paraloka.",
          component: 103,
          subs: null
        },
        {
          shloka: "(6:46) Akakho oke wabona uBaba, kuphela lowo ivela kuNkulunkulu; nguye kuphela obone uBaba.",
          component: 104,
          subs: null
        },
        {
          shloka: "(7:37) Ngosuku lokugcina nolwedlulele lomkhosi, uJesu wema, wamemeza ngezwi elikhulu, wathi: 'Lowo okhona makamyeke; owomile uze kimi, uphuze.",
          component: 105,
          subs: null
        },
        {
          shloka: "(7:38) Lowo okholwa kimi, njengoba nje umBhalo ushilo, kuyogeleza imifula yamanzi aphilayo phakathi kwabo.",
          component: 105,
          subs: null
        },
        {
          shloka: "(8:12) UJesu esephinda ekhuluma ebantwini, wathi: 'Mina ngiwukukhanya kwezwe. Ongilandelayo uzongilandela ungahambi ebumnyameni, kodwa uyakuba nokukhanya kokuphila.'",
          component: 106,
          subs: null
        },
        {
          shloka: "(8:14) UJesu waphendula wathi: “Noma ngizifakaza ngokwami Ubufakazi bami buqinisile, ngokuba ngiyazi lapho ngafika khona ngisuka lalapho ngiya khona. Kodwa awazi lapho ngivela khona nalapho ngiya khona.",
          component: 107,
          subs: null
        },
        {
          shloka: "(8:19) Khona-ke bambuza, 'Uphi uYihlo na? 'Anazi mina noma uBaba,' kuphendula uJesu. “Uma beningazi mina, beniyakumazi noBaba.'",
          component: 108,
          subs: null
        },
        {
          shloka: "(8:21) UJesu waphinda wathi kubo: 'Ngiyamuka; futhi niyongifuna, futhi niyofela esonweni senu. Lapho ngiya khona, ningeze nina.'",
          component: 109,
          subs: null
        },
        {
          shloka: "(8:23) Kodwa waqhubeka, 'Nina ningabaphansi; Nginguye kusuka phezulu. Nina ningabakalumhlaba; Mina angiyena owalokhu umhlaba.",
          component: 110,
          subs: null
        },

        {
          shloka: "(8:24) Nganitshela ukuthi niyakufela ezonweni zenu; uma u ningakholwa ukuthi mina nginguye, nizofela kini izono.",
          component: 111,
          subs: null
        },
        {
          shloka: "(8:28) Ngakho, uJesu wathi, 'Lapho seniyiphakamisile iNdodana koMuntu, khona niyokwazi ukuthi nginguye nokuthi nginguye lutho ngokwami, kodwa ngikhulume lokho uBaba anakho wangifundisa.",
          component: 112,
          subs: null
        },
        {
          shloka: "(8:29) Lowo ongithumileyo unami; Akahambanga mina ngedwa, ngokuba ngenza njalo okuthokozisayo.",
          component: 113,
          subs: null
        },
        {
          shloka: "(8:53) Wena umkhulu yini kunobaba wethu u-Abrahama? Yena bafa, kanjalo nabaprofethi. Ucabangani wena ziphi?",
          component: 114,
          subs: null
        },
        {
          shloka: "(8:54) UJesu waphendula wathi: 'Uma ngizikhazimulisa mina, udumo lwami lusho; lutho. UBaba wami, enithi unguNkulunkulu wenu ongidumisayo.",
          component: 114,
          subs: null
        },
        {
          shloka: "(8:55) Nakuba ningamazi, mina ngiyamazi. Uma ngi ngathi angizange ngibe ngumqambimanga njengani, kodwa ngiyazi Yena futhi ulalele izwi Lakhe.",
          component: 115,
          subs: null
        },
        {
          shloka: "(8:57) 'Awukabi naminyaka engamashumi amahlanu,'besho kubo Wathi, 'Umbonile u-Abrahama!'",
          component: 116,

          subs: null
        },
        {
          shloka: "8:58) 'Ngiqinisile ngiqinisile ngithi kini,'kuphendula uJesu, 'ngaphambili U-Abrahama wazalwa, mina nginguye!'",
          component: 116,

          subs: null
        },
        {
          shloka: "(9:39) UJesu wathi: 'Ngize ukwahlulela kulokhu; umhlaba, ukuze izimpumputhe zibone, nababonayo babone ube yizimpumputhe.'",
          component: 117,
          subs: null
        },
        {
          shloka: "(9:41) UJesu wathi: 'Uma beniyizimpumputhe, ngabe anikho unecala lesono; kodwa manje njengoba uthi uyabona, yakho icala lihlala likhona.",
          component: 118,

          subs: null
        },
        {
          shloka: "(10:18) Akakho osusa ukuphila kimi, kepha mina ngikubeka phansi ngokuthanda kwami. Nginegunya lokuyibeka futhi igunya lokulithatha futhi. Lo myalo ngawuthola evela kuBaba.",
          component: 119,

          subs: null
        },
        {
          shloka: "(10:30) Mina noBaba simunye.",
          component: 120,
          subs: null
        },
        {
          shloka: "(11:25) UJesu wathi kuye: 'Mina ngingukuvuka nokuvuka; ukuphila. okholwa yimi uyakuphila, nokho bayafa.'",
          component: 121,
          subs: null
        },
        {
          shloka: "(11:26) Lowo ophila ngokukholwa kimi kasoze afa naphakade.",
          component: 122,
          subs: null
        },
        {
          shloka: "(12:25) Noma ubani othanda ukuphila kwakhe uyolahlekelwa yikho, kuyilapho noma ubani ozonda ukuphila kwakhe kuleli zwe uyokugcina ukuze uthole ukuphila okuphakade.",
          component: 123,
          subs: null
        },
        {
          shloka: "(12:40) Uye waphuphuthekisa amehlo abo futhi wawenza lukhuni izinhliziyo, ukuze bangaboni ngamehlo abo, noma baqonde ngezinhliziyo zabo, futhi bangaphenduki—futhi bengingathanda balaphe.",
          component: 124,
          subs: null
        },
        {
          shloka: "(12:47) Uma umuntu ezwa amazwi ami kodwa angawagcini bona, angimahluleli lowo muntu. Ngoba angizange ngize ahlulele umhlaba, kodwa ukusindisa umhlaba.",
          component: 125,
          subs: null
        },
        {
          shloka: "(12:48) Kukhona umahluleli walowo ongalayo futhi akawemukeli amazwi ami; wona kanye amazwi enginawo okhulunyiweyo uyobahlulela ngosuku lokugcina.",
          component: 125,
          subs: null
        },
        {
          shloka: "(12:49) Ngokuba angikhulumanga ngokwami, kodwa uBaba ongithumileyo wangilaya ukuthi ngikhulume konke engilakho kukhulunywa.",
          component: 126,
          subs: null
        },
        {
          shloka: "(12:50) Ngiyazi ukuthi umyalo wakhe uholela ekuphileni okuphakade. Ngakho-ke, noma yini engiyishoyo yilokho uBaba angitshele khona ukusho.",
          component: 126,
          subs: null
        },
        {
          shloka: "(14:7) Uma beningazi ngempela, beniyakumazi uBaba njengo kahle. Kusukela manje kuya phambili, niyamazi futhi nimbonile.",
          component: 127,
          subs: null
        },
        {
          shloka: "(14:8) UFiliphu wathi, 'Nkosi, sibonise uYihlo futhi lokho kuyakuba khona kusanele thina.",
          component: 128,
          subs: null
        },
        {
          shloka: "(14:9) UJesu waphendula: 'Awungazi yini, Filiphu, na? ngemva kokuba ngibe phakathi kwenu isikhathi eside kangaka? Noma ubani ongibonile mina umbonile uBaba. Ungasho kanjani ukuthi, 'bonisa thina Baba?'",
          component: 128,
          subs: null
        },
        {
          shloka: "(14:10) Awukholwa yini ukuthi mina ngikuBaba, futhi ukuthi uBaba ukimi? Amazwi engiwasho kini ngiyawenza ngingakhulumi ngelami igunya. Kunalokho, uBaba, ophila kimi, owenza umsebenzi Wakhe",
          component: 129,
          subs: null
        },
        {
          shloka: "(14:6) UJesu waphendula: 'Mina ngiyindlela neqiniso ne impilo. Akekho oza kuBaba ngaphandle kokuba eze mina.",
          component: 130,
          subs: null
        },
        {
          shloka: "(14:16) Ngizocela kuBaba, futhi uyoninika omunye uMmeli ukuthi akusize futhi abe nawe kuze kube phakade.",
          component: 131,
          subs: null
        },
        {
          shloka: "(14:17) Izwe alinakumamukela ngenxa yalo futhi abaMboni futhi abamazi. Kodwa uyamazi, ngoba uhlala lani njalo uzakuba kini.",
          component: 132,
          subs: null
        },

        {
          shloka: "(14:20) Ngalolo suku niyokwazi ukuthi ngiphakathi kwami Baba, nawe ukimi, nami ngikini.",
          component: 133,
          subs: null
        },
        {
          shloka: "(14:25) Konke lokhu ngikukhulumile ngisenani.",
          component: 134,
          subs: null
        },
        {
          shloka: "(14:26) Kodwa uMmeli, uMoya oNgcwele, owathi UBaba uyakuthumela egameni lami, uzonifundisa zonke izinto futhi ngizonikhumbuza ngakho konke engikushilo kini.",
          component: 134,
          subs: null
        },
        {
          shloka: "(15:23) Lowo ozonda mina uzonda noBaba",
          component: 135,
          subs: null
        },
        {
          shloka: "(15:24) Uma bengingenzanga phakathi kwabo imisebenzi, akukho muntu uma kungenjalo, babengeke babe nesono. Njengoba kunjalo, bona babonile, kepha bayangizonda mina neyami Baba. ",
          component: 136,
          subs: null
        },
        {
          shloka: "(15:25) Kodwa lokhu kwenzelwa ukugcwalisa okulotshiweyo emthethweni wabo ukuthi:'Bangizonda ngaphandle kwesizathu.’",
          component: 136,
          subs: null
        },
        {
          shloka: "(15:26) Lapho kufika uMmeli, engizomthuma kuye kini elivela kuBaba—uMoya weqiniso ophumayo evela kuBaba—Yena uzofakaza ngami.",
          component: 137,
          subs: null
        },
        {
          shloka: "(15:27) Futhi nawe kufanele ufakaze, ngoba ubulokhu nami kusukela ekuqaleni.",
          component: 137,
          subs: null
        },
        {
          shloka: "(16:7) Kodwa ngiqinisile ngithi kini: Kungokuhle nina ngiyahamba. Ngaphandle kokuthi ngihambe, uMmeli angeke woza kuwe; kepha uma ngimuka, ngiyakumthumela kini.",
          component: 138,
          subs: null
        },
        {
          shloka: "(16:8) Lapho efika, uyofakazela ukuthi izwe likuwo okungalungile ngesono nokulunga nokwahlulela.",
          component: 139,
          subs: null
        },
        {
          shloka: "(16:12) Nginokuningi engingakusho kini, ngaphezu kwenu; manje angathwala.",
          component: 140,
          subs: null
        },
        {
          shloka: "(16:13) Kodwa lapho Yena, uMoya weqiniso, efika, Uyokwenza aniqondise kulo lonke iqiniso. Akayikukhuluma ngeyaKhe okwakho; Uzokhuluma kuphela lokho Akuzwayo, futhi Uyokusho wena lokho okuseza.",
          component: 141,
          subs: null
        },
        {
          shloka: "(16:14) Uzongikhazimulisa ngoba uvela kimi uyakwemukela lokho Azakunazisa khona.",
          component: 142,
          subs: null
        },
        {
          shloka: "(16:15) Konke okungokukaBaba kungokwami. Leyo kungani ngithe uMoya uyakwamukela kimi ukuthi uyakwamukela kwazisa wena.",
          component: 142,
          subs: null
        },
        {
          shloka: "(16:16) UJesu waqhubeka wathi: 'Kuseyisikhashana nizokwazi ningabe nisangibona, bese kuthi emva kwesikhashana nibone ngibone.'",
          component: 143,
          subs: null
        },
        {
          shloka: "(16:17) Kulokhu, abanye babafundi bakhe bathi komunye omunye, 'Usho ukuthini ngokuthi, ‘Kancane kanti anisayikungibona, futhi emva kwesikhashana kuyilapho nizongibona,’ futhi ‘Ngoba ngiya kini Ubaba?'",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:18) Babelokhu bebuza, 'Usho ukuthini ngokuthi ‘ isikhathi esincane'? Asiqondi ukuthi uthini.'",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:19) UJesu wabona ukuthi babefuna ukumbuza mayelana lokhu, ngakho wathi kubo: 'Niyabuzana na? engangikuqondile lapho ngithi, ‘Kuseyisikhashana nizobona ningasangiboni, kuthi emva kwesikhashana nibone mina'?",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:20) Ngiqinisile, ngiqinisile ngithi kini: Niyokhala nilile kuyilapho izwe lijabula. Uzakuba lusizi, kodwa usizi lwakho izophenduka intokozo.",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:21) Owesifazane obeletha umntwana uba nobuhlungu ngoba isikhathi sakhe sesifikile; kodwa uma ingane yakhe ezelwe, uyakhohlwa usizi ngenxa yentokozo yakhe ukuthi umntwana uzelwe emhlabeni.",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:22) Ngakho, nawe: Manje yisikhathi sakho sosizi, kodwa ngizo futhi niyokubona futhi niyojabula, futhi akekho oyokwamukela susa injabulo yakho.",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:25) Nakuba bengikhuluma ngomfanekiso, siyeza isikhathi lapho ngingabe ngisalusebenzisa lolu hlobo kodwa ngizalitshela ngokusobala ngoBaba.",
          component: 145,

          subs: null
        },


      ]

    },
    {
      title: 'ISambulo sikaJohane', component: 146, chapterNumber: 6, subs: null, icon: 'information'
    },
    {
      title: 'The Iminwe Emithathu', component: 147, chapterNumber: 7, subs: null, icon: 'information'

    },
    {
      title: 'ULwesihlanu Oluhle noma uLwesihlanu Olubi?', component: 148, chapterNumber: 8, subs: null, icon: 'information'

    },
    {
      title: 'Incwadi evela kumHindu', component: 149, chapterNumber: 9, subs: null, icon: 'information'

    },

    {
      title: 'Uhlu lwamagama', component: 151, chapterNumber: 11, subs: null, icon: 'information'

    },

    {
      title: 'Ividiyo', component: 152, chapterNumber: 12, subs: null, icon: 'videocam'

    }
    // ,
    // {
    //   title: 'Share', component: 153, chapterNumber: 13, subs: null, icon: 'share'

    // }
  ];



}
