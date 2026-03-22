"use client";

import React, { createContext, useContext } from "react";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import { cn } from "@workspace/ui/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Rocket,
  Target,
  Palette,
  BarChart3,
  Database,
  Code2,
  Clock,
  MessageSquare,
  Send,
  Globe,
  User,
  Link2,
  Layers,
  Play,
  Mic,
  ExternalLink,
  Languages,
} from "lucide-react";

// Language context
type Language = "es" | "en";
const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
}>({ lang: "es", setLang: () => {} });
const useLanguage = () => useContext(LanguageContext);

// Translations
const t = {
  // QR
  scanMe: { es: "Escaneame", en: "Scan me" },
  // Slide 1
  cover: {
    subtitle: {
      es: "Transforma ideas en aplicaciones online con usuarios reales",
      en: "Turn ideas into live apps with real users",
    },
  },
  // Slide 2
  welcome: {
    title: { es: "Welcome & Introductions", en: "Welcome & Introductions" },
    artuRole: { es: "Fundador de DESAFIA", en: "Founder of DESAFIA" },
    artuBio: {
      es: "Es docente en UCEMA y UNCUYO. Embajador de v0 y Celo Argentina, graduado de la Polkadot Blockchain Academy X y Scholar de Devconnect 2025.",
      en: "Professor at UCEMA and UNCUYO. v0 and Celo Argentina Ambassador, Polkadot Blockchain Academy X graduate and Devconnect 2025 Scholar.",
    },
    desafiaBio: {
      es: "Plataforma educativa que forma builders en LATAM para crear y escalar productos digitales globales, combinando práctica real con estrategia, diseño, producto, marketing y finanzas.",
      en: "Educational platform that trains builders in LATAM to create and scale global digital products, combining real practice with strategy, design, product, marketing and finance.",
    },
    podcastDesc: {
      es: "En este episodio tomé unos mates con Guillermo Rauch (CEO de Vercel) para conversar sobre cómo detectar tendencias tecnológicas, el nuevo rol del programador en la era de la IA y cómo construir productos globales desde cualquier lugar.",
      en: "In this episode I had some mates with Guillermo Rauch (CEO of Vercel) to talk about how to detect tech trends, the new role of developers in the AI era, and how to build global products from anywhere.",
    },
  },
  // Slide 3
  v0Message: {
    es: "Un mensaje del equipo de v0",
    en: "A message from the v0 team",
  },
  // Slide 4
  challenge: {
    title: {
      es: "De 'algún día' a 'hecho hoy'",
      en: "From 'someday' to 'done today'",
    },
    desc: {
      es: "El evento de hoy no trata de código perfecto.",
      en: "Today's event isn't about perfect code.",
    },
    momentum: { es: "aprovehar el momentum", en: "seizing the momentum" },
    barriers: {
      es: "y de probar que las barreras son más pequeñas de lo que creemos.",
      en: "and proving that barriers are smaller than we think.",
    },
    q1: {
      es: "¿Esa herramienta interna que venís postergando?",
      en: "That internal tool you've been putting off?",
    },
    q2: {
      es: "¿Ese experimento de marketing en tu backlog de tareas?",
      en: "That marketing experiment in your task backlog?",
    },
    q3: {
      es: "¿Esa app de un cliente que parecía demasiado compleja?",
      en: "That client app that seemed too complex?",
    },
    cta: { es: "Programala hoy.", en: "Build it today." },
  },
  // Slide 5 & 6
  tracks: {
    title: { es: "Elegí un track", en: "Pick a track" },
    part1: { es: "Parte 1 de 2", en: "Part 1 of 2" },
    part2: { es: "Parte 2 de 2", en: "Part 2 of 2" },
  },
  // Slide 7
  credits: {
    title: { es: "Your Credits", en: "Your Credits" },
    promoCode: { es: "Código de promoción", en: "Promo code" },
    step1: { es: "Andá a v0.app", en: "Go to v0.app" },
    step1sub: { es: "Abrí tu navegador", en: "Open your browser" },
    step2: { es: "Perfil → Facturación", en: "Profile → Billing" },
    step2sub: { es: "Canjear código", en: "Redeem code" },
    step3: { es: "Ingresá el código", en: "Enter the code" },
    step3sub: { es: "¡Listo!", en: "Done!" },
    duration: {
      es: "Los créditos duran 2 semanas",
      en: "Credits last 2 weeks",
    },
    oneTime: {
      es: "Un solo canje por persona",
      en: "One redemption per person",
    },
  },
  // Slide 8
  buildSession: {
    title: { es: "Build Session", en: "Build Session" },
    inProgress: { es: "En progreso", en: "In progress" },
    clickToStart: { es: "Click para iniciar", en: "Click to start" },
    duration: {
      es: "1 hora 15 minutos para buildear",
      en: "1 hour 15 minutes to build",
    },
    prompt: { es: "Prompt", en: "Prompt" },
    iterate: { es: "Iterar", en: "Iterate" },
    deploy: { es: "Desplegar", en: "Deploy" },
    agenda: { es: "Agenda", en: "Agenda" },
  },
  // Slide 9
  ship: {
    title: { es: "Desplegar y mostrar", en: "Ship & Showcase" },
    subtitle: {
      es: "Publicá tu app, enviá tu URL y mirá demos rápidas",
      en: "Publish your app, submit your URL, and watch quick demos",
    },
    step1: { es: "Publicar", en: "Publish" },
    step1desc: {
      es: 'Hacé click en "Publish" en v0 para desplegar tu app en Vercel',
      en: 'Click "Publish" in v0 to deploy your app to Vercel',
    },
    step2: { es: "Compartir URL", en: "Share URL" },
    step2desc: {
      es: "Copiá la URL de tu proyecto y enviala al formulario",
      en: "Copy your project URL and submit it to the form",
    },
    step3: { es: "Demo en vivo", en: "Live Demo" },
    step3desc: {
      es: "Mostrá tu creación al resto de los participantes",
      en: "Show your creation to other participants",
    },
  },
  // Slide 10
  showcase: {
    title: { es: "Live Showcase Salta", en: "Live Showcase Salta" },
    submitDemo: { es: "Enviar demo", en: "Submit demo" },
    name: { es: "Nombre", en: "Name" },
    namePlaceholder: { es: "Tu nombre", en: "Your name" },
    projectUrl: { es: "URL del proyecto", en: "Project URL" },
    track: { es: "Track", en: "Track" },
    selectTrack: { es: "Seleccionar track", en: "Select track" },
    linkedinOptional: { es: "LinkedIn (opcional)", en: "LinkedIn (optional)" },
    submitting: { es: "Enviando...", en: "Submitting..." },
    submitBtn: { es: "Enviar demo", en: "Submit demo" },
    demoQueue: { es: "Cola de demos", en: "Demo queue" },
    noDemos: { es: "Todavía no hay demos.", en: "No demos yet." },
    beFirst: { es: "¡Sé el primero!", en: "Be the first!" },
  },
  // Slide 11
  liveShowcase: {
    title: { es: "Live Showcase", en: "Live Showcase" },
    desc1: {
      es: "Enviá tu proyecto para presentarlo en vivo.",
      en: "Submit your project to present live.",
    },
    desc2: { es: "Por orden de llegada.", en: "First come, first served." },
  },
  // Slide 12
  p2p: {
    title: { es: "v0 Prompt to Production", en: "v0 Prompt to Production" },
    desc: {
      es: "Una semana global de building (31 Ene - 8 Feb, 2026) donde builders crean proyectos reales con v0 y compiten por premios.",
      en: "A global week of building (Jan 31 - Feb 8, 2026) where builders create real projects with v0 and compete for prizes.",
    },
    subtitle: {
      es: "Una semana. Hackathons globales. Apps reales.",
      en: "One week. Global hackathons. Real apps.",
    },
    step1: {
      es: "Construí algo real con v0 durante el 31 Ene - 8 Feb",
      en: "Build something real with v0 during Jan 31 - Feb 8",
    },
    step2: { es: "Publicalo en X o LinkedIn", en: "Post it on X or LinkedIn" },
    step3: {
      es: "Enviá tu build con prueba de tu post",
      en: "Submit your build with proof of your post",
    },
    step4: { es: "Conseguí votos de la comunidad", en: "Get community votes" },
    step5: {
      es: "Ganadores anunciados semana del 10 Feb",
      en: "Winners announced week of Feb 10",
    },
  },
  // Slide 13
  voting: {
    title: { es: "Votación y Ganadores", en: "Voting & Winners" },
    votingTitle: { es: "Votación", en: "Voting" },
    votingOpen: {
      es: "Abierta: 31 Ene - 8 Feb, 2026",
      en: "Open: Jan 31 - Feb 8, 2026",
    },
    votingEnd: {
      es: "Termina 11:59 PM PST del 8 Feb",
      en: "Ends 11:59 PM PST on Feb 8",
    },
    voteDesc1: {
      es: "Votá por tus builds favoritos en cada track.",
      en: "Vote for your favorite builds in each track.",
    },
    voteDesc2: {
      es: "Podés votar por múltiples builds.",
      en: "You can vote for multiple builds.",
    },
    howWinners: {
      es: "Cómo se eligen los ganadores",
      en: "How winners are chosen",
    },
    trackWinners: {
      es: "Ganadores por Track (5 total)",
      en: "Track Winners (5 total)",
    },
    trackWinnersDesc: {
      es: "Mayor cantidad de votos en cada track",
      en: "Most votes in each track",
    },
    globalWinner: {
      es: "Ganador Global (1 total)",
      en: "Global Winner (1 total)",
    },
    globalWinnerDesc: {
      es: "Mayor cantidad de votos + revisión del equipo v0 por calidad/creatividad",
      en: "Most votes + v0 team review for quality/creativity",
    },
    prizes: { es: "Premios", en: "Prizes" },
    globalPrize: { es: "Ganador Global", en: "Global Winner" },
    trackPrize: { es: "Ganadores por Track (5)", en: "Track Winners (5)" },
    each: { es: "cada uno", en: "each" },
  },
  // Slide 14
  faqs: {
    title: { es: "Preguntas Frecuentes", en: "FAQs" },
    q1: {
      es: "¿Puedo enviar múltiples builds?",
      en: "Can I submit multiple builds?",
    },
    a1: {
      es: "¡Sí! Enviá tantos como construyas.",
      en: "Yes! Submit as many as you build.",
    },
    q2: {
      es: "¿Puedo votar por mi propio build?",
      en: "Can I vote for my own build?",
    },
    a2: {
      es: "Sí, pero el éxito depende del apoyo de la comunidad.",
      en: "Yes, but success depends on community support.",
    },
    q3: {
      es: "¿Qué pasa si mi build no está terminado?",
      en: "What if my build isn't finished?",
    },
    a3: {
      es: "Enviá lo que hayas construido — los trabajos en progreso están bien si están en vivo.",
      en: "Submit what you've built — work in progress is fine if it's live.",
    },
    q4: {
      es: "¿Cuándo se anuncian los ganadores?",
      en: "When are winners announced?",
    },
    a4: {
      es: "Semana del 10 de Febrero, 2026.",
      en: "Week of February 10, 2026.",
    },
    q5: {
      es: "¿Necesito terminar durante la semana?",
      en: "Do I need to finish during the week?",
    },
    a5: {
      es: "Sí, solo los builds enviados entre el 31 Ene - 8 Feb son elegibles.",
      en: "Yes, only builds submitted Jan 31 - Feb 8 are eligible.",
    },
  },
  // Slide 15
  submit: {
    title: {
      es: "No te olvides de hacer submit global",
      en: "Don't forget to submit globally",
    },
    submitProject: { es: "Enviar tu proyecto", en: "Submit your project" },
    submitBuild: { es: "Submit tu build", en: "Submit your build" },
    browseVote: {
      es: "Ver otros proyectos y votar",
      en: "Browse other projects and vote",
    },
  },
  // Navigation
  nav: { es: "← → para navegar", en: "← → to navigate" },
};

