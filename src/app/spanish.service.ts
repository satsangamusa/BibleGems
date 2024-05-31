import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpanishService {

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
  selectedItem = 0;
  subItem = 0;
  networkStatus: any = "OFFLINE";
  bible: any = [

{
chapterName: "El camino de Dios",
chapterNumber: 0,
pageNumber: 0,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hubo algo de historia antes de la llegada de Jesús a la Tierra. También hay algo de historia después de su muerte. La historia registrada antes de su nacimiento se conoce como el Viejo <b>Testamento,</b> mientras que la historia documentada después de su llegada se llama el Nuevo <b>Testamento.</b> El Antiguo Testamento, que abarca el período anterior a Su nacimiento, Su vida en el Nuevo Testamento y la propagación de la comunidad cristiana después de Su muerte, tiene un gran significado para la comunidad cristiana. La compilación del Antiguo y del Nuevo Testamento se conoce como Sagrada <b>Biblia.</b> Si bien la Biblia cristiana y el Bhagavad-Gita hindú tienen como objetivo elevar y guiar a los humanos hacia Dios, tienen sus diferencias. El Bhagavad-Gita consta únicamente de las enseñanzas de Krishna, mientras que la Santa Biblia abarca relatos históricos antes y después de Jesús. Las enseñanzas cristianas se extraen del Antiguo Testamento antes del nacimiento de Cristo y de la propagación por Sus devotos en el Nuevo Testamento después de Su muerte. Si bien no hay nada intrínsecamente malo en esto, tras una reflexión más profunda, se hace evidente que sólo una porción de la Biblia es esencial para guiar a las personas en el camino hacia Dios. Así como en una obra de teatro tendemos a favorecer a ciertos personajes, y en un drama con múltiples episodios, podemos preferir uno sobre los demás, en el caso de la Biblia, es la porción del Nuevo Testamento que se centra en Jesucristo—desde Su desde su llegada a la Tierra hasta Su partida, eso tiene la máxima santidad e importancia para lograr la liberación (moksha). Es crucial comprender que la esencia central de la Biblia reside en la historia de Jesús. Las palabras de Jesús son como una bolsa de diamantes dentro de la Biblia, y todo lo que la humanidad necesita captar se puede encontrar en los <b>Evangelios de Mateo, Marcos, Lucas y Juan.</b> La cercanía divina que busca la humanidad se puede descubrir en estos cuatro evangelios. La sabiduría más elevada contenida en estos Evangelios se puede encontrar en el Evangelio de Juan, superando la inteligencia humana. A pesar de que la Biblia abarca 1029 páginas, la historia de Jesús ocupa sólo 102 páginas en el Nuevo Testamento. Si la Biblia se dividiera en diez partes, una eclipsa a las otras nueve, y quienes aprecian el valor de Jesús reconocen la profunda sabiduría contenida en esta parte.

  Estamos aquí para dilucidar algunas de las palabras de Jesús en los evangelios de Mateo, Marcos, Lucas y Juan, que están llenos de profunda sabiduría. Cabría preguntarse por qué reiteramos estas palabras cuando muchos padres, pastores y obispos ya han ofrecido sus interpretaciones. Aquí está mi respuesta: si bien los predicadores enseñan efectivamente versículos del Antiguo y Nuevo Testamento, parece haber una brecha en la explicación de los versículos de los cuatro evangelios, que abarcan la historia de Cristo. Así cómo es posible que los hindúes aún no hayan desentrañado completamente los secretos del Bhagavad-Gita, es posible que haya numerosas verdades ocultas dentro de los cuatro Evangelios que los cristianos aún deben descubrir. Esta no es una declaración de envidia hacia los predicadores; más bien, es una expresión de fe en Cristo. Nuestro propósito es compartir la verdad y asegurar que las personas puedan obtener una comprensión correcta de Jesús, apreciando Su<b>grandeza y poder.</b>

  Los hindúes, al ver mis libros con el nombre de Cristo, a menudo asumen que son literatura cristiana y se niegan a leerlos. Por el contrario, los cristianos pueden desconfiar de los libros escritos por un gurú hindú y preferir ceñirse a los textos cristianos. Los hindúes odian mi trabajo, pensando que un autor cristiano no puede ser un verdadero hindú, mientras que algunos cristianos pueden advertir contra mis libros, creyendo que tienen como objetivo convertir a los cristianos al cristianismo. Hinduismo y debe evitarse. Los hindúes nos acusan de convertir a su pueblo al cristianismo, y los cristianos nos acusan de convertirlos en hindúes. Sin embargo, es esencial aclarar nuestra intención. No buscamos convertir a nadie, sino que nuestro objetivo es animar a las personas a buscar la sabiduría del Dios verdadero. Cada hijo de Dios tiene labia expresar sus creencias acerca de Dios. Por lo tanto, compartimos pacientemente las enseñanzas de Dios, independientemente de lo que otros puedan pensar o suponer.

  Tengo una pregunta para aquellos que puedan albergar dudas o celos.<b>Dios vino a la Tierra como hombre y partió, pero también prometió regresar. ¿Alguien puede afirmar con confianza que Dios sólo aparece una vez?</b>Semejante afirmación parecería incompatible con la verdadera sabiduría. Dios ha proclamado Su regreso cada vez que hay necesidad en la Tierra. Él viene en tiempos de adversidad cuando los principios del dharma están amenazados. Esta declaración es evidente tanto en el Bhagavad-Gita como en la Biblia. Dios puede tomar cualquier forma e impartir Sus enseñanzas. <b>Es un error que los hindúes anticipen el regreso de Krishna como Krishna o que los cristianos esperan que Jesús regrese como Jesús.</b> Cuando Dios decide venir, no hay limitaciones en cuanto a tiempo, lugar o forma. Puede que se manifieste en formas más allá del reconocimiento humano, pero su mensaje permanece sin cambios con el tiempo. El Dharma, como principio divino, es inherentemente consistente e inmutable, similar a las leyes científicas. En consecuencia, Dios siempre impartirá el mismo dharma, independientemente de Su nombre, forma o la religión a través de la cual nace.

  Dios nunca estableció una religión específica en la Tierra cuando apareció. Sus enseñanzas no están sujetas a ningún marco religioso en particular, y Él no respalda ni pertenece a ninguna religión en particular. En cambio, transmitió Sus principios divinos, o dharmas, sin hacer referencia a ninguna religión específica. La creación de religiones es un esfuerzo humano. Cuando Dios observó malas acciones entre personas de cualquier grupo religioso, señaló sus errores, los guio por el <b>camino correcto de Dios</b> alentó la práctica del dharma independientemente de la afiliación religiosa. Los dharmas en sí no crearon religiones. Los humanos formaron religiones basadas en su comprensión de la sabiduría divina, el idioma que hablaban y sus comportamientos.

  Cada religión sigue su metodología única y adora a una deidad específica. Es costumbre que los seguidores de una religión observen los rituales asociados con esa fe. Sin embargo, es vital comprender que estas prácticas religiosas son creaciones humanas. Cuando Dios toma forma humana en la Tierra, no se adhiere a ningún ritual o costumbre religiosa específica. Tampoco se dedica a la adoración de otras deidades. Las prácticas y rituales religiosos son para los humanos, no para Dios. En cambio, el papel de Dios es guiar a las personas en el camino. <b>Camino correcto,</b> revelando cualquier deficiencia en su devoción. Cuando Dios se encarna como ser humano, Su enfoque está en impartir conocimiento sobre Dios y sus dharmas, en lugar de participar en la adoración de deidades, como lo hacen los humanos.

  Cuando Dios encarnó como Krishna en el Evapora Yuga, no se dedicó a la adoración de ninguna deidad. En cambio, reveló plenamente la sabiduría de Paramatma (la Alma Suprema) cuando llegó el momento adecuado. De manera similar, cuando Dios encarnó como Jesucristo en el Cali Yuga, no se dedicó a adorar a la deidad, sino que predicó la sabiduría que pretendía transmitir. Su verdadera grandeza y divinidad se hacen evidentes cuando imparte<b>sabiduría</b>. En otras ocasiones, puede aparecer como un individuo común y corriente, muy parecido a todos los demás. Los ignorantes pueden confundirlo con una persona común, pero aquellos con sabiduría pueden reconocerlo como Dios. Aquellos que poseen sabiduría completa pueden identificarlo cada vez que desciende a la Tierra. Sin embargo, los individuos bajo la influencia de maya no logran reconocerlo bajo ninguna circunstancia. Además, los humanos a veces lo perciben como un individuo común y corriente, lo someten a insultos y le causan diversos problemas.

  Cuando Dios viene a la Tierra como humano una vez cada miles de años, los humanos que son cría de serpientes no pueden reconocerlo. No sólo no lo reconocen, sino que también lo someten a torturas. Algunos tal vez se pregunten por qué se le somete a tormento cuando los humanos normalmente no torturan a sus semejantes. La respuesta está en el hecho de que cuando Dios se encarna como ser humano, no lleva una vida ordinaria. Su propósito es impartir sabiduría divina en alineación con el dharma. En consecuencia, aquellos que son ignorantes y carecen de comprensión del dharma desarrollan animosidad hacia Él, y este odio puede conducir a su persecución. En ausencia de enseñanzas divinas, no existirían tales adversarios. Sin embargo, cuando Él señala los adarmes en la conducta humana, aquellos que se adhieren a los adarmes, aunque crean que están siguiendo el dharma, se enojaron. A lo largo de la historia, los humanos le han faltado el respeto en cada encarnación como ser humano. Algunos sentían envidia de Jesús cuando enseñaba la sabiduría divina. No supieron apreciar Su grandeza y sabiduría, y finalmente lo condenaron a muerte. Murió a causa de los seguidores religiosos que pensaban que eran jennis. La cría de serpientes tiene el veneno de la ignorancia. Entonces, la vida de Cristo terminó a manos de la prole de serpientes.

  Dios sabe todas las cosas acerca de Dios y los humanos no saben nada. Los humanos sólo pueden comprender los dharmas (principios divinos) de Dios cuando Dios los revela. La revelación divina es esencial para que los humanos obtengan conocimientos sobre la naturaleza y las enseñanzas de Dios. Una porción de Dios, presente en cada átomo del universo, se encarna como humano. Para existir en el mundo durante un período determinado, interviene un sistema conocido como karma. La causa del nacimiento humano se atribuye al karma, pero Dios mismo está más allá del karma. Por lo tanto, Dios genera el karma necesario para Su propio nacimiento y encarna con ese karma. A tal individuo se le conoce como <b>Swayambhu</b>, que significa "nacido por sí mismo", no sujeto al karma. Un ser así es conocido como <b>Bhagavan o Consolador (Adarana Karta)</b>. Se cree que Dios pudo haberse manifestado en la Tierra como Bhagavan muchas veces en el pasado, aunque se desconoce el número exacto de veces que el dharma ha sido restaurado en la Tierra. Muchos misterios se han revelado a lo largo de los últimos millones de años, y la historia registrada abarca sólo unos pocos miles de años. Como resultado, nuestro conocimiento de los acontecimientos pasados ​​es limitado, pero los registros históricos indican casos en los que Dios se encarnó como ser humano para guiar a la humanidad.

  <b>Se hace evidente que Dios se encarna y muere como ser humano en la Tierra ocasionalmente.</b>Tras una reflexión profunda y con la sabiduría que poseemos, se hace evidente que Dios nació hace aproximadamente 5.000 años en la India y hace unos 2.000 años en Israel. Esta encarnación divina fue conocida como Jesucristo durante su tiempo en Israel. Estuvo presente entre los humanos en la Tierra durante un lapso limitado de 33 años, guiado por su propio karma predeterminado. Durante los primeros 30 años de Su vida, Jesús vivió como un Jeevatma común y corriente. Fue en los tres años siguientes que Él impartió la sabiduría de Atma a la humanidad mientras vivía en ocasiones como Atma.

  Algunas personas pueden cuestionar mi afirmación de que “La divinidad nace como hombre en la tierra”. La divinidad (Dios) se extiende a cada átomo del universo. ¿No se extiende Dios? en todo el universo cuando nazca como hombre? ¿Dios, de quien se dice que está presente en todos, no está presente en todos nosotros después de nacer como Bhagavan en la tierra? Exploremos la respuesta usando una analogía. Consideremos el mar, que está lleno de agua. Si tomamos una porción de esa agua del mar en un recipiente pequeño, el recipiente ahora contiene agua de mar, pero el mar sigue lleno de agua. El agua del contenedor se denomina "agua separada", mientras que el agua del mar es "agua no separada". Tanto el mar como el contenedor comparten la misma agua, sin diferencia en las propiedades del agua, excepto que el agua del contenedor. está separada del mar. De manera similar, podemos comparar a Dios con el mar. Bhagavan es como el agua separada en un recipiente, distinto de Dios como mar. Sin embargo, el agua del contenedor y el agua de mar son la misma; de manera similar, Bhagavan y Dios son idénticos. Cuando se pone agua en un recipiente, no agota el mar y el mar permanece lleno. Asimismo, cuando una parte de Dios se encarna como Bhagavan, Dios continúa siendo omnipresente como antes. No hay ninguna alteración en Dios, Sus principios divinos o Su omnipresencia cuando Él aparece como Bhagavan. Una parte de Dios se convierte en Bhagavan, pero no el Dios completo. Aunque Bhagavan es sólo una parte de Dios, tiene las mismas propiedades. Por tanto, no hay nada de malo en decir que Dios nace, aunque sólo una parte de Dios nace en la tierra. Por lo tanto, no hay nada malo en decir que Jesús es “Dios”.

  Algunas personas pueden plantear otra pregunta: si Jesús es Dios, ¿por qué soportó sufrimiento cuando la gente le hacía daño? ¿Por qué fue sometido a torturas y humillaciones humanas? También pueden preguntar por qué Jesús no les reveló su identidad divina y no empleó su poder divino para castigar a quienes lo maltrataron. Aquí está nuestra respuesta: Para entender esto, primero debemos captar un secreto divino. Dentro del cuerpo de una persona común existen tres almas: Jeevatma, Atma y Paramatma. Entre estas tres almas, Jeevatma y Atma residen dentro del cuerpo. Estas dos almas no son externas al cuerpo. La tercera alma, Paramatma, se extiende dentro y más allá del cuerpo, impregnando cada átomo del universo. Sin embargo, Paramatma no participa activamente en acciones dentro o fuera del cuerpo. La segunda alma, Atma, es responsable de todas las funciones corporales. La primera alma, Jeevatma, no hace nada excepto experimentar placer y tristeza. Muchos individuos pueden pensar que ellos (Jeevatma) son quienes realizan cada acción, pero ese no es el caso dentro del cuerpo humano. El Atma, que reside dentro de nosotros sin que nos demos cuenta, realiza todo el trabajo. Ni siquiera el Atma hace nada según su propia voluntad.alma funciona según <b>karma</b>, que es la causa subyacente de cada tarea. Según la ley del karma, Jeevatma está destinado a experimentar placer y tristeza. Para que Jeevatma experimente estas experiencias dentro del cuerpo, el Atma, que se extiende por todo el cuerpo, facilita estas funciones corporales. Esto incluye procesos fisiológicos como la digestión de los alimentos, la regulación de los latidos del corazón y el manejo de funciones corporales como la separación de la orina y el sudor de la sangre. El papel del Atma en la realización de estas funciones corporales permite que Jeevatma coexista dentro del cuerpo. Dentro del cuerpo, la función principal de Jeevatma es experimentar. Esta es una ley inherente que gobierna todo cuerpo humano, inmutable y constante.

  Aunque Dios nace como ser humano, su cuerpo opera con un sistema similar al de un ser humano común y corriente. En su cuerpo, Paramatma debe estar presente, Atma realiza todo el trabajo y Jeevatma experimenta. Este mismo proceso ocurre dentro del cuerpo de Dios cuando Él toma forma humana. Cuando Dios vino como Jesús, su cuerpo ya no era diferente de un cuerpo humano común y corriente. En consecuencia, experimentó sufrimiento y placeres tal como los experimentaría cualquier Jeevatma. Jesús enfrenta numerosos desafíos en la vida, los cuales tuvo que afrontar como Jeevatma. Para pasar por estas experiencias en Su vida terrenal, Él creó Su propio karma y encarnó como ser humano. Ahora, quizás te preguntes qué lo diferencia de nosotros. De hecho, hay una diferencia significativa. Anteriormente aprendimos que sólo el Atma opera dentro de cada cuerpo humano. En el cuerpo de Bhagavan, es también el Atma quien lleva a cabo las funciones. Sin embargo, hay casos únicos en los que algo diferente sucede dentro del cuerpo de Bhagavan. En determinadas ocasiones, las tres almas se desvían de sus roles convencionales y operan de manera diferente. Durante esos momentos, Jeevatma entra en un estado donde no hay experiencia, lo que le permite a Atma asumir el papel de Jeevatma. Las palabras pronunciadas desde el cuerpo de Bhagavan en este estado, provenientes del Atma, son de naturaleza enteramente espiritual. Las profundas verdades espirituales y los dharmas de Dios sólo se revelan cuando Atma habla directamente. En raras ocasiones, Atma y Jeevatma guardan silencio y Paramatma toma el relevo y habla. Esos sucesos pueden ocurrir una o dos veces durante la vida de Bhagavan. En las vidas de Jesús, Krishna y Ravana Brahma, hubo casos en los que Paramatma habló. Cuando Paramatma habla, Prakruti (la naturaleza material) sigue sus palabras. De manera similar, cuando Atma habla, la sabiduría profunda está bajo Su control. En la vida de estas encarnaciones divinas sucedió lo siguiente:<b>1) Las palabras de Paramatma ejercieron mando sobre Prakruti. 2) Las palabras del Atma transmitieron pura sabiduría del Atma. 3) Jeevatma experimentó placer y tristeza.</b>Paramatma habló cuando estalló una tormenta en el mar durante la vida de Jesús y cuando Él ordenó que la tormenta se calmara. Se hizo evidente que Prakruti siguió sus palabras y se calmó. Como Atma, expresó sabiduría pura. También experimentó diversas alegrías y tristezas como Jeevatma durante el resto de su vida. Acontecimientos similares ocurrieron en la vida de Krishna, donde ordenó al Sol y mató a Saindhava. También hubo una ocasión en la que Krishna reveló una forma universal y declaró: "Yo soy Paramatma". Como Atma, transmitió profunda sabiduría en la forma del Bhagavad-Gita y experimentó los placeres y tristezas de la vida como Jeevatma durante el tiempo restante. Esta interacción de las tres almas asumiendo roles distintos ocurre exclusivamente dentro del cuerpo de Bhagavan. La divinidad asume forma humana sólo una vez cada miles o incluso millones de años. Cuando Dios nace en la Tierra, vive predominantemente como un Jeevatma, similar a los demás. Sin embargo, ocasionalmente habla como Atma unas cuantas veces al año durante breves períodos cuando es necesario. Hablar como Paramatma ocurre muy raramente, si es que ocurre. La necesidad de hablar como Atma surge porque Él ha venido a impartir dharmas. Esto representa el sistema de Dios, distinto del sistema de maya.

  No hay problema mientras Dios se comporte como un hombre común y corriente. Maya, sin embargo, se opone cuando Dios imparte sabiduría como Atma. Maya se opone fundamentalmente a la sabiduría de Dios. Por lo tanto, maya, a menudo denominada Satán, está alerta para evitar que las personas cambien su lealtad del lado de maya para abrazar la sabiduría de Dios. Además, Maya busca activamente a aquellos que muestran interés y comprensión de la sabiduría, intentando desviarlos de regreso a su lado. Esta es la razón por la que muchas personas tienen un interés limitado en abrazar la verdadera sabiduría divina, en gran parte debido a la influencia de maya. En consecuencia, incluso aquellos que poseen algo de sabiduría pueden desviarse del camino. Podrías plantear una pregunta en este punto: “Hoy en día hay numerosos devotos que están profundamente comprometidos con su fe. Buscan sabiduría de varios gurús espirituales y muestran una devoción inquebrantable a las deidades. Casi todo el mundo es devoto de Dios, excepto unos pocos ateos. ¿Es posible cambiar a los devotos de Si Baba y Ayyappa? Además de los templos antiguos en el país, se están construyendo numerosos templos nuevos en honor a Shirdi Sai Baba y Ayyappa Swamy. Parece que maya no ha obstruido su devoción. ¿Cómo podemos aceptar su perspectiva? Aquí está mi respuesta.

  Maya está en directa oposición al camino de Dios y a la sabiduría suprema. Su oposición a la profunda sabiduría de Dios demuestra el gran poder de Maya, al que se hace referencia como <b>‘Maya duratyaya'</b>en el Bhagavad-Gita. Dios dijo en el Bhagavad-Gita que<b>es imposible conquistar a Maya;</b> por eso se sabe que<b>Maya está engañando inimaginablemente a los humanos.</b>Por lo tanto, el funcionamiento de Maya sigue siendo en gran medida esquivo y misterioso, dejando a los individuos susceptibles a sus engaños. Maya opera creando su propia versión de sabiduría. Como Dios rara vez se encarna en la Tierra como Bhagavan una vez cada miles de años, maya produce numerosas imitaciones de Bhagavad para confundir y desviar a la gente del reconocimiento del Bhagavan genuino. Introduce muchos tipos de sabiduría, lo que hace que a muchos les resulte difícil distinguir la verdadera sabiduría de la falsa. Cuando hay muchos Bhagavans asociados con maya en la Tierra, ¿quién reconocerá al verdadero Bhagavan que rara vez viene a la Tierra? Cuando hay Bhagavans que exhiben numerosas hazañas y milagros sobrenaturales (mahatmas), ¿quién puede identificar al verdadero Bhagavan que demuestra sólo uno o dos mahatmas en su vida? De esta manera, se ha vuelto imposible reconocer la sabiduría de Dios y a Bhagavan. Dios mostró Su realidad en forma universal, algo que nadie jamás ha visto ni podrá comprender. Pero maya influyó en algunas personas para que escribieran que muchos devatas mostraban forma universal, incluidos Saibaba y Ver Abraham, por lo que la gente no consideraba la forma universal de Krishna como la más elevada. ¿Quién piensa que la forma universal que Krishna mostró en el Bhagavad-Gita es la más grande de todas? Por tanto, los cristianos no pudieron reconocer a Jesucristo como Bhagavan; de manera similar, los hindúes no podían conocer a Krishna como Bhagavan. Los hindúes no podían considerar a Krishna como el Dios verdadero. Mientras que algunos lo ven como el último de todos los demás dioses, otros no lo reconocen ni siquiera como una deidad menor debido a que perciben sus acciones como traviesas. Nadie considera siquiera a Krishna como Dios, como Shirdi Sai Baba. De manera similar, en la tradición cristiana, a pesar de considerar a Jesucristo como el Hijo de Dios, muchos no han captado la esencia de Sus enseñanzas. Bajo la influencia maya, los cristianos veneran la cruz, que contribuyó decisivamente a la crucifixión de Jesús, en lugar de a Jesús mismo. Pensaron que serían contados como hindúes si adoraban <b>Jesús'ídolo</b>; por eso rezan a la cruz. Mientras Jesús decía: <b>“El que me ha visto ha visto a mi Padre”</b>, ¿no es la obra de maya la que hizo que los cristianos respetaran la cruz, que causó la muerte de Jesús, en lugar del ídolo de Jesús? Maya aleja estratégicamente a las personas del camino de Dios, incluso cuando creen que están firmemente en ese camino. Trabaja para socavar la credibilidad de aquellos que entienden la sabiduría de Dios y dicen la verdad, haciendo que sus palabras parezcan inferiores o inauditas. Además, maya ha contribuido a la formación de varias religiones y a la ilusión de que existen dioses distintos para cada religión. A pesar de que existe un poder supremo que gobierna el universo, maya ha fomentado la creencia en múltiples dioses correspondientes a diferentes religiones. La influencia de maya es profunda y condujo al surgimiento de una multitud de dioses y creencias religiosas. Sólo dentro de la fe cristiana, algunos devotos adoran a María mientras que otros adoran a Cristo. De manera similar, el hinduismo cuenta con numerosas deidades. A la luz de esta diversidad, ahora es esencial embarcarse en una búsqueda para discernir quién es el líder último de todas las deidades y religiones. Sin embargo, esta tarea no es fácil. <b>Al reconocer primero a maya y su impacto, posteriormente podremos buscar el camino hacia Dios. </b>Por lo tanto, es importante determinar si el camino en el que te encuentras actualmente conduce a Dios o está influenciado por Maya.

  Hay un poder sobrenatural infinito que no tiene forma, nombre e indefinición. Nos referiremos a él como "Paramatma". Se sabe muy poco sobre Paramatma, la fuente de toda existencia. El paramatma debe manifestarse y revelarse personalmente porque, a pesar de impregnar cada átomo, seguimos limitados a comprender sólo los Pancha Bhutas (cinco elementos básicos). Nuestros sentidos sólo pueden percibir lo que está dentro de su alcance, y Paramatma está más allá del alcance de nuestros sentidos. Sólo podemos comprenderlo cuando toma forma humana, haciéndose visible y revelando su sabiduría. De lo contrario, permaneceremos inconscientes de Él. Por lo tanto, Paramatma debe encarnar como ser humano e impartir Su sabiduría. Él emerge para revelar Sus dharmas, pero estas enseñanzas se desvanecen con el tiempo, lo que requiere Su regreso para restablecerlas. Paramatma, el creador del universo, a menudo elige manifestarse como humano, llevando una existencia similar a la de una persona común y corriente y cumpliendo Su propósito. Identificar a Paramatma en tal forma es una tarea desafiante. A pesar de las numerosas encarnaciones de Paramatma en la Tierra, los humanos han luchado por reconocer Su presencia incluso hasta el día de hoy.

  Aquellos que no reconocen a Bhagavan cuando Él está presente, a menudo comienzan a adorarlo con gran devoción después de que Él se ha ido. No lo adoran porque sea Paramatma, sino porque creen que posee una gran sabiduría o que sus deseos se cumplirán. Sin embargo, todavía no se dan cuenta de que Él es Paramatma. Podemos reconocer las encarnaciones de Paramatma a través de ciertos principios. De esta manera, podemos identificar que Paramatma vino como Krishna al final del Evapora Yuga y posteriormente como Jesús en el Kali Yuga. Es posible que Paramatma también haya llegado en un momento posterior, pero no lo sabemos.

  Independientemente de cuántos nacimientos haya tenido Paramatma, no hay similitudes entre un nacimiento y otro excepto en sus dharmas. Aunque la esencia de Paramatma sigue siendo la misma en Krishna, que nació en Dvapara Yuga, y en Jesús, que nació en Kali Yuga, sus vidas exteriores son muy diferentes. Sri Krishna disfrutó de una vida de riqueza y tuvo ocho esposas. También secuestró a su primera esposa con su consentimiento y mató a sus enemigos. Después de observar todo esto, resulta difícil para cualquiera reconocerlo como Bhagavan, quien está imbuido de una parte de Paramatma.

  No hubo mentiras ni engaños en la vida de Jesús, quien nació en el Kali Yuga. Jesús era manso y ponía la otra mejilla si un enemigo lo abofeteaba. No sentía lujuria por las mujeres. Krishna y Jesús son muy diferentes en los asuntos mundanos. Incluso los Gurús de ambas religiones se equivocan acerca de estos dos. Los gurús hindúes critican a Jesús preguntando: “¿Por qué Jesús murió a manos de gente común y corriente y por qué no se salvó a sí mismo? ¿Por qué tuvo que morir si tenía el poder divino para resucitar a los muertos? ¿Por qué sufrió cuando fue clavado en la cruz? De manera similar, los pastores de la iglesia critican a Krishna argumentando: "¿Cómo puede convertirse en Dios si tuvo muchas esposas?" De esta manera, se centran en los aspectos mundanos de las vidas de Jesús y Krishna, pero nadie contempla por qué tales acontecimientos ocurrieron en sus vidas. El propio Paramatma dijo que nadie podía reconocerlo cuando vino a la Tierra. Su papel es fingir para que nadie lo reconozca. Su misión es ser un ladrón no identificado entre nosotros, robándose nuestra ignorancia. Anteriormente mencionamos que no se puede entender a Dios a través de asuntos mundanos.<b>Dios sólo puede ser reconocido a través de la sabiduría de Dios.</b>Incluso aquellos que dicen ser Gurús a menudo no logran captar este principio e intentan medir a Dios usando estándares mundanos. En consecuencia, cuando Dios viene a la Tierra, nadie lo reconoce. Aquellos que realizan milagros basados ​​en asuntos mundanos pueden parecer grandes y divinos, pero a menudo se pasa por alto al Dios verdadero. Esto se debe a que la presencia de Dios no puede identificarse basándose en factores externos y mundanos. En cambio, la encarnación de Dios puede reconocerse basándose en el dharma. El mismo dharma se puede encontrar en el Bhagavad-Gita y en las enseñanzas de Jesús, que nos permiten reconocerlos como uno solo. Sin embargo, no hay otras similitudes entre ellos en asuntos externos y mundanos.

  Hay un solo Dios para el mundo entero, que se encarna como hombre con muchos nombres y formas para guiar a la humanidad hacia él. Desafortunadamente, muchos humanos no se dan cuenta de esto y crean religiones que discuten sobre quién es Dios más grande. No comprenden que Dios en su religión y Dios en otras religiones son el mismo. Los humanos tienden a amar su religión más que a Dios, lo cual es una gran ignorancia. Es fundamental saber que hay un solo Dios, aunque le llamemos con diferentes nombres. Paramatma decide su papel basándose en el tiempo, la nación y la gente, y se encarna como Bhagavan para enseñar sus dharmas. Sus nacimientos no son los mismos, pero su objetivo es siempre el mismo: enseñar sus dharmas. Cuando vino como Jesús o Krishna, los dharmas que enseñó fueron los mismos. Dios y sus dharmas pueden parecer diferentes porque cuando Paramatma nació como Krishna y Jesús, sus nombres, países de nacimiento y personalidades diferían.

  Tomemos como ejemplo el dharma declarado por Paramatma. Sri Krishna dijo en el Gita,<b>"Paritranaya Sadhunam Vinasaya Chaturskrutam"</b>, lo que significa, <b>"Protegeré a los justos y destruiré a los malvados"</b>.Algunos predicadores cristianos toman estas palabras y dicen a los hindúes: “Vuestra religión no ofrece protección y vuestro Dios sólo matará a los pecadores”. Sin embargo, en nuestra religión existe protección para todos los pecadores, y Jesús vino a la Tierra para salvar a los pecadores. Mientras tu Dios pueda destruir a los pecadores y a los malvados en tu religión, mi Dios (Jesús) te protegerá. Por lo tanto, los cristianos afirman que su Dios es el Dios verdadero. Los cristianos no entendieron el verdadero significado de lo que el Señor Jesús dijo a este respecto, y los hindúes no entendieron el significado del sloka que Krishna dijo en el Gita. Por lo tanto, las palabras de Krishna y las palabras de Jesús les parecen diferentes. Creían que Krishna y Jesús eran diferentes, pero no sabían que eran iguales y que las palabras que pronunciaban tenían el mismo significado. Las palabras "destruir a los pecadores y a los impíos" significan que usan el arma de<b>'enseñando'</b>para eliminar el karma del pecado y del mal y hacerlos puros. Cuando los malvados se vuelven puros, no quedarán atrapados en pecados sino que se volverán justos. Entonces no habrá gente mala. Por lo tanto, las dos frases, "decir en el Gita que Krishna acabará con los malvados" y "decir en la Biblia que Jesús te protegerá de los pecados", significan la misma cosa.

  Aunque Jesús y Krishna hablaban idiomas diferentes, eran personas diferentes y tenían nombres diferentes, el propósito de sus palabras era el mismo. Debido a la incapacidad de las personas para comprender plenamente el concepto de Dios y su tendencia a interpretar Sus palabras según sus preferencias, dividieron al Dios que proclamaba el mismo dharma. Cuando Los hindúes critican a Jesús, y los cristianos afirman que Krishna no es Dios ni Paramatma, el Rey y Padre de paraloka, el Jefe del universo que impregna el mundo entero y reside dentro de nosotros, se ríe sabiendo que estas personas son ciegas a pesar de tener ojos. Krishna dijo en el Gita: "Iré cuando haya una amenaza al dharma". Sin embargo, los hindúes lo reconocen como Dios sólo si aparece de la misma manera que antes: con plumas de pavo real, una flauta y el chakra. Si Dios nace en una forma diferente, dicen: "Tú no eres nuestro Dios". En la Biblia, Jesucristo dijo que vendría otra vez. Los cristianos reconocerán a Jesucristo sólo si Él aparece de la misma manera que antes: con cicatrices de clavos en las manos y marcas de lanzas en el costado. Dirán: "Tú no eres nuestro Señor", si Él viene en una forma diferente. Debido a las diferencias en sus apariencias y comportamientos, los cristianos no podían reconocer que Jesús era Krishna y, de manera similar, los hindúes no podían reconocer que Krishna era Jesús. Por eso Dios dijo en el Gita, <b>“La gente me deshonra porque no me conocen ni a mí ni a mí mahatma".Algunos</b> gurús hindúes enseñarán sabiduría y proporcionarán una pedesa a Krishna si regresa. De manera similar, si Jesús regresa, como se menciona en la Biblia, los predicadores cristianos, que tal vez no lo reconozcan, lo bautizarán. Mientras haya Gurús que le enseñen sabiduría a Krishna si cambia Su forma y nombre, se puede decir que hay ignorancia en la religión hindú. De manera similar, mientras haya cristianos que le expliquen los versículos de la Biblia a Jesús si Él cambia Su forma y aparece ante ellos, se puede decir que no son plenamente conscientes de Dios.

  Hay una fuerte razón por la cual incluso los grandes ganas no pudieron reconocer a Dios ni comprender su sabiduría cuando Dios vino a la Tierra. Antes de comprender la razón, uno debe estar familiarizado con lo visible. <b>creación.</b> Hay un oponente importante para Dios, razón por la cual no se comprende completamente a Dios. Los cristianos lo llaman "Satanás", los hindúes se refieren a él como "Maya" y los musulmanes lo llaman "Shaitan". Comprender el secreto de algo con nombres como <b>maya, Satán o Shaitán,</b> primero hay que entender el secreto de la creación. Profundicemos en los detalles a continuación.

</div></div>
</span>`
},
{
chapterName: "Secreto de la creación",
chapterNumber: 1,
pageNumber: 1,
verse: ``,
meaning: ``,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma (Dios) no era ni hombre ni mujer antes de que se creara el universo. Paramatma quería crear el universo y así dio existencia a la Prakruti femenina o maya (Satanás). Determinó las características requeridas y todos los métodos necesarios para ello. Como Prakruti era mujer, Paramatma contrastaba marcadamente con ella, y esta característica se conoce como Purusha (masculino). Paramatma deseaba que Prakruti fuera completamente opuesto a Él, por lo que le concedió la misma autoridad porque creía que el juego sería más emocionante cuando ambos oponentes poseyeran la misma fuerza. Prakruti (Satanás) es contrario a Paramatma pero no es un enemigo. Aunque es natural que Dios (Paramatma) enfrente la oposición de Satanás (Prakruti), no son enemigos entre sí.

  Paramatma, quien creó a Prakruti, eventualmente la absorberá en Sí mismo. Él es el padre, esposo y destructor de Prakruti, así como la fuerza dentro de ella. Paramatma, que es vasto, creó Prakruti y participa en un juego llamado "Jagath". En este juego, Paramatma se disfraza de Purusha (masculino) aunque fuera del juego, no es ni hombre ni mujer. Prakruti se divide en cinco elementos: cielo, aire, fuego, agua y tierra, y se llama Prapancha. Después de crear Prakruti, Paramatma deseó crear un Jagath formado por seres vivos que experimentan el nacimiento y la muerte. Lo logró creando seres vivos con Atma y construyendo Jagath dentro de Prapancha. En telugu,<b>'Y' significa</b> nacimiento, y <b>listo significa</b> muerte. De ahí que a todos los seres vivos se les llame acertadamente <b>'Jagath,’</b> indicando que consiste en nacimiento y muerte.

  Paramatma creó a Jagath, que consta de seres vivos dentro de Prakruti. Mientras que Prakruti (mujer) y Paramatma (Purusha) se consideran iguales, Jagati nació por separado más tarde. Hasta ahora, Paramatma ha creado Prakruti (Prapancha) y Jagath, dando como resultado tres componentes, incluido Paramatma. Inicialmente, Paramatma, que no era ni hombre ni mujer, creó a Prakruti. Luego, Paramatma se transformó en Purusha (Atma), tomó a Prakruti como Su esposa y juntos tuvieron una descendencia única llamada Jagath. Si ignoramos estas relaciones, Paramatma creó tres partes distintas: Prakruti, Purusha y Jagath. Prakruti es femenina, Paramatma es masculina (Purusha) y Jagath debe considerarse no binario (ni masculino ni femenino). El juego principal es que Paramatma y Prakruti arrastren a Jagath (no binario), que existe entre ellos. Hay reglas para este juego. Aunque Paramatma definió las reglas, Él participa en el juego de acuerdo con las mismas reglas que Él estableció, aunque Él es el creador de todo y superior a todo. Este juego, como otros, tiene un límite de tiempo. El límite de tiempo para el juego de Jagath es 1000 Yugas o 108 millones de años, similar a cómo el fútbol tiene un límite de tiempo de 90 minutos o el cricket tiene un límite de 50 overs. Las experiencias del juego se interrumpen durante la noche y continúan durante el día, y cada período de juego y descanso abarca 108 millones de rupias (1080 millones) de años.

  Paramatma, no específico e indefinido, inicialmente creó Prapancha (sin forma de vida) y posteriormente produjo los seres vivientes (Jagath). Paramatma creó a Prakruti y fue reconocido como Purusha. Creó Atma y dividió Prakruti, que concibe con la semilla de Atma, en cinco partes. Tal Prakruti se llama Pancha Bhutas o Prapancha. Paramatma dividió a Atma y Jeevatma en tres partes: Jeevatma (el forma de vida Jagath), Atma y Paramatma. Fue reconocido como Paramatma después de crear Jeevatmas y Atma. Llegó a ser reconocido como Paramatma junto a Armas (Jeevatma y Atma) y como Purusha junto a Prakruti. Hay una base para llamarlo Purusha cuando hay Prakruti y Paramatma cuando hay almas presentes. Si Prakruti y Armas no existen, no es posible definirlo. La forma de vida Jagath nació de Prakruti y Purusha. Paramatma planeó que la madre y el padre en Jagath tuvieran los atributos de Prakruti y Purusha.

  Prakruti posee características opuestas a las de Purusha. Sin embargo, Jagath consta de atributos tanto de Prakruti como de Purusha. La forma de vida Jagath encarna tanto Jeevatma y Atmas relacionados con Paramatma, como también cuerpos y gunas relacionados con Prakruti. La creencia en la existencia de Dios se alinea con Atma, mientras que la visión opuesta de que Dios no existe se alinea con Prakruti. Los seres humanos en Jagath exhiben características tanto de Prakruti como de Purusha. Para simbolizar los rasgos de Prakruti y Purusha, los cuerpos de las mujeres fueron creados para parecerse a Prakruti, mientras que los cuerpos de los hombres fueron diseñados para representar a Paramatma. También se crearon individuos no binarios para simbolizar a Jagath, lo que indica que Jagath existe además de Prakruti y Paramatma. Mujeres, hombres e individuos no binarios simbolizan Prakruti, Paramatma y el Jagath viviente. Prakruti = Mujer, Jagath = No binario y Paramatma = Purusha (Masculino). Dios dio a conocer Su creación creando mujeres para que se parecieran a Prakruti, individuos no binarios para simbolizar a Jagath y hombres para representar a Paramatma. Dios trajo niños al mundo a través de la unión de hombres y mujeres para ilustrar que el Jagath viviente nace de Atma y Prakruti. La madre, el padre y la descendencia visibles ilustran cómo ocurrió inicialmente la creación. Muchas personas, a pesar de su inteligencia, a menudo no contemplan por qué los hombres se diferencian de las mujeres y por qué nace descendencia tanto de hombres como de mujeres. Para comprender verdaderamente la espiritualidad, es esencial comprender los conceptos básicos del <b>Secreto de la Creación En</b>educación espiritual.

  Es importante entender que el juego entre Dios y Prakruti es de naturaleza amistosa. Prakruti y Paramatma participan en un suave tira y afloja, cada uno intentando atraer a Jeevatma a sus respectivos lados en este juego. El deber de Paramatma es impartir sabiduría a Jeevatma, guiándonos hacia Él. Por el contrario, Prakruti, en la forma de Maya con su arma de gunas, mantiene ocupados a los seres humanos, impidiéndoles contemplar a Dios. Prakruti atrapa a los individuos en sus actividades diarias, desviando toda su atención hacia actividades mundanas e impidiéndoles volverse hacia Dios a través de la influencia del deseo y los gunas asociados. El juego más grandioso entre Paramatma y Prakruti permanece sin nombre. En la forma de maya, Prakruti sutilmente atrae a todos hacia su lado, a menudo sin que ellos se den cuenta. Si alguien dentro de Jagath piensa en Dios y busca conocimiento acerca de Él, maya (Prakruti) tiende a centrarse en él y atraparlo. Maya (Satanás) parece más fuerte que Dios en esta lucha continua entre Dios y Satanás. Actualmente, cuenta con la lealtad del 99 por ciento de los seres humanos. En tal escenario, cuando la derrota de Dios pueda parecer inevitable, Paramatma debería esforzarse por prevalecer.

  Como parte de sus esfuerzos, Paramatma se encarnará como un ser humano entre la humanidad y hablará de sí mismo, con el objetivo de guiar a la gente hacia Él. Como se mencionó anteriormente, no existe un verdadero adversario y cada lado emplea su propia estrategia. Tanto Satán (Maya) y Dios coexisten dentro de cada ser humano, pero los individuos a menudo no son conscientes de su presencia y luchan por reconocer a Dios o Maya. Los humanos frecuentemente ignoran de qué lado están. Dios se esfuerza por liberar a los individuos atrapados por la influencia de maya y, en esta búsqueda, Paramatma nace en la Tierra como el Hijo de Dios. Sin embargo, siguiendo las reglas del juego cósmico, Él no debe revelar su identidad como Hijo de Dios. Así, cuando Dios encarna como ser humano, habla de Paramatma como de un individuo común y corriente. Paramatma imparte Su sabiduría y restablece Su dharma. Por el contrario, maya formula estrategias para representar al Hijo de Dios como ignorante y tonto. Crea Gurús y Swamijis que promueven los adharmas de maya como dharmas y presentan las enseñanzas del Hijo de Dios como adharmas. Maya compite con el Hijo de Dios a través de estos Gurús y Swamijis, lo que lleva a los humanos a abrazar sus enseñanzas en lugar de la sabiduría de Dios. Maya emplea términos como Paramatma, moksha, sabiduría y práctica para transmitir sus adharmas a los humanos, lo que dificulta distinguir el dharma de Dios de los adharmas de Satanás.

  Si alguien busca encontrar a Dios, maya lo vuelve incapaz de distinguir entre dharmas y adharmas, lo que lo lleva a creer cualquier cosa que se le presente. Es una regla fundamental del juego cósmico que tanto Satanás (maya) como Dios no deben revelar abiertamente su presencia en la Tierra. Cuando Paramatma encarna como Bhagavan en la Tierra, se abstiene de declarar: "Yo soy Paramatma". Por la misma regla, cuando Prakruti nace en la Tierra, no proclama: "Yo soy Maya". Sin embargo, cuando maya encarna, puede afirmar: "Yo soy Bhagavan". Siguiendo este principio, maya (Satanás) se proclama a sí mismo como Bhagavan (el Hijo de Dios), realiza numerosos milagros y se manifiesta en la forma de varios Swamijis. Cuando Paramatma nace en un lugar de la Tierra, Prakruti crea muchos individuos que llevan el nombre de Bhagavan. El nacimiento de Paramatma tiene como único objetivo impartir sus dharmas sin ser reconocido abiertamente como Bhagavan. Al mismo tiempo, maya genera muchos con el nombre de Bhagavan incluso antes del nacimiento de Paramatma. Maya hace que los humanos escuchen sus palabras y les impide escuchar las palabras de Bhagavan genuino. En este juego cósmico, maya ejerce su influencia y Dios cumple Su propósito.

  Mientras maya continuamente toma la forma de gunas dentro del cuerpo humano, Dios existe en la forma de Atma dentro del cuerpo. Anteriormente mencionamos que maya y Paramatma encarnaría como seres humanos en la Tierra. Es importante entender los cuerpos que asumirán. Maya encarna en un cuerpo masculino como Bhagavan y en un cuerpo femenino como Bhagavati. Paramatma encarna constantemente en un cuerpo masculino. Prakruti, como mujer, normalmente viste un cuerpo femenino, pero también puede manifestarse en un cuerpo masculino para engañar a los demás. Puede resultar difícil discernir al verdadero Bhagavan en las formas de Bhagavati y Bhagavan. Es crucial señalar que Bhagavan siempre está encarnado como un hombre. El Padre Celestial, Paramatma, se encarnó como Jesús en forma masculina. Su nacimiento se produjo a través de un útero virgen sin la participación de un padre humano. Paramatma se encarna en la Tierra cuando surge la necesidad, con <b>Jesús</b> siendo una de esas encarnaciones. También se espera que el Espíritu Santo se encarnó en la Tierra en el futuro. Hemos escrito esta escritura para informarles que no importa cuántas veces nazca el mismo Paramatma, Él revelará los mismos dharmas. El propósito de esta escritura es ayudar a los lectores a comprender las palabras esenciales de Jesús en el Nuevo Testamento de la Biblia y compararlas con las enseñanzas del Bhagavad-Gita. Al leer esto, esperamos que llegues a conocer la grandeza de Jesús y el espíritu interior de Krishna.
</div></div>
<ion-row><ion-col class="ion-text-center">
<b>Por  <br><br>
El único gurú de las tres religiones, creador del teorema de Thraitha, autor de cien escrituras divinas </b><br><br>
<span style="font-size:20px;font-weight:bold">Sri. Sri. Sri Acharya Prabodhananda Yogeeshwarulu</span>
</ion-col></ion-row>
</span>`,

},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 2,
verse: `<b>(1) El Evangelio de Mateo, capítulo 3, verso 7</b>`,
meaning: `<b>
(3:7) ¡Cría de víboras! ¿Quién os advirtió que huyáis de la ira venidera?
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En este verso,<b>'cría de víboras ‘</b>es un término nuevo. El término se utilizó para referirse a los humanos. Sin embargo, existen dudas sobre si los humanos pueden ser considerados descendientes de serpientes. Esto plantea una pregunta para cualquiera que lea este versículo. En este versículo, también necesitamos profundizar en el significado detallado de <b>‘ira venidera’.</b> Además, otra palabra en este versículo es <b>¿Quién te lo advirtió?</b> Esta frase se refiere a un tiempo pasado, y debemos buscar entender quién advirtió a los humanos en el pasado. Hay tres preguntas a las que necesitamos respuestas en este versículo.

  Un pájaro es enemigo de una serpiente. El pájaro puede matar a la serpiente. La serpiente inicialmente silba para asustar al pájaro, pero el pájaro no tiene miedo. El pájaro puede comerse a la serpiente como alimento. Esto es de conocimiento común. La serpiente y el pájaro se utilizan como metáforas en el contexto de la educación espiritual. La paloma entre las aves se compara con Atma, mientras que la serpiente se compara con maya. Aunque el versículo no menciona al pájaro, sí menciona a la serpiente. Cuando se compara la serpiente con maya (Satanás), “generación de víboras” puede entenderse como “descendiente de Maya”. Para ser más precisos, se utiliza “generación de víboras” en lugar de “seres humanos con Maya”.'

  Maya se refiere a la composición de gunas. A aquellos que están constantemente preocupados por los gunas y no muestran preocupación por Dios se les conoce como la “cría de víboras”. Se sabe que la ira inminente aguarda a aquellos que están enredados en maya. <b>La ira, en este contexto, significa algo terrible o difícil de soportar.</b> El término “ira venidera” sugiere que no existe actualmente pero que se manifestará en el futuro. Lo que los humanos no poseen inicialmente pero que adquirirán gracias a Maya (gunas) son todo tipo de karma bueno (punya) y malo (pecado). Las experiencias resultantes del mal karma pueden ser bastante terribles. Por lo tanto, <b>La “ira venidera” alude al karma que se manifestará en la vida humana...</b> Todo ser humano que nace acumula karma, por eso el verso <b>¡Cría de víboras! ¿Quién os advirtió que huyáis de la ira venidera?</b> Sirve como advertencia para los humanos.

  Cuando el versículo menciona “¿quién os advirtió?”, sugiere que alguien en el pasado proporcionó a los humanos sabiduría para escapar del karma. Este verso implica que hubo un individuo que contó una idea en el pasado para ayudar a las personas a evadir el karma inminente. En consecuencia, es importante que los humanos descubran la identidad de esta persona, comprendan lo que dijo y determinen cuándo transmitió esta sabiduría. Recordar acontecimientos históricos del pasado puede ser una tarea desafiante. Si no se conoce la respuesta a la pregunta inicial planteada en el primer capítulo de los cuatro evangelios, no se entenderá el asunto de la segunda divina escritura. Posteriormente, los siguientes versículos de la segunda divina escritura no se pueden entender. Por tanto, es fundamental discernir la respuesta a la pregunta inicial. Antes de descubrir la verdad a este respecto, exploremos el significado de esta segunda escritura divina. La sabiduría que Dios impartió se convirtió en escritura hace aproximadamente cinco mil años. Esta escritura consta de 18 capítulos y está situada en medio de los 18 parvas del Mahabharata. Estos dieciocho capítulos se conocen como la primera escritura divina. Al principio de la creación, Dios comunicó sabiduría a través del Cielo. Esta sabiduría fue conocida como<b>' Japara</b> sabiduría” en ese momento. En telugu,<b>'Para significa</b> separado o diferente, mientras que <b>Y' significa</b> nacido. Por lo tanto, "Japara" se traduce como "separado o distinto del nacimiento". Se ganó este nombre porque Dios nunca está sujeto al nacimiento. La sabiduría japara inicialmente se convirtió en la primera escritura divina y también se convirtió en la segunda escritura divina después de tres mil años, es decir, hace aproximadamente dos mil años a partir de ahora. Hace aproximadamente 1.400 años, la misma sabiduría fue transcrita como la tercera escritura divina. Ahora estamos interpretando la frase de la segunda escritura divina.

  Cuando se plantea la pregunta “¿Quién os advirtió?”, debemos hablar de aquel que dijo sabiduría en el pasado. Según esto, quien dijo sabiduría en la primera escritura divina es quien advirtió primero a los humanos. Hay una razón para conocer a quien lo contó en el pasado. Dado que sólo Dios puede expresar Su sabiduría y Dios es el único, el mismo Dios enseña Su sabiduría cuando y donde sea necesario. Por eso, el mismo que contó antes volvió a contarlo en versos. Por lo tanto, si queremos saber quién dijo la sabiduría en la segunda escritura divina, primero debemos conocer a quién dijo la sabiduría en el pasado. De ahí la necesidad de plantearse la pregunta: ¿quién os advirtió? Si puedes descubrir quién lo dijo en el pasado, tendrás la oportunidad de reconocer quién lo dice ahora. Le animamos a que se acerque a esta escritura con la <b>creencia</b> que el individuo que comunicó la primera escritura divina es también la fuente de la segunda escritura divina.

  Antes de leer la segunda escritura divina, necesitamos saber qué versículos dijo Dios, quien dijo la primera escritura divina, en la escritura bíblica. La Biblia comprende un total de 66 capítulos, de los cuales cuatro contienen versículos hablados directamente por Dios. Los otros 62 capítulos tienen versos de otros jnanis. Estos capítulos se conocen como 1) El Evangelio de Mateo, 2) El Evangelio de Marcos, 3) El Evangelio de Lucas y 4) El Evangelio de Juan. Estos cuatro relatos de los Evangelios están situados en la parte central de la Biblia, dividiéndola efectivamente en tres secciones principales. Los 39 capítulos iniciales forman la primera parte, seguidos por los cuatro evangelios como segunda parte, y los 23 capítulos restantes constituyen la tercera parte. De particular interés es la designación de estos cuatro capítulos como <b>Evangelios</b>, enfatizando su significado ya que contienen las palabras de Jesús durante su vida terrenal.
</div></div>
</span>`
},

{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 3,
verse: `<b>2)	El Evangelio de Mateo, capítulo 3, versículo 11</b>`,
meaning: ` <b>
(3:11) Yo os bautizo con agua para cambiar manas (mente). Pero detrás de mí viene uno que es más poderoso que yo, cuyas sandalias yo no soy digno de llevar. Él os bautizará en Espíritu Santo y fuego.
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Este verso contiene las palabras <b>‘cambio de mana y bautizar,'</b>así como “con agua y con fuego”. Para comprender plenamente el significado de este versículo, es esencial comprender estas cuatro palabras. Si alguna de estas palabras no queda clara, la esencia del verso sigue siendo difícil de alcanzar. Entonces, profundicemos en el significado de estas cuatro palabras. La primera palabra es "cambio de manas". Manas (mente) en nuestro cuerpo retiene y recuerda lo que hemos aprendido y almacenado. Aquí, “cambio de manas” se refiere a la alteración de manas. Manas se encarga de recordar los acontecimientos de nuestra vida. Cuando el primer manas sufre un cambio y el segundo manas ocupa su lugar, todos los recuerdos del primer manas se borran. El segundo manas no recuerda al primero. El primer manas deja de existir con la muerte y el segundo manas emerge con el nacimiento. Cuando el primer manas es reemplazado por el segundo manas, se denomina "cambio de manas". Esta transición natural de las manos ocurre con cada ciclo de nacimiento y muerte. El bautismo es innecesario para el "cambio de manas" porque ocurre naturalmente con el proceso de muerte y renacimiento.

  Cuando una persona muere y renace, se deshace de su antiguo cuerpo y adquiere uno nuevo. Esta transformación física que se produce se conoce como nacimiento. Es importante reconocer que los humanos poseemos dos tipos distintos de cuerpos: el visible (físico) y el invisible (sutil). Así como el cuerpo viejo y visible es reemplazado por uno nuevo en el proceso de nacimiento, de manera similar, cuando el cuerpo sutil e invisible sufre un cambio, los hindúes (Hindúes) se refieren a él como <b>Upadesa</b>, mientras que los cristianos lo llaman <b>bautismo.</b>’ Como se menciona en este versículo, el bautismo significa la transformación del mansa invisible. Al igual que el viejo manas, cargado de recuerdos, se desvanece con la muerte y un nuevo manas emerge en el nacimiento, durante el bautismo el manas sufre un cambio profundo. Deja de recordar recuerdos mundanos e ignorantes y comienza a <b>recordar la sabiduría y los recuerdos relacionados con lo divino.</b>El bautismo es el proceso a través del cual un individuo, guiado por las enseñanzas de un <b>Maestro,</b> logra un cambio de maneras en la vida. En esta transformación, un manas ignorante es reemplazado por uno que está en sintonía con la sabiduría.

  <b>Cambio de Manas = Pasar de la ignorancia a la sabiduría. Bautismo = Obtener upadesa del Gurú.</b>

  Juan Bautista ofreció 'upadesa' con agua, declarando: "Yo os bautizo con agua, pero después vendrá alguien más poderoso que yo, que os bautizará con Espíritu Santo y fuego". Anteriormente hemos explorado en detalle los conceptos de “cambio de manas” y “bautismo”. Ahora, profundicemos en los significados de "agua" y "fuego (lo opuesto al agua)". Obtenemos el bautismo del Gurú, pero hay dos tipos de Gurús. Algunos poseen el poder de la sabiduría (Gnana Shakti), mientras que otros no. Muchos Gurús comúnmente realizan bautismos o 'upadesa' usando agua. Algunos pueden usar leche, los cuales son líquidos visibles, mientras que otros usan ceniza sagrada o humo de incienso como parte del proceso. Además, durante el 'upadesa', un Guru imparte un mantra, una palabra o una imagen, y existen numerosos 'upadesas' de este tipo, ofrecidos por varios Gurús. John era uno de estos Gurús y admitió abiertamente su método, diciendo: "Yo os bautizo con agua". Sin embargo, él también Predijo la llegada de alguien mayor, que bautizaría con Espíritu Santo y fuego. Hemos definido el "bautismo" como el camino hacia la transformación de manas de la ignorancia a la sabiduría. Cuando esta transformación ocurre a través del bautismo, tiene el poder de limpiar todos los pecados de una persona. Guru da el fuego divino apropiado a través de su bautismo para quemar los pecados. El gurú debe poseer la divinidad del fuego. El primer verso del capítulo de "Atma Samyama Yoga" en el Bhagavad-Gita, la primera escritura divina, enfatiza la necesidad de este fuego divino, afirmando, "cha yogee cha na ni ragnir nachaakriyah", que significa<b>“Aquel que carece de este fuego divino (Jnana Shakti) y deja de actuar no es un yogui (Gurú)”.</b>

  Un yogui genuino (Guru) no es aquel que se abstiene de actuar sino que se caracteriza por la presencia de fuego interior, que simboliza la <b>sabiduría.</b> Este <b>poder</b> es lo que el versículo menciona como “bautismo con fuego”. Aquí, “fuego” significa el <b>poder divino (Jnana Shakti),</b> que no es visible a simple vista. Cuando una persona recibe este fuego divino de su Gurú, enciende un poder transformador en su interior, capaz de quemar su karma acumulado. El fuego de la sabiduría (Jnana Shakti) otorgado al individuo bautizado comienza a destruir su karma. Mientras que un gurú como Juan administraba el bautismo con el propósito de “cambiar manías”, él <b>no poseía el poder de la sabiduría en</b> su bautismo se requería quemar el karma. Por eso, afirmó: “Sólo puedo bautizaron con agua”. Juan explicó al pueblo que su bautismo, <b>realizado con agua,</b> no quemaría su karma. En cambio, anticipó que el que vendría después de él administraría un bautismo capaz de lograrlo.

<b>Bautismo con agua = Upadesa que no quema karma

Bautismo con fuego = Upadesa que quema karma</b>
</div></div>
</span>`,
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 4,
verse: `<b>(3) El Evangelio de Mateo, capítulo 3, versículo 12.</b>`,
meaning: `<b>
(3:12) Su bieldo está en Su mano, y Él limpiará Su era, juntará Su trigo en el granero y quemará la paja en fuego inextinguible.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
  <ion-row><ion-col class="ion-text-center">
  <img src="assets/img/chaata.png"/><br>
  <img src="assets/img/kallam.png"/>
  </ion-col></ion-row>
<div class="poem"><div class="poemtext">
  Juan, un reconocido gurú de su época, fue quien pronunció el versículo en cuestión. Durante esa época, impartió 'upadesa' (bautismo) a muchas personas. Juan era un gran 'gnani (sabio)' y había previsto la llegada de Jesús. Bautizó a Jesucristo (Bhagavan), el Hijo de Dios. También fue el gurú de Jesús. Aunque Juan era un gurú famoso y bautizó a muchas personas en ese momento, era humilde. Antes de bautizar a Jesús, mostró humildad al decir: “El que viene detrás de mí, cuyo calzado no soy digno de llevar, es más poderoso que yo”. Cuando Jesús se acercó a él para bautizarlo, Juan reconoció el mayor poder espiritual de Jesús y dijo: <b>“Deberías bautizarme. ¿Vienes a verme para el bautismo?</b> Estas palabras fueron dichas por Juan cuando previó la llegada del Señor. El verso también contiene referencias a una <b>bandeja para aventar, trigo</b>, y un <b>fuego inextinguible.</b> Algunos podrían preguntarse sobre el significado de estos elementos, ya que parecen algo común. Si el trigo se recoge con la bandeja de aventar, se tritura y se quema al fuego, se convierte en pan. Todos estamos mirando la bandeja de aventar, el trigo y el fuego en el horno. Algunos se preguntarán qué tiene de bueno esta frase. Este versículo es parte de la segunda escritura divina, y cada versículo de esta escritura transmite sabiduría divina. Cuando se lo analiza con sabiduría y perspicacia espiritual, este versículo tiene un significado especial y enfatiza la grandeza de Jesucristo.

  En la antigüedad, era costumbre colocar a los recién nacidos en una bandeja (canasta) para aventar. Tan pronto como nacía un bebé, se vertía arroz en la bandeja para aventar, se aplanan y se acostaba al bebé sobre ella según la costumbre. Esta práctica prevalecía en todos los sectores de la sociedad, desde los pobres hasta los ricos, desde los conocedores hasta los ignorantes. La creencia era que Brahma, la deidad creadora, inscribirá el futuro del niño, a menudo denominado' <b>escritura de karma' o 'Brahma Vrata'</b> en frente del bebé durante los dos minutos que pasó en la bandeja de aventamiento. Independientemente de las creencias personales, las palabras de Juan, particularmente en el contexto de Jesús, son ciertas. Juan usó una analogía, comparando las obras con el trigo. El trigo, como alimento básico, sustenta la vida, pero se agota a medida que lo consumimos. De manera similar, Jeevatma experimenta el karma en forma de acciones. A medida que pasamos por experiencias kármicas, el "karma" de nuestras acciones disminuye. La escritura del karma, también conocida como escritura en la frente o juicio de Dios, significa que el karma que experimentamos está inscrito en nuestro cuerpo y nuestras experiencias de vida reflejan esta inscripción. Juan comparó las obras influenciadas por nuestro karma con el trigo, y la “bandeja de aventado” era simbólicamente la cabeza donde se almacenaban estas obras. Así como cosechamos granos de una bandeja de aventamiento Para preparar la comida, nuestra cabeza se describe como una “bandeja de aventamiento” porque almacena el karma que experimentamos.

  El karma está inscrito en la cabeza de un ser humano sin que éste se dé cuenta. Como resultado, nadie puede predecir el futuro. Todo ser humano está atado por el karma y no puede escapar de su influencia. Si bien todos los humanos parecen ser meros títeres manipulados por el karma, el Espíritu Santo o Paramatma permanece fuera del control del karma. Cuando Dios elige encarnar como humano, crea Su propio karma escribiéndose en Su propia cabeza, viniendo así a la Tierra. Él no posee karma inherente, sino que deliberadamente es autor de Su propio destino para impartir sabiduría a la humanidad. Respecto a Dios, quien se hace cargo de Su propio karma, Juan expresó:<b>"Su aventador está en su mano" .Nadie</b> más en el mundo posee tal control sobre su karma. En contraste con las limitaciones humanas, Dios moldea su propio karma y desciende como ser humano a la Tierra para compartir Su sabiduría. Es esencial entender que la vida de Jesús, desde su nacimiento hasta su muerte, fue consecuencia del karma autoconstruido. Su nacimiento en un humilde granjero, su sufrimiento y su crucifixión fueron todos productos de su destino autocreado. Ninguna fuerza externa podría provocar su nacimiento o atormentarlo sin Su consentimiento. Él determinó el curso de Su existencia terrenal, de hecho sosteniendo Su propia bandeja para aventar.

  Toda la gente corriente acumula nuevo karma por cada acto que realiza. Cada acción en la Tierra genera nuevo karma. Así como el humo está estrechamente relacionado con el fuego, el karma está intrínsecamente asociado con los hechos. Es un principio fundamental de Prakruti que cada acción conlleva consecuencias kármicas. Cuando Dios se encarna y aparece como el Hijo de Dios (Bhagavan), cada acción que emprende también genera nuevo karma. Los individuos comunes y corrientes no pueden escapar del karma inminente. Sin embargo, Bhagavan Jesús posee todo el fuego de la sabiduría (Jnana Shakti), lo que le permite quemar el karma que surge naturalmente de sus acciones. Cristo, el gnani consumado, siempre tiene pleno poder de sabiduría. Todo karma se consume en el fuego insaciable de la sabiduría. Las acciones están intrínsecamente conectadas con el karma, de la misma manera que los granos están vinculados con la paja. Juan expresó esto como,<b>"Quema la paja con fuego inextinguible" .Lo que</b> significa cómo Cristo erradica el karma asociado con las obras a través de Su sabiduría. Jesús se purifica del polvo de las gunas e incinera el karma entrelazado con Sus acciones. Juan comparó el cuerpo de Jesús con una era, simbolizando Su eliminación de la influencia de los gunas, tal como uno limpia una era. Él equipara las obras con el trigo, el karma que se origina de esas obras con la paja, y el fuego que consume el karma con un fuego inextinguible. Juan resumió la grandeza de Jesús en una sola frase, pero, lamentablemente, no hemos comprendido plenamente su significado.

  El versículo puede parecer sencillo, pero contiene significados profundos y sutiles. Los cuatro evangelios son ricos en versículos de similar profundidad. Debido a mi limitada sabiduría, no he proporcionado explicaciones para los 66 capítulos de la Biblia, sino que me he centrado en descripciones de los cuatro evangelios cruciales, y rara vez toco otras secciones.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 5,
verse: `<b>(4) El Evangelio de Mateo, capítulo 3, versículos 16 y 17 .</b>`,
meaning: `
<b>
(3:16) Tan pronto como Jesús fue bautizado, subió del agua. En ese momento se abrió el cielo y vio al Espíritu de Dios descender como paloma y posarse sobre él.
<br><br>
(3:17) Y una voz del cielo dijo: Éste es mi hijo amado; con él estoy Muy contento.
</b>
`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Juan bautizó a Jesús con agua. El bautismo también se conoce como "upadesa". En telugu, "upadesa" significa un país adyacente al suyo. En otras palabras, es sinónimo de país vecino. Un vecino reside en un país vecino. Hay un país vecino dentro de tu cuerpo, y dentro de ese país vecino de tu cuerpo reside un vecino. Todo ser humano tiene un país vecino y un vecino, aunque estas entidades no sean visibles en un ser humano. El Gurú revela el país vecino invisible durante el bautismo o 'upadesa'. Juan bautizó a Jesús con agua, y no hay fuego involucrado en este 'upadesa'. Por lo tanto, pertenece al nombre y carece de país vecino y vecino. Sin embargo, el proceso de upadesa debe realizarse de esta manera. Por eso Jesús dijo en el versículo 3:15,<b> “Que así sea ahora; es apropiado que hagamos esto para cumplir toda justicia (sabiduría)”</b>.

  Aunque Jesús recibió una espada con agua, estaba consciente del país vecino dentro de su cuerpo. Podía ver todo el tiempo tanto el mundo exterior visible como el país vecino invisible. Por lo tanto, se consideraba upadesa genuino, aunque el upadesa dado por Juan se refería únicamente al nombre. Jesús fue bautizado después de vivir treinta años como un Jeevatma ordinario. A partir de ese momento, comenzó a hablar sobre asuntos divinos en forma de sabiduría, no como un Jeevatma, sino como Atma. Para demostrar que Jesús, como Atma, transmitía la sabiduría de Paramatma, Atma descendió como una paloma y aterrizó sobre él inmediatamente después de que emergiera del agua después de Su bautismo. Además, Paramatma (el Espíritu Santo) declaró, <b>“Éste es mi hijo, a quien amo; Con él estoy muy contento”.</b> El Espíritu Santo (Dios) afirmó que Atma era Su amado Hijo y expresó su gozo en Su amado Hijo, Jesús. Con esto, se hace evidente que el Espíritu Santo es el Padre y Atma es el Hijo conocido como Jesús. Todo esto indica que el Espíritu Santo (Paramatma) no apareció como Atma sino que vivió en este mundo como un hombre común y corriente, apareciendo como un Jeevatma. No dije esto para alabar a los cristianos ni promover el cristianismo. Estoy compartiendo con ustedes lo que creo que es la verdad absoluta sobre cómo Dios se manifestó en la Tierra.
  </div></div>
</span>`,
},

{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 6,
verse: `<b>5)	El Evangelio de Mateo, capítulo 4, verso 10.`,
meaning: ` <b>
(4:10) Jesús le dijo: “¡Aléjate de mí, Satanás! Porque escrito está: Adora al Señor Vuestro Dios y servidle sólo a Él”.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La palabra' <b>Satán'</b> se introduce en este versículo. En los versos anteriores, a veces se hace referencia a Satanás como un 'tentador (shodakudu en telugu)' y en otros casos como un 'difamador (pavadi en telugu)'. El término "apagado" significa alguien que juzga erróneamente y dice mentiras, mientras "shodakudu" implica alguien que busca el mal dentro de ti y, si existe, lo saca a la superficie. En esta frase se hace referencia a 'apagado' o 'shodakudu' como Satanás. Tanto 'apagado' como 'shoda kudu' pertenecen al idioma telugu, pero la palabra "Satanás" no es del telugu. La palabra "Satanás" aparece con frecuencia en esta escritura. En el ámbito de la educación espiritual, "Satanás" se usa indistintamente con<b>'Maya.’</b> Dado que Satán y maya son esencialmente lo mismo, las descripciones de maya también se pueden aplicar a Satán.

  En la primera escritura divina, maya se refiere a la esencia de gunas dentro de la cabeza. Respecto a Maya, la primera escritura divina dice, 'Guanayes mamá maaya donde "mamá maaya" significa "Maya es mía", como lo proclama Dios. Según esto, se dice que maya es la combinación de gunas. Dios es el creador de todas las cosas, incluida maya, y por eso Dios declaró que maya es suya. Maya es de género femenino, mientras que Dios y las dos almas, Atma y Jeevatma, que se separaron de Dios, son masculinos (un total de tres). Se puede decir que todo lo demás creado por Dios es femenino. Por lo tanto, se hace referencia a maya como femenina. No debemos considerar a maya como algo externo; más bien, los mayas que tentaron a Jesús estaban dentro de Su propia cabeza. Residiendo en Su cabeza, maya tentó a Jesús y discutió con él. De manera similar, los gunas dentro de la cabeza de cada persona actúan como su maya, tentándolos y debatiendo constantemente con ellos. Después del bautismo de Jesús, maya inicialmente lo tentó tres veces y Jesús respondió con su sabiduría en las tres ocasiones.

  Jesús dio un ejemplo en su vida que los humanos deberían emular. Cada vez que maya probó a Jesús, Él respondió con sabiduría. Por tanto, cada persona debería aprender a hacer lo mismo. Cuando Satanás le pidió a Jesús que se inclinara ante ella, Jesús le dio a Satanás (Maya) una respuesta apropiada. Jesús respondió a Satanás, diciendo:<b>“Adora al Señor tu Dios y sírvele sólo a Él”.</b> Jesús pronunció estas palabras, pero es crucial entender que fue el Atma dentro de Su cuerpo el que pronunció esas palabras. El Espíritu Santo, Paramatma, no se comunica directamente con nadie. En cambio, transmite Su sabiduría a través del Atma. Entonces, debemos reconocer que la sabiduría fue impartida por el propio Paramatma, aunque fue expresada por Atma dentro del cuerpo. En la tercera y última escritura divina, en 3:7, Dios declara: “La sabiduría de Dios no es conocida por nadie excepto por Dios”. Esto enfatiza que la sabiduría completa revelada por el Atma dentro del cuerpo es transmitida por Paramatma (Dios).

  Hoy en día existen doce religiones principales en el mundo y el hinduismo es único porque abarca todos los devatas que no están presentes en otras religiones. Dios creó tanto a los devas como a los seres humanos. Sin embargo, los humanos han abandonado a Dios y han recurrido a la adoración de devastas, sin comprender plenamente la sabiduría de Dios. Esta elección subraya que los humanos no dieron prioridad a las enseñanzas de Dios tal como se encuentran en sus Escrituras. Se puede considerar que aquellos que abandonan a Dios y adoran a los devatas están bajo la influencia de maya y prestan atención a las palabras de maya. En el gran esquema, hay esencialmente dos lados: el lado de Dios y el lado de maya. Sin embargo, en algunas religiones, la gente adora exclusivamente a Dios sin recurrir a otros devatas. Es principalmente dentro del hinduismo donde el culto a múltiples devotas, aparte de Dios, es más común. En consecuencia, resulta evidente que aquellos que adoran a los devatas se están alineando con la influencia de maya.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 7,
verse: `<b>6)	El Evangelio de Mateo, capítulo 5, verso 10.</b>`,
meaning: `<b>
(5:10) Bienaventurados los que son perseguidos por causa de la justicia (sabiduría), porque de ellos es el reino de paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El versículo incluye la palabra “justicia”, pero debe ser <b>“sabiduría" en lugar de "justicia”. </b>En el idioma hebreo, Jesús probablemente usó la palabra "sabiduría". Sin embargo, cuando se tradujo al inglés, la palabra equivalente al término hebreo no se representó con precisión y se usó "justicia" en lugar de "sabiduría". 'justicia' y 'sabiduría’. <b>La rectitud y la justicia son conceptos relacionados con asuntos mundanos, mientras que la sabiduría y el dharma son de naturaleza divina.</b> La rectitud y la justicia están asociadas con el karma, mientras que la sabiduría y el dharma tienen el poder de quemar el karma. Esta distinción subraya que la rectitud pertenece al reino material, mientras que la sabiduría es de naturaleza divina. En el mundo encontramos rectitud, corrupción, justicia e injusticia. La rectitud conduce al punya (buen karma), mientras que la corrupción resulta en pecado. De manera similar, la justicia produce punya, mientras que la injusticia genera pecado. A la luz de estas diferencias, está claro que el versículo en cuestión debería usar “sabiduría” en lugar de “justicia”.

  Aquellos que enfrentan persecución por su búsqueda de la sabiduría y aquellos que soportan dificultades en el camino de la sabiduría pueden considerarse bienaventurados. Esto se debe a que, a través del sufrimiento por causa de la sabiduría, pueden alcanzar moksham, que significa liberación de las ataduras del karma. Cuando una persona logra moksham, trasciende esta existencia mundana y entra en un estado diferente más allá del mundo. Se dice que tal individuo ha entrado en paraloka, que es un estado desprovisto de experiencias mundanas. Es importante señalar que no todo el mundo avanza hacia la sabiduría implica persecución o violencia. Algunas personas adquirirán sabiduría y alcanzarán moksham (paraloka) sin ningún obstáculo.
</dv></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 8,
verse: ` <b>7)	El Evangelio de Mateo, capítulo 5, versículo 17.</b>`,
meaning: ` <b>
(5:17) No penséis que he venido a abolir la Ley (Dharma Shastra) o los Profetas; No he venido a abolirlos sino a cumplirlos.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nadie puede condenar el Dharma Shastra. No se puede condenar. Ha existido desde los albores de la creación, y numerosos profetas y maestros impartieron su sabiduría. Cuando Paramatma (el Ser Supremo) desciende a la Tierra como Bhagavan, no sólo practica el Dharma Shastra sino que también hace que sus principios sean comprensibles para todos. Sin embargo, cuando Bhagavan, como Hijo de Dios, revela y practica los dharmas descritos en el Dharma Shastra, es posible que a algunos individuos no les parezcan dharmas. Esta discrepancia surge del hecho de que algunas personas creen erróneamente que los adharmas son dharmas. En consecuencia, los verdaderos dharmas pueden parecer adharmas cuando Bhagavan imparte Sus enseñanzas. Es por eso que Jesús declaró en el versículo anterior: <b>“No penséis que he venido a abolir la Ley (Dharma Shastra) sino a cumplirla".</b>

  La gente en el mundo ha caído en la influencia de maya (Satanás) y ha llegado a creer que los adharmas son dharmas. En consecuencia, se dedican a diversas formas de adoración, pensando que es una devoción sincera. Maya ha redirigido la comprensión de Dios de las personas hacia sí misma, llevándolas a creer que están progresando hacia Dios. En este proceso, los guía a practicar adharmas en lugar de dharmas, conduciendolos efectivamente en la dirección opuesta a la de Dios. En tal estado, incluso cuando Dios se encarna como humano y practica los verdaderos dharmas, esas acciones pueden parecer engañosas para aquellos influenciados por maya. Las personas pueden pensar erróneamente que lo que están haciendo es el verdadero dharma y que son creyentes genuinos. Podrían acusar a Dios, que ha venido como ser humano, de seguir a dharmas e incluso etiquetarlo de blasfemo. Cuando el Dios real vino a la Tierra como Jesús, lo que dijo y practicó fueron en verdad dharmas. Sin embargo, estos dharmas parecían contradecir las enseñanzas de eruditos, samis y gurús. Esta discrepancia es la razón por la que los principales sacerdotes, los escribas y Caifás se opusieron y denunciaron a Jesús. Por lo tanto, Jesús enfatizó en el versículo,<b> “No he venido a abolirlos sino a cumplirlos”.</b>
</div></div>
</span>  `
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 1,
pageNumber: 9,
verse: ` <b>8)	El Evangelio de Mateo, capítulo 5, versículo 18.</b>`,
meaning: `<b>(5:18) Porque en verdad os digo que hasta que el cielo y la tierra desaparezcan, ni la más pequeña letra, ni el más mínimo trazo de una pluma, desaparecerá de la Ley (Dharma Shastra) hasta que todo se cumpla.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En este versículo, el término <b>‘Dharma Shastra</b> ‘es único y algunos pueden preguntarse qué significa. Para abordar tales preguntas, es esencial comprender el concepto de shastra (ciencia), los diversos tipos de ciencias y el carácter distintivo de Dharma Shastra dentro del campo de las ciencias. Primero, si comprendemos el significado de la palabra "shastra", entenderemos shastra hasta cierto punto. La palabra <b>shastra se</b> deriva de la palabra telugu' <b>Sharanam'</b>,que transmite la idea de <b>“debe hacerse cumplir”.</b> En consecuencia, 'shastra' implica <b>“Todo lo que se dice debe suceder”</b>. Además, el término<b>'shapam'</b>se deriva de "shastra" y significa<b>"debe ser ejecutado"</b>.Así, las tres palabras <b>-sharanam' (estatuto), 'spam' (maldición) y 'shastra' (ciencia)</b> comparten el mismo significado subyacente. Shastra normalmente se clasifica en seis áreas de estudio distintas. Algunos pueden argumentar que las seis ciencias pueden agruparse en dos tipos, mientras que otros proponen tres categorías. En términos generales, los shastras se pueden considerar de dos tipos. En otras palabras, podemos describir los shastras como tres. Si los categorizamos en dos tipos, un conjunto está relacionado con asuntos mundanos y el otro se refiere a asuntos relacionados con Paramatma (el Ser Supremo). En la triple clasificación, cuatro shastras están asociados con preocupaciones mundanas, uno se relaciona únicamente con Paramatma y el otro cae en la categoría de estar parcialmente relacionado con Paramatma y parcialmente relacionado con asuntos mundanos.

  Los seis shastras son los siguientes: 1) Matemáticas, 2) Astronomía, 3) Química, 4) Física, 5) Astrología y 6) Brahma Vidya. De ellos, los primeros cuatro se ocupan de asuntos mundanos, mientras que el quinto, la Astrología, tiene conexiones tanto con asuntos mundanos como con lo divino. Alternativamente, si la Astrología también se considera dentro de la categoría de shastras mundanos, los primeros cinco shastras se clasifican como mundanos, mientras que Brahma Vidya Shastra permanece como la única ciencia relacionada con lo Divino. Hay un total de seis ciencias, siendo Brahma Vidya la más importante. Por eso se le conoce como Brahma Vidya shastra, donde "Brahma" significa grandeza. "Brahma" no es un nombre, sino un término utilizado para denotar la naturaleza más grande y suprema de Dios.<b>Como es una ciencia dedicada a la comprensión de Dios, se la llama apropiadamente Brahma Vidya shastra.</b>Dado que Brahma Vidya pertenece a la ciencia de Dios, lleva la designación "vidya". Las otras cinco ciencias mundanas, a saber, Matemáticas, Astronomía, La Química, la Física y la Astrología carecen de la vidasufijo en sus nombres. El término "vidya" está reservado para la ciencia relacionada con Dios. Algunos quizás se pregunten el porqué de esta distinción, y la respuesta es la siguiente.

  Las ciencias se pueden dividir en dos tipos: las relacionadas con el mundo y las relacionadas con Paramatma. Cualquiera puede comprender plenamente las cinco ciencias materiales. Sin embargo, Brahma Vidya, el más grande de todos, que revela los dharmas de Dios, es el único que incluye el término "vidya" en su nombre, lo que le valió el título de mayor Vidya shastra. La palabra "vidya" (educación) tiene su origen en el sonido <b>‘con,’</b> que significa saber. Vidya implica conocimiento que debe adquirirse. Un 'vidyarthi' (estudiante) es alguien que busca conocimiento, pidiendo algo que aún no posee y adquiriendolo de quienes poseen el conocimiento. Los estudiantes adquieren educación esencial de maestros expertos. Vidya se refiere al conocimiento que puede conocerse pero no comprenderse por completo. De manera similar, nadie puede pretender comprender plenamente el tema de Dios. Nadie puede afirmar que posee un conocimiento completo de Dios. Aprender acerca de Dios es una búsqueda que dura toda la vida y las personas continúan adquiriendo comprensión a lo largo de su vida. No hay nadie que pueda decir que ese es el límite y que lo sabe todo. Los humanos siempre seguirán aprendiendo sobre el asunto de Dios, pero nunca lo conocerán por completo. Por lo tanto, a la ciencia de Dios siempre se la denomina Vidya shastra, y perpetuamente es Brahma Vidya shastra. Por el contrario, uno puede comprender plenamente las otras cinco ciencias, sin dejar nada más por saber. Como resultado, el término "vidya" no se añade a sus nombres.

  Quien posee un conocimiento completo de Dios (Brahma) puede compartir esta sabiduría con los demás. Si un individuo carece de conocimiento de la sabiduría de Dios, ¿quién más puede transmitirla con confianza? Nuestra respuesta a esta pregunta es la siguiente: Sólo Dios mismo conoce plenamente su propia sabiduría. En consecuencia, Dios debe transmitir personalmente Su sabiduría. Sin embargo, Dios no se comunica directamente con nadie. En cambio, Dios, aunque no aparece como Dios, imparte su sabiduría tomando forma de hombre. Es importante señalar que, si bien Dios puede venir en forma humana, no es un ser humano. Bajo la apariencia de un hombre, Dios ha revelado Su sabiduría en su totalidad, presentándola como una ciencia con principios y ordenanzas prescritos. Por lo tanto, lo que Dios ha revelado se denomina Brahma Vidya shastra. Dios mismo comunicó el Brahma Vidya shastra, y corresponde a la humanidad comprenderlo. Cuando una persona obtiene una comprensión completa de Brahma Vidya, se libera del karma y puede unirse con Dios. En consecuencia, los individuos deben persistir en adquirir conocimiento de la ciencia de Dios hasta alcanzar moksha (liberación). Por lo tanto, se le llama acertadamente Brahma Vidya, ya que es la forma de educación más elevada del mundo.

  Los dharmas de Dios están articulados en el Brahma Vidya shastra, razón por la cual en las escrituras divinas se le conoce como Dharma Shastra. Dios inicialmente reveló Su shastra con ordenanzas en los albores de la creación. Posteriormente, surgieron tres escrituras divinas en diferentes momentos y en distintos lugares. Estas tres escrituras divinas pueden considerarse como los tres Dharma Shastras, y todos ellos contienen exclusivamente dharmas. En consecuencia, los tres Dharma Shastras comparten los mismos principios y están arraigados en los dharmas de Dios. Están unificados en su adhesión al Brahma Vidya y enseñan los dharmas de Dios. Como resultado, los tres Dharma Shastras se corroboran mutuamente y no se contradicen.<b>el primer divino La escritura divina se conoce como Bhagavad-Gita, la segunda escritura divina se llama Biblia y la tercera escritura divina (la escritura divina final) se llama Corán.</b> Si bien estas tres escrituras tienen nombres diferentes, transmiten los dharmas del mismo Dios.

  Siguiendo el Brahma Vidya shastra, tres profetas transmitieron la sabiduría de Dios, que posteriormente se convirtió en tres escrituras divinas distintas. Aunque estas tres escrituras divinas están separadas, todas exponen los mismos dharmas de Dios desde tres perspectivas diferentes. Dado que los dharmas presentados en estas escrituras se basan en la ciencia, se realizarán exactamente como se han declarado, como se afirma en el verso. <b>“Hasta que el cielo y la tierra desaparezcan”.</b> El Cielo y la Tierra del mundo exterior son eternos, tal como Dios los ha hecho así. Sin embargo, las contrapartes invisibles de la Tierra y el Cielo dentro del cuerpo humano son completamente perecederas. Por lo tanto, la frase “hasta que el cielo y la tierra desaparezcan” debe entenderse como “hasta que el cuerpo humano muera (desaparezca)”. Cuando un individuo busca la sabiduría de Dios, debe adherirse a todos los mandamientos (dharmas) de Dios. Sin practicar de todo corazón los dharmas de Dios, uno no puede alcanzar para ser loca. Como se describe en el Dharma Shastra, moksha (liberación) sólo se puede lograr cuando se hayan cumplido todos los dharmas. Incluso si una persona no practica ni siquiera un poco de lo que se describe en el Dharma Shastra, no alcanzará moksha. En lugar de simplemente sugerir, <b>“Incluso si una pequeña cosa no se sigue de los dharmas prescritos”,</b> se expresa<b>como "ni la letra más pequeña, ni el más mínimo trazo de pluma”.</b> Por lo tanto, es crucial seguir todos los aspectos del Dharma Shastra sin pasar por alto nada. Es importante saber que la letra y el trazo de bolígrafo mencionados no tienen relación con la escritura del libro.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 10,
verse: ` <b>9)	El Evangelio de Mateo, capítulo 5, versículo 19.</b>`,
meaning: `<b>
((5:19) Por lo tanto, cualquiera que deje de lado uno de estos mandamientos más pequeños y enseñe a otros en consecuencia será llamado el más pequeño en el reino de paraloka, pero cualquiera que practique y enseñe estos mandamientos será llamado grande en el reino de paraloka. </b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si bien hay algunos fenómenos fundamentales descritos en el Dharma Shastra, muchos están interconectados con ellos. Los dharmas de Dios también se conocen como <b>mandamientos</b>. Hay principalmente <b>dos, el más</b> esencial de los mandamientos de Dios, pero varios otros están relacionados con ellos. Cualquiera que transgrede incluso el más mínimo de estos mandamientos relacionados e impartir tales enseñanzas está actuando en contra de la justicia. Una persona no debe transgredir ninguno de los fenómenos, ya sean menores o significativos, según las instrucciones de Dios. Cada dharma, por pequeño que sea, debe practicarse diligentemente sin excepción. Sin embargo, algunos individuos, en lugar de adherirse incluso a los fenómenos más pequeños, se han desviado del camino de los fenómenos. No sólo han abrazado los adharmas sino que también han difundido dichas enseñanzas. A pesar de ser considerados Gurús por la sociedad, no han logrado comprender correctamente los mandamientos de Dios. Lamentablemente, han malinterpretado los dharmas de Dios como adharmas y se han convertido en defensores de los adharmas. Confunden a la gente al impartir tales enseñanzas, afirmando que están impartiendo verdadera sabiduría y los mandamientos genuinos de Dios. Incluso Aunque pueden ser considerados grandes Gurús a los ojos del mundo, a los ojos de Dios, se les considera los menos importantes.

  Aquellos que captan los dharmas con precisión los imparten como dharmas a aquellos interesados, incluso si no son Gurús bien conocidos. Algunas personas malinterpretan los dharmas de Dios como adharmas y, a su vez, los enseñan. En consecuencia, quienes enseñan a dharmas no pueden alcanzar el reino de paraloka. Los ignorantes nunca alcanzarán el reino de paraloka, ya que éste permanece permanentemente cerrado para ellos, considerándolos indignos. Incluso si alguien que comprende los mandamientos de Dios contenidos en las Escrituras no es considerado un Gurú, alcanzará un lugar importante en para loca cuando enseñe los dharmas que conoce. Un individuo así no sólo es conocido como un seguidor de los dharmas, sino que también tiene un gran respeto a los ojos de Dios. Un verdadero seguidor del Dharma es aquel que imparte meticulosamente hasta el más pequeño de los Dharmas de Dios con gran detalle.
</div></div>

</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 1,
pageNumber: 11,
verse: `<b>10)	El Evangelio de Mateo, capítulo 5, verso 20.</b> `,
meaning: ` <b>
      (5:20) Porque os digo que a menos que vuestra justicia supere la de los fariseos y los maestros de la ley, ciertamente no entraréis en el reino de paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En el mundo hay muchos fariseos, devotos y maestros. Es esencial poseer una mayor profundidad de sabiduría que ellos. Dios ha declarado que aquellos que poseen menos sabiduría que los fariseos, los devotos y los maestros no pueden entrar en para loca. Como sugiere el versículo, cuando poseas más sabiduría que los samis y los fariseos, quienes participan en yajás (sacrificios rituales) y actúan en contra de lo que Dios ha ordenado, fácilmente alcanzarás paraloka.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 12,
verse: `<b>11)	El Evangelio de Mateo, capítulo 5, versículo 28.</b> `,
meaning: `<b>
(5:28) Pero yo os digo que cualquiera que mira a una mujer para codiciarla, ya adulteró con ella en su corazón. </b>     `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Las acciones humanas se pueden clasificar en dos enfoques distintos: acciones externas que son observables y acciones internas que ocurren dentro de los pensamientos y sentimientos de una persona. Ambas dimensiones están presentes en cada individuo. En un enfoque, una persona realiza acciones relacionadas con sus gunas con pensamientos y emociones internos. En el otro enfoque, las mismas acciones se realizan mediante la interacción de gunas y el cuerpo físico. Las consecuencias de estas acciones resultan en punya (buen karma) o pecado (mal karma). Es importante señalar que existen dos tipos de acciones: físicas (visibles) y no físicas (invisibles).). <b>Al evaluar el carácter de una persona, la sociedad a menudo se basa en sus acciones físicas observables para determinar si se consideran buenas o malas. Sin embargo, resulta más difícil emitir tales juicios cuando las acciones de una persona son internas e involucran pensamientos y emociones, ya que no son fácilmente discernibles.</b> Es difícil determinar si una persona es buena o mala cuando no somos conscientes de sus acciones.

  De una persona en (el ego o sentido de uno mismo), ya sea presente en sus acciones físicas o pensamientos no físicos, juega un papel crucial en la generación de karma. El pecado o punya karma lo recibe un individuo debido a la presencia de ahí en su cuerpo. Si bien los órganos externos del cuerpo participan en las acciones físicas, es el funcionamiento de ahí el que influye en el resultado cárnico de esas acciones. Incluso cuando una persona no participa físicamente en una acción, su ahí, ubicado junto a buddhi (intelecto), atribuye karma basado en lo que ahí siente en los pensamientos de buddhi cuando se realiza la contemplación con la influencia de gunas. Si ahí no está activo, una persona no acumulará karma, incluso si está involucrada en un trabajo físico o no físico. Este concepto se refleja en la primera escritura divina, específicamente en el verso 17 de Moksha Sannyasa Yoga, que dice:<b> “Aunque una persona elimine a todos los seres del mundo sin la presencia de ahí en sus sentimientos, no incurrirá en pecado por el acto de matar y no será considerado un asesino”.</b> Esto enfatiza la importancia de ahí para determinar las consecuencias morales de las acciones de uno. Jesús también transmitió un mensaje similar cuando dijo:<b> “Incurrirás en pecado a través de tus pensamientos debido a ahí, incluso si no has realizado la acción físicamente”. </b>Esto revela la unidad en las enseñanzas de la primera y la segunda escritura divina, así como la coherencia de la sabiduría transmitida. Las acciones de una persona realizadas sin ahí se consideran como si no se hubieran realizado, y los pensamientos que involucran ahí se tratan como si la acción se hubiera ejecutado. Por lo tanto, la presencia de ahí dentro del cuerpo influye en la acumulación de punta y pecado por parte del Jeevatma. En consecuencia, se afirmó desde el comienzo de la creación que “realizar acciones sin ahí es Karma Yoga”, un concepto reiterado tanto en la primera como en la segunda escritura divina.</div></div>
</span>`
    },
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 13,
verse: `<b>12)	El Evangelio de Mateo, capítulo 5, versículos 29 y 30</b>`,
meaning: ` <b>
((5:29) Si tu ojo derecho te hace tropezar, sácatelo y tíralo. Más te vale perder una parte de tu cuerpo, que todo tu cuerpo sea arrojado al infierno.
<br><br>
(5:30) Y si tu mano derecha te hace tropezar, córtala y tirala. Es mejor que pierdas una parte de tu cuerpo que todo tu cuerpo vaya al infierno.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El versículo 29 menciona 'ojo,'y el versículo 30 menciona 'mano.'Tras un examen más detenido, resulta evidente que el cuerpo humano consta de dos tipos de partes del cuerpo: físicas o visibles y no físicas o sutiles. Hay un total de diez (10) partes del cuerpo físico y quince (15) partes del cuerpo sutil, lo que eleva la cuenta combinada a 25, incluido Jeevatma. Cada parte del cuerpo corresponde a una función distinta dentro del cuerpo. El cuerpo humano posee cinco jñanendriyas (órganos sensoriales) y cinco karmendriyas (órganos motores). Estos dos conjuntos de órganos permiten colectivamente acciones físicas. Los jñandendriyas, que incluyen el ojo, el oído, la nariz, la lengua y la piel, sirven como receptores que transmiten información externa a las facultades internas. De manera similar, hay cinco karmendriyas: manos, piernas, boca, ano y órganos sexuales. Luego, manas (mente) transmite esta información desde los sentidos al buddhi (intelecto). Mientras que los gnanendriyas sirven para transmitir información externa desde el entorno hacia el facultades internas, el buddhi interior transmite instrucciones a través de manas a los karmendriyas, quienes posteriormente llevan a cabo las acciones según las indicaciones de buddhi.

  Los humanos realizan acciones coordinadas por la interacción de gnanendriyas (órganos sensoriales) y karmendriyas (órganos motores). Notablemente, reloj entre los gnanendriyas y los manan entre los karmendriyas tienen particular importancia, razón por la cual ambos se mencionan en estos versos. Incluso si buddhi (intelecto) no dirige a los karmendriyas a realizar una tarea, el pecado aún puede atribuirse a una persona basándose en los pensamientos de buddhi cuando ahí (ego), estrechamente conectado con buddhi, está activo. Esto subraya el papel fundamental del ojo en el pecado potencial. Por ejemplo, cuando una persona mira a una mujer con pensamientos lujuriosos, puede incurrir en pecado debido a la influencia de ahí, incluso si no ha dañado físicamente a la otra persona. El ojo, de esta manera, crea la posibilidad de atribuir pecado a un individuo por acciones que tal vez nunca ocurran en el ámbito físico. Por lo tanto, el versículo nos aconseja ‘sacarnos el ojo y tirarlo’. Sin embargo, es esencial tener en cuenta que esto no debe tomarse literalmente, ya que quitarse físicamente el ojo no es el significado previsto del versículo. El versículo menciona específicamente “tu ojo derecho”, pero es importante comprender que tanto el ojo derecho como el izquierdo pueden conducir a resultados similares. El pecado puede surgir de ambos ojos. La sola mención del ojo derecho suscita la reflexión sobre el motivo de esta distinción.


</div></div>

<div class="container" style="color:black;font-size: 11px;">
          <img src="assets/img/gnanendriyalu.png"  style="width:100%;">
          <div class="io-jeeva">
            Jiva
          </div>
          <div class="io-mind">
            Mente
          </div>
          <div class="io-chittam">
            Chittam
          </div>
          <div class="io-intellect">
            Intellecto
          </div>
          <div class="io-ego">
            Ego
          </div>
          <div class="so-eye">
            Ojo
          </div>
          <div class="so-nose">
            Nariz
          </div>
          <div class="so-ear">
          Oído
          </div>
          <div class="so-tongue">
          Lengua
          </div>
          <div class="so-skin">
          Piel
          </div>
          <div class="ao-hands">
            Manos
          </div>
          <div class="ao-legs">
            Piernas
          </div>
          <div class="ao-mouth">
            Boca
          </div>
          <div class="ao-anus">
            Ano
          </div>
          <div class="ao-sex-organ">
          Órgano Sexual
          </div>
        </div>
  El cuerpo humano exhibe naturalmente diferencias entre su lado derecho e izquierdo, a menudo asociadas con fuerza y ​​debilidad. En el versículo mencionado se especifican ambas partes del cuerpo del lado derecho, es decir, el ojo derecho y la mano derecha. Otro punto esencial a considerar en este versículo es la declaración<b>"Es mejor que pierdas una parte de tu cuerpo que todo tu cuerpo sea arrojado al infierno”.</b> Es crucial reconocer que ni el ojo ni la mano, como partes externas del cuerpo, son fuentes directas del pecado. El principal impulsor del pecado es la presencia de ahí (ego) dentro del cuerpo. Esta perspectiva se alinea con las enseñanzas que se encuentran tanto en la primera como en la segunda escritura divina. Por lo tanto, resulta evidente que los componentes corporales externos no tienen participación directa en la adquisición o experiencia del pecado. <b>Es el sentimiento de ahí dentro del cuerpo lo que trae el pecado. El Jeeva que reside en el cuerpo experimenta el pecado.</b> La responsabilidad de la adquisición de karma recae en el sentimiento de ahí, y es deber de Jeeva experimentar el repercusiones       de          karma. Por lo tanto,    el         externo            ojo       (Gyanendra)    y          La mano (karmendriya) funciona sin tener en cuenta el karma.

  Algunos pueden preguntarse por qué Jesús aconsejó sacarse el ojo y cortarse la mano cuando no tienen relación con el karma. Nuestra respuesta es que cuando el ojo transmite información externa, llega al buddhi (intelecto). Posteriormente, buddhi procesa esta información de acuerdo con las gunas. Sin embargo, si el<b>aham (ego) es reprimido y desconectado</b>a partir de estas entradas sensoriales, evita que el pecado y el punya se manifiesten en las gunas que procesa el buddhi o en la vista percibida por el ojo. Al disociar el ahí interior de la información proporcionada por el ojo, uno puede prevenir eficazmente el pecado asociado con el ojo, de forma similar a eliminar el ojo mismo. De manera similar, cuando el ahí no está conectado con lo que se escucha, es como si le quitaran la oreja. Es fundamental reconocer que el pecado y el punya se originan no sólo en los ojos sino también en los otros cuatro sentidos. Dado el papel fundamental del ojo entre los gnanendriyas y el predominio natural del ojo derecho en la percepción visual, Jesús enfatizó "sacarse el ojo derecho" en el versículo. Si bien el versículo puede parecer sencillo, se debe entender su significado sutil.

  Asimismo, la mención de la mano derecha entre los karmendriyas tiene importancia. El karma no emana únicamente de la mano derecha sino también de las acciones realizadas por otros karmendriyas. El karma ocurre incluso cuando los gnanendriyas no realizan tareas físicas y se genera a través del funcionamiento de los karmendriyas. Cuando nos referimos a los cinco gnanendriyas, agrupamos los dos ojos como una entidad, del mismo modo que ambos oídos se cuentan como uno. Aunque hay dos fosas nasales, en conjunto se las trata como una sola nariz. Los componentes restantes consisten en la piel y la lengua. De manera similar, en los karmendriyas, las dos manos se consideran una, y lo mismo se aplica a las dos piernas. Los tres restantes son la boca, el ano y el órgano sexual y no están en pares. Dado que el ojo y la mano derechos son comparativamente más dominantes en estos órganos pares, el verso destaca el ojo y la mano derechos. El ojo derecho posee una visión superior y la mano derecha es más versátil para ejecutar tareas. En una interpretación más sutil del versículo, Jesús nos dijo que <b>suprimir ahí para evitar que el pecado surja de la vista del ojo y las acciones de la mano.</b> Sin embargo, es crucial comprender que eliminar el ojo derecho o la mano derecha no detiene el flujo de karma, ya que otros órganos corporales también pueden generar karma. Este versículo subraya la idea de que ahí es la fuente fundamental del pecado, enfatizando la necesidad de controlarlo. Los órganos del cuerpo no generan pecado, ni el cuerpo soporta la carga del pecado. Más bien, es el ahí el que acumula pecado dentro del cuerpo. Además, Jeevatma, un componente del cuerpo, experimenta karma bueno y malo. El cuerpo abarca cinco gnanendriyas, cinco karmendriyas, cinco vayas, cinco tanmatras y cinco antahkaranas, siendo el Jeevatma parte de los antahkaranas. Esto suma un total de veinticinco componentes, incluido el Jeevatma dentro de la estructura del cuerpo. En esencia, una comprensión profunda de los mecanismos del cuerpo puede conducir a una comprensión más profunda de los versículos de Jesús. Un verdadero gnani reconoce esta intrincada composición del cuerpo. Como lo expresó poéticamente un espiritista, cualquiera que carezca de ese conocimiento no debe ser considerado un gnani.

<b> <i>

Panchatatvamulanu panchikarinchaka

Manchi yatulamanna maatalanna

Kunchamandu gajamu gruddupettina chandambu

Akhila jivasanga aatmalinga.</i>

 </b>

  <b>Significado: -</b> El término sankhya se refiere al conocimiento integral de Pancha Bhutas, que incluye el Cielo, el Aire, el Fuego, el Agua y la Tierra. Este conocimiento abarca la comprensión de cómo se creó cada uno de estos elementos, cómo se dividieron en cinco componentes distintos y cómo estas veinticinco partes forman colectivamente los diversos órganos y componentes del cuerpo, tanto visibles como invisibles. Asumirse como un gnani (un conocedor o un individuo iluminado) sin poseer una comprensión profunda del Sankhya del cuerpo es similar a hacer una afirmación falsa. Equivale a afirmar que un elefante puso un huevo debajo de una canasta. En realidad, incluso si un elefante fuera atado firmemente con cadenas y colocado debajo de una canasta, no pondría huevos. Por lo tanto, la afirmación de que un elefante puso huevos debajo de una canasta es totalmente infundada. De manera similar, es erróneo que un individuo se declare gnani cuando carece de conocimiento de los intrincados detalles relacionados con los órganos del cuerpo. La verdadera sabiduría requiere una comprensión profunda de la composición del cuerpo, incluidas sus partes visibles e invisibles.

</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 14,
verse: `  <b>13)	El Evangelio de Mateo, capítulo 6, versículos 3 y 4.</b>`,
meaning: ` <b>
(6:3) Pero cuando hagas dharma, no dejes que tu mano izquierda sepa lo que está haciendo tu mano derecha.
<br><br>
(6:4) Para que vuestra ofrenda sea en secreto. Entonces tu padre, que ve lo que se hace en secreto, te recompensará.
</b>`,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Muchos predicadores han malinterpretado este versículo, sugiriendo que se refiere a la donación. En ciertos lugares de culto, incluso se sugiere que el dinero entregado para el servicio de Dios sea tan discreto que “la mano derecha no sepa lo que hace la mano izquierda”. Como resultado, las contribuciones a menudo se esconden o se envuelven en la mano antes de ser donadas. Sin embargo, es importante aclarar que este versículo no se trata de donación; se trata de dharma. Existe una diferencia significativa entre dharma y donación.<b>La donación implica dar a los demás, mientras que el dharma se refiere a los principios que uno práctica.</b> Para comprender verdaderamente cómo practicar el dharma, es esencial comprender lo que implican estos dharmas. En este versículo no se menciona la donación; más bien, enfatiza el dharma. Los dharmas de Dios son principalmente dos, como se describe en las escrituras divinas. El tercero es físico. También hay otros dharmas que están interconectados con estos tres dharmas primarios. Para llegar a Dios, una persona necesita centrarse principalmente en estos tres dharmas esenciales, mientras que otros dharmas giran en torno a aspectos de Dios. Estos tres dharmas centrales son las prácticas clave para alcanzar a Dios.

  Los tres dharmas, Brahma, Karma y Bhakti Yoga, son necesarios para alcanzar a Dios. Dos de ellos implican práctica interna con sentimientos o pensamientos, mientras que uno implica práctica externa. La práctica de los dos primeros dharmas no es reconocible para los demás. Sin embargo, cuando se trata del tercer dharma, existe la posibilidad de que la gente lo note. Otros. Es por eso que, en el versículo, Jesús se refiere a un “dharma” singular en lugar de “dharmas”. Él enfatiza que uno debe practicar un dharma que otros puedan notar con precaución y en secreto. Él transmite esto diciendo: <b>“Que no sepa tu mano izquierda lo que hace tu derecha”.</b> El mensaje subyacente es que cuando otros observan tu práctica del dharma, pueden malinterpretar o verse influenciados negativamente. Por eso, Jesús aconseja que al practicar el dharma se debe hacer discretamente y sin buscar el reconocimiento de los demás.
</div></div>
</span>`
},
{
  chapterName: "El evangelio de Mateo",
  chapterNumber: 2,
  pageNumber: 15,
  verse: `  <b>14)	El Evangelio de Mateo, capítulo 6, verso 6</b> `,
  meaning: `<b>
  (6:6) Pero cuando ores, entra en tu habitación, cierra la puerta y ora a tu Padre que está en secreto. Entonces tu padre, que ve lo que se hace en secreto, te recompensará.</b>`,
  pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Al orar a Dios, es esencial asegurarse de que sus oraciones están llenas de dharma. Las meras expresiones verbales sin dharma no constituyen una oración genuina y no te conectarán con Dios. Por lo tanto, cuando realizas una oración que otros pueden observar, Jesús te dice que vayas a una habitación privada, cierres la puerta y ofrezcas tus oraciones al Atma interior, la presencia divina dentro de ti. Atma, que está en el cuerpo, es el padre de los humanos. Una oración que otros puedan conocer debe realizarse de tal manera que nadie se dé cuenta. Al hacerlo, Atma, que está secretamente en el cuerpo, os recompensará. En la primera escritura divina, esta práctica se conoce como <b>‘Brahma (Gnan) Yogam'.</b>
</div></div>
  </span>`
    },
    {
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 16,
verse: `  <b>15)	El Evangelio de Mateo, capítulo 6, versículos 7 y 8 </b> `,
meaning: `  <b>
(6:7) Cuando oréis, no hagáis balbuceos como los paganos, porque piensan que serán escuchados por sus muchas palabras.
<br><br>
(6:8) No seas como ellos, porque tu padre sabe lo que necesitas antes de que se lo pidas.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Muchas personas en la sociedad actual oran con palabras inútiles en lugar de Yoga'que se adhiere al dharma para alcanzar a Dios. Suponen que Dios cumplirá sus deseos si usan muchas palabras. Su intención no es unirse con Dios, sino buscar deseos y beneficios mundanos. Sin embargo, no debes orar como ellos. Tu padre, Atma, ya lo sabe todo incluso antes de que le preguntes. Él sabe lo que se te debe o no conceder. Por lo tanto, no sirve de nada indagar sobre los beneficios materiales. Vuestro Padre, Atma, os guía según vuestro karma. Por lo tanto, Atma te proporciona lo que has ganado a través de tu karma pasado. Lo pidas o no, el Atma otorga todo de acuerdo con el karma. Atma es el Padre de todos los humanos, y el Espíritu Santo, el Padre del Atma, es el testigo de todas las cosas.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 17,
verse: ` <b>16)	El Evangelio de Mateo, capítulo 7, versículos 13 y 14.</b> `,
meaning: `<b>
(7:13) Entrad por la puerta estrecha. Porque ancha es la puerta y espacioso el camino que lleva a la perdición, y muchos entran por él.
<br><br>
(7:14) Pero pequeña es la puerta y angosto el camino que lleva a la vida, y sólo unos pocos lo encuentran.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hay dos caminos en este mundo: uno es el camino de Paramatma (El Espíritu Santo) y el otro es el camino de maya. Si bien hay muy pocos que buscan a Dios, muchos se sienten atraídos por el vasto camino de maya. La puerta de entrada a Moksha es estrecha y difícil de atravesar. El camino de Dios es igualmente angosto y sólo unos pocos logran descubrirlo.

  El versículo menciona la puerta (entrada) de Dios y el camino. La primera es la entrada y la siguiente es el camino. Sólo hay dos caminos para todos los seres humanos. Uno es estrecho y el otro ancho. La puerta del camino angosto es angosta, y la entrada al camino ancho es ancha. La entrada y el camino deben ser unas veces más grandes que el que entra. Entonces sólo es posible entrar por la puerta y el camino. El tamaño de la puerta estrecha y el ancho del camino estrecho son iguales al tamaño de la persona que entra. Pero en la segunda opción, el tamaño de la puerta ancha y el ancho del camino ancho son 108 veces más grandes que la persona que entra. De esta manera, sólo hay dos caminos en este mundo: uno con una puerta 108 veces más ancha y un camino ancho, y el otro con una puerta y un camino del tamaño exacto. El Señor comparó estos dos tipos de puertas y caminos con la sabiduría y la ignorancia. El camino de la sabiduría es muy estrecho y el tamaño de la entrada es limitado, lo que hace que caminar sea un desafío. El camino ignorante es 108 veces más grande y está libre de obstáculos. El camino de la sabiduría es estrecho y tiene obstáculos, pero su destino es Paramatma. Aunque no hay obstáculos en la puerta ancha y en el camino ancho e ignorante, éste conduce a Satanás. El camino de Paramatma es sin nacimiento ni muerte, sin destrucción, y siempre se encuentra en un estado sin cambio. El camino de Satanás tiene nacimiento, muerte y destrucción y siempre está en un estado de cambio. Aunque el camino de Paramatma es muy superior y el camino de Satanás es el peor, la mayoría de la gente elige caminar por el camino de Satanás. Cuando una persona entra en el camino de Satanás, todos sus asociados la apoyan y no le causan ningún problema. No habrá dificultades económicas y la vida se sentirá cómoda. Sin embargo, cuando una persona elige el camino de la sabiduría, sus familiares y cónyuges pueden convertirse en enemigos y obstruir su viaje. La vida puede volverse desafiante. Por lo tanto, muy pocos, si es que hay alguno, entre los millones que eligen el camino de la sabiduría.

  Mucha gente está recorriendo el vasto e ignorante camino, que no presenta obstáculos ni oposición. Sorprendentemente, no se dan cuenta de la existencia de un estrecho pasaje que conduce a Moksha y al Padre de los Paraloka. En el Bhagavad-Gita, Krishna afirma que ni siquiera uno entre miles desea atravesar el camino angosto. Rara vez alguien entra en él, y aún más raro es llegar al destino debido a los obstáculos que plantea maya. Krishna, en el Bhagavad-Gita, enfatiza además que la persona que supera estos obstáculos y alcanza el destino es considerada "el bendito", y ese individuo se unirá con el eterno Paramatma. Tanto Krishna como Jesús representan el Paramatma. Krishna aclaró los caminos de la sabiduría y la ignorancia en el Bhagavad-Gita hacia el final de Dvapara Yuga, mientras que Jesús transmitió un mensaje similar en el texto sagrado, tres mil años después de Kali Yuga. Aquellos que comprenden los senderos de la sabiduría y la ignorancia explicados por Sri Krishna y Jesucristo deben embarcarse en el sendero sugerido de la sabiduría, persistiendo a pesar de todos los obstáculos, hasta que finalmente alcancen Paramatma, que es el moksham eterno.

</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 18,
verse: ` <b>17)	 El Evangelio de Mateo, capítulo 7, versículos 7 y 8</b>
`,
meaning: `
<b>
(7:7) Pedid y se os dará; Busca y encontrarás; llama y se te abrirá la puerta.<br><br>
(7:8) Porque todo el que pide, recibe; el que busca encuentra; y al que llama, se le abrirá la puerta.
</b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En este versículo, tres verbos esenciales: <b>pregunta, busca y llama.</b> Jesús nos instruyó a realizar estas tres cosas en un contexto espiritual. Las enseñanzas del Señor no giran en torno a asuntos mundanos, a diferencia de muchas otras. Desafortunadamente, muchos han entendido mal este versículo, interpretándose como un llamado a recibir bendiciones materiales. En consecuencia, la gente comenzó a pedir favores terrenales al Señor, contrario a Su mensaje original. Aunque la gente lee la Santa Biblia, Satanás ha entrado en sus corazones, nublando su comprensión de las enseñanzas de Jesús y llevándolos a buscar deseos materiales. La intención del hombre no es transgredir la palabra de Dios, pero Satanás aprovecha su falta de comprensión, engañarlos haciéndoles pensar que no están violando los mandamientos divinos. En realidad, esto los lleva a transgredir la palabra de Dios. Satanás, una creación de Dios, existe dondequiera que se sienta la presencia de Dios. Dondequiera que permanezca la palabra de Dios, también puede estar presente la influencia de Satanás. Por lo tanto, es crucial comprender diligentemente los versículos de Dios y protegernos contra la influencia de Satanás al interpretar las Escrituras.

  Debemos pedirle a Dios, buscarlo y tocar a la puerta de Dios. Este es el camino de Dios. Si pedís algo más o buscáis algo más, será el camino de Satanás (Maya). Quienes siguen el camino de Dios buscan la sabiduría de Dios. Quizás tengas muchas preguntas: ¿Cómo es Dios? ¿Cómo podemos llegar a Dios? ¿Cómo podemos entender todos los detalles acerca de Dios? No asuma que nadie en la Tierra puede responder estas preguntas. Dios viene y proporciona las respuestas que buscas cuando los humanos en la Tierra no pueden acceder a la información de Dios debido a la influencia de Satanás. Puede encontrar respuestas a sus preguntas, pero es posible que no reconozca quién proporciona estas respuestas. Incluso cuando Dios nace en la Tierra y ofrece respuestas, a menudo lo percibimos como un ser humano normal y no como Dios. Si preguntas, obtendrás completa sabiduría. Si buscas, descubrirás que Dios ha venido a la Tierra en forma humana. Cuando Dios se encarna en la Tierra, no pretende ser Dios y no se revela a nadie. Ésta es su regla. Según esta regla, quien no busca no encontrará, pero los buscadores lo reconocerán. Dado que sólo unos pocos pidieron sabiduría cuando el Señor Jesús estuvo en la Tierra, Él compartió Su sabiduría con ellos. Debido a que había tan pocos buscadores, Él no se apareció como Dios a nadie; a todos les parecía un hombre corriente. También sus doce discípulos lo percibieron como un predicador y no sabían que Paramatma, que abarcaba todo el universo, se había encarnado como Jesús. Se comportó intencionalmente de una manera que impedía que alguien lo reconociera como Dios.

  El Rey de Paraloka, Paramatma, lavó los pies de sus discípulos durante su estancia en la Tierra como hombre. Este humilde acto hizo que fuera un desafío para sus discípulos y otras personas reconocerlo. Lamentablemente, la gente no logró identificarlo como el Señor y lo trataron irrespetuosamente, considerándolo como un hombre común y corriente. Soportó escupitajos en el rostro, una corona de espinas en la cabeza, palizas y crucifixión. Incluso cuando Jesús murió y resucitó con el mismo cuerpo al tercer día, algunos de sus discípulos lo confundieron con un diablo. Esto resalta que sus discípulos eran curiosos pero no verdaderos buscadores. Como dice el dicho, <b>"ver es más grande que escuchar”,</b> aquellos que lo presenciaron en persona tenían un estatus más alto que aquellos que simplemente escucharon Sus enseñanzas. Si bien la gente tuvo la oportunidad de ver al Dios del mundo entero en la forma de Jesús, fue como si realmente no lo hubieran visto. En este contexto, el Señor describió a sus discípulos como ciegos, a pesar de tener vista física. Para evitar tal ceguera, uno debe buscar activamente a Dios. Como sugiere el versículo, todo el que pide recibe, y todo el que busca encuentra. Por lo tanto, quien pregunta recibe las palabras de Dios, el buscador obtiene la forma de Dios. El que ve es mayor que el que escucha y el que experimenta es mayor que el que ve. Basado en este principio, quien llama obtiene acceso al reino de moksha. Llamar, en este contexto, no se trata de tocar la puerta de un vecino o de un extraño, sino más bien de buscar la entrada al reino de moksha y a las puertas del reino de Paraloka. Aquellos que buscan moksha se unen con Paramatma y experimentan Su verdadera esencia. Quienes están acostumbrados a pedir y buscar definitivamente deberían intentar unirse con Dios. Eso significa que definitivamente se convertirán en una aldaba. A través del proceso de pedir, buscar y llamar, cualquiera puede unirse con Dios. Por lo tanto, cada individuo debe cultivar estas tres cualidades esenciales, como se describe en el versículo antes mencionado. Siguiendo la guía de Dios, quien pregunta obtiene sabiduría, el buscador encuentra a Bhagavan y el que llama obtiene acceso a la casa de moksha.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 19,
verse: `<b>18)	El Evangelio de Mateo, capítulo 7, versículo 15.</b>`,
meaning: ` <b>
(7:15) Cuidado con los falsos profetas. Vienen a vosotros vestidos de ovejas, pero Por dentro son lobos feroces.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Los seres humanos necesitan guía para encontrar su camino hacia Dios, y esta guía a menudo proviene de otros. Para caminar en el camino de Dios, una persona debe depositar su confianza en otra. Quienes siguen este camino espiritual confían en sus guías para que les muestren el camino. El viaje del seguidor depende del guía, ya que debe seguir el camino que el guía ilumina. Esto hace que el seguidor dependa del guía, y si el guía proporciona la dirección correcta, el seguidor progresará correctamente. Por el contrario, si el guía ofrece la dirección equivocada, el seguidor puede desviarse del camino. El destino final de una persona común y corriente está fuertemente influenciado por el guía o gurú elegido. Una vez que una persona es reconocida como gurú, los individuos tienden a creer y confiar en su guía durante toda su vida. Por lo tanto, se debe tener mucho cuidado al seleccionar a alguien como gurú o guía. En el versículo mencionado anteriormente, el Señor advirtió: <b>“Cuidado con los falsos profetas”</b>. Advirtió que algunos gurús contemporáneos pueden no ser guías genuinos. Puede que se presenten vestidos de ovejas, pretendiendo ser gurús genuinos, pero en realidad son como lobos feroces disfrazados. Según las enseñanzas de Jesús, muchas personas pueden vestirse y actuar como gurús, incluso utilizando palabras como Dios, sabiduría y Atma en sus discursos. Sin embargo, es posible que su verdadera naturaleza no lo acerque más a Dios. Así como un lobo escondido bajo una piel de oveja no es una oveja, estos individuos, a pesar de su apariencia, no son gurús genuinos. Por lo tanto, el consejo del Señor es estar alerta y ser cautelosos con los falsos profetas para evitar desperdiciar la vida siguiendo a aquellos que no ofrecen una guía verdadera.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 20,
verse: `<b>19) El Evangelio de Mateo, capítulo 7, versículo 21.</b>`,
meaning: ` <b>
((7:21) No todo el que me dice: Señor, Señor, entrará en el reino de Para Loca, sino sólo el que hace la voluntad de mi Padre que está en paralocos.
 </b>
`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El Señor Jesús emana de Paramatma. Jesús es Bhagavan encarnado en forma humana, mientras que Paramatma, el Padre de Pa Loca, es Dios en un estado sin forma, omnipresente en todo el universo. Cuando Bhagavan, encarnado como Jesús, caminó sobre la Tierra, algunos reconocieron Su divina magnificencia y lo reverenciaban por sus deseos materiales. Se dirigieron a Él como “Señor, Señor”, buscando ganancias personales. Sin embargo, acercarse a la forma visible del Señor y llamarlo grande sin alcanzar la sabiduría divina es insuficiente. Aunque el que está en forma visible y el que está en forma invisible son iguales, existen limitaciones inherentes a la forma visible, mientras que el Padre invisible de Paraloka es ilimitado. El ilimitado Paramatma ocasionalmente asume una forma tangible para impartir Sus divinas enseñanzas a la humanidad. Jesús es la forma elegida por Paramatma para este propósito. Mientras el Señor se presentó ante nosotros como Jesús, el Padre de Paraloka habló a través de las palabras de Jesús. Dios se encarnó como Jesús para proclamar sus dharmas.

  Simplemente llamar a Jesús "Señor" sin poner en práctica la sabiduría de Dios y alinearse con la voluntad del Padre de Paraloka no trae beneficios reales. Aquel que practica activamente la sabiduría de Dios está por encima de aquel que simplemente pronuncia el nombre del Señor. El que acata las palabras de Dios es más importante que el que simplemente saluda a Dios. Una persona que vive de acuerdo con los mandamientos de Dios está verdaderamente siguiendo la voluntad de Dios, y esas personas están destinadas a Paraloka (moksha). Dios no busca la adulación y no cede ante ella; más bien, Dios se complace en aquellos que abrazan y aplican su sabiduría. Por lo tanto, es más significativo practicar las enseñanzas de Dios que simplemente ofrecer alabanza. Dios posee una comprensión de los pensamientos e intenciones de todos los seres y puede distinguir entre aquellos que verdaderamente comprenden y viven según Su sabiduría y aquellos que no. Aquellos que comprenden y viven según la sabiduría de Dios tienen especial importancia para Dios. Aquellos que malinterpretan o ignoran la sabiduría y no actúan de acuerdo con Dios no pueden alcanzar moksha.

</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 21,
verse: ` <b>20)	El Evangelio de Mateo, capítulo 7, versículos 22 y 23. </b>`,
meaning: ` <b>
(7:22) Muchos me dirán aquel día: Señor, Señor, ¿no profetizamos en tu nombre y en tu nombre expulsamos demonios y en tu nombre hicimos muchos milagros?
<br><br>
(7:23) Entonces les diré claramente: “Nunca os conocí”. ¡Apartaos de mí, malhechores!</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Algunas personas que reconocen la grandeza del Señor (Jesús) pueden pasar por alto a Paramatma, el gobernante de paraloka, y concentrarse únicamente en alabar a Jesús. Paramatma, el Padre del mundo entero, envió una parte de Sí mismo como Jesús. Jesús posee tanto poder como Paramatma. Alabar al Señor Jesús es similar a alabar al Padre, Paramatma. Muchas personas ofrecen sus alabanzas al Señor, pero hay quienes lo hacen por motivos egoístas, mientras que otros son desinteresados ​​en su devoción a Dios. El Padre de paraloka transmitió su mensaje a través de Jesús, a quien envió, en numerosas ocasiones. Muchos están familiarizados con las palabras del Padre Supremo pero no comprenden Su verdadera naturaleza. Se podría afirmar que ni siquiera uno entre millones de personas que leen las palabras del Padre, las escuchan y ofrecen sus alabanzas, comprende verdaderamente la esencia real del Padre. El Señor proclamó los mandamientos, la sabiduría y los versículos de Dios. El Señor visible (Jesús) sirve como símbolo del Dios invisible, y Él es la imagen y el representante de Dios. Aquellos que no logran captar la sabiduría y los mandamientos contenidos en los versículos no pueden beneficiarse plenamente de su alabanza al Señor.

  La humanidad sólo puede obtener algún beneficio al alabar al Señor como supremo. Es imperativo reconocer que el beneficio último para una persona es alcanzar para ser loca. El logro más importante que se puede alcanzar es el paraloka. Es crucial comprender que el objetivo final de cualquier persona es liberarse del mundo de Satanás (maya) y entrar en el reino de Dios. El beneficio último y más significativo para la humanidad es unirse con él para ser loca de Dios sin regresar nunca a este mundo donde reside Satanás. No hay nada más valioso para una persona que acceder a para loca. Para cosechar beneficios tan enormes y evitar enredarse con Satanás, uno debe captar plenamente la sabiduría de Dios. Aquellos que no profundicen en la profunda sabiduría contenida en los versículos de Jesús y Sus mandamientos serán sólo devotos parciales en lugar de creyentes completos. Bienaventurado el que sigue todas las enseñanzas del Señor sin exceder los límites de Sus mandamientos. Incluso aquellos que tal vez no comprendan plenamente la sabiduría de Paramatma no son creyentes completos, a pesar de ser grandes predicadores y fervientes alabadores del Señor. Esto no es para descartar a tales individuos, sino para enfatizar que tienen fe en Dios sin ser creyentes completos. La duda permanece dentro de cada persona hasta que comprende completamente la sabiduría de Dios, incluso si no es evidente ahora. Los grandes predicadores que creen que son devotos incondicionales del Señor aún pueden albergar dudas hasta que obtengan una comprensión profunda de la sabiduría de Dios. Por eso, el Señor proclamó: <b>“El que confía en mí con su manas es superior al que me adula”</b>. La fe completa requiere la plena sabiduría de Dios.

  Se puede decir que aquellos que no entienden que Jesús y Dios son uno y aquellos que creen que Jesús regresará como Jesús no comprenden la inmensidad de Dios. Quien no se da cuenta de que Dios es eterno, sin principio ni fin, que Dios ha descendido muchas veces a la Tierra y que vendrá cuando sea necesario, carece de sabiduría completa. Aquellos con sabiduría perfecta pueden discernir la llegada de Dios, mientras que aquellos sin sabiduría absoluta no pueden reconocer Su venida. Incluso cuando Dios ha tomado forma humana y se ha presentado ante una persona, aquel que sólo ve Su apariencia exterior y sus acciones puede no reconocer a Dios. Cuando el Señor viene de incógnito, es posible que algunos cristianos no lo reconozcan y no se den cuenta de Su presencia, incluso hasta el punto de intentar bautizar.

  En la Tierra, los creyentes son mejores que los no creyentes, y los creyentes absolutos superan a los creyentes comunes y corrientes. Sólo los creyentes absolutos pueden entrar en para loca. Dios no los acepta hasta que se conviertan en creyentes absolutos. Al entrar en para loka, Dios reconoce sólo ganas absolutos. Si alguien no es un gnani absoluto, Dios dirá: “No lo conozco”. Por tanto, uno debe esforzarse por alcanzar la sabiduría absoluta. Muchos aspiran a acercarse a Dios y entrar en Su reino. Sin embargo, como están dentro del dominio de Satanás (Maya), Satanás ejerce sus mayores esfuerzos para impedir que alcancen a Dios y se convierten en completos gratis. Incluso los predicadores que son conscientes de la oposición de Satanás a Dios tal vez no comprendan plenamente el alcance de su influencia. Aquellos que carecen de una comprensión integral de las actividades de Satanás pueden, sin darse cuenta, seguir el camino de Satanás mientras creen que están en el camino hacia Dios. Es por eso que Dios ha declarado que los predicadores que asumen que están cerca de Dios aún pueden no llegar a entrar en Su presencia.

  En el versículo, Jesús dijo: <b>“Aunque expulsamos demonios y hacéis milagros en mi nombre, y curaba enfermos en mi nombre, sois malhechores. Apártate de mí”.</b>

  En la sociedad actual, la gente suele considerar a quienes realizan milagros en el nombre de Dios como verdaderos devotos, creyendo que están cerca del Señor. Incluso aquellos que hacen maravillas pueden pensar que están en estrecha comunión con el Señor. Esta percepción surge porque ven la gloria del Señor manifestada a través de sus acciones. Cuando imponen sus manos sobre un paciente mientras recitan las palabras de Dios, y el paciente experimenta curación, lo atribuyen a los milagros del Señor que ocurren a través de ellos. Si bien es cierto que pueden suceder milagros que hagan que todos conozcan la presencia del Señor, pasan por alto por qué el Señor expresó su disgusto con tales acciones, como se menciona en el versículo anterior. Al hacerlo, olvidan las palabras del Señor. Surge la pregunta: ¿Por qué el Señor los reprendió si lo que estaban haciendo parecía ser bueno y una manifestación de los milagros del Señor? ¿Por qué Jesús afirmó que estaban caminando por un mal camino? Si el Señor lo ha dicho, es indudable que es verdad.

  La increíble verdad se hace evidente cuando contemplas lo que significa la verdad en las enseñanzas del Señor. Es un grave error que una persona no discierne si los milagros realizados en el nombre del Señor son de Dios o de Satanás. Muchos de los que aparecen como predicadores y gurús a los ojos de la gente creen que están en el camino de Dios, pero, de hecho, están en el camino de maya. Esta comprensión puede resultar bastante angustiosa. Es posible que muchos predicadores se molesten con mis palabras, pero recuerden que estas no son mis palabras; son las palabras de Dios. Como se indica en el Evangelio de Mateo 7:22, el Señor dijo: <b>“Esto es malo. Nunca los conocí.</b> “Debemos reconocer que el mismo Maya (Satanás) que tentó al Señor en el pasado todavía intenta engañarnos hoy. Comprender a maya (Satanás) también es una parte esencial de la sabiduría divina. Sin reconocer a maya, podemos seguir erróneamente a Satanás, quien asume la apariencia de Dios, en lugar de seguir a Dios. Hoy en día, muchos oradores, gurús y predicadores cometen el mismo error. Satanás (maya), que puede asumir muchas formas, realiza trucos y milagros en nombre de Dios. Aquellos que no son conscientes de que esto no agrada a Dios no pueden progresar. La preocupante verdad es que muchas personas en la Tierra siguen ciegamente a Satanás, creyendo que es Dios. No se dan cuenta del hecho de que están siguiendo el camino de Satanás, no el de Dios. Puede parecerles casi imposible liberarse de la influencia de Satanás. Incluso si Dios mismo fuera a transmitir esta verdad, podrían criticar a Dios pero permanecer sin cambios. Para ellos, maya aparece como Dios, y Dios aparece como un simple ser humano.

  Aquellos que aspiran a entrar en el reino de Dios y tienen fe en Dios deben reflexionar sobre el versículo mencionado anteriormente y contemplar por qué Dios desaprobó y se refirió a aquellos que realizan milagros como malhechores. Considere quién es favorecido por Dios y quien no lo es. Es fundamental familiarizarse con los versículos, la sabiduría y los mandamientos de Dios. Debes abrazar plenamente la sabiduría de Dios sin transgredir Sus mandamientos, reconociéndose como los límites establecidos a tu alrededor. Tenga en cuenta que el reino de Dios está dentro de estos límites, mientras que el dominio de Satanás está fuera. Manténgase alerta ante la influencia de Satanás, recordando los límites delineados por Jesús en sus sagradas escrituras para toda la humanidad.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 22,
verse: ` <b>21)	El Evangelio de Mateo, capítulo 8, versículo 22. </b>`,
meaning: ` <b>
(8:22) Jesús le dijo: “Sígueme, y deja que los muertos entierren a sus propios muertos”.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El versículo mencionado anteriormente fue la respuesta de Jesús cuando uno de sus discípulos le dijo: “Señor, primero déjame ir a enterrar a mi padre”. Las palabras de Jesús pueden parecer poco claras para algunos, lo que genera preguntas sobre su significado. Cuando consideramos esto, podemos clasificar a la humanidad en dos categorías: aquellos que poseen sabiduría y la practican como yoga alcanzarán la vida eterna (moksha). Estas personas son muy pocas. Los que sean elegibles para la vida eterna no serán contados entre los muertos. Aquellos que alcanzan la vida eterna nunca experimentarán verdaderamente la muerte y se puede decir que han alcanzado moksha. Por otro lado, aquellos que son ignorantes o no practican yoga pueden ser considerados espiritualmente muertos. Esas personas no poseen la vida eterna y, en última instancia, enfrentarán la muerte. Se puede decir que están destinados a experimentar la muerte en algún momento. Los ignorantes suelen ser enterrados por otros individuos ignorantes. Por lo tanto, la afirmación de Jesús: “Que los muertos entierran a los muertos” transmite la idea de que a los que carecen de sabiduría se les llama espiritualmente muertos. Enfatiza que aquellos que poseen sabiduría no deben asociarse con los ignorantes. Por lo tanto, Jesús le dijo al discípulo: “Entiende la sabiduría y sígueme. Que los ignorantes entierren a los ignorantes”.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 23,
verse: ` <b>22)	El Evangelio de Mateo, capítulo 9, versículos 12 y 13.</b>`,
meaning: ` <b>
(9:12) Al oír esto, Jesús dijo: “No son los sanos los que necesitan médico, sino Los enfermos”.
<br><br>
(9:13) Porque no he venido a llamar a justos, sino a pecadores.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Como hemos comentado anteriormente, Dios de vez en cuando desciende a la Tierra para establecer dharmas. De manera similar, Jesús afirmó que vino a guiar a los ignorantes por el camino de la sabiduría. Mencionó que vino a llamar a los pecadores, no a los justos. Aquí los "pecadores" representan a los que son ignorantes y carecen de sabiduría, mientras que los "justos" denotan a los que poseen sabiduría. Dios asume el papel de médico espiritual, a menudo denominado predicador, para sanar a los afligidos por la enfermedad de la ignorancia. A través de la medicina de la sabiduría, Él cura a los espiritualmente enfermos. Aquellos que ya están espiritualmente sanos y con sabiduría no necesitan la guía de tal médico o predicador. Cuando la enfermedad de la ignorancia se propaga globalmente, afectando a todas las personas, Dios se encarna para proporcionar Su divina medicina de dharmas y transformar a los ignorantes en jnanis (individuos sabios). Si Dios no asumiera este papel de médico espiritual, el mundo entero estaría plagado de ignorancia. Por lo tanto, Dios se encarna para revelar su sabiduría a los necesitados.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 24,
verse: ` <b>23)	El Evangelio de Mateo, capítulo 8, versículos 23, 24, 25 y 26. </b>`,
meaning: `<b>
(8:23) Entonces subió a la barca y sus discípulos le siguieron.
<br><br>
(8:24) De repente se levantó sobre el lago una tormenta tan furiosa que las olas arrasan la barca. Pero Jesús estaba durmiendo.
<br><br>
(8:25) Los discípulos fueron y lo despertaron, diciendo: “¡Señor, sálvanos! ¡Nos vamos a ahogar!(8:26) Él respondió: “Hombres de poca fe, ¿por qué tenéis tanto miedo?” Luego se levantó y reprendió a los vientos y a las olas, y todo quedó en completa calma.  </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Este evento es un incidente significativo en la vida de Jesús. Si bien es posible que Jesús no haya enseñado directamente una lección aquí, hay mucho que podemos aprender de este evento. Tanto el mar como la tormenta están conectados con Prakruti. El aire de la tormenta y el agua del mar son componentes integrales de Prakruti. Prakruti está bajo el control exclusivo de Paramatma, la entidad divina suprema. Prakruti consta de cinco elementos: Cielo, Aire, Fuego, Agua y Tierra. Incluso Atma, que posee divinidad siguiendo a Paramatma, no tiene autoridad sobre Prakruti. El Atma dentro del cuerpo gobierna sólo el Chara (cambiable) Prakruti, que existe en la forma del cuerpo. No ejerce ninguna autoridad sobre el Achara (Inmutable) Prakruti. Prakruti no presta atención al Atma; obedece únicamente a la orden de Paramatma. Prakruti se compone de cinco botas, que pueden entenderse como fuerzas vitales o jueves. Estos cinco jueves representan los cinco elementos de Prakruti y, como tales, se adhieren a la divina palabra de Dios. Siguen las instrucciones de Paramatma.

  Debido a que Jesús era el Espíritu Santo que apareció como un hombre común y corriente, la tormenta en el mar cesó ante Su orden. Sólo Dios puede controlar Prakruti, por lo que Jesús puede ser considerado la encarnación de Dios. En los versículos 7, 8 y 9 del Gnana Yoga del Bhagavad-Gita, la primera escritura divina, se menciona que Dios desciende a la Tierra en forma humana para impartir Su sabiduría. Cuando Dios toma forma humana, exteriormente se parece a un hombre común y corriente, aunque no es un individuo común y corriente. Debido a que aparece como un hombre común y corriente, identificarlo es un desafío. Sin embargo, existen dos indicadores claves para reconocerlo:<b>1) La presencia de la encarnación de Dios dondequiera que se enseñen los dharmas divinos. 2) La capacidad de ordenar a Prakruti puede reconocerse como la encarnación de Dios.</b> El calmar el mar por orden de Jesús es una manifestación de este poder divino, lo que demuestra que sólo Dios puede realizar tales hazañas. Cuando se enseñan dharmas y se ordena Prakruti, la forma humana de Dios se vuelve reconocible. Jesús no sólo enseñó la sabiduría de Dios sino que también la practicó y ordenó a Prakruti. Por lo tanto, Jesús puede ser identificado como Dios en forma humana. El cese inmediato de la tormenta en el mar sirvió como prueba de la divinidad de Jesús.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 25,
verse: ` <b>24)	El Evangelio de Mateo, capítulo 9, verso 6.</b>`,
meaning: `<b>
(9:6) Quiero que sepan que el Hijo del Hombre tiene autoridad en la tierra para perdonar pecados. Entonces le dijo al paralítico: “Levántate, toma tu camilla y vete a casa”. Entonces el hombre se levantó y se fue a su casa.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jesús mismo dijo que el Hijo del Hombre tiene autoridad en la Tierra para perdonar pecados. Cuando trajeron a Jesús un paralítico, él le dijo: “Tus pecados te son perdonados”. Algunos de los escribas decían para sí que Jesús estaba blasfemando. Conociendo sus pensamientos, Jesús dijo: “¿Por qué tenéis malos pensamientos en vuestros corazones? ¿Qué es más fácil: decir: “Tus pecados te son perdonados” o decir: “Levántate y anda?” Pero quiero que sepáis que el Hijo del Hombre tiene autoridad para perdonar pecados”. Entonces le dijo al paralítico: “Levántate, toma tu camilla y vete a casa”. Entonces el hombre se levantó y se fue a su casa.

  Si observamos esto, Jesús perdonó los pecados porque los escribas pensaban mal de Él. También declaró que el Hijo del Hombre tiene autoridad en la Tierra para perdonar los pecados. A pesar de venir a la Tierra como el Hijo de Dios, se humilló al identificarse como el Hijo del Hombre. Dijo y demostró que sólo Él posee la autoridad para perdonar pecados. Aquellos que entiendan que sólo Dios (El Espíritu Santo) puede perdonar los pecados reconocerán quién es realmente Jesús. Al afirmar ser el Hijo del Hombre, Jesús deliberadamente oscureció Su divinidad, a pesar de que se originó del Espíritu Santo. El paralítico se levantó inmediatamente y se fue a su casa cuando Jesús le indicó que lo hiciera. La multitud quedó asombrada al presenciar este milagro. A pesar de realizar un acto tan notable, Jesús fue tratado como un hombre común y corriente y llevado ante el tribunal como si fuera culpable. Esto ilustra cómo los humanos a menudo olvidan la ayuda que reciben.

</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 26,
verse: ` <b>25)	El Evangelio de Mateo, capítulo 10, versículo 20.</b>`,
meaning: `<b>
(10:20) Porque no seréis vosotros los que habléis, sino el Espíritu de vuestro Padre hablando por vosotros.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si bien este versículo puede parecer ordinario, encierra una profunda sabiduría espiritual. Es esencial entender que el término <b>‘Su padre</b> ‘en este verso no se refiere al padre biológico sino al Padre espiritual de Jeevatma. Atma, el Padre de Jeevatma, reside dentro del cuerpo y lo guía. Es crucial recordar que el Padre del Atma es Paramatma. Cada ser humano representa a Jeevatma. Dependiendo del karma de una persona, el Atma influye y la guía (Jeevatma), provocando que experimente karma (pecados y punya karma). Atma controla todas las funciones corporales y determina el placer y el dolor experimentado por Jeevatma dentro del cuerpo.

  Jeevatma no participa activamente en ninguna función corporal. A pesar de su aparente inacción, Jeeva experimenta en silencio las consecuencias de sus acciones, tanto alegría como tristeza. Aunque Jeevatma se identifica como el individuo dentro del cuerpo, carece de capacidad para actuar. Más bien, es el Atma el que orquesta todas las actividades dentro del cuerpo. Debido a la ignorancia, Jeevatma cree erróneamente que es él quien realiza las acciones escuchando las palabras de "ahí" (el ego). En realidad, Atma es el verdadero actor dentro del cuerpo, pero Jeevatma a menudo olvida la presencia de Atma y cree que él es el hacedor de todo. En el contexto del versículo, Jesús pretendía iluminar a los ignorantes. El transmitió<b>“Tu padre, Atma, reside dentro de ti y se comunica a través de ti. No eres tú quien habla.</b> Según este verso, es evidente que Jeevatma no articula no sólo los hechos realizados sino también las palabras habladas. Jesús afirmó que es pura ignorancia que la gente crea que está hablando, mientras que es Atma quien articula las palabras. Jeevatma no realiza las acciones ejecutadas por las diez partes del cuerpo físico (órganos de acción); es Atma quien logra todo a través de estas partes del cuerpo. Reconocer esta verdad representa la forma más elevada de sabiduría entre todas las sabidurías.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 27,
verse: ` <b>26)	El Evangelio de Mateo, capítulo 10, versículo 30.</b>`,
meaning: ` <b>
(10:30) Hasta los mismos cabellos de vuestra cabeza están todos contados.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En un templo, la gente suele compartir sus pensamientos con Dios, creyendo que Dios no es consciente de sus sentimientos más íntimos. Muestran respeto y asombro cuando están en el templo, pero pueden comportarse de manera diferente afuera. Por ejemplo, después de salir del templo, algunas personas pueden ocupar dos asientos del tren sin permitir que otros pasajeros se sienten, mostrando un comportamiento desconsiderado. Esta acción surge de la idea errónea de que Dios es consciente de sus acciones dentro del templo pero no fuera. Sin embargo, <b>Muchos no se dan cuenta de que Dios es omnisciente y omnipresente, percibiendo todas las acciones, incluso en los lugares más apartados.</b> Este versículo pronunciado por Jesús resalta la gloria de Dios y sirve como recordatorio de que la conciencia de Dios se extiende por todas partes.

  El versículo resalta el extraordinario cuidado de Dios hacia los humanos, ya que Dios ha establecido un sistema preciso para todos los aspectos de la existencia humana. Este sistema divino abarca incluso los detalles más mínimos, como el "karma-visara", la división del karma en partes diminutas. A través de karma-visara, Dios determina cuántas veces una persona debe abrir y cerrar los párpados, asegurando un conteo preciso. Dios también dicta la cantidad de cabellos en nuestra cabeza y cuándo y cuáles cabellos deben caerse, todo a través del karma-visara. Además, Dios organiza los desafíos que enfrentan las personas y el alcance de su sufrimiento. En el Bhagavad-Gita, el Señor afirma que Dios posee conocimiento de todo lo que ha ocurrido, está sucediendo y sucederá en la Tierra. Esto refuerza la noción de que no hay nada más allá de la conciencia de Dios.
</div></div>

</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 28,
verse: ` <b>27)	El Evangelio de Mateo, capítulo 10, versículos 34, 35 y 36.</b>`,
meaning: `<b>
(10:34) No penséis que he venido a traer paz a la tierra. No vine a traer paz, sino espada.
<br><br>
(10:35) Porque he venido a poner “al hombre contra su padre, a la hija contra su madre, una nuera contra su suegra.
<br><br>
(10:36) Los enemigos del hombre serán los miembros de su propia casa.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si bien puede que no sea justo decir que Jesús intentó intencionalmente crear conflictos entre los humanos, es evidente que tales conflictos han surgido. Jesús vino con la intención de llevar a la gente de la ignorancia a la sabiduría en lugar de sembrar discordia. Compartió su sabiduría con buenas intenciones, pero a menudo dio lugar a disputas entre quienes no comprendían plenamente sus enseñanzas. De la misma manera que el agua fría rociada sobre la arena la enfría, mientras que las calizas se calientan, alteran su apariencia y se convierten en cal, la recepción de la sabiduría de Jesús varía. Quienes tienen un profundo conocimiento de la sabiduría encuentran felicidad en las enseñanzas de Jesús, mientras que entre los ignorantes surgen conflictos. En algunos casos, cuando uno de los cónyuges busca sabiduría, el otro puede no estar de acuerdo, lo que genera desacuerdos dentro de las familias. Esta consecuencia inesperada puede provocar divisiones dentro de los hogares, donde los padres pueden volverse contra los hijos, las madres contra las hijas y las suegras contra las nueras. Aunque las intenciones de Jesús son nobles, sin darse cuenta llevan a los humanos a olvidar su parentesco y fomentar la enemistad. Por eso si Jesús regala una flor, ésta se convierte en espina. Si Él da madera flexible, se convierte en una espada resistente. Es importante señalar que este resultado no es culpa de Jesús, sino más bien el resultado de la naturaleza humana y la influencia de diferentes gunas.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 29,
verse: `<b>28)	El Evangelio de Mateo, capítulo 10, versículo 37.</b>`,
meaning: `<b>
(10:37) Cualquiera que ama a su padre o a su madre más que a mí, no es digno de mí; el que ama a su hijo o a su hija más que a mí no es digno de mí.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Es un aspecto fundamental de la naturaleza humana que los padres amen a sus hijos, así como es natural que los niños amen a sus padres. El vínculo entre padres e hijos a menudo se caracteriza por un amor profundo, que supera cualquier otro vínculo en el mundo. Sin embargo, la mente humana también está significativamente influenciada por sus cualidades inherentes, conocidas como gunas. Cuando una persona alberga una <b>Amor intenso por la sabiduría y Dios.,</b> naturalmente gravitan hacia la búsqueda de la sabiduría más que de las cosas materiales o mundanas. Se vuelve un desafío priorizar la sabiduría cuando el afecto de uno se dirige principalmente a otra parte. La mente humana opera bajo la influencia de seis buenas y malas, similares a grilletes hechos de oro y hierro, respectivamente. Ambos tipos de gunas tienen el propósito de vincular a un individuo. Sin embargo, es importante señalar que ni el amor extremo (un buen guna) ni los celos (un mal guna) conducen a una persona hacia la sabiduría. Lo que realmente importa es el interés genuino del individuo por la sabiduría. Los seis malos gunas incluyen la codicia (kaama), la ira (krodha), la avaricia (lobha), la pasión (moha), la arrogancia (madam) y los celos (matsara). Por el contrario, los seis buenos gunas abarcan la caridad (dana), la misericordia (daya), la benevolencia (audarya), el desapasionamiento (vairagya), la humildad (vinaya) y el amor (prema).
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 30,
verse: `<b>29)	El Evangelio de Mateo, capítulo 10, versículo 38.</b>`,
meaning: `<b>
(10:38) El que no toma su cruz y me sigue, no es digno de mí.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
  Los cristianos a menudo hablan de la cruz y le tienen una profunda reverencia. Es común ver a los cristianos llevar una cruz alrededor del cuello, y este símbolo tiene gran importancia en su fe. Es ampliamente conocido que Jesús fue crucificado y murió en la cruz. La pregunta que surge es por qué los cristianos tienen en tan alta estima un símbolo que fue utilizado como instrumento de la ejecución de Jesús. La respuesta está en la naturaleza profunda de seguir a alguien más grande que ellos mismos y emular sus acciones. Sin embargo, no Uno se ha preguntado por qué la cruz, símbolo asociado con la muerte del Señor, debe tener tan alta consideración. De hecho, ya sea intencionalmente o no, parece haber una brecha en la comprensión de los detalles de la cruz. Tomémonos un momento para contemplar la cruz y profundizar en detalles más profundos.

  En el versículo, Jesús advirtió que <b>tomar la cruz lleva a caminar en el camino de Dios, mientras que si la cruz te levanta, significa caminar en el camino de Satanás.</b> Un mensaje similar se transmite cuando Jesús dijo: "El que no toma la cruz y me sigue, no es digno de mí". Esto implica que aquellos que no llevan la cruz no son dignos de Dios. Es importante entender que, según esta perspectiva, la cruz simboliza a Satanás. Para una exploración más detallada de este concepto, considere leer mi libro “¿Es la cruz de Dios?”

  La cruz representa la serpiente en el simbolismo espiritual. Es común establecer paralelismos entre la serpiente y Satán, y la paloma con Atma. Satanás, o maya, reside dentro del cuerpo humano y a menudo lleva a las personas por el camino de la ignorancia. Cuando Satanás levanta a una persona, significa la debilidad de la persona y el dominio de Satanás. Por otro lado, cuando una persona carga la cruz, indica que la fuerza del individuo supera a la de Satanás. Por eso Jesús, en ciertos momentos de su vida, cargó la cruz para demostrar que la humanidad puede vencer a Satanás. Del mismo modo, cuando Jesús fue crucificado en la cruz, simbolizó la cruz que lo llevaba, lo que significa que Satanás puede atraer a cualquiera a su camino. Para recorrer el camino de la sabiduría, los seres humanos deben estar dispuestos a llevar su propia cruz, como Jesús enfatizó en el versículo: "El que no toma su cruz y me sigue, no es digno de mí".

  Simbolizamos a Satanás en forma de cruz, que representa una serpiente colosal, similar al concepto maya. Maya tiene el poder de desviar a las personas del camino hacia Dios y hacia la ignorancia. Para superar tal influencia, primero debemos entender a maya. Tras el análisis, maya puede identificarse como el grupo de gunas dentro de la cabeza de una persona. Cualquiera que alinee sus acciones con estos gunas inadvertidamente sigue el camino de la ignorancia, esencialmente permitiendo que maya controle su curso. Para conquistar Maya, uno debe dominar los gunas, negándose a dejarse llevar por su influencia. Cuando una persona logra esto, se puede decir que ha derrotado a maya, o Satán, usando su fuerza interior. Una persona así puede tomar maya y recorrer el sendero de la sabiduría. Por lo tanto, el mensaje de Jesús en el versículo enfatiza que al conquistar la “cruz”—representante de Maya—uno se vuelve digno de la gracia de Dios. Es importante señalar que la "cruz" no es simplemente un símbolo de madera, sino más bien una representación de la pitón, un símbolo de Satanás. Según los ancianos, la cruz simboliza a maya, mientras que el pájaro es un símbolo de Atma. Durante el bautismo de Jesús por Juan, se dijo que el Espíritu (Atma) descendió como una paloma y entró en el cuerpo de Jesús. En este contexto, la "cruz" representa la fuerza opuesta al Atma. Por lo tanto, la enseñanza de Jesús subraya que cuando una persona, utilizando su sabiduría y fuerza interior, carga la "cruz" y recorre el camino de la sabiduría, se vuelve digna de Dios y de paraloka.
</div></div>

</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 31,
verse: `<b>30)	El Evangelio de Mateo, capítulo 10, versículo 40.</b>`,
meaning: ` <b>
(10:40) El que a vosotros recibe, a mí me recibe, y el que a mí me recibe, recibe al que me envió.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si bien los seres humanos son Jeevatmas, son creados por Atma. Paramatma, o el Espíritu Santo, creó tanto a Atma como a Prakruti. Sin embargo, cuando Paramatma encarna como hombre, surge la pregunta de si referirse a Él como Atma o Jeevatma. Si Dios toma forma humana, se le puede considerar un Jeevatma según su apariencia. Cuando los seres humanos (Jeevatmas) fallecen, el Atma los incorpora a sí mismo. Así como el Atma abarca a los seres humanos, también incluye a Dios cuando Él se encarna como hombre y aparece como un Jeevatma. Este concepto se repite en el versículo: <b>“Quien a vosotros os recibe, también a mí me recibe”.</b> Aquel que encarnó como ser humano (Jeevatma) es, en realidad, Dios. Sin embargo, es Dios quien envió al hombre, como Jesús. Cuando Atma abarca a un hombre que se asemeja a un Jeevatma, es como si Dios, el remitente del hombre, también estuviera incluido dentro de Atma. Por lo tanto, en el versículo, Jesús transmitió: <b>“El que me recibe, recibe al que me envió”.</b>
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 32,
verse: `<b>31)	El Evangelio de Mateo, capítulo 11, verso 9.</b>`,
meaning: ` <b>
(11:9) ¿Qué saliste a ver? ¿Un profeta? Sí, os lo digo, y (soymás que un profeta.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Se puede decir que un profeta (pravaha) es aquel que enseña conocimientos que nadie ha dicho. En telugu,<b>‘para</b> ‘denotar importancia, y<b>' Vakta'</b> significa el que habla. Por tanto, un profeta es alguien que imparte sabiduría esencial. Sin embargo, Jesús proclamó que Él es más que un profeta. Sólo hay un individuo que supera a un profeta, revelando sabiduría más allá de la capacidad de los profetas. La divina escritura afirma, <b>“Dios no impartió Su sabiduría a ningún ser humano. La sabiduría de Dios sigue siendo desconocida para todos excepto para Dios”</b>.En la última escritura divina, se afirma en el versículo 3:7 que Dios debe transmitir Su sabiduría. Con base en esto, se entiende que si bien Dios viene como profeta a compartir sabiduría, es más que un profeta. La última escritura divina, en 42:51, declara, <b>"Dios no se comunica directamente con los humanos”.</b> Sin embargo, Dios puede manifestarse como un hombre disfrazado y transmitir Su mensaje. Siempre que Dios toma forma humana, incluso si se le llama profeta, Él es más que un profeta. A la luz de la declaración de Jesús en este versículo, se hace evidente que Jesús supera a los profetas y representa una encarnación de Dios. A pesar de que Jesús declaró abiertamente su identidad en múltiples ocasiones, muchos no lograron reconocerlo.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 33,
verse: `<b>32)	El Evangelio de Mateo, capítulo 11, versículo 28.</b>`,
meaning: ` <b>
(11:28) Venid a mí todos los que estáis cansados y agobiados, y yo os haré descansar. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Es un entendimiento común que las personas se cansan cuando cargan peso físico. Sin embargo, el hombre también experimenta cansancio sin siquiera soportar una carga visible. La carga invisible, en este caso, es el pecado (karma), y todo aquel que pasa por experiencias kármicas tiende a sentirse cansado. Los humanos continuamente encuentran karma, excepto durante el sueño, cuando están temporalmente libres de él. Incluso en los sueños, la influencia de El karma persiste, lo que significa un estado constante de trabajo. Considerando la naturaleza perpetua de esta carga, Jesús extiende una invitación a todos, diciendo: <b>“Ven a mí. Te daré el resto."</b>

  Surge la pregunta: ¿Cómo encontramos descanso cuando acudimos a Jesús, dado que constantemente experimentamos karma? La respuesta es la siguiente: cuando Jesús imparte sabiduría divina a quienes lo buscan, el karma de todos aquellos familiarizados con esta sabiduría se consume en el poder de la sabiduría. A través de la destrucción del karma, los individuos se liberan de su impacto continuo, reduciendo el esfuerzo del sufrimiento y brindándoles descanso. Esta invitación se extiende a personas de todas las castas y religiones, como lo demuestra Jesús cuando dijo:<b> “Todos vengan a mí”</b>. Algunos pueden referirse a Jesús como un gurú o profeta cristiano. Sin embargo, etiquetarlo únicamente como cristiano sería inexacto, ya que Su llamado es inclusivo e invita a personas de todos los orígenes. Aquellos que abrazaron Sus enseñanzas y lo buscaron no deben ser confinados a la etiqueta de cristianos. Dado que Dios y la sabiduría divina son universalmente necesarios, Jesús extiende su invitación a todos, como declaró:<b>“Todos vengan a mí".</b>
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 34,
verse: ` <b>33)	El Evangelio de Mateo, capítulo 12, versículos 17, 18, 19, 20 y .</b>`,
meaning: ` <b>
(12:17) Esto fue para que se cumpliera lo dicho por medio del profeta Isaías.<br><br>
(12:18) Aquí está mi siervo a quien he elegido, a quien amo, en quien tengo complacencia; Pondré mi Espíritu sobre él.<br><br>
(12:19) Proclamará justicia (sabiduría) a las naciones; No peleará ni gritará; nadie oirá su voz en las calles.<br><br>
(12:20) No quebrará la caña cascada, ni apagará el pábilo que humea, hasta que haya llevado la justicia (la sabiduría) a la victoria.<br><br>
(12:21) En su nombre pondrán su esperanza las naciones.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hace unos 350 años, un gran hombre llamado Veerabrahmam predijo los acontecimientos y desastres naturales que estaban a punto de ocurrir. De manera similar, un gran hombre llamado Isaías predijo la venida de Jesús. Si examinamos las palabras de Isaías en detalle, todos conocerán la grandeza de sus palabras. Quedó claro de quién estaba hablando Isaías. Isaías vivió muchos años antes de que naciera Jesús. En el capítulo 13, Isaías transmitió algunas cosas más. Al leer estos versículos, se hace evidente que Dios, el Espíritu Santo, habló de Jesús. Al examinar los versículos en los que Jesús habló de sí mismo en las Escrituras y los versículos en los que el Espíritu Santo habló de Jesús, se hace evidente que el que habló de Jesús (el Espíritu Santo) y Jesús son el mismo.

  En el primer verso se dice: <b>“Aquí está mi sirviente”</b>. Hay varias formas de servicio materialista, pero este versículo no se refiere al servicio materialista. Más bien, habla del servicio de Paramatma. Sólo existe una forma de servicio de Paramatma, y ​​la genuina <b>El servicio de Paramatma implica predicar y difundir la sabiduría de Dios a los demás.</b> Debido a que Jesús estaba difundiendo activamente la sabiduría de Dios, el Espíritu Santo declaró: “Aquí está mi siervo”. Cualquiera que propague la sabiduría de Dios se convierte en el mayoría favorecido por dios. Por lo tanto, Paramatma expresó amor por Jesús, diciendo: <b>“Lo amo y estoy encantado con él”.</b> Este sentimiento se articula en<b>15:28, 29 y 30 de la última escritura divina,</b> donde se describe que el Espíritu Santo crea un ser humano a partir de arcilla y sopla Su alma (el alma del Espíritu Santo) en él. Posteriormente, los ángeles reconocen al ser humano como Dios y se postran ante Él. Por lo tanto, de acuerdo con las palabras de Isaías: "El Espíritu Santo pondrá Su espíritu sobre Él", se hace evidente que Jesús, en encarnación humana, es el alma de Paramatma.

  El versículo 19 dice: "Él proclamará justicia a las naciones". Parece que los traductores de la Biblia al inglés tal vez hayan usado un término inexacto. Se supone que debe escribirse como<b>"sabiduría"</b>en lugar de<b>"justicia. La</b> justicia está más estrechamente vinculada al mundo material y, por tanto, puede que no sea el término más adecuado. Mientras La <b>rectitud y la justicia pertenecen a asuntos mundanos, la sabiduría y el dharma están asociados con Paramatma.</b>El uso de “rectitud” y “justicia” en lugar de “sabiduría” parece ser un error de traducción. Se identificaron, revisaron y corrigieron numerosos errores de este tipo.

  El versículo 19 dice: "Él proclamará justicia a las naciones". Aquí “proclamar” significa predicar o enseñar. El verso podría entenderse mejor como, <b>“Él difundirá sabiduría a las naciones”.</b> Esta enmienda se alinea con el hecho de que, después de vivir 30 años, Jesús enseñó Su sabiduría durante aproximadamente dos años y tres meses, como lo indica este versículo. Durante este tiempo, Jesús predicó desinteresadamente su sabiduría en varios lugares, curando a muchas personas con diferentes tipos de enfermedades. Devolvió la vista a los ciegos, permitió caminar a los cojos, curó a los leprosos e incluso resucitó a los muertos. A pesar de sus acciones milagrosas, algunos acusaron a Jesús de ser un mago y lo culparon de actuar contra Dios. Sin embargo, Jesús no se enzarzó en riñas ni en gritos, como lo afirma el comunicado, <b>“Él no peleará ni gritará".</b>

  Jesús transmitió su sabiduría a quienes se le acercaban, pero se abstuvo de gritar en las calles, como se indica en el versículo: <b>“Nadie oirá su voz en las calles”.</b> El versículo también enfatiza que Él no quebrará la caña cascada, subrayando que sus acciones se centraron únicamente en difundir la sabiduría. Además, el versículo destaca el papel de Jesús al garantizar que el poder de la sabiduría, una vez encendido en una persona, permanezca sin extinguir hasta que queme todo el karma asociado con ese individuo. Dado que el karma se presenta en diversas formas, se lo compara con una mecha compuesta de muchas hebras, lo que explica la frase: <b>“Él no apagará una mecha que arde lentamente”</b>.Además, el versículo expresa la anticipación de algunos por la sabiduría de Jesús, afirmando: <b>“En su nombre pondrán su esperanza las naciones”.</b>
</div></div>

</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 35,
verse: `<b>34)	El Evangelio de Mateo, capítulo 12, versículo 31.</b>`,
meaning: `<b>
((12:31) Así que os digo que todo tipo de pecado y calumnia puede ser perdonado, pero la blasfemia contra el Espíritu (Atma) no será perdonada. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
Este versículo tiene un significado particular en las Escrituras. Cuando los seres humanos captan la sabiduría de Dios, esa sabiduría se transforma en fuego (poder de la sabiduría). Este fuego tiene la capacidad de quemar varios pecados (karma). Conocer la sabiduría divina permite a los humanos Eviten los pecados no relacionados con el Atma. Sin embargo, es crucial señalar que el poder de la sabiduría no puede absolver los pecados derivados de la blasfemia y las acciones contra el Atma; tales pecados pueden quedar sin perdón.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 36,
verse: `<b>35)	El Evangelio de Mateo, capítulo 12, versículo 32.</b>`,
meaning: `<b>
((12:32) Cualquiera que hable una palabra contra el Hijo del Hombre será perdonado, pero cualquiera que hable contra el Espíritu Santo no será perdonado, ni en esta era (yuga) ni en la era (yuga) venidera. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  A todos los seres humanos se les llama comúnmente hijos del hombre; la gente común reconoce que sus padres son humanos. Pero Jesús, a pesar de su apariencia exterior de hombre común y corriente, no debe ser categorizado como el hijo del hombre. Cuando Jesús habló de Su Padre, especificó que Su Padre existía en paraloka, no como un hombre en la tierra. En consecuencia, a Jesús se le identifica apropiadamente como el Hijo de Dios. En cambio, el término general “hijo del hombre” se puede aplicar a todas las personas. A pesar de que Jesús se presenta con el nombre y las experiencias de un hombre común y corriente, su verdadera designación es la de Hijo de Dios.

  El donante de semillas de una persona común y corriente no es un ser humano. Cualquier hombre que diga tener hijos no es verdaderamente un padre. Atma, que sirve como cabeza del cuerpo y realiza todas las funciones dentro de él, es el donante de semillas para los humanos y todos los seres vivos. Desafortunadamente, muchos humanos desconocen este hecho. En consecuencia, un hombre afirma que es padre de otro ser humano, aunque no pueda desempeñar ninguna función dentro del cuerpo. Se enfatiza múltiples veces en la primera y segunda escrituras divinas que Atma es el único hacedor de todas las cosas. Si bien una persona, en realidad, no comete ningún pecado porque es incapaz de realizar acciones, la idea errónea de que él es el hacedor conduce a la acumulación de pecado en su cuenta (Jeevatma). Por tanto, una persona se hace responsable de los pecados que no ha cometido. De manera similar, a pesar de que Atma es el verdadero Padre del hombre, el hombre es considerado hijo de un ser humano cuando afirma que su padre es un hombre.

  Jesús es consciente de que Su Padre es el Padre de paraloka. A diferencia de todos los demás, él no nació del Atma. Jesús reconoce que es el Hijo de Dios, el Espíritu Santo. A lo largo de las Escrituras bíblicas, se hace referencia a Jesús como el Hijo de Dios porque declaró explícitamente en muchas ocasiones que Su Padre era el Espíritu Santo. La sabiduría de Dios tiene el poder de perdonar los pecados cometidos contra personas comunes y corrientes. Sin embargo, el pecado de blasfemia contra el Hijo de Dios nunca será perdonado. Este pecado de blasfemia está destinado a ser experimentado por<b>dos yugas</b>– en el yuga actual y en el posterior.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 37,
verse: `<b>36)	El Evangelio de Mateo, capítulo 12, versículos 36 y 37.</b>`,
meaning: ` <b>
(12:36) Pero yo os digo que cada uno tendrá que dar cuenta en el día del juicio de cada palabra vacía que haya pronunciado.
<br><br>
(12:37) Porque por tus palabras serás absuelto, y por tus palabras serás condenado. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Desde el momento del nacimiento, los humanos realizan numerosas acciones y pronuncian muchas palabras. Creen que son personalmente responsables de cada pequeño acto y palabra. En realidad no han hecho nada. Es el Atma dentro del cuerpo el que realiza todas las acciones. Sin embargo, un individuo inconsciente se atribuye falsamente cada acción y palabra a sí mismo y, en consecuencia, las consecuencias kármicas de sus acciones y palabras se acumulan sobre él. Atma almacena todo el karma acumulado en el karma chakra y lo evalúa el día de la muerte. En este día del juicio, Atma evalúa cada acción y palabra del individuo, sopesando los pecados y punya asociados con cada uno. Una persona se considera gnani (persona sabia) si adquiere sabiduría en la vida y, a la inversa, se considera ignorante si realiza acciones con ignorancia. Además, Atma considera si una persona ha adquirido sabiduría (gnani) o permanece en la ignorancia. El juicio se basa en el estatus del individuo como gnani o ignorante, determinando su próxima vida en consecuencia. El Espíritu Santo no juzga a una persona basándose en el karma. Es el Atma, responsable de todas las funciones del cuerpo, el que juzga al individuo el día de la muerte y dirige al Jeeva a la próxima vida. Este día es conocido como el <b>‘día del juicioo'último día,</b>'sirviendo también como el primer día de la próxima vida (cumpleaños). Reconociendo que Atma es el árbitro último en los últimos y primeros días de la vida, uno debe comprender que el Espíritu Santo no participa en estos procesos. El último día puede denominarse el día de contar el karma. Atma es quien realiza todas las funciones del cuerpo. Entendiendo esto, si una persona cree que personalmente no ha hecho nada, no es considerada ni pecadora ni virtuosa. Es crucial reconocer que el Atma determina el karma en las acciones de una persona y la guía hacia el siguiente nacimiento. Dependiendo de los pensamientos de uno, será juzgado como gnani, ignorante, justo o pecador.
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 38,
verse: `<b>37)	El Evangelio de Mateo, capítulo 12, verso 40.</b>`,
meaning: ` <b>
(12:40) Porque como estuvo Jonás en el vientre de un pez enorme tres días y tres noches, así estará el Hijo del Hombre en el corazón de la tierra tres días y tres noches. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Este versículo traza un paralelo entre los acontecimientos que precedieron a la época de Jesús y los sucesos profetizados. Se señala que Jonás, después de ser tragado por un pez gigante, reside dentro de su vientre durante tres días y tres noches. El versículo también profetiza: “Jesús estará tres días y tres noches en el corazón de la tierra”. Si bien es cierto que Jonás pasó tres días y tres noches en el pez, no es preciso afirmar que Jesús, el Hijo del Hombre, vivió el mismo tiempo en el corazón de la tierra. Históricamente, Jesús fue crucificado en la cruz el viernes por la noche y resucitó de entre los muertos antes del amanecer del domingo por la mañana. Según los registros históricos, Jesús probablemente fue crucificado entre las 3:30 p.m. y 4 p.m. el viernes, y su cuerpo fue colocado en una tumba el viernes por la tarde. En consecuencia, Jesús no estuvo en la tumba durante el día del viernes, sino el viernes por la noche y todo el sábado. Se dice que la resurrección ocurrió antes del amanecer del domingo. Por lo tanto, Jesús pasó la noche del viernes y el sábado entero en el sepulcro, resucitando de entre los muertos antes del domingo por la mañana. El versículo parece indicar que Jesús fue sepultado sólo dos noches y un día. En consecuencia, este versículo de las Escrituras puede parecer incorrecto, lo que genera dudas sobre su exactitud. Sin embargo, el versículo de la divina Escritura se considera infaliblemente exacto. Cuando otros cuestionaron la autenticidad de este versículo en particular, yo también experimenté una sensación de duda. Habiendo dicho que en esta frase no hay lugar para la mentira excepto la verdad, tenía que responder a lo que otros me preguntaban. Sin embargo, recordando la guía de Mateo 10:20,<b>“Porque no seréis vosotros los que habléis, sino el Espíritu de vuestro Padre hablando por vosotros.</b> “Disipa la necesidad de miedo al dar una respuesta. Se entiende que el Espíritu, o Alma, es quien plantea las preguntas y proporciona respuestas. Como jueves, nuestro papel es escuchar y comprender lo que Atma está comunicando.

  Aquel a quien comúnmente se le llama Hijo del Hombre es, en verdad, el Hijo de Dios. Aunque comúnmente etiquetamos a Jesús como el Hijo de Dios, es esencial reconocer que Él no es hijo de ningún ser humano sino de Dios mismo. Esta afirmación se hace con certeza, basada en el entendimiento de que Él es Dios encarnado. Mientras que el cuerpo habitado por Dios experimentó la muerte, Dios mismo es inmortal. De hecho, existen cuatro tipos de muerte: muerte natural, muerte no natural, muerte temporal y muerte definitiva. Si bien la mayoría está familiarizada con el primer tipo, aquellos que poseen sabiduría espiritual o "jnanis" conocen los cuatro tipos. La última muerte ocurre cuando Dios toma forma humana o cuando una persona alcanza moksha, fusionándose con Dios. A pesar de la creencia generalizada en la muerte de Jesús en la cruz, nadie puede decir con certeza el tipo específico de muerte que experimentó.

  En este versículo se afirma que Jesús estuvo en el corazón de la tierra durante tres días y tres noches, pero no menciona explícitamente Su muerte. Durante Su crucifixión, la creencia predominante era que Él había muerto en la cruz. Sin embargo, al salir de la tumba el domingo por la mañana, Jesús afirmó que no había experimentado la muerte. Para abordar el escepticismo de sus discípulos, mostró las marcas de los clavos en sus muñecas y pies, junto con la herida de la lanza, dejando claro que no había muerto. Sin embargo, los registros históricos afirman que su cuerpo fue bajado de la cruz y colocado en una tumba después de su muerte el viernes por la noche. Esta aparente contradicción, donde murió el viernes pero apareció el domingo como si no hubiera muerto, genera preguntas sobre la afirmación aparentemente falsa de que <b>Estaría tres días y tres noches en el corazón de la tierra. </b>Según las 12:40, Él no estuvo allí por tres noches y tres días, sino que solo estuvo allí dos noches y un día. Explorar la razón detrás de esta aparente inconsistencia revela una verdad más profunda oculta detrás de la aparente falsedad. Examinemos más a fondo cómo se oculta la verdad dentro de esta aparente contradicción.

  Es cierto que Jesús murió en la cruz, pero nadie sabía que era <b>muerte temporal.</b> Jesús experimentó una muerte temporal entre cuatro tipos de muerte y resucitó de una muerte temporal temprano el domingo por la mañana. Informó a sus discípulos que no estaba muerto. No habría resucitado si hubiera experimentado una muerte natural. Sin embargo, se levantó al tercer día porque tuvo una “muerte temporal”. Por lo tanto, la noción de que Jesús murió en la cruz es una idea errónea y no es cierta. De manera similar, la escritura que dice que Jesús estuvo en la tumba durante tres días es precisa, pero merece una comprensión más profunda. Jesús está presente dentro del cuerpo como Jeevatma, mientras que Atma, el Padre de todo, también reside dentro. Jeevatma experimenta las consecuencias del karma dentro de cada cuerpo humano, mientras que Atma realiza las acciones necesarias de acuerdo con el karma. Atma impregna todo el cuerpo, mientras que Jeevatma se encuentra dentro de la cabeza. Atma ejerce control sobre el cuerpo a través de sus diez partes y órganos. La vitalidad de una persona a menudo se asocia con el movimiento corporal, y se considera que una persona está viva cuando el cuerpo está en movimiento. Por el contrario, cuando las diez partes y órganos dejan de funcionar, acompañado de la ausencia de respiración, la persona se considera muerta. En caso de muerte natural, tanto Atma como Jeevatma salen del cuerpo, lo que resulta en la inmovilización del cuerpo debido a la ausencia de Atma.

  En caso de muerte temporal, ni Atma ni Jeevatma abandonan el cuerpo. Atma sufre una contracción, se contrae desde los bordes exteriores hasta un tamaño diminuto y entra en la cabeza de manera similar a Jeevatma. Durante este período, ninguno de los órganos del cuerpo funciona y la respiración cesa, dando la apariencia de muerte. Comúnmente se percibe al hombre como muerto ya que cesan las funciones corporales tanto externas como internas. La resurrección ocurre cuando el Atma, retomando su función habitual, emerge y comienza a trabajar nuevamente. Este fenómeno se ejemplifica en el caso de Jesús. Durante Su crucifixión, el Atma se contrajo dentro de Su cuerpo, manteniendo este estado durante la noche del viernes y todo el sábado. Temprano el domingo por la mañana, Atma reanudó su función normal, lo que llevó a que Jesús saliera vivo de la tumba. Atma ha experimentado <b>muerte temporal</b> por sólo dos noches y un día. Si bien el Atma en el cuerpo de Jesús estuvo en la tumba durante dos noches y un día, también es exacto decir que Jesús (Jeevatma) estuvo en la tumba durante tres noches y tres días, lo que representa un proceso que nosotros no entendemos completamente. Veamos qué fue.

  Se puede decir que Jesús resucitó debido a las acciones del Atma dentro de su cuerpo. Sin embargo, antes de que Atma muriera en la cruz, Jeevatma ya había sido enterrado en el cuerpo. La conexión entre Jeev Atma y Buddhi se cortó en el cuerpo de Jesús después de que se enteró de su inminente arresto el jueves. Jesús entró en un estado desconocido, completamente inconsciente de su arresto, juicio, azotes y crucifixión, esencialmente siendo enterrado en su tumba corporal. Permaneció inconsciente durante tres días, como en una tumba. A pesar de esto, Atma llevó a cabo todas las funciones corporales necesarias, pero Jesús no se dio cuenta de estas acciones. Para evitar que Jesús experimenta cualquier dolor o sufrimiento asociado con los azotes y la crucifixión, Atma lo envió a un estado desconocido, similar al sueño. Jeevatma permaneció enterrado en el cuerpo hasta que Atma lo despertó el domingo por la mañana. Por lo tanto, el versículo dice: “Jesús estuvo en el sepulcro tres días y tres noches”. La gente sabía que el cuerpo de Jesús fue colocado en la tumba, pero el Jeevatma en Su cuerpo entró en un estado desconocido antes de eso. Posteriormente, el Atma de Jesús experimentó una muerte temporal el viernes por la noche. Sin embargo, las personas, que sólo podían observar cosas visibles, no eran conscientes del funcionamiento de Atma y Jeevatma en el cuerpo de Jesús. Es cierto que Jesús estuvo en la tumba durante tres días y tres noches, y Su Atma estuvo en la tumba durante dos noches y un día.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 39,
verse: `<b>38)	El Evangelio de Mateo, capítulo 13, versículos 13, 14 y 15.</b>`,
meaning: `<b>
(13:13) Aunque ven, no ven; aunque oyen, no oyen ni entienden.
<br><br>
(13:14) En ellos se cumple la profecía de Isaías: Siempre oiréis, pero nunca entenderéis; Siempre verás pero nunca percibirás.
<br><br>
(13:15) Porque el corazón de este pueblo se ha endurecido; apenas oyen con los oídos y han cerrado los ojos. De lo contrario, podrían ver con sus ojos, oír con sus oídos, entender con su corazón y volverse, y Yo los sanaría.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
El profeta Isaías profetizó esto hace mucho tiempo. Tanto entonces como ahora ha habido gente ignorante. Ven con los ojos, oyen con los oídos y desvían su manos incluso después de comprender con su buddhi. Debido a su falta de interés en lo que han visto, oído y conocido, su buddhi se ralentiza para evitar destruir su karma a través de Jesús. Sus oídos se vuelven sordos a la sabiduría divina. Escuchan todo lo que se dice pero no entienden lo que escuchan y se enredan en las cosas materiales. Sólo pueden ver el dinero. Para ellos, los que poseen sabiduría les parecen tontos.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 40,
verse: `<b>39)	El Evangelio de Mateo, capítulo 15, versículos 7, 8 y 9.</b>`,
meaning: `<b>
(15:7) ¡Hipócritas! Isaías tenía razón cuando profetizó acerca de vosotros.
<br><br>
(15:8) Este pueblo me honra con los labios, pero su corazón está lejos de mí.
<br><br>
(15:9) En vano me adoran; sus enseñanzas son meras reglas humanas.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  A menudo hemos dicho: “Dios conoce el asunto de Dios; los humanos no lo saben”. Dios puede hablar de sí mismo, y los humanos llegarán a saber cuándo Dios les revele cómo adorarlo. Aunque Dios ha predicho cómo se le debe adorar, muchos predican diferentes maneras que difieren de lo que Dios ha dicho. Muchos samis y gurús enseñan a la gente reglas creadas por humanos, como upadesas y otros métodos de adoración. Dios mismo revela que “tales upadesas y adoración son inútiles” y no pueden acercar a los humanos a Él. Muchos samis y gurús hablan de Dios en sus discursos, pero predican upadesas y adoraciones anti-Dios y tácitas contra Dios. Aunque estos gurús y samis hablan de Dios y de la sabiduría, realizan adoraciones inútiles sin comprender la sabiduría divina y guían a otros a hacer lo mismo. Por ejemplo, el ayuno no tiene nada que ver con adorar a Dios. No sólo sufren por el ayuno, sino que también molestan al Dios interior. Así es como están dañando al Dios interior. De manera similar, se dijo en el Bhagavad-Gita hace cinco mil años: <b>“No puedes conocerme ni llegar a mí estudiando los Vedas, haciendo donaciones o realizando sacrificios y penitencias”.</b> En el Bhagavad-Gita, Dios dijo que muchas personas Lo honran mucho pero Lo adoran en vano, de una manera adarme. El Señor ha dicho lo mismo ahora en las Sagradas Escrituras.

  Las palabras vienen de la boca, pero los sentimientos vienen del corazón. Aunque muchas personas hablan muy bien de Dios, sus corazones no se alinean verdaderamente con los principios de Dios. A pesar de sus alabanzas, no tienen los dharmas de Dios en sus corazones. Los dharmas de maya tuvieron lugar en sus corazones. Hablan de Dios, pero lo que hacen bajo la influencia de maya es adoración ante-Dios. Muchos gurús llaman sabiduría de Dios a lo que dicen, pero la adoración que realizan, como Dios dijo, no los unirá con Dios. También se advierte en el Gita que esas adoraciones van por el camino equivocado. Sin embargo, los famosos Peeta Patis realizan inútiles yajás, donaciones, ayunos, cantos védicos y penitencias. La Santa Biblia y el Bhagavad-Gita afirman que quienes practican estas prácticas están lejos de Dios. Por lo tanto, de ahora en adelante, no sólo glorifiquemos a Dios con nuestras palabras, sino que también sigamos lo que Dios dijo, dejando atrás la adoración inútil y anti-Dios.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 41,
verse: `<b>40)	El Evangelio de Mateo, capítulo 15, versículo 11.</b>`,
meaning: ` <b>
(15:11) Lo que entra en la boca de alguien no lo contamina, pero lo que sale de su boca, eso es lo que lo contamina. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El hombre consume alimentos por la boca y la variedad de alimentos es enorme y no se limita a un solo tipo. Los individuos pueden clasificarse como vegetarianos o no vegetarianos. Algunos líderes espirituales, como samis y gurús, defienden el vegetarianismo como un camino para comprender la sabiduría de Dios, afirmando que evitar la carne es esencial. Aquí el Señor dijo, <b>“Lo que entra en la boca de alguien no lo contamina, pero lo que sale de su boca, eso es lo que lo contamina”.</b> Existen varias opiniones sobre las prácticas dietéticas para quienes están en el camino de la sabiduría divina. Algunos recomiendan abstenerse de alimentos no vegetarianos, mientras que otros sugieren una dieta exclusivamente de alimentos crudos y sin cocer. Algunos proponen una dieta vegetariana limitada a una comida al día. A pesar de estas diversas restricciones dietéticas, se enfatiza que la santidad o pureza de un individuo no está determinada por los alimentos consumidos. Si bien los alimentos que comemos pueden tener un impacto en la salud física, no influyen en la pureza espiritual. Comer cualquier alimento en particular no obstruye la búsqueda de la sabiduría divina. El hombre consume los alimentos con la boca y articula palabras con el mismo órgano. En particular, el proceso de ingerir alimentos por la boca no plantea ningún problema; más bien, son las palabras que emanan de la boca las que tienen el potencial de contaminar a una persona. Mientras el hombre realiza acciones y expresiones verbales, su verdadera naturaleza se revela a través de sus palabras. <b>Los ancianos sostienen la creencia de que quien posee sabiduría divina es considerado santo, mientras que aquellos que carecen de sabiduría son considerados impuros.</b> Una persona con sabiduría se considera pura según su forma de hablar. Por el contrario, la ignorancia queda expuesta en las palabras de alguien que carece de sabiduría. La contaminación de un individuo se hace evidente a través de su discurso; por lo tanto, Jesús transmitió el versículo antes mencionado. Según las enseñanzas de la Biblia y el Bhagavad-Gita, una persona no se contamina con los alimentos que consume. Más bien, es el karma de uno el que proporciona sustento. Quienes están en el camino de la sabiduría no están sujetos a restricciones dietéticas. Lo que le importa a Dios no es el alimento específico consumido sino la adherencia al camino de la sabiduría. Por lo tanto, cualquier alimento que se consuma de acuerdo con los hábitos de uno es intrascendente para Dios.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 42,
verse: `<b>(41)	El Evangelio de Mateo, capítulo 15, versículos 12 y 13.</b>`,
meaning: `<b>
(15:12) Entonces los discípulos se acercaron a él y le preguntaron: "¿Sabes que los fariseos se escandalizaron al oír esto?"(15:13) Él respondió: “Toda planta que mi Padre celestial no haya plantado, será arrancada de raíz”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando el Señor proclamó que el hombre no se contamina con la comida y que es libre de consumir cualquier alimento sin dejar de seguir el camino de Dios, los fariseos plantean objeciones. Discutieron que las palabras del Señor carecían de sabiduría divina y las rechazaron rotundamente. Al acusar a Jesús de promover la ignorancia, cuestionaron la fuente de su autoridad para enseñar tales principios. Los fariseos, considerándose grandes maestros, afirmaban que sólo ellos poseían la autoridad legítima para impartir sabiduría acerca de Dios. Al enterarse de las objeciones de los fariseos, los discípulos informaron a Jesús de la situación. En respuesta, Él declaró:<b> “Toda planta no plantada por mi Padre celestial será arrancada de raíz”.</b>

  El Padre Paraloka, Paramatma, establece Sus dharmas, que pueden menguar en la Tierra pero nunca perecer verdaderamente. Cuando ocurre tal disminución, Paramatma encarna como Bhagavan para reforzar estos dharmas. A medida que los dharmas se debilitan, los adharmas proliferan. Los dharmas son divinos y pertenecen a Dios, mientras que los adharmas están afiliados a Satanás. Paramatma siembra las semillas de los dharmas, mientras que Satanás siembra las de los adharmas. Tras la encarnación terrena de Paramatma para impartir Sus dharmas, Satanás adopta diversas formas, como eruditos, fariseos, maestros y samis. De esta manera, Satanás imparte su propia versión de sabiduría, persuadiendo a los humanos de que sus fenómenos son sinónimos de los fenómenos de Dios. Los dharmas de maya (Satanás) ocasionalmente socavan los dharmas de Paramatma. Algunos pueden preguntarse por qué los dharmas de maya pueden debilitar los poderosos dharmas de Dios. Paramatma, como Padre Paraloka, encarna como Bhagavan en un lugar y tiempo específicos para propagar Sus dharmas. Aunque estos dharmas pueden ganar fuerza durante ese período, decaen después de unos miles de años. Esto se debe a que el regreso de Dios como Bhagavan ocurre sólo cuando se considera necesario. En contraste, maya crea perpetuamente gurús y samis, convenciéndolos de que su sabiduría es sinónimo de la sabiduría de Dios. A través de ellos, maya propaga sus dharmas continuamente, asegurando una influencia persistente en la Tierra.

  La gente suele sentirse atraída por samis, gurús y babas que operan consistentemente bajo la influencia de Maya, en lugar de la aparición poco frecuente de un Bhagavan no identificado que llega una vez cada mil años. Si bien Dios se manifiesta en un lugar a la vez, Satanás nace en diversas formas en muchos lugares, asumiendo roles como samis, gurús y babas, disminuyendo activamente los dharmas de Dios. De manera similar a un campo invadido por malezas que afectan el crecimiento de los árboles plantados por un granjero, la influencia de Satanás prolifera alrededor de los dharmas plantados por Dios. Para contrarrestar esto, Dios, similar a un granjero diligente, interviene arrancando la mala hierba, incluidas sus raíces, para fortalecer los árboles que ha sembrado. Sin embargo, con el tiempo, muchas malezas pueden reaparecer sin ninguna siembra intencional. Paramatma, comparado con un granjero, inicialmente plantó Sus dharmas. Satanás, a su vez, fomenta la mala hierba (adharmas) alrededor de las plantas (dharmas) de Dios. El debilitamiento natural de la planta de Dios ocurre bajo la influencia de las malas hierbas de maya. Para abordar esto, Dios interviene, <b>extrayendo muchos de los dharmas de maya</b> que han invadido Sudaras. Esto se alinea con la esencia de la declaración de Jesús: Dios desmantela los fenómenos de Satanás y socava los suyos propios, reforzando y fortaleciendo así sus principios divinos.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 43,
verse: `<b>42)	El Evangelio de Mateo, capítulo 15, versículo 14.</b>`,
meaning: `<b>
((15:14) Déjalos; son guías ciegos. Si un ciego guía a otro ciego, ambos caerán en el hoyo. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Individuos bajo la influencia de maya, incluidos pandits y fariseos, que a su vez son parte de Maya, criticaron a Bhagavan Jesús sin comprender la sabiduría de Dios. No son conscientes de la sabiduría de Dios y carecen de toda comprensión de la sabiduría divina. Permanecen ciegos sin visión de sabiduría. ¿Cómo pueden los que carecen de la sabiduría de Dios proclamar y guiar a otros en ella? Pretenden tener visión de sabiduría y difunden lo que perciben como sabiduría de Dios. Las personas, al confiar en estos aparentes videntes, buscan guía, asumiendo que poseen un conocimiento completo de la sabiduría de Dios. Sin que ellos lo sepan, estos propios líderes están ciegos. Imagine un escenario en el que una persona ciega guía a otras que también lo son, afirmando tener vista y guiándolas por el camino. Inevitablemente, el líder ciego cae en un pozo, lo que lleva a los demás al mismo aprieto. De manera similar, aquellos que ignoran la sabiduría de Dios se burlan de aquellos que tienen la verdadera sabiduría, proclamándose grandes gurús. Los que tienen sabiduría no necesitan discutir con ellos. Los individuos que carecen de visión y sabiduría no pueden ascender a la cima del moksham. Aunque muchos pueden seguir a un gurú que carece de visión y sabiduría, ninguno alcanza moksham; en cambio, caen en el <b>pozo de gunas</b>.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 44,
verse: ` <b>43)	El Evangelio de Mateo, capítulo 16, versículos 21 y 22.<br><br>
El Evangelio de Mateo, capítulo 17, versículos 22 y 23.<br><br>
El Evangelio de Mateo, capítulo 20, versículos 17, 18 y 19.<br><br>
</b>
`,
meaning: ` <b>
(16:21) Desde entonces comenzó Jesús a explicar a sus discípulos que debía ir a Jerusalén y sufrir mucho a manos de los ancianos, de los principales sacerdotes y de los maestros de la ley, y que debía ser ejecutado. Y al tercer día resucitará. (Primera vez).<br><br>
(16:22) Pedro lo tomó aparte y comenzó a reprenderlo. “¡Nunca, Señor!” él dijo. “¡Esto nunca te sucederá!”.<br><br>
(17:22) Cuando se reunieron en Galilea, les dijo: El Hijo del Hombre va a ser entregado en manos de hombres.<br><br>
(17:23) Lo matarán y al tercer día resucitará. Y los discípulos se llenaron de tristeza. (Segunda vez).<br><br>
(20:17) Ahora Jesús subía a Jerusalén. En el camino, tomó aparte a los Doce y les dijo.<br><br>
(20:18) Subimos a Jerusalén, y el Hijo del Hombre será entregado a los principales sacerdotes y a los maestros de la ley. Lo condenarán a muerte.<br><br>
(20:19) Lo entregarán a los gentiles para que se burlen y azoten y<br><br>
Crucificado. ¡Al tercer día resucitará! (Tercera vez)

</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jesús, en los capítulos 16, 17 y 20 del Evangelio de Mateo, predijo su propio futuro. Es poco común que los humanos comunes y corrientes predigan el momento de su muerte, dada la incertidumbre y la naturaleza desconocida del futuro. Jesús, sin embargo, reveló las circunstancias de Su muerte no sólo una sino tres veces, mostrando algo extraordinario dentro de Él. Este acto sirvió para demostrar a los que no lo sabían que Él era más que un simple ser humano. La capacidad de hablar de la propia muerte con tanto detalle es una rareza, pero Jesús podía hacerlo porque había prodigando su muerte. Atma es el único determinante del karma de la vida dentro del cuerpo.

  Jesús, en tres ocasiones distintas, habló explícitamente de su muerte inminente. Su capacidad para predecir su destino procedía de su karma predeterminado. Según Jesús, Atma (el juez del karma) es el Hijo de Paramatma. Jesús afirmó constantemente que Su Padre es el Espíritu Santo, identificándose como el Atma responsable de determinar el karma. Habiendo decidido el karma de Su vida, Jesús profetizó que sería entregado a los ancianos y a los principales sacerdotes, que ellos lo matarían y resucitaría al tercer día. Sorprendentemente, estos acontecimientos se desarrollaron exactamente como Él los había predicho. Jesús habló de Su muerte sin miedo, una demostración que todo individuo con discernimiento puede reconocer, indicando que Jesús no era un hombre común y corriente; había algo extraordinario en Él.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 45,
verse: `<b>44)	El Evangelio de Mateo, capítulo 19, versículos 23 y 24</b>`,
meaning: `<b>
(19:23) Entonces Jesús dijo a sus discípulos: “En verdad os digo; Es difícil para alguien rico entrar en el reino de Paraloka.<br><br>
(19:24) Otra vez os digo que es más fácil que un camello pase por el ojo de una aguja, que un rico entre en el reino de Dios.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jesús contó una parábola, diciendo: <b>“Es más fácil que un camello pase por el ojo de una aguja, que un rico entre en el reino de Dios”</b>. Así como es imposible para un camello pasar por el ojo de una aguja, de manera similar, para un individuo rico es un desafío entrar en el reino de Dios. Algunos ancianos creen que la riqueza a menudo engendra arrogancia, un rasgo considerado una de las seis cualidades negativas (gunas). La arrogancia, la quinta de estas cualidades, acompaña a la codicia (kaama), la ira (krodha), la avaricia (lobha), la pasión (moha) y los celos (matsara). La arrogancia está presente en diversos grados en cada individuo. Ya sea al 90%, 80%, 70%, 60%, 50%, 40% o 30%, todo el mundo posee algún nivel de arrogancia. Una persona puede exhibir un 90% de arrogancia, mientras que otra puede tener un 80% y algunas pueden expresar tan solo un 30% de arrogancia.

  La arrogancia no sólo da forma a los pensamientos del Jeevatma dentro del cuerpo, sino que los otros cinco gunas asociados también desempeñan un papel importante. El nivel de arrogancia puede variar y se observa que los pobres generalmente exhiben menos arrogancia que los ricos. El Cuanto más rico es un individuo, mayor tiende a ser su nivel de arrogancia. Alguien con millones de dólares puede manifestar un grado aún mayor de arrogancia y estar más influenciado por los otros gunas. La riqueza tiene el poder de provocar cambios significativos en una persona, a menudo alejándose de la sabiduría. En el contexto de <b>moksham</b> Al compararse con el ojo de una aguja, la analogía se extiende hasta que los ricos son comparables a un camello. Así como un camello no puede pasar por el ojo de una aguja, una persona rica, con la fuerte influencia de gunas similares a las de un camello, enfrenta desafíos para alcanzar la liberación. La analogía enfatiza que así como un camello no puede pasar por el ojo de una aguja, una persona rica, bajo la influencia de poderosos <b>gunas,</b> encuentra obstáculos al entrar en para loka (moksha).
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 46,
verse: `<b>45)	El Evangelio de Mateo, capítulo 22, versículos 36, 37, 38, 39 y 40.</b>`,
meaning: `<b>
(22:36) Maestro, ¿cuál es el mayor mandamiento de la Ley (Dharma Shastra)?<br><br>
(22:37) Jesús respondió: “Ama al Señor tu Dios con todo tu corazón y con toda tu alma y con toda tu mente”.<br><br>
(22:38) Este es el primer y mayor mandamiento.<br><br>
(22:39) Y el segundo es parecido: “Ama a tu prójimo como a ti mismo”.<br><br>
(22:40) Toda la Ley y los Profetas dependen de estos dos mandamientos.
   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Algunas personas se acercaron a Jesús y le plantearon una pregunta sobre el mandamiento más crucial de la ley (Dharma Shastra), con la intención de probarlo y potencialmente burlarse de Él si tropezaba. En respuesta, Jesús respondió rápidamente: <b>“Ama al Señor tu Dios con todo tu corazón, alma y mente”.</b> Enfatizó que esta directiva era el mandamiento principal y más importante, seguido de un segundo mandamiento. El uso del término “mandamiento” en este versículo subraya su significado, ya que Jesús afirma que estos dos mandamientos sirven como fundamento de toda la ley y los profetas. Este versículo se explica a continuación.

  Un mandamiento es esencialmente una instrucción dada para la acción directa. En un contexto más amplio, surge la pregunta: ¿quién es la autoridad que emite la orden? La respuesta está en el entendimiento de que los mayores comúnmente dan órdenes a los más jóvenes. Ampliando esta idea, Dios, el creador del mundo, tiene la máxima autoridad, y lo que Él comunica de manera imponente se considera un <b>mandamientooley</b>. Esta ley comprende actos inalterables y comúnmente se la denomina <b>dharma</b>. El término "dharma" se emplea porque esta ley es inherentemente inmutable. Por ejemplo, el picante del ají es una característica inalterable, o dharma, del ají. Este picante está siempre presente en todos los chilenos. Entonces, se puede decir que el dharma de los chiles es su picante. De manera similar, la acidez es el dharma del tamarindo y la amargura es el dharma del neem.

  Dharma abarca un conjunto de reglas y regulaciones. Si uno pregunta quién tiene el dharma, entonces cualquier cosa creada tiene el dharma, tal como el tamarindo, el chile y el neem creados. Tener dharma. Dado que Dios es el creador de la creación, no posee ningún dharma. El Dios creador está más allá de las limitaciones del dharma. Tanto Atma como Jeevatma, excluyendo a Dios, están sujetos a dharmas. Además, el Prakruti creado también posee su propio conjunto de dharmas. Para comprender Brahma Vidya o la educación espiritual, la comprensión de los dharmas de Atma y Jeevatma se vuelve crucial. Jeevatma, destinado específicamente a comprender Brahma Vidya, <b>Sólo necesita estar familiarizado con el dharma del Atma.</b>

  En este verso, se destaca como significativo el método de comprensión del Atma. El Dharma Shastra profundiza en la naturaleza del Atman, con el dharma más importante descrito como <b>“Amar al Señor tu Dios es el primer y más grande mandamiento”</b>. El Señor al que se hace referencia aquí es principalmente el que nace. Jesús enfatizó que el mandamiento supremo es amar al Dios que nace. Sin embargo, surge una pregunta: cuando Dios es el creador, increado y desprovisto de dharma, ¿cómo puede el nacido principalmente (el Señor) ser también considerado Dios? El dilema se centra en si el que existe por sí mismo es Dios o el que nace es Dios. La respuesta a este dilema se aclara a continuación.

  Dios, el no nacido y creador, no sufrió un nacimiento. Inicialmente, Dios creó a Prakruti. Después de la creación de Prakruti, Dios (Paramatma) tuvo la intención de generar seres vivos. Una vez que se formó Prakruti, Dios decidió no participar en acción directa. Después de crear los cinco elementos (Cielo, Aire, Fuego, Agua y Tierra), Dios deseó un estado de inactividad. Cuando Dios quiso manifestarse en una forma, <b>alma</b> (el Señor) nació para crear, gobernar y, en última instancia, acabar con los seres vivientes. Atma formula reglas y supervisa el ciclo de vida y muerte de todos los seres vivos. Dado que Atma es el creador de todos los seres vivientes, es apropiado referirse a Atma como Dios. <b>En consecuencia, Dios, el creador de Prakruti, es reconocido como la entidad primaria, mientras que Dios, el creador de los organismos vivos dentro de Prakruti, es reconocido como la entidad secundaria.</b>

  El primer Dios, reconocido como Paramatma, creó a Atma, es Dios para Atma y permanece distinto de Atma. El segundo Dios, conocido como Atma, es el creador de los seres vivos. Aunque tanto Paramatma como Atma funcionan como creadores y dioses, <b>el primer Dios (Paramatma) está más allá de los dharmas, mientras que el segundo Dios (Atma) se adhiere a los dharmas. El Dios sin dharmas es el creador primario, mientras que el Dios con dharmas es el creador secundario.</b> Nadie sabe que hay dos dioses en el mundo. Aunque hay dos dioses, siendo el primero el más grande, Atma tiene un significado especial para los humanos como creador de los seres humanos. Es esencial que los humanos adoran exclusivamente al Atma. Se anima a las personas a comprender los dharmas asociados con el segundo Dios. Es importante destacar que todos los fenómenos revelados en las Escrituras se centran en torno al Atma.

  Si una persona desea adorar y orar, está dirigido hacia el segundo Dios, Atma. Nadie puede adorar al primer Dios. No es posible que nadie ore ni lo adore. La adoración y la oración al primer Dios se consideran innecesarias, por esto <b>Dios ni engendra ni nace,</b> como se enfatiza en la última escritura. El Sura 112 refuerza aún más eso. <b>El primer Dios es indiferente a las oraciones.</b>.. Es de destacar que tanto los cristianos como los musulmanes pueden no reconocer la existencia de dos dioses (dos Alá), ya que mantienen la creencia en un Dios singular al que adoran. Sin embargo, la distinción entre <b>el Dios a ser adorado y el Dios creador inicial</b> muchas veces se pasa por alto. Los hindúes desconocen a Dios pero adoran a muchas deidades y caminan por el camino equivocado (camino ignorante) por completo.

  El primer Dios trasciende el reino de los dharmas, haciéndolo incognoscible y más allá de la adoración. Para adorar a Atma, el Dios gobernado por los dharmas, se vuelven esenciales elementos específicos del cuerpo humano. Según el Dharma Shastra, es crucial que Jeeva adore a Atma, el Dios, usando tanto manas como buddhi. Esto se convierte en un dharma significativo. El verso enfatiza, <b>“Ama a Atma, el Dios, con todo tu corazón, alma y mente”.Donde el amor se interpreta como adoración. Este es el mandamiento o dharma más importante... Al interpretar el mandamiento como dharma, "todo tu corazón" significa todo tu buddhi, y "toda tu alma" se refiere a ti, Jeeva. El amor, en este contexto, implica adoración. En el Dharma Shastra se dice que debes adorar a Atma, el Dios, con tu mente y tu buddhi.</b> Con la mención del segundo mandamiento, profundicemos en lo que implica.

  El segundo mandamiento instruye, <b>“Amarás a tu prójimo como a ti mismo.</b> “Estos dos mandamientos forman la piedra angular del Dharma Shastra y las enseñanzas de los Profetas, como se indica en el verso. Esencialmente, sirven como base para los dharmas dentro del reino de Brahma Vidya y como guía proporcionada por los Profetas para impartir estos dharmas. El verso sugiere sutilmente que el amor propio y la priorización del bienestar personal son tendencias universales. Cuando se enfrentan a amenazas, los individuos exhiben un instinto innato de salvaguardar sus propias vidas, llegando a menudo a extremos extraordinarios, incluso a costa de sacrificar posesiones. La profunda esperanza que los individuos albergan para sus propias vidas es evidente en sus oraciones a diversas deidades y en su voluntad de emprender cualquier medida para garantizar su bienestar. Esta observación resalta la tendencia innata de los individuos a priorizar el amor propio. El versículo instruye: “Ama a tu prójimo como a ti mismo”, enfatizando el imperativo de extender al prójimo el mismo grado de cuidado y consideración que uno busca inherentemente su propio bienestar y valora su propia vida.

  Si bien la comprensión convencional de “prójimo” a menudo se refiere a alguien que vive al lado, el versículo “Ama a tu prójimo como a ti mismo” nos insta a extender amor a quien está muy cerca de nosotros, no a nuestro vecino de al lado. Profundizando más, el versículo suscita una reflexión sobre quién es realmente nuestro prójimo. Según el versículo, aparte de ta<b>lma</b>, no hay nadie más dentro de tu cuerpo. Si te identificas como un alma (Jeevatma), hay otra alma similar a ti: el segundo Dios, Atma. En total, hay sólo tres almas, lo que significa dos almas además de ti, siendo una de ellas Paramatma. Sin embargo, referirse a Paramatma como tu prójimo no es práctico, ya que Él es omnipresente y omnipenetrante. Excluyendo a Paramatma, el Atma restante es vuestro vecino. Este concepto se alinea con el entendimiento de que, a excepción de Atma y Paramatma, toda la creación se considera Prakruti femenina, y Atma y Paramatma representan el aspecto masculino.

  Atma, al ser la única entidad masculina similar a ti, es apropiadamente considerada tu vecina. El primer Dios, Paramatma, está más allá del ámbito de la adoración, las relaciones y los dharmas, lo que convierte a Atma en el sujeto legítimo de adoración. Las escrituras divinas afirman consistentemente el mérito de adorar a Atma, etiquetando como<b>' tu Alá’</b>. Esta declaración se reitera en la Sura 6:102, 3:18 y 16:51. El significado de los dos mandamientos, "Ama a tu prójimo Atma como a ti mismo", se subraya en el Dharma Shastra. <b>Adorar al Atma surge como el deber principal de los gurús, predicadores y profetas.</b> Esto es evidente en la respuesta que Jesús dio a un fariseo cuando le preguntaron sobre el dharma más fundamental de la ley. Reflexionar sobre este versículo genera una consideración más profunda de la entidad hacia la que estás dirigiendo tu adoración.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 47,
verse: ` <b>46)	El Evangelio de Mateo, capítulo 23, versículos 8, 9 y 10.</b>`,
meaning: ` <b>
(23:8)	"Pero a ti no te llamarán 'Rabí', porque tienes un Maestro, y todos sois
Hermanos.
(23:9)	Y no llaméis padre a nadie en la tierra, porque un Padre tenéis, y él está en
Paraloka.
(23:10)	Tampoco os llamaréis instructores, porque un solo Instructor tenéis, el Mesías.

</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Algunos pueden referirse a un predicador como padre o considerar a los gurús que predican iguales a un padre. Sin embargo, el versículo afirma que nadie debe ser llamado predicador. Dice que no se llama rabino a nadie, ya que hay un solo maestro y todos los demás son hermanos, como dice el versículo. Un predicador es alguien que enseña, pero el versículo se refiere específicamente a aquel que enseña la sabiduría divina. Según el versículo, sólo una persona conoce la sabiduría divina y nadie más la conoce. ¿Por qué el resto no lo sabe? ¿Quién es el que lo sabe? La respuesta a esas preguntas es la siguiente.

  La sabiduría de Dios no es conocida por nadie excepto por Dios, como se afirma en las divinas escrituras. También se menciona en las divinas escrituras que Dios no transmitió Su sabiduría a ningún ser humano. Esto significa que ninguna persona conoce la sabiduría de Dios. Por tanto, nadie puede enseñar la sabiduría de Dios. Por lo tanto, no deberías ser llamado Rabí, como se indica en el versículo. Sólo Dios puede enseñar la sabiduría de Dios. Por eso, se dice en el versículo que vuestro maestro es uno solo, y Él es Dios. El ser humano no es maestro (maestro), y todos los seres humanos son hermanos, como dice el versículo.

  Todo el mundo tiene padres biológicos. Todo el mundo cree que los padres visibles desde la infancia son los verdaderos padres. Muchos ancianos aconsejan que debes respetar a tus padres. Todos respetan a sus padres biológicos. Se puede decir que no existen otras figuras maternas o paternas excepto los padres visibles. Todo esto está relacionado con el mundo. Sin embargo, todo hombre tiene padres invisibles y desconocidos según la sabiduría divina. Si se pregunta si los padres visibles son padres reales o si los padres invisibles son padres reales, resulta evidente que los padres invisibles son padres reales. La razón por la que decimos esto es que el padre es el donante de semillas de todo ser humano. Respectivamente,<b> Dios (Atma), el padre invisible, es el donante de semillas de todos los seres vivientes.</b>Por tanto, el padre invisible se convierte en el padre real. Lo sepamos o no, nuestro padre biológico es Atma. Por lo tanto,<b> No llames padre tuyo a ningún hombre sobre la tierra, porque uno es tu padre, que está en para loca.,</b> como dice el verso.

  El verso afirma que el predicador visible no es el verdadero predicador, el padre biológico no es el padre real y el gurú visible no es el gurú correcto. Muchos enseñan algo y se les llama gurús. Si te llaman gurú, entonces estás desempeñando un papel que no es adecuado para ti. Sólo Dios puede venir a la tierra como Gurú en cualquier momento. Cuando Dios se encarna como un ser humano, se convierte en el Gurú y enseña sabiduría. Por lo tanto, debemos entender que el<b>la encarnación de Dios como hombre en la tierra es el verdadero Guru.</b>
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 48,
verse: ` <b>47)	El Evangelio de Mateo, capítulo 23, versículo 15.</b>`,
meaning: `  <b>
(23:15) “¡Ay de vosotros, maestros de la ley y fariseos, hipócritas! Viajas por tierra y mar para ganar un solo converso, y cuando lo logras, lo conviertes en el doble de hijo del infierno que tú.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La religión no existió hasta tres mil años después de Kali Yuga. Hace dos mil años, cuando nació el cristianismo, los cristianos surgieron inicialmente como grupos y luego formaron una comunidad cristiana. Después de algún tiempo, la comunidad cristiana afirmó ser una religión cristiana. Así nació la primera religión. Después de afirmar ser una religión cristiana, intentaron expandir su fe. Otros más tarde se identificaron como una religión basada en sus enseñanzas. Así, las religiones fueron creadas una tras otra. Muy pronto, se formaron doce religiones en la tierra. Después de la creación de las religiones, algunas personas se involucraron en la expansión de sus creencias. Viajaron por tierra y mar para convertir a otros a su religión.

  La religión es creada por la voluntad de las personas, no por la sabiduría de Dios. En estas religiones creadas por personas, parece haber sabiduría divina, pero la sabiduría que hay en ellas es contraria a la sabiduría revelada por Dios. Por lo tanto, una persona que confía en la sabiduría y las Escrituras divinas, independientemente de la religión, comprenderá las enseñanzas y la sabiduría de Dios. Si una persona está ligada a la religión y afirma pertenecer a un grupo religioso específico, comprenderá la sabiduría de maya. Si una persona abraza la religión, quedará enredada en el pecado. Por otro lado, una persona sin afiliación religiosa será elegible para ingresar al reino de paraloka.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 49,
verse: `<b>48)	El Evangelio de Mateo, capítulo 24, versículo 35.</b>`,
meaning: ` <b>
(24:35) El cielo y la tierra pasarán, pero mis palabras nunca pasarán.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma (Dios) no habla. El Atma, que reside en el cuerpo, puede hablar. Atma es el segundo creador y el segundo Dios. Atma, presente en el cuerpo, se comunica a través del habla. El segundo Dios (Atma) imparte mucha sabiduría a la humanidad. La sabiduría que se enseña de esta manera se transmite a través de palabras. Las enseñanzas del Atma provenientes del cuerpo, en forma de palabras, nunca desaparecerán, incluso si el cielo y la tierra desaparecieran, como se afirma en el verso. Lo que es importante tener en cuenta aquí es <b>que el cielo y la tierra mencionados pasarán, pero mis palabras nunca pasarán.</b> Pero se puede decir que el cielo y la tierra nunca pasan. Sin embargo, el versículo parece transmitir que el cielo y la tierra pasarán. Por lo tanto, debemos entender que tanto el cielo como la tierra mencionados en el versículo no son el cielo y la tierra que vemos. El cielo y la tierra descritos en el versículo son perecederos. La tierra y el cielo que nunca perecen son de un tipo, mientras que la tierra y el cielo perecederos son de otro tipo. En Prakruti, que tiene la forma del cuerpo humano, están el cielo, el aire, el fuego, el agua y tierra. Todos ellos, el primer cielo, la última tierra y el resto del aire, el fuego y el agua, en la forma del cuerpo son perecederos.<b> El cuerpo humano perecerá, pero la sabiduría impartida por el hombre nunca desaparecerá.</b>
</div></div>
</span>`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 50,
verse: `<b>49)	El Evangelio de Mateo, capítulo 24, versículo 42.</b>`,
meaning: ` <b>
(24:42) Por tanto, estad alerta, porque no sabéis qué día vendrá vuestro Señor.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Siempre que hay una amenaza a los dharmas de Dios en la Tierra, y los dharmas de Satanás se extienden ampliamente, Dios envía una parte de Sí mismo a la tierra para proteger Sus mandamientos (dharmas). Siempre que sea necesario, Dios debe venir como ser humano. Krishna en el Dvapara Yuga y el Señor Jesús en el Kali Yuga vinieron de esa manera. Sorprendentemente, pudimos identificarlos después de que llegaron y se fueron, pero cuando estuvieron en la Tierra, no pudimos identificar quiénes eran. Nadie reconoció cuando Dios mismo vino como Señor. Incluso aquellos que vieron Su gloria no pudieron saber que Él era Dios, sino que pensaron que era grande. En Dvapara Yuga, Krishna dijo: <b>“Iré cuando los fenómenos estén contaminados”.</b> Él vino nuevamente como el Señor Jesús y reiteró Sus dharmas. No habrá ninguna diferencia en los mandamientos que Él dio, ni en Dvapara Yuga ni en Kali Yuga. Pero no hay similitudes en sus nombres, vidas y estilos de vida. Por lo tanto, Satanás enfatizó sus diferencias externas y engañó a los humanos para que no se dieran cuenta de que ambos eran iguales. El hombre necesita algo de sabiduría para saber quién ha venido, quién ha de venir, cuándo ha venido y cuándo puede venir. Mientras el hombre esté en la ignorancia, no sabe la venida de Dios y permanece inconsciente incluso después de que Dios ha venido y se ha ido. Por lo tanto, si las personas quieren conocer la llegada de Dios y reconocerlo, deben poseer sabiduría relacionada con Dios. Hoy en día, la sabiduría de Dios no se conoce y la sabiduría de Satanás está muy extendida. Por eso, <b>“No sabéis en qué día vendrá vuestro Señor</b> “dijo el verso. <b>“Permaneced despiertos para conocerlo</b> “También se menciona en el verso. Aquí <b>“mantenerse despierto" significa tener sabiduría.</b>
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 51,
verse: ` <b>50)	El Evangelio de Mateo, capítulo 26, versículos 26, 27 y 28</b>`,
meaning: `<b>
(26:26) Mientras comían, Jesús tomó pan, y habiendo dado gracias, lo partió y se lo dio a sus discípulos, diciendo: Tomad y comed; este es mi cuerpo."<br><br>
(26:27) Entonces tomó una copa, y habiendo dado gracias, se la dio, diciendo: Bebed de ella todos.<br><br>
(26:28) Esta es mi sangre del pacto (la sabiduría de Dios sin las ataduras de la ignorancia), que por muchos es derramada para perdón de los pecados.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Mientras Jesús y sus doce discípulos comían, Jesús tomó pan, lo bendijo, lo partió, lo dio a sus discípulos y dijo:<b>“Tomad y comed; este es mi cuerpo.</b> “Tomó también jugo de uva en una taza y dijo: <b>“Bebed todos de él; esta es mi sangre”.</b> Comparó el jugo de uva con Su sangre y dio más detalles, afirmando: <b>“Esta es mi sangre del pacto, que por muchos es derramada para perdón de los pecados”.</b>  Estas palabras aparentemente ordinarias de Jesús deben considerarse entre sus enseñanzas más importantes. Lamentablemente, algunos cristianos, que desconocen la esencia de estas palabras pronunciadas a la hora de comer, no logran captar su significado. <b>Algunos interpretan que Jesús habló estas palabras sobre Su pasado o futuro aunque se tratara del presente.</b>

  Jesús dio jugo de uva en una copa y dijo: “Esta es mi sangre”, pero no especificó que era la sangre de Su cuerpo la que fue derramada en la cruz. Sin embargo, muchos predicadores cristianos atribuyen la sangre mencionada en este versículo a la sangre del cuerpo de Jesús derramada en la cruz, afirmando que los pecados de una persona son perdonados porque Jesús derramó Su sangre por los pecadores. Sin embargo, existe una discrepancia entre lo que dice el hombre y lo que dijo Jesús. Jesús no mencionó la sangre de Su cuerpo en el versículo. En tales casos, sería injusto decir que Jesús derramó Su sangre por los pecadores. Ese día, quienes pusieron a Jesús en la cruz, le hicieron derramar su sangre y le provocaron la muerte, cometieron un pecado terrible e imperdonable. Sin embargo, sería incorrecto afirmar que los pecados de las personas fueron perdonados y serán perdonados con la muerte de Jesús.

  Cuando Jesús dio jugo de uva a sus discípulos y dijo:<b> “Esta es la sangre del pacto, que por muchos es derramada para perdón de los pecados”</b>. Usó el tiempo presente, indicando que estaba sucediendo en ese momento, y no mencionó un evento futuro. No aludió al futuro derramamiento de su sangre en la cruz. Por lo tanto, sería incorrecto afirmar que la sangre derramada en la cruz fue para el perdón de los pecados. <b>Los responsables de que Jesús derramara su sangre en la cruz recibieron el pecado, no el perdón del pecado.</b> A lo que Jesús se refería era a la sangre del pacto, que significa la sabiduría de Dios, que no está limitada por la ignorancia. Enseñó esta sabiduría divina diariamente, comparándola con el derramamiento de la sangre del pacto de Su boca. Él impartió el fuego de la sabiduría cada día para quemar los pecados humanos, comparando Sus enseñanzas con la sangre del pacto que fluye de Su boca. El verdadero significado de este versículo sólo puede entenderse mediante un análisis cuidadoso.

  El significado de la declaración no se entiende bien porque la palabra “pacto” a menudo se omite de la frase “sangre del pacto” y solo se considera la palabra “sangre”. No se comprende que “pacto” significa “sabiduría con dharmas”. Otra razón para mencionar “sangre” en el verso no es la sangre física. El cuerpo físico está lleno de sangre, y mientras haya sangre en el cuerpo, el cuerpo está vivo. Si el cuerpo derrama su sangre, el cuerpo muere. Según esto, se sabe que la esencia del cuerpo es la sangre. Mientras comían, Jesús primero tomó pan y se lo dio a sus discípulos, diciendo: <b>“Tomad y comed; este es mi cuerpo.</b> “Aquí comparó el pan con su cuerpo. Luego tomó jugo de uva en una copa y se lo dio, diciendo:<b> “Esta es mi sangre del pacto”</b>. Dijo acerca del pan: “Esto es mi cuerpo. Come esto." Jesús comparó el pan con su cuerpo y les ordenó que lo comieran. Si comes pan, entonces estás comiendo el cuerpo de Jesús. La base y la esencia del cuerpo es su sangre.

  Al comparar la sabiduría divina con la sangre del pacto, el cuerpo de pan se puede comparar con las Sagradas Escrituras y la sabiduría de Dios. De este modo, <b>el cuerpo contiene sangre y las Escrituras contienen sabiduría. Comer el cuerpo significa leer las Escrituras y leerlas revelará la esencia de su sabiduría. Beber sangre significa comprender la sabiduría.</b> Desafortunadamente, la gente suele centrarse sólo en el pan y la uva. Jugo que Jesús dio, sin darse cuenta que el pan representa la divina escritura, y el jugo de uva representa su sabiduría.<b> Jesús comparó las Escrituras con Su cuerpo (pan) y la sabiduría que contiene con la sangre (jugo de uva). El derramamiento de la sangre del pacto se refiere a la sabiduría con los dharmas que se enseñaban en ese momento.</b> Muchos no han reconocido que Jesús comparó las Escrituras con Su cuerpo y su sabiduría con la sangre, lo que lleva a la creencia errónea de que la sangre derramada en la cruz era para el perdón de los pecados.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 52,
verse: `<b>51)	El Evangelio de Mateo, capítulo 28, versículo 18.</b>`,
meaning: `<b>
(28:18) Entonces Jesús se acercó a ellos y les dijo: «A mí me ha sido dado todo poder en Paraloka y en la tierra.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En telugu, "Loca" significa tener experiencias. En Loca encontramos tanto dificultades como placeres. La experiencia de placer se llama Sarga Loca (cielo), mientras que la experiencia de dificultades se conoce como Naraka Loca (infierno). Loca no es un país separado ni un lugar especial; más bien, es la suma de todas las experiencias. Según las experiencias de placer y tristeza, Loca se divide en cielo e infierno. Todas las experiencias del cielo y el infierno tienen lugar en la tierra y no son lugares físicos separados. Entonces, dependiendo de las experiencias, podemos referirnos a ellas como cielo o infierno, pero en realidad, tanto el cielo como el infierno existen en la tierra.

  Hay dos tipos de lokas en la tierra: Ihaka y Paraloka.<b> Ihaloka implica experiencias, mientras que Para Loka no tiene ninguna experiencia.</b> Tanto Iha Loca como Para Loka existen en la tierra. "Para" significa diferente o separado. Para Loka significa algo diferente de experiencias. En otras palabras, Paraloka no tiene experiencia y es distinto de la loca. En telugu, "ser humano" significa aquel que adquiere experiencias a través de manos (mente). Por lo tanto, todas las personas en la tierra pertenecen a Ia Loka. Ningún hombre ha visto Para Loca. Un hombre que usa bodi nunca está exento de experiencias. Por lo tanto, se puede decir que cada persona pertenece a la loca y vive en Ih Aloka. Se puede decir que el que no tiene experiencia está en Paraloka. <b>Se me ha dado toda autoridad en Paralelo y en la tierra”, dijo</b> el verso anterior.

  Si Jesús fuera un hombre común y corriente, estaría en Ihaka y no conocería Para Loca. A pesar de parecer un hombre común y corriente, su cuerpo sólo tenía Atma y no Jeevatma. Atma vivió en el cuerpo de Jesús y pretendió ser un Jeevatma. Tanto Atma como Jeevatma existen en todos los humanos, donde Atma realiza todas las funciones corporales y Jeevatma experimenta alegría y tristeza en el trabajo. De esta manera, se puede decir que Jeevatma en el cuerpo de una persona está en el cielo a veces y en el infierno en otras ocasiones. Pero cuando Dios viene como humano, Su cuerpo no tiene Jeevatma. Aunque Atma actúa en el cuerpo del Hijo de Dios, no experimenta nada. Por eso se dice que está en Paraloka. Como Jesús no era un hombre común y corriente, tiene autoridad en la tierra (Ihaka) y Para Loca. El Espíritu Santo, Paramatma, le dio a Atma (Jesús) autoridad completa. Jesús, que es Atma, es también la cabeza de la sabiduría divina. La sabiduría de Dios ahora es conocida por cualquiera excepto por Dios. Por tanto, el tema de las almas es desconocido para la gente. Jesús enseñó la sabiduría de tres almas e instruyó a Sus discípulos, que conocían la sabiduría de las almas, a enseñar la sabiduría del Atma a todas las personas.
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Mateo",
chapterNumber: 2,
pageNumber: 53,
verse: ` <b>52) El Evangelio de Mateo, capítulo 28, versículos 19 y 20.</b>`,
meaning: ` <b>
(28:19) Por tanto, id y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo.
<br><br>
(28:20) Enseñándoles a obedecer todo lo que os he mandado. Y seguramente, Yo estaré con vosotros siempre, hasta el final de la era (Yuga). </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El Evangelio de Mateo tiene 28 capítulos. Los últimos versículos, 19 y 20 del capítulo 28, contienen el secreto de toda la educación espiritual. La información sobre las tres almas mencionadas en el versículo 19 es la sabiduría más importante de las Escrituras. En este versículo, la palabra "Padre" se usa antes de la palabra "Hijo", lo que requiere una cuidadosa consideración para entenderla. Quienes reflexionen sobre esto sabrán que la secuencia es el Hijo, el Padre y el Espíritu Santo. Para explicar más, <b>uno debe entender que el Hijo es Jeevatma, el Padre es Atma y el Espíritu Santo es Paramatma.</b> No hay otras almas en el mundo además de estas tres. Según el teorema de Thraitha, estas tres almas son Jeevatma, Alma y Paramatma.

  El bautismo significa piedad. En telugu, "Upa" (sub) significa adyacente. Upadesa significa país vecino o adyacente. Más detalladamente, significa “salir de este país donde estás ahora y obtener permiso para ir al país adyacente o vecino”. Primero un funcionario debe dar permiso para viajar al país vecino. A ese oficial se le puede llamar Gurú. Guru significa aquel que es el jefe del país vecino o Para Loca. No importa cuántos gurús haya en la tierra, Dios, el jefe de Peraloca, es el verdadero gurú. Dios, el gobernante de Para Loka, es el verdadero Gurú que nos da el verdadero bautismo cuando viene a la tierra como hombre. Aunque hay muchos gurús en la tierra, todos ellos son gurús sólo de nombre. El bautismo que dan es sólo de nombre.

  Cuando Dios, el verdadero Gurú, no está en la tierra como humano, según la tradición de la sabiduría, los predicadores deben hacer algunos discípulos y darles upadesa. Upadesa es como un permiso al país vecino. En el proceso upadesa, el gurú instruye a los discípulos con agua, con un mantra, una palabra o Yibuti (ceniza sagrada). Upadesa es permiso a Para Loka, y la palabra o agua es como un billete que reconoce la entrada a Para Loca. La mayoría de los gurús utilizan un mantra o una palabra en el proceso upadesa. De manera similar, Jesús dijo a sus discípulos: <b>“Id y haced discípulos a la gente de todas las naciones”.</b> También les dijo a sus discípulos que los bautizaran cuando se convirtieran en discípulos. Al darles a los discípulos el boleto de permiso en el proceso upadesa, Él dijo: "Bautizarlos en el nombre de las tres almas: el Padre, el Hijo y el Espíritu Santo". Según la sabiduría tradicional, el bautismo debe realizarse de esta manera. Entonces, cuando Juan, un Gurú, dio el bautismo, lo administró con agua. Según ese método, Jesús también recibió upadesa de Juan. En aquel tiempo Juan vio a Jesús y habló.

  Esto es lo que dice el Evangelio de Mateo en los versículos 3:14 y 3:15.<b>Cuando Jesús vino a Él, Juan trató de disuadirlo, diciendo: "Necesito ser bautizado por ti, ¿y tú vienes a mí?" Jesús respondió: “Que así sea ahora; es apropiado que hagamos esto para cumplir toda justicia (sabiduría)”.</b>Incluso Jesús dijo que uno debe recibir el bautismo del Gurú según la tradición de la sabiduría. También dije lo mismo sobre el bautismo. Jesús autorizó a sus discípulos a bautizar y dijo: “Todas las personas necesitan ser bautizadas, no sólo una casta o un grupo”. También les dijo que dieran un documento de entrada del Padre, del Hijo y del Espíritu Santo. Jesús dijo a Sus discípulos que hicieran el trabajo porque Dios no siempre podía estar en la tierra como hombre para dar una pajesa. Además del bautismo, Jesús también les dijo a sus discípulos que les enseñaran a obedecer todo lo que les decía.

  Jesús también dijo: “Yo estoy siempre con vosotros”, sin causar dudas en los discípulos de que no eran gurús. En particular dijo, <b>“Estoy contigo siempre, incluso hasta el final de yuga”.</b> Aquellos que saben acerca de los yugas pueden plantear una pregunta cuando escuchen lo que dijo Jesús. Yuga (era) no termina, y otro yuga comienza al final del yuga actual. En ese caso, ¿por qué dijo Jesús que los yugas tienen un fin, cuando no tienen fin? La respuesta es la siguiente. El tiempo es eterno y dura para siempre, tal como Dios (Paramatma). El tiempo, al ser un apodo de Dios, también es eterno. Puesto que el tiempo es Paramatma, las tres almas reciben el nombre del tiempo. Paramatma se divide en tres almas: Jeevatma, Alma y Paramatma. Los nombres de tiempo pasado, futuro y presente se le dan al tiempo para que el tiempo tenga estos tres nombres. El nombre "yoga", necesario para llegar a Dios, se le da al tiempo. De esta manera, los cuatro nombres se dan al tiempo, y se añade la palabra "yoga" al final de los cuatro nombres para indicar que "yoga" es necesario para alcanzar a Dios.

El tiempo se divide en cuatro partes llamadas Fruta, Treta, Dvapara y Kali, respectivamente. La palabra "yoga" se agrega al final de cada nombre, creando los nombres Fruta Yuga, Treta Yuga, Dvapara Yuga y Kali Yuga.<b> Fruta significa aquel (Atma) que lo hace. Trata significa tres. Dvapara significa aquel (Paramatma) que está separado de los dos. Kali significa aquel (Jeevatma) que es destruido.</b> La primera escritura divina se refiere a estas tres almas como <b>Kshara, Akshara y Purushottama.</b> En telugu, Kshara significa Jeevatma destructible, Akshara significa Atma indestructible y Purushottama significa Paramatma, que es superior tanto a Jeevatma como a Atma. En la última escritura divina, versículo 50:21, se hace referencia a estos tres como <b>El pasajero, el conductor y el testigo.,</b> y en la segunda divina escritura, <b>el Hijo, el Padre y el Espíritu Santo. Yoga</b> es necesario comprender a estos tres machos (Purusha), razón por la cual se agrega la palabra "yoga" al final de los cuatro nombres yuga. A través del yoga, Jeevatma puede conocerse a sí mismo; por eso se llama Kali Yoga. Con yoga se conocerá el Atma; de ahí que se le llame Fruta Yogam. Por yoga uno puede alcanzar Paramatma; por eso se llama Trata Yogam y Dvapara Yogam. Aquellos que son ricos en sabiduría divina dieron estos nombres. Con el tiempo, Trata se convirtió en Treta y la palabra yoga se convirtió en yuga. Por eso en el verso, <b>‘fin del yuga ‘</b>se utiliza en lugar de <b>“Fin del yoga".</b> Cuando se usa la palabra correcta, la declaración de Jesús "Siempre estaré con vosotros hasta el final del yoga" puede interpretarse como "Yo estaré con vosotros siempre hasta el final del yoga". Cuando Jeevatma llega al final del yoga, se une a Dios. Cuando Dios y Jeeva están separados, el yoga es necesario para la unión con Dios y Dios estará presente con Jeevatma.<b>Una vez que se completa el yoga, Jeevatma se fusionará con Dios.,</b> y ya no será necesario que Dios esté presente con Jeevatma. Este es el significado detrás de la declaración. <b>“hasta el final del yuga”.</b> El evangelio de Marcos
</div></div>
</span>
`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 54,
verse: ` <b>1)	El Evangelio de Marcos, capítulo 2, versículos 19 y 20</b>`,
meaning: `<b>
(2:19) ¿Cómo pueden ayunar los invitados del novio mientras él está con ellos? No pueden, mientras lo tengan con ellos.<br><br>
(2:20) Pero llegará el día en que les será quitado el novio, y aquel día ayunarán.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Algunas personas se acercaron a Jesús y le preguntaron: “¿Por qué los discípulos de Juan y los de los fariseos ayunan, pero los tuyos no?” Jesús respondió con los siguientes versículos. En este contexto, ayunar se refiere a abstenerse de comer, un significado mundano común. En telugu, la palabra para el novio es "Pelli Koduku", que se traduce como "hijo del matrimonio". En telugu, la frase "hijo del matrimonio" tiene un significado especial porque la palabra "matrimonio" (o "Peli" en telugu) Simboliza a Dios en un sentido espiritual. Por tanto, el “hijo del matrimonio” se refiere al Hijo de Dios. Cuando Jesús, el Hijo de Dios, esté con sus seguidores, experimentan gozo y no ayuno. Sin embargo, cuando el esposo (el Hijo de Dios) les sea quitado, los que estaban con Él ayunarán con dolor porque Él se aleja de ellos. De manera similar, los discípulos de Jesús no ayunan mientras Él esté presente con ellos. Cuando Jesús esté ausente, ayunarán con tristeza. La frase “novio” (el hijo del matrimonio) debe entenderse como una referencia al Hijo de Dios.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 55,
verse: `<b>2)	El Evangelio de Marcos, capítulo 4, versículos 38 y 39</b>`,
meaning: ` <b>
(4:38) Jesús estaba en la popa, durmiendo sobre un cojín. Los discípulos lo despertaron y Le dijo: “Maestro, ¿no te importa si nos ahogamos?”<br><br>
(4:39) Se levantó, reprendió al viento y dijo a las olas: “¡Silencio! ¡Estate quieto!" Luego el viento amainó y todo quedó en completa calma.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando Jesús y sus discípulos cruzaban el mar en una pequeña barca, se encontraron con una tormenta y la barca empezó a llenarse de agua debido a las olas. Los discípulos estaban aterrorizados y temían ahogarse. Despertaron a Jesús y le informaron de la peligrosa situación. Jesús se levantó, reprendió al viento y ordenó a las olas que se calmaran. El viento cesó y la calma descendió sobre el mar. Los discípulos estaban asombrados y se preguntaban unos a otros: "Es un gran milagro, ¿y cómo ha sucedido?" Reconocieron el poder de Jesús, pero no entendieron completamente el motivo. Hay una notable sabiduría en este incidente.

  Jesús no es un hombre común y corriente; hay que enfatizar que Él es Dios, que parecía y se comportaba como un hombre común y corriente. Cuando Dios, el Espíritu Santo, venga en forma humana, nadie puede reconocerlo. El nacimiento de Dios es un secreto cuando Él es un ser humano, y nadie podrá jamás conocerlo a través del conocimiento mundano. Quizás sólo sea posible conocerlo a través de la sabiduría. Hay dos maneras de reconocer la encarnación de Dios basadas en la sabiduría: 1) Se puede saber que hay encarnación de Dios dondequiera que se revelen científicamente sus dharmas, que nadie ha explicado. 2) Se puede decir que Paramatma tiene forma humana dondequiera que se gobierne Prakruti. Nadie puede reconocer la encarnación de Dios sin estos dos métodos.

  Los Devatas se inclinaron ante Ravana Brahma en Treta Yuga. Cuando ordenó los nueve planetas, se supo que no era un hombre común y corriente. Ravana Brahma enseñó dharmas divinos, que nadie conocía, e hizo que la gente los practicara. Así se supo que Ravana Brahma es la encarnación de Dios. De manera similar, se supo que Krishna en Dvapara Yuga era la encarnación de Dios cuando ordenó al Sol y enseñó dharmas en el Bhagavad-Gita. Jesús, que vino como hombre hace 2.000 años, fue reconocido como Dios de dos maneras: dominando el mar y enseñando dharmas divinos. La tormenta durante el viaje por mar pareció servir para hacer que la gente tomara conciencia de quién era Jesús. Aunque la encarnación de Dios es secreta, Dios brindó esta oportunidad de saberlo.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 56,
verse: `<b>3)	El Evangelio de Marcos, capítulo 5, versículos 38, 39, 40, 41, 42 y 43.</b>`,
meaning: `<b>
(5:38) Cuando llegaron a la casa del líder de la sinagoga, Jesús vio un alboroto, y la gente lloraba y se lamentaba a gran voz.<br><br>
(5:39) Entró y les dijo: ¿A qué se debe todo este alboroto y este llanto? El niño no está muerto sino dormido”.<br><br>
(5:40) Pero se rieron de él. Después de echarlos a todos, se llevó al padre del niño. Y la madre y los discípulos que estaban con él y entraron donde estaba el niño.<br><br>
(5:41) Él la tomó de la mano y le dijo: “¡Talita boom!” (Que significa “¡Niña, te digo, levántate!”).<br><br>
(5:42) Inmediatamente la niña se levantó y comenzó a caminar (tenía doce años). Ante esto quedaron completamente asombrados.<br><br>
(5:43) Él dio órdenes estrictas de que nadie se enterara de esto y les dijo que le dieran algo de comer.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Es una gran sorpresa cuando una persona vuelve a la vida después de haber sido declarada muerta. Jesús resucitó a varias personas de entre los muertos durante Su vida. No sólo resucitó a otros, sino que también resucitó él mismo de entre los muertos. Si contemplamos este acontecimiento, se desvelarán algunos misterios desconocidos. Existen cuatro tipos de muerte: muerte oportuna (muerte natural), muerte prematura, muerte temporal y muerte definitiva. Una vez que una persona experimenta la muerte final, no nacerá de nuevo; en cambio, alcanzan la liberación o moksha. La muerte natural es la forma más común de muerte, en la que una persona abandona su cuerpo actual y pasa al siguiente nacimiento. No queda otra opción que pasar al siguiente nacimiento en muerte natural.

  En el caso de una muerte prematura, una persona no muere del todo sino que pierde la mitad de su cuerpo y continúa viviendo con la mitad restante. Aunque parezca increíble, esto es lo que sucede. El cuerpo humano consta de dos partes. El cuerpo humano y los cuerpos de todos los seres vivos constan de partes físicas (visibles) y no físicas (sutiles). En el caso del cuerpo humano, el cuerpo físico se compone de diez partes y el cuerpo sutil se compone de quince partes. En caso de muerte prematura, una persona deja atrás su cuerpo físico de diez partes y continúa existiendo con su cuerpo sutil de quince partes. Como resultado, alguien que ha experimentado una muerte prematura puede ser considerado "medio muerto". Cuando el resto del cuerpo sutil eventualmente muere, esto conduce a la muerte natural y la persona pasa al siguiente nacimiento. Durante una muerte prematura, la persona no es visible, pero continúa existiendo con su cuerpo sutil hasta que experimenta la muerte natural.

  Actualmente, nadie es consciente de lo que sucede durante la muerte temporal. En una muerte temporal, todas las funciones corporales cesan y el Jeevatma permanece en el cuerpo pero en estado de sueño. En la muerte temporal, la persona parece muerta, pero el Jeevatma permanece en el cuerpo. Esto ha llevado a incidentes en los que personas que experimentaron una muerte temporal fueron declaradas muertas y enterradas por error, a pesar de que todavía estaban vivas. Nadie puede detectar que una persona que ha sufrido una muerte temporal no está realmente muerta. Como resultado, ha habido numerosos casos de personas enterradas vivas.

<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
La historia de Abdul Aziz en Gamma y Cachemira
</b></ion-col></ion-row>
  El 7 de diciembre de 2009 se emitió una noticia a las 13:30 horas en el canal TV9. Abdul Azas, un hombre de 60 años, había fallecido una semana antes, el 30 de noviembre de 2009, en Rajadura, un pueblo de Gamma y Cachemira. Siguiendo la tradición islámica, por ser musulmán, fue enterrado.

  Tres días después de su entierro, la policía recibió una denuncia alegando que Abdul Azas no había muerto de forma natural y que podría tratarse de un crimen. La policía registró rápidamente el caso, se dirigió al cementerio y exhumó el cadáver de Abdul Aziz en presencia de sus familiares. Luego su cuerpo fue enviado a un hospital gubernamental para un examen post mortem.

  Durante la autopsia, el médico primero golpeó la cabeza con un cuchillo para examinar el cráneo y la cabeza resultó herida. Ante el asombro de todos los presentes, Abdul Azas, dado por muerto hasta entonces, se despertó y preguntó por la situación. El médico incrédulo, todavía procesando el giro inesperado de los acontecimientos, se sentó y preguntó: “Estamos haciendo una autopsia”. Abdul Azas respondió con calma: "Estoy vivo". El médico informó inmediatamente a los familiares de Abdul Azas del milagroso incidente, y ellos llegaron para llevarlo de regreso a casa.

  Tres días antes, el mismo médico había examinado a Abdul Azas durante quince minutos y había confirmado su muerte. El médico, reconociendo el carácter extraordinario de este suceso, lo calificó de milagro. La gente de la aldea de Rajadura quedó igualmente asombrada de que Abdul Azas, a quien habían enterrado con sus propias manos, hubiera vuelto a la vida tres días después. Hasta el momento han transcurrido seis años y siete meses desde que ocurrió el incidente. Todos los canales de televisión transmitieron esta noticia el mismo día. Dado que este incidente ocurrió en presencia de médicos, sigue siendo innegable y está más allá de la mera superstición.
<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
Un incidente en el distrito de Visakhapatnam
  </b></ion-col></ion-row>
  Srungavarapu Kota está situado en el camino al valle de Araku en Visakhapatnam. Hay un pueblo llamado Saarepuram, ubicado a 12 km de Srungavarapu Kota. En este pueblo vivía una mujer de 67 años llamada Samudramma que padecía hipertensión arterial y diabetes desde hacía diez años. Recibió tratamiento médico del Dr. Dharmalingachari, médico senior de Srungavarapu Kota. El Dr. Dharmalingam Chari era un conocido veterano de 60 años con un título en M.B.B.S.

  Hace seis años, una tarde a las 6 de la tarde, Samudramma fue llevado al Dr. Dharma Liga Chari después de que los médicos lo declararon muerto en un hospital gubernamental. Cuando el médico la examinó, no pudo encontrarle pulso. La declaró muerta y afirmó que no necesitaba ningún tratamiento médico ya que no tenía respiración ni pulso. Su cuerpo fue llevado de regreso a su pueblo, a 12 kilómetros de distancia, para ser enterrado al día siguiente porque ya era de noche. Sin embargo, el cuerpo de Samu Dramma permaneció en el porche durante tres días debido a las fuertes lluvias que duraron dos días. Para sorpresa de todos, a la cuarta mañana se levantó y llamó a sus familiares. Inmediatamente se pusieron en contacto con el Dr. Dharma Linga Chari y se la llevaron después de 15 días. Luego, el médico le preguntó si había visto a los sirvientes de Yama o a Yamaloka, ya que había sido declarada muerta hacía tres días. Ella dijo que no vio nada.

  Este incidente ocurrió hace seis años en presencia de un médico, por lo que no se puede negar ni descartar como supersticioso.
  <ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
  Superviviente de Pyre (Traducido de un periódico telugu) 10 de julio de 2012, Noticias Sakshi
  </b></ion-col></ion-row>
    <b>Chennai:</b> El martes, los médicos confirmaron la muerte de Muthuswamy, de 50 años, de Krishurayapuram, en el distrito Karur de Tamil Nadu. Aconsejaron a sus familiares que procediera con los ritos funerarios. Creyendo que Muthuswamy había sucumbido a la vejez y la enfermedad, los familiares se reunieron en el cementerio para realizar la pira.

    Cuando estaban a punto de iniciar el fuego, la hermana de Muthuswamy, Paapatti, se acercó al cuerpo. Abrumada por el dolor, cayó sobre el cadáver y gritó: “Hermano, ¿me dejarás?” En ese momento conmovedor, las piernas y los brazos de Muthuswamy se movieron y se escuchó un leve gemido. Los familiares, llorosos, se sorprendieron y gritaron: "¡Muthuswamy... Muthuswamy!" Muthuswamy se despertó de la pira como si acabara de levantarse de un sueño y preguntó a sus familiares qué había sucedido. Todos abrazaron a Muthuswamy con alegría y lo llevaron de regreso al hospital. En particular, la hija de Muthuswamy se había casado el día anterior.

    <b>Negligencia de los médicos:</b> Los familiares criticaron a los médicos por su negligencia en el tratamiento de Muthuswamy, que había sido ingresado en un hospital local hace diez días después de caer enfermo. Condenaron a los médicos por el incidente y la noticia se difundió rápidamente por todo el distrito de Karur. Este incidente provocó un debate generalizado y fue visto como otro ejemplo de muerte temporal.

    Si alguien experimenta una muerte temporal, puede sobrevivir en ese estado hasta por un año o más. El resurgimiento puede ocurrir de forma espontánea o con la ayuda de alguien que los toque o los despierte. En muchos casos, las personas que sufren una muerte temporal por la mañana se

  <img src="assets/img/temp_death.png"/>
    Despiertan por la noche, mientras que otras recuperan la conciencia después de una semana o más. Recientemente, un hombre llamado Muthuswamy en Tamil Nadu volvió a la vida después de estar en una pira funeraria. De manera similar, Jesús resucitó a una niña que había experimentado una muerte temporal, declarando que en realidad no estaba muerta. También hay un relato histórico de Jesús revolviéndose. Es importante señalar que todos estos incidentes fueron atribuidos a muerte temporal. Nuestra escritura, <b>'El misterio de la muerte</b>,’profundiza en los cuatro tipos de muerte y su realidad. La lectura de esta escritura le proporcionará una comprensión integral de los distintos tipos de muerte.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 57,
verse: `<b>4)	El Evangelio de Marcos, capítulo 7, versículos 15, 16, 17, 18, 19, 20, 21, 22 y 23</b><`,
meaning: `<b>
(7:15) Nada fuera de una persona puede contaminarse al entrar en ella. <br><br>
(7:16) Más bien, es lo que sale de una persona lo que la contamina.<br><br>
(7:17) Después que dejó la multitud y entró en la casa, sus discípulos le preguntaron acerca de esta parábola.<br><br>
(7:18) “¿Eres tan aburrido?” preguntó. “¿No ves que nada que entre en un ¿Puede alguien de fuera contaminarlos?<br><br>
(7:19) Porque no entra en su corazón sino en su estómago, y luego sale de El cuerpo."<br><br>
(7:20) Continuó: “Lo que sale de la persona es lo que la contamina.<br><br>
(7:21) Porque de dentro, del corazón del hombre, salen los malos pensamientos. Inmoralidad sexual, robo, asesinato,<br><br>
(7:22) adulterio, avaricia, malicia, engaño, lascivia, envidia, calumnia, arrogancia y necedad.<br><br>
(7:23) Todos estos males vienen del interior y contaminan a la persona.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El hombre nace con seis gunas malas y seis buenas. Los gunas también crecen junto con el individuo, influyendo en el buddhi ubicado en la cabeza e impulsando acciones externas bajo su mando. Buddhi instruye a los karmendriyas (órganos de acción) para que realicen acciones fuera del cuerpo, operando de acuerdo con gunas. Como Buddhi trabaja en alineación con los gunas, los gunas negativos influyen en buddhi, que luego dirige las acciones de los kunas, y los sentidos externos responden de acuerdo a las órdenes de buddhi. Estos gunas se manifiestan como cualidades indeseables como la codicia (kaama), la ira (krodha), la avaricia (lobha), la pasión (moha), la arrogancia (madam) y los celos (matsara). Los gunas impactan primero en buddhi y posteriormente gobiernan el cuerpo desde allí. Todos los males cometidos por los humanos tienen su origen en la influencia de los gunas dentro del cuerpo.

  Los alimentos consumidos desde el exterior contribuyen a la salud del cuerpo pero no afectan al buddhi. Estos alimentos se convierten en nutrientes, favoreciendo el bienestar físico. La comida que comen los humanos no tiene un impacto directo sobre el buddhi; ingresa al cuerpo y apoya la salud general. Cuando los alimentos benefician al organismo, lo fortalecen y mantienen una buena salud. Por lo tanto, la entrada de alimentos en el organismo desde el exterior no provoca comportamientos indeseables en los seres humanos. Es el efecto de las gunas que se originan dentro del cuerpo lo que puede resultar en una conducta negativa. En consecuencia, desviarse de las reglas dietéticas puede ser aceptable, pero mantener el control sobre los gunas es crucial.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 58,
verse: ` <b>El evangelio de Marcos, capítulo 3, versículo 35.</b>`,
meaning: ` <b>
(3:35) Quien hace la voluntad de Dios es mi hermano, mi hermana y mi madre.  </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando cuestionamos cuál es la voluntad de Dios, podemos entender que Sus mandamientos (dharmas) representan Su voluntad. Al obedecer Sus mandamientos, nos alineamos con la voluntad de Dios. Por el contrario, si actuamos según nuestros propios deseos sin cumplir Sus mandamientos, violamos Su guía y seguimos la voluntad de Satanás. Cuando Dios se encarne en la tierra como Bhagavan, aquellos que comprendan Su sabiduría, actúen de acuerdo con ella, propaguen Sus enseñanzas y difundan Sus mandamientos se acercarán más a él. Por el contrario, aquellos que eligen el camino de Satanás se convierten en adversarios de Dios. Aquellos que promueven activamente las palabras de Dios y se adhieren a Sus mandamientos son considerados Sus hermanas, hermanos y seguidores más cercanos. Ya sea que Dios esté físicamente presente en la tierra o no, es crucial reconocer que los jnanis (aquellos que poseen sabiduría) dentro de Sus límites y que siguen Sus mandamientos serán considerados cercanos a Dios.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 59,
verse: ` <b>6)	El Evangelio de Marcos, capítulo 4, versículo 17.</b>`,
meaning: `<b>
(4:17) Pero como no tienen raíz, duran poco tiempo. Cuando vienen problemas o persecución a causa de la palabra, rápidamente se apartan.</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En el Gita, el Señor Krishna habla de cuatro tipos de devotos: 1) Los que adoran en los problemas, 2) Los que oran por riquezas, 3) Los que están interesados ​​en saber acerca de Dios, 4) Los que poseen sabiduría (Gnosis). El Señor dijo en el Gita que favorece a los Jnanis. De manera similar, el Señor Jesús habla de cuatro tipos de devotos en la Biblia, pero el versículo al que se hace referencia aquí se refiere solo a uno de esos tipos. Algunas personas sienten curiosidad por la sabiduría de Dios y buscan seguirla. Satanás comienza a tentarlos a su manera. Se enfrentan a muchos problemas en ese proceso. Cuando encuentran dificultades debido a la sabiduría, Satanás comienza a predicar en sus cabezas. Satanás les dice: “Están enfrentando problemas porque conocen la sabiduría. No seas tonto. Puedes escapar de los problemas venideros pretendiendo estar en el camino de la sabiduría”. Aquellos que no comprenden la verdadera esencia de la sabiduría pueden empezar a actuar en consecuencia. Después de algún tiempo, si la persona enfrenta problemas debido a la sabiduría o al Guru, y estos problemas conducen a conflictos con los demás o temores de persecución, maya se aprovechará de la situación. Maya crea este tipo de pensamientos en la cabeza de la persona, y los individuos pueden comenzar a pensar: “Debería haber sido más sabio desde el principio. Me metí en esta situación porque seguí al Gurú en busca de sabiduría, a pesar de que mis parientes cercanos me advirtieron que no lo hiciera. ¿Por qué debería sufrir por esta sabiduría? Es mejor abandonar la sabiduría y el Gurú. Seguir ciegamente la sabiduría sólo conducirá a la ruina para mi familia y para mí. Puesto que estamos en el mundo, debemos conformarnos a sus costumbres. Los que viven en el bosque no enfrentan problemas independientemente de sus acciones, pero sería una tontería que nosotros en la aldea vayamos en contra de las normas”. Tales pensamientos pueden hacer que las personas se distancian de la sabiduría, incluso después de haber estado en el camino durante algún tiempo. Por lo tanto, Jesús dijo que incluso aquellos que han estado en el camino de la sabiduría durante algún tiempo se opondrán cuando haya trabajo y tortura por causa de la sabiduría.

  Aquellos que verdaderamente valoran la sabiduría de Dios y comprenden su importancia no serán víctimas de las tentaciones de Satanás. Uno no puede escapar de las garras de Satanás a menos que valore sabiduría y a su Gurú más que a su esposa, amigos cercanos e incluso a su propia vida, a pesar de saber que pueden enfrentar persecución o muerte en el camino de la sabiduría. Incluso los discípulos del Señor Jesús temieron a los guardias el día de su arresto y abandonaron a su Guru para salvar sus propias vidas. Huyeron con miedo debido a los problemas y la persecución. Si ellos también hubieran estado preparados para enfrentar la muerte junto con el Señor Jesús ese día, sus vidas habrían sido bendecidas. Maya obstruye parcialmente a los discípulos ese día. A diferencia de ellos, debemos permanecer firmes ante cualquier problema o persecución en el camino de la sabiduría. Bienaventurado aquel que está dispuesto a morir por el camino divino en lugar de vivir con miedo en el camino de la ignorancia. En el Bhagavad-Gita, el Señor dijo: <b>“Es mejor morir en el dharma de Paramatma, que es tu dharma, que temer en el camino de Satanás, que no es tu dharma”.</b>
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 60,
verse: ` <b>7)	El Evangelio de Marcos, capítulo 4, versículos 21 y 22.</b>`,
meaning: `<b>
(4:21) Él les dijo: ¿Traéis una lámpara para ponerla debajo de un plato o de una cama? En cambio, ¿no lo pones en su soporte?<br><br>
(4:22) Porque todo lo que está oculto debe ser revelado, y todo lo que está oculto debe salir a la luz.
   </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En la actualidad, muchos gurús dicen que los discípulos no deben compartir su sabiduría con otros. Dicen que su sabiduría es confidencial y sólo debe compartirse con aquellos que han recibido upadesa. Cuando alguien les hace una pregunta, evitan responder. Sin embargo, no se debe ocultar la sabiduría. Dios mismo viene en forma humana y se toma la molestia de transmitir sabiduría. Aunque no conocemos la verdadera sabiduría, no debemos poner excusas para compartir la poca sabiduría que conocemos. La sabiduría es como una lámpara que quita la ignorancia de los demás. Así como un objeto en la oscuridad puede verse a la luz de una lámpara, una cosa desconocida en la ignorancia puede entenderse con sabiduría. Se necesita sabiduría para disipar la ignorancia, así como se necesita una lámpara para disipar la oscuridad. Encender una lámpara y luego guardarla debajo de un cuenco es una tontería. De manera similar, es imprudente no compartir la sabiduría que tienes. Incluso los secretos deben ser revelados. Bhagavan reveló la mejor sabiduría divina del mundo. En ese caso, no se puede ocultar nada de menor valor que la sabiduría. Ningún misterio del mundo puede mantenerse oculto; seguramente saldrá. La sabiduría de Dios es necesaria para todos y no debe mantenerse en secreto. Quienes quieran ocultarlo no pueden hacerlo.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 61,
verse: `<b>8)	El evangelio de Marcos, capítulo 6, verso 4.</b>`,
meaning: `<b>
(6:4) Jesús les dijo: Un profeta no queda sin honor excepto en su propia ciudad, Entre sus familiares y en su propia casa”.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En telugu, un profeta se define como alguien que enseña algo importante. La sabiduría de Paramatma es lo más esencial para todo ser humano. Una persona que imparte esta sabiduría se llama profeta. Los humanos comunes y corrientes no conocen la sabiduría de Paramatma, excepto aquel que proviene de Paramatma. Aquel que viene de Paramatma y nace como hombre se llama Bhagavan o Profeta. El profeta no es honrado en Su propia casa, entre Sus parientes o en Su propio pueblo porque parece ser un hombre común y corriente. No importa cuán bueno sea alguien, es natural que lo subestimen en casa y sus familiares. Como han visto al profeta desde la infancia, los familiares y parientes pueden ridiculizarlo, diciendo que no tiene grandeza y que sólo los tontos lo escucharán. También pueden afirmar que Él no sabe nada más allá de lo que ellos saben. Ni siquiera Dios puede convertirse en profeta para los miembros de su propia familia. Incluso cuando otros reconocen y hablan de Su grandeza, sus parientes y familiares cuestionan qué excelencia posee. No reconocen Su importancia y lo ridiculizan, señalando cosas como que mojó la cama y ensució su ropa interior en su infancia. Por lo tanto, si bien es un profeta para otros, no es honrado en su propia casa ni en su propia ciudad. Según este principio, el Señor Jesús no fue reconocido como profeta por su familia y parientes.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 62,
verse: `<b>9)	El evangelio de Marcos, capítulo 8, versículo 38.</b>`,
meaning: `<b>
(8:38) Si alguno se avergüenza de mí y de mis palabras en esta generación adúltera y pecadora, el Hijo del Hombre se avergonzará de ellos cuando venga en la gloria de su Padre con los santos ángeles. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Algunas personas aprenden sabiduría en la sociedad pero optan por mantenerla en secreto. Sienten que conocer la sabiduría es un error; por eso lo hacen de forma confidencial. También pueden sentirse avergonzados de acudir a un Gurú y aprender sabiduría de él y, por lo tanto, mantenerla confidencial. Algunas personas buscan un Gurú para convertirse en discípulos, pero prefieren un Gurú rico debido a su estatus y riqueza. Les da vergüenza acercarse a un Gurú pobre, incluso si ese Gurú tiene más sabiduría. En consecuencia, eligen un Gurú rico que tal vez no posea mucha sabiduría. Aunque algunas personas han aprendido sabiduría de un Gurú, no quieren que se les llame discípulos de ese Guru. Por eso, muchas personas se sienten avergonzadas y tienen mucho cuidado para no quedar expuestas.

  Uno puede sentirse avergonzado de las cosas materiales, pero no debe avergonzarse de la sabiduría de Paramatma. Consideremos un ejemplo. Dos personas caminan por la calle. Uno es guapo pero pobre y poco inteligente, mientras que el otro es poco atractivo pero rico e inteligente. Ambos son parientes cercanos. Las personas que los vean en el camino los juzgarán por su apariencia exterior, no por su inteligencia. Al rato, un viajero los ve y le pregunta al guapo quién es la segunda persona. La persona guapa se avergüenza de decir que la persona poco atractiva es su pariente cercano debido a su apariencia. En cambio, simplemente dice que se conocen. La persona poco atractiva piensa que ha sido presentada como un conocido y no como un pariente cercano debido a su apariencia. Más tarde, otro viajero los ve y le pregunta al poco atractivo quién es la otra persona. Al ser inteligente, la persona poco atractiva responde de manera similar diciendo que son simplemente conocidos. La persona guapa se alegra de que la presenten como un conocido y no como un pariente. La persona poco atractiva piensa: "También me da vergüenza presentar a esta persona estúpida como mi pariente cercano". La persona poco atractiva seguía el comportamiento de la persona guapa.

  El segundo viajero, que preguntó a la persona poco atractiva, tenía una regla desde hacía muchos años. Su regla era dar 10.000 monedas si se encontraba con parientes cercanos. Sin embargo, aunque ellos eran parientes cercanos, no recibieron las 10.000 monedas porque no se presentaron como tales. En consecuencia, el primer pobre no recibió dinero. Como la segunda persona es rica, no le importa si recibió el dinero o no. La primera persona perdió dinero porque se avergonzó y mintió. Si te avergüenzas de la sabiduría sólo porque a los demás no les gusta, entonces la sabiduría también se avergüenza de ti. La primera persona perdió dinero porque primero se avergonzó y mintió. Por lo tanto, no recibirán liberación de beneficios en el futuro. Basado en esto, el Señor dijo: <b>“Si alguien se avergüenza de mí y de mis palabras, yo también me avergüenzo de ellos”</b>. Por lo tanto, uno debe comprender que está bien avergonzarse de los asuntos materiales, pero no de la sabiduría de Paramatma.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 63,
verse: `<b>10)	El Evangelio de Marcos, capítulo 9, versículo 7.</b>`,
meaning: `<b>
(9:7) Entonces apareció una nube que los cubrió, y desde la nube salió una voz: “Éste es mi Hijo, a quien amo. ¡Escúchalo a él!" </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La mayoría de la gente no es consciente de las nubes en el cielo. Durante la temporada de lluvias, las nubes producen truenos y ruidos fuertes. Las nubes están vivas y realizan muchas tareas, pero se desconocen sus funciones específicas. Según la historia, el Sol escuchó la sabiduría divina que las nubes revelaron por primera vez al comienzo de la creación. No hay secretos desconocidos para las nubes en la tierra. Dios detrás de las nubes dijo acerca de Jesús,<b>“Éste es mi Hijo amado. Escúchalo a él.</b> “Por lo tanto, es la voluntad de Dios que la gente escuche la sabiduría de Dios de Jesús. Lo que Dios dice como hombre es sabiduría de Dios, pero cuando los humanos no escuchan, Dios habla desde las nubes. Aunque los humanos no siempre respetan lo que dicen los demás, valoran lo que dicen las nubes, razón por la cual Dios habló desde las nubes en el cielo.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 3,
pageNumber: 64,
verse: ` <b>11)	El Evangelio de Marcos, capítulo 10, versículos 17 y 18</b>`,
meaning: ` <b>
(10:17) Cuando Jesús se puso en camino, un hombre corrió hacia él y cayó de rodillas. Antes que él. “Buen maestro”, preguntó, “¿qué debo hacer para heredar la vida eterna?”<br><br>
(10:18) “¿Por qué me llamas bueno?” Jesús respondió. “Nadie es bueno, excepto sólo Dios.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Algunos cristianos afirman que la Biblia fue escrita originalmente en hebreo y luego traducida a muchos otros idiomas. Por lo tanto, algunas palabras no se tradujeron correctamente. Por ejemplo, en el primer verso se usa la frase “buen maestro”, y en el segundo, “Dios es bueno”. Sin embargo, basado en lo que dijo Jesús, <b>“Nadie es bueno, excepto sólo Dios</b> “la palabra no debe ser “Buen maestro” ni “Buen Dios”. Una persona que enseña sabiduría con elocuencia puede ser llamada un buen maestro, y alguien que realiza buenas obras puede ser llamado una buena persona.

  Hay buenos maestros y buena gente en la tierra. Por lo tanto, sería menospreciar a Dios comparándolos y decir:<b>“Nadie es bueno, excepto sólo Dios”.</b> Aparte de eso, no hay coincidencia entre las palabras "buen maestro" en la primera oración. Y "buena persona" en la segunda frase. La segunda escritura divina, la Biblia, ha sido traducida a más idiomas que las otras dos sagradas escrituras. La Biblia ha sido traducida a 1.400 idiomas, lo que la convierte en la única Escritura que se ha traducido a la mayoría de los idiomas.

  La primera escritura divina es la base de la segunda escritura divina, la Biblia, y de la última escritura divina, el Corán. El Corán proporciona testimonio en 5:44, 5:46, 5:48 y 5:68 de que <b>la sabiduría de la primera escritura divina, el Taurito (el Bhagavad-Gita), también está presente en las otras dos escrituras.</b> Por lo tanto, cuando consideramos las palabras utilizadas en el Evangelio de Marcos, 10:17 y 10:18, podemos entender que puede haber muchos buenos maestros y buenas personas en el mundo, pero no hay ningún Uttama Purusha (Ser Supremo) entre ellos. Hombres. Por lo tanto, como se afirma en el Bhagavad-Gita, <b>“Sólo Dios es Purushottama”.</b> Se puede decir que en los versos anteriores se usaron palabras no relacionadas, donde la palabra debería haber sido 'Purushottama'. Esto se entiende bien cuando se miran los versos 16, 17 y 18 del capítulo 15 del Bhagavad-Gita, el Purushottama Partí Yoga.

  Según la primera escritura divina, sólo hay un Purusha. Aunque sólo hay un Purusha, Dios está dividido en tres: Jeevatma, Alma y Paramatma. Entre estos tres hombres, <b>el hombre que es mejor que Jeevatma y Atma es Paramatma, también conocido como Purushottama.</b>, como se menciona en el Bhagavad-Gita. Se puede decir que todos, excepto los tres varones, son Prakruti, que es femenino. Todos los hombres y mujeres del mundo están relacionados con la naturaleza femenina. Por lo tanto, en el versículo, Jesús dijo:<b> “No me llames Purushottama (Uttama Purusha). Sólo Dios es Uttama Purusha ".Hay</b> tres religiones principales en la tierra. La gente de cada religión tomó una escritura divina y dijo que esta es nuestra escritura. Sin embargo, en realidad, estas tres escrituras no están relacionadas con ninguna religión específica. Proporcionan sabiduría a todos los seres humanos y, por lo tanto, deben considerarse escrituras destinadas a todos los seres humanos.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Marcos",
chapterNumber: 4,
pageNumber: 65,
verse: `<b>12)	El Evangelio de Marcos, capítulo 16, versículos 15 y 16.</b>`,
meaning: `<b>
(16:15) Les dijo: Id por todo el mundo y predicad el evangelio a todos Creación.<br><br>
(16:16) El que crea y sea bautizado será salvo, pero el que no crea será condenado.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Después de que Jesús fue crucificado y puesto en la tumba, se levantó de la tumba al amanecer del domingo por la mañana. Se apareció primero a María Magdalena y luego a otros discípulos. Jesús se apareció a los discípulos treinta y tres veces después de salir del sepulcro. Les contó los dos versículos anteriores a los once discípulos cuando se sentaron juntos a comer. Como todos los humanos en el mundo están inmersos en la ignorancia, Él ordenó a sus discípulos que fueran a predicar <b>el evangelio, que es la sabiduría de Dios,</b> a ellos. El mismo mensaje se transmite en el versículo 15, <b>“Id por todo el mundo y predicad el evangelio a toda la creación”.</b> Aquí, “todo el mundo” no significa mundos diferentes; se refiere a personas que se ganan la vida en la tierra y sufren de diversas maneras. Jesús también dijo: "Predicad el evangelio a toda la creación". Significa predicar el evangelio, la sabiduría divina, a personas de todas las edades. Dijo que les predicamos la sabiduría divina y les concedieran permiso, "bautismo", para ir a para loca. El bautismo es como un permiso para la liberación o para loca. Aquellos a quienes se les ha concedido permiso para hacer paraloka serán salvos por mi sabiduría y escaparán de la experiencia del pecado. Dijo que los problemas de los pecados castigarían a aquellos que no están bautizados porque no tienen protección contra los pecados.

  El Evangelio de Juan consta de 21 capítulos. En esta escritura, brindaré explicaciones para algunos de los versículos que los humanos no han entendido, han entendido mal o podrían interpretar incorrectamente. He elegido estos versículos como parte del servicio de Dios, sintiéndome como una simple pluma que Dios me usa para hacer esta obra. Anteriormente expliqué algunos versos de la primera escritura divina, el Bhagavad-Gita, y de la tercera escritura divina, el Corán. Como deseo profundamente explicar las tres escrituras divinas, ahora ilustrar algunos versículos de la segunda escritura divina, la Intel (Biblia). La sabiduría proporcionada en esta Escritura es científica y auténtica. Ahora, examinemos el primer versículo del primer capítulo del Evangelio de Juan, que consta de tres frases cortas que deben ser explicadas para entenderlo completamente.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 66,
verse: `<b>1)	El Evangelio de Lucas, capítulo 2, versículo 49.</b>`,
meaning: ` <b>
(2:49) “¿Por qué me buscabas?” preguntó. “¿No sabías que tenía que estar en los negocios de mi Padre?” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Los padres de Jesús lo buscaban y cuando lo vieron quedaron asombrados. Su madre le dijo: “Hijo, ¿por qué nos has tratado así? Tu padre y yo te hemos estado buscando ansiosamente”. En respuesta, Jesús dijo: <b>“¿Por qué me buscabais? ¿No sabías que tenía que estar en los negocios de mi Padre?</b> “Aunque el padre visible (físico) de Jesús también estaba allí, se refería a su Padre invisible (no físico). Es importante aclarar a qué padre se refería Jesús para que podamos entender las tareas del Padre y, en consecuencia, comprender las tareas que Jesús estaría haciendo y por qué dejó a su madre y a su padre.

  En sus propias palabras, Jesús se declaró Hijo del Hombre. En algunas ocasiones también afirmó ser Hijo de Dios. Por lo tanto, Él es al mismo tiempo Hijo del Hombre e Hijo de Dios. Si uno pregunta de quién son hijos todas estas personas, se puede decir que todos los humanos son hijos del hombre. Sin embargo, aquí hay un secreto involucrado. Para que nazca un hombre se necesita un donante de semillas (esperma). Aunque es natural suponer que el padre es el donante de la semilla para el nacimiento de un hombre, es importante señalar que, aunque un hombre parece ser varón en apariencia, no puede ser considerado como varón porque fue creado como modelo para un macho. Tanto el hombre como su esposa pueden incluirse bajo el Prakruti femenino.

  Aunque Jeevatma, que está en un cuerpo humano, es un hombre relacionado con el Atma, no puede engendrar a nadie. El Atma, que está en el cuerpo, hizo nacer a cada ser humano. Ya hemos dicho que Atma realiza todas las tareas del cuerpo y es el donante de semillas de todos los seres. Jesús se refirió a sí mismo como el "Hijo del Hombre", aunque no era un hombre común y corriente, para indicar que su Padre no era el José visible sino Atma que reside dentro de todos los cuerpos humanos. La primera escritura divina nos enseña que toda entidad viviente nacida del útero de una madre tiene a Atma como padre y a Prakruti como madre. Sin embargo, Jesús nació directamente sin un padre físico, ya que era el Hijo del Espíritu Santo (Paramatma), que es diferente de Atma. Por eso se le conoce como el Hijo de Dios. Cuando Jesús se reunió con Sus padres, les dijo que debía estar relacionado con la obra de Su Padre, pero no especificó a qué padre se refería (Atma o el Espíritu Santo). En su propia opinión, se consideraba Hijo de Dios. Jesús no realizó las tareas del Atma, que está en el cuerpo. Estaba enfocado en difundir la sabiduría de Dios. El omnipresente Paramatma lleva a cabo la tarea de difundir la sabiduría divina. Por lo tanto, Jesús tenía la intención de hacer la obra de Su Padre (el Espíritu Santo). El mismo Paramatma creó un cuerpo y lo llenó con Su propia alma. Aunque Jesús era Dios, en ocasiones se refería a sí mismo como el Hijo del Hombre y en otras como el Hijo de Dios para evitar que la gente lo reconociera.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 67,
verse: `<b>2)	El Evangelio de Lucas, capítulo 11, versículos 37, 38, 39, 40 y 41.</b>`,
meaning: `<b>
(11:37) Mientras Jesús hablaba, uno de los fariseos lo invitó a comer a casa. Entonces entró y ocupó su lugar en la mesa.<br><br>
(11:38) Su anfitrión quedó asombrado al ver que se sentaba a comer sin realizar primero la ceremonia de lavado de manos requerida por la costumbre judía.<br><br>
(11:39) Entonces el Señor le dijo: Vosotros, los fariseos, sois muy cuidadosos en limpiar por fuera el vaso y el plato, pero por dentro estáis inmundos, llenos de avaricia y de maldad.<br><br>
(11:40) ¡Tontos! ¿No hizo Dios tanto el interior como el exterior?<br><br>
(11:41) Entonces, limpia el interior dando regalos (dharmas) a los pobres, y estarás completamente limpio.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El último verso dice, <b>“Limpia el interior dando regalos (dharmas) a los pobres y quedarás completamente limpio”.</b> Desafortunadamente, los humanos no han entendido correctamente este versículo y lo han interpretado de diversas maneras. Cuando Jesús menciona “dar regalos”, la gente lo ha interpretado como donar dinero, ropa y comida a los pobres. Sin embargo, Jesús no afirmó que los actos externos de caridad purificaran a una persona desde dentro. Su intención era que la práctica del dharma fuera internalizada, y sólo entonces se limpiarán los males internos. Jesús no dio prioridad a la limpieza externa sino que subrayó la purificación de las cualidades internas (gunas). Por lo tanto, animó a otros a seguir el camino del dharma, que se opone a los gunas. Jesús mismo experimentó la purificación interior y se adhirió al camino del dharma. Por eso instó a otros a recorrer el mismo camino.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 68,
verse: `<b>3)	El Evangelio de Lucas, capítulo 12, versículos 4 y 5.</b>`,
meaning: ` <b>
(12:4) Os digo, amigos míos, que no temáis a los que matan el cuerpo y después ya no pueden hacer más.<br><br>
(12:5) Pero yo os mostraré a quién debéis temer: temed a aquel que, después de haber asesinado vuestro cuerpo, tiene autoridad para arrojarnos al infierno. Sí, os digo: temedle.
  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Los humanos pueden dañar el cuerpo, pero no pueden dañar al Jeevatma interior. Jeevatma, al ser invisible desde el exterior, no se ve afectado. Dado que el cuerpo es visible, otros sólo pueden infligir daño a él, no al Jeevatma. Por lo tanto, no hay necesidad de temer a esas personas. El único al que hay que temer es Dios. Incluso en la muerte, Dios evalúa nuestros pecados, administra castigo y causa sufrimiento. Los vínculos entre individuos se rompen después de la muerte. Incluso si el difunto renace en la casa del asesino, no reconocerán al asesino como un enemigo. Sin embargo, Dios reconoce al Jeevatma incluso después de la muerte y es consciente de sus nacimientos posteriores. Por lo tanto, es crucial temer a Dios, quien nos hace responsables de nuestro karma después de la muerte. No hay necesidad de temer a otros humanos que no pueden dañar al Jeevatma y no nos reconocerán después de la muerte.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 69,
verse: `<b>4)	El evangelio de Lucas, capítulo 12, versículo 25.</b>`,
meaning: ` <b>
(12:25) ¿Quién de vosotros, aferrándose, podrá añadir a su estatura un codo?  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aunque los individuos creen que logran todo a través de su inteligencia, no existe una conexión inherente entre ellos y su inteligencia. Las personas no son independientes y son incapaces de actuar por sí mismas. Son como marionetas manipuladas por el karma. Quienes creen que pueden actuar como quieran se encuentran en un estado de ignorancia sobre sí mismos. Según la estructura que Dios ha creado, el karma está bajo el control de Dios y los individuos están bajo el control del karma. Como el karma los gobierna, no pueden tomar decisiones de forma independiente. Independientemente de cuánto planifiquen y utilicen su inteligencia, no pueden alterar su altura. Si cada individuo se comprende a sí mismo y contempla el alcance de su poder, reconocerá su insignificancia y se dará cuenta de que Dios es infinitamente mayor que ellos.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 70,
verse: `<b>5)	El Evangelio de Lucas, capítulo 12, versículos 33 y 34</b>`,
meaning: ` <b>
(12:33) Vende tus bienes y dáselos a los pobres. Hacemos bolsas que no se gasten, un tesoro en para loca que nunca falte, donde ningún ladrón se acerque y ninguna polilla destruye.<br><br>
(12:34) Porque donde esté vuestro tesoro, allí estará también vuestro corazón.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hay dos tipos de riqueza: una que puede comprar cualquier cosa en el mundo y otra que puede comprar a Dios, que está más allá del mundo. La primera es riqueza material, creada por humanos y visible a simple vista, con la que compramos posesiones materiales, mientras que la segunda es riqueza de sabiduría, creada por lo divino y no fácilmente visible. Hay muchas diferencias entre la riqueza de sabiduría y la riqueza material. Si bien los ladrones pueden robar riqueza material, no pueden robar riqueza de sabiduría, ya que no es un bien físico. Las polillas pueden destruir la riqueza material, pero no pueden dañar la riqueza de sabiduría. La riqueza material no puede eliminar ni siquiera el karma más pequeño, pero la riqueza de sabiduría puede eliminar incluso el karma más grande. Uno puede adquirir riqueza material a través del trabajo, pero la riqueza de sabiduría se obtiene a través de la intimidad con lo divino. La riqueza material se puede evaluar, pero la riqueza de sabiduría no se puede medir. Cuando una persona muere, su conexión con la riqueza material se corta, ya que ni siquiera un centavo va con el Jeevatma. Por el contrario, la riqueza de la sabiduría acompaña al Jeevatma incluso después de la muerte, ya que toda la sabiduría que uno gana en la vida se transmite a futuros nacimientos. Los ricos del mundo pueden ser respetados en la sociedad pero no en la presencia de Dios. Dios reconoce a aquellos que tienen riquezas de sabiduría, incluso si otros humanos no los respetan. En resumen, existen muchas diferencias entre la riqueza material y la riqueza de sabiduría.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 71,
verse: `<b>6)	El Evangelio de Lucas, capítulo 12, versículo 49.</b>`,
meaning: ` <b>
(12:49) Fuego he venido a traer sobre la tierra, y cómo quisiera que ya estuviera encendido. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En este contexto, el término "fuego" no se refiere al incendio ordinario que vemos a diario. El fuego es de dos tipos: fuego ordinario y fuego extraordinario (fuego de sabiduría). El fuego ordinario puede quemar leña y otros objetos, mientras que <b>gnanagni (fuego de la sabiduría) quema la leña del karma.</b> Mientras los humanos quedan atrapados en el pecado y sufren dificultades, Dios desciende para traer el fuego de la sabiduría para quemar su karma y liberarlos del ciclo de nacimiento y muerte, ayudándolos a llegar a Dios. Cuando Dios imparte sabiduría, la compara con el fuego porque obtener sabiduría puede conducir a la liberación. Dios trajo este fuego a la tierra en el pasado y se encendió por un tiempo antes de desaparecer. Jesús vino a reavivar el fuego y mantenerlo encendido. Quería que el fuego siguiera ardiendo, por eso proclamó que había venido a encender un fuego donde no lo había, y deseó que el fuego que había encendido previamente persistiera.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 72,
verse: `<b>7)	El Evangelio de Lucas, capítulo 12, versículos 51, 52 y 53.</b>
`, meaning: `<b>
(12:51) ¿Crees que vine a traer paz a la tierra? No, te lo digo, sino división.<br><br>
(12:52) De ahora en adelante habrá cinco en una familia divididos unos contra otros, tres contra dos y dos contra tres.<br><br>
(12:53) Estarán divididos, padre contra hijo, hijo contra padre, madre contra hija, hija contra madre, suegra contra nuera y nuera contra suegra.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma revela su sabiduría cuando se encarna en la tierra en la forma de Bhagavan. La sabiduría de Bhagavan genera sentimientos opuestos entre quienes están en el camino de Satanás. En tales casos, surgen diferencias de opinión entre quienes comprenden la sabiduría y quienes no. Quienes poseen sabiduría no estarán de acuerdo con quienes carecen de ella. Cuando una situación de este tipo se desarrolla dentro del mismo hogar, los miembros de la familia pueden volverse hostiles entre sí. Si alguien intenta adquirir sabiduría en casa, Satanás estará alerta. Satanás fomenta la división, enfrentando a padres contra hijos, hijos contra padres, madres contra hijas, hijas contra madres, suegras contra nueras y nueras contra suegras. Incluso Bhagavan (Gurú) puede aconsejaros que no estéis de acuerdo con aquellos que se oponen a vosotros en cuestiones de sabiduría, sabiendo que marido y mujer están peleando a causa de Su sabiduría. En consecuencia, su disputa puede intensificarse en lugar de disminuir. Por lo tanto, <b>el Señor dijo: “No he venido a traer reconciliación sino división”.</b> Crees que Bhagavan, que ha venido a enseñar sabiduría en la tierra, te aconseja prestar atención a tu familia mientras descuidas Su sabiduría? ¿Crees que el Señor, que te ordenó cortarte la mano si obstruía la sabiduría de Dios, te sugiere reconciliarte con tu esposa y tus familiares? Nunca. Os exhortó a no comprometernos con ellos, incluso si eso significa sacrificar vuestra vida. Por eso, muchos conflictos surgen en las familias debido a la sabiduría de Dios. En particular, dondequiera que se proclame la verdadera sabiduría, habrá discordia dentro del hogar. No hay desacuerdos cuando la sabiduría de Satanás se presenta bajo la apariencia de sabiduría divina. Todo el mundo tiende a apoyar esa sabiduría. Uno puede discernir que si todos los miembros de la familia se vuelven adversarios debido a la sabiduría divina, entonces esa sabiduría es genuinamente sabiduría de Dios.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 73,
verse: `<b>8)	El evangelio de Lucas, capítulo 13, verso 3.</b>`,
meaning: `<b>(13:3) A menos que cambien de opinión, todos ustedes también perecerán.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Manas (mente) es la parte más importante del cuerpo, llamada así porque retiene recuerdos. Opera constantemente bajo la influencia de maya (Satanás), reforzando las preocupaciones mundanas. Desde el nacimiento de una persona, la mente ha estado alineada con Satanás y nunca ha funcionado en alineación con Dios. La transformación de tal mente de la influencia de Satanás al alineamiento de Dios se denomina “cambio de mentalidad”. Nadie puede pasar al lado de Dios sin un cambio de opinión. Cuando la mente sufre una transformación, comienza a manifestarse gnagni (fuego de la sabiduría). A través de la destrucción de todo su karma por gnagni, una persona se une a Dios sin experimentar nacimiento ni muerte. Si la mente permanece sin cambios y continúa dictando pensamientos, un individuo debe pasar por ciclos de nacimiento, muerte y soportar los tormentos del infierno. Por lo tanto, es imperativo que todos cambien de opinión.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 74,
verse: ` <b>9)	El Evangelio de Lucas, capítulo 14, versículo 26.</b>`,
meaning: `<b>
(14:26) Si alguno viene a mí y no aborrece a su padre y a su madre, a su esposa y a sus hijos, a sus hermanos y hermanas, e incluso a su propia vida, tal persona no puede ser mi discípulo. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si alguien escucha esto, se sorprenderá y preguntará: “¿Qué clase de sabiduría es ésta? ¿Qué clase de gurú? ¿Qué clase de discípulos? Alguien puede acudir a un Guru y preguntarle: “¿Algún Gurú les dice a sus discípulos que no son discípulos a menos que regañen a su familia?” Necesitamos pensar aquí. Si una persona regaña a todos los de su casa, el Gurú no está loco como para complacerlo y aceptarlo como discípulo. No se aconseja odiar a todos indiscriminadamente. El Gurú se complace cuando un discípulo, de acuerdo con sus sentimientos, regaña a los ignorantes que caminan por el camino de Satanás. Cuando un discípulo se opone a los ignorantes, el Gurú percibe que el discípulo está alineado con sus enseñanzas y las acepta. Si un discípulo apoya a los ignorantes en lugar de contradecirlos, el Gurú no los reconocerá como discípulos. El odio es común entre dos grupos: los jnanis (sabios) y los ignorantes. Si padre y madre, esposa e hijos, hermanos y hermanas están en la lista de ignorantes, el discípulo debe oponerse a ellos. El Señor dijo que aquel que no se opone a los ignorantes y favorece a los familiares no es su discípulo. Se enfatiza que no se debe ceder en la ignorancia. Jesús dijo que el discípulo debe abandonar a su madre, a su padre, a sus hermanos y hermanas, a su esposa y a sus hijos si obstruyen el camino a la sabiduría.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 75,
verse: ` <b>10)	El Evangelio de Lucas, capítulo 14, versículo 27.</b>`,
meaning: `<b>
(14:27) El que no lleva su cruz y me sigue, no puede ser mi discípulo. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando se amontona leña, resulta más fácil recogerla y transportarla a largas distancias; de otra manera no sería posible transportarlo. De manera similar, cuando los 108 gunas en la mente de una persona están unidos en una condición disfuncional, se convierten en un paquete. En manos del hombre. Hay dos tipos de gunas, buenas y malas, en el cuerpo humano... <b>Los seis malos gunas son la codicia (kaama), la ira (krodha), la avaricia (lobha), la pasión (moha), la arrogancia (madam) y los celos (matsara). De manera similar, los seis buenos gunas son caridad (dana), misericordia (daya), benevolencia (audarya), desapasionamiento (vairagya), humildad (vinaya) y amor (prema).</b>Cada uno de los seis gunas malos y buenos se divide a su vez en nueve partes. Así, las seis gunas malas se dividen en 54 partes, y las seis gunas buenas también se dividen en 54 partes. En conjunto, los gunas buenos y malos suman un total de 108.

  Las 108 partes de gunas se llaman<b>maya</b>en la primera escritura divina. En la segunda escritura divina, se les llama <b>Satán.</b> En la última escritura divina, estos gunas se denominan <b>Demonios.</b> Dios mismo habló de Maya como “Una-mayi mamá maya” en la primera escritura divina. Significa que maya, que Dios creó, tiene la forma de gunas en el cuerpo humano. Dios creó a maya principalmente para evitar que los humanos siguieran el camino divino. Maya puede hacer que una persona permanezca a su lado en lugar de seguir el camino de Dios. Se puede decir que maya es guna, o guna es maya. En telugu, maya significa "invisible". Maya está presente en la cabeza sin ser visto. Maya, que está presente en nuestro cuerpo, también se llama Cruz. En el sentido espiritual, maya se compara con una pitón, mientras que Atma se compara con una paloma.

  Una pitón es una serpiente poderosa. Quien ha sido atrapado por ella no puede volverse libre. Eso significa que maya es fuerte. Jesús dijo que quienquiera que controle, agrupe y sostenga a maya tan fuerte en su mano es mi discípulo. Jesús dijo que el conquistador de maya era verdaderamente mi discípulo. <b>Quien captura a maya (la Cruz) y sigue el camino de Dios cargándola es un verdadero discípulo de Dios.</b> Aquel que lleva la Cruz de la que hoy hablamos mucho y sigue a Jesús es Su discípulo, como se afirma en este versículo.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 76,
verse: `<b>11)	El Evangelio de Lucas, capítulo 18, versículo 29.</b>`,
meaning: `<b>
(18:29) “En verdad os digo”, les dijo Jesús, “nadie que por causa del reino de Dios haya dejado casa, o esposa, o hermanos, o hermanas, o padres o hijos, dejará de recibir mucho más. En este siglo, y en el siglo venidero, vida eterna”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El reino de Dios se refiere a Moksha, que es la liberación del ciclo de renacimiento. Una vez que una persona alcanza Moksha (liberación), no renace en la tierra y no sufre por Satanás. Moksha significa ser liberado de Satanás y fusionarse con Dios. En otras palabras, una persona se vuelve uno con Dios. La unión del Jeeva, que es pequeño y tiene una forma específica, con el Dios infinitamente vasto, ilimitado y omnipresente es un logro sobresaliente. Para alcanzar esta posición, una persona debe seguir el camino de la sabiduría y estar dispuesta a abandonar los apegos a su cónyuge, hijos, padres, hermanos y hogar si estos apegos obstaculizan su viaje espiritual. Tal persona se vuelve un completo gnani en este mundo y alcanza a Dios en Paraloka. Renunciar a un cónyuge, hijos, hermanos y padres es una decisión importante porque maya rodea a una persona y la vincula a sus seres queridos y cercanos. Prahlada no contó a su padre, Mirabai dejó a su marido y a sus parientes, y Buda abandonó a una joven esposa, a un hijo de un año, a sus padres, a su hogar y a su reino por la sabiduría. Sin embargo, aquellos que se distancian ellos mismos de sus seres queridos pueden acercarse a Dios. Para adquirir a alguien que es eterno, dejar atrás a alguien que se queda contigo por un tiempo es una decisión inteligente. Sin embargo, tal decisión puede parecer una tontería al mundo. Es raro encontrar a alguien dispuesto a dejar todo atrás en el reino de Satanás por amor a Dios. Porque cuando alguien tiene la idea de Dios en su mente, Satanás se concentra principalmente en él y lo desvía del pensamiento y del camino de la sabiduría. Es imposible que una persona venza el poder de Satanás y lo conquiste, como se afirma en el Bhagavad-Gita, Vignana Yogam, versículo 14. Uno podría preguntarse cómo es posible acudir a Dios cuando el poder de Satanás es tan grande. ¿Por qué intentarlo y fracasar? Sin embargo, si una persona confía completamente en Dios y continúa sus esfuerzos a pesar de su incapacidad para enfrentarse a Satanás, Dios mismo la alejará de Satanás y la acercará a Su lado. Por lo tanto, la única manera que tiene el ser humano más pequeño de derrotar a Satanás es entregarse completamente a Dios. El Bhagavad-Gita afirma,<b> “Tantita metam maya”</b>, lo que significa<b>“Lo sacaré de Maya”</b>sobre aquellos que confían completamente en Dios. Por lo tanto, si una persona pone toda su confianza y carga en Dios, Dios puede salvarla de Satanás.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 77,
verse: `<b>12)	El Evangelio de Lucas, capítulo 21, versículo 15.</b>`,
meaning: ` <b>
(21:15) Os daré palabras y sabiduría que ninguno de vuestros adversarios podrá resistir ni contradecir.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
Cuando los niños pequeños, que tienen algún conocimiento de la sabiduría, cuestionan las enseñanzas de renombrados predicadores y gurús, no encuentran respuestas en sus enseñanzas. Por lo tanto, los predicadores han establecido la regla de que nadie debe cuestionar sus enseñanzas. La principal razón de la falta de respuestas en sus enseñanzas es que no se basan en la ciencia. La enseñanza no científica no puede proporcionar respuestas a preguntas racionales. Los predicadores continúan enseñando, pero no responden cuando se les pregunta. Cuando Paramatma encarna como Bhagavan, enseña la verdadera sabiduría de Paramatma. Por lo tanto, aquellos que conocen la sabiduría enseñada por Bhagavan pueden enseñar y responder cualquier pregunta. Los adversarios que ven a los devotos de Bhagavan, que conocen la sabiduría de Paramatma, acuden a ellos con el ego de que son gurús y jnanis y les hablan de manera contradictoria. La sabiduría contra la cual los adversarios no pueden hablar ya se les ha dicho a los devotos en ese momento. La palabra de Dios dice que muchas personas tienen celos y aumentan la rivalidad contra los que conocen la verdadera sabiduría. Incluso cuando Dios descendió, los adversarios lo enfrentaron y le dijeron: “Aún no conoces la sabiduría y necesitas ir a un lugar específico para aprender la sabiduría genuina”. Algunas personas vinieron a mí y me dijeron: "No conoces la sabiduría". Estas personas también acudirán a ti. Dios dijo en el versículo anterior que te daría la sabiduría para responderlas.
</div></div>
</span>`
},
{
chapterName: "El evangelio de Lucas",
chapterNumber: 4,
pageNumber: 78,
verse: ` <b>13)	El Evangelio de Lucas, capítulo 21, versículo 17. </b>`,
meaning: `<b>
(21:17) Todos os odiarán por mi causa.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La sabiduría revelada por Bhagavan, el Hijo de Dios, está contra aquellos que están poseídos por Satanás. Existe la posibilidad de que la gente común malinterprete esta sabiduría, ya que parece estar totalmente en contra de los predicadores y gurús que poseen algunas sabiduría. A los pandits, predicadores y gurús a menudo no les gustan las palabras de quienes predican el nombre de Dios. Ellos y las personas que los siguen comienzan a odiar a quienes predican el camino de Dios porque consideran que las palabras de Dios son contrarias a sus enseñanzas. Por lo tanto, Dios dijo en el versículo anterior:<b>"Todos te odiarán por mi culpa"</b>. La primera parte de la Biblia tiene 39 partes. La segunda parte de la Biblia tiene 4 evangelios. La tercera parte de la Biblia tiene 23 partes.

  En la primera y tercera parte, otros jnanis transmitían la sabiduría de Dios. Jesús, encarnación de quien pronunció la primera escritura divina, reiteró versículos de los cuatro evangelios. Por lo tanto, para entender esto, la pregunta,<b> ‘¿Quién os advirtió que huyáis de la ira venidera?</b> Se plantea. Por lo tanto, se puede decir que este versículo, colocado por encima de todos los demás, tiene un gran significado.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 79,
verse: `<b>1)	El Evangelio de Juan, capítulo 1, verso 1.</b>`,
meaning: `<b>(1:1) En el principio era el Verbo, y el Verbo estaba con Dios, y el Verbo era Dios.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El Evangelio de Juan consta de 21 capítulos. En él, daré explicaciones sobre algunos de los versículos que los seres humanos no han entendido, han comprendido mal o han podido interpretar incorrectamente. He elegido estos versículos como parte del servicio a Dios, sintiéndome como un mero bolígrafo que Dios me utiliza para hacer este trabajo. Anteriormente, he explicado algunos versículos de la primera escritura divina, el Bhagavad-Gita, y de la tercera escritura divina, el Corán. Como deseo profundamente explicar las tres escrituras divinas, ahora ilustraré algunos versículos de la segunda escritura divina, el Injeel (Biblia). La sabiduría que proporciona esta escritura es científica y auténtica. Examinemos ahora el primer versículo del primer capítulo del Evangelio de Juan, que consta de tres frases cortas que deben explicarse para comprenderlo plenamente.

  Analicemos ahora las tres primeras palabras del Evangelio de Juan en la segunda divina escritura.
  <b>
  La Palabra estaba al principio.

  La Palabra estaba con Dios.

  La Palabra era Dios.
  </b>
  En las enseñanzas de la Biblia, hagamos referencia a estos tres versículos como los versículos iniciales de la Biblia. Algunos pueden argumentar que los versículos del Génesis deberían considerarse las primeras palabras de la Biblia. Sin embargo, ya hemos explicado nuestro método. Consideramos las enseñanzas que los humanos necesitan como Escritura y discutiremos los primeros versículos de ellas. Siguiendo este principio, Bhagavan Jesús enseñó los cuatro evangelios. Aunque el Evangelio de Juan fue el último, comenzó con las enseñanzas. De manera similar, tomamos el verso 11 del segundo capítulo como el comienzo del Bhagavad-Gita porque la sabiduría de Dios comenzó desde allí. También tomamos los versos 11, 12 y 13 del Sankhya-Yoga como las tres primeras oraciones. Asimismo, los primeros versos fueron tomados del capítulo 43 del Intel (la Biblia), y tomamos tres versos del Taurito (Bhagavad-Gita) como las tres primeras oraciones. Aquí, sin embargo, tomamos tres oraciones de un versículo del Evangelio de Juan como las primeras tres oraciones, en lugar de tres versículos consecutivos. La secuencia de oraciones no es importante; tomamos las que transmitían tres significados como tres oraciones. Aunque se trata de tres frases cortas, cada una de ellas tiene un significado profundo.

  Estas tres frases transmiten significados sutiles. Las tres primeras frases del Bhagavad-Gita ahondan en los conceptos de Jeevatma y Atma. Sin embargo, las palabras iniciales del Evangelio de Juan enseñan un significado especial. La iniciación del Bhagavad- El Gita analiza los tres componentes: Jeevatma, Alma y el cuerpo. Por el contrario, las tres frases iniciales del Evangelio de Juan exploran los tres aspectos: Sabiduría, Atma y Paramatma. Sin embargo, estas frases no aclaran explícitamente las posiciones de Atma y Paramatma. Aunque el término "Dios" aparece en dos de las frases, la sabiduría y el Atma siguen siendo ambiguamente identificables. Ahora, analicemos la primera frase del trío.

  La primera frase es <b>“La Palabra estaba en el principio”.</b> Una palabra se articula en el habla, generada por el sonido que emana de la boca. Uno puede percibir un sonido y discernir si una oración es larga o corta basándose en las señales auditivas. El lenguaje de la oración puede no ser necesariamente familiar y puede variar en longitud. Es indeterminable si la palabra (oración) se pronuncia en voz baja o en voz alta. Analicemos la frase <b>“La Palabra estaba en el principio”</b>. Si bien entendemos que la palabra fue hablada al principio, los humanos no poseían ninguna habilidad lingüística en esa etapa inicial. Por tanto, surge una pregunta pertinente sobre el idioma en el que se pronunció la palabra. Para abordar esta pregunta, consideremos los eventos que ocurrieron al principio.

  Si preguntamos sobre el origen del sonido al principio, podemos atribuir el sonido escuchado por el oído humano a Prakruti. Prakruti comprende cinco grandes botas: Tierra, Agua, Aire, Fuego y Cielo, cada uno de los cuales posee vida. El Cielo, dotado de vida, generó el sonido al principio. Esto plantea la cuestión de cómo el cielo produce sonido cuando aparentemente está vacío. Esta investigación es racional y comprender las respuestas la transforma en una exploración científica. Según Brahma Vidya Shastra, ¿el cielo mismo creó el sonido? Dado que el Cielo es un Jeeva, Jeevatma no es capaz ni puede actuar de acuerdo con principios científicos; es el dharma de Jeevatma. Paramatma también tiene un dharma. Paramatma (Dios) no posee nombre, forma ni obra. Este es el dharma primario de Dios. Dios no es un agente de acción; No se dedica a trabajar. Según el dharma de Jeevatma, Jeevatma no es capaz ni puede realizar ningún trabajo. Aunque Dios es capaz, no realiza ninguna acción. Por lo tanto, Jeevatma y Dios tienen dharmas opuestos. Al principio, la palabra emana a través del Cielo. Como el Sky también es un Jeeva, no produjo ese sonido. El sonido que se originó en el Cielo es un hecho real, pero el Jeeva del Cielo no es capaz ni puede generar ningún sonido. Por lo tanto, alguien detrás del Cielo puede haber sido la fuente del sonido. Dios no creó el sonido porque no realiza ningún trabajo. Aunque el sonido del Cielo es verdadero, ni el Jeeva del Cielo ni Dios son la causa del sonido. Puede surgir la duda de si hubo alguien aparte de ambos.

  Para disipar esta duda, es fundamental comprender las entidades del universo. Inicialmente, Dios creó el universo. Dios, siendo Dios, creó a Prakruti a partir de sí mismo. Primero creó Prakruti en cinco partes y luego creó Atma y Jeevatma para infundir vitalidad en Prakruti, que estaba desprovisto de vida. Al igual que Él mismo, Dios creó el Atma y el Jeevatma masculinos (Purusha). Designó a Jeevatma como pasajero y a Atma como conductor, confiando a Atma la ejecución de todas las tareas. En cada individuo, Atma lleva a cabo todas las funciones dentro del cuerpo mientras coexiste con Jeevatma. En Sus Escrituras, Dios afirmó que incluso los grandes eruditos pueden no comprender plenamente el Atma. Solo los yoguis dedicados, como se menciona en el verso 11 del Bhagavad-Gita Purushottama Partí Yoga, pueden comprender verdaderamente el Atma, enfatizando que el Atma permanece oculto dentro del cuerpo sin ser conocido.

  Si Dios no obra, algunos se preguntarán cómo creó Prakruti, Atma y Jeevatma. Mi respuesta es que es verdad que Dios no obra. Este principio fue articulado por Dios después de la creación de Prakruti, Atma y Jeevatma. Antes del acto de la creación, Dios era la única existencia y, durante ese período, Dios obraba. No existía otra entidad que Dios antes de la creación. En consecuencia, Dios obró antes del acto de la creación. Dios creó Prakruti, seguido de la creación de Atma y Jeevatma. Posteriormente, Dios estableció Su dharma. Si bien Dios se abstuvo de obrar después de la creación, estuvo activo antes del acto de la creación. Dios delegó todas las responsabilidades en Atma y determinó que Atma ejecutaría todas las tareas. En consecuencia, Paramatma dejó de realizar las acciones que solía realizar después de la creación del Atma. Cuando Atma asumió las responsabilidades, Paramatma se convirtió en un observador pasivo (testigo).

  Dios no se dedica a trabajar; Jeeva es incapaz de actuar y Atma es quien realiza todas las tareas. Por lo tanto, fue Atma quien produjo el sonido del Cielo al principio. El Atma, oculto en el Cielo, generó el sonido. El sonido creado por Atma se convirtió en la sabiduría de Dios, por lo que se le conoce como la "palabra", que significa un sonido con significado. Al describir el evento de la creación, la frase <b>“La Palabra estaba en el principio </b>“se utiliza para expresar que un sonido significativo se originó en el cielo. Hemos aprendido qué es la "palabra" y quién la articuló. La "palabra" fue pronunciada con la sabiduría de Dios por Atma en forma de sonido. Lo que Atma articuló desde el Cielo se convirtió en la primera sabiduría para el mundo. Aunque el sonido del Cielo contenía sabiduría, se manifestó como un sonido fuerte en forma de trueno, más allá de la comprensión del lenguaje humano. El Sol comprendió el estruendoso sonido en el Cielo y, reconociendo su inteligibilidad para los humanos, transmitió el mensaje a un hombre llamado Manu en la Tierra en un idioma comprendido por los humanos.

  La sabiduría de Dios se manifestó en forma de un sonido incomprensible al comienzo de la creación. Esto se articula en la primera frase del primer capítulo del Evangelio de Juan, afirmando que el<b>la Palabra estaba en el principio”</b>. Ese día, los humanos no sabían que el sonido contenía la sabiduría de Dios; Sólo entendieron un poco cuando el Sol transmitió el mensaje. Krishna transmitió la misma sabiduría en la forma del Bhagavad-Gita, afirmando que era la misma sabiduría dicha al comienzo de la creación. Sin embargo, la atención humana no se centró inicialmente en el sonido atronador al principio, y hasta el día de hoy, nadie se da cuenta de que el sonido del trueno encapsula la sabiduría del Bhagavad-Gita. El Sol transmitió a Manu la misma sabiduría que Krishna le había dicho, traduciendo la sabiduría proveniente del cielo en forma de trueno. La sabiduría del sonido del Cielo surgió del Atma del Cielo. La sabiduría del Atma se originó en el propio Atma. El Atma mismo se convirtió en sabiduría, y la misma sabiduría surgió del Atma. Esta sabiduría del Atma es comparable a cómo el algodón se transforma en hilo y el hilo emerge del algodón. Mientras que el algodón y el hilo son distintos, el algodón se convierte en hilo. De manera similar, el Atma y la sabiduría son diferentes, pero la sabiduría del Alma emana del Alma. Si el hilo está separado, está formado por fibras de algodón; de la misma manera, si se analiza la sabiduría del Atma, contiene la esencia del Atma. Al principio, Dios transmitió Su sabiduría a través del sonido del Cielo, como se describe en el Corán 42:51, donde una de las formas en que Dios revela Su sabiduría es a través de la revelación del Cielo. Dios transmitió Su sabiduría a través del Atma del Cielo durante el inicio de la creación. La sabiduría, presentada en forma de trueno, no era comprensible para los humanos ya que carecía de un lenguaje que pudieran entender. En consecuencia, el Sol, habiendo captado la sabiduría de los truenos, se la transmitió al hombre en la tierra en lenguaje humano. Con el tiempo, esta sabiduría se extendió por toda la tierra. Sin embargo, a medida que pasó el tiempo, los adharmas reemplazaron a los dharmas, causando que la sabiduría inicialmente transmitida se desvaneciera de la memoria humana. En Dvapara Yuga, Bhagavan asumió la forma de Krishna e informó a Arjuma que estaba compartiendo la misma sabiduría que el Sol le había transmitido. A pesar de tener la misma sabiduría presentada en forma del Bhagavad-Gita, la primera escritura divina, los humanos han olvidado sus orígenes.

  Las primeras tres frases del Evangelio de Juan fueron escritas 3000 años después de que se pronunciara el Bhagavad-Gita, cuando los humanos habían olvidado la sabiduría impartida por Dios. La frase <b>“La Palabra estaba en el principio “</b>ahora se entiende. Se reconoce que la sabiduría en forma de trueno se originó en el Alma del Cielo, como se indica en la segunda frase. Por lo tanto, se afirma que <b>“La Palabra estaba con Dios”</b>. Una exploración más profunda revela que el sonido de la palabra nació del Atma. Así como el hilo retorcido emerge de la fibra de algodón, la movilidad del Atma se transformó en energía y la sabiduría en la energía se manifestó en forma de sonido. De manera similar a como el hilo contiene fibra de algodón, el sonido de la sabiduría abarca el poder del Atma. La sabiduría del Atma se encuentra tanto en la forma del poder del Atma como en la del Atma mismo. La sabiduría del Atma y el Atma son uno y lo mismo, y por eso se dice: <b>“La Palabra era Dios”.</b>

  Hasta ahora, hemos discutido que Dios creó Jeevatma y Atma, y ​​que Dios trabajó activamente antes de la creación. Sin embargo, después del acto de la creación, Dios dio poder a Atma para llevar a cabo las tareas, aparentemente desapareciendo y haciendo desconocida Su presencia. Dios se abstuvo de realizar cualquier tarea y, en este estado, se volvió semejante a alguien que no existía. En consecuencia, Atma asumió la responsabilidad de realizar la obra de Dios. Aunque Atma ejecuta las funciones tanto de Jeevatma como de Paramatma, sus acciones permanecen ocultas a los demás. Las declaraciones antes mencionadas describen todo el proceso operativo de Atma. Inicialmente, cuando Paramatma creó el universo, había tres almas, pero después de la creación, sólo se reconocen dos almas: Jeevatma y Atma. En ausencia de la presencia de Paramatma, Atma asumió el papel de Paramatma, razón por la cual se puede hacer referencia a Atma como Dios. A pesar de no ser Dios (Paramatma), Atma realiza las tareas de Dios y ocupa la posición de Dios.

  La sabiduría del Atma se origina en el Atma mismo. Al afirmar que Atma es Dios, se afirma que <b>la Palabra (sabiduría) estaba con Dios.</b> Esta afirmación es exacta cuando consideramos a Atma como Dios. Aunque Atma no es Dios, debe ser reconocido como Dios porque Dios le ha otorgado a Atma la autoridad para actuar como Dios. Por lo tanto, cuando la Palabra (sabiduría) es identificada como Atma, se puede declarar que la misma sabiduría (Atma) es Dios. Esta explicación se alinea con la declaración en el Evangelio de Juan que <b>la Palabra era Dios.</b> Habiendo abordado preguntas como “¿Qué es la Palabra?”, “¿Cómo está conectada la Palabra con el Atma?” y “¿Por qué Atma es considerado Dios?”, supongo que el significado de las tres primeras frases del Evangelio de Juan 1:1 ahora es comprensible. Si uno Si no logra comprender esto después de una explicación tan detallada, la sabiduría del Atma puede seguir siendo difícil de alcanzar. Comprender la sabiduría del Atma es crucial para comprender el sistema de Dios. Para discernir los caminos de Dios, uno debe comenzar con la comprensión de la sabiduría de la Palabra. Una vez que se conoce esta sabiduría, se vuelve evidente que la sabiduría es el Atma y el Atma es Dios.

  <b>
  en la creación            Dios (Paramatma)  Prakriti  alma  Jeevatma

  Después de la creación    (Paramatma)       Prakriti  alma  Jeevatma

  Después de la creación    Atma (Dios)       Prakriti  alma  Jeevatma
  </b>

  En el acto de la creación, Dios trabajó para crear tanto el Prakruti femenino como el Atma y Jeevatma masculinos. Inicialmente, Dios, como Purusha (masculino), creó dos almas, Atma y Jeevatma, similares a Él. Después de la creación de Prakruti, Atma y Jeevatma, Dios pasó a desempeñar un papel de testigo sin participación activa. Dada la naturaleza innata de Dios de no trabajar, puede parecer que Dios no existe, a pesar de Su existencia. Cuando el equilibrio de los dharmas se altera y los dharmas prevalecen en la Tierra, Dios envía Su alma como Bhagavan para restaurar los dharmas. Para restablecer los dharmas, se envía al representante de Dios, eliminando la necesidad de que Dios participe directamente en el trabajo. Atma, por otra parte, asume la responsabilidad de todas las demás tareas. En consecuencia, después de la creación, Dios se vuelve inerte y aparentemente irrelevante. Se podría afirmar que Dios, en este estado, parece inexistente. Atma interviene para llenar el vacío percibido de Dios y efectivamente se convierte en Dios, haciéndonos ajenos a la ausencia de Dios. De ahí la frase <b>“El Verbo era Dios “</b>se presenta en la segunda escritura divina, significando una distinción entre Dios y la palabra. Si bien la palabra no es inherentemente Dios, se transformó en Dios. La expresion<b>es Verbo era Dios </b>“Destaca la transformación de la palabra (sabiduría) en Dios. Dado que la palabra (sabiduría) se identifica con Atma, y ​​Atma se considera Dios, se afirma que Atma, siendo la palabra, es Dios. Todo el mundo se equivoca al saber quién es Dios y quién es el Atma.

  En realidad, Dios ya no existe después del acto de la creación. Sin que nadie sepa que no hay Dios en el mundo, Atma asume el papel de Dios, desempeñando los deberes tanto de Jeevatma como de Prakruti. Al mismo tiempo, Atma asume una posición similar a Dios. Después de la creación, Dios se transformó en una entidad informe y sin nombre, sin tareas asignadas. Describir a un Dios así como inexistente podría ser más exacto que afirmar su existencia. Como no hay ninguna entidad en lugar de Dios, Atma asume el papel de Dios, aclarado por la frase <b>“El Verbo era Dios “</b>en la tercera oración. A pesar de que muchas personas escuchan y estudian estas frases, el secreto subyacente sigue siendo desconocido.

  Para dilucidar la realidad acerca del Atma, que encarna el papel de Dios, se afirma que <b>“La Palabra era Dios”</b>.Cuando Atma, personificando a Dios, realiza cualquier acción, atribuye la acción a "Jeevatma ha hecho" o "Dios ha hecho", convenciendo a todos de la existencia de Dios. Pueden surgir preguntas sobre quién tiene autoridad sobre el universo si no hay Dios, o si esta perspectiva se alinea con la sabiduría o el ateísmo de Dios. La respuesta a estas preguntas es la siguiente: Estamos diciendo que Dios no está en el lugar de Dios, pero no estamos diciendo que Dios no existe en absoluto. Las acciones de Dios siguen siendo desconocidas y se enfatiza que Él carece de nombre, obra o forma, por lo que no tiene relación directa con los humanos, pero nunca dijimos que Dios no existiera en absoluto. En tiempos Ante una amenaza a los dharmas, Dios envía a Su representante para restaurar el orden. Incluso en este escenario, el representante se abstiene de afirmar explícitamente ser Dios, adoptando el apodo de "Bhagavan". El misterio que rodea la identidad y las cualidades de Dios persiste. Dios está ahí, pero nadie sabe cómo es Dios. Nadie ha visto ni se ha comunicado directamente con Dios desde la creación. Se puede decir cualquier cosa sobre cualquier cosa en el mundo, pero nadie puede decir nada definitivo sobre Dios. Términos como "Alá" en Fruta Yuga significan la naturaleza ilimitada de Dios, y designaciones como "Para Brahma" enfatizan la superioridad de Dios sobre Atma, quien cumple varios roles. Además, el término "Paramatma" resalta la distinción entre Dios y Atma, y ​​"Purushottama" denota la supremacía de Dios en comparación con Jeevatma y Atma. Es mejor admitir que ni tú ni yo sabemos nada acerca de Dios.
  </div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 80,
verse: ` <b>2)	El Evangelio de Juan, capítulo 1, verso 9.</b>`,
meaning: `<b>
(1:9) La luz verdadera que alumbra a todos estaba viniendo al mundo.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si hay luz en el mundo exterior es por un fuego ardiente. Sin embargo, en este contexto, el versículo menciona la luz verdadera. La verdadera luz se enciende sin fuego y entra en cada ser humano, iluminando todo el cuerpo de la cabeza a los pies. Sólo existe una luz sin fuego, y es el Atma, que proviene de Dios y es designada por Dios (el Creador). Atma proporciona luz de conciencia a todo el cuerpo. Cuando el Atma entra en el cuerpo, los 25 billones de células del cuerpo humano se llenan de su luz. Cada celda se convierte en una lámpara encendida sin fuego. La luz de la lámpara tiene una temperatura específica. El cuerpo humano tiene una temperatura de 98,4 °F debido a la luz del Atma. Cuando Atma abandona el cuerpo, el cuerpo se enfría sin calor. Un cuerpo sin la luz del Atma se llama cadáver. En el versículo 24:35, se dice:” <b>Atma es la luz y el cuerpo es el nicho”</b>. Se puede afirmar que al Atma, que ilumina el cuerpo, se le puede llamar la luz verdadera.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 81,
verse: ` <b>3)	El Evangelio de Juan, capítulo 1, verso 10.</b>`,
meaning: ` <b>
(1:10) Él estaba en el mundo, y aunque el mundo fue hecho por él, el mundo no lo reconoció.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El término "Loca (Mundo)" en telugu se refiere a algo que pasa por experiencias. Atma está presente en los humanos que pasan por experiencias y es el creador de todos los seres humanos. Sin embargo, es crucial reconocer la distinción entre Atma y Dios. Dios creó a Atma y Atma, a su vez, creó a los humanos. Es importante entender que Dios no creó directamente a los humanos; en cambio, formó todo el Prapancha, inicialmente desprovisto de seres vivos. Dios primero produjo Prakruti y luego le dio poder a Atman para generar, gobernar y terminar con la vida humana. Desde entonces, Atma ha estado creando humanos continuamente, funcionando como luz sustentadora de la vida humana y orquestando los procesos de muerte y renacimiento. A pesar de esto, los humanos a menudo permanecen ajenos a la presencia del Atma, que está cerca y dentro de ellos y es esencialmente Dios. Atma da origen a los seres humanos; por tanto, Atma es el Padre de los humanos. Dios creó a Atma; por eso Él es el Padre del Atma. Aunque a veces se hace referencia a Atma como Dios, el Dios verdadero es el Espíritu Santo, mientras que Atma es el Padre de los humanos.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 82,
verse: ` <b>4)	El Evangelio de Juan, capítulo 1, versículo 11.</b>`,
meaning: `  <b>
(1:11) A lo suyo vino, pero los suyos no lo recibieron. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El término “los suyos” abarca a todos aquellos a quienes Él creó. Atma, actuando según el mandamiento del Espíritu Santo, dio existencia a los humanos y se les manifestó en forma de sabiduría divina, conocida como la Palabra. Aunque Atma llegó a los humanos en forma de sabiduría, los humanos tienden a percibir su propio conocimiento como significativo, y a menudo pasan por alto o descartan la sabiduría ofrecida.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 83,
verse: `  <b>5)	El Evangelio de Juan, capítulo 1, versículo 12.</b>`,
meaning: `<b>
(1:12) Sin embargo, a todos los que lo recibieron, a los que creyeron en su nombre, les dio potestad de llegar a ser hijos de Dios. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aquellos que comprendan la sabiduría ofrecida por el Atma abrazarán al Atma. Aquellos que conocen la sabiduría del Atma y tienen fe en el Atma tienen la posibilidad de convertirse en herederos del Atma. En consecuencia, afirma el versículo: “Él dio el derecho de ser hijos de Dios”. El término "hijos de Dios" denota aquellos que están familiarizados con la sabiduría del Atma.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 84,
verse: ` <b>6)	El Evangelio de Juan, capítulo 1, versículo 13.</b>`,
meaning: `<b>
(1:13) Hombres nacidos no de descendencia natural, ni de decisión humana ni de voluntad de marido, Pero nacido de Dios. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Todos los seres humanos se originan en el Atma. No nacen de sangre de mujer ni La voluntad de hombres o mujeres.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 85,
verse: `<b>7)	El Evangelio de Juan, capítulo 1, versículo 14.</b>`,
meaning: ` <b>
(1:14) El Verbo se hizo carne y habitó entre nosotros. Hemos visto su gloria, la gloria del único Hijo, que vino del Padre, lleno de gracia y de verdad. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El Dios Atma (Sabiduría) asumió una forma física, parecida a la de un humano, y habitó entre los humanos, irradiando gracia y sabiduría.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 86,
verse: `<b>8)	El Evangelio de Juan, capítulo 1, versículo 18.</b>`,
meaning: ` <b>
(1:18) Ningún hombre ha visto a Dios jamás; el Hijo unigénito, que está en el seno del Padre, lo reveló.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La palabra "Dios" se usa tanto para Atma como para Paramatma. En la última escritura divina, el término "Alá" se utiliza para ambos dioses: Atma y Paramatma. Por tanto, los musulmanes no podían reconocer dos dioses. Para evitar este error, la Biblia afirma que Atma es el Padre y Paramatma es el Espíritu Santo. El término “Hijo engendrado” se refiere a<b>l único hijo creado por dios.</b> Paramatma (el Espíritu Santo) es eterno. Después de crear Prakruti al principio, Paramatma creó un hijo llamado Atma para dar existencia a todos los seres vivos. Atma creó a todos los seres vivientes según los mandamientos del Espíritu Santo. Por tanto, existe un solo Padre (Dios creado) para todos los seres vivientes. El Padre del Atma creado es el Espíritu Santo. <b>“Nadie ha visto jamás a Dios (el Espíritu Santo o Paramatma)”,</b>como dice el verso. Dios (el Espíritu Santo) no tiene forma, nombre ni obra; por lo tanto, nadie ha visto jamás a Paramatma. Atma, el Hijo unigénito, revela al Dios invisible a través de Su sabiduría. Atma es el Hijo unigénito separado del corazón del Gran Dios, Paramatma. Porque nadie ha visto al Espíritu Santo, sólo Atma puede hablar de su Padre, el Espíritu Santo.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 87,
verse: ` <b>9)	El Evangelio de Juan, capítulo 1, versículo 51.</b>`,
meaning: `<b>
(1:51) Luego añadió: “En verdad os digo que veréis el cielo abierto y los ángeles de Dios subiendo y descendiendo sobre el Hijo del Hombre”.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Esta es la palabra que Jesús le habló al mismo Nataniel. Jesús afirmó ser el Hijo del Hombre, aunque Nataniel se había referido a Él como el Hijo de Dios. Jesús no negó ser el Hijo de Dios, sino que se redujo a Hijo del Hombre. Aseguró a Nataniel y a otros que serían testigos de acontecimientos extraordinarios. Como hemos enfatizado antes, los siervos de Dios, los ángeles, sirven como gobernantes en el mundo humano. Estos ángeles, a menudo denominados Bhutas y Planetas (Grahas), son numerosos en el cielo y suman miles de millones. Durante un encuentro con Jesús, los siervos de Dios, conscientes de su identidad, descendieron del cielo y se inclinaron ante Él. Sin embargo, muchos seres humanos siguen sin ser conscientes de quién es realmente Jesús y no se postran ante Él. Se encuentran referencias similares en el Corán, la última escritura divina, específicamente en los versículos 15:28, 15:29 y 15:30. En el versículo mencionado se profetiza que Nataniel sería testigo de la presencia de Bhutas y Grahas alrededor del Hijo del Hombre, como si las puertas del cielo se hubieran abierto. La frase “ascender y descender” denota ir y venir, y “descender sobre el Hijo del Hombre” implica la llegada de los ángeles a Jesús. Cuando Nataniel reconoció a Jesús como el Hijo de Dios, Jesús, reconociendo la visión sabia de Nataniel, le aseguró en el versículo 50 que sería testigo de fenómenos aún mayores. Sigue el versículo 51, que expresa que Nataniel, al poseer sabiduría y visión, podía percibir cosas más allá de la vista ordinaria de los demás. Los acontecimientos descritos en el versículo 51 son visibles sólo para aquellos con sabiduría divina, lo que proporciona una idea de la verdadera identidad de Jesús.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 88,
verse: `<b>10)	El Evangelio de Juan, capítulo 3, verso 3.</b>`,
meaning: ` <b>
(3:3) Jesús respondió: “En verdad os digo que nadie puede ver el reino de Dios a menos que Ellos nacen de nuevo.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El versículo no debe interpretarse literalmente, ya que conlleva un significado simbólico más profundo. Dios y Su reino están más allá de la visibilidad física para cualquiera. Jesús transmitió explícitamente que comprender y percibir el reino de Dios requiere un renacimiento espiritual. Esto no implica una muerte física y un posterior renacimiento. Si se toma literalmente, significa que cualquiera que busque conocer a Dios tendría que sufrir una muerte física, lo cual es un malentendido. Nicodemo, que sostenía una interpretación literal, planteó una pregunta basada en este concepto erróneo.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 89,
verse: `<b>11)	El Evangelio de Juan, capítulo 3, versículos 4, 5, 6, 7 y 8</b>`,
meaning: `<b>
(3:4) “¿Cómo puede alguien nacer siendo viejo?” -Preguntó Nicodemo. “¡Seguramente no pueden entrar por segunda vez en el vientre de su madre para nacer!”<br><br>
(3:5) Jesús respondió: “De cierto os digo que nadie puede entrar en el reino de Dios.<br><br>
A menos que nazcan del agua y del Espíritu (Atma).<br><br>
(3:6) La carne da a luz a la carne, pero el Espíritu (Atma) da a luz al espíritu. <br><br>
(3:7) No debería sorprenderte que yo diga: “Os es necesario nacer de nuevo”.<br><br>
(3:8) El viento sopla donde quiere. Oyes su sonido, pero no sabes de dónde viene ni adónde va. Lo mismo ocurre con todos los nacidos del Espíritu (Atma)”.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
Cuando un hombre muere y renace, se llama renacimiento. Si el renacimiento ocurre físicamente, todos los órganos del hombre cambiarán. Si eso sucede, el deseo de ver a Dios y su reino también desaparecerá. El cuerpo no debe morir para mantener los órganos y las ambiciones como están. El cuerpo contiene tanto sabiduría como ignorancia, pero la ignorancia en el cuerpo debería morir por completo. Cuando un hombre se deshace de pensamientos y deseos ignorantes, se le considera muerto en la ignorancia y nacido de la sabiduría. Se puede decir que aquel que se deshace de la ignorancia y adquiere sabiduría nace del Atma. <b>El deber del hombre es conocer el Atma en el cuerpo...</b> Para conocer al Atma, uno debe conocer la sabiduría del Atma. Cuando un hombre conoce la sabiduría del Atma, se le considera nacido del Atma. Cuando el cuerpo muere, el hombre recibe un cuerpo nuevo, pero cambiar la voluntad en el mismo cuerpo sin obtener un cuerpo nuevo es como un nuevo nacimiento. El viento sopla donde quiere y escuchamos su sonido según dónde sople. Así como el viento cambia de dirección, si un hombre cambia de propósito, será un nuevo nacimiento para él. Quien desea el Atma, conoce el Atma en el mismo cuerpo y en la misma vida. No es necesario ir a otra vida para conocer al Atma.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 90,
verse: `<b>12)	El Evangelio de Juan, capítulo 3, versículo 13.</b>`,
meaning: `<b>
(3:13) Nadie ha entrado nunca en Paralelo excepto el que vino de Paraloka. —el Hijo del Hombre.  </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Ihaloka, Cielo (Svarga-Loka), Infierno (Naraka-Loca) y Para Loca son los nombres de los cuatro mundos. El mundo (Loca) donde todos vivimos se llama Ih Aloka. El cielo y el infierno no son mundos separados; ambos están en la tierra. Loca no es ni un reino ni un territorio. El lugar y el momento de la experiencia conjunta se denominan loca. El lugar donde uno experimenta dificultades se llama Yamaloka, Naraka-Loca o infierno. De manera similar, el lugar donde uno experimenta felicidad se llama Swarga-Loka o cielo. Dado que ambas experiencias ocurren en la tierra, se puede decir que este mundo (Chaloka) es tanto el cielo como el infierno. Sin embargo, Para Loka es diferente del infierno y del cielo. Si bien tanto el infierno como el cielo implican experiencias, Paraloka no tiene ninguna experiencia. El estado en el que no hay experiencia se llama Para Loca. Cuando una persona trasciende el karma, no experimenta felicidad ni tristeza y entra en Para Loca. Se llama estado de ser uno con Dios, Mukti o Moksha. Una persona en Ia Loka siempre está atada por el pecado y el punya karma. Quién está en Para Loka no tiene ningún karma. Si una persona muere en Ia Loka, no puede ir a Para Local sino regresar a Ia Loka. Por otro lado, una persona en Para Loca, cuando viene a este mundo por cualquier necesidad, regresa a Paraloka. Por lo tanto, aunque el residente de Para Loca que vino de Para Loka permanece en este mundo por algún tiempo según Su voluntad, más tarde entrará en Paraloka. De ahí el verso <b>“Nadie ha entrado jamás en Paralelo excepto el Hijo del Hombre que está en Paralelo.</b> Implica que el que está en Para Loka es Dios. Incluso si alguien que se convirtió en Dios nace como humano, regresará a Paraloka. Lo mismo se expresa en Juan 3:13.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 91,
verse: ` <b>13)	El Evangelio de Juan, capítulo 3, versículo 15.</b>`,
meaning: `<b>
(3:15) Para que todo aquel que en Él cree, no se pierda, sino que tenga vida eterna.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Todo aquel que cree en Dios alcanzará la vida eterna sin sufrir la muerte. Sin embargo, está escrito que “la vida eterna es sólo a través de Él”. Paramatma existe tanto dentro como fuera del cuerpo. <b>Cuando Jeevatma se fusiona con Paramatma, se afirma que Jeevatma ha alcanzado Para Loca, también reconocido como el reino de Dios..</b>. También se puede articular que Jeevatma ha alcanzado la vida eterna (moksha). El versículo declara: "Quien crea en Dios finalmente será liberado del karma y recibirá la vida eterna". Para Loca, que representa la vida eterna, está presente en todas partes, independientemente de la ubicación física de cada uno. En consecuencia, quien logra moksha se une con el Espíritu Santo (Paramatma) dentro de su cuerpo.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 92,
verse: `<b>13)	El Evangelio de Juan, capítulo 3, versículo 17.</b>`,
meaning: `<b>
(3:17) Porque Dios no envió a su Hijo al mundo para juzgar al mundo, sino para salvar al mundo por él.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dios envió a su Hijo como hombre al mundo para salvar a los humanos, no para juzgarlos. La responsabilidad del hombre que vino de Dios es enseñar la sabiduría de Dios a los humanos y salvarlos de sus pecados. Él no vino a juzgar los pecados y punta de los seres humanos. Dios no envió a Su representante a la tierra para ser juzgado; en cambio, vino a salvar a la gente. Este versículo es crucial en la Biblia. Atma juzga a un hombre cuando muere. El aquel que vino de Dios enseña a los humanos cómo escapar del karma, mientras el Atma realiza la tarea de juzgarlos.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 93,
verse: `<b>15)	El Evangelio de Juan, capítulo 3, versículo 18. </b>`,
meaning: `<b>
(3:18) El que cree en Él no es juzgado, pero el que no cree ya es juzgado porque no ha creído en el nombre del unigénito Hijo de Dios.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El versículo dice: “El que cree en él”, lo que se refiere al Dios invisible o al representante visible de Dios que vino de Dios. El versículo también dice: “No han creído en el nombre del unigénito Hijo de Dios”, lo que implica que debe entenderse como una referencia al representante de Dios que vino de Dios. Dios mismo vino a la tierra disfrazado de hombre para enseñar sabiduría a los humanos. Jesus dijo, <b>"Soy el Hijo de Dios, o el Hijo del Hombre, o el único Hijo de Dios”,</b> para no ser reconocido. En el hinduismo, Dios se llama Bhagavan cuando se disfraza y viene a la tierra como hombre. Krishna es quien vino así; por eso se le llama Bhagavan en el Bhagavad-Gita. Aunque Jesús, que es el Hijo de Dios, apareció como hombre, también debería llamarse Bhagavan. Cuando Dios se encarna como hombre en la tierra, los hindúes lo llaman Bhagavan y los cristianos lo llaman el Hijo del Hombre. Si bien se dice en la última escritura divina (15:28, 29, 30) que <b>Dios envía a su representante soplando su alma en él.,</b> Los musulmanes creen que Dios no viene como hombre. Quien no tiene fe en el representante de Dios, el Hijo de Dios, ya está juzgado.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 94,
verse: `<b>16)	El Evangelio de Juan, capítulo 3, versículos 19, 20, 21.</b>`,
meaning: ` <b>
(3:19) Este es el veredicto: La luz vino al mundo, pero los hombres amaron las tinieblas en lugar de la luz, porque sus obras eran malas.<br><br>
(3:20) Todo el que hace el mal aborrece la luz y no viene a la luz por miedo a que sus obras queden descubiertas.<br><br>
(3:21) Pero el que vive en la verdad viene a la luz, para que se vea claramente que lo que ha hecho, ha sido hecho ante los ojos de Dios.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Paramatma, que nadie sabe, simboliza la oscuridad. Atma, creada por Paramatma, encarna la verdadera luz. Paramatma ha creado dos Hijos: un Arma invisible, que sirve como luz dentro del cuerpo, y otro Atma que encarna como humano entre humanos. Mientras que al Atma, invisible e iluminando el cuerpo, se le llama Hijo, al otro Hijo de Dios, que se manifiesta como hombre, se le llama distintivamente <b>el Hijo unigénito.</b> Jesús, el Hijo unigénito, descendió a la tierra. Sin embargo, debido a sus acciones malévolas, la gente apreciaba su propia oscuridad y se abstenía de acercarse a Jesús, la luz de la sabiduría.

  Todo individuo ignorante alberga aversión hacia el representante de Dios que trae la <b>luz de la sabiduría</b> al mundo. Temen que sus actos nefastos queden expuestos en presencia del representante de Dios, lo que los llevará a evitar la luz y ocultar sus acciones. Aquellos que anticipan que la luz de Dios, tomando forma humana en la tierra, revelará sus obras oscuras, evitan acudir al Hijo de Dios cuando Él aparezca. Aquellos que se adhieren a la sabiduría de Dios comprenden que el Atma es responsable de todas sus acciones dentro del cuerpo. Se acercan al Hijo de Dios porque todas sus obras están dentro de sí. <b>La luz de Dios, guiada por la sabiduría.</b>.. Sin embargo, sólo una pequeña fracción de la gente en la tierra reconoce que Atma, que es Dios, es responsable de todas sus acciones. En consecuencia, sólo un número limitado se acerca al Hijo de Dios cuando Él aparece. Dado que la tierra está poblada de individuos que creen que son los únicos responsables de sus acciones, se abstienen de buscar al Hijo de Dios. No sólo se mantienen alejados del Hijo de Dios, sino que también albergan animosidad e infligen dificultades al representante de Dios, que rara vez se manifiesta en la Tierra. Se burlan del Hijo de Dios, sometiéndose a numerosas tribulaciones.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 95,
verse: ` <b>17)	El Evangelio de Juan, capítulo 5, versículo 19.</b>`,
meaning: ` <b>
(5:19) Jesús les dio esta respuesta: “De cierto os digo, que el Hijo nada puede hacer por sí mismo; Sólo puede hacer lo que ve hacer a su Padre, porque todo lo que hace el Padre, también lo hace el Hijo.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En este versículo, la mención de "Padre e Hijo" va acompañada de la declaración de que "El Hijo hará las cosas que hace el Padre". Es crucial discernir las identidades del Padre y del Hijo, dado que el Espíritu Santo (Dios) es el único. Aunque Dios tiene un Hijo eterno, también hay otro Hijo que ocasionalmente se encarna en la Tierra. Es importante determinar a qué Hijo se dirige el versículo. Juan 3:17 enfatiza: <b>“Porque Dios no envió a su Hijo al mundo para condenar al mundo, sino para salvar al mundo por él.”</b>, refiriéndose al hijo de Dios, que se manifiesta en la Tierra. Este verso (5:19) se refiere al Hijo, Atma, que sirve como luz dentro del cuerpo humano. Atma es eterna en la tierra, proporcionando <b>'la luz de la movilidad’</b> al cuerpo de todos. Basado en esto, especialmente al leer el versículo, uno debe determinar de cuál de los dos hijos habló Dios, el Espíritu Santo, en el versículo. Juan 5:19 caracteriza a Atma como el hijo eterno de Dios, afirmando que Atma refleja las acciones del Espíritu Santo y se dedica únicamente a tareas heredadas del Padre, sin hacer nada de forma independiente.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 96,
verse: `<b>18)	El Evangelio de Juan, capítulo 5, verso 20.</b>`,
meaning: ` <b>
(5:20) Porque el Padre ama al Hijo y le muestra todo lo que hace. Sí, y aún mayores obras que éstas le mostrará, de modo que os quedaréis asombrados.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando preguntamos quién dijo: <b>“Paramatma (el Espíritu Santo) ama al Hijo y le muestra todo lo que hace.”,</b> encontramos que Jesús, el segundo Hijo de Dios, habló estas palabras a Sus discípulos mientras estaba en la tierra. Nadie pudo reconocer plenamente al Hijo de Dios cuando caminó entre los humanos como hombre. A pesar de Sus enseñanzas y milagros, algunos lo sometieron a gran sufrimiento y humillación, lo que finalmente lo llevó a la muerte. Sin embargo, el Hijo unigénito de Dios, llamado Jesús, estaba en medio de ellos y dijo: <b>“Él El Padre le mostrará (al Atma) obras aún mayores que éstas para que os asombréis..</b>.” Dios le ordenó a Atma que gobernará los jueves y mostrará cosas aún mayores. Exploremos ahora cuáles son esas grandes cosas.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 97,
verse: `<b>19)	El Evangelio de Juan, capítulo 5, versículos 21, 22, 23. </b>`,
meaning: `<b>
(5:21) Porque así como el Padre resucita a los muertos y les da vida, así también el Hijo da vida a quien Él quiere dársela.<br><br>
(5:22) Además, el Padre a nadie juzga, sino que todo juicio ha confiado al Hijo.<br><br>
(5:23) Para que todos honren al Hijo así como honran al Padre. Quien no honra al Hijo, no honra al Padre que lo envió.
  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hay algo digno de mención aquí. Aunque hay una mención de <b>'dos alá’</b> en el Corán, los musulmanes no pudieron encontrarlo. Del mismo modo, hay una mención de <b>'dos hijos'</b> en la Biblia, pero los cristianos no podían entenderlo y hablar de un solo Hijo. Estos tres versículos tienen la palabra "Hijo". Es necesario determinar cuál de los dos Hijos se menciona en estos versículos. Muchos no son capaces de comprender que hay un segundo Hijo porque en los versículos sólo se menciona un Hijo a la vez. Dios dijo, <b>"Porque Dios no envió a su Hijo al mundo para juzgar al mundo, sino para salvar al mundo por él” en Juan 3:17, y “El Padre ha confiado todo juicio al Hijo” en Juan 5:22.</b> En base a esto, se debe entender que Dios tiene dos hijos.

  Dios dijo sobre Atma: "Así como el Padre, el Espíritu Santo, resucita a los muertos y les da vida, el Hijo también resucita a los muertos y les da vida". Así como el Padre resucita a los muertos y da vida, el Atma decide las próximas experiencias de vida de una persona después de la muerte basándose en los pecados y punta de sus vidas pasadas. Por lo tanto, “como el Padre, el Hijo, a quien Él quiere, da vida”, se dice en el versículo. <b>“quien le gusta"</b> medio <b>"aquellos que están determinados por el karma “</b>desde la perspectiva de Atma. Como Atma es la luz oculta en el cuerpo que determina el karma de la próxima vida de una persona, “Él resucitará a aquel a quien juzgó”, se dice en el verso. “Resucitar” significa “nacer de nuevo”.

  Dios le dio a Atma el poder de juzgar a los muertos y resucitarlos para que todos pudieran glorificar a su Hijo, Atma, así como todos glorifican al Espíritu Santo como el gran Dios. En el mismo momento de la muerte de una persona, Atma, la luz en el cuerpo, determina su karma para la segunda vida basándose en los pecados y punta de su vida pasada e inmediatamente la lleva a la segunda vida. Atma decide la segunda vida basándose en el karma de la persona y le devuelve la vida. Aquellos que no saben qué Atma hace cosas tan grandes no ven a Atma con gran respeto. Quien no respeta al Atma no respetará a Dios que envió al Atma. Tal ignorancia no respeta al Atma, que está en el cuerpo, ni al Paramatma, que está dentro y fuera del cuerpo.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 98,
verse: `<b>20)	El Evangelio de Juan, capítulo 5, versículo 24. </b>`,
meaning: ` <b>
(5:24) De cierto os digo, que el que oye mi palabra y cree al que me envió, tiene vida eterna y no será juzgado, sino que ha pasado de muerte a vida.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Anteriormente, los versículos 5:21, 5:22 y 5:23 hablaban del Alma (Atma), que es la movilidad del cuerpo. El versículo 5:24 habla del Alma, que vino en forma humana con el nombre de Jesús. Quien crea en el Espíritu Santo, que envió a Jesús, el Hijo unigénito, alcanzará moksha. Tal persona alcanza moksha sin someterse a juicio inmediatamente después de su muerte.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 99,
verse: ` <b>21)	El Evangelio de Juan, capítulo 5, versículo 26.</b>`,
meaning: ` <b>
((5:26) Porque como el Padre tiene vida en sí mismo, así también le ha concedido al Hijo tener vida en sí mismo. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dios, el Espíritu Santo, es eterno para siempre. Así como Paramatma es eterno, a Atma, Su hijo, se le ha concedido la autoridad de ser eterno para siempre. El Espíritu Santo, el Padre del Atma, le confirió esa autoridad. En la primera escritura divina, cuando se compara a Jeevatma con Atma, a Jeevatma se le conoce como Kshara (alma perecedera), mientras que a Atma se le designa como Akshara (alma imperecedera).
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 100,
verse: ` <b>22)	El Evangelio de Juan, capítulo 5, versículo 37.</b>`,
meaning: `<b>
(5:37) Nunca habéis oído Su voz ni visto Su forma. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En este contexto, "Su" se refiere a Paramatma (el Espíritu Santo). Dios, conocido como Paramatma o Espíritu Santo, carece de nombre, forma o tareas específicas. Nadie ha sido testigo de un Dios así porque carece de una forma discernible. En consecuencia, ningún ser humano ha puesto jamás sus ojos en Dios. Dios no se comunica con nadie porque permanece inactivo. Por tanto, se puede afirmar que ninguna persona viva ha visto verdaderamente a Dios. Cualquier afirmación de haber sido testigo de Dios puede considerarse falsa. Dios no es visible ni vocal.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 101,
verse: `<b>23)	El Evangelio de Juan, capítulo 5, versículo 38.</b>`,
meaning: `<b>
(5:38) Ni su palabra habita en vosotros, porque no creéis al que Él envió. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aunque el primer creador, el Espíritu Santo, no participa activamente en la obra, hay ciertas responsabilidades que caen dentro de su dominio. Sin embargo, se abstiene de actuar directamente. En cambio, Dios, Paramatma, ha asignado a Sus sirvientes para que realicen Su obra. Estos millones de siervos constituyen Su dominio y ejecutan todas las tareas designadas para Él. Mientras Dios mismo permanece inactivo, sus siervos cumplen las funciones que se supone deben desempeñar. Paramatma, sin embargo, tiene una tarea crucial entre manos: impartir sabiduría divina. Se requiere de Dios mismo para esta tarea, ya que Sus siervos no pueden realizarla. La última escritura dice:<b> “Dios debería enseñar la sabiduría de Dios porque nadie conoce la sabiduría de Dios excepto Dios...”</b> Disfrazado, Dios viene a enseñar la sabiduría.

  De Dios. Aunque habla disfrazado, su identidad sigue siendo desconocida, ya que nadie puede discernir al que está disfrazado. A pesar de que Dios imparte Su sabiduría, a menudo ésta pasa desapercibida como sus palabras. Como Dios es sabio, asume la apariencia de <b>'Bhagavan’ </b>e imparte sabiduría.

  Incluso cuando Dios viene personalmente a la Tierra disfrazado de hombre para enseñar sabiduría, también predice que enviará a un hombre especial cuya verdadera identidad seguirá siendo desconocida. “El que viene de Dios enseñará la sabiduría de Dios”, declaró Dios mismo en Sus divinas Escrituras. En consecuencia, todos anticipan que el enviado de Dios transmitirá la sabiduría de Dios. Así, la encarnación de Dios permanece velada para todos. Aunque Dios vino a la tierra como hombre durante el Treta Yuga, nadie lo reconoció. Durante el Dvapara Yuga, Dios vino como hombre e impartió las enseñanzas del Bhagavad-Gita, incluso declarando <b>“Yo soy Dios “</b>en el Bhagavad-Gita, pero nadie lo reconoció. De manera similar, cuando Dios encarnó como Jesús en Kali Yuga, nadie lo reconoció, lo que le provocó numerosos desafíos. Ninguno se dio cuenta de que Él era el Dios verdadero. Algunos que profesaban ser creyentes de Dios afirmaban que Jesús era el Hijo del Hombre, sin reconocerlo como Dios. Otros identificaron a Jesús como el Hijo de Dios, pero aun así no lograron reconocer Su divinidad.

  Aunque Jesús era Dios encarnado, afirmó: <b>“No creíste al que Él envió”</b> en este versículo sin revelar Su verdadera identidad. Expresó que la gente carecía de fe en el hombre enviado por Dios, afirmando: “La palabra de Dios no vivió en ustedes”. Si no hay fe en el hombre enviado por Dios, ¿por qué la palabra de Dios no resuena entre los humanos? La razón está en la incredulidad en el mensajero divino, que es Dios mismo y portador de la sabiduría. En consecuencia, la palabra de Dios no logra arraigarse en aquellos que carecen de fe en Él.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 102,
verse: ` <b>24)	El Evangelio de Juan, capítulo 6, versículos 25, 26, 27</b>`,
meaning: ` <b>
(6:25) Cuando lo encontraron al otro lado del lago, le preguntaron: “Rabí, ¿cuándo llegaste aquí?”<br><br>
(6:26) Jesús respondió: “En verdad os digo que me buscáis, no porque Viste las señales que hice sino porque comiste los panes y te saciaste.<br><br>
(6:27) No trabajéis por la comida que se echa a perder, sino por la comida que la vida eterna perdura, la cual os dará el Hijo del Hombre. Porque sobre Él Dios Padre ha puesto Su sello de aprobación.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Este versículo enfatiza dos tipos de alimentos: alimentos perecederos y alimentos imperecederos. Muchos seres humanos buscan alimentos perecederos, como se ilustra cuando una multitud se acercó a Jesús y le preguntó: “¿Cuándo viniste aquí?” Jesús respondió, <b>“No buscáis la sabiduría de Dios; me buscas esperando hogazas de pan.”</b> Les aconsejó además: “No os afanéis por conseguir alimentos perecederos”. Los alimentos cotidianos, que se consumen, digieren y destruyen en tres horas, entran en la categoría de alimentos perecederos. La digestión, en esencia, es un proceso de destrucción, en el que todos los alimentos ingeridos se descomponen en el tracto digestivo y se transforman en desechos, de forma muy similar a como quemar madera hasta convertirla en cenizas.

  En cambio, la sabiduría que una persona adquiere a través de sus oídos, entrando a su mente en forma de palabras, se considera alimento imperecedero. <b>La sabiduría de Dios es el único alimento que no se puede destruir.Leer u oír la sabiduría de Dios es similar a consumir alimento imperecedero para la mente.</b> El Hijo del Hombre proporciona este alimento indestructible, como lo indica el versículo: <b>“Porque sobre Él Dios Padre ha puesto Su sello de aprobación.</b> “Sello” significa aceptación o decisión. Dios, habiendo decidido, envió a su Hijo unigénito para compartir su sabiduría. El término "sello de aprobación" en el versículo significa la decisión o el consentimiento de Dios. En el Corán se afirma que Dios no reveló Su sabiduría a ningún ser humano, destacando que quien imparte la sabiduría de Dios no es una persona común y corriente. Dios afirmó que Su sabiduría sólo la conoce Él mismo, lo que implica que el Hijo engendrado que viene a revelar la sabiduría de Dios es Dios mismo. La frase "el Hijo de Dios" puede engañar a los humanos, pero puede entenderse como "Hijo", que significa "la manifestación de Dios". Dios, al elegir no venir directamente como Dios para hablar a los humanos, adopta la apariencia del Hijo. Esta interpretación encuentra apoyo en el siguiente versículo.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 103,
verse: `  <b>25)	El Evangelio de Juan, capítulo 6, versículo 32. </b>`,
meaning: ` <b>
((6:32) Jesús les dijo: “En verdad os digo que no es Moisés quien os ha dado el pan de pará loca, sino que es mi Padre quien os da el verdadero pan de paraloka. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En el versículo mencionado, Jesús declaró: <b>“Moisés no os dio el pan de la sabiduría de Paraloka...</b>” Esto plantea preguntas: ¿Es falso el Dharma Shastra enseñado por Moisés? ¿Le falta sabiduría al Dharma Shastra de Moisés con los dharmas? Si lo que Moisés enseñó no es el verdadero pan de Dios, ¿por qué se le llama el Dharma Shastra de Moisés? Estas preguntas suscitan diversas consideraciones. Por un lado, es falso afirmar que lo que Moisés enseñó no es el Dharma Shastra. Por otro lado, en consonancia con la declaración de Dios, se puede afirmar que lo que Moisés enseñó no es el Dharma Shastra. También es exacto que Moisés no proporcionó pan imperecedero de Paraloka. Tales preguntas y dudas surgen, creando la necesidad de respuestas adecuadas para comprender la verdadera sabiduría divina.

  El profeta Moisés es muy conocido entre los cristianos, pero es posible que muchos musulmanes no sepan que el nombre "Moisés" en la Biblia se transformó en "Musa" a lo largo de 1400 años. Es crucial señalar que Moisés y Musa son, de hecho, el mismo nombre. La afirmación de que Moisés no transmitió el Dharma Shastra puede ser tanto verdadera como falsa, y presenta una ambigüedad intrigante con una razón poderosa y desconocida. Esta revelación puede sorprender a algunos y enfrentar el desacuerdo de otros, pero su verdad sigue siendo independiente de opiniones. Es cierto que el profeta Moisés existió hace unos miles de años. Hace aproximadamente cinco mil años, el profeta Moisés compartió la sabiduría que poseía. Un profeta, por definición, es alguien que imparte la sabiduría de Dios, y Moisés se ganó este título a través de pensamientos divinos desde una edad temprana. A la edad de 20 años, <b>Bhagavan,</b> que había descendido sobre la tierra, proporcionó a Moisés la primera escritura divina, conocida como <b>"Torá.’</b> Moisés continuó compartiendo la sabiduría contenida en esa escritura.

  Dado que tenía sus raíces en los dharmas, llegó a ser conocido como el Dharma Shastra de Moisés. Moisés falleció a la edad de 54 años. Después de la muerte de Moisés, Bhagavan entró en su cuerpo y transmitió dharmas de los que Moisés nunca había hablado durante nueve años. A pesar de que Bhagavan Al abandonar el cuerpo de Moisés a la edad de 63 años, este hecho permaneció desconocido, lo que llevó a la gente a creer que el Profeta Moisés había vivido durante 63 años y había enseñado los dharmas él mismo. Aunque Dios le proporcionó a Moisés una escritura divina, no le impartió sabiduría directamente. Por lo tanto, la afirmación: “A Moisés no se le dio el pan de Paraloka” es cierta. La sabiduría impartida por Dios a través del cuerpo de Moisés se conoce como Dharma Shastra de Moisés. Por eso el versículo dice: “El Padre de Paraloka, el Espíritu Santo, dio el verdadero pan”. La esperanza de vida real de Moisés fue de 54 años, y nadie sabía que Dios extendió la vida de Moisés a 63 años. Todos estos misterios están aclarados en mi escritura, <b>Krishna Musa.</b>
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 104,
verse: ` <b>26)	El Evangelio de Juan, capítulo 6, versículo 46.</b>`,
meaning: `<b>
(6:46) Nadie ha visto al Padre sino el que es de Dios; sólo Él ha visto al Padre. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Comprender este versículo no es una tarea desafiante. Al leer el Bhagavad-Gita, la Biblia y el Corán en su totalidad, se hace evidente que los versos de estas escrituras divinas finales contienen significados sutiles. Los versículos del Corán, en particular, tienen una profundidad que sobrepasa otras escrituras divinas, lo que hace que su significado sea difícil de entender para muchos. Si bien los versículos de la Biblia pueden parecer sencillos, su verdadera realidad a menudo escapa a la comprensión. En consecuencia, Dios está brindando una comprensión integral de cada versículo a través de nosotros.

  Dios, representado como el Espíritu Santo, existe tanto antes como después de la creación. Él es el Dios primario. La verdadera apariencia o naturaleza de Dios sigue siendo desconocida para los humanos. En la última escritura divina, el Corán, el Dios principal se llama Alá, y el segundo Dios, Atma, también se conoce como Alá. Por lo tanto, Paramatma es el primer Allah y Atma es el segundo Allah. En la segunda escritura divina, la Biblia, a Paramatma se le designa como Dios y a Atma se le llama Padre. Es crucial reconocer que el Espíritu Santo es el Padre del Atma y el Atma es el Padre de los humanos. El Corán afirma que tanto Paramatma como Atma son dioses, mientras que la Biblia distingue a uno como Dios y al otro como Padre. Es esencial comprender que el Padre de la humanidad es el Atma y el Padre del Atma es el Espíritu Santo. El verso enfatiza que ningún ser humano ha visto al Padre (Atma) y desconoce la naturaleza del Atma. <b>Sin embargo, Atma es el único que se originó de Dios y, por lo tanto, ha sido testigo de su Padre, el Espíritu Santo. En contraste, Jeevatma nunca ha sido testigo de su Padre, Atma.</b>
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 105,
verse: `<b>27)	El Evangelio de Juan, capítulo 7, versículos 37 y 38.</b>`,
meaning: ` <b>
(7:37) En el último y más grande día de la fiesta, Jesús se puso de pie y dijo en voz alta: “Cualquiera que tenga sed, venga a mí y beba”.
<br><br>
(7:38) El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El verso tiene un significado sutil. Así como una persona sedenta busca agua naturalmente, la búsqueda de quienes buscan sabiduría se asemeja a la sed. El verso dice,<b> “Quien tenga sed de sabiduría, que venga a mí y sacie su sed...”</b> Cuando alguien se acerca a Jesús y recibe la sabiduría divina, es similar a satisfacer su sed <b>de sabiduría</b> de Jesús. Aquellos que creen en Jesús alcanzan la completa sabiduría divina, convirtiéndose en depositarios de sabiduría y compartiéndola con los demás. Jesús proclamó que de su interior fluirán ríos de agua viva. En este contexto, <b>el agua viva simboliza la sabiduría divina,</b> que otorga moksha (liberación) a los humanos y los mantiene en un estado perpetuo. Por eso a la sabiduría se la llama agua viva. Así como los humanos satisfacen su sed física bebiendo agua por la boca, también deberían <b>nutre su intelecto (buddhi) con sabiduría divina escuchando a través de sus oídos.</b>
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 106,
verse: `<b>28)	El Evangelio de Juan, capítulo 8, versículo 12.</b>`,
meaning: ` <b>
(8:12) Cuando Jesús volvió a hablar a la gente, dijo: “Yo soy la luz del mundo. El que me sigue nunca caminará en tinieblas sino que tendrá la luz de la vida”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Dios, conocido como el Espíritu Santo, creó a Atman para llevar a cabo Su gobierno y obrar a través de otros. Declaró que Atma era su hijo y le dio el poder de realizar sus tareas. Atma recibió la autoridad para quitar vidas humanas, juzgando basándose en su karma de nacimientos anteriores y facilitando su renacimiento. En el papel de juez, Atma actúa de acuerdo con el karma de cada individuo. El enredo humano en el karma influye en sus pensamientos, y el Atma, respondiendo a este karma, imparte la ignorancia que buscan los individuos. En consecuencia, con el tiempo, los adharmas aumentan en la Tierra.

  El Espíritu Santo, o Dios, deben encarnar en la Tierra en forma humana como Bhagavan para frenar los adharmas y promoverlos cuando los adharmas surgen debido a intereses humanos y a la ignorancia inducida por el Atma. Cuando Dios adopta la apariencia de un hombre, se le llama Bhagavan. Esta encarnación enseña la sabiduría divina sin revelar su identidad divina, a menudo se le conoce como el Hijo de Dios, siendo Dios Su Padre. Según esta perspectiva, hay un Dios, el creador, que tiene dos Hijos: uno como Atma permanente dentro de los humanos y otro como Hijo temporal en forma humana. Cuando el primer Hijo (Atma) dentro de los humanos desarrollan adharmas, el segundo Hijo temporal, encarnado como humano, imparte dharmas. Por tanto, hay un solo Dios con dos hijos. El Hijo en forma de Jesús proclamó: <b>“Soy la luz del mundo.”</b> La sabiduría se transforma en fuego de sabiduría (Jnana Shakti), que quema el karma humano. Jesús, que encarna el fuego de la sabiduría, es la luz de la sabiduría. Él vino a enseñar sabiduría a la humanidad, y aquellos que siguen y comprenden Su sabiduría no morarán en la ignorancia sino en la sabiduría. Por eso Jesús declaró: “El que me sigue, nunca andará en tinieblas, sino que tendrá la luz de la vida”. Sólo Dios, que encarna en forma humana, puede otorgar la luz de la sabiduría y establecer los dharmas.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 107,
verse: `<b>29)	El Evangelio de Juan, capítulo 8, versículo 14. </b>`,
meaning: `<b>
(8:14) Jesús respondió: “Aunque testifique de mí mismo, mi testimonio es válido, porque sé de dónde vengo y adónde voy. Pero no tienes idea de dónde vengo ni adónde voy. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jesús, en su apariencia exterior, se parecía a un hombre común y corriente sin rasgos distintivos. Como individuos que habitan en cuerpos hechos de Prakruti, la apariencia externa de cada ser parece la misma. Jesús también se presentó como un ser humano común y corriente. Hay un dicho entre los ancianos que dice que nadie sabe qué tipo de serpiente reside en un montículo de termitas, lo que establece un paralelo con la naturaleza misteriosa del Jeeva dentro de un cuerpo. Cada Jeeva nacido llega a un cuerpo desde algún lugar, guiado por las decisiones del Atma basadas en su karma. Al completar el karma y la muerte, Jeeva entra en un nuevo cuerpo bajo el juicio del Atma. A pesar de residir en el cuerpo, Jeeva desconoce su origen en cada nuevo nacimiento. El manas (mente) es el órgano responsable de recordar, pero también muere con cada vida que pasa, provocando la pérdida de la memoria de nacimientos anteriores. En consecuencia, un individuo, digamos, a la edad de 40 años, sólo recuerda los últimos 40 años del nacimiento actual y no los numerosos años anteriores.

  Este proceso se aplica no sólo a los humanos sino también a todos los seres vivos. Aunque Jesús pueda parecer un hombre común y corriente, es esencial considerar si el mismo proceso cíclico se aplica a Él. Jesús nació en Israel, lo que significa que vino de otro lugar. Pero Él era consciente de su origen y afirmó: <b>“sé de dónde vengo.”</b> A diferencia de las personas comunes y corrientes que desconocen sus futuros nacimientos al morir, Jesús estaba muy consciente de su destino después de la muerte. Está marcada diferencia entre Jesús y un hombre común y corriente nos lleva a preguntarnos acerca de la singularidad de Jesús. La respuesta a esta pregunta contiene la clave de la mejor sabiduría, revelando que Jesús no fue un hombre común y corriente sino que nació con un propósito específico.

  Un individuo que nace con un propósito predeterminado antes de nacer se denomina "nacido por una causa". Ningún ser humano posee semejante propósito prenatal. Por el contrario, Dios nace con la intención específica de establecer el dharma en la Tierra. Sólo Dios, y ningún ser humano, tienen la capacidad de establecer el dharma. Dios permanece eterno e inmutable, no se ve afectado por el nacimiento o la muerte, y mantiene una memoria constante. Cuando Dios se encarna en la Tierra en la forma de un hombre disfrazado, imparte enseñanzas sobre el dharma y parte, no renace después de la muerte, un destino común a los humanos comunes y corrientes. En la muerte, el maná (mente) del ser humano se destruye, pero Dios no muere ni nace en otro lugar. Asume un disfraz único de hombre, cumple su propósito y luego regresa a su origen. Así, en el versículo, Jesús declaró: <b>“sé a dónde voy”,</b> enfatizando la naturaleza distintiva de la existencia y el propósito de Dios.

  Los humanos carecen de conocimiento sobre el paradero o la naturaleza de Dios. Cuando Dios se encarna como hombre, su origen permanece desconocido. A diferencia del nacimiento humano convencional, el nacimiento de Dios es distinto; no renace en ningún otro lugar después de morir en algún otro lugar. El Dios omnipresente, que existe incluso en el útero, transforma su forma y parece nacer como un bebé. Dado que Dios está presente donde nace, resulta difícil precisar su origen. Aquellos que no son conscientes de que Dios es omnipresente permanecen ajenos al origen de Jesús. Además, sigue siendo desconocido el destino de Dios después de asumir una forma diferente. En consecuencia, en el versículo, Jesús declaró: <b>“Tiene no tengo idea de dónde vengo ni adónde voy.”,</b> enfatizando la naturaleza misteriosa de la existencia y los movimientos de Dios.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 108,
verse: `<b>30)	El Evangelio de Juan, capítulo 8, versículo 19.</b>`,
meaning: `<b>
(8:19) Entonces le preguntaron: "¿Dónde está tu Padre?" “No me conocéis ni a mí ni a mi Padre”, respondió Jesús. “Si me conocieseis, conoceríais también a mi Padre”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  ¿Dios existe? Si lo hace, ¿cómo está? ¿Dónde está? Si conoces las respuestas a estas preguntas, entenderás quiénes son el Padre y el Hijo. Sólo hay un Dios, pero debemos saber de dónde vino el Hijo. Las palabras "Padre" e "Hijo" se utilizan con frecuencia en la Biblia. <b>Hay que entender que “Padre” significa Dios; el término se usó para referirse a Dios en la Biblia. En el Corán, a Dios se le llama "Alá" y en el Bhagavad-Gita, se hace referencia a Dios como "Paramatma”.</b> Aunque estas palabras son diferentes, todas significan Dios. La esencia de Dios debe verse en el término "Padre". Cuando Jesús estuvo en la tierra, los fariseos le preguntaron acerca de su Padre. Jesús respondió:<b> “No me viste ni a mi padre.”</b> Los fariseos no preguntaron acerca de Jesús, aunque Él estaba delante de ellos. Querían saber acerca de su padre físico, sin darse cuenta de que el padre de Jesús era Dios. Quizás se sorprendieron cuando Jesús habló directamente de sí mismo y de su Padre. Pensaron que estaban viendo a Jesús en persona y le pidieron que averiguara sobre su padre desconocido. Entonces Jesús dijo: <b>“No me viste ni a mi padre.” </b>Necesitamos entender el significado de esa palabra.

  El Padre de Jesús es el Espíritu Santo. Atma, el Hijo del Espíritu Santo, está presente en todos los cuerpos y gobierna sus operaciones. El Espíritu Santo, conocido como el Padre, y Atma, conocido como el Hijo, están siempre presentes. El Espíritu Santo, Paramatma, es eterno y existe desde antes de la creación. Atma, el Hijo del Espíritu Santo, ha estado presente en todos los cuerpos desde después de la creación.

  Además del Hijo permanente, Atma, Dios (el Espíritu Santo) tiene otro Hijo llamado <b>'el Hijo unigénito,’</b> que de vez en cuando viene a la tierra. Existen diferencias significativas entre el Hijo permanente (Atma) y el Hijo temporal (el Hijo unigénito). Por ejemplo, cuando el Atma viene con un cuerpo humano normal, el cuerpo tiene un Jeevatma separado. Aunque todo el cuerpo pertenece al Atma y el Atma es la cabeza del cuerpo, Jeevatma también reside con el Atma en el cuerpo y piensa que el cuerpo es mío. Si el Hijo temporal, el Hijo unigénito, viene a la tierra con un cuerpo, no hay Jeevatma en ese cuerpo. En el cuerpo de una persona común, Dios y el Atma son diferentes. Atma realiza todas las tareas en ese cuerpo y Dios no trabaja. Pero en el cuerpo del Hijo unigénito, Paramatma (Dios) reside como Atma y realiza tareas en la forma de Atma. Debido a que no hay Jeevatma en el cuerpo del Hijo unigénito, aquel que actúa como Atma también actúa como Jeevatma. Aunque quien está en el cuerpo del Hijo unigénito es Dios, Él pretende ser Jeevatma. <b>El que vino disfrazado de Hijo unigénito es el Espíritu Santo (Dios). Ese Dios está actuando como Jeevatma.</b> Hay muchas diferencias entre el Hijo permanente de Dios y el Hijo temporal.

  Se puede decir que la mayoría de las personas desconocen que Dios tiene un Hijo permanente y un Hijo unigénito que viene ocasionalmente. Al adquirir sabiduría, uno puede entender la existencia del Atman y la sabiduría del Atma, pero reconocer al Hijo unigénito es un desafío. Identificar al Hijo unigénito entre tantos humanos es difícil. Por lo tanto, nadie identificó al Hijo unigénito que vino a Treta Yuga, Dvapara Yuga y Kali Yuga. Aunque Jesús era el Hijo unigénito de Dios en el Kali Yuga, la gente no podía reconocerlo como el segundo Hijo de Dios. A pesar de su proclamación de ser Hijo de Dios, la gente no pudo identificarlo y lo sometió a muchos insultos y torturas. La gente no reconoció a aquellos que vinieron en Dvapara Yuga y Kali Yuga como el Hijo de Dios, a pesar de que declararon: "Yo soy el Hijo de Dios". Dudo en afirmar que quien vino a Treta Yuga fue el Hijo de Dios. Ese día, Dios mismo vino disfrazado de Hijo e impartió sabiduría a la tierra. Aunque era conocido como un gran gnani y enseñaba sabiduría, también dudo en decir que Él era Bhagavan porque fue retratado como un hombre malvado entre la gente. Sin embargo, no temo decir: <b>“Ravana Brahma es el Hijo unigénito.”</b>

  En el Dvapara Yuga, Krishna vino como Bhagavan. Tanto Bhagavan como el Hijo unigénito son lo mismo. Sin embargo, debido a que Krishna fue retratado como astuto, muchas personas todavía hoy no son conscientes de Su grandeza. Aunque Dios vino disfrazado de hombre y enseñó los dharmas divinos, los humanos no se centraron en la sabiduría que Él impartía; en cambio, en su mayoría examinaron Su comportamiento durante ese tiempo. Sólo unos pocos, entre millones, reconocieron Su sabiduría y declararon que Krishna era Dios, pero la mayoría habló mal de Él. Aquellos que desconocían la encarnación de Krishna en el Dvapara Yuga encontraron difícil reconocer a Jesús como el Hijo de Dios en el Kali Yuga. Debido a que Krishna y Jesús anticiparon que los humanos podrían no reconocer la sabiduría que enseñaban, ambos declararon: <b>“somos dioses”,</b> en el contexto de sus palabras, creyendo que los humanos pueden reconocer su sabiduría al hacerlo. De manera similar, Jesús dijo: <b>“No me conocéis ni a mí ni a mi Padre”</b>. Con la intención de hacer que la gente se dé cuenta de que Dios y Jesús son lo mismo.

  Aquellos que afirman tener devoción a Dios a menudo hablan con sarcasmo cuando se encuentran con otras personas que poseen más sabiduría que ellos. Los fariseos hablaron a Jesús con la misma actitud. Sabiendo que Jesús había nacido de María sin padre, le preguntaron: "¿Dónde está tu padre?" Jesús entendió que se burlaban de Él y no pedían con devoción. Él respondió con una respuesta alucinante: <b>“No me conoces ni a mi padre.”</b> Aquellos que comprendan correctamente Sus palabras entenderán que el Jesús visible y el Dios invisible son uno y el mismo. Jesús también dijo: <b>“Si me conocierais, conoceréis también a mi Padre.</b>..” Sin embargo, se puede decir que quienes escucharon sus palabras no entendieron lo que decía. Si hubieran comprendido Su mensaje, habrían reconocido quién era Jesús ese día. Se habrían dado cuenta de que Él no era un hombre común y corriente. A pesar de las palabras de Jesús, lo trataron como si fuera un hombre común y corriente. Parece que no sabían nada extraordinario acerca de Jesús.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 109,
verse: `  <b>31)	El Evangelio de Juan, capítulo 8, versículo 21.</b>`,
meaning: ` <b>
(8:21) Jesús les dijo otra vez: Yo me voy, y me buscaréis, y moriréis en vuestro pecado. A donde yo voy, tú no puedes venir”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jesús pronunció muchas palabras para que la gente supiera acerca de sí mismo, y las palabras anteriores son un ejemplo. <b>“Me voy y me buscaréis. A donde yo voy no puedes venir”,</b> dijo Jesús a la gente. A primera vista, este versículo puede no parecer particularmente profundo. Cuando alguien va a algún lugar sin informar a los demás, no sabemos adónde ha ido y, aunque busquemos, es posible que no podamos encontrarlo. La falta de información hace que no podamos ir adonde ellos han ido. Quizás se pregunte qué sabiduría hay en este hecho tan común. Veámoslo desde otro ángulo. En nuestra juventud, solíamos jugar al juego "Ladrón y policía". En este juego, el ladrón se esconde y, después de un par de minutos, la policía comienza a buscarlo para atraparlo. Para atrapar al ladrón, la policía debe ir al lugar donde se esconde el ladrón. Si la policía no puede llegar al escondite, no podrá encontrar al ladrón ni siquiera después de buscar en otro lugar. Un día, cuando tenía diez años, jugamos a este juego. Yo era el ladrón y los demás eran la policía. Antes de esconderme dije: “Me voy y no me podréis encontrar”. Ellos respondieron con confianza: "Te encontraremos en diez minutos". Luego agregué: “A donde yo voy, tú no puedes venir”, y fui a esconderme de ellos.

  Dos minutos más tarde, la policía inició la persecución pero no pudo encontrarme durante media hora. A pesar de buscar en todos los lugares, no pudieron llegar a donde me escondía. Ese día, estaba sentado en la sala de poja de mi casa y había cerrado las puertas. Los demás que hacían de policía buscaron por todas partes, incluida la casa donde me escondía, pero no fueron a la sala de poja porque las puertas estaban cerradas y no registraron el interior. Al principio pensé que no había nada especial en el verso anterior, ya que se parecía al juego de 'Ladrón y policía'. Sin embargo, luego me di cuenta de que la frase <b>"Morirás en tu pecado</b> “en el versículo tenía un significado significativo. Aunque parecía un juego, descubrí que contenía una profunda sabiduría. Luego profundicé en una comprensión integral del significado de esta palabra. Esto es lo que significa.

  Jesús estuvo visible para todos en la tierra durante algún tiempo, pero desafortunadamente nadie creyó en Él. A pesar de realizar muchos milagros para demostrar que Él no era un hombre común y corriente (dar la vista a los ciegos, permitir caminar a los cojos, curar la lepra e incluso resucitar a los muertos para demostrar su capacidad de perdonar pecados), la gente no reconoció su verdadera grandeza. Incluso aquellos que no reconocieron a Jesús durante Su vida lo buscarían más tarde, buscando alivio a su sufrimiento. Sin embargo, no habrá ningún beneficio en buscarlo una vez que se haya ido, ya que no será visible para nadie. Las personas que mueren en sus pecados no pueden recibir el perdón de Jesús, ya que no saben adónde fue. Incluso si aquellos que negaron a Jesús durante Su vida lo reconocen más tarde como Dios, sus pecados no serán perdonados. Jesús había predicho todas estas cosas al pueblo de antemano. Cuando Jesús dijo:<b> “me voy”,</b> nadie le pidió que se quedara más tiempo. En cambio, la gente gritó para que lo crucificaran, lo que provocó su muerte en la cruz.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 110,
verse: `<b>32)	El Evangelio de Juan, capítulo 8, versos 23 y 24.</b>`,
meaning: `<b>
(8:23) Pero él continuó: “Vosotros sois de abajo; Soy de arriba. Vosotros sois de este mundo; Yo no soy de este mundo.
<br><br>
(8:24) Os dije que moriréis en vuestros pecados; si no creéis que yo soy, ciertamente moriréis en vuestros pecados”.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En estos dos versículos, el versículo 24 parece similar al versículo 21, pero el versículo 23 es único. Jesús le dio al pueblo una segunda oportunidad para reconocer que Él no era un hombre común y corriente y dijo: “Ustedes son de abajo; Soy de arriba. Vosotros sois de este mundo; Yo no soy de este mundo." Este versículo se divide en dos partes: la primera es “Vosotros sois de abajo; Yo soy de arriba”, y el segundo es “Vosotros sois de este mundo; Yo no soy de este mundo." Basado en la primera parte del versículo, “Vosotros sois de abajo; Yo soy de arriba”, ha habido dos tipos de personas desde el Fruta Yuga: la gente inferior y la gente superior. Hay una razón detrás de cómo surgieron estos dos nombres, el inferior y el superior. Así es como se divide a las personas en categorías inferiores y superiores.

  La era del Fruta Yuga abarca 1.728.000 años. Durante los primeros mil años de Fruta Yuga, surgieron dos tribus entre la gente: los jennis (aquellos con sabiduría) y los ignorantes. En aquella época había muy pocos granos en la Tierra, mientras que los ignorantes eran innumerables. En ese yuga, la población mundial era sólo de unos 30 millones, y la población india no supera los 300.000. El Sol descendió sobre la Tierra e impartió sabiduría divina a una persona llamada Manu. Sólo dos o tres personas aprendieron la sabiduría directamente de Manu, y todas las demás personas tenían un gran respeto por estos jennis, aprendiendo de ellos la sabiduría divina. En aquellos días, la gente tenía en alta estima a los jennis, haciéndolos sentar en el asiento superior mientras ellos mismos se sentaban en el suelo, escuchando la sabiduría. Era costumbre que la gente le diera el asiento superior a los gurús y se sentará en el suelo. Basado en esto, Jesús dijo: “Vosotros sois de abajo; Soy de arriba”. Esto significa, <b>"Soy vuestro maestro (gurú) para todos vosotros...”</b>

  Era común que los profesores se sentaran en el asiento superior mientras que las personas que buscaban sabiduría se sentaban en el suelo. Los profesores solían transmitir a la gente que estaban por debajo de los profesores que estaban por encima de ellos. Los maestros que impartían sabiduría divina eran conocidos como maestros de Brahma Vidya. "Brahma" significa grande y "Brahma Vidya" significa gran enseñanza. Los maestros que poseían conocimiento de Brahma Vidya fueron llamados brahmanes. En aquellos días, los brahmanes significaban maestros. Sólo dos o tres maestros en toda la India fueron llamados brahmanes. Esos brahmanes solían clasificar al resto de la gente como "gente inferior". Todos aquellos que carecían de sabiduría fueron designados como "gente inferior". De esta manera, todo el país tuvo "gente inferior". Sobre esta división. A medida que el sistema de castas tomó forma, aquellos que conocían a Brahma Vidya comenzaron a decir: "Somos brahmanes". De manera similar, aquellos que eran ignorantes fueron etiquetados como “Estás debajo de nosotros (Maa-diguvavaru en telugu)”. Así, dos tribus <b>-el superior (Eguvavaru en telugu) y el inferior (Diguvavaru en telugu)-</b> formaron. Aunque la palabra "inferior (Maadi Uva varu)" existe incluso hoy en día, es posible que la gente no comprenda completamente su significado histórico. Con el tiempo, el término "Maadi Uva vaart" se transformó en casta Madiga (casta catalogada), que ahora se cuenta como una casta inferior.

  Cuando se originó el sistema de castas, había dos castas: los brahmanes y los madigas (casta programada). El término "Madiga" se utilizó inicialmente para referirse a aquellos que se consideraban ignorantes y carecían de sabiduría. Sin embargo, con el tiempo, incluso entre aquellos que carecían de sabiduría, surgieron numerosas castas, y aquellos que permanecieron sin clasificar todavía fueron etiquetados como Madiga. Mirando hacia atrás en la historia, Madiga no era originalmente una casta sino más bien un nombre dado a los ignorantes por dos o tres maestros. En base a esto, las personas de todas las castas que carecen de sabiduría pueden llamarse Madiga. Las personas están divididas en castas debido a una historia desconocida. Es injusto e ignorante etiquetar a las personas restantes como Madiga. Hace más de 2.000 años, Jesús también usó las palabras "superior" (Egu Babaru) e "inferior" (Digu Bávaro). Él dijo, <b>"Eres de abajo; soy de arriba”,</b> refiriéndose a los ignorantes. Debe entenderse que las palabras “superior” e “inferior” se usan para indicar: “Yo soy un gnani y tú eres un ignorante”.

  La segunda palabra de Jesús es: “Vosotros sois de este mundo; Yo no soy de este mundo." "Loca" (Mundo) en telugu significa "tener experiencias". Hay dos tipos de personas según las experiencias que tienen. Quienes tienen experiencias pertenecen a este mundo y quienes no tienen experiencias no pertenecen a este mundo. La gente común disfruta de todas las experiencias del mundo, por eso son los residentes de este mundo. Jesús, que no tiene ninguna experiencia, dijo que no era de este mundo. Aunque parece un hombre, no tiene ninguna experiencia como hombre. Aunque Jesús tiene un cuerpo humano, no es un Jeevatma como los demás. Cuando Él no es un Jeevatma, no hay karma. Por tanto, Él no tiene experiencia basada en el karma. Paramatma envió especialmente a Jesús. En otras palabras, el Espíritu Santo vino disfrazado de Jesús. Según el dharma espiritual, no deberíamos decir eso. Paramatma creó y envió especialmente a Jesús. Por tanto, a Jesús se le debe llamar Hijo del Espíritu Santo. Como Jesús no es un Jeevatma, se puede decir que no tiene experiencias. Si Jesús fuera un Jeevatma, no debería ser llamado Hijo del Espíritu Santo. Jeevatma es el Hijo de Atma. El Padre de Atma es el Espíritu Santo. Por tanto, Jeevatma se convierte en nieto del Espíritu Santo. A Jesús se le llama hijo de Dios porque es enviado de Dios por Dios. Jesús también fue llamado explícitamente el Hijo unigénito. Atma es el Hijo del Espíritu Santo. El Hijo unigénito es el Hijo temporal que desciende a la tierra necesitada. Por lo tanto, el Hijo temporal se convierte en Hijo del Espíritu Santo como Atma y no se convertirá en nieto como Jeevatma. Jeevatma adquiere experiencia. Por lo tanto, Jeevatma, que tiene experiencias, es de este mundo. Jesús, como Atma, que no tiene experiencias, no es de este mundo. Él es de Paraloka.

  Jesús le dio al pueblo una segunda oportunidad de reconocerlo como un hombre extraordinario y citó estos versículos (Juan 8:23, 24). Sin embargo, los humanos no podían percibir la grandeza de Jesús y lo consideraban un hombre común y corriente. Por lo tanto, Jesús o Sus enseñanzas no pueden absorberlos de sus pecados. Jesús, el Hijo del Espíritu Santo, vino entre los hombres y pronunció muchas palabras para darse a conocer. Reiteró por segunda vez que aquellos que no pudieran encontrarlo y creer en Él morirían en sus pecados, como había mencionado anteriormente en Juan 8:21. Proporcionó una tercera oportunidad al pronunciar sus últimas palabras. Jesús repitió tres conjuntos de versículos para ayudar a la gente a identificarlo. Advirtió que aquellos que no lo reconocieran no serían perdonados de sus pecados. Examinemos el tercer conjunto de versículos para ver lo que dijo.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 111,
verse: `<b>33)	El Evangelio de Juan, capítulo 8, versículo 24.</b>`,
meaning: `<b>
(8:24) Os dije que moriréis en vuestros pecados; si no creéis que yo soy, ciertamente moriréis en vuestros pecados.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Se sabe que este versículo dio una tercera oportunidad de saber quién era Jesús. En este versículo, Jesús le dijo directamente al público quién era Él. Él dijo, <b>"Aquellos que no creen que yo soy el Espíritu Santo y el Creador morirán en su pecado...”</b> Jesús Él mismo declaró quién era. Al principio dijo: <b>“Me iré; no puedes venir al lugar donde yo he ido”,</b> para darles alguna oportunidad de entenderlo. En el segundo verso, Él dijo: <b>“Vosotros sois de este mundo; Yo no soy de este mundo”,</b> brindando más detalles para ayudarlos a comprender quién era Él. Se puede entender que Jesús es el Espíritu Santo en el segundo versículo. En el tercer verso, Él dijo: <b>“El que no cree que yo soy no puede salir del pecado”,</b> proporcionando mayor claridad. En el tercer versículo, Jesús declaró: <b>“Yo soy Dios.”</b> A pesar de esto, la gente reconoció a Jesús como un hombre común y corriente y no pudieron darse cuenta de que Él era Dios. Sin embargo, algunos quedaron sorprendidos por las palabras de Jesús. Aunque no lo creían, le preguntaron quién era. Jesús respondió usando estos tres versículos (Juan 8:21, 22, 23) para ayudarlos a comprender que Él no era un hombre común y corriente. Sin embargo, ellos no se dieron cuenta y preguntaron: "¿Quién eres?". Jesús respondió: <b>“Justo lo que te he estado diciendo desde el principio...”</b>

  Además, dijo: “El que me envió es digno de confianza, y lo que he oído de él, lo digo al mundo”. Sin embargo, la gente no se dio cuenta de que Él estaba hablando de su Padre (el Espíritu Santo). Aunque dijo tanto, la gente no reconoció a Jesús. Algunos lo trataron como a un hombre común y corriente, y otros lo trataron peor que a un hombre común y corriente. Jesús dijo algo más acerca de esas personas.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 112,
verse: ` <b>34)	El Evangelio de Juan, capítulo 8, versículo 28.</b>`,
meaning: ` <b>
((8:28) Entonces, Jesús dijo: “Cuando hayáis levantado al Hijo del Hombre, entonces sabréis que yo soy, y que no hago nada por mi cuenta, sino que hablo exactamente lo que el Padre me ha enseñado. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Hay cierta confusión en este versículo con respecto a la frase: <b>“Has levantado al Hijo del Hombre.”</b> Es posible que uno no entienda la frase. Para interpretar esta frase correctamente, uno debería leerla como “Cuando la gente levante a Jesús sobre sus cabezas” en lugar de “Cuando hayas levantado a Jesús”. Algunos tal vez pregunten: “¿Por qué la gente levantaría a Jesús por encima de sus cabezas?” La respuesta es que <b>Jesús hay que entenderlo con la cabeza</b>.Que está sobre nuestro cuerpo. Quien entiende a Jesús con su <b>intelecto (buddhi)</b> sabrás que Jesús es el Espíritu Santo. Además, este versículo revela que la sabiduría divina que Jesús enseña no es suya; en cambio, está enseñando según las indicaciones del Espíritu Santo.

  En lugar de afirmar que los humanos deberían entender a Jesús con el buddhi en la cabeza, el versículo dice que la gente ha elevado a Jesús. Se sabe que Jesús es Paramatma (el Espíritu Santo) si uno lo comprende. Con el buddhi enel cuerpo. Mientras la gente no haya comprendido que Jesús es Dios, <b>“los pecados del pueblo no son perdonados, y mueren en su pecado”,</b> como se indica en los tres versículos anteriores. Si entienden lo que dijo Jesús, se sabrá que Jesús es Dios. Se revela el secreto de que el Espíritu Santo se encarna como hombre para enseñar su sabiduría. Cuando se aprende que Jesús es Dios, algunos pueden pensar que Jesús mismo está diciendo toda la sabiduría que Jesús habla. Sin embargo, no es posible decir lo que algunas personas piensan. La razón es que después de decir: <b>“Soy él”,</b> pronunció otra palabra.

  Jesus dijo, <b>"No hago nada por mi cuenta sino hablo exactamente lo que el Padre me ha enseñado...”</b> Esto podría crear la impresión de que el Padre y Jesús son distintos. La razón para expresarlo de dos maneras tiene sus raíces en el hecho de que Jesús era un hombre. Dios, en Su verdadera forma, es invisible y encarna el poder. Cuando Dios toma forma humana, y si un individuo percibe esta verdad con el intelecto (buddhi), comprenderá que el Espíritu Santo y Jesús son uno y lo mismo. Sin embargo, cuando Dios se encarna como hombre, va en contra de la ley espiritual que la encarnación declara abiertamente: "Yo soy Dios". Aunque uno pueda reconocer a la persona visible como Dios, esta verdad no debe ser revelada abiertamente según <b>ley espiritual.</b> Siguiendo esta regla espiritual, Jesús declaró: <b>“No hago nada por mi cuenta sino hablo exactamente lo que el Padre me ha enseñado.”</b>, adhiriéndose a los principios de la ley espiritual.

  Jesús dijo: "Estoy diciendo lo que el Padre dijo". Ambas frases – “No hago nada por mi cuenta” y “Dios hace todo” – significan lo mismo. Cuando la gente reconozca que Jesús es el Espíritu Santo, sus pecados serán perdonados. Si bien es sabido entender que Jesús es el Espíritu Santo, es espiritualmente incorrecto decir que el Espíritu Santo es Jesús. Por eso, el mismo Jesús dijo: <b>“Hasta que no sepas que yo soy Dios, tus pecados no te serán perdonados.,"</b> y <b>"Soy él”,</b> para que los humanos entendieran quién era Jesús. Según la ley espiritual, finalmente dijo: “Estoy haciendo todo lo que mi Padre me dijo que hiciera”. Por lo tanto, no se debe suponer que Jesús habló de dos maneras en el versículo. Aunque en el versículo está escrito que “Yo soy Dios” y “Estoy haciendo lo que Dios dice”, ambos transmiten el mismo significado. Se puede pensar que Jesús habló cosas contradictorias si esto no se entiende. Quien comprende la sabiduría puede reconocer que Dios viene como hombre, pero no debe declarar que una persona en particular es Dios. Por lo tanto, Jesús también dijo: “Yo soy Dios” en una palabra y “Mi Padre es Dios” en otra. Ambas son ciertas. Además, Jesús dijo lo siguiente a la gente.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 113,
verse: `<b>35)	El Evangelio de Juan, capítulo 8, versículo 29.</b>`,
meaning: ` <b>
(8:29) El que me envió está conmigo; Él no me ha dejado solo, porque siempre hago lo que le agrada. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Se dice que este versículo indica que Jesús y el Espíritu Santo son uno y lo mismo. Para respaldar esto, Jesús dijo: “El que me envió está conmigo”. Esto significa que el Dios que envió a Jesús está en Él y que el Espíritu Santo y Jesús son lo mismo. Hay algo llamado "Voluntad" en el cuerpo humano. Jesús dijo que siempre haría las cosas según la voluntad de Dios. De otra manera, dijo que la voluntad de Dios está obrando en Él. Es un testimonio del hecho de que Dios está en Jesús. Jesús también dijo que el Espíritu Santo no lo había dejado solo. Es como si Jesús dijera que Dios estaba con Él y que Dios era Él. El mismo Jesús pronunció estas palabras para reconocerlo como Dios. Aunque Dios vino como "Jesús" en el Kali Yuga, la gente no lo reconoció. Por lo tanto, se hizo necesario que Jesús dijera estas palabras para reconocer Su grandeza. De lo contrario, la gente no captaría la sabiduría de Jesús. Cuando Jesús pronunció estos versículos, algunas personas le creyeron.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 114,
verse: ` <b>36)	El Evangelio de Juan, capítulo 8, versículos 53 y 54</b>`,
meaning: ` <b>
(8:53) ¿Eres tú mayor que nuestro padre Abraham? Él murió, y también los profetas. ¿Quién crees que eres?"
<br><br>
(8:54) Jesús respondió: “Si me glorío a mí mismo, mi gloria no significa nada. Mi padre, A quién reclamamos como vuestro Dios, es el que me glorifica.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aunque Jesús dio explicaciones detalladas para que la gente lo entendiera, a ellos les costaba comprender Su identidad, lo que los llevó a preguntar: “¿Quién eres tú?” En respuesta, Jesús declaró: “Si me glorío a mí mismo, mi gloria no significa nada”. Habiendo hablado ya de sí mismo en cinco ocasiones, reconoció la posibilidad de que sus palabras fueran percibidas como falsas si las repitiera o las elaborara más. Por lo tanto, Jesús explicó: “Si vuelvo a decir algo diferente de lo que se ha dicho hasta ahora, entonces mi Padre, a quien vosotros proclaman como vuestro Dios, me glorificará”. Esta declaración subraya la unidad fundamental entre Jesús y su Padre, a quien la gente considera Dios. Sin embargo, al adherirse a las reglas espirituales, uno no debe afirmar directamente ser Dios. Por lo tanto, Jesús declaró: “Yo soy Dios” inicialmente para ayudar a la gente a entenderlo. Posteriormente, aclaró afirmando que Dios era su Padre. “Sólo porque te dije dos cosas diferentes, no debes confundirte. Debéis comprenderme con la verdad”, dijo Jesús, enfatizando la importancia de comprender Su identidad más allá de las expresiones superficiales.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 115,
verse: `<b>37)	El Evangelio de Juan, capítulo 8, versículo 55.</b>`,
meaning: `<b>
(8:55) Aunque vosotros no le conocéis, yo le conozco. Si dijera que no, sería un mentiroso como usted, pero sí lo conozco y obedecer Su palabra. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jesús proclamó: “No conocéis a Dios; Conozco a Dios”, abordando la percepción de muchos que lo consideraban un hombre común y corriente. Surgió la necesidad de tal declaración para aclarar la relación distintiva de Jesús con Dios. Algunos cuestionaron cómo Jesús, siendo humano como los demás, podía afirmar conocer a Dios cuando otros no. Para abordar esta pregunta, podemos considerar la repetida declaración de Jesús: “Yo soy Él”, en tres versículos distintos. Según esta declaración, Jesús no posee Jeevatma en Su cuerpo, aunque tiene forma humana. En cambio, el Espíritu Santo sirve como el único Atma en Su cuerpo, participando activamente en cada acción. La idea errónea surge cuando la gente asume que el Atma es el Jeevatma, lo que les lleva a creer que Jesús puede no conocer a Dios. Sin embargo, la verdad es que Paramatma (el Espíritu Santo) mismo reside en el cuerpo de Jesús, dándole a conocer a Dios. Como el Espíritu Santo es la conciencia dentro de Jesús, no hay necesidad de un conocimiento separado; Jesús posee inherentemente a Dios como Su conciencia. Por el contrario, los humanos comunes tienen la mente (manas) como conciencia en sus cuerpos, pero carecen de la conciencia de Atma o Paramatma. La falta de conciencia de Paramatma es la razón por la cual los humanos no conocen a Dios, mientras que Jesús, con Dios como Su conciencia, inherentemente conoce a Dios.

  Si Jesús afirmara: “No conozco a Dios”, sugeriría una falta de conciencia de Dios en Él, similar a la de los humanos comunes. Semejante afirmación equivaldría a una falsedad. Por lo tanto, Jesús declaró: “Si dijera que no conozco a Dios, sería mentiroso como vosotros”. La singularidad radica en el hecho de que el Espíritu Santo es el único habitante del cuerpo de Jesús, eliminando la existencia de un par dual de almas: Atma, responsable de las acciones, y Jeevatma, de las experiencias. En el cuerpo de Jesús, donde sólo reside el Espíritu Santo, cada palabra pronunciada se origina en el Espíritu Santo. Por eso, cuando Jesús expresó: “Estoy consciente de Él. Yo lo conozco y obedecer su palabra”, estas palabras emanan del Espíritu Santo, a pesar de que Jesús hablaba de manera similar a todos los demás. A pesar de Su apariencia exterior de hombre común y corriente, no había ningún aspecto desconocido para Él. Una ilustración de este profundo conocimiento se desarrolló cuando Jesús habló de Abraham, una figura fallecida hace mucho tiempo, lo que provocó asombro y suscitó una pregunta entre quienes lo rodeaban.

</div></div>

</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 116,
verse: ` <b>38)	El Evangelio de Juan, capítulo 8, versículos 57 y 58.</b>`,
meaning: `<b>
(8:57) “Aún no tienes cincuenta años”, le dijeron, “y has visto ¡Abrahán!".
<br><br>
(8:58) “En verdad os digo”, respondió Jesús, “¡antes que Abraham naciera, yo existo!” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando Jesús pronunció estas palabras, tenía aproximadamente 32 años, y estaba a punto de cumplir 33 años. Abraham, una figura histórica, había vivido siglos antes de Jesús, similar a un bisabuelo de la gente de la época de Jesús. Cuando Jesús se refirió a Abraham, los judíos presentes preguntaron cómo podía hablar de un hombre que lo había precedido durante mucho tiempo, que había nacido y muerto en una época diferente. En respuesta, Jesús hizo la enigmática declaración: “Antes que Abraham naciera, yo existo”. Esta afirmación pareció engañosa a quienes lo rodeaban, dada la clara distinción generacional entre Jesús y Abraham. Sin embargo, lo que Jesús expresó era una verdad absoluta, aunque a sus contemporáneos les pareciera paradójico.

  Exploremos la verdad detrás de esta afirmación. El cuerpo físico de Jesús nació hace aproximadamente 32 años. Sin embargo, sólo el Espíritu Santo reside en Su cuerpo, no el Jeevatma. Si Jeevatma estuviera presente, Jesús no tendría recuerdos de nacimientos anteriores, ya que Jeevatma no conserva esos recuerdos. Por el contrario, Paramatma (la Alma Suprema) está presente en el cuerpo de Jesús y es eterna. Ha existido desde antes de la creación del universo y es el creador de todos los seres vivos, incluido Abraham. Abraham, como cualquier otro ser humano, nació, vivió y murió, con el Espíritu Santo como testigo. Mientras Atma dio vida a Abraham, Dios (Paramatma) fue testigo de todo el viaje. <b>Dios es el testigo supremo, Atma es el hacedor y Jeevatma experimenta la vida.</b>.. Aunque Abraham nació a través del Atma, Dios, como testigo supremo, sabe todo acerca de Abraham. Paramatma sabe cuántas veces nació Abraham en el pasado y cuántas veces nacerá en el futuro. Por lo tanto, cuando Jesús dijo: “Antes de que Abraham naciera, yo soy”, se refirió a Su identidad como el Paramatma eterno que ha existido desde antes del nacimiento de Abraham y continuará existiendo después de Su muerte. Esta declaración enfatiza la existencia eterna de Jesús más allá de las limitaciones del nacimiento y la muerte físicos.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 117,
verse: `<b>(39)	El Evangelio de Juan, capítulo 9, versículo 39. </b>`,
meaning: ` <b>
(9:39) Jesús dijo: “Para juicio he venido a este mundo, para que los ciegos Verán y los que ven quedarán ciegos”.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando algunas personas acusaron a Jesús de ser un pecador, el individuo cuyo karma había sido eliminado por Jesús escuchó sus palabras y respondió con la siguiente información.

  (Juan 9:25-38) Él respondió: <b>“Si es pecador o no, no lo sé. Una cosa sí sé. ¡Estaba ciego, pero ahora veo!".</b> Entonces le preguntaron,<b>” Qué te hizo? ¿Cómo te abrió los ojos?</b> “Él respondió, <b>“Ya te lo dije y no escuchaste. ¿Por qué quieres escucharlo de nuevo? ¿Quieres convertirte también en sus discípulos?</b> Luego lo insultaron y dijeron:<b>“¡Eres discípulo de este tipo! ¡Somos discípulos de Moisés! Sabemos que Dios le habló a Moisés, pero en cuanto a este, ni siquiera sabemos de dónde vino”.</b> El hombre respondió, <b>“Eso sí que es extraordinario! No sabes de dónde vino, pero Él abrió mis ojos. Sabemos que Dios no escucha a los pecadores. Él escucha a la persona piadosa que hace su voluntad. Nadie ha oído hablar jamás de abrir los ojos a un hombre ciego de nacimiento. Si este hombre no fuera de Dios, nada podría hacer”.</b> A esto respondieron, <b>“Estabas inmerso en el pecado al nacer; ¿Cómo te atreves a sermonearnos?</b> Y lo echaron. Jesús oyó que lo habían echado fuera, y cuando Jesús lo encontró, dijo:<b>“¿Crees en el Hijo del Hombre?” “¿Quién es Él, señor?</b> “Preguntó el hombre. <b>“Dímelo para que pueda creer en Él”.</b> Jesús dijo, <b>"Ahora lo has visto; de hecho, Él es quien habla contigo”.</b> Entonces el hombre dijo: <b>“Señor, creo “</b>y le adoró. Después de los acontecimientos que acababan de ocurrir, Jesús dijo: <b>“Para juicio he venido a este mundo, para que los ciegos vean y los que ven se queden ciegos”.</b> Esta afirmación puede entenderse a la luz de los acontecimientos anteriores.

  El propósito de la declaración de Jesús fue transmitir que las <b>que tienen fe en Dios pueden verme</b>, incluso si no saben quién es Él. Aquellos que no creen en Dios pueden interactuar con Jesús diariamente y ver Su cuerpo físico, pero no pueden reconocerlo. Por lo tanto, Jesús dijo que vino al mundo para hacer que los incrédulos no sepan que Él es Dios. A pesar de que Dios tomó forma humana y estuvo al lado de los incrédulos, ellos no pueden reconocer al Hijo de Dios debido a su ceguera ignorante. Esta ceguera es un tipo de ignorancia que les impide conocer a Dios, incluso cuando Él aparece en forma humana. Cuando Jesús dijo eso <b>un devoto que ve la encarnación de Dios (el Hijo de Dios) puede no reconocerlo basándose en la apariencia exterior, sino a través de la intuición.,</b> algunas de las personas que lo rodeaban preguntaron si ellos también eran ciegos. Jesús les respondió así.
</div></div>

</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 118,
verse: `<b>40)	El Evangelio de Juan, capítulo 9, versículo 41.</b>`,
meaning: `<b>
(9:41) Jesús dijo: “Si fueseis ciegos, no seríais culpables de pecado; pero ahora que afirmas que puedes ver, tu culpa permanece.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En el versículo 39, Jesús explicó la distinción entre los que tienen fe y los que no. Dijo que una persona ciega con fe divina podía verlo, mientras que los incrédulos podían verlo físicamente pero no podían percibir Su verdadera identidad. En el versículo 41, Jesús Profundizó más en el comportamiento de quienes operan con una <b>perspectiva mundana.</b> Los individuos con una mentalidad mundana proclaman: "Estoy viendo", atribuyéndose a sí mismos sus acciones y, en consecuencia, acumulando karma por sus actos. Dios otorgó la vista a los humanos para comprender Su sabiduría, pero no todos emplean su visión para reconocer a Dios. Algunos permanecen espiritualmente ciegos a pesar de tener ojos físicos. En lo que respecta a los asuntos mundanos, todo individuo es, en esencia, ciego. La verdad es que nadie se involucra de forma autónoma en actividades mundanas. Nadie posee vista ni oído. A pesar de su inherente carencia, las personas afirman: “Estoy viendo”, asumiendo falsamente que tienen vista y, en consecuencia, incurriendo en pecado por sus acciones. Aunque los humanos son espiritualmente ciegos, acumulan pecado cuando creen erróneamente que poseen vista. Jesús enfatizó que reconocer la propia ceguera espiritual y reconocer<b>la verdad</b> de no haber visto nada los absuelve del pecado. En esencia, reconocer la ceguera espiritual previene la acumulación de pecado en los asuntos mundanos.

  Aquellos que carecen de sabiduría divina no son conscientes de su falta de visión en los asuntos mundanos. Su incapacidad para comprender las palabras de Jesús se debe a su ignorancia de que Dios les ha dotado de la vista sólo para comprender asuntos relacionados con Él. Para captar la esencia del verso, el Jeeva (alma) de cada individuo debe primero reconocer si es ciego o si posee percepción en el cuerpo. En verdad, el Jeeva en el cuerpo de cada persona es completamente ciego en todos los aspectos. Cada Jeeva cree erróneamente que el cuerpo les pertenece y que son los hacedores de todas las acciones en el cuerpo. Sin embargo, Jeevatma no tiene agencia independiente en el cuerpo; <b>alma es</b> el verdadero dueño y controlador. Atma opera continuamente dentro del cuerpo y, en realidad, Jeeva no realiza ninguna tarea en el cuerpo. Carente de vista, oído y plena funcionalidad, Jeeva es ciega, sorda y discapacitada en todos los sentidos. Situado junto al<b>udía</b> (intelecto) en el cuerpo, Jeeva se da cuenta de la información que llega al intelecto, pero Jeeva no puede saber nada de forma independiente. A pesar de carecer de conocimiento directo, Jeeva cree erróneamente que ha sido testigo de todo personalmente. Aunque Atma es la fuerza activa del cuerpo, Jeeva se atribuye erróneamente todas las acciones a sí mismo. Cuando Jeeva se atribuye falsamente la responsabilidad de un acto, debe soportar las consecuencias kármicas asociadas con esa acción.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 119,
verse: `<b>41)	El Evangelio de Juan, capítulo 10, versículo 18.</b>`,
meaning: `<b>
(10:18) Nadie me quita la vida, sino que yo la entrego por mi propia voluntad. Tengo autoridad para dejarlo y autoridad para retomarlo. Este mandato lo recibí de mi Padre. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Nadie sabe cuándo dejará esta vida una persona común y corriente. Una vez que alguien muere, no volverá. Esto es evidente en cada muerte. Jeeva también abandona el cuerpo al morir. Sin embargo, la mayoría de la gente no se da cuenta de que <b>je Eva está separada de la fuerza vital de una persona..</b>. Mucha gente piensa que Jeeva y la fuerza vital son lo mismo. Pero en el versículo se dice: <b>“Nadie me quita la vida”,</b> lo que muestra que Jesús es diferente y su fuerza es diferente. Aunque cada uno tiene su propia fuerza vital en su cuerpo, como Jesús, no pueden dejarla de lado ni retomarla. Dentro del cuerpo hay muchos órganos internos, vida, buddhi y manas. Todo lo que hay dentro del cuerpo está bajo el control del Atma, no bajo el control del hombre. Por lo tanto, Atma decide si dejar de lado la vida de una persona o envíalo donde Atma desee, ya que es su tarea. <b>Devan</b>o tiene relación con la fuerza vital en su cuerpo, pero <b>alma</b>tiene una relación con la fuerza vital en el cuerpo.

  Jesús no es un Jeeva ordinario, sino que es Atma. Como tal, Él tiene la autoridad de poner a un lado Su vida, y nadie puede quitársela. Esto significa que <b>Jesús no muere a manos de nadie;</b> si muriera, elegiría dejar a un lado su vida. Sólo Atma tiene el poder de dejar la vida a un lado y luego traerla de regreso cuando se desee. El Espíritu Santo le dio a Jesús la autoridad para hacer esto, como Jesús mismo declaró: <b>“Nadie me quita la vida, sino que yo la entrego por mi propia voluntad. Tengo la autoridad para dejarlo y retomarlo. Este mandato lo recibí de mi Padre.”</b> Como se predijo, Jesús escondió Su vida (plana o respiración) en Su cuerpo cuando fue crucificado, pareciendo muerto a quienes lo rodeaban. Sin embargo, salió vivo temprano el domingo por la mañana, habiendo recuperado su vida. Esto demuestra que Jesús, siendo Atma, tiene el poder de dar Su vida y luego volver a la vida en el mismo cuerpo, y esta autoridad le fue dada por Su Padre, el Espíritu Santo. Además, Atma tiene la autoridad de quitar la vida a otros y enviarlos a la reencarnación.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 120,
verse: ` <b>42)	El Evangelio de Juan, capítulo 10, versículo 30. </b>`,
meaning: ` <b>
(10:30) Yo y el Padre uno somos.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Atma es el Padre de Jeeva y, correspondientemente, Paramatma es responsable de la creación de Atma. Por lo tanto, Atma es también el Padre de los seres humanos, mientras que Paramatma es el Padre del Atma. Como Jesús es Atma, Él es el Hijo de Dios. Cuando <b>un hijo presta mucha atención a su padre,</b> significa un estado de unión entre el hijo y el padre. Esta es la esencia de la declaración de Jesús:<b> “Yo y mi Padre somos uno”,</b> mientras dirigía su atención hacia Su padre, el Espíritu Santo.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 121,
verse: ` <b>43)	El Evangelio de Juan, capítulo 11, versículo 25.</b>`,
meaning: ` <b>
(11:25) Jesús le dijo: Yo soy la resurrección y la vida. El que cree En mí vivirá, aunque muera”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En este contexto, "resurrección" es indicativo de nacimiento, mientras que "vida" significa liberación (moksha), lo que implica libertad del ciclo de renacimiento. Puesto que tanto el nacimiento como el moksha están relacionados con Atma, Jesús declaró: “El que cree en mí no renacerá después de la muerte, sino que alcanzará <b>moksha.”</b>
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 122,
verse: `<b>44)	El Evangelio de Juan, capítulo 11, versículo 26.</b>`,
meaning: `<b>
(11:26) El que vive creyendo en mí, no morirá jamás. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Aquel que haya alcanzado moksha experimentará la vida eterna y nunca más enfrentará la muerte. Por lo tanto, Jesús proclamó: “Todo aquel que tenga fe en Dios alcanzará moksha y nunca más morirá”
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 123,
verse: `<b>45)	El Evangelio de Juan, capítulo 12, versículo 25.</b>`,
meaning: `<b>
(12:25) El que ama su vida la perderá, mientras que el que aborrece su vida en este mundo la conservará para vida eterna. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La declaración de Jesús: “Cualquiera que ame su vida, la perderá” se puede explicar de la siguiente manera: Los seres humanos (Jeeva) necesitan vida para existir en la tierra, y aquellos que se apegan a su vida terrenal inevitablemente la perderán, ya que no pueden vivir para siempre. La vida de una persona depende del flujo de Prana (fuerza vital) en su cuerpo y, una vez que muere, su respiración cesa permanentemente. Una vez que el último aliento abandona el cuerpo y se fusiona con el aire exterior, nunca regresará. Cuando alguien pasa de su primer nacimiento al segundo, recibe un nuevo aliento (vida), pero el anterior nunca se recupera. Por lo tanto, aquellos que priorizan su vida terrenal y se aferran a ella eventualmente la perderán. A pesar de esta certeza, las personas naturalmente aman su vida más que cualquier otra cosa y buscan prolongar su tiempo en la tierra.

  Una persona que desea moksha y no desea vivir en este mundo odia su propia vida, lo que indica falta de interés en los asuntos mundanos. Tal persona abandona el ciclo de nacimiento y alcanza la vida eterna. Esta vida está libre de muerte y la persona que la alcanza la protegerá. Si bien aquellos que alcanzan moksha no tienen una vida especial similar a la de una persona común, el término "vida eterna" se utiliza para ayudarnos a comprender el concepto. Es importante señalar que cualquiera que alcance moksha permanecerá en un estado de eternidad para siempre, sin nacimiento ni muerte.

</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 124,
verse: `<b>46)	El Evangelio de Juan, capítulo 12, verso 40.</b>`,
meaning: `<b>
(12:40) Él ha cegado sus ojos y endurecido su corazón, de modo que no pueden ver con sus ojos, ni entender con su corazón, ni volverse; y yo los sanaría.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando Dios vino como hombre y le dijo a la gente la sabiduría que necesitaban, Atma, Dios en el cuerpo, cegó sus ojos y endureció sus corazones para que no pudieran ver ni entender con sus corazones ni deshacerse del karma. El karma es la causa de su sufrimiento. En este verso, lo que es importante señalar es que el Atma, creado por el Espíritu Santo, está en el cuerpo de todos y dirige a todos. Aunque Atma es el Hijo del Espíritu Santo, el Espíritu Santo, el Creador, nace como hombre para impartir sabiduría. Aunque el nacido es el Espíritu Santo, se le llama Hijo de Dios en lugar de Dios. Según esto, el Atma, que está en el cuerpo, se convierte en el Hijo del Espíritu Santo. La encarnación del Espíritu Santo como ser humano también se llama Hijo del Espíritu Santo. El Atma en el cuerpo ciega los ojos del hombre ignorante y endurece su corazón para que no comprenda las palabras del Hijo de Dios y no pueda deshacerse de su karma.

  El Espíritu Santo, el Creador, creó un hijo Atma y lo colocó en el cuerpo humano. Además, el Espíritu Santo creó otro Hijo en forma humana para impartir sabiduría a los ignorantes. Si bien el Atma dentro del cuerpo humano está siempre presente, la encarnación humana de<b>sálm</b>aselo aparece en la tierra periódicamente para enseñar sabiduría. Incluso cuando la encarnación humana del Atma imparte sabiduría a individuos desinteresados ​​y envidiosos del Espíritu Santo, el Atma dentro del cuerpo hace que su intelecto (buddhi) sea incapaz de comprenderlo. Sin embargo, si un individuo posee <b>devoción e interés en</b> el Espíritu Santo, el Atma dentro del cuerpo les permite comprender las palabras de la encarnación humana del Atma. Uno debe reconocer tanto al Atma dentro del cuerpo como al segundo Hijo, encarnado en una forma humana, <b>comprender verdaderamente la sabiduría del Espíritu Santo.</b>
</div></div>
  </span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 125,
verse: ` <b>47)	El Evangelio de Juan, capítulo 12, versículos 47 y 48.</b>`,
meaning: ` <b>
(12:47) Si alguno escucha mis palabras pero no las guarda, no lo juzgo. Porque no he venido a juzgar al mundo, sino a salvar al mundo.
<br><br>
(12:48) Hay juez para el que me rechaza y no acepta mis palabras; las mismas palabras que he hablado los juzgarán en el último día.`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Se puede decir que quien pronunció estas palabras es el Atma que tiene la forma de un ser humano. Cuando alguien escucha pero no comprende la sabiduría impartida por Dios cuando Él viene en forma humana, el Atma en forma humana no juzga su próxima vida basándose en el pecado y punya después de la muerte. El Atma, que vino como hombre para enseñar sabiduría, no vino para juzgar la próxima vida de los humanos. Dios (Atma) vino como hombre para revelar Su sabiduría al pueblo y salvarlo. Alguien más juzga la vida posterior de un hombre que no escucha las palabras del Atma en forma humana y no lo reconoce como grande. Debemos saber que ese juez es el Atma, que siempre está presente en el cuerpo. El Atma en el cuerpo humano decide el próximo nacimiento el día de la muerte basándose en la sabiduría impartida por el Atma, que tiene forma humana. <b>Uno no puede conocer al Espíritu Santo a menos que comprenda el trabajo del Atma en el cuerpo y del Atma (Bhagavan), que viene en forma humana.</b>
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 126,
verse: ` <b>48)	El Evangelio de Juan, capítulo 12, versículos 49 y 50.</b>`,
meaning: ` <b>
(12:49) Porque yo no hablé por mi cuenta, sino que el Padre que me envió me mandó decir todo lo que he hablado.
<br><br>
(12:50) Sé que su mandato conduce a la vida eterna. Entonces, todo lo que digo es justo lo que el Padre me ha dicho que diga.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Uno debe entender que el<b>ata (Bhagavan),</b> que vino como ser humano, pronunció estas palabras. Jesús, Dios en forma de ser humano, pronunció esta declaración. Siempre que Dios se encarna como hombre, toda Su sabiduría proviene del Espíritu Santo. El que vino en forma humana mencionó que el Espíritu Santo lo impulsó a transmitir esta sabiduría. La sabiduría impartida por el Atma (Bhagavan) en forma humana conduce á vida <b>eterna (moksha)</b>. Aunque el que vino en forma humana no se identifica explícitamente como Dios, afirmó:<b> “Todo lo que digo es justo lo que el Padre me ha dicho que diga”</b>, revelando que quien habla es el Espíritu Santo. Con esto se hace evidente que quien habla es el Espíritu Santo. Sin embargo, de acuerdo con la doctrina espiritual, debería Cabe enfatizar que el Espíritu Santo es el Padre, y el Atma que vino en forma humana es el Hijo.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 127,
verse: ` <b>49)	El Evangelio de Juan, capítulo 14, versículo 7.</b>`,
meaning: ` <b>
(14:7) Si realmente me conocéis, conoceréis también a mi Padre. De ahora en adelante, lo conoces y lo has visto.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Este versículo es similar al mencionado anteriormente (Juan 12:49, 12:50). Como mencioné antes, el Padre y el Hijo son lo mismo; sin embargo, según la doctrina espiritual, debería decirse que el Padre y el Hijo están separados. Jesus dijo,<b>"Si realmente me conocéis, también conoceréis a mi Padre...”</b> Aunque Dios, cuando vino como ser humano, es llamado Hijo de Dios, de hecho, el Padre mismo tiene la forma del Hijo. Por lo tanto, el versículo dice: <b>“Si conoces al Hijo, conoces al Padre.”</b>
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 128,
verse: ` <b>50)	El Evangelio de Juan, capítulo 14, versículos 8 y 9.</b>`,
meaning: ` <b>
(14:8) Felipe dijo: “Señor, muéstranos al Padre y eso nos bastará”.
<br><br>
(14:9) Jesús respondió: “¿No me conoces, Felipe, incluso después de tanto tiempo que estoy entre vosotros? Cualquiera que me haya visto, ha visto al Padre. ¿Cómo puedes decir: “muéstranos al Padre”?</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
Este versículo revela que el que tiene forma visible es el Espíritu Santo. Por eso Jesús dijo: <b>“Cualquiera que me ha visto, ha visto al Padre”.</b>
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 129,
verse: `<b>51)	El Evangelio de Juan, capítulo 14, verso 10.</b>`,
meaning: `<b>
(14:10) ¿No creéis que yo estoy en el Padre, y que el Padre está en mí? Las palabras que os digo no las hablo con mi propia autoridad. Más bien, es el Padre, que vive en mí, quien hace Su obra.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando una persona está disfrazada, él y su disfraz son inseparables. Por lo tanto, cuando un hombre rico asume la apariencia de un mendigo, tanto el individuo rico como el mendigo coexisten. El hombre rico adopta la apariencia de un mendigo durante su disfraz. Aunque el mendigo se aventura en un bazar a mendigar, en realidad es el rico quien lleva a cabo este acto. El hombre rico invisible desempeña el papel de un mendigo. Como el rico reside dentro del mendigo, y las palabras del mendigo se originan en el rico, se puede afirmar que el rico está dentro del mendigo y, recíprocamente, el mendigo está dentro del rico: existen juntos. Dado que la persona interior tiene mayor importancia que la fachada exterior, todas las acciones emprendidas disfrazadas son ejecutadas por el yo interior. Dado que la persona interior es más crucial que la apariencia externa, es exacto afirmar que todas las tareas realizadas por la persona visible exteriormente pertenecen al individuo interno. A pesar de la apariencia exterior del mendigo, él encarna al rico que lleva dentro. En cierto sentido, se puede afirmar que el mendigo es, efectivamente, la persona rica. El Espíritu Santo, oculto en forma humana, tiene importancia. Es imperativo reconocer que el disfraz es temporal, mientras que el alma interior es eterna. Se puede afirmar que el <b>que está dentro de Jesús es el Espíritu Santo.</b> Por eso Jesús proclamó: “El Padre está en mí y yo en el Padre”.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 130,
verse: `<b>52)	El Evangelio de Juan, capítulo 14, versículo 6.</b>`,
meaning: `<b>
(14:6) Jesús respondió: “Yo soy el camino, la verdad y la vida. Nadie viene a El Padre sino a través de mí.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Partiendo del ejemplo anterior, el camino para comprender al rico pasa por el mendigo. Si se detiene al mendigo, se hace evidente la identidad del hombre rico. Una vez reconocido el rico se puede acceder a las riquezas que posee. De manera similar, la vía para comprender a Dios es a través de la encarnación como ser humano. Si alguien comprende a quien tomó forma humana, también comprenderá al Dios que reside en Él. El conocimiento de Dios conduce a obtener la vida eterna inherente a Dios. Por eso, en una ocasión, Jesús declaró:<b> “Yo soy el camino y la verdad y la vida...”</b> Cuando Jesús dijo: "Yo soy el camino", significa <b>el camino para entender a Dios a través de mí.</b> También afirmó: “Yo soy la verdad”, implicando que Él es la manifestación genuina de Dios. Además, proclamó: <b>“soy vida eterna.”</b> Esta afirmación se basa en el hecho de que el Dios verdadero en la forma de Jesús declaró que cualquiera que estuviera familiarizado con Él alcanzaría para loka (moksha) y experimentaría la vida eterna sin enfrentar la muerte en el paraloka.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 131,
verse: ` <b>53)	El Evangelio de Juan, capítulo 14, versículo 16.</b>`,
meaning: `<b>
(14:16) Yo pediré al Padre, y Él os dará otro Consolador para que os ayude y esté con vosotros para siempre. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  El Espíritu Santo no permanece permanentemente en forma humana entre la gente. De vez en cuando, el Espíritu Santo cambia de apariencia y entra en la vida de las personas cuando es necesario. Cuando el Espíritu Santo tomó la forma de Jesús, vivió entre la gente sólo 33 años. De estos 33 años, Él impartió sabiduría sólo durante tres años. Incluso antes de completar tres años, se apartó del pueblo después de sólo dos años y tres meses. Jesús dijo: “Rogaré a mi Padre que envíe por segunda vez otro Abogado (Adara Yakarta), que viva más que yo y enseñe sabiduría”. El que viene es la misma persona que dice: Súplica al que viene. Es el mismo que viene. Es el mismo que dijo que pediría al que viene. Es el mismo que dijo que enviaría otro Abogado (Consolador).<b>Sólo hay uno.</b> Es el mismo que dijo, es el mismo que preguntó, y es el mismo que viene. Si no entendemos que hay uno solo que interpreta a todos los personajes, el que dice, pregunta y viene puede parecer diferente. Sin reconocer que <b>solo hay uno orquestando estos roles,</b> no logramos comprender al Dios que tenemos delante en forma humana, al Dios que implora y al Dios que llega. Es crucial entender que el que suplica al Padre como Jesús es el próximo Consolador. El Abogado que llega es el Espíritu Santo.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 132,
verse: `<b>54)	El Evangelio de Juan, capítulo 14, versículo 17.</b>`,
meaning: `<b>
(14:17) El mundo no puede aceptarlo porque no lo ve ni lo conoce. Pero vosotros le conocéis, porque Él vive con vosotros y estará en vosotros. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Se puede entender que el término "mundo (loca)" abarca a aquellos individuos que sufren las consecuencias del karma en la tierra. Cuando Dios toma forma humana, es posible que aquellos atados por el karma no lo perciban ni lo reconozcan. Aquellos que no lo reconocen no pueden recibir Sus enseñanzas ni su sabiduría divina. Sólo aquellos que hayan adquirido algo de sabiduría a través de Jesús podrán reconocer al Consolador que viene después de Jesús en forma humana. El Consolador habita dentro de esos individuos, y aquellos que lo conocen coexistieron con Él, realizando Su presencia dentro de ellos como Atma.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 133,
verse: `<b>55)	El Evangelio de Juan, capítulo 14, versículo 20.</b>`,
meaning: ` <b>
(14:20) En aquel día comprenderéis que yo estoy en mi Padre, y vosotros en mí, y yo en vosotros. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Antes de profundizar en este versículo, uno debe captar la verdadera forma de Dios. Dios está dividido en tres aspectos, impregnando el mundo entero. Aunque hay un solo Dios, está dividido en tres almas: Jeevatma, Alma y Paramatma. <b>Jeevatma reside en un lugar específico dentro de los cuerpos de todos los seres vivos, mientras que Atma se extiende por la totalidad del cuerpo de cada ser vivo. El paramatma está presente tanto dentro como fuera del cuerpo, existiendo dentro de cada molécula.</b>.. Un individuo que comprende este concepto es considerado un completo gnani. Paramatma, el Creador, asume la forma humana para impartir sabiduría a las personas. Durante esta manifestación, Él afirma que Él es el Hijo y que el Padre es Paramatma. Esta terminología tiene un propósito de distinción, pero se puede afirmar que tanto el Hijo como el Padre son inherentemente iguales. Dios aparece bajo la apariencia del <b>'Hijo’</b> y reside en la tierra durante toda Su vida, impartiendo sabiduría. Esto sirve como método para la difusión de la sabiduría. Alternativamente, Dios envió un Arma de Sí mismo para crear, sostener y matar a jueves. El Atma, que gobierna los cuerpos de los seres vivos, también es considerado el Hijo de Dios. Atma reside dentro de Paramatma y Jeevatma existe dentro del reino de Atma. En consecuencia, la expresión <b>“Yo soy (Atma) en mi Padre"</b> se utiliza en lugar de decir <b>"Yo soy (Atma) en mi Padre, el Paramatma”.</b>Como Jeeva está presente dentro del cuerpo gobernado por Atma, el verso enfatiza: "Tú (Jeevatmas) estás en mí (Atma)". El Atma, difundido por todo el cuerpo, también está disperso dentro de ti (Jeevatma), que estás en un lugar específico. Por lo tanto, el versículo dice: <b>“El día que conozcas la sabiduría de las almas, sabrás que yo estoy en ti..”</b> Quienes no están familiarizados con el concepto de las tres almas no logran discernir quién reside dentro de quién. Por lo tanto, <b>es crucial comprender el teorema de Thraitha, que aclara cómo Dios tiene la forma de tres almas.</b>
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 134,
verse: ` <b>56)	Evangelio de Juan, capítulo 14, versículos 25 y 26.</b>`,
meaning: `<b>
(14:25) Todo esto lo he hablado estando aún con vosotros.
<br><br>
(14:26) Pero el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, os enseñará todas las cosas y os recordará todo lo que os he dicho. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En una ocasión, Jesús se dirigió a sus discípulos y les dijo: “Mientras todavía estoy con vosotros, hablo estas palabras”. Además, dijo: “Otro Abogado (Adaranakarta) vendría a vosotros después de mi muerte”. Además, explicó: <b>“El Abogado, que viene como yo, os recordará todo lo que había dicho y os enseñaría todo lo que no había dicho...”</b> Un aspecto importante a considerar aquí es el uso que Jesús hace del nombre 'Defensor'. Aclarando el significado de Abogado, afirmó: <b>“Abogado es el Espíritu Santo que el Padre enviará en mi nombre.”</b> Un examen detenido del versículo revela que comienza con "el Padre" y concluye con "el Espíritu Santo". Esta secuencia sugiere que el padre de Jesús es el Espíritu Santo. Se puede postular que el Hijo es el que está disfrazado, mientras que el Padre es el que no está disfrazado. En realidad, ambos son lo mismo..<b>. Aquel que imparte sabiduría y elimina el karma se le conoce como el Defensor (Consolador)..</b>. Cuando Jesús afirmó que Dios es quien envía a Dios en el nombre del Abogado, articuló: “El Padre es el Espíritu Santo que enviará en mi nombre”. Esto aclara que <b>Dios asume una forma, adopta la apariencia del Abogado e imparte sabiduría divina..</b>. Es digno de mención que Jesús transmitió estas palabras para garantizar que incluso aquellos que no estaban al tanto de este asunto pudieran comprenderlas.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 135,
verse: ` <b>57)	El Evangelio de Juan, capítulo 15, versículo 23.</b>`,
meaning: `<b>
(15:23) El que me aborrece, odia también a mi Padre. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  He estado afirmando desde el principio que Dios está oculto en la forma de Jesús, y el nombre atribuido al disfraz de Dios es Jesús. De hecho, nadie más que el Espíritu Santo ha venido en el nombre de Jesús. En consecuencia, cualquiera que blasfeme contra Jesús también está blasfemando contra Paramatma. El Consolador (Abogado) no es el que vendrá después de Jesús. Jesús también fue un Abogado. Siempre que Dios asume la forma humana, siempre se le debe llamar el Abogado.<b> El Abogado imparte sabiduría que sirve como remedio para el karma,</b> y sólo Dios proporciona enseñanzas que erradican el karma. Por tanto, se puede afirmar que la Defensora es sinónimo del Espíritu Santo. Sin embargo, reconocer a Dios cuando toma forma humana en la Tierra resulta ser un desafío. Este desafío es subrayado por individuos en el cristianismo que afirman ser gnani y se refieren a Jesús como un hermano. Se enfatiza que Jesús no es hermano de nadie. Independientemente de si aparece como Jesús o bajo otro nombre, se le identifica como el Espíritu Santo, lo que lo convierte en Padre, no en hermano.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 136,
verse: `<b>58)	El Evangelio de Juan, capítulo 15, versículos 24 y 25. </b>`,
meaning: ` <b>
(15:24) Si yo no hubiera hecho entre ellos las obras que ningún otro hizo, no serían culpables de pecado. Tal como son las cosas, lo han visto y, sin embargo, me han odiado a mí y a mi Padre.
<br><br>
(15:25) Pero esto es para cumplir lo que está escrito en su Ley: “Sin razón me odiaron”.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  La tarea que nadie puede realizar en la tierra es perdonar y quitar los pecados de una persona. Jesús afirmó que no habría incurrido en pecados si no hubiera emprendido la obra de perdonar el karma de los demás. Cuando perdonó públicamente los pecados de ciertos individuos, aquellos que eran envidiosos e ignorantes de Su grandeza albergaron odio hacia Él. Odiar a Jesús equivale a odiar al Espíritu Santo. Los que albergaban odio hacia Él <b>sin una razón válida</b> pecado incurrieron.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 137,
verse: ` <b>59)	El Evangelio de Juan, capítulo 15, 26 y 27 versículos. </b>`,
meaning: `<b>
(15:26) Cuando venga el Consolador que yo os enviaré desde el Padre, el Espíritu de verdad que sale del Padre, él dará testimonio de mí.
<br><br>
(15:27) Y vosotros también debéis dar testimonio, porque habéis estado conmigo desde el principio. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jesús vino como el Abogado (Bhagavan) y mencionó que enviaría otro Abogado del Padre al pueblo. De acuerdo con la ley espiritual, transmitió lo que se suponía que debía decir. Sin embargo, no hay otro Abogado ante el Padre; <b>solo hay un Dios</b> quien ocasionalmente aparece bajo la apariencia de un Abogado. Nadie más lo envía. Cuando Jesús y el Espíritu Santo son considerados iguales, tanto el que envía como el que viene son idénticos. Jesús declaró:<b> “El Espíritu de verdad viene como Abogado, y dará testimonio de mí...”</b> Cuando el que viene y el que va son los mismos, no es de extrañar que el que viene hable del que se va. Mientras el Abogado que viene habla de Jesús, sus discípulos sin duda lo recordarán. En consecuencia, los discípulos afirmaron que Jesús vino e impartió sabiduría.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 138,
verse: ` <b>60)	El Evangelio de Juan, capítulo 16, verso 7.</b>`,
meaning: `<b>
(16:7) Pero de cierto os digo que es por vuestro bien que me voy. Si no me voy, el Defensor no vendrá a vosotros; pero si voy, os lo enviaré.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  En la analogía de una sola persona interpretando a dos personajes en una obra de teatro, el segundo personaje aparece en el escenario después de que sale el primero. Dado que es la misma persona que desempeña ambos roles, el primer personaje debe ir detrás de escena para que la persona del primer personaje asuma el segundo rol. No es posible que surja el segundo personaje a menos que el primer personaje vaya detrás del escenario. Esta transición ocurre porque la misma persona interpreta a ambos personajes. De manera similar, se espera que el que vino en el papel de Jesús regrese a la tierra en un segundo personaje. Por lo tanto, cuando Jesús se aparte del pueblo, quien desempeñó el papel de Jesús volverá en un segundo papel. El Espíritu Santo asumió el papel de Jesús. Si viniera otra vez para estar con el pueblo, lo haría. Tiene que renunciar a su papel de Jesús y reaparecer en un nuevo papel, con un nuevo nombre y una nueva apariencia. Así, Jesús afirmó: <b>“Es por vuestro bien que me voy. Si no me voy, el Abogado no vendrá a vosotros...”</b> Aunque no mencionó explícitamente que regresaría como Abogado, sí dijo: “Os lo enviaré cuando me vaya”. De estas palabras, cualquiera con inteligencia discernirá fácilmente que el que parte y el que regresa son los mismos.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 139,
verse: `<b>61)	El Evangelio de Juan, capítulo 16, verso 8.</b>`,
meaning: ` <b>
(16:8) Cuando Él venga, demostrará que el mundo está equivocado en cuanto al pecado, la justicia y el juicio.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Después de que el papel de Jesús desaparezca detrás de escena, el Abogado (Bhagavan) vendrá en el segundo papel y en la segunda encarnación. El término "Abogado" representa la encarnación de Dios, pero no es el nombre de Dios. El que viene como Defensor podría tener cualquier nombre en el mundo. Por tanto, nadie puede determinar si esta persona es la encarnación de Dios. Si bien nadie conoce la forma o el nombre del Defensor, existe alguna posibilidad de reconocerlo a través de Sus acciones. Cuando el <b>Defensor</b>Cuando viene a la tierra, habla del pecado, revelando cómo una persona adquiere el pecado, dónde se almacena hasta el momento de la muerte y las consecuencias del pecado.<b>Explica que es necesaria la sabiduría divina para librarse de los pecados adquiridos,</b> como los pecados son como leña y la sabiduría es como fuego. Sólo a través de la sabiduría se puede escapar del pecado y obtener la sabiduría divina. El pecado de una persona que no alcanza la sabiduría divina en la vida persiste hasta la muerte. Tal persona debe renacer el mismo día, minuto y momento después de la muerte. El día de la muerte se conoce como el último día. El último día de la vida se convierte en el primer día de la próxima vida. La persona debe renacer dentro de un segundo de su muerte. Se puede decir que la diferencia de tiempo entre la muerte y el renacimiento es sólo de una décima de segundo. En ese corto tiempo, <b>alma juzga</b> al difunto basándose en su pecado y punya. Luego, Atma decide qué debe comer, beber y experimentar la persona en cada momento del segundo nacimiento. La vida del nacido está determinada por el juicio dictado en la muerte. La forma en que una persona vivirá su próxima vida se decide en función del juicio de su último día. Atma, que está con la persona fallecida, la juzga correctamente basándose en sus acciones desde la niñez. Las acciones a tomar en la próxima vida se deciden de acuerdo con el karma existente. Nadie puede anular esta decisión y todos deben aceptar la sentencia.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 140,
verse: `<b>62)	El Evangelio de Juan, capítulo 16, versículo 12.</b>`,
meaning: `<b>
(16:12) Tengo mucho más que decirte, más de lo que ahora puedes soportar. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando Dios se encarna como ser humano, es crucial impartir sabiduría cuidadosamente, considerando los estados de ánimo de las personas, y las enseñanzas deben adaptarse según el tiempo y el contexto. La sabiduría divina debe transmitirse con sensibilidad ante la disposición del público a recibir la verdad. Comparativamente, si le informa a una mujer comprometida con usted que ya es su esposa, es posible que no lo acepte antes de la boda, lo que generará un posible conflicto. Sin embargo, compartir la misma información después de la boda traería felicidad. Sin contienda. De manera similar, cuando se presenta la sabiduría divina a aquellos que tal vez no toleran la verdad, existe el riesgo de malentendidos y oposición. Por lo tanto, incluso cuando Dios toma forma humana, la verdad debe compartirse juiciosamente. Por ejemplo, si uno afirmara que Ravana Brahma es una encarnación de Dios, el público contemporáneo podría captar el concepto hasta cierto punto. Sin embargo, si se hubiera hecho la misma declaración hace 50 años, es posible que hubiera habido desacuerdo y que la gente considerara a Ravana como malvado y monstruoso. Por lo tanto, hay casos en los que la sabiduría que debe compartirse antes debe postergarse. En este contexto, Jesús reconoció este principio cuando declaró:<b> “Tengo mucho más que decirte, más de lo que ahora puedes soportar.”</b>, a sus discípulos. Reconociendo que era hora de que Él se apartara de la humanidad, informó a Sus discípulos que el Abogado venidero les transmitirá lo que Él no había dicho.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 141,
verse: `<b>63)	El Evangelio de Juan, capítulo 16, versículo 13. </b>`,
meaning: `<b>
(16:13) Pero cuando venga el Espíritu de verdad, él os guiará a toda la verdad. Él no hablará por su cuenta; Él hablará sólo lo que oye, y les dirá lo que está por venir. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jesús profetizó acerca del próximo Abogado. El término “Espíritu de verdad” significa “el <b>Dios de la sabiduría.’</b> Jesús transmitió que el Dios que vendría después de Él conduciría a todos a la verdad y comunicaría sólo la verdad. A pesar de que Dios tomó forma humana y se comportó de manera humana, Jesús mencionó: “Como ser humano, Él no enseña nada por sí solo; Él habla sólo lo que oye”. Si uno se pregunta quién informó al Abogado, sólo hay una fuente. Puesto que sólo hay uno que viene, Él es el mismo que transmite la sabiduría. En consecuencia, es evidente que la persona visible también puede articular lo que Dios ha dicho. Sólo Dios puede comunicar la sabiduría de Dios. En lugar de afirmar que los humanos son incapaces de transmitir la sabiduría de Dios, se dice que el Abogado hablará sólo lo que ha oído.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 142,
verse: ` <b>64)	El Evangelio de Juan, capítulo 16, versículos 14 y 15.</b>`,
meaning: ` <b>
(16:14) Él me glorificará porque de mí recibirá lo que os hará saber.
<br><br>
(16:15) Todo lo que pertenece al Padre es mío. Por eso dije que el Espíritu recibirá de mí lo que os hará saber.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Si miras este versículo, algunas partes tienen sentido mientras que otras no. Este versículo es como jugar al escondite con la gente. Anteriormente, Jesús mencionó que el recién llegado Espíritu de verdad enseñaría lo que oye. Posteriormente, en el siguiente versículo, declaró que el Defensor tomaría lo que recibió de Jesús y se lo transmitirá al pueblo. Además, Jesús afirmó que el Abogado expresaría cosas que Jesús no había dicho. Sin embargo, en la declaración actual, Jesús menciona que el Defensor informará a la gente sobre lo que había recibido de Jesús. La aparente inconsistencia en las declaraciones de Jesús puede generar confusión. Sin embargo, hay una razón deliberada para esta ambigüedad. Jesús eligió expresarse de una manera que <b>aquellos genuinamente interesados ​​en su sabiduría comprenderán, mientras que aquellos que carecen de interés no.</b> Dijo además que el próximo Abogado compartiría lo que Jesús había dicho para glorificarlo. Luego Jesús afirmó que todo lo que pertenece al Padre es suyo, refiriéndose el Padre al Espíritu Santo o Dios. Al enfatizar que la sabiduría de Dios es suya y que el Abogado transmitirá lo que había recibido de Jesús, se hace evidente que Jesús y el Espíritu Santo son sinónimos. En lugar de decir explícitamente: <b>"Yo soy Dios”,</b> Jesús lo expresó así: <b>“Todas las palabras de Dios son mías...”</b>
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 143,
verse: ` <b>65)	El Evangelio de Juan, capítulo 16, versículo 16.</b>`,
meaning: `<b>
(16:16) Jesús continuó diciendo: “Dentro de un poco ya no me veréis más, y dentro de un poco me veréis”. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jesús comunicó a sus discípulos que no lo volverían a ver después de un tiempo, indicando su partida de entre la gente y el cese de su aparición ante ellos. También mencionó que lo volverían a ver después de un rato, dando a entender que dejaría su forma física, para no reaparecer en la misma manifestación corporal. Esta declaración dejó perplejos a los discípulos, llevándolos a preguntarse por qué Jesús habló de verlo nuevamente después de un rato. Cuando Jesús dijo: “Dentro de un poco de tiempo ya no me veréis más, y después de un poco de tiempo me veréis”, algunos podrían haberse preguntado si Él se escondería temporalmente y luego reaparecerá. Sin embargo, en un caso anterior, Jesús había explicado: “Iré. El Abogado no vendrá a vosotros a menos que yo vaya. Iré y lo enviaré”. Por lo tanto, Jesús estaba sugiriendo que cumpliría su promesa de partir, y después de algún tiempo, lo verían nuevamente a través del Abogado venidero, que también era Jesús. En este contexto, el versículo se vuelve coherente cuando uno se da cuenta de que el que (Jesús) se va y el que (el Abogado) regresa son idénticos. Jesús enfatizó que ver a cualquiera de ellos equivale a ver solo uno, ya que Jesús y el Abogado son uno y el mismo.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 144,
verse: ` <b>66)	El Evangelio de Juan, capítulo 16, versículos 17, 18, 19, 20, 21 y 22.</b>`,
meaning: `<>
(16:17) Ante esto, algunos de sus discípulos se dijeron unos a otros: “¿Qué quiere decir con esto: 'Dentro de un poco ya no me veréis más, y dentro de un poco me veréis', y ¿'Porque voy al Padre'?”<br><br>
(16:18) Continuaban preguntando: “¿Qué quiere decir con “un poco de tiempo”? nosotros no Entender lo que Él está diciendo”.<br><br>
(16:19) Jesús vio que querían preguntarle sobre esto, entonces les dijo: “¿Se preguntan unos a otros qué quise decir cuando dije: Dentro de un poco no me veréis más, y después ¿Dentro de poco me verás?<br><br>
(16:20) En verdad os digo que lloraréis y lamentamos mientras el mundo se alegra. Te afligidos, pero tu pena se convertirá en alegría. <br><br>
(16:21) La mujer que da a luz a un niño tiene dolor porque ha llegado su hora; pero cuando nace su bebé, olvida la angustia por la alegría de que nazca un niño en el mundo.<br><br>
(16:22) Así, con vosotros: ahora es vuestro tiempo de tristeza, pero os volveré a ver y os alegráis, y nadie os quitará la alegría.
 </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Cuando Jesús pronunció las palabras: “Dentro de un poco ya no me veréis más, y dentro de un poco me veréis”, a la gente le resultó difícil comprenderlo. En respuesta, Jesús ilustró el concepto usando la parábola de una mujer dando a luz. Les transmitió que, así como la mujer experimentaba dolor durante el parto, los discípulos pasarían por cierta angustia debido a su partida. Sin embargo, les aseguró que experimentaron gozo y alegría similar a la mujer que olvida el dolor una vez que nace el niño. Jesús se dirigió a los presentes reconociendo que habría un período de dolor causado por su partida, pero enfatizó que este dolor sería eclipsado por la alegría a su regreso.
</div></div>
</span>`
},
{
chapterName: "El Evangelio de Juan",
chapterNumber: 5,
pageNumber: 145,
verse: ` <b>67)	El Evangelio de Juan, capítulo 16, versículo 25.</b>`,
meaning: `<b>
(16:25) Aunque he estado hablando en sentido figurado, viene el tiempo en que ya no usaré este tipo de lenguaje sino que les hablaré claramente acerca de mi Padre. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The words of Jesus, as mentioned earlier, were acknowledged to be obscure, causing difficulty for people to understand and leading to confusion. Jesus Himself admitted to speaking figuratively to prevent immediate understanding. He also asserted, “I will not say figuratively in the future. I will tell you everything clearly.” However, even this statement appears somewhat ambiguous. Jesus declared that He would depart soon, and the Advocate with the Holy Spirit would come to elucidate everything. He clarified that the Advocate would only come if He left and that the disciples would be saddened by His departure but would rejoice upon seeing Him again. Now, He adds, <b>“So far, I said obscurely. When I come back, I will tell you everything clearly.”</b> This statement introduces a degree of uncertainty regarding whether the one coming is a different Advocate or if Jesus Himself will return.
</div></div>
</span>`
},
{
chapterName: "La Escritura de Juan Apocalipsis",
chapterNumber: 6,
pageNumber: 146,
verse: ` <b>(14) El Apocalípsis de Juan, capítulo 9, versículos 4, 5 y 6</b>`,
meaning: `<b>
(9:4) Se les dijo que no dañan la hierba de la tierra ni ninguna planta o árbol, sino sólo a aquellas personas que no tuvieran el sello de Dios en sus frentes.
<p style="text-align:center;margin-right:5px">
<div class="container">
          <img src="assets/img/Devunimudra_inside.png"   style="width:100%;">
          <div class="top-left">
           <u>EL SELLO DE DIOS</u>
          </div>
          <div class="top-right1">
          Naturaleza
           </div>
           <div class="top-right2">
           Espíritu Santo
          </div>
          <div class="dm-top-right3">
          Padre
          </div>
          <div class="dm-top-right4">
          Hijo
          </div>
          <div class="dm-bottom-left2">
          Cuerpo
           </div>
          <div class="bottom-left">
            <u>Para todas las religiones</u>
           </div>
        </div>
</p>
(9:5) No se les permitió matarlos sino sólo torturarlos durante cinco meses. Y la agonía que sufrieron fue como la picadura de un escorpión cuando ataca.
<br><br>
(9:6) Durante aquellos días la gente buscará la muerte pero no la encontrará; desearán morir, pero la muerte los eludirá.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
  El tercer versículo que precede a estos versículos, Apocalipsis 9:3, dice: <b>“Del humo descendieron langostas sobre la tierra y se les dio poder como el de los escorpiones de la tierra...”</b> Este versículo indica que las langostas surgieron del humo. Sin embargo, el humo al que se hace referencia aquí no se produce al quemar madera u otros materiales. En cambio, se trata de una densa nube que aparece al amanecer de un día de invierno cuando aún no ha salido el sol. Esta nube reduce la luz solar y crea oscuridad. Los enjambres de langostas provienen de esta nube oscura. Cómo llegan a la Tierra en grandes grupos como un ejército, se les conoce como “enjambres de langostas”. Nadie sabe exactamente de dónde vienen las langostas, pero se cree que se originan en la niebla nublada del cielo. Su nacimiento y crecimiento siguen siendo un misterio y emergen del humo en el vacío sin ningún origen claro. Los enjambres de langostas pueden ascender a cientos, miles o incluso millones.

  Las langostas son portadoras de numerosas enfermedades que afligen a la gente. Aunque puedan parecer langostas comunes y corrientes, constituyen un ejército de ángeles que sirven como siervos de Dios, enviados por orden suya. Dios ordenó que las langostas afligieron a los humanos y, mediante Su orden, este ejército de langostas afecta a la humanidad. Surgiendo de un reino invisible, se esconden y muerden a las personas, penetran en sus cuerpos en forma de enfermedades y causan tormento. Dios los dotó de tanto veneno como los escorpiones en la tierra. Los humanos sufren considerablemente debido a la llegada de langostas del mundo invisible, que sirven como agentes de sufrimiento por los pecados humanos. Se les ordenó que no dañan la hierba de la tierra, ni ninguna planta ni árbol, excepto a los humanos. Si bien la suposición común es que las langostas dañan el pasto, las plantas y los árboles, el versículo aclara que estas langostas no dañan la vegetación sino que atacan a los humanos. El origen de las langostas, su sustento y su misión siguen siendo desconocidos para los humanos.

  De los cuatro versículos mencionados aquí se desprende claramente que el ejército de ángeles en forma de langostas viene a afligir a los humanos. El ejército de los siervos de Dios, que adoptan la forma de langostas, posee el poder de atormentar a los humanos durante hasta cinco meses, pero carecen de autoridad para causar la muerte. Cuando las langostas pican a los humanos de forma invisible, inducen una enfermedad que causa un dolor similar al de la picadura de un escorpión. La intensidad del sufrimiento varía según el karma individual, desde un malestar leve hasta el nivel de la picadura de un escorpión. Como nadie puede evadir este dolor, los humanos debemos soportarlo. El versículo indica que durante un sufrimiento severo, las personas pueden desear la muerte como vía de escape, pero no se les permite hacerlo. Acabar con sus propias vidas. Por tanto, los humanos deben soportar el dolor. El versículo transmite además que incluso la muerte se les escapa, lo que significa que los humanos no pueden escapar del sufrimiento causado por las langostas.

  Si las langostas, que se originan en nubes de humo invisibles, aparecen cien veces, es posible que sólo se hagan visibles una vez. Al permanecer invisibles, pueden tener diversos efectos en los humanos, causando daños en forma de enfermedades o por otros medios. El versículo indica que su daño está dirigido únicamente a los humanos y puede manifestarse de cualquier forma. Se afirma que los humanos soportan este daño porque a las langostas se les ordena infligir. Incluso si los humanos buscan la muerte debido a un sufrimiento insoportable, ésta sigue siendo difícil de alcanzar, ya que la muerte se les escapa. Aunque los humanos sufren de diversas maneras a causa de las “langostas (siervos) invisibles” que Dios ha enviado, no contemplan las causas de su sufrimiento. No pueden escapar de su sufrimiento a través de las palabras de Dios.

  Muchas enfermedades nuevas están surgiendo en todo el mundo, pero los seres humanos a menudo no contemplan sus orígenes. Identificar una nueva enfermedad lleva tiempo y encontrar una cura puede tardar aún más. Así como se descubre una cura para una dolencia, puede surgir otra elusiva. Junto a las enfermedades, existen dolencias y sufrimientos no diagnosticables. Si bien algunas personas reconocen que las fuerzas invisibles contribuyen al sufrimiento, nadie sabe cómo abordarlas de manera eficaz. <b>La única manera de evitar el sufrimiento causado por los ángeles invisibles es usar el Sello de Dios, símbolo del poder de Dios. Dios ordenó a sus siervos perseguir sólo a aquellos que no lleven el Sello de Dios.</b> Aunque algunos creen que las langostas visibles pueden dañar plantas y árboles, <b>Dios dirigió Sus langostas invisibles para que infligir daño únicamente a aquellos que carecían del Sello de Dios en sus frentes...</b> En la última escritura divina, los versículos 5:22 y 22:32 mencionan el Sello de Dios. El Akshara Para Brahma Yoga de la primera escritura divina, el Bhagavad-Gita, alude al Sello de Dios. En mi escritura, <b>“El Sello de Dios”,</b> detallamos cómo luce el Sello de Dios. En lugar de cuestionar a los demás, ten fe en Dios y usa el Sello de Dios, ya que no está vinculado a ninguna religión en particular. El Sello de Dios se menciona en tres escrituras divinas. El Apocalipsis de la Biblia explica los desastres causados ​​por no llevar el Sello de Dios. Los cristianos no deberían dudar en llevar el sello de Dios; es una cuestión de fe. <b>Independientemente de tu religión, protégete del sufrimiento. Escúchame y usa “El Sello de Dios”, que antes era desconocido. Protégete del sufrimiento.

El único gurú de las tres religiones </b>

Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu

Aunque mil personas lo apoyen, una mentira no puede convertirse en verdad.Mil personas niegan: la verdad no puede convertirse en mentira.

</div></div>
</span>`
},
{
chapterName: "Tres dedos",
chapterNumber: 7,
pageNumber: 147,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
  El retrato de Jesús rara vez se aparece a la gente. Tras un examen más detenido, <b>se puede ver a Jesús mostrando tres dedos de su mano derecha.</b> Jesús impartió sabiduría divina durante aproximadamente tres años, e incluso después de su muerte, su retrato parece transmitir enseñanzas al pueblo. Si bien las interpretaciones pueden variar, al ver la imagen entiendo que contiene un mensaje crucial de las enseñanzas de Jesús. En la primera escritura divina, Dios es representado en tres partes: <b>Kshara, Akshara y Purushottama.</b> De manera similar, en la última escritura divina, se describe que Dios tiene tres aspectos: <b>Pasajero, conductor y testigo.</b> En la segunda escritura divina, se dice que Dios está dividido en tres partes: <b>Hijo, Padre y Espíritu Santo.</b> Los tres aspectos de Dios se exponen en el Bhagavad-Gita, la Biblia y el Corán como la misma sabiduría. La sabiduría fundamental de estas tres escrituras radica en comprender los tres aspectos de Dios. Una vez que uno comprende los tres aspectos de Dios, es posible una comprensión completa de la sabiduría de Dios.

  Sin embargo, los hindúes que leen el Bhagavad-Gita no saben quién Jivatma <b>(Kshara) y Atma (Akshara)</b> son. De manera similar, los cristianos no saben quiénes son el Hijo y el Padre. Los musulmanes no saben quién.<b>el Pasajero y el Conductor son</b>. En el Bhagavad-Gita que escribí, mencioné que los hindúes no son conscientes del perecedero Jeeva y del Dios eterno presente en el cuerpo. En la Biblia, también noté que los cristianos no comprenden los detalles de los dos hijos: <b>el hijo y el padre.</b> De manera similar, en las Escrituras <b>“Los Versos Diamante en la Divina Escritura Final”,</b> mencioné que los musulmanes no saben acerca de la<b>dos allá.</b> Es posible que las personas de estas tres religiones no tengan idea de las otras dos partes de Dios, que son la esencia principal de sus respectivas escrituras. El único término que todos reconocen es "Dios". Sin saberlo, todos adoran la tercera parte, conocida como Purushottama en el Bhagavad-Gita, el Espíritu Santo en la Biblia y el Testigo en el Corán. Dios mismo declaró que no es correcto adorar la tercera parte de Dios (el Espíritu Santo), que está más allá de toda adoración y de todos los dharmas. Sin embargo, todos adoran<b>”el dios que no necesita nada.”</b> Se puede decir que la ignorancia humana radica en no saber que Dios no necesita de nuestra adoración.

  Respecto a los cristianos, desconocen la <b>“dos hijos”</b>mencionado en sus escrituras. Aunque la Biblia menciona dos Hijos, los cristianos creen que hay un solo Hijo y no están familiarizados con la sabiduría de dos Hijos. Quizás no sepan que hay dos Hijos <b>–el Hijo Permanente y el Hijo Temporal.</b> La Biblia se refiere a ellos como <b>el Hijo y el Hijo unigénito,</b> pero los cristianos no saben quiénes son estos dos Hijos. De manera similar, nadie en ninguna religión puede saber que hay dos dioses: <b>el Dios, que es el Padre, y el Dios, que es el Abuelo.</b> Aunque esta verdad se presenta científicamente en las Escrituras, es posible que algunas personas no la crean y otras nieguen por completo la existencia de dos dioses. Aunque las Escrituras afirman que hay un solo Dios al que debemos adorar, no está claro si este Dios es el Padre o el Abuelo. Aquellos que poseen sabiduría divina y aquellos que leen las Escrituras adoran a un solo Dios según su entendimiento. Pueden adorar al <b>abuelo-dios,</b> quien no debe ser adorado, en lugar del <b>Dios padre,</b> a quien se debe adorar. Los términos Padre-Dios y Abuelo-Dios pueden parecer nuevos, pero este asunto en realidad está en sus escrituras. La gente a menudo no logra comprender la sabiduría verdadera. Cuando alguien comparte la verdad con ellos, es posible que reaccionan con enojo y la rechacen. En mi Biblia leo que hay dos Hijos, el Hijo del Hombre y el Hijo de Dios, y que el Espíritu Santo, que está en la posición del Abuelo, no debe ser adorado. Aquellos que consideran que el Espíritu Santo es Dios y lo han estado adorando como tal pueden encontrarse ahora en un estado de confusión. Jesús enseñó significativamente acerca de los dos Hijos y el Espíritu Santo. Incluso retrató <b>“Los dos Hijos y su Padre, el Espíritu Santo”,</b> usando sus dedos. Jesús usó su mano derecha para mostrar los dos dedos, el índice y el medio, y también el pulgar. Entendí que el pulgar es una indicación del Espíritu Santo en el retrato. Dado que Dios es quien otorga poder perceptivo al intelecto (buddhi), según la verdadera sabiduría, Jesús mostró tanto al Padre (Atma) como al Hijo (Bhagavan) con dos dedos (índice y medio). Se entiende que representan al Hijo permanente y al Hijo temporal. La Escritura resume que <b>el Espíritu Santo no será conocido hasta que se conozcan esos dos Hijos.</b> Todos deberían saber que el secreto espiritual que debe ser conocido por toda la sociedad humana es <b>El asunto de los dos hijos...</b> Si mirás los tres dedos de Jesús en la imagen de la página siguiente, nos recuerdan al Espíritu Santo y a los dos Hijos: Atma y el Hijo unigénito.


  </div></div>
<ion-row><ion-col class="ion-text-center">
<img src="assets/img/jesus.png"/>
</ion-col></ion-row>
</span>`
},
{
chapterName: "¿Viernes bueno o viernes malo?",
chapterNumber: 8,
pageNumber: 148,
verse: ``,
meaning: ``,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">
  Ciertos eventos en la vida traen felicidad, mientras que otros traen tristeza a una persona. Durante los momentos de alegría, un individuo está alegre y disfruta de la buena comida y ropa. Por el contrario, ante el dolor, uno pierde el apetito y el interés en diversos aspectos de la vida. El festival Diwali en la India, por ejemplo, se celebra con petardos para conmemorar la derrota del malvado demonio Narakasura ese día. En la antigüedad, los escribas, fariseos y eruditos que llevaron a Jesús ante el tribunal y orquestaron su ejecución se regocijaron por su muerte. Anualmente celebraban el aniversario de la muerte de Jesús como Viernes Santo, considerándolo un día de felicidad. Desde entonces, la festividad se conoce como "Viernes Santo".

  En los primeros días, personas que desconocían la grandeza de Jesús, junto con los escribas y eruditos, celebraban la fiesta. Esto ocurrió cuando se desconocía el valor y la sabiduría de Jesús. En la actualidad, incluso aquellos que están familiarizados con la sabiduría de Jesús celebran el día de su muerte como viernes Santo. Si bien es costumbre celebrar con alegría un buen día, se espera que el día de la muerte de Jesús sea un día doloroso para Sus devotos. Es sorprendente ver a cristianos, que profesan a Jesús como su Dios, vistiendo felices ropas nuevas y comiendo buena comida sin expresar dolor por la muerte de Jesús ese día.

  De hecho, el día en que Jesús fue asesinado debería etiquetarse como un “mal día”. Los devotos de Jesús deberían expresar tristeza y abstenerse de comer ese día. Resulta desconcertante celebrar el día como una fiesta y llamarlo “Viernes Santo” como si fuera un día de bondad. Incluso aquellos que consideran a Jesús su Dios familiar participan en la celebración, revelando su falta de comprensión del valor de Jesús. Aquellos que veneran profundamente a Jesús deberían considerar ese día como un “Viernes Malo”. Los predicadores tienen la responsabilidad de educar a la gente sobre el significado del Viernes Malo y disuadirlos de celebrarlo. Las personas que no distinguen entre el día de la muerte y el cumpleaños no comprenden la grandeza de la sabiduría de Dios. Cuando fallece el cabeza de familia, toda la familia está de luto, y la misma reverencia se debe tener cuando muere Jesús, a quien se debe estimar más que a un miembro de la familia. Celebrar la muerte de Jesús como una fiesta sin dolor es un error, suponiendo que es un día auspicioso. Jesus dijo, <b>"Cualquiera que ama a su padre o a su madre más que a mí, no es digno de mí; Cualquiera que ame a su hijo o hija más que a mí no es digno de mí.</b>..” Cuando las personas lloran la muerte de un miembro de su familia pero no lamentan la muerte de Jesús y en cambio la celebran como una fiesta, ¿cómo pueden ser dignos de la misericordia de Jesús? Por lo tanto, nos referimos al Viernes Santo como un “Viernes Malo” para honrar a Jesús. Se convierte en un acto de reverencia a Jesús cuando consideramos ese día como un día malo y lloramos sin celebrarlo. De lo contrario,<b>expresamos admiración por Jesús sólo con nuestras palabras, no en nuestro corazón</b>. Si honras, amas, adoras y oras a Jesús, entonces propaga la noción del Viernes Santo como Viernes Malo y ayuda a todos a entenderlo. Entonces te convertirás en un verdadero devoto de Jesús. Cuando dejáis el Viernes Santo, no os sucede nada malo; sólo suceden cosas buenas.

</div></div>
</span>`
},
{
chapterName: "Una carta de un hindú",
chapterNumber: 9,
pageNumber: 149,
verse: ``,
meaning: ``,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem">
<div class="poemtext">
<i>Primero, postraciones ante Swami.... </i>

  ¡Jai Sri Rama! Mi nombre es Pittala Thirumalesha, tengo 36 años, pueblo de Nalgonda, distrito de Telangana. Ocupación: Trabajo, Casta: Mudiraju (casta Boya), Religión: Religión hindú, Ocupación del padre: Primero agricultor y luego tirador de rickshaw, Ocupación de la madre: vendedora de frutas, Mi educación: <b>Maestría en Ciencias, Licenciatura en Ed. (Matemáticas).</b>

  Señor, le escribo esta carta con la intención de que mi introducción espiritual haga algo bueno para esta sociedad. Después de leer tu Escritura,<b> “Gemas en la Segunda Escritura Divina”</b>, Quería escribir esta carta. Parece que escribir escrituras sobre la Biblia es el acto más audaz de un Swamiji hindú (India). Muchos piensan que un Swamiji puede escribir el Bhagavad-Gita pero no la Biblia. Ya leí sus escrituras, el Bhagavad-Gita y el Corán. Ahora también he aprendido la sabiduría de la Biblia a través de sus escritos. A través de ti comprendí la sabiduría divina en las tres escrituras de las tres religiones. Conociendo el estado actual de la sociedad, expresó algunos de mis puntos de vista con buenas intenciones a través de esta carta.

  La primera escritura que leí es<b>"El secreto del Triángulo de las Bermudas"</b> .A través de esta escritura, aprendí el secreto de por qué los aviones y barcos desaparecen en el Triángulo de las Bermudas. Me alegro mucho de haberme dado cuenta de este extraño hecho que parecía una película de Hollywood. Luego lee las Escrituras. <b>“Fantasmas - Bhutas (Los incidentes reales)”</b>y llegó a conocer información científica sobre el “mundo invisible (sutil)”. Además, quedé tan sorprendido cuando supe cómo opera el gobierno de Dios y la Ley Divina, y doy gracias a mi Dios por conocer el misterio más grande. Luego leí las Escrituras. <b>“La historia de un buscador de la verdad”y“¿Dios Sri Krishna o Bhagavan?”</b>Me sentí muy feliz de aprender un gran secreto de la escritura “¿Dios Sri Krishna o Bhagavan?” Ahora que he encontrado un destino para mi vida, estoy feliz de haber visitado el templo de Krishna en Prabodh Ashramam, China Poda Mala, y haber adorado al Señor Krishna. Desde que visité Prabodh Ashramam en julio de 2012, cada día me siento emocionado de alegría por absorber la sabiduría de sus 93 escrituras y 150 conferencias.

  A través de las escrituras<b>“Tradiciones del templo (verdades ocultas)”</b>Aprendí sobre el significado de los templos. He captado el verdadero significado de las tradiciones suprimidas desde<b>“Indu Sampradayas (Tradiciones)”.</b>De la escritura<b>“Mana Pandugalu (Nuestros festivales)”</b>No sólo he entendido el significado de "Pandu (fruta)" en "Panduga (festival)", sino que también he comprendido el propósito esencial de los festivales y la intención del pensamiento planeado previamente por nuestros mayores. Como dijiste en esta escritura, es cien por ciento cierto que primero tiene lugar el desarrollo espiritual y luego el desarrollo personal y más tarde el desarrollo social. Cada escritura que viene de ti es una mina de sabiduría. Cada predicación es un tesoro del dharma. Tus palabras son beneficiosas no sólo para los humanos sino también para todos los seres vivos. Esta es la verdad que estoy diciendo después de haber experimentado durante los últimos seis años.

  Me sentí abatido cuando los hindúes de vuestra religión dijeron palabras despectivas contra ti, el gran emperador. Pero estoy compartiendo información a través de esta carta para que todos estén al tanto de los hechos. El Teorema de Thraitha El Bhagavad-Gita transmitió el verdadero mensaje del Señor Krishna. Las escrituras de Swami<b>“Palabras de sabiduría en la Última Divina Escritura (704 páginas)”</b>y<b>“Diamantes en la Última Divina Escritura”</b>hizo que el mundo comprendiera la sabiduría divina que Gabriel (El Sol) envió al Profeta Mahoma. La escritura del Yogeeswarlu <b>“Gemas en la Segunda Divina Escritura (352 páginas)”</b>transmitió el verdadero mensaje de los evangelios de Jesús.

  Aquí está mi llamamiento a los intelectuales empequeñecidos por el odio religioso, a los demonios religiosos despiadados, a los jnanis incompletos que están locos por la religión, a los monstruos políticos que no conocen el valor del ashram, a los falsos profetas que engañan a la sociedad con sarna de casta y locura religiosa, a los racionalistas que no saben la razón, comunidades que buscan la verdad y que no son conscientes de ella, y ancianos que están empujando a la sociedad a la superstición usando las palabras Dios, Alma, adoración y sabiduría. Por favor lea detenidamente al menos una de las escrituras de Swami para conocer la grandeza del<b>“Teorema de Thraytha”</b>y presta mucha atención a lo que dice. Observemos una de las palabras de Swami.

  <b>“Las religiones están prohibidas. Las castas son irracionales. Los tres (El Bhagavad-Gita, la Biblia y el Corán) son partes de la misma escritura divina. Si su sentimiento va más allá de la casta, únase inmediatamente al Prabodha Seva Samithi. Dios quiere que seas gnani – Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu”</b>

  Swamiji no sólo dijo las palabras anteriores sino que también celebró matrimonios entre castas y religiones. También se casó con otra mujer de casta. ¿Es odio religioso y escritos venenosos sobre un Swami tan grande? Hombres, piensen una vez con discreción.

  Las escrituras de Swami transmitieron la verdadera sabiduría de los poemas de Vemana. Cuentan el verdadero significado de los poemas filosóficos de Veer Abraham. El Atolinga Shatakam transmitía información espiritual. Ha proporcionado muchos de los mayores secretos desconocidos para el mundo y la información divina que contribuye a la prosperidad espiritual de la humanidad. Muchos ateos que han captado la sabiduría de sus Escrituras se han convertido en verdaderos creyentes. Incluso los tontos se volvieron racionalistas. Los creyentes ciegos se convirtieron en científicos espirituales con el enfoque científico. Incluso los terroristas han cambiado y se han convertido en jnanis.

  <b>Un hindú que conoce su sabiduría es un verdadero indu (verdadero gnani).

  Un cristiano que conoce su sabiduría es un verdadero cristiano (verdadero creyente en Dios). Un musulmán que conoce su sabiduría es un verdadero musulmán (verdaderamente obediente a Dios).</b>

  Sus escrituras erradica el karma y perdonan el pecado. Si pones Su Escritura en el cuerpo donde tienes dolor con devoción y creencia, se adherirá sin ningún apoyo hasta que destruya el karma que lo causó y te proporcione alivio. Si bien esto puede resultar una sorpresa, es una verdad flagrante basada en mi experiencia.

  Es a través de sus escritos que el mundo ha llegado a conocer la verdad sobre 'Bhagavan Ravana Brahma', la encarnación de Dios en Thraitha Yuga. Incluso Sita Devi, a quien todo el mundo dice ser la víctima, no acusó a Ravana Brahma. ¿Por qué los arios que escribieron el Ramayana no pudieron decir la edad de Ravana Brahma en el momento del secuestro de Sita? Si se respondiera a esta pregunta, saldrían a la luz las historias ocultas originales del Ramayana. Ravana Brahma visitó a Sita Devi en Ashokavana con su esposa Mandodari yMeghnaad, pero ¿por qué fue retratado como un hombre vicioso? Aunque los ancianos Ravana Brahma no asistieron al swayamvara de Cita, ¿no es una pena escribir que no pudo levantar el arco de Shiva en el swayamvara de Sita? Cuando llevó a Sita, su hija, sin tocarla a su reino de Sri Lanka, ¿escribirías falsamente que era un hombre lujurioso? Algunos egoístas han planeado conspiraciones contra él, diciendo que la tomó con lujuria; ¿Cómo es posible esto basándose en lo que dijiste de que cualquiera que tocara a Sita moriría quemado? Al menos por ahora, esta comunidad debería saber la verdad sobre el Ramayana. Mandodari Devi, que conocía el secreto de que el sufrimiento de Sita y la encarnación de Bhagavan Ravana Brahma terminarían pronto, solía decirle a la gente de su reino que Ravana Brahma trajo a Sita a Lanka para el bienestar de Sita. Deseamos ver los retratos del gran Sri Bhagavan Ravana Brahma y Srimati Mandodari Devi.

  Realmente no sabes quién eres. No pongas mensajes basura innecesarios en Facebook y YouTube, y cuando blasfemes, acumularás años de karma. No escuches si no es necesario. Cuando no sepas la definición de dharma y cuántos dharmas, no llames a los gnanis para debatir en la televisión pública.

  El teorema de Thraitha es el verdadero estándar. Este estándar se utiliza para medir el nivel de odio religioso. El mundo llegará a saber cuánta sabiduría hay en las religiones y cuánto odio hay en las religiones a través de la sabiduría del Teorema de Thraitha. La sabiduría del teorema de Thraitha revela a este mundo cuánta sabiduría hay en las religiones y cuánto odio hay en las religiones. Prabodha Seva Samiti y sus cinco afiliados creen firmemente que pase lo que pase, sucederá con el permiso de Dios.

  <b>Prabodh Ashramam es la única organización que trae desarrollo espiritual..</b>. Todas las demás organizaciones trabajan por el desarrollo de la personalidad y una sociedad mejor. Pero todos deberían reconocer que si no se produce el desarrollo espiritual, no se producirá el desarrollo social y de la personalidad.

  La sabiduría de Yogeeswarlu está libre de castas y de religión. Por eso personas de todas las religiones (hindúes, musulmanes y cristianos) acuden a él en armonía y felices de conocer la verdadera sabiduría divina. Como dijo Veerabrahmam, Su sabiduría une las tres religiones. Brahmam dijo en Kalanggaman (profecía): <b>“Todos los grandes semidioses (devas) están en Anandashram.</b> “Los Devatas vinieron y hablaron con alegría para aprender la sabiduría de su padre. También dijo: <b>“Prabodh Ashramam tiene el nivel más alto de sabiduría. Aquellos en Prabodh Ashramam consisten en atributos del Todopoderoso. Ese todopoderoso era sólo Ananda Guru. Ananda Gurú el Gurú para ti y para mí también.</b>Tales mensajes de palabras pronunciadas por el propio Brahmam se encuentran en las escrituras de Swami. Debéis captar la sabiduría de Dios con discreción y diligencia.

  ¿Aquellos que no leen el Bhagavad-Gita son salvadores de los dharmas hindúes? ¿Defenderán la religión hindú los tontos, que no conocen la injusticia de la historia? ¿Se puede construir una sociedad igualitaria sin conocer el “Secreto del comienzo” y el “Secreto de la creación”? Reconoce la bondad de las Escrituras leyendo con paciencia y sin odio religioso. Si te sientes mal, déjalo. No existe ninguna regla que indique que todos deban creerlo.<b>Las escrituras y enseñanzas de Thraitha Siddhanta,</b> que son tan beneficiosos para la humanidad y tienen una conciencia científica y espiritual racional y revelan los secretos de <b>Brahma, Karma y Bhakti Yogams</b>en detalle con Jeevatma, Alma y Paramatma, son esenciales para la sociedad actual.

  Las organizaciones: ONU, Consejo Mundial de la Paz, Ley de Policía, IPC, CrPC, Leyes de Prisiones, CBI, CB CID, Informes de Inteligencia, ACB, Human Rights Watch, Derechos de la Mujer, Ley de Atrocidades SC ST, Ley de Fideicomisos Indios, Ley Musulmana, Ley Cristiana, Las leyes laborales, las GO del gobierno central, las GO del gobierno estatal, la Comisión Electoral, la Constitución india, los tribunales indios, la Ley RTI, la Ley de tecnología de la información de 2000 existen, de hecho, por el bien del bienestar humano. Las instituciones espirituales tienen la responsabilidad de decirle a la gente qué tipo de sabiduría es adecuada para su bienestar. Prabodh Ashramam y sus afiliados ocupan el primer lugar en instituciones tan responsables. Sobre todo, no debemos olvidar que también existe<b>“Ley Divina y Administración Divina”</b>.

  La esencia de las tres escrituras divinas es explicar acerca de las tres almas. La vida sin la sabiduría divina es un desperdicio. Dios dio vida al hombre sólo para que conociera la sabiduría de Dios. La sabiduría de Dios está más allá de las castas y la religión. Yogeeswarlu proporcionó el verdadero significado de la sabiduría del Señor Krishna a través de la primera escritura divina Bhagavad-Gita'. Nos dio la sabiduría del Corán, que llegó al Profeta Muhammad a través de Gabriel, en las escrituras 'Palabras de sabiduría en la Última Escritura Divina' y 'Diamantes'. En la Última Escritura Divina.' Nos contó la sabiduría del Evangelio de Jesús en 'Gemas en la Segunda Escritura Divina'. Él nos está dando sabiduría divina práctica y real a través de las Escrituras y las enseñanzas. Conozca la sabiduría que Él dijo y use el Sello de Dios y reciba el perdón de los pecados. Si escuchas atentamente y lo practicas, tienes suerte. Si no escuchas, ese es tu karma. Todo sucede según la voluntad de Dios, y Dios lo sabe.

  <b>Los hindúes deberían saber a qué Dios adorar. Los musulmanes necesitan saber quiénes son los dos Alá (los dos creadores). Los cristianos necesitan saber quiénes son los dos hijos.</b>

  Un hombre nunca se convierte en Dios, pero Dios puede venir como hombre. Para reconocer al Dios que tiene forma humana, primero debemos tener su sabiduría en nosotros. Para reconocer a Dios, necesitamos conocer estos dos principios que dijeron los ancianos. Como dijo Vemana Yogui, sus poemas se pueden entender de 1000 maneras y, de manera similar, la sabiduría del teorema de Thraitha se puede entender de 9000 maneras. Según el dicho "Shraddha Van labarthe gnanam (Aquellos que tienen interés alcanzarán la sabiduría)", aquellos que son reflexivos e intelectuales pueden comprender la sabiduría de Thraitha.

  Al menos ahora, abandona el pensamiento de casta y religión y conoce la verdadera sabiduría divina. Si no lo sabes ahora, nunca lo sabrás. El tiempo es corto. Hazlo ahora.

  Ofrezco flores aromáticas a los pies de Yogeeswarlu para darnos más sabiduría divina. Ofrezco saludos ilimitados con todo mi corazón y con toda mi alma y mente.

Tu siervo obediente

<b>Thirumalesu</b>

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
  Gemas en
</div>
<div class="img1-title2">
La Segunda Escritura Divina
</div>
<div class="img1-title3">
(Evangelio en el Teorema de Thraitha)
</div>
<div class="img1-title4">
Elautor: El único Gurú de tres religiones (hindú, musulmana y cristiana),El Emperador del  Reino Espiritual, El escritor de más de cien libros sagrados divinos, Indu Gnana Dharma Pradata,  el Escritor Sensacional, Adi Karta de la Doctrina Thraitha,
</div>
<div class="img1-title5">
Sri Sri Sri Acharya Prabodhananda Yogeeswarulu
</div>
</div>
</p>`
},
{
chapterName: "GLOSARIO",
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
<b>Achara Prakruti</b>: Cinco elementos inmutables: cielo, aire, fuego, agua y tierra. Aquellos (Prakruti) que no tienen karma. Prapancha. Pancha Bhutas.

<b>Injusticia</b>: Est&aacute;n en contra de los dharmas. Causan buen karma, mal karma o ambos. Adharmas mencionados en el Bhagavad-Gita: estudiar los Vedas, hacer obras de caridad, yaj&aacute;s (sacrificios rituales), penitencias, etc.

<b>Karma agami</b>: Pecado reci&eacute;n llegado y punya desde el nacimiento hasta la muerte. Karma inminente.

<b>Aham</b>: Parte interna del cuerpo pero no guna.

<b>Antakaranams</b>: Cinco partes sutiles del cuerpo: Jeeva (Jivatma), Manas, Buddhi, Chittam y Aham.

<b>Astrolog&iacute;a</b>: Quien conoce la sabidur&iacute;a espiritual conoce el karma de la otra persona con su sabidur&iacute;a y le informa. Para conocer el futuro se requiere ojo de sabidur&iacute;a. Lo que se conoce con luz de sabidur&iacute;a.

<b>Alma</b>: Aquel que habita con un ser mortal. Uno que es imperecedero. Aquel que est&aacute; en todos los cuerpos vivientes. Alma. Akshara purusha. Alma inmortal.

<b>Bhagavan</b>: Uno que vino de Dios. Aquel que vino con la informaci&oacute;n de Dios, Cristo-cuerpo de cada ser vivo es 25.

<b>Sangre del pacto</b>: Poder de la sabidur&iacute;a. Esencia de sabidur&iacute;a. La sabidur&iacute;a de Dios sin ataduras.
Del karma.

<b>Dioses</b>: Humanos invisibles. Semidioses.

<b>Dharma Shastra</b>: Escritura con dharmas (sabidur&iacute;a). Los mandamientos de Dios. Brahma
Vida. S&uacute;per ciencia.

<b>Dharmas</b>: Sabidur&iacute;a divina. Doctrinas o principios divinos. Mandamientos. Seguir los dharmas conduce a la liberaci&oacute;n de la vida y la muerte.

<b>Fantasma</b>: Persona que vive con un cuerpo sutil. Diablo o demonio.

<b>Jivatma</b>: Alma mortal en el cuerpo. Kshara purusha o Jeeva.J&ntilde;anendriyas: Cinco &oacute;rganos sensoriales: ojo, o&iacute;do, nariz, lengua y piel.

<b> Impulsado</b>: Una persona que conoce la sabidur&iacute;a divina y los armas. Brahma gnani.

<b>Karma chakra</b>: Es un conjunto de 108 piezas. Cada una de las 12 partes del chakra Karma tiene un tipo diferente de karma. Cada tipo de karma se divide a su vez en nueve partes. Doce partes tienen 108 (12*9) tipos de karma.

<b>Karma Visarga</b>: Dividir el karma en peque&ntilde;as partes.

<b>Karma yoga</b>: Cuando un Jeevatma reconoce a Aham en su cuerpo y no escucha lo que dice Aham, entonces no obtiene ning&uacute;n karma. Es la lucha de Jeeva contra Aham.

<b>Karma yogui</b>: Una persona que conoce la sabidur&iacute;a y pr&aacute;ctica Karma Yoga.

<b>Karma</b>: Pecado invisible y tener.

<b>Karmendriyas</b>: Manos, piernas, boca, ano y &oacute;rgano sexual.

<b>Mi</b>: Funciona como comunicador entre el cerebro y los &oacute;rganos. Recuerda y recuerda cosas.

<b>Moksha</b>: Liberaci&oacute;n del nacimiento, muerte, vida, sufrimientos, etc. Uni&oacute;n con Dios. Paraloka, Mukti o Salvaci&oacute;n. Liberaci&oacute;n.

<b>Paramatma</b>: Que es diferente del Atma. Padre de seres vivos enteros y Pancha Bhutas. Dios, el Esp&iacute;ritu Santo, Allah, Purushottama, Uttama Purusha o el padre de paraloka. Alma suprema.

<b>Prakriti</b>: Combinaci&oacute;n de Chara Prakruti y Achara Prakruti. Naturaleza.

<b>Prarabdha Karma</b>: Karma predeterminado. Esto sucede en esta vida desde el nacimiento hasta la muerte. Prarabdha karma se decide cuando nace un hombre.

<b>Tener</b>: Proviene de las buenas obras. Lo que causa placeres en la vida.

<b>Purusha</b>: Perteneciente a Paramatma en cualquier ser vivo.

<b>Karma sanchita</b>: El karma acumulado como un mont&oacute;n despu&eacute;s de experimentar karma en cada nacimiento se llama sanchita karma.

<b>Pecado</b>: Proviene de malas acciones. Causa dificultades y dolor.

<b>Sin embargo</b>: Energ&iacute;as derivadas (vista, o&iacute;do, olfato, gusto y tacto) que se conectan con los &oacute;rganos de los sentidos.

<b>Upadesha</b>: Obtenci&oacute;n del fuego de la sabidur&iacute;a como caridad. Pa&iacute;s que no es pa&iacute;s (Todo aquel que tenga ojo de sabidur&iacute;a debe ver). Energ&iacute;a de sabidur&iacute;a, Paramatma. Bautismo. Iniciaci&oacute;n a la sabidur&iacute;a.

<b>Yogui</b>: Aquel que est&aacute; en Yogama. El hacedor del Yogama. Una persona que conoce la sabidur&iacute;a divina y pr&aacute;ctica los dharmas.
<span style="font-weight: 400;"><br /></span>
</div>
</div>`
},
{
chapterName: "Vídeos",
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

    { title: "El camino de Dios", component: 0, chapterNumber: 0, subs: null, icon: 'information' },
    { title: 'Secreto de la creación', component: 1, chapterNumber: 1, subs: null, icon: 'information' },
    {
      title: 'El evangelio de Mateo', component: null, chapterNumber: 2, icon: 'book',
      subs: [
        {
          shloka: "3-7. ¡Cría de víboras! ¿Quién os advirtió que huyáis de la ira venidera?.",
          component: 2,
          subs: null
        },
        {
          shloka: "3-11. Yo os bautizo con agua para cambiar manas (mente)...",
          component: 3,
          subs: null
        },
        {
          shloka: "3-12. Su bieldo está en Su mano, y Él limpiará Su era, juntará Su trigo en el granero y quemará la paja en fuego inextinguible.",
          component: 4,
          subs: null
        },
        {
          shloka: "3-16. (3:16) Tan pronto como Jesús fue bautizado, subió del agua. En ese momento se abrió el cielo y vio al Espíritu de Dios descender como paloma y posarse sobre él.",
          component: 5,
          subs: null
        },
        {
          shloka: "3-17. (3:17) Y una voz del cielo dijo: Éste es mi hijo amado; con él estoy Muy contento. ",
          component: 5,
          subs: null
        },
        {
          shloka: "4-10 Jesús le dijo: “¡Aléjate de mí, Satanás! Porque escrito está: Adora al Señor Vuestro Dios y servidle sólo a Él”.",
          component: 6,
          subs: null
        },
        {
          shloka: "5-10. Bienaventurados los que son perseguidos por causa de la justicia (sabiduría), porque de ellos es el reino de paraloka. ",
          component: 7,
          subs: null
        },
        {
          shloka: "5-17. No penséis que he venido a abolir la Ley (Dharma Shastra) o los Profetas; No he venido a abolirlos sino a cumplirlos.",
          component: 8,
          subs: null
        },
        {
          shloka: "5-18. Porque en verdad os digo que hasta que el cielo y la tierra desaparezcan, ni la más pequeña letra, ni el más mínimo trazo de una pluma, desaparecerá de la Ley (Dharma Shastra) hasta que todo se cumpla.",
          component: 9,
          subs: null
        },
        {
          shloka: "5-19. Por lo tanto, cualquiera que deje de lado uno de estos mandamientos más pequeños y enseñe a otros en consecuencia será llamado el más pequeño en el reino de paraloka, pero cualquiera que practique y enseñe estos mandamientos será llamado grande en el reino de paraloka.",
          component: 10,

          subs: null
        },
        {
          shloka: "5-20. Porque os digo que a menos que vuestra justicia supere la de los fariseos y los maestros de la ley, ciertamente no entraréis en el reino de paraloka.",
          component: 11,
          subs: null
        },
        {
          shloka: "5-28. Pero yo os digo que cualquiera que mira a una mujer para codiciarla, ya adulteró con ella en su corazón.",
          component: 12,
          subs: null
        },
        {
          shloka: "5-29. Si tu ojo derecho te hace tropezar, sácatelo y tíralo. Más te vale perder una parte de tu cuerpo, que todo tu cuerpo sea arrojado al infierno.",
          component: 13,

          subs: null
        },
        {
          shloka: "5-30. Y si tu mano derecha te hace tropezar, córtala y tirala. Es mejor que pierdas una parte de tu cuerpo que todo tu cuerpo vaya al infierno.",
          component: 13,

          subs: null
        },
        {
          shloka: "6-3. Pero cuando hagas dharma, no dejes que tu mano izquierda sepa lo que está haciendo tu mano derecha.",
          component: 14,

          subs: null
        },
        {
          shloka: "6-4. Para que vuestra ofrenda sea en secreto. Entonces tu padre, que ve lo que se hace en secreto, te recompensará.",
          component: 14,

          subs: null
        },
        {
          shloka: "6-6. Pero cuando ores, entra en tu habitación, cierra la puerta y ora a tu Padre que está en secreto. Entonces tu padre, que ve lo que se hace en secreto, te recompensará.",
          component: 15,

          subs: null
        },
        {
          shloka: "6-7. Cuando oréis, no hagáis balbuceos como los paganos, porque piensan que serán escuchados por sus muchas palabras.",
          component: 16,

          subs: null
        },
        {
          shloka: "6-8. No seas como ellos, porque tu padre sabe lo que necesitas antes de que se lo pidas.",
          component: 16,

          subs: null
        },
        {
          shloka: "7-7. Pedid y se os dará; Busca y encontrarás; llama y se te abrirá la puerta.",
          component: 18,
          subs: null
        },
        {
          shloka: "7-8. Porque todo el que pide, recibe; el que busca encuentra; y al que llama, se le abrirá la puerta.",
          component: 18,
          subs: null
        },
        {
          shloka: "7-13. Entrad por la puerta estrecha. Porque ancha es la puerta y espacioso el camino que lleva a la perdición, y muchos entran por él. ",
          component: 17,
          subs: null
        },
        {
          shloka: "7-14. Pero pequeña es la puerta y angosto el camino que lleva a la vida, y sólo unos pocos lo encuentran.",
          component: 17,
          subs: null
        },

        {
          shloka: "7-15. Cuidado con los falsos profetas. Vienen a vosotros vestidos de ovejas, pero Por dentro son lobos feroces.",
          component: 19,
          subs: null
        },
        {
          shloka: "7-21. No todo el que me dice: Señor, Señor, entrará en el reino de Para Loca, sino sólo el que hace la voluntad de mi Padre que está en paralocos.",
          component: 20,
          subs: null
        },
        {
          shloka: "7-22. Muchos me dirán aquel día: Señor, Señor, ¿no profetizamos en tu nombre y en tu nombre expulsamos demonios y en tu nombre hicimos muchos milagros?",
          component: 21,
          subs: null
        },
        {
          shloka: "7-23. Entonces les diré claramente: “Nunca os conocí”. ¡Apartaos de mí, malhechores!",
          component: 21,
          subs: null
        },
        {
          shloka: "8-22. Jesús le dijo: “Sígueme, y deja que los muertos entierren a sus propios muertos”.",
          component: 22,

          subs: null
        },
        {
          shloka: "9-12. Al oír esto, Jesús dijo: “No son los sanos los que necesitan médico, sino Los enfermos”.",
          component: 23,

          subs: null
        },
        {
          shloka: "9-13. Porque no he venido a llamar a justos, sino a pecadores.",
          component: 23,

          subs: null
        },
        {
          shloka: "8-23. Entonces subió a la barca y sus discípulos le siguieron.",
          component: 24,
          subs: null
        },
        {
          shloka: "8-24. De repente se levantó sobre el lago una tormenta tan furiosa que las olas arrasan la barca. Pero Jesús estaba durmiendo.",
          component: 24,
          subs: null
        },
        {
          shloka: "8-25. Los discípulos fueron y lo despertaron, diciendo: “¡Señor, sálvanos! ¡Nos vamos a ahogar!",
          component: 24,
          subs: null
        },
        {
          shloka: "8-26. Él respondió: “Hombres de poca fe, ¿por qué tenéis tanto miedo?” Luego se levantó y reprendió a los vientos y a las olas, y todo quedó en completa calma.",
          component: 24,
          subs: null
        },
        {
          shloka: "9-6. Quiero que sepan que el Hijo del Hombre tiene autoridad en la tierra para perdonar pecados. Entonces le dijo al paralítico: “Levántate, toma tu camilla y vete a casa”. Entonces el hombre se levantó y se fue a su casa.",
          component: 25,

          subs: null
        },
        {
          shloka: "10-20. Porque no seréis vosotros los que habléis, sino el Espíritu de vuestro Padre hablando por vosotros.",
          component: 26,

          subs: null
        },
        {
          shloka: "10-30. Hasta los mismos cabellos de vuestra cabeza están todos contados.",
          component: 27,

          subs: null
        },
        {
          shloka: "10-34. No penséis que he venido a traer paz a la tierra. No vine a traer paz, sino espada.",
          component: 28,

          subs: null
        },
        {
          shloka: "10-35. Porque he venido a poner “al hombre contra su padre, a la hija contra su madre, una nuera contra su suegra.",
          component: 28,

          subs: null
        },
        {
          shloka: "10-36. Los enemigos del hombre serán los miembros de su propia casa.",
          component: 28,

          subs: null
        },
        {
          shloka: "10-37. Cualquiera que ama a su padre o a su madre más que a mí, no es digno de mí; el que ama a su hijo o a su hija más que a mí no es digno de mí.",
          component: 29,
          subs: null
        },
        {
          shloka: "10-38. El que no toma su cruz y me sigue, no es digno de mí.",
          component: 30,
          subs: null
        },
        {
          shloka: "10-40. El que a vosotros recibe, a mí me recibe, y el que a mí me recibe, recibe al que me envió.",
          component: 31,
          subs: null
        },
        {
          shloka: "11-9. ¿Qué saliste a ver? ¿Un profeta? Sí, os lo digo, y (soymás que un profeta.",
          component: 32,
          subs: null
        },
        {
          shloka: "11-28. Venid a mí todos los que estáis cansados y agobiados, y yo os haré descansar.",
          component: 33,
          subs: null
        },
        {
          shloka: "12-17. Esto fue para que se cumpliera lo dicho por medio del profeta Isaías.",
          component: 34,
          subs: null
        },
        {
          shloka: "12-18. Aquí está mi siervo a quien he elegido, a quien amo, en quien tengo complacencia; Pondré mi Espíritu sobre él.",
          component: 34,
          subs: null
        },
        {
          shloka: "12-19. Proclamará justicia (sabiduría) a las naciones; No peleará ni gritará; nadie oirá su voz en las calles.",
          component: 34,
          subs: null
        },
        {
          shloka: "12-20. No quebrará la caña cascada, ni apagará el pábilo que humea, hasta que haya llevado la justicia (la sabiduría) a la victoria.",
          component: 34,
          subs: null
        },
        {
          shloka: "12-21. En su nombre pondrán su esperanza las naciones.",
          component: 34,
          subs: null
        },
        {
          shloka: "12-31. SAsí que os digo que todo tipo de pecado y calumnia puede ser perdonado, pero la blasfemia contra el Espíritu (Atma) no será perdonada.",
          component: 35,
          subs: null
        },
        {
          shloka: "12-32. Cualquiera que hable una palabra contra el Hijo del Hombre será perdonado, pero cualquiera que hable contra el Espíritu Santo no será perdonado, ni en esta era (yuga) ni en la era (yuga) venidera.",
          component: 36,

          subs: null
        },
        {
          shloka: "12-36. Pero yo os digo que cada uno tendrá que dar cuenta en el día del juicio de cada palabra vacía que haya pronunciado. ",
          component: 37,
          subs: null
        },
        {
          shloka: "12-37. Porque por tus palabras serás absuelto, y por tus palabras serás condenado.",
          component: 37,
          subs: null
        },
        {
          shloka: "12-40. Porque como estuvo Jonás en el vientre de un pez enorme tres días y tres noches, así estará el Hijo del Hombre en el corazón de la tierra tres días y tres noches.",
          component: 38,

          subs: null
        },
        {
          shloka: "13-13. Aunque ven, no ven; aunque oyen, no oyen ni entienden.",
          component: 39,
          subs: null
        },
        {
          shloka: "13-14. En ellos se cumple la profecía de Isaías: Siempre oiréis, pero nunca entenderéis; Siempre verás pero nunca percibirás.",
          component: 39,
          subs: null
        },
        {
          shloka: "13-15. Porque el corazón de este pueblo se ha endurecido; apenas oyen con los oídos y han cerrado los ojos. De lo contrario, podrían ver con sus ojos, oír con sus oídos, entender con su corazón y volverse, y Yo los sanaría.",
          component: 39,
          subs: null
        },
        {
          shloka: "15-7. ¡Hipócritas! Isaías tenía razón cuando profetizó acerca de vosotros.",
          component: 40,
          subs: null
        },
        {
          shloka: "15-8. Este pueblo me honra con los labios, pero su corazón está lejos de mí.",
          component: 40,
          subs: null
        },
        {
          shloka: "15-9. En vano me adoran; sus enseñanzas son meras reglas humanas.",
          component: 40,
          subs: null
        },
        {
          shloka: "15-11. Lo que entra en la boca de alguien no lo contamina, pero lo que sale de su boca, eso es lo que lo contamina.",
          component: 41,
          subs: null
        },
        {
          shloka: `15-12.Entonces los discípulos se acercaron a él y le preguntaron: "¿Sabes que los fariseos se escandalizaron al oír esto?"`,
          component: 42,
          subs: null
        },
        {
          shloka: `15-13. Él respondió: “Toda planta que mi Padre celestial no haya plantado, será arrancada de raíz”.`,
          component: 42,
          subs: null
        },
        {
          shloka: "15-14. Déjalos; son guías ciegos. Si un ciego guía a otro ciego, ambos caerán en el hoyo.",
          component: 43,
          subs: null
        },
        {
          shloka: "16-21. Desde entonces comenzó Jesús a explicar a sus discípulos que debía ir a Jerusalén y sufrir mucho a manos de los ancianos, de los principales sacerdotes y de los maestros de la ley, y que debía ser ejecutado. Y al tercer día resucitará. (Primera vez)",
          component: 44,
          subs: null
        },
        {
          shloka: "16-22. Pedro lo tomó aparte y comenzó a reprenderlo. “¡Nunca, Señor!” él dijo. “¡Esto nunca te sucederá!”",
          component: 44,
          subs: null
        },
        {
          shloka: "17-22. Cuando se reunieron en Galilea, les dijo: El Hijo del Hombre va a ser entregado en manos de hombres.",
          component: 44,
          subs: null
        },
        {
          shloka: "17-23. Lo matarán y al tercer día resucitará. Y los discípulos se llenaron de tristeza. (Segunda vez)",
          component: 44,
          subs: null
        },
        {
          shloka: "20-17. Ahora Jesús subía a Jerusalén. En el camino, tomó aparte a los Doce y les dijo. ",
          component: 44,
          subs: null
        },
        {
          shloka: "20-18. Subimos a Jerusalén, y el Hijo del Hombre será entregado a los principales sacerdotes y a los maestros de la ley. Lo condenarán a muerte.",
          component: 44,
          subs: null
        },
        {
          shloka: "20-19. Lo entregarán a los gentiles para que se burlen y azoten y Crucificado. ¡Al tercer día resucitará! (Tercera vez) ",
          component: 44,
          subs: null
        },
        {
          shloka: "19-23. Entonces Jesús dijo a sus discípulos: “En verdad os digo; Es difícil para alguien rico entrar en el reino de Paraloka.",
          component: 45,
          subs: null
        },
        {
          shloka: "19-24. Otra vez os digo que es más fácil que un camello pase por el ojo de una aguja, que un rico entre en el reino de Dios.",
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
          shloka: "22-36. Maestro, ¿cuál es el mayor mandamiento de la Ley (Dharma Shastra)?",
          component: 46,
          subs: null
        },
        {
          shloka: "22-37. Jesús respondió: “Ama al Señor tu Dios con todo tu corazón y con toda tu alma y con toda tu mente”.",
          component: 46,
          subs: null
        },
        {
          shloka: "22-38. Este es el primer y mayor mandamiento.",
          component: 46,
          subs: null
        },
        {
          shloka: `22-39. Y el segundo es parecido: “Ama a tu prójimo como a ti mismo”.`,
          component: 46,
          subs: null
        },
        {
          shloka: "22-40. Toda la Ley y los Profetas dependen de estos dos mandamientos.",
          component: 46,
          subs: null
        },
        {
          shloka: `23-8. "Pero a ti no te llamarán 'Rabí', porque tienes un Maestro, y todos sois Hermanos. `,
          component: 47,
          subs: null
        },
        {
          shloka: `23-9. Y no llaméis padre a nadie en la tierra, porque un Padre tenéis, y él está en Paraloka. `,
          component: 47,
          subs: null
        },
        {
          shloka: "23-10.	Tampoco os llamaréis instructores, porque un solo Instructor tenéis, el Mesías.",
          component: 47,
          subs: null
        },
        {
          shloka: `23-15. “¡Ay de vosotros, maestros de la ley y fariseos, hipócritas! Viajas por tierra y mar para ganar un solo converso, y cuando lo logras, lo conviertes en el doble de hijo del infierno que tú.`,
          component: 48,
          subs: null
        },
        {
          shloka: " 24-35. El cielo y la tierra pasarán, pero mis palabras nunca pasarán.",
          component: 49,
          subs: null
        },
        {
          shloka: "24-42. Por tanto, estad alerta, porque no sabéis qué día vendrá vuestro Señor.",
          component: 50,
          subs: null
        },
        {
          shloka: `26-26. Mientras comían, Jesús tomó pan, y habiendo dado gracias, lo partió y se lo dio a sus discípulos, diciendo: Tomad y comed; este es mi cuerpo."`,
          component: 51,
          subs: null
        },
        {
          shloka: "26-27. Entonces tomó una copa, y habiendo dado gracias, se la dio, diciendo: Bebed de ella todos.",
          component: 51,
          subs: null
        },
        {
          shloka: "26-28. Esta es mi sangre del pacto (la sabiduría de Dios sin las ataduras de la ignorancia), que por muchos es derramada para perdón de los pecados.",
          component: 51,
          subs: null
        },
        {
          shloka: "28-18. Entonces Jesús se acercó a ellos y les dijo: «A mí me ha sido dado todo poder en Paraloka y en la tierra.",
          component: 52,
          subs: null
        },
        {
          shloka: "28-19. Por tanto, id y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo.",
          component: 53,
          subs: null
        },
        {
          shloka: "28-20. Enseñándoles a obedecer todo lo que os he mandado. Y seguramente, Yo estaré con vosotros siempre, hasta el final de la era (Yuga).",
          component: 53,
          subs: null
        },

      ]
    },
    {
      title: 'El evangelio de Marcos', component: null, chapterNumber: 3, icon: 'book',
      subs: [
        {
          shloka: "2-19. ¿Cómo pueden ayunar los invitados del novio mientras él está con ellos? No pueden, mientras lo tengan con ellos.",
          component: 54,
          subs: null
        },
        {
          shloka: "2-20. Pero llegará el día en que les será quitado el novio, y aquel día ayunarán.",
          component: 54,
          subs: null
        },
        {
          shloka: `4-38. Jesús estaba en la popa, durmiendo sobre un cojín. Los discípulos lo despertaron y Le dijo: “Maestro, ¿no te importa si nos ahogamos?”`,
          component: 55,
          subs: null
        },
        {
          shloka: `4-39. Se levantó, reprendió al viento y dijo a las olas: “¡Silencio! ¡Estate quieto!" Luego el viento amainó y todo quedó en completa calma.`,
          component: 55,
          subs: null
        },
        {
          shloka: "5-38. Cuando llegaron a la casa del líder de la sinagoga, Jesús vio un alboroto, y la gente lloraba y se lamentaba a gran voz.",
          component: 56,
          subs: null
        },
        {
          shloka: `5-39. Entró y les dijo: ¿A qué se debe todo este alboroto y este llanto? El niño no está muerto sino dormido”.`,
          component: 56,
          subs: null
        },
        {
          shloka: `5-40. Pero se rieron de él. Después de echarlos a todos, se llevó al padre del niño. Y la madre y los discípulos que estaban con él y entraron donde estaba el niño.`,
          component: 56,
          subs: null
        },
        {
          shloka: `5-41. Él la tomó de la mano y le dijo: “¡Talita boom!” (Que significa “¡Niña, te digo, levántate!”).`,
          component: 56,
          subs: null
        },
        {
          shloka: "5-42. Inmediatamente la niña se levantó y comenzó a caminar (tenía doce años). Ante esto quedaron completamente asombrados.",
          component: 56,
          subs: null
        },
        {
          shloka: "5-43. Él dio órdenes estrictas de que nadie se enterara de esto y les dijo que le dieran algo de comer.",
          component: 56,
          subs: null
        },
        {
          shloka: "7-15. Nada fuera de una persona puede contaminarse al entrar en ella.",
          component: 57,
          subs: null
        },
        {
          shloka: "7-16. Más bien, es lo que sale de una persona lo que la contamina.",
          component: 57,
          subs: null
        },
        {
          shloka: "7-17. Después que dejó la multitud y entró en la casa, sus discípulos le preguntaron acerca de esta parábola.",
          component: 57,
          subs: null
        },
        {
          shloka: `7-18. “¿Eres tan aburrido?” preguntó. “¿No ves que nada que entre en un ¿Puede alguien de fuera contaminarlos?`,
          component: 57,
          subs: null
        },
        {
          shloka: `7-19. Porque no entra en su corazón sino en su estómago, y luego sale de El cuerpo."`,
          component: 57,
          subs: null
        },
        {
          shloka: `7-20. Continuó: “Lo que sale de la persona es lo que la contamina.`,
          component: 57,
          subs: null
        },
        {
          shloka: `7-21. Porque de dentro, del corazón del hombre, salen los malos pensamientos. Inmoralidad sexual, robo, asesinato,`,
          component: 57,
          subs: null
        },
        {
          shloka: "7-22. adulterio, avaricia, malicia, engaño, lascivia, envidia, calumnia, arrogancia y necedad.",
          component: 57,
          subs: null
        },
        {
          shloka: "7-23. Todos estos males vienen del interior y contaminan a la persona.",
          component: 57,
          subs: null
        },
        {
          shloka: "3-35. Quien hace la voluntad de Dios es mi hermano, mi hermana y mi madre.",
          component: 58,
          subs: null
        },
        {
          shloka: "4-17. Pero como no tienen raíz, duran poco tiempo. Cuando vienen problemas o persecución a causa de la palabra, rápidamente se apartan.",
          component: 59,
          subs: null
        },
        {
          shloka: `4-21. Él les dijo: ¿Traéis una lámpara para ponerla debajo de un plato o de una cama? En cambio, ¿no lo pones en su soporte?`,
          component: 60,
          subs: null
        },
        {
          shloka: "4-22. Porque todo lo que está oculto debe ser revelado, y todo lo que está oculto debe salir a la luz.",
          component: 60,
          subs: null
        },
        {
          shloka: `6-4. Jesús les dijo: Un profeta no queda sin honor excepto en su propia ciudad, Entre sus familiares y en su propia casa”.`,
          component: 61,
          subs: null
        },
        {
          shloka: "8-38. Si alguno se avergüenza de mí y de mis palabras en esta generación adúltera y pecadora, el Hijo del Hombre se avergonzará de ellos cuando venga en la gloria de su Padre con los santos ángeles.",
          component: 62,

          subs: null
        },

        {
          shloka: ` 9-7. Entonces apareció una nube que los cubrió, y desde la nube salió una voz: “Éste es mi Hijo, a quien amo. ¡Escúchalo a él!" `,
          component: 63,

          subs: null
        },
        {
          shloka: `10-17. Cuando Jesús se puso en camino, un hombre corrió hacia él y cayó de rodillas. Antes que él. “Buen maestro”, preguntó, “¿qué debo hacer para heredar la vida eterna?” `,
          component: 64,

          subs: null
        },
        {
          shloka: `10-18. “¿Por qué me llamas bueno?” Jesús respondió. “Nadie es bueno, excepto sólo Dios.`,
          component: 64,

          subs: null
        },
        {
          shloka: `16-15. Les dijo: Id por todo el mundo y predicad el evangelio a todos Creación.`,
          component: 65,
          subs: null
        },
        {
          shloka: `16-16. El que crea y sea bautizado será salvo, pero el que no crea será condenado.`,
          component: 65,
          subs: null
        },

      ]
    },
    {
      title: 'El evangelio de Lucas', component: null, chapterNumber: 4, icon: 'book',
      subs: [



        {
          shloka: `2-49. “¿Por qué me buscabas?” preguntó. “¿No sabías que tenía que estar en los negocios de mi Padre?”`,
          component: 66,
          subs: null
        },
        {
          shloka: `11-37. Mientras Jesús hablaba, uno de los fariseos lo invitó a comer a casa. Entonces entró y ocupó su lugar en la mesa.`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-38. Su anfitrión quedó asombrado al ver que se sentaba a comer sin realizar primero la ceremonia de lavado de manos requerida por la costumbre judía.`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-39. Entonces el Señor le dijo: Vosotros, los fariseos, sois muy cuidadosos en limpiar por fuera el vaso y el plato, pero por dentro estáis inmundos, llenos de avaricia y de maldad.`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-40. ¡Tontos! ¿No hizo Dios tanto el interior como el exterior`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-41. Entonces, limpia el interior dando regalos (dharmas) a los pobres, y estarás completamente limpio.`,
          component: 67,
          subs: null
        },
        {
          shloka: `12-4. Os digo, amigos míos, que no temáis a los que matan el cuerpo y después ya no pueden hacer más.`,
          component: 68,

          subs: null
        },
        {
          shloka: `12-5. Pero yo os mostraré a quién debéis temer: temed a aquel que, después de haber asesinado vuestro cuerpo, tiene autoridad para arrojarnos al infierno. Sí, os digo: temedle.`,
          component: 68,

          subs: null
        },
        {
          shloka: `12-25. ¿Quién de vosotros, aferrándose, podrá añadir a su estatura un codo?`,
          component: 69,

          subs: null
        },
        {
          shloka: "12-33. Vende tus bienes y dáselos a los pobres. Hacemos bolsas que no se gasten, un tesoro en para loca que nunca falte, donde ningún ladrón se acerque y ninguna polilla destruye.",
          component: 70,
          subs: null
        },
        {
          shloka: "12-34. Porque donde esté vuestro tesoro, allí estará también vuestro corazón.",
          component: 70,
          subs: null
        },
        {
          shloka: "12-49. Fuego he venido a traer sobre la tierra, y cómo quisiera que ya estuviera encendido. ",
          component: 71,
          subs: null
        },
        {
          shloka: "12-51. ¿Crees que vine a traer paz a la tierra? No, te lo digo, sino división.",
          component: 72,
          subs: null
        },
        {
          shloka: "12-52. De ahora en adelante habrá cinco en una familia divididos unos contra otros, tres contra dos y dos contra tres.",
          component: 72,
          subs: null
        },
        {
          shloka: "12-53. Estarán divididos, padre contra hijo, hijo contra padre, madre contra hija, hija contra madre, suegra contra nuera y nuera contra suegra.",
          component: 72,
          subs: null
        },
        {
          shloka: "13-3. A menos que cambien de opinión, todos ustedes también perecerán.",
          component: 73,
          subs: null
        },
        {
          shloka: "14-26. Si alguno viene a mí y no aborrece a su padre y a su madre, a su esposa y a sus hijos, a sus hermanos y hermanas, e incluso a su propia vida, tal persona no puede ser mi discípulo.",
          component: 74,

          subs: null
        },
        {
          shloka: "14-27. El que no lleva su cruz y me sigue, no puede ser mi discípulo.",
          component: 75,
          subs: null
        },
        {
          shloka: `18-29. “En verdad os digo”, les dijo Jesús, “nadie que por causa del reino de Dios haya dejado casa, o esposa, o hermanos, o hermanas, o padres o hijos, dejará de recibir mucho más. En este siglo, y en el siglo venidero, vida eterna”.`,
          component: 76,
          subs: null
        },
        {
          shloka: "21-15. Os daré palabras y sabiduría que ninguno de vuestros adversarios podrá resistir ni contradecir.",
          component: 77,

          subs: null
        },
        {
          shloka: "21-17. Todos os odiarán por mi causa.",
          component: 78,
          subs: null
        }



      ]

    },
    {
      title: 'El Evangelio de Juan', component: null, chapterNumber: 5, icon: 'book',
      subs: [
        {
          shloka: "1-1. En el principio era el Verbo, y el Verbo estaba con Dios, y el Verbo era Dios.",
          component: 79,
          subs: null
        },
        {
          shloka: "(1-9). La luz verdadera que alumbra a todos estaba viniendo al mundo.",
          component: 80,
          subs: null
        },
        {
          shloka: "1-10. Él estaba en el mundo, y aunque el mundo fue hecho por él, el mundo no lo reconoció.",
          component: 81,
          subs: null
        },
        {
          shloka: "1-11. A lo suyo vino, pero los suyos no lo recibieron.",
          component: 82,
          subs: null
        },
        {
          shloka: "1-12. Sin embargo, a todos los que lo recibieron, a los que creyeron en su nombre, les dio potestad de llegar a ser hijos de Dios.",
          component: 83,
          subs: null
        },
        {
          shloka: "1-13. Hombres nacidos no de descendencia natural, ni de decisión humana ni de voluntad de marido, Pero nacido de Dios.",
          component: 84,
          subs: null
        },
        {
          shloka: "1-14. El Verbo se hizo carne y habitó entre nosotros. Hemos visto su gloria, la gloria del único Hijo, que vino del Padre, lleno de gracia y de verdad.",
          component: 85,
          subs: null
        },
        {
          shloka: "1-18. Ningún hombre ha visto a Dios jamás; el Hijo unigénito, que está en el seno del Padre, lo reveló.",
          component: 86,
          subs: null
        },
        {
          shloka: `1-51. Luego añadió: “En verdad os digo que veréis el cielo abierto y los ángeles de Dios subiendo y descendiendo sobre el Hijo del Hombre”.`,
          component: 87,
          subs: null
        },
        {
          shloka: `3-3. Jesús respondió: “En verdad os digo que nadie puede ver el reino de Dios a menos que Ellos nacen de nuevo.`,
          component: 88,
          subs: null
        },
        {
          shloka: `3-4. “¿Cómo puede alguien nacer siendo viejo?” -Preguntó Nicodemo. “¡Seguramente no pueden entrar por segunda vez en el vientre de su madre para nacer!”.`,
          component: 89,
          subs: null
        },
        {
          shloka: `3-5. Jesús respondió: “De cierto os digo que nadie puede entrar en el reino de Dios. A menos que nazcan del agua y del Espíritu (Atma).`,
          component: 89,
          subs: null
        },
        {
          shloka: "3-6. La carne da a luz a la carne, pero el Espíritu (Atma) da a luz al espíritu.",
          component: 89,
          subs: null
        },
        {
          shloka: `3-7. No debería sorprenderte que yo diga: “Os es necesario nacer de nuevo”.`,
          component: 89,
          subs: null
        },
        {
          shloka: `3-8. El viento sopla donde quiere. Oyes su sonido, pero no sabes de dónde viene ni adónde va. Lo mismo ocurre con todos los nacidos del Espíritu (Atma)”.`,
          component: 89,
          subs: null
        },
        {
          shloka: "3-13. Nadie ha entrado nunca en Paralelo excepto el que vino de Paraloka. —el Hijo del Hombre.  ",
          component: 90,
          subs: null
        },
        {
          shloka: "3-15. Para que todo aquel que en Él cree, no se pierda, sino que tenga vida eterna.",
          component: 91,
          subs: null
        },
        {
          shloka: "3-17. Porque Dios no envió a su Hijo al mundo para juzgar al mundo, sino para salvar al mundo por él.",
          component: 92,
          subs: null
        },
        {
          shloka: "3-18. El que cree en Él no es juzgado, pero el que no cree ya es juzgado porque no ha creído en el nombre del unigénito Hijo de Dios.",
          component: 93,
          subs: null
        },
        {
          shloka: "3-19. Este es el veredicto: La luz vino al mundo, pero los hombres amaron las tinieblas en lugar de la luz, porque sus obras eran malas.",
          component: 94,
          subs: null
        },
        {
          shloka: "3-20. Todo el que hace el mal aborrece la luz y no viene a la luz por miedo a que sus obras queden descubiertas.",
          component: 94,
          subs: null
        },
        {
          shloka: "3-21. Pero el que vive en la verdad viene a la luz, para que se vea claramente que lo que ha hecho, ha sido hecho ante los ojos de Dios.",
          component: 94,
          subs: null
        },
        {
          shloka: "5-19. Jesús les dio esta respuesta: “De cierto os digo, que el Hijo nada puede hacer por sí mismo; Sólo puede hacer lo que ve hacer a su Padre, porque todo lo que hace el Padre, también lo hace el Hijo.",
          component: 95,
          subs: null
        },
        {
          shloka: "5-20. Porque el Padre ama al Hijo y le muestra todo lo que hace. Sí, y aún mayores obras que éstas le mostrará, de modo que os quedaréis asombrados.",
          component: 96,
          subs: null
        },
        {
          shloka: "5-21. Porque así como el Padre resucita a los muertos y les da vida, así también el Hijo da vida a quien Él quiere dársela.",
          component: 97,
          subs: null
        },
        {
          shloka: "5-22. Además, el Padre a nadie juzga, sino que todo juicio ha confiado al Hijo.",
          component: 97,
          subs: null
        },
        {
          shloka: "5-23. Para que todos honren al Hijo así como honran al Padre. Quien no honra al Hijo, no honra al Padre que lo envió.",
          component: 97,
          subs: null
        },
        {
          shloka: "5-24. De cierto os digo, que el que oye mi palabra y cree al que me envió, tiene vida eterna y no será juzgado, sino que ha pasado de muerte a vida.",
          component: 98,
          subs: null
        },
        {
          shloka: "5-26. Porque como el Padre tiene vida en sí mismo, así también le ha concedido al Hijo tener vida en sí mismo.",
          component: 99,
          subs: null
        },
        {
          shloka: "5-37. Nunca habéis oído Su voz ni visto Su forma.",
          component: 100,
          subs: null
        },
        {
          shloka: "5-38. Ni su palabra habita en vosotros, porque no creéis al que Él envió.",
          component: 101,

          subs: null
        },
        {
          shloka: `6-25. Cuando lo encontraron al otro lado del lago, le preguntaron: “Rabí, ¿cuándo llegaste aquí?”`,
          component: 102,
          subs: null
        },
        {
          shloka: `6-26. (6:26) Jesús respondió: “En verdad os digo que me buscáis, no porque Viste las señales que hice sino porque comiste los panes y te saciaste.`,
          component: 102,
          subs: null
        },
        {
          shloka: "6-27. No trabajéis por la comida que se echa a perder, sino por la comida que la vida eterna perdura, la cual os dará el Hijo del Hombre. Porque sobre Él Dios Padre ha puesto Su sello de aprobación.",
          component: 102,
          subs: null
        },
        {
          shloka: "6-32. Jesús les dijo: “En verdad os digo que no es Moisés quien os ha dado el pan de pará loca, sino que es mi Padre quien os da el verdadero pan de paraloka.",
          component: 103,
          subs: null
        },
        {
          shloka: "6-47. Nadie ha visto al Padre sino el que es de Dios; sólo Él ha visto al Padre.",
          component: 104,
          subs: null
        },
        {
          shloka: `7-37. En el último y más grande día de la fiesta, Jesús se puso de pie y dijo en voz alta: “Cualquiera que tenga sed, venga a mí y beba”.`,
          component: 105,
          subs: null
        },
        {
          shloka: "7-38. El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva.",
          component: 105,
          subs: null
        },
        {
          shloka: `8-12. Cuando Jesús volvió a hablar a la gente, dijo: “Yo soy la luz del mundo. El que me sigue nunca caminará en tinieblas sino que tendrá la luz de la vida”.`,
          component: 106,
          subs: null
        },
        {
          shloka: "8-14. Jesús respondió: “Aunque testifique de mí mismo, mi testimonio es válido, porque sé de dónde vengo y adónde voy. Pero no tienes idea de dónde vengo ni adónde voy.",
          component: 107,
          subs: null
        },
        {
          shloka: `8-19. Entonces le preguntaron: "¿Dónde está tu Padre?" “No me conocéis ni a mí ni a mi Padre”, respondió Jesús. “Si me conocieseis, conoceríais también a mi Padre”.`,
          component: 108,
          subs: null
        },
        {
          shloka: "8-21. Jesús les dijo otra vez: Yo me voy, y me buscaréis, y moriréis en vuestro pecado. A donde yo voy, tú no puedes venir”. ",
          component: 109,
          subs: null
        },
        {
          shloka: `8-23. Pero él continuó: “Vosotros sois de abajo; Soy de arriba. Vosotros sois de este mundo; Yo no soy de este mundo.`,
          component: 110,
          subs: null
        },

        {
          shloka: `8-24. Os dije que moriréis en vuestros pecados; si no creéis que yo soy, ciertamente moriréis en vuestros pecados”. `,
          component: 111,
          subs: null
        },
        {
          shloka: `8-28. Entonces, Jesús dijo: “Cuando hayáis levantado al Hijo del Hombre, entonces sabréis que yo soy, y que no hago nada por mi cuenta, sino que hablo exactamente lo que el Padre me ha enseñado.`,
          component: 112,
          subs: null
        },
        {
          shloka: "8-29. El que me envió está conmigo; Él no me ha dejado solo, porque siempre hago lo que le agrada.",
          component: 113,
          subs: null
        },
        {
          shloka: `8-53. ¿Eres tú mayor que nuestro padre Abraham? Él murió, y también los profetas. ¿Quién crees que eres?"  `,
          component: 114,
          subs: null
        },
        {
          shloka: `8-54. Jesús respondió: “Si me glorío a mí mismo, mi gloria no significa nada. Mi padre, A quién reclamamos como vuestro Dios, es el que me glorifica.
          `,
          component: 114,
          subs: null
        },
        {
          shloka: "8-55. Aunque vosotros no le conocéis, yo le conozco. Si dijera que no, sería un mentiroso como usted, pero sí lo conozco y obedecer Su palabra.",
          component: 115,
          subs: null
        },
        {
          shloka: `8-57. “Aún no tienes cincuenta años”, le dijeron, “y has visto ¡Abrahán!".
          `,
          component: 116,

          subs: null
        },
        {
          shloka: `8-58. “En verdad os digo”, respondió Jesús, “¡antes que Abraham naciera, yo existo!”.`,
          component: 116,

          subs: null
        },
        {
          shloka: `9-39. (9:39) Jesús dijo: “Para juicio he venido a este mundo, para que los ciegos Verán y los que ven quedarán ciegos”. `,
          component: 117,
          subs: null
        },
        {
          shloka: `9-41. Jesús dijo: “Si fueseis ciegos, no seríais culpables de pecado; pero ahora que afirmas que puedes ver, tu culpa permanece.`,
          component: 118,
          subs: null
        },
        {
          shloka: "10-18. Nadie me quita la vida, sino que yo la entrego por mi propia voluntad. Tengo autoridad para dejarlo y autoridad para retomarlo. Este mandato lo recibí de mi Padre.",
          component: 119,

          subs: null
        },
        {
          shloka: "10-30. Yo y el Padre uno somos.",
          component: 120,
          subs: null
        },
        {
          shloka: "11-25. (11:25) Jesús le dijo: Yo soy la resurrección y la vida. El que cree En mí vivirá, aunque muera”.",
          component: 121,
          subs: null
        },
        {
          shloka: "11-26. El que vive creyendo en mí, no morirá jamás.",
          component: 122,
          subs: null
        },
        {
          shloka: "12-25. El que ama su vida la perderá, mientras que el que aborrece su vida en este mundo la conservará para vida eterna.",
          component: 123,
          subs: null
        },
        {
          shloka: "12-40. Él ha cegado sus ojos y endurecido su corazón, de modo que no pueden ver con sus ojos, ni entender con su corazón, ni volverse; y yo los sanaría.",
          component: 124,
          subs: null
        },
        {
          shloka: "12-47. Si alguno escucha mis palabras pero no las guarda, no lo juzgo. Porque no he venido a juzgar al mundo, sino a salvar al mundo.",
          component: 125,
          subs: null
        },
        {
          shloka: "12-48. Hay juez para el que me rechaza y no acepta mis palabras; las mismas palabras que he hablado los juzgarán en el último día.",
          component: 125,
          subs: null
        },
        {
          shloka: "12-49. Porque yo no hablé por mi cuenta, sino que el Padre que me envió me mandó decir todo lo que he hablado.",
          component: 126,
          subs: null
        },
        {
          shloka: "12-50. Sé que su mandato conduce a la vida eterna. Entonces, todo lo que digo es justo lo que el Padre me ha dicho que diga.",
          component: 126,
          subs: null
        },
        {
          shloka: "14-7. Si realmente me conocéis, conoceréis también a mi Padre. De ahora en adelante, lo conoces y lo has visto.",
          component: 127,
          subs: null
        },
        {
          shloka: `14-8. Felipe dijo: “Señor, muéstranos al Padre y eso nos bastará”.`,
          component: 128,
          subs: null
        },
        {
          shloka: `14-9. Jesús respondió: “¿No me conoces, Felipe, incluso después de tanto tiempo que estoy entre vosotros? Cualquiera que me haya visto, ha visto al Padre. ¿Cómo puedes decir: “muéstranos al Padre”?`,
          component: 128,
          subs: null
        },
        {
          shloka: `14-10. ¿No creéis que yo estoy en el Padre, y que el Padre está en mí? Las palabras que os digo no las hablo con mi propia autoridad. Más bien, es el Padre, que vive en mí, quien hace Su obra.`,
          component: 129,
          subs: null
        },
        {
          shloka: `14-6. Jesús respondió: “Yo soy el camino, la verdad y la vida. Nadie viene a El Padre sino a través de mí.`,
          component: 130,
          subs: null
        },
        {
          shloka: "14-16. Yo pediré al Padre, y Él os dará otro Consolador para que os ayude y esté con vosotros para siempre.",
          component: 131,
          subs: null
        },
        {
          shloka: "14-17. El mundo no puede aceptarlo porque no lo ve ni lo conoce. Pero vosotros le conocéis, porque Él vive con vosotros y estará en vosotros.",
          component: 132,
          subs: null
        },

        {
          shloka: "14-20. En aquel día comprenderéis que yo estoy en mi Padre, y vosotros en mí, y yo en vosotros.",
          component: 133,
          subs: null
        },
        {
          shloka: "14-25. Todo esto lo he hablado estando aún con vosotros.",
          component: 134,
          subs: null
        },
        {
          shloka: "14-26. Pero el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, os enseñará todas las cosas y os recordará todo lo que os he dicho.",
          component: 134,
          subs: null
        },
        {
          shloka: " 15-23. El que me aborrece, odia también a mi Padre.",
          component: 135,
          subs: null
        },
        {
          shloka: `15-24. Si yo no hubiera hecho entre ellos las obras que ningún otro hizo, no serían culpables de pecado. Tal como son las cosas, lo han visto y, sin embargo, me han odiado a mí y a mi Padre.`,
          component: 136,
          subs: null
        },
        {
          shloka: "15-25. Pero esto es para cumplir lo que está escrito en su Ley: “Sin razón me odiaron”.",
          component: 136,
          subs: null
        },
        {
          shloka: "15-26. Cuando venga el Consolador que yo os enviaré desde el Padre, el Espíritu de verdad que sale del Padre, él dará testimonio de mí. ",
          component: 137,
          subs: null
        },
        {
          shloka: "15-27. Y vosotros también debéis dar testimonio, porque habéis estado conmigo desde el principio.",
          component: 137,
          subs: null
        },
        {
          shloka: "16-7.Pero de cierto os digo que es por vuestro bien que me voy. Si no me voy, el Defensor no vendrá a vosotros; pero si voy, os lo enviaré.",
          component: 138,
          subs: null
        },
        {
          shloka: "16-8. Cuando Él venga, demostrará que el mundo está equivocado en cuanto al pecado, la justicia y el juicio.",
          component: 139,
          subs: null
        },
        {
          shloka: "16-12. Tengo mucho más que decirte, más de lo que ahora puedes soportar.",
          component: 140,
          subs: null
        },
        {
          shloka: "16-13. Pero cuando venga el Espíritu de verdad, él os guiará a toda la verdad. Él no hablará por su cuenta; Él hablará sólo lo que oye, y les dirá lo que está por venir.",
          component: 141,
          subs: null
        },
        {
          shloka: "16-14. Él me glorificará porque de mí recibirá lo que os hará saber.",
          component: 142,
          subs: null
        },
        {
          shloka: "16-15. Todo lo que pertenece al Padre es mío. Por eso dije que el Espíritu recibirá de mí lo que os hará saber.",
          component: 142,
          subs: null
        },
        {
          shloka: `16-16. (16:16) Jesús continuó diciendo: “Dentro de un poco ya no me veréis más, y dentro de un poco me veréis”.`,
          component: 143,
          subs: null
        },
        {
          shloka: `16-17. Ante esto, algunos de sus discípulos se dijeron unos a otros: “¿Qué quiere decir con esto: 'Dentro de un poco ya no me veréis más, y dentro de un poco me veréis', y ¿'Porque voy al Padre'?”`,
          component: 144,
          subs: null
        },
        {
          shloka: `16-18. Continuaban preguntando: “¿Qué quiere decir con “un poco de tiempo”? nosotros no Entender lo que Él está diciendo”.
          .`,
          component: 144,
          subs: null
        },
        {
          shloka: `16-19. Jesús vio que querían preguntarle sobre esto, entonces les dijo: “¿Se preguntan unos a otros qué quise decir cuando dije: Dentro de un poco no me veréis más, y después ¿Dentro de poco me verás?`,
          component: 144,
          subs: null
        },
        {
          shloka: "16-20. En verdad os digo que lloraréis y lamentamos mientras el mundo se alegra. Te afligidos, pero tu pena se convertirá en alegría.",
          component: 144,
          subs: null
        },
        {
          shloka: "16-21. La mujer que da a luz a un niño tiene dolor porque ha llegado su hora; pero cuando nace su bebé, olvida la angustia por la alegría de que nazca un niño en el mundo.",
          component: 144,
          subs: null
        },
        {
          shloka: "16-22. Así, con vosotros: ahora es vuestro tiempo de tristeza, pero os volveré a ver y os alegráis, y nadie os quitará la alegría.",
          component: 144,
          subs: null
        },
        {
          shloka: "16-25. Aunque he estado hablando en sentido figurado, viene el tiempo en que ya no usaré este tipo de lenguaje sino que les hablaré claramente acerca de mi Padre.",
          component: 145,
          subs: null
        },


      ]

    },
    {
      title: 'La Escritura de Juan Apocalipsis', component: 146, chapterNumber: 6, subs: null, icon: 'information'
    },
    {
      title: 'Tres dedos', component: 147, chapterNumber: 7, subs: null, icon: 'information'

    },
    {
      title: '¿Viernes bueno o viernes malo?', component: 148, chapterNumber: 8, subs: null, icon: 'information'

    },
    {
      title: 'Una carta de un hindú', component: 149, chapterNumber: 9, subs: null, icon: 'information'

    },

    {
      title: 'Glosario', component: 151, chapterNumber: 11, subs: null, icon: 'information'

    },

    {
      title: 'Vídeos', component: 152, chapterNumber: 12, subs: null, icon: 'videocam'

    }
    // ,
    // {
    //   title: 'Share', component: 153, chapterNumber: 13, subs: null, icon: 'share'

    // }
  ];



}
