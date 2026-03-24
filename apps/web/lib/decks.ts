export type DeckDefinition = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  slideCount: number;
};

export const decks: DeckDefinition[] = [
  {
    slug: "context-engineering",
    title: "Context Engineering for Coding Agents",
    description:
      "A talk on how context engineering is replacing prompt engineering for building reliable AI coding agents.",
    eyebrow: "Tech talk",
    slideCount: 13,
  },
];

export function getDeckBySlug(slug: string) {
  return decks.find((deck) => deck.slug === slug);
}
