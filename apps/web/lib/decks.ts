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
];

export function getDeckBySlug(slug: string) {
  return decks.find((deck) => deck.slug === slug);
}
