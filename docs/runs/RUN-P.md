# RUN-P — stlouis-app : version de démonstration pour la présentation

Dépôt `nothineazi/stlouis-app` · `main` créé depuis le commit `ceb8b71` de la souche (merge de la PR #3 ; le tag `demo-v0.1` n'a pas pu être poussé par l'agent, voir la souche) **avec l'historique** (remote `upstream` = `ovatech-spa-core`) · 2026-10-09. Contrastes détaillés : `RUN-P-contrastes.md`. Déploiement : `docs/RUNBOOK.md`.

## 1. Fait / non fait

| Élément | Résultat |
|---|---|
| Création depuis la souche avec historique, remote `upstream` | Fait. `git diff upstream/main -- src/core src/ui` : **vide**. |
| Seuls `src/brand/`, `public/brand/`, icône, métadonnées (`package.json`), README, CHANGELOG modifiés | Fait. |
| Anti-fuite adapté | Fait : `src/brand/forbidden-names.json` interdit « ovaglow » et « mahaza » (hors `docs/` et `CLAUDE.md`) ; 0 occurrence (174 fichiers). |
| Identité barbershop : bleu nuit, rouge, crème, motif poteau de barbier | Fait : jetons OKLCH (teinte 262). **Clair** : fond crème, texte bleu nuit, accent = rouge brique (`oklch(0.45 0.175 27)`, boutons et liens). **Sombre** : fond bleu nuit, accent = crème (boutons et texte crème). Le poteau (bandes rouge / crème / bleu vif) est décoratif : filet sous l'en-tête et au-dessus du pied de page (CSS), pastille et visuels (SVG). |
| Le rouge et le bleu vif ne servent pas de texte sur le bleu nuit | Respecté : en sombre, aucun texte n'est rouge ni bleu vif (texte crème / paille claire) ; `--pole-red` et `--pole-blue` ne sont utilisés que dans des fonds décoratifs. |
| Contrastes AA vérifiés par script, deux thèmes | Fait : **79 couples × 2 thèmes, 0 échec**. Extraits : texte courant 16,90 (clair) / 18,36 (sombre) ; texte atténué sur carte 6,55 / 7,00 ; paille claire sur bleu nuit (liens, kicker) 12,13 / 10,89 ; sur le hero (pire cas) 8,62 / 7,56. Un premier rouge plus clair (`L 0,50`) a échoué à l'axe (texte à 80 % d'opacité sur un chip actif) : assombri à `L 0,45`. |
| Typographie d'affichage barbershop, licence libre, auto-hébergée, avec sa licence | Fait : **Oswald** (condensée, enseigne), variable, SIL OFL 1.1, `src/brand/fonts/oswald/` + `OFL.txt` + empreinte SHA-256 dans `src/brand/fonts/README.md` ; titres en capitales. Cormorant Garamond retirée. 28 Ko. |
| Catalogue barbershop FICTIF | Fait : 5 catégories, 16 services (coupe, dégradé, barbe, rasage serviette chaude, enfant, soin du visage, coloration…), prix FICTIFS, créneaux indicatifs de 60 min ; 1 site FICTIF « St Louis Barbershop » (adresse fictive, étape « choix du site » absente) ; 4 barbiers FICTIFS (prénom + initiale) ; 4 postes ; 18 clients FICTIFS et leurs réservations (semaine en cours et historique), tout badgé FICTIF. |
| Visuels SVG sans visage | Fait : poteau, ciseaux, rasoir, peigne, miroir, carte cadeau ; générés par `src/brand/generate-assets.mjs` (sortie déterministe). |
| Wording barbershop via `src/brand/copy` | Fait : `vocab.ts` (service / barbier ; « Réserver une coupe », « Composez votre passage », « Barbier habituel », « Barbiers » en colonne et filtre…) : aucun « praticien », « institut » ni « cliente » visible (vérifié sur les 8 pages, texte rendu) ; « soin » n'apparaît que dans des services du catalogue (soin du visage, soin à l'huile). |
| `ci.yml` identique ; `release.yml` ; image testée ; `RUNBOOK.md` | Fait comme pour la souche et `mahaza-app` (`ghcr.io/nothineazi/stlouis-app`). |

## 2. Écarts au plan

1. **Une seule marque de site** : le client est un barbershop ; sans information, un seul site FICTIF (hypothèse ⚠️ à confirmer, plan §6 question 12) ; la souche gère le multi-sites. L'e2e saute l'étape de choix du site pour une marque mono-site.
2. `npm run assets:generate` est redirigé vers le générateur de la marque (`src/brand/generate-assets.mjs`).
3. Aucune donnée réelle de St Louis (le brouillon de l'ancienne démo, « Akwa, Douala », était déjà un placeholder) : rien repris.

## 3. Décisions À VALIDER (ce run)

- Rouge brique (et non rouge vif) comme accent du thème clair ; crème comme accent du thème sombre.
- Oswald en capitales pour tous les titres.
- Mot « service » (et non « prestation ») pour garder des accords masculins avec « barbier ».
- Site unique et horaires « tous les jours 9 h – 20 h » (FICTIFS).

## 4. Résultats de tests (cette app, fin de run)

| Contrôle | Résultat |
|---|---|
| Typecheck, lint | 0 erreur |
| Vitest | **61 / 61** |
| Playwright (375 et 1280 px), sur le build **et sur l'image Docker** (`APP_ENV=staging`) | **27 passés**, 1 ignoré (mobile seul) |
| axe | 0 violation sérieuse ou critique (accueil, 6 écrans du back-office, clair et sombre) |
| `check-design --strict` | 0 violation |
| Anti-fuite | 0 occurrence |
| CI GitHub Actions | verte sur `main` |
| Image Docker | build OK, 326 Mo ; `/api/health` 200 ; bandeau « données fictives » ; aucun lien `wa.me/<numéro>` ; utilisateur `node` (uid 1000) |
| Mémoire du conteneur | **54 Mo au repos, 143 Mo** après la suite e2e complète (limite proposée : 512 Mo) |

## 5. Mesures (First Load JS, kB gzip)

`/` 146,9 (budget 149) · `/reserver` 170,6 (budget 176) · `/admin` 188,4.

## 6. Revues avant push

Aucun code applicatif écrit (données, styles, générateur de visuels). Sécurité (run non sensible) : aucun secret ; police et visuels locaux ; `.invalid` pour l'adresse de contact. Scan de secrets : recherche manuelle : rien.

## 7. Risques ouverts

1. Identité à valider par le client (couleurs, capitales, poteau).
2. Hero : les illustrations sombres sont sous un voile : l'effet est discret ; une photo libre de droits pourra les remplacer.
3. Mono-site : l'e2e et la démonstration ne montrent pas le choix du site (présent dans `mahaza-app`).
4. Staging en HTTP sur IP : risque accepté.

## 8. Prochain run : RUN-A (souche), puis `git merge upstream/main` dans cette app.
