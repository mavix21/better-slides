"use client";

import { Globe, Mic } from "lucide-react";
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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.354-.2-6.782-2.618-6.979-6.98-.059-1.28-.073-1.689-.073-4.948 0-3.259.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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
      className="text-muted-foreground transition-colors hover:text-foreground"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function WelcomeSlide() {
  const { lang, t } = useTranslation<Translations>();

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:px-16">
      <h2 className="mb-8 text-3xl font-bold md:text-5xl">
        {t.welcome.title[lang]}
      </h2>
      <div className="grid flex-1 gap-6 md:grid-cols-3">
        {/* Bio - Artu Grande */}
        <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-4">
            <img
              src="/images/fotoartufondonegro.jpg"
              alt="Artu Grande"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">Artu Grande</h3>
              <p className="text-sm text-muted-foreground">
                {t.welcome.artuRole[lang]}
              </p>
            </div>
          </div>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            {t.welcome.artuBio[lang]}
          </p>
          <div className="flex items-center gap-3">
            <SocialLink href="https://arturogrande.com/" label="Website">
              <Globe className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://x.com/ArtuGrande" label="X/Twitter">
              <XIcon className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/arturo-grande/" label="LinkedIn">
              <LinkedInIcon className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://v0.app/@artugrande" label="v0">
              <img src="/v0-logo.svg" alt="v0" className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        {/* DESAFIA */}
        <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-4">
            <img
              src="/images/desafialogo.svg"
              alt="DESAFIA"
              className="h-8 w-auto"
            />
          </div>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            {t.welcome.desafiaBio[lang]}
          </p>
          <div className="flex items-center gap-3">
            <SocialLink href="https://desafia.tech/" label="Website">
              <Globe className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://x.com/desafiatech" label="X/Twitter">
              <XIcon className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/desafia-tech/" label="LinkedIn">
              <LinkedInIcon className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/desafia.tech" label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        {/* Podcast */}
        <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <Mic className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-xl font-semibold">Podcast</h3>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {t.welcome.podcastDesc[lang]}
          </p>
          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/WNzCzar7Haw?rel=0"
              title="Podcast con Guillermo Rauch"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
