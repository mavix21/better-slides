"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function BestPracticesSlide() {
  const { lang, t } = useTranslation<Translations>();

  const practices = [
    t.bestPractices.practice1[lang],
    t.bestPractices.practice2[lang],
    t.bestPractices.practice3[lang],
    t.bestPractices.practice4[lang],
    t.bestPractices.practice5[lang],
  ];

  const tools = [
    t.bestPractices.tool1[lang],
    t.bestPractices.tool2[lang],
    t.bestPractices.tool3[lang],
    t.bestPractices.tool4[lang],
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <h2 className="mb-12 text-3xl font-bold md:text-5xl">
        {t.bestPractices.title[lang]}
      </h2>

      <div className="grid gap-8 md:grid-cols-2 md:gap-16">
        <div className="divide-y divide-border">
          {practices.map((practice, i) => (
            <div
              key={i}
              className="flex items-start gap-5 py-4 first:pt-0 last:pb-0"
            >
              <span className="mt-0.5 shrink-0 font-mono text-xs text-muted-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed md:text-base">{practice}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-6 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
            {t.bestPractices.toolsTitle[lang]}
          </h3>
          <div className="grid grid-cols-2 gap-px border border-border bg-border">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="bg-background px-5 py-4 text-sm font-medium"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
