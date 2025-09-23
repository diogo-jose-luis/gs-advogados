"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import {useTranslations} from "next-intl";

const ITEMS = [
  { key: "publico",            image: "/areas/publico.png",            href: "/competencias/publico-administrativo" },
  { key: "civil",              image: "/areas/civil.png",              href: "/competencias/civil-comercial-consumidor" },
  { key: "energiaRecursos",    image: "/areas/energia.png",            href: "/competencias/energia-recursos-naturais" },
  { key: "familia",            image: "/areas/familia.png",            href: "/competencias/familia-sucessoes" },
  { key: "saude",              image: "/areas/saude.png",              href: "/competencias/saude-responsabilidade-medica" },
  { key: "laboralSegSocial",   image: "/areas/laboral.png",            href: "/competencias/laboral-seguranca-social" }
] as const;

export default function AreasPractices() {
  const t = useTranslations();

  return (
    <section className="py-14 md:py-20">
      <Container>
        <header className="text-center">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-none tracking-tight">
            {t("practices.heading")}
          </h2>
          <p className="mt-3 text-sm md:text-base text-gs-ink/70">
            {t("practices.subheading")}
          </p>
        </header>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-12">
          {ITEMS.map((it, idx) => (
            <article key={it.key} className="text-center">
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <Image
                  src={it.image}
                  alt=""
                  fill
                  className="object-cover"  // <- sem grayscale
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                  priority={idx === 0}
                />
              </div>

              <h3 className="mt-4 font-heading text-base md:text-lg tracking-wide">
                {t(`practices.items.${it.key}.title`)}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gs-ink/70">
                {t(`practices.items.${it.key}.desc`)}
              </p>

              <Link href="#" className="mt-4 inline-flex btn-gs-outline">
                {t("about.cta")}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 md:mt-12 flex justify-end">
          <Link href="/pt/competencias" className="text-sm text-gs-ink/70 hover:text-gs-ink underline underline-offset-4">
            {t("practices.more")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
