"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function LiveShowcaseCoverSlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col items-center justify-center px-8 py-12 md:px-16">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-border">
        <Play className="ml-1 h-10 w-10 text-foreground" fill="currentColor" />
      </div>
      <h1 className="mb-6 text-center text-5xl font-bold tracking-tight md:text-7xl">
        {t.liveShowcase.title[lang]}
      </h1>
      <p className="max-w-2xl text-center text-xl leading-relaxed text-muted-foreground md:text-2xl">
        {t.liveShowcase.desc1[lang]}
        <br />
        {t.liveShowcase.desc2[lang]}
      </p>
      <div className="mt-16 flex items-center gap-6">
        <Image
          src="/v0-logo.svg"
          alt="v0"
          width={60}
          height={30}
          className="h-6 w-auto opacity-40"
        />
        <Image
          src="/vercel-logo.svg"
          alt="Vercel"
          width={24}
          height={21}
          className="h-5 w-auto opacity-40"
        />
      </div>
    </div>
  );
}
