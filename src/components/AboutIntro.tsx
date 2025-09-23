"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import {useTranslations} from "next-intl";

export default function AboutIntro() {
  const t = useTranslations();

  return (
    <section className="relative bg-[#F5F5F5] py-14 md:py-20">
      {/* watermark suave no fundo (opcional) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* Coloca uma imagem leve em public/about/watermark.png */}
        <Image
          src="/about/about.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <Container>
        <div className="relative">
          <h2 className="font-heading text-5xl md:text-7xl leading-none tracking-tight text-gs-ink">
            {t("about.title")}
          </h2>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-gs-ink/80">
            {t("about.lead")}
          </p>

          <Link href="/pt/quem-somos" className="mt-8 inline-flex btn-gs">
            {t("about.cta")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
