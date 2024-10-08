import SectionTitle from '@/components/global/section_title';
import Link from 'next/link';

export default function ServicesPageAbout({ params }: any) {
  return (
    <section className="w-full bg-white lg:py-20 py-10">
      <div className="w-11/12 lg:w-9/12 mx-auto flex lg:flex-nowrap items-start flex-wrap">
        <article className="lg:w-1/2 w-full lg:pr-20 pr-0">
          <SectionTitle text="QUE RETENIR SUR NOUS?" />
          <h1 className="font-bold text-4xl lg:text-5xl pt-3 text-blue_itm_primary">
            Nous fournissons des services exclusifs pour votre entreprise
          </h1>
        </article>
        <article className="lg:w-1/2 w-full lg:pt-0 pt-3">
          <p>
            De Lubumbashi à la conquête du monde,nous avons écrit une success
            story exceptionnelle. Résiliente face aux défis, nous savons saisir
            les opportunités pour accélérer le développement et se positionner
            comme un acteur global. Notre histoire est celle d'hommes et de
            femmes passionnés qui, avec une vision précise, avons reussi à
            transformer un projet local en une entreprise internationale
            prospère. Aujourd'hui, ITM Holding est un modèle d'inspiration pour
            tous ceux qui rêvent de bâtir un avenir meilleur.
          </p>
          <p className="pt-3">
            De Lubumbashi à la conquête du monde,nous avons écrit une success
            story exceptionnelle. Résiliente face aux défis, nous savons saisir
            les opportunités pour accélérer le développement et se positionner
            comme un acteur global. Notre histoire est celle d'hommes et de
            femmes passionnés qui, avec une vision précise, avons reussi à
            transformer un projet local en une entreprise internationale
            prospère. Aujourd'hui, ITM Holding est un modèle d'inspiration pour
            tous ceux qui rêvent de bâtir un avenir meilleur.
          </p>
          <Link
            href={'/'}
            className="font-bold mt-5 px-5 py-3 bg-blue_itm_primary text-white block w-fit rounded-full hover:bg-blue_itm_aqua_marine"
          >
            Contact us
          </Link>
        </article>
      </div>
    </section>
  );
}
