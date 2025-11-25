"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHighlights() {
  return (
    <section className="
      w-full
      bg-gradient-to-r from-[#050505] via-[#141414] to-[#2a2a2a]
      text-white
      py-12 md:py-16
    ">
      <div className="container-gs">
        <div className="grid gap-10 md:gap-16 md:grid-cols-3">
          {/* Telefone */}
          <div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <h3 className="font-poppins font-semibold text-lg md:text-xl">
                Telefone
              </h3>
            </div>

            <p className="mt-4 text-sm md:text-[14px] leading-relaxed text-gray-300">
              Podes contactar-nos pelo nosso terminal telefónico a qualquer hora
              24/7
            </p>

            <p className="mt-5 font-poppins font-semibold text-sm md:text-base">
              (+244) 936 551 407
            </p>
          </div>

          {/* E-mail */}
          <div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <h3 className="font-poppins font-semibold text-lg md:text-xl">
                E-mail
              </h3>
            </div>

            <p className="mt-4 text-sm md:text-[14px] leading-relaxed text-gray-300">
              Podes contactar-nos pelo nosso terminal telefónico a qualquer hora
              24/7
            </p>

            <p className="mt-5 font-poppins font-semibold text-sm md:text-base">
              geral@gsadvogados.ao
            </p>
          </div>

          {/* Localização */}
          <div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <h3 className="font-poppins font-semibold text-lg md:text-xl">
                Localização
              </h3>
            </div>

            <p className="mt-4 text-sm md:text-[14px] leading-relaxed text-gray-300">
              Podes contactar-nos pelo nosso terminal telefónico a qualquer hora
              24/7
            </p>

            <p className="mt-5 font-poppins font-semibold text-sm md:text-base">
              Luanda · Angola
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
