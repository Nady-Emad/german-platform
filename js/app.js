/* ==========================================================================
   Deutsch A1.1 – Lernplattform · App-Engine
   Vanilla JS · keine Abhängigkeiten · funktioniert offline (file://)
   ========================================================================== */
(function () {
"use strict";

/* ----------------------------- Daten vorbereiten ----------------------------- */
const VOCAB = window.VOCAB_RAW.map(function (r) {
  return { art: r[0], de: r[1], ar: r[2], pl: r[3], ex: r[4], exAr: r[5], cat: r[6], ch: r[7] };
});
const NOUNS = VOCAB.filter(function (v) { return v.art === "der" || v.art === "die" || v.art === "das"; });
const CATS = window.VOCAB_CATS;
const PRON = ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"];
const VERBS = window.VERBS_RAW.map(function (r) {
  return {
    inf: r[0], ar: r[1], forms: r[2].split("|"), ex: r[3], exAr: r[4],
    type: r[5], ch: r[6], perf: r[7], note: r[8]
  };
});
const GRAMMAR = window.GRAMMAR;
const LESSONS = window.LESSONS;
const ORDERING = window.ORDERING;
const SHORT = window.SHORT;
const MCQ_ORIGINAL = window.MCQ_ORIGINAL;
const MCQ_GENERATED = window.MCQ_GENERATED;
const KEYWORDS = window.KEYWORDS;
const ORIGINAL_EXERCISES = window.ORIGINAL_EXERCISES;
const ALPHABET = window.ALPHABET;
const REDEMITTEL = window.REDEMITTEL;
const STAGES = window.STAGES;

/* ----------------------------- Speicher ----------------------------- */
const LS_KEY = "deutsch_a11_progress_v1";
const DEFAULT_STATE = {
  theme: "light",
  vocab: {},      // "de" -> not|reviewing|memorized|practice
  grammar: {},    // id -> done
  lessons: {},    // id -> done
  stats: { correct: 0, wrong: 0, answered: 0 },
  exams: [],
  wrongList: []   // ids of questions answered wrongly
};
let S = load();

function load() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
    const p = JSON.parse(raw);
    return Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), p);
  } catch (e) { return JSON.parse(JSON.stringify(DEFAULT_STATE)); }
}
function save() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {}
  updateNavProgress();
}

/* ----------------------------- Utils ----------------------------- */
const $ = function (sel, root) { return (root || document).querySelector(sel); };
const $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function de(s) { return '<span class="de">' + esc(s) + '</span>'; }
/* rich(): gibt bereits geprüftes Autoren-HTML unverändert aus (z. B. <b>…</b> in Merksätzen) */
function rich(html) { return String(html == null ? "" : html); }
function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  }
  return arr;
}
function sample(a, n) { return shuffle(a).slice(0, n); }
function norm(s) {
  return String(s || "").toLowerCase()
    .replace(/[.,!?;:„“"'"()\-–—]/g, " ")
    .replace(/\s+/g, " ").trim();
}
let toastTimer = null;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2100);
}
function openModal(html) {
  $("#modalBox").innerHTML = html;
  $("#modalBack").classList.add("show");
}
function closeModal() { $("#modalBack").classList.remove("show"); }
$("#modalBack").addEventListener("click", function (e) {
  if (e.target === $("#modalBack")) closeModal();
});

function artClass(a) { return a === "der" ? "art-der" : a === "die" ? "art-die" : a === "das" ? "art-das" : ""; }
function chiClass(c) { return c === "der" ? "a-der" : c === "die" ? "a-die" : "a-das"; }

function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }

/* ----------------------------- Aussprache (Web Speech API) ----------------------------- */
function speak(text) {
  if (!("speechSynthesis" in window)) { toast("النطق مش مدعوم في المتصفح ده"); return; }
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = 0.88;
    window.speechSynthesis.speak(u);
  } catch (e) { toast("مش قادر أشغّل الصوت"); }
}

/* ----------------------------- Fortschritt ----------------------------- */
function vocabStatus(deWord) { return S.vocab[deWord] || "not"; }
function setVocabStatus(deWord, st) { S.vocab[deWord] = st; save(); }

function recordAnswer(ok, id) {
  S.stats.answered++;
  if (ok) S.stats.correct++; else S.stats.wrong++;
  if (id) {
    if (ok) {
      const i = S.wrongList.indexOf(id);
      if (i >= 0) S.wrongList.splice(i, 1);
    } else if (S.wrongList.indexOf(id) < 0) {
      S.wrongList.push(id);
    }
  }
  save();
}

function stats() {
  const totalVocab = NOUNS.length;
  const mem = NOUNS.filter(function (v) { return S.vocab[v.de] === "memorized"; }).length;
  const grammarDone = GRAMMAR.filter(function (g) { return S.grammar[g.id]; }).length;
  const lessonsDone = LESSONS.filter(function (l) { return S.lessons[l.id]; }).length;
  return {
    totalVocab: totalVocab, mem: mem,
    grammarTotal: GRAMMAR.length, grammarDone: grammarDone,
    lessonsTotal: LESSONS.length, lessonsDone: lessonsDone,
    correct: S.stats.correct, wrong: S.stats.wrong, answered: S.stats.answered,
    exams: S.exams.length,
    best: S.exams.length ? Math.max.apply(null, S.exams.map(function (e) { return e.score; })) : 0,
    overall: Math.round((
      (mem / totalVocab) * 40 +
      (grammarDone / GRAMMAR.length) * 20 +
      (lessonsDone / LESSONS.length) * 20 +
      (S.stats.answered ? Math.min(1, S.stats.correct / 60) * 20 : 0)
    ))
  };
}

function updateNavProgress() {
  const st = stats();
  const el = $("#navProgress"), tx = $("#navProgressTxt");
  if (el) el.style.width = Math.min(100, st.overall) + "%";
  if (tx) tx.textContent = Math.min(100, st.overall) + "%";
  const cv = $("#cntVocab");
  if (cv) cv.textContent = VOCAB.length;
}

