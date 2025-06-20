import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import CardLandingPage from './card';

export default function WhyUsLandingPageSection({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.why;

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
              <p className="md:w-[50%] text-xl font-sans font-lg">
                {data.text}
              </p>
            </div>
            <div className="w-full md:flex justify-between flex-wrap">
              {data.cards.map((item: any, index: number) => {
                return <CardLandingPage {...item} key={index} index={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
