"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function ChallengeSlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:justify-center md:px-16">
      <h2 className="mb-6 text-3xl font-bold text-balance md:text-5xl">
        {t.challenge.title[lang]}
      </h2>
      <p className="mb-12 max-w-3xl text-xl leading-relaxed text-muted-foreground">
        {t.challenge.desc[lang]}
        <br />
        {lang === "es" ? "Se trata de " : "It's about "}
        <span className="text-foreground">{t.challenge.momentum[lang]}</span>{" "}
        {t.challenge.barriers[lang]}
      </p>
      <div className="mb-12 space-y-4">
        {[t.challenge.q1[lang], t.challenge.q2[lang], t.challenge.q3[lang]].map(
          (question, i) => (
            <div key={i} className="flex items-center gap-4 text-lg">
              <div className="h-2 w-2 rounded-full bg-muted-foreground" />
              <span className="text-foreground/80">{question}</span>
            </div>
          )
        )}
      </div>
      <p className="text-3xl font-bold md:text-4xl">{t.challenge.cta[lang]}</p>
    </div>
  );
}
