"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function PromptToCESlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col items-center justify-center px-8 py-12 md:px-16">
      <div className="mb-14 flex items-center gap-5">
        <p className="text-sm text-muted-foreground/40 line-through decoration-muted-foreground/30">
          Prompt Engineering
        </p>
        <span className="text-muted-foreground/20">→</span>
        <p className="text-sm font-semibold">Context Engineering</p>
      </div>

      <blockquote className="mb-14 max-w-3xl border-l-2 border-border pl-8">
        <p className="text-xl leading-relaxed font-light tracking-tight text-muted-foreground italic md:text-2xl">
          {t.promptToCE.quote[lang]}
        </p>
        <cite className="mt-6 flex items-center gap-3 not-italic">
          <span className="h-px w-5 bg-border" />
          <span className="text-xs font-medium text-muted-foreground/60">
            {t.promptToCE.author[lang]}
          </span>
        </cite>
      </blockquote>

      <div className="flex items-center gap-5 text-sm">
        <span className="text-muted-foreground/50">
          {t.promptToCE.prompts[lang]}
        </span>
        <span className="text-muted-foreground/20">→</span>
        <span className="font-semibold">{t.promptToCE.ce[lang]}</span>
      </div>
    </div>
  );
}
