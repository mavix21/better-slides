"use client";

import { useState, useEffect } from "react";
import { MessageSquare, BarChart3, Rocket, Clock } from "lucide-react";
import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";
import type { Language } from "@/components/slides/slide-language";

function getAgenda(lang: Language) {
  return [
    {
      time: "10:00",
      title: lang === "es" ? "Coworking libre" : "Open coworking",
      desc: lang === "es" ? "Espacio abierto para trabajar & networking" : "Open space for work & networking",
    },
    {
      time: "15:30",
      title: lang === "es" ? "Apertura del evento" : "Event opening",
      desc: lang === "es" ? "Bienvenida general" : "General welcome",
    },
    {
      time: "15:45",
      title: lang === "es" ? "Video de v0 + intro + créditos" : "v0 video + intro + credits",
      desc: "",
    },
    {
      time: "16:15",
      title: lang === "es" ? "Inicio del build" : "Build start",
      desc: "Hands-on building",
    },
    {
      time: "17:30",
      title: lang === "es" ? "Deploy & submit" : "Deploy & submit",
      desc: lang === "es" ? "Cierre de builds y carga de proyectos" : "Close builds and upload projects",
    },
    {
      time: "17:40",
      title: lang === "es" ? "Demo showcase" : "Demo showcase",
      desc: lang === "es" ? "Votación de la comunidad" : "Community voting",
    },
    {
      time: "18:00",
      title: lang === "es" ? "Cierre del evento" : "Event closing",
      desc: "",
    },
  ];
}

export function BuildSessionSlide() {
  const { lang, t } = useTranslation<Translations>();
  const [time, setTime] = useState(75 * 60);
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
  const agenda = getAgenda(lang);

  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:px-16">
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
                stroke="currentColor"
                strokeOpacity={0.1}
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="currentColor"
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
              <span className="mt-2 text-sm text-muted-foreground">
                {isRunning
                  ? t.buildSession.inProgress[lang]
                  : t.buildSession.clickToStart[lang]}
              </span>
            </div>
          </div>
          <p className="text-center text-muted-foreground">
            {t.buildSession.duration[lang]}
          </p>
          <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, label: t.buildSession.prompt[lang] },
              { icon: BarChart3, label: t.buildSession.iterate[lang] },
              { icon: Rocket, label: t.buildSession.deploy[lang] },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Agenda Section */}
        <div className="h-full rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <Clock className="h-5 w-5 text-muted-foreground" />
            {t.buildSession.agenda[lang]}
          </h3>
          <div className="space-y-4">
            {agenda.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="w-14 shrink-0 font-mono text-sm text-muted-foreground">
                  {item.time}
                </span>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  {item.desc && (
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
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
