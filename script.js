// Simuliert das Eintippen eines Befehls, dann erscheint die Antwort Zeile für Zeile.

const command = "whoami";
const typedCommandEl = document.getElementById("typed-command");
const cursorEl = document.getElementById("cmd-cursor");
const outputEl = document.getElementById("output");

const outputLines = [
  { text: "Erdinc Bayalan", className: "headline" },
  { text: "Self-taught developer aus Deutschland." },
  { text: "Lernt gerade HTML, CSS &amp; JavaScript und baut erste eigene Projekte." },
  { text: "Offen für Junior-Dev-Rollen und Zusammenarbeit." }
];

function typeCommand(text, i = 0) {
  if (i <= text.length) {
    typedCommandEl.textContent = text.slice(0, i);
    setTimeout(() => typeCommand(text, i + 1), 90);
  } else {
    // Befehl fertig getippt -> kurze Pause, dann Cursor weg, Ausgabe starten
    setTimeout(() => {
      cursorEl.style.display = "none";
      revealOutput();
    }, 300);
  }
}

function revealOutput(index = 0) {
  if (index >= outputLines.length) return;

  const line = outputLines[index];
  const p = document.createElement("p");
  if (line.className) p.classList.add(line.className);
  p.innerHTML = line.text;
  p.style.animationDelay = "0s";
  outputEl.appendChild(p);

  setTimeout(() => revealOutput(index + 1), 450);
}

// Start, sobald die Seite geladen ist
window.addEventListener("DOMContentLoaded", () => {
  typeCommand(command);
});
