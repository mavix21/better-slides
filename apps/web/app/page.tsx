import Link from "next/link";
import { ArrowRight, Presentation, Sparkles } from "lucide-react";

import { decks } from "@/lib/decks";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10 md:px-10 md:py-14">
        <section className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              Personal slide deck library
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Build and present your decks from code.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                Browse your hard-coded presentations, open a focused preview,
                and launch a clean presentation mode whenever you&apos;re ready.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
              <Presentation className="h-4 w-4" />
              {decks.length} {decks.length === 1 ? "deck" : "decks"}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {decks.map((deck) => (
            <article
              key={deck.slug}
              className="group flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-foreground/20"
            >
              <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-border bg-black">
                <div className="flex h-full items-end bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
                  <div className="space-y-2 text-white">
                    <p className="text-xs font-medium tracking-[0.2em] text-white/60 uppercase">
                      {deck.eyebrow}
                    </p>
                    <h2 className="text-2xl leading-tight font-semibold">
                      {deck.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {deck.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {deck.slideCount} slides
                  </p>
                </div>

                <Link
                  href={`/decks/${deck.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
                >
                  Open preview
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
