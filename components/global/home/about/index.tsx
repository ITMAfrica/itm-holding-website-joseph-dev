import { getDictionary } from '@/get-dictionary';
import { dictionary } from '@/types';
import ButtonOulined from '../../buttons/btn_outlined';

export default function HomeAbout({ params }: { params: any }) {
  const lang: string = params.lang;
  const dictionary: dictionary = getDictionary(lang);
  const data: any = dictionary?.cd?.pages.home.about;
  return (
    <section className="flex justify-between w-10/12 mx-auto h-screen py-20">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <div className="border-l-2 pl-10 mr-20">
          <h1 className="font-bold text-blue_itm_aqua_marine mb-2">
            {data.title}
          </h1>
          <h2 className="text-blue_itm_primary text-5xl font-bold mb-2">
            {data.subtitle}
          </h2>
          <p className="mb-10">{data.paragraph}</p>

          <ButtonOulined {...data.btnMore} />
        </div>
      </div>
    </section>
  );
}
