"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function VotingWinnersSlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:px-16">
      <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
        {t.voting.title[lang]}
      </h2>
      <div className="grid flex-1 gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-xl font-semibold">
              {t.voting.votingTitle[lang]}
            </h3>
            <p className="mb-4 text-muted-foreground">{t.voting.votingOpen[lang]}</p>
            <p className="text-sm text-muted-foreground">{t.voting.votingEnd[lang]}</p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>{t.voting.voteDesc1[lang]}</p>
              <p>{t.voting.voteDesc2[lang]}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-xl font-semibold">
              {t.voting.howWinners[lang]}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">{t.voting.trackWinners[lang]}</p>
                <p className="text-sm text-muted-foreground">
                  {t.voting.trackWinnersDesc[lang]}
                </p>
              </div>
              <div>
                <p className="font-medium">{t.voting.globalWinner[lang]}</p>
                <p className="text-sm text-muted-foreground">
                  {t.voting.globalWinnerDesc[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="mb-6 text-xl font-semibold">
            {t.voting.prizes[lang]}
          </h3>
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-muted/20 p-6">
              <p className="mb-2 text-sm text-muted-foreground">
                {t.voting.globalPrize[lang]}
              </p>
              <p className="mb-2 text-3xl font-bold">
                $1,000 {lang === "es" ? "créditos" : "credits"} v0
              </p>
              <p className="text-xl text-muted-foreground">+ $500 USD cash</p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <p className="mb-2 text-sm text-muted-foreground">
                {t.voting.trackPrize[lang]}
              </p>
              <p className="text-2xl font-bold">
                $1,000 {lang === "es" ? "créditos" : "credits"} v0
              </p>
              <p className="text-sm text-muted-foreground">{t.voting.each[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
