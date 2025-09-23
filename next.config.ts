// next.config.ts
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
  reactStrictMode: true,
  // fixa a raiz do Turbopack para este projeto (evita escolher a pasta pai)
  turbopack: { root: __dirname }
});
