"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

type Episode = {
  id: string; // YouTube video id
  titleKey: string; // i18n key em podcast.items.*
  descKey: string; // i18n key em podcast.items.*
  thumb?: string; // opcional: thumbnail custom; por padrão usa i.ytimg
};

const EPISODES: Episode[] = [
  { id: "bzRFhrWJaNw", titleKey: "ep01.title", descKey: "ep01.desc" },
  { id: "GIpQLG6G3Xc", titleKey: "ep02.title", descKey: "ep02.desc" },
  { id: "x37pvXyI-kQ", titleKey: "ep1.title", descKey: "ep1.desc" },
  { id: "O-_il0LShR0", titleKey: "ep2.title", descKey: "ep2.desc" },
  { id: "WgXw39nTlvw", titleKey: "ep3.title", descKey: "ep3.desc" },
];

export default function PodcastList({
  channelUrl = "https://www.youtube.com/@NoqueTangePodcast",
}: {
  channelUrl?: string;
}) {
  const t = useTranslations("podcastPage");

  if (!EPISODES.length) return null;

  const [featured, ...rest] = EPISODES;

  const getThumb = (ep: Episode) =>
    ep.thumb ?? `https://i.ytimg.com/vi/${ep.id}/hqdefault.jpg`;

  const featuredTitle = t(`items.${featured.titleKey}`);
  const featuredDesc = t(`items.${featured.descKey}`);
  const featuredThumb = getThumb(featured);

  return (
    <section className="container-gs py-16 md:py-20">
      {/* HERO DO PODCAST (episódio em destaque) */}
      <article className="grid gap-8 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] items-center mb-14 md:mb-16">
        {/* Card grande com imagem + play */}
        <Link
          href={`https://www.youtube.com/watch?v=${featured.id}`}
          target="_blank"
          className="group block relative overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-white"
        >
          <div className="relative w-full aspect-[16/9]">
            <img
              src={featuredThumb}
              alt={featuredTitle}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Play central */}
          <span className="absolute inset-0 grid place-content-center">
            <span className="grid h-16 w-16 place-content-center rounded-full bg-white shadow-lg transition group-hover:scale-105">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#B21F12"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="#B21F12"
                  strokeWidth="2"
                  fill="white"
                />
                <path d="M10 8l6 4-6 4V8z" />
              </svg>
            </span>
          </span>
        </Link>

        {/* Texto à direita */}
        <div className="space-y-3">
          <p className="text-xs md:text-sm font-poppins tracking-[0.18em] uppercase text-gray-500">
            {t("kicker") ?? "No Que Tange Podcast"}
          </p>

          <h2 className="font-poppins font-semibold text-[20px] md:text-[24px] leading-snug text-black">
            {featuredTitle}
          </h2>

          <p className="text-sm md:text-[14px] text-gray-700 leading-relaxed">
            {featuredDesc}
          </p>

          <p className="pt-2 text-sm font-semibold text-[#B21F12]">
            {t("newEpisode") || "Novo episódio"}
          </p>
        </div>
      </article>

      {/* LINHA DE SEPARAÇÃO */}
      <div className="border-t border-gray-200 mb-10" />

      {/* GRELHA DE EPISÓDIOS (layout inferior do Figma) */}
      {rest.length > 0 && (
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((ep) => {
            const title = t(`items.${ep.titleKey}`);
            const desc = t(`items.${ep.descKey}`);
            const thumb = getThumb(ep);

            return (
              <article
                key={ep.id}
                className="bg-white rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <Link
                  href={`https://www.youtube.com/watch?v=${ep.id}`}
                  target="_blank"
                  className="block"
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <img
                      src={thumb}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                </Link>

                <div className="px-4 py-3">
                  <h3 className="font-poppins font-semibold text-[13px] md:text-[14px] leading-snug text-black">
                    {title}
                  </h3>
                  <p className="mt-1 text-[11px] md:text-[12px] text-gray-600 line-clamp-2">
                    {desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* CTA para o canal */}
      {/* CTA para o canal */}
      <div className="mt-12 flex justify-center">
        <Link
          href={channelUrl} // 🔹 usar a prop aqui
          target="_blank"
          className="btn-gs rounded-full px-6 py-2"
        >
          {t("more")}
        </Link>
      </div>
    </section>
  );
}
