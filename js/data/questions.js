/* ============================================================================
   Fragen – بنك الأسئلة
   1) ORIGINAL_EXERCISES : الأسئلة الأصلية من ملفات الكورس (زي ما هي)
   2) ORDERING           : تمارين ترتيب الجملة
   3) SHORT              : إجابات قصيرة
   4) MCQ_ORIGINAL       : اختيار من متعدد أصلي
   5) MCQ_GENERATED      : اختيار من متعدد إضافي
   6) KEYWORDS           : البصمجة
   ============================================================================ */

/* ======================= 1) الأسئلة الأصلية ======================= */
window.ORIGINAL_EXERCISES = [
{
  id:"orig-k1-e1", ch:1, src:"Fragen (K.1, K. 2).pdf – Seite 1",
  title:"Ergänzen Sie die Fragen.", titleAr:"كمّل السؤال بكلمة الاستفهام الصح",
  type:"fill", bank:["Wo","Wer","Wie","Woher"],
  items:[
    {n:1, text:"_______ kommen Sie? – Ich komme aus Spanien.", answers:["Woher"], full:"Woher kommen Sie?", ar:"حضرتك منين؟ – أنا من إسبانيا.", note:"السؤال عن الأصل (البلد) → Woher."},
    {n:2, text:"_______ bist du? – Ich bin Fabio.", answers:["Wer"], full:"Wer bist du?", ar:"إنت مين؟ – أنا فابيو.", note:"السؤال عن الشخص نفسه → Wer."},
    {n:3, text:"_______ heißt du? – Ich heiße Chris. Und du?", answers:["Wie"], full:"Wie heißt du?", ar:"اسمك إيه؟ – اسمي كريس. وإنت؟", note:"السؤال عن الاسم بـ Wie."},
    {n:4, text:"_______ wohnt Anna? – Sie wohnt in München.", answers:["Wo"], full:"Wo wohnt Anna?", ar:"آنا ساكنة فين؟ – ساكنة في ميونخ.", note:"السؤال عن المكان → Wo."},
    {n:5, text:"_______ kommt sie? – Sie kommt aus den USA.", answers:["Woher"], full:"Woher kommt sie?", ar:"هي جاية منين؟ – من أمريكا.", note:"أصل الشخص → Woher."},
    {n:6, text:"_______ wohnen Sie? – Ich wohne in Köln. Und Sie?", answers:["Wo"], full:"Wo wohnen Sie?", ar:"حضرتك ساكن فين؟ – في كولونيا. وحضرتك؟", note:"مكان السكن → Wo."},
    {n:7, text:"_______ ist Ihr Name? – Ich heiße Jens Körner.", answers:["Wie"], full:"Wie ist Ihr Name?", ar:"اسم حضرتك إيه؟ – اسمي ينس كورنر.", note:"السؤال عن الاسم بـ Wie."}
  ]
},
{
  id:"orig-k1-e2", ch:1, src:"Fragen (K.1, K. 2).pdf – Seite 1",
  title:"Ergänzen Sie die Verben.", titleAr:"كمّل الفعل في التصريف الصح",
  type:"fill", bank:["wohnen","heißen","sein","kommen","wohnen"],
  items:[
    {n:1, text:"Wo _______ Sie? – Ich _______ in Köln.", answers:["wohnen","wohne"], full:"Wo wohnen Sie? – Ich wohne in Köln.", ar:"حضرتك ساكن فين؟ – ساكن في كولونيا.", note:"Sie → wohnen، ich → wohne."},
    {n:2, text:"Wie _______ du? – Ich _______ Jan.", answers:["heißt","heiße"], full:"Wie heißt du? – Ich heiße Jan.", ar:"اسمك إيه؟ – اسمي يان.", note:"du heißt (ß) و ich heiße."},
    {n:3, text:"Wer _______ Sie? – Ich _______ Selina Lang.", answers:["sind","bin"], full:"Wer sind Sie? – Ich bin Selina Lang.", ar:"حضرتك مين؟ – أنا سيلينا لانج.", note:"sein: Sie sind / ich bin."},
    {n:4, text:"Woher _______ Jan? – Aus Frankfurt.", answers:["kommt"], full:"Woher kommt Jan? – Aus Frankfurt.", ar:"يان جاي منين؟ – من فرانكفورت.", note:"er/sie/es → kommt."},
    {n:5, text:"Wo _______ du? – In Zürich.", answers:["wohnst"], full:"Wo wohnst du? – In Zürich.", ar:"إنت ساكن فين؟ – في زيورخ.", note:"du → wohnst."}
  ]
},
{
  id:"orig-k1-e3", ch:1, src:"Fragen (K.1, K. 2).pdf – Seite 2",
  title:"Was passt? Ordnen Sie zu.", titleAr:"وصل السؤال بالإجابة المناسبة",
  type:"match",
  pool:["In Zürich.","Aus der Schweiz.","S-C-H-W-E-I-Z","Ich bin Vera.","v.bichler@gmax.de","0176-5388971"],
  items:[
    {n:1, text:"Wie heißt du?", answer:"Ich bin Vera.", ar:"اسمك إيه؟ – أنا فيرا."},
    {n:2, text:"Wo wohnen Sie?", answer:"In Zürich.", ar:"حضرتك ساكن فين؟ – في زيورخ."},
    {n:3, text:"Wie ist deine Telefonnummer?", answer:"0176-5388971", ar:"رقم تليفونك إيه؟ – ٠١٧٦٥٣٨٨٩٧١."},
    {n:4, text:"Wie ist Ihre E-Mail-Adresse?", answer:"v.bichler@gmax.de", ar:"إيميل حضرتك إيه؟ – v.bichler@gmax.de."},
    {n:5, text:"Woher kommen Sie?", answer:"Aus der Schweiz.", ar:"حضرتك منين؟ – من سويسرا."},
    {n:6, text:"Kannst du das bitte buchstabieren?", answer:"S-C-H-W-E-I-Z", ar:"ممكن تهجّيها؟ – S-C-H-W-E-I-Z."}
  ]
},
{
  id:"orig-k2-e1", ch:2, src:"Fragen (K.1, K. 2).pdf – Seite 3",
  title:"Ergänzen Sie die Verben in der richtigen Form.", titleAr:"صرّف الفعل اللي بين قوسين",
  type:"fill", bank:["lesen","tanzen","kochen","spielen","joggen","schwimmen"],
  items:[
    {n:1, text:"Was _______ du? – Ich _______ ein Buch von Daniel Kehlmann. (lesen)", answers:["liest","lese"], full:"Was liest du? – Ich lese ein Buch von Daniel Kehlmann.", ar:"بتقرا إيه؟ – بقرا كتاب لدانييل كيلمان.", note:"lesen شاذ: du liest، ich lese."},
    {n:2, text:"_______ ihr gern? – Ja, wir _______ und wir _______ auch gern. (tanzen, kochen)", answers:["Tanzt","tanzen","kochen"], full:"Tanzt ihr gern? – Ja, wir tanzen und wir kochen auch gern.", ar:"بتحبوا ترقصوا؟ – أيوه، بنرقص وبنحب نطبخ كمان.", note:"ihr tanzt، wir tanzen."},
    {n:3, text:"_______ Florian gern Fußball? (spielen) – Nein, aber er _______ und _______ sehr gern. (joggen, schwimmen)", answers:["Spielt","joggt","schwimmt"], full:"Spielt Florian gern Fußball? – Nein, aber er joggt und schwimmt sehr gern.", ar:"فلوريان بيحب يلعب كورة؟ – لأ، لكنه بيحب يعمل جوجينج ويعوم جداً.", note:"er → spielt, joggt, schwimmt."}
  ]
},
{
  id:"orig-k2-e2", ch:2, src:"Fragen (K.1, K. 2).pdf – Seite 3–4",
  title:"Was passt? Wählen Sie.", titleAr:"اختار الترتيب الصح للسؤال",
  type:"mcq",
  items:[
    {n:1, stem:"Gehen", options:["am Samstag wir ins Kino?","wir am Samstag ins Kino?","ins Kino am Samstag wir?"], answer:1, ar:"نروح السينما السبت؟", why:"بعد الفعل يجي الفاعل wir فورًا، وبعدين الوقت am Samstag، وبعدها المكان ins Kino."},
    {n:2, stem:"Spielst", options:["Fußball du gern?","gern du Fußball?","du gern Fußball?"], answer:2, ar:"بتلعب كورة؟", why:"بعد الفعل يجي الفاعل du، وبعده gern، وبعده المفعول Fußball."},
    {n:3, stem:"Was", options:["Sie am Montag machen?","machen Sie am Montag?","Sie machen am Montag?"], answer:1, ar:"حضرتك بتعمل إيه يوم الاثنين؟", why:"بعد كلمة الاستفهام Was يجي الفعل machen فورًا، وبعده الفاعل Sie."},
    {n:4, stem:"Joggt", options:["ihr morgen auch?","auch morgen ihr?","morgen auch ihr?"], answer:0, ar:"إنتم بتحبوا تجروا بكرة كمان؟", why:"بعد الفعل يجي الفاعل ihr، وبعده الوقت morgen، وبعده auch."}
  ]
},
{
  id:"orig-k2-e3", ch:2, src:"Fragen (K.1, K. 2).pdf – Seite 4",
  title:"Ergänzen Sie den bestimmten Artikel (der – die – das).", titleAr:"كمّل أداة التعريف",
  type:"fill", bank:["der","die","das"],
  items:[
    {n:1, text:"_______ Straße", answers:["die"], full:"die Straße", ar:"الشارع", note:"-e غالبًا مؤنث → die Straße."},
    {n:2, text:"_______ Glas", answers:["das"], full:"das Glas", ar:"الكوباية", note:"das Glas (محايد)."},
    {n:3, text:"_______ Schlüssel", answers:["der"], full:"der Schlüssel", ar:"المفتاح", note:"der Schlüssel (مذكر)."},
    {n:4, text:"_______ Ärztin", answers:["die"], full:"die Ärztin", ar:"الدكتورة", note:"مهنة مؤنثة بـ -in → die."},
    {n:5, text:"_______ Kellner", answers:["der"], full:"der Kellner", ar:"الجرسون", note:"مهنة مذكرة → der."},
    {n:6, text:"_______ Buch", answers:["das"], full:"das Buch", ar:"الكتاب", note:"das Buch (محايد)."},
    {n:7, text:"_______ Auto", answers:["das"], full:"das Auto", ar:"العربية", note:"das Auto (محايد)."},
    {n:8, text:"_______ Computer", answers:["der"], full:"der Computer", ar:"الكمبيوتر", note:"der Computer (مذكر)."}
  ]
},
{
  id:"rev-e1", ch:1, src:"Wiederholung.pdf – Sich vorstellen [1]",
  title:"Sich vorstellen – Ordnen Sie die richtigen Lösungen zu.", titleAr:"كمّل الحوار بالأفعال الصح",
  type:"fill", bank:["kommen","komme","heißen","heiße","wohnen","wohne","ist"],
  items:[
    {n:1, text:"Frau Richter: Guten Tag. Mein Name _______ Lydia Richter. Wie _______ Sie?", answers:["ist","heißen"], full:"Mein Name ist Lydia Richter. Wie heißen Sie?", ar:"اسمي ليديا ريختر. اسم حضرتك إيه؟", note:"Name ist … / Wie heißen Sie?"},
    {n:2, text:"Herr Martinez: Ich _______ Mario Martinez.", answers:["heiße"], full:"Ich heiße Mario Martinez.", ar:"أنا اسمي ماريو مارتينز.", note:"ich heiße."},
    {n:3, text:"Frau Richter: Woher _______ Sie, Herr Martinez?", answers:["kommen"], full:"Woher kommen Sie, Herr Martinez?", ar:"حضرتك منين يا مستر مارتينز؟", note:"Sie kommen."},
    {n:4, text:"Herr Martinez: Ich _______ aus Spanien. Und Sie?", answers:["komme"], full:"Ich komme aus Spanien.", ar:"أنا من إسبانيا. وحضرتك؟", note:"ich komme aus."},
    {n:5, text:"Frau Richter: Ich _______ aus Österreich. Ich _______ in Wien. Wo _______ Sie?", answers:["komme","wohne","wohnen"], full:"Ich komme aus Österreich. Ich wohne in Wien. Wo wohnen Sie?", ar:"أنا من النمسا. ساكنة في فيينا. وحضرتك ساكن فين؟", note:"ich komme / ich wohne / Sie wohnen."},
    {n:6, text:"Herr Martinez: Ich _______ in Madrid.", answers:["wohne"], full:"Ich wohne in Madrid.", ar:"أنا ساكن في مدريد.", note:"ich wohne in + مدينة."}
  ]
},
{
  id:"rev-e2", ch:2, src:"Wiederholung.pdf – Personen: Wer macht was?",
  title:"Personen: Wer macht was? Ergänzen Sie die fehlenden Endungen.", titleAr:"كمّل نهاية الفعل",
  type:"fill", bank:["-e","-st","-t","-en"],
  items:[
    {n:1, text:"Alexis und Yanis kommen aus Griechenland. Sie spiel_____ gern Fußball.", answers:["en"], full:"Sie spielen gern Fußball.", ar:"هم بيلعبوا كورة بحب.", note:"sie (جمع) → -en."},
    {n:2, text:"Viktor wohn_____ in Stockholm. Er fotografier_____ gern.", answers:["t","t"], full:"Viktor wohnt in Stockholm. Er fotografiert gern.", ar:"فيكتور ساكن في ستوكهولم. بيحب يصوّر.", note:"er → -t."},
    {n:3, text:"Tiago sprich_____ Portugiesisch und Spanisch. Er koch_____ gern.", answers:["t","t"], full:"Tiago spricht Portugiesisch und Spanisch. Er kocht gern.", ar:"تياجو بيتكلم برتغالي وإسباني. بيحب يطبخ.", note:"sprechen شاذ: er spricht."},
    {n:4, text:"Laura und Anna wohn_____ in Bern. Sie schwimm_____ gern.", answers:["en","en"], full:"Laura und Anna wohnen in Bern. Sie schwimmen gern.", ar:"لورا وآنا ساكنين في برن. بيحبوا يعوموا.", note:"جمع → -en."},
    {n:5, text:"Lili, Fanni und Levante sprech_____ Ungarisch. Sie tanz_____ gern.", answers:["en","en"], full:"Lili, Fanni und Levante sprechen Ungarisch. Sie tanzen gern.", ar:"بيتكلموا مجري. بيحبوا يرقصوا.", note:"جمع → -en."},
    {n:6, text:"Martina komm_____ aus der Schweiz. Sie lern_____ gern Sprachen.", answers:["t","t"], full:"Martina kommt aus der Schweiz. Sie lernt gern Sprachen.", ar:"مارتينا من سويسرا. بتحب تتعلم لغات.", note:"sie (مفرد) → -t."}
  ]
},
{
  id:"rev-e3", ch:1, src:"Wiederholung.pdf – Herr Müller (Ergänzungsübung)",
  title:"Herr Müller – Ergänzen Sie die Fragen.", titleAr:"كمّل أسئلة الحوار (سلايد المراجعة)",
  type:"fill", bank:["kommen Sie","Wo","Sprachen","Sie","Tanzen"],
  items:[
    {n:1, text:"Woher _______ ? – Ich komme aus Österreich.", answers:["kommen Sie"], full:"Woher kommen Sie?", ar:"حضرتك منين؟ – من النمسا.", note:"الفعل kommen + الفاعل Sie."},
    {n:2, text:"_______ wohnen Sie? – Ich wohne in Wien.", answers:["Wo"], full:"Wo wohnen Sie?", ar:"حضرتك ساكن فين؟ – في فيينا.", note:"المكان → Wo."},
    {n:3, text:"Welche _______ sprechen Sie? – Ich spreche Deutsch und Englisch.", answers:["Sprachen"], full:"Welche Sprachen sprechen Sie?", ar:"بتتكلم أنهي لغات؟", note:"Welche Sprachen = أنهي لغات."},
    {n:4, text:"Spielen _______ gern Fußball? – Ja, ich spiele gern Fußball.", answers:["Sie"], full:"Spielen Sie gern Fußball?", ar:"حضرتك بتحب تلعب كورة؟", note:"Spielen + Sie."},
    {n:5, text:"_______ Sie gern? – Nein, ich tanze nicht gern.", answers:["Tanzen"], full:"Tanzen Sie gern?", ar:"حضرتك بتحب ترقص؟", note:"tanzen مع Sie → Tanzen."}
  ]
},
{
  id:"rev-e4", ch:1, src:"Wiederholung.pdf – Sich vorstellen [3]",
  title:"Sich vorstellen [3] – Wählen Sie jeweils eine passende Ergänzung.", titleAr:"كمّل الجمل من الصندوق",
  type:"match",
  pool:["Steffi","aus Deutschland","in München","jetzt Russisch","Deutsch","gern Tennis","Gymnastik","gern Musik"],
  items:[
    {n:1, text:"Das ist ______ .", answer:"Steffi", ar:"دي ستيفي."},
    {n:2, text:"Steffi kommt ______ .", answer:"aus Deutschland", ar:"ستيفي من ألمانيا."},
    {n:3, text:"Sie wohnt ______ .", answer:"in München", ar:"هي ساكنة في ميونخ."},
    {n:4, text:"Steffi spricht ______ .", answer:"jetzt Russisch", ar:"ستيفي بتتكلم روسي دلوقتي."},
    {n:5, text:"Sie lernt ______ .", answer:"Deutsch", ar:"هي بتتعلم ألماني."},
    {n:6, text:"Sie spielt ______ .", answer:"gern Tennis", ar:"بتحب تلعب تنس."},
    {n:7, text:"Sie macht ______ .", answer:"Gymnastik", ar:"بتعمل جيمناستيك."},
    {n:8, text:"Sie hört ______ .", answer:"gern Musik", ar:"بتحب تسمع موسيقى."}
  ]
}
];

