import Image from "next/image";

export default function Home() {
  return (
<>
    <header className=" flex items-center justify-end pr-10 md:pr-0 md:justify-between container absolute left-1/2 transform -translate-x-1/2  my-16">
      <Image src="/logo-oplan-v-light.png" width={170} height={80} alt="Logo Oplan Saúde" />
      <a href="/" className="hidden md:block text-white p-3 px-6 border-2 border-[#31A8E6] rounded-full">Site Institucional</a>
    </header>
    <section className="bg-gradient-to-tr from-[#326D90] via-[#404E68] via-70% to-[#404E68] h-[90vh] w-full ">

      <div className="h-full w-full backround-oplan flex items-end justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center h-[80%]  container mx-auto">





<div className=" h-full w-full order-2 md:order-1 flex flex-col items-center md:items-start justify-start md:justify-center">
  <h1 className="font-display text-white text-5xl md:text-7xl uppercase font-black md:text-start">
  A sua melhor <br />
  escolha em Plano de Saúde
  </h1>
  <p className="text-[#BFD1EC] text-base md:text-xl my-6 md:text-start">Preços acessíveis, atendimento humanizado, ótima rede credenciada. Mais saúde para sua família.</p>
  <a className="inline-block md:float-start font-display bg-gradient-to-br from-[#31D0E6] via-[#31A8E5] to-[#1F81C8] p-4 px-8 rounded-sm  border-2 border-[#2FC1FF] mt-6 drop-shadow-lg">
    <p className="text-white font-semibold">Solicite uma cotação</p>
  </a>
</div>

<div className="h-full w-full  order-1 md:order-2 flex items-end justify-center">
<Image src="/familia-oplan-saude.png" width={780} height={400} alt="Logo Oplan Saúde" className="absolute" />

</div>



</div>
      </div>

    </section>


    <section>
      <h2>Saúde Integral</h2>
    </section>
</>
  );
}
