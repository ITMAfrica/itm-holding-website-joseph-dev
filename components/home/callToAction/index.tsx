export default function HomeCallToAction({ params }: { params: any }) {
  return (
    <section className="py-16 flex justify-center rounded-md overflow-hidden">
      <div className="w-9/12 h-[350px] flex flex-wrap items-center justify-center bg-cover rounded-3xl overflow-hidden bg-no-repeat bg-[url('../public/bg.png')] bg-black/40">
        <div className="w-full text-white">
          <h1 className="text-center text-2xl md:text-5xl px-3 md:px-0  font-bold">
            Boostez votre
            <span className="text-blue_itm_aqua_marine"> carrière </span>
            en un clique
          </h1>
          <p className="text-center pt-2 pb-5 text-xl w-11/12 m-auto md:w-full">
            Trouvez les meilleurs offres en RDC et ailleurs
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-2 bg-blue_itm_aqua_marine rounded-2xl">
              Inscrivez-vous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
