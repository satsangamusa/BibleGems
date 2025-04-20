import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SwahiliService {

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
chapterName: "Njia ya Mungu",
chapterNumber: 0,
pageNumber: 0,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kulikuwa na baadhi ya historia kabla ya kuwasili kwa Yesu duniani. Pia kuna historia fulani baada ya kifo chake. Historia iliyorekodiwa kabla ya kuzaliwa kwake inajulikana kama<strong>Agano la Kale</strong>, wakati historia iliyoandikwa baada ya kuwasili kwake inaitwa<strong>Agano Jipya</strong>. Agano la Kale linalohusu kipindi cha kabla ya kuzaliwa kwake, maisha yake katika Agano Jipya, na uenezaji wa jumuiya ya Wakristo baada ya kifo chake, lina umuhimu mkubwa kwa jumuiya ya Kikristo. Mkusanyiko wa Agano la Kale na Agano Jipya unajulikana kama<strong>Biblia Takatifu</strong>. Ingawa Biblia ya Kikristo na Hindu Bhagavad-Gita zote zinalenga kuinua na kuwaongoza wanadamu kuelekea kwa Mungu, zina tofauti zao. Bhagavad-Gita inajumuisha pekee Mafundisho ya Krishna, wakati Biblia Takatifu inahusisha masimulizi ya kihistoria kabla na baada ya Yesu. Mafundisho ya Kikristo yametolewa kutoka kwa Agano la Kale kabla ya kuzaliwa kwa Kristo na kutoka kwa kuenezwa na waja wake katika Agano Jipya baada ya kifo chake. Ingawa hakuna kitu kibaya kwa hili, baada ya kutafakari kwa kina, inakuwa dhahiri kwamba ni sehemu tu ya Biblia ni muhimu kwa kuwaongoza watu kwenye njia ya Mungu. Kama vile katika mchezo wa kuigiza, huwa tunapendelea wahusika fulani, na katika mchezo wa kuigiza wenye vipindi vingi, tunaweza kupendelea kimoja kuliko vingine, kwa upande wa Biblia, ni sehemu ya Agano Jipya inayolenga Yesu Kristo&mdash;kutoka Kwake. kuwasili Duniani hadi kuondoka Kwake&mdash;hilo linashikilia utakatifu na umuhimu wa hali ya juu katika kufikia ukombozi (moksham). Ni muhimu kuelewa kwamba kiini cha msingi cha Biblia kiko katika historia ya Yesu. Maneno ya Yesu ni kama mfuko wa almasi ndani ya Biblia, na yote ambayo binadamu unahitaji kufahamu yanaweza kupatikana katika <strong>Injili za Mathayo, Marko, Luka na Yohana</strong>. Ukaribu wa kiungu ambao binadamu wanatafuta unaweza kugunduliwa katika Injili hizi nne. Hekima ya juu zaidi iliyo katika Injili hizi inapatikana katika Injili ya Yohana, ipitayo akili ya kibinadamu. Licha ya kuwa Biblia ina kurasa 1029, historia ya Yesu ina kurasa 102 tu katika Agano Jipya. Ikiwa Biblia iligawanywa katika sehemu kumi, sehemu moja inang'aa kuliko ile nyingine tisa, na wale wanaothamini thamani ya Yesu wanatambua hekima kuu iliyo ndani ya sehemu hiyo moja.

  Tuko hapa ili kufafanua baadhi ya maneno ya Yesu kutoka katika Injili za Mathayo, Marko, Luka, na Yohana, ambazo zimejaa hekima nyingi. Mtu anaweza kushangaa kwa nini tunarudia maneno haya wakati Mababa wengi, wachungaji, na maaskofu tayari wametoa tafsiri zao. Hili ndilo jibu langu: wakati wahubiri wanafundisha kwa ufasaha mistari kutoka Agano la Kale na Agano Jipya, inaonekana kuna pengo katika maelezo ya mistari kutoka Injili nne, ambayo inajumuisha historia ya Kristo. Kama vile Wahindu wanaweza bado hawajafumbua kikamilifu siri za Bhagavad-Gita, kunaweza kuwa na ukweli mwingi uliofichwa ndani ya Injili nne ambazo Wakristo bado hawajagundua. Hii si kauli ya wivu kwa wahubiri; badala yake, ni onyesho la imani katika Kristo. Kusudi letu ni kushiriki ukweli na kuhakikisha kwamba watu wanaweza kupata ufahamu sahihi wa Yesu, kuthamini <strong>ukuu na uwezo wake.</strong>

  Wahindu, wanapoona vitabu vyangu vilivyo na jina la Kristo, mara nyingi hufikiri kwamba ni fasihi ya Kikristo na hukataa kuvisoma. Kinyume chake, Wakristo wanaweza kuwa waangalifu na vitabu vilivyoandikwa na Hindu guru na wanapendelea kushikamana na maandishi ya Kikristo. Wahindu wanachukia kazi yangu, wakifikiri kwamba mwandishi Mkristo hawezi kuwa Mhindu wa kweli, ilhali baadhi ya Wakristo wanaweza kuonya dhidi ya vitabu vyangu, wakiamini kwamba vinakusudiwa kuwageuza Wakristo Uhindu na viepukwe. Wahindu wanatushtaki kwa kuwageuza watu wao kuwa Wakristo, na Wakristo wanatushtaki kwa kuwageuza kuwa Wahindu. Walakini, ni muhimu kufafanua nia yetu. Hatutafuti kugeuza mtu yeyote, bali lengo letu ni kuwatia moyo watu watafute hekima ya Mungu wa kweli. Kila mtoto wa Mungu ana<strong>haki</strong> ya kueleza imani yao juu ya Mungu. Hivyo, tunashiriki mafundisho ya Mungu kwa uvumilivu, bila kujali wengine manafikiri au kudhani nini.

  Nina swali kwa wale ambao wanaweza kuwa na mashaka au wivu.<strong>Mungu amekuja Duniani kama mwanadamu na akaondoka, lakini pia aliahidi kurudi. Je, kuna yeyote anayeweza kudai kwamba Mungu anaonekana mara moja tu? </strong>Dai kama hilo lingeonekana kutopatana na hekima ya kweli. Mungu ametangaza kurudi kwake wakati wowote kunapokuwa na haja hapa Duniani. Anakuja wakati wa shida wakati kanuni za dharma ziko chini ya tishio. Tamko hili ni dhahiri katika Bhagavad-Gita na Biblia. Mungu anaweza kuchukua sura yoyote na kutoa mafundisho yake.<strong>Ni makosa kwa Wahindu kutarajia kurudi kwa Krishna kama Krishna au kwa Wakristo kutarajia Yesu kurudi kama Yesu.</strong>Mungu anapochagua kuja, hakuna vikwazo kuhusu wakati, mahali, au umbo. Anaweza kudhihirika kwa namna zaidi ya kutambuliwa na mwanadamu, lakini ujumbe Wake unabaki bila kubadilika baada ya muda. Dharma, kama kanuni za kimungu, kwa asili ni thabiti na haibadiliki, sawa na sheria za kisayansi. Kwa hiyo, Mungu daima atatoa dharma ile ile, bila kujali jina Lake, umbo, au dini ambayo kupitia kwayo Yeye amezaliwa.

  Mungu hajawahi kuanzisha dini maalum Duniani alipotokea. Mafundisho yake hayafungwi na yoyote mfumo maalum wa kidini, na Hakuidhinisha au kuwa wa dini yoyote. Badala yake, Alifikisha kanuni Zake takatifu, au dharmas, bila kutaja dini yoyote maalum. Uundaji wa dini ni kazi ya mwanadamu. ao Mungu alipoona maovu miongoni mwa watu wa kundi lolote la dini, alibainisha makosa yao na kuwaongoza<strong>njia sahihi ya Mungu</strong>, na kuhimiza zoea la dharma bila kujali uhusiano wa kidini. Dharma wenyewe hawakuunda dini. Wanadamu waliunda dini kulingana na ufahamu wao wa hekima ya kimungu, lugha waliyozungumza, na tabia zao.

  Kila dini inafuata mbinu yake ya kipekee na inaabudu mungu maalum. Ni desturi kwa waumini wa dini fulani kushika matambiko yanayohusiana na imani hiyo. Walakini, ni muhimu kuelewa kwamba mazoea haya ya kidini ni ubunifu wa wanadamu. Mungu anapochukua umbo la mwanadamu hapa Duniani, hashikilii mila au desturi maalum za kidini. Wala hajishughulishi na ibada ya miungu mingine. Mazoea na desturi za kidini ni kwa ajili ya wanadamu, si kwa ajili ya Mungu. Badala yake, jukumu la Mungu ni kuwaongoza watu kwenye <strong>njia iliyo sawa</strong>, kufichua mapungufu yoyote katika ujitoaji wao. Wakati Mungu anapata mwili kama mwanadamu, lengo Lake ni kutoa maarifa juu ya Mungu na dharma ya Mungu, badala ya kushiriki katika ibada ya uungu, kama wanadamu wanavyofanya.

  Mungu alipopata mwili kama Krishna katika Yuga ya Dvapara, Hakujihusisha na ibada ya mungu yeyote. Badala yake, alifunua kikamilifu hekima ya Paramatma (Nafsi Kuu) wakati wakati ulikuwa sahihi. Kwa njia Vivyo hivyo, Mungu alijifanya mwili kuwa Yesu Kristo katika Kali Yuga, Hakujihusisha na ibada ya miungu bali alihubiri hekima Aliyokusudia kuwasilisha. Ukuu Wake wa kweli na mungu unadhirihirika anapotoa<strong>hekima</strong>. Wakati mwingine, Anaweza kuonekana kama mtu wa kawaida, kama kila mtu mwingine. Wajinga wanaweza kumdhania kuwa mtu wa kawaida, lakini wale walio na hekima wanaweza kumtambua kama Mungu. Wale walio na hekima kamili wanaweza kumtambulisha kila anaposhuka duniani. Hata hivyo, watu binafsi chini ya ushawishi wa Maya wanashindwa kumtambua katika hali yoyote. Zaidi ya hayo, wakati mwingine wanadamu humwona kuwa mtu wa kawaida, wakimtusi na kusababisha matatizo mbalimbali.

  Mungu anapokuja duniani kama mwanadamu mara moja katika miaka elfu chache, wanadamu ambao ni kizazi cha nyoka hawawezi kumtambua. Sio tu kwamba hawamtambui, bali pia wanamtesa. Huenda wengine wakashangaa kwa nini Yeye anateswa wakati kwa kawaida wanadamu hawatesi wanadamu wenzao. Jibu liko katika ukweli kwamba Mungu alipofanyika mwili kama mwanadamu, Haishi maisha ya kawaida. Kusudi lake ni kuingiza hekima ya kimungu katika upatanisho na dharma. Kwa hiyo, wale ambao ni wajinga na wasio na ufahamu wa dharma wanajenga chuki dhidi Yake, na chuki yake inaweza kusababisha mateso Yake. Kwa kukosekana kwa mafundisho ya kimungu, hakungekuwa na wapinzani kama hao. Hata hivyo, Anapoonyesha adharma katika mwenendo wa mwanadamu, wale wanaoshikamana na adharma, huku wakiamini kuwa wanafuata dharma, watakasirika. Katika historia, wanadamu wameonyesha kutomheshimu Yeye katika kila mwili kama mwanadamu. Wengine walimwonea Yesu wivu alipofundisha hekima ya kimungu. Walishindwa kuthamini ukuu na hekima yake, hatimaye wakamhukumu kifo. Alikufa kwa sababu ya wafuasi wa dini walidhani kuwa ni gnanis. Kizazi cha nyoka kina sumu ya ujinga. Khivyo, maisha ya Kristo yaliishia mikononi mwa kizazi cha nyoka.

  Mungu anajua mambo yote kumhusu Mungu, na wanadamu hawajui lolote. Wanadamu wanaweza tu kufahamu dharma za Mungu (kanuni za kimungu) wakati Mungu anapozifunua. Ufunuo wa kimungu ni muhimu kwa wanadamu kupata umaizi katika asili na mafundisho ya Mungu. Sehemu ya Mungu, iliyopo katika kila chembe ya ulimwengu, hupata mwili kama mwanadamu. Ili kuwepo duniani kwa kipindi fulani, mfumo unaojulikana kama karma unahusika. Sababu ya kuzaliwa kwa mwanadamu inahusishwa na karma, lakini Mungu Mwenyewe ni zaidi ya karma. Kwa hivyo, Mungu hutengeneza karma inayohitajika kwa kuzaliwa kwake mwenyewe na anapata karma hiyo. Mtu kama huyo anaitwa<strong>Svayambu</strong>, ikimaanisha 'kuzaliwa mwenyewe,' si kufungwa na karma. Mtu kama huyo anajulikana kama<strong>Bhagavan au Mfariji (Adarana Karta)</strong>. Inaaminika kuwa Mungu anaweza kuwa amejidhihirisha duniani kama Bhagavan mara nyingi huko nyuma, ingawa idadi kamili ya mara dharma imerejeshwa duniani bado haijulikani. Siri nyingi zimefunuliwa katika mamilioni ya miaka iliyopita, na historia iliyorekodiwa inachukua miaka elfu chache tu. Kwa hiyo, ujuzi wetu wa matukio ya zamani ni mdogo, lakini rekodi za kihistoria zinaonyesha matukio ambapo Mungu alipata mwili kama mwanadamu ili kuwaongoza wanadamu.

  <strong>Inakuwa dhahiri kwamba Mungu anapata mwili na kufa kama mwanadamu hapa Duniani mara kwa mara.</strong>Baada ya kutafakari kwa kina na kwa hekima tuliyo nayo, inakuwa dhahiri kwamba Mungu alizaliwa takriban miaka 5,000 iliyopita huko India na karibu miaka 2,000 iliyopita huko Israeli. Umwilisho huu wa kiungu ulijulikana kama Yesu Kristo wakati wake katika Israeli. Alikuwepo miongoni mwa wanadamu Duniani kwa kipindi kifupi cha miaka 33, akiongozwa na karma Yake mwenyewe aliyoiweka awali. Katika miaka 30 ya kwanza ya maisha yake, Yesu aliishi kama Jeevatma wa kawaida. Ilikuwa katika miaka mitatu iliyofuata ambapo Aliwapa wanadamu hekima ya Atma huku akiishi kama Atma nyakati fulani.

  Baadhi ya watu wanaweza kuhoji kauli yangu kwamba 'Uungu huzaliwa kama mwanadamu duniani. Uungu (Mungu) unaenea kwa kila chembe ya ulimwengu.' Je, Mungu haenei katika ulimwengu wote mzima anapozaliwa akiwa mwanadamu? Je, Mungu, anayesemekana kuwa yuko katika yote, hayupo ndani yetu sote baada ya kuzaliwa kama Bhagavan duniani? Hebu tuchunguze jibu kwa kutumia mlinganisho. Fikiria bahari, ambayo imejaa maji. Ikiwa tunachukua sehemu ya maji hayo kutoka baharini kwenye chombo kidogo, basi chombo sasa kina maji ya bahari, lakini bahari inabaki imejaa maji. Maji katika chombo yanajulikana kama 'maji yaliyotenganishwa,' wakati maji ya bahari ni 'maji yasiyotenganishwa.' Bahari na chombo vyote viwili vinashiriki maji sawa, bila tofauti katika sifa za maji, isipokuwa kwamba maji ya chombo hutenganishwa na bahari. Vivyo hivyo, tunaweza kumfananisha Mungu na bahari. Bhagavan ni kama maji yaliyotenganishwa kwenye chombo, tofauti na Mungu kama bahari. Hata hivyo, maji ya chombo na maji ya bahari ni kitu kimoja; vile vile, Bhagavan na Mungu wanafanana. Wakati maji yanapowekwa kwenye chombo, hayapunguzi bahari, na bahari inabaki imejaa. Vivyo hivyo, sehemu ya Mungu inapopata mwili kama Bhagavan, Mungu anaendelea kuwa kila mahali kama hapo awali. Hakuna mabadiliko katika Mungu, kanuni Zake za kimungu, au kuwepo kwake kila mahali anapotokea kama Bhagavan. Sehemu ya Mungu inakuwa Bhagavan, lakini sio Mungu mzima. Ingawa Bhagavan ni sehemu tu ya Mungu, Ana sifa sawa. Kwa hiyo, hakuna ubaya kusema kwamba Mungu amezaliwa, ingawa ni sehemu tu ya Mungu inayozaliwa duniani. Kwa hiyo, hakuna ubaya kusema kwamba Yesu ni &lsquo;Mungu.

  Huenda watu fulani wakauliza swali lingine: Ikiwa Yesu ni Mungu, kwa nini Alivumilia kuteseka watu walipomdhuru? Kwa nini Aliteswa na kufedheheshwa na mwanadamu? Wanaweza pia kuuliza kwa nini Yesu hakufunua utambulisho Wake wa kimungu kwao na kutumia uwezo Wake wa kimungu kuwaadhibu wale waliomtendea vibaya. Hili ndilo jibu letu: Ili kuelewa hili, ni lazima kwanza tufahamu siri ya kimungu. Ndani ya mtu wa kawaida mwili, kuna nafsi tatu - Jeevatma, Atma, na Paramatma. Kati ya roho hizi tatu, Jeevatma na Atma zote hukaa ndani ya mwili. Nafsi hizi mbili haziko nje ya mwili. Nafsi ya tatu, Paramatma, inaenea ndani na nje ya mwili, ikipenya kila atomi katika ulimwengu. Walakini, Paramatma haishiriki kikamilifu katika vitendo ndani au nje ya mwili. Nafsi ya pili, Atma, inawajibika kwa kazi zote za mwili. Nafsi ya kwanza, Jeevatma, haifanyi chochote isipokuwa kupata raha na huzuni. Watu wengi wanaweza kufikiria kuwa wao (Jeevatma) ndio wanaofanya kila kitendo, lakini sivyo ilivyo ndani ya mwili wa mwanadamu. Atma, ambayo inakaa ndani yetu bila ufahamu wetu wa ufahamu, hufanya kazi yote. Hata Atma haifanyi chochote kulingana na mapenzi yake.<strong>Atma</strong>inafanya kazi kulingana na<strong>karma</strong>, ambayo ndiyo sababu kuu ya kila kazi. Kulingana na sheria ya karma, Jeevatma imekusudiwa kupata raha na huzuni. Kwa Jeevatma kupitia uzoefu huu ndani ya mwili, Atma, ambayo imeenea katika mwili wote, hurahisisha kazi hizi za mwili. Hii inajumuisha michakato ya kisaikolojia kama vile kusaga chakula, kudhibiti mapigo ya moyo, na kudhibiti utendaji wa mwili kama vile kutenganisha mkojo na jasho kutoka kwa damu. Jukumu la Atma katika kufanya kazi hizi za mwili huwezesha Jeevatma kuishi pamoja ndani ya mwili. Ndani ya mwili, kazi kuu ya Jeevatma ni kupata uzoefu. Hii ni sheria ya asili inayotawala kila mwili wa mwanadamu, isiyobadilika na isiyobadilika.

  Ingawa Mungu amezaliwa kama mwanadamu, mwili Wake unafanya kazi kwa mfumo sawa na ule wa mwanadamu wa kawaida. Katika mwili Wake, Paramatma lazima iwepo, Atma hufanya kazi yote, na uzoefu wa Jeevatma. Utaratibu huu huu hutokea ndani ya mwili wa Mungu anapochukua umbo la mwanadamu. Mungu alipokuja kama Yesu, mwili Wake haukuwa tofauti na mwili wa kawaida wa mwanadamu. Kwa hivyo, Alipata mateso na raha kama vile Jeevatma yoyote ingefanya. Yesu alikumbana na changamoto nyingi maishani, ambazo zote alilazimika kupitia kama Jeevatma. Ili kupitia uzoefu huu katika maisha Yake ya kidunia, Aliumba karma Yake mwenyewe na kupata mwili kama mwanadamu. Sasa, unaweza kuuliza ni nini kinachomtofautisha na sisi. Kwa kweli kuna tofauti moja muhimu. Hapo awali tulijifunza kwamba Atma pekee ndiyo inafanya kazi ndani ya kila mwili wa mwanadamu. Katika mwili wa Bhagavan, ni vile vile Atma ambayo hufanya kazi. Hata hivyo, kuna matukio ya kipekee ambapo kitu tofauti hutokea ndani ya mwili wa Bhagavan. Katika matukio fulani, nafsi tatu huacha kufanya majukumu Yao ya kawaida nakufanya kazi tafauti. Wakati wa wakati kama huo, Jeevatma inaingia katika hali ambayo hakuna uzoefu, ikiruhusu Atma kuchukua jukumu la Jeevatma. Maneno yaliyosemwa kutoka kwa mwili wa Bhagavan katika hali hii, kutoka kwa Atma, ni ya kiroho kabisa. Ukweli wa kina wa kiroho na dharma za Mungu hufunuliwa tu wakati Atma anazungumza moja kwa moja. Katika matukio machache, Atma na Jeevatma hunyamaza, na Paramatma huchukua nafasi na kuzungumza. Matukio kama haya yanaweza kutokea mara moja au mbili katika maisha ya Bhagavan. Katika maisha ya Yesu, Krishna, na Ravana Brahma, kulikuwa na matukio wakati Paramatma alizungumza. Paramatma inapozungumza, Prakruti (asili ya kimwili) hufuata maneno Yake. Vile vile, Atma anapozungumza, hekima ya kina iko chini ya udhibiti Wake. Katika maisha ya miili hii ya kimungu, yafuatayo yalitokea:<strong>1) Maneno ya Paramatma yalitumia amri juu ya Prakruti. 2) Maneno ya Atma yaliwasilisha hekima safi ya Atma. 3) Jeevatma alipata raha na huzuni.</strong>Paramatma ilizungumza wakati dhoruba ilipotokea baharini wakati wa maisha ya Yesu na Alipoamuru dhoruba itulie. Ikadhihirika kwamba Prakruti alifuata maneno Yake na akatulia. Akiwa Atma, Alionyesha hekima safi. Pia alipata furaha na huzuni mbalimbali kama Jeevatma katika maisha yake yote. Matukio kama hayo yalitokea katika maisha ya Krishna, ambapo aliamuru Jua na kumuua Saindhava. Pia kulikuwa na tukio ambapo Krishna alifunua fomu ya ulimwengu wote na akatangaza, "Mimi ni Paramatma." Akiwa Atma, Aliwasilisha hekima ya kina kwa namna ya Bhagavad- Gita, na alipata raha na huzuni za maisha kama Jeevatma kwa muda uliobaki. Mwingiliano huu wa nafsi tatu zinazochukua majukumu tofauti hutokea ndani ya mwili wa Bhagavan pekee. Mungu huchukua umbo la mwanadamu mara moja tu katika maelfu au hata mamilioni ya miaka. Wakati Mungu anazaliwa duniani, Yeye huishi kama Jeevatma, sawa na wengine. Walakini, mara kwa mara Yeye huzungumza kama Atma mara chache kwa mwaka kwa muda mfupi inapohitajika. Kuzungumza kama Paramatma hufanyika mara chache sana, ikiwa ni hivyo. Umuhimu wa kuzungumza kama Atma unatokea kwa sababu Amekuja kutoa dharma. Hii inawakilisha mfumo wa Mungu, tofauti na mfumo wa Maya.

  Hakuna shida maadamu Mungu anatenda kama mtu wa kawaida. Maya, hata hivyo, anapinga Mungu anapotoa hekima kama Atma. Maya kimsingi anapinga hekima ya Mungu. Kwa hiyo, Maya, ambaye mara nyingi huitwa Shetani, yuko macho kuzuia watu kuacha utiifu wao kutoka upande wa Maya na kukumbatia hekima ya Mungu. Zaidi ya hayo, Maya huwatafuta kwa bidii wale wanaoonyesha kupendezwa na uelewa wa hekima, akijaribu kuwageuza warudi upande wake. Ndiyo maana watu wengi wana nia ndogo tu ya kukubali hekima ya kweli ya kimungu, hasa kutokana na uvutano wa Maya. Kwa hivyo, hata wale walio na hikima wanaweza kupotea njia. Unaweza kuuliza swali katika hatua hii: &ldquo;Kuna waumini wengi leo ambao wamejitolea sana kwa imani yao. Wanatafuta hekima kutoka kwa wakuu mbalimbali wa kiroho na kuonyesha ibada isiyoyumbayumba kwa miungu. Karibu kila mtu amejitolea kwa Mungu, isipokuwa kwa watu wachache wasioamini Mungu. Je, inawezekana kubadilisha waja wa Sai Baba na Ayyappa? Kando na mahekalu ya muda mrefu nchini, mahekalu mengi mapya yanajengwa kwa heshima ya Shirdi Sai Baba na Ayyappa Swamy. Inaonekana kwamba Maya hajazuia ibada yao. Tunawezaje kuukubali mtazamo wako?&rdquo; Hapa kuna jibu langu.

  Maya anasimama kinyume cha moja kwa moja kwa njia ya Mungu na hekima kuu.ni Upinzani dhidi ya hekima ya kina ya Mungu unaonyesha uwezo mkuu wa Maya, unaorejelewa kama<strong>'Maya duratyaya'</strong>katika Bhagavad-Gita. Mungu alisema katika Bhagavad-Gita kwamba<strong>haiwezekani kushinda Maya;</strong>kwa hiyo inajulikana kuwa<strong>Maya anawadanganya wanadamu bila kufikiria. </strong>Kwa hivyo, utendakazi wa Maya bado haueleweki na haueleweki, na kuwaacha watu binafsi wakikabiliwa na udanganyifu wake. Maya hufanya kazi kwa kuunda toleo lake la hekima. Mungu anapopata mwili mara chache sana duniani kama Bhagavan mara moja katika maelfu ya miaka, Maya hutoa uigaji mwingi wa Bhagavan ili kuwachanganya na kuwageuza watu wasimtambue Bhagavan halisi. Inatanguliza aina nyingi za hekima, na kufanya iwe vigumu kwa wengi kutofautisha hekima ya kweli na ile bandia. Wakati kuna Bhagavan wengi wanaohusishwa na Maya duniani, ni nani atakayemtambua Bhagavan wa kweli ambaye haji duniani mara chache? Wakati kuna Bhagavan wanaoonyesha matendo na miujiza mingi isiyo ya kawaida (mahatyas), ni nani anayeweza kutambua Bhagavan wa kweli ambaye anaonyesha mahatya mmoja au wawili tu maishani? Kwa njia hii, imekuwa haiwezekani kutambua hekima ya Mungu na Bhagavan. Mungu alionyesha ukweli Wake katika ulimwengu fomu, kitu ambacho hakuna mtu amewahi kuona na anayeweza kuelewa. Lakini Maya aliwashawishi baadhi ya watu kuandika kwamba devatas nyingi zilionyesha umbo la ulimwengu wote, ikiwa ni pamoja na Saibaba na Veerabrahmam ili watu wasihesabu umbo la kiulimwengu la Krishna kama la juu zaidi.ni Nani ulimwengu kutoka kuwa Krishna alioonyeshwa katika Bhagavad-Gita ndilo kuu kuliko wote? Hivyo, Wakristo hawakuweza kumtambua Yesu Kristo kama Bhagavan; vile vile, Wahindu hawakuweza kumjua Krishna kama Bhagavan. Wahindu hawakuweza kumwona Krishna kuwa Mungu wa kweli. Ingawa wengine wanamwona Yeye kama wa mwisho kati ya Miungu mingine yote, wengine wanashindwa kumtambua kuwa ni mungu mdogo kutokana na mtazamo wao wa matendo Yake kama mabaya. Hakuna hata anayemhesabu Krishna kama Mungu, kama Shirdi Sai Baba. Vivyo hivyo, katika mapokeo ya Kikristo, licha ya kumchukulia Yesu Kristo kuwa Mwana wa Mungu, wengi hawajafahamu kiini cha mafundisho Yake. Chini ya ushawishi wa Maya, Wakristo wanaheshimu msalaba, ambao ulikuwa muhimu katika kusulubiwa kwa Yesu, badala ya Yesu Mwenyewe. Walifikiri kwamba wangehesabiwa kuwa Wahindu ikiwa wangeabudu<strong>Yesu</strong>'<strong>sanamu</strong>; kwa hiyo, wanaomba msalabani. Wakati Yesu alisema, &ldquo;<strong>Yeye aliyeniona mimi amemwona Baba yangu</strong>,&rdquo; si kazi ya Maya iliyowafanya Wakristo waheshimu msalaba, uliosababisha kifo cha Yesu, badala ya sanamu ya Yesu? Maya kimkakati huwaongoza watu mbali na njia ya Mungu, hata wanapoamini kuwa wako kwenye njia hiyo. Hufanya kazi ya kudhoofisha uaminifu wa wale wanaoelewa hekima ya Mungu na kusema ukweli, na kufanya maneno yao yaonekane duni au yasiyosikika. Isitoshe, Maya amechangia katika kuanzishwa kwa dini mbalimbali na kudhania kwamba kuna Miungu tofauti kwa kila dini. Ijapokuwa kuna mamlaka moja kuu inayoongoza ulimwengu, Maya amekuza imani ya Miungu mingi inayolingana na dini mbalimbali. Uvutano wa Maya ni mkubwa sana, unaosababisha kutokeza kwa wingi wa Miungu na imani za kidini. Ndani ya imani ya Kikristo pekee, waumini wengine humwabudu Mariamu huku wengine wakimwabudu Kristo. Vivyo hivyo, Uhindu hujivunia miungu mingi. Kwa kuzingatia utofauti huu, sasa ni muhimu kuanza jitihada ya kutambua mkuu mkuu wa miungu na dini zote. Walakini, kazi hii si rahisi.<strong>Kwa kutambua kwanza Maya na athari zake, tunaweza baadaye kutafuta njia ya kuelekea kwa Mungu. </strong>Kwa hiyo, ni muhimu kuamua ikiwa njia unayopitia sasa inaongoza kwa Mungu au inaongozwa na Maya.

  Kuna nguvu isiyo ya kawaida isiyo na kikomo ambayo haina umbo, isiyo na jina, na isiyofafanuliwa. Hebu tuirejelee kama 'Paramatma.' Kidogo sana kinajulikana kuhusu Paramatma, chanzo cha kuwepo kwa yote. Paramatma lazima ijidhihirishe binafsi na kujidhihirisha Mwenyewe kwa sababu, licha ya kupenyeza kila atomi, tunabaki na ukomo wa kuelewa Pancha Bhutas pekee (vipengele vitano vya msingi). Hisia zetu zinaweza tu kutambua kile kilicho ndani ya safu zao, na Paramatma iko nje ya kufahamu kwa hisia zetu. Tunaweza tu kumwelewa Anapochukua umbo la mwanadamu, akijifanya aonekane na kufichua hekima Yake. Vinginevyo, tunabaki bila kumjua Yeye. Kwa hivyo, Paramatma lazima ipate mwili kama mwanadamu na kutoa hekima Yake. Anajitokeza ili kufichua dharma Zake, lakini mafundisho haya hufifia baada ya muda, na kulazimisha kurudi Kwake ili kuyarejesha. Paramatma, muumba wa ulimwengu, mara nyingi huchagua kujidhihirisha kama mwanadamu, akiongoza maisha sawa na mtu wa kawaida, na kutimiza kusudi Lake. Kutambua Paramatma katika fomu kama hiyo ni kazi ngumu. Licha ya kuzaliwa kwa Paramatma ninyingi duniani, wanadamu wamejitahidi kutambua uwepo wake hata leo.

  Wale wanaoshindwa kumtambua Bhagavan anapokuwepo mara nyingi huanza kumwabudu kwa ibada kubwa baada ya kuondoka. Hawamuabudu kwa sababu Yeye ni Paramatma, bali kwa sababu wanaamini kuwa ana hekima kubwa au kwamba matamanio yao yatatimizwa. Hata hivyo, bado hawatambui kwamba Yeye ni Paramatma. Tunaweza kutambua umwilisho wa Paramatma kupitia kanuni fulani. Kwa njia hii, tunaweza kutambua kwamba Paramatma ilikuja kama Krishna mwishoni mwa Dvapara Yuga na baadaye kama Yesu katika Kali Yuga. Paramatma inaweza pia kuja baadaye, lakini hatujui.

  Haijalishi Paramatma imezaliwa mara ngapi, hakuna mfanano wa kuzaliwa mmoja hadi mwingine isipokuwa katika dharma Zake. Ijapokuwa kiini cha Paramatma kinasalia kuwa kile kile katika Krishna, ambaye alizaliwa katika Dvapara Yuga, na Yesu, ambaye alizaliwa katika Kali Yuga, maisha yao ya nje ni tofauti sana. Sri Krishna alifurahia maisha ya utajiri na alikuwa na wake wanane. Pia alimteka nyara mke wake wa kwanza kwa idhini yake na kuwaua maadui zake. Baada ya kuona haya yote, inakuwa changamoto kwa mtu yeyote kumtambua Yeye kama Bhagavan, ambaye amejaa sehemu ya Paramatma.

  Hakukuwa na uongo au udanganyifu katika maisha ya Yesu, ambaye alizaliwa katika Kali Yuga. Yesu alikuwa mpole na angegeuza shavu lingine ikiwa alipigwa kofi na adui. Hakuwa na tamaa ya wanawake. Krishna na Yesu ni tofauti sana katika mambo ya kidunia. Hata Gurus katika dini zote mbili wamekosea kuhusu hizi mbili. Whahindu wakubwa wanamkosoa Yesu kwa kuuliza, &ldquo;Kwa nini Yesu alikufa mikononi mwa watu wa kawaida, na kwa nini hakujiokoa? Kwa nini alipaswa kufa ikiwa alikuwa na uwezo wa kiungu wa kuwafufua wafu? Kwa nini aliteseka aliposulubishwa msalabani?&rdquo; Vile vile, wachungaji wa kanisa wanamkosoa Krishna kwa kubishana, "Anawezaje kuwa Mungu wakati Alikuwa na wake wengi?" Kwa njia hii, wanazingatia vipengele vya kidunia vya maisha ya Yesu na Krishna, lakini hakuna mtu anayetafakari kwa nini matukio kama hayo yalitokea katika maisha yao. Paramatma Mwenyewe alisema kwamba hakuna mtu angeweza kumtambua Alipokuja Duniani. Jukumu lake ni kujifanya ili mtu yeyote asimtambue. Dhamira yake ni kuwa mwizi asiyejulikana miongoni mwetu, akiiba ujinga wetu.

  Hapo awali, tulitaja kwamba Mungu hawezi kueleweka kupitia mambo ya kilimwengu.<strong>Mungu anaweza tu kutambuliwa kupitia hekima ya Mungu. </strong>Hata wale wanaodai kuwa Waguru mara nyingi hushindwa kufahamu kanuni hii na kujaribu kumpima Mungu kwa kutumia viwango vya kidunia. Kwa hiyo, Mungu anapokuja duniani, hakuna anayemtambua. Wale wanaofanya miujiza kwa msingi wa mambo ya kilimwengu wanaweza kuonekana kuwa wakuu na kama kimungu, lakini Mungu wa kweli mara nyingi hupuuzwa. Hii ni kwa sababu uwepo wa Mungu hauwezi kutambuliwa kwa kuzingatia mambo ya nje, ya kidunia. Badala yake, kupata mwili kwa Mungu kunaweza kutambuliwa kulingana na dharma. Dharma hiyo hiyo inaweza kupatikana katika Bhagavad- Gita na katika mafundisho ya Yesu, ambayo hutuwezesha kuyatambua. kama moja. Hata hivyo, hakuna mfanano mwingine kati yao katika mambo ya nje, ya kidunia.

  Kuna Mungu mmoja tu kwa ulimwengu mzima, ambaye anapata mwili kama mwanadamu mwenye majina na maumbo mengi ili kuwaongoza wanadamu kuelekea kwake. Kwa bahati mbaya, wanadamu wengi wanashindwa kutambua hili na kuunda dini zinazobishana juu ya Mungu ambaye ni mkuu zaidi. Wanashindwa kuelewa kwamba Mungu katika dini yao na Mungu katika dini nyingine ni sawa. Wanadamu wana mwelekeo wa kupenda dini yao kuliko Mungu, ambao ni ujinga mkubwa. Ni muhimu kujua kwamba kuna Mungu mmoja tu, ingawa tunamwita kwa majina tofauti. Paramatma huamua jukumu Lake kulingana na wakati, taifa, na watu, na kupata mwili kama Bhagavan kufundisha dharma Zake. Kuzaliwa kwake si sawa, lakini lengo Lake daima ni sawa - kufundisha dharma zake. Alipokuja kama Yesu au Krishna, dharma Alizofundisha zilikuwa sawa. Mungu na dharma zake zinaweza kuonekana tofauti kwa sababu wakati Paramatma ilizaliwa kama Krishna na Yesu, majina yao, nchi za kuzaliwa, na haiba zilitofautiana.

  Wacha tuchukue dharma iliyosemwa na Paramatma kama mfano. Sri Krishna alisema katika Gita,<strong>'Paritranaya Sadhunam vinasaya chaturskrutam,'</strong>ambayo ina maana<strong>, &ldquo;Nitawalinda wenye haki na kuwaangamiza waovu.&rdquo;</strong>Wahubiri fulani wa Kikristo huchukua maneno haya na kuwaambia Wahindu, &ldquo;Dini yenu haitoi ulinzi, na Mungu wenu atawaua tu wenye dhambi.&rdquo; Hata hivyo, katika dini yetu, kuna ulinzi kwa wakosefu wote, na Yesu alikuja duniani kuokoa wenye dhambi. Ingawa Mungu wenu anaweza kuwaangamiza wenye dhambi na watu waovu katika dini yenu, Mungu wangu (Yesu) atakulinda. Kwa hiyo, Wakristo wanadai kwamba Mungu wao ndiye Mungu wa kweli. Wakristo hawakuelewa maana ya kweli ya kile ambacho Bwana Yesu alisema kuhusu jambo hili, na Wahindu hawakuelewa maana ya sloka ambayo Krishna alisema katika Gita. Kwa hivyo, maneno ya Krishna na maneno ya Yesu yanaonekana tofauti kwao. Waliamini kwamba Krishna na Yesu walikuwa tofauti, lakini hawakujua kwamba walikuwa sawa na kwamba maneno waliyotamka yalikuwa na maana moja. Maneno 'kuwaangamiza wenye dhambi na waovu' yanamaanisha kwamba wanatumia silaha ya<strong>'kufundisha'</strong>kuondoa karma ya dhambi na uovu na kuwafanya kuwa safi. Waovu wanapokuwa safi, hawatakamatwa katika dhambi bali watakuwa wenye haki. Kisha hapatakuwa na watu waovu. Kwa hiyo, maneno mawili, 'kusema katika Gita kwamba Krishna itaondoa waovu' na 'kusema katika Biblia kwamba Yesu atakulinda kutokana na dhambi,' yanamaanisha jambo lile lile.

  Ingawa Yesu na Krishna walizungumza tofauti lugha, walikuwa watu tofauti, na walikuwa na majina tofauti, kusudi la maneno yao lilikuwa sawa. Kwa sababu ya kutoweza kwa watu kufahamu kikamilifu dhana ya Mungu na mwelekeo wao wa kutafsiri maneno Yake ili kuendana na mapendeleo yao, walimgawanya Mungu ambaye alitangaza dharma ile ile. Wakati Wahindu wanamkosoa Yesu, na Wakristo wanadai kwamba Krishna si Mungu au Paramatma, Mfalme na Baba wa paraloka, Mkuu wa ulimwengu ambaye ameenea dunia nzima na anaishi ndani yetu, anacheka, akijua kuwa watu hawa ni vipofu licha ya kuwa na macho. Krishna alisema katika Gita, "Nitakuja wakati kuna tishio la dharma." Hata hivyo, Wahindu humtambua kuwa Mungu ikiwa tu Anatokea kwa njia ile ile kama hapo awali - kwa manyoya ya tausi, filimbi, na chakra. Ikiwa Mungu amezaliwa katika umbo tofauti, wao husema, &ldquo;Wewe si Mungu wetu.&rdquo; Katika Biblia, Yesu Kristo alisema kwamba angekuja tena. Wakristo watamtambua Yesu Kristo ikiwa tu atatokea kwa njia ile ile kama hapo awali - akiwa na makovu ya misumari mikononi Mwake na alama za mikuki ubavuni Mwake. Watasema, &ldquo;Wewe si Mola wetu,&rdquo; ikiwa atakuja kwa sura tofauti. Kwa sababu ya tofauti za sura na tabia zao, Wakristo hawakuweza kutambua kwamba Yesu alikuwa Krishna, na vile vile, Wahindu hawakuweza kukiri kwamba Krishna alikuwa Yesu. Ndiyo maana Mungu alisema katika Gita<strong>, "Watu wananivunjia heshima, kwa maana hawanijui mimi na mahatya wangu."</strong>Baadhi ya magurus wa Kihindu watafundisha hekima na kutoa upadesa kwa Krishna ikiwa Atakuja tena. Vivyo hivyo, ikiwa Yesu atakuja tena, kama ilivyotajwa katika Biblia, wahubiri Wakristo, ambao huenda wasimtambue, watambatiza. Maadamu kuna Gurus ambao watamfundisha hekima Krishna ikiwa Atabadilisha sura na jina Lake, inaweza kusemwa kwamba kuna ujinga katika dini ya Kihindu. Vivyo hivyo, maadamu kuna Wakristo ambao watamfafanulia Yesu mistari ya Biblia ikiwa atabadili umbo lake na kuonekana mbele yao, inaweza kusemwa kwamba hawamjui Mungu kikamilifu.

  Kuna sababu kubwa kwa nini hata gnanis kubwa hawakuweza kumtambua Mungu au kuelewa hekima ya Mungu wakati Mungu alikuja duniani. Kabla ya kuelewa sababu, mtu anapaswa kuwa na ujuzi na inayoonekana<strong>uumbaji</strong>. Kuna mpinzani muhimu kwa Mungu, ndiyo maana Mungu haelewi kueleweka. Wakristo huiita 'Shetani,' Wahindu huiita 'Maya,' na Waislamu huiita 'Shetani.' Ili kuelewa siri ya kitu na majina kama<strong>Maya, Shetani, au Shetani</strong>, lazima kwanza mtu aelewe siri ya uumbaji. Hebu tuzame kwa undani hapa chini.
</div></div>
</span>`
},
{
chapterName: "Siri ya Uumbaji",
chapterNumber: 1,
pageNumber: 1,
verse: ``,
meaning: ``,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma (Mungu) hakuwa mwanamume wala mwanamke kabla ya ulimwengu kuumbwa. Paramatma ilitaka kuumba ulimwengu na hivyo kuleta uwepo wa kike Prakruti au Maya (Shetani). Aliamua sifa zinazohitajika na mbinu zote muhimu kwa ajili yake. Kwa kuwa Prakruti alikuwa mwanamke, Paramatma alisimama kinyume kabisa naye, na tabia hii inajulikana kama Purusha (mwanaume). Paramatma alitamani Prakruti awe kinyume kabisa Naye, hivyo Alimpa mamlaka sawa kwa sababu Aliamini kwamba mchezo ungekuwa wa kusisimua zaidi wakati wapinzani wote wawili wangekuwa na nguvu sawa. Prakruti (Shetani) ni kinyume na Paramatma lakini si adui. Ingawa ni kawaida kwa Mungu (Paramatma) kukabiliana na upinzani kutoka kwa Shetani (Prakruti), wao si maadui wao kwa wao.

  Paramatma, ambaye aliunda Prakruti, hatimaye atamchukua ndani Yake mwenyewe. Yeye ndiye baba, mume, na mharibifu wa Prakruti, na pia nguvu ndani yake. Paramatma, ambaye ni mkubwa, aliunda Prakruti na anajishughulisha na mchezo unaoitwa 'Jagath.' Katika mchezo huu, Paramatma anajigeuza kuwa Purusha (mwanaume) ingawa nje ya mchezo, Yeye si mwanamume wala si mwanamke. Prakruti imegawanywa katika vipengele vitano - Anga, Hewa, Moto, Maji, na Dunia - na inaitwa Prapancha. Baada ya kuunda Prakruti, Paramatma ilitamani kuunda Jagath inayojumuisha viumbe hai ambavyo hupitia kuzaliwa na kifo. Alifanikisha hili kwa kuunda viumbe hai na Atma na kujenga Jagath ndani ya Prapancha. Kwa Kitelugu,<strong>'Ja' </strong>inamaanisha kuzaliwa, na<strong>'Gati'</strong>maana yake ni kifo. Kwa hivyo, viumbe vyote vilivyo hai vinaitwa ipasavyo '<strong>Jagathi</strong>,' ikionyesha kwamba lina kuzaliwa na kifo.

  Paramatma iliunda Jagath, inayojumuisha viumbe hai ndani ya Prakruti. Wakati Prakruti (mwanamke) na Paramatma (Purusha) wanachukuliwa kuwa sawa, Jagati alizaliwa tofauti baadaye. Hadi sasa, Paramatma imeunda Prakruti (Prapancha) na Jagath, na kusababisha vipengele vitatu, ikiwa ni pamoja na Paramatma. Hapo awali, Paramatma, ambaye hakuwa mwanamume wala mwanamke, aliunda Prakruti. Kisha, Paramatma iligeuzwa kuwa Purusha (Atma), ikamchukua Prakruti kama mke Wake, na kwa pamoja, wakamzaa mtoto wa kipekee aliyeitwa Jagath. Ikiwa tutapuuza mahusiano haya, Paramatma iliunda sehemu tatu tofauti - Prakruti, Purusha, na Jagath. Prakruti ni mwanamke, Paramatma ni mwanamume (Purusha), na Jagath inapaswa kuzingatiwa kama isiyo ya wawili (si mwanamume wala mwanamke). Mchezo wa msingi ni kwamba Paramatma na Prakruti huburuta Jagath (isiyo ya binary), ambayo ipo kati yao. Kuna sheria za mchezo huu. Ingawa Paramatma ilifafanua sheria, Yeye hushiriki katika mchezo kulingana na kanuni alizoziweka, ingawa Yeye ndiye muumbaji wa yote na mkuu kuliko wote. Mchezo huu, kama wengine, una kikomo cha wakati. Kikomo cha muda kwa mchezo wa Jagath ni Yuga 1000 au crore 108 za miaka, sawa na jinsi mpira wa miguu una kikomo cha muda cha dakika 90 au kriketi ina kikomo cha over 50. Matukio ya mchezo hukatika wakati wa usiku na kuendelea wakati wa mchana, na kila kipindi cha kucheza na kupumzika kinachukua miaka crores 108 (bilioni 1.08).

  Paramatma, isiyo maalum na isiyoelezewa, hapo awali iliunda Prapancha (bila umbo la uhai) na baadaye ikaleta viumbe hai (Jagath). Paramatma iliunda Prakruti na kutambuliwa kama Purusha. Aliunda Atma na kuigawanya Prakruti, ambayo hupata mimba na mbegu ya Atma, katika sehemu tano. Prakruti kama hiyo inaitwa Pancha Bhutas au Prapancha. Paramatma iligawanya Atma na Jeevatma katika sehemu tatu: Jeevatma (fomu ya mahisha ya Jagath), Atma, na Paramatma. Alitambuliwa kama Paramatma baada ya kuunda Jeevatmas na Atma. Alitambuliwa kama Paramatma pamoja na Atmas (Jeevatma na Atma) na kama Purusha pamoja na Prakruti. Kuna msingi wa kumwita Purusha wakati kuna Prakruti na Paramatma wakati roho zipo. Ikiwa Prakruti na Atmas hazipo, haiwezekani kumfafanua. Jagath aliye hai alizaliwa na Prakruti na Purusha. Paramatma ilipanga ili mama na baba huko Jagath wawe na sifa za Prakruti na Purusha.

  Prakruti ina sifa kinyume na zile za Purusha. Walakini, Jagath ina sifa kutoka kwa Prakruti na Purusha. Jagath ya aina maisha inajumuisha paramatma inayohusiana na jeevatma na atmas, pamoja na miili na inayohusiana na Prakruti na gunas. Imani ya kuwepo kwa Mungu inalingana na Atma, wakati mtazamo unaopinga kwamba Mungu hayupo unalingana na Prakruti. Wanadamu huko Jagath wanaonyesha sifa za Prakruti na Purusha. Ili kuashiria sifa za Prakruti na Purusha, miili ya wanawake iliundwa kufanana na Prakruti, wakati miili ya wanaume iliundwa kuwakilisha Paramatma. Watu ambao sio wawili pia waliundwa kuashiria Jagath, ikionyesha kuwa Jagath ipo pamoja na Prakruti na Paramatma. Wanawake, wanaume, na watu wasio wawili wanaashiria Prakruti, Paramatma, na Jagath hai. Prakruti = Wanawake, Jagath = Isiyo ya binary, na Paramatma = Purusha (Mwanaume). Mungu aliufanya uumbaji wake ujulikane kwa kuwaumba wanawake ili wafanane na Prakruti, watu wasio na umoja kuashiria Jagath, na wanaume kuwakilisha Paramatma. Mungu alileta watoto ulimwenguni kupitia muungano wa wanaume na wanawake ili kuonyesha kwamba Jagath aliye hai amezaliwa na Atma na Prakruti. Mama, baba, na watoto wanaoonekana huonyesha jinsi uumbaji ulivyotukia mwanzoni. Watu wengi, licha ya wao akili, mara nyingi hawafikirii kwa nini wanaume hutofautiana na wanawake na kwa nini watoto huzaliwa kutoka kwa wanaume na wanawake. Ili kufahamu kiroho kweli, ni muhimu kuelewa misingi ya<strong>'Siri ya Uumbaji'</strong>katika elimu ya kiroho Ni muhimu kuelewa kwamba mchezo kati ya Mungu na Prakruti ni wa kirafiki katika asili.

  Prakruti na Paramatma wanavutana-vuta-vutana kwa upole, kila mmoja akijaribu kuteka Jeevatma kwa pande zao katika mchezo huu. Wajibu wa Paramatma ni kutoa hekima kwa Jeevatma, kuwaongoza kuelekea Kwake. Kinyume chake, Prakruti, kwa namna ya Maya na silaha yake ya gunas, huwaweka wanadamu, kuwazuia kumtafakari Mungu. Prakruti huwatega watu binafsi katika shughuli zao za kila siku, wakielekeza uangalifu wao kamili kuelekea shughuli za kidunia, na kuwazuia kumgeukia Mungu kupitia ushawishi wa tamaa na bunduki zinazohusishwa. Mchezo mkubwa zaidi kati ya Paramatma na Prakruti bado hauna jina. Kwa namna ya Maya, Prakruti kwa hila huvuta kila mtu upande wake, mara nyingi bila ufahamu wao. Ikiwa mtu yeyote ndani ya Jagath anafikiri juu ya Mungu na kutafuta ujuzi juu yake, Maya (Prakruti) huwa na mwelekeo na kuwatia mtego. Maya (Shetani) anaonekana kuwa na nguvu zaidi kuliko Mungu katika pambano hili linaloendelea kati ya Mungu na Shetani. Hivi sasa, inashikilia utii wa asilimia 99 ya wanadamu. Katika hali kama hii, wakati kushindwa kwa Mungu kunaweza kuonekana kuwa ni jambo lisiloepukika, Paramatma inapaswa kujitahidi kushinda

  Kama sehemu ya juhudi Zake, Paramatma itapata mwili kama binadamu miongoni mwa wanadamu na kujizungumzia Mwenyewe, ikilenga kuwaongoza watu kuelekea Kwake. Kama ilivyotajwa hapo awali, hakuna mpinzani wa kweli, na kila upande hutumia mkakati wake. Wote Shetani (Maya) na Mungu wanaishi pamoja ndani ya kila mwanadamu, lakini watu binafsi mara nyingi hawajui uwepo wao na wanajitahidi kumtambua Mungu au Maya. Wanadamu mara kwa mara hubaki kutojali wao wako upande wa nani. Mungu anajitahidi kuwakomboa watu walionaswa na ushawishi wa Maya, na katika harakati hizo, Paramatma anazaliwa Duniani akiwa Mwana wa Mungu. Hata hivyo, kwa kufuata sheria za mchezo wa ulimwengu, ni lazima Asifichue utambulisho Wake kama Mwana wa Mungu. Kwa hivyo, Mungu anapopata mwili kama mwanadamu, Anazungumza kuhusu Paramatma kama mtu wa kawaida. Paramatma inatoa hekima Yake na kuanzisha tena dharma Yake. Kinyume chake, Maya hupanga mikakati ya kumwonyesha Mwana wa Mungu kuwa mjinga na mjinga. Inaunda Gurus na Swamijis ambao huendeleza adharma za Maya kama dharma na kuwasilisha mafundisho ya Mwana wa Mungu kama adharma. Maya hushindana na Mwana wa Mungu kupitia hawa Gurus na Swamijis, na kuwaongoza wanadamu kukumbatia mafundisho yake badala ya hekima ya Mungu. Maya hutumia maneno kama vile Paramatma, moksham, hekima, na mazoezi ili kufikisha adharma zake kwa wanadamu, na kuifanya iwe changamoto kutofautisha dharma ya Mungu na adharma za Shetani.

  Ikiwa mtu anatafuta kupata Mungu, Maya huwafanya wasiweze kutofautisha kati ya dharma na adharma, na kuwaongoza kuamini chochote kinachowasilishwa kwao. Ni a kanuni ya msingi ya mchezo wa ulimwengu kwamba Shetani (Maya) na Mungu hawapaswi kufichua uwepo wao duniani. Wakati Paramatma inapata mwili kama Bhagavan Duniani, Yeye anajizuia kutangaza, "Mimi ni Paramatma." Kwa kanuni hiyo hiyo, wakati Prakruti anazaliwa duniani, haitangazi, "Mimi ni Maya." Walakini, wakati Maya anapata mwili, inaweza kudai, "Mimi ni Bhagavan." Kufuatia kanuni hii, Maya (Shetani) anajitangaza kuwa Bhagavan (Mwana wa Mungu), anafanya miujiza mingi, na inajidhihirisha kwa namna ya Swamijis mbalimbali. Paramatma inapozaliwa katika sehemu moja duniani, Prakruti huunda watu wengi wanaoitwa Bhagavan.

  Kuzaliwa kwa Paramatma kunakusudiwa tu kutoa dharma Zake bila kutambuliwa wazi kama Bhagavan. Sambamba na hilo, Maya huzalisha nyingi kwa jina Bhagavan hata kabla ya kuzaliwa kwa Paramatma. Maya huwafanya wanadamu kusikia maneno yake na kuwazuia kusikiliza maneno ya Bhagavan halisi. Katika mchezo huu wa ulimwengu, Maya hutoa ushawishi wake, na Mungu hutimiza kusudi Lake.

  Wakati huyo Maya akiendelea kuchukua umbo la gunas ndani ya mwili wa mwanadamu, Mungu yupo katika mfumo wa Atma ndani ya mwili. Hapo awali tulitaja kwamba Maya na Paramatma wangepata mwili kama wanadamu duniani. Ni muhimu kuelewa miili ambayo watachukua. Maya anapata mwili wa kiume kama Bhagavan na mwili wa kike kama Bhagavati. Paramatma mara kwa mara hupata mwili katika mwili wa kiume. Prakruti, kama mwanamke, kawaida huvaa mwili wa kike, lakini pia anaweza dhihirisha katika mwili wa kiume ili kuwahadaa wengine. Inaweza kuwa changamoto kutambua Bhagavan ya kweli katika miundo ya Bhagavati na Bhagavan. Ni muhimu kutambua kwamba Bhagavan daima amefanyika mwili kama mwanamume. Baba wa Mbinguni, Paramatma, alipata mwili kama Yesu katika umbo la kiume. Kuzaliwa kwake kulitokea kupitia tumbo la uzazi la bikira bila kuhusika na baba wa kibinadamu. Paramatma hupata mwili duniani wakati hitaji linapotokea, na<strong>Yesu</strong>kuwa mwili kama huo. Roho Mtakatifu pia anatarajiwa kufanyika duniani katika siku zijazo.

  Tumeandika maandiko haya ili kukujulisha kwamba haijalishi ni mara ngapi Paramatma hiyo hiyo inazaliwa, Yeye atafichua dharma sawa. Kusudi la andiko hili ni kuwasaidia wasomaji kuelewa maneno muhimu ya Yesu katika Agano Jipya la Biblia na kuyalinganisha na mafundisho ya Bhagavad-Gita.

  Kwa kusoma haya, tunatumai utakuja kujua ukuu wa Yesu na roho ya ndani ya Krishna.

</div></div>
<ion-row><ion-col class="ion-text-center">
<b>Na  <br><br>
Guru pekee wa Dini Tatu, Mwanzilishi wa Thraitha Theorem, Mwandishi wa Maandiko Mia Moja ya Kiungu </b><br><br>
<span style="font-size:20px;font-weight:bold"> Sri. Sri. Sri Acharya Prabodhananda Yogeeshwarulu</span>
</ion-col></ion-row>
</span>`,

},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 2,
verse: `<b>(1) Injili ya Mathayo, sura ya 3, mstari wa 7.</b>`,
meaning: `<b>
(3:7) Enyi wazao wa nyoka! Ni nani aliyewaonya ninyi kuikimbia ghadhabu inayokuja?
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika aya hii,<strong>'kizazi cha nyoka</strong>ni neno jipya. Neno hilo lilitumiwa kurejelea wanadamu. Hata hivyo, kuna shaka ikiwa wanadamu wanaweza kuchukuliwa kuwa wazao wa nyoka. Hii inazua swali kwa yeyote anayesoma aya hii. Katika aya hii, tunahitaji pia kuzama katika maana ya kina ya<strong>'hasira inayokuja.'</strong>Zaidi ya hayo, neno lingine katika aya hii ni<strong>'Nani alikuonya?'</strong>Kifungu hiki cha maneno kinarejelea wakati uliopita, na tunapaswa kutafuta kuelewa ni nani aliyeonya wanadamu hapo awali. Kuna maswali matatu tunahitaji majibu katika mstari huu.

  Ndege ni adui wa nyoka. Ndege anaweza kumuua nyoka. Mwanzoni nyoka huzomea ili kumtisha ndege, lakini ndege haogopi. Ndege anaweza kula nyoka kama chakula chake. Hii ni kawaida maarifa. Nyoka na ndege hutumiwa kama sitiari katika muktadha wa elimu ya kiroho. Njiwa kati ya ndege inalinganishwa na Atma, wakati nyoka inalinganishwa na Maya. Ingawa aya hiyo haimtaji ndege, inamtaja nyoka. Nyoka anapolinganishwa na Maya (Shetani), 'uzao wa nyoka-nyoka' unaweza kueleweka kuwa 'uzao wa Maya.' Ili kuwa sahihi zaidi, 'watoto wa nyoka-nyoka' hutumiwa badala ya 'binadamu pamoja na Maya.'

  Maya inarejelea muundo wa gunaz. Wale wanaojishughulisha na bunduki sikuzote na hawamjali Mungu wanarejelewa kuwa 'watoto wa nyoka-nyoka.' Inajulikana kuwa hasira inayokuja inangojea wale ambao wamenaswa huko Maya. <strong>Ghadhabu, katika muktadha huu, inaashiria kitu kibaya au kigumu kubeba.</strong>Neno 'ghadhabu inayokuja' linapendekeza kwamba haipo kwa sasa lakini itadhihirika katika siku zijazo. Kile ambacho wanadamu hawana mwanzoni lakini watapata kutokana na Maya (gunas) ni aina zote za wema (punya) na karma mbaya (dhambi). Uzoefu unaotokana na karma mbaya inaweza kuwa mbaya sana. Kwa hiyo,<strong>'ghadhabu inayokuja' inarejelea karma ambayo itadhihirika katika maisha ya mwanadamu</strong>. Kila binadamu aliyezaliwa hujilimbikiza karma, ndiyo maana aya hiyo<strong>' Enyi wazao wa nyoka! Ni nani aliyewaonya ninyi kuikimbia ghadhabu inayokuja?'</strong>hutumika kama onyo kwa wanadamu.

  Inapotaja Aya, 'nani aliwaonya? inadokeza kwamba mtu fulani zamani aliwapa wanadamu hekima kutoroka karma. Mstari huu unadokeza kwamba kulikuwa na mtu ambaye alisema wazo hapo zamani ili kuwasaidia watu kukwepa karma iliyokuwa inakuja. Kwa hivyo, ni muhimu kwa wanadamu kufichua utambulisho wa mtu huyu, kuelewa alichosema, na kuamua ni wakati gani aliwasilisha hekima hii. Kukumbuka matukio ya kihistoria ya zamani inaweza kuwa kazi yenye changamoto. Ikiwa jibu la swali la kwanza lililotolewa katika sura ya kwanza ya Injili nne halijulikani, jambo lililo katika andiko la pili la kimungu halitaeleweka. Baadaye, aya zifuatazo kutoka kwa andiko la pili la kimungu haziwezi kueleweka. Kwa hivyo, ni muhimu kutambua jibu la swali la kwanza. Kabla ya kufichua ukweli katika suala hili, hebu tuchunguze umuhimu wa andiko hili la pili la kimungu.

  Hekima ambayo Mungu alitoa ikawa maandiko takriban miaka elfu tano iliyopita. Andiko hili lina sura 18 na liko katikati ya parvas 18 za Mahabharata. Sura hizi kumi na nane zinarejelewa kama andiko la kwanza la kiungu. Mwanzoni mwa uumbaji, Mungu aliwasilisha hekima kupitia anga. Hekima hii ilijulikana kama<strong>'Japara</strong>hekima' wakati huo. Kwa Kitelugu,<strong>'Para' </strong>inaashiria tofauti au tofauti, wakati<strong>'Ja'</strong>maana ya kuzaliwa. 'Japara' hivyo hutafsiriwa kuwa 'kutenganisha au kutofautisha na kuzaliwa.' Ilipata jina hili kwa sababu Mungu hawezi kuzaliwa kamwe. Hekima ya Japara mwanzoni ikawa andiko la kwanza la kimungu na pia likawa andiko la pili la kimungu baada ya miaka elfu tatu yaani takriban miaka elfu mbili iliyopita kuanzia sasa. Takriban miaka 1400 iliyopita, hekima hiyo hiyo ilinakiliwa kama andiko la tatu la kiungu. Sasa tunafasiri sentensi kutoka katika andiko la pili la kiungu.

  Wakati swali 'Nani alikuonya?' inafufuliwa, tunapaswa kuzungumza juu ya yule aliyesema hekima zamani. Kulingana na hili, yule aliyesema hekima katika andiko la kwanza la kimungu ndiye aliyewaonya wanadamu kwanza. Kuna sababu ya kumjua aliyesema zamani. Kwa kuwa ni Mungu pekee anayeweza kusema hekima yake na Mungu ndiye pekee, Mungu huyohuyo hufundisha hekima yake wakati wowote na popote inapohitajika. Kwa hiyo, yule yule aliyesema mapema alisema tena katika mistari. Kwa hiyo, ikiwa tunataka kumjua yule aliyesema hekima katika andiko la pili la kimungu, tunapaswa kwanza kumjua yule ambaye alisema hekima wakati uliopita. Kwa hivyo ikawa muhimu kuuliza swali - ni nani aliyekuonya? Ikiwa unaweza kujua ni nani aliyesema hapo awali, utakuwa na fursa ya kutambua ni nani anayesema sasa. Tunakuhimiza ufikie andiko hili na<strong>imani</strong>kwamba mtu binafsi ambaye aliwasilisha andiko la kwanza la kimungu pia ndiye chanzo cha andiko la pili la kimungu.

  Kabla ya kusoma andiko la pili la kimungu, tunahitaji kujua ni mistari gani ambayo Mungu, ambaye aliambia andiko la kwanza la kimungu, aliwaambia katika maandiko ya Biblia. Biblia ina jumla ya sura 66, na nne kati yake zina mistari iliyosemwa moja kwa moja na Mungu. Sura zingine 62 zina aya kutoka kwa gnani zingine. Sura hizi zinajulikana kama 1) Injili ya Mathayo, 2) Injili ya Marko, 3) Injili ya Luka, na 4) Injili ya Yohana. Masimulizi hayo manne ya Injili yako katika sehemu ya kati ya Biblia, na kuigawanya kwa matokeo katika sehemu kuu tatu. Sura 39 za kwanza zinafanyiza sehemu ya kwanza, ikifuatwa na Injili nne zikiwa sehemu ya pili, na zile sura 23 zinazobaki zikifanyiza sehemu ya tatu. Cha muhimu zaidi ni kuteuliwa kwa sura hizi nne kama<strong>'Injili</strong>,&rsquo; akikazia umaana wao kwa kuwa yana maneno ya Yesu wakati wa maisha Yake duniani.
  <b>
  Sehemu ya kwanza ya Biblia ina sehemu 39.
  Sehemu ya pili ya Biblia ina Injili 4.
  Sehemu ya tatu ya Biblia ina sehemu 23.
  </b>
  Katika sehemu ya kwanza na ya tatu, gnani nyingine zilitoa hekima ya Mungu. Yesu, mwili wa yule aliyetoa andiko la kwanza la kimungu, alirudia mistari katika Injili nne. Kwa hiyo, kuelewa hili, swali<strong>, 'Ni nani aliyewaonya ninyi kuikimbia ghadhabu inayokuja?'</strong>imetolewa. Kwa hiyo, inaweza kusemwa kwamba aya hii, iliyowekwa juu ya nyingine zote, ina umuhimu mkubwa.
</div></div>
</span>`
},

{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 3,
verse: `<b>Injili ya Mathayo, sura ya 3, mstari wa 11</b>`,
meaning: ` <b>
(3:11) Mimi ninakubatiza kwa maji kwa ajili ya kubadilisha mana (akili). Lakini baada yangu anakuja aliye na nguvu zaidi kuliko mimi, ambaye sistahili hata kubeba viatu vyake. Yeye atawabatiza kwa Roho Mtakatifu na kwa moto.
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hii mstari ina ya maneno<strong>'mabadiliko</strong><strong>ya mana'</strong>na<strong>'kubatiza,'</strong>na vilevile 'kwa maji na kwa moto.' Ili kuelewa kikamilifu maana ya mstari huu, ni muhimu kuelewa maneno haya manne. Iwapo neno lolote kati ya haya litaendelea kuwa lisiloeleweka, basi kiini cha Aya kinabaki kuwa kigumu. Kwa hivyo, hebu tuzame maana ya maneno haya manne. Neno la kwanza ni 'mabadiliko ya manas.' Manas (akili) katika mwili wetu huhifadhi na kukumbuka kile ambacho kimejifunza na kuhifadhiwa. Hapa, 'mabadiliko ya manas' inarejelea mabadiliko ya manas. Manas ana jukumu la kukumbuka matukio ya maisha yetu. Mana ya kwanza inapotokea mabadiliko na mana ya pili kuchukua nafasi yake, kumbukumbu zote za mana za kwanza zinafutika. Manas ya pili haina kumbukumbu ya mana ya kwanza. Manas wa kwanza huacha kuishi na kifo, na manas wa pili huibuka na kuzaliwa. Manas ya kwanza inapobadilishwa na manas ya pili, inaitwa 'mabadiliko ya manas.' Mpito huu wa asili wa manas hutokea kwa kila mzunguko wa kuzaliwa na kifo. Ubatizo sio lazima kwa 'mabadiliko ya mana' kwa sababu hutokea kwa kawaida na mchakato wa kifo na kuzaliwa upya.

  Mtu anapokufa na kuzaliwa upya, huacha mwili wake wa zamani na kupata mpya. Mabadiliko haya ya kimwili yanayotokea yanajulikana kama kuzaliwa. Ni muhimu kutambua kwamba wanadamu wana aina mbili tofauti za miili: inayoonekana (ya kimwili) na yasiyoonekana (ya hila). Kama vile mwili wa zamani, unaoonekana unabadilishwa na mwingine mpya katika mchakato wa kuzaliwa, vivyo hivyo, wakati mwili usioonekana, wa hila unafanyika mabadiliko, Wahindu (Indus) hurejelea kuwa.<strong>'upadesa</strong>,' huku Wakristo wakiitaja<strong>'ubatizo</strong>.' Kama ilivyotajwa katika mstari huu, ubatizo unaashiria mabadiliko ya manas zisizoonekana. Sawa na jinsi manas wa zamani, wakiwa wameelemewa na kumbukumbu, hufifia katika kifo, na manasi mpya huibuka wakati wa kuzaliwa, wakati wa ubatizo, manas hupitia mabadiliko makubwa. Inaacha kutukumbusha kumbukumbu za kawaida, za ujinga na huanza<strong>kumbuka hekima na kumbukumbu zinazohusiana na Mungu.</strong>Ubatizo ni mchakato ambao mtu binafsi, akiongozwa na mafundisho ya a<strong>Guru</strong>, hupata mabadiliko ya mana katika maisha. Katika mageuzi haya, manasa mjinga hubadilishwa na kushikamana na hekima.

  <strong>Mabadiliko ya Manas = Kugeuka kutoka kwa ujinga kwenda kwenye hekima. </strong>
  <strong>Ubatizo = Kupata upadesa kutoka kwa Guru.</strong>

  Yohana Mbatizaji alitoa 'upadesa' kwa maji, akisema, "Mimi nawabatiza kwa maji, lakini atakuja mwingine mwenye nguvu kuliko mimi, ambaye atawabatiza kwa Roho Mtakatifu na moto." Hapo awali tumechunguza dhana za 'mabadiliko ya manas' na 'ubatizo' kwa undani. Sasa, hebu tuzame katika maana ya 'maji' na 'moto (kinyume cha maji).' Tunapata ubatizo kutoka kwa Guru, lakini kuna aina mbili za Gurus. Wengine wana nguvu ya hekima (Gnana Shakti), wakati wengine hawana. Gurus wengi kwa kawaida hufanya ubatizo au 'upadesa' kwa kutumia maji. Baadhi wanaweza kutumia maziwa, ambayo yote ni vimiminika vinavyoonekana, huku wengine wakitumia majivu takatifu au moshi wa uvumba kama sehemu ya mchakato. Zaidi ya hayo, wakati wa 'upadesa,' Guru hutoa mantra, neno, au picha, na kuna 'upadesas' nyingi kama hizo zilizopo, zinazotolewa na Gurus mbalimbali. Yohana alikuwa mmoja wa Waguru hawa, naye alikiri waziwazi njia yake, akisema, &ldquo;Mimi ninakubatiza kwa maji.&rdquo; Hata hivyo, alitabiri pia kuwasili kwa mtu mkuu zaidi, ambaye angebatiza kwa Roho Mtakatifu na moto. Tumefafanua 'ubatizo' kama njia ya mabadiliko ya manas kutoka ujinga hadi hekima. Mabadiliko haya yanapotokea kwa njia ya ubatizo, huwa na uwezo wa kutakasa dhambi zote za mtu. Guru anatoa moto ufaao wa kimungu kupitia ubatizo wake ili kuchoma dhambi. Guru anapaswa kumiliki uungu wa moto. Mstari wa kwanza katika sura ya 'Atma Samyama Yoga' katika Bhagavad-Gita, andiko la kwanza la kimungu, linasisitiza umuhimu wa moto huu wa kiungu, likisema, 'cha yogee cha na niragnir nachaakriyah,' maana yake.<strong>"Mtu ambaye anakosa moto huu wa kimungu (Gnana Shakti), na akaacha kutenda sio yoga (Guru)."</strong>

  Yogi halisi (Guru) si yule anayejiepusha na vitendo bali ana sifa ya uwepo wa moto wa ndani, ambao unaashiria<strong>nguvu ya hekima</strong>. Hivi ndivyo aya hiyo inavyotaja kuwa 'ubatizo kwa moto.' Hapa, 'moto' inaashiria<strong>nguvu ya Mungu (Gnana Shakti)</strong>, ambayo haionekani kwa macho. Wakati mtu anapokea moto huu wa kimungu kutoka kwa Guru yao, huwasha nguvu ya kubadilisha ndani yake, inayoweza kuwaka.

  karma yao iliyokusanywa. Moto wa hekima (Gnana Shakti) uliowekwa juu ya mtu aliyebatizwa huanza kuharibu karma yake. Wakati gwiji kama Yohana aliongoza ubatizo kwa madhumuni ya 'mabadiliko ya mana,' yeye<strong>hakuwa na uwezo wa hekima</strong>katika ubatizo wake alihitaji kuchoma karma. Hivyo, alisema, &ldquo;Ninaweza tu kuwabatiza kwa maji.&rdquo; Yohana aliwaeleza watu kwamba ubatizo wake,<strong>kutekelezwa kwa maji</strong>, bila kuchoma karma yao. Badala yake, alitazamia kwamba yule ambaye angekuja baada yake angesimamia ubatizo wenye uwezo wa kutimiza hilo.

  <strong>Ubatizo wa maji = Upadesa usiochoma karma <br>
  Ubatizo wa moto = Upadesa unaochoma karma</strong>
</div></div>
</span>`,
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 4,
verse: `<b>(3) Injili ya Mathayo, 3rd chapter, 12th verse.</b>`,
meaning: `<b>
(12) His winnowing fork is in his hand, and he will clear his threshing floor, gathering his wheat into the barn and burning up the chaff with unquenchable fire.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
  <ion-row><ion-col class="ion-text-center">
  <img src="assets/img/chaata.png"/><br>
  <img src="assets/img/kallam.png"/>
  </ion-col></ion-row>
<div class="poem"><div class="poemtext">
  John, gwiji mashuhuri wa wakati wake, ndiye aliyezungumza mstari huo. Katika enzi hiyo, alitoa 'upadesa' (ubatizo) kwa watu wengi. Yohana alikuwa 'gnani (mtu mwenye hekima)' mkuu na alikuwa ameona kimbele kuja kwa Yesu. Alimbatiza Yesu Kristo (Bhagavan), Mwana wa Mungu. Pia alikuwa gwiji wa Yesu. Ingawa John alikuwa gwiji maarufu na alibatiza watu wengi wakati huo, alikuwa mnyenyekevu. Kabla ya kumbatiza Yesu, alionyesha unyenyekevu kwa kusema, &ldquo;yule anayekuja baada yangu ana nguvu zaidi kuliko mimi, ambaye sistahili hata kubeba viatu vyake.&rdquo; Yesu alipomwendea ili abatizwe, Yohana alikiri uwezo mkuu wa kiroho wa Yesu, akisema,<strong>"Unapaswa kunibatiza. Je, unakuja kwangu kwa ajili ya ubatizo?&rdquo;</strong>Maneno haya yalisemwa na Yohana alipoona kimbele kuhusu kuja kwa Bwana. Aya hiyo pia ina marejeo kwa<strong>atrei ya kupepeta</strong>,<strong>ngano</strong>, na na<strong>moto usiozimika</strong>. Wengine wanaweza kujiuliza juu ya umuhimu wa vipengele hivi kwa vile vinaonekana kuwa vya kawaida. Ikiwa ngano itaokotwa kwa kupepetwa tray na kusagwa na kuchomwa moto, inakuwa mkate. Sisi sote tunatazama trei ya kupepeta, ngano, na moto katika tanuri. Wengine wanaweza kuuliza ni nini kikubwa kuhusu sentensi hii. Aya hii ni sehemu ya andiko la pili la kimungu, na kila mstari kutoka katika andiko hili unatoa hekima ya kimungu. Inapotazamwa kwa hekima na ufahamu wa kiroho, mstari huu una maana ya pekee, inayokazia ukuu wa Yesu Kristo.

  Katika nyakati za kale, ilikuwa ni desturi ya kuweka watoto wachanga kwenye tray ya winnowing (kikapu). Mara tu mtoto alipozaliwa, mchele ungemiminwa kwenye trei ya kupepeta, ukiwa bapa, na mtoto kulazwa juu yake kulingana na desturi. Tabia hii ilikuwa imeenea katika makundi yote ya jamii, kutoka kwa maskini hadi matajiri, kutoka kwa ujuzi hadi wajinga. Imani ilikuwa kwamba Brahma, mungu muumbaji, angeandika wakati ujao wa mtoto mchanga, ambao mara nyingi hujulikana kama<strong>'uandishi wa karma' au 'Brahma Vrata,'</strong>kwenye paji la uso la mtoto wakati wa dakika mbili walizotumia kwenye trei ya kupepeta. Bila kujali imani za kibinafsi, maneno ya Yohana, hasa katika muktadha wa Yesu, yana ukweli. Yohana alitumia mlinganisho, akilinganisha matendo na ngano. Ngano, kama chakula kikuu, hudumisha maisha, lakini hupungua tunapoitumia. Katika hali kama hiyo, Jeevatma hupata karma kwa namna ya vitendo. Tunapopitia uzoefu wa karma, 'karma' ya matendo yetu hupungua. Uandishi wa Karma, unaojulikana pia kama uandishi wa paji la uso au hukumu ya Mungu, unaashiria kwamba karma tunayopata imeandikwa katika miili yetu, na uzoefu wetu wa maisha unaonyesha maandishi haya. Yohana alifananisha matendo yaliyoathiriwa na karma yetu na ngano, na 'sinia ya kupepeta' ilikuwa kwa mfano kichwa ambapo hati hizi zilihifadhiwa. Tunapovuna nafaka kutoka kwa trei ya kupepeta ili kuandaa chakula, kichwa chetu kinafafanuliwa kuwa 'trei ya kupepeta' kwa sababu huhifadhi karma tunayotumia.

  Karma imeandikwa katika kichwa cha mwanadamu bila ufahamu wao. Matokeo yake, hakuna mtu anayeweza kutabiri siku zijazo. Kila binadamu amefungwa na karma na hawezi kuepuka ushawishi wake. Ingawa wanadamu wote wanaonekana kuwa vibaraka tu wanaotumiwa na karma, Roho Mtakatifu au Paramatma inabaki nje ya udhibiti wa karma. Mungu anapochagua kupata mwili kama mwanadamu, Yeye huumba karma Yake mwenyewe kwa kuiandika juu ya kichwa Chake mwenyewe, hivyo kuja Duniani. Hana karma ya asili lakini kwa makusudi anaandika hatima Yake mwenyewe ili kutoa hekima kwa wanadamu. Kuhusu Mungu, ambaye huchukua jukumu la karma yake mwenyewe, Yohana alionyesha,<strong>' Sinia yake ya kupepetea iko mkononi Mwake.'</strong>Hakuna mtu mwingine ulimwenguni anaye na udhibiti kama huo juu ya karma yao. Kinyume na mapungufu ya mwanadamu, Mungu anatengeneza karma yake mwenyewe na kushuka kama mwanadamu duniani ili kushiriki hekima yake. Ni muhimu kuelewa kwamba maisha ya Yesu, tangu kuzaliwa hadi kifo, yalikuwa matokeo ya karma iliyojijenga. Kuzaliwa kwake katika ghala nyenyekevu, mateso yake, na kusulubishwa kwake vyote vilikuwa mazao ya hatima yake aliyojiumba mwenyewe. Hakuna nguvu ya nje ingeweza kuleta kuzaliwa Kwake au kumtesa bila idhini Yake. Aliamua mwendo wa kuwepo kwake duniani, kwa hakika akiwa ameshikilia sinia Yake ya kupepeta.

  Watu wote wa kawaida hupata karma mpya kwa kila tendo wanalofanya. Kila hatua duniani inazalisha karma mpya. Kama vile moshi unavyohusishwa kwa karibu na moto, karma inahusishwa na vitendo. Ni kanuni ya msingi ya Prakruti kwamba kila hatua hubeba matokeo ya karmic. Wakati Mungu anapata mwili na kuonekana kama Mwana wa Mungu (Bhagavan), kila tendo Analofanya pia huzalisha karma mpya. Watu wa kawaida hawawezi kuepuka karma inayokuja. Hata hivyo, Bhagavan Yesu ana moto kamili wa hekima (Gnana Shakti), ukimruhusu kuchoma karma kiasili inayotokana na matendo yake. Kristo, gnani mkamilifu, daima ana nguvu kamili ya hekima. Karma yote huliwa katika moto usiozimika wa hekima. Vitendo vinaunganishwa kihalisi na karma, kama vile nafaka zinavyounganishwa na makapi. Yohana alieleza haya kama,<strong>' Makapi huyachoma kwa moto usiozimika.</strong>ikiashiria jinsi Kristo anavyotokomeza karma inayohusishwa na matendo kupitia hekima yake. Yesu anajitakasa kutoka kwa vumbi la gunas na kuchoma karma iliyofunikwa na matendo yake. Yohana alilinganisha mwili wa Yesu na kiwanja cha kupuria, akifananisha kuondolewa Kwake kwa ushawishi wa gunas, kama vile mtu asafishavyo nafaka. Alilinganisha matendo na ngano, karma inayotokana na matendo hayo hadi makapi, na moto unaoteketeza karma na moto usiozimika. Yohana alijumuisha ukuu wa Yesu katika sentensi moja, hata hivyo, kwa masikitiko, hatujaelewa kikamilifu umuhimu wake.

  Mstari huo unaweza kuonekana moja kwa moja, lakini una maana nzito na zisizo wazi. Injili nne zina mistari mingi yenye kina sawa. Kwa sababu ya hekima yangu ndogo, sijatoa ufafanuzi wa sura zote 66 za Biblia lakini nimekazia maelezo ya Injili nne muhimu, na mara chache nikigusa sehemu nyinginezo.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 5,
verse: `<b>4) Injili ya Mathayo, sura ya 3, aya ya 16 na 17.</b>`,
meaning: `
<b>
(3:16) Mara tu Yesu alipobatizwa, alipanda kutoka majini. Wakati huo mbingu zikafunguka, akamwona Roho wa Mungu akishuka kama njiwa na kutua juu yake.
<br><br>
(3:17) Na sauti kutoka mbinguni ikasema, Huyu ni mwanangu, ninayempenda; naye, nimefurahishwa sana.
</b>
`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yohana alimbatiza Yesu kwa maji. Ubatizo pia unajulikana kama 'upadesa.' Katika Kitelugu, 'upadesa' inamaanisha nchi iliyo karibu na yako. Kwa maneno mengine, ni sawa na nchi jirani. Jirani anaishi katika nchi jirani. Kuna nchi jirani ndani ya mwili wako, na ndani ya nchi hiyo jirani ya mwili wako anakaa jirani. Kila binadamu ana nchi jirani na jirani, ingawa vyombo hivi havionekani kwa binadamu. Guru inaonyesha nchi jirani isiyoonekana wakati wa ubatizo au 'upadesa.' Yohana alimbatiza Yesu kwa maji, na hakuna moto unaohusika katika 'upadesa' huo. Kwa hiyo, inahusu jina na haina nchi jirani na jirani. Walakini, mchakato wa 'upadesa' lazima ufanyike kwa njia hii. Ndiyo maana Yesu alisema katika mstari wa 3:15.<strong>"Na iwe hivyo sasa; inatufaa sisi kufanya hivi ili kutimiza uadilifu (hekima) yote.&rdquo;</strong>

  Ingawa Yesu alipokea upadesa kwa maji, alifahamu nchi jirani ndani ya mwili wake. Aliweza kuona ulimwengu wa nje unaoonekana na nchi jirani isiyoonekana kila wakati. Kwa hivyo, ilizingatiwa upadesa halisi, ingawa upadesa uliotolewa na Yohana ulihusu jina tu. Yesu alibatizwa baada ya kuishi miaka thelathini kama Jeevatma wa kawaida. Kuanzia wakati huo na kuendelea, Alianza kuzungumza juu ya mambo ya kimungu kwa njia ya hekima sio kama Jeevatma, lakini kama Atma. Ili kuonyesha kwamba Yesu, kama Atma, aliwasilisha hekima ya Paramatma, Atma alishuka kama njiwa na kutua juu yake mara baada ya kutoka majini baada ya ubatizo Wake. Zaidi ya hayo, Paramatma (Roho Mtakatifu) alitangaza<strong>, &ldquo;Huyu ni mwanangu, ninayempenda; naye, nimefurahishwa sana.&rdquo;</strong>Roho Mtakatifu (Mungu) alithibitisha kwamba Atma alikuwa Mwanawe mpendwa, na Alionyesha furaha Yake katika Mwanawe mpendwa, Yesu. Kwa hili, inakuwa dhahiri kwamba Roho Mtakatifu ni Baba, na Atma ni Mwana anayejulikana kama Yesu. Haya yote yanaonyesha kwamba Roho Mtakatifu (Paramatma) hakuonekana kama Atma bali aliishi katika ulimwengu huu kama mtu wa kawaida, akionekana kama Jeevatma. Sikusema hivi ili kuwasifu Wakristo au kukuza Ukristo. Ninashiriki nawe kile ninachoamini kuwa ukweli kamili kuhusu jinsi Mungu alivyojidhihirisha Duniani.
</div></div>
</span>`,
},

{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 6,
verse: `<b>5) Injili ya Mathayo, sura ya 4, mstari wa 10.</b> `,
meaning: ` <b>
(4:10) Yesu akamwambia, Ondoka kwangu, Shetani; Kwa maana imeandikwa: Mwabudu Bwana Mungu wako na umtumikie yeye peke yake.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Neno<strong>'Shetani'</strong>imetambulishwa katika aya hii. Katika mistari iliyotangulia, mara kwa mara Shetani anajulikana kama 'mjaribu (shodakudu kwa Kitelugu)' na katika hali nyinginezo kama 'mkashifu (apavadi kwa Kitelugu).' Neno "apavadi" linamaanisha mtu anayehukumu vibaya na kusema uwongo, wakati "shodakudu" inamaanisha mtu anayetafuta maovu ndani yako na, ikiwa yapo, anayadhihirisha. 'apavadi' au 'shodakudu' inarejelewa kama Shetani katika sentensi hii. Zote mbili 'apavadi' na 'shodakudu' ni za lugha ya Kitelugu, lakini neno 'Shetani' halitokani na Kitelugu. Neno 'Shetani' linaonekana mara kwa mara katika andiko hili. Katika nyanja ya elimu ya kiroho, 'Shetani' inatumika kwa kubadilishana na<strong>'Maya</strong>.' Kwa kuwa Shetani na Maya ni kitu kimoja, maelezo ya Maya yanaweza pia kutumiwa kwa Shetani.

  Katika andiko la kwanza la kimungu, Maya inarejelea kiini cha gunas ndani ya kichwa. Kuhusu Maya, andiko la kwanza la kimungu linasema<strong>, 'Gunamayee mama maaya,'</strong>wapi mama maaya' maana yake 'Maya ni wangu,' kama ilivyotangazwa na Mungu. Kulingana na haya, inasemekana kuwa Maya ni mchanganyiko wa gunas. Mungu ndiye muumbaji wa vitu vyote, kutia ndani Maya, na kwa hivyo, Mungu alitangaza kwamba Maya ni Wake. Maya ni wa jinsia ya kike, wakati Mungu na roho mbili, Atma na Jeevatma, waliojitenga na Mungu, ni wanaume (jumla ya watatu). Kila kitu kingine kilichoumbwa na Mungu kinaweza kusemwa kuwa cha kike. Kwa hiyo, Maya inajulikana kama kike. Tusimchukulie Maya kuwa ni mtu wa nje; badala yake, Maya aliyemjaribu Yesu alikuwa ndani ya kichwa Chake mwenyewe. Akiwa anakaa kichwani Mwake, Maya alimjaribu Yesu na kubishana naye. Vile vile, gunas ndani ya kichwa cha kila mtu hufanya kama Maya wao, kila mara wakiwajaribu na kujadiliana nao. Baada ya Yesu kubatizwa, mwanzoni Maya alimjaribu mara tatu, na Yesu akajibu kwa hekima katika pindi zote tatu.

  Yesu aliweka mfano katika maisha yake ambao wanadamu wanapaswa kuiga. Kila Maya alipomjaribu Yesu, alijibu kwa hekima. Kwa hivyo, kila mtu anapaswa kujifunza kufanya vivyo hivyo. Shetani alipomwomba Yesu amsujudie, Yesu alimpa Shetani (Maya) jibu linalofaa. Yesu akamjibu Shetani,<strong>"Mwabudu Bwana, Mungu wako, na kumtumikia yeye peke yake.&rdquo;</strong>Yesu alitamka maneno haya, lakini ni muhimu kuelewa kwamba ilikuwa Atma ndani ya mwili wake ambayo ilizungumza maneno hayo. Roho Mtakatifu, Paramatma, hawasiliani moja kwa moja na mtu yeyote. Badala yake, Anafikisha hekima Yake kupitia Atma. Kwa hiyo, tunapaswa kutambua kwamba hekima ilitolewa na Paramatma Mwenyewe, ingawa ilionyeshwa na Atma ndani ya mwili. Katika andiko la tatu na la mwisho la kimungu, katika 3:7, Mungu anasema, &ldquo;Hekima ya Mungu haijulikani na mtu awaye yote isipokuwa Mungu.&rdquo; Hii inasisitiza kwamba hekima kamili iliyofunuliwa na Atma ndani ya mwili inapitishwa na Paramatma (Mungu).

  Kuna dini kuu kumi na mbili ulimwenguni leo, na Uhindu ni wa kipekee kwa kuwa unajumuisha devatas zote ambazo hazipo katika dini zingine. Mungu aliumba viumbe na wanadamu. Hata hivyo, wanadamu wamemwacha Mungu na kugeukia ibada ya wapotovu, bila kuelewa kikamili hekima ya Mungu. Uchaguzi huo unakazia kwamba wanadamu hawakutanguliza mafundisho ya Mungu kama yanavyopatikana katika maandiko yao. Wale wanaomwacha Mungu na kuabudu devatas wanaweza kuonekana kuwa chini ya ushawishi wa Maya, wakizingatia maneno ya Maya. Katika mpango mkuu, kimsingi kuna pande mbili: upande wa Mungu na upande wa Maya. Hata hivyo, katika dini fulani, watu humwabudu Mungu pekee bila kugeukia mambo mengine mabaya. Kimsingi ni ndani ya Uhindu ambapo ibada ya watu wengi, mbali na Mungu, ni ya kawaida zaidi. Kwa hiyo, inakuwa dhahiri kwamba wale wanaoabudu devatas wanajipatanisha na ushawishi wa Maya.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 7,
verse: ` <b>6) Injili ya Mathayo, sura ya 5, mstari wa 10.</b>`,
meaning: `<b>
(10) Blessed are those who are persecuted because of righteousness (wisdom), for theirs is the kingdom of paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mstari huo unajumuisha neno &lsquo;haki,&rsquo; lakini inapaswa kuwa hivyo<strong>'hekima' badala ya 'haki.'</strong>Katika lugha ya Kiebrania, inaelekea Yesu alitumia neno 'hekima.' Hata hivyo, lilipotafsiriwa katika Kiingereza, neno linalolingana na neno la Kiebrania halikuwakilishwa kwa usahihi, na neno &lsquo;uadilifu&rsquo; lilitumiwa badala ya &lsquo;hekima. Ni muhimu kutofautisha kati ya 'haki' na 'hekima.' <strong>Uadilifu na uadilifu ni dhana zinazohusiana na mambo ya kidunia, wakati hekima na dharma ni asili ya kiungu.</strong>Haki na haki vinahusishwa na karma, wakati hekima na dharma zina uwezo wa kuchoma karma. Tofauti hii inasisitiza kwamba uadilifu unahusiana na ulimwengu wa kimwili, wakati hekima ni ya asili ya kimungu. Katika ulimwengu, tunakutana na uadilifu, ufisadi, haki, na ukosefu wa haki. Uadilifu huongoza kwenye punya (karma nzuri), ambapo ufisadi huleta dhambi. Vile vile, uadilifu hutoa punya, wakati dhulma huzaa dhambi. Kwa kuzingatia tofauti hizi, ni wazi kwamba mstari husika unapaswa kutumia 'hekima' badala ya 'haki.'

  Wale wanaokabili mnyanyaso kwa ajili ya kutafuta kwao hekima na wale wanaovumilia magumu kwenye njia ya hekima wanaweza kuhesabiwa kuwa wenye heri. Hii ni kwa sababu, kupitia mateso yao kwa ajili ya hekima, wanaweza kufikia moksham, ambayo inaashiria ukombozi kutoka kwa utumwa wa karma. Wakati mtu anapata moksham, huvuka uwepo huu wa kidunia na kuingia katika hali tofauti zaidi ya ulimwengu. Inasemekana kwamba mtu kama huyo aliingia paraloka, ambayo ni hali isiyo na uzoefu wa ulimwengu. Ni muhimu kutambua kwamba sio safari ya kila mtu kuelekea hekima inahusisha mateso au vurugu. Baadhi ya watu watapata hekima na kupata moksham (paraloka) bila vizuizi vyovyote.
</dv></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 8,
verse: ` <b>(7)	Injili ya Mathayo, sura ya 5, mstari wa 17.</b> `,
meaning: ` <b>
(5:17) Msidhani kuwa nimekuja kutangua Sheria (Dharma Shastra) au Manabii; sikuja kutangua bali kutimiliza.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hakuna anayeweza kulaani Dharma Shastra. Haiwezi kuhukumiwa. Imekuwapo tangu mwanzo wa uumbaji, na manabii na waalimu wengi wakipeana hekima yake. Wakati Paramatma (Kiumbe Mkuu) anaposhuka duniani kama Bhagavan, Yeye sio tu anatenda Dharma Shastra lakini pia hufanya kanuni zake kueleweka kwa wote. Hata hivyo, wakati Bhagavan, kama Mwana wa Mungu, anapofichua na kutekeleza dharma zilizoainishwa katika Dharma Shastra, zinaweza zisionekane kama dharma kwa baadhi ya watu. Tofauti hii inatokana na ukweli kwamba baadhi ya watu wanaamini kimakosa kuwa adharma ni dharmas. Kwa hivyo, dharma ya kweli inaweza kuonekana kama adharma wakati Bhagavan anapotoa mafundisho Yake. Hii ndiyo sababu Yesu alisema katika mstari hapo juu,<strong>'Msifikiri kwamba nimekuja kutangua Sheria (Dharma Shastra) bali kuitimiza.'</strong>

  Watu ulimwenguni wameangukia katika ushawishi wa Maya (Shetani) na wameamini kwamba adharma ni dharmas. Kwa sababu hiyo, wao hushiriki ibada mbalimbali, wakifikiri kwamba ni ujitoaji wa moyo mweupe. Maya ameelekeza upya ufahamu wa watu juu ya Mungu kuelekea kwake, na kuwaongoza kuamini kwamba wanasonga mbele kuelekea kwa Mungu. Katika mchakato huu, inawaelekeza kufanya mazoezi ya adharma badala ya dharma, kuwaongoza kwa njia tofauti na Mungu. Katika hali kama hiyo, hata wakati Mungu anapata mwili kama mwanadamu na kutekeleza dharma ya kweli, vitendo hivyo vinaweza kuonekana kuwa vya kupotosha kwa wale walioathiriwa na Maya. Watu wanaweza kufikiri kimakosa kwamba wanachofanya ni dharma ya kweli na kwamba wao ni waumini wa kweli. Wanaweza kumshutumu Mungu ambaye amekuja kama mwanadamu kwa kufuata adharma na wanaweza hata kumtaja kuwa ni mkufuru. Wakati Mungu wa kweli alipokuja Duniani kama Yesu, kile Alichosema na kutenda kilikuwa dharmas. Hata hivyo, dharma hizi zilionekana kupingana na mafundisho ya wasomi, swamis, na gurus. Tofauti hii ndiyo sababu wakuu wa makuhani, waandishi, na Kayafa walimpinga na kumshutumu Yesu. Kwa hiyo, Yesu alisisitiza katika mstari huo,<strong>" sikuja kutangua, bali kutimiliza.&rdquo;</strong>
</div></div>
</span>  `
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 1,
pageNumber: 9,
verse: ` <b>(8)	Injili ya Mathayo, sura ya 5, mstari wa 18.</b>`,
meaning: `<b>(5:18) Kwa maana amin, nawaambia, mpaka mbingu na nchi zitakapotoweka, hakuna herufi ndogo kabisa, hata nukta moja ya kalamu, itakayotoweka katika Sheria (Dharma Shastra) mpaka yote yatimie.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika aya hii, neno<strong>'Dharma Shastra'</strong>ni ya kipekee, na huenda wengine wakajiuliza maana yake. Ili kushughulikia maswali kama haya, ni muhimu kuelewa dhana ya shastra (sayansi), aina mbalimbali za sayansi, na upambanuzi wa Dharma Shastra ndani ya uwanja wa sayansi. Kwanza, tukifahamu maana ya neno 'shastra', tutaelewa shastra kwa kiasi fulani. Neno<strong>'shastra'</strong>linatokana na neno la Kitelugu<strong>'shasanam</strong>,' ambayo inatoa wazo la<strong>'lazima itekelezwe.'</strong>Kwa hivyo, 'shastra' inamaanisha<strong>'yote yaliyosemwa lazima yatimie.'</strong>Kwa kuongeza, neno<strong>'shapam'</strong>imechukuliwa kutoka kwa 'shastra,' na inaashiria<strong>' lazima itekelezwe.'</strong>Kwa hivyo, maneno yote matatu - <strong>shasanam' (sheria), 'shapam' (laana), na 'shastra' (sayansi) </strong>shiriki maana sawa ya msingi. Shastra kwa kawaida imeainishwa katika maeneo sita tofauti ya utafiti. Wengine wanaweza kusema kwamba sayansi sita zinaweza kuunganishwa katika aina mbili, wakati wengine wanapendekeza aina tatu. Kwa ujumla, shastra inaweza kuzingatiwa aina mbili. Kwa maneno mengine, tunaweza kuelezea shastra kama tatu. Ikiwa tutaziainisha kama aina mbili, seti moja inahusiana na mambo ya kidunia, na nyingine inahusu mambo yanayohusiana na Paramatma (Mwenye Kuu). Katika uainishaji wa aina tatu, shastra nne zinahusishwa na masuala ya kidunia, moja inahusiana na Paramatma pekee, na nyingine inaangukia katika kundi la kuwa na uhusiano wa sehemu na Paramatma na kwa kiasi fulani kuhusiana na mambo ya kidunia.

  Shastra sita ni kama ifuatavyo: 1) Hisabati, 2) Astronomia, 3) Kemia, 4) Fizikia, 5) Unajimu, na 6) Brahma Vidya. Kati ya hizi, nne za kwanza zinahusika na mambo ya kidunia, wakati ya tano, Unajimu, ina uhusiano na wasiwasi wa kidunia na wa kimungu. Vinginevyo, ikiwa Unajimu pia unazingatiwa ndani ya kategoria ya shastra za kidunia, shastra tano za kwanza zimeainishwa kama za kidunia, wakati Brahma Vidya Shastra inabaki kama sayansi pekee inayohusiana na Uungu. Kuna jumla ya sayansi sita, huku Brahma Vidya akiwa muhimu zaidi. Hii ndiyo sababu inajulikana kama Brahma Vidya shastra, na 'Brahma' ikimaanisha ukuu. 'Brahma' si jina, lakini neno linalotumiwa kuashiria asili kuu na kuu ya Mungu.<strong>Kwa kuwa ni sayansi iliyojitolea kwa ufahamu wa Mungu, inaitwa kwa kufaa Brahma Vidya shastra.</strong>Ikizingatiwa kwamba Brahma Vidya inahusu sayansi ya Mungu, inabeba jina la 'vidya'. Sayansi nyingine tano za kidunia, ambazo ni Hisabati, Unajimu, Kemia, Fizikia, na Unajimu, hazina elimu.<strong>'vidya'</strong>kiambishi katika majina yao. Neno 'vidya' limetengwa kwa ajili ya sayansi inayohusiana na Mungu. Wengine wanaweza kujiuliza juu ya sababu ya tofauti hii, na jibu ni kama ifuatavyo.

  Sayansi inaweza kugawanywa katika aina mbili: inayohusiana na ulimwengu na inayohusiana na Paramatma. Sayansi tano za nyenzo zinaweza kueleweka kikamilifu na mtu yeyote. Hata hivyo, Brahma Vidya, mkuu kuliko wote, anayefichua dharma za Mungu, ndiye pekee anayejumuisha neno 'vidya' katika jina lake, akiipata jina la Vidya shastra mkubwa zaidi. Neno 'vidya' (elimu) linatokana na sauti<strong>'vith</strong>,' ambayo ina maana ya kujua. Vidya inamaanisha maarifa ambayo yanapaswa kupatikana. 'Vidyarthi' (mwanafunzi) ni mtu anayetafuta elimu, akiomba kitu ambacho bado hajakimiliki na kukipata kutoka kwa wenye ujuzi. Wanafunzi hupata elimu muhimu kutoka kwa walimu wenye ujuzi. Vidya inarejelea ujuzi ambao unaweza kujulikana lakini haueleweki kikamilifu. Vivyo hivyo, hakuna anayeweza kudai kwamba anaelewa kikamilifu somo la Mungu. Hakuna anayeweza kudai kwamba wana ujuzi kamili wa Mungu. Kujifunza juu ya Mungu ni ufuatiliaji wa maisha yote, na watu wanaendelea kupata ufahamu katika maisha yao yote. Hakuna mtu anayeweza kusema kwamba hii ni kikomo na kwamba wanajua kila kitu. Wanadamu daima wataendelea kujifunza kuhusu jambo la Mungu, lakini kamwe hawatalijua kikamilifu. Kwa hiyo, sayansi ya Mungu daima inajulikana kama Vidya shastra, na daima ni Brahma Vidya shastra. Kinyume chake, mtu anaweza kufahamu kikamilifu sayansi nyingine tano, bila kuacha chochote zaidi kujulikana. Matokeo yake, neno 'vidya' haliongezwe kwa majina yao.

  Yule aliye na maarifa kamili ya Mungu (Brahma) anaweza kushiriki hekima hii na wengine. Ikiwa mtu binafsi hana ujuzi wa hekima ya Mungu, ni nani mwingine anayeweza kuieleza kwa uhakika? Jibu letu kwa swali hili ni kama ifuatavyo: Mungu pekee ndiye anajua hekima yake mwenyewe. Kwa hiyo, Mungu lazima binafsi atoe hekima Yake. Hata hivyo, Mungu hawasiliani moja kwa moja na mtu yeyote. Badala yake, Mungu, ingawa haonekani kama Mungu, hutoa hekima Yake kwa kuchukua umbo la mwanadamu. Ni muhimu kutambua kwamba ingawa Mungu anaweza kuja katika umbo linalofanana na la mwanadamu, Yeye si mwanadamu. Katika sura ya mwanadamu, Mungu amedhihirisha hekima yake kwa ukamilifu, akiiwasilisha kama sayansi yenye kanuni na maagizo yaliyowekwa. Kwa hiyo, kile ambacho Mungu amefunua kinaitwa Brahma Vidya shastra. Mungu Mwenyewe aliwasiliana na Brahma Vidya shastra, na ni wajibu kwa wanadamu kuielewa. Wakati mtu anapata ufahamu kamili wa Brahma Vidya, anakombolewa kutoka kwa karma na anaweza kuungana na Mungu. Kwa hiyo, ni lazima watu binafsi wadumu katika kupata ujuzi wa sayansi ya Mungu hadi wapate moksham (ukombozi). Kwa hiyo, inaitwa kwa kufaa Brahma Vidya, kwa kuwa ndiyo aina ya elimu ya juu zaidi ulimwenguni.

  Dharma za Mungu zimefafanuliwa katika Brahma Vidya shastra, ndiyo maana inajulikana kama Dharma Shastra katika maandiko matakatifu. Hapo awali Mungu alifunua shastra yake kwa maagizo katika mapambazuko ya uumbaji. Baadaye, maandiko matatu ya kimungu yalitokea kwa nyakati tofauti na katika maeneo tofauti. Maandiko haya matatu ya kiungu yanaweza kuzingatiwa kama Dharma Shastras tatu, ambazo zote zinajumuisha peke yake. dharma. Kwa hivyo, Dharma Shastra zote tatu zinashiriki kanuni sawa na zimejikita katika dharma za Mungu. Wameunganishwa katika kufuata kwao Brahma Vidya na kufundisha dharma za Mungu. Kama matokeo, Dharma Shastras tatu zinathibitishana na hazipingani.<strong>Maandiko ya kwanza ya kiungu yanajulikana kama Bhagavad-Gita, andiko la pili la kiungu linaitwa Biblia, na andiko la tatu la kimungu (maandiko ya mwisho ya kimungu) linaitwa Quran.</strong>Ingawa maandiko haya matatu yana majina tofauti, yanawasilisha dharma ya Mungu mmoja.

  Kufuatia Brahma Vidya shastra, manabii watatu waliwasilisha hekima ya Mungu, ambayo baadaye ikawa maandiko matatu tofauti ya kimungu. Ingawa maandiko haya matatu ya kiungu ni tofauti, yote yanaeleza juu ya dharma ya Mungu mmoja kutoka kwa mitazamo mitatu tofauti. Kwa vile dharma zinazotolewa ndani ya maandiko haya zinatokana na sayansi, zitatimizwa sawasawa kama zilivyoelezwa, kama inavyothibitishwa katika aya.<strong>'mpaka mbingu na nchi zitakapotoweka.</strong>Anga za ulimwengu wa nje na Dunia ni za milele, kama vile Mungu amezifanya hivyo. Hata hivyo, wenzao wasioonekana wa Dunia na Anga ndani ya mwili wa binadamu wanaweza kuharibika kabisa. Kwa hivyo, maneno 'mpaka mbingu na ardhi zitoweke' lazima ieleweke kuwa 'mpaka mwili wa mwanadamu unakufa (kutoweka).' Mtu anapotafuta hekima ya Mungu, ni lazima azingatie amri zote za Mungu (dharmas). Bila kufanya mazoezi ya dharma ya Mungu kwa moyo wote, mtu hawezi kufikia paraloka. Kama ilivyoainishwa katika Dharma Shastra, moksham (ukombozi) unaweza kupatikana tu wakati dharma zote zimetimizwa. Hata kama mtu hafanyi mazoezi hata kidogo ya yale yaliyoainishwa katika Dharma Shastra, hatapata moksham. Badala ya kupendekeza tu,<strong>'hata kama kitu kidogo hakifuatwi kutoka kwa dharma zilizowekwa,'</strong>inaonyeshwa<strong>kama 'sio herufi ndogo zaidi, wala hata alama ya kalamu.'</strong>Kwa hivyo, ni muhimu kufuata kila kipengele cha Dharma Shastra bila kuacha chochote kupuuzwa. Ni muhimu kujua kwamba herufi na kiharusi cha kalamu iliyotajwa havihusiani na maandishi katika kitabu.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 10,
verse: ` <b>(9)	Injili ya Mathayo, sura ya 5, mstari wa 19.</b>`,
meaning: `<b>
(5:19) Kwa hiyo, yeyote atakayeitupilia mbali amri mojawapo iliyo ndogo katika hizo amri na kuwafundisha wengineipasavyo, ataitwa mdogo kabisa katika ufalme wa paraloka. </b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ingawa kuna dharma za kimsingi zilizoainishwa katika Dharma Shastra, nyingi zimeunganishwa nazo. Dharma za Mungu pia zinajulikana kamaamri.kimsingi  Kuna amri mbili muhimu zaidi kati za amri za Mungu, lakini nyingine kadhaa zimeunganishwa nazo. Yeyote anayevunja hata amri ndogo kabisa kati ya hizi amri zilizounganishwa na kutoa mafundisho kama hayo anatenda kinyume haki. Mtu hapaswi kuvuka dharma yoyote, iwe ni ndogo au muhimu, kama ilivyoelekezwa na Mungu. Kila dharma moja, hata iwe ndogo jinsi gani, inapaswa kufanywa kwa bidii bila ubaguzi. Hata hivyo, baadhi ya watu binafsi, badala ya kuambatana na hata dharma ndogo zaidi, wamepotoka kutoka kwenye njia ya dharmas. Hawajakubali tu adharma bali pia wameeneza mafundisho hayo. Licha ya kuonekana kama Gurus na jamii, wameshindwa kuelewa amri za Mungu kwa usahihi. Kwa kusikitisha, wameelewa vibaya dharma za Mungu kama adharma na wamekuwa wafuasi wa adharma. Wanapotosha watu kwa kuwafundisha mafundisho hayo, wakidai kwamba wanawapa hekima ya kweli na amri za kweli za Mungu. Ingawa wanaweza kuheshimika kama Gurus wakubwa machoni pa ulimwengu, machoni pa Mungu, wanachukuliwa kuwa duni.

  Wale wanaozifahamu dharma kwa usahihi huzitoa kama dharma kwa wale wanaopendezwa, hata kama si Waguru wanaojulikana sana. Baadhi ya watu hutafsiri vibaya dharma za Mungu kama adharma na, kwa upande wake, hufundisha adharma hizi. Kwa hivyo, wale wanaofundisha adharma hawawezi kufikia ufalme wa paraloka. Wajinga hawatapata kamwe ufalme wa paraloka, kwani unabaki kufungwa kwao kwa kudumu, wakiwaona kuwa hawastahili. Hata kama mtu anayeelewa amri za Mungu kutoka kwenye maandiko hachukuliwi kuwa Guru, atapata nafasi muhimu katika paraloka wakati anafundisha dharmas wanayojua. Mtu kama huyo hajulikani tu kama mfuasi wa dharmas lakini pia ana heshima kubwa machoni pa Mungu. Mfuasi wa kweli wa dharma ni yule anayetoa kwa uangalifu hata dharma ndogo kabisa ya Mungu kwa undani sana.
</div></div>

</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 1,
pageNumber: 11,
verse: `<b>(10)	Injili ya Mathayo, sura ya 5, mstari wa 20.</b> `,
meaning: ` <b>
      (5:20) Kwa maana nawaambia ya kwamba wema wenu usipozidi ule wa Mafarisayo na wa walimu wa sheria, hakika hamtaingia katika ufalme wa paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ulimwenguni, kuna Mafarisayo wengi, waaminifu, na walimu. Ni muhimu kuwa na hekima nyingi zaidi kuliko wao. Mungu amesema kwamba wale walio na hekima ndogo kuliko Mafarisayo, waaminifu, na walimu hawawezi kuingia paraloka. Kama aya inavyopendekeza, unapokuwa na hekima zaidi kuliko Swami na Mafarisayo, ambao hujishughulisha na yajnas (dhabihu za ibada) na kutenda kinyume na kile ambacho Mungu ameamuru, utapata paraloka kwa urahisi.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 12,
verse: `<b>(11)	Injili ya Mathayo, sura ya 5, mstari wa 28.</b> `,
meaning: `<b>
(5:28) Lakini mimi nawaambia kwamba yeyote anayemtazama mwanamke kwa kumtamani amekwisha kuzini naye moyoni mwake. </b>     `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Matendo ya binadamu yanaweza kugawanywa katika njia mbili tofauti: vitendo vya nje vinavyoonekana na vitendo vya ndani vinavyotokea ndani ya mawazo na hisia za mtu. Vipimo hivi vyote viwili viko katika kila mtu. Kwa njia moja, mtu hujihusisha na vitendo vinavyohusiana na gunas zao na mawazo ya ndani na hisia. Kwa njia nyingine, vitendo sawa vinafanywa kupitia mwingiliano wa gunas na mwili wa kimwili. Matokeo ya vitendo hivi husababisha ama punya (karma nzuri) au dhambi (karma mbaya). Ni muhimu kutambua kwamba kuna aina mbili za vitendo: kimwili (inayoonekana) na isiyo ya kimwili (isiyoonekana).<strong>) Wakati wa kutathmini tabia ya mtu, jamii mara nyingi hutegemea matendo yao ya kimwili yanayoweza kuonekana ili kubaini kama yanachukuliwa kuwa mazuri au mabaya. Hata hivyo, inakuwa vigumu zaidi kufanya maamuzi hayo wakati matendo ya mtu ni ya ndani, yanayohusisha mawazo na hisia, kwa kuwa hayatambuliki kwa urahisi.</strong>Ni vigumu kujua kama mtu ni mzuri au mbaya wakati hatujui matendo yake.

  Ya mtu<strong>aham</strong>(ego au hisia ya ubinafsi), iwe iko katika matendo yao ya kimwili au mawazo yasiyo ya kimwili, ina jukumu muhimu katika kizazi cha karma. Dhambi au punya karma inapokelewa na mtu binafsi kutokana na kuwepo kwa aham katika miili yao. Wakati viungo vya nje vya mwili vinahusika katika utendaji wa kimwili, ni utendaji wa aham ambao huathiri matokeo ya karmic ya vitendo hivyo. Hata wakati mtu hajishughulishi kimwili na kitendo, aham yao, iliyo karibu na buddhi (akili), huambatanisha karma kulingana na kile aham anahisi katika mawazo ya Buddhi wakati kutafakari inafanywa kwa ushawishi wa gunas. Ikiwa aham haifanyi kazi, mtu hatajilimbikiza karma, hata ikiwa anahusika katika kazi ya kimwili au isiyo ya kimwili. Wazo hili linaonyeshwa katika andiko la kwanza la kimungu, haswa katika aya ya 17 ya Moksha Sanyasa Yoga, ambayo inasema,<strong>"Ijapokuwa mtu anaviondoa viumbe vyote duniani bila ya kuwepo kwa aham katika hisia zao, hatapata dhambi kwa kitendo cha kuua, na hatahesabiwa kuwa ni muuaji.&rdquo;</strong>Hili linatilia mkazo umuhimu wa aham katika kuamua matokeo ya kimaadili ya matendo ya mtu. Yesu pia alitoa ujumbe kama huo aliposema,<strong>'Utapata dhambi kupitia mawazo yako kwa sababu ya aham, hata kama haujafanya tendo hilo kimwili.'</strong>Hilo lafunua umoja katika mafundisho ya maandiko ya kimungu ya kwanza na ya pili, pamoja na uthabiti wa hekima inayotolewa. Matendo ya mtu yanayofanywa bila aham yanazingatiwa kana kwamba hayakufanywa, na mawazo yanayohusisha aham yanachukuliwa kana kwamba kitendo hicho kilitekelezwa. Kwa hivyo, uwepo wa aham ndani ya mwili huathiri mkusanyiko wa punya na dhambi na Jeevatma. Kwa hiyo, ilielezwa kutoka kwa mwanzo wa uumbaji kwamba 'kufanya vitendo bila aham ni Karma Yogam,' dhana iliyorudiwa katika maandiko ya kwanza na ya pili ya kimungu.
</div></div>
</span>`
    },
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 13,
verse: `<b>(12)	Injili ya Mathayo, sura ya 5, aya ya 29 na 30.</b>`,
meaning: ` <b>
(5:29) Ikiwa jicho lako la kulia likikukosesha, ling'oe na ulitupe mbali. Ni afadhali kwako kupoteza kiungo kimoja cha mwili wako, kuliko mwili wako wote kutupwa katika jehanum.
<br><br>
(5:30) Na mkono wako wa kulia ukikukosesha, ukate na uutupe. Ni afadhali kwako kupoteza kiungo kimoja kuliko mwili wako wote kwenda jehanamu.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aya 29 inataja<strong>'jicho,'</strong>na mstari&nbsp;30 inataja<strong>'mkono.' </strong>Baada ya uchunguzi wa karibu, inakuwa dhahiri kwamba mwili wa mwanadamu una aina mbili za sehemu za mwili: kimwili au inayoonekana na isiyo ya kimwili au ya hila. Kuna jumla ya sehemu kumi (10) za mwili na sehemu kumi na tano (15) za mwili zilizofichika, na kufanya hesabu iliyojumuishwa kuwa 25, pamoja na Jeevatma. Kila sehemu ya mwili inalingana na kazi tofauti ndani ya mwili. Mwili wa mwanadamu una gnanendriyas tano (viungo vya hisia) na karmendriyas tano (viungo vya magari). Haya seti mbili za viungo kwa pamoja huwezesha vitendo vya kimwili. Gnanendriyas, ambayo ni pamoja na jicho, sikio, pua, ulimi, na ngozi, hutumika kama vipokezi vinavyosambaza taarifa za nje kwa uwezo wa ndani. Vile vile, kuna karmendriyashands tano, miguu, mdomo, mkundu, na kiungo cha ngono. Kisha manas (akili) huifikisha habari hii kutoka kwenye hisia hadi kwa buddhi(akili). Wakati gnanendriyas hutumikia kusambaza taarifa za nje kutoka kwa mazingira hadi kwenye vitivo vya ndani, Buddha wa ndani hupeleka maagizo kupitia manas kwa karmendriyas, ambayo baadaye hufanya vitendo kama ilivyoelekezwa na buddhi.

  Wanadamu hufanya vitendo vinavyoratibiwa na mwingiliano wa gnanendriyas (viungo vya hisia) na karmendriyas (viungo vya gari). Hasa, the<strong>jicho</strong>miongoni mwa gnanendriyas na<strong>mkono </strong>miongoni mwa karmendriyas wana umuhimu fulani, ndiyo maana zote zimetajwa katika aya hizi. Hata kama buddhi (akili) haielekezi karmendriyas kutekeleza kazi fulani, bado dhambi inaweza kuhusishwa na mtu kulingana na mawazo ya Buddhi wakati aham (ego), iliyounganishwa kwa karibu na Buddhi, inafanya kazi. Hii inasisitiza jukumu muhimu la jicho katika dhambi inayoweza kutokea. Kwa mfano, mtu anapomtazama mwanamke mwenye mawazo ya matamanio, anaweza kupata dhambi kutokana na ushawishi wa aham, hata kama hajamdhuru mtu mwingine kimwili. Jicho, kwa namna hii, hutengeneza uwezekano wa kuambatanisha dhambi kwa mtu binafsi kwa matendo ambayo hayawezi kutokea katika ulimwengu wa kimwili. Kwa hiyo, aya hiyo inatuusia &lsquo;kuchuna jicho nje na kulitupa.' Walakini, ni muhimu kutambua kwamba hii haipaswi kuchukuliwa kihalisi, kwani kuondoa jicho la mtu sio maana iliyokusudiwa ya aya. Mstari huo unataja haswa 'jicho lako la kulia,' lakini ni muhimu kuelewa kwamba jicho la kulia na la kushoto linaweza kusababisha matokeo sawa. Dhambi inaweza kutokea kutoka kwa macho yote mawili. Kutajwa kwa jicho la kulia peke yake kunachochea kutafakari juu ya sababu ya tofauti hii.
</div></div>

<div class="container" style="color:black;font-size: 11px;">
          <img src="assets/img/gnanendriyalu.png"  style="width:100%;">
          <div class="io-jeeva">
            Jeeva
          </div>
          <div class="io-mind">
            Akili
          </div>
          <div class="io-chittam">
            Chittam
          </div>
          <div class="io-intellect">
            Buddhi
          </div>
          <div class="io-ego">
            Ego
          </div>
          <div class="so-eye">
            Jicho
          </div>
          <div class="so-nose">
            Pua
          </div>
          <div class="so-ear">
            Sikio
          </div>
          <div class="so-tongue">
            Lugha
          </div>
          <div class="so-skin">
            Ngozi
          </div>
          <div class="ao-hands" style="font-size:6px">
            Mikono
          </div>
          <div class="ao-legs" style="font-size:6px">
            Miguu
          </div>
          <div class="ao-mouth" style="font-size:6px">
            Mdomo
          </div>
          <div class="ao-anus" style="font-size:6px">
            Mkundu
          </div>
          <div class="ao-sex-organ" style="font-size:6px">
           Kiungo <br> cha <br> ngono
          </div>
        </div>

  Mwili wa mwanadamu kwa kawaida huonyesha tofauti kati ya pande zake za kulia na za kushoto, mara nyingi zinazohusiana na nguvu na udhaifu. Katika aya iliyotajwa, sehemu zote za mwili za upande wa kulia, yaani jicho la kulia na mkono wa kulia, zimebainishwa. Jambo lingine muhimu la kuzingatia katika aya hii ni kauli<strong>, "Ni afadhali kwako kupoteza kiungo kimoja cha mwili wako kuliko mwili wako wote kutupwa katika jehanum."</strong>Ni muhimu kutambua kwamba wala jicho wala mkono, kama viungo vya nje, si vyanzo vya moja kwa moja vya dhambi. Kichocheo kikuu cha dhambi ni uwepo wa aham (ego) ndani ya mwili. Mtazamo huu unalingana na mafundisho yanayopatikana katika maandiko ya kwanza na ya pili ya kimungu. Kwa hiyo, inakuwa dhahiri kwamba viungo vya nje vya mwili havishiriki moja kwa moja katika kupatikana au uzoefu wa dhambi.<strong>Ni hisia ya aham ndani ya mwili ambayo huleta dhambi. Jeeva inayoishi katika mwili hupata dhambi. </strong>Jukumu la kupata karma liko kwenye hisia za aham, na ni jukumu la Jeeva kupata athari za karma. Kwa hiyo, jicho la nje (gnanendriya) na mkono (karmendriya) hufanya kazi bila kuzingatia karma.

  Huenda wengine wakashangaa kwa nini Yesu alishauri kung'oa jicho na kukata mkono wakati mambo hayahusiani na karma. Majibu yetu ni kwamba jicho linaposambaza taarifa za nje humfikia buddha (akili). Baadaye, Buddhi anakiri habari hii kwa mujibu wa gunas. Hata hivyo, ikiwa<strong>aham (ego) amekandamizwa na kutengwa</strong>kutokana na pembejeo hizi za hisi, inazuia dhambi na punya kudhihirika kwenye gunas ambayo Buddhi huichakata au kuona kwa macho Kwa kutenganisha aham ya ndani kutoka kwa habari iliyotolewa na jicho, mtu anaweza kuzuia kwa ufanisi dhambi inayohusishwa na jicho, sawa na kuondoa jicho yenyewe. Vile vile, wakati aham haijaunganishwa na kile kinachosikika, ni kama sikio limeondolewa. Ni ni muhimu kutambua kwamba dhambi na punya haitokani na macho tu bali pia na hisi nyingine nne. Kwa kuzingatia jukumu muhimu la jicho kati ya gnanendriyas na kutawala kwa asili kwa jicho la kulia katika mtazamo wa kuona, Yesu alisisitiza 'kung'oa jicho la kulia' katika mstari huo. Ingawa mstari unaweza kuonekana moja kwa moja, umuhimu wake wa hila unapaswa kueleweka.

  Vivyo hivyo, kutajwa kwa mkono wa kulia kati ya karmendriyas kuna umuhimu. Karma haitoki tu kutoka kwa mkono wa kulia bali pia kutoka kwa vitendo vinavyofanywa na karmendriyas zingine. Karma hutokea hata wakati gnanendriyas haishiriki katika kazi za kimwili na inazalishwa kupitia utendaji wa karmendriyas. Tunaporejelea gnanendriya tano, tunaweka macho mawili kama kitu kimoja, kama vile masikio yote yanavyohesabiwa kuwa moja. Ingawa kuna pua mbili, kwa pamoja zinachukuliwa kama pua moja. Vipengele vilivyobaki vinajumuisha ngozi na ulimi. Vile vile, katika karmendriyas, mikono miwili inachukuliwa kuwa moja, na hiyo inatumika kwa miguu miwili. Tatu zilizobaki ni mdomo, mkundu, na kiungo cha ngono na haziko katika jozi. Kwa kuzingatia kwamba jicho la kulia na mkono wa kulia vinatawala zaidi kwa kulinganisha katika viungo hivi vilivyooanishwa, aya hii inabainisha jicho la kulia na mkono wa kulia. Jicho la kulia lina uwezo wa kuona vizuri zaidi, na mkono wa kulia ni rahisi zaidi katika kutekeleza majukumu. Katika tafsiri ya hila ya mstari, Yesu alituambia<strong>kukandamiza aham ili kuzuia dhambi itokayo kwa macho na matendo ya mkono.</strong>Walakini, ni muhimu kuelewa kwamba kuondoa jicho la kulia au mkono wa kulia hakuzuii uingiaji wa karma, kwani viungo vingine vya mwili vinaweza pia kusababisha karma. Aya hii inakazia wazo la kwamba aham ndiye chanzo kikuu cha dhambi, ikisisitiza haja ya kuidhibiti. Viungo vya mwili havizai dhambi, wala mwili haubebi mzigo wa dhambi. Badala yake, ni aham ambayo hukusanya dhambi ndani ya mwili. Zaidi ya hayo, Jeevatma, sehemu ya mwili, hupata karma mbaya na nzuri. Mwili huo unajumuisha gnanendriya tano, karmendriya tano, vayus tano, tanmatra tano, na antahkarana tano, na Jeevatma ikiwa ni sehemu ya antahkarana. Hii inajumlisha hadi jumla ya vipengele ishirini na tano, ikiwa ni pamoja na Jeevatma ndani ya mfumo wa mwili. Kimsingi, ufahamu wa kina wa taratibu za mwili unaweza kusababisha ufahamu wa kina wa mistari ya Yesu. Gnani wa kweli hutambua muundo huu mgumu wa mwili. Kama mwanamizimu aliyewahi kuwasilishwa kwa kishairi, mtu yeyote asiye na ujuzi huo hapaswi kuchukuliwa kuwa gnani.
  <br>
      <b> <i>
      Panchatatvamulanu panchikarinchaka<br>
      Manchi yatulamanna maatalanna<br>
      Kunchamandu gajamu gruddupettina chandambu<br>
      Akhila jivasanga aatmalinga.
  </i></b> <br><br>
<b>Maana:-</b> Neno sankhya linamaanisha maarifa ya kina ya Pancha Bhutas, ambayo ni pamoja na Anga, Hewa, Moto, Maji na Dunia. Ujuzi huu unajumuisha ufahamu wa jinsi kila moja ya vipengele hivi viliumbwa, jinsi vilivyogawanywa katika vipengele vitano tofauti, na jinsi sehemu hizi ishirini na tano kwa pamoja zinavyounda viungo na vipengele mbalimbali vya mwili, vinavyoonekana na visivyoonekana. Kujiona kuwa gnani (mjuaji au mtu aliyeelimika) bila kuwa na ufahamu wa kina wa Sankhya ya mwili ni sawa na kutoa madai ya uwongo. Ni sawa na kudai kwamba tembo alitaga yai chini ya kikapu. Kwa kweli, hata ikiwa tembo angefungwa kwa minyororo kwa usalama na kuwekwa chini ya kikapu, hawezi kutaga mayai. Kwa hiyo, madai kwamba tembo alitaga mayai chini ya kikapu haina msingi kabisa. Katika hali kama hiyo, ni makosa kwa mtu kujitangaza kuwa gnani wakati hana ujuzi wa mambo tata kuhusu viungo vya mwili.
Hekima ya kweli huhitaji ufahamu mwingi wa umbo la mwili, kutia ndani sehemu zake zinazoonekana na zisizoonekana.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 14,
verse: `  <b>(13)	Injili ya Mathayo, sura ya 6, aya ya 3 na ya 4.</b>`,
meaning: ` <b>
(6:3) Lakini unapofanya dharma, usijulishe mkono wako wa kushoto unaofanya mkono wako wa kulia.
<br><br>
(6:4) Ili kutoa kwenu kuwe kwa siri. Kisha baba yako, ambaye anaona yale yanayofanywa kwa siri, atakupa thawabu.
</b>`,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wahubiri wengi wametafsiri aya hii kimakosa, wakipendekeza kwamba inahusu mchango. Katika sehemu fulani za ibada, inapendekezwa hata kwamba pesa zinazotolewa kwa ajili ya utumishi wa Mungu ziwe za busara hivi kwamba &ldquo;mkono wa kuume usijue ufanyalo mkono wa kushoto.&rdquo; Kwa sababu hiyo, michango mara nyingi hufichwa au kufungwa mkononi mwa mtu kabla ya kuchangwa. Hata hivyo, ni muhimu kufafanua kwamba aya hii haihusu mchango; ni kuhusu dharma. Kuna tofauti kubwa kati ya dharma na mchango.<strong>Mchango unahusisha kutoa kwa wengine, wakati dharma inarejelea mazoea ya kanuni-sone.</strong>Ili kuelewa kweli jinsi ya kufanya mazoezi ya dharma, ni muhimu kuelewa ni nini dharma hizi zinajumuisha. Katika aya hii, hakuna kutajwa kwa mchango; badala yake, inasisitiza dharma. Dharma za Mungu kimsingi ni mbili, kama zilivyoainishwa katika maandiko matakatifu. Ya tatu ni ya kimwili. Pia kuna dharma zingine ambazo zimeunganishwa na hizi tatu za msingi. Ili kufikia Mungu, mtu kimsingi anahitaji kuzingatia dharma hizi tatu muhimu, wakati dharma zingine zinahusu vipengele vya Mungu. Dharma hizi tatu za msingi ni mazoea muhimu ya kumfikia Mungu.

  Dharma tatu, Brahma, Karma, na Bhakti Yoga, ni muhimu kufikia Mungu. Mbili kati yao inahusisha mambo ya ndani fanya mazoezi na hisia au mawazo, wakati moja inahusisha mazoezi ya nje. Utendaji wa dharma mbili za kwanza hautambuliki na wengine. Walakini, inapokuja kwa dharma ya tatu, kuna uwezekano wa kutambuliwa na wengine. Hii ndiyo sababu, katika mstari huo, Yesu anarejelea 'dharma' ya umoja badala ya 'dharmas.' Anasisitiza kwamba mtu anapaswa kufanya dharma ambayo inaweza kutambuliwa na wengine kwa tahadhari na kwa siri. Anaeleza haya kwa kusema,<strong>"mkono wako wa kushoto usijue ufanyalo mkono wako wa kuume.</strong>Ujumbe wa msingi ni kwamba wengine wanapotazama mazoezi yako ya dharma, wanaweza kutafsiri vibaya au kuathiriwa vibaya. Kwa hiyo, Yesu anashauri kwamba wakati wa kutumia dharma, inapaswa kufanywa kwa busara na bila kutafuta kutambuliwa na wengine.
</div></div>
</span>`
},
{
  chapterName: "Injili ya Mathayo",
  chapterNumber: 2,
  pageNumber: 15,
  verse: `  <b>(14)	Injili ya Mathayo, sura ya 6, mstari wa 6.</b> `,
  meaning: `<b>
  (6:6) Bali wewe usalipo, ingia katika chumba chako cha ndani, na ufunge mlango, na usali mbele za Baba yako asiyeonekana. Kisha baba yako, ambaye anaona yale yanayofanywa kwa siri, atakupa thawabu.</b>`,
  pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Unapoomba kwa Mungu, ni muhimu kuhakikisha kwamba maombi yako yamejazwa na dharma. Maneno ya maneno tu bila dharma hayajumuishi maombi ya kweli na hayatakuunganisha na Mungu. Kwa hiyo, wakati wa kushiriki katika sala ambayo inaweza kutazamwa na wengine, Yesu aliambia uingie katika chumba cha faragha, ufunge mlango, na usali sala zako kwa Atma ya ndani, uwepo wa Mungu ndani yako. Atma, ambaye yuko katika mwili, ndiye baba wa wanadamu. Sala ambayo inaweza kujulikana kwa wengine inapaswa kufanywa kwa njia ambayo hakuna mtu anayeijua. Kwa kufanya hivyo, Atma, ambaye yuko kwa siri katika mwili, atakulipa. Katika andiko la kwanza la kimungu, tendo hili linarejelewa kama <b>'Brahma (Mkuu) Yoga.</b>'
</div></div>
  </span>`
    },
    {
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 16,
verse: `  <b>(15)	Injili ya Mathayo, sura ya 6, aya ya 7 na ya 8. </b> `,
meaning: `  <b>
(6:7) Nanyi mnaposali, msiendelee kupayuka-payuka kama washirikina, kwa maana wao wanadhani kuwa watasikiwa kwa sababu ya wingi wa maneno yao.
<br><br>
(6:8) Msiwe kama wao, kwani baba yenu anajua mnachohitaji kabla hamjamwomba.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Watu wengi katika jamii leo huomba kwa maneno yasiyo na maana badala ya kuomba<b>'Yoga,'</b>ambayo hushikamana na dharma katika kumfikia Mungu. Wanafikiri kwamba Mungu atatimiza matakwa yao ikiwa wanatumia maneno mengi. Nia yao si kuungana na Mungu, bali ni kutafuta matamanio na manufaa ya kidunia. Walakini, haupaswi kuomba kama wao. Baba yako, Atma, tayari anajua kila kitu hata kabla ya kuuliza. Anajua ni nini unapaswa kupewa au usipewe. Kwa hivyo, haina maana kuuliza juu ya faida za nyenzo. Baba yako, Atma, anakuongoza kulingana na karma yako. Kwa hivyo, Atma hukupa kile ulichonacho umepata kupitia karma yako ya zamani. Ikiwa unauliza au la, Atma hutoa kila kitu kulingana na karma. Atma ndiye Baba wa wanadamu wote, na Roho Mtakatifu, Baba wa Atma, ndiye shahidi wa vitu vyote.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 17,
verse: ` <b>(16)	Injili ya Mathayo, sura ya 7, aya ya 13 na 14.</b> `,
meaning: `<b>
(7:13) Ingieni kwa kupitia mlango mwembamba. Maana mlango ni mpana, na njia ni pana iendayo upotevuni, nao ni wengi waingiao kwa mlango huo.
<br><br>
(7:14) Lakini mlango ni mdogo, na njia ni nyembamba iendayo uzimani, na waionao ni wachache.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuna njia mbili katika ulimwengu huu: moja ni njia ya Paramatma (Roho Mtakatifu), na nyingine ni njia ya Maya. Ingawa kuna wachache sana wanaomtafuta Mungu, wengi wanavutwa kwenye njia kubwa ya Maya. Lango la kuelekea moksham ni jembamba na ni gumu kupita. Njia ya Mungu vile vile ni nyembamba, na ni wachache tu wanaoweza kuigundua.

  Aya inataja mlango wa Mwenyezi Mungu (mlango) na njia. Ya kwanza ni mlango, na inayofuata ni njia. Kuna barabara mbili tu kwa wanadamu wote. Moja ni nyembamba, na nyingine ni pana. Lango la njia nyembamba ni nyembamba, na lango la njia pana ni pana. Mlango na njia lazima iwe kubwa mara chache kuliko yule anayeingia. Kisha inawezekana tu kuingia lango na barabara. Ukubwa wa lango jembamba na upana wa njia nyembamba ni sawa na saizi ya mtu anayeingia. Lakini katika chaguo la pili, ukubwa wa lango pana na upana wa barabara pana ni kubwa mara 108 kuliko mtu anayeingia. Kwa njia hii, kuna njia mbili tu katika ulimwengu huu —moja yenye lango pana mara 108 na barabara pana, na nyingine ikiwa lango na njia ya ukubwa kamili. Bwana alilinganisha aina hizi mbili za milango na njia za hekima na ujinga. Njia ya hekima ni nyembamba sana, na ukubwa wa mlango ni mdogo, na kufanya iwe vigumu kutembea. Njia ya ujinga ni kubwa mara 108 na haina vikwazo. Njia ya hekima ni nyembamba na ina vikwazo, lakini marudio yake ni Paramatma. Ingawa hakuna vizuizi kwenye lango pana na njia pana ya ujinga, inaongoza kwa Shetani. Njia ya Paramatma haina kuzaliwa na kifo, bila uharibifu, na daima iko katika hali ya kutobadilika. Njia ya Shetani ina kuzaliwa, kifo, na uharibifu na daima iko katika hali ya mabadiliko. Ingawa njia ya Paramatma ni bora zaidi, na njia ya Shetani ndiyo mbaya zaidi, watu wengi huchagua kutembea kwenye njia ya Shetani. Mtu anapoingia katika njia ya Shetani, washirika wake wote wanamuunga mkono na hawasababishi matatizo yoyote. Hakutakuwa na shida za kifedha, na maisha yatahisi vizuri. Walakini, mtu anapochagua njia ya hekima, jamaa na wenzi wao wanaweza kuwa maadui na kuzuia safari yao. Maisha yanaweza kuwa magumu. Kwa hiyo, ni wachache sana, ikiwa wapo, kati ya mamilioni wanaochagua njia ya hekima.

  Watu wengi wanasafiri kwenye njia kubwa ya ujinga, ambayo haileti kizuizi au upinzani. Kwa kushangaza, wao hubakia kutojua kuwepo kwa njia nyembamba inayoelekea moksham na Baba wa paraloka. Katika Bhagavad-Gita, Krishna anasema kwamba hakuna hata mmoja kati ya maelfu anayetaka kuvuka njia nyembamba. Ni mara chache mtu huingia humo, na hata mara chache zaidi hufika kulengwa kwa sababu ya vizuizi vilivyoletwa na Maya. Krishna, katika Bhagavad-Gita, anasisitiza zaidi kwamba mtu anayeshinda vizuizi hivi na kufikia hatima anachukuliwa kuwa 'aliyebarikiwa,' na mtu kama huyo ataungana na Paramatma ya milele. Wote Krishna na Yesu wanawakilisha Paramatma. Krishna alifafanua njia za hekima na ujinga katika Bhagavad-Gita kuelekea mwisho wa Dvapara Yuga, wakati Yesu aliwasilisha ujumbe sawa katika maandishi takatifu, miaka elfu tatu katika Kali Yuga. Wale wanaofahamu njia za hekima na ujinga kama zilivyofafanuliwa na Sri Krishna na Yesu Kristo wanapaswa kuanza njia iliyopendekezwa ya hekima, wakiendelea licha ya vizuizi vyote, hadi wafikie Paramatma, ambayo ni moksham ya milele.

</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 18,
verse: ` <b>(17)	Injili ya Mathayo, sura ya 7, aya ya 7 na ya 8.</b>
`,
meaning: `
<b>
(7:7) Ombeni nanyi mtapewa; tafuteni nanyi mtapata; bisheni nanyi mtafunguliwa mlango.<br><br>
(7:8) Maana kila aombaye hupokea; atafutaye huona; naye abishaye, mlango utafunguliwa.
</b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika aya hii, vitenzi vitatu muhimu&mdash;<strong>kuuliza, kutafuta, na kubisha</strong>. Yesu alituagiza kufanya mambo haya matatu katika muktadha wa kiroho. Mafundisho ya Bwana hayazunguki katika mambo ya kidunia, tofauti na mengine mengi. Kwa bahati mbaya, wengi wameelewa vibaya aya hii, wakiifasiri kama wito wa baraka za kimwili. Kwa hiyo, watu walianza kuomba upendeleo wa kidunia kutoka kwa Bwana, kinyume na ujumbe Wake wa asili. Ingawa watu wanasoma Biblia Takatifu, Shetani ameingia mioyoni mwao, akitia giza uelewaji wao wa mafundisho ya Yesu na kuwaongoza kutafuta tamaa za kimwili. Kusudi la mwanadamu sio kuhalifu neno la Mungu, lakini Shetani anajitolea kwa kukosa kwao ufahamu, akiwadanganya kwa kufikiria kuwa hawavunji amri za kimungu. Kwa kweli, hii inawaongoza kuhalifu neno la Mungu. Shetani, kiumbe wa Mungu, yupo popote pale ambapo uwepo wa Mungu unahisiwa. Popote ambapo neno la Mungu linakaa, ushawishi wa Shetani unaweza pia kuwepo. Kwa hiyo, ni muhimu kuelewa kwa bidii aya za Mungu na kujilinda dhidi ya ushawishi wa Shetani tunapofasiri maandiko.

  Tunapaswa kumwomba Mungu, kumtafuta Mungu, na kubisha mlango wa Mungu. Hii ndiyo njia ya Mungu. Ikiwa unaomba kitu kingine au kutafuta kitu kingine, itakuwa ni njia ya Shetani (Maya). Wale wanaofuata njia ya Mungu wanatafuta hekima ya Mungu. Unaweza kuwa na maswali mengi: Mungu yukoje? Tunawezaje kumfikia Mungu? Je, tunawezaje kuelewa maelezo yote kuhusu Mungu? Usifikirie kuwa hakuna mtu Duniani anayeweza kujibu maswali haya. Mungu huja na kutoa majibu unayotafuta wakati wanadamu Duniani hawawezi kupata habari za Mungu kwa sababu ya ushawishi wa Shetani. Unaweza kupata majibu kwa maswali yako, lakini huenda usitambue ni nani anayetoa majibu haya. Hata wakati Mungu anazaliwa duniani na kutoa majibu, mara nyingi tunamwona kama mwanadamu wa kawaida badala ya Mungu. Ukiuliza utapata hekima kamili. Ukipekua utagundua Mungu amekuja Duniani katika umbo la mwanadamu. Mungu anapopata mwili Duniani, Hadai kuwa Mungu na Hajidhihirishi kwa yeyote. Huu ni utawala Wake. Kulingana na kanuni hii, wale ambao hawatatafuta hawatapata, lakini watafutaji watamtambua. Kwa kuwa ni wachache waliouliza hekima wakati Bwana Yesu alipokuwa duniani, aliwashirikisha hekima yake. Kwa sababu kulikuwa na watafutaji wachache sana, Hakuonekana kama Mungu kwa yeyote; kwa wote, Alionekana kama mtu wa kawaida. Wanafunzi wake kumi na wawili, pia, walimwona kama mhubiri na hawakujua kwamba Paramatma, ambao alizunguka ulimwengu wote, alikuwa amefanyika mwili kama Yesu. Alitenda kimakusudi kwa njia ambayo ilizuia mtu yeyote asimtambue kuwa Mungu.

  Mfalme wa Paraloka, Paramatma, aliosha miguu ya wanafunzi wake wakati alipokuwa duniani kama mwanadamu. Kitendo hiki cha unyenyekevu ilifanya iwe changamoto kwa wanafunzi Wake na wengine kumtambua. Kwa kusikitisha, watu walishindwa kumtambua Yeye kama Bwana na kumtendea bila heshima, wakimchukulia kama mtu wa kawaida. Alivumilia kutemewa mate usoni Mwake, taji ya miiba juu ya kichwa chake, kupigwa, na kusulubishwa. Hata Yesu alipokufa na kufufuka na mwili uleule siku ya tatu, baadhi ya wanafunzi wake walimdhania kuwa ni shetani. Hii inaangazia kwamba wanafunzi Wake walikuwa wadadisi lakini hawakutafuta kikweli.

  Kama msemo unavyokwenda<strong>, "kuona ni kubwa kuliko kusikiliza,"</strong>wale waliomshuhudia ana kwa ana walishikilia hadhi ya juu kuliko wale waliosikia tu mafundisho Yake. Ingawa watu walikuwa na fursa ya kumwona Mungu wa ulimwengu mzima katika umbo la Yesu, ilikuwa kana kwamba hawakumwona Yeye kwa kweli. Katika muktadha huu, Bwana alielezea wanafunzi wake kama vipofu, licha ya kuwa na macho ya kimwili. Ili kuepuka upofu huo, mtu anapaswa kumtafuta Mungu kwa bidii. Kama mstari unavyopendekeza, kila aombaye hupokea, na kila atafutaye huona. Kwa hiyo, muulizaji hupokea maneno ya Mungu, mtafutaji anapata umbo la Mungu. Anayeona ni mkuu kuliko asikiaye na mwenye uzoefu ni mkuu kuliko aonaye. Kulingana na kanuni hii, yule anayebisha anapata ufikiaji wa eneo la moksham. Kubisha, katika muktadha huu, si kuhusu kugonga mlango wa jirani au mgeni bali ni kutafuta kuingia katika ufalme wa moksham na malango ya ufalme wa Paraloka. Wale wanaotafuta moksham wanaungana na Paramatma na kupata asili Yake ya kweli. Wale waliozoea kuuliza na kutafuta lazima kwa hakika kujaribu kuungana na Mungu. Hiyo ina maana kuwa hakika watakuwa wagongaji. Kupitia taratibu za kuuliza, kutafuta, na kubisha, mtu yeyote anaweza kuja katika muungano na Mungu. Kwa hivyo, sifa hizi tatu muhimu zinapaswa kusitawishwa na kila mtu, kama ilivyoainishwa katika aya iliyotajwa hapo juu. Kwa kufuata mwongozo wa Mungu, muulizaji anapata hekima, mtafutaji anapata Bhagavan, na yule anayebisha anapata ufikiaji wa nyumba ya moksham.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 19,
verse: `<b>(18)	Injili ya Mathayo, sura ya 7, mstari wa 15.</b>`,
meaning: ` <b>
(7:15) Jihadhari na manabii wa uwongo. Wanawajia wamevaa mavazi ya kondoo, lakini kwa ndani ni mbwa- mwitu wakali.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wanadamu wanahitaji mwongozo ili kupata njia yao kwa Mungu, na mwongozo huu mara nyingi hutoka kwa wengine. Ili kutembea katika njia ya Mungu, mtu lazima aweke tumaini lake kwa mwingine. Wale wanaofuata njia hii ya kiroho wanategemea viongozi wao kuwaonyesha njia. Safari ya mfuasi inategemea mwongozo, kwani lazima wafuate njia ambayo mwongozo unamulika. Hii humfanya mfuasi kutegemea mwongozo, na ikiwa mwongozo utatoa mwelekeo sahihi, mfuasi ataendelea kwa usahihi. Kinyume chake, ikiwa mwongozo utatoa mwelekeo mbaya, mfuasi anaweza kupotea kutoka kwenye njia. Marudio ya mwisho ya mtu wa kawaida huathiriwa sana na mwongozo uliochaguliwa au guru. Mara tu mtu anapotambuliwa kama gwiji, watu huwa wanaamini na kuamini mwongozo wao katika maisha yao yote. Kwa hivyo, uangalifu mkubwa unapaswa kutekelezwa wakati wa kuchagua mtu kama gwiji au mwongozo wako. Katika aya iliyotajwa hapo juu, Bwana alionya,<strong>'Jihadharini na manabii wa uongo.'</strong>Alionya kwamba baadhi ya gurus wa kisasa wanaweza wasiwe viongozi wa kweli. Huenda wakajionyesha wakiwa wamevaa ngozi ya kondoo, wakijifanya kuwa magurudumu wa kweli, lakini kwa kweli, wao ni kama mbwa-mwitu wakali waliojificha. Kulingana na mafundisho ya Yesu, watu wengi wanaweza kuvaa na kutenda kama magwiji, hata kutumia maneno kama vile Mungu, hekima, na Atma katika hotuba zao. Hata hivyo, asili yao ya kweli inaweza isikupeleke karibu na Mungu. Kama vile mbwa- mwitu aliyefichwa chini ya ngozi ya kondoo si kondoo, watu hao, licha ya kuonekana kwao, si wasomi wa kweli. Kwa hiyo, ushauri wa Bwana ni kuwa macho na tahadhari juu ya manabii wa uongo ili kuepuka kupoteza maisha ya mtu kwa kufuata wale ambao hawatoi mwongozo wa kweli.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 20,
verse: `<b>(19)	Injili ya Mathayo, sura ya 7, mstari wa 21.</b>`,
meaning: ` <b>
(7:21) Si kila mtu aniambiaye, Bwana, Bwana, atakayeingia katika ufalme wa paraloka, bali ni yeye tu afanyaye mapenzi ya Baba yangu aliye katika paraloka. </b>
`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Bwana Yesu alitoka Paramatma. Yesu ni Bhagavan aliyefanyika mwili katika umbo la mwanadamu, ambapo Paramatma, the Baba wa Paraloka, ni Mungu katika hali isiyo na umbo, yuko kila mahali katika ulimwengu wote mzima. Wakati Bhagavan, aliyeumbwa kama Yesu, alipotembea Duniani, wengine walitambua ukuu wake wa kiungu na kumheshimu kwa tamaa zao za kimwili. Walimwita 'Bwana, Bwana,' wakitafuta faida za kibinafsi. Hata hivyo, kukaribia umbo linaloonekana la Bwana na kumwita Yeye mkuu bila kupata hekima ya kimungu haitoshi. Ijapokuwa ile iliyo katika umbo inayoonekana na ile isiyoonekana ni sawa, kuna vikwazo vya asili kwa umbo linaloonekana, ambapo Baba asiyeonekana wa Paraloka hana kikomo. Paramatma isiyo na kikomo mara kwa mara huchukua umbo linaloshikika ili kutoa mafundisho Yake matakatifu kwa wanadamu. Yesu ndiye fomu iliyochaguliwa na Paramatma kwa kusudi hili. Wakati Bwana alijionyesha kwetu kama Yesu, Baba wa Paraloka alizungumza kupitia maneno ya Yesu. Mungu alipata mwili kama Yesu ili kutangaza dharma zake.

  Kumwita tu Yesu 'Bwana' bila kutumia hekima ya Mungu katika matendo na kupatana na mapenzi ya Baba wa Paraloka hakuleti manufaa yoyote. Yule ambaye huzoea hekima ya Mungu kwa bidii anasimama juu zaidi kuliko yule anayetaja tu jina la Bwana. Yule anayeshika maneno ya Mungu ni muhimu zaidi kuliko yule anayemsalimu Mungu tu. Mtu anayeishi kupatana na amri za Mungu kwa kweli anafuata mapenzi ya Mungu, na watu kama hao wamekusudiwa kwenda Paraloka (moksham). Mungu hatafuti maneno ya kujipendekeza na wala hakubaliani nayo; bali, Mungu hupendezwa na wale wanaokumbatia na tumia hekima yake. Kwa hiyo, ni jambo la maana zaidi kufanya mazoezi ya mafundisho ya Mungu badala ya kutoa sifa tu. Mungu ana ufahamu wa mawazo na nia za viumbe vyote na anaweza kutofautisha kati ya wale wanaoelewa na kuishi kwa hekima Yake kweli na wale wasioelewa. Wale wanaoelewa na kuishi kwa hekima ya Mungu wanakuwa na umuhimu wa pekee kwa Mungu. Wale wasioelewa au kupuuza hekima na kushindwa kutenda kulingana na ya Mungu hawawezi kufikia moksham.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 21,
verse: ` <b>(20)	Injili ya Mathayo, sura ya 7, aya ya 22 na 23. </b>`,
meaning: ` <b>
(7:22) Wengi wataniambia siku ile, ‘Bwana, Bwana, hatukufanya unabii kwa jina lako na kwa jina lako kutoa pepo, na kwa jina lako kufanya miujiza mingi?
<br><br>
(7:23) Kisha nitawaambia waziwazi: Sikuwajua ninyi kamwe. Ondokeni kwangu, enyi watenda maovu!</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Baadhi ya watu wanaotambua ukuu wa Bwana (Yesu) wanaweza kumpuuza Paramatma, mtawala wa paraloka, na kulenga tu kumsifu Yesu. Paramatma, Baba wa ulimwengu mzima, alituma sehemu Yake kama Yesu. Yesu ana nguvu nyingi kama Paramatma. Kumsifu Bwana Yesu ni sawa na kumsifu Baba, Paramatma. Watu wengi hutoa sifa zao kwa Bwana, lakini kuna wale wanaofanya hivyo kwa nia ya ubinafsi, ilhali wengine hawana ubinafsi katika ujitoaji wao kwa Mungu. Baba wa paraloka aliwasilisha ujumbe wake kupitia Yesu, ambaye Yeye alimtuma, mara nyingi. Wengi wanafahamu maneno ya Baba Mkuu lakini hawaelewi asili Yake ya kweli. Inaweza kusemwa kwamba hakuna hata mmoja kati ya mamilioni wanaosoma maneno ya Baba, kusikiliza, na kutoa sifa zao, anaelewa kwa hakika kiini halisi cha Baba. Bwana alitangaza amri za Mungu, hekima, na aya. Bwana anayeonekana (Yesu) anatumika kama ishara ya Mungu asiyeonekana, na Yeye ndiye sura na mwakilishi wa Mungu. Wale wanaoshindwa kufahamu hekima na amri zilizomo ndani ya Aya hawawezi kufaidika kikamilifu na sifa zao za Mola.

  Ubinadamu unaweza tu kupata faida fulani kutokana na kumsifu Bwana kama mkuu. Ni muhimu kutambua kwamba manufaa ya mwisho kwa mtu ni kufikia paraloka. Mafanikio muhimu zaidi ambayo mtu anaweza kufikia ni paraloka. Ni muhimu kuelewa kwamba lengo kuu la mtu yeyote ni kujitenga na ulimwengu wa Shetani (Maya) na kuingia katika ulimwengu wa Mungu. Faida kuu na muhimu zaidi kwa wanadamu ni kuungana na paraloka ya Mungu bila kurudi tena katika ulimwengu huu ambapo Shetani anakaa. Hakuna kitu cha thamani zaidi kwa mtu kuliko kupata paraloka. Ili kupata faida nyingi kama hizo na kuepuka kunaswa na Shetani, ni lazima mtu afahamu kikamili hekima ya Mungu. Wale wasiozama katika hekima ya kina iliyomo katika aya za Yesu na amri zake watakuwa tu. waja kwa sehemu badala ya waumini kamili. Heri mtu anayefuata mafundisho yote ya Bwana bila kuvuka mipaka ya amri zake. Hata wale ambao hawawezi kuelewa kikamilifu hekima ya Paramatma sio waumini kamili, licha ya kuwa wahubiri wakuu na wasifu wa Bwana. Hili si la kuwafukuza watu kama hao, bali ni kusisitiza kwamba wana imani kwa Mungu bila kuwa waamini kamili. Shaka iko ndani ya kila mtu hadi aelewe kabisa hekima ya Mungu, hata ikiwa inaweza kuwa wazi sasa. Wahubiri wakuu wanaoamini kuwa wao ni wajitoleaji wa Bwana kwa moyo wote wanaweza bado kuwa na mashaka hadi wapate ufahamu kamili wa hekima ya Mungu. Kwa hiyo, Bwana alitangaza,<strong>"Yule anayeniamini kwa manas yake ni bora kuliko yule anayenibembeleza.&rdquo;</strong>Imani kamili inahitaji hekima kamili ya Mungu.

  Inaweza kusemwa kwamba wale ambao hawaelewi kwamba Yesu na Mungu ni mmoja na wale wanaoamini kwamba Yesu atarudi kama vile Yesu hawaelewi ukuu wa Mungu. Yule ambaye hatambui kwamba Mungu ni wa milele, hana mwanzo wala mwisho, kwamba Mungu ameshuka duniani mara nyingi, na kwamba atakuja kila inapobidi, hukosa hekima kamili. Wale walio na hekima kamilifu wanaweza kutambua kuwasili kwa Mungu, wakati wale wasio na hekima kamili hawawezi kutambua kuja kwake. Hata wakati Mungu amechukua umbo la mwanadamu na kusimama mbele ya mtu, yule anayeona tu sura Yake ya nje na matendo anaweza kushindwa kumtambua Mungu. Wakati Bwana huja kwa siri, baadhi ya Wakristo wanaweza wasimtambue na wanaweza kuwa hawajui uwepo Wake, hata kufikia hatua ya kujaribu kumbatiza.

  Duniani Waumini ni bora kuliko makafiri, na Waumini wa kweli huwazidi Waumini wa kawaida. Waumini kamili tu wanaweza kuingia paraloka. Mwenyezi Mungu hawakubali mpaka wawe waumini kamili. Wakati wa kuingia paraloka, Mungu anakubali tu gnanis kabisa. Ikiwa mtu si gnani kabisa, Mungu atasema, "Mimi siwajui." Kwa hivyo, mtu lazima ajitahidi kupata hekima kamili. Wengi wanatamani kumkaribia Mungu na kuingia ufalme wake. Hata hivyo, kwa kuwa wako ndani ya himaya ya Shetani (Maya), Shetani anatumia jitihada zake zote kuwazuia wasimfikie Mungu na wasiwe mbuni kamili. Hata wahubiri wanaofahamu upinzani wa Shetani kwa Mungu huenda wasielewe kikamili ukubwa wa uvutano wa Shetani. Wale ambao hawana ufahamu wa kina wa shughuli za Shetani wanaweza kufuata njia ya Shetani bila kukusudia huku wakiamini kuwa wako kwenye njia ya kuelekea kwa Mungu. Hii ndiyo sababu Mungu amesema kwamba wahubiri wanaodhani kuwa wako karibu na Mungu bado wanaweza kukosa kuingia katika uwepo Wake.

  Katika aya hiyo, Yesu alisema,<strong>"Ijapokuwa mnatoa pepo na kufanya miujiza kwa jina langu, na kuponya wagonjwa kwa jina langu, ninyi ni watenda mabaya. Ondokeni kwangu.&rdquo;</strong>

  Katika jamii ya leo, mara nyingi watu huwachukulia wale wanaofanya miujiza kwa jina la Mungu kuwa wajitoleaji wa kweli, wakiwaamini kuwa wako karibu na Bwana. Hata wale wanaofanya maajabu wenyewe wanaweza kufikiri kuwa wako katika ushirika wa karibu na Bwana. Mtazamo huu hutokea kwa sababu wanaona utukufu wa Bwana ukidhihirika kupitia matendo yao. Wanapoweka mikono yao juu ya mgonjwa wakati wa kukariri maneno ya Mungu, na mgonjwa anapata uponyaji, wanahusisha na miujiza ya Bwana inayotokea kupitia kwao. Ingawa ni kweli kwamba miujiza inaweza kweli kutokea, na kufanya kuwapo kwa Bwana kujulikane kwa wote, wao hupuuza ni kwa nini Bwana alionyesha kutopendezwa na matendo kama hayo, kama ilivyotajwa katika mstari hapo juu. Kwa kufanya hivyo, wanasahau maneno ya Bwana. Swali linazuka: Kwa nini Bwana aliwakemea ikiwa kile walichokuwa wakifanya kilionekana kuwa kizuri na dhihirisho la miujiza ya Bwana? Kwa nini Yesu alisema kwamba walikuwa wakitembea katika njia mbaya? Ikiwa Bwana amesema hivyo, bila shaka ni kweli.

  Ukweli usioaminika unadhihirika unapotafakari nini maana ya ukweli katika mafundisho ya Bwana. Ni kosa kubwa sana kwa mtu kutotambua kama miujiza inayofanywa kwa jina la Bwana ni ya Mungu au Shetani. Wengi wanaoonekana kuwa wahubiri na wakubwa mbele ya watu wanaamini kwamba wako kwenye njia ya Mungu lakini kwa kweli wako kwenye njia ya Maya. Utambuzi huu unaweza kuhuzunisha sana. Inawezekana kwamba wahubiri wengi wanaweza kukasirishwa na maneno yangu, lakini tafadhali kumbuka kwamba haya si maneno yangu; ni maneno ya Mungu. Kama ilivyoelezwa katika Injili ya Mathayo 7:22, Bwana alisema,<strong>"Huu ni uovu. Sikuwahi kukufahamu.&rdquo;</strong>Tunapaswa kukiri kwamba Maya yule yule (Shetani) aliyemjaribu Bwana hapo awali bado anajaribu kutudanganya leo. Kuelewa Maya (Shetani) pia ni sehemu muhimu ya hekima ya kimungu. Bila kumtambua Maya, tunaweza kumfuata Shetani kimakosa, ambaye anajifanya kuwa kama Mungu, badala ya kumfuata Mungu. Leo, wasemaji wengi, wakuu, na wahubiri hufanya makosa sawa. Shetani (Maya), ambaye anaweza kuchukua aina nyingi, hufanya hila na miujiza kwa jina la Mungu. Wale wasiojua kwamba jambo hilo halimpendezi Mungu hawawezi kuendelea. Ukweli wenye kuhuzunisha ni kwamba watu wengi Duniani wanamfuata Shetani kwa upofu, wakiamini kuwa ni Mungu. Hawajali ukweli kwamba wanafuata njia ya Shetani, si ya Mungu. Huenda ikaonekana kuwa haiwezekani kwao kuachana na uvutano wa Shetani. Hata kama Mungu Mwenyewe angefikisha ukweli huu, wanaweza kumkosoa Mungu lakini wakabaki bila kubadilika. Kwao, Maya anaonekana kama Mungu, na Mungu anaonekana kama mwanadamu tu.

  Wale wanaotamani kuingia katika ufalme wa Mungu na kuwa na imani katika Mungu wanapaswa kutafakari juu ya mstari uliotajwa hapo awali na kutafakari kwa nini Mungu alikataa na kuwataja wale wanaofanya miujiza kuwa watenda maovu. Fikiria ni nani anayependelewa na Mungu na nani asiyependelewa. Ni muhimu kujifahamisha na mistari, hekima, na amri za Mungu. Unapaswa kukumbatia hekima ya Mungu kikamilifu bila kuvunja amri zake, ukitambua kuwa ni mipaka iliyowekwa. karibu na wewe. Kumbuka kwamba ufalme wa Mungu uko ndani ya mipaka hii, wakati utawala wa Shetani uko nje. Kaa macho mbele ya ushawishi wa Shetani, ukikumbuka mipaka iliyoainishwa na Yesu katika andiko lake takatifu kwa wanadamu wote.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 22,
verse: ` <b>(21) Injili ya Mathayo, sura ya 8, mstari wa 22. </b>`,
meaning: ` <b>
(8:22) Yesu akamwambia, “Nifuate, waache wafu wazike wafu wao.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mstari uliotajwa hapo juu ulikuwa ni jibu la Yesu wakati mmoja wa wanafunzi Wake alipomwambia, “Bwana, niruhusu kwanza niende nikamzike baba yangu.” Huenda maneno ya Yesu yakaonekana kuwa yasiyoeleweka kwa wengine, na hivyo kutokeza maswali kuhusu maana yake. Tunapozingatia hili, tunaweza kuainisha ubinadamu katika makundi mawili: wale walio na hekima na kuitumia kama yogam watapata uzima wa milele (moksham). Watu kama hao ni wachache sana. Wale wanaostahili kupata uzima wa milele hawatahesabiwa miongoni mwa wafu. Wale wanaopata uzima wa milele hawatawahi kamwe kufa na inaweza kusemwa kuwa wamepata moksham. Kwa upande mwingine, wale ambao hawajui au hawashiriki katika mazoezi ya yoga wanaweza kuchukuliwa kuwa wamekufa kiroho. Watu kama hao hawana uzima wa milele na hatimaye watakabiliwa na kifo. Inaweza kusemwa kwamba wamekusudiwa kupata kifo wakati fulani. Wajinga mara nyingi huzikwa na wajinga wengine. Kwa hiyo, maneno ya Yesu, “Waache wafu kuzika wafu,” linatoa wazo la kwamba wale wasio na hekima wanarejezewa kuwa wafu kiroho. Inasisitiza kwamba wale walio na hekima hawapaswi kujihusisha na wajinga. Kwa hiyo, Yesu alimwambia mwanafunzi huyo, “Wewe unaelewa hekima na unifuate. Wacha wajinga wazike wajinga."
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 23,
verse: ` <b>(22)	Injili ya Mathayo, sura ya 9, aya ya 12 na 13.</b>`,
meaning: ` <b>
 (9:12) Aliposikia hayo, Yesu alisema, “Wenye afya hawahitaji tabibu, bali walio hawawezi.
<br><br>
(9:13) Kwa maana sikuja kuwaita wenye haki, bali wenye dhambi.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kama tulivyojadili hapo awali, Mungu mara kwa mara hushuka juu ya Dunia ili kuanzisha dharma. Vile vile, Yesu alisema kwamba alikuja kuwaongoza wajinga kwenye njia ya hekima. Alitaja kwamba alikuja kuwaita wenye dhambi, si wenye haki. Hapa 'wenye dhambi' wanawakilisha wale ambao hawana maarifa na hawana hekima, wakati 'wenye haki' wanawakilisha wale walio na hekima. Mungu anachukua nafasi ya tabibu wa kiroho, ambaye mara nyingi huitwa mhubiri, kuponya wale wanaosumbuliwa na maradhi ya ujinga. Kupitia dawa ya hekima, Yeye huwaponya wagonjwa wa kiroho. Wale ambao tayari wako na afya nzuri kiroho na hekima hawahitaji mwongozo wa daktari au mhubiri kama huyo. Ugonjwa wa ujinga unapoenea duniani kote, ikiathiri watu wote, Mungu anapata mwili ili kutoa dawa yake ya kimungu ya dharmas na kubadilisha wajinga kuwa gnanis (watu wenye busara). Ikiwa Mungu hangechukua jukumu hili kama daktari wa kiroho, ulimwengu wote ungekuwa na ujinga. Kwa hiyo, Mungu anapata mwili ili kufichua hekima yake kwa wale wanaohitaji.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 24,
verse: ` <b>(23) Injili ya Mathayo, sura ya 8, 23, 24, 25 na 26 mistari. </b>`,
meaning: `<b>
(8:23) Kisha akapanda mashua na wanafunzi wake wakamfuata.
<br><br>
(8:24) Ghafla, dhoruba kali ikatokea ziwani, hata mawimbi yakaipiga mashua. Lakini Yesu alikuwa amelala.
<br><br>
(8:25) Wanafunzi wake wakaenda, wakamwamsha, wakisema, Bwana, tuokoe! Tutazama!
<br><br>
(8:26) Akajibu, Enyi wenye imani haba, mbona mnaogopa hivi? Kisha akaamka, akazikemea zile pepo na mawimbi, kukawa shwari kabisa.  </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Tukio hili ni tukio muhimu kutoka kwa maisha ya Yesu. Ingawa Yesu huenda hakufundisha somo moja kwa moja hapa, kuna mengi tunaweza kujifunza kutokana na tukio hili. Bahari na dhoruba zote zimeunganishwa na Prakruti. Hewa katika dhoruba na maji katika bahari ni sehemu muhimu za Prakruti. Prakruti iko chini ya udhibiti wa pekee wa Paramatma, chombo kikuu cha kimungu. Prakruti ina vitu vitano: Anga, Hewa, Moto, Maji na Dunia. Hata Atma, ambayo ina uungu kufuatia Paramatma, haina mamlaka juu ya Prakruti. Atma ndani ya mwili inasimamia tu Chara (Changeable) Prakruti, ambayo ipo kwa namna ya mwili. Haina mamlaka yoyote juu ya Achara (Isiyobadilika) Prakruti. Prakruti haizingatii Atma; inatii tu amri ya Paramatma. Prakruti inaundwa na bhoota tano, ambazo zinaweza kueleweka kama nguvu za maisha au Jeevas. Jeeva hizi tano zinawakilisha vipengele vitano vya Prakruti na, kwa hivyo, wanashikamana na neno la kimungu la Mungu. Wanafuata maagizo ya Paramatma.

  Kwa sababu Yesu alikuwa Roho Mtakatifu ambaye alionekana kama mtu wa kawaida, tufani katika bahari ilikoma kwa amri yake. Ni Mungu pekee anayeweza kudhibiti Prakruti, kwa hivyo Yesu anaweza kuzingatiwa kuwa mwili wa Mungu. Imetajwa katika mistari ya 7, 8, na 9 ya Gnana Yoga katika Bhagavad-Gita, andiko la kwanza la kimungu, kwamba Mungu anashuka duniani katika umbo la mwanadamu ili kutoa hekima yake. Mungu anapochukua umbo la mwanadamu, kwa nje Anafanana na mwanadamu wa kawaida, ingawa Yeye si mtu wa kawaida. Kwa sababu Anaonekana kama mtu wa kawaida, kumtambulisha ni changamoto. Hata hivyo, kuna viashiria viwili muhimu vya kutambua Yeye:<strong>1) Uwepo wa kupata mwili kwa Mungu popote pale ambapo dharma za kimungu zinafundishwa.2) Uwezo wa kuamuru Prakruti unaweza kutambuliwa kama Mungu kupata mwili.</strong> Kutulizwa kwa bahari kwa amri ya Yesu ni udhihirisho wa nguvu hizo za kimungu, kuonyesha kwamba ni Mungu pekee anayeweza kufanya mambo hayo. Dharma inapofundishwa na Prakruti kuamriwa, umbo la mwanadamu la Mungu linatambulika. Yesu hakufundisha tu hekima ya Mungu bali pia aliitenda na kumwamuru Prakruti. Kwa hiyo, Yesu anaweza kutambuliwa kuwa Mungu katika umbo la mwanadamu. Kukoma mara moja kwa dhoruba juu ya bahari kulitumikia kama uthibitisho wa uungu wa Yesu.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 25,
verse: ` <b>(24) Injili ya Mathayo, sura ya 9, mstari wa 6.</b>`,
meaning: `<b>
(9:6) Nataka mjue kwamba Mwana wa Adamu anayo mamlaka duniani ya kusamehe dhambi. Basi, akamwambia yule mwenye kupooza, "Simama, chukua mkeka wako, uende nyumbani." Kisha mtu huyo akainuka na kwenda nyumbani.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu mwenyewe alisema kwamba Mwana wa Adamu anayo mamlaka duniani ya kusamehe dhambi. Mtu mwenye kupooza alipoletwa kwa Yesu, akamwambia, Umesamehewa dhambi zako. Baadhi ya waandishi walijisemea moyoni kwamba Yesu alikuwa akikufuru. Yesu akijua mawazo yao, akasema, “Kwa nini mnawazia mawazo mabaya mioyoni mwenu? Ni lipi lililo rahisi zaidi, kusema, Umesamehewa dhambi zako, au kusema, Simama, utembee? Lakini nataka mjue kwamba Mwana wa Adamu anayo mamlaka ya kusamehe dhambi.” Kwa hiyo, Yeye akamwambia yule aliyepooza, "Simama, chukua mkeka wako, uende nyumbani." Kisha mtu huyo akainuka na kwenda nyumbani.

  Tukiona haya, Yesu alisamehe dhambi kwa sababu waandishi walimdhania mabaya. Pia alitangaza kwamba Mwana wa Adamu anayo mamlaka duniani ya kusamehe dhambi. Licha ya kuja Duniani kama Mwana wa Mungu, alijinyenyekeza kwa kujitambulisha kuwa Mwana wa Adamu. Aliambia na kuthibitisha kwamba Yeye peke yake ndiye mwenye mamlaka ya kusamehe dhambi. Wale wanaoelewa kwamba ni Mungu pekee (Roho Mtakatifu) anayeweza kusamehe dhambi watatambua Yesu ni nani hasa. Kwa kudai kuwa Mwana wa Adamu, Yesu alificha uungu Wake kimakusudi, ingawa alitoka kwa Roho Mtakatifu. Yule mtu aliyepooza alisimama mara moja na kwenda nyumbani wakati Yesu alipomwagiza afanye hivyo. Umati ulistaajabu baada ya kushuhudia muujiza huu. Licha ya kufanya tendo hilo la ajabu, Yesu alitendewa kama mtu wa kawaida na kufikishwa mahakamani kana kwamba alikuwa na hatia. Hilo linaonyesha jinsi wanadamu mara nyingi husahau msaada wanaopokea.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 26,
verse: ` <b>(25) Injili ya Mathayo, sura ya 10, mstari wa 20.</b>`,
meaning: `<b>
(10:20) Kwa maana si ninyi msemao, bali ni Roho wa Baba yenu asemaye ndani yenu. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ingawa aya hii inaweza kuonekana kuwa ya kawaida, ina hekima ya kina ya kiroho. Ni muhimu kuelewa kwamba muda<strong>'Baba yako'</strong>katika aya hii haimrejelei baba mzazi wa mtu bali Baba wa kiroho wa Jeevatma. Atma, Baba wa Jeevatma, anakaa ndani ya mwili na kuuongoza. Ni muhimu kukumbuka kuwa Baba wa Atma ni Paramatma. Kila binadamu anawakilisha Jeevatma. Kulingana na karma ya mtu, Atma huwashawishi na kuwaongoza (Jeevatma), na kuwafanya wapate karma (dhambi na punya karma). Atma hudhibiti kazi zote za mwili na huamua raha na maumivu yanayopatikana kwa Jeevatma ndani ya mwili.

  Jeevatma haishiriki kikamilifu katika kazi zozote za mwili. Licha ya kutochukua hatua dhahiri, Jeeva hupata matokeo ya vitendo vyake kimya kimya, furaha na huzuni. Ingawa Jeevatma inajitambulisha kama mtu binafsi ndani ya mwili, hana uwezo wa kutenda. Badala yake, ni Atma ambayo hupanga shughuli zote ndani ya mwili. Kwa sababu ya ujinga, Jeevatma anaamini kimakosa kuwa yeye ndiye anayefanya vitendo kwa kusikiliza maneno ya 'aham' (ego). Kwa kweli, Atma ndiye muigizaji wa kweli ndani ya mwili, lakini Jeevatma mara nyingi husahau uwepo wa Atma na anaamini kuwa yeye ndiye mtendaji wa kila kitu. Katika muktadha wa mstari huo, Yesu alilenga kuwaangazia wale walio katika ujinga. Alifikisha<strong>, &ldquo;Baba yako, Atma, anakaa ndani yako na huwasiliana kupitia wewe. Si wewe unayezungumza.</strong>&rdquo; Kulingana na aya hii, ni dhahiri kwamba si tu matendo yanayofanywa bali pia maneno yanayosemwa hayasemwi na Jeevatma. Yesu alisema hivyo ni ujinga mtupu kwa watu kuamini kuwa wanazungumza, kumbe ni Atma ndiye anayefafanua maneno. Jeevatma haifanyi matendo yanayotekelezwa na sehemu kumi za mwili wa kimwili (vyombo vya utendaji); ni Atma ambayo hutimiza kila kitu kupitia sehemu hizi za mwili. Kutambua ukweli huu kunawakilisha namna ya juu zaidi ya hekima kati ya hekima zote.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 27,
verse: ` <b>(26) Injili ya Mathayo, sura ya 10, mstari wa 30.</b>`,
meaning: ` <b>
(10:30) Hata nywele za vichwa vyenu zimehesabiwa zote.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika hekalu, mara nyingi watu hushiriki mawazo yao na Mungu, wakiamini kwamba Mungu hajui hisia zao za ndani. Wanaonyesha heshima na woga wanapokuwa hekaluni lakini wanaweza kuwa na tabia tofauti nje. Kwa mfano, baada ya kutoka hekaluni, watu fulani wanaweza kukalia viti viwili vya treni bila kuruhusu abiria wengine kuketi, wakionyesha tabia ya kutojali. Hatua hii inatokana na dhana potofu kwamba Mungu anafahamu matendo yao ndani ya hekalu lakini si nje. Hata hivyo, nini<strong>wengi wanashindwa kutambua ni kwamba Mungu ni mjuzi wa yote na yuko kila mahali, anaona matendo yote, hata katika sehemu zilizofichwa zaidi.</strong>Mstari huu ulionenwa na Yesu unaangazia utukufu wa Mungu na unatumika kama ukumbusho kwamba ufahamu wa Mungu unaenea kila mahali.

  Aya inaangazia uangalifu wa ajabu wa Mungu kwa wanadamu, kwani Mungu ameweka mfumo sahihi kwa nyanja zote za uwepo wa mwanadamu. Mfumo huu wa kimungu unajumuisha hata mambo madogo madogo, kama vile 'karmavisarga'&mdash; mgawanyo wa karma katika sehemu ndogo. Kupitia karmavisarga, Mungu huamua ni mara ngapi mtu anapaswa kufungua na kufunga kope zao, kuhakikisha hesabu sahihi. Mungu pia anaamuru idadi ya nywele kwenye vichwa vyetu na ni lini na nywele zipi zinapaswa kuanguka, yote kupitia karma-visarga. Zaidi ya hayo, Mungu hupanga matatizo ambayo watu hukabili na kadiri ya mateso yao. Katika Bhagavad-Gita, Bwana anathibitisha kwamba Mungu ana ujuzi wa kila kitu kilichotokea, kinachotokea, na kitakachotokea duniani. Hili linatia nguvu dhana ya kwamba hakuna kitu zaidi ya ufahamu wa Mungu.
</div></div>

</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 28,
verse: ` <b>(27) Injili ya Mathayo, sura ya 10, mistari ya 34, 35 na 36.</b>`,
meaning: `<b>
 (10:34) Msidhani ya kuwa nimekuja kuleta amani duniani. sikuja kuleta amani, bali upanga.
<br><br>
(10:35) Kwa maana nimekuja kugeuza “‘mtu dhidi ya baba yake, binti dhidi ya mama yake, mkwe dhidi ya mama mkwe wake.
<br><br>
(10:36) Adui za mtu watakuwa watu wa nyumba yake mwenyewe.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ingawa huenda isiwe sawa kusema kwamba Yesu alikusudia kuzua mizozo kati ya wanadamu kimakusudi, ni wazi kwamba migogoro hiyo imetokea. Yesu alikuja kwa nia ya kuwaongoza watu kutoka ujinga hadi kwenye hekima badala ya kupanda mafarakano. Alishiriki hekima yake kwa nia njema, lakini mara nyingi ilisababisha mabishano kati ya wale ambao hawakuelewa kikamilifu mafundisho Yake. Sawa na jinsi maji baridi yanayonyunyiziwa kwenye mchanga yanavyoipoza, huku mawe ya chokaa yanapo joto, yakibadilisha sura yake, na kugeuka kuwa chokaa, mapokezi ya hekima ya Yesu hutofautiana. Wale walio na ufahamu wa kina wa hekima hupata furaha katika mafundisho ya Yesu, huku mizozo ikitokea kati ya wajinga. Katika baadhi ya matukio, wakati mwenzi mmoja anatafuta hekima, mwingine anaweza kutokubaliana, na kusababisha kutokubaliana ndani ya familia. Tokeo hili lisilotazamiwa linaweza kusababisha migawanyiko ndani ya nyumba, ambapo akina baba wanaweza kuwapinga wana, mama dhidi ya binti zao, na mama-mkwe dhidi ya binti-wakwe. Ingawa nia ya Yesu ni nzuri, inaongoza kwa wanadamu bila kukusudia kusahau ukoo wao na kukuza uadui. Ndiyo maana Yesu akitoa ua, linageuka kuwa mwiba. Akitoa mbao zinazopinda, huwa upanga imara. Ni muhimu kutambua kwamba matokeo haya si kosa la Yesu, bali ni matokeo ya asili ya binadamu na ushawishi wa bunduki mbalimbali.</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 29,
verse: `<b>(28)	Injili ya Mathayo, sura ya 10, aya ya 37.</b>`,
meaning: `<b>
(10:37) Ampendaye baba yake au mama yake kuliko mimi, hanistahiki; yeyote anayependa mwana au binti yake kuliko mimi hanistahili.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ni sehemu ya msingi ya asili ya kibinadamu kwa wazazi kuwapenda watoto wao, kama ilivyo kawaida kwa watoto kuwapenda wazazi wao. Uhusiano kati ya wazazi na watoto wao mara nyingi huonyeshwa kwa upendo wa kina, unaopita uhusiano mwingine wowote ulimwenguni. Walakini, akili ya mwanadamu pia huathiriwa kwa kiasi kikubwa na sifa zake za asili, zinazojulikana kama gunas. Wakati mtu anahifadhi<strong>upendo mkubwa kwa hekima na Mungu</strong>, wao kwa asili huvuta kuelekea kutafuta hekima badala ya vitu vya kimwili au vya kidunia. Inakuwa vigumu kutanguliza hekima wakati shauku ya mtu inapoelekezwa kwingine. Akili ya mwanadamu hufanya kazi chini ya ushawishi wa guns sita nzuri na mbaya, sawa na pingu zilizotengenezwa kwa dhahabu na chuma, kwa mtiririko huo. Aina zote mbili za bunduki hutumikia kusudi la kumfunga mtu binafsi. Hata hivyo, ni muhimu kutambua kwamba wala upendo uliokithiri (guna nzuri) au wivu (guna mbaya) huongoza mtu kwenye hekima. Jambo kuu ni kupendezwa kikweli na hekima ya mtu binafsi. Gunas sita mbaya ni pamoja na uchoyo (kaama), hasira (krodha), avarice (lobha), shauku (moha), kiburi (madam), na wivu (matsara). Kinyume chake, bunduki sita nzuri hujumuisha hisani(dana), rehema (siku),&nbsp;wema&nbsp;(audarya),&nbsp;chuki (vairagya), unyenyekevu (vinaya), na upendo (prema).
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 30,
verse: `<b>(29)	Injili ya Mathayo, sura ya 10, aya ya 38.</b>`,
meaning: `<b>
(10:38) Mtu ye yote asiyeuchukua msalaba wake na kunifuata, hanistahili.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wakristo mara nyingi huzungumza na kushikilia heshima kubwa kwa msalaba. Ni kawaida kuona Wakristo wamevaa msalaba shingoni mwao, na ishara hii ina umuhimu mkubwa katika imani yao. Inajulikana sana kwamba Yesu alisulubiwa na kufa msalabani. Swali linalozuka ni kwa nini Wakristo hustahi sana ishara iliyotumiwa kuwa chombo cha kuuawa kwa Yesu. Jibu liko katika asili ya kina ya kumfuata mtu mkuu kuliko wao na kuiga matendo yao. Hata hivyo, hakuna mtu ambaye amefikiria kwa nini msalaba, ishara inayohusishwa na kifo cha Bwana, unapaswa kuheshimiwa sana. Hakika, iwe kwa makusudi au bila kukusudia, inaonekana kuna pengo katika kuelewa maelezo ya msalaba. Hebu tuchukue muda kutafakari msalaba na tuzame kwa undani zaidi.

  Katika mstari huo, Yesu alionya hivyo<strong>kujitwika msalaba kunampelekea mtu kutembea katika njia ya Mungu, huku msalaba ukikuinua maana yake ni kutembea katika njia ya Shetani.</strong>Ujumbe sawa ni Yesu aliposema, &ldquo;Mtu ye yote asiyeuchukua msalaba na kunifuata hanistahili. Hii ina maana kwamba wale ambao hawabebi msalaba hawastahili Mungu. Ni muhimu kuelewa kwamba, kwa mujibu wa mtazamo huu, msalaba unaashiria Shetani. Kwa uchunguzi wa kina zaidi wa dhana hii, tafadhali fikiria kusoma kitabu changu, &ldquo;Je, Msalaba ni Mungu?

  Msalaba unawakilisha nyoka katika ishara ya kiroho. Ni kawaida kuchora ulinganifu kati ya nyoka na Shetani, na njiwa na Atma. Shetani, au Maya, anakaa ndani ya mwili wa mwanadamu na mara nyingi huwaongoza watu kwenye njia ya ujinga. Shetani anapomwinua mtu, inaashiria udhaifu wa mtu huyo na utawala wa Shetani. Kwa upande mwingine, mtu anapobeba msalaba, inaonyesha kwamba nguvu za mtu huyo zinapita zile za Shetani. Hii ndiyo sababu Yesu, katika sehemu fulani za maisha yake, alibeba msalaba ili kuonyesha kwamba wanadamu wanaweza kumshinda Shetani. Vivyo hivyo, Yesu aliposulubishwa msalabani, ilifananisha msalaba uliombeba, ikimaanisha kwamba Shetani anaweza kumvuta mtu yeyote kwenye njia yake. Ili kutembea katika njia ya hekima, wanadamu wanapaswa kuwa tayari kubeba msalaba wao wenyewe, kama Yesu alivyosisitiza katika mstari huo, &ldquo;Mtu asiyeuchukua msalaba wake na kunifuata, hanistahili.

  Tunafananisha Shetani kwa namna ya msalaba, ambayo inawakilisha nyoka au nyoka mkubwa, sawa na dhana ya Maya. Maya ana uwezo wa kuwapotosha watu njia ya Mungu na kuelekea ujinga. Ili kushinda uvutano huo, ni lazima kwanza tuelewe Maya. Baada ya uchambuzi, Maya inaweza kutambuliwa kama nguzo ya bunduki ndani ya kichwa cha mtu. Yeyote anayelinganisha vitendo vyao na bunduki hizi bila kukusudia anafuata njia ya ujinga, kimsingi kuruhusu Maya kudhibiti mkondo wao. Ili kumshinda Maya, ni lazima mtu apate kuwashinda gunas, akikataa kushawishiwa na ushawisi wao. Mtu anapofanikisha hili, inaweza kusemwa kwamba amemshinda Maya, au Shetani, kwa kutumia nguvu zao za ndani. Mtu kama huyo anaweza kumchukua Maya na kutembea kwenye njia ya hekima. Kwa hiyo, ujumbe wa Yesu katika mstari huo unakazia kwamba kwa kuushinda &lsquo;msalaba&rsquo;&mdash;mwakilishi wa Maya&mdash;mtu anastahili neema ya Mungu. Ni muhimu kutambua kwamba 'msalaba' si tu ishara ya mbao bali ni kiwakilishi cha chatu, ishara ya Shetani. Kulingana na wazee, msalaba unaashiria Maya, wakati ndege anasimama kama ishara ya Atma. Wakati wa ubatizo wa Yesu na Yohana, ilisemekana kwamba Roho (Atma) alishuka kama njiwa na kuingia katika mwili wa Yesu. Katika muktadha huu, 'msalaba' unawakilisha nguvu inayopingana na Atma. Kwa hiyo, mafundisho ya Yesu yanakazia kwamba mtu, kwa kutumia hekima na nguvu zake za ndani, anapobeba &lsquo;msalaba&rsquo; na kutembea katika njia ya hekima, anastahili Mungu na paraloka.
</div></div>

</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 31,
verse: `<b>(30)	Injili ya Mathayo, sura ya 10, aya ya 40.</b>`,
meaning: ` <b>
(10:40) Anayewapokea ninyi, anipokea mimi; na ye yote anipokeaye mimi, anampokea yeye aliyenituma.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wakati wanadamu ni Jeevatmas, wameundwa na Atma. Paramatma, au Roho Mtakatifu, aliumba Atma na Prakruti. Walakini, wakati Paramatma anapata mwili kama mwanadamu, swali linazuka kama kumrejelea kama Atma au Jeevatma. Ikiwa Mungu huchukua umbo la mwanadamu, Anaweza kuchukuliwa kuwa Jeevatma kulingana na mwonekano Wake. Wakati wanadamu (Jeevatmas) wanapita, Atma inawaingiza ndani yake yenyewe. Kama vile Atma inavyowazunguka wanadamu, pia inajumuisha Mungu anapopata mwili kama mwanadamu na kuonekana kama Jeevatma. Dhana hii inasisitizwa katika aya hii, &ldquo;.<strong>Anayewapokea ninyi, ananipokea mimi.&rdquo;</strong>Yule aliyepata mwili kama mwanadamu (Jeevatma) ni, kwa kweli, Mungu. Hata hivyo, ni Mungu aliyemtuma mtu huyo, kama vile Yesu. Atma inapomzunguka mtu anayefanana na Jeevatma, ni kana kwamba Mungu, mtumaji wa mtu huyo, pia amejumuishwa ndani ya Atma. Kwa hiyo, katika aya hiyo, Yesu alisema,<strong>"Yeye anipokeaye mimi, anampokea yeye aliyenituma.&rdquo;</strong>
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 32,
verse: `<b>(31)	Injili ya Mathayo, sura ya 11, mstari wa 9.</b>`,
meaning: ` <b>
 (11:9) Mlitoka kwenda kuona nini? Nabii? Naam, nawaambia, na (mimi ni) zaidi ya nabii.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Inaweza kusemwa kwamba nabii (pravaktha) ni yule anayefundisha elimu ambayo hakuna mtu aliyeiambia. Kwa Kitelugu,<strong>'Pra'</strong>inaashiria umuhimu, na<strong>'Vaktha'</strong>maana yake ni yule anayezungumza. Kwa hivyo nabii ni mtu ambaye hutoa hekima muhimu. Hata hivyo, Yesu alitangaza kwamba Yeye ni zaidi ya nabii. Kuna mtu mmoja tu anayempita nabii, anayedhihirisha hekima zaidi ya uwezo wa manabii. Maandiko ya Mungu yanasema, <strong>&ldquo;Mungu hakumpa mwanadamu yeyote hekima yake.</strong><strong>Hekima ya Mungu bado haijulikani kwa wote isipokuwa Mungu. </strong>Katika andiko la mwisho la kimungu, imesemwa katika mstari wa 3:7 kwamba Mungu lazima atoe hekima Yake. Kulingana na hili, inaeleweka kwamba ingawa Mungu huja kama nabii kushiriki hekima, Yeye ni zaidi ya nabii. Andiko la mwisho la kimungu, katika 42:51, linatangaza<strong>, &ldquo;Mungu hawasiliani moja kwa moja na wanadamu.&rdquo; </strong>Hata hivyo, Mungu anaweza kujidhihirisha kama mwanadamu aliyejificha na kufikisha ujumbe Wake. Wakati wowote Mungu anapochukua umbo la mwanadamu, hata kama anatajwa kuwa nabii, Yeye ni zaidi ya nabii. Kwa kuzingatia kauli ya Yesu katika mstari huu, inakuwa dhahiri kwamba Yesu anawapita manabii na anawakilisha kupata mwili kwa Mungu. Licha ya Yesu kutangaza wazi utambulisho wake mara nyingi, wengi walishindwa kumtambua.
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 33,
verse: `<b>(32)	Injili ya Mathayo, sura ya 11, aya ya 28.</b>`,
meaning: ` <b>
(11:28) Njoni kwangu ninyi nyote msumbukao na wenye kulemewa na mizigo, nami nitawapumzisha. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ni ufahamu wa kawaida kwamba watu huchoka wakati wa kubeba uzito wa mwili. Walakini, wanadamu pia hupata uchovu bila hata kubeba mzigo wowote unaoonekana. Mzigo usioonekana, katika kesi hii, ni dhambi (karma), na kila mtu anayepata uzoefu wa karmic huwa na hisia ya uchovu. Wanadamu hukutana na karma kila wakati, isipokuwa wakati wa kulala wakati wamejitenga nayo kwa muda. Hata katika ndoto, ushawishi wa karma unaendelea, kuashiria hali ya mara kwa mara ya kazi. Kwa kuzingatia hali ya kudumu ya mzigo huu, Yesu anatoa mwaliko kwa wote, akisema,<strong>" Njooni kwangu. Nitakupa kilicho chako.&rdquo;</strong>

  Swali linazuka: Je, tunapataje pumziko tunapomgeukia Yesu, ikizingatiwa kwamba sisi hupitia karma mara kwa mara? Jibu ni kama ifuatavyo: Yesu anapotoa hekima ya kimungu kwa wale wanaomtafuta, karma ya wale wote wanaofahamu hekima hii inatumiwa katika nguvu ya hekima. Kupitia uharibifu wa karma, watu binafsi wanakombolewa kutokana na athari zake zinazoendelea, kupunguza taabu ya mateso, na kutoa pumziko. Mwaliko huu unatolewa kwa watu wa tabaka zote na dini zote, kama inavyothibitishwa na Yesu akisema,<strong>"Wote wanakuja kwangu.&rdquo;</strong>Wengine wanaweza kurejelea Yesu kama Guru au nabii wa Kikristo. Hata hivyo, kumtaja Yeye tu kama Mkristo itakuwa si sahihi, kwani wito Wake unajumuisha wote, unaowaalika watu wa asili zote. Wale ambao walikubali mafundisho Yake na kumtafuta hawapaswi kufungwa kwenye lebo ya Wakristo. Kwa kuwa Mungu na hekima ya kimungu ni muhimu ulimwenguni pote, Yesu anatoa mwaliko wake kwa wote, kama alivyotangaza,<strong>"Wote wanakuja kwangu.&rdquo;</strong>
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 34,
verse: ` <b>(33)	Injili ya Mathayo, sura ya 12, 17, 18, 19, 20 na 21 mistari.</b>`,
meaning: ` <b>
(12:17) Hili lilikuwa kutimiza yale yaliyonenwa kupitia nabii Isaya.
<br><br>
(12:18) Huyu hapa mtumishi wangu niliyemchagua, nimpendaye, ninayependezwa naye; nitaweka Roho yangu juu yake.
<br><br>
(12:19) Atatangaza uadilifu (hekima) kwa mataifa; Hatagombana wala hatapiga kelele; hakuna mtu atakayesikia sauti yake barabarani.
<br><br>
(12:20) Mwanzi uliopondeka hatauvunja, na utambi unaofuka moshi hatauzima, mpaka aifikishe haki (hikima) kwa ushindi.
<br><br>
(12:21) Katika jina lake mataifa yataweka tumaini lao. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Miaka 350 hivi iliyopita, mtu mashuhuri anayeitwa Veerabrahmam alitabiri matukio na misiba ya asili ambayo ilikuwa karibu kutukia. Vivyo hivyo, mtu mkuu anayeitwa Isaya alitabiri kuja kwa Yesu. Tukichunguza maneno ya Isaya kwa undani, ukuu katika maneno yake utajulikana kwa wote. Ikawa wazi ni nani Isaya alikuwa anazungumza juu yake. Isaya aliishi miaka mingi kabla ya Yesu kuzaliwa. Katika sura ya 13, Isaya alitaja mambo machache zaidi. Tukiangalia mistari hii, inakuwa dhahiri kwamba Mungu, Roho Mtakatifu, alizungumza juu ya Yesu. Tukichunguza mistari ambayo Yesu alizungumza juu yake mwenyewe katika maandiko na mistari ambayo Roho Mtakatifu alizungumza juu ya Yesu, inakuwa dhahiri kwamba yule aliyezungumza juu ya Yesu (Roho Mtakatifu) na Yesu ni sawa.

  Katika aya ya kwanza, imeelezwa,<strong>"Huyu hapa mtumishi wangu.&rdquo;</strong>Kuna aina mbalimbali za huduma ya kimaada, lakini aya hii hairejelei huduma ya kimaada. Badala yake, inazungumza juu ya huduma ya Paramatma. Kuna aina moja tu ya huduma ya Paramatma, na ya kweli<strong>Utumishi wa Paramatma unahusisha kuhubiri na kueneza hekima ya Mungu kwa wengine.</strong>Kwa sababu Yesu alikuwa akieneza hekima ya Mungu kwa bidii, Roho Mtakatifu alisema, &ldquo;Huyu hapa mtumishi wangu.&rdquo; Yeyote anayeeneza hekima ya Mungu anakuwa<strong>aliyependelewa zaidi na Mungu</strong>. Kwa hiyo, Paramatma alionyesha upendo kwa Yesu, akisema,<strong>"Ninampenda na ninafurahishwa naye.&rdquo;</strong>Hisia hii inaelezwa katika<strong>15:28, 29, na 30 ya andiko la mwisho la kimungu</strong>, ambapo inaelezwa kwamba Roho Mtakatifu huumba mwanadamu kutokana na udongo na kuipulizia nafsi yake (roho ya Roho Mtakatifu) ndani yao. Baadaye, Malaika humtambua mwanadamu kuwa ni Mungu na kumsujudia. Kwa hiyo, kulingana na maneno ya Isaya, &ldquo;Roho Mtakatifu ataweka roho Yake juu Yake,&rdquo; inakuwa dhahiri kwamba Yesu, katika kupata mwili wa kibinadamu, ni nafsi ya Paramatma.

  Mstari wa 19 unasema, &ldquo;Atatangaza haki kwa mataifa.&rdquo; Inaonekana kwamba watafsiri wa Biblia katika Kiingereza huenda walitumia neno lisilo sahihi. Inatakiwa kuandikwa kama<strong>" hekima&rdquo;</strong>badala ya<strong>"haki.&rdquo;</strong>Haki ina uhusiano wa karibu zaidi na ulimwengu wa nyenzo, na kwa hivyo, inaweza kuwa istilahi inayofaa zaidi. Wakati<strong>uadilifu na uadilifu vinahusiana na mambo ya kidunia, hekima na dharma vinahusishwa na Paramatma.</strong>Matumizi ya &ldquo;haki&rdquo; na &ldquo;haki&rdquo; badala ya &ldquo;hekima&rdquo; yanaonekana kuwa makosa ya tafsiri. Makosa mengi kama haya yalitambuliwa, iliyorekebishwa na kusahihishwa.

  Mstari wa 19 unasema, &ldquo;Atatangaza haki kwa mataifa.&rdquo; Hapa, &ldquo;kutangaza&rdquo; maana yake ni kuhubiri au kufundisha. Aya hiyo inaweza kueleweka vizuri zaidi kama,<strong>"Ataeneza hekima kwa mataifa.&rdquo; </strong>Marekebisho hayo yanapatana na uhakika wa kwamba, baada ya kuishi kwa miaka 30, Yesu alifundisha hekima Yake kwa karibu miaka miwili na miezi mitatu, kama inavyoonyeshwa na mstari huu. Wakati huo, Yesu alihubiri hekima yake bila ubinafsi katika sehemu mbalimbali, akiwaponya watu wengi waliokuwa na magonjwa mbalimbali. Alirejesha kuona kwa vipofu, aliwawezesha viwete kutembea, aliwaponya wagonjwa wa ukoma, na hata akawafufua wafu. Licha ya matendo yake ya miujiza, wengine walimshtaki Yesu kuwa mchawi na wakamlaumu kwa kutenda kinyume na Mungu. Hata hivyo, Yesu hakujihusisha na ugomvi au mayowe, kama inavyothibitishwa na maneno,<strong>"Hatagombana wala hatapiga kelele.&rdquo;</strong>

  Yesu alitoa hekima yake kwa wale waliomkaribia, lakini alijiepusha na kupiga kelele barabarani, kama inavyoonyeshwa katika mstari huo.<strong>"hakuna mtu atakayeisikia sauti yake katika njia kuu.&rdquo;</strong>Aya hiyo pia inasisitiza kwamba Yeye hatauvunja mwanzi uliopondeka, ikisisitiza kwamba matendo Yake yalilenga tu kueneza hekima. Zaidi ya hayo, mstari huo unakazia daraka la Yesu katika kuhakikisha kwamba nguvu za hekima, mara tu zinapowashwa ndani ya mtu, hazizimike mpaka ziteketeze karma yote inayohusiana na mtu huyo. Kwa kuwa karma inakuja kwa namna mbalimbali, inafananishwa na utambi unaojumuisha nyuzi nyingi, ikielezea maneno,<strong>"Hatazimisha utambi unaofuka moshi.&rdquo;</strong>Zaidi ya hayo, mstari huo unaonyesha kutazamia kwa wengine hekima ya Yesu, ukisema,<strong>"Kwa jina lake, mataifa wataweka tumaini lao.&rdquo;</strong>
</div></div>

</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 35,
verse: `<b>(34)	Injili ya Mathayo, sura ya 12, mstari wa 31.</b>`,
meaning: `<b>
(12:31) Kwa hiyo, nawaambia, kila aina ya dhambi na kashfa zinaweza kusamehewa, lakini kufuru dhidi ya Roho (Atma) haitasamehewa.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mstari huu una umuhimu fulani katika maandiko. Wanadamu wanaposhika hekima ya Mungu, hekima hiyo hubadilika kuwa moto (nguvu za hekima). Moto huu una uwezo wa kuteketeza dhambi mbalimbali (karma). Kujua hekima ya kimungu kunaruhusu wanadamu kuepuka dhambi zisizohusiana na Atma. Hata hivyo, ni muhimu kutambua kwamba uwezo wa hekima hauwezi kuondoa dhambi zinazotokana na kufuru na vitendo dhidi ya Atma; dhambi kama hizo zinaweza kubaki bila kusamehewa</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 36,
verse: `<b>(35)	Injili ya Mathayo, sura ya 12, mstari wa 32.</b>`,
meaning: `<b>
(12:32) Yeyote atakayenena neno la kumpinga Mwana wa Adamu atasamehewa, lakini yeye atakayenena neno juu ya Roho Mtakatifu hatasamehewa, katika ulimwengu huu (yuga) au katika ulimwengu ujao. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wanadamu wote kwa kawaida hurejelewa kuwa wana wa binadamu; watu wa kawaida wanakubali kwamba wazazi wao ni wanadamu. Lakini Yesu, licha ya kuonekana kwake kwa nje kama mtu wa kawaida, hapaswi kuainishwa kama mwana wa Adamu. Yesu alipozungumza kuhusu Baba Yake, alitaja waziwazi kwamba Baba yake aliishi katika paraloka, si kama mwanadamu duniani. Kwa hiyo, Yesu anatambulishwa kwa kufaa kuwa Mwana wa Mungu.

  Tofauti na hilo, neno la jumla &ldquo;mwana wa binadamu&rdquo; linaweza kutumiwa kwa watu wote. Licha ya Yesu kujionyesha kwa jina na uzoefu wa mtu wa kawaida, jina lake la kweli ni Mwana wa Mungu Mfadhili wa mbegu kwa mtu wa kawaida sio mwanadamu. Mwanaume yeyote anayedai kuwa na watoto sio baba kweli. Atma, ambayo hutumika kama kichwa cha mwili na hufanya kazi zote ndani yake, ndiye mtoaji wa mbegu kwa wanadamu na viumbe vyote vilivyo hai. Kwa bahati mbaya, watu wengi hawajui ukweli huu. Kwa hiyo, mwanamume anadai kwamba yeye ni baba wa mwanadamu mwingine, ingawa hawezi kufanya kazi yoyote ndani ya mwili. Imesisitizwa mara nyingi katika maandiko ya kimungu ya kwanza na ya pili kwamba Atma ndiye mtendaji pekee wa mambo yote. Wakati mtu, kiuhalisia, hatendi madhambi yoyote kwa sababu hana uwezo wa kufanya vitendo, dhana potofu kwamba yeye ndiye mtendaji hupelekea mlundikano wa dhambi katika akaunti yake (Jeevatma). Hivyo, mtu anakuwa na jukumu la dhambi ambazo hajafanya. Vile vile, licha ya Atma kuwa Baba wa kweli wa mtu, mwanamume huyo anachukuliwa kuwa mtoto wa binadamu anapodai baba yake ni mwanaume.

  Yesu anafahamu kwamba Baba yake ndiye Baba wa paraloka. Tofauti na kila mtu mwingine, Yeye hakuzaliwa na Atma. Yesu anakiri kwamba Yeye ni Mwana wa Mungu, Roho Mtakatifu. Katika andiko lote la Biblia, Yesu anatajwa kuwa Mwana wa Mungu kwa sababu Yeye alisema waziwazi mara nyingi kwamba Baba alikuwa Roho Mtakatifu. Hekima ya Mungu ina uwezo wa kusamehe dhambi zilizofanywa dhidi ya watu wa kawaida. Hata hivyo, dhambi ya kumkufuru Mwana wa Mungu haitasamehewa kamwe. Dhambi hii ya kukufuru imekusudiwa kuwa nayo<strong>yuga mbili</strong>-katika yuga ya sasa (zama) na inayofuata.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 37,
verse: `<b>(36)	Injili ya Mathayo, sura ya 12, aya ya 36 na 37.</b>`,
meaning: ` <b>
(12:36) Lakini mimi nawaambia kwamba kila mtu atalazimika kutoa hesabu siku ya hukumu kwa kila neno tupu alilosema.
<br><br>
(12:37) Kwa maana kwa maneno yako utahesabiwa haki, na kwa maneno yako utahukumiwa.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Tangu kuzaliwa, wanadamu hujihusisha na vitendo vingi na kusema maneno mengi. Wanaamini kuwa wanawajibika kibinafsi kwa kila tendo na neno dogo. Kwa kweli, hawajafanya chochote. Ni Atma ndani ya mwili ambayo hufanya vitendo vyote. Walakini, mtu asiyejua anajihusisha kwa uwongo kila kitendo na neno kwake, na kwa hivyo, matokeo ya karmic ya matendo na maneno yao yanawapata. Atma huhifadhi karma yote iliyokusanywa katika chakra ya karma na kutathmini siku ya kifo. Katika siku hii ya hukumu, Atma hutathmini kila tendo na neno la mtu binafsi, akipima uzito dhambi na punya kuhusishwa na kila mmoja. Mtu huchukuliwa kuwa gnani (mtu mwenye busara) ikiwa atapata hekima katika maisha, na kinyume chake, mtu huchukuliwa kuwa mjinga ikiwa anafanya vitendo kwa ujinga. Zaidi ya hayo, Atma huzingatia ikiwa mtu amepata hekima (gnani) au amebaki katika ujinga. Hukumu inategemea hadhi ya mtu kama gnani au mjinga, kuamua maisha yao yajayo ipasavyo. Roho Mtakatifu hamhukumu mtu kulingana na karma. Ni Atma, inayohusika na kazi zote katika mwili, ambayo inahukumu mtu binafsi siku ya kifo na inaongoza Jeeva kwa maisha ya pili. Siku hii inajulikana kama'siku ya hukumu'au'siku ya mwisho,'pia hutumika kama siku ya kwanza ya maisha yajayo (siku ya kuzaliwa). Kwa kutambua kwamba Atma ndiye mwamuzi mkuu wa siku za mwisho na za kwanza za maisha, mtu anapaswa kuelewa kwamba Roho Mtakatifu hashiriki katika taratibu hizi. Siku ya mwisho inaweza kuitwa siku ya kuhesabu karma. Atma ndiye anayefanya kazi zote za mwili. Kuelewa hili, ikiwa mtu anaamini kuwa yeye binafsi hajafanya chochote, yeye hachukuliwi kuwa mwenye dhambi au mtu mwema. Ni muhimu kutambua kwamba Atma huamua karma katika matendo ya mtu na kuwaongoza kwa kuzaliwa ijayo. Kulingana na mawazo ya mtu, watahukumiwa kuwa ama gnani, mjinga, mwenye haki, au mwenye dhambi.
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 38,
verse: `<b>(37)	Injili ya Mathayo, sura ya 12, aya ya 40.</b>`,
meaning: ` <b>
(12:40) Kwa maana kama vile Yona alivyokuwa siku tatu mchana na usiku ndani ya tumbo la samaki mkubwa, vivyo hivyo Mwana wa Adamu atakuwa katika moyo wa nchi siku tatu mchana na usiku. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mstari huu unatoa ulinganifu kati ya matukio yaliyotangulia wakati wa Yesu na matukio yaliyotabiriwa. Inasema kwamba Yona, baada ya kumezwa na samaki mkubwa, alikaa ndani ya tumbo lake kwa siku tatu mchana na usiku. Mstari huo pia unatabiri, &ldquo;Yesu atakuwa siku tatu mchana na usiku katika moyo wa dunia.&rdquo; Ingawa ni sahihi kwamba Yona alitumia siku tatu mchana na usiku ndani ya samaki, si sahihi kusema kwamba Yesu, Mwana wa Adamu, aliishi kwa muda uleule katika moyo wa dunia. Kihistoria, Yesu alisulubishwa msalabani siku ya Ijumaa jioni na alifufuka kutoka kwa wafu kabla ya mapambazuko ya Jumapili asubuhi. Kulingana na rekodi za kihistoria, Yesu inaelekea alisulubishwa kati ya saa 3:30 na saa kumi jioni siku ya Ijumaa, na mwili Wake ukawekwa kaburini Ijumaa jioni. Kwa hiyo, Yesu hakuwa kaburini wakati wa mchana siku ya Ijumaa, lakini badala ya Ijumaa usiku na Jumamosi nzima. Ufufuo huo unasemekana ulitokea kabla ya mapambazuko siku ya Jumapili. Kwa hiyo, Yesu alitumia Ijumaa usiku na siku nzima Jumamosi kaburini, akifufuka kutoka kwa wafu kabla ya Jumapili asubuhi.

  Mstari huo unaonekana kuonyesha kwamba Yesu alizikwa kwa siku mbili tu na siku moja. Kwa hiyo, aya hii katika maandiko inaweza kuonekana kuwa si sahihi, ikizua shaka juu ya usahihi wake. Hata hivyo, mstari katika maandiko ya kimungu ni inachukuliwa kuwa sahihi bila kushindwa. Wakati wengine walipohoji ukweli wa aya hii, mimi pia nilipata hali ya shaka. Baada ya kusema kwamba hakuna nafasi ya uwongo isipokuwa ukweli katika sentensi hii, ilinibidi kujibu yale ambayo wengine waliniuliza. Lakini, tukikumbuka mwongozo katika Mathayo 10:20,<strong>"Kwa maana si ninyi mtakaokuwa mkinena, bali ni Roho wa Baba yenu asemaye ndani yenu.&rdquo;</strong>huondoa hitaji la hofu katika kutoa jibu. Uelewa ni kwamba Roho, au Atma, ndiye anayeuliza maswali na kutoa majibu. Kama Jeevas, jukumu letu ni kusikiliza na kuelewa kile ambacho Atma anawasiliana.

  Yule anayejulikana sana kama Mwana wa Adamu, kwa kweli, ni Mwana wa Mungu. Ingawa kwa kawaida tunamwita Yesu kama Mwana wa Mungu, ni muhimu kutambua kwamba Yeye si mwana wa binadamu yeyote ila Mungu mwenyewe. Madai haya yanafanywa kwa uhakika, yakiegemezwa katika ufahamu kwamba Yeye ni Mungu mwenye mwili. Ingawa mwili unaokaliwa na Mungu ulipatwa na kifo, Mungu mwenyewe hawezi kufa. Kwa kweli, kuna aina nne za kifo: kifo cha asili, kifo kisicho cha kawaida, kifo cha muda, na kifo cha mwisho. Ingawa wengi wanafahamu aina ya kwanza, wale walio na hekima ya kiroho, au 'gnanis,' wanajua aina zote nne. Kifo cha mwisho hutokea wakati Mungu anachukua umbo la mwanadamu au wakati mtu anapofikia moksham, akiunganishwa na Mungu. Licha ya imani iliyoenea katika kifo cha Yesu msalabani, Hapana mtu anaweza kusema kwa uhakika aina maalum ya kifo Alichopata.

  Katika mstari huu, imeelezwa kwamba Yesu alikuwa ndani ya moyo wa dunia kwa siku tatu mchana na usiku, lakini haisemi waziwazi kifo chake. Wakati wa kusulubishwa kwake, imani iliyoenea ilikuwa kwamba alikufa msalabani. Hata hivyo, alipotoka kaburini Jumapili asubuhi, Yesu alidai kuwa hakuwa amepitia kifo. Ili kushughulikia mashaka ya wanafunzi Wake, alionyesha alama za misumari kwenye vifundo vya mikono na miguu yake, pamoja na jeraha la mkuki, akionyesha wazi kwamba hakuwa amekufa. Hata hivyo, kumbukumbu za kihistoria zinathibitisha kwamba mwili Wake ulishushwa kutoka msalabani na kuwekwa kaburini baada ya kifo Chake Ijumaa jioni. Mkanganyiko huu wa dhahiri, ambapo Alikufa siku ya Ijumaa bado alionekana Jumapili kama kwamba Hakufa, unazua maswali juu ya taarifa inayoonekana kuwa isiyo ya kweli kwamba<strong>Angekuwa siku tatu mchana na usiku katika moyo wa dunia.</strong>Kama kwa 12:40, Hakuwa huko kwa usiku tatu na siku tatu, lakini badala yake alikuwa tu kwa usiku mbili na siku moja. Kuchunguza sababu inayoonekana kutopatana kunafunua ukweli wa ndani zaidi uliofichwa ndani ya uwongo unaoonekana. Acheni tuchunguze zaidi jinsi ukweli unavyofichwa ndani ya mkanganyiko huu unaoonekana.

  Ni kweli kwamba Yesu alikufa msalabani, lakini hakuna aliyejua kwamba ndivyo<strong>kifo cha muda</strong>. Yesu alipata kifo cha muda kati ya aina nne za vifo na akafufuka tena mapema Jumapili asubuhi kutokana na kifo cha muda. Aliwajulisha wanafunzi wake kwamba hakufa. Asingefufuka tena kama angepitia kifo cha kawaida. Hata hivyo, aliamka siku ya tatu kwa sababu alipata 'kifo cha muda.' Hivyo, dhana kwamba Yesu alikufa msalabani ni dhana potofu na si kweli. Vivyo hivyo, andiko linalosema kwamba Yesu alikuwa kaburini kwa siku tatu ni sahihi lakini linahitaji uelewevu wa kina zaidi.

  Yesu yuko ndani ya mwili kama Jeevatma, wakati Atma, Baba wa wote, pia anakaa ndani. Jeevatma hupata matokeo ya karma ndani ya kila mwili wa binadamu, wakati Atma hufanya vitendo muhimu kwa mujibu wa karma. Atma hupenya mwili mzima, ambapo Jeevatma iko ndani ya kichwa. Atma hufanya udhibiti juu ya mwili kupitia sehemu zake kumi na viungo. Uhai wa mtu mara nyingi huhusishwa na mwendo wa mwili, na mtu hufikiriwa kuwa hai wakati mwili uko katika mwendo. Kinyume chake, wakati sehemu kumi na viungo vinaacha kufanya kazi, ikifuatana na kutokuwepo kwa kupumua, mtu huyo anahesabiwa kuwa amekufa. Katika tukio la kifo cha asili, Atma na Jeevatma hutoka nje ya mwili, na kusababisha kutoweza kwa mwili kwa sababu ya kutokuwepo kwa Atma.

  Katika kesi ya kifo cha muda, sio Atma wala Jeevatma huondoka kwenye mwili. Atma inakabiliwa na contraction, ikipungua kutoka kwenye kingo za nje hadi ukubwa mdogo, na huingia kichwa sawa na Jeevatma. Katika kipindi hiki, hakuna viungo vya mwili vinavyofanya kazi, na kupumua hukoma, kutoa kuonekana kwa kifo. Mwanamume kwa kawaida huchukuliwa kuwa amekufa kwani kazi za nje na za ndani za mwili hukoma. Ufufuo hutokea wakati Atma, kurejesha kazi yake ya kawaida, inatokea na kuanza kufanya kazi tena. Jambo hili ni mfano katika kisa cha Yesu. Wakati wa kusulubishwa Kwake, Atma aliingia ndani ya mwili Wake, akidumisha hali hii kwa Ijumaa usiku na Jumamosi nzima. Mapema Jumapili asubuhi, Atma alianza tena kazi ya kawaida, na kusababisha Yesu kuibuka kutoka kaburini akiwa hai. Atma uzoefu<strong>kifo cha muda</strong>kwa usiku na mchana mbili tu. Wakati Atma katika mwili wa Yesu ilikuwa kaburini kwa usiku mbili na mchana, pia ni sahihi kusema kwamba Yesu (Jeevatma) alikuwa kaburini kwa usiku tatu na siku tatu, akionyesha mchakato usioeleweka kabisa na sisi. Hebu tuone ilikuwa ni nini.

  Inaweza kusemwa kwamba Yesu alifufuka kutokana na matendo ya Atma ndani ya mwili Wake. Walakini, kabla ya Atma kufa msalabani, Jeevatma tayari alikuwa amezikwa kwenye mwili. Uhusiano kati ya Jeevatma na buddhi ulikatizwa katika mwili wa Yesu baada ya kujua kuhusu kukamatwa kwake siku ya Alhamisi. Yesu aliingia katika hali isiyojulikana, bila kujua kabisa kukamatwa Kwake, kesi, kuchapwa viboko, na kusulubishwa, kimsingi akazikwa katika kaburi la mwili Wake. Alibaki bila fahamu kwa siku tatu, kana kwamba yuko kaburini. Licha ya hayo, Atma alitekeleza majukumu yote muhimu ya mwili, lakini Yesu hakujali matendo haya. Ili kumzuia Yesu asipate maumivu au mateso yoyote yanayohusiana na kuchapwa viboko na kusulubiwa, Atma alituma kumpeleka katika hali isiyojulikana, sawa na usingizi. Jeevatma alibaki amezikwa kwenye mwili hadi Atma alipomwamsha Jumapili asubuhi. Kwa hiyo, mstari huo unasema, &ldquo;Yesu alikuwa kaburini siku tatu mchana na usiku.&rdquo; Watu walijua kwamba mwili wa Yesu uliwekwa kaburini, lakini Jeevatma katika mwili Wake iliingia katika hali isiyojulikana kabla ya hapo. Baadaye, Atma wa Yesu alikufa kwa muda Ijumaa jioni. Hata hivyo, watu, ambao wangeweza tu kutazama vitu vinavyoonekana, hawakujua kazi ya Atma na Jeevatma katika mwili wa Yesu. Ni kweli kwamba Yesu alikuwa kaburini kwa siku tatu mchana na usiku, na Atma yake alikuwa kaburini kwa usiku mbili na mchana.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 39,
verse: `<b>(38)	Injili ya Mathayo, sura ya 13, aya ya 13, 14, na 15.</b>`,
meaning: `<b>
(13:13) Ingawa wanaona, lakini hawaoni; ingawa wanasikia, hawasikii wala hawaelewi.
<br><br>
(13:14) Ndani yao unatimia unabii wa Isaya: Mtasikia lakini hamtaelewa; mtakuwa mnaona lakini hamtambui.
<br><br>
(13:15) Maana mioyo ya watu hawa imekuwa mizito; hawasikii kwa masikio yao, na wamefumba macho yao. Vinginevyo wangeona kwa macho yao.kusikia kwa masikio yao, na kuelewa kwa mioyo yao, na kugeuka, nami ningewaponya. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nabii Isaya alitabiri kuhusu jambo hilo muda mrefu uliopita. Wakati huo na sasa, kumekuwa na watu wajinga. Wanaona kwa macho yao, na wanasikia kwa masikio yao, na wanageuza mana (akili) zao hata baada ya kufahamu kwa Buddha wao. Kwa sababu ya ukosefu wao wa kupendezwa na yale ambayo wameona, kusikia, na kujua, Buddha wao anapunguza mwendo ili kuepuka kuharibu karma yao kupitia Yesu. Masikio yao yanakuwa kiziwi kwa hekima ya kimungu. Wanasikiliza kila kinachosemwa lakini hawaelewi wanachosikia na wananaswa na vitu vya kimwili. Wanaweza tu kuona pesa. Kwao, wale walio na hekima huonekana kuwa wapumbavu.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 40,
verse: `<b>(39)	Injili ya Mathayo, sura ya 15, aya ya 7, ya 8, na ya 9.</b>`,
meaning: `<b>
(15:7) Enyi wanaafiki! Isaya alikuwa sahihi alipotabiri juu yako.
<br><br>
(15:8) Watu hawa huniheshimu kwa midomo, lakini mioyo yao iko mbali nami.
<br><br>
(15:9) Wananiabudu bure; mafundisho yao ni kanuni za kibinadamu tu. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mara nyingi tumesema, &ldquo;Mungu anajua jambo la Mungu; binadamu hawajui.&rdquo; Mungu anaweza kusema juu Yake Mwenyewe, na wanadamu watakuja kujua Mungu atakapofichua jinsi ya kumwabudu. Ingawa Mungu ametabiri jinsi Anavyopaswa kuabudiwa, wengi huhubiri kwa njia tofauti tofauti na yale ambayo Mungu amesema. Swami na gurus wengi wanafundisha watu sheria zilizotungwa na wanadamu, kama vile upadesas na njia nyinginezo za ibada. Mungu Mwenyewe afunua kwamba &ldquo;upadesa na ibada kama hizo ni ubatili&rdquo; na haziwezi kuwaleta wanadamu karibu Naye. Swami na gurus wengi huzungumza juu ya Mungu katika hotuba zao lakini huhubiri ibada zinazompinga Mungu na ibada zisizotamkwa na upadesa. Ijapokuwa waalimu hao wa majini huzungumza juu ya Mungu na hekima, wao hufanya ibada zisizofaa bila kuelewa hekima ya kimungu na huwaongoza wengine kufanya vivyo hivyo. Kwa mfano, kufunga hakuna uhusiano wowote na kumwabudu Mungu. Sio tu kwamba wanateseka kwa kufunga, lakini pia wanamsumbua Mungu aliye ndani. Hivyo ndivyo wanavyomdhuru Mungu aliye ndani. Vile vile, ilisemwa katika Bhagavad-Gita miaka elfu tano iliyopita, &ldquo;<strong>Huwezi kujua na kunifikia kupitia kusoma Vedas, kutoa michango, au kutoa dhabihu (yajnas) na toba (tapas)."</strong>Katika Bhagavad-Gita, Mungu alisema kwamba watu wengi wanamheshimu sana lakini wanamwabudu bure, kwa njia ya adharma. Bwana amesema jambo lile lile katika maandiko matakatifu sasa.

  Maneno hutoka kinywani, lakini hisia hutoka moyoni. Ingawa watu wengi humsifu Mungu, mioyo yao haipatani kikweli na kanuni za Mungu. Licha ya sifa zao, hawana dharma za Mungu mioyoni mwao. Dharma za Maya zilifanyika mioyoni mwao. Wanazungumza juu ya Mungu, lakini wanachofanya chini ya ushawishi wa Maya ni ibada ya kupinga Mungu. Wasomi wengi hutaja kile wanachosema kuwa hekima ya Mungu, lakini ibada wanayofanya, kama Mungu alivyosema, haitawaunganisha na Mungu. Pia inaonywa katika Gita kwamba ibada hizo ziko kwenye njia mbaya. Walakini, Peetadipatis maarufu hufanya yajnas bure, michango, kufunga, kuimba kwa Vedic, na toba. Biblia Takatifu na Bhagavad-Gita zinasema kwamba wale wanaojihusisha na mazoea haya wako mbali na Mungu. Kwa hiyo, kuanzia sasa na kuendelea, na tusimtukuze Mungu kwa maneno yetu tu bali pia tufuate yale ambayo Mungu alisema, tukiacha ibada isiyo na maana na inayompinga Mungu.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 41,
verse: `<b>(40)	Injili ya Mathayo, sura ya 15, mstari wa 11.</b>`,
meaning: ` <b>
 (15:11) Kinachoingia kinywani mwa mtu hakimtia unajisi, bali kile kitokacho katika vinywa vyao ndicho kimtiacho unajisi. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mwanadamu hutumia chakula kupitia kinywa, na aina mbalimbali za chakula ni nyingi, si tu kwa aina moja. Watu binafsi wanaweza kuainishwa kama wala mboga mboga au wasio wala mboga. Baadhi viongozi wa kiroho, kama vile swamis na gurus, hutetea ulaji mboga kuwa njia ya kuelewa hekima ya Mungu, wakisisitiza kwamba kuepuka nyama ni muhimu. Hapa Bwana alisema,<strong>" Kinachoingia kinywani mwa mtu hakimtia unajisi, bali kile kitokacho kinywani mwake ndicho kimtiacho unajisi.</strong>Kuna maoni mbalimbali kuhusu mazoea ya chakula kwa wale walio kwenye njia ya hekima ya kimungu. Wengine wanapendekeza kujiepusha na vyakula visivyo vya mboga, huku wengine wakipendekeza kula chakula kibichi pekee na kisichopikwa.

  Wengine hupendekeza mlo wa mboga pungufu kwa mlo mmoja kwa siku. Licha ya vizuizi hivi tofauti vya lishe, inasisitizwa kuwa utakatifu au uchafu wa mtu hauamuliwi na chakula kinachotumiwa. Ingawa chakula tunachokula kinaweza kuwa na uvutano juu ya afya ya kimwili, hakiathiri usafi wa kiroho. Kula chakula chochote hususa hakuzuii kutafuta hekima ya kimungu. Mwanadamu hutumia chakula kwa kinywa chake na hufafanua maneno kwa chombo kimoja. Hasa, mchakato wa kumeza chakula kupitia kinywa hauleti suala; bali ni maneno yanayotoka kinywani ambayo yana uwezo wa kumtia mtu unajisi. Wakati mwanadamu anajihusisha na vitendo na usemi wa maneno, asili yake ya kweli inafichuliwa kupitia maneno yake.<strong>Wazee hutegemeza imani ya kwamba mtu aliye na hekima ya kimungu huonwa kuwa mtakatifu, na wale wasio na hekima huonwa kuwa wachafu.</strong>Mtu mwenye hekima anachukuliwa kuwa msafi kulingana na usemi wake. Kinyume chake, ujinga hufichuliwa katika maneno ya mtu asiye na hekima. Unajisi wa mtu binafsi unadhihirika kupitia usemi wao; kwa hiyo, Yesu ilifikisha Aya iliyotajwa. Kulingana na mafundisho ya Biblia na Bhagavad-Gita, mtu hatiwa unajisi na chakula anachokula. Badala yake, ni karma ya mtu ambayo hutoa riziki. Wale walio kwenye njia ya hekima hawafungwi na vizuizi vya lishe. Kilicho muhimu kwa Mungu si chakula mahususi kinachotumiwa bali ni kufuata njia ya hekima. Kwa hiyo, chakula chochote kinachotumiwa kwa mujibu wa mazoea ya mtu hakina umuhimu kwa Mungu.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 42,
verse: `<b>(41)	Injili ya Mathayo, sura ya 15, aya ya 12 na 13.</b>`,
meaning: `<b>
(15:12) Kisha wanafunzi wakamwendea, wakamwuliza, Je! unajua ya kuwa Mafarisayo walichukizwa waliposikia hayo?
<br><br>
(15:13) Akajibu, “Kila pando asilolipanda Baba yangu wa mbinguni litang’olewa.”</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Bwana alipotangaza kwamba mwanadamu hajatiwa unajisi kwa chakula na yuko huru kula chakula chochote huku angali akishikamana na njia ya Mungu, Mafarisayo walizua pingamizi. Walipinga kwamba maneno ya Bwana hayana hekima ya kimungu na wakayakataa moja kwa moja. Wakimshutumu Yesu kwa kuendeleza ujinga, walitilia shaka chanzo cha mamlaka Yake ya kufundisha kanuni hizo. Mafarisayo, wakijiona kuwa walimu wakuu, walidai kwamba wao tu ndio waliokuwa na haki mamlaka ya kutoa hekima juu ya Mungu. Waliposikia upinzani wa Mafarisayo, wanafunzi walimweleza Yesu kuhusu hali hiyo. Akijibu, alisema,<strong>'Kila mmea usiopandwa na Baba yangu wa mbinguni utang'olewa na mizizi yake.'&nbsp;</strong>

  Baba wa Paraloka, Paramatma, anaanzisha dharma yake, ambayo inaweza kupungua duniani lakini kamwe isiangamie. Upungufu kama huo unapotokea, Paramatma hupata mwili kama Bhagavan ili kuimarisha dharma hizi. Kadiri dharma zinavyodhoofika, adharma huongezeka. Dharma ni za kimungu, za Mungu, wakati adharma zinahusishwa na Shetani. Paramatma hupanda mbegu za dharma, ambapo Shetani hupanda zile za adharma. Juu ya mwili wa Paramatma wa kidunia ili kutoa dharma Yake, Shetani anachukua sura mbalimbali kama vile wasomi, Mafarisayo, walimu, na swami. Kwa sura hii, Shetani anatoa toleo lake mwenyewe la hekima, akiwashawishi wanadamu kwamba dharma zake ni sawa na dharma za Mungu.

  Dharma za Maya (Shetani) mara kwa mara hudhoofisha dharma za Paramatma. Wengine wanaweza kuhoji kwa nini dharma za Maya zinaweza kudhoofisha dharma zenye nguvu za Mungu. Paramatma, kama Baba wa Paraloka, anapata mwili kama Bhagavan katika mahali maalum na wakati wa kueneza dharma zake. Ingawa dharma hizi zinaweza kupata nguvu katika kipindi hicho, zinapungua baada ya miaka elfu chache. Hii ni kwa sababu kurudi kwa Mungu kama Bhagavan hutokea pale tu inapoonekana kuwa ni muhimu. Kinyume chake, Maya daima hutengeneza gurus na swami, akiwasadikisha kwamba hekima yake ni sawa na hekima ya Mungu. Kupitia kwao, Maya hueneza dharma zake kila wakati, kuhakikisha ushawishi unaoendelea Duniani.

  Watu mara nyingi huvutiwa na swamis, gurus, na baba ambao mara kwa mara hufanya kazi chini ya ushawishi wa Maya, badala ya kuonekana mara kwa mara kwa Bhagavan asiyejulikana ambaye hufika mara moja katika miaka elfu. Wakati Mungu anajidhihirisha katika sehemu moja kwa wakati, Shetani anazaliwa kwa namna mbalimbali katika sehemu nyingi, akichukua majukumu kama vile swamis, gurus, na baba, akipunguza kwa bidii dharma za Mungu. Sawa na shamba lililojaa magugu yanayoathiri ukuzi wa miti iliyopandwa na mkulima, ushawishi wa Shetani unaenea karibu na dharma zilizopandwa za Mungu. Ili kukabiliana na hilo, Mungu, sawa na mkulima mwenye bidii, anaingilia kati kwa kung&rsquo;oa magugu, kutia ndani mizizi yake, ili kuimarisha miti ambayo Amepanda. Walakini, baada ya muda, magugu mengi yanaweza kuibuka tena bila kupanda kwa makusudi. Paramatma, iliyofananishwa na mkulima, hapo awali ilipanda dharma Zake. Shetani naye anakuza magugu (adharmas) kuzunguka mimea ya Mungu (dharmas). Udhaifu wa asili wa mmea wa Mungu hutokea chini ya ushawishi wa magugu ya Maya. Ili kukabiliana na hili, Mungu anaingilia kati,<strong>kuchimba dharma nyingi za Maya </strong>ambao wameingilia dharma Zake. Hili linapatana na kiini cha kauli ya Yesu&mdash;Mungu anasambaratisha dharma za Shetani zinazodhoofisha Wake, na hivyo kuimarisha na kuimarisha kanuni Zake takatifu.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 43,
verse: `<b>(42) Injili ya Mathayo, sura ya 15, mstari wa 14.</b>`,
meaning: `<b>
(15:14) Waacheni; hao ni viongozi vipofu. Kipofu akimwongoza kipofu, wote wawili watatumbukia shimoni. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Watu binafsi chini ya ushawishi wa Maya, kutia ndani Pandits na Mafarisayo, ambao wenyewe ni sehemu ya Maya, walimchambua Bhagavan Yesu bila kuelewa hekima ya Mungu. Hawajui hekima ya Mungu, hawana ufahamu wowote wa hekima ya kimungu. Wanabaki vipofu bila kuona hekima. Wale wasio na hekima ya Mungu wanawezaje kutangaza na kuwaongoza wengine ndani yake? Wanajifanya kuwa wanaona hekima na kueneza kile wanachokiona kuwa hekima ya Mungu. Watu, wakiwatumaini hawa waonaji wa dhahiri, wanatafuta mwongozo, wakidhani wana ujuzi kamili wa hekima ya Mungu. Bila wao kujua, hawa viongozi wenyewe ni vipofu. Hebu wazia kisa ambapo kipofu anaongoza wengine ambao pia ni vipofu, akidai kuwa wanaona na kuwaongoza njiani. Bila kuepukika, kiongozi kipofu anajikwaa shimoni, akiwaongoza wengine katika hali hiyo hiyo. Vivyo hivyo, wale wasiojua hekima ya Mungu huwadhihaki wale walio na hekima ya kweli, wakijitangaza kuwa magwiji wakubwa. Wale walio na hekima hawahitaji kubishana nao. Watu wasio na hekima ya kuona hawawezi kupanda hadi kilele cha moksham. Ingawa huenda wengi wakamfuata gwiji ambaye hana uwezo wa kuona, hakuna anayepata moksham; badala yake, wanaanguka kwenye<strong>shimo la gunas.</strong>
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 44,
verse: ` <b>(43) Injili ya Mathayo, sura ya 16, aya ya 21 na 22.<br>
Injili ya Mathayo, sura ya 17, aya ya 22 na 23.
<br>
Injili ya Mathayo, sura ya 20, aya ya 17, 18, na 19.</b>
`,
meaning: ` <b>
(16:21) Tangu wakati huo Yesu alianza kuwaeleza wanafunzi wake kwamba imempasa kwenda Yerusalemu na kupata mateso mengi kwa wazee na makuhani wakuu na walimu wa sheria, na kwamba lazima auawe. na siku ya tatu atafufuliwa. (Mara ya kwanza)
<br><br>
(16:22) Petro akamchukua kando na kuanza kumkemea. “Kamwe, Bwana!” Alisema. "Hii haitatokea kwako kamwe!"
<br><br>
(17:22) Hata walipokusanyika Galilaya, aliwaambia, Mwana wa Adamu anakwenda kutiwa katika mikono ya watu.
<br><br>
(17:23) Watamwua, na siku ya tatu atafufuliwa. Wanafunzi wakajawa na huzuni. (Mara ya pili)
<br><br>
(20:17) Sasa Yesu alikuwa akipanda kwenda Yerusalemu. Walipokuwa njiani, aliwachukua wale kumi na wawili kando, akawaambia.
<br><br>
(20:18) Tunapanda kwenda Yerusalemu, na Mwana wa Adamu atatiwa mikononi mwa makuhani wakuu na walimu wa sheria. Watamhukumu kifo.
<br><br>
(20:19) Watamkabidhi kwa watu wa Mataifa ili wadhihakiwe na kupigwa mijeledi na kusulubiwa. Siku ya tatu atafufuliwa! (Mara ya tatu)
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu, katika sura ya 16, 17, na 20 ya Injili ya Mathayo, alitabiri wakati Wake mwenyewe ujao. Ni kawaida kwa wanadamu wa kawaida kutabiri wakati wa kifo chao, kutokana na kutokuwa na uhakika na asili isiyojulikana ya wakati ujao. Hata hivyo, Yesu alifichua hali za kifo Chake si mara moja tu bali mara tatu, akionyesha jambo lisilo la kawaida ndani Yake. Kitendo hiki kilitumika kudhihirisha kwa wasiojua kwamba Yeye alikuwa zaidi ya mwanadamu tu. Uwezo wa kusema juu ya kifo cha mtu kwa undani kama huo ni jambo la kawaida sana, lakini Yesu angeweza kufanya hivyo kwa sababu alikuwa amepanga mapema kifo chake. Atma inasimama kama kiamua pekee cha karma ya maisha ndani ya mwili.

  Yesu, katika matukio matatu tofauti, alizungumza waziwazi kuhusu kifo chake kinachokuja. Uwezo wake wa kutabiri hatima Yake inatokana na karma Yake iliyoamuliwa kimbele. Kulingana na Yesu, Atma—hakimu wa karma—ni Mwana wa Paramatma. Yesu alisisitiza mara kwa mara kwamba Baba Yake ni Roho Mtakatifu, akijitambulisha kuwa Atma anayehusika na kuamua karma. Baada ya kuamua karma ya maisha yake, Yesu alitabiri kwamba angekabidhiwa kwa wazee na makuhani wakuu, watauawa nao, na kufufuka siku ya tatu. Ajabu, matukio haya yalijidhihirisha sawasawa na alivyotabiri. Yesu alizungumza juu ya kifo Chake bila woga, wonyesho ambao kila mtu mwenye utambuzi anaweza kutambua, akionyesha kwamba Yesu hakuwa mtu wa kawaida; kulikuwa na jambo lisilo la kawaida juu Yake.

</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 45,
verse: `<b>(44)	Injili ya Mathayo, sura ya 19, aya ya 23 na 24.</b>`,
meaning: `<b>
(19:23) Kisha Yesu akawaambia wanafunzi wake, Amin, nawaambia; ni vigumu kwa mtu tajiri kuingia katika ufalme wa paraloka.
<br><br>
(19:24) Tena, nawaambieni, ni rahisi zaidi ngamia kupenya tundu la sindano, kuliko tajiri kuingia katika ufalme wa Mungu.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu alitoa mfano, akisema,<strong>"Ni rahisi zaidi ngamia kupita katika tundu la sindano kuliko tajiri kuingia katika ufalme wa Mungu.&rdquo;</strong>Ndivyo ilivyo haiwezekani kwa ngamia kupita kwenye tundu la sindano, vivyo hivyo, ni changamoto kwa mtu tajiri kuingia katika ufalme wa Mungu. Wazee wengine wanaamini kwamba mara nyingi utajiri huzaa kiburi, sifa inayozingatiwa kuwa moja ya sifa sita mbaya (gunas). Ujeuri, sifa ya tano kati ya hizi, huambatana na uchoyo (kaama), hasira (krodha), avarice (lobha), shauku (moha), na wivu (matsara). Kiburi kipo kwa viwango tofauti kwa kila mtu. Iwe kwa 90%, 80%, 70%, 60%, 50%, 40%, au 30%, kila mtu ana kiwango fulani cha kiburi. Mtu mmoja anaweza kuonyesha kiburi cha 90%, wakati mwingine anaweza kuwa na 80%, na wengine wanaweza kuonyesha kiburi kidogo cha 30%.

  Sio tu kwamba kiburi hutengeneza mawazo ya Jeevatma ndani ya mwili, lakini bunduki zingine tano zinazohusiana pia zina jukumu muhimu. Kiwango cha kiburi kinaweza kutofautiana, na inazingatiwa kuwa maskini kwa ujumla huonyesha kiburi kidogo kuliko matajiri. Kadiri mtu anavyokuwa tajiri, ndivyo kiwango chao cha kiburi kinavyoelekea kuwa juu. Mtu mwenye mamilioni ya dola anaweza kujidhihirisha kwa kiwango kikubwa zaidi cha kiburi na kuathiriwa zaidi na gunas nyingine. Utajiri una uwezo wa kuleta mabadiliko makubwa kwa mtu, mara nyingi huwapeleka mbali na hekima. Katika muktadha wa<strong>moksham</strong>kufananishwa na tundu la sindano, mlinganisho huo unaenea hadi kwa matajiri kulinganishwa na ngamia. Kama vile ngamia hawezi kupita kwenye tundu la sindano, mtu tajiri, akiwa na uvutano mkubwa wa bunduki kama ngamia, hukabili changamoto katika kupata ukombozi. Mfano huo unasisitiza kwamba kama vile ngamia hawezi inafaa kupitia tundu la sindano, mtu tajiri, <strong>kwa ushawishi mkubwa wa gunas sawa na ngamia</strong>, hukutana na vikwazo katika kuingia paraloka (moksham).
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 46,
verse: `<b>(45)	Injili ya Mathayo, sura ya 22, 36, 37, 38, 39 na 40 mistari.</b>`,
meaning: `<b>
(22:36) Mwalimu, ni amri ipi iliyo kuu zaidi katika Sheria ( Dharma Shastra )?
<br><br>
(22:37) Yesu alijibu hivi: “Mpende Bwana Mungu wako kwa moyo wako wote na kwa roho yako yote na kwa akili yako yote.”
<br><br>
(22:38) Hii ndiyo amri kuu na ya kwanza.
<br><br>
(22:39) Na ya pili inafanana nayo: Mpende jirani yako kama nafsi yako.
<br><br>
(22:40) Sheria yote na Manabii hutegemea amri hizi mbili. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Baadhi ya watu walimwendea Yesu, wakimuuliza swali kuhusu amri muhimu zaidi katika sheria (Dharma Shastra), kwa nia ya kumjaribu na uwezekano wa kumdhihaki ikiwa atajikwaa. Yesu akajibu mara moja,<strong>"Upendo wa</strong><strong>Bwana Mungu wako kwa moyo wako wote, na kwa roho yako yote, na kwa akili zako zote.&rdquo;</strong>Alisisitiza kwamba agizo hili lilikuwa amri kuu na kuu zaidi, ikifuatwa na amri ya pili. Matumizi ya neno 'amri' katika mstari huu yanasisitiza umuhimu wake, huku Yesu akisisitiza kwamba amri hizi mbili zinatumika kama msingi wa torati yote na Manabii. Aya hii inafafanuliwa kama ifuatavyo.

  Amri kimsingi ni maagizo yanayotolewa ili kuelekeza hatua. Katika muktadha mpana zaidi, swali linazuka: ni nani mwenye mamlaka anayetoa amri? Jibu linapatikana katika kuelewa kwamba kwa kawaida wazee hutoa amri kwa mdogo. Kuendeleza wazo hili, Mungu, Muumba wa ulimwengu, anayo mamlaka ya juu zaidi, na kile Anachowasilisha kwa amri kinachukuliwa kuwa<strong>amri</strong>au<strong>sheria</strong>. Sheria hii inajumuisha vitendo visivyobadilika na kwa kawaida hujulikana kama<strong>dharma</strong>. Neno 'dharma' limetumika kwa sababu sheria hii kwa asili haiwezi kubadilika. Kwa mfano, utomvu wa pilipili ni tabia isiyoweza kubadilika, au dharma, ya pilipili. Spiciness hii iko mara kwa mara katika pilipili zote za pilipili. Kwa hivyo, inaweza kusemwa kwamba dharma ya pilipili ni utomvu wake. Vile vile, uchungu ni dharma ya ukwaju, na uchungu ni dharma ya mwarobaini.

  Dharma inajumuisha seti ya sheria na kanuni. Ikiwa mtu atauliza ni nani aliye na dharma, basi chochote kilichoumbwa kina dharma, kama vile tamarind, pilipili na mwarobaini vilivyoumbwa. dharma. Kwa vile Mungu ndiye muumbaji wa uumbaji, hana dharma yoyote. Muumba Mungu anasimama zaidi ya vikwazo vya dharma. Atma na Jeevatma, isipokuwa Mungu, wako chini ya dharmas. Zaidi ya hayo, Prakruti iliyoundwa pia ina seti yake ya dharma. Ili kufahamu Brahma Vidya au elimu ya kiroho, kuelewa dharmas ya Atma na Jeevatma inakuwa muhimu. Jeevatma, iliyokusudiwa haswa kuelewa Brahma Vidya,<strong>inahitaji tu kufahamiana na dharma ya Atma.</strong>

  Katika aya hii, njia ya kuelewa Atma imeangaziwa kuwa muhimu. Dharma Shastra inachunguza asili ya Atma, na dharma ya kwanza iliyoainishwa kama<strong>"Kumpenda Bwana, Mungu wako, ndiyo amri kuu na ya kwanza.&rdquo;</strong>Bwana anayerejelewa hapa kimsingi ni yule anayezaliwa. Yesu alikazia kwamba amri kuu ni kumpenda Mungu anayezaliwa. Hata hivyo, swali linazuka: wakati Mungu ni muumbaji, ambaye hajaumbwa, na asiye na dharma, ni jinsi gani yule aliyezaliwa kimsingi (Bwana) anaweza pia kuchukuliwa kuwa Mungu? Mtanziko unajikita kuzunguka kama aliyepo mwenyewe ni Mungu au aliyezaliwa ni Mungu. Jibu la utata huu linafafanuliwa kama ifuatavyo.

  Mungu, ambaye hajazaliwa na muumbaji, hakupata kuzaliwa. Hapo awali, Mungu aliumba Prakruti. Kufuatia uumbaji wa Prakruti, Mungu (Paramatma) alikusudia kuleta viumbe hai. Mara tu Prakruti ilipoundwa, Mungu alichagua kutojihusisha nayo hatua ya moja kwa moja. Baada ya kuumba vile vitu vitano&mdash;Anga, Hewa, Moto, Maji, na Dunia&mdash;Mungu alitamani hali ya kutotenda. Mungu alipotaka kudhihirika kwa namna,<strong>Atma</strong>(Bwana) alikuwepo ili kuumba, kutawala, na, hatimaye, kuwakomesha viumbe hai. Atma hutengeneza sheria na kusimamia mzunguko wa maisha na kifo kwa vitu vyote vilivyo hai. Kwa kuwa Atma ndiye muumbaji wa viumbe vyote hai, inafaa kutaja Atma kama Mungu.<strong>Kwa hivyo, Mungu, muumbaji wa Prakruti, anatambuliwa kama chombo kikuu, wakati Mungu, muumbaji wa viumbe hai ndani ya Prakruti, anakubaliwa kama chombo cha pili.</strong>

  Mungu wa kwanza, anayetambuliwa kama Paramatma, aliumba Atma, ni Mungu kwa Atma, na anabaki tofauti na Atma. Mungu wa pili, anayejulikana kama Atma, ndiye muumbaji wa viumbe hai. Ingawa Paramatma na Atma zinafanya kazi kama waumbaji na Miungu,<strong>Mungu wa kwanza (Paramatma) yuko zaidi ya dharmas, wakati Mungu wa pili (Atma) anashikamana na dharmas. Mungu asiye na dharma ndiye muumbaji mkuu, ambapo Mungu aliye na dharmas ndiye muumbaji wa pili. </strong>Hakuna anayejua kwamba kuna Miungu miwili duniani. Ingawa kuna Miungu miwili, Mungu wa kwanza akiwa mkuu zaidi, Atma ana umuhimu wa pekee kwa wanadamu kama muumbaji wa wanadamu. Ni muhimu kwa wanadamu kuabudu Atma pekee. Watu binafsi wanahimizwa kuelewa dharmas zinazohusiana na Mungu wa pili. Muhimu zaidi, dharma zote zilizofunuliwa katika maandiko zimezingatia Atma.

  Ikiwa mtu anataka kuabudu na kuomba, inaelekezwa kwa Mungu wa pili, Atma. Hakuna awezaye kumwabudu Mungu wa kwanza. Haiwezekani mtu yeyote kumuomba au kumwabudu. Ibada na maombi kwa Mungu wa kwanza huchukuliwa kuwa sio lazima, kwa hili<strong>Mungu hazai wala hazaliwi</strong>, kama inavyokaziwa katika andiko la mwisho. Sura ya 112 inasisitiza zaidi hilo<strong>Mungu wa kwanza hajali maombi</strong>. Inastahiki kujua kwamba Wakristo na Waislamu wote wanaweza wasitambue kuwepo kwa Miungu wawili (Allah wawili), kwa vile wanashikilia imani ya Mungu mmoja ambaye wanamwabudu. Hata hivyo, tofauti kati ya<strong>Mungu wa kuabudiwa na muumba wa mwanzo</strong>mara nyingi hupuuzwa. Wahindu hawamjui Mungu lakini wanaabudu miungu mingi na wanatembea katika njia mbaya (njia ya ujinga) kabisa.

  Mungu wa kwanza anavuka eneo la dharmas, na kumfanya asijulikane na zaidi ya ibada. Kuabudu Atma, Mungu anayetawaliwa na dharmas, vipengele maalum vya mwili wa mwanadamu huwa muhimu. Kulingana na Dharma Shastra, ni muhimu kwa Jeeva kumwabudu Atma, Mungu, kwa kutumia manas na buddhi. Hii inakuwa dharma muhimu. Aya inasisitiza,<strong>"Mpende Atma, Mungu, kwa moyo wako wote, nafsi yako yote na akili zako zote,&rdquo; </strong>ambapo upendo hufasiriwa kama ibada. Hii inasimama kama amri kuu au dharma<strong>. Kufasiri amri kama dharma, 'moyo wako wote' inaashiria buddhi yako yote, na 'nafsi yako yote' inarejelea wewe, Jeeva. Upendo, katika muktadha huu, unamaanisha kuabudu. Katika Dharma Shastra, inasemekana kwamba unapaswa kumwabudu Atma, Mungu, kwa akili yako</strong><strong>na buddhi wako.</strong>Kwa kutajwa kwa amri ya pili, hebu tuzame katika kile inachohusisha.

  Amri ya pili inaagiza,<strong>"Mpende jirani yako kama nafsi yako.&rdquo;</strong>Amri hizi mbili zinaunda msingi wa Dharma Shastra na mafundisho ya Mitume, kama ilivyoelezwa katika aya. Kimsingi, zinatumika kama msingi wa dharma ndani ya eneo la Brahma Vidya na mwongozo uliotolewa na Mitume katika kutoa dharma hizi. Mstari huo unapendekeza kwa hila kwamba kujipenda na kutanguliza ustawi wa kibinafsi ni mielekeo ya ulimwengu mzima. Wanapokabiliwa na vitisho, watu huonyesha silika ya asili ya kulinda maisha yao wenyewe, mara nyingi wakifanya bidii kupita kawaida, hata kwa gharama ya kudhabihu mali. Tumaini kuu ambalo watu binafsi wanalo kwa ajili ya maisha yao linaonekana wazi katika sala zao kwa miungu mbalimbali na utayari wao wa kuchukua hatua yoyote ili kuhakikisha hali njema yao. Uchunguzi huu unaangazia tabia ya asili ya watu kutanguliza kujipenda. Mstari huo unaagiza, &ldquo;Mpende jirani yako kama nafsi yako,&rdquo; ukikazia sharti la kupanua kiwango kilekile cha utunzaji na ufikirio kwa jirani kama mtu anavyotafuta kwa asili ustawi wake na kuthamini maisha yake mwenyewe.

  Ingawa uelewaji wa kawaida wa 'jirani' mara nyingi hurejelea mtu anayeishi jirani, mstari, &ldquo;Mpende jirani yako kama wewe mwenyewe&rdquo; unatuhimiza tuonyeshe upendo kwa yule aliye karibu naye. karibu nasi, sio jirani yetu wa karibu. Tukitafakari kwa undani zaidi, mstari huo unachochea kutafakari kuhusu jirani yetu ni nani hasa. Kulingana na aya hiyo, kando na yako<strong>Atma</strong>, hakuna mwingine ndani ya mwili wako. Ikiwa unatambua kama nafsi (Jeevatma), kuna nafsi nyingine sawa na wewe - Mungu wa pili, Atma. Kwa jumla, kuna nafsi tatu tu, zikiashiria nafsi mbili zaidi yako mwenyewe, na moja ikiwa Paramatma. Walakini, kurejelea Paramatma kama jirani yako haiwezekani kwani Yeye yuko kila mahali na anaenea kote. Ukiondoa Paramatma, Atma iliyobaki ni jirani yako. Dhana hii inalingana na ufahamu kwamba, isipokuwa kwa Atma na Paramatma, uumbaji wote unachukuliwa kuwa Prakruti ya kike, huku Atma na Paramatma wakiwakilisha kipengele cha kiume.

  Atma, kuwa chombo pekee cha kiume sawa na wewe, inachukuliwa kuwa jirani yako ipasavyo. Mungu wa kwanza, Paramatma, anasimama zaidi ya eneo la ibada, mahusiano, na dharmas, na kuifanya Atma kuwa somo linalofaa la kuabudiwa. Maandiko matakatifu mara kwa mara yanasisitiza ustahiki wa kumwabudu Atma, yakimtaja Yeye kama<strong>'Mwenyezi Mungu wako.'</strong>Tamko hili limerudiwa katika Sura 6:102, 3:18, na 16:51. Umuhimu wa amri mbili, "Mpende jirani yako Atma kama wewe mwenyewe," unasisitizwa katika Dharma Shastra.<strong>Kuabudu Atma kunaibuka kama jukumu kuu la gurus, wahubiri, na manabii.</strong>Hili linadhihirika katika jibu ambalo Yesu alimpa Mfarisayo alipoulizwa kuhusu dharma ya msingi kabisa katika sheria. Kutafakari aya hii inahimiza kuzingatiwa kwa kina kwa chombo unachoelekeza ibada yako.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 47,
verse: ` <b>(46)	Injili ya Mathayo, sura ya 23, mistari ya 8, 9, na 10.</b>`,
meaning: ` <b>
(23:8) “Lakini ninyi msiitwe Rabi, kwa maana mnaye Mwalimu mmoja, na ninyi nyote ni ndugu.
<br><br>
(23:9) Wala msimwite mtu yeyote duniani 'baba,' maana mnaye Baba mmoja, naye yuko katika paraloka.
<br><br>
(23:10) Wala ninyi msiitwe wakufunzi, kwani mnaye Mwalimu mmoja, Masihi. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wengine wanaweza kurejelea mhubiri kuwa baba au kufikiria gurus wanaohubiri sawa na baba. Hata hivyo, mstari huo unasema kwamba mtu yeyote asiitwe mhubiri. Inasema tusimwite mtu yeyote Rabi, kwani kuna bwana mmoja tu, na wengine wote ni ndugu, kama ilivyoonyeshwa kwenye aya. Mhubiri ni mtu anayefundisha, lakini mstari huo unarejelea haswa mtu anayefundisha hekima ya kimungu. Kulingana na mstari huo, ni mtu mmoja tu anayejua hekima ya kimungu, na hakuna mwingine anayejua. Kwanini hao wengine hawajui? Ni nani anayejua? Majibu ya maswali hayo ni kama ifuatavyo.

  Hekima ya Mungu haifahamiki kwa yeyote isipokuwa Mwenyezi Mungu, kama ilivyoelezwa katika maandiko matakatifu. Pia imetajwa katika maandiko matakatifu kwamba Mungu hakupitisha hekima yake kwa mwanadamu yeyote. Hii ina maana kwamba hakuna mtu anayejua hekima ya Mungu. Kwa hiyo, hakuna anayeweza kufundisha hekima ya Mungu. Kwa hivyo, hupaswi kuitwa Rabi, kama ilivyoelezwa katika aya. Ni Mungu pekee anayeweza kufundisha hekima ya Mungu. Hivyo, inasemwa katika aya kwamba bwana wako ni mmoja tu, na Yeye ni Mungu. Mwanadamu sio bwana (mwalimu), na wanadamu wote ni ndugu, kama ilivyoelezwa katika aya.

  Kila mtu ana wazazi wa kibiolojia. Kila mtu anaamini kwamba wazazi wanaoonekana tangu utoto ni wazazi halisi. Wazee wengi wanashauri kwamba unapaswa kuwaheshimu wazazi wako. Kila mtu anawaheshimu wazazi wake wa kumzaa. Inaweza kusemwa kuwa hakuna takwimu zingine za mama au baba isipokuwa kwa wazazi wanaoonekana. Yote haya yanahusiana na ulimwengu. Walakini, kila mtu ana wazazi wasioonekana, wasiojulikana kulingana na hekima ya kimungu. Ukiulizwa ikiwa wazazi wanaoonekana ni wazazi halisi au wazazi wasioonekana ni wazazi halisi, inakuwa wazi kwamba wazazi wasioonekana ni wazazi halisi. Sababu ya sisi kusema hivi ni kwamba baba ndiye mtoaji mbegu kwa kila mwanadamu. Kwa hiyo,<strong>Mungu (Atma), baba asiyeonekana, ndiye mtoaji wa mbegu wa viumbe vyote vilivyo hai.</strong>Kwa hiyo, baba asiyeonekana anakuwa baba halisi. Ikiwa tunajua au la, baba yetu mzazi ni Atma. Kwa hiyo,<strong>msimwite mtu baba duniani, maana baba yenu ni mmoja, aliye katika paraloka</strong>, kama ilivyosemwa katika aya hiyo.

  Mstari huo unasema kwamba mhubiri anayeonekana sio mhubiri wa kweli, baba wa kibaolojia sio baba halisi, na gwiji anayeonekana sio gwiji anayefaa. Wengi hufundisha kitu na huitwa gurus. Ikiwa unaitwa guru, basi unacheza nafasi ambayo haifai kwako. Mungu pekee ndiye anayeweza kuja duniani kama Guru wakati wowote. Mungu anapopata mwili kama mwanadamu, Anakuwa Guru na kufundisha hekima. Kwa hiyo, tunapaswa kuelewa kwamba<strong>mwili wa Mungu kama mwanadamu duniani ni Guru wa kweli.</strong>
<div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 48,
verse: ` <b>(47)	Injili ya Mathayo, sura ya 23, aya ya 15.</b>`,
meaning: `  <b>
(23:15) “Ole wenu walimu wa sheria na Mafarisayo, wanafiki! Unasafiri nchi kavu na baharini ili kupata mwongofu mmoja, na ukifaulu, unawafanya kuwa mtoto wa kuzimu maradufu kuliko wewe.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
Dini haikuwepo hadi miaka elfu tatu baada ya Kali Yuga. Miaka elfu mbili iliyopita, Ukristo ulipozaliwa, Wakristo waliibuka kuwa vikundi na baadaye wakaunda jumuiya ya Kikristo. Baada ya muda, jumuiya ya Kikristo ilijidai kuwa dini ya Kikristo. Hivyo, dini ya kwanza ilizaliwa. Baada ya kudai kuwa dini ya Kikristo, walijaribu kupanua imani yao. Wengine baadaye walijitambulisha kuwa dini iliyotegemea mafundisho yao. Hivyo, dini ziliundwa moja baada ya nyingine. Hivi karibuni, dini kumi na mbili ziliundwa duniani. Baada ya kuanzishwa kwa dini, baadhi ya watu walishiriki katika kupanua imani zao. Walisafiri nchi kavu na baharini ili kuwaongoa wengine kwenye dini yao.

Dini inaundwa na mapenzi ya watu, si kwa hekima ya Mungu. Katika dini hizi zilizoundwa na watu, inaonekana kuna hekima ya kimungu, lakini hekima ndani yake ni kinyume na hekima iliyofunuliwa na Mungu. Kwa hiyo, mtu anayetegemea hekima na maandiko ya kimungu, bila kujali dini, ataelewa mafundisho na hekima ya Mungu. Ikiwa mtu amefungamana na dini na kudai kuwa mfuasi wa kundi fulani la kidini, ataelewa hekima ya Maya. Mtu akikubali dini ataingia kwenye dhambi. Kwa upande mwingine, mtu asiye na uhusiano wa kidini atastahili kuingia katika ufalme wa paraloka.

</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 49,
verse: `<b>(48) Injili ya Mathayo, sura ya 24, aya ya 35.</b>`,
meaning: ` <b>
(24:35) Mbingu na ardhi zitapita, lakini maneno yangu hayatapita kamwe.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma (Mungu) haongei. Atma, ambayo inakaa katika mwili, inaweza kuzungumza. Atma ni muumbaji wa pili na Mungu wa pili. Atma, iliyopo katika mwili, huwasiliana kupitia hotuba. Mungu wa pili (Atma) hutoa hekima nyingi kwa wanadamu. Hekima inayofundishwa kwa namna hii inatolewa kupitia maneno. Mafundisho ya Atma kutoka kwa mwili, kwa namna ya maneno, hayatapita kamwe, hata kama mbingu na ardhi zitapita, kama ilivyoelezwa katika aya. Cha muhimu kuzingatia hapa ni<strong>kwamba mbingu na nchi zilizotajwa zitapita, lakini maneno yangu hayatapita kamwe.</strong>Lakini inaweza kusemwa kwamba mbingu na dunia hazipiti kamwe. Hata hivyo, aya hiyo inaonekana kuwasilisha kwamba mbingu na ardhi zitapita. Kwa hiyo, tunapaswa kuelewa kwamba mbingu na ardhi vyote vilivyotajwa katika Aya si mbingu na ardhi tunayoiona. Mbingu na ardhi vilivyoelezwa katika aya hiyo vinaharibika. Ardhi na mbingu zisizoharibika ni aina moja, na ardhi na mbingu ni aina nyingine. Katika Prakruti, ambayo iko katika umbo la mwili wa mwanadamu, kuna anga, hewa, moto, maji na ardhi. Vyote hivyo - mbingu ya kwanza, dunia ya mwisho, na hewa iliyobaki, moto na maji - katika umbo la mwili, vinaweza kuharibika.<strong>Mwili wa mwanadamu utaangamia, lakini hekima inayotolewa kutoka kwa mwanadamu haitapita kamwe.</strong>
</div></div>
</span>`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 50,
verse: `<b>(49) Injili ya Mathayo, sura ya 24, aya ya 42. </b>`,
meaning: ` <b>
((24:42) Basi kesheni, kwa maana hamjui ni siku gani atakayokuja Mola wenu.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wakati wowote kunapotokea tishio kwa dharma za Mungu Duniani, na dharma za Shetani kuenea sana, Mungu hutuma sehemu yake mwenyewe duniani ili kulinda amri zake (dharmas). Wakati wowote kuna hitaji, Mungu lazima aje kama mwanadamu. Krishna katika Yuga ya Dvapara na Bwana Yesu katika Yuga ya Kali walikuja kwa namna hiyo. Ajabu, tungeweza kuwatambua baada ya kufika na kuondoka, lakini walipokuwa duniani, hatukuweza kuwatambua ni akina nani. Hakuna aliyetambua wakati Mungu Mwenyewe alikuja kama Bwana. Hata wale waliouona utukufu wake hawakuweza kujua kuwa yeye ni Mungu bali walidhani ni mkuu. Katika Dvapara Yuga, Krishna alisema,<strong>"Nitakuja wakati dharma zimechafuliwa."</strong>Alikuja tena kama Bwana Yesu na akarudia dharma zake. Hakutakuwa na tofauti yoyote katika amri Alizotoa, ama katika Dvapara Yuga au Kali Yuga. Lakini hakuna kufanana katika majina yao, maisha, na mtindo wa maisha. Kwa hiyo, Shetani alikazia tofauti zao za nje na kuwadanganya wanadamu wasitambue kwamba wote wawili walikuwa sawa. Mwanadamu anahitaji hekima fulani ili kujua ni nani amekuja, ni nani ajaye, Amekuja lini, na wakati Anaweza kuja. Maadamu mwanadamu yuko katika ujinga, hajui ujio wa Mungu na anabaki bila kufahamu hata baada ya Mungu kuja na kuondoka. Kwa hivyo, ikiwa watu wanataka kujua kuwasili kwa Mungu na kumtambua, lazima wawe na hekima inayohusiana na Mungu. Siku hizi, hekima ya Mungu haijulikani, na hekima ya Shetani imeenea sana. Kwa hivyo,<strong>"Hamjui ni siku gani atakayokuja Mola wenu,&rdquo;</strong>ilisema aya hiyo<strong>. &ldquo;Kaeni macho ili kumjua Yeye,&rdquo;</strong>pia imetajwa katika Aya. Hapa<strong>'kukaa macho' maana yake ni kuwa na hekima.</strong>
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 51,
verse: ` <b>(50) Injili ya Mathayo, sura ya 26, aya ya 26, 27 na 28.</b>`,
meaning: `<b>
(26:26) Walipokuwa wakila, Yesu alitwaa mkate, na baada ya kushukuru, akaumega, akawapa wanafunzi wake, akisema, “Twaeni mle; huu ni mwili wangu.”
<br><br>
(26:27) Kisha akatwaa kikombe, akashukuru, akawapa, akisema, Nyweni katika hiki nyote;
<br><br>
(26:28) Hii ni damu yangu ya agano (hekima ya Mungu isiyo na vifungo vya ujinga), ambayo inamwagika kwa ajili ya wengi kwa msamaha wa dhambi. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu na wanafunzi wake kumi na wawili walipokuwa wakila, Yesu alitwaa mkate, akabariki, akaumega, akawapa wanafunzi wake, akasema,<strong>"Kuchukua na kula; huu ni mwili wangu.&rdquo;</strong>Pia alichukua maji ya zabibu kwenye kikombe na kusema,<strong>"Nyote mnakunywa humo; hii ni damu yangu.&rdquo;</strong>Alilinganisha maji ya zabibu na damu Yake na akafafanua zaidi, akisema,<strong>"Hii ndiyo damu yangu ya agano, imwagikayo kwa ajili ya wengi kwa ondoleo la dhambi.&rdquo;</strong>

  Maneno haya ya Yesu yanayoonekana kuwa ya kawaida yanapaswa kuzingatiwa kati ya mafundisho yake muhimu zaidi. Kwa bahati mbaya, baadhi ya Wakristo, bila kujua kiini cha maneno haya yanayosemwa wakati wa chakula, yanashindwa kufahamu umuhimu wake.<strong>Wengine wanafasiri kwamba Yesu alizungumza maneno haya kuhusu wakati wake uliopita au ujao ingawa yalihusu sasa.</strong>

  Yesu alitoa maji ya zabibu katika kikombe na kusema, &ldquo;Hii ni damu yangu,&rdquo; lakini hakueleza bayana kwamba ilikuwa ni damu ya mwili wake iliyomwagwa msalabani. Hata hivyo, wahubiri wengi wa Kikristo wanahusisha damu inayotajwa katika mstari huu na damu ya mwili wa Yesu iliyomwagwa msalabani, wakidai kwamba dhambi za mtu zinasamehewa kwa sababu Yesu aliimwaga damu yake kwa ajili ya wenye dhambi. Hata hivyo, kuna tofauti kati ya kile ambacho mwanadamu husema na kile ambacho Yesu alisema. Yesu hakutaja damu ya mwili wake katika mstari huo. Katika hali kama hizo, itakuwa si haki kusema kwamba Yesu alimwaga damu yake kwa ajili ya wenye dhambi. Siku hiyo, wale waliomweka Yesu msalabani, walimfanya kumwaga damu yake, na kusababisha kifo chake wakafanya dhambi mbaya sana isiyoweza kusamehewa. Hata hivyo, itakuwa si sahihi kudai kwamba dhambi za watu zilisamehewa na zitasamehewa kwa kifo cha Yesu.

  Yesu alipowapa wanafunzi wake maji ya zabibu na kusema,<strong>"Hii ndiyo damu ya agano, imwagikayo kwa ajili ya wengi kwa ondoleo la dhambi,&rdquo;</strong>Alitumia wakati uliopo, akionyesha kwamba ilikuwa ikitokea wakati huo, na hakutaja tukio la baadaye. Hakudokeza juu ya kumwagika kwa damu Yake msalabani siku zijazo. Kwa hiyo, ni itakuwa si sahihi kudai kwamba damu iliyomwagika msalabani ilikuwa kwa ajili ya msamaha wa dhambi.<strong>Wale waliohusika na Yesu kumwaga damu yake msalabani walipokea dhambi, si msamaha wa dhambi.</strong>Kile ambacho Yesu alitaja ni damu ya agano, inayoonyesha hekima ya Mungu, ambayo haifungwi na ujinga. Alifundisha hekima hii ya kimungu kila siku, akiilinganisha na kumwagwa kwa damu ya agano kutoka kinywani Mwake. Alitoa moto wa hekima kila siku ili kuteketeza dhambi za wanadamu, akifananisha mafundisho yake na damu ya agano inayotiririka kutoka kinywani Mwake. Maana ya kweli ya aya hii inaweza tu kueleweka kupitia uchambuzi makini.

  Maana ya tamko hilo haieleweki vyema kwa sababu neno &lsquo;agano&rsquo; mara nyingi halijaachwa katika maneno &lsquo;damu ya agano&rsquo; huku likizingatiwa tu neno &lsquo;damu&rsquo;. Haitambuliki kwamba 'agano' linamaanisha 'hekima pamoja na dharmas.' Sababu nyingine ya kutaja 'damu' katika mstari si damu ya kimwili.⁷ mwili umejaa damu, na maadamu kuna damu ndani ya mwili, mwili uko hai. Mwili ukitoa damu yake, mwili hufa. Kulingana na hili, inajulikana kuwa kiini cha mwili ni damu. Walipokuwa wakila, Yesu alitwaa mkate kwanza, akawapa wanafunzi wake, akisema,<strong>" Kuchukua na kula; huu ni mwili wangu.&rdquo;</strong>Hapa alilinganisha mkate na mwili wake. Kisha akatwaa maji ya zabibu katika kikombe, akawapa, akisema,<strong>"Hii ndiyo damu yangu ya agano.&rdquo; </strong>Alisema kuhusu mkate, &ldquo;Huu ni mwili wangu. Kula hii.&rdquo; Yesu alilinganisha mkate na mwili Wake na akawaagiza kuula. Ikiwa unakula mkate, basi unakula mwili wa Yesu. Msingi na asili ya mwili ni damu yake.

  Wakati wa kulinganisha hekima ya kimungu na damu ya agano, mwili wa mkate unaweza kufananishwa na Maandiko Matakatifu na hekima ya Mungu. Kwa njia hii,<strong>mwili una damu, na maandiko yana hekima. Kula mwili kunamaanisha kusoma maandiko na kuyasoma kutafichua kiini cha hekima yake.</strong><strong>Kunywa damu kunamaanisha kuelewa hekima.</strong>Kwa bahati mbaya, mara nyingi watu huzingatia tu mkate na maji ya zabibu ambayo Yesu alitoa, bila kutambua kwamba mkate unawakilisha maandiko ya kimungu, na maji ya zabibu yanawakilisha hekima yake.<strong>Yesu alilinganisha maandiko na mwili (mkate) wake na hekima ndani yake na damu (maji ya zabibu). Kumwagika kwa damu ya agano inarejelea hekima na dharma zinazofundishwa wakati huo.</strong>

  Wengi wameshindwa kutambua kwamba Yesu alilinganisha maandiko na mwili wake na hekima yake na damu, na hivyo kusababisha imani potofu kwamba damu iliyomwagwa msalabani ilikuwa kwa ajili ya ondoleo la dhambi.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 52,
verse: `<b>(51)	Injili ya Mathayo, sura ya 28, aya ya 18.</b>`,
meaning: `<b>
(28:18) Kisha Yesu akaja kwao, akasema nao, akasema, Nimepewa mamlaka yote duniani na duniani. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika Kitelugu, 'Loka' inamaanisha kuwa na uzoefu. Katika Loka, tunakutana na shida na raha. Uzoefu wa raha unaitwa Svarga Loka (mbinguni), wakati uzoefu wa shida unajulikana kama Naraka Loka (kuzimu). Loka si nchi tofauti au mahali maalum; badala yake, ni jumla ya uzoefu wote. Kulingana na uzoefu wa mtu wa raha na huzuni, Loka imegawanywa mbinguni na kuzimu. Uzoefu wote wa mbinguni na kuzimu unafanyika duniani na sio maeneo tofauti ya kimwili. Kwa hivyo, kulingana na uzoefu, tunaweza kurejelea kama mbingu au kuzimu, lakini kwa kweli, mbingu na kuzimu zipo duniani.

  Kuna aina mbili za lokas duniani - Ihaloka na Paraloka. <strong>Ihaloka inahusisha uzoefu, ambapo Paraloka hana uzoefu wowote.</strong>Wote Ihaloka na Paraloka wapo duniani. 'Para' ina maana tofauti au tofauti. Paraloka ina maana tofauti na uzoefu. Kwa maneno mengine, Paraloka hana uzoefu na ni tofauti na loka. Katika Kitelugu, 'manishi' ina maana ya mtu ambaye anapata uzoefu kupitia manas (akili). Kwa hiyo, watu wote duniani ni wa Ihaloka. Hakuna mtu aliyemwona Paraloka. Mwanaume aliyevaa mwili huwa hana uzoefu. Kwa hivyo, inaweza kusemwa kwamba kila mtu ni wa loka na anaishi Ihaloka. Inaweza kusemwa kwamba yule asiye na uzoefu yuko Paraloka.<strong>" Mamlaka yote katika Paraloka na duniani nimepewa,&rdquo; alisema</strong>aya hapo juu.

  Ikiwa Yesu angekuwa mtu wa kawaida, angekuwa katika Ihaloka na asingejua Paraloka. Licha ya kuonekana kuwa mtu wa kawaida, mwili wake ulikuwa na Atma tu na sio Jeevatma. Atma aliishi katika mwili wa Yesu na kujifanya kuwa Jeevatma. Atma na Jeevatma zote zipo kwa wanadamu wote, ambapo Atma hufanya kazi zote za mwili, na Jeevatma hupata furaha na huzuni kazini. Kwa njia hii, inaweza kusemwa kwamba Jeevatma katika mwili wa mtu iko mbinguni wakati fulani na kuzimu wakati mwingine. Lakini Mungu anapokuja kama mwanadamu, mwili wake hauna Jeevatma. Ingawa Atma inafanya kazi katika mwili wa Mwana wa Mungu, haina uzoefu wowote. Kwa hiyo, Anasemekana kuwa katika Paraloka. Kwa kuwa Yesu hakuwa mtu wa kawaida, ana mamlaka duniani (Ihaloka) na Paraloka. Roho Mtakatifu, Paramatma, alimpa Atma (Yesu) mamlaka kamili. Yesu, ambaye ni Atma, pia ndiye kichwa cha hekima ya kimungu. Hekima ya Mungu sasa inajulikana kwa yeyote isipokuwa kwa Mungu. Kwa hiyo, somo la nafsi halijulikani kwa watu. Yesu alifundisha hekima ya nafsi tatu na akawaagiza wanafunzi wake, waliojua hekima ya nafsi, wafundishe hekima ya Atma kwa watu wote.
</div></div>
</span>
`
},
{
chapterName: "Injili ya Mathayo",
chapterNumber: 2,
pageNumber: 53,
verse: ` <b>(52)	Injili ya Mathayo, sura ya 28, aya ya 19, na 20.</b>`,
meaning: ` <b>
(28:19) Kwa hiyo, enendeni mkawafanye mataifa yote kuwa wanafunzi, mkiwabatiza kwa jina la Baba na la Mwana na la Roho Mtakatifu.
<br><br>
(28:20) Mkiwafundisha kuyashika yote niliyowaamuru nyinyi. Na hakika mimi nipo pamoja nanyi siku zote, hata ukamilifu wa dahari (Yuga).   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Injili ya Mathayo ina sura 28. Mistari ya mwisho, ya 19, na 20 ya sura ya 28, ina siri ya elimu yote ya kiroho. Habari juu ya nafsi tatu zilizotajwa katika mstari wa 19 ni hekima muhimu zaidi katika maandiko. Katika mstari huu, neno &lsquo;Baba&rsquo; limetumiwa kabla ya neno &lsquo;Mwana,&rsquo; likihitaji kufikiria kwa makini ili kulielewa. Wale wanaotafakari juu ya hili watajua kwamba mlolongo huo ni Mwana, Baba, na Roho Mtakatifu. Kwa kueleza zaidi,<strong>mtu lazima aelewe kwamba Mwana ni Jeevatma, Baba ni Atma, na Roho Mtakatifu ni Paramatma.</strong>Hakuna roho zingine ulimwenguni isipokuwa hizi tatu. Kulingana na nadharia ya Thraitha, nafsi hizi tatu ni Jeevatma, Atma, na Paramatma.

  Ubatizo unamaanisha upadesa. Katika Kitelugu, 'Upa' (ndogo) ina maana ya karibu. Upadesa maana yake ni nchi jirani au jirani. Kwa undani zaidi, inamaanisha "kuondoka katika nchi hii ulipo sasa na kupata kibali cha kwenda nchi jirani au jirani." Afisa lazima kwanza ape ruhusa kwenda nchi jirani. Afisa huyo anaweza kuitwa Guru. Guru maana yake ni yule ambaye ni mkuu wa nchi jirani au Paraloka. Haijalishi ni gurus wangapi duniani, Mungu, mkuu wa Paraloka, ndiye Guru wa kweli. Mungu, mtawala wa Paraloka, ndiye Guru wa kweli ambaye hutupatia ubatizo wa kweli anapokuja duniani kama mwanadamu. Ingawa kuna gurus wengi duniani, wote ni gurus kwa jina tu. Ubatizo wanaotoa ni kwa jina tu.

  Wakati Mungu, Guru halisi, hayupo duniani kama mwanadamu, kulingana na mapokeo ya hekima, wahubiri lazima wafanye baadhi ya wanafunzi na kuwapa upadesa. Upadesa ni kama ruhusa kwa nchi jirani. Katika mchakato wa upadesa, guru huwafundisha wanafunzi kwa maji, kwa mantra, neno, au Vibhuti (majivu takatifu). Upadesa ni ruhusa kwa Paraloka, na neno au maji ni kama tikiti inayotambua kuingia kwa Paraloka. Gurus wengi hutumia mantra au neno katika mchakato wa upadesa. Vivyo hivyo, Yesu aliwaambia wanafunzi wake,<strong>"Nendeni mkafanye watu wa mataifa yote kuwa wanafunzi.&rdquo;</strong>Pia aliwaambia wanafunzi wake wawabatize watakapokuwa wanafunzi. Alipokuwa akiwapa wanafunzi tikiti ya ruhusa katika mchakato wa upadesa, Alisema, &ldquo;Mwabatize kwa jina la nafsi tatu &ndash; Baba, Mwana, na Roho Mtakatifu.&rdquo; Kulingana na mapokeo ya hekima, ubatizo unapaswa kufanywa kwa njia hii. Kwa hivyo, wakati Yohana, Guru, alipobatiza, Alibatiza kwa maji. Kulingana na njia hiyo, Yesu pia alipokea upadesa kutoka kwa Yohana. Wakati huo, Yohana alimwona Yesu na kusema.

  Hivi ndivyo Injili ya Mathayo inavyosema katika mistari 3:14 na 3:15.<strong>Yesu alipomjia, Yohana alijaribu kumzuia akisema, Mimi nahitaji kubatizwa na wewe, nawe waja kwangu? Yesu akajibu, &ldquo;Acha iwe hivi sasa; inatufaa sisi kufanya hivi ili kutimiza uadilifu (hekima) yote.&rdquo;</strong>Hata Yesu alisema lazima mtu apokee ubatizo kutoka kwa Guru kulingana na mapokeo ya hekima. Pia nilisema jambo lile lile kuhusu ubatizo.

  Yesu aliwapa wanafunzi wake mamlaka ya kubatiza na kusema, "Watu wote wanahitaji kubatizwa, sio tu tabaka au kikundi." Pia aliwaambia watoe hati ya kuingia ya Baba, Mwana, na Roho Mtakatifu. Yesu aliwaambia wanafunzi wake wafanye kazi hiyo kwa sababu Mungu hangeweza kuwa duniani sikuzote kama mwanadamu ili kutoa upadesa. Mbali na ubatizo, Yesu pia aliwaambia wanafunzi wake wawafundishe kutii mambo yote aliyowaambia wanafunzi wake.

  Yesu pia alisema, &ldquo;Mimi nipo pamoja nanyi sikuzote,&rdquo; bila kusababisha shaka kwa wanafunzi kwamba hawakuwa wachungaji. Alisema hasa,<strong>"mimi nipo pamoja nanyi siku zote, hata mwisho wa Yuga.&rdquo;</strong>Wale wanaojua kuhusu yuga wanaweza kuuliza swali wanaposikia yale ambayo Yesu alisema. Yuga (zama) haimaliziki, na yuga nyingine huanza mwishoni mwa yuga ya sasa. Katika hali hiyo, kwa nini Yesu alisema kwamba kuna mwisho wa yuga, wakati hakuna mwisho kwao? Jibu ni kama ifuatavyo. Wakati ni wa milele na hudumu milele, kama Mungu (Paramatma). Wakati, kuwa jina la utani la Mungu, pia ni wa milele. Kwa kuwa wakati ni Paramatma, the nafsi tatu zinaitwa baada ya wakati. Paramatma imegawanywa katika nafsi tatu - Jeevatma, Atma, na Paramatma. Majina ya wakati uliopita, ujao, na wakati uliopo yametolewa kwa wakati ili wakati majina haya matatu yaonekane ndani yake. Jina 'yogam,' muhimu ili kumfikia Mungu, limepewa wakati. Kwa njia hii, majina manne yanapewa wakati, na neno 'yogam' limeambatanishwa mwishoni mwa majina yote manne ili kuonyesha 'yogam' ni muhimu ili kufikia Mungu.

  Muda umegawanywa katika sehemu nne zinazoitwa Kruta, Traita, Dvapara, na Kali, mtawalia. Neno 'yogam' huongezwa hadi mwisho wa kila jina, na kuunda majina Kruta Yuga, Traita Yuga, Dvapara Yuga, na Kali Yuga. <strong>Kruta inamaanisha yule (Atma) anayefanya hivyo. Traita maana yake ni tatu. Dvapara maana yake ni yule (Paramatma) aliyejitenga na hao wawili. Kali inamaanisha yule (Jeevatma) anayeangamizwa.</strong>Maandiko ya kwanza ya kiungu yanazitaja nafsi hizi tatu kama<strong>Kshara, Akshara, na Purushottama</strong>. Katika Kitelugu, Kshara inamaanisha Jeevatma inayoweza kuharibika, Akshara inamaanisha Atma isiyoweza kuharibika, na Purushottama inamaanisha Paramatma, ambaye ni bora kuliko Jeevatma na Atma. Katika andiko la mwisho la kimungu, mstari wa 50:21, watatu hawa wanarejelewa kama<strong>Abiria, Dereva, na Shahidi</strong>, na katika andiko la pili la kimungu,<strong>Mwana, Baba, na Roho Mtakatifu. Yoga</strong>muhimu kuelewa hawa wanaume watatu (Purusha), ndiyo maana neno 'yogam' linaongezwa hadi mwisho wa majina manne ya yuga. Kupitia yogam, Jeevatma anaweza kujijua; kwa hivyo inaitwa.

  Yoga ya Kali. Kwa yogam, Atma itajulikana; kwa hivyo inaitwa Kruta Yogam. Kwa yogam, mtu anaweza kufikia Paramatma; kwa hiyo, inaitwa Traita Yogam na Dvapara Yogam. Wale ambao ni matajiri katika hekima ya kimungu walitoa majina haya. Baada ya muda, Traita ikawa Treta, na neno yogam likawa yuga. Ndio maana katika aya,<strong>'mwisho wa yuga'</strong>inatumika badala ya<strong>' mwisho wa yoga.'</strong>Neno sahihi linapotumiwa, usemi wa Yesu &ldquo;nitakuwa pamoja nanyi sikuzote hadi mwisho wa yoga&rdquo; inaweza kufasiriwa kuwa &ldquo;mimi nipo pamoja nanyi sikuzote mpaka tamati ya yoga.&rdquo; Jeevatma inapofikia mwisho wa yoga, anaungana na Mungu. Mungu na Jeeva wanapotengana, yoga ni muhimu ili kuungana na Mungu na Mungu atakuwepo na Jeevatma.<strong>Mara baada ya yoga kukamilika, Jeevatma itaungana na Mungu</strong>, na hakutakuwa tena na haja ya Mungu kuwepo na Jeevatma. Hii ndio maana nyuma ya kauli<strong>"hadi mwisho wa yuga."</strong>
</div></div>
</span>
`
},
{
chapterName: "Injili ya Marko",
chapterNumber: 3,
pageNumber: 54,
verse: ` <b>(1)	Injili ya Marko, sura ya 2, aya ya 19 na 20.</b>`,
meaning: `<b>
(2:19) Wageni wa bwana-arusi wawezaje kufunga akiwa pamoja nao? Hawawezi, mradi tu wanaye pamoja nao.
<br><br>
(2:20) Lakini wakati utakuja ambapo bwana arusi ataondolewa kwao, na siku hiyo watafunga. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Baadhi ya watu walimwendea Yesu na kumwuliza, “Mbona wanafunzi wa Yohana na wanafunzi wa Mafarisayo wanafunga, lakini wako si kufunga? Yesu alijibu kwa mistari ifuatayo. Katika muktadha huu, mfungo unarejelea kujiepusha na chakula, maana ya kawaida ya kidunia. Katika Kitelugu, neno la bwana harusi ni 'Pellikoduku,' ambalo hutafsiriwa 'mwana wa ndoa.' Katika Kitelugu, maneno 'mwana wa ndoa' huwa na maana maalum kwa sababu neno 'ndoa' (au 'Pelli' katika Kitelugu) huashiria Mungu katika maana ya kiroho. Kwa hiyo, ‘mwana wa ndoa’ anarejelea Mwana wa Mungu. Wakati Yesu, Mwana wa Mungu, akiwa pamoja na wafuasi Wake, watapata furaha na si kufunga. Hata hivyo, bwana-arusi (Mwana wa Mungu) anapoondolewa kutoka kwao, hao waliokuwa pamoja Naye watafunga kwa huzuni kwa sababu anaondoka kwao. Vivyo hivyo, wanafunzi wa Yesu hawatafunga maadamu Yeye yuko pamoja nao. Yesu asipokuwepo, watafunga kwa huzuni. Msemo 'bwana-arusi' (mwana wa ndoa) unapaswa kueleweka kuwa unamrejelea Mwana wa Mungu.
</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 3,
pageNumber: 55,
verse: `<b>(2) Injili ya Marko, sura ya 4, aya ya 38 na 39.</b>`,
meaning: ` <b>
(4:38) Yesu alikuwa nyuma ya meli, akilala juu ya mto. Wanafunzi wakamwamsha, wakamwambia, Mwalimu, hujali sisi tukizama?
<br><br>
(4:39) Akaamka, akaukemea upepo, akayaambia mawimbi, Nyamaza! Tulia!” Kisha upepo ukatulia na kukawa shwari kabisa. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu na wanafunzi wake walipokuwa wakivuka bahari kwa mashua ndogo, walikumbana na dhoruba, na mashua ikaanza kuzama kwa sababu ya mawimbi. Wanafunzi waliogopa na kuogopa kwamba wangezama. Walimwamsha Yesu na kumjulisha hali ya hatari. Yesu akainuka, akaukemea upepo, akaamuru mawimbi yatulie. Upepo ukakoma, na utulivu ukashuka juu ya bahari. Wanafunzi walishangaa na kuulizana, "Ni ajabu sana, na imekuwaje?" Walitambua nguvu za Yesu, lakini hawakuzitambua kuelewa kabisa sababu yake. Kuna hekima ya ajabu katika tukio hili.

  Yesu si mtu wa kawaida; ni lazima kusisitizwa kwamba Yeye ni Mungu, ambaye alionekana na kujiendesha kama mtu wa kawaida. Mungu, Roho Mtakatifu, anapokuja katika umbo la mwanadamu, hakuna anayeweza kumtambua. Kuzaliwa kwa Mungu ni siri wakati Yeye ni mwanadamu, na hakuna mtu anayeweza kumjua kupitia ujuzi wa ulimwengu. Inawezekana tu kumjua kwa hekima. Kuna njia mbili za kutambua kupata mwili kwa Mungu kwa msingi wa hekima: 1) Inaweza kujulikana kwamba kuna kupata mwili kwa Mungu popote ambapo dharma za Mungu, ambazo hakuna mtu ameelezea, zinafichuliwa kisayansi. 2) Inaweza kusemwa kuwa Paramatma iko katika umbo la mwanadamu popote Prakruti inatawaliwa. Hakuna anayeweza kutambua kupata mwili kwa Mungu kando na mbinu hizi mbili.

  Devatas waliinama chini kwa Ravana Brahma huko Traita Yuga. Alipoziamuru zile sayari tisa, ilijulikana kuwa Yeye hakuwa mtu wa kawaida. Ravana Brahma alifundisha dharma za kimungu, ambazo hazikujulikana kwa mtu yeyote, na kuwafanya watu kuzifanya. Kwa hivyo, ilijulikana kuwa Ravana Brahma ni mwili wa Mungu. Vile vile, ilijulikana kuwa Krishna huko Dvapara Yuga alikuwa mwili wa Mungu alipoamuru Sun na kufundisha dharmas katika Bhagavad-Gita. Yesu, ambaye alikuja kama mwanadamu Miaka 2,000 iliyopita, ilitambuliwa kama Mungu kwa njia mbili: kwa kuamuru bahari na kufundisha dharma za kimungu. Dhoruba wakati wa safari ya baharini ilionekana kutumikia kusudi la kuwajulisha watu Yesu alikuwa nani. Ingawa kupata mwili kwa Mungu ni siri, Mungu alitoa fursa hii ya kujua.

</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 3,
pageNumber: 56,
verse: `<b>(3)	Injili ya Marko, sura ya 5, 38, 39, 40, 41, 42 na 43.</b>`,
meaning: `<b>
(5:38) Walipofika kwenye nyumba ya kiongozi wa sinagogi, Yesu aliona ghasia, watu wakilia na kuomboleza kwa sauti kubwa.
<br><br>
(5:39) Akaingia ndani, akawaambia, Mbona ghasia na maombolezo haya yote? Mtoto hakufa bali amelala.”
<br><br>
(5:40) Lakini wao wakamcheka. Baada ya kuwatoa wote nje, akawachukua baba na mama ya mtoto na wale wanafunzi waliokuwa pamoja naye, akaingia pale alipokuwa mtoto.
<br><br>
(5:41) Akamshika mkono, akamwambia, Talitha kumi. (maana yake, “Msichana mdogo, nakuambia, inuka!”).
<br><br>
(5:42) Mara yule msichana akasimama, akaanza kutembea (alikuwa na umri wa miaka kumi na miwili). Kwa hili walishangaa kabisa.
<br><br>
(5:43) Alitoa amri kali kutomjulisha mtu yeyote kuhusu jambo hili na akawaambia wampe kitu cha kula.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Inashangaza sana mtu anapofufuka baada ya kutangazwa kuwa amekufa. Yesu aliwafufua watu kadhaa kutoka kwa wafu wakati wa maisha yake. Hakuwafufua wengine tu, bali pia alifufuka mwenyewe kutoka kwa wafu. Tukitafakari tukio hili, baadhi ya mafumbo yasiyojulikana yatafichuliwa. Kuna aina nne za kifo: kifo cha wakati (kifo cha asili), kifo cha ghafla, kifo cha muda, na kifo cha mwisho. Mara tu mtu anapopitia kifo cha mwisho, hatazaliwa tena; badala yake, wanapata ukombozi au moksham. Kifo cha asili ni aina ya kawaida ya kifo, ambayo mtu huacha mwili wake wa sasa na kwenda kwa kuzaliwa ijayo. Hakuna chaguo isipokuwa kwenda kwa kuzaliwa tena kwa kifo cha asili.

  Katika kesi ya kifo kisichotarajiwa, mtu hafi kabisa lakini badala yake hupoteza nusu ya mwili wake na kuendelea kuishi na nusu iliyobaki. Ingawa inaweza kuonekana kuwa ya kushangaza, hii ndio hufanyika. Mwili wa mwanadamu una sehemu mbili. Mwili wa mwanadamu na miili ya viumbe vyote hai inajumuisha sehemu zote za kimwili (zinazoonekana) na zisizo za kimwili (zilizofichika). Katika kesi ya mwili wa mwanadamu, mwili wa mwili unajumuishwa ya sehemu kumi, na mwili wa hila unajumuisha sehemu kumi na tano. Katika tukio la kifo kisichotarajiwa, mtu huacha mwili wake wa sehemu kumi na kuendelea kuwepo na mwili wao wa hila wa sehemu kumi na tano. Kwa sababu hiyo, mtu ambaye amepatwa na kifo kisichotarajiwa anaweza kuchukuliwa kuwa 'nusu mfu.' Wakati mwili uliobaki wa hila hatimaye hufa, husababisha kifo cha asili, na mtu huenda kwa kuzaliwa ijayo. Wakati wa kifo kisichotarajiwa, mtu huyo haonekani, lakini wanaendelea kuwepo na mwili wao wa hila hadi wapate kifo cha asili.

  Hivi sasa, hakuna mtu anayejua kinachotokea wakati wa kifo cha muda. Katika kifo cha muda, kazi zote za mwili hukoma, na Jeevatma inabaki katika mwili lakini iko katika hali ya usingizi. Katika kifo cha muda, mtu anaonekana amekufa, lakini Jeevatma inabaki kwenye mwili. Hii imesababisha matukio ambapo watu waliopata kifo cha muda walitangazwa kimakosa kuwa wamekufa na kuzikwa, ingawa walikuwa bado hai. Hakuna mtu anayeweza kugundua kwamba mtu ambaye amekufa kwa muda hajafa kwa kweli. Kutokana na hali hiyo, kumekuwa na matukio mengi ya watu kuzikwa wakiwa hai.
<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
Hadithi ya Abdul Aziz katika Jammu na Kashmir
</b></ion-col></ion-row>
Mnamo Desemba 7, 2009, hadithi ilionyeshwa saa 1:30 jioni kwenye chaneli ya TV9. Abdul Aziz, mzee wa miaka 60, aliaga dunia wiki moja mapema, Novemba 30, 2009, huko Rajouri, kijiji huko. Jammu na Kashmir. Kwa kufuata mila ya Kiislamu, kwa vile alikuwa Mwislamu, alizikwa.

Siku tatu baada ya kuzikwa, polisi walipokea malalamiko wakidai kuwa Abdul Aziz hakufa kawaida, na kwamba mchezo mchafu unaweza kuhusika. Polisi waliiandikisha kesi hiyo mara moja, wakaelekea makaburini na kuifukua maiti ya Abdul Aziz mbele ya ndugu zake. Kisha mwili wake ulipelekwa katika hospitali ya serikali kwa uchunguzi wa maiti.

Wakati wa uchunguzi wa maiti, daktari kwanza alipiga kichwa kwa kisu kuchunguza fuvu, na kichwa kilijeruhiwa. Kwa mshangao wa kila mtu aliyekuwepo, Abdul Aziz, ambaye alidhaniwa kuwa amekufa hadi wakati huo, aliamka na kuuliza juu ya hali hiyo. Daktari asiyeamini, akiwa bado anashughulikia mabadiliko yasiyotarajiwa, aliketi, na kuuliza, "Tunafanya uchunguzi wa maiti." Abdul Aziz akajibu kwa utulivu, "Niko hai." Mara moja daktari akawajulisha ndugu wa Abdul Aziz juu ya tukio lile la muujiza, wakafika kumrudisha nyumbani.

Siku tatu kabla, daktari huyo huyo alikuwa amemchunguza Abdul Aziz kwa dakika kumi na tano na kuthibitisha kifo chake. Daktari, akitambua hali ya ajabu ya tukio hili, alielezea kuwa ni muujiza. Watu wa kijiji cha Rajouri walishangazwa vile vile kwamba Abdul Aziz, ambaye walimzika kwa mikono yao wenyewe, alikuwa amefufuka siku tatu baadaye.

Hadi sasa, miaka sita na miezi saba imepita tangu tukio hilo kutokea. Vituo vyote vya televisheni vilipeperusha habari hii siku hiyo hiyo. Kwa kuzingatia kwamba tukio hili lilitokea mbele ya madaktari, bado haliwezekani na zaidi ya ushirikina tu.
<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
 Tukio katika wilaya ya Visakhapatnam
  </b></ion-col></ion-row>
  Srungavarapu Kota iko njiani kuelekea Bonde la Araku huko Visakhapatnam. Kuna kijiji kiitwacho Saarepuram, kilichoko kilomita 12 kutoka Srungavarapu Kota. Katika kijiji hiki, aliishi mwanamke mwenye umri wa miaka 67 anayeitwa Samudramma ambaye alikuwa akisumbuliwa na shinikizo la damu na kisukari kwa miaka kumi. Alipata matibabu kutoka kwa Dk. Dharmalingachari, daktari mkuu katika Srungavarapu Kota. Dk. Dharmalingachari alikuwa mwanajeshi maarufu mwenye umri wa miaka 60 mwenye shahada katika MBBS.

  Miaka sita iliyopita, jioni moja saa kumi na mbili jioni, Samudramma aliletwa kwa Dk. Dharmalingachari baada ya kutangazwa kuwa amefariki na madaktari katika hospitali ya serikali. Daktari alipomchunguza, hakuweza kupata mapigo ya moyo. Alimtangaza kuwa amekufa, akisema kwamba hakuhitaji matibabu yoyote kwa kuwa hakuwa na kupumua au mapigo ya moyo. Mwili wake ulirudishwa kijijini kwao, umbali wa kilomita 12, kuzikwa siku iliyofuata kwani tayari ilikuwa usiku. Hata hivyo, mwili wa Samudramma uliwekwa barazani kwa siku tatu kutokana na mvua kubwa iliyonyesha kwa siku mbili. Kwa Mshangao wa kila muntu, aliamka na kuwaita jamaa zake asubuhi ya nne. Mara moja waliwasiliana na Dk. Dharmalingachari na kumleta kwake baada ya siku 15. Kisha daktari akamuuliza kama amewaona watumishi wa Yama au Yamaloka, kwani alitangazwa kuwa amekufa kwa siku tatu. Alisema hakuona chochote.

 	Tukio hili lilitokea miaka sita iliyopita mbele ya daktari, kwa hivyo haliwezi kukataliwa au kufutwa kuwa ni la kishirikina.

  <ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
  Aliyenusurika kutoka Pyre (Imetafsiriwa kutoka kwa Kitelugu Gazeti) Julai 10, 2012, Sakshi News
  </b></ion-col></ion-row>
  <strong>Chennai:</strong>Siku ya Jumanne, madaktari walithibitisha kifo cha Muttuswamy mwenye umri wa miaka 50 wa Krishurayapuram katika wilaya ya Karur ya Tamil Nadu. Walishauri jamaa zake waendelee na ibada ya mazishi. Wakiamini kwamba Muttuswamy alishindwa na uzee na ugonjwa, watu wa ukoo walikusanyika kwenye kaburi ili kufanya pyre.

  Walipokuwa karibu kuanza moto, dadake Muttuswamy Paapatti aliukaribia mwili huo. Akiwa ameingiwa na huzuni, alianguka juu ya maiti na kulia, &ldquo;Ndugu, je, utaniacha?&rdquo; Katika wakati huo wa kuhuzunisha, miguu na mikono ya Muttuswamy ikasogea, na kukawa na mguno kidogo. Wale jamaa waliokuwa wakitokwa na machozi walishtuka na kupiga kelele, &ldquo;Muttuswamy...Muttuswamy!&rdquo; Mutuswamy aliamka kutoka kwenye pyre kana kwamba alikuwa ameamka kutoka usingizini na kuwauliza jamaa zake kilichotokea. Wote wakamkumbatia Muttuswamy kwa furaha na kumrudisha hospitali. Hasa, binti ya Muttuswamy alikuwa ameolewa siku moja kabla.

  <strong>Uzembe wa Madaktari:</strong>Jamaa waliwakosoa madaktari hao kwa kuzembea kumtibu Muttuswamy, ambaye alikuwa amelazwa katika hospitali ya eneo hilo siku kumi zilizopita baada ya kuugua. Waliwashutumu madaktari kwa tukio hilo, na habari hiyo ikaenea haraka katika wilaya yote ya Karur. Tukio hili lilizua mjadala mkubwa na kuonekana kama mfano mwingine wa kifo cha muda.
  <img src="assets/img/temp_death.png"/>
  Mtu akipatwa na kifo cha muda, anaweza kuishi katika hali hiyo kwa hadi mwaka mmoja au zaidi. Uamsho unaweza kutokea kwa hiari au kwa msaada wa mtu kugonga au kuwaamsha. Katika hali nyingi, watu binafsi ambao hupata kifo cha muda asubuhi huamka jioni, huku wengine wakipata fahamu baada ya wiki moja au zaidi. Hivi majuzi, mwanamume mmoja anayeitwa Muttuswamy huko Tamil Nadu alifufuka baada ya kuwa kwenye mazishi. Vivyo hivyo, Yesu alimfufua msichana ambaye alikuwa amekufa kwa muda, na kusema kwamba hakuwa amekufa kwa kweli. Pia kuna maelezo ya kihistoria ya Yesu kujihuisha Mwenyewe. Ni muhimu kutambua kwamba matukio haya yote yalihusishwa na kifo cha muda.

  Maandiko yetu,'<strong>Siri ya Kifo</strong>,' inachunguza aina nne za kifo na ukweli wake. Kusoma andiko hili kutakupatia ufahamu wa kina wa aina mbalimbali za kifo.
</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 3,
pageNumber: 57,
verse: `<b>(4)	Injili ya Marko, sura ya 7, 15, 16, 17, 18, 19, 20, 21, 22 na 23.</b><`,
meaning: `<b>
(7:15) Hakuna kitu nje ya mtu kinachoweza kumtia unajisi kwa kuingia ndani yake.
<br><br>
(7:16) Bali ni kile kinachomtoka mtu ndicho kinachomtia unajisi.
<br><br>
(7:17) Naye alipokwisha kuuacha umati na kuingia nyumbani, wanafunzi wake wakamwuliza juu ya mfano huo.
<br><br>
(7:18) “Je! Aliuliza. “Hamwoni kwamba kitu chochote kikimwingia mtu kutoka nje hakiwezi kumtia unajisi?
<br><br>
(7:19) Kwa maana haiwaingii mioyoni mwao, ila tumboni, na kisha kutoka mwilini.
<br><br>
(7:20) Akaendelea kusema: “Kinachomtoka mtu ndicho kinachomtia unajisi.
<br><br>
(7:21) Kwa maana hutoka ndani ya moyo wa mtu mawazo mabaya, uasherati, wizi, uuaji;
<br><br>
(7:22) uzinzi, uchoyo, uovu, udanganyifu, uasherati, husuda, matukano, majivuno na upumbavu.
<br><br>
(7:23) Maovu haya yote yanatoka ndani na kumtia mtu unajisi.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mwanadamu amezaliwa na bunduki mbaya sita na bunduki sita nzuri. Gunas pia hukua pamoja na mtu binafsi, na kuathiri Buddhi aliye kichwani na kusababisha vitendo vya nje chini ya amri yake. Buddhi anaagiza karmendriyas (viungo vya utendaji) kufanya vitendo nje ya mwili, kufanya kazi ndani kwa mujibu wa bunduki. Buddhi anapofanya kazi kwa upatanishi na gunas, gunas hasi huathiri Buddhi, ambayo huelekeza vitendo vya gunas, na hisi za nje hujibu kulingana na amri ya Buddhi. Bunduki hizi hudhihirisha sifa zisizohitajika kama vile uchoyo (kaama), hasira (krodha), ari (lobha), shauku (moha), kiburi (madam), na wivu (matsara). Gunas kwanza huathiri Buddha na hatimaye kutawala mwili kutoka hapo. Makosa yote yanayofanywa na wanadamu yanatokana na ushawishi wa gunas ndani ya mwili.

  Chakula kinachotumiwa kutoka nje huchangia afya ya mwili lakini haiathiri buddhi. Chakula kama hicho hubadilishwa kuwa virutubisho, kukuza ustawi wa mwili. Chakula ambacho wanadamu wanakula hakina athari ya moja kwa moja kwa Buddhi; huingia ndani ya mwili, kusaidia afya kwa ujumla. Chakula kinapofaidi mwili, huimarisha na kudumisha afya njema. Kwa hiyo, chakula kinachoingia ndani ya mwili kwa nje haiongoi tabia isiyofaa kwa wanadamu. Ni athari za gunas inayotoka ndani ya mwili ambazo inaweza kusababisha mwenendo mbaya. Kwa hivyo, kupotoka kutoka kwa sheria za lishe kunaweza kukubalika, lakini kudumisha udhibiti wa gunas ni muhimu.

</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 3,
pageNumber: 58,
verse: ` <b>(5) Injili ya Marko, sura ya 3, mstari wa 35.</b>`,
meaning: ` <b>
(3:35) Yeyote anayefanya mapenzi ya Mungu huyo ndiye kaka yangu na dada yangu na mama yangu.   </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Tunapohoji mapenzi ya Mungu ni nini, tunaweza kuelewa kwamba amri zake (dharmas) zinawakilisha mapenzi yake. Kwa kutii amri zake, tunajipatanisha na mapenzi ya Mungu. Kinyume chake, ikiwa tunatenda kulingana na matamanio yetu bila kushikamana na amri Zake, tunakiuka mwongozo Wake na kufuata mapenzi ya Shetani. Mungu anapopata mwili duniani kama Bhagavan, wale wanaofahamu hekima Yake, kutenda kulingana nayo, kueneza mafundisho Yake, na kusambaza amri Zake watamkaribia zaidi. Kinyume chake, wale wanaochagua njia ya Shetani wanakuwa maadui wa Mungu. Wale wanaoendeleza maneno ya Mungu kwa bidii na kuzingatia amri Zake wanachukuliwa kuwa dada, kaka, na wafuasi Wake wa karibu zaidi. Iwe Mungu yuko duniani kimwili au hayupo, ni muhimu kutambua kwamba Gnanis (wale walio na hekima) ndani ya mipaka Yake wanaofuata amri Zake watachukuliwa kuwa karibu na Mungu.
</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 3,
pageNumber: 59,
verse: ` <b>(6)	Injili ya Marko, sura ya 4, mstari wa 17.</b>`,
meaning: `<b>
(4:17) Lakini kwa kuwa hawana mizizi, wanadumu kwa muda mfupi tu. inapotokea dhiki au adha kwa ajili ya lile neno, huanguka upesi. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika Gita, Bwana Krishna anazungumza juu ya aina nne za waja: 1) Wale wanaoabudu katika shida, 2) Wale wanaomba mali, 3) Wale wanaopenda kujua juu ya Mungu, 4) Wale walio na hekima (Gnanis). Bwana alisema katika Gita kwamba anapendelea Gnanis. Vile vile, Bwana Yesu anazungumza kuhusu aina nne za waabudu katika Biblia, lakini mstari unaorejelewa hapa unahusu moja tu ya aina hizi. Watu fulani wanatamani kujua hekima ya Mungu na wanatafuta kuifuata. Shetani anaanza kuwajaribu kwa njia yake. Wanakabiliwa na matatizo mengi katika mchakato huo. Wanapokutana na magumu kwa sababu ya hekima, Shetani huanza kuhubiri vichwani mwao. Shetani anawaambia, &ldquo;Mnapatwa na matatizo kwa sababu mnajua hekima. Usiwe mjinga. Unaweza kuepuka matatizo yanayokuja kwa kujifanya kuwa kwenye njia ya hekima.&rdquo; Wale ambao hawaelewi kiini cha kweli cha hekima wanaweza kuanza kutenda ipasavyo. Baada ya muda fulani, ikiwa mtu huyo anakabiliwa na matatizo kwa sababu ya hekima au Guru, na masuala haya yanasababisha migogoro na wengine au hofu ya mateso, Maya atachukua fursa ya hali hiyo. Maya huunda mawazo ya aina hii katika kichwa cha mtu, na watu binafsi wanaweza kuanza kufikiria, &ldquo;Ningepaswa kuwa na hekima zaidi tangu mwanzo. Niliingia katika hali hii kwa sababu nilimfuata Guru kwa hekima, ingawa ndugu zangu wa karibu walinionya nisifanye. Kwa nini niteseke kwa hekima hii? Ni bora kuacha hekima na Guru. Kufuata hekima kwa upofu kutasababisha tu uharibifu kwa familia yangu na mimi. Kwa kuwa tuko ulimwenguni, ni lazima tufuate njia zake. Waliopo msituni hawakabiliwi na matatizo bila kujali matendo yao, lakini itakuwa ni upumbavu kwetu kijijini kwenda kinyume na kanuni.&rdquo; Mawazo hayo yanaweza kuwafanya watu wajitenge na hekima, hata baada ya kuwa njiani kwa muda fulani. Kwa hiyo, Yesu alisema kwamba hata wale ambao wamekuwa kwenye njia ya hekima kwa muda watapinga wakati kuna taabu na mateso kwa ajili ya hekima.

  Wale wanaothamini kweli hekima ya Mungu na kuelewa umuhimu wake hawataanguka katika majaribu ya Shetani. Mtu hawezi kuepuka makucha ya Shetani isipokuwa athamini hekima na Guru yao kuliko mke wake, marafiki wa karibu, na hata maisha yao wenyewe, licha ya kujua kwamba wanaweza kukumbana na mateso au kifo kwenye njia ya hekima. Hata wanafunzi wa Bwana Yesu waliogopa walinzi siku ya kukamatwa kwake na walimwacha Guru wao ili kuokoa maisha yao wenyewe. Walikimbia kwa hofu kutokana na shida na mateso. Kama wangekuwa wametayarishwa pia kukabiliana na kifo pamoja na Bwana Yesu siku hiyo, maisha yao yangebarikiwa. Maya aliwazuia wanafunzi kwa sehemu siku hiyo. Tofauti nao, tunapaswa kusimama kidete tunapokabili matatizo au mateso yoyote kwenye njia ya hekima. Amebarikiwa yule ambaye yuko tayari kufa kwa ajili ya njia ya kimungu kuliko kuishi kwa hofu kwenye njia ya ujinga. Katika Bhagavad-Gita, Bwana alisema, &ldquo;<strong>Ni bora kufa katika dharma ya Paramatma, ambayo ni dharma yako, kuliko kuogopa katika njia ya Shetani, ambayo sio dharma yako.</strong>
</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 3,
pageNumber: 60,
verse: ` <b>(7)	Injili ya Marko, sura ya 4, aya ya 21 na 22.</b>`,
meaning: `<b>
(4:21) Akawaambia, Je! mwaleta taa na kuiweka chini ya bakuli au kitanda? Badala yake, je, huiweke kwenye kinara chake?
<br><br>
(4:22) Kwani yaliyofichika yatafichuliwa, na yaliyofichika yatadhihirika.   </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika wakati huu, gurus wengi wanasema kwamba wanafunzi hawapaswi kushiriki hekima yao na wengine. Wanasema kuwa hekima yao ni ya siri na inapaswa kushirikiwa tu na wale ambao wamepokea upadesa. Mtu anapowauliza swali, huepuka kulijibu. Hata hivyo, hekima haipaswi kufichwa. Mungu Mwenyewe anakuja katika umbo la mwanadamu na kuchukua taabu kuwasilisha hekima. Ingawa hatujui hekima ya kweli, hatupaswi kutoa visingizio vya kushiriki hekima ndogo tunayoijua. Hekima ni kama taa inayoondoa ujinga kwa wengine. Kama vile kitu gizani kinavyoweza kuonekana katika nuru ya taa, jambo lisilojulikana katika ujinga linaweza kueleweka kwa hekima. Hekima inahitajika ili kuondoa ujinga, kama vile taa inavyohitajika ili kuondoa giza. Kuwasha taa na kuiweka chini ya bakuli ni upumbavu. Vivyo hivyo, si jambo la hekima kutoshiriki hekima uliyo nayo. Hata siri zinakusudiwa kufichuliwa. Bhagavan alifunua hekima bora zaidi ya kimungu ulimwenguni. Katika hali hiyo, chochote chenye thamani ndogo kuliko hekima hakiwezi kufichwa. Hakuna siri duniani inayoweza kufichwa; hakika itatoka. hekima ya Mungu ni muhimu kwa kila mtu na haipaswi kuwa siri. Wale wanaotaka kuficha hawawezi kufanya hivyo.
</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 3,
pageNumber: 61,
verse: `<b>(8)	Injili ya Marko, sura ya 6, mstari wa 4.</b>`,
meaning: `<b>
(6:4) Yesu akawaambia, Nabii hakosi heshima isipokuwa katika mji wake, na kwa jamaa zake, na nyumbani kwake.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika Kitelugu, nabii anafafanuliwa kama mtu anayefundisha jambo muhimu. Hekima ya Paramatma ndio kitu muhimu zaidi kwa kila mwanadamu. Mtu anayetoa hekima hii anaitwa nabii. Wanadamu wa kawaida hawajui hekima ya Paramatma, isipokuwa kwa yule anayetoka Paramatma. Yule anayetoka Paramatma na kuzaliwa kama mwanamume anaitwa Bhagavan au Mtume. Nabii haheshimiwi katika nyumba yake mwenyewe, kati ya jamaa zake, au katika mji wake mwenyewe kwa sababu anaonekana kuwa mtu wa kawaida. Haijalishi mtu ni mkuu kiasi gani, ni kawaida kudharauliwa nyumbani na kwa jamaa. Kwa kuwa wamemwona nabii huyo tangu utotoni, wanafamilia na watu wa ukoo wanaweza kumdhihaki, wakisema kwamba Yeye hana ukuu na kwamba wapumbavu tu ndio watamsikiliza. Wanaweza pia kudai kwamba Yeye hajui chochote zaidi ya kile wanachokijua wao. Hata Mungu hawezi kuwa nabii kwa watu wa familia yake mwenyewe. Hata wakati wengine wanatambua na kusema juu ya ukuu Wake, jamaa na wanafamilia Wake wanahoji ubora gani Anao. Hawatambui Umuhimu Wake na kumdhihaki, akionyesha mambo kama vile Yeye kukojoa kitanda na kuchafua chupi Yake katika utoto Wake. Kwa hiyo, wakati Yeye ni nabii kwa wengine, Yeye haheshimiwi katika nyumba Yake na mji Wake. Kulingana na kanuni hii, Bwana Yesu hakutambuliwa kama nabii na familia yake na jamaa zake.
</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 3,
pageNumber: 62,
verse: `<b>(9)	Injili ya Marko, sura ya 8, mstari wa 38.</b>`,
meaning: `<b>
(8:38) Mtu ye yote akinionea haya mimi na maneno yangu katika kizazi hiki cha uzinzi na dhambi, Mwana wa Adamu atamwonea haya mtu atakapokuja katika utukufu wa Baba yake pamoja na malaika watakatifu. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Watu wengine hujifunza hekima katika jamii lakini huchagua kuifanya siri. Wanahisi kwamba kujua hekima ni kosa; kwa hiyo, wanaifanya kwa siri. Wanaweza pia kuona aibu kwenda kwa Guru na kujifunza hekima kutoka kwao, na kwa hivyo kuiweka siri. Baadhi ya watu wanatafuta Guru ili wawe wanafunzi lakini wanapendelea Guru tajiri kutokana na hali na mali zao. Wanaona aibu kumkaribia Guru maskini, hata kama Guru huyo ana hekima zaidi. Kwa hiyo, wanachagua Guru tajiri ambaye hawezi kuwa na hekima nyingi. Ingawa baadhi ya watu wamejifunza hekima kutoka kwa Guru, hawataki kuitwa wanafunzi wa Guru huyo. Hivyo, watu wengi wanaona aibu na kuchukua tahadhari kubwa ili kuepuka kufichuliwa.

  Mtu anaweza kujisikia aibu kwa vitu vya kimwili, lakini haipaswi kuaibishwa na hekima ya Paramatma. Acheni tuchunguze mfano mmoja. Watu wawili wanatembea barabarani. Mmoja ni mzuri lakini maskini na hana akili, wakati mwingine hana mvuto lakini tajiri na mwenye akili. Wote wawili ni jamaa wa karibu. Watu wanaowaona njiani watawahukumu kwa sura yao ya nje, si kwa akili zao. Baada ya muda, msafiri anawaona na kumuuliza yule mtu mzuri ambaye ni mtu wa pili. Mtu mzuri ana aibu kusema kwamba mtu asiyevutia ni jamaa yake wa karibu kwa sababu ya kuonekana kwao. Badala yake, anasema tu kwamba wanajuana. Mtu asiyevutia hufikiri kwamba ametambulishwa kuwa mtu anayefahamiana naye badala ya kuwa jamaa wa karibu kwa sababu ya sura yake. Baadaye, msafiri mwingine anawaona na kumuuliza mtu asiyevutia huyo mtu mwingine ni nani. Akiwa mwenye akili, mtu asiyevutia anajibu vivyo hivyo kwa kusema kwamba wao ni watu wanaofahamiana tu. Mrembo huyo anafurahi kutambulishwa kama mtu anayefahamiana na sio jamaa. Mtu asiyevutia anafikiri, "Mimi pia nina aibu kumtambulisha mtu huyu mjinga kama jamaa yangu wa karibu." Mtu asiyevutia alifuata tabia ya mtu mzuri.

  Msafiri wa pili, ambaye aliuliza mtu asiyevutia, alikuwa na sheria kwa miaka mingi. Sheria yake ilikuwa kutoa sarafu 10,000 ikiwa atakutana na jamaa wa karibu. Walakini, ingawa walikuwa karibu jamaa hawakupokea hizo 10,000 kwa sababu hawakujitambulisha hivyo. Kwa hiyo, maskini wa kwanza hakupokea pesa yoyote. Kwa kuwa mtu wa pili ni tajiri, hajali ikiwa alipokea pesa au la. Mtu wa kwanza alipoteza pesa kwa sababu alikuwa na aibu na kusema uwongo. Ikiwa unaona aibu na hekima kwa sababu tu wengine hawaipendi, basi hekima pia ina aibu kwako. Mtu wa kwanza alipoteza pesa kwa sababu alikuwa na aibu kwanza na kusema uwongo. Kwa hivyo, hawatapokea ukombozi wa faida ya siku zijazo. Kulingana na hili, Bwana alisema,<strong>"Mtu ye yote akinionea aibu mimi na maneno yangu, mimi pia ninawaonea haya.&rdquo;</strong>Kwa hiyo, mtu anapaswa kuelewa kwamba ni sawa kuona aibu juu ya mambo ya kimwili, lakini mtu haipaswi kuwa na aibu kwa hekima ya Paramatma.
</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 3,
pageNumber: 63,
verse: `<b>(10)	Injili ya Marko, sura ya 9, mstari wa 7.</b>`,
meaning: `<b>
(9:7) Kisha wingu likatokea na kuwafunika, na sauti ikatoka katika hilo wingu: “Huyu ni Mwanangu, mpendwa wangu; Msikilizeni!”</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Watu wengi hawajui kuhusu mawingu angani. Wakati wa mvua, mawingu hutokeza ngurumo na kutoa sauti kubwa. Mawingu ni hai na hufanya kazi nyingi, lakini majukumu yao maalum haijulikani. Kulingana na historia, Jua lilisikia hekima ya kimungu ambayo mawingu yalifunua mwanzoni mwa uumbaji. Hakuna siri zisizojulikana kwa mawingu duniani. Mungu nyuma ya mawingu alisema kuhusu Yesu,<strong>"Huyu ni Mwanangu mpendwa. Msikilizeni.&rdquo;</strong>Kwa hiyo, ni mapenzi ya Mungu kwamba watu wasikie hekima ya Mungu kutoka kwa Yesu. Anachosema Mungu kama mwanadamu ni hekima ya Mungu, lakini wanadamu wasiposikiliza, Mungu huzungumza kutoka mawinguni. Ingawa wanadamu huenda wasiheshimu sikuzote yale ambayo wengine husema, wanathamini yale mawingu yasemayo, ndiyo sababu Mungu alizungumza kutoka mawinguni angani.
</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 3,
pageNumber: 64,
verse: ` <b>(11)	Injili ya Marko, sura ya 10, aya ya 17 na 18.</b>`,
meaning: ` <b>
(10:17) Yesu alipoanza safari yake, mtu mmoja alimkimbilia na kupiga magoti mbele yake. “Mwalimu mwema,” aliuliza, “nifanye nini ili niurithi uzima wa milele?”
<br><br>
(10:18) “Mbona unaniita mwema?” Yesu akajibu. “Hakuna aliye mwema, isipokuwa Mungu peke yake.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wakristo fulani wanadai kwamba Biblia iliandikwa awali katika Kiebrania na kisha kutafsiriwa katika lugha nyingine nyingi. Kwa hiyo, baadhi ya maneno hayakutafsiriwa ipasavyo. Kwa mfano, neno &ldquo;Mwalimu Mwema&rdquo; limetumiwa katika mstari wa kwanza, na katika mstari wa pili, &ldquo;Mungu ni mwema.&rdquo; Walakini, kulingana na kile Yesu alisema,<strong>"Hakuna aliye mwema isipokuwa Godalone,&rdquo; </strong>neno hilo lisiwe 'Mwalimu Mwema' wala 'Mungu Mwema.' Mtu anayefundisha hekima kwa ufasaha anaweza kuitwa mwalimu mzuri, na mtu anayefanya mambo mema anaweza kuitwa mtu mwema. Kuna walimu wazuri na watu wema duniani. Kwa hiyo, ingemdharau Mungu kulinganisha yao na kusema,<strong>"Hakuna aliye mwema</strong><strong>-isipokuwa Mungu</strong><strong>peke yake.&rdquo;</strong>Mbali na hayo, hakuna linganisha maneno 'mwalimu mwema' katika sentensi ya kwanza na 'mtu mwema' katika sentensi ya pili. Andiko la pili la kimungu, Biblia, limetafsiriwa katika lugha nyingi zaidi kuliko maandiko mengine mawili matakatifu. Biblia imetafsiriwa katika lugha 1,400, na kuifanya kuwa andiko pekee ambalo limetafsiriwa katika lugha nyingi.

  Maandiko ya kwanza ya kiungu ndio msingi wa andiko la pili la kimungu, Biblia, na andiko la mwisho la kimungu, Quran. Quran inatoa ushuhuda katika 5:44, 5:46, 5:48, na 5:68 kwamba.<strong>hekima ya maandiko ya kwanza ya kimungu, Taurati (Bhagavad-Gita), pia iko katika maandiko mengine mawili.</strong>Kwa hiyo, tunapozingatia maneno yaliyotumiwa katika Injili ya Marko, 10:17 na 10:18, tunaweza kuelewa kwamba kunaweza kuwa na walimu wengi wazuri na watu wema katika ulimwengu, lakini hakuna Uttama Purusha (Kiumbe Mkuu) miogoni mwa wanaume. Kwa hiyo, kama ilivyoelezwa katika Bhagavad-Gita,<strong>"Mungu pekee ndiye Purushottama.&rdquo;</strong>Inaweza kusemwa kwamba maneno yasiyohusiana yalitumiwa katika mistari hapo juu, ambapo neno lilipaswa kuwa 'Purushottama.' Hili linaeleweka vyema unapotazama mistari ya 16,17, na 18 katika sura ya 15 ya Bhagavad-Gita, Purushottama Prapti Yoga.

  Kulingana na andiko la kwanza la kimungu, kuna Purusha moja tu. Ingawa kuna Purusha moja tu, Mungu amegawanywa katika tatu - Jeevatma, Atma, na Paramatma. Kati ya hawa wanaume watatu,<strong>mwanamume ambaye ni bora kuliko Jeevatma na Atma isParamatma, pia inajulikana kama Purushottama</strong>, kama ilivyotajwa katika Bhagavad-Gita. Inaweza kusemwa kwamba wote isipokuwa wanaume watatu ni Prakruti, ambayo ni ya kike. Wanaume na wanawake ulimwenguni wote wanahusiana na asili ya kike. Kwa hiyo, katika aya hiyo, Yesu alisema,<strong>"Usiniite Purushottama (Uttama Purusha). </strong><strong>Mungu pekee ndiye Uttama Purusha.&rdquo;</strong>Kuna dini kuu tatu duniani. Watu wa kila dini walichukua andiko la kimungu na wakasema hili ni andiko letu. Hata hivyo, kwa kweli, maandiko haya matatu hayahusiani na dini yoyote maalum. Yanatoa hekima kwa wanadamu wote, na kwa hivyo, yanapaswa kuzingatiwa kama maandiko yaliyokusudiwa kwa wanadamu wote.
</div></div>
</span>`
},
{
chapterName: "TInjili ya Marko",
chapterNumber: 4,
pageNumber: 65,
verse: `<b>(12)	Injili ya Marko, sura ya 16, aya ya 15 na 16.</b>`,
meaning: `<b>
(16:15) Akawaambia, Enendeni ulimwenguni mwote, mkaihubiri Injili kwa viumbe vyote.
<br><br>
(16:16) Aaminiye na kubatizwa ataokoka, lakini asiyeamini atahukumiwa.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Baada ya Yesu kusulubishwa na kulazwa kaburini, alifufuka kutoka kaburini alfajiri ya Jumapili asubuhi. Kwanza alimtokea Maria Magdalene na kisha kwa wanafunzi wengine. Yesu aliwatokea wanafunzi mara thelathini na tatu baada ya kutoka kaburini. Aliwaambia wale wanafunzi kumi na mmoja mistari miwili hapo juu walipoketi pamoja kwa ajili ya chakula. Kwa kuwa wanadamu wote ulimwenguni wamezama katika ujinga, Aliwaagiza wanafunzi Wake kwenda na<strong>kuhubiri injili ambayo ni hekima ya Mungu</strong>, kwao. Ujumbe huohuo umetolewa katika aya ya 15.<strong>"Enendeni ulimwenguni mwote mkaihubiri Injili kwa viumbe vyote.&rdquo;</strong>Hapa, 'ulimwengu wote' haimaanishi ulimwengu tofauti; inahusu watu wanaopata riziki zao duniani na kuteseka kwa njia mbalimbali.

  Yesu pia alisema, &ldquo;Hubiri injili kwa viumbe vyote.&rdquo; Inamaanisha kuhubiri injili, hekima ya kimungu, kwa watu wa nyakati zote. Alisema kuwahubiria hekima ya kimungu na kuwapa ruhusa, 'ubatizo,' kwenda paraloka. Ubatizo ni kama kibali cha ukombozi au paraloka. Wale ambao wamepewa ruhusa ya paraloka wataokolewa kwa hekima yangu na kuepuka uzoefu wa dhambi. Alisema kwamba shida za dhambi zitawaadhibu wale ambao hawajabatizwa kwa vile hawana ulinzi kutoka kwa dhambi.
</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 66,
verse: `<b>(1)	Injili ya Luka, sura ya 2, mstari wa 49.</b>`,
meaning: ` <b>
(2:49) “Kwa nini mlikuwa mnanitafuta?” Aliuliza. “Je, hamkujua kwamba nilipaswa kuwa katika kazi ya Baba yangu?”  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wazazi wa Yesu walikuwa wakimtafuta, na walipomwona, walishangaa. Mama yake akamwambia, &ldquo;Mwanangu, mbona umetutenda hivi? Baba yako na mimi tumekuwa tukikutafuta kwa shauku.&rdquo; Kwa kujibu, Yesu alisema,<strong>"Kwa nini ulikuwa unanitafuta? Hamkujua yanipasa kuwa katika kazi ya Baba yangu?</strong>Ingawa baba wa Yesu anayeonekana (wa kimwili) alikuwepo pia, Alikuwa akimaanisha Baba yake asiyeonekana (asiye wa kimwili). Ni muhimu kufafanua ni baba gani Yesu alikuwa akimaanisha ili tuweze kuelewa kazi za Baba na, kwa hiyo, kufahamu kazi ambazo Yesu angekuwa anafanya na kwa nini aliwaacha mama na baba yake.

  Kwa maneno yake mwenyewe, Yesu alijitangaza kuwa Mwana wa Adamu. Wakati fulani, Yeye pia alidai kuwa Mwana wa Mungu. Kwa hiyo, Yeye ni Mwana wa Adamu na Mwana wa Mungu. Mtu akiuliza watu hawa wote ni wana wa nani, inaweza kusemwa hivyo wanadamu wote ni wana wa binadamu. Walakini, kuna siri inayohusika hapa. Ili mwanamume azaliwe, mtoaji wa mbegu (manii) anahitajika. Ingawa ni kawaida kudhani kuwa baba ndiye mtoaji mbegu kwa ajili ya kuzaliwa kwa mwanamume, ni muhimu kutambua kwamba, ingawa mtu anaonekana kuwa wa kiume kwa sura, hawezi kuhesabiwa kuwa ni mwanamume kwa sababu ameumbwa kama kielelezo cha mwanamume. Mwanamume na mkewe wanaweza kuhesabiwa chini ya Prakruti ya kike.

  Ingawa Jeevatma, ambaye yuko katika mwili wa mwanadamu, ni Atmarelated-mwanaume, Hawezi kumzaa mtu. Atma, ambayo iko katika mwili, ilifanya kila mwanadamu aliyezaliwa. Tayari tumeshasema kwamba Atma hufanya kazi zote katika mwili na ndiye mtoaji wa mbegu kwa viumbe vyote. Yesu alijiita &ldquo;Mwana wa Adamu,&rdquo; ingawa Yeye hakuwa mtu wa kawaida, ili kuonyesha kwamba Baba yake hakuwa Yusufu anayeonekana bali Atma anayeishi ndani ya miili yote ya kibinadamu. Maandiko ya kwanza ya kiungu yanatufundisha kwamba kila kiumbe hai kilichozaliwa kutoka tumboni mwa mama kina Atma kama baba yake na Prakruti kama mama yake. Hata hivyo, Yesu alizaliwa moja kwa moja bila baba wa kimwili, kwa vile Alikuwa Mwana wa Roho Mtakatifu (Paramatma), ambaye ni tofauti na Atma. Hii ndiyo sababu anaitwa Mwana wa Mungu. Yesu alipokutana na wazazi wake, aliwaambia ni lazima awe juu ya kazi ya Baba yake lakini hakubainisha baba ambaye alikuwa anamrejelea (Atma au Roho Mtakatifu). Kwa maoni yake mwenyewe, Alijiona kuwa Mwana wa Mungu. Yesu hakufanya kazi za Atma, iliyo katika mwili. Alikazia fikira kueneza hekima ya Mungu. Paramatma iliyo kila mahali inatekeleza kazi ya kueneza hekima ya kimungu.

  Kwa hiyo, Yesu alikusudia kufanya kazi ya Baba yake (Roho Mtakatifu). Paramatma Mwenyewe aliumba mwili na kuujaza na nafsi yake. Ingawa Yesu alikuwa Mungu, alijiita Mwana wa Adamu wakati fulani na Mwana wa Mungu nyakati zingine ili kuzuia watu wasimtambue.
</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 67,
verse: `<b>(2)	Injili ya Luka, sura ya 11, 37, 38, 39, 40 na 41 mistari..</b>`,
meaning: `<b>
(11:37) Yesu alipokuwa akizungumza, mmoja wa Mafarisayo alimkaribisha nyumbani kwa chakula. Basi, akaingia na kukaa mezani.
<br><br>
(11:38) Mwenyeji wake alistaajabu kuona kwamba aliketi kula bila kufanya kwanza sherehe ya kunawa mikono iliyohitajiwa na desturi ya Kiyahudi.
<br><br>
(11:39) Kisha Bwana akamwambia, “Ninyi Mafarisayo mnajali sana kusafisha kikombe na bakuli kwa nje, lakini ndani yenu ni mchafu, mmejaa ulafi na uovu!
<br><br>
(11:40) Wapumbavu! Je, si Mungu aliyeumba ndani na nje?
<br><br>
(11:41) Basi safisheni ndani kwa kutoa zawadi (dharmas) kwa masikini, na mtakuwa safi kote.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aya ya mwisho inasema,<strong>"Safisha ndani kwa kutoa zawadi (dharmas) kwa masikini, na utakuwa safi kote."</strong>Kwa bahati mbaya, wanadamu hawajaelewa vizuri aya hii na wameifasiri kwa njia mbalimbali. Yesu anapotaja &lsquo;kutoa zawadi,&rsquo; watu wameiona kuwa kutoa pesa, nguo, na chakula kwa maskini. Hata hivyo, Yesu hakudai kwamba matendo ya upendo ya nje yangetakasa mtu kutoka ndani. Nia yake ilikuwa kwamba mazoezi ya dharma lazima yafanywe ndani, na ndipo tu maovu ya ndani yangesafishwa. Yesu hakutanguliza usafi wa nje badala yake alisisitiza utakaso wa sifa za ndani (gunas). Kwa hiyo, Aliwahimiza wengine kufuata njia ya dharma, ambayo inapinga gunas. Yesu Mwenyewe alipata utakaso wa ndani na alishikamana na njia ya dharma. Ndio maana Aliwahimiza wengine kupita njia hiyo hiyo.
</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 68,
verse: `<b>(3)	Injili ya Luka, sura ya 12, aya ya 4 na ya 5.</b>`,
meaning: ` <b>
(12:4) Nawaambia ninyi rafiki zangu, msiwaogope wale wauao mwili, na baada ya hayo hawawezi kufanya lolote zaidi.
<br><br>
(12:5) Lakini nitawaonyesheni mtakayemwogopa: Mcheni yule ambaye baada ya mwili wenu kuchinjwa mamlaka ya kukutupa jehanamu. Naam, nawaambia, mwogopeni huyo.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
Wanadamu wanaweza kuumiza mwili, lakini hawawezi kuumiza Jeevatma ndani. Jeevatma, kuwa haionekani kutoka nje, bado haijaathiriwa. Kwa kuwa mwili unaonekana, wengine wanaweza tu kuumiza juu yake, sio Jeevatma. Kwa hiyo, hakuna haja ya kuwaogopa watu kama hao. Anayepaswa kuogopwa ni Mungu pekee. Hata tunapokufa, Mungu hutathmini dhambi zetu, hutuadhibu, na kusababisha kuteseka. Uhusiano kati ya watu binafsi hukatwa baada ya kifo. Hata ikiwa mtu aliyekufa atazaliwa upya katika nyumba ya muuaji, hawatamtambua muuaji kuwa adui. Hata hivyo, Mungu anatambua Jeevatma hata baada ya kifo na anajua kuzaliwa kwake baadae. Kwa hiyo, ni muhimu kumwogopa Mungu, ambaye anatuwajibisha kwa karma yetu baada ya kifo.
  Hakuna haja ya kuogopa wanadamu wengine ambao hawawezi kuumiza Jeevatma na hawatatutambua baada ya kifo.
</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 69,
verse: `<b>(4)	Injili ya Luka, sura ya 12, mstari wa 25.</b>`,
meaning: ` <b>
(12:25) Ni nani miongoni mwenu kwa kujisumbua aweza kujiongezea kimo chake hata mkono mmoja?   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ingawa watu wanaamini kwamba wanafanikisha kila kitu kupitia akili zao, hakuna uhusiano wa asili kati yao na akili zao. Watu hawako huru na hawana uwezo wa kuchukua hatua wao wenyewe. Wao ni sawa na vikaragosi vinavyotumiwa na karma. Wale wanaoamini kuwa wanaweza kutenda wapendavyo wako katika hali ya kutojijua wao wenyewe. Kulingana na muundo ambao Mungu ameumba, karma iko katika udhibiti wa Mungu, na watu binafsi wako katika udhibiti wa karma. Kama karma inavyowatawala, hawawezi kufanya maamuzi kwa uhuru. Bila kujali ni kiasi gani wanapanga na kutumia akili zao, hawawezi kubadilisha urefu wao. Ikiwa kila mtu atajielewa na kutafakari ukubwa wa uwezo wao, watatambua udogo wao, wakitambua kwamba Mungu ni mkuu zaidi yao.
</div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 70,
verse: `<b>(5)	Injili ya Luka, sura ya 12, aya ya 33 na 34.</b>`,
meaning: ` <b>
(12:33) Uzeni mali zenu na wapeni masikini. Jifanyieni mifuko ambayo haitachakaa, hazina isiyoisha kamwe, mahali ambapo mwizi hakaribii, na nondo haharibu.
<br><br>
(12:34) Kwa kuwa hazina yako ilipo, ndipo utakapokuwapo na moyo wako.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuna aina mbili za mali: moja inayoweza kununua chochote duniani na nyingine inayoweza kumnunua Mungu, ambaye yuko nje ya ulimwengu. Ya kwanza ni utajiri wa mali, ulioumbwa na wanadamu na unaoonekana kwa macho, ambayo tunanunua mali ya kimwili, wakati wa mwisho ni utajiri wa hekima, unaotengenezwa na ya kimungu na haionekani kwa urahisi. Kuna tofauti nyingi kati ya hekima-utajiri na mali. Ingawa wezi wanaweza kuiba mali, hawawezi kuiba utajiri wa hekima, kwa kuwa si bidhaa ya kimwili. Nondo zinaweza kuharibu mali, lakini haziwezi kuharibu utajiri wa hekima. Utajiri wa nyenzo hauwezi kuondoa hata karma ndogo, lakini utajiri wa hekima unaweza kuondoa hata karma kubwa. Mtu anaweza kupata mali kupitia kazi, lakini utajiri wa hekima hupatikana kupitia urafiki wa karibu na Mungu.

  Utajiri wa mali unaweza kutathminiwa, lakini utajiri wa hekima hauwezi kupimwa. Mtu anapokufa, uhusiano wao na mali hukatwa, kwani hata senti haiendi na Jeevatma. Kinyume chake, utajiri wa hekima huandamana na Jeevatma hata baada ya kifo, kwani hekima yote anayopata mtu maishani inasonga mbele katika kuzaliwa kwa siku zijazo. Wale walio matajiri duniani wanaweza kuheshimiwa katika jamii lakini si mbele za Mungu. Mungu huwatambua wale walio na utajiri wa hekima, hata ikiwa wanadamu wengine hawawaheshimu. Kwa muhtasari, kuna tofauti nyingi kati ya utajiri wa mali na utajiri wa hekima.
</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 71,
verse: `<b>(6)	Injili ya Luka, sura ya 12, mstari wa 49.</b>`,
meaning: ` <b>
(12:49) Nimekuja kuleta moto katika ardhi, na ninatamani ungekuwa umekwisha washwa.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika muktadha huu, neno 'moto' halirejelei moto wa kawaida tunaouona kila siku. Moto ni wa aina mbili: moto wa kawaida na moto wa ajabu (moto wa hekima). Moto wa kawaida unaweza kuchoma kuni na vitu vingine, wakati<strong>gnanagni (moto wa hekima) huchoma kuni za karma.</strong>Wanadamu wanaponaswa katika dhambi na kuteseka na magumu, Mungu anashuka kuleta moto wa hekima ili kuchoma karma yao na kuwakomboa kutoka kwa mzunguko wa kuzaliwa na kifo, kuwasaidia kufikia Mungu. Mungu anapotoa hekima, anaifananisha na moto kwa sababu kupata hekima kunaweza kuleta ukombozi. Mungu alileta moto huu duniani hapo zamani, na uliwashwa kwa muda kabla ya kutoweka. Yesu alikuja kutawala moto na kuendelea kuwaka. Alitaka moto uendelee kuwaka, hivyo akatangaza kwamba alikuja kuwasha moto mahali pasipokuwa na moto, na akatamani ule moto aliokuwa ameuwasha uendelee kudumu.</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 72,
verse: `<b>(7)	Injili ya Luka, sura ya 12, aya ya 51, ya 52 na ya 53.</b>
`, meaning: `<b>
(12:51) Je, unafikiri nilikuja kuleta amani duniani? La, nawaambia, bali mafarakano.
<br><br>
(12:52) Kuanzia sasa watakuwa watu watano katika familia moja wakifarakana, watatu kwa wawili na wawili kwa watatu.
<br><br>
(12:53) Watafarakana, baba dhidi ya mwanawe, na mwana dhidi ya babaye, mama dhidi ya bintiye na binti dhidi ya mama, mama mkwe dhidi ya binti-mkwe na binti-mkwe dhidi ya mama mkwe.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma inafichua hekima yake anapopata mwili duniani katika umbo la Bhagavan. Hekima ya Bhagavan inazalisha hisia pinzani kwa wale walio kwenye njia ya Shetani. Katika hali kama hizo, tofauti za maoni hutokea kati ya wale wanaofahamu hekima na wale wasioelewa. Wale walio na hekima watatofautiana na wale wasio na hekima. Hali kama hiyo inapotokea katika nyumba moja, washiriki wa familia wanaweza kuwa na uadui kati yao. Mtu yeyote akijaribu kupata hekima nyumbani, Shetani atakuwa macho. Shetani kulea mgawanyiko , kuwagombanisha baba dhidi ya wana, wana dhidi ya baba zao, mama dhidi ya binti zao, binti dhidi ya mama zao, wakwe zao dhidi ya wakwe zao, wakwe zao dhidi ya mama mkwe. Hata Bhagavan (Guru) anaweza kukushauri usikubaliane na wale wanaokupinga kwenye mambo ya hekima, ukijua kuwa mume na mke wanagombana kwa sababu ya hekima yake. Kwa hivyo, ugomvi wao unaweza kuongezeka badala ya kupungua. Kwa hiyo,<strong>Bwana akasema, Sikuja kuleta upatanisho, bali kuleta mafarakano.</strong>Je, unafikiri kwamba Bhagavan, ambaye amekuja kufundisha hekima duniani, anakushauri uisikilize nyumba yako huku ukipuuza hekima yake? Je, unaamini kwamba Bwana, aliyekuagiza kukata mkono wako ikiwa inazuia hekima ya Mungu, anapendekeza upatane na mke wako na jamaa zako? Kamwe. Alikuhimiza usikubali maelewano nao, hata kama itamaanisha kutoa maisha yako. Kwa hiyo, migogoro mingi hutokea katika familia kwa sababu ya hekima ya Mungu. Hasa, popote ambapo hekima ya kweli inatangazwa, kutakuwa na mafarakano ndani ya nyumba. Hakuna kutokubaliana wakati hekima ya Shetani inatolewa chini ya kivuli cha hekima ya kimungu. Kila mtu huelekea kuunga mkono hekima hiyo. Mtu anaweza kutambua kwamba ikiwa washiriki wote wa nyumba wanakuwa maadui kwa sababu ya hekima ya kimungu, basi hekima hiyo ni hekima ya Mungu kikweli.
</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 73,
verse: `<b>(8)	Injili ya Luka, sura ya 13, mstari wa 3.</b>`,
meaning: `<b>(13:3) Isipokuwa mkibadilisha nia yenu, ninyi pia mtaangamia.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Manas (akili) ndio sehemu muhimu zaidi ya mwili, inayoitwa hivyo kwa sababu huhifadhi kumbukumbu. Inatenda kazi mfululizo chini ya ushawishi wa Maya (Shetani), ikiimarisha mahangaiko ya kilimwengu. Tangu kuzaliwa kwa mtu, akili imeunganishwa na Shetani na haijawahi kufanya kazi katika kupatana na Mungu. Kugeuzwa kwa akili kama hiyo kutoka kwa uvutano wa Shetani hadi kupatana na Mungu kunaitwa “badiliko la nia”. Hakuna anayeweza kuvuka upande wa Mungu bila mabadiliko katika mawazo yake. Wakati akili inapitia mabadiliko, gnanagni (moto wa hekima) huanza kudhihirika. Kupitia uharibifu wa karma yao yote kwa gnanagni, mtu huungana na Mungu bila kupata kuzaliwa na kifo. Ikiwa akili itabaki bila kubadilika na inaendelea kuamuru mawazo, mtu lazima apitie mzunguko wa kuzaliwa, mauti, na kustahimili mateso ya kuzimu. Kwa hiyo, ni muhimu kwa kila mtu kufanyiwa mabadiliko ya mawazo.
</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 74,
verse: ` <b>(9)	Injili ya Luka, sura ya 14, mstari wa 26</b>`,
meaning: `<b>
(14:26) Mtu akija kwangu naye hamchukii baba na mama, mke na watoto, ndugu na dada—naam, hata maisha yao wenyewe—mtu huyo hawezi kuwa mfuasi wangu.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mtu yeyote akisikiliza hili, atashangaa na kuuliza, “Hii ni hekima ya namna gani? Guru wa aina gani? Wanafunzi wa aina gani?” Mtu anaweza kuja kwa Guru na kumuuliza, “Je, Guru yeyote anawaambia wanafunzi wake kwamba wao si mfuasi isipokuwa wawakaripie familia zao?” Tunahitaji kufikiria hapa. Ikiwa mtu atakemea kaya yao yote, Guru si mwendawazimu wa kufurahishwa na kuwakubali kama mfuasi. Haishauriwi kuchukia kila mtu bila kubagua. Guru anafurahishwa wakati mwanafunzi, kulingana na hisia za Guru, anawakemea wajinga wanaotembea kwenye njia ya Shetani. Mwanafunzi anapopinga wajinga, Guru hugundua kuwa mfuasi huyo anaendana na mafundisho yake na kuyakubali. Ikiwa mwanafunzi anaunga mkono wajinga badala ya kuwapinga, Guru hatawakubali kama mfuasi. Chuki ni ya kawaida kati ya makundi mawili - gnanis (mwenye hekima) na wajinga. Ikiwa baba na mama, mke na watoto, kaka na dada wako kwenye orodha ya wajinga, mwanafunzi anapaswa kuwapinga. Bwana alisema kwamba yule anayefanya asimpinge wajinga na kuwapendelea jamaa sio mfuasi wake. Inasisitizwa kwamba mtu hapaswi kukubaliana na ujinga. Yesu alisema kwamba mwanafunzi anapaswa kuacha mama, baba, kaka na dada, mke na watoto ikiwa watazuia njia ya hekima.</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 75,
verse: ` <b>(10)	Injili ya Luka, sura ya 14, mstari wa 27.</b>`,
meaning: `<b>
(14:27) Mtu ye yote asiyeuchukua msalaba wake na kunifuata, hawezi kuwa mfuasi wangu.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wakati kuni zimefungwa, inakuwa rahisi kuchukua na kubeba kwa umbali mrefu; isingewezekana kubeba vinginevyo. Vile vile, wakati bunduki 108 katika akili ya mtu zimefungwa pamoja katika hali isiyofanya kazi, huwa fungu mikononi mwa mwanadamu. Kuna aina mbili za bunduki - nzuri na mbaya - katika mwili wa mwanadamu<strong>.</strong>

  <strong>Gunas sita mbaya ni uchoyo (kaama), hasira (krodha), avarice (lobha), shauku (moha), kiburi (madam), na wivu (matsara). Vile vile, bunduki sita nzuri ni hisani (dana), rehema (daya), hisani (audarya), dispassion (vairagya), unyenyekevu (vinaya), na upendo (prema).</strong>Kila moja ya bunduki sita mbaya na nzuri imegawanywa zaidi katika sehemu tisa. Kwa hiyo, bunduki sita mbaya zimegawanywa katika sehemu 54, na bunduki sita nzuri zimegawanywa katika sehemu 54 pia. Kwa pamoja, bunduki nzuri na mbaya hufanya jumla ya 108.

  Sehemu 108 ya gunas zinaitwa<strong>Maya</strong>katika andiko la kwanza la kimungu. Katika andiko la pili la kimungu, wanaitwa<strong>Shetani</strong>. Katika andiko la mwisho la kimungu, gunas hizi zimetajwa<strong>Iblisi</strong>. Mungu Mwenyewe alizungumza kuhusu Maya kama &ldquo;Guna-mayi mama maya&rdquo; katika andiko la kwanza la kimungu. Ina maana kwamba Maya, ambayo Mungu aliumba, iko katika umbo la gunas katika mwili wa mwanadamu. Mungu hasa aliumba Maya ili kuwazuia wanadamu wasifuate njia ya kimungu. Maya anaweza kumfanya mtu akae upande wake badala ya kufuata njia ya Mungu. Inaweza kusemwa kwamba Maya ni guna, au guna ni Maya. Katika Kitelugu, Maya ina maana 'asiyeonekana.' Maya yupo kichwani bila kuonekana. Maya, ambayo iko katika mwili wetu, pia inaitwa Msalaba. Kwa maana ya kiroho, Maya anafananishwa na chatu, huku Atma akifananishwa na njiwa.

  Chatu ni nyoka mwenye nguvu. Mtu ambaye amekamatwa nayo hawezi kuwa huru. Hiyo ina maana Maya ana nguvu. Yesu alisema kwamba yeyote anayemtawala, kuwafunga na kuwashika Maya wenye nguvu kiasi hicho mkononi mwao huyo ndiye mwanafunzi wangu. Yesu alisema kwamba mshindi wa Maya alikuwa mwanafunzi wangu kweli.<strong>Yeyote anayemkamata Maya (Msalaba) na kuifuata njia ya Mungu kwa kuibeba ni mfuasi wa kweli wa Mungu.</strong>Mtu anayebeba Msalaba ambao tunazungumza juu yake sana leo na kumfuata Yesu ni mfuasi wake, kama inavyoonyeshwa katika mstari huu.
</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 76,
verse: `<b>(11)	Injili ya Luka, sura ya 18, mstari wa 29.</b>`,
meaning: `<b>
(18:29) “Amin, nawaambia,” Yesu akawaambia, “hakuna mtu aliyeacha nyumba, au mke, au ndugu, au dada, au wazazi, au watoto, kwa ajili ya ufalme wa Mungu, hatashindwa kupokea mara nyingi zaidi. katika ulimwengu huu, na katika wakati ujao uzima wa milele.”  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ufalme wa Mungu unarejelea Moksham, ambayo ni ukombozi kutoka kwa mzunguko wa kuzaliwa upya. Mara tu mtu anapofikia Moksham (ukombozi), hazaliwi tena duniani na hateswe na Shetani. Moksham inamaanisha kuachiliwa kutoka kwa Shetani na kuunganishwa na Mungu. Kwa maneno mengine, mtu anakuwa mmoja na Mungu. Muungano wa Jeeva, ambao ni mdogo na una umbo maalum, pamoja na Mungu mkubwa sana, asiye na kikomo, na aliye kila mahali ni mafanikio bora. Ili kufikia nafasi hii, mtu lazima afuate njia ya hekima na awe tayari kuachana na mwenzi wake, watoto, wazazi, ndugu na nyumbani ikiwa viambatisho hivi vinazuia safari yao ya kiroho. Mtu kama huyo anakuwa gnani kamili katika ulimwengu huu na anapata Mungu katika Paraloka. Kutoa mwenzi, watoto, ndugu, na wazazi ni uamuzi muhimu kwa sababu Maya huzunguka mtu na kumfunga kwa wapendwa wao wa karibu. Prahlada hakumhesabu baba yake, Mirabai alimwacha mumewe na jamaa, na Buddha alimwacha mke mdogo, mtoto wa mwaka mmoja, wazazi, nyumba, na ufalme kwa hekima. Hata hivyo, wale wanaojitenga na wapendwa wao wanaweza kumkaribia Mungu zaidi. Kwa ajili ya kupata mtu ambaye ni wa milele, kuacha nyuma mtu ambaye kukaa na wewe kwa muda ni uamuzi wa busara. Hata hivyo, uamuzi huo unaweza kuonekana kuwa upumbavu kwa ulimwengu. Ni nadra kupata mtu aliye tayari kuacha kila kitu nyuma katika ufalme wa Shetani kwa ajili ya Mungu. Kwa sababu mtu yeyote anapopata wazo la Mungu akilini mwake, Shetani hukazia fikira zaidi juu yao na kuwakengeusha kutoka kwa mawazo na njia ya hekima. Haiwezekani kwa mtu kushinda nguvu za Shetani na kuzishinda, kama inavyoelezwa katika Bhagavad-Gita, Vignana Yogam, mstari wa 14. Mtu anaweza kujiuliza inawezekanaje kumwendea Mungu wakati nguvu za Shetani ni kubwa sana. Kwa nini kujaribu na kushindwa? Hata hivyo, ikiwa mtu anamtumaini Mungu kabisa na kuendelea na jitihada zao licha ya kutokuwa na uwezo wa kumpinga Shetani, Mungu Mwenyewe atawavuta kutoka kwa Shetani hadi upande Wake. Kwa hivyo, njia pekee ya mwanadamu mdogo zaidi kumshinda Shetani ni kujisalimisha kabisa kwa Mungu. Bhagavad-Gita inasema,<strong>"Maya metam tarantite,&rdquo;</strong>ambayo ina maana<strong>"Nitamwondoa Maya,"</strong>kuhusu wale wanaomtumaini Mungu kabisa. Kwa hivyo, ikiwa mtu ataweka imani na mzigo wake kamili kwa Mungu, Mungu anaweza kuwaokoa kutoka kwa Shetani.
</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 77,
verse: `<b>(12)	Injili ya Luka, sura ya 21, mstari wa 15.</b>`,
meaning: ` <b>
(21:15) Nitawapeni maneno na hekima ambayo hakuna adui yenu atakayeweza kupinga au kupinga. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Watoto wadogo, ambao wana ujuzi fulani wa hekima, wanapotilia shaka mafundisho ya wahubiri mashuhuri na magurudumu, hawapati majibu katika mafundisho yao. Kwa hiyo, wahubiri wameweka sheria kwamba mtu yeyote asihoji mafundisho yao. Sababu kuu ya kukosa majibu katika mafundisho yao ni kwamba hayatokani na sayansi. Mafundisho yasiyo ya kisayansi hayawezi kutoa majibu kwa maswali ya busara. Wahubiri wanaendelea kufundisha, lakini hawajibu wanapoulizwa. Paramatma inapopata mwili kama Bhagavan, Anafundisha hekima ya kweli ya Paramatma. Kwa hiyo, wale wanaojua hekima iliyofundishwa na Bhagavan wanaweza kufundisha na kujibu swali lolote. Maadui wanaowaona waja wa Bhagavan, ambao wanajua hekima ya Paramatma, wanakuja kwao na ego kwamba wao ni gurus na gnanis na wanazungumza kinyume. Hekima ambayo maadui hawawezi kusema dhidi yake tayari imeambiwa kwa waja kwa wakati kama huo. Neno la Mungu linasema kwamba watu wengi wana wivu na kuongeza ushindani dhidi ya wale wanaojua hekima ya kweli. Hata Mungu aliposhuka, maadui walimkabili na kusema, “Bado hujajua hekima na unahitaji kwenda mahali maalum ili kujifunza hekima ya kweli.” Baadhi ya watu walikuja kwangu na kusema, “Wewe hujui hekima.” Watu kama hao pia watakuja kwako. Mungu alisema katika mstari hapo juu kwamba atakupa hekima ya kuwajibu.
</div></div>
</span>`
},
{
chapterName: "Injili ya Luka",
chapterNumber: 4,
pageNumber: 78,
verse: ` <b>(13)	Injili ya Luka, sura ya 21, mstari wa 17. </b>`,
meaning: `<b>
(17) Everyone will hate you because of me.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hekima iliyofunuliwa na Bhagavan, Mwana wa Mungu, ni dhidi ya wale ambao wametekwa na Shetani. Kuna nafasi ili watu wa kawaida wasiweze kuelewa hekima hii, kwa kuwa inaonekana kuwa kinyume kabisa na wahubiri na wakuu walio na hekima fulani. wahubiri na magurudumu mara nyingi hawapendi neno ya wale wanaohubiri jina la Mungu. Wao, na watu wanaowafuata, wanaanza kuwachukia wale wanaohubiri njia ya Mungu kwa sababu wanaona maneno ya Mungu kinyume na mafundisho yao. Kwa hiyo, Mungu alisema katika aya hiyo hapo juu,<strong>" Kila mtu atakuchukia kwa sababu yangu.&rdquo;</strong>  </div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 79,
verse: `<b>(1)	Injili ya Yohana, sura ya 1, mstari wa 1.</b>`,
meaning: `<b>(1:1) Hapo mwanzo kulikuwako Neno, naye Neno alikuwako kwa Mungu, naye Neno alikuwa Mungu.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Injili ya Yohana ina sura 21. Katika andiko hili, nitatoa maelezo kwa baadhi ya mistari ambayo wanadamu wameshindwa kuelewa, kutoelewa, au wanaweza kufasiri kimakosa. Nimechagua mistari hii kama sehemu ya huduma ya Mungu, nikihisi kama kalamu ambayo Mungu ananitumia kufanya kazi hii. Hapo awali, nilieleza baadhi ya mistari kutoka katika andiko la kwanza la kimungu, Bhagavad-Gita, na andiko la tatu la kimungu, Kurani. Ninapotamani sana kueleza maandiko yote matatu ya kimungu, sasa nitaonyesha baadhi ya mistari kutoka katika andiko la pili la kimungu, Injili (Biblia). Hekima iliyotolewa katika andiko hili ni ya kisayansi na ya kweli. Sasa, hebu tuchunguze aya ya kwanza kutoka sura ya kwanza ya Injili ya Yohana, ambayo ina sentensi tatu fupi ambazo lazima zifafanuliwe ili kuielewa kikamilifu.
  Hebu sasa tujadili maneno matatu ya kwanza ya Injili ya Yohana katika andiko la pili la kimungu.
            <b>
            Neno alikuwako hapo mwanzo.
            Neno alikuwa pamoja na Mungu.
            Neno alikuwa Mungu.
            </b>

  Katika mafundisho ya Biblia, hebu turejelee mistari hii mitatu kama mistari ya mwanzo ya Biblia. Huenda wengine wakabisha kwamba mistari kutoka Mwanzo yapasa kuitwa maneno ya kwanza ya Biblia. Walakini, tayari tumeelezea njia yetu. Tunazingatia mafundisho ambayo wanadamu wanahitaji kuwa maandiko na tutazungumzia mistari ya kwanza kutoka kwayo. Kwa kufuata kanuni hii, Bhagavan Yesu alifundisha Injili nne. Ingawa Injili ya Yohana ilikuwa ya mwisho, ilianza na mafundisho. Vile vile, tulichukua mstari wa 11 wa sura ya pili kama mwanzo wa Bhagavad-Gita kwa sababu hekima ya Mungu ilianzia hapo. Pia tulichukua aya ya 11, 12, na 13 kutoka Sankhya- Yoga kama sentensi tatu za kwanza. Vivyo hivyo, aya za kwanza zilichukuliwa kutoka sura ya 43 ya Injili (Biblia), na tukachukua aya tatu kutoka Taurat (Bhagavad-Gita) kama sentensi tatu za kwanza. Hapa, hata hivyo, tulichukua sentensi tatu kutoka mstari mmoja katika Injili ya Yohana kama sentensi tatu za kwanza, badala ya mistari mitatu mfululizo. Mlolongo wa sentensi sio muhimu; tulichukua zile zinazoleta maana tatu kama sentensi tatu. Ingawa haya ni sentensi fupi tatu, kila moja ina maana kubwa.

  Sentensi hizi tatu hutoa maana fiche. Sentensi tatu za kwanza za Bhagavad-Gita hujikita katika dhana za Jeevatma na Atma. Hata hivyo, maneno ya utangulizi ya Injili ya Yohana yanafundisha maana ya pekee. Kuanzishwa kwa Bhagavad-Gita kunajadili vipengele vitatu - Jeevatma, Atma, na mwili. Kinyume chake, sentensi tatu za mwanzo za Injili ya Yohana huchunguza vipengele vitatu - Hekima, Atma, na Paramatma. Hata hivyo, sentensi hizi hazifafanui kwa uwazi nafasi za Atma na Paramatma. Ingawa neno 'Mungu' linaonekana katika sentensi mbili, hekima na Atma hubakia kutambulika kwa njia isiyoeleweka. Sasa, hebu tuchunguze sentensi ya kwanza ya watatu. Sentensi ya kwanza ni<strong>"Neno alikuwako hapo mwanzo.&rdquo; </strong>Neno hutamkwa katika hotuba, inayotokana na sauti inayotoka kinywa. Mtu anaweza kutambua sauti na kutambua kama sentensi ni ndefu au fupi kulingana na viashiria vya kusikia. Lugha ya sentensi inaweza si lazima ifahamike na inaweza kutofautiana kwa urefu. Haiwezekani kuamua ikiwa neno (sentensi) lilitamkwa kwa upole au kwa sauti kubwa. Hebu tuchambue sentensi<strong>"Neno alikuwako hapo mwanzo.&rdquo;</strong>Ingawa tunaelewa kuwa neno hilo lilizungumzwa hapo mwanzo, wanadamu hawakuwa na ujuzi wowote wa lugha katika hatua hiyo ya awali. Kwa hiyo, swali linalofaa linatokea kuhusu lugha ambayo neno hilo lilitamkwa. Ili kushughulikia uchunguzi huu, hebu tuzingatie matukio yaliyotokea mwanzoni.

  Tukiuliza kuhusu asili ya sauti hapo mwanzo, tunaweza kuhusisha sauti iliyosikika na sikio la mwanadamu na Prakruti. Prakruti inajumuisha bhoota tano kuu - Dunia, Maji, Hewa, Moto, na Anga - kila moja ina uhai. Anga, iliyojaliwa uhai, ilitoa sauti mwanzoni. Hii inazua swali la jinsi Anga hutoa sauti wakati inaonekana kuwa tupu. Uchunguzi huu ni wa busara, na kuelewa majibu kunabadilisha kuwa uchunguzi wa kisayansi. Kulingana na Brahma Vidya Shastra, Je, Anga yenyewe ilitengeneza sauti? Kwa kuwa Anga ni Jeeva, Jeevatma haina uwezo na haiwezi kutenda kulingana na kanuni za kisayansi; ni dharma ya Jeevatma. Paramatma pia ina dharma moja. Paramatma (Mungu) hana jina, umbo, au kazi. Hii ndiyo dharma kuu ya Mungu. Mungu si wakala wa utendaji; Hajishughulishi na kazi. Kulingana na dharma ya Jeevatma, Jeevatma haina uwezo na haiwezi kufanya kazi yoyote. Ingawa Mungu ana uwezo, hajishughulishi na matendo yoyote. Kwa hivyo, Jeevatma na Mungu wana dharma zinazopingana. Hapo mwanzo, neno hilo lilitoka kwa anga. Kwa vile Sky pia ni Jeeva, haikutoa sauti hiyo. Sauti iliyotoka Angani ni tukio la kweli, lakini Jeeva of the Sky haina uwezo na haiwezi kutoa sauti yoyote. Kwa hivyo, mtu nyuma ya Anga anaweza kuwa chanzo cha sauti. Mungu hakuumba sauti kwa sababu Yeye hajishughulishi na kazi. Ingawa sauti kutoka Angani ni ya kweli, si Jeeva ya Angani wala Mungu ndiye chanzo cha sauti hiyo. Shaka inaweza kutokea ikiwa kulikuwa na mtu mbali na wote wawili.

  Ili kuondoa shaka hii, ni muhimu kuelewa vyombo katika ulimwengu. Hapo awali, Mungu aliumba ulimwengu. Mungu, wakati akiwa Mungu, alimuumba Prakruti kutoka kwake. Kwanza aliunda Prakruti kama sehemu tano na kisha akaunda Atma na Jeevatma ili kuingiza nguvu ndani ya Prakruti, ambayo haikuwa na maisha. Sawa na Yeye mwenyewe, Mungu aliumba kiume (Purusha) Atma na Jeevatma. Alimteua Jeevatma kama abiria na Atma kama dereva, akimkabidhi Atma kutekeleza majukumu yote. Katika kila mtu, Atma hufanya kazi zote ndani ya mwili wakati inashirikiana na Jeevatma. Katika maandiko yake, Mungu alisisitiza kwamba hata wanazuoni wakubwa wanaweza wasimfahamu Atma kikamilifu. Ni yoga iliyojitolea pekee, kama ilivyotajwa katika aya ya 11 ya Bhagavad-Gita Purushottama Prapti Yoga, inaweza kuelewa Atma, ikisisitiza kwamba Atma inabaki kufichwa ndani ya mwili bila kujulikana.

  Ikiwa Mungu hafanyi kazi, wengine wanaweza kuuliza jinsi alivyofanya Prakruti, Atma, na Jeevatma. Jibu langu ni kwamba ni kweli kwamba Mungu hafanyi kazi. Kanuni hii ilitamkwa na Mungu baada ya uumbaji wa Prakruti, Atma, na Jeevatma. Kabla ya tendo la uumbaji, Mungu alikuwa pekee wa kuwepo na, katika kipindi hicho, Mungu alishiriki katika kazi. Hakukuwa na mtu mwingine isipokuwa Mungu kabla ya uumbaji. Kwa hiyo, Mungu alifanya kazi kabla ya tendo la uumbaji. Mungu aliumba Prakruti, ikifuatiwa na uumbaji wa Atma na Jeevatma. Baadaye, Mungu alianzisha dharma yake. Ingawa Mungu alijizuia kufanya kazi baada ya uumbaji, Alikuwa hai kabla ya tendo la uumbaji. Mungu alikabidhi majukumu yote kwa Atma na kuamua kwamba Atma angetekeleza kazi zote. Kwa hiyo, Paramatma iliacha kujihusisha na matendo Aliyozoea kufanya baada ya kuundwa kwa Atma. Atma alipochukua majukumu, Paramatma akawa mtazamaji tu (shahidi).

  Mungu hajishughulishi na kazi; Jeeva hana uwezo wa kuchukua hatua, na Atma ndiye anayefanya kazi zote. Kwa hivyo, ilikuwa Atma ambayo ilitoa sauti kutoka Angani hapo mwanzo. Atma, iliyofichwa ndani ya Anga, ilitoa sauti. Sauti iliyoundwa na Atma ikawa hekima ya Mungu, kwa hiyo inajulikana kuwa 'neno,' ikimaanisha sauti yenye maana. Kuelezea tukio la uumbaji, maneno<strong>"Neno alikuwako hapo mwanzo&rdquo;</strong>hutumika kueleza kwamba sauti yenye maana ilitoka Angani. Tumejifunza neno 'neno' ni nini na ni nani aliyelitamka. 'Neno' lilitamkwa kwa hekima ya Mungu na Atma kwa namna ya sauti. Kile Atma alichoeleza kutoka Angani kilikuwa hekima ya kwanza kwa ulimwengu. Ingawa sauti kutoka Angani ilishikilia hekima, ilijidhihirisha kama sauti kubwa kwa namna ya radi, kupita ufahamu wa lugha ya mwanadamu. Jua lilielewa sauti ya ngurumo angani na, kwa kutambua kutoeleweka kwake. binadamu, alifikisha ujumbe huo kwa mtu aitwaye Manu Duniani kwa lugha inayoeleweka na wanadamu.

  Hekima ya Mungu ilionyeshwa kwa njia ya sauti isiyoeleweka mwanzoni mwa uumbaji. Hili limefafanuliwa katika sentensi ya kwanza ya sura ya kwanza ya Injili ya Yohana, ikisema kwamba<strong>"Neno alikuwako hapo mwanzo.&rdquo;</strong>Siku hiyo, wanadamu hawakujua kwamba sauti hiyo ilikuwa na hekima ya Mungu; Walielewa kwa kiasi fulani tu wakati Jua lilipowasilisha ujumbe. Krishna aliwasilisha hekima hiyohiyo katika umbo la Bhagavad-Gita, akisema kwamba ilikuwa hekima ile ile iliyosemwa mwanzoni mwa uumbaji. Hata hivyo, tahadhari ya mwanadamu hapo awali haikuzingatia sauti ya radi mwanzoni, na hadi leo, hakuna mtu anayetambua kwamba sauti ya radi hujumuisha hekima ya Bhagavad-Gita. Jua liliwasilisha hekima ile ile kwa Manu ambayo Krishna alikuwa amesema, ikitafsiri hekima inayotoka angani kwa namna ya radi. Hekima kutoka kwa sauti ya Anga iliibuka kutoka kwa Atma ya Angani. Hekima ya Atma ilitoka kwa Atma yenyewe. Atma yenyewe ikawa hekima, na hekima hiyo hiyo ilitoka kwa Atma. Hekima hii kutoka kwa Atma inalinganishwa na jinsi pamba inavyobadilika kuwa thread, na thread inatoka kwenye pamba. Wakati pamba na thread ni tofauti, pamba inakuwa thread. Vile vile, Atma na hekima ni tofauti, lakini hekima ya Atma inatoka kwa Atma. Ikiwa thread imetenganishwa, inajumuisha nyuzi za pamba; halikadhalika, hekima ya Atma ikichambuliwa, ina asili ya Atma.

  Hapo mwanzo, Mungu aliwasilisha hekima yake kupitia sauti ya Anga, kama ilivyoelezwa katika Quran 42:51, ambapo moja ya njia Mungu hudhihirisha hekima yake ni kupitia ufunuo kutoka mbinguni. Mungu alipitisha hekima yake kupitia Atma ya Anga wakati wa uanzishwaji wa uumbaji. Hekima, iliyowasilishwa kwa njia ya radi, haikueleweka kwa wanadamu kwani ilikosa lugha wanayoweza kuelewa. Kwa hivyo, Jua, likiwa limeshika hekima katika ngurumo, liliipeleka kwa mtu duniani kwa lugha ya kibinadamu. Hatimaye, hekima hii ilienea duniani kote.

  Walakini, kadiri muda ulivyosonga mbele, adharma zilibadilisha dharma, na kusababisha hekima iliyowasilishwa hapo awali kufifia kutoka kwa kumbukumbu ya mwanadamu. Huko Dvapara Yuga, Bhagavan alichukua umbo la Krishna na kumfahamisha Arjuna kwamba Alikuwa akishiriki hekima ile ile ambayo Jua lilikuwa limewasilisha. Licha ya kuwa na hekima ile ile iliyotolewa kwa namna ya Bhagavad-Gita, andiko la kwanza la kimungu, wanadamu wamesahau asili yake.

  Sentensi tatu za kwanza katika Injili ya Yohana ziliandikwa miaka 3000 baada ya Bhagavad-Gita kusemwa, kwani wanadamu walikuwa wamesahau hekima iliyotolewa na Mungu. sentensi<strong>"Neno alikuwako hapo mwanzo&rdquo;</strong>sasa inaeleweka. Inatambulika kuwa hekima katika mfumo wa radi ilitoka kwa Atma ya Anga, kama inavyoonyeshwa katika sentensi ya pili. Kwa hiyo, inadaiwa kuwa<strong>"Neno alikuwa pamoja na Mungu.&rdquo; </strong>Uchunguzi zaidi unaonyesha kuwa sauti ya neno hilo lilizaliwa kutoka kwa Atma. Kama vile uzi uliosokotwa hutoka kwenye nyuzi za pamba, uhamaji wa Atma hubadilika kuwa nishati, na hekima katika nishati inayoonyeshwa kwa namna ya sauti. Sawa na jinsi uzi ina nyuzi za pamba, sauti ya hekima inajumuisha nguvu za Atma. Hekima ya Atma iko katika mfumo wa nguvu za Atma na Atma yenyewe. Hekima ya Atma na Atma ni kitu kimoja, na kwa hivyo inasemwa:<strong>"Neno alikuwa Mungu.&rdquo;</strong>

  Kufikia sasa, tumejadili kwamba Mungu aliumba Jeevatma na Atma, na Mungu akifanya kazi kikamilifu kabla ya uumbaji. Hata hivyo, baada ya tendo la uumbaji, Mungu alimpa Atma uwezo wa kutekeleza kazi hizo, akionekana kutoweka na kufanya uwepo Wake usijulikane. Mungu alijiepusha na kufanya kazi yoyote, na, katika hali hii, Akawa sawa na yule ambaye hakuwepo. Kwa hivyo, Atma alichukua jukumu la kufanya kazi ya Mungu. Ingawa Atma hutekeleza majukumu ya Jeevatma na Paramatma, vitendo vyake vinasalia kufichwa kutoka kwa wengine. Taarifa zilizotajwa hapo juu zinaelezea mchakato mzima wa uendeshaji wa Atma. Hapo awali, wakati Paramatma ilipounda ulimwengu, kulikuwa na roho tatu, lakini baada ya uumbaji, roho mbili tu - Jeevatma na Atma - ndizo zinazotambuliwa. Kwa kukosekana kwa uwepo wa Paramatma, Atma alichukua jukumu la Paramatma, ndiyo sababu Atma inaweza kuitwa Mungu. Licha ya kutokuwa Mungu (Paramatma), Atma hufanya kazi za Mungu na kuchukua nafasi ya Mungu.

  Hekima ya Atma inatoka kwa Atma yenyewe. Kwa kudai kuwa Atma ni Mungu, inathibitishwa hivyo<strong>Neno (hekima) lilikuwa kwa Mungu</strong>. Kauli hii ni sahihi tunapomchukulia Atma kama Mungu. Ingawa Atma si Mungu, lazima ikubaliwe kama Mungu kwa sababu Mungu amempa Atma mamlaka ya kutenda kama Mungu. Kwa hiyo, Neno (hekima) linapotambulishwa kuwa Atma, linaweza kutangazwa kuwa hekima ile ile (Atma) ni Mungu. Maelezo haya yanawiana na taarifa katika Injili ya Yohana kwamba<strong>Neno alikuwa Mungu</strong>. Baada ya kujibu maswali kama vile &ldquo;Neno ni nini?&rdquo;, &ldquo;Neno linaunganishwaje na Atma?&rdquo; na &ldquo;Kwa nini Atma anachukuliwa kuwa Mungu?&rdquo;, Nadhani kwamba maana ya sentensi tatu za kwanza kutoka Injili ya Yohana 1:1 sasa inaeleweka. Ikiwa mtu atashindwa kufahamu hili baada ya maelezo hayo ya kina, hekima ya Atma inaweza kubaki kuwa ngumu. Kuelewa hekima ya Atma ni muhimu ili kuelewa mfumo wa Mungu. Ili kutambua njia za Mungu, ni lazima mtu aanze na ufahamu wa hekima ya Neno. Mara hekima hii inapojulikana, inakuwa dhahiri kwamba hekima ni Atma, na Atma ni Mungu.
<b>
<table style="width:100%">
<tr>
  <td>Katika uumbaji</td>
  <td>Mungu (Paramatma)</td>
  <td>Prakruti</td>
  <td>Atma</td>
  <td>Jeevatma</td>
</tr>
<tr>
  <td>Baada ya uumbaji</td>
  <td>Paramatma</td>
  <td>Prakruti</td>
  <td>Atma</td>
  <td>Jeevatma</td>
</tr>
<tr>
  <td>Baada ya uumbaji</td>
  <td>Atma (Mungu)</td>
  <td>Prakruti</td>
  <td>Atma</td>
  <td>Jeevatma</td>
</tr>
</table>

</b>
  Katika tendo la uumbaji, Mungu alifanya kazi kuumba Prakruti wa kike na Atma na Jeevatma wa kiume. Hapo awali, Mungu, kama Purusha (mwanaume), aliumba nafsi mbili, Atma na Jeevatma, sawa na Yeye. Kufuatia kuundwa kwa Prakruti, Atma, na Jeevatma, Mungu alibadilika na kuwa jukumu la kushuhudia bila kushiriki kikamilifu. Kwa kuzingatia asili ya Mungu ya kutojishughulisha na kazi, inaweza kuonekana kana kwamba hakuna Mungu, licha ya kuwepo kwake. Wakati usawa wa dharma unavurugika, na adharma zinatawala duniani, Mungu hutuma roho yake kama Bhagavan kurejesha dharmas. Katika kuanzisha tena dharma, mwakilishi wa Mungu anatumwa, akiondoa hitaji la Mungu kushiriki moja kwa moja katika kazi hiyo. Atma, kwa upande mwingine, huchukua jukumu kwa kazi zingine zote. Kwa hivyo, baada ya uumbaji, Mungu anakuwa ajizi na anaonekana kutohusika. Inaweza kusemwa kwamba Mungu, katika hali hii, anaonekana hayupo. Atma huingia ndani ili kujaza utupu unaotambulika wa Mungu na kwa ufanisi kuwa Mungu, na kutufanya tughafilike na kutokuwepo kwa Mungu. Kwa hivyo, kifungu<strong>"Neno alikuwa Mungu&rdquo;</strong>limeonyeshwa katika andiko la pili la kimungu, likimaanisha tofauti kati ya Mungu na neno. Ingawa neno si asili ya Mungu, lilibadilishwa kuwa Mungu. Usemi huo<strong>"Neno alikuwa Mungu&rdquo;</strong>inaangazia mabadiliko ya neno (hekima) kuwa Mungu. Kwa kuwa neno (hekima) linahusishwa na Atma, na Atma inachukuliwa kuwa Mungu, inadaiwa kwamba Atma, akiwa neno, ni Mungu. Kila mtu amekosea kujua Mungu ni nani na Atma ni nani.

  Kwa kweli, Mungu hayupo tena baada ya tendo la uumbaji. Bila mtu yeyote kujua kwamba hakuna Mungu duniani, Atma anachukua nafasi ya Mungu, akifanya kazi za Jeevatma na Prakruti. Wakati huo huo, Atma anachukua nafasi sawa na Mungu. Baada ya uumbaji, Mungu alibadilika na kuwa kitu kisicho na umbo, kisicho na jina kisicho na kazi aliyopewa. Kumuelezea Mungu kama huyo kuwa hayupo kunaweza kuwa sahihi zaidi kuliko kudai kuwepo kwake. Kwa vile hakuna kitu mahali pa Mungu, Atma anaingia katika jukumu la Mungu, akifafanuliwa na kifungu cha maneno.<strong>" Neno alikuwa Mungu</strong>&rdquo; katika sentensi ya tatu. Licha ya watu wengi kusikia na kusoma sentensi hizi, siri ya msingi bado haijulikani.

  Ili kufafanua ukweli kuhusu Atma, ambayo inajumuisha jukumu la Mungu, imeelezwa kuwa<strong>"Neno alikuwa Mungu.&rdquo;</strong>Wakati Atma, inayomtambulisha Mungu, inaposhiriki katika tendo lolote, inahusisha kitendo hicho na &ldquo;Jeevatma amefanya&rdquo; au &ldquo;Mungu amefanya,&rdquo; kumsadikisha kila mtu kuwako kwa Mungu. Maswali yanaweza kutokea kuhusu ni nani aliye na mamlaka juu ya ulimwengu ikiwa hakuna Mungu, au kama mtazamo huu unapatana na hekima ya Mungu au ukosefu wa Mungu. Jibu la maswali haya ni kama ifuatavyo: Tunasema kwamba Mungu hayuko mahali pa Mungu, lakini hatusemi kwamba Mungu hayupo kabisa. Matendo ya Mungu hayajulikani, na inasisitizwa kwamba Yeye hana jina, kazi, au umbo, kwa hiyo hana moja kwa moja. uhusiano na wanadamu, lakini hatukusema kamwe kwamba Mungu hayupo kabisa. Katika nyakati za tishio kwa dharma, Mungu hutuma mwakilishi wake kurejesha utulivu. Hata katika hali hii, mwakilishi anajiepusha na kudai kwa uwazi kuwa yeye ni Mungu, na kuchukua moniker 'Bhagavan.' Siri inayozunguka utambulisho wa Mungu na sifa zake zinaendelea kuwepo. Mungu yupo, lakini hakuna ajuaye jinsi Mungu alivyo. Hakuna mtu ambaye ameona au kuwasiliana moja kwa moja na Mungu tangu uumbaji. Chochote kinaweza kusemwa juu ya kitu chochote ulimwenguni, lakini hakuna mtu anayeweza kusema chochote cha uhakika juu ya Mungu. Masharti kama vile 'Allah' katika Kruta Yuga yanaashiria asili ya Mungu isiyo na kikomo, na majina kama 'Parabrahma' yanasisitiza ukuu wa Mungu juu ya Atma, ambaye hutekeleza majukumu mbalimbali. Zaidi ya hayo, neno 'Paramatma' linaangazia tofauti ya Mungu kutoka kwa Atma, na 'Purushottama' inaashiria ukuu wa Mungu ikilinganishwa na Jeevatma na Atma. Ni afadhali kukiri kwamba wewe wala mimi hatujui lolote kuhusu Mungu.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 80,
verse: ` <b>(2) 	Injili ya Yohana, sura ya 1, mstari wa 9.</b>`,
meaning: `<b>
(1:9) Nuru ya kweli itiayo nuru kila mtu ilikuwa ikija katika ulimwengu.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ikiwa kuna mwanga katika ulimwengu wa nje, ni kwa sababu ya moto unaowaka. Hata hivyo, katika muktadha huu, nuru ya kweli imetajwa katika aya hiyo. Nuru ya kweli huwashwa bila moto na inaingia kwa kila mwanadamu, ikimulika mwili mzima kuanzia kichwani hadi miguuni. Kuna nuru moja tu kama hiyo bila moto, nayo ni Atma, ambayo inatoka kwa Mungu na imeteuliwa na Mungu (Muumba). Atma hutoa mwanga wa fahamu kwa mwili mzima. Atma inapoingia mwilini, seli trilioni 25 za mwili wa mwanadamu hujazwa na mwanga wake. Kila seli inakuwa taa inayowaka bila moto. Nuru ya taa ina joto maalum. Joto la mwili wa binadamu ni&nbsp;98.4 &deg; F kwa sababu ya mwanga wa Atma. Wakati Atma inapoacha mwili, mwili huwa baridi bila joto lolote. Mwili usio na mwanga wa Atma unaitwa maiti. Katika mstari wa 24:35, inasemwa,<strong>"Atma ni nuru, na mwili ni mahali pazuri."</strong>Inaweza kusema kuwa Atma, ambayo huangaza mwili, inaweza kuitwa mwanga wa kweli.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 81,
verse: ` <b>(3)	Injili ya Yohana, sura ya 1, mstari wa 10.</b>`,
meaning: ` <b>
(1:10) Alikuwako ulimwenguni, hata kwa yeye ulimwengu uliumbwa, lakini ulimwengu haukumtambua.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Neno 'Loka (Ulimwengu)' katika Kitelugu hurejelea kitu ambacho hupitia uzoefu. Atma iko kwa wanadamu ambao hupitia uzoefu, na ndiye muumbaji wa wanadamu wote. Walakini, ni muhimu kutambua tofauti kati ya Atma na Mungu. Mungu aliumba Atma, na Atma, kwa upande wake, aliumba wanadamu. Ni muhimu kuelewa kwamba Mungu hakuwaumba wanadamu moja kwa moja; badala yake, Aliunda Prapancha nzima, mwanzoni bila ya kiumbe chochote kilicho hai. Mungu kwanza alileta Prakruti na kisha akampa Atma uwezo wa kuzalisha, kutawala, na kukomesha maisha ya binadamu. Tangu wakati huo, Atma imekuwa mfululizo kuwaumba wanadamu, wakifanya kazi kama mwanga endelevu wa maisha ya mwanadamu, na kuandaa michakato ya kifo na kuzaliwa upya. Licha ya hayo, mara nyingi wanadamu hubakia kutojali uwepo wa Atma, ambayo iko karibu na ndani yao na kimsingi ni Mungu. Atma huzaa wanadamu; kwa hivyo Atma ndiye Baba kwa wanadamu. Mungu aliumba Atma; kwa hiyo Yeye ni Baba kwa Atma. Ingawa Atma wakati mwingine huitwa Mungu, Mungu wa kweli ni Roho Mtakatifu, wakati Atma ndiye Baba wa wanadamu.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 82,
verse: ` <b>(4)	Injili ya Yohana, sura ya 1, mstari wa 11.</b>`,
meaning: `  <b>
(1:11) Alikuja katika mali yake, lakini walio wake hawakumpokea.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Neno “Wake Mwenyewe” linajumuisha wale wote aliowaumba. Atma, akitenda kulingana na amri ya Roho Mtakatifu, aliwafanya wanadamu kuwapo, na kuwadhihirisha katika umbo la hekima ya kimungu, inayorejelewa kuwa Neno. Ingawa Atma alikuja kwa wanadamu kwa njia ya hekima, wanadamu huwa na mtazamo wa ujuzi wao wenyewe kama muhimu, mara nyingi hupuuza au kupuuza hekima iliyotolewa.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 83,
verse: `  <b>(5)	Injili ya Yohana, sura ya 1, mstari wa 12. </b>`,
meaning: `<b>
(1:12) Bali wote waliompokea aliwapa uwezo wa kufanyika watoto wa Mungu, ndio wale waliaminio jina lake.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wale wanaofahamu hekima inayotolewa na Atma watakumbatia Atma. Wale ambao wanafahamu hekima ya Atma na wana imani katika Atma wana matarajio ya kuwa warithi wa Atma. Kwa hiyo, mstari huo unasisitiza, “Alitoa uwezo wa kufanyika watoto wa Mungu.” Neno “watoto wa Mungu” linamaanisha wale wanaofahamu hekima ya Atma.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 84,
verse: ` <b>(6)	Injili ya Yohana, sura ya 1, mstari wa 13.</b>`,
meaning: `<b>
(1:13) Watu waliozaliwa si kwa jinsi ya asili, wala si kwa uamuzi wa kibinadamu, wala kwa mapenzi ya mume, bali waliozaliwa na Mungu.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wanadamu wote wanatoka Atma. Hawakuzaliwa kwa damu ya wanawake wala kwa mapenzi ya mwanamume au mwanamke.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 85,
verse: `<b>(7)	Injili ya Yohana, sura ya 1, mstari wa 14.</b>`,
meaning: ` <b>
(1:14) Naye Neno alifanyika mwili, akakaa kwetu. Tumeuona utukufu wake, utukufu wa Mwana pekee aliyetoka kwa Baba, amejaa neema na kweli.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mungu Atma (Hekima) alichukua umbo la kimwili, linalofanana na lile la mwanadamu, na akaishi kati ya wanadamu, akiangaza neema na hekima.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 86,
verse: `  <b>(8) Injili ya Yohana, sura ya 1, mstari wa 18.</b>`,
meaning: ` <b>
(1:18) Hakuna mtu aliyemwona Mungu wakati wo wote; Mwana pekee, aliye katika kifua cha Baba, alimfunua. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Neno 'Mungu' linatumika kwa Atma na Paramatma. Katika maandiko ya mwisho ya kiungu, neno 'Allah' linatumika kwa Miungu yote miwili - Atma na Paramatma. Kwa hiyo, Waislamu hawakuweza kutambua Miungu wawili. Ili kuepuka kosa hili, Biblia inasema kwamba Atma ni Baba, na Paramatma ni Roho Mtakatifu. Neno 'Mwana mzaliwa' linamaanisha <strong>mwana pekee aliyeumbwa na Mungu</strong>. Paramatma (Roho Mtakatifu) ni wa milele. Baada ya kuunda Prakruti hapo mwanzo, Paramatma iliunda mwana aitwaye Atma kuleta viumbe hai vyote kuwepo. Atma aliumba viumbe vyote vilivyo hai kulingana na amri za Roho Mtakatifu. Kwa hiyo, kuna Baba mmoja tu (Mungu aliyeumbwa) kwa viumbe vyote vilivyo hai. Baba wa Atma aliyeumbwa ni Roho Mtakatifu. "<strong>Hakuna mtu ambaye amewahi kumuona Mungu (Roho Mtakatifu au Paramatma),&rdquo;</strong>kama ilivyoelezwa katika aya. Mungu (Roho Mtakatifu) hana umbo, jina, au kazi; kwa hivyo, hakuna mtu ambaye amewahi kuona Paramatma. Atma, Mwana wa pekee, anamfunua Mungu asiyeonekana kupitia hekima yake. Atma ndiye Mwana pekee aliyetenganishwa na moyo wa Mungu Mkuu, Paramatma. Kwa sababu hakuna mtu ambaye amemwona Roho Mtakatifu, ni Atma pekee anayeweza kusema juu ya Baba yake, Roho Mtakatifu.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 87,
verse: ` <b>(9)	Injili ya Yohana, sura ya 1, mstari wa 51.</b>`,
meaning: `<b>
(1:51) Kisha akaongeza, Amin, amin, nawaambia, mtaona mbingu zinafunguka, na malaika wa Mungu wakipanda na kushuka juu ya Mwana wa Adamu.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hili ndilo neno ambalo Yesu alimwambia Nathanaeli Mwenyewe. Yesu alidai kuwa Mwana wa Adamu, ingawa Nathanaeli alikuwa amemtaja kuwa Mwana wa Mungu. Yesu hakukana kuwa Mwana wa Mungu lakini badala yake alijipunguza kuwa Mwana wa Adamu. Alimhakikishia Nathanaeli na wengine kwamba wangeshuhudia matukio ya ajabu. Kama vile tumekazia hapo awali, watumishi wa Mungu, malaika, wanatumikia wakiwa watawala katika ulimwengu wa wanadamu. Malaika hawa, ambao mara nyingi huitwa Bhutas na Sayari (Grahas), ni wengi angani, na jumla ya mabilioni. Wakati wa kukutana na Yesu, watumishi wa Mungu, wakijua utambulisho Wake, walishuka kutoka mbinguni na kusujudu mbele zake. Hata hivyo, wanadamu wengi hubaki bila kumjua Yesu ni nani hasa na hawasujudu mbele zake. Marejeo sawa yanapatikana katika Quran, andiko la mwisho la kimungu, haswa katika aya 15:28, 15:29, na 15:30. Katika mstari uliotajwa, imetabiriwa kwamba Nathanaeli angeshuhudia uwepo wa Bhutas na Grahas karibu na Mwana wa Adamu, kana kwamba milango ya anga imefunguliwa. Maneno ‘kupanda na kushuka’ yanamaanisha kuja na kwenda, huku ‘kushuka juu ya Mwana wa Adamu’ kumaanisha malaika kuwasili kwa Yesu. Nathanaeli alipomkubali Yesu kuwa Mwana wa Mungu, Yesu, akitambua maono ya hekima ya Nathanaeli, alimhakikishia katika mstari wa 50 kwamba angeshuhudia matukio makubwa zaidi. Kifungu cha 51 inafuata, ikionyesha kwamba Nathanaeli, akiwa na maono ya hekima, angeweza kuona mambo zaidi ya macho ya kawaida ya wengine. Matukio yanayofafanuliwa katika mstari wa 51 yanaonekana tu na wale walio na hekima ya kimungu, yakiwapa ufahamu wa kweli kuhusu utambulisho wa kweli wa Yesu.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 88,
verse: `<b>(10)	Injili ya Yohana, sura ya 3, mstari wa 3.</b>`,
meaning: ` <b>
(3:3) Yesu akajibu, Amin, amin, nakuambia, hakuna mtu awezaye kuuona ufalme wa Mungu isipokuwa amezaliwa mara ya pili.       </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mstari huo haupaswi kufasiriwa kihalisi, kwani unabeba maana ya kina zaidi ya ishara. Mungu na ufalme wake ni zaidi ya kuonekana kimwili kwa mtu yeyote. Yesu alieleza kwa uwazi kwamba kuelewa na kuuona ufalme wa Mungu kunahitaji kuzaliwa upya kiroho. Hii haimaanishi kifo cha kimwili na kuzaliwa upya baadae. Ikiwa inachukuliwa kihalisi, ingemaanisha kwamba yeyote anayetafuta kumjua Mungu angehitaji kufa kimwili, jambo ambalo ni kutoelewana. Nikodemo, ambaye alishikilia tafsiri halisi, aliuliza swali kulingana na maoni haya yasiyofaa.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 89,
verse: `<b>(11)	Injili ya Yohana, sura ya 3, 4, 5, 6, 7, na 8 mistari..</b>`,
meaning: `<b>
(3:4) “Mtu awezaje kuzaliwa akiwa mzee?” Nikodemo aliuliza. “Hakika hawawezi kuingia tumboni mwa mama yao mara ya pili ili kuzaliwa!
<br><br>
(3:5) Yesu akajibu, “Kweli nawaambieni, hakuna mtu awezaye kuingia katika ufalme wa Mungu isipokuwa amezaliwa kwa maji na kwa Roho (Atma).
<br><br>
(3:6) Mwili huzaa mwili, lakini Roho (Atma) huzaa roho.
<br><br>
(3:7) Hupaswi kushangazwa na kusema kwangu, “Lazima uzaliwe mara ya pili.”
<br><br>
(3:8) Upepo huvuma popote unapotaka. Unaisikia sauti yake, lakini huwezi kujua inatoka wapi wala inakokwenda. Hivyo ndivyo ilivyo kwa kila mtu aliyezaliwa kwa Roho (Atma).” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mwanadamu anapokufa na kuzaliwa upya, inaitwa kuzaliwa upya. Ikiwa kuzaliwa upya hutokea kimwili, viungo vyote vya mtu vitabadilika. Hilo likitokea, hamu ya kumwona Mungu na ufalme wa Mungu pia itatoweka. Mwili usife ili kuweka viungo na matamanio jinsi yalivyo. Mwili una hekima na ujinga, lakini ujinga katika mwili unapaswa kufa kabisa. Mtu anapoondoa mawazo na matamanio ya ujinga, anachukuliwa kuwa amekufa kwa ujinga na amezaliwa na hekima. Mtu anayeondoa ujinga na kupata hekima anaweza kusemwa kuwa amezaliwa na Atma.<strong>Wajibu wa mwanadamu ni kumjua Atma</strong><strong>katika mwili</strong>. Ili kujua Atma, mtu lazima ajue hekima ya Atma. Wakati mtu anajua hekima ya Atma, anachukuliwa kuwa mzaliwa wa Atma. Mwili unapokufa, mtu anapata mwili mpya, lakini kubadilisha mapenzi katika mwili huo huo bila kupata mwili mpya ni sawa na kuzaliwa upya. Upepo huvuma popote unapotaka, na tunasikia sauti yake kulingana na mahali unapovuma. Upepo unapobadilisha mwelekeo wake, ikiwa mtu atabadilisha kusudi lake, itakuwa kuzaliwa upya kwake. Anayetamani Atma anajua Atma katika mwili sawa na maisha sawa. Hakuna haja ya kwenda kwenye maisha mengine kumjua Atma.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 90,
verse: `<b>(12)	Injili ya Yohana, sura ya 3, mstari wa 13. </b>`,
meaning: `<b>
(3:13) Hakuna mtu ambaye amewahi kuingia Paraloka isipokuwa yule aliyetoka Paraloka—Mwana wa Adamu.</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ihaloka, Mbinguni (Swarga-Loka), Kuzimu (Naraka-Loka), na Paraloka ni majina ya ulimwengu nne. Ulimwengu (Loka) tunamoishi sote unaitwa Ihaloka. Mbingu na kuzimu si ulimwengu tofauti; wote wawili wako duniani. Loka si ufalme wala eneo. Mahali na wakati wa uzoefu pamoja huitwa loka. Mahali ambapo mtu hupitia magumu panaitwa Yamaloka, Naraka-Loka, au kuzimu. Vile vile, mahali ambapo mtu hupata furaha huitwa Swarga-Loka au mbinguni. Kwa kuwa matukio haya yote mawili hutokea duniani, inaweza kusemwa kwamba ulimwengu huu (Ihaloka) ni mbinguni na kuzimu. Hata hivyo, Paraloka ni tofauti na kuzimu na mbinguni. Wakati wote kuzimu na mbinguni kuhusisha uzoefu, Paraloka hana uzoefu wowote. Hali ambayo hakuna uzoefu inaitwa Paraloka. Wakati mtu anavuka karma, hawana uzoefu wa furaha au huzuni na kuingia Paraloka. Inaitwa hali ya kuwa kitu kimoja na Mungu, Mukti, au Moksham. Mtu katika Ihaloka daima amefungwa na dhambi na punya karma. Yeyote aliye katika Paraloka hana karma yoyote. Ikiwa mtu anakufa huko Ihaloka, hawezi kwenda Paraloka lakini kurudi Ihaloka. Kwa upande mwingine, mtu katika Paraloka, wakati anakuja katika ulimwengu huu kwa umuhimu wowote, anarudi Paraloka. Kwa hivyo, ingawa mkazi wa Paraloka aliyetoka Paraloka anakaa katika ulimwengu huu kwa muda kulingana na mapenzi Yake, baadaye ataingia Paraloka. Kwa hivyo, aya " <strong>Hakuna mtu aliyewahi kuingia Paraloka isipokuwa Mwana wa Adamu ambaye yuko Paraloka</strong>&rdquo; inadokeza kwamba aliye katika Paraloka ni Mungu. Hata ikiwa mtu ambaye alikuja kuwa Mungu atazaliwa kama mwanadamu, Atarudi Paraloka. Jambo hilo hilo linaonyeshwa katika Yohana 3:13.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 91,
verse: ` <b>(13)	Injili ya Yohana, sura ya 3, mstari wa 15.</b>`,
meaning: `<b>
(3:15) Ili kila anayemwamini asipotee bali awe na uzima wa milele.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kila mtu anayemwamini Mungu atapata uzima wa milele bila kufa. Hata hivyo, imeandikwa kwamba, &ldquo;Uzima wa milele u katika yeye peke yake.&rdquo; Paramatma ipo ndani na nje ya mwili. <strong>Jeevatma inapoungana na Paramatma,</strong><strong>inaelezwa kuwa Jeevatma imepata Paraloka, inayotambulika pia kama ufalme wa Mungu</strong>. Inaweza pia kuelezewa kuwa Jeevatma amepata uzima wa milele (moksham). Mstari huo unatangaza, "Yeyote anayemwamini Mungu hatimaye atakombolewa kutoka kwa karma na kupokea uzima wa milele." Paraloka, inayowakilisha uzima wa milele, inaenea kila mahali, bila kujali eneo la kimwili la mtu. Kwa hivyo, yeyote anayefanikisha moksham anaungana na Roho Mtakatifu (Paramatma) ndani ya miili yao.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 92,
verse: `<b>(14)	Injili ya Yohana, sura ya 3, mstari wa 17.</b>`,
meaning: `<b>
 (3:17) Maana Mungu hakumtuma Mwana ulimwenguni ili auhukumu ulimwengu, bali ulimwengu uokolewe katika yeye.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mungu alimtuma Mwana wake duniani akiwa mwanadamu ili kuwaokoa wanadamu, wala si kuwahukumu. Wajibu wa mtu aliyetoka kwa Mungu ni kufundisha hekima ya Mungu kwa wanadamu na kuwaokoa kutoka kwa dhambi zao. Hakuja kuhukumu dhambi na punya za wanadamu. Mungu hakutuma mwakilishi wake duniani kwa ajili ya hukumu; badala yake, Alikuja kuokoa watu. Mstari huu ni muhimu katika Biblia. Atma humhukumu mtu anapokufa. Yule aliyetoka kwa Mungu huwafundisha wanadamu jinsi ya kutoroka kutoka kwa karma, wakati Atma hufanya kazi ya kuwahukumu.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 93,
verse: `<b>(15)	Injili ya Yohana, sura ya 3, mstari wa 18. </b>`,
meaning: `<b>
(3:18) Kila amwaminiye yeye hahukumiwi; lakini asiyemwamini amekwisha kuhukumiwa kwa sababu hakuliamini jina la Mwana pekee wa Mungu.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mstari huo unasema, &ldquo;Anayemwamini,&rdquo; ambayo inarejelea ama Mungu asiyeonekana au mwakilishi wa Mungu anayeonekana aliyetoka kwa Mungu. Mstari huo pia unasema, &ldquo;Hawakuamini jina la Mwana pekee wa Mungu,&rdquo; jambo linalodokeza kwamba linapaswa kueleweka kuwa linarejelea mwakilishi wa Mungu aliyetoka kwa Mungu. Mungu Mwenyewe alikuja duniani akiwa amejificha kama mwanadamu ili kuwafundisha wanadamu hekima. Yesu alisema, &ldquo;<strong>Mimi ni Mwana wa Mungu, au Mwana wa Adamu, au Mwana wa pekee wa Mungu</strong>,&rdquo; ili yasitambulike. Katika Uhindu, Mungu anaitwa Bhagavan anapojibadilisha na kuja duniani kama mwanadamu. Krishna ndiye aliyekuja hivyo; kwa hiyo Anaitwa Bhagavan katika Bhagavad-Gita. Ingawa Yesu, ambaye ni Mwana wa Mungu, alionekana kama mwanadamu, Anapaswa pia kuitwa Bhagavan. Mungu anapopata mwili kama mwanadamu duniani, Wahindu humwita Bhagavan, na Wakristo humwita Mwana wa Adamu. Ingawa inasemwa katika andiko la mwisho la kimungu (15:28, 29, 30) kwamba <strong>Mungu hutuma mwakilishi wake kwa kumpulizia roho yake</strong>, Waislamu wanaamini kwamba Mungu haji kama mwanadamu. Yeyote asiye na imani katika mwakilishi wa Mungu, Mwana wa Mungu, amekwisha kuhukumiwa.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 94,
verse: `<b>(16) Injili ya Yohana, sura ya 3, 19, 20, 21 mistari.</b>`,
meaning: ` <b>
(3:19) Hukumu ndiyo hii: Nuru imekuja ulimwenguni, lakini watu wakapenda giza badala ya nuru kwa sababu matendo yao yalikuwa maovu.
<br><br>
(3:20) Kila mtu atendaye maovu anaichukia nuru, wala haingii kwenye nuru kwa kuogopa kwamba matendo yao yatafichuliwa.
<br><br>
(3:21) Lakini yeyote anayeishi katika ukweli huja kwenye nuru, ili ionekane wazi kwamba yale waliyoyafanya yametendwa mbele ya Mungu. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma, ambayo bado haijulikani kwa mtu yeyote, inaashiria giza. Atma, iliyoletwa na Paramatma, inajumuisha nuru ya kweli. Paramatma imeunda Wana wawili: Atma isiyoonekana, inayotumika kama nuru ndani ya mwili, na Atma nyingine ambayo inafanyika kama mwanadamu kati ya wanadamu. Ingawa Atma, isiyoonekana na inayoangazia mwili, inarejelewa kuwa Mwana, Mwana mwingine wa Mungu, anayejidhihirisha kama mwanadamu, anaitwa kwa njia tofauti.<strong>Mwana pekee</strong>. Yesu, Mwana pekee, alishuka duniani. Hata hivyo, kwa sababu ya matendo yao maovu, watu walithamini giza lao wenyewe na walijiepusha kumkaribia Yesu, nuru ya hekima.

  Kila mtu asiye na ujuzi ana chuki dhidi ya mwakilishi wa Mungu anayeleta<strong>mwanga wa hekima</strong>kwa ulimwengu. Wanaogopa kwamba matendo yao maovu yatafichuliwa mbele ya mwakilishi wa Mungu, na kuwaongoza kuiacha nuru na kuficha matendo yao. Wale wanaotazamia kwamba nuru ya Mungu, ikichukua umbo la mwanadamu duniani, itafichua matendo yao ya giza kuepuka kuja kwa Mwana wa Mungu atakapotokea. Wale wanaoshikamana na hekima ya Mungu wanaelewa kwamba Atma inawajibika kwa matendo yao yote ndani ya mwili. Wanamkaribia Mwana wa Mungu kwa sababu matendo yao yote yamo ndani<strong>Nuru ya Mungu, ikiongozwa na hekima</strong>. Hata hivyo, ni sehemu ndogo tu ya watu duniani wanaotambua kwamba Atma, ambaye ni Mungu, ndiye anayewajibika kwa matendo yao yote. Kwa hiyo, ni idadi ndogo tu inayomkaribia Mwana wa Mungu anapotokea. Kwa kuwa dunia ina watu ambao wanaamini kwamba wanawajibika tu kwa matendo yao, wanaepuka kumtafuta Mwana wa Mungu. Sio tu kwamba wanamweka mbali Mwana wa Mungu, bali pia wana chuki na kuleta ugumu kwa mwakilishi wa Mungu, ambaye mara chache hujidhihirisha duniani. Wanamdhihaki Mwana wa Mungu, wakimtia chini ya dhiki nyingi.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 95,
verse: ` <b>(17)	Injili ya Yohana, sura ya 5, mstari wa 19.</b>`,
meaning: ` <b>
(5:19) Yesu akawapa jibu hili: “Amin, amin, nawaambia, Mwana hawezi kufanya neno peke yake; Anaweza tu yale anayomwona Baba yake akiyafanya, kwa maana yote ayatendayo Baba, Mwana pia anayafanya.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika mstari huu, kutajwa kwa &lsquo;Baba na Mwana&rsquo; kunaambatana na usemi kwamba &ldquo;Mwana atafanya mambo ambayo Baba hufanya.&rdquo; Ni muhimu kutambua utambulisho wa Baba na Mwana, ikizingatiwa kwamba Roho Mtakatifu (Mungu) ndiye pekee. Ingawa Mungu ana Mwana mmoja wa milele, pia kuna Mwana mwingine ambaye mara kwa mara anapata mwili duniani. Ni muhimu kujua ni Mwana yupi mstari unazungumza naye. Yohana 3:17 inasisitiza, &ldquo;<strong>Kwa maana Mungu hakumtuma Mwana ulimwenguni ili auhukumu ulimwengu, bali ulimwengu uokolewe katika yeye</strong>,&rdquo; akimaanisha mwana wa Mungu, anayedhihirisha Dunia moja. Mstari huu (5:19) unarejelea Mwana, Atma, ambaye hutumika kama nuru ndani ya mwili wa mwanadamu. Atma ni ya milele duniani, inatoa ' <strong>mwanga wa uhamaji</strong>' kwa mwili wa kila mtu. Kulingana na hili, hasa wakati wa kusoma mstari, mtu anapaswa kuamua ni nani kati ya wana wawili ambao Mungu, Roho Mtakatifu, amezungumza juu yake katika mstari huo. Yohana 5:19 inamtaja Atma kama mwana wa milele wa Mungu, ikisema kwamba Atma huakisi matendo ya Roho Mtakatifu na hujishughulisha pekee na kazi zilizorithiwa kutoka kwa Baba, bila kufanya chochote kwa kujitegemea.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 96,
verse: `<b>(18)	Injili ya Yohana, sura ya 5, mstari wa 20.</b>`,
meaning: ` <b>
(5:20) Kwa maana Baba anampenda Mwana na kumwonyesha yote anayofanya. Naam, naye atamwonyesha hata kazi kubwa kuliko hizi, hata mtastaajabu. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Tunapouliza nani alisema, "<strong>Paramatma (Roho Mtakatifu) anampenda Mwana na kumwonyesha yote anayofanya</strong>,&rdquo; tunaona kwamba Yesu, Mwana wa pili wa Mungu, aliwaambia wanafunzi Wake maneno hayo alipokuwa duniani. Hakuna aliyeweza kumtambua Mwana wa Mungu kikamili Alipotembea kati ya wanadamu kama mwanadamu. Licha ya mafundisho na miujiza yake, baadhi yao walimtesa na kumfedhehesha sana, na hatimaye kupelekea kifo chake. Hata hivyo, Mwana wa pekee wa Mungu, aitwaye Yesu, alikuwa katikati yao na kusema, &ldquo;<strong>Baba atamwonyesha (Atma) kazi kubwa zaidi kuliko hizi ili mshangae</strong>.&rdquo; Mungu alimwamuru Atma kutawala juu ya Jeevas na kuonyesha mambo makubwa zaidi. Hebu sasa tuchunguze mambo hayo makuu ni nini.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 97,
verse: `<b>(19)	Injili ya Yohana, sura ya 5, mistari ya 21, ya 22, ya 23. </b>`,
meaning: `<b>
(5:21) Kwa maana kama vile Baba huwafufua wafu na kuwapa uzima, vivyo hivyo Mwana huwapa uzima wale ambao amependa kuwapa.
<br><br>
(5:22) Zaidi ya hayo, Baba hamhukumu yeyote, bali amekabidhi hukumu yote kwa Mwana.
<br><br>
(5:23) Ili wote wamheshimu Mwana kama vile wanavyomheshimu Baba. Yeyote asiyemheshimu Mwana hamheshimu Baba aliyemtuma.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuna jambo la kukumbukwa hapa. Ingawa kuna kutajwa kwa ' <strong>Mwenyezi Mungu wawili</strong>Katika Quran, Waislamu hawakuweza kuipata. Vile vile, kuna kutajwa kwa '<strong>Wana wawili</strong>&rsquo; katika Biblia, lakini Wakristo hawakuweza kuielewa na kuzungumza juu ya Mwana mmoja tu. Mistari hiyo yote mitatu ina neno 'Mwana.' Mtu anahitaji kuamua ni yupi kati ya Wana wawili aliyetajwa katika aya hizi. Wengi hawawezi kufahamu kwamba kuna Mwana wa pili kwa sababu Mwana mmoja tu ndiye anayetajwa katika mistari hiyo. Mungu alisema, &ldquo;<strong>Kwa maana Mungu hakumtuma Mwana ulimwenguni ili auhukumu ulimwengu, bali ulimwengu uokolewe katika yeye&rdquo; katika Yohana 3:17, na &ldquo;Baba amempa Mwana hukumu yote&rdquo; katika Yohana 5:22</strong>. Kulingana na hili, mtu anapaswa kuelewa kwamba Mungu ana Wana wawili.

  Mungu alisema kuhusu Atma, &ldquo;Kama vile Baba, Roho Mtakatifu, anavyowafufua wafu na kuwapa uzima, Mwana pia huwafufua wafu na kuwahuisha.&rdquo; Kama vile Baba huwafufua wafu na kuwapa uzima, Atma huamua uzoefu wa maisha ya pili ya mtu baada ya kifo kulingana na dhambi zao za maisha ya zamani na punya. Kwa hiyo, &ldquo;Kama Baba, Mwana huwapa uzima wale awapendao,&rdquo; inasemwa katika mstari huo. " <strong>Anayempenda</strong>&rdquo; maana yake &ldquo;<strong>wale ambao wamedhamiriwa na karma</strong>&rdquo; kutoka kwa mtazamo wa Atma. Kama vile Atma ni nuru iliyofichwa katika mwili ambayo huamua karma ya maisha yajayo ya mtu, "Yeye atamfufua Aliyemhukumu,&rdquo; imesemwa katika Aya hiyo. &ldquo;Kufufua&rdquo; kunamaanisha &ldquo;kuzaliwa tena.&rdquo;

  Mungu alimpa Atma uwezo wa kuhukumu wafu na kuwarudisha kwenye uhai ili kila mtu aweze kumtukuza Mwana wake, Atma, kama vile kila mtu anavyomtukuza Roho Mtakatifu kuwa Mungu mkuu. Wakati huo huo wa kifo cha mtu, Atma, nuru katika mwili, huamua karma yao kwa maisha ya pili kulingana na dhambi zao za maisha ya zamani na punya na mara moja huwapeleka kwenye maisha ya pili. Atma anaamua maisha ya pili kulingana na karma ya mtu na kuwapa maisha tena. Wale ambao hawajui kuwa Atma anafanya mambo makubwa kama haya hawaoni Atma kwa heshima kubwa. Asiyemheshimu Atma hatamheshimu Mungu aliyemtuma Atma. Ujinga kama huo hauheshimu Atma, iliyo ndani ya mwili, au Paramatma, iliyo ndani na nje ya mwili.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 98,
verse: `<b>(20)	Injili ya Yohana, sura ya 5, mstari wa 24.</b>`,
meaning: ` <b>
(5:24) Amin, amin, nawaambia, Kila alisikiaye neno langu na kumwamini yeye aliyenipeleka yuna uzima wa milele; wala hatahukumiwa; bali amevuka kutoka mautini kuingia uzimani. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hapo awali, mistari 5:21, 5:22, na 5:23 ilizungumzia Nafsi. (Atma), ambaye ni uhamaji katika mwili. Mstari wa 5:24 unasema juu ya Nafsi, ambayo ilikuja katika umbo la mwanadamu kwa jina Yesu. Yeyote anayemwamini Roho Mtakatifu, aliyemtuma Yesu, Mwana pekee, atapata moksham. Mtu kama huyo anapata moksham bila kuhukumiwa mara baada ya kifo chao.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 99,
verse: ` <b>(21)	Injili ya Yohana, sura ya 5, mstari wa 26.</b>`,
meaning: ` <b>
(5:26) Kwa maana kama vile Baba ana uzima ndani yake, vivyo hivyo amemjalia Mwana pia kuwa na uzima ndani yake mwenyewe.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mungu, Roho Mtakatifu, ni wa milele milele. Kama vile Paramatma ni ya milele, Atma, mwanawe, amepewa mamlaka ya kuwa wa milele milele. Roho Mtakatifu, Baba wa Atma, alimpa mamlaka hayo. Katika andiko la kwanza la kimungu linapolinganisha Jeevatma na Atma, Jeevatma inarejelewa kama Kshara (Nafsi inayoharibika), huku Atma ikitajwa kuwa Akshara (Nafsi Isiyoharibika).
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 100,
verse: ` <b>(22)	Injili ya Yohana, sura ya 5, mstari wa 37.</b>`,
meaning: `<b>
(5:37) Hujapata kusikia sauti yake wala kuona sura yake.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika muktadha huu, 'Yake' inarejelea Paramatma (Roho Mtakatifu). Mungu, anayejulikana kama Paramatma au Roho Mtakatifu, hana jina, umbo, au kazi mahususi. Hakuna aliyemshuhudia Mungu kama huyo kwa sababu hana umbo linaloweza kutambulika. Kwa hiyo, hakuna mwanadamu ambaye amewahi kumtazama Mungu. Mungu hawasiliani na mtu yeyote kwa vile anabaki bila kutenda. Kwa hiyo, inaweza kuthibitishwa kwamba hakuna mtu aliye hai ambaye amemwona Mungu kweli. Madai yoyote ya kuwa umemshuhudia Mungu yanaweza kuchukuliwa kuwa ya uwongo. Mungu haonekani wala hana sauti.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 101,
verse: `<b>(23)	Injili ya Yohana, sura ya 5, aya ya 38. </b>`,
meaning: `<b>
(5:38) Wala neno lake halikai ndani yenu, kwani nyinyi hamumuamini Aliyemtuma.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ingawa muumba wa kwanza, Roho Mtakatifu, hashiriki kikamilifu katika kazi, kuna majukumu fulani ambayo yanaangukia ndani ya milki Yake. Hata hivyo, Yeye hujiepusha na kitendo cha moja kwa moja. Badala yake, Mungu, Paramatma, amewapa watumishi Wake kufanya kazi Yake. Hawa mamilioni ya watumishi wanaunda milki Yake na kutekeleza kazi zote alizopangiwa Yeye. Ingawa Mungu Mwenyewe anabaki kutofanya kazi, watumishi Wake wanatimiza majukumu Anayopaswa kufanya.

  Paramatma, hata hivyo, ina kazi muhimu iliyopo - kutoa hekima ya kimungu. Mungu Mwenyewe anahitajika kwa kazi hii, kwani watumishi wake hawawezi kuifanya. Maandiko ya mwisho yanasema, "<strong>Mungu anapaswa kufundisha hekima ya Mungu kwa sababu hakuna mwanadamu anayejua hekima ya Mungu isipokuwa Mungu</strong>.&rdquo; Kwa kujificha, Mungu huja kufundisha hekima ya Mungu. Ingawa Anazungumza kwa kujificha, utambulisho Wake bado haujulikani, kwani hakuna anayeweza kumtambua aliyejificha. Licha ya Mungu kutoa hekima yake, mara nyingi haitambuliki kama maneno Yake. Kwa vile Mungu ni mwenye hekima, anajifanya kuwa '<strong>Bhagavan</strong>' na hutoa hekima.

  Hata Mungu anapokuja kibinafsi duniani akiwa amejigeuza kuwa mwanadamu ili kufundisha hekima, Yeye pia anatabiri kutuma mtu wa pekee ambaye utambulisho wake wa kweli hautajulikana. &ldquo;Yeye atokaye kwa Mungu atafundisha hekima ya Mungu,&rdquo; Mungu Mwenyewe alitangaza katika maandiko yake matakatifu. Kwa hiyo, kila mtu anatazamia kwamba yule aliyetumwa kutoka kwa Mungu atafikisha hekima ya Mungu. Hivyo, kupata mwili kwa Mungu kunabaki kufichwa kwa wote. Ingawa Mungu alikuja duniani kama mwanadamu wakati wa Treta Yuga, hakuna mtu aliyemtambua. Wakati wa Yuga ya Dvapara, Mungu alikuja kama mwanadamu na kutoa mafundisho ya Bhagavad-Gita, hata kutangaza.<strong>" mimi ni Mungu&rdquo;</strong>katika Bhagavad-Gita, lakini hakuna aliyemtambua. Vile vile, Mungu alipopata mwili kama Yesu katika Kali Yuga, hakuna aliyemtambua, na kumsababishia changamoto nyingi. Hakuna aliyetambua kwamba Alikuwa Mungu halisi. Baadhi ya waliodai kuwa waumini wa Mungu walidai Yesu alikuwa Mwana wa Adamu, na kushindwa kumkiri kuwa Mungu. Wengine walimtambua Yesu kuwa Mwana wa Mungu lakini bado walikosa kuutambua uungu wake.

  Ingawa Yesu alikuwa Mungu mwenye mwili, Alisema, &ldquo; <strong>Hamkumwamini yule aliyemtuma</strong>&rdquo; katika aya hii bila kudhihirisha utambulisho Wake wa kweli. Alionyesha kwamba watu hawakumwamini mtu aliyetumwa na Mungu, akisema, &ldquo;Neno la Mungu halikuishi ndani yenu.&rdquo; Ikiwa hakuna imani kwa mtu aliyetumwa na Mungu, kwa nini neno la Mungu halisikii kwa wanadamu? Sababu iko katika kutomwamini mjumbe wa Mwenyezi Mungu, ambaye ni Mungu Mwenyewe na mbebaji wake hekima. Kwa hiyo, neno la Mungu halina mizizi ndani ya wale wasio na imani Kwake.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 102,
verse: ` <b>(24)	Injili ya Yohana, sura ya 6, 25, 26, 27 mistari.</b>`,
meaning: ` <b>
(6:25) Walipomkuta ng'ambo ya ziwa, wakamwuliza, Rabi, ulifika hapa lini?
<br><br>
(6:26) Yesu akawajibu, Amin, amin, nawaambia, Mnanitafuta, si kwa sababu mliona ishara nilizozifanya, bali kwa sababu mlikula ile mikate mkashiba.
<br><br>
(6:27 Msitendee kazi chakula chenye kuharibika, bali chakula kidumucho hata uzima wa milele, ambacho Mwana wa Adamu atawapa. Kwa maana juu yake Mungu Baba ameweka muhuri wake wa kibali.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aya hii inasisitiza aina mbili za vyakula: Chakula kisichoharibika na kisichoharibika. Wanadamu wengi hutafuta chakula chenye kuharibika, kama inavyoonyeshwa wakati umati ulipomkaribia Yesu, ukimuuliza, &ldquo;Ulikuja hapa lini?&rdquo; Yesu akajibu,<strong>"Hutafuti hekima ya Mungu; mnanitafuta, mkitumaini kupata mikate</strong>.&rdquo; Akawashauri zaidi, &ldquo;Msijitaabishe kwa ajili ya chakula chenye kuharibika.&rdquo; Chakula cha kila siku, kinachotumiwa, kumeng'enywa, na kuharibiwa ndani ya saa tatu, iko katika jamii ya chakula kinachoharibika. Usagaji chakula, kimsingi, ni mchakato wa uharibifu, ambapo vyakula vyote vilivyomezwa huvunjwa katika njia ya utumbo na kubadilishwa kuwa taka, kama vile kuchoma kuni ndani ya majivu.

  Kinyume chake, hekima ambayo mtu hupata kupitia masikio yake, ikiingia akilini mwake kwa namna ya maneno, inachukuliwa kuwa chakula kisichoharibika.<strong>Hekima ya Mungu ndiyo chakula pekee kisichoweza kuharibika</strong>.<strong>Kusoma au kusikia hekima ya Mungu ni sawa na kula chakula kisichoharibika kwa akili.</strong>Mwana wa Adamu hutoa chakula hiki kisichoweza kuharibika, kilichoainishwa na mstari, "<strong>Kwa maana juu yake Mungu Baba ameweka muhuri wake wa kibali.</strong>&rdquo; 'Muhuri' maana yake ni kukubalika au uamuzi. Mungu, baada ya kuamua, alimtuma Mwanawe mzaliwa ili kushiriki hekima yake. Neno 'muhuri wa kibali' katika mstari unaashiria uamuzi au ridhaa ya Mungu. Katika Quran, imeelezwa kuwa Mungu hakudhihirisha hekima yake kwa mwanadamu yeyote, na kubainisha kwamba mwenye kutoa hekima ya Mungu si mtu wa kawaida. Mungu alidai kwamba hekima yake inajulikana kwake peke yake, akimaanisha kwamba Mwana mzaliwa ambaye anakuja kufunua hekima ya Mungu ni Mungu Mwenyewe. Maneno &ldquo;Mwana wa Mungu&rdquo; yanaweza kuwapotosha wanadamu, lakini yanaweza kueleweka kuwa &lsquo;Mwana&rsquo; yakimaanisha &ldquo;udhihirisho wa Mungu.&rdquo; Mungu, akichagua kutokuja moja kwa moja kama Mungu kuzungumza na wanadamu, anachukua kivuli cha Mwana. Ufafanuzi huu unaungwa mkono na aya ifuatayo.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 103,
verse: `  <b>(25)	Injili ya Yohana, sura ya 6, mstari wa 32. </b>`,
meaning: ` <b>
(6:32) Yesu akawaambia, Amin, amin, nawaambia, si Musa aliyewapa mkate wa paraloka, bali Baba yangu ndiye awapaye ninyi mkate wa kweli utokao paraloka. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika aya iliyotajwa, Yesu alisema, &ldquo;<strong>Musa hakukupa mkate wa hekima kutoka kwa Paraloka</strong>.&rdquo; Hii inazua maswali: Je, Dharma Shastra iliyofundishwa na Musa ni ya uongo? Je, Dharma Shastra ya Musa inakosa hekima na dharma? Ikiwa kile Musa alichofundisha si mkate wa kweli wa Mungu, kwa nini kinaitwa Dharma Shastra ya Musa? Maswali haya yanazua mazingatio mbalimbali. Kwa upande mmoja, ni uongo kudai kwamba kile Musa alichofundisha si Dharma Shastra. Kwa upande mwingine, kwa kupatana na kauli ya Mungu, inaweza kuthibitishwa kwamba kile Musa alichofundisha si Dharma Shastra. Pia ni sahihi kwamba Musa hakutoa mkate usioharibika kutoka kwa Paraloka. Maswali na mashaka hayo hutokeza, yakitokeza uhitaji wa majibu yanayofaa ili kuelewa hekima ya kweli ya kimungu.

  Nabii Musa anajulikana sana miongoni mwa Wakristo, lakini Waislamu wengi huenda hawajui kwamba jina 'Musa' katika Biblia lilibadilika na kuwa 'Musa' zaidi ya miaka 1400. Ni muhimu kutambua kwamba Moses na Musa, kwa hakika, ni jina moja. Taarifa kwamba Musa hakuwasilisha Dharma Shastra inaweza kuwa ya kweli na ya uwongo, ikileta utata unaovutia na sababu kali, isiyojulikana. Ufunuo huu unaweza kuwashangaza wengine na kukabiliana na kutokubaliana kutoka kwa wengine, lakini ukweli wake unabaki bila maoni. Ni kweli kwamba nabii Musa alikuwepo miaka elfu chache iliyopita. Takriban miaka elfu tano iliyopita, nabii Musa alishiriki hekima aliyokuwa nayo. Nabii, kwa ufafanuzi, ni mtu ambaye hutoa hekima ya Mungu, na Musa alipata cheo hiki kupitia mawazo ya kiungu tangu umri mdogo. Katika umri wa miaka 20,<strong>Bhagavan</strong>, ambaye alikuwa ameshuka duniani, alimpa Musa andiko la kwanza la kimungu, linalojulikana kama '<strong>Taurati</strong>.' Musa aliendelea kushiriki hekima iliyo katika andiko hilo.

  Kwa kuwa ilitokana na dharmas, ilijulikana kama Musa' Dharma Shastra. Musa alifariki akiwa na umri wa miaka 54. Baada ya kifo cha Musa, Bhagavan aliingia kwenye mwili wake na kuwasilisha dharma ambazo Musa hakuwahi kuzizungumzia kwa miaka tisa. Licha ya Bhagavan kuuacha mwili wa Musa akiwa na umri wa miaka 63, ukweli huu haukujulikana, na kusababisha watu kuamini kuwa Nabii Musa aliishi kwa miaka 63 na alifundisha dharmas mwenyewe. Ingawa Mungu alimpa Musa andiko la kimungu, Yeye hakumpa hekima moja kwa moja. Kwa hiyo, maneno, &ldquo;Musa hakupewa mkate kutoka Paraloka,&rdquo; ni ya kweli. Hekima iliyotolewa kupitia mwili wa Musa na Mungu inajulikana kama Musa Dharma Shastra. Hii ndiyo sababu mstari unasema, "Baba wa Paraloka, Roho Mtakatifu, alitoa mkate wa kweli." Muda halisi wa maisha wa Musa ulikuwa miaka 54, na hakuna aliyemjua Mungu huyo kurefusha maisha ya Musa hadi miaka 63. Siri hizi zote zimefafanuliwa katika maandiko yangu,<strong>Krishna Musa</strong>.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 104,
verse: ` <b>(26)	Injili ya Yohana, sura ya 6, mstari wa 46.</b>`,
meaning: `<b>
(6:46) Hakuna aliyemwona Baba ila yeye atokaye kwa Mungu; peke yake ndiye aliyemwona Baba. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuelewa mstari huu si kazi yenye changamoto. Baada ya kusoma Bhagavad-Gita, Biblia, na Kurani kwa ujumla wake, inakuwa dhahiri kwamba aya katika maandiko haya ya mwisho ya kimungu yana maana fiche. Aya za Kurani, hasa, zinashikilia kina kipitacho maandiko mengine ya Mwenyezi Mungu, na kufanya maana zake kuwa ngumu kwa wengi. Ingawa mistari katika Biblia inaweza kuonekana moja kwa moja, ukweli wake wa kweli mara nyingi huepuka kueleweka. Kwa hiyo, Mungu anatoa ufahamu wa kina wa kila mstari kupitia sisi.

  Mungu, anayewakilishwa kama Roho Mtakatifu, yupo kabla na baada ya uumbaji. Yeye ndiye Mungu mkuu. Mwonekano wa kweli au asili ya Mungu bado haijulikani kwa wanadamu. Katika maandiko ya mwisho ya kiungu, Quran, Mungu wa msingi anaitwa Allah, na Mungu wa pili, Atma, pia anajulikana kama Allah. Kwa hivyo, Paramatma ni Mwenyezi Mungu wa kwanza, na Atma ni Mwenyezi Mungu wa pili. Katika andiko la pili la kimungu, Biblia, Paramatma inatajwa kuwa Mungu, na Atma inaitwa Baba. Ni muhimu kutambua kwamba Roho Mtakatifu ndiye Baba wa Atma, na Atma ni Baba wa wanadamu. Quran inathibitisha kwamba Paramatma na Atma zote ni Miungu, wakati Biblia inatofautisha mmoja kama Mungu na mwingine kama Baba. Ni muhimu kuelewa kwamba Baba wa wanadamu ni Atma, na Baba wa Atma ni Roho Mtakatifu. Aya inasisitiza kwamba hakuna mwanadamu aliyemwona Baba (Atma) na asiyejua asili ya Atma.<strong>Walakini, Atma ndiye pekee aliyetoka kwa Mungu na kwa hivyo amemshuhudia Baba yake, Roho Mtakatifu. Kinyume chake, Jeevatma hajawahi kushuhudia Baba yake, Atma.</strong>
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 105,
verse: `<b>(27)	Injili ya Yohana, sura ya 7, aya ya 37 na 38.</b>`,
meaning: ` <b>
(7:37) Siku ya mwisho na iliyo kuu zaidi ya sikukuu, Yesu alisimama na kusema kwa sauti kuu, “Yeyote aliye na kiu na aje kwangu anywe.
<br><br>
(7:38) Aniaminiye mimi, kama yalivyonena Kitabu, mito ya maji yaliyo hai itatoka ndani yake.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aya hiyo ina maana fiche. Kama vile mtu mwenye kiu kwa kawaida hutafuta maji, kufuatilia kwa wale wanaotafuta hekima kunafananishwa na kiu. Aya hiyo inasema, &ldquo;<strong>Yeyote anayeona kiu ya hekima aje kwangu na kukata kiu yake</strong>.&rdquo; Mtu anapomkaribia Yesu na kupokea hekima ya kimungu, ni sawa na kutosheleza wao<strong>kiu ya hekima</strong>kutoka kwa Yesu. Wale wanaomwamini Yesu hupata hekima kamili ya kimungu, na kuwa hazina ya hekima na kuishiriki na wengine. Yesu alitangaza kwamba mito ya maji yaliyo hai ingetiririka kutoka ndani yao. Katika muktadha huu,<strong>maji yaliyo hai yanaashiria hekima ya kimungu</strong>, ambayo huwapa wanadamu moksham (ukombozi) na kuwaweka katika hali ya kudumu. Kwa hiyo, hekima inaitwa maji yaliyo hai. Kama vile wanadamu hutosheleza kiu yao ya kimwili kwa kunywa maji kupitia vinywa vyao, wanapaswa vivyo hivyo<strong>lisha akili zao (buddhi) kwa hekima ya Mwenyezi Mungu kwa kusikiliza kupitia masikio yao.</strong></div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 106,
verse: `<b>(28)	Injili ya Yohana, sura ya 8, mstari wa 12.</b>`,
meaning: ` <b>
(8:12) Yesu alipozungumza tena na watu, alisema, “Mimi ndimi nuru ya ulimwengu. Yeye anifuataye hatakwenda gizani kamwe, bali atakuwa na nuru ya uzima."  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mungu, anayejulikana kama Roho Mtakatifu, aliumba Atma kutekeleza utawala wake na kufanya kazi kupitia wengine. Alimtangaza Atma kuwa mtoto wake na akampa uwezo wa kufanya kazi Zake. Atma alipokea mamlaka ya kuchukua maisha ya wanadamu, akitoa hukumu kulingana na karma yao kutoka kwa kuzaliwa hapo awali, na kuwezesha kuzaliwa kwao upya. Katika jukumu la jaji, Atma hufanya kwa mujibu wa karma ya kila mtu. Kuingizwa kwa binadamu katika karma huathiri mawazo yao, na Atma, akijibu karma hii, hutoa ujinga kama unavyotafutwa na watu binafsi. Kwa hiyo, baada ya muda, adharma huongezeka duniani.

  Roho Mtakatifu, au Mungu, lazima apate mwili Duniani katika umbo la mwanadamu kama Bhagavan ili kuzuia adharma na kukuza dharma wakati adharma inapoibuka kwa sababu ya masilahi ya wanadamu na ujinga unaochochewa na Atma. Mungu anapovaa sura ya mwanadamu, anaitwa Bhagavan. Umwilisho huu unafundisha hekima ya kimungu bila kufichua utambulisho Wake wa kimungu, mara nyingi hujulikana kama Mwana wa Mungu, na Mungu akiwa Baba Yake. Kulingana na mtazamo huu, kuna Mungu mmoja, muumba, ambaye ana Wana wawili&mdash;mmoja akiwa Atma wa kudumu ndani ya wanadamu na mwingine akiwa Mwana wa muda katika umbo la kibinadamu. Wakati Mwana wa kwanza (Atma) ndani ya wanadamu anakuza adharma, Mwana wa pili wa muda, aliyefanyika mwili kama mwanadamu, hutoa dharmas. Hivyo, kuna Mungu mmoja tu mwenye Wana wawili. Mwana katika umbo la Yesu alitangaza, &ldquo;<strong>Mimi ndimi nuru ya ulimwengu</strong>.&rdquo; Hekima inabadilika kuwa moto wa hekima (Gnana Shakti), inayowaka karma ya mwanadamu. Yesu, akijumuisha moto wa hekima, ni nuru ya hekima. Alikuja kufundisha hekima kwa wanadamu, na wale wanaofuata na kuelewa hekima Yake hawatakaa katika ujinga bali katika hekima. Kwa hiyo, Yesu alisema, &ldquo;Yeye anifuataye hatakwenda gizani kamwe, bali atakuwa na nuru ya uzima.&rdquo; Ni Mungu pekee, ambaye anapata mwili katika umbo la mwanadamu, ndiye anayeweza kutoa nuru ya hekima, na kuanzisha dharmas.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 107,
verse: `<b>(29)	Injili ya Yohana, sura ya 8, mstari wa 14.</b>`,
meaning: `<b>
(8:14) Yesu akajibu, "Hata kama ninajishuhudia mwenyewe, ushuhuda wangu ni halali, kwa maana najua nilikotoka na niendako. Lakini hamjui nilikotoka wala niendako. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu, katika sura Yake ya nje, alifanana na mtu wa kawaida asiye na sifa zozote tofauti. Kama watu wanaoishi ndani ya miili iliyotengenezwa na Prakruti, mwonekano wa nje wa kila kiumbe unaonekana sawa. Yesu, pia, alijionyesha kama mwanadamu wa kawaida. Kuna msemo kati ya wazee kwamba hakuna mtu anayejua ni aina gani ya nyoka anayekaa kwenye kilima cha mchwa, ikilinganisha na hali ya kushangaza ya Jeeva ndani ya mwili. Kila Jeeva aliyezaliwa huja kwenye mwili kutoka mahali fulani, akiongozwa na maamuzi ya Atma kulingana na karma yake. Baada ya kukamilisha karma na kifo, Jeeva inaingia mwili mpya chini ya hukumu ya Atma. Licha ya kuishi katika mwili, Jeeva bado haijui asili yake kwa kila kuzaliwa upya. Manas (akili) ni chombo kinachohusika na kukumbuka, lakini pia, hufa kwa kila maisha yanayopita, na kusababisha kupoteza kumbukumbu kutoka kwa kuzaliwa hapo awali. Kwa hivyo, mtu binafsi, sema, akiwa na umri wa miaka 40, anakumbuka tu miaka 40 iliyopita ya kuzaliwa kwa sasa na sio nyingi zilizopita.

  Utaratibu huu hautumiki tu kwa wanadamu bali pia kwa kila kiumbe hai. Ingawa Yesu anaweza kuonekana kama mtu wa kawaida, ni muhimu kuzingatia kama mzunguko huo huo mchakato unatumika Kwake. Yesu alizaliwa katika Israeli, ikimaanisha kwamba alitoka mahali pengine. Lakini alikuwa anajua asili yake, akisema, "<strong>Najua nilikotoka</strong>.&rdquo; Tofauti na watu wa kawaida ambao hawajui kuhusu kuzaliwa kwao wakati ujao baada ya kifo, Yesu alijua kabisa mahali Alienda baada ya kifo. Tofauti hii kubwa kati ya Yesu na mtu wa kawaida humsukuma mtu kuuliza kuhusu upekee wa Yesu. Jibu la swali hilo lina ufunguo wa hekima bora zaidi, likifunua kwamba Yesu hakuwa mtu wa kawaida bali alizaliwa akiwa na kusudi hususa.

  Mtu aliyezaliwa na kusudi lililoamuliwa kabla ya kuzaliwa huitwa "kuzaliwa kwa sababu." Hakuna mwanadamu aliye na kusudi kama hilo kabla ya kuzaliwa. Kinyume chake, Mungu anazaliwa na nia maalum ya kuanzisha dharma duniani. Mungu pekee, na si mwanadamu yeyote, ana uwezo wa kuanzisha dharma. Mungu hudumu wa milele na bila kubadilika, bila kuathiriwa na kuzaliwa au kifo, akidumisha kumbukumbu thabiti. Mungu anapopata mwili Duniani katika umbo la mwanadamu aliyejificha, anatoa mafundisho juu ya dharma, na kuondoka, Hapati kuzaliwa upya baada ya kifo, hatima ya kawaida kwa wanadamu wa kawaida. Katika kifo, manas (akili) ya mwanadamu huharibiwa, lakini Mungu hafi wala hazaliwi kwingine. Anajifunika sura ya kipekee kama mwanadamu, Anatimiza kusudi Lake, na kisha anarudi kwenye asili Yake. Kwa hiyo, katika mstari huo, Yesu alisema, &ldquo;<strong>Najua ninakoenda</strong>,&rdquo; ikikazia hali ya pekee ya kuwapo kwa Mungu na kusudi lake.

  Wanadamu hawana ujuzi wa mahali au asili ya Mungu. Wakati Mungu anapata mwili kama mwanadamu, asili Yake inabaki haijulikani. Tofauti na kuzaliwa kwa mwanadamu kwa kawaida, kuzaliwa kwa Mungu ni tofauti; Hafanyiwi kuzaliwa upya mahali pengine baada ya kufa mahali pengine. Mungu aliye kila mahali, aliye hata ndani ya tumbo la uzazi, anageuza umbo lake na kuonekana kama mtoto mchanga. Ikizingatiwa kwamba Mungu yupo mahali anapozaliwa, inakuwa vigumu kubainisha asili yake. Wale wasiojua kwamba Mungu yuko kila mahali hubakia kutojua mahali Yesu alitoka. Zaidi ya hayo, hatima ya Mungu baada ya kuchukua umbo tofauti bado haijulikani. Kwa hiyo, katika mstari huo, Yesu alisema, &ldquo;<strong>Hujui nilikotoka wala ninakokwenda</strong>,&rdquo; ikikazia asili ya ajabu ya kuwako kwa Mungu na mienendo yake.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 108,
verse: `<b>(30)	Injili ya Yohana, sura ya 8, mstari wa 19.</b>`,
meaning: `<b>
(8:19) Kisha wakamwuliza, Yuko wapi Baba yako? “Ninyi hamnijui mimi wala Baba yangu,” Yesu akajibu. “Kama mngalinijua mimi, mngemjua na Baba yangu pia.” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Je, Mungu yupo? Ikiwa Yeye anafanya, yukoje? Yuko wapi? Ukijua majibu ya maswali haya, utaelewa Baba na Mwana ni nani. Kuna Mungu mmoja tu, lakini tunapaswa kujua Mwana alitoka wapi. Maneno 'Baba' na 'Mwana' yanatumiwa mara nyingi katika Biblia.<strong>Mtu anapaswa kuelewa kwamba 'Baba' maana yake ni Mungu; neno hilo lilitumiwa kurejelea Mungu</strong><strong>katika Biblia. Katika Quran, Mungu anaitwa 'Allah,' na katika Bhagavad-Gita, Mungu anajulikana kama 'Paramatma.'</strong>Ingawa maneno haya ni tofauti, yote yanaashiria Mungu. Kiini cha Mungu kinapaswa kuonekana katika neno 'Baba.' Yesu alipokuwa duniani, Mafarisayo walimuuliza kuhusu Baba yake. Yesu akajibu, &ldquo; <strong>Hamkuniona mimi wala Baba yangu</strong>.&rdquo; Mafarisayo hawakuuliza juu ya Yesu, ingawa alikuwa mbele yao. Walitaka kujua juu ya baba yake wa kimwili, bila kutambua kwamba baba ya Yesu alikuwa Mungu. Huenda walishangaa Yesu alipozungumza moja kwa moja kumhusu Yeye na Baba yake. Walifikiri walikuwa wanamwona Yesu ana kwa ana na wakamwomba ajue kuhusu baba yake asiyejulikana. Kisha Yesu akasema, &ldquo;<strong>Hamkuniona mimi wala Baba yangu</strong>.&rdquo; Tunahitaji kuelewa maana ya neno hilo.

  Baba wa Yesu ni Roho Mtakatifu. Atma, Mwana wa Roho Mtakatifu, yuko katika miili yote na anatawala utendaji wao. Roho Mtakatifu, anayejulikana kama Baba, na Atma, anayejulikana kama Mwana, yuko kila wakati. Roho Mtakatifu, Paramatma, ni wa milele na amekuwepo tangu kabla ya uumbaji. Atma, Mwana wa Roho Mtakatifu, amekuwepo katika miili yote tangu baada ya uumbaji.

  Kando na Mwana wa kudumu, Atma, Mungu (Roho Mtakatifu) ana Mwana mwingine anayeitwa '<strong>Mwana pekee</strong>,' ambaye mara kwa mara huja duniani. Kuna tofauti kubwa kati ya Mwana wa kudumu (Atma) na Mwana wa muda (Mwana pekee). Kwa mfano, lini Atma inakuja na mwili wa kawaida wa mwanadamu, mwili una Jeevatma tofauti. Ingawa mwili mzima ni wa Atma, na Atma ndio kichwa cha mwili, Jeevatma pia anakaa na Atma mwilini na anafikiria kuwa mwili ni wangu. Ikiwa Mwana wa muda, Mwana wa pekee, atakuja duniani na mwili, hakuna Jeevatma katika mwili huo. Katika mwili wa mtu wa kawaida, Mungu na Atma ni tofauti. Atma hufanya kila kazi katika mwili huo, na Mungu hafanyi kazi. Lakini katika mwili wa Mwana pekee, Paramatma (Mungu) anakaa kama Atma na hufanya kazi katika umbo la Atma. Kwa sababu hakuna Jeevatma katika mwili wa Mwana wa pekee, yule anayefanya kama Atma pia anafanya kama Jeevatma. Ingawa aliye katika mwili wa Mwana pekee ni Mungu, anajifanya kuwa Jeevatma.<strong>Aliyekuja kwa kujificha kama Mwana pekee ni Roho Mtakatifu (Mungu). Kwamba Mungu anatenda kama Jeevatma.</strong>Kuna tofauti nyingi kati ya Mwana wa kudumu wa Mungu na Mwana wa muda.

  Inaweza kusemwa kwamba watu wengi hawajui kwamba Mungu ana Mwana wa kudumu na Mwana pekee ambaye huja mara kwa mara. Kwa kupata hekima, mtu anaweza kuelewa kuwepo kwa hekima ya Atma na Atma, lakini kutambua Mwana wa pekee ni changamoto. Kumtambua Mwana mzaliwa-pekee kati ya wanadamu wengi ni vigumu. Kwa hiyo, hakuna mtu aliyemtambua Mwana wa pekee aliyekuja Treta Yuga, Dvapara Yuga, na Kali Yuga. Ingawa Yesu alikuwa Mwana pekee wa Mungu katika Kali Yuga, watu hawakuweza kumtambua kuwa Mwana wa pili wa Mungu. Licha Yake tangazo la kuwa Mwana wa Mungu, watu hawakuweza kumtambua na kumtia matusi na mateso mengi. Watu walishindwa kutambua wale waliokuja Dvapara Yuga na Kali Yuga kuwa Mwana wa Mungu, ingawa walitangaza, &ldquo;Mimi ni Mwana wa Mungu.&rdquo; Ninasitasita kuthibitisha kwamba yule aliyekuja Treta Yuga alikuwa Mwana wa Mungu. Siku hiyo, Mungu Mwenyewe alikuja kwa kujificha kama Mwana na kutoa hekima duniani. Ingawa alijulikana kama gnani mkuu na aliyefunzwa hekima, pia ninasita kusema kwamba Alikuwa Bhagavan kwa sababu alionyeshwa kama mtu mwovu miongoni mwa watu. Walakini, siogopi kusema, "<strong>Ravana Brahma ndiye Mwana pekee</strong>.&rdquo;

  Katika Dvapara Yuga, Krishna alikuja kama Bhagavan. Bhagavan na Mwana pekee ni sawa. Walakini, kwa sababu Krishna alionyeshwa kama mjanja, watu wengi bado hawajui ukuu Wake leo. Ingawa Mungu alikuja kwa kujificha kama mwanadamu na kufundisha dharma takatifu, wanadamu hawakuzingatia hekima Aliyotoa; badala yake, walichunguza zaidi tabia Yake wakati huo. Ni wachache tu, kati ya mamilioni, waliotambua hekima Yake na kutangaza kwamba Krishna alikuwa Mungu, lakini walio wengi walimsema vibaya. Wale ambao hawakujua juu ya kupata mwili kwa Krishna katika Yuga ya Dvapara waliona kuwa vigumu kutambua Yesu kama Mwana wa Mungu katika Kali Yuga. Kwa sababu Krishna na Yesu walitazamia kwamba huenda wanadamu wasitambue hekima waliyofundisha, wote wawili walisema, &ldquo;<strong>Sisi ni Miungu</strong>,&rdquo; katika muktadha wa maneno yao, wakiamini hivyo wanadamu wanaweza kutambua hekima yao kwa kufanya hivyo. Vile vile Yesu alisema, &ldquo;<strong>Ninyi hamnijui mimi wala Baba yangu,&rdquo; </strong>kwa nia ya kuwafanya watu watambue kwamba Mungu na Yesu ni sawa.

  Wale wanaodai kuwa na ujitoaji kwa Mungu mara nyingi huzungumza kwa dhihaka wanapokutana na wengine walio na hekima zaidi kuliko wao wenyewe. Mafarisayo walizungumza na Yesu kwa mtazamo huo huo. Wakijua kwamba Yesu alizaliwa na Mariamu bila baba, wakamwuliza, &ldquo;Baba yako yuko wapi?&rdquo; Yesu alielewa kwamba walikuwa wakimdhihaki na hawakuomba kwa kujitolea. Alijibu kwa jibu la kushangaza, "<strong>Ninyi hamnijui mimi wala Baba yangu</strong>.&rdquo; Wale wanaoelewa maneno Yake kwa usahihi wataelewa kwamba Yesu anayeonekana na Mungu asiyeonekana ni kitu kimoja. Yesu pia alisema, &ldquo;<strong>Kama mngalinijua mimi, mngalimjua na Baba yangu pia</strong>.&rdquo; Hata hivyo, inaweza kusemwa kwamba wale waliosikia maneno Yake hawakuelewa alichokuwa akisema. Kama wangeelewa ujumbe wake, wangemtambua Yesu ni nani siku hiyo. Wangetambua kwamba Yeye hakuwa mtu wa kawaida. Licha ya maneno ya Yesu, walimchukulia kama mtu wa kawaida. Inaonekana hawakujua lolote la ajabu kuhusu Yesu.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 109,
verse: `  <b>(31)	Injili ya Yohana, sura ya 8, mstari wa 21.</b>`,
meaning: ` <b>
(8:21) Yesu akawaambia tena, "Mimi naenda, nanyi mtanitafuta, nanyi mtakufa katika dhambi yenu. Niendako ninyi hamwezi kuja.”  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu alisema maneno mengi ili kuwajulisha watu juu yake, na maneno yaliyo hapo juu ni mfano mmoja. "<strong>Ninaenda, nanyi mtanitafuta. Niendako ninyi hamwezi kuja</strong>,&rdquo; Yesu akawaambia watu. Kwa juu juu, aya hii inaweza isionekane kuwa ya maana sana. Mtu anapoenda mahali fulani bila kuwafahamisha wengine, hatujui ameenda wapi, na hata tukitafuta, hatuwezi kumpata. Ukosefu wa habari unamaanisha kuwa hatuwezi kwenda huko walikokwenda. Unaweza kujiuliza ni hekima gani ipo katika tukio hili la kawaida. Hebu tuitazame kwa pembe nyingine. Katika ujana wetu, tulikuwa tukicheza mchezo wa 'Mwizi na Polisi.' Katika mchezo huu, mwizi hujificha, na baada ya dakika kadhaa, polisi huanza kutafuta ili kuwakamata. Ili kumkamata mwizi, polisi lazima waende mahali ambapo mwizi amejificha. Ikiwa polisi hawawezi kufika mahali pa kujificha, hawawezi kumpata mwizi hata baada ya kutafuta mahali pengine. Siku moja, nilipokuwa na umri wa miaka kumi, tulicheza mchezo huu. Nilikuwa mwizi, na wengine walikuwa polisi. Kabla ya kujificha, nilisema, &ldquo;Ninaenda, na hamtanipata.&rdquo; Walijibu kwa ujasiri, &ldquo;Tutakupata baada ya dakika kumi.&rdquo; Kisha nikaongeza, &ldquo;Niendako ninyi hamwezi kuja,&rdquo; na nikaenda kujificha kutoka kwao.

  Dakika mbili baadaye, polisi walianza kunifukuza lakini hawakunipata kwa nusu saa. Licha ya kupekua maeneo yote, hawakuweza kufika nilipokuwa nimejificha. Siku hiyo, nilikuwa nimeketi kwenye chumba cha pooja nyumbani kwangu, na nilikuwa nimefunga milango. Wengine wakicheza kama polisi walipekua kila mahali, kutia ndani nyumba niliyokuwa nimejificha, lakini hawakufika kwenye chumba cha pooja kwa sababu milango ilikuwa imefungwa, na hawakupekua ndani. Hapo awali, nilidhani hakuna kitu maalum katika mstari hapo juu, kwani ulifanana na mchezo wa 'Mwizi na Polisi.' Walakini, baadaye niligundua kuwa kifungu "<strong>Utakufa katika dhambi yako</strong>&rdquo; katika mstari huo ulikuwa na maana kubwa. Ingawa ulifanana na mchezo, niligundua kwamba ulikuwa na hekima nyingi. Kisha nikazama katika ufahamu wa kina wa maana ya neno hili. Hapa ndio maana yake.

  Yesu alionekana kwa kila mtu duniani kwa muda fulani, lakini kwa bahati mbaya, hakuna aliyemwamini. Licha ya kufanya miujiza mingi ili kuthibitisha kwamba Yeye hakuwa mtu wa kawaida wa kuona kwa vipofu, akiwawezesha viwete kutembea, kuponya ukoma, na hata kuwafufua wafu ili kuonyesha uwezo Wake wa kusamehe dhambi&mdash;watu walishindwa kutambua ukuu Wake wa kweli. . Hata wale ambao hawakumtambua Yesu wakati wa uhai Wake wangemtafuta baadaye, wakitafuta kitulizo kutokana na mateso yao. Hata hivyo, hakutakuwa na faida katika kumtafuta mara tu atakapoondoka, kwani hataonekana kwa mtu yeyote. Watu wanaokufa katika dhambi zao hawawezi kusamehewa na Yesu, kwani hawajui alikokwenda. Hata kama waliokanusha Yesu wakati wa uhai wake baadaye wanamkiri kuwa Mungu, dhambi zao hazitasamehewa. Yesu alikuwa ametabiri mambo haya yote kwa watu mapema. Yesu aliposema, &ldquo;<strong>Ninaenda mbali</strong>,&rdquo; hakuna aliyemwomba akae zaidi. Badala yake, watu walipiga kelele wakimtaka asulubishwe, na kusababisha kifo chake msalabani.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 110,
verse: `<b>(32)	Injili ya Yohana, sura ya 8, aya ya 23 na 24.</b>`,
meaning: `<b>
(8:23) Lakini aliendelea, “Ninyi ni wa chini; Mimi ni kutoka juu. Ninyi ni wa ulimwengu huu; mimi si wa ulimwengu huu.
<br><br>
(8:24) Niliwaambia ya kwamba mtakufa katika dhambi zenu; msipoamini ya kuwa mimi ndiye, mtakufa katika dhambi zenu kweli."   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika aya hizi mbili, mstari wa 24 unafanana na mstari wa 21, lakini mstari wa 23 ni wa pekee. Yesu aliwapa watu nafasi ya pili ya kutambua kwamba Yeye hakuwa mtu wa kawaida na akasema, &ldquo;Ninyi ni wa chini; Mimi ni kutoka juu. Ninyi ni wa ulimwengu huu; mimi si wa ulimwengu huu.&rdquo; Aya hii imegawanyika katika sehemu mbili: ya kwanza ni &ldquo;Ninyi ni wa chini; mimi natoka juu,&rdquo; na ya pili ni &ldquo;Ninyi ni wa ulimwengu huu; mimi si wa ulimwengu huu.&rdquo; Kulingana na sehemu ya kwanza ya mstari huo, &ldquo;Ninyi ni wa chini; Mimi ninatoka juu,&rdquo; kumekuwa na aina mbili za watu tangu Kruta Yuga - watu wa chini na watu wa juu. Kuna sababu nyuma ya jinsi majina haya mawili - ya chini na ya juu - yalitokea. Hivi ndivyo watu wanavyogawanywa katika makundi ya chini na ya juu.

  Umri wa Kruta Yuga unachukua miaka 1,728,000. Wakati wa miaka elfu ya kwanza ya Kruta Yuga, makabila mawili yalitokea kati ya watu - gnanis (wale wenye hekima) na wajinga. Kulikuwa na gnani chache sana duniani wakati huo, wakati wajinga walikuwa wasiohesabika. Katika yuga hiyo, idadi ya watu ulimwenguni ilikuwa karibu milioni 30 tu, na idadi ya Wahindi haikuwa zaidi ya 300,000. Jua lilishuka juu ya Dunia na kutoa hekima ya kimungu kwa mtu anayeitwa Manu. Ni watu wawili au watatu tu waliojifunza hekima moja kwa moja kutoka kwa Manu, na watu wengine wote waliheshimu sana gnani hizi, wakijifunza hekima ya kimungu kutoka kwao. Siku hizo, watu waliheshimu sana gnanis, wakiwafanya wakae kwenye kiti cha juu huku wao wenyewe wakikaa sakafuni, wakisikiliza hekima. Ilikuwa kawaida kwa watu kumpa gurus kiti cha juu na kuketi sakafuni. Kulingana na hili, Yesu alisema, &ldquo;Ninyi ni wa chini; mimi natoka juu.&rdquo; Hii ina maana, "<strong>Mimi ni mwalimu wenu (Guru) kwenu nyote</strong>.&rdquo;

  Ilikuwa kawaida kwa walimu kuketi kwenye kiti cha juu huku watu wanaotafuta hekima wakiketi sakafuni. Walimu walikuwa wanawaeleza watu kuwa wako chini ya walimu waliokuwa juu yao. Walimu waliotoa hekima ya kimungu walijulikana kama walimu wa Brahma Vidya. 'Brahma' ina maana kubwa, na 'Brahma Vidya' inamaanisha mafundisho mazuri. Walimu waliokuwa na ujuzi wa Brahma Vidya waliitwa Brahmins. Katika siku hizo, Brahmins ilimaanisha walimu. Walimu wawili au watatu tu katika India nzima walijulikana kama Brahmins. Wabrahmin hao walikuwa wakiainisha watu wengine kama 'watu wa chini.' Wale wote waliokosa hekima waliwekwa rasmi kuwa 'watu wa chini.' Kwa njia hii, nchi nzima ilikuwa na 'watu wa chini.' Baada ya muda, mfumo wa tabaka ulianza kulingana na mgawanyiko huu. Mfumo wa tabaka ulipoanza, wale waliomjua Brahma Vidya walianza kusema, &ldquo;Sisi ni Wabrahmin.&rdquo; Vile vile, wale ambao walikuwa wajinga walibandikiwa &ldquo;Mko chini yetu (Maadiguvavaru kwa Kitelugu).&rdquo; Kwa hivyo, makabila mawili -<strong>ya juu (Eguvavaru kwa Kitelugu) na ya chini (Dikuvavaru kwa Kitelugu)</strong>-kuundwa. Ingawa neno 'chini (Maadiguva vaaru)' lipo hata leo, huenda watu wasielewe kikamilifu maana yake ya kihistoria. Baada ya muda, neno 'Maadiguva vaaru' lilibadilika na kuwa tabaka la Madiga (tabaka iliyoratibiwa), ambayo sasa inahesabiwa kuwa tabaka la chini.

  Mfumo wa tabaka ulipoanzishwa, kulikuwa na tabaka mbili&mdash; Wabrahmin na Madiga (Tabaka Iliyoratibiwa). Neno 'Madiga' mwanzoni lilitumiwa kuwarejelea wale ambao walichukuliwa kuwa wajinga na wasio na hekima. Hata hivyo, baada ya muda, hata miongoni mwa wale waliokosa hekima, matabaka mengi yaliibuka, na wale ambao walibakia bila kuainishwa bado waliitwa Madiga. Ukitazama nyuma katika historia, Madiga hakuwa mtu wa tabaka asili bali jina lililopewa wajinga walimu wawili au watatu. Kulingana na hili, watu kutoka tabaka zote ambao hawana hekima wanaweza kuitwa Madiga. Watu wamegawanywa katika tabaka kwa sababu ya historia isiyojulikana. Ni dhulma na ujinga kuwataja watu waliosalia kuwa ni Madiga. Zaidi ya miaka 2,000 iliyopita, Yesu pia alitumia maneno 'juu' (Eguvavaru) na 'chini' (Diguvavaru). Alisema, &ldquo;<strong>Wewe ni kutoka chini; Mimi ni kutoka juu</strong>,&rdquo; akimaanisha wajinga. Ieleweke kwamba maneno 'juu' na 'chini' yanatumiwa kuashiria, "Mimi ni gnani, na wewe hujui."

  Neno la pili la Yesu ni, &ldquo;Ninyi ni wa ulimwengu huu; mimi si wa ulimwengu huu.&rdquo; 'Loka' (Dunia) kwa Kitelugu ina maana ya 'kuwa na uzoefu.' Kuna aina mbili za watu kulingana na uzoefu walio nao. Wale walio na uzoefu ni wa ulimwengu huu, na wale wasio na uzoefu sio wa ulimwengu huu. Watu wa kawaida hufurahia kila uzoefu duniani, kwa hiyo wao ni wakazi wa ulimwengu huu. Yesu, ambaye hana uzoefu wowote, alisema kwamba hakuwa wa ulimwengu huu. Ingawa Anaonekana kama mwanadamu, Hana uzoefu wowote kama mwanadamu. Ingawa Yesu yuko katika mwili wa mwanadamu, Yeye si Jeevatma kama wengine. Wakati Yeye si Jeevatma, hakuna karma. Kwa hivyo, Yeye hana uzoefu kulingana na karma. Paramatma alimtuma Yesu hasa. Kwa maneno mengine, Roho Mtakatifu alikuja kwa kujificha kama Yesu. Kulingana na dharma ya kiroho, hatupaswi kusema hivyo. Paramatma ilimuumba na kumtuma Yesu hasa. Kwa hiyo, Yesu anapaswa kuitwa Mwana wa Roho Mtakatifu. Kwa vile Yesu si Jeevatma, inaweza kusemwa kuwa hana uzoefu. Ikiwa Yesu angekuwa Jeevatma, hapaswi kuitwa Mwana wa Roho Mtakatifu. Jeevatma ni Mwana wa Atma. Baba wa Atma ni Roho Mtakatifu. Kwa hivyo, Jeevatma anakuwa mjukuu wa Roho Mtakatifu. Yesu anaitwa mwana wa Mungu kwa sababu ametumwa na Mungu. Yesu pia aliitwa waziwazi kuwa Mwana pekee. Atma ni Mwana wa Roho Mtakatifu. Mwana wa pekee ndiye Mwana wa muda anayeshuka duniani akiwa na uhitaji. Kwa hivyo, Mwana wa muda anakuwa Mwana wa Roho Mtakatifu kama Atma na hatakuwa mjukuu kama Jeevatma. Jeevatma anapata uzoefu. Kwa hivyo, Jeevatma, ambaye ana uzoefu, anatoka katika ulimwengu huu. Yesu, kama Atma, ambaye hana uzoefu, si wa ulimwengu huu. Anatoka Paraloka.

  Yesu aliwapa watu nafasi ya pili ya kumtambua kuwa mtu wa ajabu na akanukuu mistari hii (Yohana 8:23, 24). Hata hivyo, wanadamu hawakuweza kutambua ukuu wa Yesu na kumwona kuwa mtu wa kawaida. Kwa hiyo, hawawezi kusamehewa dhambi zao na Yesu au mafundisho yake. Yesu, Mwana wa Roho Mtakatifu, alikuja kati ya watu na kusema maneno mengi ili kujitambulisha. Alirudia kwa mara ya pili kwamba wale ambao hawakuweza kumpata na kumwamini wangekufa katika dhambi zao, kama alivyotaja mapema katika Yohana 8:21. Alitoa fursa ya tatu kwa kusema maneno Yake ya mwisho. Yesu alirudia seti tatu za mistari ili kuwasaidia watu kumtambua. Alionya kwamba wale ambao hawakumtambua hawatasamehewa dhambi zao. Hebu tuchunguze seti ya tatu ya mistari ili kuona kile Yeye alisema.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 111,
verse: `<b>(33)	Injili ya Yohana, sura ya 8, mstari wa 24.</b>`,
meaning: `<b>
(8:24) Niliwaambia ya kwamba mtakufa katika dhambi zenu; msipoamini kwamba mimi ndiye, mtakufa katika dhambi zenu.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Inajulikana kuwa mstari huu ulitoa nafasi ya tatu ya kujua Yesu alikuwa nani. Katika mstari huu, Yesu aliuambia umma moja kwa moja kuwa Yeye ni nani. Alisema, &ldquo;<strong>Wale wasioamini kwamba Mimi ni Roho Mtakatifu, na Muumba atakufa katika dhambi zao</strong>.&rdquo; Yesu Mwenyewe alitangaza Yeye ni nani. Hapo awali alisema, "<strong>nitaondoka; hamwezi kufika mahali nilipokwenda</strong>,&rdquo; ili kuwapa nafasi fulani ya kumwelewa. Katika aya ya pili, alisema, &ldquo;<strong>Ninyi ni wa ulimwengu huu; mimi si wa ulimwengu huu</strong>,&rdquo; kutoa maelezo zaidi ili kuwasaidia kuelewa Yeye alikuwa nani. Inaweza kueleweka kwamba Yesu ni Roho Mtakatifu kutoka mstari wa pili. Katika aya ya tatu, alisema, &ldquo;<strong>Mtu asiyeamini kuwa mimi ndiye hawezi kutoka katika dhambi</strong>,&rdquo; kutoa uwazi zaidi. Katika mstari wa tatu, Yesu alisema, &ldquo;<strong>Mimi ni Mungu</strong>.&rdquo; Licha ya hayo, watu walimtambua Yesu kuwa mtu wa kawaida na hawakuweza kutambua kwamba Alikuwa Mungu. Hata hivyo, wengine walishangazwa na maneno ya Yesu. Ingawa hawakuamini, walimwuliza Yeye ni nani. Yesu alijibu kwa kutumia mistari hii mitatu ( Yohana 8:21, 22, 23 ) ili kuwasaidia kuelewa kwamba Yeye hakuwa mtu wa kawaida. Hata hivyo, hawakufanya hivyo kutambua hili na kuuliza, "Wewe ni nani?" Yesu akajibu, &ldquo;<strong>Ni vile tu nimekuwa nikikuambia tangu mwanzo</strong>.&rdquo;

  Zaidi ya hayo, Alisema, &ldquo;Yeye aliyenituma ni mwaminifu, na yale niliyoyasikia kutoka Kwake ninauambia ulimwengu.&rdquo; Hata hivyo, watu hawakutambua kwamba alikuwa akizungumza kuhusu Baba yake (Roho Mtakatifu). Ingawa alisema mengi, watu hawakumtambua Yesu. Wengine walimchukulia kama mtu wa kawaida, na wengine walimtendea vibaya kuliko mtu wa kawaida. Yesu alisema jambo lingine kuhusu watu hao.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 112,
verse: ` <b>(34)	Injili ya Yohana, sura ya 8, mstari wa 28.</b>`,
meaning: ` <b>
(8:28) Kwa hiyo, Yesu alisema, “Mtakapokwisha kumwinua Mwana wa Adamu, ndipo mtakapojua ya kuwa mimi ndiye, na ya kuwa sifanyi neno langu mwenyewe, ila ninena yale aliyonifundisha Baba. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kuna mkanganyiko fulani katika aya hii kuhusu maneno, &ldquo;. <strong>Umemwinua Mwana wa Adamu</strong>.&rdquo; Mtu anaweza asielewe kifungu hicho. Ili kufasiri kifungu hiki kwa usahihi, mtu anapaswa kukisoma kama "Wakati watu wanamwinua Yesu juu ya vichwa vyao" badala ya "Wakati umemwinua Yesu." Huenda wengine wakauliza, &ldquo;Kwa nini watu wamwinue Yesu juu ya vichwa vyao?&rdquo; Jibu ni hilo<strong>Yesu anapaswa kueleweka kwa kichwa</strong>ambayo ni juu ya miili yetu. Mtu anayemwelewa Yesu na wao<strong>akili (buddhi)</strong>watajua kwamba Yesu ni Roho Mtakatifu. Zaidi ya hayo, mstari huu unadhihirisha kwamba hekima ya kimungu inayofundishwa na Yesu si yake mwenyewe; badala yake, Anafundisha kama alivyoelekezwa na Roho Mtakatifu.

  Badala ya kusema kwamba wanadamu wanapaswa kumwelewa Yesu wakiwa na buda kichwani, mstari huo unasema kwamba watu wamemwinua Yesu juu. Inajulikana kuwa Yesu ni Paramatma (Roho Mtakatifu) ikiwa mtu anamwelewa<strong>pamoja na Buddhi </strong>katika mwili. Maadamu watu hawajaelewa kwamba Yesu ni Mungu, &ldquo;<strong>dhambi za watu hazisamehewi, nao hufa katika dhambi zao</strong>,&rdquo; kama ilivyoelezwa katika aya tatu zilizotangulia. Ikiwa wanaelewa kama Yesu alisema, inajulikana kwamba Yesu ni Mungu. Siri ambayo Roho Mtakatifu anapata mwili kama mwanadamu ili kufundisha hekima yake inafichuliwa. Inapojulikana kwamba Yesu ni Mungu, wengine wanaweza kufikiri kwamba Yesu Mwenyewe anasema hekima yote ambayo Yesu anazungumza. Walakini, haiwezekani kusema kama watu wengine wanavyofikiria. Sababu ni kwamba baada ya kusema, &ldquo;<strong>Mimi ndiye</strong>,&rdquo; Akasema neno lingine.

  Yesu alisema, &ldquo;<strong>Sifanyi neno kwa nafsi yangu ila kunena yale aliyonifundisha Baba</strong>.&rdquo; Hii inaweza kujenga hisia kwamba Baba na Yesu ni tofauti.

  Sababu ya kuieleza kwa njia mbili inatokana na ukweli kwamba Yesu alikuwa mwanadamu. Mungu, katika umbo lake la kweli, haonekani na anajumuisha nguvu. Mungu anapochukua umbo la mwanadamu, na kama mtu anautambua ukweli huu kwa akili (buddhi), wataelewa kwamba Roho Mtakatifu na Yesu ni kitu kimoja. Hata hivyo, Mungu anapopata mwili kama mwanadamu, ni kinyume cha sheria ya kiroho kwa kupata mwili kutangaza waziwazi, &ldquo;Mimi ni Mungu.&rdquo; Ingawa mtu anaweza kutambua mtu anayeonekana kama Mungu, ukweli huu haupaswi kufichuliwa wazi kulingana na<strong>sheria ya kiroho</strong>. Kufuatia kanuni hii ya kiroho, Yesu alisema, &ldquo;<strong>Sifanyi neno kwa nafsi yangu ila kunena yale aliyonifundisha Baba</strong>,&rdquo; wakishikamana na kanuni za sheria ya kiroho.

  Yesu alisema, &ldquo;Ninasema yale ambayo Baba alisema. Vifungu vyote viwili - "Sifanyi chochote peke yangu" na "Mungu hufanya kila kitu" - inamaanisha kitu kimoja. Watu wanapotambua kwamba Yesu ni Roho Mtakatifu, dhambi zao zitasamehewa. Ingawa ni busara kuelewa kwamba Yesu ni Roho Mtakatifu, kiroho si sahihi kusema kwamba Roho Mtakatifu ni Yesu. Kwa hiyo, Yesu mwenyewe alisema, &ldquo;<strong>Mpaka ujue kwamba mimi ni Mungu, dhambi zako hazitasamehewa</strong>,&rdquo; na &ldquo; <strong>Mimi ndiye</strong>,&rdquo; ili wanadamu waelewe Yesu alikuwa nani. Kulingana na sheria ya kiroho, hatimaye alisema, &ldquo;Nafanya yote ambayo Baba yangu aliniambia nifanye.&rdquo; Kwa hiyo, mtu asifikirie kwamba Yesu alizungumza kwa njia mbili katika mstari huo. Ingawa imeandikwa katika mstari huo kwamba &ldquo;Mimi ni Mungu&rdquo; na &ldquo;ninafanya yale ambayo Mungu anasema,&rdquo; yote mawili yanamaanisha sawa. Mtu anaweza kufikiri kwamba Yesu alizungumza mambo yanayopingana ikiwa haya hayaeleweki. Mtu anayeelewa hekima anaweza kutambua kwamba Mungu huja kama mwanadamu lakini hapaswi kutangaza kwamba mtu fulani ni Mungu. Kwa hiyo, Yesu pia alisema, &ldquo;Mimi ndiye Mungu&rdquo; kwa neno moja na &ldquo;Baba yangu ni Mungu&rdquo; katika neno lingine. Zote mbili ni kweli. Zaidi ya hayo, Yesu alisema yafuatayo kwa watu.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 113,
verse: `<b>(35)	Injili ya Yohana, sura ya 8, mstari wa 29.</b>`,
meaning: ` <b>
(8:29) Yeye aliyenipeleka yu pamoja nami; Hakuniacha peke yangu, kwa maana siku zote nafanya yale yampendezayo.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aya hii inasemekana kuonyesha kwamba Yesu na Roho Mtakatifu ni kitu kimoja. Ili kuunga mkono jambo hilo, Yesu alisema, “Yule aliyenituma yuko pamoja nami.” Hii ina maana kwamba Mungu aliyemtuma Yesu yu ndani yake na kwamba Roho Mtakatifu na Yesu ni sawa. Kuna kitu kinaitwa 'Will' katika mwili wa mwanadamu. Yesu alisema kwamba sikuzote atafanya mambo kulingana na mapenzi ya Mungu. Kwa njia tofauti, Alisema kwamba mapenzi ya Mungu yanafanya kazi ndani Yake. Ni ushuhuda wa ukweli kwamba Mungu yu ndani ya Yesu. Yesu pia alisema kwamba Roho Mtakatifu hakuwa amemwacha peke yake. Ni kana kwamba Yesu alisema kwamba Mungu alikuwa pamoja Naye na kwamba Mungu alikuwa Yeye. Yesu mwenyewe alisema maneno haya ili kumtambua kuwa ni Mungu. Ingawa Mungu alikuja kama 'Yesu' katika Kali Yuga, watu hawakumtambua. Kwa hiyo, ikawa muhimu kwa Yesu kusema maneno haya ili kutambua ukuu wake. La sivyo, watu hawangefahamu hekima ya Yesu. Yesu aliposema mistari hii, baadhi ya watu walimwamini.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 114,
verse: ` <b>(36)	Injili ya Yohana, sura ya 8, aya ya 53 na 54.</b>`,
meaning: ` <b>
(8:53) Je, wewe ni mkuu kuliko baba yetu Ibrahimu? Alikufa, na manabii pia. Unafikiri wewe ni nani?”
<br><br>
(8:54) Yesu akajibu, “Nikijitukuza mwenyewe, utukufu wangu si kitu. Baba yangu, ambaye ninyi mnadai kuwa Mungu wenu, ndiye anayenitukuza mimi. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ingawa Yesu alitoa maelezo ya kina ili watu wamwelewe, walijitahidi kufahamu utambulisho Wake, na kuwaongoza kuuliza, “Ninyi ni nani?” Kwa kujibu, Yesu alisema, “Ikiwa ninajitukuza mwenyewe, utukufu wangu si kitu.” Akiwa tayari amezungumza juu Yake katika matukio matano, Alitambua uwezekano wa maneno Yake kuonekana kuwa ya uwongo ikiwa Angerudia au kufafanua zaidi. Kwa hiyo, Yesu alieleza, “Nikisema neno lililo tofauti tena na lile ambalo limesemwa hadi sasa, basi Baba yangu, ambaye ninyi mwadai kuwa Mungu wenu, atanitukuza mimi.” Maneno hayo yanakazia umoja wa msingi kati ya Yesu na Baba yake, ambaye watu hudai kuwa Mungu. Hata hivyo, kwa kuzingatia sheria za kiroho, mtu haipaswi kudai moja kwa moja kuwa Mungu. Kwa hiyo, Yesu alisema, “Mimi ni Mungu” mwanzoni ili kuwasaidia watu kumwelewa. Baadaye, alifafanua kwa kusema kwamba Mungu alikuwa Baba yake. “Kwa sababu nilikuambia mambo mawili tofauti, usichanganyikiwe. Unapaswa kunielewa kwa ukweli,” akasema Yesu, akikazia umuhimu wa kuelewa utambulisho Wake zaidi ya mambo ya wazi.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 115,
verse: `<b>(37)	Injili ya Yohana, sura ya 8, mstari wa 55. </b>`,
meaning: `<b>
(8:55) Ingawa nyinyi hamumjui, mimi namjua. Ikiwa ningesema kwamba sikufanya, ningekuwa mwongo kama ninyi, lakini ninamjua na ninatii neno lake.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu alitangaza, &ldquo;Ninyi hamjui Mungu; Namjua Mungu,&rdquo; akishughulikia mtazamo wa wengi waliomwona kuwa mtu wa kawaida. Uhitaji wa maneno kama hayo ulitokea ili kufafanua uhusiano wa pekee wa Yesu pamoja na Mungu. Wengine walihoji jinsi Yesu, akiwa mwanadamu kama wengine, angeweza kudai kumjua Mungu wakati wengine hawakumjua. Ili kushughulikia swali hili, tunaweza kuzingatia tamko la kurudiwa la Yesu, &ldquo;Mimi ndiye,&rdquo; katika mistari mitatu tofauti. Kulingana na taarifa hii, Yesu hana Jeevatma katika mwili Wake, ingawa ana umbo la kibinadamu. Badala yake, Roho Mtakatifu hutumika kama Atma pekee katika mwili Wake, akishiriki kikamilifu katika kila tendo. Dhana potofu hutokea wakati watu wanadhani kwamba Atma ni Jeevatma inayowaongoza kuamini kwamba Yesu anaweza kuwa hamjui Mungu. Hata hivyo, ukweli ni kwamba Paramatma (Roho Mtakatifu) Mwenyewe anakaa katika mwili wa Yesu, akimjulisha Mungu. Kama vile Roho Mtakatifu ndiye fahamu ndani ya Yesu, hakuna haja ya kujua tofauti; Yesu ana asili ya Mungu kama fahamu zake. Kinyume chake, wanadamu wa kawaida wana akili (manas) kama fahamu katika miili yao lakini wanakosa ufahamu wa Atma au Paramatma. Ukosefu wa Paramatma ufahamu ndio sababu wanadamu hawamjui Mungu, ilhali Yesu, akiwa na Mungu kama fahamu Zake, anamjua Mungu kiasili.

  Ikiwa Yesu angedai, &ldquo;Simjui Mungu,&rdquo; ingedokeza ukosefu wa ufahamu wa Mungu ndani Yake, sawa na wanadamu wa kawaida. Kauli kama hiyo itakuwa sawa na uwongo. Kwa hiyo, Yesu alisema, &ldquo;Kama ningesema simjui Mungu, ningekuwa mwongo kama ninyi. Upekee upo katika ukweli kwamba Roho Mtakatifu ndiye mkaaji pekee katika mwili wa Yesu, akiondoa uwepo wa jozi mbili za roho - Atma, inayowajibika kwa vitendo, na Jeevatma, kwa uzoefu. Katika mwili wa Yesu, ambapo Roho Mtakatifu pekee anakaa, kila neno lililotamkwa linatoka kwa Roho Mtakatifu. Kwa hiyo, Yesu aliposema, &ldquo;Ninamfahamu. Namjua, na ninalitii neno Lake,&rdquo; maneno haya yalitoka kwa Roho Mtakatifu, licha ya Yesu kusema kwa namna iliyo sawa na kila mtu mwingine. Licha ya sura Yake ya nje kama mtu wa kawaida, hapakuwa na kipengele kisichojulikana Kwake. Mfano wa ujuzi huu wa kina ulifunuliwa wakati Yesu alipozungumza juu ya Abrahamu, mtu ambaye alikuwa amekufa kwa muda mrefu, na kuibua mshangao na kuuliza swali kutoka kwa wale walio karibu Naye.</div></div>

</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 116,
verse: ` <b>(38)	Injili ya Yohana, sura ya 8, aya ya 57 na 58.</b>`,
meaning: `<b>
(8:57) Wakamwambia, Wewe hujatimiza miaka hamsini bado, nawe umemwona Ibrahimu.
<br><br>
(8:58) “Amin, amin, nawaambia,” Yesu akajibu, “kabla Ibrahimu hajazaliwa, mimi niko.” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu aliposema maneno haya, Alikuwa na umri wa takriban miaka 32, karibu kuingia mwaka Wake wa 33. Abrahamu, mtu wa kihistoria, aliishi karne nyingi kabla ya Yesu, sawa na babu wa watu wa siku za Yesu. Yesu aliporejelea Abrahamu, Wayahudi waliokuwapo walitilia shaka jinsi alivyoweza kusema juu ya mtu ambaye alikuwa amemtangulia kwa muda mrefu, ambaye alizaliwa na kufa katika enzi tofauti. Kwa kujibu, Yesu alisema maneno ya fumbo, &ldquo;Kabla Abrahamu hajazaliwa, mimi niko.&rdquo; Madai haya yalionekana kuwa ya udanganyifu kwa wale walio karibu Naye, kutokana na tofauti ya wazi ya kizazi kati ya Yesu na Ibrahimu. Hata hivyo, kile ambacho Yesu alieleza kilikuwa ukweli mtupu, hata kama kilionekana kuwa kitendawili kwa watu wa wakati Wake.

  Hebu tuchunguze ukweli nyuma ya kauli hii. Mwili wa Yesu ulizaliwa takriban miaka 32 iliyopita. Walakini, ni Roho Mtakatifu pekee anayekaa katika mwili wake, sio Jeevatma. Ikiwa Jeevatma angekuwepo, Yesu hangekuwa na kumbukumbu kutoka kwa kuzaliwa hapo awali, kwani Jeevatma haihifadhi kumbukumbu kama hizo. Kinyume chake, Paramatma (Nafsi Iliyo Juu Zaidi) iko katika mwili wa Yesu na ni ya milele. Imekuwepo tangu kabla ya kuumbwa kwa ulimwengu na ndiye muumbaji wa viumbe vyote vilivyo hai, akiwemo Ibrahimu. Ibrahimu, kama mwanadamu mwingine yeyote, alizaliwa, akaishi, na akafa, na Roho Mtakatifu kama shahidi. Wakati Atma alimpa uhai Ibrahimu, Mungu (Paramatma) alishuhudia safari nzima.<strong>Mungu ndiye shahidi mkuu, Atma ndiye mtendaji, na Jeevatma anapitia maisha</strong>. Ingawa Ibrahimu alizaliwa kupitia Atma, Mungu, kama shahidi mkuu, anajua kila kitu kuhusu Ibrahimu. Paramatma anajua ni mara ngapi Abrahamu alizaliwa zamani na mara ngapi atazaliwa katika siku zijazo. Kwa hiyo, Yesu aliposema, &ldquo;Kabla Abrahamu hajazaliwa, mimi niko,&rdquo; Alirejelea utambulisho Wake kuwa Paramatma ya milele ambayo imekuwako tangu kabla ya kuzaliwa kwa Abrahamu na itaendelea kuwepo baada ya kifo Chake. Kauli hii inasisitiza kuwepo kwa Yesu bila wakati kupita mipaka ya kuzaliwa kimwili na kifo.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 117,
verse: `<b>(39)	Injili ya Yohana, sura ya 9, mstari wa 39.</b>`,
meaning: ` <b>
(9:39) Yesu alisema, “Nimekuja ulimwenguni kutoa hukumu, ili vipofu waone na wale wanaoona wawe vipofu.”   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wakati baadhi ya watu walimshtaki Yesu kuwa mwenye dhambi, mtu ambaye karma yake ilikuwa imeondolewa na Yesu alisikia maneno yao na akajibu kwa habari ifuatayo.

  ( Yohana 9:25-38 ) Akajibu,<strong>"Kama Yeye ni mwenye dhambi au la, sijui. Jambo moja najua. Nilikuwa kipofu lakini sasa naona!&rdquo;</strong>. Kisha wakamuuliza,<strong>"Alikufanyia nini?</strong><strong>Alifunguaje macho yako?"</strong>Akajibu,<strong>"Nimewaambia tayari na hamkusikiliza. Kwa nini unataka kusikia</strong><strong>tena? Je! ninyi pia mnataka kuwa wanafunzi Wake?&rdquo;</strong>Kisha wakamtukana na kusema,<strong>"Wewe ni mfuasi wa huyu jamaa! Sisi ni wanafunzi wa Musa! Sisi tunajua ya kuwa Mungu alisema na Musa, lakini mtu huyu hata hatujui alikotoka.&rdquo;</strong>Yule mtu akajibu, <strong>"Sasa hilo ni jambo la ajabu! Ninyi hamjui alikotoka, lakini alifungua macho yangu. Tunajua kwamba Mungu hawasikii wenye dhambi. Anamsikiliza mcha Mungu anayefanya mapenzi yake. Hakuna mtu aliyepata kusikia habari za kufungua macho ya mtu aliyezaliwa kipofu. Kama mtu huyu hakutoka kwa Mungu, hangeweza kufanya lolote.&rdquo;</strong>Wakajibu hivi,<strong>"Ulizama katika dhambi wakati wa kuzaliwa; unathubutuje kutufundisha!&rdquo;</strong>Nao wakamtupa nje. Yesu alisikia kwamba walikuwa wamemtupa nje, na Yesu alipomkuta, alisema,<strong>"Je, unamwamini Mwana wa Adamu?&rdquo; "Yeye ni nani, bwana?"</strong>mtu huyo aliuliza.<strong>"Niambie ili nipate kumwamini.&rdquo;</strong>Yesu alisema, &ldquo;<strong>Sasa mmemwona; kwa kweli, Yeye ndiye anayesema nawe.&rdquo;</strong>Kisha yule mtu akasema,<strong>"Bwana, ninaamini,&rdquo;</strong>na akamsujudia. Baada ya matukio yale yaliyokuwa yametokea, Yesu alisema,<strong>"Kwa ajili ya hukumu nimekuja ulimwenguni, ili vipofu waone na wale wanaoona wawe vipofu."</strong>Taarifa hii inaweza kueleweka kwa kuzingatia matukio ya awali.

  Kusudi la kauli ya Yesu lilikuwa kudhihirisha hilo<strong>wale walio na imani katika Mungu wanaweza kuniona</strong>, hata kama hawamjui Yeye ni nani. Wale wasiomwamini Mungu wanaweza kuingiliana na Yesu kila siku na kuuona mwili Wake wa kimwili, lakini hawawezi kumtambua. Kwa hiyo, Yesu alisema kwamba aliingia ulimwengu kuwafanya makafiri wasijue kuwa Yeye ni Mungu. Licha ya Mungu kuchukua umbo la kibinadamu na kusimama karibu na wasioamini, hawawezi kumtambua Mwana wa Mungu kutokana na upofu wao wa kutojua. Upofu huu ni aina ya ujinga unaowazuia kumjua Mungu, hata anapoonekana katika umbo la mwanadamu. Yesu aliposema hivyo<strong>mja anayeuona mwili wa Mungu (Mwana wa Mungu) anaweza asimtambue kulingana na sura ya nje, lakini badala yake, kupitia utambuzi.</strong>, baadhi ya watu waliomzunguka wakauliza kama wao pia ni vipofu. Yesu akawajibu hivi.
</div></div>

</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 118,
verse: `<b>(40)	Injili ya Yohana, sura ya 9, mstari wa 41.</b>`,
meaning: `<b>
(9:41) Yesu alisema, “Kama mngekuwa vipofu, hamngekuwa na hatia; lakini sasa unapodai unaweza kuona, hatia yako inabaki.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika mstari wa 39, Yesu alieleza tofauti kati ya wale walio na imani na wale wasio na imani. Alisema kuwa kipofu aliye na imani takatifu angeweza kumwona, wakati wasioamini wangeweza kumwona kimwili lakini hawakuweza kutambua utambulisho Wake wa kweli. Katika mstari wa 41, Yesu alizama zaidi katika tabia ya wale wanaofanya kazi na a<strong>mtazamo wa kidunia</strong>. Watu wenye mawazo ya kidunia wanatangaza, "Ninaona," wakihusisha matendo yao kwao wenyewe na hivyo kukusanya karma kwa matendo yao. Mungu aliwapa wanadamu uwezo wa kufahamu hekima Yake, lakini si kila mtu anatumia yake maono ya kumtambua Mungu. Wengine hubaki vipofu kiroho licha ya kuwa na macho ya kimwili. Kuhusu mambo ya kidunia, kila mtu, kimsingi, ni kipofu. Ukweli ni kwamba hakuna mtu anayejihusisha na shughuli za kidunia kwa uhuru. Hakuna mwenye kuona au kusikia. Licha ya ukosefu wao wa asili, watu hudai, &ldquo;Ninaona,&rdquo; wakidhania kwamba wanaona na hivyo basi kupata dhambi kwa matendo yao. Ingawa wanadamu ni vipofu kiroho, wanajilimbikiza dhambi wanapoamini kimakosa kuwa wanaona. Yesu alisisitiza kwamba kutambua upofu wa mtu kiroho na kukiri<strong>ukweli</strong>kwa kutoona chochote huwaondolea dhambi. Kimsingi, kukiri upofu wa mtu kiroho huzuia mkusanyiko wa dhambi katika mambo ya kidunia.

  Wale ambao hawana hekima ya kimungu hawatambui ukosefu wao wa kuona katika mambo ya kawaida. Kutoweza kwao kuelewa maneno ya Yesu kunatokana na kutojua kwao kwamba Mungu amewapa uwezo wa kuona tu kwa ajili ya kuelewa mambo yanayohusiana Naye. Ili kufahamu kiini cha aya hiyo, Jeeva (nafsi) ya kila mtu lazima kwanza itambue kama wao ni vipofu au wana ufahamu katika mwili. Kwa kweli, Jeeva katika mwili wa kila mtu ni kipofu kabisa katika nyanja zote. Kila Jeeva anaamini kimakosa kuwa mwili ni wao na wao ndio watendaji wa vitendo vyote mwilini. Hata hivyo, Jeevatma haina wakala wa kujitegemea katika mwili; <strong>Atma</strong>ndiye mmiliki na mtawala wa kweli. Atma daima hufanya kazi ndani ya mwili, na, kwa kweli, Jeeva haifanyi kazi yoyote katika mwili. Bila kuona, kusikia, na kamili utendakazi, Jeeva ni kipofu, kiziwi, na mlemavu kwa kila maana. Imewekwa karibu na<strong>buddhi</strong>(akili) mwilini, Jeeva anafahamu habari inayofikia akili, lakini Jeeva hawezi kujitegemea kujua chochote. Licha ya kukosa maarifa ya moja kwa moja, Jeeva anaamini kimakosa kwamba ameshuhudia kila kitu. Ingawa Atma ndio nguvu inayofanya kazi katika mwili, Jeeva anahusisha vitendo vyote kwa makosa yenyewe. Wakati Jeeva anadai kwa uwongo kuwajibika kwa kitendo, lazima avumilie matokeo ya karmic yanayohusiana na hatua hiyo.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 119,
verse: `<b>(41)	Injili ya Yohana, sura ya 10, mstari wa 18.</b>`,
meaning: `<b>
(10:18) Hakuna aniondoleaye uhai, bali mimi nautoa kwa hiari yangu mwenyewe. Ninayo mamlaka ya kuutoa na mamlaka ya kuutwaa tena. Amri hii niliipokea kutoka kwa Baba yangu. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hakuna mtu anayejua ni lini mtu wa kawaida ataacha maisha haya. Mara mtu akifa, hatarudi. Hili linadhihirika katika kila kifo. Jeeva pia huondoka kutoka kwa mwili katika kifo. Hata hivyo, watu wengi hawatambui hilo<strong>Jeeva ni tofauti na nguvu ya maisha ndani ya mtu</strong>. Watu wengi wanafikiri kwamba Jeeva na nguvu ya maisha ni sawa. Lakini katika aya inasemwa, "<strong>Hakuna anayechukua uhai kutoka kwangu</strong>,&rdquo; jambo linaloonyesha kwamba Yesu ni tofauti, na nguvu zake ni tofauti. Ingawa kila mtu ana nguvu yake ya maisha katika mwili wake, kama Yesu, hawawezi kuiweka kando au kuichukua tena. Ndani ya mwili kuna viungo vingi vya ndani, maisha, buddhi, na manas. Kitu chochote ndani ya mwili kiko chini ya udhibiti wa Atma, sio chini ya udhibiti wa mwanadamu. Kwa hivyo, Atma anaamua kama kuweka kando maisha ya mtu au kutuma ambapo Atma anataka, kama ni kazi yake.<strong>Jeeva</strong>haina uhusiano na nguvu ya uhai katika miili yao, lakini<strong>Atma</strong>ina uhusiano na nguvu ya maisha katika mwili.

  Yesu si Jeeva wa kawaida, bali ni Atma. Kwa hivyo, Ana mamlaka ya kuweka kando maisha Yake, na hakuna mtu anayeweza kuiondoa kutoka Kwake. Hii ina maana kwamba<strong>Yesu hafi mikononi mwa mtu mwingine yeyote</strong>; kama angekufa, angechagua kuuweka kando uhai wake. Atma pekee ndiye mwenye uwezo wa kuweka maisha kando na kisha kuyarudisha inapohitajika. Roho Mtakatifu alimpa Yesu mamlaka ya kufanya hivyo, kama Yesu mwenyewe alivyotangaza, &ldquo;<strong>Hakuna mtu anayeniondolea uhai, bali mimi nautoa kwa hiari yangu mwenyewe. Ninayo mamlaka ya kuiweka chini na kuichukua tena. Amri hii niliipokea kutoka kwa Baba yangu</strong>.&rdquo; Kama ilivyotabiriwa, Yesu alifanya maisha Yake (prana au kupumua) yafiche katika mwili Wake aliposulubishwa, akionekana amekufa kwa wale waliokuwa karibu naye. Hata hivyo aliibuka hai mapema Jumapili asubuhi, akiwa amechukua maisha Yake. Hii inadhihirisha kwamba Yesu, akiwa Atma, anao uwezo wa kuutoa uhai wake na kisha kuwa hai tena katika mwili uleule, na mamlaka haya alipewa na Baba yake, Roho Mtakatifu. Zaidi ya hayo, Atma ana mamlaka ya kuchukua maisha ya wengine na kuwatuma kwa kuzaliwa upya.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 120,
verse: ` <b>(42)	Injili ya Yohana, sura ya 10, mstari wa 30.</b>`,
meaning: ` <b>
(10:30) Mimi na Baba tu umoja.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Atma ndiye Baba wa Jeeva, na vivyo hivyo, Paramatma inawajibika kwa uundaji wa Atma. Kwa hiyo, Atma pia ni Baba wa wanadamu, wakati Paramatma ni Baba wa Atma. Kama Yesu alivyo Atma, Yeye ni Mwana wa Mungu. Wakati<strong>mwana huzingatia sana baba yake</strong>, inaashiria hali ya muungano kati ya mwana na baba. Hiki ndicho kiini cha kauli ya Yesu, &ldquo;<strong>Mimi na Baba yangu tu umoja</strong>,&rdquo; alipoelekeza mtazamo Wake kwa baba yake, Roho Mtakatifu.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 121,
verse: ` <b>(43)	Injili ya Yohana, sura ya 11, mstari wa 25.</b>`,
meaning: ` <b>
(11:25) Yesu akamwambia, “Mimi ndimi huo ufufuo na uzima. Yeye aniaminiye mimi, hata kama amekufa, atakuwa anaishi.” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika muktadha huu, 'ufufuo' ni dalili ya kuzaliwa, wakati 'maisha' inaashiria ukombozi (moksham), ikimaanisha uhuru kutoka kwa mzunguko wa kuzaliwa upya. Kwa kuwa kuzaliwa na moksham vinahusiana na Atma, Yesu alisema, "Yeye aniaminiye hatazaliwa upya baada ya kufa, bali atapata.<strong>moksham</strong>.&rdquo;</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 122,
verse: `<b>(44)	Injili ya Yohana, sura ya 11, mstari wa 26.</b>`,
meaning: `<b>
(11:26) Anayeishi kwa kuniamini hatakufa kamwe.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yule ambaye amefikia moksham atapata uzima wa milele na hatakabiliwa na kifo tena. Kwa hiyo, Yesu alitangaza, “Kila mtu aliye na imani katika Mungu atapata moksham na hatakufa kamwe tena.”</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 123,
verse: `<b>(45)	Injili ya Yohana, sura ya 12, mstari wa 25.</b>`,
meaning: `<b>
(12:25) Yeyote anayependa maisha yake atayapoteza, na yeyote anayechukia maisha yake katika ulimwengu huu atayaweka kwa uzima wa milele.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Maneno ya Yesu, “Yeyote anayependa uhai wake atayapoteza,” yanaweza kufafanuliwa hivi: Wanadamu (Jeeva) wanahitaji uhai ili kuwepo duniani, na wale wanaoshikamana na maisha yao ya kidunia bila kuepukika wataupoteza kwa kuwa hawawezi kuishi milele. Uhai wa mtu hutegemea mtiririko wa Prana (nguvu ya maisha) katika mwili wake, na mara tu anapokufa, kupumua kwao hukoma kabisa. Pumzi ya mwisho inapoacha mwili na kuunganishwa na hewa ya nje, haitarudi tena. Wakati mtu anahama kutoka kuzaliwa kwake kwa kwanza hadi pili, anapokea pumzi mpya (maisha), lakini ya zamani haipatikani tena. Kwa hiyo, wale wanaotanguliza maisha yao ya kidunia na kushikamana nayo hatimaye watayapoteza. Licha ya uhakika huu, kwa kawaida watu hupenda maisha yao kuliko kitu kingine chochote na hutafuta kurefusha muda wao duniani.

  Mtu anayetamani moksham na hataki kuishi katika ulimwengu huu anachukia maisha yake mwenyewe, akionyesha kutopendezwa na mambo ya kidunia. Mtu kama huyo huacha mzunguko wa kuzaliwa na kupata uzima wa milele. Maisha haya hayana mauti, na mtu anayeyapata atayalinda. Ingawa wale wanaofikia moksham hawana maisha maalum ambayo yanafanana na ya mtu wa kawaida, neno 'uzima wa milele' linatumiwa kutusaidia kuelewa dhana hiyo. Ni muhimu kutambua kwamba mtu yeyote anayepata moksham atabaki katika hali ya umilele milele, bila kuzaliwa au kifo.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 124,
verse: `<b>(46)	Injili ya Yohana, sura ya 12, aya ya 40.</b>`,
meaning: `<b>
(12:40) Ameyapofusha macho yao, na akazifanya nyoyo zao kuwa ngumu, hata wasione kwa macho yao, wala wasione kwa nyoyo zao, wala wasigeuke, nami nitawaponya. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mungu alipokuja kama mwanadamu na kuwaambia watu hekima waliyohitaji, Atma, Mungu katika mwili, alipofusha macho yao na kuifanya mioyo yao kuwa migumu ili wasiweze kuona au kuelewa kwa mioyo yao au kuondokana na karma. Karma ndio sababu ya mateso yao. Katika mstari huu, lililo muhimu kutambua ni kwamba Atma, iliyoumbwa na Roho Mtakatifu, iko katika mwili wa kila mtu, inayoendesha kila mtu. Ingawa Atma ni Mwana wa Roho Mtakatifu, Roho Mtakatifu, Muumba, anazaliwa kama mwanadamu ili kutoa hekima. Ingawa aliyezaliwa ni Roho Mtakatifu, anaitwa Mwana wa Mungu badala ya Mungu. Kulingana na hili, Atma, iliyo ndani ya mwili, inakuwa Mwana wa Roho Mtakatifu. Kufanyika mwili kwa Roho Mtakatifu kama mwanadamu pia huitwa Mwana wa Roho Mtakatifu. Atma katika mwili hupofusha macho ya mtu asiyejua na hufanya mioyo yao kuwa migumu ili wasielewe maneno ya Mwana wa Mungu na hawawezi kuondokana na karma yao.

  Roho Mtakatifu, Muumba, aliumba mwana Atma na kumweka katika mwili wa mwanadamu. Zaidi ya hayo, Roho Mtakatifu aliumba Mwana mwingine katika umbo la mwanadamu ili kutoa hekima kwa wale ambao hawakujua. Wakati Atma ndani ya mwili wa mwanadamu iko kila wakati, mwili wa mwanadamu wa <strong>Atma</strong>huonekana tu duniani mara kwa mara ili kufundisha hekima. Hata wakati umwilisho wa mwanadamu wa Atma unapotoa hekima kwa watu ambao hawapendezwi na wanaomwonea wivu Roho Mtakatifu, Atma ndani ya mwili husababisha akili zao (buddhi) kushindwa kuielewa. Walakini, ikiwa mtu anamiliki<strong>ibada na maslahi</strong>katika Roho Mtakatifu, Atma ndani ya mwili inawawezesha kuelewa maneno ya umwilisho wa mwanadamu wa Atma. Mtu lazima atambue Atma ndani ya mwili na Mwana wa pili, aliyejumuishwa na umbo la mwanadamu,<strong>kufahamu kweli hekima ya Roho Mtakatifu</strong>.</div></div>
  </span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 125,
verse: ` <b>(47)	Injili ya Yohana, sura ya 12, aya ya 47 na 48.</b>`,
meaning: ` <b>
(12:47) Ikiwa mtu atayasikia maneno yangu, lakini hayashiki, mimi simhukumu mtu huyo. Kwa maana sikuja kuhukumu ulimwengu, bali kuokoa ulimwengu.
<br><br>
(12:48) Yuko hakimu kwa anaye nikataa na asiyekubali maneno yangu; maneno yale niliyosema yatawahukumu siku ya mwisho.`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Inaweza kusemwa kwamba aliyezungumza maneno haya ni Atma ambaye yuko katika umbo la mwanadamu. Mtu yeyote anaposikia lakini akapuuza kufahamu hekima inayotolewa na Mungu anapokuja katika umbo la mwanadamu, Atma katika umbo la mwanadamu haihukumu maisha yao yanayofuata kwa msingi wa dhambi na punya baada ya kifo. Atma, ambaye alikuja kama mwanadamu kufundisha hekima, hakuja kuhukumu maisha yajayo ya wanadamu. Mungu (Atma) alikuja kama mwanadamu ili kudhihirisha hekima yake kwa watu na kuwaokoa. Mtu mwingine anahukumu maisha ya baadae ya mtu ambaye haisikii maneno ya Atma katika umbo la mwanadamu na hamkiri kuwa ni mkuu. Mtu anapaswa kujua kwamba hakimu kama huyo ni Atma, ambaye yuko kila wakati kwenye mwili. Atma katika mwili wa mwanadamu huamua kuzaliwa tena siku ya kifo kulingana na hekima iliyotolewa na Atma, ambaye yuko katika umbo la mwanadamu.<strong>Mtu hawezi kumjua Roho Mtakatifu isipokuwa anaelewa kazi ya Atma katika mwili na Atma (Bhagavan), ambaye huja katika umbo la mwanadamu.</strong></div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 126,
verse: ` <b>(48)	Injili ya Yohana, sura ya 12, aya ya 49 na 50.</b>`,
meaning: ` <b>
(12:49) Maana mimi sikunena kwa nafsi yangu, bali Baba aliyenituma ameniamuru niseme yote niliyonena.
<br><br>
 (12:50) Najua kwamba amri yake inaongoza kwenye uzima wa milele. Kwa hiyo, chochote ninachosema ni kile ambacho Baba ameniambia niseme. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mtu anapaswa kuelewa kwamba<strong>Atma (Bhagavan)</strong>, ambaye alikuja kama mwanadamu, alisema maneno haya. Yesu, Mungu katika umbo la mwanadamu, alitamka kauli hii. Wakati wowote Mungu anapopata mwili kama mwanadamu, hekima Yake yote hutoka kwa Roho Mtakatifu. Yule aliyekuja katika umbo la mwanadamu alitaja kwamba Roho Mtakatifu ndiye aliyemsukuma kuwasilisha hekima hii. Hekima inayotolewa na Atma (Bhagavan) katika umbo la mwanadamu inaongoza kwa<strong>uzima wa milele (moksham)</strong>. Ingawa yule aliyekuja katika umbo la mwanadamu hajatambulishwa waziwazi kama Mungu, Alisema, &ldquo;<strong>Ninachosema ni kile ambacho Baba ameniambia niseme</strong>,&rdquo; akifunua kwamba mzungumzaji ni Roho Mtakatifu. Kwa hili, inakuwa dhahiri kwamba anayezungumza ni Roho Mtakatifu. Hata hivyo, kwa mujibu wa mafundisho ya kiroho, inapaswa kusisitizwa kwamba Roho Mtakatifu ni Baba, na Atma ambaye alikuja katika umbo la mwanadamu ni Mwana.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 127,
verse: ` <b>(49) Injili ya Yohana, sura ya 14, mstari wa 7.</b>`,
meaning: ` <b>
(14:7) Kama mngenijua mimi kweli, mngemjua na Baba yangu pia. Tangu sasa na kuendelea, mnamjua na mmemwona.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aya hii inafanana na ile iliyotajwa hapo awali (Yohana 12:49, 12:50). Kama nilivyotaja hapo awali, Baba na Mwana ni wale wale; hata hivyo, kulingana na fundisho la kiroho, inapaswa kusemwa kwamba Baba na Mwana ni tofauti. Yesu alisema, &ldquo;<strong>Kama ninyi mnanijua mimi, mtamjua na Baba yangu pia</strong>.&rdquo; Ingawa Mungu, Alipokuja kama mwanadamu, anaitwa Mwana wa Mungu, kwa kweli, Baba Mwenyewe yuko katika umbo la Mwana. Kwa hiyo, aya hiyo inasema, &ldquo;<strong>Kama mnamjua Mwana, mnamjua Baba</strong>.&rdquo;</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 128,
verse: ` <b>(50) Injili ya Yohana, sura ya 14, aya ya 8 na 9.</b>`,
meaning: ` <b>
(14:8) Filipo akasema, “Bwana, tuonyeshe Baba na hilo litatosha kwetu.”
<br><br>
(14:9) Yesu akajibu: “Je, hunijui, Filipo, hata baada ya kukaa kwenu muda mrefu namna hii? Yeyote aliyeniona mimi amemwona Baba. Unawezaje kusema, “Tuonyeshe Baba?” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mstari huu unafunua kwamba mwenye sura inayoonekana ni Roho Mtakatifu. Kwa hiyo, Yesu alisema,<b>"Yeyote aliyeniona mimi amemwona Baba.”</b></div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 129,
verse: `<b>(51)	Injili ya Yohana, sura ya 14, mstari wa 10. </b>`,
meaning: `<b>
(14:10) huamini Kwamba mimi niko ndani ya Baba, na Baba yu ndani yangu? Maneno ninayowaambia siyasemi kwa mamlaka yangu mwenyewe. Badala yake, ni Baba, anayeishi ndani yangu, ambaye anafanya kazi yake. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wakati mtu amejificha, yeye na kujificha kwake haviwezi kutenganishwa. Kwa hiyo, tajiri anapojifanya kuwa ombaomba, mtu mmoja mmoja tajiri na mwombaji huishi pamoja. Tajiri huchukua sura ya mwombaji wakati wa kujificha kwake. Ijapokuwa mwombaji huyo anajitosa katika soko la kuomba omba, kwa hakika, ni tajiri anayefanya tendo hilo. Tajiri asiyeonekana anatekeleza jukumu la ombaomba. Tajiri anapokaa ndani ya mwombaji, na maneno ya mwombaji yanatoka kwa tajiri, inaweza kusemwa kwamba tajiri yuko ndani ya mwombaji, na kwa usawa, mwombaji yuko ndani ya tajiri - wanaishi pamoja. Kwa kuwa utu wa ndani una umuhimu mkubwa kuliko uso wa nje, vitendo vyote vinavyofanywa kwa kujificha vinatekelezwa na mtu wa ndani. Kwa kuzingatia kwamba mtu aliye ndani ni muhimu zaidi kuliko sura ya nje, ni sahihi kusema kwamba kazi zote zinazofanywa na mtu anayeonekana kwa nje ni za mtu wa ndani. Licha ya mwonekano wa nje wa mwombaji huyo, anajumuisha mtu tajiri ndani. Kwa maana fulani, inaweza kuthibitishwa kwamba mwombaji kwa hakika ndiye tajiri. Roho Mtakatifu, aliyefichwa ndani ya mwanadamu fomu, ina umuhimu. Ni muhimu kutambua kwamba kujificha ni kwa muda, wakati nafsi ndani ni ya milele. Inaweza kuthibitishwa kuwa <strong>aliye ndani ya Yesu ni Roho Mtakatifu</strong>. Kwa hiyo, Yesu alitangaza, &ldquo;Baba yu ndani yangu, nami niko ndani ya Baba.&rdquo;</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 130,
verse: `<b>(52)	Injili ya Yohana, sura ya 14, mstari wa 6.</b>`,
meaning: `<b>
(14:6) Yesu akajibu, “Mimi ndimi njia na kweli na uzima. mtu haji kwa Baba ila kwa njia ya mimi. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kwa kuzingatia mfano uliopita, njia ya kumwelewa tajiri ni kupitia kwa mwombaji. Ombaomba akikamatwa, utambulisho wa tajiri unadhihirika. Tajiri akishatambuliwa, mtu anaweza kupata mali aliyonayo. Vile vile, njia ya kumwelewa Mungu ni kupitia kupata mwili kama mwanadamu. Ikiwa mtu anaelewa yule aliyechukua umbo la mwanadamu, ataelewa pia Mungu anayeishi ndani Yake. Kumjua Mungu kunaongoza kwenye kupata uzima wa milele ulio katika Mungu. Kwa hiyo, pindi moja Yesu alisema, &ldquo;<strong>Mimi ndimi njia na kweli na uzima</strong>.&rdquo; Yesu aliposema, &ldquo;Mimi ndimi njia,&rdquo; inaashiria<strong>njia ya kumwelewa Mungu kupitia kwangu</strong>. Pia alisema, &ldquo;Mimi ndiye ukweli,&rdquo; akimaanisha kwamba Yeye ndiye udhihirisho wa kweli wa Mungu. Zaidi ya hayo, alitangaza, &ldquo;<strong>Mimi ni uzima wa milele</strong>.&rdquo; Dai hili linatokana na uhakika wa kwamba Mungu wa kweli katika umbo la Yesu alitangaza kwamba mtu yeyote anayemfahamu angepata paraloka. (moksham) na kupata uzima wa milele bila kukabili kifo katika paraloka.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 131,
verse: ` <b>(53)	Injili ya Yohana, sura ya 14, mstari wa 16.</b>`,
meaning: `<b>
(14:16) Nitamwomba Baba, naye atawapa Msaidizi mwingine wa kukusaidia na kuwa nawe milele.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Roho Mtakatifu habaki kudumu katika umbo la mwanadamu miongoni mwa watu. Mara kwa mara, Roho Mtakatifu hubadilisha mwonekano na kuingia katika maisha ya watu inapohitajika. Roho Mtakatifu alipochukua umbo la Yesu, aliishi kati ya watu kwa miaka 33 tu. Kati ya miaka hii 33, Alitoa hekima kwa miaka mitatu tu. Hata kabla ya kutimiza miaka mitatu, Aliwaacha watu baada ya miaka miwili na miezi mitatu tu. Yesu alisema, "Nitamwomba Baba yangu atume Wakili mwingine (Adaranakarta) mara ya pili, ambaye anaishi muda mrefu zaidi kuliko mimi na kufundisha hekima." Anayekuja ni sawa na yule anayesema Anamsihi ajaye. Ni yuleyule anayekuja. Ni yule yule aliyesema kwamba atamwomba yule anayekuja. Ni yuleyule aliyesema atamtuma Wakili mwingine (Msaidizi).<strong>Kuna moja tu</strong>. Ni yuleyule aliyesema, ni yuleyule aliyeuliza, na ni yule yule anayekuja. Ikiwa hatuelewi kwamba kuna mmoja tu ambaye anacheza wahusika wote, yule anayesema, anauliza, na anakuja anaweza kuonekana tofauti. Bila kutambua hilo<strong>kuna moja tu</strong><strong>kuandaa majukumu haya</strong>, tunashindwa kumwelewa Mungu aliye mbele yetu katika umbo la kibinadamu, Mungu anayesihi, na Mungu anayekuja. Ni muhimu kuelewa kwamba yule anayemsihi Baba kama Yesu ndiye Mfariji ajaye. Wakili anayekuja ni Roho Mtakatifu.
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 132,
verse: `<b>(54)	Injili ya Yohana, sura ya 14, aya ya 17.</b>`,
meaning: `<b>
(14:17) Ulimwengu hauwezi kumkubali kwa sababu haumuoni wala haumtambui. Bali ninyi mnamjua, kwa maana anaishi pamoja nanyi na atakuwa ndani yenu.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Neno 'ulimwengu (loka)' linaweza kueleweka kujumuisha wale watu ambao wanapitia matokeo ya karma duniani. Mungu anapochukua umbo la mwanadamu, wale waliofungwa na karma wanaweza wasimtambue au kumtambua. Wale wanaoshindwa kumtambua hawawezi kupokea mafundisho Yake au hekima ya kimungu. Ni wale tu ambao wamepata hekima fulani kupitia Yesu wataweza kumtambua Msaidizi anayekuja baada ya Yesu katika umbo la kibinadamu. Mfariji hukaa ndani ya watu hao, na wale wanaomfahamu wataishi pamoja Naye, wakitambua uwepo wake ndani yao kama Atma.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 133,
verse: `<b>(55)	Injili ya Yohana, sura ya 14, mstari wa 20.</b>`,
meaning: ` <b>
(14:20) Siku hiyo mtatambua ya kuwa mimi niko ndani ya Baba yangu, nanyi mko ndani yangu, nami ni ndani yenu.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kabla ya kuzama katika mstari huu, mtu anapaswa kufahamu umbo la kweli la Mungu. Mungu amegawanywa katika nyanja tatu, akienea ulimwenguni kote. Ingawa kuna Mungu mmoja tu, Yeye amegawanywa katika nafsi tatu&mdash; Jeevatma, Atma, na Paramatma.<strong>Jeevatma inakaa katika eneo maalum ndani ya miili ya viumbe vyote vilivyo hai, wakati Atma inaenea kwa ukamilifu wa mwili wa kila kiumbe hai. Paramatma iko ndani na nje ya mwili, iko ndani ya kila molekuli</strong>. Mtu anayeelewa dhana hii anachukuliwa kuwa gnani kamili. Paramatma, Muumba, anachukua umbo la mwanadamu ili kuwapa watu hekima. Wakati wa udhihirisho huu, Yeye anadai kwamba Yeye ni Mwana, na Baba ni Paramatma. Istilahi hii hutumikia kusudi la kutofautisha, lakini inaweza kuthibitishwa kwamba Mwana na Baba kwa asili ni sawa. Mungu anaonekana katika kivuli cha '<strong>Mwana</strong>' na anaishi duniani katika maisha yake yote, akipeana hekima. Hii hutumika kama njia ya kueneza hekima. Vinginevyo, Mungu alituma Atma kutoka Kwake ili kuunda, kudumisha, na kuua Jeevas. Atma, ambayo inasimamia miili ya viumbe hai, pia inachukuliwa kuwa Mwana wa Mungu. Atma inakaa ndani ya Paramatma, na Jeevatma ipo ndani ya eneo la Atma. Kwa hivyo, usemi "<strong>Mimi niko (Atma) ndani ya Baba yangu</strong>&rdquo; hutumika badala ya kusema, &ldquo;<strong>Mimi ni (Atma) ndani ya Baba yangu, Paramatma.&rdquo;</strong>Kama Jeeva yupo ndani ya mwili ikitawaliwa na Atma, aya hiyo inasisitiza, &ldquo;Ninyi (Jeevatmas) umo ndani yangu (Atma).&rdquo; Atma, iliyoenea katika mwili mzima, pia hutawanywa ndani yako (Jeevatma), ambaye yuko katika eneo maalum. Kwa hiyo, aya hiyo inasema, &ldquo;<strong>Siku utakapojua hekima ya nafsi, utajua kuwa mimi niko ndani yako</strong>&rdquo;Wale wasiojua dhana ya nafsi tatu wanashindwa kutambua nani anakaa ndani ya nani. Kwa hiyo,<strong>ni muhimu kuelewa nadharia ya Thraitha, ambayo inafafanua jinsi Mungu alivyo katika umbo la nafsi tatu.</strong>
</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 134,
verse: ` <b>(56)	Injili ya Yohana, sura ya 14, aya ya 25 na 26.</b>`,
meaning: `<b>
(14:25) Hayo yote nimeyasema nikiwa bado nanyi.
<br><br>
(14:26) Lakini huyo Msaidizi, huyo Roho Mtakatifu, ambaye Baba atampeleka kwa jina langu, atawafundisha yote, na kuwakumbusha yote niliyowaambia. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Wakati mmoja, Yesu aliwaambia wanafunzi wake, akisema, "Wakati ningali pamoja nanyi, ninazungumza maneno haya." Zaidi ya hayo, Yeye aliwasilisha, "Wakili mwingine (Adaranakarta) atakuja kwenu baada ya mimi kufa." Zaidi ya hayo, Alifafanua, &ldquo; <strong>Wakili, anayekuja kama mimi, angewakumbusha yote niliyosema na kuwafundisha yote ambayo sikusema</strong>.&rdquo; Jambo muhimu la kuzingatia hapa ni matumizi ya Yesu ya jina 'Wakili.' Akifafanua maana ya Wakili, Yeye alisema, "<strong>Mtetezi ni Roho Mtakatifu ambaye Baba atamtuma kwa jina langu</strong>.&rdquo; Uchunguzi wa kina wa mstari huo unaonyesha kwamba unaanza na 'Baba' na kumalizia kwa 'Roho Mtakatifu.' Mfuatano huu unapendekeza kwamba baba yake Yesu ni Roho Mtakatifu. Inaweza kuwekwa kuwa Mwana ndiye aliyejificha, wakati Baba ndiye asiyejificha. Kwa kweli, zote mbili ni moja na sawa<strong>.</strong> <strong>Yule anayetoa hekima na kuondoa karma anaitwa Mtetezi (Msaidizi)</strong>. Yesu alipodai kwamba Mungu ndiye anayemtuma Mungu katika jina la Wakili, alisema hivi: &ldquo;Baba ndiye Roho Mtakatifu atakayetuma kwa jina langu.&rdquo; Hii inafafanua hilo<strong>Mungu anachukua sura, anachukua kivuli cha Wakili, na kutoa hekima ya kimungu</strong>. Ni vyema kutambua kwamba Yesu alitoa maneno haya ili kuhakikisha hata wale wasiojua jambo hili wangeweza kuelewa.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 135,
verse: ` <b>(57)	Injili ya Yohana, sura ya 15, mstari wa 23. </b>`,
meaning: `<b>
(15:23) Anayenichukia mimi anamchukia na Baba yangu pia.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nimekuwa nikisisitiza tangu mwanzo kwamba Mungu amefichwa katika umbo la Yesu, na jina linalohusishwa na kujificha kwa Mungu ni Yesu. Hakika, hakuna mwingine ila Roho Mtakatifu amekuja kwa jina la Yesu. Kwa hivyo, mtu yeyote anayemkufuru Yesu pia anakufuru Paramatma. Msaidizi (Wakili) si yule atakayekuja baada ya Yesu.

  Yesu pia alikuwa Wakili. Wakati wowote Mungu anapochukua umbo la mwanadamu, Anapaswa kuitwa Wakili mara kwa mara. <strong>Wakili hutoa hekima ambayo hutumika kama dawa ya karma,</strong>na Mungu peke yake ndiye anayetoa mafundisho ambayo huondoa karma. Kwa hiyo, inaweza kuthibitishwa kwamba Wakili ni sawa na Roho Mtakatifu. Hata hivyo, kumtambua Mungu anapovaa umbo la mwanadamu duniani huthibitika kuwa changamoto. Changamoto hii inakaziwa na watu binafsi katika Ukristo wanaodai kuwa gnani na kumtaja Yesu kuwa ndugu. Inasisitizwa kwamba Yesu si ndugu wa mtu yeyote. Bila kujali kama Anatokea kama Yesu au chini ya jina lingine, Anatambulishwa kuwa Roho Mtakatifu, na kumfanya kuwa Baba, si ndugu.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 136,
verse: `<b>(58)	Injili ya Yohana, sura ya 15, aya ya 24 na 25. </b>`,
meaning: ` <b>
(15:24) Kama nisingalifanya miongoni mwao kazi ambazo hakuna mtu mwingine aliyezifanya, wasingalikuwa na dhambi. Kama ilivyo, wameona, na bado wamenichukia mimi na Baba yangu pia.
<br><br>
(15:25) Lakini hii ni ili kutimiza yale yaliyoandikwa katika Sheria yao: 'Walinichukia bila sababu.'</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Kazi ambayo hakuna awezaye kuikamilisha duniani ni kusamehe na kuondoa dhambi za mtu. Yesu alisema kwamba dhambi hazingefanyika ikiwa hangefanya kazi ya kusamehe karma ya wengine. Wakati Yeye hadharani alisamehe dhambi za watu fulani, wale waliokuwa na kijicho na kutojua ukuu Wake walikuwa na chuki dhidi yake. Kumchukia Yesu ni sawa na kumchukia Roho Mtakatifu. Wale waliokuwa na chuki dhidi Yake<strong>bila sababu halali</strong>dhambi.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 137,
verse: ` <b>(59)	Injili ya Yohana, sura ya 15, mistari ya 26 na 27 </b>`,
meaning: `<b>
(15:26) Atakapokuja huyo Msaidizi, nitakayewapelekea kutoka kwa Baba, huyo Roho wa kweli, atokaye kwa Baba, yeye atanishuhudia.
<br><br>
(15:27) Na ninyi pia mnapaswa kushuhudia, kwa maana mmekuwa pamoja nami tangu mwanzo.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu alikuja kama Wakili (Bhagavan) na akataja kwamba angetuma Wakili mwingine kutoka kwa Baba kwa watu. Kwa mujibu wa sheria ya kiroho, Yeye aliwasilisha kile alichopaswa kusema. Hata hivyo, hakuna Wakili mwingine pamoja na Baba; <strong>kuna Mungu mmoja tu</strong>ambaye mara kwa mara huonekana katika kivuli cha Wakili. Hakuna mwingine anayemtuma. Wakati Yesu na Roho Mtakatifu wanachukuliwa kuwa sawa, mtumaji na anayekuja wote wanafanana. Yesu alisema, &ldquo;<strong>Roho wa kweli anakuja kama Mtetezi, naye atanishuhudia</strong>.&rdquo; Wakati yule anayekuja na anayekwenda ni sawa, haishangazi kwamba anayekuja atazungumza juu yake. anayekwenda. Wakili anayekuja anapomjadili Yesu, wanafunzi wake bila shaka watamkumbuka. Kwa hiyo, wanafunzi watathibitisha kwamba Yesu alikuja na kuwapa hekima.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 138,
verse: ` <b>(60)	Injili ya Yohana, sura ya 16, mstari wa 7. </b>`,
meaning: `<b>
(16:7) Lakini, amin, nawaambieni, ni kwa faida yenu kwamba mimi niondoke. Nisipoondoka, huyo Msaidizi hatakuja kwenu; lakini nikienda, nitampeleka kwenu.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Katika mlinganisho wa mtu mmoja anayecheza wahusika wawili katika mchezo wa kuigiza, mhusika wa pili anaonekana jukwaani baada ya mhusika wa kwanza kuondoka. Kwa kuwa ni mtu yule yule anayecheza majukumu yote mawili, mhusika wa kwanza lazima aende nyuma ya pazia ili mhusika wa kwanza achukue jukumu la pili. Haiwezekani kwa mhusika wa pili kujitokeza isipokuwa mhusika wa kwanza arudi nyuma ya jukwaa. Mpito huu hutokea kwa sababu mtu yuleyule anaonyesha wahusika wote wawili. Vivyo hivyo, yule aliyekuja katika daraka la Yesu anatarajiwa kurudi duniani akiwa na tabia ya pili. Kwa hiyo, Yesu atakapoondoka kutoka kwa watu, yule aliyecheza nafasi ya Yesu atarudi katika nafasi ya pili. Roho Mtakatifu alichukua nafasi ya Yesu. Ikiwa Angekuja tena kuwa pamoja na watu, Angelazimika kuacha jukumu Lake kama Yesu na kutokea tena katika jukumu jipya, akiwa na jina jipya, na mwonekano mpya. Kwa hiyo, Yesu alisema, &ldquo;<strong>Ni kwa faida yenu kwamba mimi ninakwenda zangu.</strong><strong>Nisipoondoka, Wakili hatakuja kwenu</strong>.&rdquo; Wakati bila kutaja kwa uwazi kwamba Angefanya kurudi kama Wakili, Akasema, &ldquo;Nitamtuma kwenu nitakapoondoka.&rdquo; Kutokana na maneno haya, mtu yeyote mwenye akili atatambua kwa urahisi kwamba anayeondoka na anayerudi ni sawa.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 139,
verse: `<b>(61)	Injili ya Yohana, sura ya 16, mstari wa 8.  </b>`,
meaning: ` <b>
(16:8) Atakapokuja, atauthibitisha ulimwengu kuwa uko katika makosa juu ya dhambi na uadilifu na hukumu.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Baada ya jukumu la Yesu kutoweka nyuma ya pazia, Wakili (Bhagavan) atakuja katika nafasi ya pili na umwilisho wa pili. Neno 'Wakili' linawakilisha kupata mwili kwa Mungu, lakini si jina la Mungu. Yule anayekuja kama Wakili anaweza kuwa na jina lolote duniani. Kwa hivyo, hakuna anayeweza kuamua ikiwa mtu huyu ni mwili wa Mungu. Ingawa hakuna anayejua umbo au jina la Wakili, kuna nafasi fulani ya kumtambua kupitia matendo yake. Wakati<strong>Wakili</strong>anakuja duniani, Anazungumzia dhambi, akifunua jinsi mtu hupata dhambi, ambapo huhifadhiwa mpaka wakati wa kifo, na matokeo ya dhambi.<strong>Anaeleza kwamba hekima ya kimungu ni muhimu ili kujiondolea dhambi alizopata</strong>, kama vile dhambi ni kama kuni na hekima ni kama moto. Ni kupitia hekima pekee ndipo mtu anaweza kuepuka kupata dhambi na kupata hekima ya kimungu. Dhambi ya mtu ambaye hapati hekima ya kimungu maishani hudumu hadi kifo. Mtu kama huyo lazima azaliwe upya siku hiyo hiyo, dakika, na dakika moja baada ya kifo. Siku ya kufa ni inayojulikana kama siku ya mwisho. Siku ya mwisho ya maisha inakuwa siku ya kwanza ya maisha yanayofuata. Mtu huyo lazima azaliwe upya ndani ya sekunde ya kifo chake. Inaweza kusemwa kwamba tofauti ya wakati kati ya kifo na kuzaliwa upya ni moja tu ya kumi ya pili. Katika muda huo mfupi,<strong>Atma</strong>huhukumu waliokufa kulingana na dhambi zao na punya. Atma kisha huamua kile ambacho mtu lazima ale, kunywa, na uzoefu katika kila wakati wa kuzaliwa mara ya pili. Uhai wa mzaliwa huamuliwa na hukumu iliyotolewa katika kifo. Jinsi mtu atakavyoishi maisha yake yajayo huamuliwa kulingana na hukumu ya siku yake ya mwisho. Atma, ambayo ni pamoja na mtu aliyekufa, huwahukumu kwa usahihi kulingana na matendo yao tangu utoto. Hatua za kuchukua katika maisha yajayo huamuliwa kulingana na karma iliyopo. Hakuna anayeweza kubatilisha uamuzi huu, na kila mtu lazima akubali hukumu.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 140,
verse: `<b>(62)	Injili ya Yohana, sura ya 16, mstari wa 12. </b>`,
meaning: `<b>
(16:12) Ninayo mengi ya kuwaambia, zaidi ya mnayoweza kustahimili sasa. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mungu anapopata mwili kama mwanadamu, ni muhimu kutoa hekima kwa uangalifu, kwa kuzingatia hisia za watu, na mafundisho yanapaswa kulengwa kulingana na wakati na muktadha. Hekima ya kimungu yahitaji kuonyeshwa kwa usikivu kwa utayari wa wasikilizaji kupokea ukweli. Kwa kulinganisha, ukimjulisha mwanamke aliyechumbiwa na wewe kwamba tayari ni mke wako, anaweza asikubali kabla ya harusi, na kusababisha migogoro. Hata hivyo, kushiriki habari zile zile baada ya arusi kungeleta furaha bila mabishano. Vivyo hivyo, tunapotoa hekima ya kimungu kwa wale ambao huenda wasivumilie kweli, kuna hatari ya kutoelewana na kupingwa. Kwa hivyo, hata wakati Mungu anachukua umbo la mwanadamu, ukweli lazima ushirikiwe kwa busara. Kwa mfano, ikiwa mtu angedai kwamba Ravana Brahma ni mwili wa Mungu, watazamaji wa kisasa wanaweza kufahamu dhana hiyo kwa kiasi fulani. Hata hivyo, kama kauli hiyohiyo ingetolewa miaka 50 iliyopita, huenda kukawa na kutoelewana, huku watu wakimwona Ravana kuwa mwovu na wa kutisha. Kwa hivyo, kuna matukio ambapo hekima ambayo inakusudiwa kushirikiwa mapema lazima iahirishwe. Katika muktadha huu, Yesu alikubali kanuni hii aliposema, &ldquo;<strong>Ninayo mengi ya kuwaambia, zaidi ya mnayoweza kustahimili sasa</strong>,&rdquo; kwa wanafunzi Wake. Akitambua kwamba ulikuwa ni wakati wa Yeye kuondoka kutoka kwa ubinadamu, Aliwajulisha wanafunzi Wake kwamba Wakili ajaye angefikisha kile ambacho hakuzungumza.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 141,
verse: `<b>(63)	Injili ya Yohana, sura ya 16, mstari wa 13. </b>`,
meaning: `<b>
(16:13) Lakini yeye atakapokuja, huyo Roho wa kweli, atawaongoza awatie kwenye kweli yote. Hatanena kwa nafsi yake; Atazungumza tu kile anachosikia, na atakuambia kile ambacho bado kitatokea. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu alitabiri kuhusu Wakili anayekuja. Neno 'Roho wa kweli' linamaanisha '<strong>Mungu wa hekima</strong>.' Yesu aliwasilisha kwamba Mungu ambaye atakuja baada Yake angeongoza kila mtu kwenye ukweli na kuwasilisha ukweli pekee. Ijapokuwa Mungu alijivika umbo la kibinadamu, na kujiendesha kwa njia ya kibinadamu, Yesu alitaja, &ldquo;Kama mwanadamu, hafundishi kitu peke yake; Yeye huzungumza tu anayoyasikia.&rdquo; Ukijiuliza ni nani aliyempa taarifa Wakili, chanzo ni kimoja tu. Kwa kuwa ni mmoja tu anayekuja, Yeye ndiye yule yule anayefikisha hekima. Kwa hiyo, ni dhahiri kwamba mtu anayeonekana anaweza pia kueleza kile ambacho Mungu amesema. Ni Mungu pekee anayeweza kuwasiliana na hekima ya Mungu. Badala ya kusema kwamba wanadamu hawawezi kueleza hekima ya Mungu, inasemwa kwamba Wakili huyo atazungumza tu kile ambacho amesikia.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 142,
verse: ` <b>(64) Injili ya Yohana, sura ya 16, aya ya 14 na 15 </b>`,
meaning: ` <b>
(16:14) Atanitukuza mimi kwa sababu ni kutoka kwangu atapokea yale atakayowajulisha.
<br><br>
(16:15) Yote yaliyo ya Baba ni yangu. Ndiyo maana nilisema kwamba Roho atapokea kutoka kwangu kwamba atawajulisha ninyi.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ukiitazama aya hii, baadhi ya sehemu zina maana na nyingine hazina maana. Aya hii ni kama kucheza mchezo wa kujificha na kutafuta na watu. Hapo awali, Yesu alitaja kwamba Roho mpya ya kweli inayokuja ingefundisha kile anachosikia. Baadaye, katika mstari unaofuata, Alisema kwamba Wakili angechukua kile Alichopokea kutoka kwa Yesu na kufikisha kwa watu. Zaidi ya hayo, Yesu alidai kwamba Wakili huyo angeeleza mambo ambayo Yesu hakuwa amesema. Hata hivyo, katika kauli ya sasa, Yesu anataja kwamba Wakili angewajulisha watu juu ya kile alichopokea kutoka kwa Yesu. Kutopatana kunakoonekana katika kauli za Yesu kunaweza kusababisha kuchanganyikiwa. Hata hivyo, kuna sababu ya makusudi ya utata huu. Yesu alichagua kujieleza kwa njia ambayo<strong>wale wanaopendezwa kikweli na hekima Yake wangefahamu, na wale wasiopendezwa hawangefahamu</strong>. Alisema zaidi kwamba Wakili anayekuja angeshiriki kile ambacho Yesu alikuwa amesema ili kumtukuza. Kisha Yesu akathibitisha kwamba vyote vilivyo vya Baba ni vyake, huku Baba akimaanisha Roho Mtakatifu au Mungu. Kwa kusisitiza kwamba hekima ya Mungu ni yake na kwamba Wakili angefikisha kile alichopokea kutoka kwa Yesu, inakuwa dhahiri kwamba Yesu na Roho Mtakatifu ni visawe. Badala ya kusema kwa uwazi, "<strong>Mimi ni Mungu</strong>,&rdquo; Yesu alisema hivyo, &ldquo;<strong>Maneno yote ya Mungu ni yangu</strong>.&rdquo;</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 143,
verse: ` <b>(65)	Injili ya Yohana, sura ya 16, mstari wa 16. </b>`,
meaning: `<b>
(16:16) Yesu aliendelea kusema, “Bado kitambo kidogo hamtaniona tena, na baada ya kitambo kidogo mtaniona. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu aliwaambia wanafunzi wake kwamba hawatamwona tena baada ya kitambo kidogo, akionyesha kuondoka kwake katikati ya watu na kukomesha kuonekana kwake kwao. Pia alitaja kwamba wangemwona tena baada ya muda kidogo, akimaanisha kwamba angeacha umbo lake la kimwili, asitokee tena katika udhihirisho uleule wa mwili. Kauli hii iliwashangaza wanafunzi, na kuwaongoza kuuliza kwa nini Yesu alisema kumuona tena baada ya muda kidogo. Yesu aliposema, “Bado kitambo kidogo hamtaniona tena, na baada ya kitambo kidogo mtaniona,” huenda wengine walijiuliza ikiwa angejificha kwa muda kisha kutokea tena. Hata hivyo, katika kisa kilichotangulia, Yesu alikuwa ameeleza, “Nitakwenda. Wakili hatakuja kwako isipokuwa niende. nitakwenda na kumtuma.” Hivyo, Yesu alikuwa akidokeza kwamba angetimiza ahadi yake ya kuondoka, na baada ya muda fulani, wangemwona tena kupitia kwa Wakili anayekuja, ambaye pia alikuwa Yesu. Katika muktadha huu, aya hiyo inakuwa thabiti pale mtu anapotambua kwamba yule (Yesu) anayeondoka na yule (Wakili) anayerudi wanafanana. Yesu alisisitiza kwamba kuona mmoja wao ni sawa na kuona mmoja tu, kwani Yesu na Wakili ni kitu kimoja.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 144,
verse: ` <b>(66) Injili ya Yohana, sura ya 16, 17, 18, 19, 20, 21 na 22. </b>`,
meaning: `<b>
(16:17) Basi baadhi ya wanafunzi wake wakasemezana wao kwa wao, Ana maana gani kusema, Bado kitambo kidogo hamtaniona tena; na baada ya kitambo kidogo. nanyi mtaniona, na kwa sababu ninaenda kwa Baba?
<br><br>
(16:18) Waliendelea kuuliza, “Anamaanisha nini kwa kusema ‘bado kitambo kidogo’? Hatuelewi anachosema.”
<br><br>
(16:19) Yesu alipoona walitaka kumwuliza juu ya jambo hilo, akawaambia, mnaulizana nilimaanisha nini niliposema baada ya muda mfupi hamtaniona tena, na baada ya muda mchache mtaniona?
<br><br>
(16:20) Amin, amin, nawaambia, mtalia na kuomboleza wakati ulimwengu ukifurahi. Mtahuzunika, lakini huzuni yenu itageuka kuwa furaha.
<br><br>
(16:21) Mwanamke anayezaa ana uchungu kwa sababu wakati wake umefika; lakini mtoto akizaliwa, husahau dhiki kwa sababu ya furaha yake kwamba mtoto amezaliwa ulimwenguni.
<br><br>
(16:22) Basi, pamoja nanyi: Sasa ni wakati wa huzuni yenu, lakini nitawaona tena nanyi mtafurahi, na hakuna mtu atakayewaondolea furaha yenu. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Yesu aliposema maneno haya, “Bado kitambo kidogo hamtaniona tena, na baada ya kitambo kidogo mtaniona,” ilikuwa vigumu kwa watu kuelewa. Kwa kujibu, Yesu alionyesha wazo hilo kwa kutumia mfano wa mwanamke anayezaa. Alieleza kwamba, kama vile mwanamke anavyopata uchungu wakati wa kuzaa, wanafunzi wangepatwa na dhiki kwa sababu ya kuondoka Kwake. Hata hivyo, Aliwahakikishia kwamba watapata furaha na shangwe sawa na mwanamke ambaye husahau uchungu mara tu mtoto anapozaliwa. Yesu alihutubia wale waliokuwapo, akikiri kwamba kungekuwa na kipindi cha maumivu yatakayosababishwa na kuondoka kwake, lakini akakazia kwamba huzuni hiyo ingefunikwa na furaha atakaporudi.</div></div>
</span>`
},
{
chapterName: "Injili ya Yohana",
chapterNumber: 5,
pageNumber: 145,
verse: ` <b>(67)	Injili ya Yohana, sura ya 16, mstari wa 25. </b>`,
meaning: `<b>
(16:25) Ingawa nimekuwa nikisema kwa njia ya mfano, wakati unakuja ambapo sitatumia tena lugha ya namna hii bali nitawaambia waziwazi juu ya Baba yangu.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Maneno ya Yesu, kama yalivyotajwa mwanzoni, yalikubaliwa kuwa hayaeleweki, yakisababisha ugumu wa watu kuelewa na kusababisha kuchanganyikiwa. Yesu Mwenyewe alikiri kusema kwa njia ya kitamathali ili kuzuia kuelewa mara moja. Pia alisisitiza, "Sitasema kwa njia ya mfano katika siku zijazo. Nitakuambia kila kitu kwa uwazi." Hata hivyo, hata taarifa hii inaonekana kuwa na utata. Yesu alitangaza kwamba atafanya kuondoka hivi karibuni, na Wakili na Roho Mtakatifu atakuja kufafanua kila kitu. Alifafanua kwamba Wakili huyo angekuja tu ikiwa ataondoka na kwamba wanafunzi wangehuzunishwa na kuondoka kwake lakini wangefurahi wakimwona tena. Sasa anaongeza, "<strong>Hadi sasa, nilisema kwa siri. Nitakaporudi, nitakuambia kila kitu kwa uwazi</strong>.&rdquo; Kauli hii inatanguliza kiwango cha kutokuwa na uhakika kuhusu kama anayekuja ni Wakili tofauti au kama Yesu Mwenyewe atarudi.</div></div>
</span>`
},
{
chapterName: "Ufunuo wa Yohana",
chapterNumber: 6,
pageNumber: 146,
verse: ` <b>(1) Ufunuo wa Yohana, sura ya 9, aya ya 4, ya 5, na ya 6..</b>`,
meaning: `<b>
( 9:4 ) Waliambiwa wasidhuru nyasi za dunia wala mmea au mti wowote, bali wale tu amb ao hawakuwa na muhuri wa Mungu kwenye vipaji vya nyuso zao.
<p>
<div class="container">
          <img src="assets/img/Devunimudra_inside.png"   style="width:100%;">
          <div class="top-left">
           <u>Muhuri wa Mungu</u>
          </div>
          <div class="top-right1">
            Asili
           </div>
           <div class="top-right2">
           Roho Mtakatifu
          </div>
          <div class="dm-top-right3">
           Baba
          </div>
          <div class="dm-top-right4">
           Mwana
          </div>
          <div class="dm-bottom-left2">
            Mwili
           </div>
          <div class="bottom-left">
            <u> Kwa Dini Zote</u>
           </div>
        </div>
</p>
(9:5) Hawakuruhusiwa kuwaua ila tu kuwatesa kwa muda wa miezi mitano. Na uchungu walioupata ulikuwa kama uchungu wa nge anapopiga.
<br><br>
(9:6) Katika siku hizo watu watatafuta mauti lakini hawataiona; watatamani kufa, lakini mauti yatawaepuka. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
  Mstari wa tatu unaotangulia mistari hii, Ufunuo 9:3, unasema, &ldquo;<strong>Nzige wakashuka duniani kutoka katika moshi huo</strong><strong>wakapewa uwezo kama wa nge wa nchi</strong>.&rdquo; Mstari huu unaonyesha kwamba nzige walitoka katika moshi huo. Walakini, moshi unaorejelewa hapa hautolewi kwa kuchoma kuni au vifaa vingine. Badala yake, ni wingu zito linalotokea alfajiri siku ya kipupwe wakati jua halijachomoza. Wingu hili hupunguza mwanga wa jua na kuunda giza. Makundi ya nzige yanatoka kwenye wingu hili jeusi. Wanapofika duniani katika vikundi vikubwa kama jeshi, wanajulikana kuwa &ldquo;makundi ya nzige.&rdquo; Hakuna anayejua hasa mahali ambapo nzige hao wanatoka, lakini wanaaminika kuwa wanatoka kwenye ukungu wa anga wenye mawingu. Kuzaliwa na kukua kwao kunabaki kuwa kitendawili, na wanatoka kwenye moshi kwenye utupu bila asili yoyote iliyo wazi. Makundi ya nzige yanaweza kufikia mamia, maelfu, au hata mamilioni.

  Nzige hubeba magonjwa mengi ambayo huwasumbua watu. Ingawa wanaweza kuonekana kama nzige wa kawaida, wanafanyiza jeshi la malaika, wanaotumikia wakiwa watumishi wa Mungu, wanaotumwa na amri Yake. Mungu aliamuru nzige wawatese wanadamu, na kupitia amri yake, jeshi hili la nzige huathiri wanadamu. Wanajitokeza kutoka kwa ulimwengu usioonekana, wanajificha na kuumwa kwa watu, wakiingia miili yao kwa namna ya magonjwa na kusababisha mateso. Mungu aliwajalia sumu nyingi kama nge ardhini. Wanadamu wanateseka sana kwa sababu ya kuwasili kwa nzige kutoka katika ulimwengu usioonekana, wakitumika kama wakala wa kuteseka kwa ajili ya dhambi za wanadamu. Waliagizwa wasidhuru nyasi za dunia, mimea yoyote, au miti isipokuwa kwa wanadamu. Ingawa dhana ya kawaida ni kwamba nzige hudhuru nyasi, mimea, na miti, mstari huo hufafanua kwamba nzige hao hawadhuru mimea bali huwalenga wanadamu. Asili ya nzige, riziki zao, na misheni yao bado haijulikani kwa wanadamu.

  Ni wazi kutokana na mistari minne iliyotajwa hapa kwamba jeshi la malaika katika umbo la nzige huja kuwatesa wanadamu. Jeshi la watumishi wa Mungu, linalofanana na nzige, lina uwezo wa kuwatesa wanadamu hadi miezi mitano, lakini hawana mamlaka ya kusababisha kifo. Nzige hao wanapowauma wanadamu bila kuonekana, wao hutokeza ugonjwa ambao husababisha maumivu kama kuumwa na nge. Uzito wa mateso hutofautiana kulingana na karma ya mtu binafsi, kuanzia usumbufu mdogo hadi kiwango cha kuumwa na nge. Kwa kuwa hakuna anayeweza kukwepa maumivu haya, ni lazima wanadamu wayavumilie. Aya hiyo inaonyesha kwamba wakati wa mateso makali, watu wanaweza kutamani kifo kama njia ya kutoroka, lakini hawaruhusiwi kujikatia uhai wao wenyewe. Kwa hiyo, wanadamu wanapaswa kuvumilia maumivu. Mstari huo unaonyesha zaidi kwamba hata kifo huwakwepa, ikionyesha kwamba wanadamu hawawezi kuepuka mateso yanayosababishwa na nzige.

  Ikiwa nzige, wanaotokana na mawingu ya moshi usioonekana, wanakuja mara mia moja, wanaweza kuonekana mara moja tu. Zikibaki bila kuonekana, zinaweza kuwa na athari mbalimbali kwa wanadamu, na kusababisha madhara kwa namna ya ugonjwa au kwa njia nyinginezo. Aya inaashiria kwamba madhara yao yanaelekezwa kwa wanadamu pekee na yanaweza kudhihirika kwa namna yoyote ile. Imeelezwa kuwa wanadamu watafanya vumilia madhara haya kwa sababu nzige wameamrishwa kuwadhuru. Hata kama wanadamu watatafuta kifo kutokana na mateso yasiyovumilika, bado hayapatikani kwani kifo kinawakimbia. Ingawa wanadamu wanateseka kwa njia mbalimbali kutokana na &ldquo;nzige (watumishi) wasioonekana&rdquo; ambao Mungu ametuma, hawafikirii sababu za kuteseka kwao. Hawawezi kuepuka mateso yao kupitia maneno ya Mungu.

  Magonjwa mengi mapya yanaibuka ulimwenguni pote, lakini mara nyingi wanadamu hawafikirii asili yao. Kutambua ugonjwa mpya huchukua muda, na kutafuta tiba kunaweza kuwa kwa muda mrefu zaidi. Kama vile dawa inavyogunduliwa kwa ugonjwa mmoja, ugonjwa mwingine ambao hauwezekani unaweza kutokea. Pamoja na magonjwa, kuna magonjwa na mateso yasiyotambulika. Ingawa watu wengine wanakubali kwamba nguvu zisizoonekana huchangia mateso, hakuna mtu anayejua jinsi ya kukabiliana nayo kwa ufanisi.<strong>Njia pekee ya kuepuka mateso yanayosababishwa na malaika wasioonekana ni kuvaa Muhuri wa Mungu, ishara ya nguvu za Mungu. Mungu aliwaamuru watumishi wake kuwatesa wale tu ambao hawavai Muhuri wa Mungu</strong>. Ingawa wengine wanaamini kwamba nzige wanaoonekana wanaweza kudhuru mimea na miti,<strong>Mungu alielekeza nzige wake wasioonekana kuwadhuru wale tu ambao hawana Muhuri wa Mungu kwenye vipaji vya nyuso zao.</strong>. Katika andiko la mwisho la kimungu, mistari 5:22 na 22:32 inataja Muhuri wa Mungu. Akshara Parabrahma Yoga ya maandiko ya kwanza ya Mungu, Bhagavad-Gita, inadokeza Muhuri wa Mungu. Katika maandiko yangu, "<strong>Muhuri wa Mungu</strong>,&rdquo; tunaeleza kwa undani jinsi Muhuri wa Mungu unavyoonekana. Badala ya kuhoji wengine, kuwa na imani katika Mungu na vaa Muhuri wa Mungu, kwa vile haufungamani na dini fulani. Muhuri wa Mungu umetajwa katika maandiko matatu ya kiungu. Ufunuo wa Biblia unaeleza maafa yanayosababishwa na kutovaa Muhuri wa Mungu. Wakristo hawapaswi kusita kuvaa muhuri wa Mungu; ni suala la imani.

  <strong>Bila kujali dini yako, jilinde na mateso. Nisikilize na uvae &ldquo;Muhuri wa Mungu,&rdquo; ambao haukujulikana hapo awali. Jilinde na mateso.</strong></div></div>
</span>`
},
{
chapterName: "Vidole Vitatu",
chapterNumber: 7,
pageNumber: 147,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
  Picha ya Yesu inaonekana kwa watu mara chache. Baada ya uchunguzi wa karibu,<strong>Yesu anaweza kuonekana akionyesha vidole vitatu kwa mkono wake wa kulia</strong>. Yesu alitoa hekima ya kimungu kwa takriban miaka mitatu, na hata baada ya kifo Chake, picha Yake inaonekana kuwasilisha mafundisho kwa watu. Ingawa tafsiri zinaweza kutofautiana, uelewaji wangu ninapoona picha hiyo ni kwamba ina ujumbe muhimu kutoka kwa mafundisho ya Yesu. Katika andiko la kwanza la Mungu, Mungu anaonyeshwa katika sehemu tatu -<strong>Kshara, Akshara, na Purushottama</strong>. Vivyo hivyo, katika andiko la mwisho la kimungu, Mungu anaelezwa kuwa na mambo matatu - <strong>Abiria, Dereva, na Shahidi</strong>. Katika andiko la pili la kimungu,

  Mungu anasemwa kuwa katika sehemu tatu -<strong>Mwana, Baba, na</strong><strong>Roho Mtakatifu</strong>. Mambo matatu ya Mungu yamefafanuliwa katika Bhagavad-Gita, Biblia, na Kurani kama hekima sawa. Hekima ya msingi katika maandiko haya matatu iko katika kuelewa mambo matatu ya Mungu. Mara tu mtu anapoelewa vipengele vitatu vya Mungu, ufahamu kamili wa hekima ya Mungu unawezekana.

  Hata hivyo, Wahindu wanaosoma Bhagavad-Gita hawafanyi hivyo WHO<strong>Jeevatma (Kshara)</strong>na<strong>Atma (Akshara)</strong>ni. Vivyo hivyo, Wakristo hawajui Mwana na Baba ni nani. Waislamu hawajui nani<strong>Abiria na Dereva ni</strong>. Katika Bhagavad-Gita niliyoandika, nilitaja kwamba Wahindu hawajui Jeeva inayoweza kuharibika, na Mungu wa milele aliye katika mwili. Katika Biblia, niliona pia kwamba Wakristo hawaelewi maelezo ya wana wawili -<strong>Mwana na Baba</strong>. Vile vile katika maandiko &ldquo;<strong>Mistari ya Almasi katika Maandiko ya Mwisho ya Kiungu</strong>,&rdquo; nilitaja kuwa Waislamu hawajui kuhusu<strong>Mwenyezi Mungu wawili</strong>. Watu wa dini hizi tatu wanaweza wasijue kuhusu sehemu nyingine mbili za Mungu, ambazo ndizo kiini kikuu cha maandiko yao husika. Neno pekee ambalo kila mtu anatambua ni 'Mungu.' Bila kujua, wote wanaabudu sehemu ya tatu, inayojulikana kama Purushottama katika Bhagavad-Gita, Roho Mtakatifu katika Biblia, na Shahidi katika Quran. Mungu mwenyewe alisema kwamba si sawa kuabudu sehemu ya tatu ya Mungu (Roho Mtakatifu), ambaye ni zaidi ya ibada zote na dharmas zote. Walakini, kila mtu anaabudu "<strong>Mungu asiyefanya hivyo</strong><strong>haja chochote</strong>.&rdquo; Inaweza kusemwa kwamba ujinga wa kibinadamu unatokana na kutojua kwamba Mungu hahitaji ibada yetu.

  Kuhusu Wakristo, hawajui &ldquo;<strong>Wana wawili</strong>&rdquo; waliotajwa katika andiko lao. Ingawa Biblia inataja Wana wawili, Wakristo wanaamini kwamba kuna Mwana mmoja tu na hawajui hekima ya Wana wawili. Labda hawajui kuwa kuna Wana wawili -<strong>Mwana wa Kudumu na Mwana wa Muda</strong>. Biblia inawataja kama <strong>Mwana na Mwana pekee</strong>, lakini Wakristo hawajui Wana hawa wawili ni akina nani. Vile vile hakuna mtu katika dini yoyote anayeweza kujua kwamba kuna Miungu wawili -<strong>Mungu, ambaye ni Baba, na Mungu, ambaye ni Babu</strong>. Ingawa ukweli huu umeonyeshwa kisayansi katika maandiko, baadhi ya watu wanaweza wasiuamini, na wengine wanakana kuwepo kwa Miungu wawili kabisa. Ijapokuwa maandiko yanasema kwamba kuna Mungu mmoja tu anayepaswa kuabudiwa, haijulikani ikiwa Mungu huyu ni Baba au Babu.

  Wale walio na hekima ya kimungu na wale wanaosoma maandiko wanaabudu Mungu mmoja tu kulingana na ufahamu wao. Wanaweza kuabudu<strong>Babu-Mungu</strong>, ambaye hapaswi kuabudiwa, badala ya<strong>Baba-Mungu</strong>, anayepaswa kuabudiwa. Maneno Baba-Mungu na Babu-Mungu yanaweza kuonekana mapya, lakini jambo hili kwa hakika liko katika maandiko yao. Mara nyingi watu hushindwa kuelewa ukweli hekima. Mtu anaposhiriki nao kweli, wanaweza kuitikia kwa hasira na kuikataa. Katika Biblia yangu, nilisoma kwamba kuna Wana wawili - Mwana wa Adamu na Mwana wa Mungu - na kwamba Roho Mtakatifu, ambaye yuko katika nafasi ya Babu, hapaswi kuabudiwa. Wale wanaomchukulia Roho Mtakatifu kuwa Mungu na wamekuwa wakimuabudu hivyo wanaweza sasa kuwa katika hali ya kuchanganyikiwa. Yesu alifundisha sana kuhusu Wana wawili na Roho Mtakatifu. Hata alionyesha "<strong>Wana wawili na Baba yao, Roho Mtakatifu</strong>,&rdquo; akitumia vidole vyake. Yesu alitumia mkono wake wa kulia kuonyesha vidole viwili - cha shahada na cha kati - na pia kidole gumba. Nilielewa kuwa kidole gumba ni ishara ya Roho Mtakatifu kwenye picha. Kwa kuwa Mungu ndiye anayewapa wenye akili (buddhi) nguvu za utambuzi, kulingana na hekima ya kweli, Yesu alionyesha Baba (Atma) na Mwana (Bhagavan) kwa vidole viwili (index na katikati). Inaeleweka kwamba zinawakilisha Mwana wa kudumu na Mwana wa muda. Maandiko yanafupisha hilo<strong>Roho Mtakatifu hatajulikana mpaka wale Wana wawili wajulikane</strong>. Kila mtu anapaswa kujua kwamba siri ya kiroho ambayo inapaswa kujulikana kwa jamii nzima ya wanadamu ni<strong>suala la Wana wawili</strong>. Ukitazama vidole vitatu vya Yesu kwenye picha kwenye ukurasa unaofuata, vinatukumbusha juu ya Roho Mtakatifu na Wana wawili - Atma na Mwana pekee.
</div></div>
<ion-row><ion-col class="ion-text-center">
<img src="assets/img/jesus.png"/>
</ion-col></ion-row>
</span>`
},
{
chapterName: "Ijumaa Kuu au Ijumaa Mbaya?!",
chapterNumber: 8,
pageNumber: 148,
verse: ``,
meaning: ``,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
Matukio fulani maishani huleta furaha, na mengine huleta huzuni kwa mtu. Wakati wa furaha, mtu huwa mchangamfu na anafurahia chakula na mavazi mazuri. Kinyume chake, mtu anapokabiliwa na huzuni, hupoteza hamu ya kula na kupendezwa na mambo mbalimbali ya maisha. Tamasha la Diwali nchini India, kwa mfano, husherehekewa na fataki kuadhimisha kushindwa kwa pepo mwovu Narakasura siku hiyo. Katika nyakati za kale, waandishi, Mafarisayo, na wasomi waliomleta Yesu mbele ya mahakama na kuandaa mauaji Yake walishangilia kifo Chake. Kila mwaka walisherehekea ukumbusho wa kifo cha Yesu kuwa Ijumaa Kuu, wakiiona kuwa siku ya furaha. Tangu wakati huo, tamasha hilo limejulikana kama 'Ijumaa Njema.'

Katika siku za mapema, watu ambao hawakujua ukuu wa Yesu, pamoja na waandishi na wasomi, walisherehekea sikukuu hiyo. Hii ilitokea wakati thamani na hekima ya Yesu haikujulikana. Katika wakati huu, hata wale wanaofahamu hekima ya Yesu wanaadhimisha siku ya kifo cha Yesu kuwa Ijumaa Kuu. Ingawa ni desturi kusherehekea siku njema kwa furaha, siku ambayo Yesu alikufa inatarajiwa kuwa siku yenye uchungu kwa waja Wake. Inashangaza kuwashuhudia Wakristo wanaomkiri Yesu kuwa Mungu wao, wakivaa nguo mpya kwa furaha na kula chakula kizuri bila kuonyesha huzuni juu ya kifo cha Yesu siku hiyo.

Kwa kweli, siku ambayo Yesu aliuawa inapaswa kuitwa 'Siku Mbaya.' Waja wa Yesu wanapaswa kuonyesha huzuni na kujizuia kula siku hiyo. Inashangaza kusherehekea siku kama sikukuu na kuiita 'Ijumaa Kuu' kana kwamba ni siku ya wema. Hata wale wanaomwona Yesu kuwa familia yao kama Mungu hushiriki katika sherehe hiyo, ikionyesha kutoelewa kwao thamani ya Yesu. Wale wanaomheshimu sana Yesu wanapaswa kuiona siku hiyo kuwa 'Ijumaa Mbaya.' Wahubiri hubeba jukumu la kuelimisha watu kuhusu umuhimu wa Ijumaa Mbaya na kuwakatisha tamaa wasiiadhimishe. Watu wanaoshindwa kutofautisha kati ya siku ya kifo na siku ya kuzaliwa hukosa ufahamu wa ukuu wa hekima ya Mungu. Kichwa cha familia kinapokufa, familia nzima inaomboleza, na heshima hiyohiyo inapaswa kutolewa wakati Yesu, ambaye anapaswa kuheshimiwa zaidi ya mshiriki wa familia, anapokufa. Kusherehekea kifo cha Yesu kama sikukuu isiyo na huzuni ni kosa, tukichukulia kuwa siku njema. Yesu alisema, &ldquo;<strong>Yeyote anayempenda baba yake au mama yake kuliko mimi, hanistahili; yeyote anayependa mwana au binti yake kuliko mimi hanistahili</strong>.&rdquo; Watu wanapoomboleza kifo cha mshiriki wa familia lakini hawaombolezi kifo cha Yesu na badala yake kusherehekea kama sikukuu, wanawezaje kustahili rehema ya Yesu? Kwa hiyo, tuitaje Ijumaa Kuu kuwa ni &lsquo;Ijumaa Mbaya&rsquo; ili kumheshimu Yesu. Inakuwa ni kitendo cha kumcha Yesu tunapoichukulia siku hiyo kuwa ni siku mbaya na kuomboleza bila kuiadhimisha. Vinginevyo,<strong>tunaonyesha kupendezwa na Yesu kwa maneno yetu tu, si katika mioyo yetu</strong>. Ikiwa unaheshimu, upendo, abudu, na usali kwa Yesu, kisha ueneze dhana ya Ijumaa Kuu kuwa Ijumaa Mbaya na usaidie kila mtu kuielewa. Kisha utakuwa mcha Mungu wa kweli wa Yesu. Unapoiacha Ijumaa Kuu, hakuna jambo baya linalokupata; mambo mazuri tu hutokea.

 <strong>Na</strong>
 <strong>Guru Pekee wa Dini Tatu</strong>
 <strong>Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu</strong>
 <strong>Ingawa watu elfu moja wanaunga mkono - uwongo hauwezi kuwa ukweli.</strong>
 <strong>Ingawa watu elfu moja wanakataa - ukweli hauwezi kuwa uwongo.</strong>
</div></div>
</span>`
},
{
chapterName: "Barua kutoka kwa Mhindu",
chapterNumber: 9,
pageNumber: 149,
verse: ``,
meaning: ``,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem">
<div class="poemtext">
  <em>Kwanza, kusujudu kwa Swami&hellip;.</em>

  Jai Srirama! Jina langu ni Pittala Thirumalesha, umri wa miaka 36, kijiji cha Nalgonda, wilaya ya Telangana. Kazi: Ayubu, Jamii: Mudiraju (tabaka la Boya), Dini: Dini ya Kihindu, Kazi ya baba: Mkulima wa kwanza baadaye mvuta riksho, Mama kazi:<strong>(Hisabati).</strong> matunda muuzaji,&nbsp;Yangu&nbsp;elimu:<strong>M.Sc.,&nbsp;B.Mh.</strong>

  Mheshimiwa, ninaandika barua hii kwa nia kwamba utangulizi wangu wa kiroho utafanya kitu kizuri kwa jamii hii. Baada ya kusoma andiko lako, &ldquo;<strong>Vito katika Maandiko ya Pili ya Kimungu</strong>,&rdquo; nilitaka kuandika barua hii. Inaonekana kwamba kuandika maandiko juu ya Biblia ndilo tendo la ujasiri zaidi la Hindu (Indhu) Swamiji. Wengi wanafikiri kwamba Mswamiji anaweza kuandika Bhagavad-Gita lakini si Biblia. Tayari nimesoma maandiko yako, Bhagavad-Gita, na Quran. Sasa pia nimejifunza hekima ya Biblia kupitia maandishi yako. Nilielewa hekima ya kimungu katika maandiko matatu ya dini tatu kupitia kwako. Kwa kujua hali ya sasa ya jamii, natoa baadhi ya maoni yangu kwa nia njema kupitia barua hii.

  Andiko la kwanza nililosoma ni<strong>"Siri ya Pembetatu ya Bermuda."</strong>Kupitia andiko hili, nilijifunza siri ya kwa nini ndege na meli zinatoweka kwenye Pembetatu ya Bermuda. Nimefurahi sana kugundua ukweli huu wa kushangaza ambao ulikuwa kama sinema ya Hollywood. Kisha soma andiko hilo<strong>"Ghosts - Bhutas (Matukio ya Kweli)"</strong>na nikaja kujua habari za kisayansi kuhusu &ldquo;ulimwengu usioonekana (uliofichika).&rdquo; Isitoshe, nilishangaa sana nilipopata kujua jinsi serikali ya Mungu na Sheria ya Kimungu inavyofanya kazi, nami namshukuru Mungu wangu kwa kujua fumbo kuu zaidi. Kisha nikasoma maandiko<strong>"Hadithi ya Ukweli</strong>

  <strong>Mtafutaji&rdquo;</strong>na<strong>"Sri Krishna Mungu au Bhagavan?"</strong>Nilifurahi sana kujifunza siri kuu kutoka kwa maandiko "Sri Krishna God au Bhagavan?" Kwa kuwa sasa nimepata mahali pa kuishi, nina furaha kuwa nimetembelea hekalu la Krishna huko Prabodhashramamu, Chinna Podamala, na kumwabudu Bwana Krishna. Tangu nilipotembelea Prabodhashramam mnamo Julai 2012, ninafurahishwa na furaha kila siku kwa kunyonya hekima kutoka kwa maandiko yako 93 na mihadhara 150.

  Kupitia maandiko<strong>"Mapokeo ya Hekalu (Ukweli Uliofichwa),&rdquo;</strong>Nilijifunza kuhusu umuhimu wa mahekalu. Nimeelewa maana halisi ya mila zilizokandamizwa kutoka<strong>"Indu Sampradayas (Mila).&rdquo;</strong>Kutoka kwa maandiko<strong>"Mana Pandugalu (Sherehe zetu)&rdquo;</strong>Sijaelewa tu maana ya 'Pandu (tunda)' katika &ldquo;Panduga (sherehe)&rdquo; lakini pia nimeelewa madhumuni muhimu ya sherehe na dhamira ya mawazo yaliyopangwa mapema ya wazee wetu. Kama ulivyosema katika andiko hili, ni kweli asilimia mia kwamba maendeleo ya kwanza ya kiroho na kisha maendeleo ya kibinafsi na baadaye maendeleo ya kijamii hufanyika. Kila andiko linalotoka kwako ni langu la hekima. Kila mahubiri ni hazina ya dharma. Maneno yako ni ya manufaa si kwa wanadamu tu bali pia kwa viumbe vyote vilivyo hai. Huu ndio ukweli ninaoueleza baada ya kuupitia kwa muda wa miaka sita iliyopita.

  Nilikata tamaa wakati dini yako Wahindu waliposema maneno ya dharau dhidi yako, mfalme mkuu. Lakini mimi niko kushiriki baadhi ya taarifa kupitia barua hii ili kufanya kila mtu kufahamu ukweli.

  Thraitha Theorem Bhagavad-Gita aliwasilisha ujumbe halisi wa Lord Krishna. Maandiko ya Swami<strong>"Maneno ya hekima katika Maandiko ya Mwisho ya Kimungu (kurasa 704)&rdquo;</strong>na<strong>" Almasi katika Maandiko ya Mwisho ya Kimungu&rdquo;</strong>iliufanya ulimwengu kuelewa hekima ya kimungu ambayo Jibril (Jua) alimtuma Mtume Muhammad. Maandiko ya Yogeeswarlu<strong>"Vito katika Maandiko ya Pili ya Kimungu (kurasa 352)&rdquo;</strong>iliwasilisha ujumbe halisi wa Injili za Yesu.

  Huu hapa ni wito wangu kwa wasomi waliogubikwa na chuki za kidini, mashetani wa kidini wasio na huruma, wazimu wasiokamilika wenye wazimu wa dini, majini wa kisiasa wasiojua thamani ya ashram, manabii wa uongo wanaopotosha jamii kwa upele wa tabaka na wazimu wa kidini, wenye akili timamu ambao hawajui sababu, jumuiya za kutafuta ukweli ambazo hazifahamu ukweli, na wazee wanaoiingiza jamii katika ushirikina kwa kutumia maneno Mungu, Nafsi, ibada na hekima. Tafadhali soma angalau moja ya maandiko ya Swami vizuri ili kujua ukuu wa<strong>"Thraitha Theorem&rdquo;</strong>na uzingatie sana kile inachosema. Hebu tuzingatie moja ya maneno ya Swami.

  <strong>&ldquo;Dini ni marufuku. Castes hawana akili. Zote tatu - Bhagavad-Gita, Biblia, na Quran &ndash; ni</strong><strong>sehemu za maandiko sawa ya kimungu. Ikiwa hisia zako zitapita zaidi ya tabaka, jiunge mara moja na Prabodha Seva Samithi. Mungu anataka uwe gnani - Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu&rdquo;</strong>

  Swamiji sio tu alisema maneno hapo juu lakini pia alifunga ndoa kati ya tabaka na dini. Pia alioa mwanamke mwingine wa tabaka. Je, ni chuki ya kidini na maandishi yenye sumu kwenye Swami kubwa kama hiyo? Wanaume, mnafikiri mara moja kwa busara.

  Maandiko ya Swami yaliwasilisha hekima halisi ya mashairi ya Vemana. Wanasema maana halisi ya mashairi ya kifalsafa ya Veerabrahmam. Atmalinga Shatakam aliwasilisha habari za kiroho. Ametoa siri nyingi kuu zisizojulikana kwa ulimwengu na habari za kimungu ambazo huchangia ustawi wa kiroho wa wanadamu. Wakana Mungu wengi ambao wameshika hekima kutoka katika maandiko yake wamekuwa waumini wa kweli. Hata wajinga wakawa wanarationalists. Waumini vipofu wakawa wanasayansi wa kiroho kwa mbinu ya kisayansi. Hata magaidi wamebadilika na kuwa gnanis.

  <b>Mhindu anayejua hekima yake ni Indu wa kweli (gnani wa kweli). </b>
  <b>Mkristo anayejua hekima yake ni Mkristo wa kweli (mwamini wa kweli wa Mungu).</b>
  <b>Mwislamu anayejua hekima yake ni Muislamu wa kweli (mtiifu kwa Mungu).</b>

  Maandiko yake yanaondoa karma na kusamehe dhambi. Ukiweka andiko Lake juu ya mwili ambapo una maumivu kwa kujitolea na imani, itashikamana bila msaada wowote mpaka itaharibu karma iliyoisababisha na kutoa ahueni. Ingawa hii inaweza kushangaza, ni ukweli mtupu unaosemwa kulingana na uzoefu wangu.

  Ni kupitia maandishi Yake ambapo ulimwengu umepata kujua ukweli kuhusu 'Bhagavan Ravana Brahma,' umwilisho wa Mungu katika Thraitha Yuga. Hata Sita Devi, ambaye kila mtu anadai kuwa mwathirika, hakumshtaki Ravana Brahma. Kwa nini Waarya walioandika Ramayana hawakuweza kueleza umri wa Ravana Brahma wakati wa kutekwa nyara kwa Sita? Ikiwa swali hili lingejibiwa, hadithi za asili zilizofichwa za Ramayana zingetoka. Ravana Brahma alimtembelea Sita Devi huko Ashokavana akiwa na mke Mandodari na<u>Meghnaad,</u> lakini kwa nini alionyeshwa kuwa mtu katili? Hata ingawa mzee Ravana Brahma hakuhudhuria swayamvara ya Sita, si aibu kuandika kwamba hakuweza kuinua upinde wa Shiva katika swayamvara ya Sita? Alipomchukua Sita, binti yake, bila kumgusa kwa ufalme wake Sri Lanka, ungeweza kuandika kwa uongo kwamba alikuwa mtu mwenye tamaa? Baadhi ya watu wenye ubinafsi wamepanga njama dhidi yake, wakisema kwamba alimchukua kwa tamaa; hii inawezekanaje kulingana na ulichosema kuwa mtu yeyote aliyemgusa Sita atachomwa moto hadi kufa? Angalau kwa sasa, jumuiya hii inapaswa kujua ukweli huko Ramayana. Mandodari Devi, ambaye alijua siri ya mateso ya Sita, na kupata mwili ya Bhagavan Ravana Brahma ingeisha hivi karibuni, alikuwa akiwaambia watu wa ufalme wake kwamba Ravana Brahma alimleta Sita Lanka kwa ajili ya ustawi wa Sita. Tunataka kuona picha za Sri Bhagavan Ravana Brahma na Srimati Mandodari Devi.

  Hujui kweli wewe ni nani. Usiweke jumbe zisizo za lazima kwenye Facebook na YouTube, na unapokufuru, utakusanya miaka ya karma. Usikilize ikiwa sio lazima. Wakati hujui ufafanuzi wa dharma na dharma ngapi, usiite gnanis kwa mjadala kwenye TV ya umma.

  Thraitha Theorem ndiye kiwango halisi. Kiwango hiki kinatumika kupima kiwango cha chuki ya kidini. Ulimwengu utakuja kujua ni hekima ngapi katika dini, na ni chuki kiasi gani katika dini kupitia hekima katika Thraitha Theorem. Hekima ya Thraitha Theorem inaufunulia ulimwengu huu jinsi hekima ilivyo katika dini, na jinsi dini zinavyochukia. Prabodha Seva Samiti na washirika wake watano wanaamini kabisa kwamba lolote litakalotokea litatokea kwa idhini ya Mungu.

  <strong>Prabodhashramam ndio shirika pekee linaloleta maendeleo ya kiroho</strong>. Mashirika mengine yote hufanya kazi kwa maendeleo ya mtu binafsi na jamii bora. Lakini kila mtu inapaswa kutambua kwamba ikiwa maendeleo ya kiroho hayatatokea, utu na maendeleo ya kijamii hayatatokea.

  Hekima ya Yogeeswarlu haina tabaka na haina dini. Ndiyo maana watu wa dini zote - Wahindu, Waislamu, na Wakristo - wanakuja kwake kwa upatano na wanafurahi kujua hekima halisi ya kimungu. Kama Veerabrahmam alivyosema, hekima Yake ni kuunganisha dini zote tatu. Brahmam alisema katika Kalagnanam (unabii), "<strong>Miungu yote mikuu (devatas) iko Anandashramam.</strong>&rdquo; Devatas alikuja na kuzungumza kwa furaha kujifunza hekima ya baba yao. Pia alisema, &ldquo;<strong>Prabodhashramam ina kiwango cha juu cha hekima. Zile zilizo katika Prabodhashramam zinajumuisha sifa za Mwenyezi. Mwenye nguvu huyo alikuwa Ananda Guru tu. Ananda Guru ni Guru kwako na mimi pia.</strong>&rdquo; Jumbe kama hizo za maneno zilizosemwa na Brahmam mwenyewe zinapatikana katika maandiko ya Swami. Unapaswa kufahamu hekima ya Mungu kwa busara na bidii.

  Je, wale ambao hawasomi Bhagavad-Gita ni waokozi wa dharma za Kihindu? Je, wapumbavu, wasiojua udhalimu katika historia, watasimamia dini ya Kihindu? Je, unaweza kujenga jamii sawa bila kujua "Siri ya mwanzo" na "Siri ya uumbaji?" Tambua wema katika maandiko kwa kusoma kwa subira na bila chuki ya kidini. Ikiwa unajisikia vibaya, acha. Hakuna sheria ambayo kila mtu anapaswa kuiamini.<strong>Maandiko na mafundisho ya Thraitha Siddantha</strong>, ambayo ni ya manufaa sana kwa ubinadamu na kuwa na kisayansi cha busara na ufahamu wa kiroho na kufichua siri za<strong>Brahma, Karma, na Bhakti Yogam</strong>kwa undani na Jeevatma, Atma na Paramatma, ni muhimu kwa jamii ya sasa.

  Mashirika hayo - UNO, Baraza la Amani Ulimwenguni, Sheria ya Polisi, IPC, CrPC, Sheria za Magereza, CBI, CBCID, Ripoti za Kijasusi, ACB, Human Rights Watch, Haki za Wanawake, Sheria ya Ukatili ya SC ST, Sheria ya Dhamana ya India, Sheria za Kiislamu, Sheria za Kikristo, Sheria za Kazi, Serikali Kuu, GO za Serikali ya Jimbo, Tume ya Uchaguzi, Katiba ya India, Mahakama za India, Sheria ya RTI, Sheria ya Teknolojia ya Habari ya 2000 - zipo, kwa kweli, kwa ajili ya ustawi wa binadamu. Taasisi za kiroho zina wajibu wa kuwaambia watu ni aina gani ya hekima inayofaa kwa ustawi wao. Prabodhashramam na washirika wake huchukua nafasi ya kwanza katika taasisi zinazowajibika kama hizo. Zaidi ya yote, hatupaswi kusahau kwamba kuna pia<strong>"Sheria ya Mungu na Utawala wa Kimungu.&rdquo;</strong>

  Kiini cha maandiko matatu ya kimungu ni kueleza juu ya nafsi tatu. Maisha bila hekima ya kimungu ni upotevu. Mungu alimpa mwanadamu uhai ili tu ajue hekima ya Mungu. Hekima ya Mungu ni zaidi ya tabaka na dini. Yogeeswarlu alitoa maana halisi ya hekima ya Bwana Krishna kupitia 'maandiko ya kwanza ya kiungu Bhagavad-Gita.' Alitupa hekima ya Kurani, ambayo ilikuja kwa Mtume Muhammad kupitia kwa Jibril, katika maandiko 'Maneno ya Hekima katika Kitabu cha Mwisho cha Uungu' na 'Almasi katika Kitabu cha Mwisho cha Kiungu.' Alituambia hekima ya Injili ya Yesu katika 'Vito katika Maandiko ya Pili ya Kiungu.' Anatupa kwa vitendo hekima halisi ya kimungu kupitia maandiko na mafundisho. Jua hekima aliyosema na uvae Muhuri wa Mungu na upate msamaha wa dhambi. Ukisikiliza kwa makini na kufanya mazoezi, una bahati. Ikiwa hausikii, hiyo ni karma yako. Kila kitu kinafanyika kulingana na mapenzi ya Mungu, na Mungu anajua.

   <b>Wahindu wanapaswa kujua ni Mungu gani wa kumwabudu.</b>
   <b>Waislamu wanatakiwa kujua hao Allah wawili (waumbaji wawili) ni akina nani.</b>
   <b>Wakristo wanahitaji kujua hao wana wawili ni akina nani.</b>

  Mwanadamu kamwe huwa Mungu, lakini Mungu anaweza kuja kama mwanadamu. Ili kumtambua Mungu aliye katika umbo la mwanadamu, ni lazima kwanza tuwe na hekima yake ndani yetu. Ili kumtambua Mungu, tunahitaji kujua kanuni hizi mbili ambazo wazee walisema. Kama vile Vemana yogi alivyosema mashairi yake yanaweza kueleweka kwa njia 1000, na vile vile, hekima ya nadharia ya Thraitha inaweza kueleweka kwa njia 9000. Kwa mujibu wa msemo "Shraddhavan labhate gnanam (Wale ambao wana maslahi watapata hekima)", wale ambao wanafikiri na wenye akili wanaweza kuelewa hekima ya Thraitha.

  Angalau sasa, acha mawazo ya tabaka na dini na ujue hekima halisi ya kimungu. Ikiwa hujui sasa, huwezi kujua. Muda ni Mfupi. Ifanye Sasa.

  Ninatoa maua ya harufu nzuri kwa miguu ya Yogeeswarlu ili kutupa hekima zaidi ya kimungu. Ninatoa salamu zisizo na kikomo kwa moyo wangu wote na roho yangu yote na akili.

   Mtumishi Wako Mtiifu
  <strong>Thirumalesu</strong>
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
  Vito ndani
</div>
<div class="img1-title2">
Maandiko ya Pili ya Kimungu
</div>
<div class="img1-title3">
 (Injili Katika Theorem ya Thraitha)
</div>
<div class="img1-title4">
 Mwandishi: Guru pekee wa dini tatu (Hindu, Mwislamu, Mkristo), Mfalme wa Ufalme wa Kiroho, Mwandishi wa vitabu vitakatifu zaidi ya mia, Indu Gnana Dharma Pradata, Mwandishi wa Kuvutia, Adi Karta wa Mafundisho ya Thraita
</div>
<div class="img1-title5">
Sri Sri Sri Acharya Prabodhananda Yogeeswarulu
</div>
</div>
</p>`
},
{
chapterName: "FAHARASA",
chapterNumber: 11,
pageNumber: 151,
verse: ``,
meaning: ``,
pageText: `
<ion-row>
<ion-col class="ion-text-center">
<b>FAHARASA</b></ion-col>
</ion-row>
<div class="poem">
<div class="poemtext">
<b>Achara Prakruti</b>: Vipengele vitano visivyoweza kubadilika - Anga, Hewa, Moto, Maji na Dunia. Wale (Prakruti) ambao hawana karma. Prapancha. Pancha Bhutas.

<b>Adhamas</b>: Wanapinga dharma. Wanasababisha karma nzuri, karma mbaya, au zote mbili. Adharmas iliyotajwa katika Bhagavad-Gita - kusoma Vedas, kufanya misaada, kutoa dhabihu (yajnas), toba (tapas) nk.

<b>Agami karma</b>: Dhambi mpya na punya kutoka kuzaliwa hadi kifo. Karma inayokuja.

<b>Aham</b>: Sehemu ndani ya mwili lakini si guna.

<b>Antahkaranams</b>: Sehemu tano za mwili zilizofichika - Jeeva (Jeevatma), Manas, Buddhi, Chittam, na Aham.

<b>Unajimu</b>: Anayejua hekima ya kiroho anajua karma ya mtu mwingine kwa hekima yake na anampa taarifa. Ili kujua hekima ya baadaye jicho inahitajika. Kile kinachojulikana kwa mwanga wa hekima.

<b>Atma</b>: Yule anayekaa na mtu anayeweza kufa. Mtu asiyeweza kuharibika. Yule aliye katika miili yote iliyo hai. Atma. Akshara purusha. Nafsi isiyoweza kufa.

<b>Bhagavan</b>: Aliyetoka kwa Mungu. Aliyekuja na habari za Mungu Kristo, Svayambhu au Mfariji au Mwana pekee. Wakili au Msaidizi. Mtume wa Mungu. Guru.

<b>Buddhi</b>: Ni akili katika mwili, ambayo huchanganua faida na hasara za kitendo.

<b>Chara Prakruti</b>: Prakruti inayobadilika. Jagathi. Viumbe hai. Chara Prakruti. Jumla ya viungo vya mwili katika kila kiumbe hai ni 25.

<b>Damu ya agano</b>: Nguvu ya hekima. Asili ya hekima. Hekima ya Mungu bila vifungo vya karma.

<b>Devatas</b>: Wanadamu wasioonekana. Demi-miungu.

<b>Dharma Shastra</b>: Maandiko yenye dharmas (hekima). amri za Mungu. Brahma Vidya. Sayansi bora.

<b>Dharma</b>: Hekima ya kimungu. Mafundisho au kanuni za kimungu. Amri. Kufuatia dharmas kunasababisha ukombozi kutoka kwa maisha na kifo.

<b>Roho</b>: Mtu anayeishi ndani ya mwili wa hila au asoonekans. Ibilisi au pepo.

<b>Jeevatma</b>: Nafsi ya kufa mwilini. Kshara purusha au Jeeva.

<b>Gnanendriyas</b>: Viungo vitano vya hisi - jicho, sikio, pua, ulimi na ngozi.

<b>Gnani</b>: Mtu anayejua hekima ya kimungu na dharmas. Brahma gnani.

<b>Karma Chakra</b>: Ni seti ya sehemu 108. Kila moja ya sehemu 12 za Karma chakra ina aina tofauti ya karma. Kila aina ya karma imegawanywa zaidi katika sehemu tisa. Sehemu kumi na mbili zina aina 108 (12*9) za karma.

<b>Karma visarga</b>: Kugawanya karma katika sehemu ndogo.

<b>Karma ya Yoga</b>: Wakati Jeevatma inapomtambua Aham katika mwili wake na haisikilizi kile Aham anasema, basi hapati karma yoyote. Ni vita vya Jeeva dhidi ya Aham.

<b>Karma Yogi</b>: Mtu anayejua hekima na kufanya mazoezi ya Karma Yogam.

<b>Karma</b>: Dhambi isiyoonekana na punya.

<b>Karmendriyas</b>: Mikono, miguu, mdomo, mkundu, na kiungo cha ngono.

<b>Manas</b>: Inafanya kazi kama mawasiliano kati ya ubongo na viungo. Inakumbuka na kukumbuka mambo.

<b>Moksham</b>: Ukombozi kutoka kuzaliwa, kifo, maisha, mateso, nk Muungano na Mungu. Paraloka, Mukti au Wokovu. Uhuru.

<b>Paramatma</b>: Ambayo ni tofauti na Atma. Baba kwa viumbe vyote vilivyo hai na Pancha Bhutas. Mungu, Roho Mtakatifu, Allah, Purushottama, Uttama Purusha au baba wa paraloka. Nafsi ya juu.

<b>Prakruti</b>: Mchanganyiko wa Chara Prakruti na Achara Prakruti. Asili.

<b>Prarabdha karma</b>: Karma iliyoamuliwa mapema. Hii hutokea katika maisha haya tangu kuzaliwa hadi kufa. Karma ya Prarabdha huamuliwa wakati mtu anazaliwa.

<b>Punya</b>: Inatokana na matendo mema. Ambayo husababisha raha maishani.

<b>Purusha</b>: Inahusu Paramatma katika kiumbe chochote kilicho hai.

<b>Sanchita karma</b>: Karma iliyokusanywa kama lundo baada ya uzoefu karma katika kila kuzaliwa inaitwa sanchita karma.

<b>Dhambi</b>: Inatokana na matendo mabaya. Husababisha shida na huzuni.

<b>Tanmatras</b>: Nishati zinazotokana (kuona, kusikia, kunusa, kuonja na kugusa) ambazo zimeunganishwa na viungo vya hisi.

<b>Upadesa</b>: Kupata moto wa hekima kama sadaka. Nchi ambayo sio nchi (Kila mtu mwenye hekima jicho lazima aone). Nishati ya hekima, Paramatma. Ubatizo. Kuanzishwa kwa hekima.

<b>Yogi</b>: Mmoja ambaye yuko kwenye Yogam. Mtendaji wa Yogam. Mtu anayejua hekima ya kimungu na anatenda dharmas. 
</div>
</div>`
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

    { title: "Njia ya Mungu", component: 0, chapterNumber: 0, subs: null, icon: 'information' },
    { title: 'Siri ya Uumbaji', component: 1, chapterNumber: 1, subs: null, icon: 'information' },
    {
      title: 'Injili ya Mathayo', component: null, chapterNumber: 2, icon: 'book',
      subs: [
        {
          shloka: "3:7 Enyi wazao wa nyoka! Ni nani aliyewaonya ninyi kuikimbia ghadhabu inayokuja?",
          component: 2,
          subs: null
        },
        {
          shloka: "(3:11) Mimi ninakubatiza kwa maji kwa ajili ya kubadilisha mana (akili). Lakini baada yangu anakuja aliye na nguvu zaidi kuliko mimi, ambaye sistahili hata kubeba viatu vyake. Yeye atawabatiza kwa Roho Mtakatifu na kwa moto.",
          component: 3,
          subs: null
        },
        {
          shloka: "(3:12) Kipepeo chake kimo mkononi mwake, na atausafisha uwanda wake, akikusanya ngano yake ghalani na kuyachoma makapi kwa moto usiozimika.",
          component: 4,
          subs: null
        },
        {
          shloka: "(3:16) Mara tu Yesu alipobatizwa, alipanda kutoka majini. Wakati huo mbingu zikafunguka, akamwona Roho wa Mungu akishuka kama njiwa na kutua juu yake.",
          component: 5,
          subs: null
        },
        {
          shloka: "(3:17) Na sauti kutoka mbinguni ikasema, Huyu ni mwanangu, ninayempenda; naye, nimefurahishwa sana.",
          component: 5,
          subs: null
        },
        {
          shloka: "(4:10) Yesu akamwambia, Ondoka kwangu, Shetani; Kwa maana imeandikwa: Mwabudu Bwana Mungu wako na umtumikie yeye peke yake.",
          component: 6,
          subs: null
        },
        {
          shloka: "(5:10) Heri wenye kuudhiwa kwa ajili ya haki (hekima), kwani wao ni ufalme wa paraloka.",
          component: 7,
          subs: null
        },
        {
          shloka: "(5:17) Msidhani kuwa nimekuja kutangua Sheria (Dharma Shastra) au Manabii; sikuja kutangua bali kutimiliza.",
          component: 8,
          subs: null
        },
        {
          shloka: "(5:18) Kwa maana amin, nawaambia, mpaka mbingu na nchi zitakapotoweka, hakuna herufi ndogo kabisa, hata nukta moja ya kalamu, itakayotoweka katika Sheria (Dharma Shastra) mpaka yote yatimie.",
          component: 9,
          subs: null
        },
        {
          shloka: "(5:19) Kwa hiyo, yeyote atakayeitupilia mbali amri mojawapo iliyo ndogo katika hizo amri na kuwafundisha wengineipasavyo, ataitwa mdogo kabisa katika ufalme wa paraloka;",
          component: 10,

          subs: null
        },
        {
          shloka: "(5:20) Kwa maana nawaambia ya kwamba wema wenu usipozidi ule wa Mafarisayo na wa walimu wa sheria, hakika hamtaingia katika ufalme wa paraloka.",
          component: 11,
          subs: null
        },
        {
          shloka: "(5:28) Lakini mimi nawaambia kwamba yeyote anayemtazama mwanamke kwa kumtamani amekwisha kuzini naye moyoni mwake.",
          component: 12,
          subs: null
        },
        {
          shloka: "(5:29) Ikiwa jicho lako la kulia likikukosesha, ling'oe na ulitupe mbali. Ni afadhali kwako kupoteza kiungo kimoja cha mwili wako, kuliko mwili wako wote kutupwa katika jehanum.",
          component: 13,

          subs: null
        },
        {
          shloka: "(5:30) Na mkono wako wa kulia ukikukosesha, ukate na uutupe. Ni afadhali kwako kupoteza kiungo kimoja kuliko mwili wako wote kwenda jehanamu.",
          component: 13,

          subs: null
        },
        {
          shloka: "(6:3) Lakini unapofanya dharma, usijulishe mkono wako wa kushoto unaofanya mkono wako wa kulia.",
          component: 14,

          subs: null
        },
        {
          shloka: "(6:4) Ili kutoa kwenu kuwe kwa siri. Kisha baba yako, ambaye anaona yale yanayofanywa kwa siri, atakupa thawabu.",
          component: 14,

          subs: null
        },
        {
          shloka: "(6:6) Bali wewe usalipo, ingia katika chumba chako cha ndani, na ufunge mlango, na usali mbele za Baba yako asiyeonekana. Kisha baba yako, ambaye anaona yale yanayofanywa kwa siri, atakupa thawabu.",
          component: 15,

          subs: null
        },
        {
          shloka: "(6:7) Nanyi mnaposali, msiendelee kupayuka-payuka kama washirikina, kwa maana wao wanadhani kuwa watasikiwa kwa sababu ya wingi wa maneno yao.",
          component: 16,

          subs: null
        },
        {
          shloka: "(6:8) Msiwe kama wao, kwani baba yenu anajua mnachohitaji kabla hamjamwomba.",
          component: 16,

          subs: null
        },
        {
          shloka: " 7:7) Ombeni nanyi mtapewa; tafuteni nanyi mtapata; bisheni nanyi mtafunguliwa mlango.",
          component: 18,
          subs: null
        },
        {
          shloka: "7:8) Maana kila aombaye hupokea; atafutaye huona; naye abishaye, mlango utafunguliwa.",
          component: 18,
          subs: null
        },
        {
          shloka: " (7:13) Ingieni kwa kupitia mlango mwembamba. Maana mlango ni mpana, na njia ni pana iendayo upotevuni, nao ni wengi waingiao kwa mlango huo.",
          component: 17,
          subs: null
        },
        {
          shloka: "(7:14) Lakini mlango ni mdogo, na njia ni nyembamba iendayo uzimani, na waionao ni wachache.",
          component: 17,
          subs: null
        },

        {
          shloka: " (7:15) Jihadhari na manabii wa uwongo. Wanawajia wamevaa mavazi ya kondoo, lakini kwa ndani ni mbwa- mwitu wakali.",
          component: 19,
          subs: null
        },
        {
          shloka: "(7:21) Si kila mtu aniambiaye, Bwana, Bwana, atakayeingia katika ufalme wa paraloka, bali ni yeye tu afanyaye mapenzi ya Baba yangu aliye katika paraloka.",
          component: 20,
          subs: null
        },
        {
          shloka: "(7:22) Wengi wataniambia siku ile, ‘Bwana, Bwana, hatukufanya unabii kwa jina lako na kwa jina lako kutoa pepo, na kwa jina lako kufanya miujiza mingi?",
          component: 21,
          subs: null
        },
        {
          shloka: "(7:23) Kisha nitawaambia waziwazi: Sikuwajua ninyi kamwe. Ondokeni kwangu, enyi watenda maovu!",
          component: 21,
          subs: null
        },
        {
          shloka: "(8:22) Yesu akamwambia, “Nifuate, waache wafu wazike wafu wao.",
          component: 22,

          subs: null
        },
        {
          shloka: " (9:12) Aliposikia hayo, Yesu alisema, “Wenye afya hawahitaji tabibu, bali walio hawawezi.",
          component: 23,

          subs: null
        },
        {
          shloka: "(9:13) Kwa maana sikuja kuwaita wenye haki, bali wenye dhambi.",
          component: 23,

          subs: null
        },
        {
          shloka: "(8:23) Kisha akapanda mashua na wanafunzi wake wakamfuata.",
          component: 24,
          subs: null
        },
        {
          shloka: "(8:24) Ghafla, dhoruba kali ikatokea ziwani, hata mawimbi yakaipiga mashua. Lakini Yesu alikuwa amelala.",
          component: 24,
          subs: null
        },
        {
          shloka: "(8:25) Wanafunzi wake wakaenda, wakamwamsha, wakisema, Bwana, tuokoe! Tutazama!",
          component: 24,
          subs: null
        },
        {
          shloka: "(8:26) Akajibu, Enyi wenye imani haba, mbona mnaogopa hivi? Kisha akaamka, akazikemea zile pepo na mawimbi, kukawa shwari kabisa.",
          component: 24,
          subs: null
        },
        {
          shloka: "(9:6) Nataka mjue kwamba Mwana wa Adamu anayo mamlaka duniani ya kusamehe dhambi. Basi, akamwambia yule mwenye kupooza, 'Simama, chukua mkeka wako, uende nyumbani.' Kisha mtu huyo akainuka na kwenda nyumbani.",
          component: 25,

          subs: null
        },
        {
          shloka: "(10:20) Kwa maana si ninyi msemao, bali ni Roho wa Baba yenu asemaye ndani yenu.",
          component: 26,

          subs: null
        },
        {
          shloka: "(10:30) Hata nywele za vichwa vyenu zimehesabiwa zote.",
          component: 27,

          subs: null
        },
        {
          shloka: "(10:34) Msidhani ya kuwa nimekuja kuleta amani duniani. sikuja kuleta amani, bali upanga.",
          component: 28,

          subs: null
        },
        {
          shloka: "(10:35) Kwa maana nimekuja kugeuza “‘mtu dhidi ya baba yake, binti dhidi ya mama yake, mkwe dhidi ya mama mkwe wake.",
          component: 28,

          subs: null
        },
        {
          shloka: "(10:36) Adui za mtu watakuwa watu wa nyumba yake mwenyewe.",
          component: 28,

          subs: null
        },
        {
          shloka: "(10:37) Ampendaye baba yake au mama yake kuliko mimi, hanistahiki; yeyote anayependa mwana au binti yake kuliko mimi hanistahili.",
          component: 29,
          subs: null
        },
        {
          shloka: "(10:38) Mtu ye yote asiyeuchukua msalaba wake na kunifuata, hanistahili.",
          component: 30,
          subs: null
        },
        {
          shloka: "10:40) Anayewapokea ninyi, anipokea mimi; na ye yote anipokeaye mimi, anampokea yeye aliyenituma.",
          component: 31,
          subs: null
        },
        {
          shloka: "(11:9) Mlitoka kwenda kuona nini? Nabii? Naam, nawaambia, na (mimi ni) zaidi ya nabii.",
          component: 32,
          subs: null
        },
        {
          shloka: "(11:28) Njoni kwangu ninyi nyote msumbukao na wenye kulemewa na mizigo, nami nitawapumzisha.",
          component: 33,
          subs: null
        },
        {
          shloka: "(12:17) Hili lilikuwa kutimiza yale yaliyonenwa kupitia nabii Isaya.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:18) Huyu hapa mtumishi wangu niliyemchagua, nimpendaye, ninayependezwa naye; nitaweka Roho yangu juu yake.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:19) Atatangaza uadilifu (hekima) kwa mataifa; Hatagombana wala hatapiga kelele; hakuna mtu atakayesikia sauti yake barabarani.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:20) Mwanzi uliopondeka hatauvunja, na utambi unaofuka moshi hatauzima, mpaka aifikishe haki (hikima) kwa ushindi.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:21) Katika jina lake mataifa yataweka tumaini lao.",
          component: 34,
          subs: null
        },
        {
          shloka: "(12:31) Kwa hiyo, nawaambia, kila aina ya dhambi na kashfa zinaweza kusamehewa, lakini kufuru dhidi ya Roho (Atma) haitasamehewa.",
          component: 35,
          subs: null
        },
        {
          shloka: "(12:32) Yeyote atakayenena neno la kumpinga Mwana wa Adamu atasamehewa, lakini yeye atakayenena neno juu ya Roho Mtakatifu hatasamehewa, katika ulimwengu huu (yuga) au katika ulimwengu ujao.",
          component: 36,

          subs: null
        },
        {
          shloka: "(12:36) Lakini mimi nawaambia kwamba kila mtu atalazimika kutoa hesabu siku ya hukumu kwa kila neno tupu alilosema.",
          component: 37,
          subs: null
        },
        {
          shloka: "(12:37) Kwa maana kwa maneno yako utahesabiwa haki, na kwa maneno yako utahukumiwa.",
          component: 37,
          subs: null
        },
        {
          shloka: "(12:40) Kwa maana kama vile Yona alivyokuwa siku tatu mchana na usiku ndani ya tumbo la samaki mkubwa, vivyo hivyo Mwana wa Adamu atakuwa katika moyo wa nchi siku tatu mchana na usiku.",
          component: 38,

          subs: null
        },
        {
          shloka: "(13:13) Ingawa wanaona, lakini hawaoni; ingawa wanasikia, hawasikii wala hawaelewi.",
          component: 39,
          subs: null
        },
        {
          shloka: "(13:14) Ndani yao unatimia unabii wa Isaya: Mtasikia lakini hamtaelewa; mtakuwa mnaona lakini hamtambui.",
          component: 39,
          subs: null
        },
        {
          shloka: "(13:15) Maana mioyo ya watu hawa imekuwa mizito; hawasikii kwa masikio yao, na wamefumba macho yao. Vinginevyo wangeona kwa macho yao.kusikia kwa masikio yao, na kuelewa kwa mioyo yao, na kugeuka, nami ningewaponya.",
          component: 39,
          subs: null
        },
        {
          shloka: "(15:7) Enyi wanaafiki! Isaya alikuwa sahihi alipotabiri juu yako.",
          component: 40,
          subs: null
        },
        {
          shloka: "(15:8) Watu hawa huniheshimu kwa midomo, lakini mioyo yao iko mbali nami.",
          component: 40,
          subs: null
        },
        {
          shloka: "(15:9) Wananiabudu bure; mafundisho yao ni kanuni za kibinadamu tu.",
          component: 40,
          subs: null
        },
        {
          shloka: "(15:11) Kinachoingia kinywani mwa mtu hakimtia unajisi, bali kile kitokacho katika vinywa vyao ndicho kimtiacho unajisi.",
          component: 41,
          subs: null
        },
        {
          shloka: "(15:12) Kisha wanafunzi wakamwendea, wakamwuliza, Je! unajua ya kuwa Mafarisayo walichukizwa waliposikia hayo?",
          component: 42,
          subs: null
        },
        {
          shloka: "(15:13) Akajibu, 'Kila pando asilolipanda Baba yangu wa mbinguni litang’olewa.'",
          component: 42,
          subs: null
        },
        {
          shloka: "(15:14) Waacheni; hao ni viongozi vipofu. Kipofu akimwongoza kipofu, wote wawili watatumbukia shimoni.",
          component: 43,
          subs: null
        },
        {
          shloka: "(16:21) Tangu wakati huo Yesu alianza kuwaeleza wanafunzi wake kwamba imempasa kwenda Yerusalemu na kupata mateso mengi kwa wazee na makuhani wakuu na walimu wa sheria, na kwamba lazima auawe. na siku ya tatu atafufuliwa. (Mara ya kwanza)",
          component: 44,
          subs: null
        },
        {
          shloka: "(16:22) Petro akamchukua kando na kuanza kumkemea. “Kamwe, Bwana!” Alisema. 'Hii haitatokea kwako kamwe!'",
          component: 44,
          subs: null
        },
        {
          shloka: "(17:22) Hata walipokusanyika Galilaya, aliwaambia, Mwana wa Adamu anakwenda kutiwa katika mikono ya watu.",
          component: 44,
          subs: null
        },
        {
          shloka: "(17:23) Watamwua, na siku ya tatu atafufuliwa. Wanafunzi wakajawa na huzuni. (Mara ya pili)",
          component: 44,
          subs: null
        },
        {
          shloka: "(19:23) Kisha Yesu akawaambia wanafunzi wake, Amin, nawaambia; ni vigumu kwa mtu tajiri kuingia katika ufalme wa paraloka.",
          component: 45,
          subs: null
        },
        {
          shloka: "(19:24) Tena, nawaambieni, ni rahisi zaidi ngamia kupenya tundu la sindano, kuliko tajiri kuingia katika ufalme wa Mungu.",
          component: 45,
          subs: null
        },
        {
          shloka: "(20:17) Sasa Yesu alikuwa akipanda kwenda Yerusalemu. Walipokuwa njiani, aliwachukua wale kumi na wawili kando, akawaambia.",
          component: 44,
          subs: null
        },
        {
          shloka: "(20:18) Tunapanda kwenda Yerusalemu, na Mwana wa Adamu atatiwa mikononi mwa makuhani wakuu na walimu wa sheria. Watamhukumu kifo.",
          component: 44,
          subs: null
        },
        {
          shloka: "(20:19) Watamkabidhi kwa watu wa Mataifa ili wadhihakiwe na kupigwa mijeledi na kusulubiwa. Siku ya tatu atafufuliwa! (Mara ya tatu)",
          component: 44,
          subs: null
        },
        {
          shloka: "(22:36) Mwalimu, ni amri ipi iliyo kuu zaidi katika Sheria ( Dharma Shastra )?",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:37) Yesu alijibu hivi: 'Mpende Bwana Mungu wako kwa moyo wako wote na kwa roho yako yote na kwa akili yako yote.'",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:38) Hii ndiyo amri kuu na ya kwanza.",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:39) Na ya pili inafanana nayo: Mpende jirani yako kama nafsi yako.",
          component: 46,
          subs: null
        },
        {
          shloka: "(22:40) Sheria yote na Manabii hutegemea amri hizi mbili.",
          component: 46,
          subs: null
        },
        {
          shloka: "(23:8) “Lakini ninyi msiitwe Rabi, kwa maana mnaye Mwalimu mmoja, na ninyi nyote ni ndugu.",
          component: 47,
          subs: null
        },
        {
          shloka: "(23:9) Wala msimwite mtu yeyote duniani 'baba,' maana mnaye Baba mmoja, naye yuko katika paraloka.",
          component: 47,
          subs: null
        },
        {
          shloka: "(23:10) Wala ninyi msiitwe wakufunzi, kwani mnaye Mwalimu mmoja, Masihi.",
          component: 47,
          subs: null
        },
        {
          shloka: "(23:15) “Ole wenu walimu wa sheria na Mafarisayo, wanafiki! Unasafiri nchi kavu na baharini ili kupata mwongofu mmoja, na ukifaulu, unawafanya kuwa mtoto wa kuzimu maradufu kuliko wewe.",
          component: 48,
          subs: null
        },
        {
          shloka: "(24:35) Mbingu na ardhi zitapita, lakini maneno yangu hayatapita kamwe.",
          component: 49,
          subs: null
        },
        {
          shloka: "(24:42) Basi kesheni, kwa maana hamjui ni siku gani atakayokuja Mola wenu.",
          component: 50,
          subs: null
        },
        {
          shloka: "(26:26) Walipokuwa wakila, Yesu alitwaa mkate, na baada ya kushukuru, akaumega, akawapa wanafunzi wake, akisema, 'Twaeni mle; huu ni mwili wangu.'",
          component: 51,
          subs: null
        },
        {
          shloka: "(26:27) Kisha akatwaa kikombe, akashukuru, akawapa, akisema, Nyweni katika hiki nyote;",
          component: 51,
          subs: null
        },
        {
          shloka: "(26:28) Hii ni damu yangu ya agano (hekima ya Mungu isiyo na vifungo vya ujinga), ambayo inamwagika kwa ajili ya wengi kwa msamaha wa dhambi.",
          component: 51,
          subs: null
        },
        {
          shloka: "(28:18) Kisha Yesu akaja kwao, akasema nao, akasema, Nimepewa mamlaka yote duniani na duniani.",
          component: 52,
          subs: null
        },
        {
          shloka: "(28:19) Kwa hiyo, enendeni mkawafanye mataifa yote kuwa wanafunzi, mkiwabatiza kwa jina la Baba na la Mwana na la Roho Mtakatifu.",
          component: 53,
          subs: null
        },
        {
          shloka: "(28:20) Mkiwafundisha kuyashika yote niliyowaamuru nyinyi. Na hakika mimi nipo pamoja nanyi siku zote, hata ukamilifu wa dahari (Yuga).",
          component: 53,
          subs: null
        },

      ]
    },
    {
      title: 'Injili ya Marko', component: null, chapterNumber: 3, icon: 'book',
      subs: [
        {
          shloka: " (2:19) Wageni wa bwana-arusi wawezaje kufunga akiwa pamoja nao? Hawawezi, mradi tu wanaye pamoja nao.",
          component: 54,
          subs: null
        },
        {
          shloka: "(2:20) Lakini wakati utakuja ambapo bwana arusi ataondolewa kwao, na siku hiyo watafunga.",
          component: 54,
          subs: null
        },
        {
          shloka: "(4:38) Yesu alikuwa nyuma ya meli, akilala juu ya mto. Wanafunzi wakamwamsha, wakamwambia, Mwalimu, hujali sisi tukizama?",
          component: 55,
          subs: null
        },
        {
          shloka: "(4:39) Akaamka, akaukemea upepo, akayaambia mawimbi, Nyamaza! Tulia!” Kisha upepo ukatulia na kukawa shwari kabisa.",
          component: 55,
          subs: null
        },
        {
          shloka: "(5:38) Walipofika kwenye nyumba ya kiongozi wa sinagogi, Yesu aliona ghasia, watu wakilia na kuomboleza kwa sauti kubwa.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:39) Akaingia ndani, akawaambia, Mbona ghasia na maombolezo haya yote? Mtoto hakufa bali amelala.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:40) Lakini wao wakamcheka. Baada ya kuwatoa wote nje, akawachukua baba na mama ya mtoto na wale wanafunzi waliokuwa pamoja naye, akaingia pale alipokuwa mtoto.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:41) Akamshika mkono, akamwambia, Talitha kumi. (maana yake, 'Msichana mdogo, nakuambia, inuka!').",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:42) Mara yule msichana akasimama, akaanza kutembea (alikuwa na umri wa miaka kumi na miwili). Kwa hili walishangaa kabisa.",
          component: 56,
          subs: null
        },
        {
          shloka: "(5:43) Alitoa amri kali kutomjulisha mtu yeyote kuhusu jambo hili na akawaambia wampe kitu cha kula.",
          component: 56,
          subs: null
        },
        {
          shloka: "(7:15) Hakuna kitu nje ya mtu kinachoweza kumtia unajisi kwa kuingia ndani yake.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:16) Bali ni kile kinachomtoka mtu ndicho kinachomtia unajisi.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:17) Naye alipokwisha kuuacha umati na kuingia nyumbani, wanafunzi wake wakamwuliza juu ya mfano huo.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:18) “Je! Aliuliza. “Hamwoni kwamba kitu chochote kikimwingia mtu kutoka nje hakiwezi kumtia unajisi?",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:19) Kwa maana haiwaingii mioyoni mwao, ila tumboni, na kisha kutoka mwilini.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:20) Akaendelea kusema: “Kinachomtoka mtu ndicho kinachomtia unajisi.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:21) Kwa maana hutoka ndani ya moyo wa mtu mawazo mabaya, uasherati, wizi, uuaji;",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:22) uzinzi, uchoyo, uovu, udanganyifu, uasherati, husuda, matukano, majivuno na upumbavu.",
          component: 57,
          subs: null
        },
        {
          shloka: "(7:23) Maovu haya yote yanatoka ndani na kumtia mtu unajisi.",
          component: 57,
          subs: null
        },
        {
          shloka: "(3:35) Yeyote anayefanya mapenzi ya Mungu huyo ndiye kaka yangu na dada yangu na mama yangu.",
          component: 58,
          subs: null
        },
        {
          shloka: "(4:17) Lakini kwa kuwa hawana mizizi, wanadumu kwa muda mfupi tu. inapotokea dhiki au adha kwa ajili ya lile neno, huanguka upesi.",
          component: 59,
          subs: null
        },
        {
          shloka: "(4:21) Akawaambia, Je! mwaleta taa na kuiweka chini ya bakuli au kitanda? Badala yake, je, huiweke kwenye kinara chake?",
          component: 60,
          subs: null
        },
        {
          shloka: "(4:22) Kwani yaliyofichika yatafichuliwa, na yaliyofichika yatadhihirika.",
          component: 60,
          subs: null
        },
        {
          shloka: "(6:4) Yesu akawaambia, Nabii hakosi heshima isipokuwa katika mji wake, na kwa jamaa zake, na nyumbani kwake.",
          component: 61,
          subs: null
        },
        {
          shloka: "(8:38) Mtu ye yote akinionea haya mimi na maneno yangu katika kizazi hiki cha uzinzi na dhambi, Mwana wa Adamu atamwonea haya mtu atakapokuja katika utukufu wa Baba yake pamoja na malaika watakatifu.",
          component: 62,

          subs: null
        },

        {
          shloka: `(9:7) Kisha wingu likatokea na kuwafunika, na sauti ikatoka katika hilo wingu: “Huyu ni Mwanangu, mpendwa wangu; Msikilizeni!"`,
          component: 63,

          subs: null
        },
        {
          shloka: `(10:17) Yesu alipoanza safari yake, mtu mmoja alimkimbilia na kupiga magoti mbele yake. “Mwalimu mwema,” aliuliza, “nifanye nini ili niurithi uzima wa milele?”`,
          component: 64,

          subs: null
        },
        {
          shloka: `(10:18) “Mbona unaniita mwema?” Yesu akajibu. “Hakuna aliye mwema, isipokuwa Mungu peke yake.`,
          component: 64,

          subs: null
        },

        {
          shloka: `(16:15) Akawaambia, Enendeni ulimwenguni mwote, mkaihubiri Injili kwa viumbe vyote.`,
          component: 65,
          subs: null
        },
        {
          shloka: `(16:16) Aaminiye na kubatizwa ataokoka, lakini asiyeamini atahukumiwa.`,
          component: 65,
          subs: null
        },

      ]
    },
    {
      title: 'Injili ya Luka', component: null, chapterNumber: 4, icon: 'book',
      subs: [


        {
          shloka: `(2:49) “Kwa nini mlikuwa mnanitafuta?” Aliuliza. “Je, hamkujua kwamba nilipaswa kuwa katika kazi ya Baba yangu?”`,
          component: 66,
          subs: null
        },
        {
          shloka: `(11:37) Yesu alipokuwa akizungumza, mmoja wa Mafarisayo alimkaribisha nyumbani kwa chakula. Basi, akaingia na kukaa mezani.`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:38) Mwenyeji wake alistaajabu kuona kwamba aliketi kula bila kufanya kwanza sherehe ya kunawa mikono iliyohitajiwa na desturi ya Kiyahudi.`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:39) Kisha Bwana akamwambia, “Ninyi Mafarisayo mnajali sana kusafisha kikombe na bakuli kwa nje, lakini ndani yenu ni mchafu, mmejaa ulafi na uovu!`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:40) Wapumbavu! Je, si Mungu aliyeumba ndani na nje?`,
          component: 67,
          subs: null
        },
        {
          shloka: `(11:41) Basi safisheni ndani kwa kutoa zawadi (dharmas) kwa masikini, na mtakuwa safi kote.`,
          component: 67,
          subs: null
        },
        {
          shloka: `(12:4) Nawaambia ninyi rafiki zangu, msiwaogope wale wauao mwili, na baada ya hayo hawawezi kufanya lolote zaidi.`,
          component: 68,

          subs: null
        },
        {
          shloka: `(12:5) Lakini nitawaonyesheni mtakayemwogopa: Mcheni yule ambaye baada ya mwili wenu kuchinjwa mamlaka ya kukutupa jehanamu. Naam, nawaambia, mwogopeni huyo.`,
          component: 68,

          subs: null
        },
        {
          shloka: `(12:25) Ni nani miongoni mwenu kwa kujisumbua aweza kujiongezea kimo chake hata mkono mmoja?`,
          component: 69,

          subs: null
        },
        {
          shloka: "(12:33) Uzeni mali zenu na wapeni masikini. Jifanyieni mifuko ambayo haitachakaa, hazina isiyoisha kamwe, mahali ambapo mwizi hakaribii, na nondo haharibu.",
          component: 70,
          subs: null
        },
        {
          shloka: "(12:34) Kwa kuwa hazina yako ilipo, ndipo utakapokuwapo na moyo wako.",
          component: 70,
          subs: null
        },
        {
          shloka: "(12:49) Nimekuja kuleta moto katika ardhi, na ninatamani ungekuwa umekwisha washwa.",
          component: 71,
          subs: null
        },
        {
          shloka: "(12:51) Je, unafikiri nilikuja kuleta amani duniani? La, nawaambia, bali mafarakano.",
          component: 72,
          subs: null
        },
        {
          shloka: "(12:52) Kuanzia sasa watakuwa watu watano katika familia moja wakifarakana, watatu kwa wawili na wawili kwa watatu.",
          component: 72,
          subs: null
        },
        {
          shloka: "(12:53) Watafarakana, baba dhidi ya mwanawe, na mwana dhidi ya babaye, mama dhidi ya bintiye na binti dhidi ya mama, mama mkwe dhidi ya binti-mkwe na binti-mkwe dhidi ya mama mkwe.",
          component: 72,
          subs: null
        },
        {
          shloka: "(13:3) Isipokuwa mkibadilisha nia yenu, ninyi pia mtaangamia.",
          component: 73,
          subs: null
        },
        {
          shloka: "(14:26) Mtu akija kwangu naye hamchukii baba na mama, mke na watoto, ndugu na dada—naam, hata maisha yao wenyewe—mtu huyo hawezi kuwa mfuasi wangu.",
          component: 74,

          subs: null
        },
        {
          shloka: "(14:27) Mtu ye yote asiyeuchukua msalaba wake na kunifuata, hawezi kuwa mfuasi wangu.",
          component: 75,
          subs: null
        },
        {
          shloka: "(18:29) “Amin, nawaambia,” Yesu akawaambia, “hakuna mtu aliyeacha nyumba, au mke, au ndugu, au dada, au wazazi, au watoto, kwa ajili ya ufalme wa Mungu, hatashindwa kupokea mara nyingi zaidi. katika ulimwengu huu, na katika wakati ujao uzima wa milele.”",
          component: 76,
          subs: null
        },
        {
          shloka: "(21:15) Nitawapeni maneno na hekima ambayo hakuna adui yenu atakayeweza kupinga au kupinga.",
          component: 77,

          subs: null
        },
        {
          shloka: "(21:17) Kila mtu atawachukia kwa ajili yangu.",
          component: 78,
          subs: null
        }



      ]

    },
    {
      title: 'Injili ya Yohana', component: null, chapterNumber: 5, icon: 'book',
      subs: [
        {
          shloka: "(1:1) Hapo mwanzo kulikuwako Neno, naye Neno alikuwako kwa Mungu, naye Neno alikuwa Mungu.",
          component: 79,
          subs: null
        },
        {
          shloka: "(1:9) Nuru ya kweli itiayo nuru kila mtu ilikuwa ikija katika ulimwengu.",
          component: 80,
          subs: null
        },
        {
          shloka: "(1:10) Alikuwako ulimwenguni, hata kwa yeye ulimwengu uliumbwa, lakini ulimwengu haukumtambua.",
          component: 81,
          subs: null
        },
        {
          shloka: "(1:11) Alikuja katika mali yake, lakini walio wake hawakumpokea.",
          component: 82,
          subs: null
        },
        {
          shloka: "(1:12) Bali wote waliompokea aliwapa uwezo wa kufanyika watoto wa Mungu, ndio wale waliaminio jina lake.",
          component: 83,
          subs: null
        },
        {
          shloka: "(1:13) Watu waliozaliwa si kwa jinsi ya asili, wala si kwa uamuzi wa kibinadamu, wala kwa mapenzi ya mume, bali waliozaliwa na Mungu.",
          component: 84,
          subs: null
        },
        {
          shloka: "(1:14) Naye Neno alifanyika mwili, akakaa kwetu. Tumeuona utukufu wake, utukufu wa Mwana pekee aliyetoka kwa Baba, amejaa neema na kweli.",
          component: 85,
          subs: null
        },
        {
          shloka: "(1:18) Hakuna mtu aliyemwona Mungu wakati wo wote; Mwana pekee, aliye katika kifua cha Baba, alimfunua.",
          component: 86,
          subs: null
        },
        {
          shloka: "(1:51) Kisha akaongeza, Amin, amin, nawaambia, mtaona mbingu zinafunguka, na malaika wa Mungu wakipanda na kushuka juu ya Mwana wa Adamu.",
          component: 87,
          subs: null
        },
        {
          shloka: "(3:3) Yesu akajibu, Amin, amin, nakuambia, hakuna mtu awezaye kuuona ufalme wa Mungu isipokuwa amezaliwa mara ya pili.",
          component: 88,
          subs: null
        },
        {
          shloka: "(3:4) “Mtu awezaje kuzaliwa akiwa mzee?” Nikodemo aliuliza. “Hakika hawawezi kuingia tumboni mwa mama yao mara ya pili ili kuzaliwa!",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:5) Yesu akajibu, “Kweli nawaambieni, hakuna mtu awezaye kuingia katika ufalme wa Mungu isipokuwa amezaliwa kwa maji na kwa Roho (Atma).",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:6) Mwili huzaa mwili, lakini Roho (Atma) huzaa roho.",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:7) Hupaswi kushangazwa na kusema kwangu, 'Lazima uzaliwe mara ya pili.'",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:8) Upepo huvuma popote unapotaka. Unaisikia sauti yake, lakini huwezi kujua inatoka wapi wala inakokwenda. Hivyo ndivyo ilivyo kwa kila mtu aliyezaliwa kwa Roho (Atma).",
          component: 89,
          subs: null
        },
        {
          shloka: "(3:13) Hakuna mtu ambaye amewahi kuingia Paraloka isipokuwa yule aliyetoka Paraloka—Mwana wa Adamu.",
          component: 90,
          subs: null
        },
        {
          shloka: "(3:15) Ili kila anayemwamini asipotee bali awe na uzima wa milele.",
          component: 91,
          subs: null
        },
        {
          shloka: "(3:17) Maana Mungu hakumtuma Mwana ulimwenguni ili auhukumu ulimwengu, bali ulimwengu uokolewe katika yeye.",
          component: 92,
          subs: null
        },
        {
          shloka: "(3:18) Kila amwaminiye yeye hahukumiwi; lakini asiyemwamini amekwisha kuhukumiwa kwa sababu hakuliamini jina la Mwana pekee wa Mungu.",
          component: 93,
          subs: null
        },
        {
          shloka: "(3:19) Hukumu ndiyo hii: Nuru imekuja ulimwenguni, lakini watu wakapenda giza badala ya nuru kwa sababu matendo yao yalikuwa maovu.",
          component: 94,
          subs: null
        },
        {
          shloka: "(3:20) Kila mtu atendaye maovu anaichukia nuru, wala haingii kwenye nuru kwa kuogopa kwamba matendo yao yatafichuliwa.",
          component: 94,
          subs: null
        },
        {
          shloka: "(3:21) Lakini yeyote anayeishi katika ukweli huja kwenye nuru, ili ionekane wazi kwamba yale waliyoyafanya yametendwa mbele ya Mungu.",
          component: 94,
          subs: null
        },
        {
          shloka: "(5:19) Yesu akawapa jibu hili: “Amin, amin, nawaambia, Mwana hawezi kufanya neno peke yake; Anaweza tu yale anayomwona Baba yake akiyafanya, kwa maana yote ayatendayo Baba, Mwana pia anayafanya.",
          component: 95,
          subs: null
        },
        {
          shloka: "(5:20) Kwa maana Baba anampenda Mwana na kumwonyesha yote anayofanya. Naam, naye atamwonyesha hata kazi kubwa kuliko hizi, hata mtastaajabu.",
          component: 96,
          subs: null
        },
        {
          shloka: "(5:21) Kwa maana kama vile Baba huwafufua wafu na kuwapa uzima, vivyo hivyo Mwana huwapa uzima wale ambao amependa kuwapa.",
          component: 97,
          subs: null
        },
        {
          shloka: "(5:22) Zaidi ya hayo, Baba hamhukumu yeyote, bali amekabidhi hukumu yote kwa Mwana.",
          component: 97,
          subs: null
        },
        {
          shloka: "(5:23) Ili wote wamheshimu Mwana kama vile wanavyomheshimu Baba. Yeyote asiyemheshimu Mwana hamheshimu Baba aliyemtuma.",
          component: 97,
          subs: null
        },
        {
          shloka: "(5:24) Amin, amin, nawaambia, Kila alisikiaye neno langu na kumwamini yeye aliyenipeleka yuna uzima wa milele; wala hatahukumiwa; bali amevuka kutoka mautini kuingia uzimani.",
          component: 98,
          subs: null
        },
        {
          shloka: "(5:26) Kwa maana kama vile Baba ana uzima ndani yake, vivyo hivyo amemjalia Mwana pia kuwa na uzima ndani yake mwenyewe.",
          component: 99,
          subs: null
        },
        {
          shloka: "(5:37) Hujapata kusikia sauti yake wala kuona sura yake.",
          component: 100,
          subs: null
        },
        {
          shloka: "(5:38) Wala neno lake halikai ndani yenu, kwani nyinyi hamumuamini Aliyemtuma.",
          component: 101,

          subs: null
        },
        {
          shloka: "(6:25) Walipomkuta ng'ambo ya ziwa, wakamwuliza, Rabi, ulifika hapa lini?",
          component: 102,
          subs: null
        },
        {
          shloka: "(6:26) Yesu akawajibu, Amin, amin, nawaambia, Mnanitafuta, si kwa sababu mliona ishara nilizozifanya, bali kwa sababu mlikula ile mikate mkashiba.",
          component: 102,
          subs: null
        },
        {
          shloka: "(6:27 Msitendee kazi chakula chenye kuharibika, bali chakula kidumucho hata uzima wa milele, ambacho Mwana wa Adamu atawapa. Kwa maana juu yake Mungu Baba ameweka muhuri wake wa kibali.",
          component: 102,
          subs: null
        },
        {
          shloka: "6:32) Yesu akawaambia, Amin, amin, nawaambia, si Musa aliyewapa mkate wa paraloka, bali Baba yangu ndiye awapaye ninyi mkate wa kweli utokao paraloka.",
          component: 103,
          subs: null
        },
        {
          shloka: "6-46. (6:46) Hakuna aliyemwona Baba ila yeye atokaye kwa Mungu; peke yake ndiye aliyemwona Baba.",
          component: 104,
          subs: null
        },
        {
          shloka: "(7:37) Siku ya mwisho na iliyo kuu zaidi ya sikukuu, Yesu alisimama na kusema kwa sauti kuu, “Yeyote aliye na kiu na aje kwangu anywe.",
          component: 105,
          subs: null
        },
        {
          shloka: "(7:38) Aniaminiye mimi, kama yalivyonena Kitabu, mito ya maji yaliyo hai itatoka ndani yake.",
          component: 105,
          subs: null
        },
        {
          shloka: "(8:12) Yesu alipozungumza tena na watu, alisema, 'Mimi ndimi nuru ya ulimwengu. Yeye anifuataye hatakwenda gizani kamwe, bali atakuwa na nuru ya uzima.'",
          component: 106,
          subs: null
        },
        {
          shloka: "(8:14) Yesu akajibu, 'Hata kama ninajishuhudia mwenyewe, ushuhuda wangu ni halali, kwa maana najua nilikotoka na niendako. Lakini hamjui nilikotoka wala niendako.",
          component: 107,
          subs: null
        },
        {
          shloka: "(8:19) Kisha wakamwuliza, Yuko wapi Baba yako? “Ninyi hamnijui mimi wala Baba yangu, 'Yesu akajibu. “Kama mngalinijua mimi, mngemjua na Baba yangu pia.'",
          component: 108,
          subs: null
        },
        {
          shloka: "(8:21) Yesu akawaambia tena, 'Mimi naenda, nanyi mtanitafuta, nanyi mtakufa katika dhambi yenu. Niendako ninyi hamwezi kuja.'",
          component: 109,
          subs: null
        },
        {
          shloka: "(8:23) Lakini aliendelea, “Ninyi ni wa chini; Mimi ni kutoka juu. Ninyi ni wa ulimwengu huu; mimi si wa ulimwengu huu.",
          component: 110,
          subs: null
        },

        {
          shloka: "(8:24) Niliwaambia ya kwamba mtakufa katika dhambi zenu; msipoamini kwamba mimi ndiye, mtakufa katika dhambi zenu.'",
          component: 111,
          subs: null
        },
        {
          shloka: "( 8:28 ) Kwa hiyo, Yesu alisema, “Mtakapokwisha kumwinua Mwana wa Adamu, ndipo mtakapojua ya kuwa mimi ndiye, na ya kuwa sifanyi neno langu mwenyewe, ila ninena yale aliyonifundisha Baba.",
          component: 112,
          subs: null
        },
        {
          shloka: "(8:29) Yeye aliyenipeleka yu pamoja nami; Hakuniacha peke yangu, kwa maana siku zote nafanya yale yampendezayo.",
          component: 113,
          subs: null
        },
        {
          shloka: "(8:53) Je, wewe ni mkuu kuliko baba yetu Ibrahimu? Alikufa, na manabii pia. Unafikiri wewe ni nani?",
          component: 114,
          subs: null
        },
        {
          shloka: "(8:54) Yesu akajibu, “Nikijitukuza mwenyewe, utukufu wangu si kitu. Baba yangu, ambaye ninyi mnadai kuwa Mungu wenu, ndiye anayenitukuza mimi.",
          component: 114,
          subs: null
        },
        {
          shloka: "(8.55) Ingawa nyinyi hamumjui, mimi namjua. Ikiwa ningesema kwamba sikufanya, ningekuwa mwongo kama ninyi, lakini ninamjua na ninatii neno lake.",
          component: 115,
          subs: null
        },
        {
          shloka: "(8:57) Wakamwambia, Wewe hujatimiza miaka hamsini bado, nawe umemwona Ibrahimu.",
          component: 116,

          subs: null
        },
        {
          shloka: "(8:58) 'Amin, amin, nawaambia,' Yesu akajibu, 'kabla Ibrahimu hajazaliwa, mimi niko.'",
          component: 116,

          subs: null
        },
        {
          shloka: "(9:39) Yesu alisema, 'Nimekuja ulimwenguni kutoa hukumu, ili vipofu waone na wale wanaoona wawe vipofu.'",
          component: 117,
          subs: null
        },
        {
          shloka: "(9:41) Yesu alisema, “Kama mngekuwa vipofu, hamngekuwa na hatia; lakini sasa unapodai unaweza kuona, hatia yako inabaki.",
          component: 118,

          subs: null
        },
        {
          shloka: "(10:18) Hakuna aniondoleaye uhai, bali mimi nautoa kwa hiari yangu mwenyewe. Ninayo mamlaka ya kuutoa na mamlaka ya kuutwaa tena. Amri hii niliipokea kutoka kwa Baba yangu.",
          component: 119,

          subs: null
        },
        {
          shloka: "(10:30) Mimi na Baba tu umoja.",
          component: 120,
          subs: null
        },
        {
          shloka: "(11:25) Yesu akamwambia, 'Mimi ndimi huo ufufuo na uzima. Yeye aniaminiye mimi, hata kama amekufa, atakuwa anaishi.'.",
          component: 121,
          subs: null
        },
        {
          shloka: "(11:26) Anayeishi kwa kuniamini hatakufa kamwe.",
          component: 122,
          subs: null
        },
        {
          shloka: "(12:25) Yeyote anayependa maisha yake atayapoteza, na yeyote anayechukia maisha yake katika ulimwengu huu atayaweka kwa uzima wa milele.",
          component: 123,
          subs: null
        },
        {
          shloka: "(12:40) Ameyapofusha macho yao, na akazifanya nyoyo zao kuwa ngumu, hata wasione kwa macho yao, wala wasione kwa nyoyo zao, wala wasigeuke, nami nitawaponya.",
          component: 124,
          subs: null
        },
        {
          shloka: "(12:47) Ikiwa mtu atayasikia maneno yangu, lakini hayashiki, mimi simhukumu mtu huyo. Kwa maana sikuja kuhukumu ulimwengu, bali kuokoa ulimwengu.",
          component: 125,
          subs: null
        },
        {
          shloka: "(12:48) Yuko hakimu kwa anaye nikataa na asiyekubali maneno yangu; maneno yale niliyosema yatawahukumu siku ya mwisho.",
          component: 125,
          subs: null
        },
        {
          shloka: "(12:49) Maana mimi sikunena kwa nafsi yangu, bali Baba aliyenituma ameniamuru niseme yote niliyonena.",
          component: 126,
          subs: null
        },
        {
          shloka: "(12:50) Najua kwamba amri yake inaongoza kwenye uzima wa milele. Kwa hiyo, chochote ninachosema ni kile ambacho Baba ameniambia niseme.",
          component: 126,
          subs: null
        },
        {
          shloka: "(14:7) Kama mngenijua mimi kweli, mngemjua na Baba yangu pia. Tangu sasa na kuendelea, mnamjua na mmemwona.",
          component: 127,
          subs: null
        },
        {
          shloka: "(14:8) Filipo akasema, 'Bwana, tuonyeshe Baba na hilo litatosha kwetu.'",
          component: 128,
          subs: null
        },
        {
          shloka: "(14:9) Yesu akajibu: 'Je, hunijui, Filipo, hata baada ya kukaa kwenu muda mrefu namna hii? Yeyote aliyeniona mimi amemwona Baba. Unawezaje kusema, 'Tuonyeshe Baba?'",
          component: 128,
          subs: null
        },
        {
          shloka: "(14:10) huamini Kwamba mimi niko ndani ya Baba, na Baba yu ndani yangu? Maneno ninayowaambia siyasemi kwa mamlaka yangu mwenyewe. Badala yake, ni Baba, anayeishi ndani yangu, ambaye anafanya kazi yake.",
          component: 129,
          subs: null
        },
        {
          shloka: "(14:6) Yesu akajibu, “Mimi ndimi njia na kweli na uzima. mtu haji kwa Baba ila kwa njia ya mimi.",
          component: 130,
          subs: null
        },
        {
          shloka: "(14:16) Nitamwomba Baba, naye atawapa Msaidizi mwingine wa kukusaidia na kuwa nawe milele.",
          component: 131,
          subs: null
        },
        {
          shloka: "(14:17) Ulimwengu hauwezi kumkubali kwa sababu haumuoni wala haumtambui. Bali ninyi mnamjua, kwa maana anaishi pamoja nanyi na atakuwa ndani yenu.",
          component: 132,
          subs: null
        },

        {
          shloka: "(14:20) Siku hiyo mtatambua ya kuwa mimi niko ndani ya Baba yangu, nanyi mko ndani yangu, nami ni ndani yenu.",
          component: 133,
          subs: null
        },
        {
          shloka: "(14:25) Hayo yote nimeyasema nikiwa bado nanyi.",
          component: 134,
          subs: null
        },
        {
          shloka: "(14:26) Lakini huyo Msaidizi, huyo Roho Mtakatifu, ambaye Baba atampeleka kwa jina langu, atawafundisha yote, na kuwakumbusha yote niliyowaambia.",
          component: 134,
          subs: null
        },
        {
          shloka: "(15:23) Anayenichukia mimi anamchukia na Baba yangu pia.",
          component: 135,
          subs: null
        },
        {
          shloka: "(15:24) Kama nisingalifanya miongoni mwao kazi ambazo hakuna mtu mwingine aliyezifanya, wasingalikuwa na dhambi. Kama ilivyo, wameona, na bado wamenichukia mimi na Baba yangu pia. Lakini hii ni ili kutimiza yale yaliyoandikwa katika Sheria yao: 'Walinichukia bila sababu.'",
          component: 136,
          subs: null
        },
        {
          shloka: "(15:25) Lakini hii ni ili kutimiza yale yaliyoandikwa katika Sheria yao: 'Walinichukia bila sababu.'",
          component: 136,
          subs: null
        },
        {
          shloka: "(15:26) Atakapokuja huyo Msaidizi, nitakayewapelekea kutoka kwa Baba, huyo Roho wa kweli, atokaye kwa Baba, yeye atanishuhudia.",
          component: 137,
          subs: null
        },
        {
          shloka: "(15:27) Na ninyi pia mnapaswa kushuhudia, kwa maana mmekuwa pamoja nami tangu mwanzo.",
          component: 137,
          subs: null
        },
        {
          shloka: "(16:7) Lakini, amin, nawaambieni, ni kwa faida yenu kwamba mimi niondoke. Nisipoondoka, huyo Msaidizi hatakuja kwenu; lakini nikienda, nitampeleka kwenu.",
          component: 138,
          subs: null
        },
        {
          shloka: "(16:8) Atakapokuja, atauthibitisha ulimwengu kuwa uko katika makosa juu ya dhambi na uadilifu na hukumu.",
          component: 139,
          subs: null
        },
        {
          shloka: "(16:12) Ninayo mengi ya kuwaambia, zaidi ya mnayoweza kustahimili sasa.",
          component: 140,
          subs: null
        },
        {
          shloka: "(16:13) Lakini yeye atakapokuja, huyo Roho wa kweli, atawaongoza awatie kwenye kweli yote. Hatanena kwa nafsi yake; Atazungumza tu kile anachosikia, na atakuambia kile ambacho bado kitatokea.",
          component: 141,
          subs: null
        },
        {
          shloka: "(16:14) Atanitukuza mimi kwa sababu ni kutoka kwangu atapokea yale atakayowajulisha.",
          component: 142,
          subs: null
        },
        {
          shloka: "(16:15) Yote yaliyo ya Baba ni yangu. Ndiyo maana nilisema kwamba Roho atapokea kutoka kwangu kwamba atawajulisha ninyi.",
          component: 142,
          subs: null
        },
        {
          shloka: "(16:16) Yesu aliendelea kusema,'Bado kitambo kidogo hamtaniona tena, na baada ya kitambo kidogo mtaniona.",
          component: 143,
          subs: null
        },
        {
          shloka: "(16:17) Basi baadhi ya wanafunzi wake wakasemezana wao kwa wao, Ana maana gani kusema, Bado kitambo kidogo hamtaniona tena; na baada ya kitambo kidogo. nanyi mtaniona, na kwa sababu ninaenda kwa Baba?",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:18) Waliendelea kuuliza, 'Anamaanisha nini kwa kusema ‘bado kitambo kidogo’? Hatuelewi anachosema.'",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:19) Yesu alipoona walitaka kumwuliza juu ya jambo hilo, akawaambia, mnaulizana nilimaanisha nini niliposema baada ya muda mfupi hamtaniona tena, na baada ya muda mchache mtaniona?",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:20) Amin, amin, nawaambia, mtalia na kuomboleza wakati ulimwengu ukifurahi. Mtahuzunika, lakini huzuni yenu itageuka kuwa furaha.",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:21) Mwanamke anayezaa ana uchungu kwa sababu wakati wake umefika; lakini mtoto akizaliwa, husahau dhiki kwa sababu ya furaha yake kwamba mtoto amezaliwa ulimwenguni.",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:22) Basi, pamoja nanyi: Sasa ni wakati wa huzuni yenu, lakini nitawaona tena nanyi mtafurahi, na hakuna mtu atakayewaondolea furaha yenu.",
          component: 144,
          subs: null
        },
        {
          shloka: "(16:25) Ingawa nimekuwa nikisema kwa njia ya mfano, wakati unakuja ambapo sitatumia tena lugha ya namna hii bali nitawaambia waziwazi juu ya Baba yangu.",
          component: 145,
          subs: null
        },


      ]

    },
    {
      title: 'Ufunuo wa Yohana', component: 146, chapterNumber: 6, subs: null, icon: 'information'
    },
    {
      title: 'Vidole Vitatu', component: 147, chapterNumber: 7, subs: null, icon: 'information'

    },
    {
      title: 'Ijumaa Kuu au Ijumaa Mbaya?', component: 148, chapterNumber: 8, subs: null, icon: 'information'

    },
    {
      title: 'Barua kutoka kwa Mhindu', component: 149, chapterNumber: 9, subs: null, icon: 'information'

    },

    {
      title: 'FAHARASA', component: 151, chapterNumber: 11, subs: null, icon: 'information'

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