/* ======================= 2) ترتيب الجملة ======================= */
window.ORDERING = [
  {id:"o1", ch:1, level:1, words:["bin","Ich","Student."], correct:"Ich bin Student.", ar:"أنا طالب.",
   explain:[["Ich","الفاعل (Position 1)"],["bin","الفعل (Position 2)"],["Student","الخبر"]],
   tip:"جملة بسيطة: فاعل + فعل + باقي الجملة."},
  {id:"o2", ch:1, level:1, words:["komme","aus","Ich","Ägypten."], correct:"Ich komme aus Ägypten.", ar:"أنا من مصر.",
   explain:[["Ich","الفاعل"],["komme","الفعل (2)"],["aus Ägypten","حرف جر + بلد"]], tip:"kommen aus = من بلد."},
  {id:"o3", ch:1, level:1, words:["wohnt","Sie","in","München."], correct:"Sie wohnt in München.", ar:"هي ساكنة في ميونخ.",
   explain:[["Sie","الفاعل (هي)"],["wohnt","الفعل (2)"],["in München","مكان"]], tip:"wohnen in + مدينة."},
  {id:"o4", ch:1, level:1, words:["heißt","Wie","du?"], correct:"Wie heißt du?", ar:"اسمك إيه؟",
   explain:[["Wie","كلمة استفهام (1)"],["heißt","الفعل (2)"],["du","الفاعل (3)"]], tip:"سؤال W: كلمة استفهام + فعل + فاعل."},
  {id:"o5", ch:1, level:1, words:["Sie","Woher","kommen?"], correct:"Woher kommen Sie?", ar:"حضرتك منين؟",
   explain:[["Woher","استفهام (1)"],["kommen","الفعل (2)"],["Sie","الفاعل (3)"]], tip:"نفس نمط الـ W-Frage."},
  {id:"o6", ch:1, level:2, words:["Deutsch.","heute","lerne","Ich"], correct:"Ich lerne heute Deutsch.", ar:"أنا بتعلم ألماني النهاردة.",
   explain:[["Ich","الفاعل (1)"],["lerne","الفعل (2)"],["heute","الوقت (3)"],["Deutsch","المفعول (4)"]], tip:"الترتيب الطبيعي: فاعل + فعل + وقت + مفعول."},
  {id:"o7", ch:1, level:2, words:["ich","Heute","Deutsch.","lerne"], correct:"Heute lerne ich Deutsch.", ar:"النهاردة أنا بتعلم ألماني.",
   explain:[["Heute","الوقت (1)"],["lerne","الفعل فضل في (2)"],["ich","الفاعل اتزحزح لـ (3)"],["Deutsch","المفعول"]], tip:"لو الوقت في الأول، الفعل يفضل تاني والفاعل ييجي بعده."},
  {id:"o8", ch:2, level:2, words:["gern","Ich","Fußball.","spiele"], correct:"Ich spiele gern Fußball.", ar:"بحب ألعب كورة.",
   explain:[["Ich","الفاعل"],["spiele","الفعل"],["gern","بحب"],["Fußball","المفعول"]], tip:"gern بعد الفعل."},
  {id:"o9", ch:2, level:2, words:["am","arbeite","Montag","Ich"], correct:"Ich arbeite am Montag.", ar:"أنا بشتغل يوم الاثنين.",
   explain:[["Ich","الفاعل"],["arbeite","الفعل"],["am Montag","الوقت"]], tip:"am + اليوم."},
  {id:"o10", ch:2, level:2, words:["ins","wir","Gehen","Kino?"], correct:"Gehen wir ins Kino?", ar:"نروح السينما؟",
   explain:[["Gehen","الفعل (1) = سؤال"],["wir","الفاعل (2)"],["ins Kino","المكان"]], tip:"سؤال نعم/لا: الفعل أولًا."},
  {id:"o11", ch:2, level:2, words:["nicht","Boris","gern.","kocht"], correct:"Boris kocht nicht gern.", ar:"بوريس مش بيحب يطبخ.",
   explain:[["Boris","الفاعل"],["kocht","الفعل"],["nicht gern","النفي"]], tip:"nicht قبل gern."},
  {id:"o12", ch:2, level:3, words:["du","Musik?","gern","Hörst"], correct:"Hörst du gern Musik?", ar:"بتحب تسمع موسيقى؟",
   explain:[["Hörst","الفعل (1)"],["du","الفاعل (2)"],["gern","3"],["Musik","المفعول"]], tip:"الفعل أولًا ثم الفاعل."},
  {id:"o13", ch:2, level:3, words:["am","gehen","Samstag","wir","ins","Kino."], correct:"Am Samstag gehen wir ins Kino.", ar:"يوم السبت بنروح السينما.",
   explain:[["Am Samstag","الوقت (1)"],["gehen","الفعل (2)"],["wir","الفاعل (3)"],["ins Kino","المكان"]], tip:"الوقت الأول + الفعل تاني."},
  {id:"o14", ch:3, level:3, words:["ist","Das","Hafen.","der"], correct:"Das ist der Hafen.", ar:"ده المينا.",
   explain:[["Das","الفاعل"],["ist","الفعل"],["der Hafen","اسم معرّف"]], tip:"Was ist das? → Das ist der/die/das …"},
  {id:"o15", ch:3, level:3, words:["kein","Das","Bus,","ist"], correct:"Das ist kein Bus.", ar:"ده مش اتوبيس.",
   explain:[["Das","الفاعل"],["ist","الفعل"],["kein Bus","نفي الاسم النكرة"]], tip:"نفي ein → kein."},
  {id:"o16", ch:3, level:3, words:["eine","das","U-Bahn.","ist"], correct:"Das ist eine U-Bahn.", ar:"ده مترو.",
   explain:[["Das","الفاعل"],["ist","الفعل"],["eine U-Bahn","اسم نكرة مؤنث"]], tip:"die U-Bahn → eine U-Bahn."},
  {id:"o17", ch:3, level:3, words:["Fahrrad.","fahre","mit","Ich","dem"], correct:"Ich fahre mit dem Fahrrad.", ar:"بروح بالعجلة.",
   explain:[["Ich","الفاعل"],["fahre","الفعل"],["mit dem Fahrrad","المواصلة"]], tip:"mit + dem (das Fahrrad)."},
  {id:"o18", ch:3, level:3, words:["Sie","Was","von","Beruf?","sind"], correct:"Was sind Sie von Beruf?", ar:"حضرتك بتشتغل إيه؟",
   explain:[["Was","استفهام"],["sind","الفعل"],["Sie","الفاعل"],["von Beruf","تعبير ثابت"]], tip:"تعبير كامل: Was sind Sie von Beruf?"},
  {id:"o19", ch:1, level:3, words:["aus","kommt","Schweiz.","der","Sie"], correct:"Sie kommt aus der Schweiz.", ar:"هي من سويسرا.",
   explain:[["Sie","الفاعل"],["kommt","الفعل"],["aus der Schweiz","aus + Dativ"]], tip:"die Schweiz → aus der Schweiz."},
  {id:"o20", ch:1, level:3, words:["Ihre","ist","Telefonnummer?","Was"], correct:"Was ist Ihre Telefonnummer?", ar:"رقم تليفون حضرتك إيه؟",
   explain:[["Was","استفهام"],["ist","الفعل"],["Ihre Telefonnummer","الفاعل"]], tip:"Ihre (رسمي) / deine (عادي)."},
  {id:"o21", ch:2, level:3, words:["Zeit?","Sie","Haben","morgen"], correct:"Haben Sie morgen Zeit?", ar:"عند حضرتك وقت بكرة؟",
   explain:[["Haben","الفعل (1)"],["Sie","الفاعل (2)"],["morgen","الوقت"],["Zeit","المفعول"]], tip:"سؤال نعم/لا يبدأ بالفعل."},
  {id:"o22", ch:2, level:3, words:["nicht","Ich","aus","komme","Berlin."], correct:"Ich komme nicht aus Berlin.", ar:"أنا مش من برلين.",
   explain:[["Ich","الفاعل"],["komme","الفعل"],["nicht","النفي"],["aus Berlin","المكان"]], tip:"nicht قبل الجزء المنفي."},
  {id:"o23", ch:3, level:3, words:["Bücher.","sind","Das","keine"], correct:"Das sind keine Bücher.", ar:"دي مش كتب.",
   explain:[["Das","الفاعل"],["sind","الفعل (جمع)"],["keine Bücher","نفي جمع"]], tip:"الجمع: das sind … keine …"},
  {id:"o24", ch:3, level:3, words:["Zentrum.","Der","im","ist","Bahnhof"], correct:"Der Bahnhof ist im Zentrum.", ar:"المحطة في السنتر.",
   explain:[["Der Bahnhof","الفاعل"],["ist","الفعل"],["im Zentrum","المكان"]], tip:"in + dem = im."},
  {id:"o25", ch:2, level:3, words:["gern","Sie","Kochen","?"], correct:"Kochen Sie gern?", ar:"حضرتك بتحب تطبخ؟",
   explain:[["Kochen","الفعل (1)"],["Sie","الفاعل (2)"],["gern","3"]], tip:"نفس نمط الأسئلة."},
  {id:"o26", ch:1, level:2, words:["Name","Mein","Emad.","ist"], correct:"Mein Name ist Emad.", ar:"اسمي عماد.",
   explain:[["Mein Name","الفاعل"],["ist","الفعل"],["Emad","الخبر"]], tip:"Mein Name ist …"},
  {id:"o27", ch:2, level:3, words:["am","habe","Ich","frei.","Sonntag"], correct:"Ich habe am Sonntag frei.", ar:"عندي أجازة يوم الحد.",
   explain:[["Ich","الفاعل"],["habe","الفعل"],["am Sonntag","الوقت"],["frei","الصفة"]], tip:"frei haben = عنده أجازة."},
  {id:"o28", ch:3, level:3, words:["ein","Das","Hotel.","ist"], correct:"Das ist ein Hotel.", ar:"ده فندق.",
   explain:[["Das","الفاعل"],["ist","الفعل"],["ein Hotel","اسم نكرة محايد"]], tip:"Hotel محايد → ein."}
];

