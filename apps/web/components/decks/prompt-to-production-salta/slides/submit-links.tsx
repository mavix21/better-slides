"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function SubmitLinksSlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col items-center overflow-y-auto px-8 py-12 md:justify-center md:py-0">
      <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-5xl">
        {t.submit.title[lang]}
      </h2>
      <div className="w-full max-w-2xl space-y-6">
        <a
          href="https://v0-v0prompttoproduction2026.vercel.app/submit"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/20 hover:bg-accent"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm text-muted-foreground">
                {t.submit.submitProject[lang]}
              </p>
              <p className="text-xl font-semibold">
                {t.submit.submitBuild[lang]}
              </p>
            </div>
            <ExternalLink className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
          </div>
          <p className="mt-4 font-mono text-sm break-all text-muted-foreground">
            v0-v0prompttoproduction2026.vercel.app/submit
          </p>
        </a>
        <a
          href="https://v0-v0prompttoproduction2026.vercel.app/browse"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/20 hover:bg-accent"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm text-muted-foreground">
                {t.submit.browseVote[lang]}
              </p>
              <p className="text-xl font-semibold">Browse & Vote</p>
            </div>
            <ExternalLink className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
          </div>
          <p className="mt-4 font-mono text-sm break-all text-muted-foreground">
            v0-v0prompttoproduction2026.vercel.app/browse
          </p>
        </a>
      </div>
      <div className="mt-16 flex items-center gap-6">
        <Image
          src="/v0-logo.svg"
          alt="v0"
          width={60}
          height={30}
          className="h-6 w-auto opacity-40"
        />
        <Image
          src="/vercel-logo.svg"
          alt="Vercel"
          width={24}
          height={21}
          className="h-5 w-auto opacity-40"
        />
      </div>
    </div>
  );
}
