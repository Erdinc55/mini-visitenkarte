Mini-Visitenkarte

Eine kleine Seite über mich, aufgebaut wie ein Terminal-Fenster. Beim Laden wird
`whoami` eingetippt und die Antwort erscheint Zeile für Zeile.

Mein erstes Projekt, das ich veröffentlicht habe.

**Live:** https://erdinc55.github.io/mini-visitenkarte/

## Was drin steckt

Reines HTML, CSS und JavaScript, keine Bibliotheken. Drei Dateien:

- `index.html` — Aufbau der Seite
- `style.css` — Gestaltung, Farben, Animationen
- `script.js` — die Tipp-Animation im Terminal

Die Tipp-Animation läuft über `setTimeout`, das Zeichen für Zeichen einen
Buchstaben anhängt. Nichts Kompliziertes, aber ich habe dabei zum ersten Mal
verstanden, warum Animationen in JavaScript nicht einfach mit einer Schleife
funktionieren.

## Selbst ausprobieren

Repository herunterladen und `index.html` im Browser öffnen. Kein Server nötig,
keine Installation.

```
git clone https://github.com/Erdinc55/mini-visitenkarte.git
```

## Warum

Ich lerne seit einiger Zeit Webentwicklung und wollte etwas haben, das
tatsächlich online steht und nicht nur in einem Ordner auf meinem Rechner
liegt. Gleichzeitig dient die Seite als Visitenkarte, die ich verlinken kann.

## Was ich noch ändern will

- Die Seite ist auf sehr kleinen Bildschirmen noch etwas eng
- Ein Bereich mit meinen Projekten fehlt, sobald ich mehr davon habe
