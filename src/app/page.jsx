import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className=" flex items-center justify-end pr-10 md:pr-0 md:justify-between container absolute top-0 left-1/2 transform -translate-x-1/2  my-8 md:my-16 z-10">
        <Image
          src="/logo-oplan-v-light.png"
          width={170}
          height={80}
          alt="Logo Oplan Saúde"
          className="md:w-[250px]"
        />
        <a
          href="/"
          className="hidden md:block text-white p-3 px-6 border-2 border-[#31A8E6] rounded-full"
        >
          Site Institucional
        </a>
      </header>

      {/* ******************* HERO ******************* */}

      <section className="bg-gradient-to-tr from-[#326D90] via-[#404E68] via-70% to-[#404E68] h-[95vh] w-full relative">
        <div className="h-full w-full backround-oplan flex items-end justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center h-[90%]  container mx-auto">
            <div className=" h-full w-full order-2 md:order-1 flex flex-col items-center md:items-start justify-start md:justify-center">
              <h1 className="font-display text-white text-4xl md:text-[5rem] leading-[1.2] uppercase font-black md:text-start">
                A sua melhor <br />
                escolha em Plano de Saúde
              </h1>
              <p className="text-[#BFD1EC] text-base md:text-xl my-3 md:text-start md:mr-32">
                Preços acessíveis, atendimento humanizado, ótima rede
                credenciada. Mais saúde para sua família.
              </p>
              <a
                src="/"
                className="flex items-center gap-x-2 md:float-start font-display bg-gradient-to-br from-[#31D0E6] via-[#31A8E5] to-[#1F81C8] p-4 px-6 rounded-sm  border-2 border-[#2FC1FF] drop-shadow-lg mt-2 lg:mt-6 hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer"
              >
                <Image
                  src="/icon-wpp.png"
                  width={28}
                  height={28}
                  alt="Ícone Whatsapp"
                />
                <p className="text-white font-semibold text-base md:text-xl">
                  Solicite uma cotação
                </p>
              </a>
            </div>

            <div className="h-[50%] md:h-full w-full  order-1 md:order-2 flex items-end justify-center">
              <Image
                src="/familia-oplan-saude.png"
                width={880}
                height={400}
                alt="Logo Oplan Saúde"
                className="static md:absolute"
              />
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1718660191">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
              fill="#e4eef7"
            ></path>
          </svg>
        </div>
      </section>

      {/* ******************* SAÚDE INTEGRAL ******************* */}

      <section className="w-full relative md:hidden">
        <div className="my-20 container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-2xl  uppercase tracking-wider font-semibold my-10 text-[#404E68]">
            Saúde Integral
          </h2>
          <Image
            src="/oplan-saude-integrada-mobile.png"
            width={1300}
            height={500}
            alt="Gráfico Oplan Saúde Integral"
          />

          <div className="w-full flex flex-col items-center gap-y-3 -mt-40">
            <div className="w-[90%] p-5  bg-gradient-to-tr from-white/30 to-white/20 shadow-2xl shadow-[#c1cddc] rounded-xl border-4 border-white backdrop-blur-sm hover">
              <Image
                src="/icon-hospital.png"
                width={64}
                height={64}
                alt="Ícone Rede Própria"
              />
              <p className="font-display text-lg font-bold text-start text-[#4E6381]">
                Rede Própria de Hospital <br /> e Centros Médicos
              </p>
              <p className="text-start text-base mt-3">
                Para garantia total do <br /> seu atendimento
              </p>
            </div>
            <div className="w-[90%] p-5  bg-gradient-to-tr from-white/30 to-white/20 shadow-2xl shadow-[#c1cddc] rounded-xl border-4 border-white backdrop-blur-sm hover">
              <Image
                src="/icon-devices.png"
                width={64}
                height={64}
                alt="Ícone Telemedicina"
              />
              <p className="font-display text-lg font-bold text-start text-[#4E6381]">
                Telemedicina <br />
                Adulto e Pediátrico
              </p>
              <p className="text-start text-base mt-3">
                Consultas virtuais disponíveis a qualquer hora e de qualquer
                lugar
              </p>
            </div>
            <div className="w-[90%] p-5  bg-gradient-to-tr from-white/30 to-white/20 shadow-2xl shadow-[#c1cddc] rounded-xl border-4 border-white backdrop-blur-sm hover">
              <Image
                src="/icon-rede.png"
                width={64}
                height={64}
                alt="Ícone Ampla e Qualificada Rede Credenciada"
              />
              <p className="font-display text-lg font-bold text-start text-[#4E6381]">
                Ampla e Qualificada <br />
                Rede Credenciada
              </p>
              <p className="text-start text-base mt-3">
                Acesso a excelentes profissionais e serviços de saúde.
              </p>
            </div>
            <div className="w-[90%] p-5  bg-gradient-to-tr from-white/30 to-white/20 shadow-2xl shadow-[#c1cddc] rounded-xl border-4 border-white backdrop-blur-sm hover">
              <Image
                src="/icon-remedio.png"
                width={64}
                height={64}
                alt="Ícone Programa
Saúde Farma"
              />
              <p className="font-display text-lg font-bold text-start text-[#4E6381]">
                Programa <br /> Saúde Farma
              </p>
              <p className="text-start text-base mt-3">
                Medicamento a preço de custo
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden w-full h-[80%] mx-auto md:flex items-center justify-center flex-col relative">
        <div className="my-20 mb-32">
          <h2 className="text-2xl md:text-4xl uppercase tracking-wider font-semibold my-10 text-[#404E68]">
            Saúde Integral
          </h2>
          <Image
            src="/oplan-saude-integral.png"
            width={1300}
            height={500}
            alt="Gráfico Oplan Saúde Integral"
          />
        </div>
      </section>

      {/* ******************* Líder em saúde na Costa Verde ******************* */}

      <section className="h-[90vh] bg-gradient-to-t from-[#3F506A] to-[#3170AB] relative">
        <div class="custom-shape-divider-top-1718665655">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div class="custom-shape-divider-bottom-1718665667">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* ******************* PRODUTOS OPLAN ******************* */}

      <section className="h-[80vh]">
        <h3 className="text-2xl md:text-4xl uppercase tracking-wider font-semibold my-10 text-[#404E68]">
          CONHEÇA NOSSOS PLANOS
        </h3>
      </section>
    </>
  );
}
