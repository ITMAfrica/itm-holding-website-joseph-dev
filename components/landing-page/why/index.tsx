import SectionTitle from '@/components/global/section_title';
import CardLandingPage from './card';

export default function WhyUsLandingPageSection({ params }: { params: any }) {
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
                <SectionTitle text="ITM AFRICA" />
                <h1 className="text-blue_itm_good text-4xl font-bold mb-4">
                  Pourquoi choisir ITM HR ?
                </h1>
              </div>
              <p className="md:w-[40%] text-lg font-sans">
                Nous proposons des solutions stratégiques et standardisées,
                adaptées à votre entreprise, soutenues par une expertise locale
                approfondie et un engagement envers l’excellence. Que vous soyez
                en phase d’expansion internationale ou d’optimisation locale,
                nous sommes votre partenaire de confiance pour naviguer dans la
                complexité de la gestion des ressources humaines.
              </p>
            </div>
            <div className="w-full md:flex justify-between flex-wrap">
              {texts.map((item, index) => {
                return <CardLandingPage {...item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
