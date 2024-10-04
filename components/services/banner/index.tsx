export default function ServicesPageBanner({ params }: { params: any }) {
  return (
    <section className="w-full h-[60vh] py-10">
      <div className="flex items-center w-11/12 mx-auto text-white bg-cover bg-[url('../public/assets/bg/bg.banner.services.png')] h-full rounded-xl">
        <section className="w-1/2 ml-20">
          <h1 className=" text-4xl lg:text-5xl font-bold mb-4">Découvrez nos services</h1>
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
