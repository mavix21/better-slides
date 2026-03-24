"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function McpServersSlide() {
  const { lang, t } = useTranslation<Translations>();

  const capabilities = [
    { num: "01", label: t.mcpServers.cap1[lang] },
    { num: "02", label: t.mcpServers.cap2[lang] },
    { num: "03", label: t.mcpServers.cap3[lang] },
    { num: "04", label: t.mcpServers.cap4[lang] },
    { num: "05", label: t.mcpServers.cap5[lang] },
    { num: "06", label: t.mcpServers.cap6[lang] },
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <div className="mb-2 flex items-center gap-3">
        <span className="font-mono text-xs tracking-widest text-muted-foreground/40">
          02
        </span>
        <h2 className="text-3xl font-bold md:text-5xl">
          {t.mcpServers.title[lang]}
        </h2>
      </div>
      <p className="mb-10 text-sm text-muted-foreground md:text-base">
        {t.mcpServers.subtitle[lang]}
      </p>

      <div className="mb-8 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-3">
        {capabilities.map((cap, i) => (
          <div
            key={i}
            className="flex flex-col bg-background p-6 transition-colors duration-150 hover:bg-accent/20 md:p-8"
          >
            <span className="mb-3 font-mono text-xs tracking-widest text-muted-foreground/40">
              {cap.num}
            </span>
            <p className="text-sm font-semibold leading-relaxed">
              {cap.label}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          {t.mcpServers.insight[lang]}
        </p>
      </div>
    </div>
  );
}
