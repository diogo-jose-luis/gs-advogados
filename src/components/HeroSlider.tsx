"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useTranslations, useLocale } from "next-intl";

const SLIDES = [
  { id: "1", image: "/hero/banner1.png" },
  { id: "2", image: "/hero/banner1.png" },
] as const;

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000 }),
  ]);
  const [selected, setSelected] = useState(0);

  // anima o 1º slide após montar
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const t = useTranslations();
  const locale = useLocale();
  const prefix = locale ? `/${locale}` : "";
  const withLocale = (p: string) => `${prefix}${p === "/" ? "" : p}`;

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((s, i) => {
            const active = selected === i;
            const show = active && mounted;

            return (
              <div className="relative min-w-0 flex-[0_0_100%]" key={s.id}>
                {/* imagem */}
                <div className="relative h-[64vh] md:h-[72vh]">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    priority={i === 0}
                    className="object-cover brightness-110"
                  />
                  {/* overlay 70% transparente (30% opacidade) */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* texto sobreposto (à esquerda) */}
                <div className="absolute inset-0 flex items-center">
                  <Container>
                    <div
                      className={[
                        "w-full will-change-transform transition-all duration-500",
                        "mx-0 pl-0", // 🔥 alinha REALMENTE à esquerda do Container
                        show
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2",
                      ].join(" ")}
                    >
                      {/* 1º texto: 18px, Poppins light */}
                      <p
                        className="font-poppins font-light text-[18px] text-white/80 transition-all duration-500"
                        style={{ transitionDelay: show ? "40ms" : "0ms" }}
                      >
                        {t("hero.welcome")}
                      </p>

                      {/* Título: GS Advogados – Poly regular, 80px em desktop */}
                      <h1
                        className="mt-2 font-poly font-normal text-[40px] md:text-[80px] leading-[1.05] text-white tracking-tight transition-all duration-700"
                        style={{ transitionDelay: show ? "100ms" : "0ms" }}
                      >
                        {t("hero.title")}
                      </h1>

                      {/* Texto: 18px, Montserrat light */}
                      <p
                        className="mt-4 font-montserrat font-light text-[18px] text-white/90 transition-all duration-700"
                        style={{ transitionDelay: show ? "160ms" : "0ms" }}
                      >
                        {t("hero.lead")}
                      </p>
                      <p
                        className="font-montserrat font-light text-[18px] text-white/90 transition-all duration-700"
                        style={{ transitionDelay: show ? "200ms" : "0ms" }}
                      >
                        {t("hero.exp")}
                      </p>

                      {/* Botão: Montserrat light, 16 / 18px */}
                      <Link
                        href={withLocale("/contactos")}
                        className="mt-6 btn-gs text-[16px] md:text-[18px] transition-all duration-700"
                        style={{ transitionDelay: show ? "260ms" : "0ms" }}
                      >
                        {t("hero.contact")}
                      </Link>
                    </div>
                  </Container>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicadores */}
      {SLIDES.length > 1 && (
        <>
          <div className="absolute md:hidden bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={`m-${i}`}
                aria-label={`Ir para slide ${i + 1}`}
                aria-current={selected === i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  selected === i ? "bg-white" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col-reverse gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={`d-${i}`}
                  aria-label={`Ir para slide ${i + 1}`}
                  aria-current={selected === i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    selected === i
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
