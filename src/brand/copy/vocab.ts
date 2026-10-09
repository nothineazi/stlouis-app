import type { Vocabulary } from "@/core/types";

/**
 * Vocabulaire de St Louis (barbershop) : « service » / « barbier ». Le socle (`src/core`, `src/ui`) lit uniquement `vocab`
 * et n'écrit jamais ces mots en dur (ADR-042).
 */
const cap = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

/** Dérive les formes plurielles et capitalisées à partir des deux mots masculins de la marque. */
export function makeVocab(
  words: { service: string; services: string; practitioner: string; practitioners: string },
  phrases: Pick<Vocabulary, "bookCta" | "discoverCta" | "navServices" | "featuredKicker" | "featuredTitle" | "composeTitle" | "catalogTitle" | "composeHint" | "searchExample">,
): Vocabulary {
  return {
    ...words,
    Service: cap(words.service),
    Services: cap(words.services),
    Practitioner: cap(words.practitioner),
    Practitioners: cap(words.practitioners),
    ...phrases,
  };
}

export const vocab: Vocabulary = makeVocab(
  { service: "service", services: "services", practitioner: "barbier", practitioners: "barbiers" },
  {
    bookCta: "Réserver une coupe",
    discoverCta: "Découvrir nos services",
    navServices: "Nos services",
    featuredKicker: "Nos classiques",
    featuredTitle: "Les incontournables",
    composeTitle: "Composez votre passage",
    catalogTitle: "Nos services",
    composeHint: "Composez votre passage : plusieurs services peuvent s'enchaîner sur un même créneau.",
    searchExample: "dégradé, barbe…",
  },
);
