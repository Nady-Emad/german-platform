/* ============================================================================
   Grammatik – القواعد مشروحة بالمصري خطوة بخطوة
   ============================================================================ */
window.GRAMMAR = [

/* ============================ 1. الضمائر ============================ */
{
  id:"pronomen", ch:1, icon:"👤", title:"Personalpronomen", titleAr:"ضمائر الفاعل",
  rule:"ich – du – er/sie/es – wir – ihr – sie/Sie",
  explain:`<p>في الألماني كل ضمير ليه شكل واحد بس، ومفيش فرق بين المذكر والمؤنث في الجمع. أهم حاجة تفهمها:</p>
  <ul>
    <li><b>du</b> = إنت (لصاحبك، لزميلك، لطفل) — <b>informell</b>.</li>
    <li><b>ihr</b> = إنتم (مجموعة أصحاب).</li>
    <li><b>Sie</b> = حضرتك / حضراتكم (رسمي) — <b>دايمًا بحرف S كبير</b>، وسواء واحد أو مجموعة التصريف زي sie.</li>
    <li><b>er</b> = هو (للمذكر) — وبرضه بيستخدم للمذكر اللي اتكلمنا عنه.</li>
    <li><b>sie</b> = هي (للمؤنث) <u>أو</u> هم/هن (جمع).</li>
    <li><b>es</b> = هو/هي للمحايد (das) — زي <span class="de">das Kind → es</span>.</li>
  </ul>
  <p class="tip">💡 خد بالك: الضمير بيتبع <b>جنس الاسم</b> مش جنس الشخص الحقيقي. <span class="de">das Mädchen</span> (بنت) ضميرها <b>es</b> لأن الاسم محايد!</p>`,
  structure:"[Subjekt] + [Verb] + …",
  tables:[{title:"الضمائر ومعانيها", head:["الضمير","المعنى","الاستخدام"], rows:[
    ["ich","أنا","دايمًا حرف i صغير"],
    ["du","إنت / أنتِ","لصاحبك (مفرد)"],
    ["er","هو","للمذكر"],
    ["sie","هي","للمؤنث"],
    ["es","هو/هي (محايد)","للمحايد"],
    ["wir","إحنا",""],
    ["ihr","إنتم","لأصحابك (جمع)"],
    ["sie","هم / هن",""],
    ["Sie","حضرتك / حضراتكم","رسمي – S كبيرة دايمًا"]
  ]}],
  examples:[
    {de:"Ich bin Student.", ar:"أنا طالب."},
    {de:"Woher kommst du?", ar:"إنت جاي منين؟"},
    {de:"Sie wohnt in München.", ar:"هي ساكنة في ميونخ."},
    {de:"Das Kind ist klein. Es ist drei.", ar:"الطفل صغير. هو عنده ٣ سنين."}
  ],
  mistakes:[
    {f:"Ich bin Student. （معناها صح بس لو بنت: Ich bin Studentin.）", r:"Ich bin Studentin.", why:"لو إنت بنت لازم تضيف -in للمؤنث في المهن والصفات."},
    {f:"sie sind (لحضرتك)", r:"Sie sind", why:"لازم S كبيرة عشان تتفرق عن sie = هم."}
  ],
  exam:"سؤال شائع: „___ kommt aus Spanien.“ ولو الاسم مؤنث تختار <b>Sie</b>، ولو مذكر <b>Er</b>.",
  mnemonic:"إحنا بنقول: <b>ich du er sie es – wir ihr sie Sie</b> — غنّيها كده ٣ مرات وهتثبت."
},

/* ============================ 2. تصريف الفعل ============================ */
{
  id:"praesens", ch:1, icon:"⚙️", title:"Verbkonjugation im Präsens", titleAr:"تصريف الفعل في المضارع",
  rule:"Verbstamm + Endung: -e, -st, -t, -en, -t, -en",
  explain:`<p>أسهل حاجة في الألماني: كل فعل منتظم = <b>جذر + نهاية</b>. الجذر هو الفعل من غير <span class="de">-en</span>:</p>
  <p class="de big">lern|en → lern + e / st / t / en / t / en</p>
  <ul>
    <li><b>ich</b> → <span class="de">lerne</span> (نهاية -e)</li>
    <li><b>du</b> → <span class="de">lernst</span> (-st)</li>
    <li><b>er/sie/es</b> → <span class="de">lernt</span> (-t)</li>
    <li><b>wir</b> → <span class="de">lernen</span> (-en زي المصدر)</li>
    <li><b>ihr</b> → <span class="de">lernt</span> (-t)</li>
    <li><b>sie/Sie</b> → <span class="de">lernen</span> (-en)</li>
  </ul>
  <h4>٣ حالات خاصة لازم تحفظها</h4>
  <ol>
    <li><b>جذر بينتهي بـ t أو d</b> (arbeiten, warten, finden, reden) → بنزود <b>e</b> قبل النهاية: <span class="de">du arbeitest, er arbeitet, ihr arbeitet</span>.</li>
    <li><b>جذر بينتهي بـ s/ß/z</b> (tanzen, heißen, reisen, küssen) → <b>du</b> بتاخد <b>-t</b> بس: <span class="de">du tanzt, du heißt, du reist</span>.</li>
    <li><b>أفعال شاذة بتغير الحرف المتحرك</b> مع du/er: <span class="de">sprechen → du sprichst / er spricht</span>، <span class="de">lesen → du liest / er liest</span>، <span class="de">sehen → du siehst / er sieht</span>، <span class="de">fahren → du fährst / er fährt</span>، <span class="de">essen → du isst / er isst</span>.</li>
  </ol>`,
  structure:"[Subjekt] + [Verb konjugiert] + [Rest]",
  tables:[{title:"النهايات الستة", head:["الضمير","النهاية","lernen","arbeiten","tanzen"], rows:[
    ["ich","-e","lerne","arbeite","tanze"],
    ["du","-st","lernst","arbeitest","tanzt"],
    ["er/sie/es","-t","lernt","arbeitet","tanzt"],
    ["wir","-en","lernen","arbeiten","tanzen"],
    ["ihr","-t","lernt","arbeitet","tanzt"],
    ["sie/Sie","-en","lernen","arbeiten","tanzen"]
  ]}],
  examples:[
    {de:"Ich lerne Deutsch.", ar:"أنا بتعلم ألماني."},
    {de:"Du arbeitest am Montag.", ar:"إنت بتشتغل يوم الاثنين."},
    {de:"Sie tanzt gern.", ar:"هي بتحب ترقص."},
    {de:"Wir kochen zusammen.", ar:"إحنا بنطبخ مع بعض."}
  ],
  mistakes:[
    {f:"du lernen", r:"du lernst", why:"كل ضمير ليه نهاية، مفيش مصدر بعد الضمير."},
    {f:"er lernst", r:"er lernt", why:"-st دي لـ du بس."},
    {f:"du arbeitst", r:"du arbeitest", why:"الجذر بينتهي بـ t فلازم e."}
  ],
  exam:"امتحان Kapitel 2: „Ergänzen Sie die Verben in der richtigen Form“ — بيجيب لك الفعل بين قوسين وإنت تصرفه.",
  mnemonic:"<b>e – st – t – en – t – en</b> … قولها كأنك بتعد: واحد-اتنين-تلاتة."
},

/* ============================ 3. sein / haben ============================ */
{
  id:"seinhaben", ch:1, icon:"⭐", title:"sein und haben", titleAr:"فعل يكون وفعل عنده",
  rule:"sein: bin / bist / ist / sind / seid / sind — haben: habe / hast / hat / haben / habt / haben",
  explain:`<p>دول <b>أهم فعلين</b> في الألماني وكلهم شاذين (irregular)، يعني لازم تحفظهم صمّ.</p>
  <p><b>sein</b> = يكون. بنستخدمه عشان نعرّف بنفسنا أو نصف حاجة:</p>
  <p class="de">Ich <b>bin</b> Nady. Ich <b>bin</b> Student. Ich <b>bin</b> müde.</p>
  <p><b>haben</b> = عنده. بنستخدمه للملكية وكمان في زمن الـ Perfekt:</p>
  <p class="de">Ich <b>habe</b> eine Frage. Ich <b>habe</b> keine Zeit.</p>
  <p class="tip">💡 عندك امتحان؟ الاتنين دول بييجوا في كل سؤال تقريبًا. احفظ الجدولين دول الأول قبل أي حاجة.</p>`,
  structure:"[Subjekt] + sein/haben + [Ergänzung]",
  tables:[
    {title:"sein (يكون)", head:["الضمير","التصريف","مثال"], rows:[
      ["ich","bin","Ich bin Student."],
      ["du","bist","Du bist müde."],
      ["er/sie/es","ist","Er ist Lehrer."],
      ["wir","sind","Wir sind Studenten."],
      ["ihr","seid","Ihr seid krank."],
      ["sie/Sie","sind","Sie sind Ärztin."]
    ]},
    {title:"haben (عنده)", head:["الضمير","التصريف","مثال"], rows:[
      ["ich","habe","Ich habe eine Frage."],
      ["du","hast","Hast du Zeit?"],
      ["er/sie/es","hat","Sie hat ein Auto."],
      ["wir","haben","Wir haben Zeit."],
      ["ihr","habt","Habt ihr Bücher?"],
      ["sie/Sie","haben","Sie haben keine Zeit."]
    ]}
  ],
  examples:[
    {de:"Ich bin 22 Jahre alt.", ar:"عندي ٢٢ سنة. (حرفيًا: أنا ٢٢ سنة عجوز!)"},
    {de:"Hast du am Montag Zeit?", ar:"عندك وقت يوم الاثنين؟"},
    {de:"Seid ihr Studenten?", ar:"إنتم طلبة؟"},
    {de:"Sie ist Kellnerin.", ar:"هي جرسونة."}
  ],
  mistakes:[
    {f:"Ich habe 22 Jahre.", r:"Ich bin 22 Jahre alt.", why:"العمر في الألماني بـ sein مش haben."},
    {f:"Ich bin Hunger.", r:"Ich habe Hunger.", why:"الجوع/العطش بـ haben."}
  ],
  exam:"كتير بيجيبوا: „Woher ___ du?“ (bist) و „Wo ___ Sie?“ (wohnen) — خد بالك الفعل الصح.",
  mnemonic:"sein = <b>b</b>in <b>b</b>ist <b>i</b>st — حرف الـ b متكرر. haben = <b>h</b>abe <b>h</b>ast h<b>a</b>t."
},

/* ============================ 4. ترتيب الجملة ============================ */
{
  id:"v2", ch:1, icon:"🧱", title:"Der Aussagesatz – Verb auf Position 2", titleAr:"الجملة الخبرية – الفعل في المكان الثاني",
  rule:"Subjekt + Verb (Position 2) + Rest — und: Zeit + Verb + Subjekt",
  explain:`<p>دي <b>القاعدة الذهبية</b> في الألماني: <b>الفعل المصرّف دايمًا في المكان الثاني</b> في الجملة الخبرية.</p>
  <p class="de big">Ich <b>lerne</b> heute Deutsch.</p>
  <p>كلام عادي: <b>1</b> Ich — <b>2</b> lerne — <b>3</b> heute — <b>4</b> Deutsch.</p>
  <p>طيب لو حبيت أبدأ بالوقت؟ <b>الوقت بياخد المكان الأول، والفاعل بيتزحزح للمكان التالت، والفعل يفضل مكانه التاني!</b></p>
  <p class="de big">Heute <b>lerne</b> ich Deutsch.</p>
  <p>دي حاجة غريبة للمصريين، بس هي قمة الألماني: <b>الفعل مش بيتحرك من المكان التاني أبدًا</b>.</p>
  <p class="tip">💡 في سؤال ترتيب الجملة: دوّر على الفعل المصرّف حطّه تاني كلمة، وبعدين رتّب الباقي: فاعل → وقت → مكان → مفعول.</p>`,
  structure:"Position 1: Subjekt/Zeit — Position 2: VERB — Position 3+: Rest",
  tables:[{title:"نفس الجملة بترتيبين", head:["Position 1","Position 2 (Verb)","Position 3","Position 4"], rows:[
    ["Ich","lerne","heute","Deutsch."],
    ["Heute","lerne","ich","Deutsch."],
    ["Ich","komme","aus","Spanien."],
    ["Mein Name","ist","Lisa","Vogel."]
  ]}],
  examples:[
    {de:"Ich bin Lola Campus.", ar:"أنا لولا كامبوس."},
    {de:"Ich komme aus Spanien.", ar:"أنا جاي من إسبانيا."},
    {de:"Am Montag arbeite ich.", ar:"يوم الاثنين بشتغل."},
    {de:"Morgen gehen wir ins Kino.", ar:"بكرة بنروح السينما."}
  ],
  mistakes:[
    {f:"Heute ich lerne Deutsch.", r:"Heute lerne ich Deutsch.", why:"الفعل لازم يفضل في المكان التاني."},
    {f:"Ich Deutsch lerne.", r:"Ich lerne Deutsch.", why:"الفعل مش في الآخر في الجملة الخبرية."}
  ],
  exam:"سؤال ترتيب الجملة (Wortstellung) هو أشهر سؤال في الامتحان — راجع قسم «ترتيب الجملة».",
  mnemonic:"<b>الفعل تاني… الفعل تاني… الفعل تاني</b> (قولها ٣ مرات قبل الامتحان)."
},

/* ============================ 5. W-Fragen ============================ */
{
  id:"wfrage", ch:1, icon:"❓", title:"W-Fragen", titleAr:"أسئلة الاستفهام",
  rule:"W-Wort (Position 1) + Verb (Position 2) + Subjekt (Position 3)",
  explain:`<p>أسئلة الـ W بتبدأ بكلمة استفهام، وبعدها <b>الفعل فورًا</b>، وبعدين الفاعل.</p>
  <p class="de big">Wo <b>wohnen</b> Sie? — Woher <b>kommen</b> Sie? — Wie <b>heißen</b> Sie?</p>
  <ul>
    <li><b>Wer?</b> = مين (للفاعل)</li>
    <li><b>Was?</b> = إيه</li>
    <li><b>Wo?</b> = فين (مكان)</li>
    <li><b>Woher?</b> = منين (أصل)</li>
    <li><b>Wohin?</b> = رايح فين</li>
    <li><b>Wie?</b> = إزاي / إيه (للاسم: Wie heißt du?)</li>
    <li><b>Wann?</b> = إمتى</li>
    <li><b>Warum?</b> = ليه</li>
    <li><b>Welche?</b> = أنهي</li>
  </ul>
  <p class="tip">⚠️ خد بالك: <b>Wer</b> معناها «مين» وهي فاعل، فالفعل بعدها بياخد تصريف <b>er/sie</b>: <span class="de">Wer <b>ist</b> das? / Wer <b>kommt</b> aus Spanien?</span></p>`,
  structure:"W-Wort + Verb + Subjekt + …?",
  tables:[{title:"أهم أسئلة الكورس", head:["السؤال","المعنى","الإجابة النموذجية"], rows:[
    ["Wie heißen Sie?","اسم حضرتك إيه؟","Ich heiße … / Mein Name ist …"],
    ["Wer sind Sie?","حضرتك مين؟","Ich bin …"],
    ["Woher kommen Sie?","حضرتك منين؟","Ich komme aus …"],
    ["Wo wohnen Sie?","حضرتك ساكن فين؟","Ich wohne in …"],
    ["Welche Sprachen sprechen Sie?","بتتكلم أنهي لغات؟","Ich spreche … und …"],
    ["Wie geht es Ihnen?","إزيك؟ (رسمي)","Danke, gut. Und Ihnen?"],
    ["Was bist du von Beruf?","بتشتغل إيه؟","Ich bin Student/in."],
    ["Wann arbeiten Sie?","بتشتغل إمتى؟","Ich arbeite am Montag."]
  ]}],
  examples:[
    {de:"Woher kommt Anna?", ar:"آنا جاية منين؟"},
    {de:"Wie heißt du?", ar:"اسمك إيه؟"},
    {de:"Was machst du am Montag?", ar:"بتعمل إيه يوم الاثنين؟"},
    {de:"Wer ist das?", ar:"مين ده؟"}
  ],
  mistakes:[
    {f:"Wo du wohnst?", r:"Wo wohnst du?", why:"الفعل لازم ييجي بعد كلمة الاستفهام فورًا."},
    {f:"Wie heiß du?", r:"Wie heißt du?", why:"heißen فيه ß في du/er."}
  ],
  exam:"سؤال «Ergänzen Sie die Fragen» في امتحان Kapitel 1 بيجيب نفس الجمل دي ناقصة كلمة الاستفهام.",
  mnemonic:"<b>W</b> = <b>W</b>ort zuerst, <b>V</b>erb danach. (كلمة الاستفهام الأول، الفعل بعدها)."
},

/* ============================ 6. Ja/Nein-Fragen ============================ */
{
  id:"janein", ch:2, icon:"🔁", title:"Ja-/Nein-Fragen", titleAr:"أسئلة نعم/لا",
  rule:"Verb (Position 1) + Subjekt + …?",
  explain:`<p>لو مفيش كلمة استفهام، بنعمل السؤال بـ <b>قلب الجملة</b>: الفعل يروح أول مكان.</p>
  <p class="de">Du kommst aus Ägypten. → <b>Kommst</b> du aus Ägypten?</p>
  <p class="de">Wir gehen ins Kino. → <b>Gehen</b> wir ins Kino?</p>
  <p>الإجابة:</p>
  <ul>
    <li><b>Ja</b>, ich komme aus Ägypten.</li>
    <li><b>Nein</b>, ich komme <b>nicht</b> aus Ägypten.</li>
  </ul>
  <p class="tip">💡 علامة السؤال في الألماني هي <b>ترتيب الكلام</b> مش علامة استفهام بس — الفعل في الأول = سؤال.</p>`,
  structure:"Verb + Subjekt + Rest + ?",
  tables:[{title:"من جملة لسؤال", head:["Aussagesatz","Ja-/Nein-Frage"], rows:[
    ["Du kommst aus Ägypten.","Kommst du aus Ägypten?"],
    ["Sie wohnt in Berlin.","Wohnt sie in Berlin?"],
    ["Ihr joggt gern.","Joggt ihr gern?"],
    ["Sie arbeiten am Montag.","Arbeiten Sie am Montag?"]
  ]}],
  examples:[
    {de:"Kommst du aus Ägypten? – Ja, ich komme aus Ägypten.", ar:"إنت من مصر؟ — أيوه، أنا من مصر."},
    {de:"Tanzt ihr gern? – Ja, wir tanzen gern.", ar:"إنتم بتحبوا ترقصوا؟ — أيوه، إحنا بنحب نرقص."},
    {de:"Ist das ein Bus? – Nein, das ist kein Bus.", ar:"ده اتوبيس؟ — لأ، ده مش اتوبيس."}
  ],
  mistakes:[
    {f:"Du kommst aus Ägypten?", r:"Kommst du aus Ägypten?", why:"السؤال بالترتيب مش بالنغمة."},
    {f:"Kommst du aus Ägypten? – Ja, ich komme nicht aus Ägypten.", r:"Nein, ich komme nicht aus Ägypten.", why:"الإجابة لازم تطابق."}
  ],
  exam:"في Kapitel 2 بيطلوب تحوّل جملة لسؤال: „Bilden Sie Ja-/Nein-Fragen.“",
  mnemonic:"<b>فعل + فاعل = سؤال</b> (زي ما بتقلب الكوباية)."
},

/* ============================ 7. النفي ============================ */
{
  id:"negation", ch:2, icon:"🚫", title:"Negation: nicht oder kein?", titleAr:"النفي: nicht ولا kein؟",
  rule:"nicht = نفي عام — kein/keine = نفي الاسم النكرة",
  explain:`<p>في الألماني عندنا <b>طريقتين</b> للنفي، واختيار الصح بينهم سؤال امتحان دايم:</p>
  <h4>1) nicht — نفي الأفعال والصفات والظروف</h4>
  <p class="de">Ich lese <b>nicht</b>. / Ich komme <b>nicht</b> aus Berlin. / Sie arbeitet <b>nicht</b> gern. / Das ist <b>nicht</b> gut.</p>
  <p>المكان: عادةً في آخر الجملة، أو قبل الصفة/الظرف اللي بننفيه.</p>
  <h4>2) kein / keine — نفي الاسم اللي قبله ein/eine أو بدون أداة</h4>
  <p class="de">Das ist <b>ein</b> Bus. → Das ist <b>kein</b> Bus.</p>
  <p class="de">Ich habe <b>eine</b> Frage. → Ich habe <b>keine</b> Frage.</p>
  <p>الجدول: مذكر <b>kein</b> — محايد <b>kein</b> — مؤنث <b>keine</b> — جمع <b>keine</b>.</p>
  <p class="tip">💡 قاعدة سريعة: لو في الجملة <b>ein/eine</b> أو مفيش أداة خالص وبننفي الاسم → <b>kein</b>. لو بننفي فعل/صفة/مكان → <b>nicht</b>.</p>`,
  structure:"nicht + am Satzende | kein- + Nomen",
  tables:[{title:"kein مع الأجناس", head:["الجنس","مثال مثبت","مثال منفي"], rows:[
    ["maskulin","Das ist ein Apfel.","Das ist kein Apfel."],
    ["neutrum","Das ist ein Brot.","Das ist kein Brot."],
    ["feminin","Das ist eine Orange.","Das ist keine Orange."],
    ["Plural","Das sind Äpfel.","Das sind keine Äpfel."]
  ]}],
  examples:[
    {de:"Ich lese nicht.", ar:"أنا مش بقرا."},
    {de:"Ich lerne nicht Spanisch.", ar:"أنا مش بتعلم إسباني."},
    {de:"Ich habe keine Zeit.", ar:"معنديش وقت."},
    {de:"Das ist kein Bahnhof, das ist ein Rathaus.", ar:"دي مش محطة قطر، ده مبنى البلدية."}
  ],
  mistakes:[
    {f:"Ich habe nicht Zeit.", r:"Ich habe keine Zeit.", why:"Zeit اسم مؤنث بدون أداة → keine."},
    {f:"Das ist nicht ein Bus.", r:"Das ist kein Bus.", why:"نفي ein بيكون kein."},
    {f:"Ich lese kein.", r:"Ich lese nicht.", why:"بننفي الفعل بـ nicht مش kein."}
  ],
  exam:"Kapitel 3 بيجيب: „Nein, das ist kein Bus, das ist eine U-Bahn.“ — لازم تعرف تفرق بين kein و nicht.",
  mnemonic:"<b>kein</b> دايمًا مع اسم — <b>nicht</b> مع فعل. (كلمة kein فيها «ن» زي «نكرة»)."
},

/* ============================ 8. أدوات التعريف ============================ */
{
  id:"artikel", ch:3, icon:"🔤", title:"Bestimmter und unbestimmter Artikel", titleAr:"أدوات التعريف والنكرة",
  rule:"der/die/das (bestimmt) — ein/eine (unbestimmt) — plural: die / kein Artikel",
  explain:`<p>كل اسم ألماني ليه <b>جنس</b>: مذكر (der)، مؤنث (die)، محايد (das). والجمع دايمًا <b>die</b>.</p>
  <p><b>أداة التعريف (der/die/das)</b> = «الـ» بتاعتنا، بنستخدمها لما الحاجة معروفة.</p>
  <p><b>أداة النكرة (ein/eine)</b> = «واحد/واحدة» مش معروف.</p>
  <table class="mini"><tr><th></th><th>maskulin</th><th>neutrum</th><th>feminin</th><th>Plural</th></tr>
  <tr><td>bestimmt</td><td>der Stift</td><td>das Buch</td><td>die Tablette</td><td>die Bücher</td></tr>
  <tr><td>unbestimmt</td><td>ein Stift</td><td>ein Buch</td><td>eine Tablette</td><td>— Bücher</td></tr>
  <tr><td>Negation</td><td>kein Stift</td><td>kein Buch</td><td>keine Tablette</td><td>keine Bücher</td></tr></table>
  <p class="tip">💡 في الجمع مفيش أداة نكرة خالص: <span class="de">Das sind Bücher.</span> (مش «ein Bücher»).</p>`,
  structure:"Artikel + Nomen (Nomen immer groß!)",
  tables:[{title:"الأدوات الأربعة", head:["الحالة","مذكر","محايد","مؤنث","جمع"], rows:[
    ["bestimmt","der","das","die","die"],
    ["unbestimmt","ein","ein","eine","—"],
    ["negativ","kein","kein","keine","keine"]
  ]}],
  examples:[
    {de:"Das ist der Hafen von Hamburg.", ar:"ده مينا هامبورج."},
    {de:"Das ist ein Hotel.", ar:"ده فندق."},
    {de:"Die Brücke heißt „Alsterbrücke“.", ar:"الكوبري اسمه Alsterbrücke."},
    {de:"Das sind keine Autos, das sind Busse.", ar:"دي مش عربيات، دي اتوبيسات."}
  ],
  mistakes:[
    {f:"Das ist eine Buch.", r:"Das ist ein Buch.", why:"Buch محايد → ein."},
    {f:"ein Bücher", r:"Bücher", why:"الجمع ملهوش أداة نكرة."}
  ],
  exam:"Kapitel 3: „Ergänzen Sie den bestimmten Artikel (der – die – das).“ — ٨ كلمات في الامتحان.",
  mnemonic:"<b>der</b> مذكر / <b>die</b> مؤنث / <b>das</b> محايد / <b>die</b> جمع. (دي-دي للبنات وللجمع!)"
},

/* ============================ 9. قواعد الجنس ============================ */
{
  id:"genus", ch:3, icon:"🧭", title:"Genusregeln – der, die oder das?", titleAr:"قواعد تخمين الجنس",
  rule:"Endungen verraten das Genus",
  explain:`<p>مفيش قاعدة ١٠٠٪، لكن في <b>نهايات</b> بتقولك الجنس بسرعة. دي أهمها (من ملف Genusregeln):</p>
  <h4>DER (مذكر)</h4>
  <ul><li>الشخصان المذكرين والمهن: <span class="de">der Vater, der Lehrer</span></li>
  <li>أيام الأسبوع والشهور: <span class="de">der Montag, der Juli</span></li>
  <li>الفصول والاتجاهات: <span class="de">der Herbst, der Norden</span></li>
  <li><b>-ling</b>: der Schmetterling — <b>-or</b>: der Motor — <b>-us</b>: der Rhythmus</li>
  <li><b>-er</b> (حوالي ٧٠٪): der Stecker, der Kugelschreiber</li></ul>
  <h4>DIE (مؤنث)</h4>
  <ul><li>الشخصيات والمهن المؤنثة: <span class="de">die Tochter, die Ärztin</span></li>
  <li><b>-e</b> (٩٨٪): die Klasse, die Tragödie</li>
  <li><b>-ei</b>: die Bäckerei — <b>-heit</b>: die Freiheit — <b>-keit</b>: die Möglichkeit</li>
  <li><b>-schaft</b>: die Freundschaft — <b>-ung</b>: die Zeitung — <b>-tät</b>: die Universität</li>
  <li><b>-ik</b>: die Musik — <b>-ur</b>: die Kultur — <b>-ion</b>: die Religion</li></ul>
  <h4>DAS (محايد)</h4>
  <ul><li><b>-chen</b>: das Mädchen — <b>-lein</b>: das Büchlein</li>
  <li><b>-ment</b>: das Dokument — <b>-nis</b>: das Zeugnis</li>
  <li><b>-um</b>: das Museum — <b>-tum</b>: das Eigentum</li>
  <li>المصدر لما يبقى اسم: <span class="de">das Lesen, das Schreiben</span></li></ul>
  <p class="tip">⚠️ استثناءات مشهورة: <b>das Mädchen</b> (بنت بس محايد!), <b>das Fräulein</b>, <b>der See</b> (بحيرة) مقابل <b>die See</b> (بحر).</p>`,
  structure:"Endung → Genus",
  tables:[{title:"أسرع قواعد التخمين", head:["النهاية","الجنس","مثال"], rows:[
    ["-ung","die","die Zeitung"],
    ["-heit / -keit","die","die Krankheit"],
    ["-schaft","die","die Freundschaft"],
    ["-tion / -ion","die","die Nation"],
    ["-e","die","die Flasche"],
    ["-er","der","der Lehrer"],
    ["-ling","der","der Schmetterling"],
    ["-chen","das","das Mädchen"],
    ["-ment","das","das Dokument"],
    ["-um","das","das Museum"]
  ]}],
  examples:[
    {de:"die Zeitung, die Meinung, die Übung", ar:"صحيفة، رأي، تمرين — كلها -ung = مؤنث"},
    {de:"das Mädchen, das Brötchen, das Würstchen", ar:"بنت، عيش فينو، سوسيس — كلها -chen = محايد"},
    {de:"der Lehrer, der Computer, der Fehler", ar:"مدرّس، كمبيوتر، غلطة — -er غالبًا مذكر"}
  ],
  mistakes:[
    {f:"die Mädchen", r:"das Mädchen", why:"-chen محايد حتى لو المعنى مؤنث."},
    {f:"der Zeitung", r:"die Zeitung", why:"-ung مؤنث دايمًا."}
  ],
  exam:"مش بيجي سؤال مباشر، لكن بيساعدك تختار الأداة الصح في سؤال الـ Artikel.",
  mnemonic:"<b>ung-heit-keit-schaft</b> = بنات (die). <b>chen-ment-um</b> = محايد (das)."
},

/* ============================ 10. الجمع ============================ */
{
  id:"plural", ch:2, icon:"🔢", title:"Nomen: Singular und Plural", titleAr:"المفرد والجمع",
  rule:"5 Pluralendungen: -e, -er, -n/-en, -s, ∅ (+ manchmal Umlaut)",
  explain:`<p>الجمع في الألماني بياخد <b>die</b> دايمًا، والنهاية بتتغير حسب الكلمة:</p>
  <ul>
    <li><b>∅ (من غير نهاية)</b>: der Kilometer → die Kilometer، der Koffer → die Koffer</li>
    <li><b>+ ¨ (أوملاوت بس)</b>: der Mantel → die Mäntel</li>
    <li><b>-e</b>: das Brot → die Brote</li>
    <li><b>¨ + e</b>: die Hand → die Hände، der Tag → die Tage (بدون أوملاوت)</li>
    <li><b>-er</b>: das Kind → die Kinder — <b>¨ + er</b>: das Buch → die Bücher</li>
    <li><b>-(e)n</b>: die Übung → die Übungen، die Tasche → die Taschen، die Ärztin → die Ärztinnen</li>
    <li><b>-s</b>: das Auto → die Autos، das Café → die Cafés</li>
  </ul>
  <p class="tip">💡 الكلمات اللي بتيجي من لغات تانية (Auto, Café, Hotel, Restaurant, Hobby) غالبًا بتاخد <b>-s</b>.</p>`,
  structure:"die + Nomen + Pluralendung",
  tables:[{title:"أمثلة الامتحان", head:["Singular","Plural","النهاية"], rows:[
    ["der Tag","die Tage","-e"],
    ["die Tablette","die Tabletten","-n"],
    ["der Arzt","die Ärzte","¨+e"],
    ["das Schwimmbad","die Schwimmbäder","¨+er"],
    ["das Café","die Cafés","-s"],
    ["der Schlüssel","die Schlüssel","∅"],
    ["der Kilometer","die Kilometer","∅"],
    ["die Stunde","die Stunden","-n"],
    ["das Buch","die Bücher","¨+er"],
    ["das Auto","die Autos","-s"]
  ]}],
  examples:[
    {de:"Das sind Bücher.", ar:"دي كتب."},
    {de:"Die Ärzte arbeiten im Krankenhaus.", ar:"الدكاترة بيشتغلوا في المستشفى."},
    {de:"Wir haben viele Hausaufgaben.", ar:"عندنا واجبات كتير."}
  ],
  mistakes:[
    {f:"die Buchs", r:"die Bücher", why:"Buch جمعها شاذة ¨+er."},
    {f:"die Tagen", r:"die Tage", why:"Tag جمعها Tage."}
  ],
  exam:"واجب Kapitel 2 فيه بالحرف: „Artikel und Plural“ — der Tag – die Tage …",
  mnemonic:"الجمع دايمًا <b>die</b> — وبعدين فكّر: e؟ er؟ en؟ s؟ ولا من غير نهاية؟"
},

/* ============================ 11. du/ihr/Sie ============================ */
{
  id:"anrede", ch:2, icon:"🤝", title:"Anrede: du, ihr oder Sie?", titleAr:"المخاطبة: إنت، إنتم، حضرتك",
  rule:"familiär: du (Singular) / ihr (Plural) — offiziell: Sie (beides)",
  explain:`<p>الألمان بيفرقوا جدًا بين الرسمي والعادي:</p>
  <ul>
    <li><b>du</b> = لواحد صاحبك / زميلك / طفل.</li>
    <li><b>ihr</b> = لمجموعة أصحاب.</li>
    <li><b>Sie</b> = لواحد أو مجموعة بشكل رسمي (شغل، جامعة، ناس كبيرة). <b>S كبيرة دايمًا</b>.</li>
  </ul>
  <p class="de">Peter, wo wohnst <b>du</b>? — Herr Maier, wo wohnen <b>Sie</b>? — Mark und Robert, wo wohnt <b>ihr</b>?</p>
  <p class="tip">💡 في الامتحان: لو الاسم قبله <b>Herr / Frau</b> → استخدم <b>Sie</b>. لو اسم شخص عادي من غير لقب → <b>du</b>.</p>`,
  structure:"Name, + Verb + du/ihr/Sie",
  tables:[{title:"جدول المخاطبة", head:["","مفرد","جمع"], rows:[
    ["familiär","du","ihr"],
    ["offiziell","Sie","Sie"]
  ]}],
  examples:[
    {de:"Wie heißen Sie?", ar:"اسم حضرتك إيه؟ (رسمي)"},
    {de:"Wie heißt du?", ar:"اسمك إيه؟ (عادي)"},
    {de:"Wo wohnt ihr?", ar:"إنتم ساكنين فين؟"},
    {de:"Kommen Sie aus Österreich?", ar:"حضرتك من النمسا؟"}
  ],
  mistakes:[
    {f:"Herr Müller, wo wohnst du?", r:"Herr Müller, wo wohnen Sie?", why:"مع Herr/Frau بنستخدم Sie."}
  ],
  exam:"سؤال: „Sie oder du? Ergänzen Sie.“ — ١٠ درجات سهلة لو حفظت القاعدة.",
  mnemonic:"لقب + Sie — اسم عادي + du."
},

/* ============================ 12. البلاد مع أداة ============================ */
{
  id:"laender", ch:1, icon:"🌍", title:"Länder mit Artikel + aus", titleAr:"البلاد اللي ليها أداة",
  rule:"aus + Land (ohne Artikel) | aus + der/dem/den (mit Artikel)",
  explain:`<p>معظم البلاد من غير أداة: <span class="de">Ich komme <b>aus</b> Ägypten. / aus Spanien. / aus Deutschland.</span></p>
  <p>لكن في بلاد ليها أداة، ولما نقول «من» بنحول الأداة لصيغة الـ Dativ:</p>
  <table class="mini"><tr><th>Land</th><th>aus + …</th></tr>
  <tr><td>die Schweiz</td><td>aus <b>der</b> Schweiz</td></tr>
  <tr><td>die Türkei</td><td>aus <b>der</b> Türkei</td></tr>
  <tr><td>der Iran</td><td>aus <b>dem</b> Iran</td></tr>
  <tr><td>der Libanon</td><td>aus <b>dem</b> Libanon</td></tr>
  <tr><td>der Sudan</td><td>aus <b>dem</b> Sudan</td></tr>
  <tr><td>die USA (Plural)</td><td>aus <b>den</b> USA</td></tr></table>
  <p class="tip">💡 die → der، der → dem، جمع → den. ده أول لقاء ليك مع الـ Dativ، بس خدها كده مؤقتًا واحفظها.</p>`,
  structure:"Ich komme aus + Land",
  tables:[{title:"التحويل", head:["Artikel","mit aus"], rows:[
    ["die","aus der"],
    ["der","aus dem"],
    ["das","aus dem"],
    ["die (Plural)","aus den"]
  ]}],
  examples:[
    {de:"Ich komme aus der Schweiz.", ar:"أنا جاي من سويسرا."},
    {de:"Er kommt aus dem Iran.", ar:"هو جاي من إيران."},
    {de:"Sie kommt aus den USA.", ar:"هي جاية من أمريكا."},
    {de:"Wir kommen aus Ägypten.", ar:"إحنا جايين من مصر."}
  ],
  mistakes:[
    {f:"aus die Schweiz", r:"aus der Schweiz", why:"بعد aus بنستخدم Dativ."},
    {f:"aus dem USA", r:"aus den USA", why:"USA جمع → den."}
  ],
  exam:"Kapitel 1 Teil 2 فيه سلايد كامل عن „Länder mit Artikel“ — متوقع سؤال فيها.",
  mnemonic:"<b>die→der، der→dem، جمع→den</b>."
},

/* ============================ 13. gern ============================ */
{
  id:"gern", ch:2, icon:"😍", title:"gern / sehr gern / nicht so gern", titleAr:"التعبير عن الحب والكره",
  rule:"Verb + gern = بحب أعمل كذا",
  explain:`<p>بدل ما تقول «أنا بحب أقرا» بفعل تاني، الألماني بيحط <b>gern</b> بعد الفعل:</p>
  <p class="de">Ich lese <b>gern</b>. = بحب أقرا.</p>
  <ul>
    <li><b>sehr gern</b> = بحب جدًا 😍😍</li>
    <li><b>gern</b> = بحب 🙂</li>
    <li><b>nicht so gern</b> = مش بحب أوي 🙁</li>
  </ul>
  <p>وللسؤال: <span class="de">Was machst du gern? / Liest du gern? / Hörst du gern Musik?</span></p>
  <p class="tip">💡 gern مكانها بعد الفعل المصرّف: <span class="de">Ich <b>koche gern</b>.</span> مش «Ich gern koche».</p>`,
  structure:"Subjekt + Verb + gern + …",
  tables:[{title:"درجات الحب", head:["التعبير","المعنى","مثال"], rows:[
    ["sehr gern","بحب جدًا","Ich reise sehr gern."],
    ["gern","بحب","Ich lese gern."],
    ["nicht so gern","مش بحب أوي","Ich koche nicht so gern."],
    ["gar nicht gern","مش بحب خالص","Ich tanze gar nicht gern."]
  ]}],
  examples:[
    {de:"Ich spiele gern Fußball.", ar:"بحب ألعب كورة."},
    {de:"Sie kocht nicht so gern.", ar:"هي مش بتحب تطبخ أوي."},
    {de:"Hörst du gern Musik?", ar:"بتحب تسمع موسيقى؟"}
  ],
  mistakes:[
    {f:"Ich gern lese.", r:"Ich lese gern.", why:"gern بعد الفعل."}
  ],
  exam:"Kapitel 2: „Was machen Sie gern?“ — إجابة قصيرة بـ gern.",
  mnemonic:"<b>gern</b> = «بحب» — وحطها بعد الفعل زي الشطة بعد الأكل."
},

/* ============================ 14. حروف الجر المكانية ============================ */
{
  id:"praepositionen", ch:3, icon:"📍", title:"in, aus, bei, an – Ortsangaben", titleAr:"حروف الجر للمكان",
  rule:"wo? → in + Dativ | woher? → aus + Dativ",
  explain:`<p>أهم ٣ حروف جر في الكورس:</p>
  <ul>
    <li><b>in</b> = في (مكان): <span class="de">Ich wohne <b>in</b> Kairo. / Ich studiere <b>an der</b> SUT.</span></li>
    <li><b>aus</b> = من (أصل): <span class="de">Ich komme <b>aus</b> Ägypten.</span></li>
    <li><b>bei</b> = عند / في (شغل): <span class="de">Ich arbeite <b>bei</b> einer Firma.</span></li>
  </ul>
  <p>مع المدن والبلاد اللي بدون أداة: <b>in</b> + الاسم مباشرة: <span class="de">in Berlin, in Kairo, in Ägypten</span>.</p>
  <p>مع الأماكن اللي ليها أداة: <span class="de">in <b>der</b> Türkei, in <b>dem</b> Iran (= im Iran)</span>.</p>
  <p class="tip">💡 «أنا ساكن في...» = <b>Ich wohne in …</b> — دي جملة بتتكرر في كل امتحان.</p>`,
  structure:"Verb + Präposition + Ort",
  tables:[{title:"أمثلة سريعة", head:["Deutsch","Arabisch"], rows:[
    ["Ich wohne in Kairo.","أنا ساكن في القاهرة."],
    ["Ich komme aus der Schweiz.","أنا جاي من سويسرا."],
    ["Ich studiere an der SUT.","أنا بدرس في SUT."],
    ["Ich arbeite bei Siemens.","أنا بشتغل في سيمنز."],
    ["Der Bahnhof ist im Zentrum.","المحطة في السنتر."]
  ]}],
  examples:[
    {de:"Ich wohne in der Goethestraße 7.", ar:"أنا ساكن في شارع جوته ٧."},
    {de:"Er arbeitet bei einer Firma in Berlin.", ar:"هو بيشتغل في شركة في برلين."},
    {de:"Wir wohnen in Ägypten.", ar:"إحنا ساكنين في مصر."}
  ],
  mistakes:[
    {f:"Ich wohne in Kairo.", r:"Ich wohne in Kairo.", why:"دي صح فعلًا — المدن بدون أداة."},
    {f:"Ich komme von Ägypten.", r:"Ich komme aus Ägypten.", why:"الأصل بـ aus مش von."}
  ],
  exam:"Kapitel 3: „Wo ist …? / Woher kommt …?“ — استخدم in/aus صح.",
  mnemonic:"<b>in</b> = في، <b>aus</b> = من، <b>bei</b> = عند."
},

/* ============================ 15. الأرقام ============================ */
{
  id:"zahlen", ch:1, icon:"🔢", title:"Zahlen und Buchstaben", titleAr:"الأرقام والحروف",
  rule:"0–12 merken, ab 13: Zahl + zehn, ab 21: Einer + und + Zehner",
  explain:`<p>الأرقام من ٠ لـ ١٢ لازم تحفظهم صم. بعد كده القاعدة سهلة:</p>
  <ul>
    <li><b>13–19</b> = الرقم + <b>zehn</b>: dreizehn, vierzehn… (استثناءات: sechzehn, siebzehn)</li>
    <li><b>20–99</b> = الآحاد + <b>und</b> + العشرات: <b>einundzwanzig</b> = ٢١ (حرفيًا: واحد وعشرين)</li>
    <li><b>100</b> = (ein)hundert، <b>1000</b> = (ein)tausend</li>
    <li><b>1.000.000</b> = eine Million، <b>1.000.000.000</b> = eine Milliarde</li>
  </ul>
  <p class="tip">⚠️ الألماني بيقول الرقم بالمقلوب: ٢٤ = <b>vierundzwanzig</b> (أربعة وعشرين). خد بالك في التليفون والأسعار.</p>`,
  structure:"Zahl + und + Zehner",
  tables:[{title:"الأرقام الأساسية", head:["Zahl","Deutsch","Zahl","Deutsch"], rows:[
    ["0","null","11","elf"],
    ["1","eins","12","zwölf"],
    ["2","zwei","13","dreizehn"],
    ["3","drei","14","vierzehn"],
    ["4","vier","15","fünfzehn"],
    ["5","fünf","16","sechzehn"],
    ["6","sechs","17","siebzehn"],
    ["7","sieben","18","achtzehn"],
    ["8","acht","19","neunzehn"],
    ["9","neun","20","zwanzig"],
    ["10","zehn","21","einundzwanzig"]
  ]},
  {title:"عشرات ومئات", head:["Zahl","Deutsch"], rows:[
    ["30","dreißig"],["40","vierzig"],["50","fünfzig"],["60","sechzig"],
    ["70","siebzig"],["80","achtzig"],["90","neunzig"],["100","(ein)hundert"],
    ["1.000","(ein)tausend"],["1.000.000","eine Million"]
  ]}],
  examples:[
    {de:"Meine Telefonnummer ist 0159 8234607.", ar:"رقم تليفوني ٠١٥٩ ٨٢٣٤٦٠٧."},
    {de:"Ich bin zweiundzwanzig Jahre alt.", ar:"عندي ٢٢ سنة."},
    {de:"Das kostet vierzehn Euro.", ar:"ده بـ ١٤ يورو."}
  ],
  mistakes:[
    {f:"zwanzigeins (21)", r:"einundzwanzig", why:"الآحاد الأول وبعدها und والعشرات."},
    {f:"dreißig / dreizig", r:"dreißig", why:"بـ ß مش z."}
  ],
  exam:"بيجي في listening/كتابة رقم تليفون أو سعر.",
  mnemonic:"<b>21 = واحد وعشرين</b> — بالألماني بنقولها بنفس الترتيب المصري!"
},

/* ============================ 16. حروف الجر الزمنية ============================ */
{
  id:"zeitangaben", ch:2, icon:"📅", title:"Zeitangaben: am, um, von … bis", titleAr:"التعبير عن الوقت",
  rule:"am + Tag | um + Uhrzeit | von … bis",
  explain:`<p>لما نتكلم عن الأيام والتواريخ بنستخدم <b>am</b>:</p>
  <p class="de"><b>am</b> Montag, <b>am</b> Wochenende, <b>am</b> 1. Mai</p>
  <p>للساعة بنستخدم <b>um</b>:</p>
  <p class="de"><b>um</b> acht Uhr, <b>um</b> 10:30</p>
  <p>وللمدة بنستخدم <b>von … bis</b>:</p>
  <p class="de"><b>von</b> Montag <b>bis</b> Freitag, <b>von</b> 9 <b>bis</b> 17 Uhr</p>
  <p class="tip">💡 جاوب على «Wann?» بـ <b>am + يوم</b>. الإجابة النموذجية في الكورس: <span class="de">Am Mittwoch.</span></p>`,
  structure:"am + Tag / um + Uhrzeit / von … bis",
  tables:[{title:"أمثلة", head:["Frage","Antwort"], rows:[
    ["Wann gehst du ins Kino?","Am Freitag."],
    ["Wann beginnt der Kurs?","Um neun Uhr."],
    ["Wann arbeitest du?","Von Montag bis Freitag."],
    ["Wann hast du frei?","Am Wochenende."]
  ]}],
  examples:[
    {de:"Am Montag arbeite ich.", ar:"يوم الاثنين بشتغل."},
    {de:"Der Kurs beginnt um zehn Uhr.", ar:"الكورس يبدأ الساعة ١٠."},
    {de:"Ich arbeite von Montag bis Freitag.", ar:"بشتغل من الاثنين للجمعة."}
  ],
  mistakes:[
    {f:"in Montag", r:"am Montag", why:"الأيام بـ am."},
    {f:"am 9 Uhr", r:"um 9 Uhr", why:"الساعة بـ um."}
  ],
  exam:"Kapitel 2: „Wann …?“ + Verabredung — لازم تجاوب بـ am + اليوم.",
  mnemonic:"<b>am</b> لليوم، <b>um</b> للساعة."
}
];

