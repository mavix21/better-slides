"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function CreditsSlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:justify-center md:px-16">
      <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
        {t.credits.title[lang]}
      </h2>
      <div className="grid flex-1 items-center gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm text-muted-foreground">
              {t.credits.promoCode[lang]}
            </p>
            <div className="rounded-xl border border-border bg-muted/30 px-8 py-6 font-mono text-3xl font-bold tracking-wider md:text-4xl">
              SALTA2025
            </div>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-muted-foreground" />
              <span>{t.credits.duration[lang]}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-muted-foreground" />
              <span>{t.credits.oneTime[lang]}</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {[
            { step: "1", title: t.credits.step1[lang], sub: t.credits.step1sub[lang] },
            { step: "2", title: t.credits.step2[lang], sub: t.credits.step2sub[lang] },
            { step: "3", title: t.credits.step3[lang], sub: t.credits.step3sub[lang] },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border">
                <span className="font-bold">{item.step}</span>
              </div>
              <div>
                <p className="mb-1 font-semibold">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
