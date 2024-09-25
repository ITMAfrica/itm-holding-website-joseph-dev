import SectionTitle from '@/components/global/section_title';

export default function AboutPageMileStone({ params }: { params: any }) {
  return (
    <section className="h-screen bg-white">
      <div className="w-11/12 mx-auto py-20">
        <SectionTitle text="NOTRE HISTOIRE" center={true} />
        <h4 className="text-5xl text-blue_itm_primary font-bold text-center mb-3">
          L'épopée de ITM Holding
        </h4>
        <p className="w-3/5 mx-auto text-center">
          Découvrez les étapes clés qui ont façonné ITM Africa en un leader du
          développement du capital humain et des solutions d'affaires en afrique
        </p>
      </div>
    </section>
  );
}
