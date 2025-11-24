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
  { key: "successRate", value: "95%" },
];

/** Conta de 0 até ao valor; preserva sufixos (%, +, M+, etc.) */
function Counter({
  value,
  duration = 1400,
  className = "",
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
          src="/why/hero2.png"
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
          {/* Título e subtítulo à esquerda */}
          <header className="text-left">
            <h2 className="font-poppins font-semibold text-[32px] md:text-[40px] leading-tight tracking-tight text-gs-ink">
              {t("heading.line1")}
              <br className="hidden md:block" />
              {t("heading.line2")}
            </h2>

            <p className="mt-4 font-poppins font-extralight text-[16px] md:text-[17px] text-gs-ink/80">
              {t("kicker")}
            </p>
          </header>

          {/* métricas em círculos */}
          <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {STATS.map((s) => (
              <div
                key={s.key}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#B41E0B]">
                  <div className="flex flex-col items-center justify-center text-center px-2">
                    <Counter
                      value={s.value}
                      className="font-poppins font-semibold text-[20px] text-[#B41E0B]"
                    />
                    <p className="mt-1 font-poppins font-light text-[10px] leading-snug text-[#141414]">
                      {t(`stats.${s.key}`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* botão pill centrado */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="inline-flex items-stretch overflow-hidden rounded-full border border-[#B41E0B]"
            >
              <span className="bg-white px-6 py-3 text-[14px] md:text-[15px] font-poppins font-light text-[#141414]">
               Conheça os nossos Advogados
              </span>
              <span className="flex items-center justify-center bg-[#B41E0B] px-4">
                <span className="text-white text-lg leading-none">→</span>
              </span>
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
