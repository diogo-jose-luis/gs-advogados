"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useTranslations, useLocale } from "next-intl";

type CaseItem = {
  slug: string;
  image: string;
  titleKey: string;
};

const CASES: CaseItem[] = [
  { slug: "violencia-familiar", image: "/cases/reducao.png",     titleKey: "case1" },
  { slug: "milhoes-ganham-asas-e-voam", image: "/cases/licenciamento.png", titleKey: "case2" },
  { slug: "seguro-acidente-automovel", image: "/cases/iluminacao.png", titleKey: "case3" }
];

export default function RecentCases() {
  const t = useTranslations("cases");
  const locale = useLocale();
  const prefix = locale ? `/${locale}` : "";
  const withLocale = (p: string) => `${prefix}${p === "/" ? "" : p}`;

  return (
    <section className="py-14 md:py-20 bg-[radial-gradient(1200px_600px_at_70%_0%,rgba(0,0,0,0.04),transparent)]">
      <Container>
        {/* Cabeçalho (alinhado à esquerda, tipografia pedida) */}
        <header className="mb-8 md:mb-12 text-left">
          <h2 className="mt-1 font-heading text-[44px] md:text-[96px] leading-none tracking-tight text-gs-ink">
            {t("heading")}
          </h2>
          <p className="mt-3 font-sans text-[16px] md:text-[18px] text-gs-ink/80">
            {t("kicker")}
          </p>
        </header>

        {/* Grelha de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CASES.map((c, i) => (
            <article
              key={c.slug}
              className="rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-transform hover:-translate-y-0.5"
            >
              <Link
                href={withLocale(`/casos/${c.slug}`)}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-gs-red"
              >
                <div className="relative h-52 md:h-56">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    priority={i === 0}
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  {/* Título do card: Poppins 18px bold */}
                  <h3 className="font-sans text-[18px] font-bold text-gs-ink">
                    {t(`items.${c.titleKey}`)}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Link “ver todos” */}
        <div className="mt-8 flex justify-end">
          <Link
            href={withLocale("/casos")}
            className="font-sans text-sm underline underline-offset-4 text-gs-ink/70 hover:text-gs-ink"
          >
            {t("more")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
