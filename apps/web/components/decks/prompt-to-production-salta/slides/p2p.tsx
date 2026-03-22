"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function P2PSlide() {
  const { lang, t } = useTranslation<Translations>();

  const steps = [
    t.p2p.step1[lang],
    t.p2p.step2[lang],
    t.p2p.step3[lang],
    t.p2p.step4[lang],
    t.p2p.step5[lang],
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:justify-center md:px-16">
      <h2 className="mb-8 text-3xl font-bold text-balance md:text-5xl">
        {t.p2p.title[lang]}
      </h2>
      <p className="mb-12 max-w-3xl text-xl leading-relaxed text-muted-foreground">
        {t.p2p.desc[lang]}
      </p>
      <div className="max-w-2xl rounded-2xl border border-border bg-card p-8">
        <p className="mb-4 text-2xl font-semibold">{t.p2p.subtitle[lang]}</p>
        <div className="space-y-3 text-muted-foreground">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-muted-foreground" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
