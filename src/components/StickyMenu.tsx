// src/components/StickyMenu.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import clsx from "clsx";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

// src/components/StickyMenu.tsx
const NAV = [
  { href: "/", key: "nav.home" },
  { href: "/quem-somos", key: "nav.about" },
  {
    href: "/competencias",
    key: "nav.practices.label",
    children: [
      { href: "/competencias", key: "nav.practices.areas" },
      { href: "/competencias/setores", key: "nav.practices.sectors" },
    ],
  },
  { href: "/equipa", key: "nav.team" },
  { href: "/podcast", key: "nav.podcast" },
  {
    href: "/informacoes-juridicas",
    key: "nav.legal.label",
    children: [
      { href: "/informacoes-juridicas/artigos", key: "nav.legal.articles" },
      { href: "/informacoes-juridicas/orientacoes-praticas", key: "nav.legal.guides" },
      { href: "/informacoes-juridicas/documentos", key: "nav.legal.docs" },
    ],
  },
];

function LangSwitcher() {
  const locale = useLocale();
  const raw = usePathname();
  // remove prefixo /pt|/en da path atual para reaplicar
  const pathname = raw.replace(/^\/(pt|en)(?=\/|$)/, "");
  return (
    <div className="hidden md:flex items-center gap-3 text-sm">
      <Link
        href={`/pt${pathname || "/"}`}
        className={`hover:underline ${
          locale === "pt" ? "font-semibold text-gs-red" : ""
        }`}
      >
        PT
      </Link>
      <span className="text-gray-300">|</span>
      <Link
        href={`/en${pathname || "/"}`}
        className={`hover:underline ${
          locale === "en" ? "font-semibold text-gs-red" : ""
        }`}
      >
        EN
      </Link>
    </div>
  );
}

export default function StickyMenu() {
  const [show, setShow] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  // helper para prefixar o locale em todos os links
  const prefix = locale ? `/${locale}` : "";
  const withLocale = (path: string) => `${prefix}${path === "/" ? "" : path}`;

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <nav className="bg-white/95 backdrop-blur border-b border-gray-100 shadow-header">
        <Container className="flex h-14 items-center justify-between gap-6">
          {/* logo pequeno (ícone) */}
          <Link href={withLocale("/")} className="shrink-0">
            <Image
              src="/logo-icon.png"
              alt="GS"
              width={28}
              height={28}
              priority
            />
          </Link>

          {/* nav central */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((item) => (
              <li key={item.key} className="relative group">
                <Link
                  href={withLocale(item.href)}
                  className="hover:text-gs-red transition"
                >
                  {t(item.key)}
                </Link>

                {item.children && (
                  <div className="absolute left-0 top-full">
                    <div
                      className="
        invisible opacity-0 translate-y-1
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
        transition-all duration-150
        pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto
        bg-white border border-gray-100 shadow-lg rounded-xl p-2 w-64
      "
                    >
                      {item.children.map((c) => (
                        <Link
                          key={c.key}
                          href={withLocale(c.href)}
                          className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                        >
                          {t(c.key)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* idiomas + CTA */}
          <div className="flex items-center gap-4">
            <LangSwitcher />
            <Link href={withLocale("/junte-se-a-nos")} className="btn-gs">
              {t("cta.join")}
            </Link>
          </div>
        </Container>
      </nav>
    </div>
  );
}
