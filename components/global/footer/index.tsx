import { getDictionary } from '@/get-dictionary';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logos/logo_rdc_blanc.png';

export default function Footer({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  return (
    <footer className="min-h-[70vh] bg-black_footer text-white">
      <div className="flex w-11/12 mx-auto py-10">
        <section className="w-1/3">
          <div>
            <Link href={`/${lang}`} className="block w-fit h-fit md:pr-5 mr-1">
              <Image
                src={logo.src}
                className="md:h-8 h-4 w-fit"
                height={90}
                width={100}
                alt="ITM Africa logo"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Link>
          </div>
          <p className="text-lg py-4 w-10/12">
            Restez informé des dernières fonctionnalités et versions en
            rejoignant notre newsletter.
          </p>
          <nav className="flex">
            <input
              className="py-3 px-4 text-black rounded w-full mr-6"
              type="text"
              placeholder="Votre email"
            />
            <button className="py-2 px-4 border rounded">S'abonner</button>
          </nav>
        </section>
        <section className="w-2/3"></section>
      </div>
      <section></section>
    </footer>
  );
}
