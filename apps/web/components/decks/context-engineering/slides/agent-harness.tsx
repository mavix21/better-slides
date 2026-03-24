"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function AgentHarnessSlide() {
  const { lang, t } = useTranslation<Translations>();

  const levers = [
    { num: "01", label: t.agentHarness.lever1[lang] },
    { num: "02", label: t.agentHarness.lever2[lang] },
    { num: "03", label: t.agentHarness.lever3[lang] },
    { num: "04", label: t.agentHarness.lever4[lang] },
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <h2 className="mb-3 text-3xl font-bold md:text-5xl">
        {t.agentHarness.title[lang]}
      </h2>
      <p className="mb-12 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {t.agentHarness.subtitle[lang]}
      </p>

      <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
        {levers.map((lever, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-background px-6 py-8 text-center transition-colors duration-150 hover:bg-accent/20"
          >
            <span className="mb-3 font-mono text-xs tracking-widest text-muted-foreground/40">
              {lever.num}
            </span>
            <span className="text-sm font-semibold md:text-base">
              {lever.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
