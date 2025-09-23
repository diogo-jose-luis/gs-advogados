"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ContactInfo() {
  const t = useTranslations("contactPage.info");

  return (
    <div>
      <h2 className="font-heading text-2xl md:text-3xl text-gs-ink mb-1">
        {t("heading")}
      </h2>
      <div className="mb-6 h-1 w-10 rounded bg-gs-red" />

      <div className="space-y-6 font-sans text-gs-ink">
        <div>
          <h3 className="font-semibold tracking-wide text-gs-gray uppercase text-[13px] mb-2">
            {t("contacts")}
          </h3>
          <ul className="space-y-2 text-[15px] leading-relaxed">
            <li>
              <span className="font-medium">{t("phonesLabel")} </span>
              <a href="tel:+244949370338" className="underline underline-offset-2 hover:text-gs-red">
                (+244) 949 370 338
              </a>
              {" / "}
              <a href="tel:+244222730166" className="underline underline-offset-2 hover:text-gs-red">
                (+244) 222 730 166
              </a>
            </li>
            <li>
              <span className="font-medium">Whatsapp: </span>
              <a href="https://wa.me/244949370338" target="_blank" className="underline underline-offset-2 hover:text-gs-red">
                (+244) 949 370 338
              </a>
            </li>
            <li>
              <span className="font-medium">Email: </span>
              <a href="mailto:geral@gsadvogados.ao" className="underline underline-offset-2 hover:text-gs-red">
                geral@gsadvogados.ao
              </a>
            </li>
            <li>
              <span className="font-medium">{t("provLabel")} </span>
              Huíla / Benguela — {t("provPhone")}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold tracking-wide text-gs-gray uppercase text-[13px] mb-2">
            {t("offices")}
          </h3>
          <ol className="list-decimal pl-4 space-y-1 text-[15px] leading-relaxed">
            <li>Luanda – Rua Amílcar Cabral nº 29/ RC</li>
            <li>Huíla – Lubango, Rua Capelo & Ivens, apartamento H, 2.º Andar, Bairro Catorze de Abril.</li>
            <li>Benguela, Catumbela</li>
          </ol>
        </div>

        <div>
          <h3 className="font-semibold tracking-wide text-gs-gray uppercase text-[13px] mb-2">
            {t("social")}
          </h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" className="inline-flex h-9 w-9 items-center justify-center rounded bg-gray-100 hover:bg-gray-200">
              <span className="sr-only">Facebook</span>
              {/* ícone simples */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v2H6v4h3v9h4z"/></svg>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="inline-flex h-9 w-9 items-center justify-center rounded bg-gray-100 hover:bg-gray-200">
              <span className="sr-only">Instagram</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="inline-flex h-9 w-9 items-center justify-center rounded bg-gray-100 hover:bg-gray-200">
              <span className="sr-only">LinkedIn</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 9h3v12H6zM7.5 3A1.75 1.75 0 1 1 7.5 6.5 1.75 1.75 0 0 1 7.5 3zM10 9h3v1.7h.1c.4-.7 1.4-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1V21h-3v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-3z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
