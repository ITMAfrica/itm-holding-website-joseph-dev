import SectionTitle from '@/components/global/section_title';
import img from '@/public/pages/main/main.png';
import Image from 'next/image';

export default function AboutLandingPage({ params }: { params: any }) {
  return (
    <section className="md:flex justify-center w-full mx-auto lg:py-20 py-10 bg-[url('../public/pages/print.png')] bg-right bg-no-repeat">
      <div className="w-11/12 mx-auto flex md:flex-nowrap flex-wrap items-center  justify-center lg:justify-between">
        <div className="flex w-full semi-lg:w-2/5 lg:w-1/2">
          <div className="w-fit mx-auto md:w-3/5 lg:w-1/2">
            <Image src={img} alt="About image" width={300} height={300} />
          </div>
          <div className="pt-10 md:pt-0 md:mr-14">
            <SectionTitle text="QUI SOMMES-NOUS ?" />
            <h1 className="text-blue_itm_good text-5xl font-bold mb-2">
              ITM AFRICA
            </h1>
            <p className="mb-5 font-open font-lg text-black_itm">
              ITM HR est votre partenaire stratégique en solutions RH en
              Afrique. Avec une expérience solide dans la gestion de plus de 15
              000 employés répartis dans 18 pays, nous personnalisons nos
              service recrutement, placement du personnel, formation et
              conformité RHpour répondre précisément à vos besoins. Que vous
              cherchiez à améliorer l'efficacité opérationnelle ou à renforcer
              votre stratégie de gestion des talents, notre savoir-faire est à
              votre disposition pour vous accompagner vers la réussit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
