"use client";

import Image from "next/image";
import Container from "./Container";
import { useTranslations } from "next-intl";

const CARDS = [
  { id: "empresarial", image: "/teasers/empresarial.png" },
  { id: "contencioso", image: "/teasers/contencioso.png" },
  { id: "laboral", image: "/teasers/laboral.png" }
] as const;

export default function PracticeStrip() {
  const t = useTranslations();

  return (
    <section aria-labelledby="practices" className="relative z-10 mb-10">
      <Container>
        {/* ===== Mobile (< md): bloco por cartão (sem overlap) ===== */}
        <div className="md:hidden space-y-6">
          {CARDS.map((card, i) => (
            <article key={card.id} className="overflow-hidden rounded-none bg-white">
              <div className="relative h-48">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="bg-[#F3F4F6] px-4 py-5">
                {/* Título: Poppins 17px */}
                <h3 className="font-sans text-[17px] font-semibold text-gs-ink">
                  {t(`practice.${card.id}.title`)}
                </h3>
                {/* Descrição: Poppins 14px (sem altura fixa no mobile) */}
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-gs-gray">
                  {t(`practice.${card.id}.desc`)}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ===== Desktop (≥ md): faixa única com overlap ===== */}
        <div className="hidden md:block -mt-16">
          <div className="overflow-hidden rounded-none shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
            {/* topo: imagens coladas */}
            <div className="grid grid-cols-3 gap-0">
              {CARDS.map((card, i) => (
                <div key={card.id} className="relative h-60 lg:h-64">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    priority={i === 0}
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </div>
              ))}
            </div>

            {/* base: cinza claro, 3 colunas */}
            <div className="bg-[#F3F4F6]">
              <div className="grid grid-cols-3">
                {CARDS.map((card) => (
                  <div key={card.id} className="px-6 py-8 flex flex-col">
                    {/* Título: Poppins 17px */}
                    <h3 className="font-sans text-[17px] font-semibold text-gs-ink">
                      {t(`practice.${card.id}.title`)}
                    </h3>
                    {/* Descrição: Poppins 14px com altura fixa para alinhar as caixas */}
                    <p className="mt-3 font-sans text-[14px] leading-relaxed text-gs-gray min-h-[84px]">
                      {t(`practice.${card.id}.desc`)}
                    </p>
                    {/* (Opcional) CTA ou espaço extra aqui mantém o alinhamento */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