/* ======================= 3) إجابات قصيرة ======================= */
window.SHORT = [
  {id:"s1", ch:1, src:"original", q:"Wie heißen Sie?", qAr:"اسم حضرتك إيه؟", a:"Ich heiße Nady Emad.", aAr:"أنا اسمي نادي عماد.", vocab:["heißen","der Name"], keys:["Wie heißen → Ich heiße …"]},
  {id:"s2", ch:1, src:"original", q:"Woher kommen Sie?", qAr:"حضرتك منين؟", a:"Ich komme aus Ägypten.", aAr:"أنا من مصر.", vocab:["kommen aus","das Land"], keys:["Woher → Ich komme aus …"]},
  {id:"s3", ch:1, src:"original", q:"Wo wohnen Sie?", qAr:"حضرتك ساكن فين؟", a:"Ich wohne in Kairo.", aAr:"أنا ساكن في القاهرة.", vocab:["wohnen","die Stadt"], keys:["Wo wohnen → Ich wohne in …"]},
  {id:"s4", ch:1, src:"original", q:"Welche Sprachen sprechen Sie?", qAr:"حضرتك بتتكلم أنهي لغات؟", a:"Ich spreche Arabisch und Englisch.", aAr:"بتكلم عربي وإنجليزي.", vocab:["sprechen","die Sprache"], keys:["Sprachen → Ich spreche … und …"]},
  {id:"s5", ch:1, src:"original", q:"Wie geht es Ihnen?", qAr:"إزيك؟ (رسمي)", a:"Danke, gut. Und Ihnen?", aAr:"شكراً، كويس. وحضرتك؟", vocab:["gehen","gut"], keys:["Wie geht's → Danke, gut."]},
  {id:"s6", ch:1, src:"original", q:"Wie ist Ihre Telefonnummer?", qAr:"رقم تليفون حضرتك إيه؟", a:"Meine Telefonnummer ist 0159 8234607.", aAr:"رقم تليفوني ٠١٥٩ ٨٢٣٤٦٠٧.", vocab:["die Telefonnummer","mein/meine"], keys:["Telefonnummer → Meine … ist …"]},
  {id:"s7", ch:1, src:"original", q:"Wie ist Ihre E-Mail-Adresse?", qAr:"إيميل حضرتك إيه؟", a:"Meine E-Mail-Adresse ist nady@mail.com.", aAr:"إيميلي هو nady@mail.com.", vocab:["die E-Mail-Adresse"], keys:["E-Mail → Meine … ist …"]},
  {id:"s8", ch:1, src:"original", q:"Wer sind Sie?", qAr:"حضرتك مين؟", a:"Ich bin Selina Lang.", aAr:"أنا سيلينا لانج.", vocab:["sein","wer"], keys:["Wer → Ich bin …"]},
  {id:"s9", ch:1, src:"original", q:"Was ist Ihre Muttersprache?", qAr:"إيه لغتك الأم؟", a:"Meine Muttersprache ist Arabisch.", aAr:"لغتي الأم هي العربية.", vocab:["die Muttersprache"], keys:["Muttersprache → Meine … ist …"]},
  {id:"s10", ch:2, src:"original", q:"Was machst du gern?", qAr:"بتحب تعمل إيه؟", a:"Ich spiele gern Fußball.", aAr:"بحب ألعب كورة.", vocab:["gern","spielen","der Fußball"], keys:["Was machst du gern → Ich … gern"]},
  {id:"s11", ch:2, src:"original", q:"Hörst du gern Musik?", qAr:"بتحب تسمع موسيقى؟", a:"Ja, sehr gern.", aAr:"أيوه، جداً.", vocab:["hören","die Musik","sehr gern"], keys:["gern-Frage → Ja, sehr gern."]},
  {id:"s12", ch:2, src:"original", q:"Wann gehen wir ins Kino?", qAr:"إمتى نروح السينما؟", a:"Am Freitag.", aAr:"يوم الجمعة.", vocab:["wann","der Freitag","ins Kino"], keys:["Wann → Am + Tag"]},
  {id:"s13", ch:2, src:"original", q:"Was sind Sie von Beruf?", qAr:"حضرتك بتشتغل إيه؟", a:"Ich bin Student.", aAr:"أنا طالب.", vocab:["der Beruf","der Student"], keys:["Beruf → Ich bin …"]},
  {id:"s14", ch:2, src:"original", q:"Wo studieren Sie?", qAr:"حضرتك بتدرس فين؟", a:"Ich studiere an der SUT.", aAr:"بدرس في جامعة SUT.", vocab:["studieren","die Universität"], keys:["studieren → an der Uni"]},
  {id:"s15", ch:2, src:"original", q:"Wann arbeiten Sie?", qAr:"حضرتك بتشتغل إمتى؟", a:"Ich arbeite von Montag bis Freitag.", aAr:"بشتغل من الاثنين للجمعة.", vocab:["arbeiten","von … bis"], keys:["Wann arbeiten → von … bis …"]},
  {id:"s16", ch:2, src:"original", q:"Haben Sie am Montag Zeit?", qAr:"عند حضرتك وقت يوم الاثنين؟", a:"Ja, ich habe am Montag Zeit.", aAr:"أيوه، عندي وقت يوم الاثنين.", vocab:["die Zeit","haben"], keys:["Zeit haben → Ja, ich habe … Zeit."]},
  {id:"s17", ch:2, src:"original", q:"Wie alt bist du?", qAr:"عندك كام سنة؟", a:"Ich bin 22 Jahre alt.", aAr:"عندي ٢٢ سنة.", vocab:["das Alter","das Jahr"], keys:["Alter → Ich bin … Jahre alt."]},
  {id:"s18", ch:2, src:"original", q:"Woher kommst du?", qAr:"إنت منين؟", a:"Ich komme aus Ägypten und wohne in Kairo.", aAr:"أنا من مصر وساكن في القاهرة.", vocab:["kommen aus","wohnen"], keys:["Herkunft → Ich komme aus …"]},
  {id:"s19", ch:3, src:"original", q:"Was ist das?", qAr:"ده إيه؟", a:"Das ist der Hafen.", aAr:"ده المينا.", vocab:["der Hafen","das"], keys:["Was ist das → Das ist der/die/das …"]},
  {id:"s20", ch:3, src:"original", q:"Ist das eine Kirche?", qAr:"دي كنيسة؟", a:"Ja, das ist die Kirche.", aAr:"أيوه، دي الكنيسة.", vocab:["die Kirche"], keys:["Ist das ein/eine → Ja, das ist …"]},
  {id:"s21", ch:3, src:"original", q:"Ist das ein Hotel?", qAr:"ده فندق؟", a:"Nein, das ist das Rathaus.", aAr:"لأ، ده مبنى البلدية.", vocab:["das Hotel","das Rathaus"], keys:["Ist das ein → Nein, das ist …"]},
  {id:"s22", ch:3, src:"original", q:"Ist das ein Bus?", qAr:"ده اتوبيس؟", a:"Nein, das ist kein Bus, das ist eine U-Bahn.", aAr:"لأ، ده مش اتوبيس، ده مترو.", vocab:["der Bus","die U-Bahn","kein"], keys:["kein-Antwort → Nein, das ist kein …"]},
  {id:"s23", ch:3, src:"original", q:"Wie kommen Sie zur Universität?", qAr:"بتروح الجامعة إزاي؟", a:"Ich fahre mit der U-Bahn.", aAr:"بروح بالمترو.", vocab:["fahren","mit + Dativ"], keys:["Wie kommen → Ich fahre mit …"]},
  {id:"s24", ch:3, src:"original", q:"Wo ist der Bahnhof?", qAr:"محطة القطر فين؟", a:"Der Bahnhof ist im Zentrum.", aAr:"المحطة في السنتر.", vocab:["der Bahnhof","im Zentrum"], keys:["Wo ist → … ist im …"]},
  {id:"s25", ch:1, src:"generated", q:"Wie bitte? Können Sie das buchstabieren?", qAr:"عفوًا؟ ممكن تهجّيها؟", a:"Ja: N-a-d-y.", aAr:"أيوه: N-a-d-y.", vocab:["buchstabieren","wie bitte"], keys:["buchstabieren → Buchstabe für Buchstabe"]},
  {id:"s26", ch:2, src:"generated", q:"Was machen Sie am Wochenende?", qAr:"بتعمل إيه في الويك إند؟", a:"Am Wochenende lese ich und höre Musik.", aAr:"في الويك إند بقرا وبسمع موسيقى.", vocab:["das Wochenende","lesen"], keys:["Wochenende → Am Wochenende …"]},
  {id:"s27", ch:2, src:"generated", q:"Tanzen Sie gern?", qAr:"حضرتك بتحب ترقص؟", a:"Nein, ich tanze nicht gern.", aAr:"لأ، مش بحب أرقص.", vocab:["tanzen","nicht gern"], keys:["nicht gern = مش بحب"]},
  {id:"s28", ch:3, src:"generated", q:"Was ist das? – (ein Buch)", qAr:"ده إيه؟ (كتاب)", a:"Das ist ein Buch.", aAr:"ده كتاب.", vocab:["das Buch","ein"], keys:["ein + محايد"]},
  {id:"s29", ch:3, src:"generated", q:"Sind das Bücher?", qAr:"دي كتب؟", a:"Nein, das sind keine Bücher, das sind Hefte.", aAr:"لأ، دي مش كتب، دي كراسات.", vocab:["das Buch","keine","das Heft"], keys:["الجمع + keine"]},
  {id:"s30", ch:1, src:"generated", q:"Wo wohnst du?", qAr:"إنت ساكن فين؟", a:"Ich wohne in der Goethestraße 7.", aAr:"أنا ساكن في شارع جوته ٧.", vocab:["die Straße","die Adresse"], keys:["wohnen in + Straße"]}
];

