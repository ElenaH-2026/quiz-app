const htmlQuestions = [
  {
    question: "Welches HTML-Attribut sorgt dafür, dass ein Formularfeld nicht bearbeitbar ist, sein Wert aber trotzdem beim Absenden mitgesendet wird?",
    answers: {
      answer_1: { answer: "disabled", is_correct: false },
      answer_2: { answer: "hidden", is_correct: false },
      answer_3: { answer: "readonly", is_correct: true },
      answer_4: { answer: "required", is_correct: false },
    },
  },
  {
    question: "Welches Element ist für eigenständigen, wiederverwendbaren Inhalt wie einen Blogartikel oder Forenbeitrag vorgesehen?",
    answers: {
      answer_1: { answer: "<div>", is_correct: false },
      answer_2: { answer: "<article>", is_correct: true },
      answer_3: { answer: "<section>", is_correct: false },
      answer_4: { answer: "<aside>", is_correct: false },
    },
  },
  {
    question: "Was bewirkt das Attribut 'defer' bei einem <script>-Tag?",
    answers: {
      answer_1: { answer: "Das Script wird sofort geladen und blockiert das Rendering", is_correct: false },
      answer_2: { answer: "Das Script wird erst nach dem Parsen des HTML-Dokuments ausgeführt", is_correct: true },
      answer_3: { answer: "Das Script wird komplett ignoriert", is_correct: false },
      answer_4: { answer: "Das Script wird nur bei Nutzerinteraktion geladen", is_correct: false },
    },
  },
  {
    question: "Welcher Input-Typ eignet sich am besten zur browserseitigen Validierung einer E-Mail-Adresse ohne JavaScript?",
    answers: {
      answer_1: { answer: "type='text'", is_correct: false },
      answer_2: { answer: "type='mail'", is_correct: false },
      answer_3: { answer: "type='input'", is_correct: false },
      answer_4: { answer: "type='email'", is_correct: true },
    },
  },
  {
    question: "Wofür ist das 'alt'-Attribut bei einem <img>-Element hauptsächlich gedacht?",
    answers: {
      answer_1: { answer: "Als Ersatztext, wenn das Bild nicht geladen werden kann oder für Screenreader", is_correct: true },
      answer_2: { answer: "Als Tooltip-Text beim Hovern über das Bild", is_correct: false },
      answer_3: { answer: "Zur Angabe der Bildgröße", is_correct: false },
      answer_4: { answer: "Zur Angabe der Bildquelle", is_correct: false },
    },
  },
  {
    question: "Welches Element gruppiert thematisch zusammengehörige Formularelemente inklusive gemeinsamer Beschriftung?",
    answers: {
      answer_1: { answer: "<optgroup>", is_correct: false },
      answer_2: { answer: "<label>", is_correct: false },
      answer_3: { answer: "<fieldset>", is_correct: true },
      answer_4: { answer: "<group>", is_correct: false },
    },
  },
  {
    question: "Worin unterscheiden sich <ol> und <ul>?",
    answers: {
      answer_1: { answer: "<ol> erzeugt eine geordnete, nummerierte Liste, <ul> eine ungeordnete", is_correct: true },
      answer_2: { answer: "<ol> ist nur für Formulare gedacht, <ul> für Texte", is_correct: false },
      answer_3: { answer: "Es gibt keinen funktionalen Unterschied, nur andere Namen", is_correct: false },
      answer_4: { answer: "<ul> erzeugt eine geordnete Liste, <ol> eine ungeordnete", is_correct: false },
    },
  },
  {
    question: "Welches Attribut macht aus einem <a>-Element einen Download-Link statt einer normalen Navigation?",
    answers: {
      answer_1: { answer: "target", is_correct: false },
      answer_2: { answer: "rel", is_correct: false },
      answer_3: { answer: "download", is_correct: true },
      answer_4: { answer: "href", is_correct: false },
    },
  },
  {
    question: "Wofür wird das Tag <meta name='viewport'> hauptsächlich eingesetzt?",
    answers: {
      answer_1: { answer: "Zur Festlegung der Zeichenkodierung", is_correct: false },
      answer_2: { answer: "Zur Steuerung der responsiven Darstellung auf mobilen Geräten", is_correct: true },
      answer_3: { answer: "Zur Verbesserung der Ladezeit", is_correct: false },
      answer_4: { answer: "Zur Suchmaschinenoptimierung", is_correct: false },
    },
  },
  {
    question: "Welches semantische Element repräsentiert den Hauptinhalt einer Seite und sollte nur einmal pro Seite vorkommen?",
    answers: {
      answer_1: { answer: "<content>", is_correct: false },
      answer_2: { answer: "<div id='main'>", is_correct: false },
      answer_3: { answer: "<section>", is_correct: false },
      answer_4: { answer: "<main>", is_correct: true },
    },
  },
];

