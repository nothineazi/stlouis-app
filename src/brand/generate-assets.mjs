#!/usr/bin/env node
// Génère les visuels SVG de St Louis (poteau de barbier, ciseaux, rasoir, peigne) : formes géométriques, aucune photo, aucun visage, aucun média tiers.
// Usage : node src/brand/generate-assets.mjs   (écrit dans public/brand/ et src/app/icon.svg ; sortie déterministe)
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const out = (rel, svg) => {
  const file = join(root, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, svg.trim() + "\n");
};

// Palette de la marque (décorative : les contrastes de texte sont vérifiés sur les jetons, pas sur ces visuels).
const NAVY = "#101B3A";
const NAVY_2 = "#1A2A55";
const RED = "#C0392B";
const BLUE = "#3B6FD9";
const CREAM = "#F6EFE0";
const SAND = "#E9DDB8";

const svg = (w, h, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img"><title>${title}</title>${body}</svg>`;

/** Poteau de barbier : capsule verticale à bandes diagonales rouge / crème / bleu, embouts dorés. */
const pole = (id, x, y, w, h, stripe = 36) => {
  const cap = Math.max(5, Math.round(w * 0.24));
  const ext = Math.max(2, Math.round(w * 0.12));
  return `
<defs>
  <clipPath id="${id}-c"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w / 2}"/></clipPath>
  <pattern id="${id}-p" width="${stripe * 3}" height="${stripe * 3}" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
    <rect width="${stripe * 3}" height="${stripe * 3}" fill="${CREAM}"/>
    <rect width="${stripe}" height="${stripe * 3}" fill="${RED}"/>
    <rect x="${stripe * 2}" width="${stripe}" height="${stripe * 3}" fill="${BLUE}"/>
  </pattern>
</defs>
<rect x="${x - 4}" y="${y - 4}" width="${w + 8}" height="${h + 8}" rx="${(w + 8) / 2}" fill="${SAND}"/>
<g clip-path="url(#${id}-c)"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id}-p)"/>
  <rect x="${x}" y="${y}" width="${w * 0.28}" height="${h}" fill="#fff" opacity="0.18"/></g>
<rect x="${x - ext}" y="${y - cap + 4}" width="${w + ext * 2}" height="${cap}" rx="${Math.round(cap / 3)}" fill="${SAND}"/>
<rect x="${x - ext}" y="${y + h - 4}" width="${w + ext * 2}" height="${cap}" rx="${Math.round(cap / 3)}" fill="${SAND}"/>`;
};

/** Ciseaux ouverts (contour crème), centrés en (cx, cy), longueur ~ len. */
const scissors = (cx, cy, len, color = CREAM, sw = 10) => `
<g transform="translate(${cx} ${cy})" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
  <circle cx="${-len * 0.34}" cy="${-len * 0.2}" r="${len * 0.13}"/>
  <circle cx="${-len * 0.34}" cy="${len * 0.2}" r="${len * 0.13}"/>
  <path d="M ${-len * 0.24} ${-len * 0.14} L ${len * 0.45} ${len * 0.1}"/>
  <path d="M ${-len * 0.24} ${len * 0.14} L ${len * 0.45} ${-len * 0.1}"/>
  <circle cx="${len * 0.02}" cy="0" r="${sw * 0.7}" fill="${color}"/>
</g>`;

/** Rasoir à lame droite. */
const razor = (cx, cy, len, color = CREAM) => `
<g transform="translate(${cx} ${cy}) rotate(-20)" fill="${color}">
  <rect x="${-len * 0.5}" y="${-len * 0.05}" width="${len * 0.42}" height="${len * 0.1}" rx="${len * 0.05}"/>
  <path d="M ${-len * 0.1} ${-len * 0.05} L ${len * 0.5} ${-len * 0.05} L ${len * 0.5} ${len * 0.012} Q ${len * 0.3} ${len * 0.09} ${-len * 0.1} ${len * 0.05} Z"/>
  <circle cx="${-len * 0.1}" cy="0" r="${len * 0.03}" fill="${NAVY}"/>
</g>`;

/** Peigne. */
const comb = (cx, cy, len, color = CREAM) => {
  const teeth = Array.from({ length: 12 }, (_, i) => `<rect x="${-len / 2 + 6 + i * ((len - 12) / 12)}" y="${len * 0.06}" width="${len * 0.025}" height="${len * 0.16}" rx="3"/>`).join("");
  return `<g transform="translate(${cx} ${cy}) rotate(12)" fill="${color}"><rect x="${-len / 2}" y="${-len * 0.04}" width="${len}" height="${len * 0.12}" rx="${len * 0.04}"/>${teeth}</g>`;
};

/** Bandes diagonales fines de fond. */
const bg = (id, w, h, base = NAVY) => `
<defs><pattern id="${id}" width="44" height="44" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><rect width="44" height="44" fill="${base}"/><rect width="6" height="44" fill="${NAVY_2}"/></pattern></defs>
<rect width="${w}" height="${h}" fill="url(#${id})"/>`;

// Héros (1290 × 610) : deux scènes sombres, le texte de l'accueil se superpose à gauche.
out("public/brand/hero-1.svg", svg(1290, 610, `${bg("h1", 1290, 610)}${pole("h1pole", 1000, 96, 110, 410)}${scissors(760, 420, 300, SAND, 12)}${comb(1190, 520, 160, SAND)}`, "Illustration : poteau de barbier, ciseaux et peigne"));
out("public/brand/hero-2.svg", svg(1290, 610, `${bg("h2", 1290, 610, "#0C1530")}${pole("h2pole", 1080, 96, 96, 400, 32)}${razor(800, 360, 440, SAND)}${scissors(1000, 540, 190, CREAM, 9)}`, "Illustration : rasoir, ciseaux et poteau de barbier"));

// À propos (500 × 477) : miroir de barbier, poteau et outils.
out(
  "public/brand/about.svg",
  svg(
    500,
    477,
    `${bg("a1", 500, 477)}
<ellipse cx="250" cy="215" rx="130" ry="170" fill="${CREAM}" opacity="0.1"/>
<ellipse cx="250" cy="215" rx="130" ry="170" fill="none" stroke="${SAND}" stroke-width="12"/>
<path d="M 190 120 Q 215 90 250 100" stroke="${CREAM}" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.5"/>
${pole("a1pole", 405, 120, 56, 240, 22)}
${scissors(160, 420, 170, SAND, 8)}
${comb(330, 430, 130, CREAM)}`,
    "Illustration : miroir, poteau de barbier et outils",
  ),
);

// Carte cadeau (500 × 250).
out(
  "public/brand/gift.svg",
  svg(
    500,
    250,
    `<rect width="500" height="250" rx="22" fill="${CREAM}"/>
<defs><pattern id="g1" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><rect width="48" height="48" fill="${CREAM}"/><rect width="16" height="48" fill="${RED}"/><rect x="32" width="16" height="48" fill="${BLUE}"/></pattern></defs>
<rect x="0" y="0" width="500" height="26" fill="url(#g1)"/><rect x="0" y="224" width="500" height="26" fill="url(#g1)"/>
<rect x="30" y="56" width="440" height="138" rx="14" fill="${NAVY}"/>
${scissors(250, 125, 150, SAND, 7)}`,
    "Illustration : carte cadeau à bandes de barbier",
  ),
);

// Étapes du parcours (200 × 200).
const disc = (name, inner, title) => out(`public/brand/${name}.svg`, svg(200, 200, `<circle cx="100" cy="100" r="100" fill="${NAVY}"/><circle cx="100" cy="100" r="92" fill="none" stroke="${SAND}" stroke-width="3"/>${inner}`, title));
disc("process-2", scissors(100, 100, 120, CREAM, 7), "Illustration : ciseaux");
disc("process-3", razor(100, 100, 130, CREAM), "Illustration : rasoir");

// Décor (193 × 158) et pastille de marque.
out("public/brand/decor.svg", svg(193, 158, `${pole("d1", 80, 28, 34, 100, 14)}`, "Décor : poteau de barbier"));
const mark = (size, radius, pad) => {
  const s = size - pad * 2;
  const w = s * 0.3;
  return `<rect width="${size}" height="${size}" rx="${radius}" fill="${NAVY}"/>${pole("m" + size, pad + (s - w) / 2, pad + s * 0.18, w, s * 0.58, s * 0.1)}`;
};
out("public/brand/mark.svg", svg(64, 64, mark(64, 14, 4), "St Louis"));
out("src/app/icon.svg", svg(64, 64, mark(64, 14, 4), "St Louis"));
console.log("Visuels St Louis générés.");
