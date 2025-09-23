"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

type Article = {
  slug: string;
  img: string;
  titleKey: string;   // legalArticles.items.*
  excerptKey: string; // legalArticles.items.*
  dateISO: string;    // YYYY-MM-DD
  authorKey: string;  // legalArticles.meta.authors.*
};

const ITEMS: Article[] = [
  {
    slug: "forma-de-perceber-direito",
    img: "/legal/artigo-metodologia.jpg",
    titleKey: "a1.title",
    excerptKey: "a1.excerpt",
    dateISO: "2025-09-05",
    authorKey: "diogo",
  },
  {
    slug: "regime-juridico-sociedades-unipessoais",
    img: "/legal/contencioso-cobranca.png",
    titleKey: "a2.title",
    excerptKey: "a2.excerpt",
    dateISO: "2025-09-05",
    authorKey: "diogo",
  },
  {
    slug: "exclusao-de-socios-por-quotas",
    img: "/legal/fiscal-aduaneiro.png",
    titleKey: "a3.title",
    excerptKey: "a3.excerpt",
    dateISO: "2019-02-28",
    authorKey: "diogo",
  },
];

export default function ArticlesGrid() {
  const t = useTranslations("legalArticles");
  const locale = useLocale();

  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat(locale, { day: "2-digit", month: "long", year: "numeric" })
      .format(new Date(iso));

  return (
    <section className="py-16 md:py-20">
      <div className="container-gs">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((a, i) => {
            const title = t(`items.${a.titleKey}`);
            const excerpt = t(`items.${a.excerptKey}`);
            const author = t(`meta.authors.${a.authorKey}`);
            return (
              <article
                key={a.slug}
                className="group"
              >
                {/* Imagem */}
                <Link
                  href={`/informacoes-juridicas/artigos/${a.slug}`}
                  className="block relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <Image
                    src={a.img}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                    priority={i === 0}
                  />
                </Link>

                {/* Conteúdo */}
                <div className="mt-5">
                  <h3 className="font-heading text-xl md:text-2xl text-gs-ink leading-snug">
                    <Link
                      href={`/informacoes-juridicas/artigos/${a.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {title.toLocaleUpperCase(locale)}
                    </Link>
                  </h3>

                  <p className="mt-3 font-sans text-gs-gray leading-relaxed line-clamp-4">
                    {excerpt}
                  </p>

                  <p className="mt-4 text-sm text-gs-gray/80">
                    {fmtDate(a.dateISO)} <span className="mx-1.5">•</span> {author}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
