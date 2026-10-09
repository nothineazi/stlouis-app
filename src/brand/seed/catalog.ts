import type { Practitioner, Room, SeedBooking, Service, Site } from "@/core/types";

/**
 * Données de St Louis (barbershop).
 *
 * TOUT est FICTIF : site, adresse, services, prix, durées, barbiers, postes, clients, réservations. Aucune donnée réelle n'a été fournie par le client.
 * Chaque entrée de personne ou de lieu porte `fictive: true` (badge « FICTIF » dans l'UI).
 */

// ---------------------------------------------------------------------------
// Site (FICTIF)
// ---------------------------------------------------------------------------

/** FICTIF : acompte forfaitaire de démonstration, en FCFA. */
const FICTIVE_DEPOSIT_FCFA = 2000;

export const seedSites: Site[] = [
  { id: "stl-salon", name: "St Louis Barbershop", city: "Ville fictive", address: "Adresse fictive", depositAmount: FICTIVE_DEPOSIT_FCFA },
];

// ---------------------------------------------------------------------------
// Catalogue (FICTIF) — noms, prix indicatifs en FCFA ; durées non renseignées (créneaux de 60 min FICTIFS)
// ---------------------------------------------------------------------------

const CATALOG = [
  {
    key: "cp",
    category: "Coupe",
    services: [["Coupe classique", 3000], ["Dégradé", 4000], ["Dégradé + contours", 5000], ["Coupe ciseaux", 5000]],
  },
  {
    key: "bb",
    category: "Barbe & rasage",
    services: [["Taille de barbe", 2500], ["Rasage serviette chaude", 4000], ["Barbe + soin à l'huile", 4500], ["Liseré et contours", 2000]],
  },
  {
    key: "en",
    category: "Enfant",
    services: [["Coupe enfant (moins de 12 ans)", 2500], ["Dégradé enfant", 3000]],
  },
  {
    key: "sv",
    category: "Soin du visage",
    services: [["Soin visage express", 5000], ["Gommage et masque", 7000], ["Épilation nez et oreilles", 1500]],
  },
  {
    key: "co",
    category: "Coloration",
    services: [["Coloration cheveux", 8000], ["Coloration barbe", 6000], ["Décoloration et mèches", 12000]],
  },
] as const;

type CatKey = (typeof CATALOG)[number]["key"];

const slug = (name: string) =>
  name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Identifiant stable d'un service : `<clé catégorie>-<nom slugifié>`. */
const sid = (key: CatKey, name: string) => `${key}-${slug(name)}`;

export const seedCategories: string[] = CATALOG.map((c) => c.category);

export const seedServices: Service[] = CATALOG.flatMap((c) =>
  c.services.map(([name, price]): Service => ({ id: sid(c.key, name), name, category: c.category, price })),
);

const idsOf = (key: CatKey) => CATALOG.find((c) => c.key === key)!.services.map(([n]) => sid(key, n));

// ---------------------------------------------------------------------------
// Barbiers et postes (FICTIFS)
// ---------------------------------------------------------------------------

const SITE_ID = seedSites[0].id;

/** Noms inventés (FICTIF) : prénom et initiale. */
const BARBERS: { name: string; role: string; serviceIds: string[] }[] = [
  { name: "Marc A.", role: "Barbier", serviceIds: [...idsOf("cp"), ...idsOf("en")] },
  { name: "Joël K.", role: "Barbier senior", serviceIds: [...idsOf("cp"), ...idsOf("bb"), ...idsOf("en")] },
  { name: "Samuel T.", role: "Spécialiste barbe et rasage", serviceIds: [...idsOf("bb"), ...idsOf("cp").slice(0, 2)] },
  { name: "Éric N.", role: "Coloriste et soin du visage", serviceIds: [...idsOf("sv"), ...idsOf("co")] },
];

export const seedPractitioners: Practitioner[] = BARBERS.map((b, i): Practitioner => ({
  id: `${SITE_ID}-p${i + 1}`,
  siteId: SITE_ID,
  name: b.name,
  role: b.role,
  serviceIds: b.serviceIds,
  active: true,
  fictive: true,
}));

