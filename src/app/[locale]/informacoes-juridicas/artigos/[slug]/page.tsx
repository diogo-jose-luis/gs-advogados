import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";

// mapeia slug -> itemKey + imagem + data + autor (translation key)
const MAP: Record<
  string,
  {
    itemKey: "a1" | "a2" | "a3" | "a4";
    image: string;
    dateISO: string;
    authorKey: string;
  }
> = {
  "forma-de-perceber-direito": {
    itemKey: "a1",
    image: "/legal/artigo-metodologia.jpg",
    dateISO: "2025-09-05",
    authorKey: "Mateus",
  },
  "regime-juridico-sociedades-unipessoais": {
    itemKey: "a2",
    image: "/legal/contencioso-cobranca.png",
    dateISO: "2025-09-05",
    authorKey: "Mateus",
  },
  "exclusao-de-socios-por-quotas": {
    itemKey: "a3",
    image: "/legal/fiscal-aduaneiro.png",
    dateISO: "2019-02-28",
    authorKey: "Mateus",
  },
  "responsabilidade-civil-medica-em-angola": {
    itemKey: "a4",
    image: "/legal/medico.png",
    dateISO: "2025-01-20",
    authorKey: "Mateus",
  },
};

type Props = { params: { locale: string; slug: string } };

export default async function SingleArticlePage({ params }: Props) {
  const article = MAP[params.slug];
  if (!article) return notFound();

  const t = await getTranslations("legalArticles");

  const titleKey = `items.${article.itemKey}.title`;
  const excerptKey = `items.${article.itemKey}.excerpt`;
  const bodyKey = `items.${article.itemKey}.body`;

  // meta
  const dateFmt = new Intl.DateTimeFormat(params.locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(article.dateISO));
  const author = t(`meta.authors.${article.authorKey}`);

  return (
    <>
      <StickyMenuGeral />
      <HeaderTopGeral />

      {/* Hero usa a imagem do artigo + título/descrição das traduções */}
      <PageHero
        image={article.image}
        ns="legalArticles"
        titleKey={titleKey}
        subtitleKey={excerptKey}
        heightClass="h-[38vh] md:h-[46vh]"
      />

      <main className="py-12 md:py-16">
        <div className="container-gs">
          {/* Meta */}
          <p className="text-sm text-gs-ink/70">
            {dateFmt} <span className="mx-1.5">•</span> {author}
          </p>

          {/* Corpo do artigo */}
          {/* Corpo do artigo */}
          <article className="prose prose-neutral max-w-none mt-4 md:mt-6">
            {(() => {
              const raw = t.raw(bodyKey); // unknown
              if (Array.isArray(raw)) {
                // assumindo array de strings no JSON
                return (raw as string[]).map((p, i) => <p key={i}>{p}</p>);
              }
              // fallback: força para string de forma segura
              return <p>{String(raw)}</p>;
            })()}
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
