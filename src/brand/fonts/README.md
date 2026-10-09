# Polices auto-hébergées

Aucune police n'est téléchargée au build ni à l'exécution : les fichiers ci-dessous sont versionnés et servis par l'application (`next/font/local`, voir `src/brand/theme/fonts.ts`).

**Licence** : toutes sous **SIL Open Font License 1.1** (usage, modification et redistribution libres, y compris dans le code cédé aux clients, à condition de conserver le fichier `OFL.txt` à côté de la police et de ne pas vendre la police seule). Le fichier de licence de chaque police est versionné dans son dossier.

| Rôle | Police | Fichier(s) | Poids réellement utilisés | Taille |
|---|---|---|---|---|
| `--font-sans` (corps, interface) | Inter 5.3.0 (variable, axe de graisse) | `inter/inter-latin-wght-normal.woff2` | 450, 500, 520, 600 (police variable : un seul fichier) | 47 Ko |
| `--font-display` (titres, wordmark) | **Oswald** 5.3.0 (variable, axe de graisse) | `oswald/oswald-latin-wght-normal.woff2` | 500 (titres), 600 (wordmark) ; en capitales ; pas d'italique | 28 Ko |
| `--font-mono` (références) | JetBrains Mono 5.3.0 (variable) | `jetbrains-mono/jetbrains-mono-latin-wght-normal.woff2` | 400-500 ; chargée à la demande, jamais préchargée | 40 Ko |

**Sous-ensemble** : `latin` de Fontsource (U+0000-00FF, œ/Œ, €, guillemets et espaces typographiques U+2000-206F, …), soit tout le français (lettres accentuées, « », œ, €, espace fine insécable). Les sous-ensembles `latin-ext`, cyrillique, grec et vietnamien ne sont pas inclus.

**Provenance** : paquets npm `@fontsource-variable/inter`, `@fontsource-variable/oswald` et `@fontsource-variable/jetbrains-mono` en 5.3.0 (fichiers `files/*-latin-*.woff2` et `LICENSE`), copiés tels quels (sans transformation). Les paquets ne sont pas des dépendances du projet. Empreintes SHA-256 :

```
bd73278ee0c50041b91b4c03d1229e35b501637f46b6409e7da2d3a758446ea5  oswald/oswald-latin-wght-normal.woff2
3100e775e8616cd2611beecfa23a4263d7037586789b43f035236a2e6fbd4c62  inter/inter-latin-wght-normal.woff2
18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e  jetbrains-mono/jetbrains-mono-latin-wght-normal.woff2
```

**Changer de police pour une marque** (dépôt client) : remplacer les fichiers de ce dossier **avec leur licence**, adapter `src/brand/theme/fonts.ts`. Un fichier de police tiers non libre ne doit jamais être déposé ici.
