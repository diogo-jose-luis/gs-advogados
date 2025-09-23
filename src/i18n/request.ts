// src/i18n/request.ts
import {getRequestConfig} from "next-intl/server";

type Messages = Record<string, unknown>;

export default getRequestConfig(async ({locale}) => {
  const fallbackLocale = "pt";
  const resolvedLocale = locale ?? fallbackLocale;

  const mod = await import(`../messages/${resolvedLocale}.json`).catch(() =>
    import(`../messages/${fallbackLocale}.json`)
  );

  // tipar corretamente o default do módulo JSON
  const messages = (mod as {default: Messages}).default ?? (mod as unknown as Messages);

  return {locale: resolvedLocale, messages};
});
