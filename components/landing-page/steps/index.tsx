import SectionTitle from '@/components/global/section_title';
import img from '@/public/pages/main/main3.png';
import Image from 'next/image';

export default function StepsLandingPage({ params }: { params: any }) {
  return (
    <section className="md:flex justify-center w-full mx-auto py-10 bg-white">
      <div className="w-10/12 mx-auto flex md:flex-nowrap flex-wrap items-center  justify-center lg:justify-between">
        <div className="md:flex items-center">
          <div className="w-fit mx-auto md:w-3/5 lg:w-1/2">
            <Image
              src={img}
              alt="About image"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 pt-10 md:pt-0 md:mr-14">
            <SectionTitle text="LOREM IPSUM" />
            <h1 className="text-blue_itm_good text-3xl font-bold mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="mb-5 lg:w-11/12 font-open font-lg text-black_itm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the Lorem Ipsum is simply dummy text of the
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
