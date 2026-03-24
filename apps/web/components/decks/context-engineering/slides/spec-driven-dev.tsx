"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function SpecDrivenDevSlide() {
  const { lang, t } = useTranslation<Translations>();

  const specContains = [
    t.specDrivenDev.spec1[lang],
    t.specDrivenDev.spec2[lang],
    t.specDrivenDev.spec3[lang],
    t.specDrivenDev.spec4[lang],
    t.specDrivenDev.spec5[lang],
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <div className="mb-2 flex items-center gap-3">
        <span className="font-mono text-xs tracking-widest text-muted-foreground/40">
          04
        </span>
        <h2 className="text-3xl font-bold md:text-5xl">
          {t.specDrivenDev.title[lang]}
        </h2>
      </div>
      <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {t.specDrivenDev.subtitle[lang]}
      </p>

      <div className="mb-8 grid gap-8 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="mb-4 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
            {t.specDrivenDev.problemTitle[lang]}
          </h3>
          <div className="border border-border bg-accent/10 p-6">
            <p className="mb-4 text-sm italic leading-relaxed text-muted-foreground">
              {t.specDrivenDev.badPrompt[lang]}
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground/70">
              {t.specDrivenDev.problemDesc[lang]}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
            {t.specDrivenDev.specTitle[lang]}
          </h3>
          <div className="divide-y divide-border">
            {specContains.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-3 first:pt-0 last:pb-0"
              >
                <span className="mt-0.5 shrink-0 font-mono text-xs text-muted-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          {t.specDrivenDev.insight[lang]}
        </p>
      </div>
    </div>
  );
}
