// src/components/TeamGrid.tsx
"use client";

import Image from "next/image";
import Container from "./Container";

type Gender = "male" | "female";

type Member = {
  name: string;
  role?: string;
  photo: string;
  bio?: string;
  gender: Gender;
};

const TEAM: Member[] = [
  {
    name: "Guimarães Silva",
    role: "Founding partner",
    photo: "/team/user1.png",
    gender: "male",
    bio: "Fundador da primeira sociedade de Advogados em Angola, inscrito na OAA desde 2007. Licenciado em Direito pela FDUAN, pós-graduado em Direito do Trabalho, Bancário, e dos Registos e Notariado. Coordenador do NouLegaReporte e mestrando em Jurídico Empresarial FDUAN.",
  },

  {
    name: "Gizela Salvaterra Batalha",
    role: "Advogada",
    photo: "/team/user2.png",
    gender: "female",
    bio: "Inscrita na OAA desde 2019 (cédula 3.013). Licenciada em Direito e pós-graduada em Direito Societário pela Universidade Agostinho Neto. Atua em Governação Corporativa, Direito Societário, Bancário, Comercial e Laboral, com interesse em ESG e Compliance. Trabalha em português e inglês.",
  },

  {
    name: "Evelise Dias",
    role: "Associate Lawyer",
    photo: "/team/user3.png",
    gender: "male",
    bio: "Inscrita na OAA desde 2020 (cédula 3.539). Licenciada em Direito pela PUC-SP e APM em Direito do Trabalho e contencioso laboral, com forte experiência em Direito de Família e Sucessões. Tem interesse em Direito Comercial e na defesa dos mais vulneráveis.",
  },

  {
    name: "Helena Cabegalo",
    role: "Advogada Estagiária",
    photo: "/team/user4.png",
    gender: "female",
    bio: "Advogada, inscrita na Ordem dos Advogados de Angola desde 2023 (cédula 12.487). Licenciada em Direito pela Universidade Jean Piaget de Angola. Atua em Direito de Família, Laboral, Cível, Penal e Societário, com interesse na defesa de mulheres vítimas de violência.",
  },

  {
    name: "Odete Mendes",
    role: "Advogada",
    photo: "/team/user5.png",
    gender: "female",
    bio: "Membro da Ordem dos Advogados de Angola – cédula n.º 6.727. Licenciada em Direito pela Universidade Oscar Ribas. Profissional de reconhecida competência em Direito Administrativo, Fiscal, Aduaneiro, Penal e Desportivo, Odete Mendes tem-se afirmado pela capacidade de mediação e representação em processos de elevada complexidade jurídica.",
  },

  {
    name: "Manuel Domingos",
    role: "Advogado Estagiário",
    photo: "/team/user6.png",
    gender: "male",
    bio: "Membro da Ordem dos Advogados de Angola – cédula n.º 7.128. Licenciado em Direito pela Universidade Gregório Semedo. Atua em Direito Penal e Processual Penal, Contencioso Cível e Contencioso Administrativo, com experiência em representação de empresas e instituições.",
  },

  {
    name: "Tresor Quiala",
    role: "Advogado",
    photo: "/team/user7.png",
    gender: "male",
    bio: "Membro da Ordem dos Advogados de Angola – cédula n.º 7.546. Licenciado em Direito e pós-graduado em Direito do Mar pela Universidade Agostinho Neto. Atua em Direito do Mar, Trabalho, Empresarial e Contencioso Laboral, com abordagem técnica e pragmática na resolução de conflitos e na consultoria a empresas do sector marítimo e industrial.",
  },

  {
    name: "Emanuel Naniunaco",
    role: "Advogado Estagiário",
    photo: "/team/user8.png",
    gender: "male",
    bio: "Membro da Ordem dos Advogados de Angola – cédula n.º 14.221. Licenciado em Direito pela Universidade Autónoma de Lisboa. Atua nas áreas de Direito Penal, Processual Penal, Administrativo e Contencioso, com reconhecida capacidade de análise crítica e precisão técnica na defesa de causas complexas perante entidades públicas e tribunais.",
  },

  {
    name: "Irene Ribeiro",
    role: "Jurista",
    photo: "/team/user9.png",
    gender: "female",
    bio: "Licenciada em Direito pelo Instituto Superior Metropolitano de Angola. Dedica-se ao Direito Empresarial e Contencioso, com foco em litígios comerciais e laborais. Atua em gestão e elaboração de contratos, com rigor técnico e orientação para a eficiência.",
  },

  {
    name: "Alberto Atlanta",
    role: "Parceira",
    photo: "/team/user10.png",
    gender: "male",
    bio: "Senior advisor. Docente de inglês técnico na área jurídica e de negócios. Consultor em Gestão e Planeamento Estratégico. Doutorando em Gestão pela Universidade de Lisboa, com especialização em Liderança e Estratégia. Mestre em Gestão, com foco em Gestão Empresarial. Possui vasta experiência em projectos de formação e consultoria empresarial, com ênfase em contextos africanos.",
  },

  {
    name: "Ricardo Jorge",
    role: "Jurista",
    photo: "/team/user11.png",
    gender: "male",
    bio: "Licenciado em Direito pelo Instituto Superior Politécnico de Tecnologias e Ciências. Atua em Direito Administrativo, Contencioso e Contratos Públicos. Participa em projectos de assessoria jurídica a entidades públicas e privadas, assegurando rigor técnico e compliance.",
  },

  {
    name: "Diana Sandango José",
    role: "Advogada Estagiária",
    photo: "/team/user12.png",
    gender: "female",
    bio: "Membro da Ordem dos Advogados de Angola – cédula n.º 13.281. Licenciada em Direito pela Universidade Gregório Semedo. Atua em Direito Penal, Trabalho e Contencioso Cível, com forte compromisso na defesa de direitos fundamentais e na resolução eficiente de litígios.",
  },

  {
    name: "Leonardo Pires",
    role: "Advogado Estagiário",
    photo: "/team/user13.png",
    gender: "male",
    bio: "Membro da Ordem dos Advogados de Angola – cédula n.º 14.329. Licenciado em Direito pela Universidade de Belas. Com experiência em Direito Administrativo, Fiscal, Aduaneiro, Penal e Desportivo, pauta-se pela seriedade profissional e compromisso com soluções jurídicas eficientes e inovadoras.",
  },

  {
    name: "Cardoso Cassule",
    role: "Advogado Estagiário",
    photo: "/team/user14.png",
    gender: "male",
    bio: "Membro da Ordem dos Advogados de Angola – cédula n.º 11.164. Licenciado em Direito pela Universidade Agostinho Neto. Com sólida formação jurídica e forte sentido ético, integra a equipa de Direito Administrativo e Contencioso, participando em projectos que envolvem análise normativa e defesa de interesses institucionais.",
  },

  {
    name: "Palmira Manecas",
    role: "Directora Administrativa e Financeira",
    photo: "/team/user15.png",
    gender: "female",
    bio: "Lidera a área administrativa, garantindo eficiência e organização operacional. Com expertise em recursos humanos, finanças e operações, supervisiona recrutamento, treinamento, controlo financeiro e compras.",
  },

  {
    name: "Lúcia Camuando",
    role: "Administrativa",
    photo: "/team/user16.png",
    gender: "female",
    bio: "Lidera a área administrativa, garantindo eficiência e organização operacional. Com experiência em recursos humanos, finanças e operações, apoia o recrutamento, treinamento, controlo financeiro e compras.",
  },

  {
    name: "Eva Joaquim",
    role: "Contabilista",
    photo: "/team/user17.png",
    gender: "female",
    bio: "Atua na gestão contabilística e financeira, assegurando o cumprimento de obrigações fiscais e o controlo rigoroso das contas da sociedade. Apoia a tomada de decisão com informação financeira fiável.",
  },

  {
    name: "Mateus Sendende",
    role: "Gestor de Marketing",
    photo: "/team/user18.png",
    gender: "male",
    bio: "Responsável pela estratégia de marketing e comunicação da sociedade. Atua no posicionamento da marca, gestão de campanhas e presença digital, alinhando a imagem institucional aos valores da GS Advogados.",
  },

  {
    name: "Celma Pamplona",
    role: "Tesoureira",
    photo: "/team/user19.png",
    gender: "female",
    bio: "Responsável pela tesouraria, garantindo controlo de fluxos de caixa, pagamentos, recebimentos e relação com instituições bancárias. Atua com rigor e transparência na gestão financeira diária.",
  },

  {
    name: "Inocêncio Cristóvão",
    role: "Oficial de diligência",
    photo: "/team/user20.png",
    gender: "male",
    bio: "Desempenha um papel vital na condução e execução de diversas atividades externas. É responsável pela entrega e recolha de documentos legais, notificações judiciais e correspondências importantes, garantindo que todos os prazos sejam cumpridos.",
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
                  <div
                    className={`relative aspect-[4/5] w-full overflow-hidden ${
                      m.gender == "female"
                        ? "bg-[radial-gradient(circle_at_center,#B41E0B,#B41E0B)]"
                        : "bg-white"
                    }`}
                  >
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
