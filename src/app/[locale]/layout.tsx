// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import ProvidersLoader from "./ProvidersLoader";

export const metadata: Metadata = {
  title: "GS Advogados",
  description: "Sociedade de Advogados",
};

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" || raw === "pt" ? (raw as Locale) : "pt";

  return <ProvidersLoader locale={locale}>{children}</ProvidersLoader>;
}
