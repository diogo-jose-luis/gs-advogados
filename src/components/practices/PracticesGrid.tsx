"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

type ItemKey =
  | "fiscalAduaneiro"
  | "consumidor"
  | "civilComercial"
  | "cobranca"
  | "penal"
  | "administrativo"
  | "recursosNaturais"
  | "familia"
  | "medico"
  // novos
  | "desporto"
  | "contenciosoAdministrativo"
  | "condominiarioImobiliario"
  | "societario"
  | "trabalhoSegSocial"
  | "financeiroBancario"
  | "sucessorio";

type Item = { key: ItemKey; img: string };

const IMG: Record<ItemKey, string> = {
  fiscalAduaneiro: "/competencias/fiscal-aduaneiro.png",
  consumidor: "/competencias/consumidor.png",
  civilComercial: "/competencias/civil-comercial.png",
  cobranca: "/competencias/cobranca.jpeg",
  penal: "/competencias/penal.png",
  administrativo: "/competencias/administrativo.png",
  recursosNaturais: "/competencias/recursos-naturais.png",
  familia: "/competencias/familia.png",
  medico: "/competencias/medico.png",
  // novos (ponha as imagens com estes nomes)
  desporto: "/competencias/desporto.png",
  contenciosoAdministrativo: "/competencias/contencioso-administrativo.png",
  condominiarioImobiliario: "/competencias/condominiario-imobiliario.png",
  societario: "/competencias/societario.png",
  trabalhoSegSocial: "/competencias/trabalho-seguranca-social.png",
  financeiroBancario: "/competencias/financeiro-bancario.png",
  sucessorio: "/competencias/sucessorio.png",
};

const ITEMS: Item[] = (Object.keys(IMG) as ItemKey[]).map((k) => ({
  key: k,
  img: IMG[k],
}));

export default function PracticesGrid() {
  const t = useTranslations("competenciasPage.practices.grid");
  const locale = useLocale();

  return (
    <section className="py-16 md:py-20">
      <div className="container-gs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITEMS.map(({ key, img }) => {
            const title = t(`${key}.title`);
            const desc = t(`${key}.desc`);
            return (
              <article key={key} className="group space-y-4">
                <div className="relative aspect-[3/4] min-h-[380px] md:min-h-[440px] overflow-hidden rounded-xl">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width:1024px) 28vw, (min-width:640px) 42vw, 90vw"
                    priority={key === "fiscalAduaneiro"}
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-sans text-[13px] tracking-[0.25em] text-gs-ink/70 uppercase mb-1">
                    {title.toLocaleUpperCase(locale)}
                  </h3>
                  <p className="font-sans text-sm text-gs-gray leading-relaxed">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
