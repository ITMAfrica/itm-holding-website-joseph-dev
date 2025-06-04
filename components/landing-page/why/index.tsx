import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import CardLandingPage from './card';

export default function WhyUsLandingPageSection({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.why;
  const texts = [
    {
      title: "Chefs d'entreprise et employeurs",
      text: 'Atteignez vos objectifs d’entreprise grâce à nos stratégies RH complètes, notre accompagnement en conformité et nos services d’optimisation des effectifs, conçus pour stimuler la croissance et garantir l’excellence opérationnelle.',
    },
    {
      title: 'Professionnels RH et managers',
      text: 'Accédez à des outils RH innovants, aux meilleures pratiques et à un accompagnement continu pour optimiser vos processus RH, renforcer l’engagement des collaborateurs et gérer efficacement les talents sur plusieurs marchés.',
    },
    {
      title: "Chercheurs d'emploi et diplômés",
      text: 'Développez votre potentiel grâce à des opportunités de carrière, des programmes de formation et un environnement propice à la croissance et à la reconnaissance de vos contributions.',
    },
  ];
  return (
    <section className="bg-white py-4">
      <div>
        <div className="flex items-center md:w-10/12 w-11/12 mx-auto py-16">
          <div className="m-auto">
            <div className="md:flex justify-between md:mb-16 mb-10">
              <div>
                <SectionTitle text="ITM HR" />
                <h1 className="text-blue_itm_good text-4xl font-bold mb-4">
                  {data.subtitle}
                </h1>
              </div>
              <p className="md:w-[40%] text-xl font-sans">{data.text}</p>
            </div>
            <div className="w-full md:flex justify-between flex-wrap">
              {data.cards.map((item: any, index: number) => {
                return <CardLandingPage {...item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
