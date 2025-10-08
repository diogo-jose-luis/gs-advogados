"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "../Container";

export default function AboutValues({
  imageSrc = "/images/valores.jpg",
  imageAlt = "GS Advogados – Valores",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  const t = useTranslations("aboutPage.values");

  // Bullets opcionais vindos do JSON
  const raw = t.raw("bullets") as unknown;
  const bullets = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <section className="py-14 md:py-20 bg-white">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Texto (esquerda) */}
          <div className="order-2 lg:order-1">
            <p className="mb-2 font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-gs-ink/70">
              {t("kicker")}
            </p>

            <h2 className="font-heading text-5xl md:text-7xl leading-none tracking-tight text-gs-ink mb-6">
              {t("heading")}
            </h2>

            <div className="space-y-5 font-sans text-base md:text-lg leading-relaxed text-gs-ink/80">
              <p>{t("lead")}</p>

              {bullets.length > 0 && (
                <ul className="mt-2 space-y-2 pl-5">
                  {bullets.map((item, i) => (
                    <li key={i} className="list-disc marker:text-gs-red">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Imagem (direita) */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