/* ======================= 4) MCQ أصلي ======================= */
window.MCQ_ORIGINAL = [
  {id:"m-o1", ch:2, q:"Gehen ____ ?", qAr:"كمّل السؤال: نروح السينما السبت؟", opts:["am Samstag wir ins Kino?","wir am Samstag ins Kino?","ins Kino am Samstag wir?"], a:1, why:"بعد الفعل يجي الفاعل فورًا."},
  {id:"m-o2", ch:2, q:"Spielst ____ ?", qAr:"كمّل السؤال: بتلعب كورة؟", opts:["Fußball du gern?","gern du Fußball?","du gern Fußball?"], a:2, why:"فعل + فاعل + gern + مفعول."},
  {id:"m-o3", ch:2, q:"Was ____ ?", qAr:"كمّل السؤال: حضرتك بتعمل إيه يوم الاثنين؟", opts:["Sie am Montag machen?","machen Sie am Montag?","Sie machen am Montag?"], a:1, why:"بعد Was يجي الفعل فورًا."},
  {id:"m-o4", ch:2, q:"Joggt ____ ?", qAr:"كمّل السؤال: إنتم بتجروا بكرة كمان؟", opts:["ihr morgen auch?","auch morgen ihr?","morgen auch ihr?"], a:0, why:"فعل + فاعل + وقت + auch."}
];

