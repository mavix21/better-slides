"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Presentation } from "lucide-react";

type PresentButtonProps = {
  href: string;
};

export function PresentButton({ href }: PresentButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  const handleClick = async () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("deck-present-intent", href);
    }

    if (typeof document !== "undefined" && !document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen({
          navigationUI: "hide",
        });
      } catch (error) {
        console.warn("Unable to enter fullscreen presentation mode.", error);
      }
    }

    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-75"
    >
      <Presentation className="h-4 w-4" />
      Present
    </button>
  );
}
