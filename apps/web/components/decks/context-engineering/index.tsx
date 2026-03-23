"use client";

import React from "react";
import { Slide, type SlideDeckMode } from "@/components/slides/slide-deck";
import { SlideNavigator } from "@/components/slides/slide-navigator";
import {
  DeckLanguageProvider,
  LanguageToggle,
  useTranslation,
} from "@/components/slides/slide-language";
import { translations, type Translations } from "./translations";

import { OpeningSlide } from "./slides/opening";
import { WhatIsAgentSlide } from "./slides/what-is-agent";
import { AgentLoopSlide } from "./slides/agent-loop";
import { WhyFailSlide } from "./slides/why-fail";
import { PromptToCESlide } from "./slides/prompt-to-ce";
import { WhatIsCESlide } from "./slides/what-is-ce";
import { CoreTechniquesSlide } from "./slides/core-techniques";
import { CodingAgentsSlide } from "./slides/coding-agents";
import { BestPracticesSlide } from "./slides/best-practices";
import { BenefitsChallengesSlide } from "./slides/benefits-challenges";
import { GetStartedSlide } from "./slides/get-started";

const slides: React.ComponentType[] = [
  OpeningSlide,
  WhatIsAgentSlide,
  AgentLoopSlide,
  WhyFailSlide,
  PromptToCESlide,
  WhatIsCESlide,
  CoreTechniquesSlide,
  CodingAgentsSlide,
  BestPracticesSlide,
  BenefitsChallengesSlide,
  GetStartedSlide,
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

// ---------------------------------------------------------------------------
// Exported deck component
// ---------------------------------------------------------------------------

type ContextEngineeringDeckProps = {
  mode?: SlideDeckMode;
};

export default function ContextEngineeringDeck({
  mode = "present",
}: ContextEngineeringDeckProps) {
  return (
    <DeckLanguageProvider translations={translations}>
      <DeckInner mode={mode} />
    </DeckLanguageProvider>
  );
}
