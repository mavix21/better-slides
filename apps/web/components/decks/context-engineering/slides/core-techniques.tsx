"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function CoreTechniquesSlide() {
  const { lang, t } = useTranslation<Translations>();

  const techniques = [
    {
      num: "01",
      title: t.techniques.jit[lang],
      desc: t.techniques.jitDesc[lang],
    },
    {
      num: "02",
      title: t.techniques.compaction[lang],
      desc: t.techniques.compactionDesc[lang],
    },
    {
      num: "03",
      title: t.techniques.memory[lang],
      desc: t.techniques.memoryDesc[lang],
    },
    {
      num: "04",
      title: t.techniques.subAgents[lang],
      desc: t.techniques.subAgentsDesc[lang],
    },
    {
      num: "05",
      title: t.techniques.tools[lang],
      desc: t.techniques.toolsDesc[lang],
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <h2 className="mb-12 text-3xl font-bold md:text-5xl">
        {t.techniques.title[lang]}
      </h2>
      <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-5">
        {techniques.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col bg-background p-6 transition-colors duration-150 hover:bg-accent/20 md:p-8"
          >
            <span className="mb-4 font-mono text-xs tracking-widest text-muted-foreground/40">
              {tech.num}
            </span>
            <h3 className="mb-1.5 text-sm font-semibold">{tech.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {tech.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
