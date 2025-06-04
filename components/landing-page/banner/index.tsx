import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/pages/main/bannerMain.png';

export default function BannerLandingPage({ params }: { params: any }) {
  return (
    <section className="h-[75vh] mx-auto relative">
      <div className="w-10/12 mx-auto">
        <div className="h-full py-5">
          <article className="flex items-center md:w-1/2 w-full absolute z-10 top-0 right-0 left-0 bottom-0">
            <div className="sm:ml-14 ml-4 h-fit">
              <h1 className="text-white md:text-5xl text-3xl font-bold mb-20">
                ITM HR votre partenaire stratégique en solution RH
              </h1>
              <Link
                href="#countries"
                className="bg-white hover:py-5 hover:border-2 text-blue_itm_primary font-bold py-3 px-4 rounded-lg text-lg"
              >
                Trouvez ITM RH dans votre pays
              </Link>
            </div>
          </article>
        </div>
        <Image
          src={banner}
          className="inline w-full bg-center rounded-xl"
          fill
          alt="Bg"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    </section>
  );
}
