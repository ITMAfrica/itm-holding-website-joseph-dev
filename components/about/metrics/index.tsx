export default function AboutPageMetrics({ params }: { params: any }) {
  console.log(params)
  return (
    <section className="h-fit">
      <main className="flex flex-wrap items-center w-full lg:w-9/12 mx-auto lg:py-20 py-10">
        <div className="w-11/12 mx-auto lg:w-1/2 lg:-rotate-24">
          <div className="w-full flex flex-wrap items-center justify-center">
            <div className="w-[200px] lg:rotate-24 shadow-2xl lg:w-[270px] h-[200px] lg:h-[270px] lg:mb-0 mb-5 flex flex-wrap items-center justify-center  bg-blue_itm_primary rounded-full">
              <div className="w-fit text-white_itm md:p-5 p-3">
                <h3 className="font-bold text-center uppercase md:text-xl text-lg">
                  Notre Mission
                </h3>
                <p className="text-xs lg:text-sm text-center pt-3">
                  Assurer la croissance et la durabilité de la capacité opérationnelle pour nos parties prenantes
                </p>
              </div>
            </div>
            <div className="w-[200px] lg:rotate-24 shadow-2xl lg:w-[200px] h-[200px] lg:translate-y-[10%] lg:h-[200px] lg:mb-0 mb-5 flex flex-wrap items-center justify-center  md:mx-5 mx-2 bg-blue_itm_secondary rounded-full">
              <div className="w-fit text-white  md:p-5 p-3">
                <h3 className="font-bold text-center uppercase  lg:text-xl text-lg">
                  Notre vision
                </h3>
                <p className="text-xs lg:text-sm text-center pt-3">
                  Assurer la réussite de tous
                </p>
              </div>
            </div>
            <div className="w-[200px] lg:rotate-24 shadow-2xl lg:translate-x-[12%] lg:-translate-y-[10%] lg:w-[220px] h-[200px] lg:h-[220px] flex flex-wrap items-center justify-center  bg-blue_itm_aqua_marine rounded-full">
              <div className="w-fit text-white  md:p-5 p-3">
                <h3 className="font-bold text-center uppercase lg:text-xl text-lg">
                  Nos valeurs
                </h3>
                <p className="text-xs lg:text-sm text-center pt-3">
                  Loyauté - Intégrité - Qualité
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-11/12 mx-auto lg:pt-0 pt-10">
          <p className="text-black_itm/70 text-xs lg:text-sm">
            ITM a fait ses preuves en matière de placements réussis, de clients satisfaits et d'années d'expérience dans l'industrie. Notre tableau de bord de recrutement en ligne révolutionne la façon dont les chercheurs d'emploi trouvent des opportunités et dont les recruteurs entrent en contact avec les meilleurs talents.
          </p>
          <div className="w-full flex flex-wrap items-center justify-between pt-5">
            <div className="w-1/2  pt-5 pr-5">
              <h4 className="font-extrabold text-4xl lg:text-6xl text-blue_itm_aqua_marine">
                + 10 500
              </h4>
              <h3 className="font-bold pt-1 text-sm lg:text-lg">
                Agents ous notre gestion
              </h3>
              <p className="font-normal text-xs lg:text-base pt-1">
                Gagnez du temps grâce à notre processus de recrutement simplifié.
              </p>
            </div>
            <div className="w-1/2 pt-5 pr-5">
              <h4 className="font-extrabold text-4xl lg:text-6xl text-blue_itm_aqua_marine">
                + 500
              </h4>
              <h3 className="font-bold pt-1 text-sm lg:text-lg">
                Recrutements par mois
              </h3>
              <p className="font-normal text-xs lg:text-base pt-1">
                Gagnez du temps grâce à notre processus de recrutement simplifié.
              </p>
            </div>
            <div className="w-1/2 pr-5 pt-5">
              <h4 className="font-extrabold text-4xl lg:text-6xl text-blue_itm_aqua_marine">
                + 18
              </h4>
              <h3 className="font-bold pt-1 text-sm lg:text-lg">
                Pays dans le monde
              </h3>
              <p className="font-normal text-xs lg:text-base pt-1">
                Gagnez du temps grâce à notre processus de recrutement simplifié.
              </p>
            </div>
            <div className="w-1/2 pt-5 pr-5">
              <h4 className="font-extrabold text-4xl lg:text-6xl text-blue_itm_aqua_marine">
                + 300
              </h4>
              <h3 className="font-bold pt-1 text-sm lg:text-lg">
                Entreprises partenaires
              </h3>
              <p className="font-normal text-xs lg:text-base pt-1">
                Gagnez du temps grâce à notre processus de recrutement simplifié.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
