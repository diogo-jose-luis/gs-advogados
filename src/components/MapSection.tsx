"use client";

import { useTranslations } from "next-intl";

export default function MapSection() {
  const t = useTranslations("map");

  return (
    <section aria-labelledby="map-title" className="w-full">
      {/* faixa full-bleed do mapa */}
      <div className="relative w-full">
        <div className="h-[360px] md:h-[520px]">
          <iframe
            title={t("iframeTitle")}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7885.254133440601!2d13.230183!3d-8.821061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3a68f990245%3A0xdcac8907cfacdbad!2sGS-ADVOGADOS%2C%20RL!5e0!3m2!1sen!2sao!4v1758587992328!5m2!1sen!2sao"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          />
        </div>

        {/* cartaozinho com morada/CTA (opcional) */}
        <div className="absolute left-4 bottom-4">
          <div className="bg-white/95 backdrop-blur px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
            <p className="text-sm text-gs-ink/70">{t("address.label")}</p>
            <p className="font-sans font-semibold">{t("address.line1")}</p>
            <p className="font-sans">{t("address.line2")}</p>
            <a
              href={t("directionsHref")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex btn-gs-sm"
            >
              {t("directions")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
