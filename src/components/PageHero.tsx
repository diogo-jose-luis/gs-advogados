"use client";

import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  image: string;                 // /public/...
  className?: string;
  // altura menor que o hero da home
  heightClass?: string;          // ex.: "h-[36vh] md:h-[42vh]"
};

export default function PageHero({
  title,
  subtitle,
  image,
  className = "",
  heightClass = "h-[36vh] md:h-[42vh]"
}: Props) {
  return (
    <section className={`relative ${heightClass} ${className}`}>
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* overlay mais leve */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex items-center">
        <div className="container-gs">
          <h1 className="font-heading text-4xl md:text-5xl text-white tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 max-w-2xl text-gs-red opacity-90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
