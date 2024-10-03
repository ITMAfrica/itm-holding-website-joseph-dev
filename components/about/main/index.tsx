export default function AboutPageHoldingSection({ params }: { params: any }) {
  return (
    <section className="bg-white bg-[url('../public/pages/about/bg_aside.png')] bg-left bg-no-repeat py-20">
      <div className="w-10/12 flex h-full mx-auto">
        <div className="w-7/12 border">
          <h1 className="text-blue_itm_aqua_marine font-bold ">ITM HOLDING</h1>
          <h2 className="text-5xl font-bold text-blue_itm_primary mb-4">
            Notre entreprise
          </h2>
          <p className="w-11/12">
            Notre histoire est celle d'hommes et de femmes passionnés qui, avec
            une vision précise, avons reussi à transformer un projet local en
            une entreprise internationale prospère. Aujourd'hui, ITM Holding est
            un modèle d'inspiration pour tous ceux qui rêvent de bâtir un avenir
            meilleur. Notre histoire est celle d'hommes et de femmes passionnés
            qui, avec une vision précise, avons reussi à transformer un projet
            local en une entreprise internationale prospère. Aujourd'hui, ITM
            Holding est un modèle d'inspiration pour tous ceux qui rêvent de
            bâtir un avenir meilleur.
          </p>
        </div>
        <div className="w-5/12 border">2</div>
      </div>
    </section>
  );
}
