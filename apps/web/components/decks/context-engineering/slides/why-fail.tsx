"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function WhyFailSlide() {
  const { lang, t } = useTranslation<Translations>();

  const reasons = [
    t.whyFail.reason1[lang],
    t.whyFail.reason2[lang],
    t.whyFail.reason3[lang],
    t.whyFail.reason4[lang],
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <h2 className="mb-14 text-3xl font-bold md:text-5xl">
        {t.whyFail.title[lang]}
      </h2>

      <div className="grid w-full max-w-4xl gap-8 md:grid-cols-2 md:gap-12">
        <div className="divide-y divide-border">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="flex items-start gap-5 py-5 first:pt-0 last:pb-0"
            >
              <span className="mt-0.5 shrink-0 font-mono text-xs text-muted-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed md:text-base">{reason}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center border-l border-border pl-8 md:pl-12">
          <p className="text-lg leading-relaxed font-semibold text-destructive/80 md:text-xl">
            {t.whyFail.result[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}