/* ============================ جداول مساعدة ============================ */
window.ALPHABET = [
  ["A","ah"],["B","beh"],["C","tseh"],["D","deh"],["E","eh"],["F","eff"],
  ["G","geh"],["H","hah"],["I","ih"],["J","jott"],["K","kah"],["L","ell"],
  ["M","emm"],["N","enn"],["O","oh"],["P","peh"],["Q","kuh"],["R","err"],
  ["S","ess"],["T","teh"],["U","uh"],["V","fau"],["W","weh"],["X","iks"],
  ["Y","üpsilon"],["Z","zett"],["Ä","ä"],["Ö","ö"],["Ü","ü"],["ß","ess-zett"]
];

window.REDEMITTEL = [
  ["Guten Morgen!","صباح الخير!","حتى 11 صباحًا"],
  ["Guten Tag!","نهارك سعيد!","من الصبح للمساء (رسمي)"],
  ["Guten Abend!","مساء الخير!","بعد 6 مساءً"],
  ["Gute Nacht!","تصبح على خير!","قبل النوم"],
  ["Hallo!","أهلاً!","غير رسمي"],
  ["Tschüss!","سلام!","غير رسمي"],
  ["Auf Wiedersehen!","إلى اللقاء!","رسمي"],
  ["Servus!","أهلاً / سلام!","جنوب ألمانيا والنمسا"],
  ["Ciao!","سلام!","غير رسمي"],
  ["Bis bald!","أشوفك قريب!",""],
  ["Wie geht es Ihnen?","إزيك؟ (رسمي)",""],
  ["Wie geht's dir?","إزيك؟ (عادي)",""],
  ["Danke, gut.","شكراً، كويس.",""],
  ["Es geht.","ماشي الحال.",""],
  ["Nicht so gut.","مش كويس أوي.",""],
  ["Mir geht's schlecht.","أنا تعبان.",""],
  ["Entschuldigung!","آسف / لو سمحت!",""],
  ["Wie bitte?","عفوًا؟ (مفهمتش)",""],
  ["Vielen Dank!","شكراً جزيلاً!",""],
  ["Bitte!","لو سمحت / العفو!",""]
];
