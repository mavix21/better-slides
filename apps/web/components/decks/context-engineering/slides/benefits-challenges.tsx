"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function BenefitsChallengesSlide() {
  const { lang, t } = useTranslation<Translations>();

  const benefits = [
    t.benefitsChallenges.benefit1[lang],
    t.benefitsChallenges.benefit2[lang],
    t.benefitsChallenges.benefit3[lang],
  ];

  const challenges = [
    t.benefitsChallenges.challenge1[lang],
    t.benefitsChallenges.challenge2[lang],
    t.benefitsChallenges.challenge3[lang],
  ];

  return (
    <div className="flex h-full flex-col justify-center px-8 py-12 md:px-16">
      <h2 className="mb-12 text-3xl font-bold md:text-5xl">
        {t.benefitsChallenges.title[lang]}
      </h2>

      <div className="grid max-w-4xl gap-px border border-border bg-border md:grid-cols-2">
        <div className="bg-background p-8">
          <h3 className="mb-6 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
            {t.benefitsChallenges.benefitsTitle[lang]}
          </h3>
          <div className="divide-y divide-border">
            {benefits.map((benefit, i) => (
              <p
                key={i}
                className="py-4 text-sm leading-relaxed first:pt-0 last:pb-0 md:text-base"
              >
                {benefit}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-background p-8">
          <h3 className="mb-6 font-mono text-xs tracking-widest text-muted-foreground/50 uppercase">
            {t.benefitsChallenges.challengesTitle[lang]}
          </h3>
          <div className="divide-y divide-border">
            {challenges.map((challenge, i) => (
              <p
                key={i}
                className="py-4 text-sm leading-relaxed first:pt-0 last:pb-0 md:text-base"
              >
                {challenge}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
