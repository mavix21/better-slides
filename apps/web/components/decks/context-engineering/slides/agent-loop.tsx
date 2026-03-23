"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function AgentLoopSlide() {
  const { lang, t } = useTranslation<Translations>();

  const steps = [
    {
      num: "01",
      title: t.agentLoop.observe[lang],
      desc: t.agentLoop.observeDesc[lang],
    },
    {
      num: "02",
      title: t.agentLoop.plan[lang],
      desc: t.agentLoop.planDesc[lang],
    },
    {
      num: "03",
      title: t.agentLoop.act[lang],
      desc: t.agentLoop.actDesc[lang],
    },
    {
      num: "04",
      title: t.agentLoop.observeResult[lang],
      desc: t.agentLoop.observeResultDesc[lang],
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <h2 className="mb-14 text-3xl font-bold md:text-5xl">
        {t.agentLoop.title[lang]}
      </h2>

      <div className="grid w-full max-w-5xl grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col bg-background p-6 md:p-8">
            <span className="mb-4 font-mono text-xs tracking-widest text-muted-foreground/40">
              {step.num}
            </span>
            <h3 className="mb-2 text-sm font-semibold md:text-base">
              {step.title}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground/50">
        ↻ {t.agentLoop.repeatUntil[lang]}
      </p>
    </div>
  );
}
