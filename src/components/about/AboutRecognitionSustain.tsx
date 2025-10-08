"use client";

import { useTranslations } from "next-intl";
import { Award, Leaf } from "lucide-react";
import Container from "../Container";

export default function AboutRecognitionSustain({
  invert = false,
}: { invert?: boolean }) {
  const t = useTranslations("aboutPage.recogSustain");

  return (
    <section className="py-14 md:py-20 bg-[radial-gradient(1200px_600px_at_70%_0%,rgba(0,0,0,0.04),transparent)]">
      <Container>
        <div className={`grid gap-10 lg:grid-cols-2 ${invert ? "" : ""}`}>
          {/* Texto principal */}
          <div className={invert ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
            <p className="mb-2 font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-gs-ink/70">
              {t("kicker")}
            </p>

            <h2 className="font-heading text-5xl md:text-7xl leading-none tracking-tight text-gs-ink">
              {t("heading")}
            </h2>

            <div className="mt-6 max-w-2xl space-y-5 font-sans text-base md:text-lg leading-relaxed text-gs-ink/80">
              <p>{t("intro")}</p>
            </div>
          </div>

          {/* Cards */}
          <div className={invert ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
            <div className="grid gap-6">
              {/* Reconhecimento */}
              <article className="rounded-xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg border border-gs-red/80">
                  <Award className="h-5 w-5 text-gs-red" aria-hidden />
                </div>
                <h3 className="font-heading text-[28px] md:text-[32px] leading-tight text-gs-ink mb-2">
                  {t("recognition.title")}
                </h3>
                <p className="font-sans text-base md:text-lg leading-relaxed text-gs-ink/80">
                  {t("recognition.body")}
                </p>
              </article>

              {/* Sustentabilidade */}
              <article className="rounded-xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg border border-gs-red/80">
                  <Leaf className="h-5 w-5 text-gs-red" aria-hidden />
                </div>
                <h3 className="font-heading text-[28px] md:text-[32px] leading-tight text-gs-ink mb-2">
                  {t("sustainability.title")}
                </h3>
                <p className="font-sans text-base md:text-lg leading-relaxed text-gs-ink/80">
                  {t("sustainability.body")}
                </p>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
