export type CompetenciaKey =
  | "societarioComercial"
  | "trabalhoSegurancaSocial"
  | "financeiroBancario"
  | "familiaSucessorio"
  | "civilImobiliario"
  | "administrativoPPP"
  | "fiscalAduaneiro"
  | "arbitragem"
  | "penalEconomico"
  | "consumidor"
  | "medico"
  | "investimentoPrivadoEstrangeiro"
  | "recursosNaturais"
  | "desporto"
  | "propriedadeIntelectual";

export type Competencia = {
  key: CompetenciaKey;
  img: string;   // caminho na pasta /public/competencias
  href: string;  // rota futura (mesmo que ainda não exista página)
};

export const COMPETENCIAS: Competencia[] = [
  {
    key: "societarioComercial",
    img: "/competencias/Rectangle 16.png",
    href: "/competencias/societario-comercial",
  },
  {
    key: "trabalhoSegurancaSocial",
    img: "/competencias/trabalho-seguranca-social.png",
    href: "/competencias/trabalho-seguranca-social",
  },
  {
    key: "financeiroBancario",
    img: "/competencias/comp3.png",
    href: "/competencias/financeiro-bancario",
  },
  {
    key: "familiaSucessorio",
    img: "/competencias/comp4.png",
    href: "/competencias/familia-sucessorio",
  },
  {
    key: "civilImobiliario",
    img: "/competencias/comp5.png",
    href: "/competencias/civil-imobiliario",
  },
  {
    key: "administrativoPPP",
    img: "/competencias/Rectangle 21.png",
    href: "/competencias/administrativo-ppp",
  },
  {
    key: "fiscalAduaneiro",
    img: "/competencias/Rectangle 22.png",
    href: "/competencias/fiscal-aduaneiro",
  },
  {
    key: "arbitragem",
    img: "/competencias/comp6.png",
    href: "/competencias/arbitragem",
  },
  {
    key: "penalEconomico",
    img: "/competencias/Rectangle 24.png",
    href: "/competencias/penal-economico",
  },
  {
    key: "consumidor",
    img: "/competencias/consumidor.png",
    href: "/competencias/consumidor",
  },
  {
    key: "medico",
    img: "/competencias/Rectangle 25.png",
    href: "/competencias/medico",
  },
  {
    key: "investimentoPrivadoEstrangeiro",
    img: "/competencias/Rectangle 26.png",
    href: "/competencias/investimento-privado-estrangeiro",
  },
  {
    key: "recursosNaturais",
    img: "/competencias/Rectangle 28.png",
    href: "/competencias/recursos-naturais",
  },
  {
    key: "desporto",
    img: "/competencias/desporto2.png",
    href: "/competencias/desporto",
  },
  {
    key: "propriedadeIntelectual",
    img: "/competencias/intelectual.png",
    href: "/competencias/propriedade-intelectual",
  },
];
