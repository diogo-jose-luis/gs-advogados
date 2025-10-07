"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Competencia } from "@/data/competencias";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  item: Competencia | null;
  nsGrid?: string;     // default: "competenciasPage.practices.grid"
  nsDetails?: string;  // default: "competenciasDetails"
};

export default function CompetenciaDrawer({
  open,
  onClose,
  item,
  nsGrid = "competenciasPage.practices.grid",
  nsDetails = "competenciasDetails",
}: Props) {
  const tGrid = useTranslations(nsGrid);
  const tD = useTranslations(nsDetails);

  // fechar com ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={[
        "fixed inset-0 z-[80] pointer-events-none",
        open ? "pointer-events-auto" : "",
      ].join(" ")}
    >
      {/* backdrop */}
      <div
        className={[
          "absolute inset-0 bg-black/40 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={onClose}
      />

      {/* drawer (esquerda) */}
      <aside
        role="dialog"
        aria-modal="true"
        className={[
          "absolute left-0 top-0 h-full w-full max-w-[720px] bg-white shadow-2xl ring-1 ring-black/10",
          "transition-transform duration-300 will-change-transform",
          open ? "translate-x-0" : "-translate-x-full",
          "flex flex-col",
        ].join(" ")}
      >
        {/* header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
          <h4 className="font-heading text-xl">
            {item ? tGrid(`${item.key}.title`) : ""}
          </h4>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5"
            aria-label={tD("close")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* conteúdo scrollável */}
        <div className="flex-1 overflow-y-auto">
          {item && (
            <>
              {/* imagem */}
              <div className="relative h-56 w-full">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="768px"
                  priority
                />
              </div>

              {/* texto */}
              <div className="p-6">
                {/* subtítulo/desc curta (do grid) */}
                <p className="font-sans text-[15px] text-gs-ink/80">
                  {tGrid(`${item.key}.desc`)}
                </p>

                {/* corpo detalhado (parágrafos) */}
                <div className="prose prose-neutral max-w-none mt-4">
                  {(tD.raw(`${item.key}.body`) as string[] | undefined)?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
