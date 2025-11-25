"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useLocale } from "next-intl";

type CaseItem = {
  slug: string;
  image: string;
  title: string;
  desc: string;
};

const CASES: CaseItem[] = [
  {
    slug: "arbitragem-internacional",
    image: "/cases/arbitragem.png", // substituir depois
    title: "Arbitragem Internacional no Sector das Infraestruturas",
    desc:
      "A GS Advogados representou uma entidade estrangeira do sector da construção numa arbitragem Ad-hoc em Luanda, relacionada a um contrato de execução de obras."
  },
  {
    slug: "estruturacao-investimento",
    image: "/cases/energia.png",
    title: "Estruturação de Investimento Estrangeiro em Energia",
    desc:
      "Assessorámos um grupo internacional na estruturação de um projecto de energias renováveis em Angola, incluindo a criação de uma joint venture local e a negociação com autoridades regulatórias."
  },
  {
    slug: "reestruturacao-grupo-familiar",
    image: "/cases/grupo-familiar.png",
    title: "Reestruturação de Grupo Empresarial Familiar",
    desc:
      "A GS Advogados apoiou um grupo familiar com operações diversificadas na redefinição da sua estrutura societária e mecanismos de governance."
  },
  {
    slug: "consultoria-imobiliario",
    image: "/cases/imobiliario.png",
    title: "Consultoria e Contencioso Imobiliário",
    desc:
      "Representámos uma sociedade promotora em processo de legalização e defesa judicial de propriedades urbanas em Luanda."
  },
  {
    slug: "direito-laboral",
    image: "/cases/laboral.png",
    title: "Direito Laboral e Relações de Trabalho",
    desc:
      "A GS Advogados assessorou uma empresa multinacional no processo de reestruturação laboral complexa envolvendo múltiplos trabalhadores e negociações com entidades sindicais."
  },
  {
    slug: "compliance-prevencao",
    image: "/cases/compliance.png",
    title: "Compliance e Prevenção de Branqueamento de Capitais ",
    desc:
      "Apoiámos uma instituição financeira nacional na criação e implementação de políticas de compliance e integridade corporativa."
  }
];

export default function RecentCases() {
 
  const locale = useLocale();
  const prefix = locale ? `/${locale}` : "";
  const withLocale = (p: string) => `${prefix}${p}`;

  return (
    <section className="py-14 md:py-20 bg-[#f9f9f9]">
      <Container>
        {/* HEADER */}
        <header className="mb-10 text-left">
          <h2 className="font-poppins font-semibold text-[40px] leading-tight text-gs-ink">
            Nossos Casos de Estudo
          </h2>

          <p className="mt-3 max-w-3xl font-poppins font-extralight text-[17px] text-gs-ink/80">
            Exemplos que refletem a experiência da GS Advogados em enfrentar
            desafios jurídicos complexos com rigor, ética e visão internacional.
          </p>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {CASES.map((c, i) => (
            <article
              key={c.slug}
              className="bg-white rounded-xl shadow-[0_4px_18px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              <Link href="#" className="block group">
                {/* IMAGEM */}
                <div className="relative h-48 w-full">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>

                {/* CONTEÚDO */}
                <div className="p-5">
                  <h3 className="font-poppins text-[20px] font-semibold text-[#B41E0B] mb-2">
                    {c.title}
                  </h3>

                  <p className="font-poppins text-[14px] font-light text-[#141414] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* VER TODOS */}
        <div className="mt-10 flex justify-end">
          <Link
            href={withLocale("/casos")}
            className="font-poppins text-sm underline underline-offset-4 text-gs-ink/70 hover:text-gs-ink"
          >
            Ver todos
          </Link>
        </div>
      </Container>
    </section>
  );
}
