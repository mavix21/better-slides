"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function GetStartedSlide() {
  const { lang, t } = useTranslation<Translations>();

  const steps = [
    t.getStarted.step1[lang],
    t.getStarted.step2[lang],
    t.getStarted.step3[lang],
    t.getStarted.step4[lang],
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <h2 className="mb-12 text-3xl font-bold md:text-5xl">
        {t.getStarted.title[lang]}
      </h2>

      <div className="mb-10 w-full max-w-2xl divide-y divide-border">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex items-start gap-6 py-5 first:pt-0 last:pb-0"
          >
            <span className="mt-0.5 shrink-0 font-mono text-xs tracking-widest text-muted-foreground/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed md:text-base">{step}</p>
          </div>
        ))}
      </div>

      <div className="mb-10 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground/50 md:text-sm">
          {t.getStarted.future[lang]}
        </p>
      </div>

      <p className="text-3xl font-bold md:text-4xl">
        {t.getStarted.questions[lang]}
      </p>
    </div>
  );
}
