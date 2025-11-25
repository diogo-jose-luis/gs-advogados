"use client";

import { useTranslations } from "next-intl";
import { Mail, Facebook, Twitter } from "lucide-react";

export default function MapBlock() {
  const t = useTranslations("map");

  return (
    <section className="bg-white">
      {/* Mapa full width */}
      <div className="relative w-full aspect-[16/9]">
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src="https://www.google.com/maps?q=GS%20Advogados%20Luanda&output=embed"
          title={t("iframeTitle")}
          loading="lazy"
        />
      </div>

      {/* Barra de ícones em fundo branco */}
      <div className="py-10 flex items-center justify-center">
        <div className="flex gap-8 md:gap-12">
          {/* E-mail */}
          <a
            href="mailto:geral@gsadvogados.ao"
            aria-label="E-mail"
            className="w-11 h-11 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>

          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="w-11 h-11 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>

          {/* Skype (ícone simples custom) */}
          <a
            href="#"
            aria-label="Skype"
            className="w-11 h-11 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
          >
            <span className="font-poppins text-sm font-semibold">S</span>
          </a>

          {/* Twitter */}
          <a
            href="#"
            aria-label="Twitter"
            className="w-11 h-11 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
