"use client";

import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";

// ---------------------------------------------------------------------------
// Context interface (state / actions / meta)
// ---------------------------------------------------------------------------

export type SlideDeckMode = "preview" | "present";

export interface SlideDeckState {
  currentSlide: number;
  totalSlides: number;
  mode: SlideDeckMode;
}

export interface SlideDeckActions {
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

export interface SlideDeckMeta {
  isFullscreen: boolean;
  isNavVisible: boolean;
  setIsNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
  clearHideNavTimeout: () => void;
  scheduleHideNav: () => void;
  shouldAutoHideNav: boolean;
}

export interface SlideDeckContextValue {
  state: SlideDeckState;
  actions: SlideDeckActions;
  meta: SlideDeckMeta;
}

const SlideDeckContext = React.createContext<SlideDeckContextValue | null>(
  null
);

export function useSlideDeck(): SlideDeckContextValue {
  const ctx = React.useContext(SlideDeckContext);
  if (!ctx) {
    throw new Error("useSlideDeck must be used within a Slide.Provider");
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Slide.Provider
// ---------------------------------------------------------------------------

const NAV_AUTO_HIDE_DELAY_MS = 2500;

interface SlideProviderProps {
  children: React.ReactNode;
  slides: React.ComponentType[];
  mode?: SlideDeckMode;
}

function SlideProvider({
  children,
  slides,
  mode = "present",
}: SlideProviderProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isFullscreen, setIsFullscreen] = React.useState(
    () => typeof document !== "undefined" && Boolean(document.fullscreenElement)
  );
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const hideNavTimeoutRef = React.useRef<number | null>(null);

  const isPresentMode = mode === "present";
  const shouldAutoHideNav = isPresentMode && isFullscreen;

  const goToSlide = React.useCallback(
    (index: number) => {
      if (index >= 0 && index < slides.length) {
        setCurrentSlide(index);
      }
    },
    [slides.length]
  );

  const clearHideNavTimeout = React.useCallback(() => {
    if (hideNavTimeoutRef.current !== null) {
      window.clearTimeout(hideNavTimeoutRef.current);
      hideNavTimeoutRef.current = null;
    }
  }, []);

  const scheduleHideNav = React.useCallback(() => {
    clearHideNavTimeout();
    if (!shouldAutoHideNav) return;
    hideNavTimeoutRef.current = window.setTimeout(() => {
      setIsNavVisible(false);
    }, NAV_AUTO_HIDE_DELAY_MS);
  }, [clearHideNavTimeout, shouldAutoHideNav]);

  const nextSlide = React.useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = React.useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Fullscreen tracking
  React.useEffect(() => {
    if (typeof document === "undefined") return;

    const updateFullscreenState = () => {
      const fs = Boolean(document.fullscreenElement);
      setIsFullscreen(fs);
      clearHideNavTimeout();

      if (fs) {
        setIsNavVisible(true);
        hideNavTimeoutRef.current = window.setTimeout(() => {
          setIsNavVisible(false);
        }, NAV_AUTO_HIDE_DELAY_MS);
        return;
      }
      setIsNavVisible(true);
    };

    document.addEventListener("fullscreenchange", updateFullscreenState);
    return () => {
      clearHideNavTimeout();
      document.removeEventListener("fullscreenchange", updateFullscreenState);
    };
  }, [clearHideNavTimeout]);

  // Auto-hide nav scheduling
  React.useEffect(() => {
    if (!shouldAutoHideNav) {
      clearHideNavTimeout();
      return;
    }
    scheduleHideNav();
    return () => clearHideNavTimeout();
  }, [clearHideNavTimeout, scheduleHideNav, shouldAutoHideNav]);

  const value = React.useMemo<SlideDeckContextValue>(
    () => ({
      state: { currentSlide, totalSlides: slides.length, mode },
      actions: { goToSlide, nextSlide, prevSlide },
      meta: {
        isFullscreen,
        isNavVisible,
        setIsNavVisible,
        clearHideNavTimeout,
        scheduleHideNav,
        shouldAutoHideNav,
      },
    }),
    [
      currentSlide,
      slides.length,
      mode,
      goToSlide,
      nextSlide,
      prevSlide,
      isFullscreen,
      isNavVisible,
      clearHideNavTimeout,
      scheduleHideNav,
      shouldAutoHideNav,
    ]
  );

  return (
    <SlideDeckContext.Provider value={value}>
      {children}
    </SlideDeckContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Slide.Root
// ---------------------------------------------------------------------------

interface SlideRootProps {
  children: React.ReactNode;
  className?: string;
}

function SlideRoot({ children, className }: SlideRootProps) {
  const { state } = useSlideDeck();
  const isPresentMode = state.mode === "present";

  return (
    <div
      className={cn(
        "dark relative w-full overflow-hidden bg-background font-sans text-foreground select-none",
        isPresentMode ? "h-screen p-4 md:p-6 lg:p-8" : "h-full min-h-full",
        className
      )}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Slide.Content
// ---------------------------------------------------------------------------

interface SlideContentProps {
  slides: React.ComponentType[];
  className?: string;
}

function SlideContent({ slides, className }: SlideContentProps) {
  const { state } = useSlideDeck();
  const CurrentSlide = slides[state.currentSlide] ?? slides[0];
  if (!CurrentSlide) return null;

  return (
    <div
      className={cn(
        "h-full w-full overflow-y-auto pt-16 pb-28 md:pt-0 md:pb-20",
        className
      )}
    >
      <CurrentSlide />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Slide.Overlay
// ---------------------------------------------------------------------------

interface SlideOverlayProps {
  children: React.ReactNode;
}

function SlideOverlay({ children }: SlideOverlayProps) {
  return <>{children}</>;
}

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

export const Slide = {
  Provider: SlideProvider,
  Root: SlideRoot,
  Content: SlideContent,
  Overlay: SlideOverlay,
};