// Language Selector component
function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="absolute top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition-all hover:border-white/20 hover:bg-white/10 md:top-6 md:left-6 md:translate-x-0"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4 text-white/60" />
      <span className="font-medium">{lang === "es" ? "EN" : "ES"}</span>
    </button>
  );
}

// QR Code component that generates QR from current production URL
function QRCode({ hide = false }: { hide?: boolean }) {
  const { lang } = useLanguage();
  const [url] = useState(() =>
    typeof window === "undefined" ? "" : window.location.href.split("?")[0]
  );

  const qrUrl = useMemo(() => {
    if (!url) return "";
    // Using QR Server API - free and no API key required
    return `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(url)}&bgcolor=000000&color=ffffff&format=svg`;
  }, [url]);

  if (!url || hide) return null;

  return (
    <div className="absolute top-6 right-6 z-50 hidden flex-col items-center gap-1 md:flex">
      <div className="rounded-lg bg-white p-1.5">
        <Image
          src={qrUrl || "/placeholder.svg"}
          alt="QR Code"
          width={64}
          height={64}
          className="h-16 w-16"
        />
      </div>
      <span className="font-mono text-[10px] text-white/40">
        {t.scanMe[lang]}
      </span>
    </div>
  );
}

// Slide 1: Cover
function Slide1() {
  const { lang } = useLanguage();
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <div className="mb-16 flex items-center gap-6">
        <Image
          src="/v0-logo.svg"
          alt="v0"
          width={60}
          height={30}
          className="h-8 w-auto"
        />
        <span className="text-white/30">+</span>
        <Image
          src="/vercel-logo.svg"
          alt="Vercel"
          width={32}
          height={28}
          className="h-7 w-auto"
        />
      </div>
      <h1 className="mb-6 text-center text-6xl font-bold tracking-tight md:text-7xl">
        Prompt to Production Salta
      </h1>
      <p className="max-w-2xl text-center text-xl text-white/60 md:text-2xl">
        {t.cover.subtitle[lang]}
      </p>
    </div>
  );
}

