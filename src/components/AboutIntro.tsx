"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { useTranslations } from "next-intl";

export default function AboutIntro() {
  const t = useTranslations();

  return (
    <section className="relative py-14 md:py-20">
      {/* watermark suave no fundo (opcional) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* Coloca uma imagem leve em public/about/watermark.png */}
        <Image
          src="/about/about1.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <Container>
        <div className="relative">
          <h2 className="font-poppins font-semibold text-[40px] leading-none tracking-tight text-gs-ink">
            {t("about.title")}
          </h2>

          <p className="mt-6 max-w-3xl font-poppins font-light text-[18px] text-gs-ink/80">
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
