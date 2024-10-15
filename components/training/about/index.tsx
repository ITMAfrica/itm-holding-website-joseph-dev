import Image from 'next/image';
import image1 from '@/public/pages/training/training1.png';

export default function TrainingageAbout({ params }: { params: any }) {
  return (
    <section className="bg-white h-screen  bg-[url('../public/pages/about/bg_aside.png')] bg-left bg-no-repeat lg:py-20 py-10">
      <div className="w-10/12 mx-auto">
        <div className="w-3/5 mx-auto text-center mb-16">
          <h2 className="font-bold text-xs text-blue_itm_aqua_marine">
            LOREM IPSUME
          </h2>
          <h1 className="text-blue_itm_primary font-bold text-5xl mb-3">
            Découvrez nos formations
          </h1>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of thLorem Ipsum is simply dummy
            text of the printing and typesetting industry
          </p>
        </div>
        <div className="w-10/12 mx-auto">
          <article className="bg-red-400 py-10 px-4 w-fit flex">
            <div>
              <h5 className="font-bold text-blue_itm_primary text-2xl">
                Lorem Ipsum is simply dummy
              </h5>
              <p className="w-2/4">
                Chaque séance est conçue pour améliorer des compétences
                spécifiques telles que la communication, la résolution de
                problèmes et la gestion du temps
              </p>
            </div>
            <div>
              <Image
                src={image1}
                alt=""
                className=""
                width={100}
                height={100}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
