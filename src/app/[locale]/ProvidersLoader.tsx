"use client";

import React from "react";
import Providers from "@/components/Providers";
import type { Locale } from "./layout";

type Messages = Record<string, unknown>;

async function getMessages(locale: Locale): Promise<Messages> {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch {
    return (await import(`../../messages/pt.json`)).default;
  }
}

export default function ProvidersLoader({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const [messages, setMessages] = React.useState<Messages | null>(null);

  React.useEffect(() => {
    let mounted = true;
    getMessages(locale).then((m) => {
      if (mounted) setMessages(m);
    });
    return () => {
      mounted = false;
    };
  }, [locale]);

  if (!messages) return null;

  return (
    <Providers messages={messages} locale={locale}>
      {children}
    </Providers>
  );
}
