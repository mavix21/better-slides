"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function WhatIsAgentSlide() {
  const { lang, t } = useTranslation<Translations>();

  const steps = [
    { num: "01", label: t.whatIsAgent.llm[lang] },
    { num: "02", label: t.whatIsAgent.action[lang] },
    { num: "03", label: t.whatIsAgent.result[lang] },
    { num: "04", label: t.whatIsAgent.repeat[lang] },
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center px-8 py-12 md:px-16">
      <h1 className="mb-6 text-center text-4xl font-bold tracking-tight md:text-6xl">
        {t.whatIsAgent.title[lang]}
      </h1>
      <p className="mb-20 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
        {t.whatIsAgent.desc[lang]}
      </p>

      <div className="flex flex-wrap items-center justify-center">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5 px-8">
              <span className="font-mono text-xs tracking-widest text-muted-foreground/40">
                {step.num}
              </span>
              <span className="text-sm font-medium md:text-base">
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className="text-muted-foreground/20">—</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
