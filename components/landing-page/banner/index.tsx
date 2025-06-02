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
              <h1 className="text-white md:text-5xl text-3xl font-bold mb-8">
                ITM HR, votre partenaire stratégique en capital humain en
                Afrique
              </h1>
              <Link
                href="#countries"
                className="bg-white text-blue_itm_primary py-2 px-4 rounded-lg"
              >
                Find ITM Africa in your country
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
