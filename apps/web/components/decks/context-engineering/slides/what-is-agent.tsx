"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function WhatIsAgentSlide() {
  const { lang, t } = useTranslation<Translations>();

  const items = [
    t.whatIsAgent.item1[lang],
    t.whatIsAgent.item2[lang],
    t.whatIsAgent.item3[lang],
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center px-8 py-12 md:px-16">
      <h1 className="mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl">
        {t.whatIsAgent.title[lang]}
      </h1>
      <p className="mb-10 max-w-2xl text-center text-xl text-muted-foreground md:text-lg">
        {t.whatIsAgent.desc[lang]}
      </p>

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
        <ol className="mb-18 list-decimal space-y-4 pl-5 marker:text-sm marker:text-muted-foreground/50">
          {items.map((item, i) => (
            <li key={i} className="text-sm leading-relaxed md:text-base">
              {item}
            </li>
          ))}
        </ol>

        <p className="text-left text-lg font-medium tracking-tight md:text-xl">
          {t.whatIsAgent.closingQuote[lang]}
        </p>
      </div>
    </div>
  );
}
