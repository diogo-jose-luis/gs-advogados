// src/data/competencias.ts
export type CompetenciaKey =
  | "fiscalAduaneiro"
  | "consumidor"
  | "civilComercial"
  | "cobranca"
  | "penal"
  | "administrativo"
  | "recursosNaturais"
  | "familia"
  | "medico"
  | "desporto"
  | "contenciosoAdministrativo"
  | "condominiarioImobiliario"
  | "societario"
  | "trabalhoSegSocial"
  | "financeiroBancario"
  | "sucessorio";

export type Competencia = {
  key: CompetenciaKey;
  img: string;   // /public/...
  href: string;  // rota se quiser manter (não iremos navegar agora)
};

export const COMPETENCIAS: Competencia[] = [
  { key: "fiscalAduaneiro", img: "/competencias/comp1.png", href: "/competencias/fiscal-aduaneiro" },
  { key: "consumidor", img: "/competencias/comp2.png", href: "/competencias/consumidor" },
  { key: "civilComercial", img: "/competencias/comp3.png", href: "/competencias/civil-comercial" },
  { key: "cobranca", img: "/competencias/comp4.png", href: "/competencias/cobranca" },
  { key: "penal", img: "/competencias/comp5.png", href: "/competencias/penal" },
  { key: "administrativo", img: "/competencias/comp6.png", href: "/competencias/administrativo" },
  { key: "recursosNaturais", img: "/competencias/recursos-naturais.png", href: "/competencias/recursos-naturais" },
  { key: "familia", img: "/competencias/familia.png", href: "/competencias/familia" },
  { key: "medico", img: "/competencias/medico.png", href: "/competencias/medico" },
  { key: "desporto", img: "/competencias/desporto.png", href: "/competencias/desporto" },
  { key: "contenciosoAdministrativo", img: "/competencias/contencioso-administrativo.png", href: "/competencias/contencioso-administrativo" },
  { key: "condominiarioImobiliario", img: "/competencias/condominiario-imobiliario.png", href: "/competencias/condominiario-imobiliario" },
  { key: "societario", img: "/competencias/societario.png", href: "/competencias/societario" },
  { key: "trabalhoSegSocial", img: "/competencias/trabalho-seguranca-social.png", href: "/competencias/trabalho-seguranca-social" },
  { key: "financeiroBancario", img: "/competencias/financeiro-bancario.png", href: "/competencias/financeiro-bancario" },
  { key: "sucessorio", img: "/competencias/sucessorio.png", href: "/competencias/sucessorio" },
];
