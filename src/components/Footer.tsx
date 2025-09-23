"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useTranslations } from "next-intl";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  const nav = [
    { href: "/", label: t("nav.home") },
    { href: "/casos", label: t("nav.cases") },
    { href: "/quem-somos", label: t("nav.about") },
    // ✅ novo link para Contactos
    { href: "/pt/contactos", label: t("contacto") },
    { href: "/legal", label: t("nav.legal") },
    { href: "/politica-de-privacidade", label: t("nav.privacy") }
  ];

  const practices = [
    { href: "/casos/1", label: t("practices.items.0") },
    { href: "/casos/2", label: t("practices.items.1") },
    { href: "/casos/3", label: t("practices.items.2") }
  ];

  return (
    <footer className="bg-[#151515] text-white">
      {/* linha superior (apenas estética, como no mock) */}
      <div className="h-px bg-white/10" />

      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Coluna 1: logo + descrição + redes */}
          <div>
            <Image
              src="/log-footer.png"
              width={210}
              height={60}
              alt="GS Advogados"
              className="h-auto w-[210px]"
              priority
            />

            <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-md">
              {t("about")}
            </p>

            <div className="mt-5 flex items-center gap-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="p-2 hover:bg-white/10 transition"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="p-2 hover:bg-white/10 transition"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="p-2 hover:bg-white/10 transition"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Coluna 2: contacto */}
          <div>
            <h3 className="font-heading text-2xl tracking-tight">
              {t("contact.title")}
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-white/80">
              <li>
                <span className="block">{t("contact.addr1")}</span>
              </li>
              <li>
                <span className="block">{t("contact.addr2")}</span>
              </li>
              <li>
                <span className="block">{t("contact.addr3")}</span>
              </li>
              <li className="pt-2">
                <span className="block">{t("contact.phone")}</span>
                <Link
                  href="mailto:geral@gsadvogados.ao"
                  className="text-gs-red hover:text-gs-redDark font-semibold"
                >
                  geral@gsadvogados.ao
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: áreas de atuação */}
          <div>
            <h3 className="font-heading text-2xl tracking-tight">
              {t("practices.title")}
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {practices.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="hover:text-white transition">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* barra inferior */}
      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">{t("copyright")}</p>

          <nav aria-label={t("footerNavAria")}>
            <ul className="flex flex-wrap items-center gap-6 text-sm text-white/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-white transition" href={item.href}>
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
