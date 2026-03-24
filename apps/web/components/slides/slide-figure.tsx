import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";

// ---------------------------------------------------------------------------
// FigureSlide.Root
// ---------------------------------------------------------------------------

interface FigureSlideRootProps {
  children: React.ReactNode;
  className?: string;
}

function FigureSlideRoot({ children, className }: FigureSlideRootProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-center px-6 py-10 md:px-14",
        className
      )}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// FigureSlide.Title
// ---------------------------------------------------------------------------

interface FigureSlideTitleProps {
  children: React.ReactNode;
  className?: string;
}

function FigureSlideTitle({ children, className }: FigureSlideTitleProps) {
  return (
    <h2
      className={cn(
        "mb-6 text-center text-3xl font-bold tracking-tight md:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

// ---------------------------------------------------------------------------
// FigureSlide.Image
// ---------------------------------------------------------------------------

interface FigureSlideImageProps {
  src: string;
  alt: string;
  className?: string;
}

function FigureSlideImage({ src, alt, className }: FigureSlideImageProps) {
  return (
    <figure className="relative w-full flex-1">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 90vw, 70vw"
        className={cn("rounded-sm object-contain", className)}
      />
    </figure>
  );
}

// ---------------------------------------------------------------------------
// FigureSlide.Caption
// ---------------------------------------------------------------------------

interface FigureSlideCaptionProps {
  children: React.ReactNode;
  className?: string;
}

function FigureSlideCaption({ children, className }: FigureSlideCaptionProps) {
  return (
    <figcaption
      className={cn(
        "mt-4 text-center text-xs tracking-wide text-muted-foreground/60 md:text-sm",
        className
      )}
    >
      {children}
    </figcaption>
  );
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

export const FigureSlide = {
  Root: FigureSlideRoot,
  Title: FigureSlideTitle,
  Image: FigureSlideImage,
  Caption: FigureSlideCaption,
};
