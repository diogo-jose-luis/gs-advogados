// src/components/TeamGrid.tsx
"use client";

import Image from "next/image";
import Container from "./Container";

type Member = {
  name: string;
  role?: string;
  photo: string;
  bio?: string;
};

const TEAM: Member[] = [
  // 1 — Já com bio completa
  {
    name: "Guimarães Silva",
    role: "Founding Partner",
    photo: "/team/user1.jpeg",
    bio: "Fundador da primeira sociedade de Advogados em Angola. Inscrito na OAA desde 2007. Pós-graduado em Direito do Trabalho, Bancário e Registos e Notariado. Coordenador do NoulRegante/FOJAN.",
  },

  // 2 — Já com bio completa
  {
    name: "Evelise Dias",
    role: "Associate Lawyer",
    photo: "/team/user2.jpeg",
    bio: "Inscrita na OAA desde 2020 (cédula 3539). Licenciada em Direito pela PUC-SP. Atua em Direito do Trabalho, Contencioso e Família. Forte atuação em defesa dos mais vulneráveis.",
  },

  // 3 — Bio curta adicionada
  {
    name: "Juliana Teixeira",
    role: "Associate",
    photo: "/team/user3.jpg",
    bio: "Advogada associada com experiência em Contencioso Civil, Comercial e Penal. Atua também em assessoria jurídica preventiva.",
  },

  // 4 — Já com bio (adaptada)
  {
    name: "Inocêncio Cristóvão",
    role: "Associate",
    photo: "/team/user4.jpg",
    bio: "Advogado inscrito na OAA. Experiência em Direito Penal, Contencioso Cível e Administrativo. Apoia equipas multidisciplinares em litígios estratégicos.",
  },

  // 5 — Bio curta adicionada
  {
    name: "Leandro Martin",
    role: "Trainee",
    photo: "/team/user5.jpg",
    bio: "Advogado estagiário com interesse em Direito Comercial, Contratos e Litígios. Apoia equipas em pesquisa jurídica e preparação de peças processuais.",
  },

  // 6 — Bio curta adicionada
  {
    name: "Lúcia Camuando",
    role: "Paralegal",
    photo: "/team/user9.jpg",
    bio: "Paralegal com experiência em gestão documental, apoio processual e diligências junto de tribunais e conservatórias.",
  },

  // 7 — Já com bio completa
  {
    name: "Gizela Salvaterra Batalha",
    role: "Advogada",
    photo: "/team/user6.jpeg",
    bio: "Inscrita na OAA desde 2019. Atua em Direito Societário, Laboral, Comercial e Compliance. Trabalha em português e inglês.",
  },

  // 8 — Bio curta adicionada
  {
    name: "Emanuel Naniunaco",
    role: "Paralegal",
    photo: "/team/user7.jpeg",
    bio: "Paralegal com experiência em procedimentos legais, recolha de documentos e apoio em contencioso jurídico.",
  },

  // 9 — Já com bio completa
  {
    name: "Helena da Conceição Domingos Cabegalo",
    role: "Advogada Estagiária",
    photo: "/team/user8.jpeg",
    bio: "Advogada estagiária. Atua em Direito de Família, Sucessões, Penal e Contencioso Cível. Focada na defesa de mulheres vítimas de violência.",
  },
];

export default function TeamGrid() {
  return (
    <section className="bg-[#f3f3f3] py-16 md:py-20">
      <div className="relative isolate">
        <Container className="relative">
          {/* Cabeçalho da secção */}
          <header className="text-center mb-12 md:mb-16">
            <p className="font-poppins text-[11px] tracking-[0.25em] uppercase text-gray-500">
              O DREAM TEAM
            </p>
            <h2 className="mt-3 font-poppins font-semibold text-[28px] md:text-[34px] leading-tight text-black">
              Especialistas Experientes
            </h2>
          </header>

          {/* Grelha de cards */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {TEAM.map((m, idx) => (
              <li key={m.name}>
                <article className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  {/* Foto */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      priority={idx < 3}
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Bloco de texto */}
                  <div className="px-6 py-5">
                    <h3 className="font-poppins font-semibold text-[16px] md:text-[18px] text-black">
                      {m.name}
                    </h3>
                    {m.role && (
                      <p className="mt-1 text-[13px] text-gray-500">{m.role}</p>
                    )}
                    {m.bio && (
                      <p className="mt-3 text-[13px] leading-relaxed text-gray-700">
                        {m.bio}
                      </p>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
