"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../Container";
import { useTranslations } from "next-intl";

export default function AboutIntro({
  imageSrc = "/images/quem-somos.jpeg",
  imageAlt = "GS Advogados - Nossa História",
  youtubeId = "oobt6nWXPac",
}: {
  imageSrc?: string;
  imageAlt?: string;
  youtubeId?: string;
}) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("aboutPage.aboutIntro");

  return (
    <section className="py-14 md:py-20 bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Imagem + play */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t("playAria")}
              className="group absolute inset-0 grid place-content-center"
            >
              <span className="grid h-20 w-20 place-content-center rounded-full bg-white/25 backdrop-blur-md transition hover:bg-white/35">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="#fff" strokeWidth="2" />
                  <path d="M10 8l6 4-6 4V8z" fill="#fff" />
                </svg>
              </span>
            </button>
          </div>

          {/* Textos (consistência com Home) */}
          <div>
            <div className="mb-6 h-1 w-10 rounded bg-gs-red" />
            <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-gs-ink/70 uppercase">
              {t("kicker")}
            </p>

            <h2 className="mt-2 font-heading text-5xl md:text-7xl leading-none tracking-tight text-gs-ink">
              {t("heading")}
            </h2>

            <div className="mt-6 max-w-none space-y-5 font-sans text-base md:text-lg leading-relaxed text-gs-ink/80">
              <p>{t.rich("p1", { b: (c) => <strong className="text-gs-ink">{c}</strong> })}</p>
              <p>{t.rich("p2", { b: (c) => <strong className="text-gs-ink">{c}</strong> })}</p>
              <p>{t.rich("p3", { b: (c) => <strong className="text-gs-ink">{c}</strong> })}</p>
            </div>

            <p className="mt-8 font-sans text-xs md:text-sm tracking-[0.35em] text-gs-ink/70 uppercase">
              {t("signature")}
            </p>
          </div>
        </div>
      </Container>

      {/* Modal vídeo */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label={t("close")}
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 rounded bg-white/10 px-3 py-1 text-white hover:bg-white/20"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={t("videoTitle")}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
