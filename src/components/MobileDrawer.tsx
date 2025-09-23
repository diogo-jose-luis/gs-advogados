// src/components/MobileDrawer.tsx
"use client";

import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {X} from "lucide-react";

export default function MobileDrawer({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslations();
  const locale = useLocale();

  // Prefixa sempre com o locale atual (ex.: /pt, /en)
  const prefix = locale ? `/${locale}` : "";
  const withLocale = (p: string) => `${prefix}${p === "/" ? "" : p}`;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-xl transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <span className="font-semibold">GS Advogados</span>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <Link
                onClick={onClose}
                href={withLocale("/")}
                className="block rounded-lg px-3 py-2 hover:bg-gray-100"
              >
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link
                onClick={onClose}
                href={withLocale("/quem-somos")}
                className="block rounded-lg px-3 py-2 hover:bg-gray-100"
              >
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link
                onClick={onClose}
                href={withLocale("/competencias")}
                className="block rounded-lg px-3 py-2 hover:bg-gray-100"
              >
                {t("nav.practices")}
              </Link>
            </li>
            <li>
              <Link
                onClick={onClose}
                href={withLocale("/equipa")}
                className="block rounded-lg px-3 py-2 hover:bg-gray-100"
              >
                {t("nav.team")}
              </Link>
            </li>
            <li>
              <Link
                onClick={onClose}
                href={withLocale("/podcast")}
                className="block rounded-lg px-3 py-2 hover:bg-gray-100"
              >
                {t("nav.podcast")}
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100 list-none">
                  {t("nav.legal.label")}
                </summary>
                <div className="ml-2 mt-1 space-y-1">
                  <Link
                    onClick={onClose}
                    href={withLocale("/informacoes-juridicas/artigos")}
                    className="block rounded-lg px-3 py-2 hover:bg-gray-100"
                  >
                    {t("nav.legal.articles")}
                  </Link>
                  <Link
                    onClick={onClose}
                    href={withLocale("/informacoes-juridicas/orientacoes")}
                    className="block rounded-lg px-3 py-2 hover:bg-gray-100"
                  >
                    {t("nav.legal.guides")}
                  </Link>
                  <Link
                    onClick={onClose}
                    href={withLocale("/informacoes-juridicas/documentos")}
                    className="block rounded-lg px-3 py-2 hover:bg-gray-100"
                  >
                    {t("nav.legal.docs")}
                  </Link>
                </div>
              </details>
            </li>
          </ul>

          {/* CTA permanece no menu mobile */}
          <Link
            onClick={onClose}
            href={withLocale("/junte-se-a-nos")}
            className="mt-4 inline-flex w-full justify-center btn-gs"
          >
            {t("cta.join")}
          </Link>
        </nav>
      </aside>
    </>
  );
}
