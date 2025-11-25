"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";

function LangSwitcher() {
  const locale = useLocale();
  const raw = usePathname();
  // remove prefixo /pt|/en e garante fallback "/"
  const pathname = raw.replace(/^\/(pt|en)(?=\/|$)/, "") || "/";

  return (
    <div className="flex items-center gap-3 text-sm">
      <Link
        href={`/pt${pathname == "/" ? "" : pathname}`}
        className={`hover:underline ${
          locale == "pt" ? "font-semibold text-gs-red" : "text-white"
        }`}
      >
        PT
      </Link>
      <span className="text-gray-300">|</span>
      <Link
        href={`/en${pathname == "/" ? "" : pathname}`}
        className={`hover:underline ${
          locale == "en" ? "font-semibold text-gs-red" : "text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}

export default function HeaderTopGeral() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔹 Agora o header fica por cima do banner, sem ocupar fluxo */}
      <header
        className="
          absolute inset-x-0 top-0 z-30
          bg-gradient-to-b from-black/40 via-black/20 to-transparent
        "
      >
        {/* pointer-events-auto para clicar normalmente */}
        <Container className="flex items-center justify-between min-h-[90px] md:min-h-[96px] py-4 md:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-gs.png"
              alt="GS Advogados"
              width={170}
              height={62}
              className="h-auto w-[140px] md:w-[170px]"
              priority
            />
            <span className="sr-only">GS Advogados</span>
          </Link>

          <div className="flex items-center gap-6">
            <LangSwitcher />
            <span className="hidden md:inline text-sm text-gray-100">
              {t("top.help")}
            </span>

            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded-lg border border-white/40 bg-white/10 hover:bg-white/20 transition text-white"
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </header>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
