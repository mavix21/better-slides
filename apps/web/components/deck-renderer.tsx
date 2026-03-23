import PromptToProductionSaltaDeck from "@/components/decks/prompt-to-production-salta";
import ContextEngineeringDeck from "@/components/decks/context-engineering";
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

  if (slug === "context-engineering") {
    return <ContextEngineeringDeck mode={mode} />;
  }

  return null;
}
