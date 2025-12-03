"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useTranslations, useLocale } from "next-intl";

import { ARTICLES } from "@/data/articles"; // <<— use a mesma fonte

export default function FreeConsult() {
  const t = useTranslations("consult");
  const tl = useTranslations("alerts");
  const ta = useTranslations("legalArticles");
  const locale = useLocale();

  const prefix = locale ? `/${locale}` : "";
  const withLocale = (p: string) => `${prefix}${p == "/" ? "" : p}`;

  // estado simples para o form
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "err">(null);

  const LATEST = ARTICLES.slice(0, 3); // <<— apenas 3 na home

  function fmtDate(iso: string) {
    try {
      return new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(iso));
    } catch {
      return iso;
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    if (
      !fd.get("name") ||
      !fd.get("phone") ||
      !fd.get("email") ||
      !fd.get("message")
    ) {
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
            <h2 className="font-poppins font-semibold text-[32px] md:text-[40px] leading-tight tracking-tight text-gs-ink">
              {t("heading")}
            </h2>

            <p className="mt-4 font-poppins font-extralight text-[16px] md:text-[17px] text-gs-ink/80">
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
                  <option value="corporate">{t("topics.item1")}</option>
                  <option value="litigation">{t("topics.item2")}</option>
                  <option value="labour">{t("topics.item3")}</option>
                  <option value="migration">{t("topics.item4")}</option>
                  <option value="tax">{t("topics.item5")}</option>
                  <option value="other">{t("topics.item6")}</option>
                  <option value="other">{t("topics.item7")}</option>
                  <option value="other">{t("topics.item8")}</option>
                  <option value="other">{t("topics.item9")}</option>
                  <option value="other">{t("topics.item10")}</option>
                  <option value="other">{t("topics.item11")}</option>
                  <option value="other">{t("topics.item12")}</option>
                  <option value="other">{t("topics.item13")}</option>
                  <option value="other">{t("topics.item14")}</option>
                  <option value="other">{t("topics.item15")}</option>
                  <option value="other">{t("topics.item16")}</option>
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
                placeholder="O Primeiro Contacto permite compreender o enquadramento jurídico do seu caso e indicar a melhor via de acompanhamento."
                rows={6}
                className="w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] outline-none focus:border-gs-red"
              />

              <button
                disabled={loading}
                className="btn-gs w-full h-12 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? t("sending") : t("submit")}
              </button>

              {sent == "ok" && (
                <p className="text-sm text-green-700">{t("success")}</p>
              )}
              {sent == "err" && (
                <p className="text-sm text-red-700">{t("error")}</p>
              )}
            </form>
          </div>

          {/* COLUNA DIREITA — ALERTAS */}
          <aside>
            <h3 className="font-heading text-2xl md:text-3xl">
              {tl("heading")}
            </h3>

            <ul className="mt-6">
              {LATEST.map((a, i) => (
                <li
                  key={a.slug}
                  className="flex gap-4 pb-5 mb-5 border-b border-gray-200"
                >
                  <Link
                    href={withLocale(
                      `/informacoes-juridicas/artigos/${a.slug}`
                    )}
                    className="relative block aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-sm"
                  >
                    <Image
                      src={a.img}
                      alt=""
                      fill
                      priority={i == 0}
                      sizes="112px"
                      className="object-cover"
                    />
                  </Link>

                  <div className="min-w-0">
                    <Link
                      href={withLocale(
                        `/informacoes-juridicas/artigos/${a.slug}`
                      )}
                      className="font-semibold text-gs-red hover:underline"
                    >
                      {ta(`items.${a.titleKey}`)}
                    </Link>

                    <div className="mt-1 text-xs text-gs-ink/60">
                      {fmtDate(a.dateISO)} <span className="mx-1">•</span>{" "}
                      {ta(`meta.authors.${a.authorKey}`)}
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
