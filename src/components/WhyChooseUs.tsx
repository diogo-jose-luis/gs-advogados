// src/components/WhyChooseUs.tsx
"use client";

import Image from "next/image";
import Container from "./Container";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

type StatKey = "clients" | "recovered" | "professionals" | "successRate";

const STATS: Array<{ key: StatKey; value: string }> = [
  { key: "clients", value: "1000+" },
  { key: "recovered", value: "10M+" },
  { key: "professionals", value: "30+" },
  { key: "successRate", value: "95%" }
];

/** Conta de 0 até ao valor; preserva sufixos (%, +, M+, etc.) */
function Counter({
  value,
  duration = 1400,
  className = ""
}: {
  value: string;
  duration?: number; // ms
  className?: string;
}) {
  const locale = useLocale();
  const [display, setDisplay] = useState<string>("0");
  const rafRef = useRef<number | null>(null);

  const { target, suffix } = useMemo(() => {
    const m = value.match(/^([\d.,]+)\s*([A-Za-z%+]+)?$/);
    const numeric = m?.[1]?.replace(/[.,](?=\d{3}\b)/g, "") ?? "0";
    const num = Number(numeric.replace(",", "."));
    const sfx = m?.[2] ?? "";
    return { target: isFinite(num) ? num : 0, suffix: sfx };
  }, [value]);

  useEffect(() => {
    const start = performance.now();
    const fmt = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const current = Math.round(target * p);
      setDisplay(`${fmt.format(current)}${suffix}`);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    setDisplay(`0${suffix}`);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, suffix, duration, locale]);

  return <span className={className}>{display}</span>;
}

export default function WhyChooseUs() {
  const t = useTranslations("why");

  return (
    <section className="pt-6 md:pt-10">
      {/* faixa de imagem */}
      <div className="relative h-[38vh] md:h-[46vh]">
        <Image
          src="/why/hero.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent" />
      </div>

      {/* bloco branco */}
      <div className="bg-white">
        <Container className="py-10 md:py-14">
          {/* Título e subtítulo com consistência */}
          <header className="text-left">
            <h2 className="font-heading text-[44px] md:text-[96px] leading-none tracking-tight text-gs-ink">
              {t("heading.line1")}<br className="hidden md:block" />
              {t("heading.line2")}
            </h2>

            <p className="mt-4 font-sans text-[16px] md:text-[18px] text-gs-ink/80">
              {t("kicker")}
            </p>
          </header>

          {/* métricas com contador */}
          <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {STATS.map((s) => (
              <div key={s.key}>
                <Counter
                  value={s.value}
                  className="text-2xl md:text-3xl font-semibold text-gs-red"
                />
                <p className="mt-1 text-xs md:text-sm text-gs-ink/70 leading-relaxed">
                  {t(`stats.${s.key}`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
