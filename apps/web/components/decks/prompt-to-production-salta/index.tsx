"use client";

import React from "react";
import { Slide, type SlideDeckMode } from "@/components/slides/slide-deck";
import { SlideNavigator } from "@/components/slides/slide-navigator";
import {
  DeckLanguageProvider,
  LanguageToggle,
  useTranslation,
} from "@/components/slides/slide-language";
import { SlideQRCode } from "@/components/slides/slide-qr-code";
import { translations, type Translations } from "./translations";

import { CoverSlide } from "./slides/cover";
import { WelcomeSlide } from "./slides/welcome";
import { V0MessageSlide } from "./slides/v0-message";
import { TracksPart2Slide } from "./slides/tracks-part2";
import { BuildSessionSlide } from "./slides/build-session";
import { ShipShowcaseSlide } from "./slides/ship-showcase";
import { ShowcaseFormSlide } from "./slides/showcase-form";
import { LiveShowcaseCoverSlide } from "./slides/live-showcase-cover";
import { P2PSlide } from "./slides/p2p";
import { VotingWinnersSlide } from "./slides/voting-winners";
import { FAQsSlide } from "./slides/faqs";
import { SubmitLinksSlide } from "./slides/submit-links";
import { ThankYouSlide } from "./slides/thank-you";

const slides: React.ComponentType[] = [
  CoverSlide,
  WelcomeSlide,
  V0MessageSlide,
  TracksPart2Slide,
  BuildSessionSlide,
  ShipShowcaseSlide,
  ShowcaseFormSlide,
  LiveShowcaseCoverSlide,
  P2PSlide,
  VotingWinnersSlide,
  FAQsSlide,
  SubmitLinksSlide,
  ThankYouSlide,
];

// ---------------------------------------------------------------------------
// Inner component that can access language context for QR label & nav hint
// ---------------------------------------------------------------------------

function DeckInner({ mode }: { mode: SlideDeckMode }) {
  const { lang, t } = useTranslation<Translations>();

  return (
    <Slide.Provider slides={slides} mode={mode}>
      <Slide.Root>
        <Slide.Overlay>
          <LanguageToggle />
          <QRCodeWithLanguage mode={mode} scanLabel={t.scanMe[lang]} />
        </Slide.Overlay>

        <Slide.Content slides={slides} />

        <SlideNavigator.Bar>
          <SlideNavigator.Counter variant="mobile" />
          <div className="flex items-center gap-3 md:gap-4">
            <SlideNavigator.PrevButton />
            <SlideNavigator.Dots />
            <SlideNavigator.NextButton />
          </div>
        </SlideNavigator.Bar>

        <SlideNavigator.Counter variant="desktop" />
        <SlideNavigator.KeyboardHint label={t.nav[lang]} />
      </Slide.Root>
    </Slide.Provider>
  );
}

function QRCodeWithLanguage({
  mode,
  scanLabel,
}: {
  mode: SlideDeckMode;
  scanLabel: string;
}) {
  return <SlideQRCode hide={mode !== "present"} label={scanLabel} />;
}

// ---------------------------------------------------------------------------
// Exported deck component
// ---------------------------------------------------------------------------

type PromptToProductionSaltaDeckProps = {
  mode?: SlideDeckMode;
};

export default function PromptToProductionSaltaDeck({
  mode = "present",
}: PromptToProductionSaltaDeckProps) {
  return (
    <DeckLanguageProvider translations={translations}>
      <DeckInner mode={mode} />
    </DeckLanguageProvider>
  );
}
