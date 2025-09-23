"use client";

import { useTranslations } from "next-intl";

type SectorKey =
  | "comercialSocietario"
  | "laboralSegSocial"
  | "fiscalAduaneiro"
  | "civilContratos"
  | "penalContraordenacional"
  | "administrativoRegulatorio"
  | "imobiliarioUrbanistico"
  | "familiaSucessoes"
  | "arbitragemRal"
  | "propriedadeIntelectualTec";

const KEYS: SectorKey[] = [
  "comercialSocietario",
  "laboralSegSocial",
  "fiscalAduaneiro",
  "civilContratos",
  "penalContraordenacional",
  "administrativoRegulatorio",
  "imobiliarioUrbanistico",
  "familiaSucessoes",
  "arbitragemRal",
  "propriedadeIntelectualTec",
];

export default function SectorsGrid() {
  const t = useTranslations("competenciasSetores.grid");

  return (
    <section className="py-16 md:py-20">
      <div className="container-gs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {KEYS.map((k) => (
            <article
              key={k}
              className="
                group relative rounded-xl border border-gray-200 bg-white
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                transition-transform hover:-translate-y-0.5
                focus-within:-translate-y-0.5
              "
            >
              {/* barra vermelha fina no topo */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gs-red" />

              <div className="p-6">
                <h3 className="font-heading text-xl md:text-[22px] text-gs-ink mb-2">
                  {t(`${k}.title`)}
                </h3>
                <p className="font-sans text-sm text-gs-gray leading-relaxed">
                  {t(`${k}.desc`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
