// src/data/articles.ts
export type Article = {
  slug: string;
  img: string;
  titleKey: string;   // legalArticles.items.*
  excerptKey: string; // legalArticles.items.*
  dateISO: string;    // YYYY-MM-DD
  authorKey: string;  // legalArticles.meta.authors.*
};

export const ARTICLES: Article[] = [
  {
    slug: "forma-de-perceber-direito",
    img: "/legal/artigo-metodologia.jpg",
    titleKey: "a1.title",
    excerptKey: "a1.excerpt",
    dateISO: "2025-09-05",
    authorKey: "Mateus",
  },
  {
    slug: "regime-juridico-sociedades-unipessoais",
    img: "/legal/contencioso-cobranca.png",
    titleKey: "a2.title",
    excerptKey: "a2.excerpt",
    dateISO: "2025-09-05",
    authorKey: "Mateus",
  },
  {
    slug: "exclusao-de-socios-por-quotas",
    img: "/legal/fiscal-aduaneiro.png",
    titleKey: "a3.title",
    excerptKey: "a3.excerpt",
    dateISO: "2019-02-28",
    authorKey: "Mateus",
  },
  {
    slug: "responsabilidade-civil-medica-em-angola",
    img: "/legal/medico.png",
    titleKey: "a4.title",
    excerptKey: "a4.excerpt",
    dateISO: "2025-01-20",
    authorKey: "Mateus",
  },
];
