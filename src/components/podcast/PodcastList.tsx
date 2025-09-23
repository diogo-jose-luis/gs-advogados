"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

type Episode = {
  id: string;            // YouTube video id
  titleKey: string;      // i18n key em podcast.items.*
  descKey: string;       // i18n key em podcast.items.*
  thumb?: string;        // opcional: thumbnail custom; por padrão usa i.ytimg
};

const EPISODES: Episode[] = [
  { id: "x37pvXyI-kQ", titleKey: "ep1.title", descKey: "ep1.desc" },
  { id: "O-_il0LShR0", titleKey: "ep2.title", descKey: "ep2.desc" },
  { id: "WgXw39nTlvw", titleKey: "ep3.title", descKey: "ep3.desc" },
];

export default function PodcastList({
  channelUrl = "https://www.youtube.com/@NoqueTangePodcast", // <-- coloca o URL do teu canal
}: { channelUrl?: string }) {
  const t = useTranslations("podcastPage");

  return (
    <section className="container-gs py-16 md:py-20">
      <div className="space-y-14">
        {EPISODES.map((ep, i) => {
          const title = t(`items.${ep.titleKey}`);
          const desc = t(`items.${ep.descKey}`);
          // thumb default do YouTube (não precisa configurar Next/Image)
          const thumb = ep.thumb ?? `https://i.ytimg.com/vi/${ep.id}/hqdefault.jpg`;

          return (
            <article
              key={ep.id}
              className="grid gap-6 md:grid-cols-2 items-start border-b pb-10 last:border-0"
            >
              {/* Texto */}
              <div>
                <h3 className="font-heading text-2xl md:text-[26px] text-gs-ink mb-3">
                  {title}
                </h3>
                <p className="font-sans text-gs-gray leading-relaxed">
                  {desc}
                </p>

                <div className="mt-4">
                  <Link
                    href={`https://www.youtube.com/watch?v=${ep.id}`}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-gs-red"
                  >
                    {t("watch")} →
                  </Link>
                </div>
              </div>

              {/* Thumb (direita) */}
              <div className="relative">
                <Link
                  href={`https://www.youtube.com/watch?v=${ep.id}`}
                  target="_blank"
                  className="group block relative overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  {/* img normal para evitar config de domínio no next/image */}
                  <img
                    src={thumb}
                    alt={title}
                    className="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  {/* play overlay */}
                  <span className="absolute inset-0 grid place-content-center">
                    <span className="grid h-14 w-14 place-content-center rounded-full bg-black/30 backdrop-blur-sm transition group-hover:bg-black/40">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA canal */}
      <div className="mt-12 flex justify-center">
        <Link
          href={channelUrl}
          target="_blank"
          className="btn-gs rounded-full px-6 py-2"
        >
          {t("more")}
        </Link>
      </div>
    </section>
  );
}
