import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";

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
        "flex h-full flex-col items-center justify-center px-8 py-12 md:px-16",
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
    <figure className="@container flex w-full flex-col items-center">
      <img
        src={src}
        alt={alt}
        className={cn(
          "max-h-[32vh] w-auto max-w-full rounded-sm object-contain @sm:max-h-[38vh] @md:max-h-[44vh] @lg:max-h-[50vh]",
          className
        )}
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