/* ======================= 5) MCQ إضافي ======================= */
window.MCQ_GENERATED = [
  {id:"m1", ch:1, q:"___ heißt du?", qAr:"___ اسمك إيه؟", opts:["Wer","Wie","Wo"], a:1, why:"السؤال عن الاسم بـ Wie."},
  {id:"m2", ch:1, q:"___ kommen Sie?", qAr:"حضرتك منين؟", opts:["Wo","Woher","Wer"], a:1, why:"الأصل → Woher."},
  {id:"m3", ch:1, q:"Ich ___ aus Ägypten.", qAr:"أنا من مصر.", opts:["bin","komme","wohne"], a:1, why:"kommen aus = من بلد."},
  {id:"m4", ch:1, q:"Wo ___ Sie?", qAr:"حضرتك ساكن فين؟", opts:["wohnst","wohnen","wohnt"], a:1, why:"Sie → wohnen."},
  {id:"m5", ch:1, q:"Wie ___ Sie?", qAr:"اسم حضرتك إيه؟", opts:["heißen","heißt","heiße"], a:0, why:"Sie → heißen."},
  {id:"m6", ch:1, q:"Ich ___ Studentin.", qAr:"أنا طالبة.", opts:["bin","bist","ist"], a:0, why:"ich bin."},
  {id:"m7", ch:1, q:"Du ___ müde.", qAr:"إنت تعبان.", opts:["bin","bist","sind"], a:1, why:"du bist."},
  {id:"m8", ch:1, q:"___ ist Ihr Name?", qAr:"اسم حضرتك إيه؟", opts:["Wer","Wie","Was"], a:1, why:"Wie ist Ihr Name?"},
  {id:"m9", ch:1, q:"Ich komme ___ der Schweiz.", qAr:"أنا من سويسرا.", opts:["aus","in","von"], a:0, why:"aus + der (Dativ)."},
  {id:"m10", ch:1, q:"Sie kommt aus ___ USA.", qAr:"هي من أمريكا.", opts:["der","dem","den"], a:2, why:"USA جمع → aus den USA."},
  {id:"m11", ch:1, q:"Du ___ Deutsch?", qAr:"بتتكلم ألماني؟", opts:["sprechst","sprichst","sprecht"], a:1, why:"sprechen شاذ: du sprichst."},
  {id:"m12", ch:1, q:"___ Sprachen sprechen Sie?", qAr:"بتتكلم أنهي لغات؟", opts:["Welche","Wann","Wo"], a:0, why:"Welche = أنهي."},
  {id:"m13", ch:2, q:"Ich ___ gern Musik.", qAr:"بحب أسمع موسيقى.", opts:["höre","hörst","hört"], a:0, why:"ich höre."},
  {id:"m14", ch:2, q:"___ du gern Fußball?", qAr:"بتحب تلعب كورة؟", opts:["Spielst","Spielt","Spielen"], a:0, why:"du spielst."},
  {id:"m15", ch:2, q:"Wir ___ gern.", qAr:"إحنا بنحب نرقص.", opts:["tanze","tanzt","tanzen"], a:2, why:"wir tanzen."},
  {id:"m16", ch:2, q:"Er ___ nicht gern.", qAr:"هو مش بيحب يطبخ.", opts:["kochst","kocht","kochen"], a:1, why:"er kocht."},
  {id:"m17", ch:2, q:"___ ihr gern?", qAr:"إنتم بتحبوا تعملوا جوجينج؟", opts:["Joggst","Joggt","Joggen"], a:1, why:"ihr joggt."},
  {id:"m18", ch:2, q:"Am Montag ___ ich.", qAr:"يوم الاثنين بشتغل.", opts:["arbeite","arbeitest","arbeiten"], a:0, why:"ich arbeite."},
  {id:"m19", ch:2, q:"___ du am Samstag Zeit?", qAr:"عندك وقت السبت؟", opts:["Hast","Habt","Hat"], a:0, why:"du hast."},
  {id:"m20", ch:2, q:"Ich ___ 22 Jahre alt.", qAr:"عندي ٢٢ سنة.", opts:["habe","bin","ist"], a:1, why:"العمر بـ sein."},
  {id:"m21", ch:2, q:"Sie ___ Ärztin.", qAr:"هي دكتورة.", opts:["ist","sind","hat"], a:0, why:"sie (مفرد) → ist."},
  {id:"m22", ch:2, q:"Das ___ meine Bücher.", qAr:"دي كتبي.", opts:["ist","sind","seid"], a:1, why:"جمع → sind."},
  {id:"m23", ch:2, q:"Ich lese ___.", qAr:"أنا مش بقرا.", opts:["kein","nicht","keine"], a:1, why:"نفي الفعل بـ nicht."},
  {id:"m24", ch:2, q:"Ich habe ___ Zeit.", qAr:"معنديش وقت.", opts:["nicht","kein","keine"], a:2, why:"die Zeit → keine."},
  {id:"m25", ch:2, q:"___ du gern Musik?", qAr:"بتحب تسمع موسيقى؟", opts:["Hörst","Hört","Hören"], a:0, why:"du hörst."},
  {id:"m26", ch:2, q:"Wann ___ wir ins Kino?", qAr:"إمتى نروح السينما؟", opts:["gehen","geht","gehe"], a:0, why:"wir gehen."},
  {id:"m27", ch:3, q:"___ Buch ist neu.", qAr:"الكتاب جديد.", opts:["Der","Das","Die"], a:1, why:"das Buch."},
  {id:"m28", ch:3, q:"___ Straße ist lang.", qAr:"الشارع طويل.", opts:["Der","Das","Die"], a:2, why:"die Straße."},
  {id:"m29", ch:3, q:"___ Schlüssel ist klein.", qAr:"المفتاح صغير.", opts:["Der","Das","Die"], a:0, why:"der Schlüssel."},
  {id:"m30", ch:3, q:"___ Ärztin arbeitet hier.", qAr:"الدكتورة بتشتغل هنا.", opts:["Der","Das","Die"], a:2, why:"die Ärztin (-in مؤنث)."},
  {id:"m31", ch:3, q:"Das ist ___ Kirche.", qAr:"دي كنيسة.", opts:["ein","eine","einen"], a:1, why:"die Kirche → eine."},
  {id:"m32", ch:3, q:"Das ist ___ Hotel.", qAr:"ده فندق.", opts:["ein","eine","einer"], a:0, why:"das Hotel → ein."},
  {id:"m33", ch:3, q:"Ist das ein Bus? – Nein, das ist ___ Bus.", opts:["nicht","kein","keine"], a:1, why:"نفي النكرة → kein.", qAr:"ده اتوبيس؟ – لأ، ده مش اتوبيس."},
  {id:"m34", ch:3, q:"Das sind ___ Autos.", opts:["kein","keine","nicht"], a:1, why:"جمع → keine.", qAr:"دي مش عربيات."},
  {id:"m35", ch:3, q:"Ich fahre mit ___ Bus.", opts:["der","dem","den"], a:1, why:"der Bus → mit dem (Dativ).", qAr:"بروح بالاتوبيس."},
  {id:"m36", ch:3, q:"Ich fahre mit ___ U-Bahn.", opts:["der","dem","die"], a:0, why:"die U-Bahn → mit der.", qAr:"بروح بالمترو."},
  {id:"m37", ch:3, q:"___ kommen Sie? – Ich komme aus Spanien.", opts:["Wo","Woher","Wer"], a:1, why:"aus → Woher.", qAr:"حضرتك منين؟ – من إسبانيا."},
  {id:"m38", ch:3, q:"Der Bahnhof ist ___ Zentrum.", opts:["im","in","am"], a:0, why:"in + dem = im.", qAr:"المحطة في السنتر."},
  {id:"m39", ch:1, q:"___ ist das? – Das ist Frau Weber.", opts:["Wer","Was","Wie"], a:0, why:"شخص → Wer.", qAr:"مين ده؟ – دي مدام فيبر."},
  {id:"m40", ch:1, q:"Ich ___ in Kairo.", opts:["wohne","wohnst","wohnt"], a:0, why:"ich wohne.", qAr:"أنا ساكن في القاهرة."},
  {id:"m41", ch:2, q:"Das ist ___ Schwimmbad.", opts:["der","das","die"], a:1, why:"das Schwimmbad.", qAr:"ده حمام السباحة."},
  {id:"m42", ch:2, q:"Die Ärzte ___ im Krankenhaus.", opts:["arbeitet","arbeiten","arbeitest"], a:1, why:"جمع → arbeiten.", qAr:"الدكاترة بيشتغلوا في المستشفى."},
  {id:"m43", ch:3, q:"___ Tag ist schön.", opts:["Der","Das","Die"], a:0, why:"der Tag.", qAr:"اليوم جميل."},
  {id:"m44", ch:3, q:"Das ___ Cafés.", opts:["ist","sind","seid"], a:1, why:"جمع → sind.", qAr:"دي كافيهات."},
  {id:"m45", ch:1, q:"___ alt bist du?", opts:["Wie","Was","Wo"], a:0, why:"Wie alt bist du?", qAr:"عندك كام سنة؟"},
  {id:"m46", ch:2, q:"Ich habe ___ Frage.", opts:["ein","eine","einen"], a:1, why:"die Frage → eine.", qAr:"عندي سؤال."},
  {id:"m47", ch:2, q:"___ arbeitest du?", opts:["Wann","Woher","Welche"], a:0, why:"Wann = إمتى.", qAr:"بتشتغل إمتى؟"},
  {id:"m48", ch:2, q:"Er ___ gern.", opts:["singe","singst","singt"], a:2, why:"er singt.", qAr:"هو بيحب يغني."}
];

