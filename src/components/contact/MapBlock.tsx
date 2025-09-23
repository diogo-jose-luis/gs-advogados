"use client";

import { useTranslations } from "next-intl";

export default function MapBlock() {
  const t = useTranslations("map");
  return (
    <section className="py-14 md:py-20 bg-[radial-gradient(1200px_600px_at_70%_0%,rgba(0,0,0,0.03),transparent)]">
      <div className="container-gs">
        <header className="mb-6">
          <h2 className="font-heading text-3xl md:text-4xl">{t("heading")}</h2>
          <p className="text-sm text-gs-gray mt-1">{t("lede")}</p>
        </header>

        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.google.com/maps?q=GS%20Advogados%20Luanda&output=embed"
            title={t("iframeTitle")}
            loading="lazy"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="font-sans text-sm">
            <div className="text-gs-ink font-medium">{t("address.label")}</div>
            <div className="text-gs-gray">{t("address.line1")}</div>
            <div className="text-gs-gray">{t("address.line2")}</div>
          </div>
          <a
            href={t("directionsHref")}
            target="_blank"
            className="btn-gs"
          >
            {t("directions")}
          </a>
        </div>
      </div>
    </section>
  );
}
