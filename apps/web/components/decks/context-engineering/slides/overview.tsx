"use client";

import { FigureSlide } from "@/components/slides/slide-figure";

export function OverviewSlide() {
  return (
    <FigureSlide.Root>
      <FigureSlide.Image
        src="/context-engineering.png"
        alt="Context Engineering overview diagram"
      />
      <FigureSlide.Caption>Context Engineering techniques</FigureSlide.Caption>
    </FigureSlide.Root>
  );
}
