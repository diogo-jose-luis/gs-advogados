"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutValues({
  imageSrc = "/images/valores.jpg",
  imageAlt = "GS Advogados – Valores",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  const t = useTranslations("aboutPage.values");

  // opcional: lista de bullets (se existirem no json)
  let bullets: string[] = [];
  const raw = t.raw("bullets") as unknown;
  if (Array.isArray(raw)) {
    bullets = raw as string[];
  }

  return (
    <section className="container-gs py-16 lg:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        {/* Coluna texto (esquerda) */}
        <div className="order-2 lg:order-1">
          <p className="mb-2 text-sm tracking-[0.2em] text-gs-gray">{t("kicker")}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-gs-ink mb-6">
            {t("heading")}
          </h2>

          <div className="space-y-5 text-base leading-relaxed font-sans text-gs-gray">
            <p>{t("lead")}</p>
            {bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-2">
                {bullets.map((item, i) => (
                  <li key={i} className="marker:text-gs-red">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Coluna imagem (direita) */}
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
