import SectionTitle from '@/components/global/section_title';

export default function AboutMainAdventure({ params }: { params: any }) {
  return (
    <section className="w-full transition-all  overflow-hidden bg-white">
      <div className="w-full h-full md:flex items-center justify-center ">
        <div className="md:w-1/2 w-full py-10 flex">
          <div className="w-1/12 md:w-2/12"></div>
          <div className="w-10/12 md:w-8/12 font-medium">
            <SectionTitle text="QUE RETENIR SUR NOUS?" />
            <h1 className="font-bold  text-3xl lg:text-4xl pb-5 text-blue_itm_primary">
              Notre aventure
            </h1>
            <p className="w-fit pb-5">
              De Lubumbashi à la conquête du monde,nous avons écrit une success
              story exceptionnelle. Résiliente face aux défis, nous savons
              saisir les opportunités pour accélérer le développement et se
              positionner comme un acteur global. Notre histoire est celle
              d'hommes et de femmes passionnés qui, avec une vision précise,
              avons reussi à transformer un projet local en une entreprise
              internationale prospère. Aujourd'hui, ITM Holding est un modèle
              d'inspiration pour tous ceux qui rêvent de bâtir un avenir
              meilleur.
            </p>
          </div>
          <div className="w-1/12 md:w-2/12"></div>
        </div>
        <div className="md:w-1/2 w-full h-[450px] overflow-hidden">
          <div className="w-full h-full transition-all duration-1000 hover:scale-110 bg-cover bg-center bg-[url('../public/pages/about/about1.png')]"></div>
        </div>
      </div>
    </section>
  );
}
