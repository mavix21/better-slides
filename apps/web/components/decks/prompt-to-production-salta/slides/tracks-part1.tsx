"use client";

import { Target, Sparkles, Palette } from "lucide-react";
import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";
import { trackIdeas } from "../track-ideas";
import type { Language } from "@/components/slides/slide-language";

const tracks = [
  { icon: Target, title: "GTM", subtitle: "Go-to-market tools", key: "GTM" as const },
  { icon: Sparkles, title: "Marketing", subtitle: "Growth experiments", key: "Marketing" as const },
  { icon: Palette, title: "Design", subtitle: "Visual tools", key: "Design" as const },
];

export function TracksPart1Slide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:px-16">
      <h2 className="mb-2 text-3xl font-bold md:text-5xl">
        {t.tracks.title[lang]}
      </h2>
      <p className="mb-6 text-muted-foreground md:mb-8">{t.tracks.part1[lang]}</p>
      <div className="grid flex-1 gap-4 md:grid-cols-3 md:gap-6">
        {tracks.map((track) => (
          <TrackCard key={track.title} track={track} lang={lang} />
        ))}
      </div>
    </div>
  );
}

function TrackCard({
  track,
  lang,
}: {
  track: (typeof tracks)[number];
  lang: Language;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:scale-[1.02] hover:border-foreground/20 hover:bg-accent hover:shadow-lg md:p-6">
      <track.icon
        className="mb-3 h-6 w-6 text-muted-foreground md:mb-4 md:h-8 md:w-8"
        strokeWidth={1.5}
      />
      <h3 className="mb-1 text-lg font-semibold md:text-xl">{track.title}</h3>
      <p className="mb-3 text-xs text-muted-foreground md:mb-4 md:text-sm">
        {track.subtitle}
      </p>
      <ul className="mt-auto space-y-1.5 md:space-y-2">
        {trackIdeas[track.key].slice(0, 4).map((idea, i) => (
          <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
            <span className="mt-0.5 text-muted-foreground">•</span>
            <span className="text-muted-foreground">{idea[lang]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
