"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@workspace/ui/lib/utils";

// ---------------------------------------------------------------------------
// SlideQRCode — overlay component that generates a QR from the current URL
// ---------------------------------------------------------------------------

interface SlideQRCodeProps {
  /** Hide the QR code entirely */
  hide?: boolean;
  /** Label displayed below the QR code */
  label?: string;
  className?: string;
}

export function SlideQRCode({ hide = false, label, className }: SlideQRCodeProps) {
  const [url] = React.useState(() =>
    typeof window === "undefined" ? "" : window.location.href.split("?")[0]
  );

  const qrUrl = React.useMemo(() => {
    if (!url) return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(url)}&bgcolor=000000&color=ffffff&format=svg`;
  }, [url]);

  if (!url || hide) return null;

  return (
    <div
      className={cn(
        "absolute top-6 right-6 z-50 hidden flex-col items-center gap-1 md:flex",
        className
      )}
    >
      <div className="rounded-lg bg-foreground p-1.5">
        <Image
          src={qrUrl || "/placeholder.svg"}
          alt="QR Code"
          width={64}
          height={64}
          className="h-16 w-16"
        />
      </div>
      {label && (
        <span className="font-mono text-[10px] text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}
