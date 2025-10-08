"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import clsx from "clsx";

/** Props comuns */
type BaseProps = {
  image: string;
  className?: string;
  heightClass?: string; // ex.: "h-[36vh] md:h-[42vh]"
};

/** Modo A (ns + keys) */
type KeyModeProps = BaseProps & {
  ns: string;
  titleKey: string;
  subtitleKey?: string;
  title?: never;
  subtitle?: never;
};

/** Modo B (texto direto) */
type DirectModeProps = BaseProps & {
  title: string;
  subtitle?: string;
  ns?: never;
  titleKey?: never;
  subtitleKey?: never;
};

export type PageHeroProps = KeyModeProps | DirectModeProps;

/** ✅ Type predicate sem `any` */
function hasNs(p: PageHeroProps): p is KeyModeProps {
  return "ns" in p && typeof p.ns === "string";
}

/* ---------- Wrapper sem hooks ---------- */
export default function PageHero(props: PageHeroProps) {
  if (hasNs(props)) {
    const { ns, titleKey, subtitleKey, image, className, heightClass } = props;
    return (
      <PageHeroWithKeys
        ns={ns}
        titleKey={titleKey}
        subtitleKey={subtitleKey}
        image={image}
        className={className}
        heightClass={heightClass}
      />
    );
  }

  const { title, subtitle, image, className, heightClass } = props;
  return (
    <PageHeroWithText
      title={title}
      subtitle={subtitle}
      image={image}
      className={className}
      heightClass={heightClass}
    />
  );
}

/* ---------- Variante com ns+keys (usa hook) ---------- */
function PageHeroWithKeys({
  ns,
  titleKey,
  subtitleKey,
  image,
  className,
  heightClass,
}: KeyModeProps) {
  const t = useTranslations(ns);
  const title = t(titleKey);
  const subtitle = subtitleKey ? t(subtitleKey) : undefined;

  return (
    <HeroFrame
      image={image}
      className={className}
      heightClass={heightClass}
      title={title}
      subtitle={subtitle}
    />
  );
}

/* ---------- Variante com texto direto (sem hook) ---------- */
function PageHeroWithText({
  title,
  subtitle,
  image,
  className,
  heightClass,
}: DirectModeProps) {
  return (
    <HeroFrame
      image={image}
      className={className}
      heightClass={heightClass}
      title={title}
      subtitle={subtitle}
    />
  );
}

/* ---------- Frame visual ---------- */
function HeroFrame({
  image,
  className,
  heightClass = "h-[36vh] md:h-[42vh]",
  title,
  subtitle,
}: BaseProps & { title: string; subtitle?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className={clsx("relative", heightClass, className)}>
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover brightness-110"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center">
        <div
          className={clsx(
            "container-gs transition-all duration-500 will-change-transform",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          <h1 className="font-heading text-4xl md:text-6xl leading-none tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p
              className={clsx(
                "mt-3 max-w-3xl font-sans text-base md:text-lg text-gray-200 transition-all duration-700",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              )}
              style={{ transitionDelay: "80ms" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
