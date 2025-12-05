// src/components/legal/ArticlesGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { ARTICLES as ITEMS } from "@/data/articles"; // <<— AQUI

export default function ArticlesGrid() {
  const t = useTranslations("legalArticles");
  const locale = useLocale();

  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));

  const hrefFor = (slug: string) =>
    `/${locale}/informacoes-juridicas/artigos/${slug}`;

  // destaque = primeiro item
  const [featured, ...rest] = ITEMS;

  return (
    <section className="py-16 md:py-20">
      <div className="container-gs">
        {/* INTRO */}
        <p className="mb-10 max-w-3xl font-sans text-[15px] leading-relaxed text-gs-gray">
          {t("intro")}
        </p>

        {/* FEATURED */}
        {featured && (
          <article className="group relative mb-12 grid overflow-hidden rounded-2xl bg-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 md:grid-cols-5">
            <div className="relative aspect-[16/10] w-full md:col-span-3 md:aspect-auto md:h-[360px]">
              <Image
                src={featured.img}
                alt=""
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width:1024px) 60vw, 100vw"
              />
              {/* overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 md:col-span-2 flex items-center">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-white/90 md:text-gs-gray">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 backdrop-blur md:bg-gs-ink/5 md:text-gs-gray">
                    {fmtDate(featured.dateISO)}
                  </span>
                  <span className="hidden md:inline">•</span>
                  <span className="hidden md:inline">
                    {t(`meta.authors.${featured.authorKey}`)}
                  </span>
                </div>

                <h3 className="mt-3 font-heading text-2xl md:text-3xl leading-snug text-white drop-shadow md:text-gs-ink md:drop-shadow-none">
                  <Link
                    href={hrefFor(featured.slug)}
                    className="underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-gs-red/50 rounded"
                  >
                    {t(`items.${featured.titleKey}`).toLocaleUpperCase(locale)}
                  </Link>
                </h3>

                <p className="mt-3 hidden font-sans text-white/90 leading-relaxed md:block md:text-gs-gray">
                  {t(`items.${featured.excerptKey}`)}
                </p>

                <div className="mt-5">
                  <Link
                    href={hrefFor(featured.slug)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-white backdrop-blur transition md:border-gs-ink/10 md:bg-white md:text-gs-ink hover:shadow-lg"
                  >
                    {t("more", { default: "Ler artigo" })}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="-mr-0.5"
                    >
                      <path
                        d="M7 17L17 7M17 7H9M17 7v8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* borda/efeito ao hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition group-hover:ring-gs-red/40 md:ring-black/5" />
          </article>
        )}

        {/* LISTA */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => {
            const title = t(`items.${a.titleKey}`);
            const excerpt = t(`items.${a.excerptKey}`);
            const author = t(`meta.authors.${a.authorKey}`);

            return (
              <article
                key={a.slug}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]"
              >
                <Link href={hrefFor(a.slug)} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={a.img}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                      priority={i === 0}
                    />
                    {/* canto com pill de data */}
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gs-ink shadow">
                      {fmtDate(a.dateISO)}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading text-xl text-gs-ink leading-snug">
                      <span className="underline-offset-4 group-hover:underline">
                        {title.toLocaleUpperCase(locale)}
                      </span>
                    </h3>

                    <p className="mt-3 font-sans text-gs-gray leading-relaxed line-clamp-3">
                      {excerpt}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      {/* Author chip com iniciais */}
                      <div className="flex items-center gap-3 text-sm text-gs-gray/90">
                        <div className="grid h-8 w-8 place-items-center rounded-full bg-gs-ink/5 ring-1 ring-gs-ink/10">
                          {/* iniciais do autor */}
                          <span className="font-sans text-[11px] tracking-wide">
                            {author
                              .split(" ")
                              .slice(0, 2)
                              .map((w) => w[0]?.toUpperCase())
                              .join("")}
                          </span>
                        </div>
                        <span className="truncate max-w-[160px]">{author}</span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-sm text-gs-ink/70">
                        {t("more", { default: "Ler" })}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="transition -mr-0.5 group-hover:translate-x-0.5"
                        >
                          <path
                            d="M7 17L17 7M17 7H9M17 7v8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>

                {/* ring ativo no hover/focus */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-gs-red/30" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
