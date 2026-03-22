"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

const PRESENT_INTENT_KEY = "deck-present-intent";

type PresentationFullscreenProps = {
  href: string;
};

export function PresentationFullscreen({ href }: PresentationFullscreenProps) {
  const router = useRouter();

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const presentIntent = window.sessionStorage.getItem(PRESENT_INTENT_KEY);

    if (presentIntent !== href) {
      return;
    }

    window.sessionStorage.removeItem(PRESENT_INTENT_KEY);

    if (document.fullscreenElement) {
      return;
    }

    document.documentElement
      .requestFullscreen({ navigationUI: "hide" })
      .catch((error) => {
        console.warn("Unable to preserve fullscreen presentation mode.", error);
      });
  }, [href]);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        const previewHref = href.replace("/present", "");
        router.push(previewHref);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [href, router]);

  return null;
}
