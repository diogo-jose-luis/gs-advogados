"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  /** Passe o texto pronto OU use titleKey+ns */
  title?: string;
  subtitle?: string;
  /** Opcional: chaves de tradução (usam o namespace ns) */
  titleKey?: string;
  subtitleKey?: string;
  /** Namespace de tradução, ex.: "competenciasPage" */
  ns?: string;

  image: string;                 // /public/...
  className?: string;
  heightClass?: string;          // ex.: "h-[36vh] md:h-[42vh]"
};

export default function PageHero({
  title,
  subtitle,
  titleKey,
  subtitleKey,
  ns,
  image,
  className = "",
  heightClass = "h-[36vh] md:h-[42vh]"
}: Props) {
  const t = useTranslations(ns || "");
  const resolvedTitle =
    titleKey ? (ns ? t(titleKey) : titleKey) : (title ?? "");
  const resolvedSubtitle =
    subtitleKey ? (ns ? t(subtitleKey) : subtitleKey) : (subtitle ?? "");

  // animação de entrada
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className={`relative ${heightClass} ${className}`}>
      {/* imagem + leve clareamento */}
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover brightness-110"
        sizes="100vw"
      />
      {/* overlay 70% transparente (30% opacidade) */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center">
        <div
          className={[
            "container-gs transition-all duration-500 will-change-transform",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          ].join(" ")}
        >
          <h1 className="font-heading text-4xl md:text-5xl text-white tracking-tight">
            {resolvedTitle}
          </h1>

          {resolvedSubtitle && (
            <p
              className={[
                "mt-3 max-w-2xl text-gs-red/90 transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              ].join(" ")}
              style={{ transitionDelay: "80ms" }}
            >
              {resolvedSubtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
