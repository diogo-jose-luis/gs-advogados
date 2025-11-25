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

  const onOpen = (item: Competencia) => {
    setCurrent(item);
    setOpen(true);
  };
  const onClose = () => setOpen(false);

  return (
    <section className="py-14 md:py-20">
      <div className="container-gs">
        {/* 🔹 Subtítulo */}
        <p className="font-poppins text-[14px] text-gray-600 mb-2 text-center md:text-left">
          {tPage("practices.title")}
        </p>

        {/* 🔹 Título */}
        <h2 className="font-poppins font-semibold text-[32px] md:text-[40px] leading-tight text-black mb-10 md:mb-14 text-center md:text-left">
          {tPage("practices.subtitle")}
        </h2>

        {/* GRID - linhas com mesma altura */}
        <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-12">
          {COMPETENCIAS.map((it, idx) => {
            const title = tGrid(`${it.key}.title`);
            const desc = tGrid(`${it.key}.desc`);

            return (
              <article
                key={it.key}
                className="flex flex-col text-left h-full"
              >
                {/* Imagem */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                  <Image
                    src={it.img}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 28vw, (min-width:640px) 45vw, 100vw"
                    priority={idx === 0}
                  />
                </div>

                {/* Título vermelho */}
                <h3 className="mt-4 font-poppins font-semibold text-[18px] md:text-[20px] text-[#B21F12]">
                  {title}
                </h3>

                {/* Descrição */}
                <p className="mt-2 font-poppins font-extralight text-[14px] text-black/80 leading-relaxed">
                  {desc}
                </p>

                {/* Botão alinhado ao fundo e ao centro */}
                <button
                  onClick={() => onOpen(it)}
                  className="mt-auto pt-4 self-center btn-gs-outline"
                >
                  {tPage("more")}
                </button>
              </article>
            );
          })}
        </div>

        {/* LINK VER TODAS */}
        <div className="mt-8 md:mt-12 flex justify-end">
          <a
            href={withLocale("/competencias")}
            className="text-sm font-poppins text-black/60 hover:text-black underline underline-offset-4"
          >
            {tPage("more")}
          </a>
        </div>
      </div>

      <CompetenciaDrawer open={open} onClose={onClose} item={current} />
    </section>
  );
}
