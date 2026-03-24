"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function CustomRulesSlide() {
  const { lang, t } = useTranslation<Translations>();

  const doItems = [
    t.customRules.do1[lang],
    t.customRules.do2[lang],
    t.customRules.do3[lang],
    t.customRules.do4[lang],
  ];

  const dontItems = [
    t.customRules.dont1[lang],
    t.customRules.dont2[lang],
    t.customRules.dont3[lang],
  ];

  const tips = [
    t.customRules.tip1[lang],
    t.customRules.tip2[lang],
    t.customRules.tip3[lang],
    t.customRules.tip4[lang],
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <div className="mb-2 flex items-center gap-3">
        <span className="font-mono text-xs tracking-widest text-muted-foreground/40">
          01
        </span>
        <h2 className="text-3xl font-bold md:text-5xl">
          {t.customRules.title[lang]}
        </h2>
      </div>
      <p className="mb-10 text-sm text-muted-foreground md:text-base">
        {t.customRules.subtitle[lang]}
      </p>

      <div className="mb-8 grid gap-px border border-border bg-border md:grid-cols-2">
        <div className="bg-background p-6 md:p-8">
          <h3 className="mb-4 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
            {t.customRules.doTitle[lang]}
          </h3>
          <div className="divide-y divide-border">
            {doItems.map((item, i) => (
              <p
                key={i}
                className="py-3 text-sm leading-relaxed first:pt-0 last:pb-0"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-background p-6 md:p-8">
          <h3 className="mb-4 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
            {t.customRules.dontTitle[lang]}
          </h3>
          <div className="divide-y divide-border">
            {dontItems.map((item, i) => (
              <p
                key={i}
                className="py-3 text-sm leading-relaxed text-muted-foreground first:pt-0 last:pb-0"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
          {t.customRules.tipsTitle[lang]}
        </h3>
        <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="bg-background px-5 py-4 text-xs leading-relaxed text-muted-foreground md:text-sm"
            >
              {tip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
