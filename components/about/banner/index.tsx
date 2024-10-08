export default function AboutPageBanner({ params }: { params: any }) {
  return (
    <section className="w-full sm:h-[60vh] h-[45vh] sm:py-10 py-5">
      <div className="flex items-center w-11/12 mx-auto text-white bg-cover bg-[url('../public/pages/about/banner.png')] h-full rounded-xl">
        <section className="sm:w-1/2 sm:ml-20 ml-5 mr-4 sm:mr-0">
          <h1 className="md:text-5xl text-3xl font-bold mb-4">
            A PROPOS DE NOUS
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
