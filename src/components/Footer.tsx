"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  // navegação da barra branca inferior
  const bottomNav = [
    { href: "/", label: t("nav.home") }, // Início
    { href: "/casos", label: t("nav.cases") }, // Casos
    { href: "/quem-somos", label: t("nav.about") }, // Sobre nós
    { href: "/legal", label: t("nav.legal") }, // Legal
  ];

  // links rápidos (coluna da direita, bloco escuro)
  const quickLinks = [
    { href: "/casos", label: t("nav.cases") }, // Casos de estudo
    { href: "/quem-somos", label: t("nav.about") }, // Sobre nós
    { href: "/servicos", label: t("nav.services") }, // Serviços
    { href: "/contactos", label: t("contacto") }, // Contactos
  ];

  return (
    <footer className="bg-transparent">
      {/* BLOCO SUPERIOR – fundo escuro em degradé */}
      <div className="bg-[radial-gradient(1000px_900px_at_0%_100%,#000000,#1a1a1a)] text-white">
        <Container className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {/* COLUNA 1 – logo + texto */}
            <div>
              <Image
                src="/log-footer.png"
                width={230}
                height={70}
                alt="GS Advogados"
                className="h-auto w-[230px]"
                priority
              />

              <p className="mt-6 max-w-md font-poppins text-[13px] md:text-[14px] leading-relaxed text-white/80">
                {t("about")}
              </p>
            </div>

            {/* COLUNA 2 – contacto info */}
            <div>
              <h3 className="font-poppins text-xs md:text-sm tracking-[0.25em] uppercase text-white">
                {t("contact.title")}
              </h3>

              <div className="mt-6 space-y-2 font-poppins text-[13px] md:text-[14px] text-white/80">
                <p>{t("contact.addr1")}</p>
                <p>{t("contact.addr2")}</p>
                <p>{t("contact.addr3")}</p>

                <div className="pt-3">
                  <p>{t("contact.phone")}</p>
                  <Link
                    href="mailto:geral@gsadvogados.ao"
                    className="mt-1 inline-block font-poppins text-[13px] text-white/80 hover:text-white"
                  >
                    geral@gsadvogados.ao
                  </Link>
                </div>
              </div>
            </div>

            {/* COLUNA 3 – links rápidos */}
            <div className="md:text-right">
              <h3 className="font-poppins text-xs md:text-sm tracking-[0.25em] uppercase text-white">
                {t("quickLinksTitle")}
                {/* adiciona esta key no ficheiro de traduções, ex: "Links Rápidos" */}
              </h3>

              <ul className="mt-6 space-y-2 font-poppins text-[13px] md:text-[14px] text-white/80">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* BARRA INFERIOR – fundo branco */}
      <div className="bg-white">
        <Container className="py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-[11px] md:text-[12px] text-[#141414]">
            {t("copyright")}
          </p>

          <nav aria-label={t("footerNavAria")}>
            <ul className="flex flex-wrap items-center gap-6 font-poppins text-[12px] text-[#141414]">
              {bottomNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#000000] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
