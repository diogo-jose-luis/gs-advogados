"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useTranslations, useLocale } from "next-intl";

const ITEMS = [
  { key: "publico",          image: "/areas/publico.png",          href: "/competencias/publico-administrativo" },
  { key: "civil",            image: "/areas/civil.png",            href: "/competencias/civil-comercial-consumidor" },
  { key: "energiaRecursos",  image: "/areas/energia.png",          href: "/competencias/energia-recursos-naturais" },
  { key: "familia",          image: "/areas/familia.png",          href: "/competencias/familia-sucessoes" },
  { key: "saude",            image: "/areas/saude.png",            href: "/competencias/saude-responsabilidade-medica" },
  { key: "laboralSegSocial", image: "/areas/laboral.png",          href: "/competencias/laboral-seguranca-social" }
] as const;

export default function AreasPractices() {
  const t = useTranslations();
  const locale = useLocale();
  const prefix = locale ? `/${locale}` : "";
  const withLocale = (p: string) => `${prefix}${p === "/" ? "" : p}`;

  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* Header alinhado à esquerda */}
        <header className="text-left">
          {/* Título: Times New Roman 96px (reduz no mobile) */}
          <h2 className="font-heading text-[44px] md:text-[96px] leading-none tracking-tight text-gs-ink">
            {t("practices.heading")}
          </h2>
          {/* Subtítulo: Poppins 18px */}
          <p className="mt-3 max-w-3xl font-sans text-[16px] md:text-[18px] text-gs-ink/80">
            {t("practices.subheading")}
          </p>
        </header>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-12">
          {ITEMS.map((it, idx) => (
            <article key={it.key} className="text-left">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={it.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 28vw, (min-width:640px) 45vw, 100vw"
                  priority={idx === 0}
                />
              </div>

              {/* Título do card: Poppins 18px bold */}
              <h3 className="mt-4 font-sans text-[18px] font-bold text-gs-ink">
                {t(`practices.items.${it.key}.title`)}
              </h3>

              {/* Descrição do card: Poppins 14px */}
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-gs-ink/70">
                {t(`practices.items.${it.key}.desc`)}
              </p>

              <Link href={withLocale(it.href)} className="mt-4 inline-flex btn-gs-outline">
                {t("about.cta")}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 md:mt-12 flex justify-end">
          <Link
            href={withLocale("/competencias")}
            className="text-sm font-sans text-gs-ink/70 hover:text-gs-ink underline underline-offset-4"
          >
            {t("practices.more")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
