import { getDictionary } from '@/get-dictionary';
import Link from 'next/link';

export default function CallToAction({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.global.callToAction;
  return (
    <section className="md:py-16 py-8 flex justify-center rounded-md overflow-hidden">
      <div className="md:w-9/12 w-11/12 md:h-[350px] h-[300px] flex flex-wrap items-center justify-center bg-cover rounded-3xl overflow-hidden bg-no-repeat bg-[url('../public/bg.png')] bg-black/40">
        <div className="w-full text-white">
          <h1 className="text-center text-3xl md:text-5xl px-3 md:px-0 font-bold">
            {data.paragraph1}
            <span className="text-blue_itm_aqua_marine">{data.career}</span>
            {data.click}
          </h1>
          <p className="text-center pt-2 pb-5 text-xl w-11/12 m-auto md:w-full">
            {data.subtitle}
          </p>
          <div className="flex justify-center">
            <Link
              href={data.btn.link}
              className="px-6 py-2 bg-blue_itm_aqua_marine rounded-2xl"
              title={data.btn.title}
            >
              {data.btn.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