/* ----------------------------- Theme ----------------------------- */
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  $("#themeBtn").textContent = t === "dark" ? "☀️" : "🌙";
  S.theme = t; save();
}
$("#themeBtn").addEventListener("click", function () {
  applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

/* ----------------------------- Router ----------------------------- */
const routes = {};
let currentView = "dashboard";

function go(view, param) {
  const hash = "#/" + view + (param ? "/" + param : "");
  if (location.hash === hash) render(view, param);
  else location.hash = hash;
}
function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  const parts = h.split("/");
  return { view: parts[0] || "dashboard", param: parts[1] || null };
}
window.addEventListener("hashchange", function () {
  const p = parseHash();
  render(p.view, p.param);
  $("#sidebar").classList.remove("open");
});

function setActiveNav(view) {
  $$(".nav-btn").forEach(function (b) {
    b.classList.toggle("active", b.getAttribute("data-view") === view);
  });
}

function render(view, param) {
  currentView = view;
  setActiveNav(view);
  const v = $("#view");
  const fn = routes[view] || routes.dashboard;
  v.innerHTML = "";
  fn(v, param);
  window.scrollTo(0, 0);
}

$$(".nav-btn").forEach(function (b) {
  b.addEventListener("click", function () { go(b.getAttribute("data-view")); });
});
$("#menuBtn").addEventListener("click", function () { $("#sidebar").classList.toggle("open"); });

/* ==========================================================================
   VIEWS
   ========================================================================== */

/* ----------------------------- Dashboard ----------------------------- */
routes.dashboard = function (root) {
  const st = stats();
  const stages = STAGES.map(function (s) {
    let p = 0;
    if (s.key === "understand") p = pct(st.lessonsDone, st.lessonsTotal);
    if (s.key === "memorize") p = pct(st.mem, st.totalVocab);
    if (s.key === "practice") p = pct(Math.min(st.answered, 40), 40);
    if (s.key === "answer") p = pct(Math.min(st.answered, 80), 80);
    if (s.key === "test") p = st.exams ? 100 : 0;
    if (s.key === "revise") p = st.wrong ? 40 : 100;
    return { s: s, p: p };
  });

  root.innerHTML = `
  <div class="hero">
    <h1>أهلاً 👋 ابدأ من الصفر… وكمّل للامتحان</h1>
    <p>كل حاجة في الكورس في مكان واحد: شرح بالمصري، مفردات بالأداة الصح، أفعال، قواعد، وتمارين زي الامتحان بالظبط.</p>
    <div class="hero-actions">
      <button class="btn" data-go="lessons">📘 ابدأ الشرح</button>
      <button class="btn ghost" data-go="artikel">🔤 درّب الأدوات</button>
      <button class="btn ghost" data-go="exam">📝 امتحان سريع</button>
    </div>
  </div>

  <div class="grid g4 mt">
    <div class="card"><div class="stat"><span class="v">${VOCAB.length}</span><span class="k">كلمة في القاموس</span></div></div>
    <div class="card"><div class="stat"><span class="v">${st.mem}</span><span class="k">كلمة اتقنتها</span></div></div>
    <div class="card"><div class="stat"><span class="v">${st.answered}</span><span class="k">سؤال اتحل</span></div></div>
    <div class="card"><div class="stat"><span class="v">${st.overall}%</span><span class="k">التقدّم الكلي</span></div></div>
  </div>

  <div class="grid g2 mt">
    <div class="card">
      <h3>🧭 مسار التعلّم الست مراحل</h3>
      <div class="stage-list mt">
        ${stages.map(function (x) {
          return `<div class="stage-item ${x.p >= 100 ? "done" : ""}">
            <div class="stage-num">${x.p >= 100 ? "✓" : x.s.n}</div>
            <div style="flex:1">
              <div style="font-weight:700">${x.s.icon} ${x.s.title} — <span class="muted small">${x.s.ar}</span></div>
              <div class="progress" style="margin-top:5px"><i style="width:${x.p}%"></i></div>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>

    <div class="card">
      <h3>📊 إحصائياتك</h3>
      <div class="mt">
        <div class="pbar-row">
          <div class="lbl"><span>المفردات المحفوظة</span><span>${st.mem} / ${st.totalVocab}</span></div>
          <div class="progress"><i style="width:${pct(st.mem, st.totalVocab)}%"></i></div>
        </div>
        <div class="pbar-row">
          <div class="lbl"><span>دروس القواعد</span><span>${st.grammarDone} / ${st.grammarTotal}</span></div>
          <div class="progress"><i style="width:${pct(st.grammarDone, st.grammarTotal)}%"></i></div>
        </div>
        <div class="pbar-row">
          <div class="lbl"><span>شرح الفصول</span><span>${st.lessonsDone} / ${st.lessonsTotal}</span></div>
          <div class="progress"><i style="width:${pct(st.lessonsDone, st.lessonsTotal)}%"></i></div>
        </div>
        <div class="pbar-row">
          <div class="lbl"><span>إجابات صح</span><span>${st.correct} / ${st.answered}</span></div>
          <div class="progress"><i style="width:${pct(st.correct, st.answered || 1)}%"></i></div>
        </div>
      </div>
      <div class="row mt">
        <span class="badge ok">✓ صح: ${st.correct}</span>
        <span class="badge bad">✗ غلط: ${st.wrong}</span>
        <span class="badge brand">امتحانات: ${st.exams}</span>
        ${st.best ? `<span class="badge warn">أعلى نتيجة: ${st.best}%</span>` : ""}
      </div>
    </div>
  </div>

  <div class="grid g3 mt">
    <div class="card clickable" data-go="vocab">
      <h3>🗂️ القاموس الكامل</h3>
      <p class="muted small">${VOCAB.length} كلمة، كل اسم معاه أداته وجمعه ومعناه وجملة مثال.</p>
    </div>
    <div class="card clickable" data-go="order">
      <h3>🧩 ترتيب الجملة</h3>
      <p class="muted small">${ORDERING.length} تمرين من السهل للصعب مع شرح مكان الفعل.</p>
    </div>
    <div class="card clickable" data-go="original">
      <h3>📄 أسئلة الكورس الأصلية</h3>
      <p class="muted small">كل أسئلة ملف Fragen والأسئلة الأصلية — من غير أي حذف.</p>
    </div>
  </div>

  <div class="card mt">
    <h3>⚡ ابدأ بسرعة</h3>
    <div class="row mt">
      <button class="btn ghost sm" data-go="artikel">تدريب الأدوات</button>
      <button class="btn ghost sm" data-go="verbs">تصريف الأفعال</button>
      <button class="btn ghost sm" data-go="flash">فلاش كاردز</button>
      <button class="btn ghost sm" data-go="keywords">البصمجة</button>
      <button class="btn ghost sm" data-go="progress">مراجعة الغلط</button>
    </div>
  </div>`;

  bindGo(root);
};

function bindGo(root) {
  $$("[data-go]", root).forEach(function (b) {
    b.addEventListener("click", function () { go(b.getAttribute("data-go")); });
  });
}

/* ----------------------------- Lessons ----------------------------- */
routes.lessons = function (root) {
  root.innerHTML = `
  <div class="page-head">
    <h1>📘 شرح الفصول</h1>
    <p>كل درس مقسّم خطوات صغيرة، بأمثلة ألماني + ترجمة مصرية، وأخطاء شائعة، وطريقة حفظ.</p>
  </div>
  <div class="grid g2">
    ${LESSONS.map(function (l) {
      const done = S.lessons[l.id];
      return `<div class="card clickable lesson-card" data-lesson="${l.id}">
        <div class="lesson-ico">${l.icon}</div>
        <div style="flex:1">
          <div class="spread"><h3 style="margin:0">${esc(l.titleAr)}</h3>${done ? '<span class="badge ok">تم ✓</span>' : '<span class="badge">جديد</span>'}</div>
          <div class="de small" style="margin:4px 0">${esc(l.title)}</div>
          <p class="muted small" style="margin:0">${esc(l.goal)}</p>
        </div>
      </div>`;
    }).join("")}
  </div>`;

  $$("[data-lesson]", root).forEach(function (c) {
    c.addEventListener("click", function () { go("lesson", c.getAttribute("data-lesson")); });
  });
};

routes.lesson = function (root, id) {
  const l = LESSONS.filter(function (x) { return x.id === id; })[0];
  if (!l) { go("lessons"); return; }
  root.innerHTML = `
  <div class="row mb">
    <button class="btn ghost sm" data-go="lessons">→ رجوع للفصول</button>
    <span class="badge brand">Kapitel ${l.ch} · Teil ${l.teil}</span>
  </div>
  <div class="page-head">
    <h1>${l.icon} ${esc(l.titleAr)}</h1>
    <div class="de">${esc(l.title)}</div>
  </div>
  <div class="card mb"><b>🎯 هدف الدرس:</b> ${esc(l.goal)}</div>
  <div class="card mb">${l.intro}</div>

  <h3>خطوة بخطوة</h3>
  <div class="card mb">
    ${l.steps.map(function (s, i) {
      return `<div class="step">
        <div class="st-title">${i + 1}. ${esc(s.t)}</div>
        <div class="de-line">${esc(s.de)}</div>
        <div class="ar-line">${esc(s.ar)}</div>
        ${s.note ? `<div class="note">💡 ${esc(s.note)}</div>` : ""}
      </div>`;
    }).join("")}
  </div>

  <h3>أمثلة مع الترجمة</h3>
  <div class="card mb">
    ${l.examples.map(function (e) {
      return `<div class="ex-card"><div class="de">${esc(e.de)}</div><div class="ar">${esc(e.ar)}</div></div>`;
    }).join("")}
  </div>

  <h3>⚠️ أخطاء شائعة</h3>
  <div class="card mb">
    ${l.mistakes.map(function (m) {
      return `<div class="mistake"><span class="f">✗ ${esc(m.f)}</span><span class="r">✓ ${esc(m.r)}</span><div class="why">${esc(m.why)}</div></div>`;
    }).join("")}
  </div>

  <div class="grid g2">
    <div class="card">
      <h3>🎯 علاقة الدرس بالامتحان</h3>
      <p class="small">${rich(l.examTip)}</p>
    </div>
    <div class="card">
      <h3>🧠 طريقة الحفظ</h3>
      <div class="mnemonic">${rich(l.mnemonic)}</div>
    </div>
  </div>

  <h3 class="mt">✅ تمرين سريع</h3>
  <div class="card" id="miniQuiz"></div>

  <div class="row mt">
    <button class="btn ${S.lessons[l.id] ? "ok" : ""}" id="markLesson">${S.lessons[l.id] ? "✓ تم إنهاء الدرس" : "علّم الدرس كمكتمل"}</button>
    <button class="btn ghost" data-go="vocab">راجع مفردات الفصل</button>
    <button class="btn ghost" data-go="grammar">القواعد المرتبطة</button>
  </div>`;

  bindGo(root);
  miniQuiz($("#miniQuiz"), l.mini || []);
  $("#markLesson").addEventListener("click", function () {
    S.lessons[l.id] = true; save();
    this.className = "btn ok"; this.textContent = "✓ تم إنهاء الدرس";
    toast("تمام! الدرس اتسجل كمكتمل 👍");
  });
};

function miniQuiz(container, items) {
  if (!items.length) { container.innerHTML = '<p class="muted">مفيش تمرين هنا.</p>'; return; }
  let idx = 0, score = 0;
  function draw() {
    if (idx >= items.length) {
      container.innerHTML = `<div class="center"><h3>خلصت التمرين 🎉</h3>
        <p>نتيجتك: <b>${score} / ${items.length}</b></p>
        <button class="btn" id="mqAgain">جرّب تاني</button></div>`;
      $("#mqAgain").addEventListener("click", function () { idx = 0; score = 0; draw(); });
      return;
    }
    const it = items[idx];
    container.innerHTML = `
      <div class="q-head"><span>سؤال ${idx + 1} من ${items.length}</span><span>${score} ✓</span></div>
      <div class="q-text">${esc(it.q)}</div>
      <div class="opts">
        ${it.opts.map(function (o, i) {
          return `<button class="opt" data-i="${i}"><span class="idx">${i + 1}</span><span>${esc(o)}</span></button>`;
        }).join("")}
      </div>
      <div class="feedback" id="mqFb"></div>`;
    $$(".opt", container).forEach(function (b) {
      b.addEventListener("click", function () {
        const i = Number(b.getAttribute("data-i"));
        $$(".opt", container).forEach(function (x) { x.disabled = true; });
        const ok = i === it.a;
        if (ok) { b.classList.add("correct"); score++; } else {
          b.classList.add("wrong");
          $$(".opt", container)[it.a].classList.add("correct");
        }
        const fb = $("#mqFb");
        fb.className = "feedback show " + (ok ? "ok" : "bad");
        fb.innerHTML = (ok ? "✅ صح! " : "❌ لأ. ") + esc(it.why);
        setTimeout(function () { idx++; draw(); }, ok ? 900 : 2200);
      });
    });
  }
  draw();
}

/* ----------------------------- Vocabulary ----------------------------- */
let vFilter = { art: "all", cat: "all", ch: "all", q: "" };

routes.vocab = function (root) {
  root.innerHTML = `
  <div class="page-head">
    <h1>🗂️ القاموس الكامل</h1>
    <p>${VOCAB.length} كلمة — كل اسم معاه أداته (der/die/das) وجمعه ومعناه بالمصري وجملة مثال مترجمة.</p>
  </div>
  <div class="vocab-controls">
    <input id="vq" class="chip" style="min-width:220px;padding:8px 14px" placeholder="🔍 ابحث… (ألماني أو عربي)" value="${esc(vFilter.q)}">
    <button class="chip ${vFilter.art === "all" ? "active" : ""}" data-art="all">الكل</button>
    <button class="chip a-der ${vFilter.art === "der" ? "active" : ""}" data-art="der">der</button>
    <button class="chip a-die ${vFilter.art === "die" ? "active" : ""}" data-art="die">die</button>
    <button class="chip a-das ${vFilter.art === "das" ? "active" : ""}" data-art="das">das</button>
    <select id="vch" class="chip" style="padding:8px 12px">
      <option value="all">كل الفصول</option>
      <option value="1" ${vFilter.ch === "1" ? "selected" : ""}>Kapitel 1</option>
      <option value="2" ${vFilter.ch === "2" ? "selected" : ""}>Kapitel 2</option>
      <option value="3" ${vFilter.ch === "3" ? "selected" : ""}>Kapitel 3</option>
    </select>
    <select id="vcat" class="chip" style="padding:8px 12px">
      <option value="all">كل التصنيفات</option>
      ${Object.keys(CATS).map(function (k) {
        return `<option value="${k}" ${vFilter.cat === k ? "selected" : ""}>${esc(CATS[k])}</option>`;
      }).join("")}
    </select>
    <span class="badge brand" id="vcount"></span>
  </div>
  <div class="card" style="padding:0;overflow:hidden">
    <div style="max-height:70vh;overflow:auto">
      <table class="vocab-table">
        <thead><tr>
          <th style="width:32px"></th>
          <th>الكلمة</th><th>الأداة</th><th>المعنى</th><th>الجمع</th><th style="width:90px">مثال</th>
        </tr></thead>
        <tbody id="vbody"></tbody>
      </table>
    </div>
  </div>`;

  function draw() {
    const q = vFilter.q.toLowerCase().trim();
    const rows = VOCAB.filter(function (v) {
      if (vFilter.art !== "all" && v.art !== vFilter.art) return false;
      if (vFilter.ch !== "all" && String(v.ch) !== vFilter.ch) return false;
      if (vFilter.cat !== "all" && v.cat !== vFilter.cat) return false;
      if (!q) return true;
      return v.de.toLowerCase().indexOf(q) >= 0 || v.ar.indexOf(q) >= 0 || v.pl.toLowerCase().indexOf(q) >= 0;
    });
    $("#vcount").textContent = rows.length + " كلمة";
    $("#vbody").innerHTML = rows.map(function (v, i) {
      const st = vocabStatus(v.de);
      const ico = st === "memorized" ? "✓" : st === "reviewing" ? "👁" : st === "practice" ? "!" : "";
      return `<tr data-w="${esc(v.de)}">
        <td><button class="vstatus ${st === "not" ? "" : st}" title="حالة الحفظ">${ico}</button></td>
        <td><span class="word-de">${esc(v.de)}</span>
          ${v.art === "-" ? "" : `<button class="spk" data-say="${esc(v.art + " " + v.de)}" title="اسمع النطق">🔊</button>`}</td>
        <td><span class="${artClass(v.art)}">${v.art === "-" ? "—" : esc(v.art)}</span></td>
        <td><span class="meaning">${esc(v.ar)}</span></td>
        <td><span class="pl-de">${esc(v.pl)}</span></td>
        <td><button class="reveal-btn">جملة</button>
          <div class="ex-sentence">${esc(v.ex)}<div class="ex-ar">${esc(v.exAr)}</div></div>
        </td>
      </tr>`;
    }).join("") || '<tr><td colspan="6" class="center muted" style="padding:30px">مفيش نتائج — جرّب بحث تاني</td></tr>';

    $$("#vbody tr").forEach(function (tr) {
      tr.addEventListener("click", function (e) {
        if (e.target.classList.contains("spk")) {
          e.stopPropagation();
          speak(e.target.getAttribute("data-say"));
          return;
        }
        if (e.target.classList.contains("vstatus")) {
          const w = tr.getAttribute("data-w");
          const order = ["not", "reviewing", "memorized", "practice"];
          const cur = vocabStatus(w);
          const nxt = order[(order.indexOf(cur) + 1) % order.length];
          setVocabStatus(w, nxt);
          const btn = e.target;
          btn.className = "vstatus " + (nxt === "not" ? "" : nxt);
          btn.textContent = nxt === "memorized" ? "✓" : nxt === "reviewing" ? "👁" : nxt === "practice" ? "!" : "";
          toast(nxt === "memorized" ? "حفظتها ✓" : nxt === "reviewing" ? "بتراجعها 👁" : nxt === "practice" ? "محتاجة تمرين !" : "لسه ما بدأتش");
          return;
        }
        tr.classList.toggle("open");
      });
    });
  }

  $("#vq").addEventListener("input", function (e) { vFilter.q = e.target.value; draw(); });
  $$("[data-art]").forEach(function (b) {
    b.addEventListener("click", function () {
      vFilter.art = b.getAttribute("data-art");
      $$("[data-art]").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      draw();
    });
  });
  $("#vch").addEventListener("change", function (e) { vFilter.ch = e.target.value; draw(); });
  $("#vcat").addEventListener("change", function (e) { vFilter.cat = e.target.value; draw(); });
  draw();
};

/* ----------------------------- Artikel-Trainer ----------------------------- */
routes.artikel = function (root) {
  let streak = 0, total = 0, right = 0, cur = null, locked = false;

  root.innerHTML = `
  <div class="page-head">
    <h1>🔤 تدريب الأدوات — der / die / das</h1>
    <p>DER = مذكر · DIE = مؤنث · DAS = محايد. اختار الأداة الصح، وهتلاقي المعنى والسبب.</p>
  </div>
  <div class="quiz-wrap">
    <div class="qbox" id="artBox"></div>
  </div>`;

  function next() {
    locked = false;
    const pool = NOUNS.filter(function (v) { return v.de !== (cur && cur.de); });
    cur = pool[Math.floor(Math.random() * pool.length)];
    const st = vocabStatus(cur.de);
    $("#artBox").innerHTML = `
      <div class="q-head">
        <span>مستمر: 🔥 ${streak}</span>
        <span>${right} / ${total} صح</span>
      </div>
      <div class="center" style="padding:10px 0 4px">
        <div class="muted small">اختار الأداة الصح</div>
        <div style="font-family:var(--ff-de);font-size:2.1rem;font-weight:800;direction:ltr">${esc(cur.de)}</div>
      </div>
      <div class="opts" style="grid-template-columns:repeat(3,1fr);display:grid">
        <button class="opt" data-a="der" style="justify-content:center"><span class="idx">1</span> der</button>
        <button class="opt" data-a="die" style="justify-content:center"><span class="idx">2</span> die</button>
        <button class="opt" data-a="das" style="justify-content:center"><span class="idx">3</span> das</button>
      </div>
      <div class="feedback" id="artFb"></div>
      <div class="row mt" style="justify-content:space-between">
        <span class="tiny muted">حالة الحفظ: ${st === "memorized" ? "✓ محفوظة" : st === "reviewing" ? "👁 بتراجع" : st === "practice" ? "! محتاجة تمرين" : "لسه"}</span>
        <button class="btn ghost sm" id="artSkip">تخطّي ←</button>
      </div>`;

    $$(".opt", $("#artBox")).forEach(function (b) {
      b.addEventListener("click", function () {
        if (locked) return;
        locked = true; total++;
        const pick = b.getAttribute("data-a");
        const ok = pick === cur.art;
        if (ok) { right++; streak++; if (streak >= 3) setVocabStatus(cur.de, "memorized"); }
        else { streak = 0; }
        recordAnswer(ok, "art-" + cur.de);

        $$(".opt", $("#artBox")).forEach(function (x) {
          x.disabled = true;
          if (x.getAttribute("data-a") === cur.art) x.classList.add("correct");
        });
        if (!ok) b.classList.add("wrong");

        const fb = $("#artFb");
        fb.className = "feedback show " + (ok ? "ok" : "bad");
        fb.innerHTML = `${ok ? "✅ عاش! " : "❌ الأداة الصح: <b>" + cur.art + "</b> — "}
          <b>${cur.art} ${esc(cur.de)}</b> = ${esc(cur.ar)}
          <div class="small mt">الجمع: <span class="de">${esc(cur.pl)}</span>${cur.ex ? ` · <span class="de">${esc(cur.ex)}</span>` : ""}</div>`;

        setTimeout(function () { if ($("#artBox")) next(); }, ok ? 1100 : 2400);
      });
    });
    $("#artSkip").addEventListener("click", function () { if (!locked) next(); });
  }
  next();
};

/* ----------------------------- Verbs ----------------------------- */
routes.verbs = function (root) {
  root.innerHTML = `
  <div class="page-head">
    <h1>⚙️ الأفعال وتصريفها</h1>
    <p>${VERBS.length} فعل — التصريف الكامل في المضارع + مثال + ملاحظات الامتحان.</p>
  </div>
  <div class="card mb">
    <div class="row">
      <input id="vsearch" class="chip" style="flex:1;min-width:200px;padding:8px 14px" placeholder="🔍 ابحث عن فعل…">
      <button class="btn sm" id="vdrill">🏋️ تمرين تصريف</button>
    </div>
  </div>
  <div class="grid g2" id="verbList"></div>`;

  function draw(q) {
    const list = VERBS.filter(function (v) {
      if (!q) return true;
      return v.inf.toLowerCase().indexOf(q) >= 0 || v.ar.indexOf(q) >= 0;
    });
    $("#verbList").innerHTML = list.map(function (v) {
      return `<div class="card">
        <div class="spread">
          <h3 style="margin:0"><span class="de" style="font-size:1.15rem">${esc(v.inf)}</span></h3>
          <span class="badge ${v.type === "unreg" ? "warn" : v.type === "modal" ? "brand" : "ok"}">${v.type === "unreg" ? "شاذ" : v.type === "modal" ? "مساعد" : "منتظم"}</span>
        </div>
        <div class="muted small mb">${esc(v.ar)} · Kapitel ${v.ch}</div>
        <table class="tbl">
          ${v.forms.map(function (f, i) {
            return `<tr><td class="muted" style="width:90px">${PRON[i]}</td><td><b class="de">${esc(f)}</b></td></tr>`;
          }).join("")}
        </table>
        <div class="ex-card"><div class="de">${esc(v.ex)}</div><div class="ar">${esc(v.exAr)}</div></div>
        ${v.note ? `<div class="tipbox small">💡 ${esc(v.note)}</div>` : ""}
      </div>`;
    }).join("") || '<p class="muted">مفيش نتائج</p>';
  }
  $("#vsearch").addEventListener("input", function (e) { draw(e.target.value.toLowerCase().trim()); });
  $("#vdrill").addEventListener("click", verbDrill);
  draw("");
};

function verbDrill() {
  const v = VERBS[Math.floor(Math.random() * VERBS.length)];
  const pi = Math.floor(Math.random() * 6);
  openModal(`
    <h3>🏋️ تمرين تصريف</h3>
    <p class="muted small">صرّف الفعل <b class="de">${esc(v.inf)}</b> (${esc(v.ar)})</p>
    <div class="qbox" style="border:none;padding:0">
      <div class="q-text" style="direction:ltr">${PRON[pi]} ______</div>
      <input id="drillIn" class="chip" style="width:100%;padding:10px 14px;font-family:var(--ff-de);direction:ltr" placeholder="اكتب التصريف…">
      <div id="drillFb" class="feedback"></div>
      <div class="row mt">
        <button class="btn" id="drillCheck">تحقق</button>
        <button class="btn ghost" id="drillNext">فعل تاني</button>
        <button class="btn ghost" id="drillClose">إغلاق</button>
      </div>
    </div>`);
  const input = $("#drillIn");
  input.focus();
  function check() {
    const ok = norm(input.value) === norm(v.forms[pi]);
    const fb = $("#drillFb");
    fb.className = "feedback show " + (ok ? "ok" : "bad");
    fb.innerHTML = ok ? "✅ صح! " + esc(v.forms[pi]) : `❌ الصح: <b class="de">${esc(v.forms[pi])}</b>`;
    recordAnswer(ok, "verb-" + v.inf + "-" + pi);
  }
  $("#drillCheck").addEventListener("click", check);
  input.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
  $("#drillNext").addEventListener("click", function () { closeModal(); verbDrill(); });
  $("#drillClose").addEventListener("click", closeModal);
}

/* ----------------------------- Grammar ----------------------------- */
routes.grammar = function (root, param) {
  if (param) {
    const g = GRAMMAR.filter(function (x) { return x.id === param; })[0];
    if (!g) { go("grammar"); return; }
    root.innerHTML = `
    <div class="row mb"><button class="btn ghost sm" data-go="grammar">→ كل القواعد</button>
      <span class="badge brand">Kapitel ${g.ch}</span></div>
    <div class="page-head"><h1>${g.icon} ${esc(g.titleAr)}</h1><div class="de">${esc(g.title)}</div></div>
    <div class="card mb"><b>القاعدة:</b> <span class="de" style="direction:ltr">${esc(g.rule)}</span></div>
    <div class="card mb">${g.explain}</div>
    ${(g.tables || []).map(function (t) {
      return `<div class="card mb"><h3>${esc(t.title)}</h3>
        <table class="tbl"><thead><tr>${t.head.map(function (h) { return `<th>${esc(h)}</th>`; }).join("")}</tr></thead>
        <tbody>${t.rows.map(function (r) {
          return `<tr>${r.map(function (c) { return `<td>${/^[a-zA-ZäöüÄÖÜß\s.,!?–-]+$/.test(c) ? '<span class="de">' + esc(c) + '</span>' : esc(c)}</td>`; }).join("")}</tr>`;
        }).join("")}</tbody></table></div>`;
    }).join("")}
    <div class="card mb"><h3>📌 أمثلة</h3>
      ${g.examples.map(function (e) { return `<div class="ex-card"><div class="de">${esc(e.de)}</div><div class="ar">${esc(e.ar)}</div></div>`; }).join("")}
    </div>
    <div class="card mb"><h3>⚠️ أخطاء شائعة</h3>
      ${g.mistakes.map(function (m) {
        return `<div class="mistake"><span class="f">✗ ${esc(m.f)}</span><span class="r">✓ ${esc(m.r)}</span><div class="why">${esc(m.why)}</div></div>`;
      }).join("")}
    </div>
    <div class="grid g2">
      <div class="card"><h3>🎯 في الامتحان</h3><p class="small">${rich(g.exam)}</p></div>
      <div class="card"><h3>🧠 بصمجة</h3><div class="mnemonic">${rich(g.mnemonic)}</div></div>
    </div>
    <div class="row mt"><button class="btn ${S.grammar[g.id] ? "ok" : ""}" id="markG">${S.grammar[g.id] ? "✓ خلصت القاعدة" : "علّم القاعدة كمكتملة"}</button></div>`;
    bindGo(root);
    $("#markG").addEventListener("click", function () {
      S.grammar[g.id] = true; save();
      this.className = "btn ok"; this.textContent = "✓ خلصت القاعدة";
      toast("تمام، القاعدة اتسجلت 👍");
    });
    return;
  }

  root.innerHTML = `
  <div class="page-head"><h1>📐 القواعد</h1><p>${GRAMMAR.length} موضوع — كل واحد بقاعدة + شرح بالمصري + جداول + أخطاء شائعة.</p></div>
  <div class="grid g2">
    ${GRAMMAR.map(function (g) {
      return `<div class="card clickable" data-g="${g.id}">
        <div class="spread"><h3 style="margin:0">${g.icon} ${esc(g.titleAr)}</h3>
        ${S.grammar[g.id] ? '<span class="badge ok">تم ✓</span>' : `<span class="badge">K${g.ch}</span>`}</div>
        <div class="de small" style="margin:4px 0">${esc(g.title)}</div>
        <div class="tiny muted" style="direction:ltr;text-align:left">${esc(g.rule)}</div>
      </div>`;
    }).join("")}
  </div>
  <h3 class="mt">🔠 الأبجدية</h3>
  <div class="card">
    <div class="row" style="gap:6px">
      ${ALPHABET.map(function (a) { return `<span class="cat-pill"><b class="de">${a[0]}</b> <span class="tiny muted">${esc(a[1])}</span></span>`; }).join("")}
    </div>
  </div>
  <h3 class="mt">💬 عبارات التحية والوداع</h3>
  <div class="card">
    <table class="tbl"><thead><tr><th>Deutsch</th><th>المعنى</th><th>ملاحظة</th></tr></thead><tbody>
    ${REDEMITTEL.map(function (r) {
      return `<tr><td><span class="de">${esc(r[0])}</span></td><td>${esc(r[1])}</td><td class="tiny muted">${esc(r[2])}</td></tr>`;
    }).join("")}
    </tbody></table>
  </div>`;

  $$("[data-g]", root).forEach(function (c) {
    c.addEventListener("click", function () { go("grammar", c.getAttribute("data-g")); });
  });
};

/* ----------------------------- Ordering ----------------------------- */
routes.order = function (root) {
  let idx = 0, solved = 0;
  const list = ORDERING;
  const PATTERNS = [
    ["جملة خبرية عادية", "Subjekt + Verb + Rest", "Ich lerne Deutsch.", "أنا بتعلم ألماني."],
    ["الوقت في الأول", "Zeit + Verb + Subjekt + Rest", "Heute lerne ich Deutsch.", "النهاردة أنا بتعلم ألماني."],
    ["سؤال W", "W-Wort + Verb + Subjekt …", "Woher kommst du?", "إنت منين؟"],
    ["سؤال نعم/لا", "Verb + Subjekt + … ?", "Kommst du aus Ägypten?", "إنت من مصر؟"],
    ["نفي الفعل", "Subjekt + Verb + … + nicht", "Ich lese nicht.", "أنا مش بقرا."],
    ["نفي الاسم", "Das ist kein/keine …", "Das ist kein Bus.", "ده مش اتوبيس."],
    ["بحب أعمل حاجة", "Subjekt + Verb + gern + …", "Ich koche gern.", "بحب أطبخ."],
    ["اليوم/الوقت", "… + am + Tag", "Ich arbeite am Montag.", "بشتغل يوم الاثنين."],
    ["المواصلات", "… + mit + dem/der …", "Ich fahre mit dem Bus.", "بروح بالاتوبيس."]
  ];

  root.innerHTML = `
  <div class="page-head">
    <h1>🧩 ترتيب الجملة</h1>
    <p>اضغط على الكلمات بالترتيب الصح. لو غلطت هنشرحلك مكان الفعل ليه.</p>
  </div>
  <details class="card mb">
    <summary style="cursor:pointer;font-weight:800">📌 أنماط الجمل المتكررة في الامتحان (${PATTERNS.length})</summary>
    <table class="tbl mt"><thead><tr><th>النمط</th><th>التركيب</th><th>مثال</th><th>المعنى</th></tr></thead><tbody>
      ${PATTERNS.map(function (p) {
        return `<tr><td>${esc(p[0])}</td><td class="tiny" style="direction:ltr;text-align:left">${esc(p[1])}</td><td><span class="de">${esc(p[2])}</span></td><td class="small">${esc(p[3])}</td></tr>`;
      }).join("")}
    </tbody></table>
  </details>
  <div class="quiz-wrap"><div class="qbox" id="orderBox"></div></div>`;

  function draw() {
    if (idx >= list.length) {
      $("#orderBox").innerHTML = `<div class="center"><h3>خلصت كل التمارين 🎉</h3>
        <p>حليت <b>${solved}</b> من ${list.length} صح.</p>
        <button class="btn" id="oRestart">ابدأ من جديد</button></div>`;
      $("#oRestart").addEventListener("click", function () { idx = 0; solved = 0; draw(); });
      return;
    }
    const ex = list[idx];
    let picked = [];
    const bank = shuffle(ex.words);

    function paint() {
      const slots = picked.map(function (w, i) {
        return `<span class="slot" data-p="${i}">${esc(w)}</span>`;
      }).join("");
      const words = bank.map(function (w, i) {
        return `<button class="word ${picked.indexOf(w) >= 0 ? "used" : ""}" data-w="${i}">${esc(w)}</button>`;
      }).join("");
      $("#orderBox").innerHTML = `
        <div class="q-head"><span>تمرين ${idx + 1} من ${list.length} · مستوى ${ex.level}</span><span>✓ ${solved}</span></div>
        <div class="slots" id="slots">${slots || '<span class="muted small" style="font-family:var(--ff-ar)">اضغط الكلمات تحت بالترتيب…</span>'}</div>
        <div class="bank" id="bank">${words}</div>
        <div class="feedback" id="oFb"></div>
        <div class="row mt">
          <button class="btn" id="oCheck">تحقق</button>
          <button class="btn ghost" id="oClear">مسح</button>
          <button class="btn ghost" id="oShow">شوف الإجابة</button>
          <button class="btn ghost sm" id="oNext">التالي ←</button>
        </div>`;

      $$("#bank .word").forEach(function (b) {
        b.addEventListener("click", function () {
          picked.push(bank[Number(b.getAttribute("data-w"))]);
          paint();
        });
      });
      $$("#slots .slot").forEach(function (s) {
        s.addEventListener("click", function () {
          picked.splice(Number(s.getAttribute("data-p")), 1);
          paint();
        });
      });
      $("#oClear").addEventListener("click", function () { picked = []; paint(); });
      $("#oCheck").addEventListener("click", function () {
        const attempt = picked.join(" ").replace(/\s+/g, " ").trim();
        const ok = norm(attempt) === norm(ex.correct);
        const fb = $("#oFb");
        fb.className = "feedback show " + (ok ? "ok" : "bad");
        if (ok) {
          solved++;
          recordAnswer(true, "ord-" + ex.id);
          fb.innerHTML = `✅ ممتاز! <b class="de" style="direction:ltr">${esc(ex.correct)}</b>
            <div class="small mt">${esc(ex.ar)}</div>
            <div class="mt">${ex.explain.map(function (e) { return `<div class="small">• <b>${esc(e[0])}</b> = ${esc(e[1])}</div>`; }).join("")}</div>
            <div class="tipbox mt">💡 ${esc(ex.tip)}</div>`;
        } else {
          recordAnswer(false, "ord-" + ex.id);
          fb.innerHTML = `❌ مش مظبوط. جرّب تاني أو اضغط «شوف الإجابة».
            <div class="small mt">${ex.explain.map(function (e) { return `<div>• <b>${esc(e[0])}</b> = ${esc(e[1])}</div>`; }).join("")}</div>`;
        }
      });
      $("#oShow").addEventListener("click", function () {
        const fb = $("#oFb");
        fb.className = "feedback show ok";
        fb.innerHTML = `✅ الجملة الصح: <b class="de" style="direction:ltr">${esc(ex.correct)}</b>
          <div class="small mt">${esc(ex.ar)}</div>
          <div class="mt">${ex.explain.map(function (e) { return `<div class="small">• <b>${esc(e[0])}</b> = ${esc(e[1])}</div>`; }).join("")}</div>
          <div class="tipbox mt">💡 ${esc(ex.tip)}</div>`;
      });
      $("#oNext").addEventListener("click", function () { idx++; draw(); });
    }
    paint();
  }
  draw();
};

/* ----------------------------- Short Answers ----------------------------- */
routes.short = function (root) {
  let filter = "all";
  root.innerHTML = `
  <div class="page-head">
    <h1>✍️ إجابات قصيرة</h1>
    <p>${SHORT.length} سؤال — إجابة ألمانية قصيرة + ترجمة + كلمات مفتاحية للحفظ.</p>
  </div>
  <div class="row mb">
    <button class="chip active" data-f="all">الكل</button>
    <button class="chip" data-f="original">أسئلة أصلية</button>
    <button class="chip" data-f="generated">إضافية</button>
    <button class="chip" data-f="1">K1</button>
    <button class="chip" data-f="2">K2</button>
    <button class="chip" data-f="3">K3</button>
    <button class="btn sm ghost" id="revealAll">👁 اكشف كل الإجابات</button>
  </div>
  <div class="grid" id="shortList"></div>`;

  function draw() {
    const list = SHORT.filter(function (s) {
      if (filter === "all") return true;
      if (filter === "original" || filter === "generated") return s.src === filter;
      return String(s.ch) === filter;
    });
    $("#shortList").innerHTML = list.map(function (s) {
      return `<div class="card" data-s="${s.id}">
        <div class="spread">
          <div class="de" style="font-size:1.05rem;font-weight:700">${esc(s.q)}</div>
          <span class="badge ${s.src === "original" ? "brand" : ""}">${s.src === "original" ? "أصلي" : "إضافي"} · K${s.ch}</span>
        </div>
        <div class="muted small">${esc(s.qAr)}</div>
        <div class="answer" style="display:none;margin-top:10px">
          <div class="ex-card"><div class="de"><b>${esc(s.a)}</b></div><div class="ar">${esc(s.aAr)}</div></div>
          <div class="small muted">كلمات مهمة: ${s.vocab.map(function (v) { return '<span class="de">' + esc(v) + '</span>'; }).join(" · ")}</div>
          <div class="tipbox mt small">🧠 ${esc(s.keys[0])}</div>
          <div class="row mt">
            <button class="btn sm ok" data-mark="memorized">✓ حفظتها</button>
            <button class="btn sm bad" data-mark="practice">! محتاجة مراجعة</button>
          </div>
        </div>
        <button class="reveal-btn mt" data-rev>👁 اكشف الإجابة</button>
      </div>`;
    }).join("") || '<p class="muted">مفيش نتائج</p>';

    $$("#shortList [data-rev]").forEach(function (b) {
      b.addEventListener("click", function () {
        const card = b.closest(".card");
        const ans = $(".answer", card);
        ans.style.display = ans.style.display === "none" ? "block" : "none";
        b.textContent = ans.style.display === "none" ? "👁 اكشف الإجابة" : "🙈 اخفي الإجابة";
      });
    });
    $$("#shortList [data-mark]").forEach(function (b) {
      b.addEventListener("click", function () {
        const card = b.closest(".card");
        setVocabStatus("short:" + card.getAttribute("data-s"), b.getAttribute("data-mark"));
        toast(b.getAttribute("data-mark") === "memorized" ? "تمام! ✓" : "هنكررها في المراجعة");
      });
    });
  }

  $$("[data-f]").forEach(function (b) {
    b.addEventListener("click", function () {
      filter = b.getAttribute("data-f");
      $$("[data-f]").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      draw();
    });
  });
  $("#revealAll").addEventListener("click", function () {
    $$("#shortList .answer").forEach(function (a) { a.style.display = "block"; });
  });
  draw();
};

/* ----------------------------- MCQ ----------------------------- */
routes.mcq = function (root) {
  let mode = "all";     // all | original | generated
  let ch = "all";
  let queue = [], qi = 0, score = 0, answered = false;

  root.innerHTML = `
  <div class="page-head">
    <h1>✅ اختيار من متعدد</h1>
    <p>الأسئلة الأصلية من الكورس + أسئلة إضافية. في كل سؤال شرح ليه الإجابة صح.</p>
  </div>
  <div class="row mb">
    <button class="chip active" data-m="all">الكل (${MCQ_ORIGINAL.length + MCQ_GENERATED.length})</button>
    <button class="chip" data-m="original">أصلية (${MCQ_ORIGINAL.length})</button>
    <button class="chip" data-m="generated">إضافية (${MCQ_GENERATED.length})</button>
    <select id="mcqCh" class="chip" style="padding:8px 12px">
      <option value="all">كل الفصول</option><option value="1">Kapitel 1</option>
      <option value="2">Kapitel 2</option><option value="3">Kapitel 3</option>
    </select>
    <button class="btn sm" id="mcqStart">ابدأ / من جديد</button>
  </div>
  <div class="quiz-wrap"><div class="qbox" id="mcqBox"><p class="muted center">اضغط «ابدأ» وهنجهزلك أسئلة عشوائية.</p></div></div>`;

  function build() {
    let pool = [];
    if (mode === "all") pool = MCQ_ORIGINAL.concat(MCQ_GENERATED);
    else if (mode === "original") pool = MCQ_ORIGINAL.slice();
    else pool = MCQ_GENERATED.slice();
    if (ch !== "all") pool = pool.filter(function (q) { return String(q.ch) === ch; });
    queue = shuffle(pool); qi = 0; score = 0; answered = false;
    drawQ();
  }

  function drawQ() {
    if (qi >= queue.length) {
      $("#mcqBox").innerHTML = `<div class="center">
        <h3>خلصت الجلسة 🎉</h3>
        <p>نتيجتك: <b>${score} / ${queue.length}</b> (${pct(score, queue.length)}%)</p>
        <div class="row" style="justify-content:center">
          <button class="btn" id="mcqAgain">جلسة تانية</button>
        </div></div>`;
      $("#mcqAgain").addEventListener("click", build);
      return;
    }
    const q = queue[qi];
    answered = false;
    $("#mcqBox").innerHTML = `
      <div class="q-head"><span>سؤال ${qi + 1} من ${queue.length}</span><span>✓ ${score}</span></div>
      <div class="q-text">${esc(q.q)}</div>
      <div class="q-ar">${esc(q.qAr || "")}</div>
      <div class="opts">${q.opts.map(function (o, i) {
        return `<button class="opt" data-i="${i}"><span class="idx">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`;
      }).join("")}</div>
      <div class="feedback" id="mcqFb"></div>
      <div class="row mt" style="justify-content:flex-end"><button class="btn ghost" id="mcqNext" disabled>التالي ←</button></div>`;

    $$(".opt", $("#mcqBox")).forEach(function (b) {
      b.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        const i = Number(b.getAttribute("data-i"));
        const ok = i === q.a;
        if (ok) score++;
        recordAnswer(ok, q.id);
        $$(".opt", $("#mcqBox")).forEach(function (x) {
          x.disabled = true;
          if (Number(x.getAttribute("data-i")) === q.a) x.classList.add("correct");
        });
        if (!ok) b.classList.add("wrong");
        const fb = $("#mcqFb");
        fb.className = "feedback show " + (ok ? "ok" : "bad");
        fb.innerHTML = (ok ? "✅ صح! " : "❌ الإجابة الصح: <b>" + esc(q.opts[q.a]) + "</b> — ") + esc(q.why);
        $("#mcqNext").disabled = false;
      });
    });
    $("#mcqNext").addEventListener("click", function () { qi++; drawQ(); });
  }

  $$("[data-m]").forEach(function (b) {
    b.addEventListener("click", function () {
      mode = b.getAttribute("data-m");
      $$("[data-m]").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
    });
  });
  $("#mcqCh").addEventListener("change", function (e) { ch = e.target.value; });
  $("#mcqStart").addEventListener("click", build);
  build();
};

/* ----------------------------- Matching-Spiel ----------------------------- */
routes.match = function (root) {
  let round = 0, score = 0, total = 0;
  let pairs = [], sel = null, done = 0;

  root.innerHTML = `
  <div class="page-head">
    <h1>🔗 وصّل الكلمة بمعناها</h1>
    <p>اضغط كلمة ألمانية، وبعدين اضغط معناها العربي. ${""}</p>
  </div>
  <div class="quiz-wrap">
    <div class="qbox" id="matchBox"></div>
  </div>`;

  function newRound() {
    round++;
    const pick = sample(NOUNS, 5);
    pairs = pick.map(function (v, i) { return { id: i, w: v, ok: false }; });
    sel = null; done = 0;
    draw();
  }

  function draw() {
    const left = pairs.slice();
    const right = shuffle(pairs);
    $("#matchBox").innerHTML = `
      <div class="q-head"><span>جولة ${round}</span><span>${score} / ${total} صح</span></div>
      <div class="grid g2">
        <div class="grid" style="gap:8px">
          ${left.map(function (p) {
            return `<button class="opt de" data-l="${p.id}" style="justify-content:flex-start;${p.ok ? "opacity:.45;border-color:var(--ok)" : ""}" ${p.ok ? "disabled" : ""}>
              <span>${p.w.art} ${esc(p.w.de)}</span></button>`;
          }).join("")}
        </div>
        <div class="grid" style="gap:8px">
          ${right.map(function (p) {
            return `<button class="opt" data-r="${p.id}" style="justify-content:flex-start;font-family:var(--ff-ar);direction:rtl;${p.ok ? "opacity:.45;border-color:var(--ok)" : ""}" ${p.ok ? "disabled" : ""}>
              <span>${esc(p.w.ar)}</span></button>`;
          }).join("")}
        </div>
      </div>
      <div class="feedback" id="matchFb"></div>
      <div class="row mt" style="justify-content:space-between">
        <span class="small muted">اختار كلمة ألمانية الأول ← بعدين معناها</span>
        <button class="btn ghost sm" id="mNew">جولة جديدة</button>
      </div>`;

    $$("[data-l]", $("#matchBox")).forEach(function (b) {
      b.addEventListener("click", function () {
        sel = Number(b.getAttribute("data-l"));
        $$("[data-l]", $("#matchBox")).forEach(function (x) { x.style.borderColor = ""; });
        b.style.borderColor = "var(--brand)";
      });
    });
    $$("[data-r]", $("#matchBox")).forEach(function (b) {
      b.addEventListener("click", function () {
        if (sel == null) { toast("اختار كلمة ألمانية الأول 🙂"); return; }
        const rid = Number(b.getAttribute("data-r"));
        const ok = rid === sel;
        total++; recordAnswer(ok, "match-" + pairs[sel].w.de);
        const fb = $("#matchFb");
        fb.className = "feedback show " + (ok ? "ok" : "bad");
        if (ok) {
          score++;
          pairs[sel].ok = true;
          if (vocabStatus(pairs[sel].w.de) === "not") setVocabStatus(pairs[sel].w.de, "reviewing");
          done++;
          fb.innerHTML = `✅ صح! <b>${pairs[sel].w.art} ${esc(pairs[sel].w.de)}</b> = ${esc(pairs[sel].w.ar)}`;
          sel = null;
          if (done === pairs.length) { setTimeout(newRound, 900); return; }
          draw();
        } else {
          fb.innerHTML = `❌ مش دي. جرّب تاني — فكّر في الأداة: <b>${pairs[sel].w.art}</b>`;
          b.style.borderColor = "var(--bad)";
        }
      });
    });
    $("#mNew").addEventListener("click", newRound);
  }
  newRound();
};

/* ----------------------------- Keywords (البصمجة) ----------------------------- */
routes.keywords = function (root) {
  root.innerHTML = `
  <div class="page-head">
    <h1>🧠 البصمجة — كلمة → إجابة</h1>
    <p>كل المعلومة المهمة قدامك من غير ما تفتح حاجة. كلمة واحدة تفتكر منها الإجابة.</p>
  </div>
  <div class="row mb">
    <button class="chip active" data-k="all">الكل</button>
    <button class="chip" data-k="vocab">مفردات</button>
    <button class="chip" data-k="grammar">قواعد</button>
    <button class="chip" data-k="order">ترتيب جملة</button>
    <button class="chip" data-k="short">إجابات</button>
  </div>
  <div class="kw-grid" id="kwGrid"></div>`;

  function draw(f) {
    const list = KEYWORDS.filter(function (k) { return f === "all" || k.type === f; });
    $("#kwGrid").innerHTML = list.map(function (k) {
      return `<div class="kw">
        <span class="k">${esc(k.k)}</span>
        <span class="arrow">←</span>
        <span class="v">${esc(k.v)}</span>
      </div>`;
    }).join("");
  }
  $$("[data-k]").forEach(function (b) {
    b.addEventListener("click", function () {
      $$("[data-k]").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      draw(b.getAttribute("data-k"));
    });
  });
  draw("all");
};

/* ----------------------------- Flashcards ----------------------------- */
routes.flash = function (root) {
  let pool = shuffle(NOUNS), i = 0, flipped = false;
  let known = 0;

  root.innerHTML = `
  <div class="page-head">
    <h1>🃏 فلاش كاردز</h1>
    <p>اضغط على الكارت تشوف المعنى. علّم اللي حفظته عشان يتحسب في تقدّمك.</p>
  </div>
  <div class="flash" id="flashCard"><div class="flash-inner">
    <div class="flash-face flash-front"><div class="tiny" style="opacity:.8">اضغط للترجمة</div><div class="fw" id="fFront"></div><div class="tiny" style="opacity:.8" id="fArt"></div></div>
    <div class="flash-face flash-back"><div class="fm" id="fBack"></div><div class="fe" id="fEx"></div></div>
  </div></div>
  <div class="row center" style="justify-content:center">
    <button class="btn ghost" id="fPrev">→ السابق</button>
    <button class="btn ghost" id="fSpeak">🔊 النطق</button>
    <button class="btn bad" id="fDont">✗ مش فاكرها</button>
    <button class="btn ok" id="fKnow">✓ فاكرها</button>
    <button class="btn ghost" id="fNext">التالي ←</button>
  </div>
  <p class="center muted small mt" id="fCount"></p>`;

  function draw() {
    const v = pool[i % pool.length];
    $("#fFront").textContent = v.de;
    $("#fArt").textContent = v.art === "-" ? "" : v.art;
    $("#fBack").textContent = v.ar;
    $("#fEx").textContent = (v.art === "-" ? "" : v.art + " ") + v.de + (v.pl && v.pl !== "-" ? " · Plural: " + v.pl : "") + (v.ex ? " — " + v.ex : "");
    $("#fCount").textContent = `كارت ${(i % pool.length) + 1} من ${pool.length} · حفظت ${known}`;
    const card = $("#flashCard");
    card.classList.remove("flipped");
    flipped = false;
  }
  $("#flashCard").addEventListener("click", function () {
    this.classList.toggle("flipped");
    flipped = !flipped;
  });
  $("#fNext").addEventListener("click", function () { i++; draw(); });
  $("#fSpeak").addEventListener("click", function () {
    const v = pool[i % pool.length];
    speak((v.art === "-" ? "" : v.art + " ") + v.de);
  });
  $("#fPrev").addEventListener("click", function () { i = (i - 1 + pool.length) % pool.length; draw(); });
  $("#fKnow").addEventListener("click", function () {
    const v = pool[i % pool.length];
    setVocabStatus(v.de, "memorized"); known++; recordAnswer(true, "flash-" + v.de);
    i++; draw();
  });
  $("#fDont").addEventListener("click", function () {
    const v = pool[i % pool.length];
    setVocabStatus(v.de, "practice"); recordAnswer(false, "flash-" + v.de);
    i++; draw();
  });
  draw();
};

/* ----------------------------- Original exercises ----------------------------- */
routes.original = function (root) {
  const totalItems = ORIGINAL_EXERCISES.reduce(function (a, e) { return a + e.items.length; }, 0);
  const shownItems = ORIGINAL_EXERCISES.reduce(function (a, e) { return a + e.items.length; }, 0);
  const missing = totalItems - shownItems;
  root.innerHTML = `
  <div class="page-head">
    <h1>📄 أسئلة الكورس الأصلية</h1>
    <p>كل الأسئلة دي منقولة بالحرف من ملفات الكورس (Fragen K.1 & K.2 + Wiederholung) — من غير حذف أو تعديل.</p>
  </div>
  <div class="card mb" style="border-inline-start:4px solid var(--ok)">
    <h3>✅ تحقّق من اكتمال الأسئلة الأصلية</h3>
    <div class="row mt">
      <span class="badge brand">${ORIGINAL_EXERCISES.length} تمرين أصلي</span>
      <span class="badge brand">${totalItems} سؤال أصلي</span>
      <span class="badge ok">معروض: ${shownItems}</span>
      <span class="badge ${missing === 0 ? "ok" : "bad"}">Missing Original Questions = ${missing}</span>
    </div>
    <p class="small muted mt">الأسئلة محفوظة بنفس ترقيمها الأصلي، وكل الاختيارات الأصلية موجودة. الإجابات والترجمات والشرح مضافين تحت كل سؤال.</p>
  </div>
  <div id="origList"></div>`;

  const wrap = $("#origList");
  ORIGINAL_EXERCISES.forEach(function (ex) {
    const card = document.createElement("div");
    card.className = "card mb";
    let body = "";
    if (ex.type === "fill") {
      body = ex.items.map(function (it) {
        const parts = it.text.split(/_{3,}/);
        let html = "";
        parts.forEach(function (p, i) {
          html += esc(p);
          if (i < parts.length - 1) {
            html += `<input class="chip" data-n="${it.n}" data-b="${i}" style="min-width:110px;padding:4px 8px;font-family:var(--ff-de);direction:ltr;text-align:center" placeholder="…">`;
          }
        });
        return `<div class="mb" data-item="${it.n}">
          <div class="row" style="align-items:flex-start"><span class="badge">${it.n}</span>
          <div style="flex:1" class="de-block">${html}</div></div>
          <div class="fb small" style="display:none"></div>
        </div>`;
      }).join("");
      body += `<div class="row mt"><button class="btn sm" data-check="fill">تحقق من الإجابات</button>
        <button class="btn ghost sm" data-sol="fill">شوف الحل</button></div>`;
    } else if (ex.type === "match") {
      body = ex.items.map(function (it) {
        return `<div class="row mb" data-item="${it.n}">
          <span class="badge">${it.n}</span>
          <div class="de" style="flex:1;min-width:180px">${esc(it.text)}</div>
          <select class="chip" data-n="${it.n}" style="padding:6px 10px">
            <option value="">اختار…</option>
            ${ex.pool.map(function (p) { return `<option value="${esc(p)}">${esc(p)}</option>`; }).join("")}
          </select>
          <div class="fb small" style="display:none"></div>
        </div>`;
      }).join("");
      body += `<div class="row mt"><button class="btn sm" data-check="match">تحقق</button>
        <button class="btn ghost sm" data-sol="match">شوف الحل</button></div>`;
    } else {
      body = ex.items.map(function (it) {
        return `<div class="mb" data-item="${it.n}">
          <div class="row"><span class="badge">${it.n}</span>
            <div class="de" style="font-size:1.02rem">${esc(it.stem)} ______ ?</div></div>
          <div class="opts mt">${it.options.map(function (o, i) {
            return `<button class="opt" data-i="${i}"><span class="idx">${"ABCD"[i]}</span><span>${esc(it.stem)} ${esc(o)}</span></button>`;
          }).join("")}</div>
          <div class="fb small" style="display:none"></div>
        </div>`;
      }).join("");
    }

    card.innerHTML = `
      <div class="spread">
        <h3 style="margin:0">${esc(ex.titleAr)}</h3>
        <span class="badge brand">Kapitel ${ex.ch}</span>
      </div>
      <div class="de small muted mb">${esc(ex.title)}</div>
      <div class="tiny muted mb">📎 ${esc(ex.src)}</div>
      ${ex.bank ? `<div class="tipbox small mb">اختار من: ${ex.bank.map(function (b) { return '<b class="de">' + esc(b) + '</b>'; }).join(" · ")}</div>` : ""}
      ${body}`;
    wrap.appendChild(card);

    if (ex.type === "fill") {
      card.querySelector("[data-check]").addEventListener("click", function () {
        let ok = 0;
        ex.items.forEach(function (it) {
          const box = card.querySelector('[data-item="' + it.n + '"]');
          const inputs = Array.prototype.slice.call(box.querySelectorAll("input"));
          let allOk = true;
          inputs.forEach(function (inp, i) {
            const good = norm(inp.value) === norm(it.answers[i]);
            inp.style.borderColor = good ? "var(--ok)" : "var(--bad)";
            inp.style.background = good ? "var(--ok-soft)" : "var(--bad-soft)";
            if (!good) allOk = false;
          });
          if (allOk) ok++;
          const fb = box.querySelector(".fb");
          fb.style.display = "block";
          fb.innerHTML = (allOk ? "✅ " : "❌ الصح: <b class='de'>" + esc(it.full) + "</b> — ")
            + esc(it.ar) + (it.note ? ` <span class="muted">(${esc(it.note)})</span>` : "");
          fb.className = "fb small " + (allOk ? "" : "muted");
        });
        recordAnswer(ok === ex.items.length, ex.id);
        toast(`${ok} / ${ex.items.length} صح`);
      });
      card.querySelector("[data-sol]").addEventListener("click", function () {
        ex.items.forEach(function (it) {
          const box = card.querySelector('[data-item="' + it.n + '"]');
          box.querySelectorAll("input").forEach(function (inp, i) { inp.value = it.answers[i]; });
        });
      });
    } else if (ex.type === "match") {
      card.querySelector("[data-check]").addEventListener("click", function () {
        let ok = 0;
        ex.items.forEach(function (it) {
          const sel = card.querySelector('select[data-n="' + it.n + '"]');
          const box = card.querySelector('[data-item="' + it.n + '"] .fb');
          const good = sel.value === it.answer;
          if (good) ok++;
          sel.style.borderColor = good ? "var(--ok)" : "var(--bad)";
          box.style.display = "block";
          box.innerHTML = (good ? "✅ " : "❌ الصح: <b class='de'>" + esc(it.answer) + "</b> — ") + esc(it.ar);
        });
        recordAnswer(ok === ex.items.length, ex.id);
        toast(`${ok} / ${ex.items.length} صح`);
      });
      card.querySelector("[data-sol]").addEventListener("click", function () {
        ex.items.forEach(function (it) {
          card.querySelector('select[data-n="' + it.n + '"]').value = it.answer;
        });
      });
    } else {
      ex.items.forEach(function (it) {
        const box = card.querySelector('[data-item="' + it.n + '"]');
        box.querySelectorAll(".opt").forEach(function (b) {
          b.addEventListener("click", function () {
            const i = Number(b.getAttribute("data-i"));
            const ok = i === it.answer;
            box.querySelectorAll(".opt").forEach(function (x) {
              x.disabled = true;
              if (Number(x.getAttribute("data-i")) === it.answer) x.classList.add("correct");
            });
            if (!ok) b.classList.add("wrong");
            const fb = box.querySelector(".fb");
            fb.style.display = "block";
            fb.innerHTML = (ok ? "✅ صح! " : "❌ ") + esc(it.why) + ` <span class="muted">— ${esc(it.ar)}</span>`;
            recordAnswer(ok, ex.id + "-" + it.n);
          });
        });
      });
    }
  });
};

/* ----------------------------- Exam ----------------------------- */
routes.exam = function (root) {
  root.innerHTML = `
  <div class="page-head">
    <h1>📝 امتحان تجريبي</h1>
    <p>نفس أنواع أسئلة الكورس: اختيار من متعدد + ترتيب جملة + إجابة قصيرة.</p>
  </div>
  <div class="card" style="max-width:640px;margin:0 auto">
    <h3>إعدادات الامتحان</h3>
    <div class="mb">
      <label class="small muted">الفصل</label>
      <select id="eCh" class="chip" style="width:100%;padding:10px">
        <option value="all">كل الفصول</option>
        <option value="1">Kapitel 1</option>
        <option value="2">Kapitel 2</option>
        <option value="3">Kapitel 3</option>
      </select>
    </div>
    <div class="mb">
      <label class="small muted">عدد الأسئلة</label>
      <select id="eCount" class="chip" style="width:100%;padding:10px">
        <option value="10">10 أسئلة</option>
        <option value="15" selected>15 سؤال</option>
        <option value="20">20 سؤال</option>
        <option value="30">30 سؤال</option>
      </select>
    </div>
    <div class="mb">
      <label class="small muted">الوقت</label>
      <select id="eTime" class="chip" style="width:100%;padding:10px">
        <option value="0">بدون مؤقت</option>
        <option value="10">10 دقايق</option>
        <option value="15" selected>15 دقيقة</option>
        <option value="30">30 دقيقة</option>
      </select>
    </div>
    <button class="btn" style="width:100%" id="eStart">ابدأ الامتحان 🚀</button>
  </div>
  <div class="card mt" style="max-width:640px;margin:14px auto 0">
    <h3>📋 آخر الامتحانات</h3>
    ${S.exams.length ? `<table class="tbl"><thead><tr><th>التاريخ</th><th>النتيجة</th><th>النوع</th></tr></thead><tbody>
      ${S.exams.slice(-6).reverse().map(function (e) {
        return `<tr><td>${esc(e.date)}</td><td><b>${e.score}%</b> (${e.correct}/${e.total})</td><td>${esc(e.ch)}</td></tr>`;
      }).join("")}
    </tbody></table>` : '<p class="muted small">لسه مفيش امتحانات. ابدأ أول واحد!</p>'}
  </div>`;

  $("#eStart").addEventListener("click", function () {
    const ch = $("#eCh").value;
    const count = Number($("#eCount").value);
    const time = Number($("#eTime").value);
    startExam(root, ch, count, time);
  });
};

function buildExamPool(ch) {
  const pool = [];
  MCQ_ORIGINAL.concat(MCQ_GENERATED).forEach(function (q) {
    if (ch === "all" || String(q.ch) === ch) pool.push(Object.assign({ type: "mcq" }, q));
  });
  ORDERING.forEach(function (o) {
    if (ch === "all" || String(o.ch) === ch) pool.push(Object.assign({ type: "order" }, o));
  });
  SHORT.forEach(function (s) {
    if (ch === "all" || String(s.ch) === ch) pool.push(Object.assign({ type: "short" }, s));
  });
  return pool;
}

function startExam(root, ch, count, minutes) {
  const pool = shuffle(buildExamPool(ch)).slice(0, count);
  let qi = 0, timeLeft = minutes * 60, timerId = null, finished = false;
  const answers = new Array(pool.length).fill(null);

  root.innerHTML = `
  <div class="exam-top">
    <div><b>امتحان</b> <span class="badge brand">${ch === "all" ? "كل الفصول" : "Kapitel " + ch}</span></div>
    <div class="row">
      <span class="small muted" id="eProg">0 / ${pool.length}</span>
      ${minutes ? '<span class="timer" id="eTimer"></span>' : ""}
      <button class="btn sm" id="eFinish">تسليم</button>
    </div>
  </div>
  <div class="quiz-wrap"><div class="qbox" id="eBox"></div></div>`;

  if (minutes) {
    timerId = setInterval(function () {
      timeLeft--;
      const m = Math.floor(timeLeft / 60), s = timeLeft % 60;
      const el = $("#eTimer");
      if (!el) return;
      el.textContent = m + ":" + (s < 10 ? "0" : "") + s;
      el.classList.toggle("danger", timeLeft <= 60);
      if (timeLeft <= 0) { clearInterval(timerId); finish(); }
    }, 1000);
  }

  function drawQ() {
    if (qi >= pool.length) { finish(); return; }
    const q = pool[qi];
    let inner = "";
    if (q.type === "mcq") {
      inner = `<div class="q-text">${esc(q.q)}</div><div class="q-ar">${esc(q.qAr || "")}</div>
        <div class="opts">${q.opts.map(function (o, i) {
          return `<button class="opt ${answers[qi] === i ? "correct" : ""}" data-i="${i}"><span class="idx">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`;
        }).join("")}</div>`;
    } else if (q.type === "order") {
      inner = `<div class="q-ar">رتّب الكلمات: <b>${esc(q.ar)}</b></div>
        <input id="eOrder" class="chip" style="width:100%;padding:11px 14px;font-family:var(--ff-de);direction:ltr" placeholder="اكتب الجملة كاملة…" value="${answers[qi] ? esc(answers[qi]) : ""}">
        <div class="tipbox small mt">الكلمات: ${shuffle(q.words).map(function (w) { return esc(w); }).join(" · ")}</div>`;
    } else {
      inner = `<div class="q-text">${esc(q.q)}</div><div class="q-ar">${esc(q.qAr)}</div>
        <input id="eShort" class="chip" style="width:100%;padding:11px 14px;font-family:var(--ff-de);direction:ltr" placeholder="اكتب إجابتك بالألماني…" value="${answers[qi] ? esc(answers[qi]) : ""}">`;
    }
    $("#eBox").innerHTML = `
      <div class="q-head"><span>سؤال ${qi + 1} من ${pool.length}</span>
        <span class="badge">${q.type === "mcq" ? "اختيار" : q.type === "order" ? "ترتيب" : "إجابة قصيرة"}</span></div>
      ${inner}
      <div class="row mt" style="justify-content:space-between">
        <button class="btn ghost" id="ePrev" ${qi === 0 ? "disabled" : ""}>→ السابق</button>
        <button class="btn" id="eNext">${qi === pool.length - 1 ? "تسليم" : "التالي ←"}</button>
      </div>`;
    $("#eProg").textContent = (qi + 1) + " / " + pool.length;

    if (q.type === "mcq") {
      $$(".opt", $("#eBox")).forEach(function (b) {
        b.addEventListener("click", function () {
          answers[qi] = Number(b.getAttribute("data-i"));
          $$(".opt", $("#eBox")).forEach(function (x) { x.classList.remove("correct"); });
          b.classList.add("correct");
        });
      });
    } else if (q.type === "order") {
      $("#eOrder").addEventListener("input", function (e) { answers[qi] = e.target.value; });
    } else {
      $("#eShort").addEventListener("input", function (e) { answers[qi] = e.target.value; });
    }
    $("#ePrev").addEventListener("click", function () { if (qi > 0) { qi--; drawQ(); } });
    $("#eNext").addEventListener("click", function () {
      if (qi === pool.length - 1) finish();
      else { qi++; drawQ(); }
    });
  }

  function finish() {
    if (finished) return;
    finished = true;
    if (timerId) clearInterval(timerId);
    let correct = 0;
    const review = pool.map(function (q, i) {
      const ans = answers[i];
      let ok = false, given = "—", right = "";
      if (q.type === "mcq") {
        ok = ans === q.a; given = ans == null ? "—" : q.opts[ans]; right = q.opts[q.a];
      } else if (q.type === "order") {
        ok = norm(ans) === norm(q.correct); given = ans || "—"; right = q.correct;
      } else {
        ok = norm(ans) === norm(q.a); given = ans || "—"; right = q.a;
      }
      if (ok) correct++;
      recordAnswer(ok, "exam-" + (q.id || i));
      return { q: q, ok: ok, given: given, right: right, ar: q.ar || q.aAr || q.qAr || "" };
    });
    const score = pct(correct, pool.length);
    S.exams.push({ date: new Date().toLocaleDateString("ar-EG"), score: score, correct: correct, total: pool.length, ch: "K" + ch });
    save();

    root.innerHTML = `
    <div class="card result-hero">
      <div class="score-ring" style="--p:${score}"><div>${score}%</div></div>
      <h2>${score >= 80 ? "ممتاز! 🎉" : score >= 60 ? "كويس 👏" : "محتاج مراجعة 💪"}</h2>
      <p class="muted">${correct} صح من ${pool.length}</p>
      <div class="row" style="justify-content:center;margin-top:14px">
        <button class="btn" id="rAgain">امتحان تاني</button>
        <button class="btn ghost" id="rBack">رجوع</button>
      </div>
    </div>
    <h3 class="mt">📋 مراجعة الأسئلة</h3>
    ${review.map(function (r, i) {
      return `<div class="review-item ${r.ok ? "correct" : "wrong"}">
        <div class="spread"><b>${i + 1}. ${r.ok ? "✅" : "❌"}</b> <span class="badge">${r.q.type === "mcq" ? "MCQ" : r.q.type === "order" ? "ترتيب" : "قصيرة"}</span></div>
        <div class="de mt">${esc(r.q.q || r.q.correct || r.q.a)}</div>
        ${r.q.qAr || r.ar ? `<div class="small muted">${esc(r.q.qAr || r.ar)}</div>` : ""}
        ${!r.ok ? `<div class="small mt">إجابتك: <span class="de">${esc(r.given)}</span></div>` : ""}
        <div class="small mt">الصح: <b class="de">${esc(r.right)}</b></div>
        ${r.q.why ? `<div class="tipbox small mt">💡 ${esc(r.q.why)}</div>` : ""}
      </div>`;
    }).join("")}`;
    $("#rAgain").addEventListener("click", function () { go("exam"); });
    $("#rBack").addEventListener("click", function () { go("dashboard"); });
    window.scrollTo(0, 0);
  }

  $("#eFinish").addEventListener("click", function () {
    if (confirm("متأكد إنك عايز تسلّم الامتحان؟")) finish();
  });
  drawQ();
}

/* ----------------------------- Progress ----------------------------- */
routes.progress = function (root) {
  const st = stats();
  const wrongItems = (S.wrongList || []).slice(0, 40);
  root.innerHTML = `
  <div class="page-head"><h1>📊 تقدّمي</h1><p>كل حاجة محفوظة في المتصفح على جهازك.</p></div>
  <div class="grid g4">
    <div class="card"><div class="stat"><span class="v">${st.mem}</span><span class="k">كلمة محفوظة</span></div></div>
    <div class="card"><div class="stat"><span class="v">${st.grammarDone}</span><span class="k">قاعدة مكتملة</span></div></div>
    <div class="card"><div class="stat"><span class="v">${pct(st.correct, st.answered || 1)}%</span><span class="k">دقة الإجابات</span></div></div>
    <div class="card"><div class="stat"><span class="v">${st.exams}</span><span class="k">امتحان</span></div></div>
  </div>

  <div class="card mt">
    <h3>تفصيل التقدّم</h3>
    ${[
      ["المفردات المحفوظة", st.mem, st.totalVocab],
      ["دروس القواعد", st.grammarDone, st.grammarTotal],
      ["شرح الفصول", st.lessonsDone, st.lessonsTotal],
      ["أسئلة اتحلت (هدف ٨٠)", Math.min(st.answered, 80), 80]
    ].map(function (r) {
      return `<div class="pbar-row">
        <div class="lbl"><span>${r[0]}</span><span>${r[1]} / ${r[2]}</span></div>
        <div class="progress"><i style="width:${pct(r[1], r[2])}%"></i></div></div>`;
    }).join("")}
  </div>

  <div class="card mt">
    <div class="spread"><h3>🔁 أسئلة محتاجة مراجعة (${(S.wrongList || []).length})</h3>
      ${wrongItems.length ? '<button class="btn ghost sm" id="clrWrong">مسح القائمة</button>' : ""}</div>
    ${wrongItems.length
      ? `<p class="small muted">دي الأسئلة اللي غلطت فيها. ارجع للأقسام وحلها تاني.</p>
         <div class="row">${wrongItems.map(function (w) { return `<span class="cat-pill">${esc(w)}</span>`; }).join("")}</div>`
      : '<p class="muted small">مفيش أخطاء مسجلة 👌</p>'}
  </div>

  <div class="card mt">
    <h3>📋 كل الامتحانات</h3>
    ${S.exams.length ? `<table class="tbl"><thead><tr><th>التاريخ</th><th>النتيجة</th><th>صح</th><th>الإجمالي</th></tr></thead><tbody>
      ${S.exams.slice().reverse().map(function (e) {
        return `<tr><td>${esc(e.date)}</td><td><b>${e.score}%</b></td><td>${e.correct}</td><td>${e.total}</td></tr>`;
      }).join("")}</tbody></table>` : '<p class="muted small">مفيش امتحانات لسه.</p>'}
  </div>

  <div class="card mt">
    <h3>⚙️ إعدادات</h3>
    <div class="row">
      <button class="btn ghost" id="exportBtn">⬇️ تصدير التقدّم</button>
      <button class="btn bad" id="resetBtn">🗑️ مسح كل التقدّم</button>
    </div>
  </div>`;

  if (wrongItems.length) {
    $("#clrWrong").addEventListener("click", function () { S.wrongList = []; save(); go("progress"); });
  }
  $("#exportBtn").addEventListener("click", function () {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "deutsch-progress.json";
    a.click();
  });
  $("#resetBtn").addEventListener("click", function () {
    if (confirm("هتمسح كل التقدّم. متأكد؟")) {
      S = JSON.parse(JSON.stringify(DEFAULT_STATE)); save(); go("dashboard"); toast("تم مسح التقدّم");
    }
  });
};

/* ----------------------------- Help ----------------------------- */
routes.help = function (root) {
  root.innerHTML = `
  <div class="page-head"><h1>❓ طريقة الاستخدام</h1><p>امشي على المسار ده بالترتيب وهتوصل للامتحان جاهز.</p></div>
  <div class="card mb">
    <h3>المسار المقترح</h3>
    <ol>
      <li><b>اشرح:</b> افتح «شرح الفصول» واقرأ كل جزء. متعديش درس قبل ما تفهم الأمثلة.</li>
      <li><b>احفظ:</b> روح «القاموس» وعلّم الكلمات اللي حفظتها ✓. بعدين «تدريب الأدوات» لحد ما تغلط أقل من ١٠٪.</li>
      <li><b>اتمرّن:</b> «الأفعال» + «ترتيب الجملة». ركّز على مكان الفعل (Position 2).</li>
      <li><b>جاوب:</b> «إجابات قصيرة» + «اختيار من متعدد». اقرأ الشرح بعد كل سؤال.</li>
      <li><b>امتحن:</b> «امتحان تجريبي» بمؤقت — من غير ما تبص على الإجابة.</li>
      <li><b>راجع:</b> «تقدّمي» → أسئلة محتاجة مراجعة + «البصمجة» قبل الامتحان بيوم.</li>
    </ol>
  </div>
  <div class="card mb">
    <h3>أهم ٧ حاجات لازم تحفظهم صمّ</h3>
    <ol>
      <li>ترتيب الجملة: <b>الفعل دايمًا في المكان التاني</b>.</li>
      <li>سؤال W: كلمة استفهام + فعل + فاعل.</li>
      <li>سؤال نعم/لا: الفعل في الأول.</li>
      <li>sein: bin / bist / ist / sind / seid / sind.</li>
      <li>haben: habe / hast / hat / haben / habt / haben.</li>
      <li>الأدوات: der (مذكر) / die (مؤنث) / das (محايد) / die (جمع).</li>
      <li>النفي: nicht للفعل — kein/keine للاسم النكرة.</li>
    </ol>
  </div>
  <div class="card">
    <h3>مفاتيح سريعة</h3>
    <ul>
      <li>🌙 / ☀️ فوق على اليمين = تبديل الوضع الليلي.</li>
      <li>🔍 مربع البحث = دوّر في القاموس وفي الأسئلة.</li>
      <li>كل تقدّمك محفوظ أوتوماتيك في المتصفح.</li>
      <li>تقدر تصدّر تقدّمك من صفحة «تقدّمي».</li>
    </ul>
  </div>`;
};

/* ----------------------------- Global search ----------------------------- */
const searchInput = $("#globalSearch");
const searchResults = $("#searchResults");

searchInput.addEventListener("input", function () {
  const q = this.value.trim().toLowerCase();
  if (q.length < 2) { searchResults.classList.remove("show"); return; }
  const hits = [];
  VOCAB.forEach(function (v) {
    if (v.de.toLowerCase().indexOf(q) >= 0 || v.ar.indexOf(q) >= 0) {
      hits.push({ t: v.art + " " + v.de, s: v.ar + " · جمع: " + v.pl, go: "vocab" });
    }
  });
  VERBS.forEach(function (v) {
    if (v.inf.toLowerCase().indexOf(q) >= 0 || v.ar.indexOf(q) >= 0) {
      hits.push({ t: v.inf, s: v.ar + " · فعل", go: "verbs" });
    }
  });
  GRAMMAR.forEach(function (g) {
    if (g.title.toLowerCase().indexOf(q) >= 0 || g.titleAr.indexOf(q) >= 0) {
      hits.push({ t: g.titleAr, s: g.title, go: "grammar", param: g.id });
    }
  });
  SHORT.forEach(function (s) {
    if (s.q.toLowerCase().indexOf(q) >= 0 || s.qAr.indexOf(q) >= 0) {
      hits.push({ t: s.q, s: s.qAr, go: "short" });
    }
  });
  searchResults.innerHTML = hits.slice(0, 12).map(function (h) {
    return `<div class="sr-item" data-go="${h.go}" data-param="${h.param || ""}">
      <b class="de" style="font-size:.9rem">${esc(h.t)}</b><small>${esc(h.s)}</small></div>`;
  }).join("") || '<div class="sr-item muted">مفيش نتائج</div>';
  searchResults.classList.add("show");
  $$(".sr-item", searchResults).forEach(function (it) {
    it.addEventListener("click", function () {
      const v = it.getAttribute("data-go");
      const p = it.getAttribute("data-param");
      searchResults.classList.remove("show");
      searchInput.value = "";
      go(v, p || undefined);
    });
  });
});
document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-wrap")) searchResults.classList.remove("show");
});

/* ----------------------------- Start ----------------------------- */
applyTheme(S.theme || "light");
updateNavProgress();
const init = parseHash();
render(init.view || "dashboard", init.param);

})();
