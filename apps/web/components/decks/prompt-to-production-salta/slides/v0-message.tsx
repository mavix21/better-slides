"use client";

import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

export function V0MessageSlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col px-8 py-12 md:px-16">
      <h2 className="mb-8 text-3xl font-bold md:text-5xl">
        {t.v0Message[lang]}
      </h2>
      <div className="flex flex-1 items-center justify-center">
        <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl">
          <iframe
            src="https://www.youtube.com/embed/H5xTLdDac3M?rel=0"
            title="Mensaje del equipo de v0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
