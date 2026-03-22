"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Language = "es" | "en";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TranslationMap = Record<string, any>;

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface LanguageContextValue<T extends TranslationMap = TranslationMap> {
  lang: Language;
  setLang: (lang: Language) => void;
  translations: T;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

interface DeckLanguageProviderProps<T extends TranslationMap> {
  children: React.ReactNode;
  translations: T;
  defaultLang?: Language;
}

export function DeckLanguageProvider<T extends TranslationMap>({
  children,
  translations,
  defaultLang = "es",
}: DeckLanguageProviderProps<T>) {
  const [lang, setLang] = React.useState<Language>(defaultLang);

  const value = React.useMemo(
    () => ({ lang, setLang, translations }),
    [lang, translations]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useTranslation<T extends TranslationMap = TranslationMap>() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error(
      "useTranslation must be used within a DeckLanguageProvider"
    );
  }
  return {
    lang: ctx.lang,
    setLang: ctx.setLang,
    t: ctx.translations as T,
  };
}

// ---------------------------------------------------------------------------
// LanguageToggle
// ---------------------------------------------------------------------------

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { lang, setLang } = useTranslation();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className={cn(
        "absolute top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm transition-all hover:border-border/80 hover:bg-muted/50 md:top-6 md:left-6 md:translate-x-0",
        className
      )}
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4 text-muted-foreground" />
      <span className="font-medium">{lang === "es" ? "EN" : "ES"}</span>
    </button>
  );
}
