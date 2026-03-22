"use client";

import React, { useState } from "react";
import { User, Link2, Layers, Send, Clock } from "lucide-react";
import { useTranslation } from "@/components/slides/slide-language";
import type { Translations } from "../translations";

interface Demo {
  nombre: string;
  project_url: string;
  track: string;
  linkedin?: string;
}

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyD04StNIWiJE413kxlD8PRmG48hVCcQQIP-iLMUG7wqf3p21hEUmFXATLufzcdl5Gu/exec";

export function ShowcaseFormSlide() {
  const { lang, t } = useTranslation<Translations>();
  const [formData, setFormData] = useState({
    nombre: "",
    project_url: "",
    track: "",
    linkedin: "",
  });
  const [demos, setDemos] = useState<Demo[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.project_url || !formData.track) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    try {
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {});

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
    <div className="flex h-full flex-col overflow-y-auto px-8 py-12 md:px-16">
      <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-5xl">
        {t.showcase.title[lang]}
      </h2>
      <div className="grid flex-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="mb-6 text-xl font-semibold">
            {t.showcase.submitDemo[lang]}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                <User className="mr-2 inline h-4 w-4" />
                {t.showcase.name[lang]}
              </label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground placeholder-muted-foreground/50 transition-colors focus:border-foreground/30 focus:outline-none"
                placeholder={t.showcase.namePlaceholder[lang]}
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                <Link2 className="mr-2 inline h-4 w-4" />
                {t.showcase.projectUrl[lang]}
              </label>
              <input
                type="url"
                value={formData.project_url}
                onChange={(e) => setFormData({ ...formData, project_url: e.target.value })}
                className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground placeholder-muted-foreground/50 transition-colors focus:border-foreground/30 focus:outline-none"
                placeholder="https://your-project.vercel.app"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                <Layers className="mr-2 inline h-4 w-4" />
                {t.showcase.track[lang]}
              </label>
              <select
                value={formData.track}
                onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                className="w-full cursor-pointer appearance-none rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground transition-colors focus:border-foreground/30 focus:outline-none"
                required
              >
                <option value="" className="bg-background">{t.showcase.selectTrack[lang]}</option>
                <option value="GTM" className="bg-background">GTM</option>
                <option value="Marketing" className="bg-background">Marketing</option>
                <option value="Design" className="bg-background">Design</option>
                <option value="Product" className="bg-background">Product</option>
                <option value="Data & Ops" className="bg-background">Data &amp; Ops</option>
                <option value="Engineering" className="bg-background">Engineering</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                {t.showcase.linkedinOptional[lang]}
              </label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground placeholder-muted-foreground/50 transition-colors focus:border-foreground/30 focus:outline-none"
                placeholder="https://linkedin.com/in/your-profile"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-foreground py-3 font-semibold text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? t.showcase.submitting[lang] : t.showcase.submitBtn[lang]}
            </button>
          </form>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="mb-6 text-xl font-semibold">
            {t.showcase.demoQueue[lang]} ({demos.length})
          </h3>
          {demos.length === 0 ? (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Clock className="mx-auto mb-4 h-12 w-12 opacity-50" strokeWidth={1.5} />
                <p>{t.showcase.noDemos[lang]}</p>
                <p className="text-sm">{t.showcase.beFirst[lang]}</p>
              </div>
            </div>
          ) : (
            <div className="max-h-80 space-y-3 overflow-y-auto">
              {demos.map((demo, i) => (
                <div key={i} className="rounded-lg border border-border bg-muted/30 p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold">
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
                        className="block truncate text-sm text-muted-foreground hover:text-foreground/70"
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
