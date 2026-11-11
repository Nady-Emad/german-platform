/* ============================================================================
   Lektionen – شرح الكورس من الصفر بالمصري
   ============================================================================ */
window.LESSONS = [

/* ==================== KAPITEL 1 – TEIL 1 ==================== */
{
  id:"k1t1", ch:1, teil:1, icon:"👋",
  title:"Kapitel 1 – Guten Tag! (Teil 1)", titleAr:"الفصل ١ – أهلاً! (الجزء ١)",
  goal:"تتعلم تسلّم وتودّع، تعرّف نفسك، تسأل عن الحال، وتصرّف sein / heißen / kommen / wohnen.",
  intro:`<p>الفصل ده هو <b>أول خطوة</b> في الألماني. الهدف منه إنك تقدر تعمل حاجتين بس: <b>تسلّم</b> و<b>تعرّف نفسك</b>. مش هي حاجة صعبة، بس أساس كل حاجة بعدها.</p>`,
  steps:[
    { t:"التحية حسب الوقت", de:"Guten Morgen! / Guten Tag! / Guten Abend! / Gute Nacht!",
      ar:"صباح الخير / نهارك سعيد / مساء الخير / تصبح على خير",
      note:"كل تحية ليها وقت. Gute Nacht بتتقال قبل النوم بس — مش لما تمشي من الشغل!" },
    { t:"التحية غير الرسمية", de:"Hallo! / Tschüss! / Bis bald! / Servus!",
      ar:"أهلاً / سلام / أشوفك قريب / أهلاً (جنوب ألمانيا)",
      note:"Hallo و Tschüss للصحاب. Auf Wiedersehen رسمي." },
    { t:"تسأل عن الاسم", de:"Wie heißen Sie? / Wie heißt du? / Wie ist Ihr Name? / Wer sind Sie?",
      ar:"اسم حضرتك إيه؟ / اسمك إيه؟ / اسم حضرتك إيه؟ / حضرتك مين؟",
      note:"Sie = رسمي (S كبيرة). du = عادي." },
    { t:"ترد بالاسم", de:"Ich heiße Nady. / Mein Name ist Nady Emad. / Ich bin Nady.",
      ar:"أنا اسمي نادي. / اسمي نادي عماد. / أنا نادي.",
      note:"التلاتة صح، اختار واحد وثبّت عليه." },
    { t:"تسأل عن الحال", de:"Wie geht es Ihnen? (رسمي) / Wie geht's dir? (عادي) / Wie geht's?",
      ar:"إزيك؟ / إزيك؟ / إيه الأخبار؟",
      note:"الإجابة: Danke, gut. Und Ihnen? / Und dir?" },
    { t:"تشتغل بفعل sein", de:"Ich bin Student. Du bist müde. Er ist Lehrer.",
      ar:"أنا طالب. إنت تعبان. هو مدرّس.",
      note:"sein شاذ: bin / bist / ist / sind / seid / sind." },
    { t:"تسأل عن البلد والسكن", de:"Woher kommst du? – Ich komme aus Ägypten. Wo wohnst du? – Ich wohne in Kairo.",
      ar:"إنت منين؟ – أنا من مصر. ساكن فين؟ – ساكن في القاهرة.",
      note:"kommen aus = من بلد، wohnen in = ساكن في مكان." },
    { t:"ترتيب الجملة الصح", de:"Ich lerne heute Deutsch. / Heute lerne ich Deutsch.",
      ar:"أنا بتعلم ألماني النهاردة. / النهاردة أنا بتعلم ألماني.",
      note:"الفعل دايمًا في المكان التاني — دي أهم قاعدة في الكتاب كله." }
  ],
  examples:[
    {de:"Guten Tag! Wie heißen Sie?", ar:"نهارك سعيد! اسم حضرتك إيه؟"},
    {de:"Ich heiße Nady Emad.", ar:"أنا اسمي نادي عماد."},
    {de:"Woher kommen Sie? – Ich komme aus Ägypten.", ar:"حضرتك منين؟ – أنا من مصر."},
    {de:"Wo wohnen Sie? – Ich wohne in Kairo.", ar:"حضرتك ساكن فين؟ – ساكن في القاهرة."},
    {de:"Wie geht es Ihnen? – Danke, gut. Und Ihnen?", ar:"إزيك؟ – شكراً، كويس. وإنت؟"}
  ],
  mistakes:[
    {f:"Wie heiße du?", r:"Wie heißt du?", why:"heißen مع du بيبقى heißt."},
    {f:"Ich bin kommen aus Ägypten.", r:"Ich komme aus Ägypten.", why:"فعل واحد بس في الجملة."},
    {f:"Ich wohne in Kairo.", r:"Ich wohne in Kairo.", why:"(صح) — خد بالك بس إن المدن من غير أداة."}
  ],
  examTip:"امتحان Kapitel 1 بيبدأ بـ „Ergänzen Sie die Fragen“ (Wo / Wer / Wie / Woher) و„Ergänzen Sie die Verben“ (wohnen, heißen, sein, kommen).",
  mnemonic:"<b>Wer</b>=مين، <b>Wie</b>=إزاي/إيه، <b>Wo</b>=فين، <b>Woher</b>=منين.",
  mini:[
    {q:"___ heißt du?", opts:["Wer","Wie","Wo"], a:1, why:"السؤال عن الاسم بـ Wie."},
    {q:"Ich ___ aus Ägypten.", opts:["bin","komme","wohne"], a:1, why:"kommen aus = من بلد."},
    {q:"Wo ___ Sie?", opts:["wohnst","wohnen","wohnt"], a:1, why:"مع Sie النهاية -en: wohnen."}
  ]
},

/* ==================== KAPITEL 1 – TEIL 2 ==================== */
{
  id:"k1t2", ch:1, teil:2, icon:"🔢",
  title:"Kapitel 1 – Zahlen, Länder, Sprachen (Teil 2)", titleAr:"الفصل ١ – أرقام وبلاد ولغات (الجزء ٢)",
  goal:"تتعلم الأرقام والأبجدية، تقول رقم تليفونك وإيميلك، تتكلم عن بلدك ولغاتك، وتعرض نفسك بالكامل.",
  intro:`<p>الجزء ده بيوسّع «تقديم النفس»: بعد الاسم، هتتعلم تقول <b>منين</b> إنت، <b>بتتكلم إيه</b>، و<b>رقمك وإيميلك</b> إيه.</p>`,
  steps:[
    { t:"الأرقام ٠–١٢", de:"null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf",
      ar:"صفر، واحد، اتنين، تلاتة، أربعة، خمسة، ستة، سبعة، تمانية، تسعة، عشرة، حداشر، اتناشر",
      note:"احفظهم بالترتيب كأغنية." },
    { t:"من ١٣ لـ ٢٠", de:"dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig",
      ar:"١٣، ١٤ … ٢٠",
      note:"الرقم + zehn، ما عدا sechzehn و siebzehn." },
    { t:"من ٢١ لفوق", de:"einundzwanzig = 21, zweiundzwanzig = 22",
      ar:"واحد وعشرين، اتنين وعشرين",
      note:"الآحاد الأول + und + العشرات — زي المصري بالظبط!" },
    { t:"الأبجدية والتهجّي", de:"Ich buchstabiere: N-a-d-y. / Können Sie das bitte buchstabieren?",
      ar:"أنا بتهجّى: N-a-d-y. / ممكن تهجّيها؟",
      note:"مهم جدًا في التليفون والإيميل." },
    { t:"رقم التليفون والإيميل", de:"Meine Telefonnummer ist 0159 8234607. Meine E-Mail-Adresse ist nady@mail.com.",
      ar:"رقم تليفوني … / إيميلي …",
      note:"لاحظ: meine (بتاعتي) + Telefonnummer." },
    { t:"البلاد واللغات", de:"Woher kommen Sie? – Ich komme aus der Schweiz. Welche Sprachen sprechen Sie? – Ich spreche Deutsch und Englisch.",
      ar:"حضرتك منين؟ – من سويسرا. بتتكلم أنهي لغات؟ – ألماني وإنجليزي.",
      note:"die Schweiz / die Türkei / der Iran / die USA ليها أداة — راجع قسم البلاد." },
    { t:"sprechen", de:"ich spreche, du sprichst, er spricht, wir sprechen, ihr sprecht, sie sprechen",
      ar:"بتكلم…",
      note:"فعل شاذ: du sprichst / er spricht." },
    { t:"تقديم نفسك كامل", de:"Ich heiße Nady Emad. Ich komme aus Ägypten und wohne in Kairo. Ich spreche Arabisch und Englisch. Ich lerne Deutsch.",
      ar:"اسمي نادي عماد. أنا من مصر وساكن في القاهرة. بتكلم عربي وإنجليزي. بتعلم ألماني.",
      note:"ده بالحرف واجب Chapter 1 بتاعك — احفظه كقالب." }
  ],
  examples:[
    {de:"Meine Muttersprache ist Arabisch.", ar:"لغتي الأم هي العربية."},
    {de:"Ich spreche sehr gut Englisch, gut Deutsch und ein bisschen Türkisch.", ar:"بتكلم إنجليزي كويس جداً، ألماني كويس، وتركي شوية."},
    {de:"Er kommt aus dem Iran und wohnt in Berlin.", ar:"هو من إيران وساكن في برلين."},
    {de:"Wie ist deine E-Mail-Adresse?", ar:"إيميلك إيه؟"}
  ],
  mistakes:[
    {f:"Ich komme aus die Schweiz.", r:"Ich komme aus der Schweiz.", why:"بعد aus بنستخدم Dativ: die → der."},
    {f:"Ich spreche Deutsch gut.", r:"Ich spreche gut Deutsch.", why:"gern/gut بييجوا قبل المفعول عادةً."},
    {f:"Mein Telefonnummer ist …", r:"Meine Telefonnummer ist …", why:"die Nummer مؤنث → meine."}
  ],
  examTip:"سؤال شائع: „Ergänzen Sie: Ich komme ___ der Schweiz.“ أو „Wie ist ___ Telefonnummer?“.",
  mnemonic:"<b>aus + der/dem/den</b> للبلاد اللي ليها أداة — والمدن من غير أداة.",
  mini:[
    {q:"Ich komme ___ der Türkei.", opts:["aus","in","von"], a:0, why:"الأصل بـ aus."},
    {q:"Wie ist ___ Telefonnummer?", opts:["dein","deine","deinen"], a:1, why:"die Nummer → deine."},
    {q:"Du ___ Deutsch?", opts:["sprechst","sprichst","sprecht"], a:1, why:"sprechen شاذ: du sprichst."}
  ]
},

/* ==================== KAPITEL 2 – TEIL 1 ==================== */
{
  id:"k2t1", ch:2, teil:1, icon:"🎨",
  title:"Kapitel 2 – Hobbys und Freizeit (Teil 1)", titleAr:"الفصل ٢ – الهوايات ووقت الفراغ (الجزء ١)",
  goal:"تتكلم عن هواياتك بـ gern، تعمل أسئلة نعم/لا، تنفي بـ nicht، وتتفق على ميعاد بأيام الأسبوع.",
  intro:`<p>هنا هتبدأ تتكلم عن <b>نفسك بجد</b>: بتحب تعمل إيه في وقت فراغك، وإمتى تتقابل مع صحابك.</p>`,
  steps:[
    { t:"أفعال الهوايات", de:"schwimmen, joggen, lesen, reisen, tanzen, singen, kochen, spielen, fotografieren, Musik hören",
      ar:"يعوم، يجري، يقرا، يسافر، يرقص، يغني، يطبخ، يلعب، يصوّر، يسمع موسيقى",
      note:"دول أفعال Chapter 2 الأساسية." },
    { t:"gern = بحب", de:"Ich lese gern. Ich koche nicht so gern. Ich reise sehr gern.",
      ar:"بحب أقرا. مش بحب أطبخ أوي. بحب أسافر جداً.",
      note:"gern بعد الفعل دايمًا." },
    { t:"السؤال عن الهواية", de:"Was machst du gern? / Was machen Sie gern? / Hörst du gern Musik?",
      ar:"بتحب تعمل إيه؟ / حضرتك بتحب تعمل إيه؟ / بتحب تسمع موسيقى؟",
      note:"الرد: Ich … gern." },
    { t:"سؤال نعم/لا", de:"Gehen wir ins Kino? / Kommst du aus Ägypten? / Tanzt ihr gern?",
      ar:"نروح السينما؟ / إنت من مصر؟ / بتحبوا ترقصوا؟",
      note:"الفعل في المكان الأول = سؤال." },
    { t:"النفي بـ nicht", de:"Nein, ich lese nicht. / Ich komme nicht aus Berlin.",
      ar:"لأ، أنا مش بقرا. / أنا مش من برلين.",
      note:"nicht في آخر الجملة أو قبل الكلمة المنفية." },
    { t:"أيام الأسبوع", de:"Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag",
      ar:"الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة، السبت، الحد",
      note:"كلها مذكرة (der) وبتتكتب بحرف كبير." },
    { t:"التفق على ميعاد", de:"Wann gehen wir ins Kino? – Am Freitag. / Geht das? – Nein, das geht leider nicht.",
      ar:"إمتى نروح السينما؟ – الجمعة. / ينفع؟ – لأ، للأسف مش هينفع.",
      note:"am + اليوم = يوم كذا." }
  ],
  examples:[
    {de:"Was machst du gern? – Ich spiele gern Fußball.", ar:"بتحب تعمل إيه؟ – بحب ألعب كورة."},
    {de:"Liest du gern? – Ja, sehr gern.", ar:"بتحب تقرا؟ – أيوه، جداً."},
    {de:"Am Mittwoch gehen wir ins Kino.", ar:"الأربعاء بنروح السينما."},
    {de:"Boris kocht nicht gern.", ar:"بوريس مش بيحب يطبخ."}
  ],
  mistakes:[
    {f:"Ich gern spiele Fußball.", r:"Ich spiele gern Fußball.", why:"gern بعد الفعل."},
    {f:"Du kommst aus Ägypten? (كنغمة)", r:"Kommst du aus Ägypten?", why:"السؤال بترتيب الفعل أولًا."},
    {f:"Ich lese nicht gern.", r:"Ich lese nicht gern.", why:"(صح) — nicht so gern = مش أوي، nicht gern = مش بحب."}
  ],
  examTip:"Kapitel 2 بيجيب „Ergänzen Sie die Verben in der richtigen Form“ + سؤال اختيار عن ترتيب السؤال.",
  mnemonic:"<b>Was machst du gern?</b> → جاوب: <b>Ich + فعل + gern</b>.",
  mini:[
    {q:"___ du gern Musik?", opts:["Hörst","Hört","Hören"], a:0, why:"مع du النهاية -st: hörst."},
    {q:"Gehen ___ am Samstag ins Kino?", opts:["wir","uns","du"], a:0, why:"الفعل أولًا وبعده الفاعل wir."},
    {q:"Am Freitag ___ ich nicht.", opts:["arbeite","arbeitest","arbeiten"], a:0, why:"ich + arbeite."}
  ]
},

/* ==================== KAPITEL 2 – TEIL 2 ==================== */
{
  id:"k2t2", ch:2, teil:2, icon:"💼",
  title:"Kapitel 2 – Berufe und Personalien (Teil 2)", titleAr:"الفصل ٢ – المهن والبيانات الشخصية (الجزء ٢)",
  goal:"تتكلم عن مهنتك ومواعيد شغلك، تفهم الأرقام الكبيرة، وتفرّق بين المفرد والجمع، وتملأ فورم بيانات.",
  intro:`<p>هنا هتتعلم تحكي عن <b>شغلك</b> و<b>مواعيدك</b>، وتفهم البيانات الشخصية في أي فورم.</p>`,
  steps:[
    { t:"السؤال عن المهنة", de:"Was sind Sie von Beruf? / Was bist du von Beruf?",
      ar:"حضرتك بتشتغل إيه؟ / بتشتغل إيه؟",
      note:"الرد: Ich bin Student/in. / Ich bin Ingenieur/in." },
    { t:"مهن الكورس", de:"Studentin, Kellner, Taxifahrer, Ärztin, Verkäuferin, Informatiker, Lehrerin, Friseurin, Architekt, Ingenieur",
      ar:"طالبة، جرسون، سواق تاكسي، دكتورة، بيّاعة، مبرمج، مدرّسة، كوافيرة، مهندس معماري، مهندس",
      note:"المؤنث بياخد -in: Lehrer → Lehrerin، Arzt → Ärztin." },
    { t:"السؤال عن الشغل", de:"Wo arbeiten Sie? / Wo studierst du? – Ich studiere an der SUT.",
      ar:"بتشتغل فين؟ / بتدرس فين؟ – بدرس في SUT.",
      note:"arbeiten bei + شركة / an der + جامعة." },
    { t:"مواعيد الشغل", de:"Ich arbeite von Montag bis Freitag. Am Samstag habe ich frei.",
      ar:"بشتغل من الاثنين للجمعة. السبت عندي أجازة.",
      note:"frei haben = عنده أجازة." },
    { t:"الأرقام الكبيرة", de:"22 Jahre, 24 Stunden, 100 Bücher, 1.250 Patienten",
      ar:"٢٢ سنة، ٢٤ ساعة، ١٠٠ كتاب، ١٢٥٠ مريض",
      note:"المئات والآلاف زي ما شرحنا في الأرقام." },
    { t:"الجمع", de:"die Bücher, die Restaurants, die Kilometer, die Ärzte, die Stunden",
      ar:"الكتب، المطاعم، الكيلومترات، الدكاترة، الساعات",
      note:"الجمع دايمًا die." },
    { t:"sein و haben", de:"Ich bin Student. Ich habe am Montag frei. Hast du Zeit?",
      ar:"أنا طالب. عندي أجازة الاثنين. عندك وقت؟",
      note:"العمر بـ sein: Ich bin 22 Jahre alt." },
    { t:"البيانات الشخصية", de:"Name, Vorname, Geburtsdatum, Geburtsort, Adresse, Telefonnummer",
      ar:"الاسم، الاسم الأول، تاريخ الميلاد، مكان الميلاد، العنوان، التليفون",
      note:"دي كلمات الفورم — بتيجي في الامتحان." }
  ],
  examples:[
    {de:"Was bist du von Beruf? – Ich bin Student.", ar:"بتشتغل إيه؟ – أنا طالب."},
    {de:"Ich arbeite als Kellner im Café.", ar:"بشتغل جرسون في الكافيه."},
    {de:"Sie studiert Medizin an der Universität.", ar:"هي بتدرس طب في الجامعة."},
    {de:"Am Wochenende habe ich frei.", ar:"في الويك إند عندي أجازة."}
  ],
  mistakes:[
    {f:"Ich bin 22 Jahre.", r:"Ich bin 22 Jahre alt.", why:"لازم alt مع العمر."},
    {f:"Ich habe Lehrer.", r:"Ich bin Lehrer.", why:"المهنة بـ sein مش haben."},
    {f:"die Lehrer (للمدرّسة)", r:"die Lehrerin", why:"لازم -in للمؤنث."}
  ],
  examTip:"Kapitel 2 امتحان: „Ergänzen Sie ist / hat / sind / habe …“ — يعني تدريب على sein و haben.",
  mnemonic:"المهنة بـ <b>sein</b>، الملكية بـ <b>haben</b>.",
  mini:[
    {q:"Ich ___ 22 Jahre alt.", opts:["habe","bin","ist"], a:1, why:"العمر بـ sein."},
    {q:"Sie ___ Ärztin.", opts:["ist","hat","sind"], a:0, why:"sie (هي) + ist."},
    {q:"___ du am Montag Zeit?", opts:["Hast","Habt","Hat"], a:0, why:"du + hast."}
  ]
},

/* ==================== KAPITEL 3 – TEIL 1 ==================== */
{
  id:"k3t1", ch:3, teil:1, icon:"🏙️",
  title:"Kapitel 3 – Orte in der Stadt (Teil 1)", titleAr:"الفصل ٣ – أماكن في المدينة (الجزء ١)",
  goal:"تعرّف أماكن المدينة، تسأل «إيه ده؟»، تستخدم أدوات التعريف والنكرة، وتنفي بـ kein، وتتكلم عن المواصلات.",
  intro:`<p>آخر جزء في الكورس: <b>المدينة</b>. هتتعلم تسأل عن الأماكن وتوصفها وتنفي، وتقول بتروح إزاي.</p>`,
  steps:[
    { t:"أماكن المدينة", de:"der Bahnhof, das Rathaus, die Kirche, der Hafen, das Konzerthaus, der Fluss, das Museum, der See",
      ar:"محطة القطر، مبنى البلدية، الكنيسة، المينا، قاعة الحفلات، النهر، المتحف، البحيرة",
      note:"خد بالك من الأداة مع كل كلمة." },
    { t:"السؤال: Was ist das?", de:"Was ist das? – Das ist der Hafen. / Das ist ein Hotel.",
      ar:"ده إيه؟ – ده المينا. / ده فندق.",
      note:"مع الحاجة المعروفة: der/die/das. مع المجهولة: ein/eine." },
    { t:"أدوات التعريف", de:"der Stift, das Buch, die Tablette, die Bücher",
      ar:"القلم، الكتاب، الحباية، الكتب",
      note:"der مذكر، das محايد، die مؤنث، die جمع." },
    { t:"أدوات النكرة", de:"ein Stift, ein Buch, eine Tablette — Plural: (بدون أداة) Bücher",
      ar:"قلم، كتاب، حباية — كتب",
      note:"الجمع ملهوش أداة نكرة." },
    { t:"النفي بـ kein", de:"Das ist kein Bahnhof. Das ist keine Straße. Das sind keine Autos.",
      ar:"دي مش محطة. ده مش شارع. دي مش عربيات.",
      note:"kein للمذكر/المحايد، keine للمؤنث والجمع." },
    { t:"سؤال وإجابة عن الأماكن", de:"Ist das ein Hotel? – Ja, das ist ein Hotel. / Nein, das ist kein Hotel, das ist ein Rathaus.",
      ar:"ده فندق؟ – أيوه. / لأ، ده مش فندق، ده مبنى البلدية.",
      note:"نفس النمط اللي في سلايد المراجعة." },
    { t:"المواصلات", de:"der Bus, die U-Bahn, das Fahrrad, das Auto, der Zug, zu Fuß",
      ar:"الاتوبيس، المترو، العجلة، العربية، القطر، على رجليا",
      note:"mit dem Bus / mit der U-Bahn / mit dem Fahrrad." },
    { t:"ترتيب الجملة مع المكان", de:"Der Bahnhof ist im Zentrum. / Ich fahre mit dem Bus.",
      ar:"المحطة في السنتر. / بروح بالاتوبيس.",
      note:"الفعل في المكان التاني زي ما اتفقنا." }
  ],
  examples:[
    {de:"Was ist das? – Das ist die Kirche.", ar:"ده إيه؟ – دي الكنيسة."},
    {de:"Ist das ein Bus? – Nein, das ist kein Bus, das ist eine U-Bahn.", ar:"ده اتوبيس؟ – لأ، ده مش اتوبيس، ده مترو."},
    {de:"Ich fahre mit dem Fahrrad.", ar:"بروح بالعجلة."},
    {de:"Das sind keine Konzertkarten, das sind Fahrkarten.", ar:"دي مش تذاكر حفلة، دي تذاكر سفر."}
  ],
  mistakes:[
    {f:"Das ist nicht ein Hotel.", r:"Das ist kein Hotel.", why:"نفي النكرة بـ kein مش nicht ein."},
    {f:"Das ist eine Buch.", r:"Das ist ein Buch.", why:"Buch محايد."},
    {f:"Ich fahre mit der Bus.", r:"Ich fahre mit dem Bus.", why:"der Bus → mit dem (Dativ)."}
  ],
  examTip:"Kapitel 3 امتحان: „Ergänzen Sie den bestimmten Artikel“ + „Nein, das ist kein …“.",
  mnemonic:"<b>ein</b> للحاجة الجديدة، <b>der/die/das</b> للمعروفة، <b>kein</b> للنفي.",
  mini:[
    {q:"___ Buch ist neu.", opts:["Der","Das","Die"], a:1, why:"Buch محايد → das."},
    {q:"Das ist ___ Kirche.", opts:["kein","keine","nicht"], a:1, why:"Kirche مؤنث → keine."},
    {q:"Ist das ein Hotel? – Nein, das ist ___ Hotel.", opts:["kein","keine","nicht"], a:0, why:"Hotel محايد → kein."}
  ]
}
];

/* مسار التعلّم الست مراحل */
window.STAGES = [
  {n:1, key:"understand", icon:"🧠", title:"افهم", ar:"اقرأ شرح كل فصل بالمصري"},
  {n:2, key:"memorize", icon:"🗂️", title:"احفظ", ar:"احفظ الكلمات مع الأداة الصح"},
  {n:3, key:"practice", icon:"🏋️", title:"اتمرّن", ar:"تصريف الأفعال وترتيب الجمل"},
  {n:4, key:"answer", icon:"✍️", title:"جاوب", ar:"إجابات قصيرة وأسئلة اختيار"},
  {n:5, key:"test", icon:"📝", title:"امتحن", ar:"امتحان كامل بمؤقت"},
  {n:6, key:"revise", icon:"🔁", title:"راجع", ar:"راجع اللي غلطت فيه"}
];
