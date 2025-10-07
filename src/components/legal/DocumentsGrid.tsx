"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type DocItem = {
  slug: string;
  key: string; // documentos.items.*
};

const ITEMS: DocItem[] = [
  { slug: "minuta-estatuto-sociedade-pluripessoais", key: "estatutoMinuta" },
  { slug: "estatuto-sociedade-pluripessoais",        key: "estatuto" },
  { slug: "minuta-carta-revogacao-mandato",          key: "revogacaoMandato" },
  { slug: "minuta-declaracao-bens",                  key: "declaracaoBens" },
];

export default function DocumentsGrid() {
  const t = useTranslations("documentos");
  const locale = useLocale();


  return (
    <section className="py-16 md:py-20">
      <div className="container-gs">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ slug, key }) => {
            const title   = t(`items.${key}.title`);
            const excerpt = t(`items.${key}.excerpt`);
            const pdfUrl  = t(`items.${key}.pdfUrl`);
            return (
              <article
                key={slug}
                className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]"
              >
                {/* faixa superior vermelha */}
                <div className="h-3 bg-gs-red" />
                <div className="p-6">
                  {/* badge + ícone */}
                  <div className="flex items-center gap-2 text-[12px] tracking-widest text-gs-ink/60 uppercase">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M7 3h7l4 4v14H7V3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t("badge")}
                  </div>

                  <h3 className="mt-2 font-heading text-[18px] leading-snug text-gs-ink">
                    <Link
                      href="#"
                      className="underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-gs-red/40 rounded"
                    >
                      {title.toLocaleUpperCase(locale)}
                    </Link>
                  </h3>

                  <p className="mt-3 font-sans text-[14px] leading-relaxed text-gs-gray">
                    {excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 rounded-md border border-gs-ink/10 px-3 py-2 text-sm text-gs-ink hover:shadow-md hover:border-gs-red/30 transition"
                    >
                      {t("more")}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>

                    {/* botão de download direto */}
                    {pdfUrl && pdfUrl.startsWith("http") && (
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-gs-red/20 bg-gs-red/5 px-3 py-2 text-sm text-gs-ink hover:bg-gs-red/10 transition"
                      >
                        {t("download")}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* ring hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-gs-red/30" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
