"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function SkillsSlide() {
  const { lang, t } = useTranslation<Translations>();

  const features = [
    { num: "01", title: t.skills.feat1Title[lang], desc: t.skills.feat1Desc[lang] },
    { num: "02", title: t.skills.feat2Title[lang], desc: t.skills.feat2Desc[lang] },
    { num: "03", title: t.skills.feat3Title[lang], desc: t.skills.feat3Desc[lang] },
    { num: "04", title: t.skills.feat4Title[lang], desc: t.skills.feat4Desc[lang] },
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <div className="mb-2 flex items-center gap-3">
        <span className="font-mono text-xs tracking-widest text-muted-foreground/40">
          03
        </span>
        <h2 className="text-3xl font-bold md:text-5xl">
          {t.skills.title[lang]}
        </h2>
      </div>
      <p className="mb-10 text-sm text-muted-foreground md:text-base">
        {t.skills.subtitle[lang]}
      </p>

      <div className="mb-8 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
        {features.map((feat, i) => (
          <div
            key={i}
            className="flex flex-col bg-background p-6 transition-colors duration-150 hover:bg-accent/20 md:p-8"
          >
            <span className="mb-4 font-mono text-xs tracking-widest text-muted-foreground/40">
              {feat.num}
            </span>
            <h3 className="mb-1.5 text-sm font-semibold">{feat.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          {t.skills.insight[lang]}
        </p>
      </div>
    </div>
  );
}
