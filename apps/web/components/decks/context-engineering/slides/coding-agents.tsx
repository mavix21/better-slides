"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function CodingAgentsSlide() {
  const { lang, t } = useTranslation<Translations>();

  const agents = [
    { num: "01", name: "Claude Code", detail: t.codingAgents.claudeCode[lang] },
    {
      num: "02",
      name: "Cursor / Windsurf",
      detail: t.codingAgents.cursorWindsurf[lang],
    },
    {
      num: "03",
      name: "LangChain / LlamaIndex",
      detail: t.codingAgents.langchain[lang],
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <h2 className="mb-3 text-3xl font-bold md:text-5xl">
        {t.codingAgents.title[lang]}
      </h2>
      <p className="mb-12 text-sm text-muted-foreground md:text-base">
        {t.codingAgents.subtitle[lang]}
      </p>

      <div className="mb-10 grid gap-px border border-border bg-border md:grid-cols-3">
        {agents.map((agent, i) => (
          <div key={i} className="flex flex-col bg-background p-8">
            <span className="mb-4 font-mono text-xs tracking-widest text-muted-foreground/40">
              {agent.num}
            </span>
            <h3 className="mb-3 text-lg font-semibold">{agent.name}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {agent.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          {t.codingAgents.result[lang]}
        </p>
      </div>
    </div>
  );
}
