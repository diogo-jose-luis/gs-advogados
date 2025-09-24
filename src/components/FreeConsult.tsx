"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useTranslations, useLocale } from "next-intl";

type Alert = {
  slug: string;
  image: string;
  titleKey: string;
  dateISO: string; // YYYY-MM-DD
  author: string;
  tags: string[];
};

const ALERTS: Alert[] = [
  {
    slug: "uma-forma-de-perceber-direito",
    image: "/alerts/alert1.png",
    titleKey: "a1",
    dateISO: "2025-09-05",
    author: "diogo",
    tags: []
  },
  {
    slug: "regime-juridico-sociedades-unipessoais",
    image: "/alerts/alert2.png",
    titleKey: "a2",
    dateISO: "2025-09-05",
    author: "diogo",
    tags: []
  },
  {
    slug: "breves-notas-exclusao-socios-por-quotas",
    image: "/alerts/alert3.jpeg",
    titleKey: "a3",
    dateISO: "2019-02-28",
    author: "diogo",
    tags: ["Antitrust", "Family", "Immigration"]
  }
];

export default function FreeConsult() {
  const t = useTranslations("consult");
  const tl = useTranslations("alerts");
  const locale = useLocale();

  const prefix = locale ? `/${locale}` : "";
  const withLocale = (p: string) => `${prefix}${p === "/" ? "" : p}`;

  // estado simples para o form
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "err">(null);

  function fmtDate(iso: string) {
    try {
      return new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }).format(new Date(iso));
    } catch {
      return iso;
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    if (!fd.get("name") || !fd.get("phone") || !fd.get("email") || !fd.get("message")) {
      setSent("err");
      return;
    }

    setLoading(true);
    setSent(null);

    try {
      // await fetch("/api/consult", { method: "POST", body: fd });
      await new Promise((r) => setTimeout(r, 900)); // simulação
      setSent("ok");
      (e.target as HTMLFormElement).reset();
    } catch {
      setSent("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* COLUNA ESQUERDA — FORM */}
          <div>
            {/* Título Times 96 / mobile reduzido */}
            <h2 className="font-heading text-[44px] md:text-[96px] leading-none tracking-tight text-gs-ink">
              {t("heading")}
            </h2>
            {/* Subtítulo Poppins 18 */}
            <p className="mt-3 max-w-2xl font-sans text-[16px] md:text-[18px] text-gs-ink/80">
              {t("lede")}
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder={t("fields.name")}
                  className="h-12 w-full rounded-none border border-gray-200 bg-gray-50 px-4 text-[15px] outline-none focus:border-gs-red"
                />
                <input
                  name="phone"
                  placeholder={t("fields.phone")}
                  className="h-12 w-full rounded-none border border-gray-200 bg-gray-50 px-4 text-[15px] outline-none focus:border-gs-red"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="topic"
                  defaultValue=""
                  className="h-12 w-full rounded-none border border-gray-200 bg-gray-50 px-4 text-[15px] outline-none focus:border-gs-red"
                >
                  <option value="" disabled>
                    {t("fields.topic")}
                  </option>
                  <option value="corporate">{t("topics.corporate")}</option>
                  <option value="litigation">{t("topics.litigation")}</option>
                  <option value="labour">{t("topics.labour")}</option>
                  <option value="migration">{t("topics.migration")}</option>
                  <option value="tax">{t("topics.tax")}</option>
                  <option value="other">{t("topics.other")}</option>
                </select>

                <input
                  name="email"
                  type="email"
                  placeholder={t("fields.email")}
                  className="h-12 w-full rounded-none border border-gray-200 bg-gray-50 px-4 text-[15px] outline-none focus:border-gs-red"
                />
              </div>

              <textarea
                name="message"
                placeholder={t("fields.message")}
                rows={6}
                className="w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] outline-none focus:border-gs-red"
              />

              <button
                disabled={loading}
                className="btn-gs w-full h-12 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? t("sending") : t("submit")}
              </button>

              {sent === "ok" && (
                <p className="text-sm text-green-700">{t("success")}</p>
              )}
              {sent === "err" && (
                <p className="text-sm text-red-700">{t("error")}</p>
              )}
            </form>
          </div>

          {/* COLUNA DIREITA — ALERTAS */}
          <aside>
            <h3 className="font-heading text-2xl md:text-3xl">{tl("heading")}</h3>

            <ul className="mt-6">
              {ALERTS.map((a, i) => (
                <li
                  key={a.slug}
                  className="flex gap-4 pb-5 mb-5 border-b border-gray-200"
                >
                  <Link
                    href={withLocale(`/informacoes-juridicas/artigos/${a.slug}`)}
                    className="relative block aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-sm"
                  >
                    <Image
                      src={a.image}
                      alt=""
                      fill
                      priority={i === 0}
                      sizes="112px"
                      className="object-cover"
                    />
                  </Link>

                  <div className="min-w-0">
                    <Link
                      href={withLocale(`/informacoes-juridicas/artigos/${a.slug}`)}
                      className="font-semibold text-gs-red hover:underline"
                    >
                      {tl(`items.${a.titleKey}`)}
                    </Link>

                    <div className="mt-1 text-xs text-gs-ink/60">
                      {fmtDate(a.dateISO)} <span className="mx-1">•</span> {a.author}
                      {a.tags.length > 0 && (
                        <>
                          <span className="mx-1">•</span>
                          <span>{a.tags.join(", ")}</span>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href={withLocale("/informacoes-juridicas/artigos")}
                className="text-sm tracking-wide text-gs-ink/80 hover:text-gs-ink inline-flex items-center gap-2"
              >
                {tl("all")} <span aria-hidden>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
