import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";

import { DeckRenderer } from "@/components/deck-renderer";
import { PresentButton } from "@/components/present-button";
import { decks, getDeckBySlug } from "@/lib/decks";

export function generateStaticParams() {
  return decks.map((deck) => ({ slug: deck.slug }));
}

export default async function DeckPage({
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
    <main className="min-h-svh bg-background text-foreground">
      <div className="max--7xl mx-auto flex w-full flex-col gap-8 px-6 py-8 md:px-10 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to decks
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                {deck.eyebrow}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {deck.title}
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                {deck.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              {deck.slideCount} slides
            </div>
            <PresentButton href={`/decks/${deck.slug}/present`} />
          </div>
        </div>

        <div className="rounded-[32px] border border-border/80 bg-muted/30 p-3 shadow-sm md:p-4">
          <div className="aspect-video w-full overflow-hidden rounded-[24px] border border-border bg-black">
            <DeckRenderer slug={deck.slug} mode="preview" />
          </div>
        </div>
      </div>
    </main>
  );
}
