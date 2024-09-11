import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';
import HomePage from '@/components/pages/home';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const cookieStore = cookies();
  const isCountryDefined = cookieStore.has('country');

  if (isCountryDefined) {
    const countryName = cookieStore.get('country');
    permanentRedirect(`/${countryName}`);
  }
  console.log('Country exist', isCountryDefined);

  return (
    <>
      <HomePage params={lang} />
    </>
  );
}
