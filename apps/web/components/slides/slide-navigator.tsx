"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { useSlideDeck } from "./slide-deck";

// ---------------------------------------------------------------------------
// SlideNavigator.Bar — bottom bar with auto-hide in fullscreen
// ---------------------------------------------------------------------------

interface BarProps {
  children: React.ReactNode;
  className?: string;
}

function Bar({ children, className }: BarProps) {
  const { meta } = useSlideDeck();

  const handleMouseEnter = React.useCallback(() => {
    if (!meta.shouldAutoHideNav) return;
    meta.clearHideNavTimeout();
    meta.setIsNavVisible(true);
  }, [meta]);

  const handleMouseLeave = React.useCallback(() => {
    if (!meta.shouldAutoHideNav) return;
    meta.scheduleHideNav();
  }, [meta]);

  const handleTouchStart = React.useCallback(() => {
    if (!meta.shouldAutoHideNav) return;
    meta.clearHideNavTimeout();
    meta.setIsNavVisible((v) => !v);
  }, [meta]);

  return (
    <div
      className={cn(
        "absolute inset-x-0 bottom-0 flex justify-center pt-8 pb-6 md:pb-8",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-3 transition-opacity duration-200",
          meta.shouldAutoHideNav &&
            !meta.isNavVisible &&
            "pointer-events-none opacity-0 max-md:pointer-events-auto max-md:opacity-100"
        )}
      >
        {children}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SlideNavigator.Dots
// ---------------------------------------------------------------------------

interface DotsProps {
  className?: string;
}

function Dots({ className }: DotsProps) {
  const { state, actions } = useSlideDeck();

  return (
    <div className={cn("flex items-center gap-1.5 md:gap-2", className)}>
      {Array.from({ length: state.totalSlides }).map((_, i) => (
        <button
          key={i}
          onClick={() => actions.goToSlide(i)}
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-all md:h-2 md:w-2",
            i === state.currentSlide
              ? "w-4 bg-foreground md:w-6"
              : "bg-foreground/30 hover:bg-foreground/50"
          )}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SlideNavigator.PrevButton / NextButton
// ---------------------------------------------------------------------------

interface NavButtonProps {
  className?: string;
}

function PrevButton({ className }: NavButtonProps) {
  const { state, actions } = useSlideDeck();

  return (
    <button
      onClick={actions.prevSlide}
      disabled={state.currentSlide === 0}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30 md:h-10 md:w-10",
        className
      )}
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
    </button>
  );
}

function NextButton({ className }: NavButtonProps) {
  const { state, actions } = useSlideDeck();

  return (
    <button
      onClick={actions.nextSlide}
      disabled={state.currentSlide === state.totalSlides - 1}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30 md:h-10 md:w-10",
        className
      )}
      aria-label="Next slide"
    >
      <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
    </button>
  );
}

// ---------------------------------------------------------------------------
// SlideNavigator.Counter
// ---------------------------------------------------------------------------

interface CounterProps {
  className?: string;
  /** "mobile" shows centered above dots, "desktop" shows bottom-right */
  variant?: "mobile" | "desktop";
}

function Counter({ className, variant = "desktop" }: CounterProps) {
  const { state } = useSlideDeck();
  const label = `${String(state.currentSlide + 1).padStart(2, "0")} / ${String(state.totalSlides).padStart(2, "0")}`;

  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "font-mono text-xs text-muted-foreground md:hidden",
          className
        )}
      >
        {label}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "absolute right-8 bottom-8 hidden font-mono text-sm text-muted-foreground md:block",
        className
      )}
    >
      {label}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SlideNavigator.KeyboardHint
// ---------------------------------------------------------------------------

interface KeyboardHintProps {
  className?: string;
  label?: string;
}

function KeyboardHint({
  className,
  label = "← → to navigate",
}: KeyboardHintProps) {
  const { state } = useSlideDeck();
  if (state.mode !== "present") return null;

  return (
    <div
      className={cn(
        "absolute bottom-8 left-8 hidden text-xs text-muted-foreground/60 md:block",
        className
      )}
    >
      {label}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

export const SlideNavigator = {
  Bar,
  Dots,
  PrevButton,
  NextButton,
  Counter,
  KeyboardHint,
};