// Slide 2: Welcome & Introductions
function Slide2() {
  const { lang } = useLanguage();
  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-10 md:px-16">
      <h2 className="mb-8 text-4xl font-bold md:text-5xl">
        {t.welcome.title[lang]}
      </h2>
      <div className="grid flex-1 gap-6 md:grid-cols-3">
        {/* Bio - Artu Grande */}
        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/2 p-6">
          <div className="mb-4 flex items-center gap-4">
            <img
              src="/images/fotoartufondonegro.jpg"
              alt="Artu Grande"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">Artu Grande</h3>
              <p className="text-sm text-white/50">
                {t.welcome.artuRole[lang]}
              </p>
            </div>
          </div>
          <p className="mb-3 text-sm leading-relaxed text-white/60">
            {t.welcome.artuBio[lang]}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://arturogrande.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/ArtuGrande"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white"
              aria-label="X/Twitter"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/arturo-grande/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://v0.app/@artugrande"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white"
              aria-label="v0"
            >
              <img src="/v0-logo.svg" alt="v0" className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* DESAFIA */}
        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="mb-4 flex items-center gap-4">
            <img
              src="/images/desafialogo.svg"
              alt="DESAFIA"
              className="h-8 w-auto"
            />
          </div>
          <p className="mb-3 text-sm leading-relaxed text-white/60">
            {t.welcome.desafiaBio[lang]}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://desafia.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/desafiatech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white"
              aria-label="X/Twitter"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/desafia-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/desafia.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-white"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.354-.2-6.782-2.618-6.979-6.98-.059-1.28-.073-1.689-.073-4.948 0-3.259.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Podcast */}
        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="mb-4 flex items-center gap-2">
            <Mic className="h-5 w-5 text-white/60" />
            <h3 className="text-xl font-semibold">Podcast</h3>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-white/60">
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

