'use client';

import CardCountryChoice from '@/components/global/cards/countryChoice';
import SectionTitle from '@/components/global/section_title';
import { entities } from '@/lib/data';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function CountriesLandingPage() {
  const params: any = useParams();
  const lang: string = params.lang;
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <section>
      <div className="bg-white bg-[url('../public/pages/main/countries.png')] bg-contain bg-left bg-no-repeat">
        <div className="flex items-center h-full w-10/12 mx-auto py-10">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <SectionTitle text="ITM AFRICA" />
            <h1 className="text-blue_itm_good text-4xl font-bold mb-4">
              Trouvez ITM Africa dans votre pays
            </h1>
            <div className="h-[450px] overflow-scroll scrollbar-default">
              <div className="w-full h-full flex justify-between  pb-5 px-3  flex-wrap">
                {entities
                  ?.sort(function (a: any, b: any) {
                    const first: string = a[lang];
                    const last: string = b[lang];
                    return first?.localeCompare(last, undefined, {
                      sensitivity: 'base',
                    });
                  })
                  .map(function (item: any, index: number) {
                    return (
                      <CardCountryChoice
                        {...item}
                        closeModal={closeModal}
                        key={index}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
