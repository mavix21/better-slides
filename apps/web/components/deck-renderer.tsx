import SlideDeck, { type SlideDeckMode } from "@/components/slide-deck";

export function DeckRenderer({
  slug,
  mode,
}: {
  slug: string;
  mode?: SlideDeckMode;
}) {
  if (slug === "prompt-to-production-salta") {
    return <SlideDeck mode={mode} />;
  }

  return null;
}
