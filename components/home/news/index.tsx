import SectionTitle from '@/components/global/section_title';

export default function HomeNews({ params }: { params: any }) {
  return (
    <section className="flex items-center min-h-screen bg-blue_itm_aqua_marine/10">
      <div className="w-full">
        <div className="w-10/12 mx-auto py-16">
          <SectionTitle text="NOS INFOS" center={true} />
          <h3 className="w-2/5 mx-auto text-5xl font-bold text-blue_itm_primary text-center mb-4">
            Découvrez nos dernières actualités
          </h3>
        </div>
      </div>
    </section>
  );
}
