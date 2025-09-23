// src/components/TeamGrid.tsx
"use client";

import Image from "next/image";
import Container from "./Container";
import {useTranslations} from "next-intl";

type Member = {
  name: string;
  role?: string;
  photo: string;
};

const TEAM: Member[] = [
  { name: "Guimarães Silva", role: "Managing Partner", photo: "/team/user1.jpeg" },
  { name: "Evelise Dias", role: "Partner", photo: "/team/user2.jpeg" },
  { name: "Juliana Teixeira", role: "Associate", photo: "/team/user3.jpg" },
  { name: "Inocêncio Cristóvão", role: "Associate", photo: "/team/user4.jpg" },
  { name: "Leandro Martin", role: "Trainee", photo: "/team/user5.jpg" },
  { name: "Lúcia Camuando", role: "Paralegal", photo: "/team/user9.jpg" },
  { name: "Gizela Salvaterra Batalha", role: "Paralegal", photo: "/team/user6.jpeg" },
  { name: "Emanuel Naniunaco", role: "Paralegal", photo: "/team/user7.jpeg" },
  { name: "Helena da Conceição Domingos Cabegalo", role: "Paralegal", photo: "/team/user8.jpeg" }
];

export default function TeamGrid() {
  const t = useTranslations("team");

  return (
    // Aproximar do banner: reduzimos bastante o padding-top
    <section className="pt-4 md:pt-6 pb-10">
      <div className="relative isolate">
        <Container className="relative py-0">
         

          {/* grelha responsiva, com gaps mais contidos */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {TEAM.map((m, idx) => (
              <li key={m.name} className="group relative">
                {/* cartão com efeito hover */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    priority={idx < 4}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* véu escuro sutil + nome no hover (desktop) */}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

                  {/* nome no overlay (aparece no hover em >=md) */}
                  <div className="absolute inset-x-0 bottom-0 p-3 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all">
                    <div className="bg-white/95 backdrop-blur px-3 py-2 inline-block">
                      <p className="font-heading text-[15px] leading-none text-gs-ink break-words">
                        {m.name}
                      </p>
                      {m.role && (
                        <p className="mt-1 text-[12px] text-gs-ink/70 leading-none">
                          {m.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* legenda para mobile (sem hover) */}
                <div className="mt-2 md:hidden">
                  <p className="font-heading text-[15px] text-gs-ink break-words">
                    {m.name}
                  </p>
                  {m.role && <p className="text-xs text-gs-ink/70">{m.role}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
