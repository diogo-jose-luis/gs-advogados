"use client";

import { useTranslations } from "next-intl";
import { Award, Leaf } from "lucide-react";

export default function AboutRecognitionSustain({
  invert = false, // se quiser inverter as colunas em alguma página
}: { invert?: boolean }) {
  const t = useTranslations("aboutPage.recogSustain");

  return (
    <section className="py-16 lg:py-24 bg-[radial-gradient(1200px_600px_at_70%_0%,rgba(0,0,0,0.04),transparent)]">
      <div className="container-gs grid gap-10 lg:grid-cols-2">
        {/* Texto principal */}
        <div className={invert ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
          <p className="mb-2 text-sm tracking-[0.2em] text-gs-gray">
            {t("kicker")}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-gs-ink">
            {t("heading")}
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed font-sans text-gs-gray">
            <p>{t("intro")}</p>
          </div>
        </div>

        {/* Cards */}
        <div className={invert ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
          <div className="grid gap-6">
            {/* Reconhecimento */}
            <article className="rounded-none border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="mb-4 inline-flex size-11 items-center justify-center border border-gs-red">
                <Award className="h-5 w-5 text-gs-red" aria-hidden />
              </div>
              <h3 className="font-heading text-2xl text-gs-ink mb-2">
                {t("recognition.title")}
              </h3>
              <p className="font-sans text-gs-gray leading-relaxed">
                {t("recognition.body")}
              </p>
            </article>

            {/* Sustentabilidade */}
            <article className="rounded-none border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="mb-4 inline-flex size-11 items-center justify-center border border-gs-red">
                <Leaf className="h-5 w-5 text-gs-red" aria-hidden />
              </div>
              <h3 className="font-heading text-2xl text-gs-ink mb-2">
                {t("sustainability.title")}
              </h3>
              <p className="font-sans text-gs-gray leading-relaxed">
                {t("sustainability.body")}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