const ROOM_DEFS = [
  { key: "poste1", name: "Poste 1", description: "Fauteuil de barbier : coupes, barbe et enfants.", categories: ["Coupe", "Barbe & rasage", "Enfant"] },
  { key: "poste2", name: "Poste 2", description: "Fauteuil de barbier : coupes, barbe et enfants.", categories: ["Coupe", "Barbe & rasage", "Enfant"] },
  { key: "poste3", name: "Poste 3", description: "Fauteuil de barbier : coupes et rasage.", categories: ["Coupe", "Barbe & rasage"] },
  { key: "soin", name: "Espace soin et couleur", description: "Soins du visage et colorations.", categories: ["Soin du visage", "Coloration"] },
] as const;

export const seedRooms: Room[] = ROOM_DEFS.map((r): Room => ({
  id: `${SITE_ID}-r-${r.key}`,
  siteId: SITE_ID,
  name: r.name,
  description: r.description,
  categories: [...r.categories],
  active: true,
  fictive: true,
}));

// ---------------------------------------------------------------------------
// Réservations seed (FICTIF : clients, horaires, statuts d'acompte)
// ---------------------------------------------------------------------------

/** [jour (0 = lundi de la semaine en cours), heure, clé catégorie, nom du service, acompte reçu] */
type SeedRow = [number, string, CatKey, string, boolean];

// Créneaux de 60 min (durée par défaut FICTIVE). Horaires FICTIFS : tous les jours 9h – 20h.
const SEED_ROWS: SeedRow[] = [
  [0, "09:30", "cp", "Dégradé", true],
  [0, "11:00", "bb", "Taille de barbe", true],
  [0, "15:00", "cp", "Coupe classique", false],
  [1, "10:00", "bb", "Rasage serviette chaude", true],
  [1, "12:00", "en", "Coupe enfant (moins de 12 ans)", true],
  [1, "16:30", "sv", "Soin visage express", false],
  [2, "09:00", "cp", "Dégradé + contours", true],
  [2, "14:00", "co", "Coloration barbe", false],
  [3, "11:30", "bb", "Barbe + soin à l'huile", true],
  [3, "17:00", "cp", "Coupe ciseaux", true],
  [4, "10:00", "cp", "Dégradé", false],
  [4, "13:30", "bb", "Liseré et contours", true],
  [4, "18:00", "co", "Coloration cheveux", true],
  [5, "10:30", "en", "Dégradé enfant", true],
  [5, "12:00", "cp", "Coupe classique", false],
  [5, "15:30", "sv", "Gommage et masque", true],
  [6, "11:00", "bb", "Taille de barbe", false],
  [6, "14:00", "cp", "Dégradé", true],
];

// Noms inventés (FICTIF).
const CUSTOMERS = [
  "Alain Mbarga", "Brice Tchoumi", "Cédric Fotso", "Didier Ngassa", "Éric Essomba", "Fabrice Kamga",
  "Gilles Biyick", "Hervé Nkoulou", "Igor Ewane", "Jules Dongmo", "Kevin Manga", "Landry Tagne",
  "Michel Pouth", "Nestor Mekou", "Olivier Abena", "Patrick Njoh", "Quentin Etoundi", "Roger Kouam",
  "Serge Wouembe", "Thierry Ndjock", "Urbain Fouda", "Valère Tchamba", "William Bella", "Yvan Lekane",
];

export const seedBookings: SeedBooking[] = SEED_ROWS.map(([dayOffset, start, key, name, depositReceived], i): SeedBooking => {
  const serviceId = sid(key, name);
  const category = CATALOG.find((c) => c.key === key)!.category;
  return {
    id: `b-${SITE_ID}-${i + 1}`,
    siteId: SITE_ID,
    serviceId,
    practitionerId: seedPractitioners.find((p) => p.serviceIds.includes(serviceId))!.id,
    roomId: seedRooms.find((r) => r.categories.includes(category))!.id,
    dayOffset,
    start,
    customerName: CUSTOMERS[i % CUSTOMERS.length],
    // Numéros fictifs : plage de test, jamais joignables.
    customerPhone: `+237 600 00 00 ${String(i + 1).padStart(2, "0")}`,
    depositReceived,
  };
});
