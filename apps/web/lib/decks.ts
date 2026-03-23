export type DeckDefinition = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  slideCount: number;
};

export const decks: DeckDefinition[] = [
  {
    slug: "prompt-to-production-salta",
    title: "Prompt to Production Salta",
    description:
      "An event deck for a live build session, showcase, and presentation flow.",
    eyebrow: "Personal deck",
    slideCount: 15,
  },
  {
    slug: "context-engineering",
    title: "Context Engineering for Coding Agents",
    description:
      "A talk on how context engineering is replacing prompt engineering for building reliable AI coding agents.",
    eyebrow: "Tech talk",
    slideCount: 10,
  },
];

export function getDeckBySlug(slug: string) {
  return decks.find((deck) => deck.slug === slug);
}
