import PromptToProductionSaltaDeck from "@/components/decks/prompt-to-production-salta";
import type { SlideDeckMode } from "@/components/slides/slide-deck";

export function DeckRenderer({
  slug,
  mode,
}: {
  slug: string;
  mode?: SlideDeckMode;
}) {
  if (slug === "prompt-to-production-salta") {
    return <PromptToProductionSaltaDeck mode={mode} />;
  }

  return null;
}