const cssQuestions = [
  {
    question: "Welche CSS-Eigenschaft legt den Innenabstand zwischen Inhalt und Rahmen eines Elements fest?",
    answers: {
      answer_1: { answer: "margin", is_correct: false },
      answer_2: { answer: "padding", is_correct: true },
      answer_3: { answer: "gap", is_correct: false },
      answer_4: { answer: "border-spacing", is_correct: false },
    },
  },
  {
    question: "Was bewirkt 'box-sizing: border-box'?",
    answers: {
      answer_1: { answer: "Padding und Border werden zusätzlich zur angegebenen width addiert", is_correct: false },
      answer_2: { answer: "Nur der Border wird in die width eingerechnet, Padding nicht", is_correct: false },
      answer_3: { answer: "Padding und Border werden in die angegebene width eingerechnet", is_correct: true },
      answer_4: { answer: "Die Box wird komplett ohne Größenangabe gerendert", is_correct: false },
    },
  },
  {
    question: "Welcher Selektor wählt ausschließlich die direkten Kind-Elemente von .list aus?",
    answers: {
      answer_1: { answer: ".list *", is_correct: false },
      answer_2: { answer: ".list ~ *", is_correct: false },
      answer_3: { answer: ".list + *", is_correct: false },
      answer_4: { answer: ".list > *", is_correct: true },
    },
  },
  {
    question: "Worin unterscheiden sich die Einheiten 'em' und 'rem'?",
    answers: {
      answer_1: { answer: "em bezieht sich auf die Schriftgröße des Elternelements, rem auf die des Wurzelelements", is_correct: true },
      answer_2: { answer: "em und rem sind identisch, nur andere Schreibweisen", is_correct: false },
      answer_3: { answer: "rem bezieht sich auf das Elternelement, em auf das Wurzelelement", is_correct: false },
      answer_4: { answer: "em ist eine absolute Einheit, rem eine relative", is_correct: false },
    },
  },
  {
    question: "Mit welcher Eigenschaft verteilt man Flex-Items entlang der Hauptachse eines Flex-Containers?",
    answers: {
      answer_1: { answer: "align-items", is_correct: false },
      answer_2: { answer: "flex-direction", is_correct: false },
      answer_3: { answer: "justify-content", is_correct: true },
      answer_4: { answer: "align-content", is_correct: false },
    },
  },
  {
    question: "Wie verhält sich die Spezifität einer ID im Vergleich zu einer Klasse?",
    answers: {
      answer_1: { answer: "Eine ID hat eine geringere Spezifität als eine Klasse", is_correct: false },
      answer_2: { answer: "Beide haben identische Spezifität", is_correct: false },
      answer_3: { answer: "Es hängt allein von der Reihenfolge im Stylesheet ab", is_correct: false },
      answer_4: { answer: "Eine ID hat eine höhere Spezifität als eine Klasse", is_correct: true },
    },
  },
  {
    question: "Was macht 'position: sticky'?",
    answers: {
      answer_1: { answer: "Das Element verhält sich wie relative, bis eine definierte Scroll-Schwelle erreicht ist, dann wie fixed", is_correct: true },
      answer_2: { answer: "Das Element ist immer fest im Viewport positioniert", is_correct: false },
      answer_3: { answer: "Das Element verhält sich exakt wie absolute", is_correct: false },
      answer_4: { answer: "Das Element bleibt immer im normalen Textfluss", is_correct: false },
    },
  },
  {
    question: "Welche Eigenschaft verhindert, dass ein Flex-Item bei Platzmangel schrumpft?",
    answers: {
      answer_1: { answer: "flex-grow: 0", is_correct: false },
      answer_2: { answer: "flex-basis: 0", is_correct: false },
      answer_3: { answer: "flex-wrap: nowrap", is_correct: false },
      answer_4: { answer: "flex-shrink: 0", is_correct: true },
    },
  },
  {
    question: "Was wählt der Selektor ':nth-child(2n)' aus?",
    answers: {
      answer_1: { answer: "Nur das zweite Element", is_correct: false },
      answer_2: { answer: "Alle geraden Elemente (2, 4, 6, ...)", is_correct: true },
      answer_3: { answer: "Alle ungeraden Elemente (1, 3, 5, ...)", is_correct: false },
      answer_4: { answer: "Jedes Element ab dem zweiten bis zum Ende", is_correct: false },
    },
  },
  {
    question: "Welche CSS-Einheit ist relativ zur Breite des Viewports?",
    answers: {
      answer_1: { answer: "%", is_correct: false },
      answer_2: { answer: "vh", is_correct: false },
      answer_3: { answer: "px", is_correct: false },
      answer_4: { answer: "vw", is_correct: true },
    },
  },
];

