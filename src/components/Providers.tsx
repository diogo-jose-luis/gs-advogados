// "use client";
"use client";

import {NextIntlClientProvider} from "next-intl";

export default function Providers({
  children,
  messages,
  locale
}: {
  children: React.ReactNode;
  messages: Record<string, unknown>;
  locale: string;
}) {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      timeZone="Europe/Lisbon"  // 👈 remove o aviso de timeZone
    >
      {children}
    </NextIntlClientProvider>
  );
}
