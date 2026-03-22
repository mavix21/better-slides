import { notFound } from "next/navigation";

import { DeckRenderer } from "@/components/deck-renderer";
import { PresentationFullscreen } from "@/components/presentation-fullscreen";
import { decks, getDeckBySlug } from "@/lib/decks";

export function generateStaticParams() {
  return decks.map((deck) => ({ slug: deck.slug }));
}

export default async function DeckPresentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deck = getDeckBySlug(slug);

  if (!deck) {
    notFound();
  }

  return (
    <>
      <PresentationFullscreen href={`/decks/${deck.slug}/present`} />
      <DeckRenderer slug={deck.slug} mode="present" />
    </>
  );
}
