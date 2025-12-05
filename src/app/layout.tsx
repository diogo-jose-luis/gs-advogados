// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "GS Advogados",
  description: "Sociedade de Advogados",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
