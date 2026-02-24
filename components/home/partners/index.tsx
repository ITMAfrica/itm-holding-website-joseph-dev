import Image from 'next/image';
import { getDictionary } from '@/get-dictionary';
import { getCountryCode } from '@/helpers';
import { getPartnerLogosForCountry } from '@/lib/partners-logos';

export default function HomePartners({ params }: { params: any }) {
  const lang = params.lang;
  const countryCode = getCountryCode(params?.country);
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.home.partners;
  const logos = getPartnerLogosForCountry(countryCode);

  return (
    <section className="flex items-center py-20">
      <div className="w-full">
        <div className="md:w-9/12 w-11/12 mx-auto md:pb-12 pb-6">
          <h1 className="md:text-5xl text-3xl font-bold text-blue_itm_primary text-center mb-4">
            {data.title}
          </h1>
          <h3 className="text-xl text-center md:w-3/5 w-full mx-auto font-open text-black_itm">
            {data.subtitle}
          </h3>
        </div>
        <div className="md:w-9/12 w-11/12 mx-auto md:mt-10 mt-4">
          {logos.length === 12 ? (
            <>
              <ul className="flex md:justify-between justify-around items-center flex-wrap">
                {logos.slice(0, 5).map((logo, index) => (
                  <li key={index} className="mb-4 md:mb-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt ?? 'Partner'}
                      width={logo.width}
                      height={logo.height}
                    />
                  </li>
                ))}
              </ul>
              <ul className="flex justify-evenly flex-wrap md:mt-14 mt-5 lg:px-20">
                {logos.slice(5, 8).map((logo, index) => (
                  <li key={index} className="mb-4 md:mb-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt ?? 'Partner'}
                      width={logo.width}
                      height={logo.height}
                    />
                  </li>
                ))}
              </ul>
              <ul className="flex justify-evenly flex-wrap md:mt-14 mt-5 md:px-20">
                {logos.slice(8, 12).map((logo, index) => (
                  <li key={index} className="mb-4 md:mb-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt ?? 'Partner'}
                      width={logo.width}
                      height={logo.height}
                    />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className="flex justify-evenly items-center flex-wrap gap-y-5 md:gap-y-14 lg:px-20">
              {logos.map((logo, index) => (
                <li key={index} className="mb-4 md:mb-0 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt ?? 'Partner'}
                    width={logo.width}
                    height={logo.height}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
