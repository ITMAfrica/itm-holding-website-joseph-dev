import SectionTitle from '@/components/global/section_title';
import img from '@/public/pages/main/main.png';
import Image from 'next/image';

export default function AboutLandingPage({ params }: { params: any }) {
  return (
    <section className="md:flex justify-center w-full mx-auto lg:py-20 py-10 bg-[url('../public/pages/print.png')] bg-right bg-no-repeat">
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
            <SectionTitle text="QUI SOMMES-NOUS ?" />
            <h1 className="text-blue_itm_good text-5xl font-bold mb-2">
              ITM HR
            </h1>
            <p className="mb-5 lg:w-11/12 font-open font-lg text-black_itm">
              En tant que membre d’ITM Holding, ITM HR est votre partenaire
              stratégique et le principal fournisseur de solutions en Ressources
              Humaines, offrant des services personnalisés dans 18 pays
              d’Afrique. Nous tirons parti des ressources et de l’expertise d’un
              conglomérat panafricain pour fournir des solutions conformes et
              efficaces, soutenant le succès à long terme de votre entreprise.
              Avec un fort accent sur l’excellence opérationnelle et le
              développement des employés, ITM HR est votre partenaire de
              confiance pour une croissance durable. Que vous souhaitiez
              améliorer l’efficacité opérationnelle ou renforcer votre stratégie
              de gestion des talents, nous avons l’expertise pour vous
              accompagner vers la réussite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
