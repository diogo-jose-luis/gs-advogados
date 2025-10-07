"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type Orientacao = {
  slug: string;
  titleKey: string;   // orientacoesPraticas.items.*
  excerptKey: string; // orientacoesPraticas.items.*
};

const ITEMS: Orientacao[] = [
  { slug: "dissolucao-de-sociedade-comercial", titleKey: "dissolucao.title", excerptKey: "dissolucao.excerpt" },
  { slug: "habilitacao-de-herdeiros",          titleKey: "habilitacao.title", excerptKey: "habilitacao.excerpt" },
  { slug: "constituicao-de-sociedade",         titleKey: "constituicaoSC.title", excerptKey: "constituicaoSC.excerpt" },
  { slug: "constituicao-de-associacao",        titleKey: "constituicaoAssoc.title", excerptKey: "constituicaoAssoc.excerpt" },
  { slug: "compra-venda-doacao-dacao",         titleKey: "compraVenda.title", excerptKey: "compraVenda.excerpt" },
  { slug: "arrendamento-fins-comerciais",      titleKey: "arrendamentoCom.title", excerptKey: "arrendamentoCom.excerpt" },

  // 🔽 novos 3
  { slug: "registo-de-nome-e-insignia",        titleKey: "registroNomeInsignia.title", excerptKey: "registroNomeInsignia.excerpt" },
  { slug: "breve-nota-inspecao-de-trabalho",   titleKey: "notaInspecaoTrabalho.title", excerptKey: "notaInspecaoTrabalho.excerpt" },
  { slug: "licenca-industrial-documentos",     titleKey: "documentosLicencaIndustrial.title", excerptKey: "documentosLicencaIndustrial.excerpt" },
];


export default function OrientacoesGrid() {
  const t = useTranslations("orientacoesPraticas");
  const locale = useLocale();

 

  return (
    <section className="py-16 md:py-20">
      <div className="container-gs">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => {
            const title = t(`items.${it.titleKey}`);
            const excerpt = t(`items.${it.excerptKey}`);

            return (
              <article
                key={it.slug}
                className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]"
              >
                {/* Faixa superior vermelha */}
                <div className="h-3 bg-gs-red" />

                <div className="p-6">
                  {/* Etiqueta */}
                  <div className="text-[12px] tracking-widest text-gs-ink/60 uppercase">
                    {t("badge")}
                  </div>

                  {/* Título */}
                  <h3 className="mt-2 font-heading text-[18px] leading-snug text-gs-ink">
                    <Link
                      href="#"
                      className="underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-gs-red/40 rounded"
                    >
                      {title.toLocaleUpperCase(locale)}
                    </Link>
                  </h3>

                  {/* Excerto */}
                  <p className="mt-3 font-sans text-[14px] leading-relaxed text-gs-gray">
                    {excerpt}
                  </p>

                  {/* CTA */}
                  <div className="mt-5">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 rounded-md border border-gs-ink/10 px-3 py-2 text-sm text-gs-ink hover:shadow-md hover:border-gs-red/30 transition"
                    >
                      {t("more")}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* realce ao hover */}
                <div className="pointer-events-none inset-0 absolute rounded-2xl ring-1 ring-transparent group-hover:ring-gs-red/30 transition" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
