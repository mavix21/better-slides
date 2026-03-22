"use client";

import Image from "next/image";
import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function CoverSlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col items-center justify-center px-8 py-12 md:px-16">
      <div className="mb-16 flex items-center gap-6">
        <Image
          src="/v0-logo.svg"
          alt="v0"
          width={60}
          height={30}
          className="h-8 w-auto"
        />
        <span className="text-muted-foreground">+</span>
        <Image
          src="/vercel-logo.svg"
          alt="Vercel"
          width={32}
          height={28}
          className="h-7 w-auto"
        />
      </div>
      <h1 className="mb-6 text-center text-6xl font-bold tracking-tight md:text-7xl">
        Prompt to Production Salta
      </h1>
      <p className="max-w-2xl text-center text-xl text-muted-foreground md:text-2xl">
        {t.cover.subtitle[lang]}
      </p>
    </div>
  );
}
