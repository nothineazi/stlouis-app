# RUN-P — contrastes WCAG AA (St Louis)

Généré par `npm run check:contrast -- --markdown` à partir de `src/brand/theme/tokens.css` (OKLCH → sRGB → luminance relative ; transparences composées sur la surface réelle ; un jeton hors gamme sRGB fait échouer le contrôle). Seuils : texte 4,5:1, éléments d'interface 3:1.

| Groupe | Couple | Seuil | Clair | Sombre |
|---|---|---:|---:|---:|
| Socle | Texte courant sur fond | 4.5 | 16.90 ✅ | 18.36 ✅ |
| Socle | Texte sur carte | 4.5 | 18.15 ✅ | 16.64 ✅ |
| Socle | Texte sur menu / dialogue (popover) | 4.5 | 18.15 ✅ | 16.64 ✅ |
| Socle | Texte sur muted | 4.5 | 15.46 ✅ | 15.35 ✅ |
| Socle | Texte atténué sur fond | 4.5 | 6.09 ✅ | 7.72 ✅ |
| Socle | Texte atténué sur carte | 4.5 | 6.55 ✅ | 7.00 ✅ |
| Socle | Texte atténué sur muted | 4.5 | 5.58 ✅ | 6.46 ✅ |
| Socle | Texte atténué sur secondaire | 4.5 | 5.33 ✅ | 6.46 ✅ |
| Socle | Texte secondaire-foreground sur secondaire | 4.5 | 11.93 ✅ | 11.89 ✅ |
| Socle | Texte accent-foreground sur accent (survol) | 4.5 | 11.93 ✅ | 11.89 ✅ |
| Socle | Bouton primaire (primary-foreground sur primary) | 4.5 | 7.81 ✅ | 14.80 ✅ |
| Socle | Bouton primaire au survol (primary/90) | 4.5 | 6.69 ✅ | 12.01 ✅ |
| Socle | Accent en texte (primary-text) sur carte | 4.5 | 8.15 ✅ | 14.14 ✅ |
| Socle | Accent en texte sur fond | 4.5 | 7.59 ✅ | 15.61 ✅ |
| Socle | Accent en texte sur info-bg (pastille) | 4.5 | 6.84 ✅ | 11.90 ✅ |
| Socle | Accent en texte sur secondaire | 4.5 | 6.64 ✅ | 13.05 ✅ |
| Socle | Destructif en texte sur carte | 4.5 | 6.08 ✅ | 6.56 ✅ |
| Socle | Destructif en texte sur danger-bg | 4.5 | 5.21 ✅ | 5.64 ✅ |
| Socle | Succès en texte sur carte | 4.5 | 6.50 ✅ | 9.18 ✅ |
| Socle | Succès en texte sur fond | 4.5 | 6.05 ✅ | 10.13 ✅ |
| Socle | Avertissement en texte sur carte | 4.5 | 6.98 ✅ | 9.88 ✅ |
| Socle | Bordure de carte sur fond (non-texte) | 3 | 3.01 ✅ | 1.67 ✅ |
| Socle | Bordure de carte sur carte (non-texte) | 3 | 3.24 ✅ | 1.74 ✅ |
| Socle | Bordure de champ (input) sur carte (WCAG 1.4.11) | 3 | 3.24 ✅ | 3.52 ✅ |
| Socle | Bordure de champ (input) sur fond (WCAG 1.4.11) | 3 | 3.01 ✅ | 3.52 ✅ |
| Socle | Anneau de focus (ring) sur fond | 3 | 7.59 ✅ | 15.61 ✅ |
| Socle | Anneau de focus (ring) sur carte | 3 | 8.15 ✅ | 14.14 ✅ |
| Socle | Anneau de focus (ring) sur coque (sidebar) | 3 | 7.26 ✅ | 15.32 ✅ |
| Socle | Icône d'accent (primary) sur carte (non-texte) | 3 | 8.15 ✅ | 14.14 ✅ |
| Coque | Texte de la coque (sidebar-foreground sur sidebar) | 4.5 | 17.63 ✅ | 18.03 ✅ |
| Coque | Texte atténué (élément de navigation inactif) sur sidebar | 4.5 | 5.83 ✅ | 7.58 ✅ |
| Coque | Élément actif (sidebar-accent-foreground sur sidebar-accent) | 4.5 | 9.24 ✅ | 11.89 ✅ |
| Coque | Élément de navigation au survol (texte sur sidebar-accent/60) | 4.5 | 16.71 ✅ | 16.50 ✅ |
| Coque | Accent en texte sur sidebar | 4.5 | 7.26 ✅ | 15.32 ✅ |
| Coque | Filet de la coque (sidebar-border) sur sidebar (décoratif) | 1.05 | 1.20 ✅ | 1.29 ✅ |
| Statuts | Badge « pending » (fg sur bg) | 4.5 | 6.03 ✅ | 8.07 ✅ |
| Statuts | Bloc de planning « pending » : texte courant sur bg | 4.5 | 15.68 ✅ | 13.58 ✅ |
| Statuts | Bloc de planning « pending » : texte atténué sur bg | 4.5 | 5.65 ✅ | 5.71 ✅ |
| Statuts | Liseré de statut « pending » sur carte (non-texte) | 3 | 6.98 ✅ | 9.88 ✅ |
| Statuts | Badge « confirmed » (fg sur bg) | 4.5 | 5.69 ✅ | 7.82 ✅ |
| Statuts | Bloc de planning « confirmed » : texte courant sur bg | 4.5 | 15.91 ✅ | 14.17 ✅ |
| Statuts | Bloc de planning « confirmed » : texte atténué sur bg | 4.5 | 5.74 ✅ | 5.96 ✅ |
| Statuts | Liseré de statut « confirmed » sur carte (non-texte) | 3 | 6.50 ✅ | 9.18 ✅ |
| Statuts | Badge « completed » (fg sur bg) | 4.5 | 6.84 ✅ | 11.90 ✅ |
| Statuts | Bloc de planning « completed » : texte courant sur bg | 4.5 | 15.23 ✅ | 14.00 ✅ |
| Statuts | Bloc de planning « completed » : texte atténué sur bg | 4.5 | 5.49 ✅ | 5.89 ✅ |
| Statuts | Liseré de statut « completed » sur carte (non-texte) | 3 | 8.15 ✅ | 14.14 ✅ |
| Statuts | Badge « cancelled » (fg sur bg) | 4.5 | 5.58 ✅ | 6.46 ✅ |
| Statuts | Bloc de planning « cancelled » : texte courant sur bg | 4.5 | 15.46 ✅ | 15.35 ✅ |
| Statuts | Bloc de planning « cancelled » : texte atténué sur bg | 4.5 | 5.58 ✅ | 6.46 ✅ |
| Statuts | Liseré de statut « cancelled » sur carte (non-texte) | 3 | 6.55 ✅ | 7.00 ✅ |
| Statuts | Badge « noshow » (fg sur bg) | 4.5 | 6.20 ✅ | 7.11 ✅ |
| Statuts | Bloc de planning « noshow » : texte courant sur bg | 4.5 | 15.57 ✅ | 14.30 ✅ |
| Statuts | Bloc de planning « noshow » : texte atténué sur bg | 4.5 | 5.62 ✅ | 6.01 ✅ |
| Statuts | Liseré de statut « noshow » sur carte (non-texte) | 3 | 7.22 ✅ | 8.27 ✅ |
| Public | Texte sur secondaire (compte à rebours, sélection) | 4.5 | 14.78 ✅ | 15.35 ✅ |
| Public | Texte sur secondaire/50 (sélection) | 4.5 | 12.77 ✅ | 13.15 ✅ |
| Public | Texte atténué sur muted/60 | 4.5 | 5.78 ✅ | 7.01 ✅ |
| Public | Texte atténué sur muted/40 | 4.5 | 5.88 ✅ | 7.27 ✅ |
| Public | Bouton or (gold-foreground sur gold) | 4.5 | 12.12 ✅ | 12.10 ✅ |
| Public | Bouton or au survol (gold/90) | 4.5 | 12.49 ✅ | 9.86 ✅ |
| Public | Pastille « en attente » : texte sur gold/25 sur carte | 4.5 | 16.64 ✅ | 8.74 ✅ |
| Public | Bouton WhatsApp (success-foreground sur success) | 4.5 | 6.50 ✅ | 9.47 ✅ |
| Public | Bouton WhatsApp au survol (success/90) | 4.5 | 5.25 ✅ | 7.79 ✅ |
| Public | Succès sur success/10 (notice) | 4.5 | 5.24 ✅ | 8.63 ✅ |
| Public | Destructif sur destructif/10 | 4.5 | 5.16 ✅ | 5.76 ✅ |
| Public | Destructif sur destructif/5 | 4.5 | 5.23 ✅ | 6.89 ✅ |
| Public | Surface inversée : texte | 4.5 | 15.73 ✅ | 13.91 ✅ |
| Public | Surface inversée : texte/90 | 4.5 | 12.85 ✅ | 11.48 ✅ |
| Public | Surface inversée : texte/85 | 4.5 | 11.55 ✅ | 10.37 ✅ |
| Public | Surface inversée : texte/80 | 4.5 | 10.33 ✅ | 9.34 ✅ |
| Public | Surface inversée : texte/75 | 4.5 | 9.20 ✅ | 8.37 ✅ |
| Public | Surface inversée : texte/70 | 4.5 | 8.15 ✅ | 7.47 ✅ |
| Public | Surface inversée : or (liens, kicker) | 4.5 | 12.13 ✅ | 10.89 ✅ |
| Public | Hero : texte/90 sur voile inversé/88, visuel blanc (pire cas) | 4.5 | 9.37 ✅ | 8.18 ✅ |
| Public | Hero : or sur voile inversé/88, visuel blanc (pire cas) | 4.5 | 8.62 ✅ | 7.56 ✅ |
| Public | Piste d'interrupteur éteinte (muted-foreground/70) sur carte | 3 | 3.29 ✅ | 4.09 ✅ |
| Public | Barre de progression (primary) sur piste (line) | 3 | 5.68 ✅ | 10.68 ✅ |
| Public | Anneau de focus (or) sur surface inversée | 3 | 12.13 ✅ | 10.89 ✅ |

Tous les couples respectent le seuil WCAG AA (clair : 79 couples · sombre : 79 couples)
