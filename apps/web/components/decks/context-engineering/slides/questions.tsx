"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function QuestionsSlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col items-center justify-center px-8 py-12 md:px-16">
      <p className="text-4xl font-bold md:text-6xl">
        {t.questions.title[lang]}
      </p>
    </div>
  );
}
