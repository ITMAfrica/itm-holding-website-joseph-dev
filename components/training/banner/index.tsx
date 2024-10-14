export default function TrainingPageBanner({ params }: { params: any }) {
  return (
    <section className="w-full sm:h-[60vh] h-[45vh] sm:py-10 py-5">
      <div className="flex items-center w-11/12 mx-auto text-white bg-cover bg-[url('../public/pages/about/banner.png')] h-full rounded-xl">
        <section className="sm:w-1/2 sm:ml-20 ml-5 mr-4 sm:mr-0">
          <h1 className="md:text-5xl text-3xl font-bold mb-4">
            Formations accréditées
          </h1>
          <p className="">
            ITM Holding est actuellement en plein milieu de sa revue à mi-
            parcours en Tanzanie. L'équipe de direction se réunis pour évaluer
            les progrès réalisés jusqu'à présent,
          </p>
        </section>
      </div>
    </section>
  );
}