const javascriptQuestions = [
  {
    question: "Was gibt 'typeof null' in JavaScript zurück?",
    answers: {
      answer_1: { answer: "'null'", is_correct: false },
      answer_2: { answer: "'undefined'", is_correct: false },
      answer_3: { answer: "'object'", is_correct: true },
      answer_4: { answer: "'number'", is_correct: false },
    },
  },
  {
    question: "Worin unterscheiden sich '==' und '===' in JavaScript?",
    answers: {
      answer_1: { answer: "'===' prüft Typ und Wert, '==' vergleicht mit impliziter Typumwandlung", is_correct: true },
      answer_2: { answer: "'==' und '===' verhalten sich immer identisch", is_correct: false },
      answer_3: { answer: "'==' prüft Typ und Wert, '===' vergleicht nur den Wert", is_correct: false },
      answer_4: { answer: "'===' funktioniert nur bei Zahlen", is_correct: false },
    },
  },
  {
    question: "Was bewirkt die Methode Array.prototype.map()?",
    answers: {
      answer_1: { answer: "Sie verändert das Original-Array direkt und gibt nichts zurück", is_correct: false },
      answer_2: { answer: "Sie erstellt ein neues Array mit den Rückgabewerten der übergebenen Funktion", is_correct: true },
      answer_3: { answer: "Sie filtert Elemente aus dem Array heraus", is_correct: false },
      answer_4: { answer: "Sie reduziert das Array auf einen einzigen Wert", is_correct: false },
    },
  },
  {
    question: "Was ist eine Closure in JavaScript?",
    answers: {
      answer_1: { answer: "Eine Methode, die ein Array in einen String umwandelt", is_correct: false },
      answer_2: { answer: "Eine Funktion, die auf Variablen ihres äußeren Gültigkeitsbereichs zugreifen kann, auch nachdem dieser beendet wurde", is_correct: true },
      answer_3: { answer: "Ein Objekt, das automatisch geschlossen wird, wenn es nicht mehr benötigt wird", is_correct: false },
      answer_4: { answer: "Eine Schleife, die sich selbst beendet", is_correct: false },
    },
  },
  {
    question: "Welchen Wert hat 'this' innerhalb einer Arrow Function?",
    answers: {
      answer_1: { answer: "Einen eigenen this-Kontext, unabhängig vom Aufrufer", is_correct: false },
      answer_2: { answer: "Immer das globale window-Objekt", is_correct: false },
      answer_3: { answer: "Den this-Kontext des umgebenden lexikalischen Scopes", is_correct: true },
      answer_4: { answer: "Immer 'undefined'", is_correct: false },
    },
  },
  {
    question: "Was ist der zentrale Unterschied zwischen 'let' und 'var'?",
    answers: {
      answer_1: { answer: "'let' ist block-scoped, 'var' ist function-scoped", is_correct: true },
      answer_2: { answer: "'var' ist block-scoped, 'let' ist function-scoped", is_correct: false },
      answer_3: { answer: "Beide verhalten sich in allen Fällen identisch", is_correct: false },
      answer_4: { answer: "'let' kann nur für Zahlen verwendet werden", is_correct: false },
    },
  },
  {
    question: "Was passiert bei Promise.all(), wenn eines der übergebenen Promises abgelehnt wird?",
    answers: {
      answer_1: { answer: "Es wartet auf alle übrigen Promises und liefert Teilergebnisse", is_correct: false },
      answer_2: { answer: "Es lehnt sofort mit dem Fehler des ersten abgelehnten Promises ab", is_correct: true },
      answer_3: { answer: "Der Fehler wird stillschweigend ignoriert", is_correct: false },
      answer_4: { answer: "Es gibt 'undefined' zurück", is_correct: false },
    },
  },
  {
    question: "Was macht die Methode JSON.stringify()?",
    answers: {
      answer_1: { answer: "Sie wandelt einen JSON-String in ein JavaScript-Objekt um", is_correct: false },
      answer_2: { answer: "Sie validiert, ob ein String gültiges JSON ist", is_correct: false },
      answer_3: { answer: "Sie wandelt ein JavaScript-Objekt in einen JSON-String um", is_correct: true },
      answer_4: { answer: "Sie parsed ein Array in ein Objekt", is_correct: false },
    },
  },
  {
    question: "Worin liegt der Unterschied zwischen 'null' und 'undefined'?",
    answers: {
      answer_1: { answer: "'undefined' bedeutet, eine Variable wurde noch keinem Wert zugewiesen, 'null' ist ein bewusst gesetzter Leerwert", is_correct: true },
      answer_2: { answer: "Beide bedeuten exakt dasselbe und sind austauschbar", is_correct: false },
      answer_3: { answer: "'null' wird nur bei Zahlen verwendet, 'undefined' nur bei Strings", is_correct: false },
      answer_4: { answer: "'undefined' ist ein bewusst gesetzter Leerwert, 'null' bedeutet nicht zugewiesen", is_correct: false },
    },
  },
  {
    question: "Was bewirkt das Schlüsselwort 'async' vor einer Funktionsdeklaration?",
    answers: {
      answer_1: { answer: "Die Funktion läuft synchron und blockiert den Code", is_correct: false },
      answer_2: { answer: "Die Funktion gibt automatisch ein Promise zurück", is_correct: true },
      answer_3: { answer: "Die Funktion kann keine Fehler werfen", is_correct: false },
      answer_4: { answer: "Die Funktion wird nur einmal ausgeführt, egal wie oft sie aufgerufen wird", is_correct: false },
    },
  },
];
