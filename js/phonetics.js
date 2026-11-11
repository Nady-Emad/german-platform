/* ============================================================================
   Aussprache-Hilfe: deutsche Schreibweise → arabische Lautschrift (تقريبي)
   Reine Regel-Engine, funktioniert offline. Kein Anspruch auf IPA-Genauigkeit.
   ============================================================================ */
(function () {
  var VOW = "aeiouäöüy";

  /* Ausnahmen, bei denen die Regel-Engine daneben liegt */
  var EXC = {
    "museum": "موزيوم",
    "café": "كافيه",
    "cafe": "كافيه",
    "theater": "تيأتر",
    "ei": "أي",
    "eier": "أير",
    "elektrizität": "إليكتريتسيتيت"
  };

  function isVowel(c) { return !!c && VOW.indexOf(c) >= 0; }

  function trWord(w) {
    var s = w.toLowerCase().replace(/[^a-zäöüßé]/g, "");
    if (!s) return "";
    if (EXC[s]) return EXC[s];
    var out = "";
    var i = 0;
    var n = s.length;

    while (i < n) {
      var rest = s.slice(i);
      var prev = i > 0 ? s[i - 1] : "";
      var next = s[i + 1] || "";
      var atStart = (i === 0);

      // ---- Wortende ----
      if (rest === "ig") { out += "يش"; i += 2; continue; }
      if (rest === "er") { out += "ر"; i += 2; continue; }
      if (rest === "e") { out += "ه"; i += 1; continue; }
      if (rest.indexOf("tion") === 0) { out += "تسيون"; i += 4; continue; }

      // ---- Mehrbuchstaben-Laute ----
      if (rest.indexOf("tsch") === 0) { out += "تش"; i += 4; continue; }
      if (rest.indexOf("dsch") === 0) { out += "دش"; i += 4; continue; }
      if (rest.indexOf("sch") === 0) { out += "ش"; i += 3; continue; }
      if (rest.indexOf("chs") === 0) { out += "كس"; i += 3; continue; }
      if (rest.indexOf("ch") === 0) {
        out += (prev && "aou".indexOf(prev) >= 0) ? "خ" : "ش";
        i += 2; continue;
      }
      if (rest.indexOf("ck") === 0) { out += "ك"; i += 2; continue; }
      if (rest.indexOf("tz") === 0) { out += "تس"; i += 2; continue; }
      if (rest.indexOf("ph") === 0) { out += "ف"; i += 2; continue; }
      if (rest.indexOf("qu") === 0) { out += "كڤ"; i += 2; continue; }
      if (atStart && rest.indexOf("sp") === 0) { out += "شپ"; i += 2; continue; }
      if (atStart && rest.indexOf("st") === 0) { out += "شت"; i += 2; continue; }

      if (rest.indexOf("ei") === 0 || rest.indexOf("ai") === 0) { out += "اي"; i += 2; continue; }
      if (rest.indexOf("ie") === 0) { out += "ي"; i += 2; continue; }
      if (rest.indexOf("eu") === 0 || rest.indexOf("äu") === 0) { out += "وي"; i += 2; continue; }
      if (rest.indexOf("au") === 0) { out += "او"; i += 2; continue; }
      if (rest.indexOf("aa") === 0) { out += "ا"; i += 2; continue; }
      if (rest.indexOf("ee") === 0) { out += "ي"; i += 2; continue; }
      if (rest.indexOf("oo") === 0) { out += "و"; i += 2; continue; }

      var c = s[i];

      // ---- Doppelkonsonanten zusammenfassen ----
      if (c === next && !isVowel(c) && c !== "ß") { i += 1; continue; }

      // ---- Einzelbuchstaben ----
      switch (c) {
        case "ß": out += "س"; i += 1; continue;
        case "ä": out += atStart ? "إ" : "ي"; i += 1; continue;
        case "ö": out += atStart ? "أو" : "و"; i += 1; continue;
        case "ü": out += atStart ? "أو" : "و"; i += 1; continue;
        case "v": out += "ف"; i += 1; continue;
        case "w": out += "ڤ"; i += 1; continue;
        case "z": out += "تس"; i += 1; continue;
        case "j": out += "ي"; i += 1; continue;
        case "y": out += "ي"; i += 1; continue;
        case "g": out += "ج"; i += 1; continue;
        case "x": out += "كس"; i += 1; continue;
        case "c": out += "ك"; i += 1; continue;
        case "s":
          out += (atStart && isVowel(next)) ? "ز" : "س";
          i += 1; continue;
        case "h":
          out += (prev && isVowel(prev) && !isVowel(next)) ? "" : "ه";
          i += 1; continue;
        case "a": out += atStart ? "أ" : "ا"; i += 1; continue;
        case "e": out += atStart ? "إ" : "ي"; i += 1; continue;
        case "i": out += atStart ? "إ" : "ي"; i += 1; continue;
        case "o": out += atStart ? "أو" : "و"; i += 1; continue;
        case "u": out += atStart ? "أو" : "و"; i += 1; continue;
        case "r": out += "ر"; i += 1; continue;
        case "b": out += "ب"; i += 1; continue;
        case "d": out += "د"; i += 1; continue;
        case "f": out += "ف"; i += 1; continue;
        case "k": out += "ك"; i += 1; continue;
        case "l": out += "ل"; i += 1; continue;
        case "m": out += "م"; i += 1; continue;
        case "n": out += "ن"; i += 1; continue;
        case "p": out += "پ"; i += 1; continue;
        case "t": out += "ت"; i += 1; continue;
        default: i += 1; continue;
      }
    }
    return out.replace(/\s+/g, " ").trim();
  }

  function germanToArabic(text) {
    if (!text) return "";
    return String(text).split(/\s+/).map(trWord).filter(Boolean).join(" ");
  }

  window.germanToArabic = germanToArabic;
  window.trWord = trWord;
})();
