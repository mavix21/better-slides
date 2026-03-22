"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground transition-opacity hover:opacity-70"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function ThankYouSlide() {
  const { lang } = useTranslation<Translations>();
  const [url] = useState(() =>
    typeof window === "undefined" ? "" : window.location.href.split("?")[0]
  );

  const qrUrl = useMemo(() => {
    if (!url) return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}&bgcolor=000000&color=ffffff&format=svg`;
  }, [url]);

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-auto px-8 py-12">
      <h1 className="mb-12 text-center text-4xl font-bold text-balance md:text-6xl">
        {lang === "es"
          ? "Muchas gracias por su atención"
          : "Thank you for your attention"}
      </h1>

      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
        {/* Profile */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/fotoartufondonegro.jpg"
            alt="Artu Grande"
            className="mb-4 h-28 w-28 rounded-full border-2 border-border object-cover md:h-36 md:w-36"
          />
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">Artu Grande</h2>
          <p className="mb-4 text-muted-foreground">
            {lang === "es" ? "Fundador de DESAFIA" : "Founder of DESAFIA"}
            <br />
            v0 Ambassador
          </p>
          <div className="flex items-center gap-4">
            <SocialLink href="https://arturogrande.com/" label="Website">
              <Globe className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="https://x.com/ArtuGrande" label="X/Twitter">
              <XIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/arturo-grande/" label="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="https://v0.app/@artugrande" label="v0">
              <img src="/v0-logo.svg" alt="v0" className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        {/* QR Code */}
        {qrUrl && (
          <div className="flex flex-col items-center">
            <div className="rounded-2xl bg-foreground p-3">
              <img
                src={qrUrl || "/placeholder.svg"}
                alt="QR Code"
                width={160}
                height={160}
                className="h-32 w-32 md:h-40 md:w-40"
              />
            </div>
            <p className="mt-3 font-mono text-sm text-muted-foreground">
              {lang === "es" ? "Escaneame" : "Scan me"}
            </p>
          </div>
        )}
      </div>

      <div className="mt-12 flex items-center gap-6">
        <Image
          src="/v0-logo.svg"
          alt="v0"
          width={60}
          height={30}
          className="h-6 w-auto opacity-40"
        />
        <Image
          src="/vercel-logo.svg"
          alt="Vercel"
          width={24}
          height={21}
          className="h-5 w-auto opacity-40"
        />
      </div>
    </div>
  );
}
