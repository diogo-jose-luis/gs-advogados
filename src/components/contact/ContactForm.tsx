"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contactPage.form");
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setOk(null);

    try {
      // TODO: integrar com tua API/Email (Formspree, Resend, etc.)
      await new Promise((r) => setTimeout(r, 900));
      setOk(true);
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setOk(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h2 className="font-heading text-2xl md:text-3xl text-gs-ink mb-1">
        {t("heading")}
      </h2>
      <div className="mb-6 h-1 w-10 rounded bg-gs-red" />

      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5" noValidate>
        <div>
          <label className="block text-sm mb-2">{t("name")}</label>
          <input
            name="name"
            required
            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-gs-red"
            autoComplete="name"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">{t("email")}</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-gs-red"
            autoComplete="email"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">{t("subject")}</label>
          <input
            name="subject"
            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-gs-red"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">{t("message")}</label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-gs-red"
          />
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" disabled={submitting} className="btn-gs">
            {submitting ? t("sending") : t("submit")}
          </button>

          {ok === true && (
            <p className="text-sm text-green-700">{t("ok")}</p>
          )}
          {ok === false && (
            <p className="text-sm text-red-700">{t("error")}</p>
          )}
        </div>
      </form>
    </div>
  );
}
