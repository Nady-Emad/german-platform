/* ============================================================================
   Verben – أفعال مع التصريف الكامل في المضارع
   Format:
   [Infinitiv, Arabisch, ich|du|er|wir|ihr|sie, Beispiel, Übersetzung,
    Typ ("reg"|"unreg"|"modal"), Kapitel, Perfekt, Notiz]
   ============================================================================ */
window.VERBS_RAW = [
  ["sein","يكون (فعل الكينونة)","bin|bist|ist|sind|seid|sind","Ich bin Student.","أنا طالب.","unreg",1,"ist gewesen","أهم فعل في الألماني – احفظه زي اسمك"],
  ["haben","يملك / عنده","habe|hast|hat|haben|habt|haben","Ich habe eine Frage.","عندي سؤال.","unreg",2,"hat gehabt","بيستخدم كتير للتكلم عن الملكية"],
  ["heißen","اسمه / يتسمى","heiße|heißt|heißt|heißen|heißt|heißen","Wie heißt du?","اسمك إيه؟","unreg",1,"hat geheißen","du heißt (مش heißst!)"],
  ["kommen","يجي / ينتمي","komme|kommst|kommt|kommen|kommt|kommen","Ich komme aus Ägypten.","أنا جاي من مصر.","reg",1,"ist gekommen","kommen aus = جاي من بلد"],
  ["wohnen","يسكن","wohne|wohnst|wohnt|wohnen|wohnt|wohnen","Ich wohne in Kairo.","أنا ساكن في القاهرة.","reg",1,"hat gewohnt","wohnen in = ساكن في مكان"],
  ["sprechen","يتكلم","spreche|sprichst|spricht|sprechen|sprecht|sprechen","Sprichst du Deutsch?","بتتكلم ألماني؟","unreg",1,"hat gesprochen","du/er بيغير الـ e لـ i: sprichst / spricht"],
  ["lernen","يتعلم","lerne|lernst|lernt|lernen|lernt|lernen","Ich lerne Deutsch.","أنا بتعلم ألماني.","reg",1,"hat gelernt","فعل نموذجي للتصريف المنتظم"],
  ["arbeiten","يشتغل","arbeite|arbeitest|arbeitet|arbeiten|arbeitet|arbeiten","Ich arbeite bei einer Firma.","أنا بشتغل في شركة.","reg",2,"hat gearbeitet","لأن الجذر بينتهي بـ t بنزود e: du arbeitest"],
  ["lesen","يقرا","lese|liest|liest|lesen|lest|lesen","Ich lese gern.","بحب أقرا.","unreg",2,"hat gelesen","du liest / er liest – فيه تغيير e→ie"],
  ["kochen","يطبخ","koche|kochst|kocht|kochen|kocht|kochen","Boris kocht nicht gern.","بوريس مش بيحب يطبخ.","reg",2,"hat gekocht","منتظم عادي"],
  ["tanzen","يرقص","tanze|tanzt|tanzt|tanzen|tanzt|tanzen","Wir tanzen gern.","إحنا بنحب نرقص.","reg",2,"hat getanzt","du tanzt – من غير s إضافية"],
  ["joggen","يعمل جوجينج","jogge|joggst|joggt|joggen|joggt|joggen","Herr Loos joggt gern.","مستر لوس بيحب يعمل جوجينج.","reg",2,"ist gejoggt","الفعل ده كمان بنمط -t/-d"],
  ["schwimmen","يعوم","schwimme|schwimmst|schwimmt|schwimmen|schwimmt|schwimmen","Ich schwimme gern.","بحب أعوم.","reg",2,"ist geschwommen","مضاعفة الـ m عادي"],
  ["singen","يغني","singe|singst|singt|singen|singt|singen","Niko singt gern.","نيكو بيحب يغني.","reg",2,"hat gesungen","في الـ Perfekt بتبقى gesungen"],
  ["spielen","يلعب","spiele|spielst|spielt|spielen|spielt|spielen","Spielst du Fußball?","بتلعب كورة؟","reg",2,"hat gespielt","spielen + Fußball / Tennis / Gitarre"],
  ["fotografieren","يصوّر","fotografiere|fotografierst|fotografiert|fotografieren|fotografiert|fotografieren","Eva fotografiert gern.","إيفا بتحب تصوّر.","reg",2,"hat fotografiert","الأفعال اللي بتخلص بـ -ieren ملهاش ge في الـ Perfekt"],
  ["reisen","يسافر","reise|reist|reist|reisen|reist|reisen","Boris reist gern.","بوريس بيحب يسافر.","reg",2,"ist gereist","du reist – من غير s إضافية"],
  ["gehen","يروح / يمشي","gehe|gehst|geht|gehen|geht|gehen","Gehen wir ins Kino?","نروح السينما؟","unreg",2,"ist gegangen","gehen + ins (Kino/Café)"],
  ["fahren","يسوق / يروح بمواصلة","fahre|fährst|fährt|fahren|fahrt|fahren","Ich fahre mit dem Bus.","بروح بالاتوبيس.","unreg",3,"ist gefahren","فيه Umlaut: du fährst, er fährt"],
  ["trinken","يشرب","trinke|trinkst|trinkt|trinken|trinkt|trinken","Ich trinke Kaffee.","بشرب قهوة.","reg",2,"hat getrunken","Perfekt شاذة: getrunken"],
  ["essen","ياكل","esse|isst|isst|essen|esst|essen","Ich esse kein Fleisch.","مش بأكل لحمة.","unreg",3,"hat gegessen","du isst / er isst (تغيير e→i)"],
  ["machen","يعمل","mache|machst|macht|machen|macht|machen","Was machst du am Montag?","بتعمل إيه يوم الاثنين؟","reg",2,"hat gemacht","فعل عام جداً"],
  ["hören","يسمع","höre|hörst|hört|hören|hört|hören","Ich höre gern Musik.","بحب أسمع موسيقى.","reg",2,"hat gehört","hören + Musik"],
  ["sehen","يشوف","sehe|siehst|sieht|sehen|seht|sehen","Siehst du das Hotel?","شايف الفندق؟","unreg",3,"hat gesehen","du siehst / er sieht"],
  ["schreiben","يكتب","schreibe|schreibst|schreibt|schreiben|schreibt|schreiben","Ich schreibe eine E-Mail.","بكتب إيميل.","reg",2,"hat geschrieben","Perfekt: geschrieben"],
  ["telefonieren","يتكلم في التليفون","telefoniere|telefonierst|telefoniert|telefonieren|telefoniert|telefonieren","Erika telefoniert gern.","إيريكا بتحب تتكلم في التليفون.","reg",2,"hat telefoniert","زي fotografieren"],
  ["buchstabieren","يتهجّى","buchstabiere|buchstabierst|buchstabiert|buchstabieren|buchstabiert|buchstabieren","Können Sie das buchstabieren?","حضرتك تقدر تهجّيها؟","reg",1,"hat buchstabiert","مهم في امتحان الاسم/الإيميل"],
  ["studieren","يدرس في الجامعة","studiere|studierst|studiert|studieren|studiert|studieren","Ich studiere an der SUT.","أنا بدرس في SUT.","reg",2,"hat studiert","للجامعة بس، مش للمدرسة"],
  ["kaufen","يشتري","kaufe|kaufst|kauft|kaufen|kauft|kaufen","Ich kaufe eine Fahrkarte.","بشتري تذكرة.","reg",3,"hat gekauft",""],
  ["warten","يستنى","warte|wartest|wartet|warten|wartet|warten","Warte zehn Minuten!","استنى ١٠ دقايق!","reg",3,"hat gewartet","بنمط -t/-d: du wartest"],
  ["finden","يلاقي / يشوف رأيه","finde|findest|findet|finden|findet|finden","Ich finde Berlin schön.","أنا شايف برلين جميلة.","unreg",3,"hat gefunden",""],
  ["öffnen","يفتح","öffne|öffnest|öffnet|öffnen|öffnet|öffnen","Öffnest du das Fenster?","هتفتح الشباك؟","reg",3,"hat geöffnet",""],
  ["nehmen","ياخد","nehme|nimmst|nimmt|nehmen|nehmt|nehmen","Wir nehmen ein Taxi.","إحنا بناخد تاكسي.","unreg",3,"hat genommen","du nimmst / er nimmt"],
  ["kosten","يكلّف (سعر)","koste|kostest|kostet|kosten|kostet|kosten","Was kostet das Ticket?","التذكرة بكام؟","reg",3,"hat gekostet","مهم للسؤال عن السعر"],
  ["bleiben","يفضل / يبقى","bleibe|bleibst|bleibt|bleiben|bleibt|bleiben","Ich bleibe zu Hause.","بفضل في البيت.","unreg",3,"ist geblieben",""],
  ["helfen","يساعد","helfe|hilfst|hilft|helfen|helft|helfen","Kannst du mir helfen?","تقدر تساعدني؟","unreg",3,"hat geholfen","du hilfst / er hilft"],
  ["möchten","عايز / يحب (بأدب)","möchte|möchtest|möchte|möchten|möchtet|möchten","Ich möchte einen Kaffee.","عايز قهوة.","modal",3,"hat gemocht","فعل مساعد – الفعل التاني بييجي في الآخر"],
  ["können","يقدر","kann|kannst|kann|können|könnt|können","Kannst du das buchstabieren?","تقدر تهجّيها؟","modal",1,"hat gekonnt","ich kann / er kann – من غير نهاية"],
  ["müssen","لازم","muss|musst|muss|müssen|müsst|müssen","Ich muss jetzt gehen.","لازم أمشي دلوقتي.","modal",3,"hat gemusst",""]
];

/* Perfekt-Hilfsverb-Hinweis: sein bei Bewegung/Zustandswechsel */
