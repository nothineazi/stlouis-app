import type { BrandConfig } from "@/core/types";
import { homeCopy } from "@/brand/copy/home";
import { seedBookings, seedCategories, seedPractitioners, seedRooms, seedServices, seedSites } from "@/brand/seed/catalog";

/**
 * Configuration de St Louis (barbershop) : identité, fonctionnalités activées, politiques par défaut.
 * C'est, avec le reste de `src/brand/`, le seul dossier qu'un dépôt client modifie. `src/core/**` ne lit la marque qu'ici.
 *
 * Aucune donnée réelle n'a été fournie par le client : site, adresse, horaires, services, prix, durées, barbiers, numéros (MoMo, WhatsApp),
 * clients et réservations sont FICTIFS et marqués comme tels. Les numéros ci-dessous sont des PLACEHOLDERS : ne jamais payer ni écrire à ces numéros.
 */
export const brand: BrandConfig = {
  name: "St Louis",
  tagline: "Barbershop",
  description: "Coupes, dégradés, barbe et rasage à la serviette chaude. Choisissez votre barbier et réservez votre fauteuil.",
  logoText: "ST LOUIS",
  // Pastille : poteau de barbier (SVG généré par `src/brand/generate-assets.mjs`) ; le wordmark texte s'affiche à côté.
  logoMark: { src: "/brand/mark.svg", width: 64, height: 64, alt: "St Louis" },
  city: "Ville fictive",
  address: "Adresse fictive",
  // Horaires FICTIFS (à confirmer).
  schedule: [{ label: "Tous les jours", days: [0, 1, 2, 3, 4, 5, 6], open: "09:00", close: "20:00" }],
  hoursToConfirm: true,
  // Adresse réservée à la documentation (TLD .invalid, RFC 2606) : ne reçoit jamais rien.
  contactEmail: "contact@stlouis-demo.invalid",
  socials: [],
  footerNote: "Démonstration du logiciel de réservation de St Louis : aucune réservation n'est réellement enregistrée et aucun paiement n'est effectué. Les données marquées FICTIF sont inventées.",

  // Couleurs, polices et rayon : src/brand/theme/tokens.css (thèmes clair et sombre). Ici : couleur de la barre du navigateur.
  themeColor: { light: "#FCF6E8", dark: "#040E25" },

  features: {
    walkInQueue: false, // file d'attente walk-in : reportée en maintenance
    groupBooking: false,
    depositByReliability: false,
  },

  opening: { open: "09:00", close: "20:00", closedDays: [], slotStepMin: 30 },
  defaultDurationMin: 60, // FICTIF : durées réelles inconnues

  // Politiques par défaut. Toutes les valeurs sont des PLACEHOLDERS FICTIFS, à valider avec St Louis.
  policies: {
    depositHoldMin: 30,
    maxCartItems: 5,
    seedHoldMin: 360,
    loyalty: {
      pointsPerVisit: 10,
      tiers: [
        { label: "Recrue", minPoints: 0 },
        { label: "Habitué", minPoints: 30 },
        { label: "Fidèle", minPoints: 60 },
      ],
    },
    // FICTIF : barème du « CA estimé » du back-office (jamais affiché côté client).
    fictivePriceByCategory: {
      "Coupe": 4000,
      "Barbe & rasage": 3500,
      "Enfant": 2500,
      "Soin du visage": 5000,
      "Coloration": 8000,
    },
    giftCard: { minAmount: 5000, maxAmount: 50000, stepAmount: 5000, messageMax: 200 },
  },

  momo: { merchantNumber: "6 11 11 11 11", merchantName: "ST LOUIS (FICTIF)" },
  whatsappNumber: "237611111111",
  referencePrefix: "STL",

  sites: seedSites,
  categories: seedCategories,
  services: seedServices,
  practitioners: seedPractitioners,
  rooms: seedRooms,
  seedBookings,
  home: homeCopy,
};
