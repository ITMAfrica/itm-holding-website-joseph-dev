import { getDictionary } from '@/get-dictionary';

export default function AboutPageMetrics({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.about.metrics;
  console.log(params);
  return (
    <section className="h-fit bg-[url('../public/pages/print.png')] bg-right bg-no-repeat">
      <main className="flex flex-wrap items-center w-full lg:w-10/12 mx-auto lg:py-20 py-10">
        <div className="w-11/12 mx-auto lg:w-1/2 lg:-rotate-24">
          <div className="w-full flex flex-wrap items-center justify-center">
            <div className="w-[200px] lg:rotate-24 shadow-2xl lg:w-[270px] h-[200px] lg:h-[270px] lg:mb-0 mb-5 flex flex-wrap items-center justify-center  bg-blue_itm_primary rounded-full">
              <div className="w-fit text-white_itm md:p-5 p-3">
                <h3 className="font-bold text-center uppercase md:text-xl text-lg">
                  {data.mission.title}
                </h3>
                <p className="text-xs lg:text-sm text-center pt-3 font-open">
                  {data.mission.text}
                </p>
              </div>
            </div>
            <div className="w-[200px] lg:rotate-24 shadow-2xl lg:w-[200px] h-[200px] lg:translate-y-[10%] lg:h-[200px] lg:mb-0 mb-5 flex flex-wrap items-center justify-center  md:mx-5 mx-2 bg-blue_itm_secondary rounded-full">
              <div className="w-fit text-white  md:p-5 p-3">
                <h3 className="font-bold text-center uppercase  lg:text-xl text-lg">
                  {data.vision.title}
                </h3>
                <p className="text-xs lg:text-sm text-center pt-3 font-open">
                  {data.vision.text}
                </p>
              </div>
            </div>
            <div className="w-[200px] lg:rotate-24 shadow-2xl lg:translate-x-[12%] lg:-translate-y-[10%] lg:w-[220px] h-[200px] lg:h-[220px] flex flex-wrap items-center justify-center  bg-blue_itm_aqua_marine rounded-full">
              <div className="w-fit text-white  md:p-5 p-3">
                <h3 className="font-bold text-center uppercase lg:text-xl text-lg">
                  {data.values.title}
                </h3>
                <p className="text-xs lg:text-sm text-center pt-3 font-open">
                  {data.values.text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-11/12 mx-auto lg:pt-0 pt-10">
          <p className="text-black_itm/70 text-base lg:text-base font-open">
            {data.right.text}
          </p>
          <div className="w-full flex flex-wrap items-center justify-between pt-5">
            <div className="w-1/2  pt-5 pr-5">
              <h4 className="font-extrabold text-4xl lg:text-6xl text-blue_itm_aqua_marine">
                {data.right.number.agents.number}
              </h4>
              <h3 className="font-bold pt-1 text-sm lg:text-lg">
                {data.right.number.agents.title}
              </h3>
              <p className="font-normal text-xs lg:text-base pt-1 font-open">
                {data.right.number.agents.description}
              </p>
            </div>
            <div className="w-1/2 pt-5 pr-5">
              <h4 className="font-extrabold text-4xl lg:text-6xl text-blue_itm_aqua_marine">
                {data.right.number.recruiting.number}
              </h4>
              <h3 className="font-bold pt-1 text-sm lg:text-lg">
                {data.right.number.recruiting.title}
              </h3>
              <p className="font-normal text-xs lg:text-base pt-1 font-open">
                {data.right.number.recruiting.description}
              </p>
            </div>
            <div className="w-1/2 pr-5 pt-5">
              <h4 className="font-extrabold text-4xl lg:text-6xl text-blue_itm_aqua_marine">
                {data.right.number.country.number}
              </h4>
              <h3 className="font-bold pt-1 text-sm lg:text-lg">
                {data.right.number.country.title}
              </h3>
              <p className="font-normal text-xs lg:text-base pt-1 font-open">
                {data.right.number.country.description}
              </p>
            </div>
            <div className="w-1/2 pt-5 pr-5">
              <h4 className="font-extrabold text-4xl lg:text-6xl text-blue_itm_aqua_marine">
                {data.right.number.company.number}
              </h4>
              <h3 className="font-bold pt-1 text-sm lg:text-lg">
                {data.right.number.company.title}
              </h3>
              <p className="font-normal text-xs lg:text-base pt-1 font-open">
                {data.right.number.company.description}
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
