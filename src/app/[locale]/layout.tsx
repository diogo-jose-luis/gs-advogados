import "../globals.css";
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
  // Next 15 pode entregar params como Promise em layouts
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params; // ✅ aguarda o params
  const locale: Locale = raw === "pt" || raw === "en" ? (raw as Locale) : "pt";

  return (
    <html lang={locale}>
      <body>
        <ProvidersLoader locale={locale}>{children}</ProvidersLoader>
      </body>
    </html>
  );
}
