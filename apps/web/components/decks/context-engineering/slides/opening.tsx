"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function OpeningSlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col items-center justify-center px-8 py-12 md:px-16">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-center text-5xl font-bold tracking-tight md:text-7xl">
          {t.opening.title[lang]}
        </h1>
        <div className="h-px w-16 bg-border" />
        <p className="text-center text-sm font-light tracking-wide text-muted-foreground md:text-base">
          {t.opening.subtitle[lang]}
        </p>
      </div>
    </div>
  );
}
