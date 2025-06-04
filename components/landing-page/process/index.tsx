import SectionTitle from '@/components/global/section_title';
import img from '@/public/pages/main/main2.png';
import Image from 'next/image';

export default function ProcessLandingPage({ params }: { params: any }) {
  return (
    <section className="md:flex justify-center w-full mx-auto py-10 ">
      <div className="w-10/12 mx-auto flex md:flex-nowrap flex-wrap items-center  justify-center lg:justify-between">
        <div className="md:flex items-center">
          <div className="md:w-1/2 pt-10 md:pt-0 md:mr-14">
            <SectionTitle text="ITM HR" />
            <h1 className="text-blue_itm_good text-3xl font-bold mb-2">
              Des solutions RH conçues pour améliorer votre entreprise
            </h1>
            <p className="mb-5 lg:w-11/12 font-open text-xl font-lg text-black_itm">
              Du recrutement au développement de la main-d'œuvre, nous
              fournissons des services personnalisés qui améliorent les
              performances et font progresser votre entreprise.
            </p>
          </div>

          <div className="w-fit mx-auto md:w-3/5 lg:w-1/2">
            <Image
              src={img}
              alt="About image"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
