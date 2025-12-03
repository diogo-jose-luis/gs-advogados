"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../Container";

function BulletIcon() {
  return (
    <div className="flex items-start gap-1 pt-1 mr-3">
      {/* Primeira coluna */}
      <div className="flex flex-col gap-1">
        <span className="w-2.5 h-2.5 rounded-full bg-[#B21F12]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#B21F12]" />
      </div>

      {/* Segunda coluna (um ponto centrado verticalmente entre os dois da esquerda) */}
      <div className="flex items-center">
        <span className="w-2.5 h-2.5 rounded-full bg-[#B21F12]" />
      </div>
    </div>
  );
}


export default function AboutStory() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        {/* VIDEO / IMAGEM NO TOPO */}
        <div className="mb-12 md:mb-16">
          <div className="relative w-full overflow-hidden rounded-md shadow-md">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/hero/banner1.png"
                alt="GS Advogados - Luanda"
                fill
                priority
                className="object-cover"
                sizes="(min-width:1024px) 70vw, 100vw"
              />
            </div>

            {/* Botão play central */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Reproduzir vídeo institucional"
              className="group absolute inset-0 grid place-content-center"
            >
              <span className="grid h-16 w-16 place-content-center rounded-full bg-white/70 hover:bg-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="11" stroke="#B21F12" strokeWidth="2" />
                  <path d="M10 8l6 4-6 4V8z" fill="#B21F12" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* TEXTO EM COLUNA ÚNICA */}
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-12 text-[#333] font-poppins text-[14px] leading-relaxed">
          {/* A NOSSA HISTÓRIA */}
          <section>
            <div className="flex items-start">
              <BulletIcon />
              <div>
                <h2 className="text-[22px] md:text-[24px] font-semibold text-[#B21F12]">
                  A Nossa História
                </h2>
              </div>
            </div>

            <div className="mt-4 space-y-4 text-[14px] leading-relaxed">
              <p>
               A GS Advogados é a primeira sociedade de advogados constituída em Angola, pioneira na afirmação de um modelo de advocacia moderna, independente e orientada para a excelência.
              </p>
              <p>
               Desde a sua fundação, tem-se destacado pela capacidade de aliar o domínio profundo do Direito angolano a uma visão global, acompanhando a crescente sofisticação das relações económicas e institucionais do país.
              </p>
              <p>
               Com uma equipa de advogados experientes, tecnicamente sólidos e comprometidos com os mais elevados padrões de ética profissional, a GS Advogados presta assessoria jurídica de excelência a constituintes nacionais e internacionais, em operações complexas, projectos estruturantes e contencioso de elevada exigência técnica.
              </p>
              <p>
                Guiada pela convicção de que o Direito é um instrumento de rigor, confiança e desenvolvimento, a sociedade pauta-se por uma prática centrada na integridade, no profissionalismo e na procura constante de soluções jurídicas seguras, inovadoras e sustentáveis.
              </p>
              <p>
                Cada cliente é acompanhado com atenção personalizada e dedicação integral, refletindo o compromisso da GS Advogados em transformar desafios jurídicos em resultados concretos e duradouros.
              </p>
              <p>
                Com uma trajectória marcada pela inovação, consistência e visão estratégica, a GS Advogados consolidou-se como referência de qualidade, confiança e liderança no panorama jurídico angolano, mantendo-se fiel à sua missão essencial: defender com integridade, aconselhar com sabedoria e servir com visão de futuro.
              </p>
            </div>
          </section>

          {/* O QUE NOS SUSTENTA */}
          <section>
            <div className="flex items-start">
              <BulletIcon />
              <div>
                <h2 className="text-[22px] md:text-[24px] font-semibold text-[#B21F12]">
                  O Que Nos Sustenta
                </h2>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-[15px] font-semibold text-[#111]">Reconhecimento</h3>
                <p className="mt-1">
                  A GS Advogados conquistou uma reputação consolidada pela confiança dos clientes, rigor técnico e compromisso ético da sua equipa.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-[#111]">Sustentabilidade</h3>
                <p className="mt-1">
                 Este reconhecimento reflete a qualidade dos serviços prestados, a consistência técnica e a capacidade de antecipar desafios complexos com precisão e transparência.
                </p>
              </div>
            </div>
          </section>

          {/* MISSÃO E VALORES */}
          <section>
            <div className="flex items-start">
              <BulletIcon />
              <div>
                <h2 className="text-[22px] md:text-[24px] font-semibold text-[#B21F12]">
                  Missão e Valores
                </h2>
              </div>
            </div>

            <div className="mt-4 space-y-5">
              <div>
                <h3 className="text-[15px] font-semibold text-[#111]">Missão</h3>
                <p className="mt-1">
                  Oferecer soluções jurídicas de excelência, com ética, rigor e dedicação, protegendo os interesses dos nossos constituintes e antecipando riscos de forma estratégica.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-[#111]">Visão</h3>
                <p className="mt-1">
                  Ser referência em advocacia de negócios em Angola, reconhecida nacional e internacionalmente pela qualidade, integridade e inovação.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-[#111]">Valores</h3>
                <ul className="mt-2 space-y-1 pl-5 text-[14px]">
                  {[
                    "Integridade",
                    "Excelência",
                    "Dedicação",
                    "Confidencialidade",
                    "Responsabilidade social",
                    "Inovação",
                  ].map((v) => (
                    <li key={v} className="list-disc marker:text-[#B21F12]">
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* POLÍTICA DE COMPLIANCE */}
          <section>
            <div className="flex items-start">
              <BulletIcon />
              <div>
                <h2 className="text-[22px] md:text-[24px] font-semibold text-[#B21F12]">
                  Política de Compliance
                </h2>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <p>
               A GS Advogados mantém uma política de compliance rigorosa, assegurando conformidade legal, integridade e transparência em todos os serviços prestados.
              </p>
              <p>
               Inclui procedimentos internos, prevenção de conflitos de interesse, controlo de riscos e monitorização contínua da legislação aplicável, garantindo práticas de advocacia responsáveis e éticas.
              </p>
            </div>
          </section>


          {/* PROTEÇÃO DE DADOS E CONFIDENCIALIDADE */}
          <section>
            <div className="flex items-start">
              <BulletIcon />
              <div>
                <h2 className="text-[22px] md:text-[24px] font-semibold text-[#B21F12]">
                  Proteção de Dados e Confidencialidade
                </h2>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <p>
                O tratamento de dados pessoais e corporativos é rigorosamente protegido, garantindo
                total confidencialidade e respeito pelas normas aplicáveis de proteção de dados.
              </p>
              <p>
                A GS Advogados observa as melhores práticas internacionais e a legislação angolana
                vigente, assegurando rastreabilidade na gestão da informação jurídica e segurança na
                relação com os clientes.
              </p>
            </div>
          </section>
        </div>
      </Container>

      {/* MODAL VÍDEO */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-md bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Fechar vídeo"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 rounded bg-white/10 px-3 py-1 text-white hover:bg-white/20"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/oobt6nWXPac?autoplay=1&rel=0"
                title="Vídeo Institucional GS Advogados"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
