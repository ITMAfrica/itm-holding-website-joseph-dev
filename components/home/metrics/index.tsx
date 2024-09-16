import HomeMetricsCard from './card';

export default function HomeMetrics({ params }: { params: any }) {
  return (
    <section className="w-10/12 mx-auto my-24">
      <div className="flex justify-between mb-16">
        <h3 className="text-4xl font-bold w-1/4 text-blue_itm_primary">
          Pourquoi nous faire confiance?
        </h3>
        <p className="w-2/5 text-blue_itm_primary">
          Parce que nous sommes un acteur mondial des ressources humaines,
          présent dans plus de 18 pays avec plus de 10 000 agents sous notre
          gestion. En choisissant nos services, vous bénéficiez d'un accès
          privilégié à un vivier de talents mondial et d'une expertise éprouvée
          pour vous accompagner dans tous vos projets.
        </p>
      </div>
      <div className="flex justify-between">
        <HomeMetricsCard
          bg={true}
          number="+500"
          name="Recrutement par mois"
          paragraph="Nous faisons preuve d'expertise dans la recherche de talents"
        />
        <HomeMetricsCard
          bg={false}
          number="+500"
          name="Recrutement par mois"
          paragraph="Nous faisons preuve d'expertise dans la recherche de talents"
        />
        <HomeMetricsCard
          bg={true}
          number="+500"
          name="Recrutement par mois"
          paragraph="Nous faisons preuve d'expertise dans la recherche de talents"
        />
        <HomeMetricsCard
          bg={false}
          number="+500"
          name="Recrutement par mois"
          paragraph="Nous faisons preuve d'expertise dans la recherche de talents"
        />
      </div>
    </section>
  );
}
