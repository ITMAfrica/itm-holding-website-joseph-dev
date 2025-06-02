import SectionTitle from '@/components/global/section_title';
import img from '@/public/pages/main/main3.png';
import Image from 'next/image';

export default function StepsLandingPage({ params }: { params: any }) {
  return (
    <section className="md:flex justify-center w-full mx-auto py-10 bg-white">
      <div className="w-10/12 mx-auto flex md:flex-nowrap flex-wrap items-center  justify-center lg:justify-between">
        <div className="md:flex items-center">
          <div className="w-fit mx-auto md:w-3/5 lg:w-1/2">
            <Image
              src={img}
              alt="About image"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 pt-10 md:pt-0 md:mr-14">
            <SectionTitle text="ITM AFRICA" />
            <h1 className="text-blue_itm_good text-3xl font-bold mb-2">
              ITM HR est votre partenaire de confiance pour une croissance
              durable.
            </h1>
            <div className="mb-5 lg:w-11/12 font-open font-lg text-black_itm">
              <h3 className="text-lg font-semibold text-blue_itm_aqua_marine">
                Notre Vision
              </h3>
              <p className="text-lg mb-4">
                Construire un avenir réussi pour tous.
              </p>
              <h3 className="text-lg font-semibold text-blue_itm_aqua_marine">
                Notre Mission
              </h3>
              <p className="text-lg mb-4">
                Stimuler une croissance durable et l’excellence opérationnelle
                pour l’ensemble de nos parties prenantes.
              </p>
              <h3 className="text-lg font-semibold text-blue_itm_aqua_marine">
                Nos Valeurs
              </h3>
              <p className="text-lg">Qualité – Intégrité – Loyauté</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
