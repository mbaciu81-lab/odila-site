# Odila Specialty Coffee — site

Site static (HTML + CSS + JS), fără build. Orice modificare urcată pe ramura `main` apare live pe Vercel în ~30 de secunde.

## Ce fișier modifici
| Vrei să schimbi | Fișierul |
|---|---|
| Texte în catalană, ordinea secțiunilor | `index.html`, `carta.html` |
| Texte în castiliană și engleză | `assets/i18n.js` |
| Produsele din carta | `assets/menu.js` |
| Culori, fonturi, spațieri | `assets/site.css` (variabilele de sus, `:root`) |
| Animații | `assets/site.js` (funcția `motion`) |
| Imagini și desene | `assets/` și `assets/doodles/` |

## Cum modifici direct din browser
1. Deschide fișierul pe GitHub → iconița creion (Edit).
2. Schimbă textul → **Commit changes**.
3. Vercel publică automat; vezi rezultatul pe linkul proiectului.

## Local
Deschide folderul cu VS Code și rulează `npx serve .` (sau orice server static).
