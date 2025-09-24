"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import {useLocale, useTranslations} from "next-intl";
import {usePathname} from "next/navigation";
import {Menu} from "lucide-react";
import {useState} from "react";
import MobileDrawer from "./MobileDrawer";

function LangSwitcher() {
  const locale = useLocale();
  const raw = usePathname();
  // remove prefixo /pt|/en e garante fallback "/"
  const pathname = raw.replace(/^\/(pt|en)(?=\/|$)/, "") || "/";

  return (
    <div className="flex items-center gap-3 text-sm">
      <Link
        href={`/pt${pathname === "/" ? "" : pathname}`}
        className={`hover:underline ${locale === "pt" ? "font-semibold text-gs-red" : ""}`}
      >
        PT
      </Link>
      <span className="text-gray-300">|</span>
      <Link
        href={`/en${pathname === "/" ? "" : pathname}`}
        className={`hover:underline ${locale === "en" ? "font-semibold text-gs-red" : ""}`}
      >
        EN
      </Link>
    </div>
  );
}

export default function HeaderTop() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white">
        {/* altura mais enxuta */}
        <Container className="flex items-center justify-between min-h-[130px] md:min-h-[100px] py-4 md:py-5">
          {/* Logo com tamanho equilibrado */}
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
            <span className="hidden md:inline text-sm text-gs-gray">
              {t("top.help")}
            </span>

            {/* hambúrguer visível no desktop */}
            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
        {/* <div className="h-px bg-gray-100" /> */}
      </header>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
