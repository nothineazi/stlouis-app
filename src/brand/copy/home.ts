import type { HomeContent } from "@/core/types";

/**
 * Textes et visuels de l'accueil de St Louis (barbershop). Tout le contenu est FICTIF en attendant les informations du client ; les images sont des
 * illustrations SVG générées (`node src/brand/generate-assets.mjs`), sans visage, servies depuis `public/brand/`.
 */
export const homeCopy: HomeContent = {
  heroKicker: "Barbershop",
  heroTitle: "Bienvenue chez St Louis",
  heroImages: [
    { src: "/brand/hero-1.svg", width: 1290, height: 610, alt: "Illustration : poteau de barbier, ciseaux et peigne" },
    { src: "/brand/hero-2.svg", width: 1290, height: 610, alt: "Illustration : rasoir, ciseaux et poteau de barbier" },
  ],
  about: {
    title: "L'art du barbier",
    text: "Coupes, dégradés, barbe et rasage à la serviette chaude : choisissez votre barbier et réservez votre fauteuil en quelques instants, depuis votre téléphone. Services, prix et barbiers présentés ici sont fictifs.",
    image: { src: "/brand/about.svg", width: 500, height: 477, alt: "Illustration : miroir, poteau de barbier et outils" },
  },
  featured: [
    { title: "Dégradé", description: "Un dégradé net, du plus court au plus progressif, fini aux contours.", icon: "scissors" },
    { title: "Rasage serviette chaude", description: "Le rituel du barbier, à l'ancienne : serviette chaude, mousse, lame droite.", icon: "flame" },
    { title: "Barbe + soin à l'huile", description: "Taille, forme et soin à l'huile pour une barbe nette et souple.", icon: "crown" },
    { title: "Coupe enfant", description: "Une coupe soignée pour les plus jeunes, en moins de 12 ans.", icon: "sparkles" },
  ],
  process: [
    { title: "Conseil" },
    { title: "Coupe", image: { src: "/brand/process-2.svg", width: 200, height: 200, alt: "Illustration : ciseaux" } },
    { title: "Finitions", image: { src: "/brand/process-3.svg", width: 200, height: 200, alt: "Illustration : rasoir" } },
  ],
  gift: {
    title: "Cartes cadeaux",
    text: "Offrez une coupe ou un rasage. Simulation d'une carte cadeau : choisissez un montant fictif et prévisualisez la carte.",
    image: { src: "/brand/gift.svg", width: 500, height: 250, alt: "Illustration : carte cadeau à bandes de barbier" },
    amounts: [5000, 10000, 15000, 25000, 50000],
  },
  decorImage: { src: "/brand/decor.svg", width: 193, height: 158 },
};
