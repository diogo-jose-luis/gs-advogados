"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function JoinForm() {
  const t = useTranslations("join");
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setOk(null);

    // Aqui vai a integração real (API interna, Formspree, etc.).
    // Por agora só simulamos sucesso:
    await new Promise(r => setTimeout(r, 700));
    setOk(true);
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  }

  return (
    <section className="py-10 md:py-14">
      <div className="container-gs">
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          encType="multipart/form-data"
        >
          <div className="col-span-1">
            <label className="block text-sm mb-2">{t("name")}</label>
            <input name="name" required className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-gs-red"/>
          </div>

          <div className="col-span-1">
            <label className="block text-sm mb-2">{t("email")}</label>
            <input type="email" name="email" required className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-gs-red"/>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm mb-2">{t("cv")}</label>
            <input type="file" name="cv" accept=".pdf,.doc,.docx" required
                   className="w-full border border-gray-300 file:mr-4 file:px-4 file:py-2 file:bg-gray-100 file:border-0 file:text-sm"/>
          </div>

          <div className="col-span-1 md:col-span-2">
            <button type="submit" disabled={submitting}
              className="btn-gs">
              {submitting ? t("sending") : t("submit")}
            </button>

            {ok === true && (
              <p className="mt-3 text-sm text-green-700">{t("ok")}</p>
            )}
            {ok === false && (
              <p className="mt-3 text-sm text-red-700">{t("error")}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
