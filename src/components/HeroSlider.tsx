// src/components/HeroSlider.tsx
"use client";

import {useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import {useTranslations, useLocale} from "next-intl";

const SLIDES = [
  { id: "1", image: "/hero/slide1.png" },
  { id: "2", image: "/hero/slide2.png" },
] as const;

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay({delay: 6000})]);
  const [selected, setSelected] = useState(0);
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
          {SLIDES.map((s, i) => (
            <div className="relative min-w-0 flex-[0_0_100%]" key={s.id}>
              <div className="relative h-[64vh] md:h-[72vh]">
                <Image src={s.image} alt="" fill priority={i === 0} className="object-cover" />
                <div className="absolute inset-0 bg-black/55" />
              </div>

              {/* texto sobreposto */}
              <div className="absolute inset-0 flex items-center">
                <Container>
                  <div className="max-w-2xl">
                    <p className="text-white/80">{t("hero.welcome")}</p>
                    <h1 className="mt-2 font-heading text-4xl md:text-6xl text-white tracking-tight">
                      {t("hero.title")}
                    </h1>
                    <p className="mt-4 text-white/90">{t("hero.lead")}</p>
                    <p className="text-white/90">{t("hero.exp")}</p>

                    {/* ✅ Link do Next com prefixo de locale */}
                    <Link href={withLocale("/contactos")} className="mt-6 btn-gs">
                      {t("hero.contact")}
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores (mobile = bottom center; desktop = coluna direita) */}
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
                    selected === i ? "bg-white" : "bg-white/40 hover:bg-white/70"
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
