export default function ServicesPageBanner({ params }: { params: any }) {
  return (
    <section className="w-full md:h-[60vh] h-[45vh] sm:py-10 py-4">
      <div className="flex items-center w-11/12 mx-auto text-white bg-cover bg-[url('../public/assets/bg/bg.banner.services.png')] h-full rounded-xl">
        <section className="md:w-1/2 md:ml-20 ml-5 mr-4 sm:mr-0">
          <h1 className="md:text-5xl text-2xl font-bold sm:mb-4 mb-2">
            Découvrez nos services
          </h1>
          <p className="">
            Née à Lubumbashi en 2011, ITM Holding a conquis le monde en quelques
            années. Avec plus de 10 500 agents dans 18 pays et des centaines de
            recrutements chaque mois, cette entreprise est devenue un acteur
            mondial des ressources humaines, prouvant que l'ambition n'a pas de
            frontières.
          </p>
        </section>
      </div>
    </section>
  );
}