// Slide 3: Message from v0 team - YouTube video
function Slide3() {
  const { lang } = useLanguage();
  return (
    <div className="flex h-full flex-col px-8 py-16 md:px-16">
      <h2 className="mb-8 text-4xl font-bold md:text-5xl">
        {t.v0Message[lang]}
      </h2>
      <div className="flex flex-1 items-center justify-center">
        <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl">
          <iframe
            src="https://www.youtube.com/embed/H5xTLdDac3M?rel=0"
            title="Mensaje del equipo de v0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

// Slide 4: Tonight's Challenge
function Slide4() {
  const { lang } = useLanguage();
  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:justify-center md:px-16 md:py-16">
      <h2 className="mb-6 text-4xl font-bold text-balance md:text-6xl">
        {t.challenge.title[lang]}
      </h2>
      <p className="mb-12 max-w-3xl text-xl leading-relaxed text-white/60">
        {t.challenge.desc[lang]}
        <br />
        {lang === "es" ? "Se trata de " : "It's about "}
        <span className="text-white">{t.challenge.momentum[lang]}</span>{" "}
        {t.challenge.barriers[lang]}
      </p>
      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-4 text-lg">
          <div className="h-2 w-2 rounded-full bg-white/60" />
          <span className="text-white/80">{t.challenge.q1[lang]}</span>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <div className="h-2 w-2 rounded-full bg-white/60" />
          <span className="text-white/80">{t.challenge.q2[lang]}</span>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <div className="h-2 w-2 rounded-full bg-white/60" />
          <span className="text-white/80">{t.challenge.q3[lang]}</span>
        </div>
      </div>
      <p className="text-3xl font-bold md:text-4xl">{t.challenge.cta[lang]}</p>
    </div>
  );
}

// Track ideas data with Spanish translations
const trackIdeas = {
  GTM: [
    {
      en: "Custom product demo with prospect's logo and sample data",
      es: "Demo personalizada con el logo y datos del cliente potencial",
    },
    {
      en: "Pricing configurator with real-time quotes",
      es: "Configurador de precios con cotizaciones en tiempo real",
    },
    {
      en: "Agent that researches prospects via web search and drafts outreach",
      es: "Agente que investiga prospectos y redacta mensajes de contacto",
    },
    {
      en: "Agent that logs call notes and creates Linear follow-ups",
      es: "Agente que registra notas de llamadas y crea tareas de seguimiento",
    },
    {
      en: "Deal room portal for sharing proposals and tracking views",
      es: "Portal para compartir propuestas y trackear visualizaciones",
    },
    {
      en: "ROI calculator tailored to prospect's industry",
      es: "Calculadora de ROI adaptada a la industria del prospecto",
    },
  ],
  Marketing: [
    {
      en: "Campaign landing page with countdown timer and waitlist",
      es: "Landing de campaña con countdown y lista de espera",
    },
    {
      en: "Agent that repurposes blog posts into social threads",
      es: "Agente que convierte posts de blog en hilos para redes",
    },
    {
      en: "SEO brief generator that researches keywords and drafts outlines",
      es: "Generador de briefs SEO que investiga keywords y crea esquemas",
    },
    {
      en: "Event registration page with Supabase-powered signups",
      es: "Página de registro de eventos con signups en Supabase",
    },
    {
      en: "A/B test variant generator for landing page headlines",
      es: "Generador de variantes A/B para títulos de landing pages",
    },
    {
      en: "Agent that drafts newsletter content from your changelog",
      es: "Agente que redacta newsletters desde tu changelog",
    },
  ],
  Design: [
    {
      en: "Component library with buttons, cards, and forms",
      es: "Librería de componentes con botones, cards y formularios",
    },
    {
      en: "Interactive style guide with live previews",
      es: "Guía de estilos interactiva con previews en vivo",
    },
    {
      en: "Agent that audits pages and creates Linear issues for fixes",
      es: "Agente que audita páginas y crea tickets para correcciones",
    },
    {
      en: "Agent that documents components and generates usage examples",
      es: "Agente que documenta componentes y genera ejemplos de uso",
    },
    {
      en: "Color palette generator with accessibility contrast checks",
      es: "Generador de paletas con verificación de contraste accesible",
    },
    {
      en: "Icon browser with search and copy-to-clipboard",
      es: "Buscador de íconos con búsqueda y copiar al portapapeles",
    },
  ],
  Product: [
    {
      en: "Feature prototype generated from your PRD",
      es: "Prototipo de feature generado desde tu PRD",
    },
    {
      en: "Agent that synthesizes feedback and creates Linear tickets",
      es: "Agente que sintetiza feedback y crea tickets en Linear",
    },
    {
      en: "Agent that reads specs and generates working UI",
      es: "Agente que lee especificaciones y genera UI funcional",
    },
    {
      en: "Changelog page that pulls releases from Linear",
      es: "Página de changelog que trae releases desde Linear",
    },
    {
      en: "Feature voting board with Supabase-powered submissions",
      es: "Board de votación de features con Supabase",
    },
    {
      en: "Agent that turns rough ideas into scoped stories in Notion",
      es: "Agente que convierte ideas en historias detalladas en Notion",
    },
  ],
  "Data & Ops": [
    {
      en: "Executive dashboard with KPIs and trend charts",
      es: "Dashboard ejecutivo con KPIs y gráficos de tendencias",
    },
    {
      en: "Natural language SQL agent connected to your database",
      es: "Agente SQL en lenguaje natural conectado a tu base de datos",
    },
    {
      en: "Agent that detects anomalies and creates Linear alerts",
      es: "Agente que detecta anomalías y crea alertas en Linear",
    },
    {
      en: "Agent that generates weekly reports and exports to PDF",
      es: "Agente que genera reportes semanales y exporta a PDF",
    },
    {
      en: "Data validation UI that flags issues in CSV uploads",
      es: "UI de validación de datos que detecta errores en CSVs",
    },
    {
      en: "Status page showing system health and uptime",
      es: "Página de status mostrando salud del sistema y uptime",
    },
  ],
  Engineering: [
    {
      en: "Admin panel for managing users and permissions",
      es: "Panel de admin para gestionar usuarios y permisos",
    },
    {
      en: "Agent that triages Sentry errors and creates Linear tickets",
      es: "Agente que clasifica errores de Sentry y crea tickets",
    },
    {
      en: "Agent that generates API docs from your codebase",
      es: "Agente que genera documentación de API desde tu código",
    },
    {
      en: "Internal tool for customer support workflows",
      es: "Herramienta interna para flujos de soporte al cliente",
    },
    {
      en: "Feature flag dashboard with rollout controls",
      es: "Dashboard de feature flags con controles de rollout",
    },
    {
      en: "Agent that syncs Linear issues to Notion for stakeholders",
      es: "Agente que sincroniza issues de Linear a Notion",
    },
  ],
};

// Slide 5: Pick a Track - Part 1 (GTM, Marketing, Design)
function Slide5() {
  const { lang } = useLanguage();
  const tracks = [
    {
      icon: Target,
      title: "GTM",
      subtitle: "Go-to-market tools",
      key: "GTM" as const,
    },
    {
      icon: Sparkles,
      title: "Marketing",
      subtitle: "Growth experiments",
      key: "Marketing" as const,
    },
    {
      icon: Palette,
      title: "Design",
      subtitle: "Visual tools",
      key: "Design" as const,
    },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-8 md:px-16 md:py-12">
      <h2 className="mb-2 text-3xl font-bold md:text-5xl">
        {t.tracks.title[lang]}
      </h2>
      <p className="mb-6 text-white/50 md:mb-8">{t.tracks.part1[lang]}</p>
      <div className="grid flex-1 gap-4 md:grid-cols-3 md:gap-6">
        {tracks.map((track) => (
          <div
            key={track.title}
            className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-white/5 md:p-6"
          >
            <track.icon
              className="mb-3 h-6 w-6 text-white/60 md:mb-4 md:h-8 md:w-8"
              strokeWidth={1.5}
            />
            <h3 className="mb-1 text-lg font-semibold md:text-xl">
              {track.title}
            </h3>
            <p className="mb-3 text-xs text-white/50 md:mb-4 md:text-sm">
              {track.subtitle}
            </p>
            <ul className="mt-auto space-y-1.5 md:space-y-2">
              {trackIdeas[track.key].slice(0, 4).map((idea, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs leading-relaxed"
                >
                  <span className="mt-0.5 text-white/40">•</span>
                  <span className="text-white/60">{idea[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Slide 6: Pick a Track - Part 2 (Product, Data & Ops, Engineering)
function Slide6() {
  const { lang } = useLanguage();
  const tracks = [
    {
      icon: Layers,
      title: "Product",
      subtitle: "Product features",
      key: "Product" as const,
    },
    {
      icon: Database,
      title: "Data & Ops",
      subtitle: "Operations tools",
      key: "Data & Ops" as const,
    },
    {
      icon: Code2,
      title: "Engineering",
      subtitle: "Dev tools",
      key: "Engineering" as const,
    },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-8 md:px-16 md:py-12">
      <h2 className="mb-2 text-3xl font-bold md:text-5xl">
        {t.tracks.title[lang]}
      </h2>
      <p className="mb-6 text-white/50 md:mb-8">{t.tracks.part2[lang]}</p>
      <div className="grid flex-1 gap-4 md:grid-cols-3 md:gap-6">
        {tracks.map((track) => (
          <div
            key={track.title}
            className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-white/5 md:p-6"
          >
            <track.icon
              className="mb-3 h-6 w-6 text-white/60 md:mb-4 md:h-8 md:w-8"
              strokeWidth={1.5}
            />
            <h3 className="mb-1 text-lg font-semibold md:text-xl">
              {track.title}
            </h3>
            <p className="mb-3 text-xs text-white/50 md:mb-4 md:text-sm">
              {track.subtitle}
            </p>
            <ul className="mt-auto space-y-1.5 md:space-y-2">
              {trackIdeas[track.key].slice(0, 4).map((idea, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs leading-relaxed"
                >
                  <span className="mt-0.5 text-white/40">•</span>
                  <span className="text-white/60">{idea[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Slide 7: Your Credits
function Slide7() {
  const { lang } = useLanguage();
  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-8 md:justify-center md:px-16 md:py-16">
      <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
        {t.credits.title[lang]}
      </h2>
      <div className="grid flex-1 items-center gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/2 p-8">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm text-white/50">
              {t.credits.promoCode[lang]}
            </p>
            <div className="rounded-xl border border-white/20 bg-white/5 px-8 py-6 font-mono text-3xl font-bold tracking-wider md:text-4xl">
              SALTA2025
            </div>
          </div>
          <div className="space-y-4 text-sm text-white/60">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-white/60" />
              <span>{t.credits.duration[lang]}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-white/60" />
              <span>{t.credits.oneTime[lang]}</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/20">
              <span className="font-bold">1</span>
            </div>
            <div>
              <p className="mb-1 font-semibold">{t.credits.step1[lang]}</p>
              <p className="text-sm text-white/50">
                {t.credits.step1sub[lang]}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/20">
              <span className="font-bold">2</span>
            </div>
            <div>
              <p className="mb-1 font-semibold">{t.credits.step2[lang]}</p>
              <p className="text-sm text-white/50">
                {t.credits.step2sub[lang]}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/20">
              <span className="font-bold">3</span>
            </div>
            <div>
              <p className="mb-1 font-semibold">{t.credits.step3[lang]}</p>
              <p className="text-sm text-white/50">
                {t.credits.step3sub[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 8: Build Session with Agenda
function Slide8() {
  const { lang } = useLanguage();
  const [time, setTime] = useState(75 * 60); // 1 hr 15 min = 75 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((tt) => tt - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const progress = ((75 * 60 - time) / (75 * 60)) * 100;

  const agenda = [
    {
      time: "10:00",
      title: { es: "Coworking libre", en: "Open coworking" },
      desc: {
        es: "Espacio abierto para trabajar & networking",
        en: "Open space for work & networking",
      },
    },
    {
      time: "15:30",
      title: { es: "Apertura del evento", en: "Event opening" },
      desc: { es: "Bienvenida general", en: "General welcome" },
    },
    {
      time: "15:45",
      title: {
        es: "Video de v0 + intro + créditos",
        en: "v0 video + intro + credits",
      },
      desc: { es: "", en: "" },
    },
    {
      time: "16:15",
      title: { es: "Inicio del build", en: "Build start" },
      desc: { es: "Hands-on building", en: "Hands-on building" },
    },
    {
      time: "17:30",
      title: { es: "Deploy & submit", en: "Deploy & submit" },
      desc: {
        es: "Cierre de builds y carga de proyectos",
        en: "Close builds and upload projects",
      },
    },
    {
      time: "17:40",
      title: { es: "Demo showcase", en: "Demo showcase" },
      desc: { es: "Votación de la comunidad", en: "Community voting" },
    },
    {
      time: "18:00",
      title: { es: "Cierre del evento", en: "Event closing" },
      desc: { es: "", en: "" },
    },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-8 md:px-16 md:py-12">
      <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-5xl">
        {t.buildSession.title[lang]}
      </h2>
      <div className="grid flex-1 items-start gap-6 md:grid-cols-2 md:items-center md:gap-8">
        {/* Timer Section */}
        <div className="flex flex-col items-center">
          <div
            className="relative mb-8 h-48 w-48 cursor-pointer md:h-56 md:w-56"
            onClick={() => setIsRunning(!isRunning)}
          >
            <svg className="h-full w-full -rotate-90 transform">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-4xl font-bold md:text-5xl">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </span>
              <span className="mt-2 text-sm text-white/50">
                {isRunning
                  ? t.buildSession.inProgress[lang]
                  : t.buildSession.clickToStart[lang]}
              </span>
            </div>
          </div>
          <p className="text-center text-white/60">
            {t.buildSession.duration[lang]}
          </p>
          <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-6">
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20">
                <MessageSquare className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <p className="text-xs text-white/60">
                {t.buildSession.prompt[lang]}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20">
                <BarChart3 className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <p className="text-xs text-white/60">
                {t.buildSession.iterate[lang]}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20">
                <Rocket className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <p className="text-xs text-white/60">
                {t.buildSession.deploy[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Agenda Section */}
        <div className="h-full rounded-2xl border border-white/10 bg-white/2 p-6">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <Clock className="h-5 w-5 text-white/60" />
            {t.buildSession.agenda[lang]}
          </h3>
          <div className="space-y-4">
            {agenda.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="w-14 shrink-0 font-mono text-sm text-white/40">
                  {item.time}
                </span>
                <div>
                  <p className="text-sm font-medium">{item.title[lang]}</p>
                  {item.desc[lang] && (
                    <p className="text-xs text-white/40">{item.desc[lang]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 9: Ship & Showcase
function Slide9() {
  const { lang } = useLanguage();
  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-8 md:px-16 md:py-16">
      <h2 className="mb-4 text-3xl font-bold md:text-5xl">
        {t.ship.title[lang]}
      </h2>
      <p className="mb-12 text-xl text-white/60">{t.ship.subtitle[lang]}</p>
      <div className="grid flex-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/2 p-8">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20">
            <span className="text-2xl font-bold">1</span>
          </div>
          <h3 className="mb-3 text-xl font-semibold">{t.ship.step1[lang]}</h3>
          <p className="text-white/60">{t.ship.step1desc[lang]}</p>
          <div className="mt-auto pt-6">
            <Globe className="h-8 w-8 text-white/40" strokeWidth={1.5} />
          </div>
        </div>
        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/2 p-8">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20">
            <span className="text-2xl font-bold">2</span>
          </div>
          <h3 className="mb-3 text-xl font-semibold">{t.ship.step2[lang]}</h3>
          <p className="text-white/60">{t.ship.step2desc[lang]}</p>
          <div className="mt-auto pt-6">
            <Link2 className="h-8 w-8 text-white/40" strokeWidth={1.5} />
          </div>
        </div>
        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/2 p-8">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20">
            <span className="text-2xl font-bold">3</span>
          </div>
          <h3 className="mb-3 text-xl font-semibold">{t.ship.step3[lang]}</h3>
          <p className="text-white/60">{t.ship.step3desc[lang]}</p>
          <div className="mt-auto pt-6">
            <Play className="h-8 w-8 text-white/40" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo type
interface Demo {
  nombre: string;
  project_url: string;
  track: string;
  linkedin?: string;
}

// Slide 10: Live Showcase Form - Connected to Google Sheet
function Slide10() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    project_url: "",
    track: "",
    linkedin: "",
  });
  const [demos, setDemos] = useState<Demo[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyD04StNIWiJE413kxlD8PRmG48hVCcQQIP-iLMUG7wqf3p21hEUmFXATLufzcdl5Gu/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.project_url || !formData.track) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    try {
      // Fire and forget - don't wait for response due to CORS
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Silently ignore network errors
      });

      // Add to local demos list for live display
      setDemos((prev) => [...prev, { ...formData }]);
      setFormData({ nombre: "", project_url: "", track: "", linkedin: "" });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch {
      // Silently handle errors
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-8 md:px-16 md:py-12">
      <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-5xl">
        {t.showcase.title[lang]}
      </h2>
      <div className="grid flex-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="mb-6 text-xl font-semibold">
            {t.showcase.submitDemo[lang]}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-white/60">
                <User className="mr-2 inline h-4 w-4" />
                {t.showcase.name[lang]}
              </label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-white/30 focus:outline-none"
                placeholder={t.showcase.namePlaceholder[lang]}
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/60">
                <Link2 className="mr-2 inline h-4 w-4" />
                {t.showcase.projectUrl[lang]}
              </label>
              <input
                type="url"
                value={formData.project_url}
                onChange={(e) =>
                  setFormData({ ...formData, project_url: e.target.value })
                }
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-white/30 focus:outline-none"
                placeholder="https://your-project.vercel.app"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/60">
                <Layers className="mr-2 inline h-4 w-4" />
                {t.showcase.track[lang]}
              </label>
              <select
                value={formData.track}
                onChange={(e) =>
                  setFormData({ ...formData, track: e.target.value })
                }
                className="w-full cursor-pointer appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-white/30 focus:outline-none"
                required
              >
                <option value="" className="bg-black">
                  {t.showcase.selectTrack[lang]}
                </option>
                <option value="GTM" className="bg-black">
                  GTM
                </option>
                <option value="Marketing" className="bg-black">
                  Marketing
                </option>
                <option value="Design" className="bg-black">
                  Design
                </option>
                <option value="Product" className="bg-black">
                  Product
                </option>
                <option value="Data & Ops" className="bg-black">
                  Data & Ops
                </option>
                <option value="Engineering" className="bg-black">
                  Engineering
                </option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/60">
                {t.showcase.linkedinOptional[lang]}
              </label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({ ...formData, linkedin: e.target.value })
                }
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-white/30 focus:outline-none"
                placeholder="https://linkedin.com/in/your-profile"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 font-semibold text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {isSubmitting
                ? t.showcase.submitting[lang]
                : t.showcase.submitBtn[lang]}
            </button>
          </form>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="mb-6 text-xl font-semibold">
            {t.showcase.demoQueue[lang]} ({demos.length})
          </h3>
          {demos.length === 0 ? (
            <div className="flex h-full items-center justify-center text-white/40">
              <div className="text-center">
                <Clock
                  className="mx-auto mb-4 h-12 w-12 opacity-50"
                  strokeWidth={1.5}
                />
                <p>{t.showcase.noDemos[lang]}</p>
                <p className="text-sm">{t.showcase.beFirst[lang]}</p>
              </div>
            </div>
          ) : (
            <div className="max-h-80 space-y-3 overflow-y-auto">
              {demos.map((demo, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                      {i + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">
                        {demo.nombre} — {demo.track}
                      </p>
                      <a
                        href={demo.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block truncate text-sm text-white/50 hover:text-white/70"
                      >
                        {demo.project_url}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Slide 11: Live Showcase Cover
function Slide11() {
  const { lang } = useLanguage();
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20">
        <Play className="ml-1 h-10 w-10 text-white" fill="currentColor" />
      </div>
      <h1 className="mb-6 text-center text-5xl font-bold tracking-tight md:text-7xl">
        {t.liveShowcase.title[lang]}
      </h1>
      <p className="max-w-2xl text-center text-xl leading-relaxed text-white/60 md:text-2xl">
        {t.liveShowcase.desc1[lang]}
        <br />
        {t.liveShowcase.desc2[lang]}
      </p>
      <div className="mt-16 flex items-center gap-6">
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

// Slide 12: What is Prompt to Production
function Slide12() {
  const { lang } = useLanguage();
  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-8 md:justify-center md:px-16 md:py-16">
      <h2 className="mb-8 text-4xl font-bold text-balance md:text-6xl">
        {t.p2p.title[lang]}
      </h2>
      <p className="mb-12 max-w-3xl text-xl leading-relaxed text-white/60">
        {t.p2p.desc[lang]}
      </p>
      <div className="max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <p className="mb-4 text-2xl font-semibold">{t.p2p.subtitle[lang]}</p>
        <div className="space-y-3 text-white/60">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-white/60" />
            <span>{t.p2p.step1[lang]}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-white/60" />
            <span>{t.p2p.step2[lang]}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-white/60" />
            <span>{t.p2p.step3[lang]}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-white/60" />
            <span>{t.p2p.step4[lang]}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-white/60" />
            <span>{t.p2p.step5[lang]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 13: Voting & Winners
function Slide13() {
  const { lang } = useLanguage();
  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-8 md:px-16 md:py-12">
      <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
        {t.voting.title[lang]}
      </h2>
      <div className="grid flex-1 gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-xl font-semibold">
              {t.voting.votingTitle[lang]}
            </h3>
            <p className="mb-4 text-white/60">{t.voting.votingOpen[lang]}</p>
            <p className="text-sm text-white/40">{t.voting.votingEnd[lang]}</p>
            <div className="mt-4 space-y-2 text-sm text-white/60">
              <p>{t.voting.voteDesc1[lang]}</p>
              <p>{t.voting.voteDesc2[lang]}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-xl font-semibold">
              {t.voting.howWinners[lang]}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">{t.voting.trackWinners[lang]}</p>
                <p className="text-sm text-white/50">
                  {t.voting.trackWinnersDesc[lang]}
                </p>
              </div>
              <div>
                <p className="font-medium">{t.voting.globalWinner[lang]}</p>
                <p className="text-sm text-white/50">
                  {t.voting.globalWinnerDesc[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="mb-6 text-xl font-semibold">
            {t.voting.prizes[lang]}
          </h3>
          <div className="space-y-6">
            <div className="rounded-xl border border-white/20 bg-white/[0.02] p-6">
              <p className="mb-2 text-sm text-white/50">
                {t.voting.globalPrize[lang]}
              </p>
              <p className="mb-2 text-3xl font-bold">
                $1,000 {lang === "es" ? "créditos" : "credits"} v0
              </p>
              <p className="text-xl text-white/60">+ $500 USD cash</p>
            </div>
            <div className="rounded-xl border border-white/10 p-6">
              <p className="mb-2 text-sm text-white/50">
                {t.voting.trackPrize[lang]}
              </p>
              <p className="text-2xl font-bold">
                $1,000 {lang === "es" ? "créditos" : "credits"} v0
              </p>
              <p className="text-sm text-white/50">{t.voting.each[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 14: FAQs
function Slide14() {
  const { lang } = useLanguage();
  const faqs = [
    { q: t.faqs.q1[lang], a: t.faqs.a1[lang] },
    { q: t.faqs.q2[lang], a: t.faqs.a2[lang] },
    { q: t.faqs.q3[lang], a: t.faqs.a3[lang] },
    { q: t.faqs.q4[lang], a: t.faqs.a4[lang] },
    { q: t.faqs.q5[lang], a: t.faqs.a5[lang] },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-8 md:px-16 md:py-12">
      <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
        {t.faqs.title[lang]}
      </h2>
      <div className="grid max-w-5xl flex-1 gap-6 md:grid-cols-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
          >
            <p className="mb-3 font-semibold">{faq.q}</p>
            <p className="text-sm text-white/60">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Slide 15: Submit & Browse Links
function Slide15() {
  const { lang } = useLanguage();
  return (
    <div className="flex h-full flex-col items-center overflow-y-auto px-8 py-8 md:justify-center md:py-0">
      <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-5xl">
        {t.submit.title[lang]}
      </h2>
      <div className="w-full max-w-2xl space-y-6">
        <a
          href="https://v0-v0prompttoproduction2026.vercel.app/submit"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-white/20 bg-white/[0.02] p-8 transition-all hover:border-white/40 hover:bg-white/[0.05]"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm text-white/50">
                {t.submit.submitProject[lang]}
              </p>
              <p className="text-xl font-semibold">
                {t.submit.submitBuild[lang]}
              </p>
            </div>
            <ExternalLink className="h-6 w-6 text-white/40 transition-colors group-hover:text-white" />
          </div>
          <p className="mt-4 font-mono text-sm break-all text-white/40">
            v0-v0prompttoproduction2026.vercel.app/submit
          </p>
        </a>
        <a
          href="https://v0-v0prompttoproduction2026.vercel.app/browse"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-white/20 bg-white/[0.02] p-8 transition-all hover:border-white/40 hover:bg-white/[0.05]"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm text-white/50">
                {t.submit.browseVote[lang]}
              </p>
              <p className="text-xl font-semibold">Browse & Vote</p>
            </div>
            <ExternalLink className="h-6 w-6 text-white/40 transition-colors group-hover:text-white" />
          </div>
          <p className="mt-4 font-mono text-sm break-all text-white/40">
            v0-v0prompttoproduction2026.vercel.app/browse
          </p>
        </a>
      </div>
      <div className="mt-16 flex items-center gap-6">
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

function Slide16() {
  const { lang } = useLanguage();
  const [url] = useState(() =>
    typeof window === "undefined" ? "" : window.location.href.split("?")[0]
  );

  const qrUrl = url
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}&bgcolor=000000&color=ffffff&format=svg`
    : "";

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-auto px-8 py-8">
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
            className="mb-4 h-28 w-28 rounded-full border-2 border-white/20 object-cover md:h-36 md:w-36"
          />
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">Artu Grande</h2>
          <p className="mb-4 text-white/60">
            {lang === "es" ? "Fundador de DESAFIA" : "Founder of DESAFIA"}
            <br />
            v0 Ambassador
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://arturogrande.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-opacity hover:opacity-70"
              aria-label="Website"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/ArtuGrande"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-opacity hover:opacity-70"
              aria-label="X/Twitter"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/arturo-grande/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-opacity hover:opacity-70"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://v0.app/@artugrande"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="v0"
            >
              <img src="/v0-logo.svg" alt="v0" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* QR Code */}
        {qrUrl && (
          <div className="flex flex-col items-center">
            <div className="rounded-2xl bg-white p-3">
              <img
                src={qrUrl || "/placeholder.svg"}
                alt="QR Code"
                width={160}
                height={160}
                className="h-32 w-32 md:h-40 md:w-40"
              />
            </div>
            <p className="mt-3 font-mono text-sm text-white/40">
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

const slides: Array<() => React.JSX.Element> = [
  Slide1,
  Slide2,
  Slide3,
  Slide6,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
];

const NAV_AUTO_HIDE_DELAY_MS = 2500;

export type SlideDeckMode = "preview" | "present";

type SlideDeckProps = {
  mode?: SlideDeckMode;
};

export default function SlideDeck({ mode = "present" }: SlideDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lang, setLang] = useState<Language>("es");
  const [isFullscreenPresentation, setIsFullscreenPresentation] = useState(
    () => typeof document !== "undefined" && Boolean(document.fullscreenElement)
  );
  const [isNavVisible, setIsNavVisible] = useState(true);
  const hideNavTimeoutRef = useRef<number | null>(null);

  const isPresentMode = mode === "present";
  const shouldAutoHideNav = isPresentMode && isFullscreenPresentation;

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const clearHideNavTimeout = useCallback(() => {
    if (hideNavTimeoutRef.current !== null) {
      window.clearTimeout(hideNavTimeoutRef.current);
      hideNavTimeoutRef.current = null;
    }
  }, []);

  const scheduleHideNav = useCallback(() => {
    clearHideNavTimeout();

    if (!shouldAutoHideNav) {
      return;
    }

    hideNavTimeoutRef.current = window.setTimeout(() => {
      setIsNavVisible(false);
    }, NAV_AUTO_HIDE_DELAY_MS);
  }, [clearHideNavTimeout, shouldAutoHideNav]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
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

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const updateFullscreenState = () => {
      const isFullscreen = Boolean(document.fullscreenElement);
      setIsFullscreenPresentation(isFullscreen);
      clearHideNavTimeout();

      if (isFullscreen) {
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

  useEffect(() => {
    if (!shouldAutoHideNav) {
      clearHideNavTimeout();
      return;
    }

    scheduleHideNav();

    return () => {
      clearHideNavTimeout();
    };
  }, [clearHideNavTimeout, scheduleHideNav, shouldAutoHideNav]);

  const handleNavAreaMouseEnter = useCallback(() => {
    if (!shouldAutoHideNav) {
      return;
    }

    clearHideNavTimeout();
    setIsNavVisible(true);
  }, [clearHideNavTimeout, shouldAutoHideNav]);

  const handleNavAreaMouseLeave = useCallback(() => {
    if (!shouldAutoHideNav) {
      return;
    }

    scheduleHideNav();
  }, [scheduleHideNav, shouldAutoHideNav]);

  const CurrentSlideComponent = slides[currentSlide]! ?? slides[0];

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div
        className={cn(
          "relative w-full overflow-hidden bg-black font-sans text-white select-none",
          isPresentMode ? "h-screen" : "h-full min-h-full"
        )}
      >
        {/* Language Selector - Top Left */}
        <LanguageSelector />

        {/* QR Code - Top Right (hidden on last slide) */}
        <QRCode hide={!isPresentMode || currentSlide === slides.length - 1} />

        {/* Slide Content */}
        <div className="h-full w-full overflow-y-auto pt-16 pb-28 md:pt-0 md:pb-20">
          <CurrentSlideComponent />
        </div>

        {/* Navigation */}
        <div
          className="absolute inset-x-0 bottom-0 flex justify-center pt-8 pb-6 md:pb-8"
          onMouseEnter={handleNavAreaMouseEnter}
          onMouseLeave={handleNavAreaMouseLeave}
        >
          <div
            className={cn(
              "flex flex-col items-center gap-3 transition-opacity duration-200",
              shouldAutoHideNav &&
                !isNavVisible &&
                "pointer-events-none opacity-0"
            )}
          >
            {/* Slide Counter - Mobile centered above dots */}
            <div className="font-mono text-xs text-white/40 md:hidden">
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 md:h-10 md:w-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>

              {/* Dots - hidden on mobile, shown on tablet+ */}
              <div className="hidden items-center gap-2 md:flex">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === currentSlide
                        ? "w-6 bg-white"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 md:h-10 md:w-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Counter - Desktop */}
        <div className="absolute right-8 bottom-8 hidden font-mono text-sm text-white/40 md:block">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>

        {/* Keyboard Hint */}
        {isPresentMode && (
          <div className="absolute bottom-8 left-8 hidden text-xs text-white/30 md:block">
            {t.nav[lang]}
          </div>
        )}
      </div>
    </LanguageContext.Provider>
  );
}