/* ======================= 6) البصمجة ======================= */
window.KEYWORDS = [
  {type:"vocab", k:"der Bahnhof", v:"محطة القطر", ch:3},
  {type:"vocab", k:"das Rathaus", v:"مبنى البلدية", ch:3},
  {type:"vocab", k:"die Kirche", v:"الكنيسة", ch:3},
  {type:"vocab", k:"der Hafen", v:"المينا", ch:3},
  {type:"vocab", k:"der Fluss", v:"النهر", ch:3},
  {type:"vocab", k:"der See", v:"البحيرة", ch:3},
  {type:"vocab", k:"das Museum", v:"المتحف", ch:3},
  {type:"vocab", k:"die Brücke", v:"الكوبري", ch:3},
  {type:"vocab", k:"der Bus", v:"الاتوبيس", ch:3},
  {type:"vocab", k:"die U-Bahn", v:"المترو", ch:3},
  {type:"vocab", k:"das Fahrrad", v:"العجلة", ch:3},
  {type:"vocab", k:"die Fahrkarte", v:"تذكرة السفر", ch:3},
  {type:"vocab", k:"der Schlüssel", v:"المفتاح", ch:3},
  {type:"vocab", k:"das Glas", v:"الكوباية", ch:3},
  {type:"vocab", k:"die Straße", v:"الشارع", ch:3},
  {type:"vocab", k:"der Tisch", v:"الترابيزة", ch:3},
  {type:"vocab", k:"die Tablette", v:"الحباية", ch:3},
  {type:"vocab", k:"der Stift", v:"القلم", ch:3},
  {type:"vocab", k:"das Buch", v:"الكتاب", ch:1},
  {type:"vocab", k:"der Tag", v:"اليوم", ch:1},
  {type:"vocab", k:"die Nacht", v:"الليل", ch:1},
  {type:"vocab", k:"der Name", v:"الاسم", ch:1},
  {type:"vocab", k:"die Sprache", v:"اللغة", ch:1},
  {type:"vocab", k:"die Telefonnummer", v:"رقم التليفون", ch:1},
  {type:"vocab", k:"der Beruf", v:"المهنة", ch:2},
  {type:"vocab", k:"die Zeit", v:"الوقت", ch:2},
  {type:"vocab", k:"das Wochenende", v:"الويك إند", ch:2},
  {type:"vocab", k:"die Übung", v:"التمرين", ch:1},
  {type:"vocab", k:"die Prüfung", v:"الامتحان", ch:2},

  {type:"grammar", k:"الفعل في الجملة الخبرية", v:"دايمًا Position 2", ch:1},
  {type:"grammar", k:"سؤال W", v:"كلمة استفهام(1) + فعل(2) + فاعل(3)", ch:1},
  {type:"grammar", k:"سؤال نعم/لا", v:"الفعل في Position 1", ch:2},
  {type:"grammar", k:"der", v:"مذكر", ch:3},
  {type:"grammar", k:"die", v:"مؤنث + كل الجمع", ch:3},
  {type:"grammar", k:"das", v:"محايد", ch:3},
  {type:"grammar", k:"ein/eine", v:"نكرة: ein (مذكر/محايد) – eine (مؤنث)", ch:3},
  {type:"grammar", k:"kein/keine", v:"نفي الاسم النكرة: kein (م/م) – keine (مؤ/جمع)", ch:3},
  {type:"grammar", k:"nicht", v:"نفي الفعل/الصفة", ch:2},
  {type:"grammar", k:"aus + بلد بأداة", v:"die→der / der→dem / جمع→den", ch:1},
  {type:"grammar", k:"du / ihr / Sie", v:"عادي مفرد / عادي جمع / رسمي", ch:2},
  {type:"grammar", k:"العمر", v:"Ich bin ... Jahre alt (sein مش haben)", ch:2},
  {type:"grammar", k:"المؤنث في المهن", v:"+ in: Lehrerin, Ärztin, Kellnerin", ch:2},
  {type:"grammar", k:"gern", v:"بعد الفعل = بحب", ch:2},
  {type:"grammar", k:"am + Tag", v:"am Montag / am Wochenende", ch:2},
  {type:"grammar", k:"um + Uhrzeit", v:"um acht Uhr", ch:2},

  {type:"order", k:"Ich lerne heute Deutsch", v:"فاعل + فعل + وقت + مفعول", ch:1},
  {type:"order", k:"Heute lerne ich Deutsch", v:"وقت + فعل + فاعل", ch:1},
  {type:"order", k:"Gehen wir ins Kino?", v:"فعل + فاعل + مكان", ch:2},
  {type:"order", k:"Was machst du?", v:"استفهام + فعل + فاعل", ch:2},
  {type:"order", k:"Das ist kein Bus", v:"Das + ist + kein + Nomen", ch:3},

  {type:"short", k:"Wie heißen Sie?", v:"Ich heiße …", ch:1},
  {type:"short", k:"Woher kommen Sie?", v:"Ich komme aus …", ch:1},
  {type:"short", k:"Wo wohnen Sie?", v:"Ich wohne in …", ch:1},
  {type:"short", k:"Welche Sprachen sprechen Sie?", v:"Ich spreche … und …", ch:1},
  {type:"short", k:"Was sind Sie von Beruf?", v:"Ich bin …", ch:2},
  {type:"short", k:"Wann arbeiten Sie?", v:"Ich arbeite von … bis …", ch:2},
  {type:"short", k:"Wie alt bist du?", v:"Ich bin … Jahre alt.", ch:2},
  {type:"short", k:"Was machst du gern?", v:"Ich … gern.", ch:2},
  {type:"short", k:"Was ist das?", v:"Das ist der/die/das …", ch:3},
  {type:"short", k:"Ist das ein Hotel?", v:"Nein, das ist kein Hotel, das ist …", ch:3}
];
