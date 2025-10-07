"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { COMPETENCIAS, Competencia } from "@/data/competencias";
import CompetenciaDrawer from "./CompetenciaDrawer";

export default function AreasPracticesAll() {
  const tGrid = useTranslations("competenciasPage.practices.grid");
  const tPage = useTranslations("competenciasPage");
  const locale = useLocale();

  const prefix = locale ? `/${locale}` : "";
  const withLocale = (p: string) => `${prefix}${p === "/" ? "" : p}`;

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Competencia | null>(null);

  const onOpen = (item: Competencia) => { setCurrent(item); setOpen(true); };
  const onClose = () => setOpen(false);

  return (
    <section className="py-14 md:py-20">
      <div className="container-gs">
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-12">
          {COMPETENCIAS.map((it, idx) => {
            const title = tGrid(`${it.key}.title`);
            const desc = tGrid(`${it.key}.desc`);

            return (
              <article key={it.key} className="text-left">
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

                <h3 className="mt-4 font-sans text-[18px] font-bold text-gs-ink">
                  {title}
                </h3>

                <p className="mt-2 font-sans text-[14px] leading-relaxed text-gs-ink/70">
                  {desc}
                </p>

                {/* Abre o drawer com mais info — sem navegar */}
                <button
                  onClick={() => onOpen(it)}
                  className="mt-4 inline-flex btn-gs-outline"
                >
                  {tPage("more")}
                </button>
              </article>
            );
          })}
        </div>

        {/* link “ver todas” (mantido) */}
        <div className="mt-8 md:mt-12 flex justify-end">
          <a
            href={withLocale("/competencias")}
            className="text-sm font-sans text-gs-ink/70 hover:text-gs-ink underline underline-offset-4"
          >
            {tPage("more")}
          </a>
        </div>
      </div>

      {/* Drawer */}
      <CompetenciaDrawer open={open} onClose={onClose} item={current} />
    </section>
  );
}
