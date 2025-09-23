// src/app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300","400","500","600","700"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${poppins.variable}`} suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  );
}
