"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function WhatIsCESlide() {
  const { lang, t } = useTranslation<Translations>();

  const pillars = [
    { num: "01", label: t.whatIsCE.rightInfo[lang] },
    { num: "02", label: t.whatIsCE.rightFormat[lang] },
    { num: "03", label: t.whatIsCE.rightTime[lang] },
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center px-8 py-12 md:px-16">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        {t.whatIsCE.title[lang]}
      </h2>
      <p className="mb-16 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
        {t.whatIsCE.definition[lang]}
      </p>

      <div className="mb-12 grid w-full max-w-2xl grid-cols-3 gap-px border border-border bg-border">
        {pillars.map((pillar, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-background px-6 py-8 text-center"
          >
            <span className="mb-2 font-mono text-xs tracking-widest text-muted-foreground/40">
              {pillar.num}
            </span>
            <span className="text-sm font-semibold md:text-base">
              {pillar.label}
            </span>
          </div>
        ))}
      </div>

      <p className="max-w-2xl text-center text-xs text-muted-foreground/50 md:text-sm">
        {t.whatIsCE.anthropic[lang]}
      </p>
    </div>
  );
}
