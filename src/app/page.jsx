"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}

export default function Home() {
  // Referência para acessar o ID da seção
  const quemSomosRef = useRef(null);

  const [show1000Delay, setShow1000Delay] = useState(false);
  const [show2000Delay, setShow2000Delay] = useState(false);

  useEffect(() => {
    const timer1000 = setTimeout(() => {
      setShow1000Delay(true); // Após 1000ms (1 segundo), mostrar os textos
    }, 1000);

    const timer2000 = setTimeout(() => {
      setShow2000Delay(true); // Após 1000ms (1 segundo), mostrar os textos
    }, 2000);

    return () => clearTimeout(timer1000, timer2000); // Limpa o temporizador se o componente for desmontado
  }, []); // Executa uma vez após a montagem do componente

  // Configuração do Intersection Observer para o h1
  const { ref, inView, entry } = useInView({
    /* Configurações do Intersection Observer */
    threshold: 0.5, // Define a porcentagem de visibilidade necessária para acionar o callback
    triggerOnce: true, // Ação será disparada apenas uma vez
  });

  return (
    <>
      <header className=" flex items-center justify-end pr-10 md:pr-0 md:justify-between container absolute top-0 left-1/2 transform -translate-x-1/2  my-8 md:my-16 z-10 md:px-10 lg:px-20 xl:px-0">
        <Image
          src="/logo-oplan-v-light.png"
          width={170}
          height={80}
          alt="Logo Oplan Saúde"
          className="md:w-[250px]"
        />
        <a
          href="https://oplan.com.br/"
          className="hidden md:block text-white p-3 px-6 border-2 border-[#31A8E6] rounded-full"
        >
          Site Institucional
        </a>
      </header>

      {/* ******************* HERO ******************* */}

      <section className="bg-gradient-to-tr  from-[#326D90] via-[#404E68] via-70% to-[#404E68] h-[90vh] md:h-[92vh] w-full relative overflow-hidden">
        <div className="h-full w-full backround-oplan flex items-end justify-center md:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-center h-[90%]  container mx-auto">
            <div className=" h-full w-full order-2 md:order-1 flex flex-col items-center md:items-start justify-start md:justify-center">
              <h1
                ref={ref} // Ref para o Intersection Observer
                className={`font-display text-white text-4xl md:text-[3rem] lg:text-6xl xl:text-7xl 2xl:text-[6rem] leading-[1.2] uppercase font-black md:text-start ${
                  show1000Delay ? "slide-in-bottom " : "hidden-bottom "
                }`}
              >
                A sua melhor <br />
                escolha em Plano de Saúde
              </h1>
              <p
                className={`text-[#BFD1EC] text-base md:text-xl my-3 md:text-start md:mr-32 px-10 md:px-0 ${
                  show2000Delay ? "slide-in-bottom " : "hidden-bottom "
                }`}
              >
                Preços acessíveis, atendimento humanizado, ótima rede
                credenciada. Mais saúde para sua família.
              </p>
              <a
                src="/"
                className={`flex items-center relative z-[50] gap-x-2 bg-red-500 md:float-start font-display bg-gradient-to-br from-[#31D0E6] via-[#31A8E5] to-[#1F81C8] p-4 px-10 rounded-sm  border-2 border-[#2FC1FF] drop-shadow-lg mt-2 lg:mt-6 hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer ${
                  show2000Delay
                    ? "slide-in-bottom cursor-pointer"
                    : "hidden-bottom "
                }`}
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
                className={`static md:absolute sm:h-full sm:object-contain md:w-[70%] lg:w-[60%] xl:w-[45%] ${
                  inView ? "slide-in-bottom " : "hidden-bottom "
                }`}
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
          <h2 className="text-3xl  uppercase tracking-wider font-semibold my-10 text-[#404E68]">
            Oplan <br /> Saúde Integral
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
                src="/deco.png"
                width={200}
                height={100}
                alt="Ícone Rede Própria"
                className="absolute bottom-0 left-0 rotate-180 opacity-50"
              />
              <Image
                src="/deco.png"
                width={200}
                height={80}
                alt="Ícone Rede Própria"
                className="absolute top-4 right-4"
              />
              <Image
                src="/icon-hospital.png"
                width={64}
                height={64}
                alt="Ícone Rede Própria"
              />
              <p className="font-display text-lg font-bold text-start text-[#4E6381] mt-3">
                Rede Própria de Hospital <br /> e Centros Médicos
              </p>
              <p className="text-start text-base mt-1">
                Para garantia total do <br /> seu atendimento
              </p>
            </div>
            <div className="w-[90%] p-5  bg-gradient-to-tr from-white/30 to-white/20 shadow-2xl shadow-[#c1cddc] rounded-xl border-4 border-white backdrop-blur-sm hover">
              <Image
                src="/deco.png"
                width={200}
                height={100}
                alt="Ícone Rede Própria"
                className="absolute bottom-0 left-0 rotate-180 "
              />
              <Image
                src="/deco.png"
                width={200}
                height={80}
                alt="Ícone Rede Própria"
                className="absolute top-4 right-4 opacity-50"
              />
              <Image
                src="/icon-devices.png"
                width={64}
                height={64}
                alt="Ícone Telemedicina"
              />
              <p className="font-display text-lg font-bold text-start text-[#4E6381] mt-3">
                Telemedicina <br />
                Adulto e Pediátrico
              </p>
              <p className="text-start text-base mt-1">
                Consultas virtuais disponíveis a qualquer hora e de qualquer
                lugar
              </p>
            </div>
            <div className="w-[90%] p-5  bg-gradient-to-tr from-white/30 to-white/20 shadow-2xl shadow-[#c1cddc] rounded-xl border-4 border-white backdrop-blur-sm hover">
              <Image
                src="/deco.png"
                width={200}
                height={100}
                alt="Ícone Rede Própria"
                className="absolute bottom-0 left-0 rotate-180 opacity-50"
              />
              <Image
                src="/deco.png"
                width={200}
                height={80}
                alt="Ícone Rede Própria"
                className="absolute top-4 right-4"
              />
              <Image
                src="/icon-rede.png"
                width={65}
                height={65}
                alt="Ícone Ampla e Qualificada Rede Credenciada"
              />
              <p className="font-display text-lg font-bold text-start text-[#4E6381] mt-3">
                Ampla e Qualificada <br />
                Rede Credenciada
              </p>
              <p className="text-start text-base mt-1">
                Acesso a excelentes profissionais e serviços de saúde.
              </p>
            </div>
            <div className="w-[90%] p-5  bg-gradient-to-tr from-white/30 to-white/20 shadow-2xl shadow-[#c1cddc] rounded-xl border-4 border-white backdrop-blur-sm hover">
              <Image
                src="/deco.png"
                width={200}
                height={100}
                alt="Ícone Rede Própria"
                className="absolute bottom-0 left-0 rotate-180"
              />
              <Image
                src="/deco.png"
                width={200}
                height={80}
                alt="Ícone Rede Própria"
                className="absolute top-4 right-4 opacity-50"
              />
              <Image
                src="/icon-remedio.png"
                width={64}
                height={64}
                alt="Ícone Programa
Saúde Farma"
              />
              <p className="font-display text-lg font-bold text-start text-[#4E6381] mt-3">
                Programa <br /> Saúde Farma
              </p>
              <p className="text-start text-base mt-1">
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
            className=""
          />
        </div>
      </section>

      {/* ******************* Líder em saúde na Costa Verde ******************* */}

      <section className="pb-40 md:pb-20  bg-gradient-to-t from-[#3F506A] to-[#3170AB] relative lg:px-20 lg:py-20">
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
        <Image
          src="/deco-left-oplan.png"
          width={160}
          height={450}
          alt="Foto Hospital Geral Itaguaí"
          className="invisible md:visible absolute left-0 top-1/2 transform -translate-y-1/2 scale-110 z-[1]"
        />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full relative z-[2]">
          <div className="order-2 md:order-1  h-full w-full flex flex-col justify-start md:justify-center items-start md:px-10">
            <p className="p-1 px-3 text-xs font-semibold tracking-wide text-white mx-auto md:mx-0 md:text-base mb-5 rounded-full bg-[#19A4E0]">
              Conheça mais a Oplan
            </p>
            <p class="font-display text-white text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl leading-snug md:leading-tight uppercase font-bold text-center w-full md:text-start">
              Líder em saúde <br /> na Costa Verde
            </p>
            <p className="md:text-start text-[#C4E6FA] leading-6 text-lg md:text-xl lg:text-xl px-4 md:px-0  w-full">
              Oplan é a principal operadora de saúde da Costa Verde e do Rio de
              Janeiro, oferecendo cuidados de qualidade excepcional.
            </p>
            <a
              href="/"
              className="uppercase md:-mb-20 lg:mb-0 text-[#3C5677] font-bold text-md md:text-lg mt-6 bg-white/80 border mx-auto md:mx-0 border-white p-2 px-6 rounded-sm"
            >
              Rede própria
            </a>
          </div>
          <div className="order-1 md:order-2  h-full w-full">
            <Image
              src="/hospital-hgi.png"
              width={750}
              height={600}
              alt="Foto Hospital Geral Itaguaí"
              className="relative z-30"
            />
          </div>
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

        <div className="w-[90%] p-3  bg-sky-500/80 backdrop-blur absolute -bottom-20 lg:-bottom-2 left-1/2 transform -translate-x-1/2 z-50 container rounded-lg flex items-center justify-center">
        <div className="border-2 border-white/40 flex flex-col sm:flex-row items-start justify-center rounded-md py-2 lg:py-4 h-full w-full gap-2">
          <div className="w-full md:w-auto">
            <h4 className="text-3xl text-white">Quem compara, <br />
            escolhe Oplan!</h4>
          </div>
          <div className="w-full px-8 md:w-auto">
          <a
                src="/"
                className={`flex items-center justify-center relative z-[50]  gap-x-2 sm:gap-x-2  md:float-start font-display bg-gradient-to-r from-white to-white/80 p-2 px-3 sm:p-4 mt-2 md:px-10 rounded-lg  border-2 border-white drop-shadow-lg  hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer ${
                  show2000Delay
                    ? "slide-in-bottom cursor-pointer"
                    : "hidden-bottom "
                }`}
              >
                <Image
                  src="/icon-wpp2.png"
                  width={28}
                  height={28}
                  alt="Ícone Whatsapp"
                />
                <p className="text-[#41536C] font-semibold text-sm sm:text-base md:text-xl">
                  Solicite uma cotação
                </p>
              </a>
          </div>
        </div>
        </div>

      </section>

      {/* ******************* PRODUTOS OPLAN ******************* */}

      <section className=" py-20 pb-40">
        <h3 className="text-2xl md:text-4xl uppercase tracking-wider font-semibold my-10 text-[#404E68]">
          CONHEÇA <br /> NOSSOS PLANOS
        </h3>
        <div className="container">
          <div className="carousel carousel-center p-4 max-w-7xl space-x-4 bg-neutral rounded-box">
            <font></font>
            <div className="carousel-item">
              <font></font>
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box"
              />
              <font></font>
            </div>{" "}
            <font></font>
            <div className="carousel-item">
              <font></font>
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="rounded-box"
              />
              <font></font>
            </div>{" "}
            <font></font>
            <div className="carousel-item">
              <font></font>
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="rounded-box"
              />
              <font></font>
            </div>{" "}
            <font></font>
            <div className="carousel-item">
              <font></font>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="rounded-box"
              />
              <font></font>
            </div>{" "}
            <font></font>
            <div className="carousel-item">
              <font></font>
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box"
              />
              <font></font>
            </div>{" "}
            <font></font>
            <div className="carousel-item">
              <font></font>
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="rounded-box"
              />
              <font></font>
            </div>{" "}
            <font></font>
            <div className="carousel-item">
              <font></font>
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="rounded-box"
              />
              <font></font>
            </div>
            <font></font>
          </div>
        </div>

      </section>

      {/* ************* FOOTER ************** */}

      <section className=" rotate-180  relative  flex items-center justify-center bg-gradient-to-tr  from-[#326D90] via-[#404E68] via-70% to-[#404E68]">
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
        <div className="container rotate-180">
          <div className="flex flex-col md:flex-row items-end justify-center w-full">
            <div className=" w-full md:w-[50%]  mt-20 md:mt-32 flex flex-col md:items-start justify-end items-center">
              <div className="flex items-center gap-x-6">
                <a href="/">
                  <Image
                    src="/logo-oplan-v-light.png"
                    width={180}
                    height={20}
                    alt="Logo Oplan"
                  />
                </a>
              </div>
              <p className="text-white mt-3">Horário de funcionamento:</p>
              <p className="text-xs text-[#C4E6FA] text-center">
                Segunda a quinta-feira: 08:00 - 17:00 Sexta-feira: 08:00 - 16:00
              </p>
            </div>
            <div className=" w-full md:w-[50%]   flex h-32 md:h-44 flex-col items-center justify-end mt-6 -mb-4">
              <p className="text-white text-bold mb-3">Falar com a Oplan</p>
              <div className="flex items-center gap-x-1">
                <a href="/">
                  <Image
                    src="/icon-whatsapp.png"
                    width={80}
                    height={80}
                    alt="Ícone WhatsApp"
                    className="mx-auto mb-1"
                  />
                </a>
                <a href="/">
                  <Image
                    src="/icon-email.png"
                    width={80}
                    height={80}
                    alt="Ícone E-mail"
                    className="mx-auto mb-1"
                  />
                </a>
                <a href="/">
                  <Image
                    src="/icon-telefone.png"
                    width={80}
                    height={80}
                    alt="Ícone Telefone"
                    className="mx-auto mb-1"
                  />
                </a>
                <a href="/">
                  <Image
                    src="/icon-enedeco.png"
                    width={80}
                    height={80}
                    alt="Ícone Endereço"
                    className="mx-auto mb-1"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-white text-sm md:text-lg text-center my-16">
              Copyright © 2024 Oplan Operadora de Saúde Todos os direitos
              reservados.
            </p>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1718321215 relative">
          <div className="h-2 w-full bg-[#F0E0E0] absolute -top-1 z-[1000]"></div>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stop-color="#F0E0E0" />
                <stop offset="50%" stop-color="#F0E0E0" />
                <stop offset="100%" stop-color="#F0E0E0" />
              </linearGradient>
            </defs>

            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="url(#gradient)"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="url(#gradient)"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="url(#gradient)"
            ></path>
          </svg>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stop-color="#F0E0E0" />
                <stop offset="50%" stop-color="#F0E0E0" />
                <stop offset="100%" stop-color="#F0E0E0" />
              </linearGradient>
            </defs>

            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="url(#gradient)"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="url(#gradient)"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="url(#gradient)"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
