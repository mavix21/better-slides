"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function FAQsSlide() {
  const { lang, t } = useTranslation<Translations>();

  const faqs = [
    { q: t.faqs.q1[lang], a: t.faqs.a1[lang] },
    { q: t.faqs.q2[lang], a: t.faqs.a2[lang] },
    { q: t.faqs.q3[lang], a: t.faqs.a3[lang] },
    { q: t.faqs.q4[lang], a: t.faqs.a4[lang] },
    { q: t.faqs.q5[lang], a: t.faqs.a5[lang] },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:px-16">
      <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
        {t.faqs.title[lang]}
      </h2>
      <div className="grid max-w-5xl flex-1 gap-6 md:grid-cols-2">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6">
            <p className="mb-3 font-semibold">{faq.q}</p>
            <p className="text-sm text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
