"use client";

export default function ContactFormFull() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 md:py-24">
      <div className="container-gs max-w-xl mx-auto">
        {/* Título */}
        <h2 className="text-center font-poppins font-semibold text-[32px] md:text-[36px] text-black">
          Deixe nos a sua mensagem
        </h2>

        {/* Subtítulo */}
        <p className="text-center text-gray-600 font-poppins text-sm mt-2 mb-10">
          E nós entraremos em contacto
        </p>

        {/* Formulário */}
        <form className="space-y-6">
          {/* Nome */}
          <input
            type="text"
            placeholder="Nome"
            className="
              w-full bg-white border border-gray-300 px-4 py-3
              font-poppins text-sm rounded-sm outline-none
              focus:ring-2 focus:ring-gs-red/50
            "
          />

          {/* E-mail */}
          <input
            type="email"
            placeholder="E-mail"
            className="
              w-full bg-white border border-gray-300 px-4 py-3
              font-poppins text-sm rounded-sm outline-none
              focus:ring-2 focus:ring-gs-red/50
            "
          />

          {/* Assunto */}
          <input
            type="text"
            placeholder="Assunto"
            className="
              w-full bg-white border border-gray-300 px-4 py-3
              font-poppins text-sm rounded-sm outline-none
              focus:ring-2 focus:ring-gs-red/50
            "
          />

          {/* Mensagem */}
          <div>
            <textarea
              rows={5}
              placeholder="Mensagem"
              className="
                w-full bg-white border border-gray-300 px-4 py-3
                font-poppins text-sm rounded-sm outline-none
                focus:ring-2 focus:ring-gs-red/50
              "
            ></textarea>
            <p className="mt-2 text-gray-400 text-[12px] font-poppins px-1">
              O Primeiro Contacto permite compreender o enquadramento jurídico do seu caso e
              indicar a melhor via de acompanhamento.
            </p>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="
              w-full bg-[#B21F12] hover:bg-[#9b1b10]
              text-white font-poppins text-sm font-medium
              py-3 mt-4 transition-colors
            "
          >
            Submeter agora
          </button>
        </form>
      </div>
    </section>
  );
}
