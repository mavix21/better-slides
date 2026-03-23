"use client";

import { FigureSlide } from "@/components/slides/slide-figure";

export function ContextWindowSlide() {
  return (
    <FigureSlide.Root>
      <FigureSlide.Title>Context Window</FigureSlide.Title>
      <FigureSlide.Image
        src="/context-window.png"
        alt="Context Window diagram"
      />
    </FigureSlide.Root>
  );
}
