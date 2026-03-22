"use client";

import { Globe, Link2, Play } from "lucide-react";
import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function ShipShowcaseSlide() {
  const { lang, t } = useTranslation<Translations>();

  const steps = [
    { icon: Globe, title: t.ship.step1[lang], desc: t.ship.step1desc[lang] },
    { icon: Link2, title: t.ship.step2[lang], desc: t.ship.step2desc[lang] },
    { icon: Play, title: t.ship.step3[lang], desc: t.ship.step3desc[lang] },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:px-16">
      <h2 className="mb-4 text-3xl font-bold md:text-5xl">
        {t.ship.title[lang]}
      </h2>
      <p className="mb-12 text-xl text-muted-foreground">{t.ship.subtitle[lang]}</p>
      <div className="grid flex-1 gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border">
              <span className="text-2xl font-bold">{i + 1}</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
            <p className="text-muted-foreground">{step.desc}</p>
            <div className="mt-auto pt-6">
              <step.icon className="h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
