"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Container from "./Container";
import { useState } from "react";
import { COMPETENCIAS, type Competencia } from "@/data/competencias";
import CompetenciaDrawer from "@/components/practices/CompetenciaDrawer";

export default function AreasPractices() {
  const t = useTranslations(); // mantém "practices.heading", "practices.subheading" e "about.cta"
  const tGrid = useTranslations("competenciasPage.practices.grid");
  const locale = useLocale();

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Competencia | null>(null);

  const items = COMPETENCIAS.slice(0, 6); // só 6 na home

  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* Header alinhado à esquerda */}
        <header className="text-left">
          <h2 className="font-poppins font-semibold text-[40px] leading-none tracking-tight text-gs-ink">
            {t("practices.heading")}
          </h2>

          <p className="mt-3 max-w-3xl font-poppins font-extralight text-[17px] text-gs-ink/80">
            {t("practices.subheading")}
          </p>
        </header>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-12">
          {items.map((it, idx) => {
            const title = tGrid(`${it.key}.title`);
            const desc = tGrid(`${it.key}.desc`);
            return (
              <article key={it.key} className="flex flex-col text-left">
                <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={it.img}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 28vw, (min-width:640px) 45vw, 100vw"
                    priority={idx === 0}
                  />
                </div>

                <h3 className="mt-4 text-center font-poppins font-semibold text-[20px] text-[#B41E0B]">
                  {title}
                </h3>

                <p className="mt-2 text-center font-poppins font-extralight text-[14px] leading-relaxed text-[#141414]">
                  {desc}
                </p>

                <div className="mt-auto flex justify-center pt-4">
                  <button
                    onClick={() => {
                      setCurrent(it);
                      setOpen(true);
                    }}
                    className="btn-gs-outline"
                  >
                    {t("about.cta")}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 md:mt-12 flex items-center justify-end gap-4">
          <div className="flex-1 border-t border-[#B41E0B]" />
          <a
            href={`/${locale}/competencias`}
            className="text-sm font-poppins text-gs-ink/70 hover:text-gs-ink underline underline-offset-4"
          >
            {t("practices.more")}
          </a>
        </div>
      </Container>

      {/* Drawer reutilizado */}
      <CompetenciaDrawer
        open={open}
        onClose={() => setOpen(false)}
        item={current}
      />
    </section>
  );
}
